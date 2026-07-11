// @ts-nocheck
import type { Pathfinder2eClassEntry } from '../models'

export const PATHFINDER_2E_CLASSES: Pathfinder2eClassEntry[] = [
  {
    "schemaVersion": 1,
    "id": "pf2e:class:alchemist",
    "kind": "class",
    "slug": "alchemist",
    "name": "Alchemist",
    "description": {
      "sourceHtml": "<p><em>There's no sight more beautiful to you than a strange brew bubbling in a beaker, and you consume your ingenious elixirs with abandon. You're fascinated by uncovering the secrets of science and the natural world, and you're constantly experimenting in your lab or on the go with inventive concoctions for every eventuality. You are fearless in the face of risk, hurling explosive or toxic creations at your foes. Your unique path toward greatness is lined with alchemical brews that push your mind and body to their limits.</em></p>\n<p>@UUID[Compendium.pf2e.journals.JournalEntry.kzxu2dI7tFxv6Ix6.JournalEntryPage.Om4e4tsgNWrComie]{Alchemist}</p>",
      "plainText": "There's no sight more beautiful to you than a strange brew bubbling in a beaker, and you consume your ingenious elixirs with abandon. You're fascinated by uncovering the secrets of science and the natural world, and you're constantly experimenting in your lab or on the go with inventive concoctions for every eventuality. You are fearless in the face of risk, hurling explosive or toxic creations at your foes. Your unique path toward greatness is lined with alchemical brews that push your mind and body to their limits. Alchemist"
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "upgrade",
          "path": "system.proficiencies.attacks.weapon-base-alchemical-bomb.rank",
          "value": 1
        }
      }
    ],
    "grantedItems": [
      {
        "name": "Alchemy",
        "image": "icons/tools/laboratory/mortar-liquid-pink.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Alchemy",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Alchemy"
        }
      },
      {
        "name": "Chemical Hardiness",
        "image": "icons/magic/symbols/question-stone-yellow.webp",
        "level": 11,
        "uuid": "Compendium.pf2e.classfeatures.Item.Chemical Hardiness",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Chemical Hardiness"
        }
      },
      {
        "name": "Alchemical Weapon Mastery",
        "image": "icons/consumables/potions/potion-round-stopped-yellow-green.webp",
        "level": 15,
        "uuid": "Compendium.pf2e.classfeatures.Item.Alchemical Weapon Mastery",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Alchemical Weapon Mastery"
        }
      },
      {
        "name": "Perception Expertise",
        "image": "icons/creatures/eyes/human-single-blue.webp",
        "level": 9,
        "uuid": "Compendium.pf2e.classfeatures.Item.Perception Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Perception Expertise"
        }
      },
      {
        "name": "Explosion Dodger",
        "image": "icons/magic/symbols/question-stone-yellow.webp",
        "level": 15,
        "uuid": "Compendium.pf2e.classfeatures.Item.Explosion Dodger",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Explosion Dodger"
        }
      },
      {
        "name": "Medium Armor Mastery",
        "image": "icons/equipment/chest/breastplate-collared-steel.webp",
        "level": 19,
        "uuid": "Compendium.pf2e.classfeatures.Item.Medium Armor Mastery",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Medium Armor Mastery"
        }
      },
      {
        "name": "Will Expertise",
        "image": "systems/pf2e/icons/features/classes/walls-of-will.webp",
        "level": 7,
        "uuid": "Compendium.pf2e.classfeatures.Item.Will Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Will Expertise"
        }
      },
      {
        "name": "Research Field",
        "image": "icons/magic/symbols/question-stone-yellow.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Research Field",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Research Field"
        }
      },
      {
        "name": "Medium Armor Expertise",
        "image": "icons/equipment/chest/breastplate-quilted-brown.webp",
        "level": 13,
        "uuid": "Compendium.pf2e.classfeatures.Item.Medium Armor Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Medium Armor Expertise"
        }
      },
      {
        "name": "Weapon Specialization",
        "image": "systems/pf2e/icons/features/classes/weapon-specialization.webp",
        "level": 13,
        "uuid": "Compendium.pf2e.classfeatures.Item.Weapon Specialization",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Weapon Specialization"
        }
      },
      {
        "name": "Double Brew",
        "image": "icons/magic/light/orbs-hand-gray.webp",
        "level": 9,
        "uuid": "Compendium.pf2e.classfeatures.Item.Double Brew",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Double Brew"
        }
      },
      {
        "name": "Alchemical Weapon Expertise",
        "image": "systems/pf2e/icons/features/classes/alchemical-weapon-expertise.webp",
        "level": 7,
        "uuid": "Compendium.pf2e.classfeatures.Item.Alchemical Weapon Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Alchemical Weapon Expertise"
        }
      },
      {
        "name": "(Choice) Greater Field Discovery",
        "image": "icons/magic/symbols/question-stone-yellow.webp",
        "level": 13,
        "uuid": "Compendium.pf2e.classfeatures.Item.Greater Field Discovery",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Greater Field Discovery"
        }
      },
      {
        "name": "Alchemical Expertise",
        "image": "icons/consumables/potions/potion-round-corked-glowing-green.webp",
        "level": 9,
        "uuid": "Compendium.pf2e.classfeatures.Item.Alchemical Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Alchemical Expertise"
        }
      },
      {
        "name": "Abundant Vials",
        "image": "icons/magic/symbols/question-stone-yellow.webp",
        "level": 17,
        "uuid": "Compendium.pf2e.classfeatures.Item.Abundant Vials",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Abundant Vials"
        }
      },
      {
        "name": "Advanced Vials",
        "image": "icons/magic/symbols/question-stone-yellow.webp",
        "level": 11,
        "uuid": "Compendium.pf2e.classfeatures.Item.Advanced Vials",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Advanced Vials"
        }
      },
      {
        "name": "Field Discovery",
        "image": "icons/magic/symbols/question-stone-yellow.webp",
        "level": 5,
        "uuid": "Compendium.pf2e.classfeatures.Item.Field Discovery",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Field Discovery"
        }
      },
      {
        "name": "Powerful Alchemy",
        "image": "icons/commodities/materials/bowl-powder-teal.webp",
        "level": 5,
        "uuid": "Compendium.pf2e.classfeatures.Item.Powerful Alchemy",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Powerful Alchemy"
        }
      },
      {
        "name": "Alchemical Mastery",
        "image": "icons/tools/cooking/mortar-stone-yellow.webp",
        "level": 17,
        "uuid": "Compendium.pf2e.classfeatures.Item.Alchemical Mastery",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Alchemical Mastery"
        }
      }
    ],
    "source": {
      "sourcePack": "classes",
      "sourceId": "XwfcJuskrhI9GIjX",
      "sourcePath": "pf2e-master/packs/classes/alchemist.json",
      "slug": "alchemist",
      "image": "systems/pf2e/icons/classes/alchemist.webp",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "hitPointsPerLevel": 8,
    "keyAbility": {
      "options": [
        "int"
      ]
    },
    "proficiencies": {
      "perception": 1,
      "savingThrows": {
        "fortitude": 2,
        "reflex": 2,
        "will": 1
      },
      "attacks": {
        "simple": 1,
        "martial": 0,
        "advanced": 0,
        "unarmed": 1,
        "other": {
          "name": "Alchemical Bombs",
          "rank": 1
        }
      },
      "defenses": {
        "unarmored": 1,
        "light": 1,
        "medium": 1,
        "heavy": 0
      },
      "spellcasting": 0
    },
    "trainedSkills": {
      "fixed": [
        "crafting"
      ],
      "additional": 3
    },
    "progression": {
      "ancestryFeatLevels": [
        1,
        5,
        9,
        13,
        17
      ],
      "classFeatLevels": [
        1,
        2,
        4,
        6,
        8,
        10,
        12,
        14,
        16,
        18,
        20
      ],
      "generalFeatLevels": [
        3,
        7,
        11,
        15,
        19
      ],
      "skillFeatLevels": [
        2,
        4,
        6,
        8,
        10,
        12,
        14,
        16,
        18,
        20
      ],
      "skillIncreaseLevels": [
        3,
        5,
        7,
        9,
        11,
        13,
        15,
        17,
        19
      ]
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:class:animist",
    "kind": "class",
    "slug": "animist",
    "name": "Animist",
    "description": {
      "sourceHtml": "<p><em>You are the interlocutor between the seen and unseen, the voice that connects the mortal and the spiritual. You bond with spirits, manifesting their distinct magic and allowing their knowledge to flow through you. You may favor apparitions that grant you healing magic, others that grant you spells of destructive power, or pick and choose between different apparitions as your environment and circumstances demand. You may consider your powers part of a sacred trust or see your unique abilities as a sign that you've been chosen as a champion of two worlds. Whether you advocate for mortals in the planes beyond or whether you represent the spirits' interests, you provide the bridge between realms.</em></p>\n<p>@UUID[Compendium.pf2e.journals.JournalEntry.kzxu2dI7tFxv6Ix6.JournalEntryPage.ThFPVuxGiZ2Asgyr]{Animist}</p>",
      "plainText": "You are the interlocutor between the seen and unseen, the voice that connects the mortal and the spiritual. You bond with spirits, manifesting their distinct magic and allowing their knowledge to flow through you. You may favor apparitions that grant you healing magic, others that grant you spells of destructive power, or pick and choose between different apparitions as your environment and circumstances demand. You may consider your powers part of a sacred trust or see your unique abilities as a sign that you've been chosen as a champion of two worlds. Whether you advocate for mortals in the planes beyond or whether you represent the spirits' interests, you provide the bridge between realms. Animist"
    },
    "rarity": "common",
    "traits": [],
    "rules": [],
    "grantedItems": [
      {
        "name": "Expert Protections",
        "image": "icons/magic/control/debuff-energy-hold-levitate-blue-yellow.webp",
        "level": 11,
        "uuid": "Compendium.pf2e.classfeatures.Item.Expert Protections",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Expert Protections"
        }
      },
      {
        "name": "Apparition Attunement",
        "image": "icons/magic/holy/meditation-chi-focus-blue.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Apparition Attunement",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Apparition Attunement"
        }
      },
      {
        "name": "Third Apparition",
        "image": "icons/magic/light/projectiles-trio-pink.webp",
        "level": 7,
        "uuid": "Compendium.pf2e.classfeatures.Item.Third Apparition",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Third Apparition"
        }
      },
      {
        "name": "Simple Weapon Expertise",
        "image": "icons/skills/melee/hand-grip-staff-teal.webp",
        "level": 11,
        "uuid": "Compendium.pf2e.classfeatures.Item.Simple Weapon Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Simple Weapon Expertise"
        }
      },
      {
        "name": "Animistic Practice",
        "image": "icons/magic/symbols/circled-gem-pink.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Animistic Practice",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Animistic Practice"
        }
      },
      {
        "name": "Supreme Incarnation",
        "image": "icons/creatures/magical/construct-golem-stone-blue.webp",
        "level": 19,
        "uuid": "Compendium.pf2e.classfeatures.Item.Supreme Incarnation",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Supreme Incarnation"
        }
      },
      {
        "name": "Expert Spellcaster",
        "image": "icons/sundries/books/book-backed-silver-gold.webp",
        "level": 7,
        "uuid": "Compendium.pf2e.classfeatures.Item.Expert Spellcaster",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Expert Spellcaster"
        }
      },
      {
        "name": "Perception Expertise",
        "image": "icons/creatures/eyes/human-single-blue.webp",
        "level": 9,
        "uuid": "Compendium.pf2e.classfeatures.Item.Perception Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Perception Expertise"
        }
      },
      {
        "name": "Master of Mind and Spirit",
        "image": "icons/magic/light/orb-shadow-blue.webp",
        "level": 13,
        "uuid": "Compendium.pf2e.classfeatures.Item.Master of Mind and Spirit",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Master of Mind and Spirit"
        }
      },
      {
        "name": "Animist & Apparition Spellcasting",
        "image": "icons/magic/light/hand-sparks-smoke-green.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Animist & Apparition Spellcasting",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Animist & Apparition Spellcasting"
        }
      },
      {
        "name": "Weapon Specialization",
        "image": "systems/pf2e/icons/features/classes/weapon-specialization.webp",
        "level": 13,
        "uuid": "Compendium.pf2e.classfeatures.Item.Weapon Specialization",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Weapon Specialization"
        }
      },
      {
        "name": "Fourth Apparition",
        "image": "icons/magic/light/projectiles-pink-purple.webp",
        "level": 15,
        "uuid": "Compendium.pf2e.classfeatures.Item.Fourth Apparition",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Fourth Apparition"
        }
      },
      {
        "name": "Legendary Spellcaster",
        "image": "icons/sundries/books/book-open-purple.webp",
        "level": 19,
        "uuid": "Compendium.pf2e.classfeatures.Item.Legendary Spellcaster",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Legendary Spellcaster"
        }
      },
      {
        "name": "Fortitude Expertise",
        "image": "icons/magic/life/cross-explosion-burst-green.webp",
        "level": 3,
        "uuid": "Compendium.pf2e.classfeatures.Item.Fortitude Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Fortitude Expertise"
        }
      },
      {
        "name": "Master Spellcaster",
        "image": "icons/skills/trades/academics-book-study-purple.webp",
        "level": 15,
        "uuid": "Compendium.pf2e.classfeatures.Item.Master Spellcaster",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Master Spellcaster"
        }
      }
    ],
    "source": {
      "sourcePack": "classes",
      "sourceId": "9KiqZVG9r5g8mC4V",
      "sourcePath": "pf2e-master/packs/classes/animist.json",
      "slug": "animist",
      "image": "systems/pf2e/icons/default-icons/class.svg",
      "publication": {
        "title": "Pathfinder War of Immortals",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "hitPointsPerLevel": 8,
    "keyAbility": {
      "options": [
        "wis"
      ]
    },
    "proficiencies": {
      "perception": 1,
      "savingThrows": {
        "fortitude": 1,
        "reflex": 1,
        "will": 2
      },
      "attacks": {
        "simple": 1,
        "martial": 0,
        "advanced": 0,
        "unarmed": 1,
        "other": {
          "name": "",
          "rank": 0
        }
      },
      "defenses": {
        "unarmored": 1,
        "light": 1,
        "medium": 1,
        "heavy": 0
      },
      "spellcasting": 1
    },
    "trainedSkills": {
      "fixed": [
        "religion"
      ],
      "additional": 2
    },
    "progression": {
      "ancestryFeatLevels": [
        1,
        5,
        9,
        13,
        17
      ],
      "classFeatLevels": [
        2,
        4,
        6,
        8,
        10,
        12,
        14,
        16,
        18,
        20
      ],
      "generalFeatLevels": [
        3,
        7,
        11,
        15,
        19
      ],
      "skillFeatLevels": [
        2,
        4,
        6,
        8,
        10,
        12,
        14,
        16,
        18,
        20
      ],
      "skillIncreaseLevels": [
        3,
        5,
        7,
        9,
        11,
        13,
        15,
        17,
        19
      ]
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:class:barbarian",
    "kind": "class",
    "slug": "barbarian",
    "name": "Barbarian",
    "description": {
      "sourceHtml": "<p><em>Rage consumes you in battle. You delight in wreaking havoc and using powerful weapons to carve through your enemies, relying on astonishing durability without needing complicated techniques or rigid training. Your rages draw upon a vicious instinct, which you might associate with an animal, a spirit, or some part of yourself. To many barbarians, brute force is a hammer and every problem looks like a nail, whereas others try to hold back the storm of emotions inside them and release their rage only when it matters most.</em></p>\n<p>@UUID[Compendium.pf2e.journals.JournalEntry.kzxu2dI7tFxv6Ix6.JournalEntryPage.lvuutBI9BSCU6cWe]{Barbarian}</p>",
      "plainText": "Rage consumes you in battle. You delight in wreaking havoc and using powerful weapons to carve through your enemies, relying on astonishing durability without needing complicated techniques or rigid training. Your rages draw upon a vicious instinct, which you might associate with an animal, a spirit, or some part of yourself. To many barbarians, brute force is a hammer and every problem looks like a nail, whereas others try to hold back the storm of emotions inside them and release their rage only when it matters most. Barbarian"
    },
    "rarity": "common",
    "traits": [],
    "rules": [],
    "grantedItems": [
      {
        "name": "Greater Juggernaut",
        "image": "systems/pf2e/icons/features/classes/greater-juggernaut.webp",
        "level": 13,
        "uuid": "Compendium.pf2e.classfeatures.Item.Greater Juggernaut",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Greater Juggernaut"
        }
      },
      {
        "name": "Brutality",
        "image": "icons/skills/melee/strike-axe-blood-red.webp",
        "level": 5,
        "uuid": "Compendium.pf2e.classfeatures.Item.Brutality",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Brutality"
        }
      },
      {
        "name": "Medium Armor Expertise",
        "image": "icons/equipment/chest/breastplate-quilted-brown.webp",
        "level": 13,
        "uuid": "Compendium.pf2e.classfeatures.Item.Medium Armor Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Medium Armor Expertise"
        }
      },
      {
        "name": "Reflex Expertise",
        "image": "icons/magic/symbols/symbol-lightning-bolt.webp",
        "level": 9,
        "uuid": "Compendium.pf2e.classfeatures.Item.Reflex Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Reflex Expertise"
        }
      },
      {
        "name": "Perception Mastery",
        "image": "icons/magic/perception/eye-tendrils-web-purple.webp",
        "level": 17,
        "uuid": "Compendium.pf2e.classfeatures.Item.Perception Mastery",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Perception Mastery"
        }
      },
      {
        "name": "Revitalizing Rage",
        "image": "icons/magic/air/wind-vortex-swirl-red.webp",
        "level": 17,
        "uuid": "Compendium.pf2e.classfeatures.Item.Revitalizing Rage",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Revitalizing Rage"
        }
      },
      {
        "name": "Weapon Mastery",
        "image": "icons/skills/melee/blade-tip-chipped-blood-red.webp",
        "level": 13,
        "uuid": "Compendium.pf2e.classfeatures.Item.Weapon Mastery",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Weapon Mastery"
        }
      },
      {
        "name": "Indomitable Will",
        "image": "systems/pf2e/icons/features/classes/indomitable-will.webp",
        "level": 15,
        "uuid": "Compendium.pf2e.classfeatures.Item.Indomitable Will",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Indomitable Will"
        }
      },
      {
        "name": "Juggernaut",
        "image": "icons/creatures/mammals/bull-horned-blue.webp",
        "level": 7,
        "uuid": "Compendium.pf2e.classfeatures.Item.Juggernaut",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Juggernaut"
        }
      },
      {
        "name": "Furious Footfalls",
        "image": "icons/magic/symbols/question-stone-yellow.webp",
        "level": 3,
        "uuid": "Compendium.pf2e.classfeatures.Item.Furious Footfalls",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Furious Footfalls"
        }
      },
      {
        "name": "Devastator",
        "image": "icons/skills/melee/shield-damaged-broken-orange.webp",
        "level": 19,
        "uuid": "Compendium.pf2e.classfeatures.Item.Devastator",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Devastator"
        }
      },
      {
        "name": "Greater Weapon Specialization (Barbarian)",
        "image": "icons/skills/melee/hand-grip-sword-orange.webp",
        "level": 15,
        "uuid": "Compendium.pf2e.classfeatures.Item.Greater Weapon Specialization (Barbarian)",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Greater Weapon Specialization (Barbarian)"
        }
      },
      {
        "name": "Mighty Rage",
        "image": "icons/magic/symbols/mask-yellow-orange.webp",
        "level": 11,
        "uuid": "Compendium.pf2e.classfeatures.Item.Mighty Rage",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Mighty Rage"
        }
      },
      {
        "name": "Armor Mastery",
        "image": "icons/equipment/chest/breastplate-sculpted-grey.webp",
        "level": 19,
        "uuid": "Compendium.pf2e.classfeatures.Item.Armor Mastery",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Armor Mastery"
        }
      },
      {
        "name": "Weapon Specialization",
        "image": "systems/pf2e/icons/features/classes/weapon-specialization.webp",
        "level": 7,
        "uuid": "Compendium.pf2e.classfeatures.Item.Weapon Specialization",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Weapon Specialization"
        }
      },
      {
        "name": "Raging Resistance",
        "image": "icons/skills/social/intimidation-impressing.webp",
        "level": 9,
        "uuid": "Compendium.pf2e.classfeatures.Item.Raging Resistance",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Raging Resistance"
        }
      },
      {
        "name": "Instinct",
        "image": "icons/magic/symbols/question-stone-yellow.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Instinct",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Instinct"
        }
      },
      {
        "name": "Rage",
        "image": "systems/pf2e/icons/features/classes/rage.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Rage",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Rage"
        }
      },
      {
        "name": "Quick-Tempered",
        "image": "icons/magic/symbols/question-stone-yellow.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Quick-Tempered",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Quick-Tempered"
        }
      }
    ],
    "source": {
      "sourcePack": "classes",
      "sourceId": "YDRiP7uVvr9WRhOI",
      "sourcePath": "pf2e-master/packs/classes/barbarian.json",
      "slug": "barbarian",
      "image": "systems/pf2e/icons/classes/barbarian.webp",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "hitPointsPerLevel": 12,
    "keyAbility": {
      "options": [
        "str"
      ]
    },
    "proficiencies": {
      "perception": 2,
      "savingThrows": {
        "fortitude": 2,
        "reflex": 1,
        "will": 2
      },
      "attacks": {
        "simple": 1,
        "martial": 1,
        "advanced": 0,
        "unarmed": 1,
        "other": {
          "name": "",
          "rank": 0
        }
      },
      "defenses": {
        "unarmored": 1,
        "light": 1,
        "medium": 1,
        "heavy": 0
      },
      "spellcasting": 0
    },
    "trainedSkills": {
      "fixed": [
        "athletics"
      ],
      "additional": 3
    },
    "progression": {
      "ancestryFeatLevels": [
        1,
        5,
        9,
        13,
        17
      ],
      "classFeatLevels": [
        1,
        2,
        4,
        6,
        8,
        10,
        12,
        14,
        16,
        18,
        20
      ],
      "generalFeatLevels": [
        3,
        7,
        11,
        15,
        19
      ],
      "skillFeatLevels": [
        2,
        4,
        6,
        8,
        10,
        12,
        14,
        16,
        18,
        20
      ],
      "skillIncreaseLevels": [
        3,
        5,
        7,
        9,
        11,
        13,
        15,
        17,
        19
      ]
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:class:bard",
    "kind": "class",
    "slug": "bard",
    "name": "Bard",
    "description": {
      "sourceHtml": "<p><em>You are a master of artistry, a scholar of hidden secrets, and a captivating persuader. Using powerful performances, you influence minds and elevate souls to new levels of heroics. You might use your powers to become a charismatic leader, or perhaps you might instead be a counselor, manipulator, scholar, scoundrel, or virtuoso. While your versatility leads some to consider you a beguiling ne'er-do-well and a jack-of-all-trades, it's dangerous to dismiss you as a master of none.</em></p>\n<p><em>@UUID[Compendium.pf2e.journals.JournalEntry.kzxu2dI7tFxv6Ix6.JournalEntryPage.Tz0NWVqhZyt8EyUV]{Bard}</em></p>",
      "plainText": "You are a master of artistry, a scholar of hidden secrets, and a captivating persuader. Using powerful performances, you influence minds and elevate souls to new levels of heroics. You might use your powers to become a charismatic leader, or perhaps you might instead be a counselor, manipulator, scholar, scoundrel, or virtuoso. While your versatility leads some to consider you a beguiling ne'er-do-well and a jack-of-all-trades, it's dangerous to dismiss you as a master of none. Bard"
    },
    "rarity": "common",
    "traits": [],
    "rules": [],
    "grantedItems": [
      {
        "name": "Expert Spellcaster",
        "image": "icons/sundries/books/book-backed-silver-gold.webp",
        "level": 7,
        "uuid": "Compendium.pf2e.classfeatures.Item.Expert Spellcaster",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Expert Spellcaster"
        }
      },
      {
        "name": "Master Spellcaster",
        "image": "icons/skills/trades/academics-book-study-purple.webp",
        "level": 15,
        "uuid": "Compendium.pf2e.classfeatures.Item.Master Spellcaster",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Master Spellcaster"
        }
      },
      {
        "name": "Weapon Specialization",
        "image": "systems/pf2e/icons/features/classes/weapon-specialization.webp",
        "level": 13,
        "uuid": "Compendium.pf2e.classfeatures.Item.Weapon Specialization",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Weapon Specialization"
        }
      },
      {
        "name": "Magnum Opus",
        "image": "icons/tools/instruments/harp-yellow-teal.webp",
        "level": 19,
        "uuid": "Compendium.pf2e.classfeatures.Item.Magnum Opus",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Magnum Opus"
        }
      },
      {
        "name": "Spell Repertoire",
        "image": "icons/sundries/books/book-symbol-spiral-silver-blue.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Spell Repertoire",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Spell Repertoire"
        }
      },
      {
        "name": "Legendary Spellcaster",
        "image": "icons/sundries/books/book-open-purple.webp",
        "level": 19,
        "uuid": "Compendium.pf2e.classfeatures.Item.Legendary Spellcaster",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Legendary Spellcaster"
        }
      },
      {
        "name": "Performer's Heart",
        "image": "icons/magic/life/heart-pink.webp",
        "level": 9,
        "uuid": "Compendium.pf2e.classfeatures.Item.Performer's Heart",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Performer's Heart"
        }
      },
      {
        "name": "Reflex Expertise",
        "image": "icons/magic/symbols/symbol-lightning-bolt.webp",
        "level": 3,
        "uuid": "Compendium.pf2e.classfeatures.Item.Reflex Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Reflex Expertise"
        }
      },
      {
        "name": "Perception Mastery",
        "image": "icons/magic/perception/eye-tendrils-web-purple.webp",
        "level": 11,
        "uuid": "Compendium.pf2e.classfeatures.Item.Perception Mastery",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Perception Mastery"
        }
      },
      {
        "name": "Composition Spells",
        "image": "icons/tools/instruments/pipe-flue-tan.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Composition Spells",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Composition Spells"
        }
      },
      {
        "name": "Signature Spells",
        "image": "systems/pf2e/icons/features/classes/signature-spells-sorcerer.webp",
        "level": 3,
        "uuid": "Compendium.pf2e.classfeatures.Item.Signature Spells",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Signature Spells"
        }
      },
      {
        "name": "Fortitude Expertise",
        "image": "icons/magic/life/cross-explosion-burst-green.webp",
        "level": 9,
        "uuid": "Compendium.pf2e.classfeatures.Item.Fortitude Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Fortitude Expertise"
        }
      },
      {
        "name": "Muses",
        "image": "icons/magic/symbols/question-stone-yellow.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Muses",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Muses"
        }
      },
      {
        "name": "Light Armor Expertise",
        "image": "icons/equipment/back/mantle-collared-green.webp",
        "level": 13,
        "uuid": "Compendium.pf2e.classfeatures.Item.Light Armor Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Light Armor Expertise"
        }
      },
      {
        "name": "Occult Spellcasting",
        "image": "icons/equipment/head/hat-pointed-leather-black-glowing.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Occult Spellcasting",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Occult Spellcasting"
        }
      },
      {
        "name": "Greater Performer's Heart",
        "image": "icons/magic/life/heart-red-blue.webp",
        "level": 17,
        "uuid": "Compendium.pf2e.classfeatures.Item.Greater Performer's Heart",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Greater Performer's Heart"
        }
      },
      {
        "name": "Bard Weapon Expertise",
        "image": "systems/pf2e/icons/features/classes/bard-weapon-expertise.webp",
        "level": 11,
        "uuid": "Compendium.pf2e.classfeatures.Item.Bard Weapon Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Bard Weapon Expertise"
        }
      }
    ],
    "source": {
      "sourcePack": "classes",
      "sourceId": "3gweRQ5gn7szIWAv",
      "sourcePath": "pf2e-master/packs/classes/bard.json",
      "slug": "bard",
      "image": "systems/pf2e/icons/classes/bard.webp",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "hitPointsPerLevel": 8,
    "keyAbility": {
      "options": [
        "cha"
      ]
    },
    "proficiencies": {
      "perception": 2,
      "savingThrows": {
        "fortitude": 1,
        "reflex": 1,
        "will": 2
      },
      "attacks": {
        "simple": 1,
        "martial": 1,
        "advanced": 0,
        "unarmed": 1,
        "other": {
          "name": "",
          "rank": 0
        }
      },
      "defenses": {
        "unarmored": 1,
        "light": 1,
        "medium": 0,
        "heavy": 0
      },
      "spellcasting": 1
    },
    "trainedSkills": {
      "fixed": [
        "occultism",
        "performance"
      ],
      "additional": 4
    },
    "progression": {
      "ancestryFeatLevels": [
        1,
        5,
        9,
        13,
        17
      ],
      "classFeatLevels": [
        2,
        4,
        6,
        8,
        10,
        12,
        14,
        16,
        18,
        20
      ],
      "generalFeatLevels": [
        3,
        7,
        11,
        15,
        19
      ],
      "skillFeatLevels": [
        2,
        4,
        6,
        8,
        10,
        12,
        14,
        16,
        18,
        20
      ],
      "skillIncreaseLevels": [
        3,
        5,
        7,
        9,
        11,
        13,
        15,
        17,
        19
      ]
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:class:champion",
    "kind": "class",
    "slug": "champion",
    "name": "Champion",
    "description": {
      "sourceHtml": "<p><em>You are an emissary of a deity, a devoted servant who has taken up a weighty mantle, and you adhere to a code that holds you apart from those around you. While champions exist for every alignment, as a champion of good, you provide certainty and hope to the innocent. You have powerful defenses that you share freely with your allies and innocent bystanders, as well as holy power you use to end the threat of evil. Your devotion even attracts the attention of holy spirits who aid you on your journey.</em></p>\n<p><em>@UUID[Compendium.pf2e.journals.JournalEntry.kzxu2dI7tFxv6Ix6.JournalEntryPage.rebppVgBVi8J6TT2]{Champion}</em></p>",
      "plainText": "You are an emissary of a deity, a devoted servant who has taken up a weighty mantle, and you adhere to a code that holds you apart from those around you. While champions exist for every alignment, as a champion of good, you provide certainty and hope to the innocent. You have powerful defenses that you share freely with your allies and innocent bystanders, as well as holy power you use to end the threat of evil. Your devotion even attracts the attention of holy spirits who aid you on your journey. Champion"
    },
    "rarity": "common",
    "traits": [],
    "rules": [],
    "grantedItems": [
      {
        "name": "Armor Expertise",
        "image": "icons/equipment/chest/breastplate-banded-steel-gold.webp",
        "level": 7,
        "uuid": "Compendium.pf2e.classfeatures.Item.Armor Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Armor Expertise"
        }
      },
      {
        "name": "Champion Expertise",
        "image": "icons/magic/holy/prayer-hands-glowing-yellow-white.webp",
        "level": 9,
        "uuid": "Compendium.pf2e.classfeatures.Item.Champion Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Champion Expertise"
        }
      },
      {
        "name": "Reflex Expertise",
        "image": "icons/magic/symbols/symbol-lightning-bolt.webp",
        "level": 9,
        "uuid": "Compendium.pf2e.classfeatures.Item.Reflex Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Reflex Expertise"
        }
      },
      {
        "name": "Champion Mastery",
        "image": "icons/magic/nature/symbol-sun-yellow.webp",
        "level": 17,
        "uuid": "Compendium.pf2e.classfeatures.Item.Champion Mastery",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Champion Mastery"
        }
      },
      {
        "name": "Weapon Specialization",
        "image": "systems/pf2e/icons/features/classes/weapon-specialization.webp",
        "level": 7,
        "uuid": "Compendium.pf2e.classfeatures.Item.Weapon Specialization",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Weapon Specialization"
        }
      },
      {
        "name": "Deity (Champion)",
        "image": "systems/pf2e/icons/features/classes/deity.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Deity (Champion)",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Deity (Champion)"
        }
      },
      {
        "name": "Cause",
        "image": "icons/sundries/flags/banner-symbol-sun-gold-red.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Cause",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Cause"
        }
      },
      {
        "name": "Legendary Armor",
        "image": "icons/equipment/head/greathelm-banded-steel.webp",
        "level": 17,
        "uuid": "Compendium.pf2e.classfeatures.Item.Legendary Armor",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Legendary Armor"
        }
      },
      {
        "name": "Exalted Reaction",
        "image": "icons/skills/melee/swords-parry-block-yellow.webp",
        "level": 11,
        "uuid": "Compendium.pf2e.classfeatures.Item.Exalted Reaction",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Exalted Reaction"
        }
      },
      {
        "name": "Devotion Spells",
        "image": "icons/magic/light/explosion-star-glow-orange.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Devotion Spells",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Devotion Spells"
        }
      },
      {
        "name": "Shield Block",
        "image": "icons/equipment/shield/round-wooden-boss-gold-brown.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Shield Block",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Shield Block"
        }
      },
      {
        "name": "Blessing of the Devoted",
        "image": "icons/magic/light/explosion-star-glow-silhouette.webp",
        "level": 3,
        "uuid": "Compendium.pf2e.classfeatures.Item.Blessing of the Devoted",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Blessing of the Devoted"
        }
      },
      {
        "name": "Divine Will",
        "image": "icons/magic/holy/angel-winged-humanoid-blue.webp",
        "level": 11,
        "uuid": "Compendium.pf2e.classfeatures.Item.Divine Will",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Divine Will"
        }
      },
      {
        "name": "Relentless Reaction",
        "image": "icons/skills/melee/strike-sword-dagger-runes-yellow.webp",
        "level": 9,
        "uuid": "Compendium.pf2e.classfeatures.Item.Relentless Reaction",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Relentless Reaction"
        }
      },
      {
        "name": "Weapon Expertise",
        "image": "systems/pf2e/icons/features/classes/weapon-expertise.webp",
        "level": 5,
        "uuid": "Compendium.pf2e.classfeatures.Item.Weapon Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Weapon Expertise"
        }
      },
      {
        "name": "Perception Expertise",
        "image": "icons/creatures/eyes/human-single-blue.webp",
        "level": 11,
        "uuid": "Compendium.pf2e.classfeatures.Item.Perception Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Perception Expertise"
        }
      },
      {
        "name": "Armor Mastery",
        "image": "icons/equipment/chest/breastplate-sculpted-grey.webp",
        "level": 13,
        "uuid": "Compendium.pf2e.classfeatures.Item.Armor Mastery",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Armor Mastery"
        }
      },
      {
        "name": "Sacred Body",
        "image": "icons/magic/holy/angel-wings-gray.webp",
        "level": 9,
        "uuid": "Compendium.pf2e.classfeatures.Item.Sacred Body",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Sacred Body"
        }
      },
      {
        "name": "Hero's Defiance",
        "image": "icons/skills/melee/unarmed-punch-fist-yellow-red.webp",
        "level": 19,
        "uuid": "Compendium.pf2e.classfeatures.Item.Hero's Defiance",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Hero's Defiance"
        }
      },
      {
        "name": "Greater Weapon Specialization",
        "image": "icons/skills/melee/hand-grip-sword-orange.webp",
        "level": 15,
        "uuid": "Compendium.pf2e.classfeatures.Item.Greater Weapon Specialization",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Greater Weapon Specialization"
        }
      },
      {
        "name": "Weapon Mastery",
        "image": "systems/pf2e/icons/features/classes/weapon-mastery.webp",
        "level": 13,
        "uuid": "Compendium.pf2e.classfeatures.Item.Martial Weapon Mastery",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Martial Weapon Mastery"
        }
      }
    ],
    "source": {
      "sourcePack": "classes",
      "sourceId": "x8iwnpdLbfcoZkHA",
      "sourcePath": "pf2e-master/packs/classes/champion.json",
      "slug": "champion",
      "image": "systems/pf2e/icons/classes/champion.webp",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "hitPointsPerLevel": 10,
    "keyAbility": {
      "options": [
        "dex",
        "str"
      ]
    },
    "proficiencies": {
      "perception": 1,
      "savingThrows": {
        "fortitude": 2,
        "reflex": 1,
        "will": 2
      },
      "attacks": {
        "simple": 1,
        "martial": 1,
        "advanced": 0,
        "unarmed": 1,
        "other": {
          "name": "",
          "rank": 0
        }
      },
      "defenses": {
        "unarmored": 1,
        "light": 1,
        "medium": 1,
        "heavy": 1
      },
      "spellcasting": 1
    },
    "trainedSkills": {
      "fixed": [
        "religion"
      ],
      "additional": 2
    },
    "progression": {
      "ancestryFeatLevels": [
        1,
        5,
        9,
        13,
        17
      ],
      "classFeatLevels": [
        1,
        2,
        4,
        6,
        8,
        10,
        12,
        14,
        16,
        18,
        20
      ],
      "generalFeatLevels": [
        3,
        7,
        11,
        15,
        19
      ],
      "skillFeatLevels": [
        2,
        4,
        6,
        8,
        10,
        12,
        14,
        16,
        18,
        20
      ],
      "skillIncreaseLevels": [
        3,
        5,
        7,
        9,
        11,
        13,
        15,
        17,
        19
      ]
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:class:cleric",
    "kind": "class",
    "slug": "cleric",
    "name": "Cleric",
    "description": {
      "sourceHtml": "<p><em>Deities work their will upon the world in infinite ways, and you serve as one of their most stalwart mortal servants. Blessed with divine magic, you live the ideals of your faith, adorn yourself with the symbols of your church, and train diligently to wield your deity's favored weapon. Your spells might protect and heal your allies, or they might punish foes and enemies of your faith, as your deity wills. Yours is a life of devotion, spreading the teachings of your faith through both word and deed.</em></p>\n<p><em>@UUID[Compendium.pf2e.journals.JournalEntry.kzxu2dI7tFxv6Ix6.JournalEntryPage.N4ABcd6CcCbqmw3x]{Cleric}</em></p>",
      "plainText": "Deities work their will upon the world in infinite ways, and you serve as one of their most stalwart mortal servants. Blessed with divine magic, you live the ideals of your faith, adorn yourself with the symbols of your church, and train diligently to wield your deity's favored weapon. Your spells might protect and heal your allies, or they might punish foes and enemies of your faith, as your deity wills. Yours is a life of devotion, spreading the teachings of your faith through both word and deed. Cleric"
    },
    "rarity": "common",
    "traits": [],
    "rules": [],
    "grantedItems": [
      {
        "name": "Deity",
        "image": "systems/pf2e/icons/features/classes/deity.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Deity (Cleric)",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Deity (Cleric)"
        }
      },
      {
        "name": "Cleric Spellcasting",
        "image": "icons/weapons/axes/axe-double-gold.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Cleric Spellcasting",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Cleric Spellcasting"
        }
      },
      {
        "name": "Doctrine",
        "image": "icons/magic/symbols/question-stone-yellow.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Doctrine",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Doctrine"
        }
      },
      {
        "name": "First Doctrine",
        "image": "icons/magic/symbols/question-stone-yellow.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.First Doctrine",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "First Doctrine"
        }
      },
      {
        "name": "Divine Font",
        "image": "icons/magic/fire/flame-burning-hand-white.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Divine Font",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Divine Font"
        }
      },
      {
        "name": "Second Doctrine",
        "image": "icons/magic/symbols/question-stone-yellow.webp",
        "level": 3,
        "uuid": "Compendium.pf2e.classfeatures.Item.Second Doctrine",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Second Doctrine"
        }
      },
      {
        "name": "Perception Expertise",
        "image": "icons/creatures/eyes/human-single-blue.webp",
        "level": 5,
        "uuid": "Compendium.pf2e.classfeatures.Item.Perception Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Perception Expertise"
        }
      },
      {
        "name": "Third Doctrine",
        "image": "icons/magic/symbols/question-stone-yellow.webp",
        "level": 7,
        "uuid": "Compendium.pf2e.classfeatures.Item.Third Doctrine",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Third Doctrine"
        }
      },
      {
        "name": "Resolute Faith",
        "image": "icons/magic/holy/chalice-glowing-gold.webp",
        "level": 9,
        "uuid": "Compendium.pf2e.classfeatures.Item.Resolute Faith",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Resolute Faith"
        }
      },
      {
        "name": "Reflex Expertise",
        "image": "icons/magic/symbols/symbol-lightning-bolt.webp",
        "level": 11,
        "uuid": "Compendium.pf2e.classfeatures.Item.Reflex Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Reflex Expertise"
        }
      },
      {
        "name": "Fourth Doctrine",
        "image": "icons/magic/symbols/question-stone-yellow.webp",
        "level": 11,
        "uuid": "Compendium.pf2e.classfeatures.Item.Fourth Doctrine",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Fourth Doctrine"
        }
      },
      {
        "name": "Divine Defense",
        "image": "icons/creatures/abilities/wings-birdlike-blue.webp",
        "level": 13,
        "uuid": "Compendium.pf2e.classfeatures.Item.Divine Defense",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Divine Defense"
        }
      },
      {
        "name": "Fifth Doctrine",
        "image": "icons/magic/symbols/question-stone-yellow.webp",
        "level": 15,
        "uuid": "Compendium.pf2e.classfeatures.Item.Fifth Doctrine",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Fifth Doctrine"
        }
      },
      {
        "name": "Weapon Specialization",
        "image": "systems/pf2e/icons/features/classes/weapon-specialization.webp",
        "level": 13,
        "uuid": "Compendium.pf2e.classfeatures.Item.Weapon Specialization",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Weapon Specialization"
        }
      },
      {
        "name": "Final Doctrine",
        "image": "icons/magic/symbols/question-stone-yellow.webp",
        "level": 19,
        "uuid": "Compendium.pf2e.classfeatures.Item.Final Doctrine",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Final Doctrine"
        }
      },
      {
        "name": "Miraculous Spell",
        "image": "icons/magic/symbols/star-rising-purple.webp",
        "level": 19,
        "uuid": "Compendium.pf2e.classfeatures.Item.Miraculous Spell",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Miraculous Spell"
        }
      }
    ],
    "source": {
      "sourcePack": "classes",
      "sourceId": "EizrWvUPMS67Pahd",
      "sourcePath": "pf2e-master/packs/classes/cleric.json",
      "slug": "cleric",
      "image": "systems/pf2e/icons/classes/cleric.webp",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "hitPointsPerLevel": 8,
    "keyAbility": {
      "options": [
        "wis"
      ]
    },
    "proficiencies": {
      "perception": 1,
      "savingThrows": {
        "fortitude": 1,
        "reflex": 1,
        "will": 2
      },
      "attacks": {
        "simple": 1,
        "martial": 0,
        "advanced": 0,
        "unarmed": 1,
        "other": {
          "name": "Deity's favored weapon",
          "rank": 1
        }
      },
      "defenses": {
        "unarmored": 1,
        "light": 0,
        "medium": 0,
        "heavy": 0
      },
      "spellcasting": 1
    },
    "trainedSkills": {
      "fixed": [
        "religion"
      ],
      "additional": 2
    },
    "progression": {
      "ancestryFeatLevels": [
        1,
        5,
        9,
        13,
        17
      ],
      "classFeatLevels": [
        2,
        4,
        6,
        8,
        10,
        12,
        14,
        16,
        18,
        20
      ],
      "generalFeatLevels": [
        3,
        7,
        11,
        15,
        19
      ],
      "skillFeatLevels": [
        2,
        4,
        6,
        8,
        10,
        12,
        14,
        16,
        18,
        20
      ],
      "skillIncreaseLevels": [
        3,
        5,
        7,
        9,
        11,
        13,
        15,
        17,
        19
      ]
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:class:druid",
    "kind": "class",
    "slug": "druid",
    "name": "Druid",
    "description": {
      "sourceHtml": "<p><em>The power of nature is impossible to resist. It can bring ruin to the stoutest fortress in minutes, reducing even the mightiest works to rubble, burning them to ash, burying them beneath an avalanche of snow, or drowning them beneath the waves. It can provide endless bounty and breathtaking splendor to those who respect it—and an agonizing death to those who take it too lightly. You are one of those who hear nature's call. You stand in awe of the majesty of its power and give yourself over to its service.</em></p>\n<p>@UUID[Compendium.pf2e.journals.JournalEntry.kzxu2dI7tFxv6Ix6.JournalEntryPage.8ElntNAGahQka70r]{Druid}</p>",
      "plainText": "The power of nature is impossible to resist. It can bring ruin to the stoutest fortress in minutes, reducing even the mightiest works to rubble, burning them to ash, burying them beneath an avalanche of snow, or drowning them beneath the waves. It can provide endless bounty and breathtaking splendor to those who respect it—and an agonizing death to those who take it too lightly. You are one of those who hear nature's call. You stand in awe of the majesty of its power and give yourself over to its service. Druid"
    },
    "rarity": "common",
    "traits": [],
    "rules": [],
    "grantedItems": [
      {
        "name": "Anathema (Druid)",
        "image": "icons/consumables/plants/leaf-hastate-glowing-green.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Anathema (Druid)",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Anathema (Druid)"
        }
      },
      {
        "name": "Medium Armor Expertise",
        "image": "icons/equipment/chest/breastplate-quilted-brown.webp",
        "level": 13,
        "uuid": "Compendium.pf2e.classfeatures.Item.Medium Armor Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Medium Armor Expertise"
        }
      },
      {
        "name": "Reflex Expertise",
        "image": "icons/magic/symbols/symbol-lightning-bolt.webp",
        "level": 5,
        "uuid": "Compendium.pf2e.classfeatures.Item.Reflex Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Reflex Expertise"
        }
      },
      {
        "name": "Druid Spellcasting",
        "image": "icons/magic/symbols/elements-air-earth-fire-water.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Druid Spellcasting",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Druid Spellcasting"
        }
      },
      {
        "name": "Wild Willpower",
        "image": "icons/creatures/mammals/bull-horns-eyes-glowin-orange.webp",
        "level": 11,
        "uuid": "Compendium.pf2e.classfeatures.Item.Wild Willpower",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Wild Willpower"
        }
      },
      {
        "name": "Perception Expertise",
        "image": "icons/creatures/eyes/human-single-blue.webp",
        "level": 3,
        "uuid": "Compendium.pf2e.classfeatures.Item.Perception Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Perception Expertise"
        }
      },
      {
        "name": "Fortitude Expertise",
        "image": "icons/magic/life/cross-explosion-burst-green.webp",
        "level": 3,
        "uuid": "Compendium.pf2e.classfeatures.Item.Fortitude Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Fortitude Expertise"
        }
      },
      {
        "name": "Master Spellcaster",
        "image": "icons/skills/trades/academics-book-study-purple.webp",
        "level": 15,
        "uuid": "Compendium.pf2e.classfeatures.Item.Master Spellcaster",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Master Spellcaster"
        }
      },
      {
        "name": "Druidic Order",
        "image": "icons/magic/symbols/question-stone-yellow.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Druidic Order",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Druidic Order"
        }
      },
      {
        "name": "Wildsong",
        "image": "icons/magic/symbols/runes-carved-stone-green.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Wildsong",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Wildsong"
        }
      },
      {
        "name": "Legendary Spellcaster",
        "image": "icons/sundries/books/book-open-purple.webp",
        "level": 19,
        "uuid": "Compendium.pf2e.classfeatures.Item.Legendary Spellcaster",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Legendary Spellcaster"
        }
      },
      {
        "name": "Shield Block",
        "image": "icons/equipment/shield/round-wooden-boss-gold-brown.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Shield Block",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Shield Block"
        }
      },
      {
        "name": "Weapon Specialization",
        "image": "systems/pf2e/icons/features/classes/weapon-specialization.webp",
        "level": 13,
        "uuid": "Compendium.pf2e.classfeatures.Item.Weapon Specialization",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Weapon Specialization"
        }
      },
      {
        "name": "Voice of Nature",
        "image": "icons/creatures/amphibians/treefrog-leaf-green.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Voice of Nature",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Voice of Nature"
        }
      },
      {
        "name": "Expert Spellcaster",
        "image": "icons/sundries/books/book-backed-silver-gold.webp",
        "level": 7,
        "uuid": "Compendium.pf2e.classfeatures.Item.Expert Spellcaster",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Expert Spellcaster"
        }
      },
      {
        "name": "Primal Hierophant",
        "image": "icons/weapons/wands/wand-crook-yellow.webp",
        "level": 19,
        "uuid": "Compendium.pf2e.classfeatures.Item.Primal Hierophant",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Primal Hierophant"
        }
      },
      {
        "name": "Weapon Expertise",
        "image": "icons/skills/melee/hand-grip-sword-red.webp",
        "level": 11,
        "uuid": "Compendium.pf2e.classfeatures.Item.Weapon Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Weapon Expertise"
        }
      }
    ],
    "source": {
      "sourcePack": "classes",
      "sourceId": "7s57JDCaiYYCAdFx",
      "sourcePath": "pf2e-master/packs/classes/druid.json",
      "slug": "druid",
      "image": "systems/pf2e/icons/classes/druid.webp",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "hitPointsPerLevel": 8,
    "keyAbility": {
      "options": [
        "wis"
      ]
    },
    "proficiencies": {
      "perception": 1,
      "savingThrows": {
        "fortitude": 1,
        "reflex": 1,
        "will": 2
      },
      "attacks": {
        "simple": 1,
        "martial": 0,
        "advanced": 0,
        "unarmed": 1,
        "other": {
          "name": "",
          "rank": 0
        }
      },
      "defenses": {
        "unarmored": 1,
        "light": 1,
        "medium": 1,
        "heavy": 0
      },
      "spellcasting": 1
    },
    "trainedSkills": {
      "fixed": [
        "nature"
      ],
      "additional": 2
    },
    "progression": {
      "ancestryFeatLevels": [
        1,
        5,
        9,
        13,
        17
      ],
      "classFeatLevels": [
        2,
        4,
        6,
        8,
        10,
        12,
        14,
        16,
        18,
        20
      ],
      "generalFeatLevels": [
        3,
        7,
        11,
        15,
        19
      ],
      "skillFeatLevels": [
        2,
        4,
        6,
        8,
        10,
        12,
        14,
        16,
        18,
        20
      ],
      "skillIncreaseLevels": [
        3,
        5,
        7,
        9,
        11,
        13,
        15,
        17,
        19
      ]
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:class:exemplar",
    "kind": "class",
    "slug": "exemplar",
    "name": "Exemplar",
    "description": {
      "sourceHtml": "<p><em>As the war god died, his power rained through the many planes of creation, sparking conflict and instilling divine energy in those previously without it. Whether you were directly touched by this power, claimed it from an ancient being or artifact, or whether it awoke something long dormant in your lineage, a spark of the divine now blazes within your soul, granting you abilities, sacred weapons, and divine signifiers that reach into the realm previously reserved for gods and legends. How you wield these tools and grow your power is for you to decide—you may become a hero or you may turn to selfish ends, but one thing is certain: you intend to carve your epithet in history, immortalized in the memory of gods and mortals alike.</em></p>\n<p>@UUID[Compendium.pf2e.journals.JournalEntry.kzxu2dI7tFxv6Ix6.JournalEntryPage.CIQggvnSfmuLa7eH]{Exemplar}</p>",
      "plainText": "As the war god died, his power rained through the many planes of creation, sparking conflict and instilling divine energy in those previously without it. Whether you were directly touched by this power, claimed it from an ancient being or artifact, or whether it awoke something long dormant in your lineage, a spark of the divine now blazes within your soul, granting you abilities, sacred weapons, and divine signifiers that reach into the realm previously reserved for gods and legends. How you wield these tools and grow your power is for you to decide—you may become a hero or you may turn to selfish ends, but one thing is certain: you intend to carve your epithet in history, immortalized in the memory of gods and mortals alike. Exemplar"
    },
    "rarity": "rare",
    "traits": [],
    "rules": [],
    "grantedItems": [
      {
        "name": "Shield Block",
        "image": "icons/equipment/shield/round-wooden-boss-gold-brown.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Shield Block",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Shield Block"
        }
      },
      {
        "name": "Burnished Armor Mastery",
        "image": "icons/equipment/chest/breastplate-helmet-metal.webp",
        "level": 19,
        "uuid": "Compendium.pf2e.classfeatures.Item.Burnished Armor Mastery",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Burnished Armor Mastery"
        }
      },
      {
        "name": "Perception Expertise",
        "image": "icons/creatures/eyes/human-single-blue.webp",
        "level": 9,
        "uuid": "Compendium.pf2e.classfeatures.Item.Perception Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Perception Expertise"
        }
      },
      {
        "name": "Divine Premonition",
        "image": "icons/magic/control/silhouette-hold-change-blue.webp",
        "level": 9,
        "uuid": "Compendium.pf2e.classfeatures.Item.Divine Premonition",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Divine Premonition"
        }
      },
      {
        "name": "Sovereignty Epithet",
        "image": "icons/commodities/treasure/token-engraved-yellow-glowing.webp",
        "level": 15,
        "uuid": "Compendium.pf2e.classfeatures.Item.Sovereignty Epithet",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Sovereignty Epithet"
        }
      },
      {
        "name": "Greater Spirit Striking",
        "image": "icons/skills/melee/strike-blade-hooked-white-red.webp",
        "level": 15,
        "uuid": "Compendium.pf2e.classfeatures.Item.Greater Spirit Striking",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Greater Spirit Striking"
        }
      },
      {
        "name": "Mortality Reforged",
        "image": "icons/magic/defensive/shield-barrier-flaming-pentagon-orange.webp",
        "level": 15,
        "uuid": "Compendium.pf2e.classfeatures.Item.Mortality Reforged",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Mortality Reforged"
        }
      },
      {
        "name": "Deific Mastery",
        "image": "icons/magic/control/buff-flight-wings-runes-purple-orange.webp",
        "level": 17,
        "uuid": "Compendium.pf2e.classfeatures.Item.Deific Mastery",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Deific Mastery"
        }
      },
      {
        "name": "Root Epithet",
        "image": "icons/commodities/treasure/token-engraved-green-glowing.webp",
        "level": 3,
        "uuid": "Compendium.pf2e.classfeatures.Item.Root Epithet",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Root Epithet"
        }
      },
      {
        "name": "Greater Unassailable Soul",
        "image": "icons/creatures/abilities/bull-head-horns-glowing.webp",
        "level": 13,
        "uuid": "Compendium.pf2e.classfeatures.Item.Greater Unassailable Soul",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Greater Unassailable Soul"
        }
      },
      {
        "name": "Weapon Expertise",
        "image": "icons/skills/melee/hand-grip-sword-red.webp",
        "level": 5,
        "uuid": "Compendium.pf2e.classfeatures.Item.Weapon Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Weapon Expertise"
        }
      },
      {
        "name": "Divine Weapon Mastery",
        "image": "icons/skills/melee/hand-grip-sword-orange.webp",
        "level": 13,
        "uuid": "Compendium.pf2e.classfeatures.Item.Divine Weapon Mastery",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Divine Weapon Mastery"
        }
      },
      {
        "name": "Burnished Armor Expertise",
        "image": "icons/equipment/chest/breastplate-leather-brown-belted.webp",
        "level": 13,
        "uuid": "Compendium.pf2e.classfeatures.Item.Burnished Armor Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Burnished Armor Expertise"
        }
      },
      {
        "name": "Spirit Striking",
        "image": "icons/skills/melee/strike-blade-knife-white-red.webp",
        "level": 7,
        "uuid": "Compendium.pf2e.classfeatures.Item.Spirit Striking",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Spirit Striking"
        }
      },
      {
        "name": "Perception Mastery",
        "image": "icons/magic/perception/eye-tendrils-web-purple.webp",
        "level": 17,
        "uuid": "Compendium.pf2e.classfeatures.Item.Perception Mastery",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Perception Mastery"
        }
      },
      {
        "name": "Humble Strikes",
        "image": "icons/skills/melee/sword-echo-stylized-tan.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Humble Strikes",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Humble Strikes"
        }
      },
      {
        "name": "Unassailable Soul",
        "image": "icons/creatures/mammals/bull-horns-eyes-glowin-orange.webp",
        "level": 7,
        "uuid": "Compendium.pf2e.classfeatures.Item.Unassailable Soul",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Unassailable Soul"
        }
      },
      {
        "name": "Dominion Epithet",
        "image": "icons/commodities/treasure/token-engraved-purple-glowing.webp",
        "level": 7,
        "uuid": "Compendium.pf2e.classfeatures.Item.Dominion Epithet",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Dominion Epithet"
        }
      },
      {
        "name": "Divine Spark and Ikons",
        "image": "icons/magic/light/hand-sparks-glow-yellow.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Divine Spark and Ikons",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Divine Spark and Ikons"
        }
      },
      {
        "name": "Godly Expertise",
        "image": "icons/magic/control/buff-flight-wings-runes-purple.webp",
        "level": 9,
        "uuid": "Compendium.pf2e.classfeatures.Item.Godly Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Godly Expertise"
        }
      }
    ],
    "source": {
      "sourcePack": "classes",
      "sourceId": "vZ0jL7pwthV2pm4A",
      "sourcePath": "pf2e-master/packs/classes/exemplar.json",
      "slug": "exemplar",
      "image": "systems/pf2e/icons/default-icons/class.svg",
      "publication": {
        "title": "Pathfinder War of Immortals",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "hitPointsPerLevel": 10,
    "keyAbility": {
      "options": [
        "dex",
        "str"
      ]
    },
    "proficiencies": {
      "perception": 1,
      "savingThrows": {
        "fortitude": 2,
        "reflex": 1,
        "will": 2
      },
      "attacks": {
        "simple": 1,
        "martial": 1,
        "advanced": 0,
        "unarmed": 1,
        "other": {
          "name": "",
          "rank": 0
        }
      },
      "defenses": {
        "unarmored": 1,
        "light": 1,
        "medium": 1,
        "heavy": 0
      },
      "spellcasting": 0
    },
    "trainedSkills": {
      "fixed": [
        "religion"
      ],
      "additional": 3
    },
    "progression": {
      "ancestryFeatLevels": [
        1,
        5,
        9,
        13,
        17
      ],
      "classFeatLevels": [
        1,
        2,
        4,
        6,
        8,
        10,
        12,
        14,
        16,
        18,
        20
      ],
      "generalFeatLevels": [
        3,
        7,
        11,
        15,
        19
      ],
      "skillFeatLevels": [
        2,
        4,
        6,
        8,
        10,
        12,
        14,
        16,
        18,
        20
      ],
      "skillIncreaseLevels": [
        3,
        5,
        7,
        9,
        11,
        13,
        15,
        17,
        19
      ]
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:class:fighter",
    "kind": "class",
    "slug": "fighter",
    "name": "Fighter",
    "description": {
      "sourceHtml": "<p><em>Fighting for honor, greed, loyalty, or simply the thrill of battle, you are an undisputed master of weaponry and combat techniques. You combine your actions through clever combinations of opening moves, finishing strikes, and counterattacks whenever your foes are unwise enough to drop their guard. Whether you are a knight, mercenary, sharpshooter, or blade master, you have honed your martial skills into an art form and perform devastating critical attacks on your enemies.</em></p>\n<p><em>@UUID[Compendium.pf2e.journals.JournalEntry.kzxu2dI7tFxv6Ix6.JournalEntryPage.HZbrRRVzW7w17L2W]{Fighter}</em></p>",
      "plainText": "Fighting for honor, greed, loyalty, or simply the thrill of battle, you are an undisputed master of weaponry and combat techniques. You combine your actions through clever combinations of opening moves, finishing strikes, and counterattacks whenever your foes are unwise enough to drop their guard. Whether you are a knight, mercenary, sharpshooter, or blade master, you have honed your martial skills into an art form and perform devastating critical attacks on your enemies. Fighter"
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "ChoiceSet",
        "data": {
          "adjustName": false,
          "choices": [
            {
              "label": "PF2E.Skill.Acrobatics",
              "value": "acrobatics"
            },
            {
              "label": "PF2E.Skill.Athletics",
              "value": "athletics"
            }
          ],
          "flag": "fighterSkill",
          "key": "ChoiceSet",
          "prompt": "PF2E.SpecificRule.Prompt.Skill"
        }
      },
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "upgrade",
          "path": "system.skills.{item|flags.pf2e.rulesSelections.fighterSkill}.rank",
          "value": 1
        }
      }
    ],
    "grantedItems": [
      {
        "name": "Weapon Legend",
        "image": "icons/weapons/axes/axe-broad-engraved-black-grey.webp",
        "level": 13,
        "uuid": "Compendium.pf2e.classfeatures.Item.Weapon Legend",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Weapon Legend"
        }
      },
      {
        "name": "Fighter Expertise",
        "image": "icons/equipment/head/helm-barbute-rounded-steel.webp",
        "level": 11,
        "uuid": "Compendium.pf2e.classfeatures.Item.Fighter Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Fighter Expertise"
        }
      },
      {
        "name": "Armor Expertise",
        "image": "icons/equipment/chest/breastplate-banded-steel-gold.webp",
        "level": 11,
        "uuid": "Compendium.pf2e.classfeatures.Item.Armor Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Armor Expertise"
        }
      },
      {
        "name": "Reactive Strike",
        "image": "icons/skills/melee/strike-hammer-destructive-orange.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Reactive Strike",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Reactive Strike"
        }
      },
      {
        "name": "Tempered Reflexes",
        "image": "icons/magic/symbols/symbol-lightning-bolt.webp",
        "level": 15,
        "uuid": "Compendium.pf2e.classfeatures.Item.Tempered Reflexes",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Tempered Reflexes"
        }
      },
      {
        "name": "Shield Block",
        "image": "icons/equipment/shield/round-wooden-boss-gold-brown.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Shield Block",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Shield Block"
        }
      },
      {
        "name": "Battle Hardened",
        "image": "icons/creatures/mammals/bull-horned-blue.webp",
        "level": 9,
        "uuid": "Compendium.pf2e.classfeatures.Item.Battle Hardened",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Battle Hardened"
        }
      },
      {
        "name": "Improved Flexibility",
        "image": "icons/environment/settlement/target-dummy.webp",
        "level": 15,
        "uuid": "Compendium.pf2e.classfeatures.Item.Improved Flexibility",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Improved Flexibility"
        }
      },
      {
        "name": "Battlefield Surveyor",
        "image": "icons/environment/people/charge.webp",
        "level": 7,
        "uuid": "Compendium.pf2e.classfeatures.Item.Battlefield Surveyor",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Battlefield Surveyor"
        }
      },
      {
        "name": "Bravery",
        "image": "icons/sundries/flags/banner-standard-tattered-red.webp",
        "level": 3,
        "uuid": "Compendium.pf2e.classfeatures.Item.Bravery",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Bravery"
        }
      },
      {
        "name": "Armor Mastery",
        "image": "icons/equipment/chest/breastplate-sculpted-grey.webp",
        "level": 17,
        "uuid": "Compendium.pf2e.classfeatures.Item.Armor Mastery",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Armor Mastery"
        }
      },
      {
        "name": "Combat Flexibility",
        "image": "icons/environment/settlement/target-dummy.webp",
        "level": 9,
        "uuid": "Compendium.pf2e.classfeatures.Item.Combat Flexibility",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Combat Flexibility"
        }
      },
      {
        "name": "Weapon Specialization",
        "image": "systems/pf2e/icons/features/classes/weapon-specialization.webp",
        "level": 7,
        "uuid": "Compendium.pf2e.classfeatures.Item.Weapon Specialization",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Weapon Specialization"
        }
      },
      {
        "name": "Fighter Weapon Mastery",
        "image": "icons/weapons/swords/sword-guard-steel-green.webp",
        "level": 5,
        "uuid": "Compendium.pf2e.classfeatures.Item.Fighter Weapon Mastery",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Fighter Weapon Mastery"
        }
      },
      {
        "name": "Greater Weapon Specialization",
        "image": "icons/skills/melee/hand-grip-sword-orange.webp",
        "level": 15,
        "uuid": "Compendium.pf2e.classfeatures.Item.Greater Weapon Specialization",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Greater Weapon Specialization"
        }
      },
      {
        "name": "Versatile Legend",
        "image": "icons/skills/ranged/arrow-flying-broadhead-metal.webp",
        "level": 19,
        "uuid": "Compendium.pf2e.classfeatures.Item.Versatile Legend",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Versatile Legend"
        }
      }
    ],
    "source": {
      "sourcePack": "classes",
      "sourceId": "8zn3cD6GSmoo1LW4",
      "sourcePath": "pf2e-master/packs/classes/fighter.json",
      "slug": "fighter",
      "image": "systems/pf2e/icons/classes/fighter.webp",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "hitPointsPerLevel": 10,
    "keyAbility": {
      "options": [
        "dex",
        "str"
      ]
    },
    "proficiencies": {
      "perception": 2,
      "savingThrows": {
        "fortitude": 2,
        "reflex": 2,
        "will": 1
      },
      "attacks": {
        "simple": 2,
        "martial": 2,
        "advanced": 1,
        "unarmed": 2,
        "other": {
          "name": "",
          "rank": 0
        }
      },
      "defenses": {
        "unarmored": 1,
        "light": 1,
        "medium": 1,
        "heavy": 1
      },
      "spellcasting": 0
    },
    "trainedSkills": {
      "fixed": [],
      "additional": 3
    },
    "progression": {
      "ancestryFeatLevels": [
        1,
        5,
        9,
        13,
        17
      ],
      "classFeatLevels": [
        1,
        2,
        4,
        6,
        8,
        10,
        12,
        14,
        16,
        18,
        20
      ],
      "generalFeatLevels": [
        3,
        7,
        11,
        15,
        19
      ],
      "skillFeatLevels": [
        2,
        4,
        6,
        8,
        10,
        12,
        14,
        16,
        18,
        20
      ],
      "skillIncreaseLevels": [
        3,
        5,
        7,
        9,
        11,
        13,
        15,
        17,
        19
      ]
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:class:gunslinger",
    "kind": "class",
    "slug": "gunslinger",
    "name": "Gunslinger",
    "description": {
      "sourceHtml": "<p><em>While some fear projectile weapons, you savor the searing flash, wild kick, and cloying smoke that accompanies a gunshot, or snap of the cable and telltale thunk of your crossbow just before your bolt finds purchase. Ready to draw a bead on an enemy at every turn, you rely on your reflexes, steady hand, and knowledge of your weapons to riddle your foes with holes.</em></p>\n<p><em>@UUID[Compendium.pf2e.journals.JournalEntry.kzxu2dI7tFxv6Ix6.JournalEntryPage.88K0xjShkhkckbhv]{Gunslinger}</em></p>",
      "plainText": "While some fear projectile weapons, you savor the searing flash, wild kick, and cloying smoke that accompanies a gunshot, or snap of the cable and telltale thunk of your crossbow just before your bolt finds purchase. Ready to draw a bead on an enemy at every turn, you rely on your reflexes, steady hand, and knowledge of your weapons to riddle your foes with holes. Gunslinger"
    },
    "rarity": "uncommon",
    "traits": [],
    "rules": [
      {
        "key": "MartialProficiency",
        "data": {
          "definition": [
            "item:category:simple",
            {
              "or": [
                "item:group:firearm",
                "item:group:crossbow"
              ]
            }
          ],
          "key": "MartialProficiency",
          "label": "PF2E.SpecificRule.MartialProficiency.SimpleFirearmsCrossbows",
          "slug": "simple-firearms-crossbows",
          "value": 2
        }
      },
      {
        "key": "MartialProficiency",
        "data": {
          "definition": [
            "item:category:martial",
            {
              "or": [
                "item:group:firearm",
                "item:group:crossbow"
              ]
            }
          ],
          "key": "MartialProficiency",
          "label": "PF2E.SpecificRule.MartialProficiency.MartialFirearmsCrossbows",
          "slug": "martial-firearms-crossbows",
          "value": 2
        }
      },
      {
        "key": "MartialProficiency",
        "data": {
          "definition": [
            "item:category:advanced",
            {
              "or": [
                "item:group:firearm",
                "item:group:crossbow"
              ]
            }
          ],
          "key": "MartialProficiency",
          "label": "PF2E.SpecificRule.MartialProficiency.AdvancedFirearmsCrossbows",
          "slug": "advanced-firearms-crossbows",
          "value": 1
        }
      }
    ],
    "grantedItems": [
      {
        "name": "Shootist's Edge",
        "image": "systems/pf2e/icons/features/classes/shootists-edge.webp",
        "level": 17,
        "uuid": "Compendium.pf2e.classfeatures.Item.Shootist's Edge",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Shootist's Edge"
        }
      },
      {
        "name": "Gunslinger Expertise",
        "image": "systems/pf2e/icons/features/classes/gunslinger-expertise.webp",
        "level": 9,
        "uuid": "Compendium.pf2e.classfeatures.Item.Gunslinger Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Gunslinger Expertise"
        }
      },
      {
        "name": "Greater Deed",
        "image": "systems/pf2e/icons/features/classes/greater-deed.webp",
        "level": 15,
        "uuid": "Compendium.pf2e.classfeatures.Item.Greater Deed",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Greater Deed"
        }
      },
      {
        "name": "Advanced Deed",
        "image": "systems/pf2e/icons/features/classes/advanced-deed.webp",
        "level": 9,
        "uuid": "Compendium.pf2e.classfeatures.Item.Advanced Deed",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Advanced Deed"
        }
      },
      {
        "name": "Medium Armor Expertise",
        "image": "icons/equipment/chest/breastplate-quilted-brown.webp",
        "level": 13,
        "uuid": "Compendium.pf2e.classfeatures.Item.Medium Armor Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Medium Armor Expertise"
        }
      },
      {
        "name": "Gunslinger's Way",
        "image": "icons/magic/symbols/question-stone-yellow.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Gunslinger's Way",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Gunslinger's Way"
        }
      },
      {
        "name": "Slinger's Precision",
        "image": "icons/skills/targeting/crosshair-bars-yellow.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Slinger's Precision",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Slinger's Precision"
        }
      },
      {
        "name": "Perception Legend",
        "image": "systems/pf2e/icons/features/classes/incredible-sense.webp",
        "level": 19,
        "uuid": "Compendium.pf2e.classfeatures.Item.Perception Legend",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Perception Legend"
        }
      },
      {
        "name": "Medium Armor Mastery",
        "image": "icons/equipment/chest/breastplate-collared-steel.webp",
        "level": 19,
        "uuid": "Compendium.pf2e.classfeatures.Item.Medium Armor Mastery",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Medium Armor Mastery"
        }
      },
      {
        "name": "Gunslinging Legend",
        "image": "systems/pf2e/icons/features/classes/gunslinging-legend.webp",
        "level": 13,
        "uuid": "Compendium.pf2e.classfeatures.Item.Gunslinging Legend",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Gunslinging Legend"
        }
      },
      {
        "name": "Blast Dodger",
        "image": "icons/magic/fire/explosion-embers-evade-silhouette.webp",
        "level": 11,
        "uuid": "Compendium.pf2e.classfeatures.Item.Blast Dodger",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Blast Dodger"
        }
      },
      {
        "name": "Lead Constitution",
        "image": "icons/commodities/materials/bowl-powder-grey.webp",
        "level": 17,
        "uuid": "Compendium.pf2e.classfeatures.Item.Lead Constitution",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Lead Constitution"
        }
      },
      {
        "name": "Weapon Specialization",
        "image": "systems/pf2e/icons/features/classes/weapon-specialization.webp",
        "level": 7,
        "uuid": "Compendium.pf2e.classfeatures.Item.Weapon Specialization",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Weapon Specialization"
        }
      },
      {
        "name": "Stubborn",
        "image": "icons/creatures/mammals/bull-horns-eyes-glowin-orange.webp",
        "level": 3,
        "uuid": "Compendium.pf2e.classfeatures.Item.Stubborn",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Stubborn"
        }
      },
      {
        "name": "Gunslinger Weapon Mastery",
        "image": "systems/pf2e/icons/features/classes/gunslinger-weapon-mastery.webp",
        "level": 5,
        "uuid": "Compendium.pf2e.classfeatures.Item.Gunslinger Weapon Mastery",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Gunslinger Weapon Mastery"
        }
      },
      {
        "name": "Perception Mastery",
        "image": "icons/magic/perception/eye-tendrils-web-purple.webp",
        "level": 7,
        "uuid": "Compendium.pf2e.classfeatures.Item.Perception Mastery",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Perception Mastery"
        }
      },
      {
        "name": "Greater Weapon Specialization (Level 15)",
        "image": "icons/skills/melee/hand-grip-sword-orange.webp",
        "level": 15,
        "uuid": "Compendium.pf2e.classfeatures.Item.Greater Weapon Specialization",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Greater Weapon Specialization"
        }
      }
    ],
    "source": {
      "sourcePack": "classes",
      "sourceId": "Z9li154CPNmun29Q",
      "sourcePath": "pf2e-master/packs/classes/gunslinger.json",
      "slug": "gunslinger",
      "image": "systems/pf2e/icons/classes/gunslinger.webp",
      "publication": {
        "title": "Pathfinder Guns & Gears",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "hitPointsPerLevel": 8,
    "keyAbility": {
      "options": [
        "dex"
      ]
    },
    "proficiencies": {
      "perception": 2,
      "savingThrows": {
        "fortitude": 2,
        "reflex": 2,
        "will": 1
      },
      "attacks": {
        "simple": 1,
        "martial": 1,
        "advanced": 0,
        "unarmed": 1,
        "other": {
          "name": "Simple Firearms, Martial Firearms",
          "rank": 2
        }
      },
      "defenses": {
        "unarmored": 1,
        "light": 1,
        "medium": 1,
        "heavy": 0
      },
      "spellcasting": 0
    },
    "trainedSkills": {
      "fixed": [],
      "additional": 3
    },
    "progression": {
      "ancestryFeatLevels": [
        1,
        5,
        9,
        13,
        17
      ],
      "classFeatLevels": [
        1,
        2,
        4,
        6,
        8,
        10,
        12,
        14,
        16,
        18,
        20
      ],
      "generalFeatLevels": [
        3,
        7,
        11,
        15,
        19
      ],
      "skillFeatLevels": [
        2,
        4,
        6,
        8,
        10,
        12,
        14,
        16,
        18,
        20
      ],
      "skillIncreaseLevels": [
        3,
        5,
        7,
        9,
        11,
        13,
        15,
        17,
        19
      ]
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:class:inventor",
    "kind": "class",
    "slug": "inventor",
    "name": "Inventor",
    "description": {
      "sourceHtml": "<p><em>Any tinkerer can follow a diagram to make a device, but you invent the impossible! Every strange contraption you dream up is a unique experiment pushing the edge of possibility, a mysterious machine that seems to work for only you. You're always on the verge of the next great breakthrough, and every trial and tribulation is another opportunity to test and tune. If you can dream it, you can build it.</em></p>\n<p><em>@UUID[Compendium.pf2e.journals.JournalEntry.kzxu2dI7tFxv6Ix6.JournalEntryPage.gcRmL4Id1ggKDhvg]{Inventor}</em></p>",
      "plainText": "Any tinkerer can follow a diagram to make a device, but you invent the impossible! Every strange contraption you dream up is a unique experiment pushing the edge of possibility, a mysterious machine that seems to work for only you. You're always on the verge of the next great breakthrough, and every trial and tribulation is another opportunity to test and tune. If you can dream it, you can build it. Inventor"
    },
    "rarity": "uncommon",
    "traits": [],
    "rules": [
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "override",
          "path": "flags.pf2e.inventor.explode",
          "priority": 49,
          "value": "fire"
        }
      },
      {
        "key": "Note",
        "data": {
          "key": "Note",
          "predicate": [
            "self:action:trait:unstable"
          ],
          "selector": "strike-attack-roll",
          "text": "PF2E.SpecificRule.Inventor.Unstable.Note",
          "title": "PF2E.TraitUnstable"
        }
      },
      {
        "key": "Note",
        "data": {
          "key": "Note",
          "outcome": [
            "failure"
          ],
          "predicate": [
            "unstable-check"
          ],
          "selector": [
            "flat-check"
          ],
          "text": "PF2E.SpecificRule.Inventor.Unstable.FlatCheck.Failure",
          "title": "PF2E.Check.Result.Degree.Check.failure"
        }
      },
      {
        "key": "Note",
        "data": {
          "key": "Note",
          "outcome": [
            "criticalFailure"
          ],
          "predicate": [
            "unstable-check"
          ],
          "selector": [
            "flat-check"
          ],
          "text": "PF2E.SpecificRule.Inventor.Unstable.FlatCheck.CriticalFailure",
          "title": "PF2E.Check.Result.Degree.Check.criticalFailure"
        }
      }
    ],
    "grantedItems": [
      {
        "name": "Inventor Weapon Expertise",
        "image": "systems/pf2e/icons/features/classes/weapon-expertise.webp",
        "level": 5,
        "uuid": "Compendium.pf2e.classfeatures.Item.Inventor Weapon Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Inventor Weapon Expertise"
        }
      },
      {
        "name": "Anvil's Hardness",
        "image": "icons/skills/trades/smithing-anvil-silver-red.webp",
        "level": 17,
        "uuid": "Compendium.pf2e.classfeatures.Item.Anvil's Hardness",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Anvil's Hardness"
        }
      },
      {
        "name": "Peerless Inventor",
        "image": "systems/pf2e/icons/features/classes/peerless-inventor.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Peerless Inventor",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Peerless Inventor"
        }
      },
      {
        "name": "Medium Armor Expertise (Inventor)",
        "image": "icons/equipment/chest/breastplate-quilted-brown.webp",
        "level": 11,
        "uuid": "Compendium.pf2e.classfeatures.Item.Medium Armor Expertise (Inventor)",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Medium Armor Expertise (Inventor)"
        }
      },
      {
        "name": "Perception Expertise",
        "image": "icons/creatures/eyes/human-single-blue.webp",
        "level": 13,
        "uuid": "Compendium.pf2e.classfeatures.Item.Perception Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Perception Expertise"
        }
      },
      {
        "name": "Complete Reconfiguration",
        "image": "systems/pf2e/icons/features/classes/complete-reconfiguration.webp",
        "level": 13,
        "uuid": "Compendium.pf2e.classfeatures.Item.Complete Reconfiguration",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Complete Reconfiguration"
        }
      },
      {
        "name": "Master Overdrive",
        "image": "systems/pf2e/icons/features/classes/master-overdrive.webp",
        "level": 7,
        "uuid": "Compendium.pf2e.classfeatures.Item.Master Overdrive",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Master Overdrive"
        }
      },
      {
        "name": "Offensive Boost",
        "image": "systems/pf2e/icons/features/classes/offensive-boost.webp",
        "level": 9,
        "uuid": "Compendium.pf2e.classfeatures.Item.Offensive Boost",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Offensive Boost"
        }
      },
      {
        "name": "Reflex Expertise",
        "image": "icons/magic/symbols/symbol-lightning-bolt.webp",
        "level": 7,
        "uuid": "Compendium.pf2e.classfeatures.Item.Reflex Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Reflex Expertise"
        }
      },
      {
        "name": "Medium Armor Mastery",
        "image": "icons/equipment/chest/breastplate-collared-steel.webp",
        "level": 19,
        "uuid": "Compendium.pf2e.classfeatures.Item.Medium Armor Mastery",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Medium Armor Mastery"
        }
      },
      {
        "name": "Greater Weapon Specialization (Level 15)",
        "image": "icons/skills/melee/hand-grip-sword-orange.webp",
        "level": 15,
        "uuid": "Compendium.pf2e.classfeatures.Item.Greater Weapon Specialization",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Greater Weapon Specialization"
        }
      },
      {
        "name": "Revolutionary Innovation",
        "image": "systems/pf2e/icons/features/classes/revolutionary-innovation.webp",
        "level": 15,
        "uuid": "Compendium.pf2e.classfeatures.Item.Revolutionary Innovation",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Revolutionary Innovation"
        }
      },
      {
        "name": "Inventive Mastery",
        "image": "systems/pf2e/icons/features/classes/inventive-mastery.webp",
        "level": 17,
        "uuid": "Compendium.pf2e.classfeatures.Item.Inventive Mastery",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Inventive Mastery"
        }
      },
      {
        "name": "Weapon Specialization",
        "image": "systems/pf2e/icons/features/classes/weapon-specialization.webp",
        "level": 7,
        "uuid": "Compendium.pf2e.classfeatures.Item.Weapon Specialization",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Weapon Specialization"
        }
      },
      {
        "name": "Shield Block",
        "image": "icons/equipment/shield/round-wooden-boss-gold-brown.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Shield Block",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Shield Block"
        }
      },
      {
        "name": "Breakthrough Innovation",
        "image": "systems/pf2e/icons/features/classes/breakthrough-innovation.webp",
        "level": 7,
        "uuid": "Compendium.pf2e.classfeatures.Item.Breakthrough Innovation",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Breakthrough Innovation"
        }
      },
      {
        "name": "Inventive Expertise",
        "image": "systems/pf2e/icons/features/classes/inventive-expertise.webp",
        "level": 9,
        "uuid": "Compendium.pf2e.classfeatures.Item.Inventive Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Inventive Expertise"
        }
      },
      {
        "name": "Legendary Overdrive",
        "image": "systems/pf2e/icons/features/classes/legendary-overdrive.webp",
        "level": 15,
        "uuid": "Compendium.pf2e.classfeatures.Item.Legendary Overdrive",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Legendary Overdrive"
        }
      },
      {
        "name": "Infinite Invention",
        "image": "systems/pf2e/icons/features/classes/infinite-invention.webp",
        "level": 19,
        "uuid": "Compendium.pf2e.classfeatures.Item.Infinite Invention",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Infinite Invention"
        }
      },
      {
        "name": "Explode",
        "image": "systems/pf2e/icons/features/classes/explode.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Explode",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Explode"
        }
      },
      {
        "name": "Overdrive",
        "image": "systems/pf2e/icons/features/classes/overdrive.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Overdrive",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Overdrive"
        }
      },
      {
        "name": "Reconfigure",
        "image": "systems/pf2e/icons/features/classes/reconfigure.webp",
        "level": 3,
        "uuid": "Compendium.pf2e.classfeatures.Item.Reconfigure",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Reconfigure"
        }
      },
      {
        "name": "Expert Overdrive",
        "image": "systems/pf2e/icons/features/classes/expert-overdrive.webp",
        "level": 3,
        "uuid": "Compendium.pf2e.classfeatures.Item.Expert Overdrive",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Expert Overdrive"
        }
      },
      {
        "name": "Churning Mind",
        "image": "icons/commodities/tech/cog-brass.webp",
        "level": 11,
        "uuid": "Compendium.pf2e.classfeatures.Item.Churning Mind",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Churning Mind"
        }
      },
      {
        "name": "Inventor Weapon Mastery",
        "image": "systems/pf2e/icons/features/classes/weapon-mastery.webp",
        "level": 13,
        "uuid": "Compendium.pf2e.classfeatures.Item.Inventor Weapon Mastery",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Inventor Weapon Mastery"
        }
      },
      {
        "name": "Innovation",
        "image": "icons/commodities/tech/bulb.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Innovation",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Innovation"
        }
      }
    ],
    "source": {
      "sourcePack": "classes",
      "sourceId": "30qVs46dVNflgQNx",
      "sourcePath": "pf2e-master/packs/classes/inventor.json",
      "slug": "inventor",
      "image": "systems/pf2e/icons/classes/inventor.webp",
      "publication": {
        "title": "Pathfinder Guns & Gears",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "hitPointsPerLevel": 8,
    "keyAbility": {
      "options": [
        "int"
      ]
    },
    "proficiencies": {
      "perception": 1,
      "savingThrows": {
        "fortitude": 2,
        "reflex": 1,
        "will": 2
      },
      "attacks": {
        "simple": 1,
        "martial": 1,
        "advanced": 0,
        "unarmed": 1,
        "other": {
          "name": "",
          "rank": 0
        }
      },
      "defenses": {
        "unarmored": 1,
        "light": 1,
        "medium": 1,
        "heavy": 0
      },
      "spellcasting": 0
    },
    "trainedSkills": {
      "fixed": [
        "crafting"
      ],
      "additional": 3
    },
    "progression": {
      "ancestryFeatLevels": [
        1,
        5,
        9,
        13,
        17
      ],
      "classFeatLevels": [
        1,
        2,
        4,
        6,
        8,
        10,
        12,
        14,
        16,
        18,
        20
      ],
      "generalFeatLevels": [
        3,
        7,
        11,
        15,
        19
      ],
      "skillFeatLevels": [
        2,
        4,
        6,
        8,
        10,
        12,
        14,
        16,
        18,
        20
      ],
      "skillIncreaseLevels": [
        3,
        5,
        7,
        9,
        11,
        13,
        15,
        17,
        19
      ]
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:class:investigator",
    "kind": "class",
    "slug": "investigator",
    "name": "Investigator",
    "description": {
      "sourceHtml": "<p><em>You seek to uncover the truth, doggedly pursuing leads to reveal the plots of devious villains, discover ancient secrets, or unravel other mysteries. Your analytical mind quickly formulates solutions to complicated problems and your honed senses identify even the most obscure clues. Wielding knowledge as a weapon, you study the creatures and dangers you encounter to exploit their weaknesses.</em></p>\n<p><em>@UUID[Compendium.pf2e.journals.JournalEntry.kzxu2dI7tFxv6Ix6.JournalEntryPage.omDi7otL3UWLVgct]{Investigator}</em></p>",
      "plainText": "You seek to uncover the truth, doggedly pursuing leads to reveal the plots of devious villains, discover ancient secrets, or unravel other mysteries. Your analytical mind quickly formulates solutions to complicated problems and your honed senses identify even the most obscure clues. Wielding knowledge as a weapon, you study the creatures and dangers you encounter to exploit their weaknesses. Investigator"
    },
    "rarity": "common",
    "traits": [],
    "rules": [],
    "grantedItems": [
      {
        "name": "Deductive Improvisation",
        "image": "systems/pf2e/icons/features/classes/deductive-improvisation.webp",
        "level": 11,
        "uuid": "Compendium.pf2e.classfeatures.Item.Deductive Improvisation",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Deductive Improvisation"
        }
      },
      {
        "name": "Incredible Senses",
        "image": "systems/pf2e/icons/features/classes/incredible-sense.webp",
        "level": 13,
        "uuid": "Compendium.pf2e.classfeatures.Item.Perception Legend",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Perception Legend"
        }
      },
      {
        "name": "Fortitude Expertise",
        "image": "icons/magic/life/cross-explosion-burst-green.webp",
        "level": 9,
        "uuid": "Compendium.pf2e.classfeatures.Item.Fortitude Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Fortitude Expertise"
        }
      },
      {
        "name": "Dogged Will",
        "image": "systems/pf2e/icons/features/feats/wolf-stance.webp",
        "level": 11,
        "uuid": "Compendium.pf2e.classfeatures.Item.Dogged Will",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Dogged Will"
        }
      },
      {
        "name": "On the Case",
        "image": "icons/sundries/flags/banner-symbol-sun-gold-red.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.On the Case",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "On the Case"
        }
      },
      {
        "name": "Weapon Mastery",
        "image": "systems/pf2e/icons/features/classes/weapon-mastery.webp",
        "level": 13,
        "uuid": "Compendium.pf2e.classfeatures.Item.Martial Weapon Mastery",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Martial Weapon Mastery"
        }
      },
      {
        "name": "Weapon Expertise",
        "image": "systems/pf2e/icons/features/classes/weapon-expertise.webp",
        "level": 5,
        "uuid": "Compendium.pf2e.classfeatures.Item.Weapon Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Weapon Expertise"
        }
      },
      {
        "name": "Keen Recollection",
        "image": "icons/commodities/biological/organ-brain-pink-purple.webp",
        "level": 3,
        "uuid": "Compendium.pf2e.classfeatures.Item.Keen Recollection",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Keen Recollection"
        }
      },
      {
        "name": "Vigilant Senses",
        "image": "icons/magic/perception/eye-tendrils-web-purple.webp",
        "level": 7,
        "uuid": "Compendium.pf2e.classfeatures.Item.Perception Mastery",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Perception Mastery"
        }
      },
      {
        "name": "Light Armor Mastery (Level 19)",
        "image": "icons/equipment/chest/breastplate-rivited-red.webp",
        "level": 19,
        "uuid": "Compendium.pf2e.classfeatures.Item.Light Armor Mastery",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Light Armor Mastery"
        }
      },
      {
        "name": "Methodology",
        "image": "icons/magic/symbols/question-stone-yellow.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Methodology",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Methodology"
        }
      },
      {
        "name": "Investigator Expertise",
        "image": "icons/commodities/treasure/medal-ribbon-gold-blue.webp",
        "level": 9,
        "uuid": "Compendium.pf2e.classfeatures.Item.Investigator Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Investigator Expertise"
        }
      },
      {
        "name": "Savvy Reflexes",
        "image": "systems/pf2e/icons/features/classes/evasion.webp",
        "level": 15,
        "uuid": "Compendium.pf2e.classfeatures.Item.Savvy Reflexes",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Savvy Reflexes"
        }
      },
      {
        "name": "Master Detective",
        "image": "systems/pf2e/icons/features/classes/master-detective.webp",
        "level": 19,
        "uuid": "Compendium.pf2e.classfeatures.Item.Master Detective",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Master Detective"
        }
      },
      {
        "name": "Greater Weapon Specialization (Level 15)",
        "image": "icons/skills/melee/hand-grip-sword-orange.webp",
        "level": 15,
        "uuid": "Compendium.pf2e.classfeatures.Item.Greater Weapon Specialization",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Greater Weapon Specialization"
        }
      },
      {
        "name": "Devise a Stratagem",
        "image": "systems/pf2e/icons/features/classes/devise-a-stratagem.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Devise a Stratagem",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Devise a Stratagem"
        }
      },
      {
        "name": "Strategic Strike",
        "image": "systems/pf2e/icons/features/classes/strategic-strike.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Strategic Strike",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Strategic Strike"
        }
      },
      {
        "name": "Skillful Lessons",
        "image": "icons/tools/hand/hammer-and-nail.webp",
        "level": 3,
        "uuid": "Compendium.pf2e.classfeatures.Item.Skillful Lessons",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Skillful Lessons"
        }
      },
      {
        "name": "Light Armor Expertise",
        "image": "icons/equipment/back/mantle-collared-green.webp",
        "level": 13,
        "uuid": "Compendium.pf2e.classfeatures.Item.Light Armor Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Light Armor Expertise"
        }
      },
      {
        "name": "Weapon Specialization",
        "image": "systems/pf2e/icons/features/classes/weapon-specialization.webp",
        "level": 7,
        "uuid": "Compendium.pf2e.classfeatures.Item.Weapon Specialization",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Weapon Specialization"
        }
      },
      {
        "name": "Greater Dogged Will",
        "image": "systems/pf2e/icons/features/feats/rampaging-form-frozen-wind.webp",
        "level": 17,
        "uuid": "Compendium.pf2e.classfeatures.Item.Greater Dogged Will",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Greater Dogged Will"
        }
      }
    ],
    "source": {
      "sourcePack": "classes",
      "sourceId": "4wrSCyX6akmyo7Wj",
      "sourcePath": "pf2e-master/packs/classes/investigator.json",
      "slug": "investigator",
      "image": "systems/pf2e/icons/classes/investigator.webp",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "hitPointsPerLevel": 8,
    "keyAbility": {
      "options": [
        "int"
      ]
    },
    "proficiencies": {
      "perception": 2,
      "savingThrows": {
        "fortitude": 1,
        "reflex": 2,
        "will": 2
      },
      "attacks": {
        "simple": 1,
        "martial": 1,
        "advanced": 0,
        "unarmed": 1,
        "other": {
          "name": "",
          "rank": 0
        }
      },
      "defenses": {
        "unarmored": 1,
        "light": 1,
        "medium": 0,
        "heavy": 0
      },
      "spellcasting": 0
    },
    "trainedSkills": {
      "fixed": [
        "society"
      ],
      "additional": 4
    },
    "progression": {
      "ancestryFeatLevels": [
        1,
        5,
        9,
        13,
        17
      ],
      "classFeatLevels": [
        1,
        2,
        4,
        6,
        8,
        10,
        12,
        14,
        16,
        18,
        20
      ],
      "generalFeatLevels": [
        3,
        7,
        11,
        15,
        19
      ],
      "skillFeatLevels": [
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20
      ],
      "skillIncreaseLevels": [
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20
      ]
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:class:kineticist",
    "kind": "class",
    "slug": "kineticist",
    "name": "Kineticist",
    "description": {
      "sourceHtml": "<p><em>The power of the elements flows from within you. Roaring fire pure water, fleeting air, steadfast earth, twisting wood, slicing metal. A kinetic gate inextricably tied to your body channels power directly from the elemental planes, causing elements to leap to your hand, whirl around your body, and blast foes at your whim. As your connection to the planes grows, you attain true mastery over your chosen elements.</em></p>\n<p><em>@UUID[Compendium.pf2e.journals.JournalEntry.kzxu2dI7tFxv6Ix6.JournalEntryPage.lNWQPwgT4vhYCOT7]{Kineticist}</em></p>",
      "plainText": "The power of the elements flows from within you. Roaring fire pure water, fleeting air, steadfast earth, twisting wood, slicing metal. A kinetic gate inextricably tied to your body channels power directly from the elemental planes, causing elements to leap to your hand, whirl around your body, and blast foes at your whim. As your connection to the planes grows, you attain true mastery over your chosen elements. Kineticist"
    },
    "rarity": "common",
    "traits": [],
    "rules": [],
    "grantedItems": [
      {
        "name": "Kinetic Durability",
        "image": "systems/pf2e/icons/features/classes/magical-fortitude.webp",
        "level": 7,
        "uuid": "Compendium.pf2e.classfeatures.Item.Kinetic Durability",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Kinetic Durability"
        }
      },
      {
        "name": "Light Armor Mastery",
        "image": "icons/equipment/chest/breastplate-rivited-red.webp",
        "level": 19,
        "uuid": "Compendium.pf2e.classfeatures.Item.Light Armor Mastery",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Light Armor Mastery"
        }
      },
      {
        "name": "Kinetic Mastery",
        "image": "icons/magic/fire/flame-burning-fist-strike.webp",
        "level": 15,
        "uuid": "Compendium.pf2e.classfeatures.Item.Kinetic Mastery",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Kinetic Mastery"
        }
      },
      {
        "name": "Reflow Elements",
        "image": "icons/magic/fire/explosion-flame-blue.webp",
        "level": 11,
        "uuid": "Compendium.pf2e.classfeatures.Item.Reflow Elements",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Reflow Elements"
        }
      },
      {
        "name": "Kinetic Legend",
        "image": "icons/magic/light/explosion-star-glow-silhouette.webp",
        "level": 19,
        "uuid": "Compendium.pf2e.classfeatures.Item.Kinetic Legend",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Kinetic Legend"
        }
      },
      {
        "name": "Kinetic Aura",
        "image": "icons/magic/unholy/orb-swirling-teal.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Kinetic Aura",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Kinetic Aura"
        }
      },
      {
        "name": "Kinetic Gate",
        "image": "systems/pf2e/icons/spells/abundant-step.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Kinetic Gate",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Kinetic Gate"
        }
      },
      {
        "name": "Second Gate's Threshold",
        "image": "icons/magic/symbols/elements-air-earth-fire-water.webp",
        "level": 9,
        "uuid": "Compendium.pf2e.classfeatures.Item.Second Gate's Threshold",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Second Gate's Threshold"
        }
      },
      {
        "name": "Fourth Gate's Threshold",
        "image": "icons/magic/symbols/elements-air-earth-fire-water.webp",
        "level": 17,
        "uuid": "Compendium.pf2e.classfeatures.Item.Fourth Gate's Threshold",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Fourth Gate's Threshold"
        }
      },
      {
        "name": "Kinetic Quickness",
        "image": "icons/magic/symbols/symbol-lightning-bolt.webp",
        "level": 11,
        "uuid": "Compendium.pf2e.classfeatures.Item.Kinetic Quickness",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Kinetic Quickness"
        }
      },
      {
        "name": "Impulses",
        "image": "systems/pf2e/icons/spells/awaken-portal.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Impulses",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Impulses"
        }
      },
      {
        "name": "Double Reflow",
        "image": "icons/magic/water/projectiles-ice-explosion.webp",
        "level": 17,
        "uuid": "Compendium.pf2e.classfeatures.Item.Double Reflow",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Double Reflow"
        }
      },
      {
        "name": "Weapon Expertise",
        "image": "systems/pf2e/icons/features/classes/weapon-expertise.webp",
        "level": 11,
        "uuid": "Compendium.pf2e.classfeatures.Item.Weapon Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Weapon Expertise"
        }
      },
      {
        "name": "Gate's Threshold",
        "image": "icons/magic/symbols/elements-air-earth-fire-water.webp",
        "level": 5,
        "uuid": "Compendium.pf2e.classfeatures.Item.Gate's Threshold",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Gate's Threshold"
        }
      },
      {
        "name": "Light Armor Expertise",
        "image": "icons/equipment/back/mantle-collared-green.webp",
        "level": 13,
        "uuid": "Compendium.pf2e.classfeatures.Item.Light Armor Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Light Armor Expertise"
        }
      },
      {
        "name": "Will Expertise",
        "image": "systems/pf2e/icons/features/classes/walls-of-will.webp",
        "level": 3,
        "uuid": "Compendium.pf2e.classfeatures.Item.Will Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Will Expertise"
        }
      },
      {
        "name": "Perception Expertise",
        "image": "icons/creatures/eyes/human-single-blue.webp",
        "level": 9,
        "uuid": "Compendium.pf2e.classfeatures.Item.Perception Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Perception Expertise"
        }
      },
      {
        "name": "Final Gate",
        "image": "icons/skills/targeting/target-glowing-yellow.webp",
        "level": 19,
        "uuid": "Compendium.pf2e.classfeatures.Item.Final Gate",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Final Gate"
        }
      },
      {
        "name": "Third Gate's Threshold",
        "image": "icons/magic/symbols/elements-air-earth-fire-water.webp",
        "level": 13,
        "uuid": "Compendium.pf2e.classfeatures.Item.Third Gate's Threshold",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Third Gate's Threshold"
        }
      },
      {
        "name": "Extract Element",
        "image": "systems/pf2e/icons/spells/disapperance.webp",
        "level": 3,
        "uuid": "Compendium.pf2e.classfeatures.Item.Extract Element",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Extract Element"
        }
      },
      {
        "name": "Kinetic Expertise",
        "image": "icons/magic/water/wave-water-teal.webp",
        "level": 7,
        "uuid": "Compendium.pf2e.classfeatures.Item.Kinetic Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Kinetic Expertise"
        }
      },
      {
        "name": "Weapon Specialization",
        "image": "systems/pf2e/icons/features/classes/weapon-specialization.webp",
        "level": 13,
        "uuid": "Compendium.pf2e.classfeatures.Item.Weapon Specialization",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Weapon Specialization"
        }
      },
      {
        "name": "Greater Kinetic Durability",
        "image": "icons/magic/life/cross-explosion-burst-green.webp",
        "level": 15,
        "uuid": "Compendium.pf2e.classfeatures.Item.Greater Kinetic Durability",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Greater Kinetic Durability"
        }
      }
    ],
    "source": {
      "sourcePack": "classes",
      "sourceId": "RggQN3bX5SEcsffR",
      "sourcePath": "pf2e-master/packs/classes/kineticist.json",
      "slug": "kineticist",
      "image": "systems/pf2e/icons/default-icons/class.svg",
      "publication": {
        "title": "Pathfinder Rage of Elements",
        "license": "OGL",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "hitPointsPerLevel": 8,
    "keyAbility": {
      "options": [
        "con"
      ]
    },
    "proficiencies": {
      "perception": 1,
      "savingThrows": {
        "fortitude": 2,
        "reflex": 2,
        "will": 1
      },
      "attacks": {
        "simple": 1,
        "martial": 0,
        "advanced": 0,
        "unarmed": 1,
        "other": {
          "name": "",
          "rank": 0
        }
      },
      "defenses": {
        "unarmored": 1,
        "light": 1,
        "medium": 0,
        "heavy": 0
      },
      "spellcasting": 0
    },
    "trainedSkills": {
      "fixed": [
        "nature"
      ],
      "additional": 3
    },
    "progression": {
      "ancestryFeatLevels": [
        1,
        5,
        9,
        13,
        17
      ],
      "classFeatLevels": [
        1,
        2,
        4,
        6,
        8,
        10,
        12,
        14,
        16,
        18,
        20
      ],
      "generalFeatLevels": [
        3,
        7,
        11,
        15,
        19
      ],
      "skillFeatLevels": [
        2,
        4,
        6,
        8,
        10,
        12,
        14,
        16,
        18,
        20
      ],
      "skillIncreaseLevels": [
        3,
        5,
        7,
        9,
        11,
        13,
        15,
        17,
        19
      ]
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:class:magus",
    "kind": "class",
    "slug": "magus",
    "name": "Magus",
    "description": {
      "sourceHtml": "<p><em>Combining the physicality and technique of a warrior with the ability to cast arcane magic, you seek to perfect the art of fusing spell and strike. While the hefty tome you carry reflects hours conducting arcane research, your enemies need no reminder of your training. They recognize it as you take them down.</em></p>\n<p><em>@UUID[Compendium.pf2e.journals.JournalEntry.kzxu2dI7tFxv6Ix6.JournalEntryPage.YVoyzV9v4QyP2UIC]{Magus}</em></p>",
      "plainText": "Combining the physicality and technique of a warrior with the ability to cast arcane magic, you seek to perfect the art of fusing spell and strike. While the hefty tome you carry reflects hours conducting arcane research, your enemies need no reminder of your training. They recognize it as you take them down. Magus"
    },
    "rarity": "common",
    "traits": [],
    "rules": [],
    "grantedItems": [
      {
        "name": "Studious Spells",
        "image": "icons/sundries/documents/document-torn-diagram-tan.webp",
        "level": 7,
        "uuid": "Compendium.pf2e.classfeatures.Item.Studious Spells",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Studious Spells"
        }
      },
      {
        "name": "Weapon Expertise",
        "image": "systems/pf2e/icons/features/classes/weapon-expertise.webp",
        "level": 5,
        "uuid": "Compendium.pf2e.classfeatures.Item.Weapon Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Weapon Expertise"
        }
      },
      {
        "name": "Arcane Spellcasting (Magus)",
        "image": "icons/sundries/books/book-eye-purple.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Arcane Spellcasting (Magus)",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Arcane Spellcasting (Magus)"
        }
      },
      {
        "name": "Lightning Reflexes",
        "image": "icons/magic/symbols/symbol-lightning-bolt.webp",
        "level": 5,
        "uuid": "Compendium.pf2e.classfeatures.Item.Reflex Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Reflex Expertise"
        }
      },
      {
        "name": "Arcane Cascade",
        "image": "systems/pf2e/icons/features/classes/arcane-cascade.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Arcane Cascade",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Arcane Cascade"
        }
      },
      {
        "name": "Double Spellstrike",
        "image": "icons/skills/melee/blade-tips-double-blue.webp",
        "level": 19,
        "uuid": "Compendium.pf2e.classfeatures.Item.Double Spellstrike",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Double Spellstrike"
        }
      },
      {
        "name": "Spellstrike",
        "image": "systems/pf2e/icons/features/classes/spellstrike.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Spellstrike",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Spellstrike"
        }
      },
      {
        "name": "Medium Armor Mastery",
        "image": "icons/equipment/chest/breastplate-collared-steel.webp",
        "level": 17,
        "uuid": "Compendium.pf2e.classfeatures.Item.Medium Armor Mastery",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Medium Armor Mastery"
        }
      },
      {
        "name": "Expert Spellcaster",
        "image": "icons/sundries/books/book-backed-silver-gold.webp",
        "level": 9,
        "uuid": "Compendium.pf2e.classfeatures.Item.Expert Spellcaster",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Expert Spellcaster"
        }
      },
      {
        "name": "Master Spellcaster",
        "image": "icons/skills/trades/academics-book-study-purple.webp",
        "level": 17,
        "uuid": "Compendium.pf2e.classfeatures.Item.Master Spellcaster",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Master Spellcaster"
        }
      },
      {
        "name": "Weapon Mastery",
        "image": "icons/skills/melee/blade-tip-chipped-blood-red.webp",
        "level": 13,
        "uuid": "Compendium.pf2e.classfeatures.Item.Weapon Mastery",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Weapon Mastery"
        }
      },
      {
        "name": "Hybrid Study",
        "image": "icons/magic/symbols/question-stone-yellow.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Hybrid Study",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Hybrid Study"
        }
      },
      {
        "name": "Medium Armor Expertise",
        "image": "icons/equipment/chest/breastplate-quilted-brown.webp",
        "level": 11,
        "uuid": "Compendium.pf2e.classfeatures.Item.Medium Armor Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Medium Armor Expertise"
        }
      },
      {
        "name": "Weapon Specialization",
        "image": "systems/pf2e/icons/features/classes/weapon-specialization.webp",
        "level": 7,
        "uuid": "Compendium.pf2e.classfeatures.Item.Weapon Specialization",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Weapon Specialization"
        }
      },
      {
        "name": "Greater Weapon Specialization (Level 15)",
        "image": "icons/skills/melee/hand-grip-sword-orange.webp",
        "level": 15,
        "uuid": "Compendium.pf2e.classfeatures.Item.Greater Weapon Specialization",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Greater Weapon Specialization"
        }
      },
      {
        "name": "Conflux Spells",
        "image": "systems/pf2e/icons/features/classes/conflux-spells.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Conflux Spells",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Conflux Spells"
        }
      },
      {
        "name": "Alertness",
        "image": "icons/creatures/eyes/human-single-blue.webp",
        "level": 9,
        "uuid": "Compendium.pf2e.classfeatures.Item.Alertness",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Alertness"
        }
      },
      {
        "name": "Resolve",
        "image": "icons/creatures/mammals/bull-horns-eyes-glowin-orange.webp",
        "level": 9,
        "uuid": "Compendium.pf2e.classfeatures.Item.Resolve",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Resolve"
        }
      },
      {
        "name": "Juggernaut",
        "image": "icons/creatures/mammals/bull-horned-blue.webp",
        "level": 15,
        "uuid": "Compendium.pf2e.classfeatures.Item.Juggernaut",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Juggernaut"
        }
      }
    ],
    "source": {
      "sourcePack": "classes",
      "sourceId": "HQBA9Yx2s8ycvz3C",
      "sourcePath": "pf2e-master/packs/classes/magus.json",
      "slug": "magus",
      "image": "systems/pf2e/icons/classes/magus.webp",
      "publication": {
        "title": "Pathfinder Secrets of Magic",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "hitPointsPerLevel": 8,
    "keyAbility": {
      "options": [
        "dex",
        "str"
      ]
    },
    "proficiencies": {
      "perception": 1,
      "savingThrows": {
        "fortitude": 2,
        "reflex": 1,
        "will": 2
      },
      "attacks": {
        "simple": 1,
        "martial": 1,
        "advanced": 0,
        "unarmed": 1,
        "other": {
          "name": "",
          "rank": 0
        }
      },
      "defenses": {
        "unarmored": 1,
        "light": 1,
        "medium": 1,
        "heavy": 0
      },
      "spellcasting": 1
    },
    "trainedSkills": {
      "fixed": [
        "arcana"
      ],
      "additional": 2
    },
    "progression": {
      "ancestryFeatLevels": [
        1,
        5,
        9,
        13,
        17
      ],
      "classFeatLevels": [
        2,
        4,
        6,
        8,
        10,
        12,
        14,
        16,
        18,
        20
      ],
      "generalFeatLevels": [
        3,
        7,
        11,
        15,
        19
      ],
      "skillFeatLevels": [
        2,
        4,
        6,
        8,
        10,
        12,
        14,
        16,
        18,
        20
      ],
      "skillIncreaseLevels": [
        3,
        5,
        7,
        9,
        11,
        13,
        15,
        17,
        19
      ]
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:class:monk",
    "kind": "class",
    "slug": "monk",
    "name": "Monk",
    "description": {
      "sourceHtml": "<p><em>The strength of your fist flows from your mind and spirit. You seek perfection-honing your body into a flawless instrument and your mind into an orderly bastion of wisdom. You're a fierce combatant renowned for martial arts skills and combat stances that grant you unique fighting moves. While the challenge of mastering many fighting styles drives you to great heights, you also enjoy meditating on philosophical questions and discovering new ways to obtain peace and enlightenment.</em></p>\n<p><em>@UUID[Compendium.pf2e.journals.JournalEntry.kzxu2dI7tFxv6Ix6.JournalEntryPage.hGKd722Kn4ZxIOJs]{Monk}</em></p>",
      "plainText": "The strength of your fist flows from your mind and spirit. You seek perfection-honing your body into a flawless instrument and your mind into an orderly bastion of wisdom. You're a fierce combatant renowned for martial arts skills and combat stances that grant you unique fighting moves. While the challenge of mastering many fighting styles drives you to great heights, you also enjoy meditating on philosophical questions and discovering new ways to obtain peace and enlightenment. Monk"
    },
    "rarity": "common",
    "traits": [],
    "rules": [],
    "grantedItems": [
      {
        "name": "Mystic Strikes",
        "image": "icons/magic/fire/flame-burning-embers-yellow.webp",
        "level": 3,
        "uuid": "Compendium.pf2e.classfeatures.Item.Mystic Strikes",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Mystic Strikes"
        }
      },
      {
        "name": "Weapon Specialization",
        "image": "systems/pf2e/icons/features/classes/weapon-specialization.webp",
        "level": 7,
        "uuid": "Compendium.pf2e.classfeatures.Item.Weapon Specialization",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Weapon Specialization"
        }
      },
      {
        "name": "Second Path to Perfection",
        "image": "icons/magic/symbols/question-stone-yellow.webp",
        "level": 11,
        "uuid": "Compendium.pf2e.classfeatures.Item.Second Path to Perfection",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Second Path to Perfection"
        }
      },
      {
        "name": "Greater Weapon Specialization (Level 15)",
        "image": "icons/skills/melee/hand-grip-sword-orange.webp",
        "level": 15,
        "uuid": "Compendium.pf2e.classfeatures.Item.Greater Weapon Specialization",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Greater Weapon Specialization"
        }
      },
      {
        "name": "Incredible Movement",
        "image": "systems/pf2e/icons/features/classes/incredible-movement.webp",
        "level": 3,
        "uuid": "Compendium.pf2e.classfeatures.Item.Incredible Movement",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Incredible Movement"
        }
      },
      {
        "name": "Expert Strikes",
        "image": "icons/skills/melee/hand-grip-staff-yellow-brown.webp",
        "level": 5,
        "uuid": "Compendium.pf2e.classfeatures.Item.Expert Strikes",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Expert Strikes"
        }
      },
      {
        "name": "Flurry of Blows",
        "image": "icons/skills/melee/unarmed-punch-fist-yellow-red.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Flurry of Blows",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Flurry of Blows"
        }
      },
      {
        "name": "Perception Expertise",
        "image": "icons/creatures/eyes/human-single-blue.webp",
        "level": 5,
        "uuid": "Compendium.pf2e.classfeatures.Item.Perception Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Perception Expertise"
        }
      },
      {
        "name": "Graceful Legend",
        "image": "systems/pf2e/icons/features/classes/graceful-legend.webp",
        "level": 17,
        "uuid": "Compendium.pf2e.classfeatures.Item.Graceful Legend",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Graceful Legend"
        }
      },
      {
        "name": "Powerful Fist",
        "image": "icons/skills/melee/unarmed-punch-fist.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Powerful Fist",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Powerful Fist"
        }
      },
      {
        "name": "Graceful Mastery",
        "image": "icons/magic/defensive/illusion-evasion-echo-purple.webp",
        "level": 13,
        "uuid": "Compendium.pf2e.classfeatures.Item.Graceful Mastery",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Graceful Mastery"
        }
      },
      {
        "name": "Monk Expertise",
        "image": "icons/magic/unholy/silhouette-robe-evil-power.webp",
        "level": 9,
        "uuid": "Compendium.pf2e.classfeatures.Item.Monk Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Monk Expertise"
        }
      },
      {
        "name": "Metal Strikes",
        "image": "icons/magic/lightning/fist-unarmed-strike-blue-green.webp",
        "level": 9,
        "uuid": "Compendium.pf2e.classfeatures.Item.Metal Strikes",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Metal Strikes"
        }
      },
      {
        "name": "Adamantine Strikes",
        "image": "systems/pf2e/icons/features/classes/adamantine-strikes.webp",
        "level": 17,
        "uuid": "Compendium.pf2e.classfeatures.Item.Adamantine Strikes",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Adamantine Strikes"
        }
      },
      {
        "name": "Path to Perfection",
        "image": "icons/magic/symbols/question-stone-yellow.webp",
        "level": 7,
        "uuid": "Compendium.pf2e.classfeatures.Item.Path to Perfection",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Path to Perfection"
        }
      },
      {
        "name": "Perfected Form",
        "image": "icons/magic/unholy/strike-body-life-soul-purple.webp",
        "level": 19,
        "uuid": "Compendium.pf2e.classfeatures.Item.Perfected Form",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Perfected Form"
        }
      },
      {
        "name": "Third Path to Perfection",
        "image": "icons/magic/symbols/question-stone-yellow.webp",
        "level": 15,
        "uuid": "Compendium.pf2e.classfeatures.Item.Third Path to Perfection",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Third Path to Perfection"
        }
      },
      {
        "name": "Master Strikes",
        "image": "icons/magic/fire/flame-burning-fist-strike.webp",
        "level": 13,
        "uuid": "Compendium.pf2e.classfeatures.Item.Master Strikes",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Master Strikes"
        }
      }
    ],
    "source": {
      "sourcePack": "classes",
      "sourceId": "YPxpk9JbMnKjbNLc",
      "sourcePath": "pf2e-master/packs/classes/monk.json",
      "slug": "monk",
      "image": "systems/pf2e/icons/classes/monk.webp",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "hitPointsPerLevel": 10,
    "keyAbility": {
      "options": [
        "dex",
        "str"
      ]
    },
    "proficiencies": {
      "perception": 1,
      "savingThrows": {
        "fortitude": 2,
        "reflex": 2,
        "will": 2
      },
      "attacks": {
        "simple": 1,
        "martial": 0,
        "advanced": 0,
        "unarmed": 1,
        "other": {
          "name": "",
          "rank": 0
        }
      },
      "defenses": {
        "unarmored": 2,
        "light": 0,
        "medium": 0,
        "heavy": 0
      },
      "spellcasting": 0
    },
    "trainedSkills": {
      "fixed": [],
      "additional": 4
    },
    "progression": {
      "ancestryFeatLevels": [
        1,
        5,
        9,
        13,
        17
      ],
      "classFeatLevels": [
        1,
        2,
        4,
        6,
        8,
        10,
        12,
        14,
        16,
        18,
        20
      ],
      "generalFeatLevels": [
        3,
        7,
        11,
        15,
        19
      ],
      "skillFeatLevels": [
        2,
        4,
        6,
        8,
        10,
        12,
        14,
        16,
        18,
        20
      ],
      "skillIncreaseLevels": [
        3,
        5,
        7,
        9,
        11,
        13,
        15,
        17,
        19
      ]
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:class:oracle",
    "kind": "class",
    "slug": "oracle",
    "name": "Oracle",
    "description": {
      "sourceHtml": "<p><em>Your conduit to divine power eschews the traditional channels of prayer and servitude—you instead glean sacred truths and great mysteries embodied in overarching concepts, whether because you perceive the common ground across multiple deities or circumvent their power entirely.</em></p>\n<p><em>You explore one of these mysteries and draw upon its power to cast miraculous spells, but that power comes with a terrible price: a curse that grows stronger the more you draw upon it, which you might uphold as an instrument of the divine or view as punishment from the gods.</em></p>\n<p><em>@UUID[Compendium.pf2e.journals.JournalEntry.kzxu2dI7tFxv6Ix6.JournalEntryPage.bqaqOx3naiwTozBX]{Oracle}</em></p>",
      "plainText": "Your conduit to divine power eschews the traditional channels of prayer and servitude—you instead glean sacred truths and great mysteries embodied in overarching concepts, whether because you perceive the common ground across multiple deities or circumvent their power entirely. You explore one of these mysteries and draw upon its power to cast miraculous spells, but that power comes with a terrible price: a curse that grows stronger the more you draw upon it, which you might uphold as an instrument of the divine or view as punishment from the gods. Oracle"
    },
    "rarity": "common",
    "traits": [],
    "rules": [],
    "grantedItems": [
      {
        "name": "Mysterious Resolve",
        "image": "icons/creatures/mammals/bull-horns-eyes-glowin-orange.webp",
        "level": 7,
        "uuid": "Compendium.pf2e.classfeatures.Item.Mysterious Resolve",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Mysterious Resolve"
        }
      },
      {
        "name": "Oracle Spellcasting",
        "image": "icons/weapons/axes/axe-double-gold.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Oracle Spellcasting",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Oracle Spellcasting"
        }
      },
      {
        "name": "Mystery",
        "image": "icons/magic/symbols/question-stone-yellow.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Mystery",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Mystery"
        }
      },
      {
        "name": "Signature Spells",
        "image": "systems/pf2e/icons/features/classes/signature-spells-sorcerer.webp",
        "level": 3,
        "uuid": "Compendium.pf2e.classfeatures.Item.Signature Spells",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Signature Spells"
        }
      },
      {
        "name": "Legendary Spellcaster",
        "image": "icons/sundries/books/book-open-purple.webp",
        "level": 19,
        "uuid": "Compendium.pf2e.classfeatures.Item.Legendary Spellcaster",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Legendary Spellcaster"
        }
      },
      {
        "name": "Oracular Clarity",
        "image": "icons/sundries/lights/candle-lit-angelic.webp",
        "level": 19,
        "uuid": "Compendium.pf2e.classfeatures.Item.Oracular Clarity",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Oracular Clarity"
        }
      },
      {
        "name": "Oracular Curse",
        "image": "icons/sundries/scrolls/scroll-runed-brown.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Oracular Curse",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Oracular Curse"
        }
      },
      {
        "name": "Weapon Specialization",
        "image": "systems/pf2e/icons/features/classes/weapon-specialization.webp",
        "level": 13,
        "uuid": "Compendium.pf2e.classfeatures.Item.Weapon Specialization",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Weapon Specialization"
        }
      },
      {
        "name": "Weapon Expertise",
        "image": "systems/pf2e/icons/features/classes/weapon-expertise.webp",
        "level": 11,
        "uuid": "Compendium.pf2e.classfeatures.Item.Weapon Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Weapon Expertise"
        }
      },
      {
        "name": "Premonition Reflexes",
        "image": "icons/magic/symbols/symbol-lightning-bolt.webp",
        "level": 13,
        "uuid": "Compendium.pf2e.classfeatures.Item.Premonition Reflexes",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Premonition Reflexes"
        }
      },
      {
        "name": "Greater Mysterious Resolve",
        "image": "systems/pf2e/icons/features/classes/greater-resolve.webp",
        "level": 17,
        "uuid": "Compendium.pf2e.classfeatures.Item.Greater Mysterious Resolve",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Greater Mysterious Resolve"
        }
      },
      {
        "name": "Revelation Spells",
        "image": "systems/pf2e/icons/features/classes/revelation-spells.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Revelation Spells",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Revelation Spells"
        }
      },
      {
        "name": "Light Armor Expertise",
        "image": "icons/equipment/back/mantle-collared-green.webp",
        "level": 13,
        "uuid": "Compendium.pf2e.classfeatures.Item.Light Armor Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Light Armor Expertise"
        }
      },
      {
        "name": "Major Curse",
        "image": "systems/pf2e/icons/features/classes/major-curse.webp",
        "level": 11,
        "uuid": "Compendium.pf2e.classfeatures.Item.Major Curse",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Major Curse"
        }
      },
      {
        "name": "Extreme Curse",
        "image": "icons/equipment/neck/necklace-carved-bone-skull.webp",
        "level": 17,
        "uuid": "Compendium.pf2e.classfeatures.Item.Extreme Curse",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Extreme Curse"
        }
      },
      {
        "name": "Magical Fortitude",
        "image": "systems/pf2e/icons/features/classes/magical-fortitude.webp",
        "level": 9,
        "uuid": "Compendium.pf2e.classfeatures.Item.Magical Fortitude",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Magical Fortitude"
        }
      },
      {
        "name": "Expert Spellcaster",
        "image": "icons/sundries/books/book-backed-silver-gold.webp",
        "level": 7,
        "uuid": "Compendium.pf2e.classfeatures.Item.Expert Spellcaster",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Expert Spellcaster"
        }
      },
      {
        "name": "Divine Access",
        "image": "icons/sundries/scrolls/scroll-yellow-teal.webp",
        "level": 11,
        "uuid": "Compendium.pf2e.classfeatures.Item.Divine Access",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Divine Access"
        }
      },
      {
        "name": "Spell Repertoire",
        "image": "icons/sundries/books/book-symbol-spiral-silver-blue.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Spell Repertoire",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Spell Repertoire"
        }
      },
      {
        "name": "Master Spellcaster",
        "image": "icons/skills/trades/academics-book-study-purple.webp",
        "level": 15,
        "uuid": "Compendium.pf2e.classfeatures.Item.Master Spellcaster",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Master Spellcaster"
        }
      },
      {
        "name": "Oracular Senses",
        "image": "icons/creatures/eyes/human-single-blue.webp",
        "level": 11,
        "uuid": "Compendium.pf2e.classfeatures.Item.Oracular Senses",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Oracular Senses"
        }
      }
    ],
    "source": {
      "sourcePack": "classes",
      "sourceId": "pWHx4SXcft9O2udP",
      "sourcePath": "pf2e-master/packs/classes/oracle.json",
      "slug": "oracle",
      "image": "systems/pf2e/icons/classes/oracle.webp",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "hitPointsPerLevel": 8,
    "keyAbility": {
      "options": [
        "cha"
      ]
    },
    "proficiencies": {
      "perception": 1,
      "savingThrows": {
        "fortitude": 1,
        "reflex": 1,
        "will": 2
      },
      "attacks": {
        "simple": 1,
        "martial": 0,
        "advanced": 0,
        "unarmed": 1,
        "other": {
          "name": "",
          "rank": 0
        }
      },
      "defenses": {
        "unarmored": 1,
        "light": 1,
        "medium": 0,
        "heavy": 0
      },
      "spellcasting": 1
    },
    "trainedSkills": {
      "fixed": [
        "religion"
      ],
      "additional": 3
    },
    "progression": {
      "ancestryFeatLevels": [
        1,
        5,
        9,
        13,
        17
      ],
      "classFeatLevels": [
        2,
        4,
        6,
        8,
        10,
        12,
        14,
        16,
        18,
        20
      ],
      "generalFeatLevels": [
        3,
        7,
        11,
        15,
        19
      ],
      "skillFeatLevels": [
        2,
        4,
        6,
        8,
        10,
        12,
        14,
        16,
        18,
        20
      ],
      "skillIncreaseLevels": [
        3,
        5,
        7,
        9,
        11,
        13,
        15,
        17,
        19
      ]
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:class:psychic",
    "kind": "class",
    "slug": "psychic",
    "name": "Psychic",
    "description": {
      "sourceHtml": "<p><em>The mind can perceive truths hidden to fine-tuned instruments, house more secrets than any tome, and move objects and hearts more deftly than any lever. By delving into both the conscious and subconscious aspects of your inner self, you have awoken to the might of psychic magic, allowing you to cast spells not through incantations or gestures but by the power of your will alone. While the thin line between your mind and reality means that a single errant thought could have unintended consequences for yourself and your companions, you know that anything is possible, if you can imagine it.</em></p>\n<p><em>@UUID[Compendium.pf2e.journals.JournalEntry.kzxu2dI7tFxv6Ix6.JournalEntryPage.KVoEUJBAbAFUJTqw]{Psychic}</em></p>",
      "plainText": "The mind can perceive truths hidden to fine-tuned instruments, house more secrets than any tome, and move objects and hearts more deftly than any lever. By delving into both the conscious and subconscious aspects of your inner self, you have awoken to the might of psychic magic, allowing you to cast spells not through incantations or gestures but by the power of your will alone. While the thin line between your mind and reality means that a single errant thought could have unintended consequences for yourself and your companions, you know that anything is possible, if you can imagine it. Psychic"
    },
    "rarity": "common",
    "traits": [],
    "rules": [],
    "grantedItems": [
      {
        "name": "Psychic Spellcasting",
        "image": "systems/pf2e/icons/features/classes/psychic-spellcasting.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Psychic Spellcasting",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Psychic Spellcasting"
        }
      },
      {
        "name": "Weapon Expertise",
        "image": "icons/skills/melee/hand-grip-sword-red.webp",
        "level": 11,
        "uuid": "Compendium.pf2e.classfeatures.Item.Weapon Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Weapon Expertise"
        }
      },
      {
        "name": "Psi Cantrips and Amps",
        "image": "systems/pf2e/icons/features/classes/psy-cantrips-and-amps.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Psi Cantrips and Amps",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Psi Cantrips and Amps"
        }
      },
      {
        "name": "Unleash Psyche",
        "image": "systems/pf2e/icons/features/classes/unleash-psyche.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Unleash Psyche",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Unleash Psyche"
        }
      },
      {
        "name": "Subconscious Mind",
        "image": "icons/magic/symbols/question-stone-yellow.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Subconscious Mind",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Subconscious Mind"
        }
      },
      {
        "name": "Conscious Mind",
        "image": "icons/magic/symbols/question-stone-yellow.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Conscious Mind",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Conscious Mind"
        }
      },
      {
        "name": "Signature Spells",
        "image": "systems/pf2e/icons/features/classes/signature-spells-sorcerer.webp",
        "level": 3,
        "uuid": "Compendium.pf2e.classfeatures.Item.Signature Spells",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Signature Spells"
        }
      },
      {
        "name": "Clarity of Focus",
        "image": "systems/pf2e/icons/features/classes/clarity-of-focus.webp",
        "level": 5,
        "uuid": "Compendium.pf2e.classfeatures.Item.Clarity of Focus",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Clarity of Focus"
        }
      },
      {
        "name": "Precognitive Reflexes",
        "image": "icons/magic/symbols/symbol-lightning-bolt.webp",
        "level": 5,
        "uuid": "Compendium.pf2e.classfeatures.Item.Precognitive Reflexes",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Precognitive Reflexes"
        }
      },
      {
        "name": "Expert Spellcaster",
        "image": "icons/sundries/books/book-backed-silver-gold.webp",
        "level": 7,
        "uuid": "Compendium.pf2e.classfeatures.Item.Expert Spellcaster",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Expert Spellcaster"
        }
      },
      {
        "name": "Great Fortitude (Psychic)",
        "image": "icons/magic/life/cross-explosion-burst-green.webp",
        "level": 9,
        "uuid": "Compendium.pf2e.classfeatures.Item.Great Fortitude (Psychic)",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Great Fortitude (Psychic)"
        }
      },
      {
        "name": "Extrasensory Perception",
        "image": "icons/magic/perception/eye-tendrils-web-purple.webp",
        "level": 11,
        "uuid": "Compendium.pf2e.classfeatures.Item.Extrasensory Perception",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Extrasensory Perception"
        }
      },
      {
        "name": "Walls of Will",
        "image": "systems/pf2e/icons/features/classes/walls-of-will.webp",
        "level": 11,
        "uuid": "Compendium.pf2e.classfeatures.Item.Walls of Will",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Walls of Will"
        }
      },
      {
        "name": "Personal Barrier",
        "image": "systems/pf2e/icons/features/classes/personal-barrier.webp",
        "level": 13,
        "uuid": "Compendium.pf2e.classfeatures.Item.Personal Barrier",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Personal Barrier"
        }
      },
      {
        "name": "Psychic Weapon Specialization",
        "image": "systems/pf2e/icons/features/classes/weapon-specialization.webp",
        "level": 13,
        "uuid": "Compendium.pf2e.classfeatures.Item.Psychic Weapon Specialization",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Psychic Weapon Specialization"
        }
      },
      {
        "name": "Master Spellcaster",
        "image": "icons/skills/trades/academics-book-study-purple.webp",
        "level": 15,
        "uuid": "Compendium.pf2e.classfeatures.Item.Master Spellcaster",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Master Spellcaster"
        }
      },
      {
        "name": "Fortress of Will",
        "image": "systems/pf2e/icons/features/classes/fortress-of-will.webp",
        "level": 17,
        "uuid": "Compendium.pf2e.classfeatures.Item.Fortress of Will",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Fortress of Will"
        }
      },
      {
        "name": "Infinite Mind",
        "image": "systems/pf2e/icons/features/classes/infinite-mind.webp",
        "level": 19,
        "uuid": "Compendium.pf2e.classfeatures.Item.Infinite Mind",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Infinite Mind"
        }
      },
      {
        "name": "Legendary Spellcaster",
        "image": "icons/sundries/books/book-open-purple.webp",
        "level": 19,
        "uuid": "Compendium.pf2e.classfeatures.Item.Legendary Spellcaster",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Legendary Spellcaster"
        }
      },
      {
        "name": "Spell Repertoire",
        "image": "icons/sundries/books/book-symbol-spiral-silver-blue.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Spell Repertoire",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Spell Repertoire"
        }
      }
    ],
    "source": {
      "sourcePack": "classes",
      "sourceId": "Inq4gH3P5PYjSQbD",
      "sourcePath": "pf2e-master/packs/classes/psychic.json",
      "slug": "psychic",
      "image": "systems/pf2e/icons/default-icons/class.svg",
      "publication": {
        "title": "Pathfinder Dark Archive",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "hitPointsPerLevel": 6,
    "keyAbility": {
      "options": []
    },
    "proficiencies": {
      "perception": 1,
      "savingThrows": {
        "fortitude": 1,
        "reflex": 1,
        "will": 2
      },
      "attacks": {
        "simple": 1,
        "martial": 0,
        "advanced": 0,
        "unarmed": 1,
        "other": {
          "name": "",
          "rank": 0
        }
      },
      "defenses": {
        "unarmored": 1,
        "light": 0,
        "medium": 0,
        "heavy": 0
      },
      "spellcasting": 1
    },
    "trainedSkills": {
      "fixed": [
        "occultism"
      ],
      "additional": 3
    },
    "progression": {
      "ancestryFeatLevels": [
        1,
        5,
        9,
        13,
        17
      ],
      "classFeatLevels": [
        2,
        4,
        6,
        8,
        10,
        12,
        14,
        16,
        18,
        20
      ],
      "generalFeatLevels": [
        3,
        7,
        11,
        15,
        19
      ],
      "skillFeatLevels": [
        2,
        4,
        6,
        8,
        10,
        12,
        14,
        16,
        18,
        20
      ],
      "skillIncreaseLevels": [
        3,
        5,
        7,
        9,
        11,
        13,
        15,
        17,
        19
      ]
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:class:ranger",
    "kind": "class",
    "slug": "ranger",
    "name": "Ranger",
    "description": {
      "sourceHtml": "<p><em>Some rangers believe civilization wears down the soul, but still needs to be protected from wild creatures. Others say nature needs to be protected from the greedy, who wish to tame its beauty and plunder its treasures. You could champion either goal, or both. You might be a scout, tracker, or hunter of fugitives or beasts, haunting the edge of civilization or exploring the wilds. You know how to live off the land and are skilled at spotting and taking down both opportune prey and hated enemies.</em></p>\n<p><em>@UUID[Compendium.pf2e.journals.JournalEntry.kzxu2dI7tFxv6Ix6.JournalEntryPage.gdEmPPRYhRai7I1N]{Ranger}</em></p>",
      "plainText": "Some rangers believe civilization wears down the soul, but still needs to be protected from wild creatures. Others say nature needs to be protected from the greedy, who wish to tame its beauty and plunder its treasures. You could champion either goal, or both. You might be a scout, tracker, or hunter of fugitives or beasts, haunting the edge of civilization or exploring the wilds. You know how to live off the land and are skilled at spotting and taking down both opportune prey and hated enemies. Ranger"
    },
    "rarity": "common",
    "traits": [],
    "rules": [
      {
        "key": "ActiveEffectLike",
        "data": {
          "key": "ActiveEffectLike",
          "mode": "upgrade",
          "path": "system.skills.nature.rank",
          "predicate": [
            {
              "not": "feature:vindicator"
            }
          ],
          "value": 1
        }
      }
    ],
    "grantedItems": [
      {
        "name": "Masterful Hunter",
        "image": "icons/weapons/bows/shortbow-recurve-yellow-blue.webp",
        "level": 17,
        "uuid": "Compendium.pf2e.classfeatures.Item.Masterful Hunter",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Masterful Hunter"
        }
      },
      {
        "name": "Weapon Specialization",
        "image": "systems/pf2e/icons/features/classes/weapon-specialization.webp",
        "level": 7,
        "uuid": "Compendium.pf2e.classfeatures.Item.Weapon Specialization",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Weapon Specialization"
        }
      },
      {
        "name": "Trackless Journey",
        "image": "icons/magic/nature/root-vine-entangle-foot-green.webp",
        "level": 5,
        "uuid": "Compendium.pf2e.classfeatures.Item.Trackless Journey",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Trackless Journey"
        }
      },
      {
        "name": "Nature's Edge",
        "image": "icons/skills/ranged/arrow-flying-ornate-gold.webp",
        "level": 9,
        "uuid": "Compendium.pf2e.classfeatures.Item.Nature's Edge",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Nature's Edge"
        }
      },
      {
        "name": "Medium Armor Expertise",
        "image": "icons/equipment/chest/breastplate-quilted-brown.webp",
        "level": 11,
        "uuid": "Compendium.pf2e.classfeatures.Item.Medium Armor Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Medium Armor Expertise"
        }
      },
      {
        "name": "Greater Natural Reflexes",
        "image": "systems/pf2e/icons/features/classes/improved-evasion.webp",
        "level": 15,
        "uuid": "Compendium.pf2e.classfeatures.Item.Greater Natural Reflexes",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Greater Natural Reflexes"
        }
      },
      {
        "name": "Warden's Endurance",
        "image": "icons/creatures/mammals/bull-horned-blue.webp",
        "level": 11,
        "uuid": "Compendium.pf2e.classfeatures.Item.Warden's Endurance",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Warden's Endurance"
        }
      },
      {
        "name": "Natural Reflexes",
        "image": "icons/magic/symbols/symbol-lightning-bolt.webp",
        "level": 7,
        "uuid": "Compendium.pf2e.classfeatures.Item.Natural Reflexes",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Natural Reflexes"
        }
      },
      {
        "name": "Medium Armor Mastery",
        "image": "icons/equipment/chest/breastplate-collared-steel.webp",
        "level": 19,
        "uuid": "Compendium.pf2e.classfeatures.Item.Medium Armor Mastery",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Medium Armor Mastery"
        }
      },
      {
        "name": "Greater Weapon Specialization",
        "image": "icons/skills/melee/hand-grip-sword-orange.webp",
        "level": 15,
        "uuid": "Compendium.pf2e.classfeatures.Item.Greater Weapon Specialization",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Greater Weapon Specialization"
        }
      },
      {
        "name": "Hunter's Edge",
        "image": "icons/magic/symbols/question-stone-yellow.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Hunter's Edge",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Hunter's Edge"
        }
      },
      {
        "name": "Swift Prey",
        "image": "icons/creatures/invertebrates/spider-pink-purple.webp",
        "level": 19,
        "uuid": "Compendium.pf2e.classfeatures.Item.Swift Prey",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Swift Prey"
        }
      },
      {
        "name": "Perception Legend",
        "image": "systems/pf2e/icons/features/classes/incredible-sense.webp",
        "level": 15,
        "uuid": "Compendium.pf2e.classfeatures.Item.Perception Legend",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Perception Legend"
        }
      },
      {
        "name": "Ranger Weapon Expertise",
        "image": "systems/pf2e/icons/features/classes/ranger-weapon-expertise.webp",
        "level": 5,
        "uuid": "Compendium.pf2e.classfeatures.Item.Ranger Weapon Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Ranger Weapon Expertise"
        }
      },
      {
        "name": "Weapon Mastery",
        "image": "systems/pf2e/icons/features/classes/weapon-mastery.webp",
        "level": 13,
        "uuid": "Compendium.pf2e.classfeatures.Item.Martial Weapon Mastery",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Martial Weapon Mastery"
        }
      },
      {
        "name": "Unimpeded Journey",
        "image": "icons/equipment/feet/boots-leather-laced-brown.webp",
        "level": 11,
        "uuid": "Compendium.pf2e.classfeatures.Item.Unimpeded Journey",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Unimpeded Journey"
        }
      },
      {
        "name": "Hunt Prey",
        "image": "icons/creatures/eyes/humanoid-single-red-brown.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Hunt Prey",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Hunt Prey"
        }
      },
      {
        "name": "Will Expertise",
        "image": "systems/pf2e/icons/features/classes/walls-of-will.webp",
        "level": 3,
        "uuid": "Compendium.pf2e.classfeatures.Item.Will Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Will Expertise"
        }
      },
      {
        "name": "Ranger Expertise",
        "image": "icons/skills/ranged/target-bullseye-arrow-yellow.webp",
        "level": 9,
        "uuid": "Compendium.pf2e.classfeatures.Item.Ranger Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Ranger Expertise"
        }
      },
      {
        "name": "Perception Mastery",
        "image": "icons/magic/perception/eye-tendrils-web-purple.webp",
        "level": 7,
        "uuid": "Compendium.pf2e.classfeatures.Item.Perception Mastery",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Perception Mastery"
        }
      }
    ],
    "source": {
      "sourcePack": "classes",
      "sourceId": "Yix76sfxrIlltSTJ",
      "sourcePath": "pf2e-master/packs/classes/ranger.json",
      "slug": "ranger",
      "image": "systems/pf2e/icons/classes/ranger.webp",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "hitPointsPerLevel": 10,
    "keyAbility": {
      "options": [
        "dex",
        "str"
      ]
    },
    "proficiencies": {
      "perception": 2,
      "savingThrows": {
        "fortitude": 2,
        "reflex": 2,
        "will": 1
      },
      "attacks": {
        "simple": 1,
        "martial": 1,
        "advanced": 0,
        "unarmed": 1,
        "other": {
          "name": "",
          "rank": 0
        }
      },
      "defenses": {
        "unarmored": 1,
        "light": 1,
        "medium": 1,
        "heavy": 0
      },
      "spellcasting": 0
    },
    "trainedSkills": {
      "fixed": [
        "survival"
      ],
      "additional": 4
    },
    "progression": {
      "ancestryFeatLevels": [
        1,
        5,
        9,
        13,
        17
      ],
      "classFeatLevels": [
        1,
        2,
        4,
        6,
        8,
        10,
        12,
        14,
        16,
        18,
        20
      ],
      "generalFeatLevels": [
        3,
        7,
        11,
        15,
        19
      ],
      "skillFeatLevels": [
        2,
        4,
        6,
        8,
        10,
        12,
        14,
        16,
        18,
        20
      ],
      "skillIncreaseLevels": [
        3,
        5,
        7,
        9,
        11,
        13,
        15,
        17,
        19
      ]
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:class:rogue",
    "kind": "class",
    "slug": "rogue",
    "name": "Rogue",
    "description": {
      "sourceHtml": "<p><em>You are skilled and opportunistic. Using your sharp wits and quick reactions, you take advantage of your opponents' missteps and strike where it hurts most. You play a dangerous game, seeking thrills and testing your skills, and likely don't care much for any laws that happen to get in your way. While the path of every rogue is unique and riddled with danger, the one thing you all share in common is the breadth and depth of your skills.</em></p>\n<p><em>@UUID[Compendium.pf2e.journals.JournalEntry.kzxu2dI7tFxv6Ix6.JournalEntryPage.u4qPrDRBagxG9wj8]{Rogue}</em></p>",
      "plainText": "You are skilled and opportunistic. Using your sharp wits and quick reactions, you take advantage of your opponents' missteps and strike where it hurts most. You play a dangerous game, seeking thrills and testing your skills, and likely don't care much for any laws that happen to get in your way. While the path of every rogue is unique and riddled with danger, the one thing you all share in common is the breadth and depth of your skills. Rogue"
    },
    "rarity": "common",
    "traits": [],
    "rules": [],
    "grantedItems": [
      {
        "name": "Weapon Specialization",
        "image": "systems/pf2e/icons/features/classes/weapon-specialization.webp",
        "level": 7,
        "uuid": "Compendium.pf2e.classfeatures.Item.Weapon Specialization",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Weapon Specialization"
        }
      },
      {
        "name": "Weapon Tricks",
        "image": "systems/pf2e/icons/features/classes/weapon-tricks.webp",
        "level": 5,
        "uuid": "Compendium.pf2e.classfeatures.Item.Weapon Tricks",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Weapon Tricks"
        }
      },
      {
        "name": "Light Armor Mastery",
        "image": "icons/equipment/chest/breastplate-rivited-red.webp",
        "level": 19,
        "uuid": "Compendium.pf2e.classfeatures.Item.Light Armor Mastery",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Light Armor Mastery"
        }
      },
      {
        "name": "Master Tricks",
        "image": "icons/weapons/swords/swords-short.webp",
        "level": 13,
        "uuid": "Compendium.pf2e.classfeatures.Item.Master Tricks",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Master Tricks"
        }
      },
      {
        "name": "Perception Mastery",
        "image": "icons/magic/perception/eye-tendrils-web-purple.webp",
        "level": 7,
        "uuid": "Compendium.pf2e.classfeatures.Item.Perception Mastery",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Perception Mastery"
        }
      },
      {
        "name": "Greater Weapon Specialization",
        "image": "icons/skills/melee/hand-grip-sword-orange.webp",
        "level": 15,
        "uuid": "Compendium.pf2e.classfeatures.Item.Greater Weapon Specialization",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Greater Weapon Specialization"
        }
      },
      {
        "name": "Light Armor Expertise",
        "image": "icons/equipment/back/mantle-collared-green.webp",
        "level": 13,
        "uuid": "Compendium.pf2e.classfeatures.Item.Light Armor Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Light Armor Expertise"
        }
      },
      {
        "name": "Evasive Reflexes",
        "image": "icons/magic/fire/explosion-embers-evade-silhouette.webp",
        "level": 7,
        "uuid": "Compendium.pf2e.classfeatures.Item.Evasive Reflexes",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Evasive Reflexes"
        }
      },
      {
        "name": "Rogue's Racket",
        "image": "icons/sundries/documents/document-sealed-signatures-red.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Rogue's Racket",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Rogue's Racket"
        }
      },
      {
        "name": "Rogue Resilience",
        "image": "icons/magic/life/cross-explosion-burst-green.webp",
        "level": 9,
        "uuid": "Compendium.pf2e.classfeatures.Item.Rogue Resilience",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Rogue Resilience"
        }
      },
      {
        "name": "Agile Mind",
        "image": "icons/commodities/biological/organ-brain-red.webp",
        "level": 17,
        "uuid": "Compendium.pf2e.classfeatures.Item.Agile Mind",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Agile Mind"
        }
      },
      {
        "name": "Rogue Expertise",
        "image": "systems/pf2e/icons/features/classes/rogue-expertise.webp",
        "level": 11,
        "uuid": "Compendium.pf2e.classfeatures.Item.Rogue Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Rogue Expertise"
        }
      },
      {
        "name": "Sneak Attack",
        "image": "systems/pf2e/icons/features/classes/sneak-attack.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Sneak Attack",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Sneak Attack"
        }
      },
      {
        "name": "Greater Rogue Reflexes",
        "image": "systems/pf2e/icons/features/classes/improved-evasion.webp",
        "level": 13,
        "uuid": "Compendium.pf2e.classfeatures.Item.Greater Rogue Reflexes",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Greater Rogue Reflexes"
        }
      },
      {
        "name": "Debilitating Strikes",
        "image": "icons/skills/melee/strike-sword-blood-red.webp",
        "level": 9,
        "uuid": "Compendium.pf2e.classfeatures.Item.Debilitating Strike",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Debilitating Strike"
        }
      },
      {
        "name": "Double Debilitation",
        "image": "icons/skills/wounds/injury-triple-slash-bleed.webp",
        "level": 15,
        "uuid": "Compendium.pf2e.classfeatures.Item.Double Debilitation",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Double Debilitation"
        }
      },
      {
        "name": "Perception Legend",
        "image": "systems/pf2e/icons/features/classes/incredible-sense.webp",
        "level": 13,
        "uuid": "Compendium.pf2e.classfeatures.Item.Perception Legend",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Perception Legend"
        }
      },
      {
        "name": "Surprise Attack",
        "image": "systems/pf2e/icons/features/classes/surprice-attack.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Surprise Attack",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Surprise Attack"
        }
      },
      {
        "name": "Deny Advantage",
        "image": "icons/environment/settlement/watchtower-silhouette-yellow.webp",
        "level": 3,
        "uuid": "Compendium.pf2e.classfeatures.Item.Deny Advantage",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Deny Advantage"
        }
      },
      {
        "name": "Master Strike",
        "image": "icons/skills/melee/weapons-crossed-swords-yellow-teal.webp",
        "level": 19,
        "uuid": "Compendium.pf2e.classfeatures.Item.Master Strike",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Master Strike"
        }
      }
    ],
    "source": {
      "sourcePack": "classes",
      "sourceId": "LO9STvskJemPkiAI",
      "sourcePath": "pf2e-master/packs/classes/rogue.json",
      "slug": "rogue",
      "image": "systems/pf2e/icons/classes/rogue.webp",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "hitPointsPerLevel": 8,
    "keyAbility": {
      "options": [
        "dex"
      ]
    },
    "proficiencies": {
      "perception": 2,
      "savingThrows": {
        "fortitude": 1,
        "reflex": 2,
        "will": 2
      },
      "attacks": {
        "simple": 1,
        "martial": 1,
        "advanced": 0,
        "unarmed": 1,
        "other": {
          "name": "",
          "rank": 0
        }
      },
      "defenses": {
        "unarmored": 1,
        "light": 1,
        "medium": 0,
        "heavy": 0
      },
      "spellcasting": 0
    },
    "trainedSkills": {
      "fixed": [
        "stealth"
      ],
      "additional": 7
    },
    "progression": {
      "ancestryFeatLevels": [
        1,
        5,
        9,
        13,
        17
      ],
      "classFeatLevels": [
        1,
        2,
        4,
        6,
        8,
        10,
        12,
        14,
        16,
        18,
        20
      ],
      "generalFeatLevels": [
        3,
        7,
        11,
        15,
        19
      ],
      "skillFeatLevels": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20
      ],
      "skillIncreaseLevels": [
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20
      ]
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:class:sorcerer",
    "kind": "class",
    "slug": "sorcerer",
    "name": "Sorcerer",
    "description": {
      "sourceHtml": "<p><em>You didn't choose to become a spellcaster-you were born one. There's magic in your blood, whether a divinity touched one of your ancestors, a forebear communed with a primal creature, or a powerful occult ritual influenced your line. Self-reflection and study allow you to refine your inherent magical skills and unlock new, more powerful abilities. The power in your blood carries a risk, however, and you constantly face the choice of whether you'll rise to become a master spellcaster or fall into destruction.</em></p>\n<p><em>@UUID[Compendium.pf2e.journals.JournalEntry.kzxu2dI7tFxv6Ix6.JournalEntryPage.ixBx2wZpnf4qUoEv]{Sorcerer}</em></p>",
      "plainText": "You didn't choose to become a spellcaster-you were born one. There's magic in your blood, whether a divinity touched one of your ancestors, a forebear communed with a primal creature, or a powerful occult ritual influenced your line. Self-reflection and study allow you to refine your inherent magical skills and unlock new, more powerful abilities. The power in your blood carries a risk, however, and you constantly face the choice of whether you'll rise to become a master spellcaster or fall into destruction. Sorcerer"
    },
    "rarity": "common",
    "traits": [],
    "rules": [],
    "grantedItems": [
      {
        "name": "Reflex Expertise",
        "image": "icons/magic/symbols/symbol-lightning-bolt.webp",
        "level": 9,
        "uuid": "Compendium.pf2e.classfeatures.Item.Reflex Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Reflex Expertise"
        }
      },
      {
        "name": "Bloodline Paragon",
        "image": "icons/commodities/treasure/token-engraved-eye-red.webp",
        "level": 19,
        "uuid": "Compendium.pf2e.classfeatures.Item.Bloodline Paragon",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Bloodline Paragon"
        }
      },
      {
        "name": "Spell Repertoire",
        "image": "icons/sundries/books/book-symbol-spiral-silver-blue.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Spell Repertoire",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Spell Repertoire"
        }
      },
      {
        "name": "Majestic Will",
        "image": "icons/creatures/mammals/bull-horns-eyes-glowin-orange.webp",
        "level": 17,
        "uuid": "Compendium.pf2e.classfeatures.Item.Majestic Will",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Majestic Will"
        }
      },
      {
        "name": "Perception Expertise",
        "image": "icons/creatures/eyes/human-single-blue.webp",
        "level": 11,
        "uuid": "Compendium.pf2e.classfeatures.Item.Perception Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Perception Expertise"
        }
      },
      {
        "name": "Weapon Expertise",
        "image": "systems/pf2e/icons/features/classes/weapon-expertise.webp",
        "level": 11,
        "uuid": "Compendium.pf2e.classfeatures.Item.Weapon Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Weapon Expertise"
        }
      },
      {
        "name": "Expert Spellcaster",
        "image": "icons/sundries/books/book-backed-silver-gold.webp",
        "level": 7,
        "uuid": "Compendium.pf2e.classfeatures.Item.Expert Spellcaster",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Expert Spellcaster"
        }
      },
      {
        "name": "Sorcerous Potency",
        "image": "icons/magic/light/projectile-smoke-pink.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Sorcerous Potency",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Sorcerous Potency"
        }
      },
      {
        "name": "Weapon Specialization",
        "image": "systems/pf2e/icons/features/classes/weapon-specialization.webp",
        "level": 13,
        "uuid": "Compendium.pf2e.classfeatures.Item.Weapon Specialization",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Weapon Specialization"
        }
      },
      {
        "name": "Sorcerer Spellcasting",
        "image": "systems/pf2e/icons/features/classes/signature-spells-sorcerer.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Sorcerer Spellcasting",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Sorcerer Spellcasting"
        }
      },
      {
        "name": "Signature Spells",
        "image": "systems/pf2e/icons/features/classes/signature-spells-sorcerer.webp",
        "level": 3,
        "uuid": "Compendium.pf2e.classfeatures.Item.Signature Spells",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Signature Spells"
        }
      },
      {
        "name": "Defensive Robes",
        "image": "icons/equipment/back/cloak-collared-pink-gold.webp",
        "level": 13,
        "uuid": "Compendium.pf2e.classfeatures.Item.Defensive Robes",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Defensive Robes"
        }
      },
      {
        "name": "Legendary Spellcaster",
        "image": "icons/sundries/books/book-open-purple.webp",
        "level": 19,
        "uuid": "Compendium.pf2e.classfeatures.Item.Legendary Spellcaster",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Legendary Spellcaster"
        }
      },
      {
        "name": "Bloodline",
        "image": "icons/magic/symbols/question-stone-yellow.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Bloodline",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Bloodline"
        }
      },
      {
        "name": "Bloodline Spells",
        "image": "systems/pf2e/icons/features/classes/bloodline-spells.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Bloodline Spells",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Bloodline Spells"
        }
      },
      {
        "name": "Magical Fortitude",
        "image": "systems/pf2e/icons/features/classes/magical-fortitude.webp",
        "level": 5,
        "uuid": "Compendium.pf2e.classfeatures.Item.Magical Fortitude",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Magical Fortitude"
        }
      },
      {
        "name": "Master Spellcaster",
        "image": "icons/skills/trades/academics-book-study-purple.webp",
        "level": 15,
        "uuid": "Compendium.pf2e.classfeatures.Item.Master Spellcaster",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Master Spellcaster"
        }
      }
    ],
    "source": {
      "sourcePack": "classes",
      "sourceId": "15Yc1r6s9CEhSTMe",
      "sourcePath": "pf2e-master/packs/classes/sorcerer.json",
      "slug": "sorcerer",
      "image": "systems/pf2e/icons/classes/sorcerer.webp",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "hitPointsPerLevel": 6,
    "keyAbility": {
      "options": [
        "cha"
      ]
    },
    "proficiencies": {
      "perception": 1,
      "savingThrows": {
        "fortitude": 1,
        "reflex": 1,
        "will": 2
      },
      "attacks": {
        "simple": 1,
        "martial": 0,
        "advanced": 0,
        "unarmed": 1,
        "other": {
          "name": "",
          "rank": 0
        }
      },
      "defenses": {
        "unarmored": 1,
        "light": 0,
        "medium": 0,
        "heavy": 0
      },
      "spellcasting": 1
    },
    "trainedSkills": {
      "fixed": [],
      "additional": 2
    },
    "progression": {
      "ancestryFeatLevels": [
        1,
        5,
        9,
        13,
        17
      ],
      "classFeatLevels": [
        2,
        4,
        6,
        8,
        10,
        12,
        14,
        16,
        18,
        20
      ],
      "generalFeatLevels": [
        3,
        7,
        11,
        15,
        19
      ],
      "skillFeatLevels": [
        2,
        4,
        6,
        8,
        10,
        12,
        14,
        16,
        18,
        20
      ],
      "skillIncreaseLevels": [
        3,
        5,
        7,
        9,
        11,
        13,
        15,
        17,
        19
      ]
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:class:summoner",
    "kind": "class",
    "slug": "summoner",
    "name": "Summoner",
    "description": {
      "sourceHtml": "<p><em>You can magically beckon a powerful being called an eidolon to your side, serving as the mortal conduit that anchors it to the world. Whether your eidolon is a friend, a servant, or even a personal god, your connection to it marks you as extraordinary, shaping the course of your life dramatically.</em></p>\n<p><em>@UUID[Compendium.pf2e.journals.JournalEntry.kzxu2dI7tFxv6Ix6.JournalEntryPage.gA4Ud8oSUGkkLwAi]{Summoner}</em></p>",
      "plainText": "You can magically beckon a powerful being called an eidolon to your side, serving as the mortal conduit that anchors it to the world. Whether your eidolon is a friend, a servant, or even a personal god, your connection to it marks you as extraordinary, shaping the course of your life dramatically. Summoner"
    },
    "rarity": "common",
    "traits": [],
    "rules": [],
    "grantedItems": [
      {
        "name": "Eidolon",
        "image": "systems/pf2e/icons/features/classes/eidolon.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Eidolon",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Eidolon"
        }
      },
      {
        "name": "Eidolon Defensive Expertise",
        "image": "systems/pf2e/icons/features/classes/eidolon-defensive-expertise.webp",
        "level": 11,
        "uuid": "Compendium.pf2e.classfeatures.Item.Eidolon Defensive Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Eidolon Defensive Expertise"
        }
      },
      {
        "name": "Weapon Specialization",
        "image": "systems/pf2e/icons/features/classes/weapon-specialization.webp",
        "level": 13,
        "uuid": "Compendium.pf2e.classfeatures.Item.Weapon Specialization",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Weapon Specialization"
        }
      },
      {
        "name": "Expert Spellcaster",
        "image": "icons/sundries/books/book-backed-silver-gold.webp",
        "level": 9,
        "uuid": "Compendium.pf2e.classfeatures.Item.Expert Spellcaster",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Expert Spellcaster"
        }
      },
      {
        "name": "Instant Manifestation",
        "image": "systems/pf2e/icons/features/classes/instant-manifestation.webp",
        "level": 19,
        "uuid": "Compendium.pf2e.classfeatures.Item.Instant Manifestation",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Instant Manifestation"
        }
      },
      {
        "name": "Shared Vigilance",
        "image": "icons/creatures/eyes/lizard-single-slit-pink.webp",
        "level": 3,
        "uuid": "Compendium.pf2e.classfeatures.Item.Shared Vigilance",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Shared Vigilance"
        }
      },
      {
        "name": "Eidolon Unarmed Mastery",
        "image": "systems/pf2e/icons/features/classes/eidolon-unarmed-mastery.webp",
        "level": 13,
        "uuid": "Compendium.pf2e.classfeatures.Item.Eidolon Unarmed Mastery",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Eidolon Unarmed Mastery"
        }
      },
      {
        "name": "Shared Resolve",
        "image": "icons/creatures/mammals/bull-horns-eyes-glowin-orange.webp",
        "level": 15,
        "uuid": "Compendium.pf2e.classfeatures.Item.Shared Resolve",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Shared Resolve"
        }
      },
      {
        "name": "Unlimited Signature Spells",
        "image": "systems/pf2e/icons/features/classes/unlimited-signature-spells.webp",
        "level": 3,
        "uuid": "Compendium.pf2e.classfeatures.Item.Unlimited Signature Spells",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Unlimited Signature Spells"
        }
      },
      {
        "name": "Evolution Feat",
        "image": "systems/pf2e/icons/features/classes/evolution-feat.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Evolution Feat",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Evolution Feat"
        }
      },
      {
        "name": "Twin Juggernauts",
        "image": "icons/creatures/mammals/bull-horned-blue.webp",
        "level": 11,
        "uuid": "Compendium.pf2e.classfeatures.Item.Twin Juggernauts",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Twin Juggernauts"
        }
      },
      {
        "name": "Greater Eidolon Specialization",
        "image": "icons/skills/melee/hand-grip-sword-orange.webp",
        "level": 15,
        "uuid": "Compendium.pf2e.classfeatures.Item.Greater Eidolon Specialization",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Greater Eidolon Specialization"
        }
      },
      {
        "name": "Defensive Robes",
        "image": "icons/equipment/back/cloak-collared-pink-gold.webp",
        "level": 13,
        "uuid": "Compendium.pf2e.classfeatures.Item.Defensive Robes",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Defensive Robes"
        }
      },
      {
        "name": "Simple Weapon Expertise",
        "image": "icons/skills/melee/hand-grip-staff-teal.webp",
        "level": 11,
        "uuid": "Compendium.pf2e.classfeatures.Item.Simple Weapon Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Simple Weapon Expertise"
        }
      },
      {
        "name": "Summoner Spellcasting",
        "image": "icons/magic/light/hand-sparks-smoke-teal.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Summoner Spellcasting",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Summoner Spellcasting"
        }
      },
      {
        "name": "Spell Repertoire",
        "image": "icons/sundries/books/book-symbol-spiral-silver-blue.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Spell Repertoire",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Spell Repertoire"
        }
      },
      {
        "name": "Eidolon Unarmed Expertise",
        "image": "icons/magic/unholy/hand-grasping-green.webp",
        "level": 5,
        "uuid": "Compendium.pf2e.classfeatures.Item.Eidolon Unarmed Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Eidolon Unarmed Expertise"
        }
      },
      {
        "name": "Eidolon Symbiosis",
        "image": "systems/pf2e/icons/features/classes/eidolon-symbiosis.webp",
        "level": 7,
        "uuid": "Compendium.pf2e.classfeatures.Item.Eidolon Symbiosis",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Eidolon Symbiosis"
        }
      },
      {
        "name": "Master Spellcaster",
        "image": "icons/skills/trades/academics-book-study-purple.webp",
        "level": 17,
        "uuid": "Compendium.pf2e.classfeatures.Item.Master Spellcaster",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Master Spellcaster"
        }
      },
      {
        "name": "Eidolon Weapon Specialization",
        "image": "systems/pf2e/icons/features/classes/eidolon-weapon-specialization.webp",
        "level": 7,
        "uuid": "Compendium.pf2e.classfeatures.Item.Eidolon Weapon Specialization",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Eidolon Weapon Specialization"
        }
      },
      {
        "name": "Eidolon Transcendence",
        "image": "systems/pf2e/icons/features/classes/eidolon-transcendence.webp",
        "level": 17,
        "uuid": "Compendium.pf2e.classfeatures.Item.Eidolon Transcendence",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Eidolon Transcendence"
        }
      },
      {
        "name": "Eidolon Defensive Mastery",
        "image": "systems/pf2e/icons/features/classes/eidolon-defensive-mastery.webp",
        "level": 19,
        "uuid": "Compendium.pf2e.classfeatures.Item.Eidolon Defensive Mastery",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Eidolon Defensive Mastery"
        }
      },
      {
        "name": "Shared Reflexes",
        "image": "icons/magic/symbols/symbol-lightning-bolt.webp",
        "level": 9,
        "uuid": "Compendium.pf2e.classfeatures.Item.Shared Reflexes",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Shared Reflexes"
        }
      },
      {
        "name": "Link Spells",
        "image": "systems/pf2e/icons/features/classes/link-spells.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Link Spells",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Link Spells"
        }
      }
    ],
    "source": {
      "sourcePack": "classes",
      "sourceId": "YtOm245r8GFSFYeD",
      "sourcePath": "pf2e-master/packs/classes/summoner.json",
      "slug": "summoner",
      "image": "systems/pf2e/icons/classes/summoner.webp",
      "publication": {
        "title": "Pathfinder Secrets of Magic",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "hitPointsPerLevel": 10,
    "keyAbility": {
      "options": [
        "cha"
      ]
    },
    "proficiencies": {
      "perception": 1,
      "savingThrows": {
        "fortitude": 2,
        "reflex": 1,
        "will": 2
      },
      "attacks": {
        "simple": 1,
        "martial": 0,
        "advanced": 0,
        "unarmed": 1,
        "other": {
          "name": "",
          "rank": 0
        }
      },
      "defenses": {
        "unarmored": 1,
        "light": 0,
        "medium": 0,
        "heavy": 0
      },
      "spellcasting": 1
    },
    "trainedSkills": {
      "fixed": [],
      "additional": 3
    },
    "progression": {
      "ancestryFeatLevels": [
        1,
        5,
        9,
        13,
        17
      ],
      "classFeatLevels": [
        2,
        4,
        6,
        8,
        10,
        12,
        14,
        16,
        18,
        20
      ],
      "generalFeatLevels": [
        3,
        7,
        11,
        15,
        19
      ],
      "skillFeatLevels": [
        2,
        4,
        6,
        8,
        10,
        12,
        14,
        16,
        18,
        20
      ],
      "skillIncreaseLevels": [
        3,
        5,
        7,
        9,
        11,
        13,
        15,
        17,
        19
      ]
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:class:swashbuckler",
    "kind": "class",
    "slug": "swashbuckler",
    "name": "Swashbuckler",
    "description": {
      "sourceHtml": "<p><em>Many warriors rely on brute force, weighty armor, or cumbersome weapons. For you, battle is a dance where you move among foes with style and grace. You dart among combatants with flair and land powerful finishing moves with a flick of the wrist and a flash of the blade, all while countering attacks with elegant ripostes that keep enemies off balance. Harassing and thwarting your foes lets you charm fate and cheat death time and again with aplomb and plenty of flair.</em></p>\n<p><em>@UUID[Compendium.pf2e.journals.JournalEntry.kzxu2dI7tFxv6Ix6.JournalEntryPage.rsDTKu4HUuKft7fk]{Swashbuckler}</em></p>",
      "plainText": "Many warriors rely on brute force, weighty armor, or cumbersome weapons. For you, battle is a dance where you move among foes with style and grace. You dart among combatants with flair and land powerful finishing moves with a flick of the wrist and a flash of the blade, all while countering attacks with elegant ripostes that keep enemies off balance. Harassing and thwarting your foes lets you charm fate and cheat death time and again with aplomb and plenty of flair. Swashbuckler"
    },
    "rarity": "common",
    "traits": [],
    "rules": [],
    "grantedItems": [
      {
        "name": "Panache",
        "image": "icons/commodities/treasure/crown-gold-laurel-wreath.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Panache",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Panache"
        }
      },
      {
        "name": "Precise Strike",
        "image": "systems/pf2e/icons/features/classes/precise-strike.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Precise Strike",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Precise Strike"
        }
      },
      {
        "name": "Confident Finisher",
        "image": "icons/weapons/swords/scimitar-broad.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Confident Finisher",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Confident Finisher"
        }
      },
      {
        "name": "Weapon Specialization",
        "image": "systems/pf2e/icons/features/classes/weapon-specialization.webp",
        "level": 7,
        "uuid": "Compendium.pf2e.classfeatures.Item.Weapon Specialization",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Weapon Specialization"
        }
      },
      {
        "name": "Vivacious Speed",
        "image": "icons/equipment/feet/boots-leather-grey-gold.webp",
        "level": 3,
        "uuid": "Compendium.pf2e.classfeatures.Item.Vivacious Speed",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Vivacious Speed"
        }
      },
      {
        "name": "Weapon Expertise",
        "image": "icons/skills/melee/hand-grip-sword-red.webp",
        "level": 5,
        "uuid": "Compendium.pf2e.classfeatures.Item.Weapon Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Weapon Expertise"
        }
      },
      {
        "name": "Eternal Confidence",
        "image": "icons/equipment/head/hat-cocked-purple.webp",
        "level": 19,
        "uuid": "Compendium.pf2e.classfeatures.Item.Eternal Confidence",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Eternal Confidence"
        }
      },
      {
        "name": "Assured Evasion",
        "image": "systems/pf2e/icons/features/classes/improved-evasion.webp",
        "level": 13,
        "uuid": "Compendium.pf2e.classfeatures.Item.Assured Evasion",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Assured Evasion"
        }
      },
      {
        "name": "Greater Weapon Specialization",
        "image": "icons/skills/melee/hand-grip-sword-orange.webp",
        "level": 15,
        "uuid": "Compendium.pf2e.classfeatures.Item.Greater Weapon Specialization",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Greater Weapon Specialization"
        }
      },
      {
        "name": "Swashbuckler's Style",
        "image": "icons/magic/symbols/question-stone-yellow.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Swashbuckler's Style",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Swashbuckler's Style"
        }
      },
      {
        "name": "Reinforced Ego",
        "image": "icons/creatures/mammals/bull-horns-eyes-glowin-orange.webp",
        "level": 17,
        "uuid": "Compendium.pf2e.classfeatures.Item.Reinforced Ego",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Reinforced Ego"
        }
      },
      {
        "name": "Stylish Tricks",
        "image": "systems/pf2e/icons/features/classes/stylish-tricks.webp",
        "level": 3,
        "uuid": "Compendium.pf2e.classfeatures.Item.Stylish Tricks",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Stylish Tricks"
        }
      },
      {
        "name": "Vigilant Senses",
        "image": "icons/magic/perception/eye-tendrils-web-purple.webp",
        "level": 11,
        "uuid": "Compendium.pf2e.classfeatures.Item.Perception Mastery",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Perception Mastery"
        }
      },
      {
        "name": "Light Armor Mastery",
        "image": "icons/equipment/chest/breastplate-rivited-red.webp",
        "level": 19,
        "uuid": "Compendium.pf2e.classfeatures.Item.Light Armor Mastery",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Light Armor Mastery"
        }
      },
      {
        "name": "Stylish Combatant",
        "image": "icons/skills/melee/maneuver-greatsword-yellow.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Stylish Combatant",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Stylish Combatant"
        }
      },
      {
        "name": "Opportune Riposte",
        "image": "icons/sundries/flags/banner-symbol-axe-red.webp",
        "level": 3,
        "uuid": "Compendium.pf2e.classfeatures.Item.Opportune Riposte",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Opportune Riposte"
        }
      },
      {
        "name": "Exemplary Finisher",
        "image": "icons/weapons/daggers/dagger-double-engraved-black.webp",
        "level": 9,
        "uuid": "Compendium.pf2e.classfeatures.Item.Exemplary Finisher",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Exemplary Finisher"
        }
      },
      {
        "name": "Light Armor Expertise",
        "image": "icons/equipment/back/mantle-collared-green.webp",
        "level": 13,
        "uuid": "Compendium.pf2e.classfeatures.Item.Light Armor Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Light Armor Expertise"
        }
      },
      {
        "name": "Fortitude Expertise",
        "image": "icons/magic/life/cross-explosion-burst-green.webp",
        "level": 3,
        "uuid": "Compendium.pf2e.classfeatures.Item.Fortitude Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Fortitude Expertise"
        }
      },
      {
        "name": "Confident Evasion",
        "image": "icons/skills/movement/feet-winged-boots-brown.webp",
        "level": 7,
        "uuid": "Compendium.pf2e.classfeatures.Item.Confident Evasion",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Confident Evasion"
        }
      },
      {
        "name": "Keen Flair",
        "image": "systems/pf2e/icons/features/classes/keen-flair.webp",
        "level": 15,
        "uuid": "Compendium.pf2e.classfeatures.Item.Keen Flair",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Keen Flair"
        }
      },
      {
        "name": "Swashbuckler Expertise",
        "image": "systems/pf2e/icons/features/classes/swashbuckler-expertise.webp",
        "level": 9,
        "uuid": "Compendium.pf2e.classfeatures.Item.Swashbuckler Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Swashbuckler Expertise"
        }
      },
      {
        "name": "Continuous Flair",
        "image": "icons/equipment/head/hat-tricorn-pirate-black.webp",
        "level": 11,
        "uuid": "Compendium.pf2e.classfeatures.Item.Continuous Flair",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Continuous Flair"
        }
      },
      {
        "name": "Weapon Mastery",
        "image": "systems/pf2e/icons/features/classes/weapon-mastery.webp",
        "level": 13,
        "uuid": "Compendium.pf2e.classfeatures.Item.Martial Weapon Mastery",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Martial Weapon Mastery"
        }
      }
    ],
    "source": {
      "sourcePack": "classes",
      "sourceId": "uJ5aCzlw34GGdWjp",
      "sourcePath": "pf2e-master/packs/classes/swashbuckler.json",
      "slug": "swashbuckler",
      "image": "systems/pf2e/icons/classes/swashbuckler.webp",
      "publication": {
        "title": "Pathfinder Player Core 2",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "hitPointsPerLevel": 10,
    "keyAbility": {
      "options": [
        "dex"
      ]
    },
    "proficiencies": {
      "perception": 2,
      "savingThrows": {
        "fortitude": 1,
        "reflex": 2,
        "will": 2
      },
      "attacks": {
        "simple": 1,
        "martial": 1,
        "advanced": 0,
        "unarmed": 1,
        "other": {
          "name": "",
          "rank": 0
        }
      },
      "defenses": {
        "unarmored": 1,
        "light": 1,
        "medium": 0,
        "heavy": 0
      },
      "spellcasting": 0
    },
    "trainedSkills": {
      "fixed": [
        "acrobatics"
      ],
      "additional": 4
    },
    "progression": {
      "ancestryFeatLevels": [
        1,
        5,
        9,
        13,
        17
      ],
      "classFeatLevels": [
        1,
        2,
        4,
        6,
        8,
        10,
        12,
        14,
        16,
        18,
        20
      ],
      "generalFeatLevels": [
        3,
        7,
        11,
        15,
        19
      ],
      "skillFeatLevels": [
        2,
        3,
        4,
        6,
        7,
        8,
        10,
        12,
        14,
        15,
        16,
        18,
        20
      ],
      "skillIncreaseLevels": [
        3,
        5,
        7,
        9,
        11,
        13,
        15,
        17,
        19
      ]
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:class:thaumaturge",
    "kind": "class",
    "slug": "thaumaturge",
    "name": "Thaumaturge",
    "description": {
      "sourceHtml": "<p><em>The world is full of the unexplainable: ancient magic, dead gods, and even stranger things. In response, you've scavenged the best parts of every magical tradition and built up a collection of esoterica—a broken holy relic here, a sprig of mistletoe there—that you can use to best any creature by exploiting their weaknesses and vulnerabilities. The mystic implement you carry is both badge and weapon, its symbolic weight helping you bargain with and subdue the supernatural. Every path to power has its restrictions and costs, but you turn them all to your advantage. You're a thaumaturge, and you work wonders.</em></p>\n<p><em>@UUID[Compendium.pf2e.journals.JournalEntry.kzxu2dI7tFxv6Ix6.JournalEntryPage.qigU4oNH2KDVvhjX]{Thaumaturge}</em></p>",
      "plainText": "The world is full of the unexplainable: ancient magic, dead gods, and even stranger things. In response, you've scavenged the best parts of every magical tradition and built up a collection of esoterica—a broken holy relic here, a sprig of mistletoe there—that you can use to best any creature by exploiting their weaknesses and vulnerabilities. The mystic implement you carry is both badge and weapon, its symbolic weight helping you bargain with and subdue the supernatural. Every path to power has its restrictions and costs, but you turn them all to your advantage. You're a thaumaturge, and you work wonders. Thaumaturge"
    },
    "rarity": "common",
    "traits": [],
    "rules": [],
    "grantedItems": [
      {
        "name": "Unlimited Esoterica",
        "image": "systems/pf2e/icons/features/classes/unlimited-esoterica.webp",
        "level": 19,
        "uuid": "Compendium.pf2e.classfeatures.Item.Unlimited Esoterica",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Unlimited Esoterica"
        }
      },
      {
        "name": "Juggernaut",
        "image": "icons/creatures/mammals/bull-horned-blue.webp",
        "level": 15,
        "uuid": "Compendium.pf2e.classfeatures.Item.Juggernaut",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Juggernaut"
        }
      },
      {
        "name": "Lightning Reflexes",
        "image": "icons/magic/symbols/symbol-lightning-bolt.webp",
        "level": 3,
        "uuid": "Compendium.pf2e.classfeatures.Item.Reflex Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Reflex Expertise"
        }
      },
      {
        "name": "First Implement and Esoterica",
        "image": "systems/pf2e/icons/features/classes/first-implement-and-esoterica.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.First Implement and Esoterica",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "First Implement and Esoterica"
        }
      },
      {
        "name": "Greater Weapon Specialization",
        "image": "icons/skills/melee/hand-grip-sword-orange.webp",
        "level": 15,
        "uuid": "Compendium.pf2e.classfeatures.Item.Greater Weapon Specialization",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Greater Weapon Specialization"
        }
      },
      {
        "name": "Medium Armor Expertise",
        "image": "icons/equipment/chest/breastplate-quilted-brown.webp",
        "level": 11,
        "uuid": "Compendium.pf2e.classfeatures.Item.Medium Armor Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Medium Armor Expertise"
        }
      },
      {
        "name": "Second Adept",
        "image": "systems/pf2e/icons/features/classes/second-adept.webp",
        "level": 11,
        "uuid": "Compendium.pf2e.classfeatures.Item.Second Adept",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Second Adept"
        }
      },
      {
        "name": "Esoteric Lore",
        "image": "icons/sundries/documents/document-tree-brown.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Esoteric Lore",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Esoteric Lore"
        }
      },
      {
        "name": "Third Implement",
        "image": "systems/pf2e/icons/features/classes/third-implement.webp",
        "level": 15,
        "uuid": "Compendium.pf2e.classfeatures.Item.Third Implement",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Third Implement"
        }
      },
      {
        "name": "Implement's Empowerment",
        "image": "systems/pf2e/icons/features/classes/implements-empowerment.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Implement's Empowerment",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Implement's Empowerment"
        }
      },
      {
        "name": "Implement Paragon",
        "image": "systems/pf2e/icons/features/classes/implement-paragon.webp",
        "level": 17,
        "uuid": "Compendium.pf2e.classfeatures.Item.Implement Paragon",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Implement Paragon"
        }
      },
      {
        "name": "Weapon Mastery",
        "image": "icons/skills/melee/blade-tip-chipped-blood-red.webp",
        "level": 13,
        "uuid": "Compendium.pf2e.classfeatures.Item.Weapon Mastery",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Weapon Mastery"
        }
      },
      {
        "name": "Intensify Vulnerability",
        "image": "systems/pf2e/icons/features/classes/intensify-vulnerability.webp",
        "level": 9,
        "uuid": "Compendium.pf2e.classfeatures.Item.Intensify Vulnerability",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Intensify Vulnerability"
        }
      },
      {
        "name": "Thaumaturge Weapon Expertise",
        "image": "systems/pf2e/icons/features/classes/weapon-expertise.webp",
        "level": 5,
        "uuid": "Compendium.pf2e.classfeatures.Item.Thaumaturge Weapon Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Thaumaturge Weapon Expertise"
        }
      },
      {
        "name": "Thaumaturgic Expertise",
        "image": "systems/pf2e/icons/features/classes/thaumaturgic-expertise.webp",
        "level": 9,
        "uuid": "Compendium.pf2e.classfeatures.Item.Thaumaturgic Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Thaumaturgic Expertise"
        }
      },
      {
        "name": "Second Implement",
        "image": "systems/pf2e/icons/features/classes/second-implement.webp",
        "level": 5,
        "uuid": "Compendium.pf2e.classfeatures.Item.Second Implement",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Second Implement"
        }
      },
      {
        "name": "Implement Adept",
        "image": "systems/pf2e/icons/features/classes/implement-adept.webp",
        "level": 7,
        "uuid": "Compendium.pf2e.classfeatures.Item.Implement Adept",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Implement Adept"
        }
      },
      {
        "name": "Weapon Specialization",
        "image": "systems/pf2e/icons/features/classes/weapon-specialization.webp",
        "level": 7,
        "uuid": "Compendium.pf2e.classfeatures.Item.Weapon Specialization",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Weapon Specialization"
        }
      },
      {
        "name": "Thaumaturgic Mastery",
        "image": "systems/pf2e/icons/features/classes/thaumaturgic-mastery.webp",
        "level": 17,
        "uuid": "Compendium.pf2e.classfeatures.Item.Thaumaturgic Mastery",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Thaumaturgic Mastery"
        }
      },
      {
        "name": "Exploit Vulnerability",
        "image": "systems/pf2e/icons/features/classes/exploit-vulnerability.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Exploit Vulnerability",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Exploit Vulnerability"
        }
      },
      {
        "name": "Resolve",
        "image": "icons/creatures/mammals/bull-horns-eyes-glowin-orange.webp",
        "level": 7,
        "uuid": "Compendium.pf2e.classfeatures.Item.Resolve",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Resolve"
        }
      },
      {
        "name": "Medium Armor Mastery",
        "image": "icons/equipment/chest/breastplate-collared-steel.webp",
        "level": 19,
        "uuid": "Compendium.pf2e.classfeatures.Item.Medium Armor Mastery",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Medium Armor Mastery"
        }
      },
      {
        "name": "Greater Resolve",
        "image": "systems/pf2e/icons/features/classes/greater-resolve.webp",
        "level": 13,
        "uuid": "Compendium.pf2e.classfeatures.Item.Greater Resolve",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Greater Resolve"
        }
      },
      {
        "name": "Vigilant Senses",
        "image": "icons/magic/perception/eye-tendrils-web-purple.webp",
        "level": 9,
        "uuid": "Compendium.pf2e.classfeatures.Item.Perception Mastery",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Perception Mastery"
        }
      }
    ],
    "source": {
      "sourcePack": "classes",
      "sourceId": "Y5GsHqzCzJlKka6x",
      "sourcePath": "pf2e-master/packs/classes/thaumaturge.json",
      "slug": "thaumaturge",
      "image": "systems/pf2e/icons/default-icons/class.svg",
      "publication": {
        "title": "Pathfinder Dark Archive",
        "license": "OGL",
        "remaster": false
      }
    },
    "normalizationWarnings": [],
    "hitPointsPerLevel": 8,
    "keyAbility": {
      "options": [
        "cha"
      ]
    },
    "proficiencies": {
      "perception": 2,
      "savingThrows": {
        "fortitude": 2,
        "reflex": 1,
        "will": 2
      },
      "attacks": {
        "simple": 1,
        "martial": 1,
        "advanced": 0,
        "unarmed": 1,
        "other": {
          "name": "",
          "rank": 0
        }
      },
      "defenses": {
        "unarmored": 1,
        "light": 1,
        "medium": 1,
        "heavy": 0
      },
      "spellcasting": 0
    },
    "trainedSkills": {
      "fixed": [
        "arcana",
        "nature",
        "occultism",
        "religion"
      ],
      "additional": 3
    },
    "progression": {
      "ancestryFeatLevels": [
        1,
        5,
        9,
        13,
        17
      ],
      "classFeatLevels": [
        1,
        2,
        4,
        6,
        8,
        10,
        12,
        14,
        16,
        18,
        20
      ],
      "generalFeatLevels": [
        3,
        7,
        11,
        15,
        19
      ],
      "skillFeatLevels": [
        2,
        4,
        6,
        8,
        10,
        12,
        14,
        16,
        18,
        20
      ],
      "skillIncreaseLevels": [
        3,
        5,
        7,
        9,
        11,
        13,
        15,
        17,
        19
      ]
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:class:witch",
    "kind": "class",
    "slug": "witch",
    "name": "Witch",
    "description": {
      "sourceHtml": "<p><em>You command powerful magic, not through study or devotion, but as an agent for an otherworldly patron that even you don't entirely understand. This entity might be a covert divinity, a powerful fey, an ancient spirit, or any other mighty supernatural being—but its nature is likely as much a mystery to you as it is to others. Through a special familiar, your patron grants you versatile spells and powerful hexes to use as you see fit, though you're never certain if you're merely serving your patron's larger plan.</em></p>\n<p><em>@UUID[Compendium.pf2e.journals.JournalEntry.kzxu2dI7tFxv6Ix6.JournalEntryPage.fYJruhQfzs4dj0mp]{Witch}</em></p>",
      "plainText": "You command powerful magic, not through study or devotion, but as an agent for an otherworldly patron that even you don't entirely understand. This entity might be a covert divinity, a powerful fey, an ancient spirit, or any other mighty supernatural being—but its nature is likely as much a mystery to you as it is to others. Through a special familiar, your patron grants you versatile spells and powerful hexes to use as you see fit, though you're never certain if you're merely serving your patron's larger plan. Witch"
    },
    "rarity": "common",
    "traits": [],
    "rules": [],
    "grantedItems": [
      {
        "name": "Weapon Expertise",
        "image": "systems/pf2e/icons/features/classes/weapon-expertise.webp",
        "level": 11,
        "uuid": "Compendium.pf2e.classfeatures.Item.Weapon Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Weapon Expertise"
        }
      },
      {
        "name": "Master Spellcaster",
        "image": "icons/skills/trades/academics-book-study-purple.webp",
        "level": 15,
        "uuid": "Compendium.pf2e.classfeatures.Item.Master Spellcaster",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Master Spellcaster"
        }
      },
      {
        "name": "Legendary Spellcaster",
        "image": "icons/sundries/books/book-open-purple.webp",
        "level": 19,
        "uuid": "Compendium.pf2e.classfeatures.Item.Legendary Spellcaster",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Legendary Spellcaster"
        }
      },
      {
        "name": "Perception Expertise",
        "image": "icons/creatures/eyes/human-single-blue.webp",
        "level": 11,
        "uuid": "Compendium.pf2e.classfeatures.Item.Perception Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Perception Expertise"
        }
      },
      {
        "name": "Will of the Pupil",
        "image": "icons/creatures/mammals/bull-horns-eyes-glowin-orange.webp",
        "level": 17,
        "uuid": "Compendium.pf2e.classfeatures.Item.Will of the Pupil",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Will of the Pupil"
        }
      },
      {
        "name": "Defensive Robes",
        "image": "icons/equipment/back/cloak-collared-pink-gold.webp",
        "level": 13,
        "uuid": "Compendium.pf2e.classfeatures.Item.Defensive Robes",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Defensive Robes"
        }
      },
      {
        "name": "Weapon Specialization",
        "image": "systems/pf2e/icons/features/classes/weapon-specialization.webp",
        "level": 13,
        "uuid": "Compendium.pf2e.classfeatures.Item.Weapon Specialization",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Weapon Specialization"
        }
      },
      {
        "name": "Reflex Expertise",
        "image": "icons/magic/symbols/symbol-lightning-bolt.webp",
        "level": 9,
        "uuid": "Compendium.pf2e.classfeatures.Item.Reflex Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Reflex Expertise"
        }
      },
      {
        "name": "Witch Spellcasting",
        "image": "systems/pf2e/icons/features/classes/witch-spellcasting.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Witch Spellcasting",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Witch Spellcasting"
        }
      },
      {
        "name": "Familiar (Witch)",
        "image": "systems/pf2e/icons/features/classes/familiar.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Familiar (Witch)",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Familiar (Witch)"
        }
      },
      {
        "name": "Hexes",
        "image": "systems/pf2e/icons/features/classes/hexes.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Hex Spells",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Hex Spells"
        }
      },
      {
        "name": "Patron",
        "image": "icons/magic/symbols/question-stone-yellow.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Patron",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Patron"
        }
      },
      {
        "name": "Magical Fortitude",
        "image": "systems/pf2e/icons/features/classes/magical-fortitude.webp",
        "level": 5,
        "uuid": "Compendium.pf2e.classfeatures.Item.Magical Fortitude",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Magical Fortitude"
        }
      },
      {
        "name": "Expert Spellcaster",
        "image": "icons/sundries/books/book-backed-silver-gold.webp",
        "level": 7,
        "uuid": "Compendium.pf2e.classfeatures.Item.Expert Spellcaster",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Expert Spellcaster"
        }
      },
      {
        "name": "Patron's Gift",
        "image": "systems/pf2e/icons/features/classes/patrons-gift.webp",
        "level": 19,
        "uuid": "Compendium.pf2e.classfeatures.Item.Patron's Gift",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Patron's Gift"
        }
      }
    ],
    "source": {
      "sourcePack": "classes",
      "sourceId": "bYDXk9HUMKOuym9h",
      "sourcePath": "pf2e-master/packs/classes/witch.json",
      "slug": "witch",
      "image": "systems/pf2e/icons/classes/witch.webp",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "hitPointsPerLevel": 6,
    "keyAbility": {
      "options": [
        "int"
      ]
    },
    "proficiencies": {
      "perception": 1,
      "savingThrows": {
        "fortitude": 1,
        "reflex": 1,
        "will": 2
      },
      "attacks": {
        "simple": 1,
        "martial": 0,
        "advanced": 0,
        "unarmed": 1,
        "other": {
          "name": "",
          "rank": 0
        }
      },
      "defenses": {
        "unarmored": 1,
        "light": 0,
        "medium": 0,
        "heavy": 0
      },
      "spellcasting": 1
    },
    "trainedSkills": {
      "fixed": [],
      "additional": 3
    },
    "progression": {
      "ancestryFeatLevels": [
        1,
        5,
        9,
        13,
        17
      ],
      "classFeatLevels": [
        2,
        4,
        6,
        8,
        10,
        12,
        14,
        16,
        18,
        20
      ],
      "generalFeatLevels": [
        3,
        7,
        11,
        15,
        19
      ],
      "skillFeatLevels": [
        2,
        4,
        6,
        8,
        10,
        12,
        14,
        16,
        18,
        20
      ],
      "skillIncreaseLevels": [
        3,
        5,
        7,
        9,
        11,
        13,
        15,
        17,
        19
      ]
    }
  },
  {
    "schemaVersion": 1,
    "id": "pf2e:class:wizard",
    "kind": "class",
    "slug": "wizard",
    "name": "Wizard",
    "description": {
      "sourceHtml": "<p><em>You are an eternal student of the secrets of the universe, using your mastery of magic to cast powerful spells. You treat magic like a science, cross-referencing the latest texts on practical spellcraft with ancient tomes to discover and understand arcane magic. Yet magical theory is vast, and there's no way you can study it all. Most wizards learn through formal schooling, with their curriculum informing a specific rubric, although particularly driven researchers sometimes piece together their own theories.</em></p>\n<p><em>@UUID[Compendium.pf2e.journals.JournalEntry.kzxu2dI7tFxv6Ix6.JournalEntryPage.wDukeO3euLEGn6FA]{Wizard}</em></p>",
      "plainText": "You are an eternal student of the secrets of the universe, using your mastery of magic to cast powerful spells. You treat magic like a science, cross-referencing the latest texts on practical spellcraft with ancient tomes to discover and understand arcane magic. Yet magical theory is vast, and there's no way you can study it all. Most wizards learn through formal schooling, with their curriculum informing a specific rubric, although particularly driven researchers sometimes piece together their own theories. Wizard"
    },
    "rarity": "common",
    "traits": [],
    "rules": [],
    "grantedItems": [
      {
        "name": "Wizard Spellcasting",
        "image": "icons/sundries/books/book-eye-purple.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Wizard Spellcasting",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Wizard Spellcasting"
        }
      },
      {
        "name": "Arcane School",
        "image": "icons/magic/symbols/question-stone-yellow.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Arcane School",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Arcane School"
        }
      },
      {
        "name": "Arcane Bond",
        "image": "icons/weapons/wands/wand-carved-pink.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Arcane Bond",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Arcane Bond"
        }
      },
      {
        "name": "Weapon Specialization",
        "image": "systems/pf2e/icons/features/classes/weapon-specialization.webp",
        "level": 13,
        "uuid": "Compendium.pf2e.classfeatures.Item.Weapon Specialization",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Weapon Specialization"
        }
      },
      {
        "name": "Perception Expertise",
        "image": "icons/creatures/eyes/human-single-blue.webp",
        "level": 11,
        "uuid": "Compendium.pf2e.classfeatures.Item.Perception Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Perception Expertise"
        }
      },
      {
        "name": "Expert Spellcaster",
        "image": "icons/sundries/books/book-backed-silver-gold.webp",
        "level": 7,
        "uuid": "Compendium.pf2e.classfeatures.Item.Expert Spellcaster",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Expert Spellcaster"
        }
      },
      {
        "name": "Weapon Expertise",
        "image": "icons/skills/melee/hand-grip-sword-red.webp",
        "level": 11,
        "uuid": "Compendium.pf2e.classfeatures.Item.Weapon Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Weapon Expertise"
        }
      },
      {
        "name": "Arcane Thesis",
        "image": "icons/sundries/scrolls/scroll-writing-tan-grey.webp",
        "level": 1,
        "uuid": "Compendium.pf2e.classfeatures.Item.Arcane Thesis",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Arcane Thesis"
        }
      },
      {
        "name": "Legendary Spellcaster",
        "image": "icons/sundries/books/book-open-purple.webp",
        "level": 19,
        "uuid": "Compendium.pf2e.classfeatures.Item.Legendary Spellcaster",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Legendary Spellcaster"
        }
      },
      {
        "name": "Archwizard's Spellcraft",
        "image": "icons/sundries/books/book-eye-purple.webp",
        "level": 19,
        "uuid": "Compendium.pf2e.classfeatures.Item.Archwizard's Spellcraft",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Archwizard's Spellcraft"
        }
      },
      {
        "name": "Prodigious Will",
        "image": "icons/creatures/mammals/bull-horns-eyes-glowin-orange.webp",
        "level": 17,
        "uuid": "Compendium.pf2e.classfeatures.Item.Prodigious Will",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Prodigious Will"
        }
      },
      {
        "name": "Master Spellcaster",
        "image": "icons/skills/trades/academics-book-study-purple.webp",
        "level": 15,
        "uuid": "Compendium.pf2e.classfeatures.Item.Master Spellcaster",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Master Spellcaster"
        }
      },
      {
        "name": "Reflex Expertise",
        "image": "icons/magic/symbols/symbol-lightning-bolt.webp",
        "level": 5,
        "uuid": "Compendium.pf2e.classfeatures.Item.Reflex Expertise",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Reflex Expertise"
        }
      },
      {
        "name": "Magical Fortitude",
        "image": "systems/pf2e/icons/features/classes/magical-fortitude.webp",
        "level": 9,
        "uuid": "Compendium.pf2e.classfeatures.Item.Magical Fortitude",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Magical Fortitude"
        }
      },
      {
        "name": "Defensive Robes",
        "image": "icons/equipment/back/cloak-collared-pink-gold.webp",
        "level": 13,
        "uuid": "Compendium.pf2e.classfeatures.Item.Defensive Robes",
        "parsedReference": {
          "system": "pf2e",
          "pack": "classfeatures",
          "documentType": "Item",
          "documentIdOrName": "Defensive Robes"
        }
      }
    ],
    "source": {
      "sourcePack": "classes",
      "sourceId": "RwjIZzIxzPpUglnK",
      "sourcePath": "pf2e-master/packs/classes/wizard.json",
      "slug": "wizard",
      "image": "systems/pf2e/icons/classes/wizard.webp",
      "publication": {
        "title": "Pathfinder Player Core",
        "license": "ORC",
        "remaster": true
      }
    },
    "normalizationWarnings": [],
    "hitPointsPerLevel": 6,
    "keyAbility": {
      "options": [
        "int"
      ]
    },
    "proficiencies": {
      "perception": 1,
      "savingThrows": {
        "fortitude": 1,
        "reflex": 1,
        "will": 2
      },
      "attacks": {
        "simple": 1,
        "martial": 0,
        "advanced": 0,
        "unarmed": 1,
        "other": {
          "name": "",
          "rank": 0
        }
      },
      "defenses": {
        "unarmored": 1,
        "light": 0,
        "medium": 0,
        "heavy": 0
      },
      "spellcasting": 1
    },
    "trainedSkills": {
      "fixed": [
        "arcana"
      ],
      "additional": 2
    },
    "progression": {
      "ancestryFeatLevels": [
        1,
        5,
        9,
        13,
        17
      ],
      "classFeatLevels": [
        2,
        4,
        6,
        8,
        10,
        12,
        14,
        16,
        18,
        20
      ],
      "generalFeatLevels": [
        3,
        7,
        11,
        15,
        19
      ],
      "skillFeatLevels": [
        2,
        4,
        6,
        8,
        10,
        12,
        14,
        16,
        18,
        20
      ],
      "skillIncreaseLevels": [
        3,
        5,
        7,
        9,
        11,
        13,
        15,
        17,
        19
      ]
    }
  }
]
