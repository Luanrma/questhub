import type { Pathfinder2eOriginalContentRecord } from '../../records'
import type { Pathfinder2eSpellData } from '../types'

export const PATHFINDER_2E_EXHAUSTIVE_09_SPELL_ORIGINALS: readonly Pathfinder2eOriginalContentRecord<Pathfinder2eSpellData>[] = [
  {
    "contentId": "pf2e:spell:spells-srd:possession",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "wU6hNzK8Yfqdmc8m",
      "slug": "possession",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/possession.webp"
    },
    "sourceHash": "sha256:e76bb61cd8ba13250df7a634c98ff1abefcd99c37b340231325856b765f38800",
    "translatableHash": "sha256:b623c7ced141624ffe2f3fa60cb697b705a39c27e1492891b3401a656512a822",
    "data": {
      "schemaVersion": 1,
      "name": "Possession",
      "rank": 7,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "incapacitation",
        "manipulate",
        "mental",
        "possession"
      ],
      "traditions": [
        "occult"
      ],
      "description": "You send your mind and soul into the target's body, attempting to take control. The target must attempt a Will save. If you want to exert less control over the target, you can choose to use the effects of any degree of success more favorable to the target.\nWhile you're possessing a target, your own body is Unconscious and can't wake up normally. You can sense everything the possessed target does. You can Dismiss this spell. If the possessed body dies, the spell ends and you must succeed at a Fortitude save against your spell DC or be Paralyzed for 1 hour, or 24 hours on a critical failure. If the spell ends during an encounter, you act just before the possessed creature's initiative.\nCritical Success The target is unaffected.\nSuccess You possess the target but can't control it. You ride along in the body while the spell lasts.\nFailure You possess the target and take partial control of it. You no longer have a separate turn; instead, you might control the target. At the start of each of the target's turns, it attempts another Will save. If it fails, it's Controlled by you on that turn; if it succeeds, it chooses its own actions; and if it critically succeeds, it forces you out and the spell ends.\nCritical Failure You possess the target fully, and it can only watch as you manipulate it like a puppet. The target is controlled by you.\nHeightened (9th) The duration is 10 minutes, and you can physically enter the creature's body, protecting your physical body while the spell lasts.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 living creature",
      "area": null,
      "duration": "1 minute",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened (9th) The duration is 10 minutes, and you can physically enter the creature's body, protecting your physical body while the spell lasts."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:fiery-body",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "XS7Wyh5YC0NWeWyB",
      "slug": "fiery-body",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:390a99eee1f2dbd596577e94c9b998c201b27ad7776894c70f04bc6b883830b9",
    "translatableHash": "sha256:1da5d24173d9c42b3d9ffa317d9083cc1acb241a0d5648887e4c3b81b0ab2e57",
    "data": {
      "schemaVersion": 1,
      "name": "Fiery Body",
      "rank": 7,
      "rarity": "common",
      "traits": [
        "concentrate",
        "fire",
        "manipulate",
        "polymorph"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You become living flame, giving you fire immunity, resistance 10 to precision damage, and weakness 5 to cold and to water. Any creature that touches you or damages you with an unarmed attack or non-reach melee weapon takes 3d6[fire] damage.\nYour unarmed attacks deal an additional 1d4 fire damage, and your fire spells deal one additional die of fire damage (of the same damage die the spell uses). You can cast Ignition as an innate spell; the casting is reduced from 2 actions to 1.\nIn fire form, you have a fly Speed of 40 feet and don't need to breathe.\nSpell Effect: Fiery Body\nHeightened (9th) Creatures touching you take 4d6[fire] damage instead of 3d6, your unarmed attacks deal 2d4 additional fire damage, and you have a fly Speed of 60 feet.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (9th) Creatures touching you take 4d6[fire] damage instead of 3d6, your unarmed attacks deal 2d4 additional fire damage, and you have a fly Speed of 60 feet."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:planar-seal",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "XZE4BawIlTf88Yl9",
      "slug": "planar-seal",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/dimensional-lock.webp"
    },
    "sourceHash": "sha256:fe77646bf3019e173ed8368fcfca545e8f0b800520332881f51fcd3f78f0383d",
    "translatableHash": "sha256:90c858566af73263cc3d87e5b7dbadf2e16e7237c9533d2b23176f3558927638",
    "data": {
      "schemaVersion": 1,
      "name": "Planar Seal",
      "rank": 7,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult"
      ],
      "description": "You create a visible magical barrier that attempts to counteract teleportation effects and planar travel into or out of the area, including items that allow access to extradimensional spaces. Planar seal tries to counteract any attempt to summon a creature into the area but doesn't stop the creature from departing when the summoning ends.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "",
      "area": "60 burst",
      "duration": "until your next daily preparations",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:execute",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Z9OrRXKgAPv6Hn5l",
      "slug": "execute",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:2cc799c79b825ab3dd1dd9d8f2a1c96214e2037e8633a2dd740f0d5d3cc0f0e1",
    "translatableHash": "sha256:b62b807fcbcd7a708f13a8da1b7ba1f0f04ab92908125a8e211c58aed658745e",
    "data": {
      "schemaVersion": 1,
      "name": "Execute",
      "rank": 7,
      "rarity": "common",
      "traits": [
        "concentrate",
        "death",
        "manipulate",
        "void"
      ],
      "traditions": [
        "divine",
        "primal"
      ],
      "description": "You point at a creature and invoke the demise of all things. The target takes 70 void damage with a basic Fortitude save. If the target is undead or otherwise has void healing, the spell loses the death and void traits and gains the vitality trait, and the target takes 70 vitality damage with a basic Fortitude save.\nHeightened (+1) The damage increases by 10.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "70",
          "type": "void",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+1) The damage increases by 10."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:moment-of-renewal",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "4MOew29Z1oCX8O28",
      "slug": "moment-of-renewal",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/moment-of-renewal.webp"
    },
    "sourceHash": "sha256:e0f52f1db8bdb78e94c13f4fccc952eece274df42e405f3b17efade221c1dae3",
    "translatableHash": "sha256:bda9ede959b21e6d6f506f0c42d93f1d1c89c49e7f7b15e35186fd727ae6dcd2",
    "data": {
      "schemaVersion": 1,
      "name": "Moment of Renewal",
      "rank": 8,
      "rarity": "common",
      "traits": [
        "concentrate",
        "healing",
        "manipulate"
      ],
      "traditions": [
        "divine",
        "primal"
      ],
      "description": "The targets experience a day's worth of recovery in an instant. Any detrimental effects that would be gone after 24 hours end, though this doesn't shorten the duration of any active spells affecting the targets. The targets regain Hit Points and recover from conditions as if they had taken 24 hours of rest, but they do not make their daily preparations again or gain any benefits of rest other than healing. The targets are then temporarily immune for 1 day.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "up to 6 creatures",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:monstrosity-form",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "8AMvNVOUEtxBCDvJ",
      "slug": "monstrosity-form",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/monstrosity-form.webp"
    },
    "sourceHash": "sha256:ca96a234092decbcc1f35b8d6853011b4756d1787002bc98051e8e37d8458aed",
    "translatableHash": "sha256:b4d7526fe12ff1784713fb5afa709d36b7d43bc88302a3571fe86660bb11ddec",
    "data": {
      "schemaVersion": 1,
      "name": "Monstrosity Form",
      "rank": 8,
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
      "description": "You transform into the shape of a legendary monster, assuming a Huge battle form. You must have enough space to expand into or the spell is lost. When you cast this spell, choose phoenix, cave worm, or sea serpent. While in this form, you gain the beast trait (for phoenix) or the animal trait (for cave worm or sea serpent). You can Dismiss the spell.\nYou gain the following statistics and abilities regardless of which battle form you choose:\n• AC = 20 + your level. Ignore your armor's check penalty and Speed reduction.\n• 20 temporary Hit Points.\n• Darkvision.\n• One or more unarmed melee attacks specific to the battle form you choose, which are the only attacks you can Strike with. You're trained with them. Your attack modifier is +28, and you use the listed damage. These attacks are Strength based (for the purpose of the Enfeebled condition, for example). If your unarmed attack modifier is higher, you can use it instead.\n• Athletics modifier of +30, unless your own modifier is higher.\nYou also gain specific abilities based on the type of monster you choose:\n• Cave Worm\n• Speed 40 feet, burrow 30 feet, swim 20 feet;\n• Melee 1 jaws (reach 10 feet), Damage 2d12+20 piercing;\n• Melee 1 stinger (agile, reach 10 feet), Damage 2d8+15 piercing plus 2d6 persistent poison;\n• Melee 1 body (reach 10 feet) Damage 2d8+20 bludgeoning;\n• Inexorable You automatically recover from the Paralyzed, Slowed, and Stunned conditions at the end of each of your turns. You're also immune to being Immobilized and ignore difficult terrain and greater difficult terrain.\n• Phoenix\n• Speed 30 feet, fly 90 feet;\n• Melee 1 beak (reach 15 feet), Damage 2d6+12 piercing plus 2d4 fire and 2d4 persistent fire;\n• Melee 1 talon (agile, reach 15 feet), Damage 2d8+12 slashing;\n• Shroud of Flame (aura, fire, primal) 20 feet. You gain an aura of fire that extends out from you. A creature that enters or ends its turn within the aura takes 2d6 fire damage. A creature can take this damage only once per turn. You can activate or deactivate this aura with a Sustain action.\n• Sea Serpent\n• Speed 20 feet, swim 90 feet;\n• Melee 1 jaws (reach 15 feet), Damage 2d12+20 piercing;\n• Melee 1 tail (reach 25 feet), Damage 2d8+20 bludgeoning;\n• Spine Rake 2 (move) You extend your spines and Swim or Stride. Each creature you're adjacent to at any point during your movement takes 4d8+10 slashing damage (basic Reflex against your spell DC).\nSpell Effect: Monstrosity Form\nHeightened (9th) You instead gain AC = 22 + your level, 25 temporary HP, attack modifier +31, increase damage by one damage die, and Athletics +33.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (9th) You instead gain AC = 22 + your level, 25 temporary HP, attack modifier +31, increase damage by one damage die, and Athletics +33."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:arctic-rift",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "C2GYCH3TtUFqPfdX",
      "slug": "arctic-rift",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:2c13543becf855d44c8185703b827293a47af37967002c100005ad5541cd6587",
    "translatableHash": "sha256:b263a8b8c2ad5ee372ae2a19d1b63631093f71db01a7fb528fd8dfe29c908fb2",
    "data": {
      "schemaVersion": 1,
      "name": "Arctic Rift",
      "rank": 8,
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
      "description": "A jagged crack opens in the air, dealing 12d8 cold damage as it draws away warmth. Each creature along the rift must attempt a Fortitude save.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage.\nFailure The creature takes full damage and is Slowed 1 until the start of your next turn.\nCritical Failure The creature takes double damage, is Immobilized by a layer of ice, and is slowed 1 as long as it's immobilized. The ice is an object with 60 Hit Points, Hardness 5, immunity to cold damage, and vulnerability 10 to fire. It has object immunities and is destroyed if the target Escapes.\nHeightened (+1) The damage increases by 1d8 and the ice's Hit Points increase by 5.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "120 line",
      "duration": "",
      "defense": "fortitude save",
      "damage": [
        {
          "formula": "12d8",
          "type": "cold",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+1) The damage increases by 1d8 and the ice's Hit Points increase by 5."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:pinpoint",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "CeSh8QcVnqP5OlLj",
      "slug": "pinpoint",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:3b873facc7e5954dd7a06acdd4cd3c0ccf196a72f3eab45aa0cf8e351b1d64e9",
    "translatableHash": "sha256:274c3a7616fd3cee4a4eedaca6f170753344caa76b08d1a129f30f1d615ea599",
    "data": {
      "schemaVersion": 1,
      "name": "Pinpoint",
      "rank": 8,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "detection",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult"
      ],
      "description": "You learn the name of the target's exact location (including the building, community, and country) and plane of existence. You can target a creature only if you've seen it in person, have one of its significant belongings, or have a piece of its body, such as a lock of hair. To target an object, you must have touched it or have a fragment of it. Pinpoint automatically overcomes protections against detection of lower rank than this spell, even if they would normally have a chance to block it.",
      "castingTime": "10 minutes",
      "range": "unlimited",
      "target": "1 creature or object",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:uncontrollable-dance",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Jvyy6oVIQsD34MHB",
      "slug": "uncontrollable-dance",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/uncontrollable-dance.webp"
    },
    "sourceHash": "sha256:bdac38e280fc1087ff7086ae9642758445018f92201aae5058a611143736da7d",
    "translatableHash": "sha256:9a502af3acf9a23b36bc2acd5d61ef12bc7017ef1e925d984725b3e541cc4d8b",
    "data": {
      "schemaVersion": 1,
      "name": "Uncontrollable Dance",
      "rank": 8,
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
      "description": "The target is overcome with an all-consuming urge to dance. For the duration of the spell, the target is Off-Guard and can't use reactions. While affected, the creature can't use move actions except to dance, using the Stride action to move up to half its Speed.\nCritical Success The target is unaffected.\nSuccess The spell's duration is 3 rounds, and the target must spend at least 1 action each turn dancing.\nFailure The spell's duration is 1 minute, and the target must spend at least 2 actions each turn dancing.\nCritical Failure The spell's duration is 1 minute, and the target must spend all its actions each turn dancing.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 creature",
      "area": null,
      "duration": "varies",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:divine-inspiration",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "KtTGLbLG9nqMbUYL",
      "slug": "divine-inspiration",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/divine-inspiration.webp"
    },
    "sourceHash": "sha256:96fe6d9eee1272b2de38c08d6b17b2dff733b604e9ef3393863a5cadf0dab51d",
    "translatableHash": "sha256:3872edc99e1e6db87ae6f2de23f134bb4ccca023ef34f71eb4b27759e59cc150",
    "data": {
      "schemaVersion": 1,
      "name": "Divine Inspiration",
      "rank": 8,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "divine"
      ],
      "description": "You infuse a target with spiritual energy, refreshing its magic. If it prepares spells, it recovers one 6th-rank or lower spell it previously cast today and can cast that spell again. If it spontaneously casts spells, it recovers one of its 6th-rank or lower spell slots. If it has a focus pool, it regains its Focus Points, as if it had Refocused.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 willing creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:desiccate",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "M0jQlpQYUr0pp2Sv",
      "slug": "desiccate",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/horrid-wilting.webp"
    },
    "sourceHash": "sha256:752f49f611f49a07630056d5817958f14cd14f223ef6eb107cf81a7c7bae9bbc",
    "translatableHash": "sha256:9bb0605da13629d0e14e109ef325ec83ba989c44ca4b504eddab95d1d4f6cd11",
    "data": {
      "schemaVersion": 1,
      "name": "Desiccate",
      "rank": 8,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "void"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You pull the moisture from the targets' bodies, dealing 10d10 void damage. Creatures made of water (such as water elementals) and plant creatures use the outcome for one degree of success worse than the result of their saving throw. Creatures whose bodies contain no significant moisture (such as earth elementals) are immune to desiccate.\nHeightened (+1) The damage increases by 1d10.",
      "castingTime": "2 actions",
      "range": "500 feet",
      "target": "any number of living creatures",
      "area": null,
      "duration": "",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "10d10",
          "type": "void",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+1) The damage increases by 1d10."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:quandary",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Oj1PJBMQD9vuwCv7",
      "slug": "quandary",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/maze.webp"
    },
    "sourceHash": "sha256:699f1fd2f46da650acc917ec488204907ccd8ccd69acc4d04a740392e82239da",
    "translatableHash": "sha256:66de314692b1de78c454c81c465bd2630f2ef134e7ca81c5af16226515c37094",
    "data": {
      "schemaVersion": 1,
      "name": "Quandary",
      "rank": 8,
      "rarity": "common",
      "traits": [
        "concentrate",
        "extradimensional",
        "manipulate",
        "teleportation"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You transport the target into an extraplanar puzzle room of mysterious origin, locking them there. Once each turn as a single action, the target can attempt an Occultism check, Perception check, or Thievery check against your spell DC to solve the puzzle. Teleportation effects can't carry the target outside the puzzle room unless they can also traverse the planes, such as Interplanar Teleport. When the spell ends, the target returns to the space it occupied when it was banished, or to the nearest space if the original is now filled.\nCritical Success The target solves the puzzle and escapes.\nSuccess The target is on the right path to the solution. If it was already on the right path, it solves the puzzle and escapes.\nFailure The target makes no progress toward a solution.\nCritical Failure The target makes no progress and, if it was on the right path, it no longer is.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "sustained",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:canticle-of-everlasting-grief",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "qlxM7Ik3uUeUIOcv",
      "slug": "canticle-of-everlasting-grief",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/canticle-of-everlasting-grief.webp"
    },
    "sourceHash": "sha256:d0e5192e5ff23fbf1df770cc028253b9e52330462221aa667f55aeccf8dcb30c",
    "translatableHash": "sha256:ed42185aa8016eedf6ee6c7de9a97df56cfafa83925ed777b46dd36bcb2f7e63",
    "data": {
      "schemaVersion": 1,
      "name": "Canticle of Everlasting Grief",
      "rank": 8,
      "rarity": "common",
      "traits": [
        "auditory",
        "concentrate",
        "curse",
        "emotion",
        "fear",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "You create a melody distilled from pure grief, conveying the inevitable loss of everything your target cherishes, audible to only them. The target takes 10d6 mental damage depending on its Will save. A creature cursed by this spell can't benefit from circumstance or status bonuses, for the duration noted in the degree of success.\nCritical Success The target is unaffected.\nSuccess The target takes half damage, is Frightened 1, and is cursed for 1 round.\nFailure The target takes full damage, is Frightened 3, and is cursed for 1 week.\nCritical Failure The target takes double damage, is Frightened 4, and is cursed for an unlimited duration. While the curse remains, the target's allies are also affected by the curse while within 15 feet of the creature.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "1 creature",
      "area": null,
      "duration": "varies",
      "defense": "basic will save",
      "damage": [
        {
          "formula": "10d6",
          "type": "mental",
          "kind": "damage"
        }
      ],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:migration",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "U0hL0LLaprcnAyzC",
      "slug": "migration",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:1de58aff950be0be9d5b4335b7790f3703ca15054ae1b3f8fbad9c53384729a1",
    "translatableHash": "sha256:4fcf7ec4f85b0f1f9eb20cfe2fc5a97f190bc000517cdaf154cb8abdbbc742a7",
    "data": {
      "schemaVersion": 1,
      "name": "Migration",
      "rank": 8,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "polymorph"
      ],
      "traditions": [
        "primal"
      ],
      "description": "The targets naturally take on animal forms most fitting their movement and environment. Each target gains a land, burrow, climb, fly, and swim Speed of 40 feet, and can transform into a Tiny or Small animal most appropriate for a given movement and environment. It also gains immunity to mild, severe, and extreme cold and heat, along with any other immunities common to the local wildlife, at the GM's discretion. In exploration mode, a target can move much faster, at a travel Speed of 20 miles per hour.\nA target can't Strike, cast spells, or use most manipulate actions in animal form, but it can resume its normal shape by Sustaining the spell. It can Sustain the spell again to resume animal form.",
      "castingTime": "10 minutes",
      "range": "20 feet",
      "target": "you and up to 5 willing creatures",
      "area": null,
      "duration": "8 hours",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:disappearance",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "wfleiawxsfhpRRwf",
      "slug": "disappearance",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/disapperance.webp"
    },
    "sourceHash": "sha256:d43f308b5afa1ce9bc68291b32ac65f662aca05896134cf0976da9a552b1b620",
    "translatableHash": "sha256:685b57228939a948162ba8e8886316ff0bdd8f9c8dd9971cb8c454fab7ade0d6",
    "data": {
      "schemaVersion": 1,
      "name": "Disappearance",
      "rank": 8,
      "rarity": "common",
      "traits": [
        "illusion",
        "manipulate",
        "subtle"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You shroud a creature from others' senses. The target becomes Invisible, but not merely to vision. The invisibility granted by disappearance applies to all precise senses an observer might have. It's still possible for a creature to find the target by Seeking using various senses, looking for disturbed dust, hearing gaps in the sound spectrum, or finding some other way to discover the presence of a creature that is otherwise undetectable.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 creature",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:punishing-winds",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "wi405lBjPcbF1DeR",
      "slug": "punishing-winds",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:6eaea6e8aa3fd68395e5f398caddfc0090d7a467af6dd6ae3c3c0ad1a4e0da40",
    "translatableHash": "sha256:4106c9a8fded6f1f14f7d05ab853040aafafff830281150b1e353583d48deffd",
    "data": {
      "schemaVersion": 1,
      "name": "Punishing Winds",
      "rank": 8,
      "rarity": "common",
      "traits": [
        "air",
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "primal"
      ],
      "description": "Area (continued) 30-foot-radius, 100-foot-tall cylinder\nViolent winds and a powerful downdraft fill the area, forming a cyclone. All flying creatures in the area descend 40 feet. The entire area is greater difficult terrain for Flying creatures, and difficult terrain for creatures on the ground or Climbing. Any creature that ends its turn Flying within the area descends 20 feet. Any creature pushed into a surface by this spell's winds takes bludgeoning damage as though it had fallen.\nThe squares at the outside vertical edges of the cylinder prevent creatures from leaving. These squares are greater difficult terrain, and a creature attempting to push through must succeed at an Athletics check or Acrobatics check to Maneuver in Flight against your spell DC to get through. A creature that fails ends its current action but can try again.",
      "castingTime": "3 actions",
      "range": "100 feet",
      "target": "",
      "area": "30 cylinder",
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:earthquake",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "x7SPrsRxGb2Vy2nu",
      "slug": "earthquake",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/earthquake.webp"
    },
    "sourceHash": "sha256:7802db2f7365c02bcfd65275eb2d4c3ca97b6977331218568e305287d0f8e547",
    "translatableHash": "sha256:da43f36a83be5b2ee2c3cbca529475163736783d207dd2035ef51d456062ddea",
    "data": {
      "schemaVersion": 1,
      "name": "Earthquake",
      "rank": 8,
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
      "description": "You shake the ground, topple creatures into fissures, and collapse structures. The GM might add additional effects in certain areas. Cliffs might collapse, causing creatures to fall, or a lake might drain as fissures open up below its surface, leaving a morass of quicksand.\n• Shaking Ground The ground is difficult terrain, and creatures on it take a -2 circumstance penalty to attack rolls, AC, and skill checks. Spell Effect: Earthquake (Shaking Ground)\n• Fissures Each creature on the ground must attempt a Reflex save at the start of its turn to keep its footing and avoid falling into 40-foot-deep fissures that open beneath it. The fissures are permanent, and their sides require successful check (athletics, dc:15, traits:action:climb) to Climb.\n• Collapse Structures and ceilings might collapse. The GM rolls a flat check for each (check (flat, dc:16) for a sturdy structure, check (flat, dc:14) for an average structure and most natural formations, check (flat, dc:9) for a shoddy structure, all adjusted higher or lower as the GM sees fit). A collapse deals 11d6 bludgeoning damage to each creature caught in it with a basic Reflex save. A creature falls Prone unless it critically succeeds and falls into a fissure if it critically fails.\nHeightened (10th) You create a massive earthquake that can devastate a settlement. The range increases to half a mile and the area to a quarter-mile burst.",
      "castingTime": "2 actions",
      "range": "500 feet",
      "target": "",
      "area": "60 burst",
      "duration": "1 round",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "11d6",
          "type": "bludgeoning",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (10th) You create a massive earthquake that can devastate a settlement. The range increases to half a mile and the area to a quarter-mile burst."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:unrelenting-observation",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "y2cQYLr5mljDSu1G",
      "slug": "unrelenting-observation",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:20a583f9bb4e4b272101727ff341551914af533a2a1c07aa7639e77c71a79fcf",
    "translatableHash": "sha256:58f26f2708b7ea62b9ae7a0089a3764e2930409a6606f2ce13024afb5b157e6d",
    "data": {
      "schemaVersion": 1,
      "name": "Unrelenting Observation",
      "rank": 8,
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
      "description": "This spell grants perfect sight based on scrying, allowing several willing targets to track the exact movements or position of one creature or object. Choose one target creature or object in the area to be tracked. It becomes the sensor for the spell. Up to five willing creatures of your choice in the area can see a ghostly image of this creature or object when it's out of their sight. They can perceive the creature or object perfectly, allowing them to ignore the Concealed or Invisible condition, though physical barriers still provide cover.\nThe tracking creatures can see the tracked creature or object through all barriers other than lead or running water, which block their vision. Distance doesn't matter, though the creature or object might move so far away it becomes too small to perceive. The tracking creatures don't see any of the environment around the target, though they do see any gear a creature is wearing or holding, and they can tell if it removes objects from its person.\nIf the target to be tracked is willing, the duration is 1 hour. If you try to track an unwilling creature, the target must attempt a Will save.\nCritical Success The creature or object is unaffected.\nSuccess As described, and the duration is 1 minute.\nFailure As described, and the duration is 1 hour.",
      "castingTime": "2 actions",
      "range": "100 feet",
      "target": "1 creature or object tracked and up to 5 other willing creatures",
      "area": "20 burst",
      "duration": "varies",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:massacre",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "10VcmSYNBrvBphu1",
      "slug": "massacre",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/massacre.webp"
    },
    "sourceHash": "sha256:99d5da7b533bcc598499d968146f18ca8fa060363de09db49d7192baf150530b",
    "translatableHash": "sha256:3366dcb38a756a6d3d6e056b7bb9cd34409d1898d3831d7ab053b96656e45134",
    "data": {
      "schemaVersion": 1,
      "name": "Massacre",
      "rank": 9,
      "rarity": "common",
      "traits": [
        "concentrate",
        "death",
        "manipulate",
        "void"
      ],
      "traditions": [
        "arcane",
        "divine",
        "primal"
      ],
      "description": "You unleash a wave of death to snuff out the life force of those in its path. Each living creature of 17th level or lower in the line must attempt a Fortitude save. If the damage from massacre reduces a creature to 0 Hit Points, that creature dies instantly. If massacre doesn't kill even a single creature, the void energy hungrily turns backward toward you, dealing an additional 30[void] damage to every living creature in the line (even those above 17th level) and 30 void damage to you.\nCritical Success The creature is unaffected.\nSuccess The creature takes 9d6 void damage.\nFailure The creature takes (ternary(gte(@item.rank,10),115,100))[void] damage.\nCritical Failure The creature dies.\nHeightened (10th) The spell can affect living creatures up to 19th level. Increase the damage to 10d6 on a success, and to 115 on a failure.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "60 line",
      "duration": "",
      "defense": "fortitude save",
      "damage": [
        {
          "formula": "9d6",
          "type": "void",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (10th) The spell can affect living creatures up to 19th level. Increase the damage to 10d6 on a success, and to 115 on a failure."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:implosion",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "4WS7HrFjwNvTn8T2",
      "slug": "implosion",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/implosion.webp"
    },
    "sourceHash": "sha256:557038ec294f15e632d1b4df6b8d7187fe063734836254afaca5afda72a94f55",
    "translatableHash": "sha256:d7af390b91912b266f460f4221520111932be13aea42351d788011cda5a1e0df",
    "data": {
      "schemaVersion": 1,
      "name": "Implosion",
      "rank": 9,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You crush the target by causing it to collapse in on itself, dealing 75 damage. The first time each round you Sustain the spell, you must choose a new target to be subject to the same effect; the same creature can never be targeted more than once with a single casting of this spell. You also can't affect more than one creature per turn with implosion. You can't target a creature that's incorporeal, gaseous, or liquid, or otherwise lacking a solid form.\nHeightened (+1) The damage increases by 10.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 corporeal creature",
      "area": null,
      "duration": "1 minute",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "75",
          "type": "untyped",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+1) The damage increases by 10."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:wails-of-the-damned",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "FEsuyf203wTNE2et",
      "slug": "wails-of-the-damned",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/fatal-aria.webp"
    },
    "sourceHash": "sha256:c80cf57ff8e1d8ddc76243f475db20b1b80ef406874f45c8a8546d2b7aaef323",
    "translatableHash": "sha256:965634df8e92176fbbdb811f7a088f1ab066e85dbe0e90b832259ce5992ceea1",
    "data": {
      "schemaVersion": 1,
      "name": "Wails of the Damned",
      "rank": 9,
      "rarity": "common",
      "traits": [
        "auditory",
        "concentrate",
        "death",
        "manipulate",
        "void"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "You howl a lament of damned souls. Each living enemy in the area takes 8d10 void damage and must attempt a Fortitude save.\nCritical Success The creature is unaffected.\nSuccess The creature takes full damage.\nFailure The creature takes full damage and is Drained [[/r 1d4]].\nCritical Failure The creature takes double damage and is Drained 4.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "40 emanation",
      "duration": "",
      "defense": "fortitude save",
      "damage": [
        {
          "formula": "8d10",
          "type": "void",
          "kind": "damage"
        }
      ],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:overwhelming-presence",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "fkDeKktdmbeplYRY",
      "slug": "overwhelming-presence",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:4ec147f93c982308d152531c4985d0f6316a1c0d759817aa407733fc397131e0",
    "translatableHash": "sha256:aaac47bbfc1bf456127d97c64a7e6d31d63b3bc662e31bf66d384b601cb716cf",
    "data": {
      "schemaVersion": 1,
      "name": "Overwhelming Presence",
      "rank": 9,
      "rarity": "common",
      "traits": [
        "auditory",
        "concentrate",
        "incapacitation",
        "manipulate",
        "mental",
        "visual"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "You surround yourself with supernatural splendor, appearing to be a god or similarly majestic being, with an appearance, regalia, and iconography of your choice. Targets must attempt a Will save. Regardless of the outcome, the target is then temporarily immune for 1 minute.\nCritical Success The target is unaffected.\nSuccess The target must pay tribute to you two times. Paying tribute requires that the target spend a single action, which has either the move trait (as they bow) or manipulate trait (as they offer up a token in their hands). They must pay tribute at least once on each of their turns, if possible. While affected, the target is Fascinated by you and can't use hostile actions against you.\nFailure As success, but the target must pay tribute a total of six times.\nCritical Failure As failure, but the target must spend all its actions paying tribute, and they cannot take other actions until the tribute is fully paid.",
      "castingTime": "2 actions",
      "range": "",
      "target": "any number of creatures",
      "area": "40 burst",
      "duration": "until full tribute is paid",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:unfathomable-song",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "FmNDwqMEjeTEGPrY",
      "slug": "unfathomable-song",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/unfathomable-song.webp"
    },
    "sourceHash": "sha256:adfb0a5fc3ace976596efc66545156a31f7004432533197c95e7bc23201e56fe",
    "translatableHash": "sha256:9448079554a43792f693aa15f44e28f1596bd1dd04f0798ebf74887ebc336f8b",
    "data": {
      "schemaVersion": 1,
      "name": "Unfathomable Song",
      "rank": 9,
      "rarity": "common",
      "traits": [
        "auditory",
        "concentrate",
        "emotion",
        "fear",
        "incapacitation",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "occult"
      ],
      "description": "Fleeting notes of a strange and unnatural song fill the air, overtaking the mind. Each target must attempt a Will save when you cast the spell, and again the first time you Sustain this Spell each round. A creature needs to attempt only one save against the song each round, and you have to keep the same targets when you Sustain the Spell.\nCritical Success The target is unaffected, can't be affected on subsequent rounds, and is temporarily immune for 1 minute.\nSuccess The target is unaffected this round, but it can be affected on subsequent rounds.\nFailure Roll [[/r 1d4]] on the table below.\nCritical Failure Roll [[/r 1d4+1]] on the table below.\nResult | Effect |\n1 | The target is Frightened 2 |\n2 | The target is Confused for 1 round |\n3 | The target is Stupefied 4 for 1 round |\n4 | The target is Blinded for 1 round |\n5 | The target is Stunned for 1 round and Stupefied 1 for an unlimited duration |",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "up to 5 creatures",
      "area": null,
      "duration": "1 minute",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:seize-soul",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "GYmXvS9NJ7QwfWGg",
      "slug": "seize-soul",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:f252dde95362dd0de9891d4ec9fd4f253c0881b6aec314c7b078d68393a2a41b",
    "translatableHash": "sha256:a24c83e21b49d22309b9f9802afe5bec35b282ebb7ec0923460f1630da5a56bd",
    "data": {
      "schemaVersion": 1,
      "name": "Seize Soul",
      "rank": 9,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate",
        "unholy"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "You trap the target's soul in the item before the soul can pass on to the afterlife. The item used to contain the soul can be anything as long as it's of the appropriate value. The item has AC 16 and its normal Hardness and HP. Destroying (not just breaking) an item or counteracting seize soul releases the soul to the afterlife.\nWhile the soul is in the item, the target can't be returned to life through any means, even powerful magic such as a Wish ritual. If the item is destroyed or seize soul is counteracted on the item, the soul is freed. An item can't hold more than one soul, and any attempt wastes the spell.\nYou can also target an item that has had a soul trapped in it with a second casting of seize soul, which destroys the item and either releases the soul or relocates it to a different item, whichever you choose. This fails if the target is an artifact or the trapped soul is a creature of 19th level or higher.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature that died within the last minute",
      "area": null,
      "duration": "unlimited",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:falling-stars",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "jrBa9deU2ULFWvSl",
      "slug": "falling-stars",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:d5ce665e946cc9b1698c2b5c5fe74bd4dd4205e8d8d62c238a4be67d0d31893a",
    "translatableHash": "sha256:71ad7c7de4517cc8c7fd163f0047beac4fbf0dc23413a04e3659f1c2efc2beed",
    "data": {
      "schemaVersion": 1,
      "name": "Falling Stars",
      "rank": 9,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "Area 4 40-foot bursts\nYou reach into the skies and call down an array of falling stars that explode upon colliding with the ground. Choose for the falling stars to be airbursts (sonic), asteroids (fire), comets (cold), or plasma (electricity). The spell gains the trait of the falling star type you chose. The four stars' central 10-foot bursts can't overlap. Each falling star deals 6d10 bludgeoning damage to each creature in the @Template[burst|distance:10] at the center of its area of effect before exploding, dealing 14d6 energy damage of the type you chose to each creature in its @Template[burst|distance:40]. A creature in any of the areas attempts one basic Reflex save against the spell no matter how many overlapping explosions it's caught in and can take each type of damage only once.\nHeightened (+1) The bludgeoning damage increases by 1d10, and the energy damage increases by 2d6.",
      "castingTime": "2 actions",
      "range": "500 feet",
      "target": "",
      "area": null,
      "duration": "",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "6d10",
          "type": "bludgeoning",
          "kind": "damage"
        },
        {
          "formula": "14d6",
          "type": "fire",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+1) The bludgeoning damage increases by 1d10, and the energy damage increases by 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:detonate-magic",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "kUSShxXzY1sPtJA0",
      "slug": "detonate-magic",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:22b67c08c63d0347b14032a6c891466c1bd25e936303916626bbc184d4335518",
    "translatableHash": "sha256:6bd7938e957870a211e3fe6755b742e6cce69eb4983b28a075544b217bd7cf78",
    "data": {
      "schemaVersion": 1,
      "name": "Detonate Magic",
      "rank": 9,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You cause the magic within the target to dissipate in a destructive explosion. You attempt to counteract the target. If the attempt succeeds, an explosion of magical force deals 8d6 force damage with a basic Reflex save. If you successfully counteract the magic of an item, it's deactivated for 1 week (or destroyed on a critical success) and the explosion is a 5-foot emanation from the item. If you successfully counteract a spell, the effect ends and the explosion affects either all creatures in the spell's area or the target of the spell and all creatures in a 5-foot emanation around it.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "1 magic item or spell effect",
      "area": "5 emanation",
      "duration": "",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "8d6",
          "type": "force",
          "kind": "damage"
        }
      ],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:phantasmagoria",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "MJx7DmjsWYzDZ3a4",
      "slug": "phantasmagoria",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/weird.webp"
    },
    "sourceHash": "sha256:d6468c0cfeec74c16b3dc5f9f352f2be490506b7324f53a43506e2959346ed99",
    "translatableHash": "sha256:0e47a642551bec304d8a07d3964e7dfb0093ca70ce25d691ada40f974874cfc0",
    "data": {
      "schemaVersion": 1,
      "name": "Phantasmagoria",
      "rank": 9,
      "rarity": "common",
      "traits": [
        "concentrate",
        "death",
        "illusion",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You fill the targets' minds with endless images, like countless dreams and lives colliding with each other. The onrushing information deals 16d6[mental] damage to each target, depending on its Will save.\nCritical Success The target is unaffected.\nSuccess The target takes half damage and can't use reactions until the start of your next turn.\nFailure The target takes full damage and is Confused until the start of your next turn.\nCritical Failure The target takes double damage and is confused for 1 minute.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "any number of creatures",
      "area": null,
      "duration": "",
      "defense": "will save",
      "damage": [
        {
          "formula": "16d6",
          "type": "mental",
          "kind": "damage"
        }
      ],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:metamorphosis",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "pswdik31kuHEvdno",
      "slug": "metamorphosis",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:899f8a7fda4c3c44dad2e266aa466248259712c88ec0bfa8d751699d54ce2ea9",
    "translatableHash": "sha256:80d06d235f045736431493ab3e1b5d2da879f6a1856c53c0c3a2e1163a4446fd",
    "data": {
      "schemaVersion": 1,
      "name": "Metamorphosis",
      "rank": 9,
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
      "description": "Harnessing your mastery of transformative magic, you hide forms within forms. You transform yourself into any form you could choose with a polymorph spell in your spell repertoire or that you could prepare of 8th-rank or lower (including any 8th-rank or lower heightened versions of spells you know). You gain 40 temporary Hit Points rather than the amount normally granted by the form.\nYou can Sustain the spell to enter a new form you haven't used during this metamorphosis. This replenishes your temporary Hit Points from this spell.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "heightened versions of spells you know). You gain 40 temporary Hit Points rather than the amount normally granted by the form.\nYou can Sustain the spell to enter a new form you haven't used during this metamorphosis. This replenishes your temporary Hit Points from this spell."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:foresight",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "qsNeG9KZpODSACMq",
      "slug": "foresight",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:e4968f18c9c7b168db0e1ca56fce021199fe9e6c7ce83cec4b426b6ad2208287",
    "translatableHash": "sha256:26749779d4154fe7f0f64bcc8b9fa35ded598ce82f66bbc1546905f6df891a08",
    "data": {
      "schemaVersion": 1,
      "name": "Foresight",
      "rank": 9,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "mental",
        "prediction"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult"
      ],
      "description": "You gain a sixth sense that warns you of danger that might befall the target of the spell. If you choose a creature other than yourself as the target, you create a psychic link through which you can inform the target of danger. This link is a mental effect. Due to the amount of information this spell requires you to process, you can't have more than one foresight spell in effect at a time. Casting foresight again ends the previous foresight. While foresight is in effect, the target gains a +2 status bonus to initiative rolls and isn't Off-Guard against Undetected creatures or when flanked. In addition, you gain the following reaction: Foresight\nSpell Effect: Foresight",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 creature",
      "area": null,
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:wrathful-storm",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "yLJROsQtyrPIKcDx",
      "slug": "wrathful-storm",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/storm-lord.webp"
    },
    "sourceHash": "sha256:136a46d6595f96814b4b771f77658cfe556e971eb8161f3f6e6951eb410a773b",
    "translatableHash": "sha256:2ee2e4c49593759403c5a8e85363a0c9e78cca40ecb9eeafdb79cc19d0c9c940",
    "data": {
      "schemaVersion": 1,
      "name": "Wrathful Storm",
      "rank": 9,
      "rarity": "common",
      "traits": [
        "air",
        "cold",
        "concentrate",
        "electricity",
        "manipulate"
      ],
      "traditions": [
        "primal"
      ],
      "description": "A massive storm cloud forms in the air above the area, spreading rain and gales. The wind imposes a –4 circumstance penalty to physical ranged attacks. The air in the area is greater difficult terrain for flying creatures. When you Cast this Spell and the first time each round you Sustain it on subsequent rounds, you can choose one of the following storm effects. You can't choose the same effect twice in a row.\n• Blizzard The driving snow deals 4d8[cold] damage to each creature in or below the storm with no save. Everything in or beneath the cloud is Concealed by driving snow and any ground is difficult terrain.\n• Hail Each creature in or below the storm takes 4d10[bludgeoning] damage with a basic Fortitude save.\n• Lightning Choose up to 10 creatures in or below the storm to be struck by lightning. Each of them takes 7d6[electricity] damage with a basic Reflex save.\n• Tornado A roughly cylindrical whirlwind appears in or below the cloud in a 30-foot radius. Each creature in the whirlwind is thrown 40 feet upward.\nSpell Effect: Wrathful Storm\nHeightened (10th) The range increases to 2,000 feet and the cloud is a 1,000-foot burst.",
      "castingTime": "3 actions",
      "range": "800 feet",
      "target": "",
      "area": "400 burst",
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (10th) The range increases to 2,000 feet and the cloud is a 1,000-foot burst."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:freeze-time",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "1dsahW4g1ggXtypx",
      "slug": "freeze-time",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/time-stop.webp"
    },
    "sourceHash": "sha256:959c5bfd97f4c6462a66b98b4c8543717fb99b31d6f17cc57eb48344f7d477e3",
    "translatableHash": "sha256:c319d6b773141e4bdaf47f791cbe4fe3989a31a0467d3fa853d960c69a995072",
    "data": {
      "schemaVersion": 1,
      "name": "Freeze Time",
      "rank": 10,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You temporarily stop time for everything but yourself, allowing you to use several actions in what appears to others to be no time at all. Immediately after casting freeze time, you can use up to 9 actions in 3 sets of up to 3 actions each.\nAfter each set of actions, 1 round passes, but for only you, effects specifically targeting or affecting you, and effects that you create during the stoppage. All other creatures and objects are invulnerable to your attacks, and you can't target or affect them with anything.\nOnce you have finished your actions, time begins to flow again for the rest of the world. If you created an effect with a duration that extends beyond freeze time's duration, such as Wall of Fire, it immediately affects others again, but it doesn't have any of the effects that happen only when you first Cast the Spell.",
      "castingTime": "3 actions",
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
    "contentId": "pf2e:spell:spells-srd:fabricated-truth",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "6s0UW4bujggma9TC",
      "slug": "fabricated-truth",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:aa41cd8e0496b5ef442664f6fec59e34c280542b8c95450b31f8e0b5d1a42636",
    "translatableHash": "sha256:f3e1618f04e52f4a6879869d1f01687195947ecb4cc9d3f0130edd258bd1d06f",
    "data": {
      "schemaVersion": 1,
      "name": "Fabricated Truth",
      "rank": 10,
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
      "description": "Choose a single statement you want the targets to believe. The fact could be narrow, such as \"a dragon is circling overhead and wants to kill me\"; wide-reaching, such as \"all humanoids are disguised abominations\"; or conceptual, such as \"if I don't live a kinder life, I'll be punished in the afterlife.\" The targets' experiences color how they react to this \"truth\" and how their behavior changes. If the statement changes what they perceive, they treat the change as a sudden revelation. The effect of the spell depends on the targets' Will saves. If a target is already affected by fabricated truth, your spell tries to counteract it. If the counteract check fails, the outcome of the target's saving throw can't be worse than a success.\nCritical Success The target doesn't believe the statement, and it knows you tried to trick it.\nSuccess The target doesn't believe the statement or realize you tried to trick it.\nFailure The target believes the statement for 1 week.\nCritical Failure The target believes the statement with unlimited duration.",
      "castingTime": "3 actions",
      "range": "100 feet",
      "target": "up to 5 creatures",
      "area": null,
      "duration": "varies",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:manifestation",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "AuIiqc7jjiy1GZ75",
      "slug": "manifestation",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/astral-labyrinth.webp"
    },
    "sourceHash": "sha256:7b6424ea53cf8c5b7a8a4a035b5db4b5ab97e9c366652d4249d4daeb141a3573",
    "translatableHash": "sha256:2e03b9f2445af56aace939a36a196f809cb7abca7c49ffda19ed5f802408cf20",
    "data": {
      "schemaVersion": 1,
      "name": "Manifestation",
      "rank": 10,
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
      "description": "You spin secrets from the fundaments of magic, shaping them into a power with nearly unlimited potential. You duplicate a spell of 9th rank or lower of the tradition from which you cast manifestation, or a spell of 7th rank or lower from any tradition. Though you can normally choose only spells that are common or to which you have access, the GM might allow broader options.",
      "castingTime": "3 actions",
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
    "contentId": "pf2e:spell:spells-srd:avatar",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ckUOoqOM7Kg7VqxB",
      "slug": "avatar",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:233dbe408bf304692d7e036c10d6235b526bb9f199762d20f74e335979ba753f",
    "translatableHash": "sha256:4ddb2a5a1cbeb60d71865c91314eed1adc00760e7605cb0cd80bf1743c488129",
    "data": {
      "schemaVersion": 1,
      "name": "Avatar",
      "rank": 10,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "polymorph"
      ],
      "traditions": [
        "divine"
      ],
      "description": "You transform into an avatar of your deity, assuming a Huge battle form. You have hands in this battle form and can take manipulate actions. You can Dismiss this spell. You gain the following statistics and abilities regardless of which deity's battle form you assume:\n• AC = 25 + your level. Ignore your armor's check penalty and Speed reduction.\n• 30 temporary Hit Points.\n• Darkvision.\n• One or more attacks specific to your deity's battle form, which are the only attacks you can Strike with. You're trained with them. Your attack modifier is +33, and you use the listed damage. Melee attacks are Strength based (for the purposes of the Enfeebled condition, for example) unless they have the finesse trait, and all ranged attacks are Dexterity based.\n• Athletics modifier of +35, unless your own is higher.\nYou also gain the specific abilities listed for your deity below:\n• Abadar\n• Speed 50 feet, burrow Speed 30 feet, immune to Immobilized;\n• Ranged a crossbow (range increment 120 feet, reload 1), Damage 6d10+3 piercing.\n• Achaekek\n• Speed 70 feet, climb Speed 50 feet, ignore difficult terrain and greater difficult terrain;\n• Melee a mantis claw (agile, backswing, finesse, reach 15 feet, versatile P), Damage 6d8+6 slashing;\n• Ranged a spine volley (range 60 feet), Damage 6d6+3 piercing\n• Asmodeus\n• Speed 70 feet, fly;\n• Melee a mace (reach 15 feet), Damage 6d10+6 bludgeoning;\n• Ranged a hell fire (range 120 feet), Damage 6d6+3 fire.\n• Calistria\n• Speed 30 feet, fly Speed 70 feet;\n• Melee a whip (disarm, finesse, nonlethal, reach 20 feet), Damage 6d4+6 slashing;\n• Ranged a savored sting (range 60 feet), Damage 6d6+3 poison.\n• Cayden Cailean\n• Speed 70 feet, fly, ignore difficult terrain and greater difficult terrain;\n• Melee a rapier (deadly 3d8, reach 15 feet), Damage 6d6+6 piercing;\n• Ranged a ale splash (range 120 feet), Damage 6d6+3 poison.\n• Desna\n• Speed 30 feet, fly Speed 70 feet;\n• Melee a starknife (agile, deadly 3d4, finesse, reach 15 feet, silver, thrown 60 feet), Damage 6d4+6 piercing;\n• Ranged a moonbeam (range 120 feet, silver), Damage 6d6+3 fire.\n• Erastil\n• Speed 70 feet, fly, ignore difficult terrain and greater difficult terrain;\n• Ranged a longbow (deadly 3d8, range increment 150 feet), Damage 6d8+3 piercing.\n• Gorum\n• Speed 70 feet, immune to Immobilized;\n• Melee a greatsword (versatile P, reach 15 feet), Damage 6d12+6 slashing.\n• Gozreh\n• no land Speed, fly Speed 70 feet, swim Speed 70 feet, ignore difficult terrain and greater difficult terrain;\n• Melee a waves (reach 15 feet, shove, thrown 20 feet), Damage 6d8+6 bludgeoning;\n• Ranged a wind (versatile electricity, range 120 feet), Damage 6d6+3 bludgeoning.\n• Iomedae\n• Speed 70 feet, fly; shield (15 Hardness, can't be damaged);\n• Melee a longsword (versatile P, reach 15 feet), Damage 6d8+6 slashing.\n• Irori\n• Speed 80 feet, fly;\n• Melee a unfettered strike (agile, versatile P or S, finesse, reach 15 feet), Damage 6d8+6 bludgeoning;\n• Ranged a wind strike (range 60 feet), Damage 6d4+6 bludgeoning.\n• Lamashtu\n• Speed 30 feet, fly Speed 70 feet;\n• Melee a falchion (forceful, reach 15 feet), Damage 6d10+6 slashing;\n• Ranged a waters of Lamashtu (range 120 feet), Damage 6d6+3 poison.\n• Nethys\n• Speed 70 feet, fly;\n• Ranged a raw magic (range 120 feet; versatile cold, electricity, or fire), Damage 6d6 force.\n• Norgorber\n• Speed 70 feet, fly, ignore difficult terrain and greater difficult terrain;\n• Melee a shortsword (agile, finesse, versatile S, reach 15 feet), Damage 6d6+6 piercing;\n• Ranged a blackfinger toss (range 120 feet), Damage 6d6+3 poison.\n• Pharasma\n• Speed 70 feet, fly;\n• Melee a dagger (agile, finesse, reach 15 feet, thrown 40 feet), Damage 6d6+6 slashing;\n• Ranged a spiral blast (range 120 feet, damages only undead), Damage 6d8+3 vitality.\n• Rovagug\n• Speed 50 feet, burrow Speed 30 feet, immune to Immobilized;\n• Melee a jaws (reach 15 feet), Damage 6d12+6 piercing;\n• Melee a leg (agile, versatile P, reach 15 feet), Damage 6d8+6 bludgeoning.\n• Sarenrae\n• Speed 30 feet, fly Speed 70 feet;\n• Melee a scimitar (forceful, nonlethal, reach 15 feet), Damage 6d6+6 slashing;\n• Ranged a everflame (nonlethal, range 120 feet), Damage 6d6+3 fire.\n• Shelyn\n• Speed 70 feet, fly, ignore difficult terrain and greater difficult terrain;\n• Melee a glaive (deadly 3d8, nonlethal, reach 20 feet), Damage 6d8+6 slashing;\n• Ranged a melody of inner beauty, (nonlethal, range 120 feet), Damage 6d6+3 sonic.\n• Torag\n• Speed 50 feet, burrow Speed 30 feet, immune to Immobilized; shield (15 Hardness, can't be damaged);\n• Melee a warhammer (reach 15 feet, shove), Damage 6d8+6 bludgeoning.\n• Urgathoa\n• Speed 70 feet, fly;\n• Melee a scythe (deadly 3d10, trip, reach 15 feet), Damage 6d10+6 slashing;\n• Ranged a pallid plague (range 120 feet), Damage 6d6+3 void.\n• Zon-Kuthon\n• Speed 70 feet, fly, ignore difficult terrain and greater difficult terrain;\n• Melee a spiked chain (disarm, trip, reach 15 feet), Damage 6d8+6 slashing;\n• Ranged a midnight pain (mental, nonlethal, range 120 feet), Damage 6d6+3 mental.",
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
    "contentId": "pf2e:spell:spells-srd:remake",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "dMKP4fkWx8V2cqAy",
      "slug": "remake",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:3f54f1c4e62d923054b0fff0230570d228a88cb4c59660ef71e8bc58a28f88e4",
    "translatableHash": "sha256:1816591da32cb3ab723bb6d807c62f690daabc28c778d911f3fb1ddb97943302",
    "data": {
      "schemaVersion": 1,
      "name": "Remake",
      "rank": 10,
      "rarity": "uncommon",
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
      "description": "You fully re-create an object from nothing, even if the object was destroyed. To do so, you must be able to picture the object in your mind. Additionally, the material component must be a remnant of the item, no matter how small or insignificant (even a speck of dust that remains from Disintegrate is enough). The spell fails if your imagination relied on too much guesswork; if the object would be too large to fit in a 5-foot cube; if the object still exists and you were simply not aware of it; or if the object is an artifact, has a level over 20, or has similar vast magical power.\nThe item reassembles in perfect condition. Even if your mental image was of a damaged or weathered object, the new one is in this perfected form. If the object was magical, this spell typically restores its constant magical properties, but not any temporary ones, such as charges or one-time uses. An item with charges or uses per day has all of its uses expended when remade, but it replenishes them normally thereafter.",
      "castingTime": "1 hour",
      "range": "5 feet",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:revival",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "HpIJTVqgXorH9X0L",
      "slug": "revival",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/revival.webp"
    },
    "sourceHash": "sha256:28df76605dd3b0c0776edf5a56c2dda58d90d7a56a062f28cd55ca9334d4d1a0",
    "translatableHash": "sha256:32dee39eba0be6b7fbf1df1998d42d016232ce077b632249c7310c290fd553f9",
    "data": {
      "schemaVersion": 1,
      "name": "Revival",
      "rank": 10,
      "rarity": "common",
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
      "description": "A burst of healing energy soothes living creatures and temporarily rouses those recently slain. All living targets regain 10d8+40 Hit Points.\nIn addition, you return any number of dead targets to life temporarily, with the same effects and limitations as Raise Dead. The raised creatures have a number of temporary Hit Points equal to the Hit Points you gave living creatures, but no normal Hit Points. The raised creatures can't regain Hit Points or gain temporary Hit Points in other ways, and once revival's duration ends, they lose all temporary Hit Points and die.\nRevival can't resurrect creatures killed by Disintegrate or a death effect. It has no effect on undead.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "dead creatures and living creatures of your choice within range",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [
        {
          "formula": "10d8+40",
          "type": "untyped",
          "kind": "healing"
        }
      ],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:gate",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "U13bC0tNgrlHoeTK",
      "slug": "gate",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/gate.webp"
    },
    "sourceHash": "sha256:e14f2218081c09456abdebcbfad44339f26b250b51c1342b6241e831dccc8c2c",
    "translatableHash": "sha256:1414490cf05bb3d3dda4d44c793b9969a46c7242a0b7e7fa5176f69a4480df03",
    "data": {
      "schemaVersion": 1,
      "name": "Gate",
      "rank": 10,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate",
        "teleportation"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult"
      ],
      "description": "You tear open a rift to another plane, creating a portal that creatures can travel through in either direction. This portal is vertical and circular, with a radius of 40 feet. The portal appears at a location of your choice on the destination plane, assuming you have a clear idea of both the destination's location on the plane and what the destination looks like. If you attempt to create a gate into or out of the realm of a deity or another similarly powerful being, that being can prevent the gate from forming.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:indestructibility",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "UG0SmRYSdbrx2rTA",
      "slug": "indestructibility",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/indestructibility.webp"
    },
    "sourceHash": "sha256:4678f7d59a021b144b39bd48b0d1672935d73fe1f49291442271288a83b8ac9c",
    "translatableHash": "sha256:50ac64bb776968fd6d43a6c39083e3a174ce00bc0c777f6e261dc5c48321dc1d",
    "data": {
      "schemaVersion": 1,
      "name": "Indestructibility",
      "rank": 10,
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
      "description": "You sever yourself from cause and effect. For the duration of the spell, you are immune to any effect or damage that would harm you, excluding effects caused by artifacts, deific power, and similarly powerful sources. You can selectively allow yourself to be affected by anything you're willing to have affect you.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "until the start of your next turn",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:cataclysm",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "wLIvH0AT1u7oa64N",
      "slug": "cataclysm",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:997cc0a679b19ba2add13280cd4a66b0e54905ddd118d326f2656396c1ea9961",
    "translatableHash": "sha256:671f88ae0c4369eda1525d3d40a1f02b4bc6200abdf9aa6ee7d23d96ee61b9c8",
    "data": {
      "schemaVersion": 1,
      "name": "Cataclysm",
      "rank": 10,
      "rarity": "common",
      "traits": [
        "acid",
        "air",
        "cold",
        "concentrate",
        "earth",
        "electricity",
        "fire",
        "manipulate",
        "water"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You call upon the unimaginable power of world-ending cataclysms, ripping a small piece of each cataclysm and combining them together into one horrifically powerful attack. The following effects come down upon all creatures in the area. Treat the resistances of creatures in the area as if they were 10 lower for the purpose of determining the cataclysm's damage. Each creature attempts one basic Reflex save that applies to all five types of damage.\n• Flesh-dissolving acid rain deals 3d10 acid damage.\n• A roaring earthquake shakes and bludgeons creatures on the ground, dealing 3d10 bludgeoning damage.\n• A blast of freezing wind deals 3d10 cold damage.\n• Incredible lightning lashes the area, dealing 3d10 electricity damage.\n• Beating winds churn across the sky, dealing 3d10 bludgeoning damage to creatures flying in the area.\n• An instant tsunami sweeps over creatures in the area, dealing 3d10 bludgeoning damage with the water trait (doubled for creatures swimming in the area).\n• A massive wildfire burns in a sudden inferno, dealing 3d10 fire damage.",
      "castingTime": "2 actions",
      "range": "1,000 feet",
      "target": "",
      "area": "60 burst",
      "duration": "",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "3d10",
          "type": "acid",
          "kind": "damage"
        },
        {
          "formula": "3d10",
          "type": "bludgeoning",
          "kind": "damage"
        },
        {
          "formula": "3d10",
          "type": "cold",
          "kind": "damage"
        },
        {
          "formula": "3d10",
          "type": "electricity",
          "kind": "damage"
        },
        {
          "formula": "3d10",
          "type": "bludgeoning",
          "kind": "damage"
        },
        {
          "formula": "3d10",
          "type": "fire",
          "kind": "damage"
        }
      ],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:nature-incarnate",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ZXwxs5tRjEGrjAJT",
      "slug": "nature-incarnate",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:a2bb9f3b111554d8f8c60372af4166e3c2c95ead3f81d7dba2cb9fc33a29a5c3",
    "translatableHash": "sha256:46abfbbb66b2b1fe3745b0def02b9a6e3cc51178b722cc813f72d9cae80f6e11",
    "data": {
      "schemaVersion": 1,
      "name": "Nature Incarnate",
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
      "description": "The primal power of the world flows through you. You transform into an incarnation of nature, either a green man or a kaiju. Your battle form is Medium for a green man or Gargantuan (30-foot-by-30-foot space) for a kaiju. While in this form, you gain the plant trait (for a green man) or the beast trait (for a kaiju). You can Dismiss the spell. You gain the following statistics and abilities regardless of which battle form you choose:\n• AC = 25 + your level. Ignore your armor's check penalty and Speed reduction.\n• 30 temporary Hit Points.\n• Darkvision.\n• One or more attacks specific to the battle form you choose, which are the only attacks you can Strike with. You're trained with them. Your attack modifier is +34, and you use the listed damage. These attacks are Strength based (for the purpose of the Enfeebled condition, for example). If your unarmed attack modifier is higher, you can use it instead.\n• Athletics modifier of +36, unless your own is higher.\nYou gain specific abilities based on the incarnation you choose:\n• Green Man\n• Speed 40 feet, climb 40 feet;\n• Melee 1 vines (reach 30 feet, versatile P), Damage 6d8+12 bludgeoning;\n• Ranged 1 thorns (range 100 feet), Damage 6d6+6 piercing;\n• Green Caress (aura, primal) 60 feet. Enemies other than plants must succeed at a check (fortitude, against:spell) against your spell DC or become Clumsy 1 for 1 round (Clumsy 2 on a critical failure).\n• Kaiju\n• Speed 50 feet; resistance 5 to physical damage;\n• Melee 1 jaws (reach 30 feet), Damage 6d10+10 piercing;\n• Melee 1 claws (agile, reach 30 feet), Damage 6d8+8 slashing;\n• Melee 1 foot (agile, reach 15 feet), Damage 6d6+10 bludgeoning;\n• Unstoppable You are immune to being Immobilized and ignore difficult terrain and greater difficult terrain;\n• Trample 3 You move up to double your Speed and move through the spaces of Huge or smaller creatures, trampling each creature whose space you enter. A trampled creature takes foot damage with a check (reflex, against:spell, basic) save against your spell DC.\nSpell Effect: Nature Incarnate",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  }
]
