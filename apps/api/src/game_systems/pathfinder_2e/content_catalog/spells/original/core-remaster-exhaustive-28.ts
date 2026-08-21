import type { Pathfinder2eOriginalContentRecord } from '../../records'
import type { Pathfinder2eSpellData } from '../types'

export const PATHFINDER_2E_EXHAUSTIVE_28_SPELL_ORIGINALS: readonly Pathfinder2eOriginalContentRecord<Pathfinder2eSpellData>[] = [
  {
    "contentId": "pf2e:spell:spells-srd:create-undead",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "c3b6LdLlQDPngNIb",
      "slug": "create-undead",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/create-undead.webp"
    },
    "sourceHash": "sha256:af2c2f539bd17dcb863de2f65d3c27b293c34db7e5307df192538c9dc1bcde5c",
    "translatableHash": "sha256:5ad61737254bb7987fd6fc9aafcd966d91097187aa7d812b07f9e808d9a50c6f",
    "data": {
      "schemaVersion": 1,
      "name": "Create Undead",
      "rank": 2,
      "rarity": "uncommon",
      "traits": [
        "unholy"
      ],
      "traditions": [],
      "description": "You transform the target into an undead creature with a level up to that allowed in the Creature Creation Rituals table. There are many versions of this ritual, each specific to a particular type of undead (one ritual for all zombies, one for skeletons, one for ghouls, and so on), and the rituals that create rare undead are also rare. Some forms of undead, such as liches, form using their own unique methods and can't be created with a version of create undead.\nCritical Success The target becomes an undead creature of the appropriate type. If it's at least 4 levels lower than you, you can make it a minion. This gives it the minion trait, meaning it can use 2 actions when you command it, and commanding it is a single action that has the auditory and concentrate traits. You can have a maximum of four minions under your control. If it's intelligent and doesn't become a minion, the undead is helpful to you for awakening it, though it's still a horrid and evil creature. If it's unintelligent and doesn't become a minion, you can give it one simple command. It pursues that goal single-mindedly, ignoring any of your subsequent commands.\nSuccess As critical success, except an intelligent undead that doesn't become your minion is only friendly to you, and an unintelligent undead that doesn't become your minion leaves you alone unless you attack it. It marauds the local area rather than following your command.\nFailure You fail to create the undead.\nCritical Failure You create the undead, but its soul, tortured by your foul necromancy, is full of nothing but hatred for you. It attempts to destroy you.\nCreatures Creation Rituals\nCreature Level | Spell Rank Required | Cost |\n-1 or 0 | 2 | 15 gp |\n1 | 2 | 60 gp |\n2 | 3 | 105 gp |\n3 | 3 | 180 gp |\n4 | 4 | 300 gp |\n5 | 4 | 480 gp |\n6 | 5 | 750 gp |\n7 | 5 | 1,080 gp |\n8 | 6 | 1,500 gp |\n9 | 6 | 2,100 gp |\n10 | 7 | 3,000 gp |\n11 | 7 | 4,200 gp |\n12 | 8 | 6,000 gp |\n13 | 8 | 9,000 gp |\n14 | 9 | 13,500 gp |\n15 | 9 | 19,500 gp |\n16 | 10 | 30,000 gp |\n17 | 10 | 45,000 gp |",
      "castingTime": "1 day",
      "range": "10 feet",
      "target": "1 dead creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:consecrate",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Dbd5W6G8U2vzWolN",
      "slug": "consecrate",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:f8cd76cb7f761ad43c6d884b0c4d6099370d3871cf77d02fe98f35b761b55519",
    "translatableHash": "sha256:d0e59ac1f04e94997e4c51b00ba51fcb022bf19cdc748cc551d7f7244a255ca2",
    "data": {
      "schemaVersion": 1,
      "name": "Consecrate",
      "rank": 2,
      "rarity": "uncommon",
      "traits": [
        "consecration"
      ],
      "traditions": [],
      "description": "Area 40-foot-radius burst around an immobile altar, shrine, or fixture of your deity\nSecondary Casters 2, must be worshippers of your religion\nYou consecrate a site to your deity, chanting praises and creating a sacred space. While within the area, worshippers of your deity gain a +1 status bonus to attack rolls, skill checks, saving throws, and Perception checks, and creatures anathema to your deity (such as undead for Pharasma or Sarenrae) take a -1 status penalty to those rolls. If your deity's divine sanctification allows you to choose holy or unholy, you can choose to make the consecrated site holy or unholy as well. If the deity's sanctification must be holy or unholy, you must make the site match that sanctification. Strikes made by worshippers of your deity within the area gain the site's sanctification trait, if any.\nCritical Success The consecration succeeds, and it either lasts for 10 years instead of 1 or covers an area with twice the radius. Occasionally, with your deity's favor, this might produce an even more amazing effect, such as a permanently consecrated area or the effect covering an entire cathedral.\nSuccess The consecration succeeds.\nFailure The consecration fails.\nCritical Failure The consecration fails spectacularly and angers your deity, who sends a sign of displeasure. For at least 1 year, further attempts to consecrate the site fail.\nHeightened (7th) The consecrated area also gains the effects of the planar seal spell, but the effect doesn't attempt to counteract teleportation by worshippers of your deity. The cost increases to 200 gp × the spell rank.",
      "castingTime": "3 days",
      "range": "40 feet",
      "target": "",
      "area": "40 burst",
      "duration": "1 year",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (7th) The consecrated area also gains the effects of the planar seal spell, but the effect doesn't attempt to counteract teleportation by worshippers of your deity. The cost increases to 200 gp × the spell rank."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:animate-object",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "sLzPzk7DJnfuORJ0",
      "slug": "animate-object",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:9824f4d3f581c3626b53e7bf6ec4adaa31dce133cf019a60885635c19e1ffdfd",
    "translatableHash": "sha256:b8d674b12130000247fb4f04ce913f40d9562edca1b0ca4f043c40295b2758be",
    "data": {
      "schemaVersion": 1,
      "name": "Animate Object",
      "rank": 2,
      "rarity": "uncommon",
      "traits": [],
      "traditions": [],
      "description": "You transform the target into an animated object with a level up to that allowed by the Creature Creation Rituals table and of a type corresponding to the object (so a broom would become an animated broom).\nCritical Success The target becomes an animated object of the appropriate type. If it's at least 4 levels lower than you, you can make it a minion. This gives it the minion trait, meaning it can use 2 actions when you command it, and commanding it is a single action that has the auditory and concentrate traits. You can have a maximum of four minions under your control. If it doesn't become a minion, you can give it one simple command. It pursues that goal single-mindedly, ignoring any of your subsequent commands.\nSuccess As critical success, except an animated object that doesn't become your minion stays in place and attacks anyone that attacks it or tries to steal or move it, rather than following your command.\nFailure You fail to create the animated object.\nCritical Failure You create the animated object, but it goes berserk and attempts to destroy you.\nCreatures Creation Rituals\nCreature Level | Spell Rank Required | Cost |\n-1 or 0 | 2 | 15 gp |\n1 | 2 | 60 gp |\n2 | 3 | 105 gp |\n3 | 3 | 180 gp |\n4 | 4 | 300 gp |\n5 | 4 | 480 gp |\n6 | 5 | 750 gp |\n7 | 5 | 1,080 gp |\n8 | 6 | 1,500 gp |\n9 | 6 | 2,100 gp |\n10 | 7 | 3,000 gp |\n11 | 7 | 4,200 gp |\n12 | 8 | 6,000 gp |\n13 | 8 | 9,000 gp |\n14 | 9 | 13,500 gp |\n15 | 9 | 19,500 gp |\n16 | 10 | 30,000 gp |\n17 | 10 | 45,000 gp |",
      "castingTime": "1 day",
      "range": "10 feet",
      "target": "1 object",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:rune-trap",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "o0l57UfBm9ScEUMW",
      "slug": "rune-trap",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/glyph-of-warding.webp"
    },
    "sourceHash": "sha256:598d21ab7f974e797541ad7ebca653918ead2c43c85b6dcfd511c1d50f7f48b3",
    "translatableHash": "sha256:c2b30864bfebd9e3a0c3ab09410efe182c6de68d0dd00ed7306459f5024cf248",
    "data": {
      "schemaVersion": 1,
      "name": "Rune Trap",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [],
      "traditions": [],
      "description": "You create a magical trap by binding a hostile spell into a rune. As part of performing this ritual, you also Cast a Spell to store in the rune. The stored spell must take 3 actions or fewer to cast, have a hostile effect, and target one creature or have an area. You can set a password, a trigger, or both for the rune. Any creature that moves, opens, or touches the target container or enters the target area that doesn't speak the password or that matches the trigger activates the rune, releasing the harmful spell within.\nOnce a spell is stored in the rune, the rune gains all the traits of that spell. If the stored spell targets one or more creatures, it targets the creature that set off the rune. If it has an area, that area is centered on the creature that set off the rune. The rune is a magical trap, using your spell DC for both the Perception check to notice it and the Thievery check to disable it; both checks require the creature attempting them to be trained in order to succeed. You can Dismiss the rune you create with this ritual so long as you can see it.\nCritical Success You create a particularly effective rune, granting a +2 circumstance bonus to the DC to notice and disable the rune.\nSuccess You create the rune successfully.\nFailure You fail to create the rune.\nCritical Failure The rune backfires, dealing 4d6 force damage per rank of the rune's spell to you, the secondary caster, and all creatures within 10 feet of the ritual's area",
      "castingTime": "10 minutes",
      "range": "touch",
      "target": "1 object or a 10-foot-by-10-foot area",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:geas",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Q690d3mw3TUrKX7E",
      "slug": "geas",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:29e50fe7f3fcddee6794e5684666f11528bb766bfdb46a52efe969bf772d790c",
    "translatableHash": "sha256:585edb6721c75c92a188421dd81656ecfb0bf7e08b82f03b3122fd0ab601b893",
    "data": {
      "schemaVersion": 1,
      "name": "Geas",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "curse",
        "mental"
      ],
      "traditions": [],
      "description": "You enforce a magic rule on a willing target, forcing it to either perform or refrain from carrying out a certain act. A geas to perform an act is usually conditional, such as, \"Always offer hospitality to strangers seeking a place to stay.\" An unconditional geas to perform a certain act doesn't require the target to perform that act exclusively, though it must prioritize the task above all leisurely pursuits. The most common geas to refrain from carrying out an act is a specification to avoid violating a contract. In those cases, the secondary caster usually takes charge of making sure the wording of the contract is attuned correctly with the ritual's magic. Because the target is willing, geas can have a duration that lasts for as long as the target agrees to. If the target is unable to fulfill the geas, it becomes Sickened 1, and the sickened condition increases by 1 for each consecutive day it is prevented from following the geas, to a maximum of sickened 4. The sickened condition ends immediately when it follows the geas again; it can't remove the sickened condition in any other way. Only powerful magic such as a Wish ritual can remove the effects of geas from a willing target.\nCritical Success The geas succeeds, and the target receives a +1 status bonus to skill checks that directly uphold the geas (at the GM's discretion).\nSuccess The geas succeeds.\nFailure The geas fails.\nCritical Failure The geas fails, and you are instead affected by the geas you were attempting to place on the target. You are considered an unwilling target, so the geas can be counteracted with a Cleanse Affliction spell.\nHeightened (5th) You can use geas on an unwilling creature; it can attempt a Will save to negate the effect. If the target fails this Will save, the geas lasts up to 1 week. A cleanse affliction spell can counteract a geas on an unwilling creature, in addition to powerful magic such as a wish ritual. A clever unwilling creature can subvert the geas by contriving situations that prevent it from complying, but in that case it becomes Sickened (as described above).\nHeightened (7th) As 5th rank, but the geas lasts for up to 1 year on an unwilling creature.\nHeightened (9th) As 5th rank, but the geas lasts for a duration you choose (even unlimited) on an unwilling creature.",
      "castingTime": "1 day",
      "range": "10 feet",
      "target": "1 creature of a level no greater than double the geas ritual's rank",
      "area": null,
      "duration": "see text",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (5th) You can use geas on an unwilling creature; it can attempt a Will save to negate the effect. If the target fails this Will save, the geas lasts up to 1 week. A cleanse affliction spell can counteract a geas on an unwilling creature, in addition to powerful magic such as a wish ritual. A clever unwilling creature can subvert the geas by contriving situations that prevent it from complying, but in that case it becomes Sickened (as described above).\nHeightened (7th) As 5th rank, but the geas lasts for up to 1 year on an unwilling creature.\nHeightened (9th) As 5th rank, but the geas lasts for a duration you choose (even unlimited) on an unwilling creature."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 876,
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
          "sourceId": "Q690d3mw3TUrKX7E",
          "name": "Geas",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1254,
        "uuid": "Compendium.pf2e.spells-srd.Item.Wish",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Wish",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Wish",
          "sourceId": "6dDtGIUerazSHIOu",
          "name": "Wish",
          "type": "spell"
        },
        "owner": {
          "sourceId": "Q690d3mw3TUrKX7E",
          "name": "Geas",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1932,
        "uuid": "Compendium.pf2e.spells-srd.Item.Cleanse Affliction",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Cleanse Affliction",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Cleanse Affliction",
          "sourceId": "SUKaxVZW2TlM8lu0",
          "name": "Cleanse Affliction",
          "type": "spell"
        },
        "owner": {
          "sourceId": "Q690d3mw3TUrKX7E",
          "name": "Geas",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 2518,
        "uuid": "Compendium.pf2e.conditionitems.Item.Sickened",
        "label": null,
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
          "sourceId": "Q690d3mw3TUrKX7E",
          "name": "Geas",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:atone",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "7Fd4lxozd11MQ55N",
      "slug": "atone",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:1402578792ea0409cc9cedf6374b00f858b1ce5748b4f916e0c43cfa54e3ea67",
    "translatableHash": "sha256:a7359f45a0b162707732831e4ceb62948d90d68fbe717ce773e3f845f10578ae",
    "data": {
      "schemaVersion": 1,
      "name": "Atone",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [],
      "traditions": [],
      "description": "You attempt to help a truly penitent creature atone for its misdeeds, typically actions anathema to your deity. If the creature isn't truly penitent, the outcome is always a critical failure. This ritual uses Nature if the target is a druid, and Religion in all other cases.\nCritical Success The creature receives absolution for its misdeeds, allowing it to regain standing with your deity. It regains any abilities it lost. Before the atonement is complete, the creature must perform a special quest or other task chosen by your deity, as befits its misdeeds. If completed during downtime, this task should take no less than 1 month. For 1 month, the target receives divine insight just before performing an act that would be anathema to your deity.\nSuccess As critical success, but the creature gains no special insight regarding its subsequent actions.\nFailure The creature does not receive absolution and must continue to meditate and redress its misdeeds. Any future atone rituals for the same misdeeds cost half as much and gain a +4 circumstance bonus to primary and secondary checks.\nCritical Failure The creature offends your deity and is permanently cast out from the faith. The creature can't rejoin your religion without a more direct intervention.\nHeightened 1 Increase the maximum target level by 2 and the base cost by 20 gp.",
      "castingTime": "1 day",
      "range": "10 feet",
      "target": "another creature of up to 8th level who is a worshipper of the same deity or philosophy as you",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 Increase the maximum target level by 2 and the base cost by 20 gp."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:blight",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "7yWXx3qC4eFNHhxD",
      "slug": "blight",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/blight.webp"
    },
    "sourceHash": "sha256:2cb33752e959f2e2c6ec60debe9538e02cba51c69d9683525020270e7997db7f",
    "translatableHash": "sha256:c195aec4c734f8d52e460808708a1739bd1108be4625ed760c8c7da9cca3580d",
    "data": {
      "schemaVersion": 1,
      "name": "Blight",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "plant",
        "void"
      ],
      "traditions": [],
      "description": "Area 1/2-mile-radius circle centered on you\nYou twist and stunt plants in the area, causing them to wither. In addition to other dangers from failing plant life, this decreases the crop yield for farms. If you cast this ritual in an area affected by plant growth, blight attempts to counteract plant growth instead of producing its usual effect.\nCritical Success Completely spoil the crop yield in the area, or decrease the yield by half in an area with up to a 1-mile radius.\nSuccess Decease the crop yield in the area by half.\nFailure The ritual has no effect.\nCritical Failure The flora in the area changes in an unexpected way, determined by the GM but generally as contradictory to your true desires as possible (for instance, enriching crops when you would prefer to blight them).",
      "castingTime": "1 day",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 year",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:plant-growth",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ZhJ8d9Uk4lwIx86b",
      "slug": "plant-growth",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:0e40b339220a07031d688894f92bd65d6a223af331e779efde4e1bd70b191103",
    "translatableHash": "sha256:c1e03eb39c40a7c6275d53f005e8ef21e7a39e56141c168571a6fe3743145624",
    "data": {
      "schemaVersion": 1,
      "name": "Plant Growth",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "plant",
        "vitality",
        "wood"
      ],
      "traditions": [],
      "description": "Area 1/2-mile-radius circle centered on you\nYou cause the plants within the area to be healthier and more fruitful. In addition to other benefits of healthy plants, this increases the crop yield for farms, depending on your success. If you cast it in the area of a Blight, plant growth attempts to counteract the blight instead of producing its usual effect.\nCritical Success Double the crop yield in the area, or increase the area to a 1-mile radius.\nSuccess Increase the crop yield in the area by one-third.\nFailure The ritual has no effect.\nCritical Failure The flora in the area changes in an unanticipated way, determined by the GM but generally as contradictory to your true desires as possible (for instance, blighting crops when you would prefer to enrich them).",
      "castingTime": "1 day",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 year",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 299,
        "uuid": "Compendium.pf2e.spells-srd.Item.Blight",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Blight",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Blight",
          "sourceId": "7yWXx3qC4eFNHhxD",
          "name": "Blight",
          "type": "spell"
        },
        "owner": {
          "sourceId": "ZhJ8d9Uk4lwIx86b",
          "name": "Plant Growth",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:call-spirit",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "gsYEuWv04XTDxe91",
      "slug": "call-spirit",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:ba07cb5d4c4a33e6c72e67553d9f748aece2f2e2b8845399197736fdb769b271",
    "translatableHash": "sha256:876060ac64a9c894b66424f8bf290d29b07421617ae4fd1f83df39adafdaf134",
    "data": {
      "schemaVersion": 1,
      "name": "Call Spirit",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [],
      "traditions": [],
      "description": "You tear the veil to the afterlife and call a spirit from its final resting place. You must call the spirit by name, and you must provide a connection to the spirit, such as a possession, a garment, or a piece of its corpse. A spirit unwilling to heed your call can attempt a Will save to avoid it; on a critical success, a trickster spirit Impersonates the spirit you meant to call. The DC of the Will save is 2 lower if you haven't met the spirit in life. Either way, the spirit appears as a wispy form of the creature you meant to call. Each minute of the duration, you can ask the spirit a question. It can answer how it pleases or even refuse to answer. If the spirit isn't in the afterlife (such as if it's an undead), all results other than critical failures use the failure effect.\nCritical Success The spirit is particularly cooperative, and even if it has strong reasons to deceive you, it takes a -2 circumstance penalty to its Deception checks.\nSuccess You call the spirit.\nFailure You fail to call a spirit.\nCritical Failure One or more evil spirits appear and attack.",
      "castingTime": "1 hour",
      "range": "",
      "target": "",
      "area": null,
      "duration": "up to 10 minutes",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:resurrect",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "kqhPt9344UkcGVYO",
      "slug": "resurrect",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/resurrect.webp"
    },
    "sourceHash": "sha256:53dca76d07fdd27e2e3ab52db34165be40b08420d1ed4d7fb3abe4ea2f1b3fb2",
    "translatableHash": "sha256:24f77e1950aa8ff7e529984764d55bb1f997ac6231d881e16f9293791b76ba79",
    "data": {
      "schemaVersion": 1,
      "name": "Resurrect",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "healing"
      ],
      "traditions": [],
      "description": "You attempt to call forth the target's soul and return it to its body. This requires the target's body to be present and relatively intact. The target must have died within the past year. If Pharasma has decided that the target's time has come or the target doesn't wish to return, this ritual automatically fails, but you discover this after the successful Religion check and can end the ritual without paying the cost.\nCritical Success You resurrect the target. They return to life with full Hit Points and the same spells prepared and points in their pools they had when they died, and still suffering from any long-term debilitations of the old body. The target meets an agent of their deity during the resurrection who inspires them, granting them a +1 status bonus to attack rolls, Perception, saving throws, and skill checks for 1 week. The target is also permanently changed in some way by their time in the afterlife, such as gaining a slight personality shift, a streak of white in the hair, or a strange new birthmark.\nSuccess As critical success, except the target returns to life with 1 Hit Point and no spells prepared or points in any pools, and still is affected by any long-term debilitations of the old body. Instead of inspiring them, the character's time in the Boneyard has left them temporarily debilitated. The target is Clumsy 1, Drained 1, and Enfeebled 1 for 1 week; these conditions can't be removed or reduced by any means until the week has passed.\nFailure Your attempt is unsuccessful.\nCritical Failure Something goes horribly wrong-an evil spirit possesses the body, the body transforms into a special kind of undead, or some worse fate befalls the target.\nHeightened (6th) You can resurrect a target of up to 12th level, and the base cost is 125 gp.\nHeightened (7th) You can use resurrect even with only a small portion of the body; the ritual creates a new body on a success or critical success. The target must have died within the past decade. The ritual requires four secondary casters, each of whom must be at least half the target's level. The target can be up to 14th level, and the base cost is 200 gp.\nHeightened (8th) As 7th rank, but the target can be up to 16th level and the base cost is 300 gp.\nHeightened (9th) You can use resurrect even without the body as long as you know the target's name and have touched a portion of its body at any time. The target must have died within the past century, and it doesn't gain the negative conditions on a success. The ritual requires eight secondary casters, each of whom must be at least half the target's level. The target can be up to 18th level, and the base cost is 600 gp.\nHeightened (10th) As 9th rank, except it doesn't matter how long ago the target died. The ritual requires 16 secondary casters, each of whom must be at least half the target's level. The target can be up to 20th level, and the ritual's base cost is 1,000 gp.",
      "castingTime": "1 day",
      "range": "10 feet",
      "target": "1 dead creature of up to 10th level",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (6th) You can resurrect a target of up to 12th level, and the base cost is 125 gp.\nHeightened (7th) You can use resurrect even with only a small portion of the body; the ritual creates a new body on a success or critical success. The target must have died within the past decade. The ritual requires four secondary casters, each of whom must be at least half the target's level. The target can be up to 14th level, and the base cost is 200 gp.\nHeightened (8th) As 7th rank, but the target can be up to 16th level and the base cost is 300 gp.\nHeightened (9th) You can use resurrect even without the body as long as you know the target's name and have touched a portion of its body at any time. The target must have died within the past century, and it doesn't gain the negative conditions on a success. The ritual requires eight secondary casters, each of whom must be at least half the target's level. The target can be up to 18th level, and the base cost is 600 gp.\nHeightened (10th) As 9th rank, except it doesn't matter how long ago the target died. The ritual requires 16 secondary casters, each of whom must be at least half the target's level. The target can be up to 20th level, and the ritual's base cost is 1,000 gp."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 194,
        "uuid": "Compendium.pf2e.deities.Item.Pharasma",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.deities.Item.Pharasma",
          "package": "pf2e",
          "sourcePack": "deities",
          "documentType": "Item",
          "compendiumKey": "Pharasma",
          "sourceId": "QZD0u1jxwz0kj8uI",
          "name": "Pharasma",
          "type": "deity"
        },
        "owner": {
          "sourceId": "kqhPt9344UkcGVYO",
          "name": "Resurrect",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1438,
        "uuid": "Compendium.pf2e.conditionitems.Item.Clumsy",
        "label": "Clumsy 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Clumsy",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Clumsy",
          "sourceId": "i3OJZU2nk64Df3xm",
          "name": "Clumsy",
          "type": "condition"
        },
        "owner": {
          "sourceId": "kqhPt9344UkcGVYO",
          "name": "Resurrect",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1499,
        "uuid": "Compendium.pf2e.conditionitems.Item.Drained",
        "label": "Drained 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Drained",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Drained",
          "sourceId": "4D2KBtexWXa6oUMR",
          "name": "Drained",
          "type": "condition"
        },
        "owner": {
          "sourceId": "kqhPt9344UkcGVYO",
          "name": "Resurrect",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1566,
        "uuid": "Compendium.pf2e.conditionitems.Item.Enfeebled",
        "label": "Enfeebled 1",
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
          "sourceId": "kqhPt9344UkcGVYO",
          "name": "Resurrect",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:planar-servitor",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "vgy00hnqxN9VoeoF",
      "slug": "planar-servitor",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/planar-ally.webp"
    },
    "sourceHash": "sha256:5831df9e39af1720968ac027bf56d6c724e11d2ee148296ade7085c699b4d76f",
    "translatableHash": "sha256:740317545c13b23d1c3f0bf442e3daab8ee9ffc7cb743c0d1306fe004d275dec",
    "data": {
      "schemaVersion": 1,
      "name": "Planar Servitor",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [],
      "traditions": [],
      "description": "You call upon a deity (or other divine power) to grant you aid in the form of a divine servitor of your deity's choice, with a level no greater than double the ritual's spell rank. The secondary casters explain what sort of assistance you need and why you need it; if the task is incredibly fitting to the deity, the GM can grant a circumstance bonus to the secondary Diplomacy check or rule that the check is automatically a critical success. If you use the ritual without good reason, the result is automatically a critical failure.\nIf the ritual succeeds, you must offer the servitor payment depending on factors such as the duration and danger of the task. Payment always costs at least as much as a consumable item of the creature's level, and often costs as much as a permanent magic item of the creature's level to persuade a creature to fight alongside you. Your offerings should align with the personal tastes of the deity.\nYou can alternatively name a being native to the deity's realm that you know personally, with the same level restriction. Such a creature might request something they personally want as payment.\nCritical Success The deity sends a servitor, and the servitor's payment costs only half as much as normal. If you ask for a particular servitor by name, the deity is likely to send that servitor unless the servitor is busy.\nSuccess Your deity sends a servitor.\nFailure Your deity does not send a servitor.\nCritical Failure The deity is offended and sends a sign of displeasure or possibly even a servitor to scold or attack you, depending on your deity's nature. A deity might also opt to strip divine powers from its followers who participated until they atone",
      "castingTime": "1 day",
      "range": "",
      "target": "",
      "area": null,
      "duration": "see text",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:binding-circle",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "2ykmAVKrsAWcazcC",
      "slug": "binding-circle",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:f27ad6e4f50d5e47f8590189681577565e944f3d9e65be66cd79a8ab362fe0cb",
    "translatableHash": "sha256:0154ae0dac85a75cfcd7874040e167224fbd5fc6f9dc831aa91c01914b75e236",
    "data": {
      "schemaVersion": 1,
      "name": "Binding Circle",
      "rank": 6,
      "rarity": "uncommon",
      "traits": [],
      "traditions": [],
      "description": "You call forth an extraplanar creature of a level no greater than double that of the binding circle ritual's rank and attempt to bargain with it, generally to perform a task for you in exchange for payment.\nYou conjure the extraplanar creature within your circle and negotiate a deal with it. A creature that doesn't wish to negotiate at all can attempt a Will save to stay on its home plane. Most extraplanar creatures feel that they have something better to do than cater to the whims of mortals and require a significant gift, especially if your task poses major risks. Fiends and similarly wicked extraplanar creatures are more likely to accept a bargain for a lower cost as long as it allows them to wreak havoc on the Universe or inflict evil upon the world along the way.\nMonetary prices usually range from the cost of a consumable item of the creature's level for a short and simple task to a permanent magic item of the creature's level or more to persuade the creature to fight alongside you. However, some extraplanar creatures may want payments other than money, such as permission to cast a Geas on you to fulfill an unspecified later favor or obtain ownership of your soul via an infernal contract.\nYou can add an additional secondary caster to create a warding circle that prevents the extraplanar creature from attacking or leaving the circle during the bargain. This uses the Crafting skill and has the same DC as a secondary check would. This protection ends if you use a hostile action against the extraplanar creature or the warding circle breaks.\nCritical Success You call the extraplanar creature and can prevent it from returning home for up to a full day, potentially allowing you to negotiate a better deal by threatening to leave it in the wards for the duration.\nSuccess You call the extraplanar creature and must make your case succinctly, after which the creature can return home at any time.\nFailure You fail to call the extraplanar creature.\nCritical Failure You call something vile and horrible, unbound by your wards, and it immediately attempts to destroy you.",
      "castingTime": "1 day",
      "range": "interplanar",
      "target": "1 extraplanar creature",
      "area": null,
      "duration": "varies",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1130,
        "uuid": "Compendium.pf2e.spells-srd.Item.Geas",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Geas",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Geas",
          "sourceId": "Q690d3mw3TUrKX7E",
          "name": "Geas",
          "type": "spell"
        },
        "owner": {
          "sourceId": "2ykmAVKrsAWcazcC",
          "name": "Binding Circle",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:commune",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "7DN13ILADW2N9Z1t",
      "slug": "commune",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/commune.webp"
    },
    "sourceHash": "sha256:05761b9548579581c1f748f6e604459d8e34f2f199219f6036dcf73693092bd6",
    "translatableHash": "sha256:115603605c1329b2c8feaca4cdb07ff7dd7acb41f25094cf7282efb1e056b39e",
    "data": {
      "schemaVersion": 1,
      "name": "Commune",
      "rank": 6,
      "rarity": "uncommon",
      "traits": [
        "prediction"
      ],
      "traditions": [],
      "description": "You call upon an unknown, powerful being to answer questions. The being varies depending on the skill used for the primary check.\n• Nature Primal spirits of nature, which know about animals, beasts, fey, fungi, plants, topography, and natural resources within a 3-mile radius.\n• Occultism Planar and other mysterious entities such as elementals, forgotten spirits, and monitors, which know about forgotten knowledge, the planes, obscure secrets, and other esoterica.\n• Religion Divine beings like celestials and fiends that know about the gods they serve and the god's respective purview; these are typically a servitor of your deity if you have one.\nYou can ask up to seven questions that could be answered with \"Yes\" or \"No.\" The entity answers with one-word answers such as \"Yes,\" \"No,\" \"Likely,\" and \"Unknown,\" though its answers always reflect its own agenda and could be deceptive.\nCritical Success You contact a more powerful entity aligned strongly with your interests, possibly even your deity. The entity won't attempt to deceive you, though it still might not know the answers. When it's important to provide clarity, the entity will answer your questions with up to five words, such as \"If you leave immediately\" or \"That was true once.\"\nSuccess You can ask your questions and receive answers.\nFailure You fail to contact an appropriate being.\nCritical Failure You are exposed to the enormity of the cosmos and are Stupefied 4 for 1 week (can't remove by any means).",
      "castingTime": "1 day",
      "range": "",
      "target": "",
      "area": null,
      "duration": "up to 10 minutes",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1615,
        "uuid": "Compendium.pf2e.conditionitems.Item.Stupefied",
        "label": "Stupefied 4",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Stupefied",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Stupefied",
          "sourceId": "e1XGnhKNSQIm5IXg",
          "name": "Stupefied",
          "type": "condition"
        },
        "owner": {
          "sourceId": "7DN13ILADW2N9Z1t",
          "name": "Commune",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:awaken-animal",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "B4dDkYsHFo1H0CIF",
      "slug": "awaken-animal",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/awaken-animal.webp"
    },
    "sourceHash": "sha256:d5c604da156f2bd231cc32d9b14ed0c52c43bba3e7c5a5cc7425aa340e9eecd7",
    "translatableHash": "sha256:eef5f88a6ac2a0df927346b88323230fc6c12af897c9942208c5b830c300d91e",
    "data": {
      "schemaVersion": 1,
      "name": "Awaken Animal",
      "rank": 6,
      "rarity": "uncommon",
      "traits": [
        "mental"
      ],
      "traditions": [],
      "description": "You grant intelligence to the target, transforming it into a beast. If it was previously an animal companion or minion, it can no longer serve as one.\nCritical Success The target's Intelligence, Wisdom, and Charisma modifiers each increase to +2 if they were lower, and it becomes helpful to you for awakening it.\nSuccess The target's Intelligence, Wisdom, and Charisma modifiers increase to +0 if they were lower and it becomes friendly to you for awakening it.\nFailure You fail to awaken the target.\nCritical Failure You accidentally awaken the target with a pure bestial hatred toward you. The target's Intelligence, Wisdom, and Charisma modifiers increase to -2 if they were lower. It becomes hostile to you, attempting to destroy you.\nCreatures Creation Rituals\nCreature Level | Spell Rank Required | Cost |\n-1 or 0 | 2 | 15 gp |\n1 | 2 | 60 gp |\n2 | 3 | 105 gp |\n3 | 3 | 180 gp |\n4 | 4 | 300 gp |\n5 | 4 | 480 gp |\n6 | 5 | 750 gp |\n7 | 5 | 1,080 gp |\n8 | 6 | 1,500 gp |\n9 | 6 | 2,100 gp |\n10 | 7 | 3,000 gp |\n11 | 7 | 4,200 gp |\n12 | 8 | 6,000 gp |\n13 | 8 | 9,000 gp |\n14 | 9 | 13,500 gp |\n15 | 9 | 19,500 gp |\n16 | 10 | 30,000 gp |\n17 | 10 | 45,000 gp |",
      "castingTime": "1 day",
      "range": "10 feet",
      "target": "1 animal up to the level on the table",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:primal-call",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "pZc8ZwtsyWnxUUW0",
      "slug": "primal-call",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/primal-call.webp"
    },
    "sourceHash": "sha256:f9b11879663db2621085168914dab4b45461f2c2280121757775564befe6aebb",
    "translatableHash": "sha256:bfc07761a6908580fe1cd3f0e1addd8cd0a712a1495cde1ba29464b006e79eef",
    "data": {
      "schemaVersion": 1,
      "name": "Primal Call",
      "rank": 6,
      "rarity": "uncommon",
      "traits": [],
      "traditions": [],
      "description": "This functions as Planar Servitor except you craft a faerie circle and call an animal, beast, fey, fungus, or plant from within 100 miles.",
      "castingTime": "1 day",
      "range": "100 miles",
      "target": "1 animal, beast, fey, fungus, or plant",
      "area": null,
      "duration": "see text",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 21,
        "uuid": "Compendium.pf2e.spells-srd.Item.Planar Servitor",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Planar Servitor",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Planar Servitor",
          "sourceId": "vgy00hnqxN9VoeoF",
          "name": "Planar Servitor",
          "type": "spell"
        },
        "owner": {
          "sourceId": "pZc8ZwtsyWnxUUW0",
          "name": "Primal Call",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:planar-displacement",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "HmKajQS0DP23bipp",
      "slug": "planar-displacement",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:ffa090a6145b4526f30c4c2c575954bec9ea68762fc5a6f9dfad4af2080d0edb",
    "translatableHash": "sha256:883350ac6173f04b9e5d1cda00e40e8156b9709f327e12c2bde28772e51b4ee9",
    "data": {
      "schemaVersion": 1,
      "name": "Planar Displacement",
      "rank": 7,
      "rarity": "uncommon",
      "traits": [
        "teleportation"
      ],
      "traditions": [],
      "description": "You draw a ritual circle, and when the ritual is complete, you shift all creatures in the area to a different plane of existence. The skill you use for the primary check must be one that can be used to make a Recall Knowledge check about the intended destination, such as Arcana or Nature for the Plane of Fire or Occultism for the Astral Plane.\nA secondary caster can be located at the exact site of the destination, instead of with you at the point of origin. If a secondary caster at the destination succeeds at its check and you roll a success, the ritual is a critical success instead.\nCritical Success You arrive on the intended plane at the last place one of the targets (of your choice) was located the last time the target traveled to that plane. If it's the first time traveling to a particular plane for all targets, you appear at a random location on the plane. The circle remains active for 1 minute, during which time any creature the ritual transported can return to the origin point with a single action, which has the concentrate trait.\nSuccess As critical success, but you arrive 1d10×25 miles from your destination.\nFailure Your attempt is unsuccessful.\nCritical Failure The ritual fails, and the GM determines whether you travel to the wrong plane or are barred from planar travel for 1 week.",
      "castingTime": "1 day",
      "range": "20 feet",
      "target": "",
      "area": "20 burst",
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:collective-memories",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "hp6Q64dl7xbdn4gQ",
      "slug": "collective-memories",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:d0c122cc85517a1540efd154a320e94222f2c638ae3a90f3c16c4f540924b6b8",
    "translatableHash": "sha256:dde36439f5269cf9a32e0a758a75b31f0313c2606b4b551008fff9b737d76095",
    "data": {
      "schemaVersion": 1,
      "name": "Collective Memories",
      "rank": 7,
      "rarity": "uncommon",
      "traits": [],
      "traditions": [],
      "description": "You tap into other mortals' memories, knowledge, legends, tales, and lore about a subject. The subject must be an important person, place, or thing. If the subject is present, increase the degree of success of your primary skill check by one step. If you have only vague information about the subject before attempting the ritual, decrease the degree of success of your primary skill check by one step. These modifiers cancel each other out if you have a subject present with little to no baseline information.\nCritical Success For 1 hour after the ritual ends, you sort through memories that are mostly coherent, emphasizing more accurate or useful information over misremembered knowledge or exaggerated tales.\nSuccess For 1 hour after the ritual ends, you learn useful information for further inquiry that remains generally incomplete or enigmatic. As is the nature of mortal memory and stories, you are likely to learn multiple contradictory versions.\nFailure You fail to learn any useful legends.\nCritical Failure Your mind becomes overwhelmed with the vast array of knowledge at your disposal. You can't sense or respond to anything in the present for 1 week except to perform necessities like breathing and sleeping. When you recover, however, you can retrain one of your skills into a Lore based on the knowledge of a subject you were accessing, as if you had spent 1 week retraining.",
      "castingTime": "1 day",
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
    "contentId": "pf2e:spell:spells-srd:control-weather",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "XkDCzMIyc0YOjw05",
      "slug": "control-weather",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:719467d2ec609578571278b2cfc5202edeea40f9707724290dbbc9d37c393ca0",
    "translatableHash": "sha256:a865d8a0984cbfd739cb3c8aab130cfd25816d805510d349d1b4bed7b7ee4341",
    "data": {
      "schemaVersion": 1,
      "name": "Control Weather",
      "rank": 8,
      "rarity": "uncommon",
      "traits": [],
      "traditions": [],
      "description": "Area 2-mile-radius circle centered on you\nYou alter the weather, making it calm and normal for the season or choosing up to two effects based on the season.\n• Spring drizzle, heat, hurricane, sleet, thunderstorm, tornado\n• Summer drizzle, downpour, extreme heat, hail, heat\n• Autumn cold weather, fog, mild heat, sleet\n• Winter blizzard, mild cold, extreme cold, thaw\nYou can't specifically control the manifestations, such as the exact path of a tornado or the targets of lightning strikes.\nCritical Success You change the weather as desired and can affect a larger area (up to a 5-mile-radius circle), or a longer duration (any number of additional d12 hours, up to 16d12).\nSuccess You change the weather as desired.\nFailure You fail to change the weather as desired.\nCritical Failure The weather changes in an unanticipated way, determined by the GM but generally as contradictory to your true desires as possible (for instance, a terrible storm emerges when you would prefer good weather).\nHeightened (9th) You can create unseasonable weather and contradictory weather effects, such as extreme cold and a hurricane. You can make the weather calm and normal weather for a different season or choose weather effects from any season's list.",
      "castingTime": "1 day",
      "range": "",
      "target": "",
      "area": null,
      "duration": "4d12 hours",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (9th) You can create unseasonable weather and contradictory weather effects, such as extreme cold and a hurricane. You can make the weather calm and normal weather for a different season or choose weather effects from any season's list."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:wish",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "6dDtGIUerazSHIOu",
      "slug": "wish",
      "publicationTitle": "Pathfinder Player Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:0a4844e1664524a48c9973e0ee08310469bdc2bfe7b8f53b65f8edf62a9febf5",
    "translatableHash": "sha256:4ee3a846a10a640612a4c9d492d6a7bb581f5a68c97ad1ad22dd072a0b70d5a4",
    "data": {
      "schemaVersion": 1,
      "name": "Wish",
      "rank": 10,
      "rarity": "rare",
      "traits": [],
      "traditions": [],
      "description": "You weave the fabric of reality itself to grant the target's greatest desire. The target declares their wish in a loud voice at the start of the ritual and again at the end. The target's wish can be anything, ranging from simpler wishes such as vast riches or the casting of a certain spell or ritual, to greater wishes like the destruction of an entire kingdom or ascension to divinity. The GM might decide a wish draws the attention of deities or other powerful creatures, leading to interference with the ritual or attempts to undo the wish. The power of the ritual alters reality to such a degree that even deities can't outright undo the wish, but they can react to the wish by sending servitors to take away the newly acquired riches, for example.\nCritical Success The wish is granted without complication or drawbacks.\nSuccess The wish is granted, but with unintended consequences or side effects, such as taking riches from a well-known criminal, stirring a damaged kingdom to war, or angering rival gods.\nFailure The wish fails and has no result. The GM can instead have the wish be partially granted, but to such a lesser degree that the target will be eternally unsatisfied.\nCritical Failure The wish is corrupted, resulting in a cruel fulfillment. The GM determines the full results, but the outcome is generally ironic in some nature, such as becoming trapped in an underground vault full of riches, being transported to the kingdom as it's destroyed, or achieving divinity within an inaccessible demiplane.",
      "castingTime": "1 day",
      "range": "10 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:inveigle",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "5pwK2FZX6QwgtfqX",
      "slug": "inveigle",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/inveigle.webp"
    },
    "sourceHash": "sha256:00986ff104fd1958f795203d7f806c5593f6476bced979804b8c09b4ad4bfd64",
    "translatableHash": "sha256:2d706e514cdadd35e212d6bdd1754b522d98468ef4af84cb61780c9aef9608fe",
    "data": {
      "schemaVersion": 1,
      "name": "Inveigle",
      "rank": 2,
      "rarity": "uncommon",
      "traits": [
        "mental"
      ],
      "traditions": [],
      "description": "You win over the target's mind, causing it to see you as a close and trusted friend and look upon your every suggestion as reasonable. The target is helpful toward you, so it will go out of its way to help you. As with any other helpful creature, there are limits to what you can ask of it. If you ever ask the target to do something completely against its nature or needlessly harmful to the target or its interests, not only does it refuse, but it also can attempt a Will save to end the effect early. Because of the casting time and range, it's generally difficult to cast this ritual unless the target is willing (perhaps convinced the ritual will have some other effect) or restrained. If the creature is unwilling to accept the ritual, it can attempt a Will save to negate the effect.\nCritical Success The ritual succeeds and the target takes a -4 status penalty to Will saves to end the effect.\nSuccess The ritual succeeds.\nFailure The ritual fails.\nCritical Failure The ritual fails and the target instead hates you, becoming hostile to you for the duration.\nHeightened (6th) You can use inveigle on a creature up to 1 mile away throughout the casting, as long as you have a piece of the creature's body, which you mix into the oils used in the cost. The base cost is 100 gp. The duration is shorter, and based on how large a piece of the creature's body you use: 1 week for blood, hair, scales, and the like, or 1 month for a hand or similarly substantial body part.",
      "castingTime": "1 day",
      "range": "10 feet",
      "target": "1 creature of a level no greater than double the inveigle ritual's rank",
      "area": null,
      "duration": "1 year or until dismissed",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (6th) You can use inveigle on a creature up to 1 mile away throughout the casting, as long as you have a piece of the creature's body, which you mix into the oils used in the cost. The base cost is 100 gp. The duration is shorter, and based on how large a piece of the creature's body you use: 1 week for blood, hair, scales, and the like, or 1 month for a hand or similarly substantial body part."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:heartbond",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "dZV8nZUKRhGIr6g9",
      "slug": "heartbond",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:8e1b7213a97065b7da459173abaa442bd594687aeb1f7396598c1b0f421ee7ce",
    "translatableHash": "sha256:0a750af5d4a39af2d09259b222cf5843bd74f72755f7fcea52867d0ef28b4d88",
    "data": {
      "schemaVersion": 1,
      "name": "Heartbond",
      "rank": 2,
      "rarity": "uncommon",
      "traits": [],
      "traditions": [],
      "description": "You officiate the creation of a magical bond between two or more willing creatures, who are secondary casters of the ritual and must share genuine affection for one another. As part of the ritual, all members of the bond receive a ring, amulet, or similar token to symbolize their shared connection. They lose the effects of the ritual when not wearing the token, and the bond is broken if either token is destroyed.\nCreatures benefiting from a successful heartbond ritual can later participate in a heightened version of the ritual without requiring new checks by spending the required time and paying the difference of the two costs. A creature can be under the effects of multiple heartbond rituals at once.\nCritical Success Once per day, each bonded creature can use a 2-action activity, which has the concentrate trait, to learn the present state of one other bonded creature. The creature knows the other creature's direction and distance and any conditions affecting them. Each participant can cast message as a divine innate spell at will, but can target only another participant.\nSuccess As a critical success, except the bonded creatures can't cast message as a divine innate spell.\nFailure The ritual has no effect.\nCritical Failure Magical backlash creates discordant energy among the participants. For 1 week, each secondary caster is Clumsy 2 and Stupefied 2 whenever they are within 30 feet of another secondary caster.\nHeightened (6th) The cost increases to 300 gp per secondary caster. On a success, secondary casters permanently gain the effects of a 6th-rank telepathy spell, but only with each other",
      "castingTime": "1 hour",
      "range": "20 feet",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "heightened version of the ritual without requiring new checks by spending the required time and paying the difference of the two costs. A creature can be under the effects of multiple heartbond rituals at once.\nCritical Success Once per day, each bonded creature can use a 2-action activity, which has the concentrate trait, to learn the present state of one other bonded creature. The creature knows the other creature's direction and distance and any conditions affecting them. Each participant can cast message as a divine innate spell at will, but can target only another participant.\nSuccess As a critical success, except the bonded creatures can't cast message as a divine innate spell.\nFailure The ritual has no effect.\nCritical Failure Magical backlash creates discordant energy among the participants. For 1 week, each secondary caster is Clumsy 2 and Stupefied 2 whenever they are within 30 feet of another secondary caster.\nHeightened (6th) The cost increases to 300 gp per secondary caster. On a success, secondary casters permanently gain the effects of a 6th-rank telepathy spell, but only with each other"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1459,
        "uuid": "Compendium.pf2e.conditionitems.Item.Clumsy",
        "label": "Clumsy 2",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Clumsy",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Clumsy",
          "sourceId": "i3OJZU2nk64Df3xm",
          "name": "Clumsy",
          "type": "condition"
        },
        "owner": {
          "sourceId": "dZV8nZUKRhGIr6g9",
          "name": "Heartbond",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1523,
        "uuid": "Compendium.pf2e.conditionitems.Item.Stupefied",
        "label": "Stupefied 2",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Stupefied",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Stupefied",
          "sourceId": "e1XGnhKNSQIm5IXg",
          "name": "Stupefied",
          "type": "condition"
        },
        "owner": {
          "sourceId": "dZV8nZUKRhGIr6g9",
          "name": "Heartbond",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:reincarnate",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "gIVaSCrLhhBzGHQY",
      "slug": "reincarnate",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/reincarnate.webp"
    },
    "sourceHash": "sha256:bd2f2fd2220c485e3869b4ad01c8124888c5c969a4a2ec2bfd9a43d6afa4f99c",
    "translatableHash": "sha256:616a60c02173136460154059c393a09c16b0c2abb5fb909777fb45b94517e4fa",
    "data": {
      "schemaVersion": 1,
      "name": "Reincarnate",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [],
      "traditions": [],
      "description": "You call forth the target's soul and attempt to incarnate it into a brand-new body. As the soul won't be returning to the original body, only a small portion of the creature's remains are required. These remains must have been part of the original body at the time of death, and the target must have died within the past week. If Pharasma has decided that the target's time has come or the target's soul is trapped or doesn't wish to return, this ritual automatically fails, but you discover this after you succeed at the Religion check and can end the ritual without paying the cost.\nIf the ritual is successful, the target's new body has a random ancestry. Roll 1d20. On a result of 1 through 14, the new body is one of a common ancestry, while on a 15 through 20 they become a member of an uncommon or rare ancestry. The GM chooses possible ancestries based on those found in the region and randomly determines the ancestry. For instance, the GM could roll 1d8 to choose a common ancestry from Player Core. The target replaces their ancestry Hit Points, size, Speeds, attribute boosts and flaws, traits, and special abilities with those of their new ancestry. The target loses their heritage and ancestry feats, selecting replacements from their new ancestry. The target's background, class features, and languages remain unaltered.\nCritical Success You reincarnate the target into a new adult body. This new body has full HP and has the same spells prepared as the original did when it died.\nSuccess As critical success, except the new body has 1 HP and no spells prepared. The soul takes some time to adjust to their new body, leaving them Clumsy 2, Drained 2, and Enfeebled 2 for 1 week; these conditions can't be removed or reduced by any means until the week has passed.\nFailure You fail to reincarnate the target.\nCritical Failure The target's soul becomes trapped in an unintelligent animal creature of the GM's choosing, with a level no greater than half the target's level. While trapped, the target has an Intelligence modifier of –5 and can't use any of their own abilities.\nHeightened (4th) The maximum level of the target increases to 10. The cost is the target's level (minimum 1) × 40 gp.\nHeightened (5th) The maximum level of the target increases to 12. The cost is the target's level (minimum 1) × 75 gp.\nHeightened (6th) The maximum level of the target increases to 14. The cost is the target's level (minimum 1) × 125 gp. The target must have died within the past month.\nHeightened (7th) The maximum level of the target increases to 16. The cost is the target's level (minimum 1) × 200 gp. The target must have died within the past month.\nHeightened (8th) The maximum level of the target increases to 18. The cost is the target's level (minimum 1) × 300 gp. The target must have died within the past year.\nHeightened (9th) The maximum level of the target increases to 20. The cost is the target's level (minimum 1) × 600 gp. The target must have died within the past decade.",
      "castingTime": "4 hours",
      "range": "10 feet",
      "target": "1 dead creature of up to 8th level",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) The maximum level of the target increases to 10. The cost is the target's level (minimum 1) × 40 gp.\nHeightened (5th) The maximum level of the target increases to 12. The cost is the target's level (minimum 1) × 75 gp.\nHeightened (6th) The maximum level of the target increases to 14. The cost is the target's level (minimum 1) × 125 gp. The target must have died within the past month.\nHeightened (7th) The maximum level of the target increases to 16. The cost is the target's level (minimum 1) × 200 gp. The target must have died within the past month.\nHeightened (8th) The maximum level of the target increases to 18. The cost is the target's level (minimum 1) × 300 gp. The target must have died within the past year.\nHeightened (9th) The maximum level of the target increases to 20. The cost is the target's level (minimum 1) × 600 gp. The target must have died within the past decade."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1715,
        "uuid": "Compendium.pf2e.conditionitems.Item.Clumsy",
        "label": "Clumsy 2",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Clumsy",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Clumsy",
          "sourceId": "i3OJZU2nk64Df3xm",
          "name": "Clumsy",
          "type": "condition"
        },
        "owner": {
          "sourceId": "gIVaSCrLhhBzGHQY",
          "name": "Reincarnate",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1776,
        "uuid": "Compendium.pf2e.conditionitems.Item.Drained",
        "label": "Drained 2",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Drained",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Drained",
          "sourceId": "4D2KBtexWXa6oUMR",
          "name": "Drained",
          "type": "condition"
        },
        "owner": {
          "sourceId": "gIVaSCrLhhBzGHQY",
          "name": "Reincarnate",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1843,
        "uuid": "Compendium.pf2e.conditionitems.Item.Enfeebled",
        "label": "Enfeebled 2",
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
          "sourceId": "gIVaSCrLhhBzGHQY",
          "name": "Reincarnate",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:phantasmal-custodians",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "uuoPmbjEtqzWZs0v",
      "slug": "phantasmal-custodians",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/unseen-custodians.webp"
    },
    "sourceHash": "sha256:28941be3aa651915ceb4f897d36b60f339d2de88072859e53f4c4dcbf6216fb2",
    "translatableHash": "sha256:465e2f0b3fbd4f6ea957564c01f7505503381be02be3a3a3d0c1877fa6e9b2e4",
    "data": {
      "schemaVersion": 1,
      "name": "Phantasmal Custodians",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [],
      "traditions": [],
      "description": "Area 100 feet × 100 feet, up to 20 feet high\nYou create a long-lasting adaptation of the Phantasmal Minion, forming entities to carry out basic tasks at a fixed location.\nCritical Success The ritual creates six phantasmal minions. You don't need to concentrate on them, and they aren't summoned minions. You can spend an action, which has the concentrate trait, to command one to perform a basic task; it continues to perform the task until commanded again.\nSuccess As critical success, but the ritual creates three minions.\nFailure The ritual fails to create any phantasmal minions.\nCritical Failure The ritual creates six phantasmal minions, but these creatures are hostile and capable of making fist Strikes with an attack bonus equal to your skill modifier for the primary skill check, dealing 1d6 force damage. They attack you and your allies and attempt to break objects belonging to you and your allies within the area.\nHeightened (6th) If destroyed, the phantasmal minions reform the next morning. The cost increases to 30 gp",
      "castingTime": "1 day",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 year",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (6th) If destroyed, the phantasmal minions reform the next morning. The cost increases to 30 gp"
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 121,
        "uuid": "Compendium.pf2e.spells-srd.Item.Phantasmal Minion",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Phantasmal Minion",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Phantasmal Minion",
          "sourceId": "xqmHD8JIjak15lRk",
          "name": "Phantasmal Minion",
          "type": "spell"
        },
        "owner": {
          "sourceId": "uuoPmbjEtqzWZs0v",
          "name": "Phantasmal Custodians",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:shadow-double",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "h5UqEdeqK8iTcU0J",
      "slug": "shadow-double",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:62ad20b18e15d2708d2098e1c970e8ec27c668ee2baaa4690df00a1a9714b88f",
    "translatableHash": "sha256:ef26d50ba3cb9bf1ad8ee19ece04e45042f2e9ea49c89753ec507f1ba250725a",
    "data": {
      "schemaVersion": 1,
      "name": "Shadow Double",
      "rank": 4,
      "rarity": "rare",
      "traits": [
        "illusion"
      ],
      "traditions": [],
      "description": "You create an illusory duplicate of the target creature by drawing shadowy material from the Netherworld and sculpting it into a semi-solid form. The shadow double is a 4th-level creature with no special abilities. If it needs to attempt a roll or use a DC, use the moderate number for a monster, except as noted below. It doesn't have any specific memories from the target, but it can use information about the creature gained from any of the casters to Impersonate the target. It looks exactly like the target and has a Deception modifier to Impersonate that creature equal to the modifier of the secondary spellcaster who rolled the Deception check, with a +4 status bonus. Though it doesn't have any of the original's special abilities, like a dragon's breath, illusions allow it to appear to use those abilities; they just never seem to have an effect. For instance, against a double's dragon's breath, all creatures in the area seem to critically succeed at their saving throws and take no damage. Creatures can attempt to disbelieve the illusion by attempting a Perception check against the Deception DC of the secondary spellcaster who rolled the Deception check.\nCritical Success You create the shadow double. It has the minion trait and is under your absolute control. You gain a direct mental link with the shadow double and can spend an action to command the shadow double via this link, even at a distance.\nSuccess As a critical success, but there is no special link between you and the shadow double. You must spend an action to command it verbally or by some other means.\nFailure The ritual fails and has no effect.\nCritical Failure The shadow double is created, but it isn't your minion and is hostile to all the casters. It does everything it can to destroy them, but if it can't immediately slay them, the shadow double tries to escape and plots their demise.",
      "castingTime": "1 day",
      "range": "",
      "target": "1 living creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:rest-eternal",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "MTNlvZ0A9xY5sOg1",
      "slug": "rest-eternal",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/rest-eternal.webp"
    },
    "sourceHash": "sha256:d22cc98ce76b4c47426833a16ea669011c9266d2ec9a03e45284cd085ed27cab",
    "translatableHash": "sha256:a93de64957117beb5c284edaba1e73ce2d84084706ecd17cfdb23544a40f15c8",
    "data": {
      "schemaVersion": 1,
      "name": "Rest Eternal",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [],
      "traditions": [],
      "description": "You call upon gods, spirits, and stranger beings to bar a creature's spirit from ever returning. A spirit that doesn't wish to be so constrained can attempt a Will save to resist this ritual; on a critical success, it fools you into believing the ritual succeeded. This ritual has no effect on a target who is undead or whose soul is otherwise not in the afterlife.\nCritical Success You sequester the subject's spirit to the afterlife. Attempts to communicate with the dead creature, return it to life, turn it into an undead, or otherwise disturb its afterlife fail unless the effect's counteract rank is at least 2 higher than that of rest eternal or originates from an artifact or a deity. Successfully returning the creature to life ends the restrictions placed by rest eternal.\nSuccess As critical success, but effects to interact with the spirit fail unless the effect's counteract rank is higher than that of rest eternal or originates from an artifact or a deity.\nFailure The ritual has no effect.\nCritical Failure The ritual fails, and the spirits you appealed to are angered. All casters become Doomed 1 for 1 week.",
      "castingTime": "1 day",
      "range": "20 feet",
      "target": "1 dead creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1209,
        "uuid": "Compendium.pf2e.conditionitems.Item.Doomed",
        "label": "Doomed 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Doomed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Doomed",
          "sourceId": "3uh1r86TzbQvosxv",
          "name": "Doomed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "MTNlvZ0A9xY5sOg1",
          "name": "Rest Eternal",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:astral-projection",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "4Cntq9odgW6xMpAs",
      "slug": "astral-projection",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:74f99990bf9570ff38d39620e038af2d6362be79ac9b0cc60f2696b8bb491bc6",
    "translatableHash": "sha256:8c727d174d145be129a71fa1cf118932652522d5a06149b58b0cf540c2876aeb",
    "data": {
      "schemaVersion": 1,
      "name": "Astral Projection",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [],
      "traditions": [],
      "description": "You project the targets' spiritual essences into the Astral Plane, leaving their inanimate physical forms behind. These astral forms can be used to explore the Astral Plane indefinitely, while the targets' bodies remain safely in stasis on the plane where the ritual was cast (where they remain Unconscious and can't be awoken normally). The casters must be in physical contact with one another in a circle for the duration of the casting, and all targets must be selected from these casters.\nA target's astral form is a duplicate of the target and everything they're carrying; anything that happens to a duplicate item happens to the original as well. For instance, if you use, spend, destroy, lose, or give away an item's duplicate, the original vanishes from your possession. For the duration of the ritual, any of the targets can spend a single action to Dismiss their astral form and immediately return to their physical body. As the primary caster, when you Dismiss your astral form, you can also Dismiss all the other targets' astral forms as part of the same action, returning all targets to their physical forms simultaneously. While in the Astral Plane, the other targets are unable to navigate without you, and if they become separated from you, they must wait for your return or Dismiss their own astral forms. When the ritual ends, the targets' astral forms vanish.\nA target's astral form and corresponding physical form are linked by an incorporeal silver cord, which is visible only in the Astral Plane. This nearly unbreakable cord serves as conduit and safety line; if severed, the target's astral and physical forms are both immediately slain. If the ritual is interrupted by an external force, such as dispel magic being cast on a target's physical or astral form, the target is immediately and harmlessly returned to their physical body. If a target's astral form is slain, the silver cord immediately rips them back to their physical body; the strain requires them to attempt a Fortitude save with the same DC as the ritual's primary check. On a failure, the creature dies; on a success, it becomes Clumsy 2, Drained 2, Doomed 2, and enfeebled 2 for 1 week; these conditions can't be removed or reduced by any means until the week has passed. A target's physical body remains in suspended animation for the duration of the ritual, but if it's destroyed, the creature dies and its astral form also vanishes. This ritual only projects a portion of the targets' consciousnesses onto the Astral Plane. To travel physically to the Astral Plane (to reach the Outer Planes, for example) requires spells such as interplanar teleport.\nCritical Success All targets are able to navigate independently in the Astral Plane. Each target's silver cord is stronger than usual, providing them a +4 circumstance bonus to its Fortitude save to avoid dying if its astral form dies.\nSuccess You successfully project the targets.\nFailure You fail to project the targets.\nCritical Failure The process of separating the targets' spirits from their bodies is complicated, and something goes catastrophically wrong. All casters become Doomed 1, are immediately reduced to 0 Hit Points, and begin dying",
      "castingTime": "1 hour",
      "range": "touch",
      "target": "yourself and up to 5 willing creatures",
      "area": null,
      "duration": "see text",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 298,
        "uuid": "Compendium.pf2e.conditionitems.Item.Unconscious",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Unconscious",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Unconscious",
          "sourceId": "fBnFDH2MTzgFijKf",
          "name": "Unconscious",
          "type": "condition"
        },
        "owner": {
          "sourceId": "4Cntq9odgW6xMpAs",
          "name": "Astral Projection",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 2180,
        "uuid": "Compendium.pf2e.conditionitems.Item.Clumsy",
        "label": "Clumsy 2",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Clumsy",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Clumsy",
          "sourceId": "i3OJZU2nk64Df3xm",
          "name": "Clumsy",
          "type": "condition"
        },
        "owner": {
          "sourceId": "4Cntq9odgW6xMpAs",
          "name": "Astral Projection",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 2241,
        "uuid": "Compendium.pf2e.conditionitems.Item.Drained",
        "label": "Drained 2",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Drained",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Drained",
          "sourceId": "4D2KBtexWXa6oUMR",
          "name": "Drained",
          "type": "condition"
        },
        "owner": {
          "sourceId": "4Cntq9odgW6xMpAs",
          "name": "Astral Projection",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 2304,
        "uuid": "Compendium.pf2e.conditionitems.Item.Doomed",
        "label": "Doomed 2",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Doomed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Doomed",
          "sourceId": "3uh1r86TzbQvosxv",
          "name": "Doomed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "4Cntq9odgW6xMpAs",
          "name": "Astral Projection",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 3445,
        "uuid": "Compendium.pf2e.conditionitems.Item.Doomed",
        "label": "Doomed 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Doomed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Doomed",
          "sourceId": "3uh1r86TzbQvosxv",
          "name": "Doomed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "4Cntq9odgW6xMpAs",
          "name": "Astral Projection",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:fortifying-brew",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "yRf59eFtZ50cGlem",
      "slug": "fortifying-brew",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/heroes-feast.webp"
    },
    "sourceHash": "sha256:357936aa2bc068613d24e922616781580e6b962298e9f5dcad53f7d204ad3b69",
    "translatableHash": "sha256:24d0ac24e56f9b59c3731c6f68160a4e1a58d71bc3f912c71f5d76eade22e554",
    "data": {
      "schemaVersion": 1,
      "name": "Fortifying Brew",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [],
      "traditions": [],
      "description": "You craft a large quantity of restorative drink, such as an invigorating tea, a refreshing ale, or a stimulative alchemical tonic. The ritual speeds along any natural processes to make the brew, such as fermenting fruit to make a wine. At the conclusion of the first 3 hours of the ritual, you produce enough brew for up to 10 people to drink, any of whom can be the secondary caster of the ritual. The brew must then be consumed over the next hour. There is no danger of the drinkers becoming drunk if the brew is alcoholic. Once that hour is completed, you and the secondary caster attempt your checks as normal.\nCritical Success The brew is delicious and revitalizing. It casts a 4th-rank Cleanse Affliction, a 4th-rank Clear Mind, and a 4th-rank Sound Body on each drinker for each relevant affliction or condition, using your modifier for the primary skill check as the counteract modifier. Each drinker also gains 20 temporary Hit Points that last 12 hours and a +2 status bonus to saves against diseases and poisons for the next 12 hours.\nSpell Effect: Fortifying Brew\nSuccess As critical success, except drinkers gain only 10 temporary Hit Points, and don't gain the status bonus to saves.\nFailure You and the other drinkers are left with a sour taste—something went wrong with the brewing process.\nCritical Failure Your attempt to craft the drink resulted in something more akin to a poison. You and the other drinkers become Sickened 4 and can't reduce the condition for 12 hours.\nHeightened 1 The temporary Hit Points increases by 2 (or 4 on a critical success).",
      "castingTime": "4 hours",
      "range": "20 feet",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 The temporary Hit Points increases by 2 (or 4 on a critical success)."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 724,
        "uuid": "Compendium.pf2e.spells-srd.Item.Cleanse Affliction",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Cleanse Affliction",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Cleanse Affliction",
          "sourceId": "SUKaxVZW2TlM8lu0",
          "name": "Cleanse Affliction",
          "type": "spell"
        },
        "owner": {
          "sourceId": "yRf59eFtZ50cGlem",
          "name": "Fortifying Brew",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 794,
        "uuid": "Compendium.pf2e.spells-srd.Item.Clear Mind",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Clear Mind",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Clear Mind",
          "sourceId": "EfFMLVbmkBWmzoLF",
          "name": "Clear Mind",
          "type": "spell"
        },
        "owner": {
          "sourceId": "yRf59eFtZ50cGlem",
          "name": "Fortifying Brew",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 860,
        "uuid": "Compendium.pf2e.spells-srd.Item.Sound Body",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Sound Body",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Sound Body",
          "sourceId": "Et8RSCLx8w7uOLvo",
          "name": "Sound Body",
          "type": "spell"
        },
        "owner": {
          "sourceId": "yRf59eFtZ50cGlem",
          "name": "Fortifying Brew",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1202,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Fortifying Brew",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Fortifying Brew",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Fortifying Brew",
          "sourceId": "IhorZCrhO4dCq6n3",
          "name": "Spell Effect: Fortifying Brew",
          "type": "effect"
        },
        "owner": {
          "sourceId": "yRf59eFtZ50cGlem",
          "name": "Fortifying Brew",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1705,
        "uuid": "Compendium.pf2e.conditionitems.Item.Sickened",
        "label": "Sickened 4",
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
          "sourceId": "yRf59eFtZ50cGlem",
          "name": "Fortifying Brew",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:ward-domain",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Er9XNUlL0wB0PM36",
      "slug": "ward-domain",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/ward-domain.webp"
    },
    "sourceHash": "sha256:8a9c386334cc62f88e51e8ea9c739a991aa489b7d7890c67b06c7a2add48477c",
    "translatableHash": "sha256:8cdb570c64cab29272915e927dac7d1f45a12a52adf4fa2d2e626bfd384710e1",
    "data": {
      "schemaVersion": 1,
      "name": "Ward Domain",
      "rank": 6,
      "rarity": "uncommon",
      "traits": [],
      "traditions": [],
      "description": "Area 100 feet × 100 feet, up to 50 feet high.\nThis ritual has long been used to guard the private sanctums of powerful rulers, spellcasters, and other figures of import. You and the other casters spend the casting time burning incense, anointing doorframes, and drawing lines of powered silver across entryways. The ritual creates the following magical effects within the area; these effects are heightened to the rank of ward domain and remain throughout the duration.\nAll gates, doors, windows, and similar apertures in the area (if any) are locked, with the effects of lock. In addition, you can obscure up to six doors, doorways, or similar entrances within the area with the effects of illusory object to appear as plain walls. Scrying spells can't perceive any stimuli from the area, and ward domain attempts to counteract teleportation effects into or out of the area, including attempts to summon creatures into the area, using a modifier equal to the ritual's save DC – 10.\nA successful dispel magic used on a specific effect removes only that effect (such as the lock effect on one window). A successful detonate magic ends the entire ritual.\nCritical Success You create the effects described above, and you protect an area twice as large.\nSuccess You create the effects described above.\nFailure The ritual has no effect.\nCritical Failure The area becomes trapped and hostile to you and your allies in a way you didn't anticipate.\nHeightened 1 The ward covers an additional area 100 feet × 100 feet, up to 50 feet high, contiguous with the original area.",
      "castingTime": "1 day",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 week",
      "defense": null,
      "damage": [],
      "heightening": "heightened to the rank of ward domain and remain throughout the duration.\nAll gates, doors, windows, and similar apertures in the area (if any) are locked, with the effects of lock. In addition, you can obscure up to six doors, doorways, or similar entrances within the area with the effects of illusory object to appear as plain walls. Scrying spells can't perceive any stimuli from the area, and ward domain attempts to counteract teleportation effects into or out of the area, including attempts to summon creatures into the area, using a modifier equal to the ritual's save DC – 10.\nA successful dispel magic used on a specific effect removes only that effect (such as the lock effect on one window). A successful detonate magic ends the entire ritual.\nCritical Success You create the effects described above, and you protect an area twice as large.\nSuccess You create the effects described above.\nFailure The ritual has no effect.\nCritical Failure The area becomes trapped and hostile to you and your allies in a way you didn't anticipate.\nHeightened 1 The ward covers an additional area 100 feet × 100 feet, up to 50 feet high, contiguous with the original area."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:teleportation-circle",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "5ZW1w9f4gWlSIuWA",
      "slug": "teleportation-circle",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:bd9eb308087a91496a532af122496aba20d4beb180c90cc3b2dc15800a7bcc9b",
    "translatableHash": "sha256:dd4c708025aeac515eaa19632338eb3c619b286567b2833c5356c291960457e6",
    "data": {
      "schemaVersion": 1,
      "name": "Teleportation Circle",
      "rank": 7,
      "rarity": "uncommon",
      "traits": [
        "teleportation"
      ],
      "traditions": [],
      "description": "You create a 10-foot-diameter circle on the ground, which acts as a portal to a destination determined at the time of the ritual. You designate the destination of the teleportation as part of the ritual. This destination can't be changed. The destination must be a location within 1,000 miles and be on the same plane as the teleportation circle. You must be able to identify the location precisely both by its position relative to the location where you create the teleportation circle and by the destination's appearance (or other identifying features). The destination must also be a 10-foot-diameter circle that doesn't overlap with any solid structures, but it can be a place that is harmful or dangerous.\nA secondary caster attempting a Survival check for this ritual can be located at the destination, instead of at the point of origin. If the secondary caster succeeds at their check at the destination and you roll a success, the ritual is a critical success instead.\nWhile the circle is active, any creature that moves to be fully within the circle is instantly teleported to the destination. A creature that is unwilling to be teleported can attempt a Will save to resist the effect. If it remains in the circle, the creature must attempt this save again at the end of each of its turns.\nThe circle normally works only in one direction, though you can double the cost to make it work in both directions.\nCritical Success You create the teleportation circle, and it's extremely precise, regardless of the distance traveled. Travelers arrive exactly at the designated point.\nSuccess As a critical success, but the destination is off target by roughly 1 percent of the distance traveled, to a maximum of 10 miles off target.\nFailure The teleportation circle doesn't function.\nCritical Failure The teleportation circle is wildly inaccurate. It leads to a random destination roughly the same distance from the origin point, and the chances of some other unusual mishap are much greater.\nHeightened (9th) The cost is 2,000 gp, the duration is 1 month, and the destination can be anywhere on the same planet.\nHeightened (10th) The cost is 10,000 gp, the duration is unlimited, and the destination can be anywhere on the same planet",
      "castingTime": "1 day",
      "range": "20 feet",
      "target": "",
      "area": null,
      "duration": "1 day",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (9th) The cost is 2,000 gp, the duration is 1 month, and the destination can be anywhere on the same planet.\nHeightened (10th) The cost is 10,000 gp, the duration is unlimited, and the destination can be anywhere on the same planet"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:gathering-call",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "nzbnTqHgNKiGZkrZ",
      "slug": "gathering-call",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:da6ebd19f3fff8ccdebf5e1f078dcc61912943c993ab2c67ab356a5c573f6d81",
    "translatableHash": "sha256:d5184237d7a399bdcc93145c924e8dd5d76a890a154853fa85a9f79d921b7c6f",
    "data": {
      "schemaVersion": 1,
      "name": "Gathering Call",
      "rank": 7,
      "rarity": "rare",
      "traits": [
        "teleportation"
      ],
      "traditions": [],
      "description": "You bind yourself and your allies to the specific safe location, referred to as a sanctuary, where you perform the ritual. This allows the participants to return later by simply speaking a word.\nSuccess You form the connection with the sanctuary. Any participant in the ritual can Dismiss the ritual. When they do, all the participants can immediately return to the sanctuary from any distance, as long as they are on the same plane as the sanctuary. Each participant arrives in the position in which they were standing during the casting of the ritual. When the word is spoken, all other participants know it, and each can choose whether or not to return to the sanctuary at that time. The ritual then immediately ends.\nFailure You fail to form the connection between the participants and the sanctuary and are aware that the ritual has failed.\nCritical Failure The ritual inadvertently forms a connection with a location on another plane. The casters are unaware of this misalignment. When the word is invoked, all ritual participants are shifted to this extraplanar location.\nHeightened 1 The cost increases by 5,000 gp, the ritual can target one more creature, and the maximum level of creature it can target increases by 2.",
      "castingTime": "7 days",
      "range": "20 feet",
      "target": "up to seven willing creatures of 14th level or lower",
      "area": null,
      "duration": "1 year",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 The cost increases by 5,000 gp, the ritual can target one more creature, and the maximum level of creature it can target increases by 2."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:fantastic-facade",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "nA0XlPsnMNrQMpio",
      "slug": "fantastic-facade",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:8cabaaae268d8aabf81285c27affa396b9429eee9ecced1b2b20d9fe1a539609",
    "translatableHash": "sha256:f32f59fe657c77610babd1cdcc0fab60f13b0cea565c996f5639b23c04897274",
    "data": {
      "schemaVersion": 1,
      "name": "Fantastic Facade",
      "rank": 9,
      "rarity": "rare",
      "traits": [
        "illusion"
      ],
      "traditions": [],
      "description": "Area up to 1 mile radius circle centered on you.\nYou draw a permanent series of complex illusions over the target settlement, choosing the look, sound, feel, and smell of the structures, terrain, and creatures within at the time the ritual is cast. You can alter the appearance of existing structures and creatures, and you can add illusory structures or creatures. For example, you could cause everything and everyone in the target area to appear green, create an illusory forest with a thick canopy that obscures the settlement from outside view, or make empty ruins seem inhabited and pristine. When you create the facade, you determine which illusory elements remain static (limited to basic natural movement, such as flags blowing in the breeze) and which follow a basic program (for example, a daily parade in the town square, complete with marching band). You're unable to alter the programs after you create the facade.\nYou can disguise creatures as you please, with the same effects as a 3rd-rank illusory disguise. If a creature affected by the facade leaves the area, any illusions affecting it fade after 1 day. You decide when casting the ritual whether newcomers are disguised by the illusions, and whether the disguise appears immediately or after a set period, up to 1 week.\nA creature that interacts with the target settlement in a way that would suggest or reveal the illusory nature of the facade, such as by trying to paint a building affected by the facade or climbing an illusory structure, can attempt to disbelieve the illusion. The illusions created by the spell are harmless, so an illusory river of lava wouldn't cause damage, nor could thorns on an illusory rose bush prick someone.\nCritical Success You create the facade as described, and you can alter the programs within your facade by spending 1 day to reprogram them.\nSuccess You create the facade as described.\nFailure Your illusions fail and the ritual has no effect.\nCritical Failure Your ritual produces unexpected and uncontrolled illusions different from what you had planned, such as unexpected and slowly shifting colors across the buildings, unpleasant smells, and creatures appearing as skeletons. These effects fade after 1 month.\nHeightened (10th) The cost increases to 100,000 gp and the radius can be up to 5 miles",
      "castingTime": "1 week",
      "range": "",
      "target": "1 settlement and its residents",
      "area": null,
      "duration": "unlimited",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (10th) The cost increases to 100,000 gp and the radius can be up to 5 miles"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:clone",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "pZr1xrCpaSu6qrXU",
      "slug": "clone",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:2f6522eae4147d8e3c97f14a0dab61c151f23fe876dd4a04372718ebaf935c7c",
    "translatableHash": "sha256:9a5f86781753dd8e749a92b473085999e19099e0613bd6a1183f41ac7af8eb33",
    "data": {
      "schemaVersion": 1,
      "name": "Clone",
      "rank": 9,
      "rarity": "rare",
      "traits": [],
      "traditions": [],
      "description": "You collect hair, nail clippings, and samples of skin and blood from the target, who must be present throughout the ritual and can be one of the casters. You then use those samples to grow a duplicate of the target's physical form that will house the target's soul upon death. This duplicate is physically identical to the original creature.\nIn order to perform the ritual, you need an expanded alchemist's lab or a superior set of equipment. Once the ritual is successfully completed, the duplicate grows within the laboratory equipment for 2d4 months. Though direct involvement isn't required during this period of growth, you must prevent any interference or interruption, or the ritual fails. When the duplicate is complete, the original creature's soul enters it as soon as their original body dies, or immediately if the creature died during the intervening months, as long as the soul is free and willing. If Pharasma has decided that the target's time has come or the target's soul is trapped or doesn't wish to return, the duplicate remains empty until the impediment is removed. While unoccupied, the inert duplicate must be preserved in suitable alchemical equipment to prevent it from rotting.\nCritical Success The cloning process is successful. When the soul occupies the completed clone, it is Clumsy 1, Drained 1, Doomed 1, and Enfeebled 1 for 1 week; these conditions can't be removed or reduced by any means until the week has passed.\nSuccess As critical success, but each condition value is 2.\nFailure You fail to form the clone.\nCritical Failure The clone appears to be successful, but something went horribly wrong. Once it grows to its full size, it can't hold the target's soul and instead houses a malevolent intelligence or an invasive creature (such as a powerful demon).",
      "castingTime": "7 days",
      "range": "touch",
      "target": "1 living creature up to 20th level",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1354,
        "uuid": "Compendium.pf2e.conditionitems.Item.Clumsy",
        "label": "Clumsy 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Clumsy",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Clumsy",
          "sourceId": "i3OJZU2nk64Df3xm",
          "name": "Clumsy",
          "type": "condition"
        },
        "owner": {
          "sourceId": "pZr1xrCpaSu6qrXU",
          "name": "Clone",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1415,
        "uuid": "Compendium.pf2e.conditionitems.Item.Drained",
        "label": "Drained 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Drained",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Drained",
          "sourceId": "4D2KBtexWXa6oUMR",
          "name": "Drained",
          "type": "condition"
        },
        "owner": {
          "sourceId": "pZr1xrCpaSu6qrXU",
          "name": "Clone",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1478,
        "uuid": "Compendium.pf2e.conditionitems.Item.Doomed",
        "label": "Doomed 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Doomed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Doomed",
          "sourceId": "3uh1r86TzbQvosxv",
          "name": "Doomed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "pZr1xrCpaSu6qrXU",
          "name": "Clone",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1543,
        "uuid": "Compendium.pf2e.conditionitems.Item.Enfeebled",
        "label": "Enfeebled 1",
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
          "sourceId": "pZr1xrCpaSu6qrXU",
          "name": "Clone",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:diabolic-pact",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "30BBep9U4BDV0EgQ",
      "slug": "diabolic-pact",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/infernal-pact.webp"
    },
    "sourceHash": "sha256:836a7279daacf712ec609a619ac9027149eb929831d4309783ae90a542696bb2",
    "translatableHash": "sha256:56283a996e7d1c9e59d5551fd5f5aeb2096ef5d8dd193af7a76c99c3c26be3c9",
    "data": {
      "schemaVersion": 1,
      "name": "Diabolic Pact",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "unholy"
      ],
      "traditions": [],
      "description": "You make an appeal to a powerful devil, asking them to bind some of their subordinates to your service. If you succeed, the devil sends you their choice of one devil of level 2 or lower, two devils of level 0 or lower, or three devils of level –1 or lower.\nCritical Success The devils are sent to you and serve you for 1d4.\nSuccess The devils are sent to you and serve you for 1d4.\nFailure Your request is denied.\nCritical Failure Not only is your request denied, but the powerful devil sends word of its displeasure to your master.\nHeightened 1 Increase the level of devil sent to you by 2 for each option.",
      "castingTime": "1 day",
      "range": "",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 Increase the level of devil sent to you by 2 for each option."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:angelic-messenger",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "joEruBVz31Uxczzq",
      "slug": "angelic-messenger",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/angelic-messenger.webp"
    },
    "sourceHash": "sha256:d617a0ff1d6844c1599c070c2d4d4ebcd86a2d8ecbdf9f5d97846d8a0756d82b",
    "translatableHash": "sha256:46a9bc3282890cdccd5f6c13bcea07cc8c901640822e87f91473d76f0dea8269",
    "data": {
      "schemaVersion": 1,
      "name": "Angelic Messenger",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [],
      "traditions": [],
      "description": "You transport yourself to either a celestial plane or a world in the Universe where worshippers of your patron can be found. You must be of no higher level than double angelic messenger's spell rank.\nCritical Success As success, but if you've never visited that plane or world before, you appear right in front of the message's intended recipient.\nSuccess You arrive on the target plane or world at the last location you visited on that plane or world, or to a random location within 10d10 miles of your message's intended recipient if you've never visited that plane or world before.\nFailure You don't travel.\nCritical Failure You accidentally travel to the wrong plane, possibly a dangerous plane.",
      "castingTime": "1 day",
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
    "contentId": "pf2e:spell:spells-srd:demonic-pact",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "tsKnoBuBbKMXkiz5",
      "slug": "demonic-pact",
      "publicationTitle": "Pathfinder Monster Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:cde267bfa9d4561242c9eb05d7998e293eb81aed2a15709a64f30058e1ccb1ef",
    "translatableHash": "sha256:21045593e9a24daff522b35c79bffc2f80dd8ef97bdb3f2ba792a542f1408c48",
    "data": {
      "schemaVersion": 1,
      "name": "Demonic Pact",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "unholy"
      ],
      "traditions": [],
      "description": "You call in a favor from one demon of level 2 or lower, two demons of level 0 or lower, or three demons of level –1 or lower.\nCritical Success You conjure the demon or demons. They are eager to pursue the task, so they don't ask for a favor.\nSuccess You conjure the demon or demons. They are not eager to pursue the task, so they require a favor in return.\nFailure You don't conjure any demons.\nCritical Failure The demon or demons are angry that you disturbed them. They appear before you, but they immediately attack you.\nHeightened 1 Increase the level of demon you call by 2 for each option.",
      "castingTime": "1 day",
      "range": "",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 Increase the level of demon you call by 2 for each option."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:div-pact",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "D8cWhrzcsd43OlIX",
      "slug": "div-pact",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:0a64a0b4db8b42aed28fa6747af2152b52ad54b4bda6017b8dca917d0428399b",
    "translatableHash": "sha256:5a396f426a5fea95eaf51f032e247a92d91c1fb957c43df7e5622a7542ddd12c",
    "data": {
      "schemaVersion": 1,
      "name": "Div Pact",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [],
      "traditions": [],
      "description": "You call upon the powers of Abaddon to grant you the assistance of a div. You call upon a div whose level can be no more than double div pact's spell rank, two divs whose levels are each at least 2 less than double the spell rank, or three divs whose levels are each at least 3 less than double the spell rank.\nCritical Success You conjure the div or divs, and they require nothing in return for their service.\nSuccess You conjure the div or divs. They are not eager to pursue the task, so they require a favor in return.\nFailure you don't conjure any divs.\nCritical Failure You don't conjure any divs, and they send a spiritual backlash that denies your use of any of your innate divine spells for 24 hours. If you are under the effect of any of your innate divine spells, the durations end.",
      "castingTime": "1 day",
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
    "contentId": "pf2e:spell:spells-srd:owb-pact",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "u3G7KX1qpFJlSeWm",
      "slug": "owb-pact",
      "publicationTitle": "Pathfinder Monster Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:2a0b11c76317be20796d09d8d972dd4b9a3688fe1d26468153586083d9d97b56",
    "translatableHash": "sha256:14b7b19166ca35b9e5082e1c68627c4c6ab15aaae39c9c11b97e81c982a84182",
    "data": {
      "schemaVersion": 1,
      "name": "Owb Pact",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [],
      "traditions": [],
      "description": "You call upon an owb to assist you in a goal. Only caligni callers can use this ritual with relative safety. If a different type of caligni attempts this ritual, they use an outcome one degree of success worse than the result of their check. If a non-caligni attempts this ritual, the result is an automatic critical failure.\nCritical Success You conjure the owb. It decides your goals closely match its own and doesn't request a favor in return.\nSuccess You conjure the owb. It isn't eager to pursue the task, so it requires a favor in return.\nFailure You don't conjure an owb.\nCritical Failure You conjure an owb, but it deems you unworthy and siphons away some of your soul energy. All casters become Doomed 2.",
      "castingTime": "1 day",
      "range": "",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 810,
        "uuid": "Compendium.pf2e.conditionitems.Item.Doomed",
        "label": "Doomed 2",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Doomed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Doomed",
          "sourceId": "3uh1r86TzbQvosxv",
          "name": "Doomed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "u3G7KX1qpFJlSeWm",
          "name": "Owb Pact",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:elemental-servitor",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "5NReCnDFFuThEAHB",
      "slug": "elemental-servitor",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/elemental-servitor.webp"
    },
    "sourceHash": "sha256:9523b2c0affcf31d756a5b4696ef9c70daff317b1e6cf3067bf6c2aa5907e117",
    "translatableHash": "sha256:6403c8382681af2a780feef14b5b1fd74f2b8ece912bf0a9bfcf487286ea99ba",
    "data": {
      "schemaVersion": 1,
      "name": "Elemental Servitor",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [],
      "traditions": [],
      "description": "You implore an elemental lord to send an elemental servitor of the lord's choice, with a level no greater than double the ritual's spell rank. The secondary casters explain what sort of assistance you need and why you need it; if the task is incredibly fitting to the elemental lord, the GM can grant a circumstance bonus to the secondary Diplomacy check or rule that the check is automatically a critical success. If you use the ritual without good reason, the result is automatically a critical failure.\nIf the ritual succeeds, you must offer the servitor payment depending on factors such as the duration and danger of the task. Payment always costs at least as much as a consumable item of the creature's level, and often costs as much as a permanent magic item of the creature's level to persuade a creature to fight alongside you. Your offerings should either align with the personal tastes of the elemental lord, or with the element—such as fresh flowers and bonsai plants for wood, or gemstones for earth.\nYou can alternatively name a being native to an elemental plane that you know personally, with the same level restriction. Such a creature might request something they personally want as payment, such as a favor or a game of chance.\nCritical Success Your elemental lord sends a servitor, and the servitor's payment costs only half as much as normal. If you ask for a particular elemental creature by name, your lord is likely to send them unless the creature is busy.\nSuccess Your elemental lord sends a servitor.\nFailure Your elemental lord does not send a servitor.\nCritical Failure Your elemental lord is offended and sends a sign of displeasure or possibly even an elemental creature to scold or attack you, depending on your lord's nature.",
      "castingTime": "1 day",
      "range": "",
      "target": "",
      "area": null,
      "duration": "see text",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:bountiful-oasis",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "SnBc7Gl5VormWzS1",
      "slug": "bountiful-oasis",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/bountiful-oasis.webp"
    },
    "sourceHash": "sha256:600729ea46bea99ea444667a5ac0fed5fe7bff11c2e6298ca93fb225fd2e9ceb",
    "translatableHash": "sha256:04909b535c200ee173d93fce7e3d01da29c92506c464090a8be6f66c5c5440b8",
    "data": {
      "schemaVersion": 1,
      "name": "Bountiful Oasis",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "water"
      ],
      "traditions": [],
      "description": "You redirect the flow of underground lakes and other nearby sources of water to cause a lush natural spring to emerge from the ground. The water of the spring is a clean source of fresh water, perfect for drinking, farming, and supporting all forms of life. The spring purifies itself every morning at dawn, removing toxins and contaminants unless they're more than double the spring's rank.\nThe ritual creates a spring that's geographically appropriate to the terrain where the ritual is performed; for example, it creates a desert oasis in sandy, arid regions and a natural hot spring in a mountain range.\nCritical Success A small pond or oasis appears, fed by a natural spring that discharges enough pure drinking water to sustain a small settlement. The ground in a 20-foot burst surrounding the spring bursts with life, invigorated by the spring's irrigation. A variety of regionally appropriate, fruit-bearing plants and other crops immediately take root and prosper.\nSuccess As critical success, but the oasis is a small pool that discharges enough pure drinking water to sustain roughly a dozen people, without any plants growing around the perimeter.\nFailure You're unable to redirect the flow of the water.\nCritical Failure You create a small pond of fetid and stagnant water that never dries, attracting disease-carrying insects and sickening creatures who partake of its waters.",
      "castingTime": "1 day",
      "range": "",
      "target": "",
      "area": "10 burst",
      "duration": "1 year",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:sky-signs",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "sYd3hqv2ZQqa0PSc",
      "slug": "sky-signs",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:8269dc9006e9b102122b3ec607c9a270dda926801053aa93b5a0ee920c02948d",
    "translatableHash": "sha256:9b42ee38316e2d5c61ad80294639849f4f2c3264dcd513f1025968b4c25bfc8a",
    "data": {
      "schemaVersion": 1,
      "name": "Sky Signs",
      "rank": 6,
      "rarity": "uncommon",
      "traits": [
        "air",
        "illusion",
        "visual"
      ],
      "traditions": [],
      "description": "You emblazon a message across the sky itself. Casting the ritual requires choosing a set of symbols for the message you want to send, which you can convey with an atmospheric phenomenon of your choice. Common choices include carefully shaped clouds during the day and auroras at night. Some cultures—such as the many denizens of the Plane of Air and star-gazing iruxis—develop complex symbology to communicate clearly using sky signs.\nThe message appears in the sky above you and can be seen to the horizon. To be conveyed in this way, the message must be very simple—typically something that can be expressed in 5 words or fewer. The symbols look the same to anyone who sees them. If you wish to conceal a message, you need to choose symbols that will make sense to your chosen audience but not to any other onlookers.\nCritical Success You display your chosen signs, and the message is clear to anyone who sees it.\nSuccess You display a somewhat muddled version of your message. The signs aren't entirely clear and require interpretation from those who view them—and many interpret them incorrectly.\nFailure You're unable to show your message.\nCritical Failure The spirits of air find your message audacious and offensive. As punishment, they emblazon the opposite of your intended message across the sky, and the message is clear to anyone who sees it.\nHeightened (10th) The scope of your message is truly staggering and can be seen across the entire planet.",
      "castingTime": "1 day",
      "range": "",
      "target": "",
      "area": null,
      "duration": "8 hours",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (10th) The scope of your message is truly staggering and can be seen across the entire planet."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:band-of-heroes",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "q9QGc0PJMFWxFOCz",
      "slug": "band-of-heroes",
      "publicationTitle": "Pathfinder War of Immortals",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:4c04a8814ea24df60f0511374a4d98e51cbc7117f33c66fec2c29171399b7071",
    "translatableHash": "sha256:cefb3a4e78e65b760b9d91e1134901dd2bc091d8a86f65af03673f1c54b9b4f0",
    "data": {
      "schemaVersion": 1,
      "name": "Band of Heroes",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "mythic"
      ],
      "traditions": [],
      "description": "The sun rises on a gathering of heroes bonded to a cause. While only one secondary caster can attempt the secondary check, each secondary caster must also spend 1 Mythic Point upon successful completion of the ritual (see below). A secondary caster who chooses not to spend the Mythic Point can't benefit from the ritual's effects.\nCritical Success As success, but the first time a caster gains the Doomed, Dying, or Wounded condition during the ritual's duration, reduce the value of that condition by 1 (minimum 0).\nSuccess Each secondary caster must spend 1 Mythic Point. For the duration of the ritual, when a caster Aids another caster, they can attempt the associated check at mythic proficiency. On a success, the circumstance bonus the Aiding caster grants is increased to +2, and on a critical success, the circumstance bonus is increased to +5.\nFailure The ritual has no effect. The secondary casters don't need to each spend 1 Mythic Point.\nCritical Failure The ritual fails, and the casters rupture their own connections to their mythic destinies. None of the casters can gain Mythic Points for 1 week.",
      "castingTime": "1 hour",
      "range": "30 feet",
      "target": "all casters involved in ritual",
      "area": null,
      "duration": "24 hours",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 431,
        "uuid": "Compendium.pf2e.conditionitems.Item.Doomed",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Doomed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Doomed",
          "sourceId": "3uh1r86TzbQvosxv",
          "name": "Doomed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "q9QGc0PJMFWxFOCz",
          "name": "Band of Heroes",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 482,
        "uuid": "Compendium.pf2e.conditionitems.Item.Dying",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Dying",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Dying",
          "sourceId": "yZRUzMqrMmfLu0V1",
          "name": "Dying",
          "type": "condition"
        },
        "owner": {
          "sourceId": "q9QGc0PJMFWxFOCz",
          "name": "Band of Heroes",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 535,
        "uuid": "Compendium.pf2e.conditionitems.Item.Wounded",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Wounded",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Wounded",
          "sourceId": "Yl48xTdMh3aeQYL2",
          "name": "Wounded",
          "type": "condition"
        },
        "owner": {
          "sourceId": "q9QGc0PJMFWxFOCz",
          "name": "Band of Heroes",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 806,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Aid",
        "label": "Aids",
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Aid",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Aid",
          "sourceId": "HCl3pzVefiv9ZKQW",
          "name": "Aid",
          "type": "action"
        },
        "owner": {
          "sourceId": "q9QGc0PJMFWxFOCz",
          "name": "Band of Heroes",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:wild-feast",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "5y3RlXMDPovOmrhp",
      "slug": "wild-feast",
      "publicationTitle": "Pathfinder War of Immortals",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:684be7dd3345f2577c2a2355c93501d107e5aefd87516af0e09abfe5a4f4d57b",
    "translatableHash": "sha256:67478029c6201d4f715f212ba501844b6baf3a7c6f7514d383e62756daea5910",
    "data": {
      "schemaVersion": 1,
      "name": "Wild Feast",
      "rank": 4,
      "rarity": "rare",
      "traits": [
        "mythic"
      ],
      "traditions": [],
      "description": "You draw forth latent hostility in the local flora and fauna. Even domesticated animals might turn on their owners.\nCritical Success As success, except that animal companions, pets, familiars with the animal, fungus, or plant trait, and similar creatures (subject to the GM's discretion) are also initially affected. Each day for the duration, during daily preparations, its master must succeed at a check (diplomacy) or check (nature) check against a DC equal to the ritual's casting DC or the creature temporarily loses the minion trait and can't be Commanded that day. The creature remains near its master but doesn't help them in any way.\nSuccess Carnivorous animals and plants in the area are automatically hostile toward humanoids and other natural enemies. Animal companions, pets, familiars with the animal, fungus, or plant trait, and similar creatures don't turn on their masters, but attempts to Command an Animal or to Demoralize any creatures with the animal, fungus, or plant trait take a –2 status penalty.\nFailure The ritual has no effect.\nCritical Failure A terrible hunger awakens within the casters. Each caster is permanently cursed to hunger for the taste of flesh of their own ancestry; this is identical to the ghoul's forbidden cravings curse, except the raw meat must be from a member of their own ancestry. The DC of this curse is equal to the ritual's casting DC.\nHeightened 2 Double the ritual's area.",
      "castingTime": "8 hours",
      "range": "centered on you",
      "target": "",
      "area": "500 burst",
      "duration": "3 days",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 2 Double the ritual's area."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 963,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Command an Animal",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Command an Animal",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Command an Animal",
          "sourceId": "q9nbyIF0PEBqMtYe",
          "name": "Command an Animal",
          "type": "action"
        },
        "owner": {
          "sourceId": "5y3RlXMDPovOmrhp",
          "name": "Wild Feast",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1027,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Demoralize",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Demoralize",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Demoralize",
          "sourceId": "2u915NdUyQan6uKF",
          "name": "Demoralize",
          "type": "action"
        },
        "owner": {
          "sourceId": "5y3RlXMDPovOmrhp",
          "name": "Wild Feast",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:world-in-shadow",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "bODHqeXoEc8GVU6a",
      "slug": "world-in-shadow",
      "publicationTitle": "Pathfinder War of Immortals",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:c874675808e68982addceb44c2bad419cf747046e6db4e7d943ce3b1a535cb90",
    "translatableHash": "sha256:726aab53ffaa259d04cd4698da5288fb7e5fdfd20ee9bde6a0402acf24d7b6b5",
    "data": {
      "schemaVersion": 1,
      "name": "World in Shadow",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "darkness",
        "mythic"
      ],
      "traditions": [],
      "description": "This ritual must be cast at night, at which point darkness becomes everlasting. Casters with darkvision gain a +1 circumstance bonus to their check to cast the ritual.\nCritical Success As success, except that all light levels within the area are lowered by two steps toward darkness, and light effects that would counteract the darkness take a –2 status penalty to their counteract checks.\nSuccess All light levels within the area are lowered by one step toward darkness. Areas that are already dark become magical darkness. Light effects that would counteract the darkness only do so in the area of the counteracting spell or effect (for example, 40 feet for a Light spell).\nFailure The ritual has no effect.\nCritical Failure The casters are all plunged into their own personal darknesses. For 1 week, each caster can see no farther than 5 feet regardless of ambient light level. Anything beyond that distance is treated as if it were in magical darkness that can't be counteracted; darkvision and greater darkvision similarly can't penetrate this darkness.",
      "castingTime": "8 hours",
      "range": "8-mile radius circle centered on you",
      "target": "",
      "area": null,
      "duration": "5 days",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 718,
        "uuid": "Compendium.pf2e.spells-srd.Item.Light",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Light",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Light",
          "sourceId": "WBmvzNDfpwka3qT4",
          "name": "Light",
          "type": "spell"
        },
        "owner": {
          "sourceId": "bODHqeXoEc8GVU6a",
          "name": "World in Shadow",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:kaiju-ward",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "nxnGKgcVii5KTwtM",
      "slug": "kaiju-ward",
      "publicationTitle": "Pathfinder War of Immortals",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:e94aa2d0c5889270c87593496072b8a3ed78e5cba3134f0236983678b56ca859",
    "translatableHash": "sha256:c521244f8ced0e412a069f55599010296e282681ae972506a74ac20414d36869",
    "data": {
      "schemaVersion": 1,
      "name": "Kaiju Ward",
      "rank": 6,
      "rarity": "rare",
      "traits": [
        "mythic"
      ],
      "traditions": [],
      "description": "You protect a physical structure from the devastation caused by immense creatures. This structure can be artificially constructed, like a castle or wall, or a natural subject, like a specific tree or grove. A given casting of this ritual can protect a subject as small as a single-story house and no larger than the wall surrounding a large city.\nCritical Success As success, but the target structure also doubles its Hit Points and Broken Threshold.\nSuccess The target structure gains a +4 status bonus to AC and its Hardness increases by 10. It also gains resistance 20 to acid, cold, electricity, fire, and sonic damage; this resistance applies before its Hardness. These benefits apply only to attacks made by Gargantuan creatures or siege engines.\nFailure The ritual doesn't succeed.\nCritical Failure The target is considerably weakened, reducing its Hardness by 10 (minimum 0).",
      "castingTime": "8 hours",
      "range": "touch",
      "target": "1 physical structure",
      "area": null,
      "duration": "14 days",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:city-of-sin",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "9WMEO6JEcAulgUv3",
      "slug": "city-of-sin",
      "publicationTitle": "Pathfinder War of Immortals",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:f11386b922ffd58daa1dfbf4f8f2c54ae0325742428c3c51503586171984146a",
    "translatableHash": "sha256:e2f71148683f298fa360010591228296587e09b40d2a9be59a051a73c28bbb48",
    "data": {
      "schemaVersion": 1,
      "name": "City of Sin",
      "rank": 7,
      "rarity": "uncommon",
      "traits": [
        "emotion",
        "mental",
        "mythic"
      ],
      "traditions": [],
      "description": "Area 7-mile-radius circle centered on you\nEach day during the casting of this ritual, intelligent creatures within range become increasingly prone to shed their inhibitions and give in to whatever tempts them. Exposed communities experience increases in crime, vice, and violence (however the community defines those vices). At the ritual's culmination, chaos ensues as everyone from every walk of life chooses temptation over faithfulness to their convictions.\nCritical Success Intelligent creatures in the ritual's area might betray even their most closely held convictions, including behaviors anathema to their class or faith. They take a –4 circumstance penalty to saves against mental effects and to their Coerce and Request DCs.\nSuccess Intelligent creatures in the ritual's area become more likely to give in to temptation, indulging vices and violating all but the strongest convictions. They take a –2 circumstance penalty to saves against mental effects and to their Coerce and Request DCs.\nFailure Intelligent creatures in the ritual's radius behave normally but gain the general sense that something unnatural tried to manipulate their actions.\nCritical Failure As failure above, except communities of intelligent creatures in the ritual's area bond over any events they experienced during the ritual's casting. They commit themselves to shared principles for behavior, gaining a +2 circumstance bonus to saves against mental effects and to their Coerce and Request DCs for 1 week.",
      "castingTime": "7 days",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 month",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 773,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Coerce",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Coerce",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Coerce",
          "sourceId": "tHCqgwjtQtzNqVvd",
          "name": "Coerce",
          "type": "action"
        },
        "owner": {
          "sourceId": "9WMEO6JEcAulgUv3",
          "name": "City of Sin",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 824,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Request",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Request",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Request",
          "sourceId": "DCb62iCBrJXy0Ik6",
          "name": "Request",
          "type": "action"
        },
        "owner": {
          "sourceId": "9WMEO6JEcAulgUv3",
          "name": "City of Sin",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:unbearable-cacophony",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "XhfsRLfQjN3ed1zI",
      "slug": "unbearable-cacophony",
      "publicationTitle": "Pathfinder War of Immortals",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:d5fb7783467fa12f73ec577dd3f2a940a21caeb77e20d65255c62b0f7b3f5f63",
    "translatableHash": "sha256:0b30adcd49e1399daea008b127150e7a1973be3516788d73edc2debaa8e34b7e",
    "data": {
      "schemaVersion": 1,
      "name": "Unbearable Cacophony",
      "rank": 7,
      "rarity": "uncommon",
      "traits": [
        "curse",
        "mythic"
      ],
      "traditions": [],
      "description": "You amplify the sound of every item and creature to impossible levels. Deaf creatures and creatures immune to sonic damage remain unaffected in most cases.\nCritical Success As success, and you and the secondary casters gain sonic resistance equal to your level for the duration.\nSuccess Any sound produced by a creature or object (such as a cricket, a ringing anvil, or a lion's roar) deals sonic damage equal to the level of the creature or item (minimum 1) to every creature within 15 feet (basic Fortitude save with a DC equal to the ritual's casting DC). For every size category over Tiny of the item or creature making noise, this damage increases by 2. Organized groups of creatures, such as a singing quartet or a swarm of insects, count as the next size category larger for this effect. Effects that normally deal sonic damage to creatures and objects ignore half the creature or object's sonic resistance or Hardness.\nFailure The ritual has no effect.\nCritical Failure An intense sound of ringing echoes in each caster's ears, imparting a weakness to sonic damage equal to their level for 1 day.\nHeightened 2 The increase in damage made by creatures larger than Tiny increases to 6 per size category.",
      "castingTime": "1 day",
      "range": "1-mile radius circle centered on you",
      "target": "",
      "area": null,
      "duration": "3 days",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 2 The increase in damage made by creatures larger than Tiny increases to 6 per size category."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:imprisonment",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "2CNqkt2s2IYkVnv6",
      "slug": "imprisonment",
      "publicationTitle": "Pathfinder War of Immortals",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:1d607c79b0de57240aa357b5fb9fc75e4ff53c7c9c618a3e4be1c6cdc3c8ba34",
    "translatableHash": "sha256:8168e7d7bc40ebc959c3a1e571d317553366c13f336ce3cce2a9aeb6fb770856",
    "data": {
      "schemaVersion": 1,
      "name": "Imprisonment",
      "rank": 8,
      "rarity": "uncommon",
      "traits": [
        "mythic"
      ],
      "traditions": [],
      "description": "You perform a ritual to imprison a creature in one of several forms. While some versions of this ritual offer all the forms, others include only a single form or only a few of them. Whichever form you use, the effect can't be counteracted, though it can be ended by Freedom. Some forms of imprisonment can be ended by other means. Because the ritual requires the target to remain within 10 feet at all times, it typically requires you to subdue the target first.\n• Chains You bind the creature with chains, rendering it unable to use any actions other than to speak. Other creatures that attempt to approach, harm the chains, or free the trapped creature in any way must succeed at a Will save or be unable to do so forever. The chains have Hardness equal to 5 × the imprisonment ritual's spell rank and double that many Hit Points. Destroying the chains frees the target.\n• Prison You render the creature completely unable to leave a particular confined area or structure of your choice, such as a jail cell or sealed cave. The magic also prevents the creature from damaging its prison, either directly or indirectly, to break free. If the creature's prison is entirely destroyed by some external force, the creature is freed, though for some larger or natural prisons, this might be unfeasible.\n• Slumber You put the creature into an eternal sleep. This is a sleep effect. The creature ceases aging and doesn't require food or drink. A single sincere physical display of affection from a creature who genuinely loves the target—whether romantically, filially, or otherwise—frees it from the slumber.\n• Temporal Stasis You send the creature into a state of suspended animation outside the flow of time. The creature doesn't grow older and can't be affected by any effect from within the normal timestream. While casting this ritual, you can optionally name any amount of time for the stasis; after this duration elapses, the stasis ends. Unlike other forms of imprisonment, temporal stasis can be counteracted by a Dispel Magic or Haste spell.\n• Object (9th or 10th rank) You either shrink the creature to an inch in height or transform it into an insubstantial form whose body trails away into wisps below its head. Either way, you trap it inside a bottle, gem, jar, lamp, or similar container. The creature ceases aging and doesn't require food or drink. The creature is still aware of its surroundings and can move within the container and speak, but it can't use any other actions. Destroying the container kills the target rather than freeing it.\n• Oubliette (10th rank only) You entomb the target in a state of suspended animation deep beneath the surface of the ground and out of tune with reality so that it can't be reached by any means. You also prevent most magic from revealing the location where the imprisonment occurred. Powerful magic, such as the Wish ritual, can reveal the location of the imprisonment, but even such magic can't free the target from the oubliette; only a 10th-rank freedom ritual can do so.\nCritical Success You imprison the target. You can either use a form of imprisonment that usually requires a spell rank 1 higher than your ritual or impose an –2 circumstance penalty to any checks for freedom rituals that would free the creature.\nSuccess You imprison the target.\nFailure You fail to imprison the target.\nCritical Failure You imprison yourself and the secondary casters in the same way you intended to imprison the target.\nHeightened (9th) You can use the object form of imprisonment in addition to the other options, and you can target a creature of up to 18th level. The base cost increases to 2,000 gp.\nHeightened (10th) You can use the object and oubliette forms of imprisonment in addition to the other options, and you can target a creature of up to 20th level. The base cost increases to 6,000 gp.",
      "castingTime": "1 day",
      "range": "10 feet",
      "target": "1 creature of up to 16th level",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (9th) You can use the object form of imprisonment in addition to the other options, and you can target a creature of up to 18th level. The base cost increases to 2,000 gp.\nHeightened (10th) You can use the object and oubliette forms of imprisonment in addition to the other options, and you can target a creature of up to 20th level. The base cost increases to 6,000 gp."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 269,
        "uuid": "Compendium.pf2e.spells-srd.Item.Freedom",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Freedom",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Freedom",
          "sourceId": "4ddJSjC9Zz5DX0oG",
          "name": "Freedom",
          "type": "spell"
        },
        "owner": {
          "sourceId": "2CNqkt2s2IYkVnv6",
          "name": "Imprisonment",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 2180,
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
          "sourceId": "2CNqkt2s2IYkVnv6",
          "name": "Imprisonment",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 2235,
        "uuid": "Compendium.pf2e.spells-srd.Item.Haste",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Haste",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Haste",
          "sourceId": "o6YCGx4lycsYpww4",
          "name": "Haste",
          "type": "spell"
        },
        "owner": {
          "sourceId": "2CNqkt2s2IYkVnv6",
          "name": "Imprisonment",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 3165,
        "uuid": "Compendium.pf2e.spells-srd.Item.Wish",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Wish",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Wish",
          "sourceId": "6dDtGIUerazSHIOu",
          "name": "Wish",
          "type": "spell"
        },
        "owner": {
          "sourceId": "2CNqkt2s2IYkVnv6",
          "name": "Imprisonment",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:freedom",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "4ddJSjC9Zz5DX0oG",
      "slug": "freedom",
      "publicationTitle": "Pathfinder War of Immortals",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:92fa4a8323d5de595686a2f6f5d766d1975509c91a1d05da95d8c884fa1ffa8c",
    "translatableHash": "sha256:306e7b249243444e9e1e3eeb2b95ebe059e01693687ac10cf0aa6e16e9ceacee",
    "data": {
      "schemaVersion": 1,
      "name": "Freedom",
      "rank": 8,
      "rarity": "uncommon",
      "traits": [
        "mythic"
      ],
      "traditions": [],
      "description": "You perform a ritual to free a creature imprisoned, petrified, or otherwise put into stasis by any magical effects. You free them from all such effects, even effects like Imprisonment that don't have a duration, as long as freedom's spell rank is equal to or higher than the effect's spell rank. To perform the ritual, you must be within 10 feet of the target, or within 10 feet of the place where the target was imprisoned (in the case of effects that trap the creature in an unreachable prison, like the oubliette form of imprisonment). You must know the name of the creature and details of its background; if the creature isn't a close associate, a failure or critical failure on a secondary check (society, overrideTraits:true) check reduces even a critical success on the primary check to a failure.\nCritical Success You free the target from all magical effects imprisoning it, petrifying it, or putting it into stasis. It gains a +1 status bonus to saving throws to resist those same magical effects for 1 week.\nSuccess You free the target from all magical effects imprisoning it, petrifying it, or putting it into stasis.\nFailure You fail to free the target.\nCritical Failure The magical effects imprisoning the target, petrifying the target, or putting it into stasis affect you and all secondary casters.",
      "castingTime": "1 day",
      "range": "",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 174,
        "uuid": "Compendium.pf2e.spells-srd.Item.Imprisonment",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Imprisonment",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Imprisonment",
          "sourceId": "2CNqkt2s2IYkVnv6",
          "name": "Imprisonment",
          "type": "spell"
        },
        "owner": {
          "sourceId": "4ddJSjC9Zz5DX0oG",
          "name": "Freedom",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:awaken-curse",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "6P2fzrYkaiiptxlY",
      "slug": "awaken-curse",
      "publicationTitle": "Pathfinder War of Immortals",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:9de8922b7f5d8b647e2bd2ea33b28db1be54b1951d2c063533dbe6e6df732da3",
    "translatableHash": "sha256:7cd85c1bbc328b10bb65ff47bc63a43d5935845c98ada48469448e379e1583af",
    "data": {
      "schemaVersion": 1,
      "name": "Awaken Curse",
      "rank": 8,
      "rarity": "uncommon",
      "traits": [
        "mythic"
      ],
      "traditions": [],
      "description": "You siphon a tiny portion of life force from each of the ritual's casters to empower a curse against disrupting effects. The difficulty of the counteract check to remove the curse changes based on the success of the ritual. Additionally, the first three times the curse is successfully counteracted, it leaps to the closest possible target within 100 feet, forcing the new target to attempt a saving throw against the curse's initial effects. Saves against the curse are attempted at the same DC as the curse when it was cast, subject to changes based on the ritual's success. If any creature successfully saves against the curse's initial effects, the curse dissipates harmlessly.\nCritical Success The first counteract attempt against the curse automatically fails. After that, the curse's counteract rank increases by 2 (to a maximum of 10).\nSuccess The curse's counteract rank increases by 1 (to a maximum of 10).\nFailure The curse's counteract rank is unchanged.\nCritical Failure You fail to grasp the curse's nuances and entangle yourself in its effects. The curse is lifted from the original target, and you and each secondary caster is affected by the curse with no saving throw.",
      "castingTime": "1 day",
      "range": "1 mile",
      "target": "1 curse",
      "area": null,
      "duration": "unlimited",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:embodied-font",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "HBxsMKXzZM0HviEE",
      "slug": "embodied-font",
      "publicationTitle": "Pathfinder War of Immortals",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:d069f941a8a658e4bf2ec59b8d5956466cabdf17ab0d7710945f310e27886b36",
    "translatableHash": "sha256:931e0ca02f357465f52c847fc0a06f6235af1d3b8205a250d85a77b1a82aa1d1",
    "data": {
      "schemaVersion": 1,
      "name": "Embodied Font",
      "rank": 8,
      "rarity": "rare",
      "traits": [],
      "traditions": [],
      "description": "You place the magic items into a neat pile and attempt to draw out their power to form a new body that the target can inhabit.\nCritical Success The target materializes within range, with full Hit Points, 1 Mythic Point, and as if having just completed daily preparations.\nSuccess As critical success, but all the target's spells and spell slots are expended.\nFailure As success, but the target is Clumsy 1, Drained 1, Doomed 1, and Enfeebled 1 for 1 week.\nCritical Failure The ritual fails and can't be attempted again for that target for 1 week. The magic items are still consumed.",
      "castingTime": "1 day",
      "range": "10 feet",
      "target": "the disembodied wildspell associated with the primary caster",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 477,
        "uuid": "Compendium.pf2e.conditionitems.Item.Clumsy",
        "label": "Clumsy 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Clumsy",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Clumsy",
          "sourceId": "i3OJZU2nk64Df3xm",
          "name": "Clumsy",
          "type": "condition"
        },
        "owner": {
          "sourceId": "HBxsMKXzZM0HviEE",
          "name": "Embodied Font",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 538,
        "uuid": "Compendium.pf2e.conditionitems.Item.Drained",
        "label": "Drained 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Drained",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Drained",
          "sourceId": "4D2KBtexWXa6oUMR",
          "name": "Drained",
          "type": "condition"
        },
        "owner": {
          "sourceId": "HBxsMKXzZM0HviEE",
          "name": "Embodied Font",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 601,
        "uuid": "Compendium.pf2e.conditionitems.Item.Doomed",
        "label": "Doomed 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Doomed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Doomed",
          "sourceId": "3uh1r86TzbQvosxv",
          "name": "Doomed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "HBxsMKXzZM0HviEE",
          "name": "Embodied Font",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 666,
        "uuid": "Compendium.pf2e.conditionitems.Item.Enfeebled",
        "label": "Enfeebled 1",
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
          "sourceId": "HBxsMKXzZM0HviEE",
          "name": "Embodied Font",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:create-demiplane",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ZwwIUavMbEwcZz35",
      "slug": "create-demiplane",
      "publicationTitle": "Pathfinder War of Immortals",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:5a05a75591b6f8d93c8db16e6d8baed3d0019e584cadda0db6316c0049b6586d",
    "translatableHash": "sha256:0adbf9b88aca50de5b82762fa271e9fe963de62f0990632dcec981205a8b58f0",
    "data": {
      "schemaVersion": 1,
      "name": "Create Demiplane",
      "rank": 8,
      "rarity": "rare",
      "traits": [
        "mythic",
        "teleportation"
      ],
      "traditions": [],
      "description": "Few incantations are as renowned as the power to create worlds. To cast this ritual, you must be on the Astral Plane, the Ethereal Plane, or a plane that connects to one of the two. A demiplane created with this ritual exists on the Astral or Ethereal Plane. It can have the appearance of any mundane environment or structure, such as a glorious cathedral, a forest clearing, a comfortably furnished cavern, or anything else imaginable. All demiplanes have finite, unbreachable boundaries, which might resemble stone, wood, or something more unnatural, such as a wall of mist or unceasing void.\nDemiplanes have environmental conditions appropriate for the Universe, though the primary caster can dictate a general climate or light level as well as whether the demiplane experiences seasons or a day-night cycle. The demiplane has no native plants or animals, but they can be introduced, and plants will grow in a demiplane's light.\nWhen you first cast create demiplane, the casters are teleported to the demiplane. The demiplane has no direct access to other worlds, so Interplanar Teleport or similar abilities are necessary to access it. As part of casting the ritual to create a new demiplane, you create a planar key to the demiplane that serves as an interplanar teleport locus for that demiplane. Most resemble ornate keys, but some take the form of maps, compasses, or dowsing rods.\nIf you have the original planar key to an existing demiplane and are also on that demiplane, you can cast this ritual again. Each time, you can either expand the demiplane's size or add one special trait or feature described below.\n• Bounteous The demiplane has a functional ecosystem with plants and animals appropriate to the environment. This ecosystem doesn't require any additional effort on your part to maintain.\n• Elemental The demiplane gains the air, earth, fire, metal, water, or wood planar essence trait.\n• Gravity The demiplane gains a gravity trait of your choice.\n• Key You create an additional planar key that can be used to access the demiplane with interplanar teleport and improve it with create demiplane.\n• Portal You create a permanent gateway between the demiplane and a single other location. You must spend the ritual's casting time constructing the gateway on the external side, which typically resembles an arch or doorway of some sort. The gate is always active, but it can be secured as you would any door.\n• Scope The demiplane can be unbounded instead of finite, though still with the same size.\nCritical Success You create a new demiplane whose area consists of 10 contiguous squares, each 100 feet on a side. The ceiling is 40 feet high. If modifying an existing demiplane, you can instead either add this area to the demiplane's size or add two special traits or features.\nSuccess As critical success, but the demiplane's area is two squares, each 100 feet on a side, with a ceiling 20 feet high. If modifying an existing demiplane, you can add one special trait or feature.\nFailure The ritual has no effect.\nCritical Failure Something goes horribly wrong, and all casters are teleported to an unknown but hostile plane.\nHeightened (10th) The ritual creates a square area 2,000 feet on a side, with a ceiling 60 feet high (or two contiguous areas of this size on a critical success). The cost of the ritual increases to 20,000 gp.",
      "castingTime": "9 days",
      "range": "",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (10th) The ritual creates a square area 2,000 feet on a side, with a ceiling 60 feet high (or two contiguous areas of this size on a critical success). The cost of the ritual increases to 20,000 gp."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1096,
        "uuid": "Compendium.pf2e.spells-srd.Item.Interplanar Teleport",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Interplanar Teleport",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Interplanar Teleport",
          "sourceId": "5bTt2CvYHPvaR7QQ",
          "name": "Interplanar Teleport",
          "type": "spell"
        },
        "owner": {
          "sourceId": "ZwwIUavMbEwcZz35",
          "name": "Create Demiplane",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:oceans-roar",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "6WZgtQ2Iw9CTbv2c",
      "slug": "oceans-roar",
      "publicationTitle": "Pathfinder War of Immortals",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:3d94e618a853054530fee8f0e77e8eba47c31118a6e6eeddc77f556d8f92a185",
    "translatableHash": "sha256:969400d7277c17ef0af0a9897fe98b169672aefed388530b6ec26a2d72bae695",
    "data": {
      "schemaVersion": 1,
      "name": "Ocean's Roar",
      "rank": 9,
      "rarity": "rare",
      "traits": [
        "mythic",
        "water"
      ],
      "traditions": [],
      "description": "You invoke consciousness in a large body of water, such as a coastline, lake, or lagoon. An ancient elemental spirit awakens in the water, seeking instantly to defend itself from aggressors or punish trespassers. You must cast this ritual either directly above the surface of the water or completely submerged at the bottom of the body of water. Such spirits are known to crash ships, devastate shores, and drag enemies under the waves, but can also respond favorably to competent casters.\nThis new entity must be appeased by those who sail it. Appeasing the spirit requires a check (diplomacy, overrideTraits:true) or check (nature, overrideTraits:true) check at the ritual's casting DC. Those negotiating with the spirit might make offerings to gain the spirit's favor, but such reprieve is short in duration and must be attempted each time a vessel passes near. The nature of these offerings is subject to the GM's discretion.\nCritical Success As success, except the spirit looks kindly on the caster and those who travel with them. The spirit never takes hostile action against them or any vessel they travel on and increases their swim Speed or their vessel's Speed by 10 feet while within the affected area. Additionally, the spirit's Strike gains the Improved Grab ability with an Athletics modifier of +38.\nSuccess The spirit takes up residence in the body of water, defending it aggressively or attacking organized threats on adjacent shores. The spirit manifests as either a massive tsunami (GM Core 90, 96) that repeats every hour or a massive fist of water that can make a melee Strike every round against any target within the affected area. This Strike has a +33 modifier and deals 3d8+19 bludgeoning damage. The spirit can make this Strike against two targets within 30 feet, rolling once to attack and comparing the result against the AC of both targets.\nFailure The ritual has no effect, though tides and waves are more severe than normal for 24 hours.\nCritical Failure The ritual backfires, causing four Elemental Tsunamis to appear surrounding the casters and attack them for their insolence. If not defeated, the tsunamis remain for 1 week, attacking any waterborne vessels within the targeted area.",
      "castingTime": "1 day",
      "range": "10 feet",
      "target": "body of water no larger than a 7-mile radius area",
      "area": null,
      "duration": "unlimited",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1295,
        "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.Improved Grab",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.bestiary-ability-glossary-srd.Item.Improved Grab",
          "package": "pf2e",
          "sourcePack": "bestiary-ability-glossary-srd",
          "documentType": "Item",
          "compendiumKey": "Improved Grab",
          "sourceId": "i18TlebMzwONyPhI",
          "name": "Improved Grab",
          "type": "action"
        },
        "owner": {
          "sourceId": "6WZgtQ2Iw9CTbv2c",
          "name": "Ocean's Roar",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 2198,
        "uuid": "Compendium.pf2e.pathfinder-monster-core.Actor.Elemental Tsunami",
        "label": "Elemental Tsunamis",
        "target": {
          "uuid": "Compendium.pf2e.pathfinder-monster-core.Actor.Elemental Tsunami",
          "package": "pf2e",
          "sourcePack": "pathfinder-monster-core",
          "documentType": "Actor",
          "compendiumKey": "Elemental Tsunami",
          "sourceId": "R427CMT90S7fv7MY",
          "name": "Elemental Tsunami",
          "type": "npc"
        },
        "owner": {
          "sourceId": "6WZgtQ2Iw9CTbv2c",
          "name": "Ocean's Roar",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:curse-of-calamity",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "CGB3a9gJU5S8gjKk",
      "slug": "curse-of-calamity",
      "publicationTitle": "Pathfinder War of Immortals",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:9e0739c7bbcdc0a933c0baaaafd74f5818103c005f4a8af383fb65d552d19014",
    "translatableHash": "sha256:6de2452134b9a394b72481ceb54607b8fc7abf0499d72603b7f20653a1a2634e",
    "data": {
      "schemaVersion": 1,
      "name": "Curse of Calamity",
      "rank": 9,
      "rarity": "rare",
      "traits": [
        "curse",
        "misfortune",
        "mythic"
      ],
      "traditions": [],
      "description": "You condemn your targets to violent misfortune. At the GM's discretion, you can target a group of individuals within range who serve the same cause, such as a nation's army, or who have a shared identity, such as members of a single faith. You can also choose to target a settlement that's a village or town, or a neighborhood community within a larger settlement.\nCritical Success As success, and the targets experience extreme accidents that threaten life, limb, or other loss. The GM adjudicates these occurrences on a case-by-case basis, but in general, the population experiences a disturbing rise in unfortunate casualties.\nSuccess The targets experience misfortune during even routine tasks that result in minor injuries. This bad luck increases when you're close; the first time each round a target within 15 feet of you attempts an attack roll or skill check, they must roll twice and use the worse result.\nFailure The ritual has no effect.\nCritical Failure You unwittingly curse yourself. For the next 24 hours, each caster must roll all attack rolls and skill checks twice and use the worse result.",
      "castingTime": "3 days",
      "range": "1 mile",
      "target": "1 community, group, or settlement",
      "area": null,
      "duration": "1 year",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:void-harvest",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "NjK0kWRC6FYsPwXC",
      "slug": "void-harvest",
      "publicationTitle": "Pathfinder War of Immortals",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:0c709cbcad1d5169b9dd78c4ba822036e44705cd6f13bac9c728f938f47fa0db",
    "translatableHash": "sha256:63dcec3d85fe7fd7b99d126f8693b44eafe1253b083ba831021e1851ecb6e609",
    "data": {
      "schemaVersion": 1,
      "name": "Void Harvest",
      "rank": 9,
      "rarity": "rare",
      "traits": [
        "curse",
        "mythic",
        "void"
      ],
      "traditions": [],
      "description": "The sky darkens over the affected area and the air becomes oppressive as you open a direct conduit to the Void, a plane of vast nothingness. Living creatures start to feel their life force draining away as the terror of oblivion begins to grip their hearts.\nEach year on the anniversary of the ritual's casting, a total of four casters can spend 1 hour at the center of the affected area to sustain the effect. To do so, one caster must spend 1 Mythic Point and succeed at a Religion check against the ritual's casting DC. Each year the ritual is successfully sustained, the radius increases from its original point by 1 mile. The effect fades away if the check fails or if there are no other attempts to sustain the ritual.\nCritical Success As success, but living creatures in the area take a –2 status penalty to saves against death effects or effects that deal void damage.\nSuccess The first time each day a living creature in the area takes damage, it must succeed at a Will save with a DC equal to the ritual's casting DC or gain the Doomed 1 condition; if it already has the doomed condition, it instead increases the value of it by 1. Dead creatures can't be raised or resurrected so long as their body remains in the ritual's area. Undead creatures gain vitality resistance equal to their level while in the area.\nFailure The ritual has no effect.\nCritical Failure An explosion of energy from the Void washes over the casters. Each caster becomes Drained 4. This condition can't be removed for 1 week.",
      "castingTime": "8 hours",
      "range": "1-mile radius circle centered on you",
      "target": "",
      "area": null,
      "duration": "1 year",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1102,
        "uuid": "Compendium.pf2e.conditionitems.Item.Doomed",
        "label": "Doomed 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Doomed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Doomed",
          "sourceId": "3uh1r86TzbQvosxv",
          "name": "Doomed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "NjK0kWRC6FYsPwXC",
          "name": "Void Harvest",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1617,
        "uuid": "Compendium.pf2e.conditionitems.Item.Drained",
        "label": "Drained 4",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Drained",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Drained",
          "sourceId": "4D2KBtexWXa6oUMR",
          "name": "Drained",
          "type": "condition"
        },
        "owner": {
          "sourceId": "NjK0kWRC6FYsPwXC",
          "name": "Void Harvest",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:oil-slicked-walls",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "bOf5WuLh6ZJloi7F",
      "slug": "oil-slicked-walls",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/grease.webp"
    },
    "sourceHash": "sha256:f59a8bca348670f9b29df02f023a1a9b19f59ca43b7f09b238bdb6fe09f659c6",
    "translatableHash": "sha256:d1210ee0302fa705086278fc7cda7c56d2b29e1190736a9ebcd44da39d0bd14f",
    "data": {
      "schemaVersion": 1,
      "name": "Oil-Slicked Walls",
      "rank": 2,
      "rarity": "uncommon",
      "traits": [],
      "traditions": [],
      "description": "The outer walls are a city's first defense against invaders, and you want to make certain no attackers can climb over them. Upon successful completion of this ritual, the surfaces of a settlement's walls within the area are covered with a thin, slippery sheen that can't be washed away.\nCritical Success The oil covering the walls also coats any climber's hands. The DC for Athletics checks to Climb the affected walls increases by 10, and a creature who fails a check to climb also drops anything they are carrying.\nSuccess The DC for Athletics checks to Climb the affected walls increases by 5.\nFailure The ritual has no effect.\nCritical Failure Phantom oil constantly pools around your feet during times of stress. For 1 week, the first time each encounter that a primary or secondary caster takes an action to move, they must attempt a Reflex save or Acrobatics check to Balance against the ritual's casting DC or fall Prone. A caster can Step or Crawl without having to attempt a check or save.",
      "castingTime": "8 hours",
      "range": "",
      "target": "the outer walls of a settlement",
      "area": "36960 emanation",
      "duration": "1 week",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 979,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Balance",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Balance",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Balance",
          "sourceId": "M76ycLAqHoAgbcej",
          "name": "Balance",
          "type": "action"
        },
        "owner": {
          "sourceId": "bOf5WuLh6ZJloi7F",
          "name": "Oil-Slicked Walls",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1067,
        "uuid": "Compendium.pf2e.conditionitems.Item.Prone",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Prone",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Prone",
          "sourceId": "j91X7x0XSomq8d60",
          "name": "Prone",
          "type": "condition"
        },
        "owner": {
          "sourceId": "bOf5WuLh6ZJloi7F",
          "name": "Oil-Slicked Walls",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1138,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Crawl",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Crawl",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Crawl",
          "sourceId": "Tj055UcNm6UEgtCg",
          "name": "Crawl",
          "type": "action"
        },
        "owner": {
          "sourceId": "bOf5WuLh6ZJloi7F",
          "name": "Oil-Slicked Walls",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:army-of-shadows",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "WfImUYSXyW3YdyY9",
      "slug": "army-of-shadows",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/shadow-army.webp"
    },
    "sourceHash": "sha256:11f8c84d5671c36c739305973d74a536daf8ad437d335420de35cb5bf8c6c60d",
    "translatableHash": "sha256:f5b53eead05185c18b32d0a8654387b031a7f5d14d576325ddeed4b5f0b70dd1",
    "data": {
      "schemaVersion": 1,
      "name": "Army of Shadows",
      "rank": 2,
      "rarity": "uncommon",
      "traits": [
        "darkness"
      ],
      "traditions": [],
      "description": "You conjure a squadron of shadows to surge forth and plunge your enemies into darkness. All non-magical light sources in the area are extinguished and can't be lit again during the duration. Any dim light from sources outside the area can't penetrate the area, and sources of bright light from outside the area shed only dim light into the area. The shadows also attempt to counteract any magical light in the area, with a counteract rank of 2 and a counteract modifier of 1d20+13. If a new magical light effect enters the area during the duration, the shadows immediately attempt to counteract it.\nCritical Success The shadows are particularly powerful. Their counteract rank increases by 1, and they gain a +2 circumstance bonus to their counteract check.\nSuccess The shadows are of normal power.\nFailure The ritual has no effect.\nCritical Failure The shadows instead cling to you and obscure your vision, rendering you Blinded for 24 hours.\nHeightened (4th) The shadows have a counteract rank of 4 and a counteract modifier of 1d20+18.\nHeightened (6th) The shadows have a counteract rank of 6 and a counteract modifier of 1d20+24.\nHeightened (8th) The shadows have a counteract rank of 8 and a counteract modifier of 1d20+29.",
      "castingTime": "4 hours",
      "range": "1,000 feet",
      "target": "",
      "area": "200 burst",
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) The shadows have a counteract rank of 4 and a counteract modifier of 1d20+18.\nHeightened (6th) The shadows have a counteract rank of 6 and a counteract modifier of 1d20+24.\nHeightened (8th) The shadows have a counteract rank of 8 and a counteract modifier of 1d20+29."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1050,
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
          "sourceId": "WfImUYSXyW3YdyY9",
          "name": "Army of Shadows",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:secure-siege-weapons",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "a9og2ZYfr8kAeltU",
      "slug": "secure-siege-weapons",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/gravity-weapon.webp"
    },
    "sourceHash": "sha256:6f92e5e6a2e11f5e297c68f1ac10b8d7edc496ad9725707960834e3ac251b0d3",
    "translatableHash": "sha256:7f525aedcdac33eb573ef57fa72b1a25ff27cb32d0f8e4a74183c22dabe0c7b1",
    "data": {
      "schemaVersion": 1,
      "name": "Secure Siege Weapons",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [],
      "traditions": [],
      "description": "You strengthen your army's siege weapons and prevent them from being commandeered by enemy hands. At the successful conclusion of the ritual, each allied siege weapon in the area gains an increase to its Hardness and Hit Points for the duration. In addition, enemies who try to operate or move an affected mounted siege weapon or pick up an affected portable siege weapon must succeed at a check (will, dc:20) saving throw or be forced to roll twice and take the worse result on any check to Load or Strike with the siege weapon; this is a misfortune effect. Finally, if an enemy Launches an affected siege weapon, their targets can roll twice and take the better result for any resulting saving throw; this is a fortune effect.\nCritical Success Each affected siege weapon's Hardness increases by 10, and its maximum Hit Points increase by an amount equal to three times the siege weapon's level.\nSuccess Each affected siege weapon's Hardness increases by 5, and its maximum Hit Points increase by an amount equal to twice the siege weapon's level.\nFailure The ritual has no effect.\nCritical Failure All allied siege weapons in the area gain the broken condition.",
      "castingTime": "2 hours",
      "range": "",
      "target": "siege weapons operated by allied crews",
      "area": "250 burst",
      "duration": "1 month",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:reinforced-rations",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "2LsiiZZIZEKD23VQ",
      "slug": "reinforced-rations",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/purify-food-and-drink.webp"
    },
    "sourceHash": "sha256:8af14e296d2928abd387e9e09b41039637eb27743e34d5ccc965f7394236de51",
    "translatableHash": "sha256:256a77146b2259642c88edac5f8a5abe1e135557722aea8dca6191e472cc4b54",
    "data": {
      "schemaVersion": 1,
      "name": "Reinforced Rations",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [],
      "traditions": [],
      "description": "An army marches on its stomach, and a city under siege is often cut off from its normal food supplies, so preserving comestibles is of utmost importance during a prolonged conflict. You enchant food and water in the area to not decay or spoil for the duration and grant better nourishment according to the success of the ritual. At the end of the duration, the food and water return to the state they were before the ritual.\nCritical Success A single meal of the affected food contains enough nourishment to sustain a typical human for 3 days.\nSuccess A single meal of the affected food contains enough nourishment to sustain a typical human for 1 day.\nFailure The ritual has no effect.\nCritical Failure The food and water in the area rots and spoils rapidly, releasing noxious fumes. Each living creature in the area becomes Sickened 2 and can't reduce the value of this condition for 24 hours.",
      "castingTime": "4 hours",
      "range": "",
      "target": "all food and drink in the area",
      "area": "50 emanation",
      "duration": "1 month",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 930,
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
          "sourceId": "2LsiiZZIZEKD23VQ",
          "name": "Reinforced Rations",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:plague-shot",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "NjN6md0KpdelWpu7",
      "slug": "plague-shot",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/phase-bolt.webp"
    },
    "sourceHash": "sha256:6f544126027de5c5cd176627985d40180e0ff32a9b2d570ac8a2e17cde000a59",
    "translatableHash": "sha256:a6198455b08b2bfac723315f3b09a3103628817221d2844e86fd7129a8a0de44",
    "data": {
      "schemaVersion": 1,
      "name": "Plague Shot",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "disease"
      ],
      "traditions": [],
      "description": "You imbue several pieces of siege weapon ammunition with an infectious disease that can bring an opposing force low over time. Once the ritual is successfully concluded, the affected pieces of ammunition glow a sickly green and must be launched within the hour or the enchantment fades. In addition to its normal damage or other effects, a successful attack with a piece of the affected ammunition exposes every creature within a 60-foot-radius emanation from the point of impact to siege sickness.\nSiege Sickness (disease) Level 8\nSaving Throw check (fortitude, dc:24)\nOnset 1 day\nStage 1 Sickened 2 (1 day)\nStage 2 Enfeebled 1 and sickened 2 (1 day)\nStage 3 Enfeebled 2 and Sickened 3 (1 day)\nStage 4 Enfeebled 3, sickened 3, and a creature who comes into physical contact with the afflicted is exposed to siege sickness (1 day)\nStage 5 death, and a creature who comes into physical contact with the corpse is exposed to siege sickness\nCritical Success The siege sickness gains the virulent trait.\nSuccess The siege sickness is normal.\nFailure The ritual has no effect.\nCritical Failure Instead of being imbued in the ammunition, the disease becomes airborne at the site of the ritual. Each creature within a 60-foot emanation centered on the primary caster is exposed to siege sickness at stage 2.",
      "castingTime": "4 hours",
      "range": "touch",
      "target": "10 pieces of siege weapon ammunition, such as a ballista bolt or catapult stone",
      "area": null,
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 688,
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
          "sourceId": "NjN6md0KpdelWpu7",
          "name": "Plague Shot",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 792,
        "uuid": "Compendium.pf2e.conditionitems.Item.Enfeebled",
        "label": "Enfeebled 1",
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
          "sourceId": "NjN6md0KpdelWpu7",
          "name": "Plague Shot",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 913,
        "uuid": "Compendium.pf2e.conditionitems.Item.Enfeebled",
        "label": "Enfeebled 2",
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
          "sourceId": "NjN6md0KpdelWpu7",
          "name": "Plague Shot",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 983,
        "uuid": "Compendium.pf2e.conditionitems.Item.Sickened",
        "label": "Sickened 3",
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
          "sourceId": "NjN6md0KpdelWpu7",
          "name": "Plague Shot",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1087,
        "uuid": "Compendium.pf2e.conditionitems.Item.Enfeebled",
        "label": "Enfeebled 3",
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
          "sourceId": "NjN6md0KpdelWpu7",
          "name": "Plague Shot",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:sleepless-season",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "bTFWSpHEvXq8IK37",
      "slug": "sleepless-season",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/anathematic-reprisal.webp"
    },
    "sourceHash": "sha256:6e8fec9918250f970119814de8133b918373e179a6f2ec4082776aa47889988d",
    "translatableHash": "sha256:c7daf202dbe6613a30fe3b22898b962e8addf89a74665606462ba29fea808863",
    "data": {
      "schemaVersion": 1,
      "name": "Sleepless Season",
      "rank": 6,
      "rarity": "uncommon",
      "traits": [
        "curse",
        "mental"
      ],
      "traditions": [],
      "description": "You attempt to inflict a curse of sleeplessness upon individuals in the target area to weaken their resolve, possibly making it easier to conquer them. As you successfully complete the ritual, the amethyst pendant crumbles into sand that travels on an unfelt wind to drift down onto the target area. Each living creature in the target area must attempt a Fortitude saving throw against the ritual's casting DC or become unable to gain the benefits of a full night's rest for 1 week. The curse can be removed before that time with cleanse affliction or similar magic.\nCritical Success Sleep is unattainable for anyone in the target area who fails the saving throw. As usual, a living creature who goes more than 16 hours without sleeping becomes Fatigued. A target who becomes fatigued in this way is also Enfeebled 1; the value of this condition can't be reduced while they're fatigued. For every subsequent day an affected target is fatigued, the value of their enfeebled condition increases by 1 (to a maximum of 4).\nSuccess Sleep can only be caught in short bursts for anyone in the target area who fails the saving throw. As critical success, but a fatigued target doesn't become enfeebled.\nFailure The ritual has no effect.\nCritical Failure The notion of sleep itself abandons the casters. The casters become fatigued and can't gain the benefits of a full night's rest for 1 month. This is a curse effect.",
      "castingTime": "4 hours",
      "range": "5 miles",
      "target": "",
      "area": "5280 square",
      "duration": "1 week",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 777,
        "uuid": "Compendium.pf2e.conditionitems.Item.Fatigued",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Fatigued",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Fatigued",
          "sourceId": "HL2l2VRSaQHu9lUw",
          "name": "Fatigued",
          "type": "condition"
        },
        "owner": {
          "sourceId": "bTFWSpHEvXq8IK37",
          "name": "Sleepless Season",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 880,
        "uuid": "Compendium.pf2e.conditionitems.Item.Enfeebled",
        "label": "Enfeebled 1",
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
          "sourceId": "bTFWSpHEvXq8IK37",
          "name": "Sleepless Season",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:sprawling-tunnels",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "rsYeiz2V2KeEfjpr",
      "slug": "sprawling-tunnels",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/earthquake.webp"
    },
    "sourceHash": "sha256:6990fe53bf76a5bb0bdab03eeba42c2b616d94b1c55e83f1bf34aaa6cdde2f20",
    "translatableHash": "sha256:1bd3cc8ee179d3489f33edbe26c5f7c8a326f7d7afdbb3323ad1cc43c09c3f77",
    "data": {
      "schemaVersion": 1,
      "name": "Sprawling Tunnels",
      "rank": 7,
      "rarity": "uncommon",
      "traits": [
        "earth"
      ],
      "traditions": [],
      "description": "You spill the ink on an accurate map of the area, which transforms into a series of lines that correspond to a new network of tunnels under the earth. A momentary shift, like the aftershock of a distant earthquake, is the only aboveground sign that anything has occurred. You choose a single entrance and exit to these tunnels, which must be locations within range that are known to you, though you need not be familiar with them. For example, you could name \"the basement of the town hall\" as an exit if you knew the town hall had a basement but had never seen it with your own eyes. If either named entrance or exit doesn't exist, the ritual fails. The entrance and exit are difficult to spot, requiring a successful check (perception, dc:35) check to see; the casters automatically succeed at this check.\nThe tunnels avoid existing subterranean features and underground structures, unless they're designated as an entrance or an exit. The tunnels are 10 feet wide and 15 feet high, providing room for most armies, but the passageways twist and turn, making navigation difficult. A creature can lead groups through the tunnels with a successful check (survival, dc:32) check to Sense Direction. On a success, the group reaches the other end of the tunnels in 2 hours. Failure on this check means the group gets lost within the tunnels for 4 hours, after which the leader can attempt the check again. A critical failure means that the group spends 8 hours wandering through the tunnels, only to arrive where they entered; the leader can attempt the check again the next day.\nIf any creature is in the tunnels when the ritual's duration ends, it's harmlessly pushed to the nearest entrance or exit.\nCritical Success The map provides some indication of the layout of the tunnels. A creature with the map gains a +2 circumstance bonus to the Survival check to navigate the tunnels. Any creatures not allied with the casters take a –2 circumstance penalty to the Perception check to spot the entrance and exit.\nSuccess As critical success, but the bonus to the Survival check is +1, and the penalty to the Perception check is –1.\nFailure The ritual has no effect.\nCritical Failure The ground beneath your feet rebels against your attempt to control it. The casters are attacked by a pair of elite Elemental Avalanches.",
      "castingTime": "8 hours",
      "range": "5 miles",
      "target": "",
      "area": null,
      "duration": "1 week",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 2410,
        "uuid": "Compendium.pf2e.pathfinder-monster-core.Actor.Elemental Avalanche",
        "label": "Elemental Avalanches",
        "target": {
          "uuid": "Compendium.pf2e.pathfinder-monster-core.Actor.Elemental Avalanche",
          "package": "pf2e",
          "sourcePack": "pathfinder-monster-core",
          "documentType": "Actor",
          "compendiumKey": "Elemental Avalanche",
          "sourceId": "Oq31fcKwH0EE9R89",
          "name": "Elemental Avalanche",
          "type": "npc"
        },
        "owner": {
          "sourceId": "rsYeiz2V2KeEfjpr",
          "name": "Sprawling Tunnels",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:encroaching-woods",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "BNkgZi1bcQcVmBHp",
      "slug": "encroaching-woods",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/protector-tree.webp"
    },
    "sourceHash": "sha256:c2bb8856d4d3df1488c31fef57810156fd7b34a6af44e41b98c022745a0c99b7",
    "translatableHash": "sha256:d4b1efc324b518f7a8e8007aa9dd49572d5be4e9be8b06152556652fcbe93c8d",
    "data": {
      "schemaVersion": 1,
      "name": "Encroaching Woods",
      "rank": 8,
      "rarity": "uncommon",
      "traits": [
        "plant"
      ],
      "traditions": [],
      "description": "You entreat the spirits of a nearby wood to cloak the movements of you and your allies. Each day at dawn following the successful completion of the ritual, the trees and other plants of the affected area move up to 500 feet in a direction of your choosing. There must be enough open space for the trees to move into, maintaining the general shape and size of the affected area. Large fortifications, such as city walls, and inhospitable natural features, such as wide rivers, will stop the trees, but the forest can shape itself around small buildings and streams. The trees traverse the distance over the course of 5 minutes, which is slow enough for most creatures within the forest to move along with them if they desire. However, anyone watching the forest from outside doesn't immediately perceive the movement unless they succeed at a Perception check against the ritual's casting DC. After this movement, the fact that the trees have changed their positions is obvious.\nDuring the ritual's duration, creatures within the forest are obscured to those outside the forest, as determined by the ritual's degree of success. This cover is usually used to stealthily approach opposing armies or settlements.\nOnce the ritual's duration has ended, the trees remain in their last location. They are affected normally by anything in their current environment that would prevent or stunt plant growth, such as a change of soil type or water quality, though such issues occur at the usual rate.\nCritical Success The affected trees sprout obscuring foliage, causing any creature within the forest to be undetected to creatures outside the forest. Each creature in the forest also gains greater cover.\nSuccess As critical success, but the creatures inside the forest are Hidden to creatures outside the forest and gain standard cover.\nFailure The ritual has no effect.\nCritical Failure The primal energy of the forest lashes out at you, cursing you to become one of the trees you sought to control. Each caster immediately gains the petrified condition, though they're solid wood instead of stone. Instead of the normal Hardness, a petrified caster has a Hardness of 5 and a weakness to axes equal to their level. The DC to counteract this condition is the ritual's casting DC.",
      "castingTime": "1 day",
      "range": "100 feet",
      "target": "a section of forest no larger than 1,000 square feet",
      "area": null,
      "duration": "1 week",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1833,
        "uuid": "Compendium.pf2e.conditionitems.Item.Hidden",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Hidden",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Hidden",
          "sourceId": "iU0fEDdBp3rXpTMC",
          "name": "Hidden",
          "type": "condition"
        },
        "owner": {
          "sourceId": "BNkgZi1bcQcVmBHp",
          "name": "Encroaching Woods",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:antimagic-artifice",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "LmtwcpYmrJfhGIZY",
      "slug": "antimagic-artifice",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/dimensional-anchor.webp"
    },
    "sourceHash": "sha256:1ca4cf9276bb8c8cd4a50f9a771e169de6fa9b1d810a7d5e27cb781a144f7f36",
    "translatableHash": "sha256:6178fdf04afbebd7bb02d8474091ca8407867de9f97fdeebf13b0d63ffb92ea4",
    "data": {
      "schemaVersion": 1,
      "name": "Antimagic Artifice",
      "rank": 9,
      "rarity": "rare",
      "traits": [],
      "traditions": [],
      "description": "You anoint a seemingly harmless item with the power to disrupt magic. As part of performing this ritual, you set a trigger for when the target object activates. The object remains enchanted for 1 week or until it's activated, whichever comes first.\nFor 10 minutes after the object is activated, magic is suppressed within an emanation centered on the object. Spells can't penetrate the area, magic items cease to function within it, and no one inside can cast spells or use magic abilities. Likewise, spells—such as dispel magic—can't affect the emanation unless they're of a higher rank than the ritual. Magic effects resume the moment they pass outside the emanation. For example, a caster outside of the emanation could target a fireball on a spot on the other side of the emanation, even if the line of effect passes through the emanation. A summoned creature winks out of existence if it enters the emanation but reappears if the emanation ends. Invested magic items cease to function, but they remain invested and resume functioning when they exit the emanation; the attribute boost from an apex item isn't suppressed within the field. Spells of a higher rank than antimagic artifice overcome its effects and can even be cast by a creature within the field.\nThe emanation disrupts only magic, so a +3 longsword still functions as a longsword. Magically created creatures (such as constructs with the magical trait) function normally within the emanation.\nCritical Success When triggered, the antimagic emanation has a radius of 100 feet. The ritual casters are unaffected by the emanation.\nSuccess When triggered, the antimagic emanation has a radius of 50 feet.\nFailure The ritual has no effect.\nCritical Failure The magic of the ritual backfires, scrambling the casters' minds. Each caster is Stupefied 4. The value of this condition is reduced by 1 for each day that passes, and it can't be removed or reduced by any other means.",
      "castingTime": "1 day",
      "range": "touch",
      "target": "one inanimate object of 1 Bulk or less",
      "area": null,
      "duration": "1 week (see text)",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1919,
        "uuid": "Compendium.pf2e.conditionitems.Item.Stupefied",
        "label": "Stupefied 4",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Stupefied",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Stupefied",
          "sourceId": "e1XGnhKNSQIm5IXg",
          "name": "Stupefied",
          "type": "condition"
        },
        "owner": {
          "sourceId": "LmtwcpYmrJfhGIZY",
          "name": "Antimagic Artifice",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:halt-death",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "NQk8Cabhhw7jXkg0",
      "slug": "halt-death",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:747416e9051ce008544ffa79313e75a9e39bd90986ddb8c12d8ed699f98ffa51",
    "translatableHash": "sha256:0da797d5a9f8412daa04d0287b7a098a0d0f5958f80ae6508b5a88ed850eb7c7",
    "data": {
      "schemaVersion": 1,
      "name": "Halt Death",
      "rank": 10,
      "rarity": "rare",
      "traits": [
        "vitality"
      ],
      "traditions": [],
      "description": "While death may be war's stock and trade, you attempt to momentarily delay the inevitable. Upon the successful completion of the ritual, the sands of the hourglass begin to slowly float upward into the upper bulb over the course of the next 24 hours. The hourglass shatters at the end of the ritual's duration, ending the protective magic.\nCritical Success All living creatures within the area are guarded against death, gaining a +4 status bonus to saving throws against death effects. In addition, when a living creature in the area succeeds at a recovery check, they get a critical success instead. Finally, the first time during the duration that a living creature would be reduced to dying 2 or higher, that creature remains at dying 1 instead.\nSuccess All living creatures within the area are guarded against death, gaining a +2 status bonus to saving throws against death effects. In addition, the first time during the duration that a living creature would be reduced to dying 3 or higher, that creature remains at dying 2 instead.\nFailure The ritual has no effect.\nCritical Failure Attempting to stave off death earns Pharasma's ire. You and all the secondary casters become Doomed 2. This condition can't be reduced or removed for 1 week.\nEffect: Halt Death",
      "castingTime": "8 hours",
      "range": "",
      "target": "all living creatures",
      "area": "5280 emanation",
      "duration": "1 day",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1288,
        "uuid": "Compendium.pf2e.conditionitems.Item.Doomed",
        "label": "Doomed 2",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Doomed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Doomed",
          "sourceId": "3uh1r86TzbQvosxv",
          "name": "Doomed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "NQk8Cabhhw7jXkg0",
          "name": "Halt Death",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1411,
        "uuid": "Compendium.pf2e.spell-effects.Item.Effect: Halt Death",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Effect: Halt Death",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Effect: Halt Death",
          "sourceId": "GFR5RwR8qW2jIJKP",
          "name": "Effect: Halt Death",
          "type": "effect"
        },
        "owner": {
          "sourceId": "NQk8Cabhhw7jXkg0",
          "name": "Halt Death",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:mindscape-door",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "8MAHUK6jphbME4BR",
      "slug": "mindscape-door",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/mindscape-door.webp"
    },
    "sourceHash": "sha256:4fa58a40c1733bae0ba08fdfffd61324da9f16ddf2100fbdf3bc9e3f8a80f16b",
    "translatableHash": "sha256:e5f4648f9c991c36b3f26e3ef971d19cb277a1d4e27399360fa3a17d15620858",
    "data": {
      "schemaVersion": 1,
      "name": "Mindscape Door",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "illusion"
      ],
      "traditions": [],
      "description": "You project the targets into an immersive mindscape or cause them to exit one. You must be aware the mindscape exists, though you don't need to know specifics. The casters must be in physical contact with one another in a circle for the duration of the casting and all targets must be selected from these casters. Your bodies typically remain behind in stasis when you enter a mindscape, though some mindscapes pull you entirely into them upon entrance. If you enter a mindscape, you can leave only by using another mindscape door ritual, finding an exit within the nature of the mindscape, or when the mindscape ceases to exist. When exiting a mindscape, you typically return to your bodies or to the location where you entered the mindscape. If the mindscape's creator wants to prevent anyone from entering or exiting, the DC of the primary check is the creator's Will DC if that would be higher than the ritual's normal DC.\nCritical Success You transport the creatures as you intended and can leave a portal that lasts for an unlimited duration. It typically looks like an ordinary door or passage appropriate to the mindscape. Any target of the spell can enter or exit through this portal as they would an ordinary door. If you wish, you can make the door passable by anyone.\nSuccess You transport the creatures as you intended.\nFailure You fail to enter or exit the mindscape.\nCritical Failure Something goes horribly wrong. The GM decides whether mental feedback deals 9d6 mental damage to all ritual casters (check (will, dc:26, basic)) or 1d4 casters are unwillingly pulled into the mindscape (or ejected from it).\nHeightened (8th) The ritual targets up to 100 willing creatures, the critical failure damage increases to 20d6, and the critical failure save DC increases to 40.",
      "castingTime": "1 hour",
      "range": "touch",
      "target": "yourself and up to 5 willing creatures",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (8th) The ritual targets up to 100 willing creatures, the critical failure damage increases to 20d6, and the critical failure save DC increases to 40."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:contact-friends",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "9vDmTCHyAWdWWPIs",
      "slug": "contact-friends",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/contact-friends.webp"
    },
    "sourceHash": "sha256:91453aac3e917b0b49096ccef63f4f12e4b313a805ebcd0ff9931e68d150c3a8",
    "translatableHash": "sha256:4d18b6c6e4f8f9fbd5d833f134a1f0749fdd1f9da36945d1e7c76ac3ccdac2be",
    "data": {
      "schemaVersion": 1,
      "name": "Contact Friends",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [],
      "traditions": [],
      "description": "You meditate for a quiet moment before your mind seeks out others whom you have befriended, as well as friends of any of the secondary casters. The ritual projects your mind to a blank space where you see one or more friends from your past. Once there, you can ask each friend a single question. If more than one friend is present, you can ask each one a different question. These friends aren't compelled to answer you honestly or answer at all, but those who are your friends are likely to help you if they can, barring special situations.\nCritical Success You contact up to three close friends of yourself or any of the secondary casters, and the friends attempt to help you with their knowledge. They each answer one of your questions, as described above.\nSuccess As critical success, but your mind reaches one friend, instead of three.\nFailure Your mind reaches three friends you've made in the past, but each of them gives you a useless fact. None of these facts help with your situation at all.\nCritical Failure Your mind freezes. You saw something that terrified you to your core, leaving you and all other casters Stupefied 3 for 1 day.",
      "castingTime": "1 hour",
      "range": "",
      "target": "",
      "area": null,
      "duration": "up to 10 minutes",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1229,
        "uuid": "Compendium.pf2e.conditionitems.Item.Stupefied",
        "label": "Stupefied 3",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Stupefied",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Stupefied",
          "sourceId": "e1XGnhKNSQIm5IXg",
          "name": "Stupefied",
          "type": "condition"
        },
        "owner": {
          "sourceId": "9vDmTCHyAWdWWPIs",
          "name": "Contact Friends",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:recall-past-life",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "bqx1tJeOZq1Ufhcc",
      "slug": "recall-past-life",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/recall-past-life.webp"
    },
    "sourceHash": "sha256:0213b16164dae0023991eb7d9e9bb7377a3efcf24c583815c700d0966c959f65",
    "translatableHash": "sha256:f27a0fdeabacf4cce72c5fe5260533684d5497d489682ea04c5354976ab51383",
    "data": {
      "schemaVersion": 1,
      "name": "Recall Past Life",
      "rank": 4,
      "rarity": "rare",
      "traits": [],
      "traditions": [],
      "description": "You and the secondary casters spend 2 days drawing sigils on one another. At the end of the second day, the secondary caster responsible for the Crafting check carefully mixes the wine with the herbs and a small amount of saliva or blood from the target. The target then drinks the concoction, entering a state of metaphorical death and rebirth, their body becoming comatose for the final day of the ritual. During this time, you and the other secondary caster bathe the body in dirt, symbolizing a grave, and sprinkle the remainder of the wine around the body. If done properly, swaddled baby orchids grow around the area, enveloping the body in a bed of flowers.\nOn the final hour, the target returns to life, waking up temporarily possessed by an incarnation from one of their past lives. Though they retain the memories from their current life, their demeanor and personality are different for the remaining duration of the ritual, and they also remember vivid details from their past life. Unfortunately, it's impossible to choose a particular past self or to know whether a given former incarnation has good or bad intentions.\nCritical Success The target's personality reverts to a previous incarnation, determined by the GM. Normally they keep their abilities, but in rare cases, the GM might determine that the past incarnation has a different set of abilities based on their previous life. The lingering knowledge of the past incarnation is powerful and sticks with the target, allowing them to retrain one of their skills increases into a skill in which the past incarnation was particularly talented; the list of possible skills depends on the nature of the past incarnation and is determined by the GM.\nSuccess As critical success, except there's no lingering knowledge, and the target isn't able to retrain a skill increase.\nFailure Nothing happens, though the target's Unconscious state is disturbing, and they wake up Fatigued as well as likely disoriented.\nCritical Failure The sigils are drawn improperly, or the wine was tainted. The swaddled baby orchids that grow around the body scream at the moment when the target would've awakened. The target dies and their body is immediately possessed by a malevolent spirit that seeks to destroy their former allies. Use the statistics for a Ghost Commoner using Malevolent Possession on the target's body.",
      "castingTime": "3 days",
      "range": "",
      "target": "the secondary caster who doesn't perform the Crafting check",
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
        "sourceIndex": 1970,
        "uuid": "Compendium.pf2e.conditionitems.Item.Unconscious",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Unconscious",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Unconscious",
          "sourceId": "fBnFDH2MTzgFijKf",
          "name": "Unconscious",
          "type": "condition"
        },
        "owner": {
          "sourceId": "bqx1tJeOZq1Ufhcc",
          "name": "Recall Past Life",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 2063,
        "uuid": "Compendium.pf2e.conditionitems.Item.Fatigued",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Fatigued",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Fatigued",
          "sourceId": "HL2l2VRSaQHu9lUw",
          "name": "Fatigued",
          "type": "condition"
        },
        "owner": {
          "sourceId": "bqx1tJeOZq1Ufhcc",
          "name": "Recall Past Life",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 2500,
        "uuid": "Compendium.pf2e.pathfinder-monster-core.Actor.Ghost Commoner",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.pathfinder-monster-core.Actor.Ghost Commoner",
          "package": "pf2e",
          "sourcePack": "pathfinder-monster-core",
          "documentType": "Actor",
          "compendiumKey": "Ghost Commoner",
          "sourceId": "N98ug9jQHqeFoK1N",
          "name": "Ghost Commoner",
          "type": "npc"
        },
        "owner": {
          "sourceId": "bqx1tJeOZq1Ufhcc",
          "name": "Recall Past Life",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 2574,
        "uuid": "Compendium.pf2e.bestiary-family-ability-glossary.Item.(Ghost) Malevolent Possession",
        "label": "Malevolent Possession",
        "target": {
          "uuid": "Compendium.pf2e.bestiary-family-ability-glossary.Item.(Ghost) Malevolent Possession",
          "package": "pf2e",
          "sourcePack": "bestiary-family-ability-glossary",
          "documentType": "Item",
          "compendiumKey": "(Ghost) Malevolent Possession",
          "sourceId": "iwLj14liESK5OBN8",
          "name": "(Ghost) Malevolent Possession",
          "type": "action"
        },
        "owner": {
          "sourceId": "bqx1tJeOZq1Ufhcc",
          "name": "Recall Past Life",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:construct-mindscape",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Pp88ueeq4AlkaL6g",
      "slug": "construct-mindscape",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/construct-mindscape.webp"
    },
    "sourceHash": "sha256:9c401c1b62bf2e26c6c3cc549628ad467b90e39e2eac5ebea325b6110662a087",
    "translatableHash": "sha256:0b7a66dbcc8a3b9af63316d06e31ea43bc72f27eccdb421172aa36822e5c557b",
    "data": {
      "schemaVersion": 1,
      "name": "Construct Mindscape",
      "rank": 5,
      "rarity": "rare",
      "traits": [
        "illusion"
      ],
      "traditions": [],
      "description": "You create an entirely mental environment called an immersive mindscape. It can have any appearance you and the secondary casters imagine and hold in your minds as you execute the ritual. A mindscape is typically veiled, disguising its nature as a mental construct, but you can choose to make it overt. Even a veiled mindscape has some signs it's not a real place that can be revealed through close inspection or by spending a long time there. Most mindscapes are incapable of physically harming those inside. Even though the mindscape you create is limited in dimension, it appears to have a convincing environment around it, such as a sky and clouds.\nCritical Success You create a mindscape approximately a half-mile in length and width, and 50 feet in height (large enough to contain a typical village). The GM might allow you to make it larger if it has little detail, such as a grassy plain. You and any secondary casters of your choice can enter it and you can leave a doorway that you and any creatures you designate can pass through.\nSuccess As critical success, but the mindscape is approximately 25 feet in length, width, and height (like a modest house).\nFailure You can't hold the image together and it falls apart.\nCritical Failure Your secret desires horribly warp the mindscape into a distorted mirror of what you intended.\nHeightened (6th) The duration is 1 week.\nHeightened (9th) The duration is 1 year, and the area on a critical success is 1 mile in length and width.\nHeightened (10th) The duration is unlimited, and the area on a critical success is 1 mile in length and width. The cost increases to 2,000 gp.",
      "castingTime": "1 day",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 day",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (6th) The duration is 1 week.\nHeightened (9th) The duration is 1 year, and the area on a critical success is 1 mile in length and width.\nHeightened (10th) The duration is unlimited, and the area on a critical success is 1 mile in length and width. The cost increases to 2,000 gp."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:oblivious-expulsion",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "QIjc7Zyej0P3b9v5",
      "slug": "oblivious-expulsion",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/oblivious-expulsion.webp"
    },
    "sourceHash": "sha256:77a69dab053170893913887396ae2a0f0677ed5ee0bcb52aa7a1a15287f54247",
    "translatableHash": "sha256:f78e2cc99efac22940346c4a4ea75955ee767a6852b40898a8c3ccb3c8629e83",
    "data": {
      "schemaVersion": 1,
      "name": "Oblivious Expulsion",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "mental"
      ],
      "traditions": [],
      "description": "Severing ties with a member of a cult courts danger and threatens to undermine the secrecy of the group, whether that secrecy protects its worshippers or enables them to operate in the shadows. Many cults end their association with a wayward member on the edge of a blade, but there are options that preserve both secrecy and the life of the expelled member. An oblivious expulsion removes knowledge of the cult but is time-consuming enough that a cult usually reserves it for only the most well-regarded members who nevertheless need to be removed-or for sleeper agents the cult wishes to place among society and activate later.\nIt's difficult to cast this ritual unless the target is willing or Restrained. If the creature is unwilling to accept the ritual, it can attempt a Will save to negate the effect. The effects of the ritual depend on the results of your Occultism check.\nCritical Success The ritual removes all memories of the cult's activity, practices, and secrets from the target's memory. The target remembers only what an average citizen of the larger society would know, which is typically nothing or a few rumors with very little detail. The spell is hard to detect: a Detect Magic spell or similar effect must be a higher rank than oblivious expulsion to detect it. You can Dismiss the spell. While casting the spell, you can choose to give the secondary casters the ability to Dismiss it. You can also choose to set a key phrase or event that causes the spell to be Dismissed. When the target witnesses this phrase or event, the spell immediately ends.\nSuccess As critical success, except the spell isn't harder to detect with detect magic.\nFailure The ritual fails.\nCritical Failure The ritual fails, and the target is temporarily immune for 1 month.",
      "castingTime": "1 day",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "unlimited",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 707,
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
          "sourceId": "QIjc7Zyej0P3b9v5",
          "name": "Oblivious Expulsion",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1269,
        "uuid": "Compendium.pf2e.spells-srd.Item.Detect Magic",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Detect Magic",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Detect Magic",
          "sourceId": "gpzpAAAJ1Lza2JVl",
          "name": "Detect Magic",
          "type": "spell"
        },
        "owner": {
          "sourceId": "QIjc7Zyej0P3b9v5",
          "name": "Oblivious Expulsion",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:bacchanalia",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "s0SerOrkkUd7SAH9",
      "slug": "bacchanalia",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/bacchanalia.webp"
    },
    "sourceHash": "sha256:b84c00253fdfbc4862484780b0a29be63a4ad75edb24e8db89547880916cb342",
    "translatableHash": "sha256:d9aa537ebf64b0ce551251470b82a5f9cb59ba14ecb709ec7eba840854b449a3",
    "data": {
      "schemaVersion": 1,
      "name": "Bacchanalia",
      "rank": 6,
      "rarity": "uncommon",
      "traits": [
        "emotion",
        "mental"
      ],
      "traditions": [
        "divine",
        "occult"
      ],
      "description": "You hold an elaborate feast and stoke the celebratory spirit, causing it to spread to other people nearby; you buoy them with hope and good cheer as they revel into the night. The ritual was first developed by the cult of the hero-god Kelksiomides in Iblydos and meant to be a benefit to the community during hard times, though other groups have used it for far different purposes, such as to spread chaos or to provide cover for a heist.\nYou and the secondary casters begin your feast in a public space where others can see you, exactly 8 hours before dusk. When dusk falls, you complete the ritual. The party spreads outward from your initial site until it slowly encompasses the settlement (for a town or smaller), or a district or division of up to approximately 1,000 people (for a larger settlement). Those partaking in the celebration are Fascinated until the ritual comes to an end (or someone uses a hostile action toward them, as usual). The partying appears to spread naturally, as others see the revelers, they too slowly join until the celebration reaches its peak size. The spell's effect ends sharply at midnight, but that doesn't mean people stop partying right away if they're enjoying themselves.\nCritical Success The party is a huge hit! The effects work as above, except that in a larger settlement, the celebration can spread to an area with as many as 10,000 people. Furthermore, the celebration leaves strong memories in the hearts of those who participated, causing locals to commemorate it or possibly outlaw such celebrations (depending on their view of the event).\nSuccess The party is successful. It spreads as described in the ritual's description.\nFailure The party never really catches on. You and the secondary casters get to celebrate, but the most other people do is give you odd looks.\nCritical Failure Instead of celebration, you inspire anger and resentment toward you and the secondary casters for disturbing the peace or possibly even deepening the despair of a people who are already troubled. People in the area have their attitudes toward you temporarily adjusted two steps worse than normal. Those who become hostile won't necessarily attack you, but they will mock you, break up your revelry, and potentially arrest you.",
      "castingTime": "1 day",
      "range": "",
      "target": "",
      "area": null,
      "duration": "until midnight (see text)",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 856,
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
          "sourceId": "s0SerOrkkUd7SAH9",
          "name": "Bacchanalia",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:supreme-connection",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "6TKGaQm4PfEMkeRd",
      "slug": "supreme-connection",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/supreme-connection.webp"
    },
    "sourceHash": "sha256:e0975e930925a0d595484773b72b85ce5f91ba8363f50d8b2b7020244a729929",
    "translatableHash": "sha256:96e805e5241b1a01e286b3753cbc3e4f9a25306c983c1085097a9aea8e5bbf8f",
    "data": {
      "schemaVersion": 1,
      "name": "Supreme Connection",
      "rank": 7,
      "rarity": "uncommon",
      "traits": [],
      "traditions": [],
      "description": "In a show of power, you call forth a powerful entity in front of a crowd of onlookers, forcing the entity to manifest and answer your questions. The being appears as a twisted ball of vines and branches that springs forth from a nearby patch of dirt or up from between cobblestones or bricks. The ball of vines is relatively formless, giving no indication of the being that controls it. However, when you make a request, it twists into a rough face to answer your request.\nYou can ask up to seven questions that could be answered with \"yes\" or \"no,\" although the entity can give you any one working answer it wants, including vague answers like \"likely\" or \"unknown.\" The entity is likely to know answers related to its nature and priorities. Depending on the entity you call, it might attempt to deceive you and likely has its own agenda. The entity can only respond when surrounded by the energy of a crowd.\nOnce it has answered your questions, the vines freeze in place, contorted in pain, a reminder of where the powerful creature touched this world.\nCritical Success The entity is in a good mood or is more honest than most. It won't attempt to deceive you, though it still might not know the answers. When it's important to provide clarity, the entity will answer your questions with up to five words, such as \"if you leave immediately\" or \"that was true once.\" The words of the entity ring with truth, and the crowd takes the statements as gospel. You gain a +4 circumstance bonus to Diplomacy checks made to influence the crowd and to any Deception checks to Lie to the crowd by directly incorporating the entity's answers.\nSuccess You can ask and receive your seven answers normally. The crowd is excited by the entity's words and believes them to be true. You gain a +2 circumstance bonus to Diplomacy checks made to influence the crowd and to any Deception checks to Lie to the crowd by directly incorporating the entity's answers.\nFailure The vines reach out in a weighted gasp before dying. The crowd is likely disappointed, especially if you made them wait, but they don't necessarily change their attitude toward you.\nCritical Failure The vines wrap around you in desperation, trying to squeeze out your life force to survive. You take 10d6 bludgeoning damage and become Drained 3, and you can't reduce the drained condition for 1 week. The attitude of the most members of the crowd toward you become one step worse, though individual members of the crowd might have different reactions.",
      "castingTime": "1 day",
      "range": "",
      "target": "",
      "area": null,
      "duration": "up to 10 minutes",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 2416,
        "uuid": "Compendium.pf2e.conditionitems.Item.Drained",
        "label": "Drained 3",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Drained",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Drained",
          "sourceId": "4D2KBtexWXa6oUMR",
          "name": "Drained",
          "type": "condition"
        },
        "owner": {
          "sourceId": "6TKGaQm4PfEMkeRd",
          "name": "Supreme Connection",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:vital-singularity",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "KkimKrhDxEJVm6TH",
      "slug": "vital-singularity",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/vital-singularity.webp"
    },
    "sourceHash": "sha256:17e37a3e73a9017a12ca5caffeedd05cddc824586c64109d374319aebbcecead",
    "translatableHash": "sha256:c3899775963c3f7a6e60ad7d59f8c6488f3bd3a35604cdc043af2b6339a6dcc2",
    "data": {
      "schemaVersion": 1,
      "name": "Vital Singularity",
      "rank": 9,
      "rarity": "uncommon",
      "traits": [],
      "traditions": [],
      "description": "When several companions or followers have reached a point of undying love and trust in you, they might be willing to die to save your life. You can grant them that wish. The secondary casters must be living creatures willing to sacrifice their energy to you, by allowing their life essence to drain out of them to protect you whenever you're in danger. If you're undead, the secondary casters must be undead instead, and if you're neither living nor undead, you can't cast vital singularity. Whenever you take damage, after calculating the total amount of damage, including immunities, resistances, weaknesses, and any other increases or mitigation, divide the amount by 4, rounding down. You and each of the secondary casters lose that many Hit Points. If a secondary caster doesn't have enough Hit Points to give before dropping to 0 Hit Points, you take any remaining damage for them as well. When a secondary caster reaches 0 Hit Points in this way, their skin dries out like leather as the last of their life leaves their bodies; this is a death effect.\nCritical Success The light from your secondary casters envelops you in a warm radiance. In addition to the effects described above, you're healed to full Hit Points upon completion of the ritual.\nSuccess The secondary casters channel their energies to you, protecting you as described above.\nFailure The secondary casters cry out in sorrow, reaching out to you to feel your embrace, then they grow sad that they couldn't live up to your expectations. Nothing else happens.\nCritical Failure The secondary casters' attempts to unite with you become desperate, but ultimately, the only function of the link was to disorient all of you, making your bodies feel like they aren't your own. You and all secondary casters become Clumsy 3 for 3 days.",
      "castingTime": "1 hour",
      "range": "",
      "target": "",
      "area": null,
      "duration": "3 hours",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1886,
        "uuid": "Compendium.pf2e.conditionitems.Item.Clumsy",
        "label": "Clumsy 3",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Clumsy",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Clumsy",
          "sourceId": "i3OJZU2nk64Df3xm",
          "name": "Clumsy",
          "type": "condition"
        },
        "owner": {
          "sourceId": "KkimKrhDxEJVm6TH",
          "name": "Vital Singularity",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:power-of-the-beasts",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "otdzpPYzWMJt76Rh",
      "slug": "power-of-the-beasts",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia World Guide",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:f4d5313bef5dbe349a9fd8cabc9ecf7a901e8a0cfc9912b326397694005991bf",
    "translatableHash": "sha256:638b516eabcbf1bcf57fa5c0f001079e154e8c22df55524f2a0ca85f6d2ba5e2",
    "data": {
      "schemaVersion": 1,
      "name": "Power of the Beasts",
      "rank": 2,
      "rarity": "rare",
      "traits": [
        "trial"
      ],
      "traditions": [],
      "description": "To simply kill the magical beasts who populate Tian Xia is needless and wasteful. The gods reward a hunter who seeks to truly understand their prey, approaching the creatures on their own level and seeking to gain their strength. Powdering the bones of strong beasts, for use in a soup or wine, is often the first step in the process of capturing part of their power.\nUsing weapons is anathema to this ritual and immediately ends its benefits. If the ritual is ended in this way, you must conduct an Atone ritual before attempting this ritual again.\nCritical Success As success, except you can defeat three enemies that are only one size larger than you instead.\nSuccess The power begins to take root. Once you've defeated an enemy two or more sizes larger than you in single combat, you gain the Titan Wrestler feat.\nFailure You drink the soup or wine, but the understanding eludes you.\nCritical Failure The drink contains shards of bone you didn't grind down properly. You're Sickened 2 for 1 week, during which the condition can't be reduced.",
      "castingTime": "1 day",
      "range": "",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 510,
        "uuid": "Compendium.pf2e.spells-srd.Item.Atone",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Atone",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Atone",
          "sourceId": "7Fd4lxozd11MQ55N",
          "name": "Atone",
          "type": "spell"
        },
        "owner": {
          "sourceId": "otdzpPYzWMJt76Rh",
          "name": "Power of the Beasts",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 901,
        "uuid": "Compendium.pf2e.feats-srd.Item.Titan Wrestler",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.feats-srd.Item.Titan Wrestler",
          "package": "pf2e",
          "sourcePack": "feats-srd",
          "documentType": "Item",
          "compendiumKey": "Titan Wrestler",
          "sourceId": "KxaYlC50zzHysJj8",
          "name": "Titan Wrestler",
          "type": "feat"
        },
        "owner": {
          "sourceId": "otdzpPYzWMJt76Rh",
          "name": "Power of the Beasts",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1168,
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
          "sourceId": "otdzpPYzWMJt76Rh",
          "name": "Power of the Beasts",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:wild-allegiance",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "BBw5oGFvoQc3gg52",
      "slug": "wild-allegiance",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia World Guide",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:a93cadee8effe99282c0f46e1f429fc906a9d06eb3685b5a125e5d8527b00d07",
    "translatableHash": "sha256:5dbb13b5aa266605b570047f71addfd488119300b927247f738bdf8c809b6abd",
    "data": {
      "schemaVersion": 1,
      "name": "Wild Allegiance",
      "rank": 3,
      "rarity": "rare",
      "traits": [
        "trial"
      ],
      "traditions": [],
      "description": "To many, the animals of Tian Xia are simply beasts to be conquered or harvested, but this isn't how all of the gods intended it. You approach, feed, and commune with the most notably hostile beasts in an effort to forge a true friendship and allegiance with the natural world.\nWantonly attacking or killing animals is anathema to this ritual and immediately ends its benefits. If the ritual is ended in this way, you must conduct an Atone ritual before attempting this ritual again.\nCritical Success As success, except you can instead resolve a conflict with one animal of level 15 or higher.\nSuccess You declare your allegiance to the wild and are bound by the ritual's anathema, but you still must prove yourself. Once you've nonviolently resolved conflicts with three different animals of a higher level than yours, you gain the Animal Empathy feat.\nFailure Your actions don't impress the gods of the wilds.\nCritical Failure You deeply offend the gods you were trying to impress, and they send a sign of displeasure, often an animal attack. You must conduct an atone ritual before attempting this ritual again.",
      "castingTime": "1 day",
      "range": "",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 443,
        "uuid": "Compendium.pf2e.spells-srd.Item.Atone",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Atone",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Atone",
          "sourceId": "7Fd4lxozd11MQ55N",
          "name": "Atone",
          "type": "spell"
        },
        "owner": {
          "sourceId": "BBw5oGFvoQc3gg52",
          "name": "Wild Allegiance",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 934,
        "uuid": "Compendium.pf2e.feats-srd.Item.Animal Empathy",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.feats-srd.Item.Animal Empathy",
          "package": "pf2e",
          "sourcePack": "feats-srd",
          "documentType": "Item",
          "compendiumKey": "Animal Empathy",
          "sourceId": "cg816q76S5otM7yD",
          "name": "Animal Empathy",
          "type": "feat"
        },
        "owner": {
          "sourceId": "BBw5oGFvoQc3gg52",
          "name": "Wild Allegiance",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:seed-of-mercy",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "opXqASAY37ltENB8",
      "slug": "seed-of-mercy",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia World Guide",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:e2d4a046c2d7e4cd9b70be54af4ae3c5e526d128e20c2f73f8be2a8f0d781227",
    "translatableHash": "sha256:a44190df5b0a41651d38825656a620157d093fc66e736334b530b56226899629",
    "data": {
      "schemaVersion": 1,
      "name": "Seed of Mercy",
      "rank": 3,
      "rarity": "rare",
      "traits": [
        "trial"
      ],
      "traditions": [],
      "description": "The gods who value benevolence and the caretaking of small and vulnerable beings also value those qualities in the mortal adventurers who journey through the lands of Tian Xia. You demonstrate your willingness to aid even the most helpless of life by nursing a small, injured bird to health and allowing it to fly away to freedom, earning in return the protection of the natural world. If you're able to nurse the bird to health, it will return to you with a seed, which will grow into a sprout bearing a single flower.\nThe sprout withers if you don't personally water it with at least 1 Bulk of pure spring water a day or if it's left unattended in dangerous circumstances. It's anathema to this ritual to let the sprout wither, and doing so immediately ends its benefits. If the ritual is ended in this way, you must conduct an Atone ritual before attempting this ritual again.\nCritical Success As success, except the sprout also grows a single fruit after you've cared for it for a week. Removing the fruit causes the sapling to wither, but the fruit can be eaten as a Moderate Healing Potion.\nSuccess You nurse the bird to health. It returns to you with a seed that, when planted and watered, grows into a sprout with a single flower. Once you've cared for it for a week, you gain the Toughness feat. If you lose Toughness due to violating the ritual's anathema, you lose a number of Hit Points equal to the decrease in your maximum Hit Points.\nFailure You aren't able to heal the bird, but you help its passing to be as painless as possible.\nCritical Failure Your attempt to heal the bird causes greater suffering. Another bird brings you a seed that, if planted, will grow into a gourd that releases a small demon to attack you.",
      "castingTime": "1 day",
      "range": "",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 840,
        "uuid": "Compendium.pf2e.spells-srd.Item.Atone",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Atone",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Atone",
          "sourceId": "7Fd4lxozd11MQ55N",
          "name": "Atone",
          "type": "spell"
        },
        "owner": {
          "sourceId": "opXqASAY37ltENB8",
          "name": "Seed of Mercy",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1152,
        "uuid": "Compendium.pf2e.equipment-srd.Item.Healing Potion (Moderate)",
        "label": "Moderate Healing Potion",
        "target": {
          "uuid": "Compendium.pf2e.equipment-srd.Item.Healing Potion (Moderate)",
          "package": "pf2e",
          "sourcePack": "equipment-srd",
          "documentType": "Item",
          "compendiumKey": "Healing Potion (Moderate)",
          "sourceId": "G7haQ5gDt30ftJLC",
          "name": "Healing Potion (Moderate)",
          "type": "consumable"
        },
        "owner": {
          "sourceId": "opXqASAY37ltENB8",
          "name": "Seed of Mercy",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1462,
        "uuid": "Compendium.pf2e.feats-srd.Item.Toughness",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.feats-srd.Item.Toughness",
          "package": "pf2e",
          "sourcePack": "feats-srd",
          "documentType": "Item",
          "compendiumKey": "Toughness",
          "sourceId": "AmP0qu7c5dlBSath",
          "name": "Toughness",
          "type": "feat"
        },
        "owner": {
          "sourceId": "opXqASAY37ltENB8",
          "name": "Seed of Mercy",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:the-unseeing-blade-master",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "5xf9wK9xyAeGFPw7",
      "slug": "the-unseeing-blade-master",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia World Guide",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:f9248f20852788f4ded3915d55f8c99fb4a483e9db4e96f6ff71943b72293732",
    "translatableHash": "sha256:ea76fcf655dd70cc33d971122f2746c4c652a529a3ae0e38ce01779bc578e017",
    "data": {
      "schemaVersion": 1,
      "name": "The Unseeing Blade Master",
      "rank": 6,
      "rarity": "rare",
      "traits": [
        "trial"
      ],
      "traditions": [],
      "description": "There are many legends of blade masters who, not wanting to rely on flawed mortal eyes, learned to fight through reliance on both their other keen senses and knowledge from the universe itself. Those who intentionally seek out the path often do so by running through forms in thick clouds of incense.\nMaking a Strike against an enemy you can see is anathema to this ritual and immediately ends its benefits. If the ritual is ended in this way, you must conduct an Atone ritual before attempting this ritual again.\nCritical Success As success, except you can instead defeat an enemy in single combat that both uses a sword and is higher level than you.\nSuccess You call a blessing into your sword to guide you on the path and are bound by the ritual's anathema. Once you've used that sword against 20 enemies, each significant enough to grant XP, you gain the Blind-Fight feat.\nFailure The incense is dispersed by a strange gust of wind and you learn nothing.\nCritical Failure The sword you're intending to use for the ritual becomes broken. If you aren't permanently blind, you're instead Blinded for 1 month and can't repeat this ritual during that time.",
      "castingTime": "1 day",
      "range": "",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 474,
        "uuid": "Compendium.pf2e.spells-srd.Item.Atone",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Atone",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Atone",
          "sourceId": "7Fd4lxozd11MQ55N",
          "name": "Atone",
          "type": "spell"
        },
        "owner": {
          "sourceId": "5xf9wK9xyAeGFPw7",
          "name": "The Unseeing Blade Master",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 963,
        "uuid": "Compendium.pf2e.feats-srd.Item.Blind-Fight",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.feats-srd.Item.Blind-Fight",
          "package": "pf2e",
          "sourcePack": "feats-srd",
          "documentType": "Item",
          "compendiumKey": "Blind-Fight",
          "sourceId": "y2XeMe1F18lIyo59",
          "name": "Blind-Fight",
          "type": "feat"
        },
        "owner": {
          "sourceId": "5xf9wK9xyAeGFPw7",
          "name": "The Unseeing Blade Master",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1279,
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
          "sourceId": "5xf9wK9xyAeGFPw7",
          "name": "The Unseeing Blade Master",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:perfection-of-essence",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "kExRMPVI07iIFCaa",
      "slug": "perfection-of-essence",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia World Guide",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:23cc950347620f5b1fdb082ae79dc1fdd48176011b684f7a0ae65879493e494d",
    "translatableHash": "sha256:e57ee61dde996947feaca7afe0ab4ca7f8ea14504be412750ecdc26172b8ff81",
    "data": {
      "schemaVersion": 1,
      "name": "Perfection of Essence",
      "rank": 10,
      "rarity": "rare",
      "traits": [
        "trial"
      ],
      "traditions": [],
      "description": "Many have pursued alchemical means to immortality, and most haven't survived the attempt. The most common manner of purifying one's essence requires ingesting the following poison, and surviving the effects unassisted for at least a day.\nSaving Throw check (fortitude, dc:43)\nOnset 1 hour\nMaximum Duration 5 days\nStage 1 7d12 spirit damage plus Doomed 1 (1 hour)\nStage 2 9d12 spirit damage and Confused for 1 minute once every 1d4, plus Doomed 2 (1 hour)\nStage 3 9d12 spirit damage and Doomed 3 (1 day)\nStage 4 death\nAnathema for this ritual is determined at the time of the ritual. You choose 1 anathema, and the GM chooses 2 anathema. You're aware of all of your anathema. Appropriate anathema might include avoiding physical contact with a certain creature or substance (such as members of your bloodline or jade), eating certain foods (such as meat or grains), or wearing certain items or materials (such as silk or cotton). If the ritual is ended in this way, you must conduct an Atone ritual before attempting this ritual again.\nCritical Success As success, except you choose 1 anathema and your GM chooses 1 anathema.\nSuccess You've purified your body enough to attempt to attain immortality. You're bound by the ritual's anathema and must ingest the final potion to complete your apotheosis. Once you've withstood the effects of the poison for 1 day or completely recovered from the poison's effects without outside assistance, you gain immortality as follows: you don't age unless you wish to. You can't die except due to old age; if your dying or doomed condition would increase to a high enough value to kill you, it doesn't increase, and any effect that would instantly kill you instead just reduces you to 0 Hit Points. If you ever truly die and aren't returned to life within 1 year, you descend from the Heavens as an adult into a new mortal body somewhere in the world.\nFailure Your actions don't achieve immortality, and you automatically fail the first save against the poison.\nCritical Failure As failure, except the poison is also virulent.",
      "castingTime": "1 day",
      "range": "",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 460,
        "uuid": "Compendium.pf2e.conditionitems.Item.Doomed",
        "label": "Doomed 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Doomed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Doomed",
          "sourceId": "3uh1r86TzbQvosxv",
          "name": "Doomed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "kExRMPVI07iIFCaa",
          "name": "Perfection of Essence",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 594,
        "uuid": "Compendium.pf2e.conditionitems.Item.Confused",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Confused",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Confused",
          "sourceId": "yblD8fOR1J8rDwEQ",
          "name": "Confused",
          "type": "condition"
        },
        "owner": {
          "sourceId": "kExRMPVI07iIFCaa",
          "name": "Perfection of Essence",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 711,
        "uuid": "Compendium.pf2e.conditionitems.Item.Doomed",
        "label": "Doomed 2",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Doomed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Doomed",
          "sourceId": "3uh1r86TzbQvosxv",
          "name": "Doomed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "kExRMPVI07iIFCaa",
          "name": "Perfection of Essence",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 845,
        "uuid": "Compendium.pf2e.conditionitems.Item.Doomed",
        "label": "Doomed 3",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Doomed",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Doomed",
          "sourceId": "3uh1r86TzbQvosxv",
          "name": "Doomed",
          "type": "condition"
        },
        "owner": {
          "sourceId": "kExRMPVI07iIFCaa",
          "name": "Perfection of Essence",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1433,
        "uuid": "Compendium.pf2e.spells-srd.Item.Atone",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Atone",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Atone",
          "sourceId": "7Fd4lxozd11MQ55N",
          "name": "Atone",
          "type": "spell"
        },
        "owner": {
          "sourceId": "kExRMPVI07iIFCaa",
          "name": "Perfection of Essence",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:bonding-meal",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "aYn7Xgrz4vIMNeIc",
      "slug": "bonding-meal",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia Character Guide",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:fb5ffa9305411c103e503e0b3a9a390b4d2f5bde6116ec68f8b948ad3d771083",
    "translatableHash": "sha256:ceac6ea6d3d7c7756ff723c51ff6a0ded375f0452519aef942a41f2520c5e08f",
    "data": {
      "schemaVersion": 1,
      "name": "Bonding Meal",
      "rank": 2,
      "rarity": "uncommon",
      "traits": [],
      "traditions": [],
      "description": "Many grow up and spend their lives eating with others, and doing so binds them—to their families, communities, and cultures. Food can form long-lasting bonds, and with a bit of extra work, those bonds can be shared.\nYou prepare a meal for a small gathering of up to 10 close friends, enough people to comfortably eat together at one table or in one circle. As you collect and prepare the food, you call upon spirits of home and memory. As they work through you and guide you, you perfectly recreate a dish that emotionally connects you to a place of your past: perhaps your mother's cooking when you were a child, or the way you and your comrades-in-arms cooked rations together when you fought in the war. When you're done, you share the meal and tell your new friends the story that comes with it. As they eat and drink, any participants of 4th level or lower sink into a snapshot of your past and can borrow insights from it for future use.\nCritical Success Your friends are vividly taken through your memories as you relive them, and they hold onto the experience even after the fugue ends. For the next week, they have a +4 circumstance bonus to Deception and Diplomacy checks to convince anyone from the community where the meal originated from that they are from that area or were present for events you described. Even after the raw magic infusing the memories fade, the memories don't, and your friends will be able to make the dish just as well as you can. Chances are, they like it just as much as you did.\nSuccess As critical success, except your friends get a +2 circumstance bonus to Deception and Diplomacy checks instead. They also can't make the meal themselves but probably look forward to tasting it the way you make it if you ever offer to cook it again.\nFailure Your friends see the vision as planned, but the magic doesn't quite take. As success, but no one receives any bonus. The real treasure will have to be the friends you fed along the way.\nCritical Failure Your friends see the vision as planned, and the magic takes hold—but it goes wrong, like a bad case of indigestion. The memories are scattered around the rest of their psyches, and it takes a week to settle down properly. They confuse parts of your past for theirs, and they take a –2 circumstance bonus to Deception and Diplomacy checks for the next week against anyone from your old community, as they confidently apply the wrong expectations from their lives across the one you were trying to introduce them to.\nHeightened (4th) Participants up to 8th level can gain the benefits, and the cost is 40 gp.\nHeightened (6th) Participants up to 12th level can gain the benefits, and the cost is 150 gp.\nHeightened (8th) Participants up to 16th level can gain the benefits, and the cost is 480 gp.\nHeightened (10th) Participants of any level can gain the benefits, and the cost is 2000 gp.",
      "castingTime": "1 day",
      "range": "",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) Participants up to 8th level can gain the benefits, and the cost is 40 gp.\nHeightened (6th) Participants up to 12th level can gain the benefits, and the cost is 150 gp.\nHeightened (8th) Participants up to 16th level can gain the benefits, and the cost is 480 gp.\nHeightened (10th) Participants of any level can gain the benefits, and the cost is 2000 gp."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:butterfly-bender",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "wneYzMFUWreyqWHD",
      "slug": "butterfly-bender",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia Character Guide",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:577e8ba3ee771cfab90879a571d5afcc56f3e3bdaaac1851fda7380c8c67cee5",
    "translatableHash": "sha256:5ac46e3fd0989b4b4bfc8e19ef086061578049b1319e60351675481378866cc8",
    "data": {
      "schemaVersion": 1,
      "name": "Butterfly Bender",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [],
      "traditions": [],
      "description": "Sometimes, the problems in your life are too oppressive. Sometimes, you have a case you need to crack and you have no idea where to start. When you've exhausted all options and willpower, you might as well just get drunk and call it a night. The butterfly bender is a ritual to kill two birds with one stone. By twisting fate around a session of hard drinking, you and a small party (no more than five people) suspend judgment, memory, and even consciousness as you all hurl yourselves into the arms of destiny and politely ask for a favor. You all get blackout drunk and, if all goes according to plan, you'll wake up with some progress upon a quest you've all undertaken—hopefully, without too much collateral damage.\nThe participants of the ritual wake up the next day with some of the following, determined by the results of the ritual. Any options that aren't chosen are temporarily lost to you.\n• Your dignity.\n• A common item that has the consumable trait of a level no higher than that of the ritual, which might be useful for an upcoming challenge. If lost, you misplace all of your currently carried items—including keys to where your equipment might be stored. With a modicum of effort, you recover your items within 1 day.\n• A new friend or connection, as though you'd succeeded at a Diplomacy check to Make an Impression with a relevant NPC up to the ritual's level. If this is one of things lost, an existing friend refuses to speak to you for 1 day.\n• A useful piece of information, as though you'd succeeded at a Diplomacy check to Gather Information. If lost, you take a –4 status penalty to your next check to Recall Knowledge.\n• A convenient opportunity of the GM's choice. If there's no immediately relevant opportunity, you find an opportunity to Earn Income at the ritual's level + 1. If lost, the result of your next attempt to Earn Income is one degree of success worse.\nCritical Success Pick two options from the above list. The GM then gives you a bonus 3rd option of their choice.\nSuccess Pick two options from the above list.\nFailure Pick one option from the above list.\nCritical Failure Pick two options from the above list. The GM gives you one of them.",
      "castingTime": "2 hours",
      "range": "",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1346,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Make an Impression",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Make an Impression",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Make an Impression",
          "sourceId": "OX4fy22hQgUHDr0q",
          "name": "Make an Impression",
          "type": "action"
        },
        "owner": {
          "sourceId": "wneYzMFUWreyqWHD",
          "name": "Butterfly Bender",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1851,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Earn Income",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Earn Income",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Earn Income",
          "sourceId": "QyzlsLrqM0EEwd7j",
          "name": "Earn Income",
          "type": "action"
        },
        "owner": {
          "sourceId": "wneYzMFUWreyqWHD",
          "name": "Butterfly Bender",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:feast-of-supplication",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "bS3DW0MptpnZl5Zr",
      "slug": "feast-of-supplication",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia Character Guide",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:d3ad610228fa5074b0d2e035b98cb1092689dec4dd25220b9eac79c1157519b1",
    "translatableHash": "sha256:aa628238c5536fab971bde8845940946a1b6559ca5857fe77f1c74a76289744d",
    "data": {
      "schemaVersion": 1,
      "name": "Feast of Supplication",
      "rank": 5,
      "rarity": "rare",
      "traits": [],
      "traditions": [],
      "description": "When mortals attempt to sway gods, spirits, and other beings of great spiritual power to take sides in mortal affairs, those powers demand to be impressed. And what better way to impress than a cook-off? This old ritual has roots in the spiritadjudicated village festival contests of rural Tian Xia. Two or more rival parties must participate, performing the ritual simultaneously as assistants gather and prepare ingredients while each team's head chef does their best to create the ultimate dish to satisfy their patron's palate. Cheering bystanders are usually involved. While the primary caster—the chef—is always busy with cooking, it's very normal for the secondary caster assistants to spend most of their time interfering with the other teams and slowing them down.\nCritical Success You've truly blown your patron away with the competition and the meal you've expertly crafted. The supernatural patrons you sought to impress grant a request as if you'd received a critical success to Make a Request of them, even if they're indifferent or unfriendly to you. If there's some argument or confusion on what request should be granted, the patrons grant the request of the team that achieved the highest overall result. At the GM's discretion, the attitude of any patrons pleased by the ritual can permanently increase toward all participants in the ritual. In addition, the sheer theatricality and flair of your cooking has earned you deep respect and die-hard fans from the spectators, doubly so if you tied with another contender.\nSuccess You've created a wonderful meal that your patron loves. The supernatural patrons you sought to impress grant a request as if you'd received a success to Make a Request of them, even if they're indifferent to you. If there's some argument or confusion on what request should be granted, the patrons grant the request of the team that achieved the highest overall result. At the GM's discretion, the attitude of any patrons pleased by the ritual can permanently increase toward all participants in the ritual. All contestants have still earned the jovial respect and appreciation of the crowd for cooking something entertaining and lovely.\nFailure You've created a dish that doesn't impress. The winner of the competition is declared in the most unsatisfying and mechanical of manners—someone has to win, but no one is happy about it. The supernatural patrons you sought to impress politely make their excuses and leave as soon as they have a chance. At the GM's discretion, the attitude of any patrons who experienced the meal can permanently decrease toward all participants in the ritual.\nCritical Failure Your team's dish is ruined at the last possible moment in a spectacular manner. You completely embarrass yourself, and the attitude of the supernatural patrons who experienced this farce permanently decreases by one step toward you. If you haven't earned the ire of your patron host, you've definitely lost the respect of any onlookers or spectators.",
      "castingTime": "3 hours",
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
    "contentId": "pf2e:spell:spells-srd:retreat-among-the-rains",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "D4Rxud1DBr52Dmdo",
      "slug": "retreat-among-the-rains",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:51f4e5229ae72514f6654c8fbb4a215604d640748e81888f21f6f037dacf072e",
    "translatableHash": "sha256:1d13df9fe913853264937c134a989dfd4c5ff9032b53579bb1892d29b3a0480c",
    "data": {
      "schemaVersion": 1,
      "name": "Retreat Among the Rains",
      "rank": 4,
      "rarity": "rare",
      "traits": [
        "mental",
        "water"
      ],
      "traditions": [],
      "description": "Ganhil developed this ritual to emulate the epiphanies and flowing mental states he experienced during 4718's Challenge of Sky and Heaven: intense focus, emotional acceptance, dilated perceptions, and growing awareness of elemental perfection.\nDuring the casting of this ritual, your thoughts enter a mindscape whose subjective flow of time is different, allowing you to perform retraining that would take a least a week of downtime. Your physical body still requires food or shelter during this time, so the secondary caster must nourish you with milk porridge or protect you from the elements with a raised parasol or similar item.\nCritical Success At the end of the ritual, you can retrain a class feature, feat, or skill.\nSuccess At the end of the ritual, you can retrain a feat or skill.\nFailure At the end of the ritual, you gain the Fatigued condition.\nCritical Failure As failure, and you also suffer from starvation and thirst as if you hadn't eaten for a week, taking (10d4+7) damage that cannot be healed until you eat and drink.",
      "castingTime": "1 day",
      "range": "",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 927,
        "uuid": "Compendium.pf2e.conditionitems.Item.Fatigued",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Fatigued",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Fatigued",
          "sourceId": "HL2l2VRSaQHu9lUw",
          "name": "Fatigued",
          "type": "condition"
        },
        "owner": {
          "sourceId": "D4Rxud1DBr52Dmdo",
          "name": "Retreat Among the Rains",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:phantom-ship",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "oOFilBgsXTVIbJpN",
      "slug": "phantom-ship",
      "publicationTitle": "Pathfinder Adventure Path: Gatewalkers",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/blur.webp"
    },
    "sourceHash": "sha256:f3e3b1fcc27e926b445a614336aad4adbe5fe34ba4c888968e9b82764865c75b",
    "translatableHash": "sha256:28272b1fa998e0e5fde4b734c4fa635b567614010b1c5dd8b9dcc2364346e546",
    "data": {
      "schemaVersion": 1,
      "name": "Phantom Ship",
      "rank": 2,
      "rarity": "uncommon",
      "traits": [
        "teleportation"
      ],
      "traditions": [],
      "description": "You create a link between a ship and an undead member of its crew to temporarily make the ship, and its passengers and crew, as incorporeal as ghosts. The targeted ship must be intact and on or near the surface of some water, and an undead who was a member of the ship's crew in life must be present for the entire ritual.\nCritical Success The ship and all creatures aboard it become incorporeal for 1 hour. During this time, the ship can sail at its top speed in any heading chosen by the primary caster, regardless of the winds. The ship can pass through any corporeal obstacles in its path (such as rocks or other vessels), but it must remain in contact with water or the ritual's effects end prematurely. Any skill checks required to sail the ship through rough weather gain a +2 status bonus. A creature that disembarks the ship while the ritual is in effect becomes corporeal again.\nSuccess As critical success, but the status bonus to skill checks is only +1.\nFailure The ritual has no effect.\nCritical Failure The ship, but not its passengers or crew, becomes incorporeal for 10 minutes, usually resulting in the passengers and crew falling through the ship into the waters below. If the ship was already sailing, it continues in its current direction at its current speed.",
      "castingTime": "1 hour",
      "range": "10 feet",
      "target": "1 ship no more than 175 feet long",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:regale-the-lost-ones",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "FQZaQXiKtHdVjSc5",
      "slug": "regale-the-lost-ones",
      "publicationTitle": "Pathfinder Season of Ghosts Hardcover Compilation",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:541aa203bffce544799d1f6f054246c3e962d0ee3aadc030a6b38949e67627b5",
    "translatableHash": "sha256:5157e350b052ca2bb212997cc8a6fca68b6fd4a728f5e97da1edcb8c8f49da98",
    "data": {
      "schemaVersion": 1,
      "name": "Regale the Lost Ones",
      "rank": 2,
      "rarity": "rare",
      "traits": [],
      "traditions": [],
      "description": "Autumn's shorter days herald an increase in hauntings, which only intensify during winter's cold, dark nights. As fall draws to a close, some of Shenmen's villages hire or set up Tian opera troupes to enact regale the lost ones rituals, where they perform dramas drawn from literary classics and historical events that incorporate acting, music, acrobatics, and martial arts.\nThese ritual performances fulfill a dual purpose; not only do they bring cheer to the living, but they also entertain and placate the \"lost ones\"—a euphemism for ghosts and other spirits—and seek to reduce the likelihood of attacks from such entities. Performing this ritual during the season of fall reduces the DCs of the ritual's skill checks by 2.\nIf the ritual is successful, sentient undead and other spirits become less hostile, allowing villagers to focus their efforts on dealing with mindless undead and other more physical threats. This ritual can only be attempted once per year per settlement; additional attempts to regale the lost ones in the same settlement automatically result in a critical failure.\nCritical Success Haunts and undead in the settlement that are level 3 or lower become easier to defeat. Reduce all Disable DCs for affected haunts in the settlement by 2, and all affected undead within the settlement begin combat Frightened 1. If the PCs perform this ritual during Act 2 or Act 3, they gain 3 Hope Points.\nSuccess Haunts in the settlement that are level 3 or lower become easier to notice and defeat. Reduce all Disable DCs for affected haunts in the settlement by 1. If the PCs perform this ritual during Act 2 or Act 3, they gain 1 Hope Point.\nFailure The ritual has no effect.\nCritical Failure Haunts and undead in the settlement that are level 3 or lower become more difficult to notice and defeat. Increase all Disable DCs for affected haunts in the settlement by 2, and all affected undead within the settlement gain the elite adjustment. If the PCs perform this ritual during Act 2 or Act 3, they lose 3 Hope Points.\nHeightened 1 Increase the level of affected haunts and undead by 2.",
      "castingTime": "4 hours",
      "range": "",
      "target": "a settlement with a level equal to or lower than twice the ritual's level",
      "area": null,
      "duration": "1 year",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 Increase the level of affected haunts and undead by 2."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1388,
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
          "sourceId": "FQZaQXiKtHdVjSc5",
          "name": "Regale the Lost Ones",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:last-nights-vigil",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "INEAWirvb8c1eAFD",
      "slug": "last-nights-vigil",
      "publicationTitle": "Pathfinder Season of Ghosts Hardcover Compilation",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:57ca140cc4e66fc5f8d259f8f644b294199362cc6bc07dac47a32ebea4cfd759",
    "translatableHash": "sha256:f3ca899f8e65cca032d9b41a9dbd9b0c2ed1a8aafbb8008cd2a7d526f11c6251",
    "data": {
      "schemaVersion": 1,
      "name": "Last Night's Vigil",
      "rank": 2,
      "rarity": "rare",
      "traits": [
        "healing"
      ],
      "traditions": [],
      "description": "Obscure folktales state on the first day of spring, the Mother of Secrets wanders Tian Xia to dispense blessings of health upon the elderly. Last night's vigil is a folk ritual inspired by these stories.\nThis simple ritual can only be performed at night, in the presence of someone whom you love and who's ill, hurt, or otherwise unwell. You must stay awake through the night, keeping the sticks of incense lit to guide the goddess's passage. If you're indoors, you should keep a door or window slightly ajar to receive her holy presence. If performed on a winter night, the DCs of the ritual's skill checks are reduced by 1; if performed on the last night of winter before spring, the DCs are instead reduced by 2.\nIf the ritual is successful, you fall asleep for the briefest of moments to the sound of snowfall and the swishing of a horse tail whisk. When you awaken moments later, your loved one smiles at you, hopefully in better health.\nCritical Success The target's Hit Points are fully restored, and all diseases that are equal or lower level than twice the ritual's spell rank that they're currently suffering from reduce their stage by 1. If this reduces a disease's stage below 1, it cures that affliction.\nSuccess The target's Hit Points are fully restored, and one disease of a level that's equal to or lower than twice the ritual's spell rank that they're currently suffering from reduces its stage by 1. If this reduces the disease's stage below 1, it cures that affliction.\nFailure The ritual has no effect.\nCritical Failure You're Fatigued for the next 24 hours.\nHeightened (4th) You can choose when you perform the ritual whether it affects curses or diseases.\nHeightened (6th) You can affect curses and diseases simultaneously.",
      "castingTime": "8 hours",
      "range": "10 feet",
      "target": "1 creature whom you love",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) You can choose when you perform the ritual whether it affects curses or diseases.\nHeightened (6th) You can affect curses and diseases simultaneously."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1666,
        "uuid": "Compendium.pf2e.conditionitems.Item.Fatigued",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Fatigued",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Fatigued",
          "sourceId": "HL2l2VRSaQHu9lUw",
          "name": "Fatigued",
          "type": "condition"
        },
        "owner": {
          "sourceId": "INEAWirvb8c1eAFD",
          "name": "Last Night's Vigil",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:open-the-wall-of-ghosts",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "PvkEzzCaDT07DcJb",
      "slug": "open-the-wall-of-ghosts",
      "publicationTitle": "Pathfinder Season of Ghosts Hardcover Compilation",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:fd8860b227580a487dbd45674e4ac4bc8f8f9a7568af887849a540cf08d0c96b",
    "translatableHash": "sha256:0711dc17bb87071ecb1a18c695c0af4fc3886b1cf119676438b0851a857d7ce2",
    "data": {
      "schemaVersion": 1,
      "name": "Open the Wall of Ghosts",
      "rank": 2,
      "rarity": "rare",
      "traits": [
        "consecration"
      ],
      "traditions": [],
      "description": "",
      "castingTime": "1 day",
      "range": "40 feet",
      "target": "the Wall of Ghosts",
      "area": null,
      "duration": "1 year",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/gm",
        "sourceIndex": 1172,
        "uuid": "Compendium.pf2e.spell-effects.lGU4GIF2GUn21zFa",
        "label": "Spell Effect: Open the Wall of Ghosts (Critical Success)",
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.lGU4GIF2GUn21zFa"
        },
        "owner": {
          "sourceId": "PvkEzzCaDT07DcJb",
          "name": "Open the Wall of Ghosts",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/gm",
        "sourceIndex": 1557,
        "uuid": "Compendium.pf2e.pathfinder-monster-core.N98ug9jQHqeFoK1N",
        "label": "Ghost Commoner",
        "target": {
          "uuid": "Compendium.pf2e.pathfinder-monster-core.N98ug9jQHqeFoK1N"
        },
        "owner": {
          "sourceId": "PvkEzzCaDT07DcJb",
          "name": "Open the Wall of Ghosts",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:sweetest-solstice",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "wAJ8mXPYbyAg0qWX",
      "slug": "sweetest-solstice",
      "publicationTitle": "Pathfinder Season of Ghosts Hardcover Compilation",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:6f187bb94ca439cd4bce3a6aa209737d0081a9c19d7121b3020eb2b5555f704a",
    "translatableHash": "sha256:a32ab5f8f80c542e6f2347f1e937d4d2af98591658b632e53f35195ffab58d69",
    "data": {
      "schemaVersion": 1,
      "name": "Sweetest Solstice",
      "rank": 2,
      "rarity": "rare",
      "traits": [],
      "traditions": [],
      "description": "On long winter nights, many families in Tian Xia share a dish of glutinous rice balls. Wealthier families also dye these rice balls an auspicious pinkish-red in jujube juice and might serve or stuff them with expensive sweetened pastes of red beans, sesame, taro, or lotus. Sweetest solstice is a folk ritual that incorporates this tradition and allows entire villages to experience communal goodwill by celebrating a luxurious version of this dish together.\nThis ritual is performed over 1 hour of cooking a soup of crushed black sesame and sugar in several large cauldrons while good-natured jokes and puns praising Daikitsu, Kofusachi, and other benevolent deities are uttered; quips inspired by Hei Feng and Sun Wukong are usually included in these jovialities, for these rambunctious deities are always ready for feasts and humor. Each time a joke or pun is made, a rice ball is dropped into the boiling soups.\nThis ritual can only be performed once each winter season. If performed on the night of the winter solstice, the DCs of the ritual's skill checks are reduced by 2.\nIf the ritual is successful, the delicious black sesame soup, like the longest of nights, seems never-ending and even hides windfalls of chewy sweetness. Sometimes, this small mercy of hot meals, and the hope for pleasant surprises to come, is all a community needs to endure the bleakest of winters together.\nSpell Effect: Sweetest Solstice\nCritical Success The pot contains enough black sesame soup and rice balls to feed a hot meal to everyone in the settlement for a month. The casters of the ritual gain a +1 status bonus to saves against emotion and fear effects until the end of winter.\nSuccess The pot contains enough black sesame soup and rice balls to feed a hot meal to everyone in the settlement for a week. The casters of the ritual gain a +1 status bonus to saves against fear effects for 1 month or until the end of winter, whichever comes first.\nFailure The ritual has no effect.\nCritical Failure The soup becomes tainted; it not only provides no nourishment but spreads food poisoning through the town (this might have disastrous effects). The casters of the ritual become particularly affected by illness and become Sickened 4 and can't reduce the condition for 12 hours.",
      "castingTime": "1 hour",
      "range": "",
      "target": "a settlement with a level equal to or lower than twice the ritual's level",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1421,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Sweetest Solstice",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Sweetest Solstice",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Sweetest Solstice",
          "sourceId": "HDT5oiQXXnRdDIKR",
          "name": "Spell Effect: Sweetest Solstice",
          "type": "effect"
        },
        "owner": {
          "sourceId": "wAJ8mXPYbyAg0qWX",
          "name": "Sweetest Solstice",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 2389,
        "uuid": "Compendium.pf2e.conditionitems.Item.Sickened",
        "label": "Sickened 4",
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
          "sourceId": "wAJ8mXPYbyAg0qWX",
          "name": "Sweetest Solstice",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:gnaw-at-the-moon",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "yrsgOdj5oqp7lEQY",
      "slug": "gnaw-at-the-moon",
      "publicationTitle": "Pathfinder Season of Ghosts Hardcover Compilation",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:bd0aa349ebf49a081e4a9c4d35200e00f8678dbfab0fb94a024c8545007035e3",
    "translatableHash": "sha256:bbb12b7a58e534bcef9d45f69b10758d4bc29ec4f1fecb0795960972ad75b17e",
    "data": {
      "schemaVersion": 1,
      "name": "Gnaw at the Moon",
      "rank": 2,
      "rarity": "rare",
      "traits": [],
      "traditions": [],
      "description": "It's said that after his demise at the hands of jealous Fumeiyoshi, Tsukiyo's corpse was left unguarded; this provided a humble matron-rat opportunities to nibble at god flesh, a meal that transformed her into Lao Shu Po. Gnaw at the moon, an obscure folk magic ritual popular among Shenmen's downtrodden, allows you to honor the Old Rat Woman's audacity and unlikely ascent.\nThis ritual can only be performed on a night when the moon is visible in the sky above; you can't perform this ritual during a totally moonless night, while indoors, or while underground. Performing this ritual on the night of the full moon reduces the DCs of the ritual's skill checks by 2. You set out offerings of mooncakes and cups of tea on a flat surface (such as a table or a tray on the floor), assiduously ignore this food and drink, and praise the night's beauty while admiring and thanking the moon.\nAt the end of a successful ritual, bite marks appear on the mooncakes, and some of the tea disappears as if sipped while no one was looking. Supposedly, the ritual and offerings gain Lao Shu Po's attention, who sends her rodent children to eat and drink their fill and grant stolen blessings of moonlit sight. The effusive admiration for the moon is said to avert Tsukiyo's displeasure for commemorating the event of his murder; after all, old tales warn against giving offense to the moon, lest it slice your ears in retribution.\nCritical Success The targets gain darkvision.\nSuccess The targets gain low-light vision.\nFailure The ritual has no effect.\nCritical Failure You and the targets are Drained 1 for 24 hours. Your ears feel lacerated and raw as your earlobes become crisscrossed with tiny cuts.",
      "castingTime": "1 hour",
      "range": "30 feet",
      "target": "yourself and the secondary casters",
      "area": null,
      "duration": "8 hours",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1700,
        "uuid": "Compendium.pf2e.conditionitems.Item.Drained",
        "label": "Drained 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Drained",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Drained",
          "sourceId": "4D2KBtexWXa6oUMR",
          "name": "Drained",
          "type": "condition"
        },
        "owner": {
          "sourceId": "yrsgOdj5oqp7lEQY",
          "name": "Gnaw at the Moon",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:ransack-the-night",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ksJFGSGlNpUhwcsp",
      "slug": "ransack-the-night",
      "publicationTitle": "Pathfinder Season of Ghosts Hardcover Compilation",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:c5246a72e3957c12207968bdbe57ac1306e6cb973fbba8325c7ab137baa5779b",
    "translatableHash": "sha256:1e5894309b33cb45423be1ee0ff688a333e73d01c89263c2d24f155fe3a2b746",
    "data": {
      "schemaVersion": 1,
      "name": "Ransack the Night",
      "rank": 3,
      "rarity": "rare",
      "traits": [
        "darkness"
      ],
      "traditions": [],
      "description": "When Fumeiyoshi was punished by the Celestial Court for deicide and fratricide, the rat who would become Lao Shu Po robbed the cangue-bound Fumeiyoshi of a sizable chunk of his shadow. This fully catalyzed the rat's transformation into Lao Shu Po, the new Tian goddess of night. Ransack the night is a Laoite ritual allowing you to mimic this divine thievery and shroud yourself in the night's cerements.\nThis ritual can only be performed at night. You dig narrow troughs into the dirt and toss blessed salt as well as the juice of citrus fruits into these gashes in the ground. Performing this ritual in an area actively haunted by undead or frequented by fiends reduces the DCs of the ritual's skill checks by 2. If the ritual is successful, a smoky black miasma, said to be the blood and tears of Fumeiyoshi himself, emerges from the broken earth to augment and enhance your spiritual aura, helping you to remain undetected by fiends and undead.\nCritical Success Fiends and undead who are 5th level or lower treat you as if you were Concealed. If you take a hostile action against a fiend or undead, you lose this concealment against that fiend or undead until the end of your next turn.\nSuccess As critical success, but when you lose concealment against a fiend or undead, you don't regain concealment from this ritual against that fiend or undead.\nFailure The ritual has no effect.\nCritical Failure The miasma occludes your senses instead; for 24 hours, the targets treat fiends and undead as if they were concealed.\nHeightened 1 Increase the level of affected creatures by 2.",
      "castingTime": "1 hour",
      "range": "",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 Increase the level of affected creatures by 2."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1084,
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
          "sourceId": "ksJFGSGlNpUhwcsp",
          "name": "Ransack the Night",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:winters-breath",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "oYxxcgszpT242sEi",
      "slug": "winters-breath",
      "publicationTitle": "Pathfinder Season of Ghosts Hardcover Compilation",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:da9c77ec373e0e22b392a9a225fa0928125e42e8210443e8638fd1b190d13017",
    "translatableHash": "sha256:7b7d531964575f7a9518322e719c2e213907d509e5b7ff8e9062cc2b708d1325",
    "data": {
      "schemaVersion": 1,
      "name": "Winter's Breath",
      "rank": 3,
      "rarity": "rare",
      "traits": [],
      "traditions": [],
      "description": "The cold and dour months of winter are an excellent time to gather with friends and family to enjoy a pot of hot tea. The so-called \"breath\" in this ritual refers to the steam that wafts up from a freshly brewed cup while held in the hands and inhaled. Despite the ritual's name, it can be cast during any season, but unless it's cast during winter, the DCs for successfully casting winter's breath increase by 2 (or by 4 if the ritual is cast during summer).\nWhen you cast this ritual, you call forth a magical pavilion consisting of a colorful tent or decorate an area within range with a large number of colorful banners. In either case, the ritual also creates a full supply of teas and tea ware for the casters to use and serve up to six guests (which can include the casters). During the ritual, all the guests must be polite and well-mannered. The tea created by winter's breath is always delicious, but the effects of the tea and taking part in the ceremony of its serving depend on the success of the magic. At the ceremony's end, the ritual is completed, and you and the secondary caster attempt your checks as normal. If the ceremony is interrupted at any point, the tea vanishes and the ritual is disrupted.\nCritical Success The ceremony is a true delight. The tea casts Clear Mind, Environmental Endurance, Sound Body, and Sure Footing at a rank equal to that which winter's breath was cast on each guest. Each guest also gains 10 temporary Hit Points and a +1 status bonus to saves against emotion effects for the next 12 hours.\nSuccess As critical success, except guests must choose which one of the five spells are cast on them, and they don't gain the status bonus to saves.\nFailure The tea leaves a bitter, unpleasant taste in the mouth, and no benefits are granted.\nCritical Failure Rather than invigorate and delight, the tea is disappointing and depressing. You and your guests are Sickened 3 and can't reduce the condition for 12 hours.\nHeightened 1 The spells associated with a success or critical success are heightened by 1 rank, and the temporary Hit Points granted are increased by 2.",
      "castingTime": "1 hour",
      "range": "40 feet",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 The spells associated with a success or critical success are heightened by 1 rank, and the temporary Hit Points granted are increased by 2."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1340,
        "uuid": "Compendium.pf2e.spells-srd.Item.Clear Mind",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Clear Mind",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Clear Mind",
          "sourceId": "EfFMLVbmkBWmzoLF",
          "name": "Clear Mind",
          "type": "spell"
        },
        "owner": {
          "sourceId": "oYxxcgszpT242sEi",
          "name": "Winter's Breath",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1391,
        "uuid": "Compendium.pf2e.spells-srd.Item.Environmental Endurance",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Environmental Endurance",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Environmental Endurance",
          "sourceId": "5esP2GVzvxWsMgaX",
          "name": "Environmental Endurance",
          "type": "spell"
        },
        "owner": {
          "sourceId": "oYxxcgszpT242sEi",
          "name": "Winter's Breath",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1455,
        "uuid": "Compendium.pf2e.spells-srd.Item.Sound Body",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Sound Body",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Sound Body",
          "sourceId": "Et8RSCLx8w7uOLvo",
          "name": "Sound Body",
          "type": "spell"
        },
        "owner": {
          "sourceId": "oYxxcgszpT242sEi",
          "name": "Winter's Breath",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1510,
        "uuid": "Compendium.pf2e.spells-srd.Item.Sure Footing",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Sure Footing",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Sure Footing",
          "sourceId": "BCuHKrDeJ4eq53M6",
          "name": "Sure Footing",
          "type": "spell"
        },
        "owner": {
          "sourceId": "oYxxcgszpT242sEi",
          "name": "Winter's Breath",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 2197,
        "uuid": "Compendium.pf2e.conditionitems.Item.Sickened",
        "label": "Sickened 3",
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
          "sourceId": "oYxxcgszpT242sEi",
          "name": "Winter's Breath",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:mindscape-shift",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "VJgSQBYwXGDbMmiW",
      "slug": "mindscape-shift",
      "publicationTitle": "Pathfinder Season of Ghosts Hardcover Compilation",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:812bdc4860b7449f66458c1f5875bdb07203c8061258ed4a6475b2368c5dc980",
    "translatableHash": "sha256:44d8447d97e17776dd704cd04eb082c53cea414cb0c9693c1935d68926d1e145",
    "data": {
      "schemaVersion": 1,
      "name": "Mindscape Shift",
      "rank": 3,
      "rarity": "rare",
      "traits": [
        "teleportation"
      ],
      "traditions": [],
      "description": "",
      "castingTime": "1 hour",
      "range": "touch",
      "target": "yourself and the secondary casters",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/gm",
        "sourceIndex": 278,
        "uuid": "Compendium.pf2e.spells-srd.8MAHUK6jphbME4BR",
        "label": "Mindscape Door",
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.8MAHUK6jphbME4BR"
        },
        "owner": {
          "sourceId": "VJgSQBYwXGDbMmiW",
          "name": "Mindscape Shift",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:transmigrate",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "8Lk9K3tRnV68MQPW",
      "slug": "transmigrate",
      "publicationTitle": "Pathfinder Season of Ghosts Hardcover Compilation",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:111c89138df4ef52770ed324c560bf9b58018e063d7a0213a11ee52e6e6481f9",
    "translatableHash": "sha256:c030cb651021edab9acc3442388461c23367014ddc7799cc49d4deff17a8ee54",
    "data": {
      "schemaVersion": 1,
      "name": "Transmigrate",
      "rank": 4,
      "rarity": "unique",
      "traits": [
        "healing"
      ],
      "traditions": [],
      "description": "",
      "castingTime": "4 hours",
      "range": "20 feet",
      "target": "the PCs",
      "area": null,
      "duration": "1 month",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/gm",
        "sourceIndex": 1811,
        "uuid": "Compendium.pf2e.spell-effects.8jaYbxnP4Z5wvnQs",
        "label": "Spell Effect: Transmigrate (Encounter)",
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.8jaYbxnP4Z5wvnQs"
        },
        "owner": {
          "sourceId": "8Lk9K3tRnV68MQPW",
          "name": "Transmigrate",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/gm",
        "sourceIndex": 1911,
        "uuid": "Compendium.pf2e.spell-effects.FqG4zXjSoxq9qTlf",
        "label": "Spell Effect: Transmigrate (Skill)",
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.FqG4zXjSoxq9qTlf"
        },
        "owner": {
          "sourceId": "8Lk9K3tRnV68MQPW",
          "name": "Transmigrate",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:destroy-mindscape",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "dQGn0eAyvYMDdj0h",
      "slug": "destroy-mindscape",
      "publicationTitle": "Pathfinder Season of Ghosts Hardcover Compilation",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:ed7f6781c5e3a6eeb90d587225a5ff533d41132f94fdebb6bf9a91ec4fb734fa",
    "translatableHash": "sha256:fa3c970ac79764652b329e8e2dccd9e546be867a20ac4a2c44a93cfc37c1400f",
    "data": {
      "schemaVersion": 1,
      "name": "Destroy Mindscape",
      "rank": 10,
      "rarity": "rare",
      "traits": [],
      "traditions": [],
      "description": "After you gather the anchors that make up the mindscape's structure, or in the case of anchors too immense to move, when you gain control over the region surrounding the anchors, you can perform this ritual to tear the mindscape apart from within. The ritual takes but a day to attempt, so those who would oppose such a destructive doom would do well to challenge the enemy by doing what they can to protect their mindscape's anchors. At the GM's discretion, the most powerful of mindscapes, such as those created by a deity, might be immune to this ritual's effects.\nOver the course of this ritual's casting, you and the secondary casters unravel the basic and fundamental ideas of the mindscape's anchors. As you do so, flashes of memory tied to the anchor you target flood your mind, before the anchor itself dissipates. The mindscape might react with hostility to this process, manifesting creatures or swaying primary inhabitants to stop you. Regardless of how many anchors in all must be dismantled, it always takes a day to perform this ritual.\nCritical Success The mindscape is destroyed, and you and the secondary casters are returned to the plane from which you hailed before entering the mindscape.\nSuccess The mindscape is destroyed, but you and the secondary casters are scattered randomly to locations on other planes.\nFailure The mindscape is not destroyed, and you and the and the secondary casters are scattered randomly to locations on other planes.\nCritical Failure The mindscape is not destroyed, and you and the secondary casters become Drained 3 and are then each plunged into separate mindscapes. You remain trapped therein until you engineer each of your own escapes. You forget the destroy mindscape ritual and must discover it again if you wish to pursue this goal once more.",
      "castingTime": "1 day",
      "range": "",
      "target": "the mindscape",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1671,
        "uuid": "Compendium.pf2e.conditionitems.Item.Drained",
        "label": "Drained 3",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Drained",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Drained",
          "sourceId": "4D2KBtexWXa6oUMR",
          "name": "Drained",
          "type": "condition"
        },
        "owner": {
          "sourceId": "dQGn0eAyvYMDdj0h",
          "name": "Destroy Mindscape",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:commune-with-corazal",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "zIAvj7V6BTuQMAIi",
      "slug": "commune-with-corazal",
      "publicationTitle": "Pathfinder #201: Pactbreaker",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:ebc468adede382f10b31bb4a52ef8a33f332677b73797dd45b633d04c92f9f1f",
    "translatableHash": "sha256:73433a314cb11e0913c9358f23aa308258f790fb5a02b79a87f835bcabf7b97a",
    "data": {
      "schemaVersion": 1,
      "name": "Commune with Corazal",
      "rank": 4,
      "rarity": "unique",
      "traits": [],
      "traditions": [],
      "description": "You tap into Corazal's innumerable senses to identify disturbances throughout the Verduran Forest.\nCritical Success You and Corazal successfully identify a flashpoint: an imminent event that could stoke distrust and unrest. You experience a sensory premonition of the event, can cast know the way as a 7th-rank cantrip to point toward the location, and know which Elder Oak is closest to it.\nSuccess As success, but the ritual heavily taxes your mind and body. You are Drained 1, and until the drained condition ends, you are also Stupefied 1.\nFailure The ritual has no effect.\nCritical Failure The ritual has no effect beyond burning your mind with conflicting information. You are Drained 2, and until the drained condition ends, you are also stupefied 1 and have the Dubious Knowledge skill feat. Whenever you would decrease this drained value, the value does not decrease unless you succeed at a check (flat, dc:11).",
      "castingTime": "4 hours",
      "range": "",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 527,
        "uuid": "Compendium.pf2e.conditionitems.Item.Drained",
        "label": "Drained 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Drained",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Drained",
          "sourceId": "4D2KBtexWXa6oUMR",
          "name": "Drained",
          "type": "condition"
        },
        "owner": {
          "sourceId": "zIAvj7V6BTuQMAIi",
          "name": "Commune with Corazal",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 641,
        "uuid": "Compendium.pf2e.conditionitems.Item.Stupefied",
        "label": "Stupefied 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Stupefied",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Stupefied",
          "sourceId": "e1XGnhKNSQIm5IXg",
          "name": "Stupefied",
          "type": "condition"
        },
        "owner": {
          "sourceId": "zIAvj7V6BTuQMAIi",
          "name": "Commune with Corazal",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 895,
        "uuid": "Compendium.pf2e.conditionitems.Item.Drained",
        "label": "Drained 2",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Drained",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Drained",
          "sourceId": "4D2KBtexWXa6oUMR",
          "name": "Drained",
          "type": "condition"
        },
        "owner": {
          "sourceId": "zIAvj7V6BTuQMAIi",
          "name": "Commune with Corazal",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:drain-planar-connection",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Jte2jlX59a1yQPp8",
      "slug": "drain-planar-connection",
      "publicationTitle": "Pathfinder #202: Severed at the Root",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:a249a825d8b277ce251b77ca059da091285180fbd46a3b2034ee1befd3aa1057",
    "translatableHash": "sha256:0cc04e199411dc84aaa474d69a468e013ce86d767cea8c26a1486762651fd646",
    "data": {
      "schemaVersion": 1,
      "name": "Drain Planar Connection",
      "rank": 5,
      "rarity": "unique",
      "traits": [],
      "traditions": [],
      "description": "You draw the planar energy from Idyllis, through the ley lines, and into the six latticework spheres.\nCritical Success You sever Idyllis's connection to the Plane of Wood permanently.\nSuccess You sever Idyllis's connection to the Plane of Wood for 10 years.\nFailure You sever Idyllis's connection to the Plane of Wood for 1 year, but the ritual backfires, dealing 4d12+26 force damage to all secondary casters (check (reflex, dc:26, basic) save).\nCritical Failure The ritual backfires as a failure but doesn't sever Idyllis's connection.",
      "castingTime": "1 day",
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
    "contentId": "pf2e:spell:spells-srd:song-of-silver",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "HYXyMFsH0K80etBI",
      "slug": "song-of-silver",
      "publicationTitle": "Pathfinder #205: Singer, Stalker, Skinsaw Man",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:709c9d5ae75eeb3ea3864bd734bc87c037bb76e70df741a06c0ae556fa31f9de",
    "translatableHash": "sha256:8046eea7101914e238177dd2784fb8755d81139ee951ea5021433b1dd60b2193",
    "data": {
      "schemaVersion": 1,
      "name": "Song of Silver",
      "rank": 6,
      "rarity": "rare",
      "traits": [],
      "traditions": [],
      "description": "The majority of the Song of Silver's time needed to Cast it consists of preparations for the performance, which must take place on a stage in Kintargo. While the Song of Silver can be cast by a single primary caster, up to six secondary casters can assist by helping to decorate the stage with Crafting or by spreading word and gathering an audience with Society. At the end of this 8-hour period, the primary caster performs the song, which takes up the final minute of the casting time.\nSpell Effect: Song of Silver\nCritical Success The stage and rooftop above any stage where the song was performed glows softly with silver radiance for 1 week. During this time, the ritual tries to counteract teleportation effects and planar travel into or out of Kintargo attempted by unholy creatures, and all weapons wielded within Kintargo are treated as if they were made of silver for the purposes of calculating damage against creatures who possess weakness to silver. The ritual also generates the Success effects below. The Song of Silver can't be attempted again for 1 month.\nSuccess For 1 week, the primary and secondary casters gain a +2 status bonus to all saving throws against mental effects; this bonus doubles to a +4 status bonus against all fear effects. Each caster gains the ability to cast Breath of Life as an innate occult spell at a rank equal to what the Song of Silver was cast at, once during the week. These benefits are suppressed as long as the character is outside of Kintargo. The Song of Silver can't be attempted again for 1 month.\nFailure The Song of Silver fails, and it can't be attempted again for 1 month.\nCritical Failure Not only does the ritual fail, but the primary caster is overwhelmed with shame at the failure and becomes Stupefied 2 for 1 week (can't be removed by any means). The Song of Silver can't be attempted again for 6 months.\nHeightened (10th) The effects of the Song of Silver expand to cover all of Ravounel.",
      "castingTime": "8 hours",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 week",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (10th) The effects of the Song of Silver expand to cover all of Ravounel."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 517,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Song of Silver",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Song of Silver",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Song of Silver",
          "sourceId": "BdgWuULYjFwlVkr7",
          "name": "Spell Effect: Song of Silver",
          "type": "effect"
        },
        "owner": {
          "sourceId": "HYXyMFsH0K80etBI",
          "name": "Song of Silver",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1432,
        "uuid": "Compendium.pf2e.spells-srd.Item.Breath of Life",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spells-srd.Item.Breath of Life",
          "package": "pf2e",
          "sourcePack": "spells-srd",
          "documentType": "Item",
          "compendiumKey": "Breath of Life",
          "sourceId": "Hnc7eGi7vyZenAIm",
          "name": "Breath of Life",
          "type": "spell"
        },
        "owner": {
          "sourceId": "HYXyMFsH0K80etBI",
          "name": "Song of Silver",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 2004,
        "uuid": "Compendium.pf2e.conditionitems.Item.Stupefied",
        "label": "Stupefied 2",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Stupefied",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Stupefied",
          "sourceId": "e1XGnhKNSQIm5IXg",
          "name": "Stupefied",
          "type": "condition"
        },
        "owner": {
          "sourceId": "HYXyMFsH0K80etBI",
          "name": "Song of Silver",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:entreat-thunderbird",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Do0pe0gn8OFdCOnN",
      "slug": "entreat-thunderbird",
      "publicationTitle": "Pathfinder #209: Destroyer's Doom",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:bd96ff7f641f455d3f637cc17dc0587206f112cfebd4861c9bf8785230c3a0a8",
    "translatableHash": "sha256:80aa724d2d6c9c026f053855ccff598a48e82ada6a29734fa16200011d12d86b",
    "data": {
      "schemaVersion": 1,
      "name": "Entreat Thunderbird",
      "rank": 5,
      "rarity": "rare",
      "traits": [],
      "traditions": [],
      "description": "You entreat the thunderbird in the Tusk Mountains to come to your aid. While performing this ritual, the secondary casters can appeal to the thunderbird's pride or tempestuous nature to gain a +2 circumstance bonus to their checks.\nCritical Success The thunderbird is helpful to the casters for the duration.\nSuccess The thunderbird is friendly to the casters for the duration.\nFailure The thunderbird ignores the entreaty and remains indifferent.\nCritical Failure The thunderbird takes offense and permanently departs the area.",
      "castingTime": "1 hour",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 month",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:purify-tanglebriar",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ZVdKM0HkgpWykrqf",
      "slug": "purify-tanglebriar",
      "publicationTitle": "Pathfinder #212: A Voice in the Blight",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:de7ceeb8a28cbd331a4c3f4df89f9797b16d9025c0bfba3ff861df1a8c063d6a",
    "translatableHash": "sha256:3d733bd350033829e7f48875cee8580f232f88cd355e4a36ae4d811a972ecea5",
    "data": {
      "schemaVersion": 1,
      "name": "Purify Tanglebriar",
      "rank": 9,
      "rarity": "rare",
      "traits": [
        "consecration"
      ],
      "traditions": [],
      "description": "You call upon the primal presence of the Fierani Forest and the elven legacy of Kyonin in an attempt to purify a portion of the blighted realm of Tanglebriar. Initially created by the elven wizard Aelthian in hopes of banishing Treerazer himself, this revision to that faulty ritual focuses instead upon the region he blighted rather than the nascent demon lord himself. Thus avoiding the catastrophic repercussions Aelthian experienced when he attempted to direct this magic against a foe too powerful to directly harm.\nThis version draws upon the ancient legacy of the forest itself by calling upon the remnants of primal spirits that remain locked away in Tanglebriar, bolstering them with elven magic. Successfully performing the ritual in an area in which Treerazer is currently located is more difficult, but the ritual's effects can weaken and distract him. If Treerazer is slain or banished, the effects of this ritual are longer lasting and less expensive—see \"Cleansing Tanglebriar\" on page 67 of this volume for more details.\nPurify Tanglebriar's primary caster must succeed at a DC 41 check, while the secondary casters must succeed at a DC 36 check. If Treerazer is present in the ritual's targeted area, these checks increase to DC 43 for the primary caster and DC 38 for the secondary casters, but if the primary caster wears the Viridian Crown, all checks for the primary and secondary casters are reduced by 5.\nCritical Success The region within the area grows less blighted for 1 month (during which time additional purify Tanglebriar attempts in this area have no additional effect). Greater difficult terrain becomes difficult terrain; difficult terrain becomes regular terrain, and hazardous terrain becomes non-hazardous. All DCs to Sense Direction, Subsist, and to resist environmental afflictions in the area are reduced by 4. Creatures allied with Treerazer take a –2 status penalty to Initiative checks within this region. If Treerazer is in the area when the ritual is performed, the party gains 2 Torment points toward weakening the demon lord and 2 Triumph Points.\nSpell Effect: Purify Tanglebriar\nSuccess As critical success, but for 1 week (during which time additional purify Tanglebriar attempts in this area have no additional effect). Creatures allied with Treerazer take no penalty to Initiative checks. If Treerazer is in the area when the ritual is performed, the party gains 1 Torment Point and 1 Triumph Point.\nFailure The region is unaffected.\nCritical Failure The region is unaffected, and the magic itself becomes corrupted and backfires on the casters. Each caster takes 20d6 void damage (check (fortitude, dc:38, basic) save) as the purification energies sap away life itself. For 1 month, any attempt by that same primary caster to perform purify Tanglebriar increases its DCs by 5.",
      "castingTime": "8 hours",
      "range": "1-mile-radius circle centered on you",
      "target": "",
      "area": null,
      "duration": "see text",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1810,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Sense Direction",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Sense Direction",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Sense Direction",
          "sourceId": "fJImDBQfqfjKJOhk",
          "name": "Sense Direction",
          "type": "action"
        },
        "owner": {
          "sourceId": "ZVdKM0HkgpWykrqf",
          "name": "Purify Tanglebriar",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1867,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Subsist",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Subsist",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Subsist",
          "sourceId": "49y9Ec4bDii8pcD3",
          "name": "Subsist",
          "type": "action"
        },
        "owner": {
          "sourceId": "ZVdKM0HkgpWykrqf",
          "name": "Purify Tanglebriar",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 2236,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Purify Tanglebriar",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Purify Tanglebriar",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Purify Tanglebriar",
          "sourceId": "4ne9K5IQm2whokHP",
          "name": "Spell Effect: Purify Tanglebriar",
          "type": "effect"
        },
        "owner": {
          "sourceId": "ZVdKM0HkgpWykrqf",
          "name": "Purify Tanglebriar",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:rite-of-cleansing-flame",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "KwDyrUIlnOrpdxYi",
      "slug": "rite-of-cleansing-flame",
      "publicationTitle": "Pathfinder #216: The Acropolis Pyre",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:843ea411d0831203da916c8cd100f154f093660349a140a14de173fc3dfb42c9",
    "translatableHash": "sha256:3f33f2407b1e6042ae36a7ef23a60dfe3b04a5bb63dffa3db5c0b8b58f8fc578",
    "data": {
      "schemaVersion": 1,
      "name": "Rite of Cleansing Flame",
      "rank": 2,
      "rarity": "rare",
      "traits": [
        "consecration",
        "fire"
      ],
      "traditions": [],
      "description": "Drawing on the latent power suffused within Pol-Bailax by its phoenix patron, you and the secondary casters send an ephemeral rush of cleansing energy through the city. Those within the area when the ritual successfully concludes are immediately cured of all detrimental emotion and mental effects; affected creatures cease any current hostilities as though they'd failed a save against calm, though this doesn't control their future actions.\nCritical Success The ritual's power lingers within its casters, granting them a +1 status bonus against emotion and mental effects for 1 month.\nSpell Effect: Rite of Cleansing Flame (Critical Success)\nSuccess The ritual succeeds.\nFailure The ritual has its intended effect, but alters its casters' forms as they fail to contain the phoenix's power. All casters develop a feature reminiscent of a phoenix, such as feathers, glowing red eyes, or talons, and gain weakness 5 to cold and unholy. This is a curse effect.\nSpell Effect: Rite of Cleansing Flame (Failure)\nCritical Failure As failure, but each caster must succeed at a check (fortitude, dc:17) save or be permanently Drained 1 for as long as they have the phoenix features.",
      "castingTime": "8 hours",
      "range": "",
      "target": "The city-state of Pol-Bailax",
      "area": null,
      "duration": "instantaneous",
      "defense": null,
      "damage": [],
      "heightening": ""
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 626,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Rite of Cleansing Flame (Critical Success)",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Rite of Cleansing Flame (Critical Success)",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Rite of Cleansing Flame (Critical Success)",
          "sourceId": "j7A1QXHJNxt1d1ED",
          "name": "Spell Effect: Rite of Cleansing Flame (Critical Success)",
          "type": "effect"
        },
        "owner": {
          "sourceId": "KwDyrUIlnOrpdxYi",
          "name": "Rite of Cleansing Flame",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1095,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Rite of Cleansing Flame (Failure)",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Rite of Cleansing Flame (Failure)",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Rite of Cleansing Flame (Failure)",
          "sourceId": "KhBRuP0Wl2P5okGo",
          "name": "Spell Effect: Rite of Cleansing Flame (Failure)",
          "type": "effect"
        },
        "owner": {
          "sourceId": "KwDyrUIlnOrpdxYi",
          "name": "Rite of Cleansing Flame",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1319,
        "uuid": "Compendium.pf2e.conditionitems.Item.Drained",
        "label": "Drained 1",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Drained",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Drained",
          "sourceId": "4D2KBtexWXa6oUMR",
          "name": "Drained",
          "type": "condition"
        },
        "owner": {
          "sourceId": "KwDyrUIlnOrpdxYi",
          "name": "Rite of Cleansing Flame",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:labyrinthine-prison",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "WRRbNyGam4ytTRgr",
      "slug": "labyrinthine-prison",
      "publicationTitle": "Pathfinder #217: Death Sails a Wine-Dark Sea",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:6911adcae0960798332ce98b2b13edbaf02aaa5cfd5d3390448a518b2dc5d8ef",
    "translatableHash": "sha256:eefeb0ed341a75c10ace8ab10679b8ec27c86cafdeff67d1e05f3bdbe7bcb453",
    "data": {
      "schemaVersion": 1,
      "name": "Labyrinthine Prison",
      "rank": 3,
      "rarity": "rare",
      "traits": [
        "mythic",
        "teleportation"
      ],
      "traditions": [],
      "description": "This ritual was developed by a long-dead minotaur hero-god whose cult trained to hunt and trap evil beings. It creates a maze of ever-shifting warped space woven from intertwined demiplanes that twist in ways few can solve.\nYou and the secondary casters draw a maze of twisted space into being with the target at its center. An unwilling target must be Immobilized, Unconscious, or otherwise prevented from leaving the area for the entire casting time, or the ritual fails. An unwilling target can attempt a Will save to resist the ritual; on a critical success, treat the result as critically failing to cast the ritual. While the target is trapped within the labyrinthine prison, they cannot escape it, as even abilities that give access to other planes are subject to being twisted into the maze. Instead the only way to escape is by succeeding at a Maze Lore, Perception, or Survival check against the labyrinthine prison's DC. This check can be attempted once per week, and the first check can only be attempted after a week has passed. If all casters spend one Mythic Point each, this interval changes to one year, and the DC uses the primary caster's mythic proficiency.\nCritical Success As success, and the twisted space renders the target Stupefied 2 while within.\nSuccess The target is trapped within the labyrinthine prison for the duration of ritual.\nFailure The ritual fails to trap the target.\nCritical Failure As failure, and the casters are all Stupefied 4 for 1 week.\nHeightened (4th) The maximum level of the target is 10. The cost is the target's level (minimum 1) × 40 gp. The interval becomes 1 month, and spending Mythic Points increases it to 5 years.\nHeightened (5th) The maximum level of the target is 12. The cost is the target's level (minimum 1) × 75 gp. The interval becomes 2 months, and spending Mythic Points increases it to 10 years.\nHeightened (6th) The maximum level of the target is 14. The cost is the target's level (minimum 1) × 125 gp. The interval becomes 6 months, and spending Mythic Points increases it to 30 years.\nHeightened (7th) The maximum level of the target is 16. The cost is the target's level (minimum 1) × 200 gp. The interval becomes 1 year, and spending Mythic Points increases it to 50 years.\nHeightened (8th) The maximum level of the target is 18. The cost is the target's level (minimum 1) × 300 gp. The interval becomes 2 years, and spending Mythic Points increases it to 100 years.\nHeightened (9th) The maximum level of the target is 20. The cost is the target's level (minimum 1) × 600 gp. The interval becomes 5 years, and spending Mythic Points increases it to 200 years.",
      "castingTime": "1 day",
      "range": "60 feet",
      "target": "1 creature of up to 8th level",
      "area": null,
      "duration": "varies",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) The maximum level of the target is 10. The cost is the target's level (minimum 1) × 40 gp. The interval becomes 1 month, and spending Mythic Points increases it to 5 years.\nHeightened (5th) The maximum level of the target is 12. The cost is the target's level (minimum 1) × 75 gp. The interval becomes 2 months, and spending Mythic Points increases it to 10 years.\nHeightened (6th) The maximum level of the target is 14. The cost is the target's level (minimum 1) × 125 gp. The interval becomes 6 months, and spending Mythic Points increases it to 30 years.\nHeightened (7th) The maximum level of the target is 16. The cost is the target's level (minimum 1) × 200 gp. The interval becomes 1 year, and spending Mythic Points increases it to 50 years.\nHeightened (8th) The maximum level of the target is 18. The cost is the target's level (minimum 1) × 300 gp. The interval becomes 2 years, and spending Mythic Points increases it to 100 years.\nHeightened (9th) The maximum level of the target is 20. The cost is the target's level (minimum 1) × 600 gp. The interval becomes 5 years, and spending Mythic Points increases it to 200 years."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 363,
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
          "sourceId": "WRRbNyGam4ytTRgr",
          "name": "Labyrinthine Prison",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 419,
        "uuid": "Compendium.pf2e.conditionitems.Item.Unconscious",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Unconscious",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Unconscious",
          "sourceId": "fBnFDH2MTzgFijKf",
          "name": "Unconscious",
          "type": "condition"
        },
        "owner": {
          "sourceId": "WRRbNyGam4ytTRgr",
          "name": "Labyrinthine Prison",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1373,
        "uuid": "Compendium.pf2e.conditionitems.Item.Stupefied",
        "label": "Stupefied 2",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Stupefied",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Stupefied",
          "sourceId": "e1XGnhKNSQIm5IXg",
          "name": "Stupefied",
          "type": "condition"
        },
        "owner": {
          "sourceId": "WRRbNyGam4ytTRgr",
          "name": "Labyrinthine Prison",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1712,
        "uuid": "Compendium.pf2e.conditionitems.Item.Stupefied",
        "label": "Stupefied 4",
        "target": {
          "uuid": "Compendium.pf2e.conditionitems.Item.Stupefied",
          "package": "pf2e",
          "sourcePack": "conditionitems",
          "documentType": "Item",
          "compendiumKey": "Stupefied",
          "sourceId": "e1XGnhKNSQIm5IXg",
          "name": "Stupefied",
          "type": "condition"
        },
        "owner": {
          "sourceId": "WRRbNyGam4ytTRgr",
          "name": "Labyrinthine Prison",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:ash-strewn-ending",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "QqMlN9VSHfD2v4Qv",
      "slug": "ash-strewn-ending",
      "publicationTitle": "Pathfinder #218: Titanbane",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:dae65f5b8320d84ecafcc4825c4f56f13dce96db15ab4a7f6ed8360d1e78dc78",
    "translatableHash": "sha256:9889c5d3c6cb7eed4c23e3482e8a47fd438921de8d55c8c5bcb3eccf6f27ac47",
    "data": {
      "schemaVersion": 1,
      "name": "Ash-Strewn Ending",
      "rank": 4,
      "rarity": "rare",
      "traits": [
        "death",
        "mythic"
      ],
      "traditions": [],
      "description": "Lo, speak of the hero-gods and their ash-strewn endings! Sing of their might as it falls on the land! Taste the bone and char that binds their life to yours! This ritual focuses on the burning of a mythic creature's corpse on a pyre in an outdoor location. Once the corpse has been reduced to ashes, the wind scatters those ashes across a 1,000-foot radius. As the ash lands on creatures within this radius, a fragment of the dead creature's mythic power flows into them.\nCritical Success Death has a lessened claim upon those in the ritual's area of effect. All creatures that were of a level equal to or lower than the level of the mythic creature incinerated as part of the ritual gain resistance 10 to void damage and a +2 status bonus to saving throws against death effects and to recovery checks.\nSuccess As critical success, but only as long as the creature remains in the ritual's area.\nFailure The ritual has no effect.\nCritical Failure Grief washes over the area, and the threat of death looms more closely over the casters, who all gain weakness 10 to void damage and a –2 status penalty to saving throws against death effects and to recovery checks. This is a curse effect.\nSpell Effect: Ash-Strewn Ending\nHeightened (6th) The area increases to a 1-mile radius, the duration increases to 1 month, the void resistance (or weakness) increases to 15, and the status bonus (or penalty) increases to +3.\nHeightened (8th) The area increases to 10 miles, the duration increases to 1 year, the void resistance (or weakness) increases to 20, and the status bonus (or penalty) increases to +4.\nHeightened (10th) As 8th rank, but one GM-selected non-mythic creature in the area becomes mythic. This creature's attitude and personality is favorable toward the primary caster.",
      "castingTime": "8 hours",
      "range": "10 feet",
      "target": "",
      "area": "1000 burst",
      "duration": "1 week",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (6th) The area increases to a 1-mile radius, the duration increases to 1 month, the void resistance (or weakness) increases to 15, and the status bonus (or penalty) increases to +3.\nHeightened (8th) The area increases to 10 miles, the duration increases to 1 year, the void resistance (or weakness) increases to 20, and the status bonus (or penalty) increases to +4.\nHeightened (10th) As 8th rank, but one GM-selected non-mythic creature in the area becomes mythic. This creature's attitude and personality is favorable toward the primary caster."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1297,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Ash-Strewn Ending",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Ash-Strewn Ending",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Ash-Strewn Ending",
          "sourceId": "AocUY91Tpy1QCdyu",
          "name": "Spell Effect: Ash-Strewn Ending",
          "type": "effect"
        },
        "owner": {
          "sourceId": "QqMlN9VSHfD2v4Qv",
          "name": "Ash-Strewn Ending",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:footholds-and-foothills",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "QGfVFyQhoalZbE9s",
      "slug": "footholds-and-foothills",
      "publicationTitle": "Pathfinder #218: Titanbane",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:ae27b54f028a8b0e3b9bc5c9ae5ac1b52578dc6f706c44ed72b0e1d51f335f92",
    "translatableHash": "sha256:a293d72ed64b23db74366067decdaa759e1f70778e98799cb38ffbf8f5dd7fcc",
    "data": {
      "schemaVersion": 1,
      "name": "Footholds and Foothills",
      "rank": 5,
      "rarity": "rare",
      "traits": [
        "mythic"
      ],
      "traditions": [],
      "description": "The physical world resists changes, but this can be subdued like any other foe. The hero-god of movement and mountains, the sure-footed Helidys, found the islands of Iblydos stubborn and unwilling to bend to his will. He asked a sandbar to lower itself so his ship could pass, but it refused. He asked again, and the sandbar told him to wait for the tides to change. On his third ask, he didn't wait for a response, and instead leapt from his ship and wrestled with it. The sandbar pushed and pulled with the currents, but Helidys succeeded and flattened the sandbar into a ribbon with his bare hands.\nWhen you cast this ritual, select to add, remove, roughen, or smooth out the area.\nAdd You create new terrain, selecting earth, stone, or water when you cast this ritual. Any creature within the newly created terrain's area moves to the closest available space. The new terrain can be created in a space that would not typically support it, such as a floating island.\nRemove You create a 30-foot-deep crater-like depression in the area. Unless otherwise specified, the terrain immediately beneath the destroyed area is the same type. Water flows into the crater if such is present along the area's circumference. Creatures standing on the destroyed terrain can attempt to Grab an Edge if they are adjacent to a non-destroyed space. Otherwise, they use the typical rules for falling.\nRoughen You transform the area into difficult terrain. If the area was already difficult terrain, it becomes greater difficult terrain.\nSmooth You transform an area of difficult terrain into normal terrain, or an area of greater difficult terrain into difficult terrain.\nCritical Success You transform the area of your choice permanently.\nSuccess You transform the area for the ritual's duration.\nFailure You fail to transform the area.\nCritical Failure The ritual backfires, and now the land knows how to easily beat you. For the next week, the primary caster treats all instances of the terrain they attempted to manipulate as difficult terrain (or difficult terrain as greater difficult terrain).\nHeightened 1 The area increases by 20 feet.",
      "castingTime": "1 day",
      "range": "120 feet",
      "target": "area that doesn't contain any structures",
      "area": "30 burst",
      "duration": "1 week",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 The area increases by 20 feet."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1332,
        "uuid": "Compendium.pf2e.actionspf2e.Item.Grab an Edge",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.actionspf2e.Item.Grab an Edge",
          "package": "pf2e",
          "sourcePack": "actionspf2e",
          "documentType": "Item",
          "compendiumKey": "Grab an Edge",
          "sourceId": "3yoajuKjwHZ9ApUY",
          "name": "Grab an Edge",
          "type": "action"
        },
        "owner": {
          "sourceId": "QGfVFyQhoalZbE9s",
          "name": "Footholds and Foothills",
          "type": "spell"
        }
      }
    ]
  },
  {
    "contentId": "pf2e:spell:spells-srd:raise-runelord",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "fr1AGcQo7WuvLvUi",
      "slug": "raise-runelord",
      "publicationTitle": "Pathfinder #219: Lord of the Trinity Star",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:a3103dee3c6acc36865e2c56a58584913b08840865d50e12f4f12cde5fe9a855",
    "translatableHash": "sha256:559567ed9598890b6467f802a492e8096eefc06e1ae329d61ac0fca8bf0ed8ea",
    "data": {
      "schemaVersion": 1,
      "name": "Raise Runelord",
      "rank": 6,
      "rarity": "rare",
      "traits": [
        "dream",
        "illusion",
        "mythic"
      ],
      "traditions": [],
      "description": "By drawing upon fragments of physical remains or treasured objects of a dead runelord and upon remnant energies of each runelord that live on after their deaths in the Dreamlands, this ritual creates a physical illusion of a long-dead runelord. There can only exist a limited number of risen runelords at a time, since each must be created from one of the finite number of dead runelords, although there's no limit as to how many times a risen runelord can be created to replace one who was destroyed. Risen runelords cannot be made from living or undead runelords. This leaves 32 potential risen runelords in the world at any one time as of the start of Revenge of the Runelords. This ritual creates an 11th-level risen runelord associated with the original runelord's sin, but the duration of that runelord's life depends on the ritual's result. As long as this ritual's inventor, Runelord Xanderghul, still lives, any attempt to cast this ritual by any other creature can never achieve a greater success than failure.\nCritical Success You create a risen runelord with a lifespan of decades, if not more.\nSuccess You create a risen runelord with a lifespan of 10 days.\nFailure You fail to create the risen runelord.\nCritical Failure You fail to create a risen runelord but also attract the attention of vengeful psychopomps who manifest in place of the risen runelord. This should be a severe encounter of a level equal to the primary caster against a mix of psychopomps, who attack at once and fight to the death.\nHeightened (7th) You can create a 14th-level risen runelord, and the cost is 3,000 gp.\nHeightened (8th) You can create a 16th-level risen runelord, and the cost is 5,000 gp.\nHeightened (9th) You can create an 18th-level risen runelord, and the cost is 10,000 gp.\nHeightened (10th) You can create a 20th-level risen runelord, and the cost is 20,000 gp.",
      "castingTime": "1 day",
      "range": "",
      "target": "1 dead runelord who is not already active as a risen runelord",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (7th) You can create a 14th-level risen runelord, and the cost is 3,000 gp.\nHeightened (8th) You can create a 16th-level risen runelord, and the cost is 5,000 gp.\nHeightened (9th) You can create an 18th-level risen runelord, and the cost is 10,000 gp.\nHeightened (10th) You can create a 20th-level risen runelord, and the cost is 20,000 gp."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:divine-keystone",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "xKHq2Eisapixvj6q",
      "slug": "divine-keystone",
      "publicationTitle": "Pathfinder Adventure Path: Hellbreakers",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:3daa7cc99973cbf4613a5564622d59e392cf75547142faf2176d89ae7f54e224",
    "translatableHash": "sha256:878c277274446c14fc4b2336304f8d46465b0eb076430d8eb0e0441ec80fcc2e",
    "data": {
      "schemaVersion": 1,
      "name": "Divine Keystone",
      "rank": 4,
      "rarity": "rare",
      "traits": [
        "consecration",
        "holy"
      ],
      "traditions": [],
      "description": "You magically remove and consecrate the cornerstone of a building or ruin in the center of a settlement before returning the stone to its structure to spread its divine protection into the settlement around it. Once the final hammer strike returns the stone to its structure, the area protected by the sanctified stone becomes a sacred space, protecting the living from undead. Within the protected area, the consecrated site is holy, undead creatures can't be created or raised, and living creatures are Invisible to the undead.\nA successful Dispel Magic used on a specific effect removes only that effect (such as the invisibility effect). However, destroying or removing the keystone ends the entire ritual and all its effects.\nCritical Success You create the effects described above, and the keystone's consecration effect doubles its radius.\nSuccess You create the effects described above.\nFailure The ritual has no effect.\nCritical Failure The area becomes a font of power for undead for the next month. All undead creatures in the ritual's area gain fast healing 3 and resistance 3 to holy.\nSpell Effect: Divine Keystone (Critical Failure)\nHeightened 1 The emanation protected by the keystone increases by 20 feet.",
      "castingTime": "4 days",
      "range": "",
      "target": "",
      "area": "100 emanation",
      "duration": "1 week",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 The emanation protected by the keystone increases by 20 feet."
    },
    "sourceReferences": [
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 508,
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
          "sourceId": "xKHq2Eisapixvj6q",
          "name": "Divine Keystone",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 596,
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
          "sourceId": "xKHq2Eisapixvj6q",
          "name": "Divine Keystone",
          "type": "spell"
        }
      },
      {
        "syntax": "INLINE_UUID",
        "sourcePath": "/system/description/value",
        "sourceIndex": 1298,
        "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Divine Keystone (Critical Failure)",
        "label": null,
        "target": {
          "uuid": "Compendium.pf2e.spell-effects.Item.Spell Effect: Divine Keystone (Critical Failure)",
          "package": "pf2e",
          "sourcePack": "spell-effects",
          "documentType": "Item",
          "compendiumKey": "Spell Effect: Divine Keystone (Critical Failure)",
          "sourceId": "LiQDQYAYYE6Qg4yI",
          "name": "Spell Effect: Divine Keystone (Critical Failure)",
          "type": "effect"
        },
        "owner": {
          "sourceId": "xKHq2Eisapixvj6q",
          "name": "Divine Keystone",
          "type": "spell"
        }
      }
    ]
  }
]
