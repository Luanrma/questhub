import type { Pathfinder2eOriginalContentRecord } from '../../records'
import type { Pathfinder2eItemData } from '../types'

export const PATHFINDER_2E_EXHAUSTIVE_14_ITEM_ORIGINALS: readonly Pathfinder2eOriginalContentRecord<Pathfinder2eItemData>[] = [
  {
    "contentId": "pf2e:item:equipment-srd:searing-blade-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "pvxRcuBexbFawjCg",
      "slug": "searing-blade-greater",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:fda49f1c615e1445e01619359304d125854f8cce3b9e819d758fb1c76071d20c",
    "translatableHash": "sha256:27c8b0d5763e1b37e03a14f979939459666dad1955103176c729013a8dcdfe0b",
    "data": {
      "schemaVersion": 1,
      "name": "Searing Blade (Greater)",
      "itemType": "weapon",
      "level": 17,
      "rarity": "common",
      "traits": [
        "fire",
        "magical",
        "versatile-p"
      ],
      "description": "This +3 greater striking Greater Flaming longsword has an ornate brass hilt and a blade shaped like stylized flames. When wielded, the blade projects illumination resembling shimmering firelight, emitting dim light in a 10-foot radius.\nActivate—Shoot Fire 2 (concentrate, manipulate)\nEffect You cast the Ignition cantrip from the sword as a 9th-rank arcane spell, using your melee attack modifier with searing blade as your spell attack modifier.\nActivate—Radiate Flames A (aura, concentrate, fire)\nFrequency once per day\nEffect A 10-foot emanation of flame radiates from the greater searing blade for 1 minute. All weapon and unarmed attacks by you and your allies within the area gain the effect of the flaming property rune.\nAura: Searing Blade (Greater)",
      "bulk": 1,
      "price": {
        "gp": 13800
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "sword",
      "damage": {
        "dice": 1,
        "die": "d8",
        "type": "slashing"
      }
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 32,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Flaming (Greater)",
        "label": "Greater Flaming",
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Flaming (Greater)",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Flaming (Greater)",
          "sourceId": "RSZwUlCzUX7Nb4UA",
          "name": "Flaming (Greater)",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "pvxRcuBexbFawjCg",
          "name": "Searing Blade (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 473,
        "uuid": "Compendium.pf2e.spells-srd.Item.Ignition",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Ignition",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Ignition",
          "sourceId": "6DfLZBl8wKIV03Iq",
          "name": "Ignition",
          "type": "spell"
        },
        "owner": {
          "sourceId": "pvxRcuBexbFawjCg",
          "name": "Searing Blade (Greater)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1105,
        "uuid": "Compendium.pf2e.equipment-effects.Item.Aura: Searing Blade (Greater)",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-effects.Item.Aura: Searing Blade (Greater)",
          "package": "pf2e",
          "sourcePack": "equipment-effects",
          "documentType": "Item",
          "compendiumKey": "Aura: Searing Blade (Greater)",
          "sourceId": "4XO5mkjnh5riwZPM",
          "name": "Aura: Searing Blade (Greater)",
          "type": "effect"
        },
        "owner": {
          "sourceId": "pvxRcuBexbFawjCg",
          "name": "Searing Blade (Greater)",
          "type": "weapon"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:magic-wand-8th-rank-spell",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Qs8RgNH6thRPv2jt",
      "slug": "magic-wand-8th-rank-spell",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/wands/magic-wands/magic-wand.webp"
    },
    "sourceHash": "sha256:3a6ed2e3cf22c093542b40e87e1368742493123ef801493a310a22773ef52857",
    "translatableHash": "sha256:74a83ae8df2749586c9c132b0297bf19198549fe750208630e99b63b51fe3d08",
    "data": {
      "schemaVersion": 1,
      "name": "Magic Wand (8th-Rank Spell)",
      "itemType": "consumable",
      "level": 17,
      "rarity": "common",
      "traits": [
        "magical",
        "wand"
      ],
      "description": "This baton is about a foot long and contains a single spell. The appearance typically relates to the spell within.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You Cast the Spell at the indicated rank.\nCraft Requirements Supply a casting of the spell at the listed rank.\nNote: To create a scroll or wand of a specific spell, drag the spell from the compendium or compendium browser into the inventory of a PC, NPC, or loot actor.",
      "bulk": 0.1,
      "price": {
        "gp": 15000
      },
      "usage": "held-in-one-hand",
      "category": "wand",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-shardstorm-7th-rank-spell",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "WeX7rAO2kAyP0QnG",
      "slug": "wand-of-shardstorm-7th-rank-spell",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/wands/specialty-wands/wand-of-manifold-missiles.webp"
    },
    "sourceHash": "sha256:c89bdc7e8d046e4b65a13b8933f0dd00cfff05802e5f7beaea9fab041a65868a",
    "translatableHash": "sha256:dff8566643ca9b3a191c7cd0077978f08e3ea22a42bbae826ce6812a6b7da348",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Shardstorm (7th-Rank Spell)",
      "itemType": "consumable",
      "level": 17,
      "rarity": "common",
      "traits": [
        "concentrate",
        "force",
        "magical",
        "manipulate",
        "wand"
      ],
      "description": "This wand features a carved dragon's head at its top and a polished metal sphere set in its midsection.\nActivate Cast a Spell\nFrequency Once per day, plus overcharge\nEffect You cast Force Barrage at 7th rank.\nAfter you cast the spell, an additional shard or shards are released from the wand at the start of each of your turns, as though you cast the 1-action version of force barrage. Choose targets each time. This lasts for 1 minute, until you're no longer wielding the wand, or until you try to activate the wand again.\nCraft Requirements Supply a casting of force barrage of the appropriate rank.",
      "bulk": 0.1,
      "price": {
        "gp": 15000
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
          "sourceId": "WeX7rAO2kAyP0QnG",
          "name": "Wand of Shardstorm (7th-Rank Spell)",
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
          "sourceId": "7HDVAJnChCzP8aCE",
          "name": "Force Barrage",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:bracers-of-strength",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "WOiCJSS2MicKCMVs",
      "slug": "bracers-of-strength",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:bd3e4f3eff1f50b8fc5534fed3158802a50a61eaa88ec95c06994966d0dcbe01",
    "translatableHash": "sha256:0d65ba4871501de28adb0b4c0c07aea5f3a9f756261796bedec309eb095d469d",
    "data": {
      "schemaVersion": 1,
      "name": "Bracers of Strength",
      "itemType": "equipment",
      "level": 17,
      "rarity": "common",
      "traits": [
        "apex",
        "invested",
        "magical"
      ],
      "description": "Etchings of powerful bears decorate these brass bracers. You gain a +3 item bonus to Athletics checks and a +2 circumstance bonus to Athletics checks to lift a heavy object, Escape, and Force Open. When you invest the bracers, you either increase your Strength modifier by 1 or increase it to +4, whichever would give you a higher value.\nActivate—Bear Hug 1 (manipulate)\nAttempt to Grapple a creature. If you succeed, you crush the creature in your grasp, dealing (effect value)[bludgeoning] damage to it equal to your Strength modifier. If you critically succeeded, the damage is equal to double your Strength modifier, and the creature suffocates as long as it remains Grabbed or Restrained by you.",
      "bulk": 0,
      "price": {
        "gp": 15000
      },
      "usage": "wornbracers",
      "category": "equipment",
      "group": "equipment"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 177,
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
          "sourceId": "WOiCJSS2MicKCMVs",
          "name": "Bracers of Strength",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 229,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Force Open",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Force Open",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Force Open",
          "sourceId": "SjmKHgI7a5Z9JzBx",
          "name": "Force Open",
          "type": "action"
        },
        "owner": {
          "sourceId": "WOiCJSS2MicKCMVs",
          "name": "Bracers of Strength",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 537,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Grapple",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Grapple",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Grapple",
          "sourceId": "PMbdMWc2QroouFGD",
          "name": "Grapple",
          "type": "action"
        },
        "owner": {
          "sourceId": "WOiCJSS2MicKCMVs",
          "name": "Bracers of Strength",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 900,
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
          "sourceId": "WOiCJSS2MicKCMVs",
          "name": "Bracers of Strength",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 954,
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
          "sourceId": "WOiCJSS2MicKCMVs",
          "name": "Bracers of Strength",
          "type": "equipment"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:accolade-robe-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "ZdAZ1ALZ28QOeCN7",
      "slug": "accolade-robe-greater",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:1f514d635d5892b2f908dce3ff8e0b12ebb4082d38d2ca1b287014573cd24412",
    "translatableHash": "sha256:d8171373d974d5b83b23bd3f0b901c8335fdf633060064c778162055975e4328",
    "data": {
      "schemaVersion": 1,
      "name": "Accolade Robe (Greater)",
      "itemType": "equipment",
      "level": 17,
      "rarity": "common",
      "traits": [
        "arcane",
        "focused",
        "invested"
      ],
      "description": "Although not all wizards have gone through formal training, it's become tradition to enchant robes representing the arduous training required and festoon them with honors one has earned. Typically, an accolade robe is styled after a single wizard school, with appropriate colors and symbols. Wearing these robes grants a +3 item bonus to Arcana checks.\nThe pockets of the robe tie to an extradimensional space that can hold 1 Bulk of items, none of which can have greater than light Bulk. The items must be related to spellcasting and academics—spellbooks, scrolls, wands, scholarly journals, and other academic supplies the GM allows. These items do not count against your Bulk limit. You can Interact to retrieve or stow items normally.\nActivate—Review 1 (concentrate, manipulate)\nEffect You retrieve an item of your choice from the robe's storage, then Recall Knowledge.\nYou can activate the robe's Review once per minute as a free action.\nActivate—Extra Credit F (concentrate)\nFrequency once per day\nEffect You gain 1 Focus Point, which you can spend only to cast a school spell. If you don't spend this Focus Point by the end of this turn, it is lost.\nCraft Requirements You are a wizard of the associated school.",
      "bulk": 0.1,
      "price": {
        "gp": 13500
      },
      "usage": "worngarment",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-widening-8th-rank-spell",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "20nQTcGzpUv8jJ6R",
      "slug": "wand-of-widening-8th-rank-spell",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/wands/specialty-wands/wand-of-widening.webp"
    },
    "sourceHash": "sha256:801e845cb73b42e39be09d284136e325183e78daaba0a4b88d1f77bd7975b7a0",
    "translatableHash": "sha256:c6d072e7d7ff3530a565ce2b88fc24834962f016a71de4d8f92256990c4d338e",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Widening (8th-Rank Spell)",
      "itemType": "equipment",
      "level": 18,
      "rarity": "common",
      "traits": [
        "magical",
        "wand"
      ],
      "description": "The end of this wand is forked with a peridot setting.\nActivate Cast a Spell; The activation takes 2 if the spell normally takes 1 to cast, or 3 if the spell normally take 2\nFrequency Once per day, plus overcharge\nEffect You Cast the Spell, and increase its area. Add 5 feet to the radius of a burst that normally has a radius of at least 10 feet; add 5 feet to the length of a cone or line that is normally 15 feet long or smaller; or add 10 feet to the length of a larger cone or line.\nCraft Requirements Supply a casting of a spell of the appropriate rank. The spell must have a casting time of 1 or 2, can't have a duration, and must have an area of burst (10 feet or more), cone, or line.",
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
    "contentId": "pf2e:item:equipment-srd:countering-charm-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "39wTBxfaHkAHwXhw",
      "slug": "countering-charm-major",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/other-worn-items/aluum-charm.webp"
    },
    "sourceHash": "sha256:fb232879779e477480f0e1482ed905c06c54e47c84ef631a025d74c9dae20791",
    "translatableHash": "sha256:ebfbb1e36ceffc2c683c7f555d631b6e03fbc83fcc4e716e6b125e94cab2c47f",
    "data": {
      "schemaVersion": 1,
      "name": "Countering Charm (Major)",
      "itemType": "equipment",
      "level": 18,
      "rarity": "uncommon",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "This glittering charm is made of a gemstone flawed with a leaden inclusion. Spellcasters can cast spells into countering charms that they've invested or that are invested by a willing creature. The spell's effect doesn't occur; the spell's power is instead stored within the charm, replacing any spell previously there. The charm can hold only spells cast from spell slots, not cantrips or focus spells. While the charm is invested, the creature who has invested it knows what spell is stored within and automatically identifies that spell when it's cast.\nActivate—Counter R (manipulate)\nTrigger You are targeted by or within the area of the spell stored within the charm\nRequirements You have a free hand\nEffect You present the charm and attempt to counteract the triggering spell, using the rank of the spell stored in the charm and a counteract modifier of [[/r 1d20+30 #Counteract]]. This expends the spell held in the charm.",
      "bulk": 0.1,
      "price": {
        "gp": 20000
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:crown-of-witchcraft-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "4v850xbHgUdlvamn",
      "slug": "crown-of-witchcraft-greater",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:46342a24981be1940133495d05059b0ffc55fe9b9b59fcf8b173c529f753e2c6",
    "translatableHash": "sha256:d85aecbc096b8e8f97fd77b2db9bbe66918b461f7c725e8589fe56dc8fd5cf42",
    "data": {
      "schemaVersion": 1,
      "name": "Crown of Witchcraft (Greater)",
      "itemType": "equipment",
      "level": 18,
      "rarity": "common",
      "traits": [
        "focused",
        "invested",
        "magical"
      ],
      "description": "An elegant accoutrement for a witch who has come into the higher echelons of power, a crown of witchcraft typically looks like a garland of flowering twigs, a jeweled circlet, or a tall hat of fine fabric. You gain a +2 item bonus to Intimidation checks, and if you're a witch, you gain a +3 item bonus to your patron skill.\nIf you have a familiar, you can attach a small portion of the crown's material to your familiar, such as a strip of fabric from a hat tied around its tail or a sprig of natural material linked to its collar; the familiar doesn't need to invest the item itself. If you do this, your familiar gains the tough pet ability as long as the crown is invested by you.\nActivate—Defiant Hex F (concentrate)\nFrequency once per day\nEffect Gain 1 Focus Point, which you can spend only to cast a witch hex spell. If you don't spend this point by the end of this turn, it is lost.\nCraft Requirements You are a witch.",
      "bulk": 0,
      "price": {
        "gp": 21000
      },
      "usage": "wornheadwear",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:armor-potency-3",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "6ELjUFY0sEJ7nZlZ",
      "slug": "armor-potency-3",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/runes/fundamental-armor-runes/armor-potency.webp"
    },
    "sourceHash": "sha256:00fcdd834c013b1dbd31ab557d584045a6b3218303660324ca8aaa72583e8994",
    "translatableHash": "sha256:873e6c0e7c669e2b0ef65e1049ac5e928c33c9d520de22aa075ae6c257b546bc",
    "data": {
      "schemaVersion": 1,
      "name": "Armor Potency (+3)",
      "itemType": "equipment",
      "level": 18,
      "rarity": "common",
      "traits": [
        "magical"
      ],
      "description": "Magic wards deflect attacks. Increase the armor's item bonus to AC by 3. The armor can be etched with three property runes.\nYou can upgrade the armor potency rune already etched on a suit of armor using the normal process for upgrading items and runes.\nCraft Requirements You are an legendary in Crafting.",
      "bulk": 0,
      "price": {
        "gp": 20560
      },
      "usage": "etched-onto-armor",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:symbol-of-conflict-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "C7FeT7eVuwRnLhJy",
      "slug": "symbol-of-conflict-major",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:ed84a2f2c9dff9dfab2531c27a5e6c7328485b5188a7f020803cc9c08b290ec4",
    "translatableHash": "sha256:aecadd8b26936e0a7ea9fe4d171aea08450762fc56bc25d20388a9823bfd56d8",
    "data": {
      "schemaVersion": 1,
      "name": "Symbol of Conflict (Major)",
      "itemType": "equipment",
      "level": 18,
      "rarity": "uncommon",
      "traits": [
        "divine",
        "invested"
      ],
      "description": "This tarnished necklace can be attuned only by someone who is holy or unholy. When you attune it, it transforms into your deity's religious symbol or a personal symbol if you don't have a deity. You receive a +3 item bonus to Religion and a +1 circumstance bonus to saves against holy and unholy effects.\nActivate—Presence 2 (concentrate, manipulate)\nFrequency once per day\nEffect The symbol casts 6th-rank Bane, Bless, Divine Wrath, or Cleanse Affliction. Add 6th-rank Summon Celestial to this list if you are holy and 6th-rank Summon Fiend if you are unholy.\nThe counteract DC of these effects is 38, and the counteract modifier is +28.\nCraft Requirements You must be holy or unholy.",
      "bulk": 0,
      "price": {
        "gp": 19000
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
          "sourceId": "C7FeT7eVuwRnLhJy",
          "name": "Symbol of Conflict (Major)",
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
          "sourceId": "C7FeT7eVuwRnLhJy",
          "name": "Symbol of Conflict (Major)",
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
          "sourceId": "C7FeT7eVuwRnLhJy",
          "name": "Symbol of Conflict (Major)",
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
          "sourceId": "C7FeT7eVuwRnLhJy",
          "name": "Symbol of Conflict (Major)",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 740,
        "uuid": "Compendium.pf2e.spells-srd.Item.Summon Celestial",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Summon Celestial",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Summon Celestial",
          "sourceId": "lTDixrrNKaCvLKwX",
          "name": "Summon Celestial",
          "type": "spell"
        },
        "owner": {
          "sourceId": "C7FeT7eVuwRnLhJy",
          "name": "Symbol of Conflict (Major)",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 838,
        "uuid": "Compendium.pf2e.spells-srd.Item.Summon Fiend",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Summon Fiend",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Summon Fiend",
          "sourceId": "29ytKctjg7qSW2ff",
          "name": "Summon Fiend",
          "type": "spell"
        },
        "owner": {
          "sourceId": "C7FeT7eVuwRnLhJy",
          "name": "Symbol of Conflict (Major)",
          "type": "equipment"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:alloy-orb-exquisite-high-grade",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "ECjche2BfpWHZ3vU",
      "slug": "alloy-orb-exquisite-high-grade",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:4a705c1cfcf05c05188c3320dd7e0c83eb08831a4b2ef2d5be9a37cee3e65996",
    "translatableHash": "sha256:8ef0a4a219d6a75fe6618e8a4dd6140815bf0f894b977ba80fd0be9972937361",
    "data": {
      "schemaVersion": 1,
      "name": "Alloy Orb (Exquisite High-Grade)",
      "itemType": "consumable",
      "level": 18,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical",
        "talisman"
      ],
      "description": "Activate A (concentrate)\nAlthough solid, this orb of metal swirls with bright silver and dark iron colors, as if made of liquid. When you activate the alloy orb, select adamantine, cold iron, or dawnsilver. The affixed weapon functions as the chosen material for 1 minute, suppressing its original material. This orb works on weapons of any level.\nEffect: Alloy Orb (Exquisite High-Grade)",
      "bulk": 0.1,
      "price": {
        "gp": 4500
      },
      "usage": "affixed-to-a-metal-weapon",
      "category": "other",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 432,
        "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Alloy Orb (Exquisite High-Grade)",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Alloy Orb (Exquisite High-Grade)",
          "package": "pf2e",
          "sourcePack": "equipment-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Alloy Orb (Exquisite High-Grade)",
          "sourceId": "o6GSF420m6cdTkZo",
          "name": "Effect: Alloy Orb (Exquisite High-Grade)",
          "type": "effect"
        },
        "owner": {
          "sourceId": "ECjche2BfpWHZ3vU",
          "name": "Alloy Orb (Exquisite High-Grade)",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:storm-flash-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "i9mxfSIBTTOwsSlx",
      "slug": "storm-flash-greater",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/specific-magic-weapons/storm-flash.webp"
    },
    "sourceHash": "sha256:4bc11bce6cec7593519b924312dbe4191c04683913724e9fa45768fa3b0001c0",
    "translatableHash": "sha256:5e8ab0077b522385633f676905f39171995c2e7069e77b63a4848b158b27d1e3",
    "data": {
      "schemaVersion": 1,
      "name": "Storm Flash (Greater)",
      "itemType": "weapon",
      "level": 18,
      "rarity": "common",
      "traits": [
        "deadly-d8",
        "disarm",
        "electricity",
        "finesse",
        "magical"
      ],
      "description": "This +3 greater striking greater shock rapier has a golden blade, and miniature electric arcs flash across its guard while it's wielded. When out of its sheath under an open sky, the blade causes storm clouds to gather slowly above.\nActivate—Lightning Stab 2 (concentrate, manipulate)\nFrequency once per day\nEffect You cast a 8th-rank Lightning Bolt (DC 38).\nActivate—Divert Lightning R (concentrate)\nFrequency once per 10 minutes\nTrigger An electricity effect targets you or a creature within 10 feet of you, or has you or a creature within 10 feet of you in its area\nEffect You try to divert the electricity off course, to be absorbed by storm flash. Choose one eligible creature to protect and roll a melee attack roll against the DC of the electricity effect. If you succeed, the chosen creature takes no electricity damage from the triggering effect.",
      "bulk": 1,
      "price": {
        "gp": 21000
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
        "sourceIndex": 467,
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
          "sourceId": "i9mxfSIBTTOwsSlx",
          "name": "Storm Flash (Greater)",
          "type": "weapon"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:living-mantle-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "IdI7rfCk7WjGbJHN",
      "slug": "living-mantle-greater",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:4c1110c97c4fffe0481beeb0d0a166ac8d94c59c5021f39fa6143b591aab2000",
    "translatableHash": "sha256:2294be452a6f2a1146fc2674c5dc6181ac36d100da08d42a6febfefdf2acc528",
    "data": {
      "schemaVersion": 1,
      "name": "Living Mantle (Greater)",
      "itemType": "equipment",
      "level": 18,
      "rarity": "common",
      "traits": [
        "focused",
        "invested",
        "plant",
        "primal"
      ],
      "description": "The base of this cloak is a thick layer of moss, but it slowly picks up native plants from each area it spends time in. You gain a +3 item bonus to Nature checks. You also suffer no effects from extreme cold and severe heat.\nActivate—Druidic Secrets F (concentrate)\nFrequency once per day\nEffect You gain 1 Focus Point, which you can spend only to cast an order spell. If you don't spend this Focus Point by the end of this turn, it is lost.\nCraft Requirements You are a druid.",
      "bulk": 0.1,
      "price": {
        "gp": 21000
      },
      "usage": "worncloak",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:reflecting-shield",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "La9qYc5NHsg423Jb",
      "slug": "reflecting-shield",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/shields/specific-shields/reflecting-shield.webp"
    },
    "sourceHash": "sha256:94221a3b29b7b7ae58da1dedea91aace4aa983b535298248c6aa263161f7b155",
    "translatableHash": "sha256:51887cb64bedd54937f7f8f25f327eb6752781d3034da18e2712e2aec7ae967b",
    "data": {
      "schemaVersion": 1,
      "name": "Reflecting Shield",
      "itemType": "shield",
      "level": 18,
      "rarity": "uncommon",
      "traits": [
        "magical"
      ],
      "description": "This high-grade silver buckler (Hardness 6, HP 24, BT 12) is polished to a mirrorlike sheen. The shield functions as a Spellguard Shield that can also reflect spells.\nActivate—Reflect Spell R (concentrate)\nFrequency once per day\nTrigger You're targeted by a spell\nRequirements The reflecting shield is raised\nEffect You attempt to reflect the spell on its caster. The shield attempts to counteract the spell, with a counteract rank of 9th and a counteract modifier of [[/r 1d20+30 #Counteract]]. If the spell is successfully counteracted, it's turned back on its caster\nCraft Requirements The initial raw materials must include at least 2,750 gp of silver.",
      "bulk": 0.1,
      "price": {
        "gp": 18000
      },
      "usage": "",
      "category": "shield",
      "group": "buckler"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 122,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Spellguard Shield",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Spellguard Shield",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Spellguard Shield",
          "sourceId": "OqDAx4HJ39ojVtvg",
          "name": "Spellguard Shield",
          "type": "shield"
        },
        "owner": {
          "sourceId": "La9qYc5NHsg423Jb",
          "name": "Reflecting Shield",
          "type": "shield"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:brilliant-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "n8MonEa4ZBdvEovc",
      "slug": "brilliant-greater",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/runes/weapon-property-runes/weapon-property-runes.webp"
    },
    "sourceHash": "sha256:0d36c461dd5f6ef15d1c5b528ba4519d2e48684804ff2ffd2d59ba8c02c0fd98",
    "translatableHash": "sha256:5c01a900a3b2a8df33613596c5cd6cade897b64b334f7fd15b95135010a0e1cc",
    "data": {
      "schemaVersion": 1,
      "name": "Brilliant (Greater)",
      "itemType": "equipment",
      "level": 18,
      "rarity": "common",
      "traits": [
        "magical"
      ],
      "description": "This rune causes a weapon to transform into pure, brilliant energy. The weapon deals an additional 1d4 fire damage on a successful Strike, as well as 1d4 spirit damage to fiends and 1d4 vitality damage to undead.\nOn a critical hit, the target must succeed at a check (fortitude, dc:41) or be Blinded for 1 round.\nActivate—Shine Bright! 1 (concentrate, light)\nEffect You plunge your weapon into darkness to return the light. Attempt a counteract check with a counteract rank of 9 and a [[/r 1d20+31 #Counteract]] counteract modifier to end a magical darkness effect whose area is within reach of the weapon.\nDamage dealt by this weapon ignores the target's resistances to fire, spirit, and vitality.",
      "bulk": 0,
      "price": {
        "gp": 24000
      },
      "usage": "etched-onto-a-weapon",
      "category": "equipment",
      "group": "equipment"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 301,
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
          "sourceId": "n8MonEa4ZBdvEovc",
          "name": "Brilliant (Greater)",
          "type": "equipment"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:oil-of-unlife-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "obER4cKi8UbGhSg7",
      "slug": "oil-of-unlife-major",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/oils/oil-of-unlife.webp"
    },
    "sourceHash": "sha256:19cfd6a7d852a8f35e0635b650dd95787fa9424e1572acffd6c6eb26f103d363",
    "translatableHash": "sha256:33d721ba22e612302b7e9386466b4fe2cee5861ba265a9df16877854942eed8b",
    "data": {
      "schemaVersion": 1,
      "name": "Oil of Unlife (Major)",
      "itemType": "consumable",
      "level": 18,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "oil",
        "void"
      ],
      "description": "Activate 1 (manipulate)\nThis thin, black liquid imparts a bone-deep chill while rapidly repairing an undead creature's physical or spiritual form. When you dash oil of unlife onto an undead creature, or a living creature with void healing, the oil absorbs quickly into its body, and the creature regains (8d8+30)[healing]. You can pour oil of unlife on an incorporeal undead; in this case, the creature absorbs the oil into itself.",
      "bulk": 0.1,
      "price": {
        "gp": 5000
      },
      "usage": "held-in-one-hand",
      "category": "oil",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:healing-potion-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "p3ppzFSsZXFRe3H8",
      "slug": "healing-potion-major",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:8b2734229fa273772fe5a8c802203c08eefcb0bec60bf66fda541a8f294c0dc0",
    "translatableHash": "sha256:2da87ccd4601dff6cc7dd26950967830d99ee83b6e5de20791788c7444eb0a2b",
    "data": {
      "schemaVersion": 1,
      "name": "Healing Potion (Major)",
      "itemType": "consumable",
      "level": 18,
      "rarity": "common",
      "traits": [
        "consumable",
        "healing",
        "magical",
        "potion",
        "vitality"
      ],
      "description": "Activate A (manipulate)\nA healing potion is a vial of a ruby-red liquid that imparts a tingling sensation as the drinker's wounds heal rapidly. When you drink a healing potion, you regain (8d8+30)[healing] Hit Points.",
      "bulk": 0.1,
      "price": {
        "gp": 5000
      },
      "usage": "held-in-one-hand",
      "category": "potion",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:genius-diadem",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "QZaOQ8luuxWXpFqJ",
      "slug": "genius-diadem",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:a0acafdb7ec30dd50314e92267a98a2df2f74b166fa1215e2773113e280bda38",
    "translatableHash": "sha256:3a48b7e633e878206dfc754cbcb6cc84bd7fc35efd52416792f68feebd4d0b54",
    "data": {
      "schemaVersion": 1,
      "name": "Genius Diadem",
      "itemType": "equipment",
      "level": 18,
      "rarity": "rare",
      "traits": [
        "apex",
        "arcane",
        "intelligent"
      ],
      "description": "Perception +22; precise vision 30 feet, imprecise hearing 30 feet, constant detect magic\nCommunication speech (Common, Draconic, and eight other common languages)\nSkills Arcana +34, seven Lore skills +28, Occultism +28, Society +28\nInt +8, Wis +0, Cha +4\nWill +24\nThe genius diadem is a Crown of Intellect that typically acts like an arrogant professor or mentor, often boasting that it is a certified greater intellect and far superior to your own intelligence, even after the benefits the diadem grants you. The genius diadem encourages you to learn things for yourself rather than actually attempting to Recall Knowledge for you, though you or your allies might be able to play on its arrogance using Deception to trick it into doing so. In addition to allowing you to activate it, the diadem can use the Search Your Mind activation with its own actions, though if it does so, the diadem gains the benefits instead of you. Only the diadem can use the following activation.\nActivate—Brain Drain 2 (concentrate, manipulate)\nFrequency once per hour\nEffect The genius diadem casts 7th-rank Never Mind.",
      "bulk": 0.1,
      "price": {
        "gp": 24000
      },
      "usage": "worncirclet",
      "category": "equipment",
      "group": "equipment"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 473,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Crown of Intellect",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Crown of Intellect",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Crown of Intellect",
          "sourceId": "1FKDq4Gfev5GObDT",
          "name": "Crown of Intellect",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "QZaOQ8luuxWXpFqJ",
          "name": "Genius Diadem",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1453,
        "uuid": "Compendium.pf2e.spells-srd.Item.Never Mind",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Never Mind",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Never Mind",
          "sourceId": "5BbU1V6wGSGbrmRD",
          "name": "Never Mind",
          "type": "spell"
        },
        "owner": {
          "sourceId": "QZaOQ8luuxWXpFqJ",
          "name": "Genius Diadem",
          "type": "equipment"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:maestros-instrument-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "rlDIbl6EQYXQpWVs",
      "slug": "maestros-instrument-greater",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/held-items/maestros-instrument.webp"
    },
    "sourceHash": "sha256:543776d7db75d8e6e1ea06c0abd26cb63e293dca83934dd242a7748977296591",
    "translatableHash": "sha256:4c2026755a2dfdab837d4732cde583b7f156d7c6be2d9c23ff36a4ac3f4308ca",
    "data": {
      "schemaVersion": 1,
      "name": "Maestro's Instrument (Greater)",
      "itemType": "equipment",
      "level": 18,
      "rarity": "common",
      "traits": [
        "magical"
      ],
      "description": "A maestro's instrument can be crafted in the form of any variety of handheld musical instruments. A maestro's instrument grants you a +3 item bonus to Performance checks while playing music with the instrument.\nActivate—Charming Performance 2 (manipulate)\nFrequency once per day\nEffect You play the instrument, causing it to cast a 8th-rank Charm spell with DC 38.\nCraft Requirements You must supply a casting of charm of the appropriate rank.",
      "bulk": 1,
      "price": {
        "gp": 19000
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
          "sourceId": "rlDIbl6EQYXQpWVs",
          "name": "Maestro's Instrument (Greater)",
          "type": "equipment"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:obsidian-goggles-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "rXXNw6dwVn96giDi",
      "slug": "obsidian-goggles-major",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:3d978cc8c90ff6365ff33d4a5ed60d220c6745e67eb1e0749e4ac078a9c3cc9e",
    "translatableHash": "sha256:0f0aae3db5552c384eb43b2dc402c18e3659476b9f2e1ef808312f924731531a",
    "data": {
      "schemaVersion": 1,
      "name": "Obsidian Goggles (Major)",
      "itemType": "equipment",
      "level": 18,
      "rarity": "common",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "The sleek, black lenses of these goggles somehow make everything seem more brightly lit. While wearing the goggles, you gain a +3 item bonus to Perception checks involving sight.\nActivate—Darkvision 1 (manipulate)\nFrequency any number of times per day\nEffect Adjusting your goggles, you gain greater darkvision until you deactivate it as an Interact action or the item is no longer invested by you, whichever comes first.",
      "bulk": 0,
      "price": {
        "gp": 20000
      },
      "usage": "worneyepiece",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:indestructible-shield",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "SUbYk6B1iPoGyyjh",
      "slug": "indestructible-shield",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/shields/specific-shields/indestructible-shield.webp"
    },
    "sourceHash": "sha256:af5d4ea539bad3d1aec3df2e5ca1b684e9b47555b017e16053b956c725731423",
    "translatableHash": "sha256:e87045040b81ab6b5793ccb585b05a02d430dfd720781c4f4150e73b9e525e91",
    "data": {
      "schemaVersion": 1,
      "name": "Indestructible Shield",
      "itemType": "shield",
      "level": 18,
      "rarity": "rare",
      "traits": [
        "magical"
      ],
      "description": "An indestructible shield is a high-grade greater reinforcing adamantine shield (Hardness 17, HP 136) that can withstand just about any damage. It can be damaged only by a Disintegrate spell (roll damage as if against a creature that failed its save) or by an artifact tied to destruction.\nCraft Requirements The raw materials must include at least 4,400 gp of adamantine.",
      "bulk": 1,
      "price": {
        "gp": 24000
      },
      "usage": "",
      "category": "shield",
      "group": "steel-shield"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 192,
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
          "sourceId": "SUbYk6B1iPoGyyjh",
          "name": "Indestructible Shield",
          "type": "shield"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:potion-of-undetectability",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "UblsH5cGyUdXypek",
      "slug": "potion-of-undetectability",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/potions/potion-of-undetectability.webp"
    },
    "sourceHash": "sha256:8758b697be849b439edb58483de23dcd59aaa7d7e9b369164c883c7fdf046e7d",
    "translatableHash": "sha256:c52a5e8edfb7cdfa2fb8fcdfa365ba5627161a3bcff07fe0a3a62996297713fa",
    "data": {
      "schemaVersion": 1,
      "name": "Potion of Undetectability",
      "itemType": "consumable",
      "level": 18,
      "rarity": "common",
      "traits": [
        "consumable",
        "illusion",
        "magical",
        "potion"
      ],
      "description": "Activate A (manipulate)\nDrinking this dull-black liquid makes you undetectable to detection effects.\nThis grants the same effects as Hidden Mind but without the bonus against mental effects. You also gain the effects of a 4th-rank Invisibility spell, which protects against See the Unseen spells of 8th rank and lower and has a DC of 36 against Truesight.\nThe potion's effects last for 10 minutes.",
      "bulk": 0.1,
      "price": {
        "gp": 4400
      },
      "usage": "held-in-one-hand",
      "category": "potion",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 208,
        "uuid": "Compendium.pf2e.spells-srd.Item.Hidden Mind",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Hidden Mind",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Hidden Mind",
          "sourceId": "C2w3YfBKjIRS07DP",
          "name": "Hidden Mind",
          "type": "spell"
        },
        "owner": {
          "sourceId": "UblsH5cGyUdXypek",
          "name": "Potion of Undetectability",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 345,
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
          "sourceId": "UblsH5cGyUdXypek",
          "name": "Potion of Undetectability",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 427,
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
          "sourceId": "UblsH5cGyUdXypek",
          "name": "Potion of Undetectability",
          "type": "consumable"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 537,
        "uuid": "Compendium.pf2e.spells-srd.Item.Truesight",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Truesight",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Truesight",
          "sourceId": "uqlxMQQeSGWEVjki",
          "name": "Truesight",
          "type": "spell"
        },
        "owner": {
          "sourceId": "UblsH5cGyUdXypek",
          "name": "Potion of Undetectability",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:fortification-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "ujWnpVMkbTljMGN9",
      "slug": "fortification-greater",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/runes/armor-property-runes/armor-property-runes.webp"
    },
    "sourceHash": "sha256:79f6b5729d852f646c6b2aea183620446b1e42222481b17c976f76d97c1be455",
    "translatableHash": "sha256:e331a1ac510668d69edbe3a9adb239fd40422c89afe0fc450c8cb388ba2c4bfb",
    "data": {
      "schemaVersion": 1,
      "name": "Fortification (Greater)",
      "itemType": "equipment",
      "level": 18,
      "rarity": "common",
      "traits": [
        "magical"
      ],
      "description": "A greater fortification rune wards against the most deadly attacks. Each time you're critically hit while wearing the etched armor, attempt a check (flat, dc:14, showDC:all). On a success, it becomes a normal hit. This property thickens the armor, increasing its Bulk by 1 and the Strength required to reduce its penalties by 1.",
      "bulk": 0,
      "price": {
        "gp": 24000
      },
      "usage": "etched-onto-med-heavy-armor",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:inexplicable-apparatus",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "V9iVPhIk980GT6A2",
      "slug": "inexplicable-apparatus",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:b953c3d736a8f4f3433c0e4e9652abc5d2cdcadb7d9d08b9f0f1f01f2f32d69a",
    "translatableHash": "sha256:82caa788e6ad945a50b12007a2a93d8e41579404458a7715992b0b596b280efe",
    "data": {
      "schemaVersion": 1,
      "name": "Inexplicable Apparatus",
      "itemType": "equipment",
      "level": 18,
      "rarity": "common",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "This strange and intricate harness fits snugly to the torso. Once you invest the apparatus, numerous artificial limbs with various tools, clamps, and lenses whirl into action, following your mental commands effortlessly.\nWhen using this apparatus, you gain a +3 item bonus to Crafting checks to Craft, Earn Income, and Repair, and you reduce the minimum time required to Craft an item to 1 day.\nIf you succeed at your Crafting check and spend more downtime to continue work on the item after the minimum number of days, each day you spend reduces the remaining raw material cost by an amount based on your level + 1 and your proficiency rank in Crafting; on a critical success, each day reduces the remaining raw material cost by an amount based on your level + 2 and your proficiency rank. If you are 20th level, on a critical success your progress is 50 gp, 100 gp, 200 gp, or 350 gp for trained, expert, master, or legendary proficiency, respectively.\nActivate—Inexplicable Patch 2 (concentrate, manipulate)\nFrequency once per day\nEffect You command the apparatus to magically jury-rig an item you hold or that's within 5 feet of you. The item is repaired, as a 3rd-rank Mending spell. This lasts for 10 minutes, after which the item returns to its previous state of disrepair unless you've Repaired it before then.",
      "bulk": 2,
      "price": {
        "gp": 19000
      },
      "usage": "worngarment",
      "category": "equipment",
      "group": "equipment"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1304,
        "uuid": "Compendium.pf2e.spells-srd.Item.Mending",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Mending",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Mending",
          "sourceId": "dINQzhqGmIsqGMUY",
          "name": "Mending",
          "type": "spell"
        },
        "owner": {
          "sourceId": "V9iVPhIk980GT6A2",
          "name": "Inexplicable Apparatus",
          "type": "equipment"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:thurible-of-revelation-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "VBCk7JXGsuG0cug1",
      "slug": "thurible-of-revelation-greater",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/held-items/thurible-of-revelation.webp"
    },
    "sourceHash": "sha256:c40572620c2dd9de26c61f83dc3266291dc071fa311966f501e524ca9f27882d",
    "translatableHash": "sha256:4c793c5ea09a8796628583489efdc23b1c7dce6db818d298039fc9cc8323c116",
    "data": {
      "schemaVersion": 1,
      "name": "Thurible of Revelation (Greater)",
      "itemType": "equipment",
      "level": 18,
      "rarity": "common",
      "traits": [
        "divine"
      ],
      "description": "This brass censer dangles on a length of chain. Most thuribles of revelation are adorned with swirling Empyrean text, though some are iron and feature Diabolic or Chthonian text.\nActivate—Burn Incense 2 (manipulate)\nCost incense worth at least 5 gp\nEffect You light the incense inside the censer, and it burns for 1 hour. During that time, as long you are holding the thurible, you gain a +3 item bonus to Religion checks, and any critical failure you roll when you Decipher Writing of a religious nature is a failure instead.\nOnce per day, when you activate the thurible, you can increase its revelations. During that activation, you can hold the thurible up to your eyes with an Interact action to gain the effects of See the Unseen and Truesight for 1 round by peering through the smoke.\nEffect: Thurible of Revelation",
      "bulk": 1,
      "price": {
        "gp": 19000
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
          "sourceId": "VBCk7JXGsuG0cug1",
          "name": "Thurible of Revelation (Greater)",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 908,
        "uuid": "Compendium.pf2e.spells-srd.Item.Truesight",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Truesight",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Truesight",
          "sourceId": "uqlxMQQeSGWEVjki",
          "name": "Truesight",
          "type": "spell"
        },
        "owner": {
          "sourceId": "VBCk7JXGsuG0cug1",
          "name": "Thurible of Revelation (Greater)",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1006,
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
          "sourceId": "VBCk7JXGsuG0cug1",
          "name": "Thurible of Revelation (Greater)",
          "type": "equipment"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:possibility-tome",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "vZaXDOrp5Faxw5fS",
      "slug": "possibility-tome",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/held-items/possibility-tome.webp"
    },
    "sourceHash": "sha256:55393ef0a4e76ee9e0573ad50ea0653fbfeba2727d0880de67987abec899b21b",
    "translatableHash": "sha256:16ebf67f76df5bcaa13d0f87b6d3dfb6dae5a30816b11c64a804d4272ea1b557",
    "data": {
      "schemaVersion": 1,
      "name": "Possibility Tome",
      "itemType": "equipment",
      "level": 18,
      "rarity": "common",
      "traits": [
        "magical"
      ],
      "description": "An array of semiprecious stones is set into the ornate silver and beaten copper cover of this thick and weighty tome. If you open the book before it's been activated, its vellum pages are blank and pristine, but once activated, words dance and swim onto the pages before your eyes.\nActivate—Skim 10 minutes (concentrate, manipulate)\nEffect As you flip through the book, you think about a broad topic you want to know more about.\nChoose one skill: Arcana, Crafting, Medicine, Nature, Occultism, Religion, Society, or a single subcategory of Lore. The book's pages fill with information about that skill, though only you can see the information.\nWhile the pages are full, you can spend an Interact action perusing the book just before attempting a check to Recall Knowledge with the chosen skill. This grants you a +3 item bonus to the check, and if you roll a critical failure, you get a failure instead.\nThe information within the book disappears after 24 hours or when the tome is activated again.",
      "bulk": 2,
      "price": {
        "gp": 22000
      },
      "usage": "held-in-two-hands",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:marvelous-medicines-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "wYpWQCD2IYqDtqpc",
      "slug": "marvelous-medicines-greater",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:ec5b44f8d38e7c9c0773b56b740415b7d0d2909cf965c47646db225d256163ff",
    "translatableHash": "sha256:dda580c41846a93c8a950989a6813db8a1f7b64650359637b105f043b6ef2d43",
    "data": {
      "schemaVersion": 1,
      "name": "Marvelous Medicines (Greater)",
      "itemType": "equipment",
      "level": 18,
      "rarity": "common",
      "traits": [
        "magical"
      ],
      "description": "This healer's toolkit contains a seemingly endless supply of bandages, herbs, and healing items of impeccable quality, granting you a +3 item bonus to Medicine checks.\nIf you use the marvelous medicines when you Treat Poison or Treat Disease, before you roll your check, the medicines attempt to counteract the poison or disease you're treating, with a counteract rank of 8 and a counteract modifier of [[/r 1d20+30 #Counteract]]. This is a healing effect.\nThe medicines can't be used to treat the same affliction for that patient again",
      "bulk": 1,
      "price": {
        "gp": 19000
      },
      "usage": "held-in-two-hands",
      "category": "equipment",
      "group": "equipment"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 231,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Treat Poison",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Treat Poison",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Treat Poison",
          "sourceId": "KjoCEEmPGTeFE4hh",
          "name": "Treat Poison",
          "type": "action"
        },
        "owner": {
          "sourceId": "wYpWQCD2IYqDtqpc",
          "name": "Marvelous Medicines (Greater)",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 287,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Treat Disease",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Treat Disease",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Treat Disease",
          "sourceId": "TC7OcDa7JlWbqMaN",
          "name": "Treat Disease",
          "type": "action"
        },
        "owner": {
          "sourceId": "wYpWQCD2IYqDtqpc",
          "name": "Marvelous Medicines (Greater)",
          "type": "equipment"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:reinforcing-rune-supreme",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "0iPTcAgtbtMj6Lwn",
      "slug": "reinforcing-rune-supreme",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:b022bd80492d177f795566a85adb5941cc1a366615744ad7c65f299cc2cdba68",
    "translatableHash": "sha256:7b8440a1c2a1cdae0df4dda9ed62af6739c556ada33dd360c6b8ff5097761c55",
    "data": {
      "schemaVersion": 1,
      "name": "Reinforcing Rune (Supreme)",
      "itemType": "equipment",
      "level": 19,
      "rarity": "common",
      "traits": [
        "magical"
      ],
      "description": "Reinforcing runes make a shield significantly more durable, allowing it to effectively block more powerful attacks.\nThe shield's Hardness increases by 7, it gains an additional 108 Hit Points, and its BT increases by 54 (maximum 20 Hardness, 160 HP, and 80 BT).",
      "bulk": 0,
      "price": {
        "gp": 32000
      },
      "usage": "etched-onto-a-shield",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:third-eye",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "7MTjAlCVVLsNFo7w",
      "slug": "third-eye",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/other-worn-items/third-eye.webp"
    },
    "sourceHash": "sha256:21bb4a3a51990f0ef44d477c9d273c8a0c99ea19a17fe01c45a9113ed8cec33d",
    "translatableHash": "sha256:0b0cba1b63a4142e21df87bb6cdd89ff72fa893b7b876c1cf2c43ca4cf6b1297",
    "data": {
      "schemaVersion": 1,
      "name": "Third Eye",
      "itemType": "equipment",
      "level": 19,
      "rarity": "common",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "When invested, this ornate crown and its incandescent gemstone meld into your head and take the form of a tattoo. This grants you otherworldly sight and allows you to read auras. No one but you can manipulate the third eye while it's invested by you. Your heightened senses and ability to sense emotional auras grant you a +3 item bonus to Perception checks.\nYou continuously see magic auras, as a 9th-rank Detect Magic spell, except you see the location of all auras within 30 feet, not just the strongest. If you use a Seek action to study a creature you can see, you can perceive an aura that conveys knowledge of that creature's health, including all conditions and afflictions it has and an approximate percentage of its remaining Hit Points.\nActivate—Truesight 2 (concentrate)\nFrequency once per day\nEffect You gain the effects of an 8th-rank Truesight spell.",
      "bulk": 0,
      "price": {
        "gp": 40000
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 426,
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
          "sourceId": "7MTjAlCVVLsNFo7w",
          "name": "Third Eye",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1020,
        "uuid": "Compendium.pf2e.spells-srd.Item.Truesight",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Truesight",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Truesight",
          "sourceId": "uqlxMQQeSGWEVjki",
          "name": "Truesight",
          "type": "spell"
        },
        "owner": {
          "sourceId": "7MTjAlCVVLsNFo7w",
          "name": "Third Eye",
          "type": "equipment"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:sturdy-shield-supreme",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "7Z8XXGiUiyyisKOD",
      "slug": "sturdy-shield-supreme",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/shields/specific-shields/sturdy-shield.webp"
    },
    "sourceHash": "sha256:ee501ad7715e2c6e88d464569c895ed79120a41543310264167175e88dacb1d0",
    "translatableHash": "sha256:2dea65a0c2ed4e84e94b4dd8e02341bf1d893212d9c17c5c4f6e0ce9404297cb",
    "data": {
      "schemaVersion": 1,
      "name": "Sturdy Shield (Supreme)",
      "itemType": "shield",
      "level": 19,
      "rarity": "common",
      "traits": [
        "magical"
      ],
      "description": "With a superior design and excellent craftsmanship, this steel shield has higher Hardness than its non-magical counterparts, making it harder to break and destroy.\nThe shield has Hardness 20, HP 160, and BT 80.",
      "bulk": 1,
      "price": {
        "gp": 40000
      },
      "usage": "",
      "category": "shield",
      "group": "steel-shield"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:spellstrike-ammunition-type-ix",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "aAGjV3wkopQ44VX3",
      "slug": "spellstrike-ammunition-type-ix",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/ammunition/spellstrike-ammunition.webp"
    },
    "sourceHash": "sha256:2a9c225d5cea63f620a2921ba647d259cb8787aeffe39bd939053b3da896eccb",
    "translatableHash": "sha256:a4f44f132fdfaa2974d9eb151955a33bcd0fff6d1f888c94e7ed3076a78e6033",
    "data": {
      "schemaVersion": 1,
      "name": "Spellstrike Ammunition (Type IX)",
      "itemType": "ammunition",
      "level": 19,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical"
      ],
      "description": "Ammunition any\nActivate 2 Cast a Spell\nMystic patterns create a magic reservoir within this ammunition. You activate spellstrike ammunition by Casting a Spell into the ammunition. The spell must be of a spell rank the ammunition can hold, and the spell must be able to target a creature other than the caster. A creature hit by activated spellstrike ammunition is targeted by the spell. If the creature isn't a valid target for the spell, the spell is lost.\nThe ammunition affects only the target hit, even if the spell would normally affect more than one target. If the spell requires a spell attack roll, use the result of your ranged attack roll with the ammunition to determine the degree of success of the spell. If the spell requires a saving throw, the target attempts the save against your spell DC. Combine the Strike and spell's damage for the purpose of resistances and weaknesses.\nThe maximum rank of spell the ammunition can hold determines its item level and Price.\nMaximum Spell Rank 10th",
      "bulk": 0,
      "price": {
        "gp": 8000
      },
      "usage": "",
      "category": "ammo",
      "group": "ammo"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:oil-of-potency-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "B9NVsgy2jvd6sJID",
      "slug": "oil-of-potency-major",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/oils/oil-of-potency.webp"
    },
    "sourceHash": "sha256:b71bd5cf4699287b209283757c1501f533e4adc4bb2ac9f03c99e232dceaa3e4",
    "translatableHash": "sha256:8251d204188ce99e898ad16038db657d62ce4ffbe9a80f84b2066ff2f6b38cec",
    "data": {
      "schemaVersion": 1,
      "name": "Oil of Potency (Major)",
      "itemType": "consumable",
      "level": 19,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "oil"
      ],
      "description": "Activate 1 (manipulate)\nWhen you apply this thick, viscous oil to a weapon or suit of armor, that item immediately becomes magically potent. If the item is a weapon, it temporarily becomes a +3 major striking weapon, or, if it's armor, it temporarily becomes +3 major resilient armor. This lasts for 1 minute.\nEffect: Oil of Potency",
      "bulk": 0.1,
      "price": {
        "gp": 8000
      },
      "usage": "held-in-two-hands",
      "category": "oil",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 401,
        "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Oil of Potency",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Oil of Potency",
          "package": "pf2e",
          "sourcePack": "equipment-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Oil of Potency",
          "sourceId": "1OLlwExJz7ii2Lu2",
          "name": "Effect: Oil of Potency",
          "type": "effect"
        },
        "owner": {
          "sourceId": "B9NVsgy2jvd6sJID",
          "name": "Oil of Potency (Major)",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:lions-armor-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "dmEmxoEVzOeEkscr",
      "slug": "lions-armor-greater",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:afad62fcaa42341ca1a5763484671d18e278775d57fef522339d1714e9dfc892",
    "translatableHash": "sha256:76af8da9b274d7f91905867d068d0af112886f3d4b05b530529cb387e9f03c1f",
    "data": {
      "schemaVersion": 1,
      "name": "Lion's Armor (Greater)",
      "itemType": "armor",
      "level": 19,
      "rarity": "common",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "Various parts of this +3 greater resilient half plate are forged into the shape of a lion's head. The golden lion heads grant you a commanding presence and seem to actively growl at your enemies, granting you a +3 item bonus to Intimidation.\nThe lions on the armor work in tandem with the lion on a lion's shield. If you critically hit with the lion's shield using Lion Bite, the lions on the armor roar in support of the shield, causing the target of the shield's Strike to become Frightened 1.\nActivate—Roar of the Pride 2 (concentrate)\nFrequency once per hour\nEffect The lions on your armor roar, attempting to cow your enemies. Attempt a check to Demoralize each enemy within 30 feet of you. On a critical success, the target is also Fleeing for 1 round.",
      "bulk": 0,
      "price": {
        "gp": 30500
      },
      "usage": "",
      "category": "heavy",
      "group": "plate",
      "armor": {
        "armorClassBonus": 5,
        "dexterityCap": 1,
        "checkPenalty": -3,
        "speedPenaltyFeet": -10
      }
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
          "sourceId": "dmEmxoEVzOeEkscr",
          "name": "Lion's Armor (Greater)",
          "type": "armor"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 856,
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
          "sourceId": "dmEmxoEVzOeEkscr",
          "name": "Lion's Armor (Greater)",
          "type": "armor"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 983,
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
          "sourceId": "dmEmxoEVzOeEkscr",
          "name": "Lion's Armor (Greater)",
          "type": "armor"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:magic-wand-9th-rank-spell",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Fgv722039TVM5JTc",
      "slug": "magic-wand-9th-rank-spell",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/wands/magic-wands/magic-wand.webp"
    },
    "sourceHash": "sha256:f0c6f1addecf20515c5b424677fe255ed43ceb9ec797195f8f1ef0b7c0baed89",
    "translatableHash": "sha256:475876b6d2d140c7492c4341bf5072986b75bac6e60fdef7734782c98d055540",
    "data": {
      "schemaVersion": 1,
      "name": "Magic Wand (9th-Rank Spell)",
      "itemType": "consumable",
      "level": 19,
      "rarity": "common",
      "traits": [
        "magical",
        "wand"
      ],
      "description": "This baton is about a foot long and contains a single spell. The appearance typically relates to the spell within.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You Cast the Spell at the indicated rank.\nCraft Requirements Supply a casting of the spell at the listed rank.\nNote: To create a scroll or wand of a specific spell, drag the spell from the compendium or compendium browser into the inventory of a PC, NPC, or loot actor.",
      "bulk": 0.1,
      "price": {
        "gp": 40000
      },
      "usage": "held-in-one-hand",
      "category": "wand",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-continuation-8th-rank-spell",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "KMqHzKfpPq5H8GOo",
      "slug": "wand-of-continuation-8th-rank-spell",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/wands/specialty-wands/wand-of-continuation.webp"
    },
    "sourceHash": "sha256:a5dae7d0c94c0f6bfc021a678d93a2d347511f9c67f202bd05887eff82e153ba",
    "translatableHash": "sha256:e90db81d17b0703b46019f551b540defa44e611bcb3ef70c6f3b9010628f1445",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Continuation (8th-Rank Spell)",
      "itemType": "equipment",
      "level": 19,
      "rarity": "common",
      "traits": [
        "magical",
        "wand"
      ],
      "description": "This wand increases a spell's duration. Yellow embers spiral over its surface until the spell ends.\nActivate Cast a Spell; The activation takes 2 if the spell normally takes 1 to cast, or 3 if the spell normally takes 2\nFrequency Once per day, plus overcharge\nEffect You Cast the Spell, and its duration is increased by half.\nCraft Requirements Supply a casting of a spell of the appropriate rank. The spell must have a casting time of 1 or 2 and a duration no less than 10 minutes and no greater than 1 hour.",
      "bulk": 0.1,
      "price": {
        "gp": 40000
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:scroll-of-10th-rank-spell",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "o1XIHJ4MJyroAHfF",
      "slug": "scroll-of-10th-rank-spell",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:51700ea309ba06a34cbd579ffe08038a8a77d555fae34a926ea971d4b79d0d7d",
    "translatableHash": "sha256:d3832517a4ef87cd01ec6a12fd7d7fe55a01966391bb9696917b9ef5ec4de752",
    "data": {
      "schemaVersion": 1,
      "name": "Scroll of 10th-rank Spell",
      "itemType": "consumable",
      "level": 19,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "scroll"
      ],
      "description": "Casting a Spell from a scroll requires holding the scroll in one hand and activating it with a Cast a Spell activity using the normal number of actions for that spell.\nThe spell must appear on your spell list. Because you're the one Casting the Spell, use your spell attack modifier and spell DC. The spell also gains the appropriate trait for your tradition (arcane, divine, occult, or primal).\nAny physical costs are provided when a scroll is created, so you don't need to provide them when casting from a scroll. If the spell requires a locus, you must have that locus to Cast the Spell from a scroll.\nNote: To create a scroll or wand of a specific spell, drag the spell from the compendium or compendium browser into the inventory of a PC, NPC, or loot actor.",
      "bulk": 0.1,
      "price": {
        "gp": 8000
      },
      "usage": "held-in-one-hand",
      "category": "scroll",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:elixir-of-life-true",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "qK964kZz1ALcysOa",
      "slug": "elixir-of-life-true",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-elixirs/elixir-of-life.webp"
    },
    "sourceHash": "sha256:d5ee6cc8833fc672006c57f23aa74ca2175205fa1a5c8699dd19a7e77e4c6f7a",
    "translatableHash": "sha256:25e8f68ff6db3bb12357f6d5ff0d3da19011eb6bb96161589d5a210744bf4b85",
    "data": {
      "schemaVersion": 1,
      "name": "Elixir of Life (True)",
      "itemType": "consumable",
      "level": 19,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "elixir",
        "healing"
      ],
      "description": "Activate A (manipulate)\nElixirs of life accelerate a living creature's natural healing processes and immune system. Upon drinking this elixir, you regain (10d6+27)[healing] Hit Points and gain +4 item bonus to saving throws against diseases and poisons for 10 minutes.\nEffect: Elixir of Life",
      "bulk": 0.1,
      "price": {
        "gp": 8000
      },
      "usage": "held-in-one-hand",
      "category": "elixir",
      "group": "consumable"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 351,
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
          "sourceId": "qK964kZz1ALcysOa",
          "name": "Elixir of Life (True)",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:frozen-lava-of-barrowsiege",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "ugxI9kH7osJ3J5qG",
      "slug": "frozen-lava-of-barrowsiege",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:90ec4a78f6158582925c01ab6da09609e839bfe949a3ba0917ba4e1f60c468a7",
    "translatableHash": "sha256:31dabdc71e819b28b822c66edd0c6873d1fe20187c412ce3a95f25967091f34a",
    "data": {
      "schemaVersion": 1,
      "name": "Frozen Lava of Barrowsiege",
      "itemType": "consumable",
      "level": 19,
      "rarity": "common",
      "traits": [
        "consumable",
        "fire",
        "magical"
      ],
      "description": "Activate A (manipulate)\nThis blueberry-sized bead appears to be a sphere of glass with a flickering light at its core. In truth, the \"glass\" is a bubble of solidified time magic, containing suspended lava at the exact point before a volcanic eruption. When activated, it becomes a tiny beacon of bright light before unleashing its power. After you Activate frozen lava, it quickly heats up. If you or anyone else hurls it (an Interact action), it detonates as a Fireball where it lands. Your toss can place the center of the fireball anywhere within 70 feet, though at the GM's discretion, you might need to make an attack roll if the throw is unusually challenging. If no one hurls the bead by the start of your next turn, it pops like an ostentatious but harmless firework.\nFrozen lava comes in many varieties, made of lava taken from notable volcanoes on Golarion and across the planes.\nFrozen lava of Barrowsiege deals 19d6 fire damage on a check (reflex, dc:43, basic, options:area-effect).",
      "bulk": 0,
      "price": {
        "gp": 8000
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
          "sourceId": "ugxI9kH7osJ3J5qG",
          "name": "Frozen Lava of Barrowsiege",
          "type": "consumable"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:crystal-ball-obsidian",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "WKdI4LbwgcNHhMdp",
      "slug": "crystal-ball-obsidian",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/held-items/crystal-ball-obsidian.webp"
    },
    "sourceHash": "sha256:7dec6da219550540619229252e5f5bb063d92478abe11d9f93e6fa68a5cf07ff",
    "translatableHash": "sha256:caee4d5db3892140378f4c1167569ab5cd9f528b7016f4f438966a4b570404c0",
    "data": {
      "schemaVersion": 1,
      "name": "Crystal Ball (Obsidian)",
      "itemType": "equipment",
      "level": 19,
      "rarity": "uncommon",
      "traits": [
        "magical",
        "scrying"
      ],
      "description": "This polished crystal sphere enhances scrying magic. Any visual information received through a spell with the scrying trait that was cast by the crystal ball appears within the sphere, and any auditory information sounds out from the surface of the sphere. When you cast a spell with the scrying trait by any other means while holding the sphere, you can relay any information you receive in the same way, allowing others to see or hear the target.\nActivate—Clairvoyance 1 minute (concentrate, manipulate)\nFrequency once per hour\nEffect The crystal ball casts Clairvoyance to your specifications.\nActivate—Scrying 10 minutes (concentrate, manipulate)\nFrequency twice per day\nEffect The crystal ball casts a check (will, dc:41, name:Scrying) Scrying spell to your specifications, with the benefits of Truesight for anything you watch through it.",
      "bulk": 0.1,
      "price": {
        "gp": 32000
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 667,
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
          "sourceId": "WKdI4LbwgcNHhMdp",
          "name": "Crystal Ball (Obsidian)",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 980,
        "uuid": "Compendium.pf2e.spells-srd.Item.Scrying",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Scrying",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Scrying",
          "sourceId": "r784cIz17eWujtQj",
          "name": "Scrying",
          "type": "spell"
        },
        "owner": {
          "sourceId": "WKdI4LbwgcNHhMdp",
          "name": "Crystal Ball (Obsidian)",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1078,
        "uuid": "Compendium.pf2e.spells-srd.Item.Truesight",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Truesight",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Truesight",
          "sourceId": "uqlxMQQeSGWEVjki",
          "name": "Truesight",
          "type": "spell"
        },
        "owner": {
          "sourceId": "WKdI4LbwgcNHhMdp",
          "name": "Crystal Ball (Obsidian)",
          "type": "equipment"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:striking-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "woxl2FrrgAcJDu0t",
      "slug": "striking-major",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/runes/fundamental-weapon-runes/striking.webp"
    },
    "sourceHash": "sha256:c8c8a7cdd7fa5322e8618ed42a16cf70082cdd155e1386783dac5ebc6e423a07",
    "translatableHash": "sha256:cf3e3c987063047dfaa9df8b751ea8ca78845ae73702c23ad44b130d67933e4a",
    "data": {
      "schemaVersion": 1,
      "name": "Striking (Major)",
      "itemType": "equipment",
      "level": 19,
      "rarity": "common",
      "traits": [
        "magical"
      ],
      "description": "A striking rune stores destructive magic in the weapon, increasing the weapon damage dice it deals to two instead of one. For instance, a +1 striking dagger would deal 2d4 damage instead of 1d4 damage.\nYou can upgrade the striking rune already etched on a weapon to a stronger version, increasing the values of the existing rune to those of the new rune. You must have the formula of the stronger rune to do so, and the Price of the upgrade is the difference between the two runes' Prices.\nThe weapon deals four weapon damage dice.",
      "bulk": 0,
      "price": {
        "gp": 31065
      },
      "usage": "etched-onto-a-weapon",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:winged-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Ztb4xv4UGZbF32TE",
      "slug": "winged-greater",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/runes/armor-property-runes/armor-property-runes.webp"
    },
    "sourceHash": "sha256:b2e72c9bbf0115ce66d80e2afd59a228bc261ea8dc38bc9a19bc6c60b0a5f161",
    "translatableHash": "sha256:78cd523fd75cd6d66f49d4ced1431f8f1ff73f297684792d796cefdbf27d0fd8",
    "data": {
      "schemaVersion": 1,
      "name": "Winged (Greater)",
      "itemType": "equipment",
      "level": 19,
      "rarity": "common",
      "traits": [
        "magical"
      ],
      "description": "This rune is a swirling glyph on the front of the armor. A large pair of transparent, ephemeral wings floats out from the back of the armor.\nActivate—Take to the Skies 2 (concentrate, manipulate)\nEffect You trace the rune on the front of the breastplate and the armor's ephemeral wings grow tangible, granting you a fly Speed of 25 feet or your land Speed, whichever is slower.\nOnce activated, the wings remain tangible indefinitely. You can Dismiss the activation if you choose, and you don't have to wait an hour to activate the rune again. Once the effect ends, the wings return to their ephemeral form.",
      "bulk": 0,
      "price": {
        "gp": 35000
      },
      "usage": "etched-onto-armor",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:eternal-eruption-of-barrowsiege",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "ZxsPHkzzn6QwfPEz",
      "slug": "eternal-eruption-of-barrowsiege",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:04cc27b14e93322068c57fa505af454352bb549c7b2b27ef7fef9b38bd6130d9",
    "translatableHash": "sha256:69604354f1f8853f4ffb4b01915e03c31317f09879c47f659bd27a50cdf20337",
    "data": {
      "schemaVersion": 1,
      "name": "Eternal Eruption of Barrowsiege",
      "itemType": "equipment",
      "level": 19,
      "rarity": "common",
      "traits": [
        "fire",
        "magical"
      ],
      "description": "Resembling frozen lava, an eternal eruption is made with the same type of time magic, but is built to loop through time, reforming itself after it's used. Determining the difference between the two requires a close examination to see a faint, repeating pattern of red runes.\nActivate—Lava Bomb 2 (concentrate, manipulate)\nEffect You fling the eternal eruption, with the effect of Frozen Lava of Barrowsiege. After [[/br 2d4 #hours]], the eternal eruption reforms itself in a container on your person, typically the one you most recently stored it in.\nEternal Eruption of Barrowsiege deals 19d6 fire damage on a check (reflex, dc:43, basic, options:area-effect).",
      "bulk": 0.1,
      "price": {
        "gp": 40000
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
        "uuid": "Compendium.pf2e.equipment-srd.Item.Frozen Lava of Barrowsiege",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Frozen Lava of Barrowsiege",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Frozen Lava of Barrowsiege",
          "sourceId": "ugxI9kH7osJ3J5qG",
          "name": "Frozen Lava of Barrowsiege",
          "type": "consumable"
        },
        "owner": {
          "sourceId": "ZxsPHkzzn6QwfPEz",
          "name": "Eternal Eruption of Barrowsiege",
          "type": "equipment"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:antimagic-oil",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "737LQfIaLXBPEzc3",
      "slug": "antimagic-oil",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/oils/antimagic-oil.webp"
    },
    "sourceHash": "sha256:a190b161651b96618f0d40f4cc75d0aa8e43f4c49b87855b48792b1c6b02406a",
    "translatableHash": "sha256:b37403a6557bceb1fb20146d59bc20b4bfc61eac38917ad540a9a2178513fdc6",
    "data": {
      "schemaVersion": 1,
      "name": "Antimagic Oil",
      "itemType": "consumable",
      "level": 20,
      "rarity": "rare",
      "traits": [
        "consumable",
        "magical",
        "oil"
      ],
      "description": "Activate A (manipulate)\nThis oil contains energy that repels nearly all types of magic. When you apply this oil to armor, the creature wearing the armor becomes immune to all spells, effects of magic items (the wearer's and those of others), and effects with the magical trait for 1 minute.\nThe oil affects neither the magic of the armor nor the fundamental runes of weapons attacking the wearer. Magical effects from a source of 20th level or higher, such as a deity, still function on the armor's wearer.",
      "bulk": 0.1,
      "price": {
        "gp": 13000
      },
      "usage": "held-in-two-hands",
      "category": "oil",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:sky-hammer",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "ANvbi1zKF1So8bON",
      "slug": "sky-hammer",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:efca548cf02c29d3199eaf74e1b289f55dc19b1d4635e74d2dbf82a1d27c262f",
    "translatableHash": "sha256:0014ae1ea40c6085e16b99b0bf2c20cd790c1a1ab0744cc135510e4e5381521a",
    "data": {
      "schemaVersion": 1,
      "name": "Sky Hammer",
      "itemType": "weapon",
      "level": 20,
      "rarity": "rare",
      "traits": [
        "magical",
        "shove"
      ],
      "description": "The sturdy head of this +3 major striking Flaming Shock orichalcum warhammer is shaped like a blazing comet.\nActivate—Comet Fall R (concentration)\nTrigger Your attack roll with the sky hammer is a critical success\nEffect A 6th-rank arcane Fireball spell explodes, centered on the sky hammer. The spell DC is 45. You are immune to the fireball's effect, though your allies are not.\nCraft Requirements Supply a casting of fireball (6th rank), and the initial raw materials must include 12,375 gp of orichalcum.",
      "bulk": 1,
      "price": {
        "gp": 70000
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "hammer",
      "damage": {
        "dice": 1,
        "die": "d8",
        "type": "bludgeoning"
      }
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 49,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Flaming",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Flaming",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Flaming",
          "sourceId": "XszNvxnymWYRaoTp",
          "name": "Flaming",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "ANvbi1zKF1So8bON",
          "name": "Sky Hammer",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 99,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Shock",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Shock",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Shock",
          "sourceId": "NVst7e69agGG9Qwd",
          "name": "Shock",
          "type": "equipment"
        },
        "owner": {
          "sourceId": "ANvbi1zKF1So8bON",
          "name": "Sky Hammer",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 457,
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
          "sourceId": "ANvbi1zKF1So8bON",
          "name": "Sky Hammer",
          "type": "weapon"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:life-saver-mail-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "oRBcuFdQDRCn1pwo",
      "slug": "life-saver-mail-greater",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:c7249e7c9cd4d43cd4fe2dd94e9b74800c7b6126186fa20e919c46325991ab0a",
    "translatableHash": "sha256:ded0f8c079a6e7211e67739e3f550252e1820d93c4cc16495530f978b43e9d4b",
    "data": {
      "schemaVersion": 1,
      "name": "Life-Saver Mail (Greater)",
      "itemType": "armor",
      "level": 20,
      "rarity": "common",
      "traits": [
        "magical"
      ],
      "description": "This suit of +3 greater resilient greater fortification splint mail has a large, green gemstone inset in a prominent location. While wearing the armor, you feel at ease knowing the armor can protect you in even dire circumstances. The gemstone glows with life essence, casting green light as brightly as a torch. You can suppress or resume this light by using a single action, which has the concentrate trait.\nActivate—Second Chance R (concentration)\nFrequency once per day\nTrigger You would die\nEffect The armor's gemstone turns gray as it shares life energy with you. The armor casts Breath of Life on you.\nActivate—Shielding Light 2 (concentration, manipulate)\nEffect You tap on the gemstone, producing a protective screen of green light. You cast a 9th-rank Shield spell. As normal with the spell, you can't cast shield again (using this activation or other means) for 10 minutes if you use it to Shield Block.",
      "bulk": 3,
      "price": {
        "gp": 52500
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
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 735,
        "uuid": "Compendium.pf2e.spells-srd.Item.Breath of Life",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Breath of Life",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Breath of Life",
          "sourceId": "Hnc7eGi7vyZenAIm",
          "name": "Breath of Life",
          "type": "spell"
        },
        "owner": {
          "sourceId": "oRBcuFdQDRCn1pwo",
          "name": "Life-Saver Mail (Greater)",
          "type": "armor"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1039,
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
          "sourceId": "oRBcuFdQDRCn1pwo",
          "name": "Life-Saver Mail (Greater)",
          "type": "armor"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:elven-chain-high-grade",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "PuqdH7DmNsN79HyE",
      "slug": "elven-chain-high-grade",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/armor/precious-metal-armor/elven-chain.webp"
    },
    "sourceHash": "sha256:103b9489cef391290fb3c36754f35f4293fb6ed00d3f4d5546aa896a10b5a1c3",
    "translatableHash": "sha256:916d597d04936dfbd53d16879f8efc8699c58d10dcb39541db6b7311ffa21d60",
    "data": {
      "schemaVersion": 1,
      "name": "Elven Chain (High-Grade)",
      "itemType": "armor",
      "level": 20,
      "rarity": "uncommon",
      "traits": [
        "flexible"
      ],
      "description": "Elven chain is a Chain Shirt made of dawnsilver that glitters in even the faintest light. Because it's constructed with small, supple rings, it has no check penalty.\nCreated by elven artisans employing ancient crafting techniques, elven chain is exceptionally quiet. Unlike other chain shirts-even other dawnsilver chain shirts-elven chain does not have the noisy trait. This suit of armor can be etched with runes like any other dawnsilver chain shirt.\nCraft Requirements The initial raw materials must include dawnsilver worth at least 26,000 gp",
      "bulk": 0.1,
      "price": {
        "gp": 16800
      },
      "usage": "",
      "category": "light",
      "group": "chain",
      "armor": {
        "armorClassBonus": 2,
        "dexterityCap": 3,
        "checkPenalty": 0,
        "speedPenaltyFeet": 0
      }
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 20,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Chain Shirt",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Chain Shirt",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Chain Shirt",
          "sourceId": "MPcM4Wt6KmWE2kGL",
          "name": "Chain Shirt",
          "type": "armor"
        },
        "owner": {
          "sourceId": "PuqdH7DmNsN79HyE",
          "name": "Elven Chain (High-Grade)",
          "type": "armor"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:monkeys-paw",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "QWiXrqhSCkvdHbsi",
      "slug": "monkeys-paw",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/cursed-items/monkeys-paw.webp"
    },
    "sourceHash": "sha256:afdaeef39fe910910fbd9e4f83ae9abfa3a74150cc4cc64625931faaac113032",
    "translatableHash": "sha256:83cb111b9c5332d6bb109cf6e0b2463577dabf8be85109292fffcd35e4f0052e",
    "data": {
      "schemaVersion": 1,
      "name": "Monkey's Paw",
      "itemType": "equipment",
      "level": 20,
      "rarity": "rare",
      "traits": [
        "cursed",
        "magical",
        "misfortune"
      ],
      "description": "This dried, gnarled hand is clenched in a fist, waiting for a creature to pick it up. When you pick up the monkey's paw, the hand opens, revealing three withered fingers. The monkey's paw grants you three wishes (with the effects of a success on the wish ritual), curling one finger after every one. Once you pick up the monkey's paw, you cannot discard the hand until it returns to a clenched fist by granting its three wishes. Any attempts to discard the hand, even with the effects of a wish ritual, are unsuccessful as the monkey's paw reappears among your possessions within [[/gmr 1d4 #hours]]; it doesn't work for any other creature in the intervening time. The hand returns even if another creature steals it from you. Once you make all three wishes, the monkey's paw uses Interplanar Teleport to travel to a random point in the multiverse.\nWhenever the monkey's paw hears you utter a statement that sounds like a wish, even if you don't use the words \"I wish,\" it activates and grants a twisted, horrifying version of your wish, producing any effect within the possibility of wish ritual, and potentially a greater effect at the GM's discretion.",
      "bulk": 0.1,
      "price": {},
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 858,
        "uuid": "Compendium.pf2e.spells-srd.Item.Interplanar Teleport",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Interplanar Teleport",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Interplanar Teleport",
          "sourceId": "5bTt2CvYHPvaR7QQ",
          "name": "Interplanar Teleport",
          "type": "spell"
        },
        "owner": {
          "sourceId": "QWiXrqhSCkvdHbsi",
          "name": "Monkey's Paw",
          "type": "equipment"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:bands-of-force-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "rqJzQawe3CbXiWnG",
      "slug": "bands-of-force-major",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/other-worn-items/bracers-of-armor.webp"
    },
    "sourceHash": "sha256:3cf9e6a8eabd72f2c49ca581d64a6f44fc7972d764e2427b8216bb7b353e4436",
    "translatableHash": "sha256:215f57b9f42e2b1e54575cce021c447e4e4bd8cb24f34117e00a108e1ed05beb",
    "data": {
      "schemaVersion": 1,
      "name": "Bands of Force (Major)",
      "itemType": "equipment",
      "level": 20,
      "rarity": "common",
      "traits": [
        "force",
        "invested",
        "magical"
      ],
      "description": "Decorated with clear gemstones, these thick metal bands spread an inflexible layer of force over your body. The force grants you a +3 item bonus to AC and saving throws, and a maximum Dexterity modifier of +5 as armor. You can affix talismans to the bands as though they were light armor.\nActivate—Return Force R (force, manipulate)\nTrigger A creature critically misses you with a melee Strike\nEffect You [[/act shove options=bands-of-force-major]] the creature using the bands' Athletics modifier of +33.",
      "bulk": 0.1,
      "price": {
        "gp": 70000
      },
      "usage": "wornarmbands",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:whisper-of-the-first-lie",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "sKyJDfHdKacfbNOG",
      "slug": "whisper-of-the-first-lie",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:1113413022ba9a7c17736ba67c557ee3faf201a641d812ee63a2ec00200a063d",
    "translatableHash": "sha256:2c0a8b5823a4925488a6b4acc551d0872316cdfe3de15e78583e3e545d93f142",
    "data": {
      "schemaVersion": 1,
      "name": "Whisper of the First Lie",
      "itemType": "equipment",
      "level": 20,
      "rarity": "rare",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "This delicate necklace contains bottled whispers distilled from a source on the Astral Plane rumored to be connected to the first lie ever told.\nWhile wearing the necklace, you gain a +3 item bonus to Deception checks, and you can attempt to counteract effects that would force you to tell the truth or determine whether you are lying.\nSuccess on this counteract attempt lets you ignore the effect, rather than removing the effect entirely. The counteract rank is 9, with a counteract modifier of [[/r 1d20+35]].\nActivate—Release the Lie 3 (concentrate, manipulate)\nEffect You unstopper the vial and release the lie, creating the effect of a Fabricated Truth (DC 47). The vial is emptied and can never be activated again.\nCraft Requirements Supply a casting of fabricated truth.",
      "bulk": 0,
      "price": {
        "gp": 60000
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 748,
        "uuid": "Compendium.pf2e.spells-srd.Item.Fabricated Truth",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Fabricated Truth",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Fabricated Truth",
          "sourceId": "6s0UW4bujggma9TC",
          "name": "Fabricated Truth",
          "type": "spell"
        },
        "owner": {
          "sourceId": "sKyJDfHdKacfbNOG",
          "name": "Whisper of the First Lie",
          "type": "equipment"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-widening-9th-rank-spell",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "t5978mZ6CqfUDCP6",
      "slug": "wand-of-widening-9th-rank-spell",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/wands/specialty-wands/wand-of-widening.webp"
    },
    "sourceHash": "sha256:f40bc3a7ed6869953745556f089ca7448c55d90897c953da3924fb4d1c000fc9",
    "translatableHash": "sha256:6c8b162cd03202075ec51e6a36da77f3c144f89486f867e3d5c54c00af200b7c",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Widening (9th-Rank Spell)",
      "itemType": "equipment",
      "level": 20,
      "rarity": "common",
      "traits": [
        "magical",
        "wand"
      ],
      "description": "The end of this wand is forked with a peridot setting.\nActivate Cast a Spell; The activation takes 2 if the spell normally takes 1 to cast, or 3 if the spell normally take 2\nFrequency Once per day, plus overcharge\nEffect You Cast the Spell, and increase its area. Add 5 feet to the radius of a burst that normally has a radius of at least 10 feet; add 5 feet to the length of a cone or line that is normally 15 feet long or smaller; or add 10 feet to the length of a larger cone or line.\nCraft Requirements Supply a casting of a spell of the appropriate rank. The spell must have a casting time of 1 or 2, can't have a duration, and must have an area of burst (10 feet or more), cone, or line.",
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
    "contentId": "pf2e:item:equipment-srd:staff-of-arcane-might-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "w2AxS7q8bjh77pp2",
      "slug": "staff-of-arcane-might-major",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:958c63b47bd21f79dc1dc284a106eec44d27310d236a3df03304d290e4b19089",
    "translatableHash": "sha256:79ac9944bd86098cee67b340275c62425054b77f1056897687dfd21c46bca9ef",
    "data": {
      "schemaVersion": 1,
      "name": "Staff of Arcane Might (Major)",
      "itemType": "weapon",
      "level": 20,
      "rarity": "rare",
      "traits": [
        "magical",
        "staff",
        "two-hand-d8"
      ],
      "description": "This staff of magically hardened wood is topped with a silver sculpture depicting magical runic symbols. A staff of arcane might is a +3 greater striking staff.\nActivate—Sunder 2 (death, force, manipulate)\nEffect You destroy the staff, unleashing a blast of arcane power in a 30-foot cone, dealing 2d10 force damage per charge remaining in the staff with a check (reflex, dc:40, traits:death,force, basic) save.\nActivate Cast a Spell\nEffect You expend a number of charges from the staff to cast a spell from its list.\n• Cantrip Detect Magic\n• 1st Phantasmal Minion\n• 2nd Everlight\n• 3rd Force Barrage, Paralyze\n• 4th Dispelling Globe, Mystic Armor, Translocate\n• 5th Fireball, Force Barrage, Lightning Bolt\n• 6th Disintegrate, Mystic Armor, Wall of Force\n• 7th Howling Blizzard, Fireball, Lightning Bolt\n• 8th Mystic Armor, Wall of Force\n• 9th Dispel Magic, Falling Stars, Howling Blizzard\nCraft Requirements Supply one casting of all listed ranks of all listed spells.",
      "bulk": 1,
      "price": {
        "gp": 90000
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
        "sourceIndex": 734,
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
          "sourceId": "w2AxS7q8bjh77pp2",
          "name": "Staff of Arcane Might (Major)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 816,
        "uuid": "Compendium.pf2e.spells-srd.Item.Phantasmal Minion",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Phantasmal Minion",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Phantasmal Minion",
          "sourceId": "xqmHD8JIjak15lRk",
          "name": "Phantasmal Minion",
          "type": "spell"
        },
        "owner": {
          "sourceId": "w2AxS7q8bjh77pp2",
          "name": "Staff of Arcane Might (Major)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 903,
        "uuid": "Compendium.pf2e.spells-srd.Item.Everlight",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Everlight",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Everlight",
          "sourceId": "ynm8JIU3sc3qUMpa",
          "name": "Everlight",
          "type": "spell"
        },
        "owner": {
          "sourceId": "w2AxS7q8bjh77pp2",
          "name": "Staff of Arcane Might (Major)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 982,
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
          "sourceId": "w2AxS7q8bjh77pp2",
          "name": "Staff of Arcane Might (Major)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1036,
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
          "sourceId": "w2AxS7q8bjh77pp2",
          "name": "Staff of Arcane Might (Major)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1114,
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
          "sourceId": "w2AxS7q8bjh77pp2",
          "name": "Staff of Arcane Might (Major)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1171,
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
          "sourceId": "w2AxS7q8bjh77pp2",
          "name": "Staff of Arcane Might (Major)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1224,
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
          "sourceId": "w2AxS7q8bjh77pp2",
          "name": "Staff of Arcane Might (Major)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1305,
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
          "sourceId": "w2AxS7q8bjh77pp2",
          "name": "Staff of Arcane Might (Major)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1354,
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
          "sourceId": "w2AxS7q8bjh77pp2",
          "name": "Staff of Arcane Might (Major)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1408,
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
          "sourceId": "w2AxS7q8bjh77pp2",
          "name": "Staff of Arcane Might (Major)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1492,
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
          "sourceId": "w2AxS7q8bjh77pp2",
          "name": "Staff of Arcane Might (Major)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1545,
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
          "sourceId": "w2AxS7q8bjh77pp2",
          "name": "Staff of Arcane Might (Major)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1598,
        "uuid": "Compendium.pf2e.spells-srd.Item.Wall of Force",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Wall of Force",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Wall of Force",
          "sourceId": "7Iela4GgVeO3LfAo",
          "name": "Wall of Force",
          "type": "spell"
        },
        "owner": {
          "sourceId": "w2AxS7q8bjh77pp2",
          "name": "Staff of Arcane Might (Major)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1681,
        "uuid": "Compendium.pf2e.spells-srd.Item.Howling Blizzard",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Howling Blizzard",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Howling Blizzard",
          "sourceId": "xxWhyl81w3ckslAU",
          "name": "Howling Blizzard",
          "type": "spell"
        },
        "owner": {
          "sourceId": "w2AxS7q8bjh77pp2",
          "name": "Staff of Arcane Might (Major)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1738,
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
          "sourceId": "w2AxS7q8bjh77pp2",
          "name": "Staff of Arcane Might (Major)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1787,
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
          "sourceId": "w2AxS7q8bjh77pp2",
          "name": "Staff of Arcane Might (Major)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1871,
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
          "sourceId": "w2AxS7q8bjh77pp2",
          "name": "Staff of Arcane Might (Major)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1924,
        "uuid": "Compendium.pf2e.spells-srd.Item.Wall of Force",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Wall of Force",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Wall of Force",
          "sourceId": "7Iela4GgVeO3LfAo",
          "name": "Wall of Force",
          "type": "spell"
        },
        "owner": {
          "sourceId": "w2AxS7q8bjh77pp2",
          "name": "Staff of Arcane Might (Major)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 2007,
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
          "sourceId": "w2AxS7q8bjh77pp2",
          "name": "Staff of Arcane Might (Major)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 2060,
        "uuid": "Compendium.pf2e.spells-srd.Item.Falling Stars",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Falling Stars",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Falling Stars",
          "sourceId": "jrBa9deU2ULFWvSl",
          "name": "Falling Stars",
          "type": "spell"
        },
        "owner": {
          "sourceId": "w2AxS7q8bjh77pp2",
          "name": "Staff of Arcane Might (Major)",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 2114,
        "uuid": "Compendium.pf2e.spells-srd.Item.Howling Blizzard",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Howling Blizzard",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Howling Blizzard",
          "sourceId": "xxWhyl81w3ckslAU",
          "name": "Howling Blizzard",
          "type": "spell"
        },
        "owner": {
          "sourceId": "w2AxS7q8bjh77pp2",
          "name": "Staff of Arcane Might (Major)",
          "type": "weapon"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:resilient-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "WKcvvaZ0LxwYreb7",
      "slug": "resilient-major",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/runes/fundamental-armor-runes/armor-potency.webp"
    },
    "sourceHash": "sha256:2d322be86fb921a021407b103f2a663d2da5af08666bd5d5ce8787941083af60",
    "translatableHash": "sha256:76e9dae70bf78f8503191e621f75bec1e501b3d4150edaa7dc8a42f983a3a502",
    "data": {
      "schemaVersion": 1,
      "name": "Resilient (Major)",
      "itemType": "equipment",
      "level": 20,
      "rarity": "common",
      "traits": [
        "magical"
      ],
      "description": "Resilient runes imbue armor with additional protective magic. This grants the wearer a +3 item bonus to saving throws.\nYou can upgrade the resilient rune already etched on a suit of armor using the normal process for upgrading items and runes.",
      "bulk": 0,
      "price": {
        "gp": 49440
      },
      "usage": "etched-onto-armor",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:shot-of-the-first-vault",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "6o6zvitwlNHNaNJM",
      "slug": "shot-of-the-first-vault",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/artifacts/shot-at-the-first-vault.webp"
    },
    "sourceHash": "sha256:832c4e2c0da7e6bfd76bbf0345175be998c6c81c1579533f4dada25e3435a334",
    "translatableHash": "sha256:1d16a460b995c36d85fa0c46722aa19f395377f7f580a8471c2d168e48cac869",
    "data": {
      "schemaVersion": 1,
      "name": "Shot of the First Vault",
      "itemType": "equipment",
      "level": 23,
      "rarity": "rare",
      "traits": [
        "artifact",
        "divine"
      ],
      "description": "Legends claim that some long-forgotten god stole the original bundle of shots of the First Vault from Abadar's repository. Since then, individual pieces have turned up throughout the multiverse. When you pick up a shot of the First Vault, it immediately reshapes itself to function with any ranged weapon and establishes you as its owner until another creature picks it up. As its owner, you can use the shot's single-action activation after shooting it.\nInstead of rolling weapon damage dice, a shot of the First Vault deals 25 damage plus any bonuses or additional damage as if 25 were the result of the weapon's damage dice; the damage type matches that normally dealt by the weapon. Upon damaging a creature, the shot of the First Vault shatters, and the fragments ricochet to hit any other enemies within 30 feet, making attack rolls with the same attack bonus. The shattered fragments remain lodged in the creatures they damage; the creatures are Clumsy 2 while the fragments remain in place. A total of 3 Interact actions are required to remove the fragments from yourself or an adjacent creature; alternatively, a single action and a successful check (medicine, dc:30) check can be used. A critical failure on this Medicine check deals 10 persistent bleed damage to the creature with the embedded fragment.\nActivate—Reload Order A (concentrate)\nEffect You recall the shot of the First Vault, which automatically reloads itself into your weapon. If the shot had fragmented, the fragments violently dislodge themselves, dealing 15 persistent bleed damage to each creature in which they were embedded. The fragments then unite to re-form the shot of the First Vault, which automatically reloads itself into your weapon.\nActivate—Vault Deposit 3 (manipulate)\nRequirements The shot is loaded in your ranged weapon, or at hand if your ranged weapon has a reload of 0\nEffect You line up a perfectly aimed attack directly toward the First Vault. You Strike a creature, then the shot of the First Vault attempts to bring your target with it as it returns to the First Vault. Unless your attack roll is a critical failure, the creature must attempt a check (reflex, dc:45) save; this effect has the incapacitation trait. Regardless, the shot of the First Vault returns to the First Vault.\nCritical Success The creature is unaffected.\nSuccess The creature is moved 1d20×50 feet in the direction you fired. If this causes it to hit a solid object, it takes 50 bludgeoning damage.\nFailure The creature is transported to a random location on the plane of Axis.\nCritical Failure The creature is transported to the First Vault. Unless it is capable of eluding Abadar's precautions, it is likely unable to escape the Vault on its own.\nDestruction If 10 shots of the First Vault are all fired at the same group of keketar or izfiitar proteans within 1 minute of each other, each shot was a hit, and the shots are then recalled, the shots collide as they attempt to re-form and crumble to dust.",
      "bulk": 0,
      "price": {},
      "usage": "other",
      "category": "equipment",
      "group": "equipment"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 999,
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
          "sourceId": "6o6zvitwlNHNaNJM",
          "name": "Shot of the First Vault",
          "type": "equipment"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:serithtial",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "emGyagWNmjvtjiGK",
      "slug": "serithtial",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/artifacts/serithtial.webp"
    },
    "sourceHash": "sha256:41d8d8aea998ff7c00b9143f4ed9851018d7d93bf493e4128243d017e80ef45d",
    "translatableHash": "sha256:544e3832df2aaa81818065e3f65e3aaed3f487b6223974d3de6aa3700597d005",
    "data": {
      "schemaVersion": 1,
      "name": "Serithtial",
      "itemType": "weapon",
      "level": 23,
      "rarity": "unique",
      "traits": [
        "artifact",
        "divine",
        "intelligent",
        "two-hand-d12"
      ],
      "description": "Perception +28; normal vision and hearing within 60 feet\nCommunication empathy (partner only)\nSkills Iomedae Lore +29, Religion +26, Zon-Kuthon Lore +29\nInt +2, Wis +1, Cha +2\nWill +30\nThe legendary blade Serithtial is said to have been forged by Iomedae, goddess of honor, justice, and valor. She is an intelligent +4 major striking holy bastard sword. Although the sword is made of steel, Serithtial is also treated as cold iron and silver, allowing her to deal more damage to certain supernatural creatures. She glows as bright as a torch, but you or Serithtial can suppress or resume this glow as a single action, which has the concentrate trait. In addition, Strikes with Serithtial deal an additional 2d6 damage against creatures that are worshippers of Zon-Kuthon. While wielding Serithtial, against effects created by followers of Zon-Kuthon you gain the benefit of Unfettered Movement, a +4 status bonus to saves against death and void effects, void resistance 10, and suppress the Doomed condition.\nSerithtial was forged as a bastard sword, and she reverts to this shape when no one wields her, but she can also detect what sort of blade her current wielder prefers and transform into it (choosing from dagger, shortsword, longsword, scimitar, falchion, greatsword, rapier, or bastard sword) using an action, which she does when first held. The wielder can empathically tell Serithtial to transform at any time by using a single action, which has the concentrate trait, after which Serithtial uses an action to transform.\nSerithtial is willing to work with almost any partner as long as they are dedicated to defeating the great wyrm Kazavon and the forces of Zon-Kuthon. If you ignore those threats and pursue your own agenda instead, before long Serithtial attempts to seize control of your body (check (will, dc:45) save to resist her control), though she typically remains in control for only long enough to find a more worthy partner. You can attempt a new Will save each day to retake control of your body.\nActivate—Grace of the Inheritor (concentrate)\nFrequency once per hour\nEffect Serithtial spends the appropriate number of actions and casts a 9th-rank Heal or Ring of Truth spell (DC 45 for either of the two spells).\nDestruction If Kazavon or a great wyrm shadow dragon who is a worshipper of Zon-Kuthon uses its dragon breath on Serithtial while she is unattended, the sword melts into a pool of mundane iron.",
      "bulk": 1,
      "price": {},
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "sword",
      "damage": {
        "dice": 1,
        "die": "d8",
        "type": "slashing"
      }
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1092,
        "uuid": "Compendium.pf2e.spells-srd.Item.Unfettered Movement",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Unfettered Movement",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Unfettered Movement",
          "sourceId": "aqRYNoSvxsVfqglH",
          "name": "Unfettered Movement",
          "type": "spell"
        },
        "owner": {
          "sourceId": "emGyagWNmjvtjiGK",
          "name": "Serithtial",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1248,
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
          "sourceId": "emGyagWNmjvtjiGK",
          "name": "Serithtial",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 2619,
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
          "sourceId": "emGyagWNmjvtjiGK",
          "name": "Serithtial",
          "type": "weapon"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 2666,
        "uuid": "Compendium.pf2e.spells-srd.Item.Ring of Truth",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Ring of Truth",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Ring of Truth",
          "sourceId": "aewxsale5xWEPKLk",
          "name": "Ring of Truth",
          "type": "spell"
        },
        "owner": {
          "sourceId": "emGyagWNmjvtjiGK",
          "name": "Serithtial",
          "type": "weapon"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:forgefathers-seal",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "jpQcKMmP1I5674P7",
      "slug": "forgefathers-seal",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/artifacts/forgefathers-seal.webp"
    },
    "sourceHash": "sha256:afa14ba13365fe04c10dbf151ee2a723d165968c343d3fabf097e3fec9434937",
    "translatableHash": "sha256:b1fab92d70f2eedc81e04c0ffec46b18b8714762ee6fbb27040a009eac8d26ee",
    "data": {
      "schemaVersion": 1,
      "name": "Forgefather's Seal",
      "itemType": "equipment",
      "level": 24,
      "rarity": "rare",
      "traits": [
        "artifact",
        "divine"
      ],
      "description": "This rune was created by Torag, god of the forge, protection, and strategy, and shared with his greatest artisans and warriors. Torag designed a small number of these seals as gifts to allied good deities; each one is nearly identical but has a different spell effect when using the reaction activation; for instance, Sarenrae's seal casts Sunburst instead of earthquake.\nA seal constantly rings with the quiet sound of a hammer striking an anvil when etched onto a runestone. A Forgefather's seal can be etched only onto armor that can bear two or more property runes, and it is so powerful that it takes the place of two property runes. While wearing armor etched with a Forgefather's seal, you gain fire resistance 40. You ignore the armor's check penalty and Speed penalty (if any); if the armor is light or medium, increase its item bonus to AC by 1. In addition, any shield you wield automatically recovers 10 Hit Points at the start of your turn each round.\nEffect: Forgefather's Seal\nActivate—Retributive Rebuff R (manipulate)\nFrequency once per hour\nTrigger You are hit by an attack\nEffect The Forgefather's seal glows and your armor shakes as it absorbs the blow. The attack's damage is reduced by 100 and you cast Earthquake (DC 40), centered directly on the triggering creature. You decide the area of the earthquake when you Cast the Spell, from as small as the size of the creature and up to a 60-foot burst.\nActivate—Seal of Mending 3 (manipulate)\nFrequency once per day\nEffect You call upon on the restorative powers of the seal to repair an item within reach. The rune instantly restores the item to full Hit Points, even if the item was destroyed, using the effects of the Remake spell, so long as the majority of the item is available for the repair. The seal can restore even magic items and artifacts of its level or lower. Once you have used this ability, the seal's ability to automatically repair shields becomes inactive until the next time you make your daily preparations.\nActivate—Stalwart Sacrifice F (concentrate)\nTrigger You have not acted yet on your turn\nEffect You call upon Torag to defend your allies and those around you, sacrificing yourself in the process. Creatures of your choosing within 60 feet recover all their Hit Points. If any of the creatures are dead, they are instead brought back to life with half of their maximum Hit Points. The chosen creatures also gain a +4 status bonus to AC and saving throws, and fast healing 15 for 1 hour. You can use this ability to bring back to life a creature that requires a Wish ritual or divine intervention to raise from the dead, as long as you choose no other creatures within 60 feet to recover. Once you use this activation, you are turned into a perfect statue made from stone or metal that depicts you in a glorious pose honoring your sacrifice, and you can never be restored. The Forgefather's seal remains on this statue and can be transferred to another suit of armor or a runestone as normal.\nEffect: Forgefather's Seal (Stalwart Sacrifice)\nDestruction Using the Forgefather's seal ability to bring the dead back to life on an evil demigod causes it to shatter in a violent explosion that destroys the seal and the statue made as part of the sacrifice, erasing all knowledge of the user from existence. It does, however, bring the evil demigod back to life.",
      "bulk": 0,
      "price": {},
      "usage": "etched-onto-armor",
      "category": "equipment",
      "group": "equipment"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 343,
        "uuid": "Compendium.pf2e.spells-srd.Item.Sunburst",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Sunburst",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Sunburst",
          "sourceId": "a3aQxCpoj1q1NQxC",
          "name": "Sunburst",
          "type": "spell"
        },
        "owner": {
          "sourceId": "jpQcKMmP1I5674P7",
          "name": "Forgefather's Seal",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1057,
        "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Forgefather's Seal",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Forgefather's Seal",
          "package": "pf2e",
          "sourcePack": "equipment-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Forgefather's Seal",
          "sourceId": "0TZLR0PO5TJm9F4l",
          "name": "Effect: Forgefather's Seal",
          "type": "effect"
        },
        "owner": {
          "sourceId": "jpQcKMmP1I5674P7",
          "name": "Forgefather's Seal",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1509,
        "uuid": "Compendium.pf2e.spells-srd.Item.Earthquake",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Earthquake",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Earthquake",
          "sourceId": "x7SPrsRxGb2Vy2nu",
          "name": "Earthquake",
          "type": "spell"
        },
        "owner": {
          "sourceId": "jpQcKMmP1I5674P7",
          "name": "Forgefather's Seal",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 2151,
        "uuid": "Compendium.pf2e.spells-srd.Item.Remake",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Remake",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Remake",
          "sourceId": "dMKP4fkWx8V2cqAy",
          "name": "Remake",
          "type": "spell"
        },
        "owner": {
          "sourceId": "jpQcKMmP1I5674P7",
          "name": "Forgefather's Seal",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 3171,
        "uuid": "Compendium.pf2e.spells-srd.Item.Wish",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Wish",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Wish",
          "sourceId": "6dDtGIUerazSHIOu",
          "name": "Wish",
          "type": "spell"
        },
        "owner": {
          "sourceId": "jpQcKMmP1I5674P7",
          "name": "Forgefather's Seal",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 3657,
        "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Forgefather's Seal (Stalwart Sacrifice)",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.equipment-effects.Item.Effect: Forgefather's Seal (Stalwart Sacrifice)",
          "package": "pf2e",
          "sourcePack": "equipment-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Forgefather's Seal (Stalwart Sacrifice)",
          "sourceId": "Elj69wSjv91ouC7v",
          "name": "Effect: Forgefather's Seal (Stalwart Sacrifice)",
          "type": "effect"
        },
        "owner": {
          "sourceId": "jpQcKMmP1I5674P7",
          "name": "Forgefather's Seal",
          "type": "equipment"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:item:equipment-srd:philosophers-extractor",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "mH3LImCgJAkfKAA3",
      "slug": "philosophers-extractor",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/artifacts/philosophers-extractor.webp"
    },
    "sourceHash": "sha256:6c88cf85e9f93f3c94957188cd6da5e78a922c6166a8511a1383b3dc5f164dcc",
    "translatableHash": "sha256:658cdc7d0e0bf06649b62f0f399d8bb077e7a1a0e420810518a55c7fd3123b02",
    "data": {
      "schemaVersion": 1,
      "name": "Philosopher's Extractor",
      "itemType": "equipment",
      "level": 25,
      "rarity": "rare",
      "traits": [
        "artifact",
        "magical"
      ],
      "description": "This bizarre machine is a complex arrangement of flasks, tubes, and other alchemical equipment. The philosopher's extractor is designed to create the ultimate alchemical concoctions. The extractor functions as an exceptional set of alchemist's tools, granting a +4 item bonus to Crafting checks related to alchemy. When using the extractor to Craft an alchemical item or with infused reagents as part of your daily preparations, you can create impeccable alchemical items. An impeccable alchemical item always uses the maximum numerical value possible for any rolls it requires, such as dealing maximum damage with alchemist's fire or restoring the maximum number of Hit Points with an elixir of life. If the impeccable item has a duration, it lasts twice as long as normal. Finally, an impeccable alchemical item never has a drawback.\nActivate—Accelerated Synthesis 3 (manipulate)\nFrequency once per minute\nEffect You use the extractor to produce an alchemical item of your level or lower whose formula you know. The extractor can create 56 levels' worth of items per day in this way. For example, the extractor could create two true elixirs of life (19th level) and two moderate elixirs of life (9th level), or eight comprehension elixirs (7th level), and so on.\nActivate—Essence Transmogrification 1 hour (manipulate)\nEffect You take a sizable portion of a creature (at least two-thirds of its original mass) and filter it through the mechanisms of the extractor. After the end of the process, the philosopher's extractor creates a transmogrifying mutagen that imparts the essence of the creature to the drinker. The extractor can make several transmogrifying mutagens simultaneously using the same activation if enough mass is provided at once, up to a maximum of 10 concurrent mutagens. Drinking a transmogrifying mutagen imparts you with one of the creature's unique abilities for 1 hour. This could grant one of several abilities such as a dragon's breath, darkvision, flight, frightful presence, or immunity to sleep. The ability functions as it did for the original creature, except it uses your class DC or your spell DC (whichever is higher) instead of the creature's DC. The mutagen grants only abilities based on a creature's physiology and never grants magic-related abilities such as innate spells or spellcasting ability. The GM ultimately decides what ability a transmogrifying mutagen grants.\nUnlike normal for mutagens and polymorph effects, you can drink multiple transmogrifying mutagens and gain benefits from each. When you drink transmogrifying mutagens made from different creatures, you receive abilities from each creature. When you drink multiple transmogrifying mutagens made from the same type of creature, such as multiple mutagens made from trolls, you gain an additional ability for each transmogrifying mutagen you drink, and the duration of the abilities from that creature type increases by 1 hour for each additional concoction you drink.\nHowever, these additional benefits come with a risk; if you drink a transmogrifying mutagen while at least one other is active, after drinking it, you must succeed at a flat check with a DC equal to the total number of active transmogrifying mutagens you've consumed. On a failure, you fully transform into a member of the species of the latest transmogrifying mutagen you drank, and you almost always go berserk from your change. The transformation may leave some amount of your personality and memories intact, at the GM's discretion.\nDestruction Simultaneously feeding the philosopher's extractor sizable portions of an aeon, angel, archon, azata, daemon, demon, devil, protean, and psychopomp, each of at least 14th level, along with a philosopher's stone causes the device to jam, overheat, and explode. Creatures within 60 feet of the explosion must succeed at a check (reflex, dc:55) save or become covered in an alchemical slurry that transforms them into a horrifying amalgam of at least two of the creatures used to destroy the machine.",
      "bulk": 8,
      "price": {},
      "usage": "other",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:mirror-of-sorshen",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Ywt7p5Fyx18lK8km",
      "slug": "mirror-of-sorshen",
      "publicationTitle": "Pathfinder GM Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/artifacts/mirror-of-sorshen.webp"
    },
    "sourceHash": "sha256:bb6972ef93d8f99ff5cfe090d985e8d2f7741ab17221c5047b1cb4a11ea255a3",
    "translatableHash": "sha256:8a1b5add994aa1bd18aab0acaba4cf7bfcf363e93749f5436cf1f97e6c980933",
    "data": {
      "schemaVersion": 1,
      "name": "Mirror of Sorshen",
      "itemType": "equipment",
      "level": 25,
      "rarity": "unique",
      "traits": [
        "artifact",
        "magical"
      ],
      "description": "The silvery glass of this oval mirror displays alluring sights. Its dark wooden frame is studded with small green gems and is carved with a pair of sensuous humanoid shapes—one on the edge of each side of the glass.\nThe Mirror of Sorshen can form a bond with a spellcaster who has legendary proficiency in Arcana or Occultism, who becomes the mirror's owner. Regardless of where the mirror is, as long as the bond remains, the owner is aware of everything the mirror is currently reflecting and can use the mirror's activations.\nWhenever an intelligent creature looks in the mirror, they see an image of a person, creature, or item they find powerfully enticing in some way. The specific image varies depending on the observer, even when more than one creature is looking into the mirror at the same time. Observers are Fascinated by the images in the mirror unless they succeed at a check (will, dc:35) save each round. On a failure, they stare blankly at the mirror for as long as it remains in view, and if it leaves their view, they stare toward the last place they saw the mirror for several minutes thereafter. This is an emotion, incapacitation, and visual effect. Creatures that are fascinated by the mirror are so deeply entranced that they don't end their fascinated condition automatically even if a creature uses hostile actions against them or their allies; instead, they can attempt a check (will, dc:30) save to end the fascination. At the GM's discretion, a truly innocent creature or a creature that has renounced all worldly pleasures might be immune to the mirror's fascination.\nActivate—Second Glance 2 (concentrate, emotion, incapacitation, visual)\nEffect You force a creature looking at the mirror to attempt an additional Will save against the mirror's fascination effect, even if they succeeded at their save.\nActivate—Irresistible Desire 3 (concentrate, emotion, incapacitation, mental)\nRequirements The target must be fascinated by the mirror\nEffect You control the target for 30 days, with the effect of a critically failed saving throw against Dominate. If the victim sees the mirror again at any point before this duration expires, the control extends for an additional 30 days from the moment it looked at the mirror again. While there is no initial saving throw, the DC to break free due to commands against the creature's nature is 35.\nDestruction The Mirror of Sorshen shatters into a thousand pieces if an intelligent but completely innocent creature resists the mirror's attraction and then accidentally drops it.",
      "bulk": 0.1,
      "price": {},
      "usage": "bonded",
      "category": "equipment",
      "group": "equipment"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 846,
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
          "sourceId": "Ywt7p5Fyx18lK8km",
          "name": "Mirror of Sorshen",
          "type": "equipment"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 2341,
        "uuid": "Compendium.pf2e.spells-srd.Item.Dominate",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Dominate",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Dominate",
          "sourceId": "OsOhx3TGIZ7AhD0P",
          "name": "Dominate",
          "type": "spell"
        },
        "owner": {
          "sourceId": "Ywt7p5Fyx18lK8km",
          "name": "Mirror of Sorshen",
          "type": "equipment"
        }
      }
    ]
  }
]
