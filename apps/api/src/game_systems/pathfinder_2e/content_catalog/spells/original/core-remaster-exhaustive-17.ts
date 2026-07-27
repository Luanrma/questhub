import type { Pathfinder2eOriginalContentRecord } from '../../records'
import type { Pathfinder2eSpellData } from '../types'

export const PATHFINDER_2E_EXHAUSTIVE_17_SPELL_ORIGINALS: readonly Pathfinder2eOriginalContentRecord<Pathfinder2eSpellData>[] = [
  {
    "contentId": "pf2e:spell:spells-srd:camel-spit",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Hycyiw9xVzoIY4Dy",
      "slug": "camel-spit",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:ab4bf20573dce4acf3106b93084716c33c65ce916eff4556512583f246e856dc",
    "translatableHash": "sha256:898a1cce6a206ea81bb4f2335c7fcd4b354f88256a1f2638d198b5bdf2e086cf",
    "data": {
      "schemaVersion": 1,
      "name": "Camel Spit",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "acid",
        "attack",
        "concentrate",
        "manipulate",
        "morph"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You alter your stomach, esophagus, and tongue to be able to spit partially digested food with force. You can spit at a foe once you finish Casting the Spell and can repeat the attack once on each of your subsequent turns by taking a single action, which has the acid, attack, and concentrate traits. After your third spit attack, the spell ends. When you attack with camel spit, make a ranged spell attack roll against a creature within 15 feet, dealing 1d6 acid damage and causing the target to be Dazzled for 1 round if you hit. On a critical hit, you deal double damage and the target takes 1 persistent acid damage.\nHeightened 1 The damage increases by 1d6, and the persistent damage on a critical hit is increased by 1.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [
        {
          "formula": "1d6",
          "type": "acid",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 1d6, and the persistent damage on a critical hit is increased by 1."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:foraging-friends",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "qdfV4y8B6mbg4Fnm",
      "slug": "foraging-friends",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:113b82dd42d12ab1de6a7cda7ba358e290842009d0ca78eb82c4630e2cc100b0",
    "translatableHash": "sha256:6f995f58709220b14609a2f93344da06f34baad332dba3efee7c824a607a529e",
    "data": {
      "schemaVersion": 1,
      "name": "Foraging Friends",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "primal"
      ],
      "description": "Giving a cheerful whistle, you call forth a handful of small animals, such as birds or mice, to collect food for you and your allies. The animals return 1 hour later with enough foraged goods to feed four Medium creatures for 1 day, then return to their normal behavior. If you're in a particularly strange environment, as determined by your GM, you might need a minimum proficiency with primal spell DCs, equivalent to the minimum proficiency required to Subsist in strange environments.\nHeightened (3rd) The animals bring back enough food for eight Medium creatures for 1 day.\nHeightened (5th) The animals bring back enough food for 30 Medium creatures for 1 day.",
      "castingTime": "10 minutes",
      "range": "",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (3rd) The animals bring back enough food for eight Medium creatures for 1 day.\nHeightened (5th) The animals bring back enough food for 30 Medium creatures for 1 day."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:sacred-beasts",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "rVRyA7UQog633nTe",
      "slug": "sacred-beasts",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:456c67855131bbb8f753f86d1293bdebc0aa0e428622074b43c4b2ccbd454548",
    "translatableHash": "sha256:bbd860e7415ce73833011018980ac110d1e380bbbb614752f0b648fddcb45349",
    "data": {
      "schemaVersion": 1,
      "name": "Sacred Beasts",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "divine",
        "primal"
      ],
      "description": "Requirements You worship a deity.\nYou call out to the creatures of the wild favored by your deity. You quickly summon your deity's sacred animal (or a small swarm of them if the animal is usually Tiny). For example, you would call forth a lion if you worship Iomedae or a swarm of spiders if you worship Norgorber. If your deity doesn't have a known sacred animal, work with the GM to find a thematic one. The animal or swarm assaults all creatures in the area, dealing 2d6 damage. The damage is either bludgeoning, piercing, or slashing based on the animal that was conjured, as determined by the GM. After their attacks, the animals return to your deity's plane.\nHeightened 1 The damage increases by 2d6.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "",
      "area": "5 burst",
      "duration": "",
      "defense": "basic reflex save",
      "damage": [],
      "heightening": "Heightened 1 The damage increases by 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:hippocampus-retreat",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "wSK0wtn8iHShYT9y",
      "slug": "hippocampus-retreat",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:774bd5e0d5e13101707abbe40a43ee1cedb458320e1a09cdd0fedf944ec397ce",
    "translatableHash": "sha256:69e440c5f2da7ab9813a11870e25ca42e66a4532629d1ad48216648c27288fe0",
    "data": {
      "schemaVersion": 1,
      "name": "Hippocampus Retreat",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "attack",
        "concentrate",
        "manipulate",
        "morph"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "Requirements You're mostly or totally submerged in water.\nYou temporarily shape your lower limbs into the tail of a hippocampus in order to swim away from a nearby foe after dealing a parting blow. Attempt a melee spell attack roll against the target's AC, dealing 2d6 bludgeoning damage on a hit (or double damage on a critical hit). Then, Swim up to 30 feet; if you already have a swim Speed, you can Swim up to your Speed with a +10-foot circumstance bonus. You gain a +2 circumstance bonus to your AC against reactions triggered by this movement. At the end of the movement, your lower limbs return to normal.\nSpell Effect: Hippocampus Retreat\nHeightened 1 The damage increases by 1d6.",
      "castingTime": "2 actions",
      "range": "10 feet",
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
      "heightening": "Heightened 1 The damage increases by 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:hidebound",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "3TuGuGZqyOBmWp7N",
      "slug": "hidebound",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:5154c24d4f9de87ce0c1ed19ee73c63c0e151195aed1669f02367c7f5b636646",
    "translatableHash": "sha256:e468dbc28500bccf3354076c5d0e813011562407a49cc1c94ffc73638b339a57",
    "data": {
      "schemaVersion": 1,
      "name": "Hidebound",
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
      "description": "Trigger A creature within range is hit with a Strike that deals physical damage.\nThe target's skin erupts in thick hide or dense scales. It gains resistance 5 to physical damage, except adamantine, until the beginning of its next turn.\nSpell Effect: Hidebound\nHeightened 2 The resistance increases by 3.",
      "castingTime": "reaction",
      "range": "60 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 round",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 2 The resistance increases by 3."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:albatross-curse",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "93SjFTGJUTTmAt6j",
      "slug": "albatross-curse",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:6a0d1aaf0b200a3ce1d764d590e7ef30b35839bc100968f3d1fb4b5760c5b06d",
    "translatableHash": "sha256:ebe9693028234a17ac5e06ccdbd4d3fdecf9508cc96bb36c6785b9c372051576",
    "data": {
      "schemaVersion": 1,
      "name": "Albatross Curse",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "misfortune"
      ],
      "traditions": [
        "occult",
        "primal"
      ],
      "description": "You create a spectral albatross, a guiding bird for sailors, to hover around the target. You and allies within 30 feet of the target gain a +1 circumstance bonus to attacks against the target. The target creature can spend an action to Strike the albatross, which automatically succeeds and kills it. The target must then attempt a Will save against your spell DC.\nSpell Effect: Albatross Curse\nCritical Success The target is unaffected.\nSuccess The guilt of slaughtering a bird of good fortune weighs on the target's mind. The target is Stupefied 1 for 1 round.\nFailure The albatross hangs around a cord from the target's neck (or closest equivalent) for 1 minute, cursing them for their transgression. During this time, the target must roll twice and take the worse result on their next Will save, after which the albatross disappears.\nSpell Effect: Albatross Curse (Failure)\nCritical Failure As failure, but the duration is 1 hour.\nSpell Effect: Albatross Curse (Critical Failure)",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute (see text)",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:frog-tongue",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "cnRltZAjU9aCklqz",
      "slug": "frog-tongue",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:08ecbc87b33eccb5b33c2f4c7176a280f101f162b4605e6f35982044bc284a28",
    "translatableHash": "sha256:12ae96457ec26dcd614d583fd0b8c97ea47fb66d5b7b2189549aea07d4bfea07",
    "data": {
      "schemaVersion": 1,
      "name": "Frog Tongue",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "primal"
      ],
      "description": "Your tongue extends unnaturally, flicking out toward a creature within range and dealing 2d8 bludgeoning damage (basic Reflex save). On a failure, the creature is also stuck to the end of the tongue. It is Off-Guard and can't move beyond the reach of your tongue. A creature can sever the tongue with a Strike that deals at least 10 slashing damage or attempt to Escape against your spell DC. The AC of the tongue is equal to your spell DC. Severing the tongue in this way deals no damage to you but ends the spell. While a creature is stuck to the end of your tongue, actions you take with the auditory trait take a –2 circumstance penalty. If you move so that the affected creature is outside of the tongue's reach, the spell ends.\nHeightened 1 The damage increases by 2d8.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "2d8",
          "type": "bludgeoning",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 2d8."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:claws-of-the-otter",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "yNTfght6fu9WYKmx",
      "slug": "claws-of-the-otter",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:08f06549192d0a915f996973ef415c879bcff573a4b03a1561cc6edbc5aaafdd",
    "translatableHash": "sha256:293cb9b1554fd4dc491abe28697bef4f2a261154a31f3fc50836533ffa25e15b",
    "data": {
      "schemaVersion": 1,
      "name": "Claws of the Otter",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "cold",
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "divine",
        "primal"
      ],
      "description": "Webbing grows between your fingers and your nails extend into vicious claws. For the spell's duration, you gain a +1 status bonus to Athletics checks to Swim and you gain a claws unarmed attack. They're an agile, finesse, unarmed attack that deals 1d4 slashing damage and an additional 1d6 cold damage.\nSpell Effect: Claws of the Otter\nHeightened 3 The additional cold damage increases by 1d6.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 3 The additional cold damage increases by 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:antlion-trap",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "5JGSo1tgDEehqbWm",
      "slug": "antlion-trap",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:7aa2f46148485c74341802644ff2c482df5f84d1fc4c1c0ce2bc902958fa35b9",
    "translatableHash": "sha256:3874dce4e68184edfcbf1fbdebd8781d03980af5bb21dd786eac9ce960c56165",
    "data": {
      "schemaVersion": 1,
      "name": "Antlion Trap",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "concentrate",
        "earth",
        "manipulate"
      ],
      "traditions": [
        "primal"
      ],
      "description": "You transmute the ground into a conical pit trap of loose sand that becomes difficult terrain for the duration. A creature or unsecured object that enters the sand or starts its turn in the sand is moved toward the center, depending on the result of its Reflex save. This is forced movement. If there isn't enough space near the center of the pit, affected creatures and objects move as far as they can without being blocked, up to the amount set by their saving throw outcomes.\nCritical Success The creature is unaffected.\nSuccess The creature moves 5 feet toward the center.\nFailure The creature moves 10 feet toward the center.\nCritical Failure As failure, and the creature becomes Immobilized in the pit. It can attempt to Escape against your spell DC.\nHeightened 2 Increase the area of the spell and the amount a creature moves on a failure by 5 feet.",
      "castingTime": "3 actions",
      "range": "120 feet",
      "target": "",
      "area": "15 burst",
      "duration": "1 minute",
      "defense": "reflex save",
      "damage": [],
      "heightening": "Heightened 2 Increase the area of the spell and the amount a creature moves on a failure by 5 feet."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:primal-chorus",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "TPN3Z6VGau6Od9rG",
      "slug": "primal-chorus",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:e1be1cd63b14ac5265a429b6cfddadcf2481ca4f105e67f90c17a6b372a4180c",
    "translatableHash": "sha256:f43e4e5489cf9210f32df956e3bc544978c07b1d5b3899f1b93d3566bdb45d1c",
    "data": {
      "schemaVersion": 1,
      "name": "Primal Chorus",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "auditory",
        "concentrate",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "primal"
      ],
      "description": "You let loose a primal howl that incites animals and beasts to join in the chorus. Doing so gives you a general idea of how many creatures with the animal or beast trait are within the range of the spell, but significant creatures can attempt a Will save against your spell DC to resist responding to your call. You gain a +1 status bonus to your next Initiative roll in an encounter with an enemy creature that replies to your call. For purposes of using Coerce during exploration mode, you can communicate with a creature that responds to your call for the duration of the spell. You can only make simple commands, such as approach or hide, and only understand simple ideas, such as compliance with the order or the presence of natural hazards.\nHeightened 2 The status bonus increases by 1.",
      "castingTime": "3 actions",
      "range": "1-mile burst",
      "target": "",
      "area": null,
      "duration": "until your next daily preparations",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened 2 The status bonus increases by 1."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:croak-voice",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "zVfTMpkXJDRESkl5",
      "slug": "croak-voice",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:b7809f55f1706371023a60a3aaa8a79ffbc2d9f7ca29ec6948af7bf04e6b356a",
    "translatableHash": "sha256:28df7ad29af9b31b130e97ea322d16b73b1e98e47cf51f200f878d7296b63d41",
    "data": {
      "schemaVersion": 1,
      "name": "Croak Voice",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "concentrate",
        "curse",
        "manipulate",
        "morph"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You cause the target creature's vocal chords to swell like those of a frog. The target must attempt a Fortitude save.\nCritical Success The target is unaffected.\nSuccess The target's voice becomes hoarse, and speaking becomes painful. Whenever it uses an action that has the auditory trait or attempts to Cast a Spell that doesn't have the subtle trait, it must succeed at a check (flat, dc:5) or the action is lost. Once per round, the target can spend an Interact action to massage its throat, attempting a Fortitude save against your spell DC. On a success, the spell ends.\nFailure As success, but using an action with the auditory trait also deals 2d10 mental damage to the target as the sound of its distorted voice grates on its ears.\nCritical Failure As failure, but the damage for using an action with the auditory trait is doubled, and the target can't use an Interact action to attempt a Fortitude save to end the effect early.\nHeightened 1 The damage for using an action with the auditory trait increases by 1d10.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": "fortitude save",
      "damage": [
        {
          "formula": "2d10",
          "type": "mental",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage for using an action with the auditory trait increases by 1d10."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:luring-wail",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Lr737SofpsFtLpEo",
      "slug": "luring-wail",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:4818578e1a2779e218fc452c4a55f8126ab12f59649e41f8e628a928471267df",
    "translatableHash": "sha256:2aefda9dbd125b554f2a29623f64cd78aacd4aee3101c858c09ce5609dc2ddb2",
    "data": {
      "schemaVersion": 1,
      "name": "Luring Wail",
      "rank": 4,
      "rarity": "common",
      "traits": [
        "auditory",
        "concentrate",
        "incapacitation",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "occult",
        "primal"
      ],
      "description": "You emit a plaintive cry to lure your enemies closer. Each creature in the emanation that can hear you must attempt a Will save. If you speak a creature's name as part of the casting of the spell, that creature takes a –2 circumstance penalty to its saving throw. Each creature that enters the area on its turn must attempt a save. If you attack or take a hostile action, the Fascinated condition ends only for the creature that's attacked.\nCritical Success The creature is unaffected.\nSuccess The creature is Slowed 1 for 1 round.\nFailure The creature becomes fascinated and compelled to move toward the sound of your cry on its turn. As long as it is in the emanation and can hear, it must spend at least one of its actions on each of its turns to move closer to you.\nCritical Failure As failure, but the creature must spend all its actions moving toward the sound. Additionally, the creature is Off-Guard.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "60 emanation",
      "duration": "1 minute",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:snake-fangs",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "wLWMswY7aBHEFTRb",
      "slug": "snake-fangs",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:8238241437f5eb9b10a7d873b50c0cb99373debbb3c5ad4d7a27a89f6ef0a1ea",
    "translatableHash": "sha256:976c055627682806dd16fc0dfe9123216980fd7e27f4fbd93656459733f664ef",
    "data": {
      "schemaVersion": 1,
      "name": "Snake Fangs",
      "rank": 4,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "morph"
      ],
      "traditions": [
        "primal"
      ],
      "description": "Your jaw unhinges as your teeth extend into wicked fangs. For the spell's duration, you gain a fangs unarmed attack. They're a finesse, grapple, unarmed attack that deals 1d8 piercing damage and an extra 2d10 poison damage. If you have a creature at least one size smaller than you Grabbed with your fangs, you can use the Swallow Whole ability that deals 4d6 bludgeoning damage and has a Rupture value of 17. A swallowed creature is transported to an extraplanar space that resembles the inside of a snake's stomach, so when it gets free, it appears in a space adjacent to you. If you're killed or the spell ends, the swallowed creature is immediately freed.\nSpell Effect: Snake Fangs\nHeightened 3 The extra poison damage of your fangs unarmed attack increases by 1d10, the damage dealt by the Swallow Whole ability increases by 6d6, and the Rupture value increases by 9.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 3 The extra poison damage of your fangs unarmed attack increases by 1d10, the damage dealt by the Swallow Whole ability increases by 6d6, and the Rupture value increases by 9."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:confusing-cry",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "I7oklLZy4aTHIdc3",
      "slug": "confusing-cry",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:eb0fbf583a81fd18fbbcb0147923800606cf594f9298d7fa6d517fdaca413c66",
    "translatableHash": "sha256:474456effede031ee0b40c8970ef2fe86152076d995a50ded126cb93dd1393f0",
    "data": {
      "schemaVersion": 1,
      "name": "Confusing Cry",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "auditory",
        "concentrate",
        "emotion",
        "incapacitation",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "divine",
        "primal"
      ],
      "description": "You give an unsettling, warbling cry that causes nearby creatures to lash out without control. Each creature in the area that can hear must attempt a Will save.\nCritical Success The target is unaffected and immune to this spell for 1 minute.\nSuccess The target is Stunned 1.\nFailure The target is Confused for 1 minute. It can attempt a new save at the end of each of its turns to end the confusion.\nCritical Failure As failure, and the creature immediately attacks itself. This Strike doesn't give the creature a flat check to recover from the confusion.",
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
    "contentId": "pf2e:spell:spells-srd:summon-stampede",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "XWqxMJpCT95A0dZs",
      "slug": "summon-stampede",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:c3ac71b9c70d0a64c02259ccd0aa88bd6c1ceff2466a47af2eb56a6399c6c5b8",
    "translatableHash": "sha256:bc7c668e95742d8b7fcfcd734beb30f7a6e9d53c62d33dd062506c9974757e9f",
    "data": {
      "schemaVersion": 1,
      "name": "Summon Stampede",
      "rank": 7,
      "rarity": "common",
      "traits": [
        "concentrate",
        "incarnate",
        "manipulate"
      ],
      "traditions": [
        "primal"
      ],
      "description": "You summon an unstoppable stampede of panicking beasts. Whether you conjure wild beasts or tamed cattle, the stampede is a force of nature that leaves behind nothing in its wake. The stampede occupies the space of a Gargantuan creature and has a Speed of 60 feet.\nArrive(emotion, fear, mental) Foreboding Tremors The sheer energy of a stampede can cause even apex predators to panic. Each creature within a 60-foot emanation must attempt a Will save with the following effects.\nCritical Success The creature is unaffected.\nSuccess The creature is Frightened 1.\nFailure The creature is Frightened 2.\nCritical Failure The creature is Frightened 3 and Fleeing for 1 round.\nDepartFlatten the Earth The stampede Strides up to double its Speed, trampling each Large or smaller creature, hazard, and structure whose space it enters, dealing 8d8 bludgeoning damage (basic Reflex save). The stampede ignores and attempts to counteract all difficult terrain it enters caused by debris, overgrowth, rubble, or thick ground cover.",
      "castingTime": "3 actions",
      "range": "120 feet",
      "target": "",
      "area": null,
      "duration": "until the end of your next turn",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:summon-warden-of-the-wild",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "l2YoqVPoFE7jpTLe",
      "slug": "summon-warden-of-the-wild",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:89390a60c7da293df2bf75ae7269c30f39244156f69626454f641241c95492da",
    "translatableHash": "sha256:ee91aea00dec8db06477dfe9e3eb35f6750ffe7aa5422ac6b05a71dc3fa48528",
    "data": {
      "schemaVersion": 1,
      "name": "Summon Warden of the Wild",
      "rank": 8,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "incarnate",
        "manipulate"
      ],
      "traditions": [
        "primal"
      ],
      "description": "You briefly call forth the spirit of one of the Wardens of the Wild, the legendary guardians of nature. The warden occupies the space of a Gargantuan creature. When you Cast this Spell, you summon a warden depending on the biome in which the spell is cast (for instance, summoning the Warden of Caverns and Burrows if summoned in a cave, canyon, or other underground environment). In an unnatural environment, the warden summoned depends on the region's most recent or similar natural biome, as decided by the GM.\n• Warden of Caverns and Burrows: Speed 60 feet, burrow 100 feet; Arrive (earth) Obsidian Cage Obsidian stalagmites burst from the earth as the warden surfaces, impaling enemies and trapping them in stalagmites. Enemies on the ground within 40-foot emanation take 6d6 piercing damage (check (reflex, basic) save). Creatures that fail their save become Immobilized until they Escape (the DC is your spell DC); Depart (earth) Blessing of the Depths The squares occupied by the warden remain disheveled and broken, becoming difficult terrain. The warden affects you and all your allies within 60-foot emanation with a Mountain Resilience and Unfettered Pack. The duration for both spells is reduced to 3 rounds, but the duration of mountain resilience isn't reduced when an affected target is hit by a bludgeoning, piercing, or slashing attack.\n• Warden of Forests and Meadows: Speed 120 feet; Arrive (illusion, mental) Idyllic Panorama The warden's presence unpredictably warps the appearances and perceived distances of creatures and obstacles around it. Each time an enemy within 40 feet of the warden attempts a Strike or Stride action, it takes 4d6 mental damage (check (will, basic) save). On a critical failure, the creature Strikes a random target within reach or Strides in a random direction. On a critical success, the creature becomes temporarily immune for 1 round; Depart Fox's Insightful Trickery The warden affects you and all your allies within 60 feet with Blur and Truesight. The duration for both spells is reduced to 3 rounds.\n• Warden of Oceans and Rivers: Speed 60 feet, swim 120 feet; Arrive I Am the Tide If the warden is summoned in a body of water, it creates a churning whirlpool that deals 10d6 bludgeoning damage to all creatures within 30-foot emanation (basic Reflex save). A creature that fails this save is pulled 15 feet closer to the warden (30 feet on a critical failure). If the warden is summoned outside of a body of water, it creates a wave of water that deals 8d6 bludgeoning damage to all creatures within 30 feet (basic Reflex save). A creature that fails this save is pushed 10 feet away from the warden; Depart Acclimation to the Deep The warden affects you and your allies within 60 feet with Feet to Fins and Water Breathing. The duration for both spells is reduced to 3 rounds, but a creature affected by feet to fins retains its normal land Speed.\n• Warden of Peaks and Skies: Speed 60 feet, fly 240 feet; Arrive Precipice Plummet The warden appears, flying downward from the sky and sends a shockwave where she lands. Creatures within 20-foot emanation take 10d6 sonic damage (check (fortitude, basic) save). Creatures that critically fail their saves are Sickened 1; Depart (auditory) Song of the Skies The warden affects you and all your allies within 60 feet with Fly and Unfettered Movement. The duration for both spells is reduced to 3 rounds.",
      "castingTime": "3 actions",
      "range": "100 feet",
      "target": "",
      "area": null,
      "duration": "until the end of your next turn",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:rainbows-end",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "hYK4ByCVN1ALc5gR",
      "slug": "rainbows-end",
      "publicationTitle": "Pathfinder War of Immortals",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/prismatic-armor.webp"
    },
    "sourceHash": "sha256:f0d081e12f451b37d1fe8bd8a7245890796ac083bc962d5df5824766f78732e8",
    "translatableHash": "sha256:224bf7dd9d44753aed36bc942fdbeff5c39efa3e8976291bd38e76ef371629ea",
    "data": {
      "schemaVersion": 1,
      "name": "Rainbow's End",
      "rank": 1,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "light",
        "manipulate",
        "mythic",
        "spirit"
      ],
      "traditions": [
        "arcane",
        "divine",
        "primal",
        "occult"
      ],
      "description": "You reach upward to wrest down a rainbow and harness its power to connect this world to the heavens. Each creature in the area takes 1d4 spirit damage with a basic Fortitude save. Any creature that fails this save is additionally Dazzled for 1 round. For the spell's duration, an ally who's adjacent to you can Interact and be instantly teleported to an unoccupied space in the spell's area, as long as they don't travel more than 60 feet. This effect has the teleportation trait.\nHeightened 2 The damage increases by 2d4, the duration of the dazzled condition on a failed save increases by 1 round, and the maximum distance an ally can use the rainbow to teleport increases by 10 feet.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "",
      "area": "10 burst",
      "duration": "1 minute",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "1d4",
          "type": "spirit",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The damage increases by 2d4, the duration of the dazzled condition on a failed save increases by 1 round, and the maximum distance an ally can use the rainbow to teleport increases by 10 feet."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:banishing-touch",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "nKR6Xt5cPGDumX66",
      "slug": "banishing-touch",
      "publicationTitle": "Pathfinder War of Immortals",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:8378b21b9c08f2e6958edaf6e9134c7494565738038493fdb86d7b507ac5d352",
    "translatableHash": "sha256:ad1fc77af787aabb73079345d960d3e50968d83435037d2d6570c6a8de90214f",
    "data": {
      "schemaVersion": 1,
      "name": "Banishing Touch",
      "rank": 2,
      "rarity": "rare",
      "traits": [
        "attack",
        "concentrate",
        "manipulate",
        "mythic"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult",
        "primal"
      ],
      "description": "Your touch projects a surge of magic that launches your target safely away. Make a melee spell attack at mythic proficiency against your target's AC. If you hit, you deal 1d6 bludgeoning damage, and you launch the target into the air and away from you; the target takes falling damage as normal. The number of actions you spend while Casting the Spell determines the damage dealt by your touch and how far the target is launched.\n1 The target is launched 10 feet into the air and knocked back 10 feet.\n2 Your touch deals 2d6 bludgeoning damage instead. The target is launched 20 feet into the air and pushed back 10 feet.\n3 Your touch deals 2d6 bludgeoning damage instead. The target is launched 30 feet into the air and pushed back 20 feet.\nHeightened (4th) The initial damage increases by 1d6, and all distances increase by 10 feet for the 1-action version or 20 feet for the 2- and 3-action versions.\nHeightened (6th) The initial damage increases by 2d6, and all distances increase by 20 feet for the 1-action version or 60 feet for the 2- and 3-action versions.\nHeightened (8th) The initial damage increases by 3d6, and all distances increase by 30 feet for the 1-action version or 100 feet for the 2- and 3-action versions.",
      "castingTime": "1 to 3 actions",
      "range": "touch",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": "ac",
      "damage": [
        {
          "formula": "1d6",
          "type": "bludgeoning",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (4th) The initial damage increases by 1d6, and all distances increase by 10 feet for the 1-action version or 20 feet for the 2- and 3-action versions.\nHeightened (6th) The initial damage increases by 2d6, and all distances increase by 20 feet for the 1-action version or 60 feet for the 2- and 3-action versions.\nHeightened (8th) The initial damage increases by 3d6, and all distances increase by 30 feet for the 1-action version or 100 feet for the 2- and 3-action versions."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:travel-by-turtle",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "dk3XIx0ExDRMcN5z",
      "slug": "travel-by-turtle",
      "publicationTitle": "Pathfinder War of Immortals",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:4c8472894f801ad3c199f40681d12a1c5fb42f0f1d57b7a0bc32339d84feb0be",
    "translatableHash": "sha256:d5f104d2d3d42325e3cb4b8d9b8fcbf9dd941dc0853504149a667549cb2c5b40",
    "data": {
      "schemaVersion": 1,
      "name": "Travel by Turtle",
      "rank": 3,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "manipulate",
        "mythic"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You conjure an intelligent sea turtle, who agrees to carry you upon its shell on a water journey. This turtle must be conjured into a large body of water within range, such as a lake or broad river. The turtle conjured is Large, is capable of carrying one Medium creature or up to four Small creatures, and has a swim Speed of 30 feet. The turtle doesn't engage in combat and doesn't put itself intentionally into harm's way, but it does convey you to a destination of your choice and follows your suggestions. The turtle otherwise functions as a boat, save that it controls itself and doesn't need to be piloted.\nHeightened (5th) The turtle's size increases to Huge, making it capable of carrying one Large creature, up to four Medium creatures, or up to 16 Small creatures. Its swim Speed increases to 40 feet, and the duration increases to 1 day.\nHeightened (7th) The turtle's size increases to Gargantuan, making it capable of carrying one Huge creature, up to four Large creatures, up to 16 Medium creatures, or up to 32 Small creatures. Its swim Speed increases to 50 feet, and the duration increases to 1 week.\nHeightened (9th) The turtle's size increases to Gargantuan, making it capable of carrying two Huge creatures, up to eight Large creatures, up to 32 Medium creatures, or up to 64 Small creatures. Its swim Speed increases to 60 feet, and the duration increases to 1 month.",
      "castingTime": "3 actions",
      "range": "60 feet",
      "target": "",
      "area": null,
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (5th) The turtle's size increases to Huge, making it capable of carrying one Large creature, up to four Medium creatures, or up to 16 Small creatures. Its swim Speed increases to 40 feet, and the duration increases to 1 day.\nHeightened (7th) The turtle's size increases to Gargantuan, making it capable of carrying one Huge creature, up to four Large creatures, up to 16 Medium creatures, or up to 32 Small creatures. Its swim Speed increases to 50 feet, and the duration increases to 1 week.\nHeightened (9th) The turtle's size increases to Gargantuan, making it capable of carrying two Huge creatures, up to eight Large creatures, up to 32 Medium creatures, or up to 64 Small creatures. Its swim Speed increases to 60 feet, and the duration increases to 1 month."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:perceive-the-threads-of-fate",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "QlivnxstGjlzaluf",
      "slug": "perceive-the-threads-of-fate",
      "publicationTitle": "Pathfinder War of Immortals",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:5e1cec974b6a769426baa63ce1a4623a7943359c53b9c704671f1924e241e1e0",
    "translatableHash": "sha256:63e956fc7f14a3a61c0f2044b9790ef89b8a25f0536731d3d1dc301ade916fef",
    "data": {
      "schemaVersion": 1,
      "name": "Perceive the Threads of Fate",
      "rank": 3,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "fortune",
        "mythic",
        "prediction"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult"
      ],
      "description": "You open your mind to the grand design of existence, enabling you to view the threads of fate in all their complex, tangled glory. You attempt Perception checks and Reflex saving throws at mythic proficiency for the duration.\nYou can Sustain the spell once per round to untangle these threads. When you do, if your next action requires you to attempt an attack roll or skill check, you roll this check twice and use the higher result. You can untangle the threads of fate up to three times. After the third time, the spell ends.",
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
    "contentId": "pf2e:spell:spells-srd:tricksters-feathers",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "2wT21v3NjLXdmE5W",
      "slug": "tricksters-feathers",
      "publicationTitle": "Pathfinder War of Immortals",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:5fba20684df75ce8a933ae0b0d44102d1d6b15a53da695e456fb0b170bfd0a5b",
    "translatableHash": "sha256:4da2f5cf17dbee9c51c0ba32995ebe64dee2e141949cd6b4c01d3f445d76cb0b",
    "data": {
      "schemaVersion": 1,
      "name": "Trickster's Feathers",
      "rank": 4,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "illusion",
        "manipulate",
        "mythic",
        "visual"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult",
        "primal"
      ],
      "description": "You conjure four magic feathers, each with the potential to hold a single illusory guise. These feathers have negligible Bulk and remain potent for the duration. As an Interact action, you can place one of these feathers into your hair or cap, or remove an already donned feather. When worn in this way, the feather causes you to appear as another creature of the same body shape, and with roughly similar height (within 6 inches) and weight (within 50 pounds), as yourself. The disguise is typically good enough to hide your identity but not to impersonate a specific individual. This disguise also changes your voice and scent, but it doesn't disguise your mannerisms or behavior. You can change the appearance of your clothing and worn items, such as making your armor look like a dress. Held items are unaffected, and any worn item you remove returns to its true appearance.\nWhen you don a feather for the first time, you determine the illusory appearance that feather grants you, selecting the ancestry, age, gender, attire, and other visual features. For the duration, this feather is linked to that disguise. Wearing it in your hair or hat always imparts the linked appearance. Selecting a feather's appearance for the first time counts as setting up a disguise for the Impersonate use of Deception; attempt this Deception check at mythic proficiency.\nYou can only wear one feather at a time. When you remove a feather, you revert to your true appearance. If you give a feather to another creature, it can no longer impart a disguise.",
      "castingTime": "2 actions",
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
    "contentId": "pf2e:spell:spells-srd:it-is-written",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "AXpqBdbQ66RWyZYk",
      "slug": "it-is-written",
      "publicationTitle": "Pathfinder War of Immortals",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:40775dbd0d9bdc4870d2eefb559dd7ec4208f4882ba4d6159ea812f6a5cb7c8d",
    "translatableHash": "sha256:7ea3bc012538383182ff89532b7570d58a896cc0a057947e975a3c4a685379e8",
    "data": {
      "schemaVersion": 1,
      "name": "It is Written",
      "rank": 4,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "mythic",
        "prediction"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult"
      ],
      "description": "You envision a future for yourself, confident in the certainty that this vision is your destiny. Before the duration ends, if you would attempt an attack roll, Perception check, saving throw, or skill check that would aid in the fulfillment of this destiny, you can attempt this roll at mythic proficiency. You choose which roll to use this benefit on before rolling. If you use this benefit, the spell ends. Either way, you're then temporarily immune to it is written for 1 hour.",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": null,
      "duration": "until the end of your next turn",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:diadem-of-divine-radiance",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "AWxS2lr86qNNQVDT",
      "slug": "diadem-of-divine-radiance",
      "publicationTitle": "Pathfinder War of Immortals",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:04e8a107073e8c7c630ea767745f72d978a6409fb2cc965870dcf5a04b727e56",
    "translatableHash": "sha256:c0143d1efe79cd645b960627ccb9ba2a8e40697b98e4ea467ce3b61b4ac5ff4b",
    "data": {
      "schemaVersion": 1,
      "name": "Diadem of Divine Radiance",
      "rank": 5,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "light",
        "manipulate",
        "mythic",
        "sanctified"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult",
        "primal"
      ],
      "description": "You don a diadem of radiant light, which sheds bright light to a range of 60 feet and dim light to a further 60 feet. When you Cast the Spell and when you Sustain it during the duration, you can draw a disc of spiraling light from the diadem and throw it at a creature within 120 feet. Make a ranged spell attack at mythic proficiency against the target's AC. This action has the attack and spirit traits. On a hit, you deal 4d8 spirit damage, 1d4 persistent spirit damage, and the target is Dazzled for 1 round (3 rounds on a critical hit). The persistent damage isn't doubled on a critical hit.\nIf the disc passes through an area of magical darkness or targets a creature affected by magical darkness, the disc's glow attempts to counteract the darkness using your Religion or Occultism skill modifier as the counteract check modifier and half your level as the counteract rank.\nSpell Effect: Diadem of Divine Radiance\nHeightened 2 The disc's spirit damage increases by 2d8, and the persistent damage increases by 1d4.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": "ac",
      "damage": [
        {
          "formula": "4d8",
          "type": "spirit",
          "kind": "damage"
        },
        {
          "formula": "1d4",
          "type": "spirit",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The disc's spirit damage increases by 2d8, and the persistent damage increases by 1d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:seize-identity",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "DOBs5ALM1titPYxe",
      "slug": "seize-identity",
      "publicationTitle": "Pathfinder War of Immortals",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:8fb830bb7aaad249ebbba76e4daf35d8e4cd67cceb43fdbe32676c0f4edac2a8",
    "translatableHash": "sha256:ba2af764990547ca6fa6b6fd0b2e7bcc8f4466c7e931cb1bcad2ab2ae59eb78b",
    "data": {
      "schemaVersion": 1,
      "name": "Seize Identity",
      "rank": 6,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "illusion",
        "manipulate",
        "mental",
        "mythic",
        "visual"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "With a gleeful cackle, you seize an individual's voice and swallow it. For the duration, you look and sound like the target, and the target can't speak. The effects depend on the result of the target's Will saving throw.\nCritical Success The creature is unaffected.\nSuccess You take on the target's appearance, with the same effects of a 3rd-rank Illusory Disguise spell, and the target can't speak, with the same effects of a 2nd-rank Silence spell.\nFailure As success, but the target also takes 4d6 mental damage from the transformation.\nCritical Failure As success, but the target also takes 8d6 mental damage from the transformation.\nThe first time each round you Sustain this spell after you cast this spell, the target ages rapidly, taking (ternary(gte(6,9),3,2))d8[void] damage (check (will, basic) save). On a failure, the target also becomes Enfeebled 1 or increases the value of its enfeebled condition by 1.\nHeightened (9th) The mental damage increases by 4d6, and the void damage increases by 1d8.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 intelligent creature",
      "area": null,
      "duration": "1 minute",
      "defense": "will save",
      "damage": [
        {
          "formula": "4d6",
          "type": "mental",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (9th) The mental damage increases by 4d6, and the void damage increases by 1d8."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:bounty-of-the-sky",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "txxm6Rj6jNxcFSQ9",
      "slug": "bounty-of-the-sky",
      "publicationTitle": "Pathfinder War of Immortals",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:7e8a043a325eb731e9024ed08d611880b0f7821e4c1b922bb32717c057eae960",
    "translatableHash": "sha256:ed5c9b7f031f2e4ba13dc6db6a5b1f47ab6690756bc6ab0dee00af92a5fff909",
    "data": {
      "schemaVersion": 1,
      "name": "Bounty of the Sky",
      "rank": 6,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "healing",
        "manipulate",
        "mythic"
      ],
      "traditions": [
        "divine",
        "primal"
      ],
      "description": "You call forth a flock of geese that drop restorative fruits and breads from the sky as they fly overhead. You or an ally in the area can Interact to collect one of these gifts, and can then either consume it as part of the same action or do so with a separate Interact action later in the spell's duration. Enemies who attempt to pick up one of these gifts find that it turns to ash in their hands. Each time a actor consumes one of these gifts, they can select one of the following benefits.\n• The actor regains 4d6 Hit Points.\n• The actor reduces the stage of one poison or disease they suffer from by one stage. This can't reduce the stage below 1 or cure the affliction.\n• The actor reduces the value of their Clumsy, Drained, Enfeebled, or Stupefied condition by 2, or reduces two of the listed conditions by 1 each.\nHeightened 2 The amount of Hit Points a actor regains from consuming a gift increases by 2d6.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "30 emanation",
      "duration": "1 minute",
      "defense": null,
      "damage": [
        {
          "formula": "4d6",
          "type": "untyped",
          "kind": "healing"
        }
      ],
      "heightening": "Heightened 2 The amount of Hit Points a actor regains from consuming a gift increases by 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:final-fate-of-the-locust-host",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "bIz6QnUIxu5Z7vEH",
      "slug": "final-fate-of-the-locust-host",
      "publicationTitle": "Pathfinder War of Immortals",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:41a282948fdd2068a8e7454df54da5a1ff00c0036f3a60386e1aa2ee32088ff4",
    "translatableHash": "sha256:a6876d6aa43848b84c3f559a894ab9c83b67b4258e605409cd0ba92f1e66789a",
    "data": {
      "schemaVersion": 1,
      "name": "Final Fate of the Locust Host",
      "rank": 7,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "incarnate",
        "manipulate",
        "mythic"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult",
        "primal"
      ],
      "description": "You conjure the rotting corpse of Deskari, previously Lord of the Locust Hosts, to the battlefield. Deskari's corpse occupies the space of a Gargantuan creature. The corpse is riddled with vermin, including countless locusts, whose collective movement grants the corpse a Speed of 60 feet and a fly Speed of 60 feet.\nArrive Behold the Rotten Lord Deskari's corpse is unspeakably foul, emitting a putrid stench, and constantly twitches thanks to the movement of the millions of insects and vermin that consume it. A loud, persistent buzzing is created by the clouds of locusts surrounding it like a haze. Each living enemy creature within a 60-foot type:emanation must attempt a Fortitude save with the following effects.\nCritical Success The creature is unaffected.\nSuccess The creature is Sickened 2.\nFailure The creature is Sickened 3 and Deafened for the duration.\nCritical Failure The creature is Sickened 4, Stunned 1, and deafened for the duration.\nDepart (poison) Feast of the Locust Host The millions of insects and vermin feasting on Deskari pour out of its corpse and surge across the battlefield, consuming your enemies. This swarm deals 5d8 piercing damage and 5d8 poison damage to enemy creatures in a 60-foot type:emanation with a basic Reflex save. A creature that critically fails is additionally Drained 2.",
      "castingTime": "3 actions",
      "range": "500 feet",
      "target": "",
      "area": null,
      "duration": "until the end of your next turn",
      "defense": null,
      "damage": [
        {
          "formula": "5d8",
          "type": "piercing",
          "kind": "damage"
        },
        {
          "formula": "5d8",
          "type": "poison",
          "kind": "damage"
        }
      ],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:part-the-mists-to-paradise",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "9sofMbyYL80shsHH",
      "slug": "part-the-mists-to-paradise",
      "publicationTitle": "Pathfinder War of Immortals",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:197fac63707bbb96e141311629fb2b534c7e5f87c950030f114507f3ddf00ea7",
    "translatableHash": "sha256:7d576d02072eeef46f26fa3da977cbf352d2f5c87b4899409a233c2c23b165f3",
    "data": {
      "schemaVersion": 1,
      "name": "Part the Mists to Paradise",
      "rank": 8,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "exploration",
        "extradimensional",
        "healing",
        "manipulate",
        "mythic"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult",
        "primal"
      ],
      "description": "You conjure a pathway to paradise, visible only to you and your allies through a dense cloud of magical mist. You and the other targets within range are transported through this mist to an extradimensional paradise of idyllic geographical features. Creatures within this paradise don't need to eat or drink. For each minute you spend within this paradise, all creatures within experience the benefits of 24 hours passing, gaining the healing benefits of a full night's rest, as well as the elapse of any afflictions or spells with day-long intervals. However, for any afflictions or spells with intervals measured in shorter periods of time, only one of those intervals passes for every minute spent within the paradise. This means that at the end of a minute, a creature can attempt a saving throw against a disease whose interval is 1 day, a poison whose interval is 1 minute, and a harmful spell that allows a saving throw each round. Each saving throw attempted while within the paradise gains a +4 status bonus.\nYou and your allies can act normally while within the paradise and can use the time to cast spells, Refocus, or perform other exploration activities that take less than 10 minutes. When the spell ends, you and all other targets depart the paradise, returning through the mists to your previous locations or in the nearest unoccupied spaces. You can Dismiss this spell.",
      "castingTime": "1 minute",
      "range": "30 feet",
      "target": "you and up to 6 willing creatures",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:beseech-arcanotheign",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "wZ1rsLrWfYtMZfgv",
      "slug": "beseech-arcanotheign",
      "publicationTitle": "Pathfinder War of Immortals",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:a29098156ed7d2ca830dbca0bbcd543106f902fb0c95b2f447d077e9c0ef8df4",
    "translatableHash": "sha256:48a9b76bb102af8b5d16145c2ce6f10c55412198707031039674b8e73e4d1d87",
    "data": {
      "schemaVersion": 1,
      "name": "Beseech Arcanotheign",
      "rank": 9,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "incarnate",
        "manipulate",
        "mythic"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult",
        "primal"
      ],
      "description": "With a whispered prayer or arcane sending, you conjure Arcanotheign, herald of Nethys. She's a storm of magic, half white and half black, roiling in a vaguely humanoid shape. She occupies the space of a Medium creature and has a Speed of 40 feet and a fly Speed of 60 feet.\nArrive (sonic) Storm's Unbridled Destruction Arcanotheign arrives with a flash of light and a cacophonous crash of colliding magic. All enemies in a 60-foot type:emanation take 8d12 sonic damage with a basic Reflex save. A creature that critically fails is additionally Deafened for 10 minutes.\nDepart (electricity, healing) Flash of Brilliance Arcanotheign fires a powerful arcane blast at one target within 100 feet, dealing 5d12 electricity damage with a basic Reflex save, and a powerful divine blast at one ally, healing 5d12 Hit Points. Then, Arcanotheign asks for payment in the form of a fond memory. If you pay this cost, you lose this memory, Arcanotheign gains this memory, and Arcanotheign whispers a secret into your mind; you can immediately Recall Knowledge on any subject at mythic proficiency.",
      "castingTime": "3 actions",
      "range": "100 feet",
      "target": "",
      "area": null,
      "duration": "until the end of your next turn",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:garden-of-the-green-mans-growth",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "jQgX7zChqjFrU7Q1",
      "slug": "garden-of-the-green-mans-growth",
      "publicationTitle": "Pathfinder War of Immortals",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:bc88c98b85da886134be9b4b9c21b72af31e4ea4df7a079c86afe840b5660164",
    "translatableHash": "sha256:e38d82e32ac9e0f888d3cf7aac18b9cb141c15f2f913dbab4313879085726b61",
    "data": {
      "schemaVersion": 1,
      "name": "Garden of the Green Man's Growth",
      "rank": 10,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "incarnate",
        "manipulate",
        "mythic"
      ],
      "traditions": [
        "divine",
        "primal"
      ],
      "description": "You cast your magic into the earth, calling out to a powerful green man, a verdant lesser deity of nature, to come to your aid. They occupy the space of a Medium creature, have a Speed of 40 feet, and a climb Speed of 40 feet.\nArrive (plant) Verdant Bloom The green man erupts from the ground in a burst of lush growth, dealing 10d8 bludgeoning damage to creatures in a 60-foot type:emanation with a basic Reflex save. Creatures that fail this save are pushed 30 feet away from the green man and are knocked Prone. The area becomes greater difficult terrain for 24 hours.\nDepart (plant) Forest of Grasping Vines The green man casts out their arms, causing vines to rise from the ground, lash at up to six different creatures, and coil them up. Each of these vines targets a different enemy within 100 feet of the green man and deals 12d6 slashing damage with a basic Reflex save. A creature that fails is Grabbed until it Escapes (on a critical failure it is Restrained until it Escapes). The Escape DC is your spell DC. Each creature that begins its turn grabbed or Immobilized by these vines takes an additional 4d6 bludgeoning damage, as the vines continue to squeeze the life from it.",
      "castingTime": "3 actions",
      "range": "100 feet",
      "target": "",
      "area": null,
      "duration": "until the end of your next turn",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:summon-oliphaunt-of-jandelay",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Ywe64VHwcBOAWBtq",
      "slug": "summon-oliphaunt-of-jandelay",
      "publicationTitle": "Pathfinder War of Immortals",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/elephant-form.webp"
    },
    "sourceHash": "sha256:8def1797369a23ac85817e88aced1b6c8f8f6e6ec4a117d117efc61f1f3323c3",
    "translatableHash": "sha256:6b2cc60b266618cef69644167c23f09b705b461e6f53cd0ab922c20770a11129",
    "data": {
      "schemaVersion": 1,
      "name": "Summon Oliphaunt of Jandelay",
      "rank": 10,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "incarnate",
        "manipulate",
        "mythic"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You briefly summon the mythical Oliphaunt of Jandelay, unleashing a manifestation of pure destruction that obliterates everything unfortunate enough to stand in its path. The summoned Oliphaunt occupies the space of a Gargantuan creature. It has a Speed of 200 feet.\nArrive (force) Devastating Displacement Using hidden magics and long-lost techniques, you conjure an immense gate to Jandelay, compelling the Oliphaunt to step through. The Oliphaunt arrives in a 60-foot type:burst. Each creature in the area takes 8d10 force damage (basic Reflex save). On a failure, the creature is also pushed 60 feet away from the Oliphaunt.\nDepart Annihilating Trample The Oliphaunt becomes aware that it has been summoned to a world that isn't on the verge of annihilation. It summons another enormous gate to Jandelay 200 feet in front of it. The Oliphaunt then rages forward through the gate, crushing everything in its path, before closing the gate behind it and disappearing. The Oliphaunt creates an 200-foot line that extends 200 feet. Each creature and vehicle in the area takes 8d8 bludgeoning damage (basic Fortitude save). A creature or vehicle reduced to 0 Hit Points is smashed into fine powder; its gear, passengers, and cargo remain. An unattended object in the area is destroyed unless it succeeds at a Fortitude save, regardless of Hardness, or unless it's an artifact or similarly hard to destroy. This trample automatically destroys any force effect, such as a wall of force.",
      "castingTime": "2 actions",
      "range": "500 feet",
      "target": "",
      "area": null,
      "duration": "until the end of your next turn",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:curse-of-recoil",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "9uSBfK8EUVBrcNYx",
      "slug": "curse-of-recoil",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:301d73515cae8491ff25bec9d74587d9bb9c559e2d050430cbac472c282c543e",
    "translatableHash": "sha256:8c123876bebbd2b6f285512075efbd25fa8f8db666711971b139ff0119071e7a",
    "data": {
      "schemaVersion": 1,
      "name": "Curse of Recoil",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "curse"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "Trigger An enemy you can see is about to make a ranged attack.\nYou curse an enemy to suffer a kickback as they make a ranged attack, potentially causing them to miss. The triggering enemy attempts a Will save.\nCritical Success The target is unaffected.\nSuccess The recoil from their ranged attack causes the target to be Off-Guard until the beginning of their next turn.\nFailure The recoil imposes a –1 status penalty to the ranged attack and renders the target off-guard until the beginning of their next turn.\nSpell Effect: Curse of Recoil (Failure)\nCritical Failure The recoil imposes a –2 status penalty to the ranged attack and renders the target off-guard until the beginning of their next turn. Until the start of their next turn, any additional ranged attacks made with the same weapon, spell, or ability take the same penalty.\nSpell Effect: Curse of Recoil (Critical Failure)",
      "castingTime": "reaction",
      "range": "120 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 round",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:forced-mercy",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "BQMEaeJiEFC1nepg",
      "slug": "forced-mercy",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/forced-mercy.webp"
    },
    "sourceHash": "sha256:2eeb5843e691594e8b868cfaa7f3670c323ca080f1129ac29202468c4022e76f",
    "translatableHash": "sha256:9ac379fa76a57ee760649f5f506a4a6324d076580dcf40c646485b9775289b8e",
    "data": {
      "schemaVersion": 1,
      "name": "Forced Mercy",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "emotion",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "You soften the target's blows, ensuring they avoid vital areas and cause no lasting harm. All physical damage dealt by the target to living creatures becomes nonlethal and all persistent bleed damage dealt by the target is reduced to 0. This effect doesn't incur the typical –2 circumstance penalty for nonlethal attacks with a lethal weapon or attack. An unwilling target must attempt a Will save. A willing target can choose to critically fail their saving throw.\nCritical Success The creature is unaffected.\nSuccess The creature is affected for 1 round.\nFailure The creature is affected for 1d4.\nCritical Failure The creature is affected for 1 minute.\nHeightened (4th) The range increases to 100 feet, and you can target up to 8 creatures.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "varies",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened (4th) The range increases to 100 feet, and you can target up to 8 creatures."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:helpful-reload",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "0OFFXFdnMmFVlt8W",
      "slug": "helpful-reload",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:9b1b1d64822cd17a48f3bd421a9534cda0c90cbeddfde8230d5c4e6c31603122",
    "translatableHash": "sha256:07cb639d2e7de663ac1bda7e66c9f3c5d13f871a64f149fcba6abbc1b93f5e8a",
    "data": {
      "schemaVersion": 1,
      "name": "Helpful Reload",
      "rank": 2,
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
      "description": "Trigger One of your allies makes a ranged Strike with a weapon with a reload of 1 or less\nRequirements Your ally has more ammunition for their ranged weapon available.\nWith a quick gesture, you reload your ally's weapon, allowing them to focus on fighting the enemy. You reload their weapon with a piece of mundane ammunition from the triggering creature's inventory.\nHeightened (4th) You reload your ally's weapon and grant them a +1 status bonus to their next Strike with this weapon.\nSpell Effect: Helpful Reload\nHeightened (6th) You reload your ally's weapon with the ammunition of their choice from their inventory. Your ally gains a +1 status bonus to their next Strike with this weapon.\nHeightened (8th) The spell no longer requires your ally to have appropriate ammunition available. You summon a single piece of common magical ammunition of 10th level or lower to reload your ally's weapon with. Your ally gains a +1 status bonus to their next Strike with this weapon.",
      "castingTime": "reaction",
      "range": "30 feet",
      "target": "the triggering creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) You reload your ally's weapon and grant them a +1 status bonus to their next Strike with this weapon.\nSpell Effect: Helpful Reload\nHeightened (6th) You reload your ally's weapon with the ammunition of their choice from their inventory. Your ally gains a +1 status bonus to their next Strike with this weapon.\nHeightened (8th) The spell no longer requires your ally to have appropriate ammunition available. You summon a single piece of common magical ammunition of 10th level or lower to reload your ally's weapon with. Your ally gains a +1 status bonus to their next Strike with this weapon."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:dancing-shield",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "8Hw3P6eurX1MYm7L",
      "slug": "dancing-shield",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/dancing-shield.webp"
    },
    "sourceHash": "sha256:f00f784e10fe186133cbe702036b84367f22bd032fae17b7942860d178fca145",
    "translatableHash": "sha256:7050b79a0aeb9f2b57329ed1681a205e823fa5cd805c9db33f0393180fb24e25",
    "data": {
      "schemaVersion": 1,
      "name": "Dancing Shield",
      "rank": 2,
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
      "description": "You levitate the touched shield and send it to orbit around a creature. When you Cast the Spell and Sustain it, the shield uses the Raise a Shield action to protect the target creature.\nSpell Effect: Dancing Shield\nHeightened (4th) If you have the Shield Block reaction, you can use your reaction to have the target shield use Shield Block when the target creature would take damage from a physical attack, in addition to the usual trigger. In this case, Shield Block protects the target creature, rather than you. Since the shield is using Shield Block and not you, additional effects or abilities that normally apply when you Shield Block don't apply.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "1 touched shield (unattended or in your possession) and 1 willing creature",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) If you have the Shield Block reaction, you can use your reaction to have the target shield use Shield Block when the target creature would take damage from a physical attack, in addition to the usual trigger. In this case, Shield Block protects the target creature, rather than you. Since the shield is using Shield Block and not you, additional effects or abilities that normally apply when you Shield Block don't apply."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:lock-item",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "qFO9HgplrShoaAPY",
      "slug": "lock-item",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/lock-item.webp"
    },
    "sourceHash": "sha256:3fc46a3430456ba267f8d09865d879b3ff2ce540c45ab9e24adf6ac39e97cf23",
    "translatableHash": "sha256:ea9b94cd0349de3605fc94c71a17bfc4d40ad091fc53336493ffad6d2400e894",
    "data": {
      "schemaVersion": 1,
      "name": "Lock Item",
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
      "description": "One object held by a creature becomes fused to that creature's hand and can't be put down. To Disarm or Steal the item, the result of the skill check must exceed the spell's DC or the normal DC, whichever is higher. To voluntarily drop the weapon, the target must spend an Interact action rather than a free action, and then succeed at a Reflex save; the target must also attempt a Reflex save to Interact to put away or swap the object. On a failed save, the action is wasted, but on a success, they drop the item and the spell ends. An unwilling creature must attempt an initial Reflex save against lock item. A willing creature can choose to critically fail the saving throw.\nCritical Success The creature is unaffected.\nSuccess The creature is affected for 1 round.\nFailure The creature is affected for 4 rounds.\nCritical Failure The creature is affected for 1 minute.\nHeightened 2 You can target either one additional object held by the same creature or one additional object held by one additional creature.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 object held by 1 creature and the creature holding it",
      "area": null,
      "duration": "varies",
      "defense": "reflex save",
      "damage": [],
      "heightening": "Heightened 2 You can target either one additional object held by the same creature or one additional object held by one additional creature."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:sticky-fire",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Vseo7VIy8mzINUES",
      "slug": "sticky-fire",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:4b4afe50acc6591e0a7874b5637096166ba6fa31a1d0f165e031c53ae6983cb7",
    "translatableHash": "sha256:831dab834a931d5af4c045b55115eca02483a5d01dd99ca4ce50d92920f9c485",
    "data": {
      "schemaVersion": 1,
      "name": "Sticky Fire",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "attack",
        "concentrate",
        "fire",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You send a bubble of viscous liquid that sparks into flame. Make a spell attack roll against the target's AC, dealing 1d8 fire damage and 1d8 persistent fire damage on a hit. The target is Enfeebled 1 until they recover from their persistent fire damage.\nHeightened 2 The initial and persistent fire damage increase by 1d8.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [
        {
          "formula": "1d8",
          "type": "fire",
          "kind": "damage"
        },
        {
          "formula": "1d8",
          "type": "fire",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The initial and persistent fire damage increase by 1d8."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:steel-fortifications",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "wQDrc0LDWaBA5Xa8",
      "slug": "steel-fortifications",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:9af3352649e39d2089ba6853c8f5a0decfe3951db2a82ae2c2ffd11dd63fe356",
    "translatableHash": "sha256:c2553e321b18c1af8a685c678a8078e89065b75778d3844bcd1a7491954074b3",
    "data": {
      "schemaVersion": 1,
      "name": "Steel Fortifications",
      "rank": 2,
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
      "description": "You conjure several metal structures that consist of angled beams attached to one another at a central point, which can help block attacks. You creature up to three Large structures within range in unoccupied squares; each fortification is 8 feet long, 8 feet wide, and 8 feet tall. There must be enough room for a fortification in order to conjure it. A single fortification has an AC of 10 and is immune to critical hits and precision damage. It has Hardness 9, 60 Hit Points, and a BT of 30. Once a fortification is broken, it crumbles into sharp metal bits. Any creature adjacent to or sharing a space with a fortification when it is broken must attempt a Reflex save or take 2d6 persistent bleed damage.\nCreatures can pass through the spaces of a fortification, though Medium and larger creatures treat these spaces as difficult terrain. A Small or smaller creature can occupy the same spaces as a fortification; doing so grants them standard cover. Similarly, a Prone Medium creature can occupy the same spaces as a fortification, gaining standard cover in the process. A Medium or smaller creature can climb a fortification with a successful check (athletics, dc:15) check.",
      "castingTime": "3 actions",
      "range": "120 feet",
      "target": "",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:blister-bomb",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "3qx1axryNbl97ker",
      "slug": "blister-bomb",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:070b4cf3bdcdc8320e108e8f3219d82aad546de99bb3b9db3ff621fe493de0a9",
    "translatableHash": "sha256:a774f28b9cd0ebc1148ea8f3c771d5fe691e2fbfad81000e7f25bef23902e625",
    "data": {
      "schemaVersion": 1,
      "name": "Blister Bomb",
      "rank": 3,
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
      "description": "You launch a small bomb enchanted with a fast-acting skin disease at your foes, causing their skin to break out in horrible bleeding sores. All creatures in the area of the burst must attempt a Fortitude save.\nCritical Success The creature is unaffected and is immune to blister pox for 1 week.\nSuccess The creature is Sickened 2.\nFailure The creature is afflicted with blister pox at stage 1.\nCritical Failure The creature is afflicted with blister pox at stage 2.\nBlister Pox (disease) Level 5; A creature can't reduce its sickened value below 1 while it's taking persistent bleed damage from blister pox\nStage 1 sickened 2 (1 round)\nStage 2 sickened 2 and 1d6 persistent bleed damage (1 round)\nStage 3 sickened 2 and 2d6 persistent bleed damage (1 round)\nStage 4 Sickened 3 and 2d6 persistent bleed damage (1 day)",
      "castingTime": "2 actions",
      "range": "100 feet",
      "target": "",
      "area": "5 burst",
      "duration": "",
      "defense": "fortitude save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:dividing-trench",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "8OWA91bgm5r6QPaH",
      "slug": "dividing-trench",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/dividing-trench.webp"
    },
    "sourceHash": "sha256:68450851528c2dcf2e65c7168bc7807efaa1498bae7149e9c13a13dc58edaafd",
    "translatableHash": "sha256:1a613c776f4976ff5824c2fff7b611ee6a1e43a29f54d3f996b0946a1e808db3",
    "data": {
      "schemaVersion": 1,
      "name": "Dividing Trench",
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
      "description": "You dig an earthen trench across the surrounding terrain, which must be soil, clay, sand, or other soft earth, but not flooring or stone. The trench is 5 feet wide, 5 feet deep, and up to 15 feet long. You can shape the trench's path, but it must be one continuous line. You must conjure the trench in an open space so it doesn't pass through any creatures or objects. Creatures inside the trench have cover from creatures outside the trench, and creatures outside the trench have cover from creatures inside the trench. Small or smaller creatures in the trench might have greater cover against other creatures who aren't close to the trench's edge, and in turn, those creatures might have more cover against small creatures in the trench; the GM determines the amount of additional cover, if any. Entering or leaving the trench requires an additional 5 feet of movement but doesn't require any kind of check and isn't considered difficult terrain. At the end of the spell's duration, the trench disappears, and all creatures in the trench remain in their spaces on solid ground.\nHeightened 2 The trench's maximum length increases by 15 feet.",
      "castingTime": "3 actions",
      "range": "120 feet",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 2 The trench's maximum length increases by 15 feet."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:pest-swarm",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "fRqHDOWmgcUTeT03",
      "slug": "pest-swarm",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:91166189788f6e6f3d05ded2d3d5d3f74bb7632a9b1dda81a50fc0a615c2d8ff",
    "translatableHash": "sha256:e9ce709d6dc21fa2ed2061fd8e05cb92b7fe047f4bed5fc239c2942d553f33e9",
    "data": {
      "schemaVersion": 1,
      "name": "Pest Swarm",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "incarnate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult",
        "primal"
      ],
      "description": "Sometimes the most common irritations can band together and become threats to your enemies. You reach out to the pests and nuisances around you, forming a small squadron of them to harass and occupy your opponents. They swarm from the forests, the air, and even the dirt beneath your feet. The pest squadron occupies the space of a Large creature, and like a swarm, they can occupy the same space as other creatures. When you Cast this Spell, choose one of the pest squadrons below to summon.\n• Cockroaches Speed 30 feet, climb 30 feet.\n• Arrive Scurrying Swarm The swarm of cockroaches scuttles toward the enemy, swarming them and climbing up the bodies of any enemy touching the ground. They deal 4d6 piercing damage (check (reflex, basic, options:area-effect) save) to all enemies within their space and in a 5-foot emanation. On a critical failure, a creature can't use concentrate actions for 1 round as they try and brush away the insects.\n• Depart Farewell Dirt The cockroaches disperse, climbing down from the creatures and leaving behind their debris and dirt. All enemies in their space must attempt a check (fortitude, options:area-effect,inflicts:sickened) save. On a failure, a creature is Sickened 2 (Sickened 3 on a critical failure).\n• Mosquitoes Speed 30 feet, fly 50 feet.\n• Arrive Biting Flight The mosquitoes arrive in a hazy cloud, landing on the exposed skin of your opponents and dealing 4d6 piercing damage to enemies in their space (check (reflex, basic, options:area-effect) save).\n• Depart Parting Gift The swarm attempts to drain their opponents before flying off. All enemies in their space and in a 5-foot emanation must succeed at a check (fortitude, options:area-effect,inflicts:drained) save or become Drained 1 (Drained 2 on a critical failure).\n• Pigeons Speed 20 feet, fly 40 feet.\n• Arrive Dive Bomb The swarm of pigeons dives into the crowd of enemies and attacks with beaks and talons. Each enemy within their space takes 2d8 piercing damage damage (check (reflex, basic, options:area-effect) save). On a critical failure, a creature is Dazzled for 1 round.\n• Depart (sonic) Wing Snap The pigeon swarm snaps their wingtips together to startle their opponents before leaving. Each enemy within their space takes 4d6 sonic damage (check (fortitude, basic, options:area-effect) save).\n• Rats Speed 30 feet, burrow 20 feet.\n• Arrive Chittering Race Rats swarm the legs of your enemies, biting at them and digging their sharp nails into whatever exposed flesh reveals itself. Each enemy in their space takes 4d6 piercing damage (check (reflex, basic, options:area-effect) save).\n• Depart Underfoot The rats scurry underfoot, tripping up enemies and burrowing underground to make a swift getaway. Each enemy in their space must succeed a check (reflex, options:area-effect,damaging-effect,inflicts:prone) save or be knocked Prone and take 2d6 bludgeoning damage. The area the rat swarm was in becomes difficult terrain for 1 round.\n• Skunks Speed 30 feet, climb 20 feet;\n• Arrive Mustelid Charge Skunks race to the scene, and each enemy within their space and within a 5-foot emanation take 4d6 piercing damage (check (reflex, basic, options:area-effect) save) as the skunks snarl and bite.\n• Depart (acid) Stink Bomb Before leaving, the skunks launch a final offensive maneuver and release their stink glands in a 15-foot cone. All creatures in the area take 2d6 acid damage (check (fortitude, basic, options:area-effect,inflicts:sickened) save). On a failure, a creature is also Sickened 1 (sickened 2 on a critical failure).\n• Spiders Speed 30 feet, climb 30 feet.\n• Arrive (poison) Venomous Swarm A horde of violin spiders crawls up from the ground, climbing onto enemies within their space and in a 5-foot emanation and biting them. Each enemy takes 3d6 piercing damage (check (fortitude, basic, options:area-effect) save). Enemies who fail are exposed to violin spider venom.\n• Depart Spinning Webs As the violin spiders depart, they spray sticky webs at their enemies in a 30-foot cone. All creatures in this cone must attempt a check (reflex, options:area-effect) save. On a failure, a creature takes a –10-foot circumstance penalty to their Speeds (–20-foot circumstance penalty on a critical failure) for 1 minute; a creature can remove this penalty with a successful Escape against your spell DC. The area of the cone is also difficult terrain for 1 round.\nViolin Spider Venom (poison)\nSaving Throw check (fortitude, dc:24, traits:poison)\nMaximum Duration 6 rounds\nStage 1 1d6 poison damage (1 round)\nStage 2 2d6 poison damage and Clumsy 1 (1 round)\nStage 3 2d6 poison, 1d6 persistent bleed damage, and clumsy 1 (1 round)\nStage 4 2d6 poison, 2d6 persistent bleed damage, and clumsy 1 (1 round)",
      "castingTime": "3 actions",
      "range": "30 feet",
      "target": "",
      "area": null,
      "duration": "until the end of your next turn",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:filter-air",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "GgrrcKQgJH2Eykq1",
      "slug": "filter-air",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:8c2a96735497276f6b24318a4af452e46bbe04cdb31985f60e20cdc67771b156",
    "translatableHash": "sha256:ad67c2ad9d43bbd7c8d08589226e78e2a7e3500f4b4dedbe8264dd4fc6530d84",
    "data": {
      "schemaVersion": 1,
      "name": "Filter Air",
      "rank": 4,
      "rarity": "common",
      "traits": [
        "air",
        "concentrate",
        "manipulate",
        "subtle"
      ],
      "traditions": [
        "arcane",
        "divine",
        "primal"
      ],
      "description": "Trigger You're exposed to a poison or disease that has the inhaled trait, and you're aware of the exposure\nRequirements You breathe air.\nYou suck in a rough breath of air, and your body automatically filters out the harmful molecules that would infest your lungs. As you breathe for the duration of the spell, you get the outcome one degree of success higher on your saving throws against inhaled poisons and diseases.\nSpell Effect: Filter Air",
      "castingTime": "reaction",
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
    "contentId": "pf2e:spell:spells-srd:fallen-soldiers-lament",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "LjLSvAqnR03EnITX",
      "slug": "fallen-soldiers-lament",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:4bc38dcc317ce7582a7e0881a001e405ce28750a954bbc32b0fb1f1e7119dfe2",
    "translatableHash": "sha256:a7ddc41500b6ac460014d359c063ab779121716ddb376bef89b9681cc5b89bd4",
    "data": {
      "schemaVersion": 1,
      "name": "Fallen Soldier's Lament",
      "rank": 4,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "illusion",
        "manipulate",
        "mental",
        "visual"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "You raise an illusion in the space of a fallen foe, crafting it to resemble a ghost of your target before parading it across the battlefield. Whenever you Cast this Spell or Sustain this spell, you move the illusion up to 30 feet and cause each enemy in a 30-foot emanation of the spirit to attempt a Will save against your spell DC. Enemies who fail become Frightened 1 (or Frightened 2 on a critical failure).\nHeightened (6th) You can target a corpse of any size that has died within the past 8 hours.",
      "castingTime": "2 actions",
      "range": "100 feet",
      "target": "1 corpse of a Medium or smaller creature that has died within the past 8 hours",
      "area": null,
      "duration": "1 minute",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened (6th) You can target a corpse of any size that has died within the past 8 hours."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:blinding-bottle",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "3ygqSJYWZM1UV76Z",
      "slug": "blinding-bottle",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:883e94b5af808b6e6d0e16212dc9fd9e361e9263e6cd5c22d68fdec5c68adddf",
    "translatableHash": "sha256:df51284cab3f4d3f1d9886666026113db315ba827f9c872942119794be1e37bf",
    "data": {
      "schemaVersion": 1,
      "name": "Blinding Bottle",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "poison"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You conjure an exploding glass container filled with a sight-stealing poison and hurl it across enemy lines. Upon impact, the bottle bursts and exposes all creatures in the area to the toxin within. Each creature in the area must attempt a Fortitude save.\nCritical Success The creature is unaffected.\nSuccess The creature takes 3d6 poison damage.\nFailure The creature is afflicted with blinding poison at stage 1.\nCritical Failure The creature is afflicted with blinding poison at stage 2.\nBlinding Poison (incapacitation, poison) Level 9\nMaximum Duration 4 rounds\nStage 1 3d6 poison damage and Blinded for 1 round (1 round)\nStage 2 4d6 poison damage and blinded for 1 round (1 round)\nStage 3 5d6 poison damage poison damage and blinded for 1 round (1 round)\nStage 4 6d6 poison damage poison damage and blinded for 1 minute (1 round)\nPFS Note: The poison inflicted by this spell has the incapacitation trait, but the spell itself does not. This means that a creature which fails the save against the spell begins at stage 1 for the poison.",
      "castingTime": "2 actions",
      "range": "100 feet",
      "target": "",
      "area": "30 burst",
      "duration": "",
      "defense": "fortitude save",
      "damage": [
        {
          "formula": "3d6",
          "type": "poison",
          "kind": "damage"
        }
      ],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:desperate-repair",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "92JNBuY5pfFmywOd",
      "slug": "desperate-repair",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:3ba23bd0a7ce1d99f29facfd9ca295f04e5b1cb1ebfbfd743ff745e87625bf70",
    "translatableHash": "sha256:353700c3408b2b9cd84860c1472c9f1f326f744ef2aac90bf8f9da1775592074",
    "data": {
      "schemaVersion": 1,
      "name": "Desperate Repair",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "concentrate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "Trigger A shield within range would be reduced to 0 Hit Points by a damaging effect\nRequirements The triggering shield had more than 1 Hit Point before taking damage.\nYou hold a shield together with the power of your magic, forcing wood and steel to fuse back together. The shield remains at 1 Hit Point and isn't destroyed. Its construction is weakened until someone takes the time to repair it, preventing desperate repair or a similar ability from saving the same shield until your next daily preparations.",
      "castingTime": "reaction",
      "range": "60 feet",
      "target": "1 shield",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:instant-minefield",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "vuehhQN8gPSpqcEK",
      "slug": "instant-minefield",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:55ec7d79ee954b3a74fd29257b26584c9cfebcba289c19014bf6fee6890ca4db",
    "translatableHash": "sha256:633414c32d3f6d7d6f5a9a7625d20bbfc90c3988c85bc1c9de174b977b82d5e3",
    "data": {
      "schemaVersion": 1,
      "name": "Instant Minefield",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "fire",
        "illusion",
        "manipulate",
        "subtle"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You create several hidden mines throughout the area that explode when stepped on. Choose up to 6 unoccupied squares within range. A mine appears in each chosen square, visible only to you and your allies. A mine can't be targeted and isn't affected by area effects, but if it hasn't been triggered by the end of the spell's duration, it dissipates harmlessly. A creature that can see Invisible creatures and objects can see the mines. A creature can also attempt a Perception check against your spell DC to Seek to find an invisible mine.\nA creature who enters a square with an invisible mine triggers it, causing an explosion that deals 3d6 fire damage and 3d6 piercing damage (basic Reflex save) to the creature and every creature in a 5-foot emanation from the mine's square.\nHeightened 1 The fire damage and piercing damage dealt by a mine each increase by 1d6.",
      "castingTime": "3 actions",
      "range": "100 feet",
      "target": "",
      "area": null,
      "duration": "10 minutes",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "3d6",
          "type": "piercing",
          "kind": "damage"
        },
        {
          "formula": "3d6",
          "type": "fire",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The fire damage and piercing damage dealt by a mine each increase by 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:shock-and-awe",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Y3qZrvZrqPuGJ2hk",
      "slug": "shock-and-awe",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:13f1ae0bf9f1e4eb3f509bc9330ce2197c34b3ee566e780219ff6cefcbeb48a3",
    "translatableHash": "sha256:338d5b90af8e9bbde4a1213138c9e6f8999ace29378a7af80dc1dbd46d1abe12",
    "data": {
      "schemaVersion": 1,
      "name": "Shock and Awe",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "auditory",
        "concentrate",
        "emotion",
        "fear",
        "illusion",
        "manipulate",
        "mental",
        "visual"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You create the illusion of cannons exploding, bullets and arrows flying, and magical ballistics firing, as an overwhelming torrent of information, both visual and auditory. Enemies in the area must attempt a Will save.\nCritical Success The enemy is unaffected.\nSuccess The target is Frightened 1.\nFailure The enemy is Frightened 2 and Stunned 1.\nCritical Failure The enemy is Frightened 3 and Stunned 2.",
      "castingTime": "3 actions",
      "range": "100 feet",
      "target": "",
      "area": "50 burst",
      "duration": "1 round",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:boots-on-the-ground",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "IN46qySRdMdpcd0y",
      "slug": "boots-on-the-ground",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:fca24a1f7fb0b52df525a9490e0b64f506d8fd76b3188c1e9aa526e68fd81878",
    "translatableHash": "sha256:9cab4498a4c7a08815f758e6354bef0534aab0e47bde2991728ab837992c5824",
    "data": {
      "schemaVersion": 1,
      "name": "Boots on the Ground",
      "rank": 6,
      "rarity": "common",
      "traits": [
        "auditory",
        "concentrate",
        "illusion",
        "manipulate",
        "visual"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You craft the illusion of your army being much bigger than it actually is, hoping to overwhelm the opposing forces and shatter their hopes. Your illusion can create up to three illusory Gargantuan duplicates of troops within range. You can give the illusion a basic task to perform, such as standing in formation, marching, mimicking guard movements, or unloading illusory boxes; however, the illusion can't perform any actual tasks and can't create intelligible sounds, such as music or clear speech. If you and any of the illusory troops are ever farther than 500 feet apart, the spell ends.\nAn illusory troop's AC is equal to your spell DC. Its saving throws modifiers are equal to your spell DC – 10. If an illusory troop is hit by an attack or fails a save, you must attempt a check (flat, dc:11). On success, the illusion of that troop is destroyed. On failure, the entire illusion shatters, and all illusory troops are destroyed.\nHeightened (8th) The DC of the is lowered to 8 (check (flat, dc:8)), and you can create up to five illusory troops.",
      "castingTime": "3 actions",
      "range": "100 feet",
      "target": "",
      "area": null,
      "duration": "Until you next make your daily preparations",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (8th) The DC of the is lowered to 8 (check (flat, dc:8)), and you can create up to five illusory troops."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:frozen-fog",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "nOVSmPZsCm1C1sI3",
      "slug": "frozen-fog",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:5ccf10a1fdd0242dd6990c816c23330ffc5c0cc7ad564813a912032bdda21a85",
    "translatableHash": "sha256:ce7c0b66edc512f3bbb47b3f08b0cf242c8d6a71aa68c2d98a610b4873add0be",
    "data": {
      "schemaVersion": 1,
      "name": "Frozen Fog",
      "rank": 6,
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
      "description": "You conjure a chilling mist that settles into the bones and makes it difficult to move. This has the effects of Mist, except that you can Sustain the spell once per round to move the fog up to 10 feet. A creature that starts its turn in the area takes 6d8 cold damage with a basic Fortitude save. A creature that fails its save is also Clumsy 1 for 1 minute (Clumsy 2 on a critical failure) and takes a –10-foot status penalty to Speeds for as long as it's clumsy.\nSpell Effect: Frozen Fog\nHeightened 2 The damage increases by 3d8.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "",
      "area": "20 burst",
      "duration": "1 minute",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "6d8",
          "type": "cold",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The damage increases by 3d8."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:siege-weapons-blessing",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "wdb4XIZw1xmki5nr",
      "slug": "siege-weapons-blessing",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:cf6e6d6ee0fd49239086b691f50c12b4e91c86e363a74e54fbf18b5a15bfb19b",
    "translatableHash": "sha256:683f1c5943a3e6358c7ccb0a22da749f2042b68bb75fe7031b0f85f0a1e9f857",
    "data": {
      "schemaVersion": 1,
      "name": "Siege Weapon's Blessing",
      "rank": 6,
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
      "description": "You trace a magic rune onto the body of a siege weapon, calling upon fate or your faith to guide the attacks your allies make with this machine. For the spell's duration, any skill checks attempted to Load the siege weapon can be rolled twice, taking the better result; these skill checks gain the fortune trait. In addition, any saving throws attempted by creatures caught in the siege weapon's Launch area must be rolled twice, taking the worse result; these saving throws gain the misfortune trait.\nHeightened (9th) The duration is 8 hours.",
      "castingTime": "3 actions",
      "range": "touch",
      "target": "one mounted siege weapon",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (9th) The duration is 8 hours."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:skeleton-army",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "y1dcR5unn2UwlUR9",
      "slug": "skeleton-army",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:f2113efda63ca2478f1c9fd01a1ed1bc7dbc3ce46e65f000b640cd6b90197ed3",
    "translatableHash": "sha256:91e1b5890062a972fbb78c702931b40bfc4e05d805067acb3cd9981c4b3c77d4",
    "data": {
      "schemaVersion": 1,
      "name": "Skeleton Army",
      "rank": 6,
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
      "description": "With a fistful of compressed bones, you summon a legion of skeletal hulks to fight in your war, refusing to let them rest until they've given up their last inches of usefulness to your cause. The undead army occupies the space of a Huge creature and has a Speed of 40 feet.\nArrive Bone March The skeletal hulks rise from the dirt, slashing through your enemies and attacking with their dirt-encrusted, bony hands. Enemies within a 20-foot emanation take 4d8 slashing damage (basic Reflex save). On a critical failure, a creature also take 2d8 persistent bleed damage.\nDepart Tossed Heads Before crumpling into a pile of bones, the skeleton army removes their skulls and throws them at the enemy lines, chattering and howling, dealing 6d6 piercing damage to enemies in a 20-foot burst (basic Reflex save) within 30 feet. On a critical failure, a creature is also Frightened 2.",
      "castingTime": "3 actions",
      "range": "100 feet",
      "target": "",
      "area": null,
      "duration": "until the end of your next turn",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:explosive-barrage",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ZvB9sV7NLdpDeoTw",
      "slug": "explosive-barrage",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:333b8f5cbcbc734356631c2e0973b0b8b5a206e480a2fc4d32b463491f4e557a",
    "translatableHash": "sha256:8fe2196b532c9bd7fe98c47bdef944d7ed76da1a5b8877141600c09e9716d611",
    "data": {
      "schemaVersion": 1,
      "name": "Explosive Barrage",
      "rank": 6,
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
      "description": "Area (continued) 20-foot burst plus additional 5-foot burst\nYou fire a booming, fiery explosion followed by a salvo of smaller blasts, each cracking the air with the sound of thunder. You create a 20-foot burst and r additional 5-foot bursts each within the range and within 20 feet of another burst. None of the bursts can intersect. Each creature caught in at least one of these bursts takes 6d8 fire damage and 6d4 sonic damage (basic Fortitude save). On a failed save, a creature is also Deafened for 1 minute.\nHeightened 1 The fire damage increases by 1d8 and the sonic damage increases by 1d4.",
      "castingTime": "2 actions",
      "range": "100 feet",
      "target": "",
      "area": "20 burst",
      "duration": "",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "6d8",
          "type": "fire",
          "kind": "damage"
        },
        {
          "formula": "6d4",
          "type": "sonic",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The fire damage increases by 1d8 and the sonic damage increases by 1d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:holy-host",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "BINaRykHRLGn4Qfm",
      "slug": "holy-host",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:2bcf1582b90b9073e59f6aa9488c16be0a9f65a5a747617b63442126d44ce7d5",
    "translatableHash": "sha256:23b9696841fd7baa01e22f131a97036a33023e578357bd52a8265138b7595730",
    "data": {
      "schemaVersion": 1,
      "name": "Holy Host",
      "rank": 8,
      "rarity": "common",
      "traits": [
        "concentrate",
        "holy",
        "incarnate",
        "manipulate"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "In stories, armies with just and righteous causes win with little difficulty, conquering unholy legions. However, many holy armies know that an extra hand never hurts in the fight to exterminate cruelty and unholy forces, and they might call upon the assistance of a holy army. The holy army occupies the space of a Huge creature. When you Cast this Spell, choose one of the holy militaries below to summon.\n• Agathions Speed 30 feet\n• Arrive (fire) Pranks for All A squadron of procyals arrives, eager to see your enemies learn their lesson in this fight. All enemies in a 60-foot cone take 8d6 fire damage (check (reflex, basic, options:area-effect, traits:fire) save) as the procyals bombard them with popping firecrackers\n• Depart Parting Lesson (emotion, mental) The procyals laugh uproariously as they leave, each throwing out a piece of unrelated advice to a nearby enemy. Enemies in a 20-foot type:emanation take 4d6 mental damage (check (will, basic, options:area-effect,inflicts:stunned, traits:emotion,mental) save). On a failure, a creature is also Stunned 1. On a critical failure, they're Stunned 2.\n• Angels Speed 30 feet, fly 40 feet\n• Arrive (spirit) Flaming Truth A legion of balisses arrive in a burst of holy flame, dealing 8d6 spirit damage to all creatures in a 20-foot type:emanation with a check (fortitude, basic, options:area-effect,inflicts:blinded, traits:spirit) save. On a critical failure, a creature is also Blinded for 1 round\n• Depart Hidden Departure With a plume of smoke, the balisses vanish, spreading a thick cloud of smoke in a 10-foot type:emanation. All creatures within the smoke are Concealed. Unholy creatures within the smoke are Enfeebled 2, and holy creatures within the smoke gain the effects of truesight and ignore the concealment granted by the smoke.\n• Archons Speed 30 feet, fly 60 feet\n• Arrive (spirit) Justice Prevails A battalion of aesras, also known as legion archons, swoop in to provide assistance. Enemies within a 60-foot type:cone take 8d6 spirit damage (check (reflex, basic, options:area-effect, traits:spirit) save)\n• Depart (fire) Eyes of Judgment With one final examination of the battlefield, the aesras take their leave, but not before bringing down their fiery swords to create a corridor of sacred flame. Enemies in a 60-foot type:line take 4d6 slashing damage damage (check (reflex, basic, options:area-effect, traits:fire) save).\n• Azatas Speed 30 feet, fly 80 feet\n• Arrive (auditory, sonic) Inspiring Song Kanya muses arrive to embolden your allies while pushing back your foes. Enemies in a 20-foot type:emanation take 6d6 sonic damage (check (fortitude, basic, options:area-effect,forced-movement, traits:auditory,sonic) save). A creature that fails the save is also pushed 10 feet away from the kanyas. Allies in the emanation gain a +2 status bonus to attack rolls and saving throws, as well as +4 status bonus to damage rolls for the duration of the spell\n• Depart (emotion, fear, mental) Booming Finale With a thunderous chord that stirs the hearts of your forces, the kanyas depart. Enemies in a 60-foot type:cone must attempt a check (will, options:area-effect,inflicts:deafened,inflicts:frightened, traits:emotion,fear,mental) save. On a failure, they're Frightened 2, and on a critical failure, they're Frightened 3 and Deafened for 1 round. Allies in this cone regain 4d10+16 healing Hit Points.\n• Garudas Speed 25 feet, fly 60 feet\n• Arrive Swooping Dive A battalion of garudas sweep through enemy lines, dealing 6d10 slashing damage to enemies in a 120-foot line (check (reflex, basic, options:area-effect) save)\n• Depart Winds of Freedom The garudas flap their wings in tandem, focusing on a 20-foot burst within 60 feet of them. All allies in that area gain a +1 circumstance bonus to all skill checks and DCs for 1 round, and enemies must succeed a check (reflex, options:area-effect,inflicts:prone) save or be knocked Prone.\nSpell Effect: Holy Host (Azata)\nSpell Effect: Holy Host (Garuda)",
      "castingTime": "3 actions",
      "range": "100 feet",
      "target": "",
      "area": null,
      "duration": "until the end of your next turn",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:unholy-army",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "HEuvZAjD1q0J8Y5i",
      "slug": "unholy-army",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:fc8de5298654d85a87c7293dcfcd5682eab0e9abf40aad50723c17bcaf5c08bb",
    "translatableHash": "sha256:88e287ca433ed8c5bf394940b8bba02c43fd810e7543d173ebd5228181a8b349",
    "data": {
      "schemaVersion": 1,
      "name": "Unholy Army",
      "rank": 8,
      "rarity": "common",
      "traits": [
        "concentrate",
        "incarnate",
        "manipulate",
        "unholy"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "Reaching out to the legions of the wicked, you call upon them for assistance. They emerge, bubbling up from the ground, and stand to face your enemies, malevolent and ready for bloodshed. The unholy army occupies the space of a Huge creature. When you Cast this Spell, choose one of the unholy squadrons below to summon.\n• Asuras Speed 40 feet\n• Arrive Dance of Duality A legion of adhukaits arrive on the field, dancing and scurrying in and among your enemy's front line. All enemies in a 10-foot emanation take 10d6 slashing damage (check (reflex, basic, options:area-effect) save) as the adhukaits slash at them with their kukris.\n• Depart Split Remembrance As the adhukaits begin to retreat, they argue about who did the most damage and decide to see which half is stronger. All enemies in a 20-foot emanation take 6d6 bludgeoning damage (check (fortitude, basic, options:area-effect,inflicts:clumsy) save) as they're violently yanked by adhukaits. On a failure, a creature is Clumsy 1 for 1 minute (Clumsy 2 on a critical failure).\n• Daemons Speed 25 feet, fly 40 feet\n• Arrive (disease) Winds of Pestilence Leukodaemons fly into position, their wings beating with the dust of a thousand diseases of a thousand years. Enemies in a 60-foot cone take 8d8 piercing damage (check (fortitude, basic, options:area-effect,inflicts:sickened, traits:disease) save). On a failure, a creature is also Sickened 1 (Sickened 2 on a critical failure).\n• Depart (disease) Remember Me The leukodaemons claw at your enemies with their infected nails. All enemies in a 10-foot emanation take 6d6 slashing damage (check (reflex, basic, options:area-effect,inflicts:drained, traits:disease) save). On a failure, a creature is also Drained 1 (Drained 2 on a critical failure).\n• Demons Speed 25 feet\n• Arrive (fire) Fuming Entrance A legion of brimoraks arrive in clouds of thick black smoke. The army's space and every square in a 20-foot emanation is choked with burning ash and smog, making all creatures outside the smoke Concealed to creatures within it and all creatures within the smoke concealed to creatures outside the smoke and other creatures within it. This smoke lasts for 1 minute, and a creature who enters or begins its turn within the smoke must attempt a check (fortitude, options:area-effect,inflicts:sickened, traits:fire) save or take 2d6 persistent fire damage and become sickened 1 3d6 persistent fire damage and sickened 2 on a critical failure).\n• Depart (fire) Swords of Flame The arson demons swing their flaming swords through your enemies' ranks. All enemies in a 10-foot emanation take 4d8 slashing damage (check (reflex, basic, options:area-effect, traits:fire) save). On a critical failure, a creature also takes 2d8 persistent fire damage.\n• Devils Speed 25 feet\n• Arrive (spirit) Diabolic Infantry A legion of vordines swarm the battlefield. All enemies in a 20-foot emanation take 4d10 piercing damage damage (check (reflex, basic, options:area-effect, traits:spirit) save) as the vordines impale them with their tridents.\n• Depart (nonlethal) Whipped and Tripped The devils' whips lengthen impossibly to flense flesh from soul. Enemies in two non-intersecting 40-foot lines take 6d8 bludgeoning damage (check (reflex, basic, options:area-effect,inflicts:prone,inflicts:immobilized, traits:spirit) save). On a failure, a creature is also knocked Prone. On a critical failure, it's also knocked prone and Immobilized for 1 round.\n• Divs Speed 35 feet\n• Arrive (mental) Deceptive Delight A battalion of sepids arrives to torment your enemies. Enemies in a 60-foot cone take 6d6 mental damage (check (will, basic, options:area-effect,inflicts:confused, traits:mental) save). On a failure, a creature is Confused for 1 round.\n• Depart (spirit) Battle Debris The sepids slam their falchions into the remnants of the chaos of battle, shattering bones, which explode out in a 30-foot emanation. All non-fiends in the area take 8d6 slashing damage damage from debris (check (reflex, basic, options:area-effect, traits:spirit) save).\n• Qlippoths Speed 40 feet, climb 40 feet, fly 40 feet\n• Arrive (visual) Terrifying Scuttle A horde of gongorinans opens their maws to reveal the horror inside. All enemies in a 60-foot cone must succeed at a check (will, options:area-effect,inflicts:sickened,inflicts:blinded, traits:visual) save or be sickened 2 (sickened 2 and Blinded for 1 round on a critical failure).\n• Depart Pincer Assault The gongorinans lash out at everyone. All enemies in a 20-foot emanation take 6d12 slashing damage (check (reflex, basic, options:area-effect) save).\n• Velstracs Speed 25 feet\n• Arrive Chains of Pain A legion of sacristans emerges from the shadows, their barbed chains wrapping around enemy limbs to prevent all escape. Enemies in a 20-foot emanation must attempt a check (reflex, options:area-effect) save. On a failure, they take a –10-foot circumstance penalty to their Speeds and 2d6 persistent bleed damage. On a critical failure they take a –20-foot circumstance penalty to their Speeds and 4d6 persistent bleed damage. This penalty to Speeds lasts until they recover from their persistent bleed damage\n• Depart Pleasant Screams The sacristans rip their chains from their victims, screaming in unison with their pain. Any enemies who failed the initial Reflex save during the sacristans' arrival take 4d8 piercing damage (check (fortitude, basic)). In addition, everyone in a 60-foot cone must attempt a check (will, options:area-effect,inflicts:frightened,inflicts:deafened, traits:auditory,emotion,fear,mental) save. On a failure, they're Frightened 2 and Deafened for 1 minute (Frightened 3 and deafened for 1 minute on a critical failure); this effect has the auditory, emotion, fear, and mental traits.",
      "castingTime": "3 actions",
      "range": "100 feet",
      "target": "",
      "area": null,
      "duration": "until the end of your next turn",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:clockwork-devotion",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "zEAblSSbfu1246JL",
      "slug": "clockwork-devotion",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:44d212df4743f1bdae29911deeff9cd999fdd79689773208d8df354b955d2cf7",
    "translatableHash": "sha256:77fdb89f3218a14a82af5add868801d0327fe77d4fb7528ffe3d2d27fdbb41a5",
    "data": {
      "schemaVersion": 1,
      "name": "Clockwork Devotion",
      "rank": 8,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "incarnate",
        "manipulate"
      ],
      "traditions": [
        "arcane"
      ],
      "description": "You toss a handful of magical cogs before you, summoning a battalion of clockwork soldiers to fight your enemies. The clockwork soldiers occupy the space of a Huge creature and have a Speed of 60 feet.\nArrive Clockwork Assault Clockwork soldiers slash at your enemies with their halberds, dealing 4d10 slashing damage (basic Reflex save) to all enemy creatures in its location or within 15 feet.\nDepart (fire) Ticking Bomb The clockwork soldiers freeze abruptly before exploding into a mass of flying cogs and metal shrapnel, dealing 4d8 slashing damage and 4d8 fire damage in a 30-foot emanation (basic Reflex save). On a critical failure, a creature takes an additional 2d8 persistent fire damage.",
      "castingTime": "3 actions",
      "range": "100 feet",
      "target": "",
      "area": null,
      "duration": "until the end of your next turn",
      "defense": "basic reflex save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:conquering-soldiers",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ion3VOiLan6ga3QC",
      "slug": "conquering-soldiers",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:8571b5287d53ac02d75e342afccb0ca24dd57e0546fba8d0409d391723dce39d",
    "translatableHash": "sha256:2152c4e3429a13a69a41331601816baa103ed15f0dd91006b844bed1f968de7c",
    "data": {
      "schemaVersion": 1,
      "name": "Conquering Soldiers",
      "rank": 10,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "incarnate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "divine"
      ],
      "description": "You tap into the glories of the armies of old, bringing forth their might to your battlefield and making their strength and power your own. This army manifests as glimmering forms of a conquering military of old, replete with banners and colors of their nation. The army occupies the space of a Gargantuan creature and has a Speed of 80 feet.\nArrive (auditory, emotion, fear, mental) Banner's Call The conquering army manifests before you and your allies, letting out a battle cry of victory and devotion. Each enemy within an 80-foot emanation must attempt a Will save.\nCritical Success The creature is unaffected.\nSuccess The creature is Frightened 2.\nFailure The creature takes 6d12 mental damage and is Frightened 3.\nCritical Failure The creature takes 12d12 mental damage, is Frightened 4, and is Fleeing for 1 round.\nDepart (emotion, healing, mental) Trumpets of War As the conquering soldiers begin to fade, their military musicians play one more triumphant song in your honor. You and all allies within 100 feet of the soldiers immediately reduce the value of any Clumsy, Drained, Enfeebled, Frightened, Sickened, and Stupefied conditions by 2 and gain a +2 status bonus to all attacks, saving throws, skill checks, and DCs for 3 rounds.\nSpell Effect: Conquering Soldiers (Depart)",
      "castingTime": "3 actions",
      "range": "500 feet",
      "target": "",
      "area": null,
      "duration": "until the end of your next turn",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:jassims-allegiance",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "JEMSVySuS4jvTepQ",
      "slug": "jassims-allegiance",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:22e7949b18f0f54e2e2b3f55ffe1bab506a47acb86e5cf14361584e169500f5b",
    "translatableHash": "sha256:df79409a094d6f4e485460838a604baa966c74733045a8cc191e14145d96a532",
    "data": {
      "schemaVersion": 1,
      "name": "Jassim's Allegiance",
      "rank": 10,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "incarnate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You bartered for this spell in some strange market or perhaps gained it while wandering the desert, hopelessly lost and surrounded by nothing but the remnants of time and fallen empires. With a gesture and words of a language not spoken since the fall of the Hanging City of Teskra, you summon Jassim the Wanderer. Jassim, a true Jistkan automaton, occupies the space of a Gargantuan creature and has a Speed of 60 feet.\nArrive (fire) Eyes of Fire Jassim emerges from the ground and glares at your enemies, a fearsome look forming on a face of ancient metal and glass. He shoots an energy beam in a 60-foot line, dealing 5d12 fire damage and 5d12 piercing damage (basic Reflex save). Enemies that critically fail are Drained 2.\nDepart (metal) Heart of Rust Jassim takes a metal piece from his chest and holds it out, crushing it in his fist and allowing the powder to spread across a 60-foot emanation. These particles deal 10d6 slashing damage to all creatures and unattended objects within the area (basic Fortitude save). A metal creature that fails its save also takes 2d8 persistent slashing damage. A non-metal creature that fails this save is also Sickened 2.",
      "castingTime": "3 actions",
      "range": "500 feet",
      "target": "",
      "area": null,
      "duration": "until the end of your next turn",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  }
]
