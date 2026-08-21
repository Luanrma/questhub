import type { Pathfinder2eOriginalContentRecord } from '../../records'
import type { Pathfinder2eSpellData } from '../types'

export const PATHFINDER_2E_EXHAUSTIVE_27_SPELL_ORIGINALS: readonly Pathfinder2eOriginalContentRecord<Pathfinder2eSpellData>[] = [
  {
    "contentId": "pf2e:spell:spells-srd:physical-boost",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "1lmzILdCFENln8Cy",
      "slug": "physical-boost",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/physical-boost.webp"
    },
    "sourceHash": "sha256:b266e443b7f55f2091f16efee5b0fb0a056f136d13edfade51f34629ccd90624",
    "translatableHash": "sha256:afa3a2ccbe4ebc58e036a7c04ec9503cc77d8d20be9e1d45f7085f6d94efad35",
    "data": {
      "schemaVersion": 1,
      "name": "Physical Boost",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "wizard"
      ],
      "traditions": [],
      "description": "You temporarily improve the target's physique. The target gains a +2 status bonus to the next Acrobatics check, Athletics check, Fortitude save, or Reflex save it attempts.\nSpell Effect: Physical Boost",
      "castingTime": "1 action",
      "range": "touch",
      "target": "1 living creature",
      "area": null,
      "duration": "until the end of the target's next turn",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:call-of-the-grave",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "BH3sUerzMb2bWnv1",
      "slug": "call-of-the-grave",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:2e2722092c8f79cd42ba72f5fe32c44cdac01a9891f97225af232eed6e7b5449",
    "translatableHash": "sha256:86b565fed01e3c6ecd62a920221955e8196643726279730115c644a1bde8ff26",
    "data": {
      "schemaVersion": 1,
      "name": "Call of the Grave",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "attack",
        "concentrate",
        "focus",
        "manipulate",
        "wizard"
      ],
      "traditions": [],
      "description": "You fire a ray of sickening energy. Make a spell attack roll.\nCritical Success The target becomes Sickened 2 and Slowed 1 as long as it's Sickened.\nSuccess The target becomes Sickened 1.\nFailure The target is unaffected.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 living creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:warped-terrain",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "fXdADBwxmBsU9xPk",
      "slug": "warped-terrain",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:d4b234ee87b5d4be58065c7d380197802c06fb2303db9c24e564b5612daffe84",
    "translatableHash": "sha256:f38d85457e1a413a902cbb8a59801008a96e47048dec921202f3e7acab87e67b",
    "data": {
      "schemaVersion": 1,
      "name": "Warped Terrain",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "illusion",
        "manipulate",
        "visual",
        "wizard"
      ],
      "traditions": [],
      "description": "You create illusory hazards that cover all surfaces in the area (typically the ground). Any creature moving through the illusion treats the squares as difficult terrain. A creature can attempt to disbelieve the effect as normal after using a Seek action or otherwise spending actions interacting with the illusion. If it successfully disbelieves, it ignores the effect for the remaining duration. For each additional action you use casting the spell, the burst's radius increases by 5 feet, to a maximum of 10 extra feet for 3 actions.\nHeightened (4th) You can make the illusion appear in the air rather than on a surface, causing it to function as difficult terrain for flying creatures.",
      "castingTime": "1 to 3 actions",
      "range": "60 feet",
      "target": "",
      "area": "5 burst",
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) You can make the illusion appear in the air rather than on a surface, causing it to function as difficult terrain for flying creatures."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:forced-quiet",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "k43PIYwuQqjeJ3S3",
      "slug": "forced-quiet",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:f648e8a89039059bbab773a6fe3b0c46ed3649150c01f338b1c38b4349a21a39",
    "translatableHash": "sha256:af519110d1167cad5017ecd7afbc50bd63a307899510616eac86bd3061fb45ec",
    "data": {
      "schemaVersion": 1,
      "name": "Forced Quiet",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "You quiet the target's voice, preventing it from giving away valuable secrets. This doesn't prevent the target from talking or providing verbal spell components, but no creature more than 10 feet away can hear its whispers without succeeding at a Perception check against your spell DC, which might interfere with auditory or linguistic effects as well as communication. The spell's duration depends on the target's Fortitude save. After attempting its save, the target becomes temporarily immune for 24 hours.\nCritical Success The target is unaffected.\nSuccess The duration is 1 round.\nFailure The duration is 1 minute.\nCritical Failure The duration is 10 minutes.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "varies",
      "defense": "fortitude save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:diviners-sight",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "oFwmdb6LlRrh9AUT",
      "slug": "diviners-sight",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:6694b9320746148836335a5f383d06ce187553105a4b4196ede3bcd281c97595",
    "translatableHash": "sha256:d4993aaff7a356bf4f5464e4b92ac8d112175572522e9be36e5ba49ed89ab2d2",
    "data": {
      "schemaVersion": 1,
      "name": "Diviner's Sight",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "fortune",
        "wizard"
      ],
      "traditions": [],
      "description": "You glimpse into the target's future. Roll a d20; when the target attempts a non-secret saving throw or skill check, it can use the number you rolled instead of rolling, and the spell ends. Alternatively, you can instead reveal the result of the die roll for one of the target's secret checks during the duration, and the spell ends. Casting it again ends any active diviner's sight you have cast, as well as any active diviner's sight on the target.",
      "castingTime": "1 action",
      "range": "30 feet",
      "target": "1 willing living creature",
      "area": null,
      "duration": "until the end of your next turn",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:extend-spell",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "GxxnhRIaoGKtu1iO",
      "slug": "extend-spell",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/extend-spell.webp"
    },
    "sourceHash": "sha256:91e2b30e725f7e6000156fcf0854ae2dbb4bb302ad36ea861c970c7f046de34a",
    "translatableHash": "sha256:ec96cd824a56f8f8c239d62bf52cbeb9e1a03ee080568b0fd08fc23e2bb5cd65",
    "data": {
      "schemaVersion": 1,
      "name": "Extend Spell",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "sorcerer",
        "spellshape"
      ],
      "traditions": [],
      "description": "You call upon your blood's knowledge of the ancients to extend your magic. If your next action is to Cast a Spell with a duration of 1 minute on a single target, the spell instead lasts 10 minutes. You can extend a spell only if you cast it from a spell slot lower than your highest spell slot, and you can have only one active spell at a time extended in this way.",
      "castingTime": "1 action",
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
    "contentId": "pf2e:spell:spells-srd:vital-luminance",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "8XuNn0h0rHE24m3B",
      "slug": "vital-luminance",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/positive-luminance.webp"
    },
    "sourceHash": "sha256:cb17996d8ee8f8a8e3194b657d33b7a1dc900430d067b88b35102dcd3c729eba",
    "translatableHash": "sha256:042a2dbda5cb4adc63013e5dc3bf45ccf9f9266cd397ecc8e4c2cb80a2c7954a",
    "data": {
      "schemaVersion": 1,
      "name": "Vital Luminance",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "aura",
        "cleric",
        "focus",
        "light",
        "manipulate",
        "vitality"
      ],
      "traditions": [],
      "description": "Drawing life force into yourself, you become a beacon of vitality. You glow with bright light in a 30-foot emanation (and dim light to the next 30 feet), and you gain an internal pool of light called a luminance reservoir, which begins with a value of 4. At the start of each of your turns, increase your reservoir by 4.\nIf an undead creature damages you with an attack or spell while it's within the bright light of your aura, that creature takes vitality damage equal to half your luminance reservoir value. It takes this damage only the first time it damages you in a round.\nYou can Dismiss this Spell. When you do, you can target a creature within your light and direct the vital energy into it. The target must be a willing living creature or an undead creature. This heals a living target or deals vitality damage to an undead target equal to your luminance reservoir's value.\nIf you Cast this Spell again, any previous casting ends.\nSpell Effect: Vital Luminance\nHeightened 1 Both the initial value of your luminance reservoir and the amount you gain each turn increase by 1.",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 Both the initial value of your luminance reservoir and the amount you gain each turn increase by 1."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:darkened-eyes",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "oiUhJbJ3YCKF62Fu",
      "slug": "darkened-eyes",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/darkened-eyes.webp"
    },
    "sourceHash": "sha256:96f7b6a1bf79d296f227351b628557c3575a4d72b396eaa7e533233c3c9f3e2d",
    "translatableHash": "sha256:25bbef43922e7e2cd98929149509303fa714994fb311c7e2b2c4570c329d5935",
    "data": {
      "schemaVersion": 1,
      "name": "Darkened Eyes",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "darkness",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "You infuse a creature's vision with darkness. After attempting its save, the target becomes temporarily immune for 24 hours.\nCritical Success The target is unaffected.\nSuccess The target's darkvision or low-light vision is suppressed for 1 round.\nFailure As success, but the duration is 1 minute.\nCritical Failure As success, but the duration is 1 minute, and the target is also Blinded for the duration. It can attempt a new save at the end of each of its turns. If it succeeds, it's no longer Blinded, but its darkvision or low-light vision remains suppressed.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "1 creature",
      "area": null,
      "duration": "varies",
      "defense": "fortitude save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:elemental-tempest",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "vfHr1N8Rf2bBpdgn",
      "slug": "elemental-tempest",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/elemental-tempest.webp"
    },
    "sourceHash": "sha256:73fe198a9ab050213992dadb19dc12db62f9c094a6ce3f8e091e411c569efbc6",
    "translatableHash": "sha256:86b508a35a92e924d385f7655dccded7fe4d6f1f58238e7084972b7179784119",
    "data": {
      "schemaVersion": 1,
      "name": "Elemental Tempest",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "spellshape",
        "wizard"
      ],
      "traditions": [],
      "description": "Your spellcasting surrounds you in a storm of elemental energy.\nIf the next action you take is to Cast a Spell from your wizard spell slots that's an evocation spell dealing acid, cold, electricity, or fire damage, a 10-foot emanation of energy surrounds you as you cast the spell.\nFoes in the area take 1d6 damage per spell rank of the spell you just cast of the same damage type the spell deals (choose one if it deals multiple types). Combine the damage from both elemental tempest and the other spell against foes who take damage from both before applying bonuses, penalties, resistance, weakness, and the like.",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": "10 emanation",
      "duration": "",
      "defense": null,
      "damage": [
        {
          "formula": "1d6",
          "type": "untyped",
          "kind": "damage"
        }
      ],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:dimensional-steps",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "zjG6NncHyAKqSF7m",
      "slug": "dimensional-steps",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/dimensional-step.webp"
    },
    "sourceHash": "sha256:3bfc49db247fb03c6edad3ef893747dad209914b3e2030214d43f00a2123c127",
    "translatableHash": "sha256:8d84dbbce2650e5b78f7a0e4d7861a465b9d7561edd168b6a60c4059e4e19078",
    "data": {
      "schemaVersion": 1,
      "name": "Dimensional Steps",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "focus",
        "manipulate",
        "teleportation",
        "wizard"
      ],
      "traditions": [],
      "description": "You teleport to a location up to 20 feet away within your line of sight.\nHeightened 1 The distance you can teleport increases by 5 feet.",
      "castingTime": "1 action",
      "range": "20 feet",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 The distance you can teleport increases by 5 feet."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:life-siphon",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "zvvHOQV78WKUB33l",
      "slug": "life-siphon",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/life-siphon.webp"
    },
    "sourceHash": "sha256:1aa8408a5de8850b422605118287f9f02ef1af4890c29d0d9d4dc3e993923031",
    "translatableHash": "sha256:e6ef457ae28099f66daf1470f14a3db57de8fa4eefb120f5113f2247f2c0decc",
    "data": {
      "schemaVersion": 1,
      "name": "Life Siphon",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "healing",
        "wizard"
      ],
      "traditions": [],
      "description": "Trigger You expend one of your wizard spell slots to cast a wizard spell of the necromancy school.\nYou use some of the spell's magic to heal yourself, regaining 1d8 Hit Points per rank of the spell.",
      "castingTime": "reaction",
      "range": "",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [
        {
          "formula": "1d8",
          "type": "untyped",
          "kind": "healing"
        }
      ],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:sepulchral-mask",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "3mINzPzup2m9qzFU",
      "slug": "sepulchral-mask",
      "publicationTitle": "Pathfinder Advanced Player's Guide",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:bf7acd2bfa89ca6061d93514e481dc6f563617646067f3c60b222d35f2bbe8f9",
    "translatableHash": "sha256:d38b1ac8a7140d93cdbc1f2d20f96372bd3f57c79b74526314c5b262dda16309",
    "data": {
      "schemaVersion": 1,
      "name": "Sepulchral Mask",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "emotion",
        "focus",
        "manipulate",
        "mental",
        "sorcerer",
        "visual"
      ],
      "traditions": [],
      "description": "You manifest a supernatural funerary mask, granting you a +1 status bonus to Will saving throws against emotion effects for 1 minute. Its somber countenance forces your foes to confront their regrets and sins. Each enemy in the area when you Cast the Spell or that starts its turn in the area takes 1d4 mental damage and must attempt a Will save.\nSpell Effect: Sepulchral Mask\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage.\nFailure The creature takes full damage and takes a –1 status penalty to Will saves against emotion effects for 1 round.\nCritical Failure The creature takes double damage and a –1 status penalty to Will saves against emotion effects for 1 minute.\nHeightened 2 Increase the mental damage by 2d4 and the emanation's radius by 5 feet.",
      "castingTime": "2 actions",
      "range": "",
      "target": "enemies in area",
      "area": "5 emanation",
      "duration": "1 minute",
      "defense": "will save",
      "damage": [
        {
          "formula": "1d4",
          "type": "mental",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 Increase the mental damage by 2d4 and the emanation's radius by 5 feet."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:dim-the-light",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "6UafOE1ZUbHamsZJ",
      "slug": "dim-the-light",
      "publicationTitle": "Pathfinder Advanced Player's Guide",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/dim-the-light.webp"
    },
    "sourceHash": "sha256:12f8f816157332d4d1a18e21baf02b499d22c6acb359a2fa8349017dcca33347",
    "translatableHash": "sha256:9804c4d3b72e881e76c4f834489fc5e6601f47323c05c4431961f5fdfff50381",
    "data": {
      "schemaVersion": 1,
      "name": "Dim the Light",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "darkness",
        "focus",
        "manipulate",
        "sorcerer"
      ],
      "traditions": [],
      "description": "Trigger You cast a darkness or shadow spell.\nYou magnify the darkness from the triggering effect, causing the ambient light level to flicker briefly so you can slip from sight. You can immediately attempt a Stealth check to Hide, and you can become Hidden to a creature even if you don't have cover and aren't otherwise concealed from that creature. You cease being hidden at the end of your turn unless you move into cover or become Concealed before then.",
      "castingTime": "reaction",
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
    "contentId": "pf2e:spell:spells-srd:snare-hopping",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "dDt8VFuLuhznT19v",
      "slug": "snare-hopping",
      "publicationTitle": "Pathfinder Advanced Player's Guide",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/snare-hopping.webp"
    },
    "sourceHash": "sha256:ebf3f3d2567474d93952f5a004eb4f28c2687ca904c804597c3856ccbff03b02",
    "translatableHash": "sha256:5919e8f9fb7ab9e90c994a762432a3dbef3a0beafc9ce36345e4e589d05d4a82",
    "data": {
      "schemaVersion": 1,
      "name": "Snare Hopping",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate",
        "ranger",
        "teleportation"
      ],
      "traditions": [],
      "description": "You may not have placed your snare in the right place, but you can magically move it there. You teleport the target snare to another unoccupied location in range.\nHeightened 1 The range of the spell increases by 10 feet.",
      "castingTime": "2 actions",
      "range": "10 feet",
      "target": "one snare you built",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 The range of the spell increases by 10 feet."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:call-to-arms",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "dqaCLzINHBiKjh4J",
      "slug": "call-to-arms",
      "publicationTitle": "Pathfinder Advanced Player's Guide",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:72f2e60164fcce37f867d304963ed496c4b33ad5aaeaa2a91325f59684e0077a",
    "translatableHash": "sha256:08bc872e4a6c74ccd0a85a67b5167cde03825996adc9b7c73605b6c848dee012",
    "data": {
      "schemaVersion": 1,
      "name": "Call to Arms",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "auditory",
        "concentrate",
        "cursebound",
        "emotion",
        "focus",
        "mental",
        "oracle"
      ],
      "traditions": [],
      "description": "Trigger You are about to roll for initiative.\nYou cry out a call to arms, inspiring your allies to enter the fray. Each ally in the area gains a +2 status bonus to their initiative roll and gains temporary Hit Points equal to the spell's rank; these temporary Hit Points last for the spell's duration.\nHeightened (6th) The bonus increases to +3.\nHeightened (9th) The bonus increases to +4.\nSpell Effect: Call to Arms",
      "castingTime": "reaction",
      "range": "",
      "target": "",
      "area": "20 emanation",
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (6th) The bonus increases to +3.\nHeightened (9th) The bonus increases to +4.\nSpell Effect: Call to Arms"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:genies-veil",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "OyiKIbWllLZC6sGz",
      "slug": "genies-veil",
      "publicationTitle": "Pathfinder Advanced Player's Guide",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/genies-veil.webp"
    },
    "sourceHash": "sha256:829860911b80114adb6bc78108c2c3bff710eacf133aafc12cf321619e0dfdc3",
    "translatableHash": "sha256:14221b4246d5984b170bd71f06e24bf41940791f3cb5e386726e7c541af85d97",
    "data": {
      "schemaVersion": 1,
      "name": "Genie's Veil",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "focus",
        "manipulate",
        "sorcerer"
      ],
      "traditions": [],
      "description": "Trigger A creature within range is attacked.\nWith a flourish, you fulfill a creature's wish for protection, bending reality to keep them from harm. The target vanishes in a burst of brightly colored smoke and sparkles, reappearing an instant later. They become Concealed against the triggering attack and until the end of the current creature's turn.",
      "castingTime": "reaction",
      "range": "30 feet",
      "target": "1 willing creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:nymphs-token",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "pHrVvoTKygXeczVG",
      "slug": "nymphs-token",
      "publicationTitle": "Pathfinder Advanced Player's Guide",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/nymphs-token.webp"
    },
    "sourceHash": "sha256:6b0d35805f4647ff737ca486c7c2770351330fad2618eb4ecd58cd27632eb0fb",
    "translatableHash": "sha256:f77a17124f939cbc2457073bae67c7777968e736cc0a414aaf0ac8f712577b2c",
    "data": {
      "schemaVersion": 1,
      "name": "Nymph's Token",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate",
        "sorcerer"
      ],
      "traditions": [],
      "description": "You grant an ally a token of favor. You create a token, such as a lock of your hair or a flower, that persists for the spell's duration; as part of Casting the Spell, you can Interact to pass the token to an ally within your reach.\nAs long as the ally has the token on their person, they gain a +1 status bonus to Performance checks and Will saves.\nYou can Dismiss the spell as a free action.\nHeightened (4th) As long as the ally has the token on their person, you can cast spells that have a range of touch on them at a range of 30 feet.\nSpell Effect: Nymph's Token",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) As long as the ally has the token on their person, you can cast spells that have a range of touch on them at a range of 30 feet.\nSpell Effect: Nymph's Token"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:vision-of-weakness",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "NhNKzq1DvFxkvTEc",
      "slug": "vision-of-weakness",
      "publicationTitle": "Pathfinder Advanced Player's Guide",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/vision-of-weakness.webp"
    },
    "sourceHash": "sha256:982ab0bef14ff96ad730f7b631b1ed3504f7f6c2216080138e7bc639deb55535",
    "translatableHash": "sha256:e479534a0350160f86933115a3c381d43802cf508cfc814f066b0cacfb5b4aed",
    "data": {
      "schemaVersion": 1,
      "name": "Vision of Weakness",
      "rank": 2,
      "rarity": "uncommon",
      "traits": [
        "cursebound",
        "focus",
        "manipulate",
        "oracle"
      ],
      "traditions": [],
      "description": "You focus your gaze on a creature and gain a flash of divine insight into its nature. If the creature has any weaknesses, you learn them, as well as which of its three saving throw modifiers is lowest.\nYou also learn an inherent understanding of its movements and gain a +2 status bonus to your next attack roll (or skill check made as part of an attack action) against that foe before the end of your turn.\nThe target is then temporarily immune to Vision of Weakness for 1 day.\nSpell Effect: Vision of Weakness",
      "castingTime": "1 action",
      "range": "",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:steal-shadow",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "0chL1b4OFIZxpN3v",
      "slug": "steal-shadow",
      "publicationTitle": "Pathfinder Advanced Player's Guide",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:0a74cbb41691240eb54dc8dc02118e379c8736451409e84001ff6fabd47dc0d1",
    "translatableHash": "sha256:31004bf02c18318762b1c149c681316a0ea611725754834abea47a72aa0d6142",
    "data": {
      "schemaVersion": 1,
      "name": "Steal Shadow",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate",
        "shadow",
        "sorcerer"
      ],
      "traditions": [],
      "description": "You steal a creature's shadow, leaving it weakened and vulnerable. The target must attempt a Fortitude save.\nCritical Success The target is unaffected.\nSuccess The target is Enfeebled 1 for 1 round.\nFailure The target takes 3d4 void damage and is Enfeebled 1 for the spell's duration as you tear its shadow away, collecting it in your hand. On subsequent rounds, the first time each round you Sustain the Spell, you can throttle the shadow to deal 3d4 void damage to the target (basic Fortitude save). Until the spell ends, the target doesn't cast a shadow.\nCritical Failure As failure, but the target is Enfeebled 2.\nHeightened 1 The damage when the spell is cast and when it is sustained increases by 1d4 void damage.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": "fortitude save",
      "damage": [
        {
          "formula": "3d4",
          "type": "void",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage when the spell is cast and when it is sustained increases by 1d4 void damage."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:beastmaster-trance",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "5WM3WjshXgrkVCg6",
      "slug": "beastmaster-trance",
      "publicationTitle": "Pathfinder Advanced Player's Guide",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:c71ed629a268501acff9899faa8d72104df2abba4a7a12c334c3194ab2a8adda",
    "translatableHash": "sha256:22851f3f6758e49797c7f4a1e8a108e9f8b4884e5cf3b40ef8cb73d7c55617e2",
    "data": {
      "schemaVersion": 1,
      "name": "Beastmaster Trance",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate",
        "mental"
      ],
      "traditions": [],
      "description": "You enter a magical trance that allows you to perceive through the senses of the target companion. You attempt Perception checks using your own Perception, but you have any special senses the target has, such as low-light vision or darkvision.\nThis spell grants no special method of communication with the chosen animal, so it follows any instructions you gave it before you entered the trance and, failing that, it does as it wishes.\nFor the duration of the trance, your own senses are muted, though you can still communicate. This lack of awareness makes you Off-Guard. You can't take actions with the attack or move traits.\nHeightened (6th) Increase the range to 100 miles and the duration to sustained up to 10 minutes. The target can hear you through the spell, allowing you to Command the Animal or use other actions that have the auditory trait.\nHeightened (8th) Increase the range to planetary and the duration to sustained up to 1 hour. You can communicate telepathically with the target for the duration of the trance.",
      "castingTime": "3 actions",
      "range": "1 mile",
      "target": "one of your animal companions you can perceive",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (6th) Increase the range to 100 miles and the duration to sustained up to 10 minutes. The target can hear you through the spell, allowing you to Command the Animal or use other actions that have the auditory trait.\nHeightened (8th) Increase the range to planetary and the duration to sustained up to 1 hour. You can communicate telepathically with the target for the duration of the trance."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:spirit-veil",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "pQ3NIzZXeIIcU81C",
      "slug": "spirit-veil",
      "publicationTitle": "Pathfinder Advanced Player's Guide",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:772a966ca296c5ec41df30611e059ec2a3bec54b28d6b640485bc85757b1cee6",
    "translatableHash": "sha256:4718bc19ac0d042c0888a23f459f0877eb4d5ff16b8354a1fb1e63cc4fc583c1",
    "data": {
      "schemaVersion": 1,
      "name": "Spirit Veil",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "illusion",
        "manipulate",
        "sorcerer"
      ],
      "traditions": [],
      "description": "You draw an occluding veil of spirits around yourself, blocking yourself especially well from undead eyes. You become Concealed to all creatures, and you are Hidden from undead creatures regardless of what precise senses they have; this grants the effects of Invisibility, but against all the undead creature's precise senses. If you physically Interact with an undead creature or use a hostile action, the spell ends.\nHeightened 1 You can target one additional willing creature within 30 feet. The spell ends if any target physically Interacts with an undead creature or uses a hostile action.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 You can target one additional willing creature within 30 feet. The spell ends if any target physically Interacts with an undead creature or uses a hostile action."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:hearts-desire",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "PVXqMko4yGgw90uo",
      "slug": "hearts-desire",
      "publicationTitle": "Pathfinder Advanced Player's Guide",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:cbcaca50d7393db1fd9b87b810cc98405b6daa210b02b674577617f93cb807e1",
    "translatableHash": "sha256:81b21c796b05935b9089d2038c2c93d67afba50337a89af8dafe669cd2fd0a06",
    "data": {
      "schemaVersion": 1,
      "name": "Heart's Desire",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "emotion",
        "focus",
        "illusion",
        "manipulate",
        "mental",
        "sorcerer"
      ],
      "traditions": [],
      "description": "You surround your target with wondrous illusions of their greatest desires, which distract them from reality. The target must attempt a Will save.\nCritical Success The target disbelieves the illusion and is unaffected.\nSuccess For 1 round, the target is Stupefied 2 and takes a -2 status penalty to any checks it makes to determine the effects of reactions.\nFailure For 1 minute, the target is stupefied 2 and can't use reactions.\nCritical Failure As failure, and all spaces are difficult terrain for the target.\nHeightened 2 You can target one additional creature.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "1 creature",
      "area": null,
      "duration": "varies",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened 2 You can target one additional creature."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:blinding-beauty",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Q56HLIHVKY6bC5W3",
      "slug": "blinding-beauty",
      "publicationTitle": "Pathfinder Advanced Player's Guide",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:7f667888e949b143300b30479a1411782c259da9fc7094c685cf640b5aede88a",
    "translatableHash": "sha256:0f9cd63ccd08a15ecd3df0b7190d0a374532b1c16d15091720124f82f4f210f3",
    "data": {
      "schemaVersion": 1,
      "name": "Blinding Beauty",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "emotion",
        "focus",
        "incapacitation",
        "manipulate",
        "sorcerer",
        "visual"
      ],
      "traditions": [],
      "description": "You channel the allure of your nymph bloodline into a terribly beautiful glance. Each enemy in the area must attempt a Will saving throw.\nCritical Success The creature is unaffected.\nSuccess The creature is Dazzled until the start of its next turn.\nFailure The creature is Blinded until the start of its next turn.\nCritical Failure The creature is Blinded for 1 minute.",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": "30 cone",
      "duration": "",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:debilitating-dichotomy",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "VmqdVWCb8zAUCW8S",
      "slug": "debilitating-dichotomy",
      "publicationTitle": "Pathfinder Advanced Player's Guide",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:22a07ee14d43e82b5d8626c4821ec56367c819d6b3b9a7c487c55bc586c44a78",
    "translatableHash": "sha256:c02440b6113f7d39a65ef190d28e720cd5ccac910b16d612b016f54f7e861e6f",
    "data": {
      "schemaVersion": 1,
      "name": "Debilitating Dichotomy",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "cursebound",
        "focus",
        "manipulate",
        "mental",
        "oracle"
      ],
      "traditions": [],
      "description": "You reveal a glimpse of the impossible conflicts between the divine anathema behind your curse, forcing you to reckon with another's conflicts as well.\nYou and the target each take 9d6 mental damage with a basic Will save, and the target is Stunned 1 if it critically fails its save. You get a degree of success one better than you rolled for your saving throw.\nHeightened 1 The damage increases by 3d6.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature other than you",
      "area": null,
      "duration": "",
      "defense": "basic will save",
      "damage": [
        {
          "formula": "9d6",
          "type": "mental",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 3d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:shadow-jump",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "5ttAVJbWg2GVKmrN",
      "slug": "shadow-jump",
      "publicationTitle": "Pathfinder Advanced Player's Guide",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/shadow-jump.webp"
    },
    "sourceHash": "sha256:26fced645622ebfefe8996db955eb2d9a7eb0fe82a26c3f39dd3bb76e903a745",
    "translatableHash": "sha256:4d7b0c6bb45df1aa1a6487413d8ace3644c90ae52df94b474703100b9b82e592",
    "data": {
      "schemaVersion": 1,
      "name": "Shadow Jump",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate",
        "shadow",
        "teleportation"
      ],
      "traditions": [],
      "description": "You instantly transport yourself from one shadow to another. Teleport yourself and any items you're wearing and holding from your current space to a clear space you can see that's in dim light or darkness and within range. You can transport your familiar with this spell, but if shadow jump would bring any other creature with you-even if you're carrying the creature in an extradimensional container-the spell is disrupted.\nHeightened (8th) When you arrive at your destination, you can become Invisible until the end of your next turn or until you are no longer in an area of dim light or darkness, whichever comes first. The invisibility is an illusion effect.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (8th) When you arrive at your destination, you can become Invisible until the end of your next turn or until you are no longer in an area of dim light or darkness, whichever comes first. The invisibility is an illusion effect."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:dance-of-darkness",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "9BGEf9Sv5rgNBCk0",
      "slug": "dance-of-darkness",
      "publicationTitle": "Pathfinder Advanced Player's Guide",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/dance-of-darkness.webp"
    },
    "sourceHash": "sha256:9932d64f7f56011b333546d1ba87b3f4f137a2d1db1b4d7ec13fbc36cb233813",
    "translatableHash": "sha256:c78a465a471110cdfa37fc0e49cd1a2813cf08a7e67f98df0dc52d66b95fcffe",
    "data": {
      "schemaVersion": 1,
      "name": "Dance of Darkness",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "darkness",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "You dance, Striding up to half your Speed. At either the start or end of your Stride, you create an area of magical darkness in a 10-foot burst centered on your location. This area is filled with magical darkness that works the same way as that created by a Darkness spell of the same rank. When you create the darkness, attempt a Performance check to dance, with a standard DC for your level, to determine the duration of the darkness.\nCritical Success 1 minute\nSuccess 2 rounds\nFailure 1 round",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "Varies",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:wish-twisted-form",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "B3tbO85GBpzQ3u8l",
      "slug": "wish-twisted-form",
      "publicationTitle": "Pathfinder Advanced Player's Guide",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:b726d02069c70495f90a7b7f4fcf491137adc37fb9dce2590b4657e5eb77691f",
    "translatableHash": "sha256:56bb3e5e8f7e728baf2f546644a8b2884fc4e66b5edd707911c905570b0cc118",
    "data": {
      "schemaVersion": 1,
      "name": "Wish-Twisted Form",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate",
        "sorcerer"
      ],
      "traditions": [],
      "description": "You focus your magic upon an enemy, wishing for their defenses to fail and turning their strengths into weaknesses. The target must attempt one Will saving throw for all of the following effects.\n• The target gains weakness 5 to one energy type of your choice.\n• The target's resistances are reduced by 5.\n• The target takes a –10-foot status penalty to all its Speeds.\n• The target takes a -1 status penalty to its saving throws.\nCritical Success The target is unaffected.\nSuccess The target takes the penalties for 1 round.\nFailure The target takes the penalties for 1 minute.\nCritical Failure As failure, and the target takes a -1 status penalty to AC for the duration.\nHeightened 1 Increase the weakness and the reduction to resistances by 1.\nSpell Effect: Wish-Twisted Form (Success)\nSpell Effect: Wish-Twisted Form (Failure)",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "1 creature",
      "area": null,
      "duration": "varies",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened 1 Increase the weakness and the reduction to resistances by 1.\nSpell Effect: Wish-Twisted Form (Success)\nSpell Effect: Wish-Twisted Form (Failure)"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:consuming-darkness",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "HMTloW1hvRFJ5Z2D",
      "slug": "consuming-darkness",
      "publicationTitle": "Pathfinder Advanced Player's Guide",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/consuming-darkness.webp"
    },
    "sourceHash": "sha256:7d6f4ef6a108f3bfe93ed9f8d9800c030282a80c51a5a6c216d5aac1c155d105",
    "translatableHash": "sha256:e9406e2c3702d0196963a18539a3f69ccbe37a8d3b8e86cfb16558d3a69ccd7f",
    "data": {
      "schemaVersion": 1,
      "name": "Consuming Darkness",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate",
        "shadow",
        "sorcerer"
      ],
      "traditions": [],
      "description": "Your shadow wriggles before spreading out from you, forming a gateway of clinging, consuming shadow through which the horrors of another plane can barely be seen. The first time each turn you Sustain the Spell, the radius increases by 5 feet. Each enemy that enters the area or begins its turn in the area takes 2d6 void damage and must attempt a Reflex save.\nCritical Success The creature is unaffected.\nSuccess The creature sinks partially into the shadow, taking half damage and a –5-foot circumstance penalty to its Speeds for as long it remains in the area.\nFailure As success, but the creature takes full damage and a 10-foot circumstance penalty.\nCritical Failure The creature is absorbed into the shadows, where it can be seen below the surface; it takes double damage and is Immobilized for 1 round or until it Escapes.\nHeightened 1 The damage increases by 1d6 void damage.",
      "castingTime": "2 actions",
      "range": "",
      "target": "enemies in the area",
      "area": "10 emanation",
      "duration": "1 minute",
      "defense": "reflex save",
      "damage": [
        {
          "formula": "2d6",
          "type": "void",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 1d6 void damage."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:shepherd-of-souls",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "SzKkzq3Rr6vKIxbp",
      "slug": "shepherd-of-souls",
      "publicationTitle": "Pathfinder Advanced Player's Guide",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/shepherd-of-souls.webp"
    },
    "sourceHash": "sha256:2693edde873e40c9aacfc2b6fff3745e873e8bc29f7eb39fa76e48c32571e4c1",
    "translatableHash": "sha256:73f63bb908a535c3ce6d6e60448eedea4a92131624f2f4a5c3e73a6f32043358",
    "data": {
      "schemaVersion": 1,
      "name": "Shepherd of Souls",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "healing",
        "sorcerer"
      ],
      "traditions": [],
      "description": "You stay the hand of fate for one not yet destined to die, sacrificing some of your own vitality to heal them.\nYou lose up to 15 Hit Points as a sacrifice, and the target reduces the damage by twice the number of Hit Points sacrificed. If this reduction exceeds the amount of damage, the target recovers Hit Points equal to the excess amount.\nHeightened 2 The maximum number of Hit Points you can sacrifice increases by 5.",
      "castingTime": "reaction",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 2 The maximum number of Hit Points you can sacrifice increases by 5."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:establish-ward",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "XlQBVvlDWGrGlApl",
      "slug": "establish-ward",
      "publicationTitle": "Pathfinder Advanced Player's Guide",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:05f2fd58b64dcbf6ecdad48615b14d3601347e4e92036e7412bcaa110847a207",
    "translatableHash": "sha256:9a8b37847fb41c748015a6e5d2c59efda28329083a42d5482a6b20d67de6a3a6",
    "data": {
      "schemaVersion": 1,
      "name": "Establish Ward",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "attack",
        "concentrate",
        "focus",
        "manipulate",
        "sorcerer"
      ],
      "traditions": [],
      "description": "You bind a part of your essence to your surroundings, creating a warded area that grants you power within it, but drains you outside of it. While within the area, you can make nature's wrath Strikes by commanding plants, wind, rocks, and other natural features to attack enemies. These are melee Strikes that use your spell attack modifier, can target any creature within the ward, and deal 3d8 bludgeoning, piercing, or slashing damage.\nUpon Casting the Spell, you can immediately make a single nature's wrath Strike. You are Quickened while inside the ward, and can use the additional action only to make nature's wrath Strikes. You are Slowed 1 while outside the area.\nHeightened 2 The area increases by 5 feet, and the Strikes deal an additional 1d8 damage.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "30 burst",
      "duration": "1 minute",
      "defense": null,
      "damage": [
        {
          "formula": "3d8",
          "type": "untyped",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The area increases by 5 feet, and the Strikes deal an additional 1d8 damage."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:heroic-feat",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "4j0FQ1mkidBAXuQV",
      "slug": "heroic-feat",
      "publicationTitle": "Pathfinder Advanced Player's Guide",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:c7bd5bf47a9281c5bcad50c5df587736b5fff6ad16d3f33cfab463017dad75c5",
    "translatableHash": "sha256:e4030bbd36bda4211f7269c9544477ae569adf997df79c1b97bccf4859c5748f",
    "data": {
      "schemaVersion": 1,
      "name": "Heroic Feat",
      "rank": 6,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "cursebound",
        "focus",
        "manipulate",
        "mental",
        "oracle"
      ],
      "traditions": [],
      "description": "You gain the ability to perform a specialized combat technique from the vast wealth of martial knowledge your mystery provides.\nWhen you Cast this Spell, you use the action granted by one common fighter feat. If you Cast this Spell using 2 actions, the granted action must be a single action, and if you Cast this Spell using 3 actions, you can instead choose a feat that grants a 2-action activity.\nThe chosen feat's level can be no higher than heroic feat's spell rank. The feat can't have a Frequency entry, and you must meet its prerequisites and requirements in order to select it.",
      "castingTime": "2 or 3",
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
    "contentId": "pf2e:spell:spells-srd:shadow-illusion",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "EOWh6VVcSjB3WPjX",
      "slug": "shadow-illusion",
      "publicationTitle": "Pathfinder Advanced Player's Guide",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:b333da5e33c9fd38f40e1a3686e90d12b609adcd84706ea69d1704f027c8af41",
    "translatableHash": "sha256:d7b2299f808a0d4b9ba444a35d9daa69e301c3be3d69d90a929b47781e0a72a3",
    "data": {
      "schemaVersion": 1,
      "name": "Shadow Illusion",
      "rank": 6,
      "rarity": "uncommon",
      "traits": [
        "auditory",
        "concentrate",
        "focus",
        "illusion",
        "manipulate",
        "shadow",
        "visual"
      ],
      "traditions": [],
      "description": "You create a shadowy illusion of a creature or a stationary object, but the illusion can exist only in an area of dim light or darkness. The spell ends if the illusion is ever out of an area of dim light or darkness. If the illusion is an object, it must fit within a 20-foot burst, and the creature can be of any size up to Gargantuan, filling a 20-foot-by-20-foot space.\nThe object or creature appears to animate naturally; it even generates the appropriate sounds and smells, and feels believable to the touch, though its coloring is always muted.\nIf the illusion is a creature, shadow illusion has the effects of an Illusory Creature spell of the same rank, except it deals 3d8 damage, instead of the amount listed in illusory creature.\nHeightened 2 The area that an illusory object can fit in increases by 10 feet.\nThe damage of the illusory creature's Strike increases by 1d8.",
      "castingTime": "2 actions",
      "range": "500 feet",
      "target": "",
      "area": null,
      "duration": "sustained",
      "defense": null,
      "damage": [
        {
          "formula": "2d8",
          "type": "untyped",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The area that an illusory object can fit in increases by 10 feet.\nThe damage of the illusory creature's Strike increases by 1d8."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:shielding-strike",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "53NqGTJOf4LcjVyD",
      "slug": "shielding-strike",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:09c9549f93719288be17d6a2a855a70d4852f67c8c0c737c3ee9c704248eebb5",
    "translatableHash": "sha256:f1159f374a9283385c15da82bf5adf435518b494b76d25d473e96992cdca4420",
    "data": {
      "schemaVersion": 1,
      "name": "Shielding Strike",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "magus"
      ],
      "traditions": [],
      "description": "As you attack a foe, warding magic transforms your momentum into action and lifts your shield. Make a melee Strike. You can then either Raise a Shield if you're wielding one or cast Shield if you have the spell.",
      "castingTime": "1 action",
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
    "contentId": "pf2e:spell:spells-srd:dimensional-assault",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "5p9Y4ACrtRM4gTpN",
      "slug": "dimensional-assault",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:9aafebd1ede1108d2ba9c7a11949276d8e707fa33213e6ee0cfbf286da05fdda",
    "translatableHash": "sha256:9abdd6cb5726623d7860e1ed1ea1873982e6e69628c855dda55513c2f782e858",
    "data": {
      "schemaVersion": 1,
      "name": "Dimensional Assault",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "magus",
        "teleportation"
      ],
      "traditions": [],
      "description": "You tumble through space, making a short dimensional hop to better position yourself for an attack. Teleport to any square in range that's within reach of a creature, and then make a melee Strike against one creature within your reach.",
      "castingTime": "1 action",
      "range": "half your Speed",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:force-fang",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "9mPEoOPN0AMuixIv",
      "slug": "force-fang",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/force-fang.webp"
    },
    "sourceHash": "sha256:b84120c14c3882aa4a520ee2d494b6b33840db190941f22509a8fa93e81edd89",
    "translatableHash": "sha256:e73a5003e16031a373d1aab3c70a2950b92d90400e3da71bd5c1becc857fa6dd",
    "data": {
      "schemaVersion": 1,
      "name": "Force Fang",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "focus",
        "force",
        "magus",
        "manipulate"
      ],
      "traditions": [],
      "description": "You briefly turn your attack into pure force to bypass your opponent's defenses. Choose a target within your reach, or within the reach of a melee weapon you're wielding. If you can use Spellstrike with a ranged weapon (with the starlit span hybrid study, for example), you can target a creature in the first range increment of your ranged weapon. For an instant, you transform your weapon or unarmed attack into a spike of pure force, replacing all its normal statistics and abilities. The force fang automatically deals 1d4+1 force damage to the target.\nHeightened 2 The damage increases by 1d4+1.",
      "castingTime": "1 action",
      "range": "varies",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [
        {
          "formula": "1d4+1",
          "type": "force",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The damage increases by 1d4+1."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:extend-boost",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "CR8OKDbeFJoZbOCu",
      "slug": "extend-boost",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/extend-boost.webp"
    },
    "sourceHash": "sha256:272d59623a8eadf2d99b74d1340cd5678fee80bf36e1de55e4c0aecdf7971a0e",
    "translatableHash": "sha256:a648f74f811f6de67278b701c8479ba3380b19858a192aa619ac607c84ea6f14",
    "data": {
      "schemaVersion": 1,
      "name": "Extend Boost",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "spellshape",
        "summoner"
      ],
      "traditions": [],
      "description": "You focus on the intricacies of the magic binding you to your eidolon to extend the duration of your boost eidolon or reinforce eidolon spell. If your next action is to cast Boost Eidolon or Reinforce Eidolon, attempt a skill check with the skill associated with the tradition of magic you gain from your eidolon (such as Nature for a primal eidolon). The DC is usually a standard-difficulty DC of your level, but the GM can assign a different DC based on the circumstances. The effect depends on the result of your check.\nCritical Success The spell lasts 4 rounds.\nSuccess The spell lasts 3 rounds.\nFailure The spell lasts 1 round, but you don't spend the Focus Point for casting this spell.",
      "castingTime": "free",
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
    "contentId": "pf2e:spell:spells-srd:boost-eidolon",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "HStu2Yhw3iQER9tY",
      "slug": "boost-eidolon",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:f149d14dd2a879e1a81e4862bc5cc7748b5f6c857f85f4945fe0927ce9fb980d",
    "translatableHash": "sha256:56f8aa5aa7891ceaa6867dfdc85182ae6ad46a7a3638c26e5066dca9612896a7",
    "data": {
      "schemaVersion": 1,
      "name": "Boost Eidolon",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cantrip",
        "concentrate",
        "summoner"
      ],
      "traditions": [],
      "description": "You focus deeply on the link between you and your eidolon and boost the power of your eidolon's attacks. Your eidolon gains a +2 status bonus to damage rolls with its unarmed attacks. If your eidolon's Strikes deal more than one weapon damage die, the status bonus increases to 2 per weapon damage die, to a maximum of +8 with four weapon damage dice.\nSpell Effect: Boost Eidolon",
      "castingTime": "1 action",
      "range": "100 feet",
      "target": "your eidolon",
      "area": null,
      "duration": "1 round",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:unfetter-eidolon",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "hW9pgce6vTme61g1",
      "slug": "unfetter-eidolon",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:b76d38e8a961b7ceaf958fa6197ffd8bd80d95c764ff4a428482e0e07cd6630a",
    "translatableHash": "sha256:98ff5366928b6197c94e7cdb8edb24ed1468a592d59759de8c2cd3c1fcc15d98",
    "data": {
      "schemaVersion": 1,
      "name": "Unfetter Eidolon",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate",
        "summoner"
      ],
      "traditions": [],
      "description": "You loosen the link between yourself and your eidolon, allowing it to travel farther from you for a short period of time. While the spell is active, your eidolon can travel an unlimited distance away from you. When the spell ends, if your eidolon is more than 100 feet away from you, it unmanifests.",
      "castingTime": "2 actions",
      "range": "100 feet",
      "target": "your eidolon",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:spinning-staff",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "KAapTzGKJMbMQCL1",
      "slug": "spinning-staff",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:c67ac3deb6a63fec956899df456e98f6e0cfc04ef054206fdfc4b47226332562",
    "translatableHash": "sha256:52eb87c691f9b9151f28cbfe1c69815bd96caf3ec89960c46f6b63a2da7fdfc7",
    "data": {
      "schemaVersion": 1,
      "name": "Spinning Staff",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "magus"
      ],
      "traditions": [],
      "description": "You spin your staff with a twirling flourish, attacking two foes and transforming the momentum into magical energy to charge for your next Spellstrike. Make a melee Strike with your staff against one foe and then a second melee Strike with your staff against a different foe. Your multiple attack penalty applies to both of these attacks as normal.",
      "castingTime": "1 action",
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
    "contentId": "pf2e:spell:spells-srd:evolution-surge",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "lV8FkHZtzZu7Cy6j",
      "slug": "evolution-surge",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/evolution-surge.webp"
    },
    "sourceHash": "sha256:024be40715045a6f37a0fc58ce8a241f2353051572cfb72ee95b1b36d05bc678",
    "translatableHash": "sha256:88c996481d599feaf46938adfa5f11c8b61f0179742eac3aba4db6392c72cdd8",
    "data": {
      "schemaVersion": 1,
      "name": "Evolution Surge",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate",
        "morph",
        "summoner"
      ],
      "traditions": [],
      "description": "You flood your eidolon with power, creating a temporary evolution in your eidolon's capabilities. Choose one of the following effects:\n• Your eidolon gains low-light vision and darkvision.\n• Your eidolon gains Scent as an imprecise sense up to 30 feet.\n• Your eidolon can breathe underwater and gains a swim Speed equal to its land Speed or 30 feet, whichever is less. Alternatively, if your eidolon is normally aquatic, it can breathe air and gains a land Speed equal to its swim Speed or 30 feet, whichever is less. Either way, it gains the amphibious trait.\n• Your eidolon gains a +20-foot status bonus to its Speed.\nHeightened (3rd) Add the following options to the list of effects you can choose:\n• Your eidolon becomes Large, instead of its previous size. This increases your eidolon's reach to 10 feet but doesn't change any other statistics for your eidolon. Because of the special link you share, you can ride your eidolon without getting in each other's way. If another creature tries to ride your eidolon, both you and the riding creature each regain only 2 actions at the start of your turns each round, as normal.\n• Your eidolon gains a climb Speed equal to its land Speed.\nHeightened (5th) Add the options from the 3rd-rank version and the following options to the list of effects you can choose:\n• Your eidolon becomes Huge, instead of its previous size. This has the same effects as the 3rd-rank option to become Large, except your eidolon's reach increases to 15 feet.\n• Your eidolon gains a fly Speed equal to its Speed.\nSpell Effect: Evolution Surge",
      "castingTime": "2 actions",
      "range": "100 feet",
      "target": "your eidolon",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (3rd) Add the following options to the list of effects you can choose:\n• Your eidolon becomes Large, instead of its previous size. This increases your eidolon's reach to 10 feet but doesn't change any other statistics for your eidolon. Because of the special link you share, you can ride your eidolon without getting in each other's way. If another creature tries to ride your eidolon, both you and the riding creature each regain only 2 actions at the start of your turns each round, as normal.\n• Your eidolon gains a climb Speed equal to its land Speed.\nHeightened (5th) Add the options from the 3rd-rank version and the following options to the list of effects you can choose:\n• Your eidolon becomes Huge, instead of its previous size. This has the same effects as the 3rd-rank option to become Large, except your eidolon's reach increases to 15 feet.\n• Your eidolon gains a fly Speed equal to its Speed.\nSpell Effect: Evolution Surge"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:shooting-star",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "nVfP43Xbs6I1PO8v",
      "slug": "shooting-star",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/shooting-star.webp"
    },
    "sourceHash": "sha256:cb7bd3bfd856b310749ce11b14de00c9e424d431c2b113ead5e8d47d7d479574",
    "translatableHash": "sha256:a7a66b31d1774d31ed04fb6466671e9dfd394c8a0b838e93a988e6c90268aa06",
    "data": {
      "schemaVersion": 1,
      "name": "Shooting Star",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "magus"
      ],
      "traditions": [],
      "description": "You let loose a projectile that flies true and leaves the blazing trail of a meteor behind it. Make a ranged Strike, ignoring the target's concealment and reducing the target's cover by one degree for this Strike only (greater to standard, standard to lesser, and lesser to none). If the Strike hits, the meteor trail hangs in the air. This gives the benefits of concealment negation and cover reduction to any attacks made against the creature (by anyone) until the start of your next turn.",
      "castingTime": "1 action",
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
    "contentId": "pf2e:spell:spells-srd:thunderous-strike",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "r82rqcm0MmGaBFkM",
      "slug": "thunderous-strike",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/thunderous-strike.webp"
    },
    "sourceHash": "sha256:403072109f1f10378c13f13d17cc787d42d18e35eb38a1e27f76b4a42b7fc88b",
    "translatableHash": "sha256:8295b7123b8e871f3ad414bd1dffb9924dada6b7f709da23b6861c3776023c3f",
    "data": {
      "schemaVersion": 1,
      "name": "Thunderous Strike",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "magus",
        "sonic"
      ],
      "traditions": [],
      "description": "You swing your massive weapon, creating a wave of sonic vibrations that topples creatures. Make a melee Strike with your two-handed weapon. Each creature in a 15-foot cone from you must attempt a basic Fortitude save against your spell DC or take 2 sonic damage. On a critical failure, the creature is knocked Prone. The target of your Strike must be within the cone or the effect fails.\nHeightened 1 The damage increases by 1.",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": "15 cone",
      "duration": "",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "2",
          "type": "sonic",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 1."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:reinforce-eidolon",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "TYbCj4dgXDOZou9k",
      "slug": "reinforce-eidolon",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:8d34a97a2874c48fdca8585273d7a87a99ec1d43673b2ec2a4071b34e718f999",
    "translatableHash": "sha256:84477de0573d4fb4b773f20e66c7ef81e91c595f8b31919459b8b7f74b3ca800",
    "data": {
      "schemaVersion": 1,
      "name": "Reinforce Eidolon",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cantrip",
        "concentrate",
        "summoner"
      ],
      "traditions": [],
      "description": "You focus deeply on the link between you and your eidolon and reinforce your eidolon's defenses. Your eidolon gains a +1 status bonus to AC and saving throws, plus resistance to all damage equal to half the spell's rank. Your eidolon can benefit from either Boost Eidolon or Reinforce Eidolon, but not both; if you cast one of these spells during the other's duration, the newer spell replaces the older one.\nSpell Effect: Reinforce Eidolon",
      "castingTime": "1 action",
      "range": "100 feet",
      "target": "your eidolon",
      "area": null,
      "duration": "1 round",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:lifelink-surge",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "lOZhcvtej10TqlQm",
      "slug": "lifelink-surge",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/lifelink-surge.webp"
    },
    "sourceHash": "sha256:2d2e1fb653e9020f3efb1cf16a930eec997cc54dfd45d974a2ae23cbb6f723fa",
    "translatableHash": "sha256:4619d2e20c26e95a0c853aa8cc53fa239cc848eb929961e4831c7c7d4bc37df0",
    "data": {
      "schemaVersion": 1,
      "name": "Lifelink Surge",
      "rank": 2,
      "rarity": "uncommon",
      "traits": [
        "focus",
        "healing",
        "manipulate",
        "summoner",
        "vitality"
      ],
      "traditions": [],
      "description": "You make a quick gesture, tracing the link between yourself and your eidolon and drawing on your connection to slowly strengthen your shared life force. Your eidolon gains Fast Healing 4 for 4 rounds.\nSpell Effect: Lifelink Surge\nHeightened 1 The fast healing increases by 2.",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": null,
      "duration": "4 rounds",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 The fast healing increases by 2."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:eidolons-wrath",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "kuZnUNrhXHRYQ2eM",
      "slug": "eidolons-wrath",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:97df2a529d68da40ae826bf79f7a9b2c711d310238aaeb7d486854f8f67a25fa",
    "translatableHash": "sha256:178697cf3495e992485a14e41422bcb0f7eeafe4cf420ee16c78a3faf05bb8ce",
    "data": {
      "schemaVersion": 1,
      "name": "Eidolon's Wrath",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "eidolon",
        "focus",
        "manipulate",
        "summoner"
      ],
      "traditions": [],
      "description": "Your eidolon releases a powerful energy attack that deals 5d6 damage of the type you chose when you took the Eidolon's Wrath feat, with a basic Reflex save.\nHeightened 1 The damage increases by 2d6.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "20 emanation",
      "duration": "",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "5d6",
          "type": "untyped",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:cascade-countermeasure",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "rtisvvvhkpZPdgXc",
      "slug": "cascade-countermeasure",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:3b68e874ab8044ace12036d05764aad1277a69bda23f9ad1b652ea1960f11e2a",
    "translatableHash": "sha256:b7cc8e48ed3339438ea133d9c08a37dec02a0f1b6932d7ff566773bf09452b81",
    "data": {
      "schemaVersion": 1,
      "name": "Cascade Countermeasure",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "focus",
        "magus",
        "manipulate"
      ],
      "traditions": [],
      "description": "You quickly adjust your Arcane Cascade to offer magical protection. You gain resistance 5 against damage from spells. As normal, using Arcane Cascade again means you've ended the stance, and the spell ends.\nSpell Effect: Cascade Countermeasure\nHeightened 3 The resistance increases by 5.",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": null,
      "duration": "until the Arcane Cascade stance ends",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 3 The resistance increases by 5."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:inscrutable-mask",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "YQWq1DZuLRk32M3h",
      "slug": "inscrutable-mask",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:bb89bb755ad6499792218afcc0e1cf43979d3a2a0b02ec0e16003b5f2d334d8d",
    "translatableHash": "sha256:ac618be3df1af5c878abbd4a5954895789d34a2bb9decf8320db48f4e12e655f",
    "data": {
      "schemaVersion": 1,
      "name": "Inscrutable Mask",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "illusion",
        "manipulate",
        "shadow"
      ],
      "traditions": [],
      "description": "You shroud your form and features in an impenetrable mask of shadow. The mask grants you a +1 status bonus to Deception checks to Lie or Feint, Intimidation checks to Demoralize, and Stealth checks to Hide in areas of dim light or darkness.\nHeightened (6th) The status bonus increases to +2.\nHeightened (9th) The status bonus increases to +3.\nSpell Effect: Inscrutable Mask",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (6th) The status bonus increases to +2.\nHeightened (9th) The status bonus increases to +3.\nSpell Effect: Inscrutable Mask"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:runic-impression",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "oOaEfsdVpgTXRhrY",
      "slug": "runic-impression",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:e7cda500b1cf37fd075efa657f96d7d4ba9e4f1759d1dc2eb4ee6eef19b4611e",
    "translatableHash": "sha256:188f3cb0d59ccd2bdea519d20e589e3e3ce69029283009b48fdcca438674905f",
    "data": {
      "schemaVersion": 1,
      "name": "Runic Impression",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "focus",
        "magus",
        "manipulate"
      ],
      "traditions": [],
      "description": "Your unarmed attacks or weapon gain the benefits of a weapon rune you choose when you cast this spell: Corrosive, Flaming, Frost, Ghost Touch, Returning, Shock, or Thundering. If you cast runic impression on a weapon, this spell ends if you cease holding the weapon, with the exception of throwing a returning weapon. If this spell would give a weapon more property runes than its normal maximum, one of the existing property runes (you choose) is suppressed until the spell ends. For unarmed attacks, if this spell would give you more property runes than you could have from handwraps of mighty blows, one of the existing property runes is similarly suppressed.\nHeightened (8th) Add keen to the list of runes you can choose as well as the greater types of Corrosive, Flaming, Frost, Shock, and Thundering.\nSpell Effect: Runic Impression",
      "castingTime": "1 action",
      "range": "touch",
      "target": "you or one weapon you're wielding",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (8th) Add keen to the list of runes you can choose as well as the greater types of Corrosive, Flaming, Frost, Shock, and Thundering.\nSpell Effect: Runic Impression"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:hasted-assault",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "3MzuRDc7ccylpW2e",
      "slug": "hasted-assault",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/hasted-assault.webp"
    },
    "sourceHash": "sha256:dc72f8c8cc8c6f4a7abb6cb4b0e339faead04faee0892dacb2dc6ff687a1afdc",
    "translatableHash": "sha256:d8ba3a8ae2e032678fc1504ab59b73f801b01774028ed7ee059a1e494831940d",
    "data": {
      "schemaVersion": 1,
      "name": "Hasted Assault",
      "rank": 7,
      "rarity": "uncommon",
      "traits": [
        "focus",
        "magus",
        "manipulate"
      ],
      "traditions": [],
      "description": "You call upon your magic to speed up your attacks. You gain the Quickened condition and can use the extra action each round for only Strike actions.",
      "castingTime": "1 action",
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
    "contentId": "pf2e:spell:spells-srd:darklight",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "sFwoKj0TsacsmoWj",
      "slug": "darklight",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:547bf48dcc367a014bbd10a4745411b24c9f8bcfbddbfacb996597e96efb0d23",
    "translatableHash": "sha256:1a8f95c299d67fbd821d8598ce5e0c853aa8d44507bfd53be2082fbf51546934",
    "data": {
      "schemaVersion": 1,
      "name": "Darklight",
      "rank": 7,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "darkness",
        "focus",
        "manipulate",
        "shadow"
      ],
      "traditions": [],
      "description": "Shadows pour forth from your eyes, creating a field of darkness that prevents light from emanating within the area. Light doesn't enter the area; any non-magical light sources, such as a torches or lanterns, don't emanate any light while inside the area, even if their light radius would extend beyond the darkness. The spell similarly suppresses magical light of the spell's rank or lower.\nLight can't pass through, so creatures in the area can't see outside. Even creatures with darkvision (but not greater darkvision) can barely see through the darkness; any creatures seen through the darkness are Concealed to them. Creatures with greater darkvision can see through the darkness normally.\nCreatures who move into the field or start their turn within the field have some of the life and light sucked out of them, taking 2d6 bludgeoning damage and 2d6 void damage, with a basic Fortitude save.\nWhen you cast this spell, choose up to four allies in the area to spare from darklight's effects. Until the spell ends, they're immune to damage from darklight spells and can see through darklight (but not other darkness) as though they had greater darkvision.\nHeightened (10th) The bludgeoning and void damage both increase to 3d6.",
      "castingTime": "3 actions",
      "range": "120 feet",
      "target": "",
      "area": "20 burst",
      "duration": "1 minute",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "2d6",
          "type": "bludgeoning",
          "kind": "damage"
        },
        {
          "formula": "2d6",
          "type": "void",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (10th) The bludgeoning and void damage both increase to 3d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:hallowed-ground",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "4bFxUA59xeq6Snhw",
      "slug": "hallowed-ground",
      "publicationTitle": "Pathfinder Book of the Dead",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:fca87b7d0a22807d1e41a1cd20c923a6921667ad49fc9c011a040d9ff156a2ef",
    "translatableHash": "sha256:ffc3dc0029a146b8702f4c8e81666839a2861b05cedbdb0d548132121798bfa0",
    "data": {
      "schemaVersion": 1,
      "name": "Hallowed Ground",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "good",
        "holy",
        "manipulate",
        "vitality"
      ],
      "traditions": [],
      "description": "One small space becomes inhospitable to undead as you fill it with life-infused benevolent magic. Each undead creature in the area takes 1d6 vitality damage and 1d4 spirit damage when you Cast the Spell, with a basic Fortitude save. After that, undead creatures have weakness 1 to vitality damage and your necromancy spells while in the area.\nThis spell also automatically attempts to counteract any attempt to raise undead in the area (if either the undead would appear in the area or the effect's caster or creator is in it).\nIf you Cast this Spell again, any previous hallowed ground you had cast ends.\nSpell Effect: Hallowed Ground\nHeightened 2 The vitality damage increases by 1d6, spirit damage increases by 1d4, and weakness increases by 1.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "",
      "area": "10 burst",
      "duration": "1 minute",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "1d6",
          "type": "vitality",
          "kind": "damage"
        },
        {
          "formula": "1d4",
          "type": "spirit",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The vitality damage increases by 1d6, spirit damage increases by 1d4, and weakness increases by 1."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:subjugate-undead",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Cd6Crl4wpQaMSYrF",
      "slug": "subjugate-undead",
      "publicationTitle": "Pathfinder Book of the Dead",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:bf922aaf8add3f37fc9080dffd9b4b2ddd5e98e2d9b033eb0f90f27fd8d5fff8",
    "translatableHash": "sha256:56cb9b98e9e3e818272475b07d33485e6a81e1661c8005bdaf9555fb170b407f",
    "data": {
      "schemaVersion": 1,
      "name": "Subjugate Undead",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate",
        "mental"
      ],
      "traditions": [],
      "description": "You attempt to seize control of the target. It can attempt a Will save to resist the effect. If the target is already being controlled by another creature, the controlling creature also rolls a saving throw and the undead uses the better result. Casting subjugate undead again ends any previous subjugate undead you cast.\nCritical Success The target is unaffected and is temporarily immune for 24 hours.\nSuccess The target is unaffected.\nFailure The undead creature becomes a minion under your control for 1 minute. The spell is dismissed if you or an ally takes a hostile action against the minion undead.\nCritical Failure As failure, except the duration is 10 minutes.",
      "castingTime": "3 actions",
      "range": "30 feet",
      "target": "one undead creature with a level of no more than your level -4",
      "area": null,
      "duration": "varies",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:eyes-of-the-dead",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "DLFupJuCfzyLCQcO",
      "slug": "eyes-of-the-dead",
      "publicationTitle": "Pathfinder Book of the Dead",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:8c446ddc77dd188f7aaf6ac6b926b72265bed1d0a1f8b660ff1783d316fef7ca",
    "translatableHash": "sha256:f44d921d654ee2abdc0b82bf8b9d6a3f1d0adc9d7b6a6e57407517db3ae04850",
    "data": {
      "schemaVersion": 1,
      "name": "Eyes of the Dead",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate",
        "mental"
      ],
      "traditions": [],
      "description": "You enter a magical trance that allows you to perceive through the senses of the target creature. You attempt Perception checks using your own Perception, but you have any special senses the target has, such as low-light vision or darkvision. The spell doesn't grant any special method of communication with the target. For the duration of the trance, your own senses are muted, though you can still communicate. This lack of awareness makes you Off-Guard. You can't take actions with the attack or move traits, nor can you cast spells.\nHeightened (6th) The range increases to 100 miles and the duration to sustained up to 10 minutes. You can communicate telepathically with the target for the duration of the trance, though the target is under no compulsion to follow commands if it wasn't already.",
      "castingTime": "3 actions",
      "range": "1 mile",
      "target": "one undead creature under your control",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (6th) The range increases to 100 miles and the duration to sustained up to 10 minutes. You can communicate telepathically with the target for the duration of the trance, though the target is under no compulsion to follow commands if it wasn't already."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:shambling-horror",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Z82DvtSXafPmh4KV",
      "slug": "shambling-horror",
      "publicationTitle": "Pathfinder Book of the Dead",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/shambling-horror.webp"
    },
    "sourceHash": "sha256:0db645d29932ab378db4e873eb79211be0c9b26993e580adb3fda1131b6445dd",
    "translatableHash": "sha256:cafd312706020dc4b292a4b632bf05defcb625bf3be78c805ef23d5ab1b6bd9e",
    "data": {
      "schemaVersion": 1,
      "name": "Shambling Horror",
      "rank": 6,
      "rarity": "uncommon",
      "traits": [
        "attack",
        "concentrate",
        "evil",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "You reanimate the corpse of a fallen creature as an undead minion under your control. The reanimated creature is an undead skeleton or zombie. Choose a skeleton or zombie stat block of the same size as the original creature and of a level no higher than the creature's original level. The shambling horror keeps Speeds it had in life, as well as melee Strikes that deal only physical damage. These attacks use the highest attack modifier from the skeleton or zombie you choose. Some of the skeleton's or zombie's abilities might not make sense for the shambling horror, and some abilities the creature had in life might not persist in undeath; the GM makes the final choice of what abilities the horror has.\nA shambling horror has the minion trait. You can't control more than one shambling horror at the same time-if you create a new one while one is already under your control, you must choose one to release, causing it to lose the minion trait. Shambling horrors that have been released expire when the spell duration does. After the duration expires, you can cast shambling horror again on the same corpse to animate it once more. However, after the next sunrise, you can no longer animate the corpse as a shambling horror.\nUndead Skeletons\nLevel |\nSize |\nCreature Name |\n-1 |\nMedium |\nSkeleton Guard |\n0 |\nMedium |\nWolf Skeleton |\n1 |\nMedium |\nSkeletal Soldier |\n2 |\nMedium |\nSkeletal Champion |\n2 |\nLarge |\nSkeletal Horse |\n3 |\nLarge |\nSkeletal Giant |\n5 |\nMedium |\nHarpy Skeleton |\n5 |\nMedium |\nSkeletal Mage |\n6 |\nLarge |\nBeetle Carapace |\n7 |\nHuge |\nSkeletal Hulk |\n8 |\nLarge |\nDrake Skeleton |\n9 |\nGargantuan |\nTyrannosaurus Skeleton |\n11 |\nGargantuan |\nSkeleton Infantry |\n13 |\nGargantuan |\nSkeletal Titan |\nZombies\nLevel |\nSize |\nCreature Name |\n-1 |\nMedium |\nZombie Shambler |\n0 |\nMedium |\nZombie Snake |\n1 |\nMedium |\nPlague Zombie |\n2 |\nMedium |\nHusk Zombie |\n2 |\nLarge |\nZombie Brute |\n3 |\nLarge |\nZombie Owlbear |\n4 |\nGargantuan |\nShambler Troop |\n4 |\nMedium |\nZombie Lord |\n5 |\nMedium |\nWithered |\n6 |\nMedium |\nSulfur Zombie |\n6 |\nHuge |\nZombie Hulk |\n9 |\nHuge |\nZombie Dragon |\n11 |\nHuge |\nZombie Mammoth |",
      "castingTime": "3 actions",
      "range": "touch",
      "target": "1 corpse of a Gargantuan or smaller creature that has a level no greater than your level -4 and has died since the last sunrise",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:magic-warrior-aspect",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "b6UnLNikoq2Std1f",
      "slug": "magic-warrior-aspect",
      "publicationTitle": "Pathfinder Lost Omens World Guide",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:c1620f81164419495927b430958d43391c1b62f2a10afc50b0084dad9efa5025",
    "translatableHash": "sha256:30a6762e37ecd9d45986f0f2fc6e04ed8df3d618d9c93c87c9f01ea5bbc74e5b",
    "data": {
      "schemaVersion": 1,
      "name": "Magic Warrior Aspect",
      "rank": 2,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate",
        "morph"
      ],
      "traditions": [],
      "description": "You call upon the aspect of the animal from your mask, gaining physical features reminiscent of that animal. You morph slightly into that creature, gaining the Speeds and senses you would gain from using Animal Form to turn into the type of animal your mask represents; these special Speeds can't be increased by status bonuses or item bonuses.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "5 minutes",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:perfect-strike",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "GQopUYTuhmtb7WMG",
      "slug": "perfect-strike",
      "publicationTitle": "Pathfinder Lost Omens World Guide",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:722b6512c60212b40bd55d7ee359aea300e7ffc687800406b20b03fade17ae7e",
    "translatableHash": "sha256:b928cfd66770d0f3db4011aa75e87b27b4915397c114447a95bfb9b900c1c6b7",
    "data": {
      "schemaVersion": 1,
      "name": "Perfect Strike",
      "rank": 2,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "fortune"
      ],
      "traditions": [],
      "description": "Trigger You miss a Strike with an unarmed attack.\nYou call upon insight from your training to recover accuracy. Reroll the missed attack roll and keep the new result.",
      "castingTime": "reaction",
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
    "contentId": "pf2e:spell:spells-srd:magic-warrior-transformation",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "tp4K7mYDL5MRHvJc",
      "slug": "magic-warrior-transformation",
      "publicationTitle": "Pathfinder Lost Omens World Guide",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/magic-warrior.webp"
    },
    "sourceHash": "sha256:a31abf610e36e3d1d186afc171176a30a5ae0945b37d6affe5e94bd2fc89213d",
    "translatableHash": "sha256:e6e0212160e9f7e9dec4ab2e6a3bf57aecb979357c7990d3f118f4cb4798a556",
    "data": {
      "schemaVersion": 1,
      "name": "Magic Warrior Transformation",
      "rank": 2,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate",
        "polymorph"
      ],
      "traditions": [],
      "description": "You transform into the animal from your mask. You gain the effects of Animal Form, heightened to magic warrior transformation's level, and you can transform into only the type of animal your mask represents.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "heightened to magic warrior transformation's level, and you can transform into only the type of animal your mask represents."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:untwisting-iron-buffer",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "FPnkOYyWIaOzkmqn",
      "slug": "untwisting-iron-buffer",
      "publicationTitle": "Pathfinder Lost Omens World Guide",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:df82dae597d0b56e284f72b8bcf6b25be5665b301aaebbe4782e9ce3491ead0d",
    "translatableHash": "sha256:8e8636a37332a82efb29a3b9c11a7d2deea5751cfc21a09e1c68d73ae27261ee",
    "data": {
      "schemaVersion": 1,
      "name": "Untwisting Iron Buffer",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus"
      ],
      "traditions": [],
      "description": "You send currents of protective ki to the surface of your body that protect you from harm, at least until your enemies dissipate them. You gain 15 temporary Hit Points, which last for up to 3 rounds.\nHeightened 1 The temporary Hit Points increase by 5.\nSpell Effect: Untwisting Iron Buffer",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 The temporary Hit Points increase by 5.\nSpell Effect: Untwisting Iron Buffer"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:unfolding-wind-rush",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "tvO6Kmc2pQve9DC5",
      "slug": "unfolding-wind-rush",
      "publicationTitle": "Pathfinder Lost Omens World Guide",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:21bf3337e9392c77cd0280c031946fffa3256dcf9fdc0d0c1278e007ba8a72fe",
    "translatableHash": "sha256:0ad3fbdb7fdd2aa11ae7e41c93722b628858b0197f4c076262a5b1e73119e031",
    "data": {
      "schemaVersion": 1,
      "name": "Unfolding Wind Rush",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus"
      ],
      "traditions": [],
      "description": "You travel on a rushing wind. Move two times: two Strides, two Steps, or one Stride and one Step (in either order). You can Stride or Step into the air during this movement, moving upward at a 45-degree angle at most; if you end your movement in the air, you fall after taking one action or when your turn ends, whichever comes first. A Wall of Wind appears in all the spaces you left during this movement, lasting for 1 round.\nHeightened (5th) The wall of wind lasts 3 rounds.",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (5th) The wall of wind lasts 3 rounds."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:unblinking-flame-revelation",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "VBNevVovTCpn04vL",
      "slug": "unblinking-flame-revelation",
      "publicationTitle": "Pathfinder Lost Omens World Guide",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:11cd201768b596a32225b27a3f3726ae6fa28a32dbc331d78be15e05cf816118",
    "translatableHash": "sha256:cc5ccba269424a24f0cdcae547c075d94a3d85acd0445fb529c1791ccf26d3e4",
    "data": {
      "schemaVersion": 1,
      "name": "Unblinking Flame Revelation",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus"
      ],
      "traditions": [],
      "description": "You light your foe with revealing flame. The GM attempts a secret counteract check against each illusion affecting the creature; on a success, you suppress the illusion for the duration, rather than end the effect.",
      "castingTime": "1 action",
      "range": "",
      "target": "the creature you hit",
      "area": null,
      "duration": "2 rounds",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:unbreaking-wave-advance",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ytboJsyZEbE1MLeV",
      "slug": "unbreaking-wave-advance",
      "publicationTitle": "Pathfinder Lost Omens World Guide",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:19b8ac2d3c3bd1740e4422d490b2e7a75d11d15ced908b3d1efea39c33f1b4c5",
    "translatableHash": "sha256:e1c956b708d9fef64f324ba283a0797cf7fa1cf478932ede0581a2bd658dfdb6",
    "data": {
      "schemaVersion": 1,
      "name": "Unbreaking Wave Advance",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "water"
      ],
      "traditions": [],
      "description": "You unleash a mighty wave from your hand that buffets back your foes. Each creature in the area must attempt a Fortitude saving throw. If a creature pushed by unbreaking wave advance would be pushed into a solid barrier or another creature, it stops at that point and takes 3d6 damage.\nSuccess The creature is unaffected.\nFailure The creature is pushed 10 feet.\nCritical Failure The creature is pushed 20 feet.\nHeightened 1 The damage for pushing a creature into a solid barrier increases by 1d6.",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": "15 cone",
      "duration": "",
      "defense": "fortitude save",
      "damage": [
        {
          "formula": "3d6",
          "type": "untyped",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage for pushing a creature into a solid barrier increases by 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:invoke-the-crimson-oath",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "AsKLseOo8hwv5Jha",
      "slug": "invoke-the-crimson-oath",
      "publicationTitle": "Pathfinder Lost Omens Character Guide",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/invoke-the-crimson-oath.webp"
    },
    "sourceHash": "sha256:12c8428a46f87ec1e5ef263eadaa7d98b7ff34df823b85a544d799456d82f48a",
    "translatableHash": "sha256:65fb7c6574198f267c761cf6b1d8189e901c138134ac25638b946d522169f5ef",
    "data": {
      "schemaVersion": 1,
      "name": "Invoke the Crimson Oath",
      "rank": 2,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "Brandishing your weapon and shouting the final line of the Crimson Oath, you unleash a blast of destructive ruby energy. You must be wielding a melee weapon, and you perform this spell's somatic component by swinging the weapon in a downward arc. You deal normal melee damage for your weapon, including all appropriate bonuses, penalties, modifiers, and properties, to each creature in the spell's area; they must each attempt a basic Fortitude save. A creature that critically fails this save also suffers any additional effect you would normally inflict with your weapon on a critical hit; if the creature that critically fails its save is also immune to critical hits, it merely fails the save instead.\nYou can convert all the physical damage from this spell into vitality damage against all undead creatures in the area.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "20 cone",
      "duration": "",
      "defense": "basic fortitude save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:light-of-revelation",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ou56ShiFH7GWF8hX",
      "slug": "light-of-revelation",
      "publicationTitle": "Pathfinder Lost Omens Character Guide",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:f3116ca94995b08e0b44c740a714997edd3ffce6e84ad7bde8560006f8231a48",
    "translatableHash": "sha256:ec1a4409a7d032b058cd1576d0fa177b58543f1de968f56a3e6825e0ffeec857",
    "data": {
      "schemaVersion": 1,
      "name": "Light of Revelation",
      "rank": 2,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "light",
        "manipulate",
        "revelation"
      ],
      "traditions": [],
      "description": "You shed a luminous aura, illuminating a 30-foot radius with bright light. You and all allies in this area gain a +1 status bonus to Perception checks to detect Hidden or Undetected creatures, as well as Hidden objects, doors, and other features.",
      "castingTime": "2 actions",
      "range": "30-foot emanation",
      "target": "",
      "area": null,
      "duration": "5 minutes",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:sun-blade",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "pMTltbI3S3UIuFaR",
      "slug": "sun-blade",
      "publicationTitle": "Pathfinder Lost Omens Character Guide",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/sunblade.webp"
    },
    "sourceHash": "sha256:09c1b5da8429ecb4449e0ae058e1b532d616e86daa1c24b9a51903f6ea4f06eb",
    "translatableHash": "sha256:e8247605d33a590c4b74df9a3d8b79db3d404f07df63c63232f12972cee96370",
    "data": {
      "schemaVersion": 1,
      "name": "Sun Blade",
      "rank": 2,
      "rarity": "uncommon",
      "traits": [
        "attack",
        "concentrate",
        "fire",
        "focus",
        "light",
        "manipulate",
        "vitality"
      ],
      "traditions": [],
      "description": "You fire a ray of burning sunlight from your weapon. You must be wielding a sword or spear to cast sun blade, and you perform this spell's somatic component with the weapon. Make a spell attack roll. The ray deals 1d4 fire damage. If the target is unholy, the ray deals an additional 1d4 spirit damage, and if the target is undead, the ray deals an additional 1d4 vitality damage (both effects apply against creatures that are both unholy and undead). If you are in an area of bright natural sunlight, increase the die size of each damage die by one step (from d4 to d6).\nCritical Success The ray deals double damage.\nSuccess The ray deals full damage.\nHeightened 1 The damage increases by 1d4 fire, 1d4 spirit, and 1d4 vitality (or 1d6 of each type of damage in bright natural sunlight).",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [
        {
          "formula": "1d4",
          "type": "fire",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 1d4 fire, 1d4 spirit, and 1d4 vitality (or 1d6 of each type of damage in bright natural sunlight)."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:oathkeepers-insignia",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "cokeXkDHUAo4zHsw",
      "slug": "oathkeepers-insignia",
      "publicationTitle": "Pathfinder Lost Omens Gods & Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:825b87a69de5369263619f765c7978f4be83ad6fac54ed49e7ccd3a014fd0eb7",
    "translatableHash": "sha256:6301cfb2c22e8006edc4079c9c0d408b2c7c207814644a8a5c60409ac33da595",
    "data": {
      "schemaVersion": 1,
      "name": "Oathkeeper's Insignia",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "cleric",
        "concentrate",
        "focus"
      ],
      "traditions": [],
      "description": "Trigger You make a promise or deal.\nA magical indicator assures a creature that you've upheld your end of a bargain. When you Cast the Spell, you create a bracelet, flower, or other such trinket. If, while the spell persists, you complete the terms of the promise or deal you made, the trinket fades away with a pleasant chime; if you violate the terms instead, the trinket breaks with a dissonant crash.\nHeightened (3rd) The duration becomes 1 day.\nHeightened (5th) The duration becomes 1 week.\nHeightened (7th) The duration becomes 1 month.\nHeightened (9th) The duration becomes 1 year.",
      "castingTime": "free",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (3rd) The duration becomes 1 day.\nHeightened (5th) The duration becomes 1 week.\nHeightened (7th) The duration becomes 1 month.\nHeightened (9th) The duration becomes 1 year."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:suns-fury",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "LrFUj76CHDBV0vHW",
      "slug": "suns-fury",
      "publicationTitle": "Pathfinder Lost Omens Legends",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/suns-fury.webp"
    },
    "sourceHash": "sha256:42af54d0e1059116c7f49beb269bc43b5a31e994b5c6e573f3405505a80bc523",
    "translatableHash": "sha256:f7e1a15c99e8e6a0abb2f84f3ecca23722bdfa69648fcdb1c5766c5594bbc399",
    "data": {
      "schemaVersion": 1,
      "name": "Sun's Fury",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "fire",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "The target weapon becomes wreathed in a glowing flame. The weapon deals an additional 1d4 fire and 1 spirit damage on a successful Strike. In addition, the flame causes the weapon to glow as bright as a torch. You can Dismiss the spell.\nSpell Effect: Sun's Fury",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 weapon without an unholy rune that is unattended or wielded by you or a willing ally",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:shall-not-falter-shall-not-rout",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "rnFAHvKpcsU4BJD4",
      "slug": "shall-not-falter-shall-not-rout",
      "publicationTitle": "Pathfinder Lost Omens Legends",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/shall-not-falter-shall-not-rout.webp"
    },
    "sourceHash": "sha256:9f6691cdffd05b14f586fd3b8dc32511151c7590005de4af31e090a5ffdb5728",
    "translatableHash": "sha256:011bb03dd423f71ec6b368d6b2386911c12513207f09d371c4a43682fcb00caf",
    "data": {
      "schemaVersion": 1,
      "name": "Shall not Falter, Shall not Rout",
      "rank": 5,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "focus",
        "healing"
      ],
      "traditions": [],
      "description": "Calling out the fifth line of the Crimson Oath, you seal your most grievous injuries with a stroke of your blade. The first time each round that you Strike with your weapon and deal damage to a foe, you recover a number of HP equal to twice shall not falter, shall not rout's level. This healing can't raise your current HP above half of your maximum HP.",
      "castingTime": "1 action",
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
    "contentId": "pf2e:spell:spells-srd:glacial-heart",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ZyREiMaul0VhDYh3",
      "slug": "glacial-heart",
      "publicationTitle": "Pathfinder Lost Omens Legends",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:4c56b831676664783918be9150baf976282fe5e5c6ad94aa9ce0beaf877c4c06",
    "translatableHash": "sha256:2457e856fab3a48c3a8a262081f2f84326d1c8ff725d4d4ddcf01ea30b4400aa",
    "data": {
      "schemaVersion": 1,
      "name": "Glacial Heart",
      "rank": 5,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "focus",
        "hex",
        "manipulate",
        "witch"
      ],
      "traditions": [],
      "description": "Ice and bone-deep cold assail the target, freezing it from the inside out. The frosty assault deals 10d6 cold damage, subject to the target's Fortitude save. After the effects are resolved, the target is temporarily immune for 1 day.\nCritical Success The target is unaffected.\nSuccess The target takes half damage and is slowed 1 for 1 round. The spell ends.\nFailure The target takes full damage, is Slowed 1, and must attempt a Fortitude save at the end of each of its turns; this ongoing save has the incapacitation trait. On a failed save, the slowed condition increases by 1 (or 2 on a critical failure), to a maximum of slowed 4. On a success, the slowed condition decreases by 1. If at any point the slowed condition is reduced to 0, the spell ends.\nOnce a creature's actions are reduced to 0 by this slowed condition, the creature is completely encased in ice. It continues making saves against glacial heart, possibly allowing it to reduce its slowed condition enough that it can act. This ice has Hardness 4 and 8 Hit Points, and its DC to Force Open is your spell DC. Breaking the ice frees the creature and ends the spell. If someone other than the target breaks the ice from outside, the target is Stunned 1 and takes any damage dealt by the breaking effect in excess of the ice's Hit Points.\nCritical Failure As failure, but the target takes double damage and is initially Slowed 2.\nHeightened 1 Increase the cold damage by 2d6.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": "fortitude save",
      "damage": [
        {
          "formula": "10d6",
          "type": "cold",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 Increase the cold damage by 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:familiar-form",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "CHZQJg7O7991Vl4m",
      "slug": "familiar-form",
      "publicationTitle": "Pathfinder Lost Omens Pathfinder Society Guide",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/familiar-form.webp"
    },
    "sourceHash": "sha256:0dcb2d9f55889be01f85996e759593044996759fca12ba8a6c5f774f6ceed00f",
    "translatableHash": "sha256:c46628b979fa13abf4a530cf3a008ebeae58f35c59648c39ce3cf94d6048abba",
    "data": {
      "schemaVersion": 1,
      "name": "Familiar Form",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate",
        "polymorph"
      ],
      "traditions": [],
      "description": "You transform into a Tiny animal that commonly serves as a spellcaster's familiar. You gain the effects of the spell pest form, heightened to the level of familiar form you cast. However, you can transform into only a bat, cat, raven, snake, or other Tiny animal of a type that you have seen serve as a spellcaster's familiar.\nWhile in this form, despite the restrictions from polymorph battle forms, you retain the ability to cast spells of 1st rank or lower but only those without material components. You still can't make any Strikes or other attacks in pest form, as normal.\nHeightened (6th) You retain the ability to cast spells of 2nd rank or lower, rather than 1st, but still only those without material components. Additionally, the duration of familiar form increases to 10 minutes.\nHeightened (8th) You retain the ability to cast spells of 3rd rank or lower, rather than 1st, but still only those without material components. Additionally, the duration of familiar form increases to 10 minutes.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "heightened to the level of familiar form you cast. However, you can transform into only a bat, cat, raven, snake, or other Tiny animal of a type that you have seen serve as a spellcaster's familiar.\nWhile in this form, despite the restrictions from polymorph battle forms, you retain the ability to cast spells of 1st rank or lower but only those without material components. You still can't make any Strikes or other attacks in pest form, as normal.\nHeightened (6th) You retain the ability to cast spells of 2nd rank or lower, rather than 1st, but still only those without material components. Additionally, the duration of familiar form increases to 10 minutes.\nHeightened (8th) You retain the ability to cast spells of 3rd rank or lower, rather than 1st, but still only those without material components. Additionally, the duration of familiar form increases to 10 minutes."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:transcribe-moment",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "NxOYiKCqcuAHVRCj",
      "slug": "transcribe-moment",
      "publicationTitle": "Pathfinder Lost Omens Pathfinder Society Guide",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:5e9ca4b52cf9672b9de7582e9a04a644592d4e05d421a397760f51ab93bc7ffd",
    "translatableHash": "sha256:895a61f41b1577d7cecb96d0f9074cd0d1b284ebf1e4ce30f54fe19bfe03b4f4",
    "data": {
      "schemaVersion": 1,
      "name": "Transcribe Moment",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "You instantly create a small, permanent scroll that contains a magically precise written description of your current surroundings in every direction. Any creature who spends 1 minute to read the scroll-written in a language of your choice that you know-immediately sees and experiences your surroundings during the moment that you recorded (including whatever events transpired that round) exactly as you experienced it. This depiction records only what you can sense yourself. For example, if you can't see invisible creatures, the depiction doesn't reveal them even to a reader who could normally see them; a reader can't use their Perception to notice details you missed, but they can attempt a check to Recall Knowledge based on what they just experienced if they have knowledge that you lack. You can have multiple scrolls from transcribe moment in existence at the same time, up to a number equal to your Intelligence modifier. If you Cast the Spell again while already at the maximum number of scrolls, choose one of the current scrolls to lose its magic, then create the new one.",
      "castingTime": "2 actions",
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
    "contentId": "pf2e:spell:spells-srd:spellmasters-ward",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "VrhCpCIQB8PFax77",
      "slug": "spellmasters-ward",
      "publicationTitle": "Pathfinder Lost Omens Pathfinder Society Guide",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/spellmasters-ward.webp"
    },
    "sourceHash": "sha256:fd9bbee25b5e642c1b9d12f8d98cc30dc204e4bf92df907593f444d2ff659243",
    "translatableHash": "sha256:43045cbd2bebc766cd4347b793fcd012d029cc03f7ab8c57d8637b37789fb7e6",
    "data": {
      "schemaVersion": 1,
      "name": "Spellmaster's Ward",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "You create one or more glowing protective runes that revolve around you. For each additional action you use when Casting the Spell, increase the number of runes you create by one, to a maximum of three runes for 3 actions.\nWhen you next take damage from a spell, a rune is expended to prevent 2d6 + 0 untyped damage of that spell's damage. If damage from the triggering spell remains, additional runes are expended until the damage is completely negated, or until all runes have been spent, whichever comes first.\nHeightened 1 Each rune prevents an additional 1 damage.",
      "castingTime": "1 to 3 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 Each rune prevents an additional 1 damage."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:for-love-for-lightning",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "mtxMpGWpwwWSbySj",
      "slug": "for-love-for-lightning",
      "publicationTitle": "Pathfinder Lost Omens Knights of Lastwall",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/for-love-for-lightning.webp"
    },
    "sourceHash": "sha256:90d98700867197d670352d8f49eeca48ba39e722a62c2c018dc649c1ba9c2ef9",
    "translatableHash": "sha256:8dc05942032c829466c2192f4fa8ed7dcba5227d5d9f766e24b227dd0210b272",
    "data": {
      "schemaVersion": 1,
      "name": "For Love, For Lightning",
      "rank": 6,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "electricity",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "When you Cast the Spell, you plunge the required weapon into the ground, where it crackles with crimson lightning. When you Cast the Spell, and the first time during each of your subsequent turns that you Sustain the spell, the crimson lightning arcs. When the weapon arcs, one enemy of your choice within 30 feet of the weapon takes 3d12 electricity damage (basic Reflex save). If you Interact to draw the weapon from the ground, the spell ends.\nHeightened 2 The damage increases by 1d12.",
      "castingTime": "3 actions",
      "range": "",
      "target": "",
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
      "heightening": "Heightened 2 The damage increases by 1d12."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:untwisting-iron-roots",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "9o5aG5025ZczjkPb",
      "slug": "untwisting-iron-roots",
      "publicationTitle": "Pathfinder Lost Omens Impossible Lands",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:83a304215431a57f44507a61e2cba541d6b39bc4ec9078f50a16bbfdb2e68852",
    "translatableHash": "sha256:69af3ce5f5d52d4ea6ce30a9e3687b4d64af0b53697c8e19df22c7a67fd3ab10",
    "data": {
      "schemaVersion": 1,
      "name": "Untwisting Iron Roots",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "earth",
        "focus"
      ],
      "traditions": [],
      "description": "You manipulate the earth beneath your feet to throw your enemies off balance, leaving chunks of rock and rubble behind. Creatures within range take 2d6 bludgeoning damage, with a basic Reflex save; on a failed save, they also fall Prone. The affected area becomes difficult terrain, but you can move through the difficult terrain normally.\nHeightened 1 The damage increases by 1d6.",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": "10 emanation",
      "duration": "",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "2d6",
          "type": "bludgeoning",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:unfolding-wind-buffet",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ALuvl9GYawnsZZCx",
      "slug": "unfolding-wind-buffet",
      "publicationTitle": "Pathfinder Lost Omens Impossible Lands",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:e1477fc5754743dac8f0dec0dd0b817bdfa74d425140af34180fab2a4032009c",
    "translatableHash": "sha256:6e394319ad7e9cbe7f995bfb7e6ae9b765a66b67395fa74c63e43450008100d4",
    "data": {
      "schemaVersion": 1,
      "name": "Unfolding Wind Buffet",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "air",
        "concentrate",
        "focus"
      ],
      "traditions": [],
      "description": "You surround your unarmed attacks with the speed and force of air. Make three unarmed Strikes against the same target. If at least one was a successful hit, the target must attempt a Fortitude save or be pushed back 5 feet for each normal hit from the buffet, plus 10 feet for each critical hit.\nCritical Success The target is unaffected.\nSuccess The target is pushed back half the normal distance.\nFailure The target is pushed back the normal distance.\nCritical Failure The target is pushed back double the normal distance and then knocked Prone.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "",
      "defense": "fortitude save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:unblinking-flame-aura",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "floDCUOSzT0F6r77",
      "slug": "unblinking-flame-aura",
      "publicationTitle": "Pathfinder Lost Omens Impossible Lands",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:86339db758ee1d081799f9e23984dda410249d85b1ed7fc23969835f42ad305f",
    "translatableHash": "sha256:fce537e26cce50ccf75ba2f18cff6778c4e96b312c97122713a8223c4cc66dc4",
    "data": {
      "schemaVersion": 1,
      "name": "Unblinking Flame Aura",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "fire",
        "focus",
        "healing"
      ],
      "traditions": [],
      "description": "You focus your sight inside and call on your inner fire to grant you warmth, steady your vision, and soothe your body. You recover 15 healing. For the duration, you gain a +2 status bonus on Perception checks and resistance 10 to cold.\nSpell Effect: Unblinking Flame Aura\nHeightened 1 You recover an additional 3 Hit Points, and the resistance to cold increases by 2.",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 You recover an additional 3 Hit Points, and the resistance to cold increases by 2."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:steal-the-sky",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "zoY0fQYTF1NzezTg",
      "slug": "steal-the-sky",
      "publicationTitle": "Pathfinder Lost Omens Impossible Lands",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/steal-the-sky.webp"
    },
    "sourceHash": "sha256:54a4e5c171f8199806471b54e437b38dfd72ef8e15c003efbf6ec5d51bbf6852",
    "translatableHash": "sha256:5e041f741c06ea773f96d9991d190b521d5a2f25f8a655d17233bfa6b7fe8e1e",
    "data": {
      "schemaVersion": 1,
      "name": "Steal the Sky",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "air",
        "concentrate",
        "focus"
      ],
      "traditions": [],
      "description": "Trigger You make a successful unarmed Strike against a flying creature.\nYou deny a flying creature the support of the air.\nCritical Success The creature is unaffected.\nSuccess The target descends 60 feet. If it hits a surface, it takes bludgeoning damage as if it had fallen.\nFailure As success; if the target hits a surface, it falls Prone and can't Fly, levitate, or otherwise leave the ground for 1 minute.\nCritical Failure As failure, and the creature takes double damage from hitting a surface.\nHeightened 1 Increase the distance the creature must descend by 20 feet.",
      "castingTime": "reaction",
      "range": "",
      "target": "the creature you hit",
      "area": null,
      "duration": "",
      "defense": "fortitude save",
      "damage": [],
      "heightening": "Heightened 1 Increase the distance the creature must descend by 20 feet."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:unbreaking-wave-vapor",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ZQk2cGBCkATO25w0",
      "slug": "unbreaking-wave-vapor",
      "publicationTitle": "Pathfinder Lost Omens Impossible Lands",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:bb96470534795ff763427e4519e115fcf151b8ef0efdd705fd756c0654cb6dd3",
    "translatableHash": "sha256:fb4ed8d9e239c50d6a2c2867b8050d7ebc91d08922bbd91e7aaa112bf964927d",
    "data": {
      "schemaVersion": 1,
      "name": "Unbreaking Wave Vapor",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "water"
      ],
      "traditions": [],
      "description": "Trigger You're targeted by an attack made by an attacker you can see.\nYou're Concealed against the triggering attack and gain a +2 circumstance bonus to AC against it. After the triggering attack is complete, you can Step if the triggering attack hit or Step twice if the triggering attack missed.\nSpell Effect: Unbreaking Wave Vapor",
      "castingTime": "reaction",
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
    "contentId": "pf2e:spell:spells-srd:speaking-sky",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Zvg0FWzClGbzucFd",
      "slug": "speaking-sky",
      "publicationTitle": "Pathfinder Lost Omens Impossible Lands",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:cfe4fedd1bc96735ea9d44b3beed7654cfc313fcbf66e5a511bfb46a4b010dd3",
    "translatableHash": "sha256:8822da631a742edb5576865ec3431b8478f95ee5ee62de3101fecddd683497a4",
    "data": {
      "schemaVersion": 1,
      "name": "Speaking Sky",
      "rank": 6,
      "rarity": "uncommon",
      "traits": [
        "air",
        "concentrate",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "The air speaks to you. You can precisely sense any motion within 60 feet through vibration and air movement.\nSpell Effect: Speaking Sky",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 round",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:untwisting-iron-augmentation",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "8eOMAIvT7S1CJSit",
      "slug": "untwisting-iron-augmentation",
      "publicationTitle": "Pathfinder Lost Omens Impossible Lands",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/indestructibility.webp"
    },
    "sourceHash": "sha256:f27c67916675f8043e70a69b55307d2f06a9b0b1465259da0dfac3e253f76eff",
    "translatableHash": "sha256:433753ea7f9545f1438ca2a82ce215c05e12faa946a72af3e122d3a6f022a5a3",
    "data": {
      "schemaVersion": 1,
      "name": "Untwisting Iron Augmentation",
      "rank": 7,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "earth",
        "focus"
      ],
      "traditions": [],
      "description": "Your unarmed attacks are treated as cold iron and silver, they gain the earth trait, and they gain a +1 status bonus to damage rolls per damage die.\nSpell Effect: Untwisting Iron Augmentation\nHeightened (9th) Your unarmed attacks are also treated as adamantine.",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (9th) Your unarmed attacks are also treated as adamantine."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:unblinking-flame-emblem",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "KADeCawMG6WAzYHa",
      "slug": "unblinking-flame-emblem",
      "publicationTitle": "Pathfinder Lost Omens Impossible Lands",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:f4f130d6f498e3e21dfed3d03514f522d9339c976c45e79e49b24d4376424c26",
    "translatableHash": "sha256:947e2f665998bc873a0907459e977401f8528684c444b8b6a685e5f7e482ff49",
    "data": {
      "schemaVersion": 1,
      "name": "Unblinking Flame Emblem",
      "rank": 7,
      "rarity": "uncommon",
      "traits": [
        "fire",
        "focus"
      ],
      "traditions": [],
      "description": "Trigger Your last action was a successful Strike against an enemy\nYou emblazon the target with a fiery sigil that projects your sight and your flame onto them, allowing you and your allies to track their movements and making it easier to hit them. Attack rolls against the target gain a +1 status bonus, and successful Strikes against the target deal 1d6 fire damage, and 1d10 persistent fire damage on a critical hit. However, you're Off-Guard against other enemies, as the information from the emblem distracts you. The emblem takes your full attention; if you use unblinking flame emblem again before the original duration expires, the new casting replaces the previous casting.\nHeightened (9th) The fire damage increases to 1d8 fire damage, and the persistent fire damage on a critical hit increases to 1d12 persistent fire damage.",
      "castingTime": "1 action",
      "range": "",
      "target": "1 creature",
      "area": null,
      "duration": "3 rounds",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (9th) The fire damage increases to 1d8 fire damage, and the persistent fire damage on a critical hit increases to 1d12 persistent fire damage."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:unfolding-wind-blitz",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Ww4cPZ3QHTSpaM1m",
      "slug": "unfolding-wind-blitz",
      "publicationTitle": "Pathfinder Lost Omens Impossible Lands",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/wall-of-force.webp"
    },
    "sourceHash": "sha256:a6a9913b4101701da1969132ee74f82ec9287680320d7376fb698361e1e5093f",
    "translatableHash": "sha256:63cd921070b73636818d91d4108ad75f820384b4b37aa8e428f8ddd47e322e2d",
    "data": {
      "schemaVersion": 1,
      "name": "Unfolding Wind Blitz",
      "rank": 7,
      "rarity": "uncommon",
      "traits": [
        "air",
        "concentrate",
        "focus"
      ],
      "traditions": [],
      "description": "You blitz forward so quickly that you soar through the air, and nothing can react to you. Fly up to twice your Speed. This movement doesn't trigger reactions. At any point along the way, you can make Strikes with an unarmed attack against up to three different targets within your reach. You increase your multiple attack penalty for these attacks only after completing all of the attacks.",
      "castingTime": "2 actions",
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
    "contentId": "pf2e:spell:spells-srd:unbreaking-wave-barrier",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "YtJXpiu4ijkB6nP2",
      "slug": "unbreaking-wave-barrier",
      "publicationTitle": "Pathfinder Lost Omens Impossible Lands",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/tidal-surge.webp"
    },
    "sourceHash": "sha256:9c58c0e892e341131a497943c07ce825d5dae52cb7b3a45487186dbac5db8c91",
    "translatableHash": "sha256:65b75ec04231c4b86e32bb98a717356749c70483121df59e95fe65e1f9b6faab",
    "data": {
      "schemaVersion": 1,
      "name": "Unbreaking Wave Barrier",
      "rank": 7,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "water"
      ],
      "traditions": [],
      "description": "You create a protective circle around yourself that repels your foes. You gain a +1 status bonus to AC. Any creature other than you within the area, or attempting to move into the area, must attempt a Fortitude saving throw; a creature needs to attempt the Fortitude saving throw only once each round. If a creature pushed by unbreaking wave barrier would be pushed into a solid barrier or another creature, it stops at that point and takes 2d6 bludgeoning damage for every additional 5 feet it would've been pushed. On subsequent rounds, the first time you Sustain this Spell each round, you can increase the radius of the barrier by 5 feet.\nSpell Effect: Unbreaking Wave Barrier\nCritical Success The creature is unaffected.\nSuccess The creature isn't pushed, but the space within the barrier is difficult terrain for it.\nFailure The creature is pushed 10 feet, and the space within the barrier is difficult terrain for it.\nCritical Failure The creature is pushed 20 feet and knocked Prone, and the space within the barrier is difficult terrain for it.",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": "5 emanation",
      "duration": "sustained",
      "defense": "fortitude save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:untwisting-iron-pillar",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "9DtuMEyHhtHFRp5a",
      "slug": "untwisting-iron-pillar",
      "publicationTitle": "Pathfinder Lost Omens Impossible Lands",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/earthquake.webp"
    },
    "sourceHash": "sha256:2078021f1b559f35e8662388c784859e4a95735800616c3b73e1f21ccccd8106",
    "translatableHash": "sha256:0828b90e365df70f3243babe67b219dc860fe9b0c59d11442d93dc62b910dfa5",
    "data": {
      "schemaVersion": 1,
      "name": "Untwisting Iron Pillar",
      "rank": 9,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "earth",
        "focus"
      ],
      "traditions": [],
      "description": "You call upon the earth and your ki to shield you from your enemies. You gain 50 temporary Hit Points that last for the duration or until you lose them, as well as resistance 5 to all physical damage (except adamantine).\nSpell Effect: Untwisting Iron Pillar",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": null,
      "duration": "5 rounds",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:unblinking-flame-ignition",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "aFd00WT266VYPqOG",
      "slug": "unblinking-flame-ignition",
      "publicationTitle": "Pathfinder Lost Omens Impossible Lands",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:6b08186ca10ebdab131fe5186f9816b79acfae52017e3b20bdf170c7ca454c2d",
    "translatableHash": "sha256:4e07daf34a52234e4bd10538b3fecd8b6d591dc5b1d13699226e76cb1d5f9a30",
    "data": {
      "schemaVersion": 1,
      "name": "Unblinking Flame Ignition",
      "rank": 9,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "fire",
        "focus"
      ],
      "traditions": [],
      "description": "Trigger A foe reduces you to half your Hit Points or fewer.\nYou feel the most alive when pushed into a corner, as the insights and vision granted by the flame stoke into overdrive. Your body begins to emit a blazing aura of flames. You gain greater darkvision, low‐light vision, and the ability to see invisible creatures. You gain a fly Speed equal to your land Speed as you launch flame from your aura to soar through the sky. You become Quickened, and you can use the extra action each round only to Strike or Fly using your flames. Any creature who starts their turn within 5 feet of you takes 1d12 fire damage.\nSpell Effect: Unblinking Flame Ignition",
      "castingTime": "reaction",
      "range": "",
      "target": "",
      "area": null,
      "duration": "3 rounds",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:unbreaking-wave-containment",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "axYqY70kYu2lN20R",
      "slug": "unbreaking-wave-containment",
      "publicationTitle": "Pathfinder Lost Omens Impossible Lands",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:d9809db94d0672ae25cfc9c0a1e18d67b7672e6fa3d7189360ef18f2f929bd97",
    "translatableHash": "sha256:4fad0a5a2128af5af50f905d0606747374b8268b1d2b9cf6cc57224ed11df396",
    "data": {
      "schemaVersion": 1,
      "name": "Unbreaking Wave Containment",
      "rank": 9,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "incapacitation",
        "water"
      ],
      "traditions": [],
      "description": "You wrap enemies in four strands of water. When you cast the spell, make a spell attack roll against the targets. On a success, they're Immobilized until the spell ends or they Escape; on a critical success, they're also Restrained until the spell ends or they Escape. Each target that's immobilized or restrained also takes 10d6 bludgeoning damage from the constricting waves, with a basic Fortitude save. The first time each subsequent round when you sustain the Spell, if all the targets aren't immobilized or restrained, make a spell attack roll against any targets who are free but remain within range, with the same effects as when you cast the spell, immobilizing or restraining them depending on your spell attack roll. Creatures who are immobilized or restrained take 10d6 bludgeoning damage with a basic Fortitude save.",
      "castingTime": "3 actions",
      "range": "30 feet",
      "target": "4 creatures",
      "area": null,
      "duration": "sustained",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "10d6",
          "type": "bludgeoning",
          "kind": "damage"
        }
      ],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:unfolding-wind-crash",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "XjNROFtWnwovhCsq",
      "slug": "unfolding-wind-crash",
      "publicationTitle": "Pathfinder Lost Omens Impossible Lands",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/teleport.webp"
    },
    "sourceHash": "sha256:b01fb301fd6fce51a6fed7e7d82c45802ffd14fd9cf8f17280a7522bc6965e44",
    "translatableHash": "sha256:1dabfa6345e1cb0de21135d04b0a922d79eeb52c04310863642946e1fe4a9eb3",
    "data": {
      "schemaVersion": 1,
      "name": "Unfolding Wind Crash",
      "rank": 9,
      "rarity": "uncommon",
      "traits": [
        "air",
        "concentrate",
        "focus",
        "move"
      ],
      "traditions": [],
      "description": "You jump up to 120 feet in any direction and then deal 18d6 bludgeoning damage to creatures within a 20‐foot emanation after you land, with a basic Reflex save. Creatures who critically fail are also knocked Prone.\nHeightened (10th) The damage increases to 20d6.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "18d6",
          "type": "bludgeoning",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (10th) The damage increases to 20d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:silvers-refrain",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "xM35hJacTM1BSXUl",
      "slug": "silvers-refrain",
      "publicationTitle": "Pathfinder #147: Tomorrow Must Burn",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/silvers-refrain.webp"
    },
    "sourceHash": "sha256:07e4c23496861e55b2192a33d25e88fd1d15092f0a0c9bf50085b4cdea806a55",
    "translatableHash": "sha256:ed886dd9eaa475fa12c5203a5cd040eca7a1a4416239659be82325f0c73c22f4",
    "data": {
      "schemaVersion": 1,
      "name": "Silver's Refrain",
      "rank": 1,
      "rarity": "rare",
      "traits": [
        "bard",
        "cantrip",
        "composition",
        "concentrate"
      ],
      "traditions": [],
      "description": "The \"Song of Silver\" was an enchanted song used by the Silver Ravens to battle diabolic forces. You pull from select verses to temporarily replicate some of the legendary song's benefits, albeit on a much smaller scale.\nWeapon and unarmed attacks by allies in the area are treated as silver. In addition, this spell automatically attempts to counteract any Translocate cast by a devil within the area or cast by a devil attempting to enter the area using dimension door. If a devil attempts to enter the area using dimension door and the spell is counteracted, the devil remains where it started.\nSpell Effect: Silver's Refrain",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": "60 emanation",
      "duration": "1 round",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:electrified-crystal-ward",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "57ulIxg3Of2wCbEh",
      "slug": "electrified-crystal-ward",
      "publicationTitle": "Pathfinder #148: Fires of the Haunted City",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/electrified-crystal-ward.webp"
    },
    "sourceHash": "sha256:0139ff9601a4684ceae16dcb3401ba7d313c36f958483d1dc5a105acb7280654",
    "translatableHash": "sha256:ca404f1482dc4e85f83954afbd88404e16b7c813d4351fd5cc3c8e6ae44bc37a",
    "data": {
      "schemaVersion": 1,
      "name": "Electrified Crystal Ward",
      "rank": 3,
      "rarity": "rare",
      "traits": [
        "electricity",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "You create an Electric Latch Rune hazard on the target, creating a special crystalline lock on the object. You can also substitute your spell DC for any of the hazard's listed DCs. You can have only one such hazard active at a time, and if you cast this spell while a previous electric latch rune is active, the older hazard discharges harmlessly.\nHeightened 2 The hazard's damage increases by 1d12.",
      "castingTime": "2 actions",
      "range": "",
      "target": "1 hinge or latch",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [
        {
          "formula": "3d12",
          "type": "electricity",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The hazard's damage increases by 1d12."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:song-of-the-fallen",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "IGXGs9PlqUCvODcH",
      "slug": "song-of-the-fallen",
      "publicationTitle": "Pathfinder #150: Broken Promises",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/song-of-the-fallen.webp"
    },
    "sourceHash": "sha256:90bad10e3c2e5f66c5693bd2f20d10021bf5f000558d1cedeadc5a5385b5ceab",
    "translatableHash": "sha256:5fdeddf4fa85e2bd215b60956518b7d01d5388319fe54abbad31bdd525345562",
    "data": {
      "schemaVersion": 1,
      "name": "Song of the Fallen",
      "rank": 10,
      "rarity": "uncommon",
      "traits": [
        "bard",
        "composition",
        "concentrate",
        "focus"
      ],
      "traditions": [],
      "description": "You chant a dirge or an elegy that either rouses the dead to action or reminds undead that they should lay to rest.\nIf you target dead creatures, the bodies animate and can continue acting as if they were alive. A creature animated in this way has 60 temporary Hit Points. The animated creatures are slowed 1 but can otherwise act normally. Creatures animated with this spell die again once the spell ends.\nIf you target undead creatures, each undead must attempt a basic Will save.\nCritical Success The undead takes 5d6 vitality damage.\nSuccess The undead takes 10d6 vitality damage and is Slowed 1 for 1 round.\nFailure The undead takes 100 vitality damage and is Slowed 1 for 1 minute.\nCritical Failure The undead is destroyed.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "up to 4 dead creatures or up to 4 undead creatures",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:apex-companion",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "qqQYrXaRJXr7uc4i",
      "slug": "apex-companion",
      "publicationTitle": "Pathfinder #150: Broken Promises",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/apex-companion.webp"
    },
    "sourceHash": "sha256:e23a9364857d30031dfdbc47d13786a10567efdec2ebba8663d2f5c28a2c7eed",
    "translatableHash": "sha256:746670cd50cbac8850506daa8ce3dc6203e80a7ad596ef926aaf06b3ad0794a0",
    "data": {
      "schemaVersion": 1,
      "name": "Apex Companion",
      "rank": 10,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "druid",
        "focus",
        "manipulate",
        "polymorph"
      ],
      "traditions": [],
      "description": "You focus on the energies of all members of your animal companion's species, transforming your animal companion into its apex battle form. Your animal companion gains the following statistics and abilities while in its apex form.\n• Your animal companion becomes Huge and its attacks have 15-foot reach. It must have enough space to expand into or the spell is lost.\n• 30 temporary Hit Points.\n• Darkvision.\n• Your animal companion's attack's damage dice increase by one step, and its attack gains the deadly d12 trait.\n• +10-foot status bonus to its Speeds.\n• Ignores difficult terrain and greater difficult terrain.\nSpell Effect: Apex Companion",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 animal companion in your service",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:split-the-tongue",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "lXxP1ziyf4ozkpmv",
      "slug": "split-the-tongue",
      "publicationTitle": "Pathfinder #161: Belly of the Black Whale",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/split-the-tongue.webp"
    },
    "sourceHash": "sha256:f6323f5259de9355d27fa783736caea0c5ff05c17f41612a724eacc8420c32a9",
    "translatableHash": "sha256:b621fb9ec33f584f7ef239643aafc8d60520b4dad52f11d0bedc62347b7e8149",
    "data": {
      "schemaVersion": 1,
      "name": "Split the Tongue",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "The deceiving creature's tongue splits like a serpent's tongue. The creature takes 1d8 slashing damage and must attempt a Fortitude save.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage.\nFailure The creature takes full damage and is Stupefied 1 for 1d4.\nCritical Failure As failure, but the creature takes double damage and is Stupefied 2 for 1d4.\nHeightened 1 The damage increases by 1d8.",
      "castingTime": "reaction",
      "range": "30 feet",
      "target": "A creature within 30 feet fails a Deception or Diplomacy check.",
      "area": null,
      "duration": "",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "1d8",
          "type": "slashing",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 1d8."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:ordained-purpose",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "CPNlhDQP3aDmLzB3",
      "slug": "ordained-purpose",
      "publicationTitle": "Pathfinder #161: Belly of the Black Whale",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/ordained-purpose.webp"
    },
    "sourceHash": "sha256:1f244181edbcdc009b8b809a9b17813f6f2f3ad254ae1389f2af1b6c5454493c",
    "translatableHash": "sha256:87a969071c60c30dc3c97849fb13309a919a000ba75afc7fbb1a60bc6eae8f01",
    "data": {
      "schemaVersion": 1,
      "name": "Ordained Purpose",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate",
        "mental"
      ],
      "traditions": [],
      "description": "You call upon the authority of cosmic forces of order, overwhelming creatures with remorse and agony for acting outside of their station and purpose.\nEnemies in the area take 4d6 mental damage and must attempt a Will save. A creature that has lost abilities as a result of performing acts anathema to its deity or beliefs (such as a champion who violated their tenets and hasn't atoned) uses the outcome one degree of success worse than the result of its saving throw.\nAt the GM's discretion, a creature currently filling its appointed station and purpose (such as a farmer working in a field or a criminal in the act of committing a crime) uses the outcome one degree of success better than the result of its saving throw.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage.\nFailure The creature takes full damage and must Drop Prone as its first action on its next turn.\nCritical Failure The creature takes double damage, must Drop Prone as its first action on its next turn, and can't Stand during its next turn.\nHeightened 1 The damage increases by 2d6.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "30 emanation",
      "duration": "",
      "defense": "basic will save",
      "damage": [
        {
          "formula": "4d6",
          "type": "mental",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:wronged-monks-wrath",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "8TBgEzjZxPaOJOm1",
      "slug": "wronged-monks-wrath",
      "publicationTitle": "Pathfinder #166: Despair on Danger Island",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:065d0f96e53baddce5ccfb4c7c051e222ef8c89759fd9ba37505badd060d5cfd",
    "translatableHash": "sha256:8c1fada5af4f639be275f80e44186a4677d24e3555fda7904297aab7b59c17d9",
    "data": {
      "schemaVersion": 1,
      "name": "Wronged Monk's Wrath",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "electricity",
        "focus",
        "force",
        "manipulate",
        "monk"
      ],
      "traditions": [],
      "description": "You unleash your ki as a powerful storm of force and lightning, dealing 2d6 force damage and 2d12 electricity damage to creatures in the area.\nIf you use 2 actions to cast the spell, increase the size of the emanation to 10 feet and the damage to 3d6 force damage and 3d12 electricity damage.\nIf you use 3 actions to cast the spell, increase the size of the emanation to 20 feet and the damage to 4d6 force damage and 4d12 electricity damage.\nEach creature attempts one basic Reflex save that applies to both types of damage On a failed save, the creature is Deafened for 1 round; on a critical failure, the creature also takes 2d12 persistent electricity damage and is deafened for 1 minute.\nHeightened 2 The force damage increases by 1d6 and the electricity damage by 1d12, or 2d6 and 2d12 if you use 2 or 3 actions",
      "castingTime": "1 to 3 actions",
      "range": "",
      "target": "",
      "area": "5 emanation",
      "duration": "",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "2d6",
          "type": "force",
          "kind": "damage"
        },
        {
          "formula": "2d12",
          "type": "electricity",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The force damage increases by 1d6 and the electricity damage by 1d12, or 2d6 and 2d12 if you use 2 or 3 actions"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:rejuvenating-flames",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "lZx8jZfKrMEtyGY0",
      "slug": "rejuvenating-flames",
      "publicationTitle": "Pathfinder #168: King of the Mountain",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:5e3e93f19708f9c430a5bc091b5bee73f44bb550ed63ff52832f790880a02e14",
    "translatableHash": "sha256:7451ee93c8031c29b625e0d75805f6e7bff34b5aaaff7f15f0c75c4693af647e",
    "data": {
      "schemaVersion": 1,
      "name": "Rejuvenating Flames",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "fire",
        "focus",
        "healing",
        "manipulate",
        "sorcerer"
      ],
      "traditions": [],
      "description": "You create a gout of flame that both heals and burns. You restore 1d4 healing HP to all allies in the area, and those allies gain a +1 status bonus to Fortitude saves for 1 minute. Enemies in the area take 1d4 fire damage with a basic Reflex save.\nSpell Effect: Rejuvenating Flames\nHeightened 1 You restore an additional 1d4 HP to your allies and deal an additional 1d4 fire damage to enemies.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "15 cone",
      "duration": "",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "1d4",
          "type": "fire",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 You restore an additional 1d4 HP to your allies and deal an additional 1d4 fire damage to enemies."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:shroud-of-flame",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Q1OWufw6dUiY8yEI",
      "slug": "shroud-of-flame",
      "publicationTitle": "Pathfinder #168: King of the Mountain",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:ee7589b75bc193d9cd8be75ff96f8aaa6a8c54f2712f25883027ff002489d24d",
    "translatableHash": "sha256:e5810e7ccb3a2fc43d341f53fd4b55680c79d6e3115430cbcbee979bd9b46bfa",
    "data": {
      "schemaVersion": 1,
      "name": "Shroud of Flame",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "fire",
        "focus",
        "manipulate",
        "sorcerer"
      ],
      "traditions": [],
      "description": "You encircle yourself in an aura of protective flames. Each creature that hits you with an unarmed attack, Grapples you, or otherwise touches you takes 3 fire damage. When you Cast the Spell and the first time you sustain it each round, each creature in the area takes 3d6 fire damage (basic Reflex save).\nHeightened 1 The damage caused by touching you increases by 1, and the fire damage when you Cast the Spell or sustain it increases by 1d6.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "10 emanation",
      "duration": "1 minute",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "3d6",
          "type": "fire",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage caused by touching you increases by 1, and the fire damage when you Cast the Spell or sustain it increases by 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:cleansing-flames",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "tf4PMMMzR5xxJDun",
      "slug": "cleansing-flames",
      "publicationTitle": "Pathfinder #168: King of the Mountain",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:5fd81a674f0393e13b5a04a29fe302c9d111c5f3ae2774a628a9ba4080da5d8c",
    "translatableHash": "sha256:5aabd3f0afdf6a3c52102c74b4d0d0d7c66f7db4e718fbcab27580d3bd406200",
    "data": {
      "schemaVersion": 1,
      "name": "Cleansing Flames",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "fire",
        "focus",
        "healing",
        "manipulate",
        "sorcerer"
      ],
      "traditions": [],
      "description": "You wrap the target in purifying flames. You can attempt to counteract a single poison or non-curse effect imparting the Clumsy, Dazzled, Enfeebled, Fatigued, Frightened, Paralyzed, Sickened, or Stupefied condition. The target can choose to empower the flames with their life force, becoming Drained 1 (or increasing their drained value by 1, if already under the condition) to grant you a +1 circumstance bonus to your counteract check.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:stumbling-curse",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "X8PSYw6WC2ePYSXd",
      "slug": "stumbling-curse",
      "publicationTitle": "Pathfinder #169: Kindled Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:cc63274f95fe2206a8f56531009ea3994db0b8c43c142204b788e5fb4cd73570",
    "translatableHash": "sha256:1bc0263ed993c52546d33e9ac801c291957342e7c889612c583d8a10deda6202",
    "data": {
      "schemaVersion": 1,
      "name": "Stumbling Curse",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "curse",
        "focus",
        "hex",
        "manipulate",
        "witch"
      ],
      "traditions": [],
      "description": "With a twist of a finger, you send a creature careening on a haphazard trajectory. The target must attempt a Reflex save.\nCritical Success The target is unaffected.\nSuccess The target takes a -2 status penalty to Athletics and Acrobatics checks.\nFailure As success, and each time the target Strides, it uses the first 5 feet of movement of the Stride to move 5 feet in a random direction (this is forced movement). This has no effect on a creature with only 5 feet of movement.\nCritical Failure As failure, except you control the direction of the target's first 5 feet of movement of the Stride.\nSpell Effect: Stumbling Curse",
      "castingTime": "1 action",
      "range": "60 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": "basic reflex save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:web-of-influence",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "HqZ1VWIcXXZXWm3K",
      "slug": "web-of-influence",
      "publicationTitle": "Pathfinder #182: Graveclaw",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/web-of-influence.webp"
    },
    "sourceHash": "sha256:f2d81a5bb7e29cdb699e012169fa45bc8fc8617c3273f2fecd211dec8b993d4b",
    "translatableHash": "sha256:2d08d2dd15df63ddaca9b86e3369729ef4e472080d1d5b4b77e131322d184031",
    "data": {
      "schemaVersion": 1,
      "name": "Web of Influence",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "detection"
      ],
      "traditions": [],
      "description": "You learn the location of the nearest creature to whom the target is connected in a magical manner. A creature sustaining a spell on the target is connected to it for the purposes of this spell, as are any creatures who are targets of a spell effect currently affecting the target (such as all the targets of a Illusory Disguise spell), members of a coven, and creatures that are magically bonded to the target (such as with the Heartbond ritual). The GM is the final arbiter of whether a creature is magically connected to the target. If you already know individuals who are magically connected to the target, you can exclude them from the spell.\nThis spell doesn't tell you anything about the nearest magically connected creature other than its current distance and direction. If the nearest creature is on a different plane the spell indicates this but doesn't reveal which plane.",
      "castingTime": "10 minutes",
      "range": "touch",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:soulshelter-vessel",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "wYSLTNvmxbe78l2c",
      "slug": "soulshelter-vessel",
      "publicationTitle": "Pathfinder #183: Field of Maidens",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/soulshelter-vessel.webp"
    },
    "sourceHash": "sha256:ff121def0d6af3def721fe6080934d90a3f16c3e2309320d4321f0631ebfc103",
    "translatableHash": "sha256:bc6168d562b1ee7e0a4334175eee12acf3f24bbf4b451fbed8ae267bfe7b12ee",
    "data": {
      "schemaVersion": 1,
      "name": "Soulshelter Vessel",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "good",
        "healing",
        "manipulate"
      ],
      "traditions": [],
      "description": "You connect the spirit of the target creature with the target object, giving their spirit a durable vessel that protects and empowers their body. You create a pool of healing within the object, which starts out with 40 HP worth of healing per Bulk of the object. (These HP can only be used by the creature, and don't increase the object's HP.) When you Cast the Spell, the targeted creature regains 10 HP, which come out of the object's pool. You can also spend a single action-which has the concentrate, good, healing, necromancy, and vitality traits-to repeat this transfer. When the pool is empty, the object becomes broken. The spell ends if the object becomes broken or the targets are no longer within 500 feet of each other.\nIf the target creature would be reduced to 0 Hit Points, the creature regains either 20 HP or the amount left in the object's pool, whichever is lower. The object immediately becomes broken, ending the spell.\nHeightened 2 Increase the maximum Bulk of the item by 1 (potentially increasing the size of the healing pool), the amount of HP exchanged each time the stone is used by 5, and the amount of HP exchanged when the creature would be reduced to 0 HP by 10 (or by the amount left in the pool, if it's lower).",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 willing creature and 1 non-magical stone object of 1 or 2 Bulk",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 2 Increase the maximum Bulk of the item by 1 (potentially increasing the size of the healing pool), the amount of HP exchanged each time the stone is used by 5, and the amount of HP exchanged when the creature would be reduced to 0 HP by 10 (or by the amount left in the pool, if it's lower)."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:ash-form",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "2B0C22OuX9YrIJ5y",
      "slug": "ash-form",
      "publicationTitle": "Pathfinder #185: A Taste of Ashes",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/ash-form.webp"
    },
    "sourceHash": "sha256:b12f46f154424bdf249c8cba7475961f3f5d26977ef16f7063b9f41007589687",
    "translatableHash": "sha256:42d9b6355a6ea86e94aa99c3a527b7ba7382a1765d9081646abde95279ace83c",
    "data": {
      "schemaVersion": 1,
      "name": "Ash Form",
      "rank": 6,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "cursebound",
        "focus",
        "manipulate",
        "oracle"
      ],
      "traditions": [],
      "description": "You take the form of a cloud of minuscule ash particles. You gain fast healing 3, resistance 10 to piercing and slashing damage, and immunity to bleed, falling damage, and precision damage. You can't move through solid objects, but you can stream through tiny gaps as if they were difficult terrain. Any ability with the air trait that involves blowing or shifting wind (such as Gust of Wind) deals you 1d6 bludgeoning damage per rank of the spell each round you are in its area, in addition to its normal effects.\nHeightened (9th) The resistance increases to 15\nSpell Effect: Ash Form",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (9th) The resistance increases to 15\nSpell Effect: Ash Form"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:suffocate",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "qGWORxQ0aSsH2taf",
      "slug": "suffocate",
      "publicationTitle": "Pathfinder #186: Ghost King's Rage",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/agitate.webp"
    },
    "sourceHash": "sha256:20658a6c356099e70535eaae1aaefa444b317b83460a7701ce143ec242e49d03",
    "translatableHash": "sha256:adb1efc93e3b210b34dcdd4da20861a5d1e0ad51f175bc2f5d1b9c26b7957b6c",
    "data": {
      "schemaVersion": 1,
      "name": "Suffocate",
      "rank": 6,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "incapacitation",
        "manipulate",
        "nonlethal"
      ],
      "traditions": [],
      "description": "You forcefully and cruelly draw the living breath from a creature's lungs, dealing 4d8 bludgeoning damage. The creature must attempt a Fortitude save.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage.\nFailure The creature takes full damage. For the duration, the creature must hold its breath or suffocate.\nCritical Failure The creature takes double damage, and all the air is pulled from the creature's lungs. The creature falls Unconscious and starts suffocating for the duration.\nHeightened (9th) You can target up to 5 creatures.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 living creature that needs to breathe",
      "area": null,
      "duration": "1 minute",
      "defense": "fortitude save",
      "damage": [
        {
          "formula": "4d8",
          "type": "bludgeoning",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (9th) You can target up to 5 creatures."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:unraveling-blast",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "PaHxcqXihXkkXPsB",
      "slug": "unraveling-blast",
      "publicationTitle": "Pathfinder Stolen Fate Player's Guide",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/seal-fate.webp"
    },
    "sourceHash": "sha256:4e14d3ac587a66cbf11eb900061ca92990b062f0db315e6895fa0fe8d74bef8b",
    "translatableHash": "sha256:3901f541ac9bfdda01b8e15b72622d2d8ef068c03fd51df4eb08a1a5a4edcd70",
    "data": {
      "schemaVersion": 1,
      "name": "Unraveling Blast",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate",
        "sorcerer"
      ],
      "traditions": [],
      "description": "You unleash a small blast of potential that destroys one of a creature's possible futures, leaving them reeling. You deal 2d4 mental damage to the creature, and it must attempt a Will save.\nCritical Success The creature is unaffected.\nSuccess The creature takes half the mental damage.\nFailure The creature takes full damage and is Off-Guard until the start of its turn.\nCritical Failure The creature takes double damage, becomes Stunned 1, and is off-guard until the start of your next turn.\nHeightened 1 The damage increases by 3d4.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": "will save",
      "damage": [
        {
          "formula": "2d4",
          "type": "mental",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 3d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:invoke-the-harrow",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "82gDiXTKsCmdIF6Q",
      "slug": "invoke-the-harrow",
      "publicationTitle": "Pathfinder Stolen Fate Player's Guide",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:2900f9631ceef080dd87e8ecf15a0c787b9e844320ac70d18eb3d2feb3c40a4c",
    "translatableHash": "sha256:435f6689b3bd00847de2417f8965c89114c3bafe02691ec5f1acbd3ea0f1caed",
    "data": {
      "schemaVersion": 1,
      "name": "Invoke the Harrow",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate",
        "sorcerer"
      ],
      "traditions": [],
      "description": "You draw a card from the harrow, either one from a deck you have in hand or magically produce one as part of the spell. You use the power of the card's suit to influence a creature around you. When you draw a card, you can choose to impart a boon or bane associated with the card's suit. The target must attempt a Will save. On a failure, they receive the effects of the chosen boon or bane. If you target an ally with this spell, they can choose to willingly accept the effects without attempting a saving throw. The target can attempt to remove the card's influence by using an action, which has the concentrate trait, to attempt the saving throw again; on a success, the effect ends.\nTo determine the card, draw a card from a harrow deck. If you don't have a harrow deck available, you can roll 1d6 to randomly determine the suit you draw.\n1. Hammers (Str) Boon: The target gains a +2 status bonus to damage rolls; Bane: The target is Enfeebled 1.\n2. Keys (Dex) Boon: The target gains a +1 status bonus to AC; Bane: The target is Clumsy 1.\n3. Shields (Con) Boon: The target gains temporary Hit Points equal to twice the spell's rank; Bane: The target is Drained 1.\n4. Books (Int) Boon: The target gains a +1 status bonus to skill checks; Bane: The target is Stupefied 1.\n5. Stars (Wis) Boon: The target gains a +1 status bonus to saving throws; Bane: The target is Confused.\n6. Crowns (Cha) Boon: The target can roll twice and take the higher result on a single check during the duration. This is a fortune effect; Bane: The target must roll twice and take the lower result on a single check of your choosing during the duration. This is a misfortune effect.\nHeightened (6th) The duration is 1 minute. The target must succeed a total of two saving throws to end the effect. The value of boons and banes doubles. The Crowns suit affects a total of three checks during the duration.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 round",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened (6th) The duration is 1 minute. The target must succeed a total of two saving throws to end the effect. The value of boons and banes doubles. The Crowns suit affects a total of three checks during the duration."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:rewrite-possibility",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "BAu5AgqoO556clyK",
      "slug": "rewrite-possibility",
      "publicationTitle": "Pathfinder Stolen Fate Player's Guide",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/comprehend-language.webp"
    },
    "sourceHash": "sha256:768c604ed29e0a9e892393b6a650b1e583359ce262711e5b33ae86004d0f892f",
    "translatableHash": "sha256:b3cc0b216ac66e243e887c8c8383fd922de00050c52847bf65ff129cf79cc397",
    "data": {
      "schemaVersion": 1,
      "name": "Rewrite Possibility",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "fortune",
        "manipulate",
        "mental",
        "sorcerer"
      ],
      "traditions": [],
      "description": "You continually glimpse into the target's future and nudge fate to guide them toward the best possible outcome. Due to the amount of information this spell requires you to process, you can't have more than one rewrite possibility spell in effect at a time. Casting it again ends the previous casting. While rewrite possibility is in effect, the target gains a +1 status bonus to initiative rolls. In addition, you gain the following reaction.\nRewrite Possibility r\nTrigger The target fails a check\nEffect The target rolls again with a +2 status bonus and uses the higher result.",
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
    "contentId": "pf2e:spell:spells-srd:ki-cutting-sight",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "jrlCEw9rqBi4qU6g",
      "slug": "ki-cutting-sight",
      "publicationTitle": "Pathfinder Wake the Dead #2",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:ce55632761406029b26a0bac6956793f84061aa498ca3a69d347f42e354c5959",
    "translatableHash": "sha256:19babc11eb70c5a13d5fb7c02abe6b090f5a12f86c31ae9decbdccbd5316accb",
    "data": {
      "schemaVersion": 1,
      "name": "Ki Cutting Sight",
      "rank": 3,
      "rarity": "rare",
      "traits": [
        "focus",
        "manipulate",
        "monk"
      ],
      "traditions": [],
      "description": "Ki flows through everything in existence—animals and plants, living and dead, mortals and spirits. Strike at just the right place, in just the right way, and the flow is stopped, with dire consequences.\nWhen you Cast the Spell, make a check (perception, defense:fortitude) check against the target's Fortitude DC. If you succeed, the next time you deal damage to the target with a Strike or ki spell, you deal 4d10 additional slashing damage.\nSpell Effect: Ki Cutting Sight\nHeightened 1 The slashing damage increases by 1d10.",
      "castingTime": "1 action",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 The slashing damage increases by 1d10."
    }
  }
]
