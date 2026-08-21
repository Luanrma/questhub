import type { Pathfinder2eOriginalContentRecord } from '../../records'
import type { Pathfinder2eSpellData } from '../types'

export const PATHFINDER_2E_EXHAUSTIVE_04_SPELL_ORIGINALS: readonly Pathfinder2eOriginalContentRecord<Pathfinder2eSpellData>[] = [
  {
    "contentId": "pf2e:spell:spells-srd:clear-mind",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "EfFMLVbmkBWmzoLF",
      "slug": "clear-mind",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/detect-alignment.webp"
    },
    "sourceHash": "sha256:2b3e7278743f708feaf41086b136b0bfca5c53e67a8e5cc277aa76a7c695870b",
    "translatableHash": "sha256:29ab996116f337bbb930a9c8afec4301ec4cc1ba651bf7e60f3e6bae914ae1ab",
    "data": {
      "schemaVersion": 1,
      "name": "Clear Mind",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "healing",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "divine",
        "occult",
        "primal"
      ],
      "description": "You drive mental contamination from the target's mind. Attempt to counteract an effect of your choice imposing one of these conditions on the target: Fleeing, Frightened, and Stupefied. If you failed to counteract the effect but you would have if its counteract rank were 2 lower, instead suppress the effect until the beginning of your next turn. The effect's duration doesn't elapse while it's suppressed. This spell can't counteract or suppress conditions that are part of curses, diseases, or a natural state of the target.\nHeightened (4th) Add Confused, Controlled, and Slowed to the list of conditions.\nHeightened (6th) As 4th rank, plus add Doomed.\nHeightened (8th) As 4th rank, plus add doomed and Stunned.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 willing creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) Add Confused, Controlled, and Slowed to the list of conditions.\nHeightened (6th) As 4th rank, plus add Doomed.\nHeightened (8th) As 4th rank, plus add doomed and Stunned."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:embed-message",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "eIQ86FOXK34HiNLs",
      "slug": "embed-message",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/magic-mouth.webp"
    },
    "sourceHash": "sha256:43a022b4080a09199ed87860bda35fb06d711613406c5c5cd6c5ed92818c8e49",
    "translatableHash": "sha256:5b2a0d32f1fd78a772b9258564dedb5e1f1d789e8843dfa19e8cd70af037e749",
    "data": {
      "schemaVersion": 1,
      "name": "Embed Message",
      "rank": 2,
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
      "description": "You specify a trigger and a message up to 25 words long. When the specified trigger occurs within 30 feet of the target, illusory text of your message circles the target accompanied by a disembodied voice. You can choose a language you know for the text and speech, and can choose what the voice sounds like. Once the message is completed, the spell ends.\nHeightened (4th) You can add a simple sensory component to emphasize the message, such as an odor, visual effect, or physical sensation. This addition is obviously illusory and part of the message, lasting only while the message is being read.\nHeightened (6th) As 4th rank, but you can choose how many times the spell repeats the message before it ends; there is no limit to the number of repetitions.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 object or willing creature",
      "area": null,
      "duration": "unlimited",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) You can add a simple sensory component to emphasize the message, such as an odor, visual effect, or physical sensation. This addition is obviously illusory and part of the message, lasting only while the message is being read.\nHeightened (6th) As 4th rank, but you can choose how many times the spell repeats the message before it ends; there is no limit to the number of repetitions."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:sound-body",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Et8RSCLx8w7uOLvo",
      "slug": "sound-body",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/wholeness-of-body.webp"
    },
    "sourceHash": "sha256:93563aa9877a4a78f1b2c1662b335b394a6748665e9457876d23c965c3c79eab",
    "translatableHash": "sha256:08cacda9fd363229c1fae846ed86ff3cee1107aced57d6c718778bf7899bbc90",
    "data": {
      "schemaVersion": 1,
      "name": "Sound Body",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "healing",
        "manipulate",
        "vitality"
      ],
      "traditions": [
        "divine",
        "occult",
        "primal"
      ],
      "description": "You send a surge of healing energy to restore the target's body. Attempt to counteract an effect of your choice imposing one of these conditions on the target: Blinded, Dazzled, Deafened, Enfeebled, or Sickened. If you didn't counteract the effect, but you would have if its counteract rank were 2 lower, instead suppress the effect until the beginning of your next turn. The effect's duration doesn't elapse while it's suppressed.\nThis spell can't counteract or suppress curses, diseases, or conditions that are part of the target's normal state.\nHeightened (4th) Add Drained and Slowed to the list of conditions.\nHeightened (6th) As 4th rank, plus add Petrified.\nHeightened (8th) As 4th rank, plus add petrified and Stunned.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 willing creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) Add Drained and Slowed to the list of conditions.\nHeightened (6th) As 4th rank, plus add Petrified.\nHeightened (8th) As 4th rank, plus add petrified and Stunned."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:illusory-creature",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "f8SBoXiXQjlCKqly",
      "slug": "illusory-creature",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:aeef1e1054f54a3c605f8d752c36a9ea75d62bb0d5efbcf9f97f47f3731333b7",
    "translatableHash": "sha256:f5928039bb90720b29be2dd91e01e23448620e2200860dc890fd45fcebe5e9ee",
    "data": {
      "schemaVersion": 1,
      "name": "Illusory Creature",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "auditory",
        "concentrate",
        "illusion",
        "manipulate",
        "olfactory",
        "visual"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You create an illusory image of a Large or smaller creature. It generates the appropriate sounds, smells, and feels believable to the touch. If you and the image are ever farther than 500 feet apart, the spell ends.\nThe image can't speak, but you can use your actions to speak through the creature, with the spell disguising your voice as appropriate. You might need to attempt a Deception or Performance check to mimic the creature, as determined by the GM. This is especially likely if you're trying to imitate a specific person and engage with someone that person knows.\nIn combat, the illusion can use 2 actions per turn, which it uses when you Sustain the spell. It uses your spell attack modifier for attack rolls and your spell DC for its AC. Its saving throw modifiers are equal to your spell DC – 10. It is substantial enough that it can flank other creatures. If the image is hit by an attack or fails a save, the spell ends.\nThe illusion can cause damage by making the target believe the illusion's attacks are real, but it cannot otherwise directly affect the physical world. If the illusory creature hits with a Strike, the target takes 3d4[mental] damage. The illusion's Strikes are nonlethal. If the damage doesn't correspond to the image of the monster—for example, if an illusory Large dragon deals only 5 damage—the GM might allow the target to attempt an immediate Perception check to disbelieve the spell. Any relevant resistances and weaknesses apply if the target thinks they do, as judged by the GM. For example, if the illusion wields a warhammer and attacks a creature resistant to bludgeoning damage, the creature would take less mental damage. However, illusory damage does not deactivate regeneration or trigger other effects that require a certain damage type. The GM should track illusory damage dealt by the illusion.\nAny creature that touches the image or uses the Seek action to examine it can attempt to disbelieve your illusion. When a creature disbelieves the illusion, it recovers from half the damage it had taken from it (if any) and doesn't take any further damage from it.\nHeightened (+1) The damage of the image's Strikes increases by 1d4, and the maximum size of creature you can create increases by one (to a maximum of Gargantuan).",
      "castingTime": "2 actions",
      "range": "500 feet",
      "target": "",
      "area": null,
      "duration": "sustained",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (+1) The damage of the image's Strikes increases by 1d4, and the maximum size of creature you can create increases by one (to a maximum of Gargantuan)."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:resist-energy",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Fr58LDSrbndgld9n",
      "slug": "resist-energy",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:2ee7e57a90e50c8197ec46cf766bdb55e014fe8d1cd06dc96760da3c655e39a7",
    "translatableHash": "sha256:bed19fc6d372aa5d5f0717c5798e3a9acca1fa20a1184bfdf60133bda81cf896",
    "data": {
      "schemaVersion": 1,
      "name": "Resist Energy",
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
      "description": "A shield of elemental energy protects a creature against one type of energy damage. Choose acid, cold, electricity, fire, or sonic damage. The target and its gear gain resistance 5 against the damage type you chose.\nSpell Effect: Resist Energy\nHeightened (4th) The resistance increases to 10, and you can target up to two creatures.\nHeightened (7th) The resistance increases to 15, and you can target up to five creatures.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 creature",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) The resistance increases to 10, and you can target up to two creatures.\nHeightened (7th) The resistance increases to 15, and you can target up to five creatures."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:deafness",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "fZPCv2VHuM2yPbC8",
      "slug": "deafness",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:a89050468e10e36ad0f0ebf10cc7ad7d6e2e8f6ea3951929bc5d78909be837c8",
    "translatableHash": "sha256:348017d8e7de4f71cb73e2004a2f85fbf55d309d74c00c0f3a93f6bf37858f38",
    "data": {
      "schemaVersion": 1,
      "name": "Deafness",
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
      "description": "The target loses hearing; it must attempt a Fortitude save. The target is then temporarily immune for 1 minute.\nCritical Success The target is unaffected.\nSuccess The target is Deafened for 1 round.\nFailure The target is Deafened for 10 minutes.\nCritical Failure The target is Deafened permanently.",
      "castingTime": "2 actions",
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
    "contentId": "pf2e:spell:spells-srd:silence",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "gIdDLrbswTV3OBJy",
      "slug": "silence",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/silence.webp"
    },
    "sourceHash": "sha256:dd46ee17f06e58669573a5aff37fde150aecea6e5729425700b4dc27467637bc",
    "translatableHash": "sha256:56349fe4e2dd16f2144e33688a7a6aa9c2f3bbd324b651d86f20cec9b198b38d",
    "data": {
      "schemaVersion": 1,
      "name": "Silence",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "illusion",
        "manipulate",
        "subtle"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "The target makes no sound, preventing creatures from noticing it using hearing alone. The target can't use sonic attacks, nor can it use actions with the auditory trait. This prevents it from casting spells due to the magical words involved in casting, with the exception of subtle spells.\nSpell Effect: Silence\nHeightened (4th) The spell creates an aura in a 10-foot emanation around the touched creature, silencing all sound in or passing through it. While within the aura, creatures are subject to the same effects as the target. Depending upon the position of the effect, a creature might notice the lack of sound reaching it (blocking off the noise coming from a party, for example).",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 willing creature",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) The spell creates an aura in a 10-foot emanation around the touched creature, silencing all sound in or passing through it. While within the aura, creatures are subject to the same effects as the target. Depending upon the position of the effect, a creature might notice the lack of sound reaching it (blocking off the noise coming from a party, for example)."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:status",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "HTou8cG05yuSkesj",
      "slug": "status",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:8b31c6a25f07f3090501c8a4a2635004f66daefdc29712961d4e67eb48c8d28e",
    "translatableHash": "sha256:a678270ddd903c4d94c92e736fdfc63b5d9774678d2eb1b2940e525ec86ed033",
    "data": {
      "schemaVersion": 1,
      "name": "Status",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "detection",
        "manipulate"
      ],
      "traditions": [
        "divine",
        "occult",
        "primal"
      ],
      "description": "As long as you and the target are on the same plane of existence and both alive, you remain aware of its present state. You know the target's direction from you, distance from you, and any conditions affecting it.\nHeightened (4th) The spell's range increases to 30 feet, and you can target up to 10 creatures.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 willing living creature",
      "area": null,
      "duration": "until the next time you make your daily preparations",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) The spell's range increases to 30 feet, and you can target up to 10 creatures."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:entangling-flora",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "J6vNvrUT3b1hx2iA",
      "slug": "entangling-flora",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:19d01126171c54d05989fef64a48077b2a899b75311d9522ff175d4f48c2eac2",
    "translatableHash": "sha256:a291a49646e7d259ae86d9e584cb8326bb78e13f7a19e3f238d9153f369da9d9",
    "data": {
      "schemaVersion": 1,
      "name": "Entangling Flora",
      "rank": 2,
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
      "description": "Plants and fungi burst out or quickly grow, entangling creatures. All surfaces in the area are difficult terrain. Each round that a creature starts its turn in the area, it must attempt a Reflex save. On a failure, it takes a –10-foot circumstance penalty to its Speeds until it leaves the area, and on a critical failure, it's also Immobilized for 1 round. Creatures can attempt to Escape to remove these effects.\nSpell Effect: Entangling Flora",
      "castingTime": "2 actions",
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
    "contentId": "pf2e:spell:spells-srd:see-the-unseen",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "jwK43yKsHTkJQvQ9",
      "slug": "see-the-unseen",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/see-invisibility.webp"
    },
    "sourceHash": "sha256:8973abc9bd042ee739732c119ef723fe9093c6ce50fda1731d44d08f062742ff",
    "translatableHash": "sha256:7cabc8f5ad5b95b23f8565660dcb65dab4b6d4665d66cc72b65b141219281a9a",
    "data": {
      "schemaVersion": 1,
      "name": "See the Unseen",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "revelation"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult"
      ],
      "description": "Your gaze pierces through illusions and finds Invisible creatures and spirits. You can see invisible creatures as though they weren't invisible, although their features are blurred, making them Concealed and difficult to identify. You can also see incorporeal creatures, like ghosts, phased through an object from within 10 feet of an object's surface as blurry shapes seen through those objects. Subtler clues also grant you a +2 status bonus to checks you make to disbelieve illusions.\nHeightened (5th) This spell has a duration of 8 hours.\nSpell Effect: See the Unseen",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (5th) This spell has a duration of 8 hours.\nSpell Effect: See the Unseen"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:summon-elemental",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "lpT6LotUaQPfinjj",
      "slug": "summon-elemental",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/summon-elemental.webp"
    },
    "sourceHash": "sha256:c49fde2c126fb0c6298924dd2ddbf8aed017a61cdb987587ad392850052aafb5",
    "translatableHash": "sha256:3b6afa415ea72845c7a5671fd84f4d6c32d115c82b4d484203addee4d5d49c6a",
    "data": {
      "schemaVersion": 1,
      "name": "Summon Elemental",
      "rank": 2,
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
      "description": "You summon a creature that has the elemental trait and whose level is 1 or lower to fight for you.\nHeightened As listed in the summon trait.",
      "castingTime": "3 actions",
      "range": "30 feet",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened As listed in the summon trait."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:paranoia",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Mkbq9xlAUxHUHyR2",
      "slug": "paranoia",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:9a0dddeafa56a05719e7e59373073f39096448730bbe5e4a35ff6742636f442c",
    "translatableHash": "sha256:a699691ce0a61e646050cd812fd4cd6ecaca3333e0a4f7dc4231816415e094d6",
    "data": {
      "schemaVersion": 1,
      "name": "Paranoia",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "illusion",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "occult"
      ],
      "description": "You cause the target to see all other creatures as dire threats. The target is stricken by intense paranoia toward all creatures around it and must attempt a Will save.\nCritical Success The target is unaffected.\nSuccess The target believes everyone it sees is a potential threat. It becomes Unfriendly to all creatures to which it wasn't already hostile, even those that were previously allies. It treats no one as an ally. The spell ends after 1 round.\nFailure As success, but the effect lasts 1 minute.\nCritical Failure As failure, except the target believes that everyone it sees is a mortal enemy. It uses its reactions and free actions against everyone, regardless of whether they were previously its allies, as determined by the GM. It otherwise acts as rationally as it normally does and likely prefers to attack creatures that are actively attacking or hindering it over those leaving it alone.\nHeightened (6th) You can target up to 5 creatures.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened (6th) You can target up to 5 creatures."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:telekinetic-maneuver",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "mrDi3v933gsmnw25",
      "slug": "telekinetic-maneuver",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:ef852ef586b9f838675be03717ed2b1658522edbf7fff140978d301db422e7b9",
    "translatableHash": "sha256:10e86d3ba077baa046200be209d523a6566182a055be7037256c62392c42fe2c",
    "data": {
      "schemaVersion": 1,
      "name": "Telekinetic Maneuver",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "attack",
        "concentrate",
        "force",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "With a rush of telekinetic power, you move a foe or something they carry. You can attempt to Disarm, Shove, Reposition, or Trip the target using a spell attack roll instead of an Athletics check.",
      "castingTime": "2 actions",
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
    "contentId": "pf2e:spell:spells-srd:create-food",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Mt6ZzkVX8Q4xigFq",
      "slug": "create-food",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/create-food.webp"
    },
    "sourceHash": "sha256:a7c2ec1830eb8eae0df8ea9f956cad4785a4a15b7accacc1eed829c341e2f45b",
    "translatableHash": "sha256:a2afb87b70c885ce0aef36fd4c59fedc4591f8b19b8900366dea463faf62e447",
    "data": {
      "schemaVersion": 1,
      "name": "Create Food",
      "rank": 2,
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
      "description": "You create enough food to feed six Medium creatures for a day. This food is bland and unappealing, but it is nourishing. After 1 day, if no one has eaten the food, it decays and becomes inedible. Most Small creatures eat one-quarter as much as a Medium creature (one-sixteenth as much for most Tiny creatures), and most Large creatures eat 10 times as much (100 times as much for Huge creatures and so on).\nHeightened (4th) You can feed 12 Medium creatures.\nHeightened (6th) You can feed 50 Medium creatures.\nHeightened (8th) You can feed 200 Medium creatures.",
      "castingTime": "1 hour",
      "range": "30 feet",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) You can feed 12 Medium creatures.\nHeightened (6th) You can feed 50 Medium creatures.\nHeightened (8th) You can feed 200 Medium creatures."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:water-breathing",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "MZGkMsPBztFN0pUO",
      "slug": "water-breathing",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:29de22d3a4e734aeb9d7af15d397f753a750e663da67c2e963c8d5a0a0b223b0",
    "translatableHash": "sha256:74f1a66bed7136e5c1dc1d1bb16939b4e0e0c6312c09fb25cb684eae4a98aae4",
    "data": {
      "schemaVersion": 1,
      "name": "Water Breathing",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "water"
      ],
      "traditions": [
        "arcane",
        "divine",
        "primal"
      ],
      "description": "The targets can breathe underwater.\nHeightened (3rd) The duration increases to 8 hours.\nHeightened (4th) The duration increases to until your next daily preparations.",
      "castingTime": "1 minute",
      "range": "30 feet",
      "target": "up to 5 creatures",
      "area": null,
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (3rd) The duration increases to 8 hours.\nHeightened (4th) The duration increases to until your next daily preparations."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:shrink",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "PjhUmyKnq6K5uDby",
      "slug": "shrink",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:d07123c7311674ba6c866295889287ad0da1487f5a069d9d1a741d0b764cf844",
    "translatableHash": "sha256:c5d47f4110939fa2152f3c140364319123f410fdf7bde39f0e7990dafe53e41a",
    "data": {
      "schemaVersion": 1,
      "name": "Shrink",
      "rank": 2,
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
      "description": "You warp space to make a creature smaller. The target shrinks to become Tiny in size. Its equipment shrinks with it but returns to its original size if removed. The creature's reach changes to 0 feet. This spell has no effect on a Tiny creature.\nSpell Effect: Shrink\nHeightened (6th) The spell can target up to 10 creatures.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 willing creature",
      "area": null,
      "duration": "5 minutes",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (6th) The spell can target up to 10 creatures."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:darkvision",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "pZTqGY1MLRjgKasV",
      "slug": "darkvision",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/darkvision.webp"
    },
    "sourceHash": "sha256:cd9d90845d888813b216f5ae7a342d4b92542ada38c0d37786aad39c3203f37b",
    "translatableHash": "sha256:9b4e9747ce2f2d57c40c26a908432dd92140a033939bf85b22d4169f965c78e1",
    "data": {
      "schemaVersion": 1,
      "name": "Darkvision",
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
      "description": "You grant yourself supernatural sight in areas of darkness. You gain Darkvision.\nSpell Effect: Darkvision\nSpell Effect: Darkvision (24 hours)\nHeightened (3rd) The spell's range is touch and it targets 1 willing creature.\nHeightened (5th) The spell's range is touch and it targets 1 willing creature. The duration is until the next time you make your daily preparations.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (3rd) The spell's range is touch and it targets 1 willing creature.\nHeightened (5th) The spell's range is touch and it targets 1 willing creature. The duration is until the next time you make your daily preparations."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:ghostly-carrier",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "rthC6dGm3nNrt1xN",
      "slug": "ghostly-carrier",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/spectral-hand.webp"
    },
    "sourceHash": "sha256:d99a665cca4c2d2c6e6576c8351bacb3e9460bd475b99de9bc98842feb5174fd",
    "translatableHash": "sha256:f2b1fb79587dc16f1678f89f1ac3dd29741ac51dc28c87ce734662839b055891",
    "data": {
      "schemaVersion": 1,
      "name": "Ghostly Carrier",
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
      "description": "You create a Tiny, semi-corporeal figure with a form you choose. It hovers near you for the duration. When you Cast a Spell that has a range of touch, you can have the carrier move within range, deliver the spell to a creature there, and return to you. If the carrier must attempt a spell attack roll, it uses your normal bonuses. The carrier has your AC and saves, but it is destroyed by any damage.",
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
    "contentId": "pf2e:spell:spells-srd:water-walk",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Seaah9amXg70RKw2",
      "slug": "water-walk",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:330c2798774c5851b815799e44ed8e6a859c16c634d5b12bf5ac4e581a17008e",
    "translatableHash": "sha256:66e67969ede207fc128a64564af06366024727ace6a71c1bd285895f68d49df1",
    "data": {
      "schemaVersion": 1,
      "name": "Water Walk",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "water"
      ],
      "traditions": [
        "arcane",
        "divine",
        "primal"
      ],
      "description": "The target can walk on the surface of water and other liquids without falling through. It can go underwater if it wishes, but in that case it must Swim normally. This spell doesn't grant the ability to breathe underwater.\nHeightened (4th) The spell's range increases to 30 feet, the duration increases to 1 hour, and you can target up to 10 creatures.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 creature",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) The spell's range increases to 30 feet, the duration increases to 1 hour, and you can target up to 10 creatures."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:cleanse-affliction",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "SUKaxVZW2TlM8lu0",
      "slug": "cleanse-affliction",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:6de0cb51752a693d06420e360bea99b8ba5bef3d0c3a774d27568bfdffc271ad",
    "translatableHash": "sha256:96b2da762b203952bad79ab92c8516e821b72cc091ff5e9809a20506d6529f4d",
    "data": {
      "schemaVersion": 1,
      "name": "Cleanse Affliction",
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
      "description": "Gentle restorative magic pushes back the effects of toxins and more complex maladies. Choose an affliction on the target, such as a curse, disease, or poison. If it has advanced past stage one, reduce the stage by one. This reduction can be applied only once to a given case of an affliction, with the case ending when it's completely cured. Although the reduction can't occur again, heightened versions of this spell attempt to counteract with each casting.\nHeightened (3rd) Attempt to counteract the affliction if it is a disease or poison.\nHeightened (4th) Attempt to counteract the affliction if it is a curse, disease, or poison.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 willing creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "heightened versions of this spell attempt to counteract with each casting.\nHeightened (3rd) Attempt to counteract the affliction if it is a disease or poison.\nHeightened (4th) Attempt to counteract the affliction if it is a curse, disease, or poison."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:blood-vendetta",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "TaaMEYdZXQXF0Sks",
      "slug": "blood-vendetta",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/blood-vendetta.webp"
    },
    "sourceHash": "sha256:3c78512736d614adcc03a77ee74ad51b97c4d86554c780fdb118462525d6519b",
    "translatableHash": "sha256:a5dbfd2e14ecbab8bbc112143730ded222c6c109c56beaffafb4726b1b80a2bb",
    "data": {
      "schemaVersion": 1,
      "name": "Blood Vendetta",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "curse"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult"
      ],
      "description": "Requirements You can bleed.\nTrigger A creature deals piercing, slashing, or persistent bleed damage to you.\nYou curse the target, punishing it for having the audacity to spill your blood. The target takes 2d6 persistent bleed damage and must attempt a Will save.\nCritical Success The target is unaffected.\nSuccess The target takes half the persistent bleed damage.\nFailure The target takes the full persistent bleed damage. Until the bleeding stops, the target has weakness 1 to piercing and slashing damage. Spell Effect: Blood Vendetta (Failure)\nCritical Failure As failure, but the target takes double the persistent bleed damage.\nHeightened (+2) The persistent bleed damage increases by 2d6.",
      "castingTime": "reaction",
      "range": "30 feet",
      "target": "The triggering creature",
      "area": null,
      "duration": "varies",
      "defense": "will save",
      "damage": [
        {
          "formula": "2d6",
          "type": "bleed",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+2) The persistent bleed damage increases by 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:laughing-fit",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "tlSE7Ly8vi1Dgddv",
      "slug": "laughing-fit",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/hideous-laughter.webp"
    },
    "sourceHash": "sha256:933368f5e857eb43517e4ccfeb9709855f6e16e9abbe00e2e76215d883f12efa",
    "translatableHash": "sha256:02a46fd197244c0e01c795cb8d003d77a5b142fd4998a5c38122d85e7f99af73",
    "data": {
      "schemaVersion": 1,
      "name": "Laughing Fit",
      "rank": 2,
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
      "description": "The target is overtaken with uncontrollable laughter. It must attempt a Will save.\nCritical Success The target is unaffected.\nSuccess The target is plagued with uncontrollable laughter. It can't use reactions.\nFailure The target is Slowed 1 and can't use reactions.\nCritical Failure The target falls Prone and can't use actions or reactions for 1 round. It then takes the effects of a failure.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 living creature",
      "area": null,
      "duration": "sustained",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:translate",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "vTQvfYu2llKQedmY",
      "slug": "translate",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/comprehend-language.webp"
    },
    "sourceHash": "sha256:b0b24a224466d3eaf85c23a5a142f5d42a3b16e64dc25823d4690b3b95cc1d89",
    "translatableHash": "sha256:e8e9a325b4768d1e51cba28bc0814a8a1fbccf20f4c5ce90212e68a053f8022e",
    "data": {
      "schemaVersion": 1,
      "name": "Translate",
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
      "description": "The target can understand the meaning of a single language it is hearing or reading when you cast the spell. This doesn't let it understand codes, language couched in metaphor, and the like (subject to GM discretion). If the target can hear multiple languages and knows that, it can choose which language to understand; otherwise, choose one of the languages randomly.\nHeightened (3rd) The target can also speak the language.\nHeightened (4th) You can target up to 10 creatures, and targets can also speak the language.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (3rd) The target can also speak the language.\nHeightened (4th) You can target up to 10 creatures, and targets can also speak the language."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:animal-form",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "wp09USMB3GIW1qbp",
      "slug": "animal-form",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:38c858e7d893b5084d5b27d49406365a8a2c7a94c21f9b38c5a3a3e9e154c4fa",
    "translatableHash": "sha256:8cfc313ec419e7692311d99ce8937d2830614649d2d0e3f83cc72c47c5db0e3a",
    "data": {
      "schemaVersion": 1,
      "name": "Animal Form",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "polymorph"
      ],
      "traditions": [
        "primal"
      ],
      "description": "You call upon primal energy to transform yourself into a Medium animal battle form. When you Cast this Spell, choose a listed battle form. You can decide the specific type of animal (such as lion or snow leopard for cat), but this has no effect on the form's Size or statistics. While in this form, you gain the animal trait. You can Dismiss the spell.\nYou gain the following statistics and abilities regardless of which animal you choose:\n• AC = 16 + your level. Ignore your armor's check penalty and Speed reduction.\n• 5 temporary Hit Points.\n• Low-light vision and imprecise scent 30 feet.\n• One or more unarmed melee attacks specific to your battle form, which are the only attacks you can Strike with. You're trained with them. Your attack modifier is +9, and your damage bonus is +1. These attacks are Strength based (for the purpose of the Enfeebled condition, for example). If your unarmed attack bonus is higher, you can use it instead.\n• Athletics modifier of +9, unless your own modifier is higher.\nYou also gain specific abilities based on the type of animal you choose:\n• Ape\n• Speed 25 feet, climb Speed 20 feet;\n• Melee a fist, Damage 2d6 bludgeoning.\n• Bear\n• Speed 30 feet;\n• Melee a jaws, Damage 2d8 piercing;\n• Melee a claw (agile), Damage 1d8 slashing.\n• Bull\n• Speed 30 feet;\n• Melee a horn, Damage 2d8 piercing.\n• Canine\n• Speed 40 feet;\n• Melee a jaws, Damage 2d8 piercing.\n• Cat\n• Speed 40 feet;\n• Melee a jaws, Damage 2d6 piercing;\n• Melee a claw (agile), Damage 1d10 slashing.\n• Crab\n• Speed 25 feet, swim Speed 15 feet;\n• Melee a big claw, Damage 2d8 piercing;\n• Melee a little claw (agile), Damage 2d4 piercing.\n• Crocodile\n• Speed 25 feet, swim Speed 30 feet;\n• Melee a jaws, Damage 2d8 piercing;\n• Melee a tail (agile), Damage 1d8 bludgeoning.\n• can hold your breath for the duration of the transformation.\n• Deer\n• Speed 50 feet;\n• Melee a antler, Damage 2d6 piercing.\n• Frog\n• Speed 25 feet, swim Speed 25 feet;\n• Melee a jaws, Damage 2d6 bludgeoning;\n• Melee a tongue (reach 15 feet), Damage 2d4 bludgeoning.\n• Orca\n• swim Speed 35 feet;\n• Melee a jaws, Damage 2d8 piercing;\n• can hold your breath for the duration of the transformation.\n• Seal\n• Speed 20 feet, swim Speed 30 feet;\n• Melee a jaws (grapple), Damage 2d6 piercing;\n• can hold your breath for the duration of the transformation.\n• Shark\n• swim Speed 35 feet;\n• Melee a jaws, Damage 2d8 piercing;\n• breathe underwater but not in air.\n• Snake\n• Speed 20 feet, climb Speed 20 feet, swim Speed 20 feet;\n• Melee a fangs, Damage 2d4 piercing plus 1d6 poison.\nHeightened (3rd) You instead gain 10 temporary HP, AC = 17 + your level, attack modifier +14, damage bonus +5, and Athletics +14.\nHeightened (4th) Your battle form is Large and your attacks have 10-foot reach. You must have enough space to expand into or the spell is lost. You instead gain 15 temporary HP, AC = 18 + your level, attack modifier +16, damage bonus +9, and Athletics +16.\nHeightened (5th) Your battle form is Huge and your attacks have 15-foot reach. You must have enough space to expand into or the spell is lost. You instead gain 20 temporary HP, AC = 18 + your level, attack modifier +18, damage bonus +7 and double the number of damage dice, and Athletics +20.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (3rd) You instead gain 10 temporary HP, AC = 17 + your level, attack modifier +14, damage bonus +5, and Athletics +14.\nHeightened (4th) Your battle form is Large and your attacks have 10-foot reach. You must have enough space to expand into or the spell is lost. You instead gain 15 temporary HP, AC = 18 + your level, attack modifier +16, damage bonus +9, and Athletics +16.\nHeightened (5th) Your battle form is Huge and your attacks have 15-foot reach. You must have enough space to expand into or the spell is lost. You instead gain 20 temporary HP, AC = 18 + your level, attack modifier +18, damage bonus +7 and double the number of damage dice, and Athletics +20."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:marvelous-mount",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "WPKJOhEihhcIm2uQ",
      "slug": "marvelous-mount",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/phantom-steed.webp"
    },
    "sourceHash": "sha256:7273b408201be2d688521e9953cfb616e3b803ad696bc6c70669c0d53de8c52e",
    "translatableHash": "sha256:d636a99346b394b99b993e295f0d1d4e20d3a4a4ceca1b29b4785160e23ec41d",
    "data": {
      "schemaVersion": 1,
      "name": "Marvelous Mount",
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
      "description": "You conjure a Large fantastical creature to serve as a mount for the target. The mount is the target's minion, has a Speed of 40 feet, and can bear the target with any carried possessions. It can't carry any other creature. The mount uses the target's AC and saves, but it's destroyed if it takes more than 10 damage at one time, ending the spell.\nHeightened (3rd) The mount can walk on water, but it must end its turn on solid ground or sink.\nHeightened (4th) The mount has a Speed of 60 feet and can walk on water.\nHeightened (5th) The mount has a Speed of 60 feet and can walk on water. It also has a fly Speed of 60 feet, but it must end its turn on a surface or fall.\nHeightened (6th) The mount has a Speed and fly Speed of 80 feet.",
      "castingTime": "10 minutes",
      "range": "30 feet",
      "target": "one creature",
      "area": null,
      "duration": "8 hours",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (3rd) The mount can walk on water, but it must end its turn on solid ground or sink.\nHeightened (4th) The mount has a Speed of 60 feet and can walk on water.\nHeightened (5th) The mount has a Speed of 60 feet and can walk on water. It also has a fly Speed of 60 feet, but it must end its turn on a surface or fall.\nHeightened (6th) The mount has a Speed and fly Speed of 80 feet."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:spiritual-armament",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "WPu3UE3kTXSLqO40",
      "slug": "spiritual-armament",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:7426e255e31e23ea9ed835540b6ac3357bc0bd5d9196e68788ba0c611de5950d",
    "translatableHash": "sha256:c8376faa3006e5e5eeb6359a24d02cfc1f8264933e26460db9501066a0559476",
    "data": {
      "schemaVersion": 1,
      "name": "Spiritual Armament",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "attack",
        "concentrate",
        "manipulate",
        "sanctified",
        "spirit"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "You create a ghostly, magical echo of one weapon you're wielding or wearing and fling it. Attempt a spell attack roll against the target's AC, dealing 2d8 damage on a hit (or double damage on a critical hit). The damage type is the same as the chosen weapon (or any of its types for a versatile weapon). The attack deals spirit damage instead if that would be more detrimental to the creature (as determined by the GM). This attack uses and contributes to your multiple attack penalty. After the attack, the weapon returns to your side. If you sanctify the spell, the attacks are sanctified as well. Each time you Sustain the spell, you can repeat the attack against any creature within 120 feet.\nHeightened (+2) The damage increases by 1d8.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [
        {
          "formula": "2d8",
          "type": "untyped",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+2) The damage increases by 1d8."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:enlarge",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "wzctak6BxOW8xvFV",
      "slug": "enlarge",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:4251240ba70ceee4837f323e14de838290d93381ce6067b7c87fad43cde7bc99",
    "translatableHash": "sha256:6308eed3639552c145e530fb34e8356f1cd37480d493ff78b1d757549e99bd34",
    "data": {
      "schemaVersion": 1,
      "name": "Enlarge",
      "rank": 2,
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
      "description": "Bolstered by magical power, the target grows to size Large. Its equipment grows with it but returns to natural size if removed. The creature is Clumsy 1. Its reach increases by 5 feet (or by 10 feet if it started out Tiny), and it gains a +2 status bonus to damage rolls on melee Strikes. This spell has no effect on a Large or larger creature.\nSpell Effect: Enlarge\nHeightened (4th) The creature instead grows to size Huge. The status bonus to melee damage is +4 and the creature's reach increases by 10 feet (or 15 feet if the creature started out Tiny). The spell has no effect on a Huge or larger creature.\nHeightened (6th) Choose either the 2nd-rank or 4th-rank version of this spell and apply its effects to up to 10 willing creatures.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 willing creature",
      "area": null,
      "duration": "5 minutes",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) The creature instead grows to size Huge. The status bonus to melee damage is +4 and the creature's reach increases by 10 feet (or 15 feet if the creature started out Tiny). The spell has no effect on a Huge or larger creature.\nHeightened (6th) Choose either the 2nd-rank or 4th-rank version of this spell and apply its effects to up to 10 willing creatures."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:noise-blast",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "wzLkNU3AAqOSKFPR",
      "slug": "noise-blast",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:11aff6f07e4099a7c121d643e68cdde33bc6a916bb2e004ce6cfd05a75da18a2",
    "translatableHash": "sha256:2c91465197139985528bd66d7443db7c14ca3c962a8a1069205e3bb4c14fd31d",
    "data": {
      "schemaVersion": 1,
      "name": "Noise Blast",
      "rank": 2,
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
      "description": "A cacophonous noise blasts out, dealing 2d10 sonic damage. Each creature must attempt a Fortitude save.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage.\nFailure The creature takes full damage and is Deafened for 1 round.\nCritical Failure The creature takes double damage, is deafened for 1 minute, and is Stunned 1.\nHeightened (+1) The damage increases by 1d10.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "",
      "area": "10 burst",
      "duration": "",
      "defense": "fortitude save",
      "damage": [
        {
          "formula": "2d10",
          "type": "sonic",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+1) The damage increases by 1d10."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:peaceful-rest",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "xRgU9rrhmGAgG4Rc",
      "slug": "peaceful-rest",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:889f1543d253ac33e9b5f874f170866a4c48c9bec7a7220b2e949916f9ca194b",
    "translatableHash": "sha256:d7034231e5a90673c6015e38ce7028f9fdfd0c7652468f6d599f4348de0962d8",
    "data": {
      "schemaVersion": 1,
      "name": "Peaceful Rest",
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
      "description": "The targeted corpse doesn't decay, nor can it be transformed into an undead. If the corpse is subject to a spell that requires the corpse to have died within a certain amount of time (for example, Raise Dead), do not count the duration of peaceful rest against that time. This spell also prevents ordinary bugs and pests (such as maggots) from consuming the body.\nHeightened (5th) The spell's duration is unlimited, but the spell takes one more action to cast and requires a cost (embalming fluid worth 6 gp).",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 corpse",
      "area": null,
      "duration": "until the next time you make your daily preparations",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (5th) The spell's duration is unlimited, but the spell takes one more action to cast and requires a cost (embalming fluid worth 6 gp)."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:animal-messenger",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "yhz9fF69uwRhnHix",
      "slug": "animal-messenger",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:72505ffd23d310b1020abc07105ab4bd3d629cf28e15cd25df78400f8ef39345",
    "translatableHash": "sha256:0eb98677f1562591a106dec9cc112b91e6d6bba765b2e97e1d1d685d420a6f78",
    "data": {
      "schemaVersion": 1,
      "name": "Animal Messenger",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "primal"
      ],
      "description": "You offer food, and an ordinary Tiny animal within range approaches to eat it. You imprint the image, direction, and distance of an obvious place or landmark well known to you within the animal. You can also attach a small object or note up to light Bulk to it. The animal does its best to reach the destination; if it makes it there, it waits nearby and allows nonhostile creatures to approach and remove the attached object. The spell ends after the message is delivered or after 24 hours, whichever comes first.\nIf there are no Tiny wild animals in range, the spell is lost.",
      "castingTime": "1 minute",
      "range": "120 feet",
      "target": "",
      "area": null,
      "duration": "see text",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:everlight",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ynm8JIU3sc3qUMpa",
      "slug": "everlight",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:c350fad244bfd3578a8def48116b75b0d0dca656c05965faeb1edbb516154cda",
    "translatableHash": "sha256:a1a637b1456abf6b5e09d6e624a69640debc550ee319bf08ab2df6ffeb6a6c63",
    "data": {
      "schemaVersion": 1,
      "name": "Everlight",
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
      "description": "The gemstone you touch glows, spreading bright light with a color of your choice in a 20-foot radius (and dim light for the next 20 feet). The spell ends immediately if the gemstone is broken.\nSpell Effect: Everlight",
      "castingTime": "3 actions",
      "range": "touch",
      "target": "a gemstone worth 6 gp or more",
      "area": null,
      "duration": "unlimited",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:oaken-resilience",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "YWrfKetOqDwVFut7",
      "slug": "oaken-resilience",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/barkskin.webp"
    },
    "sourceHash": "sha256:183a5b8c7acb5930205cfca0e81691d72bf53433e31c48bf69ce26e421472379",
    "translatableHash": "sha256:9d388fc761c7de5d15b4cf0b033a4db2e29395d358431ca5482c5d3035fa904a",
    "data": {
      "schemaVersion": 1,
      "name": "Oaken Resilience",
      "rank": 2,
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
      "description": "The target's skin becomes tough, with a consistency like bark or wood. The target gains resistance 2 to bludgeoning and piercing damage and weakness 3 to fire. After the target takes fire damage, it can Dismiss the spell as a free action triggered by taking the damage; doing so doesn't reduce the fire damage the target was dealt.\nSpell Effect: Oaken Resilience\nHeightened (+2) The resistances increase by 2, and the weakness increases by 3.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 willing creature",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (+2) The resistances increase by 2, and the weakness increases by 3."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:crisis-of-faith",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "3x6eUCm17n6ROzUa",
      "slug": "crisis-of-faith",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:26939124b215dd7481edeb1f9e1cf06e3659690fbe557c4a7d90df8513fc47b8",
    "translatableHash": "sha256:ea9a2c192db3e86cb4fcb13806abc57dae2f6b8af22bb27afafa093befcf5dac",
    "data": {
      "schemaVersion": 1,
      "name": "Crisis of Faith",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "divine"
      ],
      "description": "You assault the target's faith, riddling the creature with doubt and mental turmoil that deal 6d6 mental damage, or 6d8 mental damage if it can cast divine spells. The effects are determined by its Will save.\nTo many deities, casting this spell on a follower of your own deity without significant cause is anathema.\nCritical Success The target is unaffected.\nSuccess The target takes half damage.\nFailure The target takes full damage; if the target can cast divine spells, it's Stupefied 1 for 1 round.\nCritical Failure The target takes double damage, is Stupefied 1 for 1 round, and can't cast divine spells for 1 round.\nHeightened (+1) The damage increases by 2d6 (or by 2d8 if the target is a divine spellcaster).",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
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
      "heightening": "Heightened (+1) The damage increases by 2d6 (or by 2d8 if the target is a divine spellcaster)."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:lightning-bolt",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "9AAkVUCwF6WVNNY2",
      "slug": "lightning-bolt",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:be0885ea45e8279618514eaef0798decef0fb67adba7d81b1ef24a71ee463eec",
    "translatableHash": "sha256:5f7537a04ee8e9574abba0910f30777a5e67a6172d4200ce3425c0d09bf6efca",
    "data": {
      "schemaVersion": 1,
      "name": "Lightning Bolt",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "concentrate",
        "electricity",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "A bolt of lightning strikes outward from your hand, dealing 4d12 electricity damage.\nHeightened (+1) The damage increases by 1d12.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "120 line",
      "duration": "",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "4d12",
          "type": "electricity",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+1) The damage increases by 1d12."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:ring-of-truth",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "aewxsale5xWEPKLk",
      "slug": "ring-of-truth",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:38b285ffb404574dcd1709a3ddf88c126eb9f9ec6a6664f7c6e5e19e96e5b9f6",
    "translatableHash": "sha256:cdff9f13576dbe1125fbd67f9762d5a83cad405221f201f5f64cc02159f4dea5",
    "data": {
      "schemaVersion": 1,
      "name": "Ring of Truth",
      "rank": 3,
      "rarity": "uncommon",
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
      "description": "You designate an area in which lies are revealed. Creatures in the area also take a –2 status penalty to Deception checks. Each time a creature in the area speaks a true statement, the soft ring of a bell sounds in the area. Creatures are aware of the magic; therefore, they can avoid answering questions to which they would normally respond with a lie, or they can be evasive as long as they remain within the boundaries of the truth. If a creature is in the area when the spell is cast or later enters the area, that creature attempts a Will save. It uses the results of this initial save if it leaves and reenters the area.\nCritical Success The target is so convincing that the bell rings even if they lie.\nSuccess If the target lies and succeeds at their Deception check against all targets, the bell still rings.\nFailure The bell accurately sees through their deception and will never ring if they lie.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "",
      "area": "20 burst",
      "duration": "10 minutes",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:ghostly-weapon",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "AMEu5zzLN7uCX645",
      "slug": "ghostly-weapon",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/ghostly-weapon.webp"
    },
    "sourceHash": "sha256:6290a0e1b50e16b949502f99e1f7cce8720ed36ec125b09448495e5e6895e0e2",
    "translatableHash": "sha256:4e94d8f832a895353aaed6196c55a1e14b7c75cfb3089ba8c97905f97be850ac",
    "data": {
      "schemaVersion": 1,
      "name": "Ghostly Weapon",
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
      "description": "The target weapon becomes translucent and ghostly, and it can affect material and incorporeal creatures and objects. It gains the effects of the Ghost Touch property rune, meaning it is magical if it wasn't already, is especially effective against incorporeal creatures, and can be wielded by a corporeal or incorporeal creature.\nSpell Effect: Ghostly Weapon",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 weapon that is either unattended or wielded by you or a willing ally",
      "area": null,
      "duration": "5 minutes",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:paralyze",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "DCQHaLrYXMI37dvW",
      "slug": "paralyze",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/paralyze.webp"
    },
    "sourceHash": "sha256:407ea773d60b741ca0eff407a2395ab851f0b439feb7986ae0001c40548055de",
    "translatableHash": "sha256:d27a03ea0223a8b604a7003e6e1277e8b2316e24d26c5ea3039dbc33b40ae7ab",
    "data": {
      "schemaVersion": 1,
      "name": "Paralyze",
      "rank": 3,
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
      "description": "You block the target's motor impulses before they can leave its mind, threatening to freeze the target in place. The target must attempt a Will save.\nCritical Success The target is unaffected.\nSuccess The target is Stunned 1.\nFailure The target is Paralyzed for 1 round.\nCritical Failure The target is Paralyzed for 4 rounds. At the end of each of its turns, it can attempt a new Will save to reduce the remaining duration by 1 round, or end it entirely on a critical success.\nHeightened (7th) You can target up to 10 creatures.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "varies",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened (7th) You can target up to 10 creatures."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:holy-light",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "DyiD239dNS7RIxZE",
      "slug": "holy-light",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/searing-light.webp"
    },
    "sourceHash": "sha256:4cd8d392cf5e794dea16603969fb30500ace2ac6a0c27d371f723a61730160ba",
    "translatableHash": "sha256:6b4dd96c3f900ef2eb3f40caa0b54e30cb6aeaf1e6b5f8508520766eecf9266f",
    "data": {
      "schemaVersion": 1,
      "name": "Holy Light",
      "rank": 3,
      "rarity": "common",
      "traits": [
        "attack",
        "concentrate",
        "fire",
        "holy",
        "light",
        "manipulate"
      ],
      "traditions": [
        "divine",
        "primal"
      ],
      "description": "You shine a blazing ray of light tinged with holy energy. Make a ranged spell attack. The ray deals 5d6 fire damage. If the target has the unholy trait, you deal an extra 5d6 spirit damage.\nCritical Success The target takes double damage.\nSuccess The target takes full damage.\nIf the light passes through an area of magical darkness or targets a creature affected by magical darkness, holy light attempts to counteract the darkness. If you need to determine whether the light passes through an area of darkness, draw a line between yourself and the spell's target.\nHeightened (+1) The fire damage increases by 2d6, and the spirit damage against unholy creatures increases by 2d6.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [
        {
          "formula": "5d6",
          "type": "fire",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+1) The fire damage increases by 2d6, and the spirit damage against unholy creatures increases by 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:veil-of-privacy",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "EoKBlgf6Smt8opaU",
      "slug": "veil-of-privacy",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:9f47d35d96426ad9adad4b6569ccf3e1f078e783c391f9041a77a7759a441d0e",
    "translatableHash": "sha256:7dec1e92b21714174511b146bb95c4ce984ff43926a03de5ee3d61e6fc75bd22",
    "data": {
      "schemaVersion": 1,
      "name": "Veil of Privacy",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult",
        "primal"
      ],
      "description": "You erect protective wards that make the target difficult to detect via magic. Veil of privacy attempts to counteract all detection, revelation, and scrying effects used against the target or the target's gear throughout the duration, counting cantrips as 1st-rank spells for this purpose. Successfully counteracting a spell that targets an area or multiple targets negates the effects for only veil of privacy's target.",
      "castingTime": "10 minutes",
      "range": "touch",
      "target": "1 creature or object",
      "area": null,
      "duration": "8 hours",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:levitate",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "fI20AVwOzJMHXRdo",
      "slug": "levitate",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:a53926e35932c15e2a4011900a88c11ee99cb50c3549a9a46327847a0fcfb604",
    "translatableHash": "sha256:ddb80c07456db61abf9d757fd006644fd60c0fd4acc9b84a0dc5f7a13b05a6a6",
    "data": {
      "schemaVersion": 1,
      "name": "Levitate",
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
      "description": "You defy gravity and levitate the target 5 feet off the ground. You can Sustain the spell to move the target up or down 10 feet. A creature floating in the air from levitate takes a –2 circumstance penalty to attack rolls. A floating creature can spend an Interact action to stabilize itself and negate this penalty for the remainder of its turn. If the target is adjacent to a fixed object or terrain of suitable stability, it can move across the surface by climbing (if the surface is vertical, like a wall) or crawling (if the surface is horizontal, such as a ceiling). The GM determines which surfaces can be climbed or crawled across.\nSpell Effect: Levitate",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 unattended object or willing creature",
      "area": null,
      "duration": "5 minutes",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  }
]
