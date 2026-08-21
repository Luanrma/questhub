import type { Pathfinder2eOriginalContentRecord } from '../../records'
import type { Pathfinder2eSpellData } from '../types'

export const PATHFINDER_2E_EXHAUSTIVE_16_SPELL_ORIGINALS: readonly Pathfinder2eOriginalContentRecord<Pathfinder2eSpellData>[] = [
  {
    "contentId": "pf2e:spell:spells-srd:elemental-zone",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "kMffb6SvhCBMMI4k",
      "slug": "elemental-zone",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:2d7ac2f9feba2f00dd5f0e3de5504a9ff6c9642c7afe55471c33e125c895367d",
    "translatableHash": "sha256:d1f9fd9cc16a22fd2f9c492f63352fa7ab405dfd1a0c12c4cfed79c7610bf5d8",
    "data": {
      "schemaVersion": 1,
      "name": "Elemental Zone",
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
      "description": "Select an elemental trait: air, earth, fire, metal, water, or wood. Elemental zone gains the trait you chose. You imbue the area with the raw energy of that element, creating a zone that emits and amplifies magic of that type. The temperature might suddenly rise or fall, a storm cloud might form, and so on. Spells with the chosen elemental trait cast against creatures in the zone get a +2 status bonus to one damage type the spell deals based on the chosen trait: bludgeoning or electricity for air, bludgeoning for earth, fire for fire, electricity or slashing damage for metal, bludgeoning or cold for water, and bludgeoning or vitality damage for wood. The caster chooses one type to add the bonus to if the spell deals more than one eligible type. This bonus is halved if the spell didn't use a spell slot (such as a cantrip, focus spell, or innate spell).\nThe zone has no effect on the spell if the spell doesn't deal any damage of an eligible type.\nHeightened 2 The status bonus increases by 1.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "",
      "area": "20 burst",
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 2 The status bonus increases by 1."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:thermal-remedy",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "l194BTf9cAFlSQ96",
      "slug": "thermal-remedy",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:76551cebe21f0d061cc51159d6593cd06c41993b9f21a96e22553288f92680f7",
    "translatableHash": "sha256:b830faab318114dc8d817f776ee4eabbbcf9cb58219d455f9e8ec86695ef7ae2",
    "data": {
      "schemaVersion": 1,
      "name": "Thermal Remedy",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "fire",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "divine",
        "primal"
      ],
      "description": "You adjust the delicate levels of bitter ingredients in food and drink to draw out their full restorative and fortifying properties. Choose one of the benefits listed below. Any creature that consumes the targeted drink or food gains that benefit. Up to 10 creatures can partake in the meal, and a creature gets no extra benefit for consuming more than one portion.\n• Gain 5 temporary Hit Points.\n• Gain resistance 2 to fire.\n• Gain a +1 circumstance bonus to saves against disease.\nHeightened (4th) Your remedy provides two benefits of your choice instead of one. The temporary Hit Points increase to 10, the resistance to fire increases to 3, the bonus against disease increases to +2, and the duration is 2 hours.\nHeightened (7th) The remedy provides all three benefits. The temporary Hit Points increase to 15, the resistance to fire increases to 5, the bonus against disease increases to +3, and the duration is 8 hours.\nSpell Effect: Thermal Remedy",
      "castingTime": "1 minute",
      "range": "touch",
      "target": "up to 1 gallon of non-magical liquid or up to 5 pounds of food",
      "area": null,
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) Your remedy provides two benefits of your choice instead of one. The temporary Hit Points increase to 10, the resistance to fire increases to 3, the bonus against disease increases to +2, and the duration is 2 hours.\nHeightened (7th) The remedy provides all three benefits. The temporary Hit Points increase to 15, the resistance to fire increases to 5, the bonus against disease increases to +3, and the duration is 8 hours.\nSpell Effect: Thermal Remedy"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1023,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Thermal Remedy",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Thermal Remedy",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Thermal Remedy",
          "sourceId": "7wHYSgNG6LaxxlOz",
          "name": "Spell Effect: Thermal Remedy",
          "type": "effect"
        },
        "owner": {
          "sourceId": "l194BTf9cAFlSQ96",
          "name": "Thermal Remedy",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:pave-ground",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "mS3p6BR3LcG1WmHs",
      "slug": "pave-ground",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/pave-ground.webp"
    },
    "sourceHash": "sha256:470c43451cdb16c931fed401a7af07c03db11977046446202a4eff5cf418eb55",
    "translatableHash": "sha256:0b393baf6285f48e4930a335d00200edfe8aaff9f0617b927e2a4b8daa69636e",
    "data": {
      "schemaVersion": 1,
      "name": "Pave Ground",
      "rank": 2,
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
      "description": "You even out the ground and push aside low obstacles. Non-magical difficult terrain or greater difficult terrain composed of earth, rubble, sand, and the like in the area becomes normal terrain. You can attempt a counteract check against magical difficult terrain and greater difficult terrain composed of earthen materials in the area, too, making it normal terrain for the duration if you succeed. The ground doesn't change quickly enough to cause anyone to lose footing, and it doesn't clear concealing features enough to make them non-concealing. At the GM's discretion, if you use this spell on \"ground\" that has no underlying surface to flatten and clear, such as ice on the surface of a lake, the spell fails.\nHeightened (4th) The area increases to a 120-foot line along the ground.\nHeightened (6th) The area increases to a 500-foot line along the ground.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "60 line",
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) The area increases to a 120-foot line along the ground.\nHeightened (6th) The area increases to a 500-foot line along the ground."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:fireproof",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "QLTgY1AqFvX82vq2",
      "slug": "fireproof",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/fireproof.webp"
    },
    "sourceHash": "sha256:e2250b20f25d893a58c88707431b178129440daa78ea2be92b532873f504111e",
    "translatableHash": "sha256:a959586cef7bb12dc379ed21f454b5d62f401260e9df369028608ac55ab3c40e",
    "data": {
      "schemaVersion": 1,
      "name": "Fireproof",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "fire",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "divine",
        "primal"
      ],
      "description": "You prevent the target item from conducting heat or catching fire for the spell's duration. The item gains fire resistance 10. In addition, effects with the fire trait that target the item must first succeed at a counteract check against your spell DC.\nHeightened (4th) The duration is 24 hours.\nHeightened (6th) The duration is unlimited.",
      "castingTime": "1 minute",
      "range": "touch",
      "target": "1 object up to 10 Bulk",
      "area": null,
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) The duration is 24 hours.\nHeightened (6th) The duration is unlimited."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:waterproof",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "RS1nrqEjEi1ZlC53",
      "slug": "waterproof",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/waterproof.webp"
    },
    "sourceHash": "sha256:903ed20793405c5cb5a650375db94599f05a704681fde7757da841a575be7d13",
    "translatableHash": "sha256:03616525ce8112a52fb18133b0ab9c3ff66d50504a1541d48e20af187210a07e",
    "data": {
      "schemaVersion": 1,
      "name": "Waterproof",
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
      "description": "You prevent the target item from taking on water or becoming wet for the duration of the spell. The hydrophobic properties of the spell also grant resistance 10 to acid and a +2 bonus to saves and DCs against damaging effects with the water or acid traits.\nHeightened (4th) The duration is 1 day.\nHeightened (8th) The duration is unlimited.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 object up to 10 Bulk",
      "area": null,
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) The duration is 1 day.\nHeightened (8th) The duration is unlimited."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:cauterize-wounds",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "sBSalosrt7C4IXas",
      "slug": "cauterize-wounds",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:5c1699beb592c18677cb105bd1d376de06cf61c3306195c8e413d40ef53e3a46",
    "translatableHash": "sha256:c00f22eadf71155969fae25ae59542da222617dda1a217b881936ce0a2b9331a",
    "data": {
      "schemaVersion": 1,
      "name": "Cauterize Wounds",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "fire",
        "healing",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "divine",
        "primal"
      ],
      "description": "You seal bleeding wounds with fire. Any target that has persistent bleed damage can choose to take 1 fire damage. If it does, it can attempt to recover from its persistent bleed damage, with the lower DC for particularly effective assistance. During the spell's duration, you can use a single action, which has the concentrate trait, to repeat this effect for one target of the spell.\nSpell Effect: Cauterize Wounds",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "up to 5 willing creatures",
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
        "sourceIndex": 420,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Cauterize Wounds",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Cauterize Wounds",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Cauterize Wounds",
          "sourceId": "sdKsB8dmIiPEHePZ",
          "name": "Spell Effect: Cauterize Wounds",
          "type": "effect"
        },
        "owner": {
          "sourceId": "sBSalosrt7C4IXas",
          "name": "Cauterize Wounds",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:falsify-heat",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "udZEKwUryIsobjBG",
      "slug": "falsify-heat",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/falsify-heat.webp"
    },
    "sourceHash": "sha256:aeafbb53a0b511178d74f45fac9bb34a963384144d69db0a5523ae7a01d9312c",
    "translatableHash": "sha256:dabbcc0f3ac69b7f6755919af49486f5717a522b690e0f20c154cdaf349833ee",
    "data": {
      "schemaVersion": 1,
      "name": "Falsify Heat",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "fire",
        "illusion",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You veil the signs of the fires of vitality, altering the target's apparent body temperature. This illusion applies to all senses, and a creature that touches the target can attempt to disbelieve the illusion. You can Dismiss the spell. Choose an illusory body temperature when you cast the spell.\n• Moderate The target's body temperature appears the same as the surrounding environment, giving the target a +2 circumstance bonus to Deception checks to Impersonate an undead, a cold-blooded creature, or an inanimate object (such as a corpse). The target is also Invisible to heatvision and other abilities that sense heat similarly.\n• Warm The target appears to emit substantial body heat, gaining a +2 circumstance bonus to Deception checks to Impersonate a warm-blooded creature.\nHeightened (4th) You can target up to 10 creatures, and you can choose a different body temperature for each of them.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "1 willing creature or object",
      "area": null,
      "duration": "8 hours",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) You can target up to 10 creatures, and you can choose a different body temperature for each of them."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 594,
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
          "sourceId": "udZEKwUryIsobjBG",
          "name": "Falsify Heat",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:instant-armor",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "uiv8FKuxE8HOWTxW",
      "slug": "instant-armor",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:f57290df9bbfe9d405472e81e5048f241b6a16aff92813f61c3613e0ec89eadf",
    "translatableHash": "sha256:9cf624bb1842a0b35d8ffeb1ad8b2a6148183a820100b4922dddaba0de0e4d2b",
    "data": {
      "schemaVersion": 1,
      "name": "Instant Armor",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "contingency",
        "extradimensional",
        "manipulate",
        "metal"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult",
        "primal"
      ],
      "description": "Upon casting this spell, the armor you're wearing is whisked away into an extradimensional space that's linked to you. If the armor is magical and invested by you, it remains invested while in this space, though you don't gain its benefits. You then gain the Armor Up! action; once you use the action, the spell ends. If the action hasn't been used by the time the spell's duration ends, the extradimensional space collapses, ejecting the armor's pieces on the ground under you.\nSpell Effect: Instant Armor",
      "castingTime": "10 minutes",
      "range": "",
      "target": "",
      "area": null,
      "duration": "24 hours",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 262,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Armor Up!",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Armor Up!",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Armor Up!",
          "sourceId": "8b63qGzqSUENQgOT",
          "name": "Armor Up!",
          "type": "action"
        },
        "owner": {
          "sourceId": "uiv8FKuxE8HOWTxW",
          "name": "Instant Armor",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 529,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Instant Armor",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Instant Armor",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Instant Armor",
          "sourceId": "jj0P4eGVpmdwZjlA",
          "name": "Spell Effect: Instant Armor",
          "type": "effect"
        },
        "owner": {
          "sourceId": "uiv8FKuxE8HOWTxW",
          "name": "Instant Armor",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:exploding-earth",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "v89KwyaBd6g5rWVS",
      "slug": "exploding-earth",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/exploding-earth.webp"
    },
    "sourceHash": "sha256:5a4d6b4c0f35e4ba2cf52d0f4bef2662a92457f5dd589d5711a6c23785385e51",
    "translatableHash": "sha256:b5e4b54e7b2cf902e4b5756d6d027aa8abf0f9513e2920c10a5ab5f41cc18eb4",
    "data": {
      "schemaVersion": 1,
      "name": "Exploding Earth",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "attack",
        "concentrate",
        "earth",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You throw a hard-packed ball of earth and stone at a creature, and the projectile explodes upon impact. Attempt a spell attack against the target's AC. If you hit, you deal 4d6 bludgeoning damage plus 1d6 bludgeoning splash damage. On a critical hit, double the initial damage, but not the splash damage, and the target you hit must succeed at a Fortitude saving throw or fall Prone.\nHeightened 2 The damage increases by 2d6, and the splash damage increases by 1d6.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": "fortitude save",
      "damage": [
        {
          "formula": "4d6",
          "type": "bludgeoning",
          "kind": "damage"
        },
        {
          "formula": "1d6",
          "type": "bludgeoning",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The damage increases by 2d6, and the splash damage increases by 1d6."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 380,
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
          "sourceId": "v89KwyaBd6g5rWVS",
          "name": "Exploding Earth",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:blazing-armory",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ywHwnXihTnXbm9Xq",
      "slug": "blazing-armory",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:8cca93a00d8347994fb6a2c8c4ab8e4bf93ea655cb8802295e11875cf269f1d0",
    "translatableHash": "sha256:6c0b97cb04cc0fc0200afbc26d8ac7eef4c8ed21b5d75c910ed9b25b66c109be",
    "data": {
      "schemaVersion": 1,
      "name": "Blazing Armory",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "fire",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "divine",
        "primal"
      ],
      "description": "As long as you have magic, you're never unarmed. You materialize a flaming simulacrum of any common simple or martial weapon into the target's grasp. The target must have a free hand to hold the weapon, or else the weapon falls to the ground in the target's space. The blazing weapon functions as a +1 striking weapon, and its damage type changes to fire. The damage type can't be changed using the versatile trait, modular trait, or similar methods.\nA thrown weapon rematerializes in the target's hand after the Strike is complete. If you choose a ranged weapon that uses ammunition, the wielder must still reload the weapon using the normal number of actions, though this generates ammunition automatically; this functions as normal ammunition, and the blazing weapon can't use other types of ammunition.\nAny creature other than you or the target that attempts to touch, make a Strike with, or Disarm the weapon takes 1d6 fire damage each time.\nHeightened (4th) You can target up to 5 willing creatures and can choose a different weapon for each target. The weapons function as +1 striking flaming weapons.\nHeightened (6th) As 4th, but the weapons function as +2 greater striking flaming weapons.\nHeightened (8th) As 4th, but the weapons function as +3 greater striking greater flaming weapons.\nHeightened (10th) As 4th, but the weapons function as +3 major striking greater flaming weapons.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 willing creature",
      "area": null,
      "duration": "5 minutes",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) You can target up to 5 willing creatures and can choose a different weapon for each target. The weapons function as +1 striking flaming weapons.\nHeightened (6th) As 4th, but the weapons function as +2 greater striking flaming weapons.\nHeightened (8th) As 4th, but the weapons function as +3 greater striking greater flaming weapons.\nHeightened (10th) As 4th, but the weapons function as +3 major striking greater flaming weapons."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 922,
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
          "sourceId": "ywHwnXihTnXbm9Xq",
          "name": "Blazing Armory",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:dive-and-breach",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "1xM9muPRa8hiyJtI",
      "slug": "dive-and-breach",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/dive-and-breach.webp"
    },
    "sourceHash": "sha256:c5993b23ac4cd8fb3050a51644f98390a244c42468712581800ba88730267bb6",
    "translatableHash": "sha256:ef1f4750fed620af3c0f7837628096d7d5064407220a55e9c9b64bfe19a7adf6",
    "data": {
      "schemaVersion": 1,
      "name": "Dive and Breach",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "teleportation",
        "water"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You make the briefest of dives through the Plane of Water. You Leap 10 feet, and where you would land on the ground, you instead disappear in a splash of water, your body entering the surface like a diver entering a pool. You then exit from an unoccupied surface within 40 feet, appearing in another splash of water as you Leap out, landing 10 feet away from where you exited. Each splash deals 3d10 bludgeoning damage to all creatures in a 5-foot emanation; creatures in multiple splash zones take damage only once.\nHeightened 1 The damage dealt by each splash increases by 1d10.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "3d10",
          "type": "bludgeoning",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage dealt by each splash increases by 1d10."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 66,
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
          "sourceId": "1xM9muPRa8hiyJtI",
          "name": "Dive and Breach",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:noxious-metals",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "3A3ueS9Q0s3U8KXE",
      "slug": "noxious-metals",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/noxious-metals.webp"
    },
    "sourceHash": "sha256:9786d5a8f24356c5b72cb7779c7d0cbe3a72f21dad8c8b5182a0c27cf2785ff2",
    "translatableHash": "sha256:adaba12954d6fed6450717e233dea91ceff9b11cdb56deff6aef973f18fefd43",
    "data": {
      "schemaVersion": 1,
      "name": "Noxious Metals",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "metal",
        "poison"
      ],
      "traditions": [
        "arcane"
      ],
      "description": "This spell forces toxic metal to coalesce on the skin or surface of all living creatures in the area, dealing 4d6 poison damage with a basic Fortitude save. Any creature that has the plant trait, has the wood trait, or has an anathema toward metal, takes the following effects depending on the result of that Fortitude save.\nCritical Success The creature suffers no additional effects.\nSuccess The creature takes 1 persistent poison damage and is Sickened 1 as long as it takes this persistent damage.\nFailure As success, except 1d4 persistent poison damage and Sickened 2.\nCritical Failure As success, except 1d8 persistent poison damage and Sickened 3.\nHeightened 1 The initial poison damage increases by 2d6.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "",
      "area": "20 burst",
      "duration": "",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "4d6",
          "type": "poison",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The initial poison damage increases by 2d6."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 515,
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
          "sourceId": "3A3ueS9Q0s3U8KXE",
          "name": "Noxious Metals",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 717,
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
          "sourceId": "3A3ueS9Q0s3U8KXE",
          "name": "Noxious Metals",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 885,
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
          "sourceId": "3A3ueS9Q0s3U8KXE",
          "name": "Noxious Metals",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:soothing-blossoms",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "5XUn9NADr05IyiVw",
      "slug": "soothing-blossoms",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:54470bced6d119433d33ca5ed36e0195f9989084b126d9c42b82a814e71dc9ee",
    "translatableHash": "sha256:79d59bfa8a3794de417f43647981ba751ec4ecb2eedda895451b4f994a360de0",
    "data": {
      "schemaVersion": 1,
      "name": "Soothing Blossoms",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "plant",
        "wood"
      ],
      "traditions": [
        "divine",
        "primal"
      ],
      "description": "Blossoms grow from the ground in a small area, soothing away afflictions and persistent pains and harm. When any creature in that area rolls a successful save against a poison or disease effect, it gets a critical success instead. The blossoms grant assisted recovery to everyone in the area to end their persistent damage, both when the spell is cast and at the start of each of your turns. Once the duration ends, the flowers lose their magical effect, but a few of them might survive in the area as long as they can naturally. This spell doesn't give a benefit on a save against an affliction unless the stage lasts 10 minutes or less.\nSpell Effect: Soothing Blossoms",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "",
      "area": "10 burst",
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 649,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Soothing Blossoms",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Soothing Blossoms",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Soothing Blossoms",
          "sourceId": "nIryhRgeiacQw1Em",
          "name": "Spell Effect: Soothing Blossoms",
          "type": "effect"
        },
        "owner": {
          "sourceId": "5XUn9NADr05IyiVw",
          "name": "Soothing Blossoms",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:tempest-cloak",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "70BjbNRVc4OTLAgN",
      "slug": "tempest-cloak",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:bc5cf97514a5721588776f7d52539fe3fe8e073155df05ef51b145c52372bc36",
    "translatableHash": "sha256:9c6d3dd36d6222c3149818120d21027467b55442c6b406a9691a9a31f9be9c47",
    "data": {
      "schemaVersion": 1,
      "name": "Tempest Cloak",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "air",
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You shroud one creature in a cloak of fierce, howling winds, shielding it from attacks and making it difficult to approach. The twisting shield of wind creates difficult terrain in a 5-foot burst surrounding the target. The target also gains a +2 circumstance bonus to its AC against physical ranged attacks, such as attacks made with bows, javelins, or slings. In addition, the sound of the swirling storms makes it easier for the target to ignore anything it doesn't want to hear, granting the target a +2 circumstance bonus to all defenses against auditory effects.\nSpell Effect: Tempest Cloak",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 willing creature",
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
        "sourceIndex": 594,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Tempest Cloak",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Tempest Cloak",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Tempest Cloak",
          "sourceId": "8y6Ap9xIsnseYYvk",
          "name": "Spell Effect: Tempest Cloak",
          "type": "effect"
        },
        "owner": {
          "sourceId": "70BjbNRVc4OTLAgN",
          "name": "Tempest Cloak",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:heatvision",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "73gohsek77nLGPWC",
      "slug": "heatvision",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:0d7df5fcd0edf628b787d8c31d2fd7787c29f6d7e4cf977910f8da1a70bff65a",
    "translatableHash": "sha256:f36ee502546a10af6c919b61e983a067b1374e46fa47e8be680296c51b4f1a46",
    "data": {
      "schemaVersion": 1,
      "name": "Heatvision",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "fire",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult",
        "primal"
      ],
      "description": "The target visually senses the heat energy emitted by the creatures and objects around it, gaining infrared vision at a range of 60 feet as a precise sense. This vision can detect any warm-blooded creature or source of heat not completely covered behind a solid object, such as a wall; this bypasses any concealment granted by smoke or darkness. It can similarly detect especially cold creatures and sources of cold. Almost all creatures with the cold or fire trait can be detected with heatvision. Undead and constructs are typically the same temperature as their environment and can't be detected with heatvision. The GM decides in other cases.\nHeightened (6th) The duration lasts until you next make your daily preparations, and the range increases to 120 feet.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 willing creature",
      "area": null,
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (6th) The duration lasts until you next make your daily preparations, and the range increases to 120 feet."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:elemental-absorption",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "9TauMFkIsmvKJNzZ",
      "slug": "elemental-absorption",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:9f366c3fa72e1e6d790198a19d4b8e80cc0e729289c1b95f42636c0fd13a50a5",
    "translatableHash": "sha256:21b4e2256e92b2b74afc0219a06dbfd9afbb9e65c2ab6bd852d06087f35c0a7e",
    "data": {
      "schemaVersion": 1,
      "name": "Elemental Absorption",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You absorb elemental energy, which you can release as a powerful counterattack. Choose air, earth, fire, metal, water, or wood. You gain resistance 5 to damage dealt by effects with the chosen elemental trait; if you choose water, you also gain resistance to cold damage. As usual, if a spell has a multiple effects, such as a spell that deals both fire damage and bludgeoning damage with superheated rocks, you gain resistance to only the effects associated with the element you chose. Keep track of how much damage you have prevented with this spell.\nAs a 2-action activity, which has the concentrate trait and the trait matching the element you chose, you can release the stored energy. This deals damage equal to the amount you've stored (maximum 30 damage) to one enemy within 60 feet, with a basic Reflex save. The damage type depends on the element you chose: fire damage for fire; bludgeoning or cold damage for water; bludgeoning or slashing damage for air; bludgeoning, piercing, or slashing damage for earth;bludgeoning or vitality for wood; or electricity or slashing for metal. After releasing the energy, the spell ends. If you do not use the stored energy before the spell ends, the energy is lost.\nSpell Effect: Elemental Absorption\nHeightened 3 The resistance increases by 5 and the maximum damage increases by 30.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 3 The resistance increases by 5 and the maximum damage increases by 30."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1231,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Elemental Absorption",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Elemental Absorption",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Elemental Absorption",
          "sourceId": "LldX5hnNhKzGtOS0",
          "name": "Spell Effect: Elemental Absorption",
          "type": "effect"
        },
        "owner": {
          "sourceId": "9TauMFkIsmvKJNzZ",
          "name": "Elemental Absorption",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:wooden-double",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "aUMmmtPmBdCdVDed",
      "slug": "wooden-double",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/wooden-double.webp"
    },
    "sourceHash": "sha256:5ef3ce0fa8b12dd0b4eaa8e653cf479e647b5d45999c2fec4d1bbf6b08196ce9",
    "translatableHash": "sha256:5d5370a83d80f0907f95ab7d5e9e40c8af77e59c33baab1291d34af1ecc6a51c",
    "data": {
      "schemaVersion": 1,
      "name": "Wooden Double",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "manipulate",
        "wood"
      ],
      "traditions": [
        "arcane",
        "occult",
        "primal"
      ],
      "description": "Trigger You're critically hit by a damage-dealing effect or a Strike.\nA wooden double appears out of nowhere and takes the blow in your place. Take a Step action. A wooden block of your size and roughly shaped like you appears in the space you left and absorbs the hit. This block has Hardness 5 and 20 Hit Points. If the wooden block is destroyed, you take any excess damage that the block didn't absorb. After taking the blow, the wooden block collapses into a pile of splinters and dust.\nHeightened 1 The block's Hit Points increase by 10.",
      "castingTime": "reaction",
      "range": "",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 The block's Hit Points increase by 10."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:cloud-dragons-cloak",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "D5ZAWGqxml5xOiZb",
      "slug": "cloud-dragons-cloak",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/cloud-dragons-cloak.webp"
    },
    "sourceHash": "sha256:b219e02297c8429a01ddb8c65c9e1692e683211a69c2f6e28cbf8bfd441393f2",
    "translatableHash": "sha256:f463ceff90d67968f274c9452901d9e958be18c3d7ceb3de0ad9b8664110543d",
    "data": {
      "schemaVersion": 1,
      "name": "Cloud Dragon's Cloak",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "air",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "Trigger You or an ally in range is targeted by a ranged attack.\nA cloud of mist enshrouds the target, appearing much like the deflecting clouds created by cloud dragons. The target is treated as Hidden for the purposes of resolving the triggering attack (so normally the attacker must succeed at a check (flat, dc:11) to target it) and all ranged attacks against it for the duration.",
      "castingTime": "reaction",
      "range": "60 feet",
      "target": "the creature targeted by the attack",
      "area": null,
      "duration": "1 round",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 229,
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
          "sourceId": "D5ZAWGqxml5xOiZb",
          "name": "Cloud Dragon's Cloak",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:pillar-of-water",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "eIPIZp2FUbFcLNdj",
      "slug": "pillar-of-water",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/pillar-of-water.webp"
    },
    "sourceHash": "sha256:de00053d8d172fb47d8a1d91bb9c4b4a8f94191965fc59fd49bccef7fc614332",
    "translatableHash": "sha256:ace1fb3be3c193a0748cec001c9dd51639ac19c4da3c48e3489f0430a1fbda5d",
    "data": {
      "schemaVersion": 1,
      "name": "Pillar of Water",
      "rank": 3,
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
      "description": "You create a large, self-contained cylinder of still, clear fresh water. You choose the radius and height of the pillar, to a maximum radius of 15 feet and a maximum height of 60 feet. Creatures inside the pillar can Swim through the water as normal (check (athletics, traits:action:swim, dc:10)), or if the spell was cast on solid ground, walk along the bottom (which is difficult terrain). Any creature that exits the pillar falls or lands accordingly.",
      "castingTime": "3 actions",
      "range": "120 feet",
      "target": "",
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
        "sourceIndex": 220,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Swim",
        "label": null,
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
          "sourceId": "eIPIZp2FUbFcLNdj",
          "name": "Pillar of Water",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:scrying-ripples",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "k1apwY0ROoMKlvLt",
      "slug": "scrying-ripples",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:59e5b7ef3c2bca5bafb107a4de2300f5c3cc6bda2bc0efb5dd8ff486a083924c",
    "translatableHash": "sha256:665fa6330695248464d1a1ed9cf046323a1bcbe05236b8e7f8ed4039561fdc2d",
    "data": {
      "schemaVersion": 1,
      "name": "Scrying Ripples",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "scrying",
        "water"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult",
        "primal"
      ],
      "description": "You touch the water's surface, and as the ripples spread out, so do your senses. When you Cast this Spell, you automatically know the location of any unoccupied, flowing water with a surface area of at least 1 square within 500 feet. You can pick any one of these streams to see and hear out of for the duration of the spell, though your field of vision is perpendicular to the flowing surface. For example, you could look normally out of a waterfall but would look straight up from out of a river. Each time you Sustain the spell, you can change to a different water source or move elsewhere along the same one.\nIf the water you're scrying through ceases flowing, such as by a faucet turning off, a river damming, or a waterfall freezing over, this spell ends. Additionally, your face appears as a faint reflection in the water's surface as you peek through. A creature that Seeks and succeeds at their Perception check against your spell DC detects your presence in the water.\nHeightened (5th) You know the location of and can scry through flowing water within 1 mile.",
      "castingTime": "1 minute",
      "range": "touch",
      "target": "1 gallon of water or more",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (5th) You know the location of and can scry through flowing water within 1 mile."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:cave-fangs",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "KEagmnwgsSbGmkme",
      "slug": "cave-fangs",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:e63819958b4c781fe06598501904dd4db9af0b0b06ce0593478fbd8b30a8d991",
    "translatableHash": "sha256:f07b30b491f644e8bacc8f7bf277ee4424678bc0f91cf0f1bfa1137b1ad36534",
    "data": {
      "schemaVersion": 1,
      "name": "Cave Fangs",
      "rank": 3,
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
      "description": "Sharp flowstone formations protrude from the ground and ceiling, dealing 6d6 piercing damage to creatures in the area with a basic Reflex save. Densely packed with protrusions, the area becomes difficult terrain for the duration. The protrusions turn to dust when the spell ends. You can Dismiss the spell.\nHeightened 1 The damage increases by 2d6.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "",
      "area": "20 burst",
      "duration": "1 minute",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "6d6",
          "type": "piercing",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:sand-form",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "KjC2ya8HD5AENeHI",
      "slug": "sand-form",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:905a0ef830a92e87137f7a52633ba676d997915f0778b97b85158086f014841e",
    "translatableHash": "sha256:81e064f88985e860d107607e4914b7063874303b2b3507e576768e75e711a2cc",
    "data": {
      "schemaVersion": 1,
      "name": "Sand Form",
      "rank": 3,
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
      "description": "You grant the target's body and gear aspects of sand. The target gains resistance 5 to piercing and slashing damage, has no scent, and can't bleed. In sandy terrain, even when out in the open, the target has enough concealment to attempt to Hide. Each time the target takes damage to which sand form grants resistance, reduce the duration of the spell by 1 minute.\nSpell Effect: Sand Form\nHeightened (5th) The resistance is 10.\nHeightened (7th) The resistance is 15.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 willing creature",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (5th) The resistance is 10.\nHeightened (7th) The resistance is 15."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 384,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Sand Form",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Sand Form",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Sand Form",
          "sourceId": "qO1Gj9l8gh5CMEbf",
          "name": "Spell Effect: Sand Form",
          "type": "effect"
        },
        "owner": {
          "sourceId": "KjC2ya8HD5AENeHI",
          "name": "Sand Form",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:elemental-annihilation-wave",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "NyxQAazFBdBAqZGX",
      "slug": "elemental-annihilation-wave",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/elemental-annihilation-wave.webp"
    },
    "sourceHash": "sha256:2fd3813eebd77902f9ccc8dce3db612f31f0d9a902fbf274a859ac8aa881b9e8",
    "translatableHash": "sha256:d5f6ce7147730e9d715a00c2f912bc2d40748f7d6e3ae6154d6dd99068f665b6",
    "data": {
      "schemaVersion": 1,
      "name": "Elemental Annihilation Wave",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "air",
        "concentrate",
        "earth",
        "fire",
        "manipulate",
        "water"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You draw elemental power from your surroundings, and combining it with your own magical energy, unleash a wave of utter destruction and swirling colors that deals 1d6 fire damage and 3d6 bludgeoning damage with a basic Reflex save. You can replace the air trait with the metal and wood traits when you cast the spell. The number of actions you spend when Casting this Spell determines the area and other parameters.\n2 (somatic, verbal) The spell is a 30-foot cone.\n3 (material, somatic, verbal) The spell is a 30-foot cone. On a failed saving throw, creatures are pushed 5 feet away from you, and on a critical failure they are pushed 10 feet away and are knocked prone.\nTwo Rounds If you spend 3 actions Casting the Spell, you can avoid finishing the spell and spend another 3 actions on your next turn to empower the spell even further. If you do, the spell is as 3 actions, but the area is a 60-foot cone, and for 1 round, the elements linger in the cone, racing off into the distance and making approaching you difficult, with the effects of Gust of Wind.\nHeightened 2 The damage increases by 3d6 bludgeoning and 1d6 fire, and the distance that enemies are pushed back if you spent 3 actions or 2 rounds increases by 5 feet on a failed save and 10 feet on a critical failure.",
      "castingTime": "2 to 2 rounds",
      "range": "",
      "target": "",
      "area": "30 cone",
      "duration": "",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "1d6",
          "type": "fire",
          "kind": "damage"
        },
        {
          "formula": "3d6",
          "type": "bludgeoning",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The damage increases by 3d6 bludgeoning and 1d6 fire, and the distance that enemies are pushed back if you spent 3 actions or 2 rounds increases by 5 feet on a failed save and 10 feet on a critical failure."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1204,
        "uuid": "Compendium.pf2e.spells-srd.Item.Gust of Wind",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Gust of Wind",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Gust of Wind",
          "sourceId": "g8QqHpv2CWDwmIm1",
          "name": "Gust of Wind",
          "type": "spell"
        },
        "owner": {
          "sourceId": "NyxQAazFBdBAqZGX",
          "name": "Elemental Annihilation Wave",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:lotus-walk",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "OuZY7VYeylub5K7l",
      "slug": "lotus-walk",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:a6313e59a2a3e52f45ef49e0e7d746947c330f61d0aa4cab0772ba8ec15a687d",
    "translatableHash": "sha256:83a1d483b65cafc5883112348918015478e56a07e3000000a8e8598b54745a1b",
    "data": {
      "schemaVersion": 1,
      "name": "Lotus Walk",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "plant",
        "wood"
      ],
      "traditions": [
        "arcane",
        "divine",
        "primal"
      ],
      "description": "Lotuses, water lilies, and other watery plants bloom at your feet, allowing you to walk on the surface of water and other liquids. You can go underwater if you wish, but in that case, you must Swim normally. As you Stride or Step on water, you leave a trail of oversized lily pads, lotus leaves, or spatterdock that fill the squares' surfaces in your wake. Each square of this trail can withstand the weight of 1 Medium creature and lasts until the end of your next turn. You can Dismiss this spell early.\nHeightened (4th) The duration of this spell increases to 10 minutes. The trail lasts until the spell ends or you Dismiss the spell on you, whichever comes first.\nHeightened (6th) The duration increases to 1 hour. Your trail is permanent even if you Dismiss the spell on you, although if the water can't support such plants, they'll die in a week. The trail can be removed by dispel magic or a similar spell.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) The duration of this spell increases to 10 minutes. The trail lasts until the spell ends or you Dismiss the spell on you, whichever comes first.\nHeightened (6th) The duration increases to 1 hour. Your trail is permanent even if you Dismiss the spell on you, although if the water can't support such plants, they'll die in a week. The trail can be removed by dispel magic or a similar spell."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:magnetic-acceleration",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Tx8OqkBFA2QlaldW",
      "slug": "magnetic-acceleration",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:8fcd71e07f61596a223f7e96d506a3dd6a9b812f878440a110c620cd0c7f2327",
    "translatableHash": "sha256:5b8100f24a808adfa766f196e633e5e7c4f5fd58b909a65f71ccbe23f34ea7d6",
    "data": {
      "schemaVersion": 1,
      "name": "Magnetic Acceleration",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "attack",
        "concentrate",
        "manipulate",
        "metal"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You magnetize a small metal object, such as a nail or coin, and launch it away from you at massive speed. Make a ranged spell attack roll; if the target is wearing metal armor or is made of metal, you gain a +1 circumstance bonus to your attack roll with magnetic acceleration. On a hit, the target takes 3d6 bludgeoning damage and 3d6 piercing damage, or double damage on a critical hit.\nHeightened 1 The bludgeoning and piercing damage each increase by 1d6.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "1 creature or object",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [
        {
          "formula": "3d6",
          "type": "bludgeoning",
          "kind": "damage"
        },
        {
          "formula": "3d6",
          "type": "piercing",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The bludgeoning and piercing damage each increase by 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:blastback",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "YuCBhE9tGgN8G2zU",
      "slug": "blastback",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:f31a371a952077843dacef6b1e854a454fcc991de235e2e124af0214fe45e84e",
    "translatableHash": "sha256:8f5785f2511e6e2bca842eb345b6c8931ac20b7bcfd7ba60d1c4dae4eff58911",
    "data": {
      "schemaVersion": 1,
      "name": "Blastback",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "air",
        "concentrate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "Trigger You fall more than 10 feet.\nYou hit the ground with a shuddering boom, propelling the force of your fall out in a wave. You take no damage from the fall as the displaced air allows you to land gently, but all other creatures in the spell's area take 6d4 bludgeoning damage. Creatures that fail their save are also pushed back 5 feet.\nHeightened 2 The emanation increases by 10 feet, and the damage increases by 1d4.",
      "castingTime": "reaction",
      "range": "",
      "target": "",
      "area": "20 emanation",
      "duration": "",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "6d4",
          "type": "bludgeoning",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The emanation increases by 10 feet, and the damage increases by 1d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:coral-scourge",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ZIk1EYbG6l4JuUkO",
      "slug": "coral-scourge",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/coral-scourge.webp"
    },
    "sourceHash": "sha256:9d3d19aa303044120f5d67d2993c389c754c801c66d0a6e2a2487cf854436c8a",
    "translatableHash": "sha256:4b73e093df122168d6459ece26b5a6aadaff95daf845719cfbd0e4eb34385794",
    "data": {
      "schemaVersion": 1,
      "name": "Coral Scourge",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "concentrate",
        "incapacitation",
        "manipulate",
        "water"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "Barnacles, coral, and other rough aquatic creatures grow on the target's body, getting in between their joints and stiffening their movement. This impedes the target's movement depending on the result of its saving throw.\nCritical Success The target is unaffected.\nSuccess The target is Clumsy 1. The target can Interact to scrape the coral growths from its body, decreasing the clumsy condition to 0 and ending the spell.\nFailure The target is Clumsy 2. Each round at the beginning of its turn, the target becomes clumsy 1 or increases its clumsy condition by 1, to a maximum of 4. The target can Interact to scrape the coral growths from its body, decreasing the clumsy condition to 0 and ending the spell. If the target's clumsy condition caused by coral scourge reaches 4, the growths spread to cover the target's entire body, and the target becomes Paralyzed.\nCritical Failure As failure, but when the target Interacts to scrape the coral growths from its body, it reduces its clumsy condition by 1, instead of decreasing it to 0, and decreasing the clumsy condition to 0 doesn't end the spell.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
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
        "sourceIndex": 345,
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
          "sourceId": "ZIk1EYbG6l4JuUkO",
          "name": "Coral Scourge",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 578,
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
          "sourceId": "ZIk1EYbG6l4JuUkO",
          "name": "Coral Scourge",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1047,
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
          "sourceId": "ZIk1EYbG6l4JuUkO",
          "name": "Coral Scourge",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:glass-form",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "3qz32XdiugYhsr32",
      "slug": "glass-form",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/glass-form.webp"
    },
    "sourceHash": "sha256:9178ce13284dfe5d8879ff7e3414060e45910e6b1eb78e23e616ca9238414ff3",
    "translatableHash": "sha256:861800d9ca574129a39e5e2f9322df4147308a4467e0459db5655cc1e734a6fb",
    "data": {
      "schemaVersion": 1,
      "name": "Glass Form",
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
      "description": "You grant the target properties of dull, transparent glass. The target becomes Concealed, has no scent, and can't bleed. They gain resistance 5 to acid, cold, electricity, and piercing damage and weakness 5 to sonic and bludgeoning damage. A creature in this form is affected by the shatter spell as though the creature were an unattended object. Each time the target takes damage to which the spell grants resistance or weakness, reduce the duration by 1 minute.\nSpell Effect: Glass Form\nHeightened 2 The resistances and weaknesses increase by 5.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 willing creature",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 2 The resistances and weaknesses increase by 5."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 82,
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
          "sourceId": "3qz32XdiugYhsr32",
          "name": "Glass Form",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 517,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Glass Form",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Glass Form",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Glass Form",
          "sourceId": "0lYbjDI2N3xVl24E",
          "name": "Spell Effect: Glass Form",
          "type": "effect"
        },
        "owner": {
          "sourceId": "3qz32XdiugYhsr32",
          "name": "Glass Form",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:ymeris-mark",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "6gEKZaGdH842RF3J",
      "slug": "ymeris-mark",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/ymeris-mark.webp"
    },
    "sourceHash": "sha256:80270f6d0f42fa148dad1b375a834317f0eccb3f607ebe0a0b55797cfe597267",
    "translatableHash": "sha256:a5a880a42c3c41817a50066fc7a0ee361bcdc6655585f4adb4ac1a8145cc13df",
    "data": {
      "schemaVersion": 1,
      "name": "Ymeri's Mark",
      "rank": 4,
      "rarity": "common",
      "traits": [
        "concentrate",
        "curse",
        "detection",
        "fire",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "divine",
        "primal"
      ],
      "description": "You place the fiery mark of the Queen of the Inferno on the target, burning into the creature's very essence. The mark gives off a heat that only you can sense; as long as you're on the same plane as the target, you can sense the direction it's in. The target is Fatigued and can't reduce the value of this condition normally.\nYou can detonate the mark at any point during its duration by Dismissing the spell. The rune explodes in a 10-foot emanation centered on the target that deals 5d6 fire damage with a basic Reflex save. You choose whether the mark's target is included in the explosion.\nWhen you cast the spell, the target attempts a Fortitude save to determine how long the mark lasts. If the spell's duration elapses, the rune doesn't detonate.\nCritical Success The target is unaffected.\nSuccess The duration is 1 minute.\nFailure The duration is 1 week.\nCritical Failure The duration is unlimited.\nHeightened 1 The damage increases by 2d6.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 creature",
      "area": null,
      "duration": "varies",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "5d6",
          "type": "fire",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 2d6."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 266,
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
          "sourceId": "6gEKZaGdH842RF3J",
          "name": "Ymeri's Mark",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:airlift",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "6XscENSWyYRHqK0A",
      "slug": "airlift",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:6876ba2c02b1f4e8c3d77f822032526c7518b0dcd2deac7d7a8278357361c6ca",
    "translatableHash": "sha256:33cbeeb4f8dfd1e426b3729614cdfae26180a8ce65e52afd6208e528632ece50",
    "data": {
      "schemaVersion": 1,
      "name": "Airlift",
      "rank": 4,
      "rarity": "common",
      "traits": [
        "air",
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "A massive rush of wind lifts, briefly carrying you and everything around you to a nearby destination. You, each creature in the area, and each item of 10 Bulk or lighter are lifted by this powerful gale. You and all affected creatures and objects Fly up to 60 feet and land on a solid surface, arriving in the same relative position to each other. If there wouldn't be enough room at the destination for everything you're bringing, the spell fails, though the GM might allow you to rearrange the group slightly to accommodate the spell.\nAny unwilling participant can attempt a Reflex save to avoid being carried along. The airlift doesn't carry items that are secured in place (such as a hinged door or a person manacled to a wall).\nHeightened (6th) The distance you Fly increases to 120 feet, and the Bulk limit of an item you can airlift increases to 20.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "10 emanation",
      "duration": "",
      "defense": "reflex save",
      "damage": [],
      "heightening": "Heightened (6th) The distance you Fly increases to 120 feet, and the Bulk limit of an item you can airlift increases to 20."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:sliding-blocks",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "avEutOjF2ox947fp",
      "slug": "sliding-blocks",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/hologram-cube.webp"
    },
    "sourceHash": "sha256:729e9ec196fa852c8220fe17e420a7f55adbc19f46bf8fdcef1f353448857f46",
    "translatableHash": "sha256:eef1b288a911f35e0fc43ea3ee4dc1910fe301e7f2d470338098f9a88e85be6e",
    "data": {
      "schemaVersion": 1,
      "name": "Sliding Blocks",
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
      "description": "You conjure up to six 5-foot stone cubes you can gently move with a gesture. Each cube appears in any space within range, and they're capable of levitating. If you conjure a cube in an occupied space or in a space that can't accommodate it, it fails to appear. Each 5-foot cube can be Climbed with a successful check (athletics, dc:10) check and has AC 10, Hardness 10, and 40 Hit Points. If any of the cubes is ever farther away from you than the range of this spell, it immediately crumbles into dust.\nEach time you Sustain this spell, you can move up to two of the conjured cubes up to 10 feet each in any direction, including vertically. You can choose different cubes to move each time you Sustain.\nHeightened 2 The cubes have 10 additional Hit Points, and you can move the chosen cubes an additional 5 feet each time you Sustain this Spell.",
      "castingTime": "3 actions",
      "range": "120 feet",
      "target": "",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 2 The cubes have 10 additional Hit Points, and you can move the chosen cubes an additional 5 feet each time you Sustain this Spell."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:stifling-stillness",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "bAxjHBi37CVwInfU",
      "slug": "stifling-stillness",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/stifling-stillness.webp"
    },
    "sourceHash": "sha256:b3ed84bcb5e6fd314b6cf34e3fbfcd0a0c905236c2b32ebb8948ef36e86c83bd",
    "translatableHash": "sha256:3bb606714f685e981c26e7afdb8ab92bd38eb58944937c9e070a3cb78f0920cf",
    "data": {
      "schemaVersion": 1,
      "name": "Stifling Stillness",
      "rank": 4,
      "rarity": "common",
      "traits": [
        "air",
        "concentrate",
        "manipulate",
        "poison"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You make all air in the target area unnaturally still and unyielding, creating a shimmering haze. The stagnant, heavy air becomes an area of difficult terrain. Creatures in the area that breathe air and aren't holding their breath must spend a single action on their turn straining to breathe the stagnant air; once they do, they still mostly breathe their own exhaled air, taking 3d6 poison damage (basic Fortitude save) and becoming Fatigued.\nHeightened 2 The damage increases by 3d6.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "",
      "area": "20 burst",
      "duration": "1 minute",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "3d6",
          "type": "poison",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The damage increases by 3d6."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 438,
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
          "sourceId": "bAxjHBi37CVwInfU",
          "name": "Stifling Stillness",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:cinder-swarm",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "bVvGpSOg2WaTUItS",
      "slug": "cinder-swarm",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:deee1b46331e614ad5bdd81bddc9f092613622e2e9dc2119c21433307b14544a",
    "translatableHash": "sha256:fd3042d50303f6833e098d690d7ee11694ce8d439643595f1fdc5932d01f6986",
    "data": {
      "schemaVersion": 1,
      "name": "Cinder Swarm",
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
      "description": "You breathe life into a mass of fiery critters. They swarm the target and create an aura around it in a 5-foot emanation. The target and enemies in the aura are subject to an effect depending on the insects you choose. On subsequent rounds, the first time you Sustain this spell each round, you repeat the effect on the target and all your enemies in the insect aura. Pick a type of insect to determine the effects.\n• Fire Ants You create fiery flying ants that deal 3d6 piercing damage plus 2d6 persistent fire damage with a basic Reflex save. A creature that fails its save must move 5 feet in a direction of your choice as it tries to escape the biting ants; this happens after all the creatures attempt their saves and can't add new creatures to the aura if the main target moves.\n• Fireflies (incapacitation) You create a flurry of fireflies that deal 3d6 fire damage and can dazzle or blind, depending on the target's Fortitude save.\nCritical Success The creature takes no damage.\nSuccess The creature takes half damage and is Dazzled for 1 round.\nFailure The creature takes full damage and is Blinded for 1 round. It's then temporarily immune to being blinded by cinder swarm for 24 hours.\nCritical Failure As failure, but double damage and blinded for 1 minute.\nHeightened 1 Increase the ants' piercing damage and fireflies' fire damage by 2d6.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 Increase the ants' piercing damage and fireflies' fire damage by 2d6."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1165,
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
          "sourceId": "bVvGpSOg2WaTUItS",
          "name": "Cinder Swarm",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1299,
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
          "sourceId": "bVvGpSOg2WaTUItS",
          "name": "Cinder Swarm",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:petal-storm",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "D31YX7zvRBvenTAz",
      "slug": "petal-storm",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:543a57b9d2d25a1197acc3921d43af7defd0eeccaa76ba37c41f8c8f13284461",
    "translatableHash": "sha256:4c0ce88825bdc6204852dae930b71df7084c8d085ca40a6814d508c3e87191ba",
    "data": {
      "schemaVersion": 1,
      "name": "Petal Storm",
      "rank": 4,
      "rarity": "common",
      "traits": [
        "air",
        "concentrate",
        "manipulate",
        "plant",
        "wood"
      ],
      "traditions": [
        "primal"
      ],
      "description": "You bring forth a cloud of razor-sharp flower petals that thrash violently in the wind. A creature that enters the storm or starts its turn in the storm is sliced by the razor-sharp edges of the petals. It takes 2d10 slashing damage with a basic Reflex save. A creature can take damage from the petals only once per round. At the end of the duration, the storm calms and the petals fall harmlessly to the ground.\nHeightened 2 The damage increases by 1d10.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "",
      "area": "15 burst",
      "duration": "1 minute",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "2d10",
          "type": "slashing",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The damage increases by 1d10."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:elemental-gift",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "e36Z2t6tLdW3RUzZ",
      "slug": "elemental-gift",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/elemental-gift.webp"
    },
    "sourceHash": "sha256:52e3398a042a90db2b567acba2ecd24c5a076aa0a1b56d2dcc2f46924e39ea45",
    "translatableHash": "sha256:fddff0d030b1f60b956e451853ac78d6d5aa70ebc5c108fe484938c1e3c8d6ad",
    "data": {
      "schemaVersion": 1,
      "name": "Elemental Gift",
      "rank": 4,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "primal"
      ],
      "description": "An elemental force fills your target, granting the target the swiftness of air, the ruggedness of earth, the sting of fire, or the flexibility of water, depending on which element you choose. Choose an element when you Cast the Spell. The target gains the benefit of that element as described below, and this spell gains that trait's element.\n• Air The target gains a +30-foot status bonus to its land Speed and gains a fly Speed equal to its land Speed without the status bonus.\n• Earth While on the ground, the target gets a +2 status bonus to Fortitude and Reflex saves against effects that would Shove or Trip it, and to saves against effects that would attempt to knock it Prone. In addition, the ground adjacent to the target is difficult terrain, and the difficult terrain moves with the target, though the target ignores this difficult terrain with its own movement.\n• Fire The target's melee unarmed Strikes and melee weapon Strikes deal 1d6 persistent fire damage on a hit.\n• Metal The target's Strikes using a metal weapon or an unarmed attack deal an additional 1d4 electricity damage on a hit and get a +1 status bonus to the attack roll if the target is made of metal or wearing metal armor.\n• Water The target takes on a watery sheen, gaining resistance 5 to fire and a swim Speed equal to its land Speed.\n• Wood The target gains a number of temporary Hit Points equal to the spell's rank, then gains half that number of temporary HP at the start of each of its turns.\nSpell Effect: Elemental Gift\nHeightened (8th) You can target up to 5 willing creatures.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 willing creature",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (8th) You can target up to 5 willing creatures."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 655,
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
          "sourceId": "e36Z2t6tLdW3RUzZ",
          "name": "Elemental Gift",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 704,
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
          "sourceId": "e36Z2t6tLdW3RUzZ",
          "name": "Elemental Gift",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 813,
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
          "sourceId": "e36Z2t6tLdW3RUzZ",
          "name": "Elemental Gift",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1772,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Elemental Gift",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Elemental Gift",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Elemental Gift",
          "sourceId": "AF4vQ1xoOiJ1ewH1",
          "name": "Spell Effect: Elemental Gift",
          "type": "effect"
        },
        "owner": {
          "sourceId": "e36Z2t6tLdW3RUzZ",
          "name": "Elemental Gift",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:rigid-form",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Ey4pKybxyPAxq0ew",
      "slug": "rigid-form",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:bc315a0e08924fdcf20df308f5f3137d1b8d41c3853596affbcb035330bd7c9c",
    "translatableHash": "sha256:34b9286de74bcb5d23acd42dddf2d3e3d616137804cfd3c7517405578c4e5201",
    "data": {
      "schemaVersion": 1,
      "name": "Rigid Form",
      "rank": 4,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "wood"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You utilize wood's rigidity to prevent harmful shapechanging effects. For the duration of this spell, whenever you're targeted by a harmful polymorph effect, you can use your reaction to attempt to counteract the effect.\nHeightened (6th) The duration increases to 10 minutes.",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (6th) The duration increases to 10 minutes."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:life-draining-roots",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "FHfrCABOmGVaEpPx",
      "slug": "life-draining-roots",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/life-draining-roots.webp"
    },
    "sourceHash": "sha256:999e39cacc9f8c13b0036dd1bad2611c45a61c1a41ff953a1798824d5f348318",
    "translatableHash": "sha256:92afcdc2cfeb9ed0f6e4ee0f62af00579fa3b833820d2366dce0cc6b3aaa6a88",
    "data": {
      "schemaVersion": 1,
      "name": "Life-Draining Roots",
      "rank": 4,
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
      "description": "Thorny roots erupt from your hands in a tangled cascade, puncturing creatures in the way of their growth and revitalizing you. You deal 8d6 piercing damage to creatures in the line (basic Reflex save). You gain 1d4 temporary Hit Points for every living creature in the line, as the roots transfer nutrients from those damaged into you. The temporary Hit Points last for 1 minute.\nHeightened 1 The damage increases by 2d6.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "30 line",
      "duration": "",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "8d6",
          "type": "piercing",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:zephyr-slip",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "FL1OxeOUDzsJYfY4",
      "slug": "zephyr-slip",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/zephyr-slip.webp"
    },
    "sourceHash": "sha256:8b6d87e62340d785394a975caed14fedc48e67901d827cb15cb67f69d9de4ff9",
    "translatableHash": "sha256:f26282f4499a641adf0b0c8ec123ac3f97e1ffee57297dbee5948ba0e6bd070a",
    "data": {
      "schemaVersion": 1,
      "name": "Zephyr Slip",
      "rank": 4,
      "rarity": "common",
      "traits": [
        "air",
        "manipulate",
        "move"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "Trigger A creature enters a space within 5 feet of you.\nAn arresting breeze sweeps you up in an instant and moves you to safety. You Fly 15 feet directly away from the triggering creature.\nHeightened (6th) You and one adjacent ally Fly up to 25 feet directly away from the triggering creature.\nHeightened (8th) You and up to 5 allies within 30 feet Fly up to 25 feet directly away from the triggering creature.",
      "castingTime": "reaction",
      "range": "",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (6th) You and one adjacent ally Fly up to 25 feet directly away from the triggering creature.\nHeightened (8th) You and up to 5 allies within 30 feet Fly up to 25 feet directly away from the triggering creature."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:murderous-vine",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "kCgkreCT6g0dipMd",
      "slug": "murderous-vine",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:09aac3c817aafbbb057ef9f681839bf0c23c20c7c802962907bf7b6d5a5db6a1",
    "translatableHash": "sha256:baa8ebd66e8f52ad6ebf0a6ea9861391892d3af411983a9c67f8b5b41b4bf748",
    "data": {
      "schemaVersion": 1,
      "name": "Murderous Vine",
      "rank": 4,
      "rarity": "common",
      "traits": [
        "attack",
        "concentrate",
        "manipulate",
        "plant",
        "wood"
      ],
      "traditions": [
        "primal"
      ],
      "description": "You summon a slithering, thorny vine that attempts to constrict and crush a foe against a wall or other surface. Make a spell attack roll against the target's Fortitude DC. On a success, the creature is grabbed and takes 3d6 bludgeoning damage and 2d8 piercing damage. At the end of that creature's turn, if it's still grabbed by the vine, it takes 2d6 bludgeoning damage.\nThe vine's Escape DC is equal to your spell DC. A creature can attack the vine in an attempt to break its grip. The vine's AC is equal to your spell DC, and the vine is destroyed if it takes 20 or more damage. Destroying or escaping from the vines ends the spell. You can Dismiss the spell.\nHeightened 2 The initial bludgeoning damage increases by 1d6, the initial piercing damage increases by 1d8, and the damage a creature takes for ending its turn grabbed by the vine increases by 1d6.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "1 creature adjacent to a flat surface",
      "area": null,
      "duration": "1 minute",
      "defense": "fortitude-dc",
      "damage": [
        {
          "formula": "3d6",
          "type": "bludgeoning",
          "kind": "damage"
        },
        {
          "formula": "2d8",
          "type": "piercing",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The initial bludgeoning damage increases by 1d6, the initial piercing damage increases by 1d8, and the damage a creature takes for ending its turn grabbed by the vine increases by 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:phoenix-ward",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "lJdAvY1sJyEmNDc6",
      "slug": "phoenix-ward",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:be2a0f01c51f17d1212de6a659e8abe0f110485b883d06441abf4694c08ba4b3",
    "translatableHash": "sha256:8c6bd63301fde27df15c334fe6c62cc4b5d6fa9e9e97b701b34c89b5bc8476c0",
    "data": {
      "schemaVersion": 1,
      "name": "Phoenix Ward",
      "rank": 4,
      "rarity": "common",
      "traits": [
        "concentrate",
        "fire",
        "manipulate"
      ],
      "traditions": [
        "divine",
        "primal"
      ],
      "description": "You raise a fiery shield around yourself, gaining resistance 10 to fire. If you take fire damage that would reduce you to 0 Hit Points, the phoenix ward absorbs any damage beyond the amount that would bring you to 1 Hit Point. The ward then heals you in a brilliant display of flames in the shape of a phoenix's wings and envelop you in light. You regain Hit Points equal to 4d8 + the absorbed damage; this is a healing vitality effect. The phoenix ward then ends, and you can't cast it again for 24 hours.\nHeightened 1 The healing increases by 1d8.\nSpell Effect: Phoenix Ward",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [
        {
          "formula": "4d8",
          "type": "untyped",
          "kind": "healing"
        }
      ],
      "heightening": "Heightened 1 The healing increases by 1d8.\nSpell Effect: Phoenix Ward"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 612,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Phoenix Ward",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Phoenix Ward",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Phoenix Ward",
          "sourceId": "0eP0JRBPwfRyu7gN",
          "name": "Spell Effect: Phoenix Ward",
          "type": "effect"
        },
        "owner": {
          "sourceId": "lJdAvY1sJyEmNDc6",
          "name": "Phoenix Ward",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:mercurial-stride",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ma3sndEAZdz0Cy2H",
      "slug": "mercurial-stride",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/mercurial-stride.webp"
    },
    "sourceHash": "sha256:7d0460199b7ee12c0d7ac509628097193b60d63e131364bd80eadd3700bb1a3a",
    "translatableHash": "sha256:38b50881e747ad49c2d9463d29ea9189be16797ede8ca06d0892ef00a37603b1",
    "data": {
      "schemaVersion": 1,
      "name": "Mercurial Stride",
      "rank": 4,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "metal",
        "poison"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "Your form ripples as you take on the fluidity and toxicity of quicksilver. You partially shift into a liquid metal form and Stride up to twice your speed. During this movement, you can pass through one creature's space—without needing to attempt a check to Tumble Through—by splitting into droplets of mercury and reforming on the other side, though you can't end your turn in such a space. Passing through a creature's space in this way exposes it to mercury poisoning, with a Fortitude save.\nCritical Success The target is unaffected.\nSuccess The target becomes Sickened 1.\nFailure The target becomes Sickened 2 and takes 6d6 poison damage.\nCritical Failure The target becomes Sickened 2 and takes 12d6 poison damage.\nHeightened 1 The damage increases by 1d6 on a failure and 2d6 on a critical failure.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "",
      "defense": "fortitude save",
      "damage": [
        {
          "formula": "6d6",
          "type": "poison",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 1d6 on a failure and 2d6 on a critical failure."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 260,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Tumble Through",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Tumble Through",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Tumble Through",
          "sourceId": "21WIfSu7Xd7uKqV8",
          "name": "Tumble Through",
          "type": "action"
        },
        "owner": {
          "sourceId": "ma3sndEAZdz0Cy2H",
          "name": "Mercurial Stride",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 662,
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
          "sourceId": "ma3sndEAZdz0Cy2H",
          "name": "Mercurial Stride",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 778,
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
          "sourceId": "ma3sndEAZdz0Cy2H",
          "name": "Mercurial Stride",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 955,
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
          "sourceId": "ma3sndEAZdz0Cy2H",
          "name": "Mercurial Stride",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:draw-the-lightning",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "n7OgbKme4hNwxVwQ",
      "slug": "draw-the-lightning",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:12e22f42a7b60c358c0309985f6d96404c9cc37d8a550be2eecf03f2759d01cb",
    "translatableHash": "sha256:78cbb0e52027cdf984a415dcd9aed25e3baee2ef3e904ba47964d68c80f85e84",
    "data": {
      "schemaVersion": 1,
      "name": "Draw the Lightning",
      "rank": 4,
      "rarity": "common",
      "traits": [
        "concentrate",
        "electricity",
        "manipulate",
        "metal"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "Calling out to the skies, you summon a bolt of lightning to strike through a foe above you and down into your weapon or your body, charging it with electrical power. You must hold your weapon or an empty hand aloft as part of this spell's somatic component. When you do, a bolt of lightning descends from a storm cloud in the air above your and through the target, dealing 3d12 electricity damage with a basic Reflex save. For the rest of the spell's duration, your first Strike each round with the weapon you held aloft (or with your unarmed attacks if you held an empty hand aloft) deals an additional 1d12 electricity damage.\nThe spell creates its own storm cloud if necessary, so you can cast draw the lightning anywhere, even underground. If draw the lightning is cast outside under a cloudy or stormy sky, increase the bolt's damage by 2d12 electricity damage.\nSpell Effect: Draw the Lightning\nHeightened (8th) The damage dealt to the initial target increases by 4d12, and the additional damage dealt on the first Strike each turn increases by 1d12.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "1 creature that is either taller than you or higher than you",
      "area": null,
      "duration": "1 minute",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "3d12",
          "type": "electricity",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (8th) The damage dealt to the initial target increases by 4d12, and the additional damage dealt on the first Strike each turn increases by 1d12."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 905,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Draw the Lightning",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Draw the Lightning",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Draw the Lightning",
          "sourceId": "fCIT9YgGUwIc3Z9G",
          "name": "Spell Effect: Draw the Lightning",
          "type": "effect"
        },
        "owner": {
          "sourceId": "n7OgbKme4hNwxVwQ",
          "name": "Draw the Lightning",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:grasp-of-the-deep",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "rwWtpZpkNYvypknx",
      "slug": "grasp-of-the-deep",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/grasp-of-the-deep.webp"
    },
    "sourceHash": "sha256:fbbcc0176341b79b99ea1472a2dbbf2f72d4aae765b05ef2c93853924b658701",
    "translatableHash": "sha256:b636d98506cd6163e1f62e8f65d4b52d2e5a06d24d65f61a855487ad393a9a55",
    "data": {
      "schemaVersion": 1,
      "name": "Grasp of the Deep",
      "rank": 4,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "mental",
        "water"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You grip one target with the phantasmal pressure of the deep sea, disorienting and crushing its lungs and joints. The target takes 6d6 bludgeoning damage and other effects, depending on its Will saving throw.\nCritical Success The creature is unaffected.\nSuccess The target takes half damage.\nFailure The target takes full damage, and feels as though it's being crushed. The target also becomes Grabbed, but it can attempt to Escape with an Escape DC equal to your spell DC.\nCritical Failure As failure, but the target takes double damage.\nHeightened (6th) You can target up to 5 creatures.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": "will save",
      "damage": [
        {
          "formula": "6d6",
          "type": "bludgeoning",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (6th) You can target up to 5 creatures."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 476,
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
          "sourceId": "rwWtpZpkNYvypknx",
          "name": "Grasp of the Deep",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 550,
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
          "sourceId": "rwWtpZpkNYvypknx",
          "name": "Grasp of the Deep",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:elemental-sense",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "wfqBbQ2RXj4VjKUZ",
      "slug": "elemental-sense",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:e156289bc135d336875fb31777ed9d9d761b6d1048ed9985667e36d06fe51aac",
    "translatableHash": "sha256:f6c9371a86c330f59fd33925ae60a9e8c4ca645f7ccc6a20528879830fa69a0d",
    "data": {
      "schemaVersion": 1,
      "name": "Elemental Sense",
      "rank": 4,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "revelation"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "The elements grant you sensory enhancements. Choose one of the options below. The spell gains the listed trait or traits.\n• Aquatic Echolocation (water) You use your hearing as a precise sense when underwater.\n• Heatsense (fire) You can sense creatures with a temperature of 90º Fahrenheit or higher within 30 feet as an imprecise sense.\n• Magnetoreception (metal) You can sense creatures carrying metal items with a total of 1 Bulk or greater; this is an imprecise sense with a range of 30 feet. If a creature is made of metal or has the metal trait, you can detect it as though magnetoreception were a precise sense. In addition, you continuously know which direction is north.\n• Mechanoreception (air) You can see Invisible creatures and objects. They appear to you as translucent shapes, and they are Concealed to you.\n• Tremorsense(earth) You gain tremorsense (imprecise) with a range of 30 feet.\n• Woodsense(plant, wood) You can sense creatures carrying wood items with a total of 1 Bulk or greater; this is an imprecise sense with a range of 30 feet. If a creature is made of wood or has the plant or wood trait, you can detect it as though woodsense were a precise sense.\nHeightened (6th) The duration increases to 8 hours, and you can take 1 minute to recalibrate the sense, switching from your current elemental sense to a different one.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (6th) The duration increases to 8 hours, and you can take 1 minute to recalibrate the sense, switching from your current elemental sense to a different one."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 820,
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
          "sourceId": "wfqBbQ2RXj4VjKUZ",
          "name": "Elemental Sense",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 951,
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
          "sourceId": "wfqBbQ2RXj4VjKUZ",
          "name": "Elemental Sense",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:grasping-earth",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Wpgt5TYcTHLDei6J",
      "slug": "grasping-earth",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/grasping-earth.webp"
    },
    "sourceHash": "sha256:79f5949dff292016ebd5999993d365e4452c5f3724a106179c640a142eb29b31",
    "translatableHash": "sha256:6fd09245088df4c6d5263edd9e26fad259e2c351aee64012f8160083f02130fa",
    "data": {
      "schemaVersion": 1,
      "name": "Grasping Earth",
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
      "description": "Handlike protrusions of rock and soil grab and bury creatures. Each creature in the area when you cast the spell, and each creature that ends its turn in the area during the spell's duration, must attempt a Fortitude save. The first time each round you Sustain this spell, each creature still Grabbed by the earth takes 1d6 bludgeoning damage, and each creature Restrained by the earth takes 2d6 bludgeoning damage. A creature can attempt to Escape, rolling against your spell DC.\nSuccess The creature is unaffected.\nFailure The creature is grabbed by the earth.\nCritical Failure The creature is restrained by the earth.\nHeightened 2 The bludgeoning damage dealt when you Sustain this spell increases by 1d6 for grabbed creatures and 2d6 for restrained creatures.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "",
      "area": "10 burst",
      "duration": "1 minute",
      "defense": "fortitude save",
      "damage": [
        {
          "formula": "1d6",
          "type": "bludgeoning",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The bludgeoning damage dealt when you Sustain this spell increases by 1d6 for grabbed creatures and 2d6 for restrained creatures."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 296,
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
          "sourceId": "Wpgt5TYcTHLDei6J",
          "name": "Grasping Earth",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 418,
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
          "sourceId": "Wpgt5TYcTHLDei6J",
          "name": "Grasping Earth",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 551,
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
          "sourceId": "Wpgt5TYcTHLDei6J",
          "name": "Grasping Earth",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:rust-cloud",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "yy2K51kK3a60rRIe",
      "slug": "rust-cloud",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:271cb385aa8251a15454150dcaf8919d71dbc9911afe340bbcb0736f45bec09f",
    "translatableHash": "sha256:c8001b1cf329c30bc6a3a20f41b1d507760b329ecba82b66ce5156e91c60aebb",
    "data": {
      "schemaVersion": 1,
      "name": "Rust Cloud",
      "rank": 4,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "metal"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "Red-blown flecks of rust jitter in the air, forming a cloud of agitated particles. All creatures within the cloud become Concealed, and all creatures outside the cloud become concealed to creatures within it. The cloud deals 5d10 slashing damage to any creature that starts its turn in the area, with a basic Fortitude save.\nMetal that rusts off of a creature adds to the cloud. When a metal creature takes damage from the cloud, the cloud's area increases by 5 feet (to a maximum of a 40-foot burst), and the creature starts to rust, taking 1d4 persistent slashing damage. You can Dismiss the cloud.\nHeightened 2 The cloud's slashing damage increases by 1d10 and the persistent damage increases by 1d4.",
      "castingTime": "3 actions",
      "range": "120 feet",
      "target": "",
      "area": "20 burst",
      "duration": "1 minute",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "5d10",
          "type": "slashing",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The cloud's slashing damage increases by 1d10 and the persistent damage increases by 1d4."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 124,
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
          "sourceId": "yy2K51kK3a60rRIe",
          "name": "Rust Cloud",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:misty-memory",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "zu40ATlcCjtfWBnj",
      "slug": "misty-memory",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:311e34029f910a269b50be376fd5ec3f90f48bc2b5f1f3276f7693a8971d041e",
    "translatableHash": "sha256:dd7103e6b1c63a0a93d8e6063c486c1da82ebb20418cd45f5e430cfd5c06f05d",
    "data": {
      "schemaVersion": 1,
      "name": "Misty Memory",
      "rank": 4,
      "rarity": "uncommon",
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
      "description": "Some say water holds memories or impressions of the past, and you can raise those memories to the surface to glimpse recent events. When you Cast the Spell, you fix your mind on an amount of time in the past, up to 24 hours ago. A mist rises from the target body of water, filling a 30-foot burst and coalescing into a misty scene of the events that took place at that time within 60 feet of the water.\nAny creature who can see the area can observe the images produced, which are a translucent white color and detailed enough to show a silhouette, outline, or contour of creatures and objects that passed through the area and the motions they took. Fine details, such as facial features or written letters, are too precise for the mist to form, and the scene is silent.\nYou can Sustain the spell to cause the mist to play events backward or forward, with each minute spent Sustaining corresponding to a minute of playback.\nStrong winds from a magical source can disrupt this spell if the effect succeeds at a counteract check against your spell DC.",
      "castingTime": "1 minute",
      "range": "",
      "target": "1 body of water of at least 5 square feet",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:mantle-of-the-unwavering-heart",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "3526YUgCvB5ZsKuX",
      "slug": "mantle-of-the-unwavering-heart",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/mantle-of-the-unwavering-heart.webp"
    },
    "sourceHash": "sha256:f7dc738dc744584aef154ca6ae0d5c6a0a0aba48920c6d25c0801c80e5d31865",
    "translatableHash": "sha256:9274d9ff5b96a9505d1140981e8d5a2567abd9151fe139a55945801a181ef967",
    "data": {
      "schemaVersion": 1,
      "name": "Mantle of the Unwavering Heart",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "morph",
        "plant",
        "wood"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "Vines and branches envelop you in an instant, growing a wild bloom of colors that open to reveal your new form. Upon Casting this Spell, pick two of the options below. As a single action, which has the concentrate trait, you can change one of your chosen abilities to a different option from the list.\n• Evergreen Vitality You gain fast healing 3 and a +2 bonus to saves against poison and disease. This effect has the healing and vitality traits.\n• Overwhelming Perfume (aura, olfactory) A cloud of potent floral scent surrounds you in a 15-foot emanation. Creatures in the aura can't benefit from the scent ability and are Sickened 1 as long as they remain in the aura. The sickness is a disease effect.\n• Towering Trunk You grow to a considerable height. Increase your size to Large. You're Clumsy 1. Your reach increases by 5 feet (or by 10 feet if you started out Tiny), and you gain a grasping branch unarmed attack; this attack is in the brawling weapon group and deals 2d8 bludgeoning damage plus Grab.\n• Unyielding Will Your mind becomes incredibly resilient to change. You're immune to being Fascinated, and you get a +1 bonus to saves and DCs against mental effects.\nSpell Effect: Mantle of the Unwavering Heart",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
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
        "sourceIndex": 695,
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
          "sourceId": "3526YUgCvB5ZsKuX",
          "name": "Mantle of the Unwavering Heart",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 941,
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
          "sourceId": "3526YUgCvB5ZsKuX",
          "name": "Mantle of the Unwavering Heart",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1334,
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
          "sourceId": "3526YUgCvB5ZsKuX",
          "name": "Mantle of the Unwavering Heart",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1467,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Mantle of the Unwavering Heart",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Mantle of the Unwavering Heart",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Mantle of the Unwavering Heart",
          "sourceId": "OlkrQOPjLclyyxCw",
          "name": "Spell Effect: Mantle of the Unwavering Heart",
          "type": "effect"
        },
        "owner": {
          "sourceId": "3526YUgCvB5ZsKuX",
          "name": "Mantle of the Unwavering Heart",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:wisdom-of-the-winds",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "4cv1cuBHjYmVfBGI",
      "slug": "wisdom-of-the-winds",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:38b6a362c30814081c3d7483101b996f03e431b2a308fea9c7d09641152dcaa9",
    "translatableHash": "sha256:8be44b472599fb1401b125ed4150857605a248c2db6bd10538ea8d2ab3459a2a",
    "data": {
      "schemaVersion": 1,
      "name": "Wisdom of the Winds",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "air",
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult",
        "primal"
      ],
      "description": "You ask a question of the spirits of air, imploring them to send signals through the winds to help you find your way. You might be guided by air elementals, anemoi, or even the Lords of Air themselves. You receive guidance as either words of wisdom or a rustling wind that guides you to a helpful destination—whichever the spirits think will be most beneficial. The spirits don't give guidance you can't follow, such as winds that lead somewhere you can't reach, nor do they give advice that will help their causes at the expense of your own. If you've upset all the spirits of air, they don't mislead you but do refuse to guide you.\n• Guiding Gale (detection) A noticeable wind flows continuously toward a destination the spirits think will be valuable for you to find. Though you can't ask for a specific destination, the spirits understand your current circumstances and urgent priorities. They won't lead you to a location you're already aware of or can currently see, unless this might lead you to a fruitful destination you've already dismissed as an option. The spell has a duration of 8 hours or until you reach the destination, whichever comes first. When you arrive, the winds swirl in playful circles and then disperse to make it clear you're in the right place.\n• Voice of the Sky (auditory, linguistic, prediction) A voice on the wind, clearly audible to you, gives you advice on a course of action that holds positive potential for you. This advice is rarely more than two or three sentences long, typically spoken in Sussuran if you understand it, and Common if not. If you can't hear, the spirits blow small objects around to mimic written words or sign language. If following the advice poses great danger, the spirits typically note this risk but rarely go into detail. The advice is instant, so the spell doesn't have a duration.",
      "castingTime": "1 minute",
      "range": "",
      "target": "",
      "area": null,
      "duration": "varies",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:freezing-rain",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "9AZEObUdLI2fwmPl",
      "slug": "freezing-rain",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/freezing-rain.webp"
    },
    "sourceHash": "sha256:9a16c60b136efd3be21696e56f6a1e4a71f737c6d586f93f8a455f4c13323f4b",
    "translatableHash": "sha256:498b3e59674ad30a61dc5a8acbb4ca558bf70d63ee17f2438a04f2ebf73a8ddd",
    "data": {
      "schemaVersion": 1,
      "name": "Freezing Rain",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "cold",
        "concentrate",
        "manipulate",
        "water"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "Intense cold rain comes from nowhere, a microcosm of a sudden downpour, and a magical tweak can turn the rain to freezing sleet. The driving rain and pooling water make the area difficult terrain and extinguish non-magical fires.\nOn subsequent rounds, the first time you Sustain the spell each round, you can move the area up to 20 feet and can also freeze the rain. If you freeze the rain, each creature in the area takes 4d6 cold damage and might be slowed, depending on result of its Reflex save.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage.\nFailure The creature takes full damage and is Slowed 1 for 1 round.\nCritical Failure The creature takes double damage and is Slowed 2 for 1 round.\nHeightened 1 The damage increases by 1d6.",
      "castingTime": "3 actions",
      "range": "120 feet",
      "target": "",
      "area": "20 burst",
      "duration": "10 minutes",
      "defense": "reflex save",
      "damage": [
        {
          "formula": "4d6",
          "type": "cold",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 1d6."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 720,
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
          "sourceId": "9AZEObUdLI2fwmPl",
          "name": "Freezing Rain",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 874,
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
          "sourceId": "9AZEObUdLI2fwmPl",
          "name": "Freezing Rain",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:engrave-memory",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ddqmGnShyoRBKFkZ",
      "slug": "engrave-memory",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:384bab2040a0b34b86f86ec6d82039882e526c8c13cb4bb525f649140c3294c3",
    "translatableHash": "sha256:bcea13f38f549a10c76762d4ad9eeead2a4f8d8729638716d9c4759f40d765fb",
    "data": {
      "schemaVersion": 1,
      "name": "Engrave Memory",
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
      "description": "You store memories inside a stone. This memory can convey up to 10 minutes of material. When you Cast this Spell, choose a command word. Doing so creates a carved symbol on the stone that hints at the word. Any creature can access the memories stored within the stone by using an action to speak the command word.\nAs it imparts the memories, the stone crumbles to dust, but the memory is infallibly available to the creature that activated the stone for the next 24 hours. After that time, the creature's normal capacity for memory must be relied upon to recall the stone's imparted memory. It's up to the GM what benefit the imparted memory grants, from circumstance bonuses to checks related to the memory or clear information on subjects the memory covers.",
      "castingTime": "1 minute",
      "range": "touch",
      "target": "1 stone of at least 1 Bulk",
      "area": null,
      "duration": "unlimited",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:pressure-zone",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "e4c73RBCQAZdYxau",
      "slug": "pressure-zone",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/pressure-zone.webp"
    },
    "sourceHash": "sha256:43ba2472359f7f50c055140cd26ac7c6f00f7fd950c1dd213c28729f8cbcd3dd",
    "translatableHash": "sha256:3ef4dd2fcb4e0ac3da6fc39546bb66941bb2f3dddd90e6c4507d4187b2c2daf8",
    "data": {
      "schemaVersion": 1,
      "name": "Pressure Zone",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "air",
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "Air pressure drops precipitously, causing pain and debilitation in creatures' inner ears and joints. Each living creature in the area of the spell when you cast it or that enters the area during the spell's duration must attempt a Fortitude save.\nCritical Success The creature is unaffected.\nSuccess The creature is Deafened and Clumsy 1 until the end of its next turn, after which it's temporarily immune for 1 hour.\nFailure The creature is deafened and Clumsy 2. At the end of each of its turns, it can attempt a new save if it's no longer in the pressure zone. On a success, it ends the effects and is temporarily immune for 1 hour.\nCritical Failure The creature is deafened and clumsy 2 for the duration of the spell.\nA creature Deafened by this spell can attempt to end the condition by popping its ears. It can use a single action to attempt a new Fortitude save, losing the deafened condition from this spell on a success. Some creatures with anatomies that lack inner ears or joints might be immune to these effects, as determined by the GM.",
      "castingTime": "3 actions",
      "range": "500 feet",
      "target": "",
      "area": "20 burst",
      "duration": "1 minute",
      "defense": "fortitude save",
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 374,
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
          "sourceId": "e4c73RBCQAZdYxau",
          "name": "Pressure Zone",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 430,
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
          "sourceId": "e4c73RBCQAZdYxau",
          "name": "Pressure Zone",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 631,
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
          "sourceId": "e4c73RBCQAZdYxau",
          "name": "Pressure Zone",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 991,
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
          "sourceId": "e4c73RBCQAZdYxau",
          "name": "Pressure Zone",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:elemental-breath",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "fg5ZlSVXzGHNJfbO",
      "slug": "elemental-breath",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/elemental-breath.webp"
    },
    "sourceHash": "sha256:7889a16e086981aa04400bbe04ac23d096fa76d0a187dc3af9d69b58f6e90de9",
    "translatableHash": "sha256:3809f599749fbdcb1a235991acffd841e1e06ada5ca8b2887b06aedb0c0f8e91",
    "data": {
      "schemaVersion": 1,
      "name": "Elemental Breath",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You open a miniature portal to an elemental plane within your mouth, then exhale a powerful explosion of the plane's element. Roll 1d6 to determine the element. If you used 3 actions to Cast this Spell, you can choose the element instead. This spell gains the trait matching the element.\nEach creature in the cone must attempt a basic Reflex save.\n• Air Strong winds and lightning strikes buffet creatures in the cone, dealing 6d10 electricity damage. A creature that fails its save is also pushed 10 feet.\n• Earth A cone of mud deals 5d10 bludgeoning damage to creatures in the area. A creature on the ground that fails its save slips and falls Prone.\n• Fire A surging cone of fire deals 7d10 fire damage.\n• Metal A cone of rust slices flesh and damages metal. Each creature in the area takes 5d10 slashing damage. A creature made of metal gets a result one degree of success worse than it rolled, and an unattended metal object gets a critical failure.\n• Water A torrent of chilled water deals 3d10 cold damage and 3d10 bludgeoning damage.\n• Wood Branches rip through creatures, dealing 3d10 piercing damage and 3d10 slashing damage. Ground in the area becomes difficult terrain for 1 minute.\nHeightened 1 The damage increases by 1d10. For water and wood, you can choose which damage type increases for each rank the spell is heightened.",
      "castingTime": "2 or 3",
      "range": "",
      "target": "",
      "area": "60 cone",
      "duration": "",
      "defense": "basic reflex save",
      "damage": [],
      "heightening": "Heightened 1 The damage increases by 1d10. For water and wood, you can choose which damage type increases for each rank the spell is heightened."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 728,
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
          "sourceId": "fg5ZlSVXzGHNJfbO",
          "name": "Elemental Breath",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:fires-pathway",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "nnYxDWU3Vzg9WenB",
      "slug": "fires-pathway",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/fires-pathway.webp"
    },
    "sourceHash": "sha256:94ea586bc97f27e0643e1209d29592603b0711b31638465b162c73aabf858e60",
    "translatableHash": "sha256:8abe18890d1664d2ae1686ed55dd8d3e6b9604fa04a695d8a3a8a8e3e84c87d4",
    "data": {
      "schemaVersion": 1,
      "name": "Fire's Pathway",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "fire",
        "manipulate",
        "teleportation"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You step into a blazing fire that's big enough for you to fit inside and instantly teleport to any other fire within 5 miles that also has a sufficiently large size. Once you enter the first fire, you instantly know the rough locations of other sufficiently large fires within range and can exit from the original fire, if you prefer. You can't carry extradimensional spaces with you; if you attempt to do so, the spell fails.\nHeightened (6th) The fire you exit can be up to 50 miles away.\nHeightened (8th) The fire you exit can be up to 500 miles away.\nHeightened (9th) The fire you exit can be anywhere on the same planet.",
      "castingTime": "1 minute",
      "range": "",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (6th) The fire you exit can be up to 50 miles away.\nHeightened (8th) The fire you exit can be up to 500 miles away.\nHeightened (9th) The fire you exit can be anywhere on the same planet."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:flame-dancer",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "p6ebe2PliRkGbmiV",
      "slug": "flame-dancer",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:3ad28beb27366536d240608d7ffd5008661f7788f058e951127ed1095f4c8fa3",
    "translatableHash": "sha256:5eca041e8a22600e3e1d797386fed256b0d30395de5128db24df175a319f39f7",
    "data": {
      "schemaVersion": 1,
      "name": "Flame Dancer",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "concentrate",
        "fire",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult",
        "primal"
      ],
      "description": "Fire encircles the target's hands and feet, and its eyes and hair catch ablaze. The target's unarmed Strikes deal an additional 2d6 fire damage. Critical hits with these Strikes also deal 2d4 persistent fire damage. Additionally, when the target attempts to Demoralize a foe, they can use Performance instead of Intimidation; when using Performance to Demoralize, the action loses the auditory trait but gains the visual trait, and the target doesn't take a penalty when attempting to Demoralize a creature that doesn't understand its language.\nHeightened (7th) The fire damage increases to 3d6, and the persistent fire damage increases to 3d4. If the target gets a critical success on a Demoralize check using Performance, the target of the Demoralize check becomes Fleeing from the target of flame dancer for 1 round.\nSpell Effect: Flame Dancer",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "1 willing creature",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (7th) The fire damage increases to 3d6, and the persistent fire damage increases to 3d4. If the target gets a critical success on a Demoralize check using Performance, the target of the Demoralize check becomes Fleeing from the target of flame dancer for 1 round.\nSpell Effect: Flame Dancer"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 261,
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
          "sourceId": "p6ebe2PliRkGbmiV",
          "name": "Flame Dancer",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 841,
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
          "sourceId": "p6ebe2PliRkGbmiV",
          "name": "Flame Dancer",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 953,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Flame Dancer",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Flame Dancer",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Flame Dancer",
          "sourceId": "1cBl1gVcpzOqlluC",
          "name": "Spell Effect: Flame Dancer",
          "type": "effect"
        },
        "owner": {
          "sourceId": "p6ebe2PliRkGbmiV",
          "name": "Flame Dancer",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:mantle-of-the-melting-heart",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "UcS6Tw9OuOAEDfzg",
      "slug": "mantle-of-the-melting-heart",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/mantle-of-the-melting-heart.webp"
    },
    "sourceHash": "sha256:c975580fa34b724904aa7bc58ecc83a6a4f932dd3aeb9445f0e22eb5cecc467b",
    "translatableHash": "sha256:ff57b96737e0a788b19bd2bb7ca500879325b957c23af4840691ff737662c18d",
    "data": {
      "schemaVersion": 1,
      "name": "Mantle of the Melting Heart",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "metal",
        "morph"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You bathe yourself in a mantle of liquid metal, gilding your skin and armor with an oily sheen. Upon Casting this Spell, pick two of the options below. As a single action, which has the concentrate trait, you can change one of your chosen abilities to a different option from the list.\n• Copper Core You draw electricity toward you, then disperse it. You gain resistance 10 to electricity. All electricity effects within 30 feet of you must succeed at a counteract check against your spell DC or target you and only you.\n• Golden Flesh Your body gains the chemical inertness of gold, barely reacting to substances that would otherwise greatly disturb your physiology. You become immune to poison and disease and gain a +2 circumstance bonus to your checks against any poison and disease effects currently affecting you.\n• Reactive Touch Your touch reacts easily with other metals. Any metal that touches you or that you touch takes 2d6 acid damage that bypasses Hardness.\n• Weighted Grasp Your arms become long cables, your fists heavy as anchors. You gain a cabled fist unarmed attack with the disarm, finesse, reach, and trip traits and that's in the flail group. Your cabled fist deals 1d4 bludgeoning damage plus an additional 1d6 poison damage and Grab.\nSpell Effect: Mantle of the Melting Heart",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
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
        "sourceIndex": 1379,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Mantle of the Melting Heart",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Mantle of the Melting Heart",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Mantle of the Melting Heart",
          "sourceId": "T2wbyGJrH9XY24o6",
          "name": "Spell Effect: Mantle of the Melting Heart",
          "type": "effect"
        },
        "owner": {
          "sourceId": "UcS6Tw9OuOAEDfzg",
          "name": "Mantle of the Melting Heart",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:entwined-roots",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "VDK5cQ94BszDrMiJ",
      "slug": "entwined-roots",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:0146816f8e9eaa2b98408e5c5b9d31c510bb3f43cd425e8c403b31b5015824ba",
    "translatableHash": "sha256:c159aae13518740922d9011513bbcaa5421b17e720111420cf29b42ed9ccb4d6",
    "data": {
      "schemaVersion": 1,
      "name": "Entwined Roots",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "wood"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "Slithering roots gird you and your allies in layers of flexible wooden protection. Each affected creature gains resistance 5 to bludgeoning and piercing damage. Whenever a creature protected by these roots is targeted by a ranged weapon attack but takes no damage (such as if the attack missed or the damage was reduced to 0 by resistance), the roots snatch up the ammunition or thrown weapon and hold it. The protected creature can retrieve the thrown weapon or ammunition as an Interact action.\nSpell Effect: Entwined Roots\nHeightened (7th) The resistances increase to 10.\nHeightened (9th) The resistances increase to 15.",
      "castingTime": "1 minute",
      "range": "",
      "target": "Up to 5 willing living creatures",
      "area": "20 burst",
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (7th) The resistances increase to 10.\nHeightened (9th) The resistances increase to 15."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 507,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Entwined Roots",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Entwined Roots",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Entwined Roots",
          "sourceId": "nFOJ53IkO5khO4Rr",
          "name": "Spell Effect: Entwined Roots",
          "type": "effect"
        },
        "owner": {
          "sourceId": "VDK5cQ94BszDrMiJ",
          "name": "Entwined Roots",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:flames-of-ego",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ZClfmMoKG3E926Uq",
      "slug": "flames-of-ego",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/flames-of-ego.webp"
    },
    "sourceHash": "sha256:2ddac1201749395bf661267574617031a0591c5257e6e27bf40946a96b34f372",
    "translatableHash": "sha256:27321aea5cb3c825890d33242ddf9b3b24b3b2b8791f0c88028763a1c60a4fcc",
    "data": {
      "schemaVersion": 1,
      "name": "Flames of Ego",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "concentrate",
        "fire",
        "incapacitation",
        "light",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "arcane",
        "occult",
        "primal"
      ],
      "description": "Elegant flames of incredible beauty coruscate across the target's body, creating overconfidence and carelessness. The target attempts a Will save.\nCritical Success The target is unaffected.\nSuccess The target sheds bright light in a 20-foot emanation (and dim light to the next 40 feet) and becomes Fascinated with itself for 1 round. It must spend at least 1 action on its turn on a taunting display of arrogance or overconfidence. Using actions that include such a display—such as using Perform to show off—count toward this requirement.\nFailure As success, but the duration is 1 minute and the target can't act hostile toward a creature until that creature acts hostile toward the target.\nCritical Failure As failure, except the target must spend at least 2 actions on its turn on a taunting display of arrogance or overconfidence.",
      "castingTime": "2 actions",
      "range": "120 feet",
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
        "sourceIndex": 372,
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
          "sourceId": "ZClfmMoKG3E926Uq",
          "name": "Flames of Ego",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 605,
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
          "sourceId": "ZClfmMoKG3E926Uq",
          "name": "Flames of Ego",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:lignify",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "2hMy9ROM2dOZB8Jq",
      "slug": "lignify",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/lignify.webp"
    },
    "sourceHash": "sha256:6ba71931288b692e7cedeeae0d2a301a9b4b3e5be2a3429b68779ee37dba99c2",
    "translatableHash": "sha256:196fcf2b3cf2380cdb18eef05c61a1bb7f275eec032b4efa5c295a5170862f21",
    "data": {
      "schemaVersion": 1,
      "name": "Lignify",
      "rank": 6,
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
      "description": "You turn the target's flesh slowly into wood. The target must attempt a Fortitude save. Creatures with the plant trait have a +2 circumstance bonus to saves against this spell.\nCritical Success The target is unaffected.\nSuccess The target is Slowed 1 for 1 round.\nFailure The target is slowed 1 and must attempt a Fortitude save at the end of each of its turns; this ongoing save has the incapacitation trait. On a failed save, the slowed condition increases by 1 (or 2 on a critical failure). A successful save reduces the slowed condition by 1. When a creature is unable to act due to the slowed condition from lignify, the creature is permanently non-magically petrified, though it's turned to wood instead of stone. The spell ends if the creature is magically petrified or the slowed condition is removed.\nCritical Failure As failure, but the target is initially Slowed 2.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "1 creature made of flesh",
      "area": null,
      "duration": "varies",
      "defense": "fortitude save",
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 300,
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
          "sourceId": "2hMy9ROM2dOZB8Jq",
          "name": "Lignify",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1024,
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
          "sourceId": "2hMy9ROM2dOZB8Jq",
          "name": "Lignify",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:phantom-orchestra",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "7idCEYHnPpVNL9vX",
      "slug": "phantom-orchestra",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/phantom-orchestra.webp"
    },
    "sourceHash": "sha256:076974220c0bffe8ad1b54babe30dedfe2e69a4d12fa02b3565605a87364855e",
    "translatableHash": "sha256:3c0b639d6e916dc495f64d7f0554598cb5f9945ddc7370974b2fdb9f331ef203",
    "data": {
      "schemaVersion": 1,
      "name": "Phantom Orchestra",
      "rank": 6,
      "rarity": "common",
      "traits": [
        "air",
        "concentrate",
        "manipulate",
        "sonic"
      ],
      "traditions": [
        "arcane",
        "occult",
        "primal"
      ],
      "description": "You orchestrate an invisible ensemble of lost sounds captured inside errant breezes across the Plane of Air, and you can direct this symphony to attack foes within range. The sounds materialize and manifest as directed, appearing as silhouetted instruments and musicians that dance and bob in the wind.\nWhen you Cast the Spell, a captured breath of ephemeral music explodes in a great crescendo, appearing in a space you choose within range. On subsequent rounds, the first time you Sustain the Spell each round, you can move your conjured melody to a space within range (if needed) and create another explosion of music.\nEach explosion of sound from the phantom orchestra deals 8d6 sonic damage to all creatures in a 10-foot burst (basic Fortitude save). The phantom orchestra doesn't take up space, grant flanking, or have any other attributes a creature would.\nHeightened 1 The damage increases by 1d6.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "",
      "area": "10 burst",
      "duration": "1 minute",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "8d6",
          "type": "sonic",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:arrow-salvo",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "7PnjDM52lb4LEqHR",
      "slug": "arrow-salvo",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:760980dac19d2cd7b5f3ad9837698f522c5d975a358f6a5849b923cd1b86ff6c",
    "translatableHash": "sha256:95450dc5c5dd338a7eb011330118469a2cf94bf3295d9e6d806842c12f38a530",
    "data": {
      "schemaVersion": 1,
      "name": "Arrow Salvo",
      "rank": 6,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "wood"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You conjure an immense wooden bow that launches a salvo of massive arrows at all nearby enemies. All creatures in the affected area take 8d10 piercing damage, with a basic Reflex save. On a critical failure, the target is knocked Prone from the force of the impact.\nHeightened 1 Increase the damage by 1d10.",
      "castingTime": "2 actions",
      "range": "100 feet",
      "target": "",
      "area": "30 burst",
      "duration": "",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "8d10",
          "type": "piercing",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 Increase the damage by 1d10."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 233,
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
          "sourceId": "7PnjDM52lb4LEqHR",
          "name": "Arrow Salvo",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:wall-of-metal",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "CB5TlGv5ZghtMifi",
      "slug": "wall-of-metal",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:4a206bfe147e2d9c97ca42824a8a7dfc81fd60c9be2eadc66d5873af9a5d4864",
    "translatableHash": "sha256:9bbbb0f1f337cd4cf99c560d19367fa8db8e69998e45b71bb3e90e0e1aeea4db",
    "data": {
      "schemaVersion": 1,
      "name": "Wall of Metal",
      "rank": 6,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "metal"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You call forth a sheet of metal, forming a wall of iron, low-grade cold iron, or standard-grade silver up to 60 feet long, 30 feet high, and 1/4 inch thick. The wall doesn't need to stand vertically but must form a straight line in an unbroken open space so it doesn't pass through any creatures or objects, or the spell is lost. Each 10-foot-by-10- foot section of the wall has AC 10 and is immune to critical hits and precision damage. The wall's Hardness, HP, and BT use the statistics of a structure of the material you chose. Creatures can move through a section of the wall that's broken.\nHeightened (7th) The wall is high-grade silver or standard-grade dawnsilver.\nHeightened (8th) The wall is standard-grade cold iron.\nHeightened (9th) The wall is high-grade dawnsilver.\nHeightened (10th) The wall is high-grade cold iron or standard-grade adamantine.",
      "castingTime": "3 actions",
      "range": "120 feet",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (7th) The wall is high-grade silver or standard-grade dawnsilver.\nHeightened (8th) The wall is standard-grade cold iron.\nHeightened (9th) The wall is high-grade dawnsilver.\nHeightened (10th) The wall is high-grade cold iron or standard-grade adamantine."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:elemental-confluence",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Cpj05laa7ogqGwS3",
      "slug": "elemental-confluence",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/elemental-confluence.webp"
    },
    "sourceHash": "sha256:9cc8cec102146c071f8ac857337f332f0ce7ffbbf7d19dd22e3d50e0753cd7c4",
    "translatableHash": "sha256:87ea13f49dbafafd459ac021258fa6464953e7b6bf142ec36845b90f413654ae",
    "data": {
      "schemaVersion": 1,
      "name": "Elemental Confluence",
      "rank": 6,
      "rarity": "common",
      "traits": [
        "air",
        "concentrate",
        "earth",
        "fire",
        "manipulate",
        "metal",
        "water",
        "wood"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You conjure four types of elementals who combine forces to form into a chaotic storm. The confluence has AC 28 and 120 Hit Points, weakness 10 to area effects, and immunity to bleed and poison. Creatures can move through the confluence; creatures within the confluence are concealed, and all creatures outside the confluence are concealed to creatures within it. When you Cast or Sustain this Spell, you choose up to two different types of elementals to act.\n• Air (air, electricity) The elemental looses a bolt of electricity from the confluence, dealing 4d4 electricity damage to creatures within 20 feet of the confluence, with a basic Reflex save. This doesn't affect creatures that are completely inside of the confluence.\n• Earth (earth) The confluence gains a +2 circumstance bonus to AC and resistance 10 to all physical damage (except adamantine) for 1 round.\n• Fire (fire) Flames roar through the confluence, dealing 1d6 persistent fire damage to those partially or entirely inside the confluence.\n• Metal (metal) The elemental flings shards of metal through the confluence, dealing 2d6 slashing damage to those partially or entirely inside the confluence with a basic Reflex save. A creature that critically fails also takes 1d6 persistent bleed damage.\n• Water (attack, water) The elemental expels a powerful jet of water. Attempt a ranged spell attack against a target within 60 feet of the confluence, using your spell attack roll modifier. This attack ignores concealment granted by the confluence, and the elemental gets a +2 circumstance bonus on the spell attack roll against a target inside the confluence. The water deals 4d6 bludgeoning damage on a hit (doubled on a critical hit). This attack doesn't count toward your multiple attack penalty.\n• Wood (wood) Roots and stumps grow, making ground in the area difficult terrain.",
      "castingTime": "3 actions",
      "range": "60 feet",
      "target": "",
      "area": "10 burst",
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:vitrifying-blast",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "g2V4ID0pl1ZGAxZj",
      "slug": "vitrifying-blast",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:bdfb6a20ebacb463d074ee4986f97f15d3a7b60e63ee832b64f9be2bdd196dbf",
    "translatableHash": "sha256:1f40a20fd6002e39e2d8ce5576fb6b17ea25b43452d577d493cb813defe215df",
    "data": {
      "schemaVersion": 1,
      "name": "Vitrifying Blast",
      "rank": 6,
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
      "description": "You launch a cone of glass shards, which embed in creatures to turn them partially to glass. The shards deal 8d6 piercing damage to creatures in the area, based on each creature's saving throw.\nCritical Success The target is unaffected.\nSuccess The target takes half damage and gains weakness 3 to sonic and bludgeoning damage for 1 round.\nFailure The target takes full damage, is Slowed 1, and gains weakness to sonic and bludgeoning damage. The weakness is equal to 3 × the slowed value it has from this spell. The target must attempt a Fortitude save at the end of each of its turns; this ongoing save has the incapacitation trait. On a failed save, the creature's slowed value increases by 1 (or by 2 on a critical failure), to a maximum of Slowed 3. A successful save reduces the creature's slowed value by 1 (or by 2 on a critical success). If the creature ends its turn with a slowed value of 0, the effect ends.\nCritical Failure As failure, but the target is initially Slowed 2.\nSpell Effect: Vitrifying Blast\nHeightened 1 The damage increases by 1d6.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "",
      "area": "15 cone",
      "duration": "varies",
      "defense": "reflex save",
      "damage": [
        {
          "formula": "8d6",
          "type": "piercing",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 1d6."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 463,
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
          "sourceId": "g2V4ID0pl1ZGAxZj",
          "name": "Vitrifying Blast",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 878,
        "uuid": "Compendium.pf2e.conditionitems.Item.Slowed",
        "label": "Slowed 3",
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
          "sourceId": "g2V4ID0pl1ZGAxZj",
          "name": "Vitrifying Blast",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1185,
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
          "sourceId": "g2V4ID0pl1ZGAxZj",
          "name": "Vitrifying Blast",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1253,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Vitrifying Blast",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Vitrifying Blast",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Vitrifying Blast",
          "sourceId": "UFfItbPq9cVq3LNa",
          "name": "Spell Effect: Vitrifying Blast",
          "type": "effect"
        },
        "owner": {
          "sourceId": "g2V4ID0pl1ZGAxZj",
          "name": "Vitrifying Blast",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:personal-ocean",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "K2bTUhucPyhXlzjw",
      "slug": "personal-ocean",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:0b20b83f62d936d86dc36590e3e4bff6c7d9276d33780eefc7d3c51311461d3d",
    "translatableHash": "sha256:600c6513642452dfcdf1bd2062d145293e801baf0b268e4d437ddf3cb69ecbb3",
    "data": {
      "schemaVersion": 1,
      "name": "Personal Ocean",
      "rank": 6,
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
      "description": "You surround yourself in a bubble-like shroud of seawater that fills your space completely and moves with you. You can breathe, speak, and perceive normally while within your personal ocean, and you gain a swim Speed equal to your land Speed if you don't have one. The rules of aquatic combat apply to you, attacks targeting you, or attacks passing through your square. For instance, a bludgeoning or slashing melee attack targeting you would take a –2 circumstance penalty, and you can't cast fire spells or use actions with the fire trait.\nEach time you move, you extinguish non-magical fires in spaces you pass through and can attempt to counteract magical fires you move through. If you successfully counteract a fire larger than the spaces you moved through, you merely push it out of the spaces along your path. If you fail to counteract a given fire, you can't counteract that fire for the duration of the spell.\nYou can Dismiss the spell.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:field-of-razors",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "MLYTWHfewOpI3Cz7",
      "slug": "field-of-razors",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/field-of-razors.webp"
    },
    "sourceHash": "sha256:7701430464b1777a4a5a86d17bdda5d7680388de70ba6f6c0ecd4e9073a01335",
    "translatableHash": "sha256:1d706d0c72dfe805a632706da65268d4a1134c7f0bd218d3cc39015c66f866a4",
    "data": {
      "schemaVersion": 1,
      "name": "Field of Razors",
      "rank": 6,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "metal"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You grind a chunk of your choice of metal to fine dust between your hands and blow it into the air, where it grows into a tangle of wires covered in razor-sharp prongs. The metal must be of a type you currently have in your possession. The covered area is difficult terrain. A creature that moves through the area takes 5 slashing damage per square traversed.\nIf a creature takes slashing, piercing, or persistent bleed damage while inside the thicket, you can spend a reaction to grow the iron in the shed blood into additional wires, expanding the burst by 5 feet. You can grow the area four times in this way, to a maximum of a 40-foot burst.\nThe barbed wires are made of the metal you chose and activate resistances, weaknesses, and the like normally. The metal reforms in your possession when the spell ends.\nHeightened 1 The damage per square increases by 2.",
      "castingTime": "3 actions",
      "range": "60 feet",
      "target": "",
      "area": "20 burst",
      "duration": "",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "5",
          "type": "slashing",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage per square increases by 2."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:frost-pillar",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "R5r4vtmlvOA8hDiF",
      "slug": "frost-pillar",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/frost-pillar.webp"
    },
    "sourceHash": "sha256:8cee78fd42974fa93b86ee2a51694361ecf43f4db4da020ba12e637b79473a7e",
    "translatableHash": "sha256:2690c8c890d3191b473d18b5bef93e37c8ce409a28f1509ec21938112aeb3fbc",
    "data": {
      "schemaVersion": 1,
      "name": "Frost Pillar",
      "rank": 6,
      "rarity": "common",
      "traits": [
        "cold",
        "concentrate",
        "manipulate",
        "water"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "Ice crystallizes around a creature, imprisoning it within an icy pillar. On a successful saving throw, the creature is pushed to an adjacent space of its choice; otherwise, it's frozen inside the pillar and becomes Restrained as its body can barely move within the ice. The ice has AC 10, Hardness 10, and 60 Hit Points; it's immune to critical hits, cold damage, and precision damage, and it has weakness 15 to fire. If the ice is destroyed, the creature within is freed and the spell immediately ends.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
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
        "sourceIndex": 218,
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
          "sourceId": "R5r4vtmlvOA8hDiF",
          "name": "Frost Pillar",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:natures-reprisal",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "YtBZq49N4Um1cwm7",
      "slug": "natures-reprisal",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:b2e7f4c404124e21adae6e4bd6e86ac9783f5afad9485c6ede82eaa67f5c44cf",
    "translatableHash": "sha256:9e2b5a0a87b7cc6217afe245831e89e5ac1f290ae4824073038bae209186a7f5",
    "data": {
      "schemaVersion": 1,
      "name": "Nature's Reprisal",
      "rank": 6,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "plant",
        "poison",
        "wood"
      ],
      "traditions": [
        "primal"
      ],
      "description": "The plant life within the area begins to writhe and lash out against your enemies as you call upon nature to impede your foes. To your enemies, the area becomes difficult terrain, and areas that were naturally difficult terrain due to plants become greater difficult terrain as well as hazardous terrain, dealing 6 poison damage to an enemy each time it enters an affected square.\nHeightened 1 The poison damage of the hazardous terrain increases by 1.",
      "castingTime": "3 actions",
      "range": "120 feet",
      "target": "all squares on the ground that contain plants in an 80-foot burst",
      "area": "80 burst",
      "duration": "1 minute",
      "defense": null,
      "damage": [
        {
          "formula": "6",
          "type": "poison",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The poison damage of the hazardous terrain increases by 1."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:hungry-depths",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "0EzLXIpPPH0LOKqt",
      "slug": "hungry-depths",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/hungry-depths.webp"
    },
    "sourceHash": "sha256:3542a8d541dcdb0da33426edccad4da3d27425251b50dde88f572d32f60fd71d",
    "translatableHash": "sha256:2a2d688702929771ac42f737aca4ca247b78dbc55a41acd5138d03b1dd2289a9",
    "data": {
      "schemaVersion": 1,
      "name": "Hungry Depths",
      "rank": 7,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "void",
        "water"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "A spiral of dark, corrupted water appears in the ground, plunging open a door to the depths that seems to descend for miles. Disembodied glowing eyes and gnashing teeth spin within the vortex, consuming anything that crosses their path.\nAll creatures in the area take 4d8 piercing damage plus 4d4 void damage (basic Reflex save). Each time you Sustain the spell, you can increase the vortex's radius by 5 feet, to a maximum of 15 feet, or you can move the vortex up to 10 feet in a straight line. Each creature the vortex moves through takes the damage with a basic Reflex save. A creature can take damage from hungry depths only once per round.\nIf cast underwater, hungry depths instead fills a 40-foot-tall cylinder with a 5-foot radius.\nHeightened (9th) The vortex deals 5d8 piercing damage and 5d4 void damage.",
      "castingTime": "3 actions",
      "range": "120 feet",
      "target": "",
      "area": "5 burst",
      "duration": "1 minute",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "4d8",
          "type": "piercing",
          "kind": "damage"
        },
        {
          "formula": "4d4",
          "type": "void",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (9th) The vortex deals 5d8 piercing damage and 5d4 void damage."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:pollen-pods",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "2uEuYmlyx1R7zQeH",
      "slug": "pollen-pods",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/pollen-pods.webp"
    },
    "sourceHash": "sha256:b877dfb770ddd34a2234bdf2189482efb50642e8e9ab313ad725dfd424f074df",
    "translatableHash": "sha256:c415d2963982963dea4c8856ef993e9eda1bc1de44e7d71c05d7d3a405a656e7",
    "data": {
      "schemaVersion": 1,
      "name": "Pollen Pods",
      "rank": 7,
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
      "description": "Area four unoccupied 5-foot squares, each of which is at least 20 feet apart\nYou cultivate four wooden bulbs, each filled with toxic pollen and sensitive to motion. When a creature enters a space adjacent to a bulb, or when a bulb is touched or damaged (each bulb has AC 5), the bulb blossoms and releases pollen in a 15-foot emanation. Creatures in the area take 8d8 poison damage and must attempt a Fortitude save with the following results.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage and becomes Dazzled for 1 round.\nFailure The creature takes full damage, becomes dazzled for 1 round, and becomes Stupefied 1 for 1 minute.\nCritical Failure The creature takes double damage, is dazzled for 1 round, and becomes Stupefied 2 for 1 minute.\nHeightened 1 The damage increases by 2d8.",
      "castingTime": "2 actions",
      "range": "100 feet",
      "target": "",
      "area": null,
      "duration": "12 hours",
      "defense": "fortitude save",
      "damage": [
        {
          "formula": "8d8",
          "type": "poison",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 2d8."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 644,
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
          "sourceId": "2uEuYmlyx1R7zQeH",
          "name": "Pollen Pods",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 813,
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
          "sourceId": "2uEuYmlyx1R7zQeH",
          "name": "Pollen Pods",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1004,
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
          "sourceId": "2uEuYmlyx1R7zQeH",
          "name": "Pollen Pods",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:beheading-buzz-saw",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "dKWc83KKiXoIJkhp",
      "slug": "beheading-buzz-saw",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:656cd34c0b0203a23a310c26f8f1a0b37737ee7810ea9aef36ece1fe3ce81ccc",
    "translatableHash": "sha256:e9e30bd3603bd382ac1e157d81c7e50eb98219843100694b4230c42ff7682be4",
    "data": {
      "schemaVersion": 1,
      "name": "Beheading Buzz Saw",
      "rank": 7,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "metal"
      ],
      "traditions": [
        "arcane"
      ],
      "description": "You compress molten scraps pulled from the Plane of Metal into a spinning disc with gruesome blades protruding from its edges. It wheels forward, slicing through anyone in its path. Each creature in the area takes 5d10 slashing damage and 4d6 persistent bleed damage, with a Reflex save.\nSuccess The creature is unaffected.\nFailure The creature takes full damage.\nCritical Failure The creature takes double damage. If the creature has a head, it must succeed at a check (fortitude, against:spell, traits:death,incapacitation) save or be decapitated; this kills any creature except ones that don't require a head to live. For creatures with multiple heads, this usually kills the creature only if you sever its last head. This second save has the death and incapacitation traits.\nHeightened 1 The slashing damage increases by 1d10, and the persistent bleed damage increases by 1d6.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "60 line",
      "duration": "",
      "defense": "reflex save",
      "damage": [
        {
          "formula": "5d10",
          "type": "slashing",
          "kind": "damage"
        },
        {
          "formula": "4d6",
          "type": "bleed",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The slashing damage increases by 1d10, and the persistent bleed damage increases by 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:vacuum",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "kk7JKox6MdGAWmCH",
      "slug": "vacuum",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/vacuum.webp"
    },
    "sourceHash": "sha256:dd1c8377bdd8ce43e3607456fa95017f780a61729657b8397e7bd3a13398506b",
    "translatableHash": "sha256:bef8fa5ab05ec5cd3a535a168bf340791a57e5b69921fd8bc4ab9c3882279e2a",
    "data": {
      "schemaVersion": 1,
      "name": "Vacuum",
      "rank": 7,
      "rarity": "common",
      "traits": [
        "air",
        "concentrate",
        "incapacitation",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You inhale all air in the surrounding area, stealing the breath of nearby creatures. During vacuum's duration, you take a –1 circumstance penalty against inhaled threats, such as inhaled poisons. If you cast vacuum in an environment where you can't breathe, the spell fails and you immediately begin to suffocate.\nCreatures in the area must attempt a Fortitude save. A creature that's holding its breath gets a result one degree of success better than it rolled, and creatures that don't need to breathe air are immune to the spell. A creature that later enters the area or ceases holding its breath must attempt a save against the effect. On subsequent rounds, the first time each round you Sustain the spell, you can force each creature in the area to save against the effect.\nSuccess The creature begins holding its breath.\nFailure The creature wheezes and gasps as its breath is stolen, becoming Stunned 1. The creature then begins holding its breath but has only half its normal number of rounds of remaining air.\nCritical Failure The creature has all the air sucked out from its lungs and immediately starts to suffocate.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "15 emanation",
      "duration": "1 minute",
      "defense": "fortitude save",
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 983,
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
          "sourceId": "kk7JKox6MdGAWmCH",
          "name": "Vacuum",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:shock-to-the-system",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "M5dp7ILSCKID9fDK",
      "slug": "shock-to-the-system",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/shock-to-the-system.webp"
    },
    "sourceHash": "sha256:f2c12f6173e79310270a6a0e7ec44f8dee2dab027cc125d3e8a50da5a2c2d54f",
    "translatableHash": "sha256:17f7becb05edc0cb3d99562ca90ee5715c4804bf10522254dc4ea586fa1626ad",
    "data": {
      "schemaVersion": 1,
      "name": "Shock to the System",
      "rank": 7,
      "rarity": "common",
      "traits": [
        "air",
        "concentrate",
        "electricity",
        "healing",
        "manipulate",
        "vitality"
      ],
      "traditions": [
        "divine",
        "occult",
        "primal"
      ],
      "description": "A dense lightning cloud descends to fill the target's space, then fires a jolt of revitalizing lightning into the target. If the target is a corpse that died within the last round, the creature comes back to life with 0 Hit Points, and any effects and conditions it had when it died, with the exception of dying, and its wounded condition increases by 1. The creature's initiative is right before yours.\nRegardless of whether the creature came back to life or was already alive, it regains 8d8 Hit Points, and the bolt wakes it up if it was Unconscious. For the duration of the spell, the target is supercharged. It becomes Quickened and can use the extra action to Stand, Stride, Strike, or Fly (if it has a fly Speed). In addition, it can cast 5th-rank Thunderstrike as an innate spell at will, using your spell DC.\nThe cloud that covered the creature remains until the end of the target's next turn. Any creature in the cloud is Hidden, and anything outside the cloud is hidden to any creature inside the cloud.\nHeightened 1 The healing increases by 2d8, and the thunderstrike rank increases by 1.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 living creature or 1 corpse that died within the last round",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [
        {
          "formula": "8d8",
          "type": "untyped",
          "kind": "healing"
        }
      ],
      "heightening": "Heightened 1 The healing increases by 2d8, and the thunderstrike rank increases by 1."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 551,
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
          "sourceId": "M5dp7ILSCKID9fDK",
          "name": "Shock to the System",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 677,
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
          "sourceId": "M5dp7ILSCKID9fDK",
          "name": "Shock to the System",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 851,
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
          "sourceId": "M5dp7ILSCKID9fDK",
          "name": "Shock to the System",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1074,
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
          "sourceId": "M5dp7ILSCKID9fDK",
          "name": "Shock to the System",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:dancing-fountain",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "smiVuoFMSgY2FTOO",
      "slug": "dancing-fountain",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:93aead59a4a0794349ddcbe9f7e6a9814a8d50f2bb8ff0aed8ebf3cab4a34bad",
    "translatableHash": "sha256:c077d8db6f9f4d4a9311ecf8fb88ff9d1ea94007d877a9ba757f34d58a0008d9",
    "data": {
      "schemaVersion": 1,
      "name": "Dancing Fountain",
      "rank": 7,
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
      "description": "Area 30-foot burst centered on you\nTapping the ground, you create a shallow pool of water that spreads over the affected area, and majestic sprays, jets, and mists of water erupt forth in a dazzling water show. When you Cast the Spell, and the first time each round you Sustain the spell, you can command the fountain to use one of the following displays, which is accompanied by a loud burst of music. The dancing fountain is somewhat fickle in its desire for novelty, meaning it can't be commanded to use the same display on two consecutive turns.\n• Chasing Jets A series of vertical jets shoot up in a chase sequence, forcing one creature within the fountain to move 15 feet in a direction of your choice unless it succeeds at a Reflex save against your spell DC. The fountain can't make a creature move outside its area.\n• Flashing Spray Diffuse fog fills the area of the emanation. All creatures within the fountain become Concealed, and all creatures outside the fountain become concealed to creatures within it. The spray persists until the beginning of your next turn.\n• Power Rings The fountain blasts a series of rings of water into the air that land with a crash in a 10-foot burst centered on a location of your choice within the fountain. The falling torrent deals 10d6 bludgeoning damage to all creatures within the burst (basic Reflex).",
      "castingTime": "3 actions",
      "range": "",
      "target": "",
      "area": "30 burst",
      "duration": "1 minute",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "10d6",
          "type": "bludgeoning",
          "kind": "damage"
        }
      ],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1014,
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
          "sourceId": "smiVuoFMSgY2FTOO",
          "name": "Dancing Fountain",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:heaving-earth",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "yWySiasyPZcRoe4d",
      "slug": "heaving-earth",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/heaving-earth.webp"
    },
    "sourceHash": "sha256:fdf90f68f2aeb939f72821b9203b1ab0b168b7ffcd2e8112f9d47c4ab3d33d06",
    "translatableHash": "sha256:3fdddaaad8dade0c2e524ae28587f24dfce16230359b22bc747e74c654f7264b",
    "data": {
      "schemaVersion": 1,
      "name": "Heaving Earth",
      "rank": 7,
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
      "description": "You strike the ground, and unleash a wave that travels through the struck surface to the target. The effect ends as soon as it can't travel through a solid surface, such as a stone floor. Each creature in a line between you and the target is shaken by tremors and must attempt a Reflex saving throw against your spell DC. A creature that fails this save is pushed 10 feet away from you.\nThe wave explodes once it reaches the target, showering the target with earth and stone and dealing 12d10 bludgeoning damage with a basic Reflex save. A target that fails its save against this explosion is also pushed back 10 feet and knocked Prone. A creature subject to the explosion doesn't need to save against the tremors.\nHeightened (9th) The wave explodes on one additional target of your choice in the line to the final target.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "1 creature or object on the ground",
      "area": null,
      "duration": "",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "12d10",
          "type": "bludgeoning",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (9th) The wave explodes on one additional target of your choice in the line to the final target."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 650,
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
          "sourceId": "yWySiasyPZcRoe4d",
          "name": "Heaving Earth",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:rainbow-fumarole",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "0AZOIMRvZtePuGOw",
      "slug": "rainbow-fumarole",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/rainbow-fumarole.webp"
    },
    "sourceHash": "sha256:b3bdce64221563f20c446d12b0f4010397bf6b66ef937b470aa21bb2357664af",
    "translatableHash": "sha256:907ba7074172961725760dc64911d7e0b6ed996aa2ff9b3ff364250a0be1a22b",
    "data": {
      "schemaVersion": 1,
      "name": "Rainbow Fumarole",
      "rank": 8,
      "rarity": "common",
      "traits": [
        "concentrate",
        "fire",
        "incapacitation",
        "light",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "Area 20-foot radius, 60-foot-tall cylinder\nMulti-hued flames break through cracks in the ground, reaching high into the sky and giving off dangerous fumes. When you cast the spell, roll 1d8 on the table below to determine the effects of the fumarole.\nAny creature caught inside the area of rainbow fumarole when you cast it takes the indicated damage with a basic Reflex save and, on a failure, takes any added effect listed. Creatures must also attempt a saving throw when they move through the spell's area or end their turn in it. Squares within the area of the rainbow fumarole are difficult terrain.\n1d8\n | Color\n | Damage\n | Added Effect\n |\n1\n | Red\n | 50 fire damage\n | —\n |\n2\n | Orange\n | 50 fire damage\n | Knocked Prone\n |\n3\n | Yellow\n | 30 fire damage\n | Pushed 10 feet\n |\n4\n | Green\n | 20 fire damage\n | Sickened 2\n |\n5\n | Blue\n | 30 fire damage\n | Paralyzed for 1 round\n |\n6\n | Indigo\n | 30 fire damage\n | Confused for 1 minute\n |\n7\n | Violet\n | 30 fire damage\n | Slowed 1 for 1 minute\n |\n8\n | All\n | Choose the color for each affected creature and use that color's damage and added effect; if a creature is affected again, you can choose a different color.\n | —\n |",
      "castingTime": "3 actions",
      "range": "500 feet",
      "target": "",
      "area": "20 cylinder",
      "duration": "1 minute",
      "defense": "basic reflex save",
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1098,
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
          "sourceId": "0AZOIMRvZtePuGOw",
          "name": "Rainbow Fumarole",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1469,
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
          "sourceId": "0AZOIMRvZtePuGOw",
          "name": "Rainbow Fumarole",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1647,
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
          "sourceId": "0AZOIMRvZtePuGOw",
          "name": "Rainbow Fumarole",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1828,
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
          "sourceId": "0AZOIMRvZtePuGOw",
          "name": "Rainbow Fumarole",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 2009,
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
          "sourceId": "0AZOIMRvZtePuGOw",
          "name": "Rainbow Fumarole",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:whirlpool",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "0fjz8qc9NfkmWmJZ",
      "slug": "whirlpool",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:1555ad915fbe67e14d823cba1167140657c0be4c6295f557548e1a144ff4f523",
    "translatableHash": "sha256:30bc2f58d81aed8764a11adb68f3e2b5bb8f9740a92d850cb12389e33f3b737b",
    "data": {
      "schemaVersion": 1,
      "name": "Whirlpool",
      "rank": 8,
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
      "description": "Area 25-foot radius, 20-foot tall cylinder\nWith a spin of your hand, you create a large swirling vortex of storming waves. All squares in the whirlpool are difficult terrain. The constant churning of the fierce waves means that creatures are constantly tossed between areas of air and water, allowing both air- and water-breathing creatures to breathe within the vortex. Any creature with a swim Speed can Swim instead of Stride to move within the whirlpool; the DC to Swim within it is equal to your spell DC.\nAll creatures in the area take 6d10 bludgeoning damage as the waves crash into them. On subsequent rounds, the first time you Sustain the spell each round, the waves crash again with the same effect.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage.\nFailure The creature takes full damage and is drawn 10 feet toward the center of the whirlpool.\nCritical Failure The creature takes double damage and is drawn to the center of the whirlpool.\nHeightened 1 The bludgeoning damage increases by 1d10.",
      "castingTime": "3 actions",
      "range": "500 feet",
      "target": "",
      "area": "25 cylinder",
      "duration": "1 minute",
      "defense": "reflex save",
      "damage": [
        {
          "formula": "6d10",
          "type": "bludgeoning",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The bludgeoning damage increases by 1d10."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:ferrous-form",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "89Hj5QuqvcwVXcqj",
      "slug": "ferrous-form",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:a4c77d5aa446d04d0a666bdb0fff558d397a0656cdec79944143eae65f8f1586",
    "translatableHash": "sha256:ef46684f64f055952cc8f977d8c8a419e120cf859b02e47d7f54754b03f31cfe",
    "data": {
      "schemaVersion": 1,
      "name": "Ferrous Form",
      "rank": 8,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "metal",
        "polymorph"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "Your body transforms entirely into flexible iron. You gain resistance 10 to physical damage, except adamantine. You're immune to death effects, disease, drained, Fatigued, healing, nonlethal attacks, Paralyzed, poison, sickened, vitality, and void; any of those conditions you had when the spell is cast are suspended until the spell ends, then return with their remaining duration when the spell ends. While made of iron, you're subject to rusting effects like the Rust Cloud spell.\nYour fist Strikes have a 1d10 damage die, and your metal spells deal one additional die of damage (of the same damage die and damage type the spell uses). You can cast Needle Darts as an innate spell; the casting is reduced from 2 actions to 1.\nIn this form, you don't need to breathe. Your Bulk doubles (to 6 if you're Small or 12 if you're Medium), and you become too dense to Swim in water, automatically sinking to the bottom. You can Dismiss the spell.\nSpell Effect: Ferrous Form\nHeightened (9th) The resistance increases to 15.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (9th) The resistance increases to 15."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 165,
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
          "sourceId": "89Hj5QuqvcwVXcqj",
          "name": "Ferrous Form",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 246,
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
          "sourceId": "89Hj5QuqvcwVXcqj",
          "name": "Ferrous Form",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 555,
        "uuid": "Compendium.pf2e.spells-srd.Item.Rust Cloud",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Rust Cloud",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Rust Cloud",
          "sourceId": "yy2K51kK3a60rRIe",
          "name": "Rust Cloud",
          "type": "spell"
        },
        "owner": {
          "sourceId": "89Hj5QuqvcwVXcqj",
          "name": "Ferrous Form",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 787,
        "uuid": "Compendium.pf2e.spells-srd.Item.Needle Darts",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Needle Darts",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Needle Darts",
          "sourceId": "iYRDFxeVpJ5KIjmr",
          "name": "Needle Darts",
          "type": "spell"
        },
        "owner": {
          "sourceId": "89Hj5QuqvcwVXcqj",
          "name": "Ferrous Form",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1130,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Ferrous Form",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Ferrous Form",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Ferrous Form",
          "sourceId": "qD1OA6dx8h33nKFC",
          "name": "Spell Effect: Ferrous Form",
          "type": "effect"
        },
        "owner": {
          "sourceId": "89Hj5QuqvcwVXcqj",
          "name": "Ferrous Form",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:summon-elemental-herald",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "kVNo3ga0lwLKPrem",
      "slug": "summon-elemental-herald",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/summon-elemental-herald.webp"
    },
    "sourceHash": "sha256:ffa302eabeb91b215c078bed97e17e8a6298c423253e1e0f97a4dddf80656c3a",
    "translatableHash": "sha256:df52a54913b9244bc5bc83657760a2e5dd2b9edd80c70cad0ddf6ccfe6f547bd",
    "data": {
      "schemaVersion": 1,
      "name": "Summon Elemental Herald",
      "rank": 8,
      "rarity": "common",
      "traits": [
        "concentrate",
        "incarnate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "divine",
        "primal"
      ],
      "description": "Your meditation into the different elemental planes connects you to them deeply, and this connection allows you to summon a herald of an elemental lord. The herald arrives in the form of a natural disaster centralized on your enemies. The herald occupies the space of a Huge creature. When you Cast this Spell, choose one of the elemental heralds below to summon; if you're a divine spellcaster who worships an elemental lord, you must choose the option matching your deity's element. This spell gains the trait (air, earth, fire, metal, water, or wood) matching your choice.\n• Air Speed fly 60 feet; Arrive(air) Supercell Front The herald of air arrives in the form of a twisting tornado, with high-speed winds slamming into your enemies. Each enemy in a 100-foot emanation takes 10d8 bludgeoning damage with a basic Fortitude save; Depart (air) Twister Downdraft Each enemy in a 60-foot line must attempt a Fortitude save. A creature that fails is knocked Prone if it's on the ground or descends 40 feet if it's in the air. A creature that descends takes falling damage if this forced movement brings it to the ground.\n• Earth Speed 50 feet, burrow 30 feet; Arrive(earth) Tectonic Rise The herald of earth erupts from the ground, splitting it open in a 50-foot emanation. Each enemy in the emanation takes 10d6 slashing damage from the flying debris with a basic Reflex save. Enemies who critically fail fall 30 feet into the crevasse, taking falling damage (the sides of the fissure require successful check (athletics, dc:15) checks to Climb); Depart (sonic) Plate Crash The herald of earth sinks back into the ground, and the sides of the crevasse slam together with a deafening blow, dealing 5d10 sonic damage with a basic Fortitude save to all enemies in a 30-foot emanation. An enemy that critically fails is Deafened for 10 minutes.\n• Fire Speed 60 feet, fly 40 feet; Arrive(fire) Magma Flow The herald of fire flows into the area as living magma, dealing 10d6 fire damage and 3d6 persistent fire damage to all enemies in a 60-foot emanation with a basic Reflex save; Depart(fire) Flame Vortex Each enemy in a 60-foot line takes 6d6 fire damage and 3d6 persistent fire damage with a basic Reflex save as the fire herald whips into a fire pillar before vanishing.\n• Metal Speed 50 feet, fly 50 feet; Arrive(metal) Shard Cloud The herald of metal arrives as a cloud of metal shards and static electricity, dealing 4d8 slashing damage and 4d12 electricity damage to all enemies in a 50-foot emanation with a basic Reflex save; Depart(metal) Rust Mist The shards in the cloud rapidly rust and cling to enemies in the 50-foot emanation, dealing 10d6 damage to metal creatures and objects in the area with a basic Reflex save, ignoring Hardness. Unattended objects automatically critically fail this save.\n• Water Speed 40 feet, swim 60 feet; Arrive(cold, water) Hurricane Formation The herald of water forms as a miniature hurricane. Each enemy in a 60-foot emanation takes 4d10 bludgeoning damage from the slamming rains and 4d10 cold damage from the falling hail with a basic Fortitude save; Depart(cold, water) Cataclysmic Deluge The hurricane collapses into a rushing flood, dealing 6d8 bludgeoning damage to all enemies in a 120-foot cone with a basic Fortitude save. A creature that fails its save is pushed 20 feet away from the herald (or 40 feet on a critical failure).\n• Wood Speed 50 feet, burrow 30 feet; Arrive(plant, wood) Advantageous Roots The herald of wood bursts forth from the ground as a complex root system. Each enemy in a 50-foot emanation takes 6d10 piercing damage with a basic Reflex save as the roots skewer its limbs and body. Each enemy that fails its save takes a –10-foot status penalty to its Speeds until the herald departs; Depart(plant, wood) Retreat to Soil The roots retreat into the ground, dealing 6d10 piercing damage to each enemy in a 50-foot emanation with a basic Reflex save. Any creature with a penalty to Speeds from its initial save automatically takes 2d6 persistent bleed damage. The ground in the emanation is difficult terrain after the roots retreat.",
      "castingTime": "3 actions",
      "range": "100 feet",
      "target": "",
      "area": null,
      "duration": "until the end of your next turn",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1081,
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
          "sourceId": "kVNo3ga0lwLKPrem",
          "name": "Summon Elemental Herald",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 2108,
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
          "sourceId": "kVNo3ga0lwLKPrem",
          "name": "Summon Elemental Herald",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:magnetic-dominion",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "AsRd1gNRSkHDq2Jx",
      "slug": "magnetic-dominion",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/magnetic-domination.webp"
    },
    "sourceHash": "sha256:d6459121ff15e831c012f738b7401d0608075d8e1cd0f49d46c06fd4d7c7821a",
    "translatableHash": "sha256:9cf9e2a553f728d72a0c870bc43214c13cbf2483376acc53d2fed395b2f9ce5f",
    "data": {
      "schemaVersion": 1,
      "name": "Magnetic Dominion",
      "rank": 9,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "metal"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "The roiling magnetic fields of the Plane of Metal radiate from you as you channel and reshape them at your merest thought. When you Cast this Spell, you can relocate each affected target to any other unoccupied space within the emanation. You can't move yourself in this way. An unwilling target can resist being moved with a successful Reflex save.\nThe creatures move all at once—after you know the results of all the saves, you determine which target occupies each space in whatever order you choose. You can move a creature into a space that was previously occupied by another creature so long as you also relocate the first creature elsewhere as part of the movement. If you move a target into the air, it descends to the ground harmlessly after being moved unless it chooses not to.\nYou can choose to be affected by an 8th-rank Magnetic Repulsion spell that lasts for the duration of magnetic dominion. Each time you Sustain the spell, you can move one creature in the emanation, with the same targeting restrictions and stipulations as above.",
      "castingTime": "3 actions",
      "range": "",
      "target": "any number of creatures wearing metal armor, creatures made of metal, creatures that have the metal trait, and unattended metal objects",
      "area": "100 emanation",
      "duration": "1 minute",
      "defense": "reflex save",
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 850,
        "uuid": "Compendium.pf2e.spells-srd.Item.Magnetic Repulsion",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Magnetic Repulsion",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Magnetic Repulsion",
          "sourceId": "24U1b9K4Lj94cgaj",
          "name": "Magnetic Repulsion",
          "type": "spell"
        },
        "owner": {
          "sourceId": "AsRd1gNRSkHDq2Jx",
          "name": "Magnetic Dominion",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:element-embodied",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "vQMAdnIwnV9prPiG",
      "slug": "element-embodied",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:76d9ee90e9360d6a432d28eb939707fcbd87bdf03b4cf79913c6d3e748ef4a36",
    "translatableHash": "sha256:c67e70195164bcdab931088d94f730cced5ab58b651bc517ade55d76019f2b50",
    "data": {
      "schemaVersion": 1,
      "name": "Element Embodied",
      "rank": 10,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "polymorph"
      ],
      "traditions": [
        "primal"
      ],
      "description": "Drawing upon the deepest wells of magic in an elemental plane, you transform into a spectacular elemental. You can choose between an air elemental, earth elemental, fire elemental, or water elemental. Your battle form is Gargantuan, and you must have enough space to expand into or the spell is lost. While in this form, you gain the elemental trait and the trait for the element you choose. You can Dismiss the spell.\nYou gain the following statistics and abilities regardless of which battle form you choose:\n• AC = 25 + your level. Ignore your armor's check penalty and Speed reduction.\n• 30 temporary Hit Points.\n• Darkvision.\n• One or more attacks specific to the battle form you choose, which are the only attacks you can Strike with. You're trained with them. Your attack modifier is +34, and you use the listed damage. These attacks are Dexterity based if you choose an air or fire elemental, or Strength based if you choose an earth or water elemental. (This distinction doesn't change the statistics, but matters for the enfeebled and clumsy conditions, for example). If your unarmed attack modifier is higher, you can use it instead.\n• Acrobatics modifier of +36 for air or fire elemental or Athletics modifier of +36 for earth or water elemental, unless your own modifier is higher.\nYou also gain specific abilities based on the type of elemental you choose:\n• Air Elemental fly Speed 80 feet;\n• High Winds (air, aura) 30 feet. Air within the emanation is difficult terrain for flying creatures that don't have the air trait;\n• Swiftness Your movement doesn't trigger reactions;\n• Melee 1 gust (reach 25 feet), Damage 3d12+11 bludgeoning plus Push 10 feet;\n• Ranged 1 lightning lash (range increment 80 feet), Damage 3d12+4 electricity.\n• Earth Elemental 30 feet, burrow 20 feet; resistance 5 to physical;\n• Spike Stones (aura, earth) 30 feet. The area is difficult terrain and hazardous terrain. A creature without the earth trait that moves on the ground in the area takes 5 piercing damage for every square of that area it moves into;\n• Rocky Toughness You gain 40 temporary Hit Points when you choose this form instead of 30;\n• Melee 1 fist (reach 25 feet), Damage 3d12+15 bludgeoning;\n• Ranged 1 rock (range increment 40 feet), Damage 4d8+6 bludgeoning.\n• Fire Elemental 50 feet; immunity to fire; weakness to cold 10;\n• Intense Heat (aura, fire) 30 feet. A creature that enters the aura or starts its turn in the aura takes 5d6 fire damage with a basic Reflex save against your spell DC. A creature can take damage from the aura only once per round;\n• Melee 1 tendril (reach 25 feet), Damage 3d10+12 fire plus 2d6 persistent fire;\n• Ranged 1 fire mote (range increment 60 feet), Damage 4d8+6 fire.\n• Metal Elemental 40 feet, fly 40 feet; resistance 10 to electricity;\n• Arcing Electricity (aura, electricity, metal) 30 feet. A creature that enters the aura or starts its turn in the aura takes 2d12 electricity damage with a basic Reflex save against your spell DC; a creature made of metal, with the metal trait, or wearing metal armor takes a –1 circumstance penalty on this save. A creature can take damage from the aura only once per round;\n• Melee 1 blade (reach 25 feet, versatile slashing), Damage 3d12+15 piercing;\n• Ranged 1 metal shard (range increment 40 feet, versatile slashing), Damage 4d8+6 piercing.\n• Water Elemental 40 feet, swim 80 feet; resistance 10 to fire;\n• Vortex (aura, water) 30 feet. Water within the aura that is part of the same body of water you occupy is difficult terrain for Swimming creatures that don't have the water trait;\n• Melee 1 wave (reach 25 feet), Damage 3d12+18 bludgeoning plus Push or Pull 10 feet;\n• Ranged 1 water spout (range increment 60 feet), Damage 4d8+6 bludgeoning.\n• Wood Elemental 30 feet, climb 35 feet; resistance 5 to physical; weakness to axes 10;\n• Lush Growth (aura, wood) 30 feet. Ground in the area is difficult terrain, and any time a creature in the area regains HP from a healing vitality effect, the aura grants a +5 status bonus to the healing;\n• Woody Toughness You gain 40 temporary Hit Points when you choose this form instead of 30;\n• Melee 1 branch (reach 25 feet), Damage 3d10+18 piercing;\n• Ranged 1 seed (range increment 40 feet), Damage 4d8+6 bludgeoning.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
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
        "sourceIndex": 1448,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Element Embodied (Air)",
        "label": "Air Elemental",
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Element Embodied (Air)",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Element Embodied (Air)",
          "sourceId": "J60rN48XzBGHmR6m",
          "name": "Spell Effect: Element Embodied (Air)",
          "type": "effect"
        },
        "owner": {
          "sourceId": "vQMAdnIwnV9prPiG",
          "name": "Element Embodied",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 2148,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Element Embodied (Earth)",
        "label": "Earth Elemental",
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Element Embodied (Earth)",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Element Embodied (Earth)",
          "sourceId": "jp88SCE3VCRAyE6x",
          "name": "Spell Effect: Element Embodied (Earth)",
          "type": "effect"
        },
        "owner": {
          "sourceId": "vQMAdnIwnV9prPiG",
          "name": "Element Embodied",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 2994,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Element Embodied (Fire)",
        "label": "Fire Elemental",
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Element Embodied (Fire)",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Element Embodied (Fire)",
          "sourceId": "lmAwCy7isFvLYdGd",
          "name": "Spell Effect: Element Embodied (Fire)",
          "type": "effect"
        },
        "owner": {
          "sourceId": "vQMAdnIwnV9prPiG",
          "name": "Element Embodied",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 3739,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Element Embodied (Metal)",
        "label": "Metal Elemental",
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Element Embodied (Metal)",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Element Embodied (Metal)",
          "sourceId": "lRfiYmsoQMJZ81NQ",
          "name": "Spell Effect: Element Embodied (Metal)",
          "type": "effect"
        },
        "owner": {
          "sourceId": "vQMAdnIwnV9prPiG",
          "name": "Element Embodied",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 4668,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Element Embodied (Water)",
        "label": "Water Elemental",
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Element Embodied (Water)",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Element Embodied (Water)",
          "sourceId": "w1HwO7huxJoK0gHY",
          "name": "Spell Effect: Element Embodied (Water)",
          "type": "effect"
        },
        "owner": {
          "sourceId": "vQMAdnIwnV9prPiG",
          "name": "Element Embodied",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 5376,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Element Embodied (Wood)",
        "label": "Wood Elemental",
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Element Embodied (Wood)",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Element Embodied (Wood)",
          "sourceId": "xPNKt1aQc3dquKlt",
          "name": "Spell Effect: Element Embodied (Wood)",
          "type": "effect"
        },
        "owner": {
          "sourceId": "vQMAdnIwnV9prPiG",
          "name": "Element Embodied",
          "type": "spell"
        }
      }
    ]
  }
]
