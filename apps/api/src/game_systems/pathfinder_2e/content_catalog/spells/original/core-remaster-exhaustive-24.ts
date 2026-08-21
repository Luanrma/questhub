import type { Pathfinder2eOriginalContentRecord } from '../../records'
import type { Pathfinder2eSpellData } from '../types'

export const PATHFINDER_2E_EXHAUSTIVE_24_SPELL_ORIGINALS: readonly Pathfinder2eOriginalContentRecord<Pathfinder2eSpellData>[] = [
  {
    "contentId": "pf2e:spell:spells-srd:cry-of-destruction",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "0H1ozccQGGFLUwFI",
      "slug": "cry-of-destruction",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:887761ade4224d217cfb6d13b4161f9c436b85304547a6fba9487617d50cb73d",
    "translatableHash": "sha256:ece120d1e9fd102e0e1fe6d2d05f5dc9a72c38a6b220a2d6c431ab40861a157a",
    "data": {
      "schemaVersion": 1,
      "name": "Cry of Destruction",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "focus",
        "manipulate",
        "sonic"
      ],
      "traditions": [],
      "description": "Your voice booms, smashing what's in front of you. Each creature and unattended object in the area takes 1d8 sonic damage. If you already dealt damage to an enemy this turn with a Strike or spell, increase the damage dice from this spell to d12s.\nHeightened 1 The damage increases by 1d8.",
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
      "heightening": "Heightened 1 The damage increases by 1d8."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:untamed-shift",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "0xR9vrt6uDFl0Umo",
      "slug": "untamed-shift",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/wild-morph.webp"
    },
    "sourceHash": "sha256:2d906279e13f4d380ccd84af8bfc006e07451c18f139cd571aa635a648b61ff6",
    "translatableHash": "sha256:63cb682ac702599a5e9d90ceacbd56c467f892ffe2ea2608c03c204f1488c4e6",
    "data": {
      "schemaVersion": 1,
      "name": "Untamed Shift",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "druid",
        "focus",
        "manipulate",
        "morph"
      ],
      "traditions": [],
      "description": "You transform just a part of your body. Choose any one effect that matches an untamed order feat you have.\n• Untamed Form Your hands transform into incredibly sharp claws. Untamed claws are an unarmed attack, have the agile and finesse traits, and and deal 1d6 slashing damage. You can still hold and use items with your hands while they're transformed by this spell, but you must have a hand free to attack with it.\n• Insect Shape Your mouth becomes deadly jaws. Untamed jaws are an unarmed attack that deal 1d8 piercing damage.\n• Elemental Shape You shift your body to be partially composed of elemental matter, granting you resistance 5 to critical hits and precision damage.\n• Plant Shape Your arms become long vines, increasing your reach to 10 feet (or 15 feet with a reach weapon).\n• Soaring Shape You must cast untamed shift using 2 actions for this benefit. You grow wings from your back, gaining a fly Speed of 30 feet.\nHeightened (6th) You can choose up to two effects from the list. Untamed claws leave terrible, ragged wounds that also deal 2d6 persistent bleed damage on a hit, and untamed jaws are envenomed, also dealing 2d6 persistent poison damage on a hit.\nHeightened (10th) You can choose up to three effects from the list. Untamed claws deal 4d6 persistent bleed damage on a hit, and untamed jaws deal 4d6 persistent poison damage on a hit\nSpell Effect: Untamed Shift",
      "castingTime": "1 or 2",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (6th) You can choose up to two effects from the list. Untamed claws leave terrible, ragged wounds that also deal 2d6 persistent bleed damage on a hit, and untamed jaws are envenomed, also dealing 2d6 persistent poison damage on a hit.\nHeightened (10th) You can choose up to three effects from the list. Untamed claws deal 4d6 persistent bleed damage on a hit, and untamed jaws deal 4d6 persistent poison damage on a hit\nSpell Effect: Untamed Shift"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:whispering-quiet",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "1RxPW9I70Nd7wokz",
      "slug": "whispering-quiet",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:4f2cffa8e8575ad964852a683630aa4d2d0fb4217a044b8aa985d84cb4b068ab",
    "translatableHash": "sha256:59283b4494af8080d0cb2c32b49e6da68d1430ac9c70b864a9a475e2fd8d3434",
    "data": {
      "schemaVersion": 1,
      "name": "Whispering Quiet",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "focus",
        "manipulate",
        "sonic"
      ],
      "traditions": [],
      "description": "You suppress sound in an area, preventing anyone from giving away valuable secrets. This doesn't prevent those in the area from talking or Casting a Spell, but no creature more than 5 feet away can hear its voice without succeeding at a Perception check against your spell DC, which might interfere with auditory or linguistic effects as well as communication. Other sounds created in the area are muffled to a similar volume unless that sound is created by an effect with the sonic trait",
      "castingTime": "2 actions",
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
    "contentId": "pf2e:spell:spells-srd:loremasters-etude",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "5Pc55FGGqVpIAJ62",
      "slug": "loremasters-etude",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:0cd52870b7b41a3f5e554a9a72c5dd346985bdddfc2d849a106b0be66c5ef45a",
    "translatableHash": "sha256:68a2a79ddc2f8423dfab54a4d96a546e8f69a20f6c6f4cabee118d7764910ad1",
    "data": {
      "schemaVersion": 1,
      "name": "Loremaster's Etude",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "bard",
        "composition",
        "focus",
        "fortune",
        "manipulate"
      ],
      "traditions": [],
      "description": "Trigger You or an ally within range attempts a skill check to Recall Knowledge\nYou call upon your muse's deep mysteries, granting the target a greater ability to think and recall information. Roll the triggering Recall Knowledge skill check twice and use the higher result.\nSpell Effect: Loremaster's Etude",
      "castingTime": "free",
      "range": "30 feet",
      "target": "you or the triggering ally",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:untamed-form",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "8RWfKConLYFZpQ9X",
      "slug": "untamed-form",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:ec8faa3acf25dbc46424f1bfa4293f8212cc0877ba145e697f2eef4b7abf04b3",
    "translatableHash": "sha256:7c2ec9c440aa02414f9da7f40072b2904ee270808364cb4e3266dae76c86ac41",
    "data": {
      "schemaVersion": 1,
      "name": "Untamed Form",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "druid",
        "focus",
        "manipulate",
        "polymorph"
      ],
      "traditions": [],
      "description": "You reach within for a different part of yourself, and you set it free, transforming your body into another form. You can polymorph into any form listed in Pest Form, which lasts 10 minutes. All other untamed form shapes last 1 minute. You can add more shapes to your untamed form list with druid feats; your feat might grant you some or all of the shapes from a given polymorph spell.\nWhen you transform into a shape granted by a spell, you gain all the effects of the shape you chose from a version of the spell heightened to untamed form's rank. Untamed form allows you to use your own shapeshifting training more easily than most polymorph spells. When you choose to use your own attack modifier while polymorphed instead of the form's default attack modifier, you gain a +2 status bonus to your attack rolls.\nSpell Effect: Untamed Form\nHeightened (2nd) You can transform into shapes listed in Animal Form.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "varies",
      "defense": null,
      "damage": [],
      "heightening": "heightened to untamed form's rank. Untamed form allows you to use your own shapeshifting training more easily than most polymorph spells. When you choose to use your own attack modifier while polymorphed instead of the form's default attack modifier, you gain a +2 status bonus to your attack rolls.\nSpell Effect: Untamed Form\nHeightened (2nd) You can transform into shapes listed in Animal Form."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:needle-of-vengeance",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "aEitTTb9PnOyidRf",
      "slug": "needle-of-vengeance",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/needle-of-vengeance.webp"
    },
    "sourceHash": "sha256:915dc381705c971a498bfa1bdc593bda9c078283329459bb3e3295c5ce90ad5b",
    "translatableHash": "sha256:00ad736a1e9a1c3f99e9d43af8727e529e6f3f7bde35f9cfde9704113918a536",
    "data": {
      "schemaVersion": 1,
      "name": "Needle of Vengeance",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "focus",
        "hex",
        "manipulate",
        "mental",
        "witch"
      ],
      "traditions": [],
      "description": "A long, jagged needle jabs into the target foe's psyche whenever it tries to attack a creature your patron holds in special regard. Name yourself or one of your allies. The target takes 2 mental damage any time it uses a hostile action against the named creature, with a basic Will save.\nHeightened 1 Increase the damage by 2.",
      "castingTime": "1 action",
      "range": "30 feet",
      "target": "1 enemy",
      "area": null,
      "duration": "1 minute",
      "defense": "basic will save",
      "damage": [
        {
          "formula": "2",
          "type": "mental",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 Increase the damage by 2."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:word-of-truth",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "aF7RiG7c8GzSQLYt",
      "slug": "word-of-truth",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:f994006a5e9cf776459499d36550e30f8a5e894a378a3737845562f85961df71",
    "translatableHash": "sha256:579038e57c1629ee7574d122277b8f187fd36fc14d4a9643258a463563cfc24a",
    "data": {
      "schemaVersion": 1,
      "name": "Word of Truth",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "focus"
      ],
      "traditions": [],
      "description": "You speak a statement you believe to be true and that is free of any attempt to deceive through twisting words, omission, and so on. The statement must be 25 words or fewer. A symbol of your deity glows above your head and lasts for the spell's duration, and anyone who sees you and hears you speak knows that you believe what you say is true. This assurance of honesty grants you a +2 status bonus to Diplomacy checks as long as the symbol persists. You can Dismiss the spell, and if you say something that you don't believe is entirely true, the spell ends before you complete your statement.\nSpell Effect: Word of Truth",
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
    "contentId": "pf2e:spell:spells-srd:patrons-puppet",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "aq1yonHeYpbaj3XI",
      "slug": "patrons-puppet",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:e5e6e16f41697e9af77976f6ae0fb82365fc979fd41362ba8eaf28a731d8290e",
    "translatableHash": "sha256:c3b339de395d459bd257fa6d1588b459a3a693e7c0225d9a53806b24418bc68b",
    "data": {
      "schemaVersion": 1,
      "name": "Patron's Puppet",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "focus",
        "hex",
        "witch"
      ],
      "traditions": [],
      "description": "Trigger Your turn begins.\nAt your unspoken plea, your patron temporarily assumes control over your familiar. You Command your familiar, allowing it to take its normal actions this turn. Your Command does not have the auditory or concentrate traits; your patron simply moves its agent directly.",
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
    "contentId": "pf2e:spell:spells-srd:sweet-dream",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "BRtKFk0PKfWIlCAB",
      "slug": "sweet-dream",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/sweet-dream.webp"
    },
    "sourceHash": "sha256:6c1e2efce5d708376a45fc965a11d5280d3f128cec2b2f5741ed591629408537",
    "translatableHash": "sha256:8d87db9a7e1b6d0b41d8b5d8d515e0f026149219fe0e65401e655325ddba5870",
    "data": {
      "schemaVersion": 1,
      "name": "Sweet Dream",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "auditory",
        "cleric",
        "concentrate",
        "focus",
        "linguistic",
        "manipulate",
        "mental",
        "sleep"
      ],
      "traditions": [],
      "description": "With your soothing words, you lull the target into an enchanting dream. When you Cast the Spell, the target falls Unconscious if it wasn't already. While unconscious, it experiences a dream of your choice, though lucidly enough it can wake when it pleases. If it wakes up before 1 minute of sleep has passed, the spell ends.\n• Dream of Insight +1 status bonus to Intelligence-based skill checks\n• Dream of Glamor +1 status bonus to Charisma-based skill checks\n• Dream of Voyaging +5-foot status bonus to Speed\nIf you Cast this Spell again, any previous sweet dream you cast ends.\nSpell Effect: Sweet Dream\nHeightened (4th) The bonus for a dream of insight or glamor is +2.\nHeightened (7th) The bonus for a dream of insight or glamor is +3.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 willing creature",
      "area": null,
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) The bonus for a dream of insight or glamor is +2.\nHeightened (7th) The bonus for a dream of insight or glamor is +3."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:hand-of-the-apprentice",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "bSDTWUIvgXkBaEv8",
      "slug": "hand-of-the-apprentice",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/hand-of-the-apprentice.webp"
    },
    "sourceHash": "sha256:9c3687d93ab3fd57c760de23b9500c018f3f8aef47092a6cc27e69a8b020abf7",
    "translatableHash": "sha256:d2449770df7269f9d27524f0ec9c7fd3157d33fa89cf666788a9ddedabaa2f4c",
    "data": {
      "schemaVersion": 1,
      "name": "Hand of the Apprentice",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "attack",
        "focus",
        "manipulate",
        "wizard"
      ],
      "traditions": [],
      "description": "You take advantage of one of the most fundamental lessons of magic to levitate and propel your weapon. You hurl a held melee weapon with which you are trained at the target, making a spell attack roll. On a success, you deal the weapon's damage as if you had hit with a melee Strike, but adding your spellcasting ability modifier to damage, rather than your Strength modifier. On a critical success, you deal double damage, and you add the weapon's critical specialization effect. Regardless of the outcome, the weapon flies back to you and returns to your hand.\nSpell Effect: Hand of the Apprentice",
      "castingTime": "1 action",
      "range": "500 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:perfected-mind",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "cDFAQN7Z3es07WSA",
      "slug": "perfected-mind",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/perfected-mind.webp"
    },
    "sourceHash": "sha256:971a1c68fd881e402b426144a6b077fab272ea12d2ff39c03a275533f482e8f2",
    "translatableHash": "sha256:75381f3f7dcf17a74b80e524753e8424338af609720286f02ce5fe06c06b8870",
    "data": {
      "schemaVersion": 1,
      "name": "Perfected Mind",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "focus"
      ],
      "traditions": [],
      "description": "You meditate upon perfection to remove all distractions from your mind. Attempt a new Will save against one mental effect currently affecting you that required a Will save. Use the result of this new save to determine the outcome of the mental effect, unless the new save would have a worse result than the original save, in which case nothing happens. You can use perfected mind against a given effect only once.",
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
    "contentId": "pf2e:spell:spells-srd:shroud-of-night",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "cE7PRAX8Up7fmYef",
      "slug": "shroud-of-night",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/shroud-of-night.webp"
    },
    "sourceHash": "sha256:36ae86aff939ec3b8e05963a347e4716152fa76e569be5ecbcd314740519b60e",
    "translatableHash": "sha256:6bb49f2d0e684a006baf8d596fc04a123bac213240ed41d31dec6c5c7a4fe80f",
    "data": {
      "schemaVersion": 1,
      "name": "Shroud of Night",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cantrip",
        "darkness",
        "hex",
        "manipulate",
        "witch"
      ],
      "traditions": [],
      "description": "Your patron blankets the target's eyes in darkness. If you cast this hex on a willing ally (for instance, one with light blindness), the ally can choose which result it gets without rolling.\nSuccess The target is unaffected.\nFailure The target is shrouded in murky darkness. It treats bright light as dim light, and unless it has greater darkvision, all creatures are Concealed to it.",
      "castingTime": "1 action",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:agile-feet",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "cOjlzWerBwbPWVkX",
      "slug": "agile-feet",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/agile-feet.webp"
    },
    "sourceHash": "sha256:f30bbc836e299756df7669e9a421c1b881b4aae41c07029ae09c8b97148abd7e",
    "translatableHash": "sha256:aa3dd4f55a07eeb0fe0b0bfef2d09b36839b4c1c8c1fd6b1a767489b56bddfad",
    "data": {
      "schemaVersion": 1,
      "name": "Agile Feet",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "The blessings of your god make your feet faster and your movements more fluid. You gain a +5-foot status bonus to your Speed and ignore difficult terrain. As part of casting agile feet, you can Stride, Step, or Tumble Through; you can instead Burrow, Climb, Fly, or Swim if you have the appropriate Speed.\nSpell Effect: Agile Feet",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": null,
      "duration": "until the end of the current turn",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:blood-ward",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "dFejDNEmVj3CwYLL",
      "slug": "blood-ward",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:713bcfd280a2f2fb7976f87c57f37acfc5933d1cd700a79182d4ec96ec8cf388",
    "translatableHash": "sha256:daf75b1569b79ce2c0e50f865e0f8a34fb8bd29fe83b7b2fb83212e496cc3c5e",
    "data": {
      "schemaVersion": 1,
      "name": "Blood Ward",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "focus",
        "hex",
        "manipulate",
        "witch"
      ],
      "traditions": [],
      "description": "Your patron's aegis descends to shield a target from harm. Designate one of the following creature traits: aberration, animal, beast, celestial, construct, dragon, elemental, fey, fiend, fungus, monitor, ooze, plant, or undead. The target gains a +1 status bonus to its saving throws and AC against creatures with that trait.\nHeightened (5th) The status bonus increases to +2.\nSpell Effect: Blood Ward",
      "castingTime": "1 action",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (5th) The status bonus increases to +2.\nSpell Effect: Blood Ward"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:ignite-ambition",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Dj44lViYKvOJ8a53",
      "slug": "ignite-ambition",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/blind-ambition.webp"
    },
    "sourceHash": "sha256:4be667c5d8b013dcc5b6e27ea1afd1b5035486783bfe49917f25b071aa2fc6d6",
    "translatableHash": "sha256:aa0cb464c46bc8a1ca74556c49d65ed0e588d2f4e1faab98df6bea5d842de48f",
    "data": {
      "schemaVersion": 1,
      "name": "Ignite Ambition",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "emotion",
        "focus",
        "mental",
        "subtle"
      ],
      "traditions": [],
      "description": "Trigger You or an ally in range attempt to use a mental effect to convince a creature to do something (such as a Coerce, Request, or a Suggestion spell).\nYou strengthen a target's ambition, increase its resentment of allies, and make its allegiances more susceptible to change. The target must attempt a Will save.\nCritical Success The target is unaffected and realized you attempted to influence its reaction with magic.\nSuccess The target takes a -1 status penalty to its defenses against the triggering effect. This penalty is -2 if the target is being encouraged to advance its own ambitions.The target doesn't realize you Cast the Spell on it.\nFailure As success, but the penalty is -4 if the target is being encouraged to advance its own ambitions.\nCritical Failure As success, but the creature automatically follows a suggestion that advances its own ambitions.",
      "castingTime": "reaction",
      "range": "60 feet",
      "target": "one creature being influenced",
      "area": null,
      "duration": "",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:waking-nightmare",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "DU5daB09xwfE1y38",
      "slug": "waking-nightmare",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:339004394b8d10c35c8de52c13422a279f431dda318d35284c88349092b0aeaa",
    "translatableHash": "sha256:d6a101764ee16fca46b627addfa50f8281dc8db1c555eaf67837591ed995617b",
    "data": {
      "schemaVersion": 1,
      "name": "Waking Nightmare",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "emotion",
        "fear",
        "focus",
        "manipulate",
        "mental"
      ],
      "traditions": [],
      "description": "You fill the creature's mind with a terrifying vision. The target must attempt a Will save. A creature frightened by this spell takes 1 additional mental damage each time it's hit by a Strike.\nCritical Success The target is unaffected.\nSuccess The target is Frightened 1.\nFailure The target is Frightened 2. If it's asleep, it wakes up and is Paralyzed for 1 round.\nCritical Failure As failure, but Frightened 3.\nHeightened 1 The mental damage increases by 1.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "varies",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened 1 The mental damage increases by 1."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:scholarly-recollection",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "dXIRotMLsABDQQSB",
      "slug": "scholarly-recollection",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:46ec98140eeed86505bb48eccb8c8b143d067a0f0ee0ce736c0bf14da0f011f7",
    "translatableHash": "sha256:30170f9ebcc2ffd791573af39b2ff95bbbd46ee877ee7ba46333e44d18600f2b",
    "data": {
      "schemaVersion": 1,
      "name": "Scholarly Recollection",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "focus",
        "fortune"
      ],
      "traditions": [],
      "description": "Trigger You attempt a Perception check to Seek, or you attempt a skill check to Recall Knowledge with a skill you're trained in.\nSpeaking a short prayer as you gather your thoughts, you're blessed to find yourself pointed in the right direction. The GM rolls the triggering check twice and uses the better result.\nSpell Effect: Scholarly Recollection",
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
    "contentId": "pf2e:spell:spells-srd:uplifting-overture",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "f0Z5mqGA6Yu79B8x",
      "slug": "uplifting-overture",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/inspire-competence.webp"
    },
    "sourceHash": "sha256:a8f1f8b8465cde371ae841c356596e6d6e7a33c96f1187198c139e7db6461293",
    "translatableHash": "sha256:74ab1866cf218c0cb6203b6d43e1fe175c84645755406837df156bf2f9262982",
    "data": {
      "schemaVersion": 1,
      "name": "Uplifting Overture",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "bard",
        "cantrip",
        "composition",
        "concentrate",
        "emotion",
        "mental"
      ],
      "traditions": [],
      "description": "Your performance makes allies feel they can succeed at anything. This counts as having prepared to Aid your ally on a skill check of your choice. When you later use the Aid reaction, you can roll Performance instead of the normal skill check, and if you roll a failure, you get a success instead. If you are legendary in Performance, you automatically critically succeed.\nThe GM might rule that you can't use this ability if the act of encouraging your ally would interfere with the skill check (such as a check to Sneak quietly or maintain a disguise).\nSpell Effect: Uplifting Overture",
      "castingTime": "1 action",
      "range": "60 feet",
      "target": "1 ally",
      "area": null,
      "duration": "1 round",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:evil-eye",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "f45JpY7Ph2cAJGW2",
      "slug": "evil-eye",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:5fc621cf2f7369c06fddab7e4d7e25f096544360ff9bd8cedf2e772d4be0a307",
    "translatableHash": "sha256:43484ce0cfe8d0315c9f7996de32ed38cfa1e063186e10b4e9ce7c48b95f85c0",
    "data": {
      "schemaVersion": 1,
      "name": "Evil Eye",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cantrip",
        "curse",
        "hex",
        "manipulate",
        "witch"
      ],
      "traditions": [],
      "description": "Your patron's resentment manifests in a baleful, envious gaze. The target becomes Sickened 1 if it fails a Will save (or sickened 2 on a critical failure). This condition value can't be reduced below 1 while the spell is active and you can see the target.",
      "castingTime": "1 action",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:elemental-betrayal",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "f9uqHnNBMU0774SF",
      "slug": "elemental-betrayal",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:efc964b637e483fe87b5502250a46e6eaabb2868409023dd35e354e6707c5e79",
    "translatableHash": "sha256:12bd54d9e90d0563560ab7f5a5d512c31b0db7821bbd4d7d60581d0d2b3d2a28",
    "data": {
      "schemaVersion": 1,
      "name": "Elemental Betrayal",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "hex",
        "witch"
      ],
      "traditions": [],
      "description": "Your patron uses its superior command of the elements, empowering them to undermine your foe. When you Cast this Spell, choose air, earth, metal, fire, water, or wood. The target gains weakness 2 to that trait.\nSpell Effect: Elemental Betrayal\nHeightened 2 Increase the weakness by 1.",
      "castingTime": "1 action",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 2 Increase the weakness by 1."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:life-boost",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "fAlzXtQAASaJx0mY",
      "slug": "life-boost",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/life-boost.webp"
    },
    "sourceHash": "sha256:1941d11e890f686e4f320d2f3572967648097ccf04715250d0b5efdb9fbab0b8",
    "translatableHash": "sha256:55742fe215e721b97f7ce8e1871702f332deacd7b5e5b140a68509f331fbc2e9",
    "data": {
      "schemaVersion": 1,
      "name": "Life Boost",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "focus",
        "healing",
        "hex",
        "manipulate",
        "vitality",
        "witch"
      ],
      "traditions": [],
      "description": "Life force from your patron floods into the target, ensuring they can continue doing your patron's will for just a little longer. The target gains fast healing 2.\nSpell Effect: Life Boost\nHeightened 1 The fast healing increases by 2.",
      "castingTime": "1 action",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "4 rounds",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 The fast healing increases by 2."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:earthworks",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ffz6wlSMzhaDpjg6",
      "slug": "earthworks",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:960169f4a35bd4a2138595e2e70e509890f8e1b070042a9ed085dbadc0f7ba5c",
    "translatableHash": "sha256:72856f6da486fed4d386d9d738ff9d28033d16054b6df850310bdd983745a176",
    "data": {
      "schemaVersion": 1,
      "name": "Earthworks",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "earth",
        "focus",
        "manipulate",
        "wizard"
      ],
      "traditions": [],
      "description": "With a ripple of earth, you raise small barriers from the ground. The ground in the area becomes difficult terrain. The spell's area is a 5-foot burst if you spent 1 action to cast it, a 10-foot burst if you spent 2 actions, or a 15-foot burst if you spent 3 actions. A creature can Interact to clear the barriers from one 5-foot square adjacent to it.\nHeightened (4th) You pull the barriers to float in the air, causing the spell to function as difficult terrain for flying creatures",
      "castingTime": "1 to 3 actions",
      "range": "60 feet",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) You pull the barriers to float in the air, causing the spell to function as difficult terrain for flying creatures"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:bit-of-luck",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Fr2CGvWcgSyLcUi7",
      "slug": "bit-of-luck",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:fdd16e79497075f88c9966559a3c473b2d7cc0725561c759eb4c625d3df07f14",
    "translatableHash": "sha256:5915eb3bce086bd9bdc31d4bfd8619657cf300f6700bebef1ba4da2d809c8c14",
    "data": {
      "schemaVersion": 1,
      "name": "Bit of Luck",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "focus",
        "fortune",
        "manipulate"
      ],
      "traditions": [],
      "description": "You tilt the scales of luck slightly to protect a creature from disaster. When the target would attempt a saving throw, it can roll twice and use the better result. Once it does this, the spell ends.\nIf you cast bit of luck again, any previous bit of luck you cast that's still in effect ends. After a creature has been targeted with bit of luck, it becomes temporarily immune for 24 hours.\nSpell Effect: Bit of Luck",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 willing creature",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:nudge-fate",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "G0T1xv1FoZ23Jxvt",
      "slug": "nudge-fate",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/nudge-fate.webp"
    },
    "sourceHash": "sha256:8a6f2d5548df4a6493cfcdeccb445684dfd6b55af0b1968fb94ab820a9510de0",
    "translatableHash": "sha256:f3ff84b89f9f8923fbc6005f43d6369b00f5d659831c0633c81d9e5b7948393a",
    "data": {
      "schemaVersion": 1,
      "name": "Nudge Fate",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cantrip",
        "concentrate",
        "hex",
        "witch"
      ],
      "traditions": [],
      "description": "The barest spin of your patron's spool is enough to alter fate. When the target fails an attack roll, skill check, or saving throw and a +1 status bonus would turn a critical failure into a failure, or failure into a success, you grant the target a +1 status bonus to the check retroactively, changing the outcome appropriately. The spell then ends.\nIf you cast nudge fate while a previous casting of this hex is still in effect, the previous effect ends",
      "castingTime": "1 action",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:wilding-word",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "GdN5YQE47gd79k7X",
      "slug": "wilding-word",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:237158047e46416b9926a009d79181024b6035d0ea58cb63effc7c7cadccdd20",
    "translatableHash": "sha256:22f96cbfa42bd30aa467188c048546002703268d6fc444ee98ef64dbf52e891e",
    "data": {
      "schemaVersion": 1,
      "name": "Wilding Word",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cantrip",
        "hex",
        "mental",
        "witch"
      ],
      "traditions": [],
      "description": "Your patron's majesty—or their displeasure—comes in a growl from your throat, making other creatures reluctant to harm you. The target must attempt a Will save; if the creature is an animal, fungus, or plant, it takes a –1 circumstance penalty to its save.\nCritical Success The target is unaffected.\nSuccess When the target attempts an attack roll or skill check that would harm you, it takes a -2 status penalty to its roll.\nFailure As success, but the target also becomes Sickened 1 each time it damages you.\nCritical Failure As failure, but the sickened value is 2.",
      "castingTime": "1 action",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:stoke-the-heart",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "GeUbPvwdZ4B4l0up",
      "slug": "stoke-the-heart",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:4cd8bb8a327670ca58aea7cf6f067c7f5ace9f9d2772f6ccc372b150e2f47d20",
    "translatableHash": "sha256:65601876c26fb9e301b37ac012023bd59028fdb5db7a8e0fea7c8277adbc0d67",
    "data": {
      "schemaVersion": 1,
      "name": "Stoke the Heart",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cantrip",
        "concentrate",
        "emotion",
        "hex",
        "witch"
      ],
      "traditions": [],
      "description": "Your patron fills a creature with fervor, empowering their blows. The target gains a +2 status bonus to damage rolls.\nHeightened 2 The status bonus to damage increases by 1.\nSpell Effect: Stoke the Heart",
      "castingTime": "1 action",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 2 The status bonus to damage increases by 1.\nSpell Effect: Stoke the Heart"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:hymn-of-healing",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "gSUQlTDYoLDGAsCP",
      "slug": "hymn-of-healing",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:b9eb6f961753c4d13b604a2e75cf51ebd4e071424ff7ca90d0eef4aa2756722b",
    "translatableHash": "sha256:89c0fb17e766246fd09f9819c4110e20a459afa6f6a9cc111fa5ed640a3e1dea",
    "data": {
      "schemaVersion": 1,
      "name": "Hymn of Healing",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "bard",
        "composition",
        "concentrate",
        "focus",
        "healing",
        "vitality"
      ],
      "traditions": [],
      "description": "Your glorious singing mends wounds and provides a temporary respite from harm. The target gains fast healing 2. When you Cast the Spell and the first time each round you Sustain the Spell, the target gains 2 temporary Hit Points, which last for 1 round.\nSpell Effect: Hymn of Healing\nHeightened 1 The fast healing and temporary Hit Points each increase by 2.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "you or 1 ally",
      "area": null,
      "duration": "4 rounds",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 The fast healing and temporary Hit Points each increase by 2."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:unimpeded-stride",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "gwOYh5zMVZB0HNcT",
      "slug": "unimpeded-stride",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:e63960f6d2b0de2aef6d060e8461d0aac140b225e4825f70902b7b8abfdc38ef",
    "translatableHash": "sha256:ed35d0831edeffdab5b889b8f06b7e311a9241b73df1377928917a3d41ab04fd",
    "data": {
      "schemaVersion": 1,
      "name": "Unimpeded Stride",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "Divine grace ensure that nothing can keep you prisoner or hold you back. You immediately escape from every magical effect that has you Immobilized or Grabbed unless the effect is of a higher rank than your unimpeded stride spell. You then Stride. During this movement, you ignore difficult terrain and any circumstance or status penalties to your Speed.\nSpell Effect: Unimpeded Stride",
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
    "contentId": "pf2e:spell:spells-srd:touch-of-undeath",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "GYI4xloAgkm6tTrT",
      "slug": "touch-of-undeath",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/touch-of-undeath.webp"
    },
    "sourceHash": "sha256:bb5e5756efbf84fe806ff54ba2ed32e365bee50bbc571a1b607d31dce77e8658",
    "translatableHash": "sha256:a00ec056d412860e4a3dff8e4afd706af5b5df952ae83dcd2bb4e4558ed1c2d3",
    "data": {
      "schemaVersion": 1,
      "name": "Touch of Undeath",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "focus",
        "manipulate",
        "void"
      ],
      "traditions": [],
      "description": "You attack the target's life force with undeath, dealing 1d6 void damage. The target must attempt a Fortitude save.\nCritical Success The target is unaffected.\nSuccess The target takes half damage.\nFailure The target takes full damage, and vitality effects heal it only half as much as normal for 1 round.\nCritical Failure The target takes double damage, and vitality effects heal it only half as much as normal for 1 minute.\nHeightened 1 The damage increases by 1d6.",
      "castingTime": "1 action",
      "range": "touch",
      "target": "1 living creature",
      "area": null,
      "duration": "",
      "defense": "fortitude save",
      "damage": [
        {
          "formula": "1d6",
          "type": "void",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:deaths-call",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "HG4afO9EOGEU9bZN",
      "slug": "deaths-call",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:698d313aa06ff41a899757c7a34af03fb63ab1bc75585de43ae3b161c240f54c",
    "translatableHash": "sha256:5a8c970a769031a9bdafec599369b2afb7a7e884f915fd6a8c2c7acb710b912e",
    "data": {
      "schemaVersion": 1,
      "name": "Death's Call",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "focus"
      ],
      "traditions": [],
      "description": "Trigger A living creature within 20 feet of you dies, or an undead creature within 20 feet of you is destroyed.\nSeeing another pass from this world invigorates you. You gain temporary Hit Points equal to the triggering creature's level plus your spellcasting attribute modifier. If the triggering creature was undead, double the number of temporary Hit Points you gain. These last for the duration of the spell, and the spell ends if all the temporary Hit Points are depleted earlier.",
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
    "contentId": "pf2e:spell:spells-srd:tempest-surge",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ho1jSoYKrHUNnM90",
      "slug": "tempest-surge",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:221eebf2e3fe0cbfe96af55db833f6cc3acda414f901a6169b26ce2e3f0f0416",
    "translatableHash": "sha256:c5cc29b527957978e131fbbe79fad0e80f581d3bf56ddacb247425c2e658e6c8",
    "data": {
      "schemaVersion": 1,
      "name": "Tempest Surge",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "air",
        "concentrate",
        "druid",
        "electricity",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "You surround a foe in a swirling storm of violent winds, roiling clouds, and crackling lightning. The storm deals 1d12 electricity damage to the target with a basic Reflex save. On a failure, the target also is Clumsy 2 for 1 round.\nHeightened 1 The initial damage increases by 1d12.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "1d12",
          "type": "electricity",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The initial damage increases by 1d12."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:force-bolt",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Hu38hoAUSYeFpkVa",
      "slug": "force-bolt",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/force-bolt.webp"
    },
    "sourceHash": "sha256:de0a20d608e4386e8efb56e36c067a2f218db161074152d81d889479215a0779",
    "translatableHash": "sha256:937d8dc1f8498175a241515808b63ecb3b215ea8974e6af84c9a96b4b06d93a5",
    "data": {
      "schemaVersion": 1,
      "name": "Force Bolt",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "focus",
        "force",
        "manipulate",
        "wizard"
      ],
      "traditions": [],
      "description": "You fire an arrow-shaped bolt of force, one of the most common and reliable forms of battle magic. It automatically hits and deals 1d4+1 force damage to the target.\nHeightened 2 The damage increases by 1d4+1.",
      "castingTime": "1 action",
      "range": "30 feet",
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
    "contentId": "pf2e:spell:spells-srd:courageous-anthem",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "IAjvwqgiDr3qGYxY",
      "slug": "courageous-anthem",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/inspire-courage.webp"
    },
    "sourceHash": "sha256:07f09e9f21c59232b67a693f51adc4ed5171d9250c453b47519ea18cd4f8d7ea",
    "translatableHash": "sha256:76ef578b21b905c1daa1a86c414c1aea861c579882a8ce6b2c55b24add5ff3f8",
    "data": {
      "schemaVersion": 1,
      "name": "Courageous Anthem",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "bard",
        "cantrip",
        "composition",
        "concentrate",
        "emotion",
        "mental"
      ],
      "traditions": [],
      "description": "You inspire yourself and your allies with words or tunes of encouragement. You and all allies in the area gain a +1 status bonus to attack rolls, damage rolls, and saves against fear effects.\nSpell Effect: Courageous Anthem",
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
    "contentId": "pf2e:spell:spells-srd:tidal-surge",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "iAnpxrLaBU4V6Sej",
      "slug": "tidal-surge",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/tidal-surge.webp"
    },
    "sourceHash": "sha256:b4b24048179996a7b46ed281db1d60ee965794cfa8b34fbd384b68301c50225f",
    "translatableHash": "sha256:a31045056e56d077d91a9c789f5201294cede54d5a6d225a233bfb4d45449d0a",
    "data": {
      "schemaVersion": 1,
      "name": "Tidal Surge",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "focus",
        "manipulate",
        "water"
      ],
      "traditions": [],
      "description": "You call forth a tremendous wave to move the target either in a body of water or on the ground. You move the target up to 10 feet in any direction along the ground or 20 feet through a body of water. An unwilling target can attempt a Fortitude save, and it avoids being moved if it succeeds.",
      "castingTime": "1 action",
      "range": "60 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": "fortitude save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:lingering-composition",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "irTdhxTixU9u9YUm",
      "slug": "lingering-composition",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/lingering-composition.webp"
    },
    "sourceHash": "sha256:4750c2639f35b77124e857936955b139d81f6e2b16c20a6642a303961239e76d",
    "translatableHash": "sha256:c6239e98c5c859d7f5c97012fccd6a930942f2b9ec2b9ef1cea1225424c1822d",
    "data": {
      "schemaVersion": 1,
      "name": "Lingering Composition",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "bard",
        "concentrate",
        "focus",
        "spellshape"
      ],
      "traditions": [],
      "description": "You add a flourish to your composition to extend its benefits. If your next action is to cast a cantrip composition with a duration of 1 round, attempt a check (performance) check. The DC is usually a standard-difficulty DC of a level equal to the highest-level target of your composition, but the GM can assign a different DC based on the circumstances. The effect depends on the result of your check.\nCritical Success The composition lasts 4 rounds.\nSuccess The composition lasts 3 rounds.\nFailure The composition lasts 1 round, but you don't spend the Focus Point for casting this spell.",
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
    "contentId": "pf2e:spell:spells-srd:gravity-weapon",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "IWUe32Y5k2QFd7YQ",
      "slug": "gravity-weapon",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:9385dd80541e7884614e960756a7abddd6c1902952c6549fbadecfdaa3d3afff",
    "translatableHash": "sha256:e94642c4fd0ecf29c924dd0ad242a2b88c063fff3836db439e90719b2b24e029",
    "data": {
      "schemaVersion": 1,
      "name": "Gravity Weapon",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "focus",
        "ranger"
      ],
      "traditions": [],
      "description": "You build up gravitational force and funnel it into your blows, leading to more powerful attacks with blade and bow alike. On your first weapon Strike each round, you gain a status bonus to damage equal to twice the number of weapon damage dice.\nSpell Effect: Gravity Weapon",
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
    "contentId": "pf2e:spell:spells-srd:heal-companion",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "KIV2LqzS5KtqOItV",
      "slug": "heal-companion",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:e6add1b3b8410fe990b7c96cd909a1425f075b49f466b94d56c85eef22a4c71d",
    "translatableHash": "sha256:78aca0c6111b90dd2e0d496a86c461d1cd80a2aedc45ea70aaf78304ba9d6331",
    "data": {
      "schemaVersion": 1,
      "name": "Heal Companion",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "focus",
        "healing",
        "ranger",
        "vitality"
      ],
      "traditions": [],
      "description": "You heal your animal companion's wounds. You restore 1d10 Hit Points to your animal companion. The number of actions you spend Casting this Spell determines range and other parameters.\n1 (manipulate) The spell has a range of touch.\n2 (concentrate, manipulate) The spell has a range of 30 feet and restores an additional 8 Hit Points to the target.\nHeightened 1 The amount of healing increases by 1d10, and the additional healing for the 2-action version increases by 8.",
      "castingTime": "1 or 2",
      "range": "touch or 30 feet",
      "target": "your animal companion",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [
        {
          "formula": "1d10",
          "type": "untyped",
          "kind": "healing"
        }
      ],
      "heightening": "Heightened 1 The amount of healing increases by 1d10, and the additional healing for the 2-action version increases by 8."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:charming-push",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "KMFRKzNCq7hVNH7H",
      "slug": "charming-push",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:3b9ed56a3f8de84b3ebf6addfde1259190bd67f4f49f5013723e73c90210ef19",
    "translatableHash": "sha256:af08db4c8a00f1dca9fd0c4b86735485d630a32285060b35f309011fbf82a856",
    "data": {
      "schemaVersion": 1,
      "name": "Charming Push",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "incapacitation",
        "mental",
        "wizard"
      ],
      "traditions": [],
      "description": "You push at the target's mind to deflect their ire. The target must attempt a Will save.\nCritical Success The target is unaffected.\nSuccess The target takes a –1 circumstance penalty to attack rolls and damage rolls against you.\nSpell Effect: Charming Push\nFailure The target can't use hostile actions against you.\nCritical Failure The target is Stunned 1 and can't use hostile actions against you.",
      "castingTime": "1 action",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "until the start of your next turn",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:protective-wards",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "lY9fOk1qBDDhBT8s",
      "slug": "protective-wards",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/protective-ward.webp"
    },
    "sourceHash": "sha256:db82fdb211ad151ae737acbc9ce2be7c767ca6463f068448114b238205638632",
    "translatableHash": "sha256:43d32ba196e67aec6eeee67a5ca4e7b4c7361275076ff6ebbc67ef4515dbd3da",
    "data": {
      "schemaVersion": 1,
      "name": "Protective Wards",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "aura",
        "focus",
        "manipulate",
        "wizard"
      ],
      "traditions": [],
      "description": "You expand a ring of glyphs that shields your allies. You and any allies in the area gain a +1 status bonus to AC. Each time you Sustain the spell, the emanation's radius increases by 5 feet, to a maximum of 30 feet.\nAura: Protective Wards",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": "5 emanation",
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:overstuff",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "mFHQ2u4LWiejqKQG",
      "slug": "overstuff",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:03c236ae0368182217bf389536c1eecc4bfb6a49de0c42c75819182552836b00",
    "translatableHash": "sha256:34c7f819fd6d30cfde5407b73593d446ceceb41a30b37ed3b7924de8fcdf3a3e",
    "data": {
      "schemaVersion": 1,
      "name": "Overstuff",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "Huge amounts of food and drink fill the target. It receives a full meal's worth of nourishment and must attempt a Fortitude save. A target sickened by this spell takes a –10-foot status penalty to its Speed until it's no longer sickened.\nCritical Success The target is unaffected.\nSuccess The target is Sickened 1, but if it spends an action to end the condition, it succeeds automatically.\nFailure The target is sickened 1.\nCritical Failure The target is Sickened 2.\nSpell Effect: Overstuff",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 living creature",
      "area": null,
      "duration": "",
      "defense": "fortitude save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:touch-of-obedience",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "MmQiEc7aM9PDLO2J",
      "slug": "touch-of-obedience",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/touch-of-obedience.webp"
    },
    "sourceHash": "sha256:318584074b481a4472fc27d36702057b7bb5155fc76db14b8259bd6d9a23e480",
    "translatableHash": "sha256:2ce21dddbf3048a505e1056f75e1a3633d0d7e04d7679f51279e6180261b2031",
    "data": {
      "schemaVersion": 1,
      "name": "Touch of Obedience",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "focus",
        "manipulate",
        "mental"
      ],
      "traditions": [],
      "description": "Your imperious touch erodes the target's willpower, making it easier to control. The target attempts a Will save. Regardless of the result, it's then temporarily immune for 1 hour.\nCritical Success The target is unaffected.\nSuccess The target is Stupefied 1 until the end of your next turn.\nFailure The target is Stupefied 2 until the end of your next turn.\nCritical Failure The target is Stupefied 2 for 1 minute and is forced to its knees, becoming prone.",
      "castingTime": "1 action",
      "range": "touch",
      "target": "1 living creature",
      "area": null,
      "duration": "varies",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:clinging-ice",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "MraZBLJ4Be3ogmWL",
      "slug": "clinging-ice",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:d540d62e74f7f574feaf071fc96a9b600d8e0f441e25818e93c0d8bdfb292432",
    "translatableHash": "sha256:1536d0acebedc1200fc09f8bbbb863e2c3ae61af696ff9388b4d6dbf0f2f416d",
    "data": {
      "schemaVersion": 1,
      "name": "Clinging Ice",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cantrip",
        "cold",
        "hex",
        "manipulate",
        "witch"
      ],
      "traditions": [],
      "description": "Freezing sleet and heavy snowfall collect on the target's feet and legs, dealing 1d4 cold damage and other effects depending on its Reflex save.\nCritical Success The target is unaffected.\nSuccess The target takes half damage.\nFailure The target takes full damage, and takes a –5-foot circumstance penalty to its Speeds until the spell ends.\nCritical Failure The target takes double damage and a –10-foot circumstance penalty to its Speeds until the spell ends.\nSpell Effect: Clinging Ice\nHeightened 1 The damage increases by 1d4.",
      "castingTime": "1 action",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": "reflex save",
      "damage": [
        {
          "formula": "1d4",
          "type": "cold",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 1d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:pushing-gust",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "myC2EIrsjmB8xosi",
      "slug": "pushing-gust",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/punishing-gust.webp"
    },
    "sourceHash": "sha256:b97553f67c406501e08a64874b936811478af0caba999f0281fd63f73deebfb5",
    "translatableHash": "sha256:17d8578e45a5a92ce13b7909127905ef75d9b2e479c604c86cf408614e1b027b",
    "data": {
      "schemaVersion": 1,
      "name": "Pushing Gust",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "air",
        "cleric",
        "concentrate",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "Giving the air a push, you buffet the target with a powerful gust of wind; it must attempt a Fortitude save.\nCritical Success The target is unaffected.\nSuccess The target is pushed 5 feet away from you.\nFailure The target is pushed 10 feet away from you.\nCritical Failure The target is pushed 10 feet away from you and knocked Prone.",
      "castingTime": "2 actions",
      "range": "500 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": "fortitude save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:veil-of-dreams",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "NNoKWiWKqJkdD2ln",
      "slug": "veil-of-dreams",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/veil-of-dreams.webp"
    },
    "sourceHash": "sha256:085fa7e82a14466e026f81579100858ffcf3c56881ee733077652f9e49b8797b",
    "translatableHash": "sha256:1ba38d4ed052fcb4411751e06cc895e63a19ec5a4013d1c57b0847514a8fb594",
    "data": {
      "schemaVersion": 1,
      "name": "Veil of Dreams",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "focus",
        "hex",
        "manipulate",
        "mental",
        "witch"
      ],
      "traditions": [],
      "description": "Your patron draws the target into a drowsy state, causing daydreams and sluggishness. The target must attempt a Will save.\nCritical Success The target is unaffected.\nSuccess The target takes a -1 status penalty to Perception, attack rolls, and Will saves. This penalty increases to -2 for Will saves against sleep effects.\nFailure As success, and any time the target uses a concentrate action, it must succeed at a check (flat, dc:5) or the action is disrupted.\nSpell Effect: Veil of Dreams",
      "castingTime": "1 action",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:vibrant-thorns",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "nnSipUPNd3sm5vYL",
      "slug": "vibrant-thorns",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:847f46b8d3db5a6cc20f1c45397f9c439275d327e19a666b8b11b4e4b5e67d47",
    "translatableHash": "sha256:4f23aa333bd2559004853ab6c0637265387b4e775d97d78e526d0b984434a00f",
    "data": {
      "schemaVersion": 1,
      "name": "Vibrant Thorns",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "focus",
        "manipulate",
        "morph",
        "plant",
        "wood"
      ],
      "traditions": [],
      "description": "Your body sprouts a coat of brambly thorns that thrive on life magic. Adjacent creatures that hit you with a melee attack, as well as creatures that hit you with unarmed attacks, take 1 piercing damage each time they do. Anytime you cast a vitality spell, the thorns' damage increases to 1d6 piercing damage until the start of your next turn.\nHeightened 1 The damage increases by 1, or 1d6 after you cast a vitality spell.",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 The damage increases by 1, or 1d6 after you cast a vitality spell."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:fire-ray",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "oJKZi8OQgmVXHOc0",
      "slug": "fire-ray",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:608707627d9398241a698106a3b2f9da31c39daecf0358df8e03ca239f89c8e1",
    "translatableHash": "sha256:2b2f6f807324a96a05e6c284fc04439bd81bf31694797216b746a53116e47226",
    "data": {
      "schemaVersion": 1,
      "name": "Fire Ray",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "attack",
        "cleric",
        "concentrate",
        "fire",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "A blazing band of fire arcs through the air, lighting your opponent and the ground they stand upon on fire. Make a spell attack roll against the target's AC. The ray deals 2d6 fire damage on a hit (or double damage on a critical hit). On any result other than a critical failure, the ground in the target's space catches fire, dealing 1d6 fire damage to each creature that ends its turn in one of the squares.\nHeightened 1 The ray's initial damage increases by 2d6, and the fire damage dealt by the burning space increases by 1d6.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "1 creature",
      "area": null,
      "duration": "until the end of the target's next turn",
      "defense": null,
      "damage": [
        {
          "formula": "2d6",
          "type": "fire",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The ray's initial damage increases by 2d6, and the fire damage dealt by the burning space increases by 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:sudden-shift",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "P9bqJsF3WkxGAJKJ",
      "slug": "sudden-shift",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:7ef30ee74e2f67979d116ddf9c9fcfcd6c54f8d532ecf34f2f92b87730d0bd06",
    "translatableHash": "sha256:d26bc99701fd70ff2e8f200faf1d6c699a3061870ae1484f866bdcbd2fe6d34d",
    "data": {
      "schemaVersion": 1,
      "name": "Sudden Shift",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "Trigger An enemy misses you with a melee attack.\nYou swiftly move from a dangerous spot and veil yourself. You Step and become Concealed.",
      "castingTime": "reaction",
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
    "contentId": "pf2e:spell:spells-srd:hurtling-stone",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "pRKaEXnjGJXbPHPC",
      "slug": "hurtling-stone",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/hurtling-stone.webp"
    },
    "sourceHash": "sha256:b83c458b2708680a35580088f5b13ff81f4c0b4cf8d4eb696f93b5179d826c7e",
    "translatableHash": "sha256:9e821bc96599bb48205188a8368e2c09bda033fb7df3306a651df844bbf4a8d3",
    "data": {
      "schemaVersion": 1,
      "name": "Hurtling Stone",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "attack",
        "cleric",
        "earth",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "You evoke a magical stone and throw it, with divine guide to your aim. The stone deals 2d6 bludgeoning damage depending on your spell attack roll against the target's AC.\nCritical Success The target takes double damage and you can push it up to 10 feet.\nSuccess The target takes full damage and you can push it up to 5 feet.\nHeightened 1 The stone's damage increases by 1d6.",
      "castingTime": "1 action",
      "range": "60 feet",
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
      "heightening": "Heightened 1 The stone's damage increases by 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:veil-of-confidence",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Q25JQAgnJSGgFDKZ",
      "slug": "veil-of-confidence",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/veil-of-confidence.webp"
    },
    "sourceHash": "sha256:cd54b6faf1e53f8274536dbd9c1d1782a9690957517351333d87a2fc00314dd9",
    "translatableHash": "sha256:b8ac4f58893c097ce0c6e82479cbbf4421bfdf5be3dcb3f0e76159cb2544c681",
    "data": {
      "schemaVersion": 1,
      "name": "Veil of Confidence",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "focus",
        "mental"
      ],
      "traditions": [],
      "description": "You surround yourself in a veil of confidence. You reduce your current Frightened condition by 1, and whenever you would become Frightened during the duration, reduce the amount by 1. If you critically fail a save against fear, veil of confidence reduces your frightened value from that effect, and then ends.",
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
    "contentId": "pf2e:spell:spells-srd:healers-blessing",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "rhJyqB9g3ziImQgM",
      "slug": "healers-blessing",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/healers-blessing.webp"
    },
    "sourceHash": "sha256:fbc98b92e00bdb0ce42f89dcf08412710522dd919af6839414e3dbe4ea6a8ea1",
    "translatableHash": "sha256:2a9929cc4bff7f5b0c899f4d57ff64bf848671053206f4e5dd89e69169c0a27e",
    "data": {
      "schemaVersion": 1,
      "name": "Healer's Blessing",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "focus"
      ],
      "traditions": [],
      "description": "Your words bless a creature with an enhanced connection to vital energy. When the target regains Hit Points from a healing vitality spell, it regains 2 additional Hit Points.\nThe target regains additional Hit Points from healer's blessing only the first time it regains HP from a given healing spell, so a spell that heals the creature repeatedly over a duration would restore additional Hit Points only once, when they are first healed.\nSpell Effect: Healer's Blessing\nHeightened 1 The additional healing increases by 2 HP.",
      "castingTime": "1 action",
      "range": "30 feet",
      "target": "1 willing living creature",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 The additional healing increases by 2 HP."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:phase-familiar",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "rMOI8JFJ0nT2mrCF",
      "slug": "phase-familiar",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/phase-familiar.webp"
    },
    "sourceHash": "sha256:fab1b7785fdb53e27f1f897aa371473215a7a292621596541155456277aa6166",
    "translatableHash": "sha256:532c7ecfa030cd6370177a38d29741311f350a1f1a35de8eeef8a1865cf80fd0",
    "data": {
      "schemaVersion": 1,
      "name": "Phase Familiar",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "focus",
        "hex",
        "manipulate",
        "witch"
      ],
      "traditions": [],
      "description": "Trigger Your familiar would take damage.\nYour patron momentarily recalls your familiar to the ether, shifting it from its solid, physical form into a ghostly version of itself. Against the triggering damage, your familiar gains resistance 5 to all damage and is immune to precision damage.\nSpell Effect: Phase Familiar\nHeightened 1 Increase the resistance by 2.",
      "castingTime": "reaction",
      "range": "60 feet",
      "target": "your familiar",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 Increase the resistance by 2."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:protectors-sacrifice",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "rQYob0QMJ0I1U2sU",
      "slug": "protectors-sacrifice",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/protectors-sacrifice.webp"
    },
    "sourceHash": "sha256:9a0af20ee9522be2788f704514c226bd4734f38449a800238cce7fe627c9aec5",
    "translatableHash": "sha256:d14b8774f5522c4b60621dbda8cd7006794b0aab3528c053809cac5423305d49",
    "data": {
      "schemaVersion": 1,
      "name": "Protector's Sacrifice",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "Trigger An ally within 30 feet takes damage.\nYou protect your ally by suffering in their stead. Reduce the damage the triggering ally would take by 3. You redirect this damage to yourself, but your immunities, weaknesses, resistances and so on do not apply.\nYou aren't subject to any conditions or other effects of whatever damaged your ally (such as poison from a venomous bite). Your ally is still subject to those effects even if you redirect all of the triggering damage to yourself.\nHeightened 1 The damage you redirect increases by 3.",
      "castingTime": "reaction",
      "range": "30 feet",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 The damage you redirect increases by 3."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:cloak-of-shadow",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "SE0fbgBj7atuukdv",
      "slug": "cloak-of-shadow",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/cloak-of-shadows.webp"
    },
    "sourceHash": "sha256:de896dd369ea605d076f97da339325a57313b74a468c2eb0d2410bdb39fe38bc",
    "translatableHash": "sha256:df7de5f967caf209511ae89d71a988e26987cb5487324864ff0b5c046a14b5a6",
    "data": {
      "schemaVersion": 1,
      "name": "Cloak of Shadow",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "aura",
        "cleric",
        "darkness",
        "focus",
        "manipulate",
        "shadow"
      ],
      "traditions": [],
      "description": "You drape the target in a mantle of swirling shadows that make it harder to see. The cloak reduces bright light within a 20-foot emanation to dim light. This is a form of magical darkness and can therefore overcome non-magical light or attempt to counteract magical light.\nThe target can use Concealed condition gained from the shadows to Hide, though observant creatures can still follow the moving aura of shadow, making it difficult for the target to become completely Undetected. The target can use an Interact action to remove the cloak and leave it behind as a decoy, where it remains, reducing light for the rest of the spell's duration. If anyone picks up the cloak after it's been removed by the original target, the cloak evaporates and the spell ends.",
      "castingTime": "1 action",
      "range": "touch",
      "target": "1 willing creature",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:moonbeam",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "SuBtUJiU6DbSJYIw",
      "slug": "moonbeam",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/moonbeam.webp"
    },
    "sourceHash": "sha256:f67cc3b4844c5af4e416fb1b899936c87a77f45364e212795bad335f799717aa",
    "translatableHash": "sha256:e9cb1527c2c077558e6223f2634e40035c36d825ba08e499cc20027081737197",
    "data": {
      "schemaVersion": 1,
      "name": "Moonbeam",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "attack",
        "cleric",
        "concentrate",
        "fire",
        "focus",
        "light",
        "manipulate"
      ],
      "traditions": [],
      "description": "You shine a ray of moonlight. Make a spell attack roll. The beam of light deals 2d6 fire damage. This is silver damage for the purposes of weaknesses, resistances, and the like.\nCritical Success The beam deals double damage, and the target is Dazzled for 1 minute.\nSuccess The beam deals full damage, and the target is Dazzled for 1 round.\nHeightened 1 The ray's damage increases by 1d6.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [
        {
          "formula": "2d6",
          "type": "fire",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The ray's damage increases by 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:fortify-summoning",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "tWzxuJdbXqvskdIo",
      "slug": "fortify-summoning",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:d023bece24ce66ae20f466534943babca89a3bff50c7dab9c2cb00569158c17b",
    "translatableHash": "sha256:a0654dbccc437a4e962dab1d88b137c4dcf30236c776a539ab81d74f8a06ae9a",
    "data": {
      "schemaVersion": 1,
      "name": "Fortify Summoning",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "wizard"
      ],
      "traditions": [],
      "description": "As you call a creature to your side, your magic transforms its body, heightening its ferocity and fortifying its resilience. The target gains a +1 status bonus to all checks and DCs (including its AC) for the duration of its summoning, up to 1 minute.\nSpell Effect: Fortify Summoning",
      "castingTime": "1 action",
      "range": "30 feet",
      "target": "1 creature you summoned",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:magic-hide",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "u2uSeH6YSbK1ajTy",
      "slug": "magic-hide",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/magic-hide.webp"
    },
    "sourceHash": "sha256:8153579668d8935e89dbbbbfb089a2b2e0607c5904ddbcabdb69ed300181d6f9",
    "translatableHash": "sha256:a3144d9506fe7e0cea334a26545bf79e82cc6885e8549071d1c7e8f639e3427d",
    "data": {
      "schemaVersion": 1,
      "name": "Magic Hide",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "focus",
        "manipulate",
        "ranger"
      ],
      "traditions": [],
      "description": "Your animal companion grows a thicker hide, matted fur, or a harder shell, granting it a +1 status bonus to AC.\nSpell Effect: Magic Hide",
      "castingTime": "1 action",
      "range": "30 feet",
      "target": "your animal companion",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:magics-vessel",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "u4FGIUQgruLjml7J",
      "slug": "magics-vessel",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:399d468b6ba14301ef48fcfae12bce9fc104cee71c6b5e38c8fd23591b36c1ea",
    "translatableHash": "sha256:418096d3705837d4a1230c329b19dc9e3f58e6e46e567a45cb6555420e148b52",
    "data": {
      "schemaVersion": 1,
      "name": "Magic's Vessel",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "A creature becomes a divine receptacle for pure magical energy. The target gains a +1 status bonus to saving throws. Each time you Cast a Spell from your spell slots, you automatically Sustain this spell and grant its target resistance to damage from spells equal to the spell's rank, until the start of your next turn.\nSpell Effect: Magic's Vessel\nSpell Effect: Magic's Vessel (Resistance)",
      "castingTime": "1 action",
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
    "contentId": "pf2e:spell:spells-srd:athletic-rush",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "UGJzJRJDoonfWqqI",
      "slug": "athletic-rush",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:f672e99b18aff88aabea8b33953a0c0d04c7dfcc8210b0ee4d4194af7637ed18",
    "translatableHash": "sha256:09dc844260db2178279bd677708813b9d4a8b79f8d44697c145a96fb6b7731fe",
    "data": {
      "schemaVersion": 1,
      "name": "Athletic Rush",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "Your body fills with physical power and skill. You gain a +10-foot status bonus to Speed and a +2 status bonus to Athletics checks. As a part of Casting this Spell, you can use a Stride, Leap, Climb, or Swim action. The spell's bonuses apply during that action.\nSpell Effect: Athletic Rush",
      "castingTime": "1 action",
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
    "contentId": "pf2e:spell:spells-srd:discern-secrets",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "UmXhuKrYZR3W16mQ",
      "slug": "discern-secrets",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:35aa17894570ecef7c4e9af3138f87b94caec6ecfca59e700c7cea5a80f6b17a",
    "translatableHash": "sha256:6732121fac363a5abbbdd011adc0e6fe475066dd9329dd28eff0c5eac0703a95",
    "data": {
      "schemaVersion": 1,
      "name": "Discern Secrets",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cantrip",
        "hex",
        "manipulate",
        "witch"
      ],
      "traditions": [],
      "description": "Your patron deigns to whisper a few secrets. The target can Recall Knowledge, Seek, or Sense Motive as a free action. The target gains a +1 status bonus to the statistic used for the roll (a skill or Perception), as long as you Sustain the spell. The target is temporarily immune to discern secrets for 1 minute.\nHeightened (5th) You can target two creatures instead of one.\nSpell Effect: Discern Secrets",
      "castingTime": "1 action",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (5th) You can target two creatures instead of one.\nSpell Effect: Discern Secrets"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:charming-touch",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ut9IhJ9jSZSHDUop",
      "slug": "charming-touch",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/charming-touch.webp"
    },
    "sourceHash": "sha256:b5522011a88dc790ab2a9df7c319ef88ca8abc194a4d9a90fbe685dc682e55b0",
    "translatableHash": "sha256:e854ec77dedc32639e53d187a9d3a61b4e07ed7310834453c736b69ba5d9df3f",
    "data": {
      "schemaVersion": 1,
      "name": "Charming Touch",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "emotion",
        "focus",
        "incapacitation",
        "manipulate",
        "mental",
        "subtle"
      ],
      "traditions": [],
      "description": "You infuse your target with attraction, causing it to act friendlier toward you. The target attempts a Will save. It gains a +4 circumstance bonus to this save if you or your allies recently threatened or were hostile to it.\nCritical Success The target is unaffected and aware you tried to charm it.\nSuccess The target is unaffected but thinks your spell was something harmless instead of charming touch, unless it identifies the spell.\nFailure The target's attitude becomes Friendly toward you. If it was Friendly, it becomes Helpful. It can't use hostile actions against you. If you use a hostile action against the target, the spell ends. You can Dismiss the spell. After the spell ends, the target doesn't necessarily realize it was charmed unless its friendship with you or the actions you convinced it to take clash with its expectations. If it doesn't realize you charmed it, you could potentially convince it to continue being your friend via mundane means.\nCritical Failure As failure, but the target is helpful.",
      "castingTime": "1 action",
      "range": "touch",
      "target": "1 creature that could find you attractive",
      "area": null,
      "duration": "10 minutes",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:cornucopia",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "vQuwLqtFFYt0K15N",
      "slug": "cornucopia",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:7eddcd627c7640505575804e70e4f4be5fe2427b8c63fc20804f49514b898791",
    "translatableHash": "sha256:37451669f25df864a8e999235f02933409a22bf43019fb4b81d05dae3cf67545",
    "data": {
      "schemaVersion": 1,
      "name": "Cornucopia",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "druid",
        "focus",
        "healing",
        "manipulate",
        "plant",
        "vitality"
      ],
      "traditions": [],
      "description": "Vines twine into a wicker horn in your hands, and out spills a single fruit, nut, or similar small bit of produce. A creature who eats the produce with an Interact action regains 1d6+4 HP. The cornucopia, as well as any unconsumed pieces of fruit, wither away at the end of the duration.\nHeightened 1 The cornucopia produces an additional piece of food. A creature can consume any amount of food from the same casting with a single Interact action. Eating six pieces of produce from the cornucopia gives as much nourishment as one square meal for a typical human.\n(1d6+1*4 healing",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [
        {
          "formula": "1d6+4",
          "type": "vitality",
          "kind": "healing"
        }
      ],
      "heightening": "Heightened 1 The cornucopia produces an additional piece of food. A creature can consume any amount of food from the same casting with a single Interact action. Eating six pieces of produce from the cornucopia gives as much nourishment as one square meal for a typical human.\n(1d6+1*4 healing"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:read-fate",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Vvxgn7saUPW2bJhb",
      "slug": "read-fate",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:793d0bac0f8d9d0d0f879169e681a553b9f2ae2e718069997a6e8c90028ebddf",
    "translatableHash": "sha256:0780790a983edf6d0d7fd3146f5a7bf763a9010e582bed7b601f6f3e7e59c51e",
    "data": {
      "schemaVersion": 1,
      "name": "Read Fate",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "focus",
        "manipulate",
        "prediction"
      ],
      "traditions": [],
      "description": "You attempt to learn more about the target's fate in the short term, usually within the next day for most prosaic creatures, or the next hour or less for someone likely to have multiple rapid experiences, such as someone actively adventuring.\nYou learn a single enigmatic word connected to the creature's fate in that time frame. Fate is notoriously inscrutable, and the word isn't necessarily meant to be taken at face value, so the meaning is often clear only in hindsight. The GM rolls a secret check (flat, dc:6, traits:secret). If the creature's fate is too uncertain, or on a failed flat check, the spell yields the word \"inconclusive.\" Either way, the creature is then temporarily immune for 24 hours.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature other than you",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:weapon-surge",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "W37iBXLsY2trJ1rS",
      "slug": "weapon-surge",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/weapon-surge.webp"
    },
    "sourceHash": "sha256:a530842d3945884519be35299a9daa46cb2f8ef849cfd1a816a58bdcfd2dbd4d",
    "translatableHash": "sha256:5e7387619e05a399ba78960fa2f99fe745da3d2ffbe296cc91cff4b2ec0662c5",
    "data": {
      "schemaVersion": 1,
      "name": "Weapon Surge",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "focus",
        "manipulate",
        "sanctified"
      ],
      "traditions": [],
      "description": "Holding your weapon aloft, you fill it with divine energy. On your next Strike with that weapon before the start of your next turn, you gain a +1 status bonus to the attack roll and the weapon deals an additional 1d6 spirit damage, and the Strike gains the sanctified trait. Weapon surge ends once you complete this Strike or the weapon leaves your possession.\nHeightened (5th) The attack deals 2d6 additional spirit damage.\nHeightened (9th) The attack deals 3d6 additional spirit damage.\nSpell Effect: Weapon Surge",
      "castingTime": "1 action",
      "range": "touch",
      "target": "1 weapon you're wielding",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (5th) The attack deals 2d6 additional spirit damage.\nHeightened (9th) The attack deals 3d6 additional spirit damage.\nSpell Effect: Weapon Surge"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:counter-performance",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "WILXkjU5Yq3yw10r",
      "slug": "counter-performance",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/counter-performance.webp"
    },
    "sourceHash": "sha256:f25006f43bef47d693738de17d7b89ee2ebdaf323211512ad1c5a78779b4c0d6",
    "translatableHash": "sha256:22293ea50aa570539b9dcef4d6a4b81a4d509461368d3fa524033ed26a23ecc4",
    "data": {
      "schemaVersion": 1,
      "name": "Counter Performance",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "bard",
        "composition",
        "concentrate",
        "focus",
        "fortune",
        "manipulate",
        "mental"
      ],
      "traditions": [],
      "description": "Trigger You or an ally within 60 feet rolls a saving throw against an auditory or visual effect.\nYour performance protects you and your allies. Roll a check (performance) check for a type you know—it must be an auditory performance if the trigger was auditory or a visual one for a visual trigger, and this action gains the traits for the type of performance. You and allies in the area can use the better result between your Performance check and the saving throw.",
      "castingTime": "reaction",
      "range": "",
      "target": "",
      "area": "60 emanation",
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:scramble-body",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "XcMObj2p9nIBp53b",
      "slug": "scramble-body",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:49351f8447767d9006e801e7f49bc503a90b640af3fee84381ee15237440fea5",
    "translatableHash": "sha256:43f136919dcdfab19720155cd31c71392f9d831c0c7f51b8bba68313d1aaa548",
    "data": {
      "schemaVersion": 1,
      "name": "Scramble Body",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate",
        "wizard"
      ],
      "traditions": [],
      "description": "Your magic throws the creature's biology into disarray, inducing nausea, fever, and other unpleasant conditions.\nSuccess The target is unaffected.\nFailure The target becomes Sickened 1.\nCritical Failure The target becomes Sickened 2 and Slowed 1 as long as it's sickened.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 living creature",
      "area": null,
      "duration": "",
      "defense": "fortitude save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:savor-the-sting",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "xn0V2HDrmDWNzPEt",
      "slug": "savor-the-sting",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/savor-the-sting.webp"
    },
    "sourceHash": "sha256:17a553224bc9caf1e05f84a89687ecd27a4c6ea43c4d7004eb61ce682b0c97af",
    "translatableHash": "sha256:87111c2928769078b59eef87f39aad39548089690a49d7bb495a7e5ebaebec8a",
    "data": {
      "schemaVersion": 1,
      "name": "Savor the Sting",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "focus",
        "manipulate",
        "mental",
        "nonlethal"
      ],
      "traditions": [],
      "description": "You inflict pain upon the target and revel in their anguish. This deals 1d4 mental damage and 1d4 persistent mental damage; the target must attempt a Will save. As long as the target is taking persistent damage from this spell, you gain a +1 status bonus to attack rolls and skill checks against the target.\nCritical Success The target is unaffected.\nSuccess The target takes half damage and no persistent damage.\nFailure The target takes full initial and persistent damage.\nSpell Effect: Savor the Sting\nCritical Failure The target takes double initial and persistent damage.\nHeightened 1 The initial damage increases by 1d4 and the persistent damage increases by 1d4.",
      "castingTime": "1 action",
      "range": "touch",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": "will save",
      "damage": [
        {
          "formula": "1d4",
          "type": "mental",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The initial damage increases by 1d4 and the persistent damage increases by 1d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:creative-splash",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "xTpp8dHZsNMDm75B",
      "slug": "creative-splash",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:4e1bfd38cc0f6192a92fe7653fc8367615e7db5e45d612a0bcd96faef5d0b0b9",
    "translatableHash": "sha256:34a8788a307447b5e027399ec75b8850f6835d091114e343f908d3a1bfeb705f",
    "data": {
      "schemaVersion": 1,
      "name": "Creative Splash",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "focus",
        "illusion",
        "manipulate",
        "visual"
      ],
      "traditions": [],
      "description": "A deluge of paint or colorful illusions descend on the area, reflecting your personal creative specialty. Roll 1d4 to determine the color of the illusion. Each creature in the area must succeed at a Will save or take the effect listed on the table for the color.\n1d4 | Color | Failure | Critical Failure |\n1 | White | Dazzled for 1 round | Dazzled for 1 minute |\n2 | Red | Enfeebled 1 for 1 round | Enfeebled 2 for 1 round |\n3 | Yellow | Frightened 1 | Frightened 2 |\n4 | Blue | Clumsy 1 for 1 round | Clumsy 2 for 1 round |",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "",
      "area": "5 burst",
      "duration": "varies",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:song-of-strength",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Xxdwkt0EEDgP1LGc",
      "slug": "song-of-strength",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/song-of-strength.webp"
    },
    "sourceHash": "sha256:bed3d058620b7134ea40e2c47718035e4cb39253fc31d1779ea9c7253c6ef385",
    "translatableHash": "sha256:ee92c89c8d56f0e1bf91927df3e80a660ea7bf4166dae58b330a07a65bc53856",
    "data": {
      "schemaVersion": 1,
      "name": "Song of Strength",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "bard",
        "cantrip",
        "composition",
        "concentrate",
        "emotion",
        "mental"
      ],
      "traditions": [],
      "description": "You bolster your allies' physical strength with a hearty exhortation. You and your allies gain a +1 status bonus to Athletics checks and to their DCs against Athletics skill actions such as Disarm, Reposition, Shove, and Trip.\nSpell Effect: Song of Strength",
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
    "contentId": "pf2e:spell:spells-srd:soothing-words",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "YGRpHU5yxw73mls8",
      "slug": "soothing-words",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/soothing-words.webp"
    },
    "sourceHash": "sha256:29da2daeb02aad50fb5865f970c388c3880d675bf6e055b75eaa6a213962279f",
    "translatableHash": "sha256:44666c72713620211c339d24746710868dd40b1a052485220c929b51a1dc4b7f",
    "data": {
      "schemaVersion": 1,
      "name": "Soothing Words",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "emotion",
        "focus",
        "mental"
      ],
      "traditions": [],
      "description": "You attempt to calm the target by uttering soothing words in a calm and even tone. The target gains a +1 status bonus to Will saving throws. This bonus increases to +2 against emotion effects.\nSpell Effect: Soothing Words\nIn addition, when you Cast this Spell, you can attempt to counteract one emotion effect on the target.\nHeightened (5th) The bonus to saves increases to +2, or +3 against emotion effects.",
      "castingTime": "1 action",
      "range": "30 feet",
      "target": "1 ally",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (5th) The bonus to saves increases to +2, or +3 against emotion effects."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:face-in-the-crowd",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "yH13KXUK2x093NUv",
      "slug": "face-in-the-crowd",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/face-in-the-crowd.webp"
    },
    "sourceHash": "sha256:22e1e9ca15786d6e97d442e6dd58d0aeeb4d463b67643f485a114ef8ad19f49a",
    "translatableHash": "sha256:ab92f4ccb69431c23afe05af93fd39b3dd391750d24aa530cac0bbd3ddad1a9b",
    "data": {
      "schemaVersion": 1,
      "name": "Face in the Crowd",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "focus",
        "manipulate",
        "visual"
      ],
      "traditions": [],
      "description": "While in a crowd of roughly similar creatures, your appearance becomes bland and nondescript. You gain a +2 status bonus to Deception and Stealth checks to go incognito among the crowd, and you ignore difficult terrain caused by the crowd. This counts as setting up a disguise for the Impersonate use of Deception and you add your level even if you're untrained.\nSpell Effect: Face in the Crowd\nHeightened (3rd) The spell gains a range of 10 feet and can target up to 10 creatures.",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (3rd) The spell gains a range of 10 feet and can target up to 10 creatures."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:cackle",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "YVK3JUkPVzHIeGXQ",
      "slug": "cackle",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/cackle.webp"
    },
    "sourceHash": "sha256:44aacf75a5228120f0eef6b3e10d6b3e823df0eb32392221ea29735abba2c33d",
    "translatableHash": "sha256:5d663675755924ec2f1ff85ab95730ac1a071269564674f1968f079024ea906f",
    "data": {
      "schemaVersion": 1,
      "name": "Cackle",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "hex",
        "witch"
      ],
      "traditions": [],
      "description": "With a quick burst of laughter, you prolong a magical effect you created. You Sustain a spell.",
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
    "contentId": "pf2e:spell:spells-srd:appearance-of-wealth",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ZeftDoh0nFAXBAWY",
      "slug": "appearance-of-wealth",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/appearance-of-wealth.webp"
    },
    "sourceHash": "sha256:3977480ad419e423ef95fa89fc7efc4ae3ba418dc14ff066a091f323e7c7bac0",
    "translatableHash": "sha256:6a96ca7681edc1997ab239ddf6bcba484e48e32ea9f9575c00903e28b3a6f7c0",
    "data": {
      "schemaVersion": 1,
      "name": "Appearance of Wealth",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "focus",
        "illusion",
        "manipulate"
      ],
      "traditions": [],
      "description": "You create a brief vision of immense wealth filling the spell's area. Each creature within 20 feet of the area that could be enticed by material wealth must attempt a Will saving throw. A creature that enters the area automatically disbelieves the illusion, and disbelieving the illusion ends any Fascinated condition imposed by the spell. As long as you Sustain the Spell, other creatures react to the treasure like they would any other illusion, but they are not at risk of becoming Fascinated.\nCritical Success The creature disbelieves the illusion and is unaffected by it.\nSuccess The creature is Fascinated by the wealth until it has completed its first action on its next turn.\nFailure The creature is Fascinated by the illusion.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "",
      "area": "5 burst",
      "duration": "1 minute",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:heal-animal",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Zmh4ynfnCtwKeAYl",
      "slug": "heal-animal",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:8866e9dcea95dfc2b09c35b003e102b965a1fd4688b94c9c941ed6d3eac974fd",
    "translatableHash": "sha256:6b5d6728b9781079b850c21a94f21ce33170b09f576db6755881b1ec9acff3db",
    "data": {
      "schemaVersion": 1,
      "name": "Heal Animal",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "druid",
        "focus",
        "healing",
        "manipulate",
        "vitality"
      ],
      "traditions": [],
      "description": "You heal an animal's wounds, restoring 1d8 Hit Points to the target. The number of actions spent Casting this Spell determines its effect.\n1 The spell has a range of touch.\n2 (concentrate) The spell has a range of 30 feet and restores an additional 8 Hit Points to the target.\nHeightened 1 The amount of healing increases by 1d8, and the additional healing for the 2-action version increases by 8.",
      "castingTime": "1 or 2",
      "range": "varies",
      "target": "1 willing living animal",
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
      "heightening": "Heightened 1 The amount of healing increases by 1d8, and the additional healing for the 2-action version increases by 8."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:dazzling-flash",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "zul5cBTfr7NXHBZf",
      "slug": "dazzling-flash",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/dazzling-flash.webp"
    },
    "sourceHash": "sha256:830a2af317647eae25f266ef3b987c619360dc471a444d15d3e52c2c3749237f",
    "translatableHash": "sha256:ee521ddf9cdfadbfa9b459408fa197c282b13f846c3245dd95bfddf07fcc8e54",
    "data": {
      "schemaVersion": 1,
      "name": "Dazzling Flash",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "focus",
        "light",
        "manipulate",
        "visual"
      ],
      "traditions": [],
      "description": "You raise your religious symbol and create a blinding flash of light. Each creature in the area must attempt a Fortitude save.\nCritical Success The creature is unaffected.\nSuccess The creature is Dazzled for 1 round.\nFailure The creature is Blinded for 1 round and Dazzled for 1 minute. The creature can spend an Interact action rubbing its eyes to end the Blinded condition.\nCritical Failure The creature is Blinded for 1 round and Dazzled for 1 hour.\nHeightened (3rd) The area increases to a 30-foot cone.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "15 cone",
      "duration": "",
      "defense": "fortitude save",
      "damage": [],
      "heightening": "Heightened (3rd) The area increases to a 30-foot cone."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:enlarge-companion",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "8rj45fKzCFcB0fxs",
      "slug": "enlarge-companion",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/enlarge-companion.webp"
    },
    "sourceHash": "sha256:97f4b7bb5c84388c81214f07d5488d7cecc3975f9651e8e6f1546c1bb82372ca",
    "translatableHash": "sha256:84e995e7a9c67feabff2a3044e9827fb32c229b37cde071692eecd6bd6768ea1",
    "data": {
      "schemaVersion": 1,
      "name": "Enlarge Companion",
      "rank": 2,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate",
        "polymorph",
        "ranger"
      ],
      "traditions": [],
      "description": "Your animal companion grows much larger, towering over its foes in battle. Your animal companion becomes Large, gaining the effects of a 2nd-rank Enlarge spell.\nSpell Effect: Enlarge Companion\nHeightened (4th) Your animal companion instead becomes Huge, gaining the benefits of a 4th-rank enlarge spell",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "your animal companion",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) Your animal companion instead becomes Huge, gaining the benefits of a 4th-rank enlarge spell"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:rallying-anthem",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "bH0kPuf7UKxRvi2P",
      "slug": "rallying-anthem",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/inspire-defense.webp"
    },
    "sourceHash": "sha256:aff3bbd9fe048858ff44093ff20be27b53f181022d8833aa564b59b2583d6323",
    "translatableHash": "sha256:43fee3bf29950e5364ba4af8654d2f73b6be5c05f729d1964c2558cb3e9b94c5",
    "data": {
      "schemaVersion": 1,
      "name": "Rallying Anthem",
      "rank": 2,
      "rarity": "uncommon",
      "traits": [
        "bard",
        "cantrip",
        "composition",
        "concentrate",
        "emotion",
        "mental"
      ],
      "traditions": [],
      "description": "Your song moves allies to protect themselves more effectively. You and all allies in the area gain a +1 status bonus to AC and saving throws, as well as resistance equal to half the spell's rank to physical damage.\nSpell Effect: Rallying Anthem",
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
    "contentId": "pf2e:spell:spells-srd:triple-time",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "c8R2fpk88fBwJ1ie",
      "slug": "triple-time",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/triple-time.webp"
    },
    "sourceHash": "sha256:df6b72a29d9a18c43f18d9f6a8174aeb0dfa51881504f46be9096d76cf1c311f",
    "translatableHash": "sha256:0fb47095d60b41fe8dbbf41d326449c0ff60e2a675fefe7aec9ddda2b114c98d",
    "data": {
      "schemaVersion": 1,
      "name": "Triple Time",
      "rank": 2,
      "rarity": "uncommon",
      "traits": [
        "bard",
        "cantrip",
        "composition",
        "emotion",
        "manipulate",
        "mental"
      ],
      "traditions": [],
      "description": "Your music sets a fast pace. You and all allies in the area gain a +10-foot status bonus to all Speeds for 1 round.\nSpell Effect: Triple Time",
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
    "contentId": "pf2e:spell:spells-srd:hunters-luck",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "GfrKNJ9pNeATiKCc",
      "slug": "hunters-luck",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:a392324c3b345dc951367d44cc6c71c25be0f7a1422eca8ba750754a15352665",
    "translatableHash": "sha256:c6b620470eabe999e124f41db3dd06f53d3d51b5373077c4d35180fdb8c5cba1",
    "data": {
      "schemaVersion": 1,
      "name": "Hunter's Luck",
      "rank": 2,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "fortune",
        "ranger"
      ],
      "traditions": [],
      "description": "Trigger You attempt a check to Recall Knowledge about a creature, but you haven't rolled yet.\nYou have a preternatural ability to remember details about your foes. Roll the triggering check twice and use the better result.",
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
    "contentId": "pf2e:spell:spells-srd:soothing-mist",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "RGBZrVRIEDb2G48h",
      "slug": "soothing-mist",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/soothing-mist.webp"
    },
    "sourceHash": "sha256:38f4ad0f78f5da9870aeeff68698b421d66700a6c9cf41bdc3846daec2f55f27",
    "translatableHash": "sha256:6d869a56793638557add90f18488b81120658a1163e4b800ec2902ef402c42cf",
    "data": {
      "schemaVersion": 1,
      "name": "Soothing Mist",
      "rank": 2,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "healing",
        "manipulate",
        "ranger",
        "vitality"
      ],
      "traditions": [],
      "description": "You call forth a magical mist that envelops a creature. The mist restores 2d8 Hit Points to a target living creature and ends one source of persistent acid, bleed, fire, poison, or void damage affecting it. If the creature is taking persistent damage from multiple sources, you select which one is removed. Against an undead target, you deal 2d8 vitality damage (basic Fortitude save); if it fails the save, it also takes 2 persistent vitality damage.\nHeightened 1 The amount of healing (or damage to an undead target) increases by 1d8, and the persistent vitality damage to an undead creature increases by 1.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 willing living creature or 1 undead creature",
      "area": null,
      "duration": "",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "2d8",
          "type": "vitality",
          "kind": "damage-or-healing"
        }
      ],
      "heightening": "Heightened 1 The amount of healing (or damage to an undead target) increases by 1d8, and the persistent vitality damage to an undead creature increases by 1."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:animal-feature",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "vGEgI8e7AW6FQ3tP",
      "slug": "animal-feature",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:b2da9709b6c3a06a337a60823e55a250627abef9418d5b9108a0dbe216633a12",
    "translatableHash": "sha256:137b4e1aca764c646ac366e82faa33a1f9b79fa4da72cea40321fdf1e5a32088",
    "data": {
      "schemaVersion": 1,
      "name": "Animal Feature",
      "rank": 2,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate",
        "morph",
        "ranger"
      ],
      "traditions": [],
      "description": "Without fully transforming your body, you gain one animalistic feature, which you select from the list below each time you Cast the Spell.\n• Cat Eyes You gain low-light vision.\n• Claws You gain a claw attack that deals 1d6 slashing damage and has the agile, finesse, and unarmed traits.\n• Jaws You gain a jaws attack that deals 1d8 piercing damage and has the unarmed trait.\nHeightened (4th) Add the following options to the list.\n• Fish Tail You gain a swim Speed equal to your land Speed.\n• Owl Eyes You gain darkvision.\n• Wings You gain a fly Speed equal to your land Speed.\nSpell Effect: Animal Feature",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) Add the following options to the list.\n• Fish Tail You gain a swim Speed equal to your land Speed.\n• Owl Eyes You gain darkvision.\n• Wings You gain a fly Speed equal to your land Speed.\nSpell Effect: Animal Feature"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:dirge-of-doom",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "1xLVcA8Y1onw7toT",
      "slug": "dirge-of-doom",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:6a1c1ef8c44991f92a5a35f84c7dd393386175baa9e05d1d5a6e890d9790255a",
    "translatableHash": "sha256:728e29abb57f81ef27b7e8d8568f18598f8c74a0e98f523e493d573bd0a1d5b4",
    "data": {
      "schemaVersion": 1,
      "name": "Dirge of Doom",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "bard",
        "cantrip",
        "composition",
        "concentrate",
        "emotion",
        "fear",
        "mental"
      ],
      "traditions": [],
      "description": "Enemies within the area are Frightened 1. They can't reduce their frightened value below 1 while they remain in the area.",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": "30 emanation",
      "duration": "1 round",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:deceivers-cloak",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "FrKPwgFxWIGMGgs4",
      "slug": "deceivers-cloak",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/deceivers-cloak.webp"
    },
    "sourceHash": "sha256:6bc850160f500d42dff3980984dbc7c39fe89f7e01be95c77d2bc668bd6d4ed0",
    "translatableHash": "sha256:e099afcd7326ad1f373d6bdb010f05adca5d47e1ab7813495ebfe9573a49732b",
    "data": {
      "schemaVersion": 1,
      "name": "Deceiver's Cloak",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "hex",
        "illusion",
        "manipulate",
        "witch"
      ],
      "traditions": [],
      "description": "Your patron drapes a cloak of illusion about you, making you appear as another creature of the same body shape with roughly similar height and weight as yourself. This has the effects of a 3rd-rank Illusory Disguise.\nHeightened (6th) You can appear as any creature of the same size, even with a completely different body shape.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (6th) You can appear as any creature of the same size, even with a completely different body shape."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:personal-blizzard",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "g4MAIQodRDVfNp1B",
      "slug": "personal-blizzard",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:e4621649d590a5a5dbc20eb2a1e46431f7d80b1c2f2454afd576a7f174175c7b",
    "translatableHash": "sha256:f29d8d634f46d0b6458e741bbfb9a3a2fc6f899c99a2cce93785a1144486a0dc",
    "data": {
      "schemaVersion": 1,
      "name": "Personal Blizzard",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "cold",
        "focus",
        "hex",
        "witch"
      ],
      "traditions": [],
      "description": "Your patron's breath becomes blizzard of obscuring, scouring ice that follows your target. The target attempts a Fortitude save.\nCritical Success The target is unaffected.\nSuccess The target takes 1d6 cold damage, and the spell ends.\nFailure The target takes 1d6 cold damage and 1d6 persistent cold damage. The persistent damage automatically ends when the spell ends. It is Concealed to other creatures, and other creatures are concealed to it.\nCritical Failure As failure, but both the cold damage and the persistent cold damage increase to 2d6.\nHeightened 1 The cold damage and persistent cold damage increase by 1 (2 on a critical failure).",
      "castingTime": "1 action",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": "fortitude save",
      "damage": [
        {
          "formula": "1d6",
          "type": "cold",
          "kind": "damage"
        },
        {
          "formula": "1d6",
          "type": "cold",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The cold damage and persistent cold damage increase by 1 (2 on a critical failure)."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:rangers-bramble",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "KktHf7zIAWOr499h",
      "slug": "rangers-bramble",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/rangers-bramble.webp"
    },
    "sourceHash": "sha256:2de52735b31d6268d88b0344e26077d7d2122e232f2eb16cc9de220e2221eb0b",
    "translatableHash": "sha256:2348ed9086841c93a95c6677fff7b98abb619b014e69ed242ae16ea49c75acca",
    "data": {
      "schemaVersion": 1,
      "name": "Ranger's Bramble",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate",
        "plant",
        "ranger"
      ],
      "traditions": [],
      "description": "You cause plants in the area to entangle your foes, with the effects of Entangling Flora. A creature that critically fails the save takes (max(0,3 -1))d4[bleed] damage in addition to being Immobilized. Escaping your bramble doesn't end the bleed damage.\nHeightened 1 The bleed damage on a critical failure increases by 1d4.",
      "castingTime": "2 actions",
      "range": "100 feet",
      "target": "",
      "area": "5 burst",
      "duration": "1 minute",
      "defense": "reflex save",
      "damage": [],
      "heightening": "Heightened 1 The bleed damage on a critical failure increases by 1d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:song-of-marching",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "LTUaK3smfm5eDiFK",
      "slug": "song-of-marching",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/song-of-marching.webp"
    },
    "sourceHash": "sha256:1d3ec6072584dff94dfdb2c21892057b2469cc100713889c42bea3158bf3e665",
    "translatableHash": "sha256:d20d556995b5e0778701008945843481014611b2570627aba0d59753df5e48b7",
    "data": {
      "schemaVersion": 1,
      "name": "Song of Marching",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "bard",
        "cantrip",
        "composition",
        "concentrate",
        "mental"
      ],
      "traditions": [],
      "description": "You maintain a brisk performance that keeps allies on the move. You and your allies in the area can Hustle for the spell's duration, in addition to your other exploration activities (your exploration activity is Sustaining this spell). You and your allies then become temporarily immune for 1 day.\nIf you enter an encounter while performing this song, you can use your Performance modifier for the initiative roll. You and your affected allies also receive a +1 status bonus to that initiative roll.\nHeightened (6th) You can Sustain the Spell for up to 2 hours.\nHeightened (9th) You can Sustain the Spell for up to 4 hours.",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": "60 emanation",
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (6th) You can Sustain the Spell for up to 2 hours.\nHeightened (9th) You can Sustain the Spell for up to 4 hours."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:ephemeral-tracking",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "QpjHqxwTGdILLvjD",
      "slug": "ephemeral-tracking",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:27f9862b54bd8a6b5e79a9815f8e15c761b38923791b8b8054ad1a09f6050633",
    "translatableHash": "sha256:e897b7ccaa511ab29ccf564acf5942996afb8edbe85ef4356316857ccc5f4248",
    "data": {
      "schemaVersion": 1,
      "name": "Ephemeral Tracking",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate",
        "ranger"
      ],
      "traditions": [],
      "description": "You can look at currents in the air and water and see tracks that you can follow just as you would on land. You can use Survival to Track through both air and water, noticing aerial or aquatic \"tracks\" of all creatures who passed nearby in the last hour. It's more difficult to Track in this way: the DC to Track through air or water is always at least 30, or higher after precipitation or wind (in the air) or heavy tides or currents (in the water). It's possible to Cover Tracks against this spell, but creatures might not realize they need to do so.",
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
    "contentId": "pf2e:spell:spells-srd:malicious-shadow",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "vhMCd15ZwNJn0zen",
      "slug": "malicious-shadow",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/malicious-shadow.webp"
    },
    "sourceHash": "sha256:405898cf12e1dcb1e18fe4f5adfd7b7736489eb37cc13148e2c9ea485711ee28",
    "translatableHash": "sha256:f4874a36988a1724b636ac03fef5deb7feb4f15cef42fd15de04ec3ac2c2a24f",
    "data": {
      "schemaVersion": 1,
      "name": "Malicious Shadow",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "attack",
        "concentrate",
        "focus",
        "hex",
        "manipulate",
        "shadow",
        "witch"
      ],
      "traditions": [],
      "description": "Your patron warps the target's shadow into a deadly form, such as strangling hands, a dangerous weapon, harrying runes, or the like. The shadow moves along with the target, always remaining within reach. When you Cast the Spell, and each time you Sustain it, the shadow Strikes the target. The shadow's Strikes are melee spell attacks that deal 2d10 damage. You choose the type of damage (bludgeoning, piercing, or slashing) when you Cast the Spell. The shadow uses and contributes to your multiple attack penalty. The shadow doesn't take up space, grant flanking, or have any other attributes a creature would. The shadow can't make any attacks other than its Strike.\nThe shadow vanishes if the target ceases to cast a shadow (usually if it moves into complete darkness or light). If another effect is controlling the target's shadow when you cast malicious shadow, you can attempt to counteract that effect to temporarily take control of the shadow for malicious shadow's duration.\nHeightened 2 The Strike damage increases by 1d10.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [
        {
          "formula": "2d10",
          "type": "untyped",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The Strike damage increases by 1d10."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:word-of-freedom",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "2jB9eyX7YekwoCvA",
      "slug": "word-of-freedom",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:89a8c42e2a59a37fc90e51ef56954cf4c33c2af0cf44b66c94e370241879c54a",
    "translatableHash": "sha256:32419052e508f2054dd2875a64a528f9512873068da3af875c3ea74f59bfb846",
    "data": {
      "schemaVersion": 1,
      "name": "Word of Freedom",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "focus",
        "mental"
      ],
      "traditions": [],
      "description": "You utter a liberating word of power that frees a creature. You suppress one of the following conditions of your choice: Confused, Frightened, Grabbed, Paralyzed, or Restrained. The target isn't affected by the chosen condition, and if you suppress the Grabbed or Restrained condition, the target automatically breaks free from the grab or restraint when you Cast the Spell.\nIf you don't remove the effect that provided the condition, the condition returns after the spell ends. For example, if a spell was making the target Confused for 1 minute, word of freedom would let the target act normally for a round, but the Confused condition would return afterward.",
      "castingTime": "1 action",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 round",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:mystic-beacon",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "2SYq0ZTsOtJEigFx",
      "slug": "mystic-beacon",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:4648ca3e4713097d68acc707cd650c74f0b4934176155f727fcdc065174a994a",
    "translatableHash": "sha256:39170df59fc2a8a7c6171f129e89d3b4c0ac68384eb970d7b082ceb7c10832bd",
    "data": {
      "schemaVersion": 1,
      "name": "Mystic Beacon",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "The next damaging or healing spell the target casts before the start of your next turn deals damage or restores Hit Points as if the spell were heightened 1 rank higher than its actual rank. This applies only to initial healing or damage when the spell is cast, not any ongoing effects. The spell otherwise functions at its actual rank. Once the target casts the spell, mystic beacon ends.",
      "castingTime": "1 action",
      "range": "30 feet",
      "target": "1 willing creature",
      "area": null,
      "duration": "until the start of your next turn",
      "defense": null,
      "damage": [],
      "heightening": "heightened 1 rank higher than its actual rank. This applies only to initial healing or damage when the spell is cast, not any ongoing effects. The spell otherwise functions at its actual rank. Once the target casts the spell, mystic beacon ends."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:darkened-sight",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "2WNFbvToMsEGxmeK",
      "slug": "darkened-sight",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:8b20385978b0a6302105e0eb8058eac4f459d241741f1592d1da4365ec05a940",
    "translatableHash": "sha256:83b4187782cc64113b2ec5f6a071c385dea94e1cf1c36e81594ad34ce87fe930",
    "data": {
      "schemaVersion": 1,
      "name": "Darkened Sight",
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
      "description": "You infuse a creature's vision with darkness. It receives greater darkvision, allowing it to see even in magical darkness.\nSpell Effect: Darkened Sight",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:commanding-lash",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "4DaHIgtMBTyxebY3",
      "slug": "commanding-lash",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:774226fa4a35042442bbc78fb9274e68e10025ba6b741e37d108bcfe980f4aa0",
    "translatableHash": "sha256:2c2800d562edb02c1826e921c81ebba5d1c8b3d3c57e9bcc94d7d8bc8a20b96c",
    "data": {
      "schemaVersion": 1,
      "name": "Commanding Lash",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "focus",
        "linguistic",
        "manipulate",
        "mental"
      ],
      "traditions": [],
      "description": "With the threat of more pain, you compel a creature you've recently harmed. You issue a command to the target, with the effects of the spell Command.If the target is Frightened, Stupefied, or taking persistent damage, it takes a –2 circumstance penalty to the save. Regardless of the result, the target is then temporarily immune for 1 hour",
      "castingTime": "1 action",
      "range": "100 feet",
      "target": "A creature you dealt damage to on your most recent action.",
      "area": null,
      "duration": "until the end of your target's next turn",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:rune-of-observation",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "4LSf04FFvDgMyDk6",
      "slug": "rune-of-observation",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:5cb8fb6d39b5a93d7d837bcda0fde40a72767610c26f11892e9f4b760d8c3253",
    "translatableHash": "sha256:364f3b373ef596e1ef4def450bb269d91a13bd547316a40d2244356eff7fefd3",
    "data": {
      "schemaVersion": 1,
      "name": "Rune of Observation",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "wizard"
      ],
      "traditions": [],
      "description": "You inscribe an invisible eye-shaped rune in the air, creating a sensor as Clairvoyance. When created, this eye must be in your line of sight.\nEach time the spell's duration ends, you can spend 1 Focus Point as a free action to extend the duration for another hour, though as normal, it ends immediately during your next daily preparations.",
      "castingTime": "1 action",
      "range": "500 feet",
      "target": "",
      "area": null,
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:rebuke-death",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "4nHYSMHito1GUXlm",
      "slug": "rebuke-death",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/rebuke-death.webp"
    },
    "sourceHash": "sha256:8a800ddce0323941ecba41da8f1d3a54f315a5a4e52f4c87d8cfddd717c2cc61",
    "translatableHash": "sha256:d1ae7ce2fb12bf61e61bfa9494cc34994673a2537ca5075638df2b202be8a43e",
    "data": {
      "schemaVersion": 1,
      "name": "Rebuke Death",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "focus",
        "healing",
        "manipulate",
        "vitality"
      ],
      "traditions": [],
      "description": "You snatch creatures from the jaws of death, restoring them without the straing of a typical close call. You can spend 1 to 3 actions Casting this Spell, and you can target a number of creatures equal to the actions spent. Each target regains 3d6 Hit Points. If the target had the Dying condition, coming back from Dying due to this healing doesn't increase its Wounded condition.\nHeightened 1 Increase the healing by 1d6.",
      "castingTime": "1 to 3 actions",
      "range": "",
      "target": "1 living creature per action spent to Cast this Spell",
      "area": "20 emanation",
      "duration": "",
      "defense": null,
      "damage": [
        {
          "formula": "3d6",
          "type": "untyped",
          "kind": "healing"
        }
      ],
      "heightening": "Heightened 1 Increase the healing by 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:community-restoration",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "6RNymgUvS87lmQOj",
      "slug": "community-restoration",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:b802bb1b3a4bc78b4c123228300282a28e0cc0ddcc1459a9bcc8d890e80c1934",
    "translatableHash": "sha256:ed851515130416fe863816cc705e39a7f3e3ce5d3e71755b76f9ce560ab606bf",
    "data": {
      "schemaVersion": 1,
      "name": "Community Restoration",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "healing",
        "wizard"
      ],
      "traditions": [],
      "description": "Trigger You Cast a Spell from a wizard spell slot, and the spell affects one or more willing allies without damaging them.\nWhen you use your magic to support your allies, shared strength bolsters you all. You gain 2 temporary Hit Points per rank of the triggering spell, and can grant an equal number divided as you choose among allies affected by the triggering spell. These temporary Hit Points last for 1 minute.\nSpell Effect: Community Restoration",
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
    "contentId": "pf2e:spell:spells-srd:destructive-aura",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "7d4DUTDIlzDa8OvX",
      "slug": "destructive-aura",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/destructive-aura.webp"
    },
    "sourceHash": "sha256:dbbf956a16b3d425b86b5e29da156199760ff422bd8707fb9b5295126dd5c8a0",
    "translatableHash": "sha256:1b61577afeddf349bca8abc29d20fc8280f00ddf19ed089602fe8cd30ab47082",
    "data": {
      "schemaVersion": 1,
      "name": "Destructive Aura",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "aura",
        "cleric",
        "concentrate",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "Swirling sands of divine devastation surround you, weakening the defenses of all they touch. Reduce the resistances of yourself and creatures in the area by 2.\nHeightened 2 Reduce the resistances by an additional 2.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "15 emanation",
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 2 Reduce the resistances by an additional 2."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:lucky-break",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "7OwZHalOdRCRnFmZ",
      "slug": "lucky-break",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:2f2d153e76ad7e54e0c8152c35bddf99181af9441aa78b15bca17659e9dd8a71",
    "translatableHash": "sha256:31c1c2f793498d59e1de32d86f914929e4d15bc795f6072c640bf51bb5938b25",
    "data": {
      "schemaVersion": 1,
      "name": "Lucky Break",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "focus",
        "fortune"
      ],
      "traditions": [],
      "description": "Trigger You fail, but don't critically fail, a saving throw.\nReroll the saving throw and use the better result. You then become temporarily immune for 10 minutes.",
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
    "contentId": "pf2e:spell:spells-srd:perfected-body",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "8ifpNZkaxrbs3dBJ",
      "slug": "perfected-body",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/perfected-form.webp"
    },
    "sourceHash": "sha256:7e0b4b78dc3397397cd1d7894e6fbfa8e8357ea1da4820dfc8fc39c6bf51648f",
    "translatableHash": "sha256:511aa3c3514119cf887929051593a06d1411884f642bf38a14592089eeee3150",
    "data": {
      "schemaVersion": 1,
      "name": "Perfected Body",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "Trigger You fail or critically fail a saving throw against an effect that has the morph, poison, or polymorph trait, or that would make you Clumsy, Doomed, Enfeebled, Petrified, or Sickened.\nYour body's perfection keeps you just a little bit healthier than most. You get a failure if you rolled a critical failure or a success if you rolled a failure.",
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
    "contentId": "pf2e:spell:spells-srd:precious-metals",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "APTMURAW1N0Wpk4w",
      "slug": "precious-metals",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/precious-metals.webp"
    },
    "sourceHash": "sha256:1a4f450c197fd746fbae332ff60100a6c6570f66675193d178d2d9d5fa846ea4",
    "translatableHash": "sha256:40eade1e32d6a0a012ecf00a11d38d7fdf7bbfcdf1752153087c2f4b272a9b5e",
    "data": {
      "schemaVersion": 1,
      "name": "Precious Metals",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "focus",
        "manipulate",
        "metal"
      ],
      "traditions": [],
      "description": "Your deity blesses base metals to transform them into precious materials. The metal in the target transforms from its normal metal into cold iron, copper, gold, iron, silver, or steel. If the spell's rank is 8th or higher, add adamantine and dawnsilver to the options. If you transform an object into copper, gold, or silver, its Hardness is reduced to 1. Otherwise, its Hardness is increased to 10 if it was lower. An item transmuted in this way deals damage according to its new material. For example, a steel sword transmuted to cold iron would deal additional damage to a creature with a weakness to cold iron. It can have other effects of the new material at the GM's discretion.\nThis change is clearly magical and temporary, so the item's monetary value doesn't change; you couldn't transmute copper coins to gold and use them to purchase something.\nSpell Effect: Precious Metals\nHeightened 1 If you increase the Hardness of the object, the new Hardness is 2 higher.",
      "castingTime": "1 action",
      "range": "touch",
      "target": "1 metal shield or weapon, 1 suit of metal armor, or up to 1 Bulk of metal material (such as coins or metal-tipped ammunition)",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 If you increase the Hardness of the object, the new Hardness is 2 higher."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:localized-quake",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "cBUuG1yJHGeKffpg",
      "slug": "localized-quake",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/localized-quake.webp"
    },
    "sourceHash": "sha256:84fc025fa69fc21827d475709e30841d720a481d3f1c127e070b82b11acbedbc",
    "translatableHash": "sha256:e8d538046bcd81ab8609f51809610af510e37f795ee2517dca6b8e24a5e82a00",
    "data": {
      "schemaVersion": 1,
      "name": "Localized Quake",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "earth",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "You shake the earth, toppling nearby creatures. Choose whether the spell's area is a 15-foot emanation or a 15-foot cone when you cast it. Each creature in the area standing on solid ground takes 4d6 bludgeoning damage with a basic Reflex saving throw. A creature that fails its save also falls prone.\nHeightened 1 Increase the damage by 2d6.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "4d6",
          "type": "bludgeoning",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 Increase the damage by 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:protectors-sphere",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "DH9Y3RQGWO0GzXGU",
      "slug": "protectors-sphere",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:f360e7c2c0ae677ac4fc899bc18503f07675d46d648518fb2eef77627938bcd7",
    "translatableHash": "sha256:43c216a3e54d0a6c565e9f8c42ee9df908392b258a3e8d0bb397362e451a5257",
    "data": {
      "schemaVersion": 1,
      "name": "Protector's Sphere",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "aura",
        "cleric",
        "concentrate",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "A protective aura emanates out from you, safeguarding you and your allies. You gain resistance 3 to all damage. Your allies also gain this resistance while in the area.\nAura: Protector's Sphere\nHeightened 1 The resistance increases by 1.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "15 emanation",
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 The resistance increases by 1."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:artistic-flourish",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "eb4FXf62NYArTqek",
      "slug": "artistic-flourish",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:af690476c1338f4f4eaa35924a3bd1a97ed328f22bfb17a17928b93f616185a3",
    "translatableHash": "sha256:e406ab1b4d103c17a9075a6f543e37182cb069332509d29f7b105a062faddded",
    "data": {
      "schemaVersion": 1,
      "name": "Artistic Flourish",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "You transform the target into a form that more closes matches your creative vision. It's clearly the same item, but with aesthetic details you choose. The target is a beautiful and impressive piece for its new quality, but the effect is obviously magical and temporary, so its monetary value doesn't change. If you're an expert in Crafting, the item grants a +1 item bonus to attack rolls if it's a weapon or skill checks if it's a skill tool. When you Cast this Spell, any previous casting ends.\nHeightened (7th) If you're a master in Crafting, the item grants a +2 item bonus.\nHeightened (10th) If you're legendary in Crafting, the item grants a +3 item bonus.",
      "castingTime": "2 actions",
      "range": "15 feet",
      "target": "1 item or work of art that fits entirely within the range",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (7th) If you're a master in Crafting, the item grants a +2 item bonus.\nHeightened (10th) If you're legendary in Crafting, the item grants a +3 item bonus."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:enduring-might",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "eG1fBodYwolaXK98",
      "slug": "enduring-might",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/enduring-might.webp"
    },
    "sourceHash": "sha256:e75d1c39b2fda44f2fa7f36542bc2a4b144cf67cb5bc241ddc50be73ce295982",
    "translatableHash": "sha256:10804cf66ef7c1e7535b669e7a6bb5a191dc9f7254c0b3b01de2318e853c6001",
    "data": {
      "schemaVersion": 1,
      "name": "Enduring Might",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "Trigger An attack or effect would deal damage to you.\nYour own might mingles with divine power to protect you from harm. You gain resistance equal to 8 plus your Strength modifier against all damage from the triggering attack or effect.\nSpell Effect: Enduring Might\nHeightened 1 The resistance increases by 2.",
      "castingTime": "reaction",
      "range": "",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 The resistance increases by 2."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:tempt-fate",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "GqvKSxzN7A7kuFk4",
      "slug": "tempt-fate",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:2267364d41c7f2ced74f4ea84337fb5586837b0ea01f0880960b9d37234a0d92",
    "translatableHash": "sha256:78d18dc17b6da5b17860084ae7691570bb915cccc5db68084d0cdd4b86eb78da",
    "data": {
      "schemaVersion": 1,
      "name": "Tempt Fate",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "focus",
        "fortune",
        "manipulate"
      ],
      "traditions": [],
      "description": "Trigger You or an ally within range attempts a saving throw.\nYou twist the forces of fate to make a moment dire or uneventful, with no in-between. The target gains a +1 status bonus to the triggering saving throw. If the saving throw's result is a success, it becomes a critical success. If it's a failure, it becomes a critical failure, and the critical failure can't be reduced by abilities that usually reduce critical failure.\nIf the triggering ability did not have both a critical success and critical failure condition, tempt fate fails, but you don't expend the Focus Point for Casting this Spell.\nSpell Effect: Tempt Fate\nHeightened (8th) The bonus on the saving throw is +2.",
      "castingTime": "reaction",
      "range": "120 feet",
      "target": "the triggering creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (8th) The bonus on the saving throw is +2."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:stormwind-flight",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "gSFg9zKwgcNZLMEs",
      "slug": "stormwind-flight",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:ed53942ab70c4a56e23c3381961b14780ded2b8b6a59bdf4bafc50b873e7c047",
    "translatableHash": "sha256:845e001ca48a4f314f6db58bb4ae82c58dcd1929707a31bf51cd2e16c06a8866",
    "data": {
      "schemaVersion": 1,
      "name": "Stormwind Flight",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "air",
        "concentrate",
        "druid",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "Powerful winds carry you smoothly through the air, giving you a fly Speed equal to your Speed. When this spell's duration would end, if you're still flying, you float to the ground, as Gentle Landing.\nSpell Effect: Stormwind Flight\nHeightened (6th) When you fly using stormwind flight, you ignore difficult terrain from wind.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (6th) When you fly using stormwind flight, you ignore difficult terrain from wind."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:zeal-for-battle",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "I8CPe9Pp7GABqOyB",
      "slug": "zeal-for-battle",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/zeal-for-battle.webp"
    },
    "sourceHash": "sha256:a348e2e8e15d279934e70860d821caeaac55d12612a2c585077275b4aca4a2d8",
    "translatableHash": "sha256:2d9add658e749fecab239c32264d53541437e3e2f88f0bc9e9d92bdd3b9df18b",
    "data": {
      "schemaVersion": 1,
      "name": "Zeal for Battle",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "emotion",
        "focus",
        "fortune",
        "mental"
      ],
      "traditions": [],
      "description": "Trigger You and at least 1 ally are about to roll initiative.\nYou stoke the righteous anger within yourself and an ally. You and the target ally each roll a d20 and use the higher result for both your initiative rolls. You each still use your own Perception modifier or other statistic to determine your results.",
      "castingTime": "reaction",
      "range": "10 feet",
      "target": "you and the triggering ally",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:pulse-of-civilization",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ivKnEtI1z4UqEKIA",
      "slug": "pulse-of-civilization",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:51ea5c3fca0493406f6bbb5b12d296b66a2010dc9c2226b5dd9833428d5c5e58",
    "translatableHash": "sha256:71af1033bec79fd546aed4625070e6ab823c6ab9c1b3cee7151dd7dffff6b9a2",
    "data": {
      "schemaVersion": 1,
      "name": "Pulse of Civilization",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "focus",
        "manipulate",
        "scrying"
      ],
      "traditions": [],
      "description": "You tap into the zeitgeist of any settlements in range. You learn the names of the settlements. On all Lore checks to Recall Knowledge about those settlements or to Gather Information in or about those settlements, you gain a +2 status bonus and use your level as your proficiency bonus even if you're untrained. When you Cast the Spell, you can immediately Recall Knowledge about one of the settlements using its Lore skill (such as Absalom Lore), which benefits from the bonus. If you cast pulse of civilization again, any previous casting ends.\nHeightened (5th) The range is 100 miles.\nHeightened (7th) The range is 500 miles and the bonus is +3",
      "castingTime": "2 actions",
      "range": "25 miles",
      "target": "",
      "area": null,
      "duration": "8 hours",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (5th) The range is 100 miles.\nHeightened (7th) The range is 500 miles and the bonus is +3"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:eradicate-undeath",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "J5MNC4xq3CHH31qT",
      "slug": "eradicate-undeath",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/eradicate-undeath.webp"
    },
    "sourceHash": "sha256:e4543dd503239822e2e1a4e01999630969931ad9c1034f9de60dc090ef7e397d",
    "translatableHash": "sha256:1921f91066214ebdc6c0b901d954bf6075be31d892739f8e0362a4873643e9dc",
    "data": {
      "schemaVersion": 1,
      "name": "Eradicate Undeath",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "focus",
        "manipulate",
        "vitality"
      ],
      "traditions": [],
      "description": "A massive deluge of life energy causes the undead to fall apart. Each undead creature in the area takes 4d12 vitality damage.\nHeightened 1 The damage increases by 1d12.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "30 cone",
      "duration": "",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "4d12",
          "type": "vitality",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 1d12."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:delusional-pride",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "J8pL8yTshga8QOk8",
      "slug": "delusional-pride",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/delusional-pride.webp"
    },
    "sourceHash": "sha256:3542e3876de12ff9bc55a6064bbf746fc6d8c2f3eee985ade2ee9866ffe4fbcd",
    "translatableHash": "sha256:724ffebe82266c09c56455466ec0bf7844e0e4603f67d364033298aae0f86faf",
    "data": {
      "schemaVersion": 1,
      "name": "Delusional Pride",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "emotion",
        "focus",
        "manipulate",
        "mental"
      ],
      "traditions": [],
      "description": "You make the target overconfident, leading it to ascribe failure to external factors. The target attempts a Will save to determine the spell's duration and is temporarily immune for 24 hours regardless of the save's result.\nCritical Success The target is unaffected.\nSuccess The duration is 1 round. If the target fails at an attack roll or skill check, it takes a –1 status penalty to attack rolls and skill checks until the end of its turn (or the end of its next turn, if it attempted the roll outside its turn). If the creature fails a second time while taking this penalty, the penalty increases to –2.\nFailure As success, but the duration is 10 minutes.\nCritical Failure As success, but the duration is 24 hours.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "varies",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:captivating-adoration",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "jJphHQlENHFlSElH",
      "slug": "captivating-adoration",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/captivating-adoration.webp"
    },
    "sourceHash": "sha256:cbc2d9330a2e148c66003d36b3d9caed52ee6c9a3f9c12e8db5fc297275e120f",
    "translatableHash": "sha256:1846e69e38e373f835aa2d73574955807e6a9f503ca50f23bee50adc5461268d",
    "data": {
      "schemaVersion": 1,
      "name": "Captivating Adoration",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "aura",
        "cleric",
        "concentrate",
        "emotion",
        "focus",
        "manipulate",
        "mental",
        "visual"
      ],
      "traditions": [],
      "description": "You become intensely entrancing, and creatures are distracted by you as long as they remain within the area. You can exclude any creatures you choose from the effects. If a creature is in the aura when you Cast the Spell or when a creature enters the area for the first time, it must attempt a Will saving throw. If a creature leaves and reenters, it uses the results of its original save.\nCritical Success The creature is unaffected and temporarily immune for 1 hour.\nSuccess The creature is Fascinated with you for its next action, then is temporarily immune for 1 hour.\nFailure The creature is Fascinated with you.\nCritical Failure The creature is Fascinated with you, and its attitude toward you improves by one step.\nHeightened 1 Increase the size of the emanation by 15 feet.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "15 emanation",
      "duration": "1 minute",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened 1 Increase the size of the emanation by 15 feet."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:downpour",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "K4LXpaBWrGy6jIER",
      "slug": "downpour",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:8307760608c6fbe3f630442c96b3aa7ba3654be1c989200245700ea43a54d9ff",
    "translatableHash": "sha256:076c32e49eb57abc139182bf4d6e3949597ba87dcbb666ccd4b1b1f2b4340797",
    "data": {
      "schemaVersion": 1,
      "name": "Downpour",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "focus",
        "manipulate",
        "water"
      ],
      "traditions": [],
      "description": "You call forth a torrential downpour, which extinguishes non-magical flames. Creatures in the area are Concealed and gain fire resistance 10. Creatures outside the area are Concealed to those inside the area. If a creature with weakness to water ends its turn in the area, the downpour triggers its weakness.\nSpell Effect: Downpour\nHeightened 1 The fire resistance increases by 2.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "",
      "area": "30 burst",
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 The fire resistance increases by 2."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:fortissimo-composition",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "kF0rs9mCPvJGfAZE",
      "slug": "fortissimo-composition",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/inspire-heroics.webp"
    },
    "sourceHash": "sha256:242c0275d31a29e1ff43a2b15461a75e4e789efa451db2b4663110106cbf3a78",
    "translatableHash": "sha256:16bdbae82e171f384d65e4a9925145d24f0e965624bdac408606b8c0c9b6ac06",
    "data": {
      "schemaVersion": 1,
      "name": "Fortissimo Composition",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "bard",
        "concentrate",
        "focus",
        "spellshape"
      ],
      "traditions": [],
      "description": "You call upon your muse to greatly increase the benefits you provide with your courageous anthem, rallying anthem, or song of strength composition. If your next action is to cast one of these compositions, attempt a check (performance, against:will) check. The DC is usually the highest Will DC of the composition's targets, but the GM can assign a different DC based on the circumstances. The effect of your composition depends on the result of your check.\nSpell Effect: Fortissimo Composition\nCritical Success The status bonus from your composition increases to +3.\nSuccess The status bonus from your composition increases to +2.\nFailure Your composition provides only its normal bonus of +1, but you don't spend the Focus Point for casting this spell.",
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
    "contentId": "pf2e:spell:spells-srd:spiral-of-horrors",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "KPGGkyBFbKse7KpK",
      "slug": "spiral-of-horrors",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/dread-aura.webp"
    },
    "sourceHash": "sha256:b30a1a71754c7099cc6327203590c208a3ff10fadeeb99379ecf8ee62a554a12",
    "translatableHash": "sha256:bfdc10ef93f1f6fbc30e7a9766d15701af48ed3649c208046cac7032c1007407",
    "data": {
      "schemaVersion": 1,
      "name": "Spiral of Horrors",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "aura",
        "concentrate",
        "emotion",
        "fear",
        "focus",
        "manipulate",
        "mental",
        "wizard"
      ],
      "traditions": [],
      "description": "Shades and spirits howl and whirl around you in a display that strikes fear into the hearts of all who witness it. Enemies in the area are Frightened 1 and can't reduce their frightened value below 1 for the spell's duration.\nAura: Spiral of Horrors",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "30 emanation",
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:know-the-enemy",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "l6zjNysNedpJcmDT",
      "slug": "know-the-enemy",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:9115f129cf4c4473486b0c346be4f827bd188bebfbf318cb6ba0c10e76ee046f",
    "translatableHash": "sha256:7f9559b06b32f8d26c1cdad39b90e88d1b2e35528fcb38f90cd984ada2224c6b",
    "data": {
      "schemaVersion": 1,
      "name": "Know the Enemy",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "focus",
        "fortune",
        "manipulate"
      ],
      "traditions": [],
      "description": "Trigger You roll initiative and can see a creature, you succeed at an attack roll against a creature, or a creature fails a saving throw against one of your spells.\nYou quickly remind yourself of useful information. Use a Recall Knowledge action, rolling the appropriate skill check to identify the triggering creature's abilities. You can roll your check twice and use the better result.",
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
    "contentId": "pf2e:spell:spells-srd:disperse-into-air",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "L8pzCOi7Jzx5ALs9",
      "slug": "disperse-into-air",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/disperse-into-air.webp"
    },
    "sourceHash": "sha256:685c2c1237374f84840e1822cc6cfddba84a0e85331750e077194cca334df47d",
    "translatableHash": "sha256:9c3dc2e7a4363d57de5641529c044e0fb5cf410f44b5195e0e873be13fde0304",
    "data": {
      "schemaVersion": 1,
      "name": "Disperse into Air",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "air",
        "cleric",
        "focus",
        "manipulate",
        "polymorph"
      ],
      "traditions": [],
      "description": "Trigger You take damage from an enemy or a hazard.\nAfter taking the triggering damage, you transform into air. Until the end of the current turn, you can't be attacked or targeted, you don't take up space, you can't act, and any auras or emanations you have are suppressed. At the end of the turn, you re-form in any space you can occupy within 15 feet of where you were when you dispersed. Any auras or emanations you had are restored as long as their duration didn't run out while you were dispersed.",
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
    "contentId": "pf2e:spell:spells-srd:energy-absorption",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "LoBjvguamA12iyW0",
      "slug": "energy-absorption",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:cbd073b126f00b5717174aaa8c14140b20cbb281973db400c5a5a8c253743768",
    "translatableHash": "sha256:270e3135c6a9e2d72dff58e097d123dc8fe23513af09bbef53520971675e30f9",
    "data": {
      "schemaVersion": 1,
      "name": "Energy Absorption",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "focus",
        "wizard"
      ],
      "traditions": [],
      "description": "Trigger An effect would deal acid, cold, electricity, or fire damage to you\nYou're used to mitigating the damage done by bombs, siege engines, and magical artillery. You gain resistance 15 to your choice of acid, cold, electricity, or fire damage from the triggering effect. The resistance applies only to the triggering effect's initial damage.\nSpell Effect: Energy Absorption\nHeightened 1 The resistance increases by 5.",
      "castingTime": "reaction",
      "range": "",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 The resistance increases by 5."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:travelers-transit",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "LrhTFHUtSS9ahogL",
      "slug": "travelers-transit",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/travelers-transit.webp"
    },
    "sourceHash": "sha256:c18cb009b6028d8c3c2ee5ea42b302151fd38d82253125da2cb4f2b551b26492",
    "translatableHash": "sha256:fcd6e37f15c4889362ce2334513cd8aaae40cfc5b1b790c29ae066c97c45a90b",
    "data": {
      "schemaVersion": 1,
      "name": "Traveler's Transit",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "You add power to your muscles, allowing you to swim or climb walls with ease. When you Cast this Spell, you gain either a climb Speed or a swim Speed. The Speed is equal to your land Speed.\nHeightened (5th) You can choose to gain a fly Speed.\nSpell Effect: Traveler's Transit",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "5 minutes",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (5th) You can choose to gain a fly Speed.\nSpell Effect: Traveler's Transit"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:competitive-edge",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "NOB92Wpn7jXvtyVW",
      "slug": "competitive-edge",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/competitive-edge.webp"
    },
    "sourceHash": "sha256:fccb146685958fbe6e12f37bc48ecf71616d4690e9fa88c625716e091a507220",
    "translatableHash": "sha256:1d55be8bf0af550eb85103b36dd423a4908adf0c388b84e8369f066667e5eef4",
    "data": {
      "schemaVersion": 1,
      "name": "Competitive Edge",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "emotion",
        "focus",
        "mental"
      ],
      "traditions": [],
      "description": "Your competitiveness drives you to prove yourself against the opposition. You gain a +1 status bonus to attack rolls and skill checks. If an enemy within 20 feet critically succeeds at an attack roll or skill check, your status bonus increases to +3 for attack rolls or that specific skill check (whichever the foe critically succeeded at) for 1 round.\nSpell Effect: Competitive Edge\nHeightened (7th) Increase the base bonus to +2 and the increased bonus after an enemy critically succeeds to +4.",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (7th) Increase the base bonus to +2 and the increased bonus after an enemy critically succeeds to +4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:invisibility-cloak",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Nun72GTmb31YqSKh",
      "slug": "invisibility-cloak",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/invisibility-cloak.webp"
    },
    "sourceHash": "sha256:32699769dd8b4993455940e03e0214ad7b2487c30f03105eab85472ec8e41942",
    "translatableHash": "sha256:717a6a7b10897f3b3ea0ee06d72035cc396017b389a0dcfd450004107023a2be",
    "data": {
      "schemaVersion": 1,
      "name": "Invisibility Cloak",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "focus",
        "illusion",
        "manipulate",
        "wizard"
      ],
      "traditions": [],
      "description": "You become Invisible, with the same restrictions as the 2nd-rank Invisibility spell.\nHeightened (6th) The duration increases to 10 minutes.\nHeightened (8th) The duration increases to 1 hour.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (6th) The duration increases to 10 minutes.\nHeightened (8th) The duration increases to 1 hour."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:safeguard-secret",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "OsrtOeG0TvDNnEFH",
      "slug": "safeguard-secret",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:36b4fa916d6d0d9261c8ac11fd755524ab2eaeedfaa49edee196c495d3fd991d",
    "translatableHash": "sha256:c66722f4c49053d21454d411b1f82dd418c87498cd7b4d36c19d4739b478a381",
    "data": {
      "schemaVersion": 1,
      "name": "Safeguard Secret",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "focus",
        "manipulate",
        "mental"
      ],
      "traditions": [],
      "description": "You ensure a secret remains safe from prying spies. Choose one piece of information that at least some of the targets know, such as \"the location of the stolen treasure\" or \"the password to enter the guild house.\" The spell grants those who know the piece of knowledge you have chosen a +4 status bonus to skill checks (typically Deception checks) to conceal this knowledge, and to saving throws against spells that specifically attempt to obtain this knowledge from them, and to effects that would force them to reveal it.\nIf you Cast this Spell again, any previous safeguard secret you had cast ends.\nSpell Effect: Safeguard Secret",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "you and any number of willing allies",
      "area": null,
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:touch-of-the-moon",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "oXCwHBeDja4e0Mx0",
      "slug": "touch-of-the-moon",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/touch-of-the-moon.webp"
    },
    "sourceHash": "sha256:bdf998288b305d576ed0b7c1379d2b97678867a71beed373a913bf780db8654a",
    "translatableHash": "sha256:eff13f351ead3a71eab142fffa52bd10c90d0e86eaa7e222e34922e78b23fee3",
    "data": {
      "schemaVersion": 1,
      "name": "Touch of the Moon",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "focus",
        "light",
        "manipulate"
      ],
      "traditions": [],
      "description": "When you touch the target, a symbol of the moon appears on its forehead, glowing with soft moonlight. The target glows with dim light in a 20-foot radius. It also gets a benefit based on a phase of the moon, starting with the new moon and changing to the next phase at the end of each of its turns.\n• New Moon The target receives no benefit.\n• Waxing Moon The target gains a +1 status bonus to attack rolls and a +4 status bonus to damage rolls.\n• Full Moon The target gains a +1 status bonus to attack rolls, AC, and saves, and a +4 status bonus to damage.\n• Waning Moon The target gains a +1 status bonus to AC and saving throws. After this phase, return to the new moon.\nSpell Effect: Touch of the Moon",
      "castingTime": "1 action",
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
    "contentId": "pf2e:spell:spells-srd:dreamers-call",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "PztLrElcZfLwRnEq",
      "slug": "dreamers-call",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:65969084149c41c9938df7d4ef1b9889413cbccaf3c735aea038b401b1dfa401",
    "translatableHash": "sha256:df5fd9f7b677dbbcb82d613d39734c3dce7e67d54fb86023a28285effb9d829e",
    "data": {
      "schemaVersion": 1,
      "name": "Dreamer's Call",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "focus",
        "illusion",
        "incapacitation",
        "manipulate",
        "mental"
      ],
      "traditions": [],
      "description": "You create a vivid, illusory daydream drawn from the images of the target's dreams. The daydream appears in an unoccupied space in range, and you attempt to draw the target toward it.\nCritical Success The target is unaffected.\nSuccess The target's attention wavers. It becomes Fascinated by the daydream.\nFailure The target is fascinated with the daydream and pursues a course of action you choose as its first action after you Cast the Spell: approach the daydream, run away from it (as the Fleeing condition), Release what it's holding as an offering, or Drop Prone in obeisance.\nCritical Failure As failure, but the target follows the course of action for as many actions as possible for the spell's duration, and does nothing else.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "until the end of the target's next turn",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:malignant-sustenance",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "qzsQmpiQodHBBWYI",
      "slug": "malignant-sustenance",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/malignant-sustenance.webp"
    },
    "sourceHash": "sha256:1693fc811eb34e4284897d5bed609bdba2ed5dd308d0036041fbc887ee9218a5",
    "translatableHash": "sha256:c1e7859af64b82adf5d176eb2e78bf4a87b12540e0fd42cc5177f3f9a8d40829",
    "data": {
      "schemaVersion": 1,
      "name": "Malignant Sustenance",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "focus",
        "manipulate",
        "void"
      ],
      "traditions": [],
      "description": "You embed a seed of void energy in an undead creature, restoring its unnatural vigor. The target gains fast healing 7.\nSpell Effect: Malignant Sustenance\nHeightened 1 The fast healing increases by 2.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 willing undead creature",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 The fast healing increases by 2."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:shifting-form",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "SDkIFrrO1PsE02Kd",
      "slug": "shifting-form",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:c9dee2017de0212ab25639c5c832a12f18ffe447a15f58a4846a83c8cc6673a4",
    "translatableHash": "sha256:2becba6187da0f50153c869467942149a11e7f37316a62114a256af7461404d5",
    "data": {
      "schemaVersion": 1,
      "name": "Shifting Form",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "focus",
        "manipulate",
        "morph",
        "wizard"
      ],
      "traditions": [],
      "description": "You change your body to better suit the moment. You gain one of the following abilities of your choice. You can Dismiss this spell.\n• You gain a 20-foot status bonus to your Speed.\n• You gain a climb or swim Speed equal to half your Speed.\n• You gain darkvision.\n• You gain a pair of claws. These are agile finesse unarmed attacks that deal 1d8 slashing damage.\n• You gain scent 60 feet (imprecise).\nSpell Effect: Shifting Form",
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
    "contentId": "pf2e:spell:spells-srd:interdisciplinary-incantation",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "sGenGMmE1ntkXCtN",
      "slug": "interdisciplinary-incantation",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:0d35324f786e6af201cdec572f34290bb73aeb5079259a356edf6b26ef907bbd",
    "translatableHash": "sha256:67af723d9f1774cb38b3631ea76978507111c7d3bb05777ad3bde12cc18c69f1",
    "data": {
      "schemaVersion": 1,
      "name": "Interdisciplinary Incantation",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "wizard"
      ],
      "traditions": [],
      "description": "Trigger A creature within 30 feet casts an arcane spell.\nYou gather the embers of another caster's spell, using your understanding of unified magic to pick apart their formulas and incantations well enough to imitate the spell yourself, if only for a short time. Until the end of your next turn, you can Cast the triggering Spell by expending a wizard spell slot of the same rank. That caster's spells can't trigger your interdisciplinary incantation again for 24 hours.",
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
    "contentId": "pf2e:spell:spells-srd:shared-nightmare",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "skvgOWNTitLehL0b",
      "slug": "shared-nightmare",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/shared-nightmare.webp"
    },
    "sourceHash": "sha256:3a20c2c946b4570b8e57d5c666ec06d5cc7933248a7012434dfe739527ebc532",
    "translatableHash": "sha256:3d1e39c9a2227c2fb5d9bb814366dc3ffe3635d95b8756531370511921447e5f",
    "data": {
      "schemaVersion": 1,
      "name": "Shared Nightmare",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "emotion",
        "focus",
        "incapacitation",
        "manipulate",
        "mental"
      ],
      "traditions": [],
      "description": "Merging minds with the target, you swap distressing visions. One of you will become Confused, based on the target's Will save.\nCritical Success You are Confused for 1 round.\nSuccess At the start of your next turn, you spend your first action with the Confused condition, then act normally.\nFailure The target spends the first action of each of its turns Confused. The duration is 1 minute.\nCritical Failure The target is Confused. The duration is 1 minute.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "varies",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:retributive-pain",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "SSsUC7rZo0CwayPn",
      "slug": "retributive-pain",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/retributive-pain.webp"
    },
    "sourceHash": "sha256:759ee0cf037badd69a191d8c1ff8f80d56b7f3ddcafd9569c94b7303671382eb",
    "translatableHash": "sha256:b7c33496b8bc08c161171e7cf74ce7321c64193ac832634b0fd7b28512d901ce",
    "data": {
      "schemaVersion": 1,
      "name": "Retributive Pain",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "focus",
        "manipulate",
        "mental",
        "nonlethal"
      ],
      "traditions": [],
      "description": "Trigger A creature in range damages you.\nYou vengefully reflect your pain upon your tormentor. The target takes mental damage equal to half the triggering damage.",
      "castingTime": "reaction",
      "range": "30 feet",
      "target": "the triggering creature",
      "area": null,
      "duration": "",
      "defense": "basic fortitude save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:unity",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "tYLBjOTvBVn9JtRb",
      "slug": "unity",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:6e30a47f621c8355032b5dfbfc4a486c0f5dfd3355e54934864085bce69459df",
    "translatableHash": "sha256:0334e66a6336c516ca9d84f43406a2e10068481a59f1bd99527ac7180e9ae375",
    "data": {
      "schemaVersion": 1,
      "name": "Unity",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "focus",
        "fortune"
      ],
      "traditions": [],
      "description": "Trigger You and 1 or more allies within range are targeted by a spell or ability that allows a saving throw.\nYou put up a united defense. Each ally can use your saving throw modifier instead of its own against the triggering spell. Each ally decides individually which modifier to use.",
      "castingTime": "reaction",
      "range": "30 feet",
      "target": "each ally targeted by the triggering spell",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:natures-bounty",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "vSSKyUdrHu86E5Gk",
      "slug": "natures-bounty",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/natures-bounty.webp"
    },
    "sourceHash": "sha256:39dd367b24c3fd95b86e3a9eacf368c6f2851ad7c35489b63a33745529b58465",
    "translatableHash": "sha256:6d7dea4f95e524fbfdb5c0253710089aa2b3da9188417b769bcc4541e3566234",
    "data": {
      "schemaVersion": 1,
      "name": "Nature's Bounty",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "focus",
        "manipulate",
        "plant",
        "vitality"
      ],
      "traditions": [],
      "description": "A palm-sized raw fruit or vegetable of your choice appears in your open hand. A creature can consume the food with an Interact action to regain 3d10+12 Hit Points and be nourished as if it had eaten a meal. If uneaten, the food crumbles to dust after 1 minute.\nHeightened 1 The Hit Points restored increase by 6.",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [
        {
          "formula": "3d10+12",
          "type": "vitality",
          "kind": "healing"
        }
      ],
      "heightening": "Heightened 1 The Hit Points restored increase by 6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:flame-barrier",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "y7Tusv3CieZktkkV",
      "slug": "flame-barrier",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/flame-barrier.webp"
    },
    "sourceHash": "sha256:1cdbfd566fa714072ea139bbf97a928c59b4f0c8b6dd0dd9f1f64b55437bb135",
    "translatableHash": "sha256:43311a8512426d883172bd4121d237aab7834a5fc17aad041a5dc279d66d25e1",
    "data": {
      "schemaVersion": 1,
      "name": "Flame Barrier",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "focus"
      ],
      "traditions": [],
      "description": "Trigger An effect would deal fire damage to either you or an ally within range.\nYou swiftly deflect incoming flames. The target gains fire resistance 15 against the triggering effect.\nSpell Effect: Flame Barrier\nHeightened 2 The resistance increases by 5.",
      "castingTime": "reaction",
      "range": "30 feet",
      "target": "the creature that would take fire damage",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 2 The resistance increases by 5."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:take-its-course",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ZeHeNQ5BNq6m5F1j",
      "slug": "take-its-course",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:d82a5c245da884a7869cbf6da6c3feff9d49e21274d9d392a6110b9d07f92e6e",
    "translatableHash": "sha256:7bf3ea832aa6d9fd12126f72367175ba58491274eae38acff4a9832c62b5a7df",
    "data": {
      "schemaVersion": 1,
      "name": "Take its Course",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "When someone has overindulged, you can hasten them past the worst of their affliction or intensify their misery. This spell attempts to progress a disease affliction, a poison affliction, or persistent poison damage affecting the target. If the target is affected by more than one of these, you can choose from among those you are aware of; otherwise the GM chooses randomly. An unwilling target can attempt a Will save to negate take its course.\nThe effect of this spell depends on whether you're attempting to end an affliction or persistent poison damage, and whether you are attempting to help or hinder the target's recovery.\n• Affliction The target immediately attempts its next saving throw against the affliction. You can grant the creature your choice of a +2 status bonus or a -2 status penalty to its saving throw against the affliction.\n• Persistent Poison You can cause the target take the persistent poison damage immediately when you Cast this Spell (in addition to taking it at the end of its next turn). Whether or not you do so, the target attempts an additional flat check against the persistent poison damage. You can set the DC of that flat check to 5 or 20 instead of the normal DC.\nHeightened (7th) You can attempt to progress any number of the target's eligible afflictions and persistent poison damage.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened (7th) You can attempt to progress any number of the target's eligible afflictions and persistent poison damage."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:tricksters-twin",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ZhLYJlOZzUB1OKoe",
      "slug": "tricksters-twin",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/tricksters-twin.webp"
    },
    "sourceHash": "sha256:e686676b7b61742d0e46ce659f6bcdb8fd7141c6b739fcc2c4949083a6dcece8",
    "translatableHash": "sha256:26144674f17a7877ebe5a03871de45aff895f1357a63a5ad7d419a9d85eb4f16",
    "data": {
      "schemaVersion": 1,
      "name": "Trickster's Twin",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "focus",
        "illusion",
        "manipulate",
        "visual"
      ],
      "traditions": [],
      "description": "You rarely settle for being in just one place. Choose a location within 100 feet of the target that the target can see. You create an illusion of yourself there that only it can see and that mimics all your actions. The target must attempt a Will save.\nCritical Success The target is unaffected.\nSuccess The target believes you're in the designated location and can't see you in your actual location. The target automatically disbelieves the illusion when you use an action that doesn't make sense in the illusion's position, or if the target attacks, touches, Seeks, or otherwise engages with the illusion. If you use a hostile action against the target, the spell ends.\nFailure As success, but the target must succeed at a Will save to disbelieve the illusion when one of the listed events occurs.\nCritical Failure As success, but the target must critically succeed at a Will save to disbelieve when one of the listed events occurs.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:glimpse-the-truth",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ZjbVgIIqMstmdkqP",
      "slug": "glimpse-the-truth",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/glimpse-the-truth.webp"
    },
    "sourceHash": "sha256:27e374b6e905a81a408445107b84276a6c399236238eeb3624d88c1e10ad9ec9",
    "translatableHash": "sha256:8d195477e2608680cbf665ed81711f96c6a5f2bd2c0b947a449a10449e35c21c",
    "data": {
      "schemaVersion": 1,
      "name": "Glimpse the Truth",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "aura",
        "cleric",
        "focus",
        "manipulate",
        "revelation"
      ],
      "traditions": [],
      "description": "Divine insight lets you see things as they are, unveiled by attempts to magically cloak the truth. The GM attempts a secret counteract check against each illusion that is at least partially within the area. Instead of counteracting the illusion, you see through it (for instance, if the check succeeds against an Illusory Disguise spell, you see the creature's true form but illusory disguise doesn't end). Each time a new illusion comes into the aura during the duration of the spell, the GM attempts a secret counteract check for that illusion.\nHeightened (7th) You can allow everyone within range of the emanation to see through illusions you succeed against, not just yourself.",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": "30 emanation",
      "duration": "1 round",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (7th) You can allow everyone within range of the emanation to see through illusions you succeed against, not just yourself."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:ode-to-ouroboros",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "DgCS456mXKw97vNy",
      "slug": "ode-to-ouroboros",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:9f35c9a38b7320180205a1d32b409c057960681e1403146541a375230a90dbd1",
    "translatableHash": "sha256:2b0e49f524b0b2236a33e35a33f36b7377e01bcb61d9a25e16ee5e4e36806283",
    "data": {
      "schemaVersion": 1,
      "name": "Ode to Ouroboros",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "bard",
        "composition",
        "concentrate",
        "focus"
      ],
      "traditions": [],
      "description": "Trigger A creature's dying condition would reach the value at which they would die.\nYour ode staves off death. The target's dying condition remains 1 below the value at which it dies. This doesn't help prevent death from effects that kill the target without increasing its dying condition, such as Disintegrate and death effects.",
      "castingTime": "reaction",
      "range": "60 feet",
      "target": "the triggering creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:curse-of-death",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "nQS4vPm5zprqkzFZ",
      "slug": "curse-of-death",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:f968501ec874f5ac91a72a849806b4596493fb8bf93af26752702674a1196366",
    "translatableHash": "sha256:e4ee83e379c075a8286321f5bd9a08a195efcd26fe0f679181fa7cdd1830abd8",
    "data": {
      "schemaVersion": 1,
      "name": "Curse of Death",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "curse",
        "death",
        "focus",
        "hex",
        "manipulate",
        "void",
        "witch"
      ],
      "traditions": [],
      "description": "Your patron wraps a hand around your target's heart. The target must attempt a Fortitude saving throw. Regardless of the result, the target is temporarily immune to all curses of death for 1 day.\nCritical Success The target is unaffected.\nSuccess The target is afflicted with the curse of death at stage 1, and the stage of the curse can't increase beyond stage 1.\nFailure The target is afflicted with the curse of death at stage 1.\nCritical Failure The target is afflicted with the curse of death at stage 2\nCurse of Death (curse, death, void) This curse ends when the spell ends\nStage 1 (max(4,5-1))d6[void] damage and Fatigued (1 round)\nStage 2 (max(8,5+3))d6[void] damage and fatigued (1 round)\nStage 3 (max(12,5+7))d6[void] damage and fatigued (1 round)\nStage 4 death\nHeightened 1 Increase the void damage taken on a success and during the first three stages of the curse by 1d6.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": "fortitude save",
      "damage": [],
      "heightening": "Heightened 1 Increase the void damage taken on a success and during the first three stages of the curse by 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:restorative-moment",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "pCvJ4yoZJxDtgUMI",
      "slug": "restorative-moment",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/restorative-moment.webp"
    },
    "sourceHash": "sha256:6f2e39649dcd6290e855ab5694db4d50e5e0ad21f0b596d6cf4e920ae4c99ed7",
    "translatableHash": "sha256:3b8ba805383de6740465e4ef61e376a7b03d23fe3d5d06326fa66f6cd53ce5f8",
    "data": {
      "schemaVersion": 1,
      "name": "Restorative Moment",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "hex",
        "manipulate",
        "witch"
      ],
      "traditions": [],
      "description": "Your patron weaves the threads of time around the target, giving them some of the benefits of a day's passage. The target decreases the values of any Doomed and Drained conditions it has by 1 and can immediately attempt one saving throw against each affliction it has with a stage length of 1 day or less. The target is then temporarily immune for 1 day.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:house-of-imaginary-walls",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "PEfSofHm73IT3Khc",
      "slug": "house-of-imaginary-walls",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/house-of-imaginary-walls.webp"
    },
    "sourceHash": "sha256:6022577e9ec086a5316127703c999e1badc75b37061cbf584fd3fb0ef9d74e1e",
    "translatableHash": "sha256:7c46db82db21b5c5a52da57265519dcbdb6febda5603de5cda62d3305f98fc34",
    "data": {
      "schemaVersion": 1,
      "name": "House of Imaginary Walls",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "bard",
        "cantrip",
        "composition",
        "illusion",
        "manipulate",
        "visual"
      ],
      "traditions": [],
      "description": "You mime an Invisible 10-foot-by-10-foot wall adjacent to you and within your reach. The wall is solid to those creatures that don't disbelieve it, even incorporeal creatures. You and your allies can voluntarily believe the wall exists to continue to treat it as solid, for instance to climb onto it. A creature that disbelieves the illusion is temporarily immune to your house of imaginary walls for 1 minute. The wall doesn't block creatures that didn't see your visual performance, nor does it block objects. The wall has AC 10, Hardness equal to double the spell's rank, and HP equal to quadruple the spell's rank.",
      "castingTime": "1 action",
      "range": "touch",
      "target": "",
      "area": null,
      "duration": "1 round",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:terrain-transposition",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "rtA3HRGoy7PQTOhq",
      "slug": "terrain-transposition",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:93034bf317e0fd8cb558d257d8cf9b8108a907aec35d08c264ea7986135e723c",
    "translatableHash": "sha256:d3ae02a64f82f735b6e3c597829d29269c9b28d0e6288727e61c3ecd99b1a15e",
    "data": {
      "schemaVersion": 1,
      "name": "Terrain Transposition",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate",
        "ranger",
        "teleportation"
      ],
      "traditions": [],
      "description": "You mystically transpose your current location with another. While in a wilderness environment, you transport yourself and items you're holding to a clear space you can see within range. If you have Favored Terrain and both your starting and ending position are in your favored terrain, the range increases to 180 feet. If you have an animal companion and it is adjacent to you, you can transport it along with you to an adjacent open space, but if this spell would bring any other creature with you, even in an extradimensional container, the spell is lost.",
      "castingTime": "2 actions",
      "range": "90 feet",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:hunters-vision",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "tj86Rnq3QuQnDtG3",
      "slug": "hunters-vision",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/hunters-vision.webp"
    },
    "sourceHash": "sha256:caeedfbaaf57c637b52c865425e469d63d76e4a0d6f4a7281aa8baf982fa6f38",
    "translatableHash": "sha256:0208afe996d3ad617696d086054253d8450f5c62bc6724228fba4230a909efbe",
    "data": {
      "schemaVersion": 1,
      "name": "Hunter's Vision",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "ranger"
      ],
      "traditions": [],
      "description": "Your target glows with a magical aura visible only to you and those who follow your lead. Your target is visible to you and others sharing your Hunt Prey benefits even if it wouldn't normally be due to lighting or the Concealed or Invisible conditions, though cover from opaque objects still blocks your sight. You ignore the flat check against the target due to the Concealed condition, and the target isn't automatically Hidden from you due to darkness or being Invisible.",
      "castingTime": "1 action",
      "range": "30 feet",
      "target": "1 hunted prey",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:symphony-of-the-unfettered-heart",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ZAX0OOcKtYMQlquR",
      "slug": "symphony-of-the-unfettered-heart",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/symphony-of-the-unfettered-heart.webp"
    },
    "sourceHash": "sha256:e75f2d9e13b910289700ad8cea5788d58a7361271e82c6b4f044b69cd0e50501",
    "translatableHash": "sha256:c19bdaf68894de27115150ff4bf9d06f6584da7585bd114587ea81a2e7a032dc",
    "data": {
      "schemaVersion": 1,
      "name": "Symphony of the Unfettered Heart",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "bard",
        "composition",
        "concentrate",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "Your symphony lifts listeners from their worldly concerns. Attempt a Performance check to counteract an effect applying one of the following conditions to the target: Grabbed, Immobilized, Paralyzed, Restrained, Slowed, or Stunned. If you fail, you can't target the same effect on the target for 1 day. Use the condition's source to determine the counteract DC (for example, the Escape DC for grabbed).\nHeightened (9th) You can target up to four creatures.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "you or 1 ally",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (9th) You can target up to four creatures."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:primal-summons",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "kwlKUxEuT8T15YW6",
      "slug": "primal-summons",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:84752acb7f56b8a71a04c1352ab0cf900a6fb59cdc9ed527cbe86cb23d7d2d8a",
    "translatableHash": "sha256:7ce76887fcd51fc02143602f7c2a4385ace30c699e7291b74a764223303b2118",
    "data": {
      "schemaVersion": 1,
      "name": "Primal Summons",
      "rank": 6,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "druid",
        "focus"
      ],
      "traditions": [],
      "description": "You enhance a summoned creature with the power of the elements. If your next action is to cast either Summon Animal or Summon Plant or Fungus, choose air, earth, fire, metal, water or wood; the creature you summon gains the corresponding abilities.\n• Air The creature gains a fly Speed of 60 feet.\n• Earth The creature gains a burrow Speed of 20 feet, reduces its land Speed by 10 feet (minimum 5 feet), and gains resistance 5 to physical damage.\n• Fire The creature's Strikes deal 1d6 extra fire damage, and it gains resistance 10 to fire and weakness 5 to cold and water.\n• Metal The creature's Strikes deal 1d6 extra electricity damage, and it gains resistance 5 to electricity.\n• Water The creature gains a swim Speed of 60 feet, can spend 1 action after a melee attack to attempt a Shove (ignoring multiple attack penalty), and gains resistance 5 to fire.\n• Wood The creature gains a climb speed of 30 feet and resistance 2 to bludgeoning and piercing damage.\nSpell Effect: Primal Summons",
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
    "contentId": "pf2e:spell:spells-srd:soothing-ballad",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "0JigNJDRwevZOyjI",
      "slug": "soothing-ballad",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/soothing-ballad.webp"
    },
    "sourceHash": "sha256:ce99588ab0a25073836429ea6b69df214008866e9ea8962eb75c6ea20e4d2a29",
    "translatableHash": "sha256:110b37dabf4f7a0e30d61e2996595ee4338c60b339f7d63f2fe34aab94d01502",
    "data": {
      "schemaVersion": 1,
      "name": "Soothing Ballad",
      "rank": 7,
      "rarity": "uncommon",
      "traits": [
        "bard",
        "composition",
        "concentrate",
        "emotion",
        "focus",
        "healing",
        "manipulate",
        "mental"
      ],
      "traditions": [],
      "description": "You draw upon your muse to soothe your allies. Choose one of the following three effects:\n• The spell attempts to counteract fear effects on the targets.\n• The spell attempts to counteract effects imposing paralysis on the targets.\n• The spell restores 7d8 Hit Points to the targets.\nHeightened 1 When used to heal, soothing ballad restores 1d8 more Hit Points.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "you and up to 9 allies",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [
        {
          "formula": "7d8",
          "type": "untyped",
          "kind": "healing"
        }
      ],
      "heightening": "Heightened 1 When used to heal, soothing ballad restores 1d8 more Hit Points."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:allegro",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "IQchIYUwbsVTa9Mc",
      "slug": "allegro",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:9cec38eb38f3f1c5d35e4510f0a2899e81d99286175c7e3dfe1106eba1ffe835",
    "translatableHash": "sha256:b297dc400b6c91e46645840304fe533862dd296d4d4b654a7d7cd1372ee02059",
    "data": {
      "schemaVersion": 1,
      "name": "Allegro",
      "rank": 7,
      "rarity": "uncommon",
      "traits": [
        "bard",
        "cantrip",
        "composition",
        "concentrate",
        "emotion",
        "mental"
      ],
      "traditions": [],
      "description": "You perform rapidly, speeding up your ally. The ally becomes Quickened and can use the additional action to Strike, Stride, or Step.",
      "castingTime": "1 action",
      "range": "30 feet",
      "target": "1 ally",
      "area": null,
      "duration": "1 round",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:impaling-briars",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "oGV6YdpZLIG4G4gH",
      "slug": "impaling-briars",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:17acebac82555b6e52fc102f8e6e49df036dc45e2d9a1c659527ac0f9d72b8c5",
    "translatableHash": "sha256:2e4f3b8f283de5834d3fee6136cb1a517dfac2336fde1fc687e5e5aa4f25ba91",
    "data": {
      "schemaVersion": 1,
      "name": "Impaling Briars",
      "rank": 8,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "druid",
        "focus",
        "manipulate",
        "plant",
        "wood"
      ],
      "traditions": [],
      "description": "The ground within the area transforms into a mass of dangerous briars that assault and impede your foes. When you Cast the Supell and the first time you Sustain it each turn on subsequent rounds, select one of the following effects to occur in the area.\n• Ensnare The briars clump around your foes, attempting to hold them in place. A foe within the area (or flying at most 20 feet above the area) must attempt a Reflex save. On a failure, it takes a –10-foot circumstance penalty to all Speeds for 1 round, and on a critical failure, it is Immobilized for 1 round unless it Escapes.\n• Impede The briars twist and writhe, making the entire area difficult terrain.\n• Wall A Wall of Thorns appears in the area, lasting for 1 round. The wall is greater difficult terrain instead of difficult terrain.\nIn addition, once per round you can direct the briars to impale any target in the area (or flying up to 20 feet above the area) that you can see by using a single action, which has the concentrate and manipulate traits. Make a spell attack roll. On a success, the target takes 10d6 piercing damage and takes a –10-foot circumstance penalty to all Speeds for 1 round; on a critical success, the target is Immobilized for 1 round unless it Escapes.",
      "castingTime": "3 actions",
      "range": "",
      "target": "",
      "area": "100 emanation",
      "duration": "1 minute",
      "defense": "reflex save",
      "damage": [
        {
          "formula": "10d6",
          "type": "piercing",
          "kind": "damage"
        }
      ],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:storm-lord",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "XYhU3Wi94n1RKxTa",
      "slug": "storm-lord",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/storm-lord.webp"
    },
    "sourceHash": "sha256:4137df7144c94aa84e66e8ed747d263c93a5f4252ff99e62bb094b8fd81fe350",
    "translatableHash": "sha256:47b06a4b2d16f1cd7d177d92876ac44f0ca6c6bdb255d252d1b625da0eb07eec",
    "data": {
      "schemaVersion": 1,
      "name": "Storm Lord",
      "rank": 9,
      "rarity": "uncommon",
      "traits": [
        "air",
        "concentrate",
        "druid",
        "electricity",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "The sky above you darkens in a matter of moments, swirling with ominous clouds punctuated by flashes of lighting. When you Cast the Spell and the first time you Sustain it each turn on subsequent rounds, select one of the following effects to occur in the area.\n• Calm No additional effect.\n• Fog Heavy fog rolls in, concealing the area with the effects of Mist.\n• Rain Torrential rain falls from the sky, dousing ordinary flames. Creatures in the area take a -2 circumstance penalty to Acrobatics and Perception checks.\n• Wind Powerful winds buffet the area in all directions. Ranged attacks take a -4 circumstance penalty, and the area is difficult terrain for flying creatures.\nIn addition, once per round you can use a single action, which has the concentrate and manipulate traits, to call down a bolt of lightning, striking any target in range that you can see. You deal 10d6 electricity damage to the target; it must attempt a basic Reflex save. On a failure, it is also Deafened for 1 round.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "100 emanation",
      "duration": "1 minute",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "10d6",
          "type": "electricity",
          "kind": "damage"
        }
      ],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:fatal-aria",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "lyJDBD9OFW11vLyT",
      "slug": "fatal-aria",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/fatal-aria.webp"
    },
    "sourceHash": "sha256:1c30c4ae88bb8c0bc5235e2f8de1332c19cd910f9d5d8b83c5ee8f8dfe0b6513",
    "translatableHash": "sha256:99bbf54c8554654163eab19f70bc9e758026bcf7a35048463a1d388d83cfefd3",
    "data": {
      "schemaVersion": 1,
      "name": "Fatal Aria",
      "rank": 10,
      "rarity": "uncommon",
      "traits": [
        "bard",
        "composition",
        "concentrate",
        "death",
        "emotion",
        "focus",
        "mental"
      ],
      "traditions": [],
      "description": "You perform music so perfect that the target may die of joy or sorrow. Once targeted, the creature becomes temporarily immune for 1 minute. The effect of the spell depends on the target's level and current Hit Points.\n16th or Lower The target dies instantly.\n17th If the target has 50 Hit Points or fewer, it dies instantly; otherwise, it drops to 0 Hit Points and becomes Dying 1.\n18th or Higher The target takes 50 untyped damage. If this brings it to 0 Hit Points, it dies instantly.",
      "castingTime": "1 action",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:pied-piping",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Um0aaJotqMKGmAlR",
      "slug": "pied-piping",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/pied-piping.webp"
    },
    "sourceHash": "sha256:cd9a83e6e5f74a3cfa179cda20954990337b2a215c84079430cab4199ff91a8f",
    "translatableHash": "sha256:50eced7f4f027cfc2556a08e8df1fab59359c8c0653b213107c62d64dd756f7a",
    "data": {
      "schemaVersion": 1,
      "name": "Pied Piping",
      "rank": 10,
      "rarity": "uncommon",
      "traits": [
        "bard",
        "composition",
        "concentrate",
        "focus",
        "incapacitation",
        "mental",
        "sonic"
      ],
      "traditions": [],
      "description": "Your performance enraptures listeners, compelling them to follow you. Each creature within the emanation must attempt a Will save when you Cast the Spell or the first time they enter the area, after which they become temporarily immune for 1 day. Once per turn, you can Sustain the composition to increase the emanation's radius by 5 feet. You can Dismiss the spell.\nCritical Success The creature is unaffected.\nSuccess The creature is Fascinated with you.\nFailure The creature is fascinated by you and uses all its actions to move toward you and compliment your performance. This effect ends if a hostile action is used against the affected creature.\nCritical Failure The target gains the minion trait and is controlled by you. This effect ends if a hostile action is used against the affected creature, or if you direct the creature to use any action that causes it harm.",
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
    "contentId": "pf2e:spell:spells-srd:elemental-toss",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "0JUOgbbFCapp3HlW",
      "slug": "elemental-toss",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/elemental-toss.webp"
    },
    "sourceHash": "sha256:4b840f58803512df0df3d14bb3b392189656e23bbd0867e581ff163b26af1d33",
    "translatableHash": "sha256:72a88c44e6e60302a2fb29ad55fddc022cf39903dae0aa9fa120de38fd8bd15e",
    "data": {
      "schemaVersion": 1,
      "name": "Elemental Toss",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "attack",
        "focus",
        "manipulate",
        "sorcerer"
      ],
      "traditions": [],
      "description": "With a flick of your wrist, you fling a chunk of your elemental matter at your foe. Make a ranged spell attack roll, dealing 1d8 damage on a success and double damage on a critical success. This spell deals damage according to your elemental influence (for instance, slashing for air or fire for fire) and has your element's trait.\nHeightened 1 The damage increases by 1d8.",
      "castingTime": "1 action",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [
        {
          "formula": "1d8",
          "type": "untyped",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 1d8."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:life-link",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "2gQYrCPwBmwau26O",
      "slug": "life-link",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/life-link.webp"
    },
    "sourceHash": "sha256:f224f961084cf8ada7e75cfc93f35cdf64bb6a25de2875808840d2140d8e2da8",
    "translatableHash": "sha256:c6771e6177d9bab6ee7950f52938c125cfb095d022b23fa085fa7a64b1084ff5",
    "data": {
      "schemaVersion": 1,
      "name": "Life Link",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "focus",
        "healing",
        "manipulate",
        "oracle",
        "vitality"
      ],
      "traditions": [],
      "description": "You forge a connection of life energy between you and your target, distributing harm between both of you. When you first Cast the Spell, the target recovers 1d4 Hit Points.\nThe first time each round that the target takes damage, reduce the damage it takes by 3 (to a minimum of 0 damage). You lose 3 Hit Points each time, or the total damage dealt, if less than 3; this damage ignores any immunities or resistances you have and can't otherwise be mitigated in any way.\nThe spell ends immediately if you fall Unconscious. You can Dismiss the spell.\nHeightened (3rd) You can target 2 creatures other than you. The initial healing increases to 3d4 Hit Points and the maximum damage reduced and Hit Points lost increases to 5.\nHeightened (6th) You can target 3 creatures other than you. The initial healing increases to 6d4 Hit Points and the maximum damage reduced and Hit Points lost increases to 10.\nHeightened (9th) You can target 4 creatures other than you. The initial healing increases to 9d4 Hit Points and the maximum damage reduced and Hit Points lost increases to 15.",
      "castingTime": "1 action",
      "range": "30 feet",
      "target": "1 creature other than you",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [
        {
          "formula": "1d4",
          "type": "vitality",
          "kind": "healing"
        }
      ],
      "heightening": "Heightened (3rd) You can target 2 creatures other than you. The initial healing increases to 3d4 Hit Points and the maximum damage reduced and Hit Points lost increases to 5.\nHeightened (6th) You can target 3 creatures other than you. The initial healing increases to 6d4 Hit Points and the maximum damage reduced and Hit Points lost increases to 10.\nHeightened (9th) You can target 4 creatures other than you. The initial healing increases to 9d4 Hit Points and the maximum damage reduced and Hit Points lost increases to 15."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:incendiary-aura",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "AspA30tzKCHFWRf0",
      "slug": "incendiary-aura",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:dc37e4c29ba2b0bacab855576dbf1ad71afb58b38b0fe2f32d861d0540882704",
    "translatableHash": "sha256:f7f1dd5518c299177c28661db71713135f33c6d3201e5223bce6ea84ef0781b6",
    "data": {
      "schemaVersion": 1,
      "name": "Incendiary Aura",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "aura",
        "concentrate",
        "fire",
        "focus",
        "manipulate",
        "oracle"
      ],
      "traditions": [],
      "description": "You surround yourself with a combustible aura. Each time a creature within the emanation takes fire damage, it catches on fire, taking 2d4 persistent fire damage.\nHeightened 2 Increase the persistent damage by 1d4 and the radius of the emanation by 5 feet.\nSpell Effect: Incendiary Aura",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "10 emanation",
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 2 Increase the persistent damage by 1d4 and the radius of the emanation by 5 feet.\nSpell Effect: Incendiary Aura"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:ancestral-touch",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "d2pi7laQkzlr3wrS",
      "slug": "ancestral-touch",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:4c7a093770398ebcd3d9a30ebe6721dfd6761152d3c12bc5d2917b3eaf73bfe6",
    "translatableHash": "sha256:1632e61b99059bb02ea8948491f6b84c74f6757c45ac41e1331fa3f8864269f9",
    "data": {
      "schemaVersion": 1,
      "name": "Ancestral Touch",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "emotion",
        "fear",
        "focus",
        "manipulate",
        "mental",
        "oracle"
      ],
      "traditions": [],
      "description": "You touch a creature and force them to see and feel the ancestors surrounding you. The target takes 2d4 mental damage, with results depending on a Will save.\nCritical Success The target is unaffected.\nSuccess The target takes half damage.\nFailure The target is Frightened 1 and takes full damage.\nCritical Failure The target is Frightened 2 and takes double damage.\nHeightened 1 The mental damage increases by 1d4.",
      "castingTime": "1 action",
      "range": "touch",
      "target": "1 living creature",
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
      "heightening": "Heightened 1 The mental damage increases by 1d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:soul-siphon",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "D6T17BdazhNy3KPm",
      "slug": "soul-siphon",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/soul-siphon.webp"
    },
    "sourceHash": "sha256:9913ed2f92629fc9e94649c14b5ac542087113f0e1eb710e61b9be1d69f5278b",
    "translatableHash": "sha256:970ebad479930f477b6a6f20eb34be4c5ef755c83dc05dfd9902585ff74aa76c",
    "data": {
      "schemaVersion": 1,
      "name": "Soul Siphon",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "focus",
        "manipulate",
        "oracle",
        "void"
      ],
      "traditions": [],
      "description": "You siphon off a portion of the target's soul to bolster your own vitality. The target must attempt a Fortitude save or take 1d4 void damage. You gain temporary Hit Points equal to the total amount of HP the target loses, including the HP lost from becoming Drained.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage.\nFailure The creature takes full damage and becomes Drained 1.\nCritical Failure The creature takes double damage and becomes Drained 2.\nHeightened 1 Increase the damage by 1d4.",
      "castingTime": "1 action",
      "range": "30 feet",
      "target": "1 living creature",
      "area": null,
      "duration": "",
      "defense": "fortitude save",
      "damage": [
        {
          "formula": "1d4",
          "type": "void",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 Increase the damage by 1d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:ancestral-memories",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "dtOUkMC57izf93z5",
      "slug": "ancestral-memories",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:4100186930f095362aee66bdfb8483d61e01d378f77ab5e8e7187eb4cff56f28",
    "translatableHash": "sha256:73b00c89c868272e1f46a82ff4c55a4a31f0d6ee9e05b01e3f7b7aefad24cac9",
    "data": {
      "schemaVersion": 1,
      "name": "Ancestral Memories",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "sorcerer"
      ],
      "traditions": [],
      "description": "The memories of long-dead spellcasters grant you their knowledge, making your spells more formidable. You gain either a +1 status bonus to the next spell attack roll you attempt before the end of your turn or an enemy within 60 feet takes a –1 status penalty to the next saving throw they attempt against a spell you cast before the end of your turn.\nHeightened (5th) The bonus increases to +2 or the penalty increases to –2.\nHeightened (8th) The bonus increases to +3 or the penalty increases to –3\nSpell Effect: Ancestral Memories",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (5th) The bonus increases to +2 or the penalty increases to –2.\nHeightened (8th) The bonus increases to +3 or the penalty increases to –3\nSpell Effect: Ancestral Memories"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:tempest-touch",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "EzB9i7R6aBRAtJCh",
      "slug": "tempest-touch",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:03526a8429953bec0d8d230c33efe8973f3c6a2888166d035f1cdc223473d7e1",
    "translatableHash": "sha256:35674c7635de0493828948c607d0bcf8cccaa2f3f98cf1f900e5d70e2eb777f2",
    "data": {
      "schemaVersion": 1,
      "name": "Tempest Touch",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cold",
        "focus",
        "manipulate",
        "oracle",
        "water"
      ],
      "traditions": [],
      "description": "Your touch calls forth a churning mass of icy water that clings to your target, dealing 1d4 bludgeoning damage and 1d4 cold damage. The target must attempt a Fortitude save.\nCritical Success The target is unaffected.\nSuccess The target takes half damage and a –5-foot circumstance penalty to its Speeds until the end of your next turn.\nFailure The target takes full damage and a –10-foot circumstance penalty to its Speeds until the end of your next turn.\nCritical Failure As failure, but the target takes double damage.\nSpell Effect: Tempest Touch\nHeightened 1 The bludgeoning and cold damage each increase by 1d4.",
      "castingTime": "1 action",
      "range": "touch",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": "fortitude save",
      "damage": [
        {
          "formula": "1d4",
          "type": "bludgeoning",
          "kind": "damage"
        },
        {
          "formula": "1d4",
          "type": "cold",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The bludgeoning and cold damage each increase by 1d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:undeaths-blessing",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "FedTjedva2rYk33r",
      "slug": "undeaths-blessing",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:6343816e59cc3c175132da02d896aa878707763d42629f1d5381f0afc2ffb7c7",
    "translatableHash": "sha256:0a85341bc10cae9e7e0c95de8590499525070eaa41cebe156c3f9993a96f6a2f",
    "data": {
      "schemaVersion": 1,
      "name": "Undeath's Blessing",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "focus",
        "manipulate",
        "sorcerer",
        "void"
      ],
      "traditions": [],
      "description": "You instill within a creature the touch of the grave. For the duration, Harm and Heal spells treat the creature as undead. In addition, harm spells gain a +2 status bonus to the Hit Points restored to the target. An unwilling target can attempt a Will save to reduce the effects.\nCritical Success The target is unaffected.\nSuccess The target heals half as much from heal and takes half as much damage from harm for 1 round.\nFailure Effects as described above.\nHeightened 1 The status bonus to the Hit Points restored increases by 2.",
      "castingTime": "1 action",
      "range": "touch",
      "target": "1 living creature touched",
      "area": null,
      "duration": "1 minute",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened 1 The status bonus to the Hit Points restored increases by 2."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:tentacular-limbs",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "i8PBZsnoCrK7IWph",
      "slug": "tentacular-limbs",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/tentacular-limbs.webp"
    },
    "sourceHash": "sha256:0a74ebc822759bfab931f906281283c32af19baca7b58e06ed76dd4beee804aa",
    "translatableHash": "sha256:5912baae884c25521cfa73445a0d7800cee44b44328134d6ea6723c575c8fbb0",
    "data": {
      "schemaVersion": 1,
      "name": "Tentacular Limbs",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "focus",
        "manipulate",
        "morph",
        "sorcerer"
      ],
      "traditions": [],
      "description": "Your arms turn into long, pliable tentacles, increasing your reach when you're delivering touch range spells and making unarmed Strikes with your arms (such as fist and claw Strikes) to 10 feet. This doesn't change the reach of your melee weapon attacks. During the duration, whenever you Cast a Spell, you can add an additional action to that spell's casting to temporarily extend your reach to 20 feet to deliver that spell.\nHeightened 2 When you add an additional action to a spell to temporarily extend your reach, your reach increases by an additional 10 feet to deliver that spell.",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 2 When you add an additional action to a spell to temporarily extend your reach, your reach increases by an additional 10 feet to deliver that spell."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:faerie-dust",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "IkS3lDGUpIOMug7v",
      "slug": "faerie-dust",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/faerie-dust.webp"
    },
    "sourceHash": "sha256:aa18f0aae15e2b9475bcdcd0128178081902a1d8b86fe83903f742c6367a1a83",
    "translatableHash": "sha256:ed7cc82986de5fa2ea410a1daa828fb04ccb383e0243a41c31dda66df3054ac3",
    "data": {
      "schemaVersion": 1,
      "name": "Faerie Dust",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate",
        "mental",
        "sorcerer"
      ],
      "traditions": [],
      "description": "You sprinkle magical dust in the spell's area, making those within easier to trick. Each creature in the area must attempt a Will save. For each additional action you use when Casting the Spell, increase the burst's radius by 5 feet.\nSuccess The creature is unaffected.\nFailure The creature can't use reactions and takes a -2 status penalty to Perception checks and Will saves.\nSpell Effect: Faerie Dust (Failure)\nCritical Failure As failure, and the creature also takes a -1 status penalty to Perception checks and Will saves for 1 minute.\nSpell Effect: Faerie Dust (Critical Failure)\nHeightened 3 The initial radius increases by 5 feet.",
      "castingTime": "1 to 3 actions",
      "range": "30 feet",
      "target": "",
      "area": "5 burst",
      "duration": "1 round",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened 3 The initial radius increases by 5 feet."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:touch-of-the-void",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "jFmWSIpJGGebim6y",
      "slug": "touch-of-the-void",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/touch-of-corruption.webp"
    },
    "sourceHash": "sha256:f9419362f53666ccdb9a15f10861d1768ca44cf27c85769226e9d1c6984b3f5e",
    "translatableHash": "sha256:cdbebf6ca4fc1ce65b9baf136e0aa964f39b69f3fb14fd8cf7f14f7157044aad",
    "data": {
      "schemaVersion": 1,
      "name": "Touch of the Void",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "champion",
        "focus",
        "manipulate",
        "void"
      ],
      "traditions": [],
      "description": "You infuse the target with void energy, healing undead or damaging a living creature.\n• Willing Undead Creature The target regains 6 Hit Points. If the target is yourself, you also gain a +2 status bonus to damage rolls for 1 round.\n• Living Creature The target takes 1d6 void damage with a basic Fortitude save; on a failure, the target also takes a –2 status penalty to AC for 1 round.\nSpell Effect: Touch of the Void\nHeightened 1 The amount of healing increases by 6, and the damage to a living target increases by 1d6.",
      "castingTime": "1 action",
      "range": "touch",
      "target": "1 willing undead creature or 1 living creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 The amount of healing increases by 6, and the damage to a living target increases by 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:brain-drain",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "k2QrUk7jWMAWozMh",
      "slug": "brain-drain",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/brain-drain.webp"
    },
    "sourceHash": "sha256:6eb31bc774c1d3c8eb6120618dc9133cc7a1bb581b50679a62c23bb4384a40a8",
    "translatableHash": "sha256:e1c071a47638c012d44efb68b8a93765db745ef67afd8d65958a55c3ffa9da1f",
    "data": {
      "schemaVersion": 1,
      "name": "Brain Drain",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate",
        "mental",
        "oracle"
      ],
      "traditions": [],
      "description": "You probe the target's mind to glean knowledge. This deals 1d8 mental damage with a basic Will save.\nIf the target fails the save, you sort through the stolen memories to attempt a single check to Recall Knowledge. Choose a skill that has the Recall Knowledge action, and use the target's skill modifier for the check.\nHeightened 1 The mental damage increases by 1d8.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": "basic will save",
      "damage": [
        {
          "formula": "1d8",
          "type": "mental",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The mental damage increases by 1d8."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:flurry-of-claws",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "K8vvrOgW4bGakXxm",
      "slug": "flurry-of-claws",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/dragon-claws.webp"
    },
    "sourceHash": "sha256:ec1ce369618d572fa96afdd3d59e29ce962fba494b16c5d28adef607265cb974",
    "translatableHash": "sha256:4b5b2ed24091db24d0f79e6473eca899389c52b3d1b51a8d2c92acdf3a9d8ba1",
    "data": {
      "schemaVersion": 1,
      "name": "Flurry of Claws",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "attack",
        "concentrate",
        "focus",
        "manipulate",
        "sorcerer"
      ],
      "traditions": [],
      "description": "Vicious dragon claws appear and slash at two nearby foes. Make a spell attack roll against each creature. This counts as two attacks for your multiple attack penalty, but the penalty doesn't increase until you've made both attacks. On a hit, the creatures takes 1d8 slashing plus 1d4 additional damage of a type determined by the magical tradition related to the dragon that influenced your bloodline: arcane force, divine spirit, occult mental, or primal fire.\nHeightened 1 The initial damage increases by 1d8 and the additional damage increases by 1d4.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "2 creatures no more than 10 feet from each other",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [
        {
          "formula": "1d8",
          "type": "slashing",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The initial damage increases by 1d8 and the additional damage increases by 1d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:jealous-hex",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "kvm68hVtmADiIvN4",
      "slug": "jealous-hex",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:9214f3db35bd46025f2ed48cd46f58dcdf5f525345c7ed38d21ac0e5f492873b",
    "translatableHash": "sha256:846c001af1af1a4e8c169c21e4dc9bbdaf8c06304cb4d39244e3b7d105a13520",
    "data": {
      "schemaVersion": 1,
      "name": "Jealous Hex",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "curse",
        "focus",
        "sorcerer"
      ],
      "traditions": [],
      "description": "You draw forth a hag's innate jealousy to deny a target its greatest attribute. The target is cursed with an adverse condition depending on its highest attribute modifier: Strength (Enfeebled); Dexterity (Clumsy); Constitution (Drained); or Intelligence, Wisdom, or Charisma (Stupefied). On a tie, the creature decides which of the conditions associated with the tied attributes to take. The target must attempt a Will save. At the start of each of your turns, the target can attempt another Will save, ending the effect on a success.\nSuccess The target is unaffected.\nFailure The condition's value is 1.\nCritical Failure The condition's value is 2",
      "castingTime": "1 action",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:spray-of-stars",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "mlNYROcFrUF8nFgk",
      "slug": "spray-of-stars",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/spray-of-stars.webp"
    },
    "sourceHash": "sha256:83c36c84bcc8a72c21f685e148b0dda645edb9f0d7ceaa750f63358a4edbf19e",
    "translatableHash": "sha256:1fecfd371cb540a00e83260dcbc7ba1d2e068677b3145a9737591c12931c92b4",
    "data": {
      "schemaVersion": 1,
      "name": "Spray of Stars",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "fire",
        "focus",
        "light",
        "manipulate",
        "oracle"
      ],
      "traditions": [],
      "description": "You fling a spray of tiny shooting stars, dealing 2d4 fire damage. Each creature in the area must attempt a Reflex save.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage and is Dazzled for 1 round.\nFailure The creature takes full damage and is dazzled for 3 rounds.\nCritical Failure The creature takes double damage and is dazzled for 1 minute.\nHeightened 1 Increase the damage by 1d4.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "15 cone",
      "duration": "",
      "defense": "reflex save",
      "damage": [
        {
          "formula": "2d4",
          "type": "fire",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 Increase the damage by 1d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:qi-rush",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ps0nmhclT6aIXgd8",
      "slug": "qi-rush",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/ki-rush.webp"
    },
    "sourceHash": "sha256:2f5b50882adfca7c3832e4a3634f44b730725c03a3723affc17a45d916e22059",
    "translatableHash": "sha256:711b6de779bd5818053bcea6ed06ec6bec5cba62bc0c2e99545e53cd1d1d1db1",
    "data": {
      "schemaVersion": 1,
      "name": "Qi Rush",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "monk"
      ],
      "traditions": [],
      "description": "Accelerated by your qi, you move with such speed you become a blur. Move two times: two Strides, two Steps, or one Stride and one Step (in either order).\nYou gain the Concealed condition during this movement and until the start of your next turn.",
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
    "contentId": "pf2e:spell:spells-srd:weapon-trance",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "RpGB961b8FjXbGHi",
      "slug": "weapon-trance",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:fb027e95b78a7c0d203f847c7ec99a5d64c2849bd9e4b95f3d113d172c5a15c9",
    "translatableHash": "sha256:b38ff4c8e92622df166ce3f59aa3ada7cbb05b408095f2d8c177e7ceed3ad46b",
    "data": {
      "schemaVersion": 1,
      "name": "Weapon Trance",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "oracle"
      ],
      "traditions": [],
      "description": "The serenity of violence fills your mind, giving you a heightened sense of knowing exactly where your weapons need to be. For the duration, your proficiency with martial weapons is equal to your proficiency with simple weapons.\nSpell Effect: Weapon Trance",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "heightened sense of knowing exactly where your weapons need to be. For the duration, your proficiency with martial weapons is equal to your proficiency with simple weapons.\nSpell Effect: Weapon Trance"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:gluttons-jaws",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "SdXFiQ4Py8761sNO",
      "slug": "gluttons-jaws",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:4222286b5817e34dc3b0bc79826ea48be27be5d81146c70f1d1c90427dc52642",
    "translatableHash": "sha256:f471856ccc4b8818ccb23271d3cee027c09234605ddc0f5debedcf1d7e792c86",
    "data": {
      "schemaVersion": 1,
      "name": "Glutton's Jaws",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "attack",
        "concentrate",
        "focus",
        "manipulate",
        "sorcerer"
      ],
      "traditions": [],
      "description": "A slavering maw opens beneath a target and tries to take a bite out of them. Make a spell attack roll. On a hit, the mouth deals 2d6 piercing damage, and you gain 1d4 temporary Hit Points that last until the beginning of your next turn.\nSpell Effect: Glutton's Jaws\nHeightened 1 The damage increases by 2d6, and the temporary Hit Points increase by 1d4.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [
        {
          "formula": "2d6",
          "type": "piercing",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 2d6, and the temporary Hit Points increase by 1d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:diabolic-edict",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Vctwx1ewa8HUOA94",
      "slug": "diabolic-edict",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/diabolic-edict.webp"
    },
    "sourceHash": "sha256:2fa1151255a3fcadb905c6470ced5b4568021eb8cb5d298c9ffd532ab486f0b2",
    "translatableHash": "sha256:2c57fc6ee36b847c1f27b6a2385b8d01668f79bd52f802fbd6997ed2c466a367",
    "data": {
      "schemaVersion": 1,
      "name": "Diabolic Edict",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "sorcerer"
      ],
      "traditions": [],
      "description": "You issue a diabolic edict, demanding the target perform a particular task and offering rewards for its fulfillment. It gains a +1 status bonus to attack rolls and skill checks related to performing the task. If it refuses to perform the task you proclaimed, it instead takes a -1 status penalty to all its attack rolls and skill checks.\nSpell Effect: Diabolic Edict",
      "castingTime": "1 action",
      "range": "30 feet",
      "target": "1 willing living creature",
      "area": null,
      "duration": "1 round",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:angelic-halo",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "w3uGXDVEdbLFZVO0",
      "slug": "angelic-halo",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/angelic-halo.webp"
    },
    "sourceHash": "sha256:4a8bf174ec396c200dc574f86b214691642c5098389892da368b0679d2907207",
    "translatableHash": "sha256:ae00b8c2372d4bdec0cab32faa6db3f83ca316805d8c6cbc78898f3cfe67e706",
    "data": {
      "schemaVersion": 1,
      "name": "Angelic Halo",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "aura",
        "concentrate",
        "focus",
        "holy",
        "sorcerer"
      ],
      "traditions": [],
      "description": "You gain an angelic halo with an aura that increases allies' healing from the Heal spell. Allies in your halo's emanation who are healed by a heal spell gain a status bonus to Hit Points regained equal to double the heal spell's rank.\nAura: Angelic Halo",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": "15 emanation",
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:inner-upheaval",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ZL8NTvB22NeEWhVG",
      "slug": "inner-upheaval",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/ki-strike.webp"
    },
    "sourceHash": "sha256:49fc9041c5d3cacfd4b1bb0d4ec96caaeaecf6627bcf1d47613d7c38fd019d4a",
    "translatableHash": "sha256:0ef45f681b9848834845add22ca3b024064601ef301449ce249878b6b2b67328",
    "data": {
      "schemaVersion": 1,
      "name": "Inner Upheaval",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "monk"
      ],
      "traditions": [],
      "description": "You focus your qi into devastating magical attacks. Make an unarmed Strike or Flurry of Blows (this doesn't change the limit on using only one flourish per turn). You gain a +1 status bonus to your attack rolls with the Strikes, and the Strikes deal 1d6 extra damage. This damage can be any of the following types of your choice, chosen each time you Strike: force, spirit, vitality, or void.\nSpell Effect: Inner Upheaval\nHeightened 4 The extra damage increases by 1d6",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [
        {
          "formula": "1d6",
          "type": "untyped",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 4 The extra damage increases by 1d6"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:shields-of-the-spirit",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ZL97DcoJ8us6EwAF",
      "slug": "shields-of-the-spirit",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:bb25b72a1a0fada5f2827c8f59ca4bad3e84ba6b401616410d07b285d97d9cd6",
    "translatableHash": "sha256:d9297b2cea5c23bd9f64c9291d469bbb1b578cf81c650e0a0f958375d55c33ec",
    "data": {
      "schemaVersion": 1,
      "name": "Shields of the Spirit",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "champion",
        "concentrate",
        "focus",
        "sanctified",
        "spirit"
      ],
      "traditions": [],
      "description": "Requirements You are wielding a shield.\nYou Raise your Shield, causing ephemeral spirit shields to float within your champion's aura. The shields last until the start of your next turn or until you're no longer raising your shield, whichever comes first. While one of your allies is in your champion's aura, the shields grant them a +1 status bonus to AC, and each time an enemy makes an attack against the ally, the enemy takes 1d4 spirit damage (even if it misses).\nThe benefit applies only while an ally is in your aura, ending for any ally that leaves and applying to any that enters later. As normal, you don't count as your own ally and therefore don't get the benefits of the spirit shields yourself.\nSpell Effect: Shields of the Spirit\nHeightened 2 The damage increases by 1d4.",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [
        {
          "formula": "1d4",
          "type": "spirit",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The damage increases by 1d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:lay-on-hands",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "zNN9212H2FGfM7VS",
      "slug": "lay-on-hands",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/lay-on-hands.webp"
    },
    "sourceHash": "sha256:948d942550f02302653a823790129c816d9791493a0877e873bc157e35ed7e0c",
    "translatableHash": "sha256:98f5ee3761e725f20916d0845911ec0d18c570060050fded905a5165e191669d",
    "data": {
      "schemaVersion": 1,
      "name": "Lay on Hands",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "champion",
        "focus",
        "healing",
        "manipulate",
        "vitality"
      ],
      "traditions": [],
      "description": "Your hands become infused with powerful vitality, capable of healing a living creature or damaging an undead creature with a touch.\n• Willing Living Creature The target regains 6 Hit Points. If the target is someone other than yourself, it also gains a +2 status bonus to AC for 1 round.\n• Undead Creature The target takes 1d6 vitality damage with a basic Fortitude save; on a failure, the target also takes a –2 status penalty to AC for 1 round.\nHeightened 1 The amount of healing increases by 6, and the damage to an undead target increases by 1d6.\nSpell Effect: Lay on Hands",
      "castingTime": "1 action",
      "range": "touch",
      "target": "1 willing living creature or 1 undead creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 The amount of healing increases by 6, and the damage to an undead target increases by 1d6.\nSpell Effect: Lay on Hands"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:harmonize-self",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "qJZZdYBdNaWRJFER",
      "slug": "harmonize-self",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/wholeness-of-body.webp"
    },
    "sourceHash": "sha256:6dbcacff2804f5d43fcfeb960377d066d962db107e1092d4b85cabdde6b5951b",
    "translatableHash": "sha256:16b47194eb0c56d8d68ee91908c5bd353d5a0f6fd6846b3fc03c72236b6e1c71",
    "data": {
      "schemaVersion": 1,
      "name": "Harmonize Self",
      "rank": 2,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "healing",
        "monk",
        "vitality"
      ],
      "traditions": [],
      "description": "You heal yourself in one of the following ways, chosen by you when you cast the spell.\n• You regain 8 Hit Points.\n• You attempt to cure one poison or disease afflicting you; attempt to counteract the affliction.\nHeightened 1 If you choose to regain Hit Points, the Hit Points regained increase by 8.",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [
        {
          "formula": "8",
          "type": "vitality",
          "kind": "healing"
        }
      ],
      "heightening": "Heightened 1 If you choose to regain Hit Points, the Hit Points regained increase by 8."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:battlefield-persistence",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "2jWVNdVlbJq84dfT",
      "slug": "battlefield-persistence",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:9d5936c7a7f4a14fd2f59101c0e6c7009982a3eea5de5ff4628de8a1d0fca421",
    "translatableHash": "sha256:f451edceb1dff5837293b41b9129f20815854b9ea4c0fa1e8b562bd39222cdcf",
    "data": {
      "schemaVersion": 1,
      "name": "Battlefield Persistence",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "oracle"
      ],
      "traditions": [],
      "description": "Trigger You are about to attempt a saving throw, but you haven't rolled yet.\nYou're difficult to deter in battle. You gain a +2 status bonus to the triggering save, and if the triggering save is against an incapacitation effect, it treats you as if you were 2 levels higher.\nSpell Effect: Battlefield Persistence",
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
    "contentId": "pf2e:spell:spells-srd:shrink-the-span",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Az3PmWnlWSb5ELX9",
      "slug": "shrink-the-span",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/abundant-step.webp"
    },
    "sourceHash": "sha256:51bbd8591241f51cf68e688b62a2fc84ba3735234e8e4c72704e2caa11b389ea",
    "translatableHash": "sha256:43ee3dc275c34be7cd6c856ad1ce0c9b1f3194afa61baf685dfd6e014b8681f1",
    "data": {
      "schemaVersion": 1,
      "name": "Shrink the Span",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "focus",
        "manipulate",
        "monk",
        "teleportation"
      ],
      "traditions": [],
      "description": "You move so fast you blur across planar boundaries. You teleport up to a distance equal to your Speed within your line of sight.",
      "castingTime": "1 action",
      "range": "see text",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:horrific-visage",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "aZg3amDcrXz3cLCz",
      "slug": "horrific-visage",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:446f601faab27463b8fa788422032a69c39c13b54436110d91e96c4927d0d627",
    "translatableHash": "sha256:14cbaf102981ecac6cc6c43c2216ca0bfedb7c8ea355ebe3601c30f4e4de5d26",
    "data": {
      "schemaVersion": 1,
      "name": "Horrific Visage",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "emotion",
        "fear",
        "focus",
        "illusion",
        "manipulate",
        "mental",
        "sorcerer",
        "visual"
      ],
      "traditions": [],
      "description": "You briefly transform your features into the horrific visage of a hag, striking fear into your enemies. Foes in the area must attempt a Will save.\nSuccess The foe is unaffected.\nFailure The foe is Frightened 1.\nCritical Failure The foe is Frightened 2.\nHeightened (5th) Foes in the area are Frightened 1 on a success, Frightened 2 on a failure, and Frightened 3 and Fleeing for 1 round on a critical failure. They are still unaffected on a critical success.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "30 emanation",
      "duration": "",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened (5th) Foes in the area are Frightened 1 on a success, Frightened 2 on a failure, and Frightened 3 and Fleeing for 1 round on a critical failure. They are still unaffected on a critical success."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:elemental-motion",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "B8aCUMCHCIMUCEVK",
      "slug": "elemental-motion",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/elemental-motion.webp"
    },
    "sourceHash": "sha256:4c1a0b88b40f49188b630919812be50968033815bfb3a7087eb168d86a0973f2",
    "translatableHash": "sha256:00e8d7ee39217748edaf5271471a16fdf96a482a1a0dff68b49829aba37311e0",
    "data": {
      "schemaVersion": 1,
      "name": "Elemental Motion",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate",
        "sorcerer"
      ],
      "traditions": [],
      "description": "You call upon your element to propel you, improving your Speed depending on your element. This spell has your element's trait.\n• Air You gain a fly Speed equal to your Speed.\n• Earth You gain a burrow Speed of 10 feet.\n• Fire You gain a fly Speed equal to your Speed.\n• Metal You gain a burrow Speed of 10 feet.\n• Water You gain a swim Speed equal to your Speed and can breathe underwater.\n• Wood You gain a climb Speed equal to your Speed.\nSpell Effect: Elemental Motion\nHeightened (6th) You also gain a +10-foot status bonus to your Speeds.\nHeightened (9th) The status bonus increases to +20 feet.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (6th) You also gain a +10-foot status bonus to your Speeds.\nHeightened (9th) The status bonus increases to +20 feet."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:drain-life",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "cqdmSmQnM0q6wbWG",
      "slug": "drain-life",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:cd6d25c093da4eedc2d7e2057f3ebb017da7a1251da3ed14a9af70db2e5e5155",
    "translatableHash": "sha256:9368d196f2d1b08e17fa23c669a2f2881b36dd87c9edb37f45c88472707b7ea4",
    "data": {
      "schemaVersion": 1,
      "name": "Drain Life",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "focus",
        "manipulate",
        "sorcerer",
        "void"
      ],
      "traditions": [],
      "description": "You close your hand and pull life energy from another creature into yourself. This deals 3d4 void damage; the target must attempt a basic Fortitude save.\nYou gain temporary Hit Points equal to the damage the target takes, after resolving its save and applying a blood magic effect if applicable. If the target's Hit Points were lower than the damage you dealt, you gain temporary Hit Points equal to their remaining Hit Points instead. The temporary Hit Points last for 1 minute.\nHeightened 1 The damage increases by 1d4.",
      "castingTime": "1 action",
      "range": "30 feet",
      "target": "1 living creature",
      "area": null,
      "duration": "",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "3d4",
          "type": "void",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 1d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:embrace-the-pit",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ilGsyGLGjjIPHbyP",
      "slug": "embrace-the-pit",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/embrace-the-pit.webp"
    },
    "sourceHash": "sha256:2da096c08fd6b80c2c441ded744e797f3e14c6ce7f9a99df51cbfa70179648af",
    "translatableHash": "sha256:0a68eac284bcf901a229b72a4d6c602d9ec9d26fd1cf6fdb6ab6068d363e91c4",
    "data": {
      "schemaVersion": 1,
      "name": "Embrace the Pit",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "morph",
        "sorcerer"
      ],
      "traditions": [],
      "description": "Devil horns grow from your skull, and your skin takes on features of the devil responsible for your diabolic bloodline. You gain resistance 5 to fire and poison, and resistance 1 to physical damage (except silver).\nSpell Effect: Embrace the Pit\nHeightened 2 The resistance to fire and poison increase by 5, and the resistance to physical damage (except silver) by 2.",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 2 The resistance to fire and poison increase by 5, and the resistance to physical damage (except silver) by 2."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:swamp-of-sloth",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "iQD8OhhkwhvD8Blw",
      "slug": "swamp-of-sloth",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/swamp-of-sloth.webp"
    },
    "sourceHash": "sha256:6e26892d69bc9fd6e7ecaae030028470e7c96cbecb3443d2fb6b695da3506bb1",
    "translatableHash": "sha256:fc5703fd3bea60169ecd86043ca619709d890001657d37dec8b3d6f69bcde379",
    "data": {
      "schemaVersion": 1,
      "name": "Swamp of Sloth",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate",
        "olfactory",
        "sorcerer"
      ],
      "traditions": [],
      "description": "Ground in the area turns swampy and fetid. The area is difficult terrain. The sludge at the bottom of the morass animates into diminutive sludge beasts that have a demonic appearance. These don't function as normal creatures, but they swarm over creatures in the swamp and exude a noxious stench. The swamp deals 1d6 poison damage to creatures that end their turn in the area (basic Fortitude save). For each additional action you use when Casting the Spell, increase the burst's radius by 5 feet.\nHeightened 2 The damage increases by 1d6, and the initial radius increases by 5 feet",
      "castingTime": "1 to 3 actions",
      "range": "120 feet",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "1d6",
          "type": "poison",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The damage increases by 1d6, and the initial radius increases by 5 feet"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:ancestral-defense",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "J5KrjQKCg2PrF1vz",
      "slug": "ancestral-defense",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/ancestral-defense.webp"
    },
    "sourceHash": "sha256:edeb633689908719ce774892c2b5536be1d0847fde4060dcf7911edfa3fa5dc9",
    "translatableHash": "sha256:6b29ec6b151079a3e3df54e1b07dce0c5f37de137d1a6f282ed749f88cf4466b",
    "data": {
      "schemaVersion": 1,
      "name": "Ancestral Defense",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "focus",
        "fortune",
        "manipulate",
        "mental",
        "oracle"
      ],
      "traditions": [],
      "description": "Trigger You are about to attempt a Will save.\nYour ancestor protects you against those who would bend your will. You roll the triggering save twice and use the better result.",
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
    "contentId": "pf2e:spell:spells-srd:dragon-breath",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "JcobNl4iE9HmMYtE",
      "slug": "dragon-breath",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/dragon-breath.webp"
    },
    "sourceHash": "sha256:c091d7785aecd9aacf3ee9be6c4b705548410b7b21f251a44239f30b443f6115",
    "translatableHash": "sha256:505c236724a49646f740ccd0405d7619e4bfcbe9c9557ef6591aee7d337e7d5f",
    "data": {
      "schemaVersion": 1,
      "name": "Dragon Breath",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate",
        "sorcerer"
      ],
      "traditions": [],
      "description": "You spew energy from your mouth, dealing 5d6 damage with a basic Reflex save. The damage type depends on the magical tradition related to the dragon that influenced your bloodline.\nHeightened 1 The damage increases by 2d6.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "30 cone",
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
    "contentId": "pf2e:spell:spells-srd:angelic-wings",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "kRsmUlSWhi6PJvZ7",
      "slug": "angelic-wings",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/angelic-wings.webp"
    },
    "sourceHash": "sha256:0ea498b3959c368c537d00d89b888f8f594bea323ad01fcd53fc51c579f059fc",
    "translatableHash": "sha256:8e579dfde3ab72601a22c5296d0f3e5c380118b5caa8a50b3631eeee41095b76",
    "data": {
      "schemaVersion": 1,
      "name": "Angelic Wings",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "light",
        "manipulate",
        "sorcerer"
      ],
      "traditions": [],
      "description": "Wings of pure light spread out from your back, granting you a fly Speed equal to your Speed. Your wings cast bright light in a 30-foot radius. When this spell's duration would end, if you're still flying, you float to the ground, as Gentle Landing.\nHeightened (5th) The duration increases to 1 minute.\nSpell Effect: Angelic Wings",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "3 rounds",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (5th) The duration increases to 1 minute.\nSpell Effect: Angelic Wings"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:interstellar-void",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "L37RTc7K79OUpZ7X",
      "slug": "interstellar-void",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:651ff969eaddfc0d65238eafcad03d11307d9b42352d75ddb4fd4dc9a6f27923",
    "translatableHash": "sha256:4954a9bd725380affac2cd41b72fc904285d8dde76ecc61b24e98ebb97c62be5",
    "data": {
      "schemaVersion": 1,
      "name": "Interstellar Void",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "cold",
        "concentrate",
        "focus",
        "manipulate",
        "oracle"
      ],
      "traditions": [],
      "description": "You call upon the frigid depths of outer space to bring a terrible chill to your enemy. The target is cloaked in the freezing void, which deals 3d6 cold damage immediately and the first time each round you Sustain the Spell on future turns, with a basic Fortitude save.\nThe target is Fatigued for as long as the effect persists.\nHeightened 1 The cold damage increases by 1d6.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "3d6",
          "type": "cold",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The cold damage increases by 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:access-lore",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "LbPLNWlLCxKCo5gF",
      "slug": "access-lore",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:bca0371188650b4209732c8c33e14979d2fc7049ef03cb75d88a202cb453f6e5",
    "translatableHash": "sha256:7e82ba016a3002ad26ced9228efc1d23fb35096cd3cad9a59d9ab3c24cfaf4f9",
    "data": {
      "schemaVersion": 1,
      "name": "Access Lore",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "focus",
        "fortune",
        "manipulate",
        "oracle"
      ],
      "traditions": [],
      "description": "You sift through the multiverse's divine knowledge, seeking out tidbits related to a particular subject. Choose one Lore skill. You temporarily gain the same proficiency rank in that Lore skill as your proficiency rank for your oracle spellcasting.",
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
    "contentId": "pf2e:spell:spells-srd:thunderburst",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "LFSwMtQVP05EzlZe",
      "slug": "thunderburst",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/thunderburst.webp"
    },
    "sourceHash": "sha256:5264ac4557469f4fcc583e374041633f1075d64a1b863725821d0b0a34c43fdd",
    "translatableHash": "sha256:35d5dd82962907fcf31f4ecb726bbdb95dcb1cc91332b9d3d95f74928aa116af",
    "data": {
      "schemaVersion": 1,
      "name": "Thunderburst",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "air",
        "concentrate",
        "focus",
        "manipulate",
        "oracle",
        "sonic"
      ],
      "traditions": [],
      "description": "You create a powerful blast of air and a loud peal of thunder, dealing 2d6 bludgeoning damage and 2d6 sonic damage. Each creature in the area must attempt a Fortitude save.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage.\nFailure The creature takes full damage and is Deafened for 1 minute.\nCritical Failure The creature takes double damage and is deafened for 1 hour.\nHeightened 2 Each type of damage increases by 2d6, and the area increases by 5 feet.",
      "castingTime": "2 actions",
      "range": "100 feet",
      "target": "",
      "area": "20 burst",
      "duration": "",
      "defense": "fortitude save",
      "damage": [
        {
          "formula": "2d6",
          "type": "bludgeoning",
          "kind": "damage"
        },
        {
          "formula": "2d6",
          "type": "sonic",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 Each type of damage increases by 2d6, and the area increases by 5 feet."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:extend-blood-magic",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "LyqqvufOUIh8U25d",
      "slug": "extend-blood-magic",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:564efaecc577bc322cf061910fe00c2d5fa4dc14912455e304fdc4398bf3e4a7",
    "translatableHash": "sha256:c161b9cf9b5912ad46e14eb11f6dc034d683bff2a7a5269622b501769318d256",
    "data": {
      "schemaVersion": 1,
      "name": "Extend Blood Magic",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "sorcerer",
        "spellshape"
      ],
      "traditions": [],
      "description": "You call upon the arcane energy coursing through your blood to extend the magic it grants. If your next action is to Cast a Spell that grants you a blood magic effect that lasts for at least 1 round, you or a target gain the blood magic effect for an additional round. You can have only one extended blood magic effect at a time.",
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
    "contentId": "pf2e:spell:spells-srd:fey-disappearance",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "mBojKJatf9PTYC38",
      "slug": "fey-disappearance",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/fey-disapperance.webp"
    },
    "sourceHash": "sha256:79f6cd93b41c289a8dc1b7e69fcf0a53799c6a167457a1a0c079735509f457e5",
    "translatableHash": "sha256:c445fd6f3e09718ca694c772940d4aea174d7fdc18d3aa8201307879ba054601",
    "data": {
      "schemaVersion": 1,
      "name": "Fey Disappearance",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "focus",
        "manipulate",
        "sorcerer"
      ],
      "traditions": [],
      "description": "You become Invisible and ignore natural difficult terrain (such as underbrush). Any hostile action you use ends this invisibility, but you still ignore natural difficult terrain.\nHeightened (5th) If you use a hostile action, the invisibility doesn't end.",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": null,
      "duration": "until the end of your next turn",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (5th) If you use a hostile action, the invisibility doesn't end."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:qi-blast",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "oo7YcRC2gcez81PV",
      "slug": "qi-blast",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/ki-blast.webp"
    },
    "sourceHash": "sha256:83c9efdf7fc5652dac43e90dd4cb7400c318918fadd61ef488b31e50628ae376",
    "translatableHash": "sha256:0f1fa85d5aba4cba371df9a2433faefb81818e7654d2a7ef3166e03d961881d0",
    "data": {
      "schemaVersion": 1,
      "name": "Qi Blast",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "force",
        "manipulate",
        "monk"
      ],
      "traditions": [],
      "description": "You unleash your qi as a powerful blast that deals 2d6 force damage. If you use 2 actions to cast qi blast, increase the size of the cone to 30 feet and the damage to 3d6. If you use 3 actions to cast qi blast, increase the cone to 60 feet and the damage to 4d6. Each creature in the area must attempt a Fortitude save.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage.\nFailure The creature takes full damage and is pushed 5 feet.\nCritical Failure The creature takes double damage and is pushed 10 feet.\nHeightened 1 The damage increases by 1d6, or by 2d6 if you use 2 or 3 actions.",
      "castingTime": "1 to 3 actions",
      "range": "",
      "target": "",
      "area": "15 cone",
      "duration": "",
      "defense": "fortitude save",
      "damage": [
        {
          "formula": "2d6",
          "type": "force",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 1d6, or by 2d6 if you use 2 or 3 actions."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:armor-of-bones",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "pSNLufPPsReKQtJR",
      "slug": "armor-of-bones",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:f58c76e78891c8072b2a60da52a854927d3e7fca3507a4f96ab2f8c8139d5fc6",
    "translatableHash": "sha256:fc11a26da9cb44d08917db86c93656504fc1fbb4e2d2367a0927ceeb4dd45f27",
    "data": {
      "schemaVersion": 1,
      "name": "Armor of Bones",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "focus",
        "manipulate",
        "oracle"
      ],
      "traditions": [],
      "description": "You ossify your physical form, mimicking the durability of bone. You gain resistance 3 to cold, electricity, fire, piercing, and slashing damage.\nSpell Effect: Armor of Bones\nHeightened 1 Increase the resistance by 1.",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 Increase the resistance by 1."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:aberrant-whispers",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "qhJfRnkCRrMI4G1O",
      "slug": "aberrant-whispers",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:029823c5bafe76f12f419539ec1d36c78f72f20e33bc8cd9b14c5b62c58067cc",
    "translatableHash": "sha256:c1b80eb9028734b2793a1d83e15075b46b63a513d57cd5ebbe149c094ebe8a6c",
    "data": {
      "schemaVersion": 1,
      "name": "Aberrant Whispers",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "auditory",
        "concentrate",
        "focus",
        "mental",
        "sorcerer"
      ],
      "traditions": [],
      "description": "You utter phrases in an unknown tongue, assaulting the minds of those nearby. Each target must attempt a Will save. Regardless of the result of its save, each target is then temporarily immune for 1 minute. For each additional action you use when Casting the Spell, increase the emanation's radius by 5 feet.\nSuccess The target is unaffected.\nFailure The target is Stupefied 2.\nCritical Failure The target is Confused.\nHeightened 3 The initial radius increases by 5 feet.",
      "castingTime": "1 to 3 actions",
      "range": "",
      "target": "each foe in the area",
      "area": "5 emanation",
      "duration": "1 round",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened 3 The initial radius increases by 5 feet."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:whirling-flames",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Wi2HcreCfujKiCvW",
      "slug": "whirling-flames",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:d7ed1b33af2492daca4c1ab176b807ae809fdf8ea0f6fdb0e842b6959806437e",
    "translatableHash": "sha256:f74b8f6825986f4a51a9c0b5fb932ec6ab52fbc7712c005a22abf45c61fe6cdd",
    "data": {
      "schemaVersion": 1,
      "name": "Whirling Flames",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "fire",
        "focus",
        "manipulate",
        "oracle"
      ],
      "traditions": [],
      "description": "You call forth a storm of whirling flames, engulfing all creatures in that area and dealing 5d6 fire damage with a basic Reflex save.\nHeightened 2 The damage increases by 3d6, and you can add another non-overlapping 5-foot burst to the area.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "",
      "area": "5 burst",
      "duration": "",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "5d6",
          "type": "fire",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The damage increases by 3d6, and you can add another non-overlapping 5-foot burst to the area."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:delay-affliction",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ziHDISWkFSwz3pmn",
      "slug": "delay-affliction",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/delay-affliction.webp"
    },
    "sourceHash": "sha256:9e755b448f2f4a403c435419677fb37505fa0ea3f77c34ee3cc06b9d8830f944",
    "translatableHash": "sha256:e511afc9d8d8134b30c13c10e272a234a385ced98b5ca8e1f094897a70c114f7",
    "data": {
      "schemaVersion": 1,
      "name": "Delay Affliction",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "healing",
        "manipulate",
        "oracle",
        "vitality"
      ],
      "traditions": [],
      "description": "With a surge of healing energy, you push back against an affliction threatening the target and grant a small amount of healing. The target recovers 3d8 Hit Points.\nYou attempt to counteract any one affliction you are aware the target has, suspending its effects for 1 hour on a success rather than removing it.\nThe target is then temporarily immune to delay affliction for 1 day. You don't need to have identified the name of the specific affliction, but you do need to be aware of it; for instance, you couldn't delay an ingested poison during its onset period unless you were aware of the poison\nHeightened 1 The target recovers an additional 1d8 Hit Points, and you can attempt to suspend an additional affliction",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [
        {
          "formula": "3d8",
          "type": "vitality",
          "kind": "healing"
        }
      ],
      "heightening": "Heightened 1 The target recovers an additional 1d8 Hit Points, and you can attempt to suspend an additional affliction"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:wild-winds-stance",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "SkarN4VlNxSJSJNw",
      "slug": "wild-winds-stance",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:09fd6c06e67b20597fc506bfe617d4d8590efa20ad16a4d78e108e3bede5e7f7",
    "translatableHash": "sha256:ff9738fcfa0d9a78f66e5b40d8979eed2896d5242e99c59f5ff83ff55a531039",
    "data": {
      "schemaVersion": 1,
      "name": "Wild Winds Stance",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "air",
        "focus",
        "manipulate",
        "monk",
        "stance"
      ],
      "traditions": [],
      "description": "You take on the stance of the flowing winds, sending out waves of energy at a distance. You can make wind crash unarmed Strikes as ranged Strikes against targets within 30 feet. These deal 1d6 bludgeoning damage; are in the brawling group; and have the agile, nonlethal, propulsive, and unarmed traits. Wind crash Strikes ignore Concealment and all cover.\nWhile in wild winds stance, you gain a +2 circumstance bonus to AC against ranged attacks.\nStance: Wild Winds Stance",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": null,
      "duration": "until you leave the stance",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:clinging-shadows-stance",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "uJXs4M6IeixfPBLc",
      "slug": "clinging-shadows-stance",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/clinging-shadows-stance.webp"
    },
    "sourceHash": "sha256:5030162ac42c453e254ff4368e6b6aa889a2eb2ad4f293e2a57a841afcf4268f",
    "translatableHash": "sha256:1d6e0d969e00e9e1edf1fcbefd74848634695d78ec43901a4c16573c4190308d",
    "data": {
      "schemaVersion": 1,
      "name": "Clinging Shadows Stance",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "focus",
        "manipulate",
        "monk",
        "shadow",
        "stance"
      ],
      "traditions": [],
      "description": "You adopt the stance of clinging shadows. You can make shadow grasp Strikes. These deal 1d4 void damage; are in the brawling group; and have the agile, grapple, reach, and unarmed traits. While in clinging shadows stance, you gain a +2 circumstance bonus to Athletics checks to Grapple, and to the DC for creatures to Escape from you.\nStance: Clinging Shadows Stance",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": null,
      "duration": "until you leave the stance",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:grasping-grave",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "2YIr0S2Gt14PMMQp",
      "slug": "grasping-grave",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/grasping-grave.webp"
    },
    "sourceHash": "sha256:0599568ab4cd7e606482b2af0392e235f4ca8b2a9e9c14723f8939fdf74dec85",
    "translatableHash": "sha256:1a5577c6365114456b00f3cab524e6bf4fc4f8f99f69199b946f34fa48bd2aaf",
    "data": {
      "schemaVersion": 1,
      "name": "Grasping Grave",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate",
        "sorcerer"
      ],
      "traditions": [],
      "description": "Hundreds of skeletal arms erupt from the ground in the area, clawing at creatures within and attempting to hold them in place. The skeletal arms deal 6d6 slashing damage. Each creature in the area must attempt a Reflex save.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage.\nFailure The creature takes full damage and a –10-foot circumstance penalty to its Speeds for 1 round.\nCritical Failure The creature takes double damage and is Immobilized for 1 round or until it Escapes.\nHeightened 1 The damage increases by 2d6.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "",
      "area": "20 burst",
      "duration": "",
      "defense": "reflex save",
      "damage": [
        {
          "formula": "6d6",
          "type": "slashing",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:hellfire-plume",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "9LHr9SuDLTicdbXs",
      "slug": "hellfire-plume",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:f85f7fa4d4f88dae09c5918cb3bd23f76e737de2c7d382e7f45ec1b677999f39",
    "translatableHash": "sha256:b636860bbf64208dd26ef8d4d54c47e00efaf7fff9b475d8fd8fa2e5f4c0e343",
    "data": {
      "schemaVersion": 1,
      "name": "Hellfire Plume",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "fire",
        "focus",
        "manipulate",
        "sorcerer",
        "spirit"
      ],
      "traditions": [],
      "description": "You call forth a plume of hellfire that erupts from below, dealing 4d6 fire damage and 4d6 spirit damage.\nHeightened 1 The fire and spirit damage each increase by 1d6.",
      "castingTime": "2 actions",
      "range": "60 feet; 10-foot radius, 60-foot tall cylinder",
      "target": "",
      "area": "10 cylinder",
      "duration": "",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "4d6",
          "type": "fire",
          "kind": "damage"
        },
        {
          "formula": "4d6",
          "type": "spirit",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The fire and spirit damage each increase by 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:celestial-brand",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "9WlTR9JlEcjRmGiD",
      "slug": "celestial-brand",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:c14e6405d8c367faa241db4b4a9a9832f4c9fc935c3ac45b34430e36536b69e0",
    "translatableHash": "sha256:ca0778b17b39a9ead2c7672ea3a0d8d4093437095194c92f4d389b0d345980cc",
    "data": {
      "schemaVersion": 1,
      "name": "Celestial Brand",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "curse",
        "focus",
        "manipulate",
        "sorcerer"
      ],
      "traditions": [],
      "description": "A blazing symbol appears on the target, cursing it to face divine justice. You and your allies receive a +1 status bonus to your attack rolls and skill checks against it.\nAnytime a holy creature damages it, the holy creature deals an additional 1d4 spirit damage. The target is then temporarily immune for 1 minute.\nHeightened 2 The spirit damage increases by 1.\nSpell Effect: Celestial Brand",
      "castingTime": "1 action",
      "range": "30 feet",
      "target": "1 unholy creature",
      "area": null,
      "duration": "1 round",
      "defense": null,
      "damage": [
        {
          "formula": "1d4",
          "type": "spirit",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The spirit damage increases by 1.\nSpell Effect: Celestial Brand"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:chthonian-wrath",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "crF4g9jRN1y84MSD",
      "slug": "chthonian-wrath",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/abyssal-wrath.webp"
    },
    "sourceHash": "sha256:a9011633cbfd85e7bf148115995dec2b78af3d99aa259634fbeec2ed0d140fed",
    "translatableHash": "sha256:3e39bf22923dd81ab76a87c269eb024dc7f16301bea60ac7396d4e6ad09ae072",
    "data": {
      "schemaVersion": 1,
      "name": "Chthonian Wrath",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate",
        "sorcerer"
      ],
      "traditions": [],
      "description": "You evoke the energy of a part of the Outer Rifts. The damage types of the spell (one energy and one physical) are based on the result of rolling on the table below. You deal 4d6 damage of each of the corresponding damage types to each creature in the cone (8d6 total damage).\nHeightened 1 The damage for each type increases by 1d6\nChthonian Wrath\n1D4 | Realm | Manifestation | Damage and type |\n1 | Skies | Bolts and lightning and flying debris | Bludgeoning and electricity |\n2 | Depths | Acid and demonic shells | Acid and slashing |\n3 | Frozen | Frigid air and ice | Bludgeoning and cold |\n4 | Volcanic | Jagged volcanic rocks and magma | Fire and piercing |",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "60 cone",
      "duration": "",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "4d6",
          "type": "untyped",
          "kind": "damage"
        },
        {
          "formula": "4d6",
          "type": "untyped",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage for each type increases by 1d6\nChthonian Wrath\n1D4 | Realm | Manifestation | Damage and type |\n1 | Skies | Bolts and lightning and flying debris | Bludgeoning and electricity |\n2 | Depths | Acid and demonic shells | Acid and slashing |\n3 | Frozen | Frigid air and ice | Bludgeoning and cold |\n4 | Volcanic | Jagged volcanic rocks and magma | Fire and piercing |"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:unusual-anatomy",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ddKBoCjmSyPSHcws",
      "slug": "unusual-anatomy",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:1d290dcc0308a68369f986fbb5c3942c4467e5cd5745cc2ad74ba869b5a4dc33",
    "translatableHash": "sha256:c0669cffe59bf088ef5dfa9c4421bc491bc2057c158438e1f42555dd079f5430",
    "data": {
      "schemaVersion": 1,
      "name": "Unusual Anatomy",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "focus",
        "manipulate",
        "polymorph",
        "sorcerer"
      ],
      "traditions": [],
      "description": "You transform your flesh and organs into a bizarre amalgam of glistening skin, rough scales, tufts of hair, and tumorous protuberances. This has three effects:\n• You gain resistance 10 to precision damage and resistance 10 to extra damage from critical hits. If the resistance is greater than the extra damage, it reduces the extra damage to 0 but doesn't reduce the attack's normal damage.\n• You gain darkvision.\n• Acid oozes from your skin. Any creature that hits you with an unarmed attack or with a non-reach melee weapon takes 2d6 acid damage.\nHeightened 2 The resistances increase by 5, and the acid damage increases by 1d6.\nSpell Effect: Unusual Anatomy",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [
        {
          "formula": "2d6",
          "type": "acid",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The resistances increase by 5, and the acid damage increases by 1d6.\nSpell Effect: Unusual Anatomy"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:fey-glamour",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "DdXKfIjDtORUtUvY",
      "slug": "fey-glamour",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:ef2bd55b535f5b8995d484ce5d932092acbdb4b26d9d2abe91dbbf469e589e4a",
    "translatableHash": "sha256:221ba7900a9cf63b89be7eb01db401b4da396a6855443767754e1ec9542b3b6a",
    "data": {
      "schemaVersion": 1,
      "name": "Fey Glamour",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "illusion",
        "manipulate",
        "sorcerer"
      ],
      "traditions": [],
      "description": "You call upon fey glamours to cloak an area or the targets in illusion. This has the effect of either Illusory Scene on the area or Illusory Disguise on the creatures, as if heightened to a rank 1 rank lower than fey glamour, using fey glamour's range and duration.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "up to 10 creatures",
      "area": "30 burst",
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": "heightened to a rank 1 rank lower than fey glamour, using fey glamour's range and duration."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:arcane-countermeasure",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "h47yv6j6x1pUtzlr",
      "slug": "arcane-countermeasure",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:a8c6c842300b4c12c72ca77ba924ae15a5d694b7a916a20562ca8715088f6409",
    "translatableHash": "sha256:ce7502367207cf4ae04adc67cc8d9c1540dd91c2e7d2f92ceb4e9f8ec1036b78",
    "data": {
      "schemaVersion": 1,
      "name": "Arcane Countermeasure",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "focus",
        "manipulate",
        "sorcerer"
      ],
      "traditions": [],
      "description": "Trigger A creature within range that you can see Casts a Spell.\nYou undermine the target spell, making it easier to defend against. You reduce the spell's rank by 1, and targets of the spell gain a +2 status bonus to any saving throws, skill checks, AC, or DC against it.\nYou can't reduce the spell's rank below its minimum. For example, a 5th-rank Howling Blizzard would remain 5th-rank, but a 5th-rank Fireball would become 4th-rank. Targets still gain all the other benefits, even if you don't reduce the spell's rank.\nSpell Effect: Arcane Countermeasure",
      "castingTime": "reaction",
      "range": "120 feet",
      "target": "the spell cast by the triggering creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:dragon-wings",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "HWJODX2zPg5cg34F",
      "slug": "dragon-wings",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:1dd445fcb7c92b38b60a4bd02facb1d12f10b3f0dda58b689f680436514d0740",
    "translatableHash": "sha256:cdfa7cf19cf7875117ed4ac4caccca238ba40c1909e88b0462ca707b14b2424a",
    "data": {
      "schemaVersion": 1,
      "name": "Dragon Wings",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate",
        "morph",
        "sorcerer"
      ],
      "traditions": [],
      "description": "Leathery wings sprout from your back, giving you a fly Speed of 60 feet or your Speed, whichever is faster. If you're still flying when this spell's duration would end, you float to the ground, as with the effects of Gentle Landing.\nHeightened (8th) The duration increases to 10 minutes.\nSpell Effect: Dragon Wings",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (8th) The duration increases to 10 minutes.\nSpell Effect: Dragon Wings"
    }
  }
]
