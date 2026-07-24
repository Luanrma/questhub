import type { Pathfinder2eOriginalContentRecord } from '../../records'
import type { Pathfinder2eSpellData } from '../types'

export const PATHFINDER_2E_EXHAUSTIVE_07_SPELL_ORIGINALS: readonly Pathfinder2eOriginalContentRecord<Pathfinder2eSpellData>[] = [
  {
    "contentId": "pf2e:spell:spells-srd:impaling-spike",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "oXeEbcUdgJGWHGEJ",
      "slug": "impaling-spike",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/impaling-spike.webp"
    },
    "sourceHash": "sha256:19416d55adeba31144c8630d363bc0740685f19bab62a85bfc8e113ebd3863f0",
    "translatableHash": "sha256:3948edb8e371f4302bde71739ebf3d939a3d1e0cc9c7aa4e90bb7cc4dbb95400",
    "data": {
      "schemaVersion": 1,
      "name": "Impaling Spike",
      "rank": 5,
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
      "description": "You conjure a spike that thrusts up from the earth beneath a target creature, potentially impaling it. The spike is made of cold iron and deals 8d6 piercing damage. The target must attempt a Reflex save.\nCritical Success The target dodges the spike and is unaffected.\nSuccess The target is struck by the spike and takes half damage.\nFailure The target is impaled through a leg or another nonvital body part. The creature takes full damage and, if it's standing on solid ground, becomes Immobilized. It can attempt to Escape (the DC is your spell DC). While it remains impaled, it takes damage from any weakness to cold iron it has at the end of each of its turns.\nCritical Failure As failure, but the creature is impaled through a vital organ or its center of mass, taking double damage, and it is Off-Guard as long as it's impaled.\nHeightened (+1) The damage increases by 2d6.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": "reflex save",
      "damage": [
        {
          "formula": "8d6",
          "type": "piercing",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+1) The damage increases by 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:wall-of-ice",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "R5FHRv7VqyRnxg2t",
      "slug": "wall-of-ice",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:e26ca59df3a00d03bdc16a73995247fb6eaa1edfe7abff026d87928d841377c8",
    "translatableHash": "sha256:a23e13f4fa3785968e65cf7e76cb8a3f2fda8d65aa4a37b7a59cf0232843aa98",
    "data": {
      "schemaVersion": 1,
      "name": "Wall of Ice",
      "rank": 5,
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
      "description": "You sculpt an ice barrier that blocks sight and, once shattered, freezes foes. You create either a 1-foot-thick wall of ice in a straight line up to 60 feet long and 10 feet high (the wall doesn't have to be vertical, but it must be anchored on both sides to a solid surface) or a 1-foot-thick, 10-foot radius hemisphere of ice. The ice that makes up the wall is opaque. If you wish, the wall can be of a smaller length, height, or radius.\nYou must create the wall in an unbroken open space so its edges don't pass through any creatures or objects, or the spell is lost. Each 10-foot-by-10-foot section of the wall has AC 10, Hardness 10, and 40 Hit Points, and it's immune to critical hits, cold damage, and precision damage. A section also has weakness 15 to fire; a section of the wall destroyed by fire melts, evaporating into water and steam. A section destroyed by means other than fire leaves behind a chilling mass of ice that is difficult terrain and deals 2d6 cold damage to any creature passing through it.\nHeightened (+2) The Hit Points of each section of the wall increase by 10, and the cold damage dealt to creatures crossing a destroyed section increases by 1d6.",
      "castingTime": "3 actions",
      "range": "120 feet",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [
        {
          "formula": "2d6",
          "type": "cold",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+2) The Hit Points of each section of the wall increase by 10, and the cold damage dealt to creatures crossing a destroyed section increases by 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:sending",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "R9xqCBblkS5KE4y7",
      "slug": "sending",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/sending.webp"
    },
    "sourceHash": "sha256:dffcee163b48bcb4e52d8183e71ea9a9bab4d86438828ae6eeee673353af9ac3",
    "translatableHash": "sha256:a8628bba4a042f3d8fe05cc35a1f0902c14aa7f33416b5667ec694fd9e078174",
    "data": {
      "schemaVersion": 1,
      "name": "Sending",
      "rank": 5,
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
      "description": "You send the creature a mental message of 25 words or fewer, and it can respond immediately with its own message of 25 words or fewer.",
      "castingTime": "3 actions",
      "range": "planetary",
      "target": "1 creature you know well",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:false-vision",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "RCbLd7dfquHnuvrZ",
      "slug": "false-vision",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/false-vision.webp"
    },
    "sourceHash": "sha256:da5d1e0114d2989142d0a97f47b6dd80084867cdf76343087d29c5bad5e18359",
    "translatableHash": "sha256:3c333cfa2133d531374bf3852326aefa60868df37d0d8f82bd2543cd34ae35e5",
    "data": {
      "schemaVersion": 1,
      "name": "False Vision",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "illusion",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You create a false image that fools any attempts to scry on an area. Any scrying spell sees, hears, smells, and otherwise detects whatever you wish within the area, rather than what is actually in the area. You can Sustain the spell each round to change the illusion as you desire, including playing out a complex scene. If the scrying spell is of a higher rank than false vision, the scryer can attempt a Perception check to disbelieve the illusion, though even if they're successful, they can't learn what's truly going on in the area.",
      "castingTime": "10 minutes",
      "range": "touch",
      "target": "",
      "area": "100 burst",
      "duration": "until your next daily preparations",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:umbral-journey",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "rxvS7EMJ7qmexAyA",
      "slug": "umbral-journey",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:608e836dbca321f3771284df65ba9a50317785090b173b83e4fe8d5efa862177",
    "translatableHash": "sha256:3436a40f9eeb42981838f90e7b34b36bc351a557de421d8054bd45c5bffc7b68",
    "data": {
      "schemaVersion": 1,
      "name": "Umbral Journey",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate",
        "shadow",
        "teleportation"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You move partially into the Netherworld, using its warped nature to speed your travels. Each hour, you cover roughly as much ground as you normally would in 3 days. The landmarks are vague and symbolic rather than concrete, leaving you within a mile of your intended destination when you Dismiss the spell or its duration ends.",
      "castingTime": "1 minute",
      "range": "touch",
      "target": "you and up to 10 willing creatures touched",
      "area": null,
      "duration": "8 hours",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:truespeech",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "SwUiVavHKMWG7t5K",
      "slug": "truespeech",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/tongues.webp"
    },
    "sourceHash": "sha256:f617ec5e1bb125a18a7e93da82c9d1655f5d5e096ab4c388bb1448904c0aa071",
    "translatableHash": "sha256:5d92649e9bafbab2fb66e1b079d8edcfab787baf8a300eff1e5cbe8a1dea0108",
    "data": {
      "schemaVersion": 1,
      "name": "Truespeech",
      "rank": 5,
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
      "description": "The target can understand all words regardless of language and also speak the languages of other creatures. When in a mixed group of creatures, each time the target speaks, it can choose a creature and speak in a language that creature understands, even if the target doesn't know what language that is.\nHeightened (7th) The duration is 8 hours.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 creature",
      "area": null,
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (7th) The duration is 8 hours."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:telekinetic-haul",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "tpLTLbJUrYcMWGld",
      "slug": "telekinetic-haul",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:69278765a9ce14c597ddc153ba6cdbe6a309da97ecdfe49b32b52190dd9e2d94",
    "translatableHash": "sha256:9f32925a5464c6a8cf7279afdda7183629f92ec721ed4108b38e6f7c5cee5d19",
    "data": {
      "schemaVersion": 1,
      "name": "Telekinetic Haul",
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
      "description": "You move the target up to 20 feet, potentially suspending it in midair. When you Sustain the Spell, you can do so again, or you can shift your telekinetic focus to a different eligible target within range, moving it instead.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "1 unattended object of up to 80 Bulk with no dimension longer than 20 feet",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:hallucination",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "U58aQWJ47VrI36yP",
      "slug": "hallucination",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/hallucination.webp"
    },
    "sourceHash": "sha256:bb1225a50a9528d38a9e43a86a012d99351ddbb24cc4c07f86615c9d1f8b2a3f",
    "translatableHash": "sha256:5a5ecce4778e622ea2afc15d775b7645025210e956db9a11e3688587048b90d3",
    "data": {
      "schemaVersion": 1,
      "name": "Hallucination",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "illusion",
        "incapacitation",
        "manipulate",
        "mental",
        "subtle"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "The target consistently detects one thing as another, can't detect something that's there, or detects something that's not there, though it doesn't alter their beliefs. You choose which of these effects applies, and you determine the specifics of the hallucination. For example, you could make the target see all elves as humans, be unable to detect the presence of their brother, see their beloved good luck charm on their person even when it isn't, or see a tower in the center of town.\nThe target can attempt an initial Will save, with effects below. They also receive a Will save to disbelieve the hallucination every time they Seek or directly interact with the hallucination. For example, the target could attempt to disbelieve the hallucination each time they interacted with an elf, bumped into their brother accidentally, tried to check their charm, or studied the tower. The target can attempt to disbelieve with a large circumstance bonus in situations determined by the GM, such as if the target attempted to climb the nonexistent tower.\nCritical Success The creature is unaffected.\nSuccess The creature perceives what you chose until it disbelieves, but it knows what the hallucination is.\nFailure The creature perceives what you chose until it disbelieves.\nCritical Failure The creature perceives what you chose until it disbelieves, and it trusts its false senses, taking a -4 circumstance penalty to saves to disbelieve.\nHeightened (6th) Choose to either target up to 10 creatures or change the spell's duration to until your next daily preparations.\nHeightened (8th) Choose to either target any number of creatures or change the spell's duration to unlimited.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 hour",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened (6th) Choose to either target up to 10 creatures or change the spell's duration to until your next daily preparations.\nHeightened (8th) Choose to either target any number of creatures or change the spell's duration to unlimited."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:illusory-scene",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Ucf8eynbZMfUucjE",
      "slug": "illusory-scene",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:612552844afb7829e14812c3df6e1ef4a4e1e266de8abbcdede1b42a20eea6b3",
    "translatableHash": "sha256:e567ce04fc9e678d7cc46551ad6d836e086e588aff41e473b577b467fd08c016",
    "data": {
      "schemaVersion": 1,
      "name": "Illusory Scene",
      "rank": 5,
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
      "description": "You craft an imaginary scene that includes up to 10 discrete creatures or objects of various sizes, all of which must be within the spell's area. These elements generate appropriate sounds and smells, and they feel right to the touch. Elements of an illusory scene are incapable of speech. Unlike with the Illusory Creature spell, creatures in your scene lack combat abilities and statistics. Your scene doesn't include changes to the environment around it, though you can place your scene within the illusory environment of a Mirage spell.\nWhen you create the scene, you can choose to have it be static or follow a program. Though a static scene is stationary, it includes basic natural movement. For example, wind blowing on an illusory piece of paper would rustle it. A program can be up to 1 minute long and repeats when finished. For instance, you could create a scene of two orcs fighting each other, and the fight would go the same way for each repetition. If you create a loop, the two fighters end up in the same place at the start of the scene and at the end of it, but you can smooth the program so it's hard to tell when the loop ends and begins. Anyone observing the scene for more than a few minutes almost always notices it looping. You're unable to alter the program after you create the illusion.\nAny creature that touches any part of the image or uses the Seek action to examine it can attempt to disbelieve your illusion. If they interact with a portion of the illusion, they disbelieve only that portion. They disbelieve the entire scene only on a critical success.\nHeightened (6th) Creatures or objects in your scene can speak. You must speak the specific lines for each actor when creating your program. The spell disguises your voice for each actor.\nHeightened (8th) As the 6th-rank version, and the duration is unlimited.",
      "castingTime": "10 minutes",
      "range": "500 feet",
      "target": "",
      "area": "30 burst",
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (6th) Creatures or objects in your scene can speak. You must speak the specific lines for each actor when creating your program. The spell disguises your voice for each actor.\nHeightened (8th) As the 6th-rank version, and the duration is unlimited."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:slither",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "xFp4EwVcYwSG336t",
      "slug": "slither",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:7ab4aa9ef24cbbcd0be0d9efe5fdbfabb3c3325e343ca6a4af8a597ebf74bc16",
    "translatableHash": "sha256:254a6d4fdba9ad6aad41b6bb9ceb7a9d4f197a90f49ff713019b7df0af6c9667",
    "data": {
      "schemaVersion": 1,
      "name": "Slither",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "shadow"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "A mass of snakes made of shadow rise up to capture creatures in the area. Each creature in the area when you Cast the Spell takes 3d6[piercing] damage and 1d6[persistent,poison] damage from a biting snake, and it's Grabbed or Restrained depending on its Reflex save. A creature that ends its turn in the area must also attempt this save, even if it's already grabbed or restrained by the snakes. You can Dismiss the spell.\nSuccess The creature is unaffected.\nFailure The creature takes full damage and is grabbed by a snake. The snakes' Escape DC is equal to your spell DC. A creature can attack a snake to release the creature. A snake's AC is equal to your spell DC, and it's destroyed if it takes 12 or more damage at once. New snakes continually regrow as long as the spell lasts, so destroying snakes doesn't prevent slither from capturing more creatures.\nCritical Failure As failure, but the creature takes double damage and is restrained by a snake.\nHeightened (+2) The persistent poison damage increases by 1d6 and snake HP increases by 6.",
      "castingTime": "3 actions",
      "range": "120 feet",
      "target": "",
      "area": "20 burst",
      "duration": "1 minute",
      "defense": "reflex save",
      "damage": [
        {
          "formula": "3d6",
          "type": "piercing",
          "kind": "damage"
        },
        {
          "formula": "1d6",
          "type": "poison",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+2) The persistent poison damage increases by 1d6 and snake HP increases by 6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:howling-blizzard",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "xxWhyl81w3ckslAU",
      "slug": "howling-blizzard",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:97de46ee2f5a2030ce11adb8e331e865da7e72529acedc5126445d46ef3230c4",
    "translatableHash": "sha256:b3d89efba95a72378c5e1e713a2f522f896ee315a420a6ccadc0904ee5aa576e",
    "data": {
      "schemaVersion": 1,
      "name": "Howling Blizzard",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "air",
        "cold",
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "Freezing winds extend from your hands, pushing away from you with great force. If you Cast this Spell with 2 actions, it has an area of a 60-foot cone; if you Cast this Spell with 3 actions, it has a range of 500 feet and an area of a 30-foot burst. Each creature in the area takes 10d6 cold damage with a basic Reflex save. Snowdrifts and icy gales fill the area until the start of your next turn, making the area difficult terrain.\nHeightened (+1) The damage increases by 2d6.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "60 cone",
      "duration": "",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "10d6",
          "type": "cold",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+1) The damage increases by 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:dreaming-potential",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "y0Vy7iNL3ET8K00C",
      "slug": "dreaming-potential",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:16c0bf9bd4c7aa200d3853dbe5f9e129c17c0c416856dc6e8e6403ada365d632",
    "translatableHash": "sha256:275548e8668e4838300d5ec949529f1ffb71aed4df97f06914dc516f485b308a",
    "data": {
      "schemaVersion": 1,
      "name": "Dreaming Potential",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "occult"
      ],
      "description": "You draw the target into a lucid dream where it can explore the endless possibilities of its own potential within the everchanging backdrop of its dreamscape. If it sleeps the full 8 hours uninterrupted, when it wakes, it counts as having spent a day of downtime retraining, though it can't use dreaming potential for any retraining that would require either an instructor or specialized knowledge it can't access within the dream.",
      "castingTime": "10 minutes",
      "range": "touch",
      "target": "1 willing sleeping creature",
      "area": null,
      "duration": "8 hours",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:speak-with-stones",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "YIMampGpij4Y30yE",
      "slug": "speak-with-stones",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:c24499cd4166a92aeeeeb0b1c60d4c31df5ecf7475508e5c6b5b6648e36a4c58",
    "translatableHash": "sha256:7c0af341aa12d51b31c0f46e6b4066b459cab7907c7a7a376d59280a498ed6d9",
    "data": {
      "schemaVersion": 1,
      "name": "Speak with Stones",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "concentrate",
        "earth",
        "manipulate"
      ],
      "traditions": [
        "divine",
        "occult",
        "primal"
      ],
      "description": "You can ask questions of and receive answers from natural or worked stone. While stone is not intelligent, you speak with the natural spirits of the stone, which have a personality colored by the type of stone, as well as by the type of structure the stone is part of, for worked stone. A stone's perspective, perception, and knowledge give it a worldview different enough from a human's that it doesn't consider the same details important. Stones can mostly answer questions about creatures that touched them in the past and what is concealed beneath or behind them.\nHeightened (6th) The duration is 8 hours.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (6th) The duration is 8 hours."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:moon-frenzy",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "YtesyvfAIwXOqISq",
      "slug": "moon-frenzy",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:e7ca1ac30dc7a6796d1505fb31a294f9d310bc906bdc54af2604ee0cddc3f547",
    "translatableHash": "sha256:2ff743179c0544e36fd012f213a730de7c9eb43e5efb2109dfd42fc8ad7fc42f",
    "data": {
      "schemaVersion": 1,
      "name": "Moon Frenzy",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "morph"
      ],
      "traditions": [
        "primal"
      ],
      "description": "A feral aspect overcomes the targets, filling them with strength and ferocity. Targets gain 5 temporary Hit Points, a +10-foot status bonus to their Speeds, and weakness 5 to silver. They also grow vicious fangs and claws, which are unarmed attacks. The fangs deal 2d8 piercing damage; the claws deal 2d6 slashing damage and have the agile and finesse traits. The targets use their highest weapon or unarmed attack proficiency with these attacks, and if they have weapon specialization or greater weapon specialization, they add this damage as well. On a critical hit with one of these unarmed attacks, the creature struck takes 1d4 persistent bleed damage.\nThe targets can't use concentrate actions unless those actions also have the rage trait, with the exception of Seek. A creature can attempt to end the spell's effect on itself by using a single action, which has the rage trait, to attempt a Will save against your spell DC; on a success, it ends the spell's effect on itself.\nIf a target is in the light of a full moon, it also grows by one size if it were Medium or smaller. This increases the reach of a Medium or Tiny creature by 5 feet.\nHeightened (6th) The temporary Hit Points increase to 10, the silver weakness to 10, and the damage dealt by the attacks to three dice.\nHeightened (10th) The temporary Hit Points increase to 20, the silver weakness to 20, and the damage dealt by the attacks to four dice.\nSpell Effect: Moon Frenzy",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "up to 5 willing creatures",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (6th) The temporary Hit Points increase to 10, the silver weakness to 10, and the damage dealt by the attacks to three dice.\nHeightened (10th) The temporary Hit Points increase to 20, the silver weakness to 20, and the damage dealt by the attacks to four dice.\nSpell Effect: Moon Frenzy"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:mariners-curse",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "z2mfh3oPnfYqXflY",
      "slug": "mariners-curse",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:016d3de9bd3d92ef68de33631fee690f58ddb17f02ca111b93232361c1e6809a",
    "translatableHash": "sha256:1d919335835f00bd1e4d7edc204c22ffaa635579f6c29f7d243478d45e82c8f1",
    "data": {
      "schemaVersion": 1,
      "name": "Mariner's Curse",
      "rank": 5,
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
      "description": "You afflict the target with the curse of the roiling, unforgiving sea. The target must attempt a Will save.\nCritical Success The target is unaffected.\nSuccess The target becomes Sickened 1. Reducing its sickened condition to 0 ends the curse.\nFailure The target becomes sickened 1 and can't reduce its sickened condition below 1 while the curse remains. The curse can be lifted by 4th-rank Cleanse Affliction or similar magic. Whenever the target is sickened and on the water at least a mile from shore, it is also Slowed 1.\nCritical Failure As failure, but the target becomes Sickened 2.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:summon-monitor",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ZbEHglw5tkJ3grQZ",
      "slug": "summon-monitor",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:758bdf7d4f2dab6e6922793c6d7cba45baf7dce6e8eccc0ee047931f3f3389bf",
    "translatableHash": "sha256:5975d40be79d3a6a6e2634e6534c02a4ac1a91bf0c3d9f87fa7e44c35af1fdf9",
    "data": {
      "schemaVersion": 1,
      "name": "Summon Monitor",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "summon"
      ],
      "traditions": [
        "divine"
      ],
      "description": "You summon a creature that has the monitor trait and whose level is 5 or lower to fight for you. The GM might determine your deity restricts the specific types of monitors you can summon in certain cases. For instance, Urgathoa typically doesn't allow her followers to summon psychopomps.\nHeightened As listed in the summon trait.",
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
    "contentId": "pf2e:spell:spells-srd:plant-form",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "zCcfPS4y5SrZzU2x",
      "slug": "plant-form",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/plant-form.webp"
    },
    "sourceHash": "sha256:a51fc8cdff616e10104a3666f478ad5daad2f29ed9a2f29d6bd202c6e046880d",
    "translatableHash": "sha256:1d79fb1236969c3d1246b4080a40f1885f2fbc6ff007136478ba114dcdbab9a8",
    "data": {
      "schemaVersion": 1,
      "name": "Plant Form",
      "rank": 5,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "plant",
        "polymorph",
        "wood"
      ],
      "traditions": [
        "primal"
      ],
      "description": "Taking inspiration from verdant creatures, you transform into a Large plant battle form. When you Cast this Spell, choose a listed battle form. You can substitute a similar specific plant to turn into (such as a pitcher plant instead of a flytrap), but this has no effect on the form's Size or statistics. While in this form, you gain the plant trait. You can Dismiss the spell.\nYou gain the following statistics and abilities regardless of which battle form you choose:\n• AC = 19 + your level. Ignore your armor's check penalty and Speed reduction.\n• 12 temporary Hit Points.\n• Resistance 10 to poison.\n• Low-light vision.\n• One or more unarmed melee attacks specific to the battle form you choose, which are the only attacks you can Strike with. You're trained with them. Your attack modifier is +17, and your damage bonus is +11. These attacks are Strength based (for the purpose of the Enfeebled condition, for example). If your unarmed attack modifier is higher, you can use it instead.\n• Athletics modifier of +19, unless your own modifier is higher.\nYou also gain specific abilities based on the type of plant you choose:\n• Arboreal\n• Speed 30 feet\n• Melee 1 branch (reach 15 feet), Damage 2d10 bludgeoning;\n• Melee 1 foot, Damage 2d8 bludgeoning;\n• you can speak in this form\n• Flytrap\n• Speed 15 feet; resistance 10 to acid;\n• Melee 1 leaf (reach 10 feet), Damage 2d8 piercing, and you can spend an action after a hit to Grab the target.\nHeightened (6th) Your battle form is Huge, and the reach of your attacks increases by 5 feet. You instead gain AC = 22 + your level, 24 temporary HP, attack modifier +21, damage bonus +16, and Athletics +22.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (6th) Your battle form is Huge, and the reach of your attacks increases by 5 feet. You instead gain AC = 22 + your level, 24 temporary HP, attack modifier +21, damage bonus +16, and Athletics +22."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:control-water",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "zfn5RqAdF63neqpP",
      "slug": "control-water",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:9098f9c78f3be0cde9062fb631151cb0b532e6ab2a22de8cc93d361f80efa491",
    "translatableHash": "sha256:1084de7b5d3bb4fa084bb751691362b704258cf7ae1c293469de16f5cd651ac9",
    "data": {
      "schemaVersion": 1,
      "name": "Control Water",
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
      "description": "Area 50 feet long by 50 feet wide\nBy imposing your will upon the water, you can raise or lower the level of water in the chosen area by 10 feet. Creatures that have the water trait and that are in the area when you Cast the Spell must attempt a Fortitude save, with the effects of the Slow spell.",
      "castingTime": "2 actions",
      "range": "500 feet",
      "target": "",
      "area": null,
      "duration": "1 hour",
      "defense": "fortitude save",
      "damage": [],
      "heightening": ""
    }
  }
]
