import type { Pathfinder2eOriginalContentRecord } from '../../records'
import type { Pathfinder2eSpellData } from '../types'

export const PATHFINDER_2E_EXHAUSTIVE_10_SPELL_ORIGINALS: readonly Pathfinder2eOriginalContentRecord<Pathfinder2eSpellData>[] = [
  {
    "contentId": "pf2e:spell:spells-srd:noxious-vapors",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "1meVElIu1CEVYWkv",
      "slug": "noxious-vapors",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/noxious-vapors.webp"
    },
    "sourceHash": "sha256:03c3d474a055dfe5f2d0b6d68f178db41c8865cac2f15f46bb0c6e7fa34d9a60",
    "translatableHash": "sha256:121edf1a815e7c67a0bb86d5fa8bb8873c9e63546b6c2249fc4fe62cb72c63be",
    "data": {
      "schemaVersion": 1,
      "name": "Noxious Vapors",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "poison"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You emit a cloud of toxic smoke that temporarily obscures you from sight. Each creature except you in the area when you Cast the Spell takes 1d6 poison damage (basic Fortitude save). A creature that critically fails the saving throw also becomes Sickened 1. All creatures in the area become Concealed, and all creatures outside the smoke become concealed to creatures within it. This smoke can be dispersed by a strong wind.\nHeightened (+1) The damage increases by 1d6",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "10 emanation",
      "duration": "1 round",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "1d6",
          "type": "poison",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+1) The damage increases by 1d6"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 249,
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
          "sourceId": "1meVElIu1CEVYWkv",
          "name": "Noxious Vapors",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 347,
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
          "sourceId": "1meVElIu1CEVYWkv",
          "name": "Noxious Vapors",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:leaden-steps",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "2tHYKoVc5YhSewDO",
      "slug": "leaden-steps",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:4eb0b78ec4604eb82acbf5d5f14289d71514481a3b9f41f1a82717ad93b9da9c",
    "translatableHash": "sha256:810ecccb5c46a81ddc0e2aec73745bfb32e3172bb53970ed874a40308824cd5a",
    "data": {
      "schemaVersion": 1,
      "name": "Leaden Steps",
      "rank": 1,
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
      "description": "You partially transform a foe's feet into unwieldy slabs of metal, slowing their steps. The target attempts a Fortitude saving throw.\nCritical Success The target is unaffected.\nSuccess The target is Encumbered and has weakness 2 to electricity until the end of your next turn. The spell can't be sustained.\nFailure The target is encumbered and has weakness 2 to electricity.\nCritical Failure The target is encumbered and has weakness 3 to electricity.\nSpell Effect: Leaden Steps\nHeightened (+1) The weakness increases by 1.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": "fortitude save",
      "damage": [],
      "heightening": "Heightened (+1) The weakness increases by 1."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 255,
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
          "sourceId": "2tHYKoVc5YhSewDO",
          "name": "Leaden Steps",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 606,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Leaden Steps",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Leaden Steps",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Leaden Steps",
          "sourceId": "QjZ1PpYIeWh9SbmD",
          "name": "Spell Effect: Leaden Steps",
          "type": "effect"
        },
        "owner": {
          "sourceId": "2tHYKoVc5YhSewDO",
          "name": "Leaden Steps",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:object-reading",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "5LYi9Efs6cko4GGL",
      "slug": "object-reading",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/object-reading.webp"
    },
    "sourceHash": "sha256:9ca020116ed5050fd3e5804e1dca58c5abc87b2ed63b250e3733072eb6eb3f4e",
    "translatableHash": "sha256:d47789d8fe10491badfc65d0cfd96dcb147e5f73efd5423d316e5972ba71ec4a",
    "data": {
      "schemaVersion": 1,
      "name": "Object Reading",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "occult"
      ],
      "description": "You place a hand on an object to learn a piece of information about an emotional event that occurred involving the object within the past week, determined by the GM. If you cast object reading on the same item multiple times, you can either concentrate on a single event to gain additional pieces of information about that event, or you can gain a piece of information about another emotional event in the applicable time frame.\nHeightened (2nd) You can learn about an event that occurred within the last month.\nHeightened (4th) You can learn about an event that occurred within the last year.\nHeightened (6th) You can learn about an event that occurred within the last decade.\nHeightened (8th) You can learn about an event that occurred within the last century.\nHeightened (9th) You can learn about an event that occurred within the entirety of the object's history.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 object",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (2nd) You can learn about an event that occurred within the last month.\nHeightened (4th) You can learn about an event that occurred within the last year.\nHeightened (6th) You can learn about an event that occurred within the last decade.\nHeightened (8th) You can learn about an event that occurred within the last century.\nHeightened (9th) You can learn about an event that occurred within the entirety of the object's history."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:schadenfreude",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "8E97SA9KAWCNdXfO",
      "slug": "schadenfreude",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:1d7aa0698de1b7ceea3da224f80a8ba0878272d6c4cbc1f10d8cf58c555537c6",
    "translatableHash": "sha256:09fe699835a97582639a8cfdcc28324c2373301ec391fcc42a7054bcede4f365",
    "data": {
      "schemaVersion": 1,
      "name": "Schadenfreude",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "emotion",
        "mental"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult"
      ],
      "description": "Trigger You critically fail a saving throw against a foe's effect.\nYou distract your enemy with their feeling of smug pleasure when you fail catastrophically. They must attempt a Will save.\nCritical Success The creature is unaffected.\nSuccess The creature is distracted by its amusement and takes a -1 status penalty on Perception checks and Will saves for 1 round. Spell Effect: Schadenfreude (Success)\nFailure The creature is overcome by its amusement and is Stupefied 1 for 1 round.\nCritical Failure The creature is lost in its amusement and is Stupefied 2 for 1 round and Stunned 1.",
      "castingTime": "reaction",
      "range": "30 feet",
      "target": "the triggering foe",
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
        "sourceIndex": 451,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Schadenfreude (Success)",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Schadenfreude (Success)",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Schadenfreude (Success)",
          "sourceId": "TjGHxli0edXI6rAg",
          "name": "Spell Effect: Schadenfreude (Success)",
          "type": "effect"
        },
        "owner": {
          "sourceId": "8E97SA9KAWCNdXfO",
          "name": "Schadenfreude",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 612,
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
          "sourceId": "8E97SA9KAWCNdXfO",
          "name": "Schadenfreude",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 777,
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
          "sourceId": "8E97SA9KAWCNdXfO",
          "name": "Schadenfreude",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 859,
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
          "sourceId": "8E97SA9KAWCNdXfO",
          "name": "Schadenfreude",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:chilling-spray",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "8TQiFzGf4feoHeH0",
      "slug": "chilling-spray",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/chilling-spray.webp"
    },
    "sourceHash": "sha256:156c271fb1bf467af75444c43c3d30583b2bbc8c0d4c29c3600983f0c2c15a6d",
    "translatableHash": "sha256:f2ad0f4c2604f9c88046da16802a1a725dd912120b3ee20a4791166f0c6764a8",
    "data": {
      "schemaVersion": 1,
      "name": "Chilling Spray",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "cold",
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "A cone of icy shards bursts from your spread hands and coats the targets in a layer of frost. You deal 2d4 cold damage to creatures in the area; they must each attempt a Reflex save.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage.\nFailure The creature takes full damage and takes a –5-foot status penalty to its Speeds for 2 rounds.\nCritical Failure The creature takes double damage and takes a –10-foot status penalty to its Speeds for 2 rounds.\nHeightened (+1) The damage increases by 2d4.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "15 cone",
      "duration": "",
      "defense": "reflex save",
      "damage": [
        {
          "formula": "2d4",
          "type": "cold",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+1) The damage increases by 2d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:summon-lesser-servitor",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "B0FZLkoHsiRgw7gv",
      "slug": "summon-lesser-servitor",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:efed637f7d2294dcaf3c1e18a8a8df4e69d8876d35e30cd2312a45bfc925957c",
    "translatableHash": "sha256:ef385a48f5984f2851b4556d2d0148848396c9df89e16ac63dbde75814c8d199",
    "data": {
      "schemaVersion": 1,
      "name": "Summon Lesser Servitor",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "summon"
      ],
      "traditions": [
        "divine"
      ],
      "description": "While deities jealously guard their most powerful servants from the summoning spells of those who aren't steeped in the faith, this spell allows you to conjure an inhabitant of the Outer Sphere with or without the deity's permission. You summon a common celestial, fiend, or monitor of level –1. You can choose to instead summon a common animal of level –1 that hails from the Outer Sphere; you can choose for this animal to gain the celestial and holy traits, the fiend and unholy traits, or the monitor trait. It's anathema to summon a servitor if it has a holy or unholy trait that isn't allowed for your deity's sanctification. For example, Sarenrae's sanctification is \"can choose holy,\" so you couldn't summon an unholy creature, and Pharasma's is \"none,\" so you couldn't summon a holy or unholy creature. The GM might determine that your deity restricts specific types of creatures further, making it anathema to summon them as well.\nHeightened (2nd) The creature can be level 1 or lower.\nHeightened (3rd) The creature can be level 2 or lower.\nHeightened (4th) The creature can be level 3 or lower.",
      "castingTime": "3 actions",
      "range": "30 feet",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (2nd) The creature can be level 1 or lower.\nHeightened (3rd) The creature can be level 2 or lower.\nHeightened (4th) The creature can be level 3 or lower."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:haunting-hymn",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "b5BQbwmuBhgPXTyi",
      "slug": "haunting-hymn",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:1206bc7438bf5edbc5138edad96a7815a158c3ee96302c80da4fcb2d6e3aba79",
    "translatableHash": "sha256:3f4c351dd783f01b41059548f70f41fd99a69dab4ae88a455dcdb4373cd75fbd",
    "data": {
      "schemaVersion": 1,
      "name": "Haunting Hymn",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "auditory",
        "cantrip",
        "concentrate",
        "manipulate",
        "sonic"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "You echo a jarring hymn that only creatures in the area can hear. The hymn deals 1d8 sonic damage, with a basic Fortitude save. If a target critically fails the save, it's also Deafened for 1 minute.\nHeightened (+2) The damage increases by 1d8.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "15 cone",
      "duration": "",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "1d8",
          "type": "sonic",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+2) The damage increases by 1d8."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 180,
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
          "sourceId": "b5BQbwmuBhgPXTyi",
          "name": "Haunting Hymn",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:puff-of-poison",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "D7ZEhTNIDWDLC2J4",
      "slug": "puff-of-poison",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/puff-of-poison.webp"
    },
    "sourceHash": "sha256:f5c3a3f99ebe2f03406ecfc9492a4a48e4ba59b40b68608be9d5fdc200f2a540",
    "translatableHash": "sha256:d7d3afbeb0d518c835a8c00ca7377374a5be56b2a3c7cea9adc7ef319237c80d",
    "data": {
      "schemaVersion": 1,
      "name": "Puff of Poison",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "cantrip",
        "concentrate",
        "manipulate",
        "poison"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You exhale a shimmering cloud of toxic breath at an enemy's face. The target takes 1d4 poison damage and (ceil(@item.level/2))d4[persistent,poison], depending on its Fortitude save.\nCritical Success The creature is unaffected.\nSuccess The target takes half initial damage and no persistent damage.\nFailure The target takes full initial and persistent damage.\nCritical Failure The target takes double initial and persistent damage.\nHeightened (+2) The initial poison damage increases by 1d4, and the persistent poison damage increases by 1d4.",
      "castingTime": "2 actions",
      "range": "10 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": "fortitude save",
      "damage": [
        {
          "formula": "1d4",
          "type": "poison",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+2) The initial poison damage increases by 1d4, and the persistent poison damage increases by 1d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:gale-blast",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "dDiOnjcsBFbAvP6t",
      "slug": "gale-blast",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:13ed22f3f383dd68baf7a90f3bd15d4ccc3700368aa4fd87a62146fa569877ea",
    "translatableHash": "sha256:2c27a3fc3475ff595af9fd5f54227a90862523551214dfb6acb11d15e7599f7f",
    "data": {
      "schemaVersion": 1,
      "name": "Gale Blast",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "air",
        "cantrip",
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "Wind flows from your outstretched hands and whirls around you in a 5-foot emanation. Each creature in the area takes 1d6 bludgeoning damage, with a Fortitude save.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage.\nFailure The creature takes full damage and is pushed 5 feet away from you.\nCritical Failure The creature takes double damage and is pushed 10 feet away from you.\nHeightened (+1) The damage increases by 1d6.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "5 emanation",
      "duration": "",
      "defense": "fortitude save",
      "damage": [
        {
          "formula": "1d6",
          "type": "bludgeoning",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+1) The damage increases by 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:spout",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "eSL5hVT9gXrnRLtd",
      "slug": "spout",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:f9f2096edb8a8530d84c6484504200fe85534f2e044cfce1d6ddba8098607a20",
    "translatableHash": "sha256:85a8ab28bee636ff5aa234c103c3f14f3461a59d073ecebf8ca7e01672012118",
    "data": {
      "schemaVersion": 1,
      "name": "Spout",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "cantrip",
        "concentrate",
        "manipulate",
        "water"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "Water blasts upward, coming out of the ground, rising from a pool, or even manifesting from thin air. Any creatures in the area take 2d4 bludgeoning damage, with a basic Reflex saving throw. A creature that critically fails its save is disoriented by the explosion of water, becoming Off-Guard until the end of your next turn.\nYou can change this spell's area to a @Template[burst|distance:5], provided you center the burst in a body of water. This body of water can be as small as a pond or creek, but not as small as a puddle or bathtub.\nHeightened (+1) The damage increases by 1d4.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "",
      "area": "5 cube",
      "duration": "",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "2d4",
          "type": "bludgeoning",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+1) The damage increases by 1d4."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 287,
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
          "sourceId": "eSL5hVT9gXrnRLtd",
          "name": "Spout",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:protector-tree",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "K9gI08enGtmih5X1",
      "slug": "protector-tree",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:3108e81ccf366bf82231f79573cd2f77819a5a65bcdba34a2c4a2cd011775dcc",
    "translatableHash": "sha256:3a6149ea3cce8fd7466702254c9ac9787de07130202b40f478d0f8f66f9a576f",
    "data": {
      "schemaVersion": 1,
      "name": "Protector Tree",
      "rank": 1,
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
      "description": "A Medium tree suddenly grows in an unoccupied square within range. The tree has AC 10 and 10 Hit Points. Whenever an ally adjacent to the tree is hit by a Strike, the tree interposes its branches and takes the damage first. Any additional damage beyond what it takes to reduce the tree to 0 Hit Points is dealt to the original target. The tree isn't large enough to impede movement through its square. If the tree is in soil and survives to the end of the spell's duration, it remains as an ordinary, non-magical tree and continues to grow and thrive. The GM might determine that the tree disappears immediately in certain inhospitable situations.\nHeightened (+1) The tree has an additional 10 Hit Points.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (+1) The tree has an additional 10 Hit Points."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:carryall",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "LvezN4a3kYf1OHMg",
      "slug": "carryall",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:248f32afccd82a23020643640769a6fcde21528f6f845897c6f2323e8829be95",
    "translatableHash": "sha256:d14040944b52d6d453bf616d48bf702ec89c67378cb354ca91b82c499df0d32b",
    "data": {
      "schemaVersion": 1,
      "name": "Carryall",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "force",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "A small platform of magical force materializes adjacent to you to carry cargo. It is Invisible or has a ghostly appearance, is 2 feet in diameter, and follows 5 feet behind you, floating just above the ground. It holds up to 5 Bulk of objects (if they can fit on it). Any objects atop the platform fall to the ground when the spell ends. You can Sustain the spell to move the platform up to 30 feet along the ground, to make it stay in place, or to have it return to you and resume following you. The spell ends if a creature tries to ride atop the platform, if the platform is overloaded, if anyone tries to lift or force the platform higher above the ground, or if you move more than 60 feet away from the platform.\nHeightened (4th) The platform can carry 10 Bulk, creatures can ride atop it, and it can hover in the air, not just on the ground",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "8 hours",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) The platform can carry 10 Bulk, creatures can ride atop it, and it can hover in the air, not just on the ground"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 88,
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
          "sourceId": "LvezN4a3kYf1OHMg",
          "name": "Carryall",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:invisible-item",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "nX85Brzax9f650aK",
      "slug": "invisible-item",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:3cc71af1a4ae70268641b9376cc89771ab4caa9c17737d6d6c67cbf01f2cc037",
    "translatableHash": "sha256:fb481d65fc4864ed204b93a1f5fb2f9d320a399499d8db0b4bda71f5b21d6563",
    "data": {
      "schemaVersion": 1,
      "name": "Invisible Item",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "illusion",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You make the object Invisible. This makes it Undetected to all creatures, though the creatures can attempt to find the target, making it Hidden to them instead if they succeed. If the item is used as part of a hostile action, the spell ends after that hostile action is completed. Making a weapon invisible typically doesn't give any advantage to the attack, except that an invisible thrown weapon or piece of ammunition can be used for an attack without necessarily giving information about the attacker's hiding place unless the weapon returns to the attacker.\nHeightened (3rd) The duration is until the next time you make your daily preparations.\nHeightened (7th) The duration is unlimited.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 object",
      "area": null,
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (3rd) The duration is until the next time you make your daily preparations.\nHeightened (7th) The duration is unlimited."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 23,
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
          "sourceId": "nX85Brzax9f650aK",
          "name": "Invisible Item",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 91,
        "uuid": "Compendium.pf2e.conditionitems.Item.Undetected",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Undetected",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Undetected",
          "sourceId": "VRSef5y1LmL2Hkjf",
          "name": "Undetected",
          "type": "condition"
        },
        "owner": {
          "sourceId": "nX85Brzax9f650aK",
          "name": "Invisible Item",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 226,
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
          "sourceId": "nX85Brzax9f650aK",
          "name": "Invisible Item",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:thoughtful-gift",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "qTr2oCgIXl703Whb",
      "slug": "thoughtful-gift",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/thoughtful-gift.webp"
    },
    "sourceHash": "sha256:fec7c1e345f5a532416ec8c1e8ef99906f82403014da5f75721234583673deb3",
    "translatableHash": "sha256:9d280d34b1af763aa82c92e94db1c70e25c855f62f3bdef0b72e3b29316fa57a",
    "data": {
      "schemaVersion": 1,
      "name": "Thoughtful Gift",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "manipulate",
        "teleportation"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult"
      ],
      "description": "You teleport one object of light or negligible Bulk held in your hand to the target. The object appears instantly in the target's hand if they have a free hand, or at their feet if they don't. The target knows what object you're attempting to send them. If the target is Unconscious or refuses to accept your gift, or if the spell would teleport a creature (even if the creature is inside an extradimensional container), the spell fails.\nHeightened (3rd) The spell's range increases to 500 feet.\nHeightened (5th) As 3rd rank, and the object's maximum Bulk increases to 1. You can Cast the Spell with 3 actions instead of 1; doing so increases the range to 1 mile, and you don't need line of sight to the target, but you must be extremely familiar with the target.",
      "castingTime": "1 action",
      "range": "120 feet",
      "target": "1 willing creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (3rd) The spell's range increases to 500 feet.\nHeightened (5th) As 3rd rank, and the object's maximum Bulk increases to 1. You can Cast the Spell with 3 actions instead of 1; doing so increases the range to 1 mile, and you don't need line of sight to the target, but you must be extremely familiar with the target."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 274,
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
          "sourceId": "qTr2oCgIXl703Whb",
          "name": "Thoughtful Gift",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:déjà-vu",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "rerNA6YZsdxuJYt3",
      "slug": "déjà-vu",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/deja-vu.webp"
    },
    "sourceHash": "sha256:19ec34634bf7fd0c13bb50c28762f9cff0bf4024669c3e7002de2729d40b0ee5",
    "translatableHash": "sha256:1be29cdd158b7125b0521d94951a5a71ea8f016c1494931dcbef48c6e0ce5c54",
    "data": {
      "schemaVersion": 1,
      "name": "Déjà Vu",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "incapacitation",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You loop a thought process in the target's mind, forcing it to repeat a moment's worth of actions. The target must attempt a Will save. If the target fails, whatever actions the target uses on its next turn, it must repeat on its following turn. The actions must be repeated in the same order and as close to the same specifics as possible. For example, if the target makes an attack, it must repeat the attack against the same creature, if possible, and if the target moves, it must move the same distance and direction, if possible, on its next turn.\nIf the target can't repeat an action, such as Casting a Spell that has been exhausted or needing to target a creature that has died, it can act as it chooses for that action but becomes Stupefied 1 until the end of its turn.",
      "castingTime": "2 actions",
      "range": "100 feet",
      "target": "1 creature",
      "area": null,
      "duration": "2 rounds",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 749,
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
          "sourceId": "rerNA6YZsdxuJYt3",
          "name": "Déjà Vu",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:concordant-choir",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "TSyFZNAbqfkRrcq0",
      "slug": "concordant-choir",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:59a574da017fde6f4834730e73d454bb7f9e127764118d9206feec9eb7cfe424",
    "translatableHash": "sha256:742f84fdff7f1a05eaea94649b8ecc693fcb5264d78c2f9e3ac5d93fbbb63152",
    "data": {
      "schemaVersion": 1,
      "name": "Concordant Choir",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "sonic"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "You unleash a dangerous consonance of reverberating sound, focusing on a single target or spreading out to damage many foes. The number of actions you spend Casting this Spell determines its targets, range, area, and other parameters.\n1 The spell deals 1d4 sonic damage to a single enemy, with a basic Fortitude save.\n2 (manipulate) The spell deals 2d4 sonic damage to all creatures in a @Template[burst|distance:10], with a basic Fortitude save.\n3 (manipulate) The spell deals 2d4 sonic damage to all creatures in a @Template[emanation|distance:30], with a basic Fortitude save.\nHeightened (+1) The damage increases by 1d4 for the 1-action version, or 2d4 for the other versions.",
      "castingTime": "1 to 3 actions",
      "range": "30 feet",
      "target": "varies",
      "area": null,
      "duration": "",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "2d4",
          "type": "sonic",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+1) The damage increases by 1d4 for the 1-action version, or 2d4 for the other versions."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:live-wire",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Vbj8bTQ1nwrOBbYF",
      "slug": "live-wire",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:ffd46edb2b2211996a74bcc19e92a913a2cdcb129859c67ce8b5954126ee455d",
    "translatableHash": "sha256:c64dc115cfceed68bf27ec255a79c138e26a48260adc26e03247fa00dffa0021",
    "data": {
      "schemaVersion": 1,
      "name": "Live Wire",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "attack",
        "cantrip",
        "concentrate",
        "electricity",
        "manipulate",
        "metal"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You conjure up a length of sharp copper filament humming with electrical current that strikes out at your foe. The wire deals 1d4 slashing damage and 1d4 electricity damage, depending on your spell attack roll against the target's AC.\nCritical Success The target takes double damage and (ceil(@item.rank / 2))d4[persistent,electricity] damage.\nSuccess The target takes full damage.\nFailure The target takes the electricity damage, but not the slashing damage.\nCritical Failure The target is unaffected.\nHeightened (+2) The slashing damage, initial electricity damage, and persistent electricity damage on a critical hit each increase by 1d4.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [
        {
          "formula": "1d4",
          "type": "slashing",
          "kind": "damage"
        },
        {
          "formula": "1d4",
          "type": "electricity",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+2) The slashing damage, initial electricity damage, and persistent electricity damage on a critical hit each increase by 1d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:bullhorn",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "W02bHXylIpoXbO4e",
      "slug": "bullhorn",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:b9b8452a89e56d32c36901ebf2d9dc106556b347caf63733928b3185a13a2765",
    "translatableHash": "sha256:d67d9b311f12ce0943d531b28a45cd3c4f205711b0041b9164a1a1e0f64c4fa2",
    "data": {
      "schemaVersion": 1,
      "name": "Bullhorn",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "auditory",
        "cantrip",
        "concentrate",
        "illusion",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult"
      ],
      "description": "You amplify your voice, loud enough for you to be heard easily at a great distance. For the duration, your voice can be heard loudly and clearly by all listeners within 500 feet, even if other ambient noise would otherwise block the sound. Despite the volume, this doesn't make your voice jarring or distracting. This doesn't increase the range or area of other auditory or linguistic effects, and physical barriers such as walls and doors still block or muffle your voice as normal.\nYour loud voice makes it easier to Coerce others, and the acoustics assist in Performing at a large venue. You gain a +1 status bonus to checks to Coerce and auditory Performance checks to Perform at a large venue. You can Dismiss the spell.\nSpell Effect: Bullhorn\nHeightened (5th) Your voice can be heard clearly up to 1,200 feet away.\nHeightened (7th) Your voice can be heard clearly up to 1 mile away.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (5th) Your voice can be heard clearly up to 1,200 feet away.\nHeightened (7th) Your voice can be heard clearly up to 1 mile away."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 529,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Coerce",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Coerce",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Coerce",
          "sourceId": "tHCqgwjtQtzNqVvd",
          "name": "Coerce",
          "type": "action"
        },
        "owner": {
          "sourceId": "W02bHXylIpoXbO4e",
          "name": "Bullhorn",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 723,
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
          "sourceId": "W02bHXylIpoXbO4e",
          "name": "Bullhorn",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 823,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Bullhorn",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Bullhorn",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Bullhorn",
          "sourceId": "9yzlmYUdvdQshTDF",
          "name": "Spell Effect: Bullhorn",
          "type": "effect"
        },
        "owner": {
          "sourceId": "W02bHXylIpoXbO4e",
          "name": "Bullhorn",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:imprint-message",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "WJOQryAODgYmrL6g",
      "slug": "imprint-message",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:608afeacf90435459cb7ee6dc084c3c07d39681ad271ff28cef5730b45e4430e",
    "translatableHash": "sha256:56e0ca7da521afd35af76c9808055b94a15a13b3db91c093683806bcef8319bc",
    "data": {
      "schemaVersion": 1,
      "name": "Imprint Message",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "occult"
      ],
      "description": "You project psychic vibrations onto the target object, imprinting it with a short message or emotional theme of your design. This imprinted sensation is revealed to a creature who casts Object Reading on the target object, replacing any emotional events the item was present for. If the object is in the area of a Retrocognition spell, the imprinted messages appear as major events in the timeline, but they don't interfere with any other visions.\nIf the object is targeted with Read Aura of a higher spell rank than imprint message, the caster learns that the object has been magically modified. When you Cast this Spell, any prior vibrations placed on an object by previous castings of imprint message fade.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 object",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 189,
        "uuid": "Compendium.pf2e.spells-srd.Item.Object Reading",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Object Reading",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Object Reading",
          "sourceId": "5LYi9Efs6cko4GGL",
          "name": "Object Reading",
          "type": "spell"
        },
        "owner": {
          "sourceId": "WJOQryAODgYmrL6g",
          "name": "Imprint Message",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 356,
        "uuid": "Compendium.pf2e.spells-srd.Item.Retrocognition",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Retrocognition",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Retrocognition",
          "sourceId": "rsZ5c0AUyywe5yoK",
          "name": "Retrocognition",
          "type": "spell"
        },
        "owner": {
          "sourceId": "WJOQryAODgYmrL6g",
          "name": "Imprint Message",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 567,
        "uuid": "Compendium.pf2e.spells-srd.Item.Read Aura",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Read Aura",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Read Aura",
          "sourceId": "OhD2Z6rIGGD5ocZA",
          "name": "Read Aura",
          "type": "spell"
        },
        "owner": {
          "sourceId": "WJOQryAODgYmrL6g",
          "name": "Imprint Message",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 742,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Cast a Spell",
        "label": "Cast this Spell",
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Cast a Spell",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Cast a Spell",
          "sourceId": "aBQ8ajvEBByv45yz",
          "name": "Cast a Spell",
          "type": "action"
        },
        "owner": {
          "sourceId": "WJOQryAODgYmrL6g",
          "name": "Imprint Message",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:mud-pit",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "yAiSNmz39qXOIlco",
      "slug": "mud-pit",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/mud-pit.webp"
    },
    "sourceHash": "sha256:fb155981530c223219f82be94108a4e9b7bf03ee7cfcb271e5ef53cdbe9a43dc",
    "translatableHash": "sha256:177629d13c109ce033cc3a0b55e4e8b941bb1cb90dc9fa752f18a612e6f365b5",
    "data": {
      "schemaVersion": 1,
      "name": "Mud Pit",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "earth",
        "manipulate",
        "water"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "Thick, clinging mud covers the ground, 1 foot deep. The mud is difficult terrain.",
      "castingTime": "3 actions",
      "range": "60 feet",
      "target": "",
      "area": "15 burst",
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:scatter-scree",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "zA0jNIBRgLsyTpbm",
      "slug": "scatter-scree",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/scatter-scree.webp"
    },
    "sourceHash": "sha256:fe6c5f77e60017c3442bed1af5a903075dd0af270118b3fb1b2dd85857e2e671",
    "translatableHash": "sha256:f47925045fc604e3b0ef63fafacfa1f18ddbec4c9af827f4f204ec91386e3ed7",
    "data": {
      "schemaVersion": 1,
      "name": "Scatter Scree",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "cantrip",
        "concentrate",
        "earth",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "A jumble of rocks cascades into the area. The scattering rocks deal 2d4 bludgeoning damage (basic Reflex save). The ground in the area becomes difficult terrain for the duration of the spell. A creature can Interact to clear a square of this scree.\nIf you cast this spell again, any previous scatter scree you've cast ends.\nHeightened (+1) The damage increases by 1d4.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "",
      "area": "10 line",
      "duration": "1 minute",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "2d4",
          "type": "bludgeoning",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+1) The damage increases by 1d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:spirit-sense",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "3ehSrqTAm7IPqbIZ",
      "slug": "spirit-sense",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/spirit-sense.webp"
    },
    "sourceHash": "sha256:c9db235d9763196788100625a344c7de872deb392361ce03a44e572262d189db",
    "translatableHash": "sha256:b5a9075987f9318a863f95807cedd05909d26332efd754acda658a4fb80cd348",
    "data": {
      "schemaVersion": 1,
      "name": "Spirit Sense",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "detection",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "You open your mind to the metaphysical, enabling you to sense nearby spirits. Even if you aren't Searching, you get a check to find haunts and spirits in the area. You gain a +1 status bonus to the following checks regarding haunts or spirits: Perception checks to Seek, attempts to Recall Knowledge, skill checks to determine the reason for their existence, and skill checks to disable a haunt. You also gain a +1 status bonus to AC and saving throws against haunts and spirits.\nHeightened (6th) The spell's duration lasts until the next time you make your daily preparations.\nSpell Effect: Spirit Sense",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "30 emanation",
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (6th) The spell's duration lasts until the next time you make your daily preparations.\nSpell Effect: Spirit Sense"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 100,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Search",
        "label": "Searching",
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Search",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Search",
          "sourceId": "TiNDYUGlMmxzxBYU",
          "name": "Search",
          "type": "action"
        },
        "owner": {
          "sourceId": "3ehSrqTAm7IPqbIZ",
          "name": "Spirit Sense",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 316,
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
          "sourceId": "3ehSrqTAm7IPqbIZ",
          "name": "Spirit Sense",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 705,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Spirit Sense",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Spirit Sense",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Spirit Sense",
          "sourceId": "uHUcP59Z5fAdomda",
          "name": "Spell Effect: Spirit Sense",
          "type": "effect"
        },
        "owner": {
          "sourceId": "3ehSrqTAm7IPqbIZ",
          "name": "Spirit Sense",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:fungal-infestation",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "3VxVbZqIRvpKkg3O",
      "slug": "fungal-infestation",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:1d13f30804d42d9419c99811c3aeb6b3583d6548d23cd57e6188475b273697a2",
    "translatableHash": "sha256:0f8d07ecf0c3428a96fae82825b636bacd04b6252979990e454822d5b36e7cc3",
    "data": {
      "schemaVersion": 1,
      "name": "Fungal Infestation",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "fungus",
        "manipulate",
        "poison"
      ],
      "traditions": [
        "primal"
      ],
      "description": "Toxic spores swarm over creatures in the area, causing them to erupt in grotesque fungal growths. These noxious growths deal 2d6 persistent poison damage, and each creature must attempt a Fortitude save.\nCritical Success The creature is unaffected.\nSuccess The target takes half the persistent poison damage.\nFailure The target takes the full persistent poison damage. While it's taking this persistent poison damage, it has weakness 1 to fire and weakness 1 to slashing.\nCritical Failure As failure, but double the persistent poison damage. While it's taking this persistent poison damage, it has weakness 2 to fire and weakness 2 to slashing.\nSpell Effect: Fungal Infestation\nHeightened (+2) The persistent damage increases by 2d6, and the weakness increases by 1, or by 2 on a critical failure.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "",
      "area": "15 cone",
      "duration": "",
      "defense": "fortitude save",
      "damage": [
        {
          "formula": "2d6",
          "type": "poison",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+2) The persistent damage increases by 2d6, and the weakness increases by 1, or by 2 on a critical failure."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 756,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Fungal Infestation",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Fungal Infestation",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Fungal Infestation",
          "sourceId": "6gRRjn0h0DAUh7nQ",
          "name": "Spell Effect: Fungal Infestation",
          "type": "effect"
        },
        "owner": {
          "sourceId": "3VxVbZqIRvpKkg3O",
          "name": "Fungal Infestation",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:web",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "9s5tqqXNzcoKamWx",
      "slug": "web",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:9eec9b4a1804e89cfde613edda372e4e6b2bf3ca5e9e17c261320839e8d347d0",
    "translatableHash": "sha256:940520757d7775fbeb86be5975cbf11719639529be20de5db1dfbd652bb7d1db",
    "data": {
      "schemaVersion": 1,
      "name": "Web",
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
      "description": "You create a sticky web in the area that impedes creatures' movement. Squares filled with the web are difficult terrain. Each time a creature in the web begins to use a move action or enters the web during a move action it's using, it must attempt an check (athletics) check or Reflex save against your spell DC to avoid taking a circumstance penalty to its Speeds or becoming Immobilized. A creature that gets out of the web ceases to take a circumstance penalty to its Speed from the web. Each square can be cleared of the web by a single attack or effect that deals at least 5 slashing damage or 1 fire damage. A square has AC 5, and it automatically fails its saving throws.\nCritical Success The creature is unaffected, and it doesn't need to attempt further Athletics checks or saving throws against the web this turn. If it used an Athletics check, it clears the web from every square it leaves during its movement.\nSuccess The creature is unaffected during its action. If it used an Athletics check, it clears the web from every square it leaves during its movement.\nFailure The creature takes a –10-foot circumstance penalty to its Speeds until the start of its next turn.\nCritical Failure The creature is immobilized until the start of its next turn, after which it takes a –10-foot circumstance penalty to its Speeds for 1 round. It can attempt to Escape to remove its immobilized condition.\nHeightened (4th) The spell's area increases to a @Template[burst|distance:20], and its range increases to 60 feet.",
      "castingTime": "3 actions",
      "range": "30 feet",
      "target": "",
      "area": "10 burst",
      "duration": "1 minute",
      "defense": "reflex save",
      "damage": [],
      "heightening": "Heightened (4th) The spell's area increases to a @Template[burst|distance:20], and its range increases to 60 feet."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
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
          "sourceId": "9s5tqqXNzcoKamWx",
          "name": "Web",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
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
          "sourceId": "9s5tqqXNzcoKamWx",
          "name": "Web",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:vomit-swarm",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "cB17yFc9456Pyfec",
      "slug": "vomit-swarm",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:c407d09e05a5072f934e84868cf9d9e8f08aa3e18c5bf05f2189f96748f669f3",
    "translatableHash": "sha256:d8c17335a7289144ee44e5a84cf3731067baaabd3575f8eef1b4c2268452213e",
    "data": {
      "schemaVersion": 1,
      "name": "Vomit Swarm",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult",
        "primal"
      ],
      "description": "You belch forth a swarm of magical vermin. You evoke and shape the creatures from your own imagination, allowing you to change the appearance of the creatures (typically a mix of centipedes, roaches, wasps, and worms), but this doesn't change the effect of the spell. The vermin swarm over anyone in the area, their bites and stings dealing 2d8 piercing damage (basic Reflex save). A creature that fails its saving throw also becomes Sickened 1. Once the spell ends, the swarm disappears.\nHeightened (+1) The damage increases by 1d8.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "30 cone",
      "duration": "",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "2d8",
          "type": "piercing",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+1) The damage increases by 1d8."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 437,
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
          "sourceId": "cB17yFc9456Pyfec",
          "name": "Vomit Swarm",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:reapers-lantern",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "dxOF7d5kAWusLKWF",
      "slug": "reapers-lantern",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/reapers-lantern.webp"
    },
    "sourceHash": "sha256:ace4c12ca58aafabfd4ac135737ce0f945c860eba5da06499d3a78d5836c5100",
    "translatableHash": "sha256:c71776e08767791c9b0d499155f5c195fe829e9d7679d03510922dbf2010b3f7",
    "data": {
      "schemaVersion": 1,
      "name": "Reaper's Lantern",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "aura",
        "concentrate",
        "death",
        "light",
        "manipulate"
      ],
      "traditions": [
        "divine",
        "occult",
        "primal"
      ],
      "description": "You call forth a ghostly lantern that guides the living toward death and the undead toward true death. It sheds bright light in the spell's area and dim light to twice that area. The lantern is insubstantial and floats near you, suspended from an ephemeral, skeletal hand. Living creatures and undead in the area when you Cast the Spell, or that enter the area later, must attempt Fortitude saves. Living creatures that fail their Fortitude saves gain only half the normal benefit from healing effects while within the area. Undead targets that fail their Fortitude saves become Enfeebled 1 while within the area. Once a creature attempts a save against reaper's lantern, it uses the same outcome if it leaves the area and enters it again.\nOnce per turn, starting on the round after you cast reaper's lantern, you can Sustain the spell to increase the emanation's radius by 5 feet. When you do so, you force creatures in the area that haven't yet attempted a save against reaper's lantern to attempt one.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "5 emanation",
      "duration": "1 minute",
      "defense": "fortitude save",
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 582,
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
          "sourceId": "dxOF7d5kAWusLKWF",
          "name": "Reaper's Lantern",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:blistering-invective",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "hoR6w8BqX2F35Tdx",
      "slug": "blistering-invective",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:e69b16d109063fa9905ee9526f312e1359c68d526e22c908067823f97ca79366",
    "translatableHash": "sha256:0f0f53cfc13f38a31d1fa17bdcf14bd7e6bcc8fae36acbb2e9cd3885d8932b0c",
    "data": {
      "schemaVersion": 1,
      "name": "Blistering Invective",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "auditory",
        "concentrate",
        "emotion",
        "fear",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "occult"
      ],
      "description": "A heap of insults and invectives spew from your mouth-words so devastating your foes burn from the intensity of your diatribe. Your words deal 2d6 persistent fire damage, and the target must attempt a Will save. If the target doesn't understand the language or you're not speaking a language, it gains a +4 circumstance bonus to its save.\nCritical Success The target is unaffected.\nSuccess The target takes half the persistent fire damage.\nFailure The target becomes Frightened 1 and takes the full persistent fire damage.\nCritical Failure The target becomes Frightened 2 and takes double the persistent fire damage.\nHeightened (+2) You can target two additional creatures, and the persistent damage increases by 2d6.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": "will save",
      "damage": [
        {
          "formula": "2d6",
          "type": "fire",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+2) You can target two additional creatures, and the persistent damage increases by 2d6."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 549,
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
          "sourceId": "hoR6w8BqX2F35Tdx",
          "name": "Blistering Invective",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 720,
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
          "sourceId": "hoR6w8BqX2F35Tdx",
          "name": "Blistering Invective",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:ghoulish-cravings",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "JhRuR7Jj3ViShpq7",
      "slug": "ghoulish-cravings",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:26461dd0bd57ed0a235ef4e3ecfc08fa4bbf5960fafd0366d7f143342ca378ae",
    "translatableHash": "sha256:9eae00987cd7dc007ce119faf63f6b90891ce0de004dd6218bf0b31a2c1300aa",
    "data": {
      "schemaVersion": 1,
      "name": "Ghoulish Cravings",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "curse",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "You touch the target to afflict it with the overwhelming desire to eat raw meat. The target must attempt a Will save.\nCritical Success The target is unaffected.\nSuccess The target is Sickened 1 by its unbidden hunger.\nFailure The target is Sickened 2 and can't reduce this condition below sickened 1 until it first consumes some raw meat; if the creature doesn't have access to raw meat, it can take a bite out of a corpse within reach as an Interact action.\nCritical Failure As failure, but the target can't reduce the condition below sickened 2 until it consumes raw meat.",
      "castingTime": "2 actions",
      "range": "touch",
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
        "sourceIndex": 239,
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
          "sourceId": "JhRuR7Jj3ViShpq7",
          "name": "Ghoulish Cravings",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 373,
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
          "sourceId": "JhRuR7Jj3ViShpq7",
          "name": "Ghoulish Cravings",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:dismantle",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "jW2asKFchuoxniSH",
      "slug": "dismantle",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/dismantle.webp"
    },
    "sourceHash": "sha256:6528a974164cefd3a2006d204a5bb0516f64e3257d293907b4c93e5e0f03c51c",
    "translatableHash": "sha256:e103fbbc69adcffd488003528812167f99929f1253524f89f6d7667c485225cb",
    "data": {
      "schemaVersion": 1,
      "name": "Dismantle",
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
      "description": "You touch an object, and it immediately disassembles itself into its component pieces. The spell fails if the target lacks component pieces (such as a statue carved from one block of stone), and using it on a dangerous object like a snare or trap typically triggers it. The object gains the Broken condition, and the component pieces become small enough to be Hidden under normal clothing and armor. You can Dismiss the spell.\nWhen the spell ends, the object reassembles itself into its original form, appearing in your hand or hands if you have them free, or on the ground in front of you otherwise. Once reassembled, the object loses the Broken condition and its Hit Points return to the value the object had when you Cast the Spell.\nHeightened (4th) The spell lasts for 10 minutes.\nHeightened (6th) The spell lasts until your next daily preparations.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 non-magical object in your possession of 1 Bulk or less",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) The spell lasts for 10 minutes.\nHeightened (6th) The spell lasts until your next daily preparations."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 294,
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
          "sourceId": "jW2asKFchuoxniSH",
          "name": "Dismantle",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 406,
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
          "sourceId": "jW2asKFchuoxniSH",
          "name": "Dismantle",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 497,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Dismiss",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Dismiss",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Dismiss",
          "sourceId": "AjLSHZSWQ90exdLo",
          "name": "Dismiss",
          "type": "action"
        },
        "owner": {
          "sourceId": "jW2asKFchuoxniSH",
          "name": "Dismantle",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 856,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Cast a Spell",
        "label": "Cast the Spell",
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Cast a Spell",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Cast a Spell",
          "sourceId": "aBQ8ajvEBByv45yz",
          "name": "Cast a Spell",
          "type": "action"
        },
        "owner": {
          "sourceId": "jW2asKFchuoxniSH",
          "name": "Dismantle",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:phantasmal-treasure",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "L0GoJpHxSD0wRY5k",
      "slug": "phantasmal-treasure",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:0088234b0189cd27c7d3d597adad375fb2776e6324c14b1b030652adb564cd57",
    "translatableHash": "sha256:f5357e476e57b827d29725065c2eae5e776338bed1762441e79893a0107a8877",
    "data": {
      "schemaVersion": 1,
      "name": "Phantasmal Treasure",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "emotion",
        "illusion",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "A phantasmal image of the most precious thing imaginable to the target appears in a location of your choice within the spell's range. Only the spell's target can see the treasure, though you can see the vague shape of the treasure-be it a pile of items, a deific avatar, or a cherished loved one or hero. The target's response to the treasure is based on the outcome of the target's Will save.\nCritical Success The target is unaffected.\nSuccess The target becomes Fascinated with the treasure, and the duration is until the end of its turn. The target can also try to disbelieve the illusion if it touches the treasure, Seeks to examine it, or speaks to it if the illusion appears to be a person or the like. If the target disbelieves the illusion, the spell ends.\nFailure As success, but the duration is 1 minute.\nCritical Failure As success, but the duration is 1 minute. The target finds the treasure so appealing that until the spell ends, it must spend each action focused on it. This can include moving toward the treasure if the target isn't next to it, and Interacting with the treasure if the target is next to it. (If the illusion appears to be a person or the like, the target can also Interact to converse with it.)",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "1 living creature",
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
        "sourceIndex": 520,
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
          "sourceId": "L0GoJpHxSD0wRY5k",
          "name": "Phantasmal Treasure",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 719,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Seek",
        "label": "Seeks",
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
          "sourceId": "L0GoJpHxSD0wRY5k",
          "name": "Phantasmal Treasure",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1258,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Interact",
        "label": "Interacting",
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Interact",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Interact",
          "sourceId": "pvQ5rY2zrtPI614F",
          "name": "Interact",
          "type": "action"
        },
        "owner": {
          "sourceId": "L0GoJpHxSD0wRY5k",
          "name": "Phantasmal Treasure",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:charitable-urge",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "UirEIHILQgip87qv",
      "slug": "charitable-urge",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:6924c37cf13174cfc03b54f8b20c37f3554df608a2f125d2aa5267fba6e71885",
    "translatableHash": "sha256:bf045f31f9a85a0a9fa661a688308bb759bc3ba91a578f84129d1135e98bfa55",
    "data": {
      "schemaVersion": 1,
      "name": "Charitable Urge",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "incapacitation",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult"
      ],
      "description": "You speak on the virtue of charity, compelling the target to give away its possessions. The target must attempt a Will save. If the target has no items on its person, the spell fails.\nCritical Success The target is unaffected.\nSuccess The target is Stunned 1 as it wrestles with the urge.\nFailure On its next turn, before it does anything else, the target must present the nearest creature with an item in its possession; the target chooses which item to give, and if the only item it has is one that it's currently using to defend itself, such as a weapon during a combat encounter, it can choose to be stunned for 1 round instead of giving up the item. This might require the target to Interact to retrieve an item or move to reach the nearest creature, and passing the item off requires an Interact action as normal.\nCritical Failure As failure, except the duration is 4 rounds, and the target must repeat the effects of a failure on each of its turns. At the end of each of its turns, the target can attempt a new Will save to reduce the remaining duration by 1 round, ending the effects entirely on a critical success.",
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
          "sourceId": "UirEIHILQgip87qv",
          "name": "Charitable Urge",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:animated-assault",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "WqPhJNzLa8vSjrH6",
      "slug": "animated-assault",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/animated-assault.webp"
    },
    "sourceHash": "sha256:38854775c9d8ebd24da43cf8364cc61cf6d6d2034801328def260b1d53334211",
    "translatableHash": "sha256:27076367e0f867be0aa6c6118e3e204b2bcdc857d709b26d9539e2b478e11749",
    "data": {
      "schemaVersion": 1,
      "name": "Animated Assault",
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
      "description": "You use your mind to manipulate unattended objects in the area, temporarily animating them to attack. The objects hover in the air, then hurl themselves at nearby creatures in a chaotic flurry of debris. This assault deals 2d10 bludgeoning damage (basic Reflex save) to each creature in the area. On subsequent rounds, the first time each round you Sustain this Spell, it deals (floor(@item.level/2))d10[bludgeoning] damage (basic Reflex save) to each creature in the area.\nHeightened (+2) The initial damage increases by 2d10 and the subsequent damage increases by 1d10.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "",
      "area": "10 burst",
      "duration": "1 minute",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "2d10",
          "type": "bludgeoning",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+2) The initial damage increases by 2d10 and the subsequent damage increases by 1d10."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:final-sacrifice",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "x0rWq0wS06dns4G2",
      "slug": "final-sacrifice",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:1b7730d27eb5aec9e25b71b3f8a22f550016e46a85f4cb9498f30599b46d3246",
    "translatableHash": "sha256:21c8173f3115efb8e7d74d5afb7b6782f1eb1e6daec2f382a5bf0ca50dd1915d",
    "data": {
      "schemaVersion": 1,
      "name": "Final Sacrifice",
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
        "occult",
        "primal"
      ],
      "description": "You channel disruptive energies through the bond between you and your minion, causing it to violently explode. The target is immediately slain, and the explosion deals 6d6 fire damage to creatures within 20 feet of it with a basic Reflex save. If the target has the cold or water trait, the spell deals cold damage and has the cold trait instead of the fire trait. Attempting to cast this spell targeting a creature that you temporarily seized control of, such as an undead commanded by bind undead, automatically fails and breaks the controlling effect.\nHeightened (+1) The damage increases by 2d6.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "1 creature with the minion trait that you summoned or permanently control",
      "area": "20 emanation",
      "duration": "",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "6d6",
          "type": "fire",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+1) The damage increases by 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:sudden-blight",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "XFtO4BBI22Uox2QP",
      "slug": "sudden-blight",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:34504369e6f3f4ed08e500467b020651f462eab03a7e47cc3e76dadd92136400",
    "translatableHash": "sha256:5904ddd14d797ab914b0bc81d534edcbc5fb84f9a97880020381c25cdc513b9e",
    "data": {
      "schemaVersion": 1,
      "name": "Sudden Blight",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "void"
      ],
      "traditions": [
        "divine",
        "primal"
      ],
      "description": "You accelerate the processes of decay in the area. Each living creature in the area takes 2d10 void damage with a basic Fortitude save. A creature afflicted by a disease takes a –2 circumstance penalty to this save. You can also direct the blight to rot all Small and Tiny non-creature plants in the area, eliminating non-magical undergrowth and any resulting difficult terrain, cover, and concealment. Sudden blight attempts to counteract any magical effect on the plants before withering them.\nHeightened (+1) The damage increases by 1d10.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "",
      "area": "20 burst",
      "duration": "",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "2d10",
          "type": "void",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+1) The damage increases by 1d10."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:gravity-well",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "06pzGkKTyPE3tHR8",
      "slug": "gravity-well",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/gravity-well.webp"
    },
    "sourceHash": "sha256:76b19f188074dff347da47f17a8bfa2a390383bcde6e16970b6653c8c2718730",
    "translatableHash": "sha256:a545e6017f0e1933c6cd7573c654679fef5c6b97d7b257d90ebe1f0d18599312",
    "data": {
      "schemaVersion": 1,
      "name": "Gravity Well",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You create a sphere of altered gravity. All creatures and unsecured objects in the area move towards the center, depending on their Reflex saving throws. This follows the rules for forced movement. If there's not enough space near the center of the sphere, creatures and objects nearer to the center move first, and others move as far as they can without being blocked, up to the amount set by their saving throw outcomes.\nCritical Success The creature is unaffected.\nSuccess The creature moves 5 feet toward the center.\nFailure The creature moves 15 feet toward the center.\nCritical Failure The creature moves 30 feet toward the center.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "",
      "area": "30 burst",
      "duration": "",
      "defense": "reflex save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:rouse-skeletons",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "0JWyMwVnLxX9CDYQ",
      "slug": "rouse-skeletons",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/rouse-skeletons.webp"
    },
    "sourceHash": "sha256:8fbcbb0f65efc36aa73fc623b052ba83cace31987ef1a24e87c38ac827ac1dcb",
    "translatableHash": "sha256:56e6a0f27ac0d569b6085daea462bfdb293037bec2e867e2b96f82dd9b6f3a4f",
    "data": {
      "schemaVersion": 1,
      "name": "Rouse Skeletons",
      "rank": 3,
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
      "description": "Misshapen skeletal forms erupt from a solid surface, such as a stone floor, and fill the burst. The area they fill is difficult terrain. Their grasping claws deal 2d6 slashing damage to creatures on the ground in the area when the skeletons first appear with a basic Reflex save.\nOn subsequent rounds, the first time you Sustain the Spell each round, you can move the area of skeletons up to 20 feet within the range of the spell and deal 2d6 slashing damage with a basic Reflex save to each creature in the new area.\nDamaging or destroying the skeletons is irrelevant, as new bones pull forth from the ground to repair and replace any that are obliterated.\nHeightened (+2) The damage increases by 1d6.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "",
      "area": "10 burst",
      "duration": "1 minute",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "2d6",
          "type": "slashing",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+2) The damage increases by 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:animal-vision",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "1HfusQ8NDWutGvMx",
      "slug": "animal-vision",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:ac4dab00ac6f1b69dacc26d3ebb2bf455d25d615bf88f3695b7c47e78284ba13",
    "translatableHash": "sha256:195ef42b6f9151457d9b951b4476f53efbfc723c0a20396d619ea1994d985343",
    "data": {
      "schemaVersion": 1,
      "name": "Animal Vision",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "primal"
      ],
      "description": "You tap into the target's senses, allowing you to sense whatever it senses for the spell's duration. If the target wishes to prevent you from doing so, it can attempt a Will save, negating the spell on a success, but most animals don't bother to do so. While tapping into the target's senses, you can't use your own body's senses, but you can change back and forth from your body's senses to the target's senses using a Sustain action.",
      "castingTime": "1 minute",
      "range": "120 feet",
      "target": "1 animal",
      "area": null,
      "duration": "1 hour",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:familiars-face",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "9GkOWDFDEMuV3hJr",
      "slug": "familiars-face",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/familiars-face.webp"
    },
    "sourceHash": "sha256:0fd46c4232727866e233f84d1d93568a841e26002427afeee4c4db5fb3731325",
    "translatableHash": "sha256:978dd5d061654130960c7f74fe131f2704d6f15810667610ea85c2508dfb4d75",
    "data": {
      "schemaVersion": 1,
      "name": "Familiar's Face",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "scrying"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult",
        "primal"
      ],
      "description": "The target becomes a scrying sensor, allowing you to see through its eyes, smell what it smells, and similarly use its other senses. If you Cast a Spell with the revelation trait that affects your senses, such as See the Unseen, while this spell is active, you gain the benefit of the spell through the target's senses instead of your own. You can also speak through the target with a voice much like yours, though it takes on some of the timbre and character of the target's growls or squawks. You can use Command an Animal on the target as part of Sustaining this spell. You don't need line of sight or line of effect to your target when you Cast this Spell.",
      "castingTime": "2 actions",
      "range": "1 mile",
      "target": "1 willing creature that's your animal companion or familiar",
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
        "sourceIndex": 216,
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
          "sourceId": "9GkOWDFDEMuV3hJr",
          "name": "Familiar's Face",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:curse-of-lost-time",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "B3eLlbaPxOYHcs1o",
      "slug": "curse-of-lost-time",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:40db3928b053072b98038a583a8c69af27551fe005274224e0713f666532e5a5",
    "translatableHash": "sha256:40c9639068b419fb1eca7cf2836acde303dd17f8e7fee0684a65313f50112025",
    "data": {
      "schemaVersion": 1,
      "name": "Curse of Lost Time",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "concentrate",
        "curse",
        "manipulate",
        "void"
      ],
      "traditions": [
        "arcane",
        "occult",
        "primal"
      ],
      "description": "You curse the target with rapid aging or erosion. The effect depends on whether the target is an object, a construct, or a living creature. Artifacts, along with objects and constructs made of precious materials (as determined by the GM), are immune.\n• Object If the object is attended, its bearer can attempt a Fortitude save. If the bearer fails or the object is unattended, the object immediately takes 4d6 damage (applying Hardness normally) and the item is cursed with an unlimited duration. Until the curse ends, the item becomes shoddy and can't be Repaired, and the curse attempts to counteract any spell that would restore the object's Hit Points. Cleanse Affliction can target an item affected by this spell.\n• Construct The construct takes 4d6 damage (basic Fortitude save). On a failure, for 1 hour the construct is Clumsy 1, is Enfeebled 1, and can't be Repaired, and the curse attempts to counteract any spell that would restore the construct's Hit Points. On a critical failure, these effects have an unlimited duration.\n• Living Creature The living creature must attempt a Fortitude save. Ageless creatures are immune.\n• Critical Success The living creature is unaffected.\n• Success The living creature briefly ages, becoming clumsy 1 and enfeebled 1 for 1 round.\n• Failure As success, with a duration of 1 hour.\n• Critical Failure As success, with an unlimited duration.\nHeightened (+1) The damage increases by 1d6.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 Large or smaller object, construct, or living creature",
      "area": null,
      "duration": "varies",
      "defense": "fortitude save",
      "damage": [
        {
          "formula": "4d6",
          "type": "untyped",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+1) The damage increases by 1d6."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 594,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Repair",
        "label": "Repaired",
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
          "sourceId": "B3eLlbaPxOYHcs1o",
          "name": "Curse of Lost Time",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 743,
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
          "sourceId": "B3eLlbaPxOYHcs1o",
          "name": "Curse of Lost Time",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 977,
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
          "sourceId": "B3eLlbaPxOYHcs1o",
          "name": "Curse of Lost Time",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1041,
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
          "sourceId": "B3eLlbaPxOYHcs1o",
          "name": "Curse of Lost Time",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:shared-invisibility",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "I0j56TNRmGcTyoqJ",
      "slug": "shared-invisibility",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/invisibility-sphere.webp"
    },
    "sourceHash": "sha256:679dfdcfa6956d992a72ea7f62b9fe230ac30e8a168b7aabf9f6474f4a9e1cff",
    "translatableHash": "sha256:e20659a30cd7e124a08e7224cb986dc014866646d01469cdbe167be66aedaed8",
    "data": {
      "schemaVersion": 1,
      "name": "Shared Invisibility",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "aura",
        "illusion",
        "manipulate",
        "subtle"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You and all targets are Invisible except to each other as long as the targets remain within the emanation. If a creature made invisible by this spell leaves the spell's area, it becomes visible and remains so even if it returns to the spell's area. If any creature made invisible by this spell uses a hostile action, the spell ends after the hostile action is completed.\nHeightened (5th) The targets increase to you and up to 10 willing creatures. The duration increases to 1 hour.",
      "castingTime": "2 actions",
      "range": "",
      "target": "you and up to 5 willing creatures",
      "area": "30 emanation",
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (5th) The targets increase to you and up to 10 willing creatures. The duration increases to 1 hour."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 27,
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
          "sourceId": "I0j56TNRmGcTyoqJ",
          "name": "Shared Invisibility",
          "type": "spell"
        }
      }
    ]
  }
]
