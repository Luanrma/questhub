import type { Pathfinder2eOriginalContentRecord } from '../../records'
import type { Pathfinder2eSpellData } from '../types'

export const PATHFINDER_2E_EXHAUSTIVE_19_SPELL_ORIGINALS: readonly Pathfinder2eOriginalContentRecord<Pathfinder2eSpellData>[] = [
  {
    "contentId": "pf2e:spell:spells-srd:liberating-command",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "0Dcd4iEXqCrkm4Jn",
      "slug": "liberating-command",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:9fb8643c3be366723686295e0dea6b8845077aa1f72b43672f73e5c339a03b24",
    "translatableHash": "sha256:2980b611133a2e6b6adea08b12a4126e1ca75b3e525fa3d191b4e65a46b4dae6",
    "data": {
      "schemaVersion": 1,
      "name": "Liberating Command",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "auditory",
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "occult"
      ],
      "description": "You call out a liberating cry, urging an ally to break free of an effect that holds them in place. If the target is Grabbed, Immobilized, or Restrained, it can immediately use a reaction to attempt to Escape.",
      "castingTime": "1 action",
      "range": "60 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:shattering-gem",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "0uRpypf1Hi7ahvTl",
      "slug": "shattering-gem",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:a2dd49e38f25fe38ff1df34121dc7edcbf455079fb96cb084ac47c9536d2f2c1",
    "translatableHash": "sha256:ba43fa34a4c06072c026fc8eef232b0464f00ca9265ecc7d43b1d7b44ee0346b",
    "data": {
      "schemaVersion": 1,
      "name": "Shattering Gem",
      "rank": 1,
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
      "description": "A large gem floats around the target in an erratic pattern. The gem has 5 Hit Points. Each time a creature Strikes the target, the target attempts a check (flat, dc:11, showDC:all). On a success, the gem blocks the attack, so the attack first damages the gem and then applies any remaining damage to the target. If the gem is reduced to 0 Hit Points, it shatters, immediately dealing 1d8 slashing damage (basic Reflex save) to the creature that destroyed it, as long as that creature is within 10 feet of the target.\nHeightened 1 The gem has 5 additional Hit Points, and the damage dealt by its detonation increases by 1d8.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "1d8",
          "type": "slashing",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The gem has 5 additional Hit Points, and the damage dealt by its detonation increases by 1d8."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:endure",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "4c1c6eNzU1PFGkAy",
      "slug": "endure",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:98e9f8a9e857478ef7d8b55832bf59e33d93475c1baef77a32a73833453866f9",
    "translatableHash": "sha256:dc6d2eebe2f494c4a9c5e7b9cabf40f6110df943258831576d5c7391de0c6487",
    "data": {
      "schemaVersion": 1,
      "name": "Endure",
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
      "description": "You invigorate the touched creature's mind and urge it to press on. You grant the touched creature 5 temporary Hit Points that last for 1 minute.\nHeightened 1 The temporary Hit Points increase by 5.\nSpell Effect: Endure",
      "castingTime": "1 action",
      "range": "touch",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 The temporary Hit Points increase by 5.\nSpell Effect: Endure"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:malediction",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "AdZ2rWJStZ5unxzq",
      "slug": "malediction",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:99c09390c9eac7bd094c7956af9ee8944377102e6389683612b6e1819a8d7f0b",
    "translatableHash": "sha256:b506496db3cbff7a855e3c1a068e3ce5265b9413fdff392f8405a1eb2d3599d5",
    "data": {
      "schemaVersion": 1,
      "name": "Malediction",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "aura",
        "concentrate",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "divine"
      ],
      "description": "You incite distress in the minds of your enemies, making it more difficult for them to defend themselves. Enemies in the area must succeed at a Will save or take a –1 status penalty to AC as long as they're in the area.\nOnce per round on subsequent turns, you can Sustain the spell to increase the emanation's radius by 10 feet and force enemies in the area that weren't yet affected to attempt a saving throw.\nMalediction can counteract benediction.\nSpell Effect: Malediction",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "10 emanation",
      "duration": "1 minute",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:shockwave",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "dgCH2E0gMLMUgyFl",
      "slug": "shockwave",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:7a08973a281187a74daf172ee5de73815329949f004cde46a5dd1475a5cc438a",
    "translatableHash": "sha256:158a42cad1eb7cb39a734e7ea4839a3c7cfb65bfb87b24c742c683c34259f9c4",
    "data": {
      "schemaVersion": 1,
      "name": "Shockwave",
      "rank": 1,
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
      "description": "You create a wave of energy that ripples through the earth. Terrestrial creatures in the affected area must attempt a Reflex save to avoid stumbling as the shockwave shakes the ground.\nCritical Success The creature is unaffected.\nSuccess The creature is Off-Guard until the start of its next turn.\nFailure The creature falls Prone.\nCritical Failure As failure, plus the creature takes 1d6 bludgeoning damage.\nHeightened 1 The area increases by 5 feet (to a 20-foot cone at 2nd rank, and so on).",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "15 cone",
      "duration": "",
      "defense": "reflex save",
      "damage": [
        {
          "formula": "1d6",
          "type": "bludgeoning",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The area increases by 5 feet (to a 20-foot cone at 2nd rank, and so on)."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:anticipate-peril",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "EUMjrJJwSgsqNidi",
      "slug": "anticipate-peril",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:a6ce7d6dcfa365f58047de6542a6b675ebf8e3af388e0d7fb297a83ec946229a",
    "translatableHash": "sha256:5f6456fd5f05177635ed00b6ad2402862a21e130adf5fc16a505caa06ef20d20",
    "data": {
      "schemaVersion": 1,
      "name": "Anticipate Peril",
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
      "description": "You grant the target brief foresight. The target gains a +1 status bonus to its next initiative roll, after which the spell ends.\nHeightened 2 The status bonus increases by 1, to a maximum of +4 at 7th rank.\nSpell Effect: Anticipate Peril",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 2 The status bonus increases by 1, to a maximum of +4 at 7th rank.\nSpell Effect: Anticipate Peril"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:benediction",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "HGSCofGACf1TVH55",
      "slug": "benediction",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:6a57444682c833921b5dc914e7fe19637cb8cf8b79411bff9f10e52e6b712bd9",
    "translatableHash": "sha256:c0e74ca66533395acb3bdfb8735a4ae5cdd007585bc3dace541db07e1fd1f6eb",
    "data": {
      "schemaVersion": 1,
      "name": "Benediction",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "aura",
        "concentrate",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "divine"
      ],
      "description": "Divine protection helps protect your companions. You and your allies gain a +1 status bonus to AC while within the emanation. Once per round on subsequent turns, you can Sustain the spell to increase the emanation's radius by 10 feet.\nBenediction can counteract malediction.\nSpell Effect: Benediction",
      "castingTime": "2 actions",
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
    "contentId": "pf2e:spell:spells-srd:tether",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "MVrxZarUTnJxAUN8",
      "slug": "tether",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:e33f6f4bbacf9bcc470fea0348cd0f97b52e060a612f150404d8b441ac5a6d75",
    "translatableHash": "sha256:9eafdc87e2e7c83bb8e26e2f8661ce5497c62bc3299ac95c3b1d48f587e0ccda",
    "data": {
      "schemaVersion": 1,
      "name": "Tether",
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
      "description": "You use magical chains, vines, or other tethers to bind your target to you. The creature can still try to Escape, and it or others can break the tethers by attacking them (the tethers have AC 15 and 10 Hit Points). You must stay within 30 feet of the target while it's tethered; moving more than 30 feet away from your target ends the spell. The target must attempt a Reflex save. You can Dismiss the spell.\nCritical Success The target is unaffected.\nSuccess The target takes a –5-foot circumstance penalty to its Speed as long as it's within 30 feet of you.\nFailure The target takes a –10-foot circumstance penalty to its Speed and can't move more than 30 feet away from you until it Escapes or the spell ends.\nCritical Failure The target is Immobilized until it Escapes or the spell ends.\nHeightened 1 The tethers' AC increases by 3, and their Hit Points increase by 10.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": "reflex save",
      "damage": [],
      "heightening": "Heightened 1 The tethers' AC increases by 3, and their Hit Points increase by 10."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:share-lore",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "nXmC2Xx9WmS5NsAo",
      "slug": "share-lore",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:f9964870cb0108e03ebbaa7b1e0228812c8584ee15cf811ccdb969de99b1b57f",
    "translatableHash": "sha256:3f9c67c1c3c306116236d1385de8eb5de412043314cda3b70bb5cd1c4168cd23",
    "data": {
      "schemaVersion": 1,
      "name": "Share Lore",
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
      "description": "You share your knowledge with the touched creatures. Choose one Lore skill in which you're trained. The targets become trained in that Lore skill for the duration of the spell.\nHeightened (3rd) The duration of the spell is 1 hour, and you can target up to five creatures.\nHeightened (5th) The duration of the spell is 8 hours, you can target up to five creatures, and you can share up to two Lore skills in which you're trained.",
      "castingTime": "1 minute",
      "range": "touch",
      "target": "up to 3 creatures",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (3rd) The duration of the spell is 1 hour, and you can target up to five creatures.\nHeightened (5th) The duration of the spell is 8 hours, you can target up to five creatures, and you can share up to two Lore skills in which you're trained."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:befuddle",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "pBevG6bSQOiyflev",
      "slug": "befuddle",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:a57e1499e0e8e8e4eb62b072862e3879cb99e7f76b0f6f83bab46755b485358c",
    "translatableHash": "sha256:0944fc0ae41465bfd034d068f5b60ef3f288dcee2e6f7cb28cc52d1d54d80adb",
    "data": {
      "schemaVersion": 1,
      "name": "Befuddle",
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
      "description": "You sow seeds of confusion in your target's mind, causing its actions and thoughts to become clumsy.\nCritical Success The target is unaffected.\nSuccess The target is Clumsy 1 and Stupefied 1.\nFailure The target is Clumsy 2 and Stupefied 2.\nCritical Failure The target is Clumsy 3, Stupefied 3, and Confused.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 round",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:agitate",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "r8g7oSumKOHDqJsd",
      "slug": "agitate",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/agitate.webp"
    },
    "sourceHash": "sha256:6ffed570209cc4d9e3c8a77f3b9d55e7f402955655499b1d0973494ed4a93410",
    "translatableHash": "sha256:e3ab97909ce438382b72abba7563b91e7a8ee1ff0b1ae5693e966aa140a488fe",
    "data": {
      "schemaVersion": 1,
      "name": "Agitate",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "mental",
        "nonlethal"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You send the target's mind and body into overdrive, forcing it to become restless and hyperactive. During the duration, the target must Stride, Fly, or Swim at least once each turn or take 2d8 mental damage at the end of its turn. The GM might decide to add additional move actions to the list for creatures that possess only a more unusual form of movement. The duration of this effect depends on the target's Will save.\nCritical Success The spell has no effect.\nSuccess The duration is 1 round.\nFailure The duration is 2 rounds.\nCritical Failure The duration is 4 rounds.\nHeightened 1 The damage increases by 2d8.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "varies",
      "defense": "will save",
      "damage": [
        {
          "formula": "2d8",
          "type": "mental",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 2d8."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:acidic-burst",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "rnNGALRtsjspFTws",
      "slug": "acidic-burst",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:7d649f796a9a545374c021ff7cec43cb7b8ed1d7f2110bdd3902e5d58a9b2855",
    "translatableHash": "sha256:d9650f715e0b8e121b46332e9926e7e71853b9a4c08c7d59eaebd77dd806918b",
    "data": {
      "schemaVersion": 1,
      "name": "Acidic Burst",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "acid",
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You create a shell of acid around yourself that immediately bursts outward, dealing 2d6 acid damage to each creature in the area with a basic Reflex save.\nHeightened 1 The damage increases by 2d6.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "5 emanation",
      "duration": "",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "2d6",
          "type": "acid",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:temporary-tool",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "TPI9fRCAYsDqpAe4",
      "slug": "temporary-tool",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:c5d1dd6fe2a8c65698e6ce0a533c9433afc50c24bf44db74975534493ca1fbd6",
    "translatableHash": "sha256:195824a1e61df1a5ddcdbcc3bb50fd09d6586a1f5b20269f0871f59bc6a2ff01",
    "data": {
      "schemaVersion": 1,
      "name": "Temporary Tool",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "manipulate"
      ],
      "traditions": [
        "arcane"
      ],
      "description": "You conjure a temporary simple tool, such as a shovel or rope into your hands. It lasts until it's used for a single activity or for 1 minute, whichever comes first, after which it disappears. The tool is obviously temporarily conjured and thus can't be sold or passed off as a genuine item.",
      "castingTime": "1 minute",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute or until used (see text)",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:glamorize",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "UK349cSOljQVYpcu",
      "slug": "glamorize",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:a12f8b63249b0cfd1757e6ff66e4e1ccad63e073d22a78c15ffa0df26c037822",
    "translatableHash": "sha256:538311bfaa5a1991b2a0b590b422fb9a74851b79767979aa89c2ce395a77f538",
    "data": {
      "schemaVersion": 1,
      "name": "Glamorize",
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
      "description": "Using simple magical gestures, you alter a minor detail of your appearance (add or remove highlights to your hair color, apply or remove cosmetics, add polish or accessories to your nails, etc.) or create a small environmental effect that's confined to your person (adjust surrounding lighting to favor your good side, cause a brief wind to make your hair blow dramatically, make a small chime occur as you smile, etc.). While the spell is active, you can Sustain it to make further adjustments. The changes persist until the spell's duration ends.\nAt the GM's discretion, such alterations might grant a +1 status bonus to certain tasks, such as Impersonate or Perform.",
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
    "contentId": "pf2e:spell:spells-srd:message-rune",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Z7N5IxJCwrAdIgSg",
      "slug": "message-rune",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:627fbafdc6759e88e2b50cb2817b1b30ce0c99055d12e948188b0e465f6d1939",
    "translatableHash": "sha256:f478e748fc67791bf492ad0bcd1ed5b26bf492c68117ec5f44850859342d8398",
    "data": {
      "schemaVersion": 1,
      "name": "Message Rune",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "linguistic",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You record a message up to 5 minutes long and inscribe a special rune on any flat unattended surface or small object within reach. The nature of the rune's appearance is up to you, but it's visible to everyone, and it must be no smaller than 2 inches in diameter. You also specify a trigger that creatures must meet to activate the rune.\nFor the duration of the spell, creatures that meet the criteria of the trigger can touch the rune to hear the recorded message in their head as though you were speaking to them telepathically. You know when someone is listening to the message, but you don't know who's listening to it. You can Dismiss the spell.\nHeightened 2 The duration increases for every 2 ranks, becoming 1 week, 1 month, 1 year, or unlimited respectively.",
      "castingTime": "5 minutes",
      "range": "touch",
      "target": "1 flat unattended surface or non-magical object of light Bulk",
      "area": null,
      "duration": "1 day",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 2 The duration increases for every 2 ranks, becoming 1 week, 1 month, 1 year, or unlimited respectively."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:penumbral-shroud",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "zdb8cjOIDVKYMWdr",
      "slug": "penumbral-shroud",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:9f2cbd5d074d9118c97bb5836cf6db2cf31213218826d4699d082f56e0cc2721",
    "translatableHash": "sha256:6d2cf9989350fa85257cf1089fa5815bb7069ef048433f9cbdf0e4bb1de35904",
    "data": {
      "schemaVersion": 1,
      "name": "Penumbral Shroud",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "darkness",
        "manipulate",
        "shadow"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You envelop the target in a shroud of shadow. The target perceives light as one step lower than it actually is (bright light becomes dim light, for example), affecting their ability to sense creatures and objects accordingly.\nThe shroud also provides the target a +1 status bonus to saving throws against light effects. This effect is helpful to creatures sensitive to light, and a creature can willingly choose to be subject to the failure effect of the spell.\nCritical Success The target is unaffected.\nSuccess The effect lasts for 1 round.\nFailure The effect lasts its normal duration.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "10 minutes",
      "defense": "reflex save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:expeditious-excavation",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "aXoh6OQAL57lgh0a",
      "slug": "expeditious-excavation",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:5f30aba59bcd7f7ac771867cd012e4a7faf89a222de4bdd558b257b81fb5580b",
    "translatableHash": "sha256:6605f08fc8eb303d4a745cec0ac6d28cae9e3baa90627f170430479d81baeec6",
    "data": {
      "schemaVersion": 1,
      "name": "Expeditious Excavation",
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
      "description": "Area (continued) cube of dirt 5 feet across or smaller\nYou remove loose dirt, dust, gravel, sand, and the like (though not solid stone) up to the size of a 5-foot cube. Any Medium or smaller creature standing atop the earth when the spell is cast must attempt a Reflex save or check (acrobatics) check.\nSuccess The creature is unaffected and can choose to either descend the pit without damage or move to the nearest available space of its choice.\nFailure The creature falls Prone in the nearest available space of its choice or falls into the pit if it prefers.\nCritical Failure The creature falls into the pit excavated by the spell and lands prone, taking falling damage as normal.\nHeightened 2 The spell can excavate an additional 5-foot cube of earth. If you excavate all four 5-foot cubes beneath a Large creature, it must attempt a Reflex save or Acrobatics check, as above.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "",
      "area": "5 cube",
      "duration": "",
      "defense": "reflex save",
      "damage": [],
      "heightening": "Heightened 2 The spell can excavate an additional 5-foot cube of earth. If you excavate all four 5-foot cubes beneath a Large creature, it must attempt a Reflex save or Acrobatics check, as above."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:animus-mine",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "fWU7Qjp1JiX9g6eg",
      "slug": "animus-mine",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/animus-mine.webp"
    },
    "sourceHash": "sha256:e29f43459fd62ce8da416539a6e2f15ae9410f2cd793fa1c84b13f7a984e8b87",
    "translatableHash": "sha256:fbe9da62fc5e98676c165e37a8739ecdcaaeb57d7b1cbb4ddd166ed8af60494f",
    "data": {
      "schemaVersion": 1,
      "name": "Animus Mine",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "occult"
      ],
      "description": "You implant a mental mine within your psyche that detonates against anyone attempting to magically manipulate your thoughts. You can Sustain the spell to suppress the effects of the mine for 1 round to allow someone to safely use a mental effect on you. You can Dismiss the spell. The first creature that uses a magical mental effect against you triggers the animus mine, causing the spell to end. The animus mine deals 4d8 mental damage to the triggering creature, which must attempt a Will save.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage.\nFailure The creature takes full damage and is Stunned 1.\nCritical Failure The creature takes double damage and is stunned 1. You're unaffected by the triggering mental effect.\nHeightened 1 The damage increases by 2d8.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 hour",
      "defense": "will save",
      "damage": [
        {
          "formula": "4d8",
          "type": "mental",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 2d8."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:fungal-hyphae",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "oNUyCqbpGWHifS02",
      "slug": "fungal-hyphae",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:19172ff4cae724a1c11f0618c887348e05f70cb8606e0518c9c8615590068c51",
    "translatableHash": "sha256:f2709c159f5fe83aaa6ce07bb6278fb02e397089672b91bf717e949515f697f5",
    "data": {
      "schemaVersion": 1,
      "name": "Fungal Hyphae",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "fungus",
        "manipulate"
      ],
      "traditions": [
        "primal"
      ],
      "description": "Thin hyphae grow from your feet and plunge into the earth, creating a symbiotic fungal network that attaches to plants within 30 feet and connects you to their root systems. You gain an imprecise tremorsense, allowing you to sense anything directly touching plants within that distance. If you move, the hyphae snap, and the spell ends.\nHeightened (4th) You can control plants in the area to a small degree, allowing you to make Strikes with tree branches, exposed roots, or similarly solid plants. To do so, you use a Strike action, but you can Strike any creature you can detect with your tremorsense. These are spell attacks that deal 3d8 bludgeoning damage. Unusual plants, such as thorny vines, might deal a different type of damage at the GM's discretion. You can't make any other attacks through these plants, or take any other actions through them, other than these Strikes.\nHeightened (6th) As 4th rank, but you can use other simple manipulate actions through the plants, including having a branch pick an object up or open a door, though more complex actions, such as picking a lock or disabling a trap, remain impossible.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) You can control plants in the area to a small degree, allowing you to make Strikes with tree branches, exposed roots, or similarly solid plants. To do so, you use a Strike action, but you can Strike any creature you can detect with your tremorsense. These are spell attacks that deal 3d8 bludgeoning damage. Unusual plants, such as thorny vines, might deal a different type of damage at the GM's discretion. You can't make any other attacks through these plants, or take any other actions through them, other than these Strikes.\nHeightened (6th) As 4th rank, but you can use other simple manipulate actions through the plants, including having a branch pick an object up or open a door, though more complex actions, such as picking a lock or disabling a trap, remain impossible."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:penumbral-disguise",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "QZ7OHptO1xnwaruq",
      "slug": "penumbral-disguise",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:bb3ba74b22862dc1c7318c2f6293bbe6d5a544cbaa41e40c796a672c69f26462",
    "translatableHash": "sha256:a3bbbab030918a8b9da443e26575845a335c4d21b5b0ab78072b6938bf729508",
    "data": {
      "schemaVersion": 1,
      "name": "Penumbral Disguise",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "darkness",
        "manipulate",
        "shadow"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You wrap the target in shadows, granting it a +1 status bonus to Stealth checks to Hide while in dim light or darkness. In addition, the shadows mask the target's features. While the target is in dim light or darkness, other creatures must succeed at a Seek action against the spell's DC to discern details about its appearance. For example, without using Seek, other creatures can determine the target's general shape (such as humanoid), but they must Seek to determine the target's precise appearance. Creatures with darkvision can still see the target and its features normally. The target's normal appearance is revealed in bright light.\nHeightened (4th) The status bonus is +2. Creatures with darkvision can no longer discern details about the target while the target is in dim light or darkness without Seeking, though creatures with greater darkvision can still determine these details.\nHeightened (6th) As 4th rank, except the status bonus is +3, and creatures without darkvision can't determine even general details about the target while the target is in dim light or darkness unless they successfully Seek the target; these creatures see a vague shadow instead. Even on a successful Seek, they only determine general features, though they can see details on a critical success.\nHeightened (8th) As 6th rank, except the status bonus is +4, and even creatures with greater darkvision must Seek to discern details about the target while the target is in dim light or darkness.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 willing creature",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) The status bonus is +2. Creatures with darkvision can no longer discern details about the target while the target is in dim light or darkness without Seeking, though creatures with greater darkvision can still determine these details.\nHeightened (6th) As 4th rank, except the status bonus is +3, and creatures without darkvision can't determine even general details about the target while the target is in dim light or darkness unless they successfully Seek the target; these creatures see a vague shadow instead. Even on a successful Seek, they only determine general features, though they can see details on a critical success.\nHeightened (8th) As 6th rank, except the status bonus is +4, and even creatures with greater darkvision must Seek to discern details about the target while the target is in dim light or darkness."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:feast-of-ashes",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "siU9xRlqWXeKT0mH",
      "slug": "feast-of-ashes",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:8ce93d16b383f88e23447665a4f47eba60bb6359b15fe27380025a872e72a6d4",
    "translatableHash": "sha256:3cef06bdd10413e1f673e93cfd6b9ed9d431a83371f49280952627fe2c78bcf0",
    "data": {
      "schemaVersion": 1,
      "name": "Feast of Ashes",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "curse",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult",
        "primal"
      ],
      "description": "You curse the target with a hunger no food can sate. You can Dismiss the spell. The target must attempt a Fortitude save.\nCritical Success The creature is unaffected and is temporarily immune for 1 hour.\nSuccess The creature is Fatigued for 1 round.\nFailure The creature is immediately afflicted by hunger as if it hadn't eaten food in days. It becomes fatigued and takes 1d4 damage each day that can't be healed until it sates its hunger. No amount of eating can sate the creature's hunger during the spell's duration.\nCritical Failure As failure, but the creature takes 2d4 damage each day from unbearable hunger.\nHeightened 1 The hunger becomes more intolerable, increasing the damage each day by 1d4, or by 2d4 on a critical failure.",
      "castingTime": "3 actions",
      "range": "30 feet",
      "target": "1 living creature",
      "area": null,
      "duration": "1 week",
      "defense": "fortitude save",
      "damage": [
        {
          "formula": "1d4",
          "type": "untyped",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The hunger becomes more intolerable, increasing the damage each day by 1d4, or by 2d4 on a critical failure."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:radiant-field",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "v3vFzGazNSFEDdRB",
      "slug": "radiant-field",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/radiant-field.webp"
    },
    "sourceHash": "sha256:be0bab4b7d4c63fee5cd66b03e9a160c7a021c73060963156a4669012affa665",
    "translatableHash": "sha256:68fcd8d0e8c8c59c931fddc7e562a30324161b606da49d46ac5f260669cfb1b3",
    "data": {
      "schemaVersion": 1,
      "name": "Radiant Field",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "light",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult",
        "primal"
      ],
      "description": "You create an area of bright light. Creatures with Light Blindness that are Blinded by radiant field and remain in the area must attempt a Fortitude save at the start of their turns. On a failure, a creature remains blinded for 1 round; this is an incapacitation effect.\nThis spell also suppresses magical darkness of your radiant field spell's rank or lower.\nHeightened (4th) Creatures seen through the area are Concealed to creatures outside the area. Creatures with light blindness can continue to be blinded by the field as long as the field is visible, even when outside of the field.",
      "castingTime": "3 actions",
      "range": "120 feet",
      "target": "",
      "area": "20 burst",
      "duration": "1 minute",
      "defense": "fortitude save",
      "damage": [],
      "heightening": "Heightened (4th) Creatures seen through the area are Concealed to creatures outside the area. Creatures with light blindness can continue to be blinded by the field as long as the field is visible, even when outside of the field."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:fear-the-sun",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "vctIUOOgSmxAF0KG",
      "slug": "fear-the-sun",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:b8b6c0ffd6a9c6b1935e34b934292ab7e6dd2d08822bcd35049203f7d5198ddf",
    "translatableHash": "sha256:333e615f156192143069af64b9d57057a1f9bdc3298beeb7205ea21e808e3e04",
    "data": {
      "schemaVersion": 1,
      "name": "Fear the Sun",
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
      "description": "You cause the creature's vision to become particularly sensitive. The creature must attempt a Fortitude save. The creature is then temporarily immune for 1 minute.\nCritical Success The creature is unaffected.\nSuccess The creature is Dazzled for 1 round.\nFailure The creature is dazzled for 1 minute.\nCritical Failure The creature gains Light Blindness for 1 minute. If the creature is already exposed to bright light, it immediately becomes Blinded until the end of its next turn, as it isn't acclimated to its newly acquired light blindness.\nHeightened (6th) You can target up to 10 creatures.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "varies",
      "defense": "fortitude save",
      "damage": [],
      "heightening": "Heightened (6th) You can target up to 10 creatures."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:slough-skin",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "X3dYByf3YmkcdwG0",
      "slug": "slough-skin",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:2f67bb6bbf00f9c34c2889a37b78f8bf7296e82e617bde6b85a62ad6540d6a6f",
    "translatableHash": "sha256:3333c7ecd155ebe0c928d7dd12505e3ddc354a5387c8ad908955d5474c1c9a22",
    "data": {
      "schemaVersion": 1,
      "name": "Slough Skin",
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
      "description": "You continually and harmlessly slough off the top layer of your skin while new skin regenerates immediately, quickly moving damaging substances away from your body. The flat check to remove persistent damage from effects that coat your skin (such as most persistent acid damage) is reduced to 5, and you gain a +2 status bonus to your initial save against contact poison (but not to further saves since, by that point, the toxin has already entered your system).\nIf you're affected by an effect other than persistent damage that depends on continuous contact with your skin, and if that effect allows a saving throw, you receive a new saving throw against that effect at the end of each turn when you attempt your flat checks against persistent damage, and you also receive a +2 status bonus to those saving throws.\nWhile affected by this spell, your continually shedding skin makes you much easier to Track. Anyone Tracking you gains a +2 circumstance bonus to do so, and you can't Hide Your Tracks.",
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
    "contentId": "pf2e:spell:spells-srd:cup-of-dust",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "10siFBMF4pIDhVmf",
      "slug": "cup-of-dust",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:18475867832a48045fd70338dcea09c81a3a3b9db7b4baf18e1c21c5a598e57f",
    "translatableHash": "sha256:f33e8e0c72c4c75c97c035c58d20b3e8912db2cf406e6cd3ca101725cf985889",
    "data": {
      "schemaVersion": 1,
      "name": "Cup of Dust",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "concentrate",
        "curse",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult",
        "primal"
      ],
      "description": "You curse the target with a thirst no drink can quench. You can Dismiss the spell. The target must attempt a Fortitude save.\nCritical Success The creature is unaffected and is temporarily immune for 1 hour.\nSuccess The creature is Fatigued for 1 round.\nFailure The creature is immediately afflicted by thirst as if it hadn't had a drink in days. It becomes Fatigued and takes 1d4 damage each hour that can't be healed until it quenches its thirst. No amount of drinking can quench the creature's thirst during the spell's duration.\nCritical Failure As failure but the creature takes 2d4 damage each hour.\nHeightened 3 The thirst becomes more unbearable, increasing the damage each hour by 1d4, or by 2d4 on a critical failure.",
      "castingTime": "3 actions",
      "range": "30 feet",
      "target": "1 living creature",
      "area": null,
      "duration": "1 day",
      "defense": "fortitude save",
      "damage": [],
      "heightening": "Heightened 3 The thirst becomes more unbearable, increasing the damage each hour by 1d4, or by 2d4 on a critical failure."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:wall-of-shadow",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "DeF63UTmr7rchF60",
      "slug": "wall-of-shadow",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/wall-of-shadow.webp"
    },
    "sourceHash": "sha256:7313e4ec7a71c877c93cb714af3e0584774acb9c12d5c7e33cd3e84d795270d7",
    "translatableHash": "sha256:5c01b03e0d004f46bb6c03848733623f9eeed34209ab3fb6367aa883130ebaf7",
    "data": {
      "schemaVersion": 1,
      "name": "Wall of Shadow",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "concentrate",
        "darkness",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You form a wall of pure darkness in a straight line up to 60 feet long and 10 feet high. You must create the wall in an unbroken open space so its edges don't pass through any creatures or objects, or the spell is lost. The wall stands vertically and, if you wish, can be of a shorter length or height. The wall prevents light from passing through and appears as a sheet of pure darkness to creatures observing it.\nCreatures without darkvision or those unable to see through darkness can't see creatures on the other side of the wall. The wall is too thin for creatures to Hide in the darkness itself, but creatures can Hide from creatures on the other side of the wall as normal.\nHeightened (5th) Creatures with darkvision (but not greater darkvision) can barely see through the wall. They treat targets seen through the wall as Concealed.\nHeightened (7th) Creatures with greater darkvision can barely see through the darkness. They treat targets seen through the wall as concealed. All other creatures are unable to see through the darkness at all.",
      "castingTime": "3 actions",
      "range": "30 feet",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (5th) Creatures with darkvision (but not greater darkvision) can barely see through the wall. They treat targets seen through the wall as Concealed.\nHeightened (7th) Creatures with greater darkvision can barely see through the darkness. They treat targets seen through the wall as concealed. All other creatures are unable to see through the darkness at all."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:shifting-sand",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "HcIAQZjNXHemoXSU",
      "slug": "shifting-sand",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:138eb5d56cedac8b84d655deac460dc2000fabbc9938e6699985cb20af55d8aa",
    "translatableHash": "sha256:8f61eb4f735181846714a9dc8b532ef0b0e3fddf4e7353d325a396624d0a29e7",
    "data": {
      "schemaVersion": 1,
      "name": "Shifting Sand",
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
      "description": "Area (continued) a horizontal earthen or sandy surface within a 20-foot burst\nYou cause the surface to heave. The area becomes difficult terrain, and any tracks in the area are destroyed by the churning ground. Creatures standing in the area take a –1 status penalty to Acrobatics checks to Balance and Tumble Through and Athletics checks to High Jump and Long Jump. The first time each round you Sustain the Spell, you can move the churning area up to 20 feet in any direction. Creatures Immobilized by the spell are carried along with the shifting sand in the same direction, if possible. Creatures that enter or begin their turn standing in the shifting sand must attempt a Reflex save.\nCritical Success The creature is unaffected and ignores the area's difficult terrain and penalty to skill checks until the end of its turn.\nSuccess The creature ignores the area's penalty to skill checks until the end of its turn.\nFailure The creature is affected normally by the spell this turn.\nCritical Failure The creature becomes immobilized within the spell's area until it Escapes. If the creature was already immobilized by shifting sand, it also falls Prone.\nHeightened (5th) The status penalty increases to –2, and the spell's range increases to 60 feet.\nHeightened (7th) The status penalty increases to –3, the spell's range increases to 60 feet, and the spell's area increases to a 30-foot burst.\nHeightened (9th) The status penalty increases to –4, the spell's range increases to 60 feet, and the spell's area increases to a 40-foot burst.",
      "castingTime": "3 actions",
      "range": "30 feet",
      "target": "",
      "area": "20 burst",
      "duration": "1 minute",
      "defense": "reflex save",
      "damage": [],
      "heightening": "Heightened (5th) The status penalty increases to –2, and the spell's range increases to 60 feet.\nHeightened (7th) The status penalty increases to –3, the spell's range increases to 60 feet, and the spell's area increases to a 30-foot burst.\nHeightened (9th) The status penalty increases to –4, the spell's range increases to 60 feet, and the spell's area increases to a 40-foot burst."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:whirling-scarves",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "k9x6bXXpIgAXMDsx",
      "slug": "whirling-scarves",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:4a25262988a8c47aea9ae791c444bd62dafc01bd3ed4c614a12928c2cec0f871",
    "translatableHash": "sha256:824b331bb60bd1e38aa64f7440c1090c74426ab22b990dbd7dc14d667c5f2686",
    "data": {
      "schemaVersion": 1,
      "name": "Whirling Scarves",
      "rank": 3,
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
      "description": "You surround yourself in a vortex of whirling colorful scarves of force that obfuscate you and disorient your foes. You gain the benefits of the Concealed condition, but only against ranged and melee attacks. When a melee attack fails to hit you because of the flat check for the concealed condition, the scarves snag the weapon or unarmed attack, and the creature takes a –1 circumstance penalty to further attacks with that weapon or unarmed attack until the end of its turn (or the end of its next turn, if it wasn't the creature's turn). The timing of the scarves' movement is harder to predict for ranged attackers, so the flat check for the concealed condition against ranged attacks increases from DC 5 to DC 6. You can Dismiss this spell.\nHeightened 2 The circumstance penalty to further attacks with a melee weapon or unarmed attack the scarves snag increases by 1. The DC of the flat check for the concealed condition against ranged attacks increases by 1.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 2 The circumstance penalty to further attacks with a melee weapon or unarmed attack the scarves snag increases by 1. The DC of the flat check for the concealed condition against ranged attacks increases by 1."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:moonlight-ray",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "mtlyAyf30JnIvxVn",
      "slug": "moonlight-ray",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/moonlight-ray.webp"
    },
    "sourceHash": "sha256:fa6536a0bd8acb25fc2e556456a9751974c8dc670ad5e5b2c0873437a931b607",
    "translatableHash": "sha256:87a35ea60f9fedd3e0ad39d7ab6e2432b8f5083fa677b28b4ab390f2e89a51f8",
    "data": {
      "schemaVersion": 1,
      "name": "Moonlight Ray",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "attack",
        "cold",
        "concentrate",
        "holy",
        "light",
        "manipulate"
      ],
      "traditions": [
        "divine",
        "primal"
      ],
      "description": "You unleash a holy beam of freezing moonlight. Make a ranged spell attack. The ray deals 5d6 cold damage; if the target has the unholy trait, you deal an extra 5d6 spirit damage.\nMoonlight ray's cold damage is silver damage for the purposes of weaknesses, resistances, and the like.\nCritical Success The target takes double cold damage, as well as double spirit damage if a fiend or undead.\nSuccess The target takes full damage.\nIf the light passes through an area of magical darkness or targets a creature affected by magical darkness, moonlight ray attempts to counteract the darkness. If you need to determine whether the light passes through an area of darkness, draw a line between yourself and the spell's target.\nHeightened 1 The cold damage increases by 2d6, and the spirit damage against fiends and undead increases by 2d6.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [
        {
          "formula": "5d6",
          "type": "cold",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The cold damage increases by 2d6, and the spirit damage against fiends and undead increases by 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:show-the-way",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ThE5zPYKF4weiljj",
      "slug": "show-the-way",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:ad29dd13dcb0beb64d79f2c2785f8f86ef354ca67c763333a89892002231dbbe",
    "translatableHash": "sha256:8095a30d5f6837fde768d4a7f143322687fc85628e3208dd6ebed04c635348af",
    "data": {
      "schemaVersion": 1,
      "name": "Show the Way",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "concentrate",
        "detection",
        "manipulate"
      ],
      "traditions": [
        "divine",
        "primal"
      ],
      "description": "You and allies in the area gain preternatural knowledge of the path ahead, allowing you to intuit the best way forward and avoid potential obstacles, such as difficult or confusing terrain. For the purpose of long-distance overland travel during exploration mode, traveling through difficult terrain reduces you to only three-quarters your travel Speed instead of half, and traveling through greater difficult terrain reduces your travel Speed to only half your travel Speed instead of one-third. Show the way doesn't prevent you from falling into traps or encountering other artificial obstacles and hazards.\nHeightened (6th) For the purpose of long-distance overland travel during exploration mode, traveling through difficult terrain doesn't reduce your travel Speed at all, and traveling through greater difficult terrain reduces your travel Speed to only three-quarters of its normal value instead of one-third.",
      "castingTime": "10 minutes",
      "range": "",
      "target": "",
      "area": "20 emanation",
      "duration": "8 hours",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (6th) For the purpose of long-distance overland travel during exploration mode, traveling through difficult terrain doesn't reduce your travel Speed at all, and traveling through greater difficult terrain reduces your travel Speed to only three-quarters of its normal value instead of one-third."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:cloak-of-light",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ba1RyDpwq6tfW8VM",
      "slug": "cloak-of-light",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:537928b88b539bcbbcff31ef9507f4cb23ee486648739924007b450adcb64e84",
    "translatableHash": "sha256:cea4ee6f0ec1b442089646d7d1b26eadddb8107d07f34c5347a8e99237c1515a",
    "data": {
      "schemaVersion": 1,
      "name": "Cloak of Light",
      "rank": 4,
      "rarity": "common",
      "traits": [
        "concentrate",
        "healing",
        "light",
        "manipulate",
        "vitality"
      ],
      "traditions": [
        "divine",
        "primal"
      ],
      "description": "You surround yourself in holy light that restores the living and rebuffs undead. You glow with bright light in a 30-foot radius and dim light to the next 30 feet. Living creatures that begin their turn adjacent to you recover 4d6 Hit Points. Undead creatures that begin their turn adjacent to you take 4d6 vitality damage (basic Fortitude save).\nHeightened 2 The healing increases by 2d6, and the damage to undead increases by 2d6.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "4d6",
          "type": "vitality",
          "kind": "damage-or-healing"
        }
      ],
      "heightening": "Heightened 2 The healing increases by 2d6, and the damage to undead increases by 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:reflective-scales",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Mv5L4201uk8hnAtD",
      "slug": "reflective-scales",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:886af750024067bec2ab29b4d987e2507f30b3222664203e3db16c17aecdb5a8",
    "translatableHash": "sha256:795c3e9fe0f7f01ed1cbc7c692c9c4efe91203011e625b7f41916733126877c6",
    "data": {
      "schemaVersion": 1,
      "name": "Reflective Scales",
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
      "description": "You grow a set of colored, glowing scales or scaled armor that stores energy before releasing it in a final burst. When you cast this spell, choose acid, cold, fire, electricity, or poison damage. You gain resistance 5 against that type of damage. The scales' color depends on the damage type you chose, such as red or orange for fire damage.\nThe scales store up energy as they protect you. Keep track of how much damage the scales have prevented. As a 2-action activity that has the concentrate and manipulate traits, you can explode your scales outward in a 20-foot type:emanation, dealing 1d6 damage of the chosen type to all creatures in the area for every 10 damage the scales have prevented, to a maximum of 10d6 damage (after preventing 100 damage). Each creature in the area must attempt a basic Reflex save. Once you do so, the spell ends.\nHeightened 2 The resistance increases by 5, and the maximum damage from the scale explosion increases by 5d6.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 2 The resistance increases by 5, and the maximum damage from the scale explosion increases by 5d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:acid-storm",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ZW8ovbu1etdfMre3",
      "slug": "acid-storm",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/acid-storm.webp"
    },
    "sourceHash": "sha256:9aea9f4d30a014210009355d5d6d154a767c3654af95bbe6b2c9ce83d9635f37",
    "translatableHash": "sha256:348500b029915264f1c941f491b7e41042e832390fa0b661cd1b323d0e49a467",
    "data": {
      "schemaVersion": 1,
      "name": "Acid Storm",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "acid",
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You evoke a storm of acid rain that pelts the area for the spell's duration. A creature that begins its turn in the area takes 3d8 acid damage (basic Reflex save).\nHeightened 2 The damage increases by 1d8.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "",
      "area": "20 burst",
      "duration": "1 minute",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "3d8",
          "type": "acid",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The damage increases by 1d8."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:moonburst",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Shiuhdb2nO6Qgk3k",
      "slug": "moonburst",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:88776c3c6af2deaa59fd1f72fb9ce990bc4a5e5c5ffc0becb50489d6e183b701",
    "translatableHash": "sha256:f722e0d0ef8f44e59a3476ba3ff1cf9e0b9da47cb4b1410bfff72ff85658f21e",
    "data": {
      "schemaVersion": 1,
      "name": "Moonburst",
      "rank": 7,
      "rarity": "common",
      "traits": [
        "cold",
        "concentrate",
        "light",
        "manipulate",
        "vitality"
      ],
      "traditions": [
        "divine",
        "primal"
      ],
      "description": "A powerful globe of chilling moonlight explodes in the area, dealing 8d10 cold damage to all creatures in the area, plus an additional 8d10 vitality damage to undead creatures.\nMoonburst's cold damage is silver damage for the purposes of weaknesses, resistances, and the like. Each creature and object in the area must attempt a Reflex save.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage.\nFailure The creature takes full damage.\nCritical Failure The creature takes full damage and becomes Blinded permanently.\nIf the globe overlaps with an area of magical darkness, moonburst attempts to counteract the darkness effect.\nHeightened 1 The cold damage increases by 1d10, and the vitality damage against undead increases by 1d10.",
      "castingTime": "2 actions",
      "range": "500 feet",
      "target": "",
      "area": "60 burst",
      "duration": "",
      "defense": "reflex save",
      "damage": [
        {
          "formula": "8d10",
          "type": "cold",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The cold damage increases by 1d10, and the vitality damage against undead increases by 1d10."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:unbroken-panoply",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "19V9aVrn8OAHsn4Q",
      "slug": "unbroken-panoply",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:a5a27d0f60df6fec84aebb63900d6cdb238feb91197ae58d17761c63fcc3e00c",
    "translatableHash": "sha256:4443d2758ee5cdb138094403db9ac7c1413c71d98f963ab3e857d3871599edc2",
    "data": {
      "schemaVersion": 1,
      "name": "Unbroken Panoply",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate",
        "nonlethal"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "As tools of violence undone by violence, broken weapons contain potent symbolic magic that faydhaans often call upon when forming alliances. Images of similar legendary weapons overlay the target, and the weapon's broken condition is suppressed for the duration. The weapon gains the nonlethal trait during this time. The weapon's wielder can apply the weapon's item bonus to attack rolls, if any, to their Diplomacy checks. If the weapon would be damaged or broken again, this spell ends.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 broken weapon that is unattended or held by a willing creature",
      "area": null,
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:threefold-limb",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "3DY4vbXj0BYSWA7z",
      "slug": "threefold-limb",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:5bfa6b9d1a063e4d6e761201245879424fb10c6f169139dfe8d9c3ba321e6798",
    "translatableHash": "sha256:52a2f906d75d3ca37e45fa2a3613a348fc7194fa415ccfdcb79eedd472e46435",
    "data": {
      "schemaVersion": 1,
      "name": "Threefold Limb",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "attack",
        "concentrate",
        "manipulate",
        "morph",
        "water"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You temporarily transform one of your limbs into water, taking the form of ice, liquid water, or steam as you desire. Make a melee spell attack roll. On a hit, the target takes 2d6 damage; the type of damage dealt and any additional effect depends on the form you choose. On a critical hit, double the damage.\n• Ice The limb deals cold damage, and the target takes a –10-foot status penalty to its Speeds until the start of your next turn. This spell gains the cold trait.\nSpell Effect: Threefold Limb (Ice)\n• Liquid Water The limb deals bludgeoning damage and you can Reposition the target up to 10 feet.\n• Steam The limb deals fire damage and steam clings to the target, making all creatures Concealed to them until the start of your next turn or they perform an Interact action to wave the steam away. This spell gains the fire trait.\nHeightened 1 The damage increases by 2d6.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 The damage increases by 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:beseech-the-sphinx",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "7GZVTtzN7H4Jujc1",
      "slug": "beseech-the-sphinx",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:fba6569d0e26cd1d1bbe9db718eedb99c52a885363135a328336c2148b42773a",
    "translatableHash": "sha256:913ddba705168c900b708ad28d9497db4677d7f4e8d2df74e30c19e27c3aea52",
    "data": {
      "schemaVersion": 1,
      "name": "Beseech the Sphinx",
      "rank": 1,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "You look to the great Sphinx constellation, wisest of all cosmic guides and favored of Phimater, asking them to lend their insight to the target. Choose one skill and one type of saving throw (Fortitude, Reflex, or Will). The target gains a +1 status bonus to those skill checks and saving throws for the duration.\nHeightened (4th) The status bonus increases to +2.\nHeightened (7th) The status bonus increases to +3.\nSpell Effect: Beseech the Sphinx",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature other than yourself",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) The status bonus increases to +2.\nHeightened (7th) The status bonus increases to +3.\nSpell Effect: Beseech the Sphinx"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:pocket-library",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "TjWHgXqPv5jywMti",
      "slug": "pocket-library",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:f7430dd807bd4ca17397949edb1240ce164bc4d84e582fa3db7103aa5e3f7880",
    "translatableHash": "sha256:5e23d52c0d30a13e24c92cfcffd933a57dcf5abdc9b1c34f3d16406de2863a23",
    "data": {
      "schemaVersion": 1,
      "name": "Pocket Library",
      "rank": 1,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "extradimensional",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "Like Vil Seral, you collect information from all around you and store it in book form in an extradimensional library. When you Cast this Spell, choose any skill in which you are at least trained that has the Recall Knowledge action.\nDuring the duration of this spell, you can call forth a tome from the extradimensional library when attempting a Recall Knowledge check using your chosen skill. This is part of the action to Recall Knowledge. You must have a hand free to do so. The tome appears in your hand, open to an appropriate page. This grants you a +1 status bonus to the Recall Knowledge check. If you roll a critical failure on this check, you get a failure instead. If the roll is successful and the subject is a creature, you gain additional information or context about the creature. Once you reference a book from your pocket library, the spell ends.\nSpell Effect: Pocket Library\nHeightened (3rd) The status bonus increases to +2 and you can reference your pocket library twice before the spell ends.\nHeightened (6th) The status bonus increases to +3 and you can reference your pocket library three times before the spell ends.\nHeightened (9th) The status bonus increases to +4 and you can reference your pocket library four times before the spell ends.",
      "castingTime": "3 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "24 hours",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (3rd) The status bonus increases to +2 and you can reference your pocket library twice before the spell ends.\nHeightened (6th) The status bonus increases to +3 and you can reference your pocket library three times before the spell ends.\nHeightened (9th) The status bonus increases to +4 and you can reference your pocket library four times before the spell ends."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:the-parrots-whisper",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "8NK5HtDxM3Qktu8H",
      "slug": "the-parrots-whisper",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:6041cd3ad887ae5b03092f6d87c351ab0646b9e72b4850d9d3d2221050eaf6a8",
    "translatableHash": "sha256:405c666a3a750ca8c76f83753a00e2dc509f2bbcee1e58e77026aedc3d1edc94",
    "data": {
      "schemaVersion": 1,
      "name": "The Parrot's Whisper",
      "rank": 2,
      "rarity": "uncommon",
      "traits": [
        "auditory",
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "You call forth an echo of the gossiping parrot from the tale of the Witch and the Weaver to whisper the secrets of a creature you can see within range. The garrulous parrot is known to chatter on for some time while deciphering the information you seek. The target must attempt a Will saving throw.\nCritical Success The parrot chatters about various random topics for 1 round and reveals no relevant information.\nSuccess The parrot tells you the target's highest weakness at the start of your next turn. In the meantime, the parrot chatters about various random topics.\nFailure The parrot tells you the target's highest weakness immediately, but sticks around for 1 round to chatter.\nCritical Failure The parrot tells you the target's highest weakness immediately, and you can ask the parrot one question about the target creature. You might need to collaborate with the GM to narrow down the question. At the start of your next turn, the parrot answers the question truthfully.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:mental-map",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "PEGECeEtEmXEzwBT",
      "slug": "mental-map",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:1c188747f02209bac0cae0a65fb30dd66be6315e3d07ddf167f29af171daac9a",
    "translatableHash": "sha256:564ae1e04a0e33e3c009874d78ed48ac5c02d121d6b17f33ff02b962ba7421bc",
    "data": {
      "schemaVersion": 1,
      "name": "Mental Map",
      "rank": 2,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "mental"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You glean detailed information about a specific place visited by a creature directly from its mind, unless it fends you off with a Will save. The target can choose to fail the save.\nSuccess The target is unaffected.\nFailure You gain critical information about the place in question, granting you a +2 circumstance bonus to Survival checks while in the location and any skill checks to Recall Knowledge about the location for the next 24 hours.\nSpell Effect: Mental Map\nCritical Failure As failure, but you can erase all knowledge of the location from the target for 24 hours if desired.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 creature",
      "area": null,
      "duration": "24 hours",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:coiling-dance",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "RcZbmSZf2bFYQtTj",
      "slug": "coiling-dance",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:622398d14b8aef5b6c5dd5b46a31ec4ee22b9e61d360482ac1769161dcea8cca",
    "translatableHash": "sha256:423d15d58c5f8f2df896404e171497a1482316325ca709682e0db5086e7756fc",
    "data": {
      "schemaVersion": 1,
      "name": "Coiling Dance",
      "rank": 2,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "holy",
        "manipulate"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "You perform a dance that seeks to pass on the knowledge and wisdom of a naga. Your allies in the area are filled with sacred energy, making their spells and attacks holy. Creatures or effects that would be unholy don't gain this benefit\nSpell Effect: Coiling Dance\nWhen you cast or Sustain this spell, you can choose an ally in the area that's Grabbed, Immobilized, or Restrained. They can immediately use a reaction to Escape; they can use your Occultism or Religion modifier for the check instead of their unarmed attack, Acrobatics, or Athletics modifier if that would be better.",
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
    "contentId": "pf2e:spell:spells-srd:buzzing-servants",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "U7415tttUO8JLvpf",
      "slug": "buzzing-servants",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:47d86dada451438dce3f68129e27180a60e5c738103c3d0284099cd977589708",
    "translatableHash": "sha256:437b00aabca3a57d481e75d7a9632d579f9734487e80986f8768835812dc260c",
    "data": {
      "schemaVersion": 1,
      "name": "Buzzing Servants",
      "rank": 2,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "divine",
        "primal"
      ],
      "description": "You summon a swarm of bees from the city of Axis that rapidly constructs geometric shapes from wax. The bees appear in an unoccupied square, building a structure of hexagons, squares, and decagons that fill the space. The wax shape has a Hardness of 10 and 40 Hit Points but also decays over 24 hours.\nWhen you Sustain the spell, you can choose another unoccupied square in range that the bees move to and fill with wax shapes. Any amount of area or splash damage to the square they're present in kills the bees, ending further construction.",
      "castingTime": "3 actions",
      "range": "30 feet",
      "target": "one unoccupied 5-foot square",
      "area": "5 square",
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:the-queens-rainbow",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "V05lB4VsSMiMMsZJ",
      "slug": "the-queens-rainbow",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:e4836e9892915c7fac4d49314d97603c220d100be6f355eca9fb76fd222f18bc",
    "translatableHash": "sha256:3cfbe73833d67daa0302a16fe7f87f2c81e85fd9e79e084cb20ca0fc972c81ad",
    "data": {
      "schemaVersion": 1,
      "name": "The Queen's Rainbow",
      "rank": 2,
      "rarity": "uncommon",
      "traits": [
        "auditory",
        "concentrate",
        "linguistic",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult",
        "primal"
      ],
      "description": "You tell the story of the Queen of Bees and her retinue trying to pass through a rainbow on their way to visit the King of Spiders. You conjure forth a large, transparent rainbow. Creatures who enter or begin their turn in the rainbow's space must succeed at a Fortitude saving throw or become Dazzled for 1 round (or Blinded for 1 round on a critical failure).",
      "castingTime": "3 actions",
      "range": "",
      "target": "",
      "area": "60 line",
      "duration": "1 minute",
      "defense": "fortitude save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:kgalaserkes-axes",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "yo1eB5Xz21AYfWCI",
      "slug": "kgalaserkes-axes",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:d538b013ee768ee2c8ba493645916f14d24aac5465d1f9563b9795198c709786",
    "translatableHash": "sha256:e4cd380f94e4ce2baa73ea60076a0845580eef46b8b436f4682e2fca1de424f1",
    "data": {
      "schemaVersion": 1,
      "name": "Kgalaserke's Axes",
      "rank": 2,
      "rarity": "uncommon",
      "traits": [
        "auditory",
        "concentrate",
        "linguistic",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "The folklore and tales surrounding the legendary hero Kgalaserke are so widespread and well known that a hundred lifetimes would not be enough to have accomplished everything she is reputed to have done. Nevertheless, the stories all contain a unifying theme of her martial prowess despite the odds being stacked against her.\n1 You briefly describe Kgalaserke's signature axes and how she came to receive them. The target gains a +1 status bonus to attack rolls for the spell's duration.\n2 You revel in a tale of Kgalaserke striking down a foe after a struggle. For the spell's duration, when the target is damaged by a creature's attack, the target gains a +2 circumstance bonus to damage against that creature for 1 round.\nSpell Effect: Kgalaserke's Axes",
      "castingTime": "1 or 2",
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
    "contentId": "pf2e:spell:spells-srd:the-four-hunters",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "EdRYr7HmLm9wr71X",
      "slug": "the-four-hunters",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:4c60dbdcd212a0446107add352261500e36c6c0e0ce9f9cbac9aa0886c455cb9",
    "translatableHash": "sha256:377d2a6a14442587c7a544f3932348387011f3bc35b28163ff8b77f33a85ce96",
    "data": {
      "schemaVersion": 1,
      "name": "The Four Hunters",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "auditory",
        "concentrate",
        "linguistic",
        "manipulate"
      ],
      "traditions": [
        "occult",
        "primal"
      ],
      "description": "This is a story of four evenly matched hunters who sought to capture a falling star. Each hunter was known by the region they came from, and this spell focuses on one of their attributes. When you cast this spell, you must choose East, North, South, or West.\n• East was steady and optimistic. The target gains 5 temporary Hit Points and a +1 status bonus to Athletics for 1 round.\n• North was careful and cautious. The target can Step as a free action and gains a +1 status bonus to Survival for 1 round.\n• South was clever and cunning. The target becomes Concealed and gains a +1 status bonus to Stealth for 1 round.\n• West was bold and competitive. The target gains a +10-foot status bonus to their land Speed and a +1 status bonus to Acrobatics for 1 round.\n1 You quickly remind yourself of the story, granting only yourself the benefit.\n2 You tell a trusted ally within 30 feet this story, granting them the benefit.\n3 You impart this tale on all of your allies within 30 feet, granting them the benefit.\nSpell Effect: The Four Hunters",
      "castingTime": "1 to 3 actions",
      "range": "varies",
      "target": "1 or more creatures",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:disruptive-transfer",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "jSJz4vx0fXPHa3d6",
      "slug": "disruptive-transfer",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:58071d93f77b834bcd8055d3422c2e2f9efd91bf00e661ff794fd651b4df3538",
    "translatableHash": "sha256:13977bb557fac6ae07b45050633f61b87245394f98f427a459f34c85de2af02a",
    "data": {
      "schemaVersion": 1,
      "name": "Disruptive Transfer",
      "rank": 3,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "manipulate",
        "teleportation",
        "visual"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "Using Venorium Blorm's formulas, you calculate a path through space. Teleport to an empty square you can see within range. Creatures adjacent to your initial location witness an array of overlapping destinations. Each of them must succeed at a Will save or become Dazzled for 1 minute.",
      "castingTime": "2 actions",
      "range": "your Speed",
      "target": "",
      "area": null,
      "duration": "",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:annunciation-of-the-outer-gate",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "L1JnU3RepQiWxysc",
      "slug": "annunciation-of-the-outer-gate",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:7c57234e45e4a3a8f821abcf4852c50a3e130349234910d3b180df3f5c8ccb48",
    "translatableHash": "sha256:2a3e537414d0f95572ce5278d1b34ee5df966bd061b87134d58d3b6acd3acee2",
    "data": {
      "schemaVersion": 1,
      "name": "Annunciation of the Outer Gate",
      "rank": 3,
      "rarity": "rare",
      "traits": [
        "auditory",
        "concentrate",
        "mental"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "You announce yourself in the name of certain grim pacts that predate mortal life. This is not a compulsion, but rather an invitation of sorts. The invitation is understood by creatures in the area with telepathy and any who understand Aklo, Chthonian, Empyrean, Fey, or Utopian.\nThose who accept the invitation cannot take hostile action against others who agreed until 10 minutes pass and can communicate telepathically with them during that time. This effect ends immediately if any hostile action is taken against a creature that agreed.\nThose creatures who decline the choice or do not understand it must attempt a Will save.\nCritical Success Nothing happens.\nSuccess The creature is Frightened 1. If it understood the invitation, its frightened status doesn't decrease at the end of any turn in which it damaged a creature that agreed to the invitation.\nFailure As success, but the creature is Frightened 2.\nCritical Failure As success, but the creature is Frightened 3.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "30 emanation",
      "duration": "10 minutes (see text)",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:overwhelming-memory",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "LJHrndGJRmLdxgXD",
      "slug": "overwhelming-memory",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:c6a405b30ba2722389bfb3613de9dd7b7197c18b403969a04e49310243daca21",
    "translatableHash": "sha256:4a699115c30551935adf77188c18d95ec645cb3d26a80d76aad4f7af2d76499a",
    "data": {
      "schemaVersion": 1,
      "name": "Overwhelming Memory",
      "rank": 3,
      "rarity": "uncommon",
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
      "description": "You cause the target to recall a specific type of memory you choose from the list below, bringing it to the forefront of their mind with perfect clarity.\n• Gleeful The memory makes the target laugh uncontrollably. They can't use reactions.\n• Romantic The creature is consumed with their love for another. They are Fascinated by the memory.\n• Terrifying The creature is filled with terror and is Frightened 1.\n• Tragic The creature is overwhelmed with sorrow. They are Dazzled from the tears in their eyes.\nThe target must attempt a Will save.\nCritical Success The target is unaffected.\nSuccess The target is affected by the memory until the beginning of your next turn.\nFailure The target is affected by the memory until the beginning of your next turn and Stupefied 2 for the spell's duration.\nCritical Failure As failure, but the target is Stupefied 3 for the spell's duration.",
      "castingTime": "2 actions",
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
    "contentId": "pf2e:spell:spells-srd:ibexs-harvest",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "P7AToTm0ulueRk63",
      "slug": "ibexs-harvest",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:e87e832607ce2abc8ca72e264b8ba00220f2190209db277063eca5d457fbc783",
    "translatableHash": "sha256:19c328f08a9b6497214d5f18eb9101a61ceb999d95d97bcfddc233e5d0e44dc4",
    "data": {
      "schemaVersion": 1,
      "name": "Ibex's Harvest",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "auditory",
        "concentrate",
        "linguistic",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "In the tale \"Ibex's Harvest,\" Ibex turns from the path of a warrior to the path of a farmer, building up their community by working hard and sharing a bountiful harvest not just with their humanoid neighbors but also with their animal neighbors. Ibex initially focuses on distributing equally among the animals but learns that true equality requires knowing what each being needs. The number of actions you spend when Casting this Spell and telling the story determine its targets and effects.\n1 You give a brief description of Ibex's first bounty. One willing target you can touch gains 10 temporary Hit Points that last 1 minute.\n2 You tell the tale of how Ibex shared their harvest equally between Hippo and Ant. Two willing targets within 20 feet each gain 10 temporary Hit Points that last 1 minute.\n3 You impart Ibex's lesson about how to prevent others from taking advantage of generosity. All creatures within a 10-foot emanation are affected by the tale. Choose one creature in the emanation to take 2d8 mental (basic Will save), while each other creature in the emanation gains 5 temporary Hit Points that last 1 minute.\nHeightened 1 The temporary Hit Points increase by 3 and the mental damage for the 3-action version increases by 1d8.\nSpell Effect: Ibex's Harvests",
      "castingTime": "1 to 3 actions",
      "range": "varies",
      "target": "1 or more creature",
      "area": "10 emanation",
      "duration": "",
      "defense": "basic will save",
      "damage": [
        {
          "formula": "2d8",
          "type": "mental",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The temporary Hit Points increase by 3 and the mental damage for the 3-action version increases by 1d8.\nSpell Effect: Ibex's Harvests"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:thief-of-fortune",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "uGi6t3cypb93mgyV",
      "slug": "thief-of-fortune",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:73a258b8eef4517cb0c56b6f8eb319e925437489980653bfff6f30aa089f6213",
    "translatableHash": "sha256:e02fd13dacde63cdfff9a7ccce020da1f419d29cb0c75a20c8e51eccf74a95e2",
    "data": {
      "schemaVersion": 1,
      "name": "Thief of Fortune",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "divine"
      ],
      "description": "Seeing another creature improve themself with magic, you reach out and seize its benefits for yourself. Attempt a counteract check against the target spell effect. If you successfully counteract the effect, the effect does not end. Instead, you gain the effect of the target spell as well. If you would not be a valid target for the spell, you do not gain any of its benefits.\nThe spell's duration is halved as you siphon off its magical energy for yourself. Each round that both you and the original creature are affected by the spell counts for two rounds when determining the spell's duration. You can Dismiss the spell.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "one beneficial spell effect currently affecting a creature, with a duration of 10 minutes or less",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:ranages-circle",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Pmhlv3fzPTuIhTrT",
      "slug": "ranages-circle",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:9acf9bb8d976f91dc134f55cafc732db5b9481811fb2f602020690c0b084ca43",
    "translatableHash": "sha256:6f8cb7ba704489b1e96d7898a2eeb57e9c08369316afab6eab8b119d80d5109a",
    "data": {
      "schemaVersion": 1,
      "name": "Ranage's Circle",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "auditory",
        "concentrate",
        "earth",
        "linguistic",
        "manipulate",
        "plant",
        "wood"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "Many stories tell of a clearing deep in the Mwangi jungle, surrounded by ancient cypress trees. At the center stands an ancient baobab tree growing around a large sphere of black basalt. Legends say that two spirit brothers, Ranage and Golokango, dwelled there long ago until Golokango's evil ways forced the virtuous Ranage to encase his brother in stone. Ranage then transformed himself into a tree to surround and protect the rock for all time. By telling this tale, you condemn an enemy to a stony fate similar to Golokango's and summon plants to surround them.\nWhen you Cast this Spell, every square adjacent to the target becomes difficult terrain from the sudden eruption of plant life for 1 minute. The target also attempts a Fortitude save.\nCritical Success The target is unaffected.\nSuccess The target is Clumsy 1 as their feet are bound within stone. This condition lasts until they move from their current position.\nFailure The target is Clumsy 2 and Immobilized as their legs are encased in rock. The clumsy condition lasts until they move from their current position, and they can Escape from being immobilized with a check against your spell DC.\nCritical Failure The target is clumsy 2 and Restrained as nearly their entire body is covered in basalt. The clumsy condition lasts until they move from their current position, and they can Escape from being restrained with a successful check against your spell DC.",
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
    "contentId": "pf2e:spell:spells-srd:bridge-of-vines",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "VUUWjeapcyLZabVA",
      "slug": "bridge-of-vines",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:4f5604b2b1784102a97319e3ae1b7bb5f84f76c014c1d8e39c11cd2f8a7f54b3",
    "translatableHash": "sha256:e3cd076d7ad6e8f083e9588f1f62907579b7909f1481f21ce41ac3ab2011140a",
    "data": {
      "schemaVersion": 1,
      "name": "Bridge of Vines",
      "rank": 4,
      "rarity": "uncommon",
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
      "description": "Vines sprout beneath your feet and extend away from you in a straight line up to 60 feet, forming a 10-foot-wide bridge that can cross over difficult terrain and low obstacles, as well as reach higher ground. The bridge has an AC equal to your spell DC, Hardness 10, and 20 Hit Points. It is immune to critical hits and precision damage. The bridge lasts either for the duration of the spell, until it is destroyed, or until you Dismiss the spell.\nWhile the spell is active, you and your allies can use the bridge normally. If any other creatures attempt to use the bridge, the vines attempt to trip and entangle them. They must attempt a Reflex save against your spell DC.\nCritical Success The target is unaffected.\nSuccess The target treats the length of the bridge as difficult terrain.\nFailure As success, and the target is knocked Prone.\nCritical Failure As success, and the target is knocked prone and Grabbed until it Escapes (with a DC equal to your spell DC) or the spell ends.\nHeightened 1 The bridge's Hit Points increase by 10.",
      "castingTime": "3 actions",
      "range": "60 feet",
      "target": "",
      "area": null,
      "duration": "10 minutes",
      "defense": "reflex save",
      "damage": [],
      "heightening": "Heightened 1 The bridge's Hit Points increase by 10."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:domoras-defense",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "PIdXUPtE6ZGpFpXV",
      "slug": "domoras-defense",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:66bbd339bfa64cd9220de54aaf332e22bd86302ecb18eb82c8e538b5b035a163",
    "translatableHash": "sha256:ead72c197dd3e22b4dc4d3c78ec5bf9bafad647362d40babe9dd92cc75bca595",
    "data": {
      "schemaVersion": 1,
      "name": "Domora's Defense",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "auditory",
        "concentrate",
        "linguistic",
        "manipulate",
        "water"
      ],
      "traditions": [
        "arcane",
        "divine",
        "primal"
      ],
      "description": "Domora Hume is considered by most to be the first god caller, conjuring a god from the Plane of Water named Dyzad to protect his town from Mammoth Lord raiders. A lost story of this defense claims that Dyzad appeared to be in three places at once, blocking the raiders' spears, swords, and torches. The intended lesson is that Dyzad will overcome any barrier to protect the people of Sarkoris. This spell gives that intention physical form, allowing the caster to protect their people.\nWhen you Cast this Spell, a watery replica of the eidolon Dyzad appears in front of each of the targets, granting them a +1 circumstance bonus to AC and fire resistance 5.\nSpell Effect: Domora's Defense\nWhile the replica persists, a target can use the Shield Block reaction with the replica. The replica has Hardness 15 (or Hardness 20 against fire damage). They can use this reaction to reduce damage from any spell or magical effect, even if it doesn't deal physical damage. After a target uses Shield Block, the replica dissipates. The spell ends when you no longer Sustain it or if all three replicas have dissipated, whichever happens first.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "up to 3 creatures",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:devouring-void",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "EAuUxxnDV4v3KDAC",
      "slug": "devouring-void",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:986ac8d9fedb6868c7efe20a60bd94b6107f9c7ae390adeafbea3aff6f489700",
    "translatableHash": "sha256:e7c629c989f43ef1a1de31d623d138100868d95940dc00631915c515f8f4d7e9",
    "data": {
      "schemaVersion": 1,
      "name": "Devouring Void",
      "rank": 7,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate",
        "void"
      ],
      "traditions": [
        "arcane",
        "occult",
        "divine"
      ],
      "description": "Countless tears in space appear in the area, like hungry mouths. When the spell is cast and the first time each round it's sustained, living creatures in its area take 7d8 void damage (basic Fortitude save). A living creature using a move action to leave the area must succeed at a check (reflex) save or their action is disrupted at the edge of the area.\nHeightened 1 The void damage increases by 1d8.",
      "castingTime": "3 actions",
      "range": "120 feet",
      "target": "",
      "area": "30 burst",
      "duration": "1 minute",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "7d8",
          "type": "void",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The void damage increases by 1d8."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:loves-sacrifice",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "flKde7BHrZnRheMl",
      "slug": "loves-sacrifice",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:0161af1ad295f73bbd7c388f6c8dcbf3767074222f3950e0af21e4ee697c7cba",
    "translatableHash": "sha256:e4f761b004bb2e22e8415de1493dcd60844af9a557158a0ee9ed1fd302ff469e",
    "data": {
      "schemaVersion": 1,
      "name": "Love's Sacrifice",
      "rank": 7,
      "rarity": "uncommon",
      "traits": [
        "auditory",
        "concentrate",
        "emotion",
        "mental"
      ],
      "traditions": [
        "arcane",
        "divine"
      ],
      "description": "Trigger You take damage that would reduce you to 0 Hit Points.\nYou cry out for aid, and a creature near you feels compelled to throw itself in front of the threat as the ultimate expression of their love. A target that genuinely loves the caster without magical compulsion, at their player's or the GM's discretion, fails the save.\nCritical Success The target is unaffected.\nSuccess The creature moves adjacent to you, moving further than its Speed if necessary as the magic compels it to exceed its limits. It takes half the damage you would have taken, while you take the rest. If you would be reduced to 0 Hit Points, you're reduced to 1 instead.\nFailure As success, except they take the full damage. If the damage reduces them to 0 Hit Points, they immediately die; this is a death effect.\nPFS Note: This spell can only be cast on a friendly NPC with GM approval, and on a PC with their player's approval.",
      "castingTime": "reaction",
      "range": "30 feet",
      "target": "one creature",
      "area": null,
      "duration": "",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:chrysopoetic-curse",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "hvV6IruyW4MAr0Ub",
      "slug": "chrysopoetic-curse",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:eee8ba823219142a27342102df36fa2779d481908fc62abcc76a9a4bc6130199",
    "translatableHash": "sha256:60e7e1fa97aa7232141e7ce305471ab2e8d515a9fe254c9fa2c678b498743916",
    "data": {
      "schemaVersion": 1,
      "name": "Chrysopoetic Curse",
      "rank": 7,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "curse",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "divine"
      ],
      "description": "You grant the target the gift of riches, giving them the power to turn anything they touch to gold. The target must attempt a Will save.\nCritical Success The target is unaffected.\nSuccess The target's skin turns their armor and clothing partially to gold. If the target is wearing any armor or clothing, they become Encumbered.\nFailure As success, but the curse extends to the target's held weapons and other gear. If the target is holding any weapons or other objects, they become Clumsy 3, and the objects' Hardness is reduced by 5.\nCritical Failure The curse becomes even stronger, extending to the surrounding terrain. As failure, and if the creature is standing on a solid surface, the ground in their space transmutes itself into a quagmire of liquid gold. The gold is greater difficult terrain. If the creature leaves its square (or when the curse ends), any affected terrain returns to its original shape and substance and the terrain in the new square transmutes to gold.\nAny objects that were turned to gold return to their previous form and original shape when they leave the target's possession or the spell ends. As long as the target did not critically succeed on their saving throw, 2d6 gp worth of gold flakes and dust are left behind as the curse recedes.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "one creature",
      "area": null,
      "duration": "1 minute",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:restore-ground",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ljo9CEmnCMZXqfOQ",
      "slug": "restore-ground",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:e2a742705ceac32b866bc056f43ccd3a9ee55d869536639b0cedc952e277b409",
    "translatableHash": "sha256:af648d49d22415cb2f9770190960271f388cbc755cf7fa6e023bb7445567d629",
    "data": {
      "schemaVersion": 1,
      "name": "Restore Ground",
      "rank": 7,
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
      "description": "You sense that this place yearns to throw off the shackles of civilization. You attempt to restore the area within the burst to a natural state, removing all artificial objects and buildings and encouraging the growth of plants on the ground that remains. Creatures are unaffected unless caught in a structural collapse.\n• Ground All ground within the area becomes greater difficult terrain for 1 round.\n• Objects Any unattended object of Bulk 4 or less is destroyed, regardless of Hardness, unless it's an artifact or similarly hard to destroy.\n• Plants Plants in the area become healthier and more fruitful for 1 year.\n• Structures Structures within range are shaken and may collapse, as if affected by Earthquake.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "",
      "area": "30 burst",
      "duration": "varies",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:recall-legacy",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "onvFdBWAsQp0CsAy",
      "slug": "recall-legacy",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:1ee8e3b4067e93a6ed2d16f80fd250451210f23ce03dcb484ea59e8c5061fc16",
    "translatableHash": "sha256:b2a7de421a391ed3f30da2b41ca6c707ea83b6827c99013dead3ec73fc7dc772",
    "data": {
      "schemaVersion": 1,
      "name": "Recall Legacy",
      "rank": 7,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You establish a mental link with the target, focusing on a piece of knowledge important to their culture, family (by birth or choice), or home settlement. Both you and the target must be aware this knowledge exists, even if you don't know the exact details.\nAs your magic connects them to this legacy, the target gains a non-lineage ancestry feat from their ancestry. The feat must be of a level no higher than twice recall legacy's rank and the target must meet any prerequisites for the feat.\nThe target is then immune to any further castings of recall legacy until their next daily preparations.",
      "castingTime": "3 actions",
      "range": "touch",
      "target": "1 willing creature",
      "area": null,
      "duration": "Until the target's next daily preparations",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:indolent-haze",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "xh6hPMDx2n4OaBU7",
      "slug": "indolent-haze",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:71caf2d35779f301e0573ab7a3b0b3001ce18bfdc7ae6a4f1cb519dd03934893",
    "translatableHash": "sha256:aa0ace52a70abd771479c4f747722f7f70eb7557485709fef92b425e1c8e8beb",
    "data": {
      "schemaVersion": 1,
      "name": "Indolent Haze",
      "rank": 7,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "incapacitation",
        "manipulate",
        "mental",
        "sleep"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "The faint scent of poppies and a soothing calm fill the area, urging creatures to lay down and take a rest, to do nothing at all, ever again. Creatures in the area when you Cast the Spell must attempt a Will save. Creatures who end their turn in the area must also attempt the save. You can Dismiss the spell.\nCritical Success The creature is unaffected.\nSuccess The creature lies down to rest, becoming Prone. If they were already prone, they instead drift off to sleep, becoming Unconscious.\nFailure As success, except that the creature is so happy lying down that they cannot attempt to Stand or otherwise maneuver themself off of the ground on their next turn, though they can Crawl (potentially to escape the spell's area).\nCritical Failure The creature immediately lies down and drifts off to sleep, becoming prone and unconscious. Any creature in the area who is already unconscious when you Cast the Spell (or whose turn ends in the spell's area while they are unconscious) takes 6d4 spirit damage as their life force is drained away through their dreams. This damage does not automatically wake them.\nHeightened 1 The spirit damage increases by 2d4.",
      "castingTime": "3 actions",
      "range": "120 feet",
      "target": "",
      "area": "20 burst",
      "duration": "1 minute",
      "defense": "will save",
      "damage": [
        {
          "formula": "6d4",
          "type": "spirit",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The spirit damage increases by 2d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:mimic-spell",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "2a8wiTxvBhcMbMU5",
      "slug": "mimic-spell",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:d2d9bd51ffe738008632b3f0024287d6b74f3579410a911fb79276f4eb194e7c",
    "translatableHash": "sha256:dd8f601e94d003ccadfbd37aad94da7ba00390c614155c65f7254f9a96fed729",
    "data": {
      "schemaVersion": 1,
      "name": "Mimic Spell",
      "rank": 8,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "Trigger A creature you're aware of within range Casts a Spell of the same tradition as mimic spell and of the same or lower rank.\nYou learn the secrets of a spell just by watching someone else cast it. Attempt to counteract the spell cast by the triggering creature. If the spell would be counteracted, you instead gain the ability to Cast that Spell without expending a slot.\nOn your next turn, you spend the same number of actions to Cast the Spell as the triggering creature, but you choose the targets (if any) and use your spell attack modifier or spell DC as appropriate. The spell is heightened to the same rank as mimic spell. The mimicked spell is of the same tradition as the spells you normally cast.\nIf you don't Cast the mimicked Spell by the end of your next turn, it is lost, unless you Sustain the knowledge of it. You can Sustain this knowledge for up to 1 minute, after which it is lost.",
      "castingTime": "reaction",
      "range": "120 feet",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "heightened to the same rank as mimic spell. The mimicked spell is of the same tradition as the spells you normally cast.\nIf you don't Cast the mimicked Spell by the end of your next turn, it is lost, unless you Sustain the knowledge of it. You can Sustain this knowledge for up to 1 minute, after which it is lost."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:spirit-ward",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "MFtXn7t5vApQXqlq",
      "slug": "spirit-ward",
      "publicationTitle": "Pathfinder Lost Omens Shining Kingdoms",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:6b7fff233fe279ceaf8529b4d97785a66b2a682ce276230eae89157f7f943d16",
    "translatableHash": "sha256:2a528aa84ad0f6bbc8de4cd52ce2ecc55f36960577b16bb51ad42e0079efb1b5",
    "data": {
      "schemaVersion": 1,
      "name": "Spirit Ward",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "manipulate"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "You draw on nearby spiritual energy or on echoes of the spirits you've invoked throughout your life to temporarily ward living flesh against dangerous spirits. You grant the target a +1 status bonus to saving throws against spells and effects caused by creatures that have the spirit trait and haunts. The number of actions you spend when Casting this Spell determines its targets, range, area, and other parameters.\n1 The spell has a range of touch.\n2 (concentrate) The spell has a range of 30 feet. If you target a living creature, the bonus increases to +2.\n3 (concentrate) You create a ward in a 30-foot type:emanation. This targets you and all your allies in the burst.\nSpell Effect: Spirit Ward",
      "castingTime": "1 to 3 actions",
      "range": "varies",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:defended-by-spirits",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "oK8P3l5VvNKKDkZe",
      "slug": "defended-by-spirits",
      "publicationTitle": "Pathfinder Lost Omens Shining Kingdoms",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:1bbd711087d2c6551868d81789b8b92842ff0d4da579c6d0d4923abec27ce1fd",
    "translatableHash": "sha256:ee11a6e1b92d52cb94a3bf18852aa4ae2b41967b020707c2165aee186c95c62f",
    "data": {
      "schemaVersion": 1,
      "name": "Defended by Spirits",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate",
        "spirit"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "You entreat a spirit or the spiritual energies in your location to surround and protect an ally from an certain foe. Each time the enemy attacks and damages the ally, the enemy takes 1d6 spirit damage. The enemy is aware of these spirits and has a general sense that attacking the ally will draw the spirits' ire.\nHeightened 2 The damage increases by 1d6.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 ally and 1 enemy",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [
        {
          "formula": "1d6",
          "type": "spirit",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The damage increases by 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:equal-footing",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Z2oSFY2fT8zLkK4P",
      "slug": "equal-footing",
      "publicationTitle": "Pathfinder Lost Omens Shining Kingdoms",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:b7a139ea4ec31bdecab849b07129cb024ea1156e6be0d0098cb053a1d261ab03",
    "translatableHash": "sha256:231f70b4db4ca3de5e83acf1def5d2408804776af5d74e53ab6494e9bbc45235",
    "data": {
      "schemaVersion": 1,
      "name": "Equal Footing",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "curse",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult",
        "primal"
      ],
      "description": "You level the field between yourself and another creature, hampering its movements if it's quicker than you. The target attempts a Will save.\nCritical Success The target is unaffected.\nSuccess The target is Clumsy 1 and takes a –10-foot status penalty to all its Speeds until the end of your next turn.\nSpell Effect: Equal Footing (Success)\nFailure The target is clumsy 1 and takes a –15-foot status penalty to all its Speeds for 1 minute. During this time, it can't benefit from bonuses to its Speeds or take other penalties to its Speeds.\nCritical Failure The target is Clumsy 2 and takes a –15-foot status penalty to all its Speeds for 1 minute. During this time, it can't benefit from bonuses to its Speeds or take other penalties to its Speeds.\nSpell Effect: Equal Footing (Failure or Critical Failure)",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature with a land Speed greater than yours",
      "area": null,
      "duration": "varies",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:veil-of-spirits",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "lQbfgAu9uVJQC7x4",
      "slug": "veil-of-spirits",
      "publicationTitle": "Pathfinder Lost Omens Shining Kingdoms",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:1a15d4b3aabae4ef62d0e6214f5043f5de66efda45daa58df6c4c64b1a5e4f9d",
    "translatableHash": "sha256:5eb12d502d31ede7d4871ca46df478be0d3bba68dac62490051fc696bd35d30d",
    "data": {
      "schemaVersion": 1,
      "name": "Veil of Spirits",
      "rank": 2,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate",
        "spirit"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult"
      ],
      "description": "You draw on the essence of spiritual energy surrounding you to manifest a misty veil. When a creature that isn't immune to spirit damage begins its turn within the area, it must attempt a Reflex save. You can Dismiss the veil.\nCritical Success The creature is unaffected.\nSuccess The creature is Dazzled until the beginning of its next turn.\nFailure The creature is dazzled and gains a weakness to spirit damage equal to half your level until the beginning of its next turn as spiritual energy clings to it. A creature with spiritsense can't use that imprecise sense while it's dazzled in this way.\nCritical Failure As failure, but the weakness is equal to your level.\nSpell Effect: Veil of Spirits",
      "castingTime": "3 actions",
      "range": "120 feet",
      "target": "",
      "area": "20 burst",
      "duration": "1 minute",
      "defense": "reflex save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:manifestation-of-spirits",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "O1ZLfeOJpHbG9G6B",
      "slug": "manifestation-of-spirits",
      "publicationTitle": "Pathfinder Lost Omens Shining Kingdoms",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:f09bf02d938bac7a0c8205d9c12282af1bd28065e0a2bf4c4352395c23d8af8c",
    "translatableHash": "sha256:ff004d3c53a2ebf83116a3fdde31443de24a5e4a9913179551c743fcf7918070",
    "data": {
      "schemaVersion": 1,
      "name": "Manifestation of Spirits",
      "rank": 2,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "divine",
        "primal"
      ],
      "description": "You open the target's eyes to the plethora of spirits surrounding it—and it sees all these spirits as menacing and powerful. The target must attempt a Will save.\nCritical Success The target is unaffected.\nSuccess The target believes every spirit it sees is an imminent threat. It's Stupefied 3 for 1 round.\nFailure As success, but the effect lasts 1 minute.\nCritical Failure As failure, and the target becomes Confused for 1 round.\nHeightened (6th) You can target up to 5 creatures.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "varies",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened (6th) You can target up to 5 creatures."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:avenging-wildwood",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "T7N0LrYOLk3SwrFW",
      "slug": "avenging-wildwood",
      "publicationTitle": "Pathfinder Lost Omens Shining Kingdoms",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:712792a370fdec7636c1fe596ce736ee3a0a5f259bb37bcf98efcf1abf02e891",
    "translatableHash": "sha256:32e7fc3fdbc36e90489d17f522b8266280438906b6c7c7a8e4715a787c8c752d",
    "data": {
      "schemaVersion": 1,
      "name": "Avenging Wildwood",
      "rank": 2,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate",
        "plant",
        "wood"
      ],
      "traditions": [
        "primal"
      ],
      "description": "A Medium tree sprouts in an unoccupied square within range, its branches capable of striking out at your foes. This animated tree uses your spell attack modifier for its attack rolls and your spell DC for its AC. Its saving throw modifiers are equal to your spell DC – 10, and it has 20 Hit Points. Other creatures can't occupy its space, but allies can pass through its space. When you Cast the Spell and each time you Sustain it, you can have the tree make a branches Strike against a creature within 15 feet of it, dealing 2d8 bludgeoning, piercing, or slashing damage. You choose the damage type each time.\nIf the tree is in soil and survives to the end of the spell's duration, it remains as an ordinary, non-magical tree and continues to grow and thrive. The GM might determine that the tree disappears immediately in certain inhospitable situations.\nHeightened 2 The animated tree has 10 additional Hit Points, and its branches Strike deals 1d8 additional damage.",
      "castingTime": "3 actions",
      "range": "60 feet",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 2 The animated tree has 10 additional Hit Points, and its branches Strike deals 1d8 additional damage."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:warping-pull",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "UtINSoEJ0u630ia4",
      "slug": "warping-pull",
      "publicationTitle": "Pathfinder Lost Omens Shining Kingdoms",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:225a818d689446775708e716766a132c58711e88ce5b3d72f6f40fc5ca2061e0",
    "translatableHash": "sha256:0c38d91d8d662aa9ee2c3d7ac45395a183e925c012307569ebe52d1dd365f435",
    "data": {
      "schemaVersion": 1,
      "name": "Warping Pull",
      "rank": 2,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate",
        "teleportation"
      ],
      "traditions": [
        "arcane"
      ],
      "description": "Trigger An effect would deal damage to an ally within range.\nYou get an ally out of danger with a teleporting pull. You teleport the target to an unoccupied square up to 10 feet closer to you. The target gains resistance 5 to all damage against the triggering effect.\nHeightened 2 The resistance increases by 5.\nSpell Effect: Warping Pull",
      "castingTime": "reaction",
      "range": "30 feet",
      "target": "1 willing creature that would take damage from the triggering effect",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 2 The resistance increases by 5.\nSpell Effect: Warping Pull"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:eagles-cry",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "AUZPwEorddewm0x1",
      "slug": "eagles-cry",
      "publicationTitle": "Pathfinder Lost Omens Shining Kingdoms",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:68a53eb5284297c0004de5253d2529a3c9a70eaf4fe972b7ffada9ffd2ef7e0b",
    "translatableHash": "sha256:2235e0afba88c780a923ba529b1e9a50b3cfd789bcf18ee00c2fc0fecfbc9dac",
    "data": {
      "schemaVersion": 1,
      "name": "Eagle's Cry",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "auditory",
        "concentrate",
        "manipulate",
        "sonic"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You let out the mighty cry of a majestic eagle that pierces eardrums. This cry deals 4d8 sonic damage. Each creature in the area must attempt a Fortitude saving throw.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage and is Frightened 1.\nFailure The creature takes full damage and is Frightened 2.\nCritical Failure The creature takes double damage, is frightened 2, and is Fleeing for 1 round.\nHeightened 2 The damage increases by 3d8.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "30 cone",
      "duration": "",
      "defense": "fortitude save",
      "damage": [
        {
          "formula": "4d8",
          "type": "sonic",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The damage increases by 3d8."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:echo-jump",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "LpMeT0CW1OEKdaQL",
      "slug": "echo-jump",
      "publicationTitle": "Pathfinder Lost Omens Shining Kingdoms",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:270163a3507b7ff697c3780fa6cae4b7a2dd61a3a46deadda347d696523b1057",
    "translatableHash": "sha256:4adbf4b2a92f0c6dfd4d8418020bbde72d15f4aa342b10819b7c255eb1e7aad4",
    "data": {
      "schemaVersion": 1,
      "name": "Echo Jump",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "force",
        "manipulate",
        "teleportation"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You teleport to an unoccupied space within range, leaving behind a faint echo of your form that explodes with magical force. Each creature within a 10-foot emanation from your previous location takes 4d8 force damage.\nHeightened 2 The range increases by 10 feet, and the damage increases by 3d8.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "",
      "area": "10 emanation",
      "duration": "",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "4d8",
          "type": "force",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The range increases by 10 feet, and the damage increases by 3d8."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:radiant-globe",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "nXoc5YbcynmhZcQs",
      "slug": "radiant-globe",
      "publicationTitle": "Pathfinder Lost Omens Shining Kingdoms",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:aa09b84ef1cfea96e719fd6e0010a512d5fe10523c50a2c5f3e64a5ade1e43ad",
    "translatableHash": "sha256:7d23c08afbd6a08e0c7faff191a5114d8f9928d692c3cb7debdadf45000f58c6",
    "data": {
      "schemaVersion": 1,
      "name": "Radiant Globe",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "light",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "divine"
      ],
      "description": "You create a dome of brilliant light that destroys projectiles attempting to pass through it. Ammunition from physical ranged attacks—such as arrows, bolts, sling bullets, and other objects of similar size—is destroyed in a flash of light when it passes into or out of the globe's area. Attackers targeting creatures or objects through the globe's surface with physical ranged attacks must succeed at a Fortitude save or become Dazzled for 1 round (Blinded for 1 round on a critical failure).",
      "castingTime": "3 actions",
      "range": "120 feet",
      "target": "",
      "area": "10 burst",
      "duration": "1 minute",
      "defense": "fortitude save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:trade-items",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "rSpGzCyYrTMiWQoG",
      "slug": "trade-items",
      "publicationTitle": "Pathfinder Lost Omens Shining Kingdoms",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:f083becec82a49c8ef0b9e8be60ea07c493fce66dd3148d26d0937f0bd09bbfb",
    "translatableHash": "sha256:09dcc9133b9168872071dd9a8101565f52cae5af62463aca45f5408cc77dee5e",
    "data": {
      "schemaVersion": 1,
      "name": "Trade Items",
      "rank": 3,
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
      "description": "You magically swap an item you're holding for another that someone else has. The second item appears in the hand you were holding the first item (or it falls to the ground in your square if you're unable to hold it), and the first item appears in the same place on the other creature's possession where the second item was (held in a hand or attached to a belt, for instance). If the second item is in the possession of a creature unwilling to relinquish it, they can prevent the transposition with a successful Reflex save.\nHeightened (5th) Each object's maximum Bulk increases to 1. If one of the items is 1 Bulk and the other isn't, an unwilling creature gains a +2 circumstance bonus to their saving throw.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "1 item you're holding and 1 item in another creature's possession you can see, each no more than light Bulk",
      "area": null,
      "duration": "",
      "defense": "reflex save",
      "damage": [],
      "heightening": "Heightened (5th) Each object's maximum Bulk increases to 1. If one of the items is 1 Bulk and the other isn't, an unwilling creature gains a +2 circumstance bonus to their saving throw."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:spiritual-renewal",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "tBC1QmB33KWIuBFX",
      "slug": "spiritual-renewal",
      "publicationTitle": "Pathfinder Lost Omens Shining Kingdoms",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:565c0aa9db16614ee395adb46cdabc7487bc5555034f012e027ac821ebe5ddff",
    "translatableHash": "sha256:59cfebd3241ddbd08b04882f8c8266fd33a7bd1d2fe5781f081b6bb7907a98bb",
    "data": {
      "schemaVersion": 1,
      "name": "Spiritual Renewal",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "healing",
        "manipulate",
        "vitality"
      ],
      "traditions": [
        "divine"
      ],
      "description": "You draw upon the restorative power of the spirits around you. The target gains fast healing 8.\nHeightened 1 The fast healing increases by 2.\nSpell Effect: Spiritual Renewal",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 living creature",
      "area": null,
      "duration": "4 rounds",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 The fast healing increases by 2.\nSpell Effect: Spiritual Renewal"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:spiritual-transport",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "6o75SEEYjdaMDkoG",
      "slug": "spiritual-transport",
      "publicationTitle": "Pathfinder Lost Omens Shining Kingdoms",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:52ea57cf4970e2f7fea65809680fbd1dcb927fb9bf493a112aa061d8259a2801",
    "translatableHash": "sha256:7049b76678dc08611fd584aef76c64efc476ba56f9e9fdc4b1f037a5724f5868",
    "data": {
      "schemaVersion": 1,
      "name": "Spiritual Transport",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate",
        "teleportation"
      ],
      "traditions": [
        "divine"
      ],
      "description": "You call upon the spiritual energies surrounding you to teleport you to an unoccupied space within range that you can see. Any items you're wearing and holding come with you. Your familiar or animal companion, if you have one that's sharing your space or adjacent to your space, is transported with you, but any other creature sharing your space remains in that space.\nHeightened (7th) The range increases to 1 mile. You don't need to be able to see your destination, as long as you have been there in the past and know its relative direction from you.",
      "castingTime": "2 actions",
      "range": "240 feet",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (7th) The range increases to 1 mile. You don't need to be able to see your destination, as long as you have been there in the past and know its relative direction from you."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:kings-castle",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "vM8oBYaEPgEXBimM",
      "slug": "kings-castle",
      "publicationTitle": "Pathfinder Lost Omens Shining Kingdoms",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:e513ccc30f5a4d5df0328d1576b056d64b9d90d436b8a97a3cc61c58924048b8",
    "translatableHash": "sha256:2defad86d37274e90652fdbc13691a29f16cc169367ccd5e5f11fc6b7dbcbaa5",
    "data": {
      "schemaVersion": 1,
      "name": "King's Castle",
      "rank": 5,
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
      "description": "You and a willing creature swap places. You appear in the target's former space, and the target appears in your former space. You and your target must each be able to fit in the new spaces within range; otherwise, the spell fails.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "1 willing creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:pain-of-ages",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "HreHc5elibW9hVK8",
      "slug": "pain-of-ages",
      "publicationTitle": "Pathfinder Lost Omens Shining Kingdoms",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:8cfafa7da6e8c5a496530e94ecda673d29ad00a01df4b0f3bfffefc9b8c720f4",
    "translatableHash": "sha256:a5ec0d24f410814517a64e4910654963476865cbed1fab353cdb0e48224db5fd",
    "data": {
      "schemaVersion": 1,
      "name": "Pain of Ages",
      "rank": 6,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate",
        "spirit"
      ],
      "traditions": [
        "divine"
      ],
      "description": "You sense a spiritual resonance of deep anguish in the earth beneath your feet, the walls surrounding you, or the fragments of souls left behind in a place of calamity. You draw on this reservoir of pain and unleash its force against your enemies, dealing 8d8 spirit damage. On a critical failure, the creature is also Stunned for 1 round as it reels from the impact of so much anguish.\nHeightened 1 The damage increases by 2d8.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "",
      "area": "30 burst",
      "duration": "",
      "defense": "basic will save",
      "damage": [
        {
          "formula": "8d8",
          "type": "spirit",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 2d8."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:attacked-from-within",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "B4p4cD9Q71mHTpOP",
      "slug": "attacked-from-within",
      "publicationTitle": "Pathfinder Lost Omens Shining Kingdoms",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:a8d46ce684820b49f70a9ae08a594c3e58cb97951f59855dbc8e61729b0e40df",
    "translatableHash": "sha256:714c9688edc14841f0baffef7655d0362239cd1c03b56bd4c6b0c75b0862f0b6",
    "data": {
      "schemaVersion": 1,
      "name": "Attacked from Within",
      "rank": 7,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate",
        "spirit"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "You assert your power over the target's own spirit as you reach deep into its soul in order to discover a moment of excruciating anguish, debilitating humiliation, or abject despair. The target takes 12d8 spirit damage and must attempt a Will save.\nCritical Success The target takes no damage, with a brief sensation of pain followed by a pleasant memory.\nSuccess The target takes half damage and is Frightened 1.\nFailure The target takes full damage and is Frightened 2.\nCritical Failure The target takes double damage and is frightened 2 and Off-Guard for 1 round.\nHeightened 1 The damage increases by 2d8.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "varies",
      "defense": "will save",
      "damage": [
        {
          "formula": "12d8",
          "type": "spirit",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 2d8."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:sudden-transposition",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "2DFtBRLyYMPrimp7",
      "slug": "sudden-transposition",
      "publicationTitle": "Pathfinder Lost Omens Shining Kingdoms",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:8921862c51111ef9ce89edae9d571053dd1fdbf5269e50667a4b41289863b92e",
    "translatableHash": "sha256:f3b6356a01b0371a46021aa78d84688fcf38ffd82a7aa36bd07d266601bd3cc6",
    "data": {
      "schemaVersion": 1,
      "name": "Sudden Transposition",
      "rank": 8,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate",
        "teleportation"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You wrench the targets off their feet, forcefully teleporting them within the area. The creatures must each be able to fit in their new space, and their positions must be unoccupied, entirely within the area, and in your line of sight. Each target attempts a Fortitude save.\nCritical Success The target can teleport if it wants, but it chooses the destination within the area.\nSuccess The target is unaffected.\nFailure You teleport the target and choose its destination; the target takes 10d10 bludgeoning damage.\nCritical Failure You teleport the target and choose its destination; the target takes 20d10 bludgeoning damage and is knocked Prone.",
      "castingTime": "2 actions",
      "range": "",
      "target": "up to 2 creatures",
      "area": "60 emanation",
      "duration": "",
      "defense": "fortitude save",
      "damage": [
        {
          "formula": "10d10",
          "type": "bludgeoning",
          "kind": "damage"
        }
      ],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:forest-of-gates",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "oKC36WjFD1jgqUN5",
      "slug": "forest-of-gates",
      "publicationTitle": "Pathfinder Lost Omens Shining Kingdoms",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:dc81acfbe15e5d9fe8ba8c870187bea4d8d1d43fb5ad120fc172f57313644fba",
    "translatableHash": "sha256:775467c516fede41e91e01f34aa7d33ed4f6a65cacbdd24d6aa7e6386d013d04",
    "data": {
      "schemaVersion": 1,
      "name": "Forest of Gates",
      "rank": 9,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate",
        "teleportation"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You transport yourself and your allies to a peaceful extraplanar realm of towering trees, each of which holds a misty gateway to another location. When you Cast this Spell, you choose a specific destination within 1,000 miles that you can identify by its position relative to your starting position and by its appearance (or other identifying features). Incorrect knowledge of the location causes the spell to fail. You and your allies walk for 1 hour through the forest, and each of you regains Hit Points and reduces the value of any doomed or drained condition as if you'd taken a full night's rest. At the end of the journey, you attempt a check (arcana, dc:40, showDC:all) or check (nature, dc:40, showDC:all) check to find the correct gate to your desired location.\nCritical Success You and your allies arrive within 1,000 feet of your desired location.\nSuccess You and your allies arrive within 1 mile of your desired location.\nFailure You and your allies arrive within 10 miles of your desired location.\nCritical Failure You and your allies exit the forest within 1 mile of your original location.",
      "castingTime": "10 minutes",
      "range": "1000 miles",
      "target": "you and up to 6 willing creatures",
      "area": null,
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:armor-of-thorn-and-claw",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "EPTmSiURVp2ldkVB",
      "slug": "armor-of-thorn-and-claw",
      "publicationTitle": "Pathfinder Lost Omens Draconic Codex",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:e3c043beec29ec220c73f0213aeb448f8599886d15746bc4395f53a67b69c5ee",
    "translatableHash": "sha256:f728b8267e91e712dffacf79942b3411cf66973e3cb77754b35de230e842e349",
    "data": {
      "schemaVersion": 1,
      "name": "Armor of Thorn and Claw",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate",
        "morph"
      ],
      "traditions": [
        "primal"
      ],
      "description": "Razor-sharp thorns and claws erupt from your skin or scales. Whenever a creature touches you or hits you with a melee unarmed attack, it takes 1 piercing damage. Additionally, if you become Grabbed, Restrained, or otherwise held Immobilized in a creature's grasp, such as by being engulfed or swallowed, the creature takes 1d4 persistent bleed damage.\nHeightened 2 The piercing damage increases by 2, and the persistent bleed damage increases by 1d4.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [
        {
          "formula": "1",
          "type": "piercing",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The piercing damage increases by 2, and the persistent bleed damage increases by 1d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:horde-of-underlings",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "y5amezSt82FYu9HG",
      "slug": "horde-of-underlings",
      "publicationTitle": "Pathfinder Lost Omens Draconic Codex",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:f829bd1560cdeb41b0d4f9f7809c15ca18778ea70aa9adcbf4eaa3f63e448ee9",
    "translatableHash": "sha256:1440498ccd51f4746423a60905acd27086370e66b11cca5c2f8bc6cfe8078903",
    "data": {
      "schemaVersion": 1,
      "name": "Horde of Underlings",
      "rank": 3,
      "rarity": "rare",
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
      "description": "You summon six underlings, such as skeletons or kobolds. When you cast this spell, you decide what kind of creatures they are, if they're Small or Medium, and whether they deal bludgeoning, piercing, or slashing damage (choose once and applying it to all underlings). Each underling has 1 Hit Point, 5 AC, and automatically fails all saving throws. Each underling appears in an unoccupied square of your choice within the area. The underlings don't block movement, but they are difficult terrain for creatures other than you.\nEach underling attacks one enemy adjacent to it (if any), automatically dealing 1d4 damage of the chosen type. The first time you Sustain the spell on each subsequent round, each underling moves 20 feet toward the nearest enemy. If an underling ends its movement adjacent to an enemy, it damages that enemy as described above.\nHeightened 1 The number of underlings increases by 2",
      "castingTime": "3 actions",
      "range": "",
      "target": "",
      "area": "30 cone",
      "duration": "1 minute",
      "defense": null,
      "damage": [
        {
          "formula": "1d4",
          "type": "untyped",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The number of underlings increases by 2"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:channel-arrogance",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "CVvkveEH7lonSTZd",
      "slug": "channel-arrogance",
      "publicationTitle": "Pathfinder Lost Omens Draconic Codex",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:e7a75342b7863e36aca158bd0153ef0e737cc33ca4186ed2e5c39dcf7c4ceedf",
    "translatableHash": "sha256:813aa9ee5eff578cd34fcf91f0c8e159803f6c828da6bf38cda5e87654f5ff8f",
    "data": {
      "schemaVersion": 1,
      "name": "Channel Arrogance",
      "rank": 4,
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
      "description": "You channel your heightened sense of self-worth into a creature, forcing them to acknowledge your true worth. You can Cast this Spell using 1 action if you know the target isn't worthy of you spending your time to generate the full force of this spell, or using 3 actions if you can't possibly hold back the majesty of your presence and must flood the target with your full attention.\nThe target takes 5d10 mental damage and other effects depending on its Will saving throw. If you Cast the Spell using 1 action, the target gets a result one degree of success better than it rolled.\nCritical Success The creature is unaffected.\nSuccess The target takes half damage and is Fascinated with you for 1 round.\nFailure The target takes full damage and is fascinated with you for 1 round. While fascinated with you, the target must succeed at a check (flat, dc:5) when attempting to Cast a Spell or use an action with the auditory trait. On a failure, the action is disrupted as the target blurts praise for you instead of saying what it intended.\nCritical Failure As failure, but double damage and the effect lasts for 1 minute.\nHeightened 1 The damage increases by 1d10.",
      "castingTime": "1 to 3 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": "will save",
      "damage": [
        {
          "formula": "5d10",
          "type": "mental",
          "kind": "damage"
        }
      ],
      "heightening": "heightened sense of self-worth into a creature, forcing them to acknowledge your true worth. You can Cast this Spell using 1 action if you know the target isn't worthy of you spending your time to generate the full force of this spell, or using 3 actions if you can't possibly hold back the majesty of your presence and must flood the target with your full attention.\nThe target takes 5d10 mental damage and other effects depending on its Will saving throw. If you Cast the Spell using 1 action, the target gets a result one degree of success better than it rolled.\nCritical Success The creature is unaffected.\nSuccess The target takes half damage and is Fascinated with you for 1 round.\nFailure The target takes full damage and is fascinated with you for 1 round. While fascinated with you, the target must succeed at a check (flat, dc:5) when attempting to Cast a Spell or use an action with the auditory trait. On a failure, the action is disrupted as the target blurts praise for you instead of saying what it intended.\nCritical Failure As failure, but double damage and the effect lasts for 1 minute.\nHeightened 1 The damage increases by 1d10."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:cloud-current",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "s7kVnr0EdljCamuR",
      "slug": "cloud-current",
      "publicationTitle": "Pathfinder Lost Omens Draconic Codex",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:26755dd2bd9d0d6805f88853ebd1179ce5347ac75a1a8078da2e9b6ee0f21235",
    "translatableHash": "sha256:059271900de9439afe9656209e2088ca19c87dec4c58727da99864d56fee7a99",
    "data": {
      "schemaVersion": 1,
      "name": "Cloud Current",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "air",
        "concentrate",
        "manipulate",
        "water"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "Air and water vapor combine into a great cloud that funnels a powerful current within it. The eddies make the cloud appear from a distance to be a group of cloud dragons tumbling through the sky. The cloud is up to 30 feet wide, 30 feet tall, and 10 miles long. It runs parallel to the ground, and the nearest end of it must be within range and at least 100 feet above the ground. The current travels in a direction you choose when you Cast the Spell, and the travel Speed of creatures flying through the cloud in that direction is doubled. You can Dismiss the cloud.\nHeightened (6th) The duration is 8 hours, and the cloud can be up to 50 feet wide and 100 miles long.\nHeightened (8th) As 6th, and travel speed is quadrupled.",
      "castingTime": "1 minute",
      "range": "500 feet",
      "target": "",
      "area": null,
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (6th) The duration is 8 hours, and the cloud can be up to 50 feet wide and 100 miles long.\nHeightened (8th) As 6th, and travel speed is quadrupled."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:blood-feasting-breath",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "94eJHyFPNM1Z3TZp",
      "slug": "blood-feasting-breath",
      "publicationTitle": "Pathfinder Lost Omens Draconic Codex",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:52658d03e42d35011e8fdb134ef315feee905a9ff8168607fe00fe7b0aa09040",
    "translatableHash": "sha256:e9dcac108738057fe8692988fac6ba70318faa195b5a4ea760abe1ef52b72fed",
    "data": {
      "schemaVersion": 1,
      "name": "Blood-Feasting Breath",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "healing",
        "manipulate",
        "vitality",
        "void"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "Area (continued) two 30-foot cones\nLike a vorpal dragon, you absorb life with an inhale and release it with an exhale. All living creatures in the first cone take 5d6 void damage with a basic Fortitude save. You and all living creatures in the second cone regain Hit Points equal to the greatest damage a single creature took from the first cone.\nHeightened 1 The damage and healing increase by 1d6.",
      "castingTime": "3 actions",
      "range": "",
      "target": "",
      "area": "30 cone",
      "duration": "",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "5d6",
          "type": "void",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage and healing increase by 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:divine-dragons-watch",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "BBiO9ZdwyEJ581ES",
      "slug": "divine-dragons-watch",
      "publicationTitle": "Pathfinder Lost Omens Draconic Codex",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:5704e4416a313f27c262bd3a7078ca8a2cfee3175189b120a247ac0c382b359b",
    "translatableHash": "sha256:7835fae71c83111bf9b900ce7a7097d71cf7a54e83d245c9f3812d6990fb5664",
    "data": {
      "schemaVersion": 1,
      "name": "Divine Dragon's Watch",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "contingency",
        "manipulate",
        "sanctified",
        "spirit"
      ],
      "traditions": [
        "divine"
      ],
      "description": "You summon an invisible divine draconic spirit to watch over your target. When the spell is complete, you gain the Dragon's Protection reaction; once you use the reaction, the spell ends.\nDragon's Protection R (concentrate, sanctified, spirit)\neffect value[Compendium.pf2e.actionspf2e.Item.Zt9bo3FYLQihmpAz inline]\nHeightened 1 The damage increases by 1d4.\nSpell Effects: Divine Dragon's Watch",
      "castingTime": "10 minutes",
      "range": "touch",
      "target": "1 creature",
      "area": null,
      "duration": "24 hours",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 The damage increases by 1d4.\nSpell Effects: Divine Dragon's Watch"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:earth-and-sky",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "XOs8C2eZJAO3go0N",
      "slug": "earth-and-sky",
      "publicationTitle": "Pathfinder Lost Omens Draconic Codex",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:a81ccfe46e2448955335057ef1f6f8b02b478f472297f2832bf222848e830508",
    "translatableHash": "sha256:ba577665d1556ad8eb72bb85aa0d5dbc4e809ea7c4cbf4e5d10d47619048a6fb",
    "data": {
      "schemaVersion": 1,
      "name": "Earth and Sky",
      "rank": 6,
      "rarity": "uncommon",
      "traits": [
        "air",
        "concentrate",
        "earth",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You erupt into the air with the force of a dragon taking flight, launching nearby creatures into the sky with you. This spell has no effect unless you're on solid ground when you cast it. You fly directly upward, up to 100 feet into the air. When the spell ends, you safely float to the ground, as gentle landing. Every other creature in the area when you Cast this Spell must attempt a Fortitude saving throw.\nCritical Success The creature is unaffected.\nSuccess The creature is launched the same distance into the air as you, then falls.\nFailure The creature is launched the same distance into the air as you, then falls and can't Arrest its Fall.\nCritical Failure As failure, but the creature takes twice as much damage from falling.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "20 emanation",
      "duration": "",
      "defense": "fortitude save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:orb-of-twisting-fate",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "qO4xOJ0kAvhVGDpX",
      "slug": "orb-of-twisting-fate",
      "publicationTitle": "Pathfinder Lost Omens Draconic Codex",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:c8cccbc43d19a501f31a125d5eb6c505790655faee6d3238b3534c74841f1abd",
    "translatableHash": "sha256:295faf4a6d453d9313816eb9fd0a7f090e753cc91822dd2a705abc4a7cab49c8",
    "data": {
      "schemaVersion": 1,
      "name": "Orb of Twisting Fate",
      "rank": 7,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "occult"
      ],
      "description": "The glass orb of an omen dragon erupts from your target's forehead, overwhelming their mind with alternative options.\nCritical Success The creature is unaffected.\nSuccess At the start of its turn, the target must decide whether to spend its first action to Stride in a random direction or to spend its first action doing nothing. The spell then ends.\nFailure As success, but instead of ending automatically, the target attempts a new save at the end of each of its turns, ending the effect on a success.\nCritical Failure As success, but instead of ending automatically, the spell lasts for the full duration.",
      "castingTime": "2 actions",
      "range": "15 feet",
      "target": "1 creature",
      "area": null,
      "duration": "up to 1 minute",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:dragon-turret",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "eAOClJ1KRSPik8SX",
      "slug": "dragon-turret",
      "publicationTitle": "Pathfinder Lost Omens Draconic Codex",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:fc79934ba02298c75e6469301c21678a44d2aa3c8cd0d7aa0150a808890dfd37",
    "translatableHash": "sha256:a8f7e92ca2733bc05b43237bc1432b45204ff795c8092bf477d701a739a4624f",
    "data": {
      "schemaVersion": 1,
      "name": "Dragon Turret",
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
      "description": "Area (continued) an empty 10-foot radius, 50-foot-tall cylinder\nYou conjure forth a massive tower with a large dragon that's bound to crawl its length. The dragon and the tower share the same space, and the dragon intercepts any attack targeting the tower. When the dragon dies, the tower crumbles. The dragon is immune to all conditions, has an AC of 40, a +30 modifier for all saving throws, and 250 Hit Points. When you Cast the Spell, and once per round when you Sustain it, the dragon unleashes its breath in a 60-foot type:cone, dealing 13d8 damage (basic Reflex save). The damage type depends on the tradition used to cast this spell: arcane force, divine spirit, occult mental, primal fire.",
      "castingTime": "3 actions",
      "range": "500 feet",
      "target": "",
      "area": "10 cylinder",
      "duration": "10 minutes",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "13d8",
          "type": "untyped",
          "kind": "damage"
        }
      ],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:connective-current",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "t6vJnkyAYLXrOjQI",
      "slug": "connective-current",
      "publicationTitle": "Pathfinder Lost Omens High Seas",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:c2684f902d894ba68d1064db06ed0f30ba4127fdd8007b4a6590465fde5667b3",
    "translatableHash": "sha256:9d03af82fdb5c6903edfd99d16a45aec166f1083374ecfd3d0035dfcc76c8c96",
    "data": {
      "schemaVersion": 1,
      "name": "Connective Current",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "occult"
      ],
      "description": "You create a magical connection between you and an enemy, as if you were both caught in the same current. When the target takes a move action, you can Stride up to half your Speed in the same direction as the target as a reaction.\nHeightened (4th) You can Stride up to your Speed.\nHeightened (6th) As 4th, and you gain an additional reaction when you Cast this Spell and at the start of each of your turns that you can use only to make this movement.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 enemy",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) You can Stride up to your Speed.\nHeightened (6th) As 4th, and you gain an additional reaction when you Cast this Spell and at the start of each of your turns that you can use only to make this movement."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:with-friends-like-these",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "GF7mOra8KPTW5Ggb",
      "slug": "with-friends-like-these",
      "publicationTitle": "Pathfinder Lost Omens High Seas",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:d8fd13323c056a037562a8823698c38ca52565a6ffdc826ea6db454d056c5a1a",
    "translatableHash": "sha256:dbdde157be21dafb677e7390f1fb338bcbf011c425cef2a83c0743f235532776",
    "data": {
      "schemaVersion": 1,
      "name": "With Friends like These",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "emotion",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "occult"
      ],
      "description": "You create a subtle dissonance between creatures, driving them apart. Each target must attempt a Will save.\nCritical Success The creature is unaffected.\nSuccess The creature becomes Sickened 1.\nFailure The creature becomes Sickened 2. While sickened this way, it doesn't treat any other target of the spell as an ally.\nCritical Failure As failure, and it can't end a move action within 10 feet of any other target as long as it is sickened.\nHeightened 2 You can target one additional creature.",
      "castingTime": "2 actions",
      "range": "30",
      "target": "2 creatures",
      "area": null,
      "duration": "",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened 2 You can target one additional creature."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:undertow",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "4VsCGrIz07NrMaZA",
      "slug": "undertow",
      "publicationTitle": "Pathfinder Lost Omens High Seas",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:6dd785ce2d4448037ccfa02256f38482e6a475f36975e40d040c6451e1b252cd",
    "translatableHash": "sha256:a43069d249862ed99a96bedf820c488b0864b12c9348ff4bd44413f2326350ab",
    "data": {
      "schemaVersion": 1,
      "name": "Undertow",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "concentrate",
        "incapacitation",
        "water"
      ],
      "traditions": [
        "primal"
      ],
      "description": "You create an area of water 20 feet deep. The DC for Athletics checks to Swim in the area is equal to your spell DC. A creature that starts its turn in the area must attempt a Fortitude save.\nCritical Success The creature is unaffected.\nSuccess The creature takes 2d6 bludgeoning damage.\nFailure The creature takes 4d6 bludgeoning damage and takes a –2 circumstance penalty to Athletics checks to Swim and a –10-foot circumstance penalty to its swim Speed, if it has one, until it leaves the area.\nSpell Effect: Undertow\nCritical Failure As failure, and the creature is pulled 10 feet down.",
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
    "contentId": "pf2e:spell:spells-srd:anchoring-air",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "bCZP8N2C41gF10G2",
      "slug": "anchoring-air",
      "publicationTitle": "Pathfinder Lost Omens High Seas",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:34c267fb39b13ad02e9fc35b4b161165e1fd92fffa7e2bda15cbf53ee26c3530",
    "translatableHash": "sha256:d1bccd55cea5a7e5c1436fa0587c758b6867b5023a51ebd4b61d5596d04abe69",
    "data": {
      "schemaVersion": 1,
      "name": "Anchoring Air",
      "rank": 4,
      "rarity": "common",
      "traits": [
        "air",
        "concentrate"
      ],
      "traditions": [
        "occult",
        "primal"
      ],
      "description": "Trigger A creature attempts a melee Strike against you\nYou solidify the air around an incoming attack, catching it in a vise-like grip. The triggering creature must attempt a Reflex save.\nCritical Success The creature is unaffected.\nSuccess The creature takes a –2 circumstance penalty to the triggering Strike's attack roll.\nFailure The creature takes a –2 circumstance penalty to all attack rolls until the end of its turn.\nCritical Failure As failure, but the creature is also Immobilized until the start of its next turn.\nSpell Effect: Anchoring Air",
      "castingTime": "reaction",
      "range": "",
      "target": "",
      "area": null,
      "duration": "",
      "defense": "reflex save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:whispers-of-a-dead-goddess",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "VehkHHGxQH1jGolN",
      "slug": "whispers-of-a-dead-goddess",
      "publicationTitle": "Pathfinder Lost Omens High Seas",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:ef28466e1cc4f6dbcd5bd62349fb683cfd8804c34faa30280db872a9d2dad5ac",
    "translatableHash": "sha256:f6ae8a6fe78f84b67d074b65934c5730508282f0a06e7c31903d28f1321e9f09",
    "data": {
      "schemaVersion": 1,
      "name": "Whispers of a Dead Goddess",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "auditory",
        "concentrate",
        "incapacitation",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "The mysterious whispers that fill the Mordant Spire, which some believe to be the voice of the dead goddess Acavna, become audible. A creature in the area when this Spell is Cast or who enters the area must attempt a Will save.\nCritical Success The creature is unaffected and becomes temporarily immune for 1 hour.\nSuccess The target becomes Stunned 1, listening to the whispers.\nFailure As success, and the creature will not voluntarily leave the area for 1 round.\nCritical Failure As failure, and you can whisper a single course of action to each creature that critically failed, with the effects of suggestion. The effect ends on a creature if you stop sustaining the spell or the creature leaves the area.",
      "castingTime": "2 actions",
      "range": "60",
      "target": "",
      "area": "15 burst",
      "duration": "sustained up to 1 minute",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:shipwreck",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "5uWwusDkfmOOlZjK",
      "slug": "shipwreck",
      "publicationTitle": "Pathfinder Lost Omens High Seas",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:c0406881e0a8018d9fecce9849a4ea379362cd0ace51ebe7fc19541d28125dba",
    "translatableHash": "sha256:be61f4ccb1ebcbab58b275f96078ee19aacbe2909784c29d3013b8e05044e5fe",
    "data": {
      "schemaVersion": 1,
      "name": "Shipwreck",
      "rank": 8,
      "rarity": "common",
      "traits": [
        "concentrate",
        "incapacitation",
        "manipulate"
      ],
      "traditions": [
        "occult"
      ],
      "description": "You gesture toward a vehicle and the vessel wrenches itself apart. It must attempt a Fortitude save.\nCritical Success The vehicle is unaffected.\nSuccess The vehicle becomes uncontrolled, and spaces within it become difficult terrain.\nFailure As success, plus the vehicle gains the Broken condition. If it already had the broken condition, it's destroyed.\nCritical Failure The vehicle is reduced to 0 HP and is destroyed.",
      "castingTime": "2 actions",
      "range": "500 feet",
      "target": "1 vehicle",
      "area": null,
      "duration": "",
      "defense": "fortitude save",
      "damage": [],
      "heightening": ""
    }
  }
]
