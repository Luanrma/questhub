import type { Pathfinder2eOriginalContentRecord } from '../../records'
import type { Pathfinder2eSpellData } from '../types'

export const PATHFINDER_2E_EXHAUSTIVE_25_SPELL_ORIGINALS: readonly Pathfinder2eOriginalContentRecord<Pathfinder2eSpellData>[] = [
  {
    "contentId": "pf2e:spell:spells-srd:wind-jump",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "kRxlkPPe6Gr7Du59",
      "slug": "wind-jump",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/wind-jump.webp"
    },
    "sourceHash": "sha256:a0c06c68cbfebafb8bc5f396c0db4fddeb7648964fa2a998c657fd5eda0c671e",
    "translatableHash": "sha256:ddc8d0afb749ed475be03241aa016698f5e252093bb889481443ba6978afa912",
    "data": {
      "schemaVersion": 1,
      "name": "Wind Jump",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "air",
        "concentrate",
        "focus",
        "monk"
      ],
      "traditions": [],
      "description": "You gain a fly Speed equal to your Speed. You must end your turn on solid ground, or you fall.\nHeightened (6th) At the end of your turn, you can attempt a check (acrobatics, dc:30) check to find purchase in midair. If you succeed, you don't fall.\nSpell Effect: Wind Jump",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (6th) At the end of your turn, you can attempt a check (acrobatics, dc:30) check to find purchase in midair. If you succeed, you don't fall.\nSpell Effect: Wind Jump"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:elemental-blast",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Qlp8G3knwLGhAxQ0",
      "slug": "elemental-blast",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/elemental-blast.webp"
    },
    "sourceHash": "sha256:88c784f1cee5be1c0021eac33246c257d841a7fc11a32868b1fc0b35dd132064",
    "translatableHash": "sha256:b35de1c88e57442e3aeaee3af775af388f36c69eed6b8e7ad19a17cf16730d95",
    "data": {
      "schemaVersion": 1,
      "name": "Elemental Blast",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate",
        "sorcerer"
      ],
      "traditions": [],
      "description": "Area 10-foot burst, 30-foot cone, or 60-foot line\nYou gather elemental energy and blast your foes in one of the various listed shapes of your choosing, dealing 8d6 damage. This spell deals damage according to your elemental influence (for instance, slashing for air or fire for fire) and has your element's trait.\nHeightened 1 The damage increases by 2d6.",
      "castingTime": "2 actions",
      "range": "30 feet (burst only)",
      "target": "",
      "area": null,
      "duration": "",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "8d6",
          "type": "untyped",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:spectral-advance",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "VNAOHrWhNYX3jKdy",
      "slug": "spectral-advance",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:5be51a34b0fa368c475f52408dcc8db2990fb447b00e5a82da3ffa2bcb940581",
    "translatableHash": "sha256:ac6b1512ee7d402bb46441296b59a4aab927d7c7262825528befe2979f0a933c",
    "data": {
      "schemaVersion": 1,
      "name": "Spectral Advance",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "champion",
        "concentrate",
        "focus",
        "polymorph",
        "spirit"
      ],
      "traditions": [],
      "description": "Taking on a spiritual form, you flash across the battlefield to engage an enemy. You Stride to a space adjacent to an enemy. If you cast the spell using 2 actions, you can Stride twice instead of once. If you have a fly Speed, you can Fly instead of Striding.\nIf you're mounted, you can have your mount move instead of you. Movement from spectral advance doesn't trigger reactions and ignores difficult terrain and greater difficult terrain. During the movement, you (or your mount) have resistance equal to your level to all damage.\nSpell Effect: Spectral Advance",
      "castingTime": "1 or 2",
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
    "contentId": "pf2e:spell:spells-srd:youre-mine",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "x2LALaHXO7644GQA",
      "slug": "youre-mine",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:79020c843241680c8efc2ffa83bd34e1cbddf95e51114dbf5d9b993a3bdd07a2",
    "translatableHash": "sha256:ffa06c4ac4fd08c567148fb1a784b9e0137b57d74126e8f808b2e3a7690e108d",
    "data": {
      "schemaVersion": 1,
      "name": "You're Mine",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "emotion",
        "focus",
        "incapacitation",
        "manipulate",
        "mental",
        "sorcerer"
      ],
      "traditions": [],
      "description": "You manipulate the target's emotions, potentially allowing you to control it for a brief instant. The target must attempt a Will save.\nCritical Success The target is unaffected.\nSuccess The target is Stunned 1.\nFailure On the target's next turn, it's Stunned 1 and you partially control it, causing it to take a single action of your choice. If it has actions left, it can act normally.\nCritical Failure The target is Controlled for 1 round.\nHeightened (7th) On a failure, the target is Controlled for 1 round. On a critical failure, the target is Controlled for up to 1 minute; it receives a new Will save at the end of each of its turns, and on a success, the spell ends.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 round",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened (7th) On a failure, the target is Controlled for 1 round. On a critical failure, the target is Controlled for up to 1 minute; it receives a new Will save at the end of each of its turns, and on a success, the spell ends."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:life-giving-form",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "9kOI14Jep97TzGO7",
      "slug": "life-giving-form",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/life-giving-form.webp"
    },
    "sourceHash": "sha256:a81cbf126a670d948ea5f81311543c128461f333451a88319babbf0880e65f52",
    "translatableHash": "sha256:1b9a54806d120711ccc709236dc4578b9fcede135e771f81bb27539ac49afcc0",
    "data": {
      "schemaVersion": 1,
      "name": "Life-Giving Form",
      "rank": 6,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "healing",
        "light",
        "manipulate",
        "oracle",
        "vitality"
      ],
      "traditions": [],
      "description": "You transcend your physical form, becoming a beacon of healing energy. Your body exudes bright light like a torch. You gain resistance 5 to precision damage and weakness 5 to void damage, and your unarmed Strikes deal an extra 1d4 vitality damage. You can touch a living creature with an Interact action to restore 6d8 healing Hit Points to it, and when a creature touches you with an Interact action you can allow it to gain the same healing; either way, the creature becomes temporarily immune to life-giving form's healing for 1 minute. This is a vitality healing effect. You can't heal yourself with life-giving form. A creature harmed by vitality damage (such as an undead) that touches you or damages you with an unarmed attack or non-reach melee weapon instead takes (3d4 + 0 vitality damage, and it doesn't become temporarily immune. You can Dismiss this spell.\nSpell Effect: Life-Giving Form\nHeightened 1 The Hit Points restored with an Interact action increases by 1d8, the vitality damage increases by 1, and the resistance and weakness increases by 1",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 The Hit Points restored with an Interact action increases by 1d8, the vitality damage increases by 1, and the resistance and weakness increases by 1"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:flaming-fusillade",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "bynT1UKaDqr8dLNM",
      "slug": "flaming-fusillade",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:6c637fa951b9b4e0f6dcdead4265f0364bb9909c97efa822d3217d1e6ed911b2",
    "translatableHash": "sha256:d09164448e525b6f884143d7ad7d598015280e75c964247304990cee45112978",
    "data": {
      "schemaVersion": 1,
      "name": "Flaming Fusillade",
      "rank": 6,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "fire",
        "focus",
        "manipulate",
        "oracle"
      ],
      "traditions": [],
      "description": "You call upon an endless barrage of flames, a series of explosions bursting around you like miniature suns. You cast Ignition as part of casting flaming fusillade. For the duration of flaming fusillade, ignition's casting time is reduced from 2 actions to 1.\nHeightened (9th) For the duration, you also gain a status bonus to damage dealt by ignition equal to flaming fusillade's spell rank.\nSpell Effect: Flaming Fusillade",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (9th) For the duration, you also gain a status bonus to damage dealt by ignition equal to flaming fusillade's spell rank.\nSpell Effect: Flaming Fusillade"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:revel-in-retribution",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Eed8QBWBtpufl1iP",
      "slug": "revel-in-retribution",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:ebee41318f83eaf34686cc2bd45390ba2b45fdc92cc91755f1b00428cb26f282",
    "translatableHash": "sha256:2e393703953b27a91632be3974a2531c9ca72b8a039c08a6b22fff5bb6ff21df",
    "data": {
      "schemaVersion": 1,
      "name": "Revel in Retribution",
      "rank": 6,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate",
        "mental",
        "oracle"
      ],
      "traditions": [],
      "description": "Time seems to slow for you, allowing you to strike your opponents mid-move. You gain the Reactive Strike ability, and you immediately gain a second reaction that you can use only to use Reactive Strike. At the start of each of your subsequent turns when you regain your actions, you gain an additional reaction that can be used only to attempt a Reactive Strike.\nSpell Effect: Revel in Retribution\nLashing out at a defenseless enemy invigorates you with the thrill of combat, granting you 5 temporary Hit Points whenever you successfully hit with a Reactive Strike. The temporary Hit Points last for the spell's duration.\nHeightened 1 The temporary Hit Points you gain from a successful Reactive Strike increase by 1.",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 The temporary Hit Points you gain from a successful Reactive Strike increase by 1."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:claim-undead",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "GzN9bG6cKZ96YC6l",
      "slug": "claim-undead",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/claim-undead.webp"
    },
    "sourceHash": "sha256:fb6852bfa3cc16fd768908efc6a54db4371c700dd2238d5a6a8a274085955012",
    "translatableHash": "sha256:d7aa51b23bbbf40eb17808047a9315272a5aa60011b88c4c1a3beb15d7c13179",
    "data": {
      "schemaVersion": 1,
      "name": "Claim Undead",
      "rank": 6,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "incapacitation",
        "manipulate",
        "oracle"
      ],
      "traditions": [],
      "description": "You attempt to wrest control of a target undead or force it to recognize you as its master. If the target is controlled by another creature, that controller attempts a Will saving throw to retain control; otherwise, the target must attempt a Will save.\nCritical Success The target is unaffected.\nSuccess The target is Stunned 1 and Confused for 1 round as it fights off your commands.\nFailure The target becomes controlled by you and follows your orders. It (or the creature previously controlling it) can attempt a new Will save at the end of each of its turns; on a success, the spell ends, and the creature becomes stunned 1 and confused for 1 round. If you issue an obviously self-destructive order, the target doesn't act until you issue a new order.\nCritical Failure As failure, but the target (or the creature previously controlling it) receives a new save only if you give it a new order that is against its nature.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 undead creature",
      "area": null,
      "duration": "10 minutes",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:moonlight-bridge",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "In2A7GCyxxaqZdPI",
      "slug": "moonlight-bridge",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/moonlight-bridge.webp"
    },
    "sourceHash": "sha256:722da6cf06c1b6850a2c3f3db038b203ff3bd23ed957a685927f8c366c0ad0a2",
    "translatableHash": "sha256:41c70306d4096f047229b7ec598f5d303b0db309f4808d3cd125a3d4e82a102a",
    "data": {
      "schemaVersion": 1,
      "name": "Moonlight Bridge",
      "rank": 6,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "light",
        "manipulate",
        "oracle"
      ],
      "traditions": [],
      "description": "You summon a bridge of radiant, shimmering moonlight.\nThe 10-foot-wide span must start at the ground on a point within range, and it extends as a horizontal plane, either in a straight line or at any angle up to 45 degrees upward or downward, for up to 120 feet.\nThis bridge has AC 10, Hardness 30, and 60 Hit Points, and it's immune to all damage (except force, spirit, and damage from Strikes with the Ghost Touch property rune). You and your allies can cross the bridge normally, but other creatures simply pass through it if they try to do so. The bridge blocks physical, ethereal, and incorporeal attacks from crossing, whether from above or below.\nYou can Dismiss the spell.\nHeightened 1 The length of the bridge increases by 20 feet, and its Hit Points increase by 20, and you can increase the width of the span by up to an additional 5 feet.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 The length of the bridge increases by 20 feet, and its Hit Points increase by 20, and you can increase the width of the span by up to an additional 5 feet."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:champions-sacrifice",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "USM530HlzZ1RMd99",
      "slug": "champions-sacrifice",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/champions-sacrifice.webp"
    },
    "sourceHash": "sha256:ca7bdeeb541efb15c89d39237759b1cfa41b5a6e53163e68ab5f4db0ff2d153b",
    "translatableHash": "sha256:dce861cc9a6f3458d9e51930072c1b784f0e1da0b43c1928b36cbc8468653e78",
    "data": {
      "schemaVersion": 1,
      "name": "Champion's Sacrifice",
      "rank": 6,
      "rarity": "uncommon",
      "traits": [
        "champion",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "Trigger An ally is hit by a Strike, or an ally fails a saving throw against an effect that doesn't affect you.\nYou form a link with an ally, allowing you to take harm in their stead. All the effects of the hit or failed save are applied to you instead of the target. For example, if the target critically fails a saving throw against a fireball, you would take double damage. These effects ignore any resistances, immunities, or other abilities you have that might mitigate them in any way, although those of the target apply before you take the effect",
      "castingTime": "reaction",
      "range": "30 feet",
      "target": "the triggering ally",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:ancestral-form",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "xEjGEBvTfDJECSki",
      "slug": "ancestral-form",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:94092ff6653db153b414f8bd3ef7db4c12798ff4f9fa32d989c203e1a1edfeea",
    "translatableHash": "sha256:0e3991eb478e07d3c9a43d8e501c033f59bb6773c12e174bdfcf3b71de70bab7",
    "data": {
      "schemaVersion": 1,
      "name": "Ancestral Form",
      "rank": 6,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate",
        "oracle"
      ],
      "traditions": [],
      "description": "You take the form of your ancestral spirits, becoming Invisible and quasi-corporeal. You gain resistance 10 to all damage (except force, spirit and damage from Strikes with the Ghost Touch property rune), and this resistance is doubled against non-magical and precision damage.\nYou gain a fly Speed equal to your land Speed; when Flying, moving upward isn't difficult terrain for you. You can't move through solid objects, but you can float through tiny gaps.\nYou can't Cast Spells (but you can Sustain Spells), activate items, or use actions that have the attack or manipulate trait.\nHeightened 2 The resistance increases by 5.\nSpell Effect: Ancestral Form",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 2 The resistance increases by 5.\nSpell Effect: Ancestral Form"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:dread-secret",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "XULNb8ItUsfupxqH",
      "slug": "dread-secret",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:c0e90f77b5d423736e2d6d5a0379b82ce1c0ed5409319bec5ed26a98920c1906",
    "translatableHash": "sha256:be2a11b52aceccf329c5a9b1afb44c7853abdb986b439fea4473d428e4adfdae",
    "data": {
      "schemaVersion": 1,
      "name": "Dread Secret",
      "rank": 6,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "emotion",
        "fear",
        "focus",
        "manipulate",
        "mental",
        "oracle"
      ],
      "traditions": [],
      "description": "You utter a powerful secret at odds with the fundamental nature of the target creatures. Choose a specific resistance or weakness with a numerical value that you believe one or more of the targets have due to Recall Knowledge or previous experience with the targets, such as resistance to fire or weakness to silver. If the information is incorrect for a given target, the spell has no effect on that target. Affected targets must attempt a Will saving throw.\nCritical Success The creature is unaffected.\nSuccess The creature takes 1 damage that matches the type or trait of weakness you chose (thus triggering the creature's weakness) if you chose a weakness, or loses its resistance until the end of your next turn if you chose a resistance.\nFailure As success, and the creature becomes Frightened 1 from the revelation of its dread secret.\nCritical Failure As failure, except the creature is Frightened 3",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "up to 6 creatures",
      "area": null,
      "duration": "until the end of your next turn",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:tempest-form",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "zhqnMOVPzVvWSUbC",
      "slug": "tempest-form",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/tempest-form.webp"
    },
    "sourceHash": "sha256:f20b61e8f08cf63640d343386428b45a47a19e9e0a588849a58fec18436b556f",
    "translatableHash": "sha256:085f1b6ac51e1b1ddfd1fdcb5330291f7ce558fc00546d7c292943631618db5b",
    "data": {
      "schemaVersion": 1,
      "name": "Tempest Form",
      "rank": 6,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate",
        "oracle",
        "polymorph"
      ],
      "traditions": [],
      "description": "Your body becomes fluid to better suit your surroundings. Choose whether to become air, water, or mist. The spell gains the air trait if you choose air or mist, and the water trait if you choose water or mist. You become amorphous, as does your armor. You lose any item bonus to AC and use your proficiency bonus for unarmored defense to determine your AC. You also gain resistance 10 to physical damage and become immune to precision damage. You can slip through tiny cracks and don't need to breathe. You can't cast spells, activate items, or use actions that have the attack or manipulate trait, except those granted by this spell. You also gain the following effects based on your form.\n• Air You gain a fly Speed of 20 feet and become Invisible while you are in the air. You can create the effects of a Gust of Wind from your space as a 2-action activity, which has the manipulate trait.\n• Mist You gain a fly Speed of 20 feet, and it becomes hard to see through you. Any creature on one side of your space who is targeted by a creature on the opposite side is Concealed to the targeting creature.\n• Water You gain a swim Speed of 20 feet and become invisible while you are in the water. You can electrically charge yourself by taking a single action, which has the manipulate trait. If you do, you are no longer invisible in the water due to electricity indicating your location, but any creature that makes a melee attack against you takes (1d6+max(0,3 -3))[electricity] damage.\nSpell Effect: Tempest Form\nHeightened 2 Increase the resistance by 5 and the electricity damage from the charged water form by 1.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 2 Increase the resistance by 5 and the electricity damage from the charged water form by 1."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:shadows-web",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "n8eEXXAtguoErW0y",
      "slug": "shadows-web",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:24d607654293fda9f1fbe3fa3502426b445ecc83b330beb6d77913804a68601e",
    "translatableHash": "sha256:415a3f45eca8bbb23da5706743588b60f18b7422b5ee41ee497e343aa4b2437c",
    "data": {
      "schemaVersion": 1,
      "name": "Shadow's Web",
      "rank": 7,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate",
        "monk"
      ],
      "traditions": [],
      "description": "Grasping darkness surges from you, dealing 14d4 void damage. Each creature in the area must attempt a Fortitude save.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage and is Enfeebled 1 for 1 round.\nFailure The creature takes full damage and is Enfeebled 2 for 1 round.\nCritical Failure The creature takes double damage, is Stunned 1, and enfeebled 2 for 1 round, and Immobilized for 1 round or until it Escapes, whichever comes first.\nHeightened 1 The void damage increases by 2d4.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "30 emanation",
      "duration": "",
      "defense": "fortitude save",
      "damage": [
        {
          "formula": "14d4",
          "type": "void",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The void damage increases by 2d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:touch-of-death",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Ovvflf5aFbmBxqq8",
      "slug": "touch-of-death",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/quivering-palm.webp"
    },
    "sourceHash": "sha256:9d1098c6a3f157e5baf1719e260dfe0214e755a5ea357a6f07aee6d35d3f196b",
    "translatableHash": "sha256:f3bbe8b7f7f8068497c0ce3c8c077f90aa624a39e61a34463304de00093455a2",
    "data": {
      "schemaVersion": 1,
      "name": "Touch of Death",
      "rank": 8,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "incapacitation",
        "manipulate",
        "monk"
      ],
      "traditions": [],
      "description": "Make a melee unarmed Strike. If you hit and the target is alive, anytime during the duration, you can spend a single action, which has the auditory and concentrate traits, to speak a word of death that could instantly slay it. The target must attempt a Fortitude save.\nCritical Success The target survives, the spell ends, and the target is then temporarily immune for 24 hours.\nSuccess The target is Stunned 1 and takes 5*8 damage, the spell ends, and the target is then temporarily immune for 24 hours.\nFailure The target is Stunned 3 and takes 10*8 damage. The spell's duration continues, but the target is then temporarily immune for 24 hours against being killed by touch of death.\nCritical Failure The target dies.\nIf you cast touch of death again, the effects of any touch of death you had previously cast end.\nHeightened 1 The damage increases by 10 on a failure, or 5 on a success.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 month",
      "defense": "fortitude save",
      "damage": [],
      "heightening": "Heightened 1 The damage increases by 10 on a failure, or 5 on a success."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:medusas-wrath",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "wTYxxYJWN348oV15",
      "slug": "medusas-wrath",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:61edeb71bebd97cb81b42132be4b50495559f7dc444b1fefb7c638f153d0c41e",
    "translatableHash": "sha256:4c574411af24c000a760c622d25aa0b1ec25426a9d479b0c75b1118f9e88adf1",
    "data": {
      "schemaVersion": 1,
      "name": "Medusa's Wrath",
      "rank": 8,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate",
        "monk"
      ],
      "traditions": [],
      "description": "You make an attack filled with a medusa's petrifying power. Make an unarmed Strike with the following additional effects.\nCritical Success The target is Slowed 2 and must attempt a Fortitude save at the end of each of its turns; this ongoing save has the incapacitation trait. On a failed save, the slowed condition increases by 1 (2 on a critical failure). A successful save reduces the slowed condition by 1. When a creature is unable to act due to the slowed condition from medusa's wrath, it is Petrified permanently. The spell ends if the creature is petrified or the slowed condition is removed.\nSuccess As critical success, but the target is initially Slowed 1",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "",
      "defense": "fortitude save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:embrace-nothingness",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "mau1Olq58ECF0ZPi",
      "slug": "embrace-nothingness",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/empty-body.webp"
    },
    "sourceHash": "sha256:378cbf947e7b6399c606c1c3b9cbf612e80f51cd1b30d19c37e45afe756fd423",
    "translatableHash": "sha256:29a057bb195b8a270a949eb15b5adda3cf0927311772c2ca297fd2af861e93c3",
    "data": {
      "schemaVersion": 1,
      "name": "Embrace Nothingness",
      "rank": 9,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate",
        "monk"
      ],
      "traditions": [],
      "description": "You empty your body of substance, becoming one with nothingness. You gain resistance to physical damage equal to your level. You move at half your normal Speed, but can move in any direction (including up and down). While moving, you have concealment. When it is not your turn and during your turn until you take an action with the move trait, you are Invisible. You can pass through solid inanimate objects as long as they are no more than 2 feet thick\nSpell Effect: Embrace Nothingness",
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
    "contentId": "pf2e:spell:spells-srd:qi-form",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "YDMOqndvYFu3OjA6",
      "slug": "qi-form",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:ec053b67232808fc6367dcf6858be0cffe7bf06948dc0c3ba15baa73cda41336",
    "translatableHash": "sha256:3944175e1cfaa039f54b07da88ccfa52d63a8f3897de18be99af9b7fdcd88363",
    "data": {
      "schemaVersion": 1,
      "name": "Qi Form",
      "rank": 9,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "monk",
        "polymorph"
      ],
      "traditions": [],
      "description": "Drawing from deep wells of spiritual power, you take on a special qi form. In your qi form, your hair, feathers, skin, or scales change color and begin to glow.\nIn this form, you gain a fly Speed equal to your land Speed. Choose force, spirit, vitality, or void damage. All your Strikes deal 1d6 additional damage of the chosen type.\nYour entire body is also surrounded by a glowing corona of the same color as your inner qi; this is a light effect. Your corona is an aura in a 5-foot emanation that deals 2d6 damage of the chosen type to creatures who start their turn within the emanation. If the emanation overlaps with a darkness effect, the corona's glow attempts to counteract the darkness. Regardless of the outcome, the corona can't attempt to counteract that effect again for 1 day. You can Sustain to flare your corona out to become a 30-foot emanation or return the corona to a 5-foot emanation.\nIn your qi form, your emotions surge to the forefront, and it's difficult to moderate your attacks. Your weapons and unarmed attacks lose the nonlethal trait. You take a –2 status penalty to saves against emotion effects but gain a +2 status bonus to saves against all other mental effects.\nSpell Effect: Qi Form",
      "castingTime": "1 action",
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
    "contentId": "pf2e:spell:spells-srd:heros-defiance",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "uGXWkR2h8q9MRzEM",
      "slug": "heros-defiance",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/heros-defiance.webp"
    },
    "sourceHash": "sha256:51ef014ac4fa0cf1f410a8e71299f9c11719d52c29a2097d76eefd3032cb9f35",
    "translatableHash": "sha256:b14a6ffce317b6d82d61844a9cfc3b997e759e49923944fd8dbb82991bcecec3",
    "data": {
      "schemaVersion": 1,
      "name": "Hero's Defiance",
      "rank": 10,
      "rarity": "uncommon",
      "traits": [
        "champion",
        "concentrate",
        "focus",
        "healing",
        "vitality"
      ],
      "traditions": [],
      "description": "Trigger An attack would bring you to 0 Hit Points.\nYou shout in defiance and are filled with a burst of healing. Just before applying the attack's damage, you recover 6d8+20 Hit Points. If this is enough to prevent the attack from bringing you to 0 Hit Points, you don't become Unconscious or Dying. Either way, cheating death is difficult, and you can't use hero's defiance again until you Refocus or make your daily preparations. Hero's defiance can't be used against effects with the death trait or that would leave no remains, such as disintegrate.",
      "castingTime": "free",
      "range": "",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [
        {
          "formula": "6d8+20",
          "type": "vitality",
          "kind": "healing"
        }
      ],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:crushing-ground",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "AiWtiVmyasyL42J8",
      "slug": "crushing-ground",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:550d82f837c4e397b2193c43106c8054d13adc8b304ba903f4696d1d2003da1d",
    "translatableHash": "sha256:1a90400e9525b9b86074170b4a70a0ab8c96fd1c916573031b0067db02fc0a55",
    "data": {
      "schemaVersion": 1,
      "name": "Crushing Ground",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "earth",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "You tear open the ground then slam it shut. The target creature takes 2d6 bludgeoning damage with a Reflex save.\nCritical Success The target is unaffected.\nSuccess The target takes half damage.\nFailure The target takes full damage, is Off-Guard, and takes a –10-foot circumstance penalty to Speed.\nCritical Failure The target takes double damage and is off-guard and Immobilized. It can attempt to Escape against your spell DC. If it doesn't Escape, the target takes an additional 2d6 bludgeoning damage when the spell ends.\nSpell Effect: Crushing Ground\nHeightened 1 Increase the initial damage and additional damage by 2d6.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 round",
      "defense": "reflex save",
      "damage": [
        {
          "formula": "2d6",
          "type": "bludgeoning",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 Increase the initial damage and additional damage by 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:wildfire",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "jks2h5pMsm8pCi8e",
      "slug": "wildfire",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:8e0bcdc68f899ebc852e393cc10704c363a406746c665e87296af600f971bef6",
    "translatableHash": "sha256:2781aeaae16c4b2baf0cc1785dd659bb1b3446966a44318117868fa2b22970f6",
    "data": {
      "schemaVersion": 1,
      "name": "Wildfire",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "fire",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "A thin layer of ash and flame covers the ground in the area. The area becomes hazardous terrain. A creature that moves on the ground through the area takes 1 fire damage for every square of that area it moves into. A creature that ends its turn in the area must succeed at a Reflex save or take 1 persistent fire damage.\nEach time you sustain this spell, the radius of the burst increases by 5 feet.\nHeightened 2 Increase the damage and persistent damage by 1.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "",
      "area": "10 burst",
      "duration": "1 minute",
      "defense": "reflex save",
      "damage": [
        {
          "formula": "1",
          "type": "fire",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 Increase the damage and persistent damage by 1."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:updraft",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "QozxgBbcmktLKdBs",
      "slug": "updraft",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/updraft.webp"
    },
    "sourceHash": "sha256:b727bcb4134440111dda4e377f6547a401d2394be0ad7bcec140bd176208e0d3",
    "translatableHash": "sha256:095ac047eeb58b496905f95e0fd76243c749d80c350593f1aa9d3b69bf9c0b59",
    "data": {
      "schemaVersion": 1,
      "name": "Updraft",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "air",
        "concentrate",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "A powerful blast of wind erupts from the ground, launching the target into the air and sending it crashing back down. The collision deals 2d6 bludgeoning damage with a basic Reflex save. On a failure, the target is knocked Prone.\nHeightened 1 Increase the damage by 2d6.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "2d6",
          "type": "bludgeoning",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 Increase the damage by 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:rising-surf",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "zTN6zuruDUKOea6h",
      "slug": "rising-surf",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/rising-surf.webp"
    },
    "sourceHash": "sha256:fa629e05babcc70c3b5afb8ab1443eda4e86d3e88ab17afeaa0acc5c8931d994",
    "translatableHash": "sha256:1d9ed7db45de3b7a29c9c5e4d32f8feb08e4cb642d2a31de6b062dff19eb5f44",
    "data": {
      "schemaVersion": 1,
      "name": "Rising Surf",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "focus",
        "manipulate",
        "move",
        "water"
      ],
      "traditions": [],
      "description": "You create a wave of water that you ride, banking around obstacles and surfing to higher ground. You move up to 35 feet, raising yourself up to 5 feet above the ground. (You can avoid many types of difficult terrain in this way.) You must end your movement on an unoccupied space where you have solid footing. This movement isn't a Stride, but you measure the distance in a similar way, and it still triggers reactions caused by movement. You can't transport anyone else with you.\nHeightened 2 Increase the distance you move by 5 feet and the maximum height traveled above the ground by 5 feet.",
      "castingTime": "1 action",
      "range": "30 feet",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 2 Increase the distance you move by 5 feet and the maximum height traveled above the ground by 5 feet."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:pulverizing-cascade",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "E80SrXuBdZViPGiH",
      "slug": "pulverizing-cascade",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/pulverizing-cascade.webp"
    },
    "sourceHash": "sha256:d4d2c2467258aecb193ff0bf6457de072407653dc58a5966b0f563fa764b6ddf",
    "translatableHash": "sha256:92fc0a5204159cc39fb1d63c74d8e89dc128cb39e8b0792b94e1999005249b65",
    "data": {
      "schemaVersion": 1,
      "name": "Pulverizing Cascade",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate",
        "water"
      ],
      "traditions": [],
      "description": "You raise a pair of towering waves and slam them into each other, crushing creatures caught between them. Creatures in the area take 5d6 bludgeoning damage with a basic Reflex save.\nHeightened 1 Increase the damage by 2d6.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "",
      "area": "10 burst",
      "duration": "",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "5d6",
          "type": "bludgeoning",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 Increase the damage by 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:stone-lance",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ECApRjIIxD0JogOa",
      "slug": "stone-lance",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:5fec22a767f1b2ed843a04d40418a2e397153607fa5b65d256414c5264da0a2e",
    "translatableHash": "sha256:5da58490c32fa1c7b32c2904e5b20b1c22e856ac5ae262978a21c56ee553b2d8",
    "data": {
      "schemaVersion": 1,
      "name": "Stone Lance",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "attack",
        "concentrate",
        "earth",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "You conjure a jagged lance of stone and then launch it at a foe. Make a spell attack roll against the target. On a hit, you deal 6d6 piercing damage and the lance impales the creature, giving it a –10-foot circumstance penalty to its Speeds unless it Escapes. On a critical hit, if the creature is on the ground, the lance also embeds into the ground and Immobilizes the creature until it Escapes. A creature that Escapes after being impaled takes 3 persistent bleed damage. When the spell ends, the lance crumbles into dirt, freeing the target if it hasn't Escaped.\nHeightened 1 Increase the damage by 2d6 and the persistent bleed damage for Escapes by 1.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [
        {
          "formula": "6d6",
          "type": "piercing",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 Increase the damage by 2d6 and the persistent bleed damage for Escapes by 1."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:powerful-inhalation",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "v4QHuVOhFD1JMAqu",
      "slug": "powerful-inhalation",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/powerful-inhalation.webp"
    },
    "sourceHash": "sha256:6cd71ea859e1186740dc087f387bbfe05535d7c4fec6a28598f648ffcd450d1c",
    "translatableHash": "sha256:d3c8e87a6d027309b7afc6a807ccbb5fc323da79efbe09307eb4a0a1e76573fe",
    "data": {
      "schemaVersion": 1,
      "name": "Powerful Inhalation",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "air",
        "concentrate",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "You rapidly draw the air from your surroundings, hoarding it for yourself. Creatures in the area when the spell is cast take 5d6 bludgeoning damage with a basic Fortitude save. A creature that fails its save can't speak above a raspy whisper for 1 round. A creature that critically fails can't speak or use abilities that require it to breathe for 1 round. This prevents it from using effects that require speech, such as casting spells with verbal components, and from using a breath weapon or similar ability.\nCreatures made of air (such as air elementals) attempting a save against this spell get a degree of success one worse than they rolled.\nHeightened 1 Increase the damage by 2d6.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "10 emanation",
      "duration": "",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "5d6",
          "type": "bludgeoning",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 Increase the damage by 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:combustion",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Z3kJty995FkrsZRb",
      "slug": "combustion",
      "publicationTitle": "Pathfinder Rage of Elements",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:775dc0d9e4ebb1139fb61fd078eebec028018a10459b3d5db33f2872f1ce3c60",
    "translatableHash": "sha256:07ea95b654ae3ac5233885b2821d7283d4ff7e77abeb0af345103721c99e1375",
    "data": {
      "schemaVersion": 1,
      "name": "Combustion",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "fire",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "You ignite a creature in lasting flames. The fire deals 4d8 fire damage and 2d6 persistent fire damage to the creature, which must attempt a Fortitude save.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage and takes no persistent damage.\nFailure The creature takes full damage, as well as full persistent damage.\nCritical Failure The creature takes double damage, as well as double persistent damage.\nHeightened 1 Increase the initial damage by 1d8 and the persistent damage by 1d6 fire damage.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": "fortitude save",
      "damage": [
        {
          "formula": "4d8",
          "type": "fire",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 Increase the initial damage by 1d8 and the persistent damage by 1d6 fire damage."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:murmuration",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "4EmLum6EdvXxbxCj",
      "slug": "murmuration",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:c08982ef35671819cf48c002b768270cca23f5b6c752647147695c1652f4a6f0",
    "translatableHash": "sha256:206f70b99ebc4bb1e6dbb3fe98449e15811c6f27a47f66c333730f8393fe90a0",
    "data": {
      "schemaVersion": 1,
      "name": "Murmuration",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cantrip",
        "concentrate",
        "hex",
        "sonic",
        "witch"
      ],
      "traditions": [],
      "description": "The target feels the brush of feathers against its skin and hears screeches in its ears, warning it to keep away from a creature you designate that's within 30 feet of you when you Cast this Spell (which can include yourself). Once per round, if the target moves closer to the designated creature, it must attempt a Will save or take 1d4 piercing damage or 1d4 sonic damage.\nCritical Success The target is unaffected.\nSuccess The target takes half damage.\nFailure The target takes full damage.\nCritical Failure The target takes 1d4 sonic damage] damage, and if it attempts an attack roll or hostile skill check this round, it takes a –2 status penalty to the roll.\nSpell Effect: Murmuration\nHeightened 1 The damage increases by 1d4, or by 2d4 on a critical failure (1d4 of which is sonic and 1d4 of which is piercing).",
      "castingTime": "1 action",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened 1 The damage increases by 1d4, or by 2d4 on a critical failure (1d4 of which is sonic and 1d4 of which is piercing)."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:slime-spit",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "hWtB81P2KGzGHKAJ",
      "slug": "slime-spit",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:326c377608c0c534e96cd9c9015c98894cb7884e2358ec4ac804d521523d3f57",
    "translatableHash": "sha256:806bd920625eb0d1ab21aa950c213b5f8fd52aa03815c29b66f3c4cb1a2bd2e3",
    "data": {
      "schemaVersion": 1,
      "name": "Slime Spit",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate",
        "poison",
        "ranger"
      ],
      "traditions": [],
      "description": "You spit toxic goo that coats your target's face and eyes, dealing 2d6 poison damage. It must attempt a Reflex save.\nCritical Success The target takes no damage.\nSuccess The target takes half damage and is Dazzled for 1 round, though it can Interact to wipe its eyes and remove the condition.\nFailure The target takes full damage and is dazzled until the end of your next turn.\nCritical Failure The target takes double damage, is Blinded for 1 round, and is dazzled until it uses an Interact action to wipe its eyes.\nHeightened 1 The damage increases by 2d6.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": "reflex save",
      "damage": [
        {
          "formula": "2d6",
          "type": "poison",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:sting-of-the-sea",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "jyYBuGRfpkZz2kxs",
      "slug": "sting-of-the-sea",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:700e5e19c1f42f9489e96304088e3b2498122b88f48b7251e413c23b4fd88e60",
    "translatableHash": "sha256:113af534343e065eb57cb3aeb783d33bed296114c2dcf8ce90c8da1e61c949aa",
    "data": {
      "schemaVersion": 1,
      "name": "Sting of the Sea",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cantrip",
        "concentrate",
        "hex",
        "witch"
      ],
      "traditions": [],
      "description": "A long tentacle like that belonging to an octopus, anemone, or man-of-war, dripping with briny water, appears from a glowing blue portal to wrap around the target's face, blocking its vision. For the duration of the spell, the target must attempt a Fortitude save at the beginning of its turn. The portal follows the target around, and the tentacle can't be targeted or harmed.\nCritical Success The target is unaffected.\nSuccess The target takes a –2 penalty to Perception checks involving vision until the end of its turn. Spell Effect: Sting of the Sea\nFailure The target is Dazzled until the end of its turn.\nCritical Failure The target is Blinded until the end of its turn.",
      "castingTime": "1 action",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": "fortitude save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:keen-smell",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "SXmEI4kVWVSagK4H",
      "slug": "keen-smell",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:01386a114b53277980c8ba47f72e814c8b6b47fc9fe670ad73fb0c6e5d9332bb",
    "translatableHash": "sha256:0e2cc88be345119eddb2fbb9d318b04607615129573d9da8bd41e9bbc7fc2c46",
    "data": {
      "schemaVersion": 1,
      "name": "Keen Smell",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate",
        "morph",
        "ranger"
      ],
      "traditions": [],
      "description": "Your nose becomes more sensitive to the scents of the wild, the better for you to track your quarry. For the spell's duration, you gain scent as an imprecise sense with a range of 30 feet. Your hunted prey can't be undetected by you as long as it's within your scent range.\nSpell Effect: Keen Smell\nHeightened (3rd) Your scent range increases to 60 feet.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (3rd) Your scent range increases to 60 feet."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:scroungers-glee",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "VNv96dJPi0WXKSFN",
      "slug": "scroungers-glee",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:01567723b9b4dafc06231694dbca3fd6632d1e05521f88ce923f30cd935220b7",
    "translatableHash": "sha256:f37cdcb7a1320b3256d6ba3c93cf0111ca0284ee463891de755f0979ec578ef8",
    "data": {
      "schemaVersion": 1,
      "name": "Scrounger's Glee",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "auditory",
        "cantrip",
        "concentrate",
        "fear",
        "hex",
        "mental",
        "witch"
      ],
      "traditions": [],
      "description": "With a cruel laugh and a flash of your canines, you make a target understand that death is coming to claim it and that its demise will serve to strengthen another. The target becomes Frightened 1 if it fails a Will save (or Frightened 2 on a critical failure). This condition can't be reduced below 1 while the spell is active and the target can hear you. You can Dismiss the spell as a reaction when an ally critically succeeds at a Strike against the target, restoring 1d4 healing Hit Points to that ally.\nHeightened 2 The number of Hit Points restored when you Dismiss the spell increases by 1d4.",
      "castingTime": "1 action",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened 2 The number of Hit Points restored when you Dismiss the spell increases by 1d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:distracting-decoy",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "z8bHh8KVttslQIU9",
      "slug": "distracting-decoy",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:e046152681a61d3f7aa68a850c19f13fb69a76d46ba26f26d70bd25341d3d004",
    "translatableHash": "sha256:6855d4b7b245f27033ddd92be5d9c877c903edf889f3c38e512f983b96b5a978",
    "data": {
      "schemaVersion": 1,
      "name": "Distracting Decoy",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "ranger",
        "visual"
      ],
      "traditions": [],
      "description": "You conjure a colorful, fast-moving shape, such as a small bird or other animal that draws your target's eye. They must attempt a Will save.\nSuccess The creature is unaffected.\nFailure The creature is Off-Guard until the start of your next turn.\nCritical Failure As failure, but the creature also takes a –2 circumstance penalty to attacks while it's off-guard.\nSpell Effect: Distracting Decoy",
      "castingTime": "1 action",
      "range": "10 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:canopy-crawler",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "3JQPqtE7fkscP3f6",
      "slug": "canopy-crawler",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:16461450402921beeb1d75e336e69ae8be0164bafd65c05495270e63901ae62a",
    "translatableHash": "sha256:90c8f2a1271c7daf0b222a135f5fe9c718bc130f366ac73921c96956cdfd650f",
    "data": {
      "schemaVersion": 1,
      "name": "Canopy Crawler",
      "rank": 2,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate",
        "morph",
        "ranger"
      ],
      "traditions": [],
      "description": "The target grows a prehensile tail, or gains prehensile qualities in their existing tail, to help them climb with ease. For the duration of the spell, they gain a climb Speed equal to their highest Speed. The target can Climb with a hand occupied (or two hands occupied if they have the Combat Climber feat).\nSpell Effect: Canopy Crawler\nHeightened (5th) The spell's duration increases to 1 hour, and you can target both yourself and your animal companion with a single casting.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "yourself or your animal companion",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (5th) The spell's duration increases to 1 hour, and you can target both yourself and your animal companion with a single casting."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:imitate-fauna",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "HkjeegDsA5Wq0hR2",
      "slug": "imitate-fauna",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:076a83950d7bedd7396a19b23190f49af365d6b082266b4ee7e45a8df7525423",
    "translatableHash": "sha256:bc30a109d1e0e76c05eae0bddfca3cfcfe18de49ca7fe98649f68d47db40aaa4",
    "data": {
      "schemaVersion": 1,
      "name": "Imitate Fauna",
      "rank": 2,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "illusion",
        "manipulate",
        "ranger"
      ],
      "traditions": [],
      "description": "You use your knowledge of nature to pass the target off as a common animal of the same size, representing a species chosen when the spell is cast. This covers the target's visual appearance, scent, and voice. The target can communicate with other members of the species as though they shared a language but can't speak other languages while the spell persists.\nCasting imitate fauna counts as setting up a disguise for the purpose of the Impersonate action. It allows the target to ignore any circumstance penalties they might take for being disguised as dissimilar creatures, and it gives the target a +4 status bonus to Deception checks to prevent other animals from seeing through their disguise. You can Dismiss this spell.\nSpell Effect: Imitate Fauna\nHeightened (5th) You can target up to six willing animals.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 willing animal",
      "area": null,
      "duration": "1 hour",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (5th) You can target up to six willing animals."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:spirit-of-the-beast",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "wgAsL86ji5hulh7x",
      "slug": "spirit-of-the-beast",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:8bd0361cb7c361397d77e6e8b2ef1126ec4f8572b93e3ba7a4f9ed27be55b5dc",
    "translatableHash": "sha256:67399543abb2bddac3de1b69ce03e9a82480c35df3db30489bad7f06d3fc64e9",
    "data": {
      "schemaVersion": 1,
      "name": "Spirit of the Beast",
      "rank": 2,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "morph"
      ],
      "traditions": [],
      "description": "You bring out the spirit of another animal that lives within your companion. Its body morphs slightly to take on an aspect of the animal you choose to have it emulate—for example, it might grow a pair of horns if the spirit is a bull or a tail if the spirit is a monkey. When you Cast this Spell, select from one of the following aspects.\nSpell Effect: Spirit of the Beast\n• Aspect of Might: Your companion gains a +1 status bonus to Athletics checks, Intimidation checks to Demoralize, and Fortitude saves.\n• Aspect of Swiftness: Your companion gains a +1 status bonus to Acrobatics checks, Stealth checks to Hide or Sneak, and Reflex saves.\n• Aspect of Insight: Your companion gains a +1 status bonus to Perception checks to Seek, Survival checks to Sense Direction or Track, and Will saves.\nHeightened (5th) The status bonuses increase to +2.\nHeightened (8th) The status bonuses increase to +3.",
      "castingTime": "1 action",
      "range": "30 feet",
      "target": "your animal companion",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (5th) The status bonuses increase to +2.\nHeightened (8th) The status bonuses increase to +3."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:blood-in-the-water",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "CXpOlv2ZZq2jVbRX",
      "slug": "blood-in-the-water",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:ca71e0730aa188691698013d7dbc005afa0a44000bd93c0d8993b1a54f4880a4",
    "translatableHash": "sha256:7d2186c94d6b985f1feb21b3d593aabd37e1cb0c805ccc11ef33a626d6e6c5a9",
    "data": {
      "schemaVersion": 1,
      "name": "Blood in the Water",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "hex",
        "manipulate",
        "spirit",
        "witch"
      ],
      "traditions": [],
      "description": "Requirements The target is taking persistent bleed damage or your last action dealt slashing damage to the target.\nPredators are drawn to the scent of blood, and blood can disperse shockingly far in the water. You summon the spirits of aquatic predators to appear as a spectral swarm around the target. When you Cast or Sustain this Spell, the target takes 2d6 spirit damage (basic Reflex save). If the target takes any damage from the spell, it treats all water as difficult terrain for 1 round as the predators try to drag them down. The spectral predators don't take up space, grant flanking, or have any other attributes a creature would. If you deal slashing damage to the target while the spell is active, you automatically Sustain this Spell. If you cast blood in the water while a previous casting of this hex is still in effect, the previous effect ends.\nHeightened 2 The damage dealt increases by 2d6.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature that can bleed",
      "area": null,
      "duration": "1 minute",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "2d6",
          "type": "spirit",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The damage dealt increases by 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:warning-stripes",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "D4kArD91fFiREvC6",
      "slug": "warning-stripes",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:55f8076ab62de983cbf4a2a2b48ed1452ed2ef5a6d4bf84d4aa9792c784ad75c",
    "translatableHash": "sha256:f60f4acac71d46317c2ebce2705742fe6381238065c23f2fe78ea77760dc27f5",
    "data": {
      "schemaVersion": 1,
      "name": "Warning Stripes",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "morph",
        "poison",
        "ranger"
      ],
      "traditions": [],
      "description": "Your skin becomes painted with vivid stripes or bright aposematic swirls, warning other creatures of its toxic qualities. Any creature that touches you or hits you with an unarmed melee attack takes 2d8 poison damage. If you have an animal companion, you can cast this spell on them instead, with a range of 30 feet.\nHeightened 2 The poison damage increases by 1d8.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [
        {
          "formula": "2d8",
          "type": "poison",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The poison damage increases by 1d8."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:sheltering-wings",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "gxK5XW4WAXOgY1mN",
      "slug": "sheltering-wings",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:0095e8791ba6593333438627d7711d1dd83b980babd0f6aecd775bd938c8f0c8",
    "translatableHash": "sha256:6757f05a0d10bf093e597f5e4031d4df3de64b01cf576b08974a338afcb3165e",
    "data": {
      "schemaVersion": 1,
      "name": "Sheltering Wings",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "focus",
        "hex",
        "manipulate",
        "witch"
      ],
      "traditions": [],
      "description": "Trigger An ally moves through a square within 15 feet of you or uses an action that has the move trait.\nLike migratory birds, you know everyone flies farther together. You cause immense wings to sprout from your familiar. Your familiar Flies up to 30 feet, though it must move toward the triggering ally. If your familiar ends this movement adjacent to the triggering ally, it lands on their back; until the beginning of your next turn, the familiar automatically is carried by the ally, and its wings provide them cover. When the spell ends, the familiar hops off your ally into an adjacent square.",
      "castingTime": "reaction",
      "range": "15 feet",
      "target": "1 ally",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:threatening-mimicry",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "s0i3S4fg2XDQX4a7",
      "slug": "threatening-mimicry",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:3e0025aa768f7f67ebf3d1cb0444cf43ce92b3e78f9f7a8053c3deb756db8390",
    "translatableHash": "sha256:5d2d1b66781a8429d9b5ec2b8be35fbf791da58ecfc719a2426d2b8ff874c7af",
    "data": {
      "schemaVersion": 1,
      "name": "Threatening Mimicry",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "emotion",
        "fear",
        "focus",
        "illusion",
        "manipulate",
        "mental",
        "ranger"
      ],
      "traditions": [],
      "description": "You appear larger and stronger to nearby creatures, appearing to possess threatening features like antlers, claws, or poison to their senses. Each non-allied creature in the area must attempt a Will save.\nCritical Success The creature is unaffected.\nSuccess The creature is Frightened 1. This condition doesn't decrease at the end of its turn if it damaged you during that turn.\nFailure As success, but Frightened 2.\nCritical Failure As success, but Frightened 3.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "10 emanation",
      "duration": "",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:mycological-malady",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "V4jrHiaMh4XuANOP",
      "slug": "mycological-malady",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:d6783e6d86a19c39417eeb3cfcc93594587f1a7e4e5fd5ef1d972b81163bc4fc",
    "translatableHash": "sha256:60e4d768c35ee98cafe74e510dbc6c157a47292bf69ee98755a1389d77e666eb",
    "data": {
      "schemaVersion": 1,
      "name": "Mycological Malady",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "disease",
        "focus",
        "hex",
        "manipulate",
        "witch"
      ],
      "traditions": [],
      "description": "You infect your target with fungal spores to hasten the cycle of decay. The target must attempt a Fortitude saving throw. Undead that aren't incorporeal, such as skeletons and zombies, don't have their normal immunity to this disease, as the spores can still colonize their remaining flesh and bone. This might also apply to other non-living creatures made of organic material at the GM's discretion.\nCritical Success The target is unaffected.\nSuccess The target sprouts mushrooms and is Enfeebled 2 for 1 round.\nFailure The target is afflicted with voidcap spores at stage 1.\nCritical Failure The target is afflicted with voidcap spores at stage 2.\nVoidcap Spores (disease) This disease ends when the spell ends;\nStage 1 enfeebled 2 (1 round)\nStage 2 enfeebled 2 and Slowed 1 (1 round)\nStage 3 enfeebled 2, slowed 1, and Stupefied 2 (1 round)",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": "fortitude save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:songbirds-call",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "CzMCiFbgLj1irnP4",
      "slug": "songbirds-call",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:19c26fd46204a9b9826ecf25b26c7aa1ba3f35eb2859271ddc7b1460932c6b6f",
    "translatableHash": "sha256:b9b725ab84c96c6447c0e80889ca0acd142253225745ba3f23053d2c53414a7e",
    "data": {
      "schemaVersion": 1,
      "name": "Songbird's Call",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "aura",
        "bard",
        "composition",
        "concentrate",
        "focus"
      ],
      "traditions": [],
      "description": "Your voice calls a storm of songbirds that whirl around you and peck at your enemies. All creatures within the area of whirling birds become Concealed, and all creatures outside the area become concealed to creatures within it. A creature other than you that enters or ends its turn in the area takes 1d6 piercing damage as the birds peck at it.\nHeightened 2 The damage increases by 1d6.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "15 emanation",
      "duration": "1 minute",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "1d6",
          "type": "piercing",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The damage increases by 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:gluttonous-growth",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "91ZbBll8M7IXQ4yw",
      "slug": "gluttonous-growth",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:99afaf57a613c2b8578684122a21bb9f58a7e700cd40402490965d47b1884e16",
    "translatableHash": "sha256:cb98b12976998c4f01280453441bf1d0d83d325b3935642d4725fe0006a97d31",
    "data": {
      "schemaVersion": 1,
      "name": "Gluttonous Growth",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate",
        "plant",
        "ranger"
      ],
      "traditions": [],
      "description": "Plants in the area grow rapidly, taking on carnivorous characteristics as they seek to consume prey. All affected squares are difficult terrain, both on the ground and for flying creatures. Each creature that begins its turn in the area must attempt a Reflex save unless it's already Grabbed or Restrained.\nWhen you Sustain this spell, each creature grabbed or restrained by the plants takes 4d6 piercing damage.\nCritical Success The creature is unaffected.\nSuccess The creature is grabbed until the beginning of its next turn or it Escapes.\nFailure The creature is grabbed until the spell ends or it Escapes.\nCritical Failure The creature is restrained until the spell ends or it Escapes.\nHeightened 1 The damage dealt by the plants when you Sustain the spell increases by 2d6.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "",
      "area": "20 burst",
      "duration": "1 minute",
      "defense": "reflex save",
      "damage": [
        {
          "formula": "4d6",
          "type": "piercing",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage dealt by the plants when you Sustain the spell increases by 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:pack-breaker",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "cGGEi67G1RStR9cD",
      "slug": "pack-breaker",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:73eb43e1786730d5402de4adb14d2e0cde06a14690ac4e9897d58cadd192a073",
    "translatableHash": "sha256:e1b79330c68c8f99b238b5af70764126274708401ea5ff72de4793bec36068c9",
    "data": {
      "schemaVersion": 1,
      "name": "Pack Breaker",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate",
        "mental",
        "ranger"
      ],
      "traditions": [],
      "description": "You can deceive creatures by changing their perception of their allies' behavior. Each affected creature suspects their allies have changed allegiance, depending on the outcome of their Will save. Regardless of the effects of the saving throw, the creature is then temporarily immune to pack breaker for 1 hour.\nCritical Success The creature is unaffected.\nSuccess The creature becomes Unfriendly to all creatures to which it wasn't already hostile, even those that were previously allies. It treats no one as an ally for 1 minute. Each of its former allies within its reach must attempt a save against pack breaker.\nFailure As success, but the creature is also Confused for 1 round.\nCritical Failure As success, but the creature is confused for 1 minute.",
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
    "contentId": "pf2e:spell:spells-srd:pulverizing-wake",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "EiE1A8TCeJGVzzV2",
      "slug": "pulverizing-wake",
      "publicationTitle": "Pathfinder Howl of the Wild",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:0d1e65bdaa0bab5711d52ba6c45ec81152be09ba0981e66e28417fa668f6a96c",
    "translatableHash": "sha256:cd69f5dad902395863af0b3e4314f52e63b41b5c6ada91a482a83313e7b3e024",
    "data": {
      "schemaVersion": 1,
      "name": "Pulverizing Wake",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "attack",
        "concentrate",
        "focus",
        "manipulate",
        "ranger",
        "sonic"
      ],
      "traditions": [],
      "description": "Imitating raptorial creatures, you attack with such speed it drives a sonic shockwave. Make a melee Strike against a creature in your reach; if you hit, you deal an additional 3d8 sonic damage. Regardless of the result of your Strike, that creature becomes the point of origin of a 15-foot cone, aimed directly away from you. All creatures in that cone take 6d8 sonic damage (basic Fortitude save).\nHeightened 1 The damage of the cone increases by 1d8.",
      "castingTime": "2 actions",
      "range": "",
      "target": "1 creature within reach",
      "area": "15 cone",
      "duration": "",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "6d8",
          "type": "sonic",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage of the cone increases by 1d8."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:darkened-forest-form",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "BhJtCTLbngvZm8EA",
      "slug": "darkened-forest-form",
      "publicationTitle": "Pathfinder War of Immortals",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:cd74bc3a76d2551debaf20049f8e4e1413a13e2a8fdc1bef1af47a20a4e365d6",
    "translatableHash": "sha256:afbf9bb76dab78454eaffcf6d3bb0c22223ad4cdecb942b123f9de9976ff1ba0",
    "data": {
      "schemaVersion": 1,
      "name": "Darkened Forest Form",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "animist",
        "focus",
        "polymorph"
      ],
      "traditions": [],
      "description": "Your apparition casts a feral shadow over your form. You can polymorph into any form listed in Pest Form. When you transform into a form granted by a spell, you gain all the effects of the form you chose from a version of the spell heightened to darkened forest form's rank. Each time you Sustain this Spell, you can choose to change to a different shape from those available via any of the associated spells.\nHeightened (2nd) You can also transform into the forms listed in Animal Form.\nHeightened (5th) You can also transform into the forms listed in Elemental Form.",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "heightened to darkened forest form's rank. Each time you Sustain this Spell, you can choose to change to a different shape from those available via any of the associated spells.\nHeightened (2nd) You can also transform into the forms listed in Animal Form.\nHeightened (5th) You can also transform into the forms listed in Elemental Form."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:tricksters-mirrors",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "cuKVbWWNzJj1GDpZ",
      "slug": "tricksters-mirrors",
      "publicationTitle": "Pathfinder War of Immortals",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:2414108cc8e2083b8c3c69bfa719b7a5a23d3e18d91cc723804c4b958835d2da",
    "translatableHash": "sha256:fa587aee3e1db64f5ebea4fce46ed316c89425ad92859791efb3d12202f7a660",
    "data": {
      "schemaVersion": 1,
      "name": "Trickster's Mirrors",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "animist",
        "focus",
        "illusion",
        "mental",
        "visual"
      ],
      "traditions": [],
      "description": "You are surrounded by up to 3 mirrors that reflect twisted and distorted images of you, making it hard to tell where you actually are within your space and potentially causing those who attack you to hit one of the mirrors instead. You start with 1 mirror and gain an additional mirror each time you Sustain this spell, up to a maximum of 3 mirrors. Any attack that would hit you has a random chance of hitting one of your mirrors instead of you. With one mirror, the chances are 1 in 2 (1–3 on 1d6). With two mirrors, there is a 1 in 3 chance of hitting you (1–2 on 1d6). With three mirrors, there is a 1 in 4 chance of hitting you (1 on 1d4).\nOnce an image is hit, it is destroyed. If an attack roll fails to hit your AC but doesn't critically fail, it destroys a mirror. If the attacker was within 5 feet, they must succeed at a basic Will save or take 1d4 mental damage as they believe themselves cut by a shower of glass shards from the breaking mirror. A damaging effect that affects all targets within your space (such as Caustic Blast) destroys all of the mirrors.\nHeightened 1 The mental damage dealt by a broken mirror increases by 1d4.",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": "basic will save",
      "damage": [
        {
          "formula": "1d4",
          "type": "mental",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The mental damage dealt by a broken mirror increases by 1d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:river-carving-mountains",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ew4ToaTU3o8ahKio",
      "slug": "river-carving-mountains",
      "publicationTitle": "Pathfinder War of Immortals",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:c50ac00de412e2404848d5ead26da877a3a0c91d8dd5b0f456652ebbb691f557",
    "translatableHash": "sha256:7bbc2cb9e77cee25d0f2eaf54a671eba73e0ba270db89f95b1103f933b8422ab",
    "data": {
      "schemaVersion": 1,
      "name": "River Carving Mountains",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "animist",
        "focus",
        "water"
      ],
      "traditions": [],
      "description": "Your apparition solidifies around you into roaring water and spraying mist. For the duration of this spell, you have lesser cover against ranged attacks and gain a +10-foot status bonus to each Speed you have. When you first cast this spell and each time you Sustain it, you can Stride up to your speed while your apparition fills each square you pass through with the lingering energy of a coursing river. These squares become difficult terrain until the start of your next turn. You can use river carving mountains while Burrowing, Climbing, Flying, or Swimming instead of Striding if you have the corresponding movement type.\nSpell Effect: River Carving Mountains",
      "castingTime": "1 action",
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
    "contentId": "pf2e:spell:spells-srd:store-time",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "FZMVLL7HvasjiM6D",
      "slug": "store-time",
      "publicationTitle": "Pathfinder War of Immortals",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:15a513864475477651edceabf217a42466d479415ea7c8c4cdc0c39391642d92",
    "translatableHash": "sha256:595f6e5012824fde08ab0e979a45e2431a86bb456957d77a864d84baa41c7829",
    "data": {
      "schemaVersion": 1,
      "name": "Store Time",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "animist",
        "focus"
      ],
      "traditions": [],
      "description": "You store time for later use. When you Cast this Spell and the first time you Sustain it each round, you gain a bonus reaction that you can use for any animist or apparition reaction you have. As normal, this reaction is lost if you do not use it before you regain your actions at the start of your next turn.",
      "castingTime": "1 action",
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
    "contentId": "pf2e:spell:spells-srd:manifest-will",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "IqBfoUaWDennHYoZ",
      "slug": "manifest-will",
      "publicationTitle": "Pathfinder War of Immortals",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:19528cde3acc16c830625a9a877a78ce9d3c869519c0a8f83600ee272807c859",
    "translatableHash": "sha256:8e8582dbc66ce49ed35e0dd67c8c11ef85aae499430bfb3b73a2c9fd5b13beb1",
    "data": {
      "schemaVersion": 1,
      "name": "Manifest Will",
      "rank": 1,
      "rarity": "rare",
      "traits": [
        "aura",
        "cantrip",
        "concentrate",
        "hex",
        "witch"
      ],
      "traditions": [],
      "description": "You unleash energy from the broken connection to your patron. You are Concealed from creatures beyond the edge of the emanation but can't use that concealment to Hide. Any creature that begins its turn in the emanation is affected based on your patron's tradition.\nAura: Manifest Will\n• Arcane Raw energy and magical formulae circulate around you. A creature that begins its turn in the emanation gains weakness 1 to spell damage for 1 round.\n• Divine Divine power crashes in a cycle of life and death. A living or undead creature that begins its turn in the emanation gains 2 temporary Hit Points for 1 round. This effect has the spirit trait.\n• Occult Esoteric symbology etches the air. An allied creature that begins its turn in the emanation has Lesser Cover while inside the emanation, and for 1 round after it leaves.\n• Primal Plants and fungus symbolic of your patron constantly grow and wither in the emanation. A creature that begins its turn in the emanation has a –10-foot status penalty to all its Speeds for 1 round or until it Escapes. This effect has the fungus, plant, and wood traits.\nSpell Effect: Manifest Will\nHeightened 1 An arcane manifestation increases its weakness by 1 and a divine manifestation increases its temporary Hit Points by 2.",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": "10 emanation",
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 An arcane manifestation increases its weakness by 1 and a divine manifestation increases its temporary Hit Points by 2."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:vindicators-mark",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "LegaamqrflbArbWN",
      "slug": "vindicators-mark",
      "publicationTitle": "Pathfinder War of Immortals",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:282203f8f9478dad62ab37dadea9e8798714ff1919774763951ff1a9a8b270a5",
    "translatableHash": "sha256:47716a0328845f5bd1545d13169b63ed76d730ecc77bba88ecc3ca725519913f",
    "data": {
      "schemaVersion": 1,
      "name": "Vindicator's Mark",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "attack",
        "focus",
        "manipulate",
        "sanctified"
      ],
      "traditions": [],
      "description": "You launch a magical dart at your hunted prey, which marks them with a nimbus only you can detect. Make a spell attack against the target. On a hit, you deal 2d4 spirit damage and the target is marked by a glowing nimbus of energy that only you can see. For the duration of your spell, the marked target takes an additional +2 damage from all your weapon or unarmed attacks. Invisible targets marked by your vindicator's mark are Concealed to you, rather than Undetected.\nYou can Dismiss the spell on your turn if your last action dealt damage to the target with a weapon or unarmed attack, instantly dealing an additional 2d6 spirit damage to it.\nSpell Effect: Vindicator's Mark\nHeightened 2 The initial damage increases by 2d4, the additional damage you deal increases by 1, and the damage dealt when the spell is Dismissed increases by 1d6.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "your hunted prey",
      "area": null,
      "duration": "1 minute",
      "defense": "ac",
      "damage": [
        {
          "formula": "2d4",
          "type": "spirit",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The initial damage increases by 2d4, the additional damage you deal increases by 1, and the damage dealt when the spell is Dismissed increases by 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:earths-bile",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "PrlR2sLWeiuTcPF2",
      "slug": "earths-bile",
      "publicationTitle": "Pathfinder War of Immortals",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:ec2d41cba0ff52dea28d41fe4b8b0a859e9a01860a5e706ea79f359e2caaafaf",
    "translatableHash": "sha256:6408e2daca6ea92edb4f7e7d746c8b954cca271f9a8cccd9f667cc743376f206",
    "data": {
      "schemaVersion": 1,
      "name": "Earth's Bile",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "animist",
        "earth",
        "fire",
        "focus"
      ],
      "traditions": [],
      "description": "Your apparition is the will of lava and magma made manifest, the earth's molten blood unleashing devastating bursts of liquid stone and unquenchable fire at your command. When you Cast this Spell and the first time you Sustain it each round thereafter, choose an area within range. Each creature in the area takes 1d4 fire damage, 1d4 bludgeoning damage, and 1 persistent fire damage (the persistent fire damage is negated on a successful save).\nHeightened 2 The fire and bludgeoning damage each increase by 1d4, and the persistent fire damage increases by 1.",
      "castingTime": "1 action",
      "range": "30 feet",
      "target": "",
      "area": "10 burst",
      "duration": "1 minute",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "1d4",
          "type": "fire",
          "kind": "damage"
        },
        {
          "formula": "1d4",
          "type": "bludgeoning",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The fire and bludgeoning damage each increase by 1d4, and the persistent fire damage increases by 1."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:traveling-workshop",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "rzcXUF5YmJYxgxEa",
      "slug": "traveling-workshop",
      "publicationTitle": "Pathfinder War of Immortals",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:d2c130835f03726a6dccefee43a579ddbce6fd4275da7e2d95bb312d55ddb008",
    "translatableHash": "sha256:9647532166826b7ee490156083f46ee0375486ee653970a738c7a8bf28ae5f01",
    "data": {
      "schemaVersion": 1,
      "name": "Traveling Workshop",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "animist",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "Your apparition guides you through complex procedures while using your magic to provide you with whatever tools you need. For the duration of this spell, you are trained in Crafting and Thievery. When you Cast the Spell and as long as you Sustain it, your apparition provides you with an array of simple tools, granting you use of an alchemist's toolkit, a repair kit, and a thieves' toolkit; these tools are made of ephemeral magic and disappear if they leave your possession.\nSpell Effect: Traveling Workshop\nYou can cast this spell as an exploration or downtime activity with a casting time of 10 minutes; when you do, its duration increases to 8 hours (enough to complete 1 day of work), and you also gain an alchemist's lab and functioning forge. You are always treated as having spent a day of work setting up when using this spell to help you Craft an item and have whatever materials you need to Repair an item in your possession. You can't use a traveling workshop to Earn Income and any item you Craft using it disappears moments after it leaves your possession, making it unwise to Craft anything other than consumable items you intend to use yourself. A crafter in the vault is extremely proud of work you do together when using the spell in this way and demands to see the results of your work together. When you cast traveling workshop as an exploration or downtime activity, you must continue to choose crafter in the vault as one of your attuned apparitions during your next daily preparations until such time as you've used any Crafted items in combat.\nHeightened (3rd) Your proficiency in Crafting and Thievery is expert.\nHeightened (5th) Your proficiency in Crafting and Thievery is master.\nHeightened (9th) Your proficiency in Crafting and Thievery is legendary.",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute, or 8 hours",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (3rd) Your proficiency in Crafting and Thievery is expert.\nHeightened (5th) Your proficiency in Crafting and Thievery is master.\nHeightened (9th) Your proficiency in Crafting and Thievery is legendary."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:nymphs-grace",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "SAmyaiVKTDrUNjot",
      "slug": "nymphs-grace",
      "publicationTitle": "Pathfinder War of Immortals",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:b094981a6e4cb4418c1bfc7992519b3643015f7cabb4e9b4569b4c669fccd5d1",
    "translatableHash": "sha256:dd9d05b35cd102591d2f93296a54f6a6c63bee4d9ac9098477f44d170dde6208",
    "data": {
      "schemaVersion": 1,
      "name": "Nymph's Grace",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "animist",
        "aura",
        "emotion",
        "focus",
        "incapacitation",
        "mental",
        "visual"
      ],
      "traditions": [],
      "description": "Your apparition manifests as a mask of unearthly beauty that bewilders your enemies. The first time an enemy enters the aura each round, or if they start their turn within the aura, they must succeed at a Will saving throw or become Confused for 1 round. While confused by this effect, the creature's confused actions never include harming you.",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": "10 emanation",
      "duration": "1 minute",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:discomfiting-whispers",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "t1e3U2eluRsp2izf",
      "slug": "discomfiting-whispers",
      "publicationTitle": "Pathfinder War of Immortals",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:2d49b4311fab2691639f2245112770252c999cd73a223363711da579f3024618",
    "translatableHash": "sha256:1fcfe62275283eb17361585777b5d617e83567ece2ae899ded0938991b832000",
    "data": {
      "schemaVersion": 1,
      "name": "Discomfiting Whispers",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "animist",
        "aura",
        "focus",
        "misfortune",
        "void"
      ],
      "traditions": [],
      "description": "You are surrounded by an aura of spiteful murmurings that incite bad luck and punish failure. Each creature that starts their turn within the area of this spell must succeed at a Will save or roll twice on their first attack roll that round and take the lower result. If an attack roll modified in this way results in a failure, the creature that rolled the failed attack takes 1d6 void damage.\nSpell Effect: Discomfiting Whispers\nHeightened 2 The void damage dealt on a failure increases by 1d6.",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": "5 emanation",
      "duration": "1 minute",
      "defense": "will save",
      "damage": [
        {
          "formula": "1d6",
          "type": "void",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The void damage dealt on a failure increases by 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:garden-of-healing",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "w4M6Vqvq8k6MOFvj",
      "slug": "garden-of-healing",
      "publicationTitle": "Pathfinder War of Immortals",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:1af77350edfd942d676a17c8674087045f47367b3d73eb4fdb38571e2d813e4d",
    "translatableHash": "sha256:512075d902b84a77ea3bc64ae2f3922dceed85ee88d2125fd29db6c3951ee5ac",
    "data": {
      "schemaVersion": 1,
      "name": "Garden of Healing",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "animist",
        "aura",
        "emotion",
        "focus",
        "healing",
        "mental"
      ],
      "traditions": [],
      "description": "Spirits of comfort and respite swirl around you, trailing visions of growing grass and blooming blossoms. When you cast this spell and the first time you Sustain it on each subsequent round, you generate a pulse of renewing energy that heals each creature within the emanation for 1d4 Hit Points. The calm of this effect lingers; once this spell ends, any creature that has been affected by its healing gains a +1 circumstance bonus to saves against emotion effects for 10 minutes but does not receive any healing from additional castings of the spell while the bonus persists.\nSpell Effect: Garden of Healing\nHeightened 1 The healing granted by the spell's pulse increases by 1d4 Hit Points.",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": "10 emanation",
      "duration": "1 minute",
      "defense": null,
      "damage": [
        {
          "formula": "1d4",
          "type": "untyped",
          "kind": "healing"
        }
      ],
      "heightening": "Heightened 1 The healing granted by the spell's pulse increases by 1d4 Hit Points."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:devouring-dark-form",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "wTldMJx0vyBAehrI",
      "slug": "devouring-dark-form",
      "publicationTitle": "Pathfinder War of Immortals",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:02be50e9b03a26bd17c3cae470a2434d1941b16793230bc64acdd36a830839d6",
    "translatableHash": "sha256:8af501ced8cb79e633459ab1ca7a9b9e5f41e7511622d3ad8e87ca788a141e8a",
    "data": {
      "schemaVersion": 1,
      "name": "Devouring Dark Form",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "animist",
        "focus",
        "morph"
      ],
      "traditions": [],
      "description": "Your apparition's dark power blends with your physical body, allowing you to take on terrifying characteristics of creatures that lurk in dark places. Your arms and legs transform into twisting tentacles. You gain a tentacle unarmed attack with 10-foot reach that deals 1d8 bludgeoning damage and has the grapple trait. The first time you Sustain this spell each round, you can attempt a single Grapple check with your tentacle against a creature within its reach.\nSpell Effect: Devouring Dark Form\nHeightened (2nd) You can choose to take on the shark battle form from Animal Form instead of gaining a tentacle unarmed attack, heightened to the same level as this vessel spell. When you do, this spell loses the morph trait and gains the polymorph trait. You can attempt a jaws unarmed Strike against a creature within your reach each time you Sustain this spell.\nHeightened (5th) You can choose to take on the water elemental battle form from Elemental Form instead of gaining a tentacle unarmed attack, heightened to the same level as this vessel spell. When you do, this spell loses the morph trait and gains the polymorph trait. You can attempt an unarmed attack Strike against a creature within your reach each time you Sustain this spell.",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (2nd) You can choose to take on the shark battle form from Animal Form instead of gaining a tentacle unarmed attack, heightened to the same level as this vessel spell. When you do, this spell loses the morph trait and gains the polymorph trait. You can attempt a jaws unarmed Strike against a creature within your reach each time you Sustain this spell.\nHeightened (5th) You can choose to take on the water elemental battle form from Elemental Form instead of gaining a tentacle unarmed attack, heightened to the same level as this vessel spell. When you do, this spell loses the morph trait and gains the polymorph trait. You can attempt an unarmed attack Strike against a creature within your reach each time you Sustain this spell."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:embodiment-of-battle",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "X4On99Nti8gjWywG",
      "slug": "embodiment-of-battle",
      "publicationTitle": "Pathfinder War of Immortals",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:15649aba5d6c21edbb9b2162a7d75e5aae7df55aabc5a8e2881d1f78d03aae62",
    "translatableHash": "sha256:fe99185d9b416b1a9b7ac1bc638f91991b431661b76d1e43626c96746adae381",
    "data": {
      "schemaVersion": 1,
      "name": "Embodiment of Battle",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "animist",
        "focus"
      ],
      "traditions": [],
      "description": "Your apparition guides your attacks and imparts its skill to your movements. For the duration, your proficiency with martial weapons is equal to your proficiency with simple weapons, you gain a +1 status bonus to attack and damage rolls made with weapons or unarmed attacks, and you gain the Reactive Strike reaction; this reaction gains the apparition trait. The instincts of an apparition of battle run contrary to the use of magic; for the duration of this spell, you take a –2 status penalty to your spell attack modifiers and your spell DCs.\nSpell Effect: Embodiment of Battle\nHeightened (4th) The status bonus to attack and damage rolls granted by this spell is increased to +2.\nHeightened (7th) The status bonus to attack and damage rolls granted by this spell is increased to +3.",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) The status bonus to attack and damage rolls granted by this spell is increased to +2.\nHeightened (7th) The status bonus to attack and damage rolls granted by this spell is increased to +3."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:vindicators-judgment",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "VMABZdZyplCKTAAP",
      "slug": "vindicators-judgment",
      "publicationTitle": "Pathfinder War of Immortals",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:20476b6718f73c800d70cb890aa63daa4c0ae09564eabfbf4f47290ed1ae61c8",
    "translatableHash": "sha256:035154f9ffe666f18bd6548b22b720458c8f2c32364b8f60216664abb547cede",
    "data": {
      "schemaVersion": 1,
      "name": "Vindicator's Judgment",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "You pronounce a terrible judgment upon your quarry that causes all of your attacks and divine spells to strike with deadly efficacy. The target takes extra damage from your attacks, depending on the result of its Fortitude save. The spell ends immediately if the target is no longer your hunted prey.\nCritical Success The target is unaffected.\nSuccess The target has weakness 5 to the next Strike you make against it or damaging divine spell you cast that includes it as a target before the end of your next turn.\nFailure The target has weakness 5 to all Strikes you make against it or damaging divine spells you cast that includes it as a target for the duration of the spell.\nCritical Failure As failure, but the target is Off-Guard against the first Strike or divine spell attack you make against it each round for the duration of the spell.\nHeightened (7th) The weakness is 10.\nHeightened (9th) The weakness is 15.",
      "castingTime": "1 action",
      "range": "60 feet",
      "target": "your hunted prey",
      "area": null,
      "duration": "1 minute",
      "defense": "fortitude save",
      "damage": [],
      "heightening": "Heightened (7th) The weakness is 10.\nHeightened (9th) The weakness is 15."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:spellsurge",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "XIgvCPaSy5WXStVD",
      "slug": "spellsurge",
      "publicationTitle": "Pathfinder War of Immortals",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:89677f3c0b35088b8e96f3995e69c7e31d94233780395e5f72f14fb60e39bc8d",
    "translatableHash": "sha256:56d70e3259814aa3cc43d6e7ac6a8e944c299005aeb0655260429cd4b8adbd85",
    "data": {
      "schemaVersion": 1,
      "name": "Spellsurge",
      "rank": 6,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "mythic"
      ],
      "traditions": [],
      "description": "Magic surges to life around you, feeding on the raw power you radiate. Choose one of the following abilities to affect creatures in your aura. You can choose a different effect, ending the previous one, by Sustaining the spell. You can Dismiss the aura.\n• Interference The excess magic surrounding you creates a mental static. All saving throws against mental effects gain a +2 circumstance bonus.\n• Mana Well You become a source of pure magic that allows spells to be cast more freely. Allied creatures that would normally be required to attempt a flat check to Cast a Spell (such as from the Stupefied condition) automatically succeed.\n• Overpower Resistance Surging magic penetrates most defenses. Any time a spell affects a creature within the aura, that spell ignores an amount of the creature's resistance equal to your level. This applies to all damage the spell deals, including persistent damage and damage caused by an ongoing effect of the spell. This doesn't cause the spell to ignore immunities.\n• Ward Stray magical energy diffuses damaging spells. Any time a spell affects a creature within the aura, the damage dealt by the spell is reduced by an amount equal to your level. This applies to all damage the spell deals, including persistent damage and damage caused by an ongoing effect of the spell.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "10 emanation",
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:arcane-explosion",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "KY2xyMavZHAoG69D",
      "slug": "arcane-explosion",
      "publicationTitle": "Pathfinder War of Immortals",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:4205e5dab3a4c2e58f731e132065427289b21cae7d846e5f08504a7c2481484e",
    "translatableHash": "sha256:756803613253f4c73d265fc9eecd37ff0133d147760971bdf9d218cf1c1754ef",
    "data": {
      "schemaVersion": 1,
      "name": "Arcane Explosion",
      "rank": 9,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "force",
        "manipulate",
        "mythic"
      ],
      "traditions": [],
      "description": "Your body is temporarily converted into a ball of pure magic, rapidly exploding outward and reforming as a glowing sphere, after which you eventually regain your normal form. All creatures and objects in the emanation take 16d6 force damage (basic Fortitude saving throw). Creatures that fail are also pushed 10 feet directly away from you; creatures that can't complete this forced movement are knocked Prone (but creatures who reduce this movement, such as with an ability or feat, don't fall prone). You become unfiltered magic; you gain the incorporeal trait, are immune to disease, poison, and precision damage, and gain resistance to all damage equal to your level (except force damage, spirit damage, and damage from Strikes with the Ghost Touch property rune), with double the resistance against non-magical damage. While incorporeal, you can't Strike, Cast a Spell, or take any actions with the manipulate trait. Any creature that ends its turn adjacent to you while you're in this state takes 6d6 force damage. You remain as pure magic until you Dismiss your new form, returning to your normal state at maximum Hit Points.\nSpell Effect: Arcane Explosion",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "30 emanation",
      "duration": "",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "16d6",
          "type": "force",
          "kind": "damage"
        }
      ],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:barbed-spear",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "dQ7LrD2HxJoCzi2M",
      "slug": "barbed-spear",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:da01ac15992edda1e0b0ab916e19e7cce91979285e71fd987c845fc1963fa886",
    "translatableHash": "sha256:93008f684cd7a637035bd8d72f1067ad66f1330c712dc4a103d00ec713fcf06b",
    "data": {
      "schemaVersion": 1,
      "name": "Barbed Spear",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "attack",
        "concentrate",
        "focus",
        "manipulate",
        "sorcerer"
      ],
      "traditions": [],
      "description": "You conjure a vicious barbed spear and hurl it at a foe. Make a ranged spell attack roll, dealing 1d8 piercing damage on a success and double damage on a critical success. The spear remains lodged within a creature it hits, making the target Clumsy 1 (or increasing its clumsy condition by 1 if it is already clumsy) for 1 minute or until the spear is removed with a successful Athletics check against your spell DC as an Interact action, whichever comes first.\nHeightened 1 The initial damage increases by 1d8.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "varies",
      "defense": null,
      "damage": [
        {
          "formula": "1d8",
          "type": "piercing",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The initial damage increases by 1d8."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:wings-of-the-valkyrie",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "9ZwpT9RDwCxhYQXd",
      "slug": "wings-of-the-valkyrie",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:0ac5df51b74f49c8c740704a105b45026e317cb6f8c1be9c5577c58840a023d0",
    "translatableHash": "sha256:4e61705db636635134185290fd77f2e5db6685c141a2a4e62548e9926d7f0d4b",
    "data": {
      "schemaVersion": 1,
      "name": "Wings of the Valkyrie",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate",
        "sorcerer"
      ],
      "traditions": [],
      "description": "Powerful feathered wings—usually vibrant white or jet black—emerge from your back, granting you a fly Speed equal to your Speed. You can use these wings to attempt to Shove a creature; you don't need a free hand to do so, and you can roll using your spell attack modifier instead of your Athletics skill for the check. When this spell's duration ends, if you're still flying, you float to the ground, as Gentle Landing.\nSpell Effect: Wings of the Valkyrie\nHeightened (5th) The duration increases to 1 minute.\nSpell Effect: Wings of the Valkyrie (Heightened)",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "3 rounds",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (5th) The duration increases to 1 minute.\nSpell Effect: Wings of the Valkyrie (Heightened)"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:shielding-formation",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "6QEWTuCKRQQTyoeS",
      "slug": "shielding-formation",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:a6bf2b1309f917cc4a2f7bb1cc510ad6470cd365bea8f8a1f5c937fa712d6ef5",
    "translatableHash": "sha256:f16abc1a0cfa88730afac7ef49cfda8862a4c2d4c2571750b2a75454944ad3af",
    "data": {
      "schemaVersion": 1,
      "name": "Shielding Formation",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "force",
        "manipulate",
        "wizard"
      ],
      "traditions": [],
      "description": "You conjure magical shields of force to protect your allies around you. You and each ally who ends their turn within the emanation gain a +1 circumstance bonus to AC until they leave the emanation or the spell ends, whichever comes first. If an ally takes physical damage or damage from a spell or magical effect while being granted this bonus, they can choose to end the bonus for themselves as a free action to gain resistance 10 to all damage against the triggering damage. If they do, they become temporarily immune to the effects of shielding formation for 10 minutes. You can do the same by spending your reaction; if you do, you can't cast shielding formation again for 10 minutes, though you can continue Sustaining the benefits for others.\nSpell Effect: Shielding Formation",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "30 emanation",
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:let-not-the-fallen-rest",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "USKnG2ZSzVs4xn85",
      "slug": "let-not-the-fallen-rest",
      "publicationTitle": "Pathfinder Battlecry!",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:5b636d22dfff52f49f2419dd6ac33f451d8a3eb999146c4d2d2d482eda072423",
    "translatableHash": "sha256:b9c065bea9532f35ee104d3720baddb3d08443f1842f9ad8651e102c58436005",
    "data": {
      "schemaVersion": 1,
      "name": "Let Not the Fallen Rest",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "healing",
        "manipulate",
        "sorcerer"
      ],
      "traditions": [],
      "description": "You exhort your fallen comrades to return to the battle. Each allied creature within the emanation whose Dying value is 2 or less regains 4d10 Hit Points and can Stand as a free action, which doesn't provoke reactions.\nHeightened 1 The amount of healing increases by 1d10.\nPFS Note: This spell affects unconscious allies with a dying value of 2 or less, in addition conscious allies with the dying 1 or 2 condition. Conscious members are not considered to have the dying 0 condition and are unaffected.",
      "castingTime": "3 actions",
      "range": "",
      "target": "",
      "area": "30 emanation",
      "duration": "",
      "defense": null,
      "damage": [
        {
          "formula": "4d10",
          "type": "untyped",
          "kind": "healing"
        }
      ],
      "heightening": "Heightened 1 The amount of healing increases by 1d10.\nPFS Note: This spell affects unconscious allies with a dying value of 2 or less, in addition conscious allies with the dying 1 or 2 condition. Conscious members are not considered to have the dying 0 condition and are unaffected."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:glimpse-weakness",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "cNnHV97gPqxJ3Rrr",
      "slug": "glimpse-weakness",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/glimpse-weakness.webp"
    },
    "sourceHash": "sha256:74de2c0768a51e1cdabc2e41411720f826cc75457afaee9abce3b7e9d1c61d71",
    "translatableHash": "sha256:eda05a9622d9c8fb0a8bb83ce7b849fb980ab16bdb6a3d93a1433f0e3a533179",
    "data": {
      "schemaVersion": 1,
      "name": "Glimpse Weakness",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cantrip",
        "concentrate",
        "psychic"
      ],
      "traditions": [],
      "description": "You glimpse a loose scale, a seam in a foe's armor, or a similar weakness, aiding your allies in landing a precise hit. The first ally that hits the target with a successful Strike deals additional precision damage equal to 1 + this spell's rank, and then the spell ends.\nSpell Effect: Glimpse Weakness",
      "castingTime": "1 action",
      "range": "60 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:thermal-stasis",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "dhpXpzt7TCm8TbHM",
      "slug": "thermal-stasis",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/thermal-stasis.webp"
    },
    "sourceHash": "sha256:ab83db3f2db516c00a11fdab3b9f538f713607cf63a5320603e92e9c01a084f2",
    "translatableHash": "sha256:37dfb40230b89cf1d47d21d57cc3ffb6b054f9153d07905241ec7bfbd5957121",
    "data": {
      "schemaVersion": 1,
      "name": "Thermal Stasis",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cantrip",
        "concentrate",
        "psychic"
      ],
      "traditions": [],
      "description": "The same abilities that let you raise or lower thermal energy also let you keep it at a safe medium. The target gains resistance 2 against fire damage and resistance 2 against cold damage.\nSpell Effect: Thermal Stasis\nHeightened 1 Each resistance increases by 2.",
      "castingTime": "1 action",
      "range": "60 feet",
      "target": "1 creature",
      "area": null,
      "duration": "until the start of your next turn",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 Each resistance increases by 2."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:frenzied-revelry",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "fxRaWoeOGyi6THYH",
      "slug": "frenzied-revelry",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:56665d0dfb955bf48861e1db742e2a89e3fff924ae0c7640301235a8b40ba8b0",
    "translatableHash": "sha256:0405a010e1f8a6a5b34c061188f2da0f61a2676a860dca75db3dfe2c78f8b651",
    "data": {
      "schemaVersion": 1,
      "name": "Frenzied Revelry",
      "rank": 1,
      "rarity": "rare",
      "traits": [
        "cleric",
        "concentrate",
        "emotion",
        "focus",
        "manipulate",
        "mental"
      ],
      "traditions": [],
      "description": "You recall memories of hedonistic rites to send yourself into an infectious frenzy, dancing and howling wildly to encourage your companions to join in. You and your allies gain a +1 status bonus to saving throws against mental effects while in the area. Whenever someone benefiting from this bonus critically succeeds at a saving throw against an enemy's mental effect, its revelry increases, granting it a +1 status bonus to attack rolls and damage rolls for 1 round.\nSpell Effect: Frenzied Revelry\nHeightened (4th) The emanation's radius is 10 feet, and the status bonus to saves is +2.\nHeightened (7th) The emanation's radius is 15 feet, and the status bonus to saves is +3.",
      "castingTime": "2 actions",
      "range": "",
      "target": "you and allies in the area",
      "area": "5 emanation",
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) The emanation's radius is 10 feet, and the status bonus to saves is +2.\nHeightened (7th) The emanation's radius is 15 feet, and the status bonus to saves is +3."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:hollow-heart",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "k6f5nvSv0XIhbiHj",
      "slug": "hollow-heart",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/hollow-heart.webp"
    },
    "sourceHash": "sha256:632c90138d346f267cd182cc9a1620d7bcd4a7ee565ef0747985c1fa0b4f0cd5",
    "translatableHash": "sha256:dc7360e854c8156265bd6130a097a0752ad647e3fdce10dda7c33411e7b8faa5",
    "data": {
      "schemaVersion": 1,
      "name": "Hollow Heart",
      "rank": 1,
      "rarity": "rare",
      "traits": [
        "cleric",
        "concentrate",
        "emotion",
        "fear",
        "focus",
        "manipulate",
        "mental"
      ],
      "traditions": [],
      "description": "You stoke the target's ambition beyond reason, until it believes no one is capable of helping it, or that others aren't to be trusted. The target attempts a Will saving throw.\nCritical Success The target is unaffected.\nSuccess The target treats no other creature as an ally for 1 round.\nFailure The target treats no other creature as an ally for 3 rounds.\nCritical Failure As failure, and the target is Frightened 1 as it realizes it can't rely on anyone but itself.",
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
    "contentId": "pf2e:spell:spells-srd:forbidden-thought",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "lpoWfblSMLcJfxsZ",
      "slug": "forbidden-thought",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/forbidden-thought.webp"
    },
    "sourceHash": "sha256:976dc645aa2902ac59ec78af7ffb9d0e0c4a7ba31b04673bcd20d788bf275e54",
    "translatableHash": "sha256:db669a771d2bb90d5538319539cad338c3fc3db2a265cd84fcd24ade5a4adce8",
    "data": {
      "schemaVersion": 1,
      "name": "Forbidden Thought",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cantrip",
        "concentrate",
        "manipulate",
        "mental",
        "psychic"
      ],
      "traditions": [],
      "description": "You place a psychic lock in a foe's mind that prevents it from a specific action. Choose \"Strike,\" \"Stride,\" \"Cast a Spell,\" or a specific action you know the creature to have (such as a dragon's magic breath). If the creature attempts that action on its next turn, it must surmount your lock to do so, causing it to take 2d6 mental damage (with a basic Will save). The target is then temporarily immune for 1 minute.\nHeightened 1 The damage increases by 1d6.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": "basic will save",
      "damage": [
        {
          "formula": "2d6",
          "type": "mental",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:cinder-gaze",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "mOUwbIN1SUp8FyPR",
      "slug": "cinder-gaze",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:35694fe33ad8950d49079c5569beb85115913579c2c9d25121f1829802e58ca7",
    "translatableHash": "sha256:ff2109c25f43a4a95107040f5ff477e50f2dd65567b745a65e9abbed3074377f",
    "data": {
      "schemaVersion": 1,
      "name": "Cinder Gaze",
      "rank": 1,
      "rarity": "rare",
      "traits": [
        "cleric",
        "concentrate",
        "focus",
        "manipulate",
        "prediction"
      ],
      "traditions": [],
      "description": "You've learned to read the future in the patterns of flames and smoke. Though inexact and often symbolic, these readings help prepare you for upcoming events. When Casting this Spell, you must be near a fire (of any size) for the duration. Upon completion, roll 1d4 for your prediction. The benefit lasts for 10 minutes or until expended, whichever comes first. After casting cinder gaze, you can't cast it again for 10 minutes.\n• Terrible Danger You gain a +2 status bonus to your next initiative roll.\n• New Life The next time you take damage, just before taking the damage, you gain 6 temporary Hit Points.\n• Vivid Insight (fortune) The next time you attempt a check to Recall Knowledge, roll twice and take the higher result.\n• Good Fortune (fortune) The next time you attempt a saving throw, roll twice and take the better result.\nHeightened 1 The number of temporary Hit Points from new life increases by 2.\nSpell Effect: Cinder Gaze",
      "castingTime": "1 minute",
      "range": "",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 The number of temporary Hit Points from new life increases by 2.\nSpell Effect: Cinder Gaze"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:string-of-fate",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "qjUcAMgcSLIamjEq",
      "slug": "string-of-fate",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/string-of-fate.webp"
    },
    "sourceHash": "sha256:11989e56ae64bc79ea6281fb11ad60fcb52a1b0b7ccade88c7241e0a701cd5c1",
    "translatableHash": "sha256:5f1b27359ad5151eaf4529e849aee19937a630c7b2e487a7db420285c87cc50c",
    "data": {
      "schemaVersion": 1,
      "name": "String of Fate",
      "rank": 1,
      "rarity": "rare",
      "traits": [
        "cleric",
        "focus",
        "fortune",
        "manipulate"
      ],
      "traditions": [],
      "description": "You bond yourself to a cherished friend, vowing to share their fate for good or for ill. Whenever an effect would require both you and the target to attempt a saving throw, if one of you succeeds at your saving throw and the other critically fails, you can choose to both fail instead. You and the ally must agree to fail; otherwise, use your normal save results instead.",
      "castingTime": "1 action",
      "range": "60 feet",
      "target": "you and 1 ally",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:imaginary-weapon",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "sUr5KCpeE6AXfvPp",
      "slug": "imaginary-weapon",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/imaginary-weapon.webp"
    },
    "sourceHash": "sha256:2871e937a6715546d3b002bdb6517d8e34cfd595e1460df78cf8b8c09cc0cbab",
    "translatableHash": "sha256:e73d3abe45099add1cf9ce1b372cbc408d0ed7747b5e4703746d339b14ace776",
    "data": {
      "schemaVersion": 1,
      "name": "Imaginary Weapon",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "attack",
        "cantrip",
        "concentrate",
        "force",
        "manipulate",
        "psychic"
      ],
      "traditions": [],
      "description": "You create a simple weapon of force and lash out, its arc following your hand. Make a melee spell attack roll against your target's AC. If you hit, you deal 2d6 force damage. On a critical success, you deal double damage and can choose to detonate your weapon to push the target 10 feet away from you.\nHeightened 1 The damage increases by 1d6.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [
        {
          "formula": "2d6",
          "type": "force",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:victory-cry",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "t4hGPdh6vAEgBFgZ",
      "slug": "victory-cry",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/victory-cry.webp"
    },
    "sourceHash": "sha256:ad1027af72e4467ebf998939d30fefd6f4b2a3515c8b3f9355e2204cb74eb462",
    "translatableHash": "sha256:f9d266ad84158d021ff009df664b53e48d5715d701db5033e17a9258e9bb1fcf",
    "data": {
      "schemaVersion": 1,
      "name": "Victory Cry",
      "rank": 1,
      "rarity": "rare",
      "traits": [
        "cleric",
        "concentrate",
        "focus",
        "sonic"
      ],
      "traditions": [],
      "description": "Trigger An ally within range critically succeeds at a melee Strike.\nYour true might comes from your bonds with your allies, and you glory in their achievements. The weapon used to make the Strike deals an additional 1d6 sonic damage (not doubled due to the critical hit), and the ally can immediately attempt to Shove the creature struck, even if the ally's hands are full. Your ally can use its item bonus to the triggering attack roll on the Athletics check, if any, and it gains a +1 status bonus to the Athletics check if the triggering Strike was with a weapon that has the trip trait or an unarmed attack that has the trip trait.\nHeightened 2 The sonic damage increases by 1d6.",
      "castingTime": "reaction",
      "range": "30 feet",
      "target": "the triggering ally",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 2 The sonic damage increases by 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:temporal-distortion",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "UbHK19RYbxRXWgWX",
      "slug": "temporal-distortion",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/temporal-distortion.webp"
    },
    "sourceHash": "sha256:bf9505524edeceb27ec0859f9612e8b9977245af6f8aaf86a0981e3784bf4103",
    "translatableHash": "sha256:b987ccab9ef9500e3997aa132e54627bf365ea2af70b25a14dbdce73a96a2df3",
    "data": {
      "schemaVersion": 1,
      "name": "Temporal Distortion",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "oracle"
      ],
      "traditions": [],
      "description": "You share some of your own temporal distortions with a foe, altering their mind and body unpredictably as they're thrown backward or forward in time. Roll 1d4. On a 1, the foe becomes clumsy; on a 2, it becomes enfeebled; on a 3, it becomes stupefied; and on a 4, you choose which condition applies.\nCritical Success The target is unaffected.\nSuccess The target is either Clumsy 1, Enfeebled 1, or Stupefied 1 for 1 round, depending on the result of the d4.\nFailure The target is either clumsy 1, enfeebled 1, or stupefied 1 for 4 rounds, depending on the result of the d4.\nCritical Failure As failure, but the time warp is stronger, increasing the condition's effects but making it run its course faster. The condition's value is 3, and the condition lasts for 2 rounds.",
      "castingTime": "1 action",
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
    "contentId": "pf2e:spell:spells-srd:distortion-lens",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "WOM9alxiTdp0HEVD",
      "slug": "distortion-lens",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/distortion-lens.webp"
    },
    "sourceHash": "sha256:f2dc5311b4f795a9abb3135689f45a4d2d76b865a454f059356ebd78affc38e1",
    "translatableHash": "sha256:d423f038c86d99fed0dd16f1a9dae2a58977966a6b3c506aeabe1cd8756c9cdc",
    "data": {
      "schemaVersion": 1,
      "name": "Distortion Lens",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cantrip",
        "concentrate",
        "psychic"
      ],
      "traditions": [],
      "description": "You create a magical lens that distorts space as best suits you. You create the lens in an area in range, even suspended in midair. If your or an ally's ranged attack passes through the lens, the attack gains an additional 10 feet of range; if an enemy's ranged attack would pass through the lens, it requires an additional 10 feet of range to move through, though the enemy knows before using its ability whether the interference puts the target out of range. An ally whose space overlaps the lens can increase the range of its ranged attacks, but an enemy whose space overlaps the lens doesn't reduce the range of its ranged attacks.\nThe first time each round you Sustain the Spell, you can choose to relocate it to another area within range. The lens disappears if you cast distortion lens again.\nHeightened 3 The lens increases or decreases the range of abilities by an additional 5 feet.",
      "castingTime": "1 action",
      "range": "30 feet",
      "target": "",
      "area": "5 square",
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 3 The lens increases or decreases the range of abilities by an additional 5 feet."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:telekinetic-rend",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "yyz029C9eqfY38PT",
      "slug": "telekinetic-rend",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/telekinetic-rend.webp"
    },
    "sourceHash": "sha256:b61cd410020310d57c38cddee45b11c3a1a5635a0b63e1a41c65bce93416f9d9",
    "translatableHash": "sha256:1e3607abbb7846c63c91029af662038e9468dcdbfe264f715a0dfff0ff1f1e28",
    "data": {
      "schemaVersion": 1,
      "name": "Telekinetic Rend",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cantrip",
        "concentrate",
        "manipulate",
        "psychic"
      ],
      "traditions": [],
      "description": "Your mind creates a violent axis of motion in a nearby space that can smash or sever at your will. You deal your choice of 1d6 bludgeoning or 1d6 slashing damage to all creatures in the area, with a basic Fortitude save. A creature large enough to be in more than one of the bursts takes damage only once.\nHeightened 2 The damage increases by 1d6.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "2 non-overlapping 5-foot bursts",
      "area": "5 burst",
      "duration": "",
      "defense": "basic fortitude save",
      "damage": [],
      "heightening": "Heightened 2 The damage increases by 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:return-the-favor",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "9gMQPCaFM27PEIh4",
      "slug": "return-the-favor",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:4a20297457d008eac8022fade1e3cc63a0f1df15f031c6b2a8faeeb38962ee8a",
    "translatableHash": "sha256:3af66e9ec54e463d908e0ded415324c1889131aa35826249710a6150f4d4567f",
    "data": {
      "schemaVersion": 1,
      "name": "Return the Favor",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "focus",
        "hex",
        "manipulate",
        "witch"
      ],
      "traditions": [],
      "description": "Trigger An ally uses a reaction to grant you a beneficial effect during a combat encounter.\nYou're unable to leave any debts unpaid. When an ally supports you in a fight, you offer assistance in turn for the favor. The triggering ally gains 12 temporary Hit Points for 1 minute.\nHeightened 1 The temporary Hit Points increase by 4.\nSpell Effect: Return the Favor",
      "castingTime": "reaction",
      "range": "30 feet",
      "target": "1 ally",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 The temporary Hit Points increase by 4.\nSpell Effect: Return the Favor"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:vector-screen",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "a0AMgATvQGwDR5dR",
      "slug": "vector-screen",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/vector-screen.webp"
    },
    "sourceHash": "sha256:1bfd3c7eeb0bc7cdc6d7d6d7ff2529314b6985dd497a42edcb42a1de81140366",
    "translatableHash": "sha256:875af49a49a4fa0590c9e2cb39d1f46c18fc455f1340d5a6d510824eae80b1f8",
    "data": {
      "schemaVersion": 1,
      "name": "Vector Screen",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "cantrip",
        "concentrate",
        "manipulate",
        "psychic"
      ],
      "traditions": [],
      "description": "You set up a transparent, rippling screen of telekinetic energy that seizes small, fast-moving projectiles. Creatures can pass through the screen, but ammunition from physical ranged attacks—such as arrows, bolts, sling bullets, and other objects of similar size—is automatically trapped in the screen, clattering to the ground once the spell ends. Attacks with bigger ranged weapons, such as javelins, take a –2 circumstance penalty to their attack rolls if their paths pass through the screen. Massive ranged weapons and spell effects that don't create physical objects pass through the screen with no penalty.\nHeightened (5th) The screen is 20 feet long.\nHeightened (6th) The screen is 20 feet long and can interfere even with massless attacks, like magical blasts or gouts of flame. The screen imposes a –2 circumstance penalty to the attack rolls of spell effects even if they don't create physical objects. It also protects against area effects that pass through the screen, granting standard cover to creatures on the opposite side of the screen from the center or origin point of an area.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "",
      "area": "10 line",
      "duration": "until the start of your next turn",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (5th) The screen is 20 feet long.\nHeightened (6th) The screen is 20 feet long and can interfere even with massless attacks, like magical blasts or gouts of flame. The screen imposes a –2 circumstance penalty to the attack rolls of spell effects even if they don't create physical objects. It also protects against area effects that pass through the screen, granting standard cover to creatures on the opposite side of the screen from the center or origin point of an area."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:shatter-mind",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "BqJAOPimCq5uCcEJ",
      "slug": "shatter-mind",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/shatter-mind.webp"
    },
    "sourceHash": "sha256:f06237e0b312260b5f49ed78d36bd3d82b3f8dbae2e1eaa931ac3eafe18e2d38",
    "translatableHash": "sha256:e34af1de1959dc1313943be80288311ad007d468a5614a114e5398a288327dee",
    "data": {
      "schemaVersion": 1,
      "name": "Shatter Mind",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "cantrip",
        "concentrate",
        "manipulate",
        "mental",
        "psychic"
      ],
      "traditions": [],
      "description": "You telepathically assail the minds of your foes. You deal 3d4 mental damage to all enemies in the area, with a basic Will save.\nHeightened 1 The damage increases by 1d4.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "15 cone",
      "duration": "",
      "defense": "basic will save",
      "damage": [
        {
          "formula": "3d4",
          "type": "mental",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 1d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:ghostly-shift",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "JqHAxsMUZ4Mr5bTr",
      "slug": "ghostly-shift",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/ghostly-shift.webp"
    },
    "sourceHash": "sha256:b1507e579beba4d1a7b3cc4aa8392609b3d36a08a114bc34399d1b034c7def5d",
    "translatableHash": "sha256:a2f59179eb05e713f748c5cb8bcdc112c094f08c7263f19dd5e4cde77799cfa1",
    "data": {
      "schemaVersion": 1,
      "name": "Ghostly Shift",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "cantrip",
        "concentrate",
        "psychic"
      ],
      "traditions": [],
      "description": "Your body becomes insubstantial as you partially phase out. You gain resistance 2 to all damage (except force).\nSpell Effect: Ghostly Shift\nHeightened 2 The resistance increases by 1.",
      "castingTime": "1 action",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 2 The resistance increases by 1."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:omnidirectional-scan",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "l4bHFR9UW2XiY3kH",
      "slug": "omnidirectional-scan",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/omnidirectional-scan.webp"
    },
    "sourceHash": "sha256:5a028416001a9f94ce44be48eb590726d21cebda9c7bd24f85faa8b508d56cb8",
    "translatableHash": "sha256:4f4cfaa06202caead21f4affa9c60ffceeedfddda441768804eacbc079833b55",
    "data": {
      "schemaVersion": 1,
      "name": "Omnidirectional Scan",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "cantrip",
        "concentrate",
        "psychic",
        "scrying"
      ],
      "traditions": [],
      "description": "You quickly view your surroundings from a variety of angles, your senses constructing an overall mental picture. You can choose to Seek the entire emanation of the spell.\nRegardless of whether you seek, target one ally and one enemy in the area; if a target is Concealed or Hidden from you, you automatically succeed at the flat check to target it with this spell. You prepare to Aid the target ally on an attack roll against the target enemy. If you take this Aid reaction, you use your spell attack modifier and proficiency rank on your check to Aid. If you critically fail the roll to Aid, you get a failure instead.",
      "castingTime": "1 action",
      "range": "",
      "target": "1 ally and 1 enemy",
      "area": "30 emanation",
      "duration": "until the start of your next turn",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:time-skip",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "LbqunTurwXB3u9Vp",
      "slug": "time-skip",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/time-skip.webp"
    },
    "sourceHash": "sha256:a96dc78e22ea50397a08245560dfd2f8754bf388806e29a0eaf457e110e7dac6",
    "translatableHash": "sha256:ff3c81c09e41b8526dca8b543c2ca99e1fdbfe116a8d2965c1b004fa9185f27b",
    "data": {
      "schemaVersion": 1,
      "name": "Time Skip",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "oracle"
      ],
      "traditions": [],
      "description": "You manipulate time around your ally, pushing them forward a few moments in time. The target is Quickened on its next turn and can use the action only to Step, Stride, or Strike.\nHeightened (6th) You can affect up to four willing creatures other than yourself within range.",
      "castingTime": "1 action",
      "range": "30 feet",
      "target": "1 willing creature other than yourself",
      "area": null,
      "duration": "1 round",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (6th) You can affect up to four willing creatures other than yourself within range."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:astral-rain",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "nUSi2B7RhIKjaiXQ",
      "slug": "astral-rain",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/astral-rain.webp"
    },
    "sourceHash": "sha256:e1992b8cfccc99f62d596e27468fde910ec7f99f4188bea5410aebef1a153792",
    "translatableHash": "sha256:3f2d57946fac31064aca480f99c1f6e5c9ccb28592737446fbba8b161d88f328",
    "data": {
      "schemaVersion": 1,
      "name": "Astral Rain",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "cantrip",
        "concentrate",
        "force",
        "manipulate",
        "psychic"
      ],
      "traditions": [],
      "description": "You fling a mass of furious thoughts into the air, where they expand into numerous blades or other shapes that rain down. Any creature that's in the area or enters the area before the start of your next turn takes 4d4 bludgeoning or piercing damage (your choice), with a basic Reflex saving throw.\nHeightened 1 The damage increases by 1d4.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "",
      "area": "5 cube",
      "duration": "",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "4d4",
          "type": "untyped",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 1d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:entropic-wheel",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "X4T5RlQBrdpmA35n",
      "slug": "entropic-wheel",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/entropic-wheel.webp"
    },
    "sourceHash": "sha256:936b222a7408db87454c0650563359ff5175143a15f5272781cfeab1618384cc",
    "translatableHash": "sha256:b8a3fa5075160bc4a8112b08f5322381816f4ccf59e334d73399b54554ce2918",
    "data": {
      "schemaVersion": 1,
      "name": "Entropic Wheel",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "cantrip",
        "cold",
        "concentrate",
        "fire",
        "psychic"
      ],
      "traditions": [],
      "description": "Trigger You deal cold or fire damage to an enemy.\nYou stockpile thermal energy in a magical wheel-like construct that lets you burn opponents with cold or freeze their bodies with heat. When you Cast the Spell, the wheel has one mote of thermal energy, and when you use a cold or fire effect or deal cold or fire damage, the wheel spins, siphoning off a bit of energy and gaining another mote. The wheel can't gain motes more than once on a given turn, and the maximum number of motes is equal to entropic wheel's rank.\nWhen you Cast a Spell that deals fire damage, the target also takes cold damage equal to the number of motes in the entropic wheel. When you Cast a Spell that deals cold damage, the target also takes fire damage equal to the number of motes in the entropic wheel. This applies only to the initial damage of the spell, not to any persistent damage or ongoing effects.\nSpell Effect: Entropic Wheel",
      "castingTime": "reaction",
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
    "contentId": "pf2e:spell:spells-srd:purifying-veil",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "3ySPK8qwNcuESwa0",
      "slug": "purifying-veil",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:e075db9aba3b2f370a6cb7871f8a0461047581a45962d1e39f15664bc48c3d56",
    "translatableHash": "sha256:2087769e4b25609f148cf4f8d93817d1b3026b1a8a8f54a1a1ced4d727ca3658",
    "data": {
      "schemaVersion": 1,
      "name": "Purifying Veil",
      "rank": 4,
      "rarity": "rare",
      "traits": [
        "cleric",
        "concentrate",
        "focus",
        "holy",
        "manipulate",
        "spirit",
        "water"
      ],
      "traditions": [],
      "description": "Drawing on the purifying powers of water, you call forth a veil of fine water droplets suffused with holy energy. The veil surrounds the target. Everything on each side of the veil is Concealed from creatures on the opposite side, but the water doesn't impede attacks or movement across the veil. If the target moves through the veil, it takes 4d6 spirit damage with a basic Will save. If the target leaves the veil, the spell ends.\nHeightened 1 The damage increases by 1d6.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "1 Large or smaller creature",
      "area": null,
      "duration": "1 minute",
      "defense": "basic will save",
      "damage": [
        {
          "formula": "4d6",
          "type": "spirit",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:shaken-confidence",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "9j35xXKVVtHCh1Pe",
      "slug": "shaken-confidence",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:67c31b1324cf6c3e7729749ebea46e49a531682e209fe2a6a80a2de22c592b0b",
    "translatableHash": "sha256:a7b7e29f7000620aa1db27fd17d8df9d6a7249c277a2ff9bdee40bcc591a93af",
    "data": {
      "schemaVersion": 1,
      "name": "Shaken Confidence",
      "rank": 4,
      "rarity": "rare",
      "traits": [
        "cleric",
        "concentrate",
        "emotion",
        "focus",
        "mental",
        "misfortune"
      ],
      "traditions": [],
      "description": "Trigger An enemy within 30 feet of you critically fails an attack roll, Perception check, or skill check.\nYou mock the target for all its failings, twisting its self-confidence into doubt. The enemy attempts a Will saving throw.\nSuccess The target is unaffected.\nFailure The target is briefly shaken and unsure of its abilities. It must roll twice and take the worse result on the next roll of the same type as the critical failure that triggered the spell (such as the target's next Acrobatics check if the spell's trigger was a critical failure on an Acrobatics check). If the target doesn't attempt any qualifying checks, the spell ends at the end of the target's next turn.",
      "castingTime": "reaction",
      "range": "30 feet",
      "target": "An enemy that critically failed an attack roll, Perception check, or skill check",
      "area": null,
      "duration": "varies",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:inevitable-destination",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "fMnjP4hpNRV9EfVM",
      "slug": "inevitable-destination",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/inevitable-destination.webp"
    },
    "sourceHash": "sha256:dd87660413d2e6eb9ce624bf724d5faa3a58f796661931ad74f42404caf0d7a6",
    "translatableHash": "sha256:68f832232cb5fe6ae3c78140ff8e3c098e95978badee2984cdbc1b0725ad443a",
    "data": {
      "schemaVersion": 1,
      "name": "Inevitable Destination",
      "rank": 4,
      "rarity": "rare",
      "traits": [
        "cleric",
        "concentrate",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "You twist the paths of the target, ensuring that each one leads to you. The target attempts a Will saving throw.\nCritical Success The spell has no effect.\nSuccess Your pull hampers the target's footsteps. It takes a –10-foot circumstance penalty to its Speeds until the end of its next turn.\nFailure The target can't move any farther from you than it was when you Cast the Spell, though it can move in such a way that it maintains an equal distance. If you move farther away from the target than the initial distance, the spell ends. The targeted foe can attempt to Escape against your spell DC. If it succeeds, the spell ends.\nCritical Failure As failure, plus the target is pulled 10 feet closer to you and falls Prone, tripping in its haste to move toward you.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "you and 1 enemy",
      "area": null,
      "duration": "2 rounds",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:wind-whispers",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "i06YFOtfGfpUvcD7",
      "slug": "wind-whispers",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/wind-whispers.webp"
    },
    "sourceHash": "sha256:ea961d0d3da6930f6b97c5218e5ff82dde98c59b49e5a70c26cd9459cb3bf799",
    "translatableHash": "sha256:89de96ebc13ad86466c760818df53e8c248b315a0f709a93c1b352e86299f86c",
    "data": {
      "schemaVersion": 1,
      "name": "Wind Whispers",
      "rank": 4,
      "rarity": "rare",
      "traits": [
        "cleric",
        "concentrate",
        "focus",
        "linguistic",
        "manipulate",
        "mental"
      ],
      "traditions": [],
      "description": "You call forth numerous breezes in which you weave gossip, whispering subtly into the ears of those around. Choose a rumor or information you wish to spread, which may or may not be true, about a single subject. Those within range of the spell overhear the rumor at some point over the next hour, though they'll be unable to pin it down to a source. Attempt a check with a modifier equal to your spell DC - 10 against a hard DC for your level. The GM might modify the DC depending on how plausible the rumor is. Repeated castings to spread the same rumor or information have no effect unless circumstances have substantially changed, as determined by the GM.\nCritical Success Your rumor spreads far and wide, and it's at the tip of people's tongues. For 1 week, anyone who succeeds at a check to Gather Information on the specific subject learns your rumor in preference to other rumors about the subject. Skill checks to convince people that the rumor is true get a +2 circumstance bonus.\nSuccess Enough people take note of the rumor that it begins to spread, though those who heard the rumor aren't necessarily convinced. For 1 week, anyone who succeeds at a check to Gather Information on the specific subject adds your rumor to the list of rumors they could learn about the subject, and skill checks to convince people that the rumor is true get a +1 circumstance bonus.\nFailure Most in the area dismiss the rumor as wild gossip and pay it little mind, granting no effect.\nCritical Failure The winds' gossip is misinterpreted and spreads information contradictory to the rumor you were attempting to spread. A contradictory rumor spreads, and skill checks to convince others that your original rumor is true take a -2 circumstance penalty.",
      "castingTime": "1 hour",
      "range": "1 mile",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:isolation",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "mer4V7vWdTs1oLbG",
      "slug": "isolation",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/isolation.webp"
    },
    "sourceHash": "sha256:bf0532316797fa31f67e6c60bbd07eb377adaf278f728326d69ef86f071ee7b9",
    "translatableHash": "sha256:b2116236b66aab19ff6352be78e2efba02ceccf0a347b785684a93ff949c4c81",
    "data": {
      "schemaVersion": 1,
      "name": "Isolation",
      "rank": 4,
      "rarity": "rare",
      "traits": [
        "cleric",
        "concentrate",
        "focus",
        "illusion",
        "manipulate"
      ],
      "traditions": [],
      "description": "You summon a tangible manifestation of loneliness to cloak the target from view as surely as if it were wreathed in darkness. The target attempts a Will saving throw.\nCritical Success The target is unaffected.\nSuccess The target becomes Invisible, but only to its allies. Any creature not allied with the target can see it normally. Effects such as See the Unseen enable an ally to see the target. The target's allies still know the target is present and can still see all the effects of the target's actions.\nFailure As success, except the target also becomes inaudible to its allies and imperceptible to them through any other senses.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "3 rounds",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:wordsmith",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "mSM659xN2VIAHiF3",
      "slug": "wordsmith",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/wordsmith.webp"
    },
    "sourceHash": "sha256:3b62442ead59a61e9f2329efb7c7a733137391f152f0abe050f52895d9271450",
    "translatableHash": "sha256:2288ed51863f4d4ec311c78d42ddb5caeb877a8e74b4c5f210fc845b2a9f5e27",
    "data": {
      "schemaVersion": 1,
      "name": "Wordsmith",
      "rank": 4,
      "rarity": "rare",
      "traits": [
        "cleric",
        "concentrate",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "You're a devotee of knowledge with an unmatched command of the language used to spread that knowledge, and you can reshape the written word into a form more understandable to your audience. The language of the target's written text shifts to a language you know. This shift doesn't change the text's contents beyond minor translation differences, nor does it grant the reader any understanding of the original language.",
      "castingTime": "3 actions",
      "range": "touch",
      "target": "1 document written by a single author and comprised of written text in a single language",
      "area": null,
      "duration": "until the next time you Refocus",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:euphoric-renewal",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "mTpPZIJ2sdgusPP1",
      "slug": "euphoric-renewal",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/euphoric-revival.webp"
    },
    "sourceHash": "sha256:24d98e9f4c6312a9422e488a4f40f7cd129a2593db814e343aafa487e193ad7d",
    "translatableHash": "sha256:121036f218269ac18636a93691ec2f69cf8a6768352f1b82c7692517cea3aebe",
    "data": {
      "schemaVersion": 1,
      "name": "Euphoric Renewal",
      "rank": 4,
      "rarity": "rare",
      "traits": [
        "cleric",
        "concentrate",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "You view death not as an ending but a beginning, and you delight in dancing on its edge. Each time you gain the dying condition and then regain consciousness while under the effect of euphoric renewal, you gain three benefits.\n• You're Quickened on your next turn. You can use the extra action only to Stand.\n• You gain a +1 circumstance bonus to saves for 1 minute.\n• You gain 8 temporary Hit Points that last for 1 minute.\nSpell Effect: Euphoric Renewal\nHeightened 1 The number of temporary HP increases by 2.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 The number of temporary HP increases by 2."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:waking-dream",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "OmhnoYOzFhrp6rXv",
      "slug": "waking-dream",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/waking-dream.webp"
    },
    "sourceHash": "sha256:44328a0b3d2ebb68f942ebbb18dcf922875876e1be7b9d40930994495cc71436",
    "translatableHash": "sha256:3cda686960e09de554f02a3b8ff65c4935aaba8a1c2d76f75d7dc6a89fb26d89",
    "data": {
      "schemaVersion": 1,
      "name": "Waking Dream",
      "rank": 4,
      "rarity": "common",
      "traits": [
        "concentrate",
        "focus",
        "manipulate",
        "mental"
      ],
      "traditions": [],
      "description": "You cloud the target's mind with vivid, dreamlike imagery, so they have difficulty distinguishing real threats from imagined ones.\nCritical Success The target is unaffected.\nSuccess The target is distracted by the visions and treats all other creatures as Concealed for 1 round, and you can't Sustain the Spell to increase the duration.\nFailure The target is Confused. In addition to the creatures present, the target might also attack wildly at thin air, attempting to fend off the dreams. It can attempt a new save at the end of each of its turns to end the confusion. Even if the confused effect ends early, the target treats all other creatures as concealed for 1 round.\nCritical Failure As failure, but the target gets no save to end the effect early.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:path-of-least-resistance",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "s3LISC5Z55urpBgU",
      "slug": "path-of-least-resistance",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/path-of-least-resistance.webp"
    },
    "sourceHash": "sha256:8e95a71f60a28d9aaf783d0623bdb3cf098a35f74793ecff450e10aa5a280b32",
    "translatableHash": "sha256:bb8e57c29b12b95c5cef4b1daf391995dc8876fe5af2bac223fe1aebce5d8a47",
    "data": {
      "schemaVersion": 1,
      "name": "Path of Least Resistance",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus"
      ],
      "traditions": [],
      "description": "You trace several possible routes, quickly resetting the timeline until you find the safest one. Choose three spaces you could reach with two Stride actions. Each must be at least 20 feet from the other two. You Stride twice to one of the spaces, determined randomly by the GM from among the paths you chose. If some of the paths contain a hidden danger, such as a trap that you would trigger by walking into the trap's affected area, the GM doesn't consider this path when randomly determining which one you take, but if all options have a hidden danger, the GM randomly chooses between all three paths. This movement doesn't trigger reactions.",
      "castingTime": "1 action",
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
    "contentId": "pf2e:spell:spells-srd:weaponize-secret",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "TRpUjBNPQz3Eshaq",
      "slug": "weaponize-secret",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/weaponize-secret.webp"
    },
    "sourceHash": "sha256:ea88cff45579ba59f64d81fef099bfb1f5481b1f53cc4b5a938fc7d2b2611d76",
    "translatableHash": "sha256:a265c1fb4439fc761ca36a597ae42fe309111e79cc16a76018ea155bce4ad45b",
    "data": {
      "schemaVersion": 1,
      "name": "Weaponize Secret",
      "rank": 4,
      "rarity": "rare",
      "traits": [
        "cleric",
        "concentrate",
        "focus",
        "manipulate",
        "mental"
      ],
      "traditions": [],
      "description": "You understand that holding a secret is in itself a kind of power. Each target must attempt a Will save.\nSuccess The target is unaffected.\nFailure A rune symbolizing a secret the target is keeping (at the GM's discretion) appears floating in front of you. If that creature attempts a Strike or spell attack against you while you hold their secret, you can discharge the rune as a reaction to deal 7d6 mental damage to the creature.\nCritical Failure As failure, but the target becomes convinced you know their secret and takes 1d6 persistent mental damage from worry. If the rune with the secret is discharged while the creature is still taking the persistent mental damage, the persistent mental damage immediately ends.\nHeightened 1 The mental damage increases by 2d6, and the persistent mental damage on a critical failure increases by 1.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "up to 3 creatures",
      "area": null,
      "duration": "1 minute or until discharged",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened 1 The mental damage increases by 2d6, and the persistent mental damage on a critical failure increases by 1."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:redistribute-potential",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "bZMwSGc9t5K7uxZV",
      "slug": "redistribute-potential",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:cfc92e3a3199dcffe846bd0039eeebfca7d4988c88d3ce851b43b4fc58a27710",
    "translatableHash": "sha256:02e14f6807a51b5e09b05db71a92017379a1fa71005bfca014011dd83494d647",
    "data": {
      "schemaVersion": 1,
      "name": "Redistribute Potential",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "cantrip",
        "cold",
        "concentrate",
        "fire",
        "manipulate",
        "psychic"
      ],
      "traditions": [],
      "description": "Area two adjacent 5-foot squares\nEnergy attempts to balance out, but with your magic, you can shunt all the energy in one area to another. Creatures in either area take 4d4 damage with a basic Fortitude save. Choose one of the squares to steal heat, dealing cold damage, and the other to concentrate the stolen heat, dealing fire damage. A creature that fails its save also becomes Clumsy 1 from numbness if it's in the area of stolen heat or Enfeebled 1 from heat stroke if it's in the area of concentrated heat; these conditions last until the start of your next turn. If a creature is large enough to be in both squares, you choose only one of the areas for it to attempt its save against; it's unaffected by the other area.\nHeightened 1 The damage increases by 1d4.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "",
      "area": "5 square",
      "duration": "",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "4d4",
          "type": "untyped",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 1d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:contagious-idea",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Dby1eQ7y5dXBWlyc",
      "slug": "contagious-idea",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:82c257242f3706e39fa55414df9cd2114b15acc299cf4fc31d91e45fe16f886f",
    "translatableHash": "sha256:c31c7dad6e937551660c125383e65115cf1979d489f331c6e6a450970444057a",
    "data": {
      "schemaVersion": 1,
      "name": "Contagious Idea",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "cantrip",
        "concentrate",
        "emotion",
        "manipulate",
        "mental",
        "psychic"
      ],
      "traditions": [],
      "description": "Nothing is so contagious as a thought. You place either a pleasant thought or a terrifying one in a creature's mind. You can then plant the same thought in a second creature's mind. You can't choose a creature that's already been a target of this casting of contagious idea, nor can you choose yourself. The second target can be beyond the range of the spell, but it must be within 30 feet of the first target.\n• Pleasant Thought The target is soothed by a pleasant memory, gaining 5 temporary Hit Points that last for 1 minute. Spell Effect: Contagious Idea (Pleasant Thought)\n• Terrifying Thought You plant a nameless unease in the target's mind. The target must attempt a Will save.\n• Critical Success The target is unaffected and is temporarily immune for 1 minute.\n• Success The target is Frightened 1 and is then temporarily immune for 1 minute.\n• Failure The target becomes Frightened 2.\n• Critical Failure The target becomes Frightened 3.\nHeightened 1 The temporary Hit Points for a pleasant thought increase by 1.",
      "castingTime": "2 actions",
      "range": "30 feet (see text)",
      "target": "1 or 2 creatures other than yourself (see text)",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 The temporary Hit Points for a pleasant thought increase by 1."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:over-the-coals",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "PcmFpaHPCReNp1BD",
      "slug": "over-the-coals",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:7a5949d9200871031e81134b83b19991efadf8a1eb1e7102b93fdd15c012f7c6",
    "translatableHash": "sha256:11528efd8db77429bf2cd839dc587f7d76230f6dad8936372374f19517392146",
    "data": {
      "schemaVersion": 1,
      "name": "Over the Coals",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "hex",
        "manipulate",
        "mental",
        "witch"
      ],
      "traditions": [],
      "description": "You accuse the target of breaking its word to you and invoke the wrath of your patron to claim what's due, demanding the target pay you in currency, fulfill an order, or stand down. The demand can't be obviously self-destructive, or the spell fails. If the target resists, you take your payment from its life force. The target must attempt a Will save. Regardless of the result of its save, the target is temporarily immune for 1 day.\nCritical Success The target is unaffected and is immune to your pact broker cantrips for 1 day.\nSuccess If the target doesn't comply with your request by the end of its next turn, it takes 3d8 persistent void damage. If it later complies, the spell automatically ends.\nFailure As success, but if the target doesn't comply, it is Drained 1 and takes 6d8 persistent void damage.\nCritical Failure As success, but if the target doesn't comply, it is Drained 2 and Doomed 1, and takes 6d8 persistent void damage. Even if the target completes your commands later, the spell doesn't end until all the conditions end.\nHeightened (9th) You can target up to two creatures.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "1 creature",
      "area": null,
      "duration": "varies",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened (9th) You can target up to two creatures."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:foresee-the-path",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "s4HTepjhQWV1yfBs",
      "slug": "foresee-the-path",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/forsee-the-path.webp"
    },
    "sourceHash": "sha256:a265acfe25430980bc1a42bc3357b76583800c310d229ce528e7a0671545f96c",
    "translatableHash": "sha256:7493dfcfd1d85feba24ce5ab396649b357d19052c86d6ec2f3ef984245a8e144",
    "data": {
      "schemaVersion": 1,
      "name": "Foresee the Path",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "cantrip",
        "concentrate",
        "psychic"
      ],
      "traditions": [],
      "description": "You see just a split second into the future and glean how an enemy will move, making it easier for your allies to strike it mid-action. Make a check (perception) against the target enemy's Will DC or Deception DC, whichever is higher. The GM may judge a different DC is more appropriate if it's higher; for instance, using the Warfare Lore DC of a military captain. The target is then temporarily immune for 1 minute.\nCritical Success The target ally gains a reaction that lets it make a melee Strike against the target enemy, triggered if the enemy leaves a square within the ally's reach. If the ally already has an ability that lets it make melee Strikes as a reaction, such as Reactive Strike, the ally can forgo gaining the temporary reaction to instead gain a +2 status bonus to melee Strikes it makes as reactions.\nSuccess As critical success, but the status bonus an ally gets if it forgoes the reaction is +1.\nFailure The spell has no effect.",
      "castingTime": "1 action",
      "range": "60 feet",
      "target": "1 ally and 1 enemy",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:dancing-blade",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ViqzVEprQVzCXZ9f",
      "slug": "dancing-blade",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/dancing-blade.webp"
    },
    "sourceHash": "sha256:ea07d56e48a245e2108344d26fb0f81f1713354fa9d486d3cc7b5d00fe811670",
    "translatableHash": "sha256:f8e7f6d6434a642c5a689092a3c6ccca85a1cea02167d84b743e68fa882fff2d",
    "data": {
      "schemaVersion": 1,
      "name": "Dancing Blade",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "cantrip",
        "concentrate",
        "manipulate",
        "psychic"
      ],
      "traditions": [],
      "description": "You telekinetically animate a weapon that's unattended or on your person. It brandishes itself at a foe of your choice as if wielded by an invisible duelist. When you first Cast the Spell, the weapon automatically flies to the target and Strikes. It moves along with its target, always remaining within reach. Each time you Sustain the Spell, the weapon either Changes Partners or Strikes. The weapon's attacks use and contribute to your multiple attack penalty.\n• Change Partners Change the weapon's target to a different creature within 30 feet. The weapon flies to its new target.\n• Strike (attack) The weapon attacks its target using your spell attack modifier. On a hit, the weapon deals 3d6 damage, of a type determined by the weapon (if the weapon has the versatile trait or can otherwise deal multiple types of damage, you choose each time you attack).\nHeightened 2 The damage increases by 1d6.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [
        {
          "formula": "3d6",
          "type": "bludgeoning",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The damage increases by 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:hologram-cage",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "wykbu2KW9tMBRySr",
      "slug": "hologram-cage",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/hologram-cube.webp"
    },
    "sourceHash": "sha256:bc150b859cb76e5bdc64da9dbf7fe517197947ce293444ffd11b2dfadf4eb01b",
    "translatableHash": "sha256:62477a86b51d19c0825922f46a2db1cc5fea0d14bc7db0d2aec896cd21823e47",
    "data": {
      "schemaVersion": 1,
      "name": "Hologram Cage",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "cantrip",
        "concentrate",
        "illusion",
        "light",
        "manipulate",
        "psychic"
      ],
      "traditions": [],
      "description": "Area 1 cube 20 feet on each side\nYou weave light into a cube of vivid and fantastic patterns. The walls shed bright light for 10 feet (and dim light for the next 20 feet) and completely block line of sight; creatures within the cage can't be seen by creatures outside of it, though they can see each other, and creatures outside of it can't see into it. You can Dismiss the spell, and if you Cast the Spell again, your previous hologram cage ends.\nHeightened (7th) The range of the spell increases to 80 feet, and you can expand the cube to be 25 feet on each side.",
      "castingTime": "3 actions",
      "range": "60 feet",
      "target": "",
      "area": "20 cube",
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (7th) The range of the spell increases to 80 feet, and you can expand the cube to be 25 feet on each side."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:tesseract-tunnel",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Z1MoMTcgFQiCI90t",
      "slug": "tesseract-tunnel",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/tesseract-tunnel.webp"
    },
    "sourceHash": "sha256:e90b1c60a25566edb09c9bec0f4b25f703e5692fc493c7c0f598785e36905e36",
    "translatableHash": "sha256:1df6ffefd8f2381f6d1db8a51c41c95abe25172e435466a244f1d1140f7b08f7",
    "data": {
      "schemaVersion": 1,
      "name": "Tesseract Tunnel",
      "rank": 5,
      "rarity": "uncommon",
      "traits": [
        "cantrip",
        "concentrate",
        "manipulate",
        "psychic",
        "teleportation"
      ],
      "traditions": [],
      "description": "You race from point to point, tearing open a tunnel in space. You create a portal in your current space and then Stride, creating another portal in the space you end your Stride. Until the beginning of your next turn, any creature that enters the first portal can immediately transport itself to the exit portal as part of its move action, which adds the teleportation trait to its movement.\nYou can have only one tesseract tunnel open at a time; creating another causes the first to immediately close. You can use tesseract tunnel while Burrowing, Climbing, Flying, or Swimming instead of Striding if you have the corresponding movement type.",
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
    "contentId": "pf2e:spell:spells-srd:manifold-lives",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "MT8usUfwudDVUm5H",
      "slug": "manifold-lives",
      "publicationTitle": "Pathfinder Dark Archive (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:1a32f2cbfb35a3f58a7c02352c3c59814f39a8c2cca87af87c50b145a9af1fb3",
    "translatableHash": "sha256:78f6c7d0f802d8bcbcb394f00f6c12a9e000e9961a18d5983970dbd06c912260",
    "data": {
      "schemaVersion": 1,
      "name": "Manifold Lives",
      "rank": 6,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "emotion",
        "focus",
        "manipulate",
        "mental",
        "oracle"
      ],
      "traditions": [],
      "description": "You cast a creature's mind back through time, forcing them to take other paths and make other choices, experiencing countless alternate lives in an instant. The creature becomes overwhelmed with regret over paths untraveled, lives unlived, and times unrealized. The creature takes 6d6 mental damage and must attempt a Will save. After the effect is resolved, the target is then temporarily immune for 1 day.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage and is Stupefied 2 for 1 round.\nFailure The creature takes full damage and is stupefied 2 for 1 minute. While affected, the creature must attempt another save at the start of its turn; on a failure, it's Slowed 1 for that turn as it sobs uncontrollably.\nCritical Failure The creature takes double damage and for 1 minute, it's Stupefied 4 and slowed 1 as it sobs uncontrollably.\nHeightened 1 The mental damage increases by 1d6.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 target",
      "area": null,
      "duration": "varies",
      "defense": "will save",
      "damage": [
        {
          "formula": "6d6",
          "type": "mental",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The mental damage increases by 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:sky-laughs-at-waves",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "2C0ftvzTwYgzb3Qt",
      "slug": "sky-laughs-at-waves",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia Actor Guide",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:7a0ee6ca27bba9153449971ea38d5f72c77e4b9a04eb297073ecb7fc7e4bfe64",
    "translatableHash": "sha256:8c928d0d34c63d4449ee8108bc34b6ae2cf4115846f6d3cb9528d339e2debee9",
    "data": {
      "schemaVersion": 1,
      "name": "Sky Laughs at Waves",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "focus",
        "magus",
        "manipulate"
      ],
      "traditions": [],
      "description": "Requirements You're wielding a one-handed weapon in the sword group.\nYou soar and leave the world's squabbles behind before your violent intentions ground you once more. Fly up to your Speed, then make a Strike with your sword against an adjacent creature at the end of your movement. If you don't have any other means of flying, you fall after the Strike. If you can't end your movement adjacent to an enemy, this spell is disrupted.",
      "castingTime": "1 action",
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
    "contentId": "pf2e:spell:spells-srd:home-among-mulberry-leaves",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "JIphJbkWHndtFk72",
      "slug": "home-among-mulberry-leaves",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia Actor Guide",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:d6ed830fd75fdc8c0c28d540decba0b759895c5040f5acfe601e5309c627dc8b",
    "translatableHash": "sha256:31790ef06bea16c9c1d22e26411f15377a424ea8b919dd53d3c6233127610348",
    "data": {
      "schemaVersion": 1,
      "name": "Home Among Mulberry Leaves",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "focus",
        "magus",
        "manipulate"
      ],
      "traditions": [],
      "description": "Requirements You're wielding qi-infused fabric.\nQi-formed threads unravel from your fabric on conjured needles as your attack makes contact with an enemy and wraps it in place like an insect in its cocoon. Make a melee Strike with your qi-infused fabric. On a success, the target is Immobilized until the start of your next turn, though it can attempt to Escape against your spell DC. On a critical success, your needles anchor in the target's nerve centers after the threads bind it, making it your choice of Clumsy 1 or Enfeebled 1 until the start of your next turn, in addition to immobilizing it.",
      "castingTime": "1 action",
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
    "contentId": "pf2e:spell:spells-srd:luminous-stardust-healing",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "1H3T9UwxW44Y0YaS",
      "slug": "luminous-stardust-healing",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia Actor Guide",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:57112130377f579896d39cc0a8289d505f1752145169632a033bb595c11a4709",
    "translatableHash": "sha256:0704fa2e46fa5c048c166a0a6b7d2344939dccbba2a8722808fbb9ee3d918d97",
    "data": {
      "schemaVersion": 1,
      "name": "Luminous Stardust Healing",
      "rank": 2,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "focus",
        "healing",
        "manipulate",
        "spirit"
      ],
      "traditions": [],
      "description": "You scatter twinkling sparks from your sentinel weapon, replenishing your allies' fighting spirit and driving out evil. The target regains 16 Hit Points. If they were affected by a possession effect, you attempt to counteract the effect, casting out the possessing entity on a success and preventing them from possessing the target again for 1 week. If you fail, the entity is immune to being cast out by this spell for 1 week, though you can still heal the target as normal.\nHeightened 1 The amount of healing increases by 8.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [
        {
          "formula": "16",
          "type": "untyped",
          "kind": "healing"
        }
      ],
      "heightening": "Heightened 1 The amount of healing increases by 8."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:shining-starlight-attack",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "yuhhRjqBzFgkKYrq",
      "slug": "shining-starlight-attack",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia Actor Guide",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:bcbc3e30a9bae1a7200f16a5ad83eb853f14a3e534d08fe66bfeafdcd01106a6",
    "translatableHash": "sha256:e83f00f073a6339c9333cf128c7c4680ef5d62a780549f78657ea29ebc8c5421",
    "data": {
      "schemaVersion": 1,
      "name": "Shining Starlight Attack",
      "rank": 2,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "Area varies (see below)\nYou brandish your sentinel weapon, summoning the image of your constellation above your head. The constellation then releases a powerful blast that deals 2d10 damage to all enemies in either a 30-foot type:line or 15-foot type:cone, with a basic save against your arcane spell DC. Enemies that critically fail are Dazzled until the start of your next turn. The damage type, traits, area, and saving throw are determined by your zodiac constellation (see below).\nHeightened 1 The damage increases by 1d10.\nConstellation | Attack (Area, Save, Damage Type; Traits) |\nUnderworld Dragon | Volcanic vents (line, Reflex, fire) |\nOgre | Wild club swing (cone, Fortitude, bludgeoning) |\nSwordswoman | Falling blades of light (line, Reflex, piercing) |\nForest Dragon | Swarm of insects (cone, Fortitude, poison) |\nSea Dragon | Pressurized seawater (line, Reflex, piercing; water trait) |\nBlossom | Storming petals and pollen (line, Fortitude; poison, plant, wood) |\nSwallow | Wing gust (cone, Reflex, slashing; air) |\nDog | A biting dog (line, Reflex, slashing) |\nOx | A trampling ox (line, Reflex, bludgeoning) |\nSky Dragon | Draconic lightning (line, Reflex, electricity) |\nSovereign Dragon | Psychic roar (cone, Will, mental) |\nArcher | Hail of silver arrows (piercing, cone, Reflex) |",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [
        {
          "formula": "2d10",
          "type": "untyped",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 1d10.\nConstellation | Attack (Area, Save, Damage Type; Traits) |\nUnderworld Dragon | Volcanic vents (line, Reflex, fire) |\nOgre | Wild club swing (cone, Fortitude, bludgeoning) |\nSwordswoman | Falling blades of light (line, Reflex, piercing) |\nForest Dragon | Swarm of insects (cone, Fortitude, poison) |\nSea Dragon | Pressurized seawater (line, Reflex, piercing; water trait) |\nBlossom | Storming petals and pollen (line, Fortitude; poison, plant, wood) |\nSwallow | Wing gust (cone, Reflex, slashing; air) |\nDog | A biting dog (line, Reflex, slashing) |\nOx | A trampling ox (line, Reflex, bludgeoning) |\nSky Dragon | Draconic lightning (line, Reflex, electricity) |\nSovereign Dragon | Psychic roar (cone, Will, mental) |\nArcher | Hail of silver arrows (piercing, cone, Reflex) |"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:empty-inside",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "0cF9HvHzzWSbCFBP",
      "slug": "empty-inside",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:929ee30e4026db4351c1f8842913ebffef34af552101ab4d71e8350cf6f48256",
    "translatableHash": "sha256:d46a1513f5e6facb823c6cda30eb5cfd8fb98be7d585f3b095eaf562700ed0a6",
    "data": {
      "schemaVersion": 1,
      "name": "Empty Inside",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "focus",
        "mental"
      ],
      "traditions": [],
      "description": "You inject a sliver of the void into your mind, momentarily remaking it into a bleak and empty place. Attempt a counteract check against one emotion effect affecting you.\nHeightened (5th) You can attempt counteract checks against any number of emotion effects affecting you.",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (5th) You can attempt counteract checks against any number of emotion effects affecting you."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:delay-consequence",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "3wmX7htzOXiHLdAn",
      "slug": "delay-consequence",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:1bf6a9f5b32867f3a3eb9eabd52d8c30930e4fe6cb84318ad4b8991fafa68b3b",
    "translatableHash": "sha256:0b5a6d44e7440e48c11f2a7c53c1c393c515d3e7e0bac7ab77c6a49e4b3a3175",
    "data": {
      "schemaVersion": 1,
      "name": "Delay Consequence",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "Trigger A creature or object within range is hit by an attack.\nYou transpose the moment that the target would be injured to a point later in its timestream. Roll damage normally, but do not reduce Hit Points or apply any other effects of the attack until the spell's duration has elapsed. When the spell ends, the target is immediately affected by the attack, taking damage and being affected by any additional effects. You can Dismiss this spell.",
      "castingTime": "reaction",
      "range": "30 feet",
      "target": "the triggering creature or object",
      "area": null,
      "duration": "1 round",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:trade-death-for-life",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "4U2ZV1v38D0y2CRl",
      "slug": "trade-death-for-life",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:f42cf5d37e974b12c79cd9619d5f75d6f5397917fcbd1f1f4d78b0e2feba3df1",
    "translatableHash": "sha256:b053125a598059c5135c7436760caf83c22a564ec3532efcb51f5781d91b26be",
    "data": {
      "schemaVersion": 1,
      "name": "Trade Death for Life",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cantrip",
        "healing",
        "hex",
        "manipulate",
        "witch"
      ],
      "traditions": [],
      "description": "Your patron steals life from one of your enemies to grant it to another. The target takes 1d4 void damage (basic Fortitude save). If the target takes damage, a willing creature within the hex's range gains fast healing 1 for as long as you Sustain the hex. The target takes damage only once from this spell, whether or not you Sustain it.\nSpell Effect: Trade Death for Life\nHeightened 1 The damage increases by 1d4 and the fast healing increases by 1.",
      "castingTime": "1 action",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "1d4",
          "type": "void",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 1d4 and the fast healing increases by 1."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:swarmsense",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "5wjl0ZwEvvUh7sor",
      "slug": "swarmsense",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:0a48965fbb0d607337866aee33f28e7cc1053cdfd32957dbb998f5bd73d03c3b",
    "translatableHash": "sha256:268439f2c0318620f6f823f7d15e367a7e0be94f61e372fd44c6394f1fd5317c",
    "data": {
      "schemaVersion": 1,
      "name": "Swarmsense",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "You extend your senses through a multitude of crawling and flying creatures. You create a crawling swarm in your square. You can hear through the swarm as if using your normal auditory senses. When you Cast this Spell and the first time you Sustain it each round, you can move the swarm 10 feet along the ground in any direction. The swarm has AC 15 and a +0 bonus to its saves. Any damage dealt to the swarm destroys it and ends the spell.\nHeightened (3rd) The swarm has a climb Speed of 10 feet.\nHeightened (5th) The swarm has a fly Speed of 10 feet. You can see through the swarm using your visual senses.\nHeightened (7th) The swarm gains a 10-foot status bonus to its Speeds.",
      "castingTime": "3 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "sustained",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (3rd) The swarm has a climb Speed of 10 feet.\nHeightened (5th) The swarm has a fly Speed of 10 feet. You can see through the swarm using your visual senses.\nHeightened (7th) The swarm gains a 10-foot status bonus to its Speeds."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:lift-natures-caul",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "6GjJtLJnwC18Y0aZ",
      "slug": "lift-natures-caul",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/lift-natures-caul.webp"
    },
    "sourceHash": "sha256:5849050dd6365c675ebb27a4e69999b0169424685f010ddb17bff0cd60aaef83",
    "translatableHash": "sha256:55c2dac3b6e666d6074febc98e4f444acac688a15fb80d5db9aad4d5de7052f5",
    "data": {
      "schemaVersion": 1,
      "name": "Lift Nature's Caul",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "fear",
        "focus",
        "manipulate",
        "visual"
      ],
      "traditions": [],
      "description": "With a wave of the hand, you cause all creatures in the area to see the world around them as if a gauzy film had been lifted away to expose the truth that lies below their perceived reality. Natural features they can see grow twisted and horrendous, structures appear distorted and ruined, and objects seem warped and alien. This alternate vision fades quickly, but the glimpse beyond the natural world lingers for the spell's duration.\nAberrations or worshippers of Outer Gods or Great Old Ones are bolstered by this vision of warped reality and gain a +1 status bonus to Will saving throws and attack rolls for 1 minute, while all other creatures must attempt a Will saving throw.\nSpell Effect: Lift Nature's Caul (Bonus)\nCritical Success The creature is unaffected and temporarily immune for 1 hour.\nSuccess The creature is Sickened 1.\nFailure The creature is Stupefied 1 for 1 minute and Frightened 1.\nCritical Failure The creature is stupefied 1 for 1 minute and Frightened 2. It can't reduce the value of its frightened condition below 1 as long as it remains stupefied by this spell.\nHeightened 2 The area increases by 5 feet.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "5 emanation",
      "duration": "varies",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened 2 The area increases by 5 feet."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:parch",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "7CUgqHunmHfW2lC5",
      "slug": "parch",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:78674d186725bb3492c05b50d150e39dcdec58340a36c0e5405102765e7da61a",
    "translatableHash": "sha256:9b229788ccb0bd778b2612a60e25bad883c9220294cb9d80c8f499087ebeeaf7",
    "data": {
      "schemaVersion": 1,
      "name": "Parch",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "air",
        "cleric",
        "concentrate",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "Dry winds dehydrate a creature. The target must attempt a Fortitude save; if used on a creature that has the water trait or a creature made primarily of liquid (such as many oozes), the creature uses the outcome for one degree of success worse than the result. Creatures whose bodies contain no significant moisture (such as earth elementals) are immune to parch.\nIf a creature affected by parch drinks a liquid, such as a swig of water or a potion, the spell ends. Affected creatures that have the water trait or are made primarily of liquid, as well as affected creatures that can't drink, can end the effect as a two-action activity, which has the concentrate trait.\nCritical Success The target is unaffected.\nSuccess The target takes a –1 status penalty to its checks and DCs for 1 round.\nFailure The target takes a –1 status penalty to its checks and DCs for 1 minute.\nCritical Failure The target takes a –2 status penalty to its checks and DCs for 1 minute and is Dazzled as long as it has this penalty.\nHeightened (4th) You can target up to 4 creatures.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": "basic fortitude save",
      "damage": [],
      "heightening": "Heightened (4th) You can target up to 4 creatures."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:withering-grasp",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "7tp97g0UCJ9wOrd5",
      "slug": "withering-grasp",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:4ee13956b3db7832a21b6d50a98dd32f904fc6ca34263a20f79d7fc81c7bcf13",
    "translatableHash": "sha256:d2b7d94613c084fdd035bf195ca2bf2b27a92b79b9d37481cccedf0a2b283e3c",
    "data": {
      "schemaVersion": 1,
      "name": "Withering Grasp",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "attack",
        "cleric",
        "concentrate",
        "focus",
        "manipulate",
        "void"
      ],
      "traditions": [],
      "description": "Your touch rots organic material and decays objects. Make a spell attack against the target's AC. Your touch deals 1d12 void damage plus 1d4 persistent void damage. If a creature uses an item to block withering grasp, such as with the Shield Block reaction, the item is automatically affected, but the creature doesn't take damage (even if there is damage left over after the shield's Hardness). Unlike normal void damage, the void damage from withering grasp damages objects, constructs, and the like by eroding away their substance.\nCritical Success Your touch deals double damage (both initial and persistent). If you target an object, lower its Hardness by 4 for 1 minute.\nSuccess Your touch deals full damage. If you target an object, lower its Hardness by 2 for 1 minute.\nHeightened 1 The damage increases by 1d12 and the persistent damage increases by 1. If you target an object, lower its Hardness by an additional 1 point on both a success and a critical success.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 creature or object",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [
        {
          "formula": "1d12",
          "type": "void",
          "kind": "damage"
        },
        {
          "formula": "1d4",
          "type": "void",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 1d12 and the persistent damage increases by 1. If you target an object, lower its Hardness by an additional 1 point on both a success and a critical success."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:arms-of-nature",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "aHu20NHj7YIqxr80",
      "slug": "arms-of-nature",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:7498b312a26ba801d56b72f6292c66732a3405cd5c5258270a87b281e0fa58aa",
    "translatableHash": "sha256:87077a851bcf561bd7cec761a8752843b999af1020e4f9c62cb17d0f634ad99e",
    "data": {
      "schemaVersion": 1,
      "name": "Arms of Nature",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "focus",
        "manipulate",
        "wood"
      ],
      "traditions": [],
      "description": "All wood, dead or alive, is your armory. When you cast this spell, you draw forth a +1 weapon of your choice from the target. The weapon must be 2 Bulk or less. This weapon is of the same material as the target.\nHeightened (3rd) The weapon is a +1 striking weapon.\nHeightened (5th) The weapon is a +2 striking weapon.\nHeightened (7th) The weapon is a +3 greater striking weapon.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 wooden object or plant of at least 4 Bulk",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (3rd) The weapon is a +1 striking weapon.\nHeightened (5th) The weapon is a +2 striking weapon.\nHeightened (7th) The weapon is a +3 greater striking weapon."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:swear-oath",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "AYN0UihkU8Fa8yC6",
      "slug": "swear-oath",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:ce5e2ac241d09e19ae6c4185895e4e57049376498462a264e5bbf729317ed84b",
    "translatableHash": "sha256:1f12a6c72a2e4efa1e12b0d2c1c80a12726f8618b8a21d7f05884d8774604aa4",
    "data": {
      "schemaVersion": 1,
      "name": "Swear Oath",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "focus"
      ],
      "traditions": [],
      "description": "You loudly and firmly state a course of action that you swear to fulfill. When you Cast this Spell, Ready a single action or free action you can use. If the action is in line with your personal edicts or the edicts presented by your religion, you can Cast this Spell as a single action.\nIf the trigger you designate occurs and you can use the chosen action as a reaction, you gain a +1 status bonus to any attack roll or skill check required. If the trigger you designate doesn't occur, you can Sustain the spell on your next turn to regain the Focus Point spent for this spell.\nHeightened (5th) The status bonus is +2.\nHeightened (9th) The status bonus is +3.\nSpell Effect: Swear Oath",
      "castingTime": "1 or 2",
      "range": "",
      "target": "",
      "area": null,
      "duration": "until the end of your next turn",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (5th) The status bonus is +2.\nHeightened (9th) The status bonus is +3.\nSpell Effect: Swear Oath"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:buzzing-bites",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "BItahht2hEHvR9Bt",
      "slug": "buzzing-bites",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:584c66f193f0d916118f3e400b14ec4b2f63e20af219693ff54aab30e83f8b07",
    "translatableHash": "sha256:a06139df2fd85184df357feeabe2b111cd5582cf2d84ea6db00f0091a3333128",
    "data": {
      "schemaVersion": 1,
      "name": "Buzzing Bites",
      "rank": 1,
      "rarity": "rare",
      "traits": [
        "cantrip",
        "hex",
        "manipulate",
        "witch"
      ],
      "traditions": [],
      "description": "You evoke buzzing and crawling insects to climb onto a foe's body and bite, dealing 1d4 piercing damage and potentially sickening the foe, depending on its Fortitude save. Once this spell ends, the target becomes temporarily immune for 1 minute.\nCritical Success The target is unaffected.\nSuccess The target takes half damage.\nFailure The target takes full damage.\nCritical Failure The target takes double damage and is Sickened 1 by the crawling insects. The sickened value can't be reduced below 1 while the spell is active.\nHeightened 1 The damage increases by 1d4.",
      "castingTime": "1 action",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": "fortitude save",
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
    "contentId": "pf2e:spell:spells-srd:share-burden",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "cJq5NarY0eOZN74A",
      "slug": "share-burden",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:efffc959d7df016aae0c429b8942b351bc4da926599a53bf4b286796f13bf66c",
    "translatableHash": "sha256:a0e9c9dbb8def1196d69ba2f6c648a2df46c2df309c0f07c8bcef698c58f2ffa",
    "data": {
      "schemaVersion": 1,
      "name": "Share Burden",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "focus",
        "manipulate",
        "mental"
      ],
      "traditions": [],
      "description": "Trigger An ally within range is about to attempt a saving throw against a harmful emotion effect, and you would not otherwise have to save against the effect.\nYou shoulder some of your ally's pain. Both you and your ally use the outcome one degree of success better than the result of your ally's saving throw, even if the triggering effect usually affects only one target.",
      "castingTime": "reaction",
      "range": "30 feet",
      "target": "you and the triggering ally",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:winter-bolt",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "DeNz6eAUlE0IE9U3",
      "slug": "winter-bolt",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:18b71579791c9328e692f0e53712c2db74da5da9e8b6cb572313f76b24fe8a5f",
    "translatableHash": "sha256:8258194b6396587607d1384405377c4a1a2b1a5c0ba99b0c127a916589cf81f2",
    "data": {
      "schemaVersion": 1,
      "name": "Winter Bolt",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "attack",
        "cleric",
        "cold",
        "concentrate",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "You fling a hollow icicle filled with winter's wrath. Make a spell attack against the target's AC. The bolt deals 1d8 piercing damage and lodges in the target. At the end of the target's next turn, the bolt shatters, releasing a whirl of snow and ice that deals 1d12 cold damage to the target and all adjacent creatures. The bolt can be removed with an Interact action, which causes it to melt harmlessly without detonating.\nCritical Success The initial bolt deals full damage and is especially well anchored, taking 2 Interact actions to remove. The bolt's explosion deals double damage.\nSuccess The bolt and its explosion deal full damage.\nHeightened 1 The bolt's initial damage increases by 1d8 and the explosion damage increases by 1d12.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [
        {
          "formula": "1d8",
          "type": "piercing",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The bolt's initial damage increases by 1d8 and the explosion damage increases by 1d12."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:ulcerous-canker",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "DnVTBGCsai6zqMwL",
      "slug": "ulcerous-canker",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:d40f7a5eea512e5b8fdb6247a5e30b10ef56bc7f578180bb0162c7026d824b2c",
    "translatableHash": "sha256:51267a19bb7dece7d1416a5bd3cfa0504b514b1c8c6e514962c0053ab176d87b",
    "data": {
      "schemaVersion": 1,
      "name": "Ulcerous Canker",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate",
        "oracle",
        "poison",
        "void"
      ],
      "traditions": [],
      "description": "Weeping sores open on the target as you expose it to decay, dealing 1d4 void damage and 1d4 poison damage plus 1 persistent bleed damage. The target must attempt a Fortitude save.\nCritical Success The target is unaffected.\nSuccess The target takes half the initial damage and no persistent bleed damage.\nFailure The target takes full damage.\nCritical Failure The creature takes double initial damage and double persistent bleed damage.\nHeightened 2 The void damage and poison damage each increase by 1d4, and the persistent bleed damage increases by 2.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 living creature",
      "area": null,
      "duration": "",
      "defense": "fortitude save",
      "damage": [
        {
          "formula": "1d4",
          "type": "void",
          "kind": "damage"
        },
        {
          "formula": "1d4",
          "type": "poison",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The void damage and poison damage each increase by 1d4, and the persistent bleed damage increases by 2."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:charged-javelin",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "g1eY1vN44mgluE33",
      "slug": "charged-javelin",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:d18eb5d66e9a0409b8b443559fb10c3fde4ce6afcb8e761e544776e7d90b557b",
    "translatableHash": "sha256:6682d2b9d02941ae2ca417c1b7a1b0528caea58d77143a1d3ed9a02c144f9928",
    "data": {
      "schemaVersion": 1,
      "name": "Charged Javelin",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "attack",
        "cleric",
        "concentrate",
        "electricity",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "You fire a javelin of electricity that leaves a charged field around its target. Make a spell attack against the target's AC. The javelin deals 1d6 electricity damage and 1 persistent electricity damage.\nAs long as the target is taking persistent damage from this spell, creatures gain a +1 status bonus to attack rolls with metal weapons or electricity effects against the target, and the target takes a –1 status penalty to saves against electricity effects.\nSpell Effect: Charged Javelin\nCritical Success The javelin deals double damage, both initial and persistent.\nSuccess The javelin deals full damage.\nHeightened 1 The initial damage increases by 1d6, and the persistent damage increases by 1.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [
        {
          "formula": "1d6",
          "type": "electricity",
          "kind": "damage"
        },
        {
          "formula": "1",
          "type": "electricity",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The initial damage increases by 1d6, and the persistent damage increases by 1."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:adapt-self",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "GUnw9YXaW3YyaCAU",
      "slug": "adapt-self",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:52949c0f3b731934038da427af93b24b3d88316d387b901035e8753923839978",
    "translatableHash": "sha256:c91477caf81225a9ef663a2a94afa49fe03585bde603a1ee4bf1a6b6edb7bbce",
    "data": {
      "schemaVersion": 1,
      "name": "Adapt Self",
      "rank": 1,
      "rarity": "common",
      "traits": [
        "cleric",
        "concentrate",
        "focus",
        "manipulate",
        "morph"
      ],
      "traditions": [],
      "description": "You make subtle changes to your body to adapt to the situation. Choose one of the following options that applies to you.\n• If you are in water, you gain a swim Speed equal to half your Speed.\n• If you are in water, you become able to breathe water.\n• If it's too dark for you to see, you gain darkvision.\n• If you are in an environment of severe heat or severe cold, you are protected from the effects of severe heat or severe cold, and the spell lasts 10 minutes.\nSpell Effect: Adapt Self",
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
    "contentId": "pf2e:spell:spells-srd:practice-makes-perfect",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "HOj2YsTpkoMpYJH9",
      "slug": "practice-makes-perfect",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:919b0139ee228c1f4d2e7ff054a485496247e73c7f56525f24240e1a78889f1f",
    "translatableHash": "sha256:3b928b1cf4f98075e5b131da46d360976e4369f776a83ad3c66140fb8f61bd9b",
    "data": {
      "schemaVersion": 1,
      "name": "Practice Makes Perfect",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "Trigger You or an ally within range fails a skill check for a skill in which you or they are trained.\nThe target gains a +2 status bonus to the triggering check, or a +3 bonus if the target has master or better proficiency in the skill. This bonus can change the outcome of the target's skill check.\nSpell Effect: Practice Makes Perfect",
      "castingTime": "reaction",
      "range": "30 feet",
      "target": "the triggering creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:redact",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "ifXNOhtmU4fKL68v",
      "slug": "redact",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:90bced7d7463bc2424176909de381e96cca1d70b1a5f05ba43484c94b0c65042",
    "translatableHash": "sha256:18ecb81859f42a7ccbd219a4aff01c2ed11f6b5069b69a7427e680f54ee8f2d3",
    "data": {
      "schemaVersion": 1,
      "name": "Redact",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "You strike mention of a specific name from one or more documents. When you Cast the Spell, give one proper name, be it a creature, location, or object. Any mention of that name within the document becomes blurred, smudged, or otherwise completely illegible. Epithets and unambiguous references to the name are redacted as well; for instance, redacting the name of the goddess Sarenrae from a book would also remove references to her title \"the Dawnflower.\" Attempts to use this reference material to Recall Knowledge about the given proper name automatically fail.\nHeightened (3rd) Instead of striking out a given name, you can replace it with a different name you choose. Epithets and references are substituted with similar ones relating to the replacement name. Anyone reading the text can attempt a Perception or Society check against your spell DC to notice the altered text, though that doesn't tell them what the original said.\nHeightened (4th) At your choice, the duration is unlimited.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "unattended written materials of up to 1 Bulk or less",
      "area": null,
      "duration": "1 day",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (3rd) Instead of striking out a given name, you can replace it with a different name you choose. Epithets and references are substituted with similar ones relating to the replacement name. Anyone reading the text can attempt a Perception or Society check against your spell DC to notice the altered text, though that doesn't tell them what the original said.\nHeightened (4th) At your choice, the duration is unlimited."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:chastising-retort",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "JkyUu62rLxcNT4K9",
      "slug": "chastising-retort",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:8d06cc59773552b6296cdd5d7031ff5ca99e0ebb0930cb7428a999cb6f9fbf21",
    "translatableHash": "sha256:b84565c89e0f1ab51986ea9743ea9d921b5da6a1b7a3f595390e6d0fbc4a9fb6",
    "data": {
      "schemaVersion": 1,
      "name": "Chastising Retort",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "focus",
        "mental"
      ],
      "traditions": [],
      "description": "Trigger A creature within range attempts a Deception check to Lie or Feint.\nYou unleash some choice words empowered with divine might. The creature takes 2d6 mental damage and must attempt a Will save.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage.\nFailure The creature takes full damage and is Stupefied 1 for 1d4.\nCritical Failure As failure, but the creature takes double damage and is Stupefied 2 for 1d4 rounds.\nThe creature can immediately choose to reveal the truth about its deception as a free action to immediately recover Hit Points equal to the mental damage it took and lose the stupefied condition from the spell. If it does, it quickly notes that its words and actions were lies, though it might need more time to explain the proper truth. If the creature used Deception to successfully Feint and it reveals the truth in this way, the target of the creature's Feint is no longer Off-Guard due to the successful Feint.\nHeightened 1 The damage increases by 2d6.",
      "castingTime": "reaction",
      "range": "30 feet",
      "target": "the triggering creature",
      "area": null,
      "duration": "",
      "defense": "will save",
      "damage": [
        {
          "formula": "2d6",
          "type": "mental",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 2d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:divine-plagues",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "NkeLctXo9FLGnDhi",
      "slug": "divine-plagues",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/divine-plagues.webp"
    },
    "sourceHash": "sha256:81ba5185623ff3a2b3d78352da82a122801d954082e8172bd4858fdedb1beecc",
    "translatableHash": "sha256:2d4e70bc65b8d11942c5c1c3e96fc6d1076c82e6915d443cee8e687f956eeb0e",
    "data": {
      "schemaVersion": 1,
      "name": "Divine Plagues",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "disease",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "Your deity sends wracking plagues. The target must attempt a Fortitude save. When you Cast the Spell, decide whether the disease inflicts the clumsy, enfeebled, or stupefied condition.\nSuccess The target is unaffected.\nFailure The target is afflicted with stage 1 divine plague.\nCritical Failure The target is afflicted with stage 2 divine plague.\nDivine Plague (disease) Level 1\nStage 1 Clumsy 1, Enfeebled 1, or Stupefied 1 (1 round)\nStage 2 Slowed 1 and clumsy 1, enfeebled 1, or stupefied 1 (1 round)\nStage 3 clumsy 1, enfeebled 1, or stupefied 1 and the target can't recover from the condition until they are cured (1 day)\nHeightened (5th) The divine plague disease gains the virulent trait. The condition value for the clumsy, enfeebled, or stupefied condition is 2 instead of 1",
      "castingTime": "2 actions",
      "range": "15 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": "fortitude save",
      "damage": [],
      "heightening": "Heightened (5th) The divine plague disease gains the virulent trait. The condition value for the clumsy, enfeebled, or stupefied condition is 2 instead of 1"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:ashen-wind",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "NtzNCW32UlPdY2xS",
      "slug": "ashen-wind",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/ashen-wind.webp"
    },
    "sourceHash": "sha256:6acfb6cfd36d346fa2b324edc56c5673f6c91afecd6a722644c2521837a335e2",
    "translatableHash": "sha256:467588c48125e1029e50b850a80fbd685dc032731928698e4f758140e42ee466",
    "data": {
      "schemaVersion": 1,
      "name": "Ashen Wind",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate",
        "oracle"
      ],
      "traditions": [],
      "description": "You conjure a swirling wind of ashes that blows through the area. Each creature in the area must attempt a Fortitude save or get the cloying ash in its lungs.\nSuccess The creature is unaffected.\nFailure The creature is Sickened 1.\nCritical Failure The creature is Sickened 2.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "",
      "area": "10 burst",
      "duration": "",
      "defense": "fortitude save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:guided-introspection",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "R569jdqpNry8m0TJ",
      "slug": "guided-introspection",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/chromatic-image.webp"
    },
    "sourceHash": "sha256:bc7f85925128ef67426752fe3a4649cba38680a8cf810969ffd0159ab4c23aea",
    "translatableHash": "sha256:33c853e753ab2d1b7d9ee7e2b1515aa0cb800420a9d763ac0450175ec4678336",
    "data": {
      "schemaVersion": 1,
      "name": "Guided Introspection",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "focus",
        "manipulate",
        "mental"
      ],
      "traditions": [],
      "description": "You guide the target in examining their innermost feelings, their behaviors, and the motivations behind their actions, granting them clarity and insight. The target gains a +1 status bonus to saving throws against emotion and fear.\nSpell Effect: Guided Introspection\nIf the target would become Confused during the spell's duration, they reduce the duration of the confused condition by 1 round, to a minimum of 1 round. If the target would become Frightened or Stupefied, they reduce the value of the frightened or stupefied condition by 1, to a minimum of 1. Once any of these conditions occur, the spell ends.\nHeightened (4th) The status bonus increases to +2.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 willing creature",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) The status bonus increases to +2."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:eject-soul",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "rVhHaWqUsVUO4GuY",
      "slug": "eject-soul",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:6aec2d9303a29638212a76001e4276baf30418101cd5408e1b652f604b093fc7",
    "translatableHash": "sha256:bb5fedd1a8ebbf9c9cc971401643745c183a3f9ced6c03b045b01516579deab8",
    "data": {
      "schemaVersion": 1,
      "name": "Eject Soul",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "focus",
        "incapacitation",
        "manipulate"
      ],
      "traditions": [],
      "description": "Your touch disrupts the connection between body and soul, possibly forcing the soul out of the body altogether. The target must attempt a Fortitude save. You can allow allies to choose the degree of success instead of rolling a saving throw.\nSuccess The target is unaffected.\nFailure The target is Stunned 1 as its soul briefly loses its connection to their body.\nCritical Failure The target's soul exits its body and the target's body becomes stunned for 1 round. While their body is stunned in this way, the target remains fully aware in soul form; they simply can't consciously move their body (though the body makes basic instinctual defensive movements). The target's soul has the incorporeal trait, is Invisible, and has a fly Speed of 60 feet. It can't attack, cast spells, or attempt any skill checks that require a physical body, and it must always maintain line of effect to the target's body. When the target's body ceases being stunned, the target's soul instantly returns to their body as the target wakes.\nHeightened 3 If a willing ally chooses to critically fail, they can stay in soul form for 1 additional round.",
      "castingTime": "2 actions",
      "range": "touch",
      "target": "1 living creature that has a soul",
      "area": null,
      "duration": "",
      "defense": "fortitude save",
      "damage": [],
      "heightening": "Heightened 3 If a willing ally chooses to critically fail, they can stay in soul form for 1 additional round."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:object-memory",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "RztmhJrLLQWoGVdB",
      "slug": "object-memory",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:b4d7bc4f959247755cb1d9bc3edbf3498d4f986d89da4720d55e0ba8574d5f05",
    "translatableHash": "sha256:c3a4b792d9fc19ed7fc40359661b7584a957ff42b0e7ede23ff3a126c0e368fc",
    "data": {
      "schemaVersion": 1,
      "name": "Object Memory",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "By touching an object, you draw forth the experience of those who created and used it. If you touch a weapon, your proficiency rank with that weapon temporarily increases to trained (if it is not already trained or better). If you touch a tool, your proficiency rank with the next skill check you attempt with that tool (such as a Crafting check with a blacksmith's hammer) within the spell's duration temporarily increases to trained (if it is not already trained or better). This spell has no benefit for activities that take longer than a minute to complete.\nHeightened (6th) Your proficiency rank increases to expert instead of trained.\nSpell Effect: Object Memory (Weapon)",
      "castingTime": "2 actions",
      "range": "",
      "target": "1 weapon or tool",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (6th) Your proficiency rank increases to expert instead of trained.\nSpell Effect: Object Memory (Weapon)"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:draconic-barrage",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "S6Kkk15MWGqzC00a",
      "slug": "draconic-barrage",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:61f72d9171e8ae3a4d12ea7e9251f8b0a7bac10c84b98596c6c6969d14eae5be",
    "translatableHash": "sha256:cc3fe64c09632b024d13cba16f66b45039505fdc4d162e743a45c9bc30e91e80",
    "data": {
      "schemaVersion": 1,
      "name": "Draconic Barrage",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "You shape energy into a small group of tiny dragons (or other serpentine creatures) that flit around you. Choose fire, force, mental, or spirit damage when you Cast the Spell. For the duration of the spell, your Strikes with weapons or unarmed attacks deal 1 additional damage of the chosen type, as the dragons add their energy to your attacks. You can Sustain the spell to change the damage type.\nSpell Effect: Draconic Barrage\nIn addition, you can Sustain the spell to have the dragons fly off to bombard a creature within 60 feet. That creature takes 2d4 damage of the chosen type (basic Reflex save). Once the dragons have been used in this way, they wink out of existence and the spell ends.\nHeightened 1 The additional amount of damage from the dragons increases by 1 and the damage dealt by the dragons' bombardment increases by 2d4.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "2d4",
          "type": "untyped",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The additional amount of damage from the dragons increases by 1 and the damage dealt by the dragons' bombardment increases by 2d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:lament",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "T90ij2uu6ZaBaSXV",
      "slug": "lament",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:14fb414371ca5ae5079ac283b1434fa66a7923ecdea23b543af31f7ed87c712c",
    "translatableHash": "sha256:67ee6abc26336b8a88eff0219300aed28b4cd6e9a8efcbde88a00441a444027a",
    "data": {
      "schemaVersion": 1,
      "name": "Lament",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "auditory",
        "cleric",
        "concentrate",
        "emotion",
        "focus",
        "manipulate",
        "mental"
      ],
      "traditions": [],
      "description": "You let out your negative emotions in a guttural wail that shakes your enemies' hearts and deals 1d8 mental damage (basic Will save) to each creature in the area. If you have any harmful conditions imposed by emotion effects, lament deals additional mental damage equal to the counteract rank of the highest-level effect.\nHeightened 1 The damage increases by 1d8.",
      "castingTime": "2 actions",
      "range": "30-foot cone",
      "target": "1 or more creatures",
      "area": null,
      "duration": "",
      "defense": "basic will save",
      "damage": [
        {
          "formula": "1d8",
          "type": "mental",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 1d8."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:share-vision",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "TRlI5zAbNW2hDiH9",
      "slug": "share-vision",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:9f0a9c9acb01959a6c5151a1a947d61a82f906d2ba860b09f916a7f819a41067",
    "translatableHash": "sha256:747f8bafb0674845f4250456fe032d6e304de83f8a591f59ea96961316688857",
    "data": {
      "schemaVersion": 1,
      "name": "Share Vision",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cantrip",
        "concentrate",
        "hex",
        "witch"
      ],
      "traditions": [],
      "description": "Your patron temporarily links your vision with that of another, causing both of you to be able to see through each other's eyes. For the duration of the hex, the two of you share any vision-based senses (such as darkvision or low-light vision) and gain a +2 status bonus to Perception checks, but if either of you are Blinded or Dazzled, you both are.\nIf you cast share vision while a previous casting of this hex is still in effect, the previous effect ends.\nSpell Effect: Share Vision",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 willing creature",
      "area": null,
      "duration": "10 minutes",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:clouded-focus",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "XhgMx9WC6NfXd9RP",
      "slug": "clouded-focus",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:e875758b88d5e39d3244c07b6901f92d252f176775e2e6e0656967e14ec27401",
    "translatableHash": "sha256:adf59bf608715ac5257319345c260313a5eb915bfe451e732a7d049a8b3c3342",
    "data": {
      "schemaVersion": 1,
      "name": "Clouded Focus",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "You sharpen a creature's senses, though more distant objects become hazy, indistinct, or muted to it. The target gains a +1 status bonus to Perception checks attempted with any of its precise senses. Furthermore, any imprecise senses the target has are sharpened to precise senses (though they don't receive the status bonus). However, the target can't perceive anything beyond a range of 20 feet with any of its senses.\nThe duration is determined by the target's Will save. You can allow allies to choose the outcome instead of attempting a saving throw.\nCritical Success The target is unaffected.\nSuccess The target is affected for 1 round.\nFailure The target is affected for 1 minute.\nCritical Failure As failure, but the target can't perceive anything beyond a range of 10 feet.\nHeightened (3rd) You can target up to 2 creatures.\nHeightened (6th) You can target up to 4 creatures.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "varies",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened (3rd) You can target up to 2 creatures.\nHeightened (6th) You can target up to 4 creatures."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:serrate",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "YKexU7BkwNq4ESCc",
      "slug": "serrate",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:99072ee064a49f48e1e25ad9df60af141861262eadb5b18f0a00e45157bfa7f0",
    "translatableHash": "sha256:c1d18d809a4602cf4c30363ee2adf05dc2a619c2dd5f684f3c4105aff21f3c81",
    "data": {
      "schemaVersion": 1,
      "name": "Serrate",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "focus",
        "manipulate",
        "metal"
      ],
      "traditions": [],
      "description": "With a pinch, the metal of a weapon twists, adding numerous jagged blades along its surface. Strikes with the target weapon deal an additional 1d4 slashing damage until the start of your next turn.\nSpell Effect: Serrate\nHeightened 2 The extra damage increased by 1d4.",
      "castingTime": "1 action",
      "range": "touch",
      "target": "1 metal weapon",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 2 The extra damage increased by 1d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:pact-broker",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "YNAthsgsJjQIXbc8",
      "slug": "pact-broker",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:a7144cedae91fd7e07375e91308c4751f744ff2927a6a1630870807aa47a7902",
    "translatableHash": "sha256:75c2aad76eaef11ebef9796889413605289c27f542e80d10a8c3188e1fed2d68",
    "data": {
      "schemaVersion": 1,
      "name": "Pact Broker",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "auditory",
        "cantrip",
        "concentrate",
        "hex",
        "linguistic",
        "mental",
        "witch"
      ],
      "traditions": [],
      "description": "You offer to broker a pact of peace. If the target accepts and doesn't take hostile actions against you and your allies during the hex's duration, you take a –1 status penalty to Deception checks to Lie to them. If they refuse and take a hostile action against you or an ally during the hex's duration, they must first attempt a Will save. If they accepted the offer and then take a hostile action against you or an ally during the hex's duration, they must first attempt a Will save and treat the result as one category worse. Regardless of the outcome, the target is then temporarily immune for 1 minute.\nSuccess The target is unaffected.\nFailure The target takes 2d4 mental damage and a –1 status penalty to attack and damage rolls against you and your allies for the hex's duration.\nCritical Failure As failure, but the penalty is –2.\nSpell Effect: Pact Broker\nHeightened 1 The damage increases by 1d4.",
      "castingTime": "1 action",
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
      "heightening": "Heightened 1 The damage increases by 1d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:spirit-object",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "yp4w9SG4RuqRM8KD",
      "slug": "spirit-object",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:7c94ed0c3bf96de7945e988cc5740f87ccb7594d791d820ee1bcbe9c0dedcf14",
    "translatableHash": "sha256:bd88c51ceeb1b0aa305a2bf5bfcdf3905e383518fb6dff5c478e9738c023dded",
    "data": {
      "schemaVersion": 1,
      "name": "Spirit Object",
      "rank": 1,
      "rarity": "rare",
      "traits": [
        "cantrip",
        "hex",
        "manipulate",
        "witch"
      ],
      "traditions": [],
      "description": "Using a sliver of Baba Yaga's power, you briefly bring a nearby object to life. The object gains a means of locomotion if it does not already have one, such as sprouting chicken legs, and Strides up to 25 feet to a space you decide within range. Once per round, you can Sustain the spell to command the object further, either prompting it to move again or to Strike. If prompted to move, the object Strides up to 25 feet again to a space within 30 feet of you. If prompted to Strike, the object attacks one creature of your choice adjacent to its space. Make a melee spell attack roll against the creature. On a success, the creature takes 2d4 damage. The damage is either bludgeoning, piercing, or slashing damage, as appropriate for the object. The object doesn't do anything if it doesn't receive further commands from you. If you cast spirit object again, any previously affected object reverts back to normal. You can Dismiss the spell.\nHeightened 1 Increase the maximum Bulk of the target by 1 and the damage by 2d4.",
      "castingTime": "1 action",
      "range": "30 feet",
      "target": "1 unattended object up to 1 bulk",
      "area": null,
      "duration": "1 minute",
      "defense": "ac",
      "damage": [],
      "heightening": "Heightened 1 Increase the maximum Bulk of the target by 1 and the damage by 2d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:entreat-spirit",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Yph1UqZU8vMc9bJG",
      "slug": "entreat-spirit",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:143880ccd438e42fc7b96f84382abfeba8d247a13090de14a707b4fd04c2529d",
    "translatableHash": "sha256:1264a3de3aa5cf1e782ea61de09a6ffa534365e274ee4e4de7b47e4aa38b9919",
    "data": {
      "schemaVersion": 1,
      "name": "Entreat Spirit",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "You invite a spirit you've bonded with to bolster your mind. You gain a +1 status bonus to an Intelligence-, Wisdom-, or Charisma-based skill of your choice. Additionally, you gain a +1 status bonus to saving throws against curse, death, emotion, and fear effects.\nHeightened (4th) The status bonus to the skill and your saving throws increases to +2.\nHeightened (8th) The status bonus to the skill and your saving throws increases to +3.\nSpell Effect: Entreat Spirit",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) The status bonus to the skill and your saving throws increases to +2.\nHeightened (8th) The status bonus to the skill and your saving throws increases to +3.\nSpell Effect: Entreat Spirit"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:zenith-star",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Yrek2Yd4k3DPC2zV",
      "slug": "zenith-star",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/zenith-star.webp"
    },
    "sourceHash": "sha256:2204f390cfe825fe7a2011f8e2e4efc153b495b5c662f4d975ff2dc12c5f2522",
    "translatableHash": "sha256:631f973df3146aa64722349e042b58359041aefbf216ab38c9cc8d371000e829",
    "data": {
      "schemaVersion": 1,
      "name": "Zenith Star",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "focus",
        "light",
        "manipulate"
      ],
      "traditions": [],
      "description": "You call a tiny star to orbit a creature in a sparkling halo before shooting up into the heavens, where it marks the creature's rough location. The target must attempt a Fortitude save.\nCritical Success The target is unaffected.\nSuccess The target is Dazzled for 1 round.\nFailure The target is dazzled for 1 round. While the spell persists, as long as you can see the night sky and the target is visible from the same night sky, you can sense the approximate direction and distance to the creature by Sustaining the spell. This is enough to track the creature, but not pinpoint their exact square (for instance, to make an attack). You can set a number of zenith stars equal to your Wisdom modifier; if you exceed this number, your oldest zenith star is automatically Dismissed.\nCritical Failure As failure, but the target is Blinded for 1 round.\nHeightened 1 The duration increases by 1 day.\nHeightened (4th) You ignore the Concealed condition against targets marked by zenith star.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 day",
      "defense": "fortitude save",
      "damage": [],
      "heightening": "Heightened 1 The duration increases by 1 day.\nHeightened (4th) You ignore the Concealed condition against targets marked by zenith star."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:purging-toxins",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "CBPcGH1FFDG9vf4Z",
      "slug": "purging-toxins",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:71f13e7dcec18efe5958e7af6c737bc97c2b490f7d0c2725e7b7cae096686ba1",
    "translatableHash": "sha256:04360f34ae64e1d9b8abcbe8c0d8aa3403364ec451c54582191a549f79acee9e",
    "data": {
      "schemaVersion": 1,
      "name": "Purging Toxins",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate",
        "oracle",
        "poison"
      ],
      "traditions": [],
      "description": "In the right dose, a scourge can become a cure. Deal poison damage equal to the spell's rank to the target, then attempt a counteract check against one disease or poison afflicting the target. The target is then temporarily immune for 24 hours. If the target is immune to poison, this spell has no effect.\nHeightened (5th) You can attempt counteract checks against any number of poisons or diseases afflicting the target.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 willing creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [
        {
          "formula": "3",
          "type": "poison",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened (5th) You can attempt counteract checks against any number of poisons or diseases afflicting the target."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:incendiary-ashes",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "OTd17oXwJH9qb1cS",
      "slug": "incendiary-ashes",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/incendiary-ashes.webp"
    },
    "sourceHash": "sha256:c4d64267a9a1394e793198ddcd14d0bbc12af8f9384fe96c0a1f7b019b7070ac",
    "translatableHash": "sha256:d8e5feced1f225a935a8fea9afc82c41d55a62a3b9e9cfb30d58eb2e81cfbe0d",
    "data": {
      "schemaVersion": 1,
      "name": "Incendiary Ashes",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "fire",
        "focus",
        "manipulate",
        "oracle"
      ],
      "traditions": [],
      "description": "A cloud of magical ashes descends upon creatures in the area. The ashes scour flesh and linger in the wounds, igniting upon the slightest flicker of flame. Creatures in the area take 4d6 slashing damage and must attempt a Fortitude save.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage and has weakness to fire 3 until the start of its next turn.\nFailure The creature takes full damage and has weakness to fire 3 for 1 minute. If the creature is killed by fire during this time it's reduced to ashes, though its gear remains.\nCritical Failure As failure, except the creature takes double damage.\nHeightened 1 The slashing damage increases by 2d6 and weakness to fire increases by 1.\nSpell Effect: Incendiary Ashes (Success)\nSpell Effect: Incendiary Ashes (Failure)",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "",
      "area": "20 burst",
      "duration": "",
      "defense": "fortitude save",
      "damage": [
        {
          "formula": "4d6",
          "type": "slashing",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The slashing damage increases by 2d6 and weakness to fire increases by 1.\nSpell Effect: Incendiary Ashes (Success)\nSpell Effect: Incendiary Ashes (Failure)"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:fearful-feast",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "0qA4MfMkFklOz2Lk",
      "slug": "fearful-feast",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/fearful-feast.webp"
    },
    "sourceHash": "sha256:a8178e98059c6e1cc3c9ddff6f1f9b816d43ae50c04c1714d30656a10602930e",
    "translatableHash": "sha256:967f03c03c5a13d6ab8a099841fe018620b29e17b52fdc506b9cd6989d29f06b",
    "data": {
      "schemaVersion": 1,
      "name": "Fearful Feast",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "fear",
        "focus",
        "manipulate",
        "mental"
      ],
      "traditions": [],
      "description": "Trigger A creature within range becomes Frightened\nYou open your mouth wide and inhale sharply; you draw in the bravery, self-confidence, and hope to which the frightened target clings and then strip away the target's false assumption that these fragile emotions can save them from the oblivion of terror. You deal 6d4 mental damage to the creature, which must attempt a Will saving throw.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage.\nFailure The creature takes full damage; you regain Hit Points equal to half the damage the target takes.\nCritical Failure The creature's frightened condition increases by 1 (to a maximum of Frightened 4) and it takes double damage; you regain Hit Points equal to half the damage the target takes.\nHeightened 1 The damage increases by 1d4.",
      "castingTime": "reaction",
      "range": "30 feet",
      "target": "the triggering creature",
      "area": null,
      "duration": "varies",
      "defense": "will save",
      "damage": [
        {
          "formula": "6d4",
          "type": "mental",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 1d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:fallow-field",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "2RhZkHNv8ajq0yLq",
      "slug": "fallow-field",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/fallow-field.webp"
    },
    "sourceHash": "sha256:b80b626984c1aa61e7d8cc9f312b9e229e14ca984b4e4e8dc93bc9dff67f580f",
    "translatableHash": "sha256:95e0607d050e013b886409b6de5756e0545fba2444214c7586fc8d1e521747bf",
    "data": {
      "schemaVersion": 1,
      "name": "Fallow Field",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "focus",
        "manipulate",
        "void"
      ],
      "traditions": [],
      "description": "A sickly yellow light fills the area as entropic forces prevent healing. When a creature within the area would regain Hit Points, such as from a healing effect or an ability like fast healing or regeneration, it must attempt a Will save.\nCritical Success The creature regains the full number of Hit Points that would be restored by the healing effect and is temporarily immune for 1 minute.\nSuccess The creature regains the full number of Hit Points that would be restored.\nFailure The creature regains only half the number of Hit Points that would be restored.\nCritical Failure The creature doesn't regain Hit Points from the healing effect.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "",
      "area": "15 burst",
      "duration": "1 minute",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:foul-miasma",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "6nTBr5XNuKOuPM5m",
      "slug": "foul-miasma",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:0e2a5dee492daf0a2ff6ded263cb43eec3fdede3df89589bc660e0dafbc83212",
    "translatableHash": "sha256:8da60155eb26bf4151854f43916a733475c9e360bc56f081c7d9ba1616fe725f",
    "data": {
      "schemaVersion": 1,
      "name": "Foul Miasma",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "disease",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "You multiply the disease within a creature, drawing it into an infectious mist outside their body where it can spread to other creatures. The target must attempt a Will save. If the target is willing, it can choose to take the effects of critical failure.\nCritical Success The target receives the benefit of a successful save against the lowest-level disease affecting it.\nSuccess The target is unaffected.\nFailure One randomly chosen disease affecting the target fills the air in a 15-foot type:emanation centered on the target. For the spell's duration, any creature that enters or ends its turn within the area is exposed to that disease.\nCritical Failure As failure, except the miasma contains all the diseases affecting the target.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature affected by a disease",
      "area": null,
      "duration": "1 minute",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:dutiful-challenge",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "caehfpQz7yp9yNzz",
      "slug": "dutiful-challenge",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:9ff9652caec5db68f432f0132e447f016c94c5313f81ad5f32a8dc8db0bb6b47",
    "translatableHash": "sha256:15f1124e8dbfda53e4c1836a700f7928eb1808ba11ec743215f697396628faee",
    "data": {
      "schemaVersion": 1,
      "name": "Dutiful Challenge",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "As you challenge an enemy, you take some of its attention away from your allies. The target takes a -1 status penalty to attack rolls, damage rolls, and skill checks against creatures other than you, and you take a -1 status penalty to attack rolls, damage rolls, and skill checks against creatures other than the target.\nEach time a creature other than you uses a hostile action that affects the challenged enemy, the enemy can attempt a Will save. On a success, the enemy no longer takes the penalty against that creature. You can Dismiss the spell, and it ends automatically if you or the target is defeated.\nHeightened 3 The status penalties increase by 1.\nSpell Effect: Dutiful Challenge",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened 3 The status penalties increase by 1.\nSpell Effect: Dutiful Challenge"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:stasis",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "cOwSsSXRsBaXUvlr",
      "slug": "stasis",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:42f556c3b52853205a80b61381d6672042f896097d1fc2dd461cfd3fd606975d",
    "translatableHash": "sha256:97547e24e78151586562eb2851b3b5a9fe15a50759c7e7e3950f1d650c043370",
    "data": {
      "schemaVersion": 1,
      "name": "Stasis",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "focus",
        "incapacitation",
        "manipulate"
      ],
      "traditions": [],
      "description": "The flow of time congeals around an object or creature, holding it in place. The target must attempt a Will save (an unattended object automatically critically fails its save).\nCritical Success The target is unaffected.\nSuccess The target is Stunned 1 as time thickens around it.\nFailure Time ceases to pass for the target for 1 round. It is invulnerable to all damage, it can't be targeted or affected by anything, and no rounds elapse for any timed durations, conditions, afflictions, and other effects it has. While in stasis, the target can't be moved, and it remains fixed in place, defying gravity if need be.\nCritical Failure As failure, but the target is held in stasis for 3 rounds. At the end of each of its turns, it can attempt a Will save to reduce the remaining duration by 1 round or end it entirely on a critical success.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature or up to 1 Bulk of objects",
      "area": null,
      "duration": "varies",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:overflowing-sorrow",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "eCniO6INHNfc9Svr",
      "slug": "overflowing-sorrow",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:9b7364e80d3ebba61fa80d0c456beee702bddf4f222b5f356ff99ed5f2affb11",
    "translatableHash": "sha256:edc8dff223b712aaaecae2fc7862468efdafe2460dac70efaa48156a8c01c87d",
    "data": {
      "schemaVersion": 1,
      "name": "Overflowing Sorrow",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "aura",
        "cleric",
        "concentrate",
        "emotion",
        "focus",
        "incapacitation",
        "manipulate",
        "mental"
      ],
      "traditions": [],
      "description": "Sadness flows out of you into nearby creatures, blotting out any other thoughts they had. The first time a creature begins its turn in the area or enters the area, it must attempt a Will save. If it later leaves and reenters the area, it uses the same effect as before.\nCritical Success The creature is unaffected.\nSuccess The creature takes a –1 status penalty to skill checks and Perception checks as long as it remains in the area.\nFailure While the creature is in the area, any emotion effects of lower counteract rank than overflowing sorrow are suppressed, and whenever the creature attempts to use an emotion action or cast an emotion spell, it must succeed at a check (flat, dc:11, showDC:all) or the action or spell is disrupted.\nCritical Failure As failure, but the creature can't use emotion actions or spells.\nHeightened 2 When you Cast the Spell, you can choose to increase the area by 5 feet.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "15 emanation",
      "duration": "1 minute",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened 2 When you Cast the Spell, you can choose to increase the area by 5 feet."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:roar-of-the-dragon",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "FSu6ZKxr3xdS75wq",
      "slug": "roar-of-the-dragon",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/roar-of-the-wyrm.webp"
    },
    "sourceHash": "sha256:5d2f5cc3a08d2b2c830da44e438d3179531c9fb2cbecdb429a2a219a0845ec42",
    "translatableHash": "sha256:4bef76187518b5178cc9196c7e69ce274117fe353f0b069e561b642581e5ce14",
    "data": {
      "schemaVersion": 1,
      "name": "Roar of the Dragon",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "auditory",
        "cleric",
        "concentrate",
        "emotion",
        "focus",
        "manipulate",
        "mental"
      ],
      "traditions": [],
      "description": "You channel the might of dragons into your voice, letting out a roar that engenders respect in dragonkind but that instills fear in most other creatures. The impressive roar grants you a +2 circumstance bonus to Diplomacy checks for 10 minutes against dragons that were in the area at the time of casting.\nSpell Effect: Roar of the Dragon\nRoar of the dragon affects non-dragon creatures with deep ties to dragonkind (such as a barbarian with the draconic instinct, a sorcerer with the draconic bloodline, or a member of a culture that reveres dragons) as if they had the dragon trait. The GM decides if a creature is aligned enough with dragonkind to be affected in this way. All enemies within the area other than dragons must attempt a Will save; to these enemies, roar of the dragon is a fear effect.\nCritical Success The creature is unaffected.\nSuccess The creature is Frightened 1.\nFailure The creature is Frightened 2.\nCritical Failure The creature is Frightened 3 and Fleeing for 1 round.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "30 emanation",
      "duration": "varies",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:adaptive-ablation",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "GoKkejPj5yWJPIPK",
      "slug": "adaptive-ablation",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:24b5b61a00a2819b33bab1a34aa43653ec0db6c493bed29206967665bd8c9949",
    "translatableHash": "sha256:21bad82fd99df349386e9810877cb08a47ddfa9c9887e3ce4e8bd1d05885a32a",
    "data": {
      "schemaVersion": 1,
      "name": "Adaptive Ablation",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "focus"
      ],
      "traditions": [],
      "description": "Trigger You take acid, cold, electricity, fire, or sonic damage.\nYou shift yourself to adapt to the mystical wavelengths of the energy damage, protecting yourself from further harm. You gain resistance 5 to the triggering energy type; you gain this resistance after you take the triggering damage, so it applies only to future damage you take during the duration.\nSpell Effect: Adaptive Ablation\nHeightened 2 The resistance increases by 5.",
      "castingTime": "reaction",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 2 The resistance increases by 5."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:tireless-worker",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "gzvRDpM6EvcfYHeu",
      "slug": "tireless-worker",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:81feda7c1dac7b19022e6e425accd2af859c08fe6a4c886efd51d553311ce8eb",
    "translatableHash": "sha256:3e7c4b67578eb41a317dee2e0e6bab950befbf0189ee71892485ace55a5662d6",
    "data": {
      "schemaVersion": 1,
      "name": "Tireless Worker",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "focus",
        "healing",
        "manipulate"
      ],
      "traditions": [],
      "description": "You suppress your choice of one of the following conditions that's affecting the target: Clumsy, Encumbered, Enfeebled, or Fatigued. The duration of the condition doesn't elapse while it is suppressed, so if you don't remove the effect that caused the condition, the condition returns after the spell's duration expires.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:ephemeral-hazards",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "HisaZTk67YAxLGBq",
      "slug": "ephemeral-hazards",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:cce2745b0bda47c8f020f51757b3adb30d3647d6940736206d961092cc08bfd6",
    "translatableHash": "sha256:4e22aa1711ce490639f11468610407b12d04ad7c3ae8f5b1fd9d26edc5182a61",
    "data": {
      "schemaVersion": 1,
      "name": "Ephemeral Hazards",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "focus",
        "illusion",
        "manipulate",
        "mental",
        "visual"
      ],
      "traditions": [],
      "description": "Area (continued) four 10-foot-by-10-foot spaces\nYou create illusory hazards, such as spinning blades or a puddle of acid, in four 10-foot-by–10-foot spaces within range. The hazards are merely a mental projection, and a creature receives a Will save each time it touches a hazard or is occupying one's space at the start of its turn. Depending on the result, the creature takes 4d6 mental damage and might have difficulty moving through the area. A creature can take this damage only once per turn, even if it moves through several hazards. Choose bludgeoning, slashing, piercing, acid, cold, electricity, fire, or sonic damage when you Cast ephemeral hazards; resistances and weaknesses to those damage types apply if the target thinks they do, as judged by the GM. You can freely choose the appearance and damage type of each hazard as long as its appearance reflects the type of damage it deals (for instance, a hazard that deals piercing damage might take the form of sharpened spikes).\nCritical Success The creature is unaffected by the hazards and no longer needs to attempt Will saves against them.\nSuccess The creature realizes the hazards aren't real but still takes half damage from them; on future Will saves against the hazards, the creature continues to use this result unless it rolls a critical success.\nFailure The target takes full damage and treats the square as difficult terrain.\nCritical Failure The target takes double damage and can't pass through a square containing a hazard.\nHeightened 1 The damage increases by 1d6.",
      "castingTime": "3 actions",
      "range": "60 feet",
      "target": "",
      "area": "10 square",
      "duration": "1 minute",
      "defense": "will save",
      "damage": [
        {
          "formula": "4d6",
          "type": "mental",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:door-to-beyond",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "iMmexY6ZosLS4I5R",
      "slug": "door-to-beyond",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:468c9bd1bbbc80f5545f1514684dfcca09b2795e4d570dd03879e38f486420b8",
    "translatableHash": "sha256:5411e5b4fed03961b6894a4b92b20a097d8290afa0513677997e5f4c20089284",
    "data": {
      "schemaVersion": 1,
      "name": "Door to Beyond",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "Striking at thin air, you create hairline cracks in an unoccupied adjacent space that lead somewhere outside reality. Air rushes through the cracks, drawing Large or smaller creatures and objects of light Bulk or less toward the center. Large or smaller creatures in the area must attempt a Fortitude save at the start of their turn; creatures that move into the area must attempt the save upon entering.\nThe cracks of the door to beyond are too thin for anything to fully slip through, but decompressive effects deal 4d6 slashing damage to any creature or object that ends its turn adjacent to the door. You are unaffected by your own door to beyond. You can Dismiss the spell.\nSuccess The creature is unaffected.\nFailure The creature is pulled 10 feet toward the door.\nCritical Failure The creature is pulled 20 feet toward the door.\nHeightened 1 The damage increases by 1d6.",
      "castingTime": "2 actions",
      "range": "5 feet",
      "target": "",
      "area": "20 emanation",
      "duration": "1 minute",
      "defense": "fortitude save",
      "damage": [
        {
          "formula": "4d6",
          "type": "slashing",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:show-the-path",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "jLc8tHSNeXm0RvMQ",
      "slug": "show-the-path",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:e322dc87420d3c0a64bd535e61b10192337b7d29ac668648a39c136463c4368f",
    "translatableHash": "sha256:712cbdc6fe57679adccbae55affa4c213342b467840300df2adc700bcb371c64",
    "data": {
      "schemaVersion": 1,
      "name": "Show the Path",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "focus",
        "fortune",
        "manipulate"
      ],
      "traditions": [],
      "description": "You grant the target insight on things to come, guiding them toward a fate they find most fitting and encouraging them to continue this journey. The creature rolls a d20 at the start of each of its turns. The creature can use the result of the roll instead of rolling for any check before the start of their next turn. If the creature does substitute the roll in this way, they gain a +1 status bonus to whatever check they substitute on the following turn. Repeated substitutions increase the status bonus by 1, up to a total of +2. If the creature begins their turn without having substituted a roll in the previous round, the spell ends.\nHeightened (7th) The status bonus can increase up to a total of +3.\nHeightened (10th) The status bonus can increase up to a total of +4.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 willing creature",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (7th) The status bonus can increase up to a total of +3.\nHeightened (10th) The status bonus can increase up to a total of +4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:dust-storm",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "K1wmI4qPmRhFczmy",
      "slug": "dust-storm",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:53d1a32fa81de16fd17dcb6838b36e8e2be0f3550cf6ec7f951f1847da926335",
    "translatableHash": "sha256:b0b0ea7375814974d8b100609210f9fede6906a79c5f9b5c14b6dcf3e1184637",
    "data": {
      "schemaVersion": 1,
      "name": "Dust Storm",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "air",
        "cleric",
        "concentrate",
        "focus",
        "manipulate",
        "nonlethal"
      ],
      "traditions": [],
      "description": "You call forth a swirling storm of dust. The dust storm obscures vision, with the effect of Mist. The dust also makes the air unbreathable; creatures in the area must hold their breath, though wearing a scarf or similar clothing over the mouth increases the time the creature can hold its breath to 5 rounds. Creatures entering or starting their turn in the dust storm take 1d6 slashing damage. Creatures that have the water trait or that are made primarily of liquid take double damage.\nHeightened 2 The damage increases by 1d6.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "",
      "area": "20 burst",
      "duration": "1 minute",
      "defense": null,
      "damage": [
        {
          "formula": "1d6",
          "type": "slashing",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The damage increases by 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:asterism",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "KG7amdeXWc7MjGXe",
      "slug": "asterism",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:35a455cd5dc53b07bcc9e00ff7fa9594f88276dc454ca3aa2d3e64b4fb9d0ed1",
    "translatableHash": "sha256:db21ed677e8b67249b8aee09ca03319daa89677dd95e3764f9464b483a522418",
    "data": {
      "schemaVersion": 1,
      "name": "Asterism",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "focus",
        "light",
        "manipulate"
      ],
      "traditions": [],
      "description": "Area (continued) five 30-foot lines\nLines of burning starlight form a constellation around you. Draw five lines, one at a time; each line must anchor at you or a creature or object already connected to a previous line, and it must end at a creature or object within 30 feet of its anchor (possibly allowing the asterism to extend to its full 150-foot range). A creature that begins its turn in one of these lines or enters one of these lines on its turn takes 4d6 fire damage (basic Reflex save). A creature can take this damage only once per turn, even if it moves through several lines. Targets that are part of the asterism do not take damage from it. If the distance between two targets (or you and a target) ever exceeds 30 feet, the line of starlight between the two breaks, and any lines that now no longer have a direct path back to you also break. You can Dismiss the spell.\nHeightened 1 The damage increases by 1d6.",
      "castingTime": "3 actions",
      "range": "150 feet",
      "target": "",
      "area": "30 line",
      "duration": "1 minute",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "4d6",
          "type": "fire",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:remember-the-lost",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "nrW6lGV4xDMqLS3P",
      "slug": "remember-the-lost",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:68319aa560decf8de00449a980f5d0ffe37dd10a3253c0b8e64440284d4661fc",
    "translatableHash": "sha256:3ba6abfca1d343d62006b8cea76b66cec3f149cd9c90b6332cc5384c6f2085d3",
    "data": {
      "schemaVersion": 1,
      "name": "Remember the Lost",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "focus",
        "manipulate",
        "mental"
      ],
      "traditions": [],
      "description": "You call upon the lost and forgotten, assailing your foes' minds with the memories of those who died with a grievance toward them. Enemies in the area take 6d6 mental damage (basic Will save) and are Frightened 1 on a critical failure.\nIf you know the names of anyone murdered or grievously wronged by an enemy in the area, you can chant those victims' names when you Cast the Spell to improve the clarity of the visions, increasing the damage to the corresponding enemy from 6d6 to 6d10 mental damage; you can do so for multiple enemies if you know specific victims of each enemy. The visions are personal to each foe in the area, and you can't use this spell to discern a murderer by guessing a name. A creature that truly knows no one who died with any sort of grievance to that creature is immune to this effect.\nHeightened 1 The damage increases by 2d6 (or 2d10 to an enemy when you name a specific victim).",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "30 emanation",
      "duration": "",
      "defense": "basic will save",
      "damage": [
        {
          "formula": "6d6",
          "type": "mental",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 2d6 (or 2d10 to an enemy when you name a specific victim)."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:swarm-form",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Pd2M1XY8EXrSfWgJ",
      "slug": "swarm-form",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:ea4aacdf7f11718e7bcf65949aa995e18b46011e178eb4f20f5cd4873ac7d656",
    "translatableHash": "sha256:b85820536aee78d0c306d52bb511497f8ac7b5c690d292983d8ce65396431c29",
    "data": {
      "schemaVersion": 1,
      "name": "Swarm Form",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "focus",
        "manipulate",
        "polymorph"
      ],
      "traditions": [],
      "description": "You discorporate into a swarm of Tiny creatures. While in swarm form, you are the same size, you have the swarm trait and you gain resistance 5 to slashing and piercing damage and weakness 5 to area and splash damage. You can fit into spaces only a few inches wide, moving your constituent creatures through the gap, and you can share a space with another creature. You don't gain the swarm mind ability, so you are still affected normally by mental effects. As a swarm, you can't speak, cast spells, use manipulate actions requiring your hands, activate your magic items, or make any of your Strikes with your normal body. While in swarm form, you can crawl all over any creature that shares your space as a single action. That creature must attempt a Fortitude save against your spell DC or become Sickened 1 (Sickened 2 on a critical failure). You can Dismiss the Spell.\nHeightened 2 Your resistances and weaknesses each increase by 5.\nSpell Effect: Swarm Form",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "5 minutes",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 2 Your resistances and weaknesses each increase by 5.\nSpell Effect: Swarm Form"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:repel-metal",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "pZBovpzdBNLQQQmE",
      "slug": "repel-metal",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:683a273ef1300b97801a6b962988044aec5bb5e6718b74f5b10c99e87583279f",
    "translatableHash": "sha256:2eacfc3ce7a88219f719035ba19c3e303964b94a993c8685bab904ccc71990c2",
    "data": {
      "schemaVersion": 1,
      "name": "Repel Metal",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "focus",
        "manipulate",
        "metal"
      ],
      "traditions": [],
      "description": "Trigger A Strike with a metallic weapon or projectile would hit you or an ally within range.\nYou call forth a repelling field. The target gains a +2 circumstance bonus to AC against the triggering attack. If the attack then misses, you direct the Strike back at the attacker, who compares the attack roll to their own AC. The target then becomes immune to this spell for 10 minutes.\nSpell Effect: Repel Metal",
      "castingTime": "reaction",
      "range": "60 feet",
      "target": "the creature targeted by the triggering Strike",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:ectoplasmic-interstice",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "QE9f3OxvvBThymD4",
      "slug": "ectoplasmic-interstice",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:40bf68692aefc6f73dee4c93b2253e74baa415bce422cabb8f165d9a7958fe1a",
    "translatableHash": "sha256:be6fd96fa1b9cc7190bcdeae099348864eb791714629bb1f7e79f88979108370",
    "data": {
      "schemaVersion": 1,
      "name": "Ectoplasmic Interstice",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "You force the mortal Universe and Ethereal Planes to partially merge, creating a zone that causes incorporeal and spiritual entities to take on many of the aspects of corporeal creatures. Within the area of effect, incorporeal creatures can't pass through solid objects or corporeal creatures, and they can manipulate and attempt Strength-based checks against physical creatures and objects. An incorporeal PC or other creature with a normal Strength modifier simply uses that modifier, but if the creature had a Strength modifier of –5, like most incorporeal monsters, it uses a +4 modifier instead, increasing its Athletics modifier by 9 accordingly. Attacks against creatures that are within the area overcome resistances as if they were by ghost touch weapons.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "",
      "area": "15 burst",
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:wood-walk",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Up4zLmZDgciUDpIv",
      "slug": "wood-walk",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/wood-walk.webp"
    },
    "sourceHash": "sha256:297904496dff2eacf70abd363b8a332e3385bc8305190ee7a64c3ded828b01e0",
    "translatableHash": "sha256:1526da45ef7e0487a23f779e8253f2c2930fba5f8509dd294d96c55439ed25c6",
    "data": {
      "schemaVersion": 1,
      "name": "Wood Walk",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "focus",
        "manipulate",
        "wood"
      ],
      "traditions": [],
      "description": "Wood shapes itself according to your will readily, making staircases appear as you climb up the side of a tree, automatically weaving vines into ladders, or lowering branches to lift you up to the top. When you Cast this Spell, move up to your Speed in any direction or along any surface, so long as there are living plants or trees of size Large or larger within 15 feet of you. The wood allows you to move but doesn't protect you from hazardous terrain or other dangers. Each time you Sustain this spell, you can move again in the same way.\nHeightened (8th) The duration of this spell becomes 10 minutes. You no longer need to Sustain the spell to extend its duration, but you can Sustain it to move as described.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (8th) The duration of this spell becomes 10 minutes. You no longer need to Sustain the spell to extend its duration, but you can Sustain it to move as described."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:confront-selves",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "VGK9s6LCMMS027zP",
      "slug": "confront-selves",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/enthrall.webp"
    },
    "sourceHash": "sha256:b9b56ff3c2bccc5a865b88b8da8e552bbb775689b1228a2d720b997313b50ce2",
    "translatableHash": "sha256:13753400fc4eea39039c88097bb5c49c5a9e95b329cee4c4eab4dcf824ff1a94",
    "data": {
      "schemaVersion": 1,
      "name": "Confront Selves",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "focus",
        "manipulate",
        "mental"
      ],
      "traditions": [],
      "description": "You show the target the spiraling web of actions and consequences that is their life and the changes wrought by these decisions upon themselves and those around them. These events swirl around the target like shards of broken pottery. When you Cast or Sustain this Spell, you force the target to confront an alternate permutation of themselves, witnessing the events of their life as if they'd chosen another path. They take 4d6 mental damage (basic Will save) and are Clumsy 1 until the beginning of your next turn. On a critical success, the spell ends.\nHeightened 1 The damage increases by 1d6.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": "basic will save",
      "damage": [
        {
          "formula": "4d6",
          "type": "mental",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:ghostly-transcription",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "vhe9DduqaivMs8FV",
      "slug": "ghostly-transcription",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:42d0e7d74d42da8ba0327b3d813bb0d798f68d9feb4992f4e4a6630c151658e0",
    "translatableHash": "sha256:86b566d54e2a982218d3e2694e0c53d712e2a5ac14751ff694cb101466265cd2",
    "data": {
      "schemaVersion": 1,
      "name": "Ghostly Transcription",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "focus",
        "manipulate",
        "visual"
      ],
      "traditions": [],
      "description": "Glowing letters assemble in the air, providing a transcription of the target's speech in all languages you speak. For the spell's duration, any words spoken aloud by the target are spelled out in letters in front of them.\nWhen you Cast the Spell, you can choose whether these letters are visible to all creatures or only certain creatures you specify. Any words the target mouths silently are similarly spelled out, allowing the target to communicate silently or in areas where sound doesn't carry. This even allows the target to utter the incantations necessary for spells in such areas, but only if you choose to make the letters visible to all creatures.\nFurthermore, any of the target's auditory abilities can affect creatures even in areas where sound doesn't carry as long as you have made the glyphs visible to them and they have line of sight to the target; in this case, they gain the visual trait. You can Dismiss the spell.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:bottle-the-storm",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "VUwpDY4Z91s9QCg0",
      "slug": "bottle-the-storm",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:e9a7b1388e79fe6031ec7f6af1740b723b8fedcc0b71c0697777ee9f59e84ae5",
    "translatableHash": "sha256:3a0e781e7358a050a1515b7f8eed603475486a6d08172b3e7d75a9fa64da57da",
    "data": {
      "schemaVersion": 1,
      "name": "Bottle the Storm",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "electricity",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "Trigger You would take electricity damage.\nWhen lightning is turned against you, you store the charge safely within yourself, unleashing it when the time is right. You gain electricity resistance 10 against the triggering effect. If you successfully prevent damage in this way, at any time during the spell's duration, you can spend a single action, which has the attack trait, to expend the charge and make a spell attack against the AC of a target within 60 feet. This attack deals electricity damage equal to the damage prevented by bottle the storm. If you Cast bottle the storm a second time before the original duration elapses, or if you do not make this attack within 1 minute, the stored charge dissipates harmlessly.\nHeightened (7th) The resistance increases to 15, and you can immediately make the spell attack granted by bottle the storm as part of the reaction used to Cast the Spell.\nHeightened (10th) The resistance increases to 20, and you can immediately make the spell attack granted by bottle the storm as part of the reaction used to Cast the Spell.\nSpell Effect: Bottle the Storm",
      "castingTime": "reaction",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (7th) The resistance increases to 15, and you can immediately make the spell attack granted by bottle the storm as part of the reaction used to Cast the Spell.\nHeightened (10th) The resistance increases to 20, and you can immediately make the spell attack granted by bottle the storm as part of the reaction used to Cast the Spell.\nSpell Effect: Bottle the Storm"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:diamond-dust",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "wjJW9hWY5CkkMvY5",
      "slug": "diamond-dust",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:5536d52f105515dde69a48853507ab8e1f8937d05c7621f70e80ee2dae6efc5d",
    "translatableHash": "sha256:e4f443ba564458173d94f5994ea15a0bf0d99db6804763f2b5d6bd5b7fc6a557",
    "data": {
      "schemaVersion": 1,
      "name": "Diamond Dust",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "aura",
        "cleric",
        "cold",
        "concentrate",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "You supercool the nearby air, forming a cloud of dancing ice crystals in an emanation around you. A creature other than you that enters the area or ends its turn within the area takes 2d6 cold damage. A creature can take this damage only once per turn. The crystals scatter and refract light; if a light effect enters diamond dust's area, any creatures targeted by that effect gain a +2 status bonus to AC and saves against it. While the spell persists, you can activate or deactivate this aura by Sustaining the spell. You can Dismiss this spell.\nHeightened 2 The damage increases by 1d6.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "15 emanation",
      "duration": "1 minute",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "2d6",
          "type": "cold",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The damage increases by 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:font-of-serenity",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "yY1H5zhO5dHmD8lz",
      "slug": "font-of-serenity",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:03a89daf427ed2208f2b006999d134685830ffaf4ed05d7786565252d76c5898",
    "translatableHash": "sha256:c3e88b3a3b8e5193b27ec6e49b384486f82ad4b759bfcced2f11e56cae130553",
    "data": {
      "schemaVersion": 1,
      "name": "Font of Serenity",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "cleric",
        "concentrate",
        "emotion",
        "focus",
        "manipulate",
        "mental"
      ],
      "traditions": [],
      "description": "A divine beacon radiates serenity, soothing nearby allies.\nAllies within the area gain a +1 status bonus to saving throws against emotion effects.\nSpell Effect: Font of Serenity\nAn ally can touch the font at the center of the burst as an Interact action; if they do so, the spell attempts to counteract one emotion effect affecting the ally of the ally's choice, after which that emotion effect is temporarily immune for 1 day. If the spell succeeds at the counteract check, it removes the emotion effect from your ally, though not from any other creatures the effect might be affecting.\nHeightened 4 The bonus increases by 1.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "",
      "area": "15 burst",
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 4 The bonus increases by 1."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:accelerated-decomposition",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "rqoWAxQv4RWbwyAr",
      "slug": "accelerated-decomposition",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:8a4619e81ae1ef7f87155ada2d639968dcf05384ea19e983726c23aea0cb2d2c",
    "translatableHash": "sha256:ff5804413e02205e2349d9999165ab3a9e1d0e1cc1947cfe3b25a46910fca1b4",
    "data": {
      "schemaVersion": 1,
      "name": "Accelerated Decomposition",
      "rank": 6,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate",
        "oracle",
        "void"
      ],
      "traditions": [],
      "description": "You speed the natural process of a creature's decline and debilitation. As its body withers, the target takes 9d6 void damage and must attempt a Fortitude save.\nCritical Success The target is unaffected.\nSuccess The target takes half damage and is your choice of Clumsy 1, Drained 1, or Enfeebled 1 for 1 round.\nFailure The target takes full damage and is clumsy 1, drained 1, and enfeebled 1 for 1 round.\nCritical Failure The creature takes double damage and is clumsy 1, drained 1, and enfeebled 1 for 1 minute.\nHeightened 1 The void damage increases by 1d6.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "",
      "defense": "fortitude save",
      "damage": [
        {
          "formula": "9d6",
          "type": "void",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The void damage increases by 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:entreat-the-many",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "Vg4K3dTDswNQf4Bx",
      "slug": "entreat-the-many",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:9dfc54fa0d6fd47d31c83819a46639432af13e1f79dc55bdc607aaa8db71eeb0",
    "translatableHash": "sha256:35fb2cc01cbb3920c00a62b896356b27b899a67f2a7d838b0f171b1cc592f491",
    "data": {
      "schemaVersion": 1,
      "name": "Entreat the Many",
      "rank": 6,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "You manifest echoes of all the spirits you've ever bonded with at once, in a spiraling cyclone of colorful forms. They deal 8d8 force damage to each enemy in the area, with a basic Fortitude save. Additionally, creatures that critically fail the save are knocked Prone.\nHeightened 1 The damage increases by 1d8.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "10 emanation",
      "duration": "",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "8d8",
          "type": "force",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 1d8."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:hearts-hook",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "1B8BLEQBQn9aEMoY",
      "slug": "hearts-hook",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:95f86259a1cddb3291c7271ce5992eff6fca66f1aea09dd31b89667b34245792",
    "translatableHash": "sha256:c63b4c233cb7702b44eb8530954da9075738ba1b93f363db9530ff8d2a02622b",
    "data": {
      "schemaVersion": 1,
      "name": "Heart's Hook",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "emotion",
        "focus",
        "manipulate",
        "mental",
        "wizard"
      ],
      "traditions": [],
      "description": "You drive two creatures toward a fated meeting. Each will be compelled toward the other, but you can elect to have one automatically succeed on its saving throw.\nSuccess The creature is unaffected.\nFailure The creature must spend the first action on its next turn to approach its partner. It can't Delay or take any reactions until it has obeyed this urge.\nCritical Failure As failure, but the target must use all its actions on its next turn.",
      "castingTime": "2 actions",
      "range": "120 feet",
      "target": "two creatures",
      "area": null,
      "duration": "",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:vengeful-glare",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "8uVMoiYDzhzWJEZ2",
      "slug": "vengeful-glare",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:fb9431d8abe39c5093a1ddebbf85c58054adcd41c40dc61197e6c85dda779463",
    "translatableHash": "sha256:e2a6196a234b425c2bbf9d51d472b6903f60bdfd7893891e9f8858d2c25a3a3f",
    "data": {
      "schemaVersion": 1,
      "name": "Vengeful Glare",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "wizard"
      ],
      "traditions": [],
      "description": "Your gaze falls on a creature, filled with icy vengeance or fiery wrath. The gaze deals 1d4 damage (basic Fortitude save). It deals your choice of cold damage or fire damage and gains the appropriate trait. If you already dealt damage to the creature earlier this turn, it also takes 1 persistent damage of the gaze's type 1 persistent cold damage or 1 persistent fire damage).\nHeightened 1 The initial damage increases by 1d4 and persistent damage by 1.",
      "castingTime": "1 action",
      "range": "30 feet",
      "target": "one creature you can see",
      "area": null,
      "duration": "",
      "defense": "basic fortitude save",
      "damage": [],
      "heightening": "Heightened 1 The initial damage increases by 1d4 and persistent damage by 1."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:crescent-scepter",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "C8HWMMuB5tMhqJ5W",
      "slug": "crescent-scepter",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:2790ec186f21bdc47665c6b781a1f18f061fccd7cbd09a131ed4ca89b374c730",
    "translatableHash": "sha256:ba592bea4ff5c9131957e2e941587f29e1c3a381c93db88bd51df13a847a8c67",
    "data": {
      "schemaVersion": 1,
      "name": "Crescent Scepter",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "emotion",
        "fear",
        "focus",
        "manipulate",
        "mental",
        "visual",
        "wizard"
      ],
      "traditions": [],
      "description": "You hold up any object, which takes on the appearance of glowing regalia in the eyes of those who look on you, representing the political or religious institute most feared by each creature. If a creature attempts to attack you during the spell's duration, it must attempt a Will save.\nCritical Success The creature is unaffected.\nSuccess The creature becomes Frightened 1, the penalty applying to its attack roll.\nFailure As success, but Frightened 2.",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": null,
      "duration": "until the beginning of your next turn",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:grasping-vine",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "cQgPIohUja0DUiRL",
      "slug": "grasping-vine",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:d04e03a43c2f928aa2b0480dc486ac28b28be1b9fac52605738e64e14cfa954c",
    "translatableHash": "sha256:964750f8fb23e905b98fa96a98cb8d8e3a71c3a1f2c13669ae767570a3cb45d3",
    "data": {
      "schemaVersion": 1,
      "name": "Grasping Vine",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate",
        "plant",
        "wizard",
        "wood"
      ],
      "traditions": [],
      "description": "A thick, curling vine erupts from the ground beneath you and stretches to the target, allowing you to move it around. If the target is an item, you can move it 10 feet in any direction within range when you Cast the Spell and the first time you Sustain it each round. If the target is a creature, they must attempt a Reflex save.\nCritical Success The target is unaffected and the spell ends.\nSuccess The target is Grabbed until the end of your next turn unless it Escapes (the vine's Escape DC is equal to your spell DC) or destroys the vine (the vine has AC 15 and 10 Hit Points), at which point the spell ends.\nFailure The target is grabbed until it Escapes or destroys the vine, at which point the spell ends. The first time each round you Sustain this spell, you can Reposition the grabbed target up to 5 feet.\nCritical Failure As failure, and you can immediately Reposition the target up to 10 feet.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "1 unattended object of up to 8 Bulk, or Medium or smaller creature that is currently on the ground",
      "area": null,
      "duration": "1 minute (see text)",
      "defense": "reflex save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:turbulent-tide",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "eCwsj7wGQK1uBwiH",
      "slug": "turbulent-tide",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:d3768f033ab8bb8da451c96906c97ee5c956afc7094a72e454517261f8d400b7",
    "translatableHash": "sha256:cc47690dd2a20e12903d89a19690bfa46d756c452444b940d52b99268dfbd081",
    "data": {
      "schemaVersion": 1,
      "name": "Turbulent Tide",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "magus",
        "water"
      ],
      "traditions": [],
      "description": "You cause the sheath of water and the improvised weapon it surrounds to surge outward with stupendous force as you attack. Make a melee Strike with your improvised weapon. The weapon then breaks, and each creature adjacent to you must succeed at a Fortitude saving throw against your spell DC or be pushed 5 feet away from you (10 feet on a critical failure). You can Stride after the target of your Strike if they are pushed but you must move the same distance and in the same direction.\nIf the item has a Hardness greater than your level, or if it's an artifact, cursed item, or other item that's difficult to break or destroy, it doesn't break and adjacent creatures don't need to attempt Fortitude saves.",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": null,
      "duration": "",
      "defense": "fortitude save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:halcyon-mists",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "IERHT6v4o5ISvuJG",
      "slug": "halcyon-mists",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:3ac88b7d3a269e5e681937e6432b592b6c18c5b21900be8d86716b395db999c7",
    "translatableHash": "sha256:04f78a8e57de4629634dfe08292280e29e0826ec388928f636c609127b9eaad2",
    "data": {
      "schemaVersion": 1,
      "name": "Halcyon Mists",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate",
        "water"
      ],
      "traditions": [],
      "description": "In a moment of dire need, you call upon ancestral power to strengthen and sustain. A soothing mist gathers around the target, granting 1d8 temporary Hit Points and ending one source of persistent acid, bleed, fire, poison, or void damage affecting it. If the creature has persistent damage from more than one of these sources, you choose the one that ends.\nThe mists linger around the target, making them Concealed until the beginning of their next turn, though this obvious concealment can't be used to Hide.\nHeightened 1 The temporary Hit Points increase by 1d8.\nSpell Effect: Halcyon Mists",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 willing living creature",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 The temporary Hit Points increase by 1d8.\nSpell Effect: Halcyon Mists"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:reclined-apport",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "lsR3RLEdBG4rcSzd",
      "slug": "reclined-apport",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/spells/efficient-apport.webp"
    },
    "sourceHash": "sha256:dc56d4d260183fa028a7fcb33f612b236300ead931f8493d40e7cba5dae0b468",
    "translatableHash": "sha256:21a50213c0db5293acf987d46acff72e546af3c6cced45d8ea4617443479f0ff",
    "data": {
      "schemaVersion": 1,
      "name": "Reclined Apport",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate",
        "teleportation",
        "wizard"
      ],
      "traditions": [],
      "description": "Walking over to an item to pick it up is so much effort. Whether it's your spellbook, a reagent, or a glass of wine, it's simply more efficient to call it to your hand. You teleport the target into your open hand. If you don't have a hand free, it falls to the ground at your feet.\nHeightened (3rd) You can target an unattended object with a Bulk of 1 or less.\nHeightened (5th) The range increases to 120 feet, and you can target an unattended object with a Bulk of 1 or less.\nHeightened (7th) The range increases to 120 feet, and you can target an unattended object with a Bulk of 2 or less.",
      "castingTime": "1 action",
      "range": "60 feet",
      "target": "1 unattended object of light Bulk or less",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (3rd) You can target an unattended object with a Bulk of 1 or less.\nHeightened (5th) The range increases to 120 feet, and you can target an unattended object with a Bulk of 1 or less.\nHeightened (7th) The range increases to 120 feet, and you can target an unattended object with a Bulk of 2 or less."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:cutting-eye",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "mMyMOxYzMxADdO5M",
      "slug": "cutting-eye",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:49c0393ec299757194cdbfb958f06a28612d78c4038ba340d3040489dcd90546",
    "translatableHash": "sha256:48ac53bf55dbe8cc29ad82ce0d519f944827c7be33096555e28b9f0301abf729",
    "data": {
      "schemaVersion": 1,
      "name": "Cutting Eye",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "wizard"
      ],
      "traditions": [],
      "description": "Trigger You are the target of an attack or must attempt a saving throw against a spell.\nYour eyes open enviously, stealing the power of an opponent for yourself. You are not Off-Guard to the attacker or spellcaster until the beginning of your next turn. You gain a +2 circumstance bonus to your AC against the triggering attack or a +2 circumstance bonus to the triggering save.\nSpell Effect: Cutting Eye",
      "castingTime": "reaction",
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
    "contentId": "pf2e:spell:spells-srd:information-overload",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "PesUKf0lIt5zRofj",
      "slug": "information-overload",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:b29d3c875796314d56f6bc013a923a0fc5277a2a94a4b0d372f42778697735b7",
    "translatableHash": "sha256:d32243496626899ead5b24636acbba704a2931677cef37049badaf8cb367de1c",
    "data": {
      "schemaVersion": 1,
      "name": "Information Overload",
      "rank": 1,
      "rarity": "rare",
      "traits": [
        "cantrip",
        "concentrate",
        "hex",
        "mental",
        "witch"
      ],
      "traditions": [],
      "description": "You call on Cobyslarni to open the target's mind to knowledge—too much knowledge. The target's thoughts flood with irrelevant and confusing information, causing it to become Stupefied 1 if it fails a Will save (or Stupefied 2 on a critical failure).",
      "castingTime": "1 action",
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
    "contentId": "pf2e:spell:spells-srd:precious-gleam",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "v14zLiiSc4sl9RrK",
      "slug": "precious-gleam",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:48767c1791c8e2ab25c1a0445657f15d768128afcfd9b7852174c8cf55d20716",
    "translatableHash": "sha256:340847d7ec96720811629b3a9248f923603196b40433452c0712527d38fe7c29",
    "data": {
      "schemaVersion": 1,
      "name": "Precious Gleam",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate",
        "mental",
        "wizard"
      ],
      "traditions": [],
      "description": "You temporarily enhance a weapon, replacing it with finer materials. On the next successful attack with that weapon during the spell's duration, the attack deals an additional 1d6 precision damage. You can choose for the metal to become your choice of cold iron, silver, or steel, causing the attack to bypass resistances accordingly.\nHeightened 1 The damage increases by 1d6.\nSpell Effect: Precious Gleam",
      "castingTime": "1 action",
      "range": "60 feet",
      "target": "1 weapon that is unattended or wielded by a willing creature.",
      "area": null,
      "duration": "until the beginning of your next turn",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 The damage increases by 1d6.\nSpell Effect: Precious Gleam"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:all-encompassing-hunger",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "wJi0lq4yA5Mlj0MY",
      "slug": "all-encompassing-hunger",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:805ffbb8d92a1f9a9d2233fb48d901b1c0c073a0ea107e0a685a6fb3a71a551b",
    "translatableHash": "sha256:30c9aee06b1e25d0edf5e05642f0a9c80e3c4559f033c2897d8cda642ea6d322",
    "data": {
      "schemaVersion": 1,
      "name": "All-Encompassing Hunger",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "death",
        "focus",
        "manipulate",
        "void",
        "wizard"
      ],
      "traditions": [],
      "description": "You reach out to devour a life, regardless of whether you need it for sustenance. The target takes 1d6 void damage, with a basic Fortitude save. If the creature is reduced to 0 Hit Points, it dies, and you gain temporary Hit Points equal to the damage dealt. These temporary Hit Points last for 1 minute.\nHeightened 1 The damage increases by 1d6.",
      "castingTime": "1 action",
      "range": "30 feet",
      "target": "1 living creature",
      "area": null,
      "duration": "",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "1d6",
          "type": "void",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 1d6."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:unravel-knowledge",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "EFLXGyIz2HZVSmll",
      "slug": "unravel-knowledge",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:adc767e24cb18b121201a206efd7850f69b29de31d631dde07c458419609d759",
    "translatableHash": "sha256:04b0f53192c8e5cb41cac7b8ddf8018d906a655d14e3207117aaa326c460afe8",
    "data": {
      "schemaVersion": 1,
      "name": "Unravel Knowledge",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "hex",
        "manipulate",
        "mental",
        "witch"
      ],
      "traditions": [],
      "description": "Your patron reaches into the target's mind, plucking out their past training like pulling a thread from a cloth. Choose a single action, activity, or spell you know the target can use, such as from seeing it previously or identifying the creature's capabilities with a Recall Knowledge check. You could select, for example, the Strike action, the Disarm action, a dragon's breath, or the Haste spell if you were aware the target could use them. The target attempts a Will save.\nSuccess The target is unaffected.\nFailure The target's memories of their ability grow foggy. The first time they use the chosen ability each round, they take 3d8 mental damage. This ability is less effective if you choose an ability almost anyone can use; the target takes 3d4 mental damage instead if you choose a basic action (such as Strike, Stride, or Raise a Shield) or a skill action that can be used untrained (such as Demoralize or Hide).\nCritical Failure As failure, and the target takes a –2 status penalty to any check or DC for the ability the first time they use it each round.\nSpell Effect: Unravel Knowledge\nHeightened 1 The damage increases by 1d8, or by 1d4 for a basic action or untrained skill action.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": "will save",
      "damage": [],
      "heightening": "Heightened 1 The damage increases by 1d8, or by 1d4 for a basic action or untrained skill action."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:censure-falsehoods",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "guHLRnTL1OBUYh0V",
      "slug": "censure-falsehoods",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:71e8693b0d06a849ef50eff191409335fa781218216641af8bde6d3d3756a6cf",
    "translatableHash": "sha256:19f26198b5b96a7d49540b45a551cde5232b85d1cc7f2602f4166a0f13cec5f1",
    "data": {
      "schemaVersion": 1,
      "name": "Censure Falsehoods",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "curse",
        "focus",
        "hex",
        "manipulate",
        "witch"
      ],
      "traditions": [],
      "description": "You call on your patron to reprimand a creature that has attempted a Deception or Stealth check against you or an ally within the past month. You must be aware they did so. Whenever the target speaks, toads and serpents fall from their lips. The target attempts a Fortitude saving throw. The spell lasts as long as the target remains sickened by it.\nCritical Success A few animals fall from their lips, but they're otherwise unaffected.\nSuccess The target is Sickened 1.\nFailure The target is Sickened 2 and if they perform an action that has the auditory trait or attempt to Cast a Spell, they must succeed at a check (flat, dc:5), or the action is disrupted as they choke on an animal.\nCritical Failure As failure, and if the target attempts a Deception or Stealth check, their sickened value increases by 1 (to a maximum of Sickened 4).",
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
    "contentId": "pf2e:spell:spells-srd:unsettling-knowledge",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "iAmHJbFN3lOoOkNG",
      "slug": "unsettling-knowledge",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:201448312e92f2b661154ebe2bb3ab55447ca231947770a4aa564293a7ec15de",
    "translatableHash": "sha256:70cbc6c7be876e5281adc19ceb1d6814114e41edc9641092a1d92d2b8767fed1",
    "data": {
      "schemaVersion": 1,
      "name": "Unsettling Knowledge",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "linguistic",
        "mental",
        "wood"
      ],
      "traditions": [],
      "description": "You share a piece of hidden knowledge with a creature that is both upsetting and intriguing. When you Cast this Spell, choose Arcana, Nature, Occultism, Religion, or Society as the focus of this knowledge. The target must attempt a Will save.\nCritical Success The target is unaffected.\nSuccess The target is Fascinated by the knowledge you shared for 1 round.\nFailure The target is fascinated by the knowledge for 1 minute. The target can end this fascination early by attempting a skill check to Recall Knowledge to understand the knowledge using the chosen skill (using your spell DC as the DC); regardless of the result, the target becomes Frightened 2, but if they failed the check, they can't reduce their frightened condition below 1 for the remainder of the spell's duration.\nCritical Failure As failure, but the target becomes Frightened 3 if they attempt to Recall Knowledge.",
      "castingTime": "1 action",
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
    "contentId": "pf2e:spell:spells-srd:personal-runewell",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "N91EI7H1p7YXKX0o",
      "slug": "personal-runewell",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:a733bbbc96497d316ee4ea6f5914baab94e0744022118fb12a1c9a6f81076906",
    "translatableHash": "sha256:da66cf1492a85af4ec2f0277590d5de7e5989616a24386d0f94d2c2a55c57b23",
    "data": {
      "schemaVersion": 1,
      "name": "Personal Runewell",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate",
        "wizard"
      ],
      "traditions": [],
      "description": "Area (continued) 15-foot radius, 30-foot-tall cylinder\nThe runelords of Thassilon pioneered the creation of runewells, magical artifacts that could extract and store the power of sin magic from mortal souls. A circle of light carves its way across the ground as you create your very own runewell, your personal rune flaring to life within it as you add your own sin to those seven revered in the past. Whenever any creature Casts a Spell within your personal runewell, the well resonates, with your choice of effects.\n• The runewell amplifies the power of your spells, as well as those of your allies. If the spell deals damage and doesn't have a duration, the well adds a status bonus to damage equal to the spell's rank.\nSpell Effect: Personal Runewell\n• The runewell punishes enemies foolish enough to attempt magic in your seat of power, firing arcane bolts at the spell's caster that deal 4d6 force damage, with a basic Reflex save.\nIf you cast personal runewell a second time, your previous personal runewell vanishes. You can Dismiss the spell.\nHeightened 1 The amount of damage dealt by the runewell's bolts increases by 1d6.\nPFS Note: Within the area of a personal runewell spell, the caster chooses the effect each time a spell is cast. This can be a different effect for different spells.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "",
      "area": "15 cylinder",
      "duration": "1 minute",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "4d6",
          "type": "force",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The amount of damage dealt by the runewell's bolts increases by 1d6.\nPFS Note: Within the area of a personal runewell spell, the caster chooses the effect each time a spell is cast. This can be a different effect for different spells."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:call-the-ten",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "REBo9wSxDDx7Qdcc",
      "slug": "call-the-ten",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:19ec72da85baba58b4fbe6181d5c0b7c11577bca4ed0dd42bc49ec25e6acaa68",
    "translatableHash": "sha256:b4d57b5d0c25d0c1058b48df28618d5097a46c482069c285930f4d8bc51f7a1b",
    "data": {
      "schemaVersion": 1,
      "name": "Call the Ten",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "The Ten Magic Warriors were the first of the Magaambya's students, and they come to your aid even now. An indistinct spirit appears near each target, each wearing a different mask of the Ten Magic Warriors. The spirits then either strike their designated targets with magical energy, dealing each one 4d6 spirit damage with a basic Fortitude save, or shield them, granting their target resistance 3 to physical and spirit damage until the beginning of your next turn. You designate which targets are attacked and which are shielded.\nSpell Effect: Call the Ten\nHeightened 2 The amount of damage increases by 1d6 and the amount of resistance increases by 2.",
      "castingTime": "3 actions",
      "range": "30 feet",
      "target": "up to 10 creatures, including yourself",
      "area": null,
      "duration": "",
      "defense": "basic fortitude save",
      "damage": [
        {
          "formula": "4d6",
          "type": "spirit",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The amount of damage increases by 1d6 and the amount of resistance increases by 2."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:friendly-push",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "cCFDnmFB1EGeQUeA",
      "slug": "friendly-push",
      "publicationTitle": "Pathfinder Lost Omens Shining Kingdoms",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:a78a630dab7bfada2d7acdac7d5dacdd553d571860751d1ac64f06c60b2d2742",
    "translatableHash": "sha256:cf68f975e1f755167509de65c6a9e17d74904eed9fe36d4e1d1f0f382596ae0b",
    "data": {
      "schemaVersion": 1,
      "name": "Friendly Push",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate",
        "wizard"
      ],
      "traditions": [],
      "description": "You exert magical force to propel a willing creature up to 10 feet in a straight line, including upward, though if they aren't on solid ground or have another way to maintain their height (such as a fly Speed) when the movement ends, they fall. When you Sustain the spell, you can move them again or choose a new target within range and move them instead.\nYou can cast this spell on an Unconscious ally, and if you do, the movement from this spell doesn't trigger reactions.\nHeightened (4th) The distance increases to 20 feet.\nHeightened (7th) The distance increases to 30 feet.",
      "castingTime": "1 action",
      "range": "60 feet",
      "target": "1 willing creature",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (4th) The distance increases to 20 feet.\nHeightened (7th) The distance increases to 30 feet."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:unexpected-windfall",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "KR8WgdazifDBjDkW",
      "slug": "unexpected-windfall",
      "publicationTitle": "Pathfinder Lost Omens Shining Kingdoms",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:009d05eb91561cd81ded8b9892613e0dc021cf28e2ea39e413adc65f782765b5",
    "translatableHash": "sha256:cdb5786333544b7e3b00a03121823d8e975adbef69d47b328be29655af473965",
    "data": {
      "schemaVersion": 1,
      "name": "Unexpected Windfall",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate",
        "metal",
        "wizard"
      ],
      "traditions": [],
      "description": "Coins, trinkets carved from heavy stone, and other cumbersome treasures rain down upon a foe. The target must attempt a Fortitude save.\nCritical Success The target is unaffected.\nSuccess The target is Encumbered for 1 round.\nFailure The target is encumbered for the duration of the spell.\nCritical Failure As failure, but the extra weight also knocks the target Prone.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "1 minute",
      "defense": "fortitude save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:menacing-lament",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "6TudR1rDkxWMj1cv",
      "slug": "menacing-lament",
      "publicationTitle": "Pathfinder Lost Omens Shining Kingdoms",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:fa6918d2d450791dbd1e03027e82374259fab607acdb9c9d69af56e3be24d92f",
    "translatableHash": "sha256:9518bbf98e4c22762a52d236e8c27adfb68c6a19e1149d63faa41f8f141ae1ec",
    "data": {
      "schemaVersion": 1,
      "name": "Menacing Lament",
      "rank": 2,
      "rarity": "uncommon",
      "traits": [
        "auditory",
        "concentrate",
        "emotion",
        "focus",
        "mental"
      ],
      "traditions": [],
      "description": "You wail a dirge for your enemies. Enemies in the area are Off-Guard against your attacks and gain no benefits from flanking you for the duration.",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": "30 emanation",
      "duration": "1 round",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:valiant-anthem",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "nRsBM1zkhMmV3VST",
      "slug": "valiant-anthem",
      "publicationTitle": "Pathfinder Lost Omens Shining Kingdoms",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:4539d4765bc282cbd4d9fb6be3595eac246b7c85a4a38d7812c7faa627090ce3",
    "translatableHash": "sha256:f6b393d2570df1cb50be21f3109616b879f01c47f9a1b1e91a7b9992c422abee",
    "data": {
      "schemaVersion": 1,
      "name": "Valiant Anthem",
      "rank": 2,
      "rarity": "uncommon",
      "traits": [
        "auditory",
        "concentrate",
        "emotion",
        "focus",
        "mental"
      ],
      "traditions": [],
      "description": "You chant a rallying cry to bolster your allies. Your allies in the area gain a +10-foot status bonus to all Speeds and a +1 status bonus to attack rolls.\nSpell Effect: Valiant Anthem",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": "30 emanation",
      "duration": "1 round",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:rapid-retreat",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "6sNjsNPipZvQ3BGe",
      "slug": "rapid-retreat",
      "publicationTitle": "Pathfinder Lost Omens Shining Kingdoms",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:156b460a6e033125666848958c1979e548c37e80f9d94dff98212eeeeaeffa54",
    "translatableHash": "sha256:ac9ae08df13485156369e7ca1e72c58ffc19157d27311496a4faad4ea5d4ee5a",
    "data": {
      "schemaVersion": 1,
      "name": "Rapid Retreat",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "focus",
        "teleportation",
        "wizard"
      ],
      "traditions": [],
      "description": "Trigger You take damage from an attack or spell.\nYou know how to swiftly escape from harm. You instantly teleport out of danger into an unoccupied space within range, and you gain resistance to all damage against the triggering damage equal to your level. You can't Cast this Spell if there's no space to move into.\nSpell Effect: Rapid Retreat",
      "castingTime": "reaction",
      "range": "20 feet",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:capital-dividend",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "jXcsCpko8qNrWZ4x",
      "slug": "capital-dividend",
      "publicationTitle": "Pathfinder Lost Omens Shining Kingdoms",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:8f0450940115082af7b9516b398081be2d2a85be7f47e9bea8d16a528cf369fd",
    "translatableHash": "sha256:79d34097bbeee4dcf2d9df57199a172c3e1c9ed0b6688625e1340d9fef9bf317",
    "data": {
      "schemaVersion": 1,
      "name": "Capital Dividend",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "wizard"
      ],
      "traditions": [],
      "description": "Trigger You would be reduced to 0 Hit Points but not immediately killed.\nThrough diet and other strict regimens, you've fortified your body as Kalistrade's teachings have fortified your mind. You remain at 1 Hit Point, and your skin takes on a slight warm glow.\nFor the next minute, any time you would regain Hit Points from a healing effect, this magic amplifies the effect, and you regain an additional 8 Hit Points.\nHeightened 1 The additional healing increases by 2 Hit Points.\nSpell Effect: Capital Dividend",
      "castingTime": "reaction",
      "range": "",
      "target": "",
      "area": null,
      "duration": "",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 1 The additional healing increases by 2 Hit Points.\nSpell Effect: Capital Dividend"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:elemental-sheath",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "WkqamCF8r4O5Gh0n",
      "slug": "elemental-sheath",
      "publicationTitle": "Pathfinder Lost Omens Shining Kingdoms",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:e33dba9ade16dd43e81c4493116c06c8945669367bf4274d010ba623c7dcb32c",
    "translatableHash": "sha256:9cb429d5ebbe923916f55231f261f3e18dfc73af8a44fad0422e6ce266ff3144",
    "data": {
      "schemaVersion": 1,
      "name": "Elemental Sheath",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "You coat yourself in nature's power. Choose air, earth, fire, metal, water, or wood; the spell gains that trait. You become completely covered by armor formed from that element, gaining a +1 circumstance bonus to AC and resistance 5 to two types of damage based on the element you choose.\nAir bludgeoning and electricity\nEarth bludgeoning and poison\nFire fire and slashing\nMetal acid and slashing\nWater cold and piercing\nWood piercing and void.\nHeightened 2 The resistance increases by 5.\nSpell Effect: Elemental Sheath",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened 2 The resistance increases by 5.\nSpell Effect: Elemental Sheath"
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:vicious-howl",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "z9pIChNg9PmPmn31",
      "slug": "vicious-howl",
      "publicationTitle": "Pathfinder Lost Omens Shining Kingdoms",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:4441b8cf0ae2c742a51e6419593f9ff95a70bda2ffd7bdeefab8b47b2602393a",
    "translatableHash": "sha256:93161406560e19bc4f312bfb652aaa4d69c662e27188e82aa8cf135b030edf08",
    "data": {
      "schemaVersion": 1,
      "name": "Vicious Howl",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus"
      ],
      "traditions": [],
      "description": "You howl with passion for your cause, empowering yourself to push beyond your limits. You gain a number of temporary Hit Points equal to your level and a +4 circumstance bonus to damage. If you reduce a fiend to 0 Hit Points during this duration, you regain a number of Hit Points equal to the creature's level.\nSpell Effect: Vicious Howl",
      "castingTime": "1 action",
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
    "contentId": "pf2e:spell:spells-srd:debilitating-terror",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "AzTFMy9E9HQcLNRg",
      "slug": "debilitating-terror",
      "publicationTitle": "Pathfinder Adventure: Prey for Death",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:d63e65a48d829c842b155e16be4c62de104ecab6570abc4fa587b7620d7a4344",
    "translatableHash": "sha256:be3284baf8b4c7d749f3f78e491c31a64690a378a52b68cfd3e9be80c536f18f",
    "data": {
      "schemaVersion": 1,
      "name": "Debilitating Terror",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "fear",
        "focus",
        "incapacitation",
        "mental",
        "wizard"
      ],
      "traditions": [],
      "description": "You fill the target's mind with terrifying images to disrupt their combat focus. The target must attempt a Will save.\nCritical Success The target is unaffected.\nSuccess The target takes a –1 circumstance penalty to attack and damage rolls against you.\nSpell Effect: Debilitating Terror\nFailure The target can't use hostile actions against you.\nCritical Failure The target is Stunned 1 and can't use hostile actions against you.",
      "castingTime": "1 action",
      "range": "30 feet",
      "target": "1 creature",
      "area": null,
      "duration": "until the start of your next turn",
      "defense": "will save",
      "damage": [],
      "heightening": ""
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:mantis-form",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "bKDsmKVosexwJ80i",
      "slug": "mantis-form",
      "publicationTitle": "Pathfinder Adventure: Prey for Death",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:d1345bad0bc21643ddcc659aa1da46a1c131415bc90f7d890be4530bbb297d07",
    "translatableHash": "sha256:ddcd17c12ce310e4b0cfb36140520f19356e2e542597e9bd1d253fcc74f65b71",
    "data": {
      "schemaVersion": 1,
      "name": "Mantis Form",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate",
        "polymorph"
      ],
      "traditions": [],
      "description": "You become a mantis. You gain the effects of Insect Form, heightened to mantis form's level, and you can only transform into a mantis.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "heightened to mantis form's level, and you can only transform into a mantis."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:achaekeks-clutch",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "IT1aaqDBAISlHDUV",
      "slug": "achaekeks-clutch",
      "publicationTitle": "Pathfinder Adventure: Prey for Death",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:73f286f5f81a896effefe39595bc0561f798118ade22547d3cf500e8ee801301",
    "translatableHash": "sha256:bddc98440f5f1ec35192f34510d37fddf3340d2d58b4222f5e159c905f9c5395",
    "data": {
      "schemaVersion": 1,
      "name": "Achaekek's Clutch",
      "rank": 4,
      "rarity": "rare",
      "traits": [
        "concentrate",
        "curse",
        "death",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "You mark the holy symbol of Achaekek in a visible location on the target's body.\nCritical Success The target is unaffected.\nSuccess The target is marked by Achaekek's symbol. For 1 minute, the first time per round that the target gains Persistent Bleed Damage, they immediately take that amount of slashing damage as the mantis claws grow off the symbol and rake them.\nFailure As success, but the curse has an unlimited duration.\nCritical Failure As failure, but the DC on the target's flat check to remove persistent bleed damage increases to 20 (15 with particularly effective assistance).",
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
    "contentId": "pf2e:spell:spells-srd:shroud-of-the-mantis",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "VVigI4uNdWr1XZgG",
      "slug": "shroud-of-the-mantis",
      "publicationTitle": "Pathfinder Adventure: Prey for Death",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:d1e8fb53ff7c6b766bcbc773ffa43c0e40657a2366fafb52ec5cb31beb7901e7",
    "translatableHash": "sha256:e0c767f3bcba3fe8a2f3448adc5a134f68201c853e0fc86d12adb8d62a93c4af",
    "data": {
      "schemaVersion": 1,
      "name": "Shroud of the Mantis",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "focus",
        "illusion",
        "manipulate",
        "wizard"
      ],
      "traditions": [],
      "description": "You wrap yourself in a crimson cloak that renders you Invisible, with the same restrictions as a 2nd-rank Invisibility spell.\nHeightened (6th) The duration increases to 10 minutes.\nHeightened (8th) The duration increases to 1 hour.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (6th) The duration increases to 10 minutes.\nHeightened (8th) The duration increases to 1 hour."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:mushroom-patch",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "xCfOskoogDf9LBlD",
      "slug": "mushroom-patch",
      "publicationTitle": "Pathfinder #202: Severed at the Root",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:478fc6fce5e3697baa2011be879c9c5841fb63f9c9ac0e464053cfc1882efbe9",
    "translatableHash": "sha256:af39d5b2a8a32752807010c5c3e520c745f84265a7d94798245e9022d737d4ac",
    "data": {
      "schemaVersion": 1,
      "name": "Mushroom Patch",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "druid",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "You cause mushrooms to sprout in the area. The area becomes difficult terrain. When the spell is cast and at the beginning of each round, the mushroom's release a cloud of irritating spores. Creatures in the area must attempt a Fortitude save.\nCritical Success The creature is unaffected.\nSuccess The creature is Dazzled for 1 round. If the creature moves to outside area, they can spend 1 action to rub their eyes, removing the dazzled condition.\nFailure The creature becomes dazzled for 1 round.\nCritical Failure The creature becomes dazzled and Slowed 1 for 1 round.\nHeightened (3rd) The range increases to 90 feet and the area increases to a 20-foot-radius burst.\nHeightened (6th) The range increases to 120 feet and the area increases to a 30-foot-radius burst.\nHeightened (9th) The range increases to 150 feet, the area increases to a 40-foot-radius burst, and when a creature would become dazzled, they become Blinded instead.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "",
      "area": "10 burst",
      "duration": "1 minute",
      "defense": "fortitude save",
      "damage": [],
      "heightening": "Heightened (3rd) The range increases to 90 feet and the area increases to a 20-foot-radius burst.\nHeightened (6th) The range increases to 120 feet and the area increases to a 30-foot-radius burst.\nHeightened (9th) The range increases to 150 feet, the area increases to a 40-foot-radius burst, and when a creature would become dazzled, they become Blinded instead."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:fungal-exhalation",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "H481wmQUtEUhxHzi",
      "slug": "fungal-exhalation",
      "publicationTitle": "Pathfinder #202: Severed at the Root",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:82f239e28f40615e943b5da27015fb366a44472336894277f1a3523a11b66756",
    "translatableHash": "sha256:aa0eaee221bba4dac435ef782dd83f0f4d33303f20d2e685b352c6a7b49fe02a",
    "data": {
      "schemaVersion": 1,
      "name": "Fungal Exhalation",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "druid",
        "focus",
        "fungus",
        "manipulate"
      ],
      "traditions": [],
      "description": "You exhale toxic mold spores that fill the area. You deal 6d4 poison damage to creatures in the area. On a failure, a creature is also Sickened 1, or Sickened 2 on a critical failure. A creature that doesn't breathe is immune to this effect.\nHeightened 1 The damage increases by 2d4.",
      "castingTime": "2 actions",
      "range": "",
      "target": "",
      "area": "15 cone",
      "duration": "",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "6d4",
          "type": "poison",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 1 The damage increases by 2d4."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:hedge-prison",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "z0ffligcrkVtKZd6",
      "slug": "hedge-prison",
      "publicationTitle": "Pathfinder #202: Severed at the Root",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:acbf5bbfe11a7aa1ee2c5ed01d351775cb1f0339292d0e3e4ebecd17c20534b5",
    "translatableHash": "sha256:1b6519834201096b90843093b61770811eb59ba3c7fc0411a11442e990e961aa",
    "data": {
      "schemaVersion": 1,
      "name": "Hedge Prison",
      "rank": 3,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "druid",
        "focus",
        "manipulate"
      ],
      "traditions": [],
      "description": "You conjure an intricate hedge prison to trap a creature, encasing them completely in a hollow cube of dense bushes. The hedge has AC 5, Hardness 5, and 20 Hit Points. It's immune to critical hits and precision damage.\nCritical Success The creature escapes the hedge before it fully forms.\nSuccess The creature is trapped inside the hedge, but the hedge's Hit Points are reduced by half.\nFailure The creature is trapped inside the hedge.\nCritical Failure The creature is trapped inside the hedge, and the hedge's Hit Points are increased by half.\nHeightened (4th) The hedge's hardness increases to 7 and its Hit Points increase to 30.\nHeightened (5th) The hedge's hardness increases to 9 and its Hit Points increase to 40. You can target a creature of Large size or smaller.\nHeightened (6th) The hedge's hardness increases to 11 and its Hit Points increase to 50. You can target a creature of Large size or smaller.\nHeightened (7th) The hedge's hardness increases to 13 and its Hit Points increase to 60. You can target a creature of Huge size or smaller.\nHeightened (8th) The hedge's hardness increases to 15 and its Hit Points increase to 70. You can target a creature of Huge size or smaller.\nHeightened (9th) The hedge's hardness increases to 17 and its Hit Points increase to 80. You can target a creature of Huge size or smaller.",
      "castingTime": "2 actions",
      "range": "30 feet",
      "target": "1 Medium or smaller creature",
      "area": null,
      "duration": "1 minute",
      "defense": "reflex save",
      "damage": [],
      "heightening": "Heightened (4th) The hedge's hardness increases to 7 and its Hit Points increase to 30.\nHeightened (5th) The hedge's hardness increases to 9 and its Hit Points increase to 40. You can target a creature of Large size or smaller.\nHeightened (6th) The hedge's hardness increases to 11 and its Hit Points increase to 50. You can target a creature of Large size or smaller.\nHeightened (7th) The hedge's hardness increases to 13 and its Hit Points increase to 60. You can target a creature of Huge size or smaller.\nHeightened (8th) The hedge's hardness increases to 15 and its Hit Points increase to 70. You can target a creature of Huge size or smaller.\nHeightened (9th) The hedge's hardness increases to 17 and its Hit Points increase to 80. You can target a creature of Huge size or smaller."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:augmented-body",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "pSepsfCrrAKuwA0N",
      "slug": "augmented-body",
      "publicationTitle": "Pathfinder #215: To Blot Out the Sun",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:762d1b43cfe9eb490091e8993d5f653ee743f7119f86d81593308f538ef26b39",
    "translatableHash": "sha256:f01deda633434a3d1ea2aa593e5cc423d8c13a537d61c7ebaae80e7c8411d955",
    "data": {
      "schemaVersion": 1,
      "name": "Augmented Body",
      "rank": 1,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "morph",
        "wizard"
      ],
      "traditions": [],
      "description": "You magically augment your body with clockwork parts and magitech innovations. Choose any one effect of your choice. You can Dismiss the spell.\n• Ablative Plating You coat your body with metal plates that protect your vital organs. You gain resistance 1 to physical damage.\n• Clockwork Arm You transform one of your arms into a clockwork arm powered by gears, springs, and pneumatic actuators. You gain a clockwork fist unarmed attack, which has the agile, finesse, and free-hand traits and deals 1d6 bludgeoning damage.\n• Spined Fingertips Your fingers sprout microscopic metal spines that enable you to cling to surfaces like a spider. You gain a climb Speed of 20 feet.\n• Spring-Loaded Legs Your leg muscles are augmented with powerful springs. You gain a +10-foot status bonus to your Speed and double the distance you Leap.\nSpell Effect: Augmented Body\nHeightened (3rd) The ablative plating's resistance increases to 2. The clockwork fist is a +1 striking weapon.\nHeightened (5th) The ablative plating's resistance increases to 3, and the clockwork fist is a +2 striking weapon.\nHeightened (7th) The ablative plating's resistance increases to 4, and the clockwork fist is a +2 greater striking weapon.\nHeightened (9th) The ablative plating's resistance increases to 5 and the clockwork fist is a +3 major striking weapon.",
      "castingTime": "1 action",
      "range": "",
      "target": "",
      "area": null,
      "duration": "1 minute",
      "defense": null,
      "damage": [],
      "heightening": "Heightened (3rd) The ablative plating's resistance increases to 2. The clockwork fist is a +1 striking weapon.\nHeightened (5th) The ablative plating's resistance increases to 3, and the clockwork fist is a +2 striking weapon.\nHeightened (7th) The ablative plating's resistance increases to 4, and the clockwork fist is a +2 greater striking weapon.\nHeightened (9th) The ablative plating's resistance increases to 5 and the clockwork fist is a +3 major striking weapon."
    }
  },
  {
    "contentId": "pf2e:spell:spells-srd:conjured-clockwork",
    "domain": "SPELL",
    "locale": "en-US",
    "source": {
      "sourcePack": "spells-srd",
      "sourceId": "eob29LrDMH2IoeAj",
      "slug": "conjured-clockwork",
      "publicationTitle": "Pathfinder #215: To Blot Out the Sun",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:780d0a47f5c220f0b8b8d4389b70d194ff10413a1aea71a5d0352e76ee00d919",
    "translatableHash": "sha256:64f1c5d7c53e09fbb8ceaeda1e9583f18b7f8dff704149f9b9d23394ec479eb1",
    "data": {
      "schemaVersion": 1,
      "name": "Conjured Clockwork",
      "rank": 4,
      "rarity": "uncommon",
      "traits": [
        "concentrate",
        "focus",
        "manipulate",
        "wizard"
      ],
      "traditions": [],
      "description": "You conjure a complex clockwork device on the ground and cause it to slowly spread across the battlefield. The area is difficult terrain. Each creature that enters or ends its turn in the area takes 2d8 slashing damage with a basic Reflex save. A creature can take this damage only once per turn. On subsequent rounds, the first time you Sustain the spell each round, you can expand the radius of the clockwork device by 5 feet.\nHeightened 2 The damage increases by 1d8.",
      "castingTime": "2 actions",
      "range": "60 feet",
      "target": "",
      "area": "10 burst",
      "duration": "1 minute",
      "defense": "basic reflex save",
      "damage": [
        {
          "formula": "2d8",
          "type": "slashing",
          "kind": "damage"
        }
      ],
      "heightening": "Heightened 2 The damage increases by 1d8."
    }
  }
]
