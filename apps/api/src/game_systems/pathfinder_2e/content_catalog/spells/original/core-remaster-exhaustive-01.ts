import type { Pathfinder2eOriginalContentRecord } from '../../records'
import type { Pathfinder2eSpellData } from '../types'

export const PATHFINDER_2E_EXHAUSTIVE_01_SPELL_ORIGINALS: readonly Pathfinder2eOriginalContentRecord<Pathfinder2eSpellData>[] = [
  {
    "contentId": "pf2e:spell:spells-srd:figment",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "0zU8CPejjQFnhZFI",
      "slug": "figment",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/ghost-sound.webp"
    },
    "sourceHash": "sha256:cbe38758e310ca4b3831e0cde03ad3c4cea4d9467e6a6a2d263c78b71a79bfb5",
    "translatableHash": "sha256:515ff6a1edc52d58c6505e19a57e2d1a453ae895d8cf8024bb11d789cf4fc18a",
    "data": {
      "schemaVersion": 1,
      "name": "Figment",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "cantrip",
        "concentrate",
        "illusion",
        "manipulate",
        "subtle"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You create a simple illusory sound or vision. A sound adds the auditory trait to the spell and the sound can't include intelligible words or elaborate music. A vision adds the visual trait, can be no larger than a 5-foot cube, and is clearly crude and undetailed if viewed from within 15 feet. When you Cast or Sustain the Spell, you can attempt to Create a Diversion with the illusion, gaining a +2 circumstance bonus to your Deception check. If the attempt fails against a creature, that creature disbelieves the figment.\nSpell Effect: Figment",
      "castingTime": "2 actions",
      "range": "30 feet",
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
        "sourceIndex": 352,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Create a Diversion",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Create a Diversion",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Create a Diversion",
          "sourceId": "GkmbTGfg8KcgynOA",
          "name": "Create a Diversion",
          "type": "action"
        },
        "owner": {
          "sourceId": "0zU8CPejjQFnhZFI",
          "name": "Figment",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 583,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Figment",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Figment",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Figment",
          "sourceId": "2Hg3a06gZCSnUgSA",
          "name": "Spell Effect: Figment",
          "type": "effect"
        },
        "owner": {
          "sourceId": "0zU8CPejjQFnhZFI",
          "name": "Figment",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:infuse-vitality",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "2iQKhCQBijhj5Rf3",
      "slug": "infuse-vitality",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:c0b82d0f6ba17cc0e7c586f8995c50f4fefd6369e3dae15f547c1d1c54b685af",
    "translatableHash": "sha256:9b86619e082aca91d4adc729e9b164866d580c9537cd090e29051c0249954451",
    "data": {
      "schemaVersion": 1,
      "name": "Infuse Vitality",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "vitality"
      ],
      "traditions": [
        "divine"
      ],
      "description": "You empower attacks with vital energy. The number of targets is equal to the number of actions you spent casting this spell. Each target's unarmed and weapon Strikes deal an extra 1d4 vitality damage. (This damage typically damages only undead). If you have the holy trait, you can add that trait to this spell and to the Strikes affected by the spell.\nHeightened (3rd) The damage increases to 2d4 damage.\nHeightened (5th) The damage increases to 3d4 damage.\nSpell Effect: Infuse Vitality",
      "castingTime": "1 to 3 actions",
      "range": "30 feet",
      "target": "1 to 3 willing creatures",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (3rd) The damage increases to 2d4 damage.\nHeightened (5th) The damage increases to 3d4 damage.\nSpell Effect: Infuse Vitality"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 524,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Infuse Vitality",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Infuse Vitality",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Infuse Vitality",
          "sourceId": "X7RD0JRxhJV9u2LC",
          "name": "Spell Effect: Infuse Vitality",
          "type": "effect"
        },
        "owner": {
          "sourceId": "2iQKhCQBijhj5Rf3",
          "name": "Infuse Vitality",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:illusory-object",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "2oH5IufzdESuYxat",
      "slug": "illusory-object",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/illusory-object.webp"
    },
    "sourceHash": "sha256:b5946568d0e97b96ca3d9e0dd28a89ab189af4ffdfb5a4f73eddcd35a8b7c543",
    "translatableHash": "sha256:2a80f834ff4031c66828434dbd79e77226658350c731123ac7adf60171da4096",
    "data": {
      "schemaVersion": 1,
      "name": "Illusory Object",
      "rank": 1,
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
      "description": "You create an illusory visual image of a stationary object. The entire image must fit within the spell's area. The object appears to animate naturally, but it doesn't make sounds or generate smells. For example, water would appear to pour down an illusory waterfall, but it would be silent.\nAny creature that touches the image or uses the Seek action to examine it can attempt to disbelieve your illusion.\nHeightened (2nd) Your image makes appropriate sounds, generates normal smells, and feels right to the touch. The spell gains the auditory and olfactory traits. The duration increases to 1 hour.\nHeightened (5th) As the 2nd-rank version, but the duration is unlimited.",
      "castingTime": "2 actions",
      "range": "500 feet",
      "target": "",
      "area": "20 burst",
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (2nd) Your image makes appropriate sounds, generates normal smells, and feels right to the touch. The spell gains the auditory and olfactory traits. The duration increases to 1 hour.\nHeightened (5th) As the 2nd-rank version, but the duration is unlimited."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 349,
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
          "sourceId": "2oH5IufzdESuYxat",
          "name": "Illusory Object",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:daze",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "4gBIw4IDrSfFHik4",
      "slug": "daze",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/daze.webp"
    },
    "sourceHash": "sha256:14632636dae12efb811e7577a69ab8f7a3b470225e7cf5040ff69f33b4fda92a",
    "translatableHash": "sha256:4814fd5e3dbce8dffe05fa8d00350f95764bca9334193454df2ebaa4f428aee7",
    "data": {
      "schemaVersion": 1,
      "name": "Daze",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "cantrip",
        "concentrate",
        "manipulate",
        "mental",
        "nonlethal"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult"
      ],
      "description": "You push into the target's mind and daze it with a mental jolt. The jolt deals 1d6 mental damage, with a basic Will save. If the target critically fails the save, it is also Stunned 1.\nHeightened (+2) The damage increases by 1d6.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": "basic will save",
      "damage": [
        {
          "formula": "1d6",
          "type": "mental",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+2) The damage increases by 1d6."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 177,
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
          "sourceId": "4gBIw4IDrSfFHik4",
          "name": "Daze",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:fear",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "4koZzrnMXhhosn0D",
      "slug": "fear",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/fear.webp"
    },
    "sourceHash": "sha256:a7c25183a203e01b474322b3824e38307d2dfe7e9b9d39702da556b71d967013",
    "translatableHash": "sha256:d4f5d091df0d81f0ce3fc7a90ae066fa75e97fe566ee03597f71c911d1c41b0c",
    "data": {
      "schemaVersion": 1,
      "name": "Fear",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "emotion",
        "fear",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult",
        "primal"
      ],
      "description": "You plant fear in the target; it must attempt a Will save.\nCritical Success The target is unaffected.\nSuccess The target is Frightened 1.\nFailure The target is Frightened 2.\nCritical Failure The target is Frightened 3 and Fleeing for 1 round.\nHeightened (3rd) You can target up to five creatures.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "varies",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened (3rd) You can target up to five creatures."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 182,
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
          "sourceId": "4koZzrnMXhhosn0D",
          "name": "Fear",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 297,
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
          "sourceId": "4koZzrnMXhhosn0D",
          "name": "Fear",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 421,
        "uuid": "Compendium.pf2e.conditionitems.Item.Frightened",
        "label": "Frightened 3",
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
          "sourceId": "4koZzrnMXhhosn0D",
          "name": "Fear",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 493,
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
          "sourceId": "4koZzrnMXhhosn0D",
          "name": "Fear",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:alarm",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "4WAib3GichxLjp5p",
      "slug": "alarm",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/alarm.webp"
    },
    "sourceHash": "sha256:98b6d38cdcc50a6df5e799a0cd9c6b00e40ddac96d73e700885ec3f593a1e17c",
    "translatableHash": "sha256:9311d2e55d27f9222c8987ae82089470e85e58036527c63993ca1bd051028cdc",
    "data": {
      "schemaVersion": 1,
      "name": "Alarm",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult",
        "primal"
      ],
      "description": "You ward an area to alert you when creatures enter without your permission. When you cast alarm, select a password. Whenever a Small or larger corporeal creature enters the spell's area without speaking the password, alarm sends your choice of a mental alert (in which case the spell gains the mental trait) or an audible alarm with the sound and volume of a hand bell (in which case the spell gains the auditory trait). Either option automatically awakens you, and the bell allows each creature in the area to attempt a check (perception, dc:15) check to wake up. A creature aware of the alarm must succeed at a Stealth check against the spell's DC or trigger the spell when moving into the area.\nHeightened (3rd) You can specify a trigger for which types of creatures sound the alarm spell.",
      "castingTime": "10 minutes",
      "range": "touch",
      "target": "",
      "area": "20 burst",
      "duration": "8 hours",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (3rd) You can specify a trigger for which types of creatures sound the alarm spell."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:summon-animal",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "4YnON9JHYqtLzccu",
      "slug": "summon-animal",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:69245404394b1ee414781cadb1c54678dd08d0a357422b39e541115ed60b82a5",
    "translatableHash": "sha256:606b81b2e72c75fab99d72ba7ccad9fdadced6c362666451c86a9aa97c1b5d3b",
    "data": {
      "schemaVersion": 1,
      "name": "Summon Animal",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "summon"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You summon a creature that has the animal trait and whose level is –1 to fight for you.\nHeightened As listed in the summon trait.",
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
        "sourceIndex": 148,
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
          "sourceId": "4YnON9JHYqtLzccu",
          "name": "Summon Animal",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:item-facade",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "4ZGte0i9YbLh4dRi",
      "slug": "item-facade",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/item-facade.webp"
    },
    "sourceHash": "sha256:a445bef61808c52999bc072121c52413e86999c54c063dbe9e579cea8ebfd81f",
    "translatableHash": "sha256:3381433e0ddcaa2407926a47681e0e34e020ef06e2f2d05e64448fb178e1a3b4",
    "data": {
      "schemaVersion": 1,
      "name": "Item Facade",
      "rank": 1,
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
      "description": "You make the target object look and feel as though it were in much better or worse physical condition. When you cast this spell, decide whether you want to make the object look decrepit or perfect. An item made to look decrepit appears Broken and shoddy. An intact item made to look better appears as though it's brand new and highly polished or well maintained. A Broken item appears to be intact and functional. Destroyed items can't be affected by this spell. A creature that Interacts with the item can attempt to disbelieve the illusion.\nHeightened (2nd) The duration is 24 hours.\nHeightened (3rd) The duration is unlimited.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 object no more than 10 feet by 10 feet by 10 feet",
      "area": null,
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (2nd) The duration is 24 hours.\nHeightened (3rd) The duration is unlimited."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 239,
        "uuid": "Compendium.pf2e.conditionitems.Item.Broken",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Broken",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Broken",
          "sourceId": "6dNUvdb1dhToNDj3",
          "name": "Broken",
          "type": "condition"
        },
        "owner": {
          "sourceId": "4ZGte0i9YbLh4dRi",
          "name": "Item Facade",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:telekinetic-projectile",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "60sgbuMWN0268dB7",
      "slug": "telekinetic-projectile",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:b6cc1baae35011dcf173b620be53fe854d2637ec8993b28b1efe035b25dc4f8a",
    "translatableHash": "sha256:cdc6057145f2f6ecbf5399d9949c34c6ad5d834b928b2d78bc8262c29e553d29",
    "data": {
      "schemaVersion": 1,
      "name": "Telekinetic Projectile",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "attack",
        "cantrip",
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You hurl a loose, unattended object that is within range and that has 1 Bulk or less at the target. Make a spell attack roll against the target. If you hit, you deal 2d6 bludgeoning, piercing, or slashing damage—as appropriate for the object you hurled. No specific traits or magic properties of the hurled item affect the attack or the damage.\nCritical Success You deal double damage.\nSuccess You deal full damage.\nHeightened (+1) The damage increases by 1d6.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [
        {
          "formula": "2d6",
          "type": "untyped",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+1) The damage increases by 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:ignition",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "6DfLZBl8wKIV03Iq",
      "slug": "ignition",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:26d4f6b29329650e61da029a68682aa278ffd23bb6ef32099e6b91bf4648314d",
    "translatableHash": "sha256:863030ec1aad5e220bf434cdb02efc65e278c3bf52f13a89edbff05e164c71d8",
    "data": {
      "schemaVersion": 1,
      "name": "Ignition",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "attack",
        "cantrip",
        "concentrate",
        "fire",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You snap your fingers and point at a target, which begins to smolder. Make a spell attack roll against the target's AC, dealing 2d4 fire damage on a hit. If the target is within your melee reach, you can choose to make a melee spell attack with the flame instead of a ranged spell attack, which increases all the spell's damage dice to d6s.\nCritical Success The target takes double damage and 1d4 persistent fire damage.\nSuccess The target takes full damage.\nHeightened (+1) The initial damage increases by 1d4 and the persistent fire damage on a critical hit increases by 1d4.\n(@item.rank)d4[persistent,fire]{Scaling Persistent Fire Damage}\n(@item.rank)d6[persistent,fire]{Scaling Persistent Fire Damage (Melee)}",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [
        {
          "formula": "2d4",
          "type": "fire",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+1) The initial damage increases by 1d4 and the persistent fire damage on a critical hit increases by 1d4.\n(@item.rank)d4[persistent,fire]{Scaling Persistent Fire Damage}\n(@item.rank)d6[persistent,fire]{Scaling Persistent Fire Damage (Melee)}"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:ill-omen",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "6ZIKB0151LUR19Rw",
      "slug": "ill-omen",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:c60637e6d51fa4665e403a2acc70c26e728034396629b7d88d9a43340e0759d4",
    "translatableHash": "sha256:d293d09892375f34b130e3857fde6e2eb1b4ed2703c0862ffc4d578eed6f4fe1",
    "data": {
      "schemaVersion": 1,
      "name": "Ill Omen",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "curse",
        "manipulate",
        "misfortune"
      ],
      "traditions": [
        "occult"
      ],
      "description": "The target is struck with misfortune, which throws it off balance. The target must attempt a Will save.\nSuccess The target is unaffected.\nFailure The first time during the duration that the target attempts an attack roll or skill check, it must roll twice and use the worse result.\nCritical Failure Every time during the duration that the target attempts an attack roll or skill check, it must roll twice and use the worse result.\nSpell Effect: Ill Omen",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 round",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 513,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Ill Omen",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Ill Omen",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Ill Omen",
          "sourceId": "AmsVO5Q6078mEvNt",
          "name": "Spell Effect: Ill Omen",
          "type": "effect"
        },
        "owner": {
          "sourceId": "6ZIKB0151LUR19Rw",
          "name": "Ill Omen",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:bane",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "7ZinJNzxq0XF0oMx",
      "slug": "bane",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/bane.webp"
    },
    "sourceHash": "sha256:27c6a7c489a82bd5972a9cbfde049784d5ebfc1ad856489c313a52ceb5412557",
    "translatableHash": "sha256:6e4b73443f40d64b48720fbf085669d3eede4c36d945773bbf5fd0f6a7b3bc68",
    "data": {
      "schemaVersion": 1,
      "name": "Bane",
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
      "description": "You fill the minds of your enemies with doubt. Enemies in the area must succeed at a Will save or take a –1 status penalty to attack rolls as long as they are in the area. Once per round on subsequent turns, you can Sustain the spell to increase the emanation's radius by 10 feet and force enemies in the area that weren't yet affected to attempt another saving throw.\nBane can counteract Bless.\nSpell Effect: Bane",
      "castingTime": "2 actions",
      "range": "",
      "target": "enemies in the area",
      "area": "10 emanation",
      "duration": "1 minute",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 399,
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
          "sourceId": "7ZinJNzxq0XF0oMx",
          "name": "Bane",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 452,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Bane",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Bane",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Bane",
          "sourceId": "UTLp7omqsiC36bso",
          "name": "Spell Effect: Bane",
          "type": "effect"
        },
        "owner": {
          "sourceId": "7ZinJNzxq0XF0oMx",
          "name": "Bane",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:sanctuary",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "8xRzLhwGL7Dgy3EZ",
      "slug": "sanctuary",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/sanctuary.webp"
    },
    "sourceHash": "sha256:7bfcd7972b3ae6d1ec47105da6282add1dd474c46918ec2fc317f0fc893d1e23",
    "translatableHash": "sha256:3467bb281886e0daaa55e1b754c86b1378c96bf99e35850806e78a83e58bb27f",
    "data": {
      "schemaVersion": 1,
      "name": "Sanctuary",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "You ward a creature with protective energy that deters attacks. Creatures attempting to attack the target must attempt a Will save each time. If the target uses a hostile action, the spell ends.\nCritical Success Sanctuary ends.\nSuccess The creature can attempt its attack and any other attacks against the target this turn.\nFailure The creature can't attack the target and wastes the action. It can't attempt further attacks against the target this turn.\nCritical Failure The creature wastes the action and can't attempt to attack the target for the rest of sanctuary's duration.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:summon-undead",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "9WGeBwIIbbUuWKq0",
      "slug": "summon-undead",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/animate-dead.webp"
    },
    "sourceHash": "sha256:ac16988320dfd9e6ea2157d1f9ea89a9dd1c452b537389d6f1f496a0495757f4",
    "translatableHash": "sha256:0e18779ab327078080578097c651326c271350d0b5b817999369bbd379aaa136",
    "data": {
      "schemaVersion": 1,
      "name": "Summon Undead",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "summon"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult"
      ],
      "description": "You summon a creature that has the undead trait and whose level is -1 to fight for you.\nHeightened As listed in the summon trait.",
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
        "sourceIndex": 150,
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
          "sourceId": "9WGeBwIIbbUuWKq0",
          "name": "Summon Undead",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:mystic-armor",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "aAbfKn8maGjJjk2W",
      "slug": "mystic-armor",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/mage-armor.webp"
    },
    "sourceHash": "sha256:bb53243406fc36122daff32a577eb9d6dbdfa7a05c4f636a7cb8f9674e63b35a",
    "translatableHash": "sha256:09ad7b2b29dcccfc24abefbf856432a608f550abdb6da75aa0a53f48e6e40b12",
    "data": {
      "schemaVersion": 1,
      "name": "Mystic Armor",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult",
        "primal"
      ],
      "description": "You ward yourself with shimmering magical energy, gaining a +1 item bonus to AC and a maximum Dexterity modifier of +5. While wearing mystic armor, you use your unarmored proficiency to calculate your AC.\nSpell Effect: Mystic Armor\nHeightened (4th) You gain a +1 item bonus to saving throws.\nHeightened (6th) The item bonus to AC increases to +2, and you gain a +1 item bonus to saving throws.\nHeightened (8th) The item bonus to AC increases to +2, and you gain a +2 item bonus to saving throws.\nHeightened (10th) The item bonus to AC increases to +3, and you gain a +3 item bonus to saving throws.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "until your next daily preparations",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) You gain a +1 item bonus to saving throws.\nHeightened (6th) The item bonus to AC increases to +2, and you gain a +1 item bonus to saving throws.\nHeightened (8th) The item bonus to AC increases to +2, and you gain a +2 item bonus to saving throws.\nHeightened (10th) The item bonus to AC increases to +3, and you gain a +3 item bonus to saving throws."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 224,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Mystic Armor",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Mystic Armor",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Mystic Armor",
          "sourceId": "qkwb5DD3zmKwvbk0",
          "name": "Spell Effect: Mystic Armor",
          "type": "effect"
        },
        "owner": {
          "sourceId": "aAbfKn8maGjJjk2W",
          "name": "Mystic Armor",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:fleet-step",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "aEM2cttJ2eYcLssW",
      "slug": "fleet-step",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:5d48c573ebf8dfb90e56c066819f535ae2cbce227b1ad7db5c434ade658175f1",
    "translatableHash": "sha256:d7d3d325fec9f30de508fbdcb9578ba9ce3de6f273628d36b8ff9674b422d8e8",
    "data": {
      "schemaVersion": 1,
      "name": "Fleet Step",
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
      "description": "You gain a +30-foot status bonus to your Speed.\nSpell Effect: Fleet Step",
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
        "sourceIndex": 58,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Fleet Step",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Fleet Step",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Fleet Step",
          "sourceId": "ThFug45WHkQQXcoF",
          "name": "Spell Effect: Fleet Step",
          "type": "effect"
        },
        "owner": {
          "sourceId": "aEM2cttJ2eYcLssW",
          "name": "Fleet Step",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:command",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "aIHY2DArKFweIrpf",
      "slug": "command",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/command.webp"
    },
    "sourceHash": "sha256:95b59652de3a8b8aff444c7f246ee3ef1f7e3bc9e88f056a0f388551f3a5e58e",
    "translatableHash": "sha256:4ca2a9bc327982ab569b1d6c18cc437020e82fe76a49df4ad04e89b307cf01ed",
    "data": {
      "schemaVersion": 1,
      "name": "Command",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "auditory",
        "concentrate",
        "linguistic",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult"
      ],
      "description": "You shout a command that's hard to ignore. You can command the target to approach you, run away (as if it had the Fleeing condition), release what it's holding, drop Prone, or stand in place. It can't Delay or take any reactions until it has obeyed your command. The effects depend on the target's Will save.\nSuccess The creature is unaffected.\nFailure For the first action on its next turn, the creature must use a single action to do as you command.\nCritical Failure The target must use all its actions on its next turn to obey your command.\nHeightened (5th) You can target up to 10 creatures.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "until the end of the target's next turn",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened (5th) You can target up to 10 creatures."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 117,
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
          "sourceId": "aIHY2DArKFweIrpf",
          "name": "Command",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 212,
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
          "sourceId": "aIHY2DArKFweIrpf",
          "name": "Command",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 290,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Delay",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Delay",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Delay",
          "sourceId": "A72nHGUtNXgY5Ey9",
          "name": "Delay",
          "type": "action"
        },
        "owner": {
          "sourceId": "aIHY2DArKFweIrpf",
          "name": "Command",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:sigil",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "AUctDF2fqPZN2w4W",
      "slug": "sigil",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/sigil.webp"
    },
    "sourceHash": "sha256:300f8b1eddb6e767328c500a192c33860d86f6ca7bfe75ac49fecda723747808",
    "translatableHash": "sha256:cb16a8cfd046d7c8ddd07ab077adff442136fd0e14b7719ecf2459a0eb6a0643",
    "data": {
      "schemaVersion": 1,
      "name": "Sigil",
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
        "occult",
        "primal"
      ],
      "description": "You harmlessly place your unique magical sigil, which is about 1 square inch in size, on the targeted creature or object. The mark can be visible or invisible, and you can change it from one state to another by using an Interact action to touch the target. The mark can be scrubbed or scraped off with 5 minutes of work. If it's on a creature, it fades naturally over the course of a week. The time before the mark fades increases depending on your heightened rank.\nHeightened (3rd) The sigil instead fades after 1 month.\nHeightened (5th) The sigil instead fades after 1 year.\nHeightened (7th) The sigil never fades.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 creature or object",
      "area": null,
      "duration": "unlimited",
      "defense": null,
      "damage": [],
      "heightening": "heightened rank.\nHeightened (3rd) The sigil instead fades after 1 month.\nHeightened (5th) The sigil instead fades after 1 year.\nHeightened (7th) The sigil never fades."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:lock",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Azoh0BSoCASrA1lr",
      "slug": "lock",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/lock.webp"
    },
    "sourceHash": "sha256:9789c844e6c96c727917ad5f98e7aeea23b868acdb8d3e3a975d3121895598a1",
    "translatableHash": "sha256:4592b7733761f2dc3ef8a326e2775052bdc4a04d3a6ad70409133b54f5a73384",
    "data": {
      "schemaVersion": 1,
      "name": "Lock",
      "rank": 1,
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
      "description": "The target's latch mechanism clinks shut, held fast by unseen magical wards. When you magically lock a target, you set an Athletics and Thievery DC to open it equal to your spell DC or the base lock DC with a +4 status bonus, whichever is higher. Any key or combination that once opened a lock affected by this spell does not do so for the duration of the spell, though the key or combination does grant a +4 circumstance bonus to checks to open the door. If the target is opened, the spell ends. Assuming the target is not barred or locked in some additional way, you can unlock and open it with an Interact action during which you touch the target. This does not end the spell. You can Dismiss this spell at any time and from any distance.\nHeightened (2nd) The duration is unlimited, but you must expend 6 gp worth of precious metals as an additional cost.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 lock, or a door or container with a latch",
      "area": null,
      "duration": "until your next daily preparations",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (2nd) The duration is unlimited, but you must expend 6 gp worth of precious metals as an additional cost."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:mindlink",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "D442XMADp01qJ7Cs",
      "slug": "mindlink",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/mindlink.webp"
    },
    "sourceHash": "sha256:d51db138943beb044f298f9bfbbc9a275cacc7d689840c8045b66e5422263ae4",
    "translatableHash": "sha256:da586cf198e8e34ff8e9126cfd169f34b3dc7390817c8e3c6c4a911c0be19406",
    "data": {
      "schemaVersion": 1,
      "name": "Mindlink",
      "rank": 1,
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
      "description": "You link your mind to the target's mind and mentally impart to that target an amount of information in an instant that could otherwise be communicated in 10 minutes.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 willing creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  }
]
