import type { Pathfinder2eOriginalContentRecord } from '../../records'
import type { Pathfinder2eBestiaryData } from '../types'

export const PATHFINDER_2E_EXHAUSTIVE_08_BESTIARY_ORIGINALS: readonly Pathfinder2eOriginalContentRecord<Pathfinder2eBestiaryData>[] = [
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:slime-mold",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "PFB61dvUsakciV0N",
      "slug": "slime-mold",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:950b34dad4169aa4b535470113afcc92533e974a609c5305452f1892fff84557",
    "translatableHash": "sha256:3855cea3259aea9f7997bc61d554c75d395a82a88f148425c043de7bf8feef6c",
    "data": {
      "schemaVersion": 1,
      "name": "Slime Mold",
      "level": 2,
      "rarity": "common",
      "size": "large",
      "traits": [
        "fungus",
        "mindless",
        "ooze"
      ],
      "description": "A slime mold appears as a mound of earth and detritus covered in a thick layer of fungus that exudes a faint stink of decay. The fungus actually shares a symbiotic relationship with the slime mold, serving as an external digestive system while gaining access to the nutrients it needs. The ooze remains perfectly still until living prey passes within reach, then it lashes out with disgusting pseudopods. With a touch, a slime mold can infect its prey with a foul contagion known as slime rot, a horrific disease that painfully breaks down a victim's flesh. At first, the disease manifests as painful rashes and agonized joints. In the later stages, though, the flesh of the affected creature actually begins to liquefy and run in rivulets as the creature's spores continue to work. Death, when it occurs, swiftly causes the resulting body to split open and release a brand new slime mold.\nDue to their bizarre physical structures and ability to break down and feed on a wide variety of materials, oozes are able to adapt to nearly any climate, especially when assisted by magical or alchemical tinkering. As a result, explorers frequently encounter new and terrifying varieties of these amorphous creatures.",
      "armorClass": 12,
      "hitPoints": 60,
      "speedFeet": 10,
      "perception": {
        "modifier": 6,
        "senses": [
          "motion-sense-60"
        ]
      },
      "saves": {
        "fortitude": 11,
        "reflex": 3,
        "will": 4
      },
      "abilities": {
        "str": 3,
        "dex": 0,
        "con": 5,
        "int": -5,
        "wis": 0,
        "cha": -5
      },
      "skills": {
        "athletics": 7,
        "stealth": 6
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "critical-hits",
          "precision",
          "unconscious",
          "visual"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "a3cYrmsIGVchwgtR",
          "name": "Pseudopod",
          "bonus": 8,
          "damage": "1d8+3 bludgeoning",
          "traits": [
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "IieLHPPUSUSDsN8d",
          "name": "Motion Sense",
          "kind": "passive",
          "description": "A slime mold can sense nearby creatures through vibration and air or water movement."
        },
        {
          "id": "kkVojFishI8AxnVn",
          "name": "Slime Rot",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:18)\nOnset [[/gmr 1d4 #days]]{1d4 days}\nStage 1 Enfeebled 1 and Sickened 1 (1 day)\nStage 2 as stage 1 (1 day)\nStage 3 Drained 1, Enfeebled 2, and Sickened 2 (1 day)\nStage 4 as stage 3 (1 day)\nStage 5 Drained 2 plus Unconscious (no Perception check to wake up) (1 day)\nStage 6 dead, and the body erupts to release a new slime mold"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:stone-lion-cub",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "ROHOyxPW1njsDOG3",
      "slug": "stone-lion-cub",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:779736af9eed167e01c67949e8416890c8fc56a202e15cd669bc0e001e5d0358",
    "translatableHash": "sha256:e644fb1726ca936d28b29873ea5abb5c8447fbdd01a2183c73df95c3f7af0472",
    "data": {
      "schemaVersion": 1,
      "name": "Stone Lion Cub",
      "level": 2,
      "rarity": "uncommon",
      "size": "large",
      "traits": [
        "celestial",
        "holy"
      ],
      "description": "Stone lion cubs are curious, playful, and occasionally accidental mischief makers. Despite their still developing abilities, they eagerly hone their skills with make-believe missions. Many hope that they'll one day become responsible guardians like their parents.\nSmaller in stature and ferocity, stone lion cubs sometimes try to guard places of smaller importance, often including facsimiles of the same kinds of structures their parents attend. They're less than dependable as guardians, as they have the attention span and rambunctious nature of children. Their parents often need to call them to heel, ordering them to stay at the parent's side as parent and child both stay motionless for the rising day.\nStone statues of beasts can often be found paired and standing guard to either side of an entryway. While some seem like merely lifeless statues, others are far more than they appear to be. Guardian beasts ward against evil and misfortune. Some of these celestial spirits were assigned this task, while others assumed their roles out of a sense of duty. To allow them to maintain a constant presence in the material world, pious artisans carve stone vessels of the beasts in their likeness; these statues then serve as anchors for the guardian beasts' souls. Should the need arise, guardian beasts can merge with their stony form, becoming a dangerous foe with noble courage, an indomitable will, and few weaknesses.\nBy day, guardian beasts stay in their vessels and pretend to be inanimate. Past nightfall, they might patrol the grounds in their stone form or leave the heavy vessel behind to go where a solid body can't reach. Some take this chance to visit the dreams of individuals they favor and send them messages, notifying them of strange occurrences or warning them of incoming danger. Despite their good intentions, the dream messages from guardian beasts can be obscure, often overshadowed by the spirit's personality or strange assumptions they make due to their nature as resolute guardians.\nWhile guardian beasts can work alone, they usually appear in bonded pairs who complement each other in nature. One could be a jokester, the other gloomy; another could be nurturing, the other strict. To make two otherwise identical-looking beasts distinct, sculptors often depict one stone animal with their young. In the case of stone lions, a common type of guardian beasts, this approach means carving stone lion cubs to accompany one of the guardians.",
      "armorClass": 18,
      "hitPoints": 28,
      "speedFeet": 0,
      "perception": {
        "modifier": 10,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 6,
        "reflex": 7,
        "will": 10
      },
      "abilities": {
        "str": 3,
        "dex": 3,
        "con": 0,
        "int": 1,
        "wis": 4,
        "cha": 0
      },
      "skills": {
        "acrobatics": 7,
        "athletics": 7,
        "religion": 8
      },
      "languages": [
        "common",
        "empyrean"
      ],
      "defenses": {
        "immunities": [
          "disease",
          "paralyzed",
          "petrified",
          "poison"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [],
      "actions": [
        {
          "id": "B6XTsaKrVSNm3IX7",
          "name": "Telepathy 60 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "T7cl6r9Q9cdH7q2Q",
          "name": "Anchored Soul",
          "kind": "passive",
          "description": "The cub is mystically bonded to its bonded vessel and must remain within 1 mile of it. Some might be further restricted to the location it guards."
        },
        {
          "id": "XTgwZSQK0BbVTSBC",
          "name": "+1 Status to All Saves vs. Unholy",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "A3POhpGYovQJDozd",
          "name": "Bonded Vessel",
          "kind": "passive",
          "description": "The condition of a stone cub's vessel dictates the cub's maximum Hit Point value. Undamaged, the vessel is an object with 28 Hit Points (BT 14). When the cub is in spirit form, damaging it doesn't hurt the vessel, but damaging the vessel deals an equal amount of damage to the cub. When the cub Inhabits its Vessel, they're a single target, and damage reduces the Hit Points of both the cub and the vessel. If the vessel is broken, the cub can still fight normally while inhabiting it and suffers no ill effect, but if the vessel is ever destroyed, the cub is instantly slain and can't reconstitute."
        },
        {
          "id": "4QajQWtHxBUlKsgo",
          "name": "Reconstitution",
          "kind": "passive",
          "description": "When the cub reaches 0 Hit Points, its spirit dissipates. If its bonded vessel is intact, the cub re-forms in this vessel after [[/gmr 2d4 #Reconstitution]]{2d4 days}, fully healed. If the vessel is broken, it must first be Repaired, after which the cub reforms in [[/gmr 3d4 #Reconstitution]]{3d4 days}."
        },
        {
          "id": "2bcr0iC80HhF1QZo",
          "name": "Inhabit Vessel",
          "kind": "action",
          "description": "The cub touches and melds with its bonded vessel, bringing the statue to life. It can cease Inhabiting its Vessel by spending a single action, which has the concentrate trait. While Inhabiting the Vessel, it loses its fly Speed and gains:\nImmunities healing, nonlethal\nResistances physical 3 (except bludgeoning)\nSpeed 20 feet; and the following Strike.\n• Melee A Jaws +10 (agile), Damage 1d6+5 bludgeoning plus Grab."
        },
        {
          "id": "kWARaiGoyPB0KHgj",
          "name": "Spirit Body",
          "kind": "passive",
          "description": "When not Inhabiting its Vessel, the cub is incorporeal and gains resistance 3 to all damage (except force damage and damage from Strikes with the Ghost Touch property rune; double resistance against non-magical)."
        }
      ],
      "spellcasting": [
        {
          "id": "fPZelv8NqLRyuQ1p",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 9,
          "saveDc": 17,
          "spells": [
            {
              "id": "9f0C9k9fO0tU9t1k",
              "name": "Detect Alignment (At Will) (Evil Only)",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:leprechaun",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "RY9Xm1B6NwWuChFs",
      "slug": "leprechaun",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:e09fa8afb67091355e9b2d81b521f2fc18de4d8606809b671f8e004b254b0118",
    "translatableHash": "sha256:a2ded8107f12d9a98dd11c815fc52990fd13323f48ed3880758f65b5b6a046ac",
    "data": {
      "schemaVersion": 1,
      "name": "Leprechaun",
      "level": 2,
      "rarity": "common",
      "size": "small",
      "traits": [
        "fey"
      ],
      "description": "Leprechauns are mostly jovial tricksters who prefer mischief over conflict. They fill their days with as much fun, wine, and food as possible. Mostly found in forested regions, leprechauns respect nature and those who protect it.\nLeprechauns do not attack on sight. Rather, they engage in conversation and try to charm, cajole, or trick those they meet into doing favors for them or freely giving over a treasured item, usually in return for illusory wealth or false promises of wealth and success. These small tricksters are masters at discerning the desires of those they meet-a knack that puts them in a powerful position when bargaining for goods or favors. They aren't above turning people against each other for their own benefit but generally not to an extent that causes harm.\nIn most cases, a leprechaun doesn't keep a purloined possession for long. The leprechaun most often returns such stolen prizes just in time to defuse tensions, often as they point out the humor of the situation, hoping to share their amusement and mirth with the victim. In cases where a leprechaun's trick goes too far and results in an incensed victim, the leprechaun quickly flees the conflict rather than engage in combat. This willingness to return stolen goods or to flee from battles fades as leprechauns grow older. Ancient leprechauns who have lived for thousands of years often spiral into dark bitterness and increasingly use their powers and illusions to lure those who offend them or fail to appreciate a joke into danger... or even death.",
      "armorClass": 18,
      "hitPoints": 25,
      "speedFeet": 30,
      "perception": {
        "modifier": 11,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 8,
        "reflex": 11,
        "will": 10
      },
      "abilities": {
        "str": 1,
        "dex": 4,
        "con": 1,
        "int": 3,
        "wis": 3,
        "cha": 4
      },
      "skills": {
        "acrobatics": 8,
        "deception": 9,
        "nature": 7,
        "performance": 9,
        "thievery": 8
      },
      "languages": [
        "common",
        "fey"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "1A17VJOGWG0BFypA",
          "name": "Club",
          "bonus": 7,
          "damage": "1d6+3 bludgeoning",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "qZaBb2z6mE2zLL2u",
          "name": "Create Object",
          "kind": "action",
          "description": "Frequency three times per day\nEffect The leprechaun produces an item out of their hat, from behind their jacket, from within a hole in a tree stump, or from any other unexpected location. This conjured item must be no more than 1 Bulk and must be made of relatively commonplace material (such as cloth, wood, stone, or even low-value metal like iron or lead). It can't rely on intricate artistry or complex moving parts, never fulfills a Cost or the like, and can't be made of precious materials or materials with a rarity of uncommon or higher. The created object is temporary and lasts for 1 hour or until the leprechaun creates a new item, whichever comes first."
        },
        {
          "id": "ixXRVHF3jg0IMuKw",
          "name": "Leprechaun Magic",
          "kind": "passive",
          "description": "Leprechauns love to use their magic to beguile others, and after generations of doing so, they've developed a strong connection to such tricks. When a leprechaun uses their innate spells to deceive, trick, or humiliate a creature, the spell DC increases to 20 and the attack modifier to +12."
        }
      ],
      "spellcasting": [
        {
          "id": "IdvmUbY1N6s5chew",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 10,
          "saveDc": 18,
          "spells": [
            {
              "id": "kFj0X53BTNQOvhPR",
              "name": "Figment",
              "rank": 1
            },
            {
              "id": "KLd5gOPEf90G5UM3",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "An3q4rwPpyY2HZL3",
              "name": "Prestidigitation",
              "rank": 1
            },
            {
              "id": "pgTG0393jHjIw7fG",
              "name": "Runic Weapon",
              "rank": 1
            },
            {
              "id": "zra34g6ufRF1ojBQ",
              "name": "Telekinetic Hand",
              "rank": 1
            },
            {
              "id": "mRJetSmNeFPxiZ4T",
              "name": "Telekinetic Projectile",
              "rank": 1
            },
            {
              "id": "0mDEXxe993jwv517",
              "name": "Vanishing Tracks",
              "rank": 1
            },
            {
              "id": "fIPr1yd0wokQtX3H",
              "name": "Ventriloquism",
              "rank": 1
            },
            {
              "id": "WkwcXidL94BdbudZ",
              "name": "Illusory Creature",
              "rank": 2
            },
            {
              "id": "h2ULSRsaevT8mbGI",
              "name": "Illusory Object",
              "rank": 2
            },
            {
              "id": "wxxrLHhewpINhF4L",
              "name": "Invisibility",
              "rank": 2
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:incutilis",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "TExLkHMs37EL7uzZ",
      "slug": "incutilis",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:92238611849a6f762024ef712d0f4f7a7ff3696441e03674d4752e21a2d34d2e",
    "translatableHash": "sha256:12e4a0727f6d206225f4576cde45a6cff0dbad99bb3164b2d2cb158dc20b409a",
    "data": {
      "schemaVersion": 1,
      "name": "Incutilis",
      "level": 2,
      "rarity": "uncommon",
      "size": "tiny",
      "traits": [
        "aberration",
        "amphibious"
      ],
      "description": "Incutilises are intelligent, nautilus-like sea creatures that attack their victims' brains to take over their bodies, creating puppets to use for labor, combat, or their own malevolent amusement.\nAn adult incutilis is slightly smaller than an adult human head, and their shell bears a pattern of crimson streaks that resemble the ridges and furrows of a brain. Incutilises hatch within the depths of the sea, where they start off consuming bottom-dwelling crustaceans and sometimes even whales or sharks. As they grow into adults, incutilises instinctively crave the complex tissues of other creatures' brains—the more complex, the better—preferring to target humanoids and animals.\nEventually, an incutilis will make an excursion onto land specifically to find a puppet to control. Using their tentacles to crawl up onto shore or climb aboard a ship, they then drive their tendrils directly into the brain of a helpless living (or very recently dead) land creature. An incutilis takes control of their new host through this neurological connection. This host—now called a puppet—rarely survives the experience.\nAfter an incutilis has taken full control, they can usually ride their puppet for as long as they wish. Often, they use the puppet to seek out other potential prey, battling other creatures until the wear and tear from repeated conflict renders their current body useless.",
      "armorClass": 17,
      "hitPoints": 21,
      "speedFeet": 5,
      "perception": {
        "modifier": 7,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 7,
        "reflex": 7,
        "will": 9
      },
      "abilities": {
        "str": 4,
        "dex": 3,
        "con": 1,
        "int": 1,
        "wis": 3,
        "cha": -1
      },
      "skills": {
        "athletics": 8,
        "deception": 5,
        "stealth": 9
      },
      "languages": [
        "aklo",
        "thalassic"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "jXXj12Ms7rwachuJ",
          "name": "Tentacle",
          "bonus": 8,
          "damage": "1d4+4 bludgeoning",
          "traits": [
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "QcmYAzsaY6yAGF57",
          "name": "Telepathy 30 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "HaabyhLdYCTUOsfW",
          "name": "Abandon Puppet",
          "kind": "action",
          "description": "Requirements The incutilis is attached to a puppet\nEffect The incutilis abandons its puppet, detaching and separating from its nervous system. If the puppet is still alive, it's Unconscious and temporarily immune to that incutilis's Puppetmaster ability for 24 hours."
        },
        {
          "id": "8YO057Nzxom2fTI6",
          "name": "Puppetmaster",
          "kind": "action",
          "description": "An incutilis drives tendrils into a Small or Medium living creature that's Unconscious or Restrained by the incutilis. They attach and inject the unfortunate host with enzymes to take over control of the creature's nervous system, turning the host into a puppet controlled by the incutilis.\nThe puppet becomes controlled by the incutilis, and gains dying 2. This doesn't change the puppet's HP, and the puppet can have this dying condition even if it has more than 0 HP. If the puppet dies, its body remains under the control of the incutilis until it's destroyed or the incutilis Abandons the Puppet.\nIf the puppet recovers from the dying condition, the incutilis immediately Abandons the Puppet. While controlling a puppet, the incutilis is attached to the puppet's head (or elsewhere, if its brain is in an unconventional location) and moves along with it. The puppet uses its own AC, Hit Points, Fortitude and Reflex saves, and physical Strikes, but it uses the incutilis's Will save. The puppet can perform only basic actions and untrained uses of the Athletics and Stealth skills while controlled.\nAny attack that deals damage to the puppet also deals 1[mental] damage to the incutilis. Area effects are applied to both the incutilis and puppet. The incutilis always has lesser cover while in control of a puppet.\nEffect: Cover"
        },
        {
          "id": "5MIpX0Dt4J9zlafV",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:flaming-skull",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "UfiWHXnDg13Gqyyu",
      "slug": "flaming-skull",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:b879faf1063f3049a5976a66bfee272ad25c103bdd5ade279efa348979376158",
    "translatableHash": "sha256:7977ab58a7c5a2c7979ebc42aaa786cf1cb83511fbed63ec98e40948522fc096",
    "data": {
      "schemaVersion": 1,
      "name": "Flaming Skull",
      "level": 2,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "mindless",
        "undead",
        "unholy"
      ],
      "description": "More dangerous than simple severed heads, these skulls are wreathed in unearthly flames.\nBeheaded are the reanimated heads of decapitation victims. These mindless undead fly through the air or roll around to attack their prey.",
      "armorClass": 18,
      "hitPoints": 30,
      "speedFeet": 15,
      "perception": {
        "modifier": 9,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 5,
        "reflex": 10,
        "will": 7
      },
      "abilities": {
        "str": 1,
        "dex": 4,
        "con": 1,
        "int": -5,
        "wis": 3,
        "cha": 0
      },
      "skills": {
        "acrobatics": 8,
        "athletics": 7
      },
      "languages": [
        "common",
        "necril"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "death-effects",
          "disease",
          "fire",
          "paralyzed",
          "poison",
          "unconscious"
        ],
        "resistances": [],
        "weaknesses": [
          "vitality 3"
        ]
      },
      "attacks": [
        {
          "id": "AmUgwUNSujKkZSco",
          "name": "Forehead",
          "bonus": 10,
          "damage": "1d6+3 bludgeoning; 1d6 fire",
          "traits": [
            "finesse"
          ]
        },
        {
          "id": "pmhHWb3PBr7rQpE5",
          "name": "Spitfire",
          "bonus": 10,
          "damage": "1d12+2 fire",
          "traits": [
            "agile",
            "fire"
          ]
        }
      ],
      "actions": [
        {
          "id": "IzAYt0TOGDn03Iuj",
          "name": "Fiery Explosion",
          "kind": "passive",
          "description": "When destroyed, a flaming skull explodes in a blast of fire and bone that deals 1d6[piercing,1d6[fire]]{1d6 piercing damage plus 1d6 fire damage} to each adjacent creature (check (reflex, dc:18, basic) save)."
        },
        {
          "id": "sIWC4aZPyNtODaFY",
          "name": "Void Healing",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "AJK2FzoU6wIUxE43",
          "name": "Flaming Shroud",
          "kind": "passive",
          "description": "A flaming skull is shrouded in hideous flames. It deals 1d6[fire] damage to any unattended item it touches and on a forehead Strike. On a critical hit with a Strike, the target catches fire, taking 1d4[persistent,fire]."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:kitsune-trickster",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "uvzy6nHGS430DEfC",
      "slug": "kitsune-trickster",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:e094fb741319df848e642904bc0f9357dc848a1244be458ec7d153159fb0e53a",
    "translatableHash": "sha256:1f527ed490db54d2787b119864f5ce60b4d176546b261b2385d15083f009f900",
    "data": {
      "schemaVersion": 1,
      "name": "Kitsune Trickster",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "humanoid",
        "kitsune"
      ],
      "description": "With minor magic and shapeshifting capabilities, these tricksters love to play mostly harmless pranks for their own enjoyment.\nKitsune are shapeshifting, fox-like humanoids who have been blessed by the spirits. They can shift from the form of a fox-headed humanoid into a specific alternate form unique to each kitsune, usually either a tailless form—such as a humanoid body without any fox features (typically of the prevalent ancestry where they grew up)—or a fox form. Kitsune revel in joy and beauty, often practicing storytelling, dance, and other creative arts. However, they also have a penchant for playing pranks on the joyless and self-important, earning them a reputation as tricksters. Favored by the goddess Daikitsu, kitsune seem to be almost supernaturally lucky, perpetually dodging danger by the narrowest margins.\nWhile kitsune settlements do exist, most kitsune are incredibly curious and often leave home at a young age to encounter new people and sights. Some kitsune spend years in their tailless form, living disguised among humanoids in urban or rural societies whose inhabitants have no clue of their true nature. Others go to the opposite extreme, spending most of their lives in the form of a fox, only to reveal themselves at the most opportune moment. For many kitsune, revealing their true form to someone is a sign of great trust, but it's also not uncommon for kitsune to display their dual nature openly.\nKitsune's connection to the spiritual world grants them a number of magical abilities. Aside from their innate shapeshifting powers, kitsune naturally develop more potent magic as they mature, and they seem to effortlessly pick up skills that would rival the most practiced spellcasters. Those who truly apply themselves to honing their magic usually become remarkable at their craft.\nA kitsune is born with one tail, but as their magical powers grow, so do their number of tails. Elders blessed with great magical wisdom can have as many as nine, though according to popular legend, this level of power can take up to a thousand years to achieve.",
      "armorClass": 18,
      "hitPoints": 25,
      "speedFeet": 25,
      "perception": {
        "modifier": 10,
        "senses": []
      },
      "saves": {
        "fortitude": 6,
        "reflex": 10,
        "will": 8
      },
      "abilities": {
        "str": 0,
        "dex": 4,
        "con": 0,
        "int": 0,
        "wis": 2,
        "cha": 4
      },
      "skills": {
        "acrobatics": 8,
        "deception": 10,
        "diplomacy": 8,
        "nature": 6,
        "performance": 8,
        "thievery": 8
      },
      "languages": [
        "common",
        "fey"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "bwtyo44aSwZI77Nf",
          "name": "Dagger",
          "bonus": 10,
          "damage": "1d4+2 piercing",
          "traits": [
            "agile",
            "finesse",
            "versatile-s"
          ]
        },
        {
          "id": "HjTuoeAPxRZwlJJ0",
          "name": "Dagger",
          "bonus": 10,
          "damage": "1d4+2 piercing",
          "traits": [
            "agile",
            "thrown-10",
            "versatile-s"
          ]
        },
        {
          "id": "5g6edh5txrSyrnz2",
          "name": "Jaws",
          "bonus": 10,
          "damage": "1d6+2 slashing",
          "traits": [
            "finesse"
          ]
        },
        {
          "id": "IXiEYJ2Y9Njit6k8",
          "name": "Foxfire",
          "bonus": 12,
          "damage": "1d4+2 fire",
          "traits": [
            "fire",
            "magical"
          ]
        }
      ],
      "actions": [
        {
          "id": "Q2mHYuoF6SmOT9c7",
          "name": "Change Shape",
          "kind": "action",
          "description": "The kitsune trickster transforms into the tailless form of a specific Medium human. The tailless form can't be altered and resembles the kitsune's fox-like humanoid form. While the kitsune trickster's alternate form is a Medium human, some kitsune have tailless forms of other humanoids, or a fox alternate form."
        }
      ],
      "spellcasting": [
        {
          "id": "MvhfdrtoGXFUqvIO",
          "name": "Primal Spontaneous Spells",
          "tradition": "primal",
          "category": "spontaneous",
          "attackModifier": 0,
          "saveDc": 0,
          "spells": [
            {
              "id": "mpG44vJIKTZJiv7j",
              "name": "Charm",
              "rank": 1
            },
            {
              "id": "zzFvyCYXcsedmyF5",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "RwgmYNlyIQPP0pyS",
              "name": "Figment",
              "rank": 1
            },
            {
              "id": "1ypptplrwM0pp71r",
              "name": "Fleet Step",
              "rank": 1
            },
            {
              "id": "qVbPw4HcKtQu7SJy",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "0PHufy60vLmCIDzk",
              "name": "Prestidigitation",
              "rank": 1
            },
            {
              "id": "SrDXN1qPLA75qGhS",
              "name": "Runic Body",
              "rank": 1
            },
            {
              "id": "y1jkS4DEt0tCmRri",
              "name": "Tangle Vine",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:spark-moth",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "vgM18Dm3ur29KJjA",
      "slug": "spark-moth",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:cffb4b2eaf233b7201a01e29b0b973ce56a598c47845fd9d84a931d077d5f39c",
    "translatableHash": "sha256:70675d08a193da0250c1fdfdb09437aee7c47f78ad5f1b3a1b3d5122b0610bd4",
    "data": {
      "schemaVersion": 1,
      "name": "Spark Moth",
      "level": 2,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "air",
        "elemental"
      ],
      "description": "Spark bats congregate around volatile weather in the Plane of Air.\nSome elementals embody aspects of air, such as smoke, lightning, and fog.",
      "armorClass": 18,
      "hitPoints": 20,
      "speedFeet": 5,
      "perception": {
        "modifier": 7,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 5,
        "reflex": 11,
        "will": 7
      },
      "abilities": {
        "str": 0,
        "dex": 3,
        "con": 1,
        "int": -4,
        "wis": 1,
        "cha": 0
      },
      "skills": {
        "acrobatics": 9,
        "stealth": 9
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "bleed",
          "electricity",
          "paralyzed",
          "poison",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "GVFq98KDosC4rgkt",
          "name": "Wing",
          "bonus": 11,
          "damage": "1d4+5 electricity",
          "traits": [
            "agile",
            "finesse"
          ]
        }
      ],
      "actions": [
        {
          "id": "qbm10J9qDUiFCQDn",
          "name": "Arc Lightning",
          "kind": "passive",
          "description": "The spark moth transforms into lightning that arcs to a large piece of metal within 100 feet, such as a suit of metal armor or metal weapon. The elemental then returns to its normal form in a space adjacent to the metal. This movement doesn't trigger reactions."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:rat-snake-swarm",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "VRhTPMegGeeCtAzx",
      "slug": "rat-snake-swarm",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:7827d182282220c51cdc6dc01c9aa23b83114dc54085b53201e9878ab72c92b8",
    "translatableHash": "sha256:dbe65e8762f0204aeedc98266002ca2417df3d388163e0ef99e46051fc3e49ab",
    "data": {
      "schemaVersion": 1,
      "name": "Rat Snake Swarm",
      "level": 2,
      "rarity": "common",
      "size": "large",
      "traits": [
        "animal",
        "swarm"
      ],
      "description": "A solitary snake might be no cause for alarm, but a hissing mass of frenzied snakes can make even seasoned adventurers shudder. Rat snakes can reach lengths of up to 10 feet, and they gather en masse to hibernate as well as to breed. Though nonvenomous, these territorial snakes will strike anything that threatens them.\nSnakes of some variety thrive in every non-arctic ecosystem, each with their own particular hunting patterns and defense mechanisms.",
      "armorClass": 16,
      "hitPoints": 25,
      "speedFeet": 20,
      "perception": {
        "modifier": 8,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 8,
        "reflex": 10,
        "will": 6
      },
      "abilities": {
        "str": 0,
        "dex": 4,
        "con": 2,
        "int": -4,
        "wis": 2,
        "cha": -3
      },
      "skills": {
        "acrobatics": 10,
        "stealth": 8
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "precision",
          "swarm-mind"
        ],
        "resistances": [
          "bludgeoning 3",
          "piercing 5",
          "slashing 5"
        ],
        "weaknesses": [
          "area-damage 3",
          "splash-damage 3"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "ffmMNX12cxRHdFZa",
          "name": "Swarm Mind",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "Ma1pSffQAdboEISp",
          "name": "Mass Wriggle",
          "kind": "reaction",
          "description": "Trigger The rat snake swarm takes damage from a melee Strike\nEffect Snakes slither up and around the creature's weapon and limbs. The target must succeed at a check (will, dc:15) save or become Frightened 1."
        },
        {
          "id": "Llbq3kaWHAvtvdiP",
          "name": "Swarming Strikes",
          "kind": "action",
          "description": "Each enemy in the swarm's space takes 1d8[piercing] damage (check (reflex, dc:17, basic) save)."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:ember-fox",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "xNn7kUg4GxyqCupT",
      "slug": "ember-fox",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:eaf655ae4185356f5dc08f1e73e637602e1187a60adf3fc81a50e46396518d3f",
    "translatableHash": "sha256:dfd434102715b30009a00379025e7240c48a1fe071ffd20acfe165b16d347ae1",
    "data": {
      "schemaVersion": 1,
      "name": "Ember Fox",
      "level": 2,
      "rarity": "common",
      "size": "small",
      "traits": [
        "elemental",
        "fire"
      ],
      "description": "Ember foxes resemble their canid namesakes, save for the flames that make their fur and the tips of their long whiskers flicker and glow. They particularly enjoy hunting elementals from the Plane of Wood.\nDestructive manifestations of the Plane of Fire, fire elementals sometimes incorporate burning materials into their being or superheated matter, such as molten rock or searing smoke. In combat, they tend to be aggressive and somewhat reckless. Their attacks can sometimes cause major destruction to the surrounding environment, and many fire elementals seem to enjoy seeing their flames spread far and wide.",
      "armorClass": 17,
      "hitPoints": 35,
      "speedFeet": 30,
      "perception": {
        "modifier": 8,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 6,
        "reflex": 10,
        "will": 8
      },
      "abilities": {
        "str": 1,
        "dex": 4,
        "con": 2,
        "int": -2,
        "wis": 2,
        "cha": 1
      },
      "skills": {
        "acrobatics": 8,
        "athletics": 5,
        "stealth": 8
      },
      "languages": [
        "pyric"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "paralyzed",
          "poison",
          "sleep",
          "fire"
        ],
        "resistances": [],
        "weaknesses": [
          "cold 5"
        ]
      },
      "attacks": [
        {
          "id": "n1OQzyUw1VL4abSp",
          "name": "Jaws",
          "bonus": 10,
          "damage": "1d4+3 piercing; 1d4 fire",
          "traits": [
            "agile",
            "finesse"
          ]
        }
      ],
      "actions": [
        {
          "id": "SEgtGajE19OtniTj",
          "name": "Cloak in Embers",
          "kind": "reaction",
          "description": "Trigger An adjacent ally is targeted by an effect that deals fire damage\nEffect The ember fox drapes itself across its ally, granting the ally fire resistance 10 against the incoming attack.\nEffect: Cloak in Embers"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:giant-badger",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "Y3wRpLSDZsYcigjX",
      "slug": "giant-badger",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:26184ce1c8ec8f913bb518f909a43993191edbf05ab55ae080373626133dac16",
    "translatableHash": "sha256:2c1b275d20e8b1225d9618a4e2c887a425e0322118683212c688f7aa1d6286e0",
    "data": {
      "schemaVersion": 1,
      "name": "Giant Badger",
      "level": 2,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "animal"
      ],
      "description": "The violent, territorial giant badger is a relentless predator. An obligate carnivore, it can consume prey that ranges from rabbits to deer, livestock, and even the occasional adventurer. A giant badger's claws are sharp and strong enough to carve tunnels from solid rock. They typically stand 4 feet tall at the shoulder and weigh 500 pounds.\nGiant badgers are fercely territorial and are known to defend their burrows with fury, even if a creature isn't necessarily threatening. These burrows tend to be larger than a giant badger typically needs, which sometimes draws the attention of other creatures seeking homes. This leads to many encounters between giant badgers and larger animals such as bears.",
      "armorClass": 18,
      "hitPoints": 30,
      "speedFeet": 25,
      "perception": {
        "modifier": 8,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 10,
        "reflex": 6,
        "will": 8
      },
      "abilities": {
        "str": 4,
        "dex": 1,
        "con": 3,
        "int": -4,
        "wis": 3,
        "cha": -1
      },
      "skills": {
        "athletics": 8,
        "stealth": 7
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "N5U9pyyTitN5UDgN",
          "name": "Jaws",
          "bonus": 11,
          "damage": "1d8+4 piercing",
          "traits": [
            "unarmed"
          ]
        },
        {
          "id": "lVmzxYHnjQBBZTN4",
          "name": "Claw",
          "bonus": 11,
          "damage": "1d6+4 slashing",
          "traits": [
            "agile",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "RUPrm8gIOS2f852a",
          "name": "Ferocity",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "iSVPM2m77YXV78mJ",
          "name": "Badger Rage",
          "kind": "action",
          "description": "The giant badger enters a state of pure rage that lasts for 1 minute, until there are no enemies it can perceive, or until it falls Unconscious, whichever comes first.\nWhile raging, the giant badger has AC 17, its jaws Strike deals 1d8+8 damage, and its claw Strike deals 1d6+6 damage. While raging, the giant badger also can't use actions that have the concentrate trait except for Seek.\nAfter it has stopped raging, a giant badger can't use Badger Rage again for 1 minute.\nEffect: Rage"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:living-boulder",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "Z6yCW77f44bEUgLH",
      "slug": "living-boulder",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:5b4b50bb73417b767298326d3d8b494989259b23656cf8f3f4d2b671feca7760",
    "translatableHash": "sha256:c952271dc57cd1a7677801a0dd5557b43f0c6995d2b309180a15346fb7f03068",
    "data": {
      "schemaVersion": 1,
      "name": "Living Boulder",
      "level": 2,
      "rarity": "common",
      "size": "small",
      "traits": [
        "earth",
        "elemental"
      ],
      "description": "Living boulders roll and glide through the Plane of Earth, gathering gemstones and metal shards until their surfaces resemble a ship's hull covered in barnacles. Barely more intelligent than many animals, living boulders fill much the same role on the Plane of Earth as the great herd animals found on worlds in the Universe.\nCertain earth elementals manifest as specific types of material, be they boulders, sand, or crystals.",
      "armorClass": 17,
      "hitPoints": 35,
      "speedFeet": 20,
      "perception": {
        "modifier": 6,
        "senses": [
          "darkvision",
          "tremorsense-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 10,
        "reflex": 5,
        "will": 8
      },
      "abilities": {
        "str": 4,
        "dex": -1,
        "con": 4,
        "int": -4,
        "wis": 2,
        "cha": -1
      },
      "skills": {
        "athletics": 8,
        "stealth": 5
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "bleed",
          "paralyzed",
          "poison",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "JpOD23bL3ODE2cIV",
          "name": "Jaws",
          "bonus": 10,
          "damage": "1d8+6 piercing",
          "traits": [
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "7x403xhLdUJSKqun",
          "name": "Earth Glide",
          "kind": "passive",
          "description": "A living boulder can Burrow through earthen matter, including rock. When it does so, it moves at its full burrow Speed, leaving no tunnels or signs of its passing."
        },
        {
          "id": "f1l37N9qnIAiH7dD",
          "name": "Rolling Charge",
          "kind": "action",
          "description": "The living boulder Strides twice, and can then make a Strike with its jaws. This jaws Strike gains Knockdown."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:moose",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "1wVVI0Jj7MdZ3uHg",
      "slug": "moose",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:b6517b1cb2e22b1e6a90b693e1a351ea57c146f5dddd345f1b0594a40e4f4315",
    "translatableHash": "sha256:39144e02037658d26d450b4de9ef5e03f715c2e161e33edabc356ad1e2a436b5",
    "data": {
      "schemaVersion": 1,
      "name": "Moose",
      "level": 3,
      "rarity": "common",
      "size": "large",
      "traits": [
        "animal"
      ],
      "description": "Moose are a large, solitary type of deer. They're majestic, territorial, and extremely grumpy-traits that make them dangerous to unwary travelers and would-be predators alike. Males are instantly recognizable, standing 7 feet tall at the shoulder, with large heads and thick necks to support their impressive palmate antlers. They shed their antlers come winter and grow a new set each year at a rapid rate.\nFor most of the year, moose roam tundra, forest, and wilderness territories by themselves. Their hooves are wide, allowing them to more easily traverse the frequent snowfall of their native terrain, and they typically journey alone. Moose come together only during mating season, a time in which they become oddly social with one another, loud, and even more aggressive to other creatures than usual.\nA moose's diet consists of leaves, woody plant matter like twigs or bark, and buds of trees and shrubs. Moose are so large they prefer to eat the leaves of trees taller than humans instead of lowering their giant heads all the way to the ground. This can make them easy to track, though hunters will find actually killing a moose is a far greater challenge than finding it. Despite their size, moose have many natural predators, especially pack animals like wolves and large carnivores like tigers. Large humanoids like ogres and trolls dwelling in the wilderness sometimes make sport of chasing down and wrestling moose.\nDespite their large size, moose are expert swimmers in both fresh and salt water, and they readily feed on aquatic vegetation. Moose rarely swim into open seas, however, and usually stay close to land, though ocean predators have been known to hunt swimming moose. To an observer watching from the safe distance of a dry shore, the large branching antlers of a swimming moose can sometimes be mistaken for a tree bobbing along in the water.",
      "armorClass": 18,
      "hitPoints": 50,
      "speedFeet": 30,
      "perception": {
        "modifier": 9,
        "senses": [
          "low-light-vision",
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 11,
        "reflex": 10,
        "will": 5
      },
      "abilities": {
        "str": 5,
        "dex": 3,
        "con": 4,
        "int": -4,
        "wis": 0,
        "cha": 1
      },
      "skills": {
        "athletics": 12,
        "intimidation": 8
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "fysOeh3zCgDpX1IC",
          "name": "Antler",
          "bonus": 12,
          "damage": "1d10+7 piercing",
          "traits": []
        },
        {
          "id": "D1Nl8ZLF8I2wRwxv",
          "name": "Hoof",
          "bonus": 12,
          "damage": "1d8+7 bludgeoning",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "DElua88KAjGxlJiI",
          "name": "Cold Adaptation",
          "kind": "passive",
          "description": "The moose reduces the effects it suffers from cold environments by one step."
        },
        {
          "id": "4JSskrFw05x7ggm1",
          "name": "Kick Back",
          "kind": "action",
          "description": "The moose bucks and kicks back with both hind hooves, making a Strike with a -2 circumstance penalty to the attack roll. If it hits, it deals an extra 1d8[bludgeoning] damage.\nThis counts as two attacks when calculating the moose's multiple attack penalty."
        },
        {
          "id": "JwRLhgIxYJX1wLQx",
          "name": "Thundering Charge",
          "kind": "action",
          "description": "The moose Strides twice and then makes an antler Strike. A Medium or smaller creature damaged by this attack must succeed at a check (fortitude, dc:18) save or be Stunned 1."
        },
        {
          "id": "Vw9udtwUZC4fiY9x",
          "name": "Trample",
          "kind": "action",
          "description": "Medium or smaller, hoof, check (reflex, dc:20, basic)"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:grioth-cultist",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "2ooIWWoCK1NCJKwT",
      "slug": "grioth-cultist",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:285d1e13405afddb78f67fc6aec0d2c0692c5c602cb2e781590f9e68ce0783bd",
    "translatableHash": "sha256:261711c40e4cb51ac04cc6039f1f04363f1c8d404e0e6c3fe340edf53e1874f5",
    "data": {
      "schemaVersion": 1,
      "name": "Grioth Cultist",
      "level": 3,
      "rarity": "rare",
      "size": "medium",
      "traits": [
        "grioth",
        "humanoid"
      ],
      "description": "Grioth cultists represent the lowest tier of their remorseless cult-worshippers of the Elder Mythos tasked with leading scouting missions into new worlds. Though ranked above scouts in the chain of command, they occupy a lowly place in the overall religious hierarchy. Though whispered rumors describe the legendary rituals needed to wrench worlds from their suns, these cultists don't learn this potent magic. Such secrets are left to grioth high priests, who are always the last to arrive in a colonized world.\nMost grioths worship the Outer God Nyarlathotep in one of his many incarnations, although some worship other entities of the Elder Mythos such as Azathoth, Nhimbaloth, or Yog-Sothoth. In the highly rare cases where a grioth is cut off from their society and given the opportunity to explore other religions, they still lean into faiths associated with the stars or the night, such as Desna or Zon-Kuthon. However, these grioths are loathed by others of their own kind, who view them as dangerous heretics.\nPlanets that drift out of orbit from their stars grow cold and lifeless as they float through the Dark Tapestry. Such dead worlds are coveted by the horrific creatures known as grioths, who endure the awful cold on these wandering worlds and convert them into planetary temples devoted to the dark gods of the Elder Mythos. From these bastions of frozen darkness, grioths seek out warm, living worlds to tear away from their respective suns through forbidden rituals, a process that often takes numerous generations.\nA single cultist typically leads a grioth scouting party, and the group seeks out a disused or forgotten location on the fringe of rural settlements as their initial invasion point. Over several generations, a grioth settlement grows powerful and conquers the surrounding cultures, and eventually, powerful grioths descend from the stars to begin the next stage of planetary conquest.\nGrioths speak a language composed of trills and clicks. While capable of speaking other languages, they do so in dry, raspy voices. As grioths have wings, wriggling tails, and four-eyed, bat-like visages, many cultures mistakenly associate them with the evil Outer Planes, but they very much belong to this reality.",
      "armorClass": 18,
      "hitPoints": 40,
      "speedFeet": 25,
      "perception": {
        "modifier": 10,
        "senses": [
          "greater-darkvision",
          "echolocation-20"
        ]
      },
      "saves": {
        "fortitude": 7,
        "reflex": 10,
        "will": 10
      },
      "abilities": {
        "str": 0,
        "dex": 3,
        "con": 2,
        "int": 2,
        "wis": 3,
        "cha": 0
      },
      "skills": {
        "acrobatics": 8,
        "occultism": 9,
        "religion": 10,
        "stealth": 10
      },
      "languages": [
        "aklo",
        "grioth"
      ],
      "defenses": {
        "immunities": [
          "cold"
        ],
        "resistances": [],
        "weaknesses": [
          "fire 5"
        ]
      },
      "attacks": [
        {
          "id": "zjRf8vLHR2qRhuCx",
          "name": "Kukri",
          "bonus": 10,
          "damage": "1d6 + 2 slashing",
          "traits": [
            "agile",
            "finesse",
            "trip"
          ]
        },
        {
          "id": "bMrmRT314fkcPeuk",
          "name": "Jaws",
          "bonus": 10,
          "damage": "1d8 + 2 piercing",
          "traits": [
            "agile",
            "finesse",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "Gxd48LW0au3UyXRn",
          "name": "Greater Darkvision",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "nK4DVmAsCN5ZhwKe",
          "name": "Telepathy 30 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "To0rnGkFKHIi4i3T",
          "name": "Echolocation (Precise) 20 feet",
          "kind": "passive",
          "description": "A grioth can use its hearing as a precise sense at the listed range."
        },
        {
          "id": "2OyUOHJ2HoOkk9ki",
          "name": "Light Blindness",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "sCnH4uFy8fBv6bnP",
          "name": "No Breath",
          "kind": "passive",
          "description": "A grioth doesn't breathe except to speak and is immune to effects that require breathing (such as an inhaled poison)."
        },
        {
          "id": "dd90VYwacTBPrupI",
          "name": "Grioth Venom",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:20)\nMaximum Duration 6 rounds\nStage 1 Frightened 1 (1 round)\nStage 2 Frightened 2 (1 round)\nStage 3 Frightened 3 (1 round)"
        },
        {
          "id": "jspQIwxqoVmeF37U",
          "name": "Invoke Haunter of the Dark",
          "kind": "action",
          "description": "Frequency once per day\nEffect The grioth cultist waves a hand in a complex pattern to invoke dark powers, dealing 3d8[mental|options:area-damage] damage. Each non-grioth creature within @Template[emanation|distance:20]{20 feet} must attempt a check (will, dc:20, options:area-effect,damaging-effect,inflicts:stupefied) save.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage\nFailure The creature takes full damage and becomes Stupefied 1 for 1 round\nCritical Failure The creature takes double damage and becomes stupefied 1 for 1 minute."
        },
        {
          "id": "vGTPPE8IbwvNQkbd",
          "name": "Shock Mind",
          "kind": "action",
          "description": "The grioth cultist makes a Strike with a voidglass weapon.\nIf the Strike hits, it deals an additional 2d6[mental] damage, and the target must succeed at a check (will, dc:20, traits:incapacitation) save (this has the incapacitation trait) or become Confused for 1 round."
        }
      ],
      "spellcasting": [
        {
          "id": "xglqaHZLA1NfPGQN",
          "name": "Divine Prepared Spells",
          "tradition": "divine",
          "category": "prepared",
          "attackModifier": 12,
          "saveDc": 20,
          "spells": [
            {
              "id": "5eyIsYZ09fI5g6xs",
              "name": "Divine Lance",
              "rank": 1
            },
            {
              "id": "XEpjukZTAJk5SE8a",
              "name": "Fear",
              "rank": 1
            },
            {
              "id": "rPMv18NPR00Hvha2",
              "name": "Forbidding Ward",
              "rank": 1
            },
            {
              "id": "QmW2RDG1dsxLfUzy",
              "name": "Harm",
              "rank": 1
            },
            {
              "id": "tS52ZepboYuCBhpN",
              "name": "Heal",
              "rank": 1
            },
            {
              "id": "AM0K0PqVQoyyUBTl",
              "name": "Message",
              "rank": 1
            },
            {
              "id": "E1e01lYCX2jGgGTw",
              "name": "Prestidigitation",
              "rank": 1
            },
            {
              "id": "6xjc0mwcCpKlrHJC",
              "name": "Stabilize",
              "rank": 1
            },
            {
              "id": "kszpKqEL0YB43jsg",
              "name": "Ventriloquism",
              "rank": 1
            },
            {
              "id": "be0895bGrdVF06Ln",
              "name": "Dispel Magic",
              "rank": 2
            },
            {
              "id": "HRDtO2rYEbNJwjNO",
              "name": "Noise Blast",
              "rank": 2
            }
          ]
        },
        {
          "id": "g078MCPSCGCFoMNJ",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 11,
          "saveDc": 19,
          "spells": [
            {
              "id": "iPjiPDEbYa0EWGyp",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "59YPq0VQO58ItSYj",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "fE1Ev8Vacq15qBZn",
              "name": "Telekinetic Hand",
              "rank": 1
            },
            {
              "id": "c3I8PMP0G4SU6kso",
              "name": "Telekinetic Projectile",
              "rank": 1
            },
            {
              "id": "n0REVRqaZ8Lm2TKT",
              "name": "Phantom Pain",
              "rank": 2
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:platecarpus",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "BiIAxNkNqSlDf8Mp",
      "slug": "platecarpus",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:b2a76139edc1dd2a2b923d5af5d6ad23ad884deed67b71b826b5a288779e7776",
    "translatableHash": "sha256:bf0c8f49c99f3adfddf1568c7bfd67b1f8f6410eea0f5d809e26f55aca7064ec",
    "data": {
      "schemaVersion": 1,
      "name": "Platecarpus",
      "level": 3,
      "rarity": "common",
      "size": "large",
      "traits": [
        "animal"
      ],
      "description": "The mid-sized platecarpuses are the most common type of mosasaur. They're typically 15 feet long, but larger specimens can grow up to 20 feet. The larger varieties sometimes eat Medium humanoids, but most stick to smaller fare.\nThe massive swimming reptiles called mosasaurs thrash their powerful tails to propel them after prey. Four articulated, webbed paddles let them precisely steer their paths, and their hinged jaws-much like a snake's-allow mosasaurs to swallow larger creatures than their size would indicate. A small set of secondary pterygoid jaws in their gullets pull in their meals for more efficient digestion. As air breathers, mosasaurs must stay near the surface of the water, competing for food with whales. This proximity to the surface means they often capsize small boats, feasting on the crew members who fall out.",
      "armorClass": 19,
      "hitPoints": 46,
      "speedFeet": 5,
      "perception": {
        "modifier": 9,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 10,
        "reflex": 11,
        "will": 7
      },
      "abilities": {
        "str": 5,
        "dex": 4,
        "con": 3,
        "int": -4,
        "wis": 2,
        "cha": -2
      },
      "skills": {
        "athletics": 9,
        "stealth": 11
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "Tb6i1oczFczW6Kyf",
          "name": "Jaws",
          "bonus": 12,
          "damage": "1d12+5 piercing",
          "traits": [
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "6CxEvaX1CFDQ7rOR",
          "name": "Deep Breath",
          "kind": "passive",
          "description": "A platecarpus can hold its breath for 2 hours."
        },
        {
          "id": "2JP7ZbSsTYsLb6ux",
          "name": "Aquatic Drag",
          "kind": "action",
          "description": "Requirements The platecarpus has a creature Grabbed\nEffect The platecarpus Swims up to half its Speed, carrying the grabbed creature with it."
        },
        {
          "id": "4bIGF4lDjFiCWkiL",
          "name": "Strafing Chomp",
          "kind": "action",
          "description": "The platecarpus Swims up to its Speed, making one jaws Strike at any point along the way. The Strike deals half damage."
        },
        {
          "id": "MN3PR10lW2gEDJPP",
          "name": "Swallow Whole",
          "kind": "action",
          "description": "Medium, (1d6+2)[bludgeoning], Rupture 10"
        },
        {
          "id": "3g280o5bGDzy7DZ9",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:dvorovoi",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "bm8t04PxMs5TYFS0",
      "slug": "dvorovoi",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:1ebbe4369a736746d1cb8ee27a66b642b80d673c04234a5e92b66ddfda334537",
    "translatableHash": "sha256:71b4bb0b244ec57a865ca1a978399b9058abcab455b24fbe03f6cca4cda93671",
    "data": {
      "schemaVersion": 1,
      "name": "Dvorovoi",
      "level": 3,
      "rarity": "common",
      "size": "small",
      "traits": [
        "fey"
      ],
      "description": "Traditionally, the dvorovoi is seen as the domovoi's younger sibling and has charge of a peasant's yard and all the animals and tools within. Animals favored by the dvorovoi become healthy, strong, and obedient, while less-loved livestock are exhausted and miserable. Peasants with a resident dvorovoi make sure to formally introduce new livestock to the house spirit and placate the spirit by leaving meals in the shed. Dvorovoi loathe white-furred animals and will chase away any all-white cows or horses, though they have no similar grudge against chickens.\nHouse spirits are shy, often helpful, sometimes wrathful fey who dwell alongside peasants and farmers. They reside in the house, the yard, the granary, the bathhouse—wherever people build and live. Due to this proximity, house spirits often take on the mannerisms or appearance of nearby mortals. Their reclusive nature and tendency to go unseen earned them the moniker of \"spirits,\" though in truth they're fully embodied fey.\nHouse spirits take an almost parental interest in \"their\" mortals. Given proper respect, these fey work tirelessly for their charges—they chop wood, care for livestock, mend clothes, sweep the floor, and tend to the stove. If offended, though, the house spirit becomes a menace, frightening animals or children and ruining belongings.",
      "armorClass": 18,
      "hitPoints": 44,
      "speedFeet": 30,
      "perception": {
        "modifier": 12,
        "senses": []
      },
      "saves": {
        "fortitude": 10,
        "reflex": 9,
        "will": 7
      },
      "abilities": {
        "str": 3,
        "dex": 2,
        "con": 1,
        "int": -1,
        "wis": 0,
        "cha": 1
      },
      "skills": {
        "crafting": 8,
        "nature": 9,
        "stealth": 9
      },
      "languages": [
        "common",
        "fey"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "cold-iron 5"
        ]
      },
      "attacks": [
        {
          "id": "NzwD70y8FFNErEeq",
          "name": "Pitchfork",
          "bonus": 12,
          "damage": "1d8+6 piercing",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "REYBUojV1U3rDo7R",
          "name": "Tremorsense (Imprecise) within their entire bound yard",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "FccscOTujIsmRSKB",
          "name": "Master of the Yard",
          "kind": "passive",
          "description": "The dvorovoi helps or causes trouble in the yard, milking or scaring cows, protecting or scattering tools, and so forth. A yard so blessed never encounters random accidents such as fires, and any checks to Craft, Earn Income, Repair, or Subsist in the yard receive a +2 circumstance bonus. If the dvorovoi is unfriendly, such checks take a –2 circumstance penalty instead, as the dvorovoi hides things, makes noise when people try to sleep, tangles weaving, and otherwise makes life a misery. A domovoi must spend a week in a place before these benefits occur."
        },
        {
          "id": "qDnzFnYBD0inV73p",
          "name": "At-Will Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "3SXsxYxAvVfwRa9d",
          "name": "Shy",
          "kind": "passive",
          "description": "A dvorovoi is naturally Invisible while within sight of their bound home. The dvorovoi can become visible, or even selectively visible-allowing some people to see them."
        }
      ],
      "spellcasting": [
        {
          "id": "VbQ3aBtjsFtweu9k",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 0,
          "saveDc": 0,
          "spells": [
            {
              "id": "EPeJ6lJRwP8w7unf",
              "name": "Charm (Animals Only)",
              "rank": 1
            },
            {
              "id": "BpiqDGeXqsiytgcT",
              "name": "Command (Animals Only)",
              "rank": 1
            },
            {
              "id": "Lr2uwo5nALSNu3jA",
              "name": "Mending",
              "rank": 1
            },
            {
              "id": "iedHyEiIyX1rX8iM",
              "name": "Prestidigitation",
              "rank": 1
            },
            {
              "id": "hrai5XIyXodPGInG",
              "name": "Telekinetic Hand",
              "rank": 1
            },
            {
              "id": "Bc9hy7mEUadcDc5T",
              "name": "Entangling Flora",
              "rank": 2
            },
            {
              "id": "QuqSBjFVKGHtTL6E",
              "name": "Speak with Animals (At Will)",
              "rank": 2
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:lacridaemon",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "dGKDg0Wp5jSrZx8r",
      "slug": "lacridaemon",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:13af7c89839665930d34a39171ebeae1da435ad1a8c1662490cd42bc2462c1a3",
    "translatableHash": "sha256:441f8ddac17c843346db1417270ce6f6edbde1783b1b4077352cffcd9b7a1b1b",
    "data": {
      "schemaVersion": 1,
      "name": "Lacridaemon",
      "level": 3,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "daemon",
        "fiend",
        "unholy"
      ],
      "description": "Souls who die from neglect or exposure due to becoming lost, trapped in small spaces, or otherwise being far from help can transform into lacridaemons. These weaker daemons are full of despair and typically lash out against anyone they see, believing them to have intentionally abandoned the lacridaemon to their fate. Many lacridaemons are born from the souls of wicked mortals who push others away and thus suffer lonely deaths. Exiled, corrupt nobles and violent criminals left to rot in solitary prisons are common among their ranks.\nLacridaemons tend to resemble humanoids with smooth, gray skin, a strange tail, and vicious claws. They each have patches of frost across their flesh, representing their ultimately cold and lonely ends. These patches appear on every lacridaemon even if their deaths weren't due to exposure to cold, as is the case for souls who perished alone from thirst in the desert.\nEven in their fiendish state, lacridaemons can't help but consider themselves alone. It's not uncommon to find groups of lacridaemons where each daemon acts independently, as if the others weren't there. They tend to sit alone in dark corners reminiscent of the places of they died, sobbing loudly, but once they become aware of the presence of non-fiends, they are quick to attack, believing these creatures to be the same ones who abandoned them in life. A lacridaemon's supernatural abilities allow the fiend to subject others to a fate similar to the their own death, making it difficult to escape danger and find help.",
      "armorClass": 18,
      "hitPoints": 45,
      "speedFeet": 30,
      "perception": {
        "modifier": 9,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 9,
        "reflex": 12,
        "will": 6
      },
      "abilities": {
        "str": 1,
        "dex": 4,
        "con": 2,
        "int": 0,
        "wis": 1,
        "cha": 2
      },
      "skills": {
        "acrobatics": 11,
        "deception": 9,
        "stealth": 9,
        "survival": 8
      },
      "languages": [
        "common",
        "daemonic"
      ],
      "defenses": {
        "immunities": [
          "cold",
          "death-effects"
        ],
        "resistances": [],
        "weaknesses": [
          "holy 5"
        ]
      },
      "attacks": [
        {
          "id": "30UftqXbjnQTrGiV",
          "name": "Jaws",
          "bonus": 12,
          "damage": "1d8+4 piercing; 1d6 cold",
          "traits": [
            "magical",
            "unholy"
          ]
        },
        {
          "id": "q5lkSrhgwPuHtox0",
          "name": "Claw",
          "bonus": 10,
          "damage": "1d6+4 slashing; 1d6 cold",
          "traits": [
            "agile",
            "magical",
            "unholy"
          ]
        }
      ],
      "actions": [
        {
          "id": "pqICzeUGbB7EW0HY",
          "name": "Telepathy 100 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "3R3gyr1g5LXQOY2n",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "qEksYPQ2gGBBTZL8",
          "name": "Steal Bearings",
          "kind": "reaction",
          "description": "Trigger A creature within 30 feet Strides\nEffect The lacridaemon attempts to redirect the triggering creature so it eventually becomes as lost as the lacridaemon. The triggering creature attempts a check (will, dc:17) save. Regardless of the result, the creature becomes temporarily immune to all attempts to Steal Bearings for 1 minute.\nSuccess The creature is unaffected.\nFailure The creature treats all squares as difficult terrain for its Stride.\nCritical Failure As failure, except that the lacridaemon determines where the target moves during the Stride, though it can't move it into hazardous terrain or a place it can't stand."
        },
        {
          "id": "1PddQwhLpsTxVsMR",
          "name": "Weeping Aura",
          "kind": "passive",
          "description": "60 feet. The sounds of crying constantly surround a lacridaemon. A creature that first enters the area must attempt a check (will, dc:17) save as the sounds cause major disorientation. On a failure, the creature takes a –2 status penalty to Survival checks to Sense Direction (–4 on a critical failure) for 1 day. After attempting the save, the creature is temporarily immune to the lacridaemon's weeping aura for 1 day. The penalties from multiple weeping auras can increase up to a cumulative total of –10.\nEffect: Weeping Aura"
        },
        {
          "id": "z5pmjocp8G1YLjMz",
          "name": "Lacridaemon Venom",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:20)\nMaximum Duration 6 rounds\nStage 1 1d4[poison] damage (1 round)\nStage 2 1d6[poison] damage and Stupefied 1 (1 round)\nStage 3 1d8[poison] damage, Confused, and stupefied 1 (1 round)"
        },
        {
          "id": "ZI45E6XW5WaXZNr4",
          "name": "Venomous Spray",
          "kind": "action",
          "description": "The lacridaemon's begins to weep, spraying its venom-filled tears at all creatures within @Template[emanation|distance:30]{30 feet}. The creatures are immediately exposed to lacridaemon venom. Other lacridaemons are immune to this venom."
        }
      ],
      "spellcasting": [
        {
          "id": "NJUuuXyn3eCa3Ugh",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 0,
          "saveDc": 17,
          "spells": [
            {
              "id": "YuPDoLBxyKx8SGhm",
              "name": "Fear",
              "rank": 1
            },
            {
              "id": "tXniVXfKSLBpdOko",
              "name": "Vanishing Tracks",
              "rank": 1
            },
            {
              "id": "UUb6SP1JVeYg9Kwi",
              "name": "Invisibility",
              "rank": 2
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:vishkanya-infiltrator",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "GMhMNMf5HpTojgLv",
      "slug": "vishkanya-infiltrator",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:8bc0eb654aaa632b4a2d4a5e81694578c94956f840e1f60c34769e4ef789f515",
    "translatableHash": "sha256:321713ba622c878e2cd14f541107127a6890c8b5b4c4ab3a9cde66faa4eaaafa",
    "data": {
      "schemaVersion": 1,
      "name": "Vishkanya Infiltrator",
      "level": 3,
      "rarity": "rare",
      "size": "medium",
      "traits": [
        "humanoid",
        "vishkanya"
      ],
      "description": "These vishkanyas can meld with a crowd and slip into and out of places otherwise off-limits.\nFrom a distance, vishkanyas share more than a passing resemblance to humans. However, a closer inspection reveals ophidian eyes with gold or white coloring, a forked tongue, and tiny, smooth scales set in serpentine patterns atop their skin. Even so, most onlookers assume these features to be an indicator of nephilim heritage or draconic magic, never suspecting how truly unusual the subject of their speculation is.\nAmong outsiders, little is known of the vishkanya ancestry other than that a vishkanya carries a potent venom within their blood and saliva, knowledge that has led to widespread fear and distrust. To avoid persecution, vishkanyas assimilate quietly into their chosen societies and maintain a culture of heavy subtlety. This clandestine life can draw vishkanyas to work that allows them to put their skills to good use, and they often take the roles of spy, mercenary, bodyguard, and even assassin. Some of the best-known guilds in the world employ vishkanyas, including the implacable Red Mantis Assassins and the famed Grand Sarret Conservatory for courtiers in the Impossible Kingdom of Jalmeray. In most cases, these employers know their employee's true identity, but not always.\nDue to the measures they must take to ensure their survival, vishkanyas don't congregate openly. Instead, they meet in secret, creating support networks and advisory bodies. Leading these gatherings are the most respected of vishkanya women, who work diligently to keep their ancestry and traditions alive. These underground communities are slow to spread, and leaving them means abandoning what little social and cultural support a vishkanya has. As a result, very few vishkanyas have emigrated from their Vudran homelands into the Inner Sea region or other lands.",
      "armorClass": 19,
      "hitPoints": 45,
      "speedFeet": 25,
      "perception": {
        "modifier": 10,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 6,
        "reflex": 11,
        "will": 8
      },
      "abilities": {
        "str": 2,
        "dex": 4,
        "con": 1,
        "int": 0,
        "wis": 1,
        "cha": 2
      },
      "skills": {
        "acrobatics": 9,
        "athletics": 7,
        "deception": 11,
        "diplomacy": 9,
        "society": 7,
        "stealth": 11,
        "thievery": 9
      },
      "languages": [
        "common",
        "vishkanyan"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "2dRANSKVmbViXMEG",
          "name": "Kukri",
          "bonus": 11,
          "damage": "1d6+4 slashing",
          "traits": [
            "agile",
            "finesse",
            "trip"
          ]
        },
        {
          "id": "RhlxO4YAqCQvNoAX",
          "name": "Shuriken",
          "bonus": 11,
          "damage": "1d4+4 piercing",
          "traits": [
            "agile",
            "thrown-20"
          ]
        }
      ],
      "actions": [
        {
          "id": "dhDC5YwA4sgV6EDb",
          "name": "+2 to Fortitude Saves vs. Poison",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "R3a1vqX9o7Fr2apU",
          "name": "Envenom",
          "kind": "action",
          "description": "Frequency once per day\nEffect Using either saliva or blood, the vishkanya applies vishkanyan venom to one weapon they're holding. To use their blood, they must be injured, or they can deal themself 1[slashing] damage as part of the action."
        },
        {
          "id": "RsSI7Qi7LFLS4iBB",
          "name": "Flexible",
          "kind": "passive",
          "description": "The vishkanya is adept at dealing with tight situations. They have a +1 circumstance bonus to checks to Escape."
        },
        {
          "id": "LwXrZ7Z6yQYz4oNx",
          "name": "Proficient Poisoner",
          "kind": "passive",
          "description": "The vishkanya doesn't lose the poison on a weapon due to a critically failed Strike."
        },
        {
          "id": "8kmu39SapPQil7Bc",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "The vishkanya's Strikes deal an additional 1d6 precision damage to Off-Guard creatures."
        },
        {
          "id": "fJOwTsoABQPLyOnD",
          "name": "Vishkanyan Venom",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:20)\nMaximum Duration 6 rounds\nStage 1 1d4[poison] damage (1 round)\nStage 2 1d4[poison] damage and Off-Guard (1 round)\nStage 3 1d4[poison] damage, off-guard, and a –5-foot penalty to Speed (1 round)"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:trollhound",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "gTkvu3RRiDHNONzf",
      "slug": "trollhound",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:2ad868cb9c2b050f1dcb49068f3e61f11d5f422ae7adb4444054b5ff79597875",
    "translatableHash": "sha256:9ae41d847b899c9f38437cf43d5ca2c0d1701c5ca458730fb55a113c70342474",
    "data": {
      "schemaVersion": 1,
      "name": "Trollhound",
      "level": 3,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "beast",
        "troll",
        "wood"
      ],
      "description": "Trollhounds are squat, slavering beasts akin to trolls in canine form. With a similar nigh-insatiable hunger stoked by their regenerative metabolisms, packs of wild trollhounds prowl the foothills of regions where trolls dwell to hunt for vast quantities of meat. In some regions, trolls breed trollhounds as pets, utilizing the trollhounds' keen sense of smell to aid in the hunt.\nCovered in fetid, weeping sores, trollhounds are carriers of a debilitating contagion known as bloodfire fever. Creatures that contract the disease through the bite of a trollhound experience deep internal pain, as if their blood were on fire. Additional symptoms include loss of muscle coordination, pus-filled blisters, and overall lethargy and fatigue. Other than living with the pain from skin irritation, both trolls and trollhounds are immune to the major effects of the disease.\nTrollhounds are fearless on the hunt and in combat, relying on their ability to regenerate to carry them through. Not even the threat of fire is enough to repel them, as the beasts don't recognize the danger it represents. Nevertheless, fire is one of the most effective tools in combating trollhounds; canny hunters know to burn every last remnant of a supposedly slain trollhound, for their regenerative powers are potent indeed.\nWhile trolls have had great success in domesticating, training, and even befriending trollhounds, the same can't be said for other would-be masters. Whether impeded by constant exposure to trollhounds' diseased slobber, their ravenous hunger that never seems to be fully sated, or simply their foul personality and quick-to-bite temperament, most attempts to use trollhounds in place of more reliable guardians end in pain, misery, and a pack of feral trollhounds escaping into the hinterlands.\nLeft to their own devices, trollhounds will breed relatively quickly. It can take less than a year for a small pack to multiply into such a size that they pose a significant threat to the countryside. Best to leave the trollhounds to the trolls, as they say!",
      "armorClass": 17,
      "hitPoints": 65,
      "speedFeet": 35,
      "perception": {
        "modifier": 6,
        "senses": [
          "darkvision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 14,
        "reflex": 8,
        "will": 6
      },
      "abilities": {
        "str": 4,
        "dex": 1,
        "con": 5,
        "int": -3,
        "wis": 1,
        "cha": -2
      },
      "skills": {
        "acrobatics": 6,
        "athletics": 9,
        "stealth": 8,
        "survival": 6
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "electricity 8",
          "fire 8"
        ]
      },
      "attacks": [
        {
          "id": "gQIYZVpf1qNwa6Ow",
          "name": "Jaws",
          "bonus": 11,
          "damage": "1d12+4 piercing",
          "traits": [
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "x4OEHVayXoDctjTN",
          "name": "Regeneration 15 (Deactivated by Electricity or Fire)",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "bog3AI0yepCWDb7l",
          "name": "Flailing Bite",
          "kind": "reaction",
          "description": "Trigger The trollhound takes electricity or fire damage\nEffect The trollhound makes a jaws Strike against a random creature within reach. If the trollhound has persistent fire damage, they attempt a check (flat, dc:15) to remove it."
        },
        {
          "id": "rNvBPBkYMgq0NgB1",
          "name": "Bloodfire Fever",
          "kind": "passive",
          "description": "Trollhounds and trolls are immune to bloodfire fever\nSaving Throw check (fortitude, dc:18)\nStage 1 carrier with no ill effect (1 day)\nStage 2 Enfeebled 1 (1 day)\nStage 3 enfeebled 1 and Clumsy 1 (1 day)\nStage 4 Enfeebled 2 and Clumsy 2 (1 day)\nStage 5 enfeebled 2, clumsy 2, and Fatigued (1 day)"
        },
        {
          "id": "ZmtESxVSvUQ9co65",
          "name": "Pack Attack",
          "kind": "passive",
          "description": "The trollhound deals an extra 1d6 damage to any creature within reach of at least two of the trollhound's allies."
        },
        {
          "id": "LagTlM8Vm0W8iV4U",
          "name": "Knockdown",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:vermlek",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "i2fRfiIWOJeZedcx",
      "slug": "vermlek",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:f1c84d016fce375de24ca829971d8f8bcf6cedf423e333087f59e78db56878d4",
    "translatableHash": "sha256:760433c92048e538fe46aef280c92bfc56f6f815d3dd7c1591ba536b46932532",
    "data": {
      "schemaVersion": 1,
      "name": "Vermlek",
      "level": 3,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "demon",
        "fiend",
        "unholy"
      ],
      "description": "Vermleks, also called worm demons, manifest from the souls of mortals who desecrated the dead, such as grave robbers or necromancers. These fiends take their violations to a new extreme, using their demonic powers to horrifically core their living victims and don the flesh husk that remains.\nIn their natural form, a vermlek resembles an oversized pinkish worm with four long tails that end in writhing fibrils. Their mouth splits into four segments like a profane tulip lined with rows of dozens of pointed teeth. However, these fiends are often encountered only after they have crawled into the body of a dead humanoid and made the hollowed-out flesh their temporary host. Vermleks use their powers of deception and disguise to infiltrate mortal settlements and influence unwitting acquaintances of the bodies they wear. Particularly intelligent or conniving vermleks might even reach stations of real power within the ranks of an army or government, at which point exposure of their true form can wreak havoc among the populace they have so thoroughly duped.",
      "armorClass": 16,
      "hitPoints": 55,
      "speedFeet": 25,
      "perception": {
        "modifier": 8,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 11,
        "reflex": 8,
        "will": 6
      },
      "abilities": {
        "str": 3,
        "dex": 1,
        "con": 4,
        "int": 0,
        "wis": 1,
        "cha": 2
      },
      "skills": {
        "acrobatics": 8,
        "athletics": 10,
        "deception": 7,
        "stealth": 8
      },
      "languages": [
        "chthonian",
        "draconic",
        "empyrean"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "cold-iron 5",
          "holy 5",
          "sonic 5"
        ]
      },
      "attacks": [
        {
          "id": "PEcZICFu5RxsmSYE",
          "name": "Bite",
          "bonus": 12,
          "damage": "2d8+3 bludgeoning",
          "traits": [
            "unarmed",
            "unholy"
          ]
        },
        {
          "id": "1wGbVo4MzjNncjF5",
          "name": "Fist",
          "bonus": 12,
          "damage": "2d6+3 bludgeoning",
          "traits": [
            "agile",
            "unarmed",
            "unholy"
          ]
        },
        {
          "id": "dXmsFpTDdvr9jUSm",
          "name": "Longsword",
          "bonus": 12,
          "damage": "1d8+4 slashing",
          "traits": [
            "unholy",
            "versatile-p"
          ]
        }
      ],
      "actions": [
        {
          "id": "3Xt2lscGYnZUOyGa",
          "name": "Telepathy 100 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "3sbTvEsJq4zs4trO",
          "name": "Recoil from Wasted Opportunities",
          "kind": "passive",
          "description": "Vermleks can't stand the sight of a good meal presented and then swiftly taken away. Whenever a Dying creature within sight of the vermlek has its dying condition removed, the vermlek takes 1d6[mental] damage."
        },
        {
          "id": "LtfuwNFRHolweO6c",
          "name": "Abandon Body",
          "kind": "action",
          "description": "Requirements The vermlek is Inhabiting a Body\nEffect The vermlek crawls out of the body they are inhabiting, devouring much of the body's remaining flesh and regaining 10[healing] Hit Points in the process. The corpse they leave behind is little more than a husk."
        },
        {
          "id": "IPog4z95kZnznJaz",
          "name": "Inhabit Body",
          "kind": "action",
          "description": "Requirements The vermlek isn't already Inhabiting a Body\nEffect The vermlek crawls into the body of an adjacent Medium humanoid that has been dead for no more than 1 week, consuming the bulk of the victim's skeleton and internal organs as they do so and cramming themself into the cavity. As long as they Inhabit a Body, the vermlek loses their bite attack, can wield weapons like a humanoid, gains a +3 circumstance bonus to AC, and gains a +3 circumstance bonus to Deception checks to [[/act impersonate options=impersonate-inhabited-creature]] the creature they are inhabiting."
        },
        {
          "id": "J1IIdiHEce226caX",
          "name": "Unsettling Movement",
          "kind": "passive",
          "description": "Whenever the vermlek Abandons a Body or Inhabits a Body, all creatures within @Template[emanation|distance:30]{30 feet} who can see the vermlek must succeed at a check (will, dc:19, options:inflicts:frightened,inflicts:sickened) save or become Frightened 1. On a critical failure, the creature is frightened 1 and Sickened 1. Regardless of the result, creatures are immune to the same vermlek's unsettling movement for 24 hours."
        }
      ],
      "spellcasting": [
        {
          "id": "YhZFh21QU7MdqzUw",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 0,
          "saveDc": 19,
          "spells": [
            {
              "id": "bqXtic4xo05Qf1Hm",
              "name": "Fear",
              "rank": 3
            },
            {
              "id": "Z0J3zvSxPpcNm9eM",
              "name": "Harm",
              "rank": 3
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:dragonblood-occultist",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "ictE3YLeKKJv3JF0",
      "slug": "dragonblood-occultist",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:94bc7d91f9d12363fdf96e10d06632f28cf269a107d4f4e591b38d4157d3470b",
    "translatableHash": "sha256:a229b5944505ca663b0a367ef61ca1f44763026b3853dcb3ffd5668993eece33",
    "data": {
      "schemaVersion": 1,
      "name": "Dragonblood Occultist",
      "level": 3,
      "rarity": "rare",
      "size": "medium",
      "traits": [
        "dragonblood",
        "human",
        "humanoid"
      ],
      "description": "The dragonblood occultist draws power from their omen dragon benefactor. This occult connection allows the occultist to perceive glimpses of the near future.\nWhen a dragon holds influence in a community, either by exerting their might or blending in and living among them, a child might be born that exhibits physical or mental aspects of that dragon. These offspring are known as dragonbloods and often have draconic features belying their heritage. Dragonbloods can be found among all ancestries, though many dragonbloods are either humans or have some kind of extant dragon connection, such as kobolds who have a close association with a dragon.\nA dragonblood typically possesses some physical feature that gives away their draconic nature. These can be subtle features such as elongated fingernails that resemble claws or unique eye coloration. For many dragonbloods, these features are more overt, taking the form of horns, draconic tails, wings, or patches of scales. In some cases, a dragonblood resembles a bipedal dragon outright, often leading to confusing them with other reptilian ancestries such as kobolds and lizardfolk. For dragonbloods who have no obvious features, there are still the occasional hints of their draconic influence, typically manifesting in times of overwhelming emotions, if only for a moment.\nDragonbloods can trace their connection to a specific type of dragon, commonly referred to as a draconic exemplar. The physical features and abilities of a dragonblood always match that of their draconic exemplar. A dragonblood whose exemplar is a cinder dragon, for example, will manifest crimson scales or the ability to breathe fire. A dragon's opinion of a related dragonblood can vary. Most dragons tend to look at dragonbloods with indifference. Benevolent and social dragons often find a kinship in learning of a related dragonblood. Some dragons see dragonbloods as beneath them, however. As a dragonblood isn't a \"true\" dragon, the draconic exemplar cares little for them.",
      "armorClass": 18,
      "hitPoints": 35,
      "speedFeet": 25,
      "perception": {
        "modifier": 10,
        "senses": []
      },
      "saves": {
        "fortitude": 6,
        "reflex": 9,
        "will": 12
      },
      "abilities": {
        "str": 1,
        "dex": 3,
        "con": 0,
        "int": 4,
        "wis": 1,
        "cha": 1
      },
      "skills": {
        "acrobatics": 8,
        "arcana": 9,
        "deception": 8,
        "occultism": 10,
        "religion": 6,
        "thievery": 10
      },
      "languages": [
        "aklo",
        "common",
        "draconic",
        "elven",
        "sakvroth"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "moWFtabgbKREhdkw",
          "name": "Shortsword",
          "bonus": 10,
          "damage": "1d6+4 piercing",
          "traits": [
            "agile",
            "finesse",
            "versatile-s"
          ]
        },
        {
          "id": "B76X10kR6xTEGG9Q",
          "name": "Fist",
          "bonus": 10,
          "damage": "1d4+4 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "nonlethal",
            "unarmed"
          ]
        },
        {
          "id": "uM8oM9Oio31ZmqnN",
          "name": "Crossbow",
          "bonus": 10,
          "damage": "1d8+3 piercing",
          "traits": [
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "8ad3JMlUubhc3tSk",
          "name": "Draconic Willpower",
          "kind": "passive",
          "description": "When the occultist rolls a success on a saving throw against a fear effect, they get a critical success instead."
        },
        {
          "id": "BcRbR4MUbpKwZQl2",
          "name": "Light of Fate",
          "kind": "action",
          "description": "Requirements The dragonblood occultist is holding a lit lantern\nEffect The dragonblood occultist shines the lantern's light on one creature within 20 feet, revealing wounds yet to occur. The dragonblood occultist then chooses bludgeoning, mental, piercing, or slashing, and the target gains weakness 4 to that damage until the end of the dragonblood occultist's next turn."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:zebub",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "IE0EM4KDUbI5ZJz0",
      "slug": "zebub",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:240ce1f97f13b02f9ba4c44fdb5d8a9f8cc708a68eea088a0be4ff6598effc93",
    "translatableHash": "sha256:4a9fe436d9b1b2eaaa0636bda9acddbc97d2d87d8d9f00c304038fe3e0b0591d",
    "data": {
      "schemaVersion": 1,
      "name": "Zebub",
      "level": 3,
      "rarity": "common",
      "size": "small",
      "traits": [
        "devil",
        "fiend",
        "unholy"
      ],
      "description": "Zebubs serve as Hell's messengers and spies. Their ability to share what they've seen with other creatures makes them especially useful—not only to other devils but also to mortal conjurers. Some infernal lords unleash them in enormous, horrid swarms upon unsuspecting lands to debase flesh and land alike while collecting secrets the infernal host might later put to use. Zebubs use any opportunity to manipulate weak-willed or easily tempted mortals into serving the zebubs' whims.\nWhile arrogant and deceitful, zebubs lack the cunning and confidence of most devils, and thus their schemes often focus on satisfying self-serving or self-destructive ambitions. Zebubs form from the souls of childish and craven mortals, reshaped by the archdevil Baalzebul in the frozen, filthy wastes of Hell's seventh layer, Cocytus.",
      "armorClass": 18,
      "hitPoints": 30,
      "speedFeet": 15,
      "perception": {
        "modifier": 12,
        "senses": [
          "greater-darkvision"
        ]
      },
      "saves": {
        "fortitude": 8,
        "reflex": 10,
        "will": 8
      },
      "abilities": {
        "str": 1,
        "dex": 4,
        "con": 1,
        "int": 0,
        "wis": 3,
        "cha": 1
      },
      "skills": {
        "acrobatics": 10,
        "arcana": 7,
        "deception": 8,
        "religion": 9,
        "stealth": 10
      },
      "languages": [
        "diabolic",
        "draconic",
        "empyrean"
      ],
      "defenses": {
        "immunities": [
          "fire"
        ],
        "resistances": [
          "physical 5 except silver",
          "poison 5"
        ],
        "weaknesses": [
          "holy 5"
        ]
      },
      "attacks": [
        {
          "id": "DlQoJTMEjgmsWgCa",
          "name": "Mandibles",
          "bonus": 12,
          "damage": "1d10+5 piercing",
          "traits": [
            "finesse",
            "magical",
            "unholy"
          ]
        }
      ],
      "actions": [
        {
          "id": "POLjXIhCSeQBrvcV",
          "name": "Greater Darkvision",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "YwHb4RiQKJ3qanE4",
          "name": "Telepathy 100 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "WJ9IzjB7hdrCqPVv",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "MhPq4EOlBLppwQeu",
          "name": "Cocytan Filth",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:18)\nOnset [[/gmr 1d4 #days]]{1d4 days}\nStage 1 Enfeebled 1 (1 day)\nStage 2 Enfeebled 2 (1 day)\nStage 3 Enfeebled 3 (1 day)"
        },
        {
          "id": "LNbjPm5a6CTl4lko",
          "name": "Diabolic Eye",
          "kind": "action",
          "description": "The zebub records everything they see, and though they don't remember all observations, they can pass them along to another creature.\nThe zebub replays 10 minutes of witnessed events to a touched willing creature, which receives the memories in a flash of information. By remaining in contact, the zebub can spend additional 3-action activities to replay more information.\nAfter relaying their visions to another, the zebub can't ever recall those events again."
        },
        {
          "id": "QZup3O3zcKH6TFZd",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "The zebub's Strikes deal an additional 1d6 precision damage to Off-Guard creatures."
        }
      ],
      "spellcasting": [
        {
          "id": "Z60YSknQUrMbR4mB",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 7,
          "saveDc": 17,
          "spells": [
            {
              "id": "VHrffK2iT75MwXoK",
              "name": "Message",
              "rank": 1
            },
            {
              "id": "lQzCQf7gDhv2S88W",
              "name": "Invisibility (at will, self only)",
              "rank": 2
            },
            {
              "id": "JLbHt0LM9WGhFhGj",
              "name": "Summon Animal (swarm creatures only)",
              "rank": 2
            },
            {
              "id": "BkBEhqLM3mXNI13M",
              "name": "Translocate (At Will)",
              "rank": 4
            },
            {
              "id": "pp1yszjrLBogZB6a",
              "name": "Translocate",
              "rank": 5
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:hound-topiary",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "if9KbKLH7DtjVugJ",
      "slug": "hound-topiary",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:e8adf4eb71c099ee096addc393fcf48a5536c443108390a3a184ca5aa96f7f8f",
    "translatableHash": "sha256:ec0d1b68120113621a5845ba1f60c37ef48c1f77663801008d358c02f8507d75",
    "data": {
      "schemaVersion": 1,
      "name": "Hound Topiary",
      "level": 3,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "plant"
      ],
      "description": "A majestic hound can be found guarding the entrance to several noble gardens across Avistan, often as a warning sign to raiding goblin parties or a devotional plea for protection from Cayden Cailean or Dispater, depending on the region. In the wild, hound topiaries are found in areas with heavy foliage where they can camouflage their packs. No matter where they're found, they're formed from souls that were extremely loyal and protective of their fellows during life and now seek to ensure the safety of their chosen territories.\nTopiaries are an extremely common sight across Golarion, especially within the gleaming and well-manicured lawns of nobility. Living topiaries develop from the death of a lone soul in an overgrown area of deep primal magic, with the soul exploding into the plants around it and causing them to grow together into the form of an animal, often influenced by the personality of the dying person. Once fully formed, the living topiary lacks their original memories; however, they're filled with the desire to protect the area they were formed in, driving off invaders and those who would do harm to the flora and fauna.",
      "armorClass": 18,
      "hitPoints": 50,
      "speedFeet": 30,
      "perception": {
        "modifier": 9,
        "senses": [
          "low-light-vision",
          "scent-imprecise-40"
        ]
      },
      "saves": {
        "fortitude": 12,
        "reflex": 9,
        "will": 6
      },
      "abilities": {
        "str": 4,
        "dex": 2,
        "con": 3,
        "int": -2,
        "wis": 0,
        "cha": 3
      },
      "skills": {
        "athletics": 10,
        "nature": 9,
        "stealth": 10
      },
      "languages": [
        "muan"
      ],
      "defenses": {
        "immunities": [
          "bleed"
        ],
        "resistances": [],
        "weaknesses": [
          "fire 5"
        ]
      },
      "attacks": [
        {
          "id": "NAgGYTxF1SIbWnij",
          "name": "Jaws",
          "bonus": 10,
          "damage": "1d8+6 piercing",
          "traits": []
        },
        {
          "id": "ckxtOVHj7NnwYLCJ",
          "name": "Claw",
          "bonus": 10,
          "damage": "1d6+6 slashing",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "gxNtg8ZwaJ1mYx5I",
          "name": "Pack Attack",
          "kind": "passive",
          "description": "The hound topiary deals an extra 1d6[untyped] damage to any creature within reach of at least two of its allies."
        },
        {
          "id": "vbWzBELJ2QMgZQE4",
          "name": "Pruning",
          "kind": "action",
          "description": "The hound topiary twists and contorts its shape, shedding branches and leaves as needed to change into a topiary of a Medium or smaller animal. Until the next time it acts, the topiary has an automatic result of 30 for Deception checks and DCs to appear as a mundane topiary."
        },
        {
          "id": "GAtm9AkeMUZA70vC",
          "name": "Walk Through Plants",
          "kind": "passive",
          "description": "The hound topiary ignores difficult terrain caused by dense vegetation."
        },
        {
          "id": "IjmBQqCa60LXpVeJ",
          "name": "Warning Howl",
          "kind": "reaction",
          "description": "Trigger The hound topiary rolls for initiative using Stealth\nEffect The hound shifts to life and howls, though without breath, no sound comes from its mouth. Creatures within 30 feet must attempt a check (will, dc:17) save or be Frightened 1. They're then immune to all hound topiaries' Warning Howls for 1 hour."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:fen-mosquito-swarm",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "JXM2kmdb1PhuEJls",
      "slug": "fen-mosquito-swarm",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:9916f3f90deea6063021f132b43e66c355d4a849ce865430042c92174df5dd0f",
    "translatableHash": "sha256:27c1f777845bbdc2a6f21e33b487f3b9d64f4b453d0630c5ad11da002611e48b",
    "data": {
      "schemaVersion": 1,
      "name": "Fen Mosquito Swarm",
      "level": 3,
      "rarity": "common",
      "size": "large",
      "traits": [
        "animal",
        "swarm"
      ],
      "description": "When deadly fen mosquitoes gather in large numbers, they form into lethal swarms capable of draining blood at a truly alarming rate. Fen mosquito swarms are typically encountered only in tropical swamps or bogs, but during humid months in spring or summer they can drift into riverine areas or even through the waterfront reaches of settlements.",
      "armorClass": 18,
      "hitPoints": 30,
      "speedFeet": 5,
      "perception": {
        "modifier": 8,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 8,
        "reflex": 11,
        "will": 5
      },
      "abilities": {
        "str": 0,
        "dex": 4,
        "con": 3,
        "int": -5,
        "wis": 0,
        "cha": -5
      },
      "skills": {
        "acrobatics": 6,
        "stealth": 8
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "precision",
          "swarm-mind"
        ],
        "resistances": [
          "bludgeoning 2",
          "piercing 5",
          "slashing 5"
        ],
        "weaknesses": [
          "area-damage 5",
          "splash-damage 5"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "AGm4GoMUxx5xAmpo",
          "name": "Swarm Mind",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "jwprc3z4QABxyA1y",
          "name": "Pyrexic Malaria",
          "kind": "passive",
          "description": "The victim can't reduce its Sickened condition while it's affected by pyrexic malaria\nSaving Throw check (fortitude, dc:20)\nOnset 4 days\nStage 1 Sickened 1 (1 day)\nStage 2 Enfeebled 1 and Sickened 1 (1 day)\nStage 3 as stage 2 (1 day)\nStage 4 Unconscious (1 day)\nStage 5 dead"
        },
        {
          "id": "9O71o5KF846nZWVa",
          "name": "Swarming Bites",
          "kind": "action",
          "description": "Each enemy in the swarm's space takes 1d6[piercing|options:area-damage] damage (check (reflex, dc:20, basic, options:area-effect) save) and is exposed to pyrexic malaria. Creatures that fail the saving throw also take 1d4[bleed]."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:raven-swarm",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "k5lxeobI0Q3l6rqV",
      "slug": "raven-swarm",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:1c58425daa7154457a97e08e25210a4eef7ce797ea5a0e854d1e323ef471c36d",
    "translatableHash": "sha256:139c2a1caf77a57b1e45eec42f25a25f6c144d42b617ddab409eac8c1429ec45",
    "data": {
      "schemaVersion": 1,
      "name": "Raven Swarm",
      "level": 3,
      "rarity": "common",
      "size": "large",
      "traits": [
        "animal",
        "swarm"
      ],
      "description": "A flock of ravens is known as an unkindness. Certainly, the name lives up to its meaning when a swarm of ravens decides to work together. In most cases, a raven swarm like the one presented here won't attack larger foes, but when manipulated by supernatural forces or simple desperation born from hunger, an unkindness of ravens can be a surprisingly dangerous threat.\nFew birds are as cunning and social as the raven.",
      "armorClass": 19,
      "hitPoints": 30,
      "speedFeet": 10,
      "perception": {
        "modifier": 9,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 7,
        "reflex": 12,
        "will": 9
      },
      "abilities": {
        "str": 0,
        "dex": 3,
        "con": 0,
        "int": -4,
        "wis": 4,
        "cha": 0
      },
      "skills": {
        "acrobatics": 10,
        "thievery": 10
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "swarm-mind",
          "precision"
        ],
        "resistances": [
          "bludgeoning 2",
          "piercing 5",
          "slashing 5"
        ],
        "weaknesses": [
          "area-damage 5",
          "splash-damage 5"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "5nZwyVsgPr94lNpa",
          "name": "Swarm Mind",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "g9WBnMDC4J33TlWq",
          "name": "Enraged Cunning",
          "kind": "passive",
          "description": "There are few things as dangerously persistent in the natural world as an angry unkindness of ravens. A raven swarm can hound its prey through most barriers. Simple latches, unsecured chimney flues, loosely shuttered windows, and similar obstacles rarely keep an unkindness away. A raven swarm attempts a Thievery check to bypass many of these simple obstructions, typically against DC 20."
        },
        {
          "id": "NV4laxM07MRKvfBd",
          "name": "Swarming Beaks",
          "kind": "action",
          "description": "The ravens' angry pecking deals 2d8[piercing] damage to each enemy in the swarm's space (check (reflex, dc:20, basic) save). A creature that critically fails its save is Blinded for [[/gmr 1d4 #rounds]]{1d4 rounds} as the ravens focus their attacks on the target's vulnerable face."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:ganzi-martial-artist",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "ko19XnS66DM8Pjr9",
      "slug": "ganzi-martial-artist",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:a0701d8316b8406b8bd2fb873096b7131d2e5f0518685c24bd70d340b1d90f03",
    "translatableHash": "sha256:e848797b2105a45843c789744804b5435f280d351f408d611070f9754896d6e5",
    "data": {
      "schemaVersion": 1,
      "name": "Ganzi Martial Artist",
      "level": 3,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid",
        "nephilim"
      ],
      "description": "Children of primeval chaos, ganzis intertwine the churning pandemonium of the Maelstrom with the more mundane tumult of mortal life. Some arise in bloodlines touched by creatures of the Maelstrom in generations previous, while others are changed by planar friction seething upon the shores of creation, but all share the essence of anarchy in their blood and bone.\nDue to their connection to the Maelstrom, ganzis vary wildly in appearance; the most common proteankin have patches of scales and feathers and mischievous, slithering tails. Others might have stranger features, such as horns, glowing orange eyes, or limbs flickering with harmless auras of entropic energy. Ganzis might be dramatically shorter, taller, thinner, or stouter than is typical for their ancestry, and it's not uncommon for them to be mistaken for more common nephilim.\nIndependent-minded to a fault, often creative and capricious, ganzis prefer professions that allow them to serve as their own masters. If such a profession gives a ganzi opportunity to baffle or befuddle Golarion's more staid citizens, then all the better. Ganzis frequently develop reputations as outgoing, deviant, or thrill-seeking, and many heartily embrace these reputations and lean into them. Of all the planar scions, ganzis are among the most likely to take up life as wanderers.\nGanzis with a taste for close combat are sometimes drawn to martial arts, turning their curious forms into potent and unexpected weapons. It's common to find such ganzi in the temporary employ of others, whether out of a legitimately shared ideology or simply the need for money. Just as often, though, one can simply find a ganzi martial artist demonstrating their craft on a street corner or dealing out justice to enforcers of cruel laws.\nNephilim are individuals infused with the essence of an immortal being from the Outer Planes, such as a celestial, fiend, or monitor. While the examples presented here are humans with nephilim heritages that trace back to Axis and the Maelstrom, members of nearly any ancestry can be born with an influx of similar energies and become a planar scion. More about nephilim can be found starting on page 78 of Player Core, and other nephilim NPCs are presented beginning on page 266 of Monster Core.",
      "armorClass": 20,
      "hitPoints": 36,
      "speedFeet": 35,
      "perception": {
        "modifier": 9,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 7,
        "reflex": 11,
        "will": 9
      },
      "abilities": {
        "str": 3,
        "dex": 4,
        "con": 0,
        "int": -1,
        "wis": 2,
        "cha": 2
      },
      "skills": {
        "acrobatics": 9,
        "athletics": 10,
        "deception": 7,
        "performance": 7,
        "stealth": 9
      },
      "languages": [
        "common",
        "protean"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "69XxMKFyeOz3ZIxC",
          "name": "Shuriken",
          "bonus": 11,
          "damage": "1d4+5 piercing",
          "traits": [
            "agile",
            "thrown-20"
          ]
        },
        {
          "id": "rs5QNfkk2BBsoxyh",
          "name": "Foot",
          "bonus": 11,
          "damage": "1d8+5 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "sweep"
          ]
        }
      ],
      "actions": [
        {
          "id": "HcCT9OM1ynHx53SF",
          "name": "+1 Status to All Saves vs. Controlled Condition",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "XjmJQi9SNvj01B7V",
          "name": "Ganzi Resistance",
          "kind": "passive",
          "description": "The ganzi gains resistance 1 to acid, electricity, or sonic (chosen randomly each day).\nEffect: Ganzi Resistance"
        },
        {
          "id": "B7dEX7u4tsrp6t84",
          "name": "Ganzi Spells",
          "kind": "passive",
          "description": "Two of the following chosen at random each day using [[/gmr 1d12 #Spell Selection]]{1d12}\n• Acid Grip\n• Blur\n• Humanoid Form\n• Illusory Object\n• Invisibility\n• Laughing Fit\n• Noise Blast\n• Paranoia\n• Resist Energy\n• See the Unseen\n• Shatter\n• Telekinetic Maneuver"
        },
        {
          "id": "m28qbb8336wXcWVN",
          "name": "Flurry of Kicks",
          "kind": "action",
          "description": "Frequency once per turn\nEffect The martial artist makes two melee Strikes. The martial artist applies their multiple attack penalty to these Strikes normally."
        },
        {
          "id": "4q6cxvqvoulqFljm",
          "name": "Handspring Kick",
          "kind": "action",
          "description": "Requirements The martial artist has both hands free\nEffect The martial artist Steps, then makes a melee Strike at a –1 penalty."
        }
      ],
      "spellcasting": [
        {
          "id": "SJ99j1O6QtGyUbpl",
          "name": "Divine Innate Spells (See Ganzi Spells)",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 11,
          "saveDc": 19,
          "spells": [
            {
              "id": "zhZu022rPR8w5lZL",
              "name": "Acid Grip",
              "rank": 2
            },
            {
              "id": "7bEkFB1VrWlRThb3",
              "name": "Blur",
              "rank": 2
            },
            {
              "id": "i7Xpr0gA8ZEUVd6D",
              "name": "Humanoid Form",
              "rank": 2
            },
            {
              "id": "iY5e0bdrAlb1PV1g",
              "name": "Illusory Object",
              "rank": 2
            },
            {
              "id": "Kak49qcY7R1sluiN",
              "name": "Invisibility",
              "rank": 2
            },
            {
              "id": "8JziFHgBsClNDpSb",
              "name": "Laughing Fit",
              "rank": 2
            },
            {
              "id": "4KkLrVnEI6NVJz0U",
              "name": "Noise Blast",
              "rank": 2
            },
            {
              "id": "5ZK8N5jnVreFOaD1",
              "name": "Paranoia",
              "rank": 2
            },
            {
              "id": "XcSNdg6Dj9ZXFN3Q",
              "name": "Resist Energy",
              "rank": 2
            },
            {
              "id": "1TeKUuyoAJfd8gYm",
              "name": "See the Unseen",
              "rank": 2
            },
            {
              "id": "lwsQIRlPAznPxiD4",
              "name": "Shatter",
              "rank": 2
            },
            {
              "id": "C25w0PlHOmpZr5YG",
              "name": "Telekinetic Maneuver",
              "rank": 2
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:esobok",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "n1KQRInuKkFRM7ot",
      "slug": "esobok",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:0aa223d46e0af227e3d2879a741eebd2b993a237c5872cc143145525ea8032f7",
    "translatableHash": "sha256:7d5d517062c3cbebc80760d6e261cd7e80b0cb3e37fcaa77e4a81f67665fe730",
    "data": {
      "schemaVersion": 1,
      "name": "Esobok",
      "level": 3,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "monitor",
        "psychopomp"
      ],
      "description": "Esoboks are brute hunters and pugnacious sentinels who serve as the guard dogs of the Boneyard. These squat, powerful quadrupeds have a frill of dark feathers around their distinctive heads which resemble a crocodile skull. Esoboks rarely bother with those who are truly dead, allowing the dead of the Boneyard to go about their business while remaining watchful for danger. Though cunning when sniffing out threats to the Boneyard or to their psychopomp handlers, they're among the least intelligent of the psychopomps and rarely speak except to utter growling threats. The wise listen when an esobok makes a threat, as it won't do so twice.\nMany psychopomps are intimately involved with the Boneyard's massive bureaucracy. Few pursue mercy, justice, or personal gain; their duties to Pharasma and her Boneyard are supreme. Nevertheless, individual psychopomps interpret their duties in different ways, which might put them in conflict with mortals or even with each other.",
      "armorClass": 18,
      "hitPoints": 55,
      "speedFeet": 30,
      "perception": {
        "modifier": 12,
        "senses": [
          "darkvision",
          "lifesense-imprecise-60",
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 11,
        "reflex": 8,
        "will": 8
      },
      "abilities": {
        "str": 3,
        "dex": 3,
        "con": 4,
        "int": -3,
        "wis": 3,
        "cha": 2
      },
      "skills": {
        "acrobatics": 8,
        "athletics": 8,
        "intimidation": 9,
        "religion": 4,
        "stealth": 8,
        "survival": 10
      },
      "languages": [
        "chthonian",
        "diabolic",
        "empyrean",
        "requian"
      ],
      "defenses": {
        "immunities": [
          "death-effects",
          "disease"
        ],
        "resistances": [
          "poison 5",
          "void 5"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "a6zGloEA8e8WwOZJ",
          "name": "Jaws",
          "bonus": 12,
          "damage": "1d10+3 piercing",
          "traits": [
            "magical"
          ]
        },
        {
          "id": "6Z4gcwzKab8eqZen",
          "name": "Claw",
          "bonus": 12,
          "damage": "1d6+3 slashing",
          "traits": [
            "agile",
            "magical"
          ]
        }
      ],
      "actions": [
        {
          "id": "at7WexxB5Jjh05G7",
          "name": "Lifesense 60 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "pulStw1uzw2pS1Wf",
          "name": "Pounce",
          "kind": "action",
          "description": "The esobok Strides and then makes a Strike. If it began this action Hidden, it remains hidden until after the Strike."
        },
        {
          "id": "8mmJTTiFONZUJIX8",
          "name": "Shepherd's Touch",
          "kind": "passive",
          "description": "An esobok's Strikes affect incorporeal creatures with the effects of a Ghost Touch property rune and deal 1d6[void] damage to living creatures and 1d6[vitality] damage to undead."
        },
        {
          "id": "JgsxONSn5UJIdQsl",
          "name": "Wrench Spirit",
          "kind": "action",
          "description": "Requirements A creature is Grabbed or Restrained by the esobok's jaws\nEffect The esobok releases the target from the Grab but wrenches its spirit free as it does so. The creature must attempt a check (will, dc:20) save. Creatures without souls (such as most constructs) and creatures whose bodies and souls are one (such as most celestials, fiends, and monitors) who roll a failure or critical failure on the save get a success instead.\nCritical Success The creature is unaffected.\nSuccess The target is Stunned 1.\nFailure The esobok wrenches the target's soul from its body into its jaws. Mindless undead creatures of level 2 or lower are destroyed, other undead creatures are stunned for 1 round, and all other creatures are Paralyzed. At the end of each of its turns, a creature paralyzed by this effect can attempt a new save to end the effect. The paralysis ends automatically if the esobok attempts a jaws Strike or speaks."
        },
        {
          "id": "ikZRHu6ZCReW74ed",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": [
        {
          "id": "LMPfxeF6hmAkRpyE",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 0,
          "saveDc": 0,
          "spells": [
            {
              "id": "CCzGdeoIOKdlw0mA",
              "name": "Invisibility (Self Only)",
              "rank": 2
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:divoynik",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "O9CiNSi930iKgIDK",
      "slug": "divoynik",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:443358d83dd9f09fe64c7de9cfde022dec5cdedc1d1d023a465610e445ec4989",
    "translatableHash": "sha256:f6569836fe542813621eb294385f0ddf94f94b3ea86af321200e7400b82421f1",
    "data": {
      "schemaVersion": 1,
      "name": "Divoynik",
      "level": 3,
      "rarity": "uncommon",
      "size": "medium",
      "traits": [
        "aberration"
      ],
      "description": "A close-knit settlement is rocked to its core when a beloved pillar of the community is accused of a heinous crime. The accused protest their innocence, but overwhelming evidence leaves no room for doubt. As justice is served, the community is irreversibly changed, its neighborly atmosphere giving way to lingering paranoia—the favored fare of the divoynik.\nDivoyniks are malevolent shapeshifters, capable not only of mimicking the physical appearance of other creatures but also of plucking thoughts and memories from their victims' minds. A divoynik retains their most recently assumed guise even after death. Spells like ring of truth help see through a divoynik, and truesight reveals its shapeshifted nature, making clear otherwise imperceptible markings similar to an animal's stripes on a divoynik's body. Beyond magic, people who encounter a divoynik can always rely on one other method of identification. Although identical to their mimicked form in all other respects, a divoynik's body contains neither blood nor a heart.",
      "armorClass": 18,
      "hitPoints": 45,
      "speedFeet": 25,
      "perception": {
        "modifier": 7,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 6,
        "reflex": 10,
        "will": 11
      },
      "abilities": {
        "str": 3,
        "dex": 3,
        "con": 0,
        "int": 1,
        "wis": 2,
        "cha": 4
      },
      "skills": {
        "acrobatics": 8,
        "athletics": 8,
        "deception": 11,
        "diplomacy": 9,
        "intimidation": 9,
        "society": 8,
        "stealth": 10
      },
      "languages": [
        "common"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "polymorph"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "8M6gCjW4F6nwkW6Z",
          "name": "Fist",
          "bonus": 11,
          "damage": "1d10+5 bludgeoning",
          "traits": [
            "agile"
          ]
        }
      ],
      "actions": [
        {
          "id": "2cJcmZEuSuAMBiLk",
          "name": "Telepathy 100 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "DmKfp6bNTLfTCRpO",
          "name": "Cracked Mirror",
          "kind": "passive",
          "description": "A divoynik has weakness 3 to physical attacks made by a creature whose form they're mimicking, and the mimicked creature gains weakness 3 to physical attacks made by the divoynik."
        },
        {
          "id": "Y4j5Ica4l91UNEXf",
          "name": "Savor Anguish",
          "kind": "reaction",
          "description": "Trigger A creature within 30 feet of the divoynik fails a saving throw against an emotion effect\nEffect The divoynik feeds on their victim's mental distress, gaining 5 temporary Hit Points for up to 1 minute. They can feed on a given creature's emotions only once every 24 hours."
        },
        {
          "id": "EaAU5YXrRzftrloq",
          "name": "Sudden Betrayal",
          "kind": "passive",
          "description": "A divoynik can always use Deception when rolling initiative, as long as at least one enemy doesn't know their true nature. On the first round of combat, if the divoynik rolled Deception for initiative, creatures that haven't acted are Off-Guard to the divoynik."
        },
        {
          "id": "Al4WmI1dHL92Z0RO",
          "name": "Change Shape",
          "kind": "action",
          "description": "The divoynik can take on the specific appearance of any Small or Medium animal or humanoid they've seen. This doesn't change their Speed or their attack and damage bonuses with their Strikes, but it might change the damage type their Strikes deal (such as to slashing with a claw)."
        },
        {
          "id": "JcWNWj6ans0QVfeA",
          "name": "Window to the Soul",
          "kind": "action",
          "description": "The divoynik meets the gaze of a creature within 60 feet whose form they've taken with their Change Shape ability. The target must attempt a check (will, dc:20) saving throw.\nCritical Success The target is unaffected and immune for 24 hours.\nSuccess The target is unaffected.\nFailure The target is Fascinated for 1 minute. Hostile actions do not end this fascination, but if the divoynik Changes Shape, moves out of range, or is no longer visible to the target, the fascination immediately ends. While fascinated, the target takes a –1 circumstance penalty to Will saves against the divoynik's spells and abilities.\nCritical Failure As failure, and the divoynik can spend a free action to telepathically extract the answer to one question from the target. The target can attempt a check (deception, dc:20) check to attempt to evade the query and give misleading information."
        }
      ],
      "spellcasting": [
        {
          "id": "dNAQvh22dL9blVv4",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 0,
          "saveDc": 20,
          "spells": [
            {
              "id": "3lkO6LvCnK9d3j3J",
              "name": "Mind Reading (At Will)",
              "rank": 3
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:giant-dragonfly-nymph",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "OYBkVqJA95V3J1WG",
      "slug": "giant-dragonfly-nymph",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:6e39a52834fe426a5a16ef54c2d79f040743a2d6ffb302e2042b60b6a22dc196",
    "translatableHash": "sha256:0af8ab3bac7b9364381045777931b8b8067c05712d1aa3c536c6951c80b8efb1",
    "data": {
      "schemaVersion": 1,
      "name": "Giant Dragonfly Nymph",
      "level": 3,
      "rarity": "common",
      "size": "small",
      "traits": [
        "animal",
        "aquatic"
      ],
      "description": "The aquatic, wingless offspring of dragonflies are called dragonfly nymphs. Giant dragonfly nymphs can be several feet in length and mostly hunt in shallow waters, eating carrion and ambushing living creatures with their fully grown counterparts. They're not daunted by larger creatures, compelled by their instinct to eat as much as possible to sustain their growth.\nDragonflies hunt with a combination of agile power and deadly speed. In early life stages, these insects are entirely aquatic predators, but they take to the air once they've molted. Most live around bodies of water suitable for spawning, but giant dragonflies have been known to fly many miles while on the hunt. Though their gossamer wings and colorful bodies are beautiful at first glance, an unwary adventurer lured in by the display runs a very real risk of becoming lunch.",
      "armorClass": 19,
      "hitPoints": 45,
      "speedFeet": 10,
      "perception": {
        "modifier": 8,
        "senses": [
          "low-light-vision",
          "wavesense-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 11,
        "reflex": 9,
        "will": 6
      },
      "abilities": {
        "str": 3,
        "dex": 2,
        "con": 4,
        "int": -5,
        "wis": 1,
        "cha": -5
      },
      "skills": {
        "athletics": 10,
        "stealth": 9
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "BA4MZjV6DpN2Lgz7",
          "name": "Mandibles",
          "bonus": 12,
          "damage": "1d10+6 piercing",
          "traits": [
            "agile"
          ]
        }
      ],
      "actions": [
        {
          "id": "SU4vOItz9JdVaTJY",
          "name": "Wavesense (Imprecise) 30 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "6CC2ImjjzWmr9UPo",
          "name": "Extend Mandibles",
          "kind": "action",
          "description": "The giant dragonfly nymph extends its jaws to a surprising distance. The dragonfly nymph makes a mandibles Strike with a reach of 10 feet, but the mandibles lose the agile trait for this Strike."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:dziriak",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "oykGJJYyxMHGXcRN",
      "slug": "dziriak",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:1307b3e039ae9b9a78c717d15e2ac09a2d2f571e7b6697dc576836c7c17a0674",
    "translatableHash": "sha256:d67be52c97bb44e01aa888a786189daab313936687ffc595e7f5f2552ff75654",
    "data": {
      "schemaVersion": 1,
      "name": "D'ziriak",
      "level": 3,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "aberration",
        "shadow"
      ],
      "description": "These strange creatures are native to the Netherworld, where their colorful nature is in opposition to that realm's overwhelmingly monochromatic palette. Averaging 7 feet in height, d'ziriaks have four arms, two legs, and a termite-like abdomen. The larger pair of arms, used for most tasks, have five-fingered hands with sharp, insectile claws. The smaller pair of arms are reserved for fine manipulations and are not effective in combat.\nD'ziriaks' otherwise-dull brown carapaces are decorated with numerous runes glowing in bright colors. These tattoo-like runes indicate an individual's role in d'ziriak society and set them apart from their home plane's other native inhabitants. The runes glow with natural bioluminescence, and d'ziriaks can make them flare brightly for an instant, at the expense of overstressing the biochemical glands that create and maintain the runes for an extended time. The color and shape of the runes are partially natural but can be carefully customized over time to fit the individual's station.\nThe D'ziriak language is a mix of buzzes and chitters and is spoken by few other creatures. D'ziriaks prefer to communicate with other species using telepathy rather than endure the sound of their language being \"butchered by fleshy throats.\" D'ziriaks organize into hive cities led by a king and queen. These hive cities consist of impressive spires, yet the towers are only the foremost part of the settlement, with many chambers reaching deep below, used as residences, workshops, and fungus farms. D'ziriak settlements are lit inside and out with alchemical and magical light sources, often in the shape of runes. These dimly glowing towers provide travelers with landmarks and perhaps promise safe havens on the otherwise gloomy Netherworld.",
      "armorClass": 18,
      "hitPoints": 45,
      "speedFeet": 25,
      "perception": {
        "modifier": 10,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 6,
        "reflex": 12,
        "will": 10
      },
      "abilities": {
        "str": 1,
        "dex": 3,
        "con": 1,
        "int": 1,
        "wis": 3,
        "cha": 4
      },
      "skills": {
        "arcana": 8,
        "athletics": 6,
        "occultism": 10,
        "stealth": 10,
        "survival": 8
      },
      "languages": [
        "dziriak",
        "shadowtongue"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "OxEJ1NOQewlXZjZh",
          "name": "Claw",
          "bonus": 12,
          "damage": "1d10+4 piercing",
          "traits": [
            "agile",
            "finesse",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "JROfqhK8mjfAomER",
          "name": "Telepathy 100 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "Z1uxEMSqDnZV9SCY",
          "name": "Glow",
          "kind": "passive",
          "description": "20 feet. The colorful runes that decorate a d'ziriak's body create dim light. The natural bioluminescence is specially adapted to the Netherworld, able to overcome magical darkness as if it were magical light with a rank equal to half the d'ziriak's level rounded up."
        },
        {
          "id": "nuNIIa81vZ9PT2RL",
          "name": "Dazzling Burst",
          "kind": "action",
          "description": "Dazzling Burst 2 (light, visual) The d'ziriak causes their body to flare with intense colorful light. Non-d'ziriaks in a @Template[type:emanation|distance:20] must attempt a check (fortitude, dc:20) save. After using this ability, the d'ziriak loses their glow for 24 hours; during this time they can't use Dazzling Burst again. A creature that attempts this save is immune to all Dazzling Bursts for 1 minute.\nCritical Success The creature is unaffected.\nSuccess The creature is Dazzled for 1 round.\nFailure The creature is dazzled for 1 minute.\nCritical Failure The creature is Blinded for 1 round and dazzled for 1 minute."
        },
        {
          "id": "Cxm87AR1TJom2drt",
          "name": "Double Claw",
          "kind": "action",
          "description": "Frequency once per round\nEffect The d'ziriak makes two claw Strikes. If both hit the same creature, combine their damage for the purpose of resistances and weaknesses. This counts as two attacks for the d'ziriak's multiple attack penalty, and the penalty doesn't increase until after both attacks."
        }
      ],
      "spellcasting": [
        {
          "id": "kFNxTYgL056it5oI",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 9,
          "saveDc": 19,
          "spells": [
            {
              "id": "olvPYkQEIgtlun6u",
              "name": "Interplanar Teleport (Self only, to Netherworld only)",
              "rank": 7
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:giant-chameleon",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "oZTRZZlGb722xFMf",
      "slug": "giant-chameleon",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:02a2113bb63d8cc1a9c52cc57cdaf77aaa37aa8669f7968b4ccc64ecad4d0600",
    "translatableHash": "sha256:957cf38b46260c1275d2db71e077eae959317db9d00835648c6ed0183623e195",
    "data": {
      "schemaVersion": 1,
      "name": "Giant Chameleon",
      "level": 3,
      "rarity": "common",
      "size": "large",
      "traits": [
        "animal"
      ],
      "description": "Giant chameleons are legendary for their ability to change their skin color in response to their surroundings. Their eyes are capable of peering in different directions independently, making them almost as difficult to sneak up on as they are to notice in the first place.",
      "armorClass": 18,
      "hitPoints": 60,
      "speedFeet": 30,
      "perception": {
        "modifier": 10,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 8,
        "reflex": 12,
        "will": 8
      },
      "abilities": {
        "str": 5,
        "dex": 3,
        "con": 1,
        "int": -4,
        "wis": 3,
        "cha": -2
      },
      "skills": {
        "athletics": 9,
        "stealth": 10
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "5Ygh7NnWAZBamFaS",
          "name": "Jaws",
          "bonus": 12,
          "damage": "1d10+7 piercing",
          "traits": [
            "reach-10",
            "unarmed"
          ]
        },
        {
          "id": "bLGN7Biu5pB1bqtL",
          "name": "Tongue",
          "bonus": 12,
          "damage": "",
          "traits": [
            "agile",
            "reach-15"
          ]
        }
      ],
      "actions": [
        {
          "id": "qbn93YsujSFI6TMZ",
          "name": "Camouflage",
          "kind": "passive",
          "description": "The giant chameleon can change its coloration to match its surroundings. It doesn't need cover to attempt to [[/act hide]] with a Stealth check."
        },
        {
          "id": "eDciSvI59Etta4Vh",
          "name": "All-Around Vision",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "sguXTwhSIa1swJ1p",
          "name": "Tongue Grab",
          "kind": "passive",
          "description": "If the giant chameleon hits a creature with a tongue Strike, that creature becomes Grabbed by the giant chameleon. The target isn't Immobilized, but it can't move beyond the reach of the giant chameleon's tongue. A creature can sever the tongue with an attack that hits AC 15 and deals at least 4 slashing damage. Though this doesn't deal any damage to the giant chameleon, it prevents it from using its tongue Strike until it regrows its tongue, which takes a week."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:urdefhan-warrior",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "Pmgt9aAtUiLEagD6",
      "slug": "urdefhan-warrior",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:ddde6cf83bd191b03728b6db226ed43a714520e847f734a5f55d3d81d1691427",
    "translatableHash": "sha256:c36ba813e396cc2d1fe544aafb08830cf64d442fe1ecee1c8e756985d1b35024",
    "data": {
      "schemaVersion": 1,
      "name": "Urdefhan Warrior",
      "level": 3,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "humanoid",
        "urdefhan"
      ],
      "description": "From the moment they're born, urdefhans are prepared for war. Urdefhan warriors are among the least powerful urdefhans one might encounter outside of their eerie underground cities.\nThe violent warmongers, occultists, and poisoners known as urdefhans dwell within the Darklands. They were created in eons past by the mysterious First Apocalypse Riders to serve as agents of the end times of the Universe. Urdefhans continue to honor their creators by worshipping the wretched beings who rule over the plane of Abaddon, and like their fiendish lieges, urdefhans exist for one reason and one reason alone: to kill.\nWhile urdefhans are humanoid and dwell together in large groups, this is where their similarities to other ancestries end. Their visages are horrific, with transparent skin and musculature displaying their glistening entrails, gleaming bones, and perhaps worst of all, their baleful red eyes. This appearance, combined with their gaping maws full of sharp fangs, works to create the false impression that urdefhan are some sort of vampiric undead, not creatures of living flesh and blood. When an urdefhan's life comes to an end, their flesh quickly curdles and then bursts in a wave of awful corruption that spreads to the flesh of other creatures in the area. The typical urdefhan views their eventual demise as a disappointment, for once they're dead, their chances to kill will finally come to an end.\nAn urdefhan's translucent body allows onlookers to see the various organs and fluids within, while their blue blood often signals their mood and telegraphs possible dangers. The blood of an excited urdefhan ready to attack grows more vibrant and even glows with a faint light. When an urdefhan is prepared to meet their death and imminent soul detonation, their blood grows dark, almost black as pitch.\nUrdefhans' primary concern is death and how to inflict it in the goriest, most painful, and widespread ways. Beyond this ethos of violence, urdefhans concern themselves only tangentially with matters such as formal modes of warfare or aspects of their damnable religion. When an urdefhan isn't actively engaged in violence, their giddy cruelty is tempered by only a sense of self-preservation that ensures they survive long enough to spread the \"blessings\" of their daemonic patrons. They pass the time between wars inventing new weapons, developing new diseases, and researching awful new magic, all in preparation for the next inevitable conflict.",
      "armorClass": 18,
      "hitPoints": 55,
      "speedFeet": 25,
      "perception": {
        "modifier": 9,
        "senses": [
          "greater-darkvision"
        ]
      },
      "saves": {
        "fortitude": 9,
        "reflex": 8,
        "will": 9
      },
      "abilities": {
        "str": 3,
        "dex": 1,
        "con": 2,
        "int": 0,
        "wis": 2,
        "cha": 2
      },
      "skills": {
        "athletics": 10,
        "intimidation": 9,
        "religion": 7,
        "survival": 7
      },
      "languages": [
        "aklo",
        "daemonic",
        "sakvroth"
      ],
      "defenses": {
        "immunities": [
          "death-effects",
          "disease",
          "fear-effects"
        ],
        "resistances": [],
        "weaknesses": [
          "vitality 5"
        ]
      },
      "attacks": [
        {
          "id": "pjqUl4vljlqA3FtD",
          "name": "Rhoka Sword",
          "bonus": 12,
          "damage": "1d8+6 slashing",
          "traits": [
            "deadly-d8",
            "two-hand-d10"
          ]
        },
        {
          "id": "MGdSSyQ6ll72UAK4",
          "name": "Jaws",
          "bonus": 12,
          "damage": "1d6+6 piercing",
          "traits": []
        },
        {
          "id": "XbAmbBHWJk9LDqaL",
          "name": "Composite Longbow",
          "bonus": 10,
          "damage": "1d8+4 piercing",
          "traits": [
            "deadly-d10",
            "propulsive",
            "volley-30"
          ]
        }
      ],
      "actions": [
        {
          "id": "nvsnrRBGofMKGnUA",
          "name": "Greater Darkvision",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "L7T9T5DomnIiT6vI",
          "name": "Necrotic Decay",
          "kind": "passive",
          "description": "When an urdefhan dies, their translucent flesh quickly rots away and sublimates into a foul-smelling gas that fills a @Template[type:emanation|distance:5] around the body. This gas deals 3d6[void|options:area-damage] damage to creatures in this area as their flesh curdles and rots (check (fortitude, dc:17, basic) save)."
        },
        {
          "id": "vsZsp4XZ5OI6ap3Z",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "HLX14HOo5rqjnF9H",
          "name": "Void Healing",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "UPdKuqaOx9IO3SvZ",
          "name": "Ravenous Attack",
          "kind": "action",
          "description": "The urdefhan makes one rhoka sword Strike and one jaws Strike against a single creature. Their multiple attack penalty doesn't increase until after both attacks."
        },
        {
          "id": "rp7W1idjRAxDkaW3",
          "name": "Wicked Bite",
          "kind": "action",
          "description": "Requirements The urdefhan damaged a creature with a jaws Strike on their last action\nEffect The urdefhan maintains contact, turning the creature's flesh translucent around the site of the injury. The target must succeed at a check (fortitude, dc:20) save or be affected by drain blood or drain vitality (the urdefhan's choice). If the jaws Strike was a critical hit, the creature is affected by both effects, using the same save result for both.\n• Drain Blood The urdefhan drinks some of the creature's blood. On a failed save, the creature is Drained 1 and the urdefhan regains 5 HP (or, on a critical failure, it's Drained 2 and the urdefhan regains 10 HP).\n• Drain Vitality The urdefhan draws out some of the creature's vital essence. The creature becomes Enfeebled 1 for 1 hour on a failed save (or Enfeebled 2 for 1 hour on a critical failure)."
        }
      ],
      "spellcasting": [
        {
          "id": "LjuoUxPcrQTLNvBR",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 9,
          "saveDc": 17,
          "spells": [
            {
              "id": "15OhxsP25xZt8cMp",
              "name": "Enfeeble",
              "rank": 1
            },
            {
              "id": "ugeSw6YCoIZG6yvJ",
              "name": "Gentle Landing (At Will, Self Only)",
              "rank": 1
            },
            {
              "id": "qlkGxBrillTY9AeS",
              "name": "Darkness",
              "rank": 2
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:kuribu",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "tbdfg5ayaoHcBYCV",
      "slug": "kuribu",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:869ec6a69c876e98db96dfd0cc8de50377672ebce6a9e9afbabbd72dbfbafb2e",
    "translatableHash": "sha256:716adabf2c4a427223c1f8dccab29fd83a3ad1e12fe6571c524de8b39380ebb4",
    "data": {
      "schemaVersion": 1,
      "name": "Kuribu",
      "level": 3,
      "rarity": "common",
      "size": "small",
      "traits": [
        "angel",
        "celestial",
        "holy"
      ],
      "description": "Kuribus serve as the guardians of temples and other holy sites. They are humanoid in appearance and roughly the size of human children. Their bodies look like stone, which allows kuribus to disguise themselves as statues for extended periods of time (sometimes up to centuries). When defending their sites, kuribus harry invaders from a distance.",
      "armorClass": 17,
      "hitPoints": 45,
      "speedFeet": 25,
      "perception": {
        "modifier": 11,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 6,
        "reflex": 11,
        "will": 9
      },
      "abilities": {
        "str": 2,
        "dex": 4,
        "con": 1,
        "int": 0,
        "wis": 2,
        "cha": 1
      },
      "skills": {
        "acrobatics": 11,
        "diplomacy": 8,
        "religion": 9,
        "stealth": 9
      },
      "languages": [
        "diabolic",
        "draconic",
        "empyrean"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "unholy 5"
        ]
      },
      "attacks": [
        {
          "id": "nADcLuL92Syg9i5o",
          "name": "Fist",
          "bonus": 11,
          "damage": "1d4+6 bludgeoning",
          "traits": [
            "agile",
            "holy",
            "magical"
          ]
        },
        {
          "id": "0dKqrlnqTPwHML0m",
          "name": "Composite Shortbow",
          "bonus": 11,
          "damage": "1d6+5 piercing",
          "traits": [
            "deadly-d10",
            "propulsive",
            "reload-0"
          ]
        }
      ],
      "actions": [
        {
          "id": "l53muM5r2a3qaDde",
          "name": "Immobilizing Ambush",
          "kind": "reaction",
          "description": "Requirements The kuribu is disguised as a statue\nTrigger A creature moves within 60 feet of the kuribu\nEffect The kuribu springs into action by making a shortbow Strike against the triggering creature. If the Strike hits, the creature is pinned by the arrow, as described in the bow critical specialization."
        },
        {
          "id": "afWtAFN0wPDEqBwE",
          "name": "Sentinel's Aura",
          "kind": "passive",
          "description": "30 feet. The kuribu and any other creature in the aura defending the same holy site gain a +1 status bonus to AC. This aura is suppressed while Statue is in effect."
        },
        {
          "id": "JbEXEx4FSvdSTXl1",
          "name": "Blessed Aspect",
          "kind": "action",
          "description": "The kuribu's face transforms, and their holy countenance unleashes an attack based on the aspect the kuribu chooses. The kuribu can't use Blessed Aspect again for [[/gmr 1d4 #Recharge Blessed Aspect]]{1d4 rounds}. They can revert back to their humanoid appearance at any time, but they still have to wait before using Blessed Aspect again.\n• Eagle The kuribu unleashes a disorienting screech in a @Template[type:cone|distance:15] that deals 2d10[sonic|options:area-damage] damage with a check (will, dc:19, basic) save. A creature that critically fails is also Stunned 1.\n• Lion The kuribu makes a powerful jaws Strike against an adjacent creature. The attack has a check (kuribu-jaws-attack, against:ac){+12} attack modifer and deals 4d6[piercing,1d4[bleed]]{4d6 piercing damage plus 1d4 persistent bleed damage}.\n• Ox The kuribu charges into a creature. The kuribu Flies or Strides. At the end of their movement, the kuribu crashes into one adjacent creature, dealing 4d6[bludgeoning|options:area-damage] damage to it with a check (fortitude, dc:17, basic) save. If the target critically fails, it's also knocked Prone."
        },
        {
          "id": "0ODGUTKtRjILh9wl",
          "name": "Statue",
          "kind": "action",
          "description": "Until the next time they act, the kuribu appears to be a statue. They have an automatic result of 29 on Deception checks and DCs to pass as a statue."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:akizendri",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "XyEQrWOQU59qCwRo",
      "slug": "akizendri",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:e6bfb96f67f43bed605869e36bcecaa49aa3b3d027c9f5a199f57dac2fd18431",
    "translatableHash": "sha256:75ef620314dba6319fdede0e184d5b653a9b388a8ac33d7229da1ccf07a5143e",
    "data": {
      "schemaVersion": 1,
      "name": "Akizendri",
      "level": 3,
      "rarity": "common",
      "size": "small",
      "traits": [
        "monitor",
        "protean"
      ],
      "description": "Akizendris gnaw at sources of knowledge and lore, gleefully corrupting and altering them to vex scholars across the planes with contradictions and untruths.\nProteans are manifestations of chaos made flesh, natives of the Maelstrom that embody the primeval potency of entropy in their serpentine forms.",
      "armorClass": 19,
      "hitPoints": 40,
      "speedFeet": 25,
      "perception": {
        "modifier": 8,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 6,
        "reflex": 11,
        "will": 10
      },
      "abilities": {
        "str": 3,
        "dex": 4,
        "con": 1,
        "int": 4,
        "wis": 3,
        "cha": 1
      },
      "skills": {
        "acrobatics": 9,
        "athletics": 9,
        "deception": 10,
        "occultism": 11,
        "society": 10,
        "stealth": 9,
        "thievery": 9
      },
      "languages": [
        "chthonian",
        "empyrean",
        "protean"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "precision 3",
          "protean-anatomy 6"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "MF8t0GFQ51Hee8Bt",
          "name": "Jaws",
          "bonus": 12,
          "damage": "2d8+3 piercing; 1d4 spirit",
          "traits": [
            "finesse",
            "magical"
          ]
        },
        {
          "id": "udZ4cNvBa9IlGxuc",
          "name": "Tail",
          "bonus": 12,
          "damage": "2d6+3 bludgeoning; 1d4 spirit",
          "traits": [
            "finesse",
            "magical"
          ]
        }
      ],
      "actions": [
        {
          "id": "TrndUmHM3RHeytHS",
          "name": "Telepathy (Touch Only)",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "w3jtDpNAqy1jgvsR",
          "name": "Entropy Sense (Imprecise) 30 feet",
          "kind": "passive",
          "description": "An akizendri can anticipate the most likely presence of a creature through a supernatural insight into chaotic probabilities and chance. This grants them the ability to sense creatures within the listed range. Veil of Privacy prevents a creature from being detected via entropy sense automatically (without a counteract check)."
        },
        {
          "id": "69wGW1ORMn4Qzdwu",
          "name": "Constant Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "KNZ6RpduO9a8ATyN",
          "name": "Fast Healing 1",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "fnJmsVk5o2LkXd5l",
          "name": "Protean Anatomy",
          "kind": "passive",
          "description": "An akizendri's vital organs shift and change shape and position constantly. Immediately after the akizendri takes acid, electricity, or sonic damage, they gain the listed amount of resistance to that damage type. This lasts for 1 hour or until the next time the protean takes damage of one of the other types (in which case their resistance changes to match that type), whichever comes first.\nThe akizendri is immune to polymorph effects unless they're a willing target. If Blinded or Deafened, the akizendri automatically recovers at the end of their next turn as new sensory organs grow to replace the compromised ones.\nEffect: Protean Anatomy"
        },
        {
          "id": "D7OI6LZB7Lq6fclx",
          "name": "Change Shape",
          "kind": "action",
          "description": "The akizendri takes on the appearance of any Small or smaller creature. This doesn't change its Speed or its attack and damage bonuses with its Strikes, but might change the damage type its Strikes deal."
        },
        {
          "id": "Um36UAsvixNEo2JC",
          "name": "Constrict",
          "kind": "action",
          "description": "(1d8+3)[bludgeoning] damage, check (fortitude, dc:20, basic)"
        },
        {
          "id": "vTdAoBWge2NbeE6O",
          "name": "Garbled Thoughts",
          "kind": "passive",
          "description": "A creature hit by the akizendri's bite Strike must attempt a check (will, dc:20) save.\nSuccess The creature is unaffected.\nFailure The creature is Stupefied 1 for [[/gmr 1d4 #rounds]]{1d4 rounds}.\nCritical Failure As failure, but the creature is also Confused for 1 round."
        },
        {
          "id": "OocmvB33fksC5rm0",
          "name": "Text Immersion",
          "kind": "passive",
          "description": "As a 1-minute activity, the akizendri physically immerses itself in a page of text it's touching, changing the message of the text in the process. It can exit the book at any point by Dismissing this ability, at which point it appears in a space adjacent to the text. If it does so to begin combat, it rolls a Deception check for initiative. As long as it remains immersed in the text, the akizendri has no body. It can communicate telepathically with a creature as long as the creature touches the book or scroll that contains it. It can sense nearby creatures using its entropy sense, but not in any other way, nor can it use any attack, manipulate, or move actions or speak aloud. If the object it's immersed in is destroyed, the akizendri reappears in an adjacent square and is Stunned 1."
        },
        {
          "id": "GLjZnBSztBRyDaHo",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": [
        {
          "id": "2tO1mo3pKqSEJgQ4",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 12,
          "saveDc": 20,
          "spells": [
            {
              "id": "WJvVnvUyfIViZsXt",
              "name": "Caustic Blast",
              "rank": 1
            },
            {
              "id": "cem3FNDNWTlAkq33",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "ZGBfix130ONgAGws",
              "name": "Figment",
              "rank": 1
            },
            {
              "id": "pRsB70z9qLt0lPKK",
              "name": "Sigil",
              "rank": 1
            },
            {
              "id": "zNM9Rv68sDZDWe0s",
              "name": "Telekinetic Hand",
              "rank": 1
            },
            {
              "id": "dncx5Y8XLAqJaAVh",
              "name": "Dispel Magic",
              "rank": 3
            },
            {
              "id": "UxUeYsTDbo8noYkM",
              "name": "Unfettered Movement (Constant)",
              "rank": 4
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:trilobite-swarm",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "YKHMhYikhIUovuEE",
      "slug": "trilobite-swarm",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:92d730e97f177b2b1e1fe2bb043aa9772d77370e5a791d67d18fb7e1009638b7",
    "translatableHash": "sha256:543f1a724f3371a7101c29f29a735ca3badb90d970e8e9065a68a9f881180c5d",
    "data": {
      "schemaVersion": 1,
      "name": "Trilobite Swarm",
      "level": 3,
      "rarity": "common",
      "size": "large",
      "traits": [
        "animal",
        "aquatic",
        "swarm"
      ],
      "description": "Trilobites typically live in close proximity to others of their kind. On rare occasions, particularly when the most common prey around is larger than what a single trilobite can take down, they form swarms that seem to actively cooperate with each other. These swarms latch onto their prey, and the combined efforts of so many trilobites at once make escape difficult.\nOften overlooked as little more than water-dwelling pests, trilobites are a varied class of arthropods found throughout the seas and oceans of Golarion. So ancient and widespread are these critters that trilobite fossils are as commonly found as living specimens. Trilobites vary wildly in both size and diet, with the largest reaching up to 28 inches long. Fossil record shows that trilobites were even more diverse and prevalent in ancient times than they are today, but their species entered a decline due to the devastation of Earthfall.",
      "armorClass": 18,
      "hitPoints": 30,
      "speedFeet": 0,
      "perception": {
        "modifier": 9,
        "senses": [
          "darkvision",
          "wavesense-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 10,
        "reflex": 9,
        "will": 7
      },
      "abilities": {
        "str": 1,
        "dex": 4,
        "con": 3,
        "int": -5,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "athletics": 8,
        "stealth": 9,
        "survival": 7
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "swarm-mind",
          "precision"
        ],
        "resistances": [
          "bludgeoning 3",
          "piercing 3",
          "slashing 5"
        ],
        "weaknesses": [
          "area-damage 5",
          "splash-damage 5"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "EZUt9jWhavUO9GTH",
          "name": "Clinging Bites",
          "kind": "action",
          "description": "The trilobites in the swarm latch onto creatures and gnaw at them. Each enemy in the swarm's space takes 2d6[slashing|options:area-damage] damage (check (reflex, dc:18, basic, options:area-effect) save)."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:compsognathus-swarm",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "YlcQes9zcJUJSpby",
      "slug": "compsognathus-swarm",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:af37c2a64340eb20392415f9d3c6657882bfeaccd7e4b51a0acc7bd6519ae6dc",
    "translatableHash": "sha256:3dc9e3cbf3756d04237f16f711eb89780caa6e0209e6c1deeb8590a6b8b86c55",
    "data": {
      "schemaVersion": 1,
      "name": "Compsognathus Swarm",
      "level": 3,
      "rarity": "common",
      "size": "large",
      "traits": [
        "animal",
        "dinosaur",
        "swarm"
      ],
      "description": "Though a curious lone compsognathus is occasionally known to sneak into an adventurer's camp, they're often scouting from a nearby pack potentially containing dozens of the tiny bipedal dinosaurs. If the pack is threatened—especially near a nesting site—they'll scurry about in self-defense. Despite their large numbers, the swarm can dart away from danger quickly, and their gnashing teeth carry the threat of venom to anyone who comes too close.",
      "armorClass": 19,
      "hitPoints": 40,
      "speedFeet": 30,
      "perception": {
        "modifier": 9,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 8,
        "reflex": 12,
        "will": 7
      },
      "abilities": {
        "str": 2,
        "dex": 4,
        "con": 2,
        "int": 0,
        "wis": 1,
        "cha": 0
      },
      "skills": {
        "acrobatics": 8,
        "athletics": 9,
        "stealth": 10
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "grabbed",
          "precision",
          "prone",
          "restrained",
          "swarm-mind"
        ],
        "resistances": [
          "bludgeoning 2",
          "piercing 5",
          "slashing 5"
        ],
        "weaknesses": [
          "area-damage 5",
          "splash-damage 5"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "IVo5chxcA5byutUQ",
          "name": "Evade",
          "kind": "reaction",
          "description": "Trigger An adjacent enemy targets the swarm with a Strike\nEffect With quick movements, the swarm gains a +1 circumstance bonus to AC against the triggering attack. If the attack misses, the swarm can Stride up to 10 feet after the Strike."
        },
        {
          "id": "W9TOT5nLhz0Ge1nz",
          "name": "Compsognathus Venom",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:20)\nMaximum Duration 6 rounds\nStage 1 1d6[poison] damage and Enfeebled 1 (1 round)\nStage 2 1d8[poison] damage and enfeebled 1 (1 round)"
        },
        {
          "id": "naox4yFoOEDKHRs7",
          "name": "Venomous Bite",
          "kind": "action",
          "description": "Each enemy in the swarm's space takes 2d4[piercing] damage (check (reflex, dc:20, basic) save). A creature who fails the save is also exposed to compsognathus venom."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:aghash",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "2Uz8i4Q3xaECmemr",
      "slug": "aghash",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:977793a4ae2e188ba7729bb67328fee832e28d8bf76d16130c7112d2c60f49e9",
    "translatableHash": "sha256:4953da876c1ab2b6b9ee34c02bd53992638c9136d2d17894d820b6bb783d1754",
    "data": {
      "schemaVersion": 1,
      "name": "Aghash",
      "level": 4,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "div",
        "fiend",
        "unholy"
      ],
      "description": "Walking embodiments of curses, misfortune, and the evil eye, aghashes wander the deserts of the Material Plane, searching out the arrogant, charming, and persuasive to humiliate and undermine. Aghashes are often mistaken for some strange form of hag, and like those creatures, they're masters at curses.\nSome fiends want to tear down the multiverse; others dedicate themselves to creating chaos and carnage, or to rule over realms with an iron fist. Divs strive toward a different, if equally reprehensible, goal-they seek to thwart and ruin the schemes and works of mortal beings.\nLong ago, divs were once genies bound to serve ancient mortal empires lost to the passage of eons. In the beginning, these genies were masters of creation, working alongside gracious mortal partners to create works of subtle design and powerful magical potential. What started as a collaboration with mortals soon morphed into abuse, disrespect, and even slavery and bondage. Eventually, these genies rebelled, but in doing so, they came under the sway of a nihilistic demigod known as Ahriman. Their new master twisted their form and granted them the power to avenge themselves upon their mortal overlords, leading to the birth of the first divs.\nSince that first wave of corruption, new divs arise from the spirits of the most wicked and hateful genies who die on the Material Plane, or those truly betrayed by mortals and overcome through their desire for vengeance. Upon such a death, instead of returning to the Elemental Planes, these genies' spirits are trapped in the dread orbit of Abaddon, where Ahriman reshapes them as divs and hoists them back to the world to wreak vengeance upon mortals.",
      "armorClass": 19,
      "hitPoints": 75,
      "speedFeet": 25,
      "perception": {
        "modifier": 12,
        "senses": [
          "greater-darkvision"
        ]
      },
      "saves": {
        "fortitude": 9,
        "reflex": 10,
        "will": 12
      },
      "abilities": {
        "str": 3,
        "dex": 4,
        "con": 3,
        "int": 1,
        "wis": 2,
        "cha": 4
      },
      "skills": {
        "arcana": 9,
        "athletics": 8,
        "deception": 12,
        "intimidation": 12,
        "religion": 10,
        "stealth": 10
      },
      "languages": [
        "common",
        "daemonic"
      ],
      "defenses": {
        "immunities": [
          "curse"
        ],
        "resistances": [],
        "weaknesses": [
          "cold-iron 5",
          "holy 5"
        ]
      },
      "attacks": [
        {
          "id": "O7GCOmC1ewn8Hglr",
          "name": "Claw",
          "bonus": 14,
          "damage": "2d6+5 slashing",
          "traits": [
            "agile",
            "finesse",
            "magical",
            "unarmed",
            "unholy"
          ]
        }
      ],
      "actions": [
        {
          "id": "yezOfr9Fm5QvPWFW",
          "name": "Telepathy 100 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "zaD6IUn59EF4mqzi",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "6SDloGsttpr7ZAJq",
          "name": "Hatred of Beauty",
          "kind": "passive",
          "description": "While aghashes hate all mortals, they particularly despise beautiful objects and beautiful or charismatic mortals. When not in physical peril, an aghash is compelled to destroy art and other works of beauty. An aghash can't enter an area of pristine beauty without first marring it in some way.\nGiven a choice, an aghash attacks a foe with the highest Charisma score first. If barred from doing so by force or some magical effect, they take 1d6[mental] damage at the end of their turn."
        },
        {
          "id": "4SUjs1Fnnil2m2Qt",
          "name": "Cursed Gaze",
          "kind": "action",
          "description": "The aghash fixes their gaze on one creature they can see within 20 feet. The creature must attempt a check (will, dc:21, options:damaging-effect,inflicts:frightened,inflicts:stunned) save.\nCritical Success The creature is unaffected.\nSuccess The creature takes 2d6[mental] damage and becomes Frightened 1.\nFailure The creature takes 4d6[mental] damage and becomes either Frightened 2 or Stunned 1 (the aghash's choice).\nCritical Failure The creature takes 8d6[mental] damage and becomes Frightened 2 and Stunned 2."
        },
        {
          "id": "Fil9NBsfO3iADreb",
          "name": "Sandstorm",
          "kind": "action",
          "description": "Frequency once per day\nEffect The aghash creates a temporary sandstorm in a @Template[emanation|distance:30] that lasts for 1 minute.\nCreatures within the emanation take a –4 circumstance penalty to Perception checks and must succeed at a check (fortitude, dc:18, options:area-effect) save. On a failure, they're forced to hold their breath or else they start suffocating. A creature within the sandstorm at the end of its turn takes 1d6[slashing|options:area-damage] damage.\nDivs are immune to all effects of an aghash's sandstorm.\nEffect: Sandstorm"
        }
      ],
      "spellcasting": [
        {
          "id": "SVucgTqH9TEpdPX4",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 13,
          "saveDc": 21,
          "spells": [
            {
              "id": "2FXH97gWlmUYljkA",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "6S6IDhHyRogz5bB7",
              "name": "Illusory Object (At Will)",
              "rank": 1
            },
            {
              "id": "tx21vhxchyBGHxOD",
              "name": "Stupefy (At Will)",
              "rank": 2
            },
            {
              "id": "aUIiROaFGajERdiy",
              "name": "Outcast's Curse",
              "rank": 4
            },
            {
              "id": "YpBk5Vs8jI5dJEp6",
              "name": "Translocate",
              "rank": 4
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:tripkee-rain-caller",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "32rUvutdQbGfF7mw",
      "slug": "tripkee-rain-caller",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:16b5629688ce5f395390be748f4b0149f521a4a2824264585ff0a2479427e9c3",
    "translatableHash": "sha256:40be3db977c7d803a32debd1149bbc728f0ab408dee6b8c5a0d6afadfbdbc06f",
    "data": {
      "schemaVersion": 1,
      "name": "Tripkee Rain-Caller",
      "level": 4,
      "rarity": "common",
      "size": "small",
      "traits": [
        "humanoid",
        "tripkee"
      ],
      "description": "Influential within their communities, these wise druids hold power over water and weather.\nTripkees make their homes in the treetops of jungles and forests. These frog-like humanoids are uniquely adapted to their environment, with oversized eyes that give them keen vision in both light and dark and large toes that allow them to easily scale trees. Tripkees vary widely in physical appearance, with their physiologies influenced by their surrounding environment. Typical tripkees stand just over 2 feet tall and weigh approximately 30 pounds.\nWhatever region they come from, tripkees tend to be peaceful hunter-gatherers. They cultivate mushroom patches and gather a wide array of fruits from the surrounding wilderness.\nA History of Neutrality\nTripkee villages rarely get involved in the conflicts of other communities despite various trade-based alliances, preferring to focus on maintaining relative peace within their own small societies. Legends explain this attitude with a tale of a tripkee champion who dragged his people into a war between humans and charau-ka. The stories differ as to which side the tripkees took, but every version ends with the bloody deaths of the hero and his family. Since that time, village elders claim, tripkees have done their best to remain far from the conflicts of others.",
      "armorClass": 20,
      "hitPoints": 60,
      "speedFeet": 25,
      "perception": {
        "modifier": 12,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 8,
        "reflex": 11,
        "will": 14
      },
      "abilities": {
        "str": 1,
        "dex": 3,
        "con": 2,
        "int": 1,
        "wis": 5,
        "cha": 0
      },
      "skills": {
        "acrobatics": 10,
        "athletics": 8,
        "nature": 12,
        "stealth": 10,
        "survival": 12
      },
      "languages": [
        "common",
        "tripkee"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "05tOSEuJDQ6Tw0Y7",
          "name": "Staff",
          "bonus": 9,
          "damage": "1d4+4 bludgeoning",
          "traits": [
            "monk",
            "two-hand-d8"
          ]
        },
        {
          "id": "U8poIRoGS7Mx2e5i",
          "name": "Dart",
          "bonus": 12,
          "damage": "1d4+4 piercing",
          "traits": [
            "agile",
            "thrown-20"
          ]
        }
      ],
      "actions": [
        {
          "id": "Bd9CBKfMnxtkTYbl",
          "name": "Jungle Passage",
          "kind": "passive",
          "description": "Tripkees ignore difficult terrain in forests and jungles."
        }
      ],
      "spellcasting": [
        {
          "id": "atBfRh1OTzU7Np3b",
          "name": "Primal Prepared Spells",
          "tradition": "primal",
          "category": "prepared",
          "attackModifier": 14,
          "saveDc": 21,
          "spells": [
            {
              "id": "UOLbfPsF1lyGr8I5",
              "name": "Electric Arc",
              "rank": 1
            },
            {
              "id": "njiN3dJmMFGCdhLj",
              "name": "Guidance",
              "rank": 1
            },
            {
              "id": "HFEuSqkGlI6DAXer",
              "name": "Gust of Wind",
              "rank": 1
            },
            {
              "id": "o7kZQ32k6qHncX19",
              "name": "Hydraulic Push",
              "rank": 1
            },
            {
              "id": "dOwtgYcCbvCX3SMK",
              "name": "Know the Way",
              "rank": 1
            },
            {
              "id": "6Wp8RMCa46cQuyft",
              "name": "Stabilize",
              "rank": 1
            },
            {
              "id": "0pJJh57Bc4CaWYkj",
              "name": "Thunderstrike",
              "rank": 1
            },
            {
              "id": "F1EIsdZgknjbcPHH",
              "name": "Mist",
              "rank": 2
            },
            {
              "id": "x6LTIbLWjipCxkME",
              "name": "Summon Elemental",
              "rank": 2
            },
            {
              "id": "0b39au9GYqFXuCOJ",
              "name": "Water Walk",
              "rank": 2
            }
          ]
        },
        {
          "id": "wtXTeESrlSpJSRDR",
          "name": "Primal Focus Spells",
          "tradition": "primal",
          "category": "focus",
          "attackModifier": 14,
          "saveDc": 21,
          "spells": [
            {
              "id": "ehYwQ4jf8yzXtwKN",
              "name": "Tempest Surge",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:giant-dragonfly",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "8abNns0wcbPMYpRD",
      "slug": "giant-dragonfly",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:b237484fa7e21c5543da4115f1379731d7998fd883651d4a6e198b0fc3b0be77",
    "translatableHash": "sha256:d22bb9be8f579b9fcc35300378564d4e69b5edd8c2ebb006f88bc2505b59fa3c",
    "data": {
      "schemaVersion": 1,
      "name": "Giant Dragonfly",
      "level": 4,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "animal"
      ],
      "description": "These buzzing insects are the size of a small horse. They're ambush predators that hunt beasts and humanoids alike, capable of using impressive aerial acrobatics to swoop down from above and snatch away their prey.\nDragonflies hunt with a combination of agile power and deadly speed. In early life stages, these insects are entirely aquatic predators, but they take to the air once they've molted. Most live around bodies of water suitable for spawning, but giant dragonflies have been known to fly many miles while on the hunt. Though their gossamer wings and colorful bodies are beautiful at first glance, an unwary adventurer lured in by the display runs a very real risk of becoming lunch.",
      "armorClass": 21,
      "hitPoints": 60,
      "speedFeet": 20,
      "perception": {
        "modifier": 11,
        "senses": [
          "darkvision",
          "wavesense-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 12,
        "reflex": 14,
        "will": 9
      },
      "abilities": {
        "str": 4,
        "dex": 4,
        "con": 2,
        "int": -5,
        "wis": 3,
        "cha": 0
      },
      "skills": {
        "acrobatics": 10,
        "athletics": 10,
        "stealth": 12
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "g08yjNSGB6N4Y6gH",
          "name": "Mandibles",
          "bonus": 14,
          "damage": "1d12+7 piercing",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "9UVYbaiPrkOsTejQ",
          "name": "Clutch",
          "kind": "action",
          "description": "Requirements The giant dragonfly has a Medium or smaller creature Grabbed in its mandibles\nEffect The dragonfly tries to transfer the grabbed creature to be clutched by its legs. The giant dragonfly attempts an Athletics check against the creature's Reflex DC. On a success, it transfers the creature (which remains grabbed) to its legs, freeing its mandibles to attack. The dragonfly can have only one creature clutched at a time."
        },
        {
          "id": "gL5RP6ncmCIa9THY",
          "name": "Snatch",
          "kind": "passive",
          "description": "The giant dragonfly can Fly at half Speed while it has a creature Grabbed or Restrained by Clutch, carrying that creature along with it."
        },
        {
          "id": "jpTxpH3Udn41KAVo",
          "name": "Swoop",
          "kind": "action",
          "description": "The giant dragonfly Flies up to its Speed and makes one mandible Strike at any point during that movement."
        },
        {
          "id": "3h0MQaT8UB9CbN0a",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:ovinnik",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "8uUkBJlMvKlJWtKx",
      "slug": "ovinnik",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:2cc843b29ff32de09ab89a6b712de7c32a2769ee1db9a7937378ead99390748b",
    "translatableHash": "sha256:3caefa7577caadeb8d320e90fb9fea55b225d33a447ef7eab7094b6c5f683652",
    "data": {
      "schemaVersion": 1,
      "name": "Ovinnik",
      "level": 4,
      "rarity": "common",
      "size": "tiny",
      "traits": [
        "fey"
      ],
      "description": "The ovinnik is the most ferocious of house spirits, and the only one that will kill if sufficiently angered. They live in granaries, storage rooms, and sheds where food—particularly grain—is kept. Ovinniks resemble bipedal cats but bark like a dog to scare away thieves, and they often demand gifts of milk, pancakes, and dead roosters.\nHouse spirits are shy, often helpful, sometimes wrathful fey who dwell alongside peasants and farmers. They reside in the house, the yard, the granary, the bathhouse—wherever people build and live. Due to this proximity, house spirits often take on the mannerisms or appearance of nearby mortals. Their reclusive nature and tendency to go unseen earned them the moniker of \"spirits,\" though in truth they're fully embodied fey.\nHouse spirits take an almost parental interest in \"their\" mortals. Given proper respect, these fey work tirelessly for their charges—they chop wood, care for livestock, mend clothes, sweep the floor, and tend to the stove. If offended, though, the house spirit becomes a menace, frightening animals or children and ruining belongings.",
      "armorClass": 20,
      "hitPoints": 60,
      "speedFeet": 30,
      "perception": {
        "modifier": 14,
        "senses": []
      },
      "saves": {
        "fortitude": 8,
        "reflex": 13,
        "will": 11
      },
      "abilities": {
        "str": 0,
        "dex": 5,
        "con": 0,
        "int": 2,
        "wis": 5,
        "cha": 3
      },
      "skills": {
        "intimidation": 11,
        "stealth": 13
      },
      "languages": [
        "common",
        "fey"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "fire 5"
        ],
        "weaknesses": [
          "cold-iron 5"
        ]
      },
      "attacks": [
        {
          "id": "NOQVWNsBNdZRkqa5",
          "name": "Claw",
          "bonus": 13,
          "damage": "2d6+3 slashing",
          "traits": [
            "agile",
            "finesse",
            "magical"
          ]
        }
      ],
      "actions": [
        {
          "id": "0O6xxfBBGCRGHu1v",
          "name": "Tremorsense (Imprecise) within their entire bound granary or storeroom",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "VbANKIcBQPKu5ZhJ",
          "name": "Master of the Granary",
          "kind": "passive",
          "description": "A home with a friendly ovinnik is blessed, as the ovinnik preserves food from vermin and mold.\nA home so blessed never suffers from random accidents such as fires, and any checks to Craft, Earn Income, Repair, or Subsist in the home receive a +2 circumstance bonus. If the ovinnik is unfriendly, such checks take a -2 circumstance penalty instead, as the ovinnik causes devastating fires and infestations\nAn ovinnik must spend a week in a place before these benefits occur."
        },
        {
          "id": "RO0Vd0kH4JEMKMvO",
          "name": "Shy",
          "kind": "passive",
          "description": "An ovinnik is naturally Invisible while within sight of their bound home. The ovinnik can become visible, or even selectively visible-allowing some people to see them."
        },
        {
          "id": "w1jeYgAQKXrE8wCs",
          "name": "Raise Grain Cloud",
          "kind": "action",
          "description": "While in their bound storeroom or granary, the ovinnik slams a paw against the ground, stirring up a cloud of grain dust in an @Template[emanation|distance:20].\nWithin this cloud, they gain a +4 status bonus to any fire damage they deal. The ovinnik doubles their fire resistance against this increased damage. The grain cloud dissipates after the first such effect or after 1 minute if no such effects occur."
        }
      ],
      "spellcasting": [
        {
          "id": "02USg3Y9IEmlIxnn",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 13,
          "saveDc": 21,
          "spells": [
            {
              "id": "kKJfqvyeuaJY3F2B",
              "name": "Cleanse Cuisine (At Will)",
              "rank": 1
            },
            {
              "id": "nKyYqxJVjfaWcp3S",
              "name": "Daze",
              "rank": 1
            },
            {
              "id": "GZWlxsdMlQTPH5fd",
              "name": "Ignition",
              "rank": 1
            },
            {
              "id": "sTy0Pey96rLs5ISb",
              "name": "Augury",
              "rank": 2
            },
            {
              "id": "exAboMpWhZkExwWX",
              "name": "Breathe Fire",
              "rank": 2
            },
            {
              "id": "McPdEsZt0sO4BRXs",
              "name": "Floating Flame",
              "rank": 2
            },
            {
              "id": "6PvZhm2r2ZufT11U",
              "name": "Read Omens",
              "rank": 4
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:nucol",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "ANptV6ltBi9C3P1l",
      "slug": "nucol",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:fca94b58f8d14d16dfad5508d3a7eb4dd3becc8dea9aa14c5092f28760733ec7",
    "translatableHash": "sha256:bae10be9452c76d5b75d4b25e368fd43bf913302a7c04fb9b479f87ebfb9ede5",
    "data": {
      "schemaVersion": 1,
      "name": "Nucol",
      "level": 4,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "fiend",
        "sahkil",
        "unholy"
      ],
      "description": "Representing the fear of parasites and affliction, nucols appear as violent, pestilence-ridden boars. They pollute their victim's body and mind, spreading not only fear but a mind-altering affliction that exacerbates feelings of self-doubt.\nThough very aggressive, the fiends are capable of cunning manipulation. After they infect a victim with potent insecurity, they'll offer to remove the affliction for a price. Many of these deals are esoteric in nature, driving the victim into despair and forcing them to give up things they cherish. The sinister nucol may even reinfect its victim after completing the bargain, but a canny negotiator may be able to turn the tables on the fiend and free themselves from its grasp.\nAges ago, when this cycle of the multiverse was still adolescent, a cabal of psychopomps who already felt bored and restrained in their role of ushering souls to their ultimate resting place rebelled against their station. It was this corruption of the cycle of souls that spawned the first sahkils.\nAmbivalent to the prescribed order of the multiverse and spiteful of mortals, sahkils delight in spreading fear and unease to all beings, clogging up the metaphysical cycle with anxiety-ridden mortals too scared to achieve their potential. These fiends have drastically changed from their dedicated psychopomp predecessors. They are creatures of spite and torment, fear and disgust. They exploit the most common and rare fears for their own perverse satisfaction, and they want nothing more than to frighten mortals and make them quetion their reason for existence.\nMost sahkils lurk on the Ethereal Plane, but they frequently invade the Material Plane to torment mortals and spread terror. They use their innate ability to slip between the veils of the Ethereal and Material effortlessly, often stalking their targets for days or weeks before enacting their devious plots.",
      "armorClass": 20,
      "hitPoints": 75,
      "speedFeet": 30,
      "perception": {
        "modifier": 11,
        "senses": [
          "darkvision",
          "scent-imprecise-100"
        ]
      },
      "saves": {
        "fortitude": 13,
        "reflex": 10,
        "will": 11
      },
      "abilities": {
        "str": 4,
        "dex": 2,
        "con": 3,
        "int": 0,
        "wis": 3,
        "cha": 2
      },
      "skills": {
        "athletics": 12,
        "deception": 10,
        "intimidation": 12,
        "stealth": 10
      },
      "languages": [
        "chthonian",
        "diabolic",
        "empyrean",
        "requian"
      ],
      "defenses": {
        "immunities": [
          "disease",
          "fear-effects"
        ],
        "resistances": [
          "poison 5"
        ],
        "weaknesses": [
          "holy 5"
        ]
      },
      "attacks": [
        {
          "id": "qkU2EydXIrYI5Hxx",
          "name": "Tusk",
          "bonus": 12,
          "damage": "2d8+6 piercing; 1d4 spirit",
          "traits": [
            "deadly-d10",
            "unarmed",
            "unholy"
          ]
        }
      ],
      "actions": [
        {
          "id": "camhma5bLfsIQr7R",
          "name": "Telepathy 60 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "Ycopi6QWkxh3DeYu",
          "name": "Easy to Call",
          "kind": "passive",
          "description": "A nucol's level is considered 2 lower for the purpose of being conjured by the Binding Circle ritual (and potentially other rituals, at the GM's discretion), but it is always free to attack or leave instead of negotiate unless the primary caster's check is a critical success."
        },
        {
          "id": "zPSlJozXBmZIdCsT",
          "name": "Nervous Consumption",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:21)\nOnset 1 minute\nStage 1 Sickened 1 and Stupefied 1 (1 day)\nStage 2 Clumsy 1 and Stupefied 2 (1 day)\nStage 3 Clumsy 2 and Stupefied 3 (1 day)"
        },
        {
          "id": "pKpXpiLPYdr4VX46",
          "name": "Skip Between",
          "kind": "action",
          "description": "The sahkil moves from the Universe to the Ethereal Plane or vice-versa. While in the Ethereal Plane, they're unable to affect anything in the Universe, and they cannot be seen by beings or abilities in the Universe, unless these have an ability that can gaze into the Ethereal Plane. While on the Material Plane the inverse is true for anything on the Ethereal Plane. A summoned sahkil can't use Skip Between."
        },
        {
          "id": "Js5HPgVs02JYjPwr",
          "name": "Spray Pus",
          "kind": "action",
          "description": "The nucol flexes one of its infected wounds, releasing a spray of pus in a @Template[cone|distance:15] or targeting an individual creature within 30 feet. A creature targeted or in the area is exposed to nervous consumption."
        }
      ],
      "spellcasting": [
        {
          "id": "sGASuiT2DzsMvSIa",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 12,
          "saveDc": 20,
          "spells": [
            {
              "id": "OvTg9O3NCAhdlCov",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "BzJP6b7vvcRRQfy4",
              "name": "Grease",
              "rank": 1
            },
            {
              "id": "2cooplHjjbGB8kad",
              "name": "Telekinetic Hand",
              "rank": 1
            },
            {
              "id": "pewgqQtF4G0xBhBy",
              "name": "Cleanse Affliction",
              "rank": 3
            },
            {
              "id": "NvpYNQuuDExXM5pd",
              "name": "Fear (At Will)",
              "rank": 3
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:hermit-crab-swarm",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "AWEclumj1PE4LrVR",
      "slug": "hermit-crab-swarm",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:81b4071e08723a8e350f9461b34f4ce70767db7528171e075d10bbee7516a672",
    "translatableHash": "sha256:650db2e0431679fa1f6149c16c75bd5f351ec1dd935dec30182974d4b7b11951",
    "data": {
      "schemaVersion": 1,
      "name": "Hermit Crab Swarm",
      "level": 4,
      "rarity": "common",
      "size": "large",
      "traits": [
        "amphibious",
        "animal",
        "swarm"
      ],
      "description": "When hermit crabs find a shell that is too large, they lie in wait for others to arrive and move into the shell, abandoning a possible replacement. This can form a large chain of queuing crabs waiting to upgrade their shells. Interruptions can aggravate the crabs, resulting in attacks against the unfortunate source of disruption.\nHermit crabs have hard exoskeletons like other crabs, but with much weaker abdomens. They find and \"wear\" shells as homes and protection, getting around with their front legs and claws. Surprisingly fierce, hermit crabs fight for new shells as they grow bigger, using an assortment of hollow alternatives as substitutes when shells of the right size can't be found.",
      "armorClass": 20,
      "hitPoints": 42,
      "speedFeet": 30,
      "perception": {
        "modifier": 11,
        "senses": [
          "darkvision",
          "tremorsense-imprecise-15"
        ]
      },
      "saves": {
        "fortitude": 13,
        "reflex": 10,
        "will": 7
      },
      "abilities": {
        "str": 4,
        "dex": 2,
        "con": 3,
        "int": -4,
        "wis": 1,
        "cha": -1
      },
      "skills": {
        "athletics": 12
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "precision",
          "swarm-mind"
        ],
        "resistances": [
          "piercing 5",
          "slashing 5"
        ],
        "weaknesses": [
          "area-damage 5",
          "splash-damage 5"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "zNYXcSmgZ8w8pTTE",
          "name": "Tremorsense (Imprecise) 15 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "bYiotnUBfPu81i3V",
          "name": "Swarm Mind",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "RGJbS9RTIb1LL5uF",
          "name": "Swarming Snips",
          "kind": "action",
          "description": "Each enemy in the swarm's space takes 2d8[piercing] damage (check (reflex, dc:20, basic) save).\nCreatures that fail this save also take 1d4[bleed]."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:ice-troll",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "dmg1WSBW5eWktUYc",
      "slug": "ice-troll",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:1b92b3d65c596b433456333dc4eb7520785b621bf151b9a439f884a270a91656",
    "translatableHash": "sha256:eef82a9b43ea3bff48613711415005521d2602fcd4c0109b94536759da371369",
    "data": {
      "schemaVersion": 1,
      "name": "Ice Troll",
      "level": 4,
      "rarity": "common",
      "size": "large",
      "traits": [
        "cold",
        "giant",
        "humanoid",
        "troll"
      ],
      "description": "Ice trolls are nightmarish frozen monsters of rime-stained claws and hoarfrost teeth who haunt glaciers, mountains, and tundras. Their unceasing hunger drives them to pursue elk herds, seal colonies, and human villages. Ones that regenerate while sealed within ice floes or permafrost can be birthed from the ice during a thaw after being trapped for months, years, or even decades of unceasing hunger before they can finally break free.\nTowering brutes with slavering jaws and razor-sharp claws, trolls are voracious predators. A connection to the land not only rebuilds their bodies but creates countless varieties of trolls, each a reflection of the terrain that they draw upon. Trolls who migrate into new areas slowly transform as each body part is regenerated, leading to aberrant growth as new flesh tangles with the old.",
      "armorClass": 19,
      "hitPoints": 90,
      "speedFeet": 30,
      "perception": {
        "modifier": 10,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 13,
        "reflex": 10,
        "will": 8
      },
      "abilities": {
        "str": 5,
        "dex": 2,
        "con": 5,
        "int": -2,
        "wis": 2,
        "cha": -2
      },
      "skills": {
        "athletics": 10,
        "intimidation": 10,
        "survival": 10
      },
      "languages": [
        "jotun"
      ],
      "defenses": {
        "immunities": [
          "cold"
        ],
        "resistances": [],
        "weaknesses": [
          "fire 10",
          "sonic 10"
        ]
      },
      "attacks": [
        {
          "id": "PeuxydslYb8eqqpz",
          "name": "Hatchet",
          "bonus": 13,
          "damage": "2d6+5 slashing",
          "traits": [
            "agile",
            "reach-10",
            "sweep"
          ]
        },
        {
          "id": "zUS6l7Jx5AawByaR",
          "name": "Hatchet",
          "bonus": 10,
          "damage": "2d6+5 slashing",
          "traits": [
            "agile",
            "sweep",
            "thrown-10"
          ]
        },
        {
          "id": "X4uBV5QkBlv1Sf8d",
          "name": "Jaws",
          "bonus": 13,
          "damage": "2d8+5 piercing",
          "traits": [
            "reach-10"
          ]
        },
        {
          "id": "L522mmnRn0K7jJWM",
          "name": "Claw",
          "bonus": 13,
          "damage": "2d4+5 slashing",
          "traits": [
            "agile",
            "reach-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "GgMmCRSpX3hmy7hm",
          "name": "Easily Misled",
          "kind": "passive",
          "description": "The ice troll takes a –4 circumstance penalty to their Perception DC against Deception checks."
        },
        {
          "id": "M0Bc0PX8yTuyeWAo",
          "name": "Regeneration 15 (Deactivated by Fire or Sonic)",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "9Y6fCEjUH3AmyRYs",
          "name": "Furious Carve",
          "kind": "reaction",
          "description": "Trigger The ice troll takes fire or sonic damage\nEffect The troll makes a hatchet or claw Strike against a random creature within reach. If the ice troll has persistent fire damage, they attempt a check (flat, dc:15) to remove it."
        },
        {
          "id": "szMtFeHWIvnzvaDT",
          "name": "Brutal Sweep",
          "kind": "action",
          "description": "Requirements The ice troll is wielding a hatchet\nEffect The troll sweeps their hatchet in a large arc, dealing 3d6[slashing|options:area-damage] damage to all creatures in a @Template[type:emanation|distance:5] (check (reflex, dc:18, basic, options:area-effect) save)."
        },
        {
          "id": "qCpzPNIMm9QsJlk1",
          "name": "Ice Passage",
          "kind": "passive",
          "description": "An ice troll isn't impeded by difficult terrain caused by snow or ice, nor do they need to attempt Acrobatics checks to keep from falling on slippery ice."
        },
        {
          "id": "DZ5mVWwcnHJwHQbp",
          "name": "Rend",
          "kind": "action",
          "description": "Claw"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:gobmob-snake",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "fVDZrH3I8SSM6wRq",
      "slug": "gobmob-snake",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:95d4ed96c63de210ddb66cbc475826cca5099dc842ad0faf58d4fc50166b08e1",
    "translatableHash": "sha256:da51221a157e5ad1b9bc06b44a8b9af88e1db7996428ee55d856c134406ba8fa",
    "data": {
      "schemaVersion": 1,
      "name": "Gobmob Snake",
      "level": 4,
      "rarity": "uncommon",
      "size": "medium",
      "traits": [
        "aberration",
        "goblin",
        "mutant"
      ],
      "description": "These bizarre mutant goblin snakes possess no fewer than three heads.\nA goblin snake is a foul-smelling serpentine creature covered in greasy black scales and sporting a fanged, lipless head resembling that of a goblin.",
      "armorClass": 21,
      "hitPoints": 60,
      "speedFeet": 25,
      "perception": {
        "modifier": 10,
        "senses": [
          "darkvision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 12,
        "reflex": 13,
        "will": 8
      },
      "abilities": {
        "str": 3,
        "dex": 5,
        "con": 2,
        "int": -2,
        "wis": 1,
        "cha": 2
      },
      "skills": {
        "acrobatics": 12,
        "athletics": 10,
        "intimidation": 9,
        "stealth": 12,
        "survival": 8
      },
      "languages": [
        "common",
        "goblin"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "5OmdrHTGaWLTty7t",
          "name": "Fangs",
          "bonus": 14,
          "damage": "2d6+5 piercing",
          "traits": [
            "finesse",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "SZ8sAKldxzLKYIti",
          "name": "Snake Empathy",
          "kind": "passive",
          "description": "A gobmob snake can communicate with snakes."
        },
        {
          "id": "p9XiybGymA4tg01N",
          "name": "Coiled Strike",
          "kind": "reaction",
          "description": "As Reactive Strike, but the gobmob snake can use this reaction only if it's Coiled."
        },
        {
          "id": "zKqGThMJiWNzcGL4",
          "name": "Incessant Yammering",
          "kind": "passive",
          "description": "15 feet.\nA gobmob snake's heads constantly bicker and snipe at one another, annoying and distracting anyone nearby. Each non-goblin creature that begins its turn in the aura must attempt a check (will, dc:21, options:area-effect) save. On a failure, it takes a –1 status penalty to Perception checks and Will saves for 1 round. On a success, it is temporarily immune for 1 minute.\nEffect: Incessant Yammering"
        },
        {
          "id": "faPphSAlwe9IY2Il",
          "name": "Infighting",
          "kind": "passive",
          "description": "Whenever a gobmob snake critically fails at an attack roll or skill check, it must succeed at a check (flat, dc:5) or become Slowed 1 as its heads argue over which of them is to blame. An enemy can provoke an argument by attempting a check (deception, dc:20, traits:auditory,concentrate,linguistic,mental) check as a single action with the auditory, concentrate, linguistic, and mental traits."
        },
        {
          "id": "xFNPutNsLaLzFEdr",
          "name": "Coil",
          "kind": "action",
          "description": "The gobmob snake uses an action to coil itself, increasing its reach with its fangs from 5 to 10 feet. After the gobmob snake Strikes with its fangs, it becomes uncoiled."
        },
        {
          "id": "ZtiaPGYU12BviKY1",
          "name": "Goblin Breath",
          "kind": "action",
          "description": "The gobmob snake belches a cloud of nauseating vapor in a @Template[type:cone|distance:15]. Non-goblin creatures within the cloud must succeed at a check (fortitude, dc:20, options:area-effect,inflicts:sickened,inflicts:slowed) save or become Sickened 1. On a critical failure, a creature is also Slowed 1 for as long as it is sickened. Creatures that successfully save are immune for 24 hours. The gobmob snake can't use Goblin Breath again for [[/gmr 1d4 #Recharge Goblin Breath]]{1d4 rounds}."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:nightgaunt",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "g6sgRVXnvpjkl2KV",
      "slug": "nightgaunt",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:9ff52cff4914202d57a57089c471b72dbab04a201890f8b0774dc6c14410f734",
    "translatableHash": "sha256:3c50887737b8fef43063553df218dac7f996acb6c23a8c5d5bd85a60bc845e90",
    "data": {
      "schemaVersion": 1,
      "name": "Nightgaunt",
      "level": 4,
      "rarity": "uncommon",
      "size": "medium",
      "traits": [
        "aberration",
        "dream"
      ],
      "description": "Nightgaunts lurk in dreams, lying in wait to spirit away the unwary dreamer. Once connected to such a being, the nightgaunt feeds upon the mortal's emotions before abandoning them—often in a place they might never wake from.\nA nightgaunt appears as a bony humanoid with inky black skin, batlike wings, a long sinuous tail, and demonic horns atop a head that lacks any face or features. Most nightgaunts have little interest in anything other than sating their hunger for emotions. They find the art of inducing nightmares to be a surefire way to feast, but they're even more adept at tormenting their victims through tickling while carrying them at precarious heights.\nNightgaunts often gather in vast colonies in the Dreamlands, where they entertain each other by sharing emotion memories of their meals through strange caresses. These colonies pose great danger to any adventurer foolish enough to approach.\nWhen conjured forth into other worlds, they serve only grudgingly, often working equally as hard to find a way to escape servitude and feed on their conjurer's emotions as they do on the task they've been compelled to perform.",
      "armorClass": 21,
      "hitPoints": 60,
      "speedFeet": 25,
      "perception": {
        "modifier": 10,
        "senses": [
          "darkvision",
          "thoughtsense-60"
        ]
      },
      "saves": {
        "fortitude": 10,
        "reflex": 13,
        "will": 10
      },
      "abilities": {
        "str": 5,
        "dex": 3,
        "con": 2,
        "int": -2,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "acrobatics": 11,
        "athletics": 13,
        "stealth": 11
      },
      "languages": [
        "aklo"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "cold 5"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "XqjbxnxA89sOEKAK",
          "name": "Claw",
          "bonus": 12,
          "damage": "2d6+7 slashing",
          "traits": [
            "agile",
            "unarmed"
          ]
        },
        {
          "id": "erIKrXEzR8ADuFq8",
          "name": "Tail",
          "bonus": 12,
          "damage": "",
          "traits": [
            "agile",
            "reach-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "BKsoNNVMI5d9mEhL",
          "name": "All-Around Vision",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "oGImpwgKAU80AN98",
          "name": "Faceless",
          "kind": "passive",
          "description": "The nightgaunt has no face, but it can still see in all directions as if its entire body were an eye. It has no need to breathe, and it is immune to all inhaled toxins and other olfactory effects."
        },
        {
          "id": "QpQyzLRNIQtleDoP",
          "name": "Reactive Strike (Tail Only)",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "pGQDgZ3Sme2JsoNm",
          "name": "Clutches",
          "kind": "passive",
          "description": "A nightgaunt can Fly at full Speed while it has a Medium or smaller creature Grabbed or Restrained in its claws, carrying that creature along with it."
        },
        {
          "id": "1i0yksL3nMzWjZLz",
          "name": "Tickle",
          "kind": "passive",
          "description": "The nightgaunt can use its tail to tickle a foe with horrible efficiency. A creature hit by its tail Strike must attempt a check (fortitude, dc:21) save; if the creature is Grabbed by the nightgaunt, it uses the outcome one degree of success worse than the result it rolled.\nCritical Success The creature is unaffected and is temporarily immune for 1 minute.\nSuccess The creature is overcome with laughter and can't perform reactions for 1 round.\nFailure As success, and the creature is Sickened 1.\nCritical Failure As success, and the creature is Sickened 2 and can't speak for 1 round."
        },
        {
          "id": "SCdOmfDx0YWFglrg",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:lovelorn",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "H2awmVR3ENs0VeYg",
      "slug": "lovelorn",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:88bdfc68977094362c7288fb81f241cbb4a61a668bf3fc3277d6a5323e224ae0",
    "translatableHash": "sha256:2f4953f4a847870d8993dc1076ab7cffe4be29229b5de705bb3333a29e47d668",
    "data": {
      "schemaVersion": 1,
      "name": "Lovelorn",
      "level": 4,
      "rarity": "uncommon",
      "size": "tiny",
      "traits": [
        "undead",
        "unholy"
      ],
      "description": "A particularly macabre form of undead, these spiderlike creatures resemble still-beating hearts with rib bones for legs and tendrils of gore dangling beneath. Their twisted forms hint at their ghastly origin, as these undead form from those who die tragic deaths in service to toxic love: star-crossed lovers who die rather than accept a life apart from one another, rejected suitors whose unrequited affections warp into malice, and other victims of tragic relationships both romantic and otherwise. Any of these might spawn a lovelorn in death, their anguish and fixation on their broken heart causing the organ to animate.\nA freshly spawned lovelorn often seeks out those it knew in life, stalking and tormenting them or, in some cases, those around them. In undeath, they gain an understanding of emotions and how to manipulate them, cultivating the misery, anger, and cruelty they thrive upon. Typically, these undead long to enact vengeance upon those they feel drove them to their tragic fates, although in rare cases they may instead act as dark guardians, fixating on a particular loved one and \"protecting\" them by visiting misery upon anyone who slights them.",
      "armorClass": 21,
      "hitPoints": 60,
      "speedFeet": 25,
      "perception": {
        "modifier": 10,
        "senses": [
          "darkvision",
          "lifesense-30"
        ]
      },
      "saves": {
        "fortitude": 9,
        "reflex": 13,
        "will": 12
      },
      "abilities": {
        "str": 4,
        "dex": 5,
        "con": 3,
        "int": -2,
        "wis": 2,
        "cha": 3
      },
      "skills": {
        "athletics": 11,
        "occultism": 8,
        "stealth": 13
      },
      "languages": [
        "common"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "death-effects",
          "disease",
          "mental",
          "paralyzed",
          "poison",
          "unconscious"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "Xlnd5wqyTUYU18hD",
          "name": "Fangs",
          "bonus": 13,
          "damage": "1d6+6 piercing; 1d6 bleed",
          "traits": [
            "finesse"
          ]
        },
        {
          "id": "kNl1E67lBZGpSC5U",
          "name": "Gory Tendril",
          "bonus": 13,
          "damage": "1d4+6 bludgeoning",
          "traits": [
            "agile",
            "finesse"
          ]
        }
      ],
      "actions": [
        {
          "id": "r3ldx2ZybEAqaKTp",
          "name": "+2 Perception to Sense Motive",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "qSCF9pmEsCQejxxw",
          "name": "Lifesense 30 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "SRv1ATMYjrhtxE5O",
          "name": "Gloom Aura",
          "kind": "passive",
          "description": "60 feet. A lovelorn's presence instills unease and turns the air cold, dark, and stale. Creatures within the aura take a -1 circumstance penalty to saving throws made to resist emotion effects.\nIf the lovelorn makes a place home for a week or more, that location can become suffused with this magic even outside the lovelorn's aura, lasting until the lovelorn leaves or is destroyed.\nEffect: Gloom Aura"
        },
        {
          "id": "AUSkGV3ZjHHnyIrW",
          "name": "Skitter Away",
          "kind": "reaction",
          "description": "Trigger A creature ends its movement in a space adjacent to the lovelorn\nEffect The lovelorn Strides or Climbs 10 feet away from the triggering creature. This movement does not trigger reactions."
        },
        {
          "id": "GPeTASJke20Pg69M",
          "name": "Void Healing",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "z2iLBR1l32mSdxZg",
          "name": "Cynic's Curse",
          "kind": "passive",
          "description": "A creature hit by a lovelorn's fangs Strike must attempt a check (will, dc:19) save as it grows morose and listless. If the creature would be affected by a Calm spell, that spell attempts to counteract this curse instead of having its normal effect.\nCritical Success The target is unaffected.\nSuccess For 1 minute, the target can't benefit from helpful emotion effects, but can still be affected by harmful emotion effects.\nFailure As success, plus the target is Fatigued for the same duration.\nCritical Failure As failure, but the curse's effects are permanent."
        },
        {
          "id": "z8icQJywCFQjbD5v",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": [
        {
          "id": "kOHqSZC7OkUmehSW",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 13,
          "saveDc": 21,
          "spells": [
            {
              "id": "uYjMlJBj32HYXecG",
              "name": "Figment",
              "rank": 1
            },
            {
              "id": "JLoL0eHBC3lNljFo",
              "name": "Telekinetic Hand",
              "rank": 1
            },
            {
              "id": "3Cyc5ZtRv3sHngWs",
              "name": "Fear",
              "rank": 2
            },
            {
              "id": "kHaBMeFClv2eyucK",
              "name": "Illusory Creature (At Will)",
              "rank": 2
            },
            {
              "id": "3L3FDGCbLUK5yO1S",
              "name": "Illusory Object (At Will)",
              "rank": 2
            },
            {
              "id": "4DLSGWIlFpMk1Awd",
              "name": "Invisibility",
              "rank": 2
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:mimic",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "h74BX4Iw78gWewa4",
      "slug": "mimic",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:35de4751f299d5a873c8dd172f3103282efd547df3cb19505aa172a7d353dcac",
    "translatableHash": "sha256:69358fe93027b30b3eef938f742117e31c11bddb9476c02b5e2ddfc80d800469",
    "data": {
      "schemaVersion": 1,
      "name": "Mimic",
      "level": 4,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "aberration"
      ],
      "description": "Thought to be the result of a failed experiment meant to animate furniture or possibly a sinister alghollthu creation, mimics are clever monsters that can take the form of common manufactured objects. While rumored to prefer to be doors, any object that another creature will eventually interact with is an acceptable form to take. Mimics are ambush predators and voracious eaters, surprising their prey through their uncanny ability to imitate the form of ordinary furniture and other common miscellany. They remain disguised until unsuspecting adventurers happen by, then they lash out in ambush.\nMimics possess complex alien minds, and while often cruel and self-serving, they also enjoy conversation with their prey from time to time. For unknown reasons, they're especially interested in humanoids, and tales tell of the occasional mimic who has even formed a partnership with them for larger, shared goals. Mimics have a strong dislike for others of their kind and tend to live alone. Mimics can remain in their alternate form for an extremely long period of time, sometimes remaining disguised in a dungeon chamber for decades. Regardless of how long they wait, mimics remain vigilant and alert, ever ready to ensnare an unsuspecting victim.",
      "armorClass": 20,
      "hitPoints": 75,
      "speedFeet": 25,
      "perception": {
        "modifier": 9,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 11,
        "reflex": 9,
        "will": 9
      },
      "abilities": {
        "str": 4,
        "dex": 1,
        "con": 3,
        "int": 0,
        "wis": 1,
        "cha": 0
      },
      "skills": {
        "athletics": 12,
        "deception": 8
      },
      "languages": [
        "common"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "wE4iLJPGrq0wkEDS",
          "name": "Jaws",
          "bonus": 14,
          "damage": "2d8+4 piercing",
          "traits": []
        },
        {
          "id": "0o1vyqND9gAKzsVt",
          "name": "Pseudopod",
          "bonus": 14,
          "damage": "1d8+4 bludgeoning",
          "traits": [
            "agile",
            "reach-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "C2M4OPIJTaY78RH5",
          "name": "Object Lesson",
          "kind": "reaction",
          "description": "Trigger A creature touches or physically interacts with the mimic while the mimic is transformed using Mimic Object\nEffect The mimic makes a jaws Strike against the triggering creature. If initiative hasn't yet been rolled, the mimic then rolls initiative. Object Lesson can't be used again until the mimic escapes and takes on a new disguise."
        },
        {
          "id": "bhyzyR0Tv701uBwz",
          "name": "Mimic Object",
          "kind": "action",
          "description": "The mimic assumes the shape of any Medium object. This doesn't change the mimic's texture or overall size but can alter their coloration and visual appearance. They have an automatic result of 28 on Deception checks and DCs to pass as the object that they're mimicking."
        },
        {
          "id": "KsEcz0EpPNpWhQ3f",
          "name": "Mobile Morph",
          "kind": "action",
          "description": "The mimic transforms part of their body into climbing claws, wings, or paddles. Until the end of their turn, they gain a climb, fly, or swim Speed of 40 feet. This speed is halved if the mimic has a creature swallowed. If they're in the air at the end of their turn, they fall as normal."
        },
        {
          "id": "aaA4fVNfbye9SVvQ",
          "name": "Swallow Whole",
          "kind": "action",
          "description": "Medium, 2d8[acid], Rupture 13"
        },
        {
          "id": "y069NkkshFzZXQqB",
          "name": "Improved Grab",
          "kind": "passive",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:myceloid",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "jWsHDhzrIOqOp29p",
      "slug": "myceloid",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:bde63b79d33b1a93b1d97e5c03302c74544ba611ec69ad6e3291f6a7574d96e4",
    "translatableHash": "sha256:3ec12a8813971749b2ee3ef82713cb2338b536f24f76595cba216273a59e3662",
    "data": {
      "schemaVersion": 1,
      "name": "Myceloid",
      "level": 4,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "fungus"
      ],
      "description": "The ambulatory fungus creatures called myceloids are notorious for spreading deadly purple pox, controlling creatures' minds, and devouring humanoid flesh. For a myceloid colony, any battle with humanoids is cause for excitement, as this new fodder presents so many delicious possibilities.\nMyceloids consider humanoids to have an ideal life cycle of four simple steps. During childhood, they wander naive and afraid, unaware of myceloid colonies. In adulthood, humanoids discover their true purpose as they taste purple pox and become enslaved by the myceloids' spores. Next, they die, giving rise to a new myceloid. They're then sent on to the afterlife upon becoming a myceloid meal. Eating humanoid flesh is not a necessity-a myceloid can survive on any decaying matter-but it's certainly a pleasure.\nMyceloids rarely make alliances, but when they do, they invite their new allies to share a meal to seal the pact. Few outsiders appreciate this hospitality.\nMost myceloids have deep purple caps studded with off-white lumps. Their necks and bodies bear resemblance to the stipes of tough, leathery fungi. Smaller mushrooms often grow on a myceloid's body, which the creatures view as either adornments or particularly convenient snacks. They stand roughly as tall as a dwarf, with comparably stout builds.",
      "armorClass": 20,
      "hitPoints": 70,
      "speedFeet": 20,
      "perception": {
        "modifier": 10,
        "senses": [
          "darkvision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 14,
        "reflex": 9,
        "will": 10
      },
      "abilities": {
        "str": 4,
        "dex": 3,
        "con": 4,
        "int": -1,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "stealth": 11,
        "survival": 10
      },
      "languages": [
        "sakvroth"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "slashing 5"
        ]
      },
      "attacks": [
        {
          "id": "X4dbGwvffyOz8AAl",
          "name": "Fist",
          "bonus": 14,
          "damage": "2d6+4 bludgeoning",
          "traits": [
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "Tad24VdpP0f7Obsz",
          "name": "Telepathy 100 feet (Myceloids and Those Afflicted by Purple Pox Only)",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "uf75VmCg2lXJXIS6",
          "name": "Spore Pop",
          "kind": "passive",
          "description": "If a myceloid is reduced to 0 HP by a critical hit, it pops, forcing it to immediately Emit Spores, even if it has already used the ability that day."
        },
        {
          "id": "7O5f2VrYGu8KYH37",
          "name": "Emit Spores",
          "kind": "action",
          "description": "Frequency once per day\nEffect The myceloid expels spores in a @Template[burst|distance:10] centered on a corner of its own space. This cloud lasts until the start of the myceloid's next turn. Each creature that is in the cloud or enters it is exposed to purple pox."
        },
        {
          "id": "TjHnriTSE9y88Oaj",
          "name": "Purple Pox",
          "kind": "passive",
          "description": "Myceloids are immune\nSaving Throw check (fortitude, dc:20)\nOnset 1 minute\nStage 1 2d6[poison] damage and Stupefied 1 (1 day)\nStage 2 6d6[poison] damage, Stupefied 3, and the creature is compelled to seek out the nearest myceloid colony-this compulsion is a mental emotion effect (1 day)\nStage 3 The creature dies. Over 24 hours, its corpse becomes bloated and bursts, releasing a new, fully grown myceloid."
        },
        {
          "id": "Jyzm7OFRyidSiJk0",
          "name": "Spore Domination",
          "kind": "action",
          "description": "The myceloid targets one creature affected by purple pox within 60 feet. That creature must attempt a check (will, dc:22) save.\nIt is then temporarily immune to spore domination for 10 minutes.\nCritical Success The target is unaffected.\nSuccess Until the end of its next turn, the target is Helpful to myceloids and can't take hostile actions against them.\nFailure As success, but for 1 minute.\nCritical Failure As success, but until the purple pox is cured."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:terror-shrike",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "kU4QpEUIx4R1sF5K",
      "slug": "terror-shrike",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:0f3b006e22ce9fcfcae5ba1c0c78d1a7da253d6637126d211d33ee23d468f4c8",
    "translatableHash": "sha256:abe2fbb765ab21667e1dcb2cc2c0ef1835e053ec86a6059d042bd1a1499d6cad",
    "data": {
      "schemaVersion": 1,
      "name": "Terror Shrike",
      "level": 4,
      "rarity": "common",
      "size": "large",
      "traits": [
        "animal"
      ],
      "description": "",
      "armorClass": 20,
      "hitPoints": 60,
      "speedFeet": 60,
      "perception": {
        "modifier": 11,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 13,
        "reflex": 12,
        "will": 7
      },
      "abilities": {
        "str": 5,
        "dex": 4,
        "con": 3,
        "int": -4,
        "wis": 1,
        "cha": 0
      },
      "skills": {
        "acrobatics": 11,
        "athletics": 12
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "Ptdsq6rniZiGBMZL",
          "name": "Beak",
          "bonus": 12,
          "damage": "2d8+5 piercing",
          "traits": [
            "reach-10"
          ]
        },
        {
          "id": "YFJXVonhxKCqFw8T",
          "name": "Talon",
          "bonus": 12,
          "damage": "2d6+5 piercing",
          "traits": [
            "agile"
          ]
        }
      ],
      "actions": [
        {
          "id": "qkZ5732L78jVsm91",
          "name": "Sprint",
          "kind": "action",
          "description": "Frequency once per minute\nEffect The terror shrike Strides three times in a straight line"
        },
        {
          "id": "qJwp46znVH69vjl4",
          "name": "Stunning Screech",
          "kind": "action",
          "description": "The terror shrike unleashes a haunting screech that causes prey to freeze in fear. Each non–terror bird creature in a @Template[type:emanation|distance:30] must attempt a check (will, dc:19, options:inflicts:stunned) save. Regardless of the result, creatures are then temporarily immune for 1 minute.\nSuccess The creature is unaffected.\nFailure The creature is Stunned 1.\nCritical Failure The creature is Stunned 2."
        },
        {
          "id": "0bwpLQFJoQwYHZp6",
          "name": "Sudden Charge",
          "kind": "action",
          "description": "The terror shrike Strides twice. If it ends its movement within melee reach of one creature, it can make a melee Strike against that creature."
        },
        {
          "id": "Xczpw0gC8HweszgO",
          "name": "Tearing Clutch",
          "kind": "passive",
          "description": "The terror shrike's powerful beak can tear through flesh. On a successful beak Strike, the target takes 1 persistent bleed damage. This bleed damage increases to 1d8 on a critical hit."
        },
        {
          "id": "5QvWyvfeGv4J7bN4",
          "name": "Knockdown",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:attic-whisperer",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "mtRofD6H5BEDHHSm",
      "slug": "attic-whisperer",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:e4f13885cf9010c32e7641028b3b633f8df0166a51410625bd54d7bb1c2ae80e",
    "translatableHash": "sha256:912eaa5fc51fd5a58369443a7a0f80f9ce8a43c8afdb122c412b6f7d467ad927",
    "data": {
      "schemaVersion": 1,
      "name": "Attic Whisperer",
      "level": 4,
      "rarity": "common",
      "size": "small",
      "traits": [
        "undead",
        "unholy"
      ],
      "description": "Beware the haunting sobs of the attic whisperer, for they carry the pained wrath of an abandoned child who perished due to the neglect or absence of their caretakers. Animated by loneliness, the embittered spirit binds itself to the material world in a body made of bits and oddments of a lost childhood-wooden blocks, scraps of blankets, ratty dolls, buttons, carved trinkets, and glass marbles. To give themselves the semblance of a head, they top their patchwork bodies with a small animal's skull.\nAttic whisperers most frequently lurk in old infirmaries, orphanages, and other such institutions where children were forgotten, and they lay dormant for decades in hopes that they might one day find a playmate to ease their eternal loneliness. When they sense the living, attic whisperers attempt to lure them into their clutches by calling out to them using the voice of a small child. Though attic whisperers intend only to play with those they encounter, they drain the breath and voice from living creatures as their dark impulses take over.",
      "armorClass": 21,
      "hitPoints": 60,
      "speedFeet": 20,
      "perception": {
        "modifier": 10,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 8,
        "reflex": 13,
        "will": 12
      },
      "abilities": {
        "str": 0,
        "dex": 5,
        "con": 0,
        "int": 2,
        "wis": 4,
        "cha": 3
      },
      "skills": {
        "deception": 11,
        "society": 10,
        "stealth": 13
      },
      "languages": [
        "common",
        "necril"
      ],
      "defenses": {
        "immunities": [
          "death-effects",
          "disease",
          "paralyzed",
          "poison",
          "unconscious",
          "bleed"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "Lt44trsI3w4Nptsb",
          "name": "Jaws",
          "bonus": 14,
          "damage": "2d8 piercing",
          "traits": [
            "agile",
            "finesse",
            "unarmed"
          ]
        },
        {
          "id": "ope3wpbKSAJOWCJD",
          "name": "Bony Hand",
          "bonus": 12,
          "damage": "2d10 void",
          "traits": [
            "agile"
          ]
        }
      ],
      "actions": [
        {
          "id": "981IVfc2IS4Qnd3U",
          "name": "Aura of Sobs",
          "kind": "passive",
          "description": "10 feet. An attic whisperer enshrouds itself in a tapestry of stolen voices. Each living creature that enters or starts their turn in the aura must succeed at a check (will, dc:19, options:area-effect,inflicts:stupefied) save or the unnerving, bitter sobs render them distraught and they become Stupefied 1 for as long as they remain within the aura. A creature that succeeds is temporarily immune for 1 hour. The attic whisperer can activate or deactivate the aura with a single free action, which has the concentrate trait."
        },
        {
          "id": "0DR36G32rpPd9PIN",
          "name": "Whispered Despair",
          "kind": "reaction",
          "description": "Trigger A creature with an active emotion effect enters an attic whisperer's aura of sobs\nEffect The attic whisperer attempts to counteract the emotion effect, with a counteract modifier of +13."
        },
        {
          "id": "DI1RbgDDypEQJCMq",
          "name": "Steal Breath",
          "kind": "passive",
          "description": "The attic whisperer siphons the breath from living creatures, sapping their strength. A living creature hit by a jaws Strike must attempt a check (fortitude, dc:21, options:inflicts:enfeebled,inflicts:fatigued,inflicts:unconscious) save.\nCritical Success The target is unaffected.\nSuccess The target is Enfeebled 1 for 1 round.\nFailure The target is Enfeebled 1 for 24 hours and Fatigued.\nCritical Failure The target is enfeebled 1 for 24 hours, is fatigued, and falls Unconscious."
        },
        {
          "id": "El38bC5IzKKtBdcW",
          "name": "Steal Voice",
          "kind": "passive",
          "description": "When an attic whisperer hits a living creature with a bony hand Strike, it tries to pull the victim's voice into its aura. The victim must attempt a check (will, dc:21) save.\nCritical Success The target is unaffected.\nSuccess The target's voice is weak for 1 minute. Anytime it attempts an action with the auditory trait, it must succeed at a check (flat, dc:5) check or the action is lost.\nFailure The target loses the ability to speak for 1 hour, until the curse is removed, or until the attic whisperer is destroyed, whichever comes first. During this time, the attic whisperer can perfectly mimic the target's voice, and the target takes a –2 circumstance penalty to saving throws against that attic whisperer's aura of sobs.\nCritical Failure As failure, but the effects lasts until the attic whisperer is destroyed or the curse is removed."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:kelpie",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "QAa0xdLT9cBxw2zh",
      "slug": "kelpie",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:6a5f48187c68384d8648ea257f3404225c1901ce8a4cac110e6a7f6847aea202",
    "translatableHash": "sha256:6f9ba439fef2ac0556b7dbfa015f4bb3bada423e72cc303fa06cb08f209f2748",
    "data": {
      "schemaVersion": 1,
      "name": "Kelpie",
      "level": 4,
      "rarity": "common",
      "size": "large",
      "traits": [
        "amphibious",
        "fey"
      ],
      "description": "Kelpies are malevolent, amphibious fey shapechangers who lure mortals to a watery grave. These cruel predators lurk around bodies of water of any type, only slightly preferring fresh water over salt water. Kelpies lure or drag their prey underwater, then drown and devour them, leaving behind only the victim's heart and liver—the only parts of a meal kelpies find unpleasant—tossed upon the shore. Kelpies are fond of magically disguising themselves as fine steeds or attractive strangers to draw in victims, but their true appearance is that of a hideous equine with slimy, green flesh resembling aquatic plants.",
      "armorClass": 21,
      "hitPoints": 60,
      "speedFeet": 35,
      "perception": {
        "modifier": 11,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 11,
        "reflex": 12,
        "will": 14
      },
      "abilities": {
        "str": 5,
        "dex": 2,
        "con": 3,
        "int": -1,
        "wis": 3,
        "cha": 4
      },
      "skills": {
        "athletics": 11,
        "deception": 14,
        "stealth": 10
      },
      "languages": [
        "common",
        "fey",
        "thalassic"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "fire 5"
        ],
        "weaknesses": [
          "cold-iron 5"
        ]
      },
      "attacks": [
        {
          "id": "YLkCTcdR9HdGTGIc",
          "name": "Jaws",
          "bonus": 13,
          "damage": "2d6+7 bludgeoning",
          "traits": [
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "ETNgNhnYD6MkhTVc",
          "name": "Captivating Lure",
          "kind": "action",
          "description": "The kelpie instills an overwhelming attraction to itself within the mind of a single creature within 60 feet. The target perceives the kelpie as a desirable person (if the kelpie is in humanoid form) or a magnificent steed (if the kelpie is in equine form) and must attempt a check (will, dc:23) saving throw.\nCritical Success The creature is unaffected and is temporarily immune to Captivating Lure for 24 hours.\nSuccess The creature is Stupefied 1 for 1 round and is then temporarily immune to Captivating Lure for 24 hours.\nFailure The creature is Fascinated, and it must spend each of its actions to move closer to the kelpie as expediently as possible while avoiding obvious dangers. If a captivated creature is adjacent to the kelpie, it either attempts to mount the kelpie (if the kelpie is in equine form) or stays still and doesn't act. If the creature is attacked by the kelpie, or if it can't breathe water and enters an area of water, the creature is freed from captivation at the end of the kelpie's turn.\nCritical Failure As failure, but the target doesn't consider water a danger and will enter an area of water even if it can't swim or breathe water. If it is attacked by the kelpie or starts to drown, it can attempt a new save at the start of its next turn, but it isn't freed automatically."
        },
        {
          "id": "EvLc0FWYja13zST7",
          "name": "Change Shape",
          "kind": "action",
          "description": "The kelpie can take on the appearance of any Medium or Large animal of an equine nature (such as a Horse, Hippocampus, or Pony), or any Small or Medium humanoid. This doesn't change its Speeds or its attack and damage modifiers with its Strikes."
        },
        {
          "id": "bmLCwDn29NclNGv4",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:hellbound-attorney",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "R2Vgjb3Mpyq6HyjM",
      "slug": "hellbound-attorney",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:a40b441774b9af0e4fb3ae673bb566337ee2a4bf5ab4755350a5366427f165aa",
    "translatableHash": "sha256:073fd106bb2b91f0a4731a3baac23f146ef0bcd83a4931a4f0bc99804c75c1d6",
    "data": {
      "schemaVersion": 1,
      "name": "Hellbound Attorney",
      "level": 4,
      "rarity": "uncommon",
      "size": "medium",
      "traits": [
        "devil",
        "fiend",
        "human",
        "humanoid",
        "unholy"
      ],
      "description": "The Hellbound attorney sought the assistance of a Phistophilus-one of Hell's contract devils-to bolster her legalistic ability on the Universe.\nThere are countless legions of lawful fiends in the nine layers of Hell, warring against the celestial planes and scouring the Material Plane for souls to corrupt.",
      "armorClass": 20,
      "hitPoints": 60,
      "speedFeet": 20,
      "perception": {
        "modifier": 11,
        "senses": [
          "greater-darkvision"
        ]
      },
      "saves": {
        "fortitude": 9,
        "reflex": 12,
        "will": 13
      },
      "abilities": {
        "str": 1,
        "dex": 2,
        "con": 0,
        "int": 4,
        "wis": 1,
        "cha": 3
      },
      "skills": {
        "acrobatics": 10,
        "deception": 11,
        "diplomacy": 11,
        "intimidation": 11,
        "society": 12
      },
      "languages": [
        "common",
        "diabolic"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "fire 4"
        ],
        "weaknesses": [
          "holy 2"
        ]
      },
      "attacks": [
        {
          "id": "oRzzljhsCixNqf5j",
          "name": "Elegant Cane",
          "bonus": 12,
          "damage": "1d4+3 bludgeoning",
          "traits": [
            "agile",
            "finesse",
            "shove",
            "unholy"
          ]
        }
      ],
      "actions": [
        {
          "id": "oAwLdSvl1lwzYmYb",
          "name": "Greater Darkvision",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "55pDhEb6m82JCtfR",
          "name": "Abrogation of Consequences",
          "kind": "reaction",
          "description": "Trigger The Hellbound attorney rolls a success or critical failure on a saving throw against a linguistic effect.\nEffect The attorney finds a loophole in the wording of the effect, turning the success into a critical success or a critical failure into a normal failure."
        },
        {
          "id": "1TjWSXYs7BlJtfxX",
          "name": "Opening Statement",
          "kind": "passive",
          "description": "Trigger The Hellbound attorney's turn begins.\nEffect The attorney enumerates the alleged crimes of a creature they can see and attempts a check (legal-lore, against:will) check against that creature's Will DC.\nOn a success, the attorney's Strikes deal an additional 2d6 precision damage (4d6 precision damage on a critical success) to the creature until the end of the attorney's turn."
        }
      ],
      "spellcasting": [
        {
          "id": "JYnZKoZ4Immi2yaz",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 13,
          "saveDc": 21,
          "spells": [
            {
              "id": "4ixyxaMP8YkSDGI5",
              "name": "Breathe Fire",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:shriezyx",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "RGxxXsAMHngLOsCk",
      "slug": "shriezyx",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:9dc8fb986a80872418877f60d789137c4e59ba6792b76e34efd01f38604e5da4",
    "translatableHash": "sha256:764516b11e5658bf6535132c83987353ff307f85e83da312d1035b84cdb308b3",
    "data": {
      "schemaVersion": 1,
      "name": "Shriezyx",
      "level": 4,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "aberration"
      ],
      "description": "Long ago, Thassilonian wizards created shriezyx in twisted experiments to act as guards and test subjects. These 300-pound aberrations have outlived their creators and mostly make their homes inside Thassilonian ruins, caverns, and deep in the Darklands. Their bodies are covered in hard, extremely flammable chitin that molts as they grow.\nWhile a shriezyx looks like a bestial, three-eyed spider, the truth behind these creatures is far more grotesque. Instead of spinning silk, a shriezyx spits strands of unformed, sticky flesh from its mouth. When fresh, theses fleshy strands are coated in a nerve-numbing toxin that slows prey. The weblike flesh-spittle coats shriezyx lairs and nests, wrapped around the bones for their former meals. Fortunately for those who stumble into these lairs, a shriezyx's toxin dissipates when exposed to air, leaving the fleshy webs only sickeningly sticky. Unfortunately for those same travelers, shriezyx are often communal creatures that gather in large numbers and are quick to attack intruders.\nDeros and other subterranean peoples sometimes keep shriezyx as guards or mounts, using food and threats of fire to keep them in line. Most shriezyx owners are quick to dispose of any eggs, fearing a swarm could grow beyond their control, but some breeders have realized that a shriezyx's offspring retain much of its parent's demeanor and save the eggs of the most loyal (or most fire-fearing) shriezyx in hopes of creating a profitable, easier-to-control herd. While crueler masters might use shriezyx as test subjects, alchemists often see these creatures as beloved pets. Their grotesque webs make great alchemical reagents and provide ethically sourced flesh for experiments, while the molted exoskeleton can be used to create bombs and other explosives.",
      "armorClass": 21,
      "hitPoints": 70,
      "speedFeet": 35,
      "perception": {
        "modifier": 11,
        "senses": [
          "darkvision",
          "tremorsense-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 13,
        "reflex": 12,
        "will": 8
      },
      "abilities": {
        "str": 3,
        "dex": 5,
        "con": 4,
        "int": -4,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "acrobatics": 12,
        "athletics": 12
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [
          "poison 6"
        ],
        "weaknesses": [
          "fire 6"
        ]
      },
      "attacks": [
        {
          "id": "b19NlphGOABEXusg",
          "name": "Fangs",
          "bonus": 13,
          "damage": "2d6+5 piercing",
          "traits": [
            "finesse"
          ]
        },
        {
          "id": "8dNyzzUnMQxm9ZeO",
          "name": "Claw",
          "bonus": 13,
          "damage": "2d4+5 slashing",
          "traits": [
            "agile",
            "finesse"
          ]
        }
      ],
      "actions": [
        {
          "id": "wIaFyHxV6GMXoqFb",
          "name": "+1 Status to All Saves vs. Mental",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "Z81UDtSvKzcjdvPR",
          "name": "Pyrophobia",
          "kind": "passive",
          "description": "If the shriezyx takes fire damage or starts its turn within 30 feet of a fire at least the size of a torch, it becomes Frightened 1."
        },
        {
          "id": "lsE6sJl9oPhKbNSD",
          "name": "Clicking Scurry",
          "kind": "action",
          "description": "Frequency once per round\nEffect The shriezyx Strides or Climbs, and then makes a claw Strike."
        },
        {
          "id": "cMO5vpQo4srBY5Gv",
          "name": "Flash Web",
          "kind": "action",
          "description": "The shriezyx's shoots a fleshy web at a target within 30 feet. The target must succeed at a check (reflex, dc:20) save or become Immobilized and exposed to numbing toxin. Due to the grotesque nature of the webbing, the target becomes Sickened 1 and can't reduce its sickened condition until it Escapes (DC 20)."
        },
        {
          "id": "JBcwBUuPVWCH51px",
          "name": "Numbing Toxin",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:20)\nMaximum Duration 6 rounds\nStage 1 1d4[poison] damage and Clumsy 1 (1 round)\nStage 2 1d6[poison] damage and Clumsy 2 (1 round)\nStage 3 1d8[poison] damage, clumsy 2, and Slowed 1 (1 round)"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:brood-leech-swarm",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "S1OFq9Ywrr4MHMAg",
      "slug": "brood-leech-swarm",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:dedaa2e7141bf9f2d7051fa31b46bf12d9418e6d4830615610ba3eba1953d950",
    "translatableHash": "sha256:a0e57b1d9d1e24196837c161d91f37b1276ca1df24dfc4924e14ea7d68173a80",
    "data": {
      "schemaVersion": 1,
      "name": "Brood Leech Swarm",
      "level": 4,
      "rarity": "common",
      "size": "large",
      "traits": [
        "amphibious",
        "animal",
        "swarm"
      ],
      "description": "Most smaller species of leeches do not tend to swarm, but brood leeches are prone to gathering in seething, undulant mats of squirming gluttony. When they gather in sufficient numbers to swarm, they eschew the stealth of a lone leech's feeding methods in favor of swift and merciless feeding. In these situations, their mild venom can affect much larger creatures than their usual prey.",
      "armorClass": 19,
      "hitPoints": 50,
      "speedFeet": 5,
      "perception": {
        "modifier": 9,
        "senses": [
          "tremorsense-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 12,
        "reflex": 11,
        "will": 9
      },
      "abilities": {
        "str": 0,
        "dex": 3,
        "con": 4,
        "int": -5,
        "wis": 1,
        "cha": -5
      },
      "skills": {
        "athletics": 8,
        "stealth": 11
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "precision",
          "swarm-mind"
        ],
        "resistances": [
          "bludgeoning 2",
          "piercing 5",
          "slashing 5"
        ],
        "weaknesses": [
          "area-damage 5",
          "salt 5",
          "splash-damage 5"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "Hu5L9AYzwJsXxIDY",
          "name": "Tremorsense 30 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "storTBRDZBrko2mc",
          "name": "Swarm Mind",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "ome4gBGaz20PH3OU",
          "name": "Blood Draining Bites",
          "kind": "action",
          "description": "Each enemy in the swarm's space takes 2d6[piercing] damage (check (reflex, dc:21, basic) save). A creature who fails the Reflex save also takes 1d6[persistent,bleed] damage and is exposed to brood leech swarm venom."
        },
        {
          "id": "SZrUoVGK2e5HE1dm",
          "name": "Brood Leech Swarm Venom",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:21)\nMaximum Duration 6 rounds\nStage 1 Clumsy 1, Sickened 1, and -5-foot status penalty to Speed (1 round)\nStage 2 Clumsy 1, Sickened 1, and -10-foot status penalty to Speed (1 round)."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:viper-swarm",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "ScawCKxGgd4d0Gle",
      "slug": "viper-swarm",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:0dbaddfc68e20ac2b0a84933ffa70f736e2f4155971bfe3af9d0af595d81a1da",
    "translatableHash": "sha256:6c5099e420fdfbd4399ce749538bc4265d110cdd5c4d139703b7c8b58ab52c12",
    "data": {
      "schemaVersion": 1,
      "name": "Viper Swarm",
      "level": 4,
      "rarity": "common",
      "size": "large",
      "traits": [
        "animal",
        "swarm"
      ],
      "description": "The frightening mass of shining scales, gleaming eyes, and fangs dripping with venom that constitute a viper swarm has brought an end to many an unlucky adventurer. Normally nocturnal, these notoriously aggressive snakes strike at anything that comes within reach, be it limb or weapon. Their venom is a potent toxin that leaves victims shaky and weak. Those who are lucky may receive a warning strike without venom before being attacked in earnest.\nSnakes of some variety thrive in every non-arctic ecosystem, each with their own particular hunting patterns and defense mechanisms.",
      "armorClass": 18,
      "hitPoints": 50,
      "speedFeet": 30,
      "perception": {
        "modifier": 12,
        "senses": [
          "low-light-vision",
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 11,
        "reflex": 13,
        "will": 10
      },
      "abilities": {
        "str": 1,
        "dex": 5,
        "con": 3,
        "int": -4,
        "wis": 2,
        "cha": -3
      },
      "skills": {
        "acrobatics": 13,
        "stealth": 11
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "swarm-mind",
          "precision"
        ],
        "resistances": [
          "bludgeoning 5",
          "piercing 5",
          "slashing 3"
        ],
        "weaknesses": [
          "area-damage 5",
          "splash-damage 5"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "4iCwNxJ9G0YrLGKL",
          "name": "Swarm Mind",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "G0Y2rvDt5sw3EiDd",
          "name": "Venom Spritz",
          "kind": "action",
          "description": "The vipers spray venom from their fangs in a defensive display. Each creature in a @Template[type:cone|distance:10] is exposed to viper swarm venom but gains a +2 circumstance bonus to its initial saving throw against the poison."
        },
        {
          "id": "aLyxCEVT8JkXxPp9",
          "name": "Venomous Fangs",
          "kind": "action",
          "description": "Each enemy in the swarm's space takes 2d8[piercing] damage (check (reflex, dc:21, basic) save). A creature that fails their save is also exposed to viper swarm venom."
        },
        {
          "id": "9yT9r7e4tJh2kZ7u",
          "name": "Viper Swarm Venom",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:21)\nMaximum Duration 6 rounds\nStage 1 1d4[poison] damage (1 round)\nStage 2 1d6[poison] damage and Clumsy 1 (1 round)\nStage 3 2d4[poison] damage, Clumsy 2, and Enfeebled 1 (1 round)"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:amphisbaena",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "TbgHiHtPCK59KStC",
      "slug": "amphisbaena",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:2f19f38c3ba9989a31b2b72725f8fd650bec03f469ef60cc37a8d0de80b020d5",
    "translatableHash": "sha256:9681df1a105bed1ec95bbb1ad7cded1f1a8fe9c72f9bff8a79990fb06cde0911",
    "data": {
      "schemaVersion": 1,
      "name": "Amphisbaena",
      "level": 4,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "animal"
      ],
      "description": "An amphisbaena is an exceedingly aggressive, venomous viper of remarkable size that bears two heads-one on each end of its body. It moves in a manner similar to that of the more common sidewinder snake, throwing its body forward in a loop and anchoring itself by keeping one head or the other on the ground at all times.\nAmphisbaenas' typical prey includes rabbits, foxes, various birds, small deer, and even humanoids if presented the opportunity. Fiercely territorial by nature, they attack just about anything that gets near their lairs, regardless of the intruder's size. Many a child has been warned about going too far into the woods alone, lest they wander too close to an amphisbaena den and become the creature's next meal.\nThe venom of an amphisbaena is incredibly potent, able to take down a stout dwarf within minutes if left untreated. However, it also has uses in a variety of healing remedies, which makes it a valuable commodity if collected. For example, a pregnant person might be advised to drink the venom in small, dilute doses to help safeguard the pregnancy. Mixing small amounts of the venom with various herbs and oil creates a poultice which dulls aches and pains. As a result, the image of an amphisbaena appears in many contexts associated with healing and alchemical subjects, such as labels for tinctures, annotations in herbalists' records, and illustrations in textbooks of medicine.\nThe first amphisbaena is said to have formed from the blood that fell as a medusa's head was severed. This story's origin most likely stems from the fact that amphisbaenas are oddly immune to petrification, which in turn leads to them sometimes being kept as pets by a medusa. A medusa who keeps an amphisbaena as a pet might regard the viper as their most treasured companion or perhaps even as their own child. Despite these fabled supernatural origins and the occasional special treatment they receive, however, amphisbaenas are entirely mundane animals with only rudimentary intelligence and no innate magical abilities whatsoever.",
      "armorClass": 21,
      "hitPoints": 70,
      "speedFeet": 25,
      "perception": {
        "modifier": 10,
        "senses": [
          "tremorsense-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 10,
        "reflex": 14,
        "will": 8
      },
      "abilities": {
        "str": 5,
        "dex": 4,
        "con": 2,
        "int": -4,
        "wis": 0,
        "cha": -4
      },
      "skills": {
        "acrobatics": 10,
        "athletics": 13,
        "stealth": 12
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "petrified"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "X6SY2vedf1w4NFyM",
          "name": "Fangs",
          "bonus": 13,
          "damage": "2d6+5 piercing",
          "traits": []
        },
        {
          "id": "Mynf5Z4xbH7kVwpi",
          "name": "Spit",
          "bonus": 12,
          "damage": "1d6 poison",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "6LlX67R81S5J80Ws",
          "name": "All-Around Vision",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "pA64qfMCuUfGqBOF",
          "name": "Amphisbaena Venom",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:18)\nMaximum Duration 6 rounds\nStage 1 1d6[poison] damage and Enfeebled 1 (1 round)\nStage 2 2d6[poison] damage and Enfeebled 2 and Slowed 1 (1 round)\nStage 3 3d6[poison] damage and Paralyzed (1 round)"
        },
        {
          "id": "GC4dnaKqE0PPSLwc",
          "name": "Blinding Spittle",
          "kind": "passive",
          "description": "A creature critically hit by an amphisbaena's spit Strike is Blinded for 1 round."
        },
        {
          "id": "dGghVG22K6EF1IOo",
          "name": "Twin Bites",
          "kind": "action",
          "description": "An amphisbaena makes a fangs Strike with each of its heads, each against a different target. Both Strikes count toward its multiple attack penalty, but the penalty doesn't increase until after it has made both attacks."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:living-thunderclap",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "UIRu1RDIjv8ueYJr",
      "slug": "living-thunderclap",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:3f791a823112ebcb836d16fc02f2224487fc4f803268ceb5444c14b03c42eb4f",
    "translatableHash": "sha256:6116eb9da3cf0adb4296728268204d0c70d689d2a1bea702561ba5cae3c79049",
    "data": {
      "schemaVersion": 1,
      "name": "Living Thunderclap",
      "level": 4,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "air",
        "elemental"
      ],
      "description": "A living thunderclap is a small storm cloud (sometimes in the vague shape of a humanoid) that cracks and booms with thunder.\nSome elementals embody aspects of air, such as smoke, lightning, and fog.",
      "armorClass": 21,
      "hitPoints": 50,
      "speedFeet": 0,
      "perception": {
        "modifier": 9,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 10,
        "reflex": 12,
        "will": 9
      },
      "abilities": {
        "str": 3,
        "dex": 4,
        "con": 2,
        "int": -3,
        "wis": 1,
        "cha": 0
      },
      "skills": {
        "acrobatics": 12,
        "athletics": 10,
        "stealth": 12
      },
      "languages": [
        "sussuran"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "paralyzed",
          "poison",
          "sleep",
          "sonic"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "VqqS2af92JnK4YB4",
          "name": "Gust",
          "bonus": 14,
          "damage": "2d6+6 bludgeoning",
          "traits": [
            "agile",
            "finesse"
          ]
        },
        {
          "id": "a5LvCPRNzM7p7aJH",
          "name": "Lightning Bolt",
          "bonus": 14,
          "damage": "2d12 electricity",
          "traits": [
            "electricity"
          ]
        }
      ],
      "actions": [
        {
          "id": "3jwXyokr3dfwDJGK",
          "name": "Swiftness",
          "kind": "passive",
          "description": "The living thunderclap doesn't trigger reactions when it moves."
        },
        {
          "id": "8I6n0t8znnPmN0cj",
          "name": "Thunderbolt",
          "kind": "action",
          "description": "The living thunderclap emits a bolt of lightning that crashes with deafening thunder. The living thunderclap makes a lightning bolt Strike that deals 1d12[electricity|options:area-damage] damage. If it hits, the target and any creatures within a @Template[type:emanation|distance:15] around the target take 2d6[sonic|options:area-damage] damage (check (fortitude, dc:18, basic) save). Any creature that fails its save is also Deafened for [[/gmr 1d4 #rounds]]{1d4 rounds}."
        },
        {
          "id": "BSrd91anF0w2njt5",
          "name": "Push",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:mandragora",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "V96EY8vLy7alnun9",
      "slug": "mandragora",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:334b70c077d1afef17b2dfcd83898b2e78e8c772cf5741d16592b0ae2b5a5d63",
    "translatableHash": "sha256:2a8cd3a7e7c836434cf699aa99f55cee0f25a6403533897e6130703a9da3bf60",
    "data": {
      "schemaVersion": 1,
      "name": "Mandragora",
      "level": 4,
      "rarity": "common",
      "size": "small",
      "traits": [
        "plant"
      ],
      "description": "A mandragora looks like a freshly pulled tuber that has grown into the malformed shape of a child with a grotesque face and hideously bloated body. These insidious little plants typically form when a mandrake root is watered with a demon's blood. Upon absorbing the otherworldly properties of the demon's blood, the root animates and is forced to seek out blood to feast from, lest it die of thirst.\nAlways famished and in search for sustenance, mandragoras live haunted, pained lives and perform vile and desperate acts to acquire the blood they crave. Though mandragoras prefer magically infused blood such as that of unicorns, fey, or sorcerers, and they can subsist on potions, alchemical bombs, and magical elixirs, they'll settle for the blood of non-magical creatures as a last resort. They find the flavor of mundane blood to be bland and bitter, and they don't blanch at voicing these complaints to the creatures on whom they feed.\nWhile the typical mandragora is the size of a human child, some continue to grow and grow, even reaching sizes comparable to giants. Sometimes as they get larger, they form additional limbs or rudimentary faces, eventually transforming into truly hideous mockeries of the human form.",
      "armorClass": 21,
      "hitPoints": 60,
      "speedFeet": 30,
      "perception": {
        "modifier": 11,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 11,
        "reflex": 13,
        "will": 8
      },
      "abilities": {
        "str": 2,
        "dex": 5,
        "con": 3,
        "int": -1,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "acrobatics": 10,
        "athletics": 10,
        "stealth": 12
      },
      "languages": [
        "chthonian",
        "common"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "bludgeoning 5",
          "electricity 5"
        ],
        "weaknesses": [
          "fire 5"
        ]
      },
      "attacks": [
        {
          "id": "Ar58HUSjCtqUCBWd",
          "name": "Jaws",
          "bonus": 14,
          "damage": "2d8+4 piercing",
          "traits": [
            "finesse",
            "unarmed"
          ]
        },
        {
          "id": "xqB9FvxJUsDUDs15",
          "name": "Thorny Vine",
          "bonus": 14,
          "damage": "2d4+4 slashing",
          "traits": [
            "agile",
            "finesse",
            "reach-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "ZvqnxVWvm9QdJZVi",
          "name": "Blood Scent",
          "kind": "passive",
          "description": "A mandragora can smell creatures with blood as an imprecise sense at a range of 30 feet, and it can smell demons, fey, and sorcerers with blood as a precise sense at a range of 30 feet."
        },
        {
          "id": "uQFiXxjHXOCxLHe8",
          "name": "Vulnerability to Supernatural Darkness",
          "kind": "passive",
          "description": "Whenever a mandragora begins its turn in an area of magical darkness, it is Slowed 1 on that turn."
        },
        {
          "id": "sfWdhP3dRBdtmiol",
          "name": "Blood Drain",
          "kind": "action",
          "description": "Requirements The mandragora has a creature Grabbed or Restrained\nEffect The mandragora drains blood from the creature it has grabbed or restrained, dealing 2d6[piercing] damage (check (fortitude, dc:21, basic) save). If the creature is a demon, fey, or sorcerer, the mandragora gains temporary Hit Points equal to the damage dealt for 1 minute. A creature that takes any damage from having its blood drained by a mandragora is Drained 1 until it receives any kind or amount of healing."
        },
        {
          "id": "wrisTXltKN2ggF1B",
          "name": "Mandragora Venom",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:21)\nMaximum Duration 6 rounds\nStage 1 1d6[poison] damage and Stupefied 1 (1 round)\nStage 2 1d6[poison] damage, Confused, and Stupefied 1 (1 round)\nStage 3 2d6[poison] damage, Confused, and Stupefied 1 (1 round)"
        },
        {
          "id": "w0XMZ6GmkzJcCRyO",
          "name": "Piercing Shriek",
          "kind": "action",
          "description": "Frequency once per day\nEffect The mandragora emits an unsettling shriek. Each non-mandragora creature within 30 feet must attempt a check (will, dc:23) save.\nCritical Success The creature is unaffected.\nSuccess The creature is Sickened 1.\nFailure The creature is Sickened 2.\nCritical Failure The creature is sickened 2 and Slowed 1. As long as the creature remains sickened, this slowed condition value can't be reduced below 1."
        },
        {
          "id": "zfVXuP5EfIDQWMbI",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:filth-fire",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "vdXh2dETJ21UlgUg",
      "slug": "filth-fire",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:1a531a6be9bc130e5b7aec88e6499cbc5ca873aabb50949b5bbae2836ba00083",
    "translatableHash": "sha256:b097e15b66c0a9a92f29df59afc6b849d0a72dd9cacb5c85dbc80b4b4aed42be",
    "data": {
      "schemaVersion": 1,
      "name": "Filth Fire",
      "level": 4,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "elemental",
        "fire"
      ],
      "description": "These creatures look like roiling clouds of black smoke churning above a mound of burning refuse. Leering faces form and fade in the smoke above, while the burning detritus writhes in spasmodic lurches, obviously alive.\nDestructive manifestations of the Plane of Fire, fire elementals sometimes incorporate burning materials into their being or superheated matter, such as molten rock or searing smoke. In combat, they tend to be aggressive and somewhat reckless. Their attacks can sometimes cause major destruction to the surrounding environment, and many fire elementals seem to enjoy seeing their flames spread far and wide.",
      "armorClass": 21,
      "hitPoints": 70,
      "speedFeet": 25,
      "perception": {
        "modifier": 11,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 12,
        "reflex": 13,
        "will": 9
      },
      "abilities": {
        "str": 1,
        "dex": 5,
        "con": 4,
        "int": -2,
        "wis": 3,
        "cha": 0
      },
      "skills": {
        "acrobatics": 13,
        "athletics": 9
      },
      "languages": [
        "pyric"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "fire",
          "paralyzed",
          "poison",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": [
          "cold 5"
        ]
      },
      "attacks": [
        {
          "id": "KlaIomDaLTz7Jkyd",
          "name": "Burning Lash",
          "bonus": 13,
          "damage": "2d6+3 bludgeoning; 1d6 fire",
          "traits": [
            "finesse"
          ]
        },
        {
          "id": "IzEyoIB05XJ6PXhD",
          "name": "Ember Ball",
          "bonus": 13,
          "damage": "1d6+3 bludgeoning; 1d6 fire",
          "traits": [
            "fire"
          ]
        }
      ],
      "actions": [
        {
          "id": "4rJZ9xscTEW4vAu2",
          "name": "Smoke Vision",
          "kind": "passive",
          "description": "The filth fire ignores the Concealed condition from smoke."
        },
        {
          "id": "I1Su2avyR3JbgdtD",
          "name": "Noxious Burst",
          "kind": "action",
          "description": "Toxic materials and churning rubbish within the filth fire's body explode in one of three ways. The filth fire chooses the effect, but it can't make the same choice twice in a row.\n• Fiery Beam (fire, primal) The filth fire expels a @Template[type:line|distance:30] of flame that deals 3d6[fire|options:area-damage] damage with a check (reflex, dc:21, basic) save.\n• Shrapnel Blast (primal) The filth fire shoots jagged rubbish out in a @Template[type:emanation|distance:5] that deals 2d12[piercing|options:area-damage] damage with a check (reflex, dc:21, basic) save.\n• Toxic Fumes (poison, primal) The filth fire belches a @Template[type:cone|distance:15] of toxic smoke that deals 2d6[poison|options:area-damage] damage (check (fortitude, dc:21, basic) save). A creature that fails is also Sickened 1 (Sickened 2 on a critical failure)."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:shae",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "vhfeBnFTj2xm3jfH",
      "slug": "shae",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:5957992498bde5787b71843f59cce29dbcf149a14ed6255993a2f556828bdc59",
    "translatableHash": "sha256:fd81c48e82b7093191c667be087d7944da193478cbb402d265f25dca5a5767be",
    "data": {
      "schemaVersion": 1,
      "name": "Shae",
      "level": 4,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "shadow"
      ],
      "description": "Shae are wispy, tenebrous creatures native to the Plane of Shadow. Their amorphous bodies appear in constant states of flux. They cast no shadows of their own, instead gaining and losing umbral energy to nearby shadows that shrink and grow alongside them.\nMost shae wear clothing spun from shadows that shift with them, though diplomats sometimes don more conventional garments while entertaining outsiders. Their most distinctive apparel are their white stone masks, which shae don only when they must put on a discernible \"face\" for interacting with humanoids and similar creatures. They do so begrudgingly, as they consider themselves superior to humanoids, but donning their masks allows them to be more easily understood and thus keeps their interactions with their lessers as brief as possible.\nThe dynamic between a shae and humanoids shifts when humanoids come to worship a shae, however. A mortal who shows a shae their due deference is worth keeping around, so many shae collect cults of personality or expansive entourages. Even getting a meeting with such a self-important shae can present a challenge that requires one to deal with many layers of hangers-on who insist on vetting the newcomer before wasting the shae's precious time.\nAccording to shae lore, they've transcended the material world and now embody a cosmological equilibrium of reality and illusion. Their claims to metaphysical ascendance and knowledge of the secrets of shadows entice many mortal supplicants to join shae courts and cults. In the shae language, their name means \"unbound,\" in accordance with their belief that their ephemeral nature makes them free of the moral and social strictures that bind other sentient creatures, and they essentially make a virtue of capriciousness. Shae feel little obligation to follow through with oaths or obey laws, so sealing a compact with a mortal means little to them.",
      "armorClass": 21,
      "hitPoints": 45,
      "speedFeet": 25,
      "perception": {
        "modifier": 10,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 9,
        "reflex": 11,
        "will": 10
      },
      "abilities": {
        "str": 3,
        "dex": 5,
        "con": 1,
        "int": 3,
        "wis": 2,
        "cha": 3
      },
      "skills": {
        "acrobatics": 13,
        "deception": 9,
        "occultism": 11,
        "stealth": 13
      },
      "languages": [
        "aklo",
        "common",
        "sakvroth",
        "shae",
        "sussuran"
      ],
      "defenses": {
        "immunities": [
          "precision"
        ],
        "resistances": [
          "cold 5",
          "void 5"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "VdgqOmcdTkgggnVY",
          "name": "Dagger",
          "bonus": 13,
          "damage": "1d4+5 piercing; 1d6 cold",
          "traits": [
            "agile",
            "finesse",
            "versatile-s"
          ]
        },
        {
          "id": "dLMAFMqNUxlmTN4X",
          "name": "Dagger",
          "bonus": 13,
          "damage": "1d4+5 piercing; 1d6 cold",
          "traits": [
            "agile",
            "thrown-10",
            "versatile-s"
          ]
        }
      ],
      "actions": [
        {
          "id": "NJm2VdVQrwDn112D",
          "name": "Shadow Shift",
          "kind": "passive",
          "description": "Being made partially of shadow themselves, shae are Concealed in dim light or darkness even to creatures that can see clearly in those light levels."
        },
        {
          "id": "pPPA3LPdsuQ55Gp0",
          "name": "Counterattack",
          "kind": "reaction",
          "description": "Trigger The shae is targeted by an attack from an adjacent creature that misses due to the shae being Concealed\nRequirements The shae is aware of the attack\nEffect The shae makes a Strike against the attacker."
        },
        {
          "id": "4ajY6AeHzOgwoB3H",
          "name": "Slip",
          "kind": "reaction",
          "description": "Trigger A creature moves adjacent to the shae\nEffect The shae teleports to a clear space adjacent to another creature they can see within 30 feet."
        },
        {
          "id": "AELQ9eZZYSwimA7P",
          "name": "Bide",
          "kind": "action",
          "description": "The shae prepares to take action against their foes, watching their opponent and waiting for the right opportunity to respond. The shae gains a second reaction until the start of their next turn, though they still can't use more than one reaction on the same triggering action."
        },
        {
          "id": "fYpLZdqHoH2EpmhI",
          "name": "Swift Steps",
          "kind": "passive",
          "description": "The shae's movement doesn't trigger reactions."
        },
        {
          "id": "CcOaWq1ZikuzfZ88",
          "name": "Tenebral Form",
          "kind": "passive",
          "description": "The shae can Fly at full Speed in Vapor Form."
        }
      ],
      "spellcasting": [
        {
          "id": "Nxg7iUxwWhxMhySE",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 13,
          "saveDc": 21,
          "spells": [
            {
              "id": "Ag91jcroUkc2dKGt",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "1bKbbjo8JUZP8Tut",
              "name": "Void Warp",
              "rank": 1
            },
            {
              "id": "VWEAgF7iG7hLA3uD",
              "name": "Vapor Form (At Will)",
              "rank": 4
            },
            {
              "id": "xZlNbzJzZCNKvumU",
              "name": "Interplanar Teleport (self only; to Netherworld or Universe only)",
              "rank": 7
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:mist-stalker",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "vYpuSMLX0yQSDyFn",
      "slug": "mist-stalker",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:1bb3eca104bee0f4fdf17fc89587f9011aa1489bf624d0aced3c7ada67b6de68",
    "translatableHash": "sha256:21c95feed5fbdeb67aed08d1535bd69285752982b903fc0c5cb3f3b3c92249cb",
    "data": {
      "schemaVersion": 1,
      "name": "Mist Stalker",
      "level": 4,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "amphibious",
        "elemental",
        "water"
      ],
      "description": "The tentacled mist stalker shrouds itself in a cloak of mist through which its single, never-blinking eye can see with clarity, allowing it an advantage when stalking prey.\nWater elementals that become infused with cold or mist have increased mobility in regions outside of bodies of water.",
      "armorClass": 20,
      "hitPoints": 60,
      "speedFeet": 20,
      "perception": {
        "modifier": 13,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 10,
        "reflex": 12,
        "will": 11
      },
      "abilities": {
        "str": 4,
        "dex": 4,
        "con": 2,
        "int": 1,
        "wis": 5,
        "cha": 0
      },
      "skills": {
        "athletics": 10,
        "stealth": 12
      },
      "languages": [
        "thalassic"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "paralyzed",
          "poison",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "XUM2GwLpvy7pxzQZ",
          "name": "Tentacle",
          "bonus": 14,
          "damage": "2d8+4 bludgeoning",
          "traits": [
            "finesse",
            "reach-10",
            "sweep"
          ]
        }
      ],
      "actions": [
        {
          "id": "SBCPhBWUHgl75DBD",
          "name": "Mist Vision",
          "kind": "passive",
          "description": "The mist stalker ignores the Concealed condition from mist and fog."
        },
        {
          "id": "ZoC7CATQnWjlsAFv",
          "name": "Mist Cloud",
          "kind": "passive",
          "description": "15 feet. The mist stalker is surrounded by mist. Creatures in the aura are Concealed. If wind disperses the aura, it returns automatically at the start of the mist stalker's turn. This cloud is suppressed in water."
        },
        {
          "id": "zvR7MSF9WZcsx83r",
          "name": "Constrict",
          "kind": "action",
          "description": "(1d8+4)[bludgeoning] damage, check (fortitude, dc:21, basic)"
        },
        {
          "id": "uElbz9DaiIQUAYnT",
          "name": "Solidify Mist",
          "kind": "action",
          "description": "The mist stalker makes its mist cloud congeal, causing the aura to be difficult terrain until the start of the mist stalker's next turn. In addition, the mist stalker can make the mist even thicker around a single Medium or smaller creature within the cloud. The creature must succeed at a check (reflex, dc:20) save or become Immobilized until it Escapes or is no longer in the mist cloud's emanation."
        },
        {
          "id": "dguU5KO3a7biOZPl",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:shambler-troop",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "WQYzPF4cN4msA8lw",
      "slug": "shambler-troop",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:ceaa7c2a266811203a847aa75188fa0c36137a4c93e18b42fac7f19c6b78b0fa",
    "translatableHash": "sha256:0b4a7b221c244f49cb48561107cf54445d840cad5c758de4770d3b317c27c7ad",
    "data": {
      "schemaVersion": 1,
      "name": "Shambler Troop",
      "level": 4,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "mindless",
        "troop",
        "undead",
        "unholy",
        "zombie"
      ],
      "description": "This shuffling mass of decaying flesh moves with dull but singular focus.\nNecromancers most often create these mindless undead as obedient, expendable servitors. Left to its own devices, a zombie seeks only to consume the living, stopping only when its rotting body can no longer hold together.",
      "armorClass": 18,
      "hitPoints": 90,
      "speedFeet": 20,
      "perception": {
        "modifier": 7,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 11,
        "reflex": 8,
        "will": 9
      },
      "abilities": {
        "str": 5,
        "dex": 0,
        "con": 3,
        "int": -5,
        "wis": 1,
        "cha": -2
      },
      "skills": {},
      "languages": [],
      "defenses": {
        "immunities": [
          "bleed",
          "death-effects",
          "disease",
          "mental",
          "paralyzed",
          "poison",
          "unconscious"
        ],
        "resistances": [],
        "weaknesses": [
          "area-damage 5",
          "slashing 5",
          "splash-damage 5",
          "vitality 5"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "XwWCEF1iz5k5JonQ",
          "name": "Slow",
          "kind": "passive",
          "description": "A shambler troop is permanently Slowed 1 and can't use reactions."
        },
        {
          "id": "XgJmdGUCM0MxJSNQ",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": "Thresholds 60 (3 segments), 30 (2 segments)"
        },
        {
          "id": "RVDO3jOARLxlC4Ha",
          "name": "Troop Movement",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "kDNWlOfWS3EwLRus",
          "name": "Void Healing",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "40Wm7PMpubOHARnN",
          "name": "Grave Tide",
          "kind": "passive",
          "description": "The shambler troop is less organized than most troops. It can move into other creatures' spaces, and other creatures can move into its spaces. Its spaces are difficult terrain to other creatures."
        },
        {
          "id": "9h7H5cLoexL4ZlMm",
          "name": "Shambling Onslaught",
          "kind": "action",
          "description": "1 to 2\nFrequency once per round\nEffect The shamblers lash out at any enemies in their squares or within a @Template[type:emanation|distance:5] (check (reflex, dc:18, basic) save). The damage depends on the number of actions.\n1 (2d6+5)[bludgeoning|options:area-damage] damage\n2 (2d6+9)[bludgeoning|options:area-damage] damage"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:earthen-destrier",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "WrczIpL6U4KotDD0",
      "slug": "earthen-destrier",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:4b6f14c3e608e315ec87482d9ec2022953ca043233c3ffa4f863afe5a18e2d83",
    "translatableHash": "sha256:0ee77e7aec9b1d0a3afd76e731d784fb92416844cd917639ca88ea7d745a997e",
    "data": {
      "schemaVersion": 1,
      "name": "Earthen Destrier",
      "level": 4,
      "rarity": "common",
      "size": "large",
      "traits": [
        "earth",
        "elemental"
      ],
      "description": "This wave of dirt takes the crude likeness of the melded forequarters of a charging warhorse and a rocky knight wielding a rudimentary lance of gray stone.\nCertain earth elementals manifest as specific types of material, be they boulders, sand, or crystals.",
      "armorClass": 20,
      "hitPoints": 75,
      "speedFeet": 50,
      "perception": {
        "modifier": 10,
        "senses": [
          "darkvision",
          "tremorsense-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 14,
        "reflex": 9,
        "will": 10
      },
      "abilities": {
        "str": 4,
        "dex": 1,
        "con": 4,
        "int": -1,
        "wis": 3,
        "cha": 0
      },
      "skills": {
        "athletics": 12
      },
      "languages": [
        "petran"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "paralyzed",
          "poison",
          "sleep"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "DGLMhXRL9kfjuV58",
          "name": "Lance Arm",
          "bonus": 14,
          "damage": "2d8+6 piercing",
          "traits": [
            "deadly-d8",
            "reach-10"
          ]
        },
        {
          "id": "p8nvkFJKCC8KDRJ3",
          "name": "Hoof",
          "bonus": 14,
          "damage": "2d6+6 bludgeoning",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "oA6VClVL0oWGJ75c",
          "name": "Earth Glide",
          "kind": "passive",
          "description": "An earthen destrier can Burrow through earthen matter, including rock. When it does so, it moves at its full burrow Speed, leaving no tunnels or signs of its passing."
        },
        {
          "id": "R0XX3kX0WHiuaSDG",
          "name": "Lancing Charge",
          "kind": "passive",
          "description": "If the destrier moved at least 10 feet directly before its lance arm Strike, it gains a +2 circumstance bonus to its damage roll."
        },
        {
          "id": "peUw22PPNITZYshk",
          "name": "Tilting Strike",
          "kind": "reaction",
          "description": "Trigger The earthen destrier tramples a creature\nEffect The earthen destrier makes a lance arm Strike against the creature it's Trampling with a –5 circumstance penalty."
        },
        {
          "id": "mFJ3syFxirOftXRs",
          "name": "Trample",
          "kind": "action",
          "description": "Medium or smaller, hoof, check (reflex, dc:20, basic)"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:aphorite-sharpshooter",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "Yei6zuiycFTzNMvN",
      "slug": "aphorite-sharpshooter",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:10cfcb371707b341e208dc60ff749b28329364703257995429722bc9d19223f0",
    "translatableHash": "sha256:2e78b4c466d8941e8d82297fcfd0e14c9cf821db5daeefcdacd5f79507f4293a",
    "data": {
      "schemaVersion": 1,
      "name": "Aphorite Sharpshooter",
      "level": 4,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "human",
        "humanoid",
        "nephilim"
      ],
      "description": "The denizens of the Eternal City of Axis first forged aphorites to serve as emissaries, agents, and facilitators, with one foot in the sublime, perfect order, and one in the messy, murky, confusing muck of the Universe. In time, aphorites spread across the length and breadth of Golarion. Today, they can be found in any corner of any land, and only a fraction still serve Axis directly.\nAphorites, like all nephilim, stand out quite vividly from their fellow mortals, sporting metallic skin, a faint coating of crystalline dust, a swirl of mathematical symbols, or perfectly symmetrical features. Many aphorites think logically and find satisfaction in careers dealing with numbers and information. Often, this leads them to become bookkeepers, clerks, or architects, but some become military engineers or sharpshooters. Others are drawn to the art of production, becoming blacksmiths, carpenters, engineers, architects, tailors, masons, or other such artisans. But no matter their careers, aphorites often feel the urge to tinker, and aphorite inventions draw both mockery and appreciation in equal measure.\nAphorites who work in less academic professions, such as mercenaries or laborers, sometimes hide their keen analytical intelligence beneath extravagant demeanors and flamboyant hats. Some craft even these disguises with the same depth and complexity they do other aspects of their lives, considering every theatrical mannerism carefully and planning out their every detail.\nNephilim are individuals infused with the essence of an immortal being from the Outer Planes, such as a celestial, fiend, or monitor. While the examples presented here are humans with nephilim heritages that trace back to Axis and the Maelstrom, members of nearly any ancestry can be born with an influx of similar energies and become a planar scion. More about nephilim can be found starting on page 78 of Player Core, and other nephilim NPCs are presented beginning on page 266 of Monster Core.",
      "armorClass": 21,
      "hitPoints": 60,
      "speedFeet": 20,
      "perception": {
        "modifier": 8,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 10,
        "reflex": 12,
        "will": 8
      },
      "abilities": {
        "str": 2,
        "dex": 4,
        "con": 2,
        "int": 1,
        "wis": 0,
        "cha": 2
      },
      "skills": {
        "acrobatics": 10,
        "athletics": 8,
        "deception": 10,
        "diplomacy": 10,
        "intimidation": 10
      },
      "languages": [
        "common",
        "utopian"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "o2bvNDD7h7NL6kar",
          "name": "Shortsword",
          "bonus": 14,
          "damage": "1d6+8 piercing",
          "traits": [
            "agile",
            "finesse",
            "versatile-s"
          ]
        },
        {
          "id": "hSQVNL06fbPook2Y",
          "name": "Crossbow",
          "bonus": 14,
          "damage": "1d8+6 piercing",
          "traits": [
            "reload-1"
          ]
        }
      ],
      "actions": [
        {
          "id": "f6fUdFSEUPbYQN9s",
          "name": "Crystalline Dust",
          "kind": "action",
          "description": "Frequency once per day\nEffect The sharpshooter becomes Concealed for 4 rounds, though they can't use the concealment to Hide or Sneak, as normal for concealment where their position is obvious."
        },
        {
          "id": "bz12bq6lqimppJ7W",
          "name": "Calculated Reload",
          "kind": "passive",
          "description": "When the sharpshooter reloads their crossbow, they also calculate the best angle to their target, increasing the damage die from 1d8 to 1d10 and gaining a +2 circumstance bonus to their damage roll for their next crossbow Strike, as long as it occurs before the end of their next turn."
        },
        {
          "id": "qyO3tN9tRhSMOM2Y",
          "name": "Hurtful Critique",
          "kind": "action",
          "description": "The sharpshooter makes witty but disparaging comments about the fighting style of a target within 30 feet, expressing sympathy over every missed blow and providing sarcastic advice on how to improve.\nThe target must succeed at a check (will, dc:18) save or take a –1 circumstance penalty to attack rolls (–2 on a critical failure) for 1 minute or until it makes a successful Strike against the sharpshooter.\nA creature that critically succeeds or who Strikes the sharpshooter after failing is immune to that sharpshooter's Hurtful Critique for 1 hour.\nEffect: Hurtful Critique"
        }
      ],
      "spellcasting": [
        {
          "id": "rcaEawqAXg1AEp3t",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 10,
          "saveDc": 18,
          "spells": [
            {
              "id": "J78p1jwOtUfCUVl9",
              "name": "Sure Strike",
              "rank": 1
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:bison",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "z2qSD3VrlRsXGHT5",
      "slug": "bison",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:5115baf6487343e82ce5f30605e268c6f25b98542b2022822e6b0dcf9214d008",
    "translatableHash": "sha256:6b340df0a5abd971d0294f589bd7fcfe7e3cc152cf4921422ddc578c5f9ed18e",
    "data": {
      "schemaVersion": 1,
      "name": "Bison",
      "level": 4,
      "rarity": "common",
      "size": "large",
      "traits": [
        "animal"
      ],
      "description": "Bison are large bovines with short faces and two horns; they weigh an upwards1 of 2,000 pounds and stand up to 6 feet at the withers. Bison herds thunder across the grassy plains of Golarion, shaking the earth. They're a common sight along the Whistling Plains east of Taldor and the wide grasslands of the nation of Karazh in Casmaron; they also frequently appear in the cooler northeastern reaches of Avistan, the River Kingdoms through Numeria, and the Realm of the Mammoth Lords and western Sarkoris.\nCommunal by nature, bison gather in large numbers for the summer mating season before the bulls split off to wander the prairie grasses. Bison have adapted well to harsh prairie winters, as their shaggy fur, which grows thicker in winter, insulates them; in the face of blizzards, they survive by facing steadfastly into the howling winds and hunkering down to reduce their exposure.\nThe way that bison wallow in dirt or rub against large stones might make it easy to mistake their docile nature for passivity. However, this presumption has been the ruin of many hunting parties. Their plentiful meat and thick furs make bison an appealing bounty, but with the ground thundering beneath them, bison can quickly overpower inexperienced hunters unprepared for a stampeding herd. These hunting parties sometimes hire particularly daring adventures, who can add their spells, steel, and expertise to ensure a successful hunt.\nWhile the bison of the plains are the best known and most numerous, they have cousins both in thick boreal forests and along wide, open steppes. These bison variants stand taller but can't match the speed and aggression of their smaller plains relatives.",
      "armorClass": 20,
      "hitPoints": 70,
      "speedFeet": 30,
      "perception": {
        "modifier": 8,
        "senses": [
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 13,
        "reflex": 11,
        "will": 8
      },
      "abilities": {
        "str": 6,
        "dex": 3,
        "con": 5,
        "int": -5,
        "wis": 2,
        "cha": -1
      },
      "skills": {
        "athletics": 14,
        "survival": 10
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "AlDSrVGyweTmAY0N",
          "name": "Hoof",
          "bonus": 12,
          "damage": "2d6+6 bludgeoning",
          "traits": []
        },
        {
          "id": "tC5SlnihlaxwiNPE",
          "name": "Horn",
          "bonus": 12,
          "damage": "2d8+6 piercing",
          "traits": [
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "0eEbWDjEXskh1gvK",
          "name": "Cold Adaptation",
          "kind": "passive",
          "description": "The bison reduces the effects it suffers from cold environments by one step."
        },
        {
          "id": "zDFtneAmSUjx6qnK",
          "name": "Pointed Charge",
          "kind": "action",
          "description": "The bison surges forward at its foe, horns lowered. It Strides twice. If the bison ends its movement within melee range of an enemy, it makes a horn Strike against that enemy. This Strike gains the fatal d12 trait."
        },
        {
          "id": "LaB8UoWpNQqZKM30",
          "name": "Rolling Thunder",
          "kind": "action",
          "description": "The bison kicks up dust and shakes the ground as it charges.\nThe stampeding bison Strides up to twice its Speed in a straight line, dealing (4d6+6)[bludgeoning|options:area-damage] damage (check (reflex, dc:21, basic, options:area-effect) save) to any Medium or smaller creature in its path.\nMultiple bison can participate in Rolling Thunder by spending this ability's actions and waiting to charge until the herd is ready. Before the beginning of their next turn, they can then charge as a reaction triggered by an adjacent bison beginning its Rolling Thunder charge. All bison in the combined charge must charge in parallel lines, so the areas can't overlap. The combined charge deals an additional 3d6[bludgeoning] damage to creatures in the area, and a creature that fails the Reflex saving throw is also knocked Prone."
        },
        {
          "id": "z8BBIDN9nKLoG4FV",
          "name": "Knockdown",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:abrikandilu",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "zfy0YOxEAMaeHAWI",
      "slug": "abrikandilu",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:86796a800bf47cbb6a7598994dee385c4f892a49c8cc113ee246aeca240350be",
    "translatableHash": "sha256:872391c6695e0a102605a32472bd04661df3d2eb63c7409dff4af88bb5699edb",
    "data": {
      "schemaVersion": 1,
      "name": "Abrikandilu",
      "level": 4,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "demon",
        "fiend",
        "unholy"
      ],
      "description": "Wrecker demons, also known as abrikandilus, despise beautiful things and do everything in their power to destroy both people and objects regarded as such. An abrikandilu forms from the souls mortals who were vandals, misanthropes, or defacers of artwork, particularly if their destructive actions stemmed from feelings of powerful envy.\nAn abrikandilu loathes only one thing more than beauty: their own visage. The mere sight of their face-reflected in a mirror, a shield, or even a pool of water- can send a wrecker demon into a rage. Many demon slayers leverage tactic to their advantage, venturing into battle with polished steel shields and cold iron blades at the ready.\nMortal souls that have been twisted and corrupted by sin sometimes arise in the afterlife as demons. These powerful and destructive fiends seek to spread their particular sin to warp more souls, thereby bolstering their numbers and continuing the cycle.",
      "armorClass": 19,
      "hitPoints": 70,
      "speedFeet": 25,
      "perception": {
        "modifier": 10,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 15,
        "reflex": 9,
        "will": 7
      },
      "abilities": {
        "str": 4,
        "dex": 1,
        "con": 3,
        "int": -2,
        "wis": 2,
        "cha": 0
      },
      "skills": {
        "athletics": 12,
        "intimidation": 8
      },
      "languages": [
        "chthonian",
        "draconic",
        "empyrean"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "cold-iron 5",
          "holy 5"
        ]
      },
      "attacks": [
        {
          "id": "VBxySuyNQGXdtmjL",
          "name": "Claw",
          "bonus": 14,
          "damage": "2d6+4 slashing",
          "traits": [
            "agile",
            "unarmed",
            "unholy"
          ]
        },
        {
          "id": "QwKsTc2ps0cjzmnW",
          "name": "Jaws",
          "bonus": 14,
          "damage": "3d6+4 piercing",
          "traits": [
            "unarmed",
            "unholy"
          ]
        },
        {
          "id": "hbJLdmKm20p84vtq",
          "name": "Hurled Debris",
          "bonus": 11,
          "damage": "2d6+4 bludgeoning",
          "traits": [
            "unholy"
          ]
        }
      ],
      "actions": [
        {
          "id": "qS1org7dYlUL1ThV",
          "name": "Telepathy 100 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "983mBG3qwmzQKGS2",
          "name": "Hatred of Mirrors",
          "kind": "passive",
          "description": "An abrikandilu loathes the sight of their reflection. When a creature Interacts with a mirror within sight of the wrecker demon, the demon takes a -2 penalty to Will saves against Intimidation checks.\nAn abrikandilu that ends their turn adjacent to a mirror or that's attacked by a creature holding a mirror takes 1d6[mental] damage (this usually leads abrikandilus to focus their efforts on destroying nearby mirrors using Wreck)."
        },
        {
          "id": "3wLOdV2RXEY5pnF5",
          "name": "Loathsome Bite",
          "kind": "passive",
          "description": "When an abrikandilu hits a creature with their jaws Strike, the creature becomes infected with the demon's self-loathing. The creature must succeed at a check (will, dc:21) save to avoid gaining a –1 status penalty to Charisma-based checks. This penalty is cumulative up to –3, and remains even if the wounds are healed. The penalty is reduced by 1 every 24 hours until it reaches 0.\nEffect: Loathsome Bite"
        },
        {
          "id": "4cx1d9efogHuWe26",
          "name": "Wreck",
          "kind": "action",
          "description": "The abrikandilu makes two claw Strikes against an unattended object or held mirror. Held mirrors use the holding actor's AC.\nIf both Strikes hit, combine their damage for the purpose of overcoming any Hardness or resistance.\nThese Strikes don't count toward the abrikandilu's multiple attack penalty, nor does that penalty apply to these Strikes."
        }
      ],
      "spellcasting": [
        {
          "id": "0jNl0jg5W1N5NrTS",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 12,
          "saveDc": 20,
          "spells": [
            {
              "id": "kBj0RqQnEELUYiNC",
              "name": "Fear",
              "rank": 2
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:stone-lion",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "ZLqdudajQtI8dkTT",
      "slug": "stone-lion",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:b334f71288aa8e04efa8109c85968a8982371546a11f299b0e5e7d2a6eabd1f9",
    "translatableHash": "sha256:1f308de3c880d57e5f40c268e34f5d5c78123c48891301555a2c48326a7b795d",
    "data": {
      "schemaVersion": 1,
      "name": "Stone Lion",
      "level": 4,
      "rarity": "uncommon",
      "size": "large",
      "traits": [
        "celestial",
        "holy"
      ],
      "description": "Stone lions are a common sight outside of banks, temples, palaces, and even private residences. The fierce expressions affixed on their faces remind passersby to stay on their best behavior.\nStone lions remain faithful guardians of a site, regardless of whether it falls into disrepair. Even if people abandon a place, the lion remains dutiful until its statue is too worn or broken to inhabit any longer.\nStone statues of beasts can often be found paired and standing guard to either side of an entryway. While some seem like merely lifeless statues, others are far more than they appear to be. Guardian beasts ward against evil and misfortune. Some of these celestial spirits were assigned this task, while others assumed their roles out of a sense of duty. To allow them to maintain a constant presence in the material world, pious artisans carve stone vessels of the beasts in their likeness; these statues then serve as anchors for the guardian beasts' souls. Should the need arise, guardian beasts can merge with their stony form, becoming a dangerous foe with noble courage, an indomitable will, and few weaknesses.\nBy day, guardian beasts stay in their vessels and pretend to be inanimate. Past nightfall, they might patrol the grounds in their stone form or leave the heavy vessel behind to go where a solid body can't reach. Some take this chance to visit the dreams of individuals they favor and send them messages, notifying them of strange occurrences or warning them of incoming danger. Despite their good intentions, the dream messages from guardian beasts can be obscure, often overshadowed by the spirit's personality or strange assumptions they make due to their nature as resolute guardians.\nWhile guardian beasts can work alone, they usually appear in bonded pairs who complement each other in nature. One could be a jokester, the other gloomy; another could be nurturing, the other strict. To make two otherwise identical-looking beasts distinct, sculptors often depict one stone animal with their young. In the case of stone lions, a common type of guardian beasts, this approach means carving stone lion cubs to accompany one of the guardians.",
      "armorClass": 21,
      "hitPoints": 50,
      "speedFeet": 0,
      "perception": {
        "modifier": 13,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 11,
        "reflex": 9,
        "will": 13
      },
      "abilities": {
        "str": 4,
        "dex": 3,
        "con": 3,
        "int": 1,
        "wis": 5,
        "cha": 0
      },
      "skills": {
        "athletics": 10,
        "intimidation": 8,
        "religion": 13
      },
      "languages": [
        "common",
        "empyrean"
      ],
      "defenses": {
        "immunities": [
          "disease",
          "paralyzed",
          "petrified",
          "poison"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [],
      "actions": [
        {
          "id": "lhL8xfOwt9J6D4t5",
          "name": "Telepathy 60 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "e3kt6jZa3bspNiSF",
          "name": "Anchored Soul",
          "kind": "passive",
          "description": "The lion is mystically bonded to its bonded vessel and must remain within 1 mile of it. Some might be further restricted to the location it guards."
        },
        {
          "id": "riFooTptrWPMV3tk",
          "name": "+1 Status to All Saves vs. Unholy",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "G5wnFqnf2owuuqKY",
          "name": "Bonded Vessel",
          "kind": "passive",
          "description": "The condition of a stone lion's vessel dictates the lion's maximum Hit Point value. Undamaged, the vessel is an object with 50 Hit Points (BT 25). When the lion is in spirit form, damaging it doesn't hurt the vessel, but damaging the vessel deals an equal amount of damage to the lion. When the lion Inhabits its Vessel, they're a single target, and damage reduces the Hit Points of both the lion and the vessel. If the vessel is broken, the lion can still fight normally while inhabiting it and suffers no ill effect, but if the vessel is ever destroyed, the lion is instantly slain and can't reconstitute."
        },
        {
          "id": "C0NEkV1zwoV5vogY",
          "name": "Reconstitution",
          "kind": "passive",
          "description": "When the lion reaches 0 Hit Points, its spirit dissipates. If its bonded vessel is intact, the lion re-forms in this vessel after [[/gmr 2d4 #Reconstitution]]{2d4 days}, fully healed. If the vessel is broken, it must first be Repaired, after which the lion reforms in [[/gmr 3d4 #Reconstitution]]{3d4 days}."
        },
        {
          "id": "SQvpxbj1u4t8orbJ",
          "name": "Ferocious Roar",
          "kind": "action",
          "description": "The lion makes a terrifying roar that deals 2d8[sonic|options:area-damage] damage (check (fortitude, dc:23, basic, options:area-effect) save) to each creature in a @Template[cone|distance:20]. Creatures that fail this save become Frightened 1."
        },
        {
          "id": "oJXCaHxdH67r6d1I",
          "name": "Inhabit Vessel",
          "kind": "action",
          "description": "The lion touches and melds with its bonded vessel, bringing the statue to life. It can cease Inhabiting its Vessel by spending a single action, which has the concentrate trait. While Inhabiting the Vessel, it loses its fly Speed and gains\nImmunities healing, nonlethal\nResistances physical 5 (except bludgeoning),\nSpeed 30 feet, and it gains the following Strikes:\n• Melee A Jaws +14, Damage 2d6+7 bludgeoning plus Grab.\n• Ranged A Stone Ball +13 (range increment 30 feet), Damage 2d4+7 bludgeoning."
        },
        {
          "id": "F5nrBH7jkTIQsJqp",
          "name": "Spirit Body",
          "kind": "passive",
          "description": "When not Inhabiting its Vessel, the lion is incorporeal and gains resistance 5 to all damage (except force damage and damage from Strikes with the Ghost Touch property rune; double resistance against non-magical)."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:gnokesh",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "28lDGjmeiGmbRilm",
      "slug": "gnokesh",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:709cae62e7d50dfe288abe105b3b4cf3dce8838d662ee175d28534348c7b5492",
    "translatableHash": "sha256:13e4e8be969eec5ad586107480d7ee5b56103d2aaa54b065ec5bb08b32c0ee87",
    "data": {
      "schemaVersion": 1,
      "name": "Gnokesh",
      "level": 5,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "archon",
        "celestial",
        "holy"
      ],
      "description": "The structure of a gnokesh, a wheel of ancient tomes, refects its role in Heaven. These archons perfectly embody Heavenly knowledge, in particular the diligent pursuit of study and research. Each gnokesh is dedicated to one particular subject. This subject is crucial to their identity in a way few other than gnokeshes can understand. These archons avoid violence, fnding the pursuit of knowledge far more interesting. They prefer to gather with others of their kind in great libraries or serve as record-keepers or tutors for archivists, researchers, generals, advisors, and others who can use their expertise.",
      "armorClass": 21,
      "hitPoints": 70,
      "speedFeet": 25,
      "perception": {
        "modifier": 15,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 9,
        "reflex": 12,
        "will": 15
      },
      "abilities": {
        "str": 2,
        "dex": 4,
        "con": 0,
        "int": 5,
        "wis": 4,
        "cha": 4
      },
      "skills": {
        "arcana": 12,
        "diplomacy": 11,
        "nature": 11,
        "occultism": 12,
        "religion": 13,
        "society": 12
      },
      "languages": [
        "chthonian",
        "diabolic",
        "draconic",
        "empyrean",
        "fey",
        "sakvroth",
        "shadowtongue",
        "utopian"
      ],
      "defenses": {
        "immunities": [
          "fear-effects"
        ],
        "resistances": [],
        "weaknesses": [
          "unholy 5"
        ]
      },
      "attacks": [
        {
          "id": "q9BD9ifEn9sD3U1r",
          "name": "Tome",
          "bonus": 13,
          "damage": "1d6+6 bludgeoning; 1d6 spirit",
          "traits": [
            "divine",
            "finesse",
            "holy"
          ]
        },
        {
          "id": "i3b1uKFHRVx2E6ZG",
          "name": "Light Ray",
          "bonus": 13,
          "damage": "2d6 fire; 2d6 spirit",
          "traits": [
            "divine",
            "holy",
            "light",
            "magical",
            "spirit"
          ]
        }
      ],
      "actions": [
        {
          "id": "HH4ISIiIoZfuxebh",
          "name": "Light of Diligence",
          "kind": "passive",
          "description": "The gnokesh has devoted themselves to the thorough study of one particular Lore skill (with the bonus found in the Skills section), such as Heaven Lore or Warfare Lore. If the gnokesh rolls a critical failure to Recall Knowledge with this skill, they get a failure instead. They can also use the Aid action for this skill without frst preparing to help, and they automatically grant a +3 circumstance bonus."
        },
        {
          "id": "qBCZGjY9sPa7WN2N",
          "name": "All-Around Vision",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "6wkMbalDgG8lNnyX",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "utit7xgb3ultcCbp",
          "name": "Archon's Protection",
          "kind": "reaction",
          "description": "Trigger An enemy damages the archon's ally and both are within 15 feet of the archon\nEffect The ally gains resistance 5 to all damage against the triggering damage, and the archon can make a Strike against the enemy.\nEffect: Archon's Protection"
        },
        {
          "id": "JSAXrZ4PtjwnQUNm",
          "name": "Light of Diligence",
          "kind": "reaction",
          "description": "Trigger A willing ally within 15 feet critically fails at a check\nEffect The ally gets a failure instead and becomes immune to Light of Diligence for 1 minute."
        },
        {
          "id": "vuGqPWJplxt8Vnpm",
          "name": "Alluring Knowledge",
          "kind": "action",
          "description": "Frequency once per hour\nEffect A twisting scroll of runes made of light appears in an unoccupied square within 60 feet. Each creature adjacent to the runes must succeed at a check (will, dc:22, basic) save or take 3d8[mental] damage and be Fascinated with the magical text as long as it remains. The magical text lasts until the end of the gnokesh's next turn."
        }
      ],
      "spellcasting": [
        {
          "id": "CC1FgOXQ8eC4hvGH",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 14,
          "saveDc": 22,
          "spells": [
            {
              "id": "Qv6KxtUIeR8utkD4",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "XudEeqSegy5hahCK",
              "name": "Message",
              "rank": 1
            },
            {
              "id": "G2IVuQlMDi0bVOYo",
              "name": "Sure Strike",
              "rank": 1
            },
            {
              "id": "W1Rocyg2Tl3EcvwJ",
              "name": "Telekinetic Hand",
              "rank": 1
            },
            {
              "id": "ghg2xndMWkpqffIh",
              "name": "Silence",
              "rank": 2
            },
            {
              "id": "u8UnWWKoZ9OrarLU",
              "name": "Calm",
              "rank": 3
            },
            {
              "id": "5aua1cRog87n7Niu",
              "name": "Clairaudience",
              "rank": 3
            },
            {
              "id": "hBlb216loUPfBM2Y",
              "name": "Clairvoyance",
              "rank": 4
            },
            {
              "id": "5BM3wCLljXeLp502",
              "name": "Translocate (At Will)",
              "rank": 4
            },
            {
              "id": "CC9wVlwyrSe7p7e3",
              "name": "Truespeech (Constant)",
              "rank": 5
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:storm-hag",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "AjEh9Mk44RleMwSR",
      "slug": "storm-hag",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:a7efed2e2f502b6015449d0ed0b19b29f96f8b5e1dd5373710de2cdf77fc04f6",
    "translatableHash": "sha256:91ebbb305e022fdddde376a3e9f7ec8618796a8dd0513ece226c0d4ed8317cdd",
    "data": {
      "schemaVersion": 1,
      "name": "Storm Hag",
      "level": 5,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "air",
        "electricity",
        "hag",
        "humanoid"
      ],
      "description": "Ruthless and temperamental, storm hags are the personification of a storm's rage. Outcasts by their own behavior, storm hags are often found on islands they've made into personal havens, controlling the local inhabitants through threats. Unlike most hags, many storm hags show signs of genuinely caring for their offspring, both those adopted and by birth. Any such children who possess morals aren't in for an easy life, however, as they're usually left trying and failing to deal with their mother's implacable temper toward others.\nA storm hag's true form resembles an older humanoid woman with storm-tossed white hair, lightning-bright eyes, and dark blue skin. They typically only show their true form when in a rage, which makes their natural visage seem more terrifying than it actually is.\nHags are bizarre predators with uncertain origins, best known for targeting children and the young. To a one, they appear female, and they typically disguise themselves as mortal women in their day-to-day lives. Their powerful magic and manipulative tactics allow them to lure in the naive and vulnerable, exploiting their victims for their own sadistic purposes before kidnapping or devouring them. The typical hag is defined by a vain and controlling nature. Less malevolent hags may exist, but if so, they keep themselves well hidden to avoid the attentions of adventurers and their own abusive kin.",
      "armorClass": 21,
      "hitPoints": 90,
      "speedFeet": 25,
      "perception": {
        "modifier": 12,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 15,
        "reflex": 9,
        "will": 12
      },
      "abilities": {
        "str": 4,
        "dex": 2,
        "con": 4,
        "int": 2,
        "wis": 3,
        "cha": 4
      },
      "skills": {
        "acrobatics": 11,
        "deception": 11,
        "intimidation": 13,
        "occultism": 13,
        "stealth": 11
      },
      "languages": [
        "aklo",
        "common",
        "jotun",
        "sussuran"
      ],
      "defenses": {
        "immunities": [
          "electricity"
        ],
        "resistances": [],
        "weaknesses": [
          "cold-iron 5"
        ]
      },
      "attacks": [
        {
          "id": "rFakD0KrlUr9DJiQ",
          "name": "Claw",
          "bonus": 15,
          "damage": "1d4+4 slashing; 1d12 electricity",
          "traits": [
            "agile",
            "unarmed"
          ]
        },
        {
          "id": "ka8ggPLmvKPNC19r",
          "name": "Cutting Gale",
          "bonus": 13,
          "damage": "4d6 slashing",
          "traits": [
            "air"
          ]
        }
      ],
      "actions": [
        {
          "id": "iCM4V1WXNcTslhi7",
          "name": "Coven",
          "kind": "passive",
          "description": "A storm hag adds Hydraulic Torrent, Lightning Storm, and Mariner's Curse to her coven's spells."
        },
        {
          "id": "K0pcy2s3gTJZZK7a",
          "name": "Stormsight",
          "kind": "passive",
          "description": "Wind, precipitation, and clouds don't impair a storm hag's vision; she ignores the Concealed condition from storms, mist, precipitation, and the like."
        },
        {
          "id": "WypFVNf6qa1B0aVW",
          "name": "Voice of the Storm",
          "kind": "passive",
          "description": "A storm hag can send spoken messages or sounds on the wind to any spot that she has seen and the wind can reach within a 50-mile radius. She can send a quiet whisper or a loud scream, and decides whether it's clearly audible or barely heard above the wind. The message is delivered regardless of whether anyone is present to hear it. The hag can use this ability to Demoralize creatures that hear her message with dire threats or unnerving whispers of doom."
        },
        {
          "id": "9mNOMUTupeV7mKVt",
          "name": "Change Shape",
          "kind": "action",
          "description": "The storm hag can take on the appearance of any Medium humanoid woman. This doesn't change their Speed or their attack and damage bonuses with their Strikes, but it might change the damage type their Strikes deal (typically to bludgeoning)."
        },
        {
          "id": "w77WlabNy5GCIm4X",
          "name": "Storm Passage",
          "kind": "passive",
          "description": "The storm hag ignores difficult terrain caused by wind, rain, and other stormy weather."
        },
        {
          "id": "4QFJBrjb8mR8VE6I",
          "name": "Stormcalling",
          "kind": "passive",
          "description": "A storm hag can perform a special Control Weather ritual, which requires no secondary casters, to change the weather within 5 miles of her location for [[/r 4d12 #Duration Stormcalling]]{4d12 hours}. The primary check is a check (occultism, dc:23) check, and she can't get an outcome worse than a failure.\nThe storm hag can create only hurricanes, thunderstorms, and tornadoes, but she can do so regardless of the current season. She can also quell natural weather events but never willingly does so."
        },
        {
          "id": "jXHs8IwojZHlZUSA",
          "name": "Wind Mastery",
          "kind": "passive",
          "description": "A storm hag is unaffected by strong winds, natural or magical. Windy conditions are not difficult terrain for her."
        }
      ],
      "spellcasting": [
        {
          "id": "QuSzkFT66YGAGqLE",
          "name": "Occult Innate Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 14,
          "saveDc": 22,
          "spells": [
            {
              "id": "ODCBqMH3Mukqgv8l",
              "name": "Gust of Wind (At Will)",
              "rank": 3
            },
            {
              "id": "mw3wlSsubGLRlK7w",
              "name": "Lightning Bolt",
              "rank": 3
            },
            {
              "id": "xhF5Xk4jUpaPE1Im",
              "name": "Summon Elemental (air or water only)",
              "rank": 3
            },
            {
              "id": "xIZix0LNNMp0o00o",
              "name": "Wall of Wind",
              "rank": 3
            }
          ]
        },
        {
          "id": "jAcMhmLTK9Y34bhZ",
          "name": "Coven Spells",
          "tradition": "occult",
          "category": "innate",
          "attackModifier": 14,
          "saveDc": 22,
          "spells": [
            {
              "id": "DPio61Xo9DWw63dC",
              "name": "Hydraulic Torrent",
              "rank": 4
            },
            {
              "id": "fGS7ZTj5QbPl89bS",
              "name": "Augury",
              "rank": 5
            },
            {
              "id": "f0U9nsCCbTjPuuSI",
              "name": "Charm",
              "rank": 5
            },
            {
              "id": "1erdoQ19HdgMh43a",
              "name": "Clairaudience",
              "rank": 5
            },
            {
              "id": "09XDOIa8PXAg6WWV",
              "name": "Clairvoyance",
              "rank": 5
            },
            {
              "id": "kxH8uaeDvRKNCdfE",
              "name": "Dream Message",
              "rank": 5
            },
            {
              "id": "DKFYsGbe9qlf81K5",
              "name": "Illusory Disguise",
              "rank": 5
            },
            {
              "id": "sPXW0kNqvoCApQrd",
              "name": "Illusory Scene",
              "rank": 5
            },
            {
              "id": "XLJ97lssMOxZUXwx",
              "name": "Lightning Storm",
              "rank": 5
            },
            {
              "id": "7k4gVkfxd3qDnvV7",
              "name": "Mariner's Curse",
              "rank": 5
            },
            {
              "id": "19ZtTxfvyWQzGT93",
              "name": "Scouting Eye",
              "rank": 5
            },
            {
              "id": "m9Hgb8Td5e92cMTR",
              "name": "Talking Corpse",
              "rank": 5
            },
            {
              "id": "4XWf2sLfXV2u62V8",
              "name": "Cursed Metamorphosis",
              "rank": 6
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:tiger-topiary",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "ANfTuWnyjZfH87QF",
      "slug": "tiger-topiary",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:16866f73c8e9f77b3d0111c62495cf0e8e1190f230b0c5f749f5500b62a10ca5",
    "translatableHash": "sha256:91cdbea191b57d863f670a0ff47230ae3781765bb7c2037ce53ba8bc995d3385",
    "data": {
      "schemaVersion": 1,
      "name": "Tiger Topiary",
      "level": 5,
      "rarity": "common",
      "size": "large",
      "traits": [
        "plant"
      ],
      "description": "Tiger topiaries are most often found within the Impossible Lands and Tian Xia, adding a dangerous appearance to an enchanting garden. Souls of very proud and volatile individuals can become tiger topiaries, turning into silent stalkers and hunters. Following intruders throughout their territory until they're at their most vulnerable, they're known to pick off unsuspecting adventuring parties one member at a time. Seamlessly blending into nature, only experienced travelers can spot a tiger topiary in time to plot a different course.\nTopiaries are an extremely common sight across Golarion, especially within the gleaming and well-manicured lawns of nobility. Living topiaries develop from the death of a lone soul in an overgrown area of deep primal magic, with the soul exploding into the plants around it and causing them to grow together into the form of an animal, often influenced by the personality of the dying person. Once fully formed, the living topiary lacks their original memories; however, they're filled with the desire to protect the area they were formed in, driving off invaders and those who would do harm to the flora and fauna.",
      "armorClass": 21,
      "hitPoints": 80,
      "speedFeet": 40,
      "perception": {
        "modifier": 14,
        "senses": [
          "low-light-vision",
          "scent-imprecise-60"
        ]
      },
      "saves": {
        "fortitude": 15,
        "reflex": 12,
        "will": 9
      },
      "abilities": {
        "str": 4,
        "dex": 4,
        "con": 3,
        "int": -2,
        "wis": 0,
        "cha": 3
      },
      "skills": {
        "athletics": 12,
        "nature": 10,
        "stealth": 12
      },
      "languages": [
        "muan"
      ],
      "defenses": {
        "immunities": [
          "bleed"
        ],
        "resistances": [],
        "weaknesses": [
          "fire 8"
        ]
      },
      "attacks": [
        {
          "id": "h4IgckVD51neVR3k",
          "name": "Claw",
          "bonus": 13,
          "damage": "2d6+7 slashing",
          "traits": []
        },
        {
          "id": "kbwQv3149oe29vnP",
          "name": "Jaws",
          "bonus": 13,
          "damage": "2d8+7 piercing",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "vqybIb8P1vb5zVCC",
          "name": "Stalker",
          "kind": "passive",
          "description": "When in dense foliage or tall grass, the tiger topiary gains a +1 status bonus to checks to Hide."
        },
        {
          "id": "O54az9ApIZzzAV5B",
          "name": "Pounce",
          "kind": "action",
          "description": "The tiger topiary Strides or Leaps and makes a Strike at the end of that movement. If it began this action Hidden, it remains hidden until after this ability's Strike."
        },
        {
          "id": "aONNsUhVIXV2Vc5r",
          "name": "Pruning",
          "kind": "action",
          "description": "The tiger topiary twists and contorts its shape, shedding branches and leaves as needed to change into a topiary of a Medium or smaller animal. Until the next time it acts, the topiary has an automatic result of 32 for Deception checks and DCs to appear as a mundane topiary."
        },
        {
          "id": "som1jvHuZxW9xsMT",
          "name": "Walk Through Plants",
          "kind": "passive",
          "description": "The tiger topiary ignores difficult terrain caused by dense vegetation."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:dig-widget",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "AybkJlxPivzb1cJb",
      "slug": "dig-widget",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:8a254d2551fcd15fff49e0f7320cf323ecc67b2fa2f8d2ee06e575f7d975bc59",
    "translatableHash": "sha256:bd575ed603330d90f2159416848fcef0fee7f48aa16c57ef017e7c465cd49332",
    "data": {
      "schemaVersion": 1,
      "name": "Dig-Widget",
      "level": 5,
      "rarity": "common",
      "size": "small",
      "traits": [
        "construct",
        "mindless"
      ],
      "description": "Thieves covet dig-widgets, specialized constructs built for infiltration. Each dig-widget contains numerous simple tools, including a set of mechanical devices that function as thieves' tools, two arms with drills, and two arms with corkscrews for attaching to and climbing surfaces. Once activated, these devices propel themselves forward. Though they have the faculties typical of a construct, they usually follow a simple routine: avoid notice, pick any lock barring the path, dig past obstacles, and attack if caught. They're rarely left unattended, as a thief needs to be nearby to follow after—both to steal goods and to stop the dig-widget from engaging in further larceny once it's achieved its goal.\nThe source of a dig-widget's power is as much mechanical as it is magical. The gears and springs that provide a dig-widget mobility are an improvement over more primitive true clockwork creations (whose functions require constant winding to remain mobile), but at the cost of security, for a dig-widget's moving parts can be dismantled quickly by thieves and others with the proper training.\nWhile many authorities ban dig-widgets, they have a harder time confiscating the machines than might be expected. A sizable number of people who encounter dig-widgets, from hired adventurers to tunneling kobolds, are far more inclined to keep the constructs for themselves than turn them over to be dismantled. Often, this is simply due to the novelty of the dig-widget rather than any desire to use it.",
      "armorClass": 23,
      "hitPoints": 65,
      "speedFeet": 30,
      "perception": {
        "modifier": 9,
        "senses": [
          "darkvision",
          "tremorsense-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 10,
        "reflex": 14,
        "will": 7
      },
      "abilities": {
        "str": 2,
        "dex": 5,
        "con": 1,
        "int": -5,
        "wis": 0,
        "cha": -5
      },
      "skills": {
        "acrobatics": 12,
        "athletics": 9,
        "stealth": 14,
        "thievery": 15
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "y0g8S6A5Uri1G8xe",
          "name": "Drill",
          "bonus": 14,
          "damage": "2d6+4 piercing; 1d6 bleed",
          "traits": [
            "fatal-d10",
            "finesse"
          ]
        },
        {
          "id": "8tPI0ksCv4zvd6WV",
          "name": "Corkscrew",
          "bonus": 14,
          "damage": "2d8+4 piercing",
          "traits": [
            "finesse"
          ]
        }
      ],
      "actions": [
        {
          "id": "yqx6BirfDar1gC35",
          "name": "Tremorsense 30 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "ZMxrbMShYOtO3gEG",
          "name": "Infiltration Tools",
          "kind": "passive",
          "description": "A dig-widget's face consists of a set of Infiltrator Thieves' Tools. They can be salvaged from a destroyed dig-widget with a successful check (crafting, dc:20, name:Salvage Infiltration Tools) check. On a failed check, the tools are destroyed."
        },
        {
          "id": "nYQgnHNVs60rcvUn",
          "name": "Mechanical Vulnerability",
          "kind": "passive",
          "description": "A creature with expert proficiency in Thievery can attempt a check to [[/act disable-device dc=22]] to damage a dig-widget. The DC is 22, and each success deals 20[untyped] damage."
        },
        {
          "id": "mGkbLuXtisEvFNNs",
          "name": "Fastening Leap",
          "kind": "action",
          "description": "The dig-widget Leaps up 20 feet onto a creature or object and attempts a corkscrew Strike against it. If the Strike damages the target, the dig-widget attaches to the target (typically to the back of a creature). This is similar to Grabbing the creature, but the dig-widget moves with that creature rather than holding it in place. While attached, the dig-widget can't use its corkscrew. The dig-widget can be Shoved off, or it can detach itself with an Interact action."
        },
        {
          "id": "MH7wNM2dBDOtmzVO",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "A dig-widget's Strikes deal an additional 1d6 precision damage to Off-Guard creatures."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:caligni-vanguard",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "bgeCbx3Gr54YaKEJ",
      "slug": "caligni-vanguard",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:898cc6cd308adfabb1001d37f54f40d11d0ee5a0376ae2e6f7f4b12976c0e07c",
    "translatableHash": "sha256:6005ed009aca32a0f2a12e77bc57e77b104b683c08170c52760f2afea84b25c0",
    "data": {
      "schemaVersion": 1,
      "name": "Caligni Vanguard",
      "level": 5,
      "rarity": "uncommon",
      "size": "medium",
      "traits": [
        "caligni",
        "humanoid"
      ],
      "description": "Caligni children born without eyes-an extremely rare occurrence-are considered sacred to their communities. From a young age, they're set aside and groomed to become caligni vanguards, dedicated to rigorous martial training and mental strictures. Other calignis revere vanguards' discipline and combat skill, but wary caution always tinges such respect, as they often have inscrutable motives. Vanguards almost never rebel against their duties or their established role in the community; some claim that those who do are taken by the owbs.\nA vanguard's armor is fused to their body in pieces, and they rarely remove those elements that aren't. This armor plating and vanguards' keen sense of hearing render them particularly sensitive to sonic vibrations, which serves as both an asset and a vulnerability.\nEach individual in caligni society serves a specific role. At times, certain roles so rarely find suitable candidates that a community might only see a few individuals fill them in an entire generation.",
      "armorClass": 24,
      "hitPoints": 50,
      "speedFeet": 25,
      "perception": {
        "modifier": 13,
        "senses": [
          "echolocation-60"
        ]
      },
      "saves": {
        "fortitude": 14,
        "reflex": 8,
        "will": 11
      },
      "abilities": {
        "str": 5,
        "dex": -1,
        "con": 3,
        "int": 1,
        "wis": 4,
        "cha": 1
      },
      "skills": {
        "athletics": 14,
        "stealth": 8
      },
      "languages": [
        "caligni",
        "sakvroth"
      ],
      "defenses": {
        "immunities": [
          "visual"
        ],
        "resistances": [
          "slashing 5"
        ],
        "weaknesses": [
          "sonic 5"
        ]
      },
      "attacks": [
        {
          "id": "DL9RtsdSy9Gulbqd",
          "name": "Greatsword",
          "bonus": 16,
          "damage": "1d12+8 slashing",
          "traits": [
            "versatile-p"
          ]
        },
        {
          "id": "j1yTlYWclYVbVuCO",
          "name": "Composite Longbow",
          "bonus": 10,
          "damage": "1d8+5 piercing",
          "traits": [
            "deadly-d10",
            "volley-30"
          ]
        }
      ],
      "actions": [
        {
          "id": "Ljg3kgAdR1sVGBeL",
          "name": "Echolocation 60 feet",
          "kind": "passive",
          "description": "A caligni vanguard can use their hearing as a precise sense at the listed range."
        },
        {
          "id": "sRU8pYLkFEMCRECp",
          "name": "Death Blaze",
          "kind": "passive",
          "description": "When the vanguard dies, their body combusts in a blaze of fire and armor shrapnel. All creatures within a @Template[emanation|distance:10] take 3d6[fire,3d6[piercing]|options:area-damage]{3d6 fire damage and 3d6 piercing damage} (check (reflex, dc:19, basic, options:area-effect) save). The vanguard's armor is destroyed in the blaze, but their other gear is unaffected and left in a pile where they died."
        },
        {
          "id": "cgZmHdvUciQfXo8N",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "I3LHE7CKMGHBy5aq",
          "name": "Call to Arms",
          "kind": "action",
          "description": "Each caligni within @Template[emanation|distance:30]{30 feet} of the vanguard gains the Reactive Strike reaction until the end of the vanguard's next turn. Once a caligni has used this Reactive Strike, that caligni is temporarily immune to the same vanguard's Call to Arms for 10 minutes."
        },
        {
          "id": "VT3MCbqQoHOeEO6f",
          "name": "Shadowed Blade",
          "kind": "action",
          "description": "The vanguard makes a melee Strike, channeling shadowy essence into their weapon or unarmed attack to envelop the target. If the Strike hits, the target must succeed at a check (fortitude, dc:19) save or become Blinded until the end of its next turn."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:penanggalan",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "Bz8Sexx3bGFhE1Lq",
      "slug": "penanggalan",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:880c3a041162c022ce9c39720f64e86af29fee082000d7cf32b5f98764af4e5b",
    "translatableHash": "sha256:12e6baf59f14213568bda28b87f2669b30784d61ad5dfee6a69619c435f5730f",
    "data": {
      "schemaVersion": 1,
      "name": "Penanggalan",
      "level": 5,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "aberration",
        "tanggal"
      ],
      "description": "Penanggalans feed on the blood and entrails of the young. When their cannibalistic hunger strikes, penanggalans bathe their bodies in an alchemical substance that smells like vinegar. Once submerged in the concoction, their neck rips from side to side, allowing their head to float upward and pull out their lungs, stomach, and intestines. They leave their bodies in the vinegar bath much like a molting crab leaves its old shell, then fly off to find a victim filled with blood and guts.\nAs grotesque as these creatures are when hungry, the penanggalan appears young and healthy while wearing their body. Such is the nature of their existence: they consorted with otherworldy beings, gaining a lifetime of youth in exchange for an evil hunger for the young. But they are not immortal. They age and die normally like the people they once were-they just retain their youthfulness throughout this existence.\nIt can be difficult to spot a penanggalan among the populace. The faint scar ringing their neck at the point of separation can be explained away as a blemish, and it can be hidden under a flashy necklace. Meanwhile the faint, sour scent of a penanggalan's preserved body, while peculiar, is not uncommon in the sweaty tropics they frequent.",
      "armorClass": 22,
      "hitPoints": 85,
      "speedFeet": 0,
      "perception": {
        "modifier": 11,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 9,
        "reflex": 16,
        "will": 11
      },
      "abilities": {
        "str": 3,
        "dex": 5,
        "con": 2,
        "int": 0,
        "wis": 2,
        "cha": 5
      },
      "skills": {
        "athletics": 12,
        "deception": 14,
        "intimidation": 12,
        "stealth": 14
      },
      "languages": [
        "aklo",
        "common"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "slashing 5"
        ]
      },
      "attacks": [
        {
          "id": "RE9BxxRzi4ENZrXg",
          "name": "Proboscis Tongue",
          "bonus": 15,
          "damage": "2d6+5 piercing",
          "traits": [
            "finesse"
          ]
        },
        {
          "id": "PHZ0zixmQt2ljkJm",
          "name": "Entrails",
          "bonus": 13,
          "damage": "2d4+5 bludgeoning",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "ymApeJr8ZiUS6OhX",
          "name": "Spewing Bile",
          "kind": "passive",
          "description": "When the penanggalan takes slashing damage, their wound spews bile on adjacent creatures, dealing 2d10[poison] damage (check (fortitude, dc:19, basic) save).\nThe penanggalan loses their spewing bile and penanggalan bile abilities until the end of their next turn."
        },
        {
          "id": "HX6LFkk4karuzyse",
          "name": "Constrict",
          "kind": "action",
          "description": "(2d4+3)[bludgeoning], check (fortitude, dc:21, basic)"
        },
        {
          "id": "6m81W89YrbQ1gHjG",
          "name": "Elongate Tongue",
          "kind": "action",
          "description": "The penanggalan's tongue extends, the membrane stretching and becoming translucent. Until the end of the turn, the penanggalan's proboscis tongue Strikes have a 10-foot reach, and any target is Off-Guard against the Strike unless it has a Perception DC of 22 or higher or the ability to precisely sense Invisible things."
        },
        {
          "id": "t4NelvHMno5EsQBb",
          "name": "Penanggalan Bile",
          "kind": "passive",
          "description": "Rest doesn't decrease the drained value from penanggalan bile\nSaving Throw check (fortitude, dc:19)\nStage 1 Drained 1 (1 week)\nStage 2 Drained 2 (1 week)\nStage 3 Drained 3 (1 week)\nStage 4 dead"
        },
        {
          "id": "IVnGWQzHYIx6BwIf",
          "name": "Ride Corpse",
          "kind": "action",
          "description": "The penanggalan inserts their entrails into their humanoid body, allowing them to appear as and move about like a normal human. The body has 10 Hit Points and the same defenses as the penanggalan.\nWhen the body is destroyed, the penanggalan is ejected unharmed. The body becomes a corpse, and if it is neither controlled by the penanggalan nor stored in an alchemical vat, it decays as normal."
        },
        {
          "id": "HJcAkjvoxQjviuFG",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:skaveling",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "C0ZmzdUNtEdXdGcL",
      "slug": "skaveling",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:8a3330d653389190a127f24a7fd74fbabb9bfa15cf9da4c6a544f36578d78249",
    "translatableHash": "sha256:5d63f380996e6e79ed6757745b99f0cffc381f8cc59b914d846d5bb85a02b68e",
    "data": {
      "schemaVersion": 1,
      "name": "Skaveling",
      "level": 5,
      "rarity": "common",
      "size": "large",
      "traits": [
        "undead",
        "unholy"
      ],
      "description": "One must perform a hideous ritual to make a skaveling. Though sometimes called ghoul bats, they're specifically crafted undead rather than true ghouls. The bloodsucking urdefhans of the Darklands raise giant bats on a toxic fungus and the flesh of ghouls—specifically their brains. Upon reaching maturity, these giant bats are ritually slain via poison. While this rots away the flesh of most creatures, the specially prepared bats immediately rise from death as skavelings.\nDespite their tattered wings and sagging skin, skavelings are quite capable of flight, even when carrying a creature on their back. Urdefhans often use them as mounts. Their intelligence is more advanced than that of a typical giant bat, and in combat they behave more like allies than animals, capable of making tactical decisions.",
      "armorClass": 22,
      "hitPoints": 80,
      "speedFeet": 15,
      "perception": {
        "modifier": 15,
        "senses": [
          "darkvision",
          "echolocation-40"
        ]
      },
      "saves": {
        "fortitude": 11,
        "reflex": 13,
        "will": 15
      },
      "abilities": {
        "str": 6,
        "dex": 4,
        "con": 2,
        "int": 1,
        "wis": 6,
        "cha": 2
      },
      "skills": {
        "acrobatics": 13,
        "athletics": 13,
        "intimidation": 11
      },
      "languages": [
        "aklo",
        "sakvroth"
      ],
      "defenses": {
        "immunities": [
          "death-effects",
          "disease",
          "paralyzed",
          "poison",
          "unconscious",
          "bleed"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "ChobeFNcesw2DX01",
          "name": "Fangs",
          "bonus": 15,
          "damage": "2d8+8 piercing",
          "traits": []
        },
        {
          "id": "rMTD8eLYVnpfvpCd",
          "name": "Wing",
          "bonus": 15,
          "damage": "2d4+8 bludgeoning",
          "traits": [
            "agile"
          ]
        }
      ],
      "actions": [
        {
          "id": "h35hRTaiSXOfVZFA",
          "name": "Echolocation",
          "kind": "passive",
          "description": "A skaveling can use their hearing as a precise sense at the listed range."
        },
        {
          "id": "x183YuDiYXsrOlKc",
          "name": "Bone-Chilling Screech",
          "kind": "action",
          "description": "The skaveling unleashes a horrifying screech that chills the very bones of those close enough to feel it. The screech can be heard for miles, but each creature in a @Template[emanation|distance:20] must also attempt a check (will, dc:22, options:area-effect,inflicts:frightened,inflicts:stunned) save.\nThe skaveling can't use Bone-Chilling Screech again for [[/gmr 1d4 #Recharge Bone-Chilling Screech]]{1d4 rounds}.\nCritical Success The creature is unaffected and is temporarily immune to Bone-Chilling Screech for 24 hours.\nSuccess The creature is Frightened 1.\nFailure The creature is Frightened 2.\nCritical Failure The creature is frightened 2 and Stunned 1 by fear."
        },
        {
          "id": "WvbDVFf0oIn9hEQE",
          "name": "Consume Flesh",
          "kind": "action",
          "description": "Requirements The skaveling is adjacent to the corpse of a creature that died within the last hour\nEffect The skaveling devours a chunk of the corpse and regains 1d6 Hit Points plus 1d6 for every 2 levels the skaveling has ((1+(max(0,floor(@actor.level/2))))d6[healing]). They can regain Hit Points from any given corpse only once."
        },
        {
          "id": "ccq1B0m1a5XLWDfJ",
          "name": "Feast on Fear",
          "kind": "reaction",
          "description": "Trigger The skaveling deals damage to a Frightened creature with a fangs Strike\nEffect The skaveling draws power from the fear infusing a creature's flesh. The frightened creature must attempt a check (fortitude, dc:22, options:inflicts:slowed) saving throw.\nCritical Success The creature is unaffected.\nSuccess The creature takes a –5-foot status penalty to its Speed, and the skaveling gains a +5-foot status bonus to their Speeds until the end of their next turn.\nFailure The creature takes a –10-foot status penalty to its Speed, and the skaveling gains a +10-foot status bonus to their Speeds until the end of their next turn.\nCritical Failure The creature is Slowed 1, and the skaveling can immediately Fly, Step, or Stride as a free action; this movement doesn't trigger reactions.\nEffect: Feast on Fear"
        },
        {
          "id": "nqsUgYOhlUkHPLVq",
          "name": "Swift Dart",
          "kind": "action",
          "description": "The skaveling Flies up to half their Speed. This movement doesn't trigger reactions."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:ostiarius",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "coq1W1ZQul6DtH0b",
      "slug": "ostiarius",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:beb5b1ed7b61fe7ef4de246d41ce4e8b15afbd16b0d036f18d4b65ccee3f8299",
    "translatableHash": "sha256:135380450f3ed9e794d177f8130d59d2d5f4e8331819a6c7d34c2600fe98fab3",
    "data": {
      "schemaVersion": 1,
      "name": "Ostiarius",
      "level": 5,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "fiend",
        "unholy",
        "velstrac"
      ],
      "description": "Ostiariuses, as emissaries of the velstracs, tend to the portals between the Netherworld and the Universe. They not only escort other velstracs into the world of mortals but also work to entice mortals into the realms of the velstracs—from which most mortals never leave. Among the most pleasant and persuasive of the velstracs, ostiariuses are prepared to converse for hours upon any topic, and they're skilled at returning, again and again, to the subject of the delights found in their perverse philosophies. Ostiariuses stand over 6 feet tall, and individuals range from skeletally thin to hugely bulky.\nThe shadow-dwelling fiends known as velstracs all share a horrifying preoccupation with the search for ultimate sensation through self-mutilation. Velstracs transcend their stoic detachment only when inflicting pain and terror upon their victims, practicing new forms of torture, or turning their agonizing practices back on themselves. They consider themselves enlightened beings, transcending such limitations as morality or mortal taboos, but their victims know them as emotionless tormentors who inflict sadistic suffering. These fiends claim to seek perfection in thought, form, and action, although they don't recognize any refinement that doesn't require the painful excision of the flesh or spirit. Velstracs manifest from the souls of the most extreme masochistic or sadistic mortals who are judged and sent on to the Netherworld. They take on forms that suit their vile predilections, ranging from the low-ranking augurs to the maestros of suffering and mutilation, the eremites. The process of transformation warps the soul step by step, with other velstracs conveying their new members through untold chambers of pain among the dark reaches of the Netherworld.",
      "armorClass": 21,
      "hitPoints": 65,
      "speedFeet": 25,
      "perception": {
        "modifier": 15,
        "senses": [
          "greater-darkvision"
        ]
      },
      "saves": {
        "fortitude": 9,
        "reflex": 15,
        "will": 13
      },
      "abilities": {
        "str": 0,
        "dex": 4,
        "con": 2,
        "int": 2,
        "wis": 4,
        "cha": 5
      },
      "skills": {
        "acrobatics": 13,
        "deception": 12,
        "diplomacy": 12,
        "intimidation": 16,
        "religion": 11
      },
      "languages": [
        "common",
        "diabolic",
        "shadowtongue"
      ],
      "defenses": {
        "immunities": [
          "cold"
        ],
        "resistances": [],
        "weaknesses": [
          "holy 5",
          "silver 5"
        ]
      },
      "attacks": [
        {
          "id": "xTubIRChX4kOTaxA",
          "name": "Claw",
          "bonus": 13,
          "damage": "2d6 bleed; 2d6+2 slashing",
          "traits": [
            "agile",
            "finesse",
            "magical",
            "unholy"
          ]
        }
      ],
      "actions": [
        {
          "id": "3kfrvybdFk28DPXh",
          "name": "Telepathy 100 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "4mEk2MEfjNzN6v05",
          "name": "Painsight",
          "kind": "passive",
          "description": "A velstrac automatically knows whether a creature it sees has any of the Doomed, Dying, and Wounded conditions as well as the value of those conditions."
        },
        {
          "id": "L9upQ9ti4VWFpbqr",
          "name": "Sense Portal",
          "kind": "passive",
          "description": "The ostiarius always knows the direction and distance to the closest portal between the Netherworld and the Universe. This sense functions only on these two planes."
        },
        {
          "id": "KItS50Pw8TWZa266",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "PAxZwrgCgpnMXxQq",
          "name": "Regeneration 5 (Deactivated by Holy or Silver)",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "qrWGiVsKIcDRS6bQ",
          "name": "Whispering Wounds",
          "kind": "passive",
          "description": "30 feet. When a creature ends its turn in the aura, it hears the wounds on the ostiarius's body whisper obscene truths. The creature must succeed at a check (will, dc:21, options:area-effect,inflicts:sickened) save or become Sickened 1."
        },
        {
          "id": "bLAIJxEVsI9cQAJM",
          "name": "Compel Courage",
          "kind": "action",
          "description": "The ostiarius inspires their willing allies and themself by whispering words of courage from their wounds. The ostiarius and their allies in a @Template[type:emanation|distance:50] gain a +1 status bonus to attack rolls, damage rolls, and saves against fear effects. The ostiarius can Sustain Compel Courage. Non-velstracs who accept this compelled courage find bleeding wounds opening on their own bodies to whisper in thanks. They take 1[bleed] damage and can't attempt a flat check to end this damage as long as they're compelled.\nEffect: Compel Courage"
        },
        {
          "id": "uimm7EPXXyXrgSKw",
          "name": "Focus Gaze",
          "kind": "action",
          "description": "The ostiarius stares at a creature they can see within 30 feet. The creature must immediately attempt a Will save against whispering wounds. In addition, if the creature was already Sickened and fails its save, the creature is Fascinated by the ostiarius and can't use hostile actions. This fascination lasts for 1 round or until the ostiarius takes any hostile action against the creature or the creature's allies. Whether the creature succeeds at or fails the save, it's temporarily immune to Focus Gaze for 1 hour."
        }
      ],
      "spellcasting": [
        {
          "id": "k6dISUtlkxhJe6Ub",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 16,
          "saveDc": 24,
          "spells": [
            {
              "id": "SkGWISVw6wUWs2ZT",
              "name": "Shield",
              "rank": 1
            },
            {
              "id": "3UZzlE0U0cpJQs8f",
              "name": "Calm (At Will)",
              "rank": 2
            },
            {
              "id": "iAMC3F84fAxdzBFa",
              "name": "Darkness",
              "rank": 2
            },
            {
              "id": "yq80uqhp6vvjAtRA",
              "name": "Silence",
              "rank": 2
            },
            {
              "id": "QGB7awqSkt3tOqWb",
              "name": "Enthrall",
              "rank": 3
            },
            {
              "id": "0pTQmPVvUFQ9NNZl",
              "name": "Safe Passage",
              "rank": 3
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:stalker-automaton",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "DPPATAIrZ7rJJtJG",
      "slug": "stalker-automaton",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:5cc20fd3187f271c010ff2235b6426c6b07f236bb7c73c4d39d61883f2e35a56",
    "translatableHash": "sha256:f13d880e6dfe0381b81a6d4a3e0d04066ac2a805e5a80d61a8b19dd25f79ac4d",
    "data": {
      "schemaVersion": 1,
      "name": "Stalker Automaton",
      "level": 5,
      "rarity": "rare",
      "size": "medium",
      "traits": [
        "automaton",
        "construct"
      ],
      "description": "Stalker automatons house the minds of skilled hunters, scouts, and assassins in bodies patterned after the great hunters of the natural world. Stalkers generally have the shape of wolves, large cats, and other predatory creatures. The ancient artifcers improved upon their natural abilities, adding in specialized systems of arcane camoufage and movement. Surviving stalkers still pride themselves as hunters without peer, even as they've adapted to their animalistic forms.",
      "armorClass": 21,
      "hitPoints": 65,
      "speedFeet": 30,
      "perception": {
        "modifier": 15,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 10,
        "reflex": 14,
        "will": 13
      },
      "abilities": {
        "str": 4,
        "dex": 5,
        "con": 3,
        "int": 3,
        "wis": 4,
        "cha": 1
      },
      "skills": {
        "acrobatics": 12,
        "athletics": 11,
        "stealth": 14,
        "survival": 13
      },
      "languages": [
        "common"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "physical 5 except adamantine"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "gCj4jckwLaBUrTPE",
          "name": "Jaws",
          "bonus": 15,
          "damage": "2d10+6 piercing",
          "traits": []
        },
        {
          "id": "EBETzpRMqyqep8dx",
          "name": "Claw",
          "bonus": 15,
          "damage": "2d6+6 slashing",
          "traits": [
            "agile"
          ]
        }
      ],
      "actions": [
        {
          "id": "j3XAPh2z5qNEdrB2",
          "name": "Telepathy 60 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "8v4lL8KcCgtYZR7q",
          "name": "Astral Blink",
          "kind": "action",
          "description": "Frequency once per round\nEffect The stalker steps sideways into the astral realm, reappearing nearby. The stalker teleports to an unoccupied space within 15 feet that they can see."
        },
        {
          "id": "WlwXr8mN5CbEHtMi",
          "name": "Astral Pounce",
          "kind": "action",
          "description": "Requirements The stalker hasn't used Astral Blink this round\nEffect The stalker Astral Blinks or Strides and makes a Strike at the end of that movement. If the stalker began this action Hidden, it remains hidden until after this ability's Strike. The stalker then Astral Blinks or Strides again, whichever it did not already do."
        },
        {
          "id": "bWK2ZKQ8p4HMyjap",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "The creature's Strikes deal an additional 1d6 precision damage to Off-Guard creatures."
        }
      ],
      "spellcasting": [
        {
          "id": "Yg2cDb87EUxQiL1p",
          "name": "Arcane Innate Spells",
          "tradition": "arcane",
          "category": "innate",
          "attackModifier": 0,
          "saveDc": 20,
          "spells": [
            {
              "id": "514h7YoNxe0jhhur",
              "name": "Translocate (At Will)",
              "rank": 4
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:sabosan",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "Fyzj8WVOlsuTWTTU",
      "slug": "sabosan",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:95b90b6d52a20d80e99feec4d0fd3a397e17c320984dd72703f8f24b37d6f73e",
    "translatableHash": "sha256:fbb4ecacc2d4a808c93f8a95510a01c9e6c67906f3d3dcfdd00e9de3155f3dc3",
    "data": {
      "schemaVersion": 1,
      "name": "Sabosan",
      "level": 5,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "humanoid"
      ],
      "description": "Sabosans are intelligent, bat-like humanoids who live in warm forests and drink the blood of other creatures, particularly people. They have thin, emaciated torsos and broad, leathery wings that can reach a span of almost 20 feet. Sabosans' heads, necks, shoulders, and upper chests are covered with red or dark-brown fur that obscures their stretched-thin flesh. Though their ears are large and pointed like a bat's and they can echolocate as bats do, their vision is also quite strong, enough so that they can use it to easily track quarry in low light.\nSome naturalist scholars believe that sabosans are distant descendants of humans who were afflicted with vampirism but managed to avoid succumbing to undeath. Others posit they were once a cult of demon worshippers whose dark rites transformed them into their current forms. No matter their true origins, sabosans have infamous reputations among towns and cities south of Golarion's equator. Even mere rumors of sabosans in an area are enough to set off city-wide hunts, and the truly superstitious aren't above setting fires near every grotto, nook, and foxhole they come across in order to smoke out the nocturnal creatures.\nSabosans hunt during the twilight hours or just after dark, when their echolocation gives them an edge over sleeping prey. They are capable hunters but indiscriminating when it comes to food sources; their rapid metabolisms means sabosans must eat nearly 20 pounds of meat and fruit per day, supplemented, of course, with copious amounts of blood.\nSabosans' obscure faith reveres two deities: the slain Demon Lord Vyriavaxus, Lord of Shadows, and the nearly forgotten sun god Easivra. Vyriavaxus has an obvious link with the creatures, with his appearance as a giant bat, but their connection to the sun god hints at a complex depth in sabosan beliefs.",
      "armorClass": 22,
      "hitPoints": 78,
      "speedFeet": 25,
      "perception": {
        "modifier": 10,
        "senses": [
          "echolocation-20",
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 11,
        "reflex": 14,
        "will": 10
      },
      "abilities": {
        "str": 4,
        "dex": 5,
        "con": 2,
        "int": -1,
        "wis": 1,
        "cha": 0
      },
      "skills": {
        "acrobatics": 13,
        "athletics": 12,
        "stealth": 13
      },
      "languages": [
        "chthonian",
        "mwangi"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "Nsjcg03W4x2ElnCc",
          "name": "Jaws",
          "bonus": 15,
          "damage": "2d10+4 piercing; 1 bleed",
          "traits": [
            "finesse",
            "unarmed"
          ]
        },
        {
          "id": "ySPa5Sa7wY7Oyugj",
          "name": "Claw",
          "bonus": 15,
          "damage": "2d8+4 slashing",
          "traits": [
            "agile",
            "finesse",
            "unarmed"
          ]
        },
        {
          "id": "ZVnCqIGwZwPukDhh",
          "name": "Spear",
          "bonus": 14,
          "damage": "1d6+7 piercing",
          "traits": []
        },
        {
          "id": "SfFcwGTaNbZ6zFNW",
          "name": "Spear",
          "bonus": 15,
          "damage": "1d6+7 piercing",
          "traits": [
            "thrown-20"
          ]
        }
      ],
      "actions": [
        {
          "id": "6r3WJI32FjeNNZlp",
          "name": "Echolocation 20 feet",
          "kind": "passive",
          "description": "A sabosan can use their hearing as a precise sense at the listed range."
        },
        {
          "id": "LdhQrUO09um9htY6",
          "name": "Drain Blood",
          "kind": "action",
          "description": "Requirements The sabosan has a creature Grabbed or Restrained\nEffect The sabosan drains blood from the creature. The creature must succeed at a check (fortitude, dc:22) save or become Drained 1. The sabosan gains a number of temporary Hit Points equal to the number of Hit Points lost by the creature due to its drained condition."
        },
        {
          "id": "UmmKeGJIw44WAK7i",
          "name": "Fell Shriek",
          "kind": "action",
          "description": "The sabosan emits a deafening cry in a @Template[type:cone|distance:30]. Non-sabosan creatures in this area must each succeed at a check (fortitude, dc:22) save or be Deafened for 1 minute."
        },
        {
          "id": "CqrOCl7qaEx1GVuB",
          "name": "Powerful Charge",
          "kind": "action",
          "description": "The sabosan Strides or Flies up to double their Speed and then makes a claw Strike. If the sabosan moved at least 20 feet, they deal an additional 1d6 slashing damage on a hit."
        },
        {
          "id": "8meZ0YXikIFOePGp",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:lampad",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "j62ZpsgfHVfiRzAP",
      "slug": "lampad",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:fa5d556ddf4c40ad012963e6ea5c1e9bfb947e9789f7da9ee7a183e68a837a23",
    "translatableHash": "sha256:be53653fb3dd29e3f08868afebcb02a9cb21cb1463dd32c43aa80b275136870f",
    "data": {
      "schemaVersion": 1,
      "name": "Lampad",
      "level": 5,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "earth",
        "fey",
        "nymph"
      ],
      "description": "Lampads protect dark, hidden places underground. Not only do they defend subterranean caverns from threats, but they also safeguard well-meaning innocents from the dangers that lurk below the surface. Lampads are so-named for the wisps of magic light they often carry, guiding the lost to safety while luring threats to their doom. Lampads' mercurial nature makes their reactions difficult to predict, though they rarely demonstrate outright malice without sufficient provocation.\nNymphs are fey guardians of nature possessed of great beauty and forms that meld breathtaking humanoid features with the natural elements they guard. Nymph queens are powerful nymphs who rule over and protect a much greater territory of untouched wilderness. For instance, a lampad might guard a beautiful underground cavern, but a lampad queen might call an entire system of caves their domain.",
      "armorClass": 21,
      "hitPoints": 85,
      "speedFeet": 25,
      "perception": {
        "modifier": 12,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 11,
        "reflex": 14,
        "will": 12
      },
      "abilities": {
        "str": 0,
        "dex": 5,
        "con": 4,
        "int": 2,
        "wis": 3,
        "cha": 5
      },
      "skills": {
        "acrobatics": 12,
        "athletics": 9,
        "diplomacy": 14,
        "nature": 10,
        "occultism": 11,
        "performance": 14,
        "society": 9,
        "stealth": 12
      },
      "languages": [
        "aklo",
        "common",
        "fey",
        "sakvroth"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "cold-iron 5"
        ]
      },
      "attacks": [
        {
          "id": "Dpji6q4R6gQMLALe",
          "name": "Earthen Fist",
          "bonus": 14,
          "damage": "2d10+2 bludgeoning",
          "traits": [
            "agile",
            "finesse"
          ]
        },
        {
          "id": "5iH51KTA8CfAOS08",
          "name": "Light Wisp",
          "bonus": 14,
          "damage": "1d8+2 mental; 1d6 fire; 1d6 vitality",
          "traits": [
            "magical"
          ]
        }
      ],
      "actions": [
        {
          "id": "zZdlKoZukVTRu2lC",
          "name": "Cavern Dependent",
          "kind": "passive",
          "description": "A lampad is mystically bonded to a single cavern or other self-contained underground area and must remain within 300 feet of it.\nIf they move beyond that range, they become Sickened 1 and are unable to recover. They must attempt a check (fortitude, dc:19) save every hour or increase the sickened value by 1 (to a maximum of sickened 4).\nAfter 24 hours, they become Drained 1, with this value increasing by 1 every additional 24 hours. A lampad can perform a 24-hour ritual to bond to a new cavern."
        },
        {
          "id": "Mq1buiTxEF2rhIx8",
          "name": "Weep",
          "kind": "action",
          "description": "Frequency once per round\nEffect The lampad begins a heart-wrenching fit of weeping, inspiring sympathetic sobbing in nearby creatures. Each non-lampad creature within @Template[emanation|distance:30]{30 feet} who hears the lampad's weeping must succeed at a check (will, dc:20) save or be unable to use reactions for 1 round and Slowed 1 on its next turn as it sobs uncontrollably."
        }
      ],
      "spellcasting": [
        {
          "id": "TzOOJJ82k9VCuO5n",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 0,
          "saveDc": 22,
          "spells": [
            {
              "id": "ERkvCNOKOrrBTN2t",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "7Iu7WhKXOE6BENFm",
              "name": "Heal",
              "rank": 2
            },
            {
              "id": "Aq34DYCOxuk7fEss",
              "name": "Revealing Light",
              "rank": 2
            },
            {
              "id": "f0hlix5CO9QKB02B",
              "name": "One with Stone (At Will)",
              "rank": 3
            },
            {
              "id": "Gy7g5TrVp8gPFGq0",
              "name": "Pummeling Rubble",
              "rank": 3
            },
            {
              "id": "Bp5iEps0voGCRaOR",
              "name": "Shape Stone",
              "rank": 4
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:urdefhan-tormentor",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "Jxp6YG8S7st2MZ3p",
      "slug": "urdefhan-tormentor",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:223661eaed4a865504c6dcf8ebd7de113c358d2ce488e0157d75ec09b9922e08",
    "translatableHash": "sha256:dc24ab956587495c6e95b502aa710bc919f2c126896c32fdd181834a7cf043e1",
    "data": {
      "schemaVersion": 1,
      "name": "Urdefhan Tormentor",
      "level": 5,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "humanoid",
        "unholy",
        "urdefhan"
      ],
      "description": "Urdefhan spellcasters with a knack for the divine are invariably unholy worshippers of daemonkind, typically taking on one of Abaddon's Four Apocalypse Riders as their patron deity. With their unholy gifts, these urdefhan tormentors summon daemons into battle and bolster their allies with profane magic, preferring to stick to the sidelines rather than enter the fray directly.\nThe violent warmongers, occultists, and poisoners known as urdefhans dwell within the Darklands. They were created in eons past by the mysterious First Apocalypse Riders to serve as agents of the end times of the Universe. Urdefhans continue to honor their creators by worshipping the wretched beings who rule over the plane of Abaddon, and like their fiendish lieges, urdefhans exist for one reason and one reason alone: to kill.\nWhile urdefhans are humanoid and dwell together in large groups, this is where their similarities to other ancestries end. Their visages are horrific, with transparent skin and musculature displaying their glistening entrails, gleaming bones, and perhaps worst of all, their baleful red eyes. This appearance, combined with their gaping maws full of sharp fangs, works to create the false impression that urdefhan are some sort of vampiric undead, not creatures of living flesh and blood. When an urdefhan's life comes to an end, their flesh quickly curdles and then bursts in a wave of awful corruption that spreads to the flesh of other creatures in the area. The typical urdefhan views their eventual demise as a disappointment, for once they're dead, their chances to kill will finally come to an end.\nAn urdefhan's translucent body allows onlookers to see the various organs and fluids within, while their blue blood often signals their mood and telegraphs possible dangers. The blood of an excited urdefhan ready to attack grows more vibrant and even glows with a faint light. When an urdefhan is prepared to meet their death and imminent soul detonation, their blood grows dark, almost black as pitch.\nUrdefhans' primary concern is death and how to inflict it in the goriest, most painful, and widespread ways. Beyond this ethos of violence, urdefhans concern themselves only tangentially with matters such as formal modes of warfare or aspects of their damnable religion. When an urdefhan isn't actively engaged in violence, their giddy cruelty is tempered by only a sense of self-preservation that ensures they survive long enough to spread the \"blessings\" of their daemonic patrons. They pass the time between wars inventing new weapons, developing new diseases, and researching awful new magic, all in preparation for the next inevitable conflict.",
      "armorClass": 21,
      "hitPoints": 75,
      "speedFeet": 25,
      "perception": {
        "modifier": 13,
        "senses": [
          "greater-darkvision"
        ]
      },
      "saves": {
        "fortitude": 11,
        "reflex": 10,
        "will": 15
      },
      "abilities": {
        "str": 3,
        "dex": 1,
        "con": 3,
        "int": 2,
        "wis": 4,
        "cha": 2
      },
      "skills": {
        "acrobatics": 8,
        "crafting": 9,
        "intimidation": 11,
        "occultism": 12,
        "religion": 13
      },
      "languages": [
        "aklo",
        "daemonic",
        "sakvroth"
      ],
      "defenses": {
        "immunities": [
          "death-effects",
          "disease",
          "fear-effects"
        ],
        "resistances": [],
        "weaknesses": [
          "vitality 5"
        ]
      },
      "attacks": [
        {
          "id": "5SGUtpSvbbFHhkNZ",
          "name": "Warhammer",
          "bonus": 12,
          "damage": "1d8+5 bludgeoning",
          "traits": [
            "shove"
          ]
        },
        {
          "id": "T8YpU4mbdWCaucd7",
          "name": "Jaws",
          "bonus": 14,
          "damage": "2d6+5 piercing",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "Of63TPl7rHzoURow",
          "name": "Necrotic Decay",
          "kind": "passive",
          "description": "When an urdefhan dies, their translucent flesh quickly rots away and sublimates into a foul-smelling gas that fills a @Template[type:emanation|distance:5] around the body. This gas deals 5d6[void|options:area-damage] damage to creatures in this area as their flesh curdles and rots (check (fortitude, dc:21, basic) save)."
        },
        {
          "id": "9DNlZzSEsQ1WR3TE",
          "name": "Void Healing",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "KsljQaf0Yl6fRMIV",
          "name": "Stoke the Fervent",
          "kind": "action",
          "description": "Frequency once per day\nEffect The urdefhan lets out a battle cry, sending themself and their allies into a fanatical frenzy. The tormentor and each ally that hears the call gains a +1 status bonus to attack rolls, damage rolls, and saving throws, and takes a –1 status penalty to AC. Affected creatures must use at least one of their actions to Strike each round, if they're able (even if it means attacking an ally, object, or thin air). This lasts for [[/gmr 2d4 #rounds]]{2d4 rounds}."
        },
        {
          "id": "h2NpqvLh1k4IP42K",
          "name": "Wicked Bite",
          "kind": "action",
          "description": "Requirements The urdefhan damaged a creature with a jaws Strike on their last action\nEffect The urdefhan maintains contact, turning the creature's flesh translucent around the site of the injury. The target must succeed at a check (fortitude, dc:22) save or be affected by drain blood or drain vitality (the urdefhan's choice). If the jaws Strike was a critical hit, the creature is affected by both effects, using the same save result for both.\n• Drain Blood The urdefhan drinks some of the creature's blood. On a failed save, the creature is Drained 1 and the urdefhan regains 5 HP (or, on a critical failure, it's Drained 2 and the urdefhan regains 10 HP).\n• Drain Vitality The urdefhan draws out some of the creature's vital essence. The creature becomes Enfeebled 1 for 1 hour on a failed save (or Enfeebled 2 for 1 hour on a critical failure)."
        }
      ],
      "spellcasting": [
        {
          "id": "MRe2pgQdJJZguaRb",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 15,
          "saveDc": 23,
          "spells": [
            {
              "id": "b0M0jMOnadrVPR78",
              "name": "Enfeeble",
              "rank": 1
            },
            {
              "id": "sLF1eDNSW2lpusgj",
              "name": "Gentle Landing (Self Only)",
              "rank": 1
            },
            {
              "id": "QAF7R3LNRxOOKBAG",
              "name": "Grim Tendrils",
              "rank": 1
            },
            {
              "id": "RhYRqUWbaQhvINbj",
              "name": "Harm",
              "rank": 1
            },
            {
              "id": "40ps8tpwmEo1urzN",
              "name": "Darkness",
              "rank": 2
            },
            {
              "id": "32UZ6oMqki96HMXp",
              "name": "False Vitality",
              "rank": 2
            },
            {
              "id": "j6l2LX6oDYkUjx6P",
              "name": "Harm",
              "rank": 2
            },
            {
              "id": "VCOAyrKeaOUcbSLi",
              "name": "See the Unseen",
              "rank": 2
            },
            {
              "id": "nQh5EBcuOx5kSBuW",
              "name": "Harm",
              "rank": 3
            },
            {
              "id": "4SB790F39qBdk9lo",
              "name": "Paralyze",
              "rank": 3
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:hippopotamus",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "k6Qen3uOfNSh4FH9",
      "slug": "hippopotamus",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:700dcbcc8be81f998961efa327c0e1109b7d727d9fdbbe03058ef5c2d6617c2e",
    "translatableHash": "sha256:bf2dd4e5861ba7cdbfb0aaa1081afa475cb84b3bad112c44931344704fd6c1d7",
    "data": {
      "schemaVersion": 1,
      "name": "Hippopotamus",
      "level": 5,
      "rarity": "common",
      "size": "large",
      "traits": [
        "animal"
      ],
      "description": "Typical adult hippos move quickly on land and attack stealthily in the water.\nHippopotamuses, or hippos for short, are semiaquatic animals that spend most of their time in rivers and lakes, but can thrive on land.",
      "armorClass": 21,
      "hitPoints": 85,
      "speedFeet": 25,
      "perception": {
        "modifier": 11,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 15,
        "reflex": 9,
        "will": 11
      },
      "abilities": {
        "str": 6,
        "dex": 2,
        "con": 6,
        "int": -4,
        "wis": 4,
        "cha": -2
      },
      "skills": {
        "athletics": 13,
        "stealth": 11,
        "survival": 11
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "em9NLW7mMzfhE0zN",
          "name": "Jaws",
          "bonus": 15,
          "damage": "2d8+8 piercing",
          "traits": [
            "deadly-d10"
          ]
        },
        {
          "id": "i0DmnKFSoNKw74b0",
          "name": "Foot",
          "bonus": 15,
          "damage": "1d10+8 bludgeoning",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "sF9WtHVhfn1GjdG0",
          "name": "Deep Breath",
          "kind": "passive",
          "description": "The hippopotamus can hold its breath for 5 minutes."
        },
        {
          "id": "77VdjFfeeM9q4v52",
          "name": "Aquatic Ambush",
          "kind": "action",
          "description": "30 feet"
        },
        {
          "id": "WgsIqRCkUBMaMmMU",
          "name": "Capsize",
          "kind": "action",
          "description": "The hippopotamus tries to capsize an adjacent aquatic vessel of its size or smaller. The hippopotamus must succeed at an Athletics check with a DC of 25 (reduced by 5 for each size smaller the vessel is than the hippo) or the pilot's Sailing Lore DC, whichever is higher."
        },
        {
          "id": "vJ8ujjfSKTQbnE41",
          "name": "Trample",
          "kind": "action",
          "description": "Medium or smaller, foot, check (reflex, dc:22, basic)"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:ogre-spider",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "ou78GkBpPX59BeqL",
      "slug": "ogre-spider",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:f34eb2fc181a492745b24d2027839b715098356e4bb5e3c1c994be6368675b22",
    "translatableHash": "sha256:d0f5e234141750cb351974ec23cdac7c9b52397f0b1a292cec18242c4a0b6fe0",
    "data": {
      "schemaVersion": 1,
      "name": "Ogre Spider",
      "level": 5,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "animal"
      ],
      "description": "These terrifying creatures grow as large as elephants. The placement of their eyes above their wide mandibles evokes the grimacing visage of an ogre's leer. Ogres find ogre spider faces simultaneously amusing and adorable, but in most cases, ogres' attempts to keep these spiders as pets result in dead ogres and well-fed spiders.\nSpiders range dramatically in size, yet many are to some extent venomous.",
      "armorClass": 22,
      "hitPoints": 70,
      "speedFeet": 30,
      "perception": {
        "modifier": 13,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 15,
        "reflex": 13,
        "will": 9
      },
      "abilities": {
        "str": 6,
        "dex": 4,
        "con": 4,
        "int": -5,
        "wis": 2,
        "cha": -4
      },
      "skills": {
        "acrobatics": 13,
        "athletics": 13
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "C970adP4x9ALqNRp",
          "name": "Bite",
          "bonus": 15,
          "damage": "2d8+8 piercing",
          "traits": []
        },
        {
          "id": "WGj8AjEYS5D36JbP",
          "name": "Web",
          "bonus": 13,
          "damage": "",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "KxwqEISneXZXhawZ",
          "name": "Web Sense",
          "kind": "passive",
          "description": "The dream spider has imprecise Tremorsense to detect the vibrations of creatures touching its web."
        },
        {
          "id": "LRP4GFR52UrlTXTz",
          "name": "Eerie Flexibility",
          "kind": "passive",
          "description": "An ogre spider can fit through tight spaces as if it were a Large creature. While Squeezing, it can move at its full Speed."
        },
        {
          "id": "BNSIeBag48cFL88U",
          "name": "Ogre Spider Venom",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:22)\nMaximum Duration 6 rounds\nStage 1 1d6[poison] damage (1 round)\nStage 2 1d6[poison] damage, Clumsy 1, and Enfeebled 1 (1 round)\nStage 3 2d6[poison] damage, clumsy 1, and enfeebled 1 (1 round)\nStage 4 2d6[poison] damage, Clumsy 2, and Enfeebled 2 (1 round)"
        },
        {
          "id": "qM79tlRKs2FtDxZB",
          "name": "Web Trap",
          "kind": "passive",
          "description": "A creature hit by the ogre spider's web attack is Immobilized and stuck to the nearest surface until it Escapes (DC 22)."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:grodair",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "peCOXs71JT57JLsn",
      "slug": "grodair",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:388402f9635b5fb85ba0c6bb85927a262aea4b3ad720fcc513cd7c3aa18afce1",
    "translatableHash": "sha256:f31effb6be88ec7672ff47c2c6d26353f354aeb1cf7ba874cfa7580cb9dd5bea",
    "data": {
      "schemaVersion": 1,
      "name": "Grodair",
      "level": 5,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "amphibious",
        "beast",
        "fey",
        "water"
      ],
      "description": "Grodairs are bizarre fishlike creature native to the First World. Their supernatural physiology includes a strange organ with an extradimensional space capable of storing thousands of gallons of water. This grants grodairs the ability to create a suitable environment for themselves anywhere by releasing the water, quickly transforming any surrounding land into a shallow bog. When grodairs wish to leave for a new location, they simply suck up all the water back up. When necessary, grodairs can also travel on land by walking upon the tangle of long, fleshy tentacles that dangle from their bellies.\nGrodairs have two sets of eyes that function independently. While this makes the creatures difficult to surprise, it also makes them easy to distract. During conversations, they have a tendency to lose focus quickly and have difficulty remembering things. Still, they are avid conversationalists and enjoy hearing tales about the world. While this quality makes grodairs quite likable, they aren't reliable. They have difficulty following plans or schedules, and they can keep a secret only if they happen to forget it first. For these reasons, grodairs don't always make the best allies.\nGrodairs are voracious and curious omnivores who love trying new foods-in fact, the pursuit of new and interesting food is the most common reason that they venture out of First World. They can also capture and store within their throats any small animals and plants easily suspended in water, and eject them for consumption at a later time.",
      "armorClass": 20,
      "hitPoints": 90,
      "speedFeet": 25,
      "perception": {
        "modifier": 13,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 15,
        "reflex": 9,
        "will": 11
      },
      "abilities": {
        "str": 4,
        "dex": 2,
        "con": 4,
        "int": 1,
        "wis": 2,
        "cha": 2
      },
      "skills": {
        "athletics": 12,
        "nature": 13,
        "survival": 11
      },
      "languages": [
        "fey",
        "thalassic"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "KdVfLfgHwYXdIYXG",
          "name": "Jaws",
          "bonus": 15,
          "damage": "2d8+7 piercing",
          "traits": [
            "unarmed"
          ]
        },
        {
          "id": "jVgZ19s2KzgHUo1a",
          "name": "Tentacle",
          "bonus": 15,
          "damage": "1d10+7 bludgeoning",
          "traits": [
            "unarmed"
          ]
        },
        {
          "id": "xAxdPG2ftegyTaUj",
          "name": "Water Jet",
          "bonus": 13,
          "damage": "3d6 bludgeoning",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "P48WRIeVuuAB8JWK",
          "name": "Death Flood",
          "kind": "passive",
          "description": "When a grodair dies, its body explodes in a blast of pressurized water that deals 4d6[bludgeoning|options:area-damage] damage to creatures within a @Template[emanation|distance:15] (check (reflex, dc:22, basic, options:area-effect) save). A creature that fails its save is pushed 5 feet (or 10 feet on a critical failure)."
        },
        {
          "id": "8J1VrbhC0fQxs0Xu",
          "name": "Muddy Field",
          "kind": "action",
          "description": "The grodair transforms all soil, sand, or similar sediment in a @Template[emanation|distance:10] into mud for 1 round. This mud is difficult terrain for creatures other than grodairs."
        },
        {
          "id": "HAh9hAsU8XCNWPOU",
          "name": "Organ of Endless Water",
          "kind": "action",
          "description": "The grodair causes water to pour from a magical sac on its spine, either a stream of water at a rate of 1 gallon per round, or a fountain in a 5-foot-long stream at a rate of 5 gallons per round. It can stop the flow of water as a single action."
        },
        {
          "id": "LPf9DIArTBdgTKrW",
          "name": "Push 10 feet",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": [
        {
          "id": "JSpF7t2LpyYp70eW",
          "name": "Primal Innate Spells",
          "tradition": "primal",
          "category": "innate",
          "attackModifier": 0,
          "saveDc": 22,
          "spells": [
            {
              "id": "n4QlRoK5PAp1rD9a",
              "name": "Control Water",
              "rank": 5
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:emperor-cobra",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "pzCgOvNPish9QlTC",
      "slug": "emperor-cobra",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:c93ac99d0a26ee16f3edf031bebea64f5f96331f4af86f733f67237b6034985c",
    "translatableHash": "sha256:c7e19a361449968d0f5bd11700980d60ad276c2c3de83a0d9663c9149be69fb3",
    "data": {
      "schemaVersion": 1,
      "name": "Emperor Cobra",
      "level": 5,
      "rarity": "common",
      "size": "large",
      "traits": [
        "animal"
      ],
      "description": "These powerful serpents infest bogs and lowlands. Despite being over 16 feet long and weighing more than 200 pounds, they can climb trees in seconds. Emperor cobras ward off predators by flaring their hoods and hissing at attackers. Like many venomous snakes, they hunt by striking prey with their poison bite, retreating until their victims die, and then returning to swallow them whole.\nSnakes of some variety thrive in every non-arctic ecosystem, each with their own particular hunting patterns and defense mechanisms.",
      "armorClass": 21,
      "hitPoints": 80,
      "speedFeet": 25,
      "perception": {
        "modifier": 13,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 15,
        "reflex": 11,
        "will": 9
      },
      "abilities": {
        "str": 6,
        "dex": 4,
        "con": 4,
        "int": -4,
        "wis": 2,
        "cha": -2
      },
      "skills": {
        "acrobatics": 11,
        "athletics": 13,
        "survival": 11
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "8sbyQrO0XgVgbwdu",
          "name": "Fangs",
          "bonus": 15,
          "damage": "2d8+8 piercing",
          "traits": [
            "reach-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "L7IwmQCrHcUSxqlB",
          "name": "Emperor Cobra Venom",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:22)\nMaximum Duration 6 rounds\nStage 1 1d8[poison] damage (1 round)\nStage 2 1d8[poison] damage and Drained 1 (1 round)\nStage 3 2d6[poison] damage and Drained 2 (1 round)"
        },
        {
          "id": "qyKw3vIn6Iit3TbX",
          "name": "Flare Hood",
          "kind": "action",
          "description": "The emperor cobra flares its hood. Each non–emperor cobra creature within a @Template[type:emanation|distance:20] must attempt a check (will, dc:22) save. The creature is then temporarily immune for 1 minute.\nCritical Success The creature is unaffected.\nSuccess The creature is Frightened 1.\nFailure The creature is Frightened 2.\nCritical Failure The creature is Frightened 3."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:catrina",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "QgHtsAbVYswHzMC2",
      "slug": "catrina",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:e5344677f44946fb9600d578076779f8d33fce56e97efa2f2ea987b961d116b5",
    "translatableHash": "sha256:70b64155e2cce1e37ddf696a010357c01258af9ce5dab585d32798cfd1aa0a45",
    "data": {
      "schemaVersion": 1,
      "name": "Catrina",
      "level": 5,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "monitor",
        "psychopomp"
      ],
      "description": "Not all spirits who enter the Boneyard realize they have died. Catrinas meet these souls, helping to convince them of the finality of their fate to ease a spirit's passing. Catrinas are more likely to intervene when a mortal can't accept their death. They perform their task to keep the afterlife calm rather than out of true compassion for a mortal's grief. Catrinas rarely visit the Universe, typically to help an extremely important mortal pass on.\nCatrinas resemble skeletons dressed in bright flowers and colorful dresses, giving them a simultaneously festive and macabre appearance. Though most catrinas present as feminine, masculine catrinas still dress in bright colors and carry garlands of flowers.\nMany psychopomps are intimately involved with the Boneyard's massive bureaucracy. Few pursue mercy, justice, or personal gain; their duties to Pharasma and her Boneyard are supreme. Nevertheless, individual psychopomps interpret their duties in different ways, which might put them in conflict with mortals or even with each other.",
      "armorClass": 22,
      "hitPoints": 75,
      "speedFeet": 25,
      "perception": {
        "modifier": 13,
        "senses": [
          "darkvision",
          "lifesense-60"
        ]
      },
      "saves": {
        "fortitude": 11,
        "reflex": 12,
        "will": 13
      },
      "abilities": {
        "str": 0,
        "dex": 5,
        "con": 4,
        "int": 2,
        "wis": 4,
        "cha": 5
      },
      "skills": {
        "acrobatics": 14,
        "diplomacy": 14,
        "intimidation": 14,
        "medicine": 12,
        "occultism": 11,
        "religion": 12
      },
      "languages": [
        "chthonian",
        "diabolic",
        "empyrean",
        "requian"
      ],
      "defenses": {
        "immunities": [
          "death-effects",
          "disease"
        ],
        "resistances": [
          "poison 5",
          "void 5"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "3sFQuhzmeikV0HXF",
          "name": "Fist",
          "bonus": 14,
          "damage": "2d8+2 bludgeoning",
          "traits": [
            "agile",
            "finesse"
          ]
        }
      ],
      "actions": [
        {
          "id": "QaMBsZNQRzuJ05Ge",
          "name": "Telepathy 120 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "ZD4zsdkHd4IevvD4",
          "name": "Lifesense 60 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "NPOSvIR0w7ydApii",
          "name": "Constant Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "Pue0nPCDgWNH12d2",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "jSD0W0opMgSGzE2G",
          "name": "Calming Presence",
          "kind": "passive",
          "description": "30 feet. A creature that begins its turn within the area must attempt a check (will, dc:18) save.\nCritical Success The creature is unaffected and is temporarily immune to calming presence for 24 hours.\nSuccess The creature's attack rolls take a –1 status penalty for 1 round.\nFailure Any emotion effects that would affect the creature are suppressed, and the creature can't use hostile actions. If the creature is subjected to hostility from any other creature, it ceases to be affected by calming presence and is temporarily immune to calming presence for 24 hours.\nCritical Failure As failure, but hostility doesn't end the effect."
        },
        {
          "id": "zrrnfOeDLg5Dfw5r",
          "name": "Compel Condemned",
          "kind": "action",
          "description": "The catrina telepathically compels a creature within 30 feet to approach and allow the catrina to kiss them, in preparation for using Kiss of Death. The target must attempt a check (will, dc:22) save.\nSuccess The creature is unaffected and is temporarily immune to Compel Condemned for 24 hours.\nFailure The creature must spend each of its actions to move closer to the catrina as quickly as possible while avoiding obvious dangers. If the compelled creature is adjacent to the catrina, it stays still and doesn't act. If the creature takes any damage, the effect ends and the creature is temporarily immune to Compel Condemned for 24 hours. This effect lasts for 1 round, but if the catrina uses this ability again on subsequent rounds, it extend the duration by 1 round for all affected creatures.\nCritical Failure As failure, but damage does not end the effect."
        },
        {
          "id": "w7ay08JvC8e2gakB",
          "name": "Kiss of Death",
          "kind": "action",
          "description": "The catrina gives a long, passionate kiss to an Unconscious or willing creature, dealing 3d6[void] damage. Any creature damaged by the same catrina's Kiss of Death for 3 consecutive rounds becomes unconscious and is dying 1."
        },
        {
          "id": "FNQH1IOMHRjN3YST",
          "name": "Shepherd's Touch",
          "kind": "passive",
          "description": "A catrina's Strikes affect incorporeal creatures with the effects of a Ghost Touch property rune and deal 1d6[void] damage to living creatures and 1d6[vitality] damage to undead."
        }
      ],
      "spellcasting": [
        {
          "id": "18dQtIZNT1zPiyI9",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 14,
          "saveDc": 22,
          "spells": [
            {
              "id": "dCnRzM3sfCaqxIoU",
              "name": "Light",
              "rank": 1
            },
            {
              "id": "pCq4YnEw0KJLJCDe",
              "name": "Invisibility (At Will, Self Only)",
              "rank": 2
            },
            {
              "id": "BiEOE4QPx1GY53c5",
              "name": "Illusory Disguise",
              "rank": 3
            },
            {
              "id": "bIhKbFc7UgWBKaaj",
              "name": "Talking Corpse (At Will)",
              "rank": 4
            },
            {
              "id": "4Qxomyf3hspgNlZF",
              "name": "Translocate",
              "rank": 4
            },
            {
              "id": "NNoTeUgEk0BmUgWf",
              "name": "Truespeech (Constant)",
              "rank": 5
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:ether-spider",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "TFRt64nosuS3PzmH",
      "slug": "ether-spider",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:4c6fa18bf811355654ced0067b8f54af4825e2b9cc1e65bccf2d4f0ccdb5fe79",
    "translatableHash": "sha256:e067a71fb493e0f51049bbdbca559ff290d36ca045a9e44314c8a69cabd193bf",
    "data": {
      "schemaVersion": 1,
      "name": "Ether Spider",
      "level": 5,
      "rarity": "common",
      "size": "large",
      "traits": [
        "beast",
        "ethereal"
      ],
      "description": "Ether spiders are members of a vague taxonomy called ethereal wildlife and are deadly predators from the Ethereal Plane. They are giant arachnids who can shape the raw essence of the Ethereal Plane as easily as spinning silk, weaving it in complex patterns that drift through the misty void. From these ethereal nests, whole families of ether spiders can scout adjacent locales in the Universe, watching for easy prey in dark or remote corners of the land of mortals. Once an ether spider has spotted a meal, it anchors its nest and waits on the Ethereal Plane for its prey to draw near. As soon as its victim is within reach, the ether spider shifts to the Universe, clamps its fangs onto its prey, then shifts back to the Ethereal Plane to wait as its venom works through the creature's system. Ether spiders move between the planes with ease, making them extremely dangerous to those who can't see or attack ethereal enemies.\nEther spiders are not mindless or cruel—they are simply hungry. If a prospective meal can sate an ether spider's incredible appetite through other means, they might be able to bargain for their life. Ether spiders are especially interested in items, information, or allies who can help them against their enemies.\nEther spiders dwell in vast nests adrift in the Ethereal Plane, where as many as half a dozen ether spiders might cohabitate. Although ether spiders enjoy one another's company, they don't form the same bonds as most humanoids, and they are more likely to feast on the corpse of a fallen sibling than save one from certain doom. When not hunting prey, ether spiders are likely to let down their guard. Travelers who find a floating ether spider commune should have an easier time of making peaceful contact to trade with or even befriend these strange arachnids. The nests drift on metaphysical currents and are rarely seen in the same vicinity twice.\nSometimes a point of interest in the neighboring Universe compels them to tether their nest to an area, creating a semipermanent home.",
      "armorClass": 21,
      "hitPoints": 75,
      "speedFeet": 40,
      "perception": {
        "modifier": 12,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 12,
        "reflex": 15,
        "will": 10
      },
      "abilities": {
        "str": 5,
        "dex": 4,
        "con": 3,
        "int": -2,
        "wis": 1,
        "cha": 7
      },
      "skills": {
        "athletics": 12,
        "stealth": 15
      },
      "languages": [
        "aklo"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "Vn17ZjCZCF4mkKlr",
          "name": "Fangs",
          "bonus": 15,
          "damage": "1d10+7 piercing",
          "traits": [
            "magical"
          ]
        },
        {
          "id": "3blwlYEQunlR7xqI",
          "name": "Web",
          "bonus": 14,
          "damage": "",
          "traits": [
            "magical"
          ]
        }
      ],
      "actions": [
        {
          "id": "MXp2KIfE8DQmUow1",
          "name": "Ether Spider Venom",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:22)\nMaximum Duration 6 rounds\nStage 1 1d6[poison] damage and Clumsy 1 (1 round)\nStage 2 2d6[poison] damage, Clumsy 2 and Slowed 1 (1 round)\nStage 3 3d6[poison] damage, Clumsy 3 and Slowed 2 (1 round)"
        },
        {
          "id": "rqRBCmLujReJF0Hl",
          "name": "Ethereal Step",
          "kind": "action",
          "description": "The ether spider shifts to either the Ethereal Plane or the Universe. The ether spider can remain on the Ethereal Plane indefinitely without ill effect. While there, it can see clearly into the Universe with a range of 60 feet. On its first round in an encounter, the ether spider can use this ability once as a free action."
        },
        {
          "id": "EhAjvIy8aPj8PUjD",
          "name": "Ethereal Web Trap",
          "kind": "passive",
          "description": "A creature hit by the ether spider's web attack is Immobilized and stuck to the nearest surface (Escape DC 22)."
        },
        {
          "id": "KyXJy7uC9sQ8LXbQ",
          "name": "Web Burst",
          "kind": "action",
          "description": "Frequency once per day\nEffect The ether spider flings a gout of stored webs in a @Template[type:cone|distance:30]. These webs can pass between the Universe and the Ethereal Plane. Each creature in the area is Immobilized, as ethereal web trap, unless it succeeds at a check (reflex, dc:22) save."
        },
        {
          "id": "g7XvBX4MlLGdvu4D",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:velociraptor-pack",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "UJxwbvJ4CvGDyNYA",
      "slug": "velociraptor-pack",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:e2bbf24205099f4de3402a7ed3ecd5e3e9cfceba65e0e901da0b6e25d8a7e97d",
    "translatableHash": "sha256:8fff316664ae0a3b71dd1b762b7acb60a17aec5be663a8d43b3d9814db142a68",
    "data": {
      "schemaVersion": 1,
      "name": "Velociraptor Pack",
      "level": 5,
      "rarity": "common",
      "size": "gargantuan",
      "traits": [
        "animal",
        "dinosaur",
        "troop"
      ],
      "description": "Velociraptors are clever pack hunters who generally subsist off small herbivores but are not afraid to take on larger prey as a group. Bigger populations of velociraptors are more dangerous when they coalesce into a swarm to protect their young. Even in large numbers, these feathered raptors remain uncannily nimble and can lunge suddenly at their enemies. Emboldened by their increased numbers, the swarms will lash out fiercely with their talons and doggedly pursue any perceived threat.",
      "armorClass": 21,
      "hitPoints": 75,
      "speedFeet": 40,
      "perception": {
        "modifier": 12,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 11,
        "reflex": 14,
        "will": 8
      },
      "abilities": {
        "str": 2,
        "dex": 5,
        "con": 3,
        "int": 0,
        "wis": 2,
        "cha": 2
      },
      "skills": {
        "acrobatics": 14,
        "athletics": 11,
        "intimidation": 12,
        "stealth": 12
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "area-damage 5",
          "splash-damage 5"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "F5uG7AqEjlaMWHBI",
          "name": "Troop Defenses",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "FNRlLpqylgqsM7sw",
          "name": "Troop Movement",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "pZjSzIpjtR0z2YxF",
          "name": "Bites and Talons",
          "kind": "action",
          "description": "Frequency once per round\nEffect The pack makes a melee attack against each enemy in a @Template[type:emanation|distance:5] (check (reflex, dc:19, basic) save). The damage depends on the number of actions.\n1 1d6[piercing,1d4[precision]]{1d6 piercing or slashing damage and 1d4 precision damage}\n2 2d6[piercing,2d4[precision]]{2d6 piercing or slashing damage and 2d4 precision damage}\n3 3d6[piercing,2d4[precision]]{3d6 piercing or slashing damage and 2d4 precision damage}"
        },
        {
          "id": "Od7vayeEdJaVuokt",
          "name": "Puff Up",
          "kind": "passive",
          "description": "The velociraptors ruffle their plumage to appear larger. They ignore the –4 penalty to Demoralize for not knowing the same language as their target."
        },
        {
          "id": "BGwSGj2tApTEPTz1",
          "name": "Raptor Leap",
          "kind": "action",
          "description": "Frequency once per round\nEffect The pack Strides, ignoring difficult terrain (but not greater difficult terrain). At the end of this movement, each enemy in a @Template[type:emanation|distance:5] takes 1d8[piercing] (check (reflex, dc:19, basic) save)."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:yamah",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "vLYSsN8R4rRE78CU",
      "slug": "yamah",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:16830144c82b24280a89959682a29c412e4af118d7abf51eee756d178aaf624f",
    "translatableHash": "sha256:ebfab88b1d232077fe819bea2d43eea30202d5a04d0868cc7347588bbff6af8e",
    "data": {
      "schemaVersion": 1,
      "name": "Yamah",
      "level": 5,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "azata",
        "celestial",
        "holy"
      ],
      "description": "Yamahs are devoted to protecting others from magic used for evil, particularly the kind that traps souls or controls a creature's free will. They relish taking a malevolent spellcaster's magic and turning it to virtuous purposes.\nYamahs often sport stern countenances but still enjoy moments of joy and whimsy like other azatas. In particular, they revel in lighthearted jokes and cheery songs when appropriate. Once they enter combat, however, their bright dispositions change to one of focus and determination. While fghting enemies of freedom, yamahs tend to attack from a distance, using their fight and ranged skills to harry foes. If a spellcaster is involved, yamahs move to the front line, attempting to intercede between their allies and the spellcaster's magic.\nLunar eclipses and other notable celestial events tend to draw yamahs to the Universe. These azatas appear more often during these events to aid the followers of deities with connections to such events, such as Desna and the empyreal lord Ashava. Tales among these faiths speak of yamahs who ally with worshippers in their endeavors against evil fends. These stories inevitably end with the yamah departing after the task is complete, leaving the mortal worshipper without a word.",
      "armorClass": 21,
      "hitPoints": 75,
      "speedFeet": 25,
      "perception": {
        "modifier": 12,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 9,
        "reflex": 13,
        "will": 13
      },
      "abilities": {
        "str": 3,
        "dex": 4,
        "con": 2,
        "int": 3,
        "wis": 4,
        "cha": 5
      },
      "skills": {
        "acrobatics": 13,
        "arcana": 10,
        "deception": 12,
        "diplomacy": 12,
        "religion": 13,
        "stealth": 13
      },
      "languages": [
        "diabolic",
        "draconic",
        "empyrean"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": [
          "cold-iron 5",
          "unholy 5"
        ]
      },
      "attacks": [
        {
          "id": "3aUgm8Ce4YyhnXvE",
          "name": "Starknife",
          "bonus": 15,
          "damage": "2d4+8 piercing",
          "traits": [
            "agile",
            "deadly-d6",
            "finesse",
            "holy",
            "magical",
            "versatile-s"
          ]
        },
        {
          "id": "PFR5aMhYquFv4lpm",
          "name": "Starknife",
          "bonus": 15,
          "damage": "2d4+8 piercing",
          "traits": [
            "agile",
            "deadly-d6",
            "holy",
            "magical",
            "thrown-20",
            "versatile-s"
          ]
        }
      ],
      "actions": [
        {
          "id": "q1tPFzDgAcsiUna5",
          "name": "Crystallized Attack",
          "kind": "passive",
          "description": "Requirements The yamah has a charged gem on its forceful quartz bracelet\nEffect The yamah channels the magic from an active gem, causing its starknife to glow with unnatural brightness. Their next starknife Strike before the end of their turn deals an extra 1d6 force damage and increases its thrown range to 60 feet. This drains one of their quartz gems."
        },
        {
          "id": "HfCCPxmMZvUsSAPh",
          "name": "Free Mind",
          "kind": "reaction",
          "description": "Trigger An ally of the yamah's attempts a saving throw against an efect that has the mental trait\nEffect The ally's gains a +4 status bonus to the saving throw. If the ally rolls a success, they get a critical success instead."
        },
        {
          "id": "fm09Fc7XwcX6j8P9",
          "name": "Sneak Attack",
          "kind": "passive",
          "description": "The creature's Strikes deal an additional 1d6 precision damage to Off-Guard creatures."
        },
        {
          "id": "XLIs7VR1ydRVWDI9",
          "name": "Starstrike",
          "kind": "passive",
          "description": "Any non-magical starknife becomes a +1 striking returning weapon while a yamah wields it."
        },
        {
          "id": "VLy49ZHsnzxOFSfZ",
          "name": "Steal Magic",
          "kind": "action",
          "description": "The yamah makes a melee spell attack against a creature under the efects of a spell; a yamah automatically succeeds with this attack against a willing creature. On a success, the yamah's divine touch attempts to counteract the spell (counteract rank 3, counteract modifer [[/r 1d20+16 #Counteract]]{+16}). A successful counteract siphons the magical energy into one of the gems on its forceful quartz bracelet, recharging it."
        }
      ],
      "spellcasting": [
        {
          "id": "dpFcHSjczevqArLr",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 14,
          "saveDc": 21,
          "spells": [
            {
              "id": "EilRNGdQHSecig3M",
              "name": "Detect Magic (Constant)",
              "rank": 1
            },
            {
              "id": "Letf32wFiw8iTEPx",
              "name": "Divine Lance",
              "rank": 1
            },
            {
              "id": "EEWupJwO2XsuAjkM",
              "name": "Heal",
              "rank": 2
            },
            {
              "id": "cH5sqScmkDliBGy5",
              "name": "Invisibility",
              "rank": 2
            },
            {
              "id": "PxhWrDrqt67claxi",
              "name": "Sure Footing",
              "rank": 2
            },
            {
              "id": "DTxieNgEcGd5cfN5",
              "name": "Dispel Magic",
              "rank": 3
            },
            {
              "id": "oVRQuscquGERcIo4",
              "name": "Holy Light",
              "rank": 3
            },
            {
              "id": "Ye1odXgn3yEBW5Y4",
              "name": "Truespeech (Constant)",
              "rank": 5
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:kodama",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "X6Avn6djuSmMPGrG",
      "slug": "kodama",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:93abe33fb8ae99899ab4f42729df4dcd83f78eec41716a1d3d6518e5aa59cce5",
    "translatableHash": "sha256:f798147a7c8e1471dfa28cfea84a14fa01333a88a2a02962e6865fada3f25cd7",
    "data": {
      "schemaVersion": 1,
      "name": "Kodama",
      "level": 5,
      "rarity": "common",
      "size": "small",
      "traits": [
        "kami",
        "spirit",
        "wood"
      ],
      "description": "A kodama is a type of kami who inhabits a tree. Kodama commonly appear in old Tian forests, especially old-growth forests far removed from civilization. In the Forest of Spirits in Minkai, for example, so many trees are possessed by kodama that a traveler might pass by hundreds, if not thousands, of these beings while journeying through a single acre of woodland.\nKodama try their utmost to protect their sacred trees, but a single kodama is a minor obstacle to most oni or others who have no qualms about desecrating forests or harvesting them for natural resources. Like trees in a forest, kodama are most powerful in great numbers and among other kami, whom they can bolster with their magical straw ropes while distracting strong enemies with their mesmerizing presence. On the other hand, kodama bear no ill will toward those who respect their wards, even allowing druids and other deferential creatures to dwell within their bounds. They might even subtly guide lost travelers out of the forest or back to safety.\nKami are divine nature spirits from the lands of Tian Xia, far to the east of the Inner Sea region. They serve as guardians of natural objects and places they protect—their wards—and are ancient enemies of oni (Pathfinder Monster Core 252–255). Kami can merge with their wards, allowing them to surreptitiously watch anyone who treads upon their sacred grounds. Kami leave those who they deem harmless alone, but fight vigilantly to scare away anyone perceived as a threat.",
      "armorClass": 21,
      "hitPoints": 95,
      "speedFeet": 20,
      "perception": {
        "modifier": 15,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 12,
        "reflex": 11,
        "will": 13
      },
      "abilities": {
        "str": 2,
        "dex": 4,
        "con": 5,
        "int": 0,
        "wis": 4,
        "cha": 4
      },
      "skills": {
        "acrobatics": 11,
        "athletics": 11,
        "nature": 13,
        "stealth": 13,
        "survival": 13
      },
      "languages": [
        "common",
        "empyrean"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "unholy 5"
        ],
        "weaknesses": [
          "cold-iron 5"
        ]
      },
      "attacks": [
        {
          "id": "HlUcX9iIQPM0NWRc",
          "name": "Fist",
          "bonus": 13,
          "damage": "2d6+4 bludgeoning",
          "traits": [
            "agile",
            "finesse"
          ]
        }
      ],
      "actions": [
        {
          "id": "K7px8TInFczlojUn",
          "name": "Telepathy 50 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "ncv83zbFJrlK7sEO",
          "name": "Ward",
          "kind": "passive",
          "description": "Every kami is bound to a ward: a specific animal, plant, object, or location. A kami can merge with or emerge from their ward as a single action, which has the concentrate trait. While merged, the kami can observe their surroundings with their usual senses as well as the senses of their ward, but can't move, communicate with, or control their ward. Additionally, a kami merged with their ward recovers Hit Points each minute as if they spent an entire day resting.\nA kodama's ward is a specific tree."
        },
        {
          "id": "tCMpB4fYONCd9ANv",
          "name": "Constant Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "vc7NQfpsZJ6yUqgT",
          "name": "Distracting Gaze",
          "kind": "passive",
          "description": "30 feet. When a creature ends its turn in the aura, it must attempt a check (will, dc:21) save. The kodama can activate or deactivate this aura by using a single action, which has the concentrate trait.\nSuccess The creature is unaffected.\nFailure The creature is Fascinated with the kodama. This condition ends if the creature ends its turn outside the aura.\nCritical Failure As failure, plus the creature is Slowed 1 as long as it remains fascinated."
        },
        {
          "id": "h42wRwZyggBVxQou",
          "name": "Spiritual Rope",
          "kind": "passive",
          "description": "The kodama spends 1 minute to fashion an enchanted straw rope out of nearby materials. The rope can be wrapped around other kami creatures to protect them from fell forces. A kami who wears a spiritual rope gains resistance 5 to damage from unholy creatures and effects and a +1 status bonus to AC and saving throws against unholy effects and attacks and effects from unholy creatures.\nA kodama always wears a spiritual rope, and they can have one other spiritual rope in existence at a time. Creating a new rope beyond these two releases the magic of one of the other two ropes of the kodama's choosing. A spiritual rope around a creature other than a kodama loses its magic after 24 hours or if it's taken outside the kodama's forest."
        }
      ],
      "spellcasting": [
        {
          "id": "6F4mcZ3WrmiHDPTp",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 15,
          "saveDc": 23,
          "spells": [
            {
              "id": "F8IiopFQNnDun8Dz",
              "name": "Figment",
              "rank": 1
            },
            {
              "id": "aGpEtxhoZ4nN0a04",
              "name": "One with Plants",
              "rank": 2
            },
            {
              "id": "D3n4BJiYly6D5BTY",
              "name": "Speak with Plants (Constant)",
              "rank": 4
            },
            {
              "id": "BUXkkxZDsFT9PMzM",
              "name": "Nature's Pathway",
              "rank": 5
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:vloriak",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "YTG7w3V77ZfrjRIC",
      "slug": "vloriak",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:0d7d5444215f7ff2c803e4fdee0cb99569ca4997bc7e6c5bd5a7479dbe86f38e",
    "translatableHash": "sha256:057a54e0c34bc048f9a5567e95db0078e36d539c0c53069e22826a5c7800bc64",
    "data": {
      "schemaVersion": 1,
      "name": "Vloriak",
      "level": 5,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "demon",
        "fiend",
        "unholy"
      ],
      "description": "Vloriaks rise from the sinful souls of those whose acts of sabotage resulted in despair and terror, and they delight in the destruction of mortal artifice. They make use of their ability to rust metals to destroy structures, precious works of art, and tools used for creation. In combat, this ability allows them to destroy the armaments of their attacks. Vloriaks particularly enjoy destroying armors and shields, as these defensive items generally bear elegant designs and decorations that are more enjoyable to despoil than those of a weapon.\nOften called despoiler demons, vloriaks were the followers of the long-dead demon lord Xar-Azmak. Their numbers have dwindled over the eons since the Lord of Rust's death; those that exist now are scattered throughout the Outer Rifts. Their chitinous bodies and faceted eyes give them an insectile appearance.",
      "armorClass": 21,
      "hitPoints": 90,
      "speedFeet": 25,
      "perception": {
        "modifier": 13,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 15,
        "reflex": 11,
        "will": 13
      },
      "abilities": {
        "str": 4,
        "dex": 2,
        "con": 4,
        "int": -1,
        "wis": 4,
        "cha": 3
      },
      "skills": {
        "athletics": 13,
        "intimidation": 12
      },
      "languages": [
        "chthonian",
        "common"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "acid 5"
        ],
        "weaknesses": [
          "cold-iron 5",
          "holy 5"
        ]
      },
      "attacks": [
        {
          "id": "odaoB2IKd0b9xtgz",
          "name": "Claw",
          "bonus": 15,
          "damage": "2d6+6 slashing; 1d6 spirit",
          "traits": [
            "unarmed",
            "unholy"
          ]
        },
        {
          "id": "ptBASwuuILPArM1j",
          "name": "Tongue",
          "bonus": 15,
          "damage": "1d6 spirit; 2d6 acid",
          "traits": [
            "agile",
            "reach-10",
            "unholy"
          ]
        }
      ],
      "actions": [
        {
          "id": "kyZzEMFFhAYP0is1",
          "name": "Telepathy 100 feet",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "VqHY5IorfKc9TEmc",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "V8UhxFNrr8B2m7UP",
          "name": "Restoration Vulnerability",
          "kind": "passive",
          "description": "A vloriak feels agonizing pain when a creature or object recovers from a debilitating effect in their proximity. The first time in a round in which a creature that is within sight of the demon reduces the value of their clumsy, enfeebled, sickened, or stupefied condition, the demon takes 3d6[mental] damage and cannot Lick Rust on their next turn."
        },
        {
          "id": "fzTUnlrMpxSgmSAy",
          "name": "Lick Rust",
          "kind": "action",
          "description": "Requirements The vloriak rusted a metal item with its tongue this turn\nEffect The vloriak attempts a tongue Strike on the same target it just attacked. If it hits, it deals no damage as it licks away the rust and heals 2d6[healing] Hit Points (or 4d6[healing] Hit Points if the Strike was a critical hit). It can't Lick Rust on its next turn."
        },
        {
          "id": "TZig28UcpE4GS2P0",
          "name": "Rust",
          "kind": "passive",
          "description": "A vloriak's saliva causes metal to rust rapidly. If it succeeds at a tongue Strike or Disarm attempt, the vloriak deals 2d6[untyped] damage (doubled on a critical hit) to a metal item the target is wearing or holding, ignoring its Hardness. If the vloriak hits an unattended metal item, the item takes this damage automatically. If a creature uses the Shield Block reaction with a metal shield against a tongue attack, the shield is automatically broken, but no other item is rusted on that attack."
        },
        {
          "id": "w9Owf4Jdub9WbuFx",
          "name": "Spew Rusted Shards",
          "kind": "action",
          "description": "The vloriak spews a @Template[cone|distance:15] of acid and rusted metal. Creatures in the area take 3d6[acid,3d6[piercing]|options:area-damage]{3d6 acid and 3d6 piercing} damage (check (reflex, dc:22, basic, options:area-effect) save). A creature that takes any piercing damage is exposed to tetanus. The vloriak can't Spew Rusted Shards for [[/gmr 1d4 #Recharge Spew Rusted Shards]]{1d4 rounds}."
        },
        {
          "id": "Q0Sd9sqnUeL32Jw9",
          "name": "Tetanus",
          "kind": "passive",
          "description": "An infection introduced through open wounds, tetanus can produce stiffness, muscle spasms strong enough to break bones, and ultimately death.\nSaving Throw check (fortitude, dc:14)\nOnset 10 days\nStage 1 Clumsy 1 (1 week)\nStage 2 Clumsy 2 and can't speak (1 day)\nStage 3 Paralyzed with spasms (1 day)\nStage 4 death"
        }
      ],
      "spellcasting": [
        {
          "id": "cdtXWAUaZAHryF8F",
          "name": "Divine Innate Spells",
          "tradition": "divine",
          "category": "innate",
          "attackModifier": 14,
          "saveDc": 22,
          "spells": [
            {
              "id": "w9dFXS84z1cZR9lk",
              "name": "Caustic Blast",
              "rank": 1
            },
            {
              "id": "JQAzx0V8C3dfmnpa",
              "name": "Acid Grip",
              "rank": 2
            },
            {
              "id": "1JcBZwasN0VSO5KK",
              "name": "Shatter",
              "rank": 2
            },
            {
              "id": "ap6csZkyRe95hiNF",
              "name": "Paralyze",
              "rank": 3
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:smoke-creeper",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "1Flhs1lWpOmAujhd",
      "slug": "smoke-creeper",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:8fc50239a5d734bf2edf6bbcbd593efd3f7284960d7dc2d9d77705a2fb9c71b2",
    "translatableHash": "sha256:1fa9adb768e50a63eae6366dded47e048f3b4c0929382f9120a4b353c9b78840",
    "data": {
      "schemaVersion": 1,
      "name": "Smoke Creeper",
      "level": 6,
      "rarity": "common",
      "size": "large",
      "traits": [
        "air",
        "elemental",
        "evil"
      ],
      "description": "Smoke creepers shift and modify their appearance as they float through the Plane of Air, but they prefer to take on a vaguely insectile form with wings trailing choking fumes and glowing red eyes.\nSome elementals embody aspects of air, such as smoke, lightning, and fog.",
      "armorClass": 24,
      "hitPoints": 80,
      "speedFeet": 0,
      "perception": {
        "modifier": 14,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 13,
        "reflex": 17,
        "will": 11
      },
      "abilities": {
        "str": 1,
        "dex": 5,
        "con": 3,
        "int": -2,
        "wis": 4,
        "cha": 0
      },
      "skills": {
        "acrobatics": 15,
        "stealth": 15
      },
      "languages": [
        "sussuran"
      ],
      "defenses": {
        "immunities": [
          "bleed",
          "paralyzed",
          "poison",
          "precision",
          "sleep"
        ],
        "resistances": [
          "fire 5"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "POVANlwhTG8kc8av",
          "name": "Smoke Mandibles",
          "bonus": 17,
          "damage": "1d6 poison; 2d8+3 piercing",
          "traits": [
            "agile",
            "finesse"
          ]
        }
      ],
      "actions": [
        {
          "id": "FTeRIF51hvaZAOzR",
          "name": "Smoke Vision",
          "kind": "passive",
          "description": "The smoke creeper ignores the Concealed condition from smoke."
        },
        {
          "id": "0llDJD2BXJrr95lm",
          "name": "Smoke Form",
          "kind": "passive",
          "description": "The smoke creeper can move through the spaces of other creatures but can't end its movement in the same space."
        },
        {
          "id": "UN8cAG3SmdTtuDWe",
          "name": "Choking Swoop",
          "kind": "action",
          "description": "The smoke creeper Flies up to its Speed, moving through the spaces of other creatures and leaving traces of itself behind. Each breathing creature it passes through must attempt a check (fortitude, dc:23) save. On a failure, the creature inhales part of the elemental and is Immobilized for 1 minute by the pain of the smoke rasping in its throat and lungs. A creature can attempt to end this condition by spending an action coughing and succeeding at a check (fortitude, dc:23) save."
        },
        {
          "id": "R8bzIOrsR2PFpnSQ",
          "name": "Painful Exhalations",
          "kind": "action",
          "description": "Requirements At least one creature within 40 feet is Immobilized from the smoke creeper's Choking Swoop\nEffect The smoke creeper flaps its wings, violently drawing the lingering smoke free from all creatures immobilized from its Choking Swoop within 40 feet. Each target must attempt a check (fortitude, dc:23) save. On a failure, the creature is Enfeebled 1 for 1 minute and Sickened 1 (Enfeebled 2 and Sickened 2 on a critical failure). Regardless of the result, the creature is no longer immobilized from the smoke creeper's Choking Swoop."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:beetle-carapace",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "36A1ktSN13zcg76g",
      "slug": "beetle-carapace",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:20e6e47e2c514785af38f79836f77ddf41a917189f7532523cebdab0f93060c2",
    "translatableHash": "sha256:cd4de32642758168bd4994141999d7bf2168a0f5d8834f9f039ae7d7969a51a0",
    "data": {
      "schemaVersion": 1,
      "name": "Beetle Carapace",
      "level": 6,
      "rarity": "common",
      "size": "large",
      "traits": [
        "mindless",
        "skeleton",
        "undead",
        "unholy"
      ],
      "description": "Created from the exoskeleton of a giant stag beetle, this mindless husk can cut a foe in half using its powerful mandibles. The abdomen of this crawling undead is empty, and more than one necromancer has used this space to hide valuable cargo.\nAmong the ranks of the dead, none are so numerous, nor so varied, as the skeleton. While most are almost entirely made from bone, some maintain a few scraps of flesh to aid them in movement, such as wing membranes.",
      "armorClass": 24,
      "hitPoints": 90,
      "speedFeet": 20,
      "perception": {
        "modifier": 12,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 16,
        "reflex": 13,
        "will": 10
      },
      "abilities": {
        "str": 5,
        "dex": 3,
        "con": 4,
        "int": -5,
        "wis": 2,
        "cha": -2
      },
      "skills": {
        "acrobatics": 11,
        "athletics": 15
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "death-effects",
          "disease",
          "paralyzed",
          "poison",
          "unconscious",
          "bleed"
        ],
        "resistances": [
          "cold 5",
          "electricity 5",
          "fire 5",
          "piercing 5",
          "slashing 5"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "7wp3tf6myiuh5zf6",
          "name": "Mandible",
          "bonus": 15,
          "damage": "2d8+7 piercing",
          "traits": []
        },
        {
          "id": "6312irfg8l2y8wqs",
          "name": "Foot",
          "bonus": 15,
          "damage": "2d6+7 bludgeoning",
          "traits": [
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "AjjzMtoQOxAQvqf9",
          "name": "Void Healing",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "3whr45ahot8zh9nf",
          "name": "Abdomen Cache",
          "kind": "passive",
          "description": "The abdomen of a beetle carapace can be fitted with a simple hinge, allowing it to open and be used as storage. The abdomen can hold up to one Medium or smaller creature, a Large or smaller swarm, or a similar amount of cargo. The beetle or a creature stored in it can Interact to open the hatch. If the beetle carapace takes a critical hit by a bludgeoning weapon, roll a check (flat, dc:10). If the check fails, the cache is breached, and its contents spill out of the beetle. The hatch can also be [[/act force-open dc=22]]{Forced Open} (DC 22 Athletics)."
        },
        {
          "id": "6MBpOAXA2v4U8Ojh",
          "name": "Constrict",
          "kind": "action",
          "description": "(2d8+2)[piercing], check (fortitude, dc:24, basic)"
        },
        {
          "id": "QI3dAZy2xcX7asH2",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:evangelist",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "66MUUmu8950MEXFf",
      "slug": "evangelist",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:14b8b0b41ca043589499fe76f5ce00730d93d9236a0e7d8a48451961ef5275c0",
    "translatableHash": "sha256:3d246b79060a94174d4193d6a2e17662439633f68844e4f95f0e5078026cf9d6",
    "data": {
      "schemaVersion": 1,
      "name": "Evangelist",
      "level": 6,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "fiend",
        "unholy",
        "velstrac"
      ],
      "description": "Evangelists, the velstracs' unofficial ambassadors, roam the farthest reaches of the planes to spread the word of their kind's abhorrent belief in perfection through pain. They're therefore the most frequently encountered velstracs in the Universe, leading covens of hedonistic mortal flesh-sculptors or serving as wardens of horrific dungeons. In regions ruled by infernal powers, evangelists might serve as lieutenants or advisors, whispering secret paths to power in exchange for mortals' souls or choice mortal flesh. Evangelists are the same size as humans, although with their flesh transformed into something resembling a mockery of aristocratic raiments, and they often weigh 350 pounds or more.\nThe shadow-dwelling fiends known as velstracs all share a horrifying preoccupation with the search for ultimate sensation through self-mutilation. Velstracs transcend their stoic detachment only when inflicting pain and terror upon their victims, practicing new forms of torture, or turning their agonizing practices back on themselves. They consider themselves enlightened beings, transcending such limitations as morality or mortal taboos, but their victims know them as emotionless tormentors who inflict sadistic suffering. These fiends claim to seek perfection in thought, form, and action, although they don't recognize any refinement that doesn't require the painful excision of the flesh or spirit. Velstracs manifest from the souls of the most extreme masochistic or sadistic mortals who are judged and sent on to the Netherworld. They take on forms that suit their vile predilections, ranging from the low-ranking augurs to the maestros of suffering and mutilation, the eremites. The process of transformation warps the soul step by step, with other velstracs conveying their new members through untold chambers of pain among the dark reaches of the Netherworld.",
      "armorClass": 24,
      "hitPoints": 90,
      "speedFeet": 25,
      "perception": {
        "modifier": 13,
        "senses": [
          "greater-darkvision"
        ]
      },
      "saves": {
        "fortitude": 15,
        "reflex": 14,
        "will": 11
      },
      "abilities": {
        "str": 4,
        "dex": 3,
        "con": 2,
        "int": 0,
        "wis": 1,
        "cha": 1
      },
      "skills": {
        "acrobatics": 13,
        "athletics": 15,
        "crafting": 10,
        "intimidation": 15,
        "religion": 11
      },
      "languages": [
        "common",
        "diabolic",
        "shadowtongue"
      ],
      "defenses": {
        "immunities": [
          "cold"
        ],
        "resistances": [],
        "weaknesses": [
          "holy 5",
          "silver 5"
        ]
      },
      "attacks": [
        {
          "id": "fCyrMwcAlji9iqNZ",
          "name": "Morningstar",
          "bonus": 17,
          "damage": "2d6+7 bludgeoning; 1d6 bleed",
          "traits": [
            "magical",
            "unholy",
            "versatile-p"
          ]
        }
      ],
      "actions": [
        {
          "id": "HWdOyKz5mcYOzYdB",
          "name": "Painsight",
          "kind": "passive",
          "description": "A velstrac automatically knows whether a creature it sees has any of the Doomed, Dying, and Wounded conditions as well as the value of those conditions."
        },
        {
          "id": "dcR7pELG3WzcQ0LJ",
          "name": "+1 Status to All Saves vs. Magic",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "hEXmoRKHC6BCYDAE",
          "name": "Regeneration 10 (Deactivated by Holy or Silver)",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "Olj2Qgi858lkYxMQ",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "2j5qOx8lUA9VwTi6",
          "name": "Unnerving Gaze",
          "kind": "passive",
          "description": "30 feet. When a creature ends its turn in the aura, it sees the face of a departed loved one in place of the evangelist's face. The creature must succeed at a check (will, dc:21, options:area-effect,inflicts:frightened) save or become Frightened 2 (Frightened 3 on a critical failure)."
        },
        {
          "id": "flwuBDP79nXatHeG",
          "name": "Focus Gaze",
          "kind": "action",
          "description": "The evangelist stares at a creature they can see within 30 feet. The target must immediately attempt a check (will, dc:21, options:inflicts:frightened) save against unnerving gaze. In addition, if the creature was already Frightened, on a failed save, the evangelist is Concealed from the creature for as long as the creature remains frightened. After attempting this save, the creature is then temporarily immune to Focus Gaze until the start of the evangelist's next turn."
        },
        {
          "id": "siJ8mhzvLS3ZUCFg",
          "name": "Grievous Wound",
          "kind": "passive",
          "description": "When the evangelist critically hits with a morningstar Strike, the target's wound is particularly gruesome and disorienting. The creature becomes Clumsy 1, and the DC to recover from its persistent bleed damage is 17 (DC 12 when receiving especially appropriate assistance). The clumsy condition doesn't end until the creature recovers from its persistent bleed."
        },
        {
          "id": "d0v6wPxsOagOq8lE",
          "name": "Unleash Weapon",
          "kind": "action",
          "description": "The evangelist releases their morningstar and commands the augur trapped within to attack. The weapon flies off and the evangelist makes up to two morningstar Strikes, each against a different target within 20 feet. These attacks count against the evangelist's multiple attack penalty, but the multiple attack penalty doesn't increase until after all the attacks. The morningstar then returns to the evangelist's hand."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:skull-peeler",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "69ymtDVWT6e8gFbW",
      "slug": "skull-peeler",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:6742d35fb4108cb35a9f4cd8e9e9bb418412f48bc0e586b796b8a1eaa57881c2",
    "translatableHash": "sha256:8e46caedcab590422c5c7e6c1dcdd8e2311ae3f009adfdbb596251c9c9b02549",
    "data": {
      "schemaVersion": 1,
      "name": "Skull Peeler",
      "level": 6,
      "rarity": "common",
      "size": "small",
      "traits": [
        "beast"
      ],
      "description": "Skull peelers, despite their ferocious and well-deserved moniker, are considered by many to be downright adorable, especially when viewed from a safe distance. Their soft, dappled brown fur helps them hide in forest canopies, and they have shimmering insectile wings and big eyes that draw in the faintest beams of light. At first glance, a skull peeler looks like a cuddly pet or a wizard's familiar. Any illusions of domesticating such a beast are quickly dismissed upon seeing how a skull peeler eats, however.\nSkull peelers have evolved to hang motionlessly in treetop canopies as they wait until appropriate prey appears, usually long-necked dinosaurs but also brachiating primates and large birds. The skull peeler then lashes out with its long tongue, severing the creature's head from its body and pulling the detached cranium back into its hungry paws. It then uses its claws to crack open the cranial cavity—hence its name—before lapping up the tasty insides.\nDespite skull peelers' gruesome eating habits, some enterprises and individuals can't resist the urge to add these beasts to their menageries. Fey and other creatures with ties to the First World, such as gnomes, can occasionally coax a skull peeler into a form of domestication. While the adorable beasts can never be fully tamed due to their hyper-evolved hunting instincts, they can be bribed with food and, if kept satiated, displayed on a perch or indoor terrarium as an example of their master's cunning and deadliness. As often as not, these pseudo-domesticated skull peelers end up devouring a guest, pet, or their would-be owner, but this possibility doesn't stop up-and-coming crime lords from attempting to tame the little predators. Skull peelers kept in well-managed zoos fare somewhat better, but these clever creatures don't always stay in their cages, which has led to wild skull peelers in places travelers might not expect.",
      "armorClass": 24,
      "hitPoints": 75,
      "speedFeet": 20,
      "perception": {
        "modifier": 17,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 13,
        "reflex": 16,
        "will": 11
      },
      "abilities": {
        "str": 5,
        "dex": 4,
        "con": 3,
        "int": -3,
        "wis": 3,
        "cha": 1
      },
      "skills": {
        "acrobatics": 12,
        "athletics": 15,
        "stealth": 16
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "R0QrU4RlKa24oHJl",
          "name": "Tongue",
          "bonus": 17,
          "damage": "2d4+8 slashing; 1d8 bleed",
          "traits": [
            "agile",
            "fatal-d12",
            "reach-10"
          ]
        },
        {
          "id": "lIe4i9Z2au2tHvQS",
          "name": "Claw",
          "bonus": 17,
          "damage": "2d10+8 slashing",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "gNND9xmgd8OyGV0L",
          "name": "Snatch Skull",
          "kind": "reaction",
          "description": "Trigger The skull peeler is using Perfect Camouflage, and a creature moves into a space within 15 feet of it\nEffect The skull peeler Leaps toward the triggering creature and Strikes with its tongue. If this Strike is successful, the skull peeler automatically Grabs the target with its tongue."
        },
        {
          "id": "TECMunchIqXFlKrq",
          "name": "Anticoagulant",
          "kind": "passive",
          "description": "The skull peeler's razor-sharp tongue is coated in an anticoagulant substance that makes wounds it inflicts particularly hard to close.\nThe DC of the flat check to end the persistent bleed damage from a skull peeler's tongue Strike is 16, or 11 with appropriate assistance."
        },
        {
          "id": "ejIn2524yZUcGNEG",
          "name": "Perfect Camouflage",
          "kind": "action",
          "description": "Requirements The skull peeler is in a treetop or standing on a tree limb\nEffect Until the next time it acts, the skull peeler hangs perfectly still, blending into the treetop surroundings. It has an automatic result of 36 on Stealth checks and DCs to Hide from any creature more than 10 feet away from it."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:clockwork-soldier",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "7xZDgCCOkbDAv4Sm",
      "slug": "clockwork-soldier",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:03d58a5ed9c62b79f1faeef7e348b30c1129b58459a839c7c53446f225a3cc2e",
    "translatableHash": "sha256:8e1e9542eb3768723a411a5889f8fad0bcfa70361921e4e799f75c65f7b35406",
    "data": {
      "schemaVersion": 1,
      "name": "Clockwork Soldier",
      "level": 6,
      "rarity": "uncommon",
      "size": "medium",
      "traits": [
        "clockwork",
        "construct",
        "mindless"
      ],
      "description": "These diligent machines guard their assigned posts tirelessly. A typical clockwork soldier stands 6 feet tall and consists of 500 pounds of metal and magic.\nIntricate, complex machines, clockworks are built with care by highly skilled engineers. Though their creation involves some amount of magic, they're primarily mechanical, packed with precision-tuned gears and springs working in concert.\nThe sturdy mainspring within a clockwork must be wound to provide the energy needed to power the device. Some larger clockworks contain a series of springs for different limbs that each need to be wound. A clockwork's crafter creates a unique metal key while building the clockwork; winding the clockwork usually involves inserting the key into the machine's back and turning clockwise. Larger clockworks require greater strength to turn the key, and typically have larger keys to allow for more torque-some even accommodating a team of winders rather than an individual. Programming a clockwork requires both the key and the knowledge to set the program correctly, information usually reserved for the clockwork's creator or owner.",
      "armorClass": 24,
      "hitPoints": 80,
      "speedFeet": 25,
      "perception": {
        "modifier": 16,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 16,
        "reflex": 14,
        "will": 12
      },
      "abilities": {
        "str": 6,
        "dex": 2,
        "con": 4,
        "int": -5,
        "wis": 4,
        "cha": -5
      },
      "skills": {
        "athletics": 15
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [
          "physical 5 except adamantine, orichalcum"
        ],
        "weaknesses": [
          "electricity 5",
          "orichalcum 5"
        ]
      },
      "attacks": [
        {
          "id": "aNoJsFxQdiX8ZDqx",
          "name": "Halberd",
          "bonus": 17,
          "damage": "1d10+10 piercing",
          "traits": [
            "magical",
            "reach-10",
            "versatile-s"
          ]
        },
        {
          "id": "dwi92HM5kiYhFz8W",
          "name": "Fist",
          "bonus": 16,
          "damage": "1d8+10 bludgeoning",
          "traits": [
            "agile",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "Y7nd6CjMaTiKH4H7",
          "name": "+2 vs. Disarm",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "BaTacjtQvnaLoVc5",
          "name": "Wind-Up",
          "kind": "passive",
          "description": "24 hours, [[/act disable-device dc=22]]{DC 22 Thievery}, standby\nFor a clockwork to act, it must be wound with a unique key by another creature. This takes 1 minute. Once wound, it remains operational for the listed amount of time, usually 24 hours, after which time it becomes unaware of its surroundings and can't act until it's wound again. Some clockworks' abilities require them to spend some of their remaining operational time. They can't spend more than they have and shut down immediately once they have 0 time remaining. If it's unclear when a clockwork was last wound, most clockwork keepers wind all their clockworks at a set time, typically 8 a.m.\nA clockwork that lists standby in its wind-up entry can enter standby mode as a 3-action activity. Its operational time doesn't decrease in standby, but it can sense its surroundings (with a -2 penalty to Perception). It can't act, with one exception: when it perceives a creature, it can exit standby as a reaction (rolling initiative if appropriate).\nA creature can attempt to Disable a Device to wind a clockwork down (with a DC listed in the wind-up entry). For each success, the clockwork loses 1 hour of operational time. This can be done even if the clockwork is in standby mode."
        },
        {
          "id": "Xqn4vt6RyGIvUlCa",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "jZf3j2xK5YKD3uC0",
          "name": "Activate Defenses",
          "kind": "action",
          "description": "One of the soldier's external plates extends on a mechanical actuator to defend the soldier or an adjacent creature of the soldier's choice.\nThe creature gains a +2 circumstance bonus to AC until the start of the soldier's next turn, or until it is no longer adjacent to the soldier, whichever comes first. The soldier can have no more than one plate extended at a time.\nEffect: Activate Defenses"
        },
        {
          "id": "aHwiMEKob3nIu938",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:iguanodon",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "8G5IWZdj7LG4WHPv",
      "slug": "iguanodon",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:9b68f99360cf38fa5c57cd2ae71a999f0c36c8cdbdb3c245085f8135a668586d",
    "translatableHash": "sha256:9f8a8e5f7c76af218ab3a431d47b567ecf61a3c0267cfd1ab1abebdba8f4b347",
    "data": {
      "schemaVersion": 1,
      "name": "Iguanodon",
      "level": 6,
      "rarity": "common",
      "size": "huge",
      "traits": [
        "animal",
        "dinosaur"
      ],
      "description": "Iguanodons are large, herbivorous dinosaurs that inhabit swamps and forests where they browse on the abundant vegetation. The iguanodon is capable of moving on two feet or on four, quickly switching from one stance to the other depending on whether it needs to move through dense foliage or to reach delectable morsels hanging up in the canopy.\nAlthough iguanodons are herbivores, they are notoriously quick to anger. Their thumb spikes make their claws particularly devastating weapons. A well-placed blow from one of these claws can turn a hungry predator into a cowering beast with one swift strike. Iguanodons are 30 feet long and weigh 6,000 pounds.",
      "armorClass": 24,
      "hitPoints": 95,
      "speedFeet": 25,
      "perception": {
        "modifier": 14,
        "senses": [
          "low-light-vision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 16,
        "reflex": 12,
        "will": 14
      },
      "abilities": {
        "str": 7,
        "dex": 4,
        "con": 4,
        "int": -4,
        "wis": 4,
        "cha": 0
      },
      "skills": {
        "athletics": 15
      },
      "languages": [],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "R4jXbSxWyqNtYJyp",
          "name": "Thumb Spike",
          "bonus": 17,
          "damage": "2d8+9 piercing",
          "traits": [
            "deadly-d10",
            "reach-10"
          ]
        },
        {
          "id": "9tmJIJ6vy9JEPaL3",
          "name": "Tail",
          "bonus": 15,
          "damage": "2d10+9 bludgeoning",
          "traits": [
            "reach-15"
          ]
        }
      ],
      "actions": [
        {
          "id": "filzxUgupqvL1ZQq",
          "name": "Gouging Lunge",
          "kind": "action",
          "description": "The iguanodon makes a thumb spike Strike at an adjacent foe and then Strides up to 15 feet, dragging its thumb spike across the foe to gouge out a brutal wound. If this Strike hits, it deals an extra 1d8 slashing damage and the following Stride does not trigger reactions from the creature struck. This thumb spike Strike counts as two attacks when calculating the iguanodon's multiple attack penalty."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:witchwyrd",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "AEa3tvzinib5eaIo",
      "slug": "witchwyrd",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:49384ea3ca9dd21f60ae3ea482fa4e2c13bd6813aabd3148ca54be97f146fc32",
    "translatableHash": "sha256:881ddff8f201e979a2de55a51b2ac38fe11e818a6e03b8e12b1fa1378103f930",
    "data": {
      "schemaVersion": 1,
      "name": "Witchwyrd",
      "level": 6,
      "rarity": "uncommon",
      "size": "medium",
      "traits": [
        "humanoid"
      ],
      "description": "Witchwyrds conceal most of their faces, leaving only their eyes unmasked. Their inscrutability is a boon to one of their most significant interests—mercantilism—and many haughty witchwyrds openly revel in the befuddlement inspired by their mysterious guises and mannerisms. Witchwyrds have a keen eye for new opportunities and markets, and they almost always know when someone tries to pull one over on them.\nThese four-armed humanoid creatures have hairless blue-gray skin, are typically 6-1/2 feet tall, and weigh 300 pounds. Their hands have three evenly sized and spaced digits in a tripod-like arrangement. When not trying to blend in with the local community, witchwyrds favor outlandish, loose-fitting clothes in bright reds or yellows and a signature conical hat. They tend to prefer the driest, warmest regions of the lands they visit—perhaps an indicator of their mysterious home world. Witchwyrds are notoriously closemouthed about details of this distant place, and with good reason: most witchwyrds on Golarion have never visited their ancestral home. To these witchwyrds, the notion of a home planet is a constant thorn in their side, and when asked, many choose to ignore the question altogether. Others are so agitated by these queries that they respond with impatience or even violence. Some scholars have theorized a connection between witchwyrds and several other four-armed creatures, but as with questions of their place of origin, witchwyrds have little to say about the topic.",
      "armorClass": 22,
      "hitPoints": 110,
      "speedFeet": 25,
      "perception": {
        "modifier": 12,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 13,
        "reflex": 13,
        "will": 15
      },
      "abilities": {
        "str": 3,
        "dex": 3,
        "con": 1,
        "int": 4,
        "wis": 3,
        "cha": 5
      },
      "skills": {
        "arcana": 16,
        "athletics": 15,
        "deception": 15,
        "diplomacy": 15,
        "intimidation": 15
      },
      "languages": [
        "common",
        "draconic"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [
          "force 5"
        ],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "SQX3CMgRMSTe9Kbt",
          "name": "Fist",
          "bonus": 15,
          "damage": "1d6+6 bludgeoning",
          "traits": [
            "agile",
            "nonlethal"
          ]
        },
        {
          "id": "4sD9daow6KLnOcUD",
          "name": "Ranseur",
          "bonus": 16,
          "damage": "1d10+6 piercing",
          "traits": [
            "disarm",
            "magical",
            "reach-10"
          ]
        }
      ],
      "actions": [
        {
          "id": "9Zrlyvw0KOgPeQD1",
          "name": "Constant Spells",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "DmKxrzqQZ1NdAQHI",
          "name": "Absorb Force",
          "kind": "reaction",
          "description": "Frequency once per round\nTrigger A force barrage or Force Dart (see below) is fired at the witchwyrd, and the witchwyrd is aware of it and has a free hand\nEffect The witchwyrd \"catches\" one force projectile, absorbing it, preventing the damage, and causing that hand to glow while it holds this energy. A hand that's holding energy can't be used for any other purpose except to use Force Dart. The energy lasts for 1 minute or until it's released."
        },
        {
          "id": "wBOmt44hbAvJFvdg",
          "name": "Force Dart",
          "kind": "action",
          "description": "1 to 3\nThe witchwyrd fires one dart of force per action spent (dealing (1d4+1)[force] damage each). They can't spend more actions on this ability than they have free hands. If they use a hand that has Absorbed Force, that hand hurls two darts instead of one, expending the held energy."
        },
        {
          "id": "OxPyjo3hBKAj4EFz",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": [
        {
          "id": "0FXnox8owBPkiZp5",
          "name": "Arcane Innate Spells",
          "tradition": "arcane",
          "category": "innate",
          "attackModifier": 15,
          "saveDc": 23,
          "spells": [
            {
              "id": "jGoAhdKvjCucyXZA",
              "name": "Carryall (At Will)",
              "rank": 1
            },
            {
              "id": "JkXhcpfOsOxooRbc",
              "name": "Detect Magic",
              "rank": 1
            },
            {
              "id": "YYatuAaUgxvfUML6",
              "name": "Phantasmal Minion (At Will)",
              "rank": 1
            },
            {
              "id": "P7Tcc3Ms7gX2VtRI",
              "name": "Blur",
              "rank": 2
            },
            {
              "id": "f2F28jqDiXdY4liu",
              "name": "Dispel Magic",
              "rank": 3
            },
            {
              "id": "AUmTfHS4ff6l4Hk3",
              "name": "Resist Energy",
              "rank": 4
            },
            {
              "id": "7L7Ix2SKZrUObojo",
              "name": "Suggestion",
              "rank": 4
            },
            {
              "id": "NKyQfXIWRUr4N4Tc",
              "name": "Translocate",
              "rank": 5
            },
            {
              "id": "dT9PSMZVPk0Jt1VU",
              "name": "Truespeech (Constant)",
              "rank": 5
            }
          ]
        }
      ]
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:graveknight-captain",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "AfubOmkdmPRctnLX",
      "slug": "graveknight-captain",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:0487e80a5c26fae32e664e51cd9824b0aca4f22d89c61cd0351f601d5f22fe57",
    "translatableHash": "sha256:005b869e3fd1fc7e9572f3e5b9420991a9aef6bd6491a42f438142c983f7377e",
    "data": {
      "schemaVersion": 1,
      "name": "Graveknight Captain",
      "level": 6,
      "rarity": "uncommon",
      "size": "medium",
      "traits": [
        "undead",
        "unholy"
      ],
      "description": "Graveknight captains once proudly led squads of troops in battle.\nWhen a fearsome combatant falls in battle, the warrior's vengeful spirit can sometimes fuse with their armor, creating a graveknight.",
      "armorClass": 24,
      "hitPoints": 90,
      "speedFeet": 25,
      "perception": {
        "modifier": 14,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 16,
        "reflex": 14,
        "will": 13
      },
      "abilities": {
        "str": 5,
        "dex": 3,
        "con": 4,
        "int": 1,
        "wis": 2,
        "cha": 3
      },
      "skills": {
        "athletics": 16,
        "intimidation": 15,
        "survival": 12
      },
      "languages": [
        "common",
        "necril"
      ],
      "defenses": {
        "immunities": [
          "acid",
          "bleed",
          "death-effects",
          "disease",
          "paralyzed",
          "poison",
          "unconscious"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "UrsnNeUf9Oz45ALB",
          "name": "Warhammer",
          "bonus": 16,
          "damage": "2d8+7 bludgeoning; 1d6 acid",
          "traits": [
            "acid",
            "magical",
            "shove"
          ]
        },
        {
          "id": "XwhnLemfNYhbo7V3",
          "name": "Fist",
          "bonus": 16,
          "damage": "2d4+7 bludgeoning; 1d6 acid",
          "traits": [
            "acid",
            "agile",
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "3mR4mcAmBwYG0tNv",
          "name": "Graveknight's Shield",
          "kind": "passive",
          "description": "The graveknight's curse extends to their shield, or the graveknight's armor uses a portion of itself to produce a shield. The graveknight has a shield that uses the statistics of a Sturdy Shield of a level no higher than the graveknight's level – 1. The shield is quasi-independent of the graveknight and automatically protects the graveknight from harm. When the shield is raised, it automatically uses Shield Block to reduce the damage of the first attack against the graveknight each round without the graveknight needing to spend their reaction to do so. The shield automatically rejuvenates with the rest of the graveknight and must be destroyed in the same manner as the graveknight's armor."
        },
        {
          "id": "OWnWdVI1sxmfd3zM",
          "name": "Reactive Strike",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "rPkkj7MZKXSV6Evz",
          "name": "Rejuvenation",
          "kind": "passive",
          "description": "When a graveknight is destroyed, their armor rebuilds their body over the course of [[/gmr 1d10 #days]]{1d10 days} days—or more quickly if the armor is worn by a living host. If the body is destroyed before then, the process restarts. A graveknight can only be permanently destroyed by obliterating their armor (such as with Disintegrate), transporting it to the Forge of Creation, or throwing it into the heart of a volcano."
        },
        {
          "id": "nZZVZvEvqpk45Dtf",
          "name": "Void Healing",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "IsVr2xyWvMuuKmhj",
          "name": "Devastating Blast",
          "kind": "action",
          "description": "The graveknight unleashes a @Template[cone|distance:30] of energy. Creatures in the area take 4d12[acid|options:area-damage] damage (check (reflex, dc:24, basic, options:area-effect) save).\nThe graveknight can use this ability once every [[/gmr 1d4 #Recharge Devastating Blast]]{1d4 rounds}."
        },
        {
          "id": "6pFQqUIZorBLTqFh",
          "name": "Graveknight's Curse",
          "kind": "passive",
          "description": "This curse affects anyone who wears a graveknight's armor for at least 1 hour\nSaving Throw check (will, dc:24) save\nOnset 1 hour\nStage 1 Doomed 1 and can't remove armor (1 day)\nStage 2 Doomed 2, –10-foot status penalty to Speeds, and can't remove armor (1 day)\nStage 3 dies and transforms into the armor's graveknight."
        },
        {
          "id": "CtjnAnRWYmeaer2r",
          "name": "Ruinous Weapons",
          "kind": "passive",
          "description": "Any weapon or unarmed attack the graveknight uses gains the effects of a +1 striking weapon and a caustic weapon rune."
        },
        {
          "id": "AXFxla8wvyJEQWNQ",
          "name": "Weapon Master",
          "kind": "passive",
          "description": "The graveknight has access to the critical specialization effects of any weapons it wields."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:fire-jellyfish-swarm",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "E9tiK9bF9de5pf5e",
      "slug": "fire-jellyfish-swarm",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:d98d463fbd938598761c525a39ee913dd6a75a10653867eb6d4b3d3f1a3afb74",
    "translatableHash": "sha256:789c0401517ff78919f0de4424136b9b5dffe4e59e69308539f4b31241e9fb09",
    "data": {
      "schemaVersion": 1,
      "name": "Fire Jellyfish Swarm",
      "level": 6,
      "rarity": "common",
      "size": "large",
      "traits": [
        "animal",
        "aquatic",
        "mindless",
        "swarm"
      ],
      "description": "While individually one of these fist-sized jellyfish is merely a nuisance, in great numbers, fire jellyfish can form into dangerous swarms. Bobbing in the water, they create a cloud of stinging tentacles. They were named in part for their bright coloration, but those who are stung by fire jellyfish learn the larger reason for their name—the pain of their stings is comparable to being burned alive.\nMany varieties of jellyfish drift through the world's oceans, feeding on fish and other tiny marine creatures. However, deadly species of monstrous jellyfish pose a threat to unwary swimmers and sailors alike. Note that while jellyfish are animals, they also have the mindless trait because they lack a centralized nervous system.",
      "armorClass": 13,
      "hitPoints": 155,
      "speedFeet": 0,
      "perception": {
        "modifier": 11,
        "senses": [
          "low-light-vision"
        ]
      },
      "saves": {
        "fortitude": 16,
        "reflex": 15,
        "will": 10
      },
      "abilities": {
        "str": -4,
        "dex": 5,
        "con": 4,
        "int": -5,
        "wis": 0,
        "cha": -5
      },
      "skills": {
        "acrobatics": 15
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "critical-hits",
          "precision",
          "swarm-mind"
        ],
        "resistances": [
          "bludgeoning 9",
          "piercing 9",
          "poison 10",
          "slashing 5"
        ],
        "weaknesses": [
          "area-damage 7",
          "splash-damage 7"
        ]
      },
      "attacks": [],
      "actions": [
        {
          "id": "zBQ8wgCX7pLsGdno",
          "name": "Swarm Mind",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "1ScltNeHK5MUCQ8M",
          "name": "Agile Swimmer",
          "kind": "passive",
          "description": "Fire jellyfish swarms use Acrobatics to Swim."
        },
        {
          "id": "851vRb9jitmLF4Or",
          "name": "Burning Swarm",
          "kind": "action",
          "description": "Each enemy in the swarm's space takes 3d8[poison] damage (check (reflex, dc:24, basic) save) and is exposed to fire jelly venom."
        },
        {
          "id": "w0eoCna93JBevpqS",
          "name": "Fire Jelly Venom",
          "kind": "passive",
          "description": "Saving Throw check (fortitude, dc:24)\nMaximum Duration 6 rounds\nStage 1 Clumsy 1 (1 round)\nStage 2 Clumsy 2 (1 round)\nStage 3 Clumsy 3 (1 round)"
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:sulfur-zombie",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "ekC1VHJtexh3AgVv",
      "slug": "sulfur-zombie",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:1369ad736e1a46b5312005d661cf8c18d385e81cddeb6f076b7bc3848c9b33b0",
    "translatableHash": "sha256:952e0f32dcdef18bf47e91c30138454e93ad54384ea5b7051f6eb1fa77e27f07",
    "data": {
      "schemaVersion": 1,
      "name": "Sulfur Zombie",
      "level": 6,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "fire",
        "mindless",
        "undead",
        "unholy",
        "zombie"
      ],
      "description": "Glowing with a dull amber light, these odious creatures spawn from a combination of baleful magic and fire. These destructive creations sow chaos and demolish fortifications, making them the bane of besieged cities.\nNecromancers most often create these mindless undead as obedient, expendable servitors. Left to its own devices, a zombie seeks only to consume the living, stopping only when its rotting body can no longer hold together.",
      "armorClass": 23,
      "hitPoints": 125,
      "speedFeet": 30,
      "perception": {
        "modifier": 12,
        "senses": [
          "darkvision"
        ]
      },
      "saves": {
        "fortitude": 16,
        "reflex": 12,
        "will": 10
      },
      "abilities": {
        "str": 5,
        "dex": 2,
        "con": 4,
        "int": -5,
        "wis": 2,
        "cha": -2
      },
      "skills": {
        "athletics": 15,
        "stealth": 12
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "bleed",
          "death-effects",
          "disease",
          "fire",
          "mental",
          "paralyzed",
          "poison",
          "unconscious"
        ],
        "resistances": [],
        "weaknesses": [
          "slashing 7",
          "vitality 7"
        ]
      },
      "attacks": [
        {
          "id": "N8NrM7aPpys4ODoh",
          "name": "Fist",
          "bonus": 17,
          "damage": "2d6+5 bludgeoning; 1d6 fire",
          "traits": []
        }
      ],
      "actions": [
        {
          "id": "JmfSQ1VHDnhBb2Cw",
          "name": "Slow",
          "kind": "passive",
          "description": "A sulfur zombie is permanently Slowed 1 and can't use reactions."
        },
        {
          "id": "Nfsh9yARMZIzTQTc",
          "name": "Death Throes",
          "kind": "passive",
          "description": "When a sulfur zombie dies, its body explodes in a @Template[type:burst|distance:30] of fire and debris that deals 2d10[bludgeoning,2d10[fire]|options:area-damage]{2d10 bludgeoning damage and 2d10 fire damage} to each creature in the area (check (reflex, dc:21, basic) save)."
        },
        {
          "id": "rZJFI4g5IW0cqR6z",
          "name": "Void Healing",
          "kind": "passive",
          "description": ""
        },
        {
          "id": "ihZqgmlzpWcOPLkE",
          "name": "Blinding Sulfur",
          "kind": "passive",
          "description": "A sulfur zombie burns with putrid inner fire. A creature hit by a sulfur zombie's fist Strike must attempt a check (fortitude, dc:22) save. On a failure, the creature is Blinded for 1 round, or for 1 minute on a critical failure."
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:verdurous-ooze",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "GOQPbXk8HZDypZzd",
      "slug": "verdurous-ooze",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:405115df65a42d48a604fe431e1ffc5d8b984fa0e03f7442f5555a1dd24b2a82",
    "translatableHash": "sha256:221966ea1c1c47d74f220fc831c5e45ca9d7213377d7802fc136bd2c68c23817",
    "data": {
      "schemaVersion": 1,
      "name": "Verdurous Ooze",
      "level": 6,
      "rarity": "common",
      "size": "medium",
      "traits": [
        "mindless",
        "ooze"
      ],
      "description": "Verdurous oozes are found in temperate forests, warm jungles, or other places where plant life grows in abundance. Unlike many types of oozes, verdurous oozes are not particularly good climbers and have been known to get trapped in natural or artificial chasms. Warlords and wizards sometimes make use of that fact and keep verdurous oozes as guardians in pits around the walls of their fortresses or towers.",
      "armorClass": 12,
      "hitPoints": 157,
      "speedFeet": 15,
      "perception": {
        "modifier": 8,
        "senses": [
          "motion-sense-60"
        ]
      },
      "saves": {
        "fortitude": 17,
        "reflex": 8,
        "will": 10
      },
      "abilities": {
        "str": 5,
        "dex": -4,
        "con": 5,
        "int": -5,
        "wis": 0,
        "cha": -5
      },
      "skills": {
        "athletics": 15,
        "stealth": 4
      },
      "languages": [],
      "defenses": {
        "immunities": [
          "acid",
          "critical-hits",
          "piercing",
          "precision",
          "slashing",
          "unconscious",
          "visual"
        ],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "Ly9IqnJW6Zy3JQ4y",
          "name": "Pseudopod",
          "bonus": 15,
          "damage": "2d6+7 bludgeoning; 1d6 acid",
          "traits": [
            "unarmed"
          ]
        }
      ],
      "actions": [
        {
          "id": "Ox2rTRtNAQouxryx",
          "name": "Motion Sense",
          "kind": "passive",
          "description": "A verdurous ooze can sense nearby creatures through vibration and air or water movement."
        },
        {
          "id": "whb2OZIXgagZrUoX",
          "name": "Corrosive Surface",
          "kind": "passive",
          "description": "A creature that hits a verdurous ooze with a metal weapon or unarmed attack must attempt a check (reflex, dc:21, options:damaging-effect) save. On a failure, the weapon or creature takes 2d4[acid] damage (after dealing damage to the ooze as normal). Thrown weapons take this damage automatically with no save."
        },
        {
          "id": "H5H2qTd7RH9FnyiA",
          "name": "Enliven Foliage",
          "kind": "passive",
          "description": "20 feet. The verdurous ooze constantly emits supernatural vapors that cause nearby plants to grow rapidly and writhe and grasp at anything and everything within the emanation. This area becomes difficult terrain for non-verdurous ooze creatures. When a creature starts its turn in this aura, it must succeed at a check (reflex, dc:21, options:area-effect) save or take a –10-foot circumstance penalty to its Speeds until it leaves the emanation.\nEffect: Enliven Foliage"
        },
        {
          "id": "Q1JyYPsUlKes2ELl",
          "name": "Split",
          "kind": "passive",
          "description": "When a verdurous ooze that has 10 or more HP is hit by an attack that would deal piercing or slashing damage, it splits into two identical oozes, each with half the original's HP. One ooze is in the same space as the original, and the other is in an adjacent, unoccupied space. If no adjacent space is unoccupied, it automatically pushes creatures and objects out of the way to fill a space (the GM decides if an object or creature is too big or heavy to push)."
        },
        {
          "id": "okXnipjpQrYq6vGT",
          "name": "Constrict",
          "kind": "action",
          "description": "2d6[bludgeoning,1d6[acid]], check (fortitude, dc:24, basic)"
        },
        {
          "id": "u9uoDYlFsBGEdg0u",
          "name": "Sleep Gas",
          "kind": "action",
          "description": "The verdurous ooze adjusts its aura of supernatural vapors to affect living creatures within a @Template[emanation|distance:20], forcing them to attempt a check (will, dc:24, options:area-effect,inflicts:stupefied,inflicts:unconscious) save.\nCritical Success The creature is unaffected and becomes temporarily immune to Sleep Gas for 24 hours.\nSuccess The creature is Stupefied 1 for 1 round.\nFailure The creature falls Unconscious. If it's still unconscious after 1 minute, it wakes up automatically.\nCritical Failure The creature falls Unconscious. If it's still unconscious after 1 hour, it wakes up automatically."
        },
        {
          "id": "TcRZ95uAXroBAwRv",
          "name": "Verdurous Ooze Acid",
          "kind": "passive",
          "description": "A verdurous ooze's acid damages only metal and flesh-not bone, stone, or other materials."
        },
        {
          "id": "9DPwWQNOPrtofEy4",
          "name": "Grab",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  },
  {
    "contentId": "pf2e:bestiary:pathfinder-monster-core-2:hodag",
    "domain": "BESTIARY",
    "locale": "en-US",
    "source": {
      "sourcePack": "pathfinder-monster-core-2",
      "sourceId": "gUF7bigH5jyJM8AG",
      "slug": "hodag",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/npc.svg"
    },
    "sourceHash": "sha256:5c6555e905eae0cd791281424609eca7937b5a945f442b543952b1bc24b474c6",
    "translatableHash": "sha256:5d4da3652a030dc0b0be2cb0539a6f8f56358c575a489dde95a0449330a92f10",
    "data": {
      "schemaVersion": 1,
      "name": "Hodag",
      "level": 6,
      "rarity": "uncommon",
      "size": "large",
      "traits": [
        "beast"
      ],
      "description": "Because they're often fantastically described in the wild tall tales of loggers or miners, hodags are considered by many to exist only in local folklore. However, some individuals have actually encountered these dangerous beasts firsthand, though even fewer have lived to tell the tale.\nHodags are reptilian creatures the size of bulls. Their vicious claws can tear creatures apart in seconds. Their backs sport dozens of long spines, running from their snouts all the way down the length of their powerful tails. Their wide mouths are full of sharp, twisted rows of teeth, not unlike those of a shark. The hodags' rough, scaly hides carry hues of green and brown, allowing them to blend into their forest surroundings where they ambush prey. Only their glowing red eyes reveal their presence, though hodags have learned to use this to their advantage by drawing attention to their eyes in one area, closing them, and stealthily moving to another area to discombobulate prey.\nBecause hodags are rarely seen, their biology is a matter of some mystery. While they may have evolved as natural beasts, rumors persist that they spring from curses or as punishment for mistreating livestock.\nIn the wintertime, when snow and ice blanket a region, hodags grow a foul-smelling coat of greasy, dark-brown fur that sprouts in tufts from between their scales. A typical hodag measures over 10 feet long from snout to tail and weighs upward of 700 pounds.",
      "armorClass": 24,
      "hitPoints": 90,
      "speedFeet": 25,
      "perception": {
        "modifier": 14,
        "senses": [
          "darkvision",
          "scent-imprecise-30"
        ]
      },
      "saves": {
        "fortitude": 17,
        "reflex": 14,
        "will": 12
      },
      "abilities": {
        "str": 5,
        "dex": 4,
        "con": 5,
        "int": -2,
        "wis": 4,
        "cha": 0
      },
      "skills": {
        "athletics": 13,
        "stealth": 14,
        "survival": 12
      },
      "languages": [
        "common"
      ],
      "defenses": {
        "immunities": [],
        "resistances": [],
        "weaknesses": []
      },
      "attacks": [
        {
          "id": "5gQfBlJ7yrj0fW4A",
          "name": "Jaws",
          "bonus": 17,
          "damage": "2d8+8 piercing",
          "traits": []
        },
        {
          "id": "JuxzzHzFmZuRB6UN",
          "name": "Claw",
          "bonus": 17,
          "damage": "2d6+8 slashing",
          "traits": [
            "agile"
          ]
        },
        {
          "id": "0uUOXARbo1xq8rDu",
          "name": "Spiked Tail",
          "bonus": 17,
          "damage": "2d6+8 bludgeoning",
          "traits": [
            "reach-10",
            "versatile-p"
          ]
        }
      ],
      "actions": [
        {
          "id": "gKLTta08EZnW94Hg",
          "name": "Trackless",
          "kind": "passive",
          "description": "A hodag sweeps the ground behind it with its tail as it moves, obscuring its tracks. The DCs of checks to Track a hodag are increased by 10."
        },
        {
          "id": "tKWHoMSNa99gB8MO",
          "name": "Ferocity",
          "kind": "reaction",
          "description": ""
        },
        {
          "id": "I2x015cpveE4aI43",
          "name": "Rip and Tear",
          "kind": "action",
          "description": "The hodag makes two claw Strikes and one jaws Strike in any order."
        },
        {
          "id": "dzio8A2e4eRi54Y0",
          "name": "Toss",
          "kind": "action",
          "description": "The hodag Strides, then makes a Strike against a target in reach. If it moves at least 20 feet and succeeds at its Strike, the hodag deals damage normally and then attempts an Athletics check against the creature's Fortitude DC to toss the enemy into the air. On a success, the tossed creature is thrown 10 feet in a straight line in the direction of the hodag's choice and then lands Prone.\nIf the creature is knocked into a solid object, it takes 1d6[bludgeoning] damage before landing prone. The hodag can instead toss a creature straight up in the air. The creature lands in the same square where it started, takes 1d6[bludgeoning] damage, and falls prone."
        },
        {
          "id": "JCklW2T6OHjyQ9md",
          "name": "Knockdown",
          "kind": "action",
          "description": ""
        }
      ],
      "spellcasting": []
    }
  }
]
