import type { Pathfinder2eOriginalContentRecord } from '../../records'
import type { Pathfinder2eSpellData } from '../types'

export const PATHFINDER_2E_EXHAUSTIVE_23_SPELL_ORIGINALS: readonly Pathfinder2eOriginalContentRecord<Pathfinder2eSpellData>[] = [
  {
    "contentId": "pf2e:spell:spells-srd:summon-deific-herald",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "kIRWUBxocERjIBni",
      "slug": "summon-deific-herald",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:ff1b52801c9f2bfe63a544fe2e56bf494a74933046e6a068229c9c50f3a6cb75",
    "translatableHash": "sha256:e44df07590194b287f233ac82ba98c4ffa85ee1bff34e3e810dbd56d127c20b3",
    "data": {
      "schemaVersion": 1,
      "name": "Summon Deific Herald",
      "rank": 8,
      "rarity": "common",
      "traits": [
        "concentrate",
        "incarnate",
        "manipulate"
      ],
      "traditions": [
        "divine"
      ],
      "description": "Your faith is strong enough to briefly summon a direct representative of your deity, such as the deity's herald. The herald occupies the space of a Huge creature and has a Speed of 60 feet. The effects of this spell depend on your deity's alignment.\n• Lawful Good Arrive (enchantment, good, lawful) Aura of Retribution While within 100 feet of the herald, you and your allies gain the champion's Retributive Strike reaction; Depart Holy Smite The herald casts 5th-rank Divine Wrath (choosing good) in a 100-foot emanation.\n• Neutral Good Arrive (enchantment, good) Aura of Redemption While within 100 feet of the herald, you and your allies gain the champion's Glimpse of Redemption reaction; Depart Merciful Healing The herald casts the 3-action version of 5th-rank Heal with a radius of 100 feet. This spell targets only you and your allies.\n• Chaotic Good Arrive (chaotic, enchantment, good) Aura of Liberation While within 100 feet of the herald, you and your allies gain the champion's Liberating Step reaction; Depart Radiating Freedom The herald affects you and all your allies within 100 feet with Unfettered Movement. The duration is reduced to 3 rounds.\n• Lawful Neutral Arrive (abjuration, lawful) Defy Chaos You and each ally within 100 feet of the herald gain resistance 20 against spirit damage while the herald is present; Depart Order's Wrath The herald casts 5th-rank Divine Wrath (choosing lawful) in a 100-foot emanation\n• Neutral Arrive (transmutation) Quickening Ripple You and each ally within 100 feet of the herald are Quickened while the herald is present, and can use the additional action to Step, Stride, or Strike; Depart Sapping Beam The herald casts 6th-rank Enervation in a 100-foot line.\n• Chaotic Neutral Arrive (abjuration, chaotic) Defy Law You and each ally within 100 feet of the herald gain resistance 20 against spirit damage while the herald is present; Depart Chaos Hammer The herald casts 5th-rank Divine Wrath (choosing chaotic) in a 100-foot emanation.\n• Lawful Evil Arrive Aura of Iron While within 100 feet of the herald, you and your allies gain the champion's Iron Command reaction; Depart Unholy Blight The herald casts 5th-rank Divine Wrath (choosing evil) in a 100-foot emanation.\n• Neutral Evil Arrive Aura of Selfishness While within 100 feet of the herald, you and your allies gain the champion's Selfish Shield reaction; Depart Infinite Despair The herald casts 5th-rank Wave of Despair in a 100-foot cone.\n• Chaotic Evil Arrive Aura of Vengeance While within 100 feet of the herald, you and your allies gain the champion's Destructive Vengeance reaction; Depart Weapon Hurricane The herald casts 5th-rank Weapon Storm in a 100-foot cone, using d12 for the die size.",
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
    "contentId": "pf2e:spell:spells-srd:burning-blossoms",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "kWDt0JcKPgX6MvdD",
      "slug": "burning-blossoms",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:5799f160aec9d6e11e8201f7505cdaaddfce49b5cbc024672f2cc0d64a82ae60",
    "translatableHash": "sha256:7948b50a3384bbc6058a619d8de43c971add9ec5e3a63b278a927610cce732a6",
    "data": {
      "schemaVersion": 1,
      "name": "Burning Blossoms",
      "rank": 8,
      "rarity": "common",
      "traits": [
        "concentrate",
        "fire",
        "manipulate",
        "plant"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "Area 30-foot radius, 100-foot tall cylinder\nAn intangible hollow tree sprouts from the ground and grows to towering height, radiating a fiery passion and fascinating viewers. The base of the tree takes up a single square and grows 100 feet upwards, while its branches extend outwards 30 feet, forming the spell's cylindrical area. The tree then blossoms, growing delicate white flowers that burn with white-hot fire. As the tree's branches gently rustle in the wind, flower petals drift to the ground in a shower of flame. Any creature that ends its turn under the tree's branches takes 6d6 fire damage from the burning petals. Any enemy that can see the tree, even if the enemy is outside the spell's area, must attempt a will save. This is an emotion, mental, and visual effect. Creatures fascinated with the tree must use at least one of their actions on each of their turns to move toward the tree.\nCritical Success The creature is unaffected and is temporarily immune for 24 hours.\nSuccess The creature is unaffected, but it must attempt a new save at the end of its turn if it can still see the tree.\nFailure The creature is Fascinated with the tree until the end of its next turn. If it can still see the tree then, it must attempt a save again.\nCritical Failure The creature is fascinated with the tree until the spell ends. The tree's fire damage doesn't end the fascination; other hostile actions end it, as normal. If the fascination ends, the creature must attempt a new save at the end of its turn if it can still see the tree.\nHeightened 1 The damage increases by 1d6",
      "castingTime": "3 actions",
      "range": "120 feet",
      "target": "",
      "area": "30 cylinder",
      "duration": "1 minute",
      "defense": null,
      "damage": [
        {
          "formula": "6d6",
          "type": "fire",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 1d6"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:summon-draconic-legion",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "2EIUqc8TCTQimggQ",
      "slug": "summon-draconic-legion",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/summon-draconic-legion.webp"
    },
    "sourceHash": "sha256:236b820957c24d7f4ff4f9aa46a51a3ffce540035ca2a0e0170a9c129f58b13f",
    "translatableHash": "sha256:2741a850141ae7106cedb8c58ec957128aa029f6666689b437303c15f1e87a8c",
    "data": {
      "schemaVersion": 1,
      "name": "Summon Draconic Legion",
      "rank": 9,
      "rarity": "common",
      "traits": [
        "concentrate",
        "incarnate",
        "manipulate"
      ],
      "traditions": [
        "arcane"
      ],
      "description": "You momentarily summon an army of powerful dragons that unleash annihilating blasts as they descend upon your location. These dragons act as one and collectively occupy the space of a Gargantuan creature. They have a fly Speed of 100 feet. When you Cast this Spell, choose whether it summons chromatic or metallic dragons.\nArrive (evocation) Energy Annihilation The draconic legion breathes out two blasts of energy: a 120-foot line and a 60-foot cone that can't overlap. Each creature in either of the areas takes 10d8 damage (basic Reflex save). The dragons choose the damage type of each breath weapon, depending on the category of dragons summoned. Chromatic dragons can choose cold, fire, or poison for the cone and acid or electricity for the line; metallic dragons can choose cold or fire for the cone and acid, electricity, or fire for the line.\nDepart Draconic Whirlwind The draconic legion strikes with fury, dealing 9d8 slashing damage (basic Reflex save) to all enemy creatures in its location or within 20 feet.",
      "castingTime": "3 actions",
      "range": "100 feet",
      "target": "",
      "area": null,
      "duration": "until the end of your next turn",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "10d8",
          "type": "cold",
          "kind": "damage"
        }
      ],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:proliferating-eyes",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "coKiMMBLESkaLNVa",
      "slug": "proliferating-eyes",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:c258309bfccc4361a62f8606f90e52f975bf30f9ff79f5261623fd5b7b0f2e6d",
    "translatableHash": "sha256:41ece38fb03f97fe516b46c2ceb309d0a00ff2db611f75ce323763c54cd26bc4",
    "data": {
      "schemaVersion": 1,
      "name": "Proliferating Eyes",
      "rank": 9,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "scrying"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult"
      ],
      "description": "You implant an Invisible, magical eye sensor on the target's body. The eye has sight and vision, but no other special senses. The eye is highly contagious-the first two times the target touches another creature during the duration, the spell buds off an additional eye that implants itself on that creature, which can then bud off two eyes of its own. This process can propagate up to four times from the original target, for a potential maximum of 31 eyes if each affected creature touches two new creatures.\nYou can switch between perceiving through your own senses or the vision of any of the eye sensors using a single action, which has the concentrate trait. You always know how many eyes there are and can tell which original eyes budded off to make which new eyes, though you gain no special insight into the identity of the new targets other than what you can glean from spying on them.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 creature (see description)",
      "area": null,
      "duration": "8 hours",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:voracious-gestalt",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "drmvQJETA3WZzXyw",
      "slug": "voracious-gestalt",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:f48edea1f711eb8b6fa42faa99bdb561479860adbba75ea34cc91cf470b1f401",
    "translatableHash": "sha256:4cddbf770018252a5c24c73e4c6ede5cda389375cc1d523973ba186b014a66ff",
    "data": {
      "schemaVersion": 1,
      "name": "Voracious Gestalt",
      "rank": 9,
      "rarity": "common",
      "traits": [
        "aura",
        "concentrate",
        "death",
        "evil",
        "manipulate"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "You create a powerful spirit entity that grows and builds strength by consuming the spirits of foes you both slay. When you Cast the Spell, the gestalt deals 14d6 void damage to all living creatures of your choice in the area, with a basic Fortitude save. Creatures you choose that end their turns in the area take 6d6 void damage, with a basic Fortitude save.\nAt the end of each of your turns, if you killed a living creature during that turn or if the gestalt's damage killed a creature since the end of your prior turn, you add the slain creature's soul to the gestalt. The emanation's radius increases by 20 feet and the damage dealt by the aura increases by 1d6. (Note that this increase only happens once, even if you killed multiple living creatures that turn.) As normal for determining threat level, the GM determines if a creature is of significant enough threat to empower the gestalt; in general, a creature several levels below you rarely poses a significant threat.\nHeightened (10th) The initial damage increases to 16d6 and the aura's damage starts at 7d6 void damage.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "30 emanation",
      "duration": "1 minute",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "14d6",
          "type": "void",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (10th) The initial damage increases to 16d6 and the aura's damage starts at 7d6 void damage."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:unspeakable-shadow",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "hq57j7Nif1zuQ2Ab",
      "slug": "unspeakable-shadow",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/unspeakable-shadow.webp"
    },
    "sourceHash": "sha256:0ee65d4f290e2d6e68c2bb43a625d46735187ee0167126ea434ed59cd0da57f9",
    "translatableHash": "sha256:21d90b736053ca5b4b383bd6bde9f1c75cd766a4d17f97ba57b79cd4ac11b81c",
    "data": {
      "schemaVersion": 1,
      "name": "Unspeakable Shadow",
      "rank": 9,
      "rarity": "common",
      "traits": [
        "concentrate",
        "death",
        "emotion",
        "fear",
        "illusion",
        "manipulate",
        "mental",
        "shadow",
        "visual"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You alter a creature's shadow, transforming it into a terrifying monster out to devour the creature. The creature must attempt a Will save. A creature that has the frightened condition from unspeakable shadow must spend at least one of its actions each turn to either attack its shadow (making a Strike ineffectually) or flee from its shadow (using one action to move away as though it had the fleeing condition).\nCritical Success The target is unaffected.\nSuccess The target is Frightened 2.\nFailure The target is Frightened 3. It can't reduce its frightened value below 1 for 1 minute.\nCritical Failure The target is so afraid, it might instantly die. It must succeed at a Fortitude save or die; this saving throw has the incapacitation trait. If it succeeds at its save, the target is Frightened 4 and can't reduce its frightened value below 1 for 1 minute.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "1 creature",
      "area": null,
      "duration": "varies",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:one-with-the-land",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "TbYqDhlNRiWHe146",
      "slug": "one-with-the-land",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:ee3c9e16eb7de00d792c43b11ad55cc7a4f2926a1d40a29db3e6b30c149bba24",
    "translatableHash": "sha256:873371367f8450d074d2d3d51b3ebfa8ed296369e23eb402bb7f31a4d42327f0",
    "data": {
      "schemaVersion": 1,
      "name": "One with the Land",
      "rank": 9,
      "rarity": "common",
      "traits": [
        "concentrate",
        "earth",
        "manipulate",
        "plant"
      ],
      "traditions": [
        "primal"
      ],
      "description": "You merge with an adjacent natural feature with enough volume to fit you and your worn and held possessions, such as the ground or a large tree. Your merged form is visible within the feature, and creatures can target and attack you normally, though you have cover and can use it to Hide or Take Cover within the feature. You can cast spells while in the feature as long as they don't require line of effect beyond the feature. You can Dismiss the spell. While merged, you gain the following additional benefits.\nSpell Effect: One with the Land\n• You immediately become aware of the surrounding terrain features, and you gain tremorsense as an imprecise sense with a range of 200 feet.\n• You can make terrain vengeance Strikes by commanding plants, rocks, and other natural features to attack your foes. These are melee Strikes that use your spell attack roll, can target any creature within 60 feet of you, and deal 5d12 5d12 bludgeoning damage, 5d12 piercing damage, or 5d12 slashing damage. You choose the damage type each time you make a terrain vengeance Strike.\n• By spending a single action, which has the concentrate trait, you can increase or decrease the environmental temperature changing it to either one step warmer than normal, one step colder than normal, or the normal temperature.\n• As a 2-action activity that has the concentrate trait, you can create or remove difficult terrain caused by natural terrain in a 20-foot burst within 200 feet. All of your alterations to the land end when the spell ends. Significant physical damage to the natural feature while you are inside it expels you and deals 10d6 to you.",
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
    "contentId": "pf2e:spell:spells-srd:fated-confrontation",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Di9gL6KIZ9eFgbs1",
      "slug": "fated-confrontation",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:d077602d703ec725631c1f7077c5a01f881cd2d0ffda35e8e7c8b9d26d709414",
    "translatableHash": "sha256:7c15054360a2a54626b3eda13c53afbf0e81f2ffe10840a1628f3b73fe7cb49a",
    "data": {
      "schemaVersion": 1,
      "name": "Fated Confrontation",
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
      "description": "You weave the threads of fate to lead two foes into a climactic battle. The targets of this spell are the fated opponents: one of the targets of this spell must be you or a willing ally, and the other must be an enemy.\nWhen you Cast the Spell, the ally you targeted (or you, if you targeted yourself) may teleport to any unoccupied space of their choice within 30 feet of its fated opponent. This is a teleportation effect.\nYou isolate the two targets for 1 round. During this time, fate refuses to allow either fated opponent to be affected by attacks or effects from a third party; a fated opponent could be affected by the other's meteor swarm or its own heal spell, but it would be entirely immune to a spell or Strike from a creature outside of the spells effects, as well including damage from a hazard or the environment. This doesn't apply to anything that was affecting the targets before you cast fated confrontation (such as a spell with a duration or persistent damage the creature had before it was affected by fated confrontation). For the duration of the spell, either fated opponent can manipulate fate once on each of its turns. This allows it to either roll twice and take the higher result on an attack roll or skill check it makes against its fated opponent (a fortune effect), or force the fated opponent to roll twice on a saving throw against one of its abilities and take the lower result (a misfortune effect).\nThis spell ends if either target becomes unable to act, or if they both agree to cease hostilities.",
      "castingTime": "3 actions",
      "range": "120",
      "target": "1 willing ally and 1 enemy",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:shadow-army",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "hvKtmoHwekDZ5iOH",
      "slug": "shadow-army",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/shadow-army.webp"
    },
    "sourceHash": "sha256:68fa922ff275377e9f7d7f97199b99631a5796059f47d38849b02e87b8a1a1e7",
    "translatableHash": "sha256:a78bc522289fcd19e28567b8333ef76b02ff70eb286e2aa50f70dedce1327b89",
    "data": {
      "schemaVersion": 1,
      "name": "Shadow Army",
      "rank": 10,
      "rarity": "common",
      "traits": [
        "auditory",
        "concentrate",
        "illusion",
        "manipulate",
        "mental",
        "shadow",
        "visual"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You create dozens of semi-real copies of yourself that swarm across the battlefield and fight your enemies. You are virtually indistinguishable from your clones, allowing you to Hide and Sneak among them. An enemy that's in the area when the spell is cast or that ends its turn in the area takes 3d10 mental damage and 3d10 bludgeoning damage, and is possibly inflicted with a condition, depending on the result of its Will save. When you Cast the Spell, you choose a condition your shadows impose on a failed save: Clumsy 2, Enfeebled 2, Off-Guard, or Slowed 1.\nCritical Success The creature takes no damage. For the duration of the spell, the creature gets a result one step better than it rolled on further saves against the spell, and can distinguish you from your clones without difficulty.\nSuccess The creature takes half damage.\nFailure The creature takes full damage, and gains the chosen condition.\nCritical Failure The creature takes double damage, and gains the chosen condition.",
      "castingTime": "3 actions",
      "range": "",
      "target": "",
      "area": "50 burst",
      "duration": "1 minute",
      "defense": "will save",
      "damage": [
        {
          "formula": "3d10",
          "type": "mental",
          "kind": "damage"
        },
        {
          "formula": "3d10",
          "type": "bludgeoning",
          "kind": "damage"
        }
      ],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:nullify",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "KRcccPeNZOZ5Nweh",
      "slug": "nullify",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:f18dea251d51ed257715e9a8b5b36500fcef8fa468ad9be96a4f58291134411f",
    "translatableHash": "sha256:a6561a25ef9e155c90d678753c7119f239aba48f264fb6322ba4c103602736e2",
    "data": {
      "schemaVersion": 1,
      "name": "Nullify",
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
      "description": "Trigger A foe within range casts a 9th-rank or lower spell.\nYou instantly destroy the incoming spell, though at the cost of sending magical feedback through your body. You automatically counteract the spell, but the feedback brings you unavoidable harm. You lose 1d8 Hit Points per rank of the triggering spell.",
      "castingTime": "reaction",
      "range": "120 feet",
      "target": "the triggering spell",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:summon-kaiju",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "WRP8TDf36hqHyGv1",
      "slug": "summon-kaiju",
      "publicationTitle": "Pathfinder Secrets of Magic",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/summon-kaiju.webp"
    },
    "sourceHash": "sha256:3fa389de2b16d6ba335a555d528db218875d7ab6d5f690f93f14e17eebbf0a24",
    "translatableHash": "sha256:1171f8e467f6a4c8dc0031a0b7743ab0a3495a241926114f7725c1d43fd2150f",
    "data": {
      "schemaVersion": 1,
      "name": "Summon Kaiju",
      "rank": 10,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "incarnate",
        "manipulate"
      ],
      "traditions": [
        "primal"
      ],
      "description": "You briefly conjure a kaiju, a massive, rampaging monster with a unique name and legendary reputation. It rises from its secluded lair to annihilate your foes. The summoned kaiju occupies the space of a Gargantuan creature. When you Cast this Spell, choose one of the kaiju below to summon.\n• Agmazar the Star Titan Speed 100 feet, climb 50 feet; Arrive (necromancy, negative) Channel Void Each foe in a 100-foot emanation takes 16d8 void damage with a basic Fortitude save; Depart (transmutation) Gravitic Repulsion Each foe in a 50-foot emanation is pushed 100 feet away unless it succeeds at a Fortitude save.\n• Agyra, the Forever Storm Speed 80 feet, fly 200 feet; Arrive (electricity, evocation) Breath of a Thousand Storms Agyra shoots two 1,200-foot lines of electricity, one from each of her heads. The lines can't overlap. Each creature along one of the lines takes 6d12 electricity damage with a basic Reflex save. On a failure, the creature is also Slowed 1 for 1 round (or for 1 minute on a critical failure); Depart (evocation, sonic) Thunderous Blast Each creature within a 100-foot emanation takes 6d10 sonic damage with a basic Reflex save, and is also knocked Prone on a failed save.\n• Bezravnis, the Inferno Below Speed 100 feet, burrow 100 feet; Arrive (earth, evocation) Burrow from the Earth's Heart Bezravnis explodes from the ground where it was summoned, causing all creatures in a 50-foot emanation to take 8d12 bludgeoning damage with a basic Reflex save. This potentially collapses structures with the collapse effect of the Earthquake spell, except there is no chance of falling into a fissure; Depart Web Hurricane Bezravnis departs with a hurricane of webbing. All creatures within a 50-foot emanation must succeed at a Reflex save or take a –20-foot circumstance penalty to its Speeds until it Escapes (or is Immobilized until it escapes on a critical failure). The Escape DC is your spell DC.\n• Mogaru, the Final King Speed 100 feet, swim 100 feet; Arrive (auditory, enchantment, mental) Trance of the King's Melody Mogaru manifests with a burst of the song that summoned him, requiring all foes within 60 feet who can hear him to attempt a Will save, leaving them Stunned 3 on a failure; Depart (evocation, fire) Volcanic Breath Mogaru unleashes his scorching breath in a 120-foot cone. Each creature in the area takes 10d6 fire damage with a basic Reflex save. On a failure, it also takes 4d6 persistent fire damage.\n• Vorgozen, the Shapeless Feeder Speed 50 feet, climb 50 feet, swim 100 feet; Arrive (necromancy) Pollute Magic Vorgozen's foul presence pollutes magic around her. Each of your enemies within a 60-foot emanation that are under the effects of a spell must attempt a Fortitude save. On a failure, the creature is Sickened 2. Any of your enemies that Casts a Spell within 60 feet of Vorgozen must attempt a Fortitude save with the same effects unless it's already sickened; Depart (acid, evocation) Beam of Purest Vitriol Each creature in a 1,200-foot line takes 10d6 acid damage and 10d6 bludgeoning damage with a basic Fortitude save.\n• Yarthoon, the Moon Grub Speed 60 feet, burrow 100 feet, fly 100 feet, swim 100 feet; Arrive (cold, evocation) Algid Beam Barrage Yarthoon fires countless beams, targeting each of your enemies within 200 feet of it. The beams deal 10d6 cold damage with a basic Reflex save; Depart (cold, conjuration, water) Frostbite Mist Chilling mist surges out in a 100-foot burst centered on Yarthoon and remains for 1 minute. This mist has the effects of Mist, plus any creature within the area at the end of its turn take 5d6 cold damage with a basic Fortitude save.\n• Ebeshra, the Winged Razor Speed 75 feet, fly 100 feet; Arrive (conjuration, teleportation) Planar Draw Each foe in a 100-foot emanation is pulled 50 feet towards the center, unless it succeeds at a Fortitude save. Creatures that fail and reach the center take 10d6 bludgeoning damage; Depart (electricity, evocation) Storm Discharge Each foe in a 240-foot line takes 12d8 electricity damage with a basic Reflex save.",
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
    "contentId": "pf2e:spell:spells-srd:snowball",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "W6QlRwQLPoBSw6PZ",
      "slug": "snowball",
      "publicationTitle": "Pathfinder Lost Omens World Guide",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:23dcec7f2eb57d127feed6ad117c852fc25fae19b1c0c236610738455db2ac4a",
    "translatableHash": "sha256:0b836b929bd0b3c1405f30c16bd021f87dcb6304cc842fddf36228f622227b18",
    "data": {
      "schemaVersion": 1,
      "name": "Snowball",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "attack",
        "cold",
        "concentrate",
        "manipulate",
        "water"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You throw a magically propelled and chilled ball of dense snow. The target takes 2d4 cold damage and potentially other effects, depending on the result of your spell attack roll.\nCritical Success The target takes double damage and a –10-foot status penalty to its Speeds for 1 round.\nSuccess The target takes full damage and a –5-foot status penalty to its Speeds for 1 round.\nFailure No effect.\nHeightened 1 The damage increases by 2d4.",
      "castingTime": "2 actions",
      "range": "30 feet",
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
      "heightening": "Heightened 1 The damage increases by 2d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:iron-gut",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "IhwREVWG0OzzrbWA",
      "slug": "iron-gut",
      "publicationTitle": "Pathfinder Lost Omens Gods & Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:5ecd0d00e9986593a567eb0743e23bef5fcf078c24781fc02a87e85669f7d06a",
    "translatableHash": "sha256:4ee67f54e941a943202c2833e6356a2e2c9e3f944f102e400701a80ba710255d",
    "data": {
      "schemaVersion": 1,
      "name": "Iron Gut",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "Your mouth, esophagus, and stomach become incredibly elastic and tougher than metal. For the duration of the spell, you can reach down your throat to store or retrieve a single object of light or negligible Bulk in your stomach, as though your stomach were a backpack or other container. Storing and retrieving an item in this way requires an Interact action. The object must be small enough to reasonably fit within your stomach. It is very difficult for other creatures to notice that you are hiding an object in this way; passive observers can't possibly notice and you gain a +4 circumstance bonus to your Stealth checks to Conceal an Object unless the searcher specifically searches your mouth and stomach. If at the end of the spell's duration you still have an object stored in your stomach, it is violently expelled, dealing 1d6 damage to you.\nSpell Effect: Iron Gut\nHeightened (3rd) The duration increases to 8 hours.\nSpell Effect: Iron Gut (3rd Rank)",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (3rd) The duration increases to 8 hours.\nSpell Effect: Iron Gut (3rd Rank)"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:brand-the-impenitent",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Y8cSjhU33oUqccxJ",
      "slug": "brand-the-impenitent",
      "publicationTitle": "Pathfinder Lost Omens Gods & Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:dfe31daf5294b5a801353defc6f0185a8a64d0e7ba62b184e9d7f9ee9dc3b5cc",
    "translatableHash": "sha256:a0417e34484f5c9a7358de3e8a0a759d94c1b2e1d522332f3251d58c939a32ba",
    "data": {
      "schemaVersion": 1,
      "name": "Brand the Impenitent",
      "rank": 2,
      "rarity": "common",
      "traits": [
        "concentrate",
        "curse",
        "manipulate"
      ],
      "traditions": [
        "divine"
      ],
      "description": "You brand the target with an ethereal copy of your deity's religious symbol. This brand can't be hidden, but it is visible only to followers of your faith, who see it as clearly as a lit torch. Followers of your faith ignore the target's Concealed condition, if any, and the target gains a -1 status penalty to AC against attacks by followers of your faith. If the target is a follower of your deity in good standing, the spell fails.\nCritical Success The target is unaffected.\nSuccess The spell lasts for 1 round.\nFailure The spell lasts for 1 minute.\nCritical Failure The spell has an unlimited duration.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 creature",
      "area": null,
      "duration": "varies",
      "defense": "fortitude save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:rebounding-barrier",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "5p8naLYjFcG13OkU",
      "slug": "rebounding-barrier",
      "publicationTitle": "Pathfinder Lost Omens Legends",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/rebounding-barrier.webp"
    },
    "sourceHash": "sha256:c1c59678721af9fa8653ef5ebc0db577f4d586af023bf476edb94ac03bd70577",
    "translatableHash": "sha256:55b63b63ea142ff993572b0b4121f9389f79e87fe593b48ba12b11e8a996ece0",
    "data": {
      "schemaVersion": 1,
      "name": "Rebounding Barrier",
      "rank": 4,
      "rarity": "rare",
      "traits": [
        "concentrate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "Trigger You are hit by a physical Strike.\nYou swiftly raise a reflective barrier, reducing physical damage and rebounding it onto your attacker. You gain resistance 10 against one physical damage type the triggering attack deals. Your attacker takes 5 damage of the same type.\nHeightened 1 The resistance increases by 2. Damage dealt to your attacker increases by 1.",
      "castingTime": "reaction",
      "range": "",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 The resistance increases by 2. Damage dealt to your attacker increases by 1."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:aromatic-lure",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "LX4pCagYLpc9hEji",
      "slug": "aromatic-lure",
      "publicationTitle": "Pathfinder Lost Omens Legends",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:1ed42b08a3b8294bcffcb3208881a62fc4ab6fcdd6cb238b7e44bff8762d2ff7",
    "translatableHash": "sha256:ffe20132cf48775ad86bd68b4e2c010c04fc11cc2b4fb611b26dc76c603b55e0",
    "data": {
      "schemaVersion": 1,
      "name": "Aromatic Lure",
      "rank": 4,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "emotion",
        "incapacitation",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You override a target's olfactory senses, luring them to a specific location through tantalizing false scents. Select a single square within range that is not hazardous or occupied by a creature. The target is drawn to the selected location, becoming euphoric upon arrival. The target must attempt a Will save.\nCritical Success The target is unaffected.\nSuccess The target is distracted by the tantalizing scents, becoming Stupefied 1 for 1 round.\nFailure The target is Stupefied 2 and moves toward the selected location via the most direct route possible for 1 round, bypassing any obvious hazards and enemies in the way.\nCritical Failure The target is Stupefied 4 and moves to the selected location via the most direct route possible for 1 round, bypassing any obvious hazards and enemies in the way. If the creature reaches the destination, it must remain in that location for 1d4 but can otherwise act normally.\nHeightened 2 You target 1 additional creature, selecting a different square within range as their destination.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "1 creature",
      "area": null,
      "duration": "Varies",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened 2 You target 1 additional creature, selecting a different square within range as their destination."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:halcyon-infusion",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "UJmKPm1FC6pf6txP",
      "slug": "halcyon-infusion",
      "publicationTitle": "Pathfinder Lost Omens Legends",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/halcyon-infusion.webp"
    },
    "sourceHash": "sha256:560ad3d1d76455b7b7b255f706bc1ea59fe845b86154d1518a30101a9ad52f75",
    "translatableHash": "sha256:4fa05515a42a6fdc2b9929d42f9556dd9ccd7fd1562b20ff46c20a2336936693",
    "data": {
      "schemaVersion": 1,
      "name": "Halcyon Infusion",
      "rank": 6,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You infuse magical energy into your target, opening up their mind to the pathways of magic and granting them the ability to use magic to affect the world around them.\nChoose a 1st-rank spell you prepared today or that's in your repertoire, of the same tradition you used to cast halcyon infusion. The spell must be one that has a listed range. If the target is at least 3rd level, you can choose a 2nd-rank spell instead of a 1st-rank spell; and if the target is at least 5th level, you can choose a 3rd-rank spell. The target can Cast the Spell once per day as an innate spell of the tradition you used to cast halcyon infusion. If they are untrained in the appropriate magical tradition, their spell attack bonus is 2 + their level + their highest mental ability modifier, and their spell DC is 12 + their level + their highest mental ability modifier.\nUnlike most abilities that can only be used once per day, the target refreshes their use of the granted innate spell each day only after you make your daily preparations and choose to extend halcyon infusion's duration by either refraining from preparing a spell in the slot (if you're a prepared spellcaster) or expending another spell slot (if you're a spontaneous spellcaster).\nHeightened (8th) If the target is at least 7th level, you can choose a 4th-rank spell.\nHeightened (10th) As 8th, and if the target is at least 9th level, you can choose a 5th-rank spell.",
      "castingTime": "10 minutes",
      "range": "touch",
      "target": "one willing creature of lower level than you",
      "area": null,
      "duration": "until your next daily preparations",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (8th) If the target is at least 7th level, you can choose a 4th-rank spell.\nHeightened (10th) As 8th, and if the target is at least 9th level, you can choose a 5th-rank spell."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:all-is-one-one-is-all",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "gtWxTfMbIN5RHQw6",
      "slug": "all-is-one-one-is-all",
      "publicationTitle": "Pathfinder Lost Omens Legends",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/all-is-one-one-is-all.webp"
    },
    "sourceHash": "sha256:9f7738c4f44b4a02211b65b67dd92377d5e1f790c7e475e6b67cb5f2eaf54f73",
    "translatableHash": "sha256:31a6a51e0ad97e2d11437770b0dabe56fc64c4259da52be0907096ff7d0b62a3",
    "data": {
      "schemaVersion": 1,
      "name": "All is One, One is All",
      "rank": 8,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You meld the targets' matter and life force into one and then, in an instant, sift them back out into their component selves. When you separate the targets back into themselves, you can choose to switch the positions of any number of targets with the positions of other targets. Additionally, you can modulate the share of vital essence to share the burden of pain. Distribute the Hit Points of all targets however you choose, except that no target can receive fewer than 1 Hit Point or more than their maximum Hit Points.",
      "castingTime": "3 actions",
      "range": "60 feet",
      "target": "You and up to 10 willing living allies",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:perseiss-precautions",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ovx7O2FHvkjXhMcA",
      "slug": "perseiss-precautions",
      "publicationTitle": "Pathfinder Lost Omens Pathfinder Society Guide",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/perseiss-precautions.webp"
    },
    "sourceHash": "sha256:d374c10210a85bdf9bfa320d898aa6b5e3de874a404f0410d9551b13bf3666ec",
    "translatableHash": "sha256:66b3ed420e302e094291beb775a7e11af3c5475a1f37aa4fbc1aec37ae57d08d",
    "data": {
      "schemaVersion": 1,
      "name": "Perseis's Precautions",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "fortune",
        "manipulate",
        "prediction"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "Leaving nothing to chance, you weave divinatory precautions against an ambush, alerting the target to danger. Once during the duration of this spell, the target can roll one Perception, Arcana, Crafting, Lore, Occultism, or Society initiative roll twice and take the better result, after which the spell ends.\nThe strain of staying so prepared is too much for a mind to handle for long; the target is temporarily immune to this spell for 24 hours once the spell ends, whether they used the initiative benefit or not.",
      "castingTime": "3 actions",
      "range": "touch",
      "target": "",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:purifying-icicle",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "9Ga1AOQdHKYXUY4O",
      "slug": "purifying-icicle",
      "publicationTitle": "Pathfinder Lost Omens Knights of Lastwall",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/purifying-icicle.webp"
    },
    "sourceHash": "sha256:328a68ef8d94cf69c297709c4ba372a0ed0956951bcf33506a5cc3d9cdb94b92",
    "translatableHash": "sha256:7f58de4a109ee85f9319de7d9d5f9fc9b521dab6e9624452933a145d5a78fa72",
    "data": {
      "schemaVersion": 1,
      "name": "Purifying Icicle",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "attack",
        "cold",
        "concentrate",
        "manipulate",
        "vitality"
      ],
      "traditions": [
        "divine",
        "primal"
      ],
      "description": "You evoke life essence into the form of water and freeze it, then launch the icicle at a foe. Make a spell attack roll. On a success, the icicle deals 2d6 piercing damage and 1d6 cold damage, and if the target is undead, the icicle deals an additional 1d4 vitality damage. On a critical success, the target takes double damage and takes a –10-foot circumstance penalty to its Speeds for 1 round as the icicle lodges inside them before melting away.\nHeightened 1 The piercing damage and cold damage each increase by 1d6. The vitality damage increases by 1d4.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [
        {
          "formula": "2d6",
          "type": "piercing",
          "kind": "damage"
        },
        {
          "formula": "1d6",
          "type": "cold",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The piercing damage and cold damage each increase by 1d6. The vitality damage increases by 1d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:synchronize-steps",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "EeEgzWYcAY7ZQkS6",
      "slug": "synchronize-steps",
      "publicationTitle": "Pathfinder Lost Omens Knights of Lastwall",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/synchronise-steps.webp"
    },
    "sourceHash": "sha256:67f5d6b4421efd3ea239aae41cfa7f50ee76ea2889b4023b28bfb100762f62ae",
    "translatableHash": "sha256:fce6c8fe9647e9c78c8fd0b4624c5d44625bf3cdbf3e73e0e07351f3c170699c",
    "data": {
      "schemaVersion": 1,
      "name": "Synchronize Steps",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You link the minds of two targets, enabling them to move in tandem. When one of the targets Steps, the other target can use a reaction to Step. When one of the targets Strides, the other target can use a reaction to Stride.\nHeightened (5th) The range increases to 60 feet, and you can target up to 10 willing creatures.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "2 willing creatures",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (5th) The range increases to 60 feet, and you can target up to 10 willing creatures."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:buffeting-winds",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "xGFAGlonNySXrunq",
      "slug": "buffeting-winds",
      "publicationTitle": "Pathfinder Lost Omens Knights of Lastwall",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/buffeting-winds.webp"
    },
    "sourceHash": "sha256:e93c9cc962759b1b3c1f3f7eb3000710c42ae15566cbf076feb7a967a85d9c58",
    "translatableHash": "sha256:36da8e14a66f8673c2c432e3e05f9eafe85cfa823c4a166bb749999e4bea4c51",
    "data": {
      "schemaVersion": 1,
      "name": "Buffeting Winds",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "air",
        "concentrate",
        "manipulate",
        "nonlethal"
      ],
      "traditions": [
        "primal"
      ],
      "description": "You release a quick burst of wind that batters your living opponents without causing them lasting harm, while also blowing undead away. The wind deals 2d4 bludgeoning damage, which is nonlethal against living creatures. Against undead, the winds are more vicious, and the spell loses the nonlethal trait against such creatures. Each creature in the area must attempt a basic Reflex save. On a failure, undead creatures are also knocked back 5 feet (or 10 feet on a critical failure).\nHeightened 1 The damage increases by 2d4.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "15 cone",
      "duration": "",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "2d4",
          "type": "bludgeoning",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 2d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:empathic-link",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "obVA6duK5fGbfFUY",
      "slug": "empathic-link",
      "publicationTitle": "Pathfinder Lost Omens Knights of Lastwall",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:d076db4d3a789e2ef821ce608eb9bc000b4b831f9bc6e517546c30958b77f7c8",
    "translatableHash": "sha256:bb61069d11014a3f50c93b40265363c01563e65efe87663f8911e0d65cc324ef",
    "data": {
      "schemaVersion": 1,
      "name": "Empathic Link",
      "rank": 2,
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
      "description": "You forge a bond between yourself and the target, enabling you to feel each other's emotions. You and the target can communicate empathetically, sharing emotions, at a distance of up to 1 mile.\nHeightened (4th) You can target up to 4 willing creatures, and the duration increases to 8 hours.",
      "castingTime": "1 minute",
      "range": "touch",
      "target": "1 willing creature",
      "area": null,
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) You can target up to 4 willing creatures, and the duration increases to 8 hours."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:erase-trail",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Tw9e2rPaNdxcM1Rp",
      "slug": "erase-trail",
      "publicationTitle": "Pathfinder Lost Omens Knights of Lastwall",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/erase-trail.webp"
    },
    "sourceHash": "sha256:27108a84c26642044a699000f3b5bc8084e28ae672da27386434541f7b068125",
    "translatableHash": "sha256:6dc54fa65bcedbb2d11fd679aeda952cc615b7b33aa12944a31769e8404ef26e",
    "data": {
      "schemaVersion": 1,
      "name": "Erase Trail",
      "rank": 2,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "primal"
      ],
      "description": "You drastically reduce all signs of one specific creature's passage from the area, including footprints, handprints, dirt, and minor changes caused to the surrounding environment, like the bending of grass. The DC of checks to Seek or Search and discover such signs within the area gains a +4 status bonus or is equal to your spell DC, whichever is higher. This spell doesn't repair objects the creature damaged, return slain creatures to life, or remove objects or garbage left behind. It also doesn't prevent others from noticing that the creature's trail ends or begins abruptly outside the area. Finally, this spell doesn't hide the creature from sight or prevent them from leaving new signs of their presence after this spell is cast.\nHeightened 2 The range increases by 100 feet, the area increases by 20 feet, and you can remove all signs of 1 additional creature's passage from the area.",
      "castingTime": "2 actions",
      "range": "100 feet",
      "target": "",
      "area": "40 burst",
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 2 The range increases by 100 feet, the area increases by 20 feet, and you can remove all signs of 1 additional creature's passage from the area."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:consecrate-flesh",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "DgNOpb8H9MTAu9KL",
      "slug": "consecrate-flesh",
      "publicationTitle": "Pathfinder Lost Omens Knights of Lastwall",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/consecrate-flesh.webp"
    },
    "sourceHash": "sha256:2216044685a063380777f932daf868410dbe7487fc492ce58a1b460c4ecc6eb0",
    "translatableHash": "sha256:d2280ac90aaf34dc49dd816114a0cfb5990e4b4cd5157b601541b5544e29991b",
    "data": {
      "schemaVersion": 1,
      "name": "Consecrate Flesh",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "good",
        "manipulate"
      ],
      "traditions": [
        "divine"
      ],
      "description": "Through the strength of your faith, your body becomes infused with holy energy. You have weakness 5 to unholy. Any creature that touches or damages you with an unarmed attack or non-reach melee weapon takes 1d6 spirit damage. Your unarmed attacks deal an additional 1 spirit damage. Your healing spells that restore Hit Points restore an additional 1d4 Hit Points when you initially cast them; as normal, if your healing spell restores Hit Points more than once, grants fast healing, or the like, the additional Hit Points still only apply once.\nHeightened 3 Creatures touching you take 1d6 additional spirit damage, your unarmed Strikes deal 1 additional spirit damage, your healing spells restore 1d4 more additional Hit Points, and your weakness to unholy increases by 5.",
      "castingTime": "2 actions",
      "range": "",
      "target": "self",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 3 Creatures touching you take 1d6 additional spirit damage, your unarmed Strikes deal 1 additional spirit damage, your healing spells restore 1d4 more additional Hit Points, and your weakness to unholy increases by 5."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:martyrs-intervention",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "M9TiCE1vlG1j2faM",
      "slug": "martyrs-intervention",
      "publicationTitle": "Pathfinder Lost Omens Knights of Lastwall",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/martyrs-intervention.webp"
    },
    "sourceHash": "sha256:d73653031e986ca902117daf700b85039f4c69b458cb2a32533bbe583aa49b30",
    "translatableHash": "sha256:567938e1e8d1218216a9e77e731dc9640b4bf1069c1a6f8a748734416b5b2226",
    "data": {
      "schemaVersion": 1,
      "name": "Martyr's Intervention",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "healing"
      ],
      "traditions": [
        "divine",
        "occult",
        "primal"
      ],
      "description": "Trigger A creature within range would take damage that reduces it to 0 Hit Points\nRequirements You don't have the wounded condition.\nYou shield a creature in dire need with your own life force, taking the harm upon yourself to save their life. The target is reduced to 1 Hit Point instead of 0 Hit Points. All remaining damage that was prevented from harming the target creature is instead dealt to you. Both you and the target become Wounded 1; targets who are already wounded increased their wounded value by 1.",
      "castingTime": "reaction",
      "range": "60 feet",
      "target": "1 living creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:sign-of-conviction",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "SxRVCc1Q2MtVuPMo",
      "slug": "sign-of-conviction",
      "publicationTitle": "Pathfinder Lost Omens Knights of Lastwall",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:77ee96c4c1db1e40a8c27e9aaf24aab53083343da010a323b2b1f70dfaa60fee",
    "translatableHash": "sha256:f896c34002f9d7af28419ad9781fe4fcf31f3f3f10a1a4dab94205129957d79d",
    "data": {
      "schemaVersion": 1,
      "name": "Sign of Conviction",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "divine"
      ],
      "description": "You conjure the religious symbol of your deity into the air above you in the same space you stand in, wielding the power of your faith to smite your foes. This religious symbol is immobile, made of pure magical force, and can't be damaged. As long as you Sustain sign of conviction, you gain a +1 status bonus to AC and saving throws and are Immobilized. The DC for any effect to force you to move out of your space (such as the Shove action) is equal to your spell DC or the normal DC, whichever is higher. If you stop being immobilized or are moved out of your space, sign of conviction immediately ends.\nWhen you Cast the Spell and each time you Sustain the Spell, the religious symbol emits a blast of energy at a target within 100 feet. Make a spell attack roll that deals 2d10 damage on a success (see below for determining damage type) and double damage on a critical success. You can Sustain the Spell multiple times in the same round to emit an array of blasts.\nIf you worship a good deity, the spell gains the good and light traits, deals your choice of either fire or spirit damage, and emits bright light in a 20-foot burst. If you worship an evil deity, the spell gains the evil and darkness traits, deals your choice of cold or spirit damage, and reduces the light level in a 20-foot burst to dim light if it would be brighter. If you worship a neutral deity, the spell gains the force trait and deals force damage.\nHeightened 2 The damage increases by 1d10.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [
        {
          "formula": "2d10",
          "type": "fire",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The damage increases by 1d10."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:life-pact",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "vvbS69EHZuUTq0dr",
      "slug": "life-pact",
      "publicationTitle": "Pathfinder Lost Omens Knights of Lastwall",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/life-pact.webp"
    },
    "sourceHash": "sha256:1f3c11994d927c8369e72cd5e90f16e4575320986def1f835e97a01652f090d3",
    "translatableHash": "sha256:a77026440fc1ed6b06f4f969c758e6b2877cc684cbdf173bf012e28df180f670",
    "data": {
      "schemaVersion": 1,
      "name": "Life Pact",
      "rank": 3,
      "rarity": "uncommon",
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
      "description": "Using your life force or spirit as a conduit, you bind the targets in a mystical pact. If one of the targets is about to take damage that would reduce it to 0 Hit Points, all other targets immediately lose 3 Hit Points and the triggering target regains a number of Hit Points equal to the Hit Points lost this way, just before taking the damage. If this healing is enough that the triggering target is no longer reduced to 0 Hit Points, they remain conscious. Once the triggering target has regained Hit Points from the other targets, the spell ends.\nHeightened 1 Increase the number of Hit Points lost by 1 for each target other than the one reduced to 0 Hit Points. The target reduced to 0 Hit Points regains that many additional Hit Points.",
      "castingTime": "1 minute",
      "range": "touch",
      "target": "up to 6 willing creatures",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 Increase the number of Hit Points lost by 1 for each target other than the one reduced to 0 Hit Points. The target reduced to 0 Hit Points regains that many additional Hit Points."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:wall-of-virtue",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ZJOQBqkNErZu1QAa",
      "slug": "wall-of-virtue",
      "publicationTitle": "Pathfinder Lost Omens Knights of Lastwall",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/wall-of-virtue.webp"
    },
    "sourceHash": "sha256:6f8ca5c97b6a69753747be96fb74e93c4756c1ee7f2947c064622b62a2b385c2",
    "translatableHash": "sha256:34fea589fb6992b58198a84a9df8d7a91e2e4ed8e35364aca4c23fb117f6abb5",
    "data": {
      "schemaVersion": 1,
      "name": "Wall of Virtue",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "holy",
        "light",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "divine"
      ],
      "description": "You create a translucent wall of light, which draws power from the celestial realms. You create either a 5-foot-thick wall in a straight line up to 60 feet long and 10 feet high or a 5-foot-thick, 10-foot-radius ring with the same height. The wall sheds bright light for 20 feet on each side and dim light for the next 20 feet.\nIf the light passes through an area of magical darkness or targets a creature affected by magical darkness, wall of virtue attempts to counteract the darkness.\nAny creature that crosses the wall or is occupying the wall's area at the start of its turn takes 1d8 spirit damage and 1d8 vitality damage.\nHeightened 2 The spirit damage increases by 1d8, and the vitality damage increases by 1d8.",
      "castingTime": "3 actions",
      "range": "120 feet",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [
        {
          "formula": "1d8",
          "type": "vitality",
          "kind": "damage"
        },
        {
          "formula": "1d8",
          "type": "spirit",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The spirit damage increases by 1d8, and the vitality damage increases by 1d8."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:radiant-beam",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "5LGDygjRxURUOKGR",
      "slug": "radiant-beam",
      "publicationTitle": "Pathfinder Lost Omens Knights of Lastwall",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/radiant-beam.webp"
    },
    "sourceHash": "sha256:4f9ccddf0262446d21336662e98977bb3fd2e65fa86bb25f339ad2451061723e",
    "translatableHash": "sha256:60fddf9415626de04a03a93d612700a5ce6d12b3775c4290ef0fdd5c68bee6f7",
    "data": {
      "schemaVersion": 1,
      "name": "Radiant Beam",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "good",
        "holy",
        "light",
        "manipulate"
      ],
      "traditions": [
        "divine",
        "primal"
      ],
      "description": "You fire a beam of blinding light from your outstretched hands. The beam deals 5d10 spirit damage. On a failed saving throw, a creature becomes Dazzled for 1 round, or dazzled for 4 rounds on a critical failure.\nIf the light passes through an area of magical darkness or targets a creature affected by magical darkness, radiant beam attempts to counteract the darkness. If you need to determine whether the light passes through an area of darkness, draw a line between yourself and the target.\nHeightened 1 The damage increases by 1d10.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "120 line",
      "duration": "",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "5d10",
          "type": "spirit",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 1d10."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:enhance-senses",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "a5uwCgOe7ayHPtHe",
      "slug": "enhance-senses",
      "publicationTitle": "Pathfinder Lost Omens Knights of Lastwall",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/enhance-senses.webp"
    },
    "sourceHash": "sha256:2d5649236857e36b8cc64c6d60c17e02772e2bae385ea81f9eb11e2f8175664d",
    "translatableHash": "sha256:e38acd5af4be5fceaf97d856e13c600c99b32c739be8999aff289d169537617e",
    "data": {
      "schemaVersion": 1,
      "name": "Enhance Senses",
      "rank": 4,
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
      "description": "You enhance the target's senses. The target gains low-light vision, and all of the target's imprecise senses have their distances doubled. If the target already has low-light vision, they gain darkvision.\nHeightened 2 The number of targets increases by 1.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 willing creature",
      "area": null,
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 2 The number of targets increases by 1."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:detect-creator",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "kREpsv78anJpIiq2",
      "slug": "detect-creator",
      "publicationTitle": "Pathfinder Lost Omens Knights of Lastwall",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/detect-creator.webp"
    },
    "sourceHash": "sha256:1e38e079de7f393d22ef6e269428788245a58194c5ec346cd3d919d124d6763b",
    "translatableHash": "sha256:1a940991708ed07561720371d12d926d37d8c363f49df8ed991a96dd976cacf7",
    "data": {
      "schemaVersion": 1,
      "name": "Detect Creator",
      "rank": 4,
      "rarity": "rare",
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
      "description": "You examine the remains or spiritual residue of a destroyed undead creature to locate that undead's creator, perhaps a necromancer or vampire. If the creator is within range, you can sense the direction to them. If the creator is within 100 feet, you sense their presence within 100 feet, and the spell ends; you can't further home in on their location. If there's lead or running water between you and the undead's creator, this spell can't locate them. This spell fails automatically if the undead doesn't have a specific creator or the specific creator isn't on the same plane.",
      "castingTime": "10 minutes",
      "range": "1 mile",
      "target": "1 destroyed undead",
      "area": null,
      "duration": "sustained",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:scouring-pulse",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "9bOqFkewRz7Z3HZ5",
      "slug": "scouring-pulse",
      "publicationTitle": "Pathfinder Lost Omens Knights of Lastwall",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/scouring-pulse.webp"
    },
    "sourceHash": "sha256:b6ed1eec36f5fc8a5cbbe0e339688f469612a501acd9925a549a17121b826fbb",
    "translatableHash": "sha256:ea8785cb4809c73e7630e21e815d68f0217444a57bc30c4c38ea9531b2175479",
    "data": {
      "schemaVersion": 1,
      "name": "Scouring Pulse",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "light",
        "manipulate",
        "vitality"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult"
      ],
      "description": "Area 10-foot radius, 60-foot-tall cylinder\nYou inundate the area with concentrated vitality energy, which scours away the stain of undeath. Each creature in the area takes 6d8 vitality damage and must attempt a basic Reflex save. Creatures that fail the save also take (ternary(gte(5,5),1,2))d8[persistent,vitality] damage. Creatures that take persistent vitality damage from scouring pulse are wreathed in a heatless halo of light. They emit bright light in a 5-foot radius preventing them from being Concealed; if the creature is Invisible, they're concealed while affected by scouring pulse, rather than being undetected.\nHeightened (8th) The vitality damage increases to 9d8 damage, and the persistent vitality damage increases to 2d8 persistent vitality damage. Creatures remain suffused in light for 1d4 after removing the persistent vitality damage.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "",
      "area": "10 cylinder",
      "duration": "",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "6d8",
          "type": "vitality",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (8th) The vitality damage increases to 9d8 damage, and the persistent vitality damage increases to 2d8 persistent vitality damage. Creatures remain suffused in light for 1d4 after removing the persistent vitality damage."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:lure-dream",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "fRUxp4G9kG816XAt",
      "slug": "lure-dream",
      "publicationTitle": "Pathfinder Lost Omens Monsters of Myth",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/shadow-jump.webp"
    },
    "sourceHash": "sha256:db5a3711952f0be03ebd7898c3259f71c9a1b14c81fcc240203a36242ff6dfc0",
    "translatableHash": "sha256:0ed0e4228e604003c3655ddc942fe7b154b79200517a6c0ad746e87c11bff9a0",
    "data": {
      "schemaVersion": 1,
      "name": "Lure Dream",
      "rank": 6,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "dream",
        "manipulate"
      ],
      "traditions": [
        "occult"
      ],
      "description": "You reach out to the dream realm, beckoning an animate dream to your side. This works like Summon Animal, except you summon an Animate Dream.",
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
    "contentId": "pf2e:spell:spells-srd:hypnopompic-terrors",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "TvZiwZRianfTSbEg",
      "slug": "hypnopompic-terrors",
      "publicationTitle": "Pathfinder Lost Omens Monsters of Myth",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:73980ff25c8f65467dd71886044b15b9019cb7fdfb6be1a7f930f7f2e33d05fc",
    "translatableHash": "sha256:a77393a785d4e2e18c6f7405913c8f0bc6de186dc9545db2a7b8a53382f08dec",
    "data": {
      "schemaVersion": 1,
      "name": "Hypnopompic Terrors",
      "rank": 8,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "emotion",
        "fear",
        "illusion",
        "incapacitation",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "occult"
      ],
      "description": "You send a wave of nightmarish visions crashing over your targets, leaving them paralyzed by fear. These visions inflict real wounds on vulnerable targets, dealing 6d12 mental damage. If you target a sleeping creature, it wakes up as it attempts the save but takes one degree of success worse than the result it rolled on its save.\nCritical Success The target is unaffected.\nSuccess The target is Frightened 2 and takes half the mental damage.\nFailure The target is frightened 2, is Paralyzed for 1 round, and takes the full mental damage.\nCritical Failure The target is frightened 2, is paralyzed for 2 rounds, and takes double the mental damage.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "up to 10 creatures",
      "area": null,
      "duration": "",
      "defense": "will save",
      "damage": [
        {
          "formula": "6d12",
          "type": "mental",
          "kind": "damage"
        }
      ],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:summon-healing-servitor",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "3r897dYO8oYvuyn5",
      "slug": "summon-healing-servitor",
      "publicationTitle": "Pathfinder Lost Omens Impossible Lands",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/summon-healing-servitor.webp"
    },
    "sourceHash": "sha256:31ef462870754bf4c833cec5b0b49e2e29a234bdfcc0841982072c4c591e3b14",
    "translatableHash": "sha256:c18ab082c19dfafdbd855c9dc6372473b10ff154fa6771b6d48290aa74a52f1d",
    "data": {
      "schemaVersion": 1,
      "name": "Summon Healing Servitor",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "healing",
        "incarnate",
        "manipulate",
        "vitality"
      ],
      "traditions": [
        "divine",
        "primal"
      ],
      "description": "You call forth a servitor forged from raw vitality energy to heal and bolster your allies. The servitor occupies the space of a Huge creature and has a speed of 60 feet.\nArrive (healing, necromancy, vitality) Servitor's Protection The servitor appears in a flash of light, moving from ally to ally and granting them a temporary reprieve. All allies within 20 feet of the Servitor gain 20 temporary Hit Points until the servitor departs.\nSpell Effect: Summon Healing Servitor\nDepart (healing, necromancy, vitality) Servitor's Blessing The servitor disappears in a 30-foot emanation of vitality energy. All willing living creatures within heal 3d8 Hit Points. All undead within take that much damage, with a basic Fortitude save.\nHeightened 2 The Arrive effect's temporary Hit Points increase by 8, and the Depart effect's healing and damage to undead increase by 1d8.",
      "castingTime": "3 actions",
      "range": "100 feet",
      "target": "",
      "area": null,
      "duration": "until the end of your next turn",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "3d8",
          "type": "vitality",
          "kind": "damage-or-healing"
        }
      ],
      "heightening": "Heightened 2 The Arrive effect's temporary Hit Points increase by 8, and the Depart effect's healing and damage to undead increase by 1d8."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:summon-ancient-fleshforged",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "tgJTm276cikEL8vU",
      "slug": "summon-ancient-fleshforged",
      "publicationTitle": "Pathfinder Lost Omens Impossible Lands",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/summon-ancient-fleshforged.webp"
    },
    "sourceHash": "sha256:8dcfba1ad6021463a7fd5e8b201a97947747ecc53da0dcbc7e9da3df900b70b7",
    "translatableHash": "sha256:86aa5da8d4c293770a813ed43c1ca5edc3600490d8035d35fb1b8b7ce27e3303",
    "data": {
      "schemaVersion": 1,
      "name": "Summon Ancient Fleshforged",
      "rank": 9,
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
      "description": "You summon an ancient Fleshforged, one of Nex's personal weaponized monstrosities unleashed in the first wars against Geb. It squeezes itself into its war form from time long forgotten, unleashing its wrath upon your foes. The Fleshforged occupies the space noted in the spell description. When you Cast this Spell, choose one of the Fleshforged below to summon.\n• Bone Breaker Size Gargantuan, Speed 40 feet, climb 100 feet\nArrive Skull Breaking Hum (evocation, sonic) The Bone Breaker appears in a shower of bone fragments. Its form is that of an immense titan of flesh and metal with long, muscular, twisted arms. The Bone Breaker releases a hum at a harmonic frequency that weakens bones in creatures' bodies. Each foe within an 80-foot emanation must attempt a Fortitude save. On a critical success, they're unaffected; on a success, they're Enfeebled 2 for 1 round; on a failure they're Enfeebled 3 for 1 minute; and on a critical failure, they're Enfeebled 4 for 10 minutes. A skeleton or other undead foe made almost entirely of bones treats their result as one degree of success worse than they rolled.\nDepart Bruising Departure The Bone Breaker pounds its long arms into the ground, creating a long shockwave. Each foe within a 100-foot line takes 8d12 bludgeoning damage, with a basic Fortitude save.\n• Thorn Caller Size Gargantuan, Speed 100 feet\nArrive (evocation, light) Thorn's Guidance The Thorn Caller appears in a burst of light. The Thorn Caller's body is an ornate armored sphere with black panther masks surrounding a glowing light. The ball floats in the air due to six glowing, thornlike wings. Two clusters of bird heads emerge from both sides of the body with long necks that twirl together like tentacles. The Thorn Caller's burst of light illuminates all foes within 200 feet. The foes become Dazzled and off-guard, and if they were Invisible, they become Concealed instead. These effects last until the Thorn Caller departs.\nDepart Thorn-Burst The Thorn Caller launches its thorned wings at various targets. Attempt spell attack rolls against up to 6 different targets within 300 feet. On a hit, the target takes 10d8 piercing damage, double on a critical hit, half on a failure, and none on a critical failure.\n• The Thousand Size Medium (see below), Speed 30 feet\nArrive (emotion, enchantment, fear, mental) Disconcerting Arrival Select five spaces in range and summon a Medium-sized polyp of The Thousand in each of these spaces. The Thousand is an entity whose full scope is 1,000 polyps of oozing flesh, each physically separate but mentally part of a single creature. Not all 1,000 polyps have survived, and the spell summons five of them. Each creature within 10 feet of any of the polyps must attempt a Will Save. On a critical success, they're unaffected; on a success, they're Frightened 1; on a failure, they're Frightened 3; and on a critical failure, they're Frightened 4 and Fleeing for 1 round\nDepart (illusion, mental) Violent Omen Each frightened foe within a 60-foot emanation of any of the five polyps takes 10d8 mental damage, with a basic Will save.\n• Scion of Desiccation Size Gargantuan, Speed 100 feet, fly 100 feet\nArrive (necromancy, negative) Ashes to Ashes The Scion of Desiccation appears in a swirl of screaming wind, a gargantuan form of twisted flesh that's constantly flensed by gritty ash and dust, and just as constantly regenerating itself. Each foe within a 40-foot emanation takes 10d10 void energy damage, with a basic Fortitude save\nDepart (necromancy, negative) Dust to Dust Each foe within a 60-foot emanation must attempt a Fortitude save; they're Drained 2 on a failure or Drained 4 on a critical failure.",
      "castingTime": "3 actions",
      "range": "250 feet",
      "target": "",
      "area": null,
      "duration": "until the end of your next turn",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:helpful-steps",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "3SJEBgXHolrSAFqD",
      "slug": "helpful-steps",
      "publicationTitle": "Pathfinder Lost Omens Firebrands",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/helpful-steps.webp"
    },
    "sourceHash": "sha256:da8d257e87f6504c0682217f74ebfe27e263854936a71b23d454f7a7f4010716",
    "translatableHash": "sha256:ce38639c7f5f0412611ef0c8e84aa3d40d44dd2cd1575c84a6958a3a6b81e35a",
    "data": {
      "schemaVersion": 1,
      "name": "Helpful Steps",
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
      "description": "You call forth a ladder or staircase to help you reach greater heights. The ladder or staircase appears in a space you designate and either stands freely or connects to a nearby wall if possible. You decide the height of the ladder or staircase when casting the spell, up to a maximum height of 40 feet. The ladder or staircase is locked in place and magically supported, allowing you to ascend even if it's in an open area. The conjured ladder is simple in design and made of wood. The staircase is a spiral staircase made of wood. While both are supported and have no risk of falling, they can be damaged and destroyed as normal. The staircase is typically easier to ascend, though it's less discreet than a ladder and could possibly draw more attention. You can Dismiss the spell.\nHeightened 1 The maximum height increases by 40 feet.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 The maximum height increases by 40 feet."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:musical-accompaniment",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "mnhuvqTIELcpJOFX",
      "slug": "musical-accompaniment",
      "publicationTitle": "Pathfinder Lost Omens Firebrands",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/musical-accompaniment.webp"
    },
    "sourceHash": "sha256:ac8068a489bf00be0a1984279f269a0ef6405ab3e2af1b946f67733ad0b86614",
    "translatableHash": "sha256:123aca1c89fee4d6f3b29f817f12b0a35e4c8aa8b50f2e50dbeddfe7f3f0a8d9",
    "data": {
      "schemaVersion": 1,
      "name": "Musical Accompaniment",
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
      "description": "You're surrounded by orchestral music that shifts and changes to match your behavior. This music provides a +1 status bonus to Performance checks. At the GM's discretion, it provides this bonus to Deception, Diplomacy, and Intimidation checks as the music changes to support you in social situations, though some creatures are unaffected by such obvious attempts to use music to illicit specific emotions. This music moves with you and has a maximum volume equal to four humans shouting. You take a -4 penalty to Stealth checks while the music is playing. You can't control the exact music this spell creates. The music doesn't create intelligible words or singing. You can Dismiss this spell.\nSpell Effect: Musical Accompaniment\nHeightened (2nd) The duration increases to 10 minutes.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (2nd) The duration increases to 10 minutes."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:overselling-flourish",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ro0omoBKiJiMuDRa",
      "slug": "overselling-flourish",
      "publicationTitle": "Pathfinder Lost Omens Firebrands",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/overselling-flourish.webp"
    },
    "sourceHash": "sha256:cc9d85a35364f4d6c2ec4800200d0b9817304bb13e58d7b37c1807c6a06b542c",
    "translatableHash": "sha256:37d106ba8d7e189d9e9f459579b106e15e153e1a6e71f7b0e20870c7129b9ac5",
    "data": {
      "schemaVersion": 1,
      "name": "Overselling Flourish",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "illusion",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "Trigger A creature damages you.\nYou make a grand spectacle out of getting hit. Enhanced by magic, this spectacle features sprays of blood, anguished screams, or other theatrics that appear to result from your foe's attack. The triggering creature must attempt a Will saving throw.\nCritical Success The creature is unaffected.\nSuccess The creature is thrown off by your display. The creature becomes Dazzled until the start of your turn.\nFailure The creature fully believes your performance, leaving itself open. The creature becomes dazzled and Off-Guard until the start of your turn.\nCritical Failure The creature is enraptured by the display. The creature uses its remaining actions to watch you in awe. It then remains dazzled and off-guard until the start of your turn.",
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
    "contentId": "pf2e:spell:spells-srd:fashionista",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "W0YqtSVwfFImGgdK",
      "slug": "fashionista",
      "publicationTitle": "Pathfinder Lost Omens Firebrands",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/fasionista.webp"
    },
    "sourceHash": "sha256:08ca42dc58868445fe3431da9366391c0d5ccf4a74c18d8eb27f7781242cd1cd",
    "translatableHash": "sha256:cae8209ca80b805c1845e159c935aa4c79a28c0dfc2be01e994648e88d751f58",
    "data": {
      "schemaVersion": 1,
      "name": "Fashionista",
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
      "description": "The target's clothes are transformed into ostentatious attire that epitomizes high-end local fashion. No details of the target's appearance transform other than their clothes, so their weapons or armor remain unchanged in appearance. The target gains a +1 status bonus on Deception checks to Create a Diversion. You can Dismiss this spell. At the end of the spell's duration, the target's clothes revert to their original appearance.\nHeightened 2 The status bonus increases by 1, to a maximum of +4 at 7th rank.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 willing creature",
      "area": null,
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 2 The status bonus increases by 1, to a maximum of +4 at 7th rank."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:flashy-disappearance",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "YgbYvkLvnWJ4WfEA",
      "slug": "flashy-disappearance",
      "publicationTitle": "Pathfinder Lost Omens Firebrands",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/flashy-disappearance.webp"
    },
    "sourceHash": "sha256:35fb5e919f38f3d70e88b80be7a9b9ed46318bb53ca2a8770509c080927b61ee",
    "translatableHash": "sha256:3ccd1efe90cc27ecf187830189e9fb6729c42a57834371cbac77bf65e848a19f",
    "data": {
      "schemaVersion": 1,
      "name": "Flashy Disappearance",
      "rank": 1,
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
      "description": "You create a puff of colorful smoke that quickly disperses while you become temporarily Invisible. You become Undetected to all creatures unless they can see invisible creatures. You Stride. At the end of your movement, if you have cover, greater cover, or concealment, attempt a check (stealth, traits:action:hide) check to Hide. You gain a +2 status bonus to this Stealth check. The invisibility then ends, and you either become Observed or Hidden to creatures as determined by your check to Hide, if you made one.\nSpell Effect: Flashy Disappearance",
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
    "contentId": "pf2e:spell:spells-srd:cutting-insult",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "1hLxZznnA2kvXlIt",
      "slug": "cutting-insult",
      "publicationTitle": "Pathfinder Lost Omens Firebrands",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/cutting-insult.webp"
    },
    "sourceHash": "sha256:1b66a68493ff079039c2e7e75580171519037139d7771b46c8c1e24ca84b62f9",
    "translatableHash": "sha256:e16c5d17a70dbe80112ab89650eaa6aec56cc4846e9c53a9024011df7bf4aa5d",
    "data": {
      "schemaVersion": 1,
      "name": "Cutting Insult",
      "rank": 2,
      "rarity": "uncommon",
      "traits": [
        "auditory",
        "concentrate",
        "emotion",
        "fear",
        "linguistic",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "occult"
      ],
      "description": "You utter an insult so offensive that it cuts your target to the quick. Your target takes 4d6 mental damage and 1 persistent bleed damage and must attempt a Will save.\nCritical Success The creature is unaffected.\nSuccess The creature takes half mental damage but no persistent bleed damage, and it becomes Frightened 1.\nFailure The creature takes full mental damage and full persistent bleed damage, and it becomes Frightened 2.\nCritical Failure The creature takes double mental damage and double persistent bleed damage, and becomes Frightened 3.\nHeightened 2 The mental damage increases by 4d6, and the bleed damage increases by 1.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": "will save",
      "damage": [
        {
          "formula": "4d6",
          "type": "mental",
          "kind": "damage"
        },
        {
          "formula": "1",
          "type": "bleed",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The mental damage increases by 4d6, and the bleed damage increases by 1."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:confetti-cloud",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "CI7F5qdwp6YngyFt",
      "slug": "confetti-cloud",
      "publicationTitle": "Pathfinder Lost Omens Firebrands",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/confetti-cloud.webp"
    },
    "sourceHash": "sha256:edd3144551dbb0d6ac8f5c2b58c65a1800b94152a0f5dbd31f7f794ddc7db7cf",
    "translatableHash": "sha256:c8bf1a63f7bf4c45d7badd0617beb11c8ad881369fd78e9de70039ac3b945584",
    "data": {
      "schemaVersion": 1,
      "name": "Confetti Cloud",
      "rank": 2,
      "rarity": "uncommon",
      "traits": [],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You conjure a dense storm of swirling confetti. All creatures within the area of the confetti become Concealed, and all creatures outside the storm become concealed to creatures within it. Additionally, creatures in the area of the confetti continually hear the raucous sounds of a party or festival and take a –2 circumstance penalty on Perception checks to hear. The number of actions you spend when Casting this Spell determines its area. You can Dismiss the spell.\n1 (somatic) The spell's area is a 5-foot burst.\n2 (somatic, verbal) The spell's area is a 10-foot burst.\n3 (material, somatic, verbal) The spell's area is a 15-foot burst.",
      "castingTime": "1 to 3 actions",
      "range": "90 feet",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:illusory-shroud",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "kLyyJayja75K9rXX",
      "slug": "illusory-shroud",
      "publicationTitle": "Pathfinder Lost Omens Firebrands",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/illusory-shroud.webp"
    },
    "sourceHash": "sha256:1813d8d8be451aaa45686f40e33a5886adb35f4a63ac15f44a363c5e3b173207",
    "translatableHash": "sha256:8c4189d636ab2ef4c0c4019475706402b7b9b0d2a6901163e93d42700aadcef4",
    "data": {
      "schemaVersion": 1,
      "name": "Illusory Shroud",
      "rank": 2,
      "rarity": "uncommon",
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
      "description": "You shroud the target in subtle illusions that make it difficult to detect. The target gains a +1 status bonus to Stealth checks to Hide or Sneak. For the duration, the target can become Hidden to a creature even if they don't have cover and aren't otherwise Concealed from that creature. Even if the target isn't concealed or doesn't have cover or greater cover at the end of a Sneak action, the target isn't automatically observed.\nSpell Effect: Illusory Shroud",
      "castingTime": "2 actions",
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
    "contentId": "pf2e:spell:spells-srd:spys-mark",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "LFcGNGLMkGlsnEKQ",
      "slug": "spys-mark",
      "publicationTitle": "Pathfinder Lost Omens Firebrands",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/spys-mark.webp"
    },
    "sourceHash": "sha256:8dd5130cebe4dfd9aa7c85b24dfeaa4f916740bb8458d49afbb16e829c0ea2d8",
    "translatableHash": "sha256:6acf5ff102598f284cea4353349f45be919550e205dab5ffca99b0e1b51a3f22",
    "data": {
      "schemaVersion": 1,
      "name": "Spy's Mark",
      "rank": 2,
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
      "description": "By pressing your hand to a wall or other solid immobile surface, you cause the crossed-swords symbol of the Firebrands—or a different symbol of your choosing—to appear on the targeted surface. This symbol is immobile. You can use an action, which has the concentrate trait, to shut your eyes and focus on the symbol, projecting your senses into the symbol. While projecting your senses, you can see, hear, and smell through the symbol using whatever senses you have (including natural senses like scent and darkvision and magical senses like see invisibility). You must be within 100 feet to sense through the symbol in this way. You can Dismiss the projection effect but can otherwise freely project your senses into the symbol at any time during the spell's duration.\nA creature can erase the symbol (and end the spell) by spending 3 Interact actions to scrub the symbol away. These actions do not need to be consecutive.\nHeightened (4th) The duration increases to 8 hours. You can sense through the symbol at a distance up to 500 feet away. Scrubbing the symbol requires 6 Interact actions.\nHeightened (9th) The symbol remains until the next time you make your daily preparations. You can sense through the symbol at a distance up to 1 mile away. Scrubbing the symbol requires 1 total minute of work.",
      "castingTime": "3 actions",
      "range": "touch",
      "target": "a wall or other solid, immobile surface",
      "area": null,
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) The duration increases to 8 hours. You can sense through the symbol at a distance up to 500 feet away. Scrubbing the symbol requires 6 Interact actions.\nHeightened (9th) The symbol remains until the next time you make your daily preparations. You can sense through the symbol at a distance up to 1 mile away. Scrubbing the symbol requires 1 total minute of work."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:nothing-up-my-sleeve",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "0aoRcxRyIPHfbifk",
      "slug": "nothing-up-my-sleeve",
      "publicationTitle": "Pathfinder Lost Omens Firebrands",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/nothing-up-my-sleeve.webp"
    },
    "sourceHash": "sha256:51413a04382a2a14379132d963e36ca15e087284122ff3f12916b08faaff949a",
    "translatableHash": "sha256:a27ae078cabd1175198ae24150bbe020900e19b3a0633bfd3015a99a8afd54b6",
    "data": {
      "schemaVersion": 1,
      "name": "Nothing Up My Sleeve",
      "rank": 3,
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
      "description": "You create an extradimensional space within each of your sleeves. If you're not wearing clothing with sleeves, the spell also produces a simple shirt with long sleeves for you for the duration. Each of the extradimensional spaces can hold objects and equipment, up to a total of 1 Bulk. Organic matter and living creatures can't be stored in these spaces. You are the only person who can access or perceive these extradimensional spaces.\nYou can Interact to place an object into the extradimensional space or to draw an object from the extradimensional storage. When you draw an object from the extradimensional storage, the object appears in one of your empty hands. If you don't have an empty hand, you can't draw an object from the extradimensional storage. For the duration, whenever you Palm an Object, you can choose to place the palmed object directly into one of the two extradimensional spaces if that space has sufficient capacity to hold the object. When the spell ends or you die, the contents of both extradimensional spaces are ejected and land without harm on the ground in your space.",
      "castingTime": "3 actions",
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
    "contentId": "pf2e:spell:spells-srd:firework-blast",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "1OiPVy1wuoXi6LR5",
      "slug": "firework-blast",
      "publicationTitle": "Pathfinder Lost Omens Firebrands",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/firework-blast.webp"
    },
    "sourceHash": "sha256:736fbf30f944921e68663c505542eb466749dfc13c0f0580d7681eacfe12f699",
    "translatableHash": "sha256:5243bb9940076d23d1d578f5cdcfc40484ad842b284a931a31e3220efc3c487e",
    "data": {
      "schemaVersion": 1,
      "name": "Firework Blast",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane"
      ],
      "description": "You create a massive display of loud and colorful explosions. The explosions deal 4d6 fire damage. Creatures that fail their saves must attempt an additional check (fortitude) save. Creatures that critically fail their saves take a -2 circumstance penalty to this Fortitude save.\nSuccess The creature is unaffected.\nFailure The creature is Blinded and Deafened for 1 round.\nCritical Failure The creature is blinded for 1 round and Dazzled and deafened for 1 minute.\nHeightened 1 The damage increases by 2d6.",
      "castingTime": "2 actions",
      "range": "500 feet",
      "target": "",
      "area": "20 burst",
      "duration": "",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "4d6",
          "type": "fire",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:percussive-impact",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "iG1USiSRXMjCDGAr",
      "slug": "percussive-impact",
      "publicationTitle": "Pathfinder Lost Omens Firebrands",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/percussive-impact.webp"
    },
    "sourceHash": "sha256:bbe93c6fde38feb632ac3a793251cc4073c80beb10eb0f747f837db7997984fb",
    "translatableHash": "sha256:a124196a4eedc56827dc523e225567eaac01ff462d9a0bd5958680ab5c84ec1b",
    "data": {
      "schemaVersion": 1,
      "name": "Percussive Impact",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "attack",
        "concentrate",
        "manipulate",
        "sonic"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult"
      ],
      "description": "You lob a compressed ball of sound at a foe. The ball explodes on impact, unleashing a powerful blast of sound. Make a spell attack roll. If you hit, you deal 4d8 bludgeoning damage plus 1d4 sonic splash damage. On a critical success, the target is also Deafened for 1 round.\nHeightened 2 The bludgeoning damages increases by 4d8, the sonic splash damage increases by 1d4, and the duration of the deafened condition increases by 2 rounds.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [
        {
          "formula": "4d8",
          "type": "bludgeoning",
          "kind": "damage"
        },
        {
          "formula": "1d4",
          "type": "sonic",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The bludgeoning damages increases by 4d8, the sonic splash damage increases by 1d4, and the duration of the deafened condition increases by 2 rounds."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:sparkleskin",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "KAWQ5x2j4tUJ91ry",
      "slug": "sparkleskin",
      "publicationTitle": "Pathfinder Lost Omens Firebrands",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/sparkleskin.webp"
    },
    "sourceHash": "sha256:e128bd1ceefadb6f6a5d2aa3175a766d0b933e2806fa0f0a987ed0d62855dbb5",
    "translatableHash": "sha256:95fc4d691ed5ba56a8fb5b61a47d4fe248713ed41f14ad09d3386aabd2a5d697",
    "data": {
      "schemaVersion": 1,
      "name": "Sparkleskin",
      "rank": 3,
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
      "description": "You coat a creature's body in a layer of brilliantly sparkling glitter. The target gains a +2 status bonus on Deception checks to Create a Diversion and to Feint, and on Performance checks to Perform that have the visual trait. When the target take damage, glitter bursts out of its wound in a 5-foot emanation. Creatures in the area must attempt a Fortitude save.\nFailure The creature is Dazzled for 1 round.\nCritical Failure The creature is dazzled for 3 rounds.\nSpell Effect: Sparkleskin",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 willing creature",
      "area": null,
      "duration": "10 minutes",
      "defense": "fortitude save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:instant-parade",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "xyRjD52YZl3DBsiy",
      "slug": "instant-parade",
      "publicationTitle": "Pathfinder Lost Omens Firebrands",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/instant-parade.webp"
    },
    "sourceHash": "sha256:ac1a1f66824dea1896e52f2b8e4db219fec1151b6c9f755adfd4c4cf42cd3023",
    "translatableHash": "sha256:d540941dd25f7ba6d528c1bd05469b71520f98a4f66db5fdc93929f67d766b71",
    "data": {
      "schemaVersion": 1,
      "name": "Instant Parade",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "auditory",
        "aura",
        "concentrate",
        "illusion",
        "manipulate",
        "visual"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "An illusory parade with dozens of participants and performers appears around you, following you as you move. The parade is lively and noisy, providing enough cover and distraction to hide among the crowd. You and other creatures can Hide and Sneak inside the crowd, though creatures that disbelieve the illusion still see creatures within as normal.\nYou can choose to send the parade off with a 2-action activity, which has the concentrate trait. When you do so, the parade no longer follows you and instead continues traveling in the direction of your choice. The parade travels 100 feet over 1 round and then disappears as the spell is Dismissed. You can otherwise Dismiss the spell normally if you prefer.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "10 emanation",
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:bursting-bloom",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "vGMbpV7GWIFPNUaZ",
      "slug": "bursting-bloom",
      "publicationTitle": "Pathfinder Lost Omens Firebrands",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/bursting-bloom.webp"
    },
    "sourceHash": "sha256:122496aef41123f7ddb90b9865003f04218cd8e377022b9471e7c4b16c7bbff6",
    "translatableHash": "sha256:a2e4ddebd03a52774d44f42866b3067da26bde05376953edefe15342029fec1c",
    "data": {
      "schemaVersion": 1,
      "name": "Bursting Bloom",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate",
        "plant"
      ],
      "traditions": [
        "occult",
        "primal"
      ],
      "description": "You cause a rose bush to sprout from the chest of a foe, bursting out of its body and wrapping it in thorned vines. The target takes 6d6 piercing damage and 1d6 persistent bleed damage and must attempt a Fortitude save. When the target is no longer taking persistent bleed damage and is no longer encumbered, the rose bush withers away to nothing.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage and no persistent damage.\nFailure The creature takes full damage and persistent damage and is Encumbered for 4 rounds.\nCritical Failure The creature takes double damage and persistent damage and is encumbered for 1 minute.\nHeightened 2 The initial damage increases by 3d6, and the persistent bleed damage increases by 1d6.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": "fortitude save",
      "damage": [
        {
          "formula": "6d6",
          "type": "piercing",
          "kind": "damage"
        },
        {
          "formula": "1d6",
          "type": "bleed",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The initial damage increases by 3d6, and the persistent bleed damage increases by 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:blinding-foam",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "7uL4XhHpxZpgNJPh",
      "slug": "blinding-foam",
      "publicationTitle": "Pathfinder Lost Omens Firebrands",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/blinding-foam.webp"
    },
    "sourceHash": "sha256:ade24a277893896b384bd24aebd9438012216be84e638f0a273f8ab178f86b8c",
    "translatableHash": "sha256:d4670ea77b445f70d9652d5f596c9edce30fd49d519a59d0659635335fdbe1c9",
    "data": {
      "schemaVersion": 1,
      "name": "Blinding Foam",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "acid",
        "attack",
        "concentrate",
        "incapacitation",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult",
        "primal"
      ],
      "description": "You spray a colorful, caustic foam into the target's eyes, which clings to their face. Make a spell attack roll. If you hit, you deal 5d10 acid damage and 1d6 persistent acid damage, and the target is Blinded for the duration. The foam can be removed with 3 Interact actions, which ends the persistent acid damage. These Interact actions don't need to be consecutive. When the target's persistent acid damage ends, the spell automatically ends.\nHeightened (8th) The initial damage increases to 9d10, and the persistent acid damage increases to 2d6.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [
        {
          "formula": "5d10",
          "type": "acid",
          "kind": "damage"
        },
        {
          "formula": "1d6",
          "type": "acid",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (8th) The initial damage increases to 9d10, and the persistent acid damage increases to 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:rallying-banner",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Hp2wmnRS6TUGZlZ2",
      "slug": "rallying-banner",
      "publicationTitle": "Pathfinder Lost Omens Firebrands",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/rallying-banner.webp"
    },
    "sourceHash": "sha256:45ed7fd3baade6548c4902cf1babe4bbf7f9c881444f92c889af8dbf8bfc81f9",
    "translatableHash": "sha256:a516750f4e0e637e192d71c27adf0d58e5ce1761f23673b8dc00dcc8c31eaf67",
    "data": {
      "schemaVersion": 1,
      "name": "Rallying Banner",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "auditory",
        "concentrate",
        "illusion",
        "manipulate",
        "visual"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "You create an illusory banner representing a revolution, social movement, or organization such as the Firebrands. This banner is 30 feet tall, 30 feet wide, and hovers 20 feet in the air above the target. The banner is surrounded by flashing colors, bursting fireworks, and the sounds of cheering crowds, which draw attention and make it clearly obvious that the target is the bearer of the banner.\nYour allies and any members of the banner's associated group who are within 200 feet and who can see and hear the banner are inspired by its presence. They gain a +1 status bonus to attack rolls and a +1 status bonus to saves against fear, emotion effects that inflict despair, and effects that would impose the Confused or Controlled condition. When the bearer of the banner would gain the Fleeing condition, they can choose to stand their ground and be Stunned for the effect's duration instead. During the duration, the target can touch a willing creature and transfer the banner to the touched creature, making them the new bearer of the banner. Touching a creature for this purpose is an action with the concentrate and manipulate traits.",
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
    "contentId": "pf2e:spell:spells-srd:belittling-boast",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "qxJE2iSJwPFLZrcK",
      "slug": "belittling-boast",
      "publicationTitle": "Pathfinder Lost Omens Firebrands",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:6725285707d65360c998d19cbeeb933c58c62b8bdfa152f24d21e7ecc13f87bf",
    "translatableHash": "sha256:2e983e76cfb6db4bef3a1eb2dd646f9c58aa2f373d9394611db9c346c158af78",
    "data": {
      "schemaVersion": 1,
      "name": "Belittling Boast",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "auditory",
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
      "description": "You boast about your skills or combat prowess, bolstering your own abilities and belittling your opponents. Select one of the following to boast about: melee attack rolls, ranged attack rolls, spell attack rolls, or a single skill. Attempt an Intimidation check to Demoralize all enemies within 30 feet. Each creature that becomes Frightened additionally takes a -1 circumstance penalty to the attack roll or skill you boasted about for 1 minute. If at least one creature becomes frightened, you gain a +1 status penalty to the attack roll or skill you boasted about for 1 minute.\nHeightened (8th) The bonus and penalty increase to 2.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "30 burst",
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (8th) The bonus and penalty increase to 2."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:roses-thorns",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "gBJtUhewnihlqxm7",
      "slug": "roses-thorns",
      "publicationTitle": "Pathfinder Lost Omens Firebrands",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/roses-thorns.webp"
    },
    "sourceHash": "sha256:9e112adb3bc3f8257693ce557e2d0ea6ce9a68ecb77ee5a35240de11b39a8bcc",
    "translatableHash": "sha256:fa854004c98164329179bd16308c091a9a2687bde677fc1a9cfc13cb1c1c9d76",
    "data": {
      "schemaVersion": 1,
      "name": "Rose's Thorns",
      "rank": 6,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate",
        "plant"
      ],
      "traditions": [
        "primal"
      ],
      "description": "Rose bushes with razor-sharp thorns sprout from the ground in the area. The rose bushes deal 8d8 piercing damage to each creature that's in the area when the spell is cast or that ends its turn in the area (basic Reflex save). A creature that critically fails its saving throw also takes (ternary(gte(6,9),2,1))d8[persistent,bleed] damage and is Immobilized for 1 round or until the creature Escapes (against your spell DC), whichever comes first. The area is difficult terrain and hazardous terrain. A creature that moves through the area takes (ternary(gte(6,9),8,5))[piercing] damage for every square of that area it moves into. Each time you sustain this spell, the radius of the burst increases by 5 feet.\nHeightened (9th) The initial damage increases to 12d8, the persistent bleed damage increases to 2d8, and the hazardous terrain damage increases to 8.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "",
      "area": "20 burst",
      "duration": "1 minute",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "8d8",
          "type": "piercing",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (9th) The initial damage increases to 12d8, the persistent bleed damage increases to 2d8, and the hazardous terrain damage increases to 8."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:forge",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "FTR8m4qrhYzTRyrD",
      "slug": "forge",
      "publicationTitle": "Pathfinder Lost Omens Highhelm",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:c5b93d4bce2eb7f95b2c37882da84e420c08a41ab4d0c53f5519f666ee43f8f9",
    "translatableHash": "sha256:093eeb1397c08ca658d00a6d9da8b838d33fd02239a43702e47cf024ab87b193",
    "data": {
      "schemaVersion": 1,
      "name": "Forge",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "fire"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "Developed before the introduction of the Iron Lagoon, this cantrip for superheating metal has also found valuable combat use. You superheat the target, dealing 3d6 fire damage. If the target is a metal object, reduce its Hardness by an amount equal to the damage dealt until the end of your next turn.\nCritical Success The target is unaffected.\nSuccess The target takes half damage.\nFailure The target takes full damage.\nCritical Failure The target takes double damage, and if it's a metal creature, it gains weakness 2 to physical damage until the end of your next turn.\nHeightened 1 The damage increases by 2d6, and the weakness on a critical failure increases by 2.\nSpell Effect: Forge (Critical Failure)",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature or unattended metal object",
      "area": null,
      "duration": "",
      "defense": "fortitude save",
      "damage": [
        {
          "formula": "3d6",
          "type": "fire",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 2d6, and the weakness on a critical failure increases by 2.\nSpell Effect: Forge (Critical Failure)"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:nettleskin",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "BA143r8fCqmSjdRf",
      "slug": "nettleskin",
      "publicationTitle": "Pathfinder Adventure: Threshold of Knowledge",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/nettleskin.webp"
    },
    "sourceHash": "sha256:76d4279ad4d959df1b7504e551c42d040cbfb8b532d0352a54bcaa01a797e0d9",
    "translatableHash": "sha256:0b61b1e1367fd07f216c90e4a1dee1cafd56aef28653fa6cdfe038cc5bede989",
    "data": {
      "schemaVersion": 1,
      "name": "Nettleskin",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate",
        "plant"
      ],
      "traditions": [
        "primal"
      ],
      "description": "Thorns sprout from your body; they pass through and don't damage any clothing or armor you wear.\nAdjacent creatures that hit you with a melee or unarmed attack take 1d4 piercing damage as the nettles jab them and break off. Each time a creature takes damage in this way, nettleskin's duration decreases by 1 round.\nHeightened 1 The damage increases by 1d4.",
      "castingTime": "2 actions",
      "range": "self",
      "target": "self",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [
        {
          "formula": "1d4",
          "type": "piercing",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 1d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:gritty-wheeze",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "s8gTmnNMg4H4bHEF",
      "slug": "gritty-wheeze",
      "publicationTitle": "Pathfinder Adventure: Threshold of Knowledge",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:4464c634753cdf728e3d079a932b643d8ffc0a9a96aec3bfe645c05cce3ae02e",
    "translatableHash": "sha256:d08ee724887dd222f71c9f3df9def0de457119240b36d99438a418719e263879",
    "data": {
      "schemaVersion": 1,
      "name": "Gritty Wheeze",
      "rank": 1,
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
      "description": "You exhale desiccating grit and sand in a small cloud. Creatures in the area take 2d4 bludgeoning damage and must attempt a Fortitude save.\nWater creatures and plant creatures use the outcome one degree of success worse than the result of their saving throw.\nCritical Success The creature takes no damage.\nSuccess The creature takes half damage.\nFailure The creature takes full damage and is Dazzled for 1 round.\nCritical Failure The creature takes double damage and is dazzled for 1 minute.\nHeightened 1 The damage increases by 2d4.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "15 cone",
      "duration": "",
      "defense": "fortitude save",
      "damage": [
        {
          "formula": "2d4",
          "type": "bludgeoning",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 2d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:internal-insurrection",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "RbORUmnwlB8b3mNf",
      "slug": "internal-insurrection",
      "publicationTitle": "Pathfinder Adventure: Malevolence",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:358bfdfc12c8751976d98806662eaf95841c571515f247146cc2a8da4e07f639",
    "translatableHash": "sha256:ca468cc1f95191f9996d8dc5208fc99299886909f270b12acb3b9c41bcfb03f1",
    "data": {
      "schemaVersion": 1,
      "name": "Internal Insurrection",
      "rank": 4,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "disease",
        "manipulate"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "You afflict the target with the supernatural disease known as internal insurrection, causing portions of their body to rebel against the whole, leading to painful agonies and, in time, death. The target must attempt a Fortitude save.\nCritical Success The target is unaffected.\nSuccess The target becomes Clumsy for 1 round as pain wracks their body.\nFailure The target is afflicted with internal insurrection at stage 1.\nCritical Failure The target is afflicted with internal insurrection at stage 2.\nInternal Insurrection (disease); Level 7.\nThe target can't recover from the clumsy condition from internal insurrection until the disease is cured\nStage 1 Clumsy 1 (1 day)\nStage 2 Clumsy 2 (1 day)\nStage 3 clumsy 2 and Off-Guard (1 day)\nStage 4 Clumsy 3 and off-guard (1 day)\nStage 5 death, and the target's body splits apart into a mass of fragments that crawls outward in a 10-foot-emanation before perishing, leaving a bare skeleton surrounded by gore.",
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
    "contentId": "pf2e:spell:spells-srd:scorching-blast",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "5QD75UbyB5EiG3yz",
      "slug": "scorching-blast",
      "publicationTitle": "Pathfinder Kingmaker",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:eef0b38a37ce368de5cb81750fde1f2ae63b62f6a15566954c47ea1e3804e466",
    "translatableHash": "sha256:5336784956b12f9412a911c8713902b1b620f3b907aa2b782667b8cf20a0e51e",
    "data": {
      "schemaVersion": 1,
      "name": "Scorching Blast",
      "rank": 1,
      "rarity": "rare",
      "traits": [
        "attack",
        "fire",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult",
        "primal"
      ],
      "description": "You evoke a mass of fire into the air around your outstretched fist. For the remainder of your turn, you can blast targets within 30 feet with this fire by spending a single action which has the attack and concentrate traits. When you do so, attempt a ranged spell attack roll. If you hit, you inflict 2d8 fire damage. On a critical hit, the target takes 1d6+0 persistent fire damage.\nHeightened 1 The base damage increases by 1d8 and the persistent fire damage on a critical hit increases by 2.",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": null,
      "duration": "until the end of your turn",
      "defense": null,
      "damage": [
        {
          "formula": "2d8",
          "type": "fire",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The base damage increases by 1d8 and the persistent fire damage on a critical hit increases by 2."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:aqueous-blast",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "6wLY5LnehCo3tHlr",
      "slug": "aqueous-blast",
      "publicationTitle": "Pathfinder Kingmaker",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:2c60732c25511f53450e40f2cd8278b0af1500b36fbebbc4803bf44fa1b60dc5",
    "translatableHash": "sha256:cbe6eb6a054d8da905e4e1e2195804ae817340aa421de35cad9e6b3c18fa3d9a",
    "data": {
      "schemaVersion": 1,
      "name": "Aqueous Blast",
      "rank": 1,
      "rarity": "rare",
      "traits": [
        "attack",
        "manipulate",
        "water"
      ],
      "traditions": [
        "arcane",
        "occult",
        "primal"
      ],
      "description": "You evoke a mass of water into the air around your outstretched fist. For the remainder of your turn, you can blast targets within 30 feet with this water by spending a single action which has the attack and concentrate traits. When you do so, attempt a ranged spell attack roll. If you hit, you inflict 2d8 bludgeoning damage. On a critical hit, the blast knocks the target Prone.\nHeightened 1 The damage increases by 1d8.",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": null,
      "duration": "until the end of your turn",
      "defense": null,
      "damage": [
        {
          "formula": "2d8",
          "type": "bludgeoning",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 1d8."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:inkshot",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "MiTFNcqCI9f34A2V",
      "slug": "inkshot",
      "publicationTitle": "Pathfinder Kingmaker",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:2e3a0a87f1f2e90fa6c7e08a67b11cf39df0c2a8eb3992c14d162331b1b8cfbd",
    "translatableHash": "sha256:f7291406d2db10dd5802b2cade4bdb3b704722e9cbe315192ed544df37c6bf9b",
    "data": {
      "schemaVersion": 1,
      "name": "Inkshot",
      "rank": 1,
      "rarity": "rare",
      "traits": [
        "attack",
        "concentrate",
        "manipulate",
        "poison"
      ],
      "traditions": [
        "occult",
        "primal"
      ],
      "description": "A spray of viscous, toxic ink jets from your fingertip to strike a target creature in the face. Make a spell attack roll against the target. On a hit, you deal 2d6 poison damage, plus you blast the target's eyes, making them Dazzled for 1 round as the stinging ink blurs and distorts the creature's vision. On a critical hit, double the poison damage, and the target becomes dazzled for 1 minute by the foul ink.\nThe ink stain remains for 1 hour before fading, although vigorous cleansing (or magic such as a prestidigitation cantrip) can remove the ink before then.\nHeightened 1 Increase the base poison damage by 2d6.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [
        {
          "formula": "2d6",
          "type": "poison",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 Increase the base poison damage by 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:blazing-blade",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "NacrNSvfODxpZena",
      "slug": "blazing-blade",
      "publicationTitle": "Pathfinder Kingmaker",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:7957df3a123ab5f38849fb6da63a920d262bfb4d20b17e3c2e476bf360305f21",
    "translatableHash": "sha256:f74fee953d08ed0d7aeb6cec67efaa1495153c376b8138fba0dbb5c482c2cb31",
    "data": {
      "schemaVersion": 1,
      "name": "Blazing Blade",
      "rank": 2,
      "rarity": "rare",
      "traits": [
        "attack",
        "concentrate",
        "fire",
        "holy",
        "manipulate"
      ],
      "traditions": [
        "divine",
        "primal"
      ],
      "description": "A scimitar-shaped beam of fiery light springs from your free hand. While the spell lasts, you can use a single action, which has the attack and concentrate traits, to burn your foes with the blazing blade. When you do, make a spell attack roll. On a success, the blazing blade deals 1d6 fire damage plus 1d6 spirit damage plus your spellcasting ability modifier. On a critical success, it deals double the usual damage.\nHeightened (4th) The blade's fire damage increases to 2d6. On a critical success, the target takes (ternary(gte(2,8),3,ternary(gte(2,6),2,1)))d6[persistent,spirit] damage.\nHeightened (6th) The blade's fire damage increases to 3d6. On a critical success, the target takes 2d6 persistent spirit damage.\nHeightened (8th) The blade's fire damage increases to 4d6. On a critical success, the target takes 3d6 persistent spirit damage.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [
        {
          "formula": "1d6",
          "type": "fire",
          "kind": "damage"
        },
        {
          "formula": "1d6",
          "type": "spirit",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (4th) The blade's fire damage increases to 2d6. On a critical success, the target takes (ternary(gte(2,8),3,ternary(gte(2,6),2,1)))d6[persistent,spirit] damage.\nHeightened (6th) The blade's fire damage increases to 3d6. On a critical success, the target takes 2d6 persistent spirit damage.\nHeightened (8th) The blade's fire damage increases to 4d6. On a critical success, the target takes 3d6 persistent spirit damage."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:infectious-ennui",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "oYBIs8MICYkFwtXD",
      "slug": "infectious-ennui",
      "publicationTitle": "Pathfinder Kingmaker",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:9c5d760be3a04a92500f8a8dbf089e227ccb209bad734ed7a406aa07a61f7a9b",
    "translatableHash": "sha256:2fdf722ab3a7184e413a299e1df72e70cc9f3f75ea5fa1d062f512480c82b671",
    "data": {
      "schemaVersion": 1,
      "name": "Infectious Ennui",
      "rank": 3,
      "rarity": "rare",
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
      "description": "With a wave of your hand and a short invocation, you cause feelings of ennui and impending doom to well up in the mind of the targeted creature, who must attempt a Will save.\nCritical Success The target is unaffected.\nSuccess The target is momentarily overwhelmed with ennui. It becomes Slowed 1 as it grapples mentally with the pointlessness of existence, but at the end of the target's next turn, the spell effect ends.\nFailure The target is slowed 1 and Frightened 1 from the sense of ennui, and remains slowed and can't reduce the frightened condition below 1 as long as the spell is sustained. At the start of the target's turn, choose one creature within 30 feet of the target to attempt a Will save as well; on a failure, that creature is slowed 1 for 1 round; either way, they are then temporarily immune to this casting of infectious ennui. (Ennui does not continue to spread from this secondary target.)\nCritical Failure As failure, but the primary target is Slowed 2 and Frightened 2.\nHeightened (5th) When a secondary target becomes slowed, it remains slowed as long as the spell is sustained.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened (5th) When a secondary target becomes slowed, it remains slowed as long as the spell is sustained."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:transcribe-conflict",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "YZnLggKDHkMY4cnw",
      "slug": "transcribe-conflict",
      "publicationTitle": "Pathfinder Kingmaker",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:a379b3dec47626c673ecdd82d2e917c827cc14f88271d531be597b906d72b1d0",
    "translatableHash": "sha256:f49b0df8440c59f59bb922cc4523aa32ffc4479d5f8caf2a60f5e28d7a6708a3",
    "data": {
      "schemaVersion": 1,
      "name": "Transcribe Conflict",
      "rank": 3,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You cause a sheet of paper to appear in your hand, and a moment later a detailed description of a combat you experienced within the last hour is recorded on that sheet of paper in a language that you know of your choice. The description is detailed enough that anyone who spends 1 minute reading the page can attempt to Recall Knowledge about the event as if they had been there, but the primary purpose of the transcribed conflict is to give you additional insight into the fight by allowing you to study the conflict and learn from errors or tactical blunders participants in the battle may have committed.\nWhen you cast this spell, choose a type of foe in the fight you transcribed and attempt to Recall Knowledge about that foe using your spell DC-10 instead of your skill modifier in an appropriate skill to do so. For this action, you can't use any special abilities, reactions, or free actions that trigger when you Recall Knowledge. If you are successful, you not only learn information about that foe as determined by the GM, but for the remainder of transcribe conflict's duration, you gain a +1 status bonus to Initiative checks in combats where you face that exact kind of foe. For example, if you made the check against a wrath demon, the bonus would apply only to wrath demons, not to other demons. The GM decides if a foe who is disguised grants you this bonus.\nHeightened (5th) The bonus to initiative increases to +2 and the duration increases to 8 hours.\nHeightened (8th) The bonus to initiative increases to +3 and the duration increases until the next time you do your daily preparations, and the status bonus to Initiative checks applies to any allies who took part in the fight you transcribed as long as they are within 30 feet of you when you cast the spell.",
      "castingTime": "1 minute",
      "range": "touch",
      "target": "",
      "area": null,
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (5th) The bonus to initiative increases to +2 and the duration increases to 8 hours.\nHeightened (8th) The bonus to initiative increases to +3 and the duration increases until the next time you do your daily preparations, and the status bonus to Initiative checks applies to any allies who took part in the fight you transcribed as long as they are within 30 feet of you when you cast the spell."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:dawnflowers-light",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "11P3KgDTMIeQIJD7",
      "slug": "dawnflowers-light",
      "publicationTitle": "Pathfinder Kingmaker",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:7c5bc8032dd21c4f5223ac7e7f64913971ab17c7eb65f761a53708167b6be7d9",
    "translatableHash": "sha256:2905387811a8685a76885f462b05a7ce5c752f77c03590042a2f144b8ba1e2bf",
    "data": {
      "schemaVersion": 1,
      "name": "Dawnflower's Light",
      "rank": 4,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "good",
        "light",
        "manipulate"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "The object glows with soft golden light that lays bare the truth, reveals hidden objects, and shines supernatural light on false orders. The object casts bright light in a 60-foot radius (and dim light for the next 60 feet). Within the area of bright light, Perception checks to locate hidden objects (including secret doors but not traps), Will saves to resist visual illusions, and Will saves to resist effects placed by evil creatures that inflict the controlled condition all gain a +2 status bonus. This light suppresses magical darkness of your Dawnflower's light spell's rank or lower.\nFinally, the supernatural light created by this spell is similar to sunlight, and while it can't damage creatures normally harmed by sunlight, it does make them uncomfortable so that they suffer a -2 status penalty to saves versus fear effects while in the area of bright light.\nHeightened (7th) The status bonus increases to +3.\nHeightened (9th) The status bonus increases to +4.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 unattended, non-magical object of 1 Bulk or less",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (7th) The status bonus increases to +3.\nHeightened (9th) The status bonus increases to +4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:phantasmal-protagonist",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "IKb9EOfsrhScO3GO",
      "slug": "phantasmal-protagonist",
      "publicationTitle": "Pathfinder Kingmaker",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/illusory-disguise.webp"
    },
    "sourceHash": "sha256:16fe96e189be598597d3363eab7b01f186816ed945b67e4c20b43a2ff85836e6",
    "translatableHash": "sha256:37f3038d92d972b3864e1eb5e1d0e66654f87fe7a2f69a054823cbe7710db222",
    "data": {
      "schemaVersion": 1,
      "name": "Phantasmal Protagonist",
      "rank": 4,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "illusion",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "You create a phantasmal incarnation of a significant actor from a novel, historical work, or religious parable. The phantasm is Medium, regardless of the size of the actor as it was described in the inspirational work. When you Cast the Spell, decide what theme the protagonist is, choosing from hero, ally, or villain. The protagonist appears in an unoccupied space within range, and the first time each round that you Sustain the Spell, you can direct the protagonist to Stride or take the action granted by its theme. The phantasmal protagonist has a speed of 25 feet and an AC of 22. Its saving throw modifiers, Perception modifier, and skill modifiers are +12. It has 90 HP.\nHero: The protagonist takes the form of a legendary hero. Its thematic action is to attempt a melee Strike, using your spell attack roll to make the attack and inflicting 4d6+6 mental damage on a hit.\nAlly: The protagonist takes the form of a recognizable support actor. Its thematic action is to grant an adjacent creature 4d4 temporary Hit Points, which last for 1 round.\nSpell Effect: Thematic Action (Ally)\nVillain: The protagonist takes the form of a notorious villain. Its thematic action is to harry and mock an adjacent target. The target must succeed at a Will save or become Off-Guard (Slowed 1 on a critical failure) until the end of your next turn.\nPhantasmal Protagonist\nHeightened 1 The protagonist's AC, saving throw modifiers, skill modifiers, and Perception modifier increases by 3, and its HP increase by 30. A heroic protagonist's damage increases by 1d6. An ally protagonist's temporary Hit Points granted increases by 1d4.",
      "castingTime": "3 actions",
      "range": "30 feet",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 The protagonist's AC, saving throw modifiers, skill modifiers, and Perception modifier increases by 3, and its HP increase by 30. A heroic protagonist's damage increases by 1d6. An ally protagonist's temporary Hit Points granted increases by 1d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:vision-of-beauty",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "jqb52wy7A0Eqwuzx",
      "slug": "vision-of-beauty",
      "publicationTitle": "Pathfinder Kingmaker",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:00e532fbbf2a37d52530522cfeef57df1baebfff9840267727eb6774a99ccbe0",
    "translatableHash": "sha256:32b059f70b7be615c121702ef7f90ef76ed43603b595a007452bc5ed0d056983",
    "data": {
      "schemaVersion": 1,
      "name": "Vision of Beauty",
      "rank": 4,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "emotion",
        "illusion",
        "incapacitation",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You create a phantasmal image of the most beautiful creature imaginable to the target at a location somewhere within the spell's range. Only the spell's target can see the beauty, though you can see the vague shape of the illusion as it manifests. The effect of the vision is based on the outcome of the target's Will save.\nCritical Success The target is unaffected.\nSuccess The target is intrigued by the vision, becoming Stupefied 1 for 1 round.\nFailure The target is entranced by the vision, becoming stupefied 1 for 1 round and moving toward the image's location via the most direct route possible for 1 round, bypassing any obvious hazards and enemies in the way. The target is then Fascinated by the illusion for 1 round.\nCritical Failure As failure, except the target is Stupefied 2 and becomes fascinated by the illusion for 1 minute instead of 1 round.\nHeightened 2 You can target an additional creature in range.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "1 creature",
      "area": null,
      "duration": "varies",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened 2 You can target an additional creature in range."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:word-of-revision",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "BazbvgNmK46XjrVc",
      "slug": "word-of-revision",
      "publicationTitle": "Pathfinder Kingmaker",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:62fac96ee34d2297446c531e912e229430233f99fb3696670796369e811b3e1a",
    "translatableHash": "sha256:713c6430a67d22b302a39f59bd4a955850198e4c96caa637a25ccc158ed49c92",
    "data": {
      "schemaVersion": 1,
      "name": "Word of Revision",
      "rank": 6,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "fortune"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "Trigger A creature within range fails or critically fails a saving throw or is reduced to 0 Hit Points\nAs all good writers know, you shouldn't kill off your protagonist before their story is complete. When you utter a word of revision, you alter the course of reality the instant it would otherwise have occurred, saving a creature from an unexpected or unwarranted fate. If the triggering creature failed its saving throw, it rerolls the saving throw. If the triggering creature critically failed its saving throw, it instead treats the result of that saving throw as a failure. If the triggering creature was reduced to 0 Hit Points, it remains at 1 Hit Point, and it still suffers any other debilitating effects that were associated with the source of the damage. In the case of a creature critically failing a saving throw or being reduced to 0 Hit Points simultaneously, you choose which of the two events to revise.\nOnce a creature is affected by a word of revision, it's temporarily immune to further words of revision for 24 hours, as fate resists allowing even the most important of protagonists from avoiding doom too often!\nHeightened (9th) You can target up to 10 creatures within range. All targets must still individually qualify as triggering creatures. For example, if a dragon breathed fire on a group of your allies, only those who failed or critically failed their saving throw or those who were reduced to 0 Hit Points could be affected by this spell.",
      "castingTime": "reaction",
      "range": "60 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (9th) You can target up to 10 creatures within range. All targets must still individually qualify as triggering creatures. For example, if a dragon breathed fire on a group of your allies, only those who failed or critically failed their saving throw or those who were reduced to 0 Hit Points could be affected by this spell."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:sages-curse",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "APDrC83QljsyHenB",
      "slug": "sages-curse",
      "publicationTitle": "Pathfinder Abomination Vaults Hardcover Compilation",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/savants-curse.webp"
    },
    "sourceHash": "sha256:6c613fc57f8e395e129b3273653fde1bbdd1eebf0846ac46a11d5c1202f6e01a",
    "translatableHash": "sha256:cf9696da03984594f64decf2960103891a028cd01c869e80148d52cd68573aec",
    "data": {
      "schemaVersion": 1,
      "name": "Sage's Curse",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "curse",
        "manipulate",
        "mental",
        "misfortune"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You afflict the target with a curse that fills its mind with distracting and hyperspecialized minutiae, causing it to second-guess even simple facts. The target must attempt a Will saving throw.\nCritical Success The target is unaffected.\nSuccess For 10 minutes, the target must roll twice and use the worse result whenever attempting an Arcana, Lore, Occultism, or Society check. If the target succeeds at a check to Recall Knowledge, it gains one piece of true knowledge and one piece of erroneous knowledge, but it has no way of knowing which is which (this has no effect if the target critically succeeds at a check to Recall Knowledge).\nSpell Effect: Sage's Curse (Success)\nFailure As success, but the effect is permanent.\nSpell Effect: Sage's Curse (Failure)\nCritical Failure As failure, and the target treats the outcomes of all checks to Recall Knowledge as one degree of success worse than the result the target rolled (a critical success becomes a success, a success becomes a failure, and a failure becomes a critical failure).",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 creature",
      "area": null,
      "duration": "varies",
      "defense": "basic will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:glass-sand",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "dgMauNKWeRIu8pMN",
      "slug": "glass-sand",
      "publicationTitle": "Pathfinder Adventure: The Enmity Cycle",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/scouring-sand.webp"
    },
    "sourceHash": "sha256:f1e68b50a1187bd25e51f05f14f6b819a3b7f0aa9b32309455402354d127b617",
    "translatableHash": "sha256:e1cf3ba7a9245021034f6727ef0be6a7b3135f2fed3c8d969f629bf465007cd6",
    "data": {
      "schemaVersion": 1,
      "name": "Glass Sand",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "earth",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You throw a handful of sand that transforms into jagged shards of glass. Creatures in the area take 4d6 slashing damage and must attempt a Reflex save.\nCritical Success The target is unaffected.\nSuccess The target takes half damage.\nFailure The target takes full damage and 1 persistent bleed damage.\nCritical Failure The target takes double damage and 2 persistent bleed damage.\nHeightened 1 The damage increases by 2d6.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "60 cone",
      "duration": "",
      "defense": "reflex save",
      "damage": [
        {
          "formula": "4d6",
          "type": "slashing",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:join-pasts",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "8bdt1TvNKzsCu9Ct",
      "slug": "join-pasts",
      "publicationTitle": "Pathfinder #147: Tomorrow Must Burn",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/join-pasts.webp"
    },
    "sourceHash": "sha256:b7cfbc5f77ed928bb9d647bb05bc9ee27e9700fbe3457a6c32049985acb57702",
    "translatableHash": "sha256:b92750ca3cd79b67d5c21a42ba6c4c0744b40362ed2c77d5fa562f42cef00ec9",
    "data": {
      "schemaVersion": 1,
      "name": "Join Pasts",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cantrip",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "occult"
      ],
      "description": "With touches to the targets' foreheads, you bring them into mental communion. The targets can share thoughts and experiences, but not words. When one target attempts to Recall Knowledge, the other can Aid the first target's skill check, using any Lore skill (even if that Lore wouldn't normally apply) without having made any preparations to Aid.\nHeightened 1 You can touch one additional target t include them in the spell's effects. Multiple targets can attempt checks to Aid the target who is attempting to Recall Knowledge.",
      "castingTime": "1 action",
      "range": "touch",
      "target": "2 willing creatures",
      "area": null,
      "duration": "1 round",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 You can touch one additional target t include them in the spell's effects. Multiple targets can attempt checks to Aid the target who is attempting to Recall Knowledge."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:exchange-image",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "znMvKqcRDilIVMwA",
      "slug": "exchange-image",
      "publicationTitle": "Pathfinder #147: Tomorrow Must Burn",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/exchange-image.webp"
    },
    "sourceHash": "sha256:befb5e2bcc06be68573cf6125d9432b08dd245628acd27b77c30647b5bdd554a",
    "translatableHash": "sha256:1dd3a0cd5c55c1cd10c3e408f78f6c4a6a14f3ad728959f16c7c267fc3562f72",
    "data": {
      "schemaVersion": 1,
      "name": "Exchange Image",
      "rank": 1,
      "rarity": "uncommon",
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
      "description": "To mislead pursuers, the Lacunafex developed the means to swap visages. You trade appearances with the target, with the effects depending on the result of the target's Will saving throw. Willing and Unconscious targets automatically critically fail this saving throw.\nCritical Success No effect.\nSuccess You take on the target's appearance, and they take yours. This has the same effects as a 1st-rank Illusory Disguise spell, except that the target can't Dismiss the disguise. The duration is 1 minute or until Dismissed.\nFailure As success, but the duration is 1 hour or until Dismissed.\nCritical Failure As success, but the duration is 24 hours.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "you and 1 other humanoid",
      "area": null,
      "duration": "varies",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:spiritual-anamnesis",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Jli9WBjQZ2MmKJ8y",
      "slug": "spiritual-anamnesis",
      "publicationTitle": "Pathfinder #147: Tomorrow Must Burn",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:d3441583b78251918ec5965bd0239d7f2643a6b68323515b16293c70b1606149",
    "translatableHash": "sha256:a2fd1c1d0001b6f2875ef18fdfba1114e3194565f95ab79fc69a217ef7e6693d",
    "data": {
      "schemaVersion": 1,
      "name": "Spiritual Anamnesis",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "Memories of a past life that seem incredibly real (and may even be) overwhelm the target's mind. This is especially disorienting for undead and creatures that have lived a previous life (such as celestials, fiends, monitors, and many other extraplanar creatures); if such creatures roll a critical success on their save, they get a success instead, and if they roll a failure, they get a critical failure instead.\nCritical Success The creature is unaffected.\nSuccess The creature is Slowed 1 for 1 round.\nFailure The target is Slowed 1 for 1 minute and babbles about the visions, possibly providing information about what they saw.\nCritical Failure As failure, but the target is also Stunned 3.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "1 creature",
      "area": null,
      "duration": "varies",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:forgotten-lines",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "u0AtDZs6BhBPtjEs",
      "slug": "forgotten-lines",
      "publicationTitle": "Pathfinder #147: Tomorrow Must Burn",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:3221f8d865c5f48569c55eb2b8835f5ac1418b0672af5922f6ce4a042964f234",
    "translatableHash": "sha256:452f62a74bacf17a92d84bc2407b028b3dfc506581bf7851be6525494ad1c658",
    "data": {
      "schemaVersion": 1,
      "name": "Forgotten Lines",
      "rank": 4,
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
      "description": "Members of the Lacunafex and other allies use this spell to restore material that Thrune agents have redacted from historical or otherwise valuable texts. You learn one piece of information that was removed from the target text after its creation. You can instead learn one piece of information from a text that had been destroyed, but you must have a fragment of the text, such as a piece of the cover, a page, or even a clasp or metal fittings.\nHeightened (6th) The spell reconstructs all missing information regarding a specific topic of your choice.\nHeightened (9th) The spell also reveals information the writer self-censored and didn't commit to paper.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 text or remnants thereof",
      "area": null,
      "duration": "varies",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (6th) The spell reconstructs all missing information regarding a specific topic of your choice.\nHeightened (9th) The spell also reveals information the writer self-censored and didn't commit to paper."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:verdant-sprout",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "EDABphKEPUBiMmQC",
      "slug": "verdant-sprout",
      "publicationTitle": "Pathfinder #151: The Show Must Go On",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:f0db217226e0b5f41e5a6cf8c2a450dd4f27cdfc5ae40a2340f1eca1cb65c45c",
    "translatableHash": "sha256:32d6e725da53033300f09a5ff0fff0f19ba186663a3e0af4984ac1733d2cc597",
    "data": {
      "schemaVersion": 1,
      "name": "Verdant Sprout",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate",
        "plant"
      ],
      "traditions": [
        "primal"
      ],
      "description": "You imbue a single ordinary, inexpensive plant seed with primal energy and throw it onto a surface, where it gradually sprouts into a Medium plant. After 10 minutes, the plant is sturdy enough to provide standard cover, and its space is difficult terrain. The plant is laden with nutritious nuts or fruit sufficient to feed one Medium creature for a day. The plant has AC 10, Hardness 5, and 20 Hit Points.\nHeightened 1 You throw an additional seed, which grows into an additional plant within range.",
      "castingTime": "3 actions",
      "range": "30 feet",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 You throw an additional seed, which grows into an additional plant within range."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:scouring-sand",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "HGmBY8KjgLV97nUp",
      "slug": "scouring-sand",
      "publicationTitle": "Pathfinder #151: The Show Must Go On",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/scouring-sand.webp"
    },
    "sourceHash": "sha256:12d8d9131721172a8eb2a2337ec82b2d5bf30e9a18ab1c4cbfc90923decc9283",
    "translatableHash": "sha256:ade0192ce6557171e96fce449fe81c5308b0335d67261f56bc73b8ddff2557d8",
    "data": {
      "schemaVersion": 1,
      "name": "Scouring Sand",
      "rank": 1,
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
      "description": "You blast the area with grit that scours away soil and gets into creatures' eyes. For the duration of the spell, any plant-based difficult terrain smaller than a tree becomes loose, allowing each 5-foot square of it to be cleared with a single Interact action. In addition, scouring sand attempts to counteract Entangling Flora and other effects that create or manipulate plant-based terrain in its area. Successfully counteracting an effect removes only the portion of its area that overlaps with scouring sand's area. After one such attempt, the effect is temporarily immune to scouring sand's counteract for 24 hours. Each creature in the area when you Cast this Spell or that ends its turn in the area must attempt a Reflex save.\nSuccess The creature is unaffected.\nFailure The creature is Dazzled for 1 minute or until it uses an Interact action to get the sand out of its eyes.\nCritical Failure As failure, but the creature is also Blinded for its next action.\nHeightened (3rd) Once per round when you Sustain the Spell, you can move the center of the burst to a spot within range.\nHeightened (6th) As the 3rd-rank version, except the range is 120 feet and the area is a 20-foot burst.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "",
      "area": "10 burst",
      "duration": "1 minute",
      "defense": "reflex save",
      "damage": [],
      "heightening": "Heightened (3rd) Once per round when you Sustain the Spell, you can move the center of the burst to a spot within range.\nHeightened (6th) As the 3rd-rank version, except the range is 120 feet and the area is a 20-foot burst."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:personal-rain-cloud",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "kJKSLfCgqxmN2FY8",
      "slug": "personal-rain-cloud",
      "publicationTitle": "Pathfinder #151: The Show Must Go On",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/personal-rain-cloud.webp"
    },
    "sourceHash": "sha256:e31ec223e877bdf554e82f840c6cb22d1973791fe0d8cccf97ac11bf6909e76a",
    "translatableHash": "sha256:d382a6674efd66bea7d5681dac2e210a99ef033beab3624a3dae028ec1895d83",
    "data": {
      "schemaVersion": 1,
      "name": "Personal Rain Cloud",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate",
        "water"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You conjure a 5-foot-wide rain cloud that follows the target wherever it goes. It stays roughly an arm's length overhead, unless it must drift lower to fit under a ceiling. The cloud rains constantly on the target, keeping it wet and dampening the ground in the wake of any movement. The rain extinguishes non-magical flames. The target gains fire resistance 2. Creatures with weakness to water take damage equal to their weakness at the end of each of their turns. Creatures can attempt a Reflex save to avoid the cloud.\nHeightened 1 The amount of fire resistance increases by 2.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": "reflex save",
      "damage": [],
      "heightening": "Heightened 1 The amount of fire resistance increases by 2."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:sea-surge",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "cf7Jkm39uEjUFtHt",
      "slug": "sea-surge",
      "publicationTitle": "Pathfinder #151: The Show Must Go On",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/sea-surge.webp"
    },
    "sourceHash": "sha256:149d677bf81d52493505bad0992fcbabc48f9d72887890e3c7619d663f10fbf1",
    "translatableHash": "sha256:86f25db6b938e6abab78aa7a2a135931c64423e296bcb019cd8fb3ddc2c8683c",
    "data": {
      "schemaVersion": 1,
      "name": "Sea Surge",
      "rank": 2,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate",
        "water"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You slap or stomp on a nearby solid or liquid surface, sending a surge of water rushing away from you. The water forms a flat, 5-foot-thick, 10-foot-high wall of water between 5 and 15 feet wide (you decide). It moves 60 feet in a direction of your choice along the struck surface, extinguishing all non-magical fires, carrying along unattended objects of 1 Bulk or less, and pushing larger objects. The wave moves another 60 feet in the same direction at the start of your next turn, then vanishes. Large or smaller creatures in the area or that enter the area the wave moves through must attempt a Fortitude save.\nSuccess The creature is unaffected.\nFailure The creature is knocked Prone. If the creature was Swimming, it gets a critical failure instead.\nCritical Failure The creature is pushed 20 feet in the wave's direction, is knocked Prone, and takes 3d6 bludgeoning damage.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "until the start of your next turn",
      "defense": "fortitude save",
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
    "contentId": "pf2e:spell:spells-srd:rime-slick",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Popa5umI3H33levx",
      "slug": "rime-slick",
      "publicationTitle": "Pathfinder #151: The Show Must Go On",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:9a76905dc9b37d7df6498087cbee14165e8f8ce742164adc78c9c1dc53321c9e",
    "translatableHash": "sha256:575edd9be8e44936f80ef2a320575c134ad7751644f0d8ebfac0e0b37ab7ffad",
    "data": {
      "schemaVersion": 1,
      "name": "Rime Slick",
      "rank": 2,
      "rarity": "uncommon",
      "traits": [
        "cold",
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You call down a chill wind. When you Cast this Spell, you deal 2d4 cold damage to each creature in the area (basic Reflex save). If a creature in the area critically fails its Reflex save and was standing, it also falls Prone.\nYou also create a layer of ice on all surfaces in the area, which become difficult terrain. Unattended objects in the area become slick with ice, and picking them up requires a successful Reflex save or Acrobatics check against your spell DC. The ice melts on any object that takes fire damage as well as in any square included in the area of a higher-rank spell or effect with the fire trait.\nHeightened (5th) The damage increases to 8d4 cold damage and the area is a 30-foot burst.\nHeightened (8th) The damage increases to 14d4 cold damage and the area is a 60-foot burst.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "",
      "area": "15 burst",
      "duration": "1 minute",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "2d4",
          "type": "cold",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (5th) The damage increases to 8d4 cold damage and the area is a 30-foot burst.\nHeightened (8th) The damage increases to 14d4 cold damage and the area is a 60-foot burst."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:breath-of-drought",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Wt94cw03L77sbud7",
      "slug": "breath-of-drought",
      "publicationTitle": "Pathfinder #151: The Show Must Go On",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/breath-of-drought.webp"
    },
    "sourceHash": "sha256:10bedc82d76d865b25eb33faa1efbfa89e0d5952e532bfacd58f8618ef8d56bc",
    "translatableHash": "sha256:e1f401493931873bb2cf0bb1d729b0753e562a32acb4e395ebda9ceac0ac92d8",
    "data": {
      "schemaVersion": 1,
      "name": "Breath of Drought",
      "rank": 2,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "fire",
        "manipulate"
      ],
      "traditions": [
        "primal"
      ],
      "description": "You fill the area with an oppressive, arid swelter that overwhelms creatures with heat exhaustion. Objects are unaffected. Each creature in the area when the spell is cast or that ends its turn in the area afterward must attempt a Fortitude save. Water creatures and plant creatures use the outcome one degree of success worse than the result of their saving throw. Creatures whose bodies contain no significant moisture (such as fire elementals) are immune to breath of drought.\nSuccess The creature is unaffected.\nFailure The creature is Sickened 1.\nCritical Failure The creature is Sickened 2.\nHeightened (4th) Once per round when you Sustain the Spell, you can move the center of the burst to a new location within range.\nHeightened (7th) As the 4th-rank version, except the range is 120 feet and the area is a 20-foot burst.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "",
      "area": "10 burst",
      "duration": "sustained",
      "defense": "fortitude save",
      "damage": [],
      "heightening": "Heightened (4th) Once per round when you Sustain the Spell, you can move the center of the burst to a new location within range.\nHeightened (7th) As the 4th-rank version, except the range is 120 feet and the area is a 20-foot burst."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:sudden-bolt",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "zK0e9d9DSnxC4eAD",
      "slug": "sudden-bolt",
      "publicationTitle": "Pathfinder #151: The Show Must Go On",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/sudden-bolt.webp"
    },
    "sourceHash": "sha256:fc96ef03789f006a4e09ffb9e493336c4584d68db2e802e9d6870f8d0fe17100",
    "translatableHash": "sha256:601cf04fafa0573437fb8544c6b6e792acacf805af3e2c3e41b9636488ad8ca5",
    "data": {
      "schemaVersion": 1,
      "name": "Sudden Bolt",
      "rank": 2,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "electricity",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You call down a small bolt of lightning on the target, dealing 4d12 electricity damage.\nHeightened 1 The damage increases by 1d12.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "1 creature or object",
      "area": null,
      "duration": "",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "4d12",
          "type": "electricity",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 1d12."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:unseasonable-squall",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "TT9owkeMBXJxcERB",
      "slug": "unseasonable-squall",
      "publicationTitle": "Pathfinder #151: The Show Must Go On",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/unseasonable-squall.webp"
    },
    "sourceHash": "sha256:3bbcd1a1595619eb85791d84d393d38439f93453073d7cddc5cac8240c69209d",
    "translatableHash": "sha256:9e013dae6e5099893683834d7e4378c7a352f5fe489addcd5d0844c7888685f8",
    "data": {
      "schemaVersion": 1,
      "name": "Unseasonable Squall",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "air",
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You issue a blast of sudden wind that ripples outward from the center of the burst. The wind extinguishes small non-magical fires, disperses fog and mist, scatters objects of light Bulk or less, and pushes unsecured objects of 1 Bulk or less 5 feet away from the spell's origin point. Each Medium or smaller creature in the area when you Cast the Spell or that moves into spell's area must attempt a Fortitude saving throw.\nSuccess The creature is unaffected.\nFailure The creature is knocked Prone. If the creature was Flying, it gets a critical failure instead.\nCritical Failure The creature is pushed 30 feet away from the center of the burst, is knocked Prone, and takes 2d6 bludgeoning damage.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "",
      "area": "20 burst",
      "duration": "until the start of your next turn",
      "defense": "fortitude save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:pyrotechnics",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "TUbXnR4RAuYzRx1u",
      "slug": "pyrotechnics",
      "publicationTitle": "Pathfinder #152: Legacy of the Lost God",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:040540b7e6f228c17d73799c8116155f5e782fc0cdb10037821e3833573df030",
    "translatableHash": "sha256:afa199d0c3b06ff873742e377e085ad05b0d1b5f86101571a7bdd587fbbcf9cd",
    "data": {
      "schemaVersion": 1,
      "name": "Pyrotechnics",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "fire",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You turn a fire into either a burst of blinding fireworks or a thick cloud of choking smoke, chosen when you Cast the Spell. The spell targets one fire source, which is immediately extinguished if it is a non-magical fire the size of a campfire or smaller. If the fire source is a creature, the creature takes 1d6 points of cold damage and is not extinguished.\n• Fireworks The targeted fire explodes into a colorful array of flashy, fiery, glowing aerial fireworks in a 20-foot-radius burst. The first time you Sustain the Spell each round, you can cause the area of fireworks to ascend up to 20 feet, but you cannot move the area laterally. Creatures that start their turn within the area of the fireworks must attempt a Fortitude save, and are then temporarily immune for 1 minute.\nCritical Success The creature is unaffected\nSuccess The creature is Dazzled until the end of its next turn.\nFailure The creature is Blinded until the end of its next turn.\nCritical Failure The creature is Blinded for 1 minute.\n• Smoke Cloud Thick smoke billows out from the fire and coalesces into a cloud that spreads to fill a 20-foot-radius burst centered on the targeted fire. Creatures within the smoke cloud take a -4 circumstance penalty to visual Perception checks, and creatures outside the smoke cloud take a -4 circumstance penalty to visual Perception checks to detect creatures or objects within it. The first time you Sustain the Spell each round, you can cause the smoke cloud to descend up to 20 feet, but you cannot move the area laterally. Creatures that start their turn within the smoke cloud must attempt a Fortitude save, and are then temporarily immune for 1 minute.\nSuccess The creature is unaffected.\nFailure The creature is Sickened 1.\nCritical Failure The creature is Sickened 1 and cannot recover from the sickened condition while in the area of the smoke cloud.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "1 fire",
      "area": null,
      "duration": "1 minute",
      "defense": "fortitude save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:favorable-review",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "i7u6gAdNcyIyyo3h",
      "slug": "favorable-review",
      "publicationTitle": "Pathfinder #152: Legacy of the Lost God",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/favorable-review.webp"
    },
    "sourceHash": "sha256:fc62e7537ddacbe6c15c50618275c7f299bef98b6cb2e13ba454353f1c7a45fa",
    "translatableHash": "sha256:2ca9bf06233096bb0b7c9cd2121c87cf6f1f62a038447ce46942fc315c83f26d",
    "data": {
      "schemaVersion": 1,
      "name": "Favorable Review",
      "rank": 4,
      "rarity": "uncommon",
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
      "description": "You enchant a creature to ensure they have only good things to say about your show. Identify a single creature, location, or performance, such as \"Dame Ellendia,\" \"Savories Meats,\" or \"the Theater of the Mind's latest magic show.\" The target must attempt Will save. You can Dismiss the spell.\nCritical Success The target is unaffected and knows you tried to trick it.\nSuccess The target is unaffected but thinks your spell was something harmless instead of favorable review, unless it identifies the spell (usually using Identify Magic).\nFailure The target cannot speak unfavorably about the subject for 1 week. This doesn't change the target's opinion about the subject, but the target's attempts to speak ill of the subject-whether in speech, writing, or other communication-always twist into compliments and praise instead. The target likely becomes aware of this effect quickly and can avoid speaking about the subject entirely if they choose.\nCritical Failure As failure, except the duration is permanent and the target genuinely holds a favorable opinion about the subject, with their attitude toward the creature (or creatures associated with the subject, such as the owner of a location or artists in a performance) becoming two degrees better (for example, Helpful instead of Indifferent).\nHeightened (8th) The range increases to 60 feet and you can target up to 10 creatures.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 creature",
      "area": null,
      "duration": "varies",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened (8th) The range increases to 60 feet and you can target up to 10 creatures."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:clownish-curse",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "S7ylpCJyq0CYkux9",
      "slug": "clownish-curse",
      "publicationTitle": "Pathfinder #152: Legacy of the Lost God",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/clownish-curse.webp"
    },
    "sourceHash": "sha256:de3b3f704e813a1e58cc1866c94e3cfacb7372f05ec3a5d89020fa28bcfed92c",
    "translatableHash": "sha256:aab35061ee1c28e34aa7dbe74895ee37e46b866fd1a5e8b43901c1fe26de3483",
    "data": {
      "schemaVersion": 1,
      "name": "Clownish Curse",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "curse",
        "manipulate",
        "mental",
        "misfortune"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You afflict the target with a curse that causes it to emit ridiculous noises as it moves. Furthermore, the target's hands and feet become awkward and uncoordinated, as though it were wearing oversized gloves and shoes.\nCritical Success The target is unaffected.\nSuccess For 1 round, the target must roll twice and use the worse result whenever attempting an Acrobatics, Stealth, or Thievery check. If the target rolls a failure at an Acrobatics, Stealth, or Thievery check, it gets a critical failure instead.\nFailure As success, but the effect is 1 hour.\nCritical Failure As success, except the effect is permanent.",
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
    "contentId": "pf2e:spell:spells-srd:ravening-maw",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "VDWIZuLOJqwBthHc",
      "slug": "ravening-maw",
      "publicationTitle": "Pathfinder #153: Life's Long Shadows",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:2c2daeea9ab8cf732c5f6155bd11a21393f0026b81f20ba22c3908d6cf3d3099",
    "translatableHash": "sha256:2dfda9c38afc6b9cb2b3c7b591b0df3f69ac2d5f401beb849c87674bb7a99c77",
    "data": {
      "schemaVersion": 1,
      "name": "Ravening Maw",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "evil",
        "healing",
        "manipulate"
      ],
      "traditions": [
        "divine",
        "occult",
        "primal"
      ],
      "description": "You evoke Zevgavizeb's unceasing hunger and inflict it upon your target. The target becomes overwhelmed with cannibalistic hunger and can restore its vitality by feasting on the flesh of the fallen. On its turn, the target can use 2 actions (these actions have the manipulate trait) to cannibalize an adjacent Dying or dead creature. If the cannibalized creature is Dying, it dies. If the cannibalized creature is an ally of the target, the target regains 5d8 HP; otherwise, the target regains 5d4 HP. Certain monsters (such as those whose blood is acidic or magical) might inflict additional effects on those who cannibalize them at the GM's discretion. Once cannibalized, a particular creature's body doesn't have enough meat to cannibalize again. During any round that there's a Dying or dead creature within 30 feet of the target, if the target can't or doesn't cannibalize a creature, the target takes 5d4 mental damage.\nHeightened 1 The amount of HP restored by cannibalizing a creature increases by 1d8 for eating an ally and 1d4 otherwise, and the mental damage increases by 1d4.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "one living creature",
      "area": null,
      "duration": "3 rounds",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened 1 The amount of HP restored by cannibalizing a creature increases by 1d8 for eating an ally and 1d4 otherwise, and the mental damage increases by 1d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:necrotic-radiation",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "29p7NMY2OTpaINzt",
      "slug": "necrotic-radiation",
      "publicationTitle": "Pathfinder #154: Siege of the Dinosaurs",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:266302d3299488c53dfeb6abc6d0f4b076623fe7976db7292c36c208891709fa",
    "translatableHash": "sha256:0c7813a5aa61011b5ec311462dc4e60e802f6c46b9eb452ca8ded6bcdb1b5681",
    "data": {
      "schemaVersion": 1,
      "name": "Necrotic Radiation",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "manipulate",
        "void"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult"
      ],
      "description": "You imbue the touched object or space with slow-acting necrotic radiation. If you cast the spell on an object, any creature ending its turn holding or carrying the object takes 2d6 void damage. If you cast the spell on an area, any creature ending its turn in the area takes 2d6 void damage. You can attempt to use this spell on an attended object by touching the object. If you do, the creature attempts a Reflex save to reduce the effect.\nCritical Success The object is unaffected.\nSuccess The creature pulls the object away quickly. The spell only lasts 1 minute.\nFailure The creature manages to slightly protect the object. The spell lasts 10 minutes.\nCritical Failure The spell lasts the full 24 hours.\nHeightened 2 Increase the radiation's void damage by 1d6",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "one object or one 10-foot-square area",
      "area": null,
      "duration": "24 hours",
      "defense": "reflex save",
      "damage": [
        {
          "formula": "2d6",
          "type": "void",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 Increase the radiation's void damage by 1d6"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:blood-feast",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ES6FkwXXqYr4ujQH",
      "slug": "blood-feast",
      "publicationTitle": "Pathfinder #154: Siege of the Dinosaurs",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/blood-feast.webp"
    },
    "sourceHash": "sha256:934f6dc19df23386d47724980887071e4c7d0b7847ae86151c8877b23912fff4",
    "translatableHash": "sha256:ac4c3f4bc52933b49c18d2bf7c1dbfe6e9e4f47560ffe4873a2e5111336a6135",
    "data": {
      "schemaVersion": 1,
      "name": "Blood Feast",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "attack",
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult"
      ],
      "description": "Your head splits vertically into an enormous maw, which feasts upon the target's blood, dealing 12d6 piercing damage, depending on your spell attack roll. After the spell, your head sews back together as if it had never split apart. You gain temporary Hit Points for 1 minute equal to half the piercing damage the target takes.\nIf you are a gug, increase the piercing damage by 2d6 and increase the Persistent Bleed Damage you deal on a critical hit by 1d8. This spell doesn't alter a gug's appearance.\nCritical Success The creature takes double damage and 1d8 persistent bleed damage.\nSuccess The creature takes full damage.\nFailure You miss and the creature takes no damage.\nHeightened 1 The piercing damage increases by 2d6, and the Persistent Bleed Damage on a critical increases by 1.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [
        {
          "formula": "12d6",
          "type": "piercing",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The piercing damage increases by 2d6, and the Persistent Bleed Damage on a critical increases by 1."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:entrancing-eyes",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Vw2CNwlRRKABsuZi",
      "slug": "entrancing-eyes",
      "publicationTitle": "Pathfinder #154: Siege of the Dinosaurs",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/entrancing-eyes.webp"
    },
    "sourceHash": "sha256:3bf199fe1a9c2355a68f80a174ffc37d4bae455b423e4b19b4ffb5d4a85af973",
    "translatableHash": "sha256:4a17d1d88df68c5be93016f20ab76272d6fffbba7a9a6b20b8af4692fc268b12",
    "data": {
      "schemaVersion": 1,
      "name": "Entrancing Eyes",
      "rank": 7,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate",
        "mental",
        "visual"
      ],
      "traditions": [
        "arcane"
      ],
      "description": "Your eyes glow with an entrancing radiance that captivates those who meet your gaze. Any creature that ends its turn within the emanation must attempt a Will save.\nCritical Success The target is unaffected and becomes immune to this particular casting of the spell.\nSuccess The target is unaffected.\nFailure Until the end of its next turn, the target is Stupefied 2 and Fascinated.\nCritical Failure Until the end of its next turn, the target is Stupefied 4, Fascinated, and can't take reactions. In addition, all creatures and objects other than you are Concealed from the target.\nDuring any round you Sustain the Spell, you can use a single action, which has the manipulate trait, to focus your entrancing eyes on a single creature you can see within 30 feet. This creature must immediately make a Will save against the spell as if it were ending its turn in the emanation. If the creature was already Fascinated by your entrancing eyes before its save, a failed save causes it to be Paralyzed for 1 round. You can't use this action to focus on the same creature more than once per round.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "30 emanation",
      "duration": "1 minute",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:pillars-of-sand",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "qr0HOiiuqj5LKlDt",
      "slug": "pillars-of-sand",
      "publicationTitle": "Pathfinder #155: Lord of the Black Sands",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:e67fb310d1b41e0b93bf7296c9205ee9de7bd16e3d2a6edf56f38c270ada9bc8",
    "translatableHash": "sha256:9193958669cda980a225492cff6f7e4651a0c5596fa953f6ce0b6820b257d6f0",
    "data": {
      "schemaVersion": 1,
      "name": "Pillars of Sand",
      "rank": 5,
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
      "description": "You raise one or more pillars of solid sand from the earth. The total height of the pillars is 30 feet, which must be used in 10-foot increments (for example, you could create three 10-foot-tall pillars, one 20-foot-tall pillar and one 10-foot-tall pillar, or one 30-foot-tall pillar). Each pillar is 5 feet by 5 feet in length and width. The pillars must be conjured on a relatively flat area of natural earthen terrain such as sand, dirt, stone, or clay. Regardless of the terrain, the pillars are always made of tightly compacted sand particles that together become as hard and solid as stone (check (athletics, dc:15, traits:action:climb) to Climb).\nIf a creature occupies the space where you cast this spell, it is carried upward atop the pillar. The creature can attempt a Reflex save (DC equal to the caster's spell DC); on a success, the creature can either attempt to Grab an Edge or move into an adjacent unoccupied square. If the pillar would rise higher than the ceiling, it firmly abuts the ceiling but does not rise any higher. A creature caught between a pillar and a ceiling takes no damage (subject to GM discretion, such as is in the case of stalactites or other hazards) but becomes immobilized. The creature can attempt an Escape check to free itself, but it must thereafter Grab an Edge, Climb down, or fall from the top of the pillar. The Grab an Edge and Escape DCs are the same as the Reflex save.\nAs part of your action to Sustain the Spell, you can choose to either destroy one of your pillars, causing it to immediately crumble into nothing, or create a new pillar, as long as doing so wouldn't exceed the total number of feet of pillar you can create. You can Sustain the Spell two or more times on a single turn to destroy or create a pillar.\nHeightened 1 The total height of the pillars increases by 10 feet, but must still be used in 10-foot increments (this also increases the total number of pillars that can be created by one).",
      "castingTime": "3 actions",
      "range": "120 feet",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 The total height of the pillars increases by 10 feet, but must still be used in 10-foot increments (this also increases the total number of pillars that can be created by one)."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:blightburn-blast",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "EgkypvUZIZkx1UlQ",
      "slug": "blightburn-blast",
      "publicationTitle": "Pathfinder #155: Lord of the Black Sands",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:b118141e1fbceb6b88363dcf6cbe174eae8ddddeb2bee07feaa87674606e6863",
    "translatableHash": "sha256:964b26b6a938ba3f69d34d8bf79d673fbe0e39e33ebf402f4b21e3ae12e26526",
    "data": {
      "schemaVersion": 1,
      "name": "Blightburn Blast",
      "rank": 7,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "disease",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult",
        "primal"
      ],
      "description": "You channel a blast of powerful blightburn radiation from your hands. You deal 4d6 poison damage to creatures in the area. Creatures who fail their save are afflicted with stage 1 of blightburn sickness (on a critical failure, the creature moves immediately to stage 2). The level of blightburn sickness caused by this spell is equal to twice the spell's rank, and the disease's save DC uses the caster's DC.\nBlightburn Sickness (uncommon, disease) Level 15\nThe ceiling of the vault of the Black Desert is studded with deadly crystals that glimmer like stars above the dark sands. These crystals are radioactive and flood the vault with lethal energy. Creatures other than those native to the vault or who have survived there for a long time develop a disease called blightburn sickness.\nCreatures native to the Black Desert are immune, as are creatures who are affected by blightburn sickness but recover from it. The target can't recover from the disease's drained or sickened condition except by magic.\nThe surest way to avoid contracting blightburn sickness is by wearing a blightburn ward, a piece of protective jewelry often found among urdefhans' gear or for sale in Shraen.\nSaving Throw DC 32 Fortitude\nOnset 1d4\nStage 1 Drained 1 (1 day)\nStage 2 Drained 1 and Sickened 1 (1 day)\nStage 3 Drained 2 and Sickened 2 (1 week)\nStage 4 Drained 3 and Sickened 3 (1 month)\nStage 5 Drained increases by 1 (1 year)",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "15 cone",
      "duration": "",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "4d6",
          "type": "poison",
          "kind": "damage"
        }
      ],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:control-sand",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "oahqARSgOGDRybBQ",
      "slug": "control-sand",
      "publicationTitle": "Pathfinder #155: Lord of the Black Sands",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:923ddc2507de86a383a8a7c2edc7fbdca5cfe3e27995506c31adcba627de8ed1",
    "translatableHash": "sha256:455fb77cdbb0f9b73e83fbd18186dc06cb581e8122d0d5f0bf7d2fd9335063f8",
    "data": {
      "schemaVersion": 1,
      "name": "Control Sand",
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
      "description": "You whip up a small sandstorm around your body. When a creature starts its turn in the area or moves into the area, it must succeed at a Fortitude save or become dazzled for as long as it remains in the area; it is then temporarily immune to this dazzling effect for 10 minutes.\nChoose one of the following additional effects when you cast this spell. On subsequent rounds, you can switch to a different effect once per round as a free action triggered by sustaining the spell.\n• Sand Shield You create a magical shield made of sand. The sand shield provides no benefit to AC, but it does allow you to use the Shield Block reaction and acts as a shield for this purpose. The sand shield has Hardness 14, 21 Hit Points, and no Broken Threshold; when the shield's HP are reduced to 0, you can't use its Shield Block reaction again until the next time you Sustain the Spell and choose the sand shield effect.\n• Sandblast You direct a jet of sand at a single target. One creature of your choice within 30 feet takes 8d6 slashing damage (basic Reflex save). On a critical failure, the creature is also Dazzled for 1 minute.\n• Sandstorm The area of the spell expands to a 30-foot emanation, and any creature that starts its turn in the area or moves into the area takes 6d4 slashing damage (basic Reflex save) and must hold its breath or begin suffocating.",
      "castingTime": "2 actions",
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
    "contentId": "pf2e:spell:spells-srd:deluge",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "8fEfjvC01gNclDKJ",
      "slug": "deluge",
      "publicationTitle": "Pathfinder #156: The Apocalypse Prophet",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/deluge.webp"
    },
    "sourceHash": "sha256:1c8b5ce6045503602a93fd99f4f7d4f6ece136492631bd67f45b14d7298a485b",
    "translatableHash": "sha256:c06b0e714ecfaf7642321c0fe5997f8bf9edafeedc1dec2e5e604fb896668a17",
    "data": {
      "schemaVersion": 1,
      "name": "Deluge",
      "rank": 8,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate",
        "water"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You unleash a catastrophic downpour in the area that vanishes an instant later. All flying creatures in the area descend 50 feet or until blocked by the ground or firm surface. Each creature whose descent was blocked by the ground or firm surface takes bludgeoning damage equal to the number of feet it fell (the creature does not also take falling damage) and is knocked Prone. Creatures on the ground, including flying creatures forced to the ground by the spell, must succeed at a Reflex save or be pushed 50 feet away from the center of the area.\nFlimsy structures in the area collapse. The GM can determine other large-scale effects that result from the deluge.\nHeightened 1 The area increases by 10 feet, and flying creatures fall an additional 10 feet.",
      "castingTime": "2 actions",
      "range": "500 feet",
      "target": "",
      "area": "40 burst",
      "duration": "",
      "defense": "reflex save",
      "damage": [],
      "heightening": "Heightened 1 The area increases by 10 feet, and flying creatures fall an additional 10 feet."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:devour-life",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "PgLvO8UNHSj5f61m",
      "slug": "devour-life",
      "publicationTitle": "Pathfinder #156: The Apocalypse Prophet",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/devour-life.webp"
    },
    "sourceHash": "sha256:6e8743a7417bd874fe32f1fa96dc1c608ec8bc1d6d8cc80637cc5b24b7ecd115",
    "translatableHash": "sha256:908b663c540860e6a6d2eda329d342c59e7a87d97f575b5b93c1ae2673a1b63a",
    "data": {
      "schemaVersion": 1,
      "name": "Devour Life",
      "rank": 8,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "death",
        "healing",
        "manipulate",
        "void"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "You attempt to utterly consume the target's life force. The target takes 60 void damage with a basic Fortitude save. If this damage reduces the target to 0 Hit Points, it dies immediately. You regain Hit Points equal to half the void damage the target takes (after applying resistance and the like). Any excess healing is gained as temporary Hit Points, which you lose after 1 minute.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 living creature",
      "area": null,
      "duration": "",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "60",
          "type": "void",
          "kind": "damage"
        }
      ],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:prying-survey",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "pt3gEnzA159uHcJC",
      "slug": "prying-survey",
      "publicationTitle": "Pathfinder #156: The Apocalypse Prophet",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/prying-survey.webp"
    },
    "sourceHash": "sha256:162047276a2d9a136a8b53310444e55c8721504a6966fdbc655bb84f084a2175",
    "translatableHash": "sha256:4af248c028695436b86a8d0a68fa2e3097edd2932b901689d125d9b9f39541e5",
    "data": {
      "schemaVersion": 1,
      "name": "Prying Survey",
      "rank": 8,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate",
        "scrying"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You create eight invisible, floating eyes, each about 3 inches in diameter, that scan the area around you, transmitting rough impressions of the environment. The eyes constantly examine and send you summaries of their findings. They are solid and can't move through barriers, and they don't follow routes that they fail to find while Searching. Any damage to an eye destroys it. When all eyes are destroyed, the spell ends.\nAs a single action, which has the concentrate trait, you can concentrate on a location within the area that an eye can reach. An eye travels to that location, and you Seek visually as if you were there. As an exploration activity, you can travel at half speed while continuing to concentrate on the eyes to gain the benefits of both the Scout and Search activities. With the eyes, you can check everything even if you are traveling faster than 300 feet per minute. The eyes use your Perception modifier. You can have only one prying survey in effect at a time.\nHeightened (10th) The area increases to a 500-foot emanation.",
      "castingTime": "1 minute",
      "range": "",
      "target": "",
      "area": "120 emanation",
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (10th) The area increases to a 500-foot emanation."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:undermine-reality",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "YiIOsc8T6E2iDxgh",
      "slug": "undermine-reality",
      "publicationTitle": "Pathfinder #156: The Apocalypse Prophet",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/undermine-reality.webp"
    },
    "sourceHash": "sha256:3f76d1acc06b81f72dbaa0e9a12a25ec5c3ef48236b60c8b801b33f722bd9653",
    "translatableHash": "sha256:bc80b49a75c327e767b4464028c77fcb78e0ac98952c363b97633af5ef378b0b",
    "data": {
      "schemaVersion": 1,
      "name": "Undermine Reality",
      "rank": 8,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "illusion",
        "incapacitation",
        "manipulate",
        "shadow"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You lash a target with tendrils of shadow that steal some of its substance, making it quasi-real. As long as it is quasi-real, its Strikes deal half damage, it can't critically succeed at any skill check, and creatures attempting saving throws against its spells and effects get a result one degree of success better than they rolled. The target must attempt a Will saving throw.\nCritical Success The target is unaffected.\nSuccess The target is quasi-real until the end of its next turn.\nFailure The target is quasi-real for 1 minute. At the end of each of its turns, it can attempt another Will save, ending the spell on a success.\nCritical Failure The target is quasi-real for an unlimited duration.",
      "castingTime": "2 actions",
      "range": "500 feet",
      "target": "1 creature",
      "area": null,
      "duration": "varies",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:astral-labyrinth",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "BI4iwu3nApyIG0zY",
      "slug": "astral-labyrinth",
      "publicationTitle": "Pathfinder #156: The Apocalypse Prophet",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/astral-labyrinth.webp"
    },
    "sourceHash": "sha256:f7d93a16de9f4089e5b68a4bd38a97ca418be2d7292f637f778cc1700e16a605",
    "translatableHash": "sha256:1fec0cde7d2408bbe591c5ccffa779b7494a51d473326cd99e6c9fc915a1dfff",
    "data": {
      "schemaVersion": 1,
      "name": "Astral Labyrinth",
      "rank": 9,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "incapacitation",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult"
      ],
      "description": "You connect the entire area with an invisible maze of astral energy that interferes with dimensional and mental magic. Choose a point in the area that you can see when you cast this spell. Objects other than force effects and rare metals can't block this spell's area. Astral labyrinth attempts to counteract magical mental effects targeting or including anyone other than the caster in the area, though it has no effect on mental effects that began outside the area or before the spell was cast.\nIn addition, any creature that tries to depart or arrive in a location in the area by teleportation or extradimensional travel (including extradimensional spaces) must attempt a Will saving throw. Summoned creatures must attempt the save when they are summoned, but not when the summoning ends.\nCritical Success The creature is unaffected.\nSuccess The creature is Stunned 1.\nFailure The creature is Stunned 1, you are mentally alerted that something has failed its save against this spell, and the creature arrives in the empty space closest to the point you chose instead of its intended destination.\nCritical Failure The creature is Stunned 3, you get a mental glimpse of its appearance, and the creature arrives in the empty space closest to the point you chose instead of its intended destination.\nHeightened (10th) You and creatures transported by your spells can't get a result worse than success on the saving throw to teleport into or out of the area.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "",
      "area": "80 burst",
      "duration": "1 day",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened (10th) You and creatures transported by your spells can't get a result worse than success on the saving throw to teleport into or out of the area."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:upheaval",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "xxhS66k68u5iIOHC",
      "slug": "upheaval",
      "publicationTitle": "Pathfinder #156: The Apocalypse Prophet",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/upheaval.webp"
    },
    "sourceHash": "sha256:58e9e5734292e25d68c22e9150b0f59c1042a247e937287a246f4866ebe2dd18",
    "translatableHash": "sha256:5a0be1385036db4ef2f0db42dff5ac6d4728ba121e240095deef125652c010b4",
    "data": {
      "schemaVersion": 1,
      "name": "Upheaval",
      "rank": 9,
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
      "description": "The ground in the area shudders and crumbles as huge pillars of stone erupt into the air, rending the terrain around them.\nThe GM might add additional effects in certain areas. Cliffs might collapse, causing creatures to fall, or a river might be blocked and flood the surrounding area.\n• Stone Debris The area becomes difficult terrain.\n• Rising Pillars Pillars of smooth stone rise from your chosen number of 10-foot squares on a surface in the area, ascending up to 60 feet in height. Each pillar stops when it hits a structure or ceiling unless that structure collapses (see below). The DC to Climb or Grab an Edge on a pillar is 30. Each creature on a pillar after it rises must succeed at a Reflex saving throw or fall off the nearest edge (the creature can choose which edge, if several are equally close). A creature on a pillar that is stopped by a structure falls without attempting a save.\n• Structural Collapse Structures and ceilings might collapse. The GM rolls a flat check for each (DC 14 for a sturdy structure, DC 9 for an average structure and most natural formations, all adjusted higher or lower as the GM sees fit). In general, shoddy structures automatically collapse. A collapse deals 11d6 bludgeoning damage to creatures beneath it; each creature caught in a collapse must attempt a Reflex save to avoid it. If the creature is forced to attempt a Reflex save because it was on a rising pillar, it uses the same result.\nCritical Success The creature takes half collapse damage.\nSuccess The creature takes half the collapse damage and falls Prone.\nFailure The creature takes the full collapse damage and falls prone.\nCritical Failure The creature takes the full collapse damage and is Restrained by debris until it successfully Escapes (DC equal to the spell's save DC).",
      "castingTime": "2 actions",
      "range": "500 feet",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:putrefy-food-and-drink",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "CxpFy4HJHf4ACbxF",
      "slug": "putrefy-food-and-drink",
      "publicationTitle": "Pathfinder #158: Sixty Feet Under",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/putrefy-food-and-drink.webp"
    },
    "sourceHash": "sha256:bbbf0bf5fd306d453f6b3b3e5baa85cbba5967a4e6a122f7f3245059f789aa83",
    "translatableHash": "sha256:81d79e369841c9f01d28a0734000ecbd35f531b3a22dbcb33195eb09f3fc2dfa",
    "data": {
      "schemaVersion": 1,
      "name": "Putrefy Food and Drink",
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
      "description": "You cause otherwise edible food to rot and spoil instantly, and water and other liquids to become brackish and undrinkable. Holy Water, Unholy Water, and similar food and drink of significance are spoiled by this spell, unless they are associated with a deity of decay or putrefaction, but it has no effect on creatures of any type, potions, or alchemical elixirs. One cubic foot of liquid is roughly 8 gallons.\nHeightened (2nd) You can target an alchemical elixir with this spell, attempting a counteract check against it. If you succeed, the elixir spoils and becomes a mundane item.\nHeightened (3rd) You can target a potion or alchemical elixir with this spell, attempting a counteract check against it. If you succeed, the elixir or potion spoils and becomes a mundane item.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 cubic foot of clean food or water",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (2nd) You can target an alchemical elixir with this spell, attempting a counteract check against it. If you succeed, the elixir spoils and becomes a mundane item.\nHeightened (3rd) You can target a potion or alchemical elixir with this spell, attempting a counteract check against it. If you succeed, the elixir or potion spoils and becomes a mundane item."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:admonishing-ray",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "uToa7ksKAzmEpkKC",
      "slug": "admonishing-ray",
      "publicationTitle": "Pathfinder #158: Sixty Feet Under",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/admonishing-ray.webp"
    },
    "sourceHash": "sha256:ae4a1f3d36e4f8ee278c7fac2a3dab150d1048d3bee66a6232c261dfe4a1336e",
    "translatableHash": "sha256:5ce5d7e22c46f4f27a8863091523d738774e0208f9537443763ef0a29c6e6ebc",
    "data": {
      "schemaVersion": 1,
      "name": "Admonishing Ray",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "attack",
        "concentrate",
        "manipulate",
        "nonlethal"
      ],
      "traditions": [
        "arcane",
        "divine"
      ],
      "description": "A ray of energy bludgeons your target into submission without causing lasting harm. When you cast this spell, you choose whether the ray feels like a strong punch or slap. Make a spell attack roll. The ray deals 2d6 bludgeoning damage.\nCritical Success The target takes double damage.\nSuccess The target takes full damage.\nHeightened 1 The damage increases by 2d6.",
      "castingTime": "2 actions",
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
      "heightening": "Heightened 1 The damage increases by 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:magical-fetters",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "2ZPqcM9wNoVnpwkK",
      "slug": "magical-fetters",
      "publicationTitle": "Pathfinder #158: Sixty Feet Under",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:d28e74a54e8342b02384bf4468d8bf41e19273b4c87f08f76e1fc2b56fd6fb2d",
    "translatableHash": "sha256:093cc16993ff2eea29776f9f8332940dd71fbef0a685972c8eb3c60735c1ab73",
    "data": {
      "schemaVersion": 1,
      "name": "Magical Fetters",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "incapacitation",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "Ghostly manacles launch from your outstretched hand and clasp around the target's limbs, impeding its movements. The target must attempt a Reflex save.\nCritical Success The target is unaffected.\nSuccess The target is Clumsy 1 and takes a –10-foot status penalty to its Speed for 1 round.\nFailure The target is clumsy 3 and takes a –10-foot status penalty to its Speed for 1 minute.\nCritical Failure As failure, but the target is also Slowed 1 for the duration.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": "reflex save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:maze-of-locked-doors",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "qOeBQyC1z7OScHvP",
      "slug": "maze-of-locked-doors",
      "publicationTitle": "Pathfinder #158: Sixty Feet Under",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:9069849faa1aaff83857b1d4d03c8ca67b28626a0da97b191239342e76884796",
    "translatableHash": "sha256:692bc12d9a22847b8b8de0b42c66c624fed2d8315b928719cdddcfffe469c5dd",
    "data": {
      "schemaVersion": 1,
      "name": "Maze of Locked Doors",
      "rank": 7,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "extradimensional",
        "incapacitation",
        "manipulate",
        "teleportation"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "The target of your spell is drawn into a long, twisting, extradimensional hallway blocked at 30-foot intervals with high-grade duskwood doors (Hardness 20, HP 80, BT 40, check (athletics, dc:30, name:Force Open Duskwood Door, traits:action:force-open) to Force Open) secured with Lock (Average) (check (thievery, dc:25, name:Pick Maze Lock, traits:action:pick-a-lock), 4 successful checks required). A creature trapped within this hallway can escape only when the spell expires, or when they successfully pass through the number of doors determined by their save, either by breaking through the doors or picking the locks (or any combination of these, if the target must pass through multiple doors to escape). Teleportation effects of 6th level or lower are automatically suppressed within the extradimensional hallway; higher-level teleportation effects require the caster to succeed at a counteract check against your spell DC or they fail.\nCritical Success The target is unaffected.\nSuccess The target is trapped for 1 round, or until it bypasses 1 door.\nFailure The target is trapped for 1 minute, or until it bypasses 2 doors.\nCritical Failure The target is trapped for 10 minutes, or until it bypasses 3 doors.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "1 creature",
      "area": null,
      "duration": "sustained",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:imp-sting",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "oryfsRK27jAUnziw",
      "slug": "imp-sting",
      "publicationTitle": "Pathfinder #160: Assault on Hunting Lodge Seven",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/imp-sting.webp"
    },
    "sourceHash": "sha256:c1590f5109296bac28712921ae866e7581df127f1021b6cba06055bf8fc3fd19",
    "translatableHash": "sha256:c5076476842d3a43c6cd6bea5a3ce9a5277d478b32953a45052dcf7271383fed",
    "data": {
      "schemaVersion": 1,
      "name": "Imp Sting",
      "rank": 2,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "evil",
        "manipulate",
        "poison"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "You reproduce an imp's evil, poisonous sting, stabbing at an enemy and possibly affecting them with the devil's benumbing venom. You deal 1d4 piercing damage to the touched creature and afflict the creature with imp venom. If the target takes piercing damage, they also take 1d6 spirit damage and must attempt a Fortitude save.\nCritical Success The target is unaffected.\nSuccess The target takes 1d6 poison damage.\nFailure The target is afflicted with Imp Venom at stage 1.\nCritical Failure The target is afflicted with imp venom at stage 2.\nImp Venom (poison) Level 3\nMaximum Duration 6 rounds\nStage 1 1d6 poison damage and Clumsy 1\nStage 2 1d6 poison damage, Clumsy 1, and Slowed 1 (1 round).",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": "fortitude save",
      "damage": [
        {
          "formula": "1d4",
          "type": "piercing",
          "kind": "damage"
        }
      ],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:swarming-wasp-stings",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "LVwmAH5NGvTuuQSU",
      "slug": "swarming-wasp-stings",
      "publicationTitle": "Pathfinder #160: Assault on Hunting Lodge Seven",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:df2fe6094d211e98ad7b59483dc308ffc80e4a9e94aa2c8c86e4baa987f8c4fd",
    "translatableHash": "sha256:7eae5db3dbbdffbb32dfed5c533ab2e430f32fd67c56acb04792d5b225cb9fbb",
    "data": {
      "schemaVersion": 1,
      "name": "Swarming Wasp Stings",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate",
        "poison"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You manifest a swarm of disembodied wasp stingers that stab creatures in the area, possibly poisoning them. Creatures in the affected area take 1d6 piercing damage. Each creature that takes piercing damage must attempt a Fortitude save.\nCritical Success The target is unaffected.\nSuccess The target takes 2d6 poison damage.\nFailure The target is afflicted with Swarming Wasp Venom at stage 1.\nCritical Failure The target is afflicted with swarming wasp venom at stage 2.\nSwarming Wasp Venom (poison)\nLevel 7\nMaximum Duration 6 rounds\nStage 1 2d6 poison damage and Clumsy 1 (1 round)\nStage 2 3d6 poison damage and Clumsy 2 (1 round)",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "10-foot burst",
      "area": null,
      "duration": "",
      "defense": "fortitude save",
      "damage": [
        {
          "formula": "1d6",
          "type": "piercing",
          "kind": "damage"
        }
      ],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:wyvern-sting",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "IoHxAkK0uGqrgtWl",
      "slug": "wyvern-sting",
      "publicationTitle": "Pathfinder #160: Assault on Hunting Lodge Seven",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/wyvern-sting.webp"
    },
    "sourceHash": "sha256:faa2bbf9ad85d167b16579d387170ab6d54b8772d98e65ba0042714dc5ac060d",
    "translatableHash": "sha256:5c9010047a044f7025a56c1f7ff6b0f47a921de015f7dde24396044c0a7cb792",
    "data": {
      "schemaVersion": 1,
      "name": "Wyvern Sting",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate",
        "poison"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You duplicate the venomous sting of a wyvern. You deal 3d4 piercing damage to the touched creature and afflict it with wyvern venom. If the target takes piercing damage, they must attempt a Fortitude save.\nCritical Success The target is unaffected.\nSuccess The target takes 5d6 poison damage.\nFailure The target is afflicted with Wyvern Venom at stage 1.\nCritical Failure The target is afflicted with wyvern venom at stage 2.\nWyvern Venom (poison) Level 9\nMaximum Duration 6 rounds\nStage 1 5d6 poison damage (1 round)\nStage 2 6d6 poison damage (1 round)\nStage 3 8d6 poison damage (1 round)",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": "fortitude save",
      "damage": [
        {
          "formula": "3d4",
          "type": "piercing",
          "kind": "damage"
        }
      ],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:leng-sting",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "QVMjPfXlpnmeuWKS",
      "slug": "leng-sting",
      "publicationTitle": "Pathfinder #160: Assault on Hunting Lodge Seven",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:ea8d3a080d447efb312a7197806f25482d1fb6a014df2ac9df11cdf88a51fe06",
    "translatableHash": "sha256:3347fc3bf4faac4fe9d6fd720e215a09b4d826d773fa2dc873815d85828fd437",
    "data": {
      "schemaVersion": 1,
      "name": "Leng Sting",
      "rank": 7,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate",
        "poison"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You use the power of nightmares to magically replicate the venomous attack of the aberrant and cunning Leng spiders. You deal 2d6 piercing damage to the touched creature and afflict it with Leng spider venom. If the target takes piercing damage, they must attempt a Fortitude save.\nCritical Success The target is unaffected.\nSuccess The target takes 2d6 poison damage.\nFailure The target is afflicted with Leng Spider Venom at stage 1.\nCritical Failure The target is afflicted with Leng spider venom at stage 2.\nLeng Spider Venom (incapacitation, poison) Level 13\nMaximum Duration 6 rounds\nStage 1 2d6 poison damage and Drained 1 (1 round)\nStage 2 3d6 poison damage and Drained 2 (1 round)\nStage 3 4d6 poison damage, Drained 2, and Confused (1 round)",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": "fortitude save",
      "damage": [
        {
          "formula": "2d6",
          "type": "piercing",
          "kind": "damage"
        }
      ],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:linnorm-sting",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ZMY58Yk5hnyfeE3q",
      "slug": "linnorm-sting",
      "publicationTitle": "Pathfinder #160: Assault on Hunting Lodge Seven",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/linnorm-sting.webp"
    },
    "sourceHash": "sha256:b860738caf61cf90df1b500bc4979e3c141c6dec28ac031ca417b526c5c117b8",
    "translatableHash": "sha256:6c300421c1a86b66b1b32a084cc5cea4b0fdc320f8d8b6e6889dcfa027ea0bd5",
    "data": {
      "schemaVersion": 1,
      "name": "Linnorm Sting",
      "rank": 9,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "fire",
        "manipulate",
        "poison"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You replicate the fiery venom of the tor linnorm and inflict an enemy with the dread dragon's debilitating bite. You deal 2d12 piercing damage to the targeted creature and afflict it with tor linnorm venom. If the target takes piercing damage, they must attempt a Fortitude save.\nCritical Success The target is unaffected.\nSuccess The target takes 8d6 fire damage.\nFailure The target is afflicted with Tor Linnorm Venom at stage 1.\nCritical Failure The target is afflicted with tor linnorm venom at stage 2.\nTor Linnorm Venom (fire, injury, poison) Level 17\nMaximum Duration 10 rounds\nStage 1 8d6 fire damage and Drained 1 (1 round)\nStage 2 12d6 fire damage and Drained 2 (1 round)",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": "fortitude save",
      "damage": [
        {
          "formula": "2d12",
          "type": "piercing",
          "kind": "damage"
        }
      ],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:prismatic-shield",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "AlCFTjSBaCHuRHBv",
      "slug": "prismatic-shield",
      "publicationTitle": "Pathfinder #162: Ruins of the Radiant Siege",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:6e74ed617c7f4d017d412ae5410c29048543299ef326ae0c1a2466fd9d7b39b2",
    "translatableHash": "sha256:380f72195b074faa6f33d2c463cda70afa44646ba8dd82440d9c0ffb8b3be560",
    "data": {
      "schemaVersion": 1,
      "name": "Prismatic Shield",
      "rank": 9,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "light"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "Shield-sized shards of multicolored light manifest in the air around you, each rotating quickly to intercept attacks.\nMelee attacks against you impact a randomly colored shard, subjecting the attacker to a random effect from Prismatic Spray, with a saving throw of the type indicated in that spell.\nThe shards automatically block physical ranged attacks the size of a spear or smaller, such as arrows, bolts, and javelins. You gain a +2 circumstance bonus to your AC against attacks with larger ranged weapons.\nAny spell that targets you requires the caster to succeed at a counteract check against your spell DC, or it fails to affect you.\nSpell Effect: Prismatic Shield",
      "castingTime": "1 action",
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
    "contentId": "pf2e:spell:spells-srd:divinity-leech",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "T5Mt4jXFuh14uREv",
      "slug": "divinity-leech",
      "publicationTitle": "Pathfinder #162: Ruins of the Radiant Siege",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:81c84e45576c8ac4cf859c6192876d036dd47cfd2552a9592606b426189ff2dc",
    "translatableHash": "sha256:8cf9dea8b16beaae3f2b8739738acd7d18c4f8918252e99ecf6a259a92c1992d",
    "data": {
      "schemaVersion": 1,
      "name": "Divinity Leech",
      "rank": 9,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You disrupt the connection between a divine caster or deific servitor and their deity, blocking their use of divine power. If the target fails its save, it is Fatigued.\nFor the spell's duration, whenever the target casts a divine spell, you regain 6d6 healing Hit Points and the target must attempt another Will save with the following effects.\nCritical Success The target is unaffected.\nSuccess Each target of the divine spell has an outcome one degree of success better than the result it rolled.\nFailure The divine spell is lost and target is Stunned 1.\nCritical Failure As failure, but the target is Stunned for 1 round.",
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
    "contentId": "pf2e:spell:spells-srd:worms-repast",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "H4oF5szC7aogqtvw",
      "slug": "worms-repast",
      "publicationTitle": "Pathfinder #163: Ruins of Gauntlight",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/worms-repast.webp"
    },
    "sourceHash": "sha256:1cad04309365c3e1e5d50b952861a44931f284f2849c408c3397122559b4db05",
    "translatableHash": "sha256:4c4e8da2154a3c83096b699d14f19e618bbaf2b2ae15dc8e07a0b93f85788a04",
    "data": {
      "schemaVersion": 1,
      "name": "Worm's Repast",
      "rank": 2,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "occult",
        "primal"
      ],
      "description": "Gnawing worms materialize within the flesh of the target creature, dealing 4d6 piercing damage and 1d6 persistent piercing damage. If the target is a non-skeletal corporeal undead creature, you deal an extra 2d6 persistent piercing damage. The target must attempt a Fortitude save.\nCritical Success The worms writhe away harmlessly and the target takes no damage.\nSuccess The target takes full initial damage but no persistent damage, and the spell ends immediately.\nFailure The target takes full initial and persistent damage and is Off-Guard due to the pain for as long as it takes persistent damage.\nCritical Failure As failure, but the target takes double the initial damage and is also Slowed 1 by the pain for as long as it takes persistent damage.\nHeightened 2 The initial and persistent damage increase by 2d6 and 1d6, respectively",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 corporeal creature",
      "area": null,
      "duration": "see description",
      "defense": "fortitude save",
      "damage": [
        {
          "formula": "4d6",
          "type": "piercing",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The initial and persistent damage increase by 2d6 and 1d6, respectively"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:daydreamers-curse",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "dARE6VfJ3Uoq5M53",
      "slug": "daydreamers-curse",
      "publicationTitle": "Pathfinder #164: Hands of the Devil",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/daydreamers-curse.webp"
    },
    "sourceHash": "sha256:d1f60b5dbf65fccb632ffca2bca84c19cefc837f44192455a6ad23c7946429a0",
    "translatableHash": "sha256:907d60ed17b07a6a4045b9fb83ba9fdbeae30ca811a1315fe5d3ccbdc64817d9",
    "data": {
      "schemaVersion": 1,
      "name": "Daydreamer's Curse",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "curse",
        "manipulate",
        "mental",
        "misfortune"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You impose a curse upon the target that renders it easily distracted and unable to focus its thoughts on tasks that demand insight or discernment. The target must attempt a Will save.\nCritical Success The target is unaffected.\nSuccess For 10 minutes, the target must roll twice and use the worse result whenever attempting a Medicine, Nature, Perception, or Survival check. If the target critically succeeds at a Perception check or skill check to perform an action with the concentrate trait, the target gets a success instead.\nFailure As success, but the effect is permanent.\nCritical Failure As failure, except the target treats the outcomes of all checks with the concentrate trait as one degree of success worse than the result it rolled (a critical success becomes a success, a success becomes a failure, and a failure becomes a critical failure).",
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
    "contentId": "pf2e:spell:spells-srd:call-the-blood",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "S1Msrwi990FE7uMO",
      "slug": "call-the-blood",
      "publicationTitle": "Pathfinder #165: Eyes of Empty Death",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/call-the-blood.webp"
    },
    "sourceHash": "sha256:a44d3358fa34f031d3cc69b2455411ac0214df3f2c75cf4552de9e22082ac277",
    "translatableHash": "sha256:e1c75819728c26a1fd93cce63b74334d4dcedd6fd1aa33d613aa199c70ef0e44",
    "data": {
      "schemaVersion": 1,
      "name": "Call The Blood",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "death",
        "manipulate",
        "void"
      ],
      "traditions": [
        "arcane",
        "occult",
        "primal"
      ],
      "description": "With a word and gesture, you cause streams of blood to erupt from the target's mouth, nostrils, ears, or other facial openings and come rushing into your mouth. You deal 8d4 void damage to the target.\nIf the target takes damage, its blood flows into your mouth. If you're a living creature and don't have void healing, you're Sickened 2. If you're undead (or living but have void healing), you can choose to either gain temporary Hit Points equal to half of the void damage the target takes (after applying resistance and the like) and become Quickened for 1 round, or forgo the temporary Hit Points and become quickened for 1 minute. You can use this extra action only to Step, Stride, or Strike. You lose any remaining temporary Hit Points after 1 minute.\nHeightened 1 The damage increases by 2d4.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "1 living creature",
      "area": null,
      "duration": "",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "8d4",
          "type": "void",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 2d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:ectoplasmic-expulsion",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "PgDFDvX64eswapSS",
      "slug": "ectoplasmic-expulsion",
      "publicationTitle": "Pathfinder #165: Eyes of Empty Death",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/ectoplasmic-expulsion.webp"
    },
    "sourceHash": "sha256:0e80271273a88f9724b30441617c45ef9d347330b8d665541a469f54d63ef619",
    "translatableHash": "sha256:33a73c44405121e89ff335b2a50ad4275678eda34b6d23aac3def3cea100551f",
    "data": {
      "schemaVersion": 1,
      "name": "Ectoplasmic Expulsion",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "occult"
      ],
      "description": "You call upon tendrils of ephemeral ectoplasm to pass through the target and carry away a harmful psychic affliction. You immediately attempt to counteract a single effect on the target with the emotion or possession trait, or an effect giving the target the Controlled or Fascinated condition. If you fail to counteract the effect, you nevertheless set up a resonance that allows the target to more ably escape the effect on its own; for the next hour, the target gains a +2 status bonus to Will saves to shrug off the effect you failed to counteract (such as Will saves to shake off control by the Possession spell).",
      "castingTime": "3 actions",
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
    "contentId": "pf2e:spell:spells-srd:return-beacon",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ru3YdXajUREbKQDV",
      "slug": "return-beacon",
      "publicationTitle": "Pathfinder #166: Despair on Danger Island",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/return-beacon.webp"
    },
    "sourceHash": "sha256:881660ec24ce1bd0f6e1559f1ccb2ed6ec0c54733a62dae7520aa1894126b87b",
    "translatableHash": "sha256:45a94e375c7f660ceacc3948d3028bf92ce317c9706499b36a7303b3cf9849f6",
    "data": {
      "schemaVersion": 1,
      "name": "Return Beacon",
      "rank": 5,
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
      "description": "You create a unique planar beacon somewhere within the spell's range that remains in place. The beacon is invisible except when detected by detect magic, in which case it looks like a 10-foot-wide tower of bright light stretching into the sky. At any time during the duration of the beacon, you can complete a 1-minute activity, which has the concentrate and manipulate traits, to focus on the beacon and transport yourself and any items you're wearing and holding from your current space to the location of the beacon. Transporting yourself in this way ends the spell. If this would bring another creature with you-even if you're carrying it in an extradimensional container-the beacon collapses, ending the spell, and the transportation attempt fails.\nCasting return beacon while a beacon is active causes the previous return beacon spell to end. If you are not within 1 mile of the beacon, your attempt to transport yourself to the beacon fails. If a solid object is in the same space as the beacon when you transport yourself, you arrive in the nearest open space to the beacon. If there is not an open space within 30 feet of the beacon, your attempt to transport yourself fails, but the beacon remains intact.\nHeightened (7th) The duration is 8 hours and you can transport yourself to the beacon from up to 100 miles away.\nHeightened (8th) The duration is 24 hours and you can transport yourself to the beacon from up to 1,000 miles away. In addition, you can bring 1 willing ally you touch with you when you transport to the beacon.\nHeightened (9th) The duration is 1 week and you can transport yourself to the beacon from anywhere on the same plane. In addition, you can bring up to 4 willing allies you touch with you when you transport to the beacon.\nHeightened (10th) The duration is unlimited and you can transport yourself to the beacon from any distance, even across other planes. In addition, you can bring up to 8 willing allies you touch when you transport to the beacon.",
      "castingTime": "1 minute",
      "range": "30 feet",
      "target": "",
      "area": null,
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (7th) The duration is 8 hours and you can transport yourself to the beacon from up to 100 miles away.\nHeightened (8th) The duration is 24 hours and you can transport yourself to the beacon from up to 1,000 miles away. In addition, you can bring 1 willing ally you touch with you when you transport to the beacon.\nHeightened (9th) The duration is 1 week and you can transport yourself to the beacon from anywhere on the same plane. In addition, you can bring up to 4 willing allies you touch with you when you transport to the beacon.\nHeightened (10th) The duration is unlimited and you can transport yourself to the beacon from any distance, even across other planes. In addition, you can bring up to 8 willing allies you touch when you transport to the beacon."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:aura-of-the-unremarkable",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "VUMtDHr8CRwwr3Mj",
      "slug": "aura-of-the-unremarkable",
      "publicationTitle": "Pathfinder #166: Despair on Danger Island",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:57f884591a4d135ebe8c26f88ead3e02c5fee85249aa42ea45db31c831051e40",
    "translatableHash": "sha256:4962d5b10edad58f9fb48f38478b41d87bc32012c988759c99193f20f3f31505",
    "data": {
      "schemaVersion": 1,
      "name": "Aura of the Unremarkable",
      "rank": 6,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "illusion",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You and allies in the area appear to be completely innocuous to other creatures within the spell's area, regardless of the actions you're committing. For example, if you and your allies are loudly interrogating a local for information or aiming a crossbow at a noble from a balcony, creatures who can see you might not think this is unusual. Non-allied creatures in the emanation must attempt a Will save.\nCritical Success The creature sees your actions as they really are and announces them as such. All other creatures in the area gain a +1 circumstance bonus to their Will saves to recognize your actions as they really are.\nSuccess The creature sees your actions as they really are.\nFailure The creature believes your actions are normal and unworthy of concern.\nCritical Failure The creature believes you are performing other actions entirely, such as helping a local or waving to a noble, as determined by the GM. The creature doesn't have a chance of remembering events normally.\nAny hostile actions by you or your allies against a creature or its allies break the effect of the spell for that creature. So, for example, if an interrogated local's friends or threatened noble's guards saw your actions, they would be unaffected by this spell. When the spell ends (or when affected allies move outside the range of the emanation), observers see things normally but the altered perceptions from earlier events remain in mind. Each mention of the events as noteworthy, such as being questioned about them by an authority figure, grants the target another Will save to break the effect and remember things normally (unless the creature critically failed their save).",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "30 emanation",
      "duration": "1 minute",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:airburst",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "fprqWKUc0jnMIyGU",
      "slug": "airburst",
      "publicationTitle": "Pathfinder #169: Kindled Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:cc2329a02259610e40935ddbb7710eb7234e01d09ed3c893a456e4559bcb6bf7",
    "translatableHash": "sha256:00ca72f5385ee800630ae313d4a2170811cd8d91a77efa174f67933030d55820",
    "data": {
      "schemaVersion": 1,
      "name": "Airburst",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "air",
        "concentrate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "A blast of wind wildly pushes everything nearby. Unattended objects of 1 Bulk or less are pushed 5 feet away from you. Large or smaller creatures must attempt a Fortitude save.\nCritical Success The creature is unaffected.\nSuccess The creature takes a -2 status penalty to checks made during its reactions until the end of your turn.\nFailure As success, and the creature is pushed 5 feet away from you.\nCritical Failure The creature is pushed 5 feet away from you and can't use reactions until the end of your turn.\nHeightened (4th) Increase the area to a 10-foot emanation and increase the distance objects and creatures are pushed to 10 feet.",
      "castingTime": "1 action",
      "range": "",
      "target": "all creatures and unattended objects",
      "area": "5 emanation",
      "duration": "",
      "defense": "fortitude save",
      "damage": [],
      "heightening": "Heightened (4th) Increase the area to a 10-foot emanation and increase the distance objects and creatures are pushed to 10 feet."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:verminous-lure",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Juk3cD5385Ftybct",
      "slug": "verminous-lure",
      "publicationTitle": "Pathfinder #169: Kindled Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:cdbf3dc931a2690d531877054c7c35cd88b8932d8b22a25187835db384f1019a",
    "translatableHash": "sha256:909165e135e0abeb58b40195a019e73c567198a07ee10fdeac9caa05e6aed07a",
    "data": {
      "schemaVersion": 1,
      "name": "Verminous Lure",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate",
        "olfactory"
      ],
      "traditions": [
        "primal"
      ],
      "description": "Upon casting, the target emits a musk that's captivating to certain animals. Tiny animals and animal swarms of any size within range must attempt a Will save. On a failure, non-hostile animals or animal swarms try to touch the target. If hostile, such creatures choose to attack the target instead of other foes, if able to do so without spending additional actions or exposing themselves to additional danger.\nVerminous lure doesn't change animals' attitudes towards the target and is easily overridden by more direct control, such as the Command an Animal action. Animals with imprecise sense can use their scent as a precise sense against the target.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature or object",
      "area": null,
      "duration": "10 minutes",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:friendfetch",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "TjrZGl8z2INgf3vi",
      "slug": "friendfetch",
      "publicationTitle": "Pathfinder #169: Kindled Magic",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/friendfetch.webp"
    },
    "sourceHash": "sha256:a25a8875a07bfe7f959bd056bbcf0fa6e2d7fa0dfb0794a9d889dde5e1e6578a",
    "translatableHash": "sha256:cb942ed20fdeaa99079bf66a9be7d35f3627039236002635ce57b72a96e13fd8",
    "data": {
      "schemaVersion": 1,
      "name": "Friendfetch",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "force",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You shoot out ephemeral, telekinetic strands that drag each target directly toward you, stopping in the closest unoccupied space to you in this path. This is forced movement.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 or 2 willing creatures",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:mind-games",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "29JyWqqZ0thCFr1C",
      "slug": "mind-games",
      "publicationTitle": "Pathfinder #169: Kindled Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:4271ae014ef137301f9844b5d098600a5cad4515cce3436f2a059379965f1850",
    "translatableHash": "sha256:a37ece3ed429a99580ce6fc32ddced9b278c65c2809a3cadba8bbdd8101eef7e",
    "data": {
      "schemaVersion": 1,
      "name": "Mind Games",
      "rank": 2,
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
      "description": "You lock minds with the target, trying to mentally subdue them. The target must attempt a Will save. Each time you Sustain this Spell, the target attempts another Will save.\nCritical Success You are Stunned 1 and the spell ends.\nSuccess The target is unaffected.\nFailure The target is stunned 1.\nCritical Failure The target is Stunned 2.",
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
    "contentId": "pf2e:spell:spells-srd:impeccable-flow",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "8VzbumNyMEdSzZSz",
      "slug": "impeccable-flow",
      "publicationTitle": "Pathfinder #169: Kindled Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:ee17f186680a7138a68daf560bf31701129183172d653ee39e93c646389fa4e7",
    "translatableHash": "sha256:e5ebd97e528908ede13a0bc4fecdfd493d56710c78ecbf4732228f3d5745224f",
    "data": {
      "schemaVersion": 1,
      "name": "Impeccable Flow",
      "rank": 2,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "divine"
      ],
      "description": "You attune yourself to an underlying cosmic order to the world. While you remain in tune with this power, you gain a +1 status bonus to Perception checks, saving throws, and skill checks. If you critically fail any check while under the effects of this spell, the bonus ends and you instead have a -1 status penalty to all checks for the remaining duration.\nSpell Effect: Impeccable Flow\nHeightened (5th) The status bonus increases to +2.\nHeightened (8th) The status bonus increases to +3.\nNote: The automation for the critical failure effect defaults to 10 rounds and must be altered manually.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (5th) The status bonus increases to +2.\nHeightened (8th) The status bonus increases to +3.\nNote: The automation for the critical failure effect defaults to 10 rounds and must be altered manually."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:grave-impressions",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Xrz6wPXDBUr27izR",
      "slug": "grave-impressions",
      "publicationTitle": "Pathfinder #169: Kindled Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:8759c097a04df931728c4f76d4903eb4fba6c71e44c6db1dbd3552481ebf4071",
    "translatableHash": "sha256:3e5b34d68c4403a8e3a1bbb6a9b71a777bee657b2dbf539e0af4eb906a435c2f",
    "data": {
      "schemaVersion": 1,
      "name": "Grave Impressions",
      "rank": 2,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "You project a fragment of your senses into the corpse. While within 500 feet of the corpse (even if it's outside your line of sight or line of effect), you can see from where the target corpse had eyes using your normal visual senses, and you can hear from where the corpse had ears using your normal auditory senses. You can switch between your own vision and hearing, and the corpse's senses, with a single action that has the concentrate trait. If the corpse naturally lacked eyes or hearing organs in life, you cannot use that sense when using this spell. If the corpse is moved from its location, the spell ends.\nHeightened (4th) The duration increases to 1 hour.\nHeightened (6th) The duration lasts until the next time you make your daily preparations.",
      "castingTime": "1 minute",
      "range": "touch",
      "target": "1 corpse",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) The duration increases to 1 hour.\nHeightened (6th) The duration lasts until the next time you make your daily preparations."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:swampcall",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "lbrWMnS2pecKaSVB",
      "slug": "swampcall",
      "publicationTitle": "Pathfinder #171: Hurricane's Howl",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:480bfc95477dc588269db31f167bef351d8dc187aea0bb3edbdab23fa2c00d74",
    "translatableHash": "sha256:3c175096f61cfd4ca0a30a653f5470e9ba0d608e706b2ebc4cc45f4e9981201c",
    "data": {
      "schemaVersion": 1,
      "name": "Swampcall",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "earth",
        "manipulate"
      ],
      "traditions": [
        "primal"
      ],
      "description": "You call upon the spirits of the soil to twist and churn, transforming the terrain in the targeted area into a sodden mess. The area becomes difficult terrain. Creatures in the area when you Cast this Spell must attempt a Reflex saving throw.\nSuccess The creature is unaffected.\nFailure The creature sinks partially into the mud. The creature takes a –10-foot circumstance penalty to its Speeds (except for its swim Speed, if any) and becomes Off-Guard. These effects last until the creature leaves the area or until the end of its next turn, whichever comes first.\nCritical Failure As failure, but the penalty to Speeds (except Swim speed) is -15 feet.\nSpell Effect: Swampcall\nHeightened (3rd) The range increases to 60 feet, and the area increases to a 20-foot burst.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "",
      "area": "10 burst",
      "duration": "1 minute",
      "defense": "reflex save",
      "damage": [],
      "heightening": "Heightened (3rd) The range increases to 60 feet, and the area increases to a 20-foot burst."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:clawsong",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "7OFKYR1VY6EXDuiR",
      "slug": "clawsong",
      "publicationTitle": "Pathfinder #171: Hurricane's Howl",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:1571d51353f2dde2b96f8a6c5475344f7265729d17ecc0feab4eab8849c5b19a",
    "translatableHash": "sha256:51130cc7065cc81a8eace7865d26dbc6711b012218e7a004533af96699282c1c",
    "data": {
      "schemaVersion": 1,
      "name": "Clawsong",
      "rank": 2,
      "rarity": "uncommon",
      "traits": [
        "concentrate"
      ],
      "traditions": [
        "divine",
        "primal"
      ],
      "description": "You sing a fierce prayer, low and growling, and awaken the ancient spirit of a Terwa beast to guide and strengthen the target's unarmed blows.\nThe target's claw attack gains the versatile (piercing) trait, and deals 1d6 slashing damage. If the target's claw attack already deals 1d6 slashing damage, it deals 1d8 instead.\nIf its claw attack already had the versatile (piercing) trait, it gains the deadly 1d8 trait.\nHeightened (4th) The spell can affect up to 6 willing creatures with unarmed claw Strikes.\nSpell Effect: Clawsong",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 willing creature with an unarmed claw Strike",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) The spell can affect up to 6 willing creatures with unarmed claw Strikes.\nSpell Effect: Clawsong"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:gasping-marsh",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "kvZCQz4NoMAfjvif",
      "slug": "gasping-marsh",
      "publicationTitle": "Pathfinder #171: Hurricane's Howl",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:221285f47c66e8c5d2c378f754e326b85fe3557d674a056a02414b4276dd3aec",
    "translatableHash": "sha256:d410ae94c8c2f4af231a643e6c9e56ee1c87e6bfd686e3ff23d80e73e7999510",
    "data": {
      "schemaVersion": 1,
      "name": "Gasping Marsh",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate",
        "poison"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "With a rattling hiss, you create a quickly evaporating mist of invisible poisonous marsh gas to smother creatures in the area. When you Sustain the Spell, the mist dissipates completely from the previous area, and you can select a new area within range to fill with the mist. If you don't Sustain the Spell, the mist dissipates and the spell ends.\nYou deal 4d6 poison damage to each breathing creature that starts its turn in the area. Each affected creature must attempt a Fortitude save.\nThe creature is then temporarily immune to gasping marsh for 1 minute.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage.\nFailure The creature takes full damage and is Sickened 1.\nCritical Failure The creature takes double damage, is Sickened 2, and takes 1d8 persistent poison damage.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "",
      "area": "10 burst",
      "duration": "1 minute",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "4d6",
          "type": "poison",
          "kind": "damage"
        }
      ],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:girzanjes-march",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "pLEhF3f7KRxFo0vp",
      "slug": "girzanjes-march",
      "publicationTitle": "Pathfinder #171: Hurricane's Howl",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:adce282040587062b74cc8de7edea5e8fe5147231e7243bcf8981c7a46a03b45",
    "translatableHash": "sha256:551391cdbc74f8de731cf2803fc4b330a0c784570ae280dd61645da60db66d3b",
    "data": {
      "schemaVersion": 1,
      "name": "Girzanje's March",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "auditory",
        "concentrate",
        "linguistic",
        "mental"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "You sing a prayer for war, inspiring valor in allies who hear your song. Allied creatures who can hear and understand you gain a +1 status bonus to attack rolls, Fortitude saves, and Will saves against mental effects.\nHeightened (7th) The status bonus increases to +2.\nHeightened (10th) The status bonus increases to +3.\nSpell Effect: Girzanje's March",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "30 burst",
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (7th) The status bonus increases to +2.\nHeightened (10th) The status bonus increases to +3.\nSpell Effect: Girzanje's March"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:stormburst",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Ifc2b6bNVdjKV7Si",
      "slug": "stormburst",
      "publicationTitle": "Pathfinder #171: Hurricane's Howl",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/stormburst.webp"
    },
    "sourceHash": "sha256:92ddb678c84aeba13fa61f12fd12b5743a035d2a625e7bdd8e61e74838a98b96",
    "translatableHash": "sha256:8213875136cdcf4f5ddc20107d04cf11bd46171401764f244d228b249821e41f",
    "data": {
      "schemaVersion": 1,
      "name": "Stormburst",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "electricity",
        "manipulate"
      ],
      "traditions": [
        "primal"
      ],
      "description": "Your voice projects like cracking thunder as you summon a localized storm, creating a fearsome surge of lightning and wind that deals 6d6 electricity damage. Each creature must attempt a Reflex saving throw.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage.\nFailure The creature takes full damage and is knocked Prone.\nCritical Failure The creature takes double damage, is knocked prone, and is Stunned 1.\nHeightened (7th) The damage increases to 8d6, and targets who critically fail are Stunned 2.\nHeightened (9th) The damage increases to 10d6, and targets who critically fail are Stunned 3.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "",
      "area": "15 burst",
      "duration": "",
      "defense": "reflex save",
      "damage": [
        {
          "formula": "6d6",
          "type": "electricity",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (7th) The damage increases to 8d6, and targets who critically fail are Stunned 2.\nHeightened (9th) The damage increases to 10d6, and targets who critically fail are Stunned 3."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:mirecloak",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "NIop4eI2i7cKFGad",
      "slug": "mirecloak",
      "publicationTitle": "Pathfinder #171: Hurricane's Howl",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:45c0cfa4c7cdba01421fbec8bb7fcedb72573860cc36894bb8c1c7cfc7fa5423",
    "translatableHash": "sha256:21f3757969ee78ff71debdd44953cbc273d3ae860484fc1bf5322e6ffb4c80cb",
    "data": {
      "schemaVersion": 1,
      "name": "Mirecloak",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "You wrap the targeted creatures in thin, sickly green shrouds that sap information from attackers. The shroud settles about each target's shoulders, granting a +1 status bonus to AC and a +2 status bonus to Stealth checks, both only while the target is in dim light or darkness.\nIf a creature deals damage in melee to or touches a cloaked creature, the cloak wraps around the attacker, temporarily connecting the psyches of the cloaked creature and the attacker and violently prying a random piece of interesting information from the attacker's mind. The attacker takes 2d8 mental damage and must attempt a Will save.\nAfterward, the spell ends for the cloaked creature, and the attacker is temporarily immune to mirecloak for 24 hours.\nCritical Success The attacker is unaffected.\nSuccess The attacker takes half damage.\nFailure The attacker takes full damage and is Sickened 1. In addition, the cloaked creature gleans a piece of information from the attacker's mind. The details and extent of this information are at the GM's discretion.\nCritical Failure As failure, but the attacker takes double damage and is Sickened 2.\nSpell Effect: Mirecloak",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "up to 4 creatures",
      "area": null,
      "duration": "up to 1 minute",
      "defense": "will save",
      "damage": [
        {
          "formula": "2d8",
          "type": "mental",
          "kind": "damage"
        }
      ],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:blackfingers-blades",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "y5pzaNfb17CM1slC",
      "slug": "blackfingers-blades",
      "publicationTitle": "Pathfinder #171: Hurricane's Howl",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:0a5c213ee46584600f5e76c35d76b8a2018cf184b537e5aa6275942ef2402a3f",
    "translatableHash": "sha256:ce604b7b35390acab951ba36449d9a2e657ffa5fd829ddc5d33286452e93d6d9",
    "data": {
      "schemaVersion": 1,
      "name": "Blackfinger's Blades",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate",
        "poison"
      ],
      "traditions": [
        "divine",
        "primal"
      ],
      "description": "You pray for swift and painful death to your enemies and find your and your allies' weapons blessed to deliver just that.\nThe target weapons are coated with Giant Scorpion Venom with a DC equal to your spell DC.\nThe effects remain on a weapon for 1 minute or until the weapon deals damage, whichever comes first.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "up to 4 weapons, each wielded by a separate willing creature within range",
      "area": null,
      "duration": "up to 1 minute",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:gray-shadow",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "rTvNWcKNpOnGklGF",
      "slug": "gray-shadow",
      "publicationTitle": "Pathfinder #171: Hurricane's Howl",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:973cb16c60b98f3db499746e3ecd5d151039433b59a335a56764003064668bfc",
    "translatableHash": "sha256:ed0b944b80d09bdaf0e092b03507300e6f846bef3d839b34ba93a8a577632713",
    "data": {
      "schemaVersion": 1,
      "name": "Gray Shadow",
      "rank": 6,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate",
        "shadow"
      ],
      "traditions": [
        "divine"
      ],
      "description": "You pray over a dying creature, drawing its shadow into your service as long as its owner is stooped at death's door.\nYou summon a Greater Shadow in a space adjacent to the dying creature. The greater shadow has its usual stats, with the following modifications:\n• The greater shadow's shadow hand Strike deals an additional 1d8 poison damage. Spell Effect: Gray Shadow\n• When you Cast a Spell, you can use the greater shadow's location as the origin point instead of your own location. Upon doing so, the greater shadow immediately disappears.\nIf the dying creature targeted by this spell dies or regains consciousness, the greater shadow disappears and this spell ends.",
      "castingTime": "3 actions",
      "range": "30 feet",
      "target": "1 dying creature",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:wall-of-radiance",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "HWrNMQENi9WSGbnF",
      "slug": "wall-of-radiance",
      "publicationTitle": "Pathfinder #172: Secrets of the Temple-City",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:18fff0d88c71d88e63e2538ec53c6be8a345e1bef40fd7170bf64c91d98d3814",
    "translatableHash": "sha256:56dfd7364a9afcbf0fe5e7e52ecfc83da77f4d18c3b8ba24350e9c71ced32aad",
    "data": {
      "schemaVersion": 1,
      "name": "Wall of Radiance",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "fire",
        "light",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You create a thin wall of brilliant light in a straight line up to 60 feet long and 10 feet high. You must create the wall in an unbroken open space so its edges don't pass through any creatures or objects, or the spell is lost. The wall stands vertically and, if you wish, can be of a shorter length or height. Creatures adjacent to the wall are Dazzled. Creatures that move through the wall take 2d6 fire damage (basic Fortitude save) as the concentrated light burns them.\nHeightened (4th) The light makes it difficult to discern creatures on the other side. Creatures are Concealed to other creatures on the opposite side of the wall from them. The fire damage increases to 3d6.",
      "castingTime": "3 actions",
      "range": "30 feet",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "2d6",
          "type": "fire",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (4th) The light makes it difficult to discern creatures on the other side. Creatures are Concealed to other creatures on the opposite side of the wall from them. The fire damage increases to 3d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:temporal-ward",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "kLxJx7BECVgHh2vb",
      "slug": "temporal-ward",
      "publicationTitle": "Pathfinder #173: Doorway to the Red Star",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/temporal-ward.webp"
    },
    "sourceHash": "sha256:091d4f292721effceda4c4a50357e39173348ed1c9ca739cc35c31b0594bbde4",
    "translatableHash": "sha256:95c1b38f994ea3a32caf1f766f92c791f6d6c979e924ff0c70a23bd734d32b8d",
    "data": {
      "schemaVersion": 1,
      "name": "Temporal Ward",
      "rank": 6,
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
      "description": "You ward a target doorway or container with a temporal trap that rewinds the personal timeline of creatures trying to open it. A creature attempting to open a warded doorway or container must attempt a Will save with the below results.\nYou can set a password for the ward. Any creature that attempts to open the target container, or to open or pass through the target doorway without speaking the password must attempt a save as normal.\nThe ward vanishes automatically once the spell's duration ends, but can be removed before then as if it were a magical trap, using your spell DC for both the Perception check to notice it and Thievery check to disable it. Both checks require the creature attempting them to have expert proficiency in order to succeed.\nYou can Dismiss temporal ward. The maximum number of temporal wards you can have active at a time is equal to your spellcasting ability modifier.\nCritical Success The creature is unaffected and opens the doorway or the container as normal.\nSuccess The creature experiences a brief moment of déjà-vu in which they're convinced they already opened the door. They must use an additional action to open the door. If they can't or don't want to do so, the action or activity they used to open the door or container is wasted, and the door or container remains closed.\nFailure The creature is thrown briefly backwards in time. The action or activity they used to open the door or container is wasted and they're returned to the position they were located at during the start of their turn. Their turn then ends.\nCritical Failure As failure, but the temporal displacement also causes the creature to lose their bearings, making them Confused for 1 minute.\nHeightened (10th) The temporal ward has an unlimited duration, until it is counteracted, Dismissed, or Disarmed.",
      "castingTime": "3 actions",
      "range": "touch",
      "target": "1 container or doorway",
      "area": null,
      "duration": "10 minutes",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened (10th) The temporal ward has an unlimited duration, until it is counteracted, Dismissed, or Disarmed."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:return-to-essence",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "v8VnSMzaSYwkq6c7",
      "slug": "return-to-essence",
      "publicationTitle": "Pathfinder #173: Doorway to the Red Star",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:92f46ae0ba76cca293c8880aee0e729396b623d8adeda406c41172e39beb2a78",
    "translatableHash": "sha256:83846091ad323cd6b2fabd511f8a031be095fec6d1fb6777fd39a10806f77758",
    "data": {
      "schemaVersion": 1,
      "name": "Return To Essence",
      "rank": 7,
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
      "description": "You unravel the magic of a spell that affects a container, door, or lock, converting it into energy you can repurpose to power your own spells.\nAttempt a counteract check against the target spell or magical effect that wards or seals a doorway or chest, such as Lock, or against a spell or effect that deals damage or delivers secondary effects when it's opened, such as Rune Trap. If you succeed, you recover its energy, restoring one of your expended spell slots of 3rd rank or lower.\nHeightened (8th) You can restore an expended spell slot of 4th rank or lower.\nHeightened (9th) You can restore an expended spell slot of 5th rank or lower.\nHeightened (10th) You can restore an expended spell slot of 6th rank or lower.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "one magically sealed or warded doorway or chest",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (8th) You can restore an expended spell slot of 4th rank or lower.\nHeightened (9th) You can restore an expended spell slot of 5th rank or lower.\nHeightened (10th) You can restore an expended spell slot of 6th rank or lower."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:pack-attack",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "eW7DqGEvU50CDHqc",
      "slug": "pack-attack",
      "publicationTitle": "Pathfinder #175: Broken Tusk Moon",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:85f11a4e285cf3ac9fc5fb7a9f42811b1c6b7737ce1a7068ad307039e5b33309",
    "translatableHash": "sha256:94cf78b945d9e83adfec91e8271283e615e41a22b0b170bba1e7f30eb1fbfb35",
    "data": {
      "schemaVersion": 1,
      "name": "Pack Attack",
      "rank": 2,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "occult",
        "primal"
      ],
      "description": "You and one other target gain an uncanny coordination that helps you take down foes. You and the other target flank any enemy to which you are both adjacent, whether or not you are on opposite sides of the enemy's space.\nHeightened (5th) The spell can target you and up to 4 willing creatures touched.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "you and 1 willing creature",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (5th) The spell can target you and up to 4 willing creatures touched."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:impart-empathy",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "VJW3IzDpAFio7uls",
      "slug": "impart-empathy",
      "publicationTitle": "Pathfinder #175: Broken Tusk Moon",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:721b5f38fb35dcbd07be411a372445289837b0470f4b044aa84878c0b551aca0",
    "translatableHash": "sha256:35c76c266b623b3709b1bc448b82d7f7dbe0bf58837fc5b9741e23a6f9563b8f",
    "data": {
      "schemaVersion": 1,
      "name": "Impart Empathy",
      "rank": 2,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "emotion",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "occult",
        "primal"
      ],
      "description": "You expand the target's ability to understand social cues that are normally beyond its comprehension. Any creature to which the target isn't unfriendly or hostile can use Diplomacy to Make an Impression on it and to make very simple Requests of it. This doesn't render the animal any more inclined to help than it otherwise would be.\nHeightened (4th) The spell can also target plants and fungi.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 animal",
      "area": null,
      "duration": "1 day",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened (4th) The spell can also target plants and fungi."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:painted-scout",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "oLylenH2jlP5UbRT",
      "slug": "painted-scout",
      "publicationTitle": "Pathfinder #175: Broken Tusk Moon",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/painted-scout.webp"
    },
    "sourceHash": "sha256:cb9799c90a002996ed7af536a2b76817604ccae0d6d3ef5676f99f4dcea9980e",
    "translatableHash": "sha256:5d9410fd6e23e76a9ffa3bc586ec44ee87c6bc09c16df85fd265778034573776",
    "data": {
      "schemaVersion": 1,
      "name": "Painted Scout",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate",
        "scrying"
      ],
      "traditions": [
        "occult",
        "primal"
      ],
      "description": "You press your hand to the stone, causing hand-drawn scouts to spread out from your fingers. As long as you keep your hand on the wall and Sustain the Spell, you can see, hear, and smell through the painted scout using whatever senses you have (including natural senses like scent or darkvision, or magical effects like See the Unseen). You can move the scout up to your Speed along the wall each time you Sustain the Spell. The scout can move anywhere along the wall to a range of 120 feet as long as its path is unbroken; it treats sharp corners and particularly craggy spots on the wall as difficult terrain. The painted scout is bonded to the wall on which you created it and can't move onto another surface or material.\nYou can spend an action to make the scout Hide or Sneak, and you can roll a Nature or Occultism check in place of the usual Stealth check. The painted scout must be near a suitably obscured nook or cranny to Hide; it can't Hide or Sneak along a flat, featureless wall. If the painted scout is smeared or doused in water, the scout is destroyed and the spell ends.\nHeightened (6th) You create up to five separate painted scouts, and the range to which the scouts can move along the wall increases to 500 feet. Each time you Sustain the Spell, you can move one scout up to your Speed, and you can see, hear, and smell through all five scouts simultaneously. A destroyed scout can't be replaced, and the spell ends if all the scouts are destroyed.",
      "castingTime": "3 actions",
      "range": "touch",
      "target": "a cave wall or other stone surface",
      "area": null,
      "duration": "sustained",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened (6th) You create up to five separate painted scouts, and the range to which the scouts can move along the wall increases to 500 feet. Each time you Sustain the Spell, you can move one scout up to your Speed, and you can see, hear, and smell through all five scouts simultaneously. A destroyed scout can't be replaced, and the spell ends if all the scouts are destroyed."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:bone-spray",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "S708JF3E0kuhuRzG",
      "slug": "bone-spray",
      "publicationTitle": "Pathfinder #176: Lost Mammoth Valley",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:888666ee3afbaa3c70a1fc77736bf9e9a964a3f1d7700f98341a9da9d52448d3",
    "translatableHash": "sha256:7ea1073656f1f4d8be2c987d40a628c6eb6e5f09da81575a7ac6b5379ae07743",
    "data": {
      "schemaVersion": 1,
      "name": "Bone Spray",
      "rank": 2,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "divine",
        "primal"
      ],
      "description": "You fire a torrent of jagged bone shards from your hands, dealing 2d10 piercing damage and 1 persistent bleed damage to all creatures in the area.\nHeightened 1 The piercing damage increases by 1d10 and the persistent bleed damage increases by 1.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "15 cone",
      "duration": "",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "2d10",
          "type": "piercing",
          "kind": "damage"
        },
        {
          "formula": "1",
          "type": "bleed",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The piercing damage increases by 1d10 and the persistent bleed damage increases by 1."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:boneshaker",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "zdNUbHqqZzjA07oM",
      "slug": "boneshaker",
      "publicationTitle": "Pathfinder #176: Lost Mammoth Valley",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:89e30e0e9cdd4ae6774a33f6946571d3635698ff772c15ccc052ba04a9478bb7",
    "translatableHash": "sha256:1fa37c2d02fc522be2c74c26bcd1b92b65e21765b75a815e8a0855b211e27e33",
    "data": {
      "schemaVersion": 1,
      "name": "Boneshaker",
      "rank": 2,
      "rarity": "uncommon",
      "traits": [],
      "traditions": [
        "arcane",
        "divine",
        "primal"
      ],
      "description": "You reach out a hand and seize a creature's skeleton from afar, harming their body and potentially wrenching them by the bones to move them against their will. The number of actions you spend when Casting this Spell determines the spell's effects. Regardless of the number of actions spent to Cast this Spell, the target must attempt a Fortitude save.\n2 (somatic, verbal) You clench your fist, painfully compressing the target's bones and dealing 3d8 bludgeoning damage.\n3 (material, somatic, verbal) As the 2-action version, plus you pull the target's body by their bones, moving them around like an awkward marionette. This movement follows the rules for forced movement.\nCritical Success The target is unaffected.\nSuccess The target takes half damage. If you cast the 3-action version, you can move the target up to 5 feet; it can choose to fall Prone to avoid moving.\nFailure The target takes full damage and is Enfeebled 1. If you cast the 3-action version, you can move the target up to 15 feet; it can fall prone to avoid moving.\nCritical Failure The target takes double damage and is Enfeebled 2. If you cast the 3-action version, you can move the target up to 25 feet, then knock the target prone; if you attempt to move the target to a hazardous location, such as into a pool of acid or off a cliff, it can fall prone to avoid moving.\nHeightened 2 The damage increases by 3d8.",
      "castingTime": "2 or 3",
      "range": "100 feet",
      "target": "1 creature with a skeleton",
      "area": null,
      "duration": "",
      "defense": "fortitude save",
      "damage": [
        {
          "formula": "3d8",
          "type": "bludgeoning",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The damage increases by 3d8."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:far-sight",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ErCsWsqXe8ccRjgO",
      "slug": "far-sight",
      "publicationTitle": "Pathfinder #177: Burning Tundra",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:fe9b9c7405bd0da90365886637adfffe978f20912621088028b5424c9085dede",
    "translatableHash": "sha256:48f70019719c694732fb118bb25665f75233e1f6021bee568e0383902884290d",
    "data": {
      "schemaVersion": 1,
      "name": "Far Sight",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate",
        "visual"
      ],
      "traditions": [
        "occult",
        "primal"
      ],
      "description": "You can see distant objects as if they were closer. You can view creatures, objects, and terrain features that are more than 30 feet away and up to 300 feet away as though they were only 30 feet away. You can view creatures, objects, and terrain features that are 300 feet away or more as though they were only one-tenth as far away. This spell only affects your ability to discern visual details; it doesn't let you treat the objects as actually closer for the purposes of spells, ranged attacks, or otherwise. This spell doesn't affect the range of other visual senses you might have, so if you have a visual sense that extends to only 60 feet, you still can't use it to see things beyond that range, even if they would appear closer with this spell.",
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
    "contentId": "pf2e:spell:spells-srd:elephant-form",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "zjYQyuBNT5VjV4mz",
      "slug": "elephant-form",
      "publicationTitle": "Pathfinder #177: Burning Tundra",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/elephant-form.webp"
    },
    "sourceHash": "sha256:efabc7aa80606d8eefe2074374b337c88bb1245ae13fdb0b6a5eff4b1e2c27c4",
    "translatableHash": "sha256:e584435dc384d763c14c78534043042004d31fdf17e9a1e27980362d17d53733",
    "data": {
      "schemaVersion": 1,
      "name": "Elephant Form",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate",
        "polymorph"
      ],
      "traditions": [
        "primal"
      ],
      "description": "You channel the primal forces of nature to transform into a Large battle form, specifically that of a powerful and terrifying elephant or similar creature, such as a mammoth, mastodon, or anancus. This spell has the effects of Dinosaur Form, except you gain the following specific abilities instead of the form-specific abilities of dinosaur form.\n• Speed 40 feet;\n• Melee 1 foot, Damage 2d8 bludgeoning.\n• Melee 1 trunk (reach 10 feet), Effect grabbing trunk;\n• Melee 1 tusk (reach 10 feet), Damage 2d6 piercing.\nGrabbing Trunk A creature up to two sizes smaller that's hit by your trunk is Grabbed. If you succeed at your Grapple check against a creature grabbed by your trunk, you can reposition the creature to another space within your trunk's reach.\nHeightened (5th) Your elephant form is Huge; your trunk and tusk attacks have 15-foot reach, and your foot attack has 10-foot reach. You instead gain 20 temporary HP, an attack modifier of +18, a damage bonus of +6, double the damage dice, and Athletics +21.\nHeightened (7th) Your elephant form is Gargantuan; your trunk and tusk attacks have 20-foot reach, and your foot attack has 15-foot reach. Your AC is 21 + your level and you instead gain 25 temporary HP, an attack modifier of +25, a damage bonus of +15, double the damage dice, and Athletics +25.\nSpell Effect: Elephant Form",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (5th) Your elephant form is Huge; your trunk and tusk attacks have 15-foot reach, and your foot attack has 10-foot reach. You instead gain 20 temporary HP, an attack modifier of +18, a damage bonus of +6, double the damage dice, and Athletics +21.\nHeightened (7th) Your elephant form is Gargantuan; your trunk and tusk attacks have 20-foot reach, and your foot attack has 15-foot reach. Your AC is 21 + your level and you instead gain 25 temporary HP, an attack modifier of +25, a damage bonus of +15, double the damage dice, and Athletics +25.\nSpell Effect: Elephant Form"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:incendiary-fog",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "I2fwPslQth0DTPQD",
      "slug": "incendiary-fog",
      "publicationTitle": "Pathfinder #177: Burning Tundra",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/incendiary-fog.webp"
    },
    "sourceHash": "sha256:38e91b4958c9b36642ad8d9f501b8decc26eca793d44083cb4d3d03ed5e9f7e1",
    "translatableHash": "sha256:651aafcafd4ba448ff99de15f13b096b12e98542fe0d967a3557ee376f5cf3e6",
    "data": {
      "schemaVersion": 1,
      "name": "Incendiary Fog",
      "rank": 5,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "fire",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You summon a cloud of flammable black dust. The cloud functions as Mist. If any open flame or fire effect is within the spell's area when it's cast, or later enters or occurs within the area, the cloud ignites. Creatures in the cloud take 10d6 fire damage (basic Reflex save), and the spell ends.",
      "castingTime": "3 actions",
      "range": "120 feet",
      "target": "",
      "area": "20 burst",
      "duration": "1 minute",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "10d6",
          "type": "fire",
          "kind": "damage"
        }
      ],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:dinosaur-fort",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "FA55Fxf8MBXhje95",
      "slug": "dinosaur-fort",
      "publicationTitle": "Pathfinder #177: Burning Tundra",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:c9e34fa84fd9a6444ab21c09e2b3778acd6d5f5322b5d1f14f91efdb85d72496",
    "translatableHash": "sha256:d99c4c7321f545d8a598595256a0dd54f327718a2786afc0d55da7e3026ce0be",
    "data": {
      "schemaVersion": 1,
      "name": "Dinosaur Fort",
      "rank": 10,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "primal"
      ],
      "description": "You conjure a primeval fort with walls of sharpened wood adorned with dinosaur skin and teeth, up to 300 feet on a side. Each of the four quadrants of the fort is guarded by a Tyrannosaurus. While the tyrannosauruses won't cross into the others' territories, their reach allows them to simultaneously attack an intruder near the center of the fort. The tyrannosauruses leave you and anyone you introduce to them alone but treat anyone else they find in the fort as intruders and prospective snacks. When you prepare spells, you can choose not to recover the spell slot you used to cast this spell. If you do, the fort remains for another 24 hours.\nThe fort must be created on a plot of land free of other structures. It adapts to the natural terrain, adopting the structural requirements for being built there. The fort adjusts around small features, such as ponds or spires of rock, but can't be created on water or other nonsolid surfaces. If created on snow, sand dunes, or other soft surfaces with a solid surface underneath, the foundation reaches solid ground. If created on a solid but unstable surface, such as a swamp or an area plagued by tremors, roll a check (flat, dc:3) each day the fort is present; on a failure, the fort sinks or collapses sometime during that day, and the spell ends.\nThe fort doesn't harm creatures within the area when it appears, and it can't be created within a crowd or in a densely populated area. Any creature inadvertently caught inside the fort when the spell is cast ends up unharmed inside the complete fort and always has a clear path of escape.",
      "castingTime": "10 minutes",
      "range": "500 feet",
      "target": "",
      "area": null,
      "duration": "24 hours (see text)",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:inside-ropes",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Einy9RNTGVq1kY3j",
      "slug": "inside-ropes",
      "publicationTitle": "Pathfinder #181: Zombie Feast",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/inside-ropes.webp"
    },
    "sourceHash": "sha256:7c2d3c29e75de3e1f36196b7fc8c5f8d74436371660da682128457f82ddcc15b",
    "translatableHash": "sha256:17b37cb04a12acb5f9d2d706a730e78dea2480d25616742049d5496cad5e7c56",
    "data": {
      "schemaVersion": 1,
      "name": "Inside Ropes",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cantrip",
        "manipulate"
      ],
      "traditions": [
        "divine",
        "occult",
        "primal"
      ],
      "description": "You pull a large handful of guts from your midsection. Removing these guts doesn't harm you. You can use the guts as 50 feet of rope to help you Climb, and they help attach you to a wall. You move half as quickly as usual while climbing with your guts (minimum 5 feet), but you can attempt a check (flat, dc:5) check whenever you critically fail to prevent a fall. Other creatures can use your guts to climb like a squishy rope, but the guts don't help anyone but you attach to a wall. If you let go of your guts or your guts are damaged, the spell ends.\nHeightened (3rd) You gain a +1 item bonus to Athletics checks to Climb while using your guts.\nSpell Effect: Inside Ropes (3rd Rank)",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (3rd) You gain a +1 item bonus to Athletics checks to Climb while using your guts.\nSpell Effect: Inside Ropes (3rd Rank)"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:shadow-zombie",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "4Gl3WSUqYjVVIsOg",
      "slug": "shadow-zombie",
      "publicationTitle": "Pathfinder #181: Zombie Feast",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/shadow-zombie.webp"
    },
    "sourceHash": "sha256:818a72585a0a054fd0927f74ef0bd0db725936e50aeb7aaec875e7d2cdddb7d9",
    "translatableHash": "sha256:fcd60f6512be47d6f303abfab947ea19f62302604c6c65e5b5f56200aab417f0",
    "data": {
      "schemaVersion": 1,
      "name": "Shadow Zombie",
      "rank": 2,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate",
        "shadow"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult"
      ],
      "description": "You cast a shadow over the target zombie, briefly turning it into shadowy vapor and controlling its movement. While in this vaporous state, the zombie is a minion under your control, gains resistance 8 to physical damage, and is immune to precision damage. It can't cast spells, activate items, or use actions that have the attack or manipulate traits. It gains a fly Speed of 10 feet and can slip through tiny cracks. If the target is already your minion when you cast the spell, it doesn't get a saving throw and becomes vaporous for 10 minutes. If the target is not your minion, it can attempt a Will save to resist the spell. If it's already under someone else's command, the controlling creature also rolls a Will save, and the zombie uses the better result.\nCritical Success The target is unaffected and is temporarily immune for 24 hours.\nSuccess The target is unaffected.\nFailure The target becomes your shadowy minion for 1 minute.\nCritical Failure As failure, but for 10 minutes.\nHeightened (4th) You can target a zombie of level 5 or lower.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 zombie of level 1 or lower",
      "area": null,
      "duration": "varies",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened (4th) You can target a zombie of level 5 or lower."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:swallow-light",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "4Sg6ZngswhphxiBD",
      "slug": "swallow-light",
      "publicationTitle": "Pathfinder #181: Zombie Feast",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/swallow-light.webp"
    },
    "sourceHash": "sha256:e1c94476b4ccb5e0451f1dcc2515979f6873c32f257d5d2034bebf653b6f4478",
    "translatableHash": "sha256:0380ce99a82ae7627a82187dcb6d0e7f7adc3eb93d743f4b59053c62c6dd030b",
    "data": {
      "schemaVersion": 1,
      "name": "Swallow Light",
      "rank": 2,
      "rarity": "uncommon",
      "traits": [
        "cold",
        "concentrate",
        "darkness",
        "manipulate",
        "void"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult"
      ],
      "description": "You draw magical light into your open mouth, consuming it and turning its essence into fuel for a gout of life-draining shadows. Attempt a counteract check against the light effect. If you successfully counteract it, you gain a breath weapon of chilling shadows you can use until the spell ends. Exhaling the breath is a two-action activity. The breath weapon is a 15-foot cone and deals 1d6 cold damage plus 1d6 void damage. Creatures in the area can attempt a basic Reflex save against your spell DC. Once activated, you can't use the breath weapon again for 1d4 rounds.\nHeightened 2 Increase the damage of the breath weapon by 1d6 cold damage and 1d6 void damage.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 magical light effect",
      "area": "15 cone",
      "duration": "1 minute",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "1d6",
          "type": "cold",
          "kind": "damage"
        },
        {
          "formula": "1d6",
          "type": "void",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 Increase the damage of the breath weapon by 1d6 cold damage and 1d6 void damage."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:teeth-to-terror",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "avT46uIH3xYJPSv4",
      "slug": "teeth-to-terror",
      "publicationTitle": "Pathfinder #181: Zombie Feast",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:c182967ac4d42d641e2671dc3ea22f22939792f76e4c7fedb6d24ebc34c39b33",
    "translatableHash": "sha256:85ad8379ed3bebfd9750e302e0dfdf77a4ba91d75b167cfc1f8380aba63553d2",
    "data": {
      "schemaVersion": 1,
      "name": "Teeth to Terror",
      "rank": 2,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "fear",
        "illusion",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "occult"
      ],
      "description": "The target believes its teeth are falling out, crawling along its face, stabbing into its body, and cramming themselves down its throat. The target takes 2d4 mental damage and 1d4 persistent mental damage, depending on its Will save. The target takes a -1 circumstance penalty to Strikes with its jaws or teeth while it is taking persistent mental damage.\nCritical Success The target is unaffected.\nSuccess The target takes half damage and no persistent mental damage.\nFailure The target takes full damage and persistent mental damage and is Frightened 1.\nCritical Failure The target takes full damage and persistent mental damage and is Frightened 3.\nHeightened 2 You can target two additional creatures, the mental damage increases by 2d4, and the persistent mental damage increases by 1d4.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature with teeth",
      "area": null,
      "duration": "1 minute",
      "defense": "will save",
      "damage": [
        {
          "formula": "2d4",
          "type": "mental",
          "kind": "damage"
        },
        {
          "formula": "1d4",
          "type": "mental",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 You can target two additional creatures, the mental damage increases by 2d4, and the persistent mental damage increases by 1d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:vicious-jealousy",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "h6VoHgPC0JCTVzgP",
      "slug": "vicious-jealousy",
      "publicationTitle": "Pathfinder #181: Zombie Feast",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/vicious-jealousy.webp"
    },
    "sourceHash": "sha256:05c98774d9e6a3b30b49ed3d14c04c0b273459b6538a4f77cc12d2aa377f037f",
    "translatableHash": "sha256:49bc9c66e7463a567e5382083e3bfb49b954203709bb3ad110092d15098042ef",
    "data": {
      "schemaVersion": 1,
      "name": "Vicious Jealousy",
      "rank": 2,
      "rarity": "uncommon",
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
      "description": "The target is overcome by deep jealousy and resentment that twists its mind against other creatures. It must attempt a Will save.\nCritical Success The target is unaffected.\nSuccess For 1 round, the target no longer treats anyone as its allies. The spell then ends.\nFailure The target no longer treats anyone as its allies. The target can't take the Aid reaction or any action that would directly benefit another creature, such as casting a beneficial spell on them, though it can still take actions that indirectly benefit other creatures, such as fighting the same foes.\nCritical Failure As failure, and whenever the target starts its turn within reach of a creature it previously considered an ally, it must spend its first action on its turn to berate the creature or otherwise wave it away.\nHeightened (4th) You can target up to 10 creatures.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened (4th) You can target up to 10 creatures."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:horrifying-blood-loss",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "LrRyNA2bo5UwBxud",
      "slug": "horrifying-blood-loss",
      "publicationTitle": "Pathfinder #181: Zombie Feast",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:884573cc1490f496c194b494ae5892ca5753874b87993349db900e7489e97333",
    "translatableHash": "sha256:5e7a549ae5d04665a497e11efbaefb695b5425377062221bf0e5099fd223d272",
    "data": {
      "schemaVersion": 1,
      "name": "Horrifying Blood Loss",
      "rank": 2,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "curse",
        "emotion",
        "fear",
        "mental"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult"
      ],
      "description": "You curse the target, filling it with terror at the loss of its blood. The target must attempt a Will save.\nCritical Success The target is unaffected.\nSuccess The target is Frightened 1.\nFailure The target is Frightened 2. Until it stops bleeding, its frightened value can't decrease below frightened 1.\nCritical Failure As failure, but the target is Frightened 3.\nHeightened (4th) You even terrify witnesses with the copious quantities of blood. You can target up to four creatures as secondary targets. These secondary targets don't need to be bleeding but must be able to see the primary target. Secondary targets must also attempt Will saves, with the same results, except their restriction on decreasing their frightened value depends on whether the primary target is still bleeding.",
      "castingTime": "1 action",
      "range": "30 feet",
      "target": "1 creature taking bleed damage",
      "area": null,
      "duration": "varies",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened (4th) You even terrify witnesses with the copious quantities of blood. You can target up to four creatures as secondary targets. These secondary targets don't need to be bleeding but must be able to see the primary target. Secondary targets must also attempt Will saves, with the same results, except their restriction on decreasing their frightened value depends on whether the primary target is still bleeding."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:umbral-mindtheft",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "uopaLE01meX11Mbw",
      "slug": "umbral-mindtheft",
      "publicationTitle": "Pathfinder #181: Zombie Feast",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/umbral-mindtheft.webp"
    },
    "sourceHash": "sha256:ceedfed50a5e75d7b5ac146752f8aa9e18027419126f8effc7c6f7a5ad9953bd",
    "translatableHash": "sha256:8f1b7e910641525226e13e8819d1178a62026d6450d71c1f36858bbe5000723e",
    "data": {
      "schemaVersion": 1,
      "name": "Umbral Mindtheft",
      "rank": 2,
      "rarity": "uncommon",
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
      "description": "You prepare to steal a broad field of knowledge from another creature, siphoning it from their mind and storing it in a pocket of the Shadow Plane connected to your own mind. During the spell's duration, you can use the Steal action to attempt to take one Lore skill proficiency from a creature instead of Stealing an item. You can also make one attempt to Steal as part of Casting the Spell. If you succeed at your check to Steal a Lore skill, you deal 2d6 mental damage to the target if they were trained in that skill, plus 2d6 mental damage per proficiency rank they have in that skill above trained, as the sudden loss of knowledge leaves an aching absence in the target's mind. Determine the Lore skill at random from among those known by the target; on a critical success, you learn what Lore skills the creature is proficient in and can select the skill rather than choosing at random. If the target isn't trained in any Lore skills, you get nothing, but you can continue to attempt to Steal Lore from other creatures for the remaining duration. The target loses the benefits of its training in that Lore skill, and you gain their proficiency rank in that Lore skill. This effect lasts until your next daily preparations or until you are incapacitated, in which case the Lore siphons back into the target creature's mind from the Shadow Plane, wherever you both may be. As normal, you can Steal only from a target within your reach. Once you've stolen one Lore skill, you can't attempt to Steal more Lore. If you succeed at your Thievery check, you must take the Lore you stole.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "3 rounds",
      "defense": null,
      "damage": [
        {
          "formula": "2d6",
          "type": "mental",
          "kind": "damage"
        }
      ],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:blood-duplicate",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "crf7EL1JtBYwvAEg",
      "slug": "blood-duplicate",
      "publicationTitle": "Pathfinder #182: Graveclaw",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:22bdced0602c45ae0c69e90346189d05a9546a67e94f031d1d0ac9dc3f8f4a69",
    "translatableHash": "sha256:ec5e7fb36b89571f03c571f2d370382d815c59f1adeee23a676fd81bde766ef3",
    "data": {
      "schemaVersion": 1,
      "name": "Blood Duplicate",
      "rank": 2,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "This spell deals you 1 piercing damage as you shape a magical duplicate of the target from your blood; you can't cast this spell if you don't have blood. This spell can't duplicate an item made of precious materials, or materials with a rarity of uncommon or higher. If you're ever more than 5 feet from the duplicate, the spell's duration immediately ends. The Perception DC to recognize the duplicate as false using any sense except touch is equal to 10 + your spellcasting ability modifier + your Crafting proficiency bonus. The item feels wet and obviously fake to the touch. When the spell ends, the item collapses into a puddle of blood that quickly evaporates.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 non-magical object of 1 Bulk or less",
      "area": null,
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:casters-imposition",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "mriIWoSDtJTJIBjX",
      "slug": "casters-imposition",
      "publicationTitle": "Pathfinder #182: Graveclaw",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:46dc6171506b83c441a876b152faf64c0cc4a7e2674faca164fa1346e6a8091a",
    "translatableHash": "sha256:288fe8a6088efd33614cf2321c868342da4abe0fd9c8317082023c7c7ade3b22",
    "data": {
      "schemaVersion": 1,
      "name": "Caster's Imposition",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "curse",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult",
        "primal"
      ],
      "description": "A magical interference prevents the target from contributing to any form of cooperative spellcasting. On a failed save, the target can't participate in any ritual unless they can cast the ritual alone, and they can't access any spells provided by a coven or similar cooperative ability.\nHeightened (4th) Increase the duration to 1 hour.\nHeightened (5th) Increase the duration to 1 day.",
      "castingTime": "3 actions",
      "range": "",
      "target": "1 creature within 60 feet",
      "area": null,
      "duration": "1 minute",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened (4th) Increase the duration to 1 hour.\nHeightened (5th) Increase the duration to 1 day."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:ritual-obstruction",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "h7h0wMxu4WOpveQ3",
      "slug": "ritual-obstruction",
      "publicationTitle": "Pathfinder #182: Graveclaw",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:4bc7143e2995a59118fe57e28ad70f9d058c781142da80cd4c5ed97527648077",
    "translatableHash": "sha256:9028f9821250013502cad3fa4c61bb1e8551885ada4020b00b5bb2aa16ea0e80",
    "data": {
      "schemaVersion": 1,
      "name": "Ritual Obstruction",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "curse",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult",
        "primal"
      ],
      "description": "You establish a zone of magical feedback that makes it impossible to succeed at rituals of this spell's rank or lower in the area. Ritual obstruction ignores all cover, including walls and ceilings, to the extent of its area. Anyone attempting to cast a ritual within the area knows, when they begin to cast the ritual, the area is cursed to impede rituals. Any ritual cast in the area can't have a final result better than failure.",
      "castingTime": "1 minute",
      "range": "",
      "target": "",
      "area": "60 burst",
      "duration": "1 day",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:blind-eye",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "pfFxj4NI5KwO119I",
      "slug": "blind-eye",
      "publicationTitle": "Pathfinder #182: Graveclaw",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:2162ceff9f807265af12b1357eb8aad7b3bdba1d0de7cee9c385ba510a12eff9",
    "translatableHash": "sha256:5b014d02ffda230cc239893220ecec7dac77e0062d9617de5aa2bb3436d67eff",
    "data": {
      "schemaVersion": 1,
      "name": "Blind Eye",
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
      "description": "You enchant a single object, preventing it from being used for magical observation. If you cast this spell on a non-magical item used to cast scrying spells, such as a spell component pouch or a spell focus, the item can't be used to cast the spell. If you cast blind eye on a magical item that can be activated to scry (such as a Crystal Ball or Hag Eye), the item can't be activated for scrying effects. Magical items that are twice blind eye's spell rank or more aren't blocked this way.",
      "castingTime": "1 minute",
      "range": "touch",
      "target": "1 object",
      "area": null,
      "duration": "until the next time you make your daily preparations",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:hags-fruit",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "3KiM09e8DN9AdTPA",
      "slug": "hags-fruit",
      "publicationTitle": "Pathfinder #182: Graveclaw",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/goodberry.webp"
    },
    "sourceHash": "sha256:d87309d6d1727c69b1db2883a8977d0ae393f5897f5f2ac9fad81e80fac41b54",
    "translatableHash": "sha256:900429a37e93d28b1a1dc8ba3447acf389318cdd991c687d6dd47b9579617b45",
    "data": {
      "schemaVersion": 1,
      "name": "Hag's Fruit",
      "rank": 6,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "curse",
        "incapacitation",
        "manipulate",
        "sleep"
      ],
      "traditions": [
        "occult",
        "primal"
      ],
      "description": "You imbue a single piece of fruit with a curse that leaves its victims in a magical sleep. The first person to eat the fruit within the spell's duration is subject to the Curse of Slumber, using your spell DC as the saving throw DC of the curse.\nCurse of Slumber (curse, incapacitation, necromancy, sleep)\nLevel 11\nEffect You fall asleep for 1 round (or permanently on a critical failure) and seem to be dead; a creature must succeed at a check (medicine, dc:30) check to realize you're alive. Noise doesn't awaken you, but taking damage gives you a new saving throw against the curse.",
      "castingTime": "1 minute",
      "range": "touch",
      "target": "1 non-magical fruit",
      "area": null,
      "duration": "1 day",
      "defense": "fortitude save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:elysian-whimsy",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "oPVyu2a0K3aTVIR8",
      "slug": "elysian-whimsy",
      "publicationTitle": "Pathfinder #183: Field of Maidens",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/elysian-whimsy.webp"
    },
    "sourceHash": "sha256:1786e5476a40d35711fd29ccb04bef4f328dd3f439e0249a6020a6fe900c9259",
    "translatableHash": "sha256:e18ac56c654307eb6b5285ee74a42428a7c3fdc0c5e12ca27cc0601b6558a2c8",
    "data": {
      "schemaVersion": 1,
      "name": "Elysian Whimsy",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "incapacitation",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "arcane",
        "divine",
        "primal"
      ],
      "description": "You overwhelm the target with an unexpected and unpredictable desire if it fails a Will save. Roll 1d4 to determine the spell's effect.\n1d4 |\nEffect |\n1 |\nThe target feels a powerful urge to dance. For 1 round, it takes a –5-foot status penalty to its Speeds (-10-foot status penalty on a critical failure), capering and prancing as it moves. |\n2 |\nThe target is compelled to loudly sing a song. Its first action on its next turn must be to Perform a song it knows, or to babble pleasingly if it knows no songs. On a critical failure, the target must use all its actions on its next turn to Perform a song. |\n3 |\nThe target is filled with an irresistible urge to support a nearby creature's entertainment career. Its first action on its next turn must be to prepare to Aid a Perform check for the nearest creature it can see and the target can use the next reaction it gains only to Aid the creature it helped. On a critical failure, it must spend all its actions on its next turn preparing to Aid a Perform check. |\n4 |\nThe target is overcome with a desire to give away its wealth. Its first action on its next turn must be to Interact to pull out a non-magical item of value it is carrying (such as a coin, piece of jewelry, or an item made of precious metal), if it doesn't already have one in hand. It then Releases the valuable item. If the target neither holds nor carries an appropriate item, it instead spends its first action loudly apologizing for having nothing to give. On a critical failure, the target must spend any actions remaining on its turn apologizing for not giving more. |",
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
    "contentId": "pf2e:spell:spells-srd:celestial-accord",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "vZSWzkw0uF4iFWSM",
      "slug": "celestial-accord",
      "publicationTitle": "Pathfinder #183: Field of Maidens",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:4c08297d31ae3d84fc9d9f6dbf2116a7b98ac76063e141a5f951e419211e0215",
    "translatableHash": "sha256:40a26b183e324a9e8b2f635064065f717f2fe88002a80cad86927454c3ea83f6",
    "data": {
      "schemaVersion": 1,
      "name": "Celestial Accord",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "emotion",
        "good",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "You intervene in a heated disagreement between two creatures, encouraging them to put aside their differences and find some common ground. The emotional heat of the prior moment becomes only a memory. Each target must make a Will save. A creature currently engaged in combat can't get a result worse than success, and a target that is subject to hostility from any other creature ceases to be affected by celestial accord.\nCritical Success The creature is unaffected.\nSuccess The creature is filled with doubt about its own intentions and feels an urge to cooperate with the other. It has a -2 status penalty to attack rolls against the other target for 1 round.\nFailure The creature can't make hostile actions against the other target and its attitude toward the other target improves to indifferent for the spell's duration.\nCritical Failure As failure, but the creature's attitude toward the other target improves to friendly for the duration and is indifferent thereafter (until something happens to change that attitude normally).",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "2 creatures that each have an unfriendly or worse attitude toward the other",
      "area": null,
      "duration": "1 minute",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:bralani-referendum",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "SspI4ijjR7N7r4Cc",
      "slug": "bralani-referendum",
      "publicationTitle": "Pathfinder #183: Field of Maidens",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/bralani-referendum.webp"
    },
    "sourceHash": "sha256:a44825aed8d3db861e794d6cbb3856540442fd54f4008177e6591168cd1d5cf9",
    "translatableHash": "sha256:83d695fed59bc74cceaba14a873cb37da6b2c981e7a0d7446387f8eac0602adc",
    "data": {
      "schemaVersion": 1,
      "name": "Bralani Referendum",
      "rank": 2,
      "rarity": "uncommon",
      "traits": [
        "air",
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "divine",
        "primal"
      ],
      "description": "You enforce fair play with punishing zephyrs. When you Cast this Spell, choose one condition from among Clumsy, Drained, Enfeebled, or Stupefied. When a creature in the area inflicts the chosen condition, they take 2d6 slashing damage with a basic Fortitude save. A creature can't take this damage more than once per round. You can Dismiss the spell.\nHeightened 2 Choose one more condition. The slashing damage when a creature inflicts any of the chosen conditions increases by 2d6.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "",
      "area": "20 burst",
      "duration": "1 minute",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "2d6",
          "type": "slashing",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 Choose one more condition. The slashing damage when a creature inflicts any of the chosen conditions increases by 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:procyal-philosophy",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "4cEDhvchskRvxSw6",
      "slug": "procyal-philosophy",
      "publicationTitle": "Pathfinder #183: Field of Maidens",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/procyal-pilosophy.webp"
    },
    "sourceHash": "sha256:07ce32fdd31d8be7b4433e9de50689f53b028dfffd2953623519b70e63a1ba8a",
    "translatableHash": "sha256:f1d22c333b4fbb6d285acdc7c9fb961da9b9bff4b6b7e61b89405c0290e539b8",
    "data": {
      "schemaVersion": 1,
      "name": "Procyal Philosophy",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "auditory",
        "concentrate",
        "good",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult"
      ],
      "description": "The racoon-like visage of a sagacious procyal appears, dispensing helpful advice. The image appears floating next to the target. The image is just a floating magical manifestation and doesn't occupy any space. The procyal offers helpful suggestions, preparing to Aid the target as though the procyal had its own reaction. The procyal uses a bonus equal to your spell DC - 10 for its rolls to Aid.\nOn each of your turns, the procyal prepares to Aid its target again. You can use a free action, which has the concentrate trait, to redirect the procyal image to a different creature, changing the target of the spell. Otherwise, the procyal keeps aiding the same creature for the duration of the spell.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:movanic-glimmer",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "e9tVGZhYW37CtbHA",
      "slug": "movanic-glimmer",
      "publicationTitle": "Pathfinder #183: Field of Maidens",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:360776024672c1001fcac250285c39b69d5b77f79f31177f1296a875040706ed",
    "translatableHash": "sha256:5e18f9f72d6f09dbe585b17e1e511b1dd4f6dca3dfe2ddf9a437010b5db0f82f",
    "data": {
      "schemaVersion": 1,
      "name": "Movanic Glimmer",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "good",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "divine",
        "primal"
      ],
      "description": "You give the target animal a glimmer of awareness, not truly awakening it but allowing it to better understand its surroundings. The target gains a +2 status bonus to Perception checks and Will saves, and any Nature checks to Command the target Animal gain a +1 status bonus from its increased understanding. Additionally, if the target animal has the minion trait, it can take one action each turn even if its master doesn't use an action to Command it, which it can use to perform any basic action it knows. This doesn't prevent a target that was summoned from disappearing if its summoner doesn't Sustain the Spell, but does allow the target to perform one action before disappearing.\nHeightened (8th) You can target up to 5 animals.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 animal",
      "area": null,
      "duration": "until you next perform your daily preparations",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (8th) You can target up to 5 animals."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:radiant-heart-of-devotion",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "yfCykJ6cs0uUL79b",
      "slug": "radiant-heart-of-devotion",
      "publicationTitle": "Pathfinder #183: Field of Maidens",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/radiant-heart-of-devotion.webp"
    },
    "sourceHash": "sha256:d83a8c8030148aa1d086cfbe3abdda02571d946cbf09c82a521f56a0ba6ac21b",
    "translatableHash": "sha256:6fc7d38c8beee6109930890a9e39ab60da80e7147c5522b501f50a2cb849ead7",
    "data": {
      "schemaVersion": 1,
      "name": "Radiant Heart of Devotion",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "light",
        "manipulate"
      ],
      "traditions": [
        "divine",
        "primal"
      ],
      "description": "You speak a fervent prayer for the heavens to assist you and your righteous allies. Your heart begins to glow with a radiance that fills the area with bright light. The spell has the following effects on creatures in the area, based on the creature's alignment on the good-evil axis.\n• Good Creatures Good creatures in the emanation gain a +1 status bonus to attack rolls and their Strikes deal an additional 1d6 spirit damage.\n• Neutral Creatures Neutral creatures that begin their turn in the emanation must succeed at a Will save or be Dazzled for 1 round.\n• Evil Creatures Evil creatures that begin their turn in the emanation must succeed at a Will save or be Blinded for 1 round.\nHeightened 2 The additional spirit damage increases by 1d6.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "20 emanation",
      "duration": "1 minute",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened 2 The additional spirit damage increases by 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:mantle-of-heavens-slopes",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "vF52ktg0wUIAlf57",
      "slug": "mantle-of-heavens-slopes",
      "publicationTitle": "Pathfinder #183: Field of Maidens",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/mantle-of-heavens-slopes.webp"
    },
    "sourceHash": "sha256:52db2ca1659e92be53521c36dd291193e58dc290b0f8893c7b55c080d49c825b",
    "translatableHash": "sha256:4dd3bc8f574f7f95656dfceecdeb30e207928b2b8f682861c484c87e8df6f1dc",
    "data": {
      "schemaVersion": 1,
      "name": "Mantle of Heaven's Slopes",
      "rank": 6,
      "rarity": "uncommon",
      "traits": [
        "manipulate",
        "morph"
      ],
      "traditions": [
        "divine"
      ],
      "description": "You surround yourself in a mantle of heavenly power, invoking the power of the layers of the celestial mountain above. Your body warps and morphs into an angelic form, made of Heaven's light. Upon Casting this Spell, pick two different options below. As a single action, which has the concentrate trait, you can lose one of the options you chose and select a different one (you don't benefit from having the same option selected twice at the same time).\n• Threshold's Walls Glimmering barriers form around you. You gain cover from the barriers.\n• Proelera's Arsenal Shimmering silver pikes surround you, imposing your might on those who would oppose you. You gain an arsenal unarmed attack, which has the reach and shove traits, in the polearm group. Your arsenal attack deals 1d10 piercing damage as its base damage, plus an additional 1d8 spirit damage, and counts as silver.\n• Clarion's Sanctity Your eyes glow with golden light, seeing that which others prefer remain unseen. You gain a +2 status bonus on checks to Recall Knowledge and Sense Motive, and when you succeed at a check to Recall Knowledge about a creature you can see, you can attempt to Sense its Motive as a free action.\n• Requius's Rest Your hands glow with soft white energy that spreads to your wounds. You gain fast healing 2.\n• Illumis's Parlance Your voice echoes like a trumpet. You can be heard clearly up to 200 feet away when you speak, if you choose to project your voice.\n• Iuidica's Verdict Your body pulses with scarlet light, pushing away those judged to be against you. As a free action triggered by succeeding at a Strike, you can attempt to Shove the creature you hit",
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
    "contentId": "pf2e:spell:spells-srd:undertaker",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "z39jFoNJrobyn3MQ",
      "slug": "undertaker",
      "publicationTitle": "Pathfinder #184: The Ghouls Hunger",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/undertaker.webp"
    },
    "sourceHash": "sha256:9869644aac95c4080a237974c5f9c3e8de400180f4e8b9a8d9b6c997ecb529ca",
    "translatableHash": "sha256:f401f2ae73967e184179c7b1f7319c436e0bca58e0c6fd5e414c6216d35d292a",
    "data": {
      "schemaVersion": 1,
      "name": "Undertaker",
      "rank": 9,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "death",
        "evil",
        "manipulate"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "You point your finger toward the target and whisper an epitaph that promises to grace their gravestone in the near future. This spell works best when both you and the target are in contact with solid ground. If either is not in contact with the ground, the target gains a +2 circumstance bonus on their saving throw against the spell, and if both you and the target are not in contact with solid ground, the target gains this bonus and treats the result of their save as one degree of success better than the actual result. The target of undertaker can resist with a Fortitude save.\nCritical Success The target is unaffected.\nSuccess The target takes 40 void damage. If the target is in contact with solid ground, the ground in the target's space shifts and shakes, and is treated as difficult terrain until the start of your next turn.\nFailure The target takes 80 void damage. If the target is in contact with solid ground, the ground in the target's space churns and cracks open into an open but shallow grave. The target is knocked Prone, and that space is treated as difficult terrain until the grave is filled in.\nCritical Failure The target takes 160 void damage. If the target is in contact with solid ground, a grave opens beneath their feet and they fall prone within. The grave then forms a stone sarcophagus-like shell around the victim. This stone shell cannot be opened and must be broken; it has AC 10, Hardness 14, and 80 Hit Points. At the start of your next turn, the grave fills in with soil. If the victim dies while inside this grave, at the next sundown the victim transforms into an evil ghast as the sarcophagus crumbles, allowing the new undead to dig its way up to the surface.",
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
    "contentId": "pf2e:spell:spells-srd:infectious-comedy",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "SE3MddYAUyPKABuF",
      "slug": "infectious-comedy",
      "publicationTitle": "Pathfinder #185: A Taste of Ashes",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/confusion.webp"
    },
    "sourceHash": "sha256:ebd21790d4ba0e8af38bee0401d635d22b1fb4377984497f2df3870f2b1f7a2a",
    "translatableHash": "sha256:a7a16ce4be1ed624bd03a1566cace2dc8eab2b59bf6cc7e52d7207c74fa507f8",
    "data": {
      "schemaVersion": 1,
      "name": "Infectious Comedy",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "emotion",
        "incapacitation",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You tell a magical joke and infect a target with laughter that spreads to those nearby. The first time you Sustain the Spell each round, you can target another creature you can see that is within 30 feet of an affected target. The new target need not be able to see or hear the affected target, as the humor spreads magically. You can't target the same creature more than once with this spell.\nCritical Success The target is unaffected.\nSuccess The target begins giggling and can't use reactions.\nFailure The target is Slowed 1 and can't use reactions.\nCritical Failure The target falls Prone and can't use actions or reactions for 1 round. It then suffers the failure effect.",
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
    "contentId": "pf2e:spell:spells-srd:curse-of-the-spirit-orchestra",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "1VOjUKd1pacI67RZ",
      "slug": "curse-of-the-spirit-orchestra",
      "publicationTitle": "Pathfinder #185: A Taste of Ashes",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/alarm.webp"
    },
    "sourceHash": "sha256:59d30af5df7866709e207b0bcdb5acbac7d7604453268ac97601e2c40b90c47e",
    "translatableHash": "sha256:2e783d4d447812a37558ae23d4b8591ecd362c645c41163a0f590df47c8e7abf",
    "data": {
      "schemaVersion": 1,
      "name": "Curse of the Spirit Orchestra",
      "rank": 7,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "curse",
        "manipulate",
        "misfortune"
      ],
      "traditions": [
        "occult"
      ],
      "description": "You summon an Invisible, insubstantial group of extraplanar musicians who follow the target and play distracting music to hinder its actions. The music the musicians play is as inappropriate to the action as possible (for example, loud drumbeats as the target tries to Sneak or silly children's songs when the target tries to orate in a serious manner). The musicians can't be reasoned with or harmed.\nCritical Success The target is unaffected.\nSuccess Until the start of your next turn, the target must roll twice and use the worse result when it attempts a Diplomacy, Intimidation, Performance, or Stealth check. When the target rolls a critical success on any skill check, it gets a success instead. When the target rolls a failure on any skill check, it gets a critical failure instead.\nFailure As success, but the duration is 1 hour.\nCritical Failure As success, but the duration is unlimited.",
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
    "contentId": "pf2e:spell:spells-srd:ancient-dust",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "OJ91rm1FkJSlf3nk",
      "slug": "ancient-dust",
      "publicationTitle": "Pathfinder #186: Ghost King's Rage",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/glitterdust.webp"
    },
    "sourceHash": "sha256:9e222491c98312f25fc8667ecb943ceae7d9d90108902cc449b4e84505a1a286",
    "translatableHash": "sha256:66025cad5273321f18adbed6c76ec81545b484119cf66137bb8c3653b04e3b2b",
    "data": {
      "schemaVersion": 1,
      "name": "Ancient Dust",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cantrip",
        "concentrate",
        "manipulate",
        "void"
      ],
      "traditions": [
        "arcane",
        "divine"
      ],
      "description": "You cough up a cloud of gray soil, echoing the dust in the graves of Kemnebi's many victims. Each creature in the area takes void damage equal to your spellcasting modifier and 1 persistent void damage depending on its Fortitude save.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage and no persistent damage.\nFailure The creature takes full damage and persistent damage.\nCritical Failure The creature takes double damage and double the persistent damage.\nHeightened 2 The initial void damage increases by 1d6, and the persistent damage increases by 1.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "15 cone",
      "duration": "",
      "defense": "fortitude save",
      "damage": [
        {
          "formula": "1",
          "type": "void",
          "kind": "damage"
        },
        {
          "formula": "0",
          "type": "void",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The initial void damage increases by 1d6, and the persistent damage increases by 1."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:flense",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "WV2aMNN9DO5ZBjSv",
      "slug": "flense",
      "publicationTitle": "Pathfinder #186: Ghost King's Rage",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/rip-the-spirit.webp"
    },
    "sourceHash": "sha256:935dee6a395b17925725648a83f6642ab19c9c520804ea406df5f0ce8c900f78",
    "translatableHash": "sha256:526dcf2afbd92b719d525a62f6bc50daf827d520389b257b1c7e87e195637981",
    "data": {
      "schemaVersion": 1,
      "name": "Flense",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "attack",
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "divine"
      ],
      "description": "With a touch, you strip off the flesh, muscle, and internal organs off your target, leaving only bare bones. The effect depends on whether the target is a living creature, undead creature, or inanimate corpse. A creature or corpse that lacks flesh, muscle, and internal organs is immune to this spell.\nInanimate Corpse The flesh, muscle, viscera, and organs are stripped from the corpse and vanish, leaving only bare bones behind.\nLiving Creature Make a spell attack roll. On a hit, the target takes 2d6 slashing damage. On a critical hit, double the damage, and the target also takes 1d4 persistent bleed damage. If this spell's damage kills the target, the corpse is only bones.\nUndead Creature Make a spell attack roll. On a hit, the target takes 2d6 slashing damage. On a critical hit, double the damage, and the target also becomes Enfeebled 1 for 1 minute. If this spell's damage destroys the target, only its bare bones remain behind.\nHeightened 1 The slashing damage to living and undead creatures increases by 2d6, and the persistent bleed damage to living creatures increases by 1d4.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 creature or corpse",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [
        {
          "formula": "2d6",
          "type": "slashing",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The slashing damage to living and undead creatures increases by 2d6, and the persistent bleed damage to living creatures increases by 1d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:torturous-trauma",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "zHSp4PzoOE72DV4o",
      "slug": "torturous-trauma",
      "publicationTitle": "Pathfinder #186: Ghost King's Rage",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/disapperance.webp"
    },
    "sourceHash": "sha256:b79a5dcb6916a1960b91def04277b98ab5cf4a0878cbc893f66630d77a54cbcb",
    "translatableHash": "sha256:e7175358c8228cbbc48469bb48d871c46593221509facd5edb0d574a92f0d990",
    "data": {
      "schemaVersion": 1,
      "name": "Torturous Trauma",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cantrip",
        "concentrate",
        "manipulate",
        "nonlethal"
      ],
      "traditions": [
        "arcane",
        "divine"
      ],
      "description": "With this spell born of Kemnebi's sadistic love of torture, you batter a creature's internal organs, leaving no external signs of the immense pain you delivered. The target takes bludgeoning damage equal to 1d4 + your spellcasting modifier with a basic Fortitude save. If it critically fails, the target is also Fatigued until the start of your next turn. Creatures that lack internal organs are unaffected by this spell.\nHeightened 1 The bludgeoning damage increases by 1d4.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 living creature",
      "area": null,
      "duration": "",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "1d4",
          "type": "bludgeoning",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The bludgeoning damage increases by 1d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:excise-lexicon",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "GurWFDj4IjKv73kL",
      "slug": "excise-lexicon",
      "publicationTitle": "Pathfinder #186: Ghost King's Rage",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:a3fa4c67353bad80fd72ba89234729cd8b223805aab283a24cd4432130788e42",
    "translatableHash": "sha256:55c982324aef10b019f7430f20dabe2c8507e3a062e431dda246eb33bdfb555b",
    "data": {
      "schemaVersion": 1,
      "name": "Excise Lexicon",
      "rank": 3,
      "rarity": "uncommon",
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
      "description": "You reach into a creature's mind and extract its knowledge of a word. Choose a word to excise when you Cast the Spell. The word must be a mundane word, not a proper noun, and not a word of power such as those used as verbal components for spells. The target must attempt a Will save. The target forgets any words you remove with this spell. While the spell lasts, the target doesn't register or understand the excised words in any form, signed, spoken, written, or otherwise, and can't comprehend them by any means, even by a tongues spell or similar magic. The spell fails if you don't share at least one language with the target. However, the target forgets the words from each language they know, not just your shared languages.\nCritical Success The target is unaffected and knows which words you attempted to excise.\nSuccess The spell's duration is 1 minute.\nFailure The spell's duration is 1 day.\nCritical Failure The spell's duration is unlimited.\nHeightened 2 You excise one additional word.",
      "castingTime": "2 actions",
      "range": "",
      "target": "1 creature",
      "area": null,
      "duration": "varies",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened 2 You excise one additional word."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:steal-voice",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "5LrQIlimsPXK2xAG",
      "slug": "steal-voice",
      "publicationTitle": "Pathfinder #186: Ghost King's Rage",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/silence.webp"
    },
    "sourceHash": "sha256:c21b28fdf56fa81052383f3470302e5cf2b274201ea7951839eb9dbcadf571f0",
    "translatableHash": "sha256:8ca215cf1ac04437428acc9e2455e7f3f97b1d6b8c72db7f2806459395b6958d",
    "data": {
      "schemaVersion": 1,
      "name": "Steal Voice",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "curse",
        "incapacitation",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult"
      ],
      "description": "You steal a creature's voice, rendering them mute. The effect is determined by the target's Fortitude save. The target then becomes temporarily immune for 1 minute. A creature that has no voice or can't speak is immune to this spell.\nCritical Success The target is unaffected.\nSuccess The target becomes voiceless until the end of its next turn. A voiceless creature can't speak, create vocal sounds, or take auditory actions (including supplying verbal or command components). As long as the target is voiceless, whenever you speak, you can choose to have your voice sound like either your voice or the target's voice.\nFailure As success, but the duration is 1 minute.\nCritical Failure As success, but the duration is permanent.",
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
    "contentId": "pf2e:spell:spells-srd:dirge-of-remembrance",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "FCfd1zUrqPaLEtau",
      "slug": "dirge-of-remembrance",
      "publicationTitle": "Pathfinder #186: Ghost King's Rage",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:0e08d668826c1f5ec1fb669311215046a4235d7997fed5b24e0ff90e9b1cf8f3",
    "translatableHash": "sha256:e10c3ccd7a2c50ae28d4206a2d6647f50a37d8e5dfe89f00a61ced7af5ae32e3",
    "data": {
      "schemaVersion": 1,
      "name": "Dirge of Remembrance",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate",
        "sonic"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "You sing a funereal dirge to force restless spirits to fully manifest in the Material Plane. Each incorporeal creature in the area takes 4d10 sonic damage (this damage bypasses its resistances) depending on the result of its Will save.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage.\nFailure The creature takes full damage and becomes semi-corporeal until the spell ends. All attacks against it get the benefit of a ghost touch rune.\nCritical Failure As failure, but double damage.\nHeightened 1 The damage increases by 1d10.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "30 cone",
      "duration": "1 minute",
      "defense": "will save",
      "damage": [
        {
          "formula": "4d10",
          "type": "sonic",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 1d10."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:spiritual-torrent",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Y1YysjZ40ft0aLFN",
      "slug": "spiritual-torrent",
      "publicationTitle": "Pathfinder #186: Ghost King's Rage",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:f879e644c925ad166a0575bd57bfa447441fd50070debc349b2638e6fb2230c4",
    "translatableHash": "sha256:aaa9d5424cb038566a5698f16a33c647b5e960d9814167035b31384b189ca281",
    "data": {
      "schemaVersion": 1,
      "name": "Spiritual Torrent",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "You release your spiritual essence in a torrential blast of energy, dealing 10d6 damage. If you're a living creature, this spell deals vitality damage and gains the vitality trait. If you're an undead creature, this spell deals void damage and gains the void trait. The spell's effect is based on how many actions you spend when Casting the Spell.\n2 (somatic, verbal) The spell targets all creatures in a 60-foot line.\n3 (material, somatic, verbal) The spell targets all creatures in a 60-foot cone.\nHeightened 1 The spell's damage increases by 2d6.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "60 line",
      "duration": "",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "10d6",
          "type": "vitality",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The spell's damage increases by 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:bound-in-death",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "B0Ng2VlhEJMuUXUH",
      "slug": "bound-in-death",
      "publicationTitle": "Pathfinder #186: Ghost King's Rage",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/bind-undead.webp"
    },
    "sourceHash": "sha256:bfddcd76d7d3fccc66fd1c95c9230c99a0a5ec54b99c8f02e8de063206536ed7",
    "translatableHash": "sha256:5e241138a715f119773c5d3c8056b7dbfc40b7487b1f3d16b6423951a9d9d9a8",
    "data": {
      "schemaVersion": 1,
      "name": "Bound in Death",
      "rank": 6,
      "rarity": "uncommon",
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
      "description": "You tether another creature's spirit to your own, shunting part of the damage dealt to you onto one of your foes. You create a life link between yourself and the target. Each time an effect damages you, the target attempts a Will save, which can cause it to take part of the damage, as detailed below. The spell ends if the target is ever more than 120 feet away from you. If either you or the target is reduced to 0 Hit Points, any damage from this spell is resolved, and then the spell ends.\nEach time you sustain this spell, you can choose to deal 6d8 damage to yourself, which can be reduced with bound in death as normal.\nCritical Success The damage you take is unaffected, and the spell ends.\nSuccess The damage you take is unaffected, and the target can't take damage from bound in death for 1 round.\nFailure The target takes half the damage of the effect instead of you, then can't take damage from bound in death for 1 round. Apply any immunity, resistances, or weaknesses you have to the damage before halving it, and the target still applies any immunity, resistances, weaknesses, and the like it has.\nCritical Failure The target takes half the damage of the effect.\nHeightened 2 The damage you can choose to deal to yourself each time you sustain the spell increases by 3d8.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "1 enemy",
      "area": null,
      "duration": "1 minute",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened 2 The damage you can choose to deal to yourself each time you sustain the spell increases by 3d8."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:ravenous-darkness",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "g1dDUKsIrdlpdqy9",
      "slug": "ravenous-darkness",
      "publicationTitle": "Pathfinder #186: Ghost King's Rage",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/bestial-curse.webp"
    },
    "sourceHash": "sha256:7c3093ba00347c75057817a54766d6f701b20fde5d1a5413346621335bf6b671",
    "translatableHash": "sha256:216af041e7e2b17085bedcd852856ffe4f6bed60dcf0376d3606ab9fe09ee1e8",
    "data": {
      "schemaVersion": 1,
      "name": "Ravenous Darkness",
      "rank": 6,
      "rarity": "uncommon",
      "traits": [
        "attack",
        "concentrate",
        "darkness",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult"
      ],
      "description": "You create a shroud of magical darkness that feeds on those inside it. This globe of pure darkness is identical to that created by a 4th-rank Darkness spell. Blunt, gnashing teeth made of shadows gnaw at the creatures within. Make a spell attack roll against the Fortitude DC of each creature in the area. Any creature that fails takes 4d6 bludgeoning damage as teeth attach to it. While the teeth are attached, it takes a –10-foot circumstance penalty to its Speeds and can't Step. Whenever a creature ends its turn in the area, the teeth attempt to attach to that creature if they haven't already, and they deal 1d6 bludgeoning damage to any creature they're already attached to. The shadowy teeth become unattached from any creature that leaves the area but can't otherwise be detached from a creature while that creature remains in the area. You can Dismiss the spell.",
      "castingTime": "3 actions",
      "range": "120 feet",
      "target": "",
      "area": "20 burst",
      "duration": "1 minute",
      "defense": "fortitude-dc",
      "damage": [
        {
          "formula": "4d6",
          "type": "bludgeoning",
          "kind": "damage"
        }
      ],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:know-location",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "L6kr9AUZ8iwuxIip",
      "slug": "know-location",
      "publicationTitle": "Pathfinder #194: Cult of the Cave Worm",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:9745d8b0b7ab2cce0b23151fe5c3f53aa3195058a662245e75403b7b44a0025d",
    "translatableHash": "sha256:5ca7183ee6f5e4810d01fc49e5df088b81eeb2dfad37d8d948b52a6337731444",
    "data": {
      "schemaVersion": 1,
      "name": "Know Location",
      "rank": 1,
      "rarity": "rare",
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
      "description": "You create an invisible anchor at a location within range (even if it's outside your line of sight or line of effect), as long as you can identify the location by its appearance (or other identifying features). You innately know the direction towards that location, including relative depth, but not the distance. Incorrect knowledge of the location's appearance usually causes the spell to fail, but it could instead lead to an unwanted location or some other unusual mishap determined by the GM. This spell doesn't help you find a suitable route to the location nor assist you in overcoming obstacles on the way there.\nHeightened (3rd) The range is 10 miles.\nHeightened (5th) The range is 100 miles.\nHeightened (7th) The range is planetary and you can create an anchor at a location you've viewed with scrying or similar effects.",
      "castingTime": "1 minute",
      "range": "1 mile",
      "target": "",
      "area": null,
      "duration": "until the next time you make your daily preparations",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (3rd) The range is 10 miles.\nHeightened (5th) The range is 100 miles.\nHeightened (7th) The range is planetary and you can create an anchor at a location you've viewed with scrying or similar effects."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:glowing-trail",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "m1vKX4xxWQJXfupu",
      "slug": "glowing-trail",
      "publicationTitle": "Pathfinder #194: Cult of the Cave Worm",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:efe948fac0616170e86860c27ea43d07c90af84e9146d917302f9b416f834b83",
    "translatableHash": "sha256:b3fad21d423e44450915eacee748b9528e52a8426220ce8f25087bf351818101",
    "data": {
      "schemaVersion": 1,
      "name": "Glowing Trail",
      "rank": 1,
      "rarity": "uncommon",
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
      "description": "Your movements leave a vague glowing path behind you, like a misty echo of your presence. While your form is not discernible, your size is. This path hangs in space and is not anchored to any surface, so it tracks your movement through the air. The path fades after 10 minutes. You can Dismiss this spell at any time, but the path fades normally. The path can be visible or Invisible. While visible, it appears as a faintly glowing mist in a color of your choosing but sheds no light beyond its area. While invisible, you can still detect the path, but it gives off no light.\nHeightened (3rd) The glowing trail fades after 1 day.\nHeightened (5th) The glowing trail fades after 1 week.\nHeightened (7th) The glowing trail fades after 1 month.\nHeightened (9th) The glowing trail fades after 1 year.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (3rd) The glowing trail fades after 1 day.\nHeightened (5th) The glowing trail fades after 1 week.\nHeightened (7th) The glowing trail fades after 1 month.\nHeightened (9th) The glowing trail fades after 1 year."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:allfood",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "X3fWP6YCSzcdtg93",
      "slug": "allfood",
      "publicationTitle": "Pathfinder #194: Cult of the Cave Worm",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-tapas/brewers-regret.webp"
    },
    "sourceHash": "sha256:ea6a9199a9e902591f8876ef139cc587553835fa62021bd2d5f2798df42ca767",
    "translatableHash": "sha256:ca12f424a9f7f4267d975f278f1565117fb486e87b12ed82f6c865676016e092",
    "data": {
      "schemaVersion": 1,
      "name": "Allfood",
      "rank": 2,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "divine",
        "primal"
      ],
      "description": "You transform one object into an edible substance that any living creature can chew, swallow, and safely digest. This allfood always has a bland taste and slightly gooey consistency, regardless of its original nature. One bulk of allfood provides enough sustenance to feed one Medium creature for a day.\nAfter 1 day, if no one has eaten the allfood, it reverts to its original form. Most Small creatures eat one-quarter as much as a Medium creature and most Tiny creatures eat one-sixteenth as much, while most Large creatures eat 10 times as much, Huge creatures need 100 times as much, and so on.\nHeightened 1 Double the maximum bulk (to a maximum of 256 bulk at 10th level).",
      "castingTime": "1 minute",
      "range": "",
      "target": "1 unattended non-magical object of 1 Bulk or less",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 Double the maximum bulk (to a maximum of 256 bulk at 10th level)."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:fates-travels",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "e4vxRJ4sjUXMEIGP",
      "slug": "fates-travels",
      "publicationTitle": "Pathfinder #194: Cult of the Cave Worm",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:cb6f3fb520b1bb2f6081b080212c592446f47d700b3aafab7b3d3ae3af9cd803",
    "translatableHash": "sha256:38272ad1ee8cde470fc5f36e31f1edf1b830efdcae88a53cc9f1fe7e3ccb4c8a",
    "data": {
      "schemaVersion": 1,
      "name": "Fate's Travels",
      "rank": 3,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "You get a vision of the creature when it was alive, and its last 10 minutes of travel. This vision gives you a clear impression of the route it took and locations it visited, if any, but not any creatures or hazards in those areas. This information is enough to automatically succeed at Tracking the creature over that distance.\nHeightened (6th) Your vision covers the creature's last hour of travel, and you gain an impression of the hazards, creature types, and number of creatures it encountered along the way, as well as a clear impression of how it died.",
      "castingTime": "1 minute",
      "range": "touch",
      "target": "1 corpse",
      "area": null,
      "duration": "",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened (6th) Your vision covers the creature's last hour of travel, and you gain an impression of the hazards, creature types, and number of creatures it encountered along the way, as well as a clear impression of how it died."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:deep-sight",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Irlpzl1YBSJ6xF5e",
      "slug": "deep-sight",
      "publicationTitle": "Pathfinder #194: Cult of the Cave Worm",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/darkvision.webp"
    },
    "sourceHash": "sha256:639f317328a7625a5274ea9fe642a27e054ee4dbbc1595216efd67e9aefece2b",
    "translatableHash": "sha256:8ee1ed94f6554b4c80442c04051df646a767453bd67ba4b9c0e45832bd29fa12",
    "data": {
      "schemaVersion": 1,
      "name": "Deep Sight",
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
      "description": "Your eyes darken until they become entirely pitch black. You grant yourself the ability to see in the darkness. You gain darkvision. If you already have darkvision, you gain greater darkvision.\nHeightened (7th) The duration is until the next time you make daily preparations.\nSpell Effect: Deep Sight",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (7th) The duration is until the next time you make daily preparations.\nSpell Effect: Deep Sight"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:stonesense",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "UVLiBXLLAoWhUU4R",
      "slug": "stonesense",
      "publicationTitle": "Pathfinder #194: Cult of the Cave Worm",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/magic-stone.webp"
    },
    "sourceHash": "sha256:c09b1236071ea5e5bbd94f09d0d1bb3009c3b87c9f021a7463ba7956f9f33723",
    "translatableHash": "sha256:cb8407e3f0cd1169d3a93df2158824a3380665a0ee6e863fc1f34f8cc2b7c335",
    "data": {
      "schemaVersion": 1,
      "name": "Stonesense",
      "rank": 4,
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
      "description": "You gain tremorsense as an imprecise sense to a range of 100 feet, but you can only sense vibrations through natural stone (not masonry, adobe, or any other manufactured edifice).",
      "castingTime": "3 actions",
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
    "contentId": "pf2e:spell:spells-srd:blast-of-the-bellows",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "bZ8BibvvYOKAbYjn",
      "slug": "blast-of-the-bellows",
      "publicationTitle": "Pathfinder #195: Heavy is the Crown",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:ac3c73fba483745df5fd84e8fc1374f73db54855023798859d3276c8bf32f21f",
    "translatableHash": "sha256:4e9e369af1ae0e0505e2e0abecfcfa12b0d73abd553f48be1f2690e568e0ff98",
    "data": {
      "schemaVersion": 1,
      "name": "Blast of the Bellows",
      "rank": 2,
      "rarity": "rare",
      "traits": [
        "air",
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "divine",
        "primal"
      ],
      "description": "You create a churning eddy of warm air that makes it difficult to fly within the area. This area is difficult terrain for flying creatures. Each time a flying creature enters the area or ends its turn there, it must attempt an Acrobatics check to Maneuver in Flight.\nSuccess The creature is unaffected.\nFailure The creature descends 30 feet.\nCritical Failure The creature descends 60 feet.\nHeightened (4th) The duration increases to 10 minutes.",
      "castingTime": "2 actions",
      "range": "100 feet",
      "target": "",
      "area": "20 burst",
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) The duration increases to 10 minutes."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:binding-muzzle",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "lrFKkzgz80B5vTBb",
      "slug": "binding-muzzle",
      "publicationTitle": "Pathfinder #195: Heavy is the Crown",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/held-items/planar-ribbon.webp"
    },
    "sourceHash": "sha256:fedd938a63d17618dd94c4df912296a4a046c263c6fe931a1ddf10b011d1ba09",
    "translatableHash": "sha256:11f1b02d2fa6b4ff5a6efa038c206d5d594b0d84a248b23d5d2140aa8e81edee",
    "data": {
      "schemaVersion": 1,
      "name": "Binding Muzzle",
      "rank": 2,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "A shimmering muzzle of pure magical force clamps the target's mouth shut. The target can attempt a Fortitude save to resist the muzzle. For targets with more than one mouth, the caster must target a single mouth.\nCritical Success The target is unaffected.\nSuccess For 1 round, the target can't use jaws Strikes, Breath Weapons, or any other attack that originates from the mouth, nor can they imbibe anything, including potions, mutagens, and elixirs.\nFailure As success, but the effect lasts 1 minute, and they must succeed at a check (flat, dc:11) to Cast a Spell with verbal components.\nCritical Failure As success, but the effect lasts 1 minute and the target can't speak.\nHeightened (5th) You can target up to 5 creatures.",
      "castingTime": "2 actions",
      "range": "100 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": "fortitude save",
      "damage": [],
      "heightening": "Heightened (5th) You can target up to 5 creatures."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:cyclone-rondo",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "IDkEuq5jLEDhJ31C",
      "slug": "cyclone-rondo",
      "publicationTitle": "Pathfinder Wake the Dead #1",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/astral-labyrinth.webp"
    },
    "sourceHash": "sha256:47c0e1e6a0ca3019b6fec746975b2a06f655520ea153df78bd966299b38abb63",
    "translatableHash": "sha256:201315977a03ed23fb955a46ffb3470d5bebc2e3af177760b9610cec2b6b66c2",
    "data": {
      "schemaVersion": 1,
      "name": "Cyclone Rondo",
      "rank": 3,
      "rarity": "rare",
      "traits": [
        "air",
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "occult",
        "primal"
      ],
      "description": "Playing or singing melodies discovered by the ancient Shory, you call up a whirlwind. When the whirlwind appears, each creature in its area must attempt a Reflex save or be knocked Prone. The area of the whirlwind is difficult terrain.\nThe whirlwind grows harsher when you Sustain the Spell, moving up to 10 feet within your range and dealing each creature whose space it enters or passes through 4d6 damage with a basic Reflex save.\nHeightened 1 The damage increases by 1d6.",
      "castingTime": "3 actions",
      "range": "60 feet",
      "target": "",
      "area": "10 square",
      "duration": "1 minute",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "4d6",
          "type": "untyped",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:heinous-future",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "EX6gTy8s4wNyhOnl",
      "slug": "heinous-future",
      "publicationTitle": "Pathfinder Wake the Dead #3",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:e33ef9660295184334b555b893d05a69fe784fe7229f99363dbc3fb75bef6515",
    "translatableHash": "sha256:c36c4f19d279bc7af8937004f06280aea3b0802ad7ae9b884898dfb6d0eb8438",
    "data": {
      "schemaVersion": 1,
      "name": "Heinous Future",
      "rank": 6,
      "rarity": "uncommon",
      "traits": [
        "curse",
        "incapacitation",
        "manipulate",
        "mental",
        "prediction"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "You hold up a fractured mirror to the target, and in that mirror it sees a thing that may yet come to pass—a ghastly foretelling that the target instinctively knows is eerily possible. It's not a guaranteed thing, just a dreadful possibility, but it haunts the target's thoughts all the same.\nCritical Success The target is unaffected.\nSuccess The target is Slowed 1 and Stupefied 1 for 1 round.\nFailure The target is slowed 1 and stupefied 1 until it next gets eight hours of rest.\nCritical Failure The target is Slowed 2 and Stupefied 2, decreasing these conditions by 1 for each eight hours of rest it gets.",
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
    "contentId": "pf2e:spell:spells-srd:call-fluxwraith",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "i6GUJCWdNu2278oA",
      "slug": "call-fluxwraith",
      "publicationTitle": "Pathfinder Wake the Dead #3",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:3c7e04bb1cb2c63b6c52bea6157baf44b11c3d37c99f7d4384bf287472f53d20",
    "translatableHash": "sha256:0881eaf525c33c11be6899fbeea73e0430034c9ff9e05035ef0980ccdc7cddb0",
    "data": {
      "schemaVersion": 1,
      "name": "Call Fluxwraith",
      "rank": 9,
      "rarity": "rare",
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
      "description": "You break a mirror and cast the shards into the air. Between their thousand fractured reflections, the fluxwraith appears—a thing of broken glass, broken time and broken lives. This undead creature occupies the space of a Medium creature and has a fly Speed of 60 feet.\nArrive (transmutation) Interrupted Lives\nEach enemy within a 10-foot emanation must attempt a Will save. If a creature fails its save, it is shunted into the future, vanishing now but automatically reappearing in the same location after 1d4. A creature can attempt an additional Will save at the end of each of its turns to end the duration. If its original space is occupied when it returns, the creature appears in the nearest unoccupied space. Since the creature is shunted forward in time, it doesn't experience any of the intervening time. Likewise, any effects on the creature with a duration don't decrease their duration, resuming when the creature reappears.\nDepart (divination, fear, mental, prediction) Dire Foresight\nEach enemy within a 60-foot emanation must attempt a Will save. On a failed save, the creature receives a brief vision of a deeply traumatic event in that lurks among the many possibilities of its future. The creature is Frightened 2 (Frightened 4 on a critical failure) and Slowed 1 while they are frightened.",
      "castingTime": "3 actions",
      "range": "100 feet",
      "target": "",
      "area": null,
      "duration": "until the end of your next turn",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:carrion-mire",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "24JgGrYx7ixgP4kn",
      "slug": "carrion-mire",
      "publicationTitle": "Pathfinder Wake the Dead #4",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:f2351eb82f344c9132a52a33e79fbf9981cbf0d07ea6be93a5e03c1f3889de97",
    "translatableHash": "sha256:dcdb528b3ad42b1c9cbecb058fffb260c884dfec5f607395c80af74414a2811a",
    "data": {
      "schemaVersion": 1,
      "name": "Carrion Mire",
      "rank": 2,
      "rarity": "uncommon",
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
      "description": "The ground opens into a seemingly endless mass of corpse limbs, grasping at all creatures within the area to drag them down. Creatures in the area when the spell is cast or beginning their turn in the area must succeed at a Reflex save or fall Prone. When a creature in the spell's area would be healed by a vitality effect, the carrion mire attempts to counteract that effect, preventing that healing but not otherwise preventing the effect if it's counteracted.",
      "castingTime": "3 actions",
      "range": "30 feet",
      "target": "",
      "area": "15 burst",
      "duration": "1 minute",
      "defense": "reflex save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:osseous-cage",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Cbwhd4m7qrRoRjot",
      "slug": "osseous-cage",
      "publicationTitle": "Pathfinder Wake the Dead #4",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:5ec68eaa07a6bdb3de7903e6ca3bd0e307e5a9a019124e8af86df1c6ddf1ccbe",
    "translatableHash": "sha256:af9731fe56faae36916e903bc6e47a23720c54acd5e95724063cb74da1a5d5db",
    "data": {
      "schemaVersion": 1,
      "name": "Osseous Cage",
      "rank": 2,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You conjure a prison made of bone. Creatures in the space where you create the cage can attempt a Reflex save; if they fail or don't attempt the save, they're trapped within it. The spell automatically fails if the space contains a creature larger than the spell's area.\nA creature inside the cage is Immobilized until it Escapes, uses an effect that can pass through solid objects, or destroys the cage. The cage has AC 10, Hardness 5, and 10 Hit Points, and it's immune to critical hits and precision damage.\nThe osseus cage provides lesser cover from attacks that pass through the cage, either from the outside to the inside or visa versa.\nHeightened 2 The spell's area grows by 5 feet on aside and it's Hit Points increase by 20.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "",
      "area": "5 cube",
      "duration": "1 minute",
      "defense": "reflex save",
      "damage": [],
      "heightening": "Heightened 2 The spell's area grows by 5 feet on aside and it's Hit Points increase by 20."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:bonewall-bulwark",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "11pQoPJpSH2jp7h6",
      "slug": "bonewall-bulwark",
      "publicationTitle": "Pathfinder Wake the Dead #4",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:aa68a3361b6a36d77901c303517a6c7ff3ab1783593b421a18706aa0e8dd2f07",
    "translatableHash": "sha256:db62ddb2f91d39cedf61eaa69ff7a4e32558181e9a29ee5abf50e227248630e2",
    "data": {
      "schemaVersion": 1,
      "name": "Bonewall Bulwark",
      "rank": 3,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You create a miniature replica of the infamous Bonewall of Yled, a jumble of bones with threatening limbs reaching from it. The bulwark is 10 feet high, 10 feet long, and 1 foot thick. The bulwark has an AC of 10 and 30 Hit Points. You must create the bulwark in an unbroken open space so it doesn't pass through any creatures or objects, or the bulwark's dimensions are reduced to fit the smaller space. It must pass within 5 feet of you.\nThe bonewall bulwark grants cover from creatures on the opposite side. At the beginning of your turn, you may have the limbs attack a single creature you're aware of within 5 feet of the wall using your spell attack modifier and dealing 3d10 bludgeoning damage. This ignores cover and concealment provided by the bonewall bulwark.\nHeightened 1 The bludgeoning damage increases by 1d10 and the HP of the wall increases by 10.",
      "castingTime": "2 actions",
      "range": "5 feet",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": "ac",
      "damage": [
        {
          "formula": "3d10",
          "type": "bludgeoning",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The bludgeoning damage increases by 1d10 and the HP of the wall increases by 10."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:deathless-march",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ik0bjmAJse9PSECL",
      "slug": "deathless-march",
      "publicationTitle": "Pathfinder Wake the Dead #4",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:5ed2493a112c8a344aae61038739eb15dffa74e3cd5f85afa7db343d5ecc4cc7",
    "translatableHash": "sha256:47fd95228f9ddaf3695e95c6b5e99a0a64d0ae37126a6fe8b8e072fd176d17d0",
    "data": {
      "schemaVersion": 1,
      "name": "Deathless March",
      "rank": 4,
      "rarity": "rare",
      "traits": [
        "auditory",
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult",
        "primal"
      ],
      "description": "You chant a marching song of Yled to empower the undead and terrify the living. Undead creatures within the area gain the Quickened condition for 1 minute, which they can use only to Stride.\nLiving creatures in the area must attempt a Will save. This gains the emotion, fear, and mental traits for living creatures.\nCritical Success The creature is unaffected.\nSuccess The creature is Frightened 1.\nFailure The creature is Frightened 2.\nCritical Failure The creature is Frightened 3 and Paralyzed for 1 round.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "20 emanation",
      "duration": "",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  }
]
