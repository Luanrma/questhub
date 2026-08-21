import type { Pathfinder2eOriginalContentRecord } from '../../records'
import type { Pathfinder2eSpellData } from '../types'

export const PATHFINDER_2E_EXHAUSTIVE_21_SPELL_ORIGINALS: readonly Pathfinder2eOriginalContentRecord<Pathfinder2eSpellData>[] = [
  {
    "contentId": "pf2e:spell:spells-srd:reed-whistle",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "7Ahssy0KDLzcQ2Ex",
      "slug": "reed-whistle",
      "publicationTitle": "Pathfinder #203: Shepherd of Decay",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:3fa4a967bac7c6cd8b5a94af12b2e6441d2e28d8da9c8be6eec040e1158470cf",
    "translatableHash": "sha256:0d4bcc46a47b01cba2d4c63595aa5304597a144c9ba3a58e751bf92f3e39103a",
    "data": {
      "schemaVersion": 1,
      "name": "Reed Whistle",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate",
        "plant",
        "wood"
      ],
      "traditions": [
        "arcane",
        "occult",
        "primal"
      ],
      "description": "You enchant a blade of grass that you can easily hold in your mouth without inhibiting your speech or other actions. As a reaction, you can reduce the spell's remaining duration by 1 hour to Point Out a creature you detect as you sharply whistle through the reed. You and your allies also gain a +2 circumstance bonus to Perception checks to Seek the creature for 1d4.\nHeightened (3rd) The spell's duration becomes 4 hours.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 hour or until expended",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (3rd) The spell's duration becomes 4 hours."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:bramble-bush",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "mAdxOQUA2cHgKViU",
      "slug": "bramble-bush",
      "publicationTitle": "Pathfinder #203: Shepherd of Decay",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/blight.webp"
    },
    "sourceHash": "sha256:5b7dc036ad7e4cc168ef417d3545e849f398a56396fae3439c4658d44e37235c",
    "translatableHash": "sha256:c461fad769c59e64c978fa1571a96fe2917ab38b94306e9a83e951cfff463b94",
    "data": {
      "schemaVersion": 1,
      "name": "Bramble Bush",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cantrip",
        "concentrate",
        "manipulate",
        "plant",
        "wood"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "In a sudden burst of growth, you cause a thorned bush to sprout from the ground, lash around, and wither. Any creature in the area takes 1d4 piercing damage with a basic Reflex saving throw.\nUntil the start of your next turn, the area is difficult terrain and hazardous terrain. Any creature entering the square takes (1d4 + 1 - 1 piercing damage with a basic Reflex saving throw.\nHeightened 2 The initial damage increases by 1d4, and the damage dealt by hazardous terrain increases by 1.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "",
      "area": "5 cube",
      "duration": "",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "1d4",
          "type": "piercing",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The initial damage increases by 1d4, and the damage dealt by hazardous terrain increases by 1."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:cordyceps-command",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ADwX87fWrpB8cQ5Q",
      "slug": "cordyceps-command",
      "publicationTitle": "Pathfinder #203: Shepherd of Decay",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:da8641fee1e50bb9f9dc67189686d3c42efdca81b2a471b78c2be89b0d44761a",
    "translatableHash": "sha256:62f28559d575cfc2087fecabcb4f1af29b92f7dab9c4da4425e11dba380e9b50",
    "data": {
      "schemaVersion": 1,
      "name": "Cordyceps Command",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "fungus",
        "incapacitation",
        "manipulate",
        "poison"
      ],
      "traditions": [
        "primal"
      ],
      "description": "You conjure a mote of cordyceps spores uniquely tailored to the target before whisking it at them. When you Cast this Spell, choose one of the following behaviors that the fungus compels: ascend, consume, descend, or lure. While the target is controlled by the cordyceps toxin's stage 3 effects, it performs that behavior. This control might include risky behavior (such as climbing down a precarious cliff or weaving between armed foes), but it doesn't compel outright lethal actions (such as leaping off the top of that same cliff). If the behavior directly leads to harm (such as falling off the cliff) or hostile actions (such as being attacked by creatures that can now reach the descending creature), the target gains a +4 bonus to their next saving throw against the poison.\nAscend: The creature tries to reach higher altitudes by any reasonable means, such as Climbing, seeking stairs, or even stacking debris to jump atop of in an attempt to be as high up as possible.\nConsume: The creature greedily eats or drinks whatever is nearby, using actions to draw and consume elixirs, food, or other consumable items. If the creature has a jaws Strike, fangs Strike, or similar unarmed Strike, the creature can instead chase after and use that Strike against edible targets. If no other food or drink is accessible, the creature attempts to steal or seek nearby nutrition.\nDescend: The creature tries to reach lower altitudes by any reasonable means, such as Climbing, descending while flying, or even falling Prone and attempting to burrow into the ground.\nLure: The creature moves toward an exposed location and attempts to get bystanders' attention, such as by gesticulating, Performing, or igniting light sources. The target is Off-Guard while controlled in this way.\nSuccess The target is unaffected.\nFailure The target is afflicted with cordyceps toxin at stage 1.\nCritical Failure The target is afflicted with cordyceps toxin at stage 2.\nCordyceps Toxin (poison)\nSaving Throw check (fortitude, dc:28);\nMaximum Duration 6 rounds\nStage 1 Stupefied 1 (1 round)\nStage 2 Confused (1 round)\nStage 3 Controlled (1 round)",
      "castingTime": "2 actions",
      "range": "30",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": "fortitude save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:conjured-conveyance",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "FQd6Jc3CU6wiS2U7",
      "slug": "conjured-conveyance",
      "publicationTitle": "Pathfinder #203: Shepherd of Decay",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:0ec0471d795efa941983d0f532a25beed4b66a34ffe81837913a0b104295fffe",
    "translatableHash": "sha256:d960969d95084d8ba1edf895698214e50f2c8a788b23f56b7e4bbee57eb11f74",
    "data": {
      "schemaVersion": 1,
      "name": "Conjured Conveyance",
      "rank": 3,
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
      "description": "You conjure an intricate vehicle, carved entirely from wood, to serve as a method of conveyance. The vehicle appears in an unoccupied area of your choice within range. The vehicle can be piloted using Arcana, Driving Lore, or Nature skill checks. The DC to pilot the vehicle and the DC of the vehicle's collision are equal to your spell DC. The vehicle's remaining statistics are presented below.\nWhen you Cast this Spell, choose whether to create a Large skiff, a Large wagon, or a Medium cycle. With the GM's permission, you might instead summon a different vehicle of your choice with a maximum level of 1; this vehicle must be made primarily of plant matter, have common rarity, and be Large or smaller.\n• Large Skiff—Space 15 feet long, 5 feet wide, 3 feet high; Crew 1 pilot; Passengers 3; Speed swim 30 feet (magical)\n• Large Wagon—Space 10 feet long, 10 feet wide, 7 feet high; Crew 1 pilot; Passengers 3; Speed 35 feet (magical)\n• Medium Cycle—Space 5 feet long, 3 feet wide, 3 feet high; Crew 1 pilot; Passengers 0; Speed 40 feet (magical)\nAC 13; Fortitude +8\nHardness 5, HP 40 (BT 20); Immunities critical hits, object immunities, precision damage; Weaknesses fire 5, slashing 5\nCollision 2d6\nHeightened 1 The vehicle's AC increases by 2, Fortitude bonus increases by 2, Hardness increases by 1, HP increases by 20, and the collision damage increases by 1d6. In addition, the maximum level of vehicle you can summon with GM permission increases by 2. The duration increases by 1 hour.",
      "castingTime": "3 actions",
      "range": "30 feet",
      "target": "",
      "area": null,
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 The vehicle's AC increases by 2, Fortitude bonus increases by 2, Hardness increases by 1, HP increases by 20, and the collision damage increases by 1d6. In addition, the maximum level of vehicle you can summon with GM permission increases by 2. The duration increases by 1 hour."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:boomerang-shot",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "zPVJI8Jltt3ERkaU",
      "slug": "boomerang-shot",
      "publicationTitle": "Pathfinder #203: Shepherd of Decay",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/boomerang.webp"
    },
    "sourceHash": "sha256:ff6970781515f2671168544804693343850b384dbddce09e4bd0e3e71d9340e4",
    "translatableHash": "sha256:4d239ae3c986751449e07d1c8ea5928807a210074449f39ecdad6031713d22da",
    "data": {
      "schemaVersion": 1,
      "name": "Boomerang Shot",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "attack",
        "concentrate",
        "manipulate",
        "plant",
        "wood"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You launch a curved length of wood at a foe that arcs around objects and obstacles to strike from an unexpected direction. Make a spell attack roll against the target's AC. This attack ignores the target's Concealed condition and ignores all cover except greater cover. If you hit, the projectile deals 7d10 bludgeoning damage.\nHeightened (7th) The damage increases to 9d10.\nHeightened (9th) The damage increases to 12d10, and the attack ignores cover completely.",
      "castingTime": "2 actions",
      "range": "100",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": "ac",
      "damage": [
        {
          "formula": "7d10",
          "type": "bludgeoning",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (7th) The damage increases to 9d10.\nHeightened (9th) The damage increases to 12d10, and the attack ignores cover completely."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:reflected-beauty",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ghIoycTH6gxxAw3w",
      "slug": "reflected-beauty",
      "publicationTitle": "Pathfinder #205: Singer, Stalker, Skinsaw Man",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:94fac6a3e62b500a765e56c6f13682e9fed9f76d602ccf2fefc694362a1b3e53",
    "translatableHash": "sha256:e395d2700e6f849a3e9d0e9fb812101758853fd2249535690c54433db27d1acc",
    "data": {
      "schemaVersion": 1,
      "name": "Reflected Beauty",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "illusion",
        "manipulate",
        "visual"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "When you cast reflected beauty, choose a willing creature that's the same size as you and that you can see within 30 feet. The spell then disguises you with a realistic illusion, as if via Illusory Disguise heightened to 3rd rank, but includes tactile and olfactory sensation in addition to visual and voice. The appearance of the illusion that disguises you includes any changes to sex characteristics or other aspects needed to match the target creature's heart's desire, allowing you to interact with them as the person they could be. If you're ever more than 30 feet from the subject you're reflecting, reflected beauty immediately ends. You can Dismiss this spell.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": "heightened to 3rd rank, but includes tactile and olfactory sensation in addition to visual and voice. The appearance of the illusion that disguises you includes any changes to sex characteristics or other aspects needed to match the target creature's heart's desire, allowing you to interact with them as the person they could be. If you're ever more than 30 feet from the subject you're reflecting, reflected beauty immediately ends. You can Dismiss this spell."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:missed-cue",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "oCdcZ8EqoC1K0Drq",
      "slug": "missed-cue",
      "publicationTitle": "Pathfinder #205: Singer, Stalker, Skinsaw Man",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:3802facfe53881fde3c1a9f9a2462180200f0bcdca2068c6774db023eb610e03",
    "translatableHash": "sha256:975ada8be8d64af53466bb4da1d7bf107d73e13801358dc43706deb773cf4c91",
    "data": {
      "schemaVersion": 1,
      "name": "Missed Cue",
      "rank": 6,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "emotion",
        "fear",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You make the spell's target believe they had something incredibly important to say but forgot to say it, and now they've missed their opportunity. Sensations of overwhelming panic akin to stage fright flood the target's mind, causing them to suffer excruciating mental anguish and take 12d6 mental damage. The target might even become filled with the conviction that they've doomed themselves by missing their cue. The target must attempt a Will save.\nCritical Success The conviction of a missed cue is only a fleeting notion that passes quickly without any effect on the target.\nSuccess The target takes half damage and is Frightened 1.\nFailure The target takes full damage and becomes Frightened 2. In addition, the target is Slowed 1 for as long as they remain frightened.\nCritical Failure The target takes double damage and becomes Frightened 3. In addition, the target is slowed 1 for as long as they remain frightened.\nHeightened 1 The damage increases by 2d6.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": "will save",
      "damage": [
        {
          "formula": "12d6",
          "type": "mental",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:vibrant-vibrato",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "tPtTKe0X1dDwoDmQ",
      "slug": "vibrant-vibrato",
      "publicationTitle": "Pathfinder #205: Singer, Stalker, Skinsaw Man",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:73016cc0d07ef0abe76bc64bd4369e910a478d9a327925d4f63964a652479e1b",
    "translatableHash": "sha256:1905724aa09a4dfd6251a75db72fe656562985a301d42835b679d9fc5f6115f4",
    "data": {
      "schemaVersion": 1,
      "name": "Vibrant Vibrato",
      "rank": 7,
      "rarity": "rare",
      "traits": [
        "auditory",
        "aura",
        "concentrate",
        "manipulate",
        "sonic"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "Your voice trills in perfect vibrato. When casting the spell, you can make the area any radius you choose, up to 40 feet. The reverberations of your voice continue to shimmer and hang in the air as long as you Sustain the spell but can't be heard at all outside of the area. A creature must attempt a Will save if it's within the area when you Cast the Spell or as soon as it enters the area while the spell is in effect. Once a creature has attempted the save, it uses the same result for that casting of vibrant vibrato.\nCritical Success The creature is unaffected.\nSuccess The creature takes 5d10 persistent sonic damage at the end of their turn as long as they remain within the aura's area of effect.\nFailure As success, but if the creature leaves the area, or if you move far enough from the creature that they're no longer in the area, the creature hears a shattering sound and takes 5d10 sonic damage and is Stunned 1. The creature is then Deafened for the rest of the spell's duration.\nCritical Failure As failure, but the creature takes double the sonic damage and is Stunned 3.\nHeightened 1 The damage on a failed save increases by 1d10.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "40 emanation",
      "duration": "1 minute",
      "defense": "will save",
      "damage": [
        {
          "formula": "5d10",
          "type": "sonic",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage on a failed save increases by 1d10."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:musical-shift",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "3ZxaIw1FOOocJboH",
      "slug": "musical-shift",
      "publicationTitle": "Pathfinder #205: Singer, Stalker, Skinsaw Man",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:c6b5cbb5b750e6457715de587480b44b398fb462c982da6d14c57261fed9b7ca",
    "translatableHash": "sha256:33e70ded509c988f29cb2b16f974ec7bc62e2f35ee5d465a0287569d678d355e",
    "data": {
      "schemaVersion": 1,
      "name": "Musical Shift",
      "rank": 8,
      "rarity": "rare",
      "traits": [
        "auditory",
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "With a quick series of wrist flicks, music fills the air. While the music can be heard as if it were performed normally at a distance, creatures in the spell's area become affected in more significant ways. When you cast musical shift, select a key signature (to affect enemies) and a time signature (to affect allies) from the options below; all creatures within the area are affected as indicated. You can change the key signature or time signature as part of the action you take when you Sustain the spell.\nFlat (key signature) Whenever an enemy critically fails at a Strike, saving throw, or skill check, they fall Prone in addition to other effects from the critical failure.\nNatural (key signature) Enemies take a –2 status penalty to attack rolls.\nSharp (key signature) Whenever an enemy takes piercing or slashing damage, they also take 2d6 persistent bleed damage.\nDouble (time signature) You and your allies become Quickened and can use the extra action each round only for Leap, Stand, Step, or Stride actions.\nQuadruple (time signature) You and your allies gain a +2 status bonus to attack rolls.\nTriple (time signature) You and your allies gain a +2 status bonus to Armor Class and Reflex saving throws.\nSpell Effect: Musical Shift",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "20 emanation",
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:take-your-places",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "bfdiKEZQLVvslcDi",
      "slug": "take-your-places",
      "publicationTitle": "Pathfinder #205: Singer, Stalker, Skinsaw Man",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:bf76c22d8c871702195485121762ab1f2f58fbe3a12be9af2d4fdc1111aaf4dd",
    "translatableHash": "sha256:8a790dc1ce0ea244b34ea43d42334a8fa7a2bd02cd7fe4eb379c7cecaccff165",
    "data": {
      "schemaVersion": 1,
      "name": "Take Your Places",
      "rank": 8,
      "rarity": "rare",
      "traits": [
        "auditory",
        "concentrate",
        "linguistic",
        "manipulate",
        "teleportation"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "The scene would play out exactly as you envisioned it, if only the actors would respect their blocking. You instantly transport the targeted creatures and any items they're wearing and holding from their current space to an unoccupied space within range. You don't need to be able to see the destinations as long as you've been there in the past and know its relative location and distance from each target. Creatures affected by take your places are then temporarily immune to this spell for 1 minute.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "up to 4 willing creatures",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:strength-of-mind",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "aMvjaIuPIWN7pbc3",
      "slug": "strength-of-mind",
      "publicationTitle": "Pathfinder #209: Destroyer's Doom",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:54155dfe888c58ae389787b864b15e3f1bf3ca9719fb7d66830af59c6f9a54f5",
    "translatableHash": "sha256:8ba6d99ea8f5690b804d8bb9d999d18742cfaf9cf4c9a09fd315478238651123",
    "data": {
      "schemaVersion": 1,
      "name": "Strength of Mind",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "mental"
      ],
      "traditions": [
        "divine",
        "occult",
        "primal"
      ],
      "description": "You bolster your ally with reminders of their physical prowess, granting them additional defenses against harmful mental effects. The target gains a +1 status bonus to saving throws against mental effects and against effects that hinder movement (including those that reduce Speed or apply the Grabbed, Immobilized, or Restrained conditions). This bonus increases to +2 if the source of the effect has the fear trait.\nSpell Effect: Strength of Mind",
      "castingTime": "1 action",
      "range": "touch",
      "target": "1 willing creature",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:mutilate",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "BWvGBx51RevizICD",
      "slug": "mutilate",
      "publicationTitle": "Pathfinder #209: Destroyer's Doom",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:eca4361441f72850ed1c0e662bef404eda0b604978ebfafa8c107fba4a4926bd",
    "translatableHash": "sha256:b5be3e763c2a4656c4d74b4baf4c8af189b76324222cff01eae53742d4d03662",
    "data": {
      "schemaVersion": 1,
      "name": "Mutilate",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult",
        "primal"
      ],
      "description": "You cut your own body in a ritualistic manner, causing similar damage to a creature in your line of sight. These cuts are superficial and cause 1d4 slashing damage to you; however, the wounds that open up on our target's body are far deeper. The targeted creature takes 5d8 slashing damage; a creature that critically fails this saving throw also takes (1d8 + 4 -4 persistent bleed damage. If you cast this as a three-action spell, the spell instead affects a 5-foot burst.\nHeightened 1 Increase the damage dealt to the target by 1d8, and increase the persistent bleed damage by 1.",
      "castingTime": "2 or 3",
      "range": "40 feet",
      "target": "1 creature in line of sight",
      "area": null,
      "duration": "",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "5d8",
          "type": "slashing",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 Increase the damage dealt to the target by 1d8, and increase the persistent bleed damage by 1."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:ancestral-winds",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Z4X5whSqSvgiiJ05",
      "slug": "ancestral-winds",
      "publicationTitle": "Pathfinder #209: Destroyer's Doom",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:75b57ab054f4c01f498b1dc48b361634d023ed813d89b0c6fa4159b60a3f3ad4",
    "translatableHash": "sha256:8c2fadb080bbca1a3fadb7fa5f9a4e0c503f4723318cccc8b2630d9723ad2687",
    "data": {
      "schemaVersion": 1,
      "name": "Ancestral Winds",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "emotion",
        "fear",
        "manipulate",
        "mental",
        "void"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult"
      ],
      "description": "You call on the same energies that manifest ancestor storms, summoning wailing spirits to terrorize your foes. Living creatures in the area take 5d6 void damage and 1d6 mental damage and must attempt a Will save. Nonliving creatures are immune to this spell's effects.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage and is Frightened 1.\nFailure The creature takes full damage and is Frightened 2.\nCritical Failure As failure, but the creature takes double damage and is Stunned 1.\nThe first time each round you Sustain the spell, you can move the area up to 30 feet within the range of the spell. Living creatures in the new area must attempt saves with the same effects as above.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "",
      "area": "20 burst",
      "duration": "1 minute",
      "defense": "will save",
      "damage": [
        {
          "formula": "1d6",
          "type": "mental",
          "kind": "damage"
        },
        {
          "formula": "5d6",
          "type": "void",
          "kind": "damage"
        }
      ],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:utter-destruction",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "XGB77j7m0SLky8U1",
      "slug": "utter-destruction",
      "publicationTitle": "Pathfinder #209: Destroyer's Doom",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:35cd58c1e70ed06803083cae70f7198f16b094304c33a984638d8f7e31e274a4",
    "translatableHash": "sha256:2e17a17a390414e7f55f4c6fa279d9e4430df4327f0b46f382a2d59c32643f5d",
    "data": {
      "schemaVersion": 1,
      "name": "Utter Destruction",
      "rank": 6,
      "rarity": "uncommon",
      "traits": [
        "death",
        "sonic",
        "void"
      ],
      "traditions": [
        "arcane",
        "occult",
        "primal"
      ],
      "description": "You screech with an unearthly voice made of destructive energy, smashing everything that lies before you. Creatures in the area take 4d8 sonic damage and 4d8 void damage. Each creature must attempt a Fortitude save. Unattended objects of Hardness 5 or less in the area of effect are destroyed.\nCritical Success The creature takes half damage.\nSuccess The creature takes half damage and is Deafened for 1 round.\nFailure The creature takes full damage and is deafened for 1 minute.\nCritical Failure The creature takes double damage and is permanently deafened.\nHeightened 1 The sonic and void damage each increase by 1d8. The Hardness threshold of items destroyed by the spell increases by 1.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "",
      "area": "30 cone",
      "duration": "",
      "defense": "fortitude save",
      "damage": [
        {
          "formula": "4d8",
          "type": "sonic",
          "kind": "damage"
        },
        {
          "formula": "4d8",
          "type": "void",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The sonic and void damage each increase by 1d8. The Hardness threshold of items destroyed by the spell increases by 1."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:tanglecurse",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "BokwLLK7OjK6ggHs",
      "slug": "tanglecurse",
      "publicationTitle": "Pathfinder #211: The Secret of Deathstalk Tower",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:a24ff7deac9c315cfa6c2eb4e2e8c30e8047ff38edef1beaa726a473e2d29108",
    "translatableHash": "sha256:c1de693c8ee4b31167ae6bc0334f661128877e7d28c662a1cc195af9d5869c9a",
    "data": {
      "schemaVersion": 1,
      "name": "Tanglecurse",
      "rank": 6,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "curse",
        "fungus",
        "manipulate"
      ],
      "traditions": [
        "divine",
        "primal"
      ],
      "description": "Tanglebriar has been called a \"curse on the land,\" which has inspired Treerazer's cult to develop this notorious spell. The target must attempt a Will save.\nCritical Success The target is unaffected.\nSuccess A fungal bloom springs up from the ground in a 5-foot type:emanation around the target. This area is difficult terrain for creatures that enter the area. The target treats all terrain as difficult terrain since this swath of fungus moves with them as they do, transforming into a tangle of spores and floating tendrils if the target flies or a thick swath of stringy floating algae if the target swims. This effect ends after 1 minute or as soon as the curse is lifted, whichever comes first.\nFailure As success, but the fungal bloom increases to 10 feet. It persists until the curse is lifted. In addition, the target is also affected by the spores exuded by the fungal bloom—roll 1d4 and consult the results below to see how the spores affect them. This affect reactivates automatically every 24 hours, replacing the previous result.\n1: The spores cause atrophy; the target is Enfeebled 1.\n2: The spores cause fibrous fungal growths to sprout from the target; the target is Clumsy 1.\n3: The spores settle in the target's blood and flesh and cause great pain; the target is Drained 1.\n4: The spores intrude upon the mind and cause hallucinations; the target is Stupefied 1.\nCritical Failure As failure, but the emanation increases to 15 feet, and the condition value caused by the spores increases to 2.",
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
    "contentId": "pf2e:spell:spells-srd:ray-of-corruption",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "nPxYYID5JARKouSV",
      "slug": "ray-of-corruption",
      "publicationTitle": "Pathfinder #211: The Secret of Deathstalk Tower",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:bad0976ae5dd5bf1d3970d7f79730296d29c4ae0bf4b608d683d0a103cedfa72",
    "translatableHash": "sha256:efd8f25dc5c9c8e78cde4b54e61a2107dfe170919c299085838befe1b35cb032",
    "data": {
      "schemaVersion": 1,
      "name": "Ray of Corruption",
      "rank": 7,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "fungus",
        "manipulate",
        "poison"
      ],
      "traditions": [
        "divine",
        "primal"
      ],
      "description": "You unleash a sickly gray beam of toxic spores at your target. Make a spell attack against the target. If you hit a non-magical object that's made of organic material (such as a tree, wooden house, or massive skull), it melts away into a foul-smelling sludge. A single casting can destroy no more than a 10-foot cube of matter.\nIf you hit a creature, it takes 6d12 poison damage and 6d12 spirit damage with a basic Fortitude save. If you critically hit, the target gets a result one degree of success worse than the outcome of its Fortitude save.\nCritical Success The target is unaffected.\nSuccess The target takes half damage.\nFailure The target takes full damage. Fungal tendrils swiftly digest the body and reduce it to sludge—the target takes 2d12 persistent acid damage.\nCritical Failure As failure, but the target takes double damage, plus 4d12 persistent acid damage.\nHeightened 1 The poison damage and spirit damage each increase by 1d12.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "one creature or object",
      "area": null,
      "duration": "",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "6d12",
          "type": "spirit",
          "kind": "damage"
        },
        {
          "formula": "6d12",
          "type": "poison",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The poison damage and spirit damage each increase by 1d12."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:trim-the-blight",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "A7NXFVgENRVtYoe3",
      "slug": "trim-the-blight",
      "publicationTitle": "Pathfinder #212: A Voice in the Blight",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:4d7f66165d4d59c2e72cd55809b55f602e2dd27c7f53545c88db481e449e6cc8",
    "translatableHash": "sha256:817a922dba1e62d9324a0b3bb4ee5684f1ec9d353449fef798974befc1585c4a",
    "data": {
      "schemaVersion": 1,
      "name": "Trim the Blight",
      "rank": 9,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You create a cone of shimmering energy that attempts to banish the influence of invasive, supernatural blight, such as that found in Tanglebriar. Blighted difficult terrain in the area becomes regular terrain, while blighted greater difficult terrain becomes difficult terrain; hazardous terrain in the area becomes nonhazardous. These effects persist for 1 hour.\nCreatures in the area that carry features of this blight (as determined by the GM, but automatically including all creatures with the fiend trait in this adventure) are trimmed as well, their supernatural infusion of blight being drained. These creatures take 12d10 spirit damage and must attempt a Fortitude save.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage.\nFailure The creature's reach with attacks is reduced by 5 feet (to a minimum of 5 feet) for 1 hour, they are Sickened 1 and Slowed 1 for 1 round.\nCritical Failure The creature's reach is reduced to 5 feet for 1 hour, they are Sickened 2 and slowed 1 for 1 minute.\nHeightened (10th) The spirit damage increases by 2d10, and 1 hour durations increase to 24 hours.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "60 cone",
      "duration": "varies",
      "defense": "fortitude save",
      "damage": [
        {
          "formula": "12d10",
          "type": "spirit",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (10th) The spirit damage increases by 2d10, and 1 hour durations increase to 24 hours."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:dimensional-excision",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "MFPvs0ARxtThYPFq",
      "slug": "dimensional-excision",
      "publicationTitle": "Pathfinder #212: A Voice in the Blight",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:b488dbd44555620b5cbc1119deeffee4f6090d4d384d8c43115b10087166ae87",
    "translatableHash": "sha256:80a834d0e4c77b0e027e3828ddf6478083294e844f8451488038da948e67d5aa",
    "data": {
      "schemaVersion": 1,
      "name": "Dimensional Excision",
      "rank": 9,
      "rarity": "rare",
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
      "description": "You manipulate the boundaries between planes like a scalpel, using it to cut away portions of a creature's essence and banishing those portions to other realities and dimensions, afflicting the target deep lacerations or even severed appendages. The creature takes 14d10 damage (no damage type) and 2d10 persistent bleed damage and must attempt a Will save. If the target is not on its home plane, it takes a –4 status penalty to this save. A creature reduced to 0 HP has their entire body sectioned out and banished across multiple planes and dimensions, leaving nothing behind but their gear.\nHeightened (10th) The base damage increases by 2d10, and the persistent bleed damage by 1d10.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": "basic will save",
      "damage": [
        {
          "formula": "14d10",
          "type": "untyped",
          "kind": "damage"
        },
        {
          "formula": "2d10",
          "type": "bleed",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (10th) The base damage increases by 2d10, and the persistent bleed damage by 1d10."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:funeral-flames",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "5KmyO4YSGEAUdgAS",
      "slug": "funeral-flames",
      "publicationTitle": "Pathfinder #216: The Acropolis Pyre",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:ccd26d2b5ed4d84116fe14f98b66a66443ce71aa793bcaea61fbf2f45df96cf9",
    "translatableHash": "sha256:a93f36590bba58175e6b79095b9bacc92e24e51c66c01c64fa20b51798ce5f6b",
    "data": {
      "schemaVersion": 1,
      "name": "Funeral Flames",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "fire",
        "manipulate"
      ],
      "traditions": [
        "divine",
        "primal"
      ],
      "description": "You transform a bludgeon into a fearsome torch suited to casting undead into the afterlife. One end of the weapon ignites, becoming wreathed in blue flame. While you wield the target weapon, it becomes a +1 weapon, gains the versatile fire trait, and sheds light as brightly as a torch. Whenever you successfully Strike a creature with the weapon, you can Dismiss the spell as a free action to deal 1d6 persistent fire damage to the target; if the target is undead, increase the persistent damage dice to d8s.\nSpell Effect: Funeral Flames\nHeightened 2 The persistent fire damage increases by 1d6.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "one club or staff you're wielding",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 2 The persistent fire damage increases by 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:pyrefowl-rebuke",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "xnh2NBOGs4hcH9B3",
      "slug": "pyrefowl-rebuke",
      "publicationTitle": "Pathfinder #216: The Acropolis Pyre",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:c0112099854b796b76c8e2789bcf257a12b9beb9c60f82ec13c896a9baf8a93a",
    "translatableHash": "sha256:30ea4d7c6cb65b0b130c042a366ae7f349c785a6147e28d9fb76f1f620f38fc0",
    "data": {
      "schemaVersion": 1,
      "name": "Pyrefowl Rebuke",
      "rank": 2,
      "rarity": "uncommon",
      "traits": [
        "fire",
        "manipulate",
        "move"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "Trigger A creature within 10 feet of you Strikes and deals damage to you.\nFiery wings briefly envelop your arms, and with a swift wingbeat, you flutter away from your attacker in a shower of searing sparks. You deal 1d6 fire damage to the triggering creature, with a basic Reflex save, and Fly up to 10 feet in a straight line directly away from it. If the creature critically fails its saving throw, your movement does not provoke reactions from it, and it's Dazzled until the end of its next turn.\nHeightened 2 The damage increases by 1d6, and the maximum distance you can Fly increases by 5 feet.",
      "castingTime": "reaction",
      "range": "",
      "target": "",
      "area": null,
      "duration": "",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "1d6",
          "type": "fire",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The damage increases by 1d6, and the maximum distance you can Fly increases by 5 feet."
    }
  }
]
