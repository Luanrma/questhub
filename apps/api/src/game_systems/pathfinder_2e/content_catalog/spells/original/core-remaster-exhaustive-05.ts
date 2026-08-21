import type { Pathfinder2eOriginalContentRecord } from '../../records'
import type { Pathfinder2eSpellData } from '../types'

export const PATHFINDER_2E_EXHAUSTIVE_05_SPELL_ORIGINALS: readonly Pathfinder2eOriginalContentRecord<Pathfinder2eSpellData>[] = [
  {
    "contentId": "pf2e:spell:spells-srd:earthbind",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "gPvtmKMRpg9I9D7H",
      "slug": "earthbind",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:24fac1ee74dd4680e6c4b9d296d88a12d6c4ced9a8fa843110db51277cd42ce4",
    "translatableHash": "sha256:24e5c10cf9b99c95adf7d815e89d3c052dad94dedaa3fe7b436f01e4687905ee",
    "data": {
      "schemaVersion": 1,
      "name": "Earthbind",
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
      "description": "Using the weight of earth, you hamper a target's flight, with effects based on its Fortitude save. If the creature reaches the ground safely, it doesn't take falling damage.\nCritical Success The target is unaffected.\nSuccess The target falls safely up to 120 feet.\nFailure The target falls safely up to 120 feet. If it hits the ground, it can't Fly, levitate, or otherwise leave the ground for 1 round.\nCritical Failure The target falls safely up to 120 feet. If it hits the ground, it can't Fly, levitate, or otherwise leave the ground for 1 minute.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "1 flying creature",
      "area": null,
      "duration": "varies",
      "defense": "fortitude save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:bind-undead",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "GUeRTriJkMlMlVrk",
      "slug": "bind-undead",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/bind-undead.webp"
    },
    "sourceHash": "sha256:d811c983052f9f41823b4d7ec00d6341fc0c940a41b399d52a338aebca05888f",
    "translatableHash": "sha256:697c7c18b62e8440443dac2dddf06e14c9edcfe15fc838a87d49744d2338981c",
    "data": {
      "schemaVersion": 1,
      "name": "Bind Undead",
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
      "description": "With a word of power, you seize control of the target. It gains the minion trait. If you or an ally uses any hostile actions against the target, the spell ends.\nSpell Effect: Bind Undead",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 mindless undead creature with a level no greater than bind undead's spell rank",
      "area": null,
      "duration": "1 day",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 171,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Bind Undead",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Bind Undead",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Bind Undead",
          "sourceId": "rVkUzqS4rpZp9LS3",
          "name": "Spell Effect: Bind Undead",
          "type": "effect"
        },
        "owner": {
          "sourceId": "GUeRTriJkMlMlVrk",
          "name": "Bind Undead",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:clairaudience",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "HXhWYJviWalN5tQ2",
      "slug": "clairaudience",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:57290640f61328e70dac20b4bb3cf81ca16c258b2bb1ac6f2adaa3dc96308985",
    "translatableHash": "sha256:e30ee90a60ef0a9e0f66ca77b3a124e431599deff591d61683d6de9d35e9311a",
    "data": {
      "schemaVersion": 1,
      "name": "Clairaudience",
      "rank": 3,
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
      "description": "You create an Invisible floating ear at a location within range (even if it's outside your line of sight or line of effect). It can't move, but you can hear through the ear as if using your normal auditory senses.",
      "castingTime": "1 minute",
      "range": "500 feet",
      "target": "",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 17,
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
          "sourceId": "HXhWYJviWalN5tQ2",
          "name": "Clairaudience",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:safe-passage",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "IFuEzfmmWyNwVbhY",
      "slug": "safe-passage",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/safe-passage.webp"
    },
    "sourceHash": "sha256:164b51e6f3bff4b12df2731dd08fc8e331e9668df88fc2722396b5728677cfc1",
    "translatableHash": "sha256:92f336ee31d452937d67a09c976865999c488a9d82cab8a83868b3396c83c887",
    "data": {
      "schemaVersion": 1,
      "name": "Safe Passage",
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
      "description": "Area 10-foot-wide, 10-foot-tall, 60-foot-long section of terrain\nYou make passage through the area safe for a brief amount of time. Anyone passing through the area gains the following benefits against harmful effects of the terrain and environment, including environmental damage, hazardous terrain, and hazards in the area. The spell grants a +2 status bonus to AC and saves against such effects, and resistance 5 to all damage from such effects. Furthermore, the spell prevents anything in the area that's prone to collapse, such as a rickety bridge or an unstable ceiling, from collapsing, except under extreme strain that would collapse a normal structure of its type.\nSafe passage protects only against harm, not inconvenience, and it doesn't reduce difficult terrain, remove the Concealed condition caused by precipitation, or the like, nor does it protect against creatures within the spell's area.\nSpell Effect: Safe Passage\nHeightened (5th) The granted resistance increases to 10, and the area can be 120 feet long.\nHeightened (8th) The granted resistance increases to 15, and the area can be 500 feet long.",
      "castingTime": "3 actions",
      "range": "touch",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (5th) The granted resistance increases to 10, and the area can be 120 feet long.\nHeightened (8th) The granted resistance increases to 15, and the area can be 500 feet long."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 833,
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
          "sourceId": "IFuEzfmmWyNwVbhY",
          "name": "Safe Passage",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1004,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Safe Passage",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Safe Passage",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Safe Passage",
          "sourceId": "5blVLpIH65hvFJpn",
          "name": "Spell Effect: Safe Passage",
          "type": "effect"
        },
        "owner": {
          "sourceId": "IFuEzfmmWyNwVbhY",
          "name": "Safe Passage",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:enthrall",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "IihxWhRfpsBgQ5jS",
      "slug": "enthrall",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/enthrall.webp"
    },
    "sourceHash": "sha256:b0a2aff1e181d12a08020952c70c25febc07483be83518d69e865fbf242643c1",
    "translatableHash": "sha256:9ba6cb6b6baeaaf4781f5ae524149527c17745fe8553816a5f25d37dd141b12f",
    "data": {
      "schemaVersion": 1,
      "name": "Enthrall",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "auditory",
        "concentrate",
        "emotion",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "Your words fascinate your targets. You speak or sing without interruption throughout the casting and duration. Targets who notice your speech or song might give their undivided attention; each target must attempt a Will save. The GM might grant a circumstance bonus (to a maximum of +4) if the target is of an opposing religion, ancestry, or political leaning, or is otherwise unlikely to agree with what you're saying.\nEach creature that comes within range has to attempt a save when you Sustain the spell. If you're speaking, enthrall gains the linguistic trait.\nCritical Success The target is unaffected and notices that you tried to use magic.\nSuccess The target needn't pay attention but doesn't notice you tried to use magic (it might notice others are enthralled).\nFailure The target is Fascinated with you. It can attempt another Will save if it witnesses actions or speech with which it disagrees. If it succeeds, it's no longer fascinated and is temporarily immune for 1 hour. If the target is subject to a hostile act, or if another creature succeeds at a Diplomacy or Intimidation check against it, the fascination ends immediately.\nCritical Failure As failure, but the target can't attempt a save to end the fascination if it disagrees with you.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "all creatures in range",
      "area": null,
      "duration": "sustained",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 883,
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
          "sourceId": "IihxWhRfpsBgQ5jS",
          "name": "Enthrall",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:wall-of-wind",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "it4ZsAi6XgvGcodc",
      "slug": "wall-of-wind",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:211b483b191e426af456b7f881ad6a09c3e71741133f706045eff7c2c5b23c36",
    "translatableHash": "sha256:c826da0786d1518293f46f6e0d44d824c598c3bb97678f4d28df370947b58635",
    "data": {
      "schemaVersion": 1,
      "name": "Wall of Wind",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "air",
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You create a barrier of gusting winds that hinders anything moving through it. The wall of swirling winds is 5 feet thick, 60 feet long, and 30 feet high. The wall stands vertically, but you can shape its path. Though the wall of wind distorts the air, it does not hamper sight. The wall has the following effects.\n• Ammunition from physical ranged attacks-such as arrows, bolts, sling bullets, and other objects of similar size-can't pass through the wall. Attacks with bigger ranged weapons, such as javelins, take a -2 circumstance penalty to their attack rolls if their paths pass through the wall. Massive ranged weapons and spell effects that don't create physical objects pass through the wall with no penalty.\n• The wall is difficult terrain to creatures attempting to move overland through it. Gases, including creatures in Vapor Form, can't pass through the wall.\n• A creature that attempts to fly through the wall using a move action must attempt a Fortitude save.\nCritical Success The creature can move through the wall normally this turn.\nSuccess The flying creature can move through the wall this turn, but the wall is difficult terrain.\nFailure The wall stops the movement of the flying creature, and any remaining movement from its current action is wasted.\nCritical Failure As failure, and the creature is pushed 10 feet away from the wall.",
      "castingTime": "3 actions",
      "range": "120 feet",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": "fortitude save",
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 854,
        "uuid": "Compendium.pf2e.spells-srd.Item.Vapor Form",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Vapor Form",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Vapor Form",
          "sourceId": "V8wXOsoejQhe6CyG",
          "name": "Vapor Form",
          "type": "spell"
        },
        "owner": {
          "sourceId": "it4ZsAi6XgvGcodc",
          "name": "Wall of Wind",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:hypnotize",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "K2WpC3FFoHrqX9Q5",
      "slug": "hypnotize",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/hypnotic-pattern.webp"
    },
    "sourceHash": "sha256:b52bcc1b65c631af9199dbdda0b4ca0769b35676ae53e2a5ab2d06ac556f1d17",
    "translatableHash": "sha256:16f1183909516d545b474e1d7cfb2a82308ba2418e4859e8ee969f5f2af1fe0b",
    "data": {
      "schemaVersion": 1,
      "name": "Hypnotize",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "illusion",
        "manipulate",
        "subtle",
        "visual"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You create a cloud of mesmerizing patterns and colors that hovers in the air. Creatures are Dazzled while inside the cloud. In addition, a creature must attempt a Will saving throw if it is inside the cloud when you cast it, when it enters the cloud, when it ends its turn within the cloud, or if it uses a Seek or Interact action on the cloud. A creature currently Fascinated by hypnotize doesn't attempt new saves.\nSuccess The target is unaffected.\nFailure The target is fascinated by the cloud.\nCritical Failure The target is fascinated by the cloud. While it remains fascinated, it can't use reactions.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "",
      "area": "10 burst",
      "duration": "1 minute",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 95,
        "uuid": "Compendium.pf2e.conditionitems.Item.Dazzled",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Dazzled",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Dazzled",
          "sourceId": "TkIyaNPgTZFBCCuh",
          "name": "Dazzled",
          "type": "condition"
        },
        "owner": {
          "sourceId": "K2WpC3FFoHrqX9Q5",
          "name": "Hypnotize",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 353,
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
          "sourceId": "K2WpC3FFoHrqX9Q5",
          "name": "Hypnotize",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 452,
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
          "sourceId": "K2WpC3FFoHrqX9Q5",
          "name": "Hypnotize",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:mind-reading",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "KHnhPHL4x1AQHfbC",
      "slug": "mind-reading",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/mind-reading.webp"
    },
    "sourceHash": "sha256:42ac4887e66a93cb220f423bbce23cde245845267fb6cd4ab303c5d17e2f79bf",
    "translatableHash": "sha256:e6fb2feb05147827fcfd3f349bdd79dfad6c0b18ca6e713a540d84ade266106b",
    "data": {
      "schemaVersion": 1,
      "name": "Mind Reading",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "detection",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "With a cursory mental touch, you attempt to read the target's mind. It must attempt a Will save. The target then becomes temporarily immune to your mind reading for 1 hour.\nCritical Success The target perceives vague surface thoughts from you when you Cast the Spell.\nSuccess You find out whether the target's Intelligence modifier is higher than, equal to, or lower than yours.\nFailure You perceive vague surface thoughts from the target when you Cast the Spell, and you find out whether its Intelligence is higher than, equal to, or lower than yours.\nCritical Failure As failure, and for the duration of the spell, you can Sustain the spell to detect the target's surface thoughts again. The target doesn't receive any additional saves.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 round or sustained up to 1 minute",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:heroism",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "KqvqNAfGIE5a9wSv",
      "slug": "heroism",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:2664e7ed71e3f6c6b5da4894af8fa42b16100d69523c225fe8ea5d8430d10f6d",
    "translatableHash": "sha256:ee9bfd64c90885c56be8c98c2e72ac160106648a89d6ac3e04a3f8babb047f9b",
    "data": {
      "schemaVersion": 1,
      "name": "Heroism",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "You unlock the target's inner heroism, granting it a +1 status bonus to attack rolls, Perception checks, saving throws, and skill checks.\nHeightened (6th) The status bonus increases to +2.\nHeightened (9th) The status bonus increases to +3.\nSpell Effect: Heroism",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 creature",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (6th) The status bonus increases to +2.\nHeightened (9th) The status bonus increases to +3.\nSpell Effect: Heroism"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 305,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Heroism",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Heroism",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Heroism",
          "sourceId": "l9HRQggofFGIxEse",
          "name": "Spell Effect: Heroism",
          "type": "effect"
        },
        "owner": {
          "sourceId": "KqvqNAfGIE5a9wSv",
          "name": "Heroism",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:wall-of-thorns",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "KsWhliKfUs3IpW3c",
      "slug": "wall-of-thorns",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:2cddf2547aec173501a42818b81fac3baea6169bb6081a3860da778c20feb346",
    "translatableHash": "sha256:3e5a07975e8500240e5144ffca971b47575d081f6c3ec8419b0843a26a77a7c0",
    "data": {
      "schemaVersion": 1,
      "name": "Wall of Thorns",
      "rank": 3,
      "rarity": "common",
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
      "description": "You grow a wall of thorny brambles from the ground. You create a 5-foot-thick wall of brambles and thorns in a straight line up to 60 feet long and 10 feet high. You must create the wall in an unbroken open space so its edges don't pass through any creatures or objects, or the spell is lost. The wall stands vertically. If you wish, the wall can be of a shorter length or height. Everything on each side of the wall has cover from creatures on the opposite side, and the wall's spaces are difficult terrain. For every move action a creature uses to enter at least one of the wall's spaces, that creature takes 3d4 piercing damage.\nEach 10-foot-by-10-foot section of the wall has AC 10, Hardness 10, and 20 Hit Points. It's immune to critical hits and precision damage. A destroyed section can be moved through freely.\nHeightened (+1) The Hit Points of each section of the wall increase by 5, and the piercing damage increases by 1d4.",
      "castingTime": "3 actions",
      "range": "60 feet",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [
        {
          "formula": "3d4",
          "type": "piercing",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+1) The Hit Points of each section of the wall increase by 5, and the piercing damage increases by 1d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:locate",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "LQzlKbYjZSMFQawP",
      "slug": "locate",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/locate.webp"
    },
    "sourceHash": "sha256:fee2fab9019e2122e58a2282a2cd24f07c3a0408a4417de89c73cfada9a8daba",
    "translatableHash": "sha256:77eed902953d575b0453b3665b8d9f2d16a1b3721cacf4a47c58621ce41c6828",
    "data": {
      "schemaVersion": 1,
      "name": "Locate",
      "rank": 3,
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
      "description": "You learn the direction to the target (if you picked a specific object, such as \"my mother's sword\") or the nearest target (if you picked a type of object, such as \"swords\"). If the target is a specific object, you must have observed it directly with your own senses. If it's a type of object, you still need to have an accurate mental image of the type of object. If there's lead or running water between you and the target, this spell can't locate the object. This means you might find a type of object farther away if the nearest one is behind lead or running water.\nHeightened (5th) You can target a specific creature or ancestry instead of an object, but you must have met or seen up close the creature or ancestry you want to target.",
      "castingTime": "10 minutes",
      "range": "500 feet",
      "target": "1 specific object or type of object",
      "area": null,
      "duration": "sustained",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (5th) You can target a specific creature or ancestry instead of an object, but you must have met or seen up close the creature or ancestry you want to target."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:cozy-cabin",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "mwPfoYfVGSMAaUec",
      "slug": "cozy-cabin",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:e9cf2fa02e7c6ae135e17ceeb136cc3f616f227da94e13b3dbdd75a976884aa1",
    "translatableHash": "sha256:08295bd3b84a9124acc3c1b3e03cb5b87f4f1e03c3c748c8d3bad6e8df123b06",
    "data": {
      "schemaVersion": 1,
      "name": "Cozy Cabin",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "wood"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You shape a cabin 20 feet on each side and 10 feet high. This cabin has the structure trait and the same restrictions as magic items that create structures. The walls of the hut are simple and wooden, with small, square glass windows, and it has one wooden door. It doesn't include its own lock, but it has a fastener to which a lock can be applied.\nThe interior contains three cots, one chamber pot, and a small fireplace holding a magical fire. The interior is lit with a small magical light that you can light or extinguish at will using a Sustain action. The climate inside the hut is comfortable and allows creatures inside it to withstand most hostile weather conditions, but incredible heat or cold, powerful storms, and winds of hurricane force or greater destroy the hut. Other creatures can freely enter and exit the hut without damaging it, but if you exit the hut, the spell ends. You can Dismiss the spell.",
      "castingTime": "1 minute",
      "range": "30 feet",
      "target": "",
      "area": null,
      "duration": "12 hours",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:vampiric-feast",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "N1Z1oLPdBxaSgrEE",
      "slug": "vampiric-feast",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/vampiric-touch.webp"
    },
    "sourceHash": "sha256:579965181e321ada845afea5a865084056ae627789656574a43c7cf7a75daf7c",
    "translatableHash": "sha256:0d97befa55ffc03fd4261bf99522ffece72379a81299647ccd753d82923af653",
    "data": {
      "schemaVersion": 1,
      "name": "Vampiric Feast",
      "rank": 3,
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
      "description": "Your touch leeches the lifeblood out of a target to empower yourself. You deal 6d6 void damage to the target. You gain temporary Hit Points equal to half the void damage the target takes (after applying resistances and the like). You lose any remaining temporary Hit Points after 1 minute.\nHeightened (+1) The damage increases by 2d6.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 living creature",
      "area": null,
      "duration": "",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "6d6",
          "type": "void",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+1) The damage increases by 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:haste",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "o6YCGx4lycsYpww4",
      "slug": "haste",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/haste.webp"
    },
    "sourceHash": "sha256:a7b565f98bc479b2c39ab7050c53338d87ac228e434072276f6c55ccc5155906",
    "translatableHash": "sha256:8af78a8896712c6d55fe354a128a0fea0fabe3ab38195659796c00af6fdb2818",
    "data": {
      "schemaVersion": 1,
      "name": "Haste",
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
      "description": "Magic empowers the target to act faster. It gains the Quickened condition and can use the extra action each round only for Strike and Stride actions.\nHeightened (7th) You can target up to 6 creatures.\nSpell Effect: Haste",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (7th) You can target up to 6 creatures.\nSpell Effect: Haste"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 57,
        "uuid": "Compendium.pf2e.conditionitems.Item.Quickened",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Quickened",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Quickened",
          "sourceId": "nlCjDvLMf2EkV2dl",
          "name": "Quickened",
          "type": "condition"
        },
        "owner": {
          "sourceId": "o6YCGx4lycsYpww4",
          "name": "Haste",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 285,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Haste",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Haste",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Haste",
          "sourceId": "ElkXovNrHB0Doi6O",
          "name": "Spell Effect: Haste",
          "type": "effect"
        },
        "owner": {
          "sourceId": "o6YCGx4lycsYpww4",
          "name": "Haste",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:aqueous-orb",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "oUDNCArkQTdhllxD",
      "slug": "aqueous-orb",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:2ab9be4fc99757af78601801aeb8bc847c4ab8f21598fe53571b3312fcc5e67c",
    "translatableHash": "sha256:4f92a2addfa0c6e4f3c9d5471f4bfe63c72ed81cbb3b517c833b6d79dd314c15",
    "data": {
      "schemaVersion": 1,
      "name": "Aqueous Orb",
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
      "description": "A sphere of water 10 feet in diameter forms in an unoccupied space in range, either on the ground or on the surface of a liquid.\nWhen you Cast this Spell and each time you Sustain it, you can roll the orb, moving it up to 10 feet along the ground or the surface of a liquid.\nThe orb can move through the spaces of any creatures or obstacles that wouldn't stop the flow of water. It extinguishes non-magical fires it moves through of its size or smaller, and it attempts to counteract any magical fires it moves through. If it fails to counteract a given fire, it can't counteract that fire for the duration of the spell.\nThe orb can engulf Large or smaller creatures it moves through, and it can contain as many creatures as fit in its space. The orb can try to engulf the same creature only once per turn, even if you roll it onto a creature's space more than once. Any Large or smaller creature whose space the orb tries to move through can attempt a Reflex save.\nSuccess The creature can either let the orb pass (remaining in its space or moving out of the orb's path into a space of the creature's choice) or allow itself to be pushed in front of the orb to the end of the orb's movement.\nFailure The creature is engulfed in the orb. It moves along with the orb and must hold its breath or begin suffocating (unless it can breathe in water). An engulfed Medium or smaller creature and anyone trying to affect that creature follow the normal rules for aquatic battles. An engulfed Large creature is usually big enough that parts of it stick out from the water, and it can reach out of the water. The creature can get free either by Swimming with a successful check (athletics, traits:action:swim, dc:10) check or by Escaping against your spell DC. A freed creature exits the orb's space and can immediately breathe.\nCritical Failure As failure, but the creature can't Swim to get free.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": "reflex save",
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1796,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Escape",
        "label": "Escaping",
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
          "sourceId": "oUDNCArkQTdhllxD",
          "name": "Aqueous Orb",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:speak-with-plants",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "qvwIwJ9QBihy8R0t",
      "slug": "speak-with-plants",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:cdeed65a8a06c0b2a4a982ba081abf967ad26d8b8e34b184fc44468be1db23fb",
    "translatableHash": "sha256:d30e03aaa905f7fac47c8c1fb405508c98a1138e9ccd0b316af19f0f84016d0d",
    "data": {
      "schemaVersion": 1,
      "name": "Speak with Plants",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "plant",
        "wood"
      ],
      "traditions": [
        "divine",
        "occult",
        "primal"
      ],
      "description": "You can ask questions of and receive answers from plants and fungi, but the spell doesn't make them more friendly or intelligent than normal. Most normal plants and fungi have a distinctive view of the world around them, so they don't recognize details about creatures or know anything about the world beyond their immediate vicinity. Cunning plant or fungus monsters are likely to be terse and evasive, while less intelligent ones often make inane comments.\nHeightened (4th) The duration is 8 hours.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) The duration is 8 hours."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:feet-to-fins",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "RvBlSIJmxiqfCpR9",
      "slug": "feet-to-fins",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:0b517c238985f4da9c08a0581f5867fc7cb12bea1b34d1e6b90d4d2d63fb065a",
    "translatableHash": "sha256:2693bf96d562a380c89f98ea8fc093169598562c967cf1e5f5be20490db187b9",
    "data": {
      "schemaVersion": 1,
      "name": "Feet to Fins",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "morph"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "The target's feet transform into fins, improving mobility in the water but reducing it on land. The target gains a swim Speed equal to its normal land Speed, but its land Speed becomes 5 feet.\nHeightened (6th) The spell lasts until your next daily preparations.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 willing creature",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (6th) The spell lasts until your next daily preparations."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:chilling-darkness",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "sRfSBHWHdbIa0aGc",
      "slug": "chilling-darkness",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:08bc6f7ef88fe33f470c0fe4221aa6957b3e953c3332956f0c75e3b6c53e582c",
    "translatableHash": "sha256:d9f1229c6930fb613429010e49fb9e8f4bf20761c42fd1ff88c87744f2b13c08",
    "data": {
      "schemaVersion": 1,
      "name": "Chilling Darkness",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "attack",
        "cold",
        "concentrate",
        "darkness",
        "manipulate",
        "unholy"
      ],
      "traditions": [
        "divine"
      ],
      "description": "You shoot an utterly cold ray of darkness tinged with unholy energy. Make a ranged spell attack. The ray deals 5d6 cold damage. If the target has the holy trait, you deal an extra 5d6 spirit damage.\nCritical Success The target takes double damage.\nSuccess The target takes full damage.\nIf the ray passes through an area of magical light or targets a creature affected by magical light, chilling darkness attempts to counteract the light. If you need to determine whether the ray passes through an area of light, draw a line between yourself and the spell's target.\nHeightened (+1) The cold damage increases by 2d6, and the spirit damage against holy creatures increases by 2d6.",
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
      "heightening": "Heightened (+1) The cold damage increases by 2d6, and the spirit damage against holy creatures increases by 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:fireball",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "sxQZ6yqTn0czJxVd",
      "slug": "fireball",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:d5fa90beb04148c934dbb8e7514f40cdf90048473eaf7846a8e2928961b7efce",
    "translatableHash": "sha256:e1c8c7ff631e80c88dc8c1230d5ee7a6c87e37a540ae9dedd2783043348ad679",
    "data": {
      "schemaVersion": 1,
      "name": "Fireball",
      "rank": 3,
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
      "description": "A roaring blast of fire detonates at a spot you designate, dealing 6d6 fire damage.\nHeightened (+1) The damage increases by 2d6.",
      "castingTime": "2 actions",
      "range": "500 feet",
      "target": "",
      "area": "20 burst",
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
    "contentId": "pf2e:spell:spells-srd:mad-monkeys",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "tFKJCPvOQZxKq6ON",
      "slug": "mad-monkeys",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:453b2712c7dbe05c3981a7eb7f72b5826b80ecfa1a02d06fcb5c1f26f88c8e46",
    "translatableHash": "sha256:eab6f8e34cc6affde33a084d0c7f8149af5733903319dd2ea129870494af8ab1",
    "data": {
      "schemaVersion": 1,
      "name": "Mad Monkeys",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "primal"
      ],
      "description": "Magical monkey spirits fill the area as they pile and climb on top of one another. Because the monkeys are magical spirits, they can't be attacked or hurt. Casting Calm or a similar effect over the monkeys makes them docile, causing them to cease making mischief for the duration of mad monkeys.\nChoose the kind of mischief your monkeys make when you Cast the Spell. They produce the effect listed for that mischief when you Cast the Spell and the first time each round when you Sustain the Spell. The first time each round when you Sustain the Spell, you can move the area of the monkeys by 5 feet.\nFlagrant Burglary The monkeys try to Steal any one item from one creature in the area. Use your spell DC - 10 as the monkeys' Thievery modifier. Their attempt relies more on distraction than subtlety, so the victim knows what item the monkeys were trying to take and whether it was taken. Getting a stolen item from the monkeys-even for the caster-requires Stealing it from them or Disarming them, using your spell DC. When the spell ends, any stolen items fall to the ground in any square of the spell's area you choose.\nRaucous Din The monkeys screech loudly, potentially deafening creatures in the spell's area. Each creature in the spell's area must attempt a Fortitude save.\nCritical Success The creature is unaffected and is temporarily immune for 10 minutes.\nSuccess The creature is unaffected.\nFailure The creature is Deafened for 1 round.\nCritical Failure The creature is Deafened for 1 minute.\nTumultuous Gymnastics The monkeys jump and climb all over creatures in the spell's area, interfering with complex movements. Each creature in the spell's area must attempt a Reflex save.\nCritical Success The creature is unaffected and is temporarily immune for 10 minutes.\nSuccess The creature is unaffected.\nFailure For 1 round, the creature must succeed at a check (flat, dc:5) whenever it attempts a manipulate action. If it fails this check, the creature loses that action.\nCritical Failure As failure, but the monkeys cling to the creature tenaciously, and the effect lasts until the spell ends, even if the creature leaves the spell's area.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "",
      "area": "5 burst",
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 167,
        "uuid": "Compendium.pf2e.spells-srd.Item.Calm",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Calm",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Calm",
          "sourceId": "b515AZlB0sridKSq",
          "name": "Calm",
          "type": "spell"
        },
        "owner": {
          "sourceId": "tFKJCPvOQZxKq6ON",
          "name": "Mad Monkeys",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 726,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Steal",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Steal",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Steal",
          "sourceId": "RDXXE7wMrSPCLv5k",
          "name": "Steal",
          "type": "action"
        },
        "owner": {
          "sourceId": "tFKJCPvOQZxKq6ON",
          "name": "Mad Monkeys",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1111,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Disarm",
        "label": "Disarming",
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Disarm",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Disarm",
          "sourceId": "Dt6B1slsBy8ipJu9",
          "name": "Disarm",
          "type": "action"
        },
        "owner": {
          "sourceId": "tFKJCPvOQZxKq6ON",
          "name": "Mad Monkeys",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1713,
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
          "sourceId": "tFKJCPvOQZxKq6ON",
          "name": "Mad Monkeys",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:one-with-stone",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "vh1RpbWfqdNC4L3P",
      "slug": "one-with-stone",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:79c322e0079237a601acb037a938027cbb3d4978fee1c893a79fafd691b7bafb",
    "translatableHash": "sha256:9f3c14dfbf9b0ff4824994580c102fea7af343e87ac34a66bc6ecfb979a1c6a0",
    "data": {
      "schemaVersion": 1,
      "name": "One with Stone",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "concentrate",
        "earth",
        "manipulate",
        "polymorph"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You can either transform into a stone or merge with stone. While transformed, you can't move or affect anything outside the stone, but you can cast spells as long as they don't require line of effect beyond the stone. You can Dismiss this spell.\n• Merge with Stone The spell's duration is 10 minutes. While casting the spell, you must touch a stone with enough volume to fit you and your possessions or the spell is disrupted. While merged, you can hear, but not see, what's going on outside the stone. If the stone takes damage while you're inside it, you're expelled from the stone and take 10d6 damage. Magic passage expels you without dealing damage. The spell ends if you're ever outside the stone.\n• Turn into a Stone The spell's duration is 8 hours. You become a Large stone. Perception checks don't reveal your true nature, but a successful Nature or Survival check against your spell DC reveals that you appear to be a stone that is strangely new to the area. While in this form, you can observe everything around you, using your normal senses. As a stone, your AC is 23, and only status bonuses, status penalties, circumstance bonuses, and circumstance penalties affect you. Any successes and critical successes you roll on Reflex saves are failures",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "10 minutes or 8 hours",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:blindness",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "VosLNn2M8S7JH67D",
      "slug": "blindness",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:6b37bdde48a8a850f698881e8248bfc7140ffb2bc8c4f6f81475676e185532b7",
    "translatableHash": "sha256:ab82ed0865739286cadf75093caa6d9011bfa80d68c81edad2a1930432cefd10",
    "data": {
      "schemaVersion": 1,
      "name": "Blindness",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "concentrate",
        "incapacitation",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult",
        "primal"
      ],
      "description": "You blind the target. The effect is determined by the target's Fortitude save. The target then becomes temporarily immune for 1 minute.\nCritical Success The target is unaffected.\nSuccess The target is Blinded until its next turn begins.\nFailure The target is Blinded for 1 minute.\nCritical Failure The target is Blinded permanently.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": "fortitude save",
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 259,
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
          "sourceId": "VosLNn2M8S7JH67D",
          "name": "Blindness",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:slow",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "WsUwpfmhKrKwoIe3",
      "slug": "slow",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:f84fce9ed3d073859084bcff85acbb24081c546d77a78d48360b50abd1fa428e",
    "translatableHash": "sha256:9198532f8ea12d067847299113654a63bb41510bbc1438a325ac612aeb0e7d15",
    "data": {
      "schemaVersion": 1,
      "name": "Slow",
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
      "description": "You dilate the flow of time around the target, slowing its actions.\nCritical Success The target is unaffected.\nSuccess The target is Slowed 1 for 1 round.\nFailure The target is Slowed 1 for 1 minute.\nCritical Failure The target is Slowed 2 for 1 minute.\nHeightened (6th) You can target up to 10 creatures.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": "fortitude save",
      "damage": [],
      "heightening": "Heightened (6th) You can target up to 10 creatures."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 191,
        "uuid": "Compendium.pf2e.conditionitems.Item.Slowed",
        "label": "Slowed 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Slowed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Slowed",
          "sourceId": "xYTAsEpcJE1Ccni3",
          "name": "Slowed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "WsUwpfmhKrKwoIe3",
          "name": "Slow",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 310,
        "uuid": "Compendium.pf2e.conditionitems.Item.Slowed",
        "label": "Slowed 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Slowed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Slowed",
          "sourceId": "xYTAsEpcJE1Ccni3",
          "name": "Slowed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "WsUwpfmhKrKwoIe3",
          "name": "Slow",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 439,
        "uuid": "Compendium.pf2e.conditionitems.Item.Slowed",
        "label": "Slowed 2",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Slowed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Slowed",
          "sourceId": "xYTAsEpcJE1Ccni3",
          "name": "Slowed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "WsUwpfmhKrKwoIe3",
          "name": "Slow",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:insect-form",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "XI6Lzd2B5pernkPd",
      "slug": "insect-form",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:62e9bca446a6d8752288e7df7b251658d3db1a5c7fea4f84e94d12fc70831f00",
    "translatableHash": "sha256:0af9a98bd9433e143ddf7a3a77dd82fcafed01cd934963fac1acc76ae03eecea",
    "data": {
      "schemaVersion": 1,
      "name": "Insect Form",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "polymorph"
      ],
      "traditions": [
        "primal",
        "arcane"
      ],
      "description": "You envision a simple bug and transform into a Medium animal battle form. When you Cast this Spell, choose a listed battle form. You can decide the specific type of animal (such as a ladybug or scarab for beetle), but this has no effect on the form's Size or statistics. While in this form, you gain the animal trait. You can Dismiss this spell.\nYou gain the following statistics and abilities regardless of which battle form you choose:\n• AC = 18 + your level. Ignore your armor's check penalty and Speed reduction.\n• 10 temporary Hit Points.\n• Low-light vision.\n• One or more attacks specific to the battle form you choose, which are the only attacks you can Strike with. You're trained with them. Your attack modifier is +13, and your damage bonus is +2. These attacks are Strength based (for the purpose of the Enfeebled condition). If your unarmed attack modifier is higher, you can use it instead.\n• Athletics modifier of +13, unless your own is higher.\nYou also gain specific abilities based on the form you choose:\n• Ant\n• Speed 30 feet, climb Speed 30 feet;\n• Melee 1 mandibles, Damage 2d6 bludgeoning.\n• Beetle\n• Speed 25 feet;\n• Melee 1 mandibles, Damage 2d10 bludgeoning.\n• Centipede\n• Speed 25 feet, climb Speed 25 feet; darkvision;\n• Melee 1 mandibles, Damage 1d8 piercing plus 1d4 persistent poison.\n• Mantis\n• Speed 40 feet; imprecise scent 30 feet;\n• Melee 1 foreleg, Damage 2d8 piercing.\n• Scorpion\n• Speed 40 feet; darkvision, imprecise tremorsense 60 feet;\n• Melee 1 stinger, Damage 1d8 piercing plus 1d4 persistent poison;\n• Melee 1 pincer (agile), Damage 1d6 bludgeoning.\n• Spider\n• Speed 25 feet, climb Speed 25 feet; darkvision;\n• Melee 1 fangs, Damage 1d6 piercing plus 1d4 persistent poison;\n• Ranged 1 web (range increment 20 feet), Damage Immobilizes the target for 1 round or until it [[/act escape]]{Escapes}.\nSpell Effect: Insect Form\nHeightened (4th) Your battle form is Large, and your attacks have 10-foot reach. You instead gain 15 temporary HP, attack modifier +16, damage bonus +6, and Athletics +16.\nHeightened (5th) Your battle form is Huge, and your attacks have 15-foot reach. You instead gain 20 temporary HP, attack modifier +18, damage bonus +2 and double damage dice (including persistent damage), and Athletics +20.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) Your battle form is Large, and your attacks have 10-foot reach. You instead gain 15 temporary HP, attack modifier +16, damage bonus +6, and Athletics +16.\nHeightened (5th) Your battle form is Huge, and your attacks have 15-foot reach. You instead gain 20 temporary HP, attack modifier +18, damage bonus +2 and double damage dice (including persistent damage), and Athletics +20."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 876,
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
          "sourceId": "XI6Lzd2B5pernkPd",
          "name": "Insect Form",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 2849,
        "uuid": "Compendium.pf2e.conditionitems.Item.Immobilized",
        "label": "Immobilizes",
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
          "sourceId": "XI6Lzd2B5pernkPd",
          "name": "Insect Form",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 3004,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Insect Form",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Insect Form",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Insect Form",
          "sourceId": "dQeERSuUeHv9Rib5",
          "name": "Spell Effect: Insect Form",
          "type": "effect"
        },
        "owner": {
          "sourceId": "XI6Lzd2B5pernkPd",
          "name": "Insect Form",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:dream-message",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "yM3KTTSAIHhyuP14",
      "slug": "dream-message",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:cef0ff7a3c1dce89ade4f67d77e6e0af81cc80009c77a58734dba1de18dfd155",
    "translatableHash": "sha256:3d01a75e60c7ef30fa5e26a6ded3923e583cfc42252be86fc619dbb9ac9e924c",
    "data": {
      "schemaVersion": 1,
      "name": "Dream Message",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult"
      ],
      "description": "You send a message to your target's dream. The message is one-way, up to 1 minute of speech (roughly 150 words). If the target is asleep, they receive the message instantly. If not, they receive it the next time they sleep. As soon as they receive it, the spell ends, and you know the message was sent.\nHeightened (4th) You can target up to 10 creatures you know by name and have met in person. You must send the same message to all of them; the spell ends for each creature individually",
      "castingTime": "10 minutes",
      "range": "planetary",
      "target": "1 creature you know by name and have met in person",
      "area": null,
      "duration": "until your next daily preparations",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) You can target up to 10 creatures you know by name and have met in person. You must send the same message to all of them; the spell ends for each creature individually"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:hypercognition",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ZYoC630tNGutgbE0",
      "slug": "hypercognition",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:c7445573081a902d92a698acfe805b238f480b0adba8a1c3984e6b96f0b1bb7f",
    "translatableHash": "sha256:105ed33d8ff1897a6857779af7bbc3da5f49b2e217f113523d33de6191f78343",
    "data": {
      "schemaVersion": 1,
      "name": "Hypercognition",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "concentrate"
      ],
      "traditions": [
        "occult"
      ],
      "description": "You rapidly catalog and collate information relevant to your current situation. You can instantly use up to 6 Recall Knowledge actions as part of Casting this Spell. For these actions, you can't use any special abilities, reactions, or free actions that trigger when you Recall Knowledge.",
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
    "contentId": "pf2e:spell:spells-srd:mountain-resilience",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "2BV2yYPfVJ5zirZt",
      "slug": "mountain-resilience",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:31c398a4a615a5de3bcca48984661ac09479509d4cbbcc5f6d7e1b40ab004fcb",
    "translatableHash": "sha256:0ac36fd217069db5f305c480a165694af1ee20f0d7874ccba3360afff3ba5b87",
    "data": {
      "schemaVersion": 1,
      "name": "Mountain Resilience",
      "rank": 4,
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
      "description": "The target's skin hardens like the stone of a mountain face. It gains resistance 5 to physical damage, except adamantine. Each time the target is hit by a bludgeoning, piercing, or slashing attack, mountain resilience's duration decreases by 1 minute.\nSpell Effect: Mountain Resilience\nHeightened (6th) The resistance increases to 10.\nHeightened (8th) The resistance increases to 15.\nHeightened (10th) The resistance increases to 20.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 creature",
      "area": null,
      "duration": "20 minutes",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (6th) The resistance increases to 10.\nHeightened (8th) The resistance increases to 15.\nHeightened (10th) The resistance increases to 20."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 271,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Mountain Resilience",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Mountain Resilience",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Mountain Resilience",
          "sourceId": "JHpYudY14g0H4VWU",
          "name": "Spell Effect: Mountain Resilience",
          "type": "effect"
        },
        "owner": {
          "sourceId": "2BV2yYPfVJ5zirZt",
          "name": "Mountain Resilience",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:weapon-storm",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "8M03UxGXjYyDFAoy",
      "slug": "weapon-storm",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:e10bc5d89db38e83f8d07c621e8f7e76d17a9e6cdef7e6af70ec75dba88a447f",
    "translatableHash": "sha256:aa56a527199083a73b17c209df8894ae29357270d7bd0b94d86c6faa562cd55c",
    "data": {
      "schemaVersion": 1,
      "name": "Weapon Storm",
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
      "description": "Area 30-foot cone or 10-foot emanation\nYou swing a weapon you're holding, and the weapon magically multiplies into duplicates that swipe at all creatures in either a cone or an emanation. This flurry deals four dice of damage to creatures in the area. This damage has the same type as the weapon and uses the same die size. Determine the die size as if you were attacking with the weapon; for instance, if you were wielding a two-hand weapon in both hands, you'd use its two-hand damage die.\nCritical Success The creature is unaffected.\nSuccess The target takes half damage.\nFailure The target takes full damage.\nCritical Failure The target takes double damage and is subject to the weapon's critical specialization effect.\nHeightened (+1) Add another damage die.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "",
      "defense": "reflex save",
      "damage": [],
      "heightening": "Heightened (+1) Add another damage die."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:fly",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "A2JfEKe6BZcTG1S8",
      "slug": "fly",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:bf5f80fc6ca4b9d9291145bb105b8cd856b2b1b4069154a0b11663aa2478399e",
    "translatableHash": "sha256:222fe8840799cdb51ec75d9f53aeedbc191d9f037f99c5d72b737349ae0e4728",
    "data": {
      "schemaVersion": 1,
      "name": "Fly",
      "rank": 4,
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
      "description": "The target can soar through the air, gaining a fly Speed equal to its Speed or 20 feet, whichever is greater.\nSpell Effect: Fly\nHeightened (7th) The duration increases to 1 hour.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 creature",
      "area": null,
      "duration": "5 minutes",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (7th) The duration increases to 1 hour."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 120,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Fly",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Fly",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Fly",
          "sourceId": "MuRBCiZn5IKeaoxi",
          "name": "Spell Effect: Fly",
          "type": "effect"
        },
        "owner": {
          "sourceId": "A2JfEKe6BZcTG1S8",
          "name": "Fly",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:detect-scrying",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "AnWCohzPgK4L9GVl",
      "slug": "detect-scrying",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:8c5ecafcfa06bc08e650e8796302032a17d594bd04d1ee70a19c25c440f21da0",
    "translatableHash": "sha256:b62c5628363c4723c5fe7d9a45d8dc114df7b4a19acb42f256381197dc97b6bd",
    "data": {
      "schemaVersion": 1,
      "name": "Detect Scrying",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "detection",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "By reading trace auras, you detect the presence of scrying effects in the area. If detect scrying is higher rank than a scrying effect, you gain a glimpse of the scrying creature and learn its approximate distance and direction.\nHeightened (6th) The duration is until the next time you make your daily preparations.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "30 emanation",
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (6th) The duration is until the next time you make your daily preparations."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:unfettered-movement",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "aqRYNoSvxsVfqglH",
      "slug": "unfettered-movement",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:385f8d4d477b9a79bac34b8fc31df77e1dde08394c9104412fa63c56467d355f",
    "translatableHash": "sha256:4efcf673c394c299e6ab7adc528b1dfb2c3a6573ccc6f5266bcce61ae41e5023",
    "data": {
      "schemaVersion": 1,
      "name": "Unfettered Movement",
      "rank": 4,
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
      "description": "You repel effects that would hinder a creature or slow its movement. While under this spell's effect, the target ignores effects that would give them a circumstance penalty to Speed. When they attempt to Escape an effect that has them Immobilized, Grabbed, or Restrained, they automatically succeed unless the effect is magical and of a higher rank than the unfettered movement spell.\nSpell Effect: Unfettered Movement",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 creature touched",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 207,
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
          "sourceId": "aqRYNoSvxsVfqglH",
          "name": "Unfettered Movement",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 278,
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
          "sourceId": "aqRYNoSvxsVfqglH",
          "name": "Unfettered Movement",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 334,
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
          "sourceId": "aqRYNoSvxsVfqglH",
          "name": "Unfettered Movement",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 389,
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
          "sourceId": "aqRYNoSvxsVfqglH",
          "name": "Unfettered Movement",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 573,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Unfettered Movement",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Unfettered Movement",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Unfettered Movement",
          "sourceId": "CdAyAiMGESvgNQtz",
          "name": "Spell Effect: Unfettered Movement",
          "type": "effect"
        },
        "owner": {
          "sourceId": "aqRYNoSvxsVfqglH",
          "name": "Unfettered Movement",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:rewrite-memory",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "FhOaQDTSnsY7tiam",
      "slug": "rewrite-memory",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/modify-memory.webp"
    },
    "sourceHash": "sha256:6f6851b4f06d807fcd1de6b4abb1aba781d8ee3b632d37e74cc3fd4d96a7f33d",
    "translatableHash": "sha256:24c97c26b0747225de19aa414d0075b07fe1a9bbc92666f71c31828fc2902709",
    "data": {
      "schemaVersion": 1,
      "name": "Rewrite Memory",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "occult"
      ],
      "description": "You alter the target's memories by erasing a memory, enhancing a memory's clarity, altering a memory, or adding a false memory. The target can attempt a Will save to resist the spell.\nCritical Success The target is unaffected and realizes you tried to alter its memory.\nSuccess The target is unaffected but thinks your spell was something harmless instead of rewrite memory, unless it identifies the spell.\nFailure During the first 5 minutes of the spell's duration, you can Sustain the spell to modify a memory once each round. When you do, you imagine up to 6 seconds of memory to modify, to a maximum of 5 continuous minutes of memory.\nAny memories you've altered remain changed as long as the spell is active. If the target moves out of range before the 5 minutes is up, you can't alter any further memories.\nHeightened (6th) You can Cast the Spell on a willing target to suppress all memory of a particular topic, detailed in 50 words or fewer. The effect is permanent, and it patches these omissions with an indistinct haze.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "unlimited",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened (6th) You can Cast the Spell on a willing target to suppress all memory of a particular topic, detailed in 50 words or fewer. The effect is permanent, and it patches these omissions with an indistinct haze."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:talking-corpse",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "FM3SmEW8N1FCRjqt",
      "slug": "talking-corpse",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/talking-corpse.webp"
    },
    "sourceHash": "sha256:36d9c99edffccd69d8c3c8ec5722f045cee63e61f18a5cb2ca4cc3ac54e85421",
    "translatableHash": "sha256:e16ac3f01b3abb1c2c0b3f5e158b9ea7bba98050400d67a47533f776f315c71c",
    "data": {
      "schemaVersion": 1,
      "name": "Talking Corpse",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "You grant the target corpse a semblance of life, which it uses to speak the answers to three questions posed to it. This spell calls on the physical body's latent memories rather than summoning back the deceased's spirit, so the corpse must be mostly intact for the spell to function. The more damage the corpse has taken, the more inaccurate or patchwork its answers are, and it must have a throat and mouth to speak at all. If anyone has previously cast this spell on the corpse in the last week, the spell automatically fails. The corpse can attempt a Will save to resist answering the questions using the statistics of the original creature at its time of death, with the following effects.\nCritical Success The target can lie or refuse to answer your questions, and the target's spirit haunts you for 24 hours, bothering you and causing you to be unable to gain any rest for that time.\nSuccess The target can provide false information or refuse to answer your questions.\nFailure The target must answer truthfully, but its answers can be brief, cryptic, and repetitive. It can still mislead you or attempt to stall so that the spell's duration runs out before you can ask all your questions.\nCritical Failure As failure, but the target's answers are more direct and less repetitive, though still cryptic. It takes a -2 status penalty to Deception checks to deceive or mislead you.",
      "castingTime": "10 minutes",
      "range": "touch",
      "target": "1 corpse",
      "area": null,
      "duration": "10 minutes",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:mirage",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "HBJPsonQnWcC3qdX",
      "slug": "mirage",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:2873a4be2d90e43c628b05f2a04aea5fddb8122bcbb7e036db35a7ee661ace96",
    "translatableHash": "sha256:0c9b7c3e66e2fdc87f17c800fbce4df6be139f057588adc453a6d50d379f1ef7",
    "data": {
      "schemaVersion": 1,
      "name": "Mirage",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "illusion",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult",
        "primal"
      ],
      "description": "You create an illusion that causes natural terrain to look, sound, feel, and smell like a different kind of terrain. This doesn't disguise any structures or creatures in the area.\nAny creature that touches the illusion or uses the Seek action to examine it can attempt to disbelieve your illusion.\nHeightened (5th) Your image can also disguise structures or create illusory structures (but still doesn't disguise creatures).",
      "castingTime": "10 minutes",
      "range": "500 feet",
      "target": "",
      "area": "50 burst",
      "duration": "until your next daily preparations",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (5th) Your image can also disguise structures or create illusory structures (but still doesn't disguise creatures)."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 241,
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
          "sourceId": "HBJPsonQnWcC3qdX",
          "name": "Mirage",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:telepathy",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "HqTI6wRrck1YXp3F",
      "slug": "telepathy",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/telepathy.webp"
    },
    "sourceHash": "sha256:7792e0704532eabc4f9e87c2ca2415e8081940e384ef74af0d32809af772c69c",
    "translatableHash": "sha256:be98423e56b8a2ed0b7c6b236ec325edc4ea2c7f04f57ff163e722eb4789faf7",
    "data": {
      "schemaVersion": 1,
      "name": "Telepathy",
      "rank": 4,
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
      "description": "You can communicate telepathically with creatures within 30 feet. Once you establish a connection by communicating with a creature, the communication is two-way. You can communicate only with creatures that share a language with you.\nHeightened (6th) You can communicate telepathically with creatures using shared mental imagery even if you don't share a language; telepathy loses the linguistic trait.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (6th) You can communicate telepathically with creatures using shared mental imagery even if you don't share a language; telepathy loses the linguistic trait."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:divine-wrath",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "hVU9msO9yGkxKZ3J",
      "slug": "divine-wrath",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:1d44bf17bfc0cf729173a88ec7ec677b9f226ebec1ccf552308fe69a85009a1d",
    "translatableHash": "sha256:c22108765b8f1a66e9053d994f4e122622e61799ecf731624218a9ded7af8b16",
    "data": {
      "schemaVersion": 1,
      "name": "Divine Wrath",
      "rank": 4,
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
      "description": "You channel the fury of divinity against your foes. You deal 4d10 spirit damage to enemies in the area, depending on their Fortitude save.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage.\nFailure The creature takes full damage and is Sickened 1.\nCritical Failure The creature takes full damage and is Sickened 2; while it's sickened, it's also Slowed 1.\nHeightened (+1) The damage increases by 1d10.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "",
      "area": "20 burst",
      "duration": "",
      "defense": "fortitude save",
      "damage": [
        {
          "formula": "4d10",
          "type": "spirit",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+1) The damage increases by 1d10."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 352,
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
          "sourceId": "hVU9msO9yGkxKZ3J",
          "name": "Divine Wrath",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 496,
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
          "sourceId": "hVU9msO9yGkxKZ3J",
          "name": "Divine Wrath",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 592,
        "uuid": "Compendium.pf2e.conditionitems.Item.Slowed",
        "label": "Slowed 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Slowed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Slowed",
          "sourceId": "xYTAsEpcJE1Ccni3",
          "name": "Slowed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "hVU9msO9yGkxKZ3J",
          "name": "Divine Wrath",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:wall-of-fire",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "IarZrgCeaiUqOuRu",
      "slug": "wall-of-fire",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:660e728dcb8743f08d26478924a9d542c1b27ebf0800b828b8f6fe073cb0d8ed",
    "translatableHash": "sha256:8500bfb7085d30c8f56b6fb3575fde9dd35cde2f161b9e8fd45e76ea7323c9f6",
    "data": {
      "schemaVersion": 1,
      "name": "Wall of Fire",
      "rank": 4,
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
      "description": "You raise a blazing wall that burns creatures passing through it. You create either a 5-foot-thick wall of flame in a straight line up to 60 feet long and 10 feet high, or a 5-foot-thick, 10-foot-radius ring of flame with the same height. The wall stands vertically in either form; if you wish, the wall can be of a shorter length or height. Everything on each side of the wall is Concealed from creatures on the opposite side. Any creature that crosses the wall or is occupying the wall's area at the start of its turn takes 4d6 fire damage.\nHeightened (+1) The fire damage increases by 1d6.",
      "castingTime": "3 actions",
      "range": "120 feet",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [
        {
          "formula": "4d6",
          "type": "fire",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+1) The fire damage increases by 1d6."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 384,
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
          "sourceId": "IarZrgCeaiUqOuRu",
          "name": "Wall of Fire",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:vital-beacon",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ikSb3LRGnrwXJBVX",
      "slug": "vital-beacon",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/vital-beacon.webp"
    },
    "sourceHash": "sha256:c73d1ada1d3b48fe5a129aaf0a94daf2e921f7048b7774b599ec28635e849b5c",
    "translatableHash": "sha256:7e81b118a7ab8f0128c5e6835b700ccf81a0eb4b4c39d70e354ad68456f881ec",
    "data": {
      "schemaVersion": 1,
      "name": "Vital Beacon",
      "rank": 4,
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
      "description": "Vitality radiates outward from you, allowing others to supplicate and receive healing. Once per round, either you or an ally can use an Interact action to supplicate and lay hands upon you to regain Hit Points. Each time the beacon heals someone, it decreases in strength. It restores (@item.rank)d10[healing,vitality|shortLabel] Hit Points to the first creature, (@item.rank)d8[healing,vitality|shortLabel] Hit Points to the second, (@item.rank)d6[healing,vitality|shortLabel] Hit Points to the third, and (@item.rank)d4[healing,vitality|shortLabel] Hit Points to the fourth, after which the spell ends. You can have only one vital beacon active at a time.\nSpell Effect: Vital Beacon\nHeightened (+1) The beacon restores one additional die of Hit Points each time it heals, using the same die size as the others for that step.",
      "castingTime": "1 minute",
      "range": "",
      "target": "",
      "area": null,
      "duration": "until your next daily preparations",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (+1) The beacon restores one additional die of Hit Points each time it heals, using the same die size as the others for that step."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 704,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Vital Beacon",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Vital Beacon",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Vital Beacon",
          "sourceId": "WWtSEJGwKY4bQpUn",
          "name": "Spell Effect: Vital Beacon",
          "type": "effect"
        },
        "owner": {
          "sourceId": "ikSb3LRGnrwXJBVX",
          "name": "Vital Beacon",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:vision-of-death",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Jmxru8zMdYMRuO5n",
      "slug": "vision-of-death",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/phantasmal-killer.webp"
    },
    "sourceHash": "sha256:a61575317d6b11a4608556c50b72ccc285a07c8b7120d2e2952cc6571f7f950d",
    "translatableHash": "sha256:d81cb669cd1e84940119237936157bd8368194bc509d4eaf0169bcc9f1133052",
    "data": {
      "schemaVersion": 1,
      "name": "Vision of Death",
      "rank": 4,
      "rarity": "common",
      "traits": [
        "concentrate",
        "death",
        "emotion",
        "fear",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You force the target to see a vision of its own death. It takes 8d6 mental damage with a Will save. If the target is reduced to 0 HP by this spell, its vision becomes reality and kills it instantly.\nCritical Success The target is unaffected.\nSuccess The target takes half damage and is Frightened 1.\nFailure The target takes full damage and is Frightened 2.\nCritical Failure The target takes double damage, is Frightened 4 and is Fleeing for as long as it's frightened.\nHeightened (+1) The damage increases by 2d6.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "1 living creature",
      "area": null,
      "duration": "",
      "defense": "will save",
      "damage": [
        {
          "formula": "8d6",
          "type": "mental",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+1) The damage increases by 2d6."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 342,
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
          "sourceId": "Jmxru8zMdYMRuO5n",
          "name": "Vision of Death",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 479,
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
          "sourceId": "Jmxru8zMdYMRuO5n",
          "name": "Vision of Death",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 624,
        "uuid": "Compendium.pf2e.conditionitems.Item.Frightened",
        "label": "Frightened 4",
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
          "sourceId": "Jmxru8zMdYMRuO5n",
          "name": "Vision of Death",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 699,
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
          "sourceId": "Jmxru8zMdYMRuO5n",
          "name": "Vision of Death",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:dispelling-globe",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "JOdOpbPDl7nqvJUm",
      "slug": "dispelling-globe",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/globe-of-invulnerability.webp"
    },
    "sourceHash": "sha256:c0b81c602a787e99fbd264866239cef83f32931d693909fd1e3d1db4128ba4b1",
    "translatableHash": "sha256:3d7083f2adacfb07a73a5ac91ec0ef2f1f2f4fab434e3939f128e0f145be7d8c",
    "data": {
      "schemaVersion": 1,
      "name": "Dispelling Globe",
      "rank": 4,
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
      "description": "You create an immobile globe around yourself that attempts to counteract any spell from outside the globe whose area or targets enter into the globe, as if the globe were a Dispel Magic spell 1 rank lower than its actual spell rank.\nIf the counteract attempt succeeds, it prevents only the portion of the spell that would have entered the globe (so if the spell also has targets outside the globe, or part of its area is beyond the globe, those targets or that area is affected normally).\nYou must form the sphere in an unbroken open space, so its edges don't pass through any creatures or objects, or the spell is lost (though creatures can enter the globe after the spell is cast).",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "10 burst",
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 176,
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
          "sourceId": "JOdOpbPDl7nqvJUm",
          "name": "Dispelling Globe",
          "type": "spell"
        }
      }
    ]
  }
]
