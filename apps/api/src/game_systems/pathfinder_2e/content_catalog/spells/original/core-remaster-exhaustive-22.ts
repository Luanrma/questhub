import type { Pathfinder2eOriginalContentRecord } from '../../records'
import type { Pathfinder2eSpellData } from '../types'

export const PATHFINDER_2E_EXHAUSTIVE_22_SPELL_ORIGINALS: readonly Pathfinder2eOriginalContentRecord<Pathfinder2eSpellData>[] = [
  {
    "contentId": "pf2e:spell:spells-srd:negate-aroma",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "0fKHBh5goe2eiFYL",
      "slug": "negate-aroma",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:a985fc1d2d8f9067045a73f25ed93a932d2ab6d00e2025b66f9344a9d812f549",
    "translatableHash": "sha256:3759b1238e7df60724e207e8e60529be77c10d2dc73eedc7e1d54f534a36f69c",
    "data": {
      "schemaVersion": 1,
      "name": "Negate Aroma",
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
      "description": "The target loses its odor, preventing creatures from passively noticing its presence via smell alone, even if the creatures have precise or imprecise scent. A creature attempting a Perception check to Seek with scent and other senses might notice the lack of natural scent. If the target has any abilities that result from its smell, such as an overpowering scent, those abilities are also negated.\nHeightened (5th) The range increases to 30 feet, and you can target up to 10 creatures.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 willing creature",
      "area": null,
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (5th) The range increases to 30 feet, and you can target up to 10 creatures."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:ghost-sound",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "atlgGNI1E1Ox3O3a",
      "slug": "ghost-sound",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/ghost-sound.webp"
    },
    "sourceHash": "sha256:8bc8e394b963196b6f2e03e1a1ac4c88b04ac163ed106d9ce4c553fc5ae92e78",
    "translatableHash": "sha256:1ced0b907093fff3d237c6b6086de15c4036a412f1956f8c36749f9b54293615",
    "data": {
      "schemaVersion": 1,
      "name": "Ghost Sound",
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
        "occult"
      ],
      "description": "You create an auditory illusion of simple sounds that has a maximum volume equal to four normal humans shouting. The sounds emanate from a square you designate within range. You can't create intelligible words or other intricate sounds (such as music).\nHeightened (3rd) The range increases to 60 feet.\nHeightened (5th) The range increases to 120 feet.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "",
      "area": null,
      "duration": "sustained",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (3rd) The range increases to 60 feet.\nHeightened (5th) The range increases to 120 feet."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:acid-splash",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "gISYsBFby1TiXfBt",
      "slug": "acid-splash",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:f6a6f7217f5bba63d22273a482db3c54d9af603b0e56471cdb32f675462aed40",
    "translatableHash": "sha256:56c7a47819bb232584acedb00065df0aa8a9ac652d1a2d303f7530dd65acd3c2",
    "data": {
      "schemaVersion": 1,
      "name": "Acid Splash",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "acid",
        "attack",
        "cantrip",
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You splash a glob of acid that splatters your target and nearby creatures. Make a spell attack. If you hit, you deal 1d6 acid damage plus 1 splash acid damage. On a critical success, the target also takes 1 persistent acid damage.\nHeightened (3rd) The initial damage increases to 2d6, and the persistent damage increases to 2.\nHeightened (5th) The initial damage increases to 3d6, the persistent damage increases to 3, and the splash damage increases to 2.\nHeightened (7th) The initial damage increases to 4d6, the persistent damage increases to 4, and the splash damage increases to 3.\nHeightened (9th) The initial damage increases to 5d6, the persistent damage increases to 5, and the splash damage increases to 4.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [
        {
          "formula": "1d6",
          "type": "acid",
          "kind": "damage"
        },
        {
          "formula": "1",
          "type": "acid",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (3rd) The initial damage increases to 2d6, and the persistent damage increases to 2.\nHeightened (5th) The initial damage increases to 3d6, the persistent damage increases to 3, and the splash damage increases to 2.\nHeightened (7th) The initial damage increases to 4d6, the persistent damage increases to 4, and the splash damage increases to 3.\nHeightened (9th) The initial damage increases to 5d6, the persistent damage increases to 5, and the splash damage increases to 4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:ray-of-frost",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "gYjPm7YwGtEa1oxh",
      "slug": "ray-of-frost",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:2b7d32a2445de6aa81e19f94d3daa59b7eb8fd52b36551611661c3cb628d131a",
    "translatableHash": "sha256:c9781d00ccd6b2cd31ff97b7b8b7754f927654c1a4652910a8356d0f3d9e4cae",
    "data": {
      "schemaVersion": 1,
      "name": "Ray of Frost",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "attack",
        "cantrip",
        "cold",
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You blast an icy ray. Make a spell attack roll. The ray deals 2d4 cold damage.\nCritical Success The target takes double damage and takes a –10-foot status penalty to its Speeds for 1 round.\nSpell Effect: Ray of Frost\nSuccess The target takes normal damage.\nHeightened 1 The damage increases by 1d4.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [
        {
          "formula": "2d4",
          "type": "cold",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 1d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:shocking-grasp",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "r3NeUnsgt9mS03Sn",
      "slug": "shocking-grasp",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/shocking-grasp.webp"
    },
    "sourceHash": "sha256:ada698bdf087a2f18c4165bc887fd6990e0d7c301af0fe99b946d6e648bd6c61",
    "translatableHash": "sha256:c5bdcd854990178662fc766ade956f2567e5bcca586f263cd964a7c7259e95c5",
    "data": {
      "schemaVersion": 1,
      "name": "Shocking Grasp",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "attack",
        "concentrate",
        "electricity",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You shroud your hands in a crackling field of lightning. Make a melee spell attack roll. On a hit, the target takes 2d12 electricity damage. If the target is wearing metal armor or is made of metal, you gain a +1 circumstance bonus to your attack roll with shocking grasp, and the target also takes 1d4+0 persistent electricity damage on a hit. On a critical hit, double the initial damage, but not the persistent damage.\nHeightened 1 The damage increases by 1d12, and the persistent electricity damage increases by 1.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [
        {
          "formula": "2d12",
          "type": "electricity",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 1d12, and the persistent electricity damage increases by 1."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:shillelagh",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "s3abwDbTV43pGFFW",
      "slug": "shillelagh",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/shillelagh.webp"
    },
    "sourceHash": "sha256:8434f0a1f75fe9356c69d8b1002ee5a7ecce58335400352795d51d4e6a9edc7a",
    "translatableHash": "sha256:ffdbede907f50ea9fa685e38353f46dfe06d7040d57d7901d9f422c310c30901",
    "data": {
      "schemaVersion": 1,
      "name": "Shillelagh",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "plant"
      ],
      "traditions": [
        "primal"
      ],
      "description": "The target grows vines and leaves, brimming with primal energy. The target becomes a +1 striking weapon while in your hands, gaining a +1 item bonus to attack rolls and increasing the number of weapon damage dice to two. Additionally, as long as you are on your home plane, attacks you make with the target against aberrations, extraplanar creatures, and undead increase the number of weapon damage dice to three.\nSpell Effect: Shillelagh",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 club or staff you hold",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:death-knell",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "dLdRqT6UxTKlsPgp",
      "slug": "death-knell",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/death-knell.webp"
    },
    "sourceHash": "sha256:4eb372b276802253cf6d878ab015a5bbf8cb155b2be67addcceb1f14b075a11c",
    "translatableHash": "sha256:b12ed4763bd954a85d688e7bc12a17ea4e69abe93aefb63973f1fd3bd55200f2",
    "data": {
      "schemaVersion": 1,
      "name": "Death Knell",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "death",
        "manipulate"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "You snuff the life out of a creature on the brink of death. The target must attempt a Will save. If this kills it, you gain 10 temporary HP and a +1 status bonus to attack and damage rolls for 10 minutes.\nCritical Success The target is unaffected.\nSuccess The target's Dying value increases by 1.\nFailure The target dies.\nSpell Effect: Death Knell",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 living creature that has 0 HP",
      "area": null,
      "duration": "",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:acid-arrow",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "f8hRqLJaxBVhF1u0",
      "slug": "acid-arrow",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/acid-arrow.webp"
    },
    "sourceHash": "sha256:3755b2034b725cb95f06c9540b36d861ceb17edef4d838c1112c79cefac35ba7",
    "translatableHash": "sha256:dc40ed5db4d0ff98c3aa3b56547ae67803de8e31ce5e21256d5905e9afd249ef",
    "data": {
      "schemaVersion": 1,
      "name": "Acid Arrow",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "acid",
        "attack",
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You conjure an arrow of acid that keeps corroding the target after it hits. Make a spell attack against the target. On a hit, you deal 3d8 acid damage plus 1d6 persistent acid damage. On a critical hit, double the initial damage, but not the persistent damage.\nHeightened 2 The initial damage increases by 2d8, and the persistent acid damage increases by 1d6.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [
        {
          "formula": "3d8",
          "type": "acid",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The initial damage increases by 2d8, and the persistent acid damage increases by 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:spiritual-weapon",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Fq9yCbqI2RDt6Orw",
      "slug": "spiritual-weapon",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:1ff0bd6d78c9e769222d186bb9a8b4742269796a920ca1f0f45cc09814177f3c",
    "translatableHash": "sha256:05e82efedce70a4822b9f6d8dd5e867402715871abe5ee1c4e46d012e26e7ea6",
    "data": {
      "schemaVersion": 1,
      "name": "Spiritual Weapon",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "attack",
        "concentrate",
        "force",
        "manipulate"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "A weapon made of pure magical force materializes and attacks foes you designate within range. This weapon has a ghostly appearance and manifests as a club, a dagger, or your deity's favored weapon.\nWhen you cast the spell, the weapon appears next to a foe you choose within range and makes a Strike against it. Each time you Sustain the Spell, you can move the weapon to a new target within range (if needed) and Strike with it. The spiritual weapon uses and contributes to your multiple attack penalty.\nThe weapon's Strikes are melee spell attacks. Regardless of its appearance, the weapon deals 2d8 force damage. You can deal damage of the type normally dealt by the weapon instead of force damage (or any of the available damage types for a versatile weapon). No other statistics or traits of the weapon apply, and even a ranged weapon attacks adjacent creatures only. Despite making a spell attack, the spiritual weapon is a weapon for purposes of triggers, resistances, and so forth.\nThe weapon doesn't take up space, grant flanking, or have any other attributes a creature would. The weapon can't make any attack other than its Strike, and feats or spells that affect weapons do not apply to it.\nHeightened 2 The weapon's damage increases by 1d8.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [
        {
          "formula": "2d8",
          "type": "force",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The weapon's damage increases by 1d8."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:faerie-fire",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "HRb2doyaLtaoCfi3",
      "slug": "faerie-fire",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/faerie-fire.webp"
    },
    "sourceHash": "sha256:ecf26eeea17befb3dbda2f87d6238a8ddb814c863c61716e964ff259dcb4ffc9",
    "translatableHash": "sha256:dc244c2abf526e6e0fb7695c86eced737dfec9938a07e506cb58a3f71e99ff83",
    "data": {
      "schemaVersion": 1,
      "name": "Faerie Fire",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "light",
        "manipulate"
      ],
      "traditions": [
        "divine",
        "occult",
        "primal"
      ],
      "description": "All creatures in the area when you cast the spell are limned in colorful, heatless fire of a color of your choice for the duration. Visible creatures can't be Concealed while affected by faerie fire. If the creatures are Invisible, they are Concealed while affected by faerie fire, rather than being Undetected.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "",
      "area": "10 burst",
      "duration": "5 minutes",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:mirror-image",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "j8vIoIEWElvpwkcI",
      "slug": "mirror-image",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:f4d18d587d16596351a7bfacae1d224014d31a721b8f2c44a5494df666163013",
    "translatableHash": "sha256:ee87f0b647ff6e3d3f5d6ed32b47567db94ffe38b20e910e37058f1c75c09a9b",
    "data": {
      "schemaVersion": 1,
      "name": "Mirror Image",
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
      "description": "Three illusory images of you swirl about your space, potentially causing those who attack you to hit one of the images instead of you. Any attack that would hit you has a random chance of hitting one of your images instead of you. If all three images remain, there is a 1 in 4 chance of hitting you (1 on 1d4). With two images remaining, there is a 1 in 3 chance of hitting you (1-2 on 1d6). With only one image, the chances are 1 in 2 (1-3 on 1d6).\nOnce an image is hit, it is destroyed. If an attack roll fails to hit your AC but doesn't critically fail, it destroys an image but has no additional effect (even if the attack would normally have an effect on a failure). If an attack roll is a critical success and would hit one of the images, one of the images is destroyed and the attack roll becomes a success against you. Once all the images are destroyed, the spell ends.\nSpell Effect: Mirror Image",
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
    "contentId": "pf2e:spell:spells-srd:enhance-victuals",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "rdTEF1hfAWbN58NE",
      "slug": "enhance-victuals",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:84bf2051c287c74a382095cb2b6f4af6995ad5eb2e6d76e9bb93e7262f31a9f8",
    "translatableHash": "sha256:1f56c95d23afd90bf198ea22e18e7f97a48179552f3bf5350a3b3cef84efa97e",
    "data": {
      "schemaVersion": 1,
      "name": "Enhance Victuals",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "divine",
        "primal"
      ],
      "description": "You transform the target into delicious fare, changing water into wine or another fine beverage or enhancing the food's taste and ingredients to make it a gourmet treat.\nPrior to the transformation, the spell attempts to counteract any poisons in the food or water. The food turns back to normal if not consumed before the duration expires, though any poisons that were counteracted are still gone.\nHeightened 1 The number of gallons of water you can target increases by 1, or the number of pounds of food you can target increases by 5.",
      "castingTime": "1 minute",
      "range": "touch",
      "target": "up to 1 gallon of non-magical water or up to 5 pounds of food",
      "area": null,
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 The number of gallons of water you can target increases by 1, or the number of pounds of food you can target increases by 5."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:restoration",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "SnaLVgxZ9ryUFmUr",
      "slug": "restoration",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:55cf0a7600fbc10f0bb3d69506c40542c2759a9e6372f0e9c8233c876b2b9782",
    "translatableHash": "sha256:5a620485e2f4252eaf6bce9417d18038aa2952b57652f66aeb7b812097144b48",
    "data": {
      "schemaVersion": 1,
      "name": "Restoration",
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
      "description": "Restorative magic counters the effects of toxins or conditions that prevent a creature from functioning at its best. When you cast restoration, choose to either reduce a condition or lessen the effect of a toxin. A creature can benefit from only one restoration spell each day, and it can't benefit from restoration more than once to reduce the stage of the same exposure to a given toxin.\n• Lessen a Toxin Reduce the stage of one toxin the target suffers from by one stage. This can't reduce the stage below stage 1 or cure the affliction.\n• Reduce a Condition Reduce the value of the target's Clumsy, Enfeebled, or Stupefied condition by 2. You can instead reduce two of the listed conditions by 1 each.\nHeightened (4th) Add Drained to the list of conditions you can reduce. When you lessen a toxin, reduce the stage by two. You also gain a third option that allows you to reduce the target's Doomed value by 1. You can't use this to reduce a permanent Doomed condition.\nHeightened (6th) As the 4th-rank restoration, but you can reduce a permanent Doomed condition if you add a spellcasting action and a material component while Casting the Spell, during which you provide 100 gp worth of diamond dust as a cost.",
      "castingTime": "1 minute",
      "range": "touch",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) Add Drained to the list of conditions you can reduce. When you lessen a toxin, reduce the stage by two. You also gain a third option that allows you to reduce the target's Doomed value by 1. You can't use this to reduce a permanent Doomed condition.\nHeightened (6th) As the 4th-rank restoration, but you can reduce a permanent Doomed condition if you add a spellcasting action and a material component while Casting the Spell, during which you provide 100 gp worth of diamond dust as a cost."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:stinking-cloud",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "GKpEcy9WId6NJvtx",
      "slug": "stinking-cloud",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:5693d10cdec25b00cc4d8c703b1a6d45a9a64aca7de1c8a2421d19ea037134e7",
    "translatableHash": "sha256:e2a1a38216b174feaac7c19a57474ed8033e771c3ce0cfcbbb8351347fefd500",
    "data": {
      "schemaVersion": 1,
      "name": "Stinking Cloud",
      "rank": 3,
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
      "description": "You create a cloud of putrid mist in the area. The cloud functions as Mist except it sickens creatures that end their turns within the cloud. (The Concealed condition is not a poison effect.)\nCritical Success The creature is unaffected.\nSuccess The creature is Sickened 1.\nFailure The creature is Sickened 1 and Slowed 1 while in the cloud.\nCritical Failure The creature is Sickened 2 and Slowed 1 until it leaves the cloud.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "",
      "area": "20 burst",
      "duration": "1 minute",
      "defense": "fortitude save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:circle-of-protection",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "mpGCMTldMVa0pWYs",
      "slug": "circle-of-protection",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/circle-of-protection.webp"
    },
    "sourceHash": "sha256:264a65abf99f80769d0831cd46d5d98f2983801a04e1bec67e9d84ee083f2dc9",
    "translatableHash": "sha256:a5bf7f43986067362921f20c1e4a3443ed2a5a64127b560a88118e16518e5ec6",
    "data": {
      "schemaVersion": 1,
      "name": "Circle of Protection",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "You ward a creature and those nearby against a specified alignment. Choose chaotic, evil, good, or lawful; this spell gains the opposing trait. Creatures in the area gain a +1 status bonus to AC against attacks by creatures of the chosen alignment and to saves against effects from such creatures. This bonus increases to +3 against effects from such creatures that directly control the target and attacks made by summoned creatures of the chosen alignment. Summoned creatures of the chosen alignment can't willingly enter the area without succeeding at a Will save; repeated attempts use the first save result.\nHeightened (4th) The duration increases to 1 hour.\nSpell Effect: Protection",
      "castingTime": "3 actions",
      "range": "touch",
      "target": "",
      "area": "10 emanation",
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) The duration increases to 1 hour.\nSpell Effect: Protection"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:secret-page",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "VVAZPCvd4d90qVA1",
      "slug": "secret-page",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:42445db1f66006112c21404708aef1475b02f3539efb764ba9c5299e4901c5f5",
    "translatableHash": "sha256:dea6f8c3c6a6cad31b3e3348ec4fa741c05982d507fbda25cb44ec0b5696a672",
    "data": {
      "schemaVersion": 1,
      "name": "Secret Page",
      "rank": 3,
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
      "description": "You change the target's text to different text entirely. If the text is a spellbook or a scroll, you can change it to show a spell you know of secret page's level or lower. The replacement spell cannot be cast or used to prepare a spell. You can also transform the text into some other text you have written or have access to. You can specify a password that allows a creature touching the page to change the text back and forth. You must choose the replacement text and the password, if any, when you Cast the Spell.",
      "castingTime": "1 minute",
      "range": "touch",
      "target": "1 page up to 3 square feet in size",
      "area": null,
      "duration": "unlimited",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:anathematic-reprisal",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "7tR29sQt35NfIWqN",
      "slug": "anathematic-reprisal",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/anathematic-reprisal.webp"
    },
    "sourceHash": "sha256:82a470bc8c64864003210499b872ee0868912642a88202b27ad56e034cd8fa3c",
    "translatableHash": "sha256:ced7cf0723a5db3b348dfac2044c3fe7fcbad288a1e46a27e308b56996722c20",
    "data": {
      "schemaVersion": 1,
      "name": "Anathematic Reprisal",
      "rank": 4,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "divine"
      ],
      "description": "Trigger A creature performs an act anathema to your deity.\nYou punish a creature that transgresses against your deity, drawing upon the anguish you feel upon seeing one of your deity's anathema committed. You can cast this spell only when a creature actively commits a unique act of anathema. For example, if creating undead were anathema to your deity, you could use anathematic reprisal on a necromancer who had just created undead in front of you, but not on an undead creature just for existing. You deal 4d6 mental damage to the target, but a basic Will save can reduce this damage. If it fails, it is also Stupefied 1 for 1 round. The creature is then temporarily immune for 1 minute.\nHeightened 1 The damage increases by 1d6.",
      "castingTime": "reaction",
      "range": "30 feet",
      "target": "the triggering creature",
      "area": null,
      "duration": "",
      "defense": "basic will save",
      "damage": [
        {
          "formula": "4d6",
          "type": "mental",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:air-walk",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "b5sGjGlBf58f8jn0",
      "slug": "air-walk",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:114da01cf8d828d86496e77cf287791e7476c3463ee0eec6226ee990d2ca8596",
    "translatableHash": "sha256:e199e9750db0b039a954cce28a3ca65de0851f885a885e97ad2222928bfb22a5",
    "data": {
      "schemaVersion": 1,
      "name": "Air Walk",
      "rank": 4,
      "rarity": "common",
      "traits": [
        "air",
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "divine",
        "primal"
      ],
      "description": "The target can walk on air as if it were solid ground. It can ascend and descend in this way at a maximum of a 45-degree angle.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 creature",
      "area": null,
      "duration": "5 minutes",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:rope-trick",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "GzdgM0m7wXKuFSho",
      "slug": "rope-trick",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:b98376f6b744993f9f962fe96b694d5325ed7024ab89e541c8308b8da90e8c59",
    "translatableHash": "sha256:98772a6ad4694687ea9bc0fb68329f466152edf29261b568a6a28ad051b412f2",
    "data": {
      "schemaVersion": 1,
      "name": "Rope Trick",
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
      "description": "You cause the target rope to rise vertically into the air. Where it ends, an extradimensional space opens, connected to the top of the rope. This space can be reached only by climbing the rope.\nThe entrance to the space can't be seen, and it can be pinpointed only by the presence of the rope. The rope can't be removed or hidden, though it can be detached from the extradimensional space by pulling it with 16,000 pounds of weight, critically succeeding at an Athletics check against the spell's DC, or destroying the rope. The space holds up to eight Medium creatures and their gear. A Large creature counts as two Medium creatures, a Huge creature counts as four Medium creatures, and a Gargantuan creature fills the space on its own.\nIf the rope is detached or destroyed, or if a creature attempts to enter the space that would put it over its capacity, the space begins to unravel. It disappears in 1d4, depositing the creatures within safely on the ground below.",
      "castingTime": "10 minutes",
      "range": "touch",
      "target": "1 touched piece of rope from 5 to 30 feet long",
      "area": null,
      "duration": "8 hours",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:solid-fog",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "piMJO6aYeDJbrhEo",
      "slug": "solid-fog",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/solid-fog.webp"
    },
    "sourceHash": "sha256:7b44c159dc6bd42590a9fc6e442f5b5b5569d2bd15bdb9d235954d62a5e49efe",
    "translatableHash": "sha256:e8c3efe2c1852a7b4276156c00b46cd2b5552777e9a3de0b0f021e2faf24e5ac",
    "data": {
      "schemaVersion": 1,
      "name": "Solid Fog",
      "rank": 4,
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
      "description": "You conjure a bank of fog so thick it impedes movement as well as sight. This functions as Mist, except that the area is also difficult terrain. You can Dismiss the spell.",
      "castingTime": "3 actions",
      "range": "120 feet",
      "target": "",
      "area": "20 burst",
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:spell-immunity",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "tgIhRUFtgDSELpJE",
      "slug": "spell-immunity",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:ad9004371f7ba924d631631e5c6462732b2acbd16b10bbde04b2b3a3a5812f0c",
    "translatableHash": "sha256:ae81d2b9d3fcf7d0b471c75c61b14b8a8c884c64aabb18a2f551075892a18d1d",
    "data": {
      "schemaVersion": 1,
      "name": "Spell Immunity",
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
      "description": "You ward a creature against the effects of a single spell. Choose a spell and name it aloud as part of the verbal component. Spell immunity attempts to counteract that spell whenever spell immunity's target is the target of the named spell or in that spell's area. Successfully counteracting a spell that targets an area or multiple targets with spell immunity negates the effects only for the target affected by spell immunity.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 creature",
      "area": null,
      "duration": "until the next time you make your daily preparations",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:phantasmal-killer",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "tlcrVRqW1MSKJ5IC",
      "slug": "phantasmal-killer",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/phantasmal-killer.webp"
    },
    "sourceHash": "sha256:4c91bc1ba230fe2ef1d034f8a54b2935e17dda1e9a31378fd2e536317151ea67",
    "translatableHash": "sha256:ddd499c7703bd9efaf13036da277c3c34459a972a12f4647285822f65e4eec0d",
    "data": {
      "schemaVersion": 1,
      "name": "Phantasmal Killer",
      "rank": 4,
      "rarity": "common",
      "traits": [
        "concentrate",
        "death",
        "emotion",
        "fear",
        "illusion",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You create a phantasmal image of the most fearsome creature imaginable to the target. Only the spell's target can see the killer, though you can see the vague shape of the illusion as it races forth to attack. The effect of the killer is based on the outcome of the target's Will save.\nCritical Success The target is unaffected.\nSuccess The target takes 4d6 mental damage and is Frightened 1.\nFailure The target takes (max(8,4*2))d6[mental] damage and is Frightened 2.\nCritical Failure The target is so afraid it might die. It must attempt a check (fortitude, traits:incapacitation) save; if the target fails, it dies. On a successful Fortitude save, the target takes (max(12,4*3))d6[mental] damage, is Fleeing until the end of its next turn, and is Frightened 4. This effect has the incapacitation trait.\nHeightened 1 The damage increases by 2d6 on a failure and by 3d6 on a critical failure.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "1 living creature",
      "area": null,
      "duration": "",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened 1 The damage increases by 2d6 on a failure and by 3d6 on a critical failure."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:discern-lies",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "uNsliWpl8Q1JdFcM",
      "slug": "discern-lies",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/discern-lies.webp"
    },
    "sourceHash": "sha256:050afc8e22da742952f12afae9590afac97cd0b70645cf9aaf2e20170c9aaa3a",
    "translatableHash": "sha256:2aba45fd6c7d9f1e28d758e5edd5f92bca8b40b6a5c8b32be0451f5c84314d5d",
    "data": {
      "schemaVersion": 1,
      "name": "Discern Lies",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate",
        "mental",
        "revelation"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult"
      ],
      "description": "Falsehoods ring in your ears like discordant notes. You gain a +4 status bonus to Perception checks when someone Lies.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:black-tentacles",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "2w4OpAGihn1JSHFD",
      "slug": "black-tentacles",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/black-tentacles.webp"
    },
    "sourceHash": "sha256:5f3c56e3493098ce4d3cc045dceb26d1433c29ad9e881f605194e0036542c110",
    "translatableHash": "sha256:4e3b85af0f1932456fca6b3213b253b3745917f81e59df7c2da6be03646d3b4c",
    "data": {
      "schemaVersion": 1,
      "name": "Black Tentacles",
      "rank": 5,
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
      "description": "Area 20-foot burst adjacent to a flat surface\nOily black tentacles rise up and attempt to capture creatures in the area. Make spell attack rolls against the Fortitude DC of each creature in the area. Any creature you succeed against is Grabbed and takes 3d6 bludgeoning damage. Whenever a creature ends its turn in the area, the tentacles attempt to grab that creature if they haven't already, and they deal 1d6 bludgeoning damage to any creature already Grabbed.\nThe tentacles' Escape DC is equal to your spell DC. A creature can attack a tentacle in an attempt to release its grip. Its AC is equal to your spell DC, and it is destroyed if it takes 12 or more damage. Even if destroyed, additional tentacles continue to grow in the area until the duration ends. You can Dismiss the spell.",
      "castingTime": "3 actions",
      "range": "120 feet",
      "target": "",
      "area": "20 burst",
      "duration": "1 minute",
      "defense": "fortitude-dc",
      "damage": [
        {
          "formula": "3d6",
          "type": "bludgeoning",
          "kind": "damage"
        }
      ],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:cone-of-cold",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "3puDanGfpEt6jK5k",
      "slug": "cone-of-cold",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:cb29524bc990148119939c49e0a1adbe0f0933f2a31b29eff7f2894e78d56de0",
    "translatableHash": "sha256:3baa3abf91c7c31c421cf2eb8a45827c346dad3c706d36c49be0ccf9b29aaf82",
    "data": {
      "schemaVersion": 1,
      "name": "Cone of Cold",
      "rank": 5,
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
      "description": "Icy cold rushes forth from your hands. You deal 12d6 cold damage to creatures in the area.\nHeightened 1 The damage increases by 2d6.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "60 cone",
      "duration": "",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "12d6",
          "type": "cold",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:flame-strike",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "E3X2RbzWHCdz7gsk",
      "slug": "flame-strike",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:935c41ad5016f5b2fa219ab3eca03ba04dfa856a586762bfb53c55d1a6f97401",
    "translatableHash": "sha256:23b3d2ff8f033265a36624f6cb4645cc8547f00c647edb2a1fa792f9b49fe5d0",
    "data": {
      "schemaVersion": 1,
      "name": "Flame Strike",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "concentrate",
        "fire",
        "manipulate"
      ],
      "traditions": [
        "divine"
      ],
      "description": "Area: 10-foot radius, 40-foot-tall cylinder\nYou call a rain of divine fire that plummets down from above, dealing 8d6 fire damage. Because the flame is infused with divine energy, creatures in the area apply only half their usual fire resistance. Creatures that are immune to fire, instead of gaining the usual benefit of immunity, treat the results of their saving throws as one degree of success better.\nHeightened 1 The damage increases by 2d6.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "",
      "area": "10 cylinder",
      "duration": "",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "8d6",
          "type": "fire",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:chromatic-wall",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "forsqeofEszBNtLq",
      "slug": "chromatic-wall",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/chromatic-wall.webp"
    },
    "sourceHash": "sha256:8ea6f9f589c48feb0a58f18af151d11ef95a985f80b8fbc1aa091242124ed5e4",
    "translatableHash": "sha256:5fd1fcf6e74fc450f147b95e47d9340beb3da6dfbc40b7c2e3f16be8eeabb400",
    "data": {
      "schemaVersion": 1,
      "name": "Chromatic Wall",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You create an opaque wall of light in a single vibrant color. The wall is straight and vertical, stretching 60 feet long and 30 feet high. If the wall would pass through a creature, the spell is lost. The wall sheds bright light for 20 feet on each side, and dim light for the next 20 feet. You can ignore the wall's effects.\nRoll 1d4 to determine the color of the wall. Each color has a particular effect on items, effects, or creatures that attempt to pass through. Chromatic wall can't be counteracted normally; rather, each color is automatically counteracted when targeted by a specific spell, even if that spell's rank is lower than that of chromatic wall.\n• Red The wall destroys ranged weapon ammunition (such as arrows and crossbow bolts) that would pass through, and it deals 20 fire damage to anyone passing through, with a check (reflex, against:spell, basic) save. Cone of Cold can counteract a red chromatic wall.\n• Orange The wall destroys thrown weapons that would pass through, and it deals 25 acid damage to anyone passing through, with a check (reflex, against:spell, basic) save. Gust of Wind can counteract an orange chromatic wall.\n• Yellow The wall stops acid, cold, electricity, fire, force, sonic, vitality, and void effects from passing through, and it deals 30 electricity damage to anyone passing through, with a check (reflex, against:spell, basic) save. Disintegrate can counteract a yellow chromatic wall.\n• Green The wall stops toxins, gases, and breath weapons from passing through. It deals 10 poison damage to anyone passing through and makes them Enfeebled 1 for 1 minute. A check (fortitude, against:spell, basic) save reduces the damage and negates the Enfeebled condition on a success. Magic Passage can counteract a green chromatic wall.\nHeightened (7th) The spell's duration increases to 1 hour. Roll 1d8 to determine the wall's color; the results for 5-8 are below. A 30 fire damage, 35 acid damage, 40 electricity damage, or 20 poison damage wall deals an extra 10 damage.\n• Blue The wall stops auditory, petrification, sonic and visual effects from passing through, and creatures passing through are subject to the effects of Petrify. Force Barrage can counteract a blue chromatic wall.\n• Indigo The wall stops divination and mental effects from passing through, and those passing through are subject to the effects of Warp Mind. Holy Light can counteract an indigo chromatic wall.\n• Violet The wall prevents spells from targeting the other side (area effects still cross as normal). Creatures passing through must succeed at a check (will, against:spell) save or they are Slowed 1 for 1 minute; on a critical failure, the creature is instead sent to another plane, with the effect of Interplanar Teleport. Dispel Magic can counteract a violet chromatic wall.\n• Reroll, and creatures that pass through the wall take a -2 circumstance penalty to their saves.",
      "castingTime": "3 actions",
      "range": "120 feet",
      "target": "",
      "area": "60 line",
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (7th) The spell's duration increases to 1 hour. Roll 1d8 to determine the wall's color; the results for 5-8 are below. A 30 fire damage, 35 acid damage, 40 electricity damage, or 20 poison damage wall deals an extra 10 damage.\n• Blue The wall stops auditory, petrification, sonic and visual effects from passing through, and creatures passing through are subject to the effects of Petrify. Force Barrage can counteract a blue chromatic wall.\n• Indigo The wall stops divination and mental effects from passing through, and those passing through are subject to the effects of Warp Mind. Holy Light can counteract an indigo chromatic wall.\n• Violet The wall prevents spells from targeting the other side (area effects still cross as normal). Creatures passing through must succeed at a check (will, against:spell) save or they are Slowed 1 for 1 minute; on a critical failure, the creature is instead sent to another plane, with the effect of Interplanar Teleport. Dispel Magic can counteract a violet chromatic wall.\n• Reroll, and creatures that pass through the wall take a -2 circumstance penalty to their saves."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:telepathic-bond",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "gfVXAW95YWRz0pJC",
      "slug": "telepathic-bond",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/telepathic-bond.webp"
    },
    "sourceHash": "sha256:81564420741f147c59bba18e6c186b5d943caa1ba82b2ca90e5bf2439eefa608",
    "translatableHash": "sha256:723d3858e4aa3f275444c86cb576d51d36bf7b42f3f24020a2858f90db170363",
    "data": {
      "schemaVersion": 1,
      "name": "Telepathic Bond",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "The targets can communicate telepathically with any or all of the other targets from any point on the same planet.",
      "castingTime": "1 minute",
      "range": "touch",
      "target": "you and up to 4 willing creatures touched",
      "area": null,
      "duration": "8 hours",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:shadow-siphon",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "tcwT97RWKxsJiefG",
      "slug": "shadow-siphon",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:ecf3afa812a17d472d501b8fdbd514df62dc9c604e08bd88bf04961925b32464",
    "translatableHash": "sha256:2b254d0f7764396bff0e713c74f636a9247e3a682c087929a09f3a542dc576c3",
    "data": {
      "schemaVersion": 1,
      "name": "Shadow Siphon",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "concentrate",
        "illusion",
        "shadow"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "Trigger A spell or magical effect deals damage.\nExchanging material energy with that of the Shadow Plane, you transform the triggering spell into a partially illusory version of itself. Attempt to counteract the target spell. If the attempt is successful, any creatures that would be damaged by the spell instead take only half as much damage, but the spell otherwise works as normal. Treat shadow siphon's counteract rank as 2 higher for this attempt.",
      "castingTime": "reaction",
      "range": "60 feet",
      "target": "the triggering spell",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:abyssal-plague",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "vJuaxTd6q11OjGqA",
      "slug": "abyssal-plague",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:d89dd13120213c7ec74d55fae687e760baaf386cd190205a8cd1ac2c4b989c9d",
    "translatableHash": "sha256:e1539538e9f453fa08a501038e5c48bb2981f3cfaf7144bf9f9e8b45610c3764",
    "data": {
      "schemaVersion": 1,
      "name": "Abyssal Plague",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "chaotic",
        "concentrate",
        "disease",
        "evil",
        "manipulate"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "Your touch afflicts the target with Abyssal plague, which siphons fragments of their soul away to empower the Abyss. The effect is based on the target's Fortitude save.\nCritical Success The target is unaffected.\nSuccess The target takes 2 spirit damage per spell rank, and takes a -2 status penalty to saves against Abyssal plague for 1 day or until the target contracts it, whichever comes first.\nFailure The target is afflicted with Abyssal plague at stage 1.\nCritical Failure The target is afflicted with Abyssal plague at stage 2.\nAbyssal Plague (disease) Level 9\nThe target can't recover from the drained condition from Abyssal plague until the disease is cured\nStage 1 Drained 1 (1 day)\nStage 2 Drained increases by 2 (1 day).",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": "fortitude save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:death-ward",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "YvXKGlHOt7mdW2jZ",
      "slug": "death-ward",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:933b47ba02011aa200cdd3a78f04ed8849580cbcece826e048e0c1a4d802c268",
    "translatableHash": "sha256:604b8f2d8648cdec0a299e27405ccbbe7384be93b9a0ee48d8e5a331ea54d6d6",
    "data": {
      "schemaVersion": 1,
      "name": "Death Ward",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "divine",
        "occult",
        "primal"
      ],
      "description": "You shield a creature from the ravages of void energy.\nIt receives a +4 status bonus to saves against death and void effects, gains void resistance 10, and suppresses the effects of the Doomed condition.\nSpell Effect: Death Ward",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 living creature touched",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:purple-worm-sting",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ayRXv0wQH00TTNZe",
      "slug": "purple-worm-sting",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/purple-worm-sting.webp"
    },
    "sourceHash": "sha256:d36773b91f351186c70c583efbd1ace80ff9378e6b251b8230704a6a1a2eb21e",
    "translatableHash": "sha256:8d6918a8e66bf9613764c0bbdeb48ee7305b31a092d6d9a5540ca1eec535c4f8",
    "data": {
      "schemaVersion": 1,
      "name": "Purple Worm Sting",
      "rank": 6,
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
      "description": "You replicate the attack of a deadly purple worm. You deal 3d6 piercing damage to the touched creature and afflict it with purple worm venom. The target must attempt a Fortitude save.\nCritical Success The target is unaffected.\nSuccess The target takes 3d6 poison damage.\nFailure The target is afflicted with purple worm venom at stage 1.\nCritical Failure The target is afflicted with purple worm venom at stage 2.\nPurple Worm Venom (poison)\nLevel 11\nMaximum Duration 6 rounds.\nStage 1 3d6 poison damage and Enfeebled 2 (1 round)\nStage 2 4d6 poison damage and Enfeebled 2 (1 round)\nStage 3 6d6 poison damage and Enfeebled 2 (1 round).",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": "fortitude save",
      "damage": [
        {
          "formula": "3d6",
          "type": "piercing",
          "kind": "damage"
        }
      ],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:fire-seeds",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "kuoYff1csM5eAcAP",
      "slug": "fire-seeds",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/fire-seeds.webp"
    },
    "sourceHash": "sha256:698aacd12b5bc32b17c9af2e4dec757655b810fde625ba3ef3f604790c4a4d19",
    "translatableHash": "sha256:dec7310c53528770cf4bf7a8492c670c96677e0807f90e0a7e27d57391c775b5",
    "data": {
      "schemaVersion": 1,
      "name": "Fire Seeds",
      "rank": 6,
      "rarity": "common",
      "traits": [
        "concentrate",
        "fire",
        "manipulate",
        "plant"
      ],
      "traditions": [
        "primal"
      ],
      "description": "Four acorns grow in your hand, their shells streaked with pulsing red and orange patterns. You or anyone else who has one of the acorns can toss it up to 30 feet with an Interact action. It explodes in a 5-foot burst, dealing 4d6 fire damage. The save uses your spell DC, even if someone else throws the acorn. Flames continue to burn on the ground in the burst for 1 minute, dealing 2d6 fire damage to any creature that enters the flames or ends its turn within them. A creature can take damage from the continuing flames only once per round, even if it's in overlapping areas of fire created by different acorns. When the spell ends, any remaining acorns rot and turn to ordinary soil.\nHeightened (8th) The burst's damage increases to 5d6, and the continuing flames damage increases to 3d6 fire damage.\nHeightened (9th) The burst's damage increases to 6d6, and the continuing flames damage increases to 3d6.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "4d6",
          "type": "fire",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (8th) The burst's damage increases to 5d6, and the continuing flames damage increases to 3d6 fire damage.\nHeightened (9th) The burst's damage increases to 6d6, and the continuing flames damage increases to 3d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:blade-barrier",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "peCF6VArm8urfwxZ",
      "slug": "blade-barrier",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:8e562c3fbbe263d919a43019ac7b3eecb0b467e94af5d359a6aa4e391337742f",
    "translatableHash": "sha256:b6c9f5060e40d87bbad9f0b78878d5d4ab50dbdb9a9f83faab1fec1991d60118",
    "data": {
      "schemaVersion": 1,
      "name": "Blade Barrier",
      "rank": 6,
      "rarity": "common",
      "traits": [
        "concentrate",
        "force",
        "manipulate"
      ],
      "traditions": [
        "divine"
      ],
      "description": "Blades of force form a churning wall. The wall is a straight line 20 feet high, 120 feet long, and 2 inches thick, and it provides cover. The wall deals 7d8 force damage to each creature that's in the wall's space when it is created, that attempts to pass through the wall, or that ends its turn inside the wall. A basic Reflex save reduces the damage. A creature that succeeds at this save when the wall is created is pushed to the nearest space on the side of its choice. Creatures trying to move through the wall fail to do so if they critically fail the save, ending their movement adjacent to the wall.\nHeightened 1 The damage increases by 1d8.",
      "castingTime": "3 actions",
      "range": "120 feet",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "7d8",
          "type": "force",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 1d8."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:stone-to-flesh",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Pr1ruNTbzGn3H9w5",
      "slug": "stone-to-flesh",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/stone-to-flesh.webp"
    },
    "sourceHash": "sha256:2be7fb40501578f971d56da27790d99446765f21299fdee106de3b0e323c0430",
    "translatableHash": "sha256:176290578b258b49c59a4985ba635bf62a9d8b531814e5b136859b6fdffe628a",
    "data": {
      "schemaVersion": 1,
      "name": "Stone to Flesh",
      "rank": 6,
      "rarity": "common",
      "traits": [
        "concentrate",
        "earth",
        "manipulate"
      ],
      "traditions": [
        "divine",
        "primal"
      ],
      "description": "Manipulating the fundamental particles of matter, you convert stone into flesh and blood. You restore a Petrified creature to its normal state or transform a stone object into a mass of inert flesh (without stone's Hardness) in roughly the same shape.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "petrified creature or human-size stone object",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:reverse-gravity",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "37ESlJzUvVbOudOT",
      "slug": "reverse-gravity",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/reverse-gravity.webp"
    },
    "sourceHash": "sha256:538ffd9efefcef4230cc4d310ec456bb909b458d6c2d69d46775a93e43e4eb65",
    "translatableHash": "sha256:159c4f5facdfdfb5a9c0e0a41c9e0bf6b2026c23020bc23d9db936b3fc6b82bf",
    "data": {
      "schemaVersion": 1,
      "name": "Reverse Gravity",
      "rank": 7,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "Area (continued) 20-foot radius, 40-foot tall cylinder\nYou reverse gravity in the area. Creatures and objects that aren't secured to the ground immediately fall upward to the top of the area. A creature might be able to Grab an Edge to arrest its fall if it falls past an appropriate surface. If a creature falls against a solid object (such as a ceiling), it takes the appropriate amount of falling damage and lands on the surface. Once an object or creature reaches the top of the area, it floats, caught between the normal and reversed gravity. The creature can move along the plane where the two forms of gravity meet. Creatures that can levitate or fly can use those abilities to mitigate the effects of reverse gravity.\nWhen reverse gravity ends, all creatures and objects caught in the area fall back down. Likewise, anything that moves beyond the spell's area is subjected to normal gravity again.",
      "castingTime": "3 actions",
      "range": "120 feet",
      "target": "",
      "area": "20 cylinder",
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:ethereal-jaunt",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "D2nPKbIS67m9199U",
      "slug": "ethereal-jaunt",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/etheral-jaunt.webp"
    },
    "sourceHash": "sha256:54a0f5a782b47cb9e849067fa147905c4ae9d6cc5f28d04c12af052685673be6",
    "translatableHash": "sha256:ea5e2a267f57577e5de165fc48961b7b49fd0eaca01a233724667766cc5c6dcc",
    "data": {
      "schemaVersion": 1,
      "name": "Ethereal Jaunt",
      "rank": 7,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate",
        "teleportation"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "You travel to the Ethereal Plane, which overlaps the Material Plane. Material Plane creatures can't see you, and you can move through things on the Material Plane. You move at half your normal Speeds, but can move in any direction (including up and down). You can see onto the Material Plane within a radius of 60 feet; it is gray, hazy, and Concealed from you. You can't affect the Material Plane, and you can't be affected by the Material Plane except by force effects and abjurations originating there. When the spell ends, you return to the Material Plane. If you're in the air, you fall (unless you can fly), and if you're inside an object, you're pushed into the nearest open space and take 1d6 damage per 5 feet you were pushed. If you cast this spell when not on the Material Plane, it is lost.\nHeightened (9th) You can target up to five additional willing creatures at a range of 30 feet. The duration is up to 10 minutes.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (9th) You can target up to five additional willing creatures at a range of 30 feet. The duration is up to 10 minutes."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:prismatic-spray",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "d6o52BnjViNz7Gub",
      "slug": "prismatic-spray",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/prismatic-spray.webp"
    },
    "sourceHash": "sha256:e6c2b20546681999f17bf9578cd1ac2daf05df4c713d74b16af0bf0d1c4ad8e4",
    "translatableHash": "sha256:01497fd9ca18c33ffb80a69d99e9c27231754d7fe9405c6853f99bceebe42140",
    "data": {
      "schemaVersion": 1,
      "name": "Prismatic Spray",
      "rank": 7,
      "rarity": "common",
      "traits": [
        "concentrate",
        "light",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "A spray of rainbow light beams cascades from your open hand. Each creature in the area must roll 1d8 on the table below to see which beam affects it, then attempt a saving throw of the indicated type. The table notes any additional traits that apply to each type of ray. If a creature is struck by multiple beams, it uses the same d20 result for all its saving throws. For all rays, a successful saving throw negates the effect for that creature.\nPrismatic Spray\n1d8 | Color | Save | Effects (Traits) |\n1 | Red | Reflex | 50 fire damage (fire) |\n2 | Orange | Reflex | 60 acid damage (acid) |\n3 | Yellow | Reflex | 70 electricity damage (electricity) |\n4 | Green | Fortitude | 30 poison damage and Enfeebled 1 for 1 minute (poison) |\n5 | Blue | Fortitude | Affected as if by Petrify |\n6 | Indigo | Will | Confused, as the Warp Mind spell (mental) |\n7 | Violet | Will | Slowed for 1 minute; if a critical failure, sent to another plane, as Interplanar Teleport (teleportation) |\n8 | Potent beam | - | Affected by two beams - roll twice, rerolling any duplicates or results of 8 |",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "30 cone",
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:divine-vessel",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "hiVL8qsnTJtpouw0",
      "slug": "divine-vessel",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/divine-vessel.webp"
    },
    "sourceHash": "sha256:fcff878e655f4f6631e5213bf094d8e8e50e0d0b0171c9879594a3261c4d6974",
    "translatableHash": "sha256:22a3a3f2af0a42045fcaa4571e982836a42f51343e91e3812b12d437bc73d37e",
    "data": {
      "schemaVersion": 1,
      "name": "Divine Vessel",
      "rank": 7,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "morph"
      ],
      "traditions": [
        "divine"
      ],
      "description": "You accept otherworldly energies into your body; while you are still recognizably yourself, you gain the features of one of your deity's servitors. Choose an alignment your deity has (chaotic, evil, good, or lawful). You can't cast this spell if you don't have a deity or your deity is true neutral. This spell gains the trait of the alignment you chose.\nIf you were Medium or smaller, you become Large, as the effects of Enlarge. You must have space to expand into, or the spell is lost. You also gain the following benefits.\n• 40 temporary Hit Points.\n• A fly Speed equal to your Speed.\n• Weakness 10 to the alignment opposite the one you chose.\n• A +1 status bonus to saves against spells.\n• Darkvision.\n• Your unarmed attacks and weapons deal 1 additional damage of the chosen alignment type.\n• One or more unarmed melee attacks. If you chose good or lawful, your fist attacks deal 2d8 damage. If you chose chaotic, you gain a bite unarmed attack that deals 2d10 piercing damage. If you chose evil, you gain a claws unarmed attack that deals 2d8 slashing damage and has the agile and finesse traits.\nSpell Effect: Divine Vessel\nHeightened (9th) The temporary Hit Points increase to 60, the weakness increases to 15, and the duration increases to 10 minutes.\nSpell Effect: Divine Vessel (9th level)",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (9th) The temporary Hit Points increase to 60, the weakness increases to 15, and the duration increases to 10 minutes.\nSpell Effect: Divine Vessel (9th level)"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:spell-turning",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "OOELvfkTedBMlWtq",
      "slug": "spell-turning",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:030285cee47d7abad2134fe0fd1cc71f2240b37865fa2d6379316318cbf25c9a",
    "translatableHash": "sha256:4f412e73dd98eb2dcbc0929d915c88223054c68da828d9d184a3ff5f406c265c",
    "data": {
      "schemaVersion": 1,
      "name": "Spell Turning",
      "rank": 7,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane"
      ],
      "description": "This abjuration reflects spells cast at you back at their caster. When a spell targets you, you can spend a reaction to attempt to reflect it. This uses the rules for counteracting the spell, but if the spell is successfully counteracted, the effect is turned back on the caster. Whether or not the counteract attempt is successful, spell turning then ends. Spell turning can't affect spells that aren't targeted (such as area spells). If spell turning reflects a spell back at a caster who is also under the effect of spell turning, their spell turning can attempt to reflect their own spell back at you again; if they do so, their counteract attempt automatically succeeds.",
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
    "contentId": "pf2e:spell:spells-srd:power-word-blind",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Yk3t4ekEiFIoEz9c",
      "slug": "power-word-blind",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/power-word-blind.webp"
    },
    "sourceHash": "sha256:a83be21354546933f3db6ef264eb6c8e6e85247ba3a3a92fdf58d252d27f3188",
    "translatableHash": "sha256:b2d6c0f0fd128844d31467b7ea52756107ff88857cf6e7ec4679066a06e421f2",
    "data": {
      "schemaVersion": 1,
      "name": "Power Word Blind",
      "rank": 7,
      "rarity": "uncommon",
      "traits": [
        "auditory",
        "concentrate",
        "mental"
      ],
      "traditions": [
        "arcane"
      ],
      "description": "You utter an arcane word of power that can make the target Blinded upon hearing it. Once targeted, the target is then temporarily immune for 10 minutes. The effect of the spell depends on the target's level.\n11th or Lower The target is Blinded permanently.\n12th-13th The target is Blinded for 1d4.\n14th or Higher The target is Dazzled for 1 minute.\nHeightened 1 The levels at which each outcome applies increase by 2.",
      "castingTime": "1 action",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "varies",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 The levels at which each outcome applies increase by 2."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:power-word-stun",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "7PJSqUeKxTqOVrPk",
      "slug": "power-word-stun",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/power-word-stun.webp"
    },
    "sourceHash": "sha256:bca6a8a221f7d39b6e36d04678a3026d1ac157bcae4f850063c2fa6c9fb25c38",
    "translatableHash": "sha256:2cde35861806a5837baeaec0585f7caeaad622d76b0dae3f648492aaf2a2c639",
    "data": {
      "schemaVersion": 1,
      "name": "Power Word Stun",
      "rank": 8,
      "rarity": "uncommon",
      "traits": [
        "auditory",
        "concentrate",
        "mental"
      ],
      "traditions": [
        "arcane"
      ],
      "description": "You stun the target with an arcane word of power. Once targeted, the target is then temporarily immune for 10 minutes.\nThe effect of the spell depends on the target's level.\n• 13th or Lower The target is Stunned for 1d6.\n• 14th-15th The target is Stunned for 1 round.\n• 16th or Higher The target is Stunned 1.\nHeightened 1 The levels at which each outcome applies increase by 2.",
      "castingTime": "1 action",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "varies",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 The levels at which each outcome applies increase by 2."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:polar-ray",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "BKIet436snMNcnez",
      "slug": "polar-ray",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:6ebb4349bf4437eb5b228b81573978a4bb71c03f85843d04e30a5f48ee95450c",
    "translatableHash": "sha256:7906c9d947ed5d3d114d681e2598c52b99d332e699fad1e9a6500bde2a26c935",
    "data": {
      "schemaVersion": 1,
      "name": "Polar Ray",
      "rank": 8,
      "rarity": "common",
      "traits": [
        "attack",
        "cold",
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You fire a blue-white ray of freezing air and sleet that deals 10d8 cold damage. Make a spell attack roll against the target.\nCritical Success The target takes double damage and is Drained 2\nSuccess The target takes full damage and is Drained 2\nHeightened 1 The damage increases by 2d8",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [
        {
          "formula": "10d8",
          "type": "cold",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 2d8"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:prismatic-wall",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "iL6TujgTCtRRa0Y0",
      "slug": "prismatic-wall",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/prismatic-wall.webp"
    },
    "sourceHash": "sha256:3d6a94255505227ce23d14b3fbc9294319880aca993f82ad95f8055a42c6afd5",
    "translatableHash": "sha256:3d9415db51328e4f02af2493ec07b2e026e9060b8727511a321f56f110af734b",
    "data": {
      "schemaVersion": 1,
      "name": "Prismatic Wall",
      "rank": 8,
      "rarity": "common",
      "traits": [
        "concentrate",
        "light",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You create an opaque wall of shimmering, multicolored light. The wall is straight and vertical, stretching 60 feet long and 30 feet high. You must form the wall in an unbroken open space so its edges don't pass through any creatures or objects, or the spell is lost. You can pass through the wall and ignore its effects. The wall sheds bright light out to 20 feet on each side (and dim light to the next 20 feet). Creatures other than you that come into the wall's light must attempt a check (will, against:spell) save; they're Dazzled for 1 round on a success, Blinded for 1 round on a failure, and Blinded for 1 minute on a critical failure. They are then temporarily immune to the blinding effect for 1 hour.\nA prismatic wall has seven different layers, each a different color. Red, orange, yellow, and green have the effect of a 5th-rank Chromatic Wall spell of that color, and the others have the effect of a 7th-rank chromatic wall spell of that color. A creature that tries to pass through the wall must attempt a saving throw against each component wall. The effects take place simultaneously, so a creature turned to stone by the blue wall is still treated as a creature for the indigo and violet walls.\nThe wall as a whole is immune to counteracting effects of the wall's level or lower; each color must be counteracted by its specific spell, as described in chromatic wall. This must be done in order (red, orange, yellow, green, blue, indigo, then violet). A given color can't be affected until the previous color is counteracted. Counteracting a color wall removes that color's effect from the wall, and counteracting them all ends prismatic wall. You can Dismiss the spell.",
      "castingTime": "3 actions",
      "range": "120 feet",
      "target": "",
      "area": "60 line",
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:antimagic-field",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "My7FvAoLYgGDDBzy",
      "slug": "antimagic-field",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/antimagic-field.webp"
    },
    "sourceHash": "sha256:79bb6adaff6c105ce8cf60640808f4e54686f8f3ab712297f56b2bd573a882e6",
    "translatableHash": "sha256:b5f7df378da7105e7076f42bf7f146d1f114c06aa7ab1edce559430929cb9a3b",
    "data": {
      "schemaVersion": 1,
      "name": "Antimagic Field",
      "rank": 8,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult"
      ],
      "description": "You repel all magic from the target area, preventing spells and other magic from functioning. Spells can't penetrate the area, magic items cease to function within it, and no one inside can cast spells or use magic abilities, including yourself. Likewise, spells - such as Dispel Magic - can't affect the field itself unless they are of a higher level. Magic effects resume the moment they pass outside the field. For example, a ray fired from one side of the field could target a creature on the other side (as long as caster and target are both outside the field). A summoned creature winks out of existence but reappears if the field moves or ends. Invested magic items cease to function, but they remain invested and resume functioning when they exit the field; the ability boost from an apex item isn't suppressed within the field. Spells of a higher rank than the antimagic field overcome its effects, and can even be cast by a creature within the field.\nThe field disrupts only magic, so a +3 longsword still functions as a longsword. Magically created creatures (such as golems) function normally within an antimagic field.",
      "castingTime": "3 actions",
      "range": "",
      "target": "",
      "area": "10 emanation",
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:divine-aura",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "nsQvjNyg4Whw2mek",
      "slug": "divine-aura",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/divine-aura.webp"
    },
    "sourceHash": "sha256:7f383abc1005fd599ca945b9beaa9669bac2627a09f34a5a5e94932fc68f3af8",
    "translatableHash": "sha256:9a528f51b92a011723efbeaf43c20fec835c6f1542407289a3a364af0c41d58b",
    "data": {
      "schemaVersion": 1,
      "name": "Divine Aura",
      "rank": 8,
      "rarity": "common",
      "traits": [
        "aura",
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "divine"
      ],
      "description": "Divine power wards the targets, granting each a +1 status bonus to AC and saves while in the area.\nChoose an alignment your deity has (chaotic, evil, good, or lawful). You can't cast this spell if you don't have a deity or your deity is true neutral. This spell gains the trait of the alignment you chose. The bonuses granted by the spell increase to +2 against attacks by-and effects created by-creatures with an alignment opposite to the spell (lawful if you chose chaotic, evil if you chose good). These bonuses increase to +4 against effects created by such creatures that attempt to impose the Controlled condition on a target of your divine aura, as well as against attacks made by creatures summoned by anything opposite in alignment to your divine aura.\nWhen a creature of opposite alignment hits a target with a melee attack, the creature must succeed at a Will save or be Blinded for 1 minute. It's then temporarily immune for 1 minute.\nThe first time you Sustain the Spell each round, the divine aura's radius grows 10 feet.",
      "castingTime": "2 actions",
      "range": "",
      "target": "allies in the area",
      "area": "10 emanation",
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:disjunction",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ihbRf964JDXztcy3",
      "slug": "disjunction",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:2a4c2d5aa13f59716eee419f8be4e5e0d41cfcae5778a4caa174d32e65d51a36",
    "translatableHash": "sha256:bf63595c5cb71653e524442c0f8d632533b4bb30a6bd8500de532c24a725a564",
    "data": {
      "schemaVersion": 1,
      "name": "Disjunction",
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
      "description": "Crackling energy disjoins the target. You attempt to counteract it. If you succeed, it's deactivated for 1 week. On a critical success, it's destroyed. If it's an artifact or similar item, you automatically fail.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "1 magic item",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:power-word-kill",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "m3lcOFm400lQCUps",
      "slug": "power-word-kill",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:172a91b38cbb2b20d14bbcf9ed3e27d40c9e0fed0d0ec94fe1fa8e80e5de1c14",
    "translatableHash": "sha256:e5fd20a6e7dd6deaf1fa4ba4a19c6e7bd4d4db073ac9b751fe795e92b2218af8",
    "data": {
      "schemaVersion": 1,
      "name": "Power Word Kill",
      "rank": 9,
      "rarity": "uncommon",
      "traits": [
        "auditory",
        "concentrate",
        "death",
        "mental"
      ],
      "traditions": [
        "arcane"
      ],
      "description": "You utter the most powerful arcane word of power. Once targeted, the target is then temporarily immune for 10 minutes. The effect of the spell depends on the target's level.\n• 14th or Lower The target dies instantly.\n• 15th If the target has 50 Hit Points or fewer, it dies instantly; otherwise, it drops to 0 Hit Points and becomes Dying 1, or increases its Dying condition by 1 if it's already Dying.\n• 16th or Higher The target takes 50 damage; if this brings the target to 0 Hit Points, the target dies instantly.\nHeightened (10th) The levels at which each outcome applies increase by 2.",
      "castingTime": "1 action",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "varies",
      "defense": null,
      "damage": [
        {
          "formula": "50",
          "type": "untyped",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (10th) The levels at which each outcome applies increase by 2."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:prismatic-sphere",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "PngDCmU0MXZkbu0v",
      "slug": "prismatic-sphere",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/prismatic-sphere.webp"
    },
    "sourceHash": "sha256:4567c5885cae94f7686ea95be9daa4daf6326878af101c2204fe2401324a54b3",
    "translatableHash": "sha256:c7f6b3eac995b31cb7d8514ebffb3a93ea409795bbb563932f8bc6956b54c35a",
    "data": {
      "schemaVersion": 1,
      "name": "Prismatic Sphere",
      "rank": 9,
      "rarity": "common",
      "traits": [
        "concentrate",
        "light",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You create a seven-layered sphere to protect an area. This multicolored sphere functions like a Prismatic Wall but is shaped in a 10-foot burst centered on a corner of your space. You must form the sphere in an unbroken open space so its edges don't pass through any creatures or objects, or the spell is lost.",
      "castingTime": "2 actions",
      "range": "10 feet",
      "target": "",
      "area": null,
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:weird",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "qDjeG6dxT4aEEC6J",
      "slug": "weird",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/weird.webp"
    },
    "sourceHash": "sha256:8c0802afd16db7cba4bc56a416bb5f1a6ccc0acd0febcb266141012ec799e19b",
    "translatableHash": "sha256:8e2cad937ac636afee2f5c0a1d07482d1cfc2b0c369233c04c575e032ccfc96f",
    "data": {
      "schemaVersion": 1,
      "name": "Weird",
      "rank": 9,
      "rarity": "common",
      "traits": [
        "concentrate",
        "death",
        "emotion",
        "fear",
        "illusion",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You fill the targets' minds with terrifying images of fearsome creatures, each drawn from the targets' worst fears. Only the targets can see their assailants. Each target takes 16d6 mental damage and must attempt a Will save.\nCritical Success The target is unaffected.\nSuccess The target takes half damage and is Frightened 1.\nFailure The target takes full damage and is Frightened 2.\nCritical Failure The target is so afraid, it might instantly die. It must attempt a Fortitude saving throw. If the target succeeds, it takes double damage and is Frightened 2, and it's also Fleeing until the end of its next turn unless it critically succeeded. If it fails, it is reduced to 0 Hit Points and dies.",
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
    "contentId": "pf2e:spell:spells-srd:storm-of-vengeance",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "r4HLQcYwB62bTayl",
      "slug": "storm-of-vengeance",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:87f566156745bc09b34283da41a60f2cdbf895c2fa5947efd509926cd5f2cdce",
    "translatableHash": "sha256:2c2140fe70a7ea3913bc1efc6223e4a0a90521c9137a87934552893e25d97594",
    "data": {
      "schemaVersion": 1,
      "name": "Storm of Vengeance",
      "rank": 9,
      "rarity": "common",
      "traits": [
        "air",
        "concentrate",
        "electricity",
        "manipulate"
      ],
      "traditions": [
        "primal"
      ],
      "description": "A massive storm cloud forms in the air in a 360-foot burst. Beneath it, rain begins to fall, and gales impose a -4 circumstance penalty to physical ranged attacks and weapon ranged attacks, and the air in the area becomes greater difficult terrain for flying creatures. When you Cast this Spell and the first time each round you Sustain the Spell, you can choose one of the following storm effects. You can't choose the same effect twice in a row.\n• Acid Rain Each creature in the storm takes 4d8 acid damage with no saving throw.\n• Hail The storm deals 4d10 bludgeoning damage to creatures beneath it (basic Fortitude save).\n• Lightning Up to 10 bolts of lightning strike down, targeting creatures of your choice in the storm. No more than one bolt can target any one creature. Each bolt deals 7d6 electricity damage (basic Reflex save).\n• Rain and Wind Heavy rain and whipping wind reduce visibility and mobility, making the area under the storm cloud difficult terrain and making everything seen within or through the area Concealed.\n• Thunderclap Each creature in the storm must succeed at a Fortitude save or be Deafened for 10 minutes. A creature that succeeds is temporarily immune to thunderclaps from storm of vengeance for 1 hour.\nHeightened (10th) The range increases to 2,200 feet, and the cloud is a 1,000-foot burst.",
      "castingTime": "3 actions",
      "range": "800 feet",
      "target": "",
      "area": "360 burst",
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (10th) The range increases to 2,200 feet, and the cloud is a 1,000-foot burst."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:crusade",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "xFY9RtDE4DQKlWNR",
      "slug": "crusade",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:51cb51bceb125b080faae756a54db82a17eeed29c2d31ee40a3c15f86b2dec33",
    "translatableHash": "sha256:62e2f56e9f457b52d17616e29a718d3ceac35411aa1926d02adf47efac31bfb7",
    "data": {
      "schemaVersion": 1,
      "name": "Crusade",
      "rank": 9,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "linguistic",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "divine"
      ],
      "description": "You issue a divine mandate or proclaim a cause to the targets. It can be to attain an item, claim a patch of land, slay a creature, war with a group, or be entirely peaceful. Your cause can't force the targets to harm one another or themselves. The targets become completely dedicated to that cause, depending on their levels. They choose their own actions, but they favor direct action over inaction or indirect action.\n• 13th or Lower The target is so dedicated to the cause that it pursues the cause to the death (unless you say otherwise).\n• 14th The target is dedicated to the cause, but the spell ends for the target if it's reduced to half its maximum Hit Points or fewer.\n• 15th As 14th, plus the target can attempt a Will save at the end of each of its turns to end the spell for itself.\nThe spell ends for all creatures if you or one of your allies uses a hostile action against a target, or when the cause is completed. The GM might determine this spell has alignment traits befitting the cause.\nHeightened (10th) The level for each category increases by 2.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "up to 4 creatures",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (10th) The level for each category increases by 2."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:alter-reality",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "h8zxY9hTeHtWsBVW",
      "slug": "alter-reality",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/alter-reality.webp"
    },
    "sourceHash": "sha256:fcd59d1d46f9d454096cc06923cac85d65b7c8bcc34f1eafdd2784a0b8eb617e",
    "translatableHash": "sha256:01ea72f58a4910886899fa54db7c109d09ef905a5c2e23a00139da20ed673153",
    "data": {
      "schemaVersion": 1,
      "name": "Alter Reality",
      "rank": 10,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "occult"
      ],
      "description": "You use your occult lore and the power of your mind to manipulate the spiritual multiverse, resulting in any of the following effects:\n• Duplicate any occult spell of 9th rank or lower to which you have access.\n• Duplicate any spell from another spell list of 7th rank or lower. It must be common or you must have access.\n• Produce any effect whose power is in line with the above.\n• Reverse certain effects that refer to the Wish spell.\nAt the GM's discretion, you can try to produce greater effects, but this is dangerous and the spell may have only a partial effect.",
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
    "contentId": "pf2e:spell:spells-srd:primal-phenomenon",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "MLNeD5sAunV0E23j",
      "slug": "primal-phenomenon",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:54e6c083feb832d8989ced567899bc53eb9e953bc4c018d147476b4ff275aedb",
    "translatableHash": "sha256:f16395f92597bd4750f170e0399bae0bf3c73eb0203b0e2966f5d196926d4d57",
    "data": {
      "schemaVersion": 1,
      "name": "Primal Phenomenon",
      "rank": 10,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "primal"
      ],
      "description": "You request a direct intercession from the natural world. Nature always refuses unnatural requests and might grant a different request (potentially more powerful or better fitting its character) than the one you asked for. A primal phenomenon spell can do any of the following things.\n• Duplicate any spell from the primal spell list of 9th rank or lower to which you have access.\n• Duplicate any spell from another spell list of 7th rank or lower. It must be common or you must have access.\n• Produce any effect whose power level is in line with the above effects.\n• Reverse certain effects that refer to the Wish spell.\nAt the GM's discretion, you can try to use primal phenomenon to produce greater effects than these, but doing so may be dangerous, or the spell may have only a partial effect.",
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
    "contentId": "pf2e:spell:spells-srd:miracle",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "YfJTXyVGzLhM6V8U",
      "slug": "miracle",
      "publicationTitle": "Pathfinder Core Rulebook",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:9497cc5ea952bc8d36c22a08534c225f77bea7b67216dec3debf25388fa980cb",
    "translatableHash": "sha256:586a229631be2a1c256bee43a2544fe733c9b7fcefdd44fb269bc2b5c9b269ec",
    "data": {
      "schemaVersion": 1,
      "name": "Miracle",
      "rank": 10,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "divine"
      ],
      "description": "You request aid directly from your divine source. Your divine source always refuses a request out of line with its nature, and it might grant a different request (potentially more powerful or better fitting its nature) than the one you asked for. A casting of miracle can do any of the following things.\n• Duplicate any spell from the divine list of 9th rank or lower to which you have access.\n• Duplicate any spell from another spell list of 7th rank or lower. It must be common or you must have access.\n• Produce any effect whose power level is in line with the above effects.\n• Reverse certain effects that refer to the Wish spell.\nThe GM might allow you to try using miracle to produce greater effects than these, but doing so may be dangerous, or the spell may have only a partial effect.",
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
    "contentId": "pf2e:spell:spells-srd:magic-stone",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "9u6X9ykhzG11NK1n",
      "slug": "magic-stone",
      "publicationTitle": "Pathfinder Advanced Player's Guide",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/magic-stone.webp"
    },
    "sourceHash": "sha256:b5bdca3257d7c8c166ea7791f74a7c606608b6a91eefd47f41492ea6d55a18a1",
    "translatableHash": "sha256:5c7ab7ed4df2668ac5fbb032cce9f994831ebb35245b0d25019117b35752bc20",
    "data": {
      "schemaVersion": 1,
      "name": "Magic Stone",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "vitality"
      ],
      "traditions": [
        "divine",
        "primal"
      ],
      "description": "You pour vitality energy into ordinary stones, granting them temporary magical properties. You can target 1 non-magical stone or sling bullet for every action you use Casting this Spell. The stones must be unattended or carried by you or a willing ally. The stones become +1 striking disrupting Sling Bullets. Each stone can be used only once, after which it crumbles to dust.\nSpell Effect: Magic Stone",
      "castingTime": "1 to 3 actions",
      "range": "touch",
      "target": "1 to 3 non-magical stones or sling bullets",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:animate-rope",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "rVANhQgB8Uqi9PTl",
      "slug": "animate-rope",
      "publicationTitle": "Pathfinder Advanced Player's Guide",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:e75240c19d2c7324be8a56737ea2683030a089013da4c36f50ec231283abcf18",
    "translatableHash": "sha256:9a9a466738633bde2efe72885722ad921b572d9d84c87bd1a269fca2aca9ccf6",
    "data": {
      "schemaVersion": 1,
      "name": "Animate Rope",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You cause a length or section of Rope or a rope-like object to animate and follow simple commands. You can give it two commands when you Cast the Spell, and one command each time you Sustain the Spell.\n• Bind (attack) The Rope attempts to partially bind a creature. Attempt a spell attack roll against the target's Reflex DC. If you succeed, the target takes a –10-foot circumstance penalty to its Speed (-20-foot on a critical success). This ends if the target Escapes against your spell DC or breaks the Rope. (A standard adventuring Rope has Hardness 2, HP 8, and a Broken Threshold of 4.) Spell Effect: Animate Rope\n• Coil The Rope forms a tidy, coiled stack.\n• Crawl The Rope inches along the ground like a snake, moving one of its ends 10 feet. The Rope must move along a surface, but that surface doesn't need to be horizontal.\n• Knot The Rope ties a sturdy knot in itself.\n• Loop The Rope forms a simple loop at one or both ends, or straightens itself back out.\n• Tie The Rope ties itself around a willing creature or an object that's unattended or attended by a willing creature.\n• Undo The Rope undoes one of its knots, ties, or bindings.\nHeightened 2 The range increases by 50 feet, and you can animate 50 more feet of Rope.",
      "castingTime": "2 actions",
      "range": "100 feet",
      "target": "up to 50 feet of rope or a nonliving rope-like object",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 2 The range increases by 50 feet, and you can animate 50 more feet of Rope."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:quench",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "02J0rDTk37KN2sjt",
      "slug": "quench",
      "publicationTitle": "Pathfinder Advanced Player's Guide",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/quench.webp"
    },
    "sourceHash": "sha256:e8e13bad4280f56ac39487d946069041e92f6d35430dabcd2ec5f420b670cd56",
    "translatableHash": "sha256:164759c0eeb93207b530fb3658e0ae908f86460bda8416572361fff81bbf4a4c",
    "data": {
      "schemaVersion": 1,
      "name": "Quench",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "water"
      ],
      "traditions": [
        "primal"
      ],
      "description": "You cause the air in the area to become supersaturated with water vapor. Non-magical fires within the area are automatically extinguished. Fire creatures within the area take 4d8 damage (basic Fortitude save). Choose one magical fire, fire spell, or fire item in the area and attempt to counteract it. If you succeed against an item, the item loses its fire properties for 10 minutes (for instance, a +1 Flaming Longsword would become a +1 Longsword). If the target is an artifact or similarly powerful item, you automatically fail to counteract it.\nThe first time each round you Sustain this spell, you can move the area of vapor anywhere within range, but the only effect when you do so is to automatically extinguish non-magical fires.\nIf you have the Counterspell reaction, you can use quench to counter any spell with the fire trait instead of needing to have the triggering fire spell prepared or in your repertoire.\nHeightened 1 Increase the damage to fire creatures by 2d8.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "",
      "area": "20 burst",
      "duration": "sustained",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "4d8",
          "type": "untyped",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 Increase the damage to fire creatures by 2d8."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:heat-metal",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "v4KzRPol5XQOOmk0",
      "slug": "heat-metal",
      "publicationTitle": "Pathfinder Advanced Player's Guide",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:8cf35e971e0f7e006f9123c121e46915ee9a6dd708f8b00118c4e7bdbb8dbf79",
    "translatableHash": "sha256:908d714e8f8cb8893eb4645c9f101228dc5a5e1a270fc6266fcd7843e2caeb8d",
    "data": {
      "schemaVersion": 1,
      "name": "Heat Metal",
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
      "description": "This spell heats the targeted metal to become red-hot for a moment. This is usually harmless to an unattended metal item, which doesn't get a saving throw, though the GM might rule that flammable materials connected to the object catch fire or melt. If you target an item worn or carried by a creature, or you target a creature made primarily of metal, the heat deals 4d6 fire damage and 2d4 persistent fire damage to the creature, which must attempt a Reflex saving throw.\nIf you target an item held by the creature, the creature can Release the item to improve their degree of success by one step from the result of their saving throw. The persistent damage is associated with the object and damages whichever creature is holding or wearing it. It has no effect if no one is holding the item, but you continue to attempt flat checks to end the persistent damage as normal, since the item remains hot and can sear someone who picks it up.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage and the object deals no persistent fire damage.\nFailure The creature takes full damage and the object deals full persistent damage.\nCritical Failure As failure, but the creature takes double damage and the object deals double persistent damage.\nHeightened 1 The initial damage increases by 2d6 and the persistent damage increases by 1d4.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 metal item or metal creature",
      "area": null,
      "duration": "",
      "defense": "reflex save",
      "damage": [
        {
          "formula": "4d6",
          "type": "fire",
          "kind": "damage"
        },
        {
          "formula": "2d4",
          "type": "fire",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The initial damage increases by 2d6 and the persistent damage increases by 1d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:sculpt-sound",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "HHGUBGle4OjoxvNR",
      "slug": "sculpt-sound",
      "publicationTitle": "Pathfinder Advanced Player's Guide",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/sculpt-sound.webp"
    },
    "sourceHash": "sha256:3727f7e48a2fb6869a8e673fcf2da4232b1d776e3514631a5a2c7104b0da0e7e",
    "translatableHash": "sha256:67da38ad472dd791a4a57a1486e41b7f6f0c5dcc223a6fc0febcc3c290325870",
    "data": {
      "schemaVersion": 1,
      "name": "Sculpt Sound",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "illusion",
        "manipulate"
      ],
      "traditions": [
        "occult"
      ],
      "description": "You change the sounds made by a creature or object. Choose how you're altering the sounds when you Cast the Spell; you can't alter it later. You can cause something that didn't create a sound to make sound, alter the voice of a creature, amplify or deaden a sound, or transform one sound into another. A creature who succeeds at a Perception check against your spell DC can determine that the sound was altered by an illusion, including hearing faint sounds if you deadened the sound, but they can't determine the true sound unless they critically succeed at the Perception check. You can Dismiss the spell.\nBecause this spell obscures sound instead of preventing it, using the spell to quiet a creature doesn't prevent that creature from using verbal spell components, though it does prevent most auditory effects that rely on another creature hearing them accurately. An unwilling target can attempt a Will save.\nSuccess The affected sound from the creature isn't altered.\nFailure The affected sound from the creature is altered in the way you determine.\nCritical Failure The affected sound from the creature is altered and the target becomes Stupefied 2 for 1 minute as it struggles with the disorienting effects of its altered sound.\nHeightened (5th) You can target up to 6 creatures or 6 objects, altering the sounds of all affected creatures or objects in the same way.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 creature or object",
      "area": null,
      "duration": "10 minutes",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened (5th) You can target up to 6 creatures or 6 objects, altering the sounds of all affected creatures or objects in the same way."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:agonizing-despair",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "nplNt08TvokZUxtR",
      "slug": "agonizing-despair",
      "publicationTitle": "Pathfinder Advanced Player's Guide",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:383a8e49581f66747684fc200607cd79cd4e140ff2451b48bd3adca0542486e4",
    "translatableHash": "sha256:166fec86e0692836eddd75815a8f7c848feeecdb5daf538007a7c918a18e08c8",
    "data": {
      "schemaVersion": 1,
      "name": "Agonizing Despair",
      "rank": 3,
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
        "occult"
      ],
      "description": "Your target's mind tumbles down a deep well of dread, dwelling so intently on deep-seated fears that it's painful. The target takes 4d6 mental damage with a Will saving throw.\nCritical Success The target is unaffected.\nSuccess The target takes half damage and becomes Frightened 1.\nFailure The target takes full damage and becomes Frightened 2.\nCritical Failure The target takes double damage and becomes Frightened 3.\nHeightened 1 Increase the damage by 2d6.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": "will save",
      "damage": [
        {
          "formula": "4d6",
          "type": "mental",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 Increase the damage by 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:rusting-grasp",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "0fYE64odlKqISzft",
      "slug": "rusting-grasp",
      "publicationTitle": "Pathfinder Advanced Player's Guide",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/rusting-grasp.webp"
    },
    "sourceHash": "sha256:a85e82bc23b6eb01dc5f1f79c5b92652db6c5c73e8bd238b94a71c941010946a",
    "translatableHash": "sha256:857c381c090884ddaabaae37d3c9360d5bb5e4b0fec2fdf99e5cb46b6cb7ee9d",
    "data": {
      "schemaVersion": 1,
      "name": "Rusting Grasp",
      "rank": 4,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "primal"
      ],
      "description": "You cause the target to rapidly rust. This magical rust can affect nonferrous materials, but the target must be all or mostly metal. Skymetals such as adamantine and orichalcum are immune to this rust, and the GM might determine other precious materials are similarly resilient. Ultimately, the GM decides if an object or creature can be targeted with this spell.\nAll damage from this spell ignores Hardness. If the spell causes persistent damage from rust, a creature can attempt to scrape off the rust to assist the target in recovering from the persistent damage (reducing the DC of the flat check to end persistent damage to 10 and granting an immediate flat check). The effect of the spell depends on its target.\n• Creature or Hazard A creature or hazard must be made of all or mostly metal to be affected (this includes many mechanical traps). The grasp deals 8d6 damage (basic Fortitude save), plus 2d6 on a failed save. Touching a hazard to affect it with this spell might trigger the hazard, as determined by the GM.\n•\nItem The rust deals , subject to a basic Reflex save by the creature wearing or holding the item; if the item is unattended, it automatically gets a critical failure. On a failed save, the item also takes 1d6. For an attended item, this persistent damage occurs at the end of the attending creature's turns; if the item was unattended when you Cast the Spell, the damage happens at the end of your turns.\nWhen targeting armor someone is wearing, its Bulk is 1 higher than the listed value, since carrying armor is more cumbersome than wearing it. Thin iron or steel items, such as weapons, have 20 HP and a Broken Threshold of 10, and thicker iron or steel items, such as most suits of armor, have 36 HP and a Broken Threshold of 18.\nHeightened 1 Increase the initial damage to creatures or hazards by 2d6, and increase the maximum Bulk of an item you can target by 1.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 metal creature, 1 non-magical metal hazard, or 1 non-magical metal item of up to 1 Bulk",
      "area": null,
      "duration": "",
      "defense": "basic fortitude save",
      "damage": [],
      "heightening": "Heightened 1 Increase the initial damage to creatures or hazards by 2d6, and increase the maximum Bulk of an item you can target by 1."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:spike-stones",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "3xD8DYrr8YDVYGg7",
      "slug": "spike-stones",
      "publicationTitle": "Pathfinder Advanced Player's Guide",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/spike-stones.webp"
    },
    "sourceHash": "sha256:548cb8b6ebac6649275e9ed957cb6df7f9e87cb9069723e6eadbaf07622d820b",
    "translatableHash": "sha256:367050683ef3b9b71e0cd3e294d57f942bd29c5217969cd23112b1682d1665bb",
    "data": {
      "schemaVersion": 1,
      "name": "Spike Stones",
      "rank": 4,
      "rarity": "common",
      "traits": [
        "concentrate",
        "earth",
        "manipulate"
      ],
      "traditions": [
        "primal"
      ],
      "description": "Long, sharp spikes of solid rock thrust up from the ground in the area. The area becomes difficult terrain and hazardous terrain. A creature that moves on the ground through the area takes 3 piercing damage for every square of that area it moves into.\nHeightened 1 Increase the damage by 1.",
      "castingTime": "3 actions",
      "range": "60 feet",
      "target": "",
      "area": "20 burst",
      "duration": "1 hour",
      "defense": null,
      "damage": [
        {
          "formula": "3",
          "type": "piercing",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 Increase the damage by 1."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:enervation",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "eexkxcqnkXazsGfK",
      "slug": "enervation",
      "publicationTitle": "Pathfinder Advanced Player's Guide",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/enervation.webp"
    },
    "sourceHash": "sha256:574320bf226dabfdf9c1847829f8c01ed22e5ef6b0aa9590fcd3544e3cc3d751",
    "translatableHash": "sha256:f260e7e7722d7c033ce09cb851ddf8f186f313237bf6572853da2ab85ba1d35a",
    "data": {
      "schemaVersion": 1,
      "name": "Enervation",
      "rank": 4,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "void"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult"
      ],
      "description": "Extending a finger, you fire a beam of void energy that weakens the life force of any creature it touches. Each living creature in the line must attempt a Fortitude save.\nCritical Success The creature is unaffected.\nSuccess The creature takes 2d8 persistent void damage.\nFailure The creature takes 4d8 persistent void damage and becomes Drained 1.\nCritical Failure The creature takes 4d8 persistent void damage and becomes Drained 2 and Doomed 1.\nHeightened 2 The persistent void damage increases by 1d8 on a success, or by 2d8 on a failure or critical failure.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "30 line",
      "duration": "",
      "defense": "fortitude save",
      "damage": [],
      "heightening": "Heightened 2 The persistent void damage increases by 1d8 on a success, or by 2d8 on a failure or critical failure."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:secret-chest",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "BoA00y45uDlmou07",
      "slug": "secret-chest",
      "publicationTitle": "Pathfinder Advanced Player's Guide",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/secret-chest.webp"
    },
    "sourceHash": "sha256:e751b1c2847ddc86aa45bf4e4d25f4748fc44483bd902083c73ae6a41f0e2eb7",
    "translatableHash": "sha256:c1725d440579d9499599a9a47e454365243c4e02bf2ebee0dddbe07bb0bd9655",
    "data": {
      "schemaVersion": 1,
      "name": "Secret Chest",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You banish a container and its contents to the Ethereal Plane, where you can retrieve it from later. The container's physical properties-the material from which it is made, any locks, or other features-are irrelevant to the casting of this spell, but the container can't contain any creatures. When you Cast this Spell, the container and all its contents are transported to a random location deep in the Ethereal Plane. Time passes normally for the container and its contents, and the environmental effects of the Ethereal Plane apply to it. Though very unlikely, it's possible for a creature on the Ethereal Plane to stumble upon the chest.\nYou can Dismiss the spell to return the chest to your current location. If the spell ends by any other means, the container is lost on the Ethereal Plane and you can no longer recall it with this spell, though you could search for it in other ways.",
      "castingTime": "1 minute",
      "range": "touch",
      "target": "1 container and its contents, totaling 10 Bulk or less",
      "area": null,
      "duration": "until the next time you make your daily preparations",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:transmute-rock-and-mud",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "LzfrBDxxPTiuN7uL",
      "slug": "transmute-rock-and-mud",
      "publicationTitle": "Pathfinder Advanced Player's Guide",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:c7935a03d43b4ac29751e9b3605282b712ee5374e09771a0c35b90a4925af943",
    "translatableHash": "sha256:6fd021f8b08cfe84c2d06466f66d4b09c0d7b35b30045b206a2cec9064c323ab",
    "data": {
      "schemaVersion": 1,
      "name": "Transmute Rock And Mud",
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
      "description": "Area 2 adjacent 10-foot cubes\nYou warp the structure of earthen material, turning rock into mud or mud into rock. Choose one of these two options when you Cast the Spell.\n• Rock to Mud You transform non-magical, unworked, and unattended stone in the area into an equal volume of mud. If you Cast this Spell on a stone floor, it becomes difficult terrain; if the resulting mud is at least 3 feet deep, it is greater difficult terrain, or the creature can try to Swim through it (check (athletics, dc:10, traits:action:swim)). If the mud is deep enough that a creature can't reach the bottom, the creature must Swim to move through it. If you Cast this Spell on a ceiling, the falling mud deals 8d6 bludgeoning damage (check (reflex, basic) save) and spreads out, creating difficult terrain in an area 10 feet larger in radius than the original spell's area. Once the rock is transformed into mud, the mud is non-magical and remains until natural conditions cause it to dry out or otherwise disperse.\n• Mud to Rock Mud in the area turns into unworked stone. If creatures are in the mud when it is transformed to stone, they must attempt a check (reflex) saving throw.\n• Critical Success The creature escapes the mud and is atop the stone, unaffected.\n• Success The creature climbs out of the mud as it turns to rock and is Prone atop the stone.\n• Failure The creature is partially stuck in the mud and is Grabbed for 1 round or until it Escapes, whichever comes first.\n• Critical Failure The creature is entirely stuck. It is Restrained for 1 round or until it Escapes, whichever comes first.\nHeightened 2 Add an additional 10-foot cube to the area, adjacent to at least one of the other cubes.",
      "castingTime": "3 actions",
      "range": "60 feet",
      "target": "",
      "area": "10 cube",
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 2 Add an additional 10-foot cube to the area, adjacent to at least one of the other cubes."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:invoke-true-name",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "09C2wvWZLCxwjINk",
      "slug": "invoke-true-name",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:7e69d37559aa05d2c885918a838c48725aadd51c31561703b8d0301f5d80c9ef",
    "translatableHash": "sha256:d7dc38b6e9f49534cf735e0ef6aa94905cba26dcf54d6c1f4a906d16830aa6e9",
    "data": {
      "schemaVersion": 1,
      "name": "Invoke True Name",
      "rank": 1,
      "rarity": "rare",
      "traits": [
        "cantrip",
        "concentrate",
        "true-name"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult",
        "primal"
      ],
      "description": "You speak the true name of a creature to more surely affect it with your magic. Until the end of the current turn, the target is Off-Guard against your spells and takes a -2 circumstance penalty to saving throws against your spells. In addition, the first time this turn the target takes damage from one of your spells, it has weakness to that damage equal to double the rank of invoke true name.",
      "castingTime": "1 action",
      "range": "30 feet",
      "target": "1 creature whose true name you know",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:horizon-thunder-sphere",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "8Uzc9WKqRr755S5d",
      "slug": "horizon-thunder-sphere",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:9a71ab6265b1c705127c1e93e58dbc78e8e4a8bc2503aae5c07542f257e93a67",
    "translatableHash": "sha256:e9bd5503cf05888bcdd3ce3268eefda16c7c43998297c7f970bdb1d04d3e1e30",
    "data": {
      "schemaVersion": 1,
      "name": "Horizon Thunder Sphere",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "attack",
        "concentrate",
        "electricity",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You gather magical energy into your palm, forming a concentrated ball of electricity that crackles and rumbles like impossibly distant thunder. Make a ranged spell attack roll against your target's AC. On a success, you deal 3d6 electricity damage. On a critical success, the target takes double damage and is Dazzled for 1 round. The number of actions you spend when Casting this Spell determines the range and other parameters.\n2 This spell has a range of 30 feet.\n3 This spell has a range of 60 feet and deals half damage on a failure (but not a critical failure) as the electricity lashes out and jolts the target.\nTwo Rounds If you spend 3 actions Casting the Spell, you can avoid finishing the spell and spend another 3 actions on your next turn to empower the spell even further. If you do, after attacking the target, whether you hit or miss, the ball of lightning explodes, dealing 2d6 electricity damage to all other creatures in a 10-foot emanation around the target (basic Reflex save). Additionally, you spark with electricity for 1 minute, dealing 1 electricity damage to creatures that Grab you or that hit you with an unarmed Strike or a non-reach melee weapon.\nHeightened 1 The initial damage on a hit, as well as the burst damage for two-round casting time, each increase by 2d6, and the damage creatures take if they Grapple or hit you while you're in your sparking state increases by 1.",
      "castingTime": "2 to 2 rounds",
      "range": "varies",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [
        {
          "formula": "3d6",
          "type": "electricity",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The initial damage on a hit, as well as the burst damage for two-round casting time, each increase by 2d6, and the damage creatures take if they Grapple or hit you while you're in your sparking state increases by 1."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:animal-allies",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Aap7nGpC7neTWm78",
      "slug": "animal-allies",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:e04fa7bc60d6aea8b8c3dfce0d65dd92fc4d470aa598b9d55871cf6579aa0dcd",
    "translatableHash": "sha256:81c5062c1264c088fdd40ef461750328c2c8690783deecca4c01b1572a60398c",
    "data": {
      "schemaVersion": 1,
      "name": "Animal Allies",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "primal"
      ],
      "description": "You summon tiny, ordinary animals from the environment, such as insects, birds, or fish, to quickly lash out at nearby foes. The animals swarm around the creatures in the area, dealing each of them 3d4 piercing damage with a basic Reflex save.\nHeightened 1 The damage increases by 3d4",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "5 emanation",
      "duration": "",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "3d4",
          "type": "piercing",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 3d4"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:protect-companion",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "AfOpnnwdZwHi2Tnc",
      "slug": "protect-companion",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:9fcfa147775eab9b083f0414b3d2af5f6883e91a7aae62f4ff32cd245e063286",
    "translatableHash": "sha256:632457eb36ec264f81be731931424cad728371e2c8bb8bfabab17f8748318333",
    "data": {
      "schemaVersion": 1,
      "name": "Protect Companion",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "cantrip",
        "concentrate"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult",
        "primal"
      ],
      "description": "You extend your aura, as a magical shield that protects your eidolon or minion. The target gains a +1 circumstance bonus to AC until the start of your next turn. You gain the Life Block reaction; after using the reaction, the spell ends and you can't cast protect companion again for 10 minutes.\nSpell Effect: Protect Companion\nHeightened 2 The reaction reduces the damage by another 10, and you lose 5 more Hit Points. If you want to lose fewer Hit Points, you can choose to lower the damage reduction and HP lost to what any lower-rank version of the spell could do without lowering the spell's actual rank.",
      "castingTime": "1 action",
      "range": "30 feet",
      "target": "your eidolon, or a creature with the minion trait under your control",
      "area": null,
      "duration": "until the start of your next turn",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 2 The reaction reduces the damage by another 10, and you lose 5 more Hit Points. If you want to lose fewer Hit Points, you can choose to lower the damage reduction and HP lost to what any lower-rank version of the spell could do without lowering the spell's actual rank."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:restyle",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "buhP7vfetUxQJlIJ",
      "slug": "restyle",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/restyle.webp"
    },
    "sourceHash": "sha256:3e0b8af15398dd196edaade5abde9bf5dc932a05d686b8c173aa64cd540da27c",
    "translatableHash": "sha256:682f3ae955c833ab5449cc43321007d77a9f428eaf2e2dff65d8a44ca67e655e",
    "data": {
      "schemaVersion": 1,
      "name": "Restyle",
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
      "description": "You permanently change the appearance of one piece of clothing currently worn by you or an ally to better fit your aesthetic sensibilities. You can change its color, texture, pattern, and other minor parts of its design, but the changes can't alter the clothing's overall shape, size, or purpose. The changes can't increase the quality of the craftsmanship or artistry of the piece of clothing, but particularly gauche choices for the new color and pattern might decrease its aesthetic appeal. This spell transforms existing materials into the desired appearance and never alters the material or creates more material than what's originally part of the object. The object's statistics also remain unchanged.",
      "castingTime": "1 minute",
      "range": "touch",
      "target": "1 piece of clothing currently worn by you or an ally",
      "area": null,
      "duration": "unlimited",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:synchronize",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "DgcSiOCR1uDXGaEA",
      "slug": "synchronize",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:6e254fd0dd4b2c4ef1075afc60a4ce6d84296d85a75cc0a5c0fb8756d8d27a98",
    "translatableHash": "sha256:c7699c48c1f65036386b0aa71484427ff5910a74c79486ac9334ed35d77232ad",
    "data": {
      "schemaVersion": 1,
      "name": "Synchronize",
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
      "description": "You harmlessly place your unique magic sigil, which is about 1 square inch in size, on your targets. When you Cast the Spell, you set the duration by choosing a time at which point the sigil flashes dimly three times. After that point, the spell ends. Even though spell durations aren't normally exact, the effects of synchronize are precise to the second. The timer is based on the place where the spell was cast, so entering a plane or area where time flows differently changes how the time elapses.\nHeightened (2nd) The spell can target up to 20 willing creatures.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "up to 5 willing creatures",
      "area": null,
      "duration": "up to 24 hours",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (2nd) The spell can target up to 20 willing creatures."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:approximate",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "EqdSKqr8Qj5TUhMR",
      "slug": "approximate",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:bf6dc712c9aef33e6d9d452ca0093ab3397fb6570bf23ad2b8d593b2eae61e5e",
    "translatableHash": "sha256:03068e9bd16f6836a876aaa7fab1bb029ec04c144403c81d83e744be59ffef9f",
    "data": {
      "schemaVersion": 1,
      "name": "Approximate",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "cantrip",
        "concentrate",
        "detection",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult",
        "primal"
      ],
      "description": "Area 1 cubic foot\nYour magic quickly flows over an area to help you count and catalog. Name a particular type of object you are looking for within the area. You gain an instant estimate of the quantity of the chosen objects that are clearly visible within the target area. The number is rounded to the largest digit. For example, you could look at a pile of 180 copper coins, and you would learn that it held about 200 coins, but you couldn't determine there were exactly 180 coins.\nThe type of object you name can be as specific or general as you like-\"dented copper coins\" is as viable as \"coins\"-but the distinguishing features must be obvious at a glance, and the spell is automatically fooled by objects disguised as other objects. For instance, the spell would register copper coins plated in gold as gold coins, not copper coins",
      "castingTime": "2 actions",
      "range": "10 feet",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:gravitational-pull",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "F1fQC9SarAkjNxpP",
      "slug": "gravitational-pull",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/gravitational-pull.webp"
    },
    "sourceHash": "sha256:db34379177f42a08b549985f1788e3f23c020ac8823488c9ea69524285c08302",
    "translatableHash": "sha256:78adc31d5faeb9cd95646204c3215c0e5fc4f7e90c916707a6fe630257a9c728",
    "data": {
      "schemaVersion": 1,
      "name": "Gravitational Pull",
      "rank": 1,
      "rarity": "common",
      "traits": [],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "By suddenly altering gravity, you pull the target toward you. The target is pulled 10 feet closer to you unless it succeeds at a Fortitude save. On a critical failure, it's also knocked Prone. The effects of this spell change depending on the number of actions you spend when you Cast this Spell.\n1 (somatic) The spell targets one creature.\n2 (somatic, verbal) The spell targets one creature and pulls the target 20 feet instead of 10.\n3 (material, somatic, verbal) The spell targets up to 5 creatures.",
      "castingTime": "1 to 3 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": "fortitude save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:quick-sort",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "F23T5tHPo3WsFiHW",
      "slug": "quick-sort",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:c79d335821b0a17da7576401075a1f1bc2e64c10f8c7beb6da3b7706b2abbf62",
    "translatableHash": "sha256:a47ceb54607e5d90ebae2fb9a15be02e2cf3068427f843a9077075eca3a816e0",
    "data": {
      "schemaVersion": 1,
      "name": "Quick Sort",
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
      "description": "You magically sort a group of objects into neat stacks or piles. You can sort the objects in two different ways. The first option is to separate them into different piles depending on an easily observed factor, such as color or shape. Alternatively, you can sort the objects into ordered stacks depending on a clearly indicated notation, such as a page number, title, or date. The objects sort themselves throughout the duration, though it takes less time per object to sort a smaller number of objects, down to a single round for 30 or fewer objects.\nHeightened (3rd) The spell can sort up to 400 objects in a minute, or 60 objects in a round.\nHeightened (5th) The spell can sort up to 800 objects in a minute, or 120 objects in a round.",
      "castingTime": "3 actions",
      "range": "10 feet",
      "target": "up to 200 unattended objects in range, each of light Bulk or less",
      "area": null,
      "duration": "up to 1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (3rd) The spell can sort up to 400 objects in a minute, or 60 objects in a round.\nHeightened (5th) The spell can sort up to 800 objects in a minute, or 120 objects in a round."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:lose-the-path",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "iohRnd4gUCmJlh54",
      "slug": "lose-the-path",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/lose-the-path.webp"
    },
    "sourceHash": "sha256:343859ba01d4d8d9d12f8a6ba76bf9d541064509d1cbb59d1bd05c7835e94a36",
    "translatableHash": "sha256:bf2bf82b8b45310d7e6bba812d60fc99696f4485a65f349a7c8bd8844eca5ecb",
    "data": {
      "schemaVersion": 1,
      "name": "Lose the Path",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "illusion",
        "manipulate",
        "mental",
        "visual"
      ],
      "traditions": [
        "occult",
        "primal"
      ],
      "description": "Trigger A creature in range Strides\nYou surround a moving creature with lifelike illusions, shifting their perception of the terrain to subtly lead them off course. The target must attempt a Will save. Regardless of the result, the creature is immune to lose the path for 1 hour.\nSuccess The creature is unaffected.\nFailure The creature treats all squares as difficult terrain for its Stride.\nCritical Failure As failure, except that you determine where the target moves during the Stride, though you can't move it into hazardous terrain or to a place it can't stand.",
      "castingTime": "reaction",
      "range": "60 feet",
      "target": "the triggering creature",
      "area": null,
      "duration": "",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:draw-ire",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "jsWthW1Qy6tg3SwD",
      "slug": "draw-ire",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:e7ad606d5b61492d935d40c7235b120327232bb261d1ba2fa6cc74b738872abf",
    "translatableHash": "sha256:d13ddaf430fa7b1bff5a4d462ba03c12224a0119bc0efdf5b590426874ec8334",
    "data": {
      "schemaVersion": 1,
      "name": "Draw Ire",
      "rank": 1,
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
      "description": "You cause mental distress to a creature, goading it to strike back at you. You deal 1d10 mental damage to the creature and cause it to take a -1 status penalty to attack rolls against creatures other than you. The creature must attempt a Will saving throw.\nCritical Success The target is unaffected.\nSuccess The target takes half damage and the penalty. The spell ends at the end of the target's next turn. Spell Effect: Draw Ire (Success)\nFailure The target takes full damage and the penalty.\nCritical Failure The target takes double damage, and the status penalty is -2.\nSpell Effect: Draw Ire\nHeightened 1 The damage increases by 1d10.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": "will save",
      "damage": [
        {
          "formula": "1d10",
          "type": "mental",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 1d10."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:necromancers-generosity",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "JUJYVbtNNFdvyrBS",
      "slug": "necromancers-generosity",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:a352c7ea1421a367d4755f345d414b761f33242ecb454cc0ec3f077237c1a7be",
    "translatableHash": "sha256:6ebead5869f3efb4c65e18e5409752d04412c443417e3c9a78aba215a80f29c1",
    "data": {
      "schemaVersion": 1,
      "name": "Necromancer's Generosity",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "void"
      ],
      "traditions": [
        "arcane",
        "divine"
      ],
      "description": "You channel void energy through your magical connection to your undead minion to strengthen the creature. The target regains 1d8+4 Hit Points when you Cast the Spell, and it gains a +2 status bonus to saves against vitality effects for the duration.\nSpell Effect: Necromancer's Generosity\nHeightened 1 The amount of healing increases by 1d8+4.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 undead minion you control",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [
        {
          "formula": "1d8+4",
          "type": "untyped",
          "kind": "healing"
        }
      ],
      "heightening": "Heightened 1 The amount of healing increases by 1d8+4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:juvenile-companion",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "KFpBT6FPfSFhxQ27",
      "slug": "juvenile-companion",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:fc9e508912863da2026233994c21af4f6b09876389612eef2faf30ac1877ff58",
    "translatableHash": "sha256:8886384a0ee2c2a84210b1f493507f622f416e122472635d47340bda281ab07f",
    "data": {
      "schemaVersion": 1,
      "name": "Juvenile Companion",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "polymorph"
      ],
      "traditions": [
        "primal"
      ],
      "description": "You transform your companion into its juvenile form, such as a cub, foal, kitten, puppy, or piglet, making the target appear harmless. It becomes Tiny (if it was larger), and its reach is reduced to 0 feet. All of its Speeds are halved (to a minimum Speed of 5 feet), and it gains weakness 5 to physical damage. In all other ways, its abilities and statistics are unchanged.\nIf your companion uses a hostile action, juvenile companion ends. This spell has no effect on a companion that doesn't have a juvenile form.\nSpell Effect: Juvenile Companion\nHeightened (2nd) The duration increases to 1 hour.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "your companion",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (2nd) The duration increases to 1 hour."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:read-the-air",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "lg73SvJZno1ypPAj",
      "slug": "read-the-air",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:4ea6f6d3c804dcbca1fbee8c7e1a6aeff8905766987f6637db57c18b89d87b28",
    "translatableHash": "sha256:6ef19f5500061de78a4ab342b00e59f4288984ee7b090597359401d500c1c481",
    "data": {
      "schemaVersion": 1,
      "name": "Read the Air",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "cantrip",
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "You take a deep breath as you survey a social situation, showing courtesy to all around you as your intuition swiftly picks up clues about social contexts and unspoken assumptions of behavior. Your body language subconsciously changes to take advantage of this information and use it in your own interactions with those creatures.\nAs part of Casting this Spell, you Recall Knowledge using Society to gain information about the immediate social situation. You also gain a +1 status bonus on your next Diplomacy check to Make an Impression on those creatures present when you cast this spell, as long as the check occurs during the duration of the spell. You can read the air only once in a given social situation; casting it again has no effect.\nSpell Effect: Read the Air",
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
    "contentId": "pf2e:spell:spells-srd:wash-your-luck",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "lmHmKGs1N3yNAvln",
      "slug": "wash-your-luck",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:d9de9a6ec66443cc89987e9ca978c597c236ce4a2e3e5e9875ef1b77b9c84616",
    "translatableHash": "sha256:66e9b138db60abe2578b4bce6150552a94a524d3909150927623a657043a2a22",
    "data": {
      "schemaVersion": 1,
      "name": "Wash Your Luck",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "cantrip",
        "concentrate",
        "fortune",
        "manipulate"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "Some practitioners argue this spell literally washes your fortunes of all influences, malign or benign, while others claim it simply cleanses your mind of obsessions about luck and destiny. You adjust your garments, change the posture of your chair, fidget with a religious symbol, or make some other innocuous and personally significant action to wash away bad luck.\nOnce during the spell's duration, before rolling a check, you can cancel out a misfortune effect on that roll, as normal when a fortune and misfortune effect apply to the same roll. After canceling out the misfortune effect, the spell ends, and you are then temporarily immune to wash your luck for 10 minutes.\nSpell Effect: Wash Your Luck",
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
    "contentId": "pf2e:spell:spells-srd:healing-plaster",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "m5QS8q5M6K0euKcT",
      "slug": "healing-plaster",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/healing-plaster.webp"
    },
    "sourceHash": "sha256:c6387f41706314c30ecf1887d89776f1fdcf13a98b15be61e83b06ae5286cefb",
    "translatableHash": "sha256:8b26172f7edabff20fc00e0a48ef6ae96c222bcc704336f1ba5c739b3ef29085",
    "data": {
      "schemaVersion": 1,
      "name": "Healing Plaster",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "cantrip",
        "earth",
        "manipulate"
      ],
      "traditions": [
        "primal"
      ],
      "description": "You purify some dirt or mud into a pliable, claylike plaster that can aid in clotting and healing. This restorative substance can be used in lieu of healer's tools for Medicine checks to Administer First Aid or Treat Wounds. If the plaster isn't used within the spell's duration, or if you Cast the Spell again before using the plaster, it reverts to being normal non-magical earth.\nHeightened (3rd) The plaster grants anyone using it to Administer First Aid or Treat Wounds a +1 item bonus to the Medicine check.",
      "castingTime": "1 action",
      "range": "5 feet",
      "target": "a handful of dirt or mud",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (3rd) The plaster grants anyone using it to Administer First Aid or Treat Wounds a +1 item bonus to the Medicine check."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:breadcrumbs",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "PGVhjDbzC4lf6aXF",
      "slug": "breadcrumbs",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:d3cb7f43552bbd363fdb27bb51f022eeb855b00efcd40e4114fe6951843e8a10",
    "translatableHash": "sha256:dc2cba98746b54af1d414db36dcba2b08778423236934cc11ae1915b613a5bde",
    "data": {
      "schemaVersion": 1,
      "name": "Breadcrumbs",
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
      "description": "You protect your target from going astray in hostile territory by tracking where it's already been, helping it deduce where it still needs to go. The target leaves a glittering trail behind it that lasts for the spell's duration. This trail doesn't denote the direction or the order of its path-it merely indicates where the target has moved during the spell's duration.\nHeightened (2nd) The duration increases to 8 hours.\nHeightened (3rd) The duration increases to last until your next daily preparations.",
      "castingTime": "1 minute",
      "range": "touch",
      "target": "1 willing creature",
      "area": null,
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (2nd) The duration increases to 8 hours.\nHeightened (3rd) The duration increases to last until your next daily preparations."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:seashell-of-stolen-sound",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "q5vbYgLztQ04FQZg",
      "slug": "seashell-of-stolen-sound",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/seashell-of-stolen-sound.webp"
    },
    "sourceHash": "sha256:6715862980a3a7fc421be3fda3c3cefb1c503b13ed07402fa54d0ada28915a79",
    "translatableHash": "sha256:0da871c92f1ebbdec7a5661568c39e4498da1620d26400cd91c3c54a1916fae6",
    "data": {
      "schemaVersion": 1,
      "name": "Seashell of Stolen Sound",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "sonic"
      ],
      "traditions": [
        "arcane",
        "occult",
        "primal"
      ],
      "description": "Trigger A creature within range begins to make a sound.\nYou store a sound in a seashell to use as you will: the last words of a loved one, a dragon's mighty roar, the compromising conversation between two powerful diplomats, or even more strange and secret. As part of Casting this Spell, you must present an unbroken seashell. When you Cast the Spell, magic swirls around the triggering creature, copying the sounds they make, as well as any background noise, for the next minute and storing them in the seashell.\nYou or another creature can then play the sound back from the seashell during the spell's duration by Interacting with the seashell, but once the sounds have been played back, the seashell shatters and the spell ends.\nAs normal for spells with a duration until your next daily preparations, you can choose to continue expending the spell slot to prolong the duration of an existing seashell of stolen sound for another day. While the spell faithfully copies the sounds around the target, it doesn't reproduce any special auditory or sonic effects of the sound.",
      "castingTime": "reaction",
      "range": "30 feet",
      "target": "",
      "area": null,
      "duration": "until your next daily preparations",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:nudge-the-odds",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "QjdvYC1QkpMaemoX",
      "slug": "nudge-the-odds",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:cb9fb9b256bb6357385b75ac84166f5ff9f7e04daac227472c4e2712a7b5f6f7",
    "translatableHash": "sha256:7066526b7adf578caa4d2264666b96e2e7d293bcca93841e9ad587651afe8090",
    "data": {
      "schemaVersion": 1,
      "name": "Nudge the Odds",
      "rank": 1,
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
      "description": "You bestow yourself supernaturally good luck at cards, dice, and other games of chance. You gain a +1 status bonus to Games Lore checks to gamble, and if you roll a critical failure on such a check, you get a failure instead; however, the spell is too short-lived to use for Earn Income checks from gambling.\nWhen you're under the effect of nudge the odds, one facial feature, such as a lock of hair or the iris of an eye, transforms to a distinctive golden color; the GM chooses which feature when you cast the spell. This change resists all magical efforts to conceal it, though it can be hidden or covered by mundane means. A creature noticing the feature can identify the spell using Recall Knowledge. Because it prevents losing big, gamblers consider nudge the odds a repugnant form of cheating. If you're caught using the spell, you are likely to suffer serious consequences, depending on the nature of the gamblers you cheated.\nSpell Effect: Nudge the Odds\nHeightened (5th) The status bonus increases to +2, and the duration increases to last until the next time you make your daily preparations. If you continue spending your spell slot to keep the duration active, this allows you to apply the effect to a downtime check to Earn Income.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (5th) The status bonus increases to +2, and the duration increases to last until the next time you make your daily preparations. If you continue spending your spell slot to keep the duration active, this allows you to apply the effect to a downtime check to Earn Income."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:tame",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "s7ILzY2xh1tc9U1v",
      "slug": "tame",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:b8dfd0a5002e0581e6f523655e5ed6ec7c016ebdd11ed14bf59fa7044e01c5f7",
    "translatableHash": "sha256:bc92523ccf67f3e9bc096178b2a543da2c8da2be1fac26dc5a6dd27c6984f4a1",
    "data": {
      "schemaVersion": 1,
      "name": "Tame",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "auditory",
        "cantrip",
        "concentrate",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "occult",
        "primal"
      ],
      "description": "As you make comforting sounds and gestures, you approach the target in a friendly manner combining caution and confidence. You improve the target's attitude to you by one step (unfriendly to neutral, neutral to friendly, friendly to helpful) for the duration of the spell unless it succeeds at a Will save. Afterward, the target is temporarily immune for 1 day.\nThis spell works on only domesticated animals; for example, you could use it on guard dogs or stray dogs, but not feral dogs or wolves. If the socialization of the animal is in question, the decision is up to the GM.\nHeightened (3rd) The duration becomes 10 minutes.\nHeightened (6th) The duration becomes 1 hour.",
      "castingTime": "2 actions",
      "range": "10 feet",
      "target": "1 non-hostile domesticated animal",
      "area": null,
      "duration": "1 minute",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened (3rd) The duration becomes 10 minutes.\nHeightened (6th) The duration becomes 1 hour."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:infectious-enthusiasm",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "VACvA5VRbddjt5s9",
      "slug": "infectious-enthusiasm",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:f8b526a0a2615f5fd58a443879d965ede9004cec693ea9bd931d13abc48bf125",
    "translatableHash": "sha256:a4821e1ff612b3ba428a19a3ce414ed28a50869c34dd67d1b511748c0f82e839",
    "data": {
      "schemaVersion": 1,
      "name": "Infectious Enthusiasm",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "cantrip",
        "concentrate",
        "emotion",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "With enchanted gusto, you encourage yourself to get things done and share your motivation with your allies. You gain a +1 status bonus to your choice of attack rolls, Will saves, or Charisma-based skill checks. During the spell's duration, an ally who observed you Casting this Spell and was within 30 feet when you did so can take a single action, which has the concentrate trait, to gain the same bonus you chose until the start of its next turn.\nUsing this spell to influence someone in a social situation is typically considered a faux pas, negating the benefit on Charisma-based skills if the subject of the check observed you casting the spell.\nSpell Effect: Infectious Enthusiasm",
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
    "contentId": "pf2e:spell:spells-srd:echoing-weapon",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "vtCCVe869shMCJMj",
      "slug": "echoing-weapon",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:904c42254cf40a6f8e75f0d8cfe84208db2eb46b63ba56490613ee22a271fc64",
    "translatableHash": "sha256:4100aa76da69175b01298a31f14c9953155657d27fa8700f8802a284a1a3a375",
    "data": {
      "schemaVersion": 1,
      "name": "Echoing Weapon",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "sonic"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult"
      ],
      "description": "You channel magical energy into the target weapon, and the air around it faintly hums each time you strike a blow, as the impact is absorbed into the weapon. If a creature is wielding the weapon at the end of its turn, the weapon discharges a burst of sound targeting one creature adjacent to the wielder (if any). The sonic damage this deals is equal to the number of successful Strikes with the target weapon that the wielder made that turn (to a maximum of 4 sonic damage if the wielder hits with four Strikes).\nHeightened 2 The sonic damage increases by 1 per Strike (and the maximum damage increases by 4).",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 weapon",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 2 The sonic damage increases by 1 per Strike (and the maximum damage increases by 4)."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:thicket-of-knives",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "X56VdA98VedAfGTU",
      "slug": "thicket-of-knives",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:9cbc5fc490381d9df853afd65619f2f5a2ac8d4a93fb59264fd9f37c7671da9b",
    "translatableHash": "sha256:4a4e07d9a822fdc8c0ff8d106742d9a89e45f0cdb403fb91acc34a009c4c2941",
    "data": {
      "schemaVersion": 1,
      "name": "Thicket of Knives",
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
      "description": "You create numerous phantom copies of your weapon arm, hiding your true movements and rendering your attacks unpredictable. You gain a +2 status bonus to Deception checks. If you're untrained in Deception, you can use the Feint action anyway, and add your level as your proficiency bonus despite being untrained.\nSpell Effect: Thicket of Knives",
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
    "contentId": "pf2e:spell:spells-srd:biting-words",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "yafsV0ni7rFgqJBj",
      "slug": "biting-words",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/biting-words.webp"
    },
    "sourceHash": "sha256:93208e9642286114d85f8e9ccbbf58c44b256ee3dc29bc8bafdf2626815e5118",
    "translatableHash": "sha256:70d468ae64e473959e2a8e50fef43e7914a6c5c30524f1405658c470b8f7e70f",
    "data": {
      "schemaVersion": 1,
      "name": "Biting Words",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "attack",
        "auditory",
        "concentrate",
        "linguistic",
        "manipulate",
        "sonic"
      ],
      "traditions": [
        "occult"
      ],
      "description": "You entwine magic with your voice, causing your taunts and jibes to physically harm your enemies. You can attack with your words once when you finish Casting the Spell, and can repeat the attack once on each of your subsequent turns by taking a single action, which has the attack, concentrate, and linguistic traits. After your third attack total, the spell ends.\nWhen you attack with biting words, make a ranged spell attack roll against a creature within 30 feet, dealing 2d6 sonic damage if you hit (or double damage on a critical hit).\nHeightened 1 The damage increases by 2d6.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [
        {
          "formula": "2d6",
          "type": "sonic",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:ash-cloud",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "23cv1p49NFd0Onng",
      "slug": "ash-cloud",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:2342f32b37c74e7ac1c67cab552980e310d52bb792dd925d563c28464f192465",
    "translatableHash": "sha256:ef7e9ab947c000a83eb526bab28eb568f7606ff45eaf7ac49feaf7d2ba08c9d8",
    "data": {
      "schemaVersion": 1,
      "name": "Ash Cloud",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "air",
        "concentrate",
        "fire",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You summon a tumultuous cloud of ash and smoke. The cloud is difficult terrain for flying creatures, and creatures in the cloud can't detect anything using their sense of smell. Creatures that start their turn within the cloud take 2d4 fire damage as their lungs fill with the hot, acrid smoke, with a Fortitude save.\nCritical Success The target is unaffected.\nSuccess The target takes half damage.\nFailure The target takes full damage and is Dazzled for 1 round.\nCritical Failure The target takes double damage and is Blinded for 1 round.\nHeightened 1 The damage increases by 1d4.",
      "castingTime": "3 actions",
      "range": "120 feet",
      "target": "",
      "area": "20 burst",
      "duration": "1 minute",
      "defense": "fortitude save",
      "damage": [
        {
          "formula": "2d4",
          "type": "fire",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 1d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:ignite-fireworks",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "3GXU3ugrwLv0P7AH",
      "slug": "ignite-fireworks",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/ignite-fireworks.webp"
    },
    "sourceHash": "sha256:a42ad5d8c98ad746088782d69610ce635b6a7bcb54900565044f65e60d052b10",
    "translatableHash": "sha256:b6a924b9c26e09e3370be1247c5e8a55d33bb0b223dea537a1fbfb1e0ad50a23",
    "data": {
      "schemaVersion": 1,
      "name": "Ignite Fireworks",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "fire",
        "manipulate",
        "sonic"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "A brilliant and clamorous display of sparks and colorful fireworks explode around your enemies, dealing 1d8 fire damage and 1d8 sonic damage to creatures within a 10-foot burst. All creatures in the area must attempt a Reflex save.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage and is Dazzled for 1 round.\nFailure The creature takes full damage and is dazzled for 3 rounds.\nCritical Failure The creature takes double damage, takes 1d4 persistent fire damage, and is dazzled for 1 minute.\nHeightened 2 The initial fire damage increases by 1d8, the sonic damage increases by 1d8, and the persistent fire damage a creature takes on a critical failure increases by 1d4.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "",
      "area": "10 burst",
      "duration": "",
      "defense": "reflex save",
      "damage": [
        {
          "formula": "1d8",
          "type": "fire",
          "kind": "damage"
        },
        {
          "formula": "1d8",
          "type": "sonic",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The initial fire damage increases by 1d8, the sonic damage increases by 1d8, and the persistent fire damage a creature takes on a critical failure increases by 1d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:flame-wisp",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "3q9tBMWsWQKlXPPJ",
      "slug": "flame-wisp",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:84b69d2cd4912cb115b3901f2f5023945e150031c6afe0d8606386f2b48e0b22",
    "translatableHash": "sha256:3c7ee47daa6b92c4273bef8ccdeb7dd380835924df2228f665e6ed96aa2ade03",
    "data": {
      "schemaVersion": 1,
      "name": "Flame Wisp",
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
      "description": "Three faintly glowing wisps of fire float around your head. Each time you hit a creature with a Strike, one of the wisps goes hurtling towards that creature, dealing 1d4 fire damage. If you Cast a Spell with the fire trait while you have fewer than three wisps, a new wisp appears.\nSpell Effect: Flame Wisp\nHeightened 2 The damage increases by 1d4.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 2 The damage increases by 1d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:extract-poison",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "CLThxp8Qf43IQ3Sb",
      "slug": "extract-poison",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:5f06a92d90a2fa4b3d2aebce8659eb8cdab60155a0745622e7dd6602e969a5fe",
    "translatableHash": "sha256:46a084976bcf3f9f9fa2092331f2fcc48404ea53465a39a2df5fe3e624a04eec",
    "data": {
      "schemaVersion": 1,
      "name": "Extract Poison",
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
      "description": "With the lightest touch, you can siphon the poison from an object and save it for your own later use, making an assassin's blade or politician's wine less deadly while you become all the more so. Attempt a counteract check against one poison you're aware of on or in an object you touch. If you successfully counteract the poison, you negate the object's toxicity and transfer the poison into a weapon you are holding, coating the weapon with a simple but powerful poison. On your next successful attack with that weapon before the end of your next turn, you add 1d6 poison damage per level of the poison you counteracted. On a critically failed attack roll, you lose the extracted poison from your weapon as normal.\nSpell Effect: Extract Poison",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 poison on or in an object",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:summoners-precaution",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "cwXiKPkZrIupjwlQ",
      "slug": "summoners-precaution",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:54d8397fa2c57a1f166011c125cb3cb593e97fe9c26ad1faf8a50413f09eb9e0",
    "translatableHash": "sha256:53b01a5a757534176215d7b4fec6025a05765d866a45df75bc970557dd1047d2",
    "data": {
      "schemaVersion": 1,
      "name": "Summoner's Precaution",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "contingency",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult",
        "primal"
      ],
      "description": "You create a buffer in the link between yourself and your eidolon in order to prevent you from falling alongside your bonded ally. You gain the Sever Conduit reaction; after using it, the spell ends.",
      "castingTime": "10 minutes",
      "range": "",
      "target": "",
      "area": null,
      "duration": "until your next daily preparations",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:umbral-extraction",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "EDwakYQTS1t6XHD4",
      "slug": "umbral-extraction",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/umbral-extraction.webp"
    },
    "sourceHash": "sha256:dbd202d8fca48ff041d06e031e1cb1a4448de3da214e290e9f7280fd592612da",
    "translatableHash": "sha256:e858833a901495c937a28306f3d6c2c6daeb180f10704f074ce310c2972220dc",
    "data": {
      "schemaVersion": 1,
      "name": "Umbral Extraction",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "illusion",
        "manipulate",
        "mental",
        "shadow"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You prepare to steal spells from your foes, ripping them from the foe's shadow to stow them in an ephemeral pocket in the Shadow Plane. You gain a temporary spell slot, which you can fill only by stealing a spell from an enemy spellcaster. During umbral extraction's duration, you can use the Steal action to attempt to take one of the foe's prepared spells or unused spontaneous spell slots instead of an item. You can also make one attempt to Steal as part of Casting umbral extraction. If you succeed at your check to Steal a spell, you deal 1d4 mental damage to the target per rank of the spell stolen due to the psychological toll of the spiritual emptiness created by wrenching the spell away, and you place the stolen spell in your temporary spell slot. It gains the shadow trait if cast from this temporary slot.\nDetermine the stolen spell at random from the target's spells that are 1 rank lower than umbral extraction, or from spells of the same rank if you got a critical success. If the target has no spell slots of that rank, use the highest rank below that in which the target does have a spell slot. (If the target has no eligible spells, you get nothing, but you can continue to attempt to Steal spells for the remaining duration.) If the target is a prepared caster, you randomly steal one of their prepared spells. If the target is a spontaneous caster, you instead steal an unexpended spell slot of the appropriate rank and determine the spell at random from all the target's known spells at that level. You can't steal a target's innate spells, focus spells, or cantrips. You know what the spell is as soon as you steal it, and your temporary spell slot becomes a spell slot of the same rank as the spell you stole.\nAs normal, you can Steal only from a target within your reach. Once you've placed a spell in your temporary spell slot, you can't attempt to Steal more spells. If you succeed at your Thievery check, you must take the spell you stole. Even if you're a spontaneous caster, you can use the temporary spell slot only to cast the stolen spell and you can cast only the stolen spell from your temporary spell slot. When umbral extraction ends, you lose the temporary spell slot and any spell still stored in it. When you cast umbral extraction, any previous casting of umbral extraction currently affecting you ends.",
      "castingTime": "2 actions",
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
    "contentId": "pf2e:spell:spells-srd:inner-radiance-torrent",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "eSEmqOBuywoJ6tYd",
      "slug": "inner-radiance-torrent",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:e358ba170e5f99ecd1a07c85796889a6c0cd3a55f06ceef62f1992ad3d5ff7ca",
    "translatableHash": "sha256:72cff4f0eefe7a12670ac478c7e849b293cdd13dec75a599f67df21fb362d556",
    "data": {
      "schemaVersion": 1,
      "name": "Inner Radiance Torrent",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "force",
        "light"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "You gradually manifest your spiritual energy into your cupped hands before firing off a storm of bolts and beams that deal 4d4 force damage to all creatures in a 60-foot line. Creatures in the area must attempt a basic Reflex save. On a critical failure, they're also blinded for 1 round. The number of actions you spend when Casting this Spell determines the area. If the line passes through an area of magical darkness or targets a creature affected by magical darkness, inner radiance torrent attempts to counteract the darkness.\n2 (somatic, verbal) The line is 60 feet long.\n3 (material, somatic, verbal) The line is 120-foot line long.\nTwo Rounds The line is 120 feet long. If you spend 3 actions casting the spell, you can avoid finishing the spell and spend another 3 actions on your next turn to empower the spell even further. If you choose to do so, the damage dealt by this spell increases by 4d4, and you enter a shining state for 1 minute, causing you to glow with light and deal 1 force damage to creatures that end their turn adjacent to you.\nHeightened 1 The initial damage, as well as the additional damage for the 2-round casting time, each increase by 2d4, and the damage to adjacent creatures dealt while in your shining state increases by 1.",
      "castingTime": "2 to 2 rounds",
      "range": "",
      "target": "",
      "area": "60 line",
      "duration": "",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "4d4",
          "type": "force",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The initial damage, as well as the additional damage for the 2-round casting time, each increase by 2d4, and the damage to adjacent creatures dealt while in your shining state increases by 1."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:rapid-adaptation",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "fTK6ysisGhy3hRvz",
      "slug": "rapid-adaptation",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:4c07803940913cd747e17d012b7337fef36bf3364490fe16fa15138ae0e295ad",
    "translatableHash": "sha256:9368b762ede124c971682431991526d0d5e748cc849399f6b906bd615db44fb3",
    "data": {
      "schemaVersion": 1,
      "name": "Rapid Adaptation",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "primal"
      ],
      "description": "You flood the target with energy from the terrain around it, compressing centuries of evolution into a single moment. The target gains one of the following natural adaptations based on the surrounding environment.\n• Aquatic The target gains a swim Speed equal to its land Speed. If it already had a swim Speed, it gains a +10-foot status bonus to its swim Speed.\n• Arctic The target isn't affected by severe or extreme cold, and when it rolls a success on an Acrobatics check to Balance on ice and snow, it gets a critical success instead.\n• Desert The target isn't affected by severe or extreme heat, and when it rolls a success on an Acrobatics check to Balance on sand, it gets a critical success instead.\n• Forest The target gains scent as an imprecise sense with a range of 30 feet.\n• Mountain The target isn't Off-Guard when Climbing, and when it rolls a success on an Acrobatics check to Balance on rubble, it gets a critical success instead.\n• Plains The target gains a +10-foot status bonus to its land Speed.\n• Underground The target gains darkvision.\nSpell Effect: Rapid Adaptation",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "your companion or eidolon",
      "area": null,
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:warriors-regret",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "kIwA7kwp5E0AC3yM",
      "slug": "warriors-regret",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:e5572a6f6986fd6b2c2d5f04ee645b897f096589cd98448728cf6688a5e95cf8",
    "translatableHash": "sha256:3b8296838b1a0b5377e085831149a64683e9a380573e0340154fd30b611aa486",
    "data": {
      "schemaVersion": 1,
      "name": "Warrior's Regret",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "curse",
        "emotion",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult"
      ],
      "description": "Regret eats away at the target's mind, punishing it for its violence until it ceases its hostility. The target must attempt a Will save.\nCritical Success The target is unaffected.\nSuccess At the end of its next turn, the target takes 1d8 damage per different creature it intentionally damaged on that turn (1d8 if it damaged one creature, 2d8 if it damaged two different creatures, and so on). The maximum is 4d8 if it damaged 4 different creatures.\nFailure As success, except the curse damages the target at the end of each of its turns and lasts until the target spends a complete round without intentionally damaging another creature.\nCritical Failure As success, except the curse damages the target at the end of each of its turns and lasts until the target spends 24 hours atoning for its perceived sins.\nHeightened 2 The amount of mental damage the target takes for each creature it damaged that turn increases by 1d8, and the maximum damage the target can take per turn increases by 4d8.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": "will save",
      "damage": [
        {
          "formula": "1d8",
          "type": "untyped",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The amount of mental damage the target takes for each creature it damaged that turn increases by 1d8, and the maximum damage the target can take per turn increases by 4d8."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:guiding-star",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "L10q1ng6U3sega9S",
      "slug": "guiding-star",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:8483af009f6bc0ad09ec262b3f1153654c0dcc86d0e4521057683dce5403abe4",
    "translatableHash": "sha256:0e25a67c5625eaf49aaf86b3b7684dd9308cef43131d9397b845031fb863878c",
    "data": {
      "schemaVersion": 1,
      "name": "Guiding Star",
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
        "primal"
      ],
      "description": "You call on the constellations of the night sky to guide a creature to the location where you Cast the Spell. Each time the target views the stars, it receives a mental nudge toward your chosen location, though it isn't compelled to follow. The target can recognize you as the source. If the creature goes to another planet or plane, the spell's effects are suppressed, but they resume if the creature returns.",
      "castingTime": "2 actions",
      "range": "planetary",
      "target": "1 creature you've met",
      "area": null,
      "duration": "until your next daily preparations",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:thundering-dominance",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "mMgLHTLHjjGa206q",
      "slug": "thundering-dominance",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:9c351527f294c4cd70dfffbd255c4fff58927bf3c7c1b57094bcd2184dc0e81d",
    "translatableHash": "sha256:b1bc85f247d2ebd39710a1ab7a4572a3770e2bccf20ec38ba4bba128c31d4f16",
    "data": {
      "schemaVersion": 1,
      "name": "Thundering Dominance",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "occult",
        "primal"
      ],
      "description": "You shroud the target in a powerful predatory aura and amplify its vocalizations. It gains a +1 status bonus to Intimidation checks. Once during this spell's duration, it can take the Thundering Roar action.\nSpell Effect: Thundering Dominance\nHeightened 2 The status bonus to Intimidation checks increases by 1 (to a maximum of a +4 status bonus for an 8th-rank spell), and the damage from the roar increases by 2d8.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "your companion or eidolon",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 2 The status bonus to Intimidation checks increases by 1 (to a maximum of a +4 status bonus for an 8th-rank spell), and the damage from the roar increases by 2d8."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:timely-tutor",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "OhgfPzB5gymZ0IZM",
      "slug": "timely-tutor",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:821f2a36b7be0ac985fca1cdba107bdb674f486e28e84ee2c7b8db9abf073cbf",
    "translatableHash": "sha256:f454ae0c4f6eac6dd5fd50959866ee3e246c3f9eab2adfbd184edaf9c9399d6f",
    "data": {
      "schemaVersion": 1,
      "name": "Timely Tutor",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "manipulate",
        "mental"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You serve as an astral connection between your eidolon or familiar and the Akashic Record-a demiplane consisting of a comprehensive psychic library-then turn to the creature for advice. If you cast this spell on your familiar, your familiar adds your spellcasting ability modifier on checks to Recall Knowledge with the Lore skill of your choice, much like it does for Acrobatics and Stealth. Your familiar must have the speech familiar ability in order to share any information it learns with you. If you cast this spell on your eidolon, it instead becomes trained in the Lore skill.\nIf you lose physical contact with the target, its connection to the Akashic Record is severed and timely tutor immediately ends.",
      "castingTime": "1 action",
      "range": "touch",
      "target": "your eidolon or familiar",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:befitting-attire",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "q5qmNn144ZJGxnvJ",
      "slug": "befitting-attire",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:8d63aa737f1898b5b5d5d447665a83cdeeebaa6bc2b44215658dbc965a84a558",
    "translatableHash": "sha256:41acb85f0037ed0c02dc3cddf5e8f4e75f2152b98d3497796a65fe57fa26c543",
    "data": {
      "schemaVersion": 1,
      "name": "Befitting Attire",
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
      "description": "You cloak the targets in an illusion, shaping their clothing and worn items into ones suitable for a particular occasion. You visualize the occasion, and the spell creates illusory attire customized to each target. For instance, if you visualized a noble ball, armor would appear to be fine clothing. This doesn't change identifying details of the targets' appearances other than their clothes.\nAny creature that touches the attire, uses the Seek action to examine it, or otherwise interacts with it can attempt to disbelieve your illusion.\nHeightened (4th) You can target up to 20 creatures.\nHeightened (5th) You can target up to 100 creatures.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "5 willing creatures",
      "area": null,
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) You can target up to 20 creatures.\nHeightened (5th) You can target up to 100 creatures."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:persistent-servant",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "qCmihBL0G0G5ExPF",
      "slug": "persistent-servant",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/persistent-servant.webp"
    },
    "sourceHash": "sha256:8a89e4f915ff53df94e695c212157d5b765391798905c69efdc599ed6b4def17",
    "translatableHash": "sha256:2c394652005730b0a4187ff3f6fe6a4f202f523b31b6200d2190620c774fbde0",
    "data": {
      "schemaVersion": 1,
      "name": "Persistent Servant",
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
      "description": "You call forth an unseen servant and task it to perform a specific chore repeatedly. Choose a basic instruction, such as sweeping the floor, or picking up all objects from the floor and putting them in a designated bin. The servant performs the task over and over again throughout the duration, though it can't ever leave the spell's area.\nThe servant isn't a minion, and you don't need to Sustain the Spell in order for it to continue to act. However, it acts on its own time, and thus can't accomplish anything useful during an encounter, even if an encounter happens within the spell's range.\nTasks that rely on timing, discretion, or significant manual dexterity are doomed to failure. For instance, a servant tasked to pick objects off the floor won't discriminate between trash, misplaced treasure, or objects that are supposed to be on the floor, like a mousetrap.",
      "castingTime": "1 minute",
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
    "contentId": "pf2e:spell:spells-srd:lucky-number",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "rDDYGY2ekZ1yVv7q",
      "slug": "lucky-number",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:91498ea08cf8f3805e1b4c53372b759d6abb95be9b942714be71dfeae90e2e5f",
    "translatableHash": "sha256:3ef60aa33157e466f7700fd4af8126db70996346aeae45cfe22ec50451d0f845",
    "data": {
      "schemaVersion": 1,
      "name": "Lucky Number",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "contingency",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult"
      ],
      "description": "When you Cast this Spell, roll 1d20 and make a note of the result. You gain the That's My Number reaction; once you use the reaction, the spell ends, and you become temporarily immune to lucky number until the next time you make your daily preparations.\nSpell Effect: Lucky Number",
      "castingTime": "10 minutes",
      "range": "",
      "target": "",
      "area": null,
      "duration": "until the next time you make your daily preparations",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:feral-shades",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Ru9v8U9IRk3LtWx8",
      "slug": "feral-shades",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/feral-shades.webp"
    },
    "sourceHash": "sha256:19fa4ed84a54e9eda5662c6d8591a6d340e2680a9aa887ad19e7d7fbe8830fa5",
    "translatableHash": "sha256:6a909dcb5f1260d7b50db50fea0a55a9e96fb8a87d0e748667b87961c7e65ebc",
    "data": {
      "schemaVersion": 1,
      "name": "Feral Shades",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "primal"
      ],
      "description": "A wave of gray mist formed of void energy spills out from your outstretched hand, briefly taking the shape of a pack of predatory animals that set viciously on your foes. You deal 2d4 slashing damage and 2d4 void damage to creatures in the area. The shades set upon the vulnerable with greater ferocity: prone creatures or those taking persistent bleed damage take a -2 status penalty to the save.\nHeightened 1 The slashing damage and the void damage each increase by 1d4.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "30 cone",
      "duration": "",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "2d4",
          "type": "slashing",
          "kind": "damage"
        },
        {
          "formula": "2d4",
          "type": "void",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The slashing damage and the void damage each increase by 1d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:summoners-visage",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "vb2dFNtbofJ7A9BW",
      "slug": "summoners-visage",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:eac0c6c2b3972463b5cd25abd1da26def9b3b9968324bf28dbba20c07bbcb113",
    "translatableHash": "sha256:b7ac4fe4f0c0b8763822cc10fcbfb9df199e7e8dfc5c6e9ad45d302915bfdf0f",
    "data": {
      "schemaVersion": 1,
      "name": "Summoner's Visage",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "polymorph"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult",
        "primal"
      ],
      "description": "You transform your eidolon into your identical twin. Assuming you are a humanoid, the eidolon gains the humanoid trait in addition to its other traits while it's in this form, as well as any other trait related to your form (such as elf or gnome). Your eidolon gains a +4 status bonus to Deception checks to Impersonate you and can add its level to such checks even if it's untrained.\nAlthough your eidolon looks like you, it doesn't gain any new abilities, and its statistics don't change in any way-the transformation is purely cosmetic. If this transformation reduces your eidolon's size, the eidolon loses any other effects of its larger size, such as any increase to reach. Your eidolon can still use gear only if it has the eidolon trait, which allows eidolons to use it. Any such eidolon items the eidolon was wearing change size and shape, if necessary, and its effects remain active.\nYou can Dismiss the spell.\nSpell Effect: Summoner's Visage\nHeightened (4th) The duration increases to 1 hour.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "your eidolon",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) The duration increases to 1 hour."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:phantom-crowd",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "WfINystwLv9ohYpS",
      "slug": "phantom-crowd",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:058d57487cfdf0acb2173d5865d9c0fff5d8671950f9cb319a29c15550ef2b9e",
    "translatableHash": "sha256:94fb93b4b9292fa65196cd664b87fa475c7923e9a13492c16ad3d052fca53da4",
    "data": {
      "schemaVersion": 1,
      "name": "Phantom Crowd",
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
      "description": "A tightly packed crowd of humanoids appropriate to the area appear, facing you and agreeing loudly with anything you say. A creature that touches a member of the crowd or makes a Seek action to examine the crowd can attempt to disbelieve your illusion. The crowd is difficult terrain for anyone who hasn't disbelieved the illusion.\nWhen you spend 1 or more actions to cast a composition spell or to perform an activity that includes a Performance check, you can also Sustain this Spell as part of that action.\nHeightened 1 The crowd occupies an additional 10-foot square in range. The additional square doesn't need to be adjacent to any other square created by the spell. It can overlap, but there's no additional effect in the overlapped squares.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "",
      "area": "5 burst",
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 The crowd occupies an additional 10-foot square in range. The additional square doesn't need to be adjacent to any other square created by the spell. It can overlap, but there's no additional effect in the overlapped squares."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:mimic-undead",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "xlRv8vCTHh1NeMpw",
      "slug": "mimic-undead",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:4611984f28e49fc8693b41fa6e8cabd2945e7ce6edd426c6b05f26557b34c913",
    "translatableHash": "sha256:a2f20efd0d686f0d91a66927ccc6e855070ab33b254fd7fa37eb3cb5d2adacbb",
    "data": {
      "schemaVersion": 1,
      "name": "Mimic Undead",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "You take death and wrap it about you like a cloak-your colors wash out and your skin grows cold to the touch. Your heartbeat, breathing, and similar life functions become very difficult to detect. Senses such as lifesense detect you as undead unless a creature succeeds at a Perception check against the spell's DC, and on a failed check, they don't detect you at all if they only sense living creatures. Detection spells that specifically sense living creatures must succeed at a counteract check against mimic undead to detect you. You gain a +4 status bonus to Impersonate an undead but physically intact version of yourself and can add your level as your proficiency bonus even if you're untrained. You don't gain these benefits to Impersonate any other sort of undead. Mindless undead usually don't have a reason to even attempt the Perception check to notice your Impersonation unless you interact with them in some way.\nSpell Effect: Mimic Undead",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:sonata-span",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Yv3AFIO55FONQYMH",
      "slug": "sonata-span",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:df2f5f9237bc3eab0d2aab11591b83a5552433170f019d74aaaca10f78c0a454",
    "translatableHash": "sha256:0ed3c38559c686194399172f25c0e210a942b723e133b46eae673de1b98994b7",
    "data": {
      "schemaVersion": 1,
      "name": "Sonata Span",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "auditory",
        "concentrate",
        "manipulate",
        "sonic"
      ],
      "traditions": [
        "occult"
      ],
      "description": "By playing a brief tune on an instrument or in song, you cause the notes of the melody to physically manifest into a shimmering, translucent path. This path doesn't need to be over solid ground and can tilt up or down diagonally up to 45 degrees, but it must be a straight, 5-foot-wide line. It can support as many creatures as can physically fit on the bridge.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "30 line",
      "duration": "sustained",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:ooze-form",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "0gdZrT9lwO17EIxc",
      "slug": "ooze-form",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:d3ea7d558cbdf2a744ae8b75791df3fe0e40a8f45c727e090e73d5bcbb2436d1",
    "translatableHash": "sha256:30ea4a9ea983d1749f7fc437f9c6048b5c775e93f61aa9110c9cc4eb629c26d1",
    "data": {
      "schemaVersion": 1,
      "name": "Ooze Form",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "polymorph"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You invoke all things that seep and ooze, your body dissolving into a thick slurry and then reconstituting itself into a Medium ooze battle form. When you first cast this spell, choose black pudding, gelatinous cube, gray ooze, or ochre jelly. While in this form, you gain the ooze trait. You can Dismiss the spell. You gain the following statistics and abilities regardless of which battle form you choose:\n• AC = 7 + your level. Ignore your armor's check penalty and Speed reduction.\n• 20 temporary Hit Points.\n• You are immune to critical hits, precision damage, and visual effects.\n• Resistance 5 to acid, piercing, and slashing damage.\n• No vision and motion sense 30 feet. You can sense nearby motion through vibration and air movement as a precise sense.\n• One or more unarmed melee attacks specific to the battle form you choose, which are the only attacks you can Strike with. You're trained with them. Your attack modifier is +14, and you use the listed damage. These attacks are Strength based (for the purpose of the enfeebled condition, for example). If your unarmed attack modifier is higher, you can use it instead.\n• Athletics modifier of +14, unless your own is higher.\nYou also gain specific abilities based on the ooze:\n• Black Pudding Speed 15 feet, climb 15 feet;\n• Melee 1 pseudopod, Damage 2d6+5 bludgeoning and 1d8 acid.\n• Gelatinous Cube Speed 15 feet;\n• Melee 1 cube face, Damage 1d6+5 acid;\n• a creature hit by your cube face Strike must succeed at a Fortitude save against your spell DC or be Stunned 1 (or Paralyzed for 1 round on a critical failure); this save has the incapacitation trait.\n• Gray Ooze Speed 15 feet, climb 15 feet, swim 15 feet\n• Melee 1 pseudopod, Damage 1d6+5 bludgeoning and 1d6 acid, and you can spend an action after a hit to Grab the target.\n• Ochre Jelly Speed 15 feet, climb 10 feet; resistance 5 to electricity;\n• Melee 1 pseudopod, Damage 1d8+5 bludgeoning and 1d8 acid, and you can spend an action after a hit to Grab the target.\nSpell Effect: Ooze Form\nHeightened (4th) Your battle form is Large, and your attacks have 10-foot reach. You must have enough space to expand into or the spell is lost. You instead gain 30 temporary HP; resistance 7 to acid, piercing, and slashing; attack modifier +16; damage bonus +9; and Athletics +16. Your motion sense has a range of 40 feet.\nHeightened (5th) Your battle form is Huge, and your attacks have 15-foot reach. You must have enough space to expand into or the spell is lost. You instead gain 40 temporary HP; resistance 10 to acid, piercing, and slashing; attack modifier +18; damage bonus +6 and double damage dice; and Athletics +20. Your motion sense has a range of 60 feet.\nHeightened (8th) Your battle form is Gargantuan (20-foot- by-20-foot space), and your attacks have 20-foot reach. You must have enough space to expand into or the spell is lost. You instead gain 60 temporary HP; resistance 12 to acid, piercing, and slashing; attack modifier +28; damage bonus +13 and double damage dice; and Athletics +29. Your motion sense has a range of 60 feet.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) Your battle form is Large, and your attacks have 10-foot reach. You must have enough space to expand into or the spell is lost. You instead gain 30 temporary HP; resistance 7 to acid, piercing, and slashing; attack modifier +16; damage bonus +9; and Athletics +16. Your motion sense has a range of 40 feet.\nHeightened (5th) Your battle form is Huge, and your attacks have 15-foot reach. You must have enough space to expand into or the spell is lost. You instead gain 40 temporary HP; resistance 10 to acid, piercing, and slashing; attack modifier +18; damage bonus +6 and double damage dice; and Athletics +20. Your motion sense has a range of 60 feet.\nHeightened (8th) Your battle form is Gargantuan (20-foot- by-20-foot space), and your attacks have 20-foot reach. You must have enough space to expand into or the spell is lost. You instead gain 60 temporary HP; resistance 12 to acid, piercing, and slashing; attack modifier +28; damage bonus +13 and double damage dice; and Athletics +29. Your motion sense has a range of 60 feet."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:claim-curse",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "5OcZ3HBkrRFhSWCz",
      "slug": "claim-curse",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/claim-curse.webp"
    },
    "sourceHash": "sha256:ff5892c51525dd98a44063584fed59d9e5cc3942ea02caab1ae558afc2b04b2f",
    "translatableHash": "sha256:70407eb0086062d4579acb17c8ce79afa16a125f6026edb167b0e91ae7d867b8",
    "data": {
      "schemaVersion": 1,
      "name": "Claim Curse",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "By burning threads of fate around a target and then retying them to yourself instead, you temporarily draw their curse to you and offer them brief succor from the worst of its effects. Choose a curse affecting the target that you don't already have. For 5 minutes, you are affected by the curse (at the same stage as the target, if applicable), and the target isn't. When the duration ends, the curse's effects return to the target as normal.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 creature affected by a curse",
      "area": null,
      "duration": "5 minutes",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:oneiric-mire",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "87zLUuTMmZ9zc7gH",
      "slug": "oneiric-mire",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:3212669e7546893c72a025680d9cfa67fc257997d245ab4228635c95707eb387",
    "translatableHash": "sha256:f0326b6a94f8770babae2d32a70551023956a767bdfb4dd7b5759ba57d88b24a",
    "data": {
      "schemaVersion": 1,
      "name": "Oneiric Mire",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "concentrate",
        "illusion",
        "manipulate",
        "mental",
        "visual"
      ],
      "traditions": [
        "arcane",
        "occult",
        "primal"
      ],
      "description": "You shroud an area in illusory dreamstuff, making the ground look and feel like a deep mire or quicksand. Ground in the area is difficult terrain.\nEach creature in the area when the spell is cast, or that enters the area, must attempt a Will save. On a failure, it believes it's being pulled down by the earth, taking a –10-foot circumstance penalty to its Speeds. On a critical failure, it's also Immobilized. In addition to the normal actions to Escape, at the end of an affected creature's turn, it can attempt a Will save, removing the effects on a success. On a critical success at any Will save made against oneiric mire, the creature fully disbelieves the illusion and no longer needs to make Will saves to risk a Speed penalty or being immobilized, though the area is still difficult terrain.",
      "castingTime": "3 actions",
      "range": "120 feet",
      "target": "",
      "area": "20 burst",
      "duration": "1 minute",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:shadow-projectile",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "8cuqRFB3mWBOgy61",
      "slug": "shadow-projectile",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:cae1141f722ade20c15cb6d0bfd740da6154ad262ab7d3415f975102dfc200f8",
    "translatableHash": "sha256:58f85f3c145bce4523c46fa22fe1c82de3b362de7b1037c6ec720070fbfbf94d",
    "data": {
      "schemaVersion": 1,
      "name": "Shadow Projectile",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "illusion",
        "manipulate",
        "shadow",
        "visual"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "Trigger An ally within 20 feet of you makes a ranged attack roll.\nYou create an illusory duplicate of your ally's ranged attack to confuse your opponents. You launch an illusory double of your ally's projectile or spell at the same target, leaving the enemy unsure which attack to avoid. The target takes 3d8 mental damage, depending on its Will save. Regardless of the result of its save, it's temporarily immune to shadow projectile spells for 1 hour.\nCritical Success The creature is unaffected.\nSuccess The creature is Off-Guard against the triggering attack.\nFailure The creature is off-guard against the triggering attack and takes full damage from your illusory projectile.\nCritical Failure As failure, but double damage.\nHeightened 2 The damage increases by 1d8.",
      "castingTime": "reaction",
      "range": "",
      "target": "",
      "area": null,
      "duration": "",
      "defense": "will save",
      "damage": [
        {
          "formula": "3d8",
          "type": "mental",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The damage increases by 1d8."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:positive-attunement",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "9iJaD4S7ptUeq5vO",
      "slug": "positive-attunement",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:28c741409f47afd54260cab5fe98ff7032d65db407d7678db534b506fd3ad60e",
    "translatableHash": "sha256:41a8761b1803ee01a688c7d751940c4226cabfb0a7c71f5f5de6414066c2cd65",
    "data": {
      "schemaVersion": 1,
      "name": "Positive Attunement",
      "rank": 3,
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
      "description": "You attune a creature to the Forge of Creation, connecting its life force without fully transporting it. The creature's appearance becomes more brightly colored. If the creature is living, it heals 1d8 Hit Points immediately and at the end of each of your turns. Effects that increase healing only increase the initial healing.\nIf the creature is undead or has void healing, it instead takes 1d8 vitality damage, depending on the result of its Will save.\nCritical Success The creature is unaffected.\nSuccess The creature is damaged once and the spell ends.\nFailure The creature is damaged immediately and at the end of each of your turns (so twice in the round you Cast the Spell).\nCritical Failure As failure, and the damage is doubled.\nHeightened 3 The damage and healing each increase by 1d8.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 living or undead creature",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [
        {
          "formula": "1d8",
          "type": "untyped",
          "kind": "healing"
        }
      ],
      "heightening": "Heightened 3 The damage and healing each increase by 1d8."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:organsight",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "bH9cH9aDByY91l1d",
      "slug": "organsight",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:7f7c56c32d59235ee786007f0d977594d1a382ef640e01b9905878f6b19dd612",
    "translatableHash": "sha256:fcdede92d0a305b4d067a5b935d3b0ec7465c76781b973ccbf7063cfe8e50e52",
    "data": {
      "schemaVersion": 1,
      "name": "Organsight",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "revelation"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult",
        "primal"
      ],
      "description": "You see the target as though it's dissected and arrayed before you. For the duration, you gain a +2 circumstance bonus on Medicine checks against the target that depend on its organs, but a -2 circumstance penalty on Medicine checks depending on seeing its skin.\nWhen you Cast the Spell, attempt a special Recall Knowledge check using Medicine to spot and discern a vital organ. If you have a Lore skill appropriate to the creature, you can use that skill instead of Medicine. If you succeed, the next time you deal piercing or slashing damage to the target with a Strike or spell, you deal 4d6 additional precision damage. Once on each of your subsequent turns, you can use a single action to attempt the special Recall Knowledge check again. The extra damage isn't cumulative, so making the check more than once before a Strike or spell has no extra benefit.\nSpell Effect: Organsight\nHeightened 1 The precision damage increases by 1d6.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 living or undead creature that has organs",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 The precision damage increases by 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:warding-aggression",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "CIjj9CU5ekeq1oLT",
      "slug": "warding-aggression",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:c601c1f11436c69a823ffe1a00690486fdf44d84a5559d8d7630af5e8158fc36",
    "translatableHash": "sha256:171a17a075657e9e9c6534a451b95037d26f42cfae4fa80ecd3c04aa779b2833",
    "data": {
      "schemaVersion": 1,
      "name": "Warding Aggression",
      "rank": 3,
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
      "description": "You channel a magical ward through your attack and attempt to plant it on a foe. This ward increases your defenses against that foe, as long as you keep attacking that foe to maintain it. Make a melee Strike with a weapon or unarmed attack against a foe. In addition to the normal effects of the Strike, it has the effects below. Warding aggression ends if the foe you attacked dies or at the end of any turn in which you didn't hit that foe with a melee Strike.\nCritical Success You gain a +3 status bonus to AC against the foe for 1 round and a +2 status bonus to AC against the foe for the remaining duration.\nSuccess You gain a +2 status bonus to AC against the foe.\nFailure You gain a +1 status bonus to AC against the foe.\nCritical Failure You gain no additional effect.\nSpell Effect: Warding Aggression",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "up to 1 minute",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:roaring-applause",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "czO0wbT1i320gcu9",
      "slug": "roaring-applause",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/roaring-applause.webp"
    },
    "sourceHash": "sha256:ba872b0b8c3c5250559e99a55b87a47ef2910d174feb85332b6212ff3129d832",
    "translatableHash": "sha256:e78c3b28d648f5163b3b01e7adfa3a9240844da02c3ee595ee47f8cb4c49789f",
    "data": {
      "schemaVersion": 1,
      "name": "Roaring Applause",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "concentrate",
        "emotion",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult"
      ],
      "description": "Your flamboyant flourish invokes such powerful feelings in your audience that you incite cheers and applause. Targets of this spell must be able to see, hear, or otherwise understand you. The targets must attempt a Will save.\nCritical Success The target is unaffected.\nSuccess The target becomes mildly distracted by your display and applauds while it isn't fully occupied. It can't use reactions.\nFailure The target applauds you so vigorously that it can't use reactions and is Slowed 1. The applause is so involved that it has the manipulate trait. This triggers reactions based on the manipulate trait at the start of the target's turn.\nCritical Failure As failure, plus the target is so distracted by its vigorous applauding of you that it's Fascinated with you.\nHeightened (6th) You can target up to 10 creatures.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "1 creature",
      "area": null,
      "duration": "sustained",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened (6th) You can target up to 10 creatures."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:bottomless-stomach",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "F9mA2Bg27QKniIdv",
      "slug": "bottomless-stomach",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:5e7fa4b515c50d3a027a4e0f98ed84c62a08c0940c791d7c880450bf08e3b743",
    "translatableHash": "sha256:026a7a1c1311fa9b5a8767dbb38cd17112965e7b0249773533752d9e54489cba",
    "data": {
      "schemaVersion": 1,
      "name": "Bottomless Stomach",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "concentrate",
        "extradimensional",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult",
        "primal"
      ],
      "description": "You create a shimmering extradimensional space accessible from the target's mouth. The space can hold objects and equipment, up to a total of 10 Bulk. This extradimensional storage doesn't hamper the target's ability to eat, drink, speak (if applicable), or otherwise act, as it only opens and closes when the target chooses.\nThe target can Interact to swallow an object of up to 1 Bulk, which doesn't harm the object or the target. If the extradimensional space is full, the target can't add any more objects until first removing one or more stored objects. Organic matter and living creatures can't be stored in this space. The extradimensional storage is obvious to any creature who looks into the target's mouth, as the entryway shimmers slightly, though this doesn't clearly reveal the contents inside.\nThe target can Interact to spit out a single object of its choice, causing the object to fall to the ground in the target's space. The target can Interact three times in a row to spit out the entire contents of its extradimensional storage; the target doesn't have to take these actions all in the same turn, but if it takes any other actions in between, it has to start over. The items eject into the target's space, possibly spilling out into adjacent spaces if there is too much to fit.\nWhen the spell ends or the target falls unconscious, the contents of the extradimensional storage are disgorged in a riotous spew, landing in the nearest unoccupied space, a bit wet but otherwise unharmed.\nHeightened (5th) The duration increases to 8 hours",
      "castingTime": "3 actions",
      "range": "touch",
      "target": "1 willing creature",
      "area": null,
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (5th) The duration increases to 8 hours"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:mind-of-menace",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "fPlFRu4dp09qJs3K",
      "slug": "mind-of-menace",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:f7fc6246601f7c8af32ca80636e511e41aac52034c8f0c1ac454bc2895b57c20",
    "translatableHash": "sha256:c4b9c0f7437aaab0fda4cae46e870e11acbb8d51b51b61dbb953f4b0b7041356",
    "data": {
      "schemaVersion": 1,
      "name": "Mind of Menace",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "concentrate",
        "contingency",
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
      "description": "This spell wards against those who attempt to subvert your mind and turns mental magic back on them. When the spell is complete, you gain the Fight with Fear reaction; once you use the reaction, the spell ends.\nSpell Effect: Mind of Menace",
      "castingTime": "10 minutes",
      "range": "",
      "target": "",
      "area": null,
      "duration": "24 hours",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:envenom-companion",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "gWmLT5SkA0qH2mNE",
      "slug": "envenom-companion",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:5965e6011546dab93af71f604bfcf0e7672f94ee41ed3cf8f2e748194b15b8a2",
    "translatableHash": "sha256:a01a2d99f1bc7361f7b15a1fc8a8b91105ac434d69e0b75880024974a2c21cfd",
    "data": {
      "schemaVersion": 1,
      "name": "Envenom Companion",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "poison"
      ],
      "traditions": [
        "primal"
      ],
      "description": "You envenom your companion or eidolon's attacks, which drip with highly toxic venom for the spell's duration. The first time each round the target hits a creature with an unarmed Strike that deals piercing or slashing damage, that Strike deals an additional 1d8 poison damage. A creature that is damaged by this poison must attempt a Fortitude save. On a failure, it's also Clumsy 1 for 1 round. This spell can't target familiars.\nSpell Effect: Envenom Companion\nHeightened 3 The poison damage increases by 1d8 and the clumsy value imposed on a failed save increases by 1.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "your companion or eidolon",
      "area": null,
      "duration": "1 minute",
      "defense": "fortitude save",
      "damage": [],
      "heightening": "Heightened 3 The poison damage increases by 1d8 and the clumsy value imposed on a failed save increases by 1."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:sudden-recollection",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "h5cMTygLpjY3IEF0",
      "slug": "sudden-recollection",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:f65457180eeb0a99b23f5c5ca2c4f6e79ab4ab023cd91d975b0cd9ab40aa68e7",
    "translatableHash": "sha256:a0d4456f990e360a452fbd1f6f06cfdfcb4510c34f7740459e80f822378bedf3",
    "data": {
      "schemaVersion": 1,
      "name": "Sudden Recollection",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "occult"
      ],
      "description": "You place a bit of knowledge deep in a creature's subconscious or make a willing creature forget some information until a specific trigger occurs. The target gets a Will saving throw to resist the effect. A willing creature can choose to fail its save.\nCritical Success The target is unaffected and realizes you tried to alter its memory.\nSuccess The target is unaffected but thinks your spell was something harmless instead of sudden recollection, unless it identifies the spell.\nFailure You choose a piece of information the target didn't already know and create a trigger, such as seeing an object, hearing a key phrase, or witnessing an event. As soon as the target experiences the trigger, it receives the information and the spell ends. If the target was willing, you can instead choose a piece of information the target already knew and suppress its memory of that information until it experiences the trigger, after which it recovers the information and the spell ends.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "unlimited",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:life-connection",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "HIY4XUJZKmFLAJTn",
      "slug": "life-connection",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:15ef2cf02db051fd5b530240d148506c14dbf5227125c092e471aaf8ebc7009e",
    "translatableHash": "sha256:b32e783fa2937027c5a895c953039fbe5ed84a90640f12b3e48a0980df0e328b",
    "data": {
      "schemaVersion": 1,
      "name": "Life Connection",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "concentrate",
        "contingency",
        "manipulate"
      ],
      "traditions": [
        "divine",
        "primal"
      ],
      "description": "When you cast this spell, you place a failsafe deep within the life force of the target. You can sense when the target takes damage, provided you're within 1 mile of one another. A creature can be part of no more than one life connection simultaneously. When the spell is complete, you gain the Defend Life reaction; once you use the reaction, the spell ends.\nSpell Effect: Life Connection",
      "castingTime": "10 minutes",
      "range": "touch",
      "target": "1 living creature",
      "area": null,
      "duration": "24 hours",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:distracting-chatter",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "JHntYF0SbaWKq7wR",
      "slug": "distracting-chatter",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:99ea222f2a7d8bb5509f33aad9522a60ed20a53d8a4fa9032081dca3e47aa2d6",
    "translatableHash": "sha256:d5c8821fdd7f920cb8db9604910293e847e7224204660bf665a611bb8ba70d0f",
    "data": {
      "schemaVersion": 1,
      "name": "Distracting Chatter",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "auditory",
        "concentrate",
        "illusion",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You bombard a target with distracting auditory illusions, surrounding them with a tumultuous cacophony of overlapping speech, whispers, screams, and muttering. The target is Off-Guard, takes a -2 status penalty to purely auditory Perception checks, and must succeed at a check (flat, dc:5) to use auditory abilities or verbal spell components. Similarly, a creature who attempts to affect the target with an auditory effect must succeed at a check (flat, dc:5) or the attempt fails. The duration depends on the target's Will save.\nCritical Success The creature is unaffected.\nSuccess The duration is 1 round.\nFailure The duration is 3 rounds.\nCritical Failure The duration is 1 minute.\nHeightened (7th) You can target up to five creatures.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "varies",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened (7th) You can target up to five creatures."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:blazing-dive",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "KEkPxx7Sm6Xf4W3s",
      "slug": "blazing-dive",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:998b959b50a6cd694942209f5837d25e06c6bd363acb3f3e5fd135449d55560f",
    "translatableHash": "sha256:6baa11dbfa1980e5ffdc6e80c426c8bcbe036f13edee548e01b1945fe85f06f6",
    "data": {
      "schemaVersion": 1,
      "name": "Blazing Dive",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "air",
        "concentrate",
        "fire",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "Superheated air collects under you, buoying you high into the sky before you plummet back down in a fiery comet. You Fly 15 feet straight up into the air, then Fly in a straight line to an empty space of your choice on the ground within 60 feet. When you land, the blistering air blasts out from you, dealing 3d4 bludgeoning damage and 3d6 fire damage (basic Reflex save) to all creatures in a 10-foot emanation.\nHeightened 1 The damage increases by 1d4 bludgeoning and 1d6 fire.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "10 emanation",
      "duration": "",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "3d4",
          "type": "bludgeoning",
          "kind": "damage"
        },
        {
          "formula": "3d6",
          "type": "fire",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 1d4 bludgeoning and 1d6 fire."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:days-weight",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Llx0xKvtu8S4z6TI",
      "slug": "days-weight",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:9a4c7d795c96796f8713a03907270d499b9bac5f8dd201ab1e14893e5cbc7197",
    "translatableHash": "sha256:b744cece82577ef6cd90a13344adad0e66c7179470e9dcad87de214b9114cfe4",
    "data": {
      "schemaVersion": 1,
      "name": "Day's Weight",
      "rank": 3,
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
      "description": "You fast-forward time for a single creature, burdening it with the aches and pain of an entire day and making it temporarily tired and weak. The creature must attempt a Fortitude save.\nCritical Success The target is unaffected.\nSuccess The target is Fatigued and Enfeebled 1 for 1 round.\nFailure The target is fatigued and enfeebled 1 for the duration.\nCritical Failure The target is fatigued and Enfeebled 2 for the duration. The fatigued condition doesn't end when the spell's duration does (but can still be removed with a night's rest or by similar means).\nHeightened (6th) You can target up to 10 creatures.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "1 living creature",
      "area": null,
      "duration": "1 minute",
      "defense": "fortitude save",
      "damage": [],
      "heightening": "Heightened (6th) You can target up to 10 creatures."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:wall-of-water",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "LNOwaJAkCfsgTKgV",
      "slug": "wall-of-water",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:4ff47b3af7bc16dc076e77c832b09da5e9766ed2e6012ac9665dd62078e51a2f",
    "translatableHash": "sha256:2ef566e3c80a9f317f1749e79c920010f9ee95ba800b7862dd5cc415c7a80ee5",
    "data": {
      "schemaVersion": 1,
      "name": "Wall of Water",
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
      "description": "Raising your hand in the air, you call a massive wave onto the battlefield. The wall stays upright in a straight line that is 60 feet long, 10 feet high, and 5 feet thick.\nAny non-magical fires within the wall of water's area that are its size or smaller are put out instantly. It also attempts to counteract any magical fires in its area. Both of these effects happen when the spell is cast and whenever a fire enters the wall's area. If the wall fails to counteract a given fire, it can't counteract that fire for the duration of the spell.\nBludgeoning or slashing projectiles can't pass through the wall, and piercing projectiles have their range increments halved if they pass through the wall. A creature traversing the wall of water needs to Swim through. The rules of aquatic combat apply to creatures traversing the wall of water, targeting creatures within the wall, or passing through the wall. For instance, a bludgeoning or slashing melee attack targeting a creature in the wall would take a -2 circumstance penalty.",
      "castingTime": "3 actions",
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
    "contentId": "pf2e:spell:spells-srd:shift-blame",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "lONs4r14LEBZRLLw",
      "slug": "shift-blame",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/shift-blame.webp"
    },
    "sourceHash": "sha256:4f93cf7eeb8e979732e36b662f196637bff4cb3293dd21c2c4209aea2a940774",
    "translatableHash": "sha256:14c4f1f75138fe960c6289de2d4915eb43977ef47710385eab1ed54c6b4e30e1",
    "data": {
      "schemaVersion": 1,
      "name": "Shift Blame",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "concentrate",
        "mental"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "Trigger You or another creature attacks a creature or fails at a Deception, Diplomacy, or Intimidation check.\nYou alter the target's memories of the triggering event as they form. You choose another creature (which can be you) with the capacity to make the triggering attack or skill check, and you alter the target's memories to recall the creature you chose as responsible for the triggering attack or skill check. The target must attempt a Will save and is then temporarily immune for 24 hours.\nCritical Success The target knows you attempted to alter its memories.\nSuccess The target doesn't realize you attempted to alter its memories, though it knows you cast a spell.\nFailure You successfully alter the target's memory. It isn't forced to react to the new memories in a particular way, and it's likely to question them if they contradict other information it knows or are implausible for the situation.",
      "castingTime": "reaction",
      "range": "30 feet",
      "target": "the target of the triggering attack or skill check",
      "area": null,
      "duration": "",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:phantom-prison",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Pwq6T7xpfAJXV5aj",
      "slug": "phantom-prison",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:c143f2cf6fd02e1130d7f5a541f4838412f8c29c5fc8fc9be64851ce214bc419",
    "translatableHash": "sha256:f27f4739542f1a71dda519821da97779193d1e59acf925f271f9a440210ad230",
    "data": {
      "schemaVersion": 1,
      "name": "Phantom Prison",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "concentrate",
        "illusion",
        "incapacitation",
        "manipulate",
        "mental",
        "visual"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You completely surround a Large or smaller creature in immobile illusory walls, trapping it inside a false prison it can't escape. No other creatures see or feel these walls, and the target can't see anything outside of the illusory walls. The target can attempt a Will save when the spell is cast, each time it attempts to interact with or escape the walls, and each time something from outside the walls affects the target. On a success, it disbelieves the illusion and the spell ends.\nHeightened (8th) You can target up to 5 creatures.",
      "castingTime": "3 actions",
      "range": "50 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened (8th) You can target up to 5 creatures."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:time-jump",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "qJGW6BbIcU6sfA1d",
      "slug": "time-jump",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/time-jump.webp"
    },
    "sourceHash": "sha256:9e1b197ac07fab40e9893c43b91057c953e572101abbd21623c81f6976859b74",
    "translatableHash": "sha256:2408e25111a1147807327de41b7bcbbdd9f29fbeff681de927a0f5ec8dd4a5fb",
    "data": {
      "schemaVersion": 1,
      "name": "Time Jump",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "concentrate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You leap forward a few seconds in time, appearing across the battlefield in the blink of an eye. You gain 2 actions, each of which must be used to Leap, Stand, Step, or Stride. If you have an appropriate Speed, you can add Burrow, Climb, Fly, or Swim to this list. While you take these actions, time pauses. All other creatures are completely unaware of your actions, can't speak, and can't use any actions that would be triggered by your movement.\nWhile you're taking these actions, you can't take any other actions, including any that would be triggered by the move actions. Once the actions are complete, time starts again, and to onlookers, you seem to have suddenly teleported across the distance you traveled. Leaping forward through time is disorienting, so if you use time jump again within 1 minute of using the spell, you become Stupefied 4 for 1 minute.",
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
    "contentId": "pf2e:spell:spells-srd:impending-doom",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "rfFZKfeCSweFv7P3",
      "slug": "impending-doom",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:c836e2fabe626c0cc3db4348b7afac126cb668b3d3d3cc31a102f4dc7ffc78d0",
    "translatableHash": "sha256:afe53539f7fa696bf510f71d38057bdc5795fc659722b6c28f5403ae0a124078",
    "data": {
      "schemaVersion": 1,
      "name": "Impending Doom",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "concentrate",
        "emotion",
        "fear",
        "incapacitation",
        "manipulate",
        "mental",
        "prediction"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult"
      ],
      "description": "You sift through myriad potential futures, seize upon one potential moment in which the target meets a particularly gruesome and fatal end, and then show it a vision of its impending demise. The intense mental vision grows more and more terrifying to the target as the doom grows closer, and it takes 3 rounds to reach its conclusion. The target must attempt a Will saving throw to determine the effects. At the end of the spell's duration, if the target was affected, the target witnesses its death and takes 6d6 mental damage.\nCritical Success The creature is unaffected.\nSuccess The creature is unaffected for 1 round. On the second round, it becomes Off-Guard. Finally, on the third round, it becomes Frightened 1. At the end of the third round, it takes half damage.\nFailure The creature is immediately off-guard. On the second round, it becomes Frightened 2. Finally, on the third round, it also becomes Stunned 1. At the end of the third round, the creature takes full damage.\nCritical Failure The creature is immediately off-guard and Frightened 3. On the second round, it becomes stunned 1. Finally, on the third round, it also becomes Paralyzed. At the end of the third round, the creature takes double damage.\nHeightened 1 The damage increases by 2d6.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 living creature",
      "area": null,
      "duration": "3 round",
      "defense": "will save",
      "damage": [
        {
          "formula": "6d6",
          "type": "mental",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:web-of-eyes",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "XQSPJHOf3TyfqvgS",
      "slug": "web-of-eyes",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/web-of-eyes.webp"
    },
    "sourceHash": "sha256:092b89d8e4936bc462e1023c7bd944de23130b8d1860a6a22d8d4d818272e75b",
    "translatableHash": "sha256:0de7c18e3eeedf02c082f71396dda941748865562fc0a90bee6b7aa827bf1506",
    "data": {
      "schemaVersion": 1,
      "name": "Web of Eyes",
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
      "description": "You place an Invisible scrying sensor on each target just above their eyes. Each sensor looks where that target looks, and all the targets can link their vision briefly to help notice things one target sees but the others might not. Each target can use an action, which has the concentrate trait, to share what it sees with any number of other targets until the start of its next turn. Only one creature can share its vision at a time, so if another target takes this action, the effect ends for any target that was previously sharing its vision.\nThis improves how well the recipients can perceive anything the sharing creature is looking at. For instance, if a creature is undetected to a recipient but observed by the sharing creature, the creature becomes observed by the recipient as well. Typically, the creature is seen as a glowing outline superimposed on its position. This might allow the recipient to target a creature it couldn't otherwise; however, cover and line of effect still might prevent or impede targeting and attacks. This can only improve the recipient's vision, not reduce it; for example, if an enemy was undetected by the sharing creature and observed by a recipient, the recipient would still clearly observe the enemy.\nOnce the vision sharing stops, the benefit ends. Whether a creature is hidden or undetected is still based on the last information a target had before the vision sharing ended. For example, that means if a creature is behind a wall but hasn't moved, it's still hidden rather than undetected by a recipient that witnessed its current position.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "up to 5 willing creatures",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:tortoise-and-the-hare",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "1NLMPmyCB2MBoCuR",
      "slug": "tortoise-and-the-hare",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/tortoise-and-the-hare.webp"
    },
    "sourceHash": "sha256:adffbd632f225391acddf96f5ad9e00e0abd0b6f455d63b3717b763044ea4dae",
    "translatableHash": "sha256:6f78b9289237020832d5687eee151dc681d0d62c8dcea3db7bb8816aaafad113",
    "data": {
      "schemaVersion": 1,
      "name": "Tortoise and the Hare",
      "rank": 4,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "occult",
        "primal"
      ],
      "description": "You prove that slow and steady doesn't always win the race by turning a foe into a proverbial tortoise and yourself or an ally into a hare, siphoning some of the foe's speed and granting it to the other target. The effects depend on the foe's Fortitude save.\nCritical Success The targets are unaffected.\nSuccess The foe is Slowed 1 for 1 round, and the other target is unaffected.\nFailure The foe is slowed 1 for 3 rounds and the other target is Quickened for 1 round. It can use the extra action to Step, Stride, or Strike.\nCritical Failure The foe is slowed 1 for 3 minutes and the other target is quickened for 1 minute. It can use the extra action to Step, Stride, or Strike.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 foe, and either yourself or 1 ally",
      "area": null,
      "duration": "",
      "defense": "fortitude save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:compel-true-name",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "53Kw9WQtvrEtABEu",
      "slug": "compel-true-name",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:b7f3c1ed17da2f52ec1f821e15cf72f8d74b170f469a722855877d51de13f2f0",
    "translatableHash": "sha256:9b26c6174153a25550a28b4ba59a0dcd497d0c3a47ac7acd1fba0285b545d61c",
    "data": {
      "schemaVersion": 1,
      "name": "Compel True Name",
      "rank": 4,
      "rarity": "rare",
      "traits": [
        "auditory",
        "concentrate",
        "incapacitation",
        "linguistic",
        "mental",
        "true-name"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult",
        "primal"
      ],
      "description": "You instruct the target to do something, compelling obedience by calling it by its true name. Your instructions can't be self-destructive. Though this spell has the linguistic trait, this applies only to the instructions; the creature doesn't need to know its own true name to be affected. The target must attempt a Will saving throw.\nCritical Success The target is unaffected, is temporarily immune to further castings of this spell by you for 1 week, and learns your true name.\nSuccess The target is unaffected, is temporarily immune to further castings of this spell by you for 1 day, and learns a fragment of your true name.\nFailure The target does as you command. The spell has a duration of 10 minutes, or until the target has completed a finite instruction or the instructions become selfdestructive. The creature is temporarily immune to further castings of this spell by you for 1 hour.\nCritical Failure As failure, but the spell's duration is 8 hours, and the creature is not temporarily immune.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature whose true name you know",
      "area": null,
      "duration": "varies",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:sanguine-mist",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "5zeSxzDxMSr0wgSF",
      "slug": "sanguine-mist",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/sanguine-mist.webp"
    },
    "sourceHash": "sha256:9fa199ac9fb69ef76efdc1e292303377da21297b3a5873187f667bd41e198a4e",
    "translatableHash": "sha256:ea34a0bbe591179bfc988eca5eb23c3260a53ec9216b833845ea637290548839",
    "data": {
      "schemaVersion": 1,
      "name": "Sanguine Mist",
      "rank": 4,
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
        "occult"
      ],
      "description": "You unleash a cloud of foul, blood-sucking fog that drains the vitality from the living to bolster your own. Each living creature in the area when you Cast the Spell, aside from you, takes 6d6 void damage with a basic Fortitude save. Creatures in the area are Concealed, and all creatures outside the cloud become concealed to creatures within it.\nThe first time each round you Sustain this Spell on subsequent turns, living creatures in the area take an additional 2d6 void damage with another basic Fortitude save. You also gain temporary Hit Points equal to half the damage a single creature took when you Sustained the spell this turn; calculate these temporary Hit Points using the creature that took the most damage. You lose any remaining temporary Hit Points after 1 minute.\nHeightened 1 The initial damage increases by 2d6 and the secondary damage increases by 1d6.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "",
      "area": "10 burst",
      "duration": "1 minute",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "6d6",
          "type": "void",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The initial damage increases by 2d6 and the secondary damage increases by 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:mirrors-misfortune",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "A7w3YQBrFNH8KYsB",
      "slug": "mirrors-misfortune",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:4d255f92a9801f59fe29b4e784639af72a833e6dadee772067687aefbf1a6124",
    "translatableHash": "sha256:27e170d0ac8ebdadbcea29c3cb12c1e6a6b32a77d9402dba0136716d6ae8a25d",
    "data": {
      "schemaVersion": 1,
      "name": "Mirror's Misfortune",
      "rank": 4,
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
      "description": "You split into your real self and a mirrored version of yourself that curses would-be attackers with misfortune on their next attacks. When you cast this spell, you seem to split in two. As you do, you can Step to any adjacent square. In either your initial square, or another square adjacent to your initial square, an exact illusory duplicate of you appears. You decide a simple course of action for the duplicate to follow, such as to walk to a specific point or wave its hands in the air, but more complex routines are beyond its abilities. A creature can distinguish between you and the duplicate only if it spends an action to Seek and succeeds at a Perception check against the spell's DC.\nIf a creature takes a hostile action against the duplicate, the illusion shatters into mirrorlike shards, inflicting bad luck on the attacker's next few attacks as misfortune's toll for shattering the mirror. The attacker must attempt a Will save with the following effects; this is a curse and misfortune effect. When the duplicate shatters, the spell ends.\nSuccess The creature is unaffected.\nFailure Within the next hour, the creature must roll its next two attack rolls twice and take the lower result.\nCritical Failure Within the next hour, the creature must roll its next four attack rolls twice and take the lower result.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:invisibility-curtain",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "a8xXWCQhIR7o6IvP",
      "slug": "invisibility-curtain",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:76b8457ffb617808c1810c31770701888fdc10626a68ad0e0479878c874fdfb6",
    "translatableHash": "sha256:36891c864acbb24455f31e68a16784ad8abff3fd0c89759635a1b8cc73b7833d",
    "data": {
      "schemaVersion": 1,
      "name": "Invisibility Curtain",
      "rank": 4,
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
      "description": "You create a transparent invisible wall that makes any creatures on one side of the wall invisible to those on the other side. You choose which side of the wall provides invisibility to the creatures on that side when you cast the spell. You create either a 1-inch-thick wall in a straight line up to 60 feet long and 10 feet high or a 1-inch-thick, 10-foot-radius ring with the same height. The wall is intangible and stands vertically in either of the two forms. If you wish to do so, you can create the wall with a shorter length or height, or with a smaller radius. Any creature that crosses the wall becomes visible or invisible as appropriate, and it's visible if any portion of it is on the visible side of the wall. If a creature rendered invisible by the wall takes a hostile action, the spell ends after the hostile action is completed.\nHeightened (7th) The spell doesn't end if an invisible creature takes a hostile action.",
      "castingTime": "3 actions",
      "range": "120 feet",
      "target": "",
      "area": null,
      "duration": "sustained",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (7th) The spell doesn't end if an invisible creature takes a hostile action."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:variable-gravity",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "DcmWrD0V5PWQQyDm",
      "slug": "variable-gravity",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:e180c56724b230afabf0867671ec4908e71f08b93db3d7ff4f80f13946caac01",
    "translatableHash": "sha256:26e9814ea1b5e938ad5c6b66431df9915c8a2e9475ac2b621437462a775b1971",
    "data": {
      "schemaVersion": 1,
      "name": "Variable Gravity",
      "rank": 4,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You can adjust how strongly gravity grips you, changing between low gravity, normal gravity, and high gravity with ease. Choose one type of gravity when you cast the spell. While the spell lasts, you can change the type of gravity with a single action, which has the concentrate trait. The spell doesn't alter your physical appearance, so it's impossible to what type of gravity you're subjected to by casual observation.\n• Low Gravity You can jump double the normal distance when you Long Jump or Leap, though still to a maximum of your Speed. When you High Jump, you can use the calculation for a Long Jump but don't double the distance. Rather than the normal calculation for falling damage, when you fall, you take no damage for the first 10 feet and then take bludgeoning damage equal to a quarter of the remaining distance you fell. Abilities that adjust how much falling damage you take still apply.\n• High Gravity You become Encumbered. You gain a +2 status bonus to your saving throws and DCs to resist forced movement and attempts to knock you Prone. You reduce the distance forced movement moves you by half or 10 feet, whichever is more. You can only jump half as high and far. Rather than the normal calculation for falling damage, you take bludgeoning damage equal to the distance you fall. Abilities that adjust how much falling damage you take still apply. Spell Effect: Variable Gravity (High Gravity)\nHeightened (6th) The duration increases to 1 hour.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "5 minutes",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (6th) The duration increases to 1 hour."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:winning-streak",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "EGTTGI1pkmsVPqHp",
      "slug": "winning-streak",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:4da12264222a21b1d3ba8a93ee9416f81287bedf50e0876eb80074b4408bf234",
    "translatableHash": "sha256:fecfb95ca44d4cb9cb85d4ec4c1b7f1ee4fc6dc6c2a0175d00b33a7667077a78",
    "data": {
      "schemaVersion": 1,
      "name": "Winning Streak",
      "rank": 4,
      "rarity": "common",
      "traits": [
        "concentrate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "The target is energized by its good fortune as it spreads to others-as long as they keep winning. It gains the Quickened condition for 1 round. If the target or one of their allies within 20 feet gets a critical success on an attack roll against a significant foe, whoever got the critical success becomes quickened if they weren't already, and the duration of the winning streak is extended by another round. Creatures quickened by the spell can use the extra action to Strike, Step, or Stride. If a full round passes without the target or one their allies critically succeeding on an attack roll against a significant foe, the winning streak breaks and the spell ends.",
      "castingTime": "1 action",
      "range": "20 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 round (see text)",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:ravenous-portal",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ER1LOEgCLtmEKd05",
      "slug": "ravenous-portal",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:a4619e548e0cee232dc80a8838db750c77a16e3118ab766afbd7cbea7c72e82e",
    "translatableHash": "sha256:32bead2e9c579569f66867d865b5811c67ff4e9192dfabeb92b671e6aaaf8d00",
    "data": {
      "schemaVersion": 1,
      "name": "Ravenous Portal",
      "rank": 4,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You place a ward upon the door that triggers when a creature attempts to open, unlock, or destroy the door. When that happens, the door transforms into a Mimic that can't move and is hostile to all creatures. When Casting the Spell, you designate yourself and up to 10 other creatures of your choice; these creatures don't trigger the ward, and the mimic is helpful to them instead of hostile. No effect can move the mimic unless it's also capable of moving the entire door. Once the door transforms into a mimic, it attacks creatures in its reach for up to 1 minute, and then the spell ends. If the mimic is killed before that time, the spell ends and the door returns to its normal form.\nWhile turned into a mimic, the door can't be opened, unlocked, or bypassed-not even by the designated creatures. It's a creature, not a door, during that time. When the spell ends, the door returns to the state it was in before the ward was triggered.",
      "castingTime": "3 actions",
      "range": "30 feet",
      "target": "1 door no more than 10 feet tall and 5 feet wide",
      "area": null,
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:magic-mailbox",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "f9duI5d8xNYqxI8d",
      "slug": "magic-mailbox",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:35c99e31ad9662899d2cfe41d8f41cdb7204740b02c7f7ca9baceadd8c12be56",
    "translatableHash": "sha256:4a1579cb764395e9479c868204db48f0f581e4dc1d58f2a79784784a636a4b38",
    "data": {
      "schemaVersion": 1,
      "name": "Magic Mailbox",
      "rank": 4,
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
      "description": "You create an interdimensional link between two containers, both of which must be capable of being closed in such a way that their contents aren't visible. If both containers are left closed for 10 consecutive minutes, the contents of each one, totaling no more than 3 Bulk of nonliving, non-magical material per container, transport to the other's location.\nIf a container's contents total more than 3 Bulk, the transport fails. If either container is opened before the full 10 minutes have elapsed, the contents appear as they did when the containers were closed, and the process starts anew as soon as both containers have been closed. After the contents of the containers successfully swap, they can't swap again until after both containers have been opened at least once. Both containers must be located on the same plane for the process to function; if this ceases to be the case or if something else disrupts the effect during an active transposition, the process halts as if one of the containers had been opened.",
      "castingTime": "1 hour",
      "range": "touch",
      "target": "2 containers, each no larger than 5 feet in any dimension",
      "area": null,
      "duration": "until your next daily preparations",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:soothing-spring",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "fH08MI4KP0KH2EQ9",
      "slug": "soothing-spring",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:b745798ed21f449ce72fe20c789749212a54e7cf0603d377e0a86f43bbaa808f",
    "translatableHash": "sha256:296c96c28b06a57f0b21037999017d6fd0a11fdba3320c60b9552285f375fed1",
    "data": {
      "schemaVersion": 1,
      "name": "Soothing Spring",
      "rank": 4,
      "rarity": "common",
      "traits": [
        "concentrate",
        "healing",
        "manipulate",
        "vitality",
        "water"
      ],
      "traditions": [
        "divine",
        "primal"
      ],
      "description": "Steam wisps into the air as a stone-lined pool appears in the ground and fills with hot water that bubbles up from the earth. The water is comfortably hot and smells mildly sulfurous in a not-unpleasant way. You are able to draw out the full energizing potential of the mineral-rich water. Any creature that spends the full hour soaking in the hot spring or basking in the mud from the bottom of the pit regains 10d8 Hit Points and feels refreshed, losing the fatigued condition. As normal for effects that remove fatigue, this doesn't remove any underlying source of fatigue, such as lack of sleep, causing the condition to return if the underlying source isn't addressed.\nThe pool is 20 feet on each side, and it's 5 feet deep. It can contain 16 Medium or smaller creatures at a time. A Large creature counts as eight Medium creatures and a Huge creature fills the entire pool. This pool has the structure trait and the same restrictions as magic items that create structures.\nHeightened 1 The healing increases by 2d8.",
      "castingTime": "1 minute",
      "range": "30 feet",
      "target": "",
      "area": null,
      "duration": "1 hour",
      "defense": null,
      "damage": [
        {
          "formula": "10d8",
          "type": "vitality",
          "kind": "healing"
        }
      ],
      "heightening": "Heightened 1 The healing increases by 2d8."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:spiritual-attunement",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "GjmMFEJcDd6MDG2P",
      "slug": "spiritual-attunement",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:0378b323f06a1b54ee72511b4bbfd2c5869f6c044f1735192c389a10f3cb15f8",
    "translatableHash": "sha256:427d08f3015812e698ba10c49dfa22768d2e0e4f0293b0f4670c82c89f4976d5",
    "data": {
      "schemaVersion": 1,
      "name": "Spiritual Attunement",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "manipulate"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "You attune yourself to a spiritual plane of the Outer Sphere, connecting your spirit without fully transporting to it. Your Strikes and spells gain the alignment traits of the plane you chose, which deals additional damage to creatures with a weakness to either of those alignment traits. Furthermore, the plane protects you from energy of the alignments that oppose the plane. You gain resistance 5 to damage of the alignments that oppose those of your chosen plane. For example, if you chose Heaven, your Strikes would gain the good and lawful traits, and you would gain resistance to chaotic and evil. If you choose the Boneyard, the resistance is to vitality and void damage instead.\nHeightened 2 The resistance increases by 5.\nThe nine main planes of the Outer Sphere are the homes of many deities, celestials, monitors, and fiends. Their names, along with their alignments, are: Heaven (LG), Nirvana (NG), Elysium (CG), Axis (LN), the Boneyard (N), the Maelstrom (CN), Hell (LE), Abaddon (NE), and the Abyss (CE).",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 2 The resistance increases by 5.\nThe nine main planes of the Outer Sphere are the homes of many deities, celestials, monitors, and fiends. Their names, along with their alignments, are: Heaven (LG), Nirvana (NG), Elysium (CG), Axis (LN), the Boneyard (N), the Maelstrom (CN), Hell (LE), Abaddon (NE), and the Abyss (CE)."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:coral-eruption",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "h7RtKSKGViNtD5o4",
      "slug": "coral-eruption",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:4e310e972bfb2deb0714a02e8bc196a7fc69ce3f219472f1b860de2f6cfc6a36",
    "translatableHash": "sha256:2f90f4ece740f54df497de9c3511c0c4982188a34d44949e78b03c18245fc77b",
    "data": {
      "schemaVersion": 1,
      "name": "Coral Eruption",
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
      "description": "Area two 10-foot bursts that don't overlap\nRazor sharp coral growths erupt from the ground, transforming the landscape into a dangerous coral reef. You can create a third nonoverlapping burst if the centers of all three bursts are underwater. Creatures in the area when the spell is cast take 6d6 piercing damage and must attempt a basic Reflex save. A creature that critically fails its saving throw also takes 1d6 persistent bleed damage. The area becomes difficult terrain and hazardous terrain. A creature that moves through the area takes 3 piercing damage for every square of that area it moves into.\nHeightened 2 The initial piercing damage increases by 3d6, and the hazardous terrain damage increases by 1.",
      "castingTime": "3 actions",
      "range": "120 feet",
      "target": "",
      "area": "10 burst",
      "duration": "1 minute",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "6d6",
          "type": "piercing",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The initial piercing damage increases by 3d6, and the hazardous terrain damage increases by 1."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:chromatic-ray",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Hb8GdAhP0zBCv3zU",
      "slug": "chromatic-ray",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:17af9c57c375d49ce68018765477e0b28bcd12b1648d3df9c365a7d2f0d5d0ed",
    "translatableHash": "sha256:41da25d94c30da2d866926531303019c981fb766355912e6b7cd904680d2406b",
    "data": {
      "schemaVersion": 1,
      "name": "Chromatic Ray",
      "rank": 4,
      "rarity": "common",
      "traits": [
        "attack",
        "concentrate",
        "light",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You send out a ray of colored light streaming toward your enemy, with a magical effect depending on the ray's color. Make a spell attack roll. If you hit, roll 1d4 to see which beam you cast. If the ray deals damage, that damage is doubled on a critical hit. Any additional traits that apply to a ray are listed in parentheses just after the name of the color.\n• Red (fire) The ray deals 30 fire damage to the target.\n• Orange (acid) The ray deals 40 acid damage to the target.\n• Yellow (electricity) The ray deals 50 electricity damage to the target.\n• Green (poison) The ray deals 25 poison damage to the target, and the target must succeed at a Fortitude save or be Enfeebled 1 for 1 minute (Enfeebled 2 on a critical failure).\nHeightened (6th) The damage for 40 fire damage, 50 acid damage, 60 electricity damage, and 35 poison damage each increase by 10. Roll 1d8 to determine the ray's color, using the results for 1-4 above and the results for 5-8 below.\n• Blue The ray has the effect of the Petrify spell. On a critical hit, the target is Clumsy 1 as long as it's Slowed by the flesh to stone effect.\n• Indigo (emotion, incapacitation, mental) The ray has the effect of the Confusion spell. On a critical hit, it has the effect of Warp Mind instead.\n• Violet The target is Slowed for 1 minute. It must also succeed at a will save or be teleported 120 feet directly away from you (if there isn't room for it to appear there, it appears in the nearest open space); this is a teleportation effect.\n• Intense Color The target is Dazzled until the end of your next turn, or Blinded if your attack roll was a critical hit. Roll again and add the effects of another color (rerolling results of 8).",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": "fortitude save",
      "damage": [],
      "heightening": "Heightened (6th) The damage for 40 fire damage, 50 acid damage, 60 electricity damage, and 35 poison damage each increase by 10. Roll 1d8 to determine the ray's color, using the results for 1-4 above and the results for 5-8 below.\n• Blue The ray has the effect of the Petrify spell. On a critical hit, the target is Clumsy 1 as long as it's Slowed by the flesh to stone effect.\n• Indigo (emotion, incapacitation, mental) The ray has the effect of the Confusion spell. On a critical hit, it has the effect of Warp Mind instead.\n• Violet The target is Slowed for 1 minute. It must also succeed at a will save or be teleported 120 feet directly away from you (if there isn't room for it to appear there, it appears in the nearest open space); this is a teleportation effect.\n• Intense Color The target is Dazzled until the end of your next turn, or Blinded if your attack roll was a critical hit. Roll again and add the effects of another color (rerolling results of 8)."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:ocular-overload",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "HvBpSeUDg0KcK2Hg",
      "slug": "ocular-overload",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:d352d522250e69f57c6d5ff5ceb72badb29ffa6031604565a5391aa384a0b420",
    "translatableHash": "sha256:95922b88fc9de8648a66c8cb17df281046f9e923769ccc3ed478e61424f4dc4a",
    "data": {
      "schemaVersion": 1,
      "name": "Ocular Overload",
      "rank": 4,
      "rarity": "common",
      "traits": [
        "concentrate",
        "contingency",
        "illusion",
        "incapacitation",
        "manipulate",
        "visual"
      ],
      "traditions": [
        "arcane",
        "occult",
        "primal"
      ],
      "description": "Just as a creature is about to attack you, you assault them with jarring illusions, completely surrounding their eyes with blinding flashes of motion and color. When the spell is complete, you gain the Overload Vision reaction; once you use the reaction, the spell ends.\ncheck (fortitude, name:Overload Vision, traits:illusion)",
      "castingTime": "10 minutes",
      "range": "",
      "target": "",
      "area": null,
      "duration": "24 hours",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:umbral-graft",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "juzb53CW6Uzz5pFY",
      "slug": "umbral-graft",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/umbral-graft.webp"
    },
    "sourceHash": "sha256:b820ec867820b418c2d0d5e56ee9362aeef2a6463298644363f8b4a10c5ed383",
    "translatableHash": "sha256:5d7b055373b5558f6da9b6aff1283dca4a8c879c8394f7ee9d8943840e437e8f",
    "data": {
      "schemaVersion": 1,
      "name": "Umbral Graft",
      "rank": 4,
      "rarity": "common",
      "traits": [
        "concentrate",
        "illusion",
        "manipulate",
        "shadow"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You reflect a spell into a shadowy version of itself, in the process depleting the power of the initial spell. During umbral graft's duration, you can use the Steal action to attempt to abscond with spells affecting a foe instead of stealing an item. You can also make one attempt to Steal as part of Casting umbral graft. If you succeed at your check to Steal a spell, randomly determine a spell affecting the foe that has a target entry. That spell ceases to affect the target, and you can either cause the spell to affect you or store it in your shadow. If your attempt to Steal was a critical success, you automatically steal the spell if its rank is equal to or lower than umbral graft. If it was a success, you automatically steal it if its rank is lower than umbral graft. If you succeeded, but the spell's rank was too high to steal automatically, you must attempt a counteract check to see if you steal the spell. You know what the spell is as soon as you steal it. If you store it, you can transfer it to a willing creature as a single action that has the manipulate trait. The spell lasts for its remaining duration, to a maximum of 1 minute, and any time you keep it stored subtracts from its duration normally. The spell gains the shadow trait.\nYou can't steal constant innate spells that are always active on a creature, such as a choral angel's constant tongues, or innate spells that have special restrictions that remove their ability to target other creatures, such as an imp's invisibility. At the GM's discretion, you might not be able to steal innate spells with other unusual modifications to the base spell.\nAs normal, you can Steal only from a target within your reach. Once you've stolen a spell, you can't attempt to Steal more spells, nor can you choose not to take a spell if you succeed at your Thievery check. When you cast umbral graft, any spells you stole with a previous umbral graft end even if their duration hasn't elapsed. If you're affected by both umbral graft and umbral extraction, you make the choice whether to steal a spell slot, an active spell, or an item each time you Steal.",
      "castingTime": "2 actions",
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
    "contentId": "pf2e:spell:spells-srd:infectious-melody",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "mUz3wqbMQ5JQ06M5",
      "slug": "infectious-melody",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:63c27e84f68ccf1484c7e868f126b551a653e32748b1ee337cb47ad94909ba35",
    "translatableHash": "sha256:dd26be8616a579d036d9f6402e09752f6929e5a1707127e5d84ee16e9db24264",
    "data": {
      "schemaVersion": 1,
      "name": "Infectious Melody",
      "rank": 4,
      "rarity": "common",
      "traits": [
        "auditory",
        "concentrate",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "occult"
      ],
      "description": "You call forth the chords of a tune so catchy that foes hearing it can't help but sing along, making it harder for them to communicate. Each target must attempt a Will save.\nCritical Success The creature is unaffected.\nSuccess For 1 round, the creature can communicate only by singing along to the melody. It can speak only on its turn, and it must take the Perform action when it does. The result of the Performance check determines how well it sang, but it stills communicate the information regardless of the result, which has no further mechanical impact than the time spent to take the action. A single Perform check is sufficient for any amount of speaking on the creature's turn. This effect might interfere with verbal components of spells or other linguistic abilities that rely on precise speech; in order to use such an ability successfully, the creature must succeed at a check (flat, dc:5, showDC:all).\nIn addition, the creature takes a -2 status penalty on linguistic Intimidation checks, as singing its threats saps away some of the menace. The creature's constant humming of the tune also makes it nearly impossible for the creature to remain Undetected.\nSpell Effect: Infectious Melody (Success)\nFailure As success, but the duration is 3 rounds.\nSpell Effect: Infectious Melody (Failure)\nCritical Failure As success, but the duration is 1 hour.\nSpell Effect: Infectious Melody (Critical Failure)",
      "castingTime": "2 actions",
      "range": "",
      "target": "enemies in the area",
      "area": "15 emanation",
      "duration": "varies",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:chromatic-armor",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "NBSBFHxBm88qxQUy",
      "slug": "chromatic-armor",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/chromatic-armor.webp"
    },
    "sourceHash": "sha256:adc9a74233126a3f4f2e6eddfe764f5409ee6aed63f3fdf1fe9fb524c37ed406",
    "translatableHash": "sha256:6d3f1dab7e86a532d4e4f79657d1c162fe7aa5f5cb3ec1607ac4bead73351b76",
    "data": {
      "schemaVersion": 1,
      "name": "Chromatic Armor",
      "rank": 4,
      "rarity": "common",
      "traits": [
        "concentrate",
        "light",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You wrap the target in armor made of sheets of colored light. The armor sheds bright light for 20 feet (and dim light for the next 20 feet). Whenever a creature attacks the target and is adjacent to it, the attacker must attempt a Will save at the end of its action. On a failure, it becomes Dazzled until the end of its next turn. Regardless of the result of the save, the attacker is temporarily immune until the end of its next turn. The dazzling effect has the light and visual traits.\nWhen you cast the spell, roll 2d8 on the table below to see the armor's colors (rerolling any duplicates). Each color grants resistance 5 to the indicated damage type. If you spend three actions to Cast the Spell, roll 3d8 times instead.\n• Red fire\n• Orange acid\n• Yellow electricity\n• Green poison\n• Blue sonic\n• Indigo mental\n• Violet force\n• Matching Color The armor becomes the color matching the type of damage the target took most recently in the past minute. If it didn't take any of those seven types of damage or the armor is already that color, roll again, rerolling any results of 8.\nSpell Effect: Chromatic Armor\nHeightened 3 The resistance is increased by 5.",
      "castingTime": "2 or 3",
      "range": "touch",
      "target": "1 willing creature",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 3 The resistance is increased by 5."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:pernicious-poltergeist",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "PtX16vbWzDehj8qc",
      "slug": "pernicious-poltergeist",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/pernicious-poltergeist.webp"
    },
    "sourceHash": "sha256:9ddee6085e374daebc9bd8807fa5350bc92c47cff5e7a5e3da3804d9002d217d",
    "translatableHash": "sha256:b904206e3473c25e47f38bb4d91964ce520094941ad8faba165a012be5497750",
    "data": {
      "schemaVersion": 1,
      "name": "Pernicious Poltergeist",
      "rank": 4,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "You create an echo of a powerful poltergeist, temporarily anchoring it to the area to terrorize and harm any opponents foolish enough to remain in the area. Because the poltergeist is a manifestation and is not truly present, it can't be attacked or hurt; it remains Invisible unless otherwise stated. When you Cast the Spell, and the first time you Sustain it on subsequent rounds, the poltergeist creates your choice of one of the following effects.\n• Deathly Assault (negative) The poltergeist focuses on one creature in the area and flies through that creature's space, dealing 4d10 void damage (check (fortitude, name:Deathly Assault, traits:void, basic) save).\n• Frighten (emotion, fear, mental) The poltergeist becomes visible, appearing as a skeletal, ghostlike humanoid. Creatures in the area must attempt a check (will, name:Frighten, traits:emotion,fear,mental) save, becoming Frightened 2 on a failure.\n• Telekinetic Storm (force) The poltergeist hurls debris and quasi-real objects around in the area. All creatures in the area take 4d8 force damage (check (reflex, name:Telekinetic Storm, traits:force, basic) save).\nHeightened 2 The damage of the deathly assault effect increases by 1d10, and the damage of the telekinetic storm effect increases by 1d8.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "",
      "area": "10 burst",
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 2 The damage of the deathly assault effect increases by 1d10, and the damage of the telekinetic storm effect increases by 1d8."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:painful-vibrations",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "qTzvVnAMWL05VitC",
      "slug": "painful-vibrations",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/painful-vibrations.webp"
    },
    "sourceHash": "sha256:792647c166ccda485971a58c3b5606b65f053f0f692a6771150e45cce693c413",
    "translatableHash": "sha256:aec58f40ef31a3eb7937a75de973a960740e48af1b84df8921435c743f980214",
    "data": {
      "schemaVersion": 1,
      "name": "Painful Vibrations",
      "rank": 4,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "sonic"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "You send powerful sound waves through an opponent's body, vibrating its bones and internal organs painfully. The creature takes 8d6 sonic damage and must attempt a Fortitude save.\nCritical Success The target is unaffected.\nSuccess The target takes half damage.\nFailure The target takes full damage, is Sickened 1, and is Deafened for 1 round.\nCritical Failure The target takes double damage, is Sickened 2, and is deafened for 1 minute.\nHeightened 1 The damage increases by 2d6.",
      "castingTime": "2 actions",
      "range": "100 feet",
      "target": "1 living creature",
      "area": null,
      "duration": "",
      "defense": "fortitude save",
      "damage": [
        {
          "formula": "8d6",
          "type": "sonic",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:fey-form",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Qu4IThrk1wpONwjT",
      "slug": "fey-form",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:80ab241a140857499c968bb56296df74e822e66bd53e9a71eed51e00aae266b2",
    "translatableHash": "sha256:cfd46f2ffaf974bae2670fd2e7e32acade63e00aea9af0e98b1e390eda2edc0e",
    "data": {
      "schemaVersion": 1,
      "name": "Fey Form",
      "rank": 4,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "polymorph"
      ],
      "traditions": [
        "occult",
        "primal"
      ],
      "description": "Channeling the mischievous fey, you transform into a fey battle form, which is Medium unless stated otherwise. When you cast this spell, choose dryad, elananx, naiad, redcap, or unicorn. If you choose unicorn, the battle form is Large and you must have space to expand or the spell is lost. While in this form, you gain the fey trait. Unless you choose elananx or unicorn, you have hands in this battle form and can use manipulate actions. You can Dismiss the spell.\nYou gain the following statistics and abilities regardless of the form that you choose:\n• AC = 19 + your level. Ignore your armor's check penalty and Speed reduction.\n• 15 temporary Hit Points and weakness 5 to cold iron.\n• Low-light vision.\n• One or more unarmed melee attacks specific to the battle form you choose, which are the only attacks you can Strike with. You're trained with them. Your attack modifier is +16, and you use the listed damage. These attacks are Dexterity based. If your attack modifier is higher for the given unarmed attack or weapon, you can use it instead.\n• Acrobatics modifiers of +16, unless your own modifier is higher.\nYou also gain specific abilities based on the type of fey:\n• Dryad The temporary HP gained increases to 30; Speed 25 feet; weakness 5 to fire\n• Size Medium\n• Melee 1 branch, Damage 1d12+8 bludgeoning.\n• Elananx Speed 30 feet; resistance 5 to fire\n• Size Medium\n• Melee 1 jaws, Damage 1d6+8 piercing plus 1d6 fire;\n• Melee 1 claw (agile), Damage 1d6+8 slashing.\n• Naiad Speed 25 feet, swim 25 feet; resistance 5 to fire\n• Size Medium\n• Melee 1 aqueous fist (water), Damage 1d8+8 bludgeoning.\n• Redcap Speed 40 feet;\n• Size Small;\n• Melee 1 scythe (deadly d10, trip), Damage 1d10+8 slashing;\n• Melee 1 boot (agile, versatile B), Damage 1d6+8 piercing.\n• Unicorn gain the beast trait in addition to fey; Speed 40 feet; resistance 5 to poison;\n• Size Large;\n• Melee 1 horn, Damage 1d10+8 piercing plus 1 spirit;\n• Melee 1 hoof (agile), Damage 1d8+8 bludgeoning; all Strikes have the effects of a Ghost Touch property rune.\nSpell Effect: Fey Form",
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
    "contentId": "pf2e:spell:spells-srd:replicate",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "srEKUvym9kDVbEhD",
      "slug": "replicate",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:336c026d8a20ae744f8af10ea0ff7102ec86ee409c57e6ae00c0f7dab11128a0",
    "translatableHash": "sha256:a3c0095be6a3d8cbdf36f81d35455057f008938480e9e2c4ebbc0e0098e9c5be",
    "data": {
      "schemaVersion": 1,
      "name": "Replicate",
      "rank": 4,
      "rarity": "common",
      "traits": [
        "concentrate",
        "illusion",
        "manipulate",
        "shadow"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You create an illusory magical double that physically looks and behaves very similarly to the target. This double is limited to moving, Interacting, speaking short sentences, and other similar basic tasks. It is unable to cast spells, attack, or use any complex skills.\nThe illusory duplicate is your minion. You can issue new commands to the double as part of Sustaining the Spell. You can command the duplicate telepathically as long as the spell lasts, provided it's within 1 mile of you. You can switch between using your own senses and the duplicate's senses with a single action, which has the concentrate trait. The illusory duplicate has the same statistics as the original creature, except it doesn't have any of the original's item bonuses, and it has one quarter of the original's Hit Points. If the double's Hit Points are reduced to 0, the spell ends.\nHeightened 1 The maximum level of the target increases by 2.",
      "castingTime": "3 actions",
      "range": "60 feet",
      "target": "1 willing or unconscious creature of 8th level or lower",
      "area": null,
      "duration": "sustained",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 The maximum level of the target increases by 2."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:bloodspray-curse",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "VXUrO8TwRqBpNzdU",
      "slug": "bloodspray-curse",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:7a2752095808fec1fae2c040ed77719770527a32a51f051eca1358e051107d98",
    "translatableHash": "sha256:f0f01374070946c34337aeff9128b0b95be5aeb654158f1ac0685b35690bd9ef",
    "data": {
      "schemaVersion": 1,
      "name": "Bloodspray Curse",
      "rank": 4,
      "rarity": "common",
      "traits": [
        "concentrate",
        "curse",
        "manipulate"
      ],
      "traditions": [
        "divine",
        "occult",
        "primal"
      ],
      "description": "You inflict a curse upon the target that causes any wound to gush blood. The target must attempt a Fortitude save.\nCritical Success The target is unaffected.\nSuccess For 1 minute, the first time each round that the target takes at least 10 2d6 piercing damage or 2d6 slashing damage from a single Strike, it takes 2d6 additional damage of the same type.\nFailure As success, but when it takes the additional damage, it also takes 2d6 persistent bleed damage.\nHeightened 2 The additional damage increases by 1d6 and the persistent bleed damage increases by 1d6.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "varies",
      "defense": "fortitude save",
      "damage": [],
      "heightening": "Heightened 2 The additional damage increases by 1d6 and the persistent bleed damage increases by 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:blessing-of-defiance",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "1b55SgYTV65JvmQd",
      "slug": "blessing-of-defiance",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:96ffce249d7771ea4710949baf023f498eab1b77c8299b581af036061ec58c7a",
    "translatableHash": "sha256:45700ab65d6b7eca2c6686cb26e1754b9a76294e72263eeba67f1e6c8f210ef1",
    "data": {
      "schemaVersion": 1,
      "name": "Blessing of Defiance",
      "rank": 5,
      "rarity": "common",
      "traits": [],
      "traditions": [
        "divine",
        "primal"
      ],
      "description": "Channeling forth the power to persevere in the face of adversity, you grant the target the means to deny danger and avoid dire harm. Choose one saving throw: Fortitude, Reflex, or Will. The target gets a +4 status bonus to that saving throw for 1 round. The potency and number of targets of this blessing depend on how many actions you spend when Casting the Spell.\nSpell Effect: Blessing of Defiance\n1 (somatic) The spell targets you or one willing ally within range.\n2 (verbal) The spell targets you or one willing ally within range. If you choose Fortitude, the target gains resistance 15 to poison. If you choose Reflex, the target gains a +15-foot status bonus to its Speeds. If you choose Will, the target gains resistance 15 to mental damage.\n3 (verbal) The spell targets you and all willing allies within 30 feet.",
      "castingTime": "1 to 3 actions",
      "range": "30 feet",
      "target": "varies",
      "area": null,
      "duration": "1 round",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:rip-the-spirit",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "1bw6XJMOERcbC5Iq",
      "slug": "rip-the-spirit",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/rip-the-spirit.webp"
    },
    "sourceHash": "sha256:5e5282c75e053cd0e1acf6ab45b424b702103881dd359011cb082d4b9a23401c",
    "translatableHash": "sha256:de340430efc0ef23720f2a1dbde54d810698d376b37ff1c4e540b2e0488c2627",
    "data": {
      "schemaVersion": 1,
      "name": "Rip the Spirit",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "death",
        "void"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "You supernaturally rip the spirit from a living creature's body, dooming the target to pain and death. The target takes 5d6 void damage, depending on its basic Fortitude save, and is Drained 1 if it fails its save. The spell's effect is based on how many actions you spend when Casting the Spell.\n1 (somatic) The spell targets one living creature in range.\n2 (somatic, verbal) The spell targets one living creature in range and the damage is 10d6 void damage instead of 5d6.\n3 (material, somatic, verbal) The spell targets all living creatures in a 30-foot emanation.\nHeightened 1 The amount of damage increases by 1d6, or by 2d6 for the 2-action version.",
      "castingTime": "1 to 3 actions",
      "range": "30 feet",
      "target": "1 living creature",
      "area": null,
      "duration": "",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "5d6",
          "type": "void",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The amount of damage increases by 1d6, or by 2d6 for the 2-action version."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:rewinding-step",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "5tpk4Q2QI3FVhm99",
      "slug": "rewinding-step",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/rewinding-step.webp"
    },
    "sourceHash": "sha256:f6cf9d07cdf8c7e31310d3dab5efdb50c8ba56034f2fc8715d3884d19d673314",
    "translatableHash": "sha256:a4756f26539f9bf4ccbc0fd93cd3bbaa4e020094351fd51f789564beb207fb93",
    "data": {
      "schemaVersion": 1,
      "name": "Rewinding Step",
      "rank": 5,
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
      "description": "You anchor your location in time so that you can swiftly retrace your steps later with complex chronomancy. The space you're in when you cast the spell becomes your temporal anchor space. While you're within 500 feet of your temporal anchor space, you can spend a single action that has the concentrate trait to instantaneously return to that space (you don't need to have line of effect to the space). The spell then ends. You bring any items that are in your possession with you when you take the action to return.\nIf the anchor space is occupied when you attempt to return to it or if this spell would bring another creature with you, the spell fails to transport you, then ends.\nHeightened (7th) You can return if you're within 1,000 feet of your anchor space.\nHeightened (9th) You can return if you're within 1 mile of your anchor space.",
      "castingTime": "1 minute",
      "range": "",
      "target": "",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (7th) You can return if you're within 1,000 feet of your anchor space.\nHeightened (9th) You can return if you're within 1 mile of your anchor space."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:flammable-fumes",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "6AqH5SGchbdhOJxA",
      "slug": "flammable-fumes",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:ec1739f8d86d7797ebda6dcd9dbbae2c130d92aa05c64877b8f339c8444f9166",
    "translatableHash": "sha256:ffc667fe79f32b3847c6d8b9a80768c4c5ddc14f17556121830485d63525e32f",
    "data": {
      "schemaVersion": 1,
      "name": "Flammable Fumes",
      "rank": 5,
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
      "description": "Sending magic deep underground, you conjure a cloud of toxic gases that swiftly degenerate into volatile fumes. The gases are invisible, requiring a successful Perception check against your spell DC to detect visually, though their acrid smell and toxic effects are clear once a creature has entered the cloud. A creature that enters the cloud or is within the cloud at the start of its turn takes 2d6 poison damage. A creature can take the poison damage from flammable fumes only once per round.\nOne round after you conjure the cloud, the gases loses stability and become flammable. If an open flame is brought into the cloud, or if anyone within the area uses a fire effect, the cloud detonates in a massive blaze that deals 10d6 fire damage to all creatures within it with a check (reflex, basic) save, and the spell ends.\nHeightened 2 The poison damage increases by 1d6 and the fire damage on an explosion increases by 2d6.",
      "castingTime": "3 actions",
      "range": "120 feet",
      "target": "",
      "area": "20 burst",
      "duration": "1 minute",
      "defense": null,
      "damage": [
        {
          "formula": "2d6",
          "type": "poison",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The poison damage increases by 1d6 and the fire damage on an explosion increases by 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:inevitable-disaster",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "8THDHP0UC7SgOYYF",
      "slug": "inevitable-disaster",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:c1645ed856efb94e8135fe25d1890ece20c04170604d0a660fe1e48ae40180a8",
    "translatableHash": "sha256:35213f6720dfc43229363b5fbf5303a9fa56367d2abacc11a6e0ed1ca0b377c0",
    "data": {
      "schemaVersion": 1,
      "name": "Inevitable Disaster",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "concentrate",
        "curse",
        "manipulate",
        "prediction"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "You briefly glimpse cause and effect, putting into motion a chain of events that will visit doom on your enemy at some point in the future, though you're not quite sure when or how the doom will occur. Some kind of strange accident occurs 1d4 later, dealing 55 damage to the creature, with a basic Fortitude save. This happens regardless of where the target is located at the time, even if it travels to another plane. The GM should roll to determine when the damage occurs secretly and determine the form of the accident as well as the type of damage it deals; generally, the accident should be one that deals physical damage of some type (for instance, a tree branch might fall on the foe and deal bludgeoning damage, or a window might break and fling sharp slashing glass at them), though other damage types might be appropriate in more unusual environments.\nHeightened 1 The damage increases by 10.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "55",
          "type": "untyped",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 10."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:summon-axiom",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ba12fO37w7O37gim",
      "slug": "summon-axiom",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/summon-axiom.webp"
    },
    "sourceHash": "sha256:28a83f8e6728fccb8c3e1813f6ec28a23f860693fcc73e6a1e8b9fde9818c927",
    "translatableHash": "sha256:1eabe3150d777227de1a451b535b2796e9ff221391df89fe7633ee08db74a5bb",
    "data": {
      "schemaVersion": 1,
      "name": "Summon Axiom",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "divine"
      ],
      "description": "You conjure a lawful celestial, monitor, or fiend to fight on your behalf. You summon a common lawful creature that has the celestial, monitor, or fiend trait and whose level is 5 or lower. You can't summon a creature unless its alignment is one of your deity's preferred alignments (or, if you don't have a deity, is within one step of your alignment). At the GM's discretion, some deities might restrict specific types of creatures, even if their alignments match. Heightening the spell increases the maximum level of creature you can summon.\nHeightened (6th) Level 7.\nHeightened (7th) Level 9.\nHeightened (8th) Level 11.\nHeightened (9th) Level 13.\nHeightened (10th) Level 15.",
      "castingTime": "3 actions",
      "range": "30 feet",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (6th) Level 7.\nHeightened (7th) Level 9.\nHeightened (8th) Level 11.\nHeightened (9th) Level 13.\nHeightened (10th) Level 15."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:mantle-of-the-frozen-heart",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "CcXtbTxtdV9MKQfu",
      "slug": "mantle-of-the-frozen-heart",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/mantle-of-the-frozen-heart.webp"
    },
    "sourceHash": "sha256:5e34d8bc439e291249edc2b914b7d8befcd0fe02cbd25e4689cc303191ba7329",
    "translatableHash": "sha256:a1e124e476277cbd2b96e0b425e4764d8846ed14f9537f4efa90adeec640cc60",
    "data": {
      "schemaVersion": 1,
      "name": "Mantle of the Frozen Heart",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "cold",
        "concentrate",
        "manipulate",
        "morph"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You surround yourself in a mantle of frigid ice magic, and your skin and armor morph into cold blue ice. Freezing air emanates from your body, sending a chill down anyone's spine who draws too close and leaving a fine dusting of frost in your wake. Upon Casting this Spell, pick two of the options below. As a single action, which has the concentrate trait, you can change one of your chosen abilities to a different option from the list.\n• Chilling Ice The ice around your body thickens, melting off to protect you from heat while inuring you from the cold. You gain resistance 10 to cold.\n• Heart of Ice Your body temperature plummets to blistering cold. Any creature that touches you, or that hits you with a melee unarmed attack or non-reach melee weapon attack, takes 2d6 cold damage.\n• Ice Glide Ice trails from your feet for an instant as you move, allowing you to skate rapidly along the ice. You don't need to Balance on ice, and you ignore difficult terrain caused by ice or snow. While moving along a smooth surface, you gain a +20-foot status bonus to your land Speed.\n• Icy Claws Your hands morph into vicious, piercing claws of ice useful for attacking or climbing. As long as you have both hands free, you gain a climb Speed equal to your land Speed. You gain a claw unarmed attack with the agile and finesse traits, in the brawling weapon group. Your claw attack deals 1d6 piercing damage as its base damage, plus an additional 2d6 cold damage.\nSpell Effect: Mantle of the Frozen Heart",
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
    "contentId": "pf2e:spell:spells-srd:mirror-malefactors",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "CmZCq4htcZ6W0TKk",
      "slug": "mirror-malefactors",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:0aee7de60226b7ecc707838bf5269df14dd912c0f4da4b5ec436ce8f17eb9510",
    "translatableHash": "sha256:bdd8877d4941b7fcbec36c60fc0f3e9e786d6e930f19a0ed5100ba2e122c2ce4",
    "data": {
      "schemaVersion": 1,
      "name": "Mirror Malefactors",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "concentrate",
        "illusion",
        "manipulate",
        "mental",
        "visual"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult"
      ],
      "description": "You completely surround a Large or smaller creature in a shimmering ring of illusory mirrors that follows it as it moves, even when the creature moves outside the range of the spell. These mirrors reflect the target, though if the target has no reflection, like a vampire, it's unaffected by mirror malefactors. As long as the target is surrounded by mirrors, it's Frightened 1, and it can't reduce its frightened value.\nWhen you Cast the Spell, the reflections leap from the mirrors and attack the target, dealing 7d8 mental damage with a basic Will save. On subsequent turns, this effect repeats the first time you Sustain the spell that turn. If the target succeeds at any Will save it attempts against mirror malefactors, the illusory mirrors shatter and the spell ends.\nHeightened 1 The damage for both the initial effect and on subsequent turns increases by 1d8.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": "basic will save",
      "damage": [
        {
          "formula": "7d8",
          "type": "mental",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage for both the initial effect and on subsequent turns increases by 1d8."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:portrait-of-the-artist",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "CuRat8IXBUu9C3Yw",
      "slug": "portrait-of-the-artist",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/portrait-of-the-artist.webp"
    },
    "sourceHash": "sha256:96172ee949b088b7036cb361449275034ca5e26c385ff59eb0f83a982d4b0526",
    "translatableHash": "sha256:69f20c077de82bb2d1a3582cc456f53afaf0955488b4bfc9db3b093fd1df0ad1",
    "data": {
      "schemaVersion": 1,
      "name": "Portrait of the Artist",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "concentrate",
        "illusion",
        "manipulate",
        "visual"
      ],
      "traditions": [
        "occult"
      ],
      "description": "You change your appearance to look like a well-known artist talented at a particular craft or performance, such as a painter, singer, or orator, with the effects of illusory disguise. Additionally, you appear to mimic their skill, although such appearances are merely an illusion. If they are famous for physical art, the spell creates illusions of physical artwork matching their style, and onlookers who don't disbelieve are convinced these works are as impressive as the real thing. If they are famous for their ability to perform, you create an illusory performance that tricks onlookers into thinking you are as skillful as the performer you're pretending to be. The audience can disbelieve this spell if they interact with your art or actively listen to the performance, using either Perception or an appropriate Lore, whichever is higher. When the duration ends, any fake art disappears, and those who were duped by a performance realize it wasn't as good as they thought, though they still might not discover that you weren't really the artist you claimed to be.\nThis spell can't grant you any benefits from special abilities that take such skill they require a Performance check, such as the lingering performance focus spell. Using the spell to maintain the ruse long enough to Earn Income from your art is also quite difficult; because it requires careful timing and repeated deceit, it can't be assumed to automatically work on an Earn Income check.",
      "castingTime": "1 minute",
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
    "contentId": "pf2e:spell:spells-srd:healing-well",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "CzjQtkRuRlzRvwzg",
      "slug": "healing-well",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:779f348b57ab13aba6864d706955c32fa5292dc291a80c2522754de218d51f5b",
    "translatableHash": "sha256:61b258d02cffd4cb61289db2d313da8ac1a88438fb16045a18f9da9047f0ecb8",
    "data": {
      "schemaVersion": 1,
      "name": "Healing Well",
      "rank": 5,
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
      "description": "You call forth a well of healing that you and your allies can draw from later. The well appears as a disc of shimmering light on the ground in a square within range. At any time during the duration, if you or an ally are adjacent to the well, that character can Interact to tap into the well's power, recovering 4d8 Hit Points. When the well has been tapped five times, the spell ends. The well is made of insubstantial energy, allowing creatures to move through it and even end their turn in its space.\nIf you use an ability that increases the amount of healing this spell grants, that increase applies only to the first time someone taps the well.\nHeightened 1 The healing increases by 3.",
      "castingTime": "3 actions",
      "range": "30 feet",
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
      "heightening": "Heightened 1 The healing increases by 3."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:glimmer-of-charm",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ftZ750SD2iIJKIy3",
      "slug": "glimmer-of-charm",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/glimmer-of-charm.webp"
    },
    "sourceHash": "sha256:260c5185923903c180790848e16e02548f4d1b9f7d2d516a42d0379ceed03bc5",
    "translatableHash": "sha256:c336a6fed05d0305381b528158c33d018064f2c6be641104115d3f45d8f4c69d",
    "data": {
      "schemaVersion": 1,
      "name": "Glimmer of Charm",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "aura",
        "concentrate",
        "emotion",
        "incapacitation",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "arcane",
        "occult",
        "primal"
      ],
      "description": "You're bathed in a smooth, almost glittering aura that improves the attitude of those near you. Any creature that ends its turn in the aura must attempt a Will saving throw with the following effects. No matter the result, it's then temporarily immune for 24 hours. The effect lasts until the spell ends, even after the creature leaves the aura.\nCritical Success The creature is unaffected and is aware of the aura.\nSuccess The creature's attitude toward you improves by one step. If that improves its attitude to at least Indifferent, it can't take hostile actions against you, though the effect ends as soon as you take a hostile action against the creature or its allies.\nFailure The creature's attitude toward you improves by two steps. It can't take hostile actions against you, though the effect ends as soon as you take a hostile action against the creature or its allies.\nCritical Failure The creature's attitude becomes Helpful to you, though the effect ends as soon as you take a hostile action against the creature or its allies. While the creature is helpful, it can't take hostile actions against you.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "20 emanation",
      "duration": "1 minute",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:aberrant-form",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Fu8Ml47ZfXpSYe7E",
      "slug": "aberrant-form",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:f3773a4fae19f5e92819110f1d5db39f9db593741a422de0b8c6a2c4910f1504",
    "translatableHash": "sha256:cde13df8d3d8dc71e32d82816dec059b9df22512f6e904d0345d513cc96079dc",
    "data": {
      "schemaVersion": 1,
      "name": "Aberrant Form",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "polymorph"
      ],
      "traditions": [
        "occult"
      ],
      "description": "Harnessing the power of vile entities, you transform yourself into a Large aberration. You must have enough space to expand into or the spell is lost. When you cast this spell, choose chuul, gogiteth, gug, or otyugh. While in this form, you gain the aberration trait. You can Dismiss the spell.\nYou gain the following statistics and abilities regardless of which battle form you choose:\n• AC = 18 + your level. Ignore your armor's check penalty and Speed reduction.\n• 13 temporary Hit Points.\n• Darkvision.\n• One or more unarmed melee attacks specific to the battle form you choose, which are the only attacks you can Strike with. You're trained with them. Your attack modifier is +18, and you use the listed damage. These attacks are Strength based (for the purpose of the enfeebled condition, for example). If your unarmed attack modifier is higher, you can use it instead.\n• Athletics modifier of +20, unless your own modifier is higher.\nYou also gain specific abilities based on the type of aberration you choose:\n• Chuul\n• Speed 30 feet, swim 25 feet;\n• Melee 1 claw (reach 10 feet), Damage 2d8+8 bludgeoning, and you can spend an action after a hit to Grab the target.\n• Gogiteth\n• Speed 40 feet, climb 30 feet;\n• Melee 1 jaws, Damage 2d10+8 piercing, and you can spend an action after a hit to Grab the target;\n• Melee 1 leg (agile, reach 10 feet), Damage 2d6+8 piercing.\n• Gug\n• Speed 40 feet, climb 20 feet;\n• Melee 1 claw (agile, reach 10 feet), Damage 2d8+8 slashing;\n• your multiple joints allow you to fit through tight spaces as if you were a Medium creature.\n• Otyugh\n• +2 circumstance bonus on saves against disease;\n• Speed 20 feet;\n• Melee 1 jaws, Damage 3d6+8 piercing;\n• Melee 1 tentacle (agile, reach 10 feet), Damage 2d6+8 bludgeoning.\nSpell Effect: Aberrant Form\nHeightened (6th) Your battle form is Huge, and the reach of your attacks increases by 5 feet. You must have space to expand, or the spell is lost. You instead gain AC = 21 + your level, 26 temporary HP, attack modifier +22, damage bonus +13, and Athletics +23.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (6th) Your battle form is Huge, and the reach of your attacks increases by 5 feet. You must have space to expand, or the spell is lost. You instead gain AC = 21 + your level, 26 temporary HP, attack modifier +22, damage bonus +13, and Athletics +23."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:geyser",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "i88Vi47PDDoP6gQv",
      "slug": "geyser",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:1aea516c36195e5bc650d36aa4aa96407ce09c57e1025129492daadc148efcbe",
    "translatableHash": "sha256:24f6c18214089f817832b1377fff2edb23544c32195278381a3244bca7bb1a37",
    "data": {
      "schemaVersion": 1,
      "name": "Geyser",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "concentrate",
        "fire",
        "manipulate",
        "water"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "Area 10-foot radius, 50-foot-tall cylinder\nA powerful geyser blasts up from the ground, potentially pushing creatures on top of it into the air. The bottom of this spell's area must be on solid ground. Each creature in the area takes 3d6 bludgeoning damage and 4d6 fire damage, with a Reflex save. A creature pushed into the air by the geyser can't be pushed beyond the top of the geyser. After being pushed into the air, a creature falls unless it's flying or has some other means of staying aloft, taking falling damage (normally equal to half the distance it fell). After the geyser erupts, its area is filled with a cloud of steam for 1 round. All creatures in the steam are concealed, and all creatures outside the steam are concealed to creatures within it.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage and isn't pushed into the air.\nFailure The creature takes full damage and is pushed 20 feet into the air. 10 bludgeoning damage)\nCritical Failure The creature takes double damage and is pushed 40 feet into the air. 20 bludgeoning damage)\nHeightened 1 The damage increases by 1d6 bludgeoning and 1d6 fire.",
      "castingTime": "2 actions",
      "range": "500 feet",
      "target": "",
      "area": "10 cylinder",
      "duration": "1 round",
      "defense": "reflex save",
      "damage": [
        {
          "formula": "3d6",
          "type": "bludgeoning",
          "kind": "damage"
        },
        {
          "formula": "4d6",
          "type": "fire",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 1d6 bludgeoning and 1d6 fire."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:mantle-of-the-magma-heart",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "j2kfNBFpLa0JjVr8",
      "slug": "mantle-of-the-magma-heart",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/mantle-of-the-magma-heart.webp"
    },
    "sourceHash": "sha256:55e8a8ba4ee3460b9c1453f9330a33fe820afaf1f9c6075d3051ddd8e6e7b6b7",
    "translatableHash": "sha256:435f316ceb70ceebc9bfaabc55528f9cd7b70c036dfb332100a646c7ed92d796",
    "data": {
      "schemaVersion": 1,
      "name": "Mantle of the Magma Heart",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "concentrate",
        "fire",
        "manipulate",
        "morph"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You surround yourself in a mantle of blazing fire magic, and your skin and anything you're wearing morphs into burning hot lava. The air around you swelters with heat, and tiny sparks of flame dance behind you as you pass. Upon casting this spell, pick two of the options below. As a single action, which has the concentrate trait, you can change one of your chosen abilities to a different option from the list.\n• Enlarging Eruption You erupt in lava, which clings to you and hardens, causing your body to swell and burst until you grow to size Large. You're clumsy 1. Your reach increases by 5 feet (or by 10 feet if you started out Tiny), and you gain a +2 status bonus to melee damage. You can't choose this option if you're already Large or larger.\n• Fiery Grasp Your hands swell and grow with lava. You gain a lava fist unarmed attack in the brawling weapon group. Your lava fists deal 1d8 bludgeoning damage as their base damage, plus an additional 2d6 fire damage and 1d6 persistent fire damage.\n• Heart of Fire Your body's temperature becomes so hot that any creature that touches you, or that hits you with a melee unarmed attack or non-reach melee weapon attack, takes 2d6 fire damage.\n• Warming Flames Flames flicker around you, warming away the cold while protecting you from the heat. You gain resistance 5 to cold and fire.\nSpell Effect: Mantle of the Magma Heart",
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
    "contentId": "pf2e:spell:spells-srd:summon-anarch",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "n8ckecJpatSBEp7M",
      "slug": "summon-anarch",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:d44953af7d29369db97661cae1182f8bdabbba854eea088e47ba44e71d4f151a",
    "translatableHash": "sha256:ed717d809a060d39be1dbb02d0e4506b62286337ed6c84f52c2593bab7d1193f",
    "data": {
      "schemaVersion": 1,
      "name": "Summon Anarch",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "divine"
      ],
      "description": "You conjure a chaotic celestial, monitor, or fiend to fight on your behalf. You summon a common chaotic creature that has the celestial, monitor, or fiend trait and whose level is 5 or lower. You can't summon a creature unless its alignment is one of your deity's preferred alignments (or, if you don't have a deity, is within one step of your alignment). At the GM's discretion, some deities might restrict specific types of creatures, even if their alignments match. Heightening the spell increases the maximum level of creature you can summon.\nHeightened (6th) Level 7.\nHeightened (7th) Level 9.\nHeightened (8th) Level 11.\nHeightened (9th) Level 13.\nHeightened (10th) Level 15.",
      "castingTime": "3 actions",
      "range": "30 feet",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (6th) Level 7.\nHeightened (7th) Level 9.\nHeightened (8th) Level 11.\nHeightened (9th) Level 13.\nHeightened (10th) Level 15."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:bandits-doom",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "N9KjnGyVMKgqKcCw",
      "slug": "bandits-doom",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:0d5b10fde6d614b26b1b219f419f8eb5b0707269dcbf9cfce05f012b91bdf055",
    "translatableHash": "sha256:a350b968828f95676d8ce5a1658bc5f55d826bd5ef9336e4877fe6514a913cb3",
    "data": {
      "schemaVersion": 1,
      "name": "Bandit's Doom",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "concentrate",
        "curse",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult"
      ],
      "description": "You ward the target item against those who would steal it. When a creature attempts to take the target into its possession, it takes 8d8 mental damage and is doomed, depending on the result of its Will save. The spell then ends. You can choose up to 10 creatures when you cast this spell; if you do, those creatures can take the target item without triggering the ward. You can only have one bandit's doom active at a time. If you cast the spell again, the newer casting supersedes the older.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage and is Doomed 1.\nFailure The creature takes full damage and is Doomed 2.\nCritical Failure The creature takes double damage and is Doomed 3.\nHeightened 2 The damage increases by 2d8.",
      "castingTime": "30 minutes",
      "range": "",
      "target": "1 item of 2 Bulk or less",
      "area": null,
      "duration": "1 month",
      "defense": "will save",
      "damage": [
        {
          "formula": "8d8",
          "type": "mental",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The damage increases by 2d8."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:blazing-fissure",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "OYOCWWefZPEfp8Nl",
      "slug": "blazing-fissure",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:04bbc9ed8b17fe7745fb581fe0112bda9af24dd74e613a7239567e7d4c152204",
    "translatableHash": "sha256:9412bc8e34c7a6eebcdc5486962d8ab4c153371af99657ef433ec4856398aa23",
    "data": {
      "schemaVersion": 1,
      "name": "Blazing Fissure",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "concentrate",
        "earth",
        "fire",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "A thin crack rips through the earth, erupting with magma, then swiftly seals up. Each creature along the line and on solid ground takes 4d6 bludgeoning damage and 6d6 fire damage with a Reflex save.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage.\nFailure The creature takes full damage, and it falls Prone.\nCritical Failure The target takes double damage, and it falls prone.\nHeightened 1 The damage increases by 1d6 bludgeoning and 1d6 fire",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "120 line",
      "duration": "",
      "defense": "reflex save",
      "damage": [
        {
          "formula": "4d6",
          "type": "bludgeoning",
          "kind": "damage"
        },
        {
          "formula": "6d6",
          "type": "fire",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 1d6 bludgeoning and 1d6 fire"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:forceful-hand",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "rMGkk23qWvxTmgA8",
      "slug": "forceful-hand",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/forceful-hand.webp"
    },
    "sourceHash": "sha256:47aa8b7666b90bb29f2e664ac8c5d21d95ab7d25472edd39720b3fc3dbd3ee71",
    "translatableHash": "sha256:971fdf8a3e58aef8f1b811128fe1e8473bd65fa2cc19ab4b033b155e3242b891",
    "data": {
      "schemaVersion": 1,
      "name": "Forceful Hand",
      "rank": 5,
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
      "description": "A Medium floating, disembodied hand made of magical force appears in an unoccupied space adjacent to you, following you across the battlefield to shield you against your foes' attacks. Each time you Sustain the Spell, the hand moves to an unoccupied space of your choice adjacent to you. When you Sustain the Spell, you can have the hand Fly to an unoccupied space of your choice adjacent to an ally to protect that ally instead. The hand's movement does not trigger reactions based on creature movement. The forceful hand occupies its space, but creatures can move through the hand freely.\nSuccessful attacks against the hand damage it, and damaging effects that can target a creature can target the hand. The hand has an AC of 25, 50 Hit Points, and can't recover HP by any means. A hit by a disintegrate spell or similar effect destroys the hand.\nThe hand's actions and the cover it provides depend on what actions you take during your turn. At the end of your turn, what the hand does is determined by the first entry on this list that matches a trait from any of the actions you used on your turn. For instance, if you Step, Stride, and Sustain the Spell, you use the entry for move actions, so the hand provides standard cover.\n• Manipulate or Attack The hand interposes between you and your foes. It provides lesser cover (+1 circumstance bonus to AC) against all attacks that pass through the hand's square.\n• Move The hand provides standard cover (+2 circumstance bonus to AC, Reflex, and Stealth checks) against all attacks that pass through the hand's square.\n• Concentrate The hand provides greater cover (+4 circumstance bonus to AC, Reflex, and Stealth checks) against all attacks that pass through the hand's square.\nHeightened (6th) The hand has AC 27 and 60 Hit Points. When you Cast this Spell, you can choose to replace the hand's Manipulate or Attack option with Swat.\n• Swat The hand Flies to an enemy of your choice within range and attempts to Push that enemy, using your spell attack roll instead of an Athletics check to determine the results of the Push.\nHeightened (7th) The hand has AC 30 and 70 Hit Points, and it is Large. When you Cast this Spell, you can choose to replace the hand's Manipulate or Attack option with Grasp or Swat.\n• Grasp The hand Flies to an enemy of your choice within range and attempts to Grapple that enemy, using your spell attack roll instead of an Athletics check to determine the results of the Grapple.\nHeightened (8th) The hand has AC 32 and 80 Hit Points, and it is Large. When you Cast this Spell, you can choose to replace the hand's Manipulate or Attack option with Grasp, Punch, or Swat.\n• Punch The hand Flies to an enemy of your choice within range and attempts to Strike that enemy with crushing force. The hand's Strikes use your melee spell attack modifiers and deal 7d8 force damage. The hand's Strikes don't use or contribute to your multiple attack penalty.\nHeightened (9th) The hand has AC 35 and 90 Hit Points, and it is Large. When you Cast this Spell, you can choose to replace the hand's Manipulate or Attack option with Crush, Grasp, Punch, or Swat.\n• Crush If the hand doesn't have a target grabbed, it Flies to an enemy of your choice within range and attempts to Strike that enemy with deadly crushing force. The hand's Strikes are melee spell attacks that deal 6d8 force damage. The hand's Strikes don't take or contribute to your multiple attack penalty. On a successful Strike, the target is grabbed by the hand until the end of your next turn, unless the hand moves or the target successfully Escapes against your spell DC. However, if the hand has a target grabbed when it uses Crush, it instead Constricts the target, dealing 6d8 force damage with a basic Fortitude save.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (6th) The hand has AC 27 and 60 Hit Points. When you Cast this Spell, you can choose to replace the hand's Manipulate or Attack option with Swat.\n• Swat The hand Flies to an enemy of your choice within range and attempts to Push that enemy, using your spell attack roll instead of an Athletics check to determine the results of the Push.\nHeightened (7th) The hand has AC 30 and 70 Hit Points, and it is Large. When you Cast this Spell, you can choose to replace the hand's Manipulate or Attack option with Grasp or Swat.\n• Grasp The hand Flies to an enemy of your choice within range and attempts to Grapple that enemy, using your spell attack roll instead of an Athletics check to determine the results of the Grapple.\nHeightened (8th) The hand has AC 32 and 80 Hit Points, and it is Large. When you Cast this Spell, you can choose to replace the hand's Manipulate or Attack option with Grasp, Punch, or Swat.\n• Punch The hand Flies to an enemy of your choice within range and attempts to Strike that enemy with crushing force. The hand's Strikes use your melee spell attack modifiers and deal 7d8 force damage. The hand's Strikes don't use or contribute to your multiple attack penalty.\nHeightened (9th) The hand has AC 35 and 90 Hit Points, and it is Large. When you Cast this Spell, you can choose to replace the hand's Manipulate or Attack option with Crush, Grasp, Punch, or Swat.\n• Crush If the hand doesn't have a target grabbed, it Flies to an enemy of your choice within range and attempts to Strike that enemy with deadly crushing force. The hand's Strikes are melee spell attacks that deal 6d8 force damage. The hand's Strikes don't take or contribute to your multiple attack penalty. On a successful Strike, the target is grabbed by the hand until the end of your next turn, unless the hand moves or the target successfully Escapes against your spell DC. However, if the hand has a target grabbed when it uses Crush, it instead Constricts the target, dealing 6d8 force damage with a basic Fortitude save."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:blink-charge",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "TDaMnCtZ72uyYrz8",
      "slug": "blink-charge",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:f7677162cb2b4d9a5dc6393843baf7e2b060b5fb873c75fef9ce103d3e222333",
    "translatableHash": "sha256:6b9a7f4913a78c96beb40c8b4318824234bd6e9d6c75abf7130c5fdc4018b125",
    "data": {
      "schemaVersion": 1,
      "name": "Blink Charge",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "concentrate",
        "force",
        "manipulate",
        "teleportation"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult"
      ],
      "description": "You propel yourself through the fabric of space to deal a blow carrying the momentum of your teleportation. You teleport to an empty space adjacent to a creature you can see within range, then make a Strike against the creature with a weapon you're wielding. The Strike deals damage, plus an extra 2d8 force damage, depending on the result of your Strike.\nCritical Success Double damage, plus after the Strike, you can teleport the target into an empty space up to 5 feet away from its current position. The new space must be on the ground if it started on the ground, in the air if it was flying, and so on.\nSuccess The Strike deals full damage.\nFailure The Strike deals no damage, but the target takes 1d8 force damage.\nCritical Failure The Strike deals no damage, and you take 1d8 force damage.\nHeightened 2 The spell's range increases by 60 feet, and any force damage the spell deals is increased by 1d8 force.\nSpell Effect: Blink Charge",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 2 The spell's range increases by 60 feet, and any force damage the spell deals is increased by 1d8 force.\nSpell Effect: Blink Charge"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:repelling-pulse",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "TLqMFgCewxuricJw",
      "slug": "repelling-pulse",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/repelling-pulse.webp"
    },
    "sourceHash": "sha256:e98c327343607374ddf1285aae2eabafcffa36cf5b0d971de840feb5afe0e199",
    "translatableHash": "sha256:19286e81292d2e3161627aabe59164da223877150a06655572979677cc813a63",
    "data": {
      "schemaVersion": 1,
      "name": "Repelling Pulse",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "concentrate",
        "force",
        "manipulate"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "You unleash a powerful pulse of telekinetic power, and the pulse violently hurls creatures away from you. Each creature in the area takes 7d10 force damage depending on its Reflex save.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage.\nFailure The creature takes full damage and is pushed 10 feet away from you.\nCritical Failure The creature takes double damage. The creature is pushed 20 feet away from you and is then knocked Prone.\nHeightened 2 The force damage increases by 2d10, and the distance the target is moved on a failure and critical failure increases by 5 feet.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "30 emanation",
      "duration": "",
      "defense": "reflex save",
      "damage": [
        {
          "formula": "7d10",
          "type": "force",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The force damage increases by 2d10, and the distance the target is moved on a failure and critical failure increases by 5 feet."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:temporary-glyph",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "YWuyjhWbdoTiA1pw",
      "slug": "temporary-glyph",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:7df6fc33eeaca4d0b58ab569c5251286e0dc60aaaa62e137322f0ef5a5a8209b",
    "translatableHash": "sha256:cf315943737827f7b483ba5812df6f75eff7cc65fdfb26c9d2426a1fcbea13e8",
    "data": {
      "schemaVersion": 1,
      "name": "Temporary Glyph",
      "rank": 5,
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
      "description": "Area 5-foot square\nYou temporarily bind a hostile spell into a symbol. While Casting this Spell, you also Cast a Spell of a lower spell rank to store in the glyph. The stored spell must take 2 actions or fewer to Cast, have a hostile effect, and target one creature or have an area. Any creature that enters temporary glyph's area activates the glyph, releasing the harmful spell within. You can set a password for the glyph. Speaking it when entering the spell's area prevents the glyph from triggering. You can also set a more specific trigger to limit which types of creatures set off the glyph.\nOnce a spell is stored in the glyph, the glyph gains all the traits of that spell. If the stored spell can target one or more creatures, it targets the creature that set off the glyph. If it has an area, that area is centered on the creature that set off the glyph. Temporary glyph's duration ends when the glyph is triggered. The glyph is a magical trap, using your spell DC for both the Perception check to notice it and the Thievery check to disable it; both checks require the creature attempting them to be trained in order to succeed.\nYou can Dismiss temporary glyph.",
      "castingTime": "3 actions",
      "range": "30 feet",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:flowing-strike",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "zCLyETFoPqCQXLVy",
      "slug": "flowing-strike",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:5b6b7533e9833e32d1738026018625f39463e7808ffd9d7f4e313d7c6d06c6a3",
    "translatableHash": "sha256:2889add09c91024f85ac517603474f2a532ee8c8324fe8e66095e038c7277982",
    "data": {
      "schemaVersion": 1,
      "name": "Flowing Strike",
      "rank": 5,
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
      "description": "A wave of flowing water rushes behind you like an elegant river, pushing you across the battlefield with fluid grace. You Stride up to 50 feet. This movement doesn't trigger reactions. You can make a Strike at any point during your Stride. If your Strike hits, the wave flows after you to batter the target of your Strike as well, dealing 2d10 bludgeoning damage and pushing it 10 feet in a direction of your choice.",
      "castingTime": "3 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [
        {
          "formula": "2d10",
          "type": "bludgeoning",
          "kind": "damage"
        }
      ],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:necrotize",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "6lO6uMQxbqmYho0e",
      "slug": "necrotize",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:52d1149aa29488364bde47c6ec16cc995fd2e941b0dd6e858ffc7403b236d56c",
    "translatableHash": "sha256:afc00e30c039f01db3bc1baf557db39e8eef47c1bb0e0a90733cd87153a35fe2",
    "data": {
      "schemaVersion": 1,
      "name": "Necrotize",
      "rank": 6,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "void"
      ],
      "traditions": [
        "arcane",
        "divine",
        "primal"
      ],
      "description": "You necrotize part of a creature's body, harming it and debilitating it as its body putrefies, mimicking the natural process of decay. The target takes 12d6 void damage and one of the following debilitations; roll 1d4 to randomly determine which. The effects depend on its Fortitude save.\n• Bones The target's bones necrotize and become spongy and weak, giving it weakness 3 to bludgeoning damage.\n• Joints The target's joints necrotize, making its movements ungainly and clumsy. It becomes Clumsy 1.\n• Legs The target's legs necrotize, as well as any other limbs associated with forms of movement, making it harder for the creature to move. The target takes a –10-foot status penalty to its Speeds. Spell Effect: Necrotize (Legs)\n• Muscles The target's muscles necrotize, rotting away. The target becomes Enfeebled 1.\nCritical Success The target is unaffected.\nSuccess The target takes half damage and the debilitation lasts until the end of your next turn.\nFailure The target takes full damage and the debilitation lasts for 1 minute.\nCritical Failure The target takes double damage, and you can pick a second debilitation to apply, in addition to the one you rolled randomly. Both debilitations last for 1 minute.\nHeightened 1 The damage increases by 2d6.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "1 living creature",
      "area": null,
      "duration": "",
      "defense": "fortitude save",
      "damage": [
        {
          "formula": "12d6",
          "type": "void",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:daemon-form",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "aSDfGcUOUVGU5m1g",
      "slug": "daemon-form",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:4fc1826e9e257d5e856dd754a12b417d1059745252a7d8f41aafe01b384445f5",
    "translatableHash": "sha256:19f47819770da6828721ddb8e173f21878a7bc6dd31215e8a1d76e36afe9ee15",
    "data": {
      "schemaVersion": 1,
      "name": "Daemon Form",
      "rank": 6,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "polymorph",
        "unholy"
      ],
      "traditions": [
        "arcane",
        "divine"
      ],
      "description": "You infuse yourself with the corrupting death and pure malevolence of Abaddon, transforming into a Large daemon battle form. You must have enough space to expand into or the spell is lost. When you cast this spell you choose either lacridaemon, leukodaemon, meladaemon, or venedaemon. The battle form is Medium if you choose lacridaemon or venedaemon. While in this form, you gain the daemon and fiend traits. You have hands in this battle form and can use manipulate actions. You can Dismiss the spell.\nYou gain the following statistics and abilities regardless of the form that you choose:\n• AC = 21 + your level. Ignore your armor check's penalty and Speed reduction.\n• 15 temporary Hit Points and weakness 5 to holy.\n• A +2 status bonus to all saving throws against death effects.\n• Resistance 10 to poison.\n• Darkvision.\n• One or more attacks specific to the battle form you use. You're trained with them. Your attack modifier is +21, and you use the listed damage. These attacks are Strength based (for the purpose of the enfeebled condition, for example). If your unarmed attack modifier is higher, you can use it instead.\n• Athletics modifier of +23, unless your own modifier is higher.\nYou also gain specific abilities based on the type of Daemon you choose:\n• Lacridaemon Speed 25 feet, fly 40 feet resistance 10 to cold\n• Size Medium\n• Melee 1 jaws (magical, unholy), Damage 1d8+12 piercing plus 1d6 cold and 1d4 poison\n• Melee 1 claw (agile, magical, unholy), Damage 1d6+12 slashing plus 1d6 cold.\n• Leukodaemon Speed 25 feet, fly 40 feet +2 status bonus to saves against diseases\n• Size Large\n• Melee 1 jaws (magical, reach 10 feet, unholy), Damage 2d10+12 piercing\n• Melee 1 claw (agile, magical, reach 10 feet, unholy), Damage 2d6+12 slashing;\n• Ranged 1 composite longbow (deadly 1d10, magical, propulsive, range increment 100 feet, unholy, volley), Damage 2d8+12 piercing.\n• Meladaemon Speed 25 feet, fly 40 feet\n• Size Large\n• Melee 1 jaws (magical, reach 10 feet, unholy), Damage 2d10+12 piercing\n• Melee 1 claw (agile, magical, reach 10 feet, unholy, void), Damage 1d6+12 slashing plus 1d6 void, and you can spend an action after a hit to attempt to Grab the target.\n• Venedaemon Speed 25 feet sense magical items and active spells within 60 feet as an imprecise sense\n• Size Medium\n• Melee 1 tentacle (agile, magical, reach 10 feet, unholy), Damage 2d6+12 bludgeoning.\nSpell Effect: Daemon Form",
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
    "contentId": "pf2e:spell:spells-srd:demon-form",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "dKbv80rlAWVpz83C",
      "slug": "demon-form",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:c175e1d6fb6e837fd68df843a362fdc4aacff6d2dfde741dd2db1d72d5b6b5cb",
    "translatableHash": "sha256:bad94026ac839c7bb15599232135a01545677088498cf01f9d92cd931c9f4dbe",
    "data": {
      "schemaVersion": 1,
      "name": "Demon Form",
      "rank": 6,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "polymorph",
        "unholy"
      ],
      "traditions": [
        "arcane",
        "divine"
      ],
      "description": "You corrupt yourself with the sin of the Outer Rifts, transforming into a Medium demon battle form. When you cast this spell, choose abrikandilu, brimorak, kithangian, or vloriak. If you choose kithangian, the battle form is Large and you must have enough space to expand into or the spell is lost. While in this form, you gain the demon and fiend traits. You have hands in this battle form and can use manipulate actions. You can Dismiss the spell.\nYou gain the following statistics and abilities regardless of the form that you choose:\n• AC = 20 + your level. Ignore your armor check's penalty and Speed reduction.\n• 30 temporary Hit Points, weakness 5 to cold iron, and weakness 5 to holy.\n• Darkvision.\n• One or more attacks specific to the battle form you use. You're trained with them. Your attack modifier is +22, and you use the listed damage. These attacks are Strength based (for the purpose of the enfeebled condition, for example). If your attack modifier is higher for the given unarmed attack or weapon, you can use it instead.\n• Athletics modifier of +23, unless your own modifier is higher.\nYou also gain specific abilities based on the type of demon you choose:\n• Abrikandilu Speed 25 feet;\n• Melee 1 jaws (magical, unholy), Damage 2d6+12 piercing, and clumsy 1 for 1 minute on a critical hit;\n• Melee 1 claw (agile, magic, unholy), Damage 2d6+12 slashing;\n• Ranged1 hurled debris (range increment 20 feet, unholy), Damage 2d6+6 bludgeoning.\n• Brimorak Speed 30 feet;\n• Melee 1 flaming sword (magical, unholy), Damage 2d8+10 slashing plus 1d6 fire;\n• Melee 1 hoof (agile, unholy), Damage 2d4+10 bludgeoning plus 1d6 fire.\n• Kithangian Speed 30 feet;\n• Melee 1 pincer (magical, reach 10 feet, unholy), Damage 1d12+12 slashing, and you can spend an action after a hit to attempt to Grab the target\n• Melee 1 stinger (agile, magical, reach 10 feet, unholy), Damage 1d8+12 piercing; all melee Strikes deal 2d6 additional precision damage to animals.\n• Vloriak Speed 25 feet; resistance 10 to acid;\n• Melee 1 claw (unholy), Damage 2d6+12 piercing plus 1d6 spirit;\n• Melee 1 tongue (agile, reach 10 feet, unholy), Damage 1d6+12 acid plus 1d6 spirit.\nSpell Effect: Demon Form",
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
    "contentId": "pf2e:spell:spells-srd:devil-form",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "dR53f0p15EW7D0xC",
      "slug": "devil-form",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:f6886af8607f67d41c5a48f706a987f04d81063b7c61ebe87245e22887f879e7",
    "translatableHash": "sha256:4a77fa1e5a748b9e3cfdadd18b953e67d543325ce0125193be1972a216c308f7",
    "data": {
      "schemaVersion": 1,
      "name": "Devil Form",
      "rank": 6,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "polymorph",
        "unholy"
      ],
      "traditions": [
        "arcane",
        "divine"
      ],
      "description": "You bind yourself to the power of Hell, transforming into a Medium devil battle form. When you cast this spell, choosecoarti, levaloch, sarglagon, or vordine. If you choose levaloch or sarglagon, the battle form is Large and you must have enough space to expand into or the spell is lost. While in this form you gain the devil and fiend traits. You have hands in this battle form and can use manipulate actions. You can Dismiss the spell.\nYou gain the following statistics and abilities regardless of the form that you choose:\n• AC = 22 + your level. Ignore your armor check's penalty and Speed reduction.\n• 5 temporary Hit Points, resistance 5 to physical damage (except silver), and weakness 5 to holy.\n• Resistance 10 to fire.\n• Darkvision.\n• One or more attacks specific to the battle form you use. You're trained with them. Your attack modifier is +20, and you use the listed damage. These attacks are Strength based (for the purpose of the enfeebled condition, for example). If your attack modifier is higher for the given unarmed attack or weapon, you can use it instead.\n• Athletics modifier of +23, unless your own modifier is higher.\nYou also gain specific abilities based on the type of devil you choose:\n• Coarti Speed 25 feet, fly 40 feet;\n• Size Medium\n• Melee 1 morningstar (magical, unholy, versatile P), Damage 2d6+12 bludgeoning plus 1d6 spirit;\n• Melee 1 wing (agile, unholy, versatile P), Damage 1d6+12 bludgeoning plus 1d6 fire.\n• Levaloch Speed 30 feet, climb 30 feet; +2 circumstance bonus to Fortitude DC against being Shoved and to other saving throws to resist being moved against your will;\n• Size Large\n• Melee 1 trident (magical, unholy) Damage 2d8+10 piercing;\n• Ranged 1 trident (magical, thrown 20 feet, unholy), Damage 2d8+10 piercing; all melee Strikes deal 2d6 additional precision damage to clumsy, enfeebled, immobilized, or restrained creatures.\n• Sarglagon Speed 25 feet, fly 25 feet, swim 30 feet;\n• Size Large\n• Melee 1 fangs (magical, unholy), Damage 2d10+10 piercing;\n• Melee 1 tentacle arm (agile, magical, unholy), Damage 1d8+10 bludgeoning plus 1d6 poison.\n• Vordine Speed 25 feet;\n• Size Medium\n• Melee 1 trident (magical, unholy) Damage 2d8+12 piercing;\n• Melee 1 hoof (agile, magical, unholy), Damage 1d4+12 plus 1d6 fire;\n• Melee 1 whip (disarm, magical, nonlethal, reach 10 feet, trip, unholy), Damage 2d4+10 slashing;\n• Ranged 1 trident (magical, thrown 20 feet, unholy), Damage 2d8+12 piercing.\nSpell Effect: Devil Form",
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
    "contentId": "pf2e:spell:spells-srd:chromatic-image",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "FgRpddPORsRFwNoX",
      "slug": "chromatic-image",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/chromatic-image.webp"
    },
    "sourceHash": "sha256:6e8ccf151e80c7cffa01859bb28c3e2d97584d5fc99aeb0a65728b43a5def1ba",
    "translatableHash": "sha256:a99c3d47c2f473aea318b2dbc5fcae67900739799b5559d2d30ec284c56e6838",
    "data": {
      "schemaVersion": 1,
      "name": "Chromatic Image",
      "rank": 6,
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
      "description": "You call forth three illusory images of yourself, and each of the four of you takes on a different color, your colors all shifting each time someone attacks you. This has the effects of Mirror Image, except that whenever a foe destroys one of the images, roll 1d4 to see which color the image was when it was destroyed. The attacker takes the corresponding effect.\n• Red 5 fire damage and 5 mental damage.\n• Orange 5 acid damage and 5 mental damage.\n• Yellow 5 electricity damage and 5 mental damage.\n• Green 5 poison damage and 5 mental damage, plus it's Frightened 1.",
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
    "contentId": "pf2e:spell:spells-srd:catch-your-name",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "FyOgUkq71LNC143w",
      "slug": "catch-your-name",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:a4857e35e5f59a87a27c64bb4ba2a633d01d921e376df7ac1781362fb3bcd27f",
    "translatableHash": "sha256:9ce6e1fe769f5125361c3b0f524098ccc438e6a37d9acb1244037f28cf66da82",
    "data": {
      "schemaVersion": 1,
      "name": "Catch Your Name",
      "rank": 6,
      "rarity": "rare",
      "traits": [
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult",
        "primal"
      ],
      "description": "Trigger A creature on your plane speaks your private or true name\nRequirements You know your own true name.\nYou learn a private name (but not the true name) of the creature who spoke your name, as well as their precise location, unless they succeed at a Will save to negate the effect. You are aware any time the trigger conditions are met as long as you have the spell prepared or in your repertoire. There is no way to distinguish one trigger of this spell from another without actually casting the spell. This can become a nuisance if you are so famous that your name is regularly on others' lips.",
      "castingTime": "reaction",
      "range": "",
      "target": "",
      "area": null,
      "duration": "",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:flame-vortex",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Gn5deIoobHpd3SiR",
      "slug": "flame-vortex",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:8a941e01d861ac1ee865299358cdb1d22369e10d03a0b43acf8951a4e49841f5",
    "translatableHash": "sha256:0d680467875e911f675a2a46a5cd34ae1cc113e88a74101cd272f0e5e7195deb",
    "data": {
      "schemaVersion": 1,
      "name": "Flame Vortex",
      "rank": 6,
      "rarity": "common",
      "traits": [
        "air",
        "concentrate",
        "fire",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "Area 5-foot radius, 40-foot tall cylinder\nYou combine a blazing inferno and air currents into a fiery vortex. You can Cast this Spell only if you are outside or the ceiling is 40 feet or higher. All squares in the vortex are difficult terrain for flying creatures.\nAll creatures in the area take 3d4 bludgeoning damage and 3d6 fire damage as gusts of fiery wind buffet them, with a basic Reflex save. Each time you Sustain the Spell, you can move the whirlwind up to 20 feet in a straight line. Each creature the whirlwind moves through takes the damage with a basic Reflex save. A creature can take damage from a flame vortex only once per round.\nHeightened 2 The vortex deals an additional 1d4 bludgeoning damage and 1d6 fire damage.",
      "castingTime": "3 actions",
      "range": "120 feet",
      "target": "",
      "area": "5 cylinder",
      "duration": "",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "3d4",
          "type": "bludgeoning",
          "kind": "damage"
        },
        {
          "formula": "3d6",
          "type": "fire",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The vortex deals an additional 1d4 bludgeoning damage and 1d6 fire damage."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:cast-into-time",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "OdqM06M0wDUqZWiR",
      "slug": "cast-into-time",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:9a99cf12f9a337927c6090146a388d3287bd335c2a0741caeec402c6ae4cdc0a",
    "translatableHash": "sha256:6be429c3f6ac8f5a788555eb6706a6b6998710ccf8790efb00eecf4794dd9fc4",
    "data": {
      "schemaVersion": 1,
      "name": "Cast into Time",
      "rank": 6,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You release a wave of temporal energy that sends creatures violently tumbling through time, scarring their thoughts with the information flowing around them. Although the journey can feel like it lasts for minutes or even days, the targets reappear instantly. Witnessing this chaotic flow of time and being bashed against objects from different times deals the targets 5d8 mental damage and 5d6 bludgeoning damage, with a Fortitude save. A creature that falls into time disappears until the end of your turn. It then reappears in the same space it left; if that space is occupied, it appears in the nearest empty space, chosen by the GM.\nCritical Success The creature is unaffected.\nSuccess The creature falls into time. When it returns, it takes half damage.\nFailure The creature falls into time. When it returns, it takes full damage and is Sickened 1.\nCritical Failure The creature falls into time. When it returns, it takes double damage and is Sickened 2.\nHeightened 1 The bludgeoning damage increase by 2d6.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "15 cone",
      "duration": "",
      "defense": "fortitude save",
      "damage": [
        {
          "formula": "5d8",
          "type": "mental",
          "kind": "damage"
        },
        {
          "formula": "5d6",
          "type": "bludgeoning",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The bludgeoning damage increase by 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:unexpected-transposition",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "OOMQ8Z6EIrGt5NJ6",
      "slug": "unexpected-transposition",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/unexpected-transposition.webp"
    },
    "sourceHash": "sha256:e6ce80aba221a227aa072d7dea4b5197049f89a1c6d7aac65397669268d56578",
    "translatableHash": "sha256:66ce3903574fa6cff1aa97b7602db5e8c579875638b13fd3b4985ac60eb3ba95",
    "data": {
      "schemaVersion": 1,
      "name": "Unexpected Transposition",
      "rank": 6,
      "rarity": "common",
      "traits": [
        "concentrate",
        "teleportation"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "Trigger You are targeted with an enemy's Strike.\nWhen attacked, you attempt to quickly swap your own position with that of another creature. A creature that is unwilling to swap places with you must attempt a Will save. Willing creatures automatically fail. If you successfully switch places with the target, the triggering attack is resolved against that creature as if it had been the original target of the attack. After the swap, you and the target are both temporarily immune to unexpected transposition spells for 1 minute. You automatically switch places if the target is willing. If it's unwilling, it can attempt a Will save. Neither of you teleports if the target succeeds at its save.",
      "castingTime": "reaction",
      "range": "30 feet",
      "target": "1 creature other than the triggering enemy",
      "area": null,
      "duration": "",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:zero-gravity",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "P1iqzEIidRagUs7W",
      "slug": "zero-gravity",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/zero-gravity.webp"
    },
    "sourceHash": "sha256:cfe8fc68f6fbe7c12e74f100f312237daf695409ac43f592a18cca3767b29a41",
    "translatableHash": "sha256:fe6377e3aaf7f6dc6be74f3ef207848d73243ff469d5fd5d8dd3798bb66e75ab",
    "data": {
      "schemaVersion": 1,
      "name": "Zero Gravity",
      "rank": 6,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "Area 20-foot radius, 40-foot-tall cylinder\nYou negate gravity's effects in the area. Creatures float in place unless they can Push Off a surface. Pushing Off is a single action which has the move trait, allowing the creature to move half its Speed in a straight line through the area. After Pushing Off a surface, the creature continues to move the same distance at the start of each of its turns until it leaves the area or Pushes Off against something else. A creature pushing against an untethered object of its size or smaller causes both the creature and the object to move at the same speed, but in opposite directions. Creatures who can levitate or fly can use those abilities to move around in the area without having to push off anything. Creatures who can't levitate or fly are usually on the ground, giving them a surface from which to push off.\nYou can Dismiss this spell. When zero gravity ends, all creatures and objects in the area fall back down.",
      "castingTime": "3 actions",
      "range": "120 feet",
      "target": "",
      "area": "20 cylinder",
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:prismatic-armor",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "4nEY2BcV85wavKLO",
      "slug": "prismatic-armor",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/prismatic-armor.webp"
    },
    "sourceHash": "sha256:2da841b10ca2693bfd813de167f2442c5145932cfd4cc503f583d3e5e26c08c6",
    "translatableHash": "sha256:aa42a73e12f1a95145dd702524eade248e35137873897dc7efb322a8b71dd664",
    "data": {
      "schemaVersion": 1,
      "name": "Prismatic Armor",
      "rank": 7,
      "rarity": "common",
      "traits": [
        "concentrate",
        "light",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You wrap the target in armor made of multicolored light. It functions as Chromatic Armor that is all colors (granting resistance 5 to acid, electricity, fire, force, mental, poison, and sonic). An attacker that critically fails on its saving throw against the spell is Blinded rather than Dazzled.\nSpell Effect: Prismatic Armor\nHeightened (9th) The resistances increase to 10 each.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 willing creature",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (9th) The resistances increase to 10 each."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:corrosive-body",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "9aFg4EuOBVz0i3Lb",
      "slug": "corrosive-body",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:98f1892666756b79db258e1f605e4a605f4c28ee19d29170529eb46e5613e96a",
    "translatableHash": "sha256:0ce0e816a2858cf1836f521309273571b23545c2753068d7ffef7e8899bdd2d2",
    "data": {
      "schemaVersion": 1,
      "name": "Corrosive Body",
      "rank": 7,
      "rarity": "common",
      "traits": [
        "acid",
        "concentrate",
        "manipulate",
        "polymorph"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You exhale corrosive gas, and acidic secretions coat your skin as you transform into a being of living acid. You gain acid immunity. Any creature that touches you or damages you with an unarmed melee attack or non-reach melee weapon takes 3d6 acid damage, and your unarmed attacks deal 1d4 additional acid damage. The first time each round that you deal acid damage to a creature in this way, you gain 3d6 Temporary Hit Points temporary Hit Points as your body digests the eroded material and transforms it into a protective acid. When the spell ends, any remaining temporary HP expires as well. Your acid spells deal one additional die of acid damage (of the same damage die the spell uses). You can cast Acid Splash as an innate spell; the splash damage affects all creatures within 15 feet instead of the normal 5 feet.\nSpell Effect: Corrosive Body\nHeightened (9th) Creatures touching you take 4d6 acid damage instead of 3d6, your unarmed attacks deal 2d4 additional acid damage, and you gain 5d6 Temporary Hit Points temporary Hit Points.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [
        {
          "formula": "3d6",
          "type": "acid",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (9th) Creatures touching you take 4d6 acid damage instead of 3d6, your unarmed attacks deal 2d4 additional acid damage, and you gain 5d6 Temporary Hit Points temporary Hit Points."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:angel-form",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "E3zIZ4pjlOuWeGRz",
      "slug": "angel-form",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:7600486e89d199f9d033dd46102b91694f4f001758d85a789dedca8359a0da99",
    "translatableHash": "sha256:cb8fc515b8a975a413ff66515818528e724ed2e2598e53e06396988e603db038",
    "data": {
      "schemaVersion": 1,
      "name": "Angel Form",
      "rank": 7,
      "rarity": "common",
      "traits": [
        "concentrate",
        "holy",
        "manipulate",
        "polymorph"
      ],
      "traditions": [
        "divine"
      ],
      "description": "Invoking the celestial realms, you transform into a Medium angel battle form. When you cast this spell, choose balisse, choral, kuribu, or tennin. The battle form is Small if you choose choral or kuribu. While in this form, you gain the angel and celestial traits. You have hands in this battle form and can use manipulate actions. You can Dismiss the spell.\nYou gain the following statistics and abilities regardless of the form that you choose:\n• AC = 22 + your level. Ignore your armor check's penalty and Speed reduction.\n• 40 temporary Hit Points and weakness 10 to unholy.\n• Darkvision.\n• One or more attacks specific to the battle form you choose. You're trained with them. Your attack modifier is +25, and you use the listed damage. Melee attacks are Strength based (for the purpose of the enfeebled condition, for example), and ranged attacks are Dexterity based. If your attack modifier is higher for the given unarmed attack or weapon, you can use it instead.\n• Athletics modifier of +25, unless your own modifier is higher.\nYou also gain specific abilities based on the type of angel you choose:\n• Balisse Speed 30 feet, fly 40 feet; Perception modifier of +26 to detect lies and illusions unless your own modifier is higher\n• Melee 1 scimitar (fire, forceful, holy, magical, sweep), Damage 2d6+12 slashing plus 2d6 fire.\n• Choral Speed 30 feet, fly 40 feet; +1 status bonus to AC and saves against sonic and auditory\n• Melee 1 fist (agile), Damage 2d6+12 bludgeoning plus 1d6 spirit;\n• Ranged 1 piercing hymn (range 90 feet), Damage 1d6+12 sonic plus 1d6 spirit, and Deafened for 1 round on a critical hit.\n• Kuribu Speed 25 feet, fly 40 feet; resistance 10 to electricity and fire\n• Melee 1 fist (agile, holy, magical), Damage 3d4+12 bludgeoning.\n• Ranged 1 composite shortbow (deadly 2d10, holy, magical, propulsive, range increment 60 feet) Damage 3d6+12 piercing\n• Tennin Speed 30 feet, fly 60 feet; can Step into difficult terrain and use land and fly Speeds to Step;\n• Melee 1 fist (agile, holy, magical, nonlethal), Damage 1d6+12 bludgeoning plus 1d6 cold and 1d6 spirit.\nSpell Effect: Angel Form\nHeightened (9th) Your battle form is Large. You must have space to expand, or the spell is lost. You instead gain 60 temporary Hit Points, weakness 15 to unholy, attack modifier +30, damage bonus +20, and Athletics +33.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (9th) Your battle form is Large. You must have space to expand, or the spell is lost. You instead gain 60 temporary Hit Points, weakness 15 to unholy, attack modifier +30, damage bonus +20, and Athletics +33."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:inexhaustible-cynicism",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "gMbrNFKz9NP3TR4s",
      "slug": "inexhaustible-cynicism",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/inexhaustible-cynicism.webp"
    },
    "sourceHash": "sha256:6c10dd9ceee433b82a1dd8f999df9837ee1e12dff9f5d56e7cc2f597a009aa91",
    "translatableHash": "sha256:0870ee53280e055b4ea4933f104345d65ac00ccdbdacff89c737951165e8c67a",
    "data": {
      "schemaVersion": 1,
      "name": "Inexhaustible Cynicism",
      "rank": 7,
      "rarity": "common",
      "traits": [
        "concentrate",
        "emotion",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult"
      ],
      "description": "You inflict your targets with a crushing doubt about everyone and everything around them. For the duration, each target is unwilling to receive any effects that require a willing target (in case the effect was secretly an attack), refuse to ingest anything (in case the substances have been replaced with poisons and cursed duplicates), doesn't treat anyone as an ally (in case its friends were replaced by an impostor), and doesn't believe anything it's told (in case of lies, though this doesn't mean the creature automatically believes the opposite either). It doesn't even fully trust its own ability to Recall Knowledge, as it becomes convinced it most likely remembered false information, as from a critical failure on a check to Recall Knowledge.\nFinally, the creature takes 6d6 mental damage at the end of each of its turns (with no save) unless it spent at least 1 action that turn Seeking or otherwise interacting with its surroundings in an attempt to disbelieve the illusions that it feels are obviously surrounding it.\nCritical Success The creature is unaffected.\nSuccess The creature is affected for 1 round.\nFailure The creature is affected for 1 minute.\nCritical Failure The creature is affected for 1 hour.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "up to 5 creatures",
      "area": null,
      "duration": "",
      "defense": "will save",
      "damage": [
        {
          "formula": "6d6",
          "type": "mental",
          "kind": "damage"
        }
      ],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:cosmic-form",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "IHUs4qn27RrdFQ5Y",
      "slug": "cosmic-form",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:f103d71df69aa93477bd68019b5fece78baf344b5d431bb94f1198beff4489fd",
    "translatableHash": "sha256:0e4c33f91db30527e87a07cc22217d2b005f3328b27113f80e457d384ed93415",
    "data": {
      "schemaVersion": 1,
      "name": "Cosmic Form",
      "rank": 7,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "polymorph"
      ],
      "traditions": [
        "divine",
        "primal"
      ],
      "description": "You recreate your form entirely out of cosmic energy, transforming into a Large battle form. You must have enough space to expand into, or the spell is lost. When you cast this spell, choose to take on the powers of the moon or the sun. You have hands in this battle form and can use manipulate actions. You can Dismiss the spell.\nYou gain the following statistics and abilities regardless of the form that you choose:\n• AC = 21 + your level. Ignore your armor check's penalty and Speed reduction.\n• 20 temporary Hit Points.\n• Darkvision.\n• One or more attacks specific to the battle form you use. You're trained with them. Your attack modifier is +25, and you use the listed damage. The melee attacks are Strength based (for the purpose of the enfeebled condition, for example), and the ranged attacks are Dexterity based. If your unarmed attack modifier is higher, you can use it instead.\n• Athletics modifier of +25, unless your own is higher.\nYou also gain specific abilities based on the stellar body:\n• Moon Speed 30 feet, fly 50 feet\n• Melee 1 fist (agile, reach 10 feet), Damage 2d4+10 bludgeoning plus 1d6 fire\n• Ranged 1 moonbeam (range 90 feet), Damage 2d4+10 fire; this form's fire damage is silver for resistances, weaknesses, and the like\n• On a critical hit with either Strike, the target is Stupefied 2 for 1 round.\n• Sun Speed 30 feet, fly 50 feet\n• Melee 1 fist (agile, reach 10 feet), Damage 2d6+10 fire plus 1d6 persistent fire\n• Ranged 1 sunbeam (range 90 feet), Damage 1d6+10 fire plus 1d6 persistent fire\n• On a critical hit with either Strike, the target is Dazzled for 1 round.\nSpell Effect: Cosmic Form",
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
    "contentId": "pf2e:spell:spells-srd:tempest-of-shades",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "JLdbyGKhjwAAoRLs",
      "slug": "tempest-of-shades",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/tempest-of-shades.webp"
    },
    "sourceHash": "sha256:455a42d9ede1c59f78f3eed39be66fc6600010e3f1e7523bb82de0001c4387b5",
    "translatableHash": "sha256:494dddaaacd94f7b99641bfeab1975ba214b634e9071670ebd059624008c1322",
    "data": {
      "schemaVersion": 1,
      "name": "Tempest of Shades",
      "rank": 7,
      "rarity": "common",
      "traits": [
        "concentrate",
        "incarnate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult"
      ],
      "description": "You channel the forces of undeath to briefly call forth an amalgam of the vengeful dead slain by your enemies and allies alike. This amalgam manifests as a large tornado of insubstantial, howling faces. It occupies the space of a Huge creature and has a Speed of 60 feet.\nArrive (negative) Vortex of Death Each enemy creature within a 60-foot emanation must attempt a Fortitude save with the following effects.\nCritical Success The creature is unaffected\nSuccess The creature is Drained 1.\nFailure The creature is Drained 2.\nCritical Failure The creature is Drained 3.\nDepart (emotion, fear, mental) Howl of Eternity The vengeful dead lets out an anguished scream. All your enemies within a 100-foot emanation must attempt check (will, name:Tempest of Shades Depart, traits:necromancy,emotion,fear,mental) saves with the following effects.\nCritical Success The creature is unaffected.\nSuccess The creature is Frightened 1.\nFailure The creature is Frightened 3.\nCritical Failure The creature is frightened 3. It's also Fleeing for 1 round or until it's no longer frightened, whichever comes first.",
      "castingTime": "3 actions",
      "range": "100 feet",
      "target": "",
      "area": null,
      "duration": "until the end of your next turn",
      "defense": "fortitude save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:frigid-flurry",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "vFkz0gVBUT2gGnm1",
      "slug": "frigid-flurry",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/frigid-flurry.webp"
    },
    "sourceHash": "sha256:13bbf124c8beb936966eec09aade2d4a565b318b2590a3136b6a30d47b3fb6cb",
    "translatableHash": "sha256:551d6876ae50cc9d5c39f84be26657f345bd7a0d82706d84c845a074252a7bd8",
    "data": {
      "schemaVersion": 1,
      "name": "Frigid Flurry",
      "rank": 7,
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
      "description": "Area (continued) line up to 120 feet\nYou place a palm to your lips and exhale a cold breath, whipping up a gust of wind that freezes the air's ambient moisture into a flurry of jagged shards. The flurry deals 9d6 cold damage and 9d6 slashing damage to all foes, with a basic Reflex save, but the gust flows harmlessly around your allies. The wind then picks you up and carries you to the other end of the area; though your movement within the gust can still trigger reactions, the storm of ice crystals prevents you from being affected by any effects, except for those that would counteract the spell's magic or that the GM decides would affect snow.\nHeightened 1 The cold and slashing damage each increase by 1d6.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "120 line",
      "duration": "",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "9d6",
          "type": "cold",
          "kind": "damage"
        },
        {
          "formula": "9d6",
          "type": "slashing",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The cold and slashing damage each increase by 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:shadow-raid",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "VTb0yI6P1bLkzuRr",
      "slug": "shadow-raid",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:3292a8c7386c05b2b4612a89e455a30b5db56d899963ebd1ea3c3ec6a8a4cdb6",
    "translatableHash": "sha256:09431497ee691282315d8ba8d0cd5f9e24e28dc197532f8508cdd2ee034f9734",
    "data": {
      "schemaVersion": 1,
      "name": "Shadow Raid",
      "rank": 7,
      "rarity": "common",
      "traits": [
        "concentrate",
        "illusion",
        "manipulate",
        "shadow"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You spin illusions of flying shadows throughout the area. The shadows strike and cavort, harming your foes and blocking their vision with twisting shadow. Enemies in the area when you Cast the Spell take 6d8 bludgeoning, piercing, or slashing damage, with a check (reflex, basic, traits:illusion) or check (will, basic, traits:illusion) save, as shadows explode into being. You choose the damage type when you Cast the Spell, and each creature chooses the type of save it attempts before it rolls the save. The shadows then persist in the area for 1 minute, dealing 3d8 damage of the type you chose to any enemy that ends its turn in the area. All creatures are Concealed to enemies in the area, as the illusory shadows swarm over them and block light.\nA creature that spends an action to Seek or otherwise interact with the shadow raid can attempt a Perception check to disbelieve it. On a success, the creature halves the damage it takes from the shadows, and the shadows no longer impede its vision. These benefits last until the spell ends.\nHeightened (9th) The initial damage increases by 2d8, and the damage to a creature that ends its turn in the area increases by 1d8 (4d8).",
      "castingTime": "3 actions",
      "range": "120 feet",
      "target": "",
      "area": "30 burst",
      "duration": "1 minute",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "6d8",
          "type": "bludgeoning",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (9th) The initial damage increases by 2d8, and the damage to a creature that ends its turn in the area increases by 1d8 (4d8)."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:deitys-strike",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "x9RIFhquazom4p02",
      "slug": "deitys-strike",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:45daf7824a8e2bde59707fbe4c6b41b57ace356052b15f17e05d03b34bd43be0",
    "translatableHash": "sha256:30a4d5a08c09845379305304a708bd839061416113132885175999908893c3c5",
    "data": {
      "schemaVersion": 1,
      "name": "Deity's Strike",
      "rank": 7,
      "rarity": "common",
      "traits": [
        "concentrate",
        "force",
        "manipulate"
      ],
      "traditions": [
        "divine"
      ],
      "description": "A manifested version of your deity's favored weapon appears in the air above and attacks the target, using your spell attack roll. On a hit, the weapon deals 7d12 force damage, or double damage on a critical hit.\nAfter the attack, whether it succeeds or fails, divine energy bursts from the weapon in a shock wave. It emits in a 30-foot line starting from the target and continuing in a direction you choose. Choose an alignment your deity has (chaotic, evil, good, or lawful). Your target and any other creatures within the area of the spell take (ternary(gte(7,9),6,5))d6[spirit|shortLabel] damage of the chosen alignment type, with a basic Reflex save. The spell gains the trait of the alignment you choose. If your deity is true neutral, the weapon doesn't create a shock wave.\nHeightened (9th) The force damage increases by 1d12 and the alignment damage increases by 1d6.",
      "castingTime": "2 actions",
      "range": "500 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "7d12",
          "type": "force",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (9th) The force damage increases by 1d12 and the alignment damage increases by 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:whirlwind",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "8hKW4mWQyLnkHVta",
      "slug": "whirlwind",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/whirlwind.webp"
    },
    "sourceHash": "sha256:1aecff0d416bc74bd84bb72a3d376c380178a68e5f57814d31253697f59cf0fe",
    "translatableHash": "sha256:f831a64d0794d46b53f7a5fc1a3eccc98a86ed50866fec7961545fdc8bda00d9",
    "data": {
      "schemaVersion": 1,
      "name": "Whirlwind",
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
      "description": "Area (continued) 15-foot radius, 80-foot-tall cylinder\nPowerful winds coalesce into a devastating tornado. You can Cast this Spell only if you are outside or the ceiling is 80 feet or higher. All squares in the whirlwind are difficult terrain.\nAll creatures in the area take 5d10 bludgeoning damage as powerful winds and debris buffet them, with a Reflex save. Each time you Sustain the Spell, you can move the whirlwind up to 30 feet in a straight line. Each creature the whirlwind moves through takes the damage, also with a Reflex save. A creature can be affected by a whirlwind only once per round.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage.\nFailure The creature takes full damage and rises 10 feet into the air. If it doesn't have a fly Speed, the creature gains one equal to its Speed until it either reaches the ground or ceases to be in the whirlwind's area, potentially falling when the spell ends or when it leaves the area.\nCritical Failure As failure, except the creature takes double damage and rises 20 feet into the air.\nHeightened 1 Increase the bludgeoning damage by 1d10.",
      "castingTime": "3 actions",
      "range": "500 feet",
      "target": "",
      "area": "15 cylinder",
      "duration": "1 minute",
      "defense": "reflex save",
      "damage": [
        {
          "formula": "5d10",
          "type": "bludgeoning",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 Increase the bludgeoning damage by 1d10."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:clone-companion",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "A0sMo1L0271yLeDA",
      "slug": "clone-companion",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:d1a96c04b694837827336f89b26ae6aa9212be2d99b2fb9c477d674e8a390def",
    "translatableHash": "sha256:91a62833a0409b826775e7946045291e3486619bcd45630901af2435babc5a26",
    "data": {
      "schemaVersion": 1,
      "name": "Clone Companion",
      "rank": 8,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "primal"
      ],
      "description": "You create a duplicate of your companion, and the duplicate fights alongside its twin, mirroring the original's actions. The duplicate appears adjacent to your companion and has the same statistics.\nEach time you Command your companion, both your companion and its duplicate gain 2 actions. The duplicate always acts immediately after your companion and must use identical actions to the ones your companion used, in exactly the same order. However, it can use the actions differently, such as Striding to a different position or selecting a different target for a Strike. If the duplicate is unable to mimic an action, it performs the action without result and the action is wasted. The duplicate can't use any actions that can be used only a limited number of times per day.\nThe duplicate isn't truly alive and can't be healed in any way. If the duplicate ever reaches 0 Hit Points, it is instantly destroyed and clone companion immediately ends.",
      "castingTime": "3 actions",
      "range": "30 feet",
      "target": "your companion",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:boil-blood",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "fBoiPXmcIO50OFFR",
      "slug": "boil-blood",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:8a34b49424aad0aead7999cb62f1a5952621d20cd396cf2e6ad8385e5af6ade1",
    "translatableHash": "sha256:a52329e710452cfa2813679e050dfba734e21ae1a176de805167060b20098e77",
    "data": {
      "schemaVersion": 1,
      "name": "Boil Blood",
      "rank": 8,
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
      "description": "You heat a foe's blood and boil it within its veins. The target takes 10d10 fire damage, with a Fortitude save. A nonliving creature with blood in its body (such as a vampire) can be affected, but a creature with no blood is immune.\nCritical Success The target is unaffected.\nSuccess The target takes half damage.\nFailure The target takes full damage and is Drained 2.\nCritical Failure The target takes double damage and is Drained 3.\nHeightened 1 The damage increases by 1d10.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": "fortitude save",
      "damage": [
        {
          "formula": "10d10",
          "type": "fire",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 1d10."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:divine-armageddon",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "it4wx2mDIJDlZGqS",
      "slug": "divine-armageddon",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:5c805b5f062ee82665e77a1476b8655975e3a16987ef67f05241a9990f7a26b1",
    "translatableHash": "sha256:0a67d1267b46de21a3c82a46225257cfd642d2ddeeeff7bdd74050ba538c2962",
    "data": {
      "schemaVersion": 1,
      "name": "Divine Armageddon",
      "rank": 8,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "vitality",
        "void"
      ],
      "traditions": [
        "divine"
      ],
      "description": "You call forth a divine cataclysm from your deity, destroying living and undead creatures in the area alike. Creatures in the area take 10d6 void damage and 10d6 alignment damage (good, evil, lawful, or chaotic), chosen from among the alignments your deity has. If your deity is true neutral, increase the void damage by 4d6 instead of dealing alignment damage. A creature harmed by vitality damage, such as one with void healing, takes vitality damage instead of void damage from this spell.\nYou can't cast this spell if you don't have a deity. This spell gains the trait corresponding to the alignment damage dealt.\nHeightened 1 The damage increases by 1d6 void damage, 1d6 alignment damage, and 1d6 additional void and vitality damage for a true neutral deity.\n10d6 void damage|traits:spirit]\n10d6 vitality damage|traits:spirit]\n14d6 void damage\n14d6 vitality damage",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "",
      "area": "60 burst",
      "duration": "",
      "defense": "basic fortitude save",
      "damage": [],
      "heightening": "Heightened 1 The damage increases by 1d6 void damage, 1d6 alignment damage, and 1d6 additional void and vitality damage for a true neutral deity.\n10d6 void damage|traits:spirit]\n10d6 vitality damage|traits:spirit]\n14d6 void damage\n14d6 vitality damage"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:summon-archmage",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "JAaETUBg0xlttpCH",
      "slug": "summon-archmage",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:733186dd6a0aece17f83380a9ff1ff2a13dbbabb18c432deb38f7d550f645153",
    "translatableHash": "sha256:8c20b5d04ec4db751107e1a7c0d69a8ebb2fd2eb4029880dd9d4db2a86eb6b30",
    "data": {
      "schemaVersion": 1,
      "name": "Summon Archmage",
      "rank": 8,
      "rarity": "common",
      "traits": [
        "concentrate",
        "incarnate",
        "manipulate"
      ],
      "traditions": [
        "arcane"
      ],
      "description": "You briefly call forth the spirit of a legendary wizard from ages long past, which manifests as an immense humanoid figure (typically an elf or a human). The archmage occupies the space of a Large creature and has a Speed of 60 feet.\nArrive (evocation, force) Archmage's Amplification The archmage arrives in a fierce burst of magical force, automatically dealing 3d4+3 force damage to up to 5 creatures it chooses within 100 feet of it. Like Force Barrage, this can be blocked by the Shield spell. The archmage also feeds magical power into some spells. Beneficial spells last longer due to the archmage's influence. When the remaining duration of a beneficial spell affecting you or one of your allies would decrease (usually at the start of the caster's turn), it doesn't decrease if the subject of the spell is within 100 feet of the archmage. This applies only if the spell's maximum duration was 3 rounds or longer.\nDepart (abjuration) Archmage's Rebuke The archmage drains the magic from your foes. Each of your enemies within 100 feet of the archmage must attempt a Will save. On a failure, the creature is Stupefied 2 for 1 round, and if it's currently benefiting from any spells of a lower level than summon archmage, the archmage can choose any one of them and end the spell.",
      "castingTime": "3 actions",
      "range": "100 feet",
      "target": "",
      "area": null,
      "duration": "until the end of your next turn",
      "defense": "will save",
      "damage": [
        {
          "formula": "3d4+3",
          "type": "force",
          "kind": "damage"
        }
      ],
      "heightening": ""
    }
  }
]
