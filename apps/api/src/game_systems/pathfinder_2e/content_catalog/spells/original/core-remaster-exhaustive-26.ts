import type { Pathfinder2eOriginalContentRecord } from '../../records'
import type { Pathfinder2eSpellData } from '../types'

export const PATHFINDER_2E_EXHAUSTIVE_26_SPELL_ORIGINALS: readonly Pathfinder2eOriginalContentRecord<Pathfinder2eSpellData>[] = [
  {
    "contentId": "pf2e:spell:spells-srd:crown-of-prophets",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "h2DLv8TQV0Z83tQp",
      "slug": "crown-of-prophets",
      "publicationTitle": "Pathfinder #216: The Acropolis Pyre",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:5b4b5bf37029cf494e4ecdc6dbad90efeef191b28610e88f53a8cb1922e6e84f",
    "translatableHash": "sha256:4fc883b1dfb6dfc2f0f45a51f74acea3a41ecfbee929518ba0171a4aa386e6cb",
    "data": {
      "schemaVersion": 1,
      "name": "Crown of Prophets",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "animist",
        "focus",
        "morph"
      ],
      "traditions": [],
      "description": "Serpents sprout from your head, equally ready to bite your foes or offer you counsel. You gain a fangs unarmed attack that deals 1d6 piercing damage and has the agile, finesse, and versatile poison traits. The first time you Cast or Sustain this spell each round, you can perform one of the following as a free action.\nSerpentine Advice The snakes compete to offer you counsel. You gain the Dubious Knowledge feat until the end of your turn, then you Recall Knowledge.\nToxic Prophecy (poison)\nRequirements A creature within 15 feet damaged you since the end of your last turn\nEffect The snakes spit toxic curses at the required creature, dealing 2d4 poison damage (basic Fortitude save).\nSpell Effect: Crown of Prophets\nHeightened 1 The poison damage dealt by Toxic Prophecy increases by 1d4.",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "2d4",
          "type": "poison",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The poison damage dealt by Toxic Prophecy increases by 1d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:gift-of-the-anemos",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "x2Gf3lt64eoMocMd",
      "slug": "gift-of-the-anemos",
      "publicationTitle": "Pathfinder #216: The Acropolis Pyre",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:0a6e8365b08dbabeac6d24a1b24d22687668d43985c23b1e205e553ec25b8cc9",
    "translatableHash": "sha256:1e443055ff1083e1db6e83d8bf9c6c21f4d3e9fe8140be6147104268334c9076",
    "data": {
      "schemaVersion": 1,
      "name": "Gift of the Anemos",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "air",
        "animist",
        "aura",
        "focus"
      ],
      "traditions": [],
      "description": "Your apparition envelops you in gusting winds that can speed your steps or buffet your foes. When an enemy in the aura critically fails a Strike against you, they must succeed at a Reflex save or become Off-Guard until the end of your next turn. When you cast or sustain this spell, you can either Step, Shove a creature in the aura using your spell attack modifier in place of your Athletics modifier, or jump 10 feet in any direction (you must land on solid ground, or else you fall).",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": "10 emanation",
      "duration": "1 minute",
      "defense": "reflex save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:wish-market",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "cYW9M2yE16dTTnCF",
      "slug": "wish-market",
      "publicationTitle": "Pathfinder Adventure Path: Hell's Destiny",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:389e0615e1a407fd4ed0e2e83c85c2e62fe3218a2c9fc13af97fcfc12dc3b008",
    "translatableHash": "sha256:c193bda33cfb5184e8d7075fa3309a54e7f64ce83c67a803beb72fa31a4d58d4",
    "data": {
      "schemaVersion": 1,
      "name": "Wish Market",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "animist",
        "focus"
      ],
      "traditions": [],
      "description": "You signal your willingness to make a deal, attracting ghostly merchants that eagerly and silently wave contracts for your consideration while demanding an esoteric price. When you Cast this Spell, you accept an offer from the merchants. You gain a +1 status bonus to Perception checks and your choice of Acrobatics, Athletics, Nature, Occultism, or Religion checks for the spell's duration, and you can either Recall Knowledge or Seek as a free action. However, you also pay a random price; roll 1d4 on the table below. The first time each round you Sustain the spell, you can either Recall Knowledge or Seek as a free action or haggle with the merchant to suppress the price's penalty for 1 round.\n1d4\n | Effect\n |\n1\n | Your Social Graces: For the spell's duration, you take a –2 status penalty to Diplomacy and Society checks.\n |\n2\n | Your Guile: For the spell's duration, you take a –2 status penalty to Deception and Stealth checks.\n |\n3\n | Your Manual Dexterity: For the spell's duration, you take a –2 status penalty to Crafting and Thievery checks.\n |\n4\n | Your Higher Reasoning: For the spell's duration, you take a –2 status penalty to Arcana and Medicine checks.\n |\nHeightened (4th) The status bonus increases to +2.\nHeightened (7th) The status bonus increases to +3.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) The status bonus increases to +2.\nHeightened (7th) The status bonus increases to +3."
    }
  }
]
