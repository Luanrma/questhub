import type { Pathfinder2eOriginalContentRecord } from '../../records'
import type { Pathfinder2eSpellData } from '../types'

export const PATHFINDER_2E_EXHAUSTIVE_12_SPELL_ORIGINALS: readonly Pathfinder2eOriginalContentRecord<Pathfinder2eSpellData>[] = [
  {
    "contentId": "pf2e:spell:spells-srd:resplendent-mansion",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "KPDHmmjJiw7PhTYF",
      "slug": "resplendent-mansion",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:ace90c81759e73747eaae6c336fe6a9998f051646e6e93c47b5617c663459009",
    "translatableHash": "sha256:eb22439450984f2b668c61d901e9b15e25be838c824a899480b7d3512dd17167",
    "data": {
      "schemaVersion": 1,
      "name": "Resplendent Mansion",
      "rank": 9,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "structure"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You conjure a towering mansion up to four stories tall and up to 300 feet on a side. While Casting the Spell, you hold an image of the mansion and its desired appearance in your mind. The mansion can contain as many or as few rooms as you desire, and it's decorated as you imagine it. You can imagine a purpose for each room of the mansion, and the proper accouterments appear within. Any furniture or other mundane fixtures function normally for anyone inside the mansion, but they cease to exist if taken beyond its walls. No fixture created with this spell can create magical effects, but magical devices brought into the mansion function normally.\nYour mansion contains the same types and quantities of foodstuffs and servants as created by the Planar Palace spell.\nEach of the mansion's exterior doorways and windows are protected by Alarm spells. You choose whether each alarm is audible or mental as you Cast the Spell, and each has a different sound (for an audible alarm) or sensation (for a mental one), allowing you to instantly determine which portal has been used.",
      "castingTime": "1 minute",
      "range": "500 feet",
      "target": "",
      "area": null,
      "duration": "until the next time you make your daily preparations",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 759,
        "uuid": "Compendium.pf2e.spells-srd.Item.Planar Palace",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Planar Palace",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Planar Palace",
          "sourceId": "vPWMEyVTreMOoFnm",
          "name": "Planar Palace",
          "type": "spell"
        },
        "owner": {
          "sourceId": "KPDHmmjJiw7PhTYF",
          "name": "Resplendent Mansion",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 895,
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
          "sourceId": "KPDHmmjJiw7PhTYF",
          "name": "Resplendent Mansion",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:natures-enmity",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Tc5NLaMu71vrGTJQ",
      "slug": "natures-enmity",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:35b7e6d032bb4275ea27755085ef39bfa7f2a080f04a54a63e698d49a37804fa",
    "translatableHash": "sha256:9bc31d511f715539aa2ce8f1ca39f86950e56a12d8e9ab4f60ddc33713ce11f8",
    "data": {
      "schemaVersion": 1,
      "name": "Nature's Enmity",
      "rank": 9,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "plant",
        "wood"
      ],
      "traditions": [
        "primal"
      ],
      "description": "Animals, plants, and fungi in the area turn against the targets. Each target suffers from the following effects as long as it remains in the area.\n• Vegetation springs up from every surface, giving each target a –10-foot circumstance penalty to its Speed any time it's adjacent to the plants and fungi.\n• Aggressive animals attack unpredictably. At the start of its turn, each target rolls a check (flat, dc:8). On a failure, it's attacked by creatures that deal 2d10 slashing damage. The target attempts a basic Reflex save and is Off-Guard for 1 round on any outcome other than a critical success.\n• The target loses any connection to nature or natural creatures. The target must succeed at a check (flat, dc:5) when casting any primal spell or the spell fails. Furthermore, animal, fungus, and plant creatures become hostile to it, even one with a strong bond to the target, such as an animal companion.\nThe GM might decide that you can't subject some creatures, such as an emissary of a nature deity, to the ire of nature.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "up to 5 creatures",
      "area": "500 burst",
      "duration": "10 minutes",
      "defense": "reflex save",
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 559,
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
          "sourceId": "Tc5NLaMu71vrGTJQ",
          "name": "Nature's Enmity",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:weapon-of-judgment",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ZqmP9gijBmK7y8Xy",
      "slug": "weapon-of-judgment",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/weapon-of-judgement.webp"
    },
    "sourceHash": "sha256:34f598525d1b9888a4fba5f46c714298b668c6cfc55ede6b06696b1d427b018b",
    "translatableHash": "sha256:6ea2819bcb51e321dcde74b1221f35f01d2c31f0569ffe3f0520c96823b237f7",
    "data": {
      "schemaVersion": 1,
      "name": "Weapon of Judgment",
      "rank": 9,
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
      "description": "An immense weapon of spiritual energy appears, hovering in the air above the target. The weapon has the ghostly visual appearance of your deity's favored weapon. Name war or peace when you cast this spell.\nIf you name \"war,\" mentally choose one creature. This must be a creature both you and the target can see. The target instinctively knows which creature this is. At the end of each of the target's turns, if the target didn't use a hostile action against the creature you chose during that turn, the weapon Strikes the target.\nIf you name \"peace,\" mentally choose up to five allies. The target instinctively knows who those allies are. The weapon Strikes the target each time the target uses a hostile action against you or one of the chosen allies. The weapon Strikes only once per action, even if the action targets multiple allies (such as for a Fireball or a Whirlwind Strike).\nStrikes with the weapon are melee weapon attacks, but they use your spell attack modifier. Regardless of its appearance, the weapon deals 4d10 damage. The damage type is the same as the chosen weapon (or any of its types for a versatile weapon). The attack deals spirit damage instead if that would be more detrimental to the creature (as determined by the GM). No other statistics or attributes of the weapon apply, and even a ranged weapon attacks adjacent creatures only. The weapon takes a multiple attack penalty, which increases throughout the target's turn, but its penalty is separate from yours.\nA weapon of judgment is a weapon for the purposes of triggers, resistances, and so forth. The weapon doesn't take up space, grant flanking, or have any other attributes a creature would. The weapon can't make any attack other than its Strike, and feats or spells that affect weapons don't apply to this weapon.\nHeightened (10th) The damage increases by 1d10.",
      "castingTime": "2 actions",
      "range": "100 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [
        {
          "formula": "4d10",
          "type": "untyped",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (10th) The damage increases by 1d10."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 870,
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
          "sourceId": "ZqmP9gijBmK7y8Xy",
          "name": "Weapon of Judgment",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 923,
        "uuid": "Compendium.pf2e.feats-srd.Item.Whirlwind Strike",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.feats-srd.Item.Whirlwind Strike",
          "package": "pf2e",
          "sourcePack": "feats-srd",
          "documentType": "Item",
          "compendiumKey": "Whirlwind Strike",
          "sourceId": "AGydz5DKJ2KHSO4S",
          "name": "Whirlwind Strike",
          "type": "feat"
        },
        "owner": {
          "sourceId": "ZqmP9gijBmK7y8Xy",
          "name": "Weapon of Judgment",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:primal-herd",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "pmP8HhXvvEKP3LqU",
      "slug": "primal-herd",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:eb064d195a4367b6c56c8476e781e9a150da7dfc510a29588fae7eaee58c1c5d",
    "translatableHash": "sha256:ccc3b94e9353dce4961046ebd21fdcd3ad0db124bff4d69c1681a1172e2bc88b",
    "data": {
      "schemaVersion": 1,
      "name": "Primal Herd",
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
      "description": "Summoning the power of the natural world, you transform the targets into a herd of mammoths, and they each assume a Huge battle form. Each target must have enough space to expand into or the spell fails for that target. Each target gains the animal trait. Each target can Dismiss the spell's effects on itself. Each target gains the following while transformed.\n• AC = 22 + the target's level. Ignore any armor check penalty and Speed reduction.\n• 20 temporary Hit Points.\n• Speed 40 feet.\n• Low-light vision.\n• The following unarmed melee attacks, which are the only attacks the target can use to Strike. When Striking with these attacks, the target uses their attack modifier with the proficiency and item bonuses of their most favorable weapon or unarmed Strike, and the damage is listed for each attack. These attacks are Strength based (for the purpose of the Enfeebled condition, for example).\n• Melee 1 tusk (reach 15 feet), Damage 4d8+19 piercing\n• Melee 1 trunk (agile, reach 15 feet), Damage 4d6+16 bludgeoning\n• Melee 1 foot (agile, reach 15 feet), Damage 4d6+13 bludgeoning.\n• Athletics modifier of +30, unless the target's own modifier is higher.\n• Each target can use the Trample action.\n• Trample 3 You move up to twice your Speed and move through the space of Large or smaller creatures, trampling each creature whose space you enter. A trampled creature takes damage from your foot Strike based on a basic Reflex save (DC = 19 + your level).\nSpell Effect: Primal Herd",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "you and up to 5 willing targets",
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
        "sourceIndex": 932,
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
          "sourceId": "pmP8HhXvvEKP3LqU",
          "name": "Primal Herd",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1908,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Primal Herd",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Primal Herd",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Primal Herd",
          "sourceId": "gOeu0lPtKQcLh1Xz",
          "name": "Spell Effect: Primal Herd",
          "type": "effect"
        },
        "owner": {
          "sourceId": "pmP8HhXvvEKP3LqU",
          "name": "Primal Herd",
          "type": "spell"
        }
      }
    ]
  }
]
