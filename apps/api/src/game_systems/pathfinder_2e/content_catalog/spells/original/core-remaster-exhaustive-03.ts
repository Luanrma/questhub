import type { Pathfinder2eOriginalContentRecord } from '../../records'
import type { Pathfinder2eSpellData } from '../types'

export const PATHFINDER_2E_EXHAUSTIVE_03_SPELL_ORIGINALS: readonly Pathfinder2eOriginalContentRecord<Pathfinder2eSpellData>[] = [
  {
    "contentId": "pf2e:spell:spells-srd:know-the-way",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "tXa5vOu5giBNCjdR",
      "slug": "know-the-way",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:30969329f3e74c24887c8dd14757bca76e9b606b0fd6da6d4ce27fdeee59f9ad",
    "translatableHash": "sha256:c6e696f8dab34a7799ea8c903895b6038d2df0e1c8051ead06ada7f3cba8592d",
    "data": {
      "schemaVersion": 1,
      "name": "Know the Way",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "cantrip",
        "concentrate",
        "detection",
        "manipulate"
      ],
      "traditions": [
        "divine",
        "occult",
        "primal"
      ],
      "description": "In your mind's eye, you magically reorient yourself. You immediately know which direction is north (if it exists at your current location), and you can choose a location you were at within the last 24 hours and learn what direction it lies.\nHeightened (3rd) You can choose a location you were at within the last week.\nHeightened (7th) You can choose a location you were at regardless of how long ago you were there.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (3rd) You can choose a location you were at within the last week.\nHeightened (7th) You can choose a location you were at regardless of how long ago you were there."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:dizzying-colors",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "UKsIOWmMx4hSpafl",
      "slug": "dizzying-colors",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:e3354adacca76c11162fd31991882fe1fc267d0e14b4b2df9d34144ac0fe95c8",
    "translatableHash": "sha256:2f55a1a3e51597b42dde4164af33c587d238c22c8b4122ef075092905140c710",
    "data": {
      "schemaVersion": 1,
      "name": "Dizzying Colors",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "illusion",
        "incapacitation",
        "manipulate",
        "visual"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You unleash a swirling multitude of colors that overwhelms creatures based on their Will saves.\nCritical Success The creature is unaffected.\nSuccess The creature is Dazzled for 1 round.\nFailure The creature is Stunned 1, Blinded for 1 round, and dazzled for 1 minute.\nCritical Failure The creature is stunned for 1 round and blinded for 1 minute.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "15 cone",
      "duration": "1 or more rounds (see below)",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 223,
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
          "sourceId": "UKsIOWmMx4hSpafl",
          "name": "Dizzying Colors",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 335,
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
          "sourceId": "UKsIOWmMx4hSpafl",
          "name": "Dizzying Colors",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 398,
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
          "sourceId": "UKsIOWmMx4hSpafl",
          "name": "Dizzying Colors",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:tangle-vine",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "uZK2BYzPnxUBnDjr",
      "slug": "tangle-vine",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:4f99791ae31dd9d9c699e2d26fe5092d22608899b7c51895e6ebb441954c7db3",
    "translatableHash": "sha256:4549b4f9c5e55c6ed59406cfeea8391bf058ca596d288c66288c0d3debb744a8",
    "data": {
      "schemaVersion": 1,
      "name": "Tangle Vine",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "attack",
        "cantrip",
        "concentrate",
        "manipulate",
        "plant",
        "wood"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "A vine appears from thin air, flicking from your hand and lashing itself to the target. Attempt a spell attack roll against the target.\nSpell Effect: Tangle Vine\nCritical Success The target gains the Immobilized condition and takes a –10-foot circumstance penalty to its Speeds for 1 round. It can attempt to Escape against your spell DC to remove the penalty and the immobilized condition.\nSuccess The target takes a –10-foot circumstance penalty to its Speeds for 1 round. It can attempt to Escape against your spell DC to remove the penalty.\nFailure The target is unaffected.\nHeightened (2nd) The effects last for 2 rounds.\nHeightened (4th) The effects last for 1 minute.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (2nd) The effects last for 2 rounds.\nHeightened (4th) The effects last for 1 minute."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
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
          "sourceId": "uZK2BYzPnxUBnDjr",
          "name": "Tangle Vine",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
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
          "sourceId": "uZK2BYzPnxUBnDjr",
          "name": "Tangle Vine",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
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
          "sourceId": "uZK2BYzPnxUBnDjr",
          "name": "Tangle Vine",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:charm",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "vLA0q0WOK2YPuJs6",
      "slug": "charm",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/charm.webp"
    },
    "sourceHash": "sha256:b3ca8985d630db71e193ef89ca9e9a0bdf6480dac37011a8af0a01c2d99ab551",
    "translatableHash": "sha256:03160a0c6930f5fb87280e9fddf6a521f946b276dd737a2b886786b7a99c4185",
    "data": {
      "schemaVersion": 1,
      "name": "Charm",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "emotion",
        "incapacitation",
        "manipulate",
        "mental",
        "subtle"
      ],
      "traditions": [
        "arcane",
        "occult",
        "primal"
      ],
      "description": "To the target, your words are honey and your visage seems bathed in a dreamy haze. It must attempt a Will save, with a +4 circumstance bonus if you or your allies recently threatened it or used hostile actions against it.\nYou can Dismiss the spell. If you use hostile actions against the target, the spell ends. When the spell ends, the target doesn't necessarily realize it was charmed unless its friendship with you or the actions you convinced it to take clash with its expectations, meaning you could potentially convince the target to continue being your friend via mundane means.\nCritical Success The target is unaffected and aware you tried to charm it.\nSuccess The target is unaffected but thinks your spell was something harmless instead of charm, unless it identifies the spell.\nFailure The target's attitude becomes Friendly toward you. If it was Friendly, it becomes Helpful. It can't use hostile actions against you.\nCritical Failure The target's attitude becomes Helpful toward you, and it can't use hostile actions against you.\nHeightened (4th) The duration lasts until the next time you make your daily preparations.\nHeightened (8th) The duration lasts until the next time you make your daily preparations, and you can target up to 10 creatures.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 hour",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened (4th) The duration lasts until the next time you make your daily preparations.\nHeightened (8th) The duration lasts until the next time you make your daily preparations, and you can target up to 10 creatures."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 916,
        "uuid": "Compendium.pf2e.conditionitems.Item.Friendly",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Friendly",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Friendly",
          "sourceId": "v66R7FdOf11l94im",
          "name": "Friendly",
          "type": "condition"
        },
        "owner": {
          "sourceId": "vLA0q0WOK2YPuJs6",
          "name": "Charm",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1011,
        "uuid": "Compendium.pf2e.conditionitems.Item.Helpful",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Helpful",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Helpful",
          "sourceId": "v44P3WUcU1j0115l",
          "name": "Helpful",
          "type": "condition"
        },
        "owner": {
          "sourceId": "vLA0q0WOK2YPuJs6",
          "name": "Charm",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:message",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "vLzFcIaSXs7YTIqJ",
      "slug": "message",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/message.webp"
    },
    "sourceHash": "sha256:162ad49731ff04d87fde0d7bb615f567004ac3f26b98e8605fe65747702b590d",
    "translatableHash": "sha256:5659b3a6bbae5b49d101ac1bf6041e6e9c864f2e7328ec5d716ebee80eceb61e",
    "data": {
      "schemaVersion": 1,
      "name": "Message",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "auditory",
        "cantrip",
        "concentrate",
        "illusion",
        "linguistic",
        "mental",
        "subtle"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult"
      ],
      "description": "You mouth words quietly, but instead of coming out of your mouth, they're transferred directly to the ears of the target. While others can't hear your words any better than if you normally mouthed them, the target can hear your words as if they were standing next to you. The target can give a brief response as a reaction, or as a free action on their next turn if they wish, but they must be able to see you and be within range to do so. If they respond, their response is delivered directly to your ear, just like the original message.\nHeightened (3rd) The spell's range increases to 500 feet.",
      "castingTime": "1 action",
      "range": "120 feet",
      "target": "1 creature",
      "area": null,
      "duration": "see below",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (3rd) The spell's range increases to 500 feet."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:air-bubble",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "W69zswpj0Trdy5rj",
      "slug": "air-bubble",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/air-bubble.webp"
    },
    "sourceHash": "sha256:dabb847cc292c1bfabcf2d2c7dd0d34764ca5eb531b1e8e5131cfc6b3b7c0900",
    "translatableHash": "sha256:44c1ca806077f28d98b178606ea5707b792f8c4d7c632c14ca73d413b5bc63f7",
    "data": {
      "schemaVersion": 1,
      "name": "Air Bubble",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "air",
        "concentrate"
      ],
      "traditions": [
        "arcane",
        "divine",
        "primal"
      ],
      "description": "Trigger A creature within range enters an environment where it can't breathe.\nA bubble of pure air appears around the target's head, allowing it to breathe normally. The effect ends as soon as the target returns to an environment where it can breathe normally.",
      "castingTime": "reaction",
      "range": "60 feet",
      "target": "the triggering creature",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:light",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "WBmvzNDfpwka3qT4",
      "slug": "light",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/light.webp"
    },
    "sourceHash": "sha256:f97c661c50a57c1ab9964cddf735bae4a29192ab64c620c99c1a660f8a272cfe",
    "translatableHash": "sha256:c1b3b40f7eb12d4fb280b778859e350635657c8260118f29cc3de3faf7f0b7a5",
    "data": {
      "schemaVersion": 1,
      "name": "Light",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "cantrip",
        "concentrate",
        "light",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult",
        "primal"
      ],
      "description": "You create an orb of light that sheds bright light in a 20-foot radius (and dim light for the next 20 feet) in a color you choose. If you create the light in the same space as a willing creature, you can attach the light to the creature, causing it to float near that creature as it moves. You can Sustain the spell to move the light up to 60 feet; you can attach or detach it from a creature as part of this movement.\nYou can Dismiss the spell. If you Cast the Spell while you already have four light spells active, you must choose one of the existing spells to end.\nSpell Effect: Light\nHeightened (4th) The orb sheds light in a 60-foot radius (and dim light for the next 60 feet).",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "",
      "area": null,
      "duration": "until your next daily preparations",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) The orb sheds light in a 60-foot radius (and dim light for the next 60 feet)."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
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
          "sourceId": "WBmvzNDfpwka3qT4",
          "name": "Light",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:harm",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "wdA52JJnsuQWeyqz",
      "slug": "harm",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/harm.webp"
    },
    "sourceHash": "sha256:591c79aa7d1e4b959778310ec03a22786f6a05d031f69e1d979ef28a7a4fc09e",
    "translatableHash": "sha256:a04304dcaab0bccd6165bb71921fddc0750dfe9b0306626ff721ec8047af5b94",
    "data": {
      "schemaVersion": 1,
      "name": "Harm",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "manipulate",
        "void"
      ],
      "traditions": [
        "divine"
      ],
      "description": "You channel void energy to harm the living or heal the undead. If the target is a living creature, you deal 1d8 void damage to it, and it gets a basic Fortitude save. If the target is a willing undead creature, you restore that amount of Hit Points. The number of actions you spend when Casting this Spell determines its targets, range, area, and other parameters.\n1 The spell has a range of touch.\n2 (concentrate) The spell has a range of 30 feet. If you're healing an undead creature, increase the Hit Points restored by 8.\n3 (concentrate) You disperse void energy in a @Template[emanation|distance:30]. This targets all living and undead creatures in the area.\nHeightened (+1) The amount of healing or damage increases by 1d8, and the extra healing for the 2-action version increases by 8.",
      "castingTime": "1 to 3 actions",
      "range": "varies",
      "target": "1 living creature or 1 willing undead creature",
      "area": null,
      "duration": "",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "1d8",
          "type": "void",
          "kind": "damage-or-healing"
        }
      ],
      "heightening": "Heightened (+1) The amount of healing or damage increases by 1d8, and the extra healing for the 2-action version increases by 8."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:grease",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Wu0xFpewMKRK3HG8",
      "slug": "grease",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/grease.webp"
    },
    "sourceHash": "sha256:501261f22d4ed0a28eec3717df3494bde7fac561fc6c1e05e0bf33fbb8a3da08",
    "translatableHash": "sha256:0df519dbe48e5ba7548129a811ac1ef31291d1d5da7964455300fc3225a4f409",
    "data": {
      "schemaVersion": 1,
      "name": "Grease",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You conjure grease, choosing an area or target.\n• Area [4 contiguous 5-foot squares] All solid ground in the area is covered with grease. Each creature standing on the greasy surface must succeed at a Reflex save or an Acrobatics check against your spell DC or fall Prone. Creatures using an action to move onto the greasy surface during the spell's duration must attempt either a Reflex save or an Acrobatics check to Balance. A creature that Steps or Crawls doesn't have to attempt a check or save.\n• Target [1 object of Bulk 1 or less] If you Cast the Spell on an unattended object, anyone trying to pick up the object must succeed at an Acrobatics check or Reflex save against your spell DC to do so. If you target an attended object, the creature that has the object must attempt an Acrobatics check or Reflex save. On a failure, the holder or wielder takes a –2 circumstance penalty to all checks that involve using the object; on a critical failure, the holder or wielder releases the item. The object lands in an adjacent square of the GM's choice. If you Cast this Spell on a worn object, the wearer gains a +2 circumstance bonus to Fortitude saves against attempts to grapple them.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 object of Bulk 1 or less",
      "area": null,
      "duration": "1 minute",
      "defense": "reflex save",
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 314,
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
          "sourceId": "Wu0xFpewMKRK3HG8",
          "name": "Grease",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 510,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Balance",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Balance",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Balance",
          "sourceId": "M76ycLAqHoAgbcej",
          "name": "Balance",
          "type": "action"
        },
        "owner": {
          "sourceId": "Wu0xFpewMKRK3HG8",
          "name": "Grease",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:create-water",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "WzLKjSw6hsBhuklC",
      "slug": "create-water",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/create-water.webp"
    },
    "sourceHash": "sha256:ecf3eed37c61196b3cdf343a1886601740e66af09eaa7e9ba56bf96b65faae3b",
    "translatableHash": "sha256:a5cc3d381e13cd4b22cf8af748981d692b0ffa04ac8990bdc023bd4122b1c43a",
    "data": {
      "schemaVersion": 1,
      "name": "Create Water",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "water"
      ],
      "traditions": [
        "arcane",
        "divine",
        "primal"
      ],
      "description": "As you cup your hands, water begins to flow forth from them. You create 2 gallons of water. If no one drinks it, it evaporates after 1 day.",
      "castingTime": "2 actions",
      "range": "0 feet",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:ant-haul",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "X9dkmh23lFwMjrYd",
      "slug": "ant-haul",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:dc469c268ccaf3f94278241a568a2522314d70d102aba9457ad5272c810bec0b",
    "translatableHash": "sha256:133aea86be348f8d31381ff88a75da2121250ba4d3f3b1584e8db0d042dfbce4",
    "data": {
      "schemaVersion": 1,
      "name": "Ant Haul",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You reinforce the target's musculoskeletal system to bear more weight. The target can carry 3 more Bulk than normal before becoming Encumbered and up to a maximum of 6 more Bulk.\nSpell Effect: Ant Haul",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 creature",
      "area": null,
      "duration": "8 hours",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 135,
        "uuid": "Compendium.pf2e.conditionitems.Item.Encumbered",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Encumbered",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Encumbered",
          "sourceId": "D5mg6Tc7Jzrj6ro7",
          "name": "Encumbered",
          "type": "condition"
        },
        "owner": {
          "sourceId": "X9dkmh23lFwMjrYd",
          "name": "Ant Haul",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 232,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Ant Haul",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Ant Haul",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Ant Haul",
          "sourceId": "5yCL7InrJDHpaQjz",
          "name": "Spell Effect: Ant Haul",
          "type": "effect"
        },
        "owner": {
          "sourceId": "X9dkmh23lFwMjrYd",
          "name": "Ant Haul",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:phantasmal-minion",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "xqmHD8JIjak15lRk",
      "slug": "phantasmal-minion",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:cb3c7505b543964dfab7ab9e29a935e93bc389fbf0eccad44aaa0278cf4de242",
    "translatableHash": "sha256:d049672c2df5eab36ad24fdb14a33aaa4e10e2635f49458afc400fd0a084d3b0",
    "data": {
      "schemaVersion": 1,
      "name": "Phantasmal Minion",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "summon"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You summon a Phantasmal Minion. The minion is roughly the shape of a humanoid. You can choose to have it be Invisible or have an ephemeral appearance, but it's obviously a magical effect, not a real creature.",
      "castingTime": "3 actions",
      "range": "60 feet",
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
        "sourceIndex": 16,
        "uuid": "Compendium.pf2e.pathfinder-bestiary.Actor.Phantasmal Minion",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.pathfinder-bestiary.Actor.Phantasmal Minion",
          "package": "pf2e",
          "sourcePack": "pathfinder-bestiary",
          "documentType": "Actor",
          "compendiumKey": "Phantasmal Minion",
          "sourceId": "j7NNPfZwD19BwSEZ",
          "name": "Phantasmal Minion",
          "type": "npc"
        },
        "owner": {
          "sourceId": "xqmHD8JIjak15lRk",
          "name": "Phantasmal Minion",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 160,
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
          "sourceId": "xqmHD8JIjak15lRk",
          "name": "Phantasmal Minion",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:bless",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "XSujb7EsSwKl19Uu",
      "slug": "bless",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/bless.webp"
    },
    "sourceHash": "sha256:e678f45105a8f25212affb9a6e43f8326f66c2881122528590184a221884498c",
    "translatableHash": "sha256:2c42cb91064a3743cca1fad2ac1fdd004dfa1d5aa0957b65108dbc08d99e1d67",
    "data": {
      "schemaVersion": 1,
      "name": "Bless",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "aura",
        "concentrate",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "Blessings from beyond help your companions strike true. You and your allies gain a +1 status bonus to attack rolls while within the emanation. Once per round on subsequent turns, you can Sustain the spell to increase the emanation's radius by 10 feet.\nBless can counteract Bane.\nSpell Effect: Bless",
      "castingTime": "2 actions",
      "range": "",
      "target": "you and allies in the area",
      "area": "15 emanation",
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 283,
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
          "sourceId": "XSujb7EsSwKl19Uu",
          "name": "Bless",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 335,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Bless",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Bless",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Bless",
          "sourceId": "Gqy7K6FnbLtwGpud",
          "name": "Spell Effect: Bless",
          "type": "effect"
        },
        "owner": {
          "sourceId": "XSujb7EsSwKl19Uu",
          "name": "Bless",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:breathe-fire",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "y6rAdMK6EFlV6U0t",
      "slug": "breathe-fire",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/dragon-breath.webp"
    },
    "sourceHash": "sha256:1123d7388e65479e062f07380e1f0f46d7587f472ad0887dacb2d3961d1bf2dd",
    "translatableHash": "sha256:3fccf6de1396b44583fb67a39617efe45b8bd6f0880b55c4f75f3013a4a05f57",
    "data": {
      "schemaVersion": 1,
      "name": "Breathe Fire",
      "rank": 1,
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
      "description": "A gout of flame sprays from your mouth. You deal 2d6 fire damage to creatures in the area with a basic Reflex save.\nHeightened (+1) The damage increases by 2d6.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "15 cone",
      "duration": "",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "2d6",
          "type": "fire",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+1) The damage increases by 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:spirit-link",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "yHujiDQPdtXW797e",
      "slug": "spirit-link",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:46fc3bafeede276d8f8030b6b709bf6ac5b631b2c5d83d5fa4e62507f608895f",
    "translatableHash": "sha256:cfd2560017c8fc412307ab1f9ce89cb3f745aa5bd1d2fc1f40a05640c16a4844",
    "data": {
      "schemaVersion": 1,
      "name": "Spirit Link",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "healing",
        "manipulate",
        "spirit"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "You form a spiritual link with another creature, taking in its pain. When you Cast this Spell and at the start of each of your turns, if the target is below maximum Hit Points, it regains 2 Hit Points (or the difference between its current and maximum Hit Points, if that's lower). You lose as many Hit Points as the target regained.\nThis is a spiritual transfer, so no effects apply that would increase the Hit Points the target regains or decrease the Hit Points you lose. This transfer also ignores any temporary Hit Points you or the target have. Since this effect doesn't involve vitality or void energy, spirit link works even if you or the target is undead. While the duration persists, you gain no benefit from regeneration or fast healing. You can Dismiss this spell, and if you're ever at 0 Hit Points, spirit link ends automatically.\nHeightened (+1) The number of Hit Points transferred each time increases by 2.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 willing creature",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [
        {
          "formula": "2",
          "type": "untyped",
          "kind": "healing"
        }
      ],
      "heightening": "Heightened (+1) The number of Hit Points transferred each time increases by 2."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:ventriloquism",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "yV7Ouzaoe7DHLESI",
      "slug": "ventriloquism",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:c255c919c1a13ff70782ff114a3a19db39ebcc45cb8face8eac864e77b21a747",
    "translatableHash": "sha256:4021c5701ab9cc4a4ede10cc9aa0754c16475ebfb6a26e5c88bed1fe08a55612",
    "data": {
      "schemaVersion": 1,
      "name": "Ventriloquism",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "auditory",
        "concentrate",
        "illusion",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult",
        "primal"
      ],
      "description": "Whenever you speak or make any other sound vocally, you can make your vocalization seem to originate from somewhere else within 60 feet, and you can change that apparent location freely as you vocalize. Any creature that hears the sound can attempt to disbelieve your illusion.\nHeightened (2nd) The spell's duration increases to 1 hour, and you can also change the tone, quality, and other aspects of your voice. Before a creature can attempt to disbelieve your illusion, it must actively attempt a Perception check or otherwise use actions to interact with the sound.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (2nd) The spell's duration increases to 1 hour, and you can also change the tone, quality, and other aspects of your voice. Before a creature can attempt to disbelieve your illusion, it must actively attempt a Perception check or otherwise use actions to interact with the sound."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:summon-instrument",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "yvs1zN5Pai5U4CJX",
      "slug": "summon-instrument",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/summon-instrument.webp"
    },
    "sourceHash": "sha256:3858f9df6e00ecfbd71b6b46a84e5a19e7d774fc1191181f8e489c86b8c78baf",
    "translatableHash": "sha256:3928c22a174a57b30fe78a639b2637de466c49907d913922de62627884da8c4e",
    "data": {
      "schemaVersion": 1,
      "name": "Summon Instrument",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "cantrip",
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult"
      ],
      "description": "You materialize a Musical Instrument (Handheld) in your grasp. The instrument is typical for its type, but it plays only for you. It vanishes when the spell ends. If you cast summon instrument again, any instrument you previously summoned disappears.\nHeightened (5th) The instrument is instead a Musical Instrument (Virtuoso handheld).",
      "castingTime": "3 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (5th) The instrument is instead a Musical Instrument (Virtuoso handheld)."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 21,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Musical Instrument (Handheld)",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Musical Instrument (Handheld)",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Musical Instrument (Handheld)",
          "sourceId": "MPv5Yx4w7scZGj2Y",
          "name": "Musical Instrument (Handheld)",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "yvs1zN5Pai5U4CJX",
          "name": "Summon Instrument",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 381,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Musical Instrument (Virtuoso handheld)",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Musical Instrument (Virtuoso handheld)",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Musical Instrument (Virtuoso handheld)",
          "sourceId": "3ld14dsn2RLu9owg",
          "name": "Musical Instrument (Virtuoso handheld)",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "yvs1zN5Pai5U4CJX",
          "name": "Summon Instrument",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:thunderstrike",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "zDJS8E66UI0himqV",
      "slug": "thunderstrike",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/shocking-grasp.webp"
    },
    "sourceHash": "sha256:463f8dd7be1ee063c3a6fdcb91354b2d9cdfb95944d5975297b86c7355131968",
    "translatableHash": "sha256:cd61c579eff1c0313e350dfe75605a3da896246a914e59db0b801c8b4b98337f",
    "data": {
      "schemaVersion": 1,
      "name": "Thunderstrike",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "electricity",
        "manipulate",
        "sonic"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You call down a tendril of lightning that cracks with thunder, dealing 1d12 electricity damage and 1d4 sonic damage to the target with a basic Reflex save. A target wearing metal armor or made of metal takes a –1 circumstance bonus to its save, and if damaged by the spell is Clumsy 1 for 1 round.\nHeightened (+1) The damage increases by 1d12 electricity and 1d4 sonic.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "1d12",
          "type": "electricity",
          "kind": "damage"
        },
        {
          "formula": "1d4",
          "type": "sonic",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+1) The damage increases by 1d12 electricity and 1d4 sonic."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 279,
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
          "sourceId": "zDJS8E66UI0himqV",
          "name": "Thunderstrike",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:goblin-pox",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "zJQnkKEKbJqGB3iB",
      "slug": "goblin-pox",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:8a602c07768859fb84476a9d85d9ba5ada6e53c4be33e5955bbd258ed8c95e15",
    "translatableHash": "sha256:7cd53b760f66d104ed3b18679e730a447cd64224104dac3639ba95811889e7d8",
    "data": {
      "schemaVersion": 1,
      "name": "Goblin Pox",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "disease",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "Your touch afflicts the target with goblin pox, an irritating allergenic rash. The target must attempt a Fortitude save.\nGoblin Pox (disease) Level 1; Creatures that have the goblin trait and goblin dogs are immune\nStage 1 Sickened 1 (1 round)\nStage 2 Sickened 1 and Slowed 1 (1 round)\nStage 3 Sickened 1 and the creature can't reduce its Sickened value below 1 (1 day)\nCritical Success The target is unaffected.\nSuccess The target is Sickened 1.\nFailure The target is afflicted with goblin pox at stage 1.\nCritical Failure The target is afflicted with goblin pox at stage 2.",
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
        "sourceIndex": 298,
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
          "sourceId": "zJQnkKEKbJqGB3iB",
          "name": "Goblin Pox",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 404,
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
          "sourceId": "zJQnkKEKbJqGB3iB",
          "name": "Goblin Pox",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 472,
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
          "sourceId": "zJQnkKEKbJqGB3iB",
          "name": "Goblin Pox",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 574,
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
          "sourceId": "zJQnkKEKbJqGB3iB",
          "name": "Goblin Pox",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 823,
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
          "sourceId": "zJQnkKEKbJqGB3iB",
          "name": "Goblin Pox",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:vanishing-tracks",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "zlnXpME1T2uvn8Lr",
      "slug": "vanishing-tracks",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:b834432248cce5fbdfd07f9b6d7bededcc51937e43cfbe3cb66468c793dc23d9",
    "translatableHash": "sha256:819252c1a694144cb8c44eb9c0ce46d5206afd5c54f581834eb451dcc4369fe8",
    "data": {
      "schemaVersion": 1,
      "name": "Vanishing Tracks",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "primal"
      ],
      "description": "You obscure the tracks you leave behind. The DC of checks to Track you gains a +4 status bonus or is equal to your spell DC, whichever results in a higher DC.\nHeightened (2nd) The duration increases to 8 hours.\nHeightened (4th) The duration increases to 8 hours. The spell has a range of 20 feet and targets up to 10 creatures.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (2nd) The duration increases to 8 hours.\nHeightened (4th) The duration increases to 8 hours. The spell has a range of 20 feet and targets up to 10 creatures."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:revealing-light",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "0qaqksrGGDj74HXE",
      "slug": "revealing-light",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/glitterdust.webp"
    },
    "sourceHash": "sha256:f15230b9160ee35b3ba57fc2ef2cfcae764da002ea85816edf1f5dfec065e79c",
    "translatableHash": "sha256:4fbfd59fb0ede69badcb2b01709bb6c9407b945661b56aee130c860d117d0627",
    "data": {
      "schemaVersion": 1,
      "name": "Revealing Light",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "light",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult",
        "primal"
      ],
      "description": "A wave of magical light washes over the area. You choose the appearance of the light, such as colorful, heatless flames or sparkling motes. A creature affected by revealing light is Dazzled. If the creature was Invisible, it becomes Concealed instead. If the creature was already concealed for any other reason, it is no longer concealed.\nCritical Success The target is unaffected.\nSuccess The light affects the creature for 2 rounds.\nFailure The light affects the creature for 1 minute.\nCritical Failure The light affects the creature for 10 minutes.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "",
      "area": "10 burst",
      "duration": "varies",
      "defense": "reflex save",
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
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
          "sourceId": "0qaqksrGGDj74HXE",
          "name": "Revealing Light",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
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
          "sourceId": "0qaqksrGGDj74HXE",
          "name": "Revealing Light",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
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
          "sourceId": "0qaqksrGGDj74HXE",
          "name": "Revealing Light",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:shatter",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "1xbFBQDRs0hT5xZ9",
      "slug": "shatter",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:86f5b549ef4d47c558b27b897d37d94f1b9865aacb65d6623f2a58b47a2c3183",
    "translatableHash": "sha256:e040961ff552df539820a8d9b44ec3a67d059178e621c65ee58324ddbb29c217",
    "data": {
      "schemaVersion": 1,
      "name": "Shatter",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "sonic"
      ],
      "traditions": [
        "occult",
        "primal"
      ],
      "description": "A high-frequency sonic attack shatters a nearby object. You deal 2d10 sonic damage to the object, ignoring the object's Hardness if it is 4 or lower.\nHeightened (+1) The damage increases by 1d10, and the Hardness the spell ignores increases by 2.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 unattended object",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [
        {
          "formula": "2d10",
          "type": "sonic",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+1) The damage increases by 1d10, and the Hardness the spell ignores increases by 2."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:humanoid-form",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "2qGqa33E4GPUCbMV",
      "slug": "humanoid-form",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/humanoid-form.webp"
    },
    "sourceHash": "sha256:f54fe67aef632736a8a7c6087c7e3e610b21db32296647e555531ae22e73d629",
    "translatableHash": "sha256:5553e376707b2a1ffec6ef71513945bf9d6b7209c37364f17a3146982036c227",
    "data": {
      "schemaVersion": 1,
      "name": "Humanoid Form",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "polymorph"
      ],
      "traditions": [
        "arcane",
        "occult",
        "primal"
      ],
      "description": "You transform your appearance to that of a Small or Medium humanoid, such as a dwarf, elf, goblin, halfling, human, or orc. You gain the humanoid trait in addition to your other traits while in this form, as well as any trait related to the creature's kind (such as goblin or human). If this transformation reduces your size, it reduces your reach accordingly (typically to 5 feet). This transformation doesn't change your statistics in any way, and you don't gain any special abilities of the humanoid form you assume. You can still wear and use your gear, which changes size (if necessary) to match your new form. If items leave your person, they return to their usual size.\nHumanoid form grants you a +4 status bonus to Deception checks to pass as a generic member of the chosen ancestry, and you add your level even if you're untrained, but you can't make yourself look like a specific person. If you want to Impersonate an individual, you still need to create a disguise, though the GM won't factor in the difference in ancestry when determining the DC of your Deception check. You can Dismiss this spell.\nSpell Effect: Humanoid Form\nHeightened (3rd) You gain darkvision or low-light vision if the form you assume has that ability.\nHeightened (5th) You can take on the appearance of a Large humanoid. If this increases your size, you gain the effects of the enlarge spell.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (3rd) You gain darkvision or low-light vision if the form you assume has that ability.\nHeightened (5th) You can take on the appearance of a Large humanoid. If this increases your size, you gain the effects of the enlarge spell."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1128,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Humanoid Form",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Humanoid Form",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Humanoid Form",
          "sourceId": "B9Hzt4ki8eqlXxyh",
          "name": "Spell Effect: Humanoid Form",
          "type": "effect"
        },
        "owner": {
          "sourceId": "2qGqa33E4GPUCbMV",
          "name": "Humanoid Form",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:floating-flame",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "2ZdHjnpEQJuqOYSG",
      "slug": "floating-flame",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:4ba92a459010e5d7573880de809428a312802e00b13142be9c4762c80e5b361f",
    "translatableHash": "sha256:92390e5e17d04e1294c3287f0949b61edea46a7c0356691863abf3e45eca9ffd",
    "data": {
      "schemaVersion": 1,
      "name": "Floating Flame",
      "rank": 2,
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
      "description": "You create a fire that burns without fuel and moves to your commands. The flame deals 3d6 fire damage to each creature in the square in which it appears, with a basic Reflex save. When you Sustain this spell, you can levitate the flame up to 10 feet. It then deals damage to each creature whose space it shared at any point during its flight. This uses the same damage and save, and you roll the damage once each time you Sustain. A given creature can take damage from floating flame only once per round.\nHeightened (+1) The damage increases by 1d6.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "",
      "area": "5 square",
      "duration": "1 minute",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "3d6",
          "type": "fire",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+1) The damage increases by 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:blur",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "3JG1t3T4mWn6vTke",
      "slug": "blur",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/blur.webp"
    },
    "sourceHash": "sha256:020c78953acca74c710609464cc6dac38386f9d668427d0f523516c0d6c6cf5c",
    "translatableHash": "sha256:63366efbfee198f2432edc236f5fc268a459448ebdb69869608f75b28b3923b6",
    "data": {
      "schemaVersion": 1,
      "name": "Blur",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "illusion",
        "manipulate",
        "visual"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "The target's form appears blurry. It becomes Concealed. As the nature of this effect still leaves the target's location obvious, the target can't use this concealment to Hide or Sneak.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 48,
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
          "sourceId": "3JG1t3T4mWn6vTke",
          "name": "Blur",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:augury",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "41TZEjhO6D1nWw2X",
      "slug": "augury",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/augury.webp"
    },
    "sourceHash": "sha256:3617ba18a556f53c5df869347ab817ef1563977f5681b87a8f1aef607483e250",
    "translatableHash": "sha256:2a8a3e0432093acbfd43b96adefb083db2142122388447bbd0396db1e7792f36",
    "data": {
      "schemaVersion": 1,
      "name": "Augury",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "prediction"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "You gain a vague glimpse of the future. During the casting of this spell, ask about the results of a particular course of action. The spell can predict results up to 30 minutes into the future and reveal the GM's best guess among the following outcomes: good, bad, mixed (the results will be a mix of good and bad), and nothing (there won't be particularly good or bad results).\nThe GM rolls a secret check (flat, dc:6, showDC:all, traits:secret). On a failure, the result is always \"nothing.\" This makes it impossible to tell whether a \"nothing\" result is accurate. If anyone asks about the same topic as the first casting of augury during an additional casting, the GM uses the secret roll result from the first casting. If circumstances change, though, it's possible to get a different result.",
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
    "contentId": "pf2e:spell:spells-srd:darkness",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "4GE2ZdODgIQtg51c",
      "slug": "darkness",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/darkness.webp"
    },
    "sourceHash": "sha256:6127304ff8af2866a166b8a51df00cf0f540d14632c7ce91978b34d893d347ab",
    "translatableHash": "sha256:035510f37207c178df6fa6f1d219a1263f3a1c4eeee269847119fedfc0084b9c",
    "data": {
      "schemaVersion": 1,
      "name": "Darkness",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "darkness",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult",
        "primal"
      ],
      "description": "You create a shroud of darkness that prevents light from penetrating or emanating within the area. Light does not enter the area and any non-magical light sources, such as a torch or lantern, do not emanate any light while inside the area, even if their light radius would extend beyond the darkness. This also suppresses magical light of your darkness spell's rank or lower. Light can't pass through, so creatures in the area can't see outside. From outside, it appears as a globe of pure darkness.\nHeightened (4th) Even creatures with darkvision (but not greater darkvision) can barely see through the darkness. They treat targets seen through the darkness as Concealed.",
      "castingTime": "3 actions",
      "range": "120 feet",
      "target": "",
      "area": "20 burst",
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) Even creatures with darkvision (but not greater darkvision) can barely see through the darkness. They treat targets seen through the darkness as Concealed."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
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
          "sourceId": "4GE2ZdODgIQtg51c",
          "name": "Darkness",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:environmental-endurance",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "5esP2GVzvxWsMgaX",
      "slug": "environmental-endurance",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/endure-elements.webp"
    },
    "sourceHash": "sha256:6b5461b674de727dc4dd87f24507c6d4ee1733408c876ae14f6aa2851b62dd68",
    "translatableHash": "sha256:ff244818cbc87a6cbf35d690d5690a13c09a033c3b2bafd01df015ddb9e60f5a",
    "data": {
      "schemaVersion": 1,
      "name": "Environmental Endurance",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "divine",
        "primal"
      ],
      "description": "You shield the target against dangerous temperatures. Choose severe cold or heat. The target is protected from the temperature you chose (but not extreme cold or heat).\nHeightened (3rd) The target is protected from severe cold and severe heat.\nHeightened (5th) The target is protected from severe cold, severe heat, extreme cold, and extreme heat.",
      "castingTime": "10 minutes",
      "range": "touch",
      "target": "1 willing creature",
      "area": null,
      "duration": "until your next daily preparations",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (3rd) The target is protected from severe cold and severe heat.\nHeightened (5th) The target is protected from severe cold, severe heat, extreme cold, and extreme heat."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:gecko-grip",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "5KobTMrZeZxuXMgl",
      "slug": "gecko-grip",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:496353587d2463842a84ba7fc35745434e210f8f773df860c30d480daad8032e",
    "translatableHash": "sha256:498aca0ca6f8de4e618b7abb1b8da94497c0c9407d6f9325bf6997c82916f942",
    "data": {
      "schemaVersion": 1,
      "name": "Gecko Grip",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "Tiny clinging hairs sprout across the creature's hands and feet, offering purchase on nearly any surface. The target gains a climb Speed equal to its Speed.\nHeightened (5th) The duration increases to 1 hour.\nSpell Effect: Gecko Grip",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 creature",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (5th) The duration increases to 1 hour.\nSpell Effect: Gecko Grip"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 249,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Gecko Grip",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Gecko Grip",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Gecko Grip",
          "sourceId": "qn7uO5Ih01yLJot7",
          "name": "Spell Effect: Gecko Grip",
          "type": "effect"
        },
        "owner": {
          "sourceId": "5KobTMrZeZxuXMgl",
          "name": "Gecko Grip",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:knock",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "6Ot4N22t5tPD51BO",
      "slug": "knock",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:386756fd5fe61aac42721b9f6e7c1ecab7b01ca125bb2f0feb88578f10942708",
    "translatableHash": "sha256:e9a5048c339fc58600f87a73c7ac1a0e8148e1d88f1a472603d4a2df9be03982",
    "data": {
      "schemaVersion": 1,
      "name": "Knock",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You make the target easier to open. Knock grants a +4 status bonus to any creature that tries to open the target door, lock, or container with an Athletics or a Thievery check. You can attempt a Thievery check to open the target as part of casting knock, and you add your level even if you're untrained.\nKnock counteracts Lock.\nSpell Effect: Knock",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 door, lock, or container",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 341,
        "uuid": "Compendium.pf2e.spells-srd.Item.Lock",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Lock",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Lock",
          "sourceId": "Azoh0BSoCASrA1lr",
          "name": "Lock",
          "type": "spell"
        },
        "owner": {
          "sourceId": "6Ot4N22t5tPD51BO",
          "name": "Knock",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 393,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Knock",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Knock",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Knock",
          "sourceId": "OSapCU8heNHst21y",
          "name": "Spell Effect: Knock",
          "type": "effect"
        },
        "owner": {
          "sourceId": "6Ot4N22t5tPD51BO",
          "name": "Knock",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:false-vitality",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "8ViwItUgwT4lOvvb",
      "slug": "false-vitality",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/false-life.webp"
    },
    "sourceHash": "sha256:5ca820af26bf3d7955a807a09f3dd7acdb7f6c7c244e99c9927e4ed6a848c1b6",
    "translatableHash": "sha256:286e055fc2b38647efb5434648950e4576ff3945ad8dc34f41f3c0a946c7bf9e",
    "data": {
      "schemaVersion": 1,
      "name": "False Vitality",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You augment your flesh with the energies typically used to manipulate the undead. You gain 10 temporary Hit Points.\nHeightened (+1) The temporary Hit Points increase by 3.\nSpell Effect: False Vitality",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "8 hours",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (+1) The temporary Hit Points increase by 3.\nSpell Effect: False Vitality"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 213,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: False Vitality",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: False Vitality",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: False Vitality",
          "sourceId": "PANUWN5xXC20WBg2",
          "name": "Spell Effect: False Vitality",
          "type": "effect"
        },
        "owner": {
          "sourceId": "8ViwItUgwT4lOvvb",
          "name": "False Vitality",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:acid-grip",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "9h9YCncqah6VNsKf",
      "slug": "acid-grip",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:e95982d5c0c527010022f0bccdb515b2e543975dfe3464425e8a63a6ce7f36d9",
    "translatableHash": "sha256:9e2869c6785168183a4265db5c16a8467cf8a3baf0a73cc2e606f833b39c4984",
    "data": {
      "schemaVersion": 1,
      "name": "Acid Grip",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "acid",
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "An ephemeral, taloned hand grips the target, burning it with magical acid. The target takes 2d8 acid damage plus floor(@item.level/2)d6[persistent,acid] damage depending on its Reflex save. A creature taking persistent damage from this spell takes a –10-foot status penalty to its Speeds. Spell Effect: Acid Grip\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage and no persistent damage, and the claw moves it up to 5 feet in a direction of your choice.\nFailure The creature takes full damage and persistent damage, and the claw moves it up to 10 feet in a direction of your choice.\nCritical Failure The creature takes double damage and full persistent damage, and the claw moves it up to 20 feet in a direction of your choice.\nHeightened (+2) The initial damage increases by 2d8, and the persistent acid damage increases by 1d6.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "2d8",
          "type": "acid",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+2) The initial damage increases by 2d8, and the persistent acid damage increases by 1d6."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 301,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Acid Grip",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Acid Grip",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Acid Grip",
          "sourceId": "6TGcfVyzzVHEo7ke",
          "name": "Spell Effect: Acid Grip",
          "type": "effect"
        },
        "owner": {
          "sourceId": "9h9YCncqah6VNsKf",
          "name": "Acid Grip",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:mist",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "9XHmC2JgTUIQ1CCm",
      "slug": "mist",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:4bdebfe1094614454c50a171fa546f603cc327f6481015097fa2961058332093",
    "translatableHash": "sha256:6b6ab927e55773cff862f1f9163dfe9469b955946f963d9fdcfa7b70f2249471",
    "data": {
      "schemaVersion": 1,
      "name": "Mist",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "water"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You call forth a cloud of mist. All creatures within the mist become Concealed, and all creatures outside the mist become concealed to creatures within it. You can Dismiss the cloud.",
      "castingTime": "3 actions",
      "range": "120 feet",
      "target": "",
      "area": "20 burst",
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 72,
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
          "sourceId": "9XHmC2JgTUIQ1CCm",
          "name": "Mist",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:calm",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "b515AZlB0sridKSq",
      "slug": "calm",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:de0478fc508b79b0715c7f6cf4b8245734d8b134f104e586223f163cc32e6a38",
    "translatableHash": "sha256:2b13381fbb6728d068bbd207c861ce42d746bc0d28047d9bd167a8ad4b1c7753",
    "data": {
      "schemaVersion": 1,
      "name": "Calm",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "emotion",
        "incapacitation",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "You forcibly calm creatures in the area, soothing them into a nonviolent state; each creature must attempt a Will save.\nCritical Success The creature is unaffected.\nSuccess Calming urges impose a -1 status penalty to the creature's attack rolls.\nFailure Any emotion effects that would affect the creature are suppressed and the creature can't use hostile actions. If the target is subject to hostility from any other creature, it ceases to be affected by calm.\nCritical Failure As failure, but hostility doesn't end the effect.\nSpell Effect: Calm",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "",
      "area": "10 burst",
      "duration": "1 minute",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 650,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Calm",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Calm",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Calm",
          "sourceId": "Qr5rgoZvI4KmFY0N",
          "name": "Spell Effect: Calm",
          "type": "effect"
        },
        "owner": {
          "sourceId": "b515AZlB0sridKSq",
          "name": "Calm",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:speak-with-animals",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "BBvV7qoXGdw09q1C",
      "slug": "speak-with-animals",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:c3b3ca8ba9e5679f1f49543ddf79e40317d5bc5f0aeab03d0fbd87c54e980066",
    "translatableHash": "sha256:b4907479515b24361b2cec4b68ace7b3b9ed6d837a1eea1a0ec4504aba0fb25b",
    "data": {
      "schemaVersion": 1,
      "name": "Speak with Animals",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "primal"
      ],
      "description": "You can ask questions of, receive answers from, and use the Diplomacy skill with animals. The spell doesn't make them more friendly than normal. Cunning animals are likely to be terse and evasive, while less intelligent ones often make inane comments.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:sure-footing",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "BCuHKrDeJ4eq53M6",
      "slug": "sure-footing",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/etheral-jaunt.webp"
    },
    "sourceHash": "sha256:57458b7bcc1599af663c98ff56bfce54dd3a98829e6b91045fef41f41a8f7610",
    "translatableHash": "sha256:1bfc65cfa3907e2b7cffca7c437df414ad0ca2cbc39e6a11211b0ee02f5e9bcc",
    "data": {
      "schemaVersion": 1,
      "name": "Sure Footing",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "healing",
        "manipulate"
      ],
      "traditions": [
        "divine",
        "occult",
        "primal"
      ],
      "description": "You free the target's limbs from ailments that impede mobility. Attempt to counteract an effect of your choice imposing one of these conditions on the target: Clumsy, Grabbed, or Paralyzed. If you didn't counteract the effect, but you would have if its counteract rank were 2 lower, instead suppress the effect until the beginning of your next turn. The effect's duration doesn't elapse while it's suppressed.\nThis spell can't counteract or suppress curses, diseases, or conditions that are part of the target's normal state.\nHeightened (4th) Add Immobilized, Slowed, and Restrained to the list of conditions.\nHeightened (6th) As 4th rank, plus add Petrified\nHeightened (8th) As 4th rank, plus add petrified and Stunned.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 willing creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) Add Immobilized, Slowed, and Restrained to the list of conditions.\nHeightened (6th) As 4th rank, plus add Petrified\nHeightened (8th) As 4th rank, plus add petrified and Stunned."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 162,
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
          "sourceId": "BCuHKrDeJ4eq53M6",
          "name": "Sure Footing",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 213,
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
          "sourceId": "BCuHKrDeJ4eq53M6",
          "name": "Sure Footing",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 268,
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
          "sourceId": "BCuHKrDeJ4eq53M6",
          "name": "Sure Footing",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 715,
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
          "sourceId": "BCuHKrDeJ4eq53M6",
          "name": "Sure Footing",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 771,
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
          "sourceId": "BCuHKrDeJ4eq53M6",
          "name": "Sure Footing",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 826,
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
          "sourceId": "BCuHKrDeJ4eq53M6",
          "name": "Sure Footing",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 970,
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
          "sourceId": "BCuHKrDeJ4eq53M6",
          "name": "Sure Footing",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1100,
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
          "sourceId": "BCuHKrDeJ4eq53M6",
          "name": "Sure Footing",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:stupefy",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "CQb8HtQ1BPeZmu9h",
      "slug": "stupefy",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/feeblemind.webp"
    },
    "sourceHash": "sha256:5995ae3df52c8511d272f2a6445c9e9ba73ac58278d373886ba30d881f0fe640",
    "translatableHash": "sha256:6aae23ca8b783eb7ed45ef93e88a31880f3740462a1b827db21c05f27981256e",
    "data": {
      "schemaVersion": 1,
      "name": "Stupefy",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You dull the target's mind, depending on its Will save.\nCritical Success The target is unaffected.\nSuccess The target is Stupefied 1 until the start of your next turn.\nFailure The target is Stupefied 2 for 1 minute.\nCritical Failure The target is Stupefied 3 for 1 minute.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "varies",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 179,
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
          "sourceId": "CQb8HtQ1BPeZmu9h",
          "name": "Stupefy",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 326,
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
          "sourceId": "CQb8HtQ1BPeZmu9h",
          "name": "Stupefy",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 461,
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
          "sourceId": "CQb8HtQ1BPeZmu9h",
          "name": "Stupefy",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:shape-wood",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "CXICME10TkEJxz0P",
      "slug": "shape-wood",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:8b876d08bc338311acda6595fce74596f58eb2cc64a46b2b53db5636fd0dd013",
    "translatableHash": "sha256:aa2636fc604241eed50a2a97138e32ef35c007fa38f138268d7e03920cc2e352",
    "data": {
      "schemaVersion": 1,
      "name": "Shape Wood",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "plant",
        "wood"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You shape the wood into a rough shape of your choice. The shaping power is too crude to produce with intricate parts, fine details, moving pieces, or the like. You cannot use this spell to enhance the value of the wooden object you are shaping.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "an unworked piece of wood up to 20 cubic feet in volume",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:share-life",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "d7Lwx6KAs47MtF0q",
      "slug": "share-life",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/shield-other.webp"
    },
    "sourceHash": "sha256:24d2e25cf6991d0363fcca1cf1bb136c0fc0769e53a45b1a9de33ee01543234a",
    "translatableHash": "sha256:903e3372004531d5800f24286014b1f44514412fe37c9f971942dd8a68f26f17",
    "data": {
      "schemaVersion": 1,
      "name": "Share Life",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "divine"
      ],
      "description": "You forge a temporary link between the target's life essence and your own. The target takes half damage from all effects that deal Hit Point damage, and you take the remainder of the damage. When you take damage through this link, you don't apply any resistances, weaknesses, or other abilities you have to that damage; you simply take that amount of damage. The spell ends if the target is ever more than 30 feet away from you. If either you or the target is reduced to 0 Hit Points, any damage from this spell is resolved and then the spell ends.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:one-with-plants",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "dileJ0Yxqg76LMvu",
      "slug": "one-with-plants",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:562cd371ccb3593b207604ae01163dfa5f88eb8824a8d59697976f4365669819",
    "translatableHash": "sha256:114bb9b342c890724f6c00a33e6e9905132602be0f66a6b995e5de44a70c1ca1",
    "data": {
      "schemaVersion": 1,
      "name": "One with Plants",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "plant",
        "polymorph",
        "wood"
      ],
      "traditions": [
        "primal"
      ],
      "description": "You can either transform into a plant or merge with plant matter. While transformed, you can't move or affect anything outside the plant, but you can cast spells as long as they don't require line of effect beyond the plant. You can Dismiss this spell.\n• Merge with Plants The spell's duration is 10 minutes. While casting the spell, you must touch a plant with enough volume to fit you and your possessions or the spell is disrupted. While merged, you can hear, but not see, what's going on outside the plant. If the plant takes damage while you're inside it, you're expelled from the plant and take 10d6 damage. Magic passage expels you without dealing damage. The spell ends if you're ever outside the plant.\n• Turn into a Plant The spell's duration is 8 hours. You become a Large plant—typically a tree. Perception checks don't reveal your true nature, but a successful Nature or Survival check against your spell DC reveals that you appear to be a plant that is strangely new to the area. While in this form, you can observe everything around you, using your normal senses. As a plant, your AC is 20, and only status bonuses, status penalties, circumstance bonuses, and circumstance penalties affect you. Any successes and critical successes you roll on Reflex saves are failures",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "10 minutes or 8 hours",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  }
]
