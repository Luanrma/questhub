import type { Pathfinder2eOriginalContentRecord } from '../../records'
import type { Pathfinder2eSpellData } from '../types'

export const PATHFINDER_2E_EXHAUSTIVE_02_SPELL_ORIGINALS: readonly Pathfinder2eOriginalContentRecord<Pathfinder2eSpellData>[] = [
  {
    "contentId": "pf2e:spell:spells-srd:mending",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "dINQzhqGmIsqGMUY",
      "slug": "mending",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/mending.webp"
    },
    "sourceHash": "sha256:91740dc24cc59d0e3e8e9d2c1cb0c86065ba98fcbe69f28c0d989f398aea37ad",
    "translatableHash": "sha256:3f46348435a9b904ba6a18e9114f39c34897c032918dc75e91de24bc74bf9d33",
    "data": {
      "schemaVersion": 1,
      "name": "Mending",
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
      "description": "You repair the target item. You restore 5 Hit Points per spell rank to the target, potentially removing the Broken condition if this repairs it past the item's Broken Threshold. You can't replace lost pieces or repair an object that's been completely destroyed.\nHeightened (2nd) You can target a non-magical object of 1 Bulk or less.\nHeightened (3rd) You can target a non-magical object of 2 Bulk or less, or a magical object of 1 Bulk or less.",
      "castingTime": "10 minutes",
      "range": "touch",
      "target": "non-magical object of light Bulk or less",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (2nd) You can target a non-magical object of 1 Bulk or less.\nHeightened (3rd) You can target a non-magical object of 2 Bulk or less, or a magical object of 1 Bulk or less."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:spider-sting",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "DYdvMZ8G2LiSLVWw",
      "slug": "spider-sting",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:7c3ab4db3c7fc20914e2a682dee39c79072f78a27f8ea103de97fc09c72fe2fb",
    "translatableHash": "sha256:fff388c96bf1dec952f1a7a8d8406c974827921794c0b6c722b9d35a683605aa",
    "data": {
      "schemaVersion": 1,
      "name": "Spider Sting",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "poison"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You magically duplicate a spider's venomous sting. You deal 1d4 piercing damage to the touched creature and afflict it with spider venom. The target must attempt a Fortitude save.\nCritical Success The target is unaffected.\nSuccess The target takes 1d4[poison] damage.\nFailure The target is afflicted with spider venom at stage 1.\nCritical Failure The target is afflicted with spider venom at stage 2.\nSpider Venom (poison)\nLevel 1\nMaximum Duration 4 rounds\nStage 1 1d4 poison damage and Enfeebled 1 (1 round)\nStage 2 1d4 poison damage and Enfeebled 2 (1 round)",
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
    "contentId": "pf2e:spell:spells-srd:runic-body",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "EE7Q5BHIrfWNCPtT",
      "slug": "runic-body",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/magic-fang.webp"
    },
    "sourceHash": "sha256:ac1f3da097e84a99a7a175a8f8f49ed01e5df168995e8435e8b23550d0d5d319",
    "translatableHash": "sha256:5f30a253075cdb238e5122e66cb8a1b78198c146b13301815f54aee6aace3cd3",
    "data": {
      "schemaVersion": 1,
      "name": "Runic Body",
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
      "description": "Glowing runes appear on the target's body. All its unarmed attacks become +1 striking unarmed attacks, gaining a +1 item bonus to attack rolls and increasing the number of damage dice to two.\nHeightened (6th) The unarmed attacks are +2 greater striking.\nHeightened (9th) The unarmed attacks are +3 major striking.\nSpell Effect: Runic Body",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 willing creature",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (6th) The unarmed attacks are +2 greater striking.\nHeightened (9th) The unarmed attacks are +3 major striking.\nSpell Effect: Runic Body"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:pet-cache",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "F1nlmqOIucch3Cmt",
      "slug": "pet-cache",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:d4e080d39d5c2be439b79f99e737f909e2ec75de5e208083e56bea3eff677e5b",
    "translatableHash": "sha256:204c2d03d57ed014122dce6abdd6b5b362400944165b7549e8fe468fc19e41f9",
    "data": {
      "schemaVersion": 1,
      "name": "Pet Cache",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "extradimensional",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult",
        "primal"
      ],
      "description": "You open your cloak or create a gap with your hands, drawing the target into a pocket dimension just large enough for its basic comfort. No other creature can enter this extradimensional space, and the target can bring along objects only if they were designed to be worn by a creature of its kind. The space has enough air, food, and water to sustain the target for the duration.\nYou can Dismiss the spell. The spell also ends if you die or enter an extradimensional space. When the spell ends, the target reappears in the nearest unoccupied space (outside of any extradimensional space you may have entered).",
      "castingTime": "1 action",
      "range": "touch",
      "target": "1 willing creature that is your companion",
      "area": null,
      "duration": "8 hours",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:gust-of-wind",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "g8QqHpv2CWDwmIm1",
      "slug": "gust-of-wind",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/gust-of-wind.webp"
    },
    "sourceHash": "sha256:65142c4ee21066d8b60229c38acffb5410e834fd513731229fd0563588963da6",
    "translatableHash": "sha256:496b86c132ef59a96cc1794753f8871fb8bb53215ca3b5e4c908303fd7ada974",
    "data": {
      "schemaVersion": 1,
      "name": "Gust of Wind",
      "rank": 1,
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
      "description": "A violent wind issues forth from your palm, blowing from the point where you are when you Cast the Spell to the line's opposite end. The wind extinguishes small non-magical fires, disperses fog and mist, blows objects of light Bulk or less around, and pushes larger objects. Large or smaller creatures in the area must attempt a Fortitude save. Large or smaller creatures that later move into the gust must attempt the save on entering.\nCritical Success The creature is unaffected.\nSuccess The creature can't move against the wind.\nFailure The creature is knocked Prone. If it was flying, it takes the effects of critical failure instead.\nCritical Failure The creature is pushed 30 feet in the wind's direction, knocked prone, and takes 2d6 bludgeoning damage.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "60 line",
      "duration": "until the start of your next turn",
      "defense": "fortitude save",
      "damage": [
        {
          "formula": "2d6",
          "type": "bludgeoning",
          "kind": "damage"
        }
      ],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:sure-strike",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Gb7SeieEvd0pL2Eh",
      "slug": "sure-strike",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:7a98bf618f83b3f647fa9161dd0c45d1f114f8da54bb72d20b018299de498f9b",
    "translatableHash": "sha256:10f1931aece67e860ff18a9734368e01c7d8508a37f1a483bc7170ded1851aaf",
    "data": {
      "schemaVersion": 1,
      "name": "Sure Strike",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "fortune"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "The next time you make an attack roll before the end of your turn, roll it twice and use the better result. The attack ignores circumstance penalties to the attack roll and any flat check required due to the target being Concealed or Hidden. You are then temporarily immune to sure strike for 10 minutes.\nSpell Effect: Sure Strike",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": null,
      "duration": "until the end of your turn",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:pest-form",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "gfPjmG6Fe6D3MFjl",
      "slug": "pest-form",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/pest-form.webp"
    },
    "sourceHash": "sha256:f2835a89a931c5f18fefff8e6d491ebaba940dafa26e27f53800e488710b4865",
    "translatableHash": "sha256:359af47a7f1f60a4e0725875be39eb5386b6a47191cae1e6a4ac9abe712ae6e7",
    "data": {
      "schemaVersion": 1,
      "name": "Pest Form",
      "rank": 1,
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
      "description": "You transform into the battle form of a Tiny animal, such as a cat, insect, lizard, or rat. You can decide the specific type of animal (such as a rat or praying mantis), but this has no effect on the form's Size or statistics. While in this form, you gain the animal trait and you can't make Strikes. You can Dismiss the spell.\nYou gain the following statistics and abilities:\n• AC = 15 + your level. Ignore your armor's check penalty and Speed reduction.\n• Speed 20 feet.\n• Weakness 5 to physical damage. (If you take physical damage in this form, you take 5 additional damage.)\n• Low-light vision and imprecise scent 30 feet.\n• Acrobatics and Stealth modifiers of +10, unless your own modifier is higher; Athletics modifier -4.\nHeightened (4th) You can turn into a flying creature, such as a bird, which grants you a fly Speed of 20 feet.\nSpell Effect: Pest Form",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) You can turn into a flying creature, such as a bird, which grants you a fly Speed of 20 feet.\nSpell Effect: Pest Form"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:protection",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "gMODOGamz88rgHuf",
      "slug": "protection",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/protection.webp"
    },
    "sourceHash": "sha256:e2c860cfccec142607315998b41fc92c32a54b335fa5bb7b19e4e4c7a9b764ca",
    "translatableHash": "sha256:e01a076f99adcd16f4467eb333b7e3a9ae46a8a8397ed3ac5b1db2afdf64e9d6",
    "data": {
      "schemaVersion": 1,
      "name": "Protection",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "You ward a creature against harm. The target gains a +1 status bonus to Armor Class and saving throws.\nHeightened (3rd) You can choose to have the benefits also affect all your allies in a @Template[emanation|distance:10] around the target.\nSpell Effect: Protection",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 willing creature",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (3rd) You can choose to have the benefits also affect all your allies in a @Template[emanation|distance:10] around the target.\nSpell Effect: Protection"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:detect-magic",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "gpzpAAAJ1Lza2JVl",
      "slug": "detect-magic",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/detect-magic.webp"
    },
    "sourceHash": "sha256:ceb61ecbe5ed323d6db4d42dbd3dd0cba27d21797709ac757d5e1cff71daf42f",
    "translatableHash": "sha256:92a0175c2d568ea078d4e6ddc196864d9f231bb36642df07cc30a718c558fdb9",
    "data": {
      "schemaVersion": 1,
      "name": "Detect Magic",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "cantrip",
        "concentrate",
        "detection",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult",
        "primal"
      ],
      "description": "You send out a pulse that registers the presence of magic. You receive no information beyond the presence or absence of magic. You can choose to ignore magic you're fully aware of, such as the magic items and ongoing spells of you and your allies. You detect illusion magic only if that magic's effect has a lower rank than the rank of your detect magic spell. However, items that have an illusion aura but aren't deceptive in appearance (such as an invisibility potion) typically are detected normally.\nHeightened (3rd) You learn the rank or level of the most powerful magical effect the spell detects, as determined by the GM.\nHeightened (4th) As 3rd rank, but you also pinpoint the source of the highest-rank magic. Like for an imprecise sense, you don't learn the exact location, but can narrow down the source to within a 5-foot cube (or the nearest if larger than that).",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "30 emanation",
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (3rd) You learn the rank or level of the most powerful magical effect the spell detects, as determined by the GM.\nHeightened (4th) As 3rd rank, but you also pinpoint the source of the highest-rank magic. Like for an imprecise sense, you don't learn the exact location, but can narrow down the source to within a 5-foot cube (or the nearest if larger than that)."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:summon-fey",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "hs7h8f4Z1ZNdUt3s",
      "slug": "summon-fey",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:9405c4d02c7efb8d74c6c2f20d3e4779146f0ba78f13008268811018e8a6ed33",
    "translatableHash": "sha256:d436990774545745b8c20df5cfc69c71af515559c482a4b8019d8b53c751bae4",
    "data": {
      "schemaVersion": 1,
      "name": "Summon Fey",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "summon"
      ],
      "traditions": [
        "occult",
        "primal"
      ],
      "description": "You summon a creature that has the fey trait and whose level is –1 to fight for you.\nHeightened As listed in the summon trait.",
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
    "contentId": "pf2e:spell:spells-srd:illusory-disguise",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "i35dpZFI7jZcRoBo",
      "slug": "illusory-disguise",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/illusory-disguise.webp"
    },
    "sourceHash": "sha256:a5f28b6375c6b65c81cb14e4ea36faf4414220e7d4c2760b886d0738bf311a0a",
    "translatableHash": "sha256:d8a121f4ad62ca7cd8ef32fff0979c4c589ca53afe5ff56f0be0d23aa85c4b44",
    "data": {
      "schemaVersion": 1,
      "name": "Illusory Disguise",
      "rank": 1,
      "rarity": "common",
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
      "description": "You create an illusion that causes the target to appear as another creature of the same body shape, and with roughly similar height (within 6 inches) and weight (within 50 pounds). The disguise is typically good enough to hide their identity, but not to impersonate a specific individual. The spell changes their appearance and voice, but not mannerisms. You can change the appearance of its clothing and worn items, such as making its armor look like a dress. Held items are unaffected, and any worn item removed from the creature returns to its true appearance.\nCasting illusory disguise counts as setting up a disguise for the Impersonate use of Deception; it ignores any circumstance penalties the target might take for disguising itself as a dissimilar creature, gives a +4 status bonus to Deception checks to prevent others from seeing through the disguise, and lets the target add its level to such Deception checks even if untrained. You can Dismiss this spell.\nHeightened (3rd) The target can appear as any creature of the same size, even a specific individual. You must have seen an individual to replicate its appearance, and must have heard its voice to replicate its voice.\nHeightened (4th) You can target up to 10 willing creatures. If you target multiple creatures, you can choose a different disguise for each target, but none can impersonate a specific individual. You can Dismiss each disguise individually or all collectively.\nHeightened (7th) As 4th, but you can choose disguises that impersonate specific individuals. You must have seen an individual to replicate its appearance, and must have heard its voice to replicate its voice.\nSpell Effect: Illusory Disguise",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 willing creature",
      "area": null,
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (3rd) The target can appear as any creature of the same size, even a specific individual. You must have seen an individual to replicate its appearance, and must have heard its voice to replicate its voice.\nHeightened (4th) You can target up to 10 willing creatures. If you target multiple creatures, you can choose a different disguise for each target, but none can impersonate a specific individual. You can Dismiss each disguise individually or all collectively.\nHeightened (7th) As 4th, but you can choose disguises that impersonate specific individuals. You must have seen an individual to replicate its appearance, and must have heard its voice to replicate its voice.\nSpell Effect: Illusory Disguise"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:frostbite",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "IxhGEKl63R4QBvkj",
      "slug": "frostbite",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:29189dc0a0618d7b3b77d74a84ee3f150ed08d3aae50dce6afd83f7d13bccada",
    "translatableHash": "sha256:ef014963882ce1a647792fd3aa79a0a4ab8f20bb230112be9e81f89466e24042",
    "data": {
      "schemaVersion": 1,
      "name": "Frostbite",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "cantrip",
        "cold",
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "An orb of biting cold coalesces around your target, freezing its body. The target takes 2d4 cold damage with a basic Fortitude save. On a critical failure, the target also gains weakness 1 to bludgeoning until the start of your next turn.\nSpell Effect: Frostbite\nHeightened (+1) The damage increases by 1d4 and the weakness on a critical failure increases by 1.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "2d4",
          "type": "cold",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+1) The damage increases by 1d4 and the weakness on a critical failure increases by 1."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:guidance",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "izcxFQFwf3woCnFs",
      "slug": "guidance",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/guidance.webp"
    },
    "sourceHash": "sha256:6932b883e83d8053d5fa11edae10b0c98ec3bf49e96e1fc0807c302446e5c6b8",
    "translatableHash": "sha256:cb692751c1bf07ac4b094f44545af8b89520fa9ee95f80e596f86cad35f38abf",
    "data": {
      "schemaVersion": 1,
      "name": "Guidance",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "cantrip",
        "concentrate"
      ],
      "traditions": [
        "divine",
        "occult",
        "primal"
      ],
      "description": "You ask for the guidance of supernatural entities, granting the target a +1 status bonus to one attack roll, Perception check, saving throw, or skill check the target attempts before the duration ends. The target chooses which roll to use the bonus on before rolling. If the target uses the bonus, the spell ends. Either way, the target is then temporarily immune for 1 hour.\nSpell Effect: Guidance\nEffect: Guidance Immunity",
      "castingTime": "1 action",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "until the start of your next turn",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:enfeeble",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "J7Y7tl0bbdz7TcCc",
      "slug": "enfeeble",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/ray-of-enfeeblement.webp"
    },
    "sourceHash": "sha256:20297f08dc09cbe082e45ac7124c49612e7216e1c52e89456c6b71209d4efd42",
    "translatableHash": "sha256:9b217614a5ccfea1e8d225442e3b3e22f8c6cc9c290f2e2182d0771f3745f730",
    "data": {
      "schemaVersion": 1,
      "name": "Enfeeble",
      "rank": 1,
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
      "description": "You sap the target's strength, depending on its Fortitude save.\nCritical Success The target is unaffected.\nSuccess The target is Enfeebled 1 until the start of your next turn.\nFailure The target is Enfeebled 2 for 1 minute.\nCritical Failure The target is Enfeebled 3 for 1 minute.",
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
    "contentId": "pf2e:spell:spells-srd:hydraulic-push",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "jfVCuOpzC6mUrf6f",
      "slug": "hydraulic-push",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/hydraulic-push.webp"
    },
    "sourceHash": "sha256:7ba64a6237160e6e4ca78a6b254bca37041dc4ca3e910720c19c8aaa227ce462",
    "translatableHash": "sha256:92e1ed796ed0a29a91403586a5881c65f9552affedb86f808c4f96e2632cf08e",
    "data": {
      "schemaVersion": 1,
      "name": "Hydraulic Push",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "attack",
        "concentrate",
        "manipulate",
        "water"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You call forth a powerful blast of pressurized water that bludgeons the target and knocks it back. Make a ranged spell attack roll.\nCritical Success The target takes 6d6 bludgeoning damage and is knocked back 10 feet.\nSuccess The target takes 3d6 bludgeoning damage and is knocked back 5 feet.\nHeightened (+1) The bludgeoning damage increases by 2d6.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "1 creature or unattended object",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [
        {
          "formula": "3d6",
          "type": "bludgeoning",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+1) The bludgeoning damage increases by 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:summon-plant-or-fungus",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "jSRAyd57kd4WZ4yE",
      "slug": "summon-plant-or-fungus",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:1f3cf9394c4d08795ebd1b0c228d68af80934f93849adf1dbddc9774727e7a12",
    "translatableHash": "sha256:586fd2cb73eadc96bb462947b11580b4a29275006460c4b42438099d961273d0",
    "data": {
      "schemaVersion": 1,
      "name": "Summon Plant or Fungus",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "summon"
      ],
      "traditions": [
        "primal"
      ],
      "description": "You summon a creature that has the plant or fungus trait and whose level is -1 to fight for you.\nHeightened As listed in the summon trait.",
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
    "contentId": "pf2e:spell:spells-srd:grim-tendrils",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "k34hDOfIIMAxNL4a",
      "slug": "grim-tendrils",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/grim-tendrils.webp"
    },
    "sourceHash": "sha256:bfb485109583cfc17ad2506b7b808b031d3d2d77f38c4338d9159e842b084709",
    "translatableHash": "sha256:eb3219918538739fe0a1d878f479ad7723d473f1de6b6415c32aa4e561a7aacc",
    "data": {
      "schemaVersion": 1,
      "name": "Grim Tendrils",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "void"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "Tendrils of darkness curl out from your fingertips and race through the air. You deal 2d4 void damage and (@item.level)[bleed] damage to living creatures in the line. Each living creature in the line must attempt a Fortitude save.\nCritical Success The creature is unaffected.\nSuccess The creature takes half the void damage and no persistent bleed damage.\nFailure The creature takes full damage.\nCritical Failure The creature takes double void damage and double persistent bleed damage.\nHeightened (+1) The void damage increases by 2d4, and the persistent bleed damage increases by 1.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "30 line",
      "duration": "",
      "defense": "fortitude save",
      "damage": [
        {
          "formula": "2d4",
          "type": "void",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+1) The void damage increases by 2d4, and the persistent bleed damage increases by 1."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:vitality-lash",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "kcelf6IHl3L9VXXg",
      "slug": "vitality-lash",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:c8f80edb4210d5baeb05b4f8b51fe01f986dd22ffb5804df0ad4229818ce0d50",
    "translatableHash": "sha256:908cd3243a648bd327186719b94214f71cc9fbdf9a5bd970553ea0601169995f",
    "data": {
      "schemaVersion": 1,
      "name": "Vitality Lash",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "cantrip",
        "concentrate",
        "manipulate",
        "vitality"
      ],
      "traditions": [
        "divine",
        "primal"
      ],
      "description": "You demolish the target's corrupted essence with energy from Creation's Forge. You deal 2d6 vitality damage with a basic Fortitude save. If the creature critically fails the save, it is also Enfeebled 1 until the start of your next turn.\nHeightened (+1) The damage increases by 1d6.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature that is undead or otherwise has void healing",
      "area": null,
      "duration": "",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "2d6",
          "type": "vitality",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+1) The damage increases by 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:tailwind",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "KcLVELhCUcKXxiKE",
      "slug": "tailwind",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/longstrider.webp"
    },
    "sourceHash": "sha256:f8fffb6e728ca4d78a2e01688807a95b59a0e2f491a0aced38a7e03812fa91af",
    "translatableHash": "sha256:c971a783ac96a9ca146940cbc7cfcc0e441080ec14438e57acdc2f812f60d07a",
    "data": {
      "schemaVersion": 1,
      "name": "Tailwind",
      "rank": 1,
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
      "description": "The wind at your back pushes you to find new horizons. You gain a +10-foot status bonus to your Speed.\nSpell Effect: Tailwind\nHeightened (2nd) The duration increases to 8 hours.\nSpell Effect: Tailwind (8 hours)",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (2nd) The duration increases to 8 hours.\nSpell Effect: Tailwind (8 hours)"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:summon-construct",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "lKcsmeOrgHtK4xQa",
      "slug": "summon-construct",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/summon-construct.webp"
    },
    "sourceHash": "sha256:2532f156ad25933af0201976183c0408f9b4358180dffbd858c2498dba3f6a1a",
    "translatableHash": "sha256:bbf506870552d49d1a036f731f693bfbaaf050d7b079b362e6c43f5f9ecd1b8b",
    "data": {
      "schemaVersion": 1,
      "name": "Summon Construct",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "manipulate",
        "summon"
      ],
      "traditions": [
        "arcane"
      ],
      "description": "You summon a creature that has the construct trait and whose level is –1 to fight for you.\nHeightened As listed in the summon trait.",
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
    "contentId": "pf2e:spell:spells-srd:void-warp",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "mAMEt4FFbdqoRnkN",
      "slug": "void-warp",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/chill-touch.webp"
    },
    "sourceHash": "sha256:57a6d8b8d8428acc9d471dddcd82cf55e19835755478628259d705bbc9878b0a",
    "translatableHash": "sha256:31e1d970cedde6190c19156556cd129f671d5b3a84d79dad6d2a7ee9c67c84b1",
    "data": {
      "schemaVersion": 1,
      "name": "Void Warp",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "cantrip",
        "concentrate",
        "manipulate",
        "void"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult"
      ],
      "description": "You call upon the Void to harm life force. The target takes 2d4 void damage with a basic Fortitude save. On a critical failure, the target is also Enfeebled 1 until the start of your next turn.\nHeightened (+1) The damage increases by 1d4.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 living creature",
      "area": null,
      "duration": "",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "2d4",
          "type": "void",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+1) The damage increases by 1d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:gouging-claw",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "MPxbKoR54gkYkqLO",
      "slug": "gouging-claw",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:cae76ad3af868246ef7b52de2d6e8c11dd953d236416334fec45919000731a36",
    "translatableHash": "sha256:0ff28810e7154d688653a395a0f7461d9f4b7b59ba048187c7447b34586aae48",
    "data": {
      "schemaVersion": 1,
      "name": "Gouging Claw",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "attack",
        "cantrip",
        "concentrate",
        "manipulate",
        "morph"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You temporarily morph your limb into a clawed appendage. Make a melee spell attack roll against your target's AC. If you hit, you deal your choice of 2d6 slashing damage or 2d6 piercing damage, plus 2 persistent bleed damage. On a critical success, you deal double damage and double bleed damage.\nHeightened (+1) The damage increases by 1d6 and the persistent bleed damage increases by 1.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [
        {
          "formula": "2d6",
          "type": "untyped",
          "kind": "damage"
        },
        {
          "formula": "2",
          "type": "bleed",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+1) The damage increases by 1d6 and the persistent bleed damage increases by 1."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:sleep",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "o4lRVTwSxnOOn5vl",
      "slug": "sleep",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:54fa2051148876ce14fe5528d577078d9da9a2e472b01a56042557bac8cb3c41",
    "translatableHash": "sha256:125de566be2a9f6e199dd48028fd6013e1aed5aea2fb2cdf0f1b978a475455fd",
    "data": {
      "schemaVersion": 1,
      "name": "Sleep",
      "rank": 1,
      "rarity": "common",
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
      "description": "Each creature in the area becomes drowsy, possibly nodding off. A creature that falls Unconscious from this spell doesn't fall Prone or release what it's holding. This spell doesn't prevent creatures from waking up due to a successful Perception check, limiting its utility in combat.\nCritical Success The creature is unaffected.\nSuccess The creature takes a –1 status penalty to Perception checks for 1 round.\nFailure The creature falls unconscious. If it's still unconscious after 1 minute, it wakes up automatically.\nCritical Failure The creature falls unconscious. If it's still unconscious after 1 hour, it wakes up automatically.\nHeightened (4th) The creatures fall unconscious for 1 round on a failure or 1 minute on a critical failure. They fall prone and release what they're holding, and they can't attempt Perception checks to wake up. When the duration ends, the creature is sleeping normally instead of automatically waking up.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "",
      "area": "5 burst",
      "duration": "",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened (4th) The creatures fall unconscious for 1 round on a failure or 1 minute on a critical failure. They fall prone and release what they're holding, and they can't attempt Perception checks to wake up. When the duration ends, the creature is sleeping normally instead of automatically waking up."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:read-aura",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "OhD2Z6rIGGD5ocZA",
      "slug": "read-aura",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:2bb197a4d0a223f6128d7a7bd664c511e3e08036822f5b05ed05dd1239a656d6",
    "translatableHash": "sha256:40629cb7c0cbe9c8a0ceb0fa400b56a055e1b0ad154254b50827717d180f05f0",
    "data": {
      "schemaVersion": 1,
      "name": "Read Aura",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "cantrip",
        "concentrate",
        "detection",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult",
        "primal"
      ],
      "description": "You focus on the target object, opening your mind to perceive magical auras. When the casting is complete, you know whether that item is magical. You or anyone you advise about the aura gains a +2 circumstance bonus to Identify Magic on the item. If the object is illusory, you detect this only if the effect's rank is lower than the rank of your read aura spell.\nSpell Effect: Read Aura\nHeightened (3rd) You can target up to 10 objects.\nHeightened (6th) You can target any number of objects.",
      "castingTime": "1 minute",
      "range": "30 feet",
      "target": "1 object",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (3rd) You can target up to 10 objects.\nHeightened (6th) You can target any number of objects."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:disguise-magic",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "PRrZ7anETWPm90YY",
      "slug": "disguise-magic",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/magic-aura.webp"
    },
    "sourceHash": "sha256:1af11ddd3c13b96e63d55c6f6314ed7fb736dd2ff5c4987a84aa32bd337a594a",
    "translatableHash": "sha256:0a286dfa86792585fa55a331783e390de42deb57e2bc32966b25d5a706e347c3",
    "data": {
      "schemaVersion": 1,
      "name": "Disguise Magic",
      "rank": 1,
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
      "description": "You alter how an item's or spell's magical aura appears to effects like detect magic. You can hide the auras entirely, have an item register as a common item of lower level, or make a spell register as a common spell of the same or lower rank. You can Dismiss the spell. A caster using Detect Magic or Read Aura of a higher rank than disguise magic can attempt to disbelieve the illusion using the skill matching the tradition of the spell (Arcana for arcane, Religion for divine, Occultism for occult, or Nature for primal). Further attempts by the same caster get the same result as the initial check to disbelieve.\nHeightened (2nd) You can Cast this Spell on a creature, disguising all items and spell effects on it.",
      "castingTime": "1 minute",
      "range": "30 feet",
      "target": "1 item or spell effect",
      "area": null,
      "duration": "until your next daily preparations",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (2nd) You can Cast this Spell on a creature, disguising all items and spell effects on it."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:telekinetic-hand",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "pwzdSlJgYqN7bs2w",
      "slug": "telekinetic-hand",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/mage-hand.webp"
    },
    "sourceHash": "sha256:936f76a53bcefd87f17e8ea5d38934a9c6fefa2a8935bcd1ebcdcc6b6a3735bc",
    "translatableHash": "sha256:889f6673c977fa53d15eda3167092913ad552643ade7572218cb598cae94f4df",
    "data": {
      "schemaVersion": 1,
      "name": "Telekinetic Hand",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "cantrip",
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "occult"
      ],
      "description": "You create a floating, magical hand, either invisible or ghostlike, that grasps the target object and levitates it slowly up to 20 feet in any direction. When you Sustain the spell, you can move the object an additional 20 feet. If the object is in the air when the spell ends, the object falls.\nHeightened (3rd) You can target an unattended object with a Bulk of 1 or less.\nHeightened (5th) The range increases to 60 feet, and you can target an unattended object with a Bulk of 1 or less.\nHeightened (7th) The range increases to 60 feet, and you can target an unattended object with a Bulk of 2 or less.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 unattended object of light Bulk or less",
      "area": null,
      "duration": "sustained",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (3rd) You can target an unattended object with a Bulk of 1 or less.\nHeightened (5th) The range increases to 60 feet, and you can target an unattended object with a Bulk of 1 or less.\nHeightened (7th) The range increases to 60 feet, and you can target an unattended object with a Bulk of 2 or less."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:jump",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Q7QQ91vQtyi1Ux36",
      "slug": "jump",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/jump.webp"
    },
    "sourceHash": "sha256:d10affe8dcc28757d3dfe83c953e8bbdce8c894c6363878584d89b2a917614c9",
    "translatableHash": "sha256:2127c6629b11897b440b85643e0fff0f279bd35fd52b885d1d5b1988ade8892c",
    "data": {
      "schemaVersion": 1,
      "name": "Jump",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "manipulate",
        "move"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "Your legs surge with strength, ready to leap high and far. You jump 30 feet in any direction without touching the ground. You must land on a space of solid ground within 30 feet of you, or else you fall after using your next action.\nHeightened (3rd) The range becomes touch, the target changes to one touched creature, and the duration becomes 1 minute, allowing the target to jump as described whenever it takes the Leap action.",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (3rd) The range becomes touch, the target changes to one touched creature, and the duration becomes 1 minute, allowing the target to jump as described whenever it takes the Leap action."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:detect-poison",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "QqxwHeYEVylkYjsO",
      "slug": "detect-poison",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:d2a92786cecefcf98b812a3a7b550ad094bae0124adfbbfe24132e3a96249880",
    "translatableHash": "sha256:b77e1d88b3b7a43db4f2e430419c1a351e66caebc5fc37cf811769a4325dd015",
    "data": {
      "schemaVersion": 1,
      "name": "Detect Poison",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "detection",
        "manipulate"
      ],
      "traditions": [
        "divine",
        "primal"
      ],
      "description": "You detect whether a creature is venomous or poisonous, or if an object is poison or has been poisoned. You do not ascertain whether the target is poisonous in multiple ways, nor do you learn the type or types of poison. Certain substances, like lead and alcohol, are poisons and so mask other poisons.\nHeightened (2nd) You learn the number and types of poison.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 object or creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (2nd) You learn the number and types of poison."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:prestidigitation",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Qw3fnUlaUbnn7ipC",
      "slug": "prestidigitation",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:1094528ad915b585a27883baf1d4432a55a5ead6f1215e295fe6b3ade9fc5351",
    "translatableHash": "sha256:56539ae8df4eec0411215727ccd4c1175a3abc25f80d74b6d877eae10f9c1a0a",
    "data": {
      "schemaVersion": 1,
      "name": "Prestidigitation",
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
      "description": "The simplest magic does your bidding. You can perform simple magical effects for as long as you Sustain the spell. Each time you Sustain the spell, you can choose one of four options.\n• Cook Cool, warm, or flavor 1 pound of nonliving material.\n• Lift Slowly lift an unattended object of light Bulk or less 1 foot off the ground.\n• Make Create a temporary object of negligible Bulk, made of congealed magical substance. The object looks crude and artificial and is extremely fragile-it can't be used as a tool, weapon, or locus or cost for a spell.\n• Tidy Color, clean, or soil an object of light Bulk or less. You can affect an object of 1 Bulk with 10 rounds of concentration, and a larger object at 1 minute per Bulk.\nPrestidigitation can't deal damage or cause adverse conditions. Any actual change to an object (beyond what is noted above) persists only as long as you Sustain the spell.",
      "castingTime": "2 actions",
      "range": "10 feet",
      "target": "1 object (cook, lift, or tidy only)",
      "area": null,
      "duration": "sustained",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:divine-lance",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "qwZBXN6zBoB9BHXE",
      "slug": "divine-lance",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/divine-lance.webp"
    },
    "sourceHash": "sha256:4e1d95f42c2fb4d356ff2a0869f04980a4f653729e05489aa270973dc8e1abb2",
    "translatableHash": "sha256:4f84ead4f8ccdcdbff8bda8a5aad25030123fb5b872d9c5e3e04a5b1b54205f0",
    "data": {
      "schemaVersion": 1,
      "name": "Divine Lance",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "attack",
        "cantrip",
        "concentrate",
        "manipulate",
        "sanctified",
        "spirit"
      ],
      "traditions": [
        "divine"
      ],
      "description": "You unleash a beam of divine energy. Make a ranged spell attack against the target's AC. On a hit, the target takes 2d4 spirit damage (double damage on a critical hit).\nHeightened (+1) The damage increases by 1d4.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [
        {
          "formula": "2d4",
          "type": "spirit",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+1) The damage increases by 1d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:cleanse-cuisine",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "qXTB7Ec9yYh5JPPV",
      "slug": "cleanse-cuisine",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:bfaddf55e3fb1b00038940436dd0bc586e6504cb1b7cfc4465027cefa637eb25",
    "translatableHash": "sha256:d3580a40f83e1e4b79126f69ebea802dceddf565325ebfea56ee94a23e0cfb23",
    "data": {
      "schemaVersion": 1,
      "name": "Cleanse Cuisine",
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
      "description": "You transform all food and beverages in the area into delicious fare, changing water into wine or another fine beverage, or enhancing the food's taste and ingredients to make it a gourmet treat. You can also choose to remove all toxins and contaminations from the food. This spell doesn't prevent future contamination, natural decay, or spoilage, nor does it make the food any more nutritious.\nHeightened (+2) Add another cubic foot to the area, which must be contiguous with the rest.",
      "castingTime": "2 actions",
      "range": "10 feet",
      "target": "1 cubic foot",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (+2) Add another cubic foot to the area, which must be contiguous with the rest."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:phantom-pain",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "R8bqnYiThB6MYTxD",
      "slug": "phantom-pain",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:5b64e7bd34f0c1948edc6ee9efe767331509a431c9d3da46849ddf9cd096b91f",
    "translatableHash": "sha256:a97b566fd5576fdc4a3b2cf054aea1fd4dfceb887d9878cd49f75d45da805917",
    "data": {
      "schemaVersion": 1,
      "name": "Phantom Pain",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "illusion",
        "manipulate",
        "mental",
        "nonlethal"
      ],
      "traditions": [
        "occult"
      ],
      "description": "Illusory pain wracks the target, dealing 2d4 mental damage and (@item.level)d4[persistent,mental] damage. The target must attempt a Will save.\nCritical Success The target is unaffected.\nSuccess The target takes full initial damage but no persistent damage, and the spell ends immediately.\nFailure The target takes full initial and persistent damage, and the target is Sickened 1. If the target recovers from being Sickened, the persistent damage ends and the spell ends.\nCritical Failure As failure, but the target is Sickened 2.\nHeightened (+1) The damage increases by 2d4 and the persistent damage by 1d4.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": "will save",
      "damage": [
        {
          "formula": "2d4",
          "type": "mental",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+1) The damage increases by 2d4 and the persistent damage by 1d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:forbidding-ward",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "RA7VKcen3p56rVyZ",
      "slug": "forbidding-ward",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/forbidding-ward.webp"
    },
    "sourceHash": "sha256:276dc77628a9ab3dc2785a1753c5cac270ff2ef46678307c2e29e0d0289d961d",
    "translatableHash": "sha256:9632d973c94bdc80d471af01abbd1870034071a6853ba53e8147889d0085d4e4",
    "data": {
      "schemaVersion": 1,
      "name": "Forbidding Ward",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "cantrip",
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "You ward an ally against the attacks and hostile spells from the target enemy. The target ally gains a +1 status bonus to Armor Class and saving throws against the target enemy's attacks, spells, and other effects.\nSpell Effect: Forbidding Ward\nHeightened (6th) The status bonus increases to +2.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 ally and 1 enemy",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (6th) The status bonus increases to +2."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:pummeling-rubble",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Rn2LkoSq1XhLsODV",
      "slug": "pummeling-rubble",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:1e06bf52b2a690908cc4aa0e596c13e477c5ff6f151e2c0e5c75f2d9aec064cc",
    "translatableHash": "sha256:7ab2c3baf8907137210e9b2525e9893694c63484af7162776d953a8d4776de71",
    "data": {
      "schemaVersion": 1,
      "name": "Pummeling Rubble",
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
      "description": "A spray of heavy rocks flies through the air in front of you. The rubble deals 2d4 bludgeoning damage to each creature in the area. Each creature must attempt a Reflex save.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage.\nFailure The creature takes full damage and is pushed 5 feet away from you.\nCritical Failure The creature takes double damage and is pushed 10 feet away from you.\nHeightened (+1) Increase the damage by 2d4.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "15 cone",
      "duration": "",
      "defense": "reflex save",
      "damage": [
        {
          "formula": "2d4",
          "type": "bludgeoning",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+1) Increase the damage by 2d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:stabilize",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "SnjhtQYexDtNDdEg",
      "slug": "stabilize",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:f19c7b4abd0fb9640dead7db7489dcb21e8c020f4e41e727d0f6c234bbda9981",
    "translatableHash": "sha256:1f1d7bba1ab10fc587d27499456e9bf6b669b9acc477f3dbe16d222fe22eed87",
    "data": {
      "schemaVersion": 1,
      "name": "Stabilize",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "cantrip",
        "concentrate",
        "healing",
        "manipulate",
        "vitality"
      ],
      "traditions": [
        "divine",
        "primal"
      ],
      "description": "Life energy shuts death's door. The target loses the Dying condition, though it remains Unconscious at 0 Hit Points.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 dying creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:soothe",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "szIyEsvihc5e1w8n",
      "slug": "soothe",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:9781a1ced76ff412e322e66f98f8fbda94a018f276ec47e03ad46e0e9579cc2c",
    "translatableHash": "sha256:279fec2c267e08c01489fe69329ad0af0113847c615329549b736d6ff8ecaa00",
    "data": {
      "schemaVersion": 1,
      "name": "Soothe",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "concentrate",
        "emotion",
        "healing",
        "manipulate",
        "mental"
      ],
      "traditions": [
        "occult"
      ],
      "description": "You grace the target's mind, boosting its mental defenses and healing its wounds. The target regains 1d10+4 Hit Points when you Cast the Spell and gains a +2 status bonus to saves against mental effects for the duration.\nSpell Effect: Soothe\nHeightened (+1) The amount of healing increases by 1d10+4.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 willing creature",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [
        {
          "formula": "1d10+4",
          "type": "untyped",
          "kind": "healing"
        }
      ],
      "heightening": "Heightened (+1) The amount of healing increases by 1d10+4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:runic-weapon",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "TFitdEOpQC4SzKQQ",
      "slug": "runic-weapon",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/magic-weapon.webp"
    },
    "sourceHash": "sha256:5884ed410b3c9fec3027cd6e19dbf36a000189707782497ddeb24ca0674b7697",
    "translatableHash": "sha256:54d7a399cfc0933eaf97bfe62c856d2956d29c1692f0aa1f8342896640a958e4",
    "data": {
      "schemaVersion": 1,
      "name": "Runic Weapon",
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
      "description": "The weapon glimmers with magic as temporary runes carve down its length. The target becomes a +1 striking weapon, gaining a +1 item bonus to attack rolls and increasing the number of weapon damage dice to two.\nHeightened (6th) The weapon is +2 greater striking.\nHeightened (9th) The weapon is +3 major striking.\nSpell Effect: Runic Weapon",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 weapon that is unattended or wielded by a willing creature",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (6th) The weapon is +2 greater striking.\nHeightened (9th) The weapon is +3 major striking.\nSpell Effect: Runic Weapon"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:caustic-blast",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "thAHF1zxNplLCJPO",
      "slug": "caustic-blast",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:eebd1cfe76bfb0fe3697a0833c53f31daf5e1844a0a9a359a30636fee9323cdd",
    "translatableHash": "sha256:c9e68ffae3c6bd482e0c768504cd099b7ae4e11cd3cdb535439fe2b89dc08444",
    "data": {
      "schemaVersion": 1,
      "name": "Caustic Blast",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "acid",
        "cantrip",
        "concentrate",
        "manipulate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "You fling a large glob of acid that immediately detonates, spraying nearby creatures. Creatures in the area take 1d8 acid damage with a basic Reflex save; on a critical failure, the creature also takes (1+floor((@item.rank -1)/2))[persistent,acid] damage.\nHeightened (+2) The initial damage increases by 1d8, and the persistent damage on a critical failure increases by 1.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "",
      "area": "5 burst",
      "duration": "",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "1d8",
          "type": "acid",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (+2) The initial damage increases by 1d8, and the persistent damage on a critical failure increases by 1."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:gentle-landing",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "TTwOKGqmZeKSyNMH",
      "slug": "gentle-landing",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:2a61dff8bb9077842ce6b7e3add9d641e3680afc2a6b4d3d2c40f4f4c00e929d",
    "translatableHash": "sha256:c0c140d53aa1b80eaa566a4c7ca103869a0248a3d5932f83efd2870121058126",
    "data": {
      "schemaVersion": 1,
      "name": "Gentle Landing",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "air",
        "concentrate"
      ],
      "traditions": [
        "arcane",
        "primal"
      ],
      "description": "Trigger a creature within range is falling\nYou raise a magical updraft to arrest a fall. The target's fall slows to 60 feet per round, and the portion of the fall during the spell's duration doesn't count when calculating falling damage. If the target reaches the ground while the spell is in effect, it takes no damage from the fall. The spell ends as soon as the target lands.",
      "castingTime": "reaction",
      "range": "60 feet",
      "target": "1 falling creature",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:shield",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "TVKNbcgTee19PXZR",
      "slug": "shield",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/shield.webp"
    },
    "sourceHash": "sha256:eafa19a7e1e61038c45000d1a7864e470476333400b29e17f95594ba473b33fb",
    "translatableHash": "sha256:ca63030fe6b3c5fda75eca088cb9e9f83e5cad36562b4df77da306f436e7b19e",
    "data": {
      "schemaVersion": 1,
      "name": "Shield",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "cantrip",
        "concentrate",
        "force"
      ],
      "traditions": [
        "arcane",
        "divine",
        "occult"
      ],
      "description": "You raise a magical shield of force. This counts as using the Raise a Shield action, giving you a +1 circumstance bonus to AC until the start of your next turn, but it doesn't require a hand to use.\nWhile the spell is in effect, you can use the Shield Block reaction with your magic shield. The shield has Hardness 5. You can use the spell's reaction to reduce damage from any spell or magical effect, even if it doesn't deal physical damage. After you use Shield Block, the spell ends and you can't cast it again for 10 minutes.\nSpell Effect: Shield\nEffect: Shield Immunity\nHeightened (+2) The shield's Hardness increases by 5.",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": null,
      "duration": "until the start of your next turn",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (+2) The shield's Hardness increases by 5."
    }
  }
]
