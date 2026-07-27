import type { Pathfinder2eOriginalContentRecord } from '../../records'
import type { Pathfinder2eSpellData } from '../types'

export const PATHFINDER_2E_EXHAUSTIVE_08_SPELL_ORIGINALS: readonly Pathfinder2eOriginalContentRecord<Pathfinder2eSpellData>[] = [
  {
    "contentId": "pf2e:spell:spells-srd:phantasmal-calamity",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "0XP2XOxT9VSiXFDr",
      "slug": "phantasmal-calamity",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:30e97f953e87027f00a774216f85581459fc56dbdad67ef61539c80e7a97889a",
    "translatableHash": "sha256:1131f6e06afff10bab47ea10917ff78106aff69606835e1ef4a1867f49c184e5",
    "data": {
      "schemaVersion": 1,
      "name": "Phantasmal Calamity",
      "rank": 6,
      "rarity": "common",
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
      "description": "A vision of apocalyptic destruction fills the mind of each creature in the area. The vision deals 11d6 mental damage (basic Will save). On a critical failure, the creature must also succeed at a check (reflex) save or believe it's trapped (stuck in a fissure, adrift at sea, or some other fate in keeping with its vision). If it fails the second save, it's also Stunned for 1 minute. It can attempt a new Will save at the end of each of its turns, and on a success, it disbelieves the illusion and recovers from the stunned condition.\nHeightened (+1) The damage increases by 2d6.",
      "castingTime": "2 actions",
      "range": "500 feet",
      "target": "",
      "area": "30 burst",
      "duration": "",
      "defense": "basic will save",
      "damage": [
        {
          "formula": "11d6",
          "type": "mental",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+1) The damage increases by 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:never-mind",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "5BbU1V6wGSGbrmRD",
      "slug": "never-mind",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/feeblemind.webp"
    },
    "sourceHash": "sha256:c56368c6b153cbdcdaf5e97b96de9bfc13570256d2079336eac4386e2324cdd6",
    "translatableHash": "sha256:fca5f2ad16e55e6b57d346d8e98273ca964434d452191c528c508eee1304cc34",
    "data": {
      "schemaVersion": 1,
      "name": "Never Mind",
      "rank": 6,
      "rarity": "common",
      "traits": [
        "concentrate",
        "curse",
        "incapacitation",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You drastically reduce the target's mental faculties. The target must attempt a Will save. The effects of this curse can be removed only through effects that target curses.\nCritical Success The target is unaffected.\nSuccess The target is Stupefied 2 for 1 round.\nFailure The target is Stupefied 4 with an unlimited duration.\nCritical Failure The target's intellect is permanently reduced below that of an animal, and it treats its Charisma, Intelligence, and Wisdom modifiers as –5. It loses all class abilities that require mental faculties, including all spellcasting. If the target is a PC, they become an NPC under the GM's control.",
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
    "contentId": "pf2e:spell:spells-srd:dragon-form",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "5c692cCcTDXjSEzk",
      "slug": "dragon-form",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:fe7de96af274a732b31015518a9c4cacff3f640ac4dee5537d80e24806d55aa1",
    "translatableHash": "sha256:0b22ca802940ac644d448fe311b3067fc3cc7379f1427aaa37d5172cbbd4ba3b",
    "data": {
      "schemaVersion": 1,
      "name": "Dragon Form",
      "rank": 6,
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
      "description": "Calling upon powerful magic, you gain a Large dragon battle form. When you Cast this Spell, choose one type of common dragon or another type to which your GM allows access. While in this form, you gain the dragon trait. You have hands in this battle form and can take manipulate actions. You can Dismiss the spell.\nYou gain the following statistics and abilities regardless of which battle form you choose:\n• AC = 18 + your level. Ignore your armor's check penalty and Speed reduction.\n• 10 temporary Hit Points.\n• Speed 40 feet, fly 100 feet. You gain any of the following Speeds the chosen dragon has, but with the listed amount: burrow 20 feet, climb 40 feet, swim 60 feet.\n• Resistance 10 against the damage type of your Dragon Breath (see below).\n• Darkvision and imprecise scent 60 feet.\n• The following unarmed melee attacks, which are the only attacks you can Strike with. You're trained with them. Your attack modifier is +22, and your damage bonus is +6. These attacks are Strength based (for the purpose of the enfeebled condition, for example). If your unarmed attack modifier is higher, you can use it instead. See below for more on these attacks.\n• Melee 1 jaws, Damage 2d12 piercing plus 2d6 damage of the same damage type as your Dragon Breath (see below);\n• Melee 1 claw (agile), Damage 3d10 slashing;\n• Melee 1 tail (reach 10 feet), Damage 3d10 bludgeoning.\n• Athletics modifier of +23, unless your own is higher.\n• Dragon Breath 2 You exhale deadly magical energy in an area, dealing 10d6 damage to each creature in the area with a basic save against your spell DC. The shape, damage type, and save type match that of your chosen dragon's breath. If the chosen dragon's breath can deal more than one type of damage, choose one when you cast dragon form. The shape is a 30-foot cone or a 100-foot line. Once activated, Dragon Breath can't be used again for 1d4 rounds. Dragon Breath has the tradition trait matching the type of dragon and the damage trait matching the type of damage it deals, if applicable.\n• Tradition Resistance If the dragon's magical tradition matches that of your dragon form spell, you gain the listed ability. Arcane resistance 5 against magic; divine resistance 10 to spirit, vitality, and void; occult resistance 10 to mental; primal resistance 5 to physical damage.\nSpell Effect: Dragon Form\nDragon | Tradition | Speeds | Dragon Breath | Saving Throw |\nAdamantine | Primal | Burrow | Cone of bludgeoning | Reflex |\nBarrage | Arcane | — | Cone of force | Reflex |\nBog | Primal | Swim | Cone of acid | Reflex |\nBrine | Primal | Swim | Line of bludgeoning | Reflex |\nCinder | Primal | — | Cone of fire | Reflex |\nCloud | Primal | — | Cone of electricity | Reflex |\nConspirator | Occult | Climb | Cone of poison | Fortitude |\nCoral | Primal | Swim | Line of bludgeoning | Reflex |\nCrystal | Primal | — | Cone of piercing | Reflex |\nDelight | Divine | — | Cone of spirit | Reflex |\nDespair | Occult | — | Cone of sonic | Will |\nDiabolic | Divine | — | Cone of fire | Reflex |\nEmpyreal | Divine | — | Cone of spirit | Reflex |\nExecutor | Divine | — | Cone of sonic | Reflex |\nForest | Primal | — | Cone of piercing | Reflex |\nFortune | Arcane | — | Cone of force | Reflex |\nHorned | Primal | Swim | Cone of poison | Fortitude |\nMagma | Primal | Burrow | Cone of fire | Reflex |\nMirage | Arcane | Climb | Cone of mental | Will |\nMocking | Occult | — | Cone of bludgeoning | Reflex |\nOath | Divine | — | Cone of spirit | Will |\nOmen | Occult | — | Cone of mental | Will |\nPhase | Arcane | — | Cone of force | Reflex |\nRequiem | Divine | Swim | Line of spirit | Will |\nResurrection | Divine | — | Cone of void | Fortitude |\nRime | Primal | Swim | Cone of cold | Reflex |\nRune | Arcane | — | Cone of fire | Reflex |\nSage | Occult | — | Cone of mental | Will |\nSea | Arcane | Swim | Cone of bludgeoning | Reflex |\nSky | Divine | — | Cone of electricity | Reflex |\nSovereign | Occult | — | Cone of mental | Will |\nStormcrown | Primal | — | Line of electricity | Reflex |\nTime | Arcane | — | Cone of force | Will |\nUmbral | Occult | — | Cone of void | Reflex |\nUnderworld | Arcane | Burrow | Cone of fire | Reflex |\nVizier | Occult | Swim | Cone of fire | Reflex |\nVorpal | Arcane | — | Cone of void | Will |\nWailing | Arcane | — | Cone of sonic | Fortitude |\nWhisper | Occult | — | Cone of mental | Will |\nWish | Arcane | Climb | Cone of mental | Will |\nHeightened (8th) Your battle form is Huge, you gain a +20-foot status bonus to your fly Speed, and your attacks have 10-foot reach (or 15-foot reach if they previously had 10-foot reach). You instead gain AC = 21 + your level, 15 temporary HP, an attack modifier of +28, a damage bonus of +12, and Athletics +28. Your Dragon Breath deals an additional 4d6 damage.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (8th) Your battle form is Huge, you gain a +20-foot status bonus to your fly Speed, and your attacks have 10-foot reach (or 15-foot reach if they previously had 10-foot reach). You instead gain AC = 21 + your level, 15 temporary HP, an attack modifier of +28, a damage bonus of +12, and Athletics +28. Your Dragon Breath deals an additional 4d6 damage."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:teleport",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "69L70wKfGDY66Mk9",
      "slug": "teleport",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/teleport.webp"
    },
    "sourceHash": "sha256:35d08cca2453cadafd126fcb0b4e617a4553deb04a92812abbf72b16c5001cda",
    "translatableHash": "sha256:4ea80187280f15e735509f375ed90ec08537896026e3dee943dbb7c573e9b061",
    "data": {
      "schemaVersion": 1,
      "name": "Teleport",
      "rank": 6,
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
      "description": "You and the targets are instantly transported to any location within range, as long as you can identify the location precisely both by its position relative to your starting position and by its appearance (or other identifying features). Incorrect knowledge of the location's appearance usually causes the spell to fail, but it could instead lead to teleporting to an unwanted location or some other unusual mishap determined by the GM. Teleport is not precise over great distances. The targets appear at a distance from the intended destination equal to roughly 1 percent of the total distance traveled, in a direction determined by the GM. For short journeys, this lack of precision is irrelevant, but for long distances this could be up to 1 mile.\nHeightened (7th) You and the other targets can travel to any location within 1,000 miles.\nHeightened (8th) You and the other targets can travel to any location on the same planet. If you travel more than 1,000 miles, you arrive only 10 miles off target.\nHeightened (9th) You and the other targets can travel to any location on another planet within the same solar system. Assuming you have accurate knowledge of the location's position and appearance, you arrive on the new planet 100 miles off target.\nHeightened (10th) As the 9th-rank version, but you and the other targets can travel to any planet within the same galaxy.",
      "castingTime": "10 minutes",
      "range": "100 miles",
      "target": "you and up to 4 targets touched, either willing creatures or objects roughly the size of a creature.",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (7th) You and the other targets can travel to any location within 1,000 miles.\nHeightened (8th) You and the other targets can travel to any location on the same planet. If you travel more than 1,000 miles, you arrive only 10 miles off target.\nHeightened (9th) You and the other targets can travel to any location on another planet within the same solar system. Assuming you have accurate knowledge of the location's position and appearance, you arrive on the new planet 100 miles off target.\nHeightened (10th) As the 9th-rank version, but you and the other targets can travel to any planet within the same galaxy."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:wall-of-force",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "7Iela4GgVeO3LfAo",
      "slug": "wall-of-force",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/wall-of-force.webp"
    },
    "sourceHash": "sha256:3b0fcd5abf79c05a17fdd569a8cbc1728189e260c86e0c0cd48c55aebe73e477",
    "translatableHash": "sha256:f0cbd95c033b1008abf054e9feb1074a5e031aecb71c3b75315dc27232de2f15",
    "data": {
      "schemaVersion": 1,
      "name": "Wall of Force",
      "rank": 6,
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
      "description": "You form an Invisible wall of pure magical force up to 50 feet long and up to 20 feet high. The wall has no discernible thickness. You must create the wall in an unbroken open space so its edges don't pass through any creatures or objects, or the spell is lost. The wall has AC 10, Hardness 30, and 60 Hit Points, and it's immune to critical hits and precision damage. The wall blocks physical effects from passing through it, and because it's made of force, it blocks incorporeal and ethereal creatures as well. Teleportation effects can pass through the barrier, as can visual effects (since the wall is invisible). Wall of force is immune to counteracting effects of its level or lower, but the wall is automatically destroyed by a Disintegrate spell of any rank.\nHeightened (+2) The Hit Points of the wall increase by 20.",
      "castingTime": "3 actions",
      "range": "30 feet",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (+2) The Hit Points of the wall increase by 20."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:spellwrack",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "8Umt1AzYfFbC4fui",
      "slug": "spellwrack",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/spellwrack.webp"
    },
    "sourceHash": "sha256:143e723c5b615db341a304cd6527b4f4bcd06f5fc6155f0436c928060e3982a1",
    "translatableHash": "sha256:78f1c372c0f7897b6453fe957ae4dad96f57e0f170f1195c537de5d4eb03e810",
    "data": {
      "schemaVersion": 1,
      "name": "Spellwrack",
      "rank": 6,
      "rarity": "common",
      "traits": [
        "concentrate",
        "curse",
        "force",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult"
      ],
      "description": "You cause any spells cast on the target to spill out their energy in harmful surges. The target must attempt a Will save.\nCritical Success The target is unaffected.\nSuccess Whenever the target becomes affected by a spell with a duration, the target takes 2d12[persistent,force] damage. Each time it takes persistent force damage from spellwrack, it reduces the remaining duration of spells affecting it by 1 round. Only a successful check (arcana) check against your spell DC can help the target recover from the persistent damage; the curse and the persistent damage end after 1 minute.\nFailure As success, but the curse and persistent damage do not end on their own.\nCritical Failure As failure, but the persistent force damage is 4d12[persistent,force].",
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
    "contentId": "pf2e:spell:spells-srd:cursed-metamorphosis",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "dN8QBNuTiaBHCKUe",
      "slug": "cursed-metamorphosis",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:4afff3d19f30913b9777ed5c55c2571f3c8995239a4920fd8c7b07247f111ee6",
    "translatableHash": "sha256:75b5e667f2ba5301da6556140a2b3144682d3ff573b7dd207cec3e191d707d7b",
    "data": {
      "schemaVersion": 1,
      "name": "Cursed Metamorphosis",
      "rank": 6,
      "rarity": "common",
      "traits": [
        "concentrate",
        "curse",
        "incapacitation",
        "manipulate",
        "polymorph"
      ],
      "traditions": [
        "arcane",
        "occult",
        "primal"
      ],
      "description": "You transform the target creature into a harmless animal appropriate to the area, with effects based on its Fortitude save.\nCritical Success The target is unaffected.\nSuccess The target's body gains minor features of the harmless animal. Its insides churn as they partially transform, causing it to be Sickened 1. When it recovers from the sickened condition, its features revert to normal.\nFailure The target transforms for 1 minute but keeps its mind. If it spends all its actions on its turn concentrating on its original form, it can attempt a check (will) save to end the effect immediately.\nCritical Failure The target is transformed into the chosen harmless animal, body and mind, for an unlimited duration.",
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
    "contentId": "pf2e:spell:spells-srd:vampiric-exsanguination",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "fd31tAHSSGXyOxW6",
      "slug": "vampiric-exsanguination",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/vampiric-exsanguination.webp"
    },
    "sourceHash": "sha256:5fad8dd053e41ec7290a8a07757670c7fba5dd1a7b5eb9f6853b48142dcb069f",
    "translatableHash": "sha256:2ee11aacc6f4e7edbcd2610f59a56b4c2555d140c0d209d2a2733052d34803b5",
    "data": {
      "schemaVersion": 1,
      "name": "Vampiric Exsanguination",
      "rank": 6,
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
      "description": "You draw in the blood and life force of other creatures through your outstretched arms. You deal 12d6 void damage to living creatures in the area with a basic Fortitude save.\nYou gain temporary Hit Points equal to half the damage a single creature takes from this spell; calculate these temporary Hit Points using the creature that took the most damage. You lose any remaining temporary Hit Points after 1 minute.\nHeightened (+1) The damage increases by 2d6.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "30 cone",
      "duration": "",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "12d6",
          "type": "void",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+1) The damage increases by 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:zealous-conviction",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "GYD0XZ4t3tQq6shc",
      "slug": "zealous-conviction",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/zealous-conviction.webp"
    },
    "sourceHash": "sha256:53a8263fbf99c85f63c13ce88823e04279bc2b687e56796153c2c59bb7cdf226",
    "translatableHash": "sha256:a0779b884ccf9827aef09e68845094075a09b64159a6ec32a9193f5eb5cae10c",
    "data": {
      "schemaVersion": 1,
      "name": "Zealous Conviction",
      "rank": 6,
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
      "description": "You bypass your targets' rational minds, instilling them with unshakable conviction and zeal. The targets each gain 12 temporary Hit Points and a +2 status bonus to Will saves against mental effects, as their faith overrides the signals from their own bodies and minds. If you tell a target to do something, it must comply with your request, though if it would normally find the task repugnant, it can attempt a Will save at the end of its turn each round due to the cognitive dissonance. On a success, it ends the spell's effects on itself entirely.\nSpell Effect: Zealous Conviction\nHeightened (9th) The temporary Hit Points increase to 18, and the status bonus to Will saves increases to +3.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "up to 10 willing creatures",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (9th) The temporary Hit Points increase to 18, and the status bonus to Will saves increases to +3."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:raise-dead",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "IkGYwHRLhkuoGReG",
      "slug": "raise-dead",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/raise-dead.webp"
    },
    "sourceHash": "sha256:7daec20eb22d978e3c810810487ed2ab587defc2e427cc0e831b7237cf8442c7",
    "translatableHash": "sha256:4c49d97b25f0000a1db9bdf43fb53d72a7d4b03d151fd0931592ba481d0812c8",
    "data": {
      "schemaVersion": 1,
      "name": "Raise Dead",
      "rank": 6,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "healing",
        "manipulate"
      ],
      "traditions": [
        "divine"
      ],
      "description": "You attempt to call forth the dead creature's soul, requiring the creature's body to be present and relatively intact. The creature must have died within the past 3 days. If Pharasma has decided that the creature's time has come (at the GM's discretion), or if the creature doesn't wish to return to life, this spell automatically fails, but the cost isn't consumed in the casting.\nIf the spell is successful, the creature returns to life with 1 Hit Point, no spells prepared or spell slots available, no points in any pools or any other daily resources, and still with any long-term debilitations of the old body. The time spent in the Boneyard leaves the target temporarily debilitated, making it Clumsy 2, Drained 2, and Enfeebled 2 for 1 week; these conditions can't be removed or reduced by any means until the week has passed. The creature is also permanently changed by its time in the afterlife, such as a slight personality shift, a streak of white in the hair, or a strange new birthmark.\nHeightened (7th) The maximum level of the target increases to 15. The cost increases to the target's level (minimum 1) × 400 gp.\nHeightened (8th) The maximum level of the target increases to 17. The cost increases to the target's level (minimum 1) × 800 gp.\nHeightened (9th) The maximum level of the target increases to 19. The cost increases to the target's level (minimum 1) × 1,600 gp.\nHeightened (10th) The maximum level of the target increases to 21. The cost increases to the target's level (minimum 1) × 3,200 gp.",
      "castingTime": "10 minutes",
      "range": "10 feet",
      "target": "1 dead creature of 13th level or lower",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (7th) The maximum level of the target increases to 15. The cost increases to the target's level (minimum 1) × 400 gp.\nHeightened (8th) The maximum level of the target increases to 17. The cost increases to the target's level (minimum 1) × 800 gp.\nHeightened (9th) The maximum level of the target increases to 19. The cost increases to the target's level (minimum 1) × 1,600 gp.\nHeightened (10th) The maximum level of the target increases to 21. The cost increases to the target's level (minimum 1) × 3,200 gp."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:tangling-creepers",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "JbAcSLu62TU1OgNF",
      "slug": "tangling-creepers",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:9a95215b8d12ac69018e2c9cba55e2b9dac954185b38532ed28ae7e6b7238eb5",
    "translatableHash": "sha256:7f6dd19f450442f54fc482fb86c1f6b4037313fe9b66e9bacf48b9868f59f741",
    "data": {
      "schemaVersion": 1,
      "name": "Tangling Creepers",
      "rank": 6,
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
      "description": "Dense, twitching creepers sprout from every surface and fill any bodies of water in the area. Any creature moving on the land, or Climbing or Swimming within the creepers, takes a –10-foot circumstance penalty to its Speeds while in the area. Once per round, you can Sustain the spell to make a vine lash out from any square within the expanse of creepers. This vine has a 15-foot reach. Make a melee spell attack roll against the target; on a success, the vine pulls the target into the creepers and makes it Immobilized for 1 round or until the creature Escapes (against your spell DC), whichever comes first.\nSpell Effect: Tangling Creepers",
      "castingTime": "3 actions",
      "range": "500 feet",
      "target": "",
      "area": "40 burst",
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:blessed-boundary",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "jj5d830iUi2ZlQfs",
      "slug": "blessed-boundary",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:db503466fa276315e04e442fd1119b73a9fa2290b5caa1788c6d30fb54b0d5e6",
    "translatableHash": "sha256:73b58abb84f51d181f576cabd3a5699f3ca446a41b23c56a69069047b73d462c",
    "data": {
      "schemaVersion": 1,
      "name": "Blessed Boundary",
      "rank": 6,
      "rarity": "common",
      "traits": [
        "concentrate",
        "force",
        "manipulate",
        "sanctified"
      ],
      "traditions": [
        "divine"
      ],
      "description": "Manifestations of divine force appear in the hundreds, swirling in a massive, protective sphere. These typically look like spiky fragments, but often take on an appearance themed to the deity of the caster. The sphere is hollow, with the manifestations forming a shell 2 inches deep on the outer edge. You can choose to make the burst smaller, in 5-foot increments, when you cast it. The shell provides cover and can intersect solid terrain without affecting it. The shell deals 7d8 force damage to each creature who intersects with the shell when the sphere's created, or who attempts to move through the shell. The creature also takes the damage at the end of its turn, but only if it didn't already take damage from the shell that turn. The effects are determined by a creature's Reflex save.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage.\nFailure The creature takes full damage, is pushed up to 10 feet in the direction of your choice, and ends its movement.\nCritical Failure The creature takes double damage, is pushed up to 20 feet in the direction of your choice, and ends its movement.\nHeightened (+1) The damage increases by 1d8.",
      "castingTime": "3 actions",
      "range": "120 feet",
      "target": "",
      "area": "60 burst",
      "duration": "1 minute",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "7d8",
          "type": "force",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+1) The damage increases by 1d8."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:dominate",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "OsOhx3TGIZ7AhD0P",
      "slug": "dominate",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/dominate.webp"
    },
    "sourceHash": "sha256:44ef1aae824ed1fcb462cfb423364fc117ad521db234976e8157ba813ee404f8",
    "translatableHash": "sha256:d817dada7f0f8e81f05419487dc6864d2ce41b33afe71c10ebaa1af033319712",
    "data": {
      "schemaVersion": 1,
      "name": "Dominate",
      "rank": 6,
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
        "occult"
      ],
      "description": "You take command of the target, forcing it to obey your orders. If you issue an obviously self-destructive order, the target doesn't act until you issue a new order. The effect depends on its Will save.\nCritical Success The target is unaffected.\nSuccess The target is Stunned 1 as it fights off your commands.\nFailure You control the target. It gains the Controlled condition, but it can attempt a Will save at the end of each of its turns. On a success, the spell ends.\nCritical Failure As a failure, but the target receives a new save only if you give it a new order that is against its nature, such as killing its allies.\nHeightened (10th) The duration is unlimited.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "until the next time you make your daily preparations",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened (10th) The duration is unlimited."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:spirit-blast",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "PHVHBbdHeQRfjLmE",
      "slug": "spirit-blast",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/spiritual-blast.webp"
    },
    "sourceHash": "sha256:20f70db0f4e6d9a1df3de8b37938610f797c0160d9a86c0362043da4b5082d39",
    "translatableHash": "sha256:5e93d5b52aeab511311bd05f642ed8131842abd56f3b8d4dbbc4bdc8782d7b46",
    "data": {
      "schemaVersion": 1,
      "name": "Spirit Blast",
      "rank": 6,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "spirit"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "You concentrate ethereal energy and attack a creature's spirit, dealing 16d6 spirit damage with a basic Fortitude save.\nHeightened (+1) The damage increases by 2d6.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "16d6",
          "type": "spirit",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+1) The damage increases by 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:scrying",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "r784cIz17eWujtQj",
      "slug": "scrying",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/scrying.webp"
    },
    "sourceHash": "sha256:09423fa256163f88790b4f5140ee6ab27232369b68e443df2c63d5df391e5be4",
    "translatableHash": "sha256:013f7b81d5f78227a68c44adcb3b78489b20c519b72f1f1f3675aa4841672b00",
    "data": {
      "schemaVersion": 1,
      "name": "Scrying",
      "rank": 6,
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
      "description": "You magically spy on a creature of your choice. Scrying works like Clairvoyance, except that the image you receive is less precise, insufficient for teleport and similar spells. Instead of creating an eye in a set location within 500 feet, you instead create an eye that manifests just above the target. You can choose a target either by name or by touching one of its possessions or a piece of its body. If you haven't met the target in person, scrying's DC is 2 lower, and if you are unaware of the target's identity (perhaps because you found an unknown creature's fang at a crime scene), the DC is instead 10 lower.\nThe effect of scrying depends on the target's Will save.\nCritical Success The spell fails and the target is temporarily immune for 1 week. The target also gains a glimpse of you and learns its rough distance and direction from you.\nSuccess The spell fails and the target is temporarily immune for 1 day.\nFailure The spell succeeds.\nCritical Failure The spell succeeds, and the eye follows the target if it moves, traveling up to 60 feet per round.",
      "castingTime": "10 minutes",
      "range": "planetary",
      "target": "1 creature",
      "area": null,
      "duration": "10 minutes",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:disintegrate",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "r7ihOgKv19eJQnik",
      "slug": "disintegrate",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/disintegrate.webp"
    },
    "sourceHash": "sha256:7465b02d5122e54b134cdc39358781e5ec333de256dc9dc36e2e210e1c426001",
    "translatableHash": "sha256:09609a1f5e77e98dfcaad30efc755ab49c7566652bae8252f36dc21503782d08",
    "data": {
      "schemaVersion": 1,
      "name": "Disintegrate",
      "rank": 6,
      "rarity": "common",
      "traits": [
        "attack",
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane"
      ],
      "description": "A black tracer bolt flies toward your target, and upon making contact intensifies into a powerful destructive beam. Make a spell attack against the target. If you hit an object or force construct (such as a wall of force), it's destroyed with no save unless it's an artifact or similarly powerful. A single casting can destroy no more than a 10-foot cube of matter. If you hit a creature, it takes 12d10 damage (no damage type) with a basic Fortitude save. If you critically hit, the target gets a result one degree of success worse than the outcome of its Fortitude save. A creature reduced to 0 HP is blasted to fine powder; its gear remains.\nHeightened (+1) The damage increases by 2d10.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "1 creature, unattended object, or force construct",
      "area": null,
      "duration": "",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "12d10",
          "type": "untyped",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+1) The damage increases by 2d10."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:vibrant-pattern",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "RQjSQVZRG497cJhX",
      "slug": "vibrant-pattern",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/vibrant-pattern.webp"
    },
    "sourceHash": "sha256:ffd7fcdfc73bdc38f64823b1e08c857e8bfb9c29ca1e84384f1833c53aff5fca",
    "translatableHash": "sha256:c65597dedc67b9dbd7213f2b10ce5859fb69b45cedcc40cda24b468a0e841db2",
    "data": {
      "schemaVersion": 1,
      "name": "Vibrant Pattern",
      "rank": 6,
      "rarity": "common",
      "traits": [
        "illusion",
        "incapacitation",
        "manipulate",
        "subtle",
        "visual"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You create a pattern of lights that pulses with intensity. Creatures are Dazzled while inside the pattern. In addition, a creature must attempt a Will saving throw if it's inside the pattern when you cast it, enters the pattern, ends its turn within the pattern, or uses a Seek or Interact action on the pattern. A creature currently Blinded by the pattern doesn't need to attempt new saving throws.\nSuccess The creature is unaffected.\nFailure The creature is Blinded by the pattern. If it exits the pattern, it can attempt a new save to recover from the Blinded condition at the end of each of its turns, to a maximum duration of 1 minute.\nCritical Failure The creature is Blinded for 1 minute.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "",
      "area": "10 burst",
      "duration": "1 minute",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:chain-lightning",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "TDNlDWbYb58Y55Da",
      "slug": "chain-lightning",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/chain-lightning.webp"
    },
    "sourceHash": "sha256:74a9f59fa855ad5fb4059ba727a070f125756f11638e3f6afb49064d5d392b2b",
    "translatableHash": "sha256:29ccb2665bdf904b90cd919cba00a26dadbbe115d802bdc530f995c4a3a83939",
    "data": {
      "schemaVersion": 1,
      "name": "Chain Lightning",
      "rank": 6,
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
      "description": "You discharge a powerful bolt of lightning at the target, dealing 8d12 electricity damage. The target must attempt a basic Reflex save. The electricity arcs to another creature within 30 feet of the first target, jumps to another creature within 30 feet of that target, and so on. You can end the chain at any point. You can't target the same creature more than once, and you must have line of effect to all targets. Roll the damage only once, and apply it to each target (halving or doubling as appropriate for its saving throw outcome). The chain ends if any one of the targets critically succeeds at its save.\nHeightened (+1) The damage increases by 1d12.",
      "castingTime": "2 actions",
      "range": "500 feet",
      "target": "1 creature, plus any number of additional creatures",
      "area": null,
      "duration": "",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "8d12",
          "type": "electricity",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+1) The damage increases by 1d12."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:tree-of-seasons",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "u5FAOOXuqK7fLqKW",
      "slug": "tree-of-seasons",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:afb2c3cf8e2f158cb44bb9188ef830f4bcfd246fa6a6bcd8874c3770dd4bd511",
    "translatableHash": "sha256:359cf56fd30c617dcf2a1e28d4219fe0f0792dd4132d2ba82a50bfda05843a86",
    "data": {
      "schemaVersion": 1,
      "name": "Tree of Seasons",
      "rank": 6,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "plant",
        "wood"
      ],
      "traditions": [
        "primal"
      ],
      "description": "You cause a Small tree to instantly sprout in an unoccupied space on the ground. Four seedpods grow from the tree, each filled with the magic of a different one of the four seasons. A creature can Interact to pluck one of the pods, and can then either throw it up to 30 feet as part of the same action or do so with a separate Interact action later. When thrown, a pod explodes in a @Template[burst|distance:5], dealing 6d6 damage with a basic Reflex save against your spell DC. The damage type depends on the season of the pod: electricity for spring, fire for summer, poison for autumn, or cold for winter. When the spell ends, the tree withers away and any remaining pods rot, leaving behind non-magical seeds.\n(@item.level)d6[cold]\n(@item.level)d6[electricity]\n(@item.level)d6[fire]\n(@item.level)d6[poison]\nHeightened (+1) The burst's damage increases by 1d6.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": "basic reflex save",
      "damage": [],
      "heightening": "Heightened (+1) The burst's damage increases by 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:truesight",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "uqlxMQQeSGWEVjki",
      "slug": "truesight",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/true-seeing.webp"
    },
    "sourceHash": "sha256:7c91b3465ba45dbb406eef0205ce0c5698c92d685eca4a910291f45af0a58320",
    "translatableHash": "sha256:1c91d5df84d82d7de6cab7ab1a1811d537c996ef8efdcfb6ef3680810e8ea4e4",
    "data": {
      "schemaVersion": 1,
      "name": "Truesight",
      "rank": 6,
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
      "description": "You see things within 60 feet as they actually are. The GM rolls a secret counteract check against any illusion, morph or polymorph effect in the area, but only for the purpose of determining whether you see through it (for instance, if the check succeeds against a polymorph spell, you can see the creature's true form, but you don't end the polymorph spell).",
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
    "contentId": "pf2e:spell:spells-srd:mislead",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "WPXzPl7YbMEIGWfi",
      "slug": "mislead",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/mislead.webp"
    },
    "sourceHash": "sha256:b27c678a040be9cb46a9919a4ad4c59c87375d76f1efc69c6020ec679bdfe042",
    "translatableHash": "sha256:5511c12cfd1cbe207aa0d402771cea70d64373ce1a03ca4247db93bb5aa9f4bc",
    "data": {
      "schemaVersion": 1,
      "name": "Mislead",
      "rank": 6,
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
      "description": "You turn yourself Invisible and create an illusory duplicate of yourself. When you Sustain the spell, you can mentally dictate a course of action for your duplicate to follow that round. Your duplicate acts as though it had your full number of actions, though it can't actually affect anything in the environment. Both the duplicate and your invisibility persist for the spell's duration. Performing a hostile action doesn't end mislead's invisibility, just like a 4th-rank Invisibility spell. A creature that determines the duplicate is an illusion doesn't necessarily know you're invisible, and one that can see your invisible form doesn't necessarily know your duplicate is an illusion.\nIf you Cast a Spell, attack, or otherwise interact with another creature, as a part of that action you can attempt a Deception check against observers' Perception DCs to convince them your duplicate used that action. This doesn't fool anyone who's aware your duplicate is an illusion, nor does it work if the attack obviously couldn't have come from the duplicate. For instance, if you fired a ray, you could make it look like it came from the duplicate as long as the duplicate was positioned appropriately, but if you attacked with a sword and your duplicate was across the room from the target, your Deception check would automatically fail.",
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
    "contentId": "pf2e:spell:spells-srd:field-of-life",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "x5rGOmhDRDVQPrnW",
      "slug": "field-of-life",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:349a7ef81ac394a17a9b91018dd54943170567ceb54fff9ec736fefa2cd45a68",
    "translatableHash": "sha256:75b0945ff1365d7c8f492f6617c5b550c144acb00162c2c21070f8051bd048f9",
    "data": {
      "schemaVersion": 1,
      "name": "Field of Life",
      "rank": 6,
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
      "description": "A field of life energy fills the area, exuding warmth and rejuvenating those within. Each living creature that starts its turn in the area regains 1d8 Hit Points, and any undead creature that starts its turn in the area takes 1d8 vitality damage.\nHeightened (8th) The healing and damage increase to 1d10.\nHeightened (9th) The healing and damage increase to 1d12.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "",
      "area": "20 burst",
      "duration": "1 minute",
      "defense": null,
      "damage": [
        {
          "formula": "1d8",
          "type": "vitality",
          "kind": "damage-or-healing"
        }
      ],
      "heightening": "Heightened (8th) The healing and damage increase to 1d10.\nHeightened (9th) The healing and damage increase to 1d12."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:repulsion",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "yrZA4k2VAqEP8xx7",
      "slug": "repulsion",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:84831fd59d1d684638a4249529ae58575054b1343135c876a3384563639bb450",
    "translatableHash": "sha256:9a28868aee86a6ec839a494763628a8b0ca4e1ec3e535c1f32cc58eb5761059d",
    "data": {
      "schemaVersion": 1,
      "name": "Repulsion",
      "rank": 6,
      "rarity": "common",
      "traits": [
        "aura",
        "concentrate",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult"
      ],
      "description": "You manifest an aura that prevents creatures from approaching you. When casting the spell, you can make the area any radius you choose, up to 40 feet. A creature must attempt a Will save if it's within the area when you Cast the Spell or as soon as it enters the area while the spell is in effect. Once a creature has attempted the save, it uses the same result for that casting of repulsion. Any restrictions on a creature's movement apply only if it voluntarily moves toward you. For example, if you move closer to a creature, it doesn't then need to move away.\nCritical Success The creature's movement is not restricted.\nSuccess The creature treats each square in the area as difficult terrain when moving closer to you.\nFailure The creature can't move closer to you within the area.",
      "castingTime": "2 actions",
      "range": "emanation up to 40-feet",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:petrify",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "znv4ECL7ZtuiagtA",
      "slug": "petrify",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:159d2abae1990b9a9f2488dab9a6b6dd35184b081c5b2901a804f3e61d68f2f6",
    "translatableHash": "sha256:4e4e4b96f53d7b392aab219ae382b3a6e16083e3e5aa356e361882eeb993bee9",
    "data": {
      "schemaVersion": 1,
      "name": "Petrify",
      "rank": 6,
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
      "description": "The target's body slowly turns into a stone statue. The target must attempt a Fortitude save.\nCritical Success The target is unaffected.\nSuccess The target is Slowed 1 for 1 round as stone begins to form on their body.\nFailure The target is slowed 1 and must attempt a Fortitude save at the end of each of its turns; this ongoing save has the incapacitation trait. On a failed save, the slowed condition increases by 1 (or 2 on a critical failure) as stone growths creep across their body. A successful save reduces the slowed condition by 1. When a creature becomes fully unable to act due to the slowed condition from petrify, the spell then ends in a flash of gray light, leaving the target Petrified permanently as they become a statue. The spell also ends if the slowed condition is removed, which causes the stone to break off harmlessly.\nCritical Failure As failure, but the target is initially Slowed 2.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "1 creature made of organic material",
      "area": null,
      "duration": "varies",
      "defense": "fortitude save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:project-image",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "0873MWM0qKDDv81O",
      "slug": "project-image",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/project-image.webp"
    },
    "sourceHash": "sha256:f138a10e8201ee1fc8663c8e4682966203683280e5c2f87d3e6ad3fad31120dd",
    "translatableHash": "sha256:bfea9af40e01bc39629f8ff8560310e1c9dc6781d2749c36c0413dec2eaf1186",
    "data": {
      "schemaVersion": 1,
      "name": "Project Image",
      "rank": 7,
      "rarity": "common",
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
      "description": "You project an illusory image of yourself. You must stay within range of the image, and if at any point you can't see the image, the spell ends. Whenever you Cast a Spell other than one whose area is an emanation, you can cause the spell effect to originate from either yourself or the image. Because the image is an illusion, it can't benefit from spells, though visual manifestations of the spell appear. The image has the same AC and saves as you. If it is hit by an attack or fails a save, the spell ends.\nHeightened (+2) The maximum duration you can Sustain the spell increases to 10 minutes.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (+2) The maximum duration you can Sustain the spell increases to 10 minutes."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:eclipse-burst",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "0jadeyQIItIuRgeH",
      "slug": "eclipse-burst",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/eclipse-burst.webp"
    },
    "sourceHash": "sha256:b545354b3110ac99e38165aa691b1fa1bbb66420c5a7821985da7efc15dabcfa",
    "translatableHash": "sha256:4777bb4a6c8b08d9ce878cfb68cd128edfa5c559ea789fa587d348d48d270cc6",
    "data": {
      "schemaVersion": 1,
      "name": "Eclipse Burst",
      "rank": 7,
      "rarity": "common",
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
        "primal"
      ],
      "description": "A globe of freezing darkness explodes in the area, dealing 8d10 cold damage to creatures in the area, plus an additional 8d4 void damage to living creatures. Each creature in the area must attempt a Reflex save.\nIf the globe overlaps with an area of magical light or affects a creature affected by magical light, eclipse burst attempts to counteract the light effect.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage.\nFailure The creature takes full damage.\nCritical Failure The creature takes double damage and becomes Blinded by the darkness for an unlimited duration.\nHeightened (+1) The cold damage increases by 1d10 and the void damage against the living increases by 1d4.",
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
        },
        {
          "formula": "8d4",
          "type": "void",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+1) The cold damage increases by 1d10 and the void damage against the living increases by 1d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:regenerate",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "2Vkd1IxylPceUAAF",
      "slug": "regenerate",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:97ba3e28a44f30eb700ae88e6f5eb1ca7986aba2175f1c344acf1ac0fe4b74c6",
    "translatableHash": "sha256:a6f833930831db06257508923c4dd34dc037e0c3ce8b2a5afe81c6a7197d2449",
    "data": {
      "schemaVersion": 1,
      "name": "Regenerate",
      "rank": 7,
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
      "description": "An infusion of vital energy grants a creature continuous healing. The target temporarily gains regeneration 15, which restores 15 Hit Points to it at the start of each of its turns. While it has regeneration, the target can't die from taking Hit Point damage and its Dying condition can't increase to a value that would kill it (this stops most creatures' dying condition at dying 3), though if its Wounded value becomes 4 or higher, it stays Unconscious until its wounds are treated. If the target takes acid or fire damage, its regeneration deactivates until after the end of its next turn.\nEach time the creature regains Hit Points from regeneration, it also regrows one damaged or ruined organ (if any). During the spell's duration, the creature can also reattach severed body parts by spending an Interact action to hold the body part to the area it was severed from.\nSpell Effect: Regenerate\nHeightened (9th) The regeneration increases to 20.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 willing living creature",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (9th) The regeneration increases to 20."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:interplanar-teleport",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "5bTt2CvYHPvaR7QQ",
      "slug": "interplanar-teleport",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:f6729efc8a4d372483fdee3bb37f64465093051f3c5d1f592b31d769f0f26918",
    "translatableHash": "sha256:8396a72c81aa3d350d1fd97839e9ebb66a315e65a021d0ec23f8a9046133add5",
    "data": {
      "schemaVersion": 1,
      "name": "Interplanar Teleport",
      "rank": 7,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "manipulate",
        "teleportation"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult",
        "primal"
      ],
      "description": "Requirements You have a planar key for the destination plane, used as a locus\nYou and your allies traverse the barriers between planes of existence. The targets move to another plane, such as the Plane of Fire, the Netherworld, or the Outer Rifts. You must know the destination plane exists and use a magic planar key created from material from that plane as a locus for the spell. While the planar keys for most prominent planes are uncommon, just like the spell interplanar teleport, more obscure planes and demiplanes often have rare or possibly even unique planar keys.\nThe spell is highly imprecise, and you appear 1d20×25 miles from the last place one of the targets (of your choice) was located the last time that target traveled to the plane. If it's the first time traveling to a particular plane for all targets, you appear at a random location on the plane. Interplanar teleport doesn't provide a means of return travel, though casting interplanar teleport again allows you to return to your previous plane unless there are extenuating circumstances.",
      "castingTime": "10 minutes",
      "range": "5 feet",
      "target": "up to 8 willing creatures",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:duplicate-foe",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "73rToy0v5Ra9NvL6",
      "slug": "duplicate-foe",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/duplicate-foe.webp"
    },
    "sourceHash": "sha256:04864ca88ec155ae6b5b4ba81605a6050d36b3e532ecb84c599116fa7f9c178b",
    "translatableHash": "sha256:d17f735aba8dd25f77a3fe95fdbb0a27a516bbca673815918ce68c5d4bf9e1d3",
    "data": {
      "schemaVersion": 1,
      "name": "Duplicate Foe",
      "rank": 7,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You create a temporary duplicate of an enemy to fight on your behalf. The target can attempt a Fortitude save to disrupt the spell. The duplicate appears in an unoccupied space adjacent to the target and has the target's attack modifier, AC, saving throw modifiers, Perception, and skill modifiers, but it has only 70 Hit Points and lacks the target's special abilities, including immunities, resistances, and weaknesses. It has no magic items except weapon potency runes.\nThe duplicate gains the minion trait, and it can only Stride and Strike. Its Strikes deal the target's normal damage but don't apply added effects, since it doesn't have special abilities. The spell automatically ends if the duplicate's Hit Points drop to 0.\nThe duplicate attacks your enemies to the best of its abilities. You can also try to give it additional instructions; when you Sustain the spell, you can also Command a Minion as part of your action, but the GM determines whether the duplicate follows your command.\nThe duplicate is unstable, so each turn after it takes its actions, it loses 4d6 Hit Points. It's not a living creature, and it can never regain its lost Hit Points in any way.\nCritical Success You fail to create a duplicate.\nSuccess The duplicate deals half damage with its Strikes and the duration is reduced to a maximum of 2 rounds.\nFailure The duplicate works as described.\nHeightened (+1) The level of creature you can target increases by 2. The duplicate has 10 more HP.",
      "castingTime": "3 actions",
      "range": "30 feet",
      "target": "1 enemy of level 15 or lower",
      "area": null,
      "duration": "1 minute",
      "defense": "fortitude save",
      "damage": [],
      "heightening": "Heightened (+1) The level of creature you can target increases by 2. The duplicate has 10 more HP."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:warp-mind",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "8kJbiBEjMWG4VUjs",
      "slug": "warp-mind",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/warp-mind.webp"
    },
    "sourceHash": "sha256:b50e84f763f81ba693ab6e96e2576e3c6467784b4f9f0eba5ef77937e85778cb",
    "translatableHash": "sha256:8a00820fe21efdc790f219b3c0b9b2e47320570fb7b9d588fedfe4bb29b0a31b",
    "data": {
      "schemaVersion": 1,
      "name": "Warp Mind",
      "rank": 7,
      "rarity": "common",
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
      "description": "You scramble a creature's mental faculties and sensory input. The target must attempt a Will saving throw. Regardless of the result of that save, the target is then temporarily immune for 10 minutes. Warp mind's effects happen instantly, so Dispel Magic and other effects that counteract spells can't counteract them. However, Wish rituals and abilities that can remove non-magical effects can still counteract the effects.\nCritical Success The target is unaffected.\nSuccess The target spends the first action on its next turn with the Confused condition.\nFailure The target is Confused for 1 minute.\nCritical Failure The target is Confused permanently.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:sunburst",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "a3aQxCpoj1q1NQxC",
      "slug": "sunburst",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/sunburst.webp"
    },
    "sourceHash": "sha256:dc28b6a93fdaced5a7896b2e5e4bcc9f3515565dc0e957a1a1554be838e0b495",
    "translatableHash": "sha256:4a1d46cea948d691af7555693377bd8e2ca6c234668cbca8079a52f67cebc04a",
    "data": {
      "schemaVersion": 1,
      "name": "Sunburst",
      "rank": 7,
      "rarity": "common",
      "traits": [
        "concentrate",
        "fire",
        "light",
        "manipulate",
        "vitality"
      ],
      "traditions": [
        "divine",
        "primal"
      ],
      "description": "A powerful globe of searing sunlight explodes in the area, dealing 8d10 fire damage to all creatures in the area, plus an additional (@item.level+1)d10[vitality] damage to undead creatures. Each creature in the area must attempt a Reflex save.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage.\nFailure The creature takes full damage.\nCritical Failure The creature takes full damage and becomes Blinded permanently.\nIf the globe overlaps with an area of magical darkness, sunburst attempts to counteract the darkness effect.\nHeightened (+1) The fire damage increases by 1d10, and the vitality damage against undead increases by 1d10.",
      "castingTime": "2 actions",
      "range": "500 feet",
      "target": "",
      "area": "60 burst",
      "duration": "",
      "defense": "reflex save",
      "damage": [
        {
          "formula": "8d10",
          "type": "fire",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+1) The fire damage increases by 1d10, and the vitality damage against undead increases by 1d10."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:true-target",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "AlbpWWN87yGegoAF",
      "slug": "true-target",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/true-target.webp"
    },
    "sourceHash": "sha256:efd9a4742fa640451099a3983805b1a956cc175b718f18a7ac8b674e4b5dbd0c",
    "translatableHash": "sha256:a121834b887e6fce1a9536f251f67786fe655009439644726c3dcf5fae774ad2",
    "data": {
      "schemaVersion": 1,
      "name": "True Target",
      "rank": 7,
      "rarity": "common",
      "traits": [
        "concentrate",
        "fortune",
        "prediction"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You delve into the possible futures of the next few seconds to understand all the ways your foe might avoid harm, then cast out a vision of that future to those around you. Designate a creature. The first time each target makes an attack roll against that creature during true target's duration, the attacker rolls twice and uses the better result. The attacker also ignores circumstance penalties to the attack roll and any flat check required due to the designated creature being Concealed or Hidden.\nSpell Effect: True Target",
      "castingTime": "1 action",
      "range": "60 feet",
      "target": "4 creatures",
      "area": null,
      "duration": "until the start of your next turn",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:unfettered-pack",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "bVtkBJvGLP69qVGI",
      "slug": "unfettered-pack",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/unfettered-pack.webp"
    },
    "sourceHash": "sha256:41058d0cc395a604fa1b0322fb2aef0a666156b52842ec91221d078512c8c501",
    "translatableHash": "sha256:0d65d48e525ced0d6e2f697a13aa8cce9f9fef398ad25534e6523359d3872dfb",
    "data": {
      "schemaVersion": 1,
      "name": "Unfettered Pack",
      "rank": 7,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "primal"
      ],
      "description": "You free those who travel alongside you from environmental hindrances. Targets don't take circumstance penalties to Speed from vegetation, rubble, winds, or other properties of the environment, and they ignore difficult terrain from such environmental properties.\nHeightened (9th) The targets also ignore greater difficult terrain from environmental properties.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "up to 10 creatures",
      "area": null,
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (9th) The targets also ignore greater difficult terrain from environmental properties."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:energy-aegis",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "m2xFMNyQiUKQDRaj",
      "slug": "energy-aegis",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:de9dff591108b4200e61b5075e6a69f75c364426cb62cb41757bdd351507b274",
    "translatableHash": "sha256:838ed2f41f57f69d242f25e7bf5c253c569c4af4f32f3fa1b3ca71de318d4bae",
    "data": {
      "schemaVersion": 1,
      "name": "Energy Aegis",
      "rank": 7,
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
      "description": "You protect the target with a powerful, long-lasting energy barrier. The target gains resistance 5 to acid, cold, electricity, fire, force, sonic, vitality, and void damage.\nSpell Effect: Energy Aegis\nHeightened (9th) The resistances increase to 10.",
      "castingTime": "1 minute",
      "range": "touch",
      "target": "1 creature",
      "area": null,
      "duration": "until your next daily preparations",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (9th) The resistances increase to 10."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:mask-of-terror",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "O6VQC1Bs4aSYDa6R",
      "slug": "mask-of-terror",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:478a3393d6ad31ffdf9d5fe4835fca8c1e8ee8ee8cb3fc6bafebdf372f66d537",
    "translatableHash": "sha256:a3ba5aa1ccb87c6df4d2af8350f95965471fa9fa33e3fb95f68350faf2eb3ca6",
    "data": {
      "schemaVersion": 1,
      "name": "Mask of Terror",
      "rank": 7,
      "rarity": "common",
      "traits": [
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
        "occult",
        "primal"
      ],
      "description": "The target appears to be a gruesome and terrifying creature. The effect is unique to each observer, so a human viewing the target might see a demon with bloody fangs, but a demon observing the target might see a glowing angelic visage.\nWhen any creature attempts a hostile action against the target, the creature must attempt a Will save. It is then temporarily immune until the end of its next turn.\nSuccess The creature is unaffected.\nFailure The creature becomes Frightened 2 before using its action.\nCritical Failure The creature becomes Frightened 2, and its action fails and is wasted.\nHeightened (8th) You can target up to 5 creatures. If a creature uses a hostile action or reaction that affects multiple targets simultaneously, it needs to attempt only one save against mask of terror.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened (8th) You can target up to 5 creatures. If a creature uses a hostile action or reaction that affects multiple targets simultaneously, it needs to attempt only one save against mask of terror."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:volcanic-eruption",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "O7ZEqWjwdKyo2CUv",
      "slug": "volcanic-eruption",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/volcanic-eruption.webp"
    },
    "sourceHash": "sha256:47beb2368b130a3e0e93793154e3c2dbf798045b7075190410f46a9c36bab6fe",
    "translatableHash": "sha256:9439fd86c7e03ba45d6607bedb6e67a2e70341b426354ed621426d3ac0a3f393",
    "data": {
      "schemaVersion": 1,
      "name": "Volcanic Eruption",
      "rank": 7,
      "rarity": "common",
      "traits": [
        "concentrate",
        "fire",
        "manipulate"
      ],
      "traditions": [
        "primal"
      ],
      "description": "Area 5-foot radius, 80-foot-tall cylinder\nThe ground opens up, spraying a column of lava high into the air in a vertical cylinder, dealing 14d6 fire damage to creatures in the area. The lava rapidly cools and encases creatures in the area. A creature encased in rock is Clumsy 1 and takes a –10-foot status penalty to its Speeds. All normal terrain is difficult terrain to a flying creature, and such creatures immediately descend 20 feet the moment they're encased, but they don't take damage from this fall. A creature encased in rock can attempt to Escape against your spell DC to end the effect. Otherwise, the creature remains encased until it takes a total of 50 damage, freeing it from the rock. Additionally, creatures in the area and those within 5 feet of the lava column automatically take (@item.rank -4)d6[fire] damage from the intense heat, regardless of the results of their saving throws.\nSpell Effect: Volcanic Eruption\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage.\nFailure The creature takes full damage and is encased.\nCritical Failure The creature takes double damage and is encased.\nHeightened (+1) The damage in the area increases by 2d6, and the damage from the intense heat increases by 1d6.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "",
      "area": "5 cylinder",
      "duration": "",
      "defense": "reflex save",
      "damage": [
        {
          "formula": "14d6",
          "type": "fire",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+1) The damage in the area increases by 2d6, and the damage from the intense heat increases by 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:retrocognition",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "rsZ5c0AUyywe5yoK",
      "slug": "retrocognition",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:46f169f7c981da890f5946b0c0ffbc33fcd433e1ca7ec2b2eca4afecde190e07",
    "translatableHash": "sha256:79a76ea6e6fa8c45fdbe4b63e6025e82361f671b95ab2c54024d370f7be3d075",
    "data": {
      "schemaVersion": 1,
      "name": "Retrocognition",
      "rank": 7,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "Opening your mind to mental echoes, you gain impressions from past events that occurred in your current location. Retrocognition reveals psychic impressions from events that occurred over the course of the last day throughout the first minute of the duration, followed by impressions from the next day back the next minute, and so on. These echoes don't play out like a vision but instead reveal impressions of emotions and metaphors that provide cryptic clues and details of the past. If you witness a traumatic or turbulent event through an impression, the spell ends unless you succeed at a Will save with a DC of at least 30 and possibly as much as 50, depending on the severity of the event. The GM determines whether an event is traumatic and chooses the DC.\nHeightened (8th) You gain impressions of events that occurred over the previous year for each minute you concentrate, instead of the previous day, though the details diminish, making it harder to distinguish impressions from all but the most major events.\nHeightened (9th) You gain impressions of events that occurred over the previous century for each minute you concentrate, instead of the previous day, though the details diminish, making it almost impossible to distinguish impressions from all but the most major events.",
      "castingTime": "1 minute",
      "range": "",
      "target": "",
      "area": null,
      "duration": "sustained",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (8th) You gain impressions of events that occurred over the previous year for each minute you concentrate, instead of the previous day, though the details diminish, making it harder to distinguish impressions from all but the most major events.\nHeightened (9th) You gain impressions of events that occurred over the previous century for each minute you concentrate, instead of the previous day, though the details diminish, making it almost impossible to distinguish impressions from all but the most major events."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:divine-decree",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "sX2o0HH4RjJDAZ8C",
      "slug": "divine-decree",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:499c5482ce9877ed86bc0d77c74de4eb585db4f368ef88dcfb8f21fa6ad99304",
    "translatableHash": "sha256:03a4bb95161d5a2211243fe6f535ff06be39faa3173de424f5fb1a0e8f4a7c96",
    "data": {
      "schemaVersion": 1,
      "name": "Divine Decree",
      "rank": 7,
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
      "description": "You utter a potent litany from your faith, a mandate that harms those who oppose your ideals. You deal 7d10 spirit damage to your enemies in the area; each enemy must attempt a Fortitude save.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage.\nFailure The creature takes full damage and is Enfeebled 2 for 1 minute.\nCritical Failure The creature takes double damage and is enfeebled 2 for 1 minute. If you're on your home plane and the creature is not, the creature is sent back to its home plane. A creature of 10th level or lower must also succeed at a Will save or be Paralyzed for 1 minute; if it critically fails, it dies (this is a death effect).\nHeightened (+1) The damage increases by 1d10, and the level of creatures that must attempt a second save on a critical failure increases by 2.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "40 emanation",
      "duration": "varies",
      "defense": "fortitude save",
      "damage": [
        {
          "formula": "7d10",
          "type": "spirit",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+1) The damage increases by 1d10, and the level of creatures that must attempt a second save on a critical failure increases by 2."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:planar-palace",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "vPWMEyVTreMOoFnm",
      "slug": "planar-palace",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/magnificent-mansion.webp"
    },
    "sourceHash": "sha256:e4a430bf8cfe22ddc48b176617d835f19be69aeccd81c1ae044e08cb86482677",
    "translatableHash": "sha256:d9f0baa0a5229b477baf942face9a1f268611e9128b3f17dd506fbe92b41eac5",
    "data": {
      "schemaVersion": 1,
      "name": "Planar Palace",
      "rank": 7,
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
      "description": "You grow an extradimensional demiplane consisting of a spacious dwelling with a single entrance. The entrance connects to the plane where you Cast the Spell, appearing anywhere within the spell's range as a faint, shimmering, vertical rectangle 5 feet wide and 10 feet high. You designate who can enter when you Cast the Spell. Once inside, you can shut the entrance, making it Invisible. You and the creatures you designated can reopen the door at will.\nInside, the demiplane appears to be a mansion featuring a magnificent foyer and numerous opulent chambers. The mansion can have any floor plan you imagine as you Cast the Spell, provided it fits within a space 40 feet wide, 40 feet deep, and 30 feet tall. While the entrance to the mansion is closed, effects from outside the mansion fail to penetrate it, and vice versa, except for Interplanar Teleport, which can be used to enter the mansion. You can use scrying magic and similar effects to observe the outside only if they're capable of crossing planes.\nA staff of up to 24 servants attends to anyone within the mansion. These are like the servant created by the Phantasmal Minion spell, though they're visible, with an appearance you determine during casting. The mansion is stocked with enough food to serve a nine-course banquet to 150 people.",
      "castingTime": "1 minute",
      "range": "30 feet",
      "target": "",
      "area": null,
      "duration": "until the next time you make your daily preparations",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:contingency",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "WG91Z5TiR6oO5FOw",
      "slug": "contingency",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:e1f54db765113ed8c723d406baa3d8f0552a7ed8d65cbb5d7f8c47468984b4ba",
    "translatableHash": "sha256:ad206080fa0475a71b716e6e0d7df094333c9c7f076e6f072b97f5910bc99649",
    "data": {
      "schemaVersion": 1,
      "name": "Contingency",
      "rank": 7,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane"
      ],
      "description": "You prepare a spell that will trigger later. While casting contingency, you also cast another spell of 4th rank or lower with a casting time of no more than 3 actions. This companion spell must be one that can affect you. You must make any decisions for the spell when you cast contingency, such as choosing a damage type for resist energy. During the casting, choose a trigger under which the spell will be cast, using the same restrictions as for the trigger of a Ready action. Once contingency is cast, you can cause the companion spell to come into effect as a reaction with that trigger. It affects only you, even if it would affect more creatures. If you define complicated conditions, as determined by the GM, the trigger might fail. If you cast contingency again, the newer casting supersedes the older.\nHeightened (8th) You can choose a spell of 5th rank or lower.\nHeightened (9th) You can choose a spell of 6th rank or lower.\nHeightened (10th) You can choose a spell of 7th rank or lower.",
      "castingTime": "10 minutes",
      "range": "",
      "target": "",
      "area": null,
      "duration": "until the next time you make your daily preparations",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (8th) You can choose a spell of 5th rank or lower.\nHeightened (9th) You can choose a spell of 6th rank or lower.\nHeightened (10th) You can choose a spell of 7th rank or lower."
    }
  }
]
