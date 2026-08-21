import type { Pathfinder2eOriginalContentRecord } from '../../records'
import type { Pathfinder2eItemData } from '../types'

export const PATHFINDER_2E_EXHAUSTIVE_27_ITEM_ORIGINALS: readonly Pathfinder2eOriginalContentRecord<Pathfinder2eItemData>[] = [
  {
    "contentId": "pf2e:item:equipment-srd:hardened-harrow-deck",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "qtlkftQXfO4wuCVu",
      "slug": "hardened-harrow-deck",
      "publicationTitle": "Pathfinder #160: Assault on Hunting Lodge Seven",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/specific-magic-weapons/hardened-harrow-deck.webp"
    },
    "sourceHash": "sha256:170019c81fea32173185ce21faef1810b1295e776d48714a77e89d7b8aff353f",
    "translatableHash": "sha256:5c3ef0a6cdbcf3dcd4ff9ce0e11ca38910a295db800b236742a532ad9bdf587c",
    "data": {
      "schemaVersion": 1,
      "name": "Hardened Harrow Deck",
      "itemType": "weapon",
      "level": 14,
      "rarity": "rare",
      "traits": [
        "agile",
        "deadly-d10",
        "thrown"
      ],
      "description": "The harrow is a traditional fortunetelling deck used by Varisian soothsayers. The hardened harrow deck is a magical version of the deck with cards made of thin metallic plates adorned with all the imagery common in standard harrow decks, but with more angular designs. You can hurl cards from the hardened harrow deck as +2 greater striking darts with the deadly d10 trait. A card used as a weapon isn't destroyed and can be recovered with 1 minute of searching if it can't be recalled back to the deck (see the deck's Activate entry below). However, if even a single card is missing from the deck, the deck can't be used to perform a traditional harrow reading.\nAs long as you carry more than half the cards in the hardened harrow deck, when you roll a success on a saving throw against a fear effect, you get a critical success instead; if you already have an ability that would make a successful saving throw against a fear effect a critical success, you instead gain a +1 circumstance bonus to saving throws against fear effects.\nActivate 1 command, Interact\nEffect All cards from the hardened harrow deck within 60 feet that you can see fly back into the deck.",
      "bulk": 0.1,
      "price": {
        "gp": 4350
      },
      "usage": "held-in-one-hand",
      "category": "simple",
      "group": "dart",
      "damage": {
        "dice": 1,
        "die": "d4",
        "type": "piercing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:poisoners-staff-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "YMwlSFUoIEPIyctl",
      "slug": "poisoners-staff-major",
      "publicationTitle": "Pathfinder #160: Assault on Hunting Lodge Seven",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/staves/poisoners-staff.webp"
    },
    "sourceHash": "sha256:6f64d8b686df71398e7b61375a5895e320a42dee94f5e17891d527383c59781b",
    "translatableHash": "sha256:28ba4513213a38b01f14d095c738448c61b1689a585850b836d1d3740414c48f",
    "data": {
      "schemaVersion": 1,
      "name": "Poisoner's Staff (Major)",
      "itemType": "weapon",
      "level": 14,
      "rarity": "uncommon",
      "traits": [
        "magical",
        "staff",
        "two-hand-d8"
      ],
      "description": "This gnarled staff is covered with thorns and coated with a glistening lacquer that acts as a minor irritant. While holding the staff, you aren't affected by its coating or thorns, and you reduce the DC of your flat checks to overcome persistent poison damage from 15 to 5.\nActivate Cast a Spell\nEffect You expend a number of charges from the staff to cast a spell from its list.\n• Cantrips Guidance\n• 1st Detect Poison, Spider Sting\n• 2nd Enhance Victuals, Imp Sting\n• 3rd Cleanse Affliction, Stinking Cloud\n• 4th Swarming Wasp Stings\n• 5th Toxic Cloud\n• 6th Purple Worm Sting\nCraft Requirements Supply one casting of all listed levels of all listed spells.",
      "bulk": 1,
      "price": {
        "gp": 4000
      },
      "usage": "held-in-one-hand",
      "category": "simple",
      "group": "club",
      "damage": {
        "dice": 1,
        "die": "d4",
        "type": "bludgeoning"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:blade-of-the-rabbit-prince",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "APZJC0A469gBozf1",
      "slug": "blade-of-the-rabbit-prince",
      "publicationTitle": "Pathfinder #160: Assault on Hunting Lodge Seven",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/specific-magic-weapons/blade-of-the-rabbit-prince.webp"
    },
    "sourceHash": "sha256:9002bfad50dfb3e78e60ea9a664b3d94c78adb734c08891f66a4c994332b1e1f",
    "translatableHash": "sha256:f39786225a8f16251440dbba953243ef07176b951ea9065f90e8ae1505063073",
    "data": {
      "schemaVersion": 1,
      "name": "Blade of the Rabbit Prince",
      "itemType": "weapon",
      "level": 15,
      "rarity": "rare",
      "traits": [
        "agile",
        "finesse",
        "magical",
        "versatile-s"
      ],
      "description": "This +2 greater striking Dancing shortsword has a golden handguard resembling a bird with outstretched wings. The sword's blade is broken halfway up its length, but this doesn't impair the sword's function.\nActivate 1 command, Interact\nEffect You attempt to Trip or Disarm an opponent using Thievery instead of Athletics, and you add the blade of the Rabbit Prince's item bonus to the check. You do not need to have a hand free if you're wielding the blade of the Rabbit Prince, and your target can be up to two sizes larger than you.\nCraft Requirements You must craft the blade in the Harrowed Realm.",
      "bulk": 0.1,
      "price": {
        "gp": 6250
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "sword",
      "damage": {
        "dice": 1,
        "die": "d6",
        "type": "piercing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:lifeblight-residue",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "cSrCTi2zE5OU5ylH",
      "slug": "lifeblight-residue",
      "publicationTitle": "Pathfinder #160: Assault on Hunting Lodge Seven",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-poisons/lifeblight-residue.webp"
    },
    "sourceHash": "sha256:95069d328b3bee0b06463cb576eb0e09c7629233ad6b45661e6d2353f3386f46",
    "translatableHash": "sha256:8d460c380182a99c12640dc3305c1a7c706dc69d7792b7184c03e4d2e9f3aa8d",
    "data": {
      "schemaVersion": 1,
      "name": "Lifeblight Residue",
      "itemType": "consumable",
      "level": 15,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "divine",
        "injury",
        "poison",
        "virulent"
      ],
      "description": "Activate 2 Interact\nThis black slime is carefully culled from coffins and sarcophagi used by the undead, and is then distilled and combined with necromantic energy, creating a dangerous sludge that leeches life force as aggressively as it rots flesh.\nSaving Throw check (fortitude, dc:35)\nMaximum Duration 6 rounds\nStage 1 5d6 void damage and 3d6 poison damage (1 round)\nStage 2 6d6 void damage and 4d6 poison damage (1 round)\nStage 3 7d6 void damage and 5d6 poison damage (1 round)\nCraft Requirements Supply one casting of 8th-rank Harm.",
      "bulk": 0.1,
      "price": {
        "gp": 1100
      },
      "usage": "held-in-two-hands",
      "category": "poison",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:repulsion-resin",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "ws3OXRgAawwYIKK6",
      "slug": "repulsion-resin",
      "publicationTitle": "Pathfinder #160: Assault on Hunting Lodge Seven",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-poisons/repulsion-resin.webp"
    },
    "sourceHash": "sha256:d9507774709fb5dacfdc6ba42d6556ac28b890e9ef0e44fe9e6feb7d0fed11b0",
    "translatableHash": "sha256:4625972e5dc5eea4d06e7e86e81fbc53b1ab29402f960474b6f25e76b27a1bce",
    "data": {
      "schemaVersion": 1,
      "name": "Repulsion Resin",
      "itemType": "consumable",
      "level": 16,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "divine",
        "ingested",
        "poison"
      ],
      "description": "Activate 1 Interact\nThis clear, tasteless tar causes the victim to emit waves of harmful mental energy that repel other creatures. Desperate users might consume this poison to keep enemies at bay despite the poison's debilitating effects. While you're Stupefied from this poison, a creature that starts its turn within 10 feet of you or approaches within 10 feet of you must attempt a check (will, dc:35) saving throw. On a failure, the creature can't voluntarily move closer to you; this is a mental effect. Once the approaching creature has attempted to save, it uses the same result for all saves from that dose of repulsion resin.\nSaving Throw check (fortitude, dc:38)\nOnset 10 minutes\nMaximum Duration 6 minutes\nStage 1 12d6 mental damage and stupefied 1 (1 minute)\nStage 2 16d6 poison damage and stupefied 1 (1 minute)\nStage 3 20d6 poison damage and Stupefied 2 (1 minute)\nCraft Requirements Supply one casting of Repulsion.",
      "bulk": 0.1,
      "price": {
        "gp": 1650
      },
      "usage": "held-in-one-hand",
      "category": "poison",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:nightmare-cudgel",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "yMbMbPW2WfjOIrmJ",
      "slug": "nightmare-cudgel",
      "publicationTitle": "Pathfinder #161: Belly of the Black Whale",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/specific-magic-weapons/nightmare-cudgel.webp"
    },
    "sourceHash": "sha256:4f17838b2d9a504cc108d05d280f620774964f8e16420e5ec60b4334f48b5aec",
    "translatableHash": "sha256:088051c4ed1f6248c273e1299ad58f1e1e102c8f2917c1a64e73085ac7ee339b",
    "data": {
      "schemaVersion": 1,
      "name": "Nightmare Cudgel",
      "itemType": "weapon",
      "level": 11,
      "rarity": "uncommon",
      "traits": [
        "invested",
        "magical",
        "thrown-10"
      ],
      "description": "Crafted from polished wood, this seemingly mundane +1 striking Club comes with a red leather strap near the handle. The mere sight of the cudgel in a guard's hand fills prisoners with dread.\nGood creatures are Enfeebled 2 while carrying, wielding, or wearing this item crafted by the sea-witches.\nActivate 2 Interact (emotion, mental)\nFrequency once per day\nEffect You initiate an intimidating walk, thumping the cudgel menacingly against your palm. As part of activating this item, you can Stride twice. For the next minute, whenever you successfully Strike a creature with the nightmare cudgel, you can use a free action to attempt an Intimidation check to Demoralize the struck creature.",
      "bulk": 1,
      "price": {
        "gp": 1000
      },
      "usage": "held-in-one-hand",
      "category": "simple",
      "group": "club",
      "damage": {
        "dice": 1,
        "die": "d6",
        "type": "bludgeoning"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:forgotten-shell",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "zPSImy0ENQjnRJNs",
      "slug": "forgotten-shell",
      "publicationTitle": "Pathfinder #161: Belly of the Black Whale",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/armor/specific-magic-armor/forgotten_shell.webp"
    },
    "sourceHash": "sha256:b3a43f396760b4ab47ff7a628fed25e16607e52d92814e9760c05b7c00a7bc66",
    "translatableHash": "sha256:2202ddbc7397bdbfbc3a02aa1f0a917653e9ffdab34b36249a63d220802a5d22",
    "data": {
      "schemaVersion": 1,
      "name": "Forgotten Shell",
      "itemType": "armor",
      "level": 13,
      "rarity": "rare",
      "traits": [
        "bulwark",
        "invested",
        "magical"
      ],
      "description": "This +2 resilient Full Plate, crafted from grim plates of iron, covers the entire body except for small holes for the eyes and mouth.\nWhile wearing the armor, you gain the benefits of a Veil of Privacy spell. Additionally, creatures attempting to Recall Knowledge about a subject involving you must succeed at a check (will, dc:30). On a success, they can attempt the check normally. On a failure, they can still attempt the check, but even if they successfully Recall Knowledge, they don't remember you (although they might remember other details about the event). Creatures that fail their save can make another attempt to Recall Knowledge about you, but they must wait 24 hours to do so.\nYou can spend 1 hour using blacksmithing tools to bind a helpless Medium humanoid inside the suit, which welds the suit shut and makes it impossible to remove without breaking it (Hardness 9, HP 36, BT 18). The humanoid inside the suit counts as being Invested while bound in this fashion and can't break out of the suit on its own. If the suit is welded shut, the creature gains the benefits above but also the following penalties:\n• Whenever the humanoid attempts a Deception, Diplomacy, Intimidation, or Performance check, they must roll twice and use the worse result.\n• Additionally, creatures the humanoid encounters have an initial attitude toward them of one degree worse than they normally would (for instance, Unfriendly instead of Indifferent).\n• Good creatures are Enfeebled 2 while carrying, wielding, or wearing this item crafted by the sea-witches.\nCraft Requirements Supply a casting of Nondetection and Outcast's Curse.",
      "bulk": 3,
      "price": {
        "gp": 2500
      },
      "usage": "",
      "category": "heavy",
      "group": "plate",
      "armor": {
        "armorClassBonus": 6,
        "dexterityCap": 0,
        "checkPenalty": -3,
        "speedPenaltyFeet": -10
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:garrote-bolt",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "R8ZmXOfbfrp54VVB",
      "slug": "garrote-bolt",
      "publicationTitle": "Pathfinder #161: Belly of the Black Whale",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/ammunition/garrote-bolt.webp"
    },
    "sourceHash": "sha256:e1644b0a9876a501b9307c094a0b2982969eeb81ed01d4a92e4dfb78e372ca1e",
    "translatableHash": "sha256:47112d496fd58aa72973350658957543c4b33449e5583a9c5bbbf0dba55ac9ce",
    "data": {
      "schemaVersion": 1,
      "name": "Garrote Bolt",
      "itemType": "ammunition",
      "level": 15,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical"
      ],
      "description": "Activate 1 Interact\nThe shaft of this silver bolt is engraved with wiry designs.\nWhen a garrote bolt hits a target, it transforms into a silver garrote and wraps around one of the target's appendages, dealing an additional 2d12 persistent slashing damage. On a critical hit, it wraps around the target's throat, and the target can't breathe until the persistent damage ends.",
      "bulk": 0,
      "price": {
        "gp": 1200
      },
      "usage": "",
      "category": "ammo",
      "group": "ammo"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:fungal-armor",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "TJsmB2aHk9Yogqup",
      "slug": "fungal-armor",
      "publicationTitle": "Pathfinder #161: Belly of the Black Whale",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:8856d92695a63525489473d916c4ccaa3364cb100201987de484827be8db0994",
    "translatableHash": "sha256:bb53e5376bfb95053387b072bcaf346d5c82939a202ee5fa3aa03f3d89973c00",
    "data": {
      "schemaVersion": 1,
      "name": "Fungal Armor",
      "itemType": "armor",
      "level": 15,
      "rarity": "rare",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "This +2 greater resilient Studded Leather Armor is made of hardened fungus. Every day the armor grows dozens of unusual mushrooms that can be used for cooking, infused reagents, or common spell material components.\nActivate r or a Envision\nFrequency once per day\nTrigger You are hit by a melee, ranged, or spell attack\nEffect The attack misses you, dealing no damage as you transform into a cloud of spores. You gain the benefits of a Vapor Form spell for 1 minute.\nFor the duration, a cloud of deadly spores surrounds you. Each breathing creature that begins its turn within 10 feet of you takes 6d8 poison damage (check (fortitude, dc:35, basic, name:Fungal Armor Spores)).\nYou can Dismiss the cloud form.\nCraft Requirements Supply a casting of Toxic Cloud and gaseous form.",
      "bulk": 1,
      "price": {
        "gp": 7200
      },
      "usage": "",
      "category": "light",
      "group": "leather",
      "armor": {
        "armorClassBonus": 2,
        "dexterityCap": 3,
        "checkPenalty": -1,
        "speedPenaltyFeet": 0
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:miogimos-mask",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "y2nb4D6iQOoc5LEX",
      "slug": "miogimos-mask",
      "publicationTitle": "Pathfinder #161: Belly of the Black Whale",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/other-worn-items/miogimos-mask.webp"
    },
    "sourceHash": "sha256:04b765b549090c0b1a503750f6a3c147fa1219335665923e3e44612be0baf799",
    "translatableHash": "sha256:186f75d7d9fc3d055f3fb5373148379dc6db55690076748e1105440735494f39",
    "data": {
      "schemaVersion": 1,
      "name": "Miogimo's Mask",
      "itemType": "equipment",
      "level": 16,
      "rarity": "unique",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "The crime lord Miogimo almost always appears with this special mask, crafted with a piece of his soul.\nIt has two forms. In its first form, the mask depicts a silvery and angelic face; while wearing the mask in this form, your alignment appears as lawful good to creatures attempting to detect your alignment. In its second form, the mask depicts a gold-skinned demonic face; while wearing the mask in this form, your alignment appears as chaotic evil to creatures attempting to detect your alignment. If you die while wearing the mask, a fragment of your soul is trapped in the mask, forming a life link. If there was already a soul fragment in the mask when this happens, you roll a check (will) save against the Will DC of the person who left the previous fragment. If you succeed, your soul fragment replaces the old one. On a failure, you die normally.\nActivate 1 envision\nEffect You switch the mask to its other form.\nActivate 2 envision\nFrequency once per day\nEffect You cast Crisis of Faith (check (will, dc:34, name:Crisis of Faith, traits:divine,enchantment,mental)), targeting up to four creatures within 30 feet. If the mask is in its angelic form, you can target only evil and neutral creatures. If the mask is in its demonic form, you can target only good and neutral creatures.\nActivate 10 minutes (command, envision, Interact)\nRequirements A soul fragment is in the mask\nEffect You cast Talking Corpse on the soul fragment, except you communicate telepathically and don't require the fragment's body to speak.",
      "bulk": 0.1,
      "price": {
        "gp": 9500
      },
      "usage": "wornmask",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:gearblade",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "1AHntZrWzp5e31SX",
      "slug": "gearblade",
      "publicationTitle": "Pathfinder #161: Belly of the Black Whale",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/greatclub.webp"
    },
    "sourceHash": "sha256:77174548205ec665ac7ca40c16e995193e501848535f8f6efc359e441b4aa608",
    "translatableHash": "sha256:de73943462277cbada1a13e15fc0fce1db37fc251ac34ccf148cf17381ea7335",
    "data": {
      "schemaVersion": 1,
      "name": "Gearblade",
      "itemType": "weapon",
      "level": 17,
      "rarity": "rare",
      "traits": [
        "backswing",
        "clockwork",
        "invested",
        "shove"
      ],
      "description": "Shaped like a blade made from spinning gears, this +2 greater striking weapon can catch enemy weapons and grind up foes. In order to function, the gearblade must be wound for 10 minutes once every 24 hours. During this process, you can reconfigure the weapon to transform into a bastard sword, greatsword, longsword, or shortsword. It then gains all the features of the chosen weapon except that its Bulk is always 2 and it gains the disarm weapon trait and the versatile B weapon trait (which replaces any other versatile trait the weapon might have). If you don't wind the gearblade, it becomes inert and has the statistics of a greatclub.\nActivate 1 envision\nFrequency once per day\nRequirements You've wound the gearblade for 10 minutes within the last 24 hours\nTrigger You roll a critical success to Disarm a target with the gearblade\nEffect The target's weapon is pulled through the gearblade's gears and shoots out the other side, landing 20 feet away in a direction of your choice. The target must attempt a check (reflex, dc:36) save. On a failure, the limb holding their weapon is also pulled into the gearblade, and the creature takes 3d12 bludgeoning damage. On a critical failure, they take 6d12 bludgeoning damage and the limb becomes unusable until healed by a Regenerate spell or a similar effect.",
      "bulk": 2,
      "price": {
        "gp": 13000
      },
      "usage": "held-in-two-hands",
      "category": "martial",
      "group": "club",
      "damage": {
        "dice": 1,
        "die": "d10",
        "type": "bludgeoning"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:cauldron-of-nightmares",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "UvABdSnNZ9gr2IkF",
      "slug": "cauldron-of-nightmares",
      "publicationTitle": "Pathfinder #161: Belly of the Black Whale",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/held-items/cauldron-of-nightmares.webp"
    },
    "sourceHash": "sha256:fc94e21632d10dd4f5f13c0ea4917b8ba148691d011ddaa59064bd2673c83b8d",
    "translatableHash": "sha256:9aa5bd7911493a9678a4c4dd33d835c1314b7a2a70ead668f3688b1fe9ea106d",
    "data": {
      "schemaVersion": 1,
      "name": "Cauldron of Nightmares",
      "itemType": "equipment",
      "level": 17,
      "rarity": "rare",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "Engraved with carvings of tortured souls, this green cauldron has two abilities that allow it to capture nightmares and then unleash them on the world.\nThe cauldron has an affinity for preying on the minds of captives and prisoners, who take a -2 circumstance penalty to saving throws against it. Good creatures are Enfeebled 2 while carrying, wielding, or wearing this item crafted by the sea-witches.\nActivate a Interact\nFrequency once per day\nEffect The cauldron casts Nightmare (check (will, dc:35, name:Nightmare, traits:mental,arcane,occult)) on a target creature that you know by name. The target must be on the same plane as you. If the target fails its save and is 15th level or lower, you add its nightmare to the cauldron. The cauldron can hold only six nightmares at a time; when you add a new nightmare, you choose which six to keep.\nActivate 2 Interact\nFrequency once per week\nEffect You spill the nightmarish contents of the cauldron onto the ground and choose one creature whose nightmare is stored in your cauldron. A nightmare copy of the chosen creature springs to life from the bubbling pile of horror. The cauldron casts Duplicate Foe on the target, ignoring the range restriction, and the target automatically fails its saving throw. All enemies within 20 feet of the cauldron are subjected to a Fear spell (check (will, dc:35, name:Fear, traits:mental,emotion,fear,arcane,divine,occult,primal)). All other nightmares stored in the cauldron are lost. The cauldron becomes totally inert and can't be used again for 1 week.\nCraft Requirements Supply a casting of nightmare.",
      "bulk": 1,
      "price": {
        "gp": 13000
      },
      "usage": "held-in-two-hands",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:clockwork-helm",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "zJKEDSxn2lhPamKS",
      "slug": "clockwork-helm",
      "publicationTitle": "Pathfinder #161: Belly of the Black Whale",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:cef2b6303e7299ee297e84e478a845d42cecccfff0219b76c6be659e16f3ad89",
    "translatableHash": "sha256:3e381bdc77c7a051e2b3b70daebce4d319c16c56d7539f91802614c16431d2a4",
    "data": {
      "schemaVersion": 1,
      "name": "Clockwork Helm",
      "itemType": "equipment",
      "level": 17,
      "rarity": "rare",
      "traits": [
        "clockwork",
        "invested",
        "magical"
      ],
      "description": "Rotating gears cover the outside of this imposing helmet.\nIn order to function, the device must be wound for 10 minutes once every 24 hours. The clockwork helm has a calming and focusing effect on the mind. If you're affected by a detrimental condition caused by a mental or emotion effect, each round at the beginning of your turn, the gears of the helmet unwind and reduce the value of the condition by 1. This effect works only if the condition's value can normally be reduced by simply waiting; otherwise the helmet has no effect.\nActivate 2 envision\nFrequency once per day\nRequirements You've wound the clockwork helm for 10 minutes within the last 24 hours\nEffect You fire a beam of withering heat from the helmet's eye slits at a target. Make a spell or ranged attack roll (your choice) to affect the target. On a hit, the target takes 10d8 fire damage and is Drained 2.",
      "bulk": 0.1,
      "price": {
        "gp": 13000
      },
      "usage": "wornheadwear",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:clockwork-rejuvenator",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Ksz7kd6P9uKR8uLo",
      "slug": "clockwork-rejuvenator",
      "publicationTitle": "Pathfinder #161: Belly of the Black Whale",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:8e6bfcc6ec2a822e153bb87701705d06c34b69ee9c3a74dcf35f67828b1b467e",
    "translatableHash": "sha256:4fab88c5651dd07c845869ede1b7ff44ef90018d245ec8e523a5d3d098aded9a",
    "data": {
      "schemaVersion": 1,
      "name": "Clockwork Rejuvenator",
      "itemType": "consumable",
      "level": 18,
      "rarity": "rare",
      "traits": [
        "clockwork",
        "consumable",
        "magical"
      ],
      "description": "Activate 1 or 2 Interact\nRequirements The round you activate the rejuvenator, you must first spend either 1 or 2 Interact actions to wind the device.\nThis device has four finger-like latches centered around a whirring mass of gears.\nAfter winding the clockwork rejuvenator, you can latch it to the chest of an adjacent recently dead creature and return it to life. If you wound the rejuvenator using 1 Interact action, you can return to life a creature that died in the last 2 rounds, restoring it to 1 HP. If you wound the rejuvenator using 2 Interact actions, you can return to life a creature that died within the last 3 rounds. After attaching, the device continues to whirl for 1 minute, restoring 10 HP per round to the target. Thereafter, the clockwork rejuvenator loses its magic and becomes inert.",
      "bulk": 0.1,
      "price": {
        "gp": 4500
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:ring-of-recalcitrant-wishes",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "8htAYiRxpAmVn9uK",
      "slug": "ring-of-recalcitrant-wishes",
      "publicationTitle": "Pathfinder #162: Ruins of the Radiant Siege",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:707dd6aa28b3ebd1b7f3134ffc6425974b588014181fceebbe473c6b274a1827",
    "translatableHash": "sha256:007d9fcc5fb0bb21df762d0087b360f94ea2c4730c2d76525dc4771ecc9fbf2f",
    "data": {
      "schemaVersion": 1,
      "name": "Ring Of Recalcitrant Wishes",
      "itemType": "equipment",
      "level": 20,
      "rarity": "rare",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "This band of interwoven gold and copper, traced with Aklo symbols, is topped with a gleaming, luminescent opal gently bleeding wisps of shadowstuff.\nActivate 3 command\nEffect You attempt to make the ring cast an arcane Wish spell. However, if the ring doesn't deem the wish to be sufficiently selfless, the wish isn't cast and the ring can't be activated for 24 hours.\nYou are Drained 3, whether or not the ring refuses the wish.\nOnce the wish is cast, the Ring of Recalcitrant Wishes has no powers, though it is rumored that the wearer's death in an act of profound self-sacrifice restores the wish to the ring.",
      "bulk": 0,
      "price": {
        "gp": 10000
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:cane-of-the-maelstrom",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "h2UebueRKfVLwKOa",
      "slug": "cane-of-the-maelstrom",
      "publicationTitle": "Pathfinder #162: Ruins of the Radiant Siege",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:c5717d6ab9be75aa1282619cf86eed97e39f1f6ee7d766766d4147166240e98e",
    "translatableHash": "sha256:77c865c49a11b08b78c99fb4e971fd3c75b96dc0eb01c8f30061cabc7057ee18",
    "data": {
      "schemaVersion": 1,
      "name": "Cane of the Maelstrom",
      "itemType": "weapon",
      "level": 22,
      "rarity": "unique",
      "traits": [
        "artifact",
        "cursed",
        "divine",
        "thrown-10"
      ],
      "description": "A large crystal of warpglass floats above the head of this silvery purple +3 anarchic greater striking club. If you successfully Strike a creature, the cane also affects the target with a Warpwave.\nWhile you carry the cane, you hear a constant, distracting chorus of laughing, incoherent Protean whispers and sing-song voices in your mind. Blatant acts of self-indulgence or narcissism quell these whispers, from a few minutes up to a full day depending on the scope of the act, but they immediately return when you use the artifact's powers. The gradually rising chorus eventually drives away rational thought and renders the cane's owner insane, even if staved off from time to time with self-centered acts.\nAs the artifact's abilities pull material from the Maelstrom, it doesn't function in areas where planar connections are severed.\nActivate r envision\nTrigger You are targeted by a ranged attack from an opponent you can see\nEffect You draw a temporary shield of chaotic turbulence with a cerulean flash. You gain a +3 circumstance bonus to AC against the triggering attack.\nActivate 10 minutes (command, envision, Interact)\nEffect The Cane of the Maelstrom casts a 5th-rank Mirage spell and infuses the illusion with quasi-real substance drawn from the primal chaos of the Maelstrom. Creatures that don't disbelieve the illusion treat structures and terrain created through the spell as though they were real, ascending illusory stairs, becoming trapped by illusory quicksand, and so on. If no creature disbelieves the illusion during its duration, the changes become wholly real and permanent when its duration expires.\nActivate 1 minute (Interact)\nEffect The Cane of the Maelstrom casts a 5th-rank Creation spell, except the duration is unlimited and you can create delicate or complex objects by succeeding at an applicable Crafting skill check when you activate this ability.",
      "bulk": 0.1,
      "price": {},
      "usage": "held-in-one-hand",
      "category": "simple",
      "group": "club",
      "damage": {
        "dice": 1,
        "die": "d6",
        "type": "slashing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:radiant-spark",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "D836jcTlNR4PHgXS",
      "slug": "radiant-spark",
      "publicationTitle": "Pathfinder #162: Ruins of the Radiant Siege",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/held-items/radiant-spark.webp"
    },
    "sourceHash": "sha256:260317e19571007c3c19315ada6cb4b39fff8a14c23f971dc98b0c8b3944ea8f",
    "translatableHash": "sha256:76f4c36eef152f29cd3686c43a6243c28e506e7eaede06a57c7b5395fe708d83",
    "data": {
      "schemaVersion": 1,
      "name": "Radiant Spark",
      "itemType": "equipment",
      "level": 25,
      "rarity": "unique",
      "traits": [
        "artifact",
        "occult"
      ],
      "description": "This shining prism is bound within a golden frame. The bright glow within the artifact is the gleaming essence of celestials bound within it in ancient times. Each activation consumes a bit of this celestial energy, projecting the screams of the celestials into your mind.\nWhile holding the Radiant Spark, you gain a +2 item bonus to saving throws against divine spells and effects and you are aware of its powers.\nIf you are good, while holding the Radiant Spark, you are Sickened 3 and can't recover from this condition.\nActivate 2 envision, Interact\nEffect The Radiant Spark casts a 10th-rank Dominate spell (check (will, dc:49, name:Dominate, traits:enchantment,incapacitation,mental)) on a creature that isn't from the Material Plane. Celestials get an outcome one degree of success worse than the result of their save.\nActivate f envision\nTrigger You begin casting a Binding Circle ritual\nEffect The Radiant Spark reduces the casting time of the ritual to 1 hour, and you don't need secondary casters for this ritual.\nActivate r envision, Interact\nTrigger The target critically fails their save against the Radiant Spark's dominate spell or you critically succeed at binding the target with the planar binding ritual using the artifact\nEffect The target must attempt a check (will, dc:49) save and is immune to further attempts for 24 hours.\nCritical Success The target is unaffected.\nSuccess The target is Drained 2.\nFailure The target dies and its essence is trapped within the Radiant Spark. It can be brought back to life only with powerful magic such as Wish or Miracle.\nCritical Failure As failure, and the target can't be brought back to life until the Radiant Spark is destroyed.\nDestruction An archfiend or evil demigod must willingly swap their essence with that of a celestial dominated or bound by the artifact, then critically fail the saving throw against having their essence consumed. This permanently destroys both the artifact and the fiend or demigod.",
      "bulk": 0.1,
      "price": {},
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:skeptics-elixir-lesser",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "eHVZBmtzEcnsHSk8",
      "slug": "skeptics-elixir-lesser",
      "publicationTitle": "Pathfinder #163: Ruins of Gauntlight",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-elixirs/skeptics-elixir.webp"
    },
    "sourceHash": "sha256:f3e751b4e454b1cda45590b0deb5685c8cc7f48dc9ea493808156ae8dc832f8c",
    "translatableHash": "sha256:6587a119133b64fea74219fca85c2112260ac7a4fda47ddce5ad28a656e3f804",
    "data": {
      "schemaVersion": 1,
      "name": "Skeptic's Elixir (Lesser)",
      "itemType": "consumable",
      "level": 1,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "consumable",
        "elixir"
      ],
      "description": "Duration 1 minute\nActivate 1 Interact\nThis elixir sharpens your mind and allows you to see through lies, falsehoods, and magical trickery. You gain a +1 item bonus to Perception checks and Perception DCs to notice falsehoods, whether they're spoken lies or written deceit. You gain this same item bonus to Will saves.\nEffect: Skeptic's Elixir (Lesser)",
      "bulk": 0.1,
      "price": {
        "gp": 4
      },
      "usage": "held-in-one-hand",
      "category": "elixir",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:lantern-of-empty-light",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "WQ3yrHtv2fN5UO57",
      "slug": "lantern-of-empty-light",
      "publicationTitle": "Pathfinder #163: Ruins of Gauntlight",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/held-items/lantern-of-empty-light.webp"
    },
    "sourceHash": "sha256:28f4334d3fd4caf684d2c0300e17d561b387bdda1d199f6cf1e8905d564b0663",
    "translatableHash": "sha256:4b29fc31c2506096a2cedde4e31ce0c05251c6e098035770c15959e3031c290c",
    "data": {
      "schemaVersion": 1,
      "name": "Lantern of Empty Light",
      "itemType": "equipment",
      "level": 6,
      "rarity": "rare",
      "traits": [
        "magical"
      ],
      "description": "It's said that the pale blue light of this eldritch lantern shines from another dimension or even is linked, somehow, to the glow of a ghost when it is consumed by the Outer Goddess Nhimbaloth. A lantern of empty light is not intrinsically an evil item, though it remains a favored tool of those who would manipulate the minds of others for sinister reasons. It can be used as a normal bull's-eye lantern, but prolonged use tends to instill in the user a vague sense of being watched by unseen eyes.\nActivate 2 Interact (emotion, visual)\nFrequency once per day\nEffect You direct the lantern's light upon a single living creature within 60 feet. That creature must attempt a check (will, dc:20, traits:damaging-effect) save to resist the light's effects.\nCritical Success The creature is unaffected and realizes that you attempted to mentally influence them with the light.\nSuccess The creature is unaffected but thinks the light was harmless, unless it knows the true nature of the lantern already.\nFailure The creature becomes Fascinated by the lantern's light, and remains fascinated as long as you Sustain the Activation, up to 10 minutes.\nCritical Failure As failure, but you can Sustain the Activation for up to 1 hour. When the effect ends, the fascinated creature remembers any events that took place while fascinated only as indistinct, dream-like memories.\nActivate 2 Interact\nFrequency once per day\nEffect You direct the lantern's light upon a single incorporeal undead creature within 60 feet to siphon away some of the creature's essence, dealing 4d8 vitality damage to the creature (check (will, dc:20, basic) save).",
      "bulk": 1,
      "price": {
        "gp": 240
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:skeptics-elixir-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "xGmX6Vuuhivyal8v",
      "slug": "skeptics-elixir-moderate",
      "publicationTitle": "Pathfinder #163: Ruins of Gauntlight",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-elixirs/skeptics-elixir.webp"
    },
    "sourceHash": "sha256:010c0f4ae00a922634b81b40bc1bd60da270b52d059c904ba2942ee397206b1e",
    "translatableHash": "sha256:4de9bcea747431839e35e346876decd3ff66ae48aa52a180b6db911ad95a1e17",
    "data": {
      "schemaVersion": 1,
      "name": "Skeptic's Elixir (Moderate)",
      "itemType": "consumable",
      "level": 6,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "consumable",
        "elixir"
      ],
      "description": "Duration 10 minute\nActivate 1 Interact\nThis elixir sharpens your mind and allows you to see through lies, falsehoods, and magical trickery. You gain a +2 item bonus to Perception checks and Perception DCs to notice falsehoods, whether they're spoken lies or written deceit. You gain this same item bonus to Will saves.\nEffect: Skeptic's Elixir (Moderate)",
      "bulk": 0.1,
      "price": {
        "gp": 50
      },
      "usage": "held-in-one-hand",
      "category": "elixir",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:the-whispering-reeds",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "QT1jTPlf3ATYUh4I",
      "slug": "the-whispering-reeds",
      "publicationTitle": "Pathfinder #163: Ruins of Gauntlight",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/artifacts/the-whispering-reeds.webp"
    },
    "sourceHash": "sha256:bb70a9836b62d22ee1b507a491dcc5caeb4f17f7a7732d7f20e2ee432f69d743",
    "translatableHash": "sha256:ae1ff049f6977f045e2a35670bbb79dacb06d230ddf9e8cd9ce7e0bc519bc2a2",
    "data": {
      "schemaVersion": 1,
      "name": "The Whispering Reeds",
      "itemType": "equipment",
      "level": 10,
      "rarity": "rare",
      "traits": [
        "artifact",
        "occult"
      ],
      "description": "This hefty tome was compiled centuries ago by an anonymous author who sought to collect all parables, myths, stories, and encounters with the Outer Goddess Nhimbaloth. According to the introduction, the author's original intent was to create a work that foes of the Empty Death could use to fight against her influence, but as one reads through the book, it becomes apparent that the opposite effect has been achieved—by compiling these stories, the author inadvertently generated a work that made it easier for Nhimbaloth to influence the world. Those who venerate the Empty Death seek copies of this book to use as a guide and religious text, while those who don't know better and peruse the book as though it were merely an anthology of stories find themselves unwittingly falling prey to Nhimbaloth's cult or agents of the entity herself. Those who study from The Whispering Reeds for too long are often cursed to rise as ghosts after death—though their existence never lasts for long, as they are inevitably consumed by Nhimbaloth.\nThe anonymous compiler wanted to produce an enormous print run of The Whispering Reeds, but after the initial run they realized the danger and scuttled those plans, instead attempting to destroy those copies already created. This crusade caught the attention of Nhimbaloth's cult, who swiftly assassinated the compiler. Fewer than two dozen copies of this rare tome are believed to still exist. The book's sinister nature causes all attempts to transcribe it to fail, resulting in bodies of gibberish, nonsense text.\nThe Whispering Reeds provides several abilities, but you can't activate any of them while you are Stupefied unless you are a follower of Nhimbaloth.\nActivate 10 minutes (Investigate)\nEffect You gain a +2 item bonus to skill checks to Recall Knowledge about Nhimbaloth, her faith, or creatures associated with her (such as incorporeal undead, vampiric mists, wisps, and other incorporeal creatures associated with death).\nActivate 2 command, Interact\nFrequency once per hour\nEffect You read aloud a phrase from the book and target a single incorporeal undead creature within 30 feet. That undead creature takes 5d6 vitality damage (check (will, dc:27, basic) save) as portions of their incorporeal being are consumed in patches of seven equally spaced holes.\nActivate 1 command, Interact\nFrequency once per day\nEffect You invoke a tale from The Whispering Reeds that parallels the situation, environment, or creatures nearby. Eerie mists and indistinct whispers rise in a 20-foot emanation around you, and clusters of seven perfectly spaced divots manifest in the ground, vegetation, and flesh of creatures in the emanation other than yourself and up to three creatures you designate at the time of activation. Creatures afflicted with these divots suffer from agonizing mental anguish in the form of crippling despair and take 4d6 mental damage (check (will, dc:27, basic) save). The mists, whispers, and strange divots fade away at the end of the round, but any creature that takes mental damage from the effect also takes a -1 penalty to saving throws against effects with the emotion trait for 1 minute.\nActivate Cast a Spell\nFrequency three times per day\nEffect You cast one of the following spells at the lowest level possible (unless otherwise specified): Wave of Despair (one target within 30 feet only), Fear (3rd), Paranoia, or Phantasmal Killer.",
      "bulk": 2,
      "price": {},
      "usage": "held-in-two-hands",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:skeptics-elixir-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "SjbenbdzV4rgGxZP",
      "slug": "skeptics-elixir-greater",
      "publicationTitle": "Pathfinder #163: Ruins of Gauntlight",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-elixirs/skeptics-elixir.webp"
    },
    "sourceHash": "sha256:41bcce3ac5bdcd684fca4ffbc55a1529c4bf75ab6459777ec66712a3c4939a1f",
    "translatableHash": "sha256:e5ec9af46d1e971d8100c25c22c363aaf13840eb0778c7be296cbeadc0426ee6",
    "data": {
      "schemaVersion": 1,
      "name": "Skeptic's Elixir (Greater)",
      "itemType": "consumable",
      "level": 11,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "consumable",
        "elixir"
      ],
      "description": "Duration 1 hour\nActivate 1 Interact\nThis elixir sharpens your mind and allows you to see through lies, falsehoods, and magical trickery. You gain a +3 item bonus to Perception checks and Perception DCs to notice falsehoods, whether they're spoken lies or written deceit. You gain this same item bonus to Will saves.\nEffect: Skeptic's Elixir (Greater)",
      "bulk": 0.1,
      "price": {
        "gp": 300
      },
      "usage": "held-in-one-hand",
      "category": "elixir",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:gauntlight",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Y12bRscT79LCpz4k",
      "slug": "gauntlight",
      "publicationTitle": "Pathfinder #163: Ruins of Gauntlight",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:1945600f010c889f9f516acdd18a2e0097b194d9197c111e7dbfa0c29589c750",
    "translatableHash": "sha256:f24587f5248d61e18b67b17769dcc9d52c81e6ba8dea3b389eeaaa3d233fdbea",
    "data": {
      "schemaVersion": 1,
      "name": "Gauntlight",
      "itemType": "equipment",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "artifact",
        "magical"
      ],
      "description": "",
      "bulk": 0,
      "price": {},
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:thresholds-of-truth",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "HEtJeLXMcMbgamxd",
      "slug": "thresholds-of-truth",
      "publicationTitle": "Pathfinder #164: Hands of the Devil",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:eed2a7cd2c94484fee8cad3701805f9a2a0b10f7fa3f805dc76d340db51e8685",
    "translatableHash": "sha256:3b3341d7e6a1b696b7906fd6082ac8bcd84e18b4c6edb64c9a6528368f994380",
    "data": {
      "schemaVersion": 1,
      "name": "Thresholds of Truth",
      "itemType": "equipment",
      "level": 0,
      "rarity": "unique",
      "traits": [],
      "description": "Zarmavdian's spellbook, Thresholds of Truth, was once a straightforward treatise on arcane and occult lore containing several useful spells. It's been so heavily annotated, however, that the original text is hard to read. It's clear that Zarmavdian wanted to prevent eldritch creatures from manipulating innocent minds, but his spellbook is a treasure trove for those seeking dangerous or inscrutable lore. The bookseller Morlibint currently keeps this book in his collection at Odd Stories.\nThresholds of Truth provides access to the Eldritch Researcher archetype and contains the following spells:\nCantrips\n• Void Warp\n• Light\n• Daze\n• Detect Magic\n• Electric Arc\n• Ghost Sound\n• Telekinetic Hand\n• Light\n• Prestidigitation\n• Read Aura\n• Shield\n1st Level\n• Alarm\n• Charm\n• Dizzying Colors\n• Mystic Armor\n• Force Barrage\n• Sure Strike\n• Phantasmal Minion\n2nd Level\n• Translate\n• Dispel Magic\n• False Vitality\n• Revealing Light\n• Web\n3rd Level\n• Haste\n• Lightning Bolt\n• Locate\n• Paralyze\n• Slow\n4th Level\n• Clairvoyance\n• Daydreamer's Curse\n• Containment",
      "bulk": 0.1,
      "price": {},
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:tamchal-chakram",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "kedgBVNDRAdmseRe",
      "slug": "tamchal-chakram",
      "publicationTitle": "Pathfinder #164: Hands of the Devil",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/tamchal-chakram.webp"
    },
    "sourceHash": "sha256:7543a72ce72eed756021974dbbe81e91f4cec451f7c3714ca4b795d4feae9e5b",
    "translatableHash": "sha256:2bc90b00462ff6d1afe63b60c10270d4909981f1c136c0f0496496871af1a82b",
    "data": {
      "schemaVersion": 1,
      "name": "Tamchal Chakram",
      "itemType": "weapon",
      "level": 0,
      "rarity": "uncommon",
      "traits": [
        "agile",
        "deadly-d6",
        "finesse",
        "thrown-20"
      ],
      "description": "These circular weapons are among the many strange weapons used by urdefhans. The sharp metal circle contains numerous protruding blades, while an angled central handle provides a decent grip that spins the weapon as it's thrown.",
      "bulk": 0.1,
      "price": {
        "gp": 5
      },
      "usage": "held-in-one-hand",
      "category": "advanced",
      "group": "dart",
      "damage": {
        "dice": 1,
        "die": "d6",
        "type": "slashing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:devils-luck",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "y0cRr28w57VapTcn",
      "slug": "devils-luck",
      "publicationTitle": "Pathfinder #164: Hands of the Devil",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/contracts/infernal-contracts/devils_luck.webp"
    },
    "sourceHash": "sha256:2bc2da4feba5fae72de80ce5715b1b7881748569af924d706815de9bdaec5441",
    "translatableHash": "sha256:6242c280076e6ce49a8c24a1eb76820f2c82e56972e2f219694f2ce9ebc424e0",
    "data": {
      "schemaVersion": 1,
      "name": "Devil's Luck",
      "itemType": "equipment",
      "level": 3,
      "rarity": "rare",
      "traits": [
        "contract",
        "fortune",
        "invested",
        "magical"
      ],
      "description": "Devil Imp\nDecipher Writing Arcana, Occultism, Society\nYou've bargained with an imp, one of the least powerful devils, for a fragment of infernal luck.\nBenefit Once per day, you can roll a saving throw twice and use the higher result.\nPayment At the termination of your mortal life, your soul must serve the imp for 100 years.\nHidden Condition The \"termination of mortal life\" clause is carefully worded to hasten your demise. You can't use the benefit against a death effect, and if you roll a failure on a saving throw against a death effect, you get a critical failure instead.\nTermination Clause If you critically fail a saving throw against a death effect and do not die, the contract becomes unenforceable on its terms and is voided.",
      "bulk": 0,
      "price": {},
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:hunters-brooch",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "4ObrlZ5GhCPA2E2s",
      "slug": "hunters-brooch",
      "publicationTitle": "Pathfinder #164: Hands of the Devil",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/other-worn-items/hunterss-brooch.webp"
    },
    "sourceHash": "sha256:f52b0d3af7acb14bff4056b1855b598505e0ba90fe9f5bdb38a1f8b09c7f8af1",
    "translatableHash": "sha256:0065bcca274dca648cbf57808eedc83c00d89b556fb2ab4e35c5cf9bc9531897",
    "data": {
      "schemaVersion": 1,
      "name": "Hunter's Brooch",
      "itemType": "equipment",
      "level": 4,
      "rarity": "unique",
      "traits": [
        "divine",
        "invested",
        "vitality"
      ],
      "description": "While wearing this silver religious symbol of Erastil, you can cast the Vitality Lash cantrip as an innate divine spell.\nActivate 3 command, Interact\nFrequency once per day\nEffect By touching a weapon you wield to the symbol and uttering a plea for Erastil's steadying hand, you grant that weapon the deadly d12 trait. Against undead, the weapon instead gains the fatal d12 trait. This blessing lasts for 1 minute, until you score a critical hit with the weapon, or until you aren't wielding the weapon.\nEffect: Hunter's Brooch",
      "bulk": 0.1,
      "price": {
        "gp": 80
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:folding-drums",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "QOUjYRxXHvwMkGAw",
      "slug": "folding-drums",
      "publicationTitle": "Pathfinder #164: Hands of the Devil",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/held-items/folding_drums.webp"
    },
    "sourceHash": "sha256:5549e7aaed110e944c66e41866b732803046fe94050e6a4b245cd140628c948a",
    "translatableHash": "sha256:f448f4501a66adf2353d8b457970714dd49983333c9fa2284a19cc6535b2b9cf",
    "data": {
      "schemaVersion": 1,
      "name": "Folding Drums",
      "itemType": "equipment",
      "level": 5,
      "rarity": "uncommon",
      "traits": [
        "magical"
      ],
      "description": "You can unfold this virtuoso percussion instrument into a hand drum (1 Bulk), a marching drum set with a shoulder harness and back brace (3 Bulk), or a large standing drum set with a built-in stool (16 Bulk). Changing the folding drum's size is a 3-action Interact activity, and the drums must have sufficient open space to accommodate their new size.\nActivate 1 Interact (concentrate)\nFrequency once per hour\nEffect You play a pounding rhythm on the drum. If the next action you use is to cast a composition cantrip that has an emanation, increase the area of the emanation by 30 feet.",
      "bulk": 1,
      "price": {
        "gp": 160
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:ichthyosis-mutagen",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "uwVTuejjSLl82jiA",
      "slug": "ichthyosis-mutagen",
      "publicationTitle": "Pathfinder #164: Hands of the Devil",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-elixirs/ichthyosis-mutagen.webp"
    },
    "sourceHash": "sha256:04348cfc9e32be1add1e86bf7a8a396e36417efa317957d35b4fed27bb08d85e",
    "translatableHash": "sha256:13f5a3fa5c3bc731c0b1e5f495bedc9318812dcc4f8bd629b4cd645163aa688b",
    "data": {
      "schemaVersion": 1,
      "name": "Ichthyosis Mutagen",
      "itemType": "consumable",
      "level": 5,
      "rarity": "rare",
      "traits": [
        "alchemical",
        "consumable",
        "elixir",
        "mutagen",
        "polymorph"
      ],
      "description": "Activate 1 Interact\nAfter you drink this mutagen, your skin continually renews itself, thickening into large, scaly patches.\nBenefit For 1 minute, you gain fast healing 2 and automatically succeed at flat checks to recover from persistent bleed damage.\nDrawback Your thickened skin makes quick movement difficult, and your excess skin flakes off with the slightest movement. You take a -2 penalty to Reflex saves for 1 minute. Any creature attempting to Track you in the next 24 hours gains a +4 circumstance bonus to their check.\nEffect: Ichthyosis Mutagen",
      "bulk": 0.1,
      "price": {
        "gp": 24
      },
      "usage": "held-in-one-hand",
      "category": "mutagen",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:pact-of-blood-taking",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "wJOW9YfEp5RDYHc1",
      "slug": "pact-of-blood-taking",
      "publicationTitle": "Pathfinder #164: Hands of the Devil",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/contracts/infernal-contracts/pact-of-blood-taking.webp"
    },
    "sourceHash": "sha256:d8f9fcb99e941c93d044a83d72b86037367fbd2a9c0daaa6623da4575cfc813a",
    "translatableHash": "sha256:8d3a3369e03d672d2b40102a9f8b1dc041bbfe5120e9b19b4879babdd9895d28",
    "data": {
      "schemaVersion": 1,
      "name": "Pact of Blood-Taking",
      "itemType": "equipment",
      "level": 5,
      "rarity": "rare",
      "traits": [
        "contract",
        "invested",
        "magical"
      ],
      "description": "Devil Barbazu\nDecipher Writing Society, Warfare Lore\nYou negotiate for might and viciousness.\nBenefit Your successful Strikes with slashing and piercing melee weapons deal 1 persistent bleed damage. On a critical success, this persistent bleed damage is equal to half your level.\nPayment You regain half the normal number of Hit Points from resting (including Hit Points gained from long-term rest) and from any application of the Medicine skill.\nHidden Condition The barbazu owns any weapons you find. No more often than once per month, the barbazu can demand a single weapon of its choice (often the best weapon in your possession). You are compelled to hand over the weapon immediately, without question.\nTermination Clause The contract guarantees that you will not \"be slain by the barbazu or by barbazu action.\" This wording is vague; if any barbazu kills you, or if you die from persistent bleed damage from any source, the contract is voided.",
      "bulk": 0,
      "price": {},
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:cooperative-blade",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "KXoJIPHbdz746Rec",
      "slug": "cooperative-blade",
      "publicationTitle": "Pathfinder #164: Hands of the Devil",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/specific-magic-weapons/cooperative-blade.webp"
    },
    "sourceHash": "sha256:d869905f5ce59846084e0016fdff2239a2c613b9d22bf39b7807bdc5fcd49931",
    "translatableHash": "sha256:d938d8a48a8c461b3000809f608c9b7b3d25f1595d50d6552c60c870b98cabed",
    "data": {
      "schemaVersion": 1,
      "name": "Cooperative Blade",
      "itemType": "weapon",
      "level": 6,
      "rarity": "unique",
      "traits": [
        "versatile-p"
      ],
      "description": "This +1 striking longsword has a mirror-like blade free of tarnish despite being millennia old.\nWhile wielding it, you gain a +2 item bonus to checks to Aid. If you're an expert with the skill or attack roll you're using to Aid and you critically succeed, you grant your ally a +3 circumstance bonus to the triggering check instead of a +2 bonus.",
      "bulk": 1,
      "price": {
        "gp": 250
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "sword",
      "damage": {
        "dice": 1,
        "die": "d8",
        "type": "slashing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:drovers-band",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "hBGFCZbI9nAjSdfE",
      "slug": "drovers-band",
      "publicationTitle": "Pathfinder #164: Hands of the Devil",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/other-worn-items/droverss_band.webp"
    },
    "sourceHash": "sha256:2e27878a3e1872c90acdcdbd7f0d82c6d8453ab267fabad3cba3284cc330b7f7",
    "translatableHash": "sha256:faaee39a995940f812b7b4f48396fe4960f3a0a3bf1edb0db29bc0a5db1ecf3a",
    "data": {
      "schemaVersion": 1,
      "name": "Drover's Band",
      "itemType": "equipment",
      "level": 7,
      "rarity": "rare",
      "traits": [
        "incapacitation",
        "invested",
        "magical"
      ],
      "description": "This black leather wrist guard has a bright red gem on the inside of the wrist. Faint glyphs and words of domination in Infernal swim inside the gem. Your words become harsh and clipped when you have this magic item invested.\nActivate 3 command\nFrequency once per day\nEffect You exert your will over a mindless creature within 30 feet. If the target is a mindless creature of 3rd level or lower, it must attempt a check (will, dc:20) save. If you are a devil, the target uses an outcome one degree of success worse than the result of its saving throw.\nCritical Success The target creature is unaffected.\nSuccess The target creature is Slowed 1 for 1 round as its responses are muddled by your commands.\nFailure The creature is Controlled by you for 1 hour, although it doesn't follow commands that are obviously self-destructive.\nCritical Failure As failure, but the duration is 1 day.",
      "bulk": 0.1,
      "price": {
        "gp": 675
      },
      "usage": "wornbracers",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:sloughing-toxin",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "JvpiniS6wTHsDoFX",
      "slug": "sloughing-toxin",
      "publicationTitle": "Pathfinder #164: Hands of the Devil",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-poisons/sloughing-toxin.webp"
    },
    "sourceHash": "sha256:641f9b368d7920481ed439ca157dcef631b578fc05d1c8cf74bbc6bd75e29b51",
    "translatableHash": "sha256:f4ea87f5589d4bad12c2d7f0b8a2a4c6e3538a6d7db9974d270a9d38dd696de8",
    "data": {
      "schemaVersion": 1,
      "name": "Sloughing Toxin",
      "itemType": "consumable",
      "level": 7,
      "rarity": "rare",
      "traits": [
        "alchemical",
        "consumable",
        "injury",
        "poison"
      ],
      "description": "Activate 2 Interact\nThis complex toxin makes the muscles beneath a creature's skin loose and malleable, which fleshwarpers find useful in their work. Rough or jerky movements the victim performs concentrate the toxin in subdermal muscles and eventually cause skin and muscle to slough away.\nSaving Throw check (fortitude, dc:25)\nOnset 1 round\nMaximum Duration 1 hour\nStage 1 1d6 poison damage for each action with the attack or move trait the victim uses (1 round)\nStage 2 1d6 poison damage and 1d6 slashing damage for each action with the attack, manipulate, or move trait the victim uses (1 round)\nStage 3 as Stage 2, but 1d6 poison damage and 2d6 slashing damage, and forced movement also causes damage (1 hour)",
      "bulk": 0.1,
      "price": {
        "gp": 60
      },
      "usage": "held-in-two-hands",
      "category": "poison",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:right-of-retribution",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "XgO0MTOXdpbfdzr6",
      "slug": "right-of-retribution",
      "publicationTitle": "Pathfinder #164: Hands of the Devil",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/contracts/infernal-contracts/right-of-retribution.webp"
    },
    "sourceHash": "sha256:d8f75a210aac118e71adfe4edd50e7a52ba7f16c98cec98cd93b0c739df90609",
    "translatableHash": "sha256:7780f7ff0d5ab5fcc852fc61ca0b50b7704adf23f5a9e1abfd165ffe466dae8b",
    "data": {
      "schemaVersion": 1,
      "name": "Right of Retribution",
      "itemType": "equipment",
      "level": 8,
      "rarity": "rare",
      "traits": [
        "contract",
        "invested",
        "magical"
      ],
      "description": "Devil Erinys\nDecipher Writing Nature, Religion\nProfane powers of vengeance are yours to inflict.\nBenefit When a creature deals damage to you, you can call out for retribution as a reaction. Until the end of your next turn, you gain a +1 status bonus to attack rolls against that creature.\nPayment If you wound a creature, it is your duty to kill it. If a creature survives for 24 hours after you deal it damage, you are Doomed 1. If you already have the doomed condition, it increases by 1.\nHidden Condition No more than once per year, the erinys can compel you to attack a creature of the erinys's choice that you can see. You are Controlled by the erinys and must fight the chosen creature for 1 minute.\nTermination Clause The contract demands that you enact bloody vengeance against anyone who has ever wronged you, but the nature of the vengeance is vague. You can end the contract by creating effigies of everyone you believe has ever wronged you, bleeding upon them all at once (at least 1 Hit Point per effigy), and destroying them.",
      "bulk": 0,
      "price": {},
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:icy-disposition",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "ibA3FykNQcoEPfPC",
      "slug": "icy-disposition",
      "publicationTitle": "Pathfinder #164: Hands of the Devil",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/contracts/infernal-contracts/icy-disposition.webp"
    },
    "sourceHash": "sha256:6de5cfd87ae4c5af89cbeac24f54f89f15a300a356335752b73030ffec371979",
    "translatableHash": "sha256:f6303b31bbb07ab5738057e9dad2d2eaadf7fb1847456415116fc9d5f021a691",
    "data": {
      "schemaVersion": 1,
      "name": "Icy Disposition",
      "itemType": "equipment",
      "level": 11,
      "rarity": "rare",
      "traits": [
        "contract",
        "invested",
        "magical"
      ],
      "description": "Devil Gelugon\nDecipher Writing Nature, Games Lore\nYour flesh looks no different, but is cold to the touch.\nBenefit You gain cold resistance equal to your level and a +1 status bonus to saving throws against mental effects.\nPayment Liquids in your possession, including potions and liquid alchemical items, freeze over the course of 1 minute and thaw 1 minute after they leave your possession. Frozen potions and elixirs take 1 minute to consume.\nHidden Condition (conjuration, teleportation) No more than once per week, the gelugon can move you like a piece on a game board to advance its schemes. The gelugon can appear and transport you and any items you're wearing and holding from your current space to a clear space within 500 feet (the gelugon need not see this location, but must know its relative location and distance from you). This effect doesn't transport any other creatures. The gelugon is unlikely to place you in a less dangerous space than the one you left.\nTermination Clause The contract provides you the benefits of \"the eternal ice of Cocytus.\" If you travel to Cocytus, Hell's seventh layer, and stand within an area at least 100 feet across that contains no ice and has a temperature above freezing, the contract is void. Such locations are exceptionally rare in Cocytus, and the efforts to create such an area are likely to attract unpleasant attention.",
      "bulk": 0,
      "price": {},
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:shauth-blade",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "jkYn89XREERA3V2e",
      "slug": "shauth-blade",
      "publicationTitle": "Pathfinder #165: Eyes of Empty Death",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/shauth-blade.webp"
    },
    "sourceHash": "sha256:6cd11aa221fad108897f2bb3416099b2fdeaa2b3bad5f40e309f20e2a6712ec3",
    "translatableHash": "sha256:19c42401c5e93c8dac0f723ef5f150cf2b8b63b34037f2742599fcec8cd13a74",
    "data": {
      "schemaVersion": 1,
      "name": "Shauth Blade",
      "itemType": "weapon",
      "level": 0,
      "rarity": "uncommon",
      "traits": [
        "agile",
        "deadly-d8",
        "finesse",
        "versatile-p"
      ],
      "description": "These strange curved blades are jagged and deadly weapons made from the alchemically strengthened teeth of dead urdefhans. Each weapon is typically named for the urdefhan whose teeth were forged into the weapon, which are often carried (and revered) by that urdefhan's descendants. Magical shauth blades allow an urdefhan wielder to channel their Wicked Bite ability through shauth blade Strikes.",
      "bulk": 0.1,
      "price": {
        "gp": 2
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "knife",
      "damage": {
        "dice": 1,
        "die": "d4",
        "type": "slashing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:rhoka-sword",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "k8V3wTG1gMU5ksUr",
      "slug": "rhoka-sword",
      "publicationTitle": "Pathfinder #165: Eyes of Empty Death",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/rhoka-sword.webp"
    },
    "sourceHash": "sha256:6e0fc48a689d0199fa05267c58b843f5467db8a9bbdb51774e0d463c65d2c5c3",
    "translatableHash": "sha256:b78473b4c96c9a6f87fa052234591eb7333a1e1ea9ce9a3212790f288839b959",
    "data": {
      "schemaVersion": 1,
      "name": "Rhoka Sword",
      "itemType": "weapon",
      "level": 0,
      "rarity": "uncommon",
      "traits": [
        "deadly-d8",
        "two-hand-d10"
      ],
      "description": "The rhoka sword is the preferred weapon of urdefhan soldiers, though all urdefhans know how to wield these instruments of war.",
      "bulk": 2,
      "price": {
        "gp": 4
      },
      "usage": "held-in-one-hand",
      "category": "advanced",
      "group": "sword",
      "damage": {
        "dice": 1,
        "die": "d8",
        "type": "slashing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:shootist-bandolier",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "oJZe5rRitvioUgRh",
      "slug": "shootist-bandolier",
      "publicationTitle": "Pathfinder #165: Eyes of Empty Death",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/adventuring-gear/shootist-bandolier.webp"
    },
    "sourceHash": "sha256:01d3a40d6032075ecb9ecd20e01b6ca31f66d066b2abbd72ab08256d41fc479f",
    "translatableHash": "sha256:40181cb6370dfccd5682cb85bef6476261fd29c4e7000323a6ae720c9559131a",
    "data": {
      "schemaVersion": 1,
      "name": "Shootist Bandolier",
      "itemType": "equipment",
      "level": 0,
      "rarity": "uncommon",
      "traits": [],
      "description": "This leather bandolier holds up to three Repeating Hand Crossbow Magazines in leather pockets that pop open with the quick flick of a thumb. You reduce the reload time for a repeating hand crossbow magazine from the bandolier by 1, to a total of 2 actions. You can wear only one shootist bandolier at a time.",
      "bulk": 0,
      "price": {
        "gp": 1
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:shauth-lash",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "WiPcevdeD4YoTLRa",
      "slug": "shauth-lash",
      "publicationTitle": "Pathfinder #165: Eyes of Empty Death",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/shauth-lash.webp"
    },
    "sourceHash": "sha256:4467d1e261a0106106e7ee855a9f457ee7d772bf1cd9741bfeb7b361a2ef5576",
    "translatableHash": "sha256:0baad9aea9c0ed80038c69504fd16abc730186fe94a1fcb75c5cd80f5c8d12c6",
    "data": {
      "schemaVersion": 1,
      "name": "Shauth Lash",
      "itemType": "weapon",
      "level": 0,
      "rarity": "uncommon",
      "traits": [
        "deadly-d10",
        "finesse",
        "trip"
      ],
      "description": "This metal chain bears hook-like barbs made of alchemically strengthened urdefhan teeth. Magical shauth lashes have the same ability to channel an urdefhan wielder's Wicked Bite as magical shauth blades, and urdefhans hold these weapons with the same reverence as they do shauth blades.",
      "bulk": 1,
      "price": {
        "gp": 8
      },
      "usage": "held-in-two-hands",
      "category": "advanced",
      "group": "flail",
      "damage": {
        "dice": 1,
        "die": "d6",
        "type": "slashing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:necrotic-bomb-lesser",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "8JnOYyTdatqRnAV4",
      "slug": "necrotic-bomb-lesser",
      "publicationTitle": "Pathfinder #165: Eyes of Empty Death",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-bombs/necrotic-bomb.webp"
    },
    "sourceHash": "sha256:6896bb92cc8c40d9dcceef59a0778915d92307d13505243e76300bbd6bda7ed8",
    "translatableHash": "sha256:1e308e0f6b5a1df47a1d8f86a9fc8458e9a980d5965846a9da96bd61005189cd",
    "data": {
      "schemaVersion": 1,
      "name": "Necrotic Bomb (Lesser)",
      "itemType": "weapon",
      "level": 1,
      "rarity": "common",
      "traits": [
        "alchemical",
        "bomb",
        "consumable",
        "splash",
        "void"
      ],
      "description": "Activate 1 Strike\nNecrotic bombs combine reagents most people consider disgusting at best and unholy at worst, creating a life-sucking miasma upon contact with air. A necrotic bomb deals the listed void damage and splash damage, and it sickens the primary target on a critical hit. This damage harms only living creatures.\nThe bomb deals 1d6 void damage and 1 void splash damage. On a critical hit, the target is Sickened 1.",
      "bulk": 0.1,
      "price": {
        "gp": 3
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "bomb",
      "damage": {
        "dice": 1,
        "die": "d6",
        "type": "void"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:necrotic-bomb-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "moBSgma1rtJqh7Rp",
      "slug": "necrotic-bomb-moderate",
      "publicationTitle": "Pathfinder #165: Eyes of Empty Death",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-bombs/necrotic-bomb.webp"
    },
    "sourceHash": "sha256:f555a87a631db95498e58b1f21ecb07726f220609d264c4f53bc800546fe5661",
    "translatableHash": "sha256:208aedc736c78740fd640579a20c942a6e71a000a2fe77547b1f48a4dd7de521",
    "data": {
      "schemaVersion": 1,
      "name": "Necrotic Bomb (Moderate)",
      "itemType": "weapon",
      "level": 3,
      "rarity": "common",
      "traits": [
        "alchemical",
        "bomb",
        "consumable",
        "splash",
        "void"
      ],
      "description": "Activate 1 Strike\nNecrotic bombs combine reagents most people consider disgusting at best and unholy at worst, creating a life-sucking miasma upon contact with air. A necrotic bomb deals the listed void damage and splash damage, and it sickens the primary target on a critical hit. This damage harms only living creatures.\nYou gain a +1 item bonus to attack rolls.\nThe bomb deals 2d6 void damage and 2 void splash damage. On a critical hit, the target is Sickened 2.",
      "bulk": 0.1,
      "price": {
        "gp": 10
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "bomb",
      "damage": {
        "dice": 2,
        "die": "d6",
        "type": "void"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:fungal-walk-musk",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "JgZIWU1KaVL2pnAr",
      "slug": "fungal-walk-musk",
      "publicationTitle": "Pathfinder #165: Eyes of Empty Death",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-tools/fungal-walk-musk.webp"
    },
    "sourceHash": "sha256:ff2674e54dfb54d8c1bc2b6a79557251cf25dd56e9fcb26cee1ed33c256c7d72",
    "translatableHash": "sha256:9236db303fd2252890b986d8960c9e1a3841bcbf09ca2a053e282af1bd213b97",
    "data": {
      "schemaVersion": 1,
      "name": "Fungal Walk Musk",
      "itemType": "consumable",
      "level": 5,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "olfactory"
      ],
      "description": "Activate 1 Interact\nThis foul-smelling unguent dulls the odors and traces that fungus creatures detect. For 1 day after you slather this musk on your body, fungus creatures take a -4 penalty to Perception checks to Seek you or otherwise notice you. If a fungus creature is mindless, it instead has a -6 penalty. The musk also grants you a +1 item bonus to AC against melee attacks from fungus creatures with no vision for the same period of time. The effects of fungal walk musk end immediately if you're submerged in water or subject to another olfactory effect.",
      "bulk": 0.1,
      "price": {
        "gp": 21
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:crimson-fulcrum-lens",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "yAqGhT0GuZrkvWZl",
      "slug": "crimson-fulcrum-lens",
      "publicationTitle": "Pathfinder #165: Eyes of Empty Death",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/other/crimson-fulcrum-lenses.webp"
    },
    "sourceHash": "sha256:e73173c8f4839136a80b4edaa684c8e34bce6eb62b41a47e6c9a7daba2f7283b",
    "translatableHash": "sha256:b5215ccd5fb39944c38e93aced69ede4305ffdb2d9ccf7657b142a1d1b1bf5ef",
    "data": {
      "schemaVersion": 1,
      "name": "Crimson Fulcrum Lens",
      "itemType": "equipment",
      "level": 9,
      "rarity": "unique",
      "traits": [
        "invested",
        "occult"
      ],
      "description": "This concave lens has a drifting crimson cloud resembling slowly swirling blood within it. While you have the Crimson Fulcrum Lens invested, you seethe with malevolent fury you can barely contain. You gain a +2 item bonus to saving throws against fear effects and a +2 item bonus to your melee Strike damage (this increases to a +4 item bonus to damage if the melee Strike is a jaws attack). You can also activate the lens in the following ways.\nEffect: Crimson Fulcrum Lens\nActivate 2 Interact\nFrequency once per day\nEffect You grasp the Crimson Fulcrum Lens in one hand and make a Strike that doesn't require that hand. The Strike deals an additional 1d8 precision damage (or 2d8 precision damage if you make a jaws Strike) and doesn't count toward your multiple attack penalty.\nActivate 2 Interact (attack, possession)\nEffect While grasping the lens, make a melee spell attack roll with a modifier of check (crimson-fulcrum-lens, against:ac). On a hit, you force the splinter of Nhimbaloth's essence from the lens to possess the target. You're no longer invested in the lens, and the target gains the benefits as though it had invested the lens but can't activate the lens's other abilities. This effect is permanent, but it can be ended by any effect that removes a possession effect. The lens doesn't have any magical abilities until the possession effect ends; when it does, the essence returns to the lens.",
      "bulk": 1,
      "price": {
        "gp": 700
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:emerald-fulcrum-lens",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "IS1P6er2hLyKXAss",
      "slug": "emerald-fulcrum-lens",
      "publicationTitle": "Pathfinder #165: Eyes of Empty Death",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/other/emerald-fulcrum-lenses.webp"
    },
    "sourceHash": "sha256:1f219aca48c82a50946cf2d7557f1b827764bbb531d2c7455db7caaab3b5bb5a",
    "translatableHash": "sha256:9d75702dc0b5948cbfa0e49121fa743a2fb58ff3e0507e3f8e7758037504d196",
    "data": {
      "schemaVersion": 1,
      "name": "Emerald Fulcrum Lens",
      "itemType": "equipment",
      "level": 10,
      "rarity": "unique",
      "traits": [
        "invested",
        "occult",
        "void"
      ],
      "description": "This concave green lens is pitted and flawed; its jagged edges can cut those who don't handle it with care. While you have the Emerald Fulcrum Lens invested, your flesh appears waxen and pallid. You gain void healing and Harm spells gain a +4 status bonus to the Hit Points they restore to you. You can also activate the lens in the following ways.\nEffect: Emerald Fulcrum Lens\nActivate 2 Interact (healing)\nFrequency once per day\nEffect You grasp the Emerald Fulcrum Lens in one hand, regain 30 healing, and gain a +2 item bonus to saving throws against magic for 1 round.\nEffect: Emerald Fulcrum Lens (Saving Throw)\nActivate 2 Interact (attack, possession)\nWhile grasping the lens, make a melee spell attack roll with a modifier of check (emerald-fulcrum-lens, against:ac). On a hit, you force the splinter of Nhimbaloth's essence from the lens to possess the target. You're no longer invested in the lens, and the target gains the benefits as though it had invested the lens but can't activate the lens's other abilities. This effect is permanent, but it can be ended by any effect that removes a possession effect. The lens doesn't have any magical abilities until the possession effect ends; when it does, the essence returns to the lens.",
      "bulk": 3,
      "price": {
        "gp": 1000
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:fulcrum-lattice",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "JwHNSaiwwqF7VCC5",
      "slug": "fulcrum-lattice",
      "publicationTitle": "Pathfinder #165: Eyes of Empty Death",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/other/fulcrum-lattice.webp"
    },
    "sourceHash": "sha256:9330d15ffd1da82bb891fffab430a5f2cf25746cfad21a259487c470102eaf57",
    "translatableHash": "sha256:a99bd0b755d619f472846ea2e658e5e6193e118aaf90f7a51721345cba6abaf7",
    "data": {
      "schemaVersion": 1,
      "name": "Fulcrum Lattice",
      "itemType": "equipment",
      "level": 11,
      "rarity": "unique",
      "traits": [
        "occult"
      ],
      "description": "This silver and copper framework is shaped to hold four focusing lenses, one behind the other, from smallest to largest. It has a socketed base to be mounted into a stand, such as that found in a lighthouse lantern. The Fulcrum Lattice was specifically designed to hold the four fulcrum lenses from smallest to largest (ebon, crimson, ochre, emerald), and it hums slightly while within 10 feet of any fulcrum lens. A fulcrum lens slotted into the Fulcrum Lattice has no Bulk; the lattice remains at 1 Bulk and can be carried easily. Inserting or removing a lens from the Fulcrum Lattice requires a single Interact action.\nThe Fulcrum Lattice channels the power of fulcrum lenses joined with it. While you hold the Fulcrum Lattice, lenses socketed into it are considered to be in your hand for the purpose of activating their abilities. When you make a melee spell attack with a lens in the Fulcrum Lattice, you use the highest melee spell attack modifier of any lens in the lattice, or you can use your melee attack modifier with simple weapons if it's greater.",
      "bulk": 2,
      "price": {
        "gp": 1200
      },
      "usage": "held-in-two-hands",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:necrotic-bomb-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "u41wQz3bgu6J1XKo",
      "slug": "necrotic-bomb-greater",
      "publicationTitle": "Pathfinder #165: Eyes of Empty Death",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-bombs/necrotic-bomb.webp"
    },
    "sourceHash": "sha256:6901a1c80530d9f93f89c2d3449e88dee5741ae51281a3aea0dc269201992536",
    "translatableHash": "sha256:170aff8032dc20eba4377465000322284f9e645af9c7473725f61b4a65ebe1bc",
    "data": {
      "schemaVersion": 1,
      "name": "Necrotic Bomb (Greater)",
      "itemType": "weapon",
      "level": 11,
      "rarity": "common",
      "traits": [
        "alchemical",
        "bomb",
        "consumable",
        "splash",
        "void"
      ],
      "description": "Activate 1 Strike\nNecrotic bombs combine reagents most people consider disgusting at best and unholy at worst, creating a life-sucking miasma upon contact with air. A necrotic bomb deals the listed void damage and splash damage, and it sickens the primary target on a critical hit. This damage harms only living creatures.\nYou gain a +2 bonus to attack rolls.\nThe bomb deals 3d6 void damage and 3 void splash damage. On a critical hit, the target is Sickened 3.",
      "bulk": 0.1,
      "price": {
        "gp": 250
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "bomb",
      "damage": {
        "dice": 3,
        "die": "d6",
        "type": "void"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:necrotic-bomb-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "RC8EmoFiMITFUopr",
      "slug": "necrotic-bomb-major",
      "publicationTitle": "Pathfinder #165: Eyes of Empty Death",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-bombs/necrotic-bomb.webp"
    },
    "sourceHash": "sha256:6e7aea1fff80bf716b5c8fd18e7c005de7febe66ee6a0d41a27c5e2c322edd84",
    "translatableHash": "sha256:74f959216348bfaa7fe8a84f64b07c03e3090631178bdc44e7c58df35aae37b4",
    "data": {
      "schemaVersion": 1,
      "name": "Necrotic Bomb (Major)",
      "itemType": "weapon",
      "level": 17,
      "rarity": "common",
      "traits": [
        "alchemical",
        "bomb",
        "consumable",
        "splash",
        "void"
      ],
      "description": "Activate 1 Strike\nNecrotic bombs combine reagents most people consider disgusting at best and unholy at worst, creating a life-sucking miasma upon contact with air. A necrotic bomb deals the listed void damage and splash damage, and it sickens the primary target on a critical hit. This damage harms only living creatures.\nYou gain a +3 bonus to attack rolls\nThe bomb deals deals 4d6 void damage and 4 void splash damage. On a critical hit, the target is Sickened 4.",
      "bulk": 0.1,
      "price": {
        "gp": 2500
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "bomb",
      "damage": {
        "dice": 4,
        "die": "d6",
        "type": "void"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:bonmuan-swapping-stone-lesser",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "ARY8jRkg8aUJ6Zdv",
      "slug": "bonmuan-swapping-stone-lesser",
      "publicationTitle": "Pathfinder #166: Despair on Danger Island",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:a4813c2b8c415743838300662ac3428925bbcfbbed4783b4388f4cfd8fde6236",
    "translatableHash": "sha256:1fc75ee7ba9592431dcf3e8c716da7bf1400f70ca11741b539a06690a237a26e",
    "data": {
      "schemaVersion": 1,
      "name": "Bonmuan Swapping Stone (Lesser)",
      "itemType": "consumable",
      "level": 11,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical"
      ],
      "description": "Activate 1 Interact\nThis small, opalescent stone glows with a light that constantly shifts between colors. When you activate the stone, you throw it into a space within 100 feet. The stone then casts Dimension Door on you and transports you to itself. This destroys the stone.\nYou can instead hurl the stone at a creature in an attempt to bring that creature closer to you. Make a ranged Strike against a creature using your highest proficiency with a ranged weapon. The swapping stone has a range increment of 15 feet. On a hit, the stone shatters against the creature, casting dimension door on the creature and causing it to instantly teleport to a space adjacent to you. An unwilling creature can resist this teleportation with a successful check (will, dc:28, traits:teleportation) save.",
      "bulk": 0,
      "price": {
        "gp": 300
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:bonmuan-swapping-stone-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "JukXiZWas5RJaE3M",
      "slug": "bonmuan-swapping-stone-moderate",
      "publicationTitle": "Pathfinder #166: Despair on Danger Island",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:5a347a37f99e6eace96f168c9904896a1412f41d39760e133e211d65e13fc6de",
    "translatableHash": "sha256:5b7d8f30f03857ba9ecf72484777d297efb5747d93db3b51c1ef696e39a65be5",
    "data": {
      "schemaVersion": 1,
      "name": "Bonmuan Swapping Stone (Moderate)",
      "itemType": "consumable",
      "level": 14,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical"
      ],
      "description": "Activate 1 Interact\nThis small, opalescent stone glows with a light that constantly shifts between colors. When you activate the stone, you throw it into a space within 100 feet. The stone then casts Dimension Door on you and transports you to itself. This destroys the stone.\nYou can instead hurl the stone at a creature in an attempt to bring that creature closer to you. Make a ranged Strike against a creature using your highest proficiency with a ranged weapon. The swapping stone has a range increment of 15 feet. On a hit, the stone shatters against the creature, casting dimension door on the creature and causing it to instantly teleport to a space adjacent to you. An unwilling creature can resist this teleportation with a successful check (will, dc:31, traits:teleportation) save.",
      "bulk": 0,
      "price": {
        "gp": 600
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:bonmuan-swapping-stone-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "eoSvkOAkx4YGLQ2O",
      "slug": "bonmuan-swapping-stone-greater",
      "publicationTitle": "Pathfinder #166: Despair on Danger Island",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:d55dac3194211ef26baaf03d9e082bdfc026126731c7713ff2c8d790eb54c4c1",
    "translatableHash": "sha256:bf2ac8ab5cc2a7b4c5435c6d5ba9fd6b9b6462609fd80d6d10481eb4adc1a215",
    "data": {
      "schemaVersion": 1,
      "name": "Bonmuan Swapping Stone (Greater)",
      "itemType": "consumable",
      "level": 17,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical"
      ],
      "description": "Activate 1 Interact\nThis small, opalescent stone glows with a light that constantly shifts between colors. When you activate the stone, you throw it into a space within 100 feet. The stone then casts Dimension Door on you and transports you to itself. This destroys the stone.\nYou can instead hurl the stone at a creature in an attempt to bring that creature closer to you. Make a ranged Strike against a creature using your highest proficiency with a ranged weapon. The swapping stone has a range increment of 15 feet. On a hit, the stone shatters against the creature, casting dimension door on the creature and causing it to instantly teleport to a space adjacent to you. An unwilling creature can resist this teleportation with a successful check (will, dc:37, traits:teleportation) save.",
      "bulk": 0,
      "price": {
        "gp": 3000
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:phoenix-necklace",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "gswNvLPc2D0n0AOB",
      "slug": "phoenix-necklace",
      "publicationTitle": "Pathfinder #166: Despair on Danger Island",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:64764073d5c2f4a8325094a6576c959b877a80b37e88fd87ebbdfd701524a6cb",
    "translatableHash": "sha256:e82e4f71b667f52a85f1be8035337588bd4381bfc4fe9c4d9acd27ad1216c090",
    "data": {
      "schemaVersion": 1,
      "name": "Phoenix Necklace",
      "itemType": "equipment",
      "level": 20,
      "rarity": "rare",
      "traits": [
        "artifact",
        "healing",
        "magical"
      ],
      "description": "This brilliant jewelry is made from fine silver interwoven with a uniquely malleable form of ruby that causes the necklace to glimmer like a flickering fire. Hao Jin created the necklaces to mitigate the potential of death during the Ruby Phoenix Tournament pre-qualifier, and she specially attuned each phoenix necklace to the silver feathers she created for the pre-qualifying round. While the silver feathers themselves aren't magical, they are required to activate the necklace's power. Each team starts with 3 feathers hidden in their headquarters; they acquire more through challenges and events. Additionally, the tournament emissary's enforcers have the ability to deliver messages to the necklace's wearer at any time by casting Sending, though the wearer can't respond.\nActivate 3 command, envision\nEffect You select any number of willing creatures you can see within 30 feet, including yourself. The selected creatures can make nonlethal attacks without taking a penalty to their attack rolls. This effect remains in place until you remove the necklace or use this activation again.\nActivate 10 minutes (envision, Interact)\nEffect The necklace consumes one of the attached silver feathers and casts 7th-rank Raise Dead. Activating this ability is particularly costly and every activation requires consuming one more silver feather than the previous activation.\nDestruction Once a phoenix necklace has 10 silver feathers attached, Hao Jin can transform the necklace into a Phoenix Fighting Fan, a process which requires 3 Interact actions.",
      "bulk": 0,
      "price": {},
      "usage": "wornnecklace",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:phoenix-fighting-fan",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "lSwITRpBSdodhc1c",
      "slug": "phoenix-fighting-fan",
      "publicationTitle": "Pathfinder #166: Despair on Danger Island",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:e83502fd7c6cbe10dedd6d314757c9950ef41a952ad9af4eb59a43abf3eb153c",
    "translatableHash": "sha256:b768a605d9b9ff21f31b002bcb6fe9363f7600aabeb7db116ad4a48801d6f557",
    "data": {
      "schemaVersion": 1,
      "name": "Phoenix Fighting Fan",
      "itemType": "weapon",
      "level": 20,
      "rarity": "rare",
      "traits": [
        "agile",
        "artifact",
        "backstabber",
        "deadly-d6",
        "finesse",
        "magical",
        "monk"
      ],
      "description": "This fan is useful for elegant dances as well as for slicing unsuspecting foes with the blades along its outer edge. If used in performances, it might be disguised as a frilly accessory, or it might be an obvious, though elegant, weapon.\nThis elegant +3 greater striking flaming silver fighting fan features sharp silver feathers instead of traditional paper leaves in its design.\nActivate 3 command, envision, Interact\nFrequency once per day.\nEffect You call upon the fan's extradimensional powers to trap a creature in Hao Jin's repository, a small demiplane that holds the countless relics Hao Jin collected over her lifetime (though a trapped creature cannot interact with any of these relics). The fighting fan casts Quandary on a creature within 30 feet. The fan automatically Sustains the Spell as long as you Strike a creature with it each round. The check (survival, dc:34, traits:extradimensional,teleportation, showDC:owner) or check (perception, dc:34, traits:extradimensional,teleportation, showDC:owner) DC to escape the demiplane is 34. The spell ends once the creature escapes, you fail to Strike a creature with the fan during a round, or after 1 minute, whichever comes first.\nActivate 10 minutes (envision, Interact)\nEffect The fan casts 8th-rank Raise Dead, consuming the phoenix fighting fan in the process.",
      "bulk": 0.1,
      "price": {},
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "knife",
      "damage": {
        "dice": 1,
        "die": "d4",
        "type": "slashing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:bonmuan-swapping-stone-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "X3DCIU2fmj97pi1J",
      "slug": "bonmuan-swapping-stone-major",
      "publicationTitle": "Pathfinder #166: Despair on Danger Island",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:6ea2fa6f98dbb2ff1b264fb8f1ae793ffa37805b7bc9e54f581ba6c664e6d43e",
    "translatableHash": "sha256:ec44bbc82ec3ca7caf5d37d3a0697e4cfa84a8836688b9f7eecee6eaa93e2ce7",
    "data": {
      "schemaVersion": 1,
      "name": "Bonmuan Swapping Stone (Major)",
      "itemType": "consumable",
      "level": 20,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical"
      ],
      "description": "Activate 1 Interact\nThis small, opalescent stone glows with a light that constantly shifts between colors. When you activate the stone, you throw it into a space within 100 feet. The stone then casts Dimension Door on you and transports you to itself. This destroys the stone.\nYou can instead hurl the stone at a creature in an attempt to bring that creature closer to you. Make a ranged Strike against a creature using your highest proficiency with a ranged weapon. The swapping stone has a range increment of 15 feet. On a hit, the stone shatters against the creature, casting dimension door on the creature and causing it to instantly teleport to a space adjacent to you. An unwilling creature can resist this teleportation with a successful check (will, dc:43, traits:teleportation) save.",
      "bulk": 0,
      "price": {
        "gp": 9000
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:tusk-and-fang-chain",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "dIqIuqjPbIuh9TYn",
      "slug": "tusk-and-fang-chain",
      "publicationTitle": "Pathfinder #167: Ready? Fight!",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/consumable.svg"
    },
    "sourceHash": "sha256:6e78cb4a5e1bd340893ac0e27a978032939086505d6ad6fabbdfc5582e755c59",
    "translatableHash": "sha256:8e16e359e2d96d6290873b056f639bfcf653572cebce761c8daf255307639018",
    "data": {
      "schemaVersion": 1,
      "name": "Tusk and Fang Chain",
      "itemType": "consumable",
      "level": 16,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "incapacitation",
        "magical",
        "talisman"
      ],
      "description": "Usage affixed to armor\nActivate f command\nTrigger You Grab or restrain a creature or become grabbed or restrained by a creature\nThis length of silver chain has a tiger's fang on one end and the tip of a dire boar's tusk on the other. When you activate the chain, an ephemeral chain encircles the target creature's head and a cacophony of animal sounds clouds its mind. It must attempt a check (will, dc:35, showDC:owner) save.\nCritical Success The creature is unaffected.\nSuccess The creature is Confused on its next action.\nFailure The creature is confused for 1 round.\nCritical Failure The creature is confused for 1 minute and the creature doesn't receive a flat check to end its confusion if it takes damage. At the end of each of its turns, it attempts a new Will save, ending the effect on a success.",
      "bulk": 0,
      "price": {
        "gp": 1800
      },
      "usage": "affixed-to-armor",
      "category": "talisman",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:apricot-of-bestial-might",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "O4SbscW0mhRRSbRK",
      "slug": "apricot-of-bestial-might",
      "publicationTitle": "Pathfinder #167: Ready? Fight!",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:48d2f10210907abc6bb2de2a82248ca15fad02538a26a59e072db7b3018bb155",
    "translatableHash": "sha256:d107ec0be80b94ba6cdd7aa9b0aa01b4a9a0d866a7819911c94479694d0a4ff1",
    "data": {
      "schemaVersion": 1,
      "name": "Apricot of Bestial Might",
      "itemType": "consumable",
      "level": 16,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "consumable",
        "elixir",
        "mutagen",
        "polymorph"
      ],
      "description": "Activate 1 Interact\nThis yellow fruit's soft flesh is covered by waxy, fibrous leaves reminiscent of a pineapple. When you eat an apricot of bestial might, you transform into a boar-faced battle form with scaly skin. You can use feats with this item as if it were a bestial mutagen, improving your tusk unarmed attack as if it were a claw or jaws attack.\nBenefit You gain 8 resistance to all physical damage and gain a tusk unarmed attack with the deadly d12 trait that deals 1d10 piercing damage.\nDrawback You become Clumsy 1. If you perform an action with the auditory or linguistic traits, you must succeed at a check (flat, dc:5) or the action is lost.\nEffect: Apricot of Bestial Might",
      "bulk": 0.1,
      "price": {
        "gp": 2000
      },
      "usage": "held-in-one-hand",
      "category": "mutagen",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:cape-of-the-open-sky",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "fw1lODFkJJk3umz0",
      "slug": "cape-of-the-open-sky",
      "publicationTitle": "Pathfinder #167: Ready? Fight!",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/other-worn-items/cape-of-the-mountebank.webp"
    },
    "sourceHash": "sha256:d9a2b9dc70906bb43961c487373527293441b9adb5a42598bd20677e4d634594",
    "translatableHash": "sha256:ea696c7ca3bbd8a18cb7b0f7260d4a8accad6fa03e57b9eacb528faf28782083",
    "data": {
      "schemaVersion": 1,
      "name": "Cape of the Open Sky",
      "itemType": "equipment",
      "level": 18,
      "rarity": "rare",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "This cloth of gold cape was originally gifted to one of Goka's emperors centuries ago. Since then, it has spawned many imitations, which are all alike in that they are dyed with an elaborate seal depicting two drakes flanking Goka's palace and the Seven Dragons Bridge. The beautiful cape grants you a +3 item bonus to checks to Lie and to Make an Impression. While you wear the cape, the weather (including wind and fog) doesn't affect your movement or vision. Additionally, whenever you fall while wearing the cape of the open sky, the cape automatically casts Gentle Landing on you.\nActivate 2 Interact\nEffect The cape becomes a pair of golden drake wings that grant you a fly Speed of 30 feet for 1 hour.\nEffect: Cape of the Open Sky\nActivate 1 command\nFrequency once per minute\nEffect The cloak pushes you onward. You Stride or Fly up to your Speed, but you can move only in a straight line. You gain a +15-foot status bonus to your Speed and fly Speed for this movement.",
      "bulk": 0.1,
      "price": {
        "gp": 22000
      },
      "usage": "worncloak",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:sky-piercing-bow",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "jBn5TdnxOvzf6a1F",
      "slug": "sky-piercing-bow",
      "publicationTitle": "Pathfinder #167: Ready? Fight!",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/composite-shortbow.webp"
    },
    "sourceHash": "sha256:acc580b8323663e0b622db5c9707236332573cdfdb1f0cc7d4645fce86525880",
    "translatableHash": "sha256:dff814de32b0a18ddb55750ff93e44cd16b3155e54d8e8fdfeab99934f484e3d",
    "data": {
      "schemaVersion": 1,
      "name": "Sky-Piercing Bow",
      "itemType": "weapon",
      "level": 19,
      "rarity": "rare",
      "traits": [
        "deadly-d10",
        "magical",
        "propulsive"
      ],
      "description": "This shortbow is made from horn, wood, and sinew laminated together to increase the power of its pull and the force of its projectile. Its compact size and power make it a favorite of mounted archers. Any time an ability is specifically restricted to a shortbow, it also applies to composite shortbows unless otherwise stated.\nLarge turquoise gems stud the outer edge of this sturdy +3 greater striking ghost touch composite shortbow. Arrows shot from the bow are unimpaired by wind and air effects.\nActivate 2 Interact (conjuration, teleportation)\nFrequency once per day\nEffect You shoot an arrow at an open space on a surface within 500 feet and momentarily vanish into a wind that carries the arrow. You teleport to that location.\nActivate 2 command, Interact (electricity)\nFrequency once per hour\nEffect You shoot an arrow at the sky and it tears an extraplanar rift that resembles a storm cloud in a 30-foot burst centered on a point within 200 feet. A torrent of rain pours down from the rift for 1 minute or until you Dismiss the effect. The area within the torrent becomes difficult terrain for all movement (including Flying). As an Interact action, you can fire an arrow into the rift to cause a bolt of lightning to strike a creature in the area. The creature takes 5d12 electricity damage and must attempt a check (reflex, dc:41, basic, name:Sky Piercing Bow, traits:damaging-effect,electricity, showDC:owner) save.\nActivate 10 minutes (command, envision, Interact)\nFrequency once per week\nEffect You fire a volley of arrows into the sky. You create the effects of a successful Control Weather ritual.",
      "bulk": 1,
      "price": {
        "gp": 40000
      },
      "usage": "held-in-one-plus-hands",
      "category": "martial",
      "group": "bow",
      "damage": {
        "dice": 1,
        "die": "d6",
        "type": "piercing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:fox-marble",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "WTVLL9xk0Tk87w93",
      "slug": "fox-marble",
      "publicationTitle": "Pathfinder #168: King of the Mountain",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/talismans/jade-bauble.webp"
    },
    "sourceHash": "sha256:ec95a1dda5cd47f42fc5b568e1b88bed1f24a16ebf2f3464e92cc41906487d6c",
    "translatableHash": "sha256:c0b71d88d8f449347226898dbd9ad10ab8dc950a0b67e3473e2d584527114708",
    "data": {
      "schemaVersion": 1,
      "name": "Fox Marble",
      "itemType": "equipment",
      "level": 0,
      "rarity": "uncommon",
      "traits": [],
      "description": "A gumiho wears a strange green amulet around its neck. This fox marble stores all of the gumiho's knowledge. By focusing on the marble, a gumiho can perfectly recall anything it has experienced in its lifetime. A creature who manages to steal a gumiho's fox marble is lucky indeed, for they can also use it to access the gumiho's memories. However, if the gumiho still lives, the vengeful fox will stop at nothing to recover its marble.\nWhoever wears a fox marble gains a +2 item bonus to all checks to Recall Knowledge.",
      "bulk": 0,
      "price": {},
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:extradimensional-stash",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "HEvuhktgeFXdlDKm",
      "slug": "extradimensional-stash",
      "publicationTitle": "Pathfinder #168: King of the Mountain",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/backpack.svg"
    },
    "sourceHash": "sha256:af9e4afb26300549f7075aa9e68faa1a26e9ecf8bec4e2b028bbd8027d95a70b",
    "translatableHash": "sha256:a0c53269e28585ddfaee7c80e444838852fd658f2c3b003baef3fc7917eec92a",
    "data": {
      "schemaVersion": 1,
      "name": "Extradimensional Stash",
      "itemType": "container",
      "level": 20,
      "rarity": "uncommon",
      "traits": [
        "extradimensional"
      ],
      "description": "Granted by Extradimensional Stash\nWhen you perform sleight of hand, you fold space so that objects really do disappear. You create a small extradimensional space somewhere within in your clothing that can hold up to 5 Bulk worth of objects. The space functions as a bag of holding, but can hold only up to 5 Bulk, has no Bulk of its own, and can be Interacted with using only one hand.\nIn addition, when you Palm an Object, you can place it directly into this extradimensional space as long as the space has sufficient free space to hold the object.",
      "bulk": 0,
      "price": {},
      "usage": "worn",
      "category": "backpack",
      "group": "backpack"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:splendid-pyschopomp-mask",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Z5xNCrAN3TgdFTOV",
      "slug": "splendid-pyschopomp-mask",
      "publicationTitle": "Pathfinder #169: Kindled Magic",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/other-worn-items/persona-mask.webp"
    },
    "sourceHash": "sha256:49e7691b112cc1f8c6362e00c1b4cf02cb721b9afaea726383c1d15832706835",
    "translatableHash": "sha256:f4ca6478ef143ec4c90081cd153c6b5f1661169fa2e6676cb18943bb30a8b5fd",
    "data": {
      "schemaVersion": 1,
      "name": "Splendid Pyschopomp Mask",
      "itemType": "equipment",
      "level": 0,
      "rarity": "common",
      "traits": [],
      "description": "",
      "bulk": 0,
      "price": {
        "gp": 50
      },
      "usage": "wornmask",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:rhythm-bone",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "geAAUwfmOc5U0qOE",
      "slug": "rhythm-bone",
      "publicationTitle": "Pathfinder #169: Kindled Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:861443889c68d38dc4e691da37d7cec014ae292291ea9d79c3a90e62c8e37bbb",
    "translatableHash": "sha256:330cb33509e012616fff3857f2037587ac08110bd231faa49668bea64143d1c7",
    "data": {
      "schemaVersion": 1,
      "name": "Rhythm Bone",
      "itemType": "equipment",
      "level": 1,
      "rarity": "uncommon",
      "traits": [
        "auditory",
        "magical"
      ],
      "description": "This small, enchanted bone (most often a jaw) is usually capped with metal at its ends. It's activated by striking it against a hard surface.\nActivate 1 Interact\nEffect The bone begins recording the next 1 minute of ambient sounds (including speech) that require a DC 15 or lower Perception check to hear. The bone's recording doesn't copy magical auditory effects, such as those of spellcasting, a harpy's song, or a banshee's wail. Once the rhythm bone has been activated in this way, it retains the recorded sound for the rest of its existence and can't be activated this way again.\nActivate 1 Interact\nEffect The bone replays its recorded sounds.\nCraft Requirements Supply a casting of Ghost Sound.",
      "bulk": 0.1,
      "price": {
        "gp": 8
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:psychopomp-mask",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "i5SEEbSALTzH9rgg",
      "slug": "psychopomp-mask",
      "publicationTitle": "Pathfinder #169: Kindled Magic",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/other-worn-items/psychopomp-mask.webp"
    },
    "sourceHash": "sha256:bad5478963adae96c35c550708533fc9d91beabc45d6f6cc1382b0c7e9b2976c",
    "translatableHash": "sha256:6f9572a88f0c3f8eaf5e35d04a56f1b4f53c526599ca31f61cb299c10ca404f0",
    "data": {
      "schemaVersion": 1,
      "name": "Psychopomp Mask",
      "itemType": "equipment",
      "level": 1,
      "rarity": "uncommon",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "These minor magic items are painted to resemble your face, or some metaphorical depiction thereof, to encourage the ushers of death to take the mask in your place. If you begin your turn with a dying value of 3 or greater, instead of making your recovery check, you lose the dying condition but remain unconscious at 0 Hit Points. The mask then cracks in half and is destroyed. The psychopomps won't be so easily fooled again-you are temporarily immune to the effects of any psychopomp mask for 1 year.",
      "bulk": 0,
      "price": {
        "gp": 5
      },
      "usage": "wornmask",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:rhythm-bone-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "41MNmuj0PbHnhz0M",
      "slug": "rhythm-bone-greater",
      "publicationTitle": "Pathfinder #169: Kindled Magic",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:6ee8d023cd2b0932323b8f117b2d9c6e40b2db8f93123fad8169f1f68ac6eb52",
    "translatableHash": "sha256:86ad6fa0cc5b86520a02b9885b09d2dec0a29c4b237cfb8646a1699155106617",
    "data": {
      "schemaVersion": 1,
      "name": "Rhythm Bone (Greater)",
      "itemType": "equipment",
      "level": 4,
      "rarity": "uncommon",
      "traits": [
        "auditory",
        "magical"
      ],
      "description": "This small, enchanted bone (most often a jaw) is usually capped with metal at its ends. It's activated by striking it against a hard surface.\nActivate 1 Interact\nEffect The bone begins recording the next 10 minutes of ambient sounds (including speech) that require a DC 20 or lower Perception check to hear. The bone's recording doesn't copy magical auditory effects, such as those of spellcasting, a harpy's song, or a banshee's wail. Once the rhythm bone has been activated in this way, it retains the recorded sound for the rest of its existence and can't be activated this way again.\nActivate 1 Interact\nEffect The bone replays its recorded sounds.\nCraft Requirements Supply a casting of Ghost Sound.",
      "bulk": 0.1,
      "price": {
        "gp": 64
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:forgetful-ink",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "iCRoLguNunOjIM7L",
      "slug": "forgetful-ink",
      "publicationTitle": "Pathfinder #169: Kindled Magic",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/consumable.svg"
    },
    "sourceHash": "sha256:10674969eb411f7df48893bf1acf431d665f799fffce7fcf10efba4ea196fa21",
    "translatableHash": "sha256:b0133fcf295bff2b8acf608883f4dd05ad7ad73534efd114eb8cb4e939fd35fe",
    "data": {
      "schemaVersion": 1,
      "name": "Forgetful Ink",
      "itemType": "consumable",
      "level": 6,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "consumable",
        "contact",
        "poison"
      ],
      "description": "Activate 1 Interact\nUsed to write secret messages, a single dose of forgetful ink is enough to pen a page of text, often with flourishes extending to the page's edges. Anyone handling the page is exposed to the poison. This includes casual reading, unless the reader specifically takes precautions not to physically touch it. Unlike other poisons, forgetful ink retains its potency for one year, regardless of the number of victims exposed.\nSaving Throw check (fortitude, dc:20, traits:secret) (secret)\nOnset 1 minute\nStage 1 The reader forgets the contents of the writing, recalling it as blank or as inconsequential text.",
      "bulk": 0.1,
      "price": {
        "gp": 32
      },
      "usage": "held-in-two-hands",
      "category": "poison",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:warcallers-chime-of-destruction",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "qDiVe9Ob04gRXLFa",
      "slug": "warcallers-chime-of-destruction",
      "publicationTitle": "Pathfinder #170: Spoken on the Song Wind",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:a51b6f1a7a5167b2c9ce35d3438e17439c61e9fa872ac53ee98743f006fd46d6",
    "translatableHash": "sha256:7efb535bf17eb2c5b10e97aff185ae8aa185a02a8e8c18544f0a9c7133030bd5",
    "data": {
      "schemaVersion": 1,
      "name": "Warcaller's Chime of Destruction",
      "itemType": "equipment",
      "level": 4,
      "rarity": "uncommon",
      "traits": [
        "magical"
      ],
      "description": "A series of shattered mountains are carved into this chime. When activated, you touch the chime against an unattended object, casting Shatter upon the object, ignoring the object's Hardness if it's 6 or lower. You can use this chime once per day.",
      "bulk": 0.1,
      "price": {
        "gp": 100
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:warcallers-chime-of-resistance",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "5AHJQn2QrvdsTJsX",
      "slug": "warcallers-chime-of-resistance",
      "publicationTitle": "Pathfinder #170: Spoken on the Song Wind",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:06336b1eb89c0c881b31cf691b5dd7691fd7c7247d9374d849c49c62e7ced1cd",
    "translatableHash": "sha256:658521b943abdd94a66d226417136ddbfe0d60c81e1371e64f3fc36c72257652",
    "data": {
      "schemaVersion": 1,
      "name": "Warcaller's Chime of Resistance",
      "itemType": "equipment",
      "level": 5,
      "rarity": "uncommon",
      "traits": [
        "magical"
      ],
      "description": "This chime features several elemental runes in its carvings. When activated, it creates a defensive aura in a 5-foot emanation. As you activate the chime, choose acid, cold, electricity, fire, or sonic. You and creatures in the aura gain resistance 5 against the damage type you chose. This aura remains active for 10 minutes. This chime can be used once per week.",
      "bulk": 0.1,
      "price": {
        "gp": 160
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:rhino-hide-brooch",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "D2h1E7fXsQfyjFcv",
      "slug": "rhino-hide-brooch",
      "publicationTitle": "Pathfinder #170: Spoken on the Song Wind",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:179066513cabaae022b4b2f4307fb2fe2b1a2c26a22145657dce27f1a8d21004",
    "translatableHash": "sha256:ce8f15ba6d16e28941dcdde212aa734c2da346e68182675c84ba8758a3448c27",
    "data": {
      "schemaVersion": 1,
      "name": "Rhino Hide Brooch",
      "itemType": "consumable",
      "level": 5,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical",
        "talisman"
      ],
      "description": "Usage affixed to armor\nActivate r envision\nTrigger You would take physical damage.\nThis thick brooch is carved from a single piece of rhino hide. It's lacquered and covered in a thin layer of silver dust. When activated, the talisman grants you resistance 5 to physical damage until the end of the current creature's turn. This resistance applies to the triggering attack.\nEffect: Rhino Hide Brooch",
      "bulk": 0,
      "price": {
        "gp": 28
      },
      "usage": "affixed-to-armor",
      "category": "talisman",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:singing-muse",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "NhCFZ043brhFTsni",
      "slug": "singing-muse",
      "publicationTitle": "Pathfinder #170: Spoken on the Song Wind",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:019825dae31461c015799099088757ad7d79577c4a0e9d6cf0fec01dc079fa9f",
    "translatableHash": "sha256:d98c55518d0ba64d0c78dbcaea00ff458c3a7da44bb9aee91c83aab8230598f7",
    "data": {
      "schemaVersion": 1,
      "name": "Singing Muse",
      "itemType": "consumable",
      "level": 6,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical",
        "talisman"
      ],
      "description": "Usage affixed to armor\nActivate r envision\nTrigger You attempt a Performance check.\nThis small figurine is carved from a single piece of silvery, spiky stone and resembles a beautiful dryad pouring water into a small pool. When you activate the muse, you are momentarily enlightened with inspiration that bolsters your performance. If you roll a success on your triggering check, you get a critical success instead.",
      "bulk": 0,
      "price": {
        "gp": 250
      },
      "usage": "affixed-to-armor",
      "category": "talisman",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:warcallers-chime-of-blasting",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "ZW8W30XqgFf1KB3I",
      "slug": "warcallers-chime-of-blasting",
      "publicationTitle": "Pathfinder #170: Spoken on the Song Wind",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:c35b30620915741ff5ccfd61828415ce0c8896a14170d9fd4de26cfea1bcb5a9",
    "translatableHash": "sha256:d35d9b9ec4575955656ff21764eda387aa14f83ffdf3b3de9f339e66e78097da",
    "data": {
      "schemaVersion": 1,
      "name": "Warcaller's Chime of Blasting",
      "itemType": "equipment",
      "level": 6,
      "rarity": "uncommon",
      "traits": [
        "magical"
      ],
      "description": "This chime features carvings of destructive runes. When activated, it creates the effects of a 3rd-rank Noise Blast centered on you (check (fortitude, dc:20, basic, name:Warcaller's Chime Sound Burst, traits:sonic,uncommon, showDC:all) save). Instead of the spell's normal range, it has a 5-foot emanation. In addition, creatures that critically fail their save are knocked Prone by the chime's effect. You can use this chime once per day.",
      "bulk": 0.1,
      "price": {
        "gp": 250
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:fulminating-spear",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "KQRrAVdcRqtd0Lq2",
      "slug": "fulminating-spear",
      "publicationTitle": "Pathfinder #170: Spoken on the Song Wind",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:d2c699b13da5ebb8755fe8904f6bf0bb1bac99147e2d50bfa571780e4faa246e",
    "translatableHash": "sha256:a91eb3f283982329645866356bd7aebe5af9bfd55fb68315815cad66e7f1a56b",
    "data": {
      "schemaVersion": 1,
      "name": "Fulminating Spear",
      "itemType": "weapon",
      "level": 7,
      "rarity": "uncommon",
      "traits": [
        "fire",
        "magical",
        "monk",
        "thrown-20"
      ],
      "description": "This +1 striking returning spear is warm to the touch. The head of the spear is crafted from gold with ivory inlay and has a ruby set into the shaft. You can make the spear glow like a torch or suppress its light by using an action, which has the concentrate trait.\nActivate 2 envision, Interact\nFrequency once per day\nEffect You touch the ruby and hurl the spear at a square within 40 feet. When the spear lands, it detonates, dealing 6d6 fire damage (check (reflex, dc:23, basic, name:Fulminating Spear Explosion, showDC:all, options:area-effect)) to all creatures in a 10-foot emanation. It then flies back to your hand.",
      "bulk": 1,
      "price": {
        "gp": 360
      },
      "usage": "held-in-one-hand",
      "category": "simple",
      "group": "spear",
      "damage": {
        "dice": 1,
        "die": "d6",
        "type": "piercing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wondrous-figurine-bismuth-leopards",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "04V1qwob0JGPEx3k",
      "slug": "wondrous-figurine-bismuth-leopards",
      "publicationTitle": "Pathfinder #170: Spoken on the Song Wind",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:88b1f4a86dc5595d2e6ebece355d4ead8edac71e28e02e2f26ef957205eb186c",
    "translatableHash": "sha256:c71921adb3d9ec9d3d90803c8abb2afc31f197668b2e548030ed5c940cdc62b9",
    "data": {
      "schemaVersion": 1,
      "name": "Wondrous Figurine (Bismuth Leopards)",
      "itemType": "equipment",
      "level": 8,
      "rarity": "uncommon",
      "traits": [
        "magical"
      ],
      "description": "This exquisitely crafted statuette is carved into the form of twin panthers climbing a tree. When activated, it transforms into a pair of beautiful Leopards that are carved out of bismuth and flash hypnotically as they move. Creatures that come within 5 feet of a bismuth leopard or that end their turn within 5 feet of a bismuth leopard become Dazzled for 1 round unless they succeed at a check (will, dc:24, name:Dazzling Bismuth Leopard, traits:visual, showDC:all) save. A creature that comes within 5 feet of both leopards or ends its turn within 5 feet of both leopards need only attempt one saving throw each time. The leopards can be called on only once per day, and they remain in their leopard form for up to 10 minutes. If either of the leopards is slain, that leopard can't be summoned again until 1 week has passed, but this doesn't prevent you from summoning the other leopard.",
      "bulk": 0.1,
      "price": {
        "gp": 495
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:warcallers-chime-of-refuge",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "j6laknUcsOA6utvf",
      "slug": "warcallers-chime-of-refuge",
      "publicationTitle": "Pathfinder #170: Spoken on the Song Wind",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:145aceb2aeb65194e1e53a56993413c41d37559fad0acc71ed6349f5cfc73af5",
    "translatableHash": "sha256:87b87bae79d2924ec090b41e9bbf67d8c549ff5ece8733665c5c930921b1c46a",
    "data": {
      "schemaVersion": 1,
      "name": "Warcaller's Chime of Refuge",
      "itemType": "equipment",
      "level": 8,
      "rarity": "uncommon",
      "traits": [
        "magical"
      ],
      "description": "This chime's carvings depict a series of warding runes that evoke feelings of serene protection. When activated, you touch the chime to yourself or a willing creature. The target gains the effects of Sanctuary (check (will, dc:20, traits:abjuration,uncommon, showDC:all) save). You can use this chime up to five times per day, but each use must target a different creature.",
      "bulk": 0.1,
      "price": {
        "gp": 500
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:bag-of-cats",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "kJSB09q2KTAcWZy9",
      "slug": "bag-of-cats",
      "publicationTitle": "Pathfinder #170: Spoken on the Song Wind",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:c552e3501319c19d6be2a5bf0e044bca185c66643973dbe5715142560f0c4ea7",
    "translatableHash": "sha256:c6054e2654812c781d6866f5ee0e2e4c8de53dbbc6f1aa84e1ea5086bb27c709",
    "data": {
      "schemaVersion": 1,
      "name": "Bag of Cats",
      "itemType": "equipment",
      "level": 8,
      "rarity": "uncommon",
      "traits": [
        "magical"
      ],
      "description": "This beautiful leather bag is lined in soft fur and purrs quietly when pet.\nActivate 2 Interact\nFrequency once per day\nEffect You shake the bag to produce a single cat. You cast a 3rd-rank Summon Animal to produce a Leopard.\nActivate 2 envision, Interact\nFrequency once per day\nEffect You pull the bag over your head and it covers you completely. You then exit the bag in the form of a large cat. You gain the effects of 3rd-rank Animal Form but must use the cat battle form.",
      "bulk": 1,
      "price": {
        "gp": 500
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:habus-cudgel",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "zakdImp4CqahnFfc",
      "slug": "habus-cudgel",
      "publicationTitle": "Pathfinder #170: Spoken on the Song Wind",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:96fdeca223d31fe23939541a479f7a11cb828943be921900945441ea410c82be",
    "translatableHash": "sha256:d527f52a5eb84405b0cfdc405706db3c10e39e6616896a81c6751945134d6fa9",
    "data": {
      "schemaVersion": 1,
      "name": "Habu's Cudgel",
      "itemType": "weapon",
      "level": 8,
      "rarity": "unique",
      "traits": [
        "magical",
        "thrown-10"
      ],
      "description": "Long associated with a notorious crime boss in Nantambu, this stout +1 striking fearsome club is studded with vicious-looking knobs of obsidian and wrapped in cloth for a better grip. It emits a ghastly groan when swung.\nActivate 2 Interact\nFrequency once per day\nEffect You gesture at a square within 40 feet with Habu's Cudgel. The club causes a frightful wail to unleash from that square and casts Fear (check (will, dc:24, name:Habu's Cudgel Fear, traits:enchantment,evocation,emotion,fear,mental,unique)) targeting the creature in that square and all adjacent creatures.",
      "bulk": 1,
      "price": {
        "gp": 415
      },
      "usage": "held-in-one-hand",
      "category": "simple",
      "group": "club",
      "damage": {
        "dice": 1,
        "die": "d6",
        "type": "bludgeoning"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:leopards-armor",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "jAKYIqG2BNO7yffJ",
      "slug": "leopards-armor",
      "publicationTitle": "Pathfinder #170: Spoken on the Song Wind",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/armor/specific-magic-armor/leopards-armor.webp"
    },
    "sourceHash": "sha256:33df198c4b53f756454183c44a0d6c08c9d397e8b3140878be3808d22b445fb0",
    "translatableHash": "sha256:e351a97072fb9d6666cb983e8aba2f26716e72871baae2300fe7f09912338887",
    "data": {
      "schemaVersion": 1,
      "name": "Leopard's Armor",
      "itemType": "armor",
      "level": 9,
      "rarity": "uncommon",
      "traits": [
        "flexible",
        "magical",
        "noisy"
      ],
      "description": "Made of cobalt-colored steel rings that flow down the entire length of the garment, this +1 resilient chain mail includes an armored face covering. The armor is said to be based on the same armor once worn by Azure Leopard, one of Old-Mage Jatembe's magic warriors.\nActivate 2 command, envision\nFrequency once per day\nEffect You call upon the ferocity and grace of the leopard. The armor's rings flatten out to become a solid piece of flexible armor. You gain a +2 item bonus to Stealth checks and Intimidation checks to Demoralize, but take a -2 penalty to Diplomacy and Society checks.\nThis lasts for 1 hour, but you can Activate the armor again to revert it back to its original form.\nEffect: Leopard's Armor",
      "bulk": 2,
      "price": {
        "gp": 700
      },
      "usage": "",
      "category": "medium",
      "group": "chain",
      "armor": {
        "armorClassBonus": 4,
        "dexterityCap": 1,
        "checkPenalty": -2,
        "speedPenaltyFeet": -5
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:spellender",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "X95j0ZdqjXJkGmfZ",
      "slug": "spellender",
      "publicationTitle": "Pathfinder #170: Spoken on the Song Wind",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/weapon.svg"
    },
    "sourceHash": "sha256:b2652370605e1822a26ca86ffe3252492612a43706bbfe595a8b2aed4b0b04c3",
    "translatableHash": "sha256:f2f3671651a54f5360fa8caf72913c301b3ecfca3ebcc41879a7fff7530c6862",
    "data": {
      "schemaVersion": 1,
      "name": "Spellender",
      "itemType": "weapon",
      "level": 9,
      "rarity": "uncommon",
      "traits": [
        "agile",
        "finesse",
        "magical",
        "thrown-10",
        "versatile-s"
      ],
      "description": "This knife is a +1 striking returning dagger with a wide blade and thick wooden handle. A prayer for protection from evil magic is carved into the handle in tiny script, running around the handle in a spiral. The grooves of the carved prayer provide a good grip on the knife and make it easy to catch when it returns to your hand.\nActivate r envision\nFrequency once per day\nTrigger You critically hit with the weapon\nEffect The dagger casts a 4th-rank Dispel Magic targeting the most powerful spell effect affecting the creature you critically hit. The counteract check is +15.",
      "bulk": 0.1,
      "price": {
        "gp": 600
      },
      "usage": "held-in-one-hand",
      "category": "simple",
      "group": "knife",
      "damage": {
        "dice": 1,
        "die": "d4",
        "type": "piercing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wondrous-figurine-ruby-hippopotamus",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "YXTrUT7Z7emAn2gb",
      "slug": "wondrous-figurine-ruby-hippopotamus",
      "publicationTitle": "Pathfinder #170: Spoken on the Song Wind",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:9c9f003f7a3109834cdcb66ad240db12b568bfc5f4d9cd2217e0ec0c65f896f6",
    "translatableHash": "sha256:95695423bfe53a13e135d988134a520a070738a8ac21462ba977891895c9877b",
    "data": {
      "schemaVersion": 1,
      "name": "Wondrous Figurine (Ruby Hippopotamus)",
      "itemType": "equipment",
      "level": 9,
      "rarity": "uncommon",
      "traits": [
        "magical"
      ],
      "description": "This roughly hewn ruby figurine shimmers with a deep red hue and is carved into the likeness of an ornery hippopotamus. When activated, it transforms into an enraged Hippopotamus that sees everything within 30 feet of its activation area as its territory. It will relentlessly and ferociously attack anyone within this area except you, but it ignores your commands in favor of defending its area. The hippopotamus is active for 1 minute before reverting to its statue shape, satisfied that it has punished all possible interlopers into its territory. The figurine can be used only once per day.",
      "bulk": 0.1,
      "price": {
        "gp": 700
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:warcallers-chime-of-dread",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "3M3ZDW3MdfGLTZMC",
      "slug": "warcallers-chime-of-dread",
      "publicationTitle": "Pathfinder #170: Spoken on the Song Wind",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:a055c71053ec54588baa9269c8239e04497eb444322c97098e5da61011fd6fa9",
    "translatableHash": "sha256:49f84e0759f9b0bad998d7dcb5153d70105ceb03f23f27a308636df9c628ee17",
    "data": {
      "schemaVersion": 1,
      "name": "Warcaller's Chime of Dread",
      "itemType": "equipment",
      "level": 10,
      "rarity": "uncommon",
      "traits": [
        "magical"
      ],
      "description": "This chime's carvings depict skulls and other grim icons. When activated, it creates an aura of Fear in a 5-foot emanation for 1 round. Creatures in the aura must attempt a check (will, dc:27, traits:emotion,enchantment,fear,mental, showDC:all) save. On a failure, they become Frightened 1 (Frightened 2 on a critical failure). Affected creatures can't reduce their frightened condition below frightened 1 while the chime is ringing. You can Sustain the Activation to sustain the aura, up to a total of 5 rounds. This chime can be used only once per day, whether or not you Sustain the aura.",
      "bulk": 0.1,
      "price": {
        "gp": 1000
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:warcallers-chime-of-restoration",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "aGZJ6dEHTHxUdnXz",
      "slug": "warcallers-chime-of-restoration",
      "publicationTitle": "Pathfinder #170: Spoken on the Song Wind",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:28499b210c95a7bb052d136745dc16af86d7bc23e300777294f08f572aab88b4",
    "translatableHash": "sha256:932a8a21af1636bdffdf188f867ff7e9f4ea52b308c7cbe74b28b784a8d23c10",
    "data": {
      "schemaVersion": 1,
      "name": "Warcaller's Chime of Restoration",
      "itemType": "equipment",
      "level": 12,
      "rarity": "uncommon",
      "traits": [
        "magical"
      ],
      "description": "This chime's carvings depict blooming flowers. When activated, it creates a small aura of healing in a 5-foot emanation. Creatures in the aura gain fast healing 15. This aura remains active for 3 rounds. This chime can be used once per week.",
      "bulk": 0.1,
      "price": {
        "gp": 2000
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:red-rib-gill-mask-lesser",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "x4QLLKEShYqUjCCn",
      "slug": "red-rib-gill-mask-lesser",
      "publicationTitle": "Pathfinder #171: Hurricane's Howl",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/apex-items/headband-of-inspired-wisdom.webp"
    },
    "sourceHash": "sha256:1ee9cdac01a03373c5bf5feb6f60deba8e7ad22502dd85a72ff65aec61785cce",
    "translatableHash": "sha256:9ea89d494fb55fbc22f2e0298411b9f76d5646b422c092ab30dce08918f50859",
    "data": {
      "schemaVersion": 1,
      "name": "Red-Rib Gill Mask (Lesser)",
      "itemType": "consumable",
      "level": 2,
      "rarity": "rare",
      "traits": [
        "alchemical",
        "consumable"
      ],
      "description": "Activate 1 Interact\nThis mask is made from the gills of the red-rib salamander, an amphibious creature unique to Terwa Lake.\nOnce activated, the mask intensifies the odors of gaseous toxins, allowing you to automatically detect toxic fumes within 30 feet and their approximate source (making the source undetected instead of unnoticed).\nYou can't wear other masks while you're wearing a red-rib gill mask.\nAfter Activating the mask, you also gain the listed item bonus to Fortitude saves against inhaled effects; this bonus is increased against the deadly volcanic gas known around Terwa Lake as Dead Man's Breath, and possibly against other similar volcanic gases at the GM's discretion.\nType: Lesser\nThe item bonus is +1, or +2 against Dead Man's Breath, and the duration is 10 minutes.\nEffect: Red-Rib Gill Mask (Lesser)",
      "bulk": 0.1,
      "price": {
        "gp": 7
      },
      "usage": "wornmask",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:barricade-stone-sphere",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "RBjyD36IrrFOwFXR",
      "slug": "barricade-stone-sphere",
      "publicationTitle": "Pathfinder #171: Hurricane's Howl",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:db925cba08e82c4b9176cec9a9fbd299858e935b009470ede92a9fa88f5b0b19",
    "translatableHash": "sha256:e85cd2659328df170bf5c84f4dc9a836a25c423a517e78a84fb89c742b870b4b",
    "data": {
      "schemaVersion": 1,
      "name": "Barricade Stone (Sphere)",
      "itemType": "consumable",
      "level": 6,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical",
        "structure"
      ],
      "description": "Activate 2 command, Interact\nThe ancient inhabitants of Bloodsalt crafted these magic rocks to construct defenses quickly. In its stone form, a barricade stone appears to be a simple pebble with an unnaturally geometric shape. The size and shape of the stone's final form depends on the type of barricade stone.\nWhen you activate the barricade stone, you drop it on the ground, throw it up to 20 feet away, or sling it using a sling weapon.\nUpon landing, the stone instantly and permanently expands. The stone grows to its maximum size. While normally items with the structure trait put creatures in their area inside the structure, this effect creates solid stone, so it can't be placed in an area where there are creatures. While it's likely to take some time even with the right tools, an activated barricade stone can be destroyed the same as any normal stone structure (Hardness 14, HP 56).\nType: Sphere\nThis smooth marble keeps its shape when activated, growing into a spherical boulder 10 feet in diameter. If stationary, the boulder can be pushed 5 feet with a successful check (athletics, dc:24, name:Push the Barricade Stone check). If the marble was thrown or slung, the boulder retains its momentum, moving 25 feet away from you each round. A creature in the boulder's way takes 4d6 bludgeoning damage (check (reflex, dc:20, basic, name:Avoid the Barricade Stone) save; on a failure, the creature is knocked Prone).",
      "bulk": 0,
      "price": {
        "gp": 40
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:red-rib-gill-mask-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "J7ZoRlhqiP6988t2",
      "slug": "red-rib-gill-mask-moderate",
      "publicationTitle": "Pathfinder #171: Hurricane's Howl",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/apex-items/headband-of-inspired-wisdom.webp"
    },
    "sourceHash": "sha256:be2ff5452bd5fd04dbd202f7a02fd033b1e58ee4036e42434a6cc9f679168f6f",
    "translatableHash": "sha256:e99693bee6f7651aeab3b9f12ef252ecb8083a6dc4b4a6cd52fae1c2a66b75ef",
    "data": {
      "schemaVersion": 1,
      "name": "Red-Rib Gill Mask (Moderate)",
      "itemType": "consumable",
      "level": 7,
      "rarity": "rare",
      "traits": [
        "alchemical",
        "consumable"
      ],
      "description": "Activate 1 Interact\nThis mask is made from the gills of the red-rib salamander, an amphibious creature unique to Terwa Lake.\nOnce activated, the mask intensifies the odors of gaseous toxins, allowing you to automatically detect toxic fumes within 30 feet and their approximate source (making the source undetected instead of unnoticed).\nYou can't wear other masks while you're wearing a red-rib gill mask.\nAfter Activating the mask, you also gain the listed item bonus to Fortitude saves against inhaled effects; this bonus is increased against the deadly volcanic gas known around Terwa Lake as Dead Man's Breath, and possibly against other similar volcanic gases at the GM's discretion.\nType: Moderate\nThe item bonus is +2, or +3 against Dead Man's Breath, and the duration is 1 hour.\nEffect: Red-Rib Gill Mask (Moderate)",
      "bulk": 0.1,
      "price": {
        "gp": 100
      },
      "usage": "wornmask",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:barricade-stone-cube",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "eVowRVEo42PBFvNK",
      "slug": "barricade-stone-cube",
      "publicationTitle": "Pathfinder #171: Hurricane's Howl",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:9de8567eed02152624ae8f314c0f31f2489c692599725647ad6caa1a4c7d40fc",
    "translatableHash": "sha256:627f1d5b11d7eca4643c6d285edda6b65e8da21576931dea845353672bfab074",
    "data": {
      "schemaVersion": 1,
      "name": "Barricade Stone (Cube)",
      "itemType": "consumable",
      "level": 8,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical",
        "structure"
      ],
      "description": "Activate 2 command, Interact\nThe ancient inhabitants of Bloodsalt crafted these magic rocks to construct defenses quickly. In its stone form, a barricade stone appears to be a simple pebble with an unnaturally geometric shape. The size and shape of the stone's final form depends on the type of barricade stone.\nWhen you activate the barricade stone, you drop it on the ground, throw it up to 20 feet away, or sling it using a sling weapon.\nUpon landing, the stone instantly and permanently expands. The stone grows to its maximum size. While normally items with the structure trait put creatures in their area inside the structure, this effect creates solid stone, so it can't be placed in an area where there are creatures. While it's likely to take some time even with the right tools, an activated barricade stone can be destroyed the same as any normal stone structure (Hardness 14, HP 56).\nType: Cube\nThis seemingly simple six-sided die was designed to block a corridor. When activated, it grows to fill a solid square or rectangular space no more than 20 feet on any side. The cube fills spaces well enough that Tiny creatures can't slip through, but it's far from a perfect seal. Liquids, gases, and minuscule creatures such as insects can still find ways around it. Depending on the irregularities of the space the cube fills, it might be possible to see or hear past it.",
      "bulk": 0,
      "price": {
        "gp": 80
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:ixamès-eye",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Dc9BJcvL5zOoxAJd",
      "slug": "ixamès-eye",
      "publicationTitle": "Pathfinder #171: Hurricane's Howl",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:e85dfeb6114c5613fc87579c942f33651f2ece8ab4a592b11a1585f17c805b98",
    "translatableHash": "sha256:c47a2996336fd358179d3b92b2ed0d6086fd8bea16c0470c60c028aa1689042e",
    "data": {
      "schemaVersion": 1,
      "name": "Ixamè's Eye",
      "itemType": "consumable",
      "level": 9,
      "rarity": "rare",
      "traits": [
        "consumable",
        "magical",
        "talisman"
      ],
      "description": "Usage affixed to headgear\nActivate F Envision.\nVia some strange alchemical reaction with the gasses of Terwa Lake, the cloud dragon Ixamè's eyeballs have shriveled into sky-blue gems. The dragon's sense of vision isn't impaired, and her eyes can't be removed from her head until she's destroyed. Once removed, each gem functions as a special talisman.\nIxamè's eye sparkles when it's in an area of fog or mist. Activating the talisman enables you to see clearly through fog and mist for 1 minute; any creature concealed only by fog or mist is no longer concealed to you. If such a creature was relying on the concealment to Hide or Sneak, this also means it's no longer hidden or undetected.",
      "bulk": 0,
      "price": {
        "gp": 150
      },
      "usage": "affixed-to-headgear",
      "category": "talisman",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:exploration-lens-detecting",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "tIZ3Wi2JInY9abu8",
      "slug": "exploration-lens-detecting",
      "publicationTitle": "Pathfinder #171: Hurricane's Howl",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/treasure/art-objects/minor-art-object/hand-mirror-with-decorated-frame.webp"
    },
    "sourceHash": "sha256:c90e169d01e6d2a1a0aa2f705876737d21748191a6607ad01d05c7f3e3d808ec",
    "translatableHash": "sha256:a358c3aacdf07ae86ad390cdb589b8af3bd4b32959249e1c7851cc2087555440",
    "data": {
      "schemaVersion": 1,
      "name": "Exploration Lens (Detecting)",
      "itemType": "equipment",
      "level": 10,
      "rarity": "uncommon",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "Activate 1 Interact\nAn exploration lens is a magical glass lens designed for a Bull's Eye Lantern. When light from the lantern passes through the lens, it alters the light to make it easier to perform a common exploration activity with the lantern.\nAlternatively, an exploration lens can be installed in a Wayfinder like an aeon stone. In this case, light (such as that from a Lantern (Hooded), Torch, or Light spell) must still pass through the lens and you must hold the wayfinder in your hand for it to function.\nThere are several different types of exploration lens, each granting benefits with a different type of exploration activity. Each type of lens is distinguishable from all the other types by holding it up to a bright light.\nType: Detecting\nWhen held up to light, this lens sparkles as though infused with glitter.\nWhile Detecting Magic in exploration mode, when the lantern's light falls upon something you detect as magical, it pulsates faintly. This makes it easier to triangulate the magic, since you can use the cone of the bull's-eye lantern instead of the circular pulse of detect magic.\nYou also gain a +2 item bonus to checks to Identify Magic within the light.",
      "bulk": 0,
      "price": {
        "gp": 1000
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:barricade-stone-cylinder",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "uswFgspZL8QrHecL",
      "slug": "barricade-stone-cylinder",
      "publicationTitle": "Pathfinder #171: Hurricane's Howl",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/materials/silver-ingot.webp"
    },
    "sourceHash": "sha256:e9dc75b5d44c019a604aac84b26d304ed1c513a77da3d229c6ed80629564702f",
    "translatableHash": "sha256:e6f580c72b1a1b75151d641f488e9fe577dc820130b11e6fc26106da2df3d7f4",
    "data": {
      "schemaVersion": 1,
      "name": "Barricade Stone (Cylinder)",
      "itemType": "consumable",
      "level": 10,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical",
        "structure"
      ],
      "description": "Activate 2 command, Interact\nThe ancient inhabitants of Bloodsalt crafted these magic rocks to construct defenses quickly. In its stone form, a barricade stone appears to be a simple pebble with an unnaturally geometric shape. The size and shape of the stone's final form depends on the type of barricade stone.\nWhen you activate the barricade stone, you drop it on the ground, throw it up to 20 feet away, or sling it using a sling weapon.\nUpon landing, the stone instantly and permanently expands. The stone grows to its maximum size. While normally items with the structure trait put creatures in their area inside the structure, this effect creates solid stone, so it can't be placed in an area where there are creatures. While it's likely to take some time even with the right tools, an activated barricade stone can be destroyed the same as any normal stone structure (Hardness 14, HP 56).\nType: Cylinder\nWhen activated, this cylinder expands to a diameter of 5 feet, 10 feet, or 20 feet, depending on the command, with respective maximum heights of 80 feet, 40 feet, and 20 feet. If a dimension can't be reached due to contact with another solid surface, the cylinder ceases to grow in that direction.\nYou can activate the cylinder horizontally instead of vertically. If you do, the cylinder moves similarly to the Barricade Stone (Sphere), with the following changes: both DCs increase to 27, the damage increases to 6d6 bludgeoning damage, and a creature that critically fails its Reflex save against the rolling cylinder gains the Wounded 1 condition (or increases the value of its wounded condition by 1).",
      "bulk": 0,
      "price": {
        "gp": 160
      },
      "usage": "held-in-one-hand",
      "category": "potion",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:exploration-lens-investigating",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "RpsT84dZxLWHcoFk",
      "slug": "exploration-lens-investigating",
      "publicationTitle": "Pathfinder #171: Hurricane's Howl",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/treasure/art-objects/minor-art-object/hand-mirror-with-decorated-frame.webp"
    },
    "sourceHash": "sha256:ff4ea278310039bb67b19d271f3c09f47ed81cba0db52fd7ed4b10c1853a7148",
    "translatableHash": "sha256:b16abc14184859709aa1915a78d1da0ab1183b365d662f5c427bba80f94246ec",
    "data": {
      "schemaVersion": 1,
      "name": "Exploration Lens (Investigating)",
      "itemType": "equipment",
      "level": 12,
      "rarity": "uncommon",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "Activate 1 Interact\nAn exploration lens is a magical glass lens designed for a Bull's Eye Lantern. When light from the lantern passes through the lens, it alters the light to make it easier to perform a common exploration activity with the lantern.\nAlternatively, an exploration lens can be installed in a Wayfinder like an aeon stone. In this case, light (such as that from a Lantern (Hooded), Torch, or Light spell) must still pass through the lens and you must hold the wayfinder in your hand for it to function.\nThere are several different types of exploration lens, each granting benefits with a different type of exploration activity. Each type of lens is distinguishable from all the other types by holding it up to a bright light.\nType: Investigating\nThe outer rim of this lens glows faintly when held up to the light.\nWhile activated, the lens grants you a +1 item bonus to skill checks to Recall Knowledge while Investigating by outlining potential clues in a way that triggers your memory.\nIf you're Investigating something while using the lens, you can always roll a Recall Knowledge skill check appropriate to the investigation for initiative.",
      "bulk": 0,
      "price": {
        "gp": 1750
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:exploration-lens-searching",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "NAQ7HcM826y9fsBH",
      "slug": "exploration-lens-searching",
      "publicationTitle": "Pathfinder #171: Hurricane's Howl",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/treasure/art-objects/minor-art-object/hand-mirror-with-decorated-frame.webp"
    },
    "sourceHash": "sha256:d8b9f918a4b02efb2533dbae8b3e5ae961e13a7a426b52c52a78e2e3b9f80b3b",
    "translatableHash": "sha256:cc206729e15d3a4db90463797627c25ebaa618fbee4f72adebfefe93232ff06a",
    "data": {
      "schemaVersion": 1,
      "name": "Exploration Lens (Searching)",
      "itemType": "equipment",
      "level": 14,
      "rarity": "uncommon",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "Activate 1 Interact\nAn exploration lens is a magical glass lens designed for a Bull's Eye Lantern. When light from the lantern passes through the lens, it alters the light to make it easier to perform a common exploration activity with the lantern.\nAlternatively, an exploration lens can be installed in a Wayfinder like an aeon stone. In this case, light (such as that from a Lantern (Hooded), Torch, or Light spell) must still pass through the lens and you must hold the wayfinder in your hand for it to function.\nThere are several different types of exploration lens, each granting benefits with a different type of exploration activity. Each type of lens is distinguishable from all the other types by holding it up to a bright light.\nType: Searching\nThis lens has an opalescent sheen when held up to light.\nThe lens subtly outlines hidden doors and concealed hazards, granting you a +2 item bonus to Perception checks to spot such features while Searching.\nEven if you aren't Searching, you get a check to find traps that normally require you to Search.",
      "bulk": 0,
      "price": {
        "gp": 4000
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:red-rib-gill-mask-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Wyh13xRaOL57fve7",
      "slug": "red-rib-gill-mask-greater",
      "publicationTitle": "Pathfinder #171: Hurricane's Howl",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/apex-items/headband-of-inspired-wisdom.webp"
    },
    "sourceHash": "sha256:776310a18ad9dbb669816b755aa24d6b08ca7e97fc67fd97437aebd9c2270c90",
    "translatableHash": "sha256:9b7de1a6a774d9ef9a8933bf979055dc7019e320e091eef314cc1aabaef88911",
    "data": {
      "schemaVersion": 1,
      "name": "Red-Rib Gill Mask (Greater)",
      "itemType": "consumable",
      "level": 14,
      "rarity": "rare",
      "traits": [
        "alchemical",
        "consumable"
      ],
      "description": "Activate 1 Interact\nThis mask is made from the gills of the red-rib salamander, an amphibious creature unique to Terwa Lake.\nOnce activated, the mask intensifies the odors of gaseous toxins, allowing you to automatically detect toxic fumes within 30 feet and their approximate source (making the source undetected instead of unnoticed).\nYou can't wear other masks while you're wearing a red-rib gill mask.\nAfter Activating the mask, you also gain the listed item bonus to Fortitude saves against inhaled effects; this bonus is increased against the deadly volcanic gas known around Terwa Lake as Dead Man's Breath, and possibly against other similar volcanic gases at the GM's discretion.\nType: Greater\nThe item bonus is +3, or +4 against Dead Man's Breath, and the duration is 8 hours.\nEffect: Red-Rib Gill Mask (Greater)",
      "bulk": 0.1,
      "price": {
        "gp": 700
      },
      "usage": "wornmask",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:sun-shot",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "DKsfWwWZ23PHPIa1",
      "slug": "sun-shot",
      "publicationTitle": "Pathfinder #172: Secrets of the Temple-City",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:7ad88b13b96220a23c14b4a2de73b419c97e2bab624a234e441142d2583b5cc8",
    "translatableHash": "sha256:d418ee9d7eff05420eb944c237db2c7d06e7a34f3934cac88fdbfa49af938707",
    "data": {
      "schemaVersion": 1,
      "name": "Sun Shot",
      "itemType": "ammunition",
      "level": 0,
      "rarity": "uncommon",
      "traits": [],
      "description": "Sun slings use small metal bullets covered in sharp spikes known as sun shots. A bundle of 10 sun shots has light bulk and costs 1 sp.",
      "bulk": 0.1,
      "price": {
        "sp": 1
      },
      "usage": "",
      "category": "ammo",
      "group": "sling-bullets"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:sun-sling",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "zWp7Kcn7mhKyGFxW",
      "slug": "sun-sling",
      "publicationTitle": "Pathfinder #172: Secrets of the Temple-City",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/weapon.svg"
    },
    "sourceHash": "sha256:e239b148ffcba339119bd4cbbb954c0df2591fcc18823d659efe0a6d7e4b0c1d",
    "translatableHash": "sha256:994918ab9243cca4652add249674f51a8761a836ecd9c4080755c1adff26154b",
    "data": {
      "schemaVersion": 1,
      "name": "Sun Sling",
      "itemType": "weapon",
      "level": 0,
      "rarity": "uncommon",
      "traits": [
        "concussive",
        "propulsive"
      ],
      "description": "A sun sling is a small staff with a head of woven netting. The staff is small enough to hold in a single hand, making it useful for hit-and-run tactics, but once loaded with ammunition, it requires two hands to properly swing and fire. This is a martial ranged weapon.\nSun slings use small metal bullets covered in sharp spikes known as Sun Shots. A bundle of 10 sun shots has light bulk and costs 1 sp.",
      "bulk": 0.1,
      "price": {
        "gp": 3
      },
      "usage": "held-in-one-plus-hands",
      "category": "martial",
      "group": "sling",
      "damage": {
        "dice": 1,
        "die": "d8",
        "type": "piercing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:midday-lantern-lesser",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "fsqAB2lS9N8MRaO5",
      "slug": "midday-lantern-lesser",
      "publicationTitle": "Pathfinder #172: Secrets of the Temple-City",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:e149815e7289cc91771d3e020ebd30cf7918d241fb865c0148e2108533af83ae",
    "translatableHash": "sha256:6355eb22d00f5f45ad523bfbf36cfe8b393435c103d563d344b037cf86d5f091",
    "data": {
      "schemaVersion": 1,
      "name": "Midday Lantern (Lesser)",
      "itemType": "equipment",
      "level": 6,
      "rarity": "uncommon",
      "traits": [
        "light",
        "magical"
      ],
      "description": "This hooded lantern is made from brilliant, reinforced gold engraved with the image of the sun high in the sky. The lantern uses oil, as a standard lantern, except that any light the lantern emits is magical and similar to sunlight. The lantern doesn't emit dim light, instead only emitting bright light to its normal radius (20 feet for typical lights when using oil). This bright light is close enough to sunlight to open temple doors that require sunlight or similar light, but it doesn't shine direct sunlight, so it doesn't trigger effects such as a vampire's sunlight weakness.\nActivate 1 to 3 envision, Interact\nFrequency once per day\nEffect You raise the lantern and unleash a blast of powerful sunlight. The blast has the effects of 2nd-rank Blazing Bolt using a spell attack roll of , with its effect determined by the number of actions you used to activate the lantern.",
      "bulk": 0.1,
      "price": {
        "gp": 235
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:twilight-lantern-lesser",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Q5YwZv3PbCHkEImh",
      "slug": "twilight-lantern-lesser",
      "publicationTitle": "Pathfinder #172: Secrets of the Temple-City",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:e6c6d68e01301b27d1449a2259d745329dbb72636ab033eb86be08389be1d3b6",
    "translatableHash": "sha256:97891f2f6e55607884d989d0296fa004f04c23b38856be22e3ef664ca63be826",
    "data": {
      "schemaVersion": 1,
      "name": "Twilight Lantern (Lesser)",
      "itemType": "equipment",
      "level": 6,
      "rarity": "uncommon",
      "traits": [
        "light",
        "magical"
      ],
      "description": "This elegant hooded lantern is made from onyx-black metal. In dim light, flecks of white metal speckled within the lantern's housing resemble stars in a night sky. The lantern uses oil as a standard hooded lantern, except that any light the lantern emits is converted into magical light similar to moonlight. This magical moonlight is always dim light.\nActivate 1 envision\nEffect You concentrate on the lantern's light and reduce or increase its radius. The light can have a minimum radius of 5 feet and a maximum radius equal to double the light's standard radius.\nActivate 2 envision, Interact\nFrequency once per day\nEffect You raise the lantern and unleash a beam of powerful moonlight, targeting a darkness effect within 60 feet. The lantern attempts to counteract the effect with a counteract modifier of .",
      "bulk": 0.1,
      "price": {
        "gp": 235
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:midday-lantern-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "8usnglqucr4Q0YO6",
      "slug": "midday-lantern-moderate",
      "publicationTitle": "Pathfinder #172: Secrets of the Temple-City",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:1b20f48a4c1b3b72d4100d0ad10c9040e721d7d2e188c3a79c5bd24e6174a95f",
    "translatableHash": "sha256:f57bd100d72ab06184ae4788c2ac7c6e46a589a5166a3c2470f748806826b870",
    "data": {
      "schemaVersion": 1,
      "name": "Midday Lantern (Moderate)",
      "itemType": "equipment",
      "level": 10,
      "rarity": "uncommon",
      "traits": [
        "light",
        "magical"
      ],
      "description": "This hooded lantern is made from brilliant, reinforced gold engraved with the image of the sun high in the sky. The lantern uses oil, as a standard lantern, except that any light the lantern emits is magical and similar to sunlight. The lantern doesn't emit dim light, instead only emitting bright light to its normal radius (20 feet for typical lights when using oil). This bright light is close enough to sunlight to open temple doors that require sunlight or similar light, but it doesn't shine direct sunlight, so it doesn't trigger effects such as a vampire's sunlight weakness.\nActivate 1 to 3 envision, Interact\nFrequency once per day\nEffect You raise the lantern and unleash a blast of powerful sunlight. The blast has the effects of 4th-rank Blazing Bolt using a spell attack roll of , with its effect determined by the number of actions you used to activate the lantern.",
      "bulk": 0.1,
      "price": {
        "gp": 850
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:twilight-lantern-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "hpNsjNQn9Gg6N8Kh",
      "slug": "twilight-lantern-moderate",
      "publicationTitle": "Pathfinder #172: Secrets of the Temple-City",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:b91eba37339c63edeeb99f14bff5c8fff157b144ce4026979c1123ce173c9884",
    "translatableHash": "sha256:9ca34105f89e57e0c4638cca460a524fa91feef08077ebfb32214076e948c88f",
    "data": {
      "schemaVersion": 1,
      "name": "Twilight Lantern (Moderate)",
      "itemType": "equipment",
      "level": 10,
      "rarity": "uncommon",
      "traits": [
        "light",
        "magical"
      ],
      "description": "This elegant hooded lantern is made from onyx-black metal. In dim light, flecks of white metal speckled within the lantern's housing resemble stars in a night sky. The lantern uses oil as a standard hooded lantern, except that any light the lantern emits is converted into magical light similar to moonlight. This magical moonlight is always dim light.\nActivate 1 envision\nEffect You concentrate on the lantern's light and reduce or increase its radius. The light can have a minimum radius of 5 feet and a maximum radius equal to triple the light's standard radius.\nActivate 2 envision, Interact\nFrequency once per day\nEffect You raise the lantern and unleash a beam of powerful moonlight, targeting a darkness effect within 60 feet. The lantern attempts to counteract the effect with a counteract modifier of .",
      "bulk": 0.1,
      "price": {
        "gp": 850
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:deathless-light",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "nvjEr2dlbtMV0q3d",
      "slug": "deathless-light",
      "publicationTitle": "Pathfinder #172: Secrets of the Temple-City",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/consumable.svg"
    },
    "sourceHash": "sha256:f1c71fb8b16232283687d3b7cbbe103ba6246bfb8412a90344fab191b99c4d3a",
    "translatableHash": "sha256:66a992b7478ebd6bbb882235eb6d5bdcf2fada62494c6f272ef6c0f4a368ac66",
    "data": {
      "schemaVersion": 1,
      "name": "Deathless Light",
      "itemType": "consumable",
      "level": 10,
      "rarity": "uncommon",
      "traits": [
        "catalyst",
        "consumable",
        "magical"
      ],
      "description": "Activate 1 envision\nThis glowing piece of flesh increases the spell rank of a spell with the light trait by 1 (maximum 7) when determining whether the spell's light will shine in magical darkness or counteract a Darkness spell.",
      "bulk": 0.1,
      "price": {
        "gp": 165
      },
      "usage": "held-in-one-hand",
      "category": "catalyst",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:midday-lantern-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "gvMmQh9icawtnmlR",
      "slug": "midday-lantern-greater",
      "publicationTitle": "Pathfinder #172: Secrets of the Temple-City",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:066f33dc4ed89011592c17acdaa23ce6ca51af395757303370e083ca73ff7456",
    "translatableHash": "sha256:a4aa1c49ea5035031baab4e94af6e0d11cd0f22f875a737a665b8c89fc1dc867",
    "data": {
      "schemaVersion": 1,
      "name": "Midday Lantern (Greater)",
      "itemType": "equipment",
      "level": 14,
      "rarity": "uncommon",
      "traits": [
        "light",
        "magical"
      ],
      "description": "This hooded lantern is made from brilliant, reinforced gold engraved with the image of the sun high in the sky. The lantern uses oil, as a standard lantern, except that any light the lantern emits is magical and similar to sunlight. The lantern doesn't emit dim light, instead only emitting bright light to its normal radius (20 feet for typical lights when using oil). This bright light is close enough to sunlight to open temple doors that require sunlight or similar light, but it doesn't shine direct sunlight, so it doesn't trigger effects such as a vampire's sunlight weakness.\nActivate 1 to 3 envision, Interact\nFrequency once per day\nEffect You raise the lantern and unleash a blast of powerful sunlight. The blast has the effects of 6th-rank Blazing Bolt using a spell attack roll of , with its effect determined by the number of actions you used to activate the lantern.",
      "bulk": 0.1,
      "price": {
        "gp": 3700
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:twilight-lantern-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "OmiMLervOVa8G8zK",
      "slug": "twilight-lantern-greater",
      "publicationTitle": "Pathfinder #172: Secrets of the Temple-City",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:1d891d52ac4d7356d6eb1074e231765dadf7bdfb8935aac54c99ece0a8584651",
    "translatableHash": "sha256:aae5b98233de290b0c1e3db01d3b56c2d79506cd24e662925e4ada4c6d77550f",
    "data": {
      "schemaVersion": 1,
      "name": "Twilight Lantern (Greater)",
      "itemType": "equipment",
      "level": 14,
      "rarity": "uncommon",
      "traits": [
        "light",
        "magical"
      ],
      "description": "This elegant hooded lantern is made from onyx-black metal. In dim light, flecks of white metal speckled within the lantern's housing resemble stars in a night sky. The lantern uses oil as a standard hooded lantern, except that any light the lantern emits is converted into magical light similar to moonlight. This magical moonlight is always dim light.\nActivate 1 envision\nEffect You concentrate on the lantern's light and reduce or increase its radius. The light can have a minimum radius of 5 feet and a maximum radius equal to triple the light's standard radius.\nActivate 2 envision, Interact\nFrequency once per day\nEffect You raise the lantern and unleash a beam of powerful moonlight, targeting a darkness effect within 60 feet. The lantern attempts to counteract the effect with a counteract modifier of .",
      "bulk": 0.1,
      "price": {
        "gp": 3700
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:deflecting-branch",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "zXUmfJEBQ7Pfovve",
      "slug": "deflecting-branch",
      "publicationTitle": "Pathfinder #172: Secrets of the Temple-City",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/weapon.svg"
    },
    "sourceHash": "sha256:de0b1c9430e214dc4274f5e80d4344c3df0714e00723bff2320c68868e70de32",
    "translatableHash": "sha256:96cc4c39694e22f0465b09d3b5e833e6b62b73fd913cd2e74013047a077d7e39",
    "data": {
      "schemaVersion": 1,
      "name": "Deflecting Branch",
      "itemType": "weapon",
      "level": 14,
      "rarity": "uncommon",
      "traits": [
        "backswing",
        "magical",
        "shove"
      ],
      "description": "This massive branch has been cut into a general club shape but still bears several knots and has a number of runes carved along its length. The deflecting branch is a +2 greater striking greatclub.\nOn a critical hit, you knock the target Prone.\nActivate r Interact\nFrequency once per minute\nTrigger You are the target of a physical ranged attack\nRequirements You're aware of the attack and are not Off-Guard against it\nEffect You gain a +4 circumstance bonus to AC against the triggering attack. If the attack misses, you have knocked it away. You can't use this ability to deflect unusually massive ranged projectiles (such as boulders or ballista bolts).\nActivate f Interact\nFrequency once per hour\nTrigger You knock away a physical ranged attack by using the deflecting branch's other activation\nEffect You swing the club and reflect the oncoming attack. The attack is redirected toward a creature within 60 feet. Make a ranged attack against the creature using your highest proficiency with a ranged weapon.",
      "bulk": 2,
      "price": {
        "gp": 4500
      },
      "usage": "held-in-two-hands",
      "category": "martial",
      "group": "club",
      "damage": {
        "dice": 1,
        "die": "d10",
        "type": "bludgeoning"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:golden-blade-of-mzali",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "dIUmjoLjlcrKgXbH",
      "slug": "golden-blade-of-mzali",
      "publicationTitle": "Pathfinder #172: Secrets of the Temple-City",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:21a9e7b0c6276db2aa408677c863bb0a78d7410bc5ad475771fe92e726553158",
    "translatableHash": "sha256:48c60487eb215e0ba5bfc89e290e97182aff9ebe99c4246520a350650dfab079",
    "data": {
      "schemaVersion": 1,
      "name": "Golden Blade of Mzali",
      "itemType": "weapon",
      "level": 15,
      "rarity": "rare",
      "traits": [
        "fire",
        "light",
        "magical",
        "monk",
        "thrown-20"
      ],
      "description": "Each of these golden spears was forged in the days of old Mzali, when the sun kings ruled the city. The majority of these weapons are lost, most likely buried with warriors in tombs and temples sealed by Walkena's decrees. Walkena retains a single golden blade, which he grants to his Master of Spears.\nThis +2 greater striking returning spear is coated in brilliant gold, and beautiful engravings run along the shaft, depicting the rising and setting of the sun against Mzali's skyline. The spear glows with the effects of 4th-rank Light. You can suppress or resume this light by using an action, which has the concentrate trait. When you hit a creature with the spear, it takes 1d6 additional fire damage. When you critically hit a creature with the spear, the creature takes 1d8 persistent fire damage and 1d8 persistent bleed damage as its blood boils away. Unlike normal when taking two types of persistent damage, a creature needs only a single successful flat check to remove both the fire and bleed damage.\nActivate r envision\nFrequency once per day\nTrigger You critically hit a creature with the weapon\nEffect You call upon the spear's light to guide the creature away from violence. The creature must choose one of the following options:\n• The creature surrenders, immediately receiving the critical failure effects of Calm and Paralyze.\n• The weapon casts 7th-rank Blindness on the creature with a check (fortitude, dc:34, name:Blindness, traits:incapacitation,necromancy).\nRegardless of the choice, the spear loses its ability to glow with light until your next daily preparations.\nActivate 2 envision, Interact\nFrequency once per day\nEffect The spear casts 7th-rank Elemental Form on you, choosing fire as the form's trait. The spear loses its additional fire damage until your next daily preparations.",
      "bulk": 1,
      "price": {
        "gp": 6500
      },
      "usage": "held-in-one-hand",
      "category": "simple",
      "group": "spear",
      "damage": {
        "dice": 1,
        "die": "d6",
        "type": "piercing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:twilight-lantern-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "0Bp6uVAX4AvjhsOI",
      "slug": "twilight-lantern-major",
      "publicationTitle": "Pathfinder #172: Secrets of the Temple-City",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:579496246fb9ac23a42d9725a5a908e2395c8c4b69a15b5860742a3033cf70cc",
    "translatableHash": "sha256:9a983dbbe2db148f8a1d08921b085217c24f5e67f67777058a5fcb9460069581",
    "data": {
      "schemaVersion": 1,
      "name": "Twilight Lantern (Major)",
      "itemType": "equipment",
      "level": 18,
      "rarity": "uncommon",
      "traits": [
        "light",
        "magical"
      ],
      "description": "This elegant hooded lantern is made from onyx-black metal. In dim light, flecks of white metal speckled within the lantern's housing resemble stars in a night sky. The lantern uses oil as a standard hooded lantern, except that any light the lantern emits is converted into magical light similar to moonlight. This magical moonlight is always dim light.\nActivate 1 envision\nEffect You concentrate on the lantern's light and reduce or increase its radius. The light can have a minimum radius of 5 feet and a maximum radius equal to quadruple the light's standard radius.\nActivate 2 envision, Interact\nFrequency once per day\nEffect You raise the lantern and unleash a beam of powerful moonlight, targeting a darkness effect within 60 feet. The lantern attempts to counteract the effect with a counteract modifier of .",
      "bulk": 0.1,
      "price": {
        "gp": 18750
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:midday-lantern-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "W0tqTUmRE5lEhWUl",
      "slug": "midday-lantern-major",
      "publicationTitle": "Pathfinder #172: Secrets of the Temple-City",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:73a724e66eb410f265680cf7d9d1b6c6d48f0e89b39aa19aadff7bb28c30b491",
    "translatableHash": "sha256:81bf0ee0151587a1ca132057cd2636d1999b3bc517cd16bd7d12363240d6995e",
    "data": {
      "schemaVersion": 1,
      "name": "Midday Lantern (Major)",
      "itemType": "equipment",
      "level": 18,
      "rarity": "uncommon",
      "traits": [
        "light",
        "magical"
      ],
      "description": "This hooded lantern is made from brilliant, reinforced gold engraved with the image of the sun high in the sky. The lantern uses oil, as a standard lantern, except that any light the lantern emits is magical and similar to sunlight. The lantern doesn't emit dim light, instead only emitting bright light to its normal radius (20 feet for typical lights when using oil). This bright light is close enough to sunlight to open temple doors that require sunlight or similar light, but it doesn't shine direct sunlight, so it doesn't trigger effects such as a vampire's sunlight weakness.\nActivate 1 to 3 envision, Interact\nFrequency once per day\nEffect You raise the lantern and unleash a blast of powerful sunlight. The blast has the effects of 8th-rank Blazing Bolt using a spell attack roll of , with its effect determined by the number of actions you used to activate the lantern.",
      "bulk": 0.1,
      "price": {
        "gp": 18750
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:rounds-shobhad-longrifle",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "lLR2wkdzr0iJ6o5y",
      "slug": "rounds-shobhad-longrifle",
      "publicationTitle": "Pathfinder #173: Doorway to the Red Star",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:5316a94907838c2fadd5b94167bf009ba89b491036a2482fe358356cd81d6710",
    "translatableHash": "sha256:ecdea2f020602d738731980fd687c32655424e965ce55d3c9e4bfa53e8b0ff21",
    "data": {
      "schemaVersion": 1,
      "name": "Rounds (Shobhad Longrifle)",
      "itemType": "ammunition",
      "level": 0,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable"
      ],
      "description": "Firearms require ammunition consisting of a projectile and black powder. A round of ammo can vary in its composition but is typically either a prepackaged paper cartridge, including wadding, bullet, and black powder, or loose shot packed in manually. Some weapons, like hand cannons and blunderbusses, can fire other materials, but their ammunition has the same Price due to the cost of the black powder. Because making rounds of firearm ammunition requires creating black powder, you need the Alchemical Crafting skill feat to make them. Firearm rounds are a valid option for magical ammunition, just like arrows or bolts. Crafting magical firearm ammunition requires you to be able to craft both alchemical and magical items.",
      "bulk": 0.1,
      "price": {
        "sp": 1
      },
      "usage": "",
      "category": "ammo",
      "group": "rounds-shobhad-longrifle"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:shobhad-longrifle",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "DHKCkxAGveLE3Jnf",
      "slug": "shobhad-longrifle",
      "publicationTitle": "Pathfinder #173: Doorway to the Red Star",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/shobhad-longrifle.webp"
    },
    "sourceHash": "sha256:b1d860c6392620d669fd55d2382c7cb2460b53fd7f59b4817951de5eb9ebd42e",
    "translatableHash": "sha256:00bd7b714da4af0cb856b0355a614bf8c2237da5db853b17325132473a265da4",
    "data": {
      "schemaVersion": 1,
      "name": "Shobhad Longrifle",
      "itemType": "weapon",
      "level": 1,
      "rarity": "rare",
      "traits": [
        "backstabber",
        "concussive",
        "fatal-d12",
        "kickback",
        "volley-30"
      ],
      "description": "The shobhad longrifle is a firearm with a long, rifled barrel. Often mounted with a multi-lensed scope for targeting at an array of ranges and a chambering mechanism that can adjust the speed and penetrating power of each shot, it's the preferred weapon of many shobhad warriors.\nShobhad longrifles are equipped with a built-in Silencer so they make no more noise than a crossbow when fired.\nA shobhad longrifle is a martial weapon.",
      "bulk": 1,
      "price": {
        "gp": 20
      },
      "usage": "held-in-two-hands",
      "category": "martial",
      "group": "firearm",
      "damage": {
        "dice": 1,
        "die": "d8",
        "type": "piercing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:grimoire-of-unknown-necessities",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "oqZszBqqanONR0ng",
      "slug": "grimoire-of-unknown-necessities",
      "publicationTitle": "Pathfinder #173: Doorway to the Red Star",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:64c60a1200b836d981521bfac42bc3a7932d91f8bb912693c75b8607b44bef93",
    "translatableHash": "sha256:e5c142352453b8d156d7ee1c4cafb12a299bb0d1939f5f6ffdfc0d69acd29a21",
    "data": {
      "schemaVersion": 1,
      "name": "Grimoire of Unknown Necessities",
      "itemType": "equipment",
      "level": 16,
      "rarity": "unique",
      "traits": [
        "grimoire",
        "invested",
        "magical"
      ],
      "description": "The cover of this grimoire is bound in a strange crimson, pebbly leather that a check (occultism, dc:40) check to Recall Knowledge identifies as the hide of a rare monster from the distant plane of Leng. The grimoire's spine is bound in copper and a spiral of shifting runes slowly swirls across its surface.\nActivate 1 envision (arcane, divination)\nFrequency once per day\nRequirements You're an arcane prepared spellcaster and you have rested but not yet prepared your spells for the day\nEffect The grimoire provides you with temporary knowledge of a single spell of the highest rank you're capable of casting that you don't already have recorded in it or any of your other spellbooks, chosen by the GM based on their knowledge of the adventure to be particularly useful to you during the upcoming day.\nA strange quirk of the tome prevents the spell's knowledge from ever traveling further than your own mind. The granted spell is not only removed from the tome's pages at the start of the next day, but is also removed from any other scroll, spellbook, or grimoire the granted spell is copied into, as well as any other way it might have been learned or copied.",
      "bulk": 0.1,
      "price": {
        "gp": 8000
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wyrm-drinker",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "gWSmUEKln103LVvB",
      "slug": "wyrm-drinker",
      "publicationTitle": "Pathfinder #173: Doorway to the Red Star",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/weapon.svg"
    },
    "sourceHash": "sha256:ca1e30e25dd346a1650a14995b25e2a3c7272372cebdc6c08d60012086a7c8ec",
    "translatableHash": "sha256:d4d4ac48d55759601ec1f787bf041ae534351fa36139af063847a2bd14423878",
    "data": {
      "schemaVersion": 1,
      "name": "Wyrm Drinker",
      "itemType": "weapon",
      "level": 17,
      "rarity": "unique",
      "traits": [
        "magical",
        "staff",
        "two-hand-d8"
      ],
      "description": "This staff is made from the femur of a gold dragon wrapped in the multicolored scales of every type of chromatic and metallic dragon. When wielding this staff, you gain a +1 circumstance bonus to skill checks to Coerce, Make an Impression, Request, or Lie to dragons and creatures with strong draconic ties (such as kobolds, dragon instinct barbarians, and draconic sorcerers).\nActivate 2 command, Interact\nFrequency once per day\nEffect Attempt a melee Strike with Wyrm Drinker. If your target is a dragon or a creature with a strong draconic tie, such as a kobold, and you damage the target, the target is Drained 2, or Drained 4 on a critical hit.\nActivate Cast a Spell\nEffect You expend a number of charges from the staff to cast a spell from this list.\n• 2nd Illusory Creature (Dragons only)\n• 4th Reflective Scales\n• 5th Summon Dragon\n• 6th Dragon Form, Summon Dragon\n• 7th Summon Dragon",
      "bulk": 0,
      "price": {
        "gp": 13000
      },
      "usage": "held-in-one-hand",
      "category": "simple",
      "group": "club",
      "damage": {
        "dice": 1,
        "die": "d4",
        "type": "bludgeoning"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:spellcutter",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "LKIs3LJqrKNP2yrx",
      "slug": "spellcutter",
      "publicationTitle": "Pathfinder #173: Doorway to the Red Star",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/longsword.webp"
    },
    "sourceHash": "sha256:2eee398575ee06c73b9a901728f770caae10db625725a9917cca9a4c0b5f340b",
    "translatableHash": "sha256:0fbf573fdb9c0fe85ac20305d35caca3df1f47f7211db710ae0134a118129609",
    "data": {
      "schemaVersion": 1,
      "name": "Spellcutter",
      "itemType": "weapon",
      "level": 17,
      "rarity": "unique",
      "traits": [
        "cursed",
        "magical",
        "versatile-p"
      ],
      "description": "The blade of this +2 greater striking adamantine longsword seems to absorb light from the air around it, giving the impression the wielder is standing in the shadow of a much larger creature.\nWhile Spellcutter is a potent weapon for battling undead and constructs, an ancient restriction on the blade prevents it from harming living creatures; attacks against living beings deal no damage. This restriction doesn't apply to dhampirs or creatures with the Void Healing ability who are otherwise living; the magic of the blade can't distinguish between such beings and undead.\nActivate R envision\nTrigger You're targeted by a spell while wielding Spellcutter\nEffect Spellcutter attempts to absorb the magic of the triggering spell, giving you a +4 status bonus to your AC and saves against the effect.\nActivate 1 Interact\nEffect Touching Spellcutter to any light source of 12th level or lower (including 6th-rank spells with the light trait) instantly extinguishes the effect. If the source of the light is a large flame, such as a forest fire or bonfire, it only extinguishes the light source in a 5-foot radius burst from the point of contact.",
      "bulk": 1,
      "price": {
        "gp": 15000
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "sword",
      "damage": {
        "dice": 1,
        "die": "d8",
        "type": "slashing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:halcyon-heart",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "CGcNXv33k83Gr5lf",
      "slug": "halcyon-heart",
      "publicationTitle": "Pathfinder #174: Shadows of the Ancients",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:43a05966f8c2036abb80c7fcdbaa4cdcf6848d9ebb1bf28086f4105d2f82433f",
    "translatableHash": "sha256:bd7e606cdf7220f83ef1922f898801f39dd4e40ca47d1558cb2f5ea97f1862c3",
    "data": {
      "schemaVersion": 1,
      "name": "Halcyon Heart",
      "itemType": "equipment",
      "level": 21,
      "rarity": "rare",
      "traits": [
        "artifact",
        "magical"
      ],
      "description": "This shekere features carved prayers barely visible under a fine silk net of colorful beads. The handheld percussion instrument grants a +3 item bonus to Performance checks while playing music with it. In addition, when you Perform with it, you can make it heard by any number of creatures within 100 miles. You can specify one or more specific creatures, or otherwise describe those who will hear it, such as all humans, or all inhabitants of a village. You can send a message through the music that the targets understand. Demons and creatures connected to demons (such as a creature whose deity is a demon lord or a sorcerer with the demonic bloodline) can't easily understand any messages conveyed in this way, even if you wish to send the message to them. They must attempt a check (society) check against your Performance DC or against DC 40, whichever is higher. If your Performance DC is higher than DC 40 and you want demons to be able to understand the message, you can choose to use DC 40 instead.\nSuccess They understand the message.\nFailure They don't understand the message but are aware there was one.\nCritical Failure They don't realize the sound of the halcyon heart contains a message.\nActivate 1 command, Interact\nRequirements The halcyon heart has its net of beads\nEffect You pull the net off the halcyon heart and throw it at a creature within 20 feet, using your attack bonus for a ranged simple weapon. On a hit, the net grows and envelops the creature, which becomes Off-Guard and takes a –10-foot circumstance penalty to its Speeds until it Escapes, and on a critical hit, it's also Immobilized until it Escapes. The net also attempts to counteract teleportation effects and planar travel of the creature it's entrapping. The Escape DC is 44, and the net has a counteract rank of 9 and a counteract modifier of 1d20+38. If the target is a demon or connected to a demon, they must roll twice and take the lower result on all attempts to Escape (this is a misfortune effect), and for counter act checks, the net rolls twice and takes the higher result (this is a fortune effect). You can't Perform with the halcyon heart while it doesn't have its net. So long as the net doesn't contain a creature, you can restore it with a single action, which has the concentrate trait.\nDestruction If the Gorilla King plays a halcyon heart in front of Angazhan's totem, the gourd decomposes, the net frays, and the beads shatter.",
      "bulk": 1,
      "price": {},
      "usage": "held-in-two-hands",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:shadowed-scale-the-jungle-secret",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "kOanU8MQt6KFmRy0",
      "slug": "shadowed-scale-the-jungle-secret",
      "publicationTitle": "Pathfinder #174: Shadows of the Ancients",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/equipment.svg"
    },
    "sourceHash": "sha256:3205bc19c15649b5d165c57c1a16926e007d3dcb5550df7c7e7c7a73abf5e02b",
    "translatableHash": "sha256:dfbebb91432c84322d6546defe461fe66918f0939989e918b5bd8d84fe0209e4",
    "data": {
      "schemaVersion": 1,
      "name": "Shadowed Scale, the Jungle Secret",
      "itemType": "equipment",
      "level": 22,
      "rarity": "unique",
      "traits": [
        "artifact",
        "invested",
        "magical",
        "primal"
      ],
      "description": "This gold-inlaid wooden mask depicts the reptilian visage of a mokele-mbembe, a jungle predator seen by the Mwangi as embodiments of nature's strength and majesty. If you're a Magaambyan who already has a mask, you can use Shadowed Scale, the Jungle Secret in lieu of your own mask for the purposes of mask-related abilities, such as Magic Warrior Dedication. When you wear the mask, you are always Concealed while in a jungle.\nActivate 1 envision\nRequirements Your last action was a melee Strike that killed a living creature or destroyed an undead creature\nEffect You cause the body to decompose into a pile of fertile soil. The creature's body is completely destroyed at the start of your next turn, and it can only be returned to life with the use of powerful magic such as Miracle or Wish.\nActivate 1 Interact\nFrequency once per hour\nRequirements You are adjacent to the body of a creature you killed that has decomposed into soil\nEffect You pull a seed from the mask and throw it into the soil, where it sprouts. You cast Summon Plant or Fungus; the spell is heightened to a level equal to one-half of the slain creature's level, rounded up. When the spell's duration ends, the plant creature returns to the soil, where it roots itself and becomes a non-creature piece of flora.\nDestruction If the progenitor of all mokele-mbembes stomps on the mask, it is crushed to splinters.",
      "bulk": 0.1,
      "price": {},
      "usage": "wornmask",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:ancestral-embrace",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "yNteshMHb0xIXFlC",
      "slug": "ancestral-embrace",
      "publicationTitle": "Pathfinder #174: Shadows of the Ancients",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:ebb785281b22c758e3d0fbbdee02e7cfe0855eb57e2b91a543e31cfcaa4f5db2",
    "translatableHash": "sha256:ba76d21980f89754717cf62f1e7f2264fc2f74ef7964d0f5e3a558081f532958",
    "data": {
      "schemaVersion": 1,
      "name": "Ancestral Embrace",
      "itemType": "armor",
      "level": 26,
      "rarity": "unique",
      "traits": [
        "artifact",
        "divine"
      ],
      "description": "This brightly colored +4 major resilient leather armor is inscribed with a spiral that has no end or beginning. Though it is a symbol of the ancient religion of Holy Xatramba, it also serves as a religious symbol of Pharasma. When you invest the armor, you gain void resistance 25 and can draw on the power of your ancestors. You gain an ancestry feat from your ancestry; the feat can be any level, but you must meet any other prerequisites of the feat. You lose the feat when the investment ends, and you can select a different feat each time you invest the armor again.\nActivate f envision\nFrequency once per day\nTrigger You use an ancestry feat that has a limited number of uses per day\nEffect You gain an additional use of the ancestry feat. If you do not use it before the next time you make your daily preparations, the use is lost.\nActivate f envision\nTrigger You begin casting a legend lore ritual to learn legends about your ancestry or about someone of your ancestry\nEffect Ancestral Embrace reduces the casting time of this ritual to 1 hour, and you don't need secondary casters for this ritual.\nActivate 2 command, Interact\nFrequency once per day\nEffect The armor casts Avatar, granting these specific additional abilities instead of those associated with a deity: Speed 70 feet, air walk, ignore difficult terrain and greater difficult terrain\n• Melee 1 spear (reach 15 feet, thrown 50 feet), Damage 6d6+6 piercing\n• Ranged 1 blowgun (range 120 feet), Damage 1d6+3 piercing plus 5d6 poison.\nDestruction Ancestral Embrace crumbles if its wearer intentionally and knowingly kills or desecrates the remains of six generations of their family.",
      "bulk": 1,
      "price": {},
      "usage": "",
      "category": "light",
      "group": "leather",
      "armor": {
        "armorClassBonus": 1,
        "dexterityCap": 4,
        "checkPenalty": -1,
        "speedPenaltyFeet": 0
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:mudlily",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "bWcH5lQ3AuaQwZ08",
      "slug": "mudlily",
      "publicationTitle": "Pathfinder #175: Broken Tusk Moon",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:94fbb5b0c1ae37093321823046e4b72786c56e51cf797e130a83297b780644a7",
    "translatableHash": "sha256:5420a43c0aa55804a9433a72bd19a955acfc05c0c803646b71dac5cf8275ee3a",
    "data": {
      "schemaVersion": 1,
      "name": "Mudlily",
      "itemType": "equipment",
      "level": 1,
      "rarity": "uncommon",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "This golden flower grows amid filthy ponds or puddles, its spotless yellow petals sharply contrasting its soiled surroundings. You can pin a mudlily to your clothing or your hair to enjoy some of its magical sullying and cleaning properties. While you wear a clean mudlily, you gradually become dirty over the course of an hour; grime and mud subtly manifest from nowhere onto your clothes, hair, skin, and all of your possessions other than the mudlily. After just 1 hour, you appear as though you've been living in squalor for years. This filth can be washed away normally, but it inevitably returns as long as you continue to wear a clean mudlily.\nIf you soil the mudlily with some dirt or mud, as long as you wear the flower, you instead become clean over an hour. Any gunk soiling your person vanishes completely from everywhere on your body except the mudlily. Each day at dawn, the mudlily instantly becomes clean again.",
      "bulk": 0,
      "price": {
        "gp": 15
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:battering-snare",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "nz4riYwJiko98Mva",
      "slug": "battering-snare",
      "publicationTitle": "Pathfinder #175: Broken Tusk Moon",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/consumable.svg"
    },
    "sourceHash": "sha256:f21dce8c10b561677ec690c0d8d9349d87532ebcc9d9c6020de789bd811f7d9b",
    "translatableHash": "sha256:34a7fbc9729581238aec48477618075d995755b9fd1c83c0c4c9b63c5d43dfc9",
    "data": {
      "schemaVersion": 1,
      "name": "Battering Snare",
      "itemType": "consumable",
      "level": 1,
      "rarity": "common",
      "traits": [
        "consumable",
        "mechanical",
        "nonlethal",
        "snare",
        "trap"
      ],
      "description": "This snare consists of a flat rock or metal plate held in place with a spring or flexible branch. When triggered, the flat object swings wide and smacks the triggering creature violently. The first creature to enter its square receives 2d6 bludgeoning damage (check (reflex, dc:16, basic)). On a critical failure, the creature is also Stunned 1.",
      "bulk": 0,
      "price": {
        "gp": 3
      },
      "usage": "held-in-one-hand",
      "category": "snare",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:tallow-bomb-lesser",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "OOqno1OwqJQBEtXe",
      "slug": "tallow-bomb-lesser",
      "publicationTitle": "Pathfinder #175: Broken Tusk Moon",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:34591e55263c82840b28b5aebbde784474468fa00580fac968c57372b1562f46",
    "translatableHash": "sha256:fcec36f8ac6c0ab82ca9411c9c2af2b128a2eaaa95eb6eed2485e7b60fb7f922",
    "data": {
      "schemaVersion": 1,
      "name": "Tallow Bomb (Lesser)",
      "itemType": "weapon",
      "level": 1,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "bomb",
        "consumable",
        "fire",
        "splash"
      ],
      "description": "Activate A Strike\nA mixture of rendered animal fat and acids designed to ignite the fat when exposed to air, a tallow bomb creates a splash of burning oil that adheres to skin, clothes, and hair. A tallow bomb deals the listed fire damage, persistent fire damage, and splash damage.\nOn a critical hit, a living creature taking persistent fire damage from a tallow bomb is Sickened 1 from the stench of burning fat and can't reduce its sickened value below 1 while the persistent fire damage lasts.\nThe bomb deals 1d4 persistent fire damage and 1 fire splash damage.",
      "bulk": 0.1,
      "price": {
        "gp": 3
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "bomb"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:twigjack-sack-lesser",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "tm5l8uXtQQGMTvgY",
      "slug": "twigjack-sack-lesser",
      "publicationTitle": "Pathfinder #175: Broken Tusk Moon",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:7a59d4fbbf79bf1036e28833a10b1736c4d09d025dd5b4e67129a141d7a6d960",
    "translatableHash": "sha256:d83568365bb5ed64f440b596c6a88c643559d4c10319631728eccac776ad1594",
    "data": {
      "schemaVersion": 1,
      "name": "Twigjack Sack (Lesser)",
      "itemType": "weapon",
      "level": 1,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "bomb",
        "consumable",
        "splash"
      ],
      "description": "Activate 1 Strike\nSharp, flexible brambles poke from this sack made of intricately intertwined plant fibers. The sack's contents creak under the strain of the tightly compressed bundle.\nWhen thrown, a twigjack sack bursts open, spraying brambles in all directions that gouge and slash nearby creatures. A twigjack sack deals the listed piercing damage, persistent bleed damage, and splash damage.\nThe bomb deals 1d6 piercing damage, 1 persistent bleed damage, and 1 piercing splash damage.",
      "bulk": 0.1,
      "price": {
        "gp": 3
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "bomb",
      "damage": {
        "dice": 1,
        "die": "d6",
        "type": "piercing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:poison-barbs-snare",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "YeF05oItxHNdOi6z",
      "slug": "poison-barbs-snare",
      "publicationTitle": "Pathfinder #175: Broken Tusk Moon",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/consumable.svg"
    },
    "sourceHash": "sha256:9e0c9502b8b4b312dddc06c5ed2d15534a1ab02958435fa5a42edbd49ac980eb",
    "translatableHash": "sha256:8d677d65641aec6f219a7a6b6aa49fee86154adddddae9322a37b44c71e3328e",
    "data": {
      "schemaVersion": 1,
      "name": "Poison Barbs Snare",
      "itemType": "consumable",
      "level": 1,
      "rarity": "common",
      "traits": [
        "consumable",
        "mechanical",
        "snare",
        "trap"
      ],
      "description": "You set several barbed animal spines or wooden stakes in the ground, each tipped with poison from a venomous animal or toxic plant. The snare deals 1d4 piercing damage to the first creature to enter its square (check (reflex, dc:15, basic)). On a failed save, several barbs lodge in the creature's feet. For 1 minute (or until a creature or an ally spends three Interact actions to remove the barbs), the barbs deal 1d4 poison damage to the creature each time it Strides more than half its Speed.",
      "bulk": 0,
      "price": {
        "gp": 4
      },
      "usage": "held-in-one-hand",
      "category": "snare",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:ember-dust",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "vAMgDuD3BphJL8EJ",
      "slug": "ember-dust",
      "publicationTitle": "Pathfinder #175: Broken Tusk Moon",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/consumable.svg"
    },
    "sourceHash": "sha256:6de645ccf052e00d2a89e0df6c9386e82b97bb9341c1bb16ac1c6e84357a5c2e",
    "translatableHash": "sha256:51efa57db804cb07fd37127f84f7accec3b9dc2a7b56dce7f6730c2197e37251",
    "data": {
      "schemaVersion": 1,
      "name": "Ember Dust",
      "itemType": "consumable",
      "level": 2,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "fire",
        "magical"
      ],
      "description": "Activate 1 Interact\nThis handful of gritty black dust glows faintly, like old coals, but is cool to the touch. When ember dust is sprinkled upon the ground or a flat surface in an adjacent unoccupied square, the dust transforms into a bonfire that fills the majority of the square. For 8 hours, the bonfire blazes regardless of whether it has any fuel.\nThe fire doesn't harm the surface on which it was sprinkled, and it can't be extinguished except by fully dousing or submerging it in water, or by smothering it completely. Anything that's lit from the bonfire requires fuel to burn and can be quenched normally.\nWhile it's safe enough to move through the space and edge around the bonfire, a creature remaining in the bonfire for at least a full round takes 1d6 fire damage each round.\nAfter 8 hours, the bonfire becomes a normal fire and continues burning only as conditions permit.",
      "bulk": 0,
      "price": {
        "gp": 6
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:tallow-bomb-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "4pVGwkVi6izoUuLC",
      "slug": "tallow-bomb-moderate",
      "publicationTitle": "Pathfinder #175: Broken Tusk Moon",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:c38550c0f1b169f2161fa527935b80b77dfa5d636b5db4426d3bdf2bbf82e892",
    "translatableHash": "sha256:d9f0ec929b68e5e55bb5f40e09ac51f8144a4c1f4b022766c412ff68c1e8725f",
    "data": {
      "schemaVersion": 1,
      "name": "Tallow Bomb (Moderate)",
      "itemType": "weapon",
      "level": 3,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "bomb",
        "consumable",
        "fire",
        "splash"
      ],
      "description": "Activate A Strike\nA mixture of rendered animal fat and acids designed to ignite the fat when exposed to air, a tallow bomb creates a splash of burning oil that adheres to skin, clothes, and hair. A tallow bomb deals the listed fire damage, persistent fire damage, and splash damage.\nOn a critical hit, a living creature taking persistent fire damage from a tallow bomb is Sickened 1 from the stench of burning fat and can't reduce its sickened value below 1 while the persistent fire damage lasts.\nYou gain a +1 item bonus to attack rolls. The bomb deals 2d4 persistent fire damage and 2 fire splash damage.",
      "bulk": 0.1,
      "price": {
        "gp": 10
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "bomb"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:broken-tusk-pendant",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "c9GaJKCxxqXKZokZ",
      "slug": "broken-tusk-pendant",
      "publicationTitle": "Pathfinder #175: Broken Tusk Moon",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:78d00339bad7ba50ef7d746b905b0938b40776430547d54bbe88d866068454f6",
    "translatableHash": "sha256:25ed2f08ff82e63d30db5dc9ddaa6d23adbae4db9cd9f1df60431fb030308be3",
    "data": {
      "schemaVersion": 1,
      "name": "Broken Tusk Pendant",
      "itemType": "equipment",
      "level": 3,
      "rarity": "rare",
      "traits": [
        "invested",
        "primal"
      ],
      "description": "The followers of the Broken Tusk have passed down their custom of crafting and gifting these small ivory necklaces for generations. They're typically made from mammoth tusk (though any type of ivory will do), and each is carved to resemble a particular kind of animal-usually a raven, a moose, an ox, or an otter. Because tradition dictates that Broken Tusk followers take ivory only from already-dead animals, Broken Tusk pendants are especially rare; if an individual loses their pendant, it might be years before they acquire the materials necessary to fashion a replacement. Broken Tusk pendants bear no magical powers if they are made for oneself; only gifted pendants have true magical properties.\nYou wear a Broken Tusk pendant like jewelry or tie it to your clothing. A Broken Tusk pendant grants you a +1 item bonus to Nature checks; this bonus increases to +2 when you Command an Animal of the specific kind depicted by the pendant.\nActivate R Interact\nFrequency once per hour\nTrigger An animal targets you with a melee attack, and you can see the animal\nEffect You gain a +1 item bonus to AC against the triggering attack, or a +2 item bonus if the animal is the specific kind depicted by the pendant.",
      "bulk": 0,
      "price": {
        "gp": 50
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:dream-pollen-snare",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "hw81uONdpyUbdWUJ",
      "slug": "dream-pollen-snare",
      "publicationTitle": "Pathfinder #175: Broken Tusk Moon",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/consumable.svg"
    },
    "sourceHash": "sha256:adb12a82b5cc358f2d631b917df9f168307568463aa7c9b88040c6c18b6c6be6",
    "translatableHash": "sha256:5dba1886b46693db6cb6298ec531d963a60fbacb92c36ca257a7ec61e12f3e91",
    "data": {
      "schemaVersion": 1,
      "name": "Dream Pollen Snare",
      "itemType": "consumable",
      "level": 3,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "incapacitation",
        "mechanical",
        "mental",
        "snare",
        "trap"
      ],
      "description": "This simple trap is made of taut twigs that, when triggered, snap down on a pollen-filled sac of a peculiar flower. When inhaled, the pollen imparts a hazy state of profound agreeability. The first creature that enters the snare's space triggers the snare. The creature that triggered the trap must attempt a check (will, dc:18) save. Undead creatures and creatures that don't breathe are immune to dream pollen.\nCritical Success The creature is unaffected.\nSuccess The creature is Stupefied 1 for 1 round.\nFailure The creature is stupefied 1 for 1 round. For 1 minute, the creature becomes friendly to all creatures to which it was indifferent, or helpful to all creatures to which it was friendly. If the creature was unfriendly or hostile to any creatures, it remains unfriendly or hostile to them. If the creature is an animal, any creature to which it's friendly or helpful can use Diplomacy to Make an Impression on it and to make very simple Requests of it.\nCritical Failure As failure, but the duration of the agreeability is 1 hour instead of 1 minute.",
      "bulk": 0,
      "price": {
        "gp": 12
      },
      "usage": "held-in-one-hand",
      "category": "snare",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:twigjack-sack-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Ix5w4UNElK0ncBm2",
      "slug": "twigjack-sack-moderate",
      "publicationTitle": "Pathfinder #175: Broken Tusk Moon",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:0fd1aef578783f8b71c32cb0e02ee6d69bfb11f3855bf2d37982ee9ac604104c",
    "translatableHash": "sha256:2273a3c7902622cabe9632d232d8b1157ed80a5b40d44e3227ad0a10825478a7",
    "data": {
      "schemaVersion": 1,
      "name": "Twigjack Sack (Moderate)",
      "itemType": "weapon",
      "level": 3,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "bomb",
        "consumable",
        "splash"
      ],
      "description": "Activate 1 Strike\nSharp, flexible brambles poke from this sack made of intricately intertwined plant fibers. The sack's contents creak under the strain of the tightly compressed bundle.\nWhen thrown, a twigjack sack bursts open, spraying brambles in all directions that gouge and slash nearby creatures. A twigjack sack deals the listed piercing damage, persistent bleed damage, and splash damage.\nYou gain a +1 item bonus to attack rolls. The bomb deals 2d6 piercing damage, 3 persistent bleed damage, and 2 piercing splash damage.",
      "bulk": 0.1,
      "price": {
        "gp": 10
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "bomb",
      "damage": {
        "dice": 2,
        "die": "d6",
        "type": "piercing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:raven-band",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "maHPPEwKK2NxbMoV",
      "slug": "raven-band",
      "publicationTitle": "Pathfinder #175: Broken Tusk Moon",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:b5df1d3e769f8bd03d499cd844f086bec9893a408369d59e7704d9cb721079cc",
    "translatableHash": "sha256:4d51d5f929baaf557d6a19ce035682daf1aa762c559eeab076ea76e8240f42c2",
    "data": {
      "schemaVersion": 1,
      "name": "Raven Band",
      "itemType": "equipment",
      "level": 3,
      "rarity": "uncommon",
      "traits": [
        "invested",
        "primal"
      ],
      "description": "This armband is woven from overlapping raven feathers, including one large feather from a kadlaka. As long as you wear it, you understand what ravens are saying, but you can't speak to ravens unless you activate the raven band.\nActivate 1 Interact\nFrequency once per day\nEffect When you stroke the kadlaka feather, the raven band gives you the effects of Speak with Animals, except that you can speak with and understand only birds, not other animals.",
      "bulk": 0,
      "price": {
        "gp": 60
      },
      "usage": "wornarmbands",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:hoof-stakes-snare",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Qx6CAAbSQ0RpruJH",
      "slug": "hoof-stakes-snare",
      "publicationTitle": "Pathfinder #175: Broken Tusk Moon",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/consumable.svg"
    },
    "sourceHash": "sha256:eec777ddbb059fa6230f670a7924cac7ab7d8465513e9eeaf1451d3a084b024f",
    "translatableHash": "sha256:5c4410c88d92dd17debfcb11609eabec9dd9c43a826d975529db1f3d31a55192",
    "data": {
      "schemaVersion": 1,
      "name": "Hoof Stakes Snare",
      "itemType": "consumable",
      "level": 3,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "mechanical",
        "snare",
        "trap"
      ],
      "description": "This snare consists of several narrow, sharpened stakes, each over a foot long, clustered together and pointing upward. The snare is patently obvious unless planted amid tall reeds or grasses or in someplace dark. Medium and smaller creatures can pass among the stakes easily; unlike most snares, the hoof stakes snare triggers only when a Large or larger creature enters its square. The snare deals 2d6 piercing damage to the triggering creature, which must attempt a check (reflex, dc:18) save.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage, and it takes a –5-foot circumstance penalty to its Speed for 1 minute, or until the creature or an ally spends three Interact actions to carefully remove the stakes.\nFailure The triggering creature takes full damage. The creature takes a –5-foot circumstance penalty to its Speed, and any time it deals damage with a foot Strike (including as part of Trample or a similar ability), the creature takes 2d6 piercing damage. The effect lasts for 1 minute, or until the creature or an ally spends three Interact actions to carefully remove the stakes.\nCritical Failure As failure, but the circumstance penalty to its Speed is -10 feet, and the creature takes 4d6 piercing damage whenever it deals damage with a foot Strike.",
      "bulk": 0,
      "price": {
        "gp": 10
      },
      "usage": "held-in-one-hand",
      "category": "snare",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:mad-mammoths-juke",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "9TAYUFDOJa0kvk9m",
      "slug": "mad-mammoths-juke",
      "publicationTitle": "Pathfinder #175: Broken Tusk Moon",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/talismans/wolf-fang.webp"
    },
    "sourceHash": "sha256:d0e141ca16ca6769d4ab2d856cca421313233003c4c463db43bba0f293b6bf3b",
    "translatableHash": "sha256:41fc8728c35d942d6fdfb330a30dfd97a99aea81f692da547a9e60a1801b83fb",
    "data": {
      "schemaVersion": 1,
      "name": "Mad Mammoth's Juke",
      "itemType": "consumable",
      "level": 5,
      "rarity": "rare",
      "traits": [
        "consumable",
        "magical",
        "talisman",
        "teleportation"
      ],
      "description": "Activate F envision\nTrigger You would be injured by an effect that would bury you, such as an avalanche or a tunnel collapse\nRequirements You are an expert in Acrobatics\nThis small, fragile tusk came from a very young mammoth. It's filled with ice-cold glacial water and capped with a carved piece of ivory. When you crush the tusk, the water rushes around you in an instant as you twist away from impending disaster with a supernatural flourish. You teleport to an unoccupied space within 200 feet that you can see, bringing along all your equipment. You can't bring any other creature with you, even in an extradimensional space.",
      "bulk": 0,
      "price": {
        "gp": 30
      },
      "usage": "affixed-to-armor",
      "category": "talisman",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:tallow-bomb-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "5IUyrJItXkMASgmq",
      "slug": "tallow-bomb-greater",
      "publicationTitle": "Pathfinder #175: Broken Tusk Moon",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:009259cf923ad089565ef82e412ebc4f3b7dcef55cc1a05cab4312a18be9c7ff",
    "translatableHash": "sha256:c272453b32f3aa94d11db721039d50e9fb88af19f1715a6272b65c0fa6778b63",
    "data": {
      "schemaVersion": 1,
      "name": "Tallow Bomb (Greater)",
      "itemType": "weapon",
      "level": 11,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "bomb",
        "consumable",
        "fire",
        "splash"
      ],
      "description": "Activate A Strike\nA mixture of rendered animal fat and acids designed to ignite the fat when exposed to air, a tallow bomb creates a splash of burning oil that adheres to skin, clothes, and hair. A tallow bomb deals the listed fire damage, persistent fire damage, and splash damage.\nOn a critical hit, a living creature taking persistent fire damage from a tallow bomb is Sickened 1 from the stench of burning fat and can't reduce its sickened value below 1 while the persistent fire damage lasts.\nYou gain a +2 item bonus to attack rolls. The bomb deals 3d4 persistent fire damage and 3 fire splash damage.",
      "bulk": 0.1,
      "price": {
        "gp": 250
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "bomb"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:twigjack-sack-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "yq5BoByEscKRZsto",
      "slug": "twigjack-sack-greater",
      "publicationTitle": "Pathfinder #175: Broken Tusk Moon",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:39bcd4e714d8bebcc98832acf3a9bce7b6579568caec1a02594ab39b799589de",
    "translatableHash": "sha256:20b3d0403218d066c4f6fa2a0668135a989c763dd4f56db7e6a53ea06fafbfbb",
    "data": {
      "schemaVersion": 1,
      "name": "Twigjack Sack (Greater)",
      "itemType": "weapon",
      "level": 11,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "bomb",
        "consumable",
        "splash"
      ],
      "description": "Activate 1 Strike\nSharp, flexible brambles poke from this sack made of intricately intertwined plant fibers. The sack's contents creak under the strain of the tightly compressed bundle.\nWhen thrown, a twigjack sack bursts open, spraying brambles in all directions that gouge and slash nearby creatures. A twigjack sack deals the listed piercing damage, persistent bleed damage, and splash damage.\nYou gain a +2 item bonus to attack rolls. The bomb deals 3d6 piercing damage, 4 persistent bleed damage, and 3 piercing splash damage.",
      "bulk": 0.1,
      "price": {
        "gp": 250
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "bomb",
      "damage": {
        "dice": 3,
        "die": "d6",
        "type": "piercing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:broken-tusk-pendant-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "hEIqSfSNBWwEkldc",
      "slug": "broken-tusk-pendant-greater",
      "publicationTitle": "Pathfinder #175: Broken Tusk Moon",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:49da49ddd0d7ecf8351f4556f7001a8ff1e6fcac15e1b78439abd0073e015312",
    "translatableHash": "sha256:1a14cede0b9cccf43bcb2f8a6b091c99a7702ce42e8b18a6466f3667ce4a135b",
    "data": {
      "schemaVersion": 1,
      "name": "Broken Tusk Pendant (Greater)",
      "itemType": "equipment",
      "level": 13,
      "rarity": "rare",
      "traits": [
        "invested",
        "primal"
      ],
      "description": "The followers of the Broken Tusk have passed down their custom of crafting and gifting these small ivory necklaces for generations. They're typically made from mammoth tusk (though any type of ivory will do), and each is carved to resemble a particular kind of animal-usually a raven, a moose, an ox, or an otter. Because tradition dictates that Broken Tusk followers take ivory only from already-dead animals, Broken Tusk pendants are especially rare; if an individual loses their pendant, it might be years before they acquire the materials necessary to fashion a replacement. Broken Tusk pendants bear no magical powers if they are made for oneself; only gifted pendants have true magical properties.\nYou wear a Broken Tusk pendant like jewelry or tie it to your clothing. A Broken Tusk pendant grants you a +2 item bonus to Nature checks; this bonus increases to +3 when you Command an Animal of the specific kind depicted by the pendant.\nActivate R Interact\nFrequency once per hour\nTrigger An animal targets you with a melee attack, and you can see the animal\nEffect You gain a +1 item bonus to AC against the triggering attack, or a +2 item bonus if the animal is the specific kind depicted by the pendant.\nOnce per day, when you use the Broken Tusk pendant's activation, if the animal misses you, the Broken Tusk pendant casts Dominate on the animal (check (will, dc:30, name:Dominate, traits:enchantment,incapacitation,primal,mental, overrideTraits:true)). You can choose whether to use this once-per-day effect after the animal misses you.",
      "bulk": 0,
      "price": {
        "gp": 3000
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:twigjack-sack-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "8h5UFFk5EodKZh19",
      "slug": "twigjack-sack-major",
      "publicationTitle": "Pathfinder #175: Broken Tusk Moon",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:15d4bbc2e676b090fc17991c4167476a1ca49d9404ff11fc87407a980a00eb41",
    "translatableHash": "sha256:3723b048847ca79e13b568b6d5732cb1f815e75320d36de00e48b16173b7213c",
    "data": {
      "schemaVersion": 1,
      "name": "Twigjack Sack (Major)",
      "itemType": "weapon",
      "level": 17,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "bomb",
        "consumable",
        "splash"
      ],
      "description": "Activate 1 Strike\nSharp, flexible brambles poke from this sack made of intricately intertwined plant fibers. The sack's contents creak under the strain of the tightly compressed bundle.\nWhen thrown, a twigjack sack bursts open, spraying brambles in all directions that gouge and slash nearby creatures. A twigjack sack deals the listed piercing damage, persistent bleed damage, and splash damage.\nYou gain a +3 item bonus to attack rolls. The bomb deals 4d6 piercing damage, 5 persistent bleed damage, and 4 piercing splash damage.",
      "bulk": 0.1,
      "price": {
        "gp": 2500
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "bomb",
      "damage": {
        "dice": 4,
        "die": "d6",
        "type": "piercing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:tallow-bomb-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "l29fzEJ6SSIP2wJn",
      "slug": "tallow-bomb-major",
      "publicationTitle": "Pathfinder #175: Broken Tusk Moon",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:a8bdfccf4571aa2fc621465c431f5ae43464b31f128ac5d811f5953d89332360",
    "translatableHash": "sha256:d9692e17e0cadc573158f9b19ecbad08910db376ef3ee9c0fc10ee0a73ce95a7",
    "data": {
      "schemaVersion": 1,
      "name": "Tallow Bomb (Major)",
      "itemType": "weapon",
      "level": 17,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "bomb",
        "consumable",
        "fire",
        "splash"
      ],
      "description": "Activate A Strike\nA mixture of rendered animal fat and acids designed to ignite the fat when exposed to air, a tallow bomb creates a splash of burning oil that adheres to skin, clothes, and hair. A tallow bomb deals the listed fire damage, persistent fire damage, and splash damage.\nOn a critical hit, a living creature taking persistent fire damage from a tallow bomb is Sickened 1 from the stench of burning fat and can't reduce its sickened value below 1 while the persistent fire damage lasts.\nYou gain a +3 item bonus to attack rolls. The bomb deals 4d4 persistent fire damage and 4 fire splash damage.",
      "bulk": 0.1,
      "price": {
        "gp": 2500
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "bomb"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:pernicious-spore-bomb-lesser",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "841G24r5ITFYk5zQ",
      "slug": "pernicious-spore-bomb-lesser",
      "publicationTitle": "Pathfinder #176: Lost Mammoth Valley",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:340d955efc431f98038b95746f1d2d187f4a9c5929db8d8516d22d1c1c260553",
    "translatableHash": "sha256:4e77703f7069bb6d7bc0e2a45ec3ba9dd3c49b72c55fa4a4dd1dededc1ce82a2",
    "data": {
      "schemaVersion": 1,
      "name": "Pernicious Spore Bomb (Lesser)",
      "itemType": "weapon",
      "level": 1,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "bomb",
        "consumable",
        "poison",
        "splash"
      ],
      "description": "Activate 1 Strike\nThis flask contains fast-growing mold spores, which quickly take root but just as quickly rot away. The bomb deals 1 poison damage, 1d4 persistent piercing damage, and 1 poison splash damage. Except on a critical failure, one square of the target creature's space is coated in vegetation, becoming difficult terrain for 1 round.",
      "bulk": 0.1,
      "price": {
        "gp": 3
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "bomb"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:water-bomb-lesser",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "BG04L9GjWerSgWX3",
      "slug": "water-bomb-lesser",
      "publicationTitle": "Pathfinder #176: Lost Mammoth Valley",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:247d1f36da1867bdcf26e11e157e725745ef64465c3518f5fcae29713934f6ce",
    "translatableHash": "sha256:0997e44c269cb7127649c7efa689483fc48de1ddded2c53b0ab0071a521711bb",
    "data": {
      "schemaVersion": 1,
      "name": "Water Bomb (Lesser)",
      "itemType": "weapon",
      "level": 1,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "bomb",
        "consumable",
        "nonlethal",
        "splash",
        "water"
      ],
      "description": "Activate 1 Strike\nThis bladder of water explodes when put under pressure or upon being punctured, dealing minimal damage, neutralizing acids, and dousing flames. The bomb deals 1 nonlethal damage and 1 splash)[nonlethal damage]. On a hit, if the target is suffering from Persistent Acid or Persistent Fire Damage, it can attempt a flat check to end that persistent damage immediately. As this is particularly effective assistance, the DC of the flat check is reduced from 15 to 10 for this check. On a hit against an unattended, non-magical fire, the bomb extinguishes the fire, or extinguishes one square of fire for a larger fire.",
      "bulk": 0.1,
      "price": {
        "gp": 3
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "bomb"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:smoke-screen-snare-lesser",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "BJtpbzjSza4wUlQX",
      "slug": "smoke-screen-snare-lesser",
      "publicationTitle": "Pathfinder #176: Lost Mammoth Valley",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:ddac1bdd73abe876276aa078eac4d0f4e7cecabe5e86e720dfac4d822d302b9a",
    "translatableHash": "sha256:5b5917cc7f0ed5ba59efb1bb3f504aeecc68a0afefc2f7cbf526e6c21456bb22",
    "data": {
      "schemaVersion": 1,
      "name": "Smoke Screen Snare (Lesser)",
      "itemType": "consumable",
      "level": 1,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "mechanical",
        "snare",
        "trap"
      ],
      "description": "You create a snare that releases a dense cloud of smoke when a creature enters the square, filling a specified area. All creatures within that area are Concealed, and all other creatures are concealed to them. The smoke lasts for 1 minute or until dispersed by a strong wind.\nThe smoke fills the snare's square and all adjacent squares.\nCraft Requirements Supply a Lesser Smokestick.",
      "bulk": 0,
      "price": {
        "gp": 3
      },
      "usage": "held-in-one-hand",
      "category": "snare",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:mud-bomb-lesser",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "HtBqmBFYuxJp2QiZ",
      "slug": "mud-bomb-lesser",
      "publicationTitle": "Pathfinder #176: Lost Mammoth Valley",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:9ba8001a14650e7d064bfda59b7f8a7b19fcdf88ca1a1cb4ae45e6241d4bd265",
    "translatableHash": "sha256:7b8c0289c181decbff5c5b3ab8e45fe74480996a0a299e692169952dc39682bd",
    "data": {
      "schemaVersion": 1,
      "name": "Mud Bomb (Lesser)",
      "itemType": "weapon",
      "level": 1,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "bomb",
        "consumable",
        "earth",
        "splash"
      ],
      "description": "Activate 1 Strike\nThis clay vessel launches gobs of clinging mud and grit. The bomb deals 1d6 bludgeoning damage and 1 splash)[bludgeoning damage]. On a critical hit, the target is Dazzled until the start of your next turn.",
      "bulk": 0.1,
      "price": {
        "gp": 3
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "bomb",
      "damage": {
        "dice": 1,
        "die": "d6",
        "type": "bludgeoning"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:quickmelt-slick-lesser",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "ENAlE5JV00GFkGjb",
      "slug": "quickmelt-slick-lesser",
      "publicationTitle": "Pathfinder #176: Lost Mammoth Valley",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/consumable.svg"
    },
    "sourceHash": "sha256:64392e81a6f560baa9a8160b239e8c04fb96d59bb3d7869db4c5a591da9f0448",
    "translatableHash": "sha256:2ceb85175c53f895a633fd88422c65c223c582ce4b0c66899f33e0a7f9179226",
    "data": {
      "schemaVersion": 1,
      "name": "Quickmelt Slick (Lesser)",
      "itemType": "consumable",
      "level": 2,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "consumable"
      ],
      "description": "This clay jar is filled with a warm fluid composed primarily of lagofir oil and natural fire retardants. You can pour the fluid in an empty area adjacent to you, or over an adjacent frozen object, with an Interact action. The fluid instantly melts non-magical ice and snow in the area and harmlessly vaporizes the resulting meltwater. When used to melt magical ice and snow, quickmelt slick attempts a counteract check with the listed counteract modifier to melt the ice and snow, using the source of that ice and snow to determine the counteract rank and DC.\nLesser quickmelt slick melts ice and snow up to 1 foot in depth in one 5-foot square, or melts the ice covering a Small or smaller object. The slick has a 1d20+6 modifier for the counteract check and a counteract rank of 1.",
      "bulk": 0.1,
      "price": {
        "gp": 5
      },
      "usage": "held-in-two-hands",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:winterstep-elixir-minor",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "R3AnwcaHru4PFHJ4",
      "slug": "winterstep-elixir-minor",
      "publicationTitle": "Pathfinder #176: Lost Mammoth Valley",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/consumable.svg"
    },
    "sourceHash": "sha256:4082dc95194301224af30aef17f2e5b96355b663cc5263b740bf7544f8de4bb9",
    "translatableHash": "sha256:a8189e434eafbf77ef0e74e8dbb9fec16caffe4cf172ae8c9bf7fec81bbcf942",
    "data": {
      "schemaVersion": 1,
      "name": "Winterstep Elixir (Minor)",
      "itemType": "consumable",
      "level": 2,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "consumable",
        "elixir"
      ],
      "description": "Activate 1 Interact\nThis frigid white elixir widens your feet and lightens your steps, enabling you to walk across ice and snow without difficulty. You ignore the uneven ground and difficult terrain caused by ice, and the difficult terrain caused by snow (reducing greater difficult terrain caused by ice or snow to ordinary difficult terrain). The duration is 1 minute.",
      "bulk": 0.1,
      "price": {
        "gp": 6
      },
      "usage": "held-in-one-hand",
      "category": "elixir",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:mud-bomb-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "0U4qXSxfZDMIJDtA",
      "slug": "mud-bomb-moderate",
      "publicationTitle": "Pathfinder #176: Lost Mammoth Valley",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:80a75e96f455eca8b7b44f88ab783dea84b8cfd87bb640f1c4684799627f7203",
    "translatableHash": "sha256:e18c527bdb590c7c3841c3013357520b2e5c12deef7303d2224ca122b91a4b23",
    "data": {
      "schemaVersion": 1,
      "name": "Mud Bomb (Moderate)",
      "itemType": "weapon",
      "level": 3,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "bomb",
        "consumable",
        "earth",
        "splash"
      ],
      "description": "Activate 1 Strike\nThis clay vessel launches gobs of clinging mud and grit. You gain a +1 item bonus to attack rolls. The bomb deals 2d6 bludgeoning damage and 2 splash)[bludgeoning damage]. On a critical hit, the target is Dazzled until the start of your next turn.",
      "bulk": 0.1,
      "price": {
        "gp": 10
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "bomb",
      "damage": {
        "dice": 2,
        "die": "d6",
        "type": "bludgeoning"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:merciful-charm",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "C8kQuf7gqpjEDmib",
      "slug": "merciful-charm",
      "publicationTitle": "Pathfinder #176: Lost Mammoth Valley",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:16bed0c4cf9458806d5190ddbb4623277afe020068b18e45654331ed96f0cb4c",
    "translatableHash": "sha256:6949c3e01f7704dec2b9a22e3b8aa77b46148a1c97ce4b2f1bd3c58799ed2182",
    "data": {
      "schemaVersion": 1,
      "name": "Merciful Charm",
      "itemType": "consumable",
      "level": 3,
      "rarity": "uncommon",
      "traits": [
        "magical",
        "talisman"
      ],
      "description": "Activate f envision\nTrigger You Strike with the affixed weapon\nRequirements You're trained in the affixed weapon.\nThis small limestone pendant is typically carved in the shape of clasped hands. When activated, the affixed weapon gains the nonlethal trait for the triggering attack and all other attacks for 1 minute.\nEffect: Merciful Charm",
      "bulk": 0,
      "price": {
        "gp": 9
      },
      "usage": "affixed-to-weapon",
      "category": "talisman",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:pernicious-spore-bomb-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "cbgJbCMU330TVmmO",
      "slug": "pernicious-spore-bomb-moderate",
      "publicationTitle": "Pathfinder #176: Lost Mammoth Valley",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:ff88ac2d47a61babc3404d4d4a6cb89eb743d820ade4b0008b5876717f0b0308",
    "translatableHash": "sha256:342bc34608d33b4fdb6916f4a29c03e156edc103004bf13225fc208a7c323f8c",
    "data": {
      "schemaVersion": 1,
      "name": "Pernicious Spore Bomb (Moderate)",
      "itemType": "weapon",
      "level": 3,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "bomb",
        "consumable",
        "poison",
        "splash"
      ],
      "description": "Activate 1 Strike\nThis flask contains fast-growing mold spores, which quickly take root but just as quickly rot away. You gain a +1 item bonus to attack rolls. The bomb deals 2 poison damage, 2d4 persistent piercing damage, and 2 poison splash damage. Except on a critical failure, the bomb's splash area is coated in vegetation, becoming difficult terrain for 1 round.",
      "bulk": 0.1,
      "price": {
        "gp": 10
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "bomb"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:water-bomb-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "hZ0s1gz0Cr0LGOLG",
      "slug": "water-bomb-moderate",
      "publicationTitle": "Pathfinder #176: Lost Mammoth Valley",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:fc852e79aaff403a6c08c3e69bf40d2652a0f20f5bc108fee9ca2883164dea6a",
    "translatableHash": "sha256:3ab7f7d1f50b97255b510111bf2b832fecef3e1735eedaff6bcbed138f0d4d36",
    "data": {
      "schemaVersion": 1,
      "name": "Water Bomb (Moderate)",
      "itemType": "weapon",
      "level": 3,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "bomb",
        "consumable",
        "nonlethal",
        "splash",
        "water"
      ],
      "description": "Activate 1 Strike\nThis bladder of water explodes when put under pressure or upon being punctured, dealing minimal damage, neutralizing acids, and dousing flames. You gain a +1 item bonus to attack rolls. The bomb deals 1d4 nonlethal damage and 2 splash)[nonlethal damage]. On a hit, if the target is suffering from Persistent Acid or Persistent Fire Damage, it can attempt a flat check to end that persistent damage immediately. As this is particularly effective assistance, the DC of the flat check is reduced from 15 to 10 for this check. On a hit against an unattended, non-magical fire, the bomb extinguishes the fire, or extinguishes one square of fire for a larger fire.",
      "bulk": 0.1,
      "price": {
        "gp": 10
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "bomb",
      "damage": {
        "dice": 1,
        "die": "d4",
        "type": "bludgeoning"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:irritating-thorn-snare",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "77D3QdU33DLcwNrJ",
      "slug": "irritating-thorn-snare",
      "publicationTitle": "Pathfinder #176: Lost Mammoth Valley",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/consumable.svg"
    },
    "sourceHash": "sha256:f57f29cdf3f1579365e6b3e1356e39c078df0216fcd71f38bd73c7ee95c86e0d",
    "translatableHash": "sha256:437bbe8e7712357740aed6381069dec287cc0537a72b0d89cb80e5d744eefae2",
    "data": {
      "schemaVersion": 1,
      "name": "Irritating Thorn Snare",
      "itemType": "consumable",
      "level": 4,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "mechanical",
        "snare",
        "trap"
      ],
      "description": "You dip thorns, spines, or pine needles in a mild toxin that causes skin irritation and swelling, then lash them together into a ball. When a creature enters the snare's square, the thorny ball is lobbed at that creature, dealing 3d8 piercing damage. The creature must attempt a check (reflex, dc:19, traits:damaging-effect) save.\nCritical Success The target is unaffected.\nSuccess The target takes half damage.\nFailure The target takes full damage and 1d6 persistent poison damage.\nCritical Failure The target takes double damage and 2d6 persistent poison damage.",
      "bulk": 0,
      "price": {
        "gp": 15
      },
      "usage": "held-in-one-hand",
      "category": "snare",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:quickmelt-slick-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "8D71bv2HsX29ZtwC",
      "slug": "quickmelt-slick-moderate",
      "publicationTitle": "Pathfinder #176: Lost Mammoth Valley",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/consumable.svg"
    },
    "sourceHash": "sha256:8dedc6768c6b3b62cbdbf7d692cec7d0ba60ec01c29d2e7b98fc81779bba666e",
    "translatableHash": "sha256:76c61840a210e10fbadde766860e90ff8649dfe6e1acef69d9b323caae3f2485",
    "data": {
      "schemaVersion": 1,
      "name": "Quickmelt Slick (Moderate)",
      "itemType": "consumable",
      "level": 4,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "consumable"
      ],
      "description": "This clay jar is filled with a warm fluid composed primarily of lagofir oil and natural fire retardants. You can pour the fluid in an empty area adjacent to you, or over an adjacent frozen object, with an Interact action. The fluid instantly melts non-magical ice and snow in the area and harmlessly vaporizes the resulting meltwater. When used to melt magical ice and snow, quickmelt slick attempts a counteract check with the listed counteract modifier to melt the ice and snow, using the source of that ice and snow to determine the counteract rank and DC.\nModerate quickmelt slick melts ice and snow up to 2 feet in depth in two adjacent 5-foot squares, or melts the ice covering a Medium or smaller object. The slick has a 1d20+8 modifier for the counteract check and a counteract rank of 2.",
      "bulk": 0.1,
      "price": {
        "gp": 13
      },
      "usage": "held-in-two-hands",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:blessed-ampoule",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "skMIwUIMjWzgkZ5B",
      "slug": "blessed-ampoule",
      "publicationTitle": "Pathfinder #176: Lost Mammoth Valley",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/talismans/blessed-ampoule.webp"
    },
    "sourceHash": "sha256:b57cfb27c0e6c8d02bd56d8a3a919420908c61666773fb1a52eea611d906ac3b",
    "translatableHash": "sha256:b70de376387007a23e32692d91ed700b4485de0382249dbbf1f2bbdeaaa60e7d",
    "data": {
      "schemaVersion": 1,
      "name": "Blessed Ampoule",
      "itemType": "consumable",
      "level": 4,
      "rarity": "uncommon",
      "traits": [
        "divine",
        "magical",
        "talisman"
      ],
      "description": "Activate f envision\nTrigger Your Strike with the affixed weapon hits a target\nRequirements You're an expert with the affixed weapon.\nThis small glass vial contains a drop of holy water. When activated, the weapon's physical damage for the Strike becomes spirit damage.",
      "bulk": 0,
      "price": {
        "gp": 15
      },
      "usage": "affixed-to-weapon",
      "category": "talisman",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:malleable-clay",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "gMjoALuwSUdTmqqZ",
      "slug": "malleable-clay",
      "publicationTitle": "Pathfinder #176: Lost Mammoth Valley",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:f381abd2a1f8d7c89c19744cc712d780fb3eda0ac49fd80292aec3b7bb820053",
    "translatableHash": "sha256:a63de68874f784655dac7c0c1ac9138629e1775e832bb5a71f05a91334e38cb5",
    "data": {
      "schemaVersion": 1,
      "name": "Malleable Clay",
      "itemType": "consumable",
      "level": 5,
      "rarity": "uncommon",
      "traits": [
        "magical",
        "talisman"
      ],
      "description": "Activate f envision\nTrigger You Strike with the affixed weapon\nRequirements You're trained in the affixed weapon.\nThis small lump of clay is malleable and can be molded into innumerable shapes and forms. When affixed, the clay takes on the appearance of the affixed weapon. When activated, the affixed weapon gains the versatile bludgeoning, versatile piercing, and versatile slashing weapon traits for the triggering Strike and all other attacks for 1 minute. With each attack, the clay changes shape, taking on the appearance of a different weapon that deals damage of the chosen damage type.\nEffect: Malleable Clay",
      "bulk": 0,
      "price": {
        "gp": 30
      },
      "usage": "affixed-to-weapon",
      "category": "talisman",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:metuaks-pendant",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "SUnKoeqNBsGvUAGe",
      "slug": "metuaks-pendant",
      "publicationTitle": "Pathfinder #176: Lost Mammoth Valley",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/other-worn-items/blightburn-ward.webp"
    },
    "sourceHash": "sha256:904969bdf51004415e5612a262421ad2f0649be285cc69065e57908ed9181efd",
    "translatableHash": "sha256:07412e966f6cfec8e78e045f450cdf8830a2e67524e686136c80cd82149d2d7a",
    "data": {
      "schemaVersion": 1,
      "name": "Metuak's Pendant",
      "itemType": "equipment",
      "level": 5,
      "rarity": "unique",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "This black quartz pendant carved in the shape of an angel's feather hangs from a leather cord worn around the neck. Once worn by Metuak of the Burning Mammoths, this family heirloom anchors you to your ancestors, preserving your sense of self and protecting your mind from mental manipulation and demonic possession. You gain a +1 item bonus to saving throws against mental effects that would make you Confused, Controlled, Frightened, or Stupefied. This bonus increases to +2 if the source of the effect is a fiend.\nActivate r\nFrequency once per hour\nTrigger You succeed or critically succeed at a saving throw against a mental effect that would make you confused, controlled, frightened, or stupefied\nEffect Empowered by your determination, your ancestors protect you and your nearby allies. For 1 minute, you and each of your allies within 30 feet gains a +1 status bonus to saving throws against mental effects that would make you confused, controlled, frightened, or stupefied.\nEffect: Metuak's Pendant",
      "bulk": 0.1,
      "price": {
        "gp": 155
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:winterstep-elixir-lesser",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "6nmOC0blUxtrlLaY",
      "slug": "winterstep-elixir-lesser",
      "publicationTitle": "Pathfinder #176: Lost Mammoth Valley",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/consumable.svg"
    },
    "sourceHash": "sha256:63902199fe53940cd2dc8b0948b6a65ae468504732e4aa0dce3ebaa0a559ed13",
    "translatableHash": "sha256:06731a5ea9ed090ad692bd73dd032f6c3be638c678981d2dd73ad4b864713c88",
    "data": {
      "schemaVersion": 1,
      "name": "Winterstep Elixir (Lesser)",
      "itemType": "consumable",
      "level": 6,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "consumable",
        "elixir"
      ],
      "description": "Activate 1 Interact\nThis frigid white elixir widens your feet and lightens your steps, enabling you to walk across ice and snow without difficulty. You ignore the uneven ground and difficult terrain caused by ice, and the difficult terrain caused by snow (reducing greater difficult terrain caused by ice or snow to ordinary difficult terrain). The duration is 10 minutes.",
      "bulk": 0.1,
      "price": {
        "gp": 36
      },
      "usage": "held-in-one-hand",
      "category": "elixir",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:smoke-screen-snare-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "AUHgdsygq9gaOZh4",
      "slug": "smoke-screen-snare-greater",
      "publicationTitle": "Pathfinder #176: Lost Mammoth Valley",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:ace9275425a025842d1803f7ae1e9b713d14ef753df5523176dede6491fdfcc2",
    "translatableHash": "sha256:669d4e54c199f88565eaa4fe28c0f04cf0ad84368022e5e97557584a4949f84d",
    "data": {
      "schemaVersion": 1,
      "name": "Smoke Screen Snare (Greater)",
      "itemType": "consumable",
      "level": 7,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "mechanical",
        "snare",
        "trap"
      ],
      "description": "You create a snare that releases a dense cloud of smoke when a creature enters the square, filling a specified area. All creatures within that area are Concealed, and all other creatures are concealed to them. The smoke lasts for 1 minute or until dispersed by a strong wind.\nThe smoke fills a 20-foot burst centered on the snare's square.\nCraft Requirements Supply a Greater Smokestick.",
      "bulk": 0,
      "price": {
        "gp": 60
      },
      "usage": "held-in-one-hand",
      "category": "snare",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:runescribed-disk",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "p070A88bOm8gi0sS",
      "slug": "runescribed-disk",
      "publicationTitle": "Pathfinder #176: Lost Mammoth Valley",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/held-items/dreamstone.webp"
    },
    "sourceHash": "sha256:f6f91cdc8749afb4bf68dde5f21eda43a4888137d524064f29b75e6ea22cff50",
    "translatableHash": "sha256:0a13c5f78a76fc24e7c63429e61bce042713815392903ae57e9d0644663ad803",
    "data": {
      "schemaVersion": 1,
      "name": "Runescribed Disk",
      "itemType": "consumable",
      "level": 8,
      "rarity": "uncommon",
      "traits": [
        "magical",
        "talisman"
      ],
      "description": "Activate f envision\nTrigger You use an action with the move trait\nRequirements You're an expert in Acrobatics.\nThis decorative silver disk is inscribed with magical runes, similar in appearance to a miniature teleportation circle but with the runes indicating movement encircled by runes associated with time. When you activate the disk, you flicker out of sight, seeming to teleport directly to your destination as you accelerate your flow of time dramatically for the duration of your move action. Your movement doesn't trigger reactions.",
      "bulk": 0,
      "price": {
        "gp": 100
      },
      "usage": "affixed-to-armor",
      "category": "talisman",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:winterstep-elixir-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "NZ1z3ee75XfctFwM",
      "slug": "winterstep-elixir-moderate",
      "publicationTitle": "Pathfinder #176: Lost Mammoth Valley",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/consumable.svg"
    },
    "sourceHash": "sha256:ebbc3af02c1f6c3f06dab80348506a5afbb06b597d211a2684a1692146ff0b8a",
    "translatableHash": "sha256:d2a230a18f5a75ce8d7c993589ba4dd96902da663bf9b91fefcf9226d9dadcdb",
    "data": {
      "schemaVersion": 1,
      "name": "Winterstep Elixir (Moderate)",
      "itemType": "consumable",
      "level": 10,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "consumable",
        "elixir"
      ],
      "description": "Activate 1 Interact\nThis frigid white elixir widens your feet and lightens your steps, enabling you to walk across ice and snow without difficulty. You ignore the uneven ground and difficult terrain caused by ice, and the difficult terrain caused by snow (reducing greater difficult terrain caused by ice or snow to ordinary difficult terrain). The duration is 1 hour.",
      "bulk": 0.1,
      "price": {
        "gp": 160
      },
      "usage": "held-in-one-hand",
      "category": "elixir",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:mud-bomb-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "9j3sqH9sG5mUe6rI",
      "slug": "mud-bomb-greater",
      "publicationTitle": "Pathfinder #176: Lost Mammoth Valley",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:54fb53c41c20f191b33fb69e7956f6015d5d8bfdaebb3a2444a813ffba712d67",
    "translatableHash": "sha256:4b82c8602e4e3a8c40bf2496163ad0a84400498ccf213149c6996ff1bdbf68b2",
    "data": {
      "schemaVersion": 1,
      "name": "Mud Bomb (Greater)",
      "itemType": "weapon",
      "level": 11,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "bomb",
        "consumable",
        "earth",
        "splash"
      ],
      "description": "Activate 1 Strike\nThis clay vessel launches gobs of clinging mud and grit. You gain a +2 item bonus to attack rolls. The bomb deals 3d6 bludgeoning damage and 3 splash)[bludgeoning damage]. On a critical hit, the target is Dazzled until the start of your next turn.",
      "bulk": 0.1,
      "price": {
        "gp": 250
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "bomb",
      "damage": {
        "dice": 3,
        "die": "d6",
        "type": "bludgeoning"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:water-bomb-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "itn6l0yJGRw7EFwu",
      "slug": "water-bomb-greater",
      "publicationTitle": "Pathfinder #176: Lost Mammoth Valley",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:fafc8e5990ba29eba61159c6c2c9af1ae25648e87201829a1e2fff01fbf7c65d",
    "translatableHash": "sha256:401b8151a186703f0eab054c2f35b0ca334d5ccfeb6aaf2e842842559c695178",
    "data": {
      "schemaVersion": 1,
      "name": "Water Bomb (Greater)",
      "itemType": "weapon",
      "level": 11,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "bomb",
        "consumable",
        "nonlethal",
        "splash",
        "water"
      ],
      "description": "Activate 1 Strike\nThis bladder of water explodes when put under pressure or upon being punctured, dealing minimal damage, neutralizing acids, and dousing flames. You gain a +2 item bonus to attack rolls. The bomb deals 2d4 nonlethal damage and 3 splash)[nonlethal damage]. On a hit, if the target is suffering from Persistent Acid or Persistent Fire Damage, it can attempt a flat check to end that persistent damage immediately. As this is particularly effective assistance, the DC of the flat check is reduced from 15 to 10 for this check. Except on a critical failure, the bomb extinguishes non-magical fires within its splash area.",
      "bulk": 0.1,
      "price": {
        "gp": 250
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "bomb",
      "damage": {
        "dice": 2,
        "die": "d4",
        "type": "bludgeoning"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:pernicious-spore-bomb-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "TvEnLYsYjijBe1Cg",
      "slug": "pernicious-spore-bomb-greater",
      "publicationTitle": "Pathfinder #176: Lost Mammoth Valley",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:406c44eb56c43f0bd2dd778a137b922d9684bc033229de480e171803363d8d17",
    "translatableHash": "sha256:a30c3311e142e36504b09662dc26045133297f019fcff73fa37452feb3db476b",
    "data": {
      "schemaVersion": 1,
      "name": "Pernicious Spore Bomb (Greater)",
      "itemType": "weapon",
      "level": 11,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "bomb",
        "consumable",
        "poison",
        "splash"
      ],
      "description": "Activate 1 Strike\nThis flask contains fast-growing mold spores, which quickly take root but just as quickly rot away. You gain a +2 item bonus to attack rolls. The bomb deals 3 poison damage, 3d4 persistent piercing damage, and 3 poison splash damage. Except on a critical failure, the bomb's splash area is coated in vegetation, becoming difficult terrain for 1 round.",
      "bulk": 0.1,
      "price": {
        "gp": 250
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "bomb"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:quickmelt-slick-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "jUiva1MoZDtbi6xI",
      "slug": "quickmelt-slick-greater",
      "publicationTitle": "Pathfinder #176: Lost Mammoth Valley",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/consumable.svg"
    },
    "sourceHash": "sha256:b214b580c7ce8cd198b31ff7c2a744ec70fed92dbe86294a917f22cbabcaebfe",
    "translatableHash": "sha256:d194afaa9ae2729dd6bcb81ee10d256c7e6b36a68d230019ca8b0528d511b3a6",
    "data": {
      "schemaVersion": 1,
      "name": "Quickmelt Slick (Greater)",
      "itemType": "consumable",
      "level": 12,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "consumable"
      ],
      "description": "This clay jar is filled with a warm fluid composed primarily of lagofir oil and natural fire retardants. You can pour the fluid in an empty area adjacent to you, or over an adjacent frozen object, with an Interact action. The fluid instantly melts non-magical ice and snow in the area and harmlessly vaporizes the resulting meltwater. When used to melt magical ice and snow, quickmelt slick attempts a counteract check with the listed counteract modifier to melt the ice and snow, using the source of that ice and snow to determine the counteract rank and DC.\nGreater quickmelt slick melts ice and snow up to 5 feet in depth in a 10-foot-square area or melts the ice covering a Large or smaller object. The slick has a 1d20+19 modifier for the counteract check and a counteract rank of 6.",
      "bulk": 0.1,
      "price": {
        "gp": 310
      },
      "usage": "held-in-two-hands",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:winterstep-elixir-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "8eKDnjLeP9KpZFD3",
      "slug": "winterstep-elixir-greater",
      "publicationTitle": "Pathfinder #176: Lost Mammoth Valley",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/consumable.svg"
    },
    "sourceHash": "sha256:6e38ab9897bd45847581b609c753bcdb4f21b73f928bbb288c88fee23c2247c4",
    "translatableHash": "sha256:b38833736e071802c304110692e7f54985113a31f3a3c29e6bd2ef83eaa23635",
    "data": {
      "schemaVersion": 1,
      "name": "Winterstep Elixir (Greater)",
      "itemType": "consumable",
      "level": 14,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "consumable",
        "elixir"
      ],
      "description": "Activate 1 Interact\nThis frigid white elixir widens your feet and lightens your steps, enabling you to walk across ice and snow without difficulty. You ignore the uneven ground and difficult terrain caused by ice, and the difficult terrain caused by snow (reducing greater difficult terrain caused by ice or snow to ordinary difficult terrain). The duration is 8 hours.",
      "bulk": 0.1,
      "price": {
        "gp": 640
      },
      "usage": "held-in-one-hand",
      "category": "elixir",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:pernicious-spore-bomb-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "4Thv3O2smZ8AHNjP",
      "slug": "pernicious-spore-bomb-major",
      "publicationTitle": "Pathfinder #176: Lost Mammoth Valley",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:c5a7284a8b1fdde441183b296873ac199cfc0e1ce360961f8954e55419dc8e7d",
    "translatableHash": "sha256:6246bccbdd687ad0244a6d09a0a3829514ed4280f80fff3545bbf2979ee68835",
    "data": {
      "schemaVersion": 1,
      "name": "Pernicious Spore Bomb (Major)",
      "itemType": "weapon",
      "level": 17,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "bomb",
        "consumable",
        "poison",
        "splash"
      ],
      "description": "Activate 1 Strike\nThis flask contains fast-growing mold spores, which quickly take root but just as quickly rot away. You gain a +3 item bonus to attack rolls. The bomb deals 4 poison damage, 4d4 persistent piercing damage, and 4 poison splash damage. Except on a critical failure, the bomb's splash area is coated in vegetation, becoming difficult terrain for 1 minute.",
      "bulk": 0.1,
      "price": {
        "gp": 2500
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "bomb"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:mud-bomb-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Djp91D21I6QW6dlw",
      "slug": "mud-bomb-major",
      "publicationTitle": "Pathfinder #176: Lost Mammoth Valley",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:9276ad23057ea1a18d0ed29b8fead175055574323330ead2cd13efc4082c563e",
    "translatableHash": "sha256:9fb468bd0b47475ea62d6044fd30a9d3d13a6aca908a5a8391d89c4812898e31",
    "data": {
      "schemaVersion": 1,
      "name": "Mud Bomb (Major)",
      "itemType": "weapon",
      "level": 17,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "bomb",
        "consumable",
        "earth",
        "splash"
      ],
      "description": "Activate 1 Strike\nThis clay vessel launches gobs of clinging mud and grit. You gain a +3 item bonus to attack rolls. The bomb deals 4d6 bludgeoning damage and 4 splash)[bludgeoning damage]. On a critical hit, the target is Dazzled until the start of your next turn.",
      "bulk": 0.1,
      "price": {
        "gp": 2500
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "bomb",
      "damage": {
        "dice": 4,
        "die": "d6",
        "type": "bludgeoning"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:water-bomb-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "EjJUCXG4Yr3T6DTM",
      "slug": "water-bomb-major",
      "publicationTitle": "Pathfinder #176: Lost Mammoth Valley",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:4573eefb671cc13aa23b47d5d43aca48f90722143ae1d40a360c08aa215ce023",
    "translatableHash": "sha256:ad565101c33edd2f49a2c8140f8233c1b7ffc084a74c21a8a6a4192d48aa3a8b",
    "data": {
      "schemaVersion": 1,
      "name": "Water Bomb (Major)",
      "itemType": "weapon",
      "level": 17,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "bomb",
        "consumable",
        "nonlethal",
        "splash",
        "water"
      ],
      "description": "Activate 1 Strike\nThis bladder of water explodes when put under pressure or upon being punctured, dealing minimal damage, neutralizing acids, and dousing flames. You gain a +3 item bonus to attack rolls. The bomb deals 3d4 nonlethal damage and 4 splash)[nonlethal damage]. On a hit, if the target is suffering from Persistent Acid or Persistent Fire Damage, it can attempt a flat check to end that persistent damage immediately. As this is particularly effective assistance, the DC of the flat check is reduced from 15 to 10 for this check. Except on a critical failure, the bomb extinguishes non-magical fires within its splash area.",
      "bulk": 0.1,
      "price": {
        "gp": 2500
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "bomb",
      "damage": {
        "dice": 3,
        "die": "d4",
        "type": "bludgeoning"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:primordial-flame",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "8q9ylEH525g6XqFC",
      "slug": "primordial-flame",
      "publicationTitle": "Pathfinder #176: Lost Mammoth Valley",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:19314a4bde92bc715c3de87b7c62921bfd6a631858b6242bc8b7c949378ff7e9",
    "translatableHash": "sha256:3aaba0906b0f1c15f59106b3f0de6874bb7a25199601c02e28b8fcf87ad34a77",
    "data": {
      "schemaVersion": 1,
      "name": "Primordial Flame",
      "itemType": "equipment",
      "level": 23,
      "rarity": "unique",
      "traits": [
        "artifact",
        "cursed",
        "fire",
        "light",
        "magical"
      ],
      "description": "Created by the Kellid goddess Sister Cinder to lead her believers out of the Age of Darkness, this hand-held lamp is constructed from animal bone, hide, and sinew, and it contains an eternal flame that requires neither fuel nor oxygen to burn. The lamp's flame can be covered or hidden, but it can't be smothered or quenched. While uncovered, the Primordial Flame sheds bright light in a 100-foot radius (and dim light for the next 100 feet). If the light passes through an area of magical darkness or targets a creature affected by magical darkness, the Primordial Flame attempts to counteract the darkness with a counteract rank of 10 and a counteract modifier of 1d20+35.\nThe presence of the Primordial Flame alters the surrounding environment, changing weather patterns, temperature, climate, and even seasons. Within a 10-mile radius of the Primordial Flame, the temperature remains 70° F (21° C) during the day and 60° F (16° C) at night. The weather is calm and free from extreme weather conditions (such as blizzards, hail, thunderstorms, and tornadoes), and the sky remains clear. Plants in the area flourish as if they were receiving optimal sunlight, water, and nutrients for their species, despite the lack of precipitation. If the Primordial Flame remains in the same region for an extended time, the area of this effect increases (typically by 1 mile each year, though terrain and other factors might alter this limit). During the time Venexus carried the Primordial Flame, its environmental reach expanded to cover the entirety of Lost Mammoth Valley.\nCursed The Primordial Flame was cursed by Syarstik Painted-Tiger, the guardian spirit of Red Cat Cave. As long as it remains cursed, a creature that holds the Primordial Flame can't willingly give up possession. A creature that has held the Primordial Flame and no longer has it in their possession is wracked with mental anguish, becoming Clumsy 4, Enfeebled 4, Stupefied 4, and Fatigued; these conditions can't be reduced or removed until the creature regains possession of the Primordial Flame or the curse is removed. The curse can be removed only by avenging Syarstik.\nActivate 3 command, Interact\nFrequency once per week\nEffect The Primordial Flame's light intensifies, shedding bright sunlight in a 10-mile radius (and dim light to the next mile) for 1 hour. If the light passes through an area of magical darkness or targets a creature affected by magical darkness, the Primordial Flame attempts to counteract the darkness with a counteract rank of 10 and a counteract modifier of 1d20+35.\nActivate 2 command, Interact\nFrequency once per day\nEffect The Primordial Flame casts a 7th-rank Sunburst spell. If you can cast spells higher than 7th level, the Primordial Flame automatically heightens sunburst to half your level rounded up.\nActivate 2 command, Interact\nEffect The Primordial Flame casts a 5th-rank Ignition spell. If you can cast spells higher than 5th level, the Primordial Flame automatically heightens produce flame to half your level rounded up.\nDestruction If used to slay a herald of Sister Cinder while on the Shadow Plane, the Primordial Flame is destroyed.",
      "bulk": 1,
      "price": {},
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:mammoth-bow",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "tYnFIqjvxT9bWaoR",
      "slug": "mammoth-bow",
      "publicationTitle": "Pathfinder #177: Burning Tundra",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/composite-longbow.webp"
    },
    "sourceHash": "sha256:bc07a13099b99bc914aa1ffac72b791cb5efd44f0752c09e213aa24f09cbf5aa",
    "translatableHash": "sha256:4e0f659a02c20b5fce46fc004623a0c2230ac5787836ed597fa9c280df3b8ec8",
    "data": {
      "schemaVersion": 1,
      "name": "Mammoth Bow",
      "itemType": "weapon",
      "level": 12,
      "rarity": "unique",
      "traits": [
        "deadly-d10",
        "magical",
        "propulsive",
        "volley-50"
      ],
      "description": "This heavy, 12-foot-tall +2 striking Composite Longbow is fashioned from mammoth tusks lashed together. Due to its great size, you can attack with the Mammoth Bow only if you're Large or larger. The Mammoth Bow deals 2d6 additional piercing damage because of its incredible, magically enhanced draw power. Additionally, the Mammoth Bow has a 180-foot range increment instead of a 100-foot range increment, but its volley range increases from 30 feet to 50 feet.",
      "bulk": 4,
      "price": {
        "gp": 2000
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "bow",
      "damage": {
        "dice": 1,
        "die": "d8",
        "type": "piercing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:poison-sedum",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "GWTSMcXocmUsNLmN",
      "slug": "poison-sedum",
      "publicationTitle": "Pathfinder #178: Punks in a Powder Keg",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:86b3c0ab95d6ba14e830a469467a32842d4ceed4d639ed45737f0e6896d31362",
    "translatableHash": "sha256:a938c33c33d1cbfc43dab11307fe5c20bc004d9b0cde068118e80fbebeb7e28a",
    "data": {
      "schemaVersion": 1,
      "name": "Poison Sedum",
      "itemType": "consumable",
      "level": 0,
      "rarity": "rare",
      "traits": [
        "contact",
        "poison"
      ],
      "description": "This green-and-blue stalk is topped with a clump of small flowers resembling broccoli. It's covered in a mildly toxic resin that sticks to flesh, fur, and equipment alike, causing affected creatures to break out in an itchy rash.\nSaving Throw check (fortitude, dc:16)\nOnset 1 day\nMaximum Duration 2 weeks\nStage 1 Sickened 1, and the sickened condition can't go below 1 (1 day)\nStage 2 as stage 1, but also Clumsy 1 (1 day)",
      "bulk": 0,
      "price": {},
      "usage": "held-in-one-hand",
      "category": "poison",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:searing-suture-lesser",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "dymL1IbxU5zR9fqo",
      "slug": "searing-suture-lesser",
      "publicationTitle": "Pathfinder #178: Punks in a Powder Keg",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-tools/searning-suture.webp"
    },
    "sourceHash": "sha256:61def7c22fc69c58bda61ea59cdab103bb121dde9313a82556dfd53ac49cb32e",
    "translatableHash": "sha256:3affe4f17e4e308cb77cc9b6c14067e1bd54d0d46a4405c884a25a1bb5a381a5",
    "data": {
      "schemaVersion": 1,
      "name": "Searing Suture (Lesser)",
      "itemType": "consumable",
      "level": 1,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "consumable",
        "fire"
      ],
      "description": "Activate 1 Interact\nActivating this black powder-infused alchemical bandage cauterizes wounds. You can apply a searing suture to yourself or an adjacent willing creature as you activate it. The target creature takes 1d6 fire damage and can immediately attempt a check (flat, dc:15) to remove the persistent bleed damage. When applied against a bleed effect that is lower level than the searing suture, the flat check is automatically successful.",
      "bulk": 0.1,
      "price": {
        "gp": 3
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:war-blood-mutagen-lesser",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "H3KAt7cHJ6ZLTJQE",
      "slug": "war-blood-mutagen-lesser",
      "publicationTitle": "Pathfinder #178: Punks in a Powder Keg",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:28d808ebfc14c8639ea717ad1a4e4366ccb4d23cfac37124c4af361e20f85589",
    "translatableHash": "sha256:e73ccd4bef12405c88071930fcea6c2480ec29668e3812b787f1b6702e2b40ec",
    "data": {
      "schemaVersion": 1,
      "name": "War Blood Mutagen (Lesser)",
      "itemType": "consumable",
      "level": 1,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "consumable",
        "elixir",
        "mutagen",
        "polymorph"
      ],
      "description": "Upon drinking this mutagen, you can feel your blood surge through your body and hear a low-pitched humming in your ears. These sensations subside as the flesh and muscles of your arm loosen and stretch, the fibers of your very being reaching out to combine with the base of one melee weapon you're holding.\nBenefit Choose one melee weapon you're holding in one or both hands. You gain a +1 item bonus to your attack rolls with this weapon and to Will saves against fear effects for 1 minute. Any attempt to Disarm or otherwise remove the weapon from your hands must exceed DC 25 or the attempt fails.\nEffect: War Blood Mutagen (Lesser)\nDrawback You can't voluntarily remove the weapon unless you succeed at a check (athletics, dc:25), which ends the war blood mutagen's effects; this check takes a single action. If you perform an action with the concentrate trait, you must succeed at a check (flat, dc:5) or the action is lost.",
      "bulk": 0.1,
      "price": {
        "gp": 4
      },
      "usage": "held-in-one-hand",
      "category": "elixir",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:blaze",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "q5Hr2nZr8RQ9DSZM",
      "slug": "blaze",
      "publicationTitle": "Pathfinder #178: Punks in a Powder Keg",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/drugs/blaze.webp"
    },
    "sourceHash": "sha256:4b1cb0278b224769d4388618b3f68bb5d82ca34aeab83dcafa4473353fc776c1",
    "translatableHash": "sha256:fa8ee7e38d082c1411681086307b9ae8622286ce6044153f9f4130fdd38d8491",
    "data": {
      "schemaVersion": 1,
      "name": "Blaze",
      "itemType": "consumable",
      "level": 2,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "consumable",
        "drug",
        "ingested",
        "poison"
      ],
      "description": "Activate 1 Interact\nThis acrid blend of black powder, honey, saltpeter, sulfur, and stranger ingredients sees plenty of use in the Mana Wastes, where magical environmental protection is unreliable. Users experience euphoric feelings of warmth and wellbeing followed by intense bouts of dehydration and disorientation.\nSaving Throw check (fortitude, dc:17)\nMaximum Duration 4 hours\nStage 1 +1 item bonus to saves versus fire effects, and you treat severe or extreme environmental heat effects as if they were one step lower (1 hour)\nEffect: Blaze\nStage 2 Stupefied 1, and you treat severe or extreme environmental heat effects as if they were one step lower (1 hour)\nStage 3 Fatigued and Stupefied 2 (1 hour)",
      "bulk": 0.1,
      "price": {
        "gp": 7
      },
      "usage": "held-in-one-hand",
      "category": "drug",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:war-blood-mutagen-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "AOAXZzH4AOsQqYYv",
      "slug": "war-blood-mutagen-moderate",
      "publicationTitle": "Pathfinder #178: Punks in a Powder Keg",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:5ae7d9327e869344631653ab47786afb36cb9d0742bd7fa47cebe729f52805d4",
    "translatableHash": "sha256:d9cdc1bca4ecce58989b7b53b790e4abf52e3ceb027793326d82abefae393193",
    "data": {
      "schemaVersion": 1,
      "name": "War Blood Mutagen (Moderate)",
      "itemType": "consumable",
      "level": 3,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "consumable",
        "elixir",
        "mutagen",
        "polymorph"
      ],
      "description": "Upon drinking this mutagen, you can feel your blood surge through your body and hear a low-pitched humming in your ears. These sensations subside as the flesh and muscles of your arm loosen and stretch, the fibers of your very being reaching out to combine with the base of one melee weapon you're holding.\nBenefit Choose one melee weapon you're holding in one or both hands. You gain a +2 item bonus to your attack rolls with this weapon and to Will saves against fear effects for 10 minutes. Any attempt to Disarm or otherwise remove the weapon from your hands must exceed DC 30 or the attempt fails.\nEffect: War Blood Mutagen (Moderate)\nDrawback You can't voluntarily remove the weapon unless you succeed at a check (athletics, dc:30), which ends the war blood mutagen's effects; this check takes a single action. If you perform an action with the concentrate trait, you must succeed at a check (flat, dc:5) or the action is lost.",
      "bulk": 0.1,
      "price": {
        "gp": 12
      },
      "usage": "held-in-one-hand",
      "category": "elixir",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:searing-suture-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "bImVngTkDNsdWIjr",
      "slug": "searing-suture-greater",
      "publicationTitle": "Pathfinder #178: Punks in a Powder Keg",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-tools/searning-suture.webp"
    },
    "sourceHash": "sha256:10624c756ae8d7fc82b9f16d9d223a90b03efe706b98e3ddc7a428bbead28e32",
    "translatableHash": "sha256:6fe9757663534f346c1250bebd3d74cfa7d3f279c61ebea98c520ea509332036",
    "data": {
      "schemaVersion": 1,
      "name": "Searing Suture (Greater)",
      "itemType": "consumable",
      "level": 9,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "consumable",
        "fire"
      ],
      "description": "Activate 1 Interact\nActivating this black powder-infused alchemical bandage cauterizes wounds. You can apply a searing suture to yourself or an adjacent willing creature as you activate it. The target creature takes 1d6 fire damage and can immediately attempt a check (flat, dc:5) to remove the persistent bleed damage. When applied against a bleed effect that is lower level than the searing suture, the flat check is automatically successful.",
      "bulk": 0.1,
      "price": {
        "gp": 120
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:war-blood-mutagen-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "oaGUNWmrqtKhy1HP",
      "slug": "war-blood-mutagen-greater",
      "publicationTitle": "Pathfinder #178: Punks in a Powder Keg",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:11681d90fb40d0cc73cb10a37064ebade3576c08753a153f645fce335b6279a0",
    "translatableHash": "sha256:fccbb45fcc84ba8a1570438e5b884d3caf199fefc7f4d3cc917eca1033c29ffc",
    "data": {
      "schemaVersion": 1,
      "name": "War Blood Mutagen (Greater)",
      "itemType": "consumable",
      "level": 11,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "consumable",
        "elixir",
        "mutagen",
        "polymorph"
      ],
      "description": "Upon drinking this mutagen, you can feel your blood surge through your body and hear a low-pitched humming in your ears. These sensations subside as the flesh and muscles of your arm loosen and stretch, the fibers of your very being reaching out to combine with the base of one melee weapon you're holding.\nBenefit Choose one melee weapon you're holding in one or both hands. You gain a +3 item bonus to your attack rolls with this weapon and to Will saves against fear effects for 1 hour. Any attempt to Disarm or otherwise remove the weapon from your hands must exceed DC 40 or the attempt fails.\nEffect: War Blood Mutagen (Greater)\nDrawback You can't voluntarily remove the weapon unless you succeed at a check (athletics, dc:40), which ends the war blood mutagen's effects; this check takes a single action. If you perform an action with the concentrate trait, you must succeed at a check (flat, dc:5) or the action is lost.",
      "bulk": 0.1,
      "price": {
        "gp": 300
      },
      "usage": "held-in-one-hand",
      "category": "elixir",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:war-blood-mutagen-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Qa4qjxk5aPzx7HTR",
      "slug": "war-blood-mutagen-major",
      "publicationTitle": "Pathfinder #178: Punks in a Powder Keg",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:b93cbf74008606ee1d681df2ede80ea5b3bbfdb4c6e40bb43f1d6972b91fb3b8",
    "translatableHash": "sha256:b71fe10ddf1574764a65c0bd59fb2231bbc0adf7c23f75d89616ee89d7823f24",
    "data": {
      "schemaVersion": 1,
      "name": "War Blood Mutagen (Major)",
      "itemType": "consumable",
      "level": 17,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "consumable",
        "elixir",
        "mutagen",
        "polymorph"
      ],
      "description": "Upon drinking this mutagen, you can feel your blood surge through your body and hear a low-pitched humming in your ears. These sensations subside as the flesh and muscles of your arm loosen and stretch, the fibers of your very being reaching out to combine with the base of one melee weapon you're holding.\nBenefit Choose one melee weapon you're holding in one or both hands. You gain a +4 item bonus to your attack rolls with this weapon and to Will saves against fear effects for 1 hour. Any attempt to Disarm or otherwise remove the weapon from your hands must exceed DC 50 or the attempt fails.\nEffect: War Blood Mutagen (Major)\nDrawback You can't voluntarily remove the weapon unless you succeed at a check (athletics, dc:50), which ends the war blood mutagen's effects; this check takes a single action. If you perform an action with the concentrate trait, you must succeed at a check (flat, dc:5) or the action is lost.",
      "bulk": 0.1,
      "price": {
        "gp": 3000
      },
      "usage": "held-in-one-hand",
      "category": "elixir",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:alchemical-fuse",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "M0DMGUN84FQHapsF",
      "slug": "alchemical-fuse",
      "publicationTitle": "Pathfinder #179: Cradle of Quartz",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/ammunition/dwarven-daisy.webp"
    },
    "sourceHash": "sha256:1622ae0feb422d44ee184f8c2abe560ce4dec8118c31d16012277f1b6e66b073",
    "translatableHash": "sha256:d89d4c85b20f935a7f9e2d375cf50aa9311e6cff33beeb5d4247f6e557469c9f",
    "data": {
      "schemaVersion": 1,
      "name": "Alchemical Fuse",
      "itemType": "consumable",
      "level": 1,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "fire"
      ],
      "description": "An alchemical fuse is a length of treated cord that can be used to time the detonation of an alchemical bomb or a stick of pyronite, or simply as a timer—at the GM's option, fuses can be used as timers to trigger other devices that can be triggered with a single appropriate action, as well.\nActivate 1 Interact\nEffect You attach the alchemical fuse to an alchemical bomb, stick of pyronite, or other device that can be triggered by a fuse. Alternately, you can attach one fuse to another to extend its burn time by 1 round.\nActivate 1 Interact\nEffect You light the alchemical fuse with an adjacent fire source or a fire source that you hold in a hand. If you have a tindertwig in your other hand, you can activate the tindertwig and use it to light a fuse with the same Interact action. A lit fuse takes 1 round per attached fuse to burn down. During the round that the fuse runs out, the device to which the fuse has been attached explodes or otherwise activates at the end of your turn. For a bomb, this deals splash damage, and for pyronite, it deals pyronite's normal damage. An alchemical fuse burns underwater or in up to moderate wind.\nActivate 1 Interact\nEffect You extinguish the fuse.",
      "bulk": 0.1,
      "price": {
        "gp": 3
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:lodestone-pellet",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "vbH19NIBChzdEn4R",
      "slug": "lodestone-pellet",
      "publicationTitle": "Pathfinder #179: Cradle of Quartz",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/ammunition/rounds-large.webp"
    },
    "sourceHash": "sha256:fe24da6efef263eb2b224dbc87353ef3ba558d98ee4f6f60cd8713feee2cabcc",
    "translatableHash": "sha256:7ed46ff04fd28f5789778aacf737524e4df80291e6de906e6f3a69f90103b06f",
    "data": {
      "schemaVersion": 1,
      "name": "Lodestone Pellet",
      "itemType": "ammunition",
      "level": 3,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical"
      ],
      "description": "Ammunition pellet\nActivate 1 Interact\nThese round, black pellets are made from magically enhanced magnetic lodestone. They can be loaded into an air repeater or long air repeater. When activated, lodestone pellets provide a +1 circumstance bonus to ranged Strikes made against creatures made of metal or wearing metal armor.",
      "bulk": 0,
      "price": {
        "gp": 12
      },
      "usage": "",
      "category": "ammo",
      "group": "ammo"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:gyroscopic-stabilizer",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "7tiAVxbZW8aGmKUO",
      "slug": "gyroscopic-stabilizer",
      "publicationTitle": "Pathfinder #179: Cradle of Quartz",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/vehicles/vonthoss-golden-bridge-protective-barrier-effect.webp"
    },
    "sourceHash": "sha256:fd80ea9796854d38a4bc712e59f01355b03f048ac60a4da33f3b5018f07eb9a1",
    "translatableHash": "sha256:6f101e73ac441de34bb5e387efd0788f733506e70c014dce442593f8e32d78ca",
    "data": {
      "schemaVersion": 1,
      "name": "Gyroscopic Stabilizer",
      "itemType": "equipment",
      "level": 4,
      "rarity": "uncommon",
      "traits": [
        "magical"
      ],
      "description": "A gyroscopic stabilizer appears as a gold disk suspended within three rotating golden bands inside a gilded case, itself attached to a set of clamps. These clamps allow you to attach the gyroscopic stabilizer to any one-handed firearm as an Interact action.\nActivate 1 Interact\nFrequency once per hour\nRequirements The gyroscopic stabilizer is attached to a one-handed firearm without the fatal or fatal aim traits\nEffect The gyroscopic stabilizer begins spinning for 1 minute. While the gyroscopic stabilizer is spinning, the weapon it's attached to gains the fatal aim weapon trait with a die one size larger than its damage die (maximum d12). This allows you to wield it in two hands to grant it the fatal trait.",
      "bulk": 0.1,
      "price": {
        "gp": 115
      },
      "usage": "affixed-to-firearm",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:aeon-stone-clear-quartz-octagon",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "d0ponRhw0JhSM4iH",
      "slug": "aeon-stone-clear-quartz-octagon",
      "publicationTitle": "Pathfinder #179: Cradle of Quartz",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/other-worn-items/aeon-stone-pearly-white-spindle.webp"
    },
    "sourceHash": "sha256:b6caaf556ae1e4eb8fa631fb7c8865b468e253dfc01c9403715c71911a58ad14",
    "translatableHash": "sha256:950c2b6088c6506e6b4e4400862c935d5ca4d21c638c0f0be86cb88d86c575bd",
    "data": {
      "schemaVersion": 1,
      "name": "Aeon Stone (Clear Quartz Octagon)",
      "itemType": "equipment",
      "level": 4,
      "rarity": "uncommon",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "This clear quartz stone appears to have been smashed and then repaired by pouring molten copper into the cracks and fitting the shards back together using the copper as a sort of mortar. When a non-magical item in your possession with a value of 90 gp or less and a Bulk of 1 Bulk or less would become broken, this aeon stone automatically activates, preventing the item from breaking by restoring the item's current Hit Points to the item's maximum Hit Points. The stone then turns permanently into a Aeon Stone (Dull Grey).\nThe stone's resonant power allows you to cast 1st-rank Mending as a divine innate spell once per day.",
      "bulk": 0,
      "price": {
        "gp": 90
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:golden-cased-bullet-standard",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "LlmRVR4qv6H2AGPT",
      "slug": "golden-cased-bullet-standard",
      "publicationTitle": "Pathfinder #179: Cradle of Quartz",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/ammunition/golden-cased-bullet.webp"
    },
    "sourceHash": "sha256:2358351ad6a1a2394e43ab0cfcba24a53c552de12669f08bdd35aa75d543e299",
    "translatableHash": "sha256:02e41533f914df947fe38502cce6eed8b2ba0a1f52277d2c4a9a892a3172664c",
    "data": {
      "schemaVersion": 1,
      "name": "Golden-Cased Bullet (Standard)",
      "itemType": "ammunition",
      "level": 4,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical"
      ],
      "description": "Ammunition round\nActivate 1 envision\nThe magic-infused metal of this bullet's golden casing allows it to curve just a bit in flight once the bullet has been fired, allowing you to ignore the bonus to AC granted to a target in lesser cover.",
      "bulk": 0,
      "price": {
        "gp": 20
      },
      "usage": "",
      "category": "ammo",
      "group": "ammo"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:harpoon-bolt",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "ZZaEVS1Vw2a8cqWS",
      "slug": "harpoon-bolt",
      "publicationTitle": "Pathfinder #179: Cradle of Quartz",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/ammunition/harpoon-bolt.webp"
    },
    "sourceHash": "sha256:85e62de0af4d7d2f357a442111eaceb9640c097b6b36faeb8ee939d53779faf1",
    "translatableHash": "sha256:92be561bbd02d0c5656bd5b67ba00a949c57bd4cada605565ebd7a93763f0164",
    "data": {
      "schemaVersion": 1,
      "name": "Harpoon Bolt",
      "itemType": "ammunition",
      "level": 4,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical"
      ],
      "description": "Ammunition round\nThis iron spike can be fitted into the barrel of a two-handed firearm that doesn't have the scatter property with an Interact action. The spike is attached to a 50-foot-long coil of rope held in a simple spool that can be attached to a weapon's barrel. The weight and awkward balance of the bolt and its spool reduce the range of the weapon by 10 feet when fired. A creature hit by a harpoon bolt takes normal damage from the shot and must succeed at a check (fortitude, dc:18) save. On a failure, the harpoon bolt becomes lodged in its body.\nOnce a harpoon bolt is lodged, a creature can remove the harpoon bolt with a DC 18 check to Escape or Force Open, but on a failure, the creature takes 1d4 piercing damage. As long as the harpoon bolt remains lodged, the creature can't move more than 50 feet away from you. You can attempt to Trip a creature by tugging on the rope attached to the harpoon bolt, even if it isn't within your reach, but if you fail this attempt, the bolt rips free, causing 1d4 piercing damage to the target but releasing it from the bolt. If you reload, drop, or fire the firearm again, the creature is no longer limited in its movement. Once a harpoon bolt is removed from a creature, the bolt, its rope, and the spool all decay away, consumed by the same magic that empowers the unusual ammunition to function in the first place.",
      "bulk": 0,
      "price": {
        "gp": 15
      },
      "usage": "",
      "category": "ammo",
      "group": "ammo"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:dupes-gold-nugget",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "39cQgs70GbP7KZdy",
      "slug": "dupes-gold-nugget",
      "publicationTitle": "Pathfinder #179: Cradle of Quartz",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/talismans/dupes-gold-nugget.webp"
    },
    "sourceHash": "sha256:d658a22f49371cb49ddae304271d7bbb729be59efdfa4b83aebf2034ae739819",
    "translatableHash": "sha256:de3608aaf12af129f5ac3ab8c7a8cac7420229a8116032e023096aa9b19a3069",
    "data": {
      "schemaVersion": 1,
      "name": "Dupe's Gold Nugget",
      "itemType": "consumable",
      "level": 5,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical",
        "talisman"
      ],
      "description": "Activate f envision\nTrigger You hit with a ranged Strike with the affixed weapon\nRequirements You're an expert with the affixed weapon.\nThis nugget of gold and lead amalgam is attached to the weapon by thick, twisted wire or chain. When activated, the target's limbs become like lead weights. For 2 rounds, each time the target Strides it must attempt a check (fortitude, dc:23) save. On a failure, it takes a –10-foot status penalty to its Speed for that Stride (to a minimum Speed of 5 feet). On a critical success, the dupe's gold nugget effect ends early.",
      "bulk": 0,
      "price": {
        "gp": 30
      },
      "usage": "affixed-to-a-ranged-weapon",
      "category": "talisman",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:golden-branding-iron",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "8wlCeramJW5cLw6e",
      "slug": "golden-branding-iron",
      "publicationTitle": "Pathfinder #179: Cradle of Quartz",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:9396071364a3a9fa6299cf73909b55a4ad51e4fd0cb4626dfaacbb2035583e07",
    "translatableHash": "sha256:6efbe8a72d7ab5769f5b0a9d36341e3bbbab5b6c1050395c5d53c28d6a7b4dd7",
    "data": {
      "schemaVersion": 1,
      "name": "Golden Branding Iron",
      "itemType": "consumable",
      "level": 5,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical",
        "talisman"
      ],
      "description": "Activate f envision\nTrigger You hit a target with a ranged Strike with the affixed weapon\nRequirements You're an expert with the affixed weapon.\nThis talisman is a gold-plated brand that can be affixed to a ranged weapon's stock. When you activate a golden branding iron, you mark the target with your magical sigil.\nYou harmlessly place your unique magical sigil, which is about 1 square inch in size, anywhere on the target creature, as long as the location is visible to you. The mark is only visible to you and up to 6 of your allies. The mark can be scrubbed or scraped off with 5 minutes of work. It fades naturally over the course of a month.",
      "bulk": 0,
      "price": {
        "gp": 25
      },
      "usage": "affixed-to-a-two-handed-firearm-or-crossbow",
      "category": "talisman",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:thunder-helm",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "GVgA0w4CUP4lanPl",
      "slug": "thunder-helm",
      "publicationTitle": "Pathfinder #179: Cradle of Quartz",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:c9592b5a6105c1570fcaafa9d7a822e12f51712e949ec561dabe24c6642a658f",
    "translatableHash": "sha256:80dd3a1af74a20d0c8c84802d87f75c773cf63061d773de6bf665d48953dc9a1",
    "data": {
      "schemaVersion": 1,
      "name": "Thunder Helm",
      "itemType": "equipment",
      "level": 5,
      "rarity": "uncommon",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "The creator of the original thunder helm tried and failed time and again to craft a reliable, helmet-mounted firearm that enabled hands-free gunplay, but even after resorting to magical enhancements, they were never quite able to realize their vision. The allure of the thunder helm continues to compel certain mindsets in the Mana Wastes, and these items continue to be crafted to this day.\nA thunder helm appears as a cylindrical iron helmet adorned with a crown-like display of gun barrels extending out in all directions. A slit in the front allows for limited visibility, while sound is muffled by the inner lining. As long as a creature wears a thunder helm, it takes a -1 circumstance penalty to auditory and visual Perception checks but also gain a +1 circumstance bonus to saving throws against auditory and visual effects.\nActivate 2 envision, Interact\nFrequency once per day\nEffect The helm's gun barrels swivel and aim randomly, then conjure enough gunpowder and bullets to fire in all directions around you. Every creature within a 20-foot emanation takes 4d6 piercing damage (check (reflex, dc:19, basic, options:area-effect)). When determining a creature's resistance or immunity to this damage, use the weaker of the target's resistance or immunity to piercing or bludgeoning.",
      "bulk": 0.1,
      "price": {
        "gp": 160
      },
      "usage": "wornheadwear",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:alchemists-damper",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "NKOAAPYL5RxReuKi",
      "slug": "alchemists-damper",
      "publicationTitle": "Pathfinder #179: Cradle of Quartz",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/talismans/alchemists-damper.webp"
    },
    "sourceHash": "sha256:66fe09fefbe9b7b47c0a264544b2c8f4e352491cf8d3133f79dfb88a47adbb6c",
    "translatableHash": "sha256:f4ae13f42f620486e5e951a569339e1b7e9e0aa2366fa249808d16c89acdfe2c",
    "data": {
      "schemaVersion": 1,
      "name": "Alchemist's Damper",
      "itemType": "consumable",
      "level": 5,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical",
        "talisman"
      ],
      "description": "Activate f envision\nTrigger You attack with the affixed firearm\nRequirements You're an expert with the affixed firearm.\nA glass tube of mercury is contained within this golden clasp that's fitted in front of a firearm's trigger. On the triggering Strike, the mercury turns briefly to gold, reducing the effect of recoil, allowing you to ignore the circumstance penalty of the attached weapon's kickback weapon trait.",
      "bulk": 0,
      "price": {
        "gp": 30
      },
      "usage": "affixed-to-firearm-with-the-kickback-trait",
      "category": "talisman",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:metronomic-hammer",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "NzVp3RKhBkAPbe3g",
      "slug": "metronomic-hammer",
      "publicationTitle": "Pathfinder #179: Cradle of Quartz",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/gnome-hooked-hammer.webp"
    },
    "sourceHash": "sha256:f7a9a9b8a598e0108187a369dcd6b67a606886cfdba1bb84d3d0634123ec6a98",
    "translatableHash": "sha256:bf804c80525043824e6e9470005f7adfd8490e1f60e09b3ee824ed502a391908",
    "data": {
      "schemaVersion": 1,
      "name": "Metronomic Hammer",
      "itemType": "weapon",
      "level": 5,
      "rarity": "uncommon",
      "traits": [
        "gnome",
        "trip",
        "two-hand-d10",
        "versatile-p"
      ],
      "description": "A polished brass metronome ticks rhythmically within the haft of this +1 striking gnome hooked hammer. Gnome adherents of Brigh often attempt to reproduce this item as part of a ritual symbolizing methodical problem-solving and thoughtful craftsmanship.\nActivate r envision\nTrigger You attempt to Trip a creature with the metronomic hammer\nEffect By timing the sweeping arcs of your Trip attempt to the built-in metronome of a metronomic hammer, you gain a +1 item bonus to your Athletics check to Trip the target. This item bonus increases by 1 with every subsequent Trip attempt you make with the metronomic hammer against the same target this turn, to a maximum of +3 on your third Trip. The bonus resets to +1 if you successfully Trip the target, if you critically fail to Trip the target, or if your turn ends.",
      "bulk": 1,
      "price": {
        "gp": 160
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "hammer",
      "damage": {
        "dice": 1,
        "die": "d6",
        "type": "bludgeoning"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:golden-silencer-standard",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "M7Ful1B1IWeibSm7",
      "slug": "golden-silencer-standard",
      "publicationTitle": "Pathfinder #179: Cradle of Quartz",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/other-consumables/golden-silencer.webp"
    },
    "sourceHash": "sha256:8996f66055daf54630bd92e3e271e4325299f8f09eda9e5b009d1b480cfbb6f2",
    "translatableHash": "sha256:d947e12cc8f7d58cf935171926d8bbfa45fa6310dd2e5c093bbf90318a642292",
    "data": {
      "schemaVersion": 1,
      "name": "Golden Silencer (Standard)",
      "itemType": "consumable",
      "level": 6,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "illusion",
        "magical",
        "talisman"
      ],
      "description": "Activate 1 Interact\nRequirements You're an expert in Stealth.\nThe Golden Gunners are dreaded for their use of their golden silencers, which they put to good use in clandestine raids. They silence both the loud gunshot and the screams of creatures wounded by its shot. A weapon with a golden silencer attached emits no light and makes no noise when fired. A target hit by a ranged Strike from the affixed weapon must succeed at a check (fortitude, dc:20) save or be silenced as well until the start of its next turn. A silenced creature can't call for help or use sonic abilities, nor can it use abilities with the auditory trait. This prevents it from casting spells that include verbal components.",
      "bulk": 0.1,
      "price": {
        "gp": 50
      },
      "usage": "affixed-to-firearm",
      "category": "talisman",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:liquid-gold",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Upso2k53BUfmeays",
      "slug": "liquid-gold",
      "publicationTitle": "Pathfinder #179: Cradle of Quartz",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-elixirs/malleable-mixture.webp"
    },
    "sourceHash": "sha256:b7f14114bbc04081f32d0ae30a25254e5c604bb639894a45b5bbc67d2414a759",
    "translatableHash": "sha256:6c99a51be33e1553c16d84524591515c06fbf1f4af008c78f5422db18cb975c2",
    "data": {
      "schemaVersion": 1,
      "name": "Liquid Gold",
      "itemType": "consumable",
      "level": 6,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical",
        "talisman"
      ],
      "description": "Activate f Interact\nTrigger You roll for initiative\nRequirements You're an expert in Stealth.\nThis glass vial containing liquid gold is fastened to a weapon by a fine gold chain.\nYou draw the attached weapon as a free action instead of as a reaction.",
      "bulk": 0,
      "price": {
        "gp": 40
      },
      "usage": "affixed-to-a-one-handed-firearm-or-hand-crossbow",
      "category": "talisman",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:winders-ring",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "bfJI3xeIWaqcYRlU",
      "slug": "winders-ring",
      "publicationTitle": "Pathfinder #179: Cradle of Quartz",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:932811ce7fe097cd3cfabc9fc0953c07f78cf831ae77a168e700603ea9fe6c8f",
    "translatableHash": "sha256:e1b5adc3c37c584f83cf968bf0abb982e8e54ed5ab1d0ba0f016597fe44b089f",
    "data": {
      "schemaVersion": 1,
      "name": "Winder's Ring",
      "itemType": "equipment",
      "level": 7,
      "rarity": "uncommon",
      "traits": [
        "magical"
      ],
      "description": "This ring contains dozens of minute, interlocking bronze gears that buzz incessantly. The ring grants you a +1 item bonus to all Crafting checks to construct or repair clockworks.\nActivate (varies) Interact\nEffect The winder's ring extends a winding key that fits any clockwork contraption or creature, allowing you to fully wind a clockwork device or creature in half the usual time. When you activate a winder's ring in this way, attempt a check (flat, dc:16). On a failure, the winder's ring exhausts itself, and you can't activate it again until the next time you make your daily preparations.\nActivate 1 Interact\nFrequency once per day\nEffect The winder's ring transforms into a Clockwork Spy that doesn't require winding and obeys your spoken commands for up to 1 hour. In this form, the winder's ring has the minion trait. You can use this action again to return the clockwork spy to winder's ring form as long as you're adjacent to the clockwork spy. If the clockwork spy is slain, it reverts to its ring shape, and the winder's ring can't be activated again until 1 week has passed.",
      "bulk": 0,
      "price": {
        "gp": 360
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:jax",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "BdNRM9VTxs5BYq0C",
      "slug": "jax",
      "publicationTitle": "Pathfinder #179: Cradle of Quartz",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/piercing-wind.webp"
    },
    "sourceHash": "sha256:84815e914b88479dfd7f7311004b66b6828ff86afd9ea6e214b60a9b48311126",
    "translatableHash": "sha256:606904eb0ae4b0e27a5cac59a03a2d64add2e63ae96efd5f302351cc2abb5137",
    "data": {
      "schemaVersion": 1,
      "name": "Jax",
      "itemType": "weapon",
      "level": 8,
      "rarity": "unique",
      "traits": [
        "combination",
        "concussive",
        "cursed",
        "divine",
        "fatal-aim-d10",
        "intelligent"
      ],
      "description": "Perception +13; precise vision 30 feet, imprecise hearing 30 feet\nCommunication empathy\nSkills Diplomacy +14, Survival +16\nInt +1, Wis +5, Cha +3\nWill +18\nJax was a caravan guard who died defending her charges from a pack of Lamashtan cultists in the Spellscar Desert. Her spirit of fury and hopelessness infused her weapon upon her death, imbuing the firearm with a fragment of her soul and intelligence. The rifle, upon awakening, remembered just enough of Jax's former life to think of her former wielder's name as her own.\nJax is a +1 striking fearsome piercing wind whose driving purpose is to protect innocent travelers in the Spellscar Desert from raiders, bandits, and cultists. Jax allows any creature to wield her, but she doesn't reveal her intelligence or powers until she detects an innocent in danger or if her wielder has proven themselves a worthy champion of justice. If she deems a wielder to be unworthy, Jax uses her dominate ability to control the wielder until she can find a new one.\nIf ever used to attack an innocent traveler, or if, in Jax's opinion, the attack could be considered banditry, the weapon automatically misfires. If Jax witnesses an innocent harmed or killed, she empathically urges her wielder to avenge the victim. If the wielder doesn't comply, Jax attempts to cast dominate (below). Even if the dominate spell fails, Jax withholds all magical abilities, including the +1 weapon potency rune and striking rune, until her wielder redeems themself.\nActivate 1 (command)\nFrequency once per day\nEffect Jax casts Heroism on you.\nActivate 1 (command)\nFrequency once per day\nEffect Jax deems you an unworthy agent of justice. She casts Dominate on you (check (will, dc:24, name:Dominate, traits:mental,incapacitation,divine,spell,enchantment, overrideTraits:true)). If you're chaotic or a worshipper of Lamashtu, you take a -2 penalty to your Will save, and the result of your save is one degree of success worse than the result you rolled. Jax orders you to fight banditry and protect innocent travelers in the Spellscar Desert, renewing the spell as often as necessary until you cease your lawless ways.",
      "bulk": 1,
      "price": {},
      "usage": "held-in-two-hands",
      "category": "martial",
      "group": "firearm",
      "damage": {
        "dice": 1,
        "die": "d6",
        "type": "piercing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:liquid-gold-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "D8aBxqJW61WFiQM2",
      "slug": "liquid-gold-greater",
      "publicationTitle": "Pathfinder #179: Cradle of Quartz",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-elixirs/malleable-mixture.webp"
    },
    "sourceHash": "sha256:c61059ad2de2101a7693fbc50d40363caef8c1a87974d0f6e642066efd273feb",
    "translatableHash": "sha256:4b0ce10a4b1e8398194b11e7d0da0b5c25cf7131d0f3b3b2169b71fe1c539197",
    "data": {
      "schemaVersion": 1,
      "name": "Liquid Gold (Greater)",
      "itemType": "consumable",
      "level": 8,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical",
        "talisman"
      ],
      "description": "Activate f Interact\nTrigger You roll for initiative\nRequirements You're an expert in Stealth.\nThis glass vial containing liquid gold is fastened to a weapon by a fine gold chain.\nYou draw and load the attached weapon as a free action instead of as a reaction.",
      "bulk": 0,
      "price": {
        "gp": 80
      },
      "usage": "affixed-to-a-one-handed-firearm-or-hand-crossbow",
      "category": "talisman",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:containment-contraption",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "mHHvzxHtlLbkbStG",
      "slug": "containment-contraption",
      "publicationTitle": "Pathfinder #179: Cradle of Quartz",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/armor/specific-magic-armor/containment-contraption.webp"
    },
    "sourceHash": "sha256:c75079818ac0a60cdaac69bbb942f2e91bcb267f44151744369575f6dc5628ff",
    "translatableHash": "sha256:f8daa0facc390706550cb8aad21e1394d4e0305ff36facc18cb4bd21bc07a443",
    "data": {
      "schemaVersion": 1,
      "name": "Containment Contraption",
      "itemType": "armor",
      "level": 8,
      "rarity": "uncommon",
      "traits": [
        "bulwark",
        "invested",
        "magical"
      ],
      "description": "This heavy, mechanized brass suit is studded with pistons, gears, dials, and gauges and topped with a front-facing thick glass porthole. The suit is a suit of +1 full plate. While worn, it completely encloses you, providing protection against inhaled toxins—you gain a +1 circumstance bonus to all saving throws made against such effects. The suit isn't airtight, however, and doesn't protect against drowning if you're immersed in water or suffocation if you're placed in a vacuum—at least, not until you activate it.\nActivate 1 envision\nFrequency once per day\nEffect The containment contraption fills with breathable air and filters exterior air or water to create more breathable air for you, as needed. This state persists for up to 1 hour, during which time you can breathe normally in environments where you normally couldn't. During this time, your circumstance bonus to saving throws against inhaled toxins increases to +2, and you also gain a +2 circumstance bonus to saves against olfactory effects. This effect ends immediately if the containment contraption becomes broken.\nEffect: Containment Contraption",
      "bulk": 4,
      "price": {
        "gp": 500
      },
      "usage": "",
      "category": "heavy",
      "group": "plate",
      "armor": {
        "armorClassBonus": 6,
        "dexterityCap": 0,
        "checkPenalty": -3,
        "speedPenaltyFeet": -10
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:golden-branding-iron-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "tNs0FKSthYCM7ivx",
      "slug": "golden-branding-iron-greater",
      "publicationTitle": "Pathfinder #179: Cradle of Quartz",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:5a7bfa0f73254902eeef85f1e9b6165493d77765e68c63f2fc0a2e43a44949ee",
    "translatableHash": "sha256:1bafaea5449f1ab0d707decf401324f39c88e521102c8a1efc31a8bc8fd21d0e",
    "data": {
      "schemaVersion": 1,
      "name": "Golden Branding Iron (Greater)",
      "itemType": "consumable",
      "level": 9,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical",
        "talisman"
      ],
      "description": "Activate f envision\nTrigger You hit a target with a ranged Strike with the affixed weapon\nRequirements You're an expert with the affixed weapon.\nThis talisman is a gold-plated brand that can be affixed to a ranged weapon's stock. When you activate a golden branding iron, you mark the target with your magical sigil.\nYou harmlessly place your unique magical sigil, which is about 1 square inch in size, anywhere on the target creature, as long as the location is visible to you. The mark is only visible to you and up to 6 of your allies. The mark can be scrubbed or scraped off with 5 minutes of work. It fades naturally over the course of a year.",
      "bulk": 0,
      "price": {
        "gp": 120
      },
      "usage": "affixed-to-a-two-handed-firearm-or-crossbow",
      "category": "talisman",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:smogger",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "uSwylNGP5We9uUw4",
      "slug": "smogger",
      "publicationTitle": "Pathfinder #179: Cradle of Quartz",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/other-worn-items/smogger.webp"
    },
    "sourceHash": "sha256:eeafe41615d7fedf9d2dadf986f401d206f3765733f2a0d27dd17eb680b65cd0",
    "translatableHash": "sha256:369c402c2a0de2bc80e7ffc4a6d4c8cad5bc1885e68cd217b4ac77d6649ae28c",
    "data": {
      "schemaVersion": 1,
      "name": "Smogger",
      "itemType": "equipment",
      "level": 9,
      "rarity": "uncommon",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "Some mutants savor the acrid smog of Alkenstar and the Gunworks. A smogger recreates this pollution by sucking in clean air and spewing it back out as pungent smog.\nActivate 2 (poison) Interact\nFrequency once per hour\nEffect The smogger creates a 10-foot emanation of smog centered on you, which moves with you. You and other creatures in the smog are Concealed while inside the smog, and other creatures are concealed to you and other creatures in the smog. A strong wind doesn't disperse the smog but reduces it to a 5-foot- radius emanation. A creature that must breathe that begins its turn inside of the smog can choose to hold its breath as a free action for the round, but if it doesn't, it becomes Sickened 1. The smogger can maintain this effect for up to 1 minute, and the wearer of the smogger can Dismiss the effect.\nActivate 2 (poison) Interact\nFrequency once per day\nRequirements The smogger's above activation is in effect\nEffect The smog created by the smogger thickens into a toxic element that burns the eyes, blisters flesh, and causes fits of coughing. All creatures in the smog cloud, including you, must attempt a check (fortitude, dc:32) save—creatures that must breathe and aren't holding their breath take a -2 circumstance penalty to this save.\nCritical Success The creature is unaffected.\nSuccess The creature is sickened 1.\nFailure The creature is sickened 1 (or increases their sickened condition value to 2 if it isn't holding its breath). The creature also takes 4d6 poison damage.\nCritical Failure As failure, but the creature takes 8d6 poison damage.",
      "bulk": 2,
      "price": {
        "gp": 600
      },
      "usage": "wornbackpack",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:golden-cased-bullet-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "5ucWbzvEQhd2eSJk",
      "slug": "golden-cased-bullet-greater",
      "publicationTitle": "Pathfinder #179: Cradle of Quartz",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/ammunition/golden-cased-bullet.webp"
    },
    "sourceHash": "sha256:0f282a800271be951c882ffd1d447f35bd82fca424c859589fdebd1e6320a339",
    "translatableHash": "sha256:32f36d7a7fa5c814040953b8626cb6d694a18c66c79fb7ac54ffa319df3dfc96",
    "data": {
      "schemaVersion": 1,
      "name": "Golden-Cased Bullet (Greater)",
      "itemType": "ammunition",
      "level": 10,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical"
      ],
      "description": "Ammunition round\nActivate 1 envision\nThe magic-infused metal of this bullet's golden casing allows it to curve just a bit in flight once the bullet has been fired, allowing you to ignore the bonus to AC granted to a target in standard or lesser cover.",
      "bulk": 0,
      "price": {
        "gp": 200
      },
      "usage": "",
      "category": "ammo",
      "group": "ammo"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:golden-silencer-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "PkrpCUXdV3I1boRQ",
      "slug": "golden-silencer-greater",
      "publicationTitle": "Pathfinder #179: Cradle of Quartz",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/other-consumables/golden-silencer.webp"
    },
    "sourceHash": "sha256:43d25b6feda28f0df0db7062edfd18e6c70cbdb9917ea8ae48c74240c74cc163",
    "translatableHash": "sha256:a17eba453ceab4343c32aee7da4374579e5fc2c7085573e37109b4cc62169c2a",
    "data": {
      "schemaVersion": 1,
      "name": "Golden Silencer (Greater)",
      "itemType": "consumable",
      "level": 10,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "illusion",
        "magical",
        "talisman"
      ],
      "description": "Activate 1 Interact\nRequirements You're an expert in Stealth.\nThe Golden Gunners are dreaded for their use of their golden silencers, which they put to good use in clandestine raids. They silence both the loud gunshot and the screams of creatures wounded by its shot. A weapon with a golden silencer attached emits no light and makes no noise when fired. A target hit by a ranged Strike from the affixed weapon must succeed at a check (fortitude, dc:27) save or be silenced as well for 1 minute. A silenced creature can't call for help or use sonic abilities, nor can it use abilities with the auditory trait. This prevents it from casting spells that include verbal components.\nThe silenced creature can attempt a new Fortitude save at the end of each of its turns to end the duration early.",
      "bulk": 0.1,
      "price": {
        "gp": 200
      },
      "usage": "affixed-to-firearm",
      "category": "talisman",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:pyronite",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "6CnuU7AhzzAMGzAM",
      "slug": "pyronite",
      "publicationTitle": "Pathfinder #179: Cradle of Quartz",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-bombs/pyronite.webp"
    },
    "sourceHash": "sha256:fad499b411586b5829120ed0665c00741ae8021cd182c8c52f7e55afd755974b",
    "translatableHash": "sha256:776725e0dfe661755dce79baa568272b6bb1dba377039091643328f535fc1f63",
    "data": {
      "schemaVersion": 1,
      "name": "Pyronite",
      "itemType": "consumable",
      "level": 11,
      "rarity": "rare",
      "traits": [
        "alchemical",
        "consumable",
        "fire"
      ],
      "description": "A stick of pyronite is a devastating explosive that fills an area with fire and concussive force when it detonates—as long as its fuse has been lit!\nPyronite is an unstable material with a limited shelf life. Sticks of pyronite must be kept dry and cool; otherwise, the raw pyronite will leak out of the rods and collect as a semi-transparent goo that explodes on any impact or loud noise, with an explosive effect equal to half the number of rods.\nActivate 1 or 2 Interact\nEffect Activating a stick of pyronite is usually a two-action activity. First, you interact with the pyronite to light its fuse with a source of fire. This fire source can be an object you hold in another hand, such as a tindertwig or a lit torch, or it can be a free-standing adjacent fire. Once the fuse is lit, you throw it (an Interact action with the ranged trait) up to 50 feet away—if you hurl it into an existing fire, you don't need to take the initial action to light its fuse and can Activate the pyronite with only one action. You can toss the pyronite anywhere within 50 feet, though at the GM's discretion, you might need to make an attack roll if the throw is unusually challenging.\nOnce a stick of pyronite's fuse is lit, it explodes at the end of your turn, regardless of whether you've thrown it or not. (A lit fuse can be extinguished with an Interact action.) If multiple sticks of pyronite detonate at the end of your turn, you can increase the area, but not the damage, of this effect. When the pyronite explodes, all creatures in a 20-foot burst must attempt a check (reflex, dc:28) save or take 3d6 fire damage and 3d6 bludgeoning damage.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage and is Deafened for 1 round.\nFailure The creature takes full damage and is deafened for 1 minute.\nCritical Failure The creature takes double damage and is knocked Prone, Stunned 1, and deafened for 1 hour.",
      "bulk": 0.1,
      "price": {
        "gp": 250
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:golden-spur",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "QSofPEx2sjztUNao",
      "slug": "golden-spur",
      "publicationTitle": "Pathfinder #179: Cradle of Quartz",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/talismans/golden-spur.webp"
    },
    "sourceHash": "sha256:52c567b606f86ab1f10b472f9bd760cb7f709c912798b9965bc442d8d2ff8879",
    "translatableHash": "sha256:4eacd46d76206dee336bdca29402d783ab92ca1583ea15ef76cc0ab3abea3635",
    "data": {
      "schemaVersion": 1,
      "name": "Golden Spur",
      "itemType": "consumable",
      "level": 11,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical",
        "talisman",
        "teleportation"
      ],
      "description": "Activate 1 command\nTrigger You hit a target within 120 feet with the affixed weapon\nRequirements You're a master in Arcana, Nature, Occultism, or Religion.\nThis golden spur is affixed to a weapon by a braided leather cord. You teleport to a space you can see within 10 feet of the target. You must have line of effect to the space.",
      "bulk": 0,
      "price": {
        "gp": 300
      },
      "usage": "affixed-to-crossbow-or-firearm",
      "category": "talisman",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:golden-branding-iron-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "kVng8qcoHLBORFIc",
      "slug": "golden-branding-iron-major",
      "publicationTitle": "Pathfinder #179: Cradle of Quartz",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:4cf5b016f5247cddb12ff901dbb8aa96fd0c678116d9f5615c47a7b2aa17b750",
    "translatableHash": "sha256:b0f4e2205c71687583e5a2ec4572cb0a85e428ade1662f99f50df3a0d6d92207",
    "data": {
      "schemaVersion": 1,
      "name": "Golden Branding Iron (Major)",
      "itemType": "consumable",
      "level": 13,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical",
        "talisman"
      ],
      "description": "Activate f envision\nTrigger You hit a target with a ranged Strike with the affixed weapon\nRequirements You're an expert with the affixed weapon.\nThis talisman is a gold-plated brand that can be affixed to a ranged weapon's stock. When you activate a golden branding iron, you mark the target with your magical sigil.\nYou harmlessly place your unique magical sigil, which is about 1 square inch in size, anywhere on the target creature, as long as the location is visible to you. The mark is only visible to you and up to 6 of your allies. The mark can be scrubbed or scraped off with 5 minutes of work. It never fades naturally.",
      "bulk": 0,
      "price": {
        "gp": 450
      },
      "usage": "affixed-to-a-two-handed-firearm-or-crossbow",
      "category": "talisman",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:golden-cased-bullet-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "bKc5f8dAOjv1kwQ2",
      "slug": "golden-cased-bullet-major",
      "publicationTitle": "Pathfinder #179: Cradle of Quartz",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/ammunition/golden-cased-bullet.webp"
    },
    "sourceHash": "sha256:ac01b789f0953479c1e13e6ce25b1849ce7e338b90a956ccbfa3e40bd46aa893",
    "translatableHash": "sha256:b48608bc7db0010d908e6ce1a14e90b400d0a58102f758dd2353f76e20ace37f",
    "data": {
      "schemaVersion": 1,
      "name": "Golden-Cased Bullet (Major)",
      "itemType": "ammunition",
      "level": 16,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical"
      ],
      "description": "Ammunition round\nActivate 1 envision\nThe magic-infused metal of this bullet's golden casing allows it to curve just a bit in flight once the bullet has been fired, allowing you to ignore the bonus to AC granted to a target in greater, standard, or lesser cover.",
      "bulk": 0,
      "price": {
        "gp": 2000
      },
      "usage": "",
      "category": "ammo",
      "group": "ammo"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:star-grenade-lesser",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "RsCLCgCgGAn67ry5",
      "slug": "star-grenade-lesser",
      "publicationTitle": "Pathfinder #180: The Smoking Gun",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:422c9d0953e29fbd024a09650ca46635af2c715b71e3de962abd792a072eb7cc",
    "translatableHash": "sha256:4cbbc27d290911a48aaa322c3710b4a15accb93a88ff493a125b7af2d10269bd",
    "data": {
      "schemaVersion": 1,
      "name": "Star Grenade (Lesser)",
      "itemType": "weapon",
      "level": 1,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "bomb",
        "consumable",
        "fire",
        "splash"
      ],
      "description": "Activate 1 Strike\nThese unusual gunpowder bombs, typically marked with a symbol of a four-pointed star on their outer surface, explode outward in the shape of a cross whenever they Strike a target. When you throw a star grenade, arrange two perpendicular 25-foot line over the target, both centered on the target and moving straight through the target, not diagonally. Creatures other than the target within these two lines take splash damage (typically 8 squares take splash damage for a Medium creature). Any effect that alters or adjusts the splash area's shape or size, like the alchemist feat Expanded Splash, doesn't apply to star grenades.\nThe bomb deals 1d8 fire damage and 1 splash)[fire damage].",
      "bulk": 0.1,
      "price": {
        "gp": 3
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "bomb",
      "damage": {
        "dice": 1,
        "die": "d8",
        "type": "fire"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:corpse-compass",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "0yLfPmzRtBd6Avac",
      "slug": "corpse-compass",
      "publicationTitle": "Pathfinder #180: The Smoking Gun",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/held-items/corpse-compass.webp"
    },
    "sourceHash": "sha256:731c35df53ee70cd8f9b018b4d49d39e7ba465bd9edc5a876ecb96881eb0d5fc",
    "translatableHash": "sha256:cb96d9cdf4cd3518e384d2bc9dd52c9a31da300c2f73c93939d5f1daff36b2d3",
    "data": {
      "schemaVersion": 1,
      "name": "Corpse Compass",
      "itemType": "equipment",
      "level": 3,
      "rarity": "uncommon",
      "traits": [
        "magical"
      ],
      "description": "This bone compass, made of the bones of sapient creatures that died violent deaths, is eerily effective when it comes to locating corpses. If you know you're Tracking a creature that's dead, you can use the compass's idiosyncrasies to your advantage and gain a +2 item bonus to your Survival check to do so. Otherwise, it works as a normal Compass.",
      "bulk": 0.1,
      "price": {
        "gp": 45
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:star-grenade-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "KFTkiLXWENatK9XY",
      "slug": "star-grenade-moderate",
      "publicationTitle": "Pathfinder #180: The Smoking Gun",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:c5b347e19db1a671e1da399b95bbfae2ec12133d9e83e4d081ecba7a3e4d98fb",
    "translatableHash": "sha256:bff50c74f95ab3abf44f254224d1768ea493ffe6b10f52bee13077e21d8e680d",
    "data": {
      "schemaVersion": 1,
      "name": "Star Grenade (Moderate)",
      "itemType": "weapon",
      "level": 3,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "bomb",
        "consumable",
        "fire",
        "splash"
      ],
      "description": "Activate 1 Strike\nThese unusual gunpowder bombs, typically marked with a symbol of a four-pointed star on their outer surface, explode outward in the shape of a cross whenever they Strike a target. When you throw a star grenade, arrange two perpendicular 25-foot line over the target, both centered on the target and moving straight through the target, not diagonally. Creatures other than the target within these two lines take splash damage (typically 8 squares take splash damage for a Medium creature). Any effect that alters or adjusts the splash area's shape or size, like the alchemist feat Expanded Splash, doesn't apply to star grenades.\nYou gain a +1 item bonus to attack rolls. The bomb deals 2d8 fire damage and 2 splash)[fire damage].",
      "bulk": 0.1,
      "price": {
        "gp": 10
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "bomb",
      "damage": {
        "dice": 2,
        "die": "d8",
        "type": "fire"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:blast-lance",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "qLhb5ZvIDOmbwvc9",
      "slug": "blast-lance",
      "publicationTitle": "Pathfinder #180: The Smoking Gun",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/specific-magic-weapons/blast-lance.webp"
    },
    "sourceHash": "sha256:f56f47a6347bf3ad361564301e604942885c7b7d6d02f5b6031125b8483431f1",
    "translatableHash": "sha256:f5d9a093697b0651842768b19bbf3f26d5c450a166b6d218614560255d2e4057",
    "data": {
      "schemaVersion": 1,
      "name": "Blast Lance",
      "itemType": "weapon",
      "level": 4,
      "rarity": "uncommon",
      "traits": [
        "deadly-d8",
        "fire",
        "jousting-d6",
        "magical",
        "reach"
      ],
      "description": "This weapon is a long +1 Lance with a muzzle built into the pointed tip, allowing the user to fire the chamber after a successful melee attack. A barrel running down the length of the lance allows you to load firearm ammunition into the base of the weapon more easily than it might seem from the design. It takes 2 actions to reload a blast lance.\nActivate f command\nTrigger You strike a foe with the blast lance\nRequirements The blast lance is loaded with a round\nEffect You fire a blast of gunpowder through the weapon that deals 2d8 fire damage. The foe must attempt a check (fortitude, dc:18) save.\nCritical Success The target is unaffected by the blast of gunpowder and the blast lance misfires and jams.\nSuccess The target takes half the fire damage.\nFailure The target takes the full fire damage and is pushed back 5 feet. You can Stride after it, but you must move the same distance and in the same direction.\nCritical Failure The target takes double damage and is pushed back 10 feet. You can Stride after it, but you must move the same distance and in the same direction.",
      "bulk": 2,
      "price": {
        "gp": 100
      },
      "usage": "held-in-two-hands",
      "category": "simple",
      "group": "spear",
      "damage": {
        "dice": 1,
        "die": "d8",
        "type": "piercing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:lawbringers-lasso",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "TmH7coBHz9pjoDvP",
      "slug": "lawbringers-lasso",
      "publicationTitle": "Pathfinder #180: The Smoking Gun",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/held-items/lawbringers-lasso.webp"
    },
    "sourceHash": "sha256:8e0ba43414e8d2c06fac4b64bc78e596946fbf9c7e70acfff900d03200cb3a47",
    "translatableHash": "sha256:a1374eeed5e85875d939f11fa29b58e276541a5a0734d76f77cd379990cf4662",
    "data": {
      "schemaVersion": 1,
      "name": "Lawbringer's Lasso",
      "itemType": "equipment",
      "level": 4,
      "rarity": "uncommon",
      "traits": [
        "lawful",
        "magical"
      ],
      "description": "This enchanted lasso is a Net that can be used to Grapple creatures up to 30 feet away, requires a check (athletics, dc:18, traits:action:force-open) check to Force Open, and has an Escape DC of 18. It's permanently attached to a 30-foot rope. While using the lawbringer's lasso to Grapple, you receive a +1 item bonus to Grapple checks against creatures with the chaotic trait. If you roll a critical failure on your attempt to Grapple a chaotic creature with the lawbringer's lasso, you get a failure instead.",
      "bulk": 1,
      "price": {
        "gp": 100
      },
      "usage": "held-in-two-hands",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:reducer-round",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "qFEoXkORtrHfoMwx",
      "slug": "reducer-round",
      "publicationTitle": "Pathfinder #180: The Smoking Gun",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/ammunition/reducer-round.webp"
    },
    "sourceHash": "sha256:f752dc5fb6727d513d5668101c8fa53668b20aa1d2e0e2e1fa5c7ebbf06103a7",
    "translatableHash": "sha256:b43131a852e768309dc4593da6d71fcebdde3c63bcac46f64caf89f92383a65d",
    "data": {
      "schemaVersion": 1,
      "name": "Reducer Round",
      "itemType": "ammunition",
      "level": 5,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical"
      ],
      "description": "Ammunition round\nActivate 1 Interact\nThis bullet is fashioned from a rubbery substance and stamped with the image of a diminutive ant twitching in surprise. The bullet deals no damage on a successful hit. Instead, the target must attempt a check (fortitude, dc:19) save.\nSuccess The target is unaffected.\nFailure The target shrinks to Tiny size for 1d4 rounds. Its reach becomes 0 feet, and it's Enfeebled 1 for this duration.\nCritical Failure The target shrinks to Tiny size for 1 minute. Its reach becomes 0 feet, and it's Enfeebled 2 for this duration",
      "bulk": 0,
      "price": {
        "gp": 25
      },
      "usage": "",
      "category": "ammo",
      "group": "ammo"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:skull-bomb",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "9FwGY0X3v4ZksZH7",
      "slug": "skull-bomb",
      "publicationTitle": "Pathfinder #180: The Smoking Gun",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/other-consumables/skull-bomb.webp"
    },
    "sourceHash": "sha256:42d6f26e5144fcd34c6683e96a31f9ad116abf6210ab5223d33012dc508e95b2",
    "translatableHash": "sha256:9735309fc7b7296bd2110498cf61ac147958b01a6a572f8b5dbb2377ce4755e3",
    "data": {
      "schemaVersion": 1,
      "name": "Skull Bomb",
      "itemType": "consumable",
      "level": 8,
      "rarity": "uncommon",
      "traits": [
        "clockwork",
        "consumable",
        "fire",
        "magical"
      ],
      "description": "This device is a human-sized skull crafted entirely from metal plating and clockwork gears, which slots easily into a human skeleton in the spot where an ordinary skull would normally be located. While performing a Create Undead ritual, you can attach this skull bomb to the target creature in place of its own head. In order to do so, the target creature must be Medium and have the humanoid trait. The target creature can have only one skull bomb attached in this fashion. The creature gains the following ability.\nThrow Skull 2 (manipulate)\nThe creature detaches its skull bomb and hurls the volatile explosive at a point within 30 feet. The skull explodes, dealing 7d6 fire damage to creatures within a 15-foot burst (check (reflex, dc:24, basic, options:area-effect) save). The skull is permanently destroyed and can't be used again, and the throwing creature is permanently Blinded and headless.",
      "bulk": 0.1,
      "price": {
        "gp": 80
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:blast-lance-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "RijrZ8lnaYrGTeMV",
      "slug": "blast-lance-greater",
      "publicationTitle": "Pathfinder #180: The Smoking Gun",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/specific-magic-weapons/blast-lance.webp"
    },
    "sourceHash": "sha256:6a749818ad9e2641ff8d353ceee69a069e746e944036a4c966dcc670a6e6cd70",
    "translatableHash": "sha256:2d2dd70859bf8efa915e68b541867fc86a8905e678a4fd60bd8e28bea3dceb66",
    "data": {
      "schemaVersion": 1,
      "name": "Blast Lance (Greater)",
      "itemType": "weapon",
      "level": 8,
      "rarity": "uncommon",
      "traits": [
        "deadly-d8",
        "fire",
        "jousting-d6",
        "magical",
        "reach"
      ],
      "description": "This weapon is a long +1 striking Lance with a muzzle built into the pointed tip, allowing the user to fire the chamber after a successful melee attack. A barrel running down the length of the lance allows you to load firearm ammunition into the base of the weapon more easily than it might seem from the design. It takes 2 actions to reload a blast lance.\nActivate f command\nTrigger You strike a foe with the blast lance\nRequirements The blast lance is loaded with a round\nEffect You fire a blast of gunpowder through the weapon that deals 3d8 fire damage. The foe must attempt a check (fortitude, dc:24) save.\nCritical Success The target is unaffected by the blast of gunpowder and the blast lance misfires and jams.\nSuccess The target takes half the fire damage.\nFailure The target takes the full fire damage and is pushed back 5 feet. You can Stride after it, but you must move the same distance and in the same direction.\nCritical Failure The target takes double damage and is pushed back 10 feet. You can Stride after it, but you must move the same distance and in the same direction.",
      "bulk": 2,
      "price": {
        "gp": 500
      },
      "usage": "held-in-two-hands",
      "category": "simple",
      "group": "spear",
      "damage": {
        "dice": 1,
        "die": "d8",
        "type": "piercing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:blast-suit",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "GPrjYsQiC3jKdQmO",
      "slug": "blast-suit",
      "publicationTitle": "Pathfinder #180: The Smoking Gun",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:b8697a8cbcdfff662b45539dd56f5b62d1f3b05507074716f43618cfb03bf860",
    "translatableHash": "sha256:f62a3e0b15f8756b31f20f85cae137754b6038ef5b0f56efae71b24934a81d6b",
    "data": {
      "schemaVersion": 1,
      "name": "Blast Suit",
      "itemType": "armor",
      "level": 9,
      "rarity": "uncommon",
      "traits": [
        "bulwark",
        "invested",
        "magical"
      ],
      "description": "Crafted from heavy steel plating and riveted together with cunning precision, this suit of +1 resilient Full Plate is specifically designed to protect against sudden explosions. This added layer of security comes at the cost of movement, however.\nActivate r command\nTrigger You're affected by an area effect that requires a Reflex save, or you would take splash damage from a scatter weapon\nEffect The blast suit locks together into a rigid bulwark, protecting you from the blast but preventing you from moving from your position under any circumstances.\nYou become Immobilized, gain a +2 circumstance bonus to your Reflex save against area effects, and gain resistance 5 to all damage you would normally take from area effects and scatter splash damage (this doesn't damage the blast suit). These effects persist for as long as the suit remains in the locked position. You can Interact with the suit to unlock it.\nEffect: Blast Suit",
      "bulk": 2,
      "price": {
        "gp": 650
      },
      "usage": "",
      "category": "heavy",
      "group": "plate",
      "armor": {
        "armorClassBonus": 6,
        "dexterityCap": 0,
        "checkPenalty": -3,
        "speedPenaltyFeet": -10
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:mana-rattler-liniment",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "q07Ej07uIsKx5zab",
      "slug": "mana-rattler-liniment",
      "publicationTitle": "Pathfinder #180: The Smoking Gun",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-elixirs/mana-rattler-liniment.webp"
    },
    "sourceHash": "sha256:7aa93096cbb392d21a4a546f5cec9f5e96d122f717cfce46503de0c350cd9c43",
    "translatableHash": "sha256:a5fde5208e7dcbe77d915dbc02f9edf9c9c57d4458f74628e2f9813257e97977",
    "data": {
      "schemaVersion": 1,
      "name": "Mana-Rattler Liniment",
      "itemType": "consumable",
      "level": 9,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "consumable",
        "elixir",
        "morph"
      ],
      "description": "Activate 1 Interact\nAccording to reports, as well as Emelett's own marketing pitches, this lotion is derived from rare mana rattlesnakes whose oils ward against poison and disease. When applied, you can attempt to counteract a poison or disease effect currently afflicting you. The potion has a counteract rank of 5 and a 1d20+15 modifier for the roll. You also acquire a serpentine appearance, growing fangs and scaly skin. For 1 hour, you gain a fangs unarmed attack that deals 1d6 piercing damage plus 1 poison damage.\nEffect: Mana-Rattler Liniment",
      "bulk": 0.1,
      "price": {
        "gp": 110
      },
      "usage": "held-in-one-hand",
      "category": "elixir",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:erraticannon",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "XOXUFjBGO6azymyb",
      "slug": "erraticannon",
      "publicationTitle": "Pathfinder #180: The Smoking Gun",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/specific-magic-weapons/erraticannon.webp"
    },
    "sourceHash": "sha256:0d3c67688feee737b8d0ac785b50a428be160a1474748ba373da641ee071cb33",
    "translatableHash": "sha256:3310423a6d0cb8742cced9c167de987bf80eacee40a8a4ed3d128eae5cdaa876",
    "data": {
      "schemaVersion": 1,
      "name": "Erraticannon",
      "itemType": "weapon",
      "level": 9,
      "rarity": "rare",
      "traits": [
        "magical",
        "modular"
      ],
      "description": "This +1 striking Hand Cannon is festooned with so many add-ons and modifications it's barely recognizable as a firearm. A large hopper at the top of the gun allows any type of ammunition (including arrows, bolts, stone bullets, and firearm rounds) to be fed into the machine, which converts the ammunition into blasts of raw, destructive energy. Each time you attack with the weapon, roll 1d8 to determine the damage type of the Strike—all of the erraticannon's weapon damage is converted to that damage type for the Strike. Additionally, roll another d8, and the erraticannon deals 1d6 additional damage of this second damage type.\nEffect: Erraticannon\nd8 |\nDamage Type |\n1 |\nAcid |\n2 |\nCold |\n3 |\nElectricity |\n4 |\nFire |\n5 |\nSonic |\n6 |\nBludgeoning |\n7 |\nPiercing |\n8 |\nSlashing |\nActivate 2\nFrequency once per day\nEffect You set the erraticannon to maximum power and unleash a blast that deals 1d6 acid damage,1d6 electricity damage,1d6 fire damage,1d6 sonic damage,1d6 bludgeoning damage,1d6 piercing damage,1d6 slashing damage] damage to all creatures in a 30-foot cone (check (reflex, dc:25, basic) save).",
      "bulk": 1,
      "price": {
        "gp": 700
      },
      "usage": "held-in-one-hand",
      "category": "simple",
      "group": "firearm",
      "damage": {
        "dice": 1,
        "die": "d6",
        "type": "piercing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:corpsecaller-round",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "yaKQS5aG2i7IioyH",
      "slug": "corpsecaller-round",
      "publicationTitle": "Pathfinder #180: The Smoking Gun",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/ammunition/corpsecaller-round.webp"
    },
    "sourceHash": "sha256:dea8a68f0486dd5d8efcdb25e2cba7176f843ce07050c3872aa75010f1f82389",
    "translatableHash": "sha256:660ad5487608d10462a1b2ba4a80f8f90426e28d0f7d1bb84ae53a58f6d06926",
    "data": {
      "schemaVersion": 1,
      "name": "Corpsecaller Round",
      "itemType": "ammunition",
      "level": 9,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical",
        "void"
      ],
      "description": "Ammunition round\nActivate 1 Interact\nThis bullet is crafted entirely from obsidian and engraved with hair-thin runes. When an activated corpsecaller round hits a target, the struck creature is called to the grave. It takes 4d10 void damage with a check (fortitude, dc:25) saving throw.\nCritical Success The foe is unaffected.\nSuccess The foe takes half damage.\nFailure The foe takes full damage and is Doomed 1. If the foe dies within the next 24 hours, its corpse is tethered to the Void, making it easier to raise as an undead. Creatures using the create undead ritual on the foe's corpse receive a +2 circumstance bonus to their primary and secondary skill checks for the ritual.\nCritical Failure As failure, except the foe takes double damage and is Doomed 2.",
      "bulk": 0,
      "price": {
        "gp": 130
      },
      "usage": "",
      "category": "ammo",
      "group": "ammo"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:effervescent-decoction",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "EOk6kNsNJOhoSbRZ",
      "slug": "effervescent-decoction",
      "publicationTitle": "Pathfinder #180: The Smoking Gun",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/potions/effervescent-decoction.webp"
    },
    "sourceHash": "sha256:403aa03fb911ce0ba19ddc0301e081b40e64e55a31818ed30339bf3f05dae816",
    "translatableHash": "sha256:adc29f2d85d8cc0a2655aa2a5433990c8c9da1fdc910cd068d8b10bef4d1056d",
    "data": {
      "schemaVersion": 1,
      "name": "Effervescent Decoction",
      "itemType": "consumable",
      "level": 10,
      "rarity": "uncommon",
      "traits": [
        "air",
        "consumable",
        "magical",
        "potion"
      ],
      "description": "Activate 1 Interact\nThis bubbly potion is purportedly made from winds gathered from the Mana Wastes and distilled into a liquor. For 1 hour after you imbibe the decoction, you can belch fizzy foam around willing creatures or unattended objects, surrounding them with a pink bubble. Once per minute, you can belch a bubble by using two Interact actions. This has effects similar to a Levitate spell, except you can't control the bubbles; they rise 10 feet per round on their own. The bubble is sturdy enough to resist minor bumps or heavy winds, but if the item or creature takes any damage, the bubble pops, causing the levitation effect to end. If the creature surrounded by the bubble uses a move action rather than just ride within the bubble, the bubble also pops.",
      "bulk": 0.1,
      "price": {
        "gp": 160
      },
      "usage": "held-in-one-hand",
      "category": "potion",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:mutagenic-renovator",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "MZ5fWDqpKEMv2d1Q",
      "slug": "mutagenic-renovator",
      "publicationTitle": "Pathfinder #180: The Smoking Gun",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/potions/mutagenic-renovator.webp"
    },
    "sourceHash": "sha256:5fedd5be0335ed2665307c5c6b67ebfe9af72cb6ca0d9eef5cd29a3304ae2db7",
    "translatableHash": "sha256:8d5519bb1e0eedd491efd2dbf5ecbcace05003c875d49bc9c2f0a378be7c5371",
    "data": {
      "schemaVersion": 1,
      "name": "Mutagenic Renovator",
      "itemType": "consumable",
      "level": 10,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical",
        "potion"
      ],
      "description": "Activate 1 Interact\nThis sludgy concoction is said to be derived from liquefied mutant scales. For 1 hour after you imbibe the potion, your skin warps and mutates to grant you resistance 5 to one type of energy damage. When you first drink the potion, choose either acid, cold, electricity, fire, or sonic damage. The potion starts by granting you resistance against this type of damage. Each time you take damage from one of these listed energy types other than the one you currently resist, your skin mutates, causing you to lose the energy resistance previously granted by this potion and gain resistance to the type of energy by which you were most recently damaged, and the potion's duration decreases by 10 minutes. The resistance shifts only after you take the damage, so it doesn't apply to the first instance of damage",
      "bulk": 0.1,
      "price": {
        "gp": 180
      },
      "usage": "held-in-one-hand",
      "category": "potion",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:redeemers-pistol",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "GKBCShgNVVhDiNCb",
      "slug": "redeemers-pistol",
      "publicationTitle": "Pathfinder #180: The Smoking Gun",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/specific-magic-weapons/redeemers-pistol.webp"
    },
    "sourceHash": "sha256:c54e3f3671b84c8bc92c3080523797bae1af59e37bfd55544c3d97fe5c9e1872",
    "translatableHash": "sha256:588c2a5f983a90b0283e6f48e43858de9baf6164221feb3b1ce763f4177247ee",
    "data": {
      "schemaVersion": 1,
      "name": "Redeemer's Pistol",
      "itemType": "weapon",
      "level": 11,
      "rarity": "unique",
      "traits": [
        "concealable",
        "concussive",
        "fatal-d10",
        "good",
        "holy",
        "mental"
      ],
      "description": "This +2 striking dueling pistol is fashioned from silvery steel that glistens with a radiant light. You can choose to make a nonlethal attack with the redeemer's pistol without taking a -2 penalty; if you do so, the attack deals 1d6 additional mental damage. You can also call forth the redemptive spirit within the gun to pass judgment on your foes.\nActivate r command\nFrequency once per day\nTrigger An enemy within 30 feet damages you\nEffect The protective spirit within the gun imposes a vision of redemption in your foe's mind. The foe must choose one of the following options.\n• You're unharmed by the triggering damage.\n• You gain resistance to all damage against the triggering damage equal to 2 + your level. After the damaging effect is applied, the enemy becomes Enfeebled 2 until the end of its next turn and takes 4 persistent spirit damage",
      "bulk": 0.1,
      "price": {
        "gp": 1400
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "firearm",
      "damage": {
        "dice": 1,
        "die": "d6",
        "type": "piercing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:hex-blaster",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "HKcfpawD4CesJtFy",
      "slug": "hex-blaster",
      "publicationTitle": "Pathfinder #180: The Smoking Gun",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/specific-magic-weapons/hex-blaster.webp"
    },
    "sourceHash": "sha256:fa7d273f0ba5f3d71402686557edd55ed6eeea13a87e5f4eb6ac1678e955fe30",
    "translatableHash": "sha256:99655ee683feafa8f04a86f03d476ecaacbb0a6630ef1e42f8285ccd6b9a26cb",
    "data": {
      "schemaVersion": 1,
      "name": "Hex Blaster",
      "itemType": "weapon",
      "level": 11,
      "rarity": "unique",
      "traits": [
        "concussive",
        "cursed",
        "emotion",
        "fatal-d12",
        "fear",
        "kickback",
        "mental",
        "occult"
      ],
      "description": "This +2 striking fearsome arquebus is composed of warped and twisted wood engraved with eerie runes. When the weapon fires, the blast sometimes sounds like the cackling of a diabolical witch.\nActivate 1 command\nFrequency once per day\nEffect You afflict a creature you can see with a hex of impending doom. The hex lasts for 1 minute. As long as the creature is hexed, when you hit it with a round from the hex blaster, the creature must attempt a check (will, dc:28) save at the end of your turn; the creature attempts a single Will save regardless of the number of times you hit it.\nCritical Success The creature is unaffected.\nSuccess The creature is Frightened 1. It also takes 1d6 persistent mental damage.\nFailure The creature is Frightened 2. It also takes 2d6 persistent mental damage.\nCritical Failure The creature is frightened 2 and Slowed 1 for 1 minute. It also takes 4d6 persistent mental damage and is cursed with a hex of impending doom. If the target falls Unconscious from damage dealt by this Strike or the persistent mental damage, it remains unconscious for 1 day or until this curse is removed. After 1 day, if the creature is still unconscious, it must succeed at a check (fortitude, dc:28, traits:death,incapacitation) save or die; this effect has the death and incapacitation traits.",
      "bulk": 2,
      "price": {
        "gp": 1400
      },
      "usage": "held-in-two-hands",
      "category": "martial",
      "group": "firearm",
      "damage": {
        "dice": 1,
        "die": "d8",
        "type": "piercing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:star-grenade-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "W1XG0qStVh8fmeJ6",
      "slug": "star-grenade-greater",
      "publicationTitle": "Pathfinder #180: The Smoking Gun",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:9cfa6f0d9039579da7b7cb146729a84c515c2100ab7f8d7a7986a08f820a765b",
    "translatableHash": "sha256:23a549864d3148fa3d97e50354a2495e5c3e3002252420792ada5a9999c1e397",
    "data": {
      "schemaVersion": 1,
      "name": "Star Grenade (Greater)",
      "itemType": "weapon",
      "level": 11,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "bomb",
        "consumable",
        "fire",
        "splash"
      ],
      "description": "Activate 1 Strike\nThese unusual gunpowder bombs, typically marked with a symbol of a four-pointed star on their outer surface, explode outward in the shape of a cross whenever they Strike a target. When you throw a star grenade, arrange two perpendicular 25-foot line over the target, both centered on the target and moving straight through the target, not diagonally. Creatures other than the target within these two lines take splash damage (typically 8 squares take splash damage for a Medium creature). Any effect that alters or adjusts the splash area's shape or size, like the alchemist feat Expanded Splash, doesn't apply to star grenades.\nYou gain a +2 item bonus to attack rolls. The bomb deals 3d8 fire damage and 3 splash)[fire damage].",
      "bulk": 0.1,
      "price": {
        "gp": 250
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "bomb",
      "damage": {
        "dice": 3,
        "die": "d8",
        "type": "fire"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:star-grenade-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "PkqzU1Ap3O3IicUv",
      "slug": "star-grenade-major",
      "publicationTitle": "Pathfinder #180: The Smoking Gun",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:c9dd12404d3c25e816cd9d07b8af6d3f508056c2c0e283b4a90c937f92d3b5e4",
    "translatableHash": "sha256:738894f34f641210019eeb7edf5639ab67ceb6e62b96bceb8b02166a8ad09c60",
    "data": {
      "schemaVersion": 1,
      "name": "Star Grenade (Major)",
      "itemType": "weapon",
      "level": 17,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "bomb",
        "consumable",
        "fire",
        "splash"
      ],
      "description": "Activate 1 Strike\nThese unusual gunpowder bombs, typically marked with a symbol of a four-pointed star on their outer surface, explode outward in the shape of a cross whenever they Strike a target. When you throw a star grenade, arrange two perpendicular 25-foot line over the target, both centered on the target and moving straight through the target, not diagonally. Creatures other than the target within these two lines take splash damage (typically 8 squares take splash damage for a Medium creature). Any effect that alters or adjusts the splash area's shape or size, like the alchemist feat Expanded Splash, doesn't apply to star grenades.\nYou gain a +3 item bonus to attack rolls. The bomb deals 4d8 fire damage and 4 splash)[fire damage].",
      "bulk": 0.1,
      "price": {
        "gp": 2500
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "bomb",
      "damage": {
        "dice": 4,
        "die": "d8",
        "type": "fire"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:oracular-hag-eye",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "8qR43lT8rpmlkoKs",
      "slug": "oracular-hag-eye",
      "publicationTitle": "Pathfinder #182: Graveclaw",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/other-worn-items/hag-eye.webp"
    },
    "sourceHash": "sha256:079d5d4f4d99acd23bee779ae4065903025295268c2124c6c9e424af0e297de6",
    "translatableHash": "sha256:357ff247ff212cb20f2312e2aca7e1b9f7b169dab2e5574b83ad13454929c88c",
    "data": {
      "schemaVersion": 1,
      "name": "Oracular Hag Eye",
      "itemType": "equipment",
      "level": 4,
      "rarity": "rare",
      "traits": [
        "invested",
        "occult",
        "scrying"
      ],
      "description": "This item appears to be an ordinary semiprecious stone and is typically mounted on a brooch or ring, but the stone is, in fact, an eyeball. This illusion can be seen through with true seeing or similar magic, and anyone who interacts with the item feels its wet and sticky surface, allowing them to attempt to disbelieve the illusion (DC 19). Many hags claim a hag eye is more effective if plucked from a living, awake creature, but this is likely just a convenient excuse for sadism.\nThe hag eye produces no direct benefit for the wearer, but allows the hag who created it, or any member of her coven, can peer through the eye using the Seek action. This has no range limit, provided the hag is on the same plane.\nAny damage dealt to the eye destroys it. If this happens while a hag is looking through it, the hag is Blinded for 1 hour.\nOracular hag eyes are made with the eye of a cyclops. A hag who casts Augury with an oracular hag eye in her possession reduces the DC of the secret flat check to 2.\nCraft Requirements You must be a hag, and the raw materials must include the eye of a cyclops.",
      "bulk": 0.1,
      "price": {
        "gp": 75
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:extraction-cauldron",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "9MT4uBht72VerwfR",
      "slug": "extraction-cauldron",
      "publicationTitle": "Pathfinder #182: Graveclaw",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:84f90e711d0f7dff3551c11e4492eb1a2af773b2dba76a64e9bf50639b48198d",
    "translatableHash": "sha256:c5cabbcc976198499f9403f2ef4f2776aef601844dd78b3fcfee1acfce569c5a",
    "data": {
      "schemaVersion": 1,
      "name": "Extraction Cauldron",
      "itemType": "equipment",
      "level": 4,
      "rarity": "uncommon",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "This large magical stew pot can boil objects down to their valuable components, greatly assisting anyone who wants to harvest raw materials without visiting a settlement. The cauldron is roughly 3 feet in diameter.\nActivate 3 Interact\nRequirements The cauldron must be filled with boiling water for at least 1 hour\nEffect As you stir the cauldron, one object that has been in it for at least an hour transforms into raw materials with a value of one half the object's Price; art objects are instead transformed into raw materials with a value equal to their Price. The cauldron produces raw materials associated with the object but unaffected by immersion in boiling water. For example, a magical broom might be rendered into a block of dense, valuable wood, while a gilt-edged portrait might be transformed into a lump of gold. Objects removed from the cauldron before an hour passes can't be transformed and they might be damaged or ruined by water and heat.",
      "bulk": 6,
      "price": {
        "gp": 85
      },
      "usage": "other",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:frightful-hag-eye",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "PttRbxopuD0EpDTI",
      "slug": "frightful-hag-eye",
      "publicationTitle": "Pathfinder #182: Graveclaw",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/other-worn-items/hag-eye.webp"
    },
    "sourceHash": "sha256:d85cb91cad5389e03c9e9e02656cc911c347e5aaad7718fabfe0b0fb838dd144",
    "translatableHash": "sha256:090c07dfdee93aea8b63afde5a02c7aa429ea91223baef7f0113269f774e041b",
    "data": {
      "schemaVersion": 1,
      "name": "Frightful Hag Eye",
      "itemType": "equipment",
      "level": 4,
      "rarity": "rare",
      "traits": [
        "invested",
        "occult",
        "scrying"
      ],
      "description": "This item appears to be an ordinary semiprecious stone and is typically mounted on a brooch or ring, but the stone is, in fact, an eyeball. This illusion can be seen through with true seeing or similar magic, and anyone who interacts with the item feels its wet and sticky surface, allowing them to attempt to disbelieve the illusion (DC 19). Many hags claim a hag eye is more effective if plucked from a living, awake creature, but this is likely just a convenient excuse for sadism.\nThe hag eye produces no direct benefit for the wearer, but allows the hag who created it, or any member of her coven, can peer through the eye using the Seek action. This has no range limit, provided the hag is on the same plane.\nAny damage dealt to the eye destroys it. If this happens while a hag is looking through it, the hag is Blinded for 1 hour.\nA frightful hag eye is made with the eye of a creature whose gaze inflicts fear, such as some velstracs.\nActivate 1 (emotion, enchantment, fear, mental, visual)\nFrequency once per day\nEffect You target a creature within 30 feet that must be able to see the frightful hag eye; the target must attempt a check (will, dc:19, traits:emotion,enchantment,fear,mental,visual) save. Once a creature attempts this save, it's temporarily immune for 24 hours.\nCritical Success The target is unaffected.\nSuccess The target is Frightened 1.\nFailure The target is Frightened 2.\nCritical Failure The target is Frightened 3 and Fleeing for 1 round.\nCraft Requirements You must be a hag, and the raw materials must include the eye of a creature whose gaze causes fear.",
      "bulk": 0,
      "price": {
        "gp": 85
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wondrous-figurine-stuffed-fox",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "v935rvhKtJm7PSNF",
      "slug": "wondrous-figurine-stuffed-fox",
      "publicationTitle": "Pathfinder #182: Graveclaw",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:94e9c1a5c18f95a642a1613699dbf4b0a2a52d77d8fd408d9aed7989c577ef22",
    "translatableHash": "sha256:3be7597046d9f87748adb1ac15222de5e7ffaf92f7fe5638536146e64b1882e4",
    "data": {
      "schemaVersion": 1,
      "name": "Wondrous Figurine, Stuffed Fox",
      "itemType": "equipment",
      "level": 5,
      "rarity": "uncommon",
      "traits": [
        "magical"
      ],
      "description": "This small toy fox has tufted, fluffy ears and buttons for eyes. When activated, it transforms into a big fox with the statistics of a Riding Dog. The stuffed fox always allows you to ride it. While you do, you don't take the -2 penalty to Reflex saves while being mounted, and its jaws Strike gains Knockdown. The stuffed fox can be activated once a day and remains in its form for up to 1 hour.",
      "bulk": 0,
      "price": {
        "gp": 125
      },
      "usage": "other",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:lucky-kitchen-witch",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "esk1K85W9uqxijnb",
      "slug": "lucky-kitchen-witch",
      "publicationTitle": "Pathfinder #182: Graveclaw",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/equipment.svg"
    },
    "sourceHash": "sha256:3c23148bb1827054e1dbeefbe7ad0e39a2b5dfc1c3ed398a3fe44f65b13e932f",
    "translatableHash": "sha256:af10caa3d3c0d0e2a783a636000c609fcdb05ea9e395baafaad6c61fd488ee05",
    "data": {
      "schemaVersion": 1,
      "name": "Lucky Kitchen Witch",
      "itemType": "equipment",
      "level": 6,
      "rarity": "uncommon",
      "traits": [
        "fortune",
        "magical"
      ],
      "description": "This small doll in the shape of a witch is made from sticks and clad in a simple dress, bonnet, and wooden shoes. It sits astride a miniature straw broom. When hung in a kitchen, the witch brings good luck and protects a cook from malicious spirits. The lucky kitchen witch must hang in a kitchen for a week to give any benefit.\nWhen you have a lucky kitchen witch hung in your kitchen, you can reroll a Cooking Lore or Crafting check made during downtime to make food, Earn Income, or Craft an alchemical item in your kitchen.",
      "bulk": 0.1,
      "price": {
        "gp": 250
      },
      "usage": "other",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:gingerbread-house",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "KaMBXc0Yqn2rAUec",
      "slug": "gingerbread-house",
      "publicationTitle": "Pathfinder #182: Graveclaw",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:eb2d14a0ba552d7dc3aed3cdfaf85cbd65ee11462d2fce1750bed0237f6e0894",
    "translatableHash": "sha256:a460a55954b1cf6a4a1cdd570154e1077c353fc55661e074f43ab27eec041e5a",
    "data": {
      "schemaVersion": 1,
      "name": "Gingerbread House",
      "itemType": "equipment",
      "level": 6,
      "rarity": "uncommon",
      "traits": [
        "magical",
        "structure"
      ],
      "description": "A gingerbread house is made of magical gingerbread sweetened with honey and spices, and further decorated with candies and icing. Its roof tiles are made of sugar. It can be held safely in one hand but is very delicate; it's often stored within a wooden box of 1 Bulk.\nActivate 1 minute (command, envision, Interact)\nEffect The gingerbread house expands into a spacious and comfortable two-story cottage with a fenced yard. Although fully furnished with beds, chairs, tables, and so on, it and all its contents are made of magical gingerbread and candy. It includes a hearth that keeps the entire house warm but doesn't damage its composition. The house's cupboards are supplied with candy and cocoa sufficient to sustain 10 Medium creatures that eat roughly as much as a human for as long as the house remains activated. Creatures who spend an entire day and night resting in a gingerbread house recover Hit Points at twice the normal rate; if they successfully save against an affliction, they reduce the stage of that affliction by an additional step.\nWhen not activated the gingerbread house has Hardness 0, 2 Hit Points, and a BT of 1. Once activated, it has Hardness 0, 40 HP, and a BT of 20. Any damage done to the activated house-including eating any part of its structure-remains when the house returns to its un-activated size.\nRequirements You can attempt Cooking Lore checks instead of Crafting checks to Craft a gingerbread house.",
      "bulk": 0.1,
      "price": {
        "gp": 240
      },
      "usage": "other",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:stony-hag-eye",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "YoRL8PkjYInpmBWl",
      "slug": "stony-hag-eye",
      "publicationTitle": "Pathfinder #182: Graveclaw",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/other-worn-items/hag-eye.webp"
    },
    "sourceHash": "sha256:6e9d7d36bf693e4f6e67dcb0c56cce6f41d64e5e4bf1274490cc72c7803cc44c",
    "translatableHash": "sha256:43590b661d0f28a745cf8e72ed0b1ea154e6d8e2ffd48b2803051f06e71bde78",
    "data": {
      "schemaVersion": 1,
      "name": "Stony Hag Eye",
      "itemType": "equipment",
      "level": 6,
      "rarity": "rare",
      "traits": [
        "invested",
        "occult",
        "scrying"
      ],
      "description": "This item appears to be an ordinary semiprecious stone and is typically mounted on a brooch or ring, but the stone is, in fact, an eyeball. This illusion can be seen through with true seeing or similar magic, and anyone who interacts with the item feels its wet and sticky surface, allowing them to attempt to disbelieve the illusion (DC 19). Many hags claim a hag eye is more effective if plucked from a living, awake creature, but this is likely just a convenient excuse for sadism.\nThe hag eye produces no direct benefit for the wearer, but allows the hag who created it, or any member of her coven, can peer through the eye using the Seek action. This has no range limit, provided the hag is on the same plane.\nAny damage dealt to the eye destroys it. If this happens while a hag is looking through it, the hag is Blinded for 1 hour.\nA stony hag eye is fashioned from the eye of a creature, such a basilisk or medusa, with a petrifying gaze.\nActivate 2 (incapacitation, transmutation, visual)\nFrequency once per round\nEffect You target a creature within 30 feet that can see the stony hag eye. The target must attempt a check (fortitude, dc:22, traits:incapacitation,transmutation,visual) save. On a failure, it's Slowed 1 for 1 minute; on a critical failure, if the creature is already slowed, it's permanently petrified. Touching the stony hag eye to the petrified creature (a single action with the manipulate trait) removes the petrified condition.\nCraft Requirements You must be a hag, and the raw materials must include the eye of a creature whose gaze turns creatures to stone.",
      "bulk": 0,
      "price": {
        "gp": 250
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:smoky-hag-eye",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "0OzL3DdtTnZE91MU",
      "slug": "smoky-hag-eye",
      "publicationTitle": "Pathfinder #182: Graveclaw",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/other-worn-items/hag-eye.webp"
    },
    "sourceHash": "sha256:a2e1d1e740b6b1d7419e211452cbfffc7b26385f3c70a576f51ca24780a40b9f",
    "translatableHash": "sha256:b9d4620f11c069fecae89fde265f7f16aa1f8f1481789e072484487036b048d9",
    "data": {
      "schemaVersion": 1,
      "name": "Smoky Hag Eye",
      "itemType": "equipment",
      "level": 8,
      "rarity": "rare",
      "traits": [
        "invested",
        "occult",
        "scrying"
      ],
      "description": "This item appears to be an ordinary semiprecious stone and is typically mounted on a brooch or ring, but the stone is, in fact, an eyeball. This illusion can be seen through with true seeing or similar magic, and anyone who interacts with the item feels its wet and sticky surface, allowing them to attempt to disbelieve the illusion (DC 19). Many hags claim a hag eye is more effective if plucked from a living, awake creature, but this is likely just a convenient excuse for sadism.\nThe hag eye produces no direct benefit for the wearer, but allows the hag who created it, or any member of her coven, can peer through the eye using the Seek action. This has no range limit, provided the hag is on the same plane.\nAny damage dealt to the eye destroys it. If this happens while a hag is looking through it, the hag is Blinded for 1 hour.\nA smoky hag eye is named after the black vapor that constantly emanates from it, like the smoke that continually seeps from a bodak's eye.\nActivate 1 (death, necromancy, visual) You target a creature within 30 feet that must be able to see the smoky hag eye. The target must attempt a check (fortitude, dc:24, traits:death,necromancy,visual) save. Once a creature attempts this save, it's temporarily immune for 24 hours.\nCritical Success The creature is unaffected.\nSuccess The creature is Drained 1.\nFailure The creature is Doomed 1 and Drained 2.\nCritical Failure The creature is doomed 1 and Drained 3.\nCraft Requirements You must be a hag, and the raw materials must include the eye of a bodak.",
      "bulk": 0,
      "price": {
        "gp": 450
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:hunters-hagbook",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "lkIzsqI7PcymcTEQ",
      "slug": "hunters-hagbook",
      "publicationTitle": "Pathfinder #182: Graveclaw",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:f6de3661d0606ab73e5da6c0ba3576a5f835d08a16b26f8a2fab6e5645b1146a",
    "translatableHash": "sha256:fbca0ca7b416745e279c6d18673c490c6fb1d362b7386f1c500a008078b42345",
    "data": {
      "schemaVersion": 1,
      "name": "Hunter's Hagbook",
      "itemType": "equipment",
      "level": 9,
      "rarity": "unique",
      "traits": [
        "fortune",
        "grimoire",
        "magical"
      ],
      "description": "This magical book has its official title, The Grimoire of Lady Jayne Cutter, written on an inside page in illuminated letters. Among occultists and other scholars, it's known by its colloquial name: the Hunter's Hagbook. The book is a grimoire created and used by a legendary Varisian monster hunter. The Hunter's Hagbook can hold 100 spells but the spells below are always present in the book, can't be removed from it, and count against the total.\nWhen you attempt a saving throw against a coven spell, you can immediately end the duration of a spell affecting you that you prepared from this book. If you do, the result of your saving throw is one degree of success better than your roll (for example, a critical failure becomes a failure).\nCaster's Imposition\nBlind Eye\nBlood Duplicate\nHag's Fruit\nRitual Obstruction\nWeb of Influence",
      "bulk": 0.1,
      "price": {
        "gp": 700
      },
      "usage": "other",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:potion-of-annulment-lesser",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "a46f60lt7NEUvNEy",
      "slug": "potion-of-annulment-lesser",
      "publicationTitle": "Pathfinder #182: Graveclaw",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/consumable.svg"
    },
    "sourceHash": "sha256:43a0b5bf3c2092d3a29168efeeed9c48eafd90d8665b873c9865657f29c0c6a1",
    "translatableHash": "sha256:8b364ec5cb7af3c7422c60dfcf69e63d7a1919c7a209465baeff90c4b4e77110",
    "data": {
      "schemaVersion": 1,
      "name": "Potion of Annulment (Lesser)",
      "itemType": "consumable",
      "level": 10,
      "rarity": "rare",
      "traits": [
        "consumable",
        "magical",
        "potion"
      ],
      "description": "Activate 1 Interact\nA potion of annulment magically breaks a supernatural deal you have made, such as an infernal contract, a sea hag's bargain, or the Geas ritual. Upon drinking the potion, attempt a counteract check against the highest- level such effect, with a counteract modifier of 1d20+17. If the check is successful, the deal ends for all parties. You're not penalized for breaking the contract, but you also enjoy none of its benefits or rewards. Individuals with whom you shared the contract are aware it has been annulled and may seek vengeance. This potion can't rewind time or negate effects that have already occurred; for example, if you have killed someone to fulfill an infernal contract, drinking this potion and canceling the contract doesn't bring the dead individual back to life.",
      "bulk": 0.1,
      "price": {
        "gp": 200
      },
      "usage": "held-in-one-hand",
      "category": "potion",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:ghastly-cauldron",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "CmGfVmuUH1VGISPr",
      "slug": "ghastly-cauldron",
      "publicationTitle": "Pathfinder #182: Graveclaw",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:14ad5765731b7a18da21bd1245febc96fbb79e7188d3beb2df2283eb93207ee4",
    "translatableHash": "sha256:446560799a26acc4aa23a1c3e92a92d9a0ce62bf4680b7bc9c5a5778e314d836",
    "data": {
      "schemaVersion": 1,
      "name": "Ghastly Cauldron",
      "itemType": "equipment",
      "level": 10,
      "rarity": "uncommon",
      "traits": [
        "invested",
        "magical",
        "void"
      ],
      "description": "This black cooking pot can produce a feast fit for undead.\nActivate 3 Interact\nFrequency once per day\nRequirements The cauldron must be filled with water, herbs, bones, and raw meat, and kept at a boil for 1 hour\nEffect As you stir the cauldron, its contents transform into 10 meals suitable for undead consumption. Each meal must be ladled from the cauldron individually as a 3-action activity and must be eaten within 1 hour of removal. An undead creature that consumes a meal from the cauldron regains 5d8 healing and gains the benefits of 4th-rank Restoration that you choose; living creatures who consume a meal from the cauldron take 5d8 void damage (check (fortitude, dc:27, basic)) instead. Any meals remaining in the cauldron 24 hours after activation become inedible slurry.",
      "bulk": 5,
      "price": {
        "gp": 900
      },
      "usage": "other",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:potion-of-annulment-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "4B8jRW7jGybSlovV",
      "slug": "potion-of-annulment-moderate",
      "publicationTitle": "Pathfinder #182: Graveclaw",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/consumable.svg"
    },
    "sourceHash": "sha256:74d3e35469518acc84b14a429d6404225c95b6fd5c3ce640a6da9e659d502639",
    "translatableHash": "sha256:36a3364e9575e17d5a8336dd8bd3dcafebd8e46aaadc0ad9a49893355e244408",
    "data": {
      "schemaVersion": 1,
      "name": "Potion of Annulment (Moderate)",
      "itemType": "consumable",
      "level": 15,
      "rarity": "rare",
      "traits": [
        "consumable",
        "magical",
        "potion"
      ],
      "description": "Activate 1 Interact\nA potion of annulment magically breaks a supernatural deal you have made, such as an infernal contract, a sea hag's bargain, or the Geas ritual. Upon drinking the potion, attempt a counteract check against the highest- level such effect, with a counteract modifier of 1d20+24. If the check is successful, the deal ends for all parties. You're not penalized for breaking the contract, but you also enjoy none of its benefits or rewards. Individuals with whom you shared the contract are aware it has been annulled and may seek vengeance. This potion can't rewind time or negate effects that have already occurred; for example, if you have killed someone to fulfill an infernal contract, drinking this potion and canceling the contract doesn't bring the dead individual back to life.",
      "bulk": 0.1,
      "price": {
        "gp": 1300
      },
      "usage": "held-in-one-hand",
      "category": "potion",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:potion-of-annulment-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "J5LsHDGEv4CVN7vr",
      "slug": "potion-of-annulment-greater",
      "publicationTitle": "Pathfinder #182: Graveclaw",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/consumable.svg"
    },
    "sourceHash": "sha256:b254723e5c0f5e0a5b54550bd1a3a6c49f14a0a51e29939e17ca648a86b48c6f",
    "translatableHash": "sha256:89ff1f7f621f0cd951fe6893d3633802a4c4efd78502befb03d8f0e2b4579552",
    "data": {
      "schemaVersion": 1,
      "name": "Potion of Annulment (Greater)",
      "itemType": "consumable",
      "level": 20,
      "rarity": "rare",
      "traits": [
        "consumable",
        "magical",
        "potion"
      ],
      "description": "Activate 1 Interact\nA potion of annulment magically breaks a supernatural deal you have made, such as an infernal contract, a sea hag's bargain, or the Geas ritual. Upon drinking the potion, attempt a counteract check against the highest- level such effect, with a counteract modifier of 1d20+30. If the check is successful, the deal ends for all parties. You're not penalized for breaking the contract, but you also enjoy none of its benefits or rewards. Individuals with whom you shared the contract are aware it has been annulled and may seek vengeance. This potion can't rewind time or negate effects that have already occurred; for example, if you have killed someone to fulfill an infernal contract, drinking this potion and canceling the contract doesn't bring the dead individual back to life.",
      "bulk": 0.1,
      "price": {
        "gp": 13000
      },
      "usage": "held-in-one-hand",
      "category": "potion",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:sisterstone-chunk",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "GGsECHQJ3RrnWXhV",
      "slug": "sisterstone-chunk",
      "publicationTitle": "Pathfinder #183: Field of Maidens",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/materials/orichalcum-chunk.webp"
    },
    "sourceHash": "sha256:082b2509276f357e431abfe594457c3d18244320748b0303191d761903c689f7",
    "translatableHash": "sha256:67751ebbb0a428c7d6b205a66d9407a9781db6d014b35bd1cdf659ab9e07e8fe",
    "data": {
      "schemaVersion": 1,
      "name": "Sisterstone Chunk",
      "itemType": "equipment",
      "level": 3,
      "rarity": "rare",
      "traits": [
        "precious"
      ],
      "description": "Sisterstone is a term used for two closely related ores infused by the spiritual runoff in the Field of Maidens, dusk sisterstone and scarlet sisterstone. They have the same physical properties except for color-dusk sisterstone is a pale orange while scarlet sisterstone is orange-red. When near an object made of the other type of sisterstone, they both begin exuding spiritual energy that repels undead.\nWhen an object made of dusk sisterstone is within 15 feet of an object made of scarlet sisterstone of the same grade, they create a reciprocal field. Any undead creature adjacent to one of the objects when the field is formed, or who moves adjacent to one while the field is active, becomes Enfeebled 1 unless it succeeds at a check (fortitude, dc:15) save. This lasts until the undead creature is no longer adjacent to either of the items or until the field's removed (typically by the objects ceasing to be within 15 feet of one another). The DC increases to 22 if both items are standard grade or better, and to 33 if they're both high grade. Unworked chunks and ingots don't create a reciprocal field. A single object can't be made of both types of sisterstone.",
      "bulk": 0.1,
      "price": {
        "gp": 20
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:sisterstone-ingot",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "nI4JorlalCpzsJ07",
      "slug": "sisterstone-ingot",
      "publicationTitle": "Pathfinder #183: Field of Maidens",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/materials/orichalcum-ingot.webp"
    },
    "sourceHash": "sha256:2901fca3a1b80e765bdabae70dd83aaf73411dd454c981a39e297d3d323933ff",
    "translatableHash": "sha256:5eb19f3cca35211d059046cf4ee0afd2c71230c234ae5c729a45817a7a453a65",
    "data": {
      "schemaVersion": 1,
      "name": "Sisterstone Ingot",
      "itemType": "equipment",
      "level": 3,
      "rarity": "rare",
      "traits": [
        "precious"
      ],
      "description": "Sisterstone is a term used for two closely related ores infused by the spiritual runoff in the Field of Maidens, dusk sisterstone and scarlet sisterstone. They have the same physical properties except for color-dusk sisterstone is a pale orange while scarlet sisterstone is orange-red. When near an object made of the other type of sisterstone, they both begin exuding spiritual energy that repels undead.\nWhen an object made of dusk sisterstone is within 15 feet of an object made of scarlet sisterstone of the same grade, they create a reciprocal field. Any undead creature adjacent to one of the objects when the field is formed, or who moves adjacent to one while the field is active, becomes Enfeebled 1 unless it succeeds at a check (fortitude, dc:15) save. This lasts until the undead creature is no longer adjacent to either of the items or until the field's removed (typically by the objects ceasing to be within 15 feet of one another). The DC increases to 22 if both items are standard grade or better, and to 33 if they're both high grade. Unworked chunks and ingots don't create a reciprocal field. A single object can't be made of both types of sisterstone.",
      "bulk": 1,
      "price": {
        "gp": 200
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:umbral-wings",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "NiO3YZ6e9RmajCS7",
      "slug": "umbral-wings",
      "publicationTitle": "Pathfinder #183: Field of Maidens",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/other-worn-items/cloak-of-feline-rest.webp"
    },
    "sourceHash": "sha256:e0477cbaea0ab78365f19f179fc3fb9d81d8210fc9f0d9cfb53d2bc27988e7ab",
    "translatableHash": "sha256:fed2c826a26b796d034a5f9cdf865aac997c7a6766f753da7f2ba7eeb6ff069b",
    "data": {
      "schemaVersion": 1,
      "name": "Umbral Wings",
      "itemType": "equipment",
      "level": 8,
      "rarity": "uncommon",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "This hooded cloak is soft and surprisingly durable. Its cloth is a purple so deep as to be almost black, woven with dark blue and purple shapes suggesting wings of nocturnal creatures. While wearing the cloak, you gain low-light vision and a +1 item bonus to Seek creatures.\nActivate 1 envision\nFrequency once per hour\nEffect You gain a fly Speed equal to your Speed until the end of your next turn. If you aren't standing on solid ground when the effect ends, you fall.",
      "bulk": 1,
      "price": {
        "gp": 500
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:skeletal-claw",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "CtUPO3qFZ2Y6lozq",
      "slug": "skeletal-claw",
      "publicationTitle": "Pathfinder #183: Field of Maidens",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/tekko-kagi.webp"
    },
    "sourceHash": "sha256:394b6b05739b379467c17f2993989e1f42f109f4f7681096ff541d5849235911",
    "translatableHash": "sha256:33d9e505e4c52d1bfbf71f7f28712b190c3275ad5d1a0fa3bdcce784d0d41bb6",
    "data": {
      "schemaVersion": 1,
      "name": "Skeletal Claw",
      "itemType": "weapon",
      "level": 9,
      "rarity": "uncommon",
      "traits": [
        "agile",
        "disarm",
        "finesse",
        "free-hand",
        "magical",
        "monk",
        "parry"
      ],
      "description": "This +1 striking tekko-kagi resembles a clawed skeletal hand that fits over your own. Embedded in the back of the bony hand is an onyx gemstone held in place by fine silver chains. When the claws tear into a living creature, the gem pulses with void energy. The skeletal claw deals an additional 1d4 persistent void damage to living creatures 1d10 persistent void damage on a critical hit).\nActivate f command\nFrequency once per day\nTrigger You cast a spell to summon an undead creature that has a skeletal structure, such as with Summon Undead\nEffect The triggering undead creature has 10 temporary Hit Points that last for 1 minute. As long as any of these temporary Hit Points remain, the skeletal claw doesn't deal additional void damage.",
      "bulk": 0.1,
      "price": {
        "gp": 1250
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "brawling",
      "damage": {
        "dice": 1,
        "die": "d4",
        "type": "slashing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:gloaming-arc",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "7haFJ3s6G6K1TQFj",
      "slug": "gloaming-arc",
      "publicationTitle": "Pathfinder #183: Field of Maidens",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/scimitar.webp"
    },
    "sourceHash": "sha256:975f7b58592c604bead782fe7e8a15f53b3d9f2047b891231d7b52c2fce820c0",
    "translatableHash": "sha256:4beb812acbd2b0f67e8a60b6782cf49399e9d6a0ce6b49a7873612e9acc8a851",
    "data": {
      "schemaVersion": 1,
      "name": "Gloaming Arc",
      "itemType": "weapon",
      "level": 11,
      "rarity": "uncommon",
      "traits": [
        "forceful",
        "magical",
        "shadow",
        "sweep"
      ],
      "description": "This black +2 striking scimitar reflects light only along its edge, like a thin crescent moon. It grants a +1 item bonus to Stealth while you're holding it, increasing to a +2 item bonus if it has a +3 weapon potency rune.\nActivate 3 envision, Interact\nFrequency once per day\nEffect Attempt a melee Strike with the gloaming arc. On a hit, you slice away the target's shadow from its body and it must attempt a check (fortitude, dc:30) save.\nCritical Success The target is unaffected.\nSuccess The target is Enfeebled 1 for 1 round.\nFailure The target is Enfeebled 2 for 1 minute and Drained 1. The target doesn't cast a shadow until it is no longer drained.\nCritical Failure As failure, but Drained 2.",
      "bulk": 1,
      "price": {
        "gp": 1250
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "sword",
      "damage": {
        "dice": 1,
        "die": "d6",
        "type": "slashing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:ebon-marionette",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "UQpbEAeOUkascA4L",
      "slug": "ebon-marionette",
      "publicationTitle": "Pathfinder #183: Field of Maidens",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:7de1f746a9e31576cb514ac39e07933183f16c1c33cc3fad0dab0e254de576d5",
    "translatableHash": "sha256:f985b6b9f1ca6c58646e80d779eab55430fa880c0d224b01b0e5e96d5d33cf9b",
    "data": {
      "schemaVersion": 1,
      "name": "Ebon Marionette",
      "itemType": "equipment",
      "level": 11,
      "rarity": "uncommon",
      "traits": [
        "magical",
        "mental"
      ],
      "description": "This puppet is carved out of ebony wood and affixed to violet strings for easy manipulation.\nActivate 2 envision, Interact\nFrequency once per day\nEffect When you Activate the ebon marionette while envisioning a specific creature within 40 feet, you can force the creature to mimic a single action you make with the puppet. You might command the creature to throw down its weapon, run away, or attack an ally. Whenever you issue a command, the creature must succeed at a check (will, dc:28) save or be forced to follow the command as its first action on its next turn. If you command it to do something that takes more than 1 action, it accomplishes only as much as it can with 1 action. You can Sustain the Activation for up to 1 minute; each time you do, you give the target another command by manipulating the marionette, and the target makes another Will save. If the target succeeds at its save, the effect ends. Sustaining the Activation has no effect if the creature already has a command, so you can't dictate more than one of its actions per turn.",
      "bulk": 1,
      "price": {
        "gp": 1250
      },
      "usage": "held-in-two-hands",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:shadow-manse",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "ZEf04zjwyiq1pLPj",
      "slug": "shadow-manse",
      "publicationTitle": "Pathfinder #183: Field of Maidens",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:3daab956e5b88e0354e9a3095e6cc5f7bec85904bfbe7ab1a92dcee84d3276d5",
    "translatableHash": "sha256:9ca1a85d0a53f5640ccf505d91280fea597a52cfbb9e75f64aafaa886764bc55",
    "data": {
      "schemaVersion": 1,
      "name": "Shadow Manse",
      "itemType": "equipment",
      "level": 11,
      "rarity": "rare",
      "traits": [
        "magical",
        "structure"
      ],
      "description": "This miniature dollhouse is made of dark wood with steep eaves and wide windows. Close inspection through the open windows reveals the inside to be elaborately decorated with fine furniture and ebony accoutrements.\nActivate 1 minute (command, envision, Interact)\nEffect You cause the dollhouse to grow into a mansion, 60 feet across and 20 feet high, with a dozen rooms. The mansion pushes aside rather than traps creatures in the area when it is created. The door appears in front of you; it bears no lock and provides easy entrance to anyone. The mansion's interior is well-appointed and dimly lit via wall sconces and fireplaces that emit pale, heatless flames. Each day at dusk, the mansion's dining room produces enough fine food and water to sustain the creatures in the manor at that time. Except for this nourishment, everything inside the manor is nearly impossible to break; even the flimsiest chairs and thinnest draperies have Hardness 20. The material inside the mansion vanishes if removed, but is replaced with the next activation.\nAlthough the mansion is easy for anyone to enter, only you and other creatures you designate when you activate the manor can leave it. Others find themselves entering some other part of the mansion when they leave through a door or window, rather than exiting. A creature that succeeds at a check (occultism, dc:30) check when attempting to exit the mansion can leave it if they choose, as can anyone who Forces Open an exit with a successful check (athletics, dc:30) check; any opening they make in the mansion closes behind them.\nYou can return the shadow manse to its dollhouse form by twisting the front door handle and uttering a command (as a single action). Once deactivated, it can't be reactivated for 8 hours.",
      "bulk": 0,
      "price": {
        "gp": 1550
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wraithweave-patch-type-i",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "NjyKPRuq9siQe7gu",
      "slug": "wraithweave-patch-type-i",
      "publicationTitle": "Pathfinder #184: The Ghouls Hunger",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/treasure/art-objects/lesser-art-object/illuminated-manuscript.webp"
    },
    "sourceHash": "sha256:cf144e0d01aa6c42e90fe05a9266f67c89df9c19c25823cb6149f347d71f0cde",
    "translatableHash": "sha256:df03524f2c4ed026b580afd6cb4fbb85bbc12a3279adcb0b4711c0e33f3f688b",
    "data": {
      "schemaVersion": 1,
      "name": "Wraithweave Patch (Type I)",
      "itemType": "equipment",
      "level": 9,
      "rarity": "rare",
      "traits": [
        "magical"
      ],
      "description": "A wraithweave patch appears to be a square sheet of gray cloth that sparkles softly when observed in dim light. An incorporeal creature can touch, hold, and carry wraithweave patches (unlike most physical objects).\nYou can Interact with a wraithweave patch to securely wrap up an object or container that does not exceed light Bulk. Once an object is wrapped up, its Bulk becomes negligible, and the wraithweave patch appears and behaves as if it's nothing more than a tightly folded but empty piece of cloth. You must Interact with the wraithweave patch again to unfold it, at which point the wrapped object returns to its normal Bulk and can itself be interacted with again.\nCreatures wrapped in a wraithweave patch are not affected and treat the patch as normal cloth. A wrapped item provides no benefits until it is unwrapped, but can be detected by magic normally. If the wraithweave patch is destroyed, any object it contains reverts to normal and is exposed to the damage or effect that destroyed the wraithweave patch.\nActivate 2 command, Interact\nRequirements the wraithweave patch has been wrapped around an object and you are incorporeal\nEffect You cause the wraithweave patch and the object it contains to become incorporeal. This effect lasts as long as you Sustain the activation. The wraithweave patch can only be touched, held, and carried by an incorporeal creature, and returns to solid form if not carried by such a creature-if the wraithweave patch is in a solid object at this time, it tears apart and the item inside is either lost forever or simply lodged within the solid object, at the GM's discretion.",
      "bulk": 0.1,
      "price": {
        "gp": 600
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wraithweave-patch-type-ii",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "1oOalZRwSxcHewaJ",
      "slug": "wraithweave-patch-type-ii",
      "publicationTitle": "Pathfinder #184: The Ghouls Hunger",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/treasure/art-objects/lesser-art-object/illuminated-manuscript.webp"
    },
    "sourceHash": "sha256:b5792324a4d99fdc908a5489d8202d25f3c0ad839a3aeab0f0eb4d51dde0fc30",
    "translatableHash": "sha256:2ad2d6ddec045567132ef46fd68563b2bde1b0897499865228cbca6018f16cd2",
    "data": {
      "schemaVersion": 1,
      "name": "Wraithweave Patch (Type II)",
      "itemType": "equipment",
      "level": 12,
      "rarity": "rare",
      "traits": [
        "magical"
      ],
      "description": "A wraithweave patch appears to be a square sheet of gray cloth that sparkles softly when observed in dim light. An incorporeal creature can touch, hold, and carry wraithweave patches (unlike most physical objects).\nYou can Interact with a wraithweave patch to securely wrap up an object or container that does not exceed 1 Bulk. Once an object is wrapped up, its Bulk becomes negligible, and the wraithweave patch appears and behaves as if it's nothing more than a tightly folded but empty piece of cloth. You must Interact with the wraithweave patch again to unfold it, at which point the wrapped object returns to its normal Bulk and can itself be interacted with again.\nCreatures wrapped in a wraithweave patch are not affected and treat the patch as normal cloth. A wrapped item provides no benefits until it is unwrapped, but can be detected by magic normally. If the wraithweave patch is destroyed, any object it contains reverts to normal and is exposed to the damage or effect that destroyed the wraithweave patch.\nActivate 2 command, Interact\nRequirements the wraithweave patch has been wrapped around an object and you are incorporeal\nEffect You cause the wraithweave patch and the object it contains to become incorporeal. This effect lasts as long as you Sustain the activation. The wraithweave patch can only be touched, held, and carried by an incorporeal creature, and returns to solid form if not carried by such a creature-if the wraithweave patch is in a solid object at this time, it tears apart and the item inside is either lost forever or simply lodged within the solid object, at the GM's discretion.",
      "bulk": 0.1,
      "price": {
        "gp": 1750
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:shadow-ash",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "zAlDcTlvCd3MxXmI",
      "slug": "shadow-ash",
      "publicationTitle": "Pathfinder #184: The Ghouls Hunger",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/other-consumables/black-powder-dose.webp"
    },
    "sourceHash": "sha256:7db2d0ef5ec468bc577673265b2443d52e771087615eec3ef5f10016e2f66eda",
    "translatableHash": "sha256:d75e2502e0a70674c1f87dc6022aefba8dda7d306616f449d71618440f77c198",
    "data": {
      "schemaVersion": 1,
      "name": "Shadow Ash",
      "itemType": "consumable",
      "level": 12,
      "rarity": "rare",
      "traits": [
        "catalyst",
        "cold",
        "consumable",
        "magical"
      ],
      "description": "Activate Cast a Spell or successfully perform a ritual as the primary or secondary caster\nThis small pile of ash glows with strange blue embers that coat whatever they touch with a thin layer of frost laced with veins of necrotic ichor. Adding this catalyst to an animate dead spell or create undead ritual wreathes the resulting undead creature in a shroud of frost that pulses with void energy. During a combat encounter, the first opponent to deal damage to the undead creature with a melee Strike takes 3d6 cold damage and becomes Drained 1 as the shroud of ice and rot shatters from the blow. If the undead creature survives the encounter, the shroud of frost reforms the next day. When an undead creature animated or created with this catalyst dies, it can return to animation with half of its Hit Points within 1d4 of its death (unless it was killed in a manner that destroys it remains completely such as a Disintegrate spell) with a check (flat, dc:11). If the undead creature rises again, a desperate, garbled screech resonates from within its corpse.",
      "bulk": 0.1,
      "price": {
        "gp": 750
      },
      "usage": "held-in-one-hand",
      "category": "catalyst",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wraithweave-patch-type-iii",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "tFgzn2ATau3UJ8Fd",
      "slug": "wraithweave-patch-type-iii",
      "publicationTitle": "Pathfinder #184: The Ghouls Hunger",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/treasure/art-objects/lesser-art-object/illuminated-manuscript.webp"
    },
    "sourceHash": "sha256:a2d1a957ccdcdf2c1409dd6f841c6fe5f13a4eafc11653c7d2c739fe4be5d8fa",
    "translatableHash": "sha256:967ef3607d6848764e088ef6edd029f0b3f5880fca8e9798ec6a64042340df75",
    "data": {
      "schemaVersion": 1,
      "name": "Wraithweave Patch (Type III)",
      "itemType": "equipment",
      "level": 15,
      "rarity": "rare",
      "traits": [
        "magical"
      ],
      "description": "A wraithweave patch appears to be a square sheet of gray cloth that sparkles softly when observed in dim light. An incorporeal creature can touch, hold, and carry wraithweave patches (unlike most physical objects).\nYou can Interact with a wraithweave patch to securely wrap up an object or container that does not exceed 2 Bulk. Once an object is wrapped up, its Bulk becomes negligible, and the wraithweave patch appears and behaves as if it's nothing more than a tightly folded but empty piece of cloth. You must Interact with the wraithweave patch again to unfold it, at which point the wrapped object returns to its normal Bulk and can itself be interacted with again.\nCreatures wrapped in a wraithweave patch are not affected and treat the patch as normal cloth. A wrapped item provides no benefits until it is unwrapped, but can be detected by magic normally. If the wraithweave patch is destroyed, any object it contains reverts to normal and is exposed to the damage or effect that destroyed the wraithweave patch.\nActivate 2 command, Interact\nRequirements the wraithweave patch has been wrapped around an object and you are incorporeal\nEffect You cause the wraithweave patch and the object it contains to become incorporeal. This effect lasts as long as you Sustain the activation. The wraithweave patch can only be touched, held, and carried by an incorporeal creature, and returns to solid form if not carried by such a creature-if the wraithweave patch is in a solid object at this time, it tears apart and the item inside is either lost forever or simply lodged within the solid object, at the GM's discretion.",
      "bulk": 0.1,
      "price": {
        "gp": 6000
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:spectral-opera-glasses",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "SsXS70dp2UnFCtdw",
      "slug": "spectral-opera-glasses",
      "publicationTitle": "Pathfinder #185: A Taste of Ashes",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/other-worn-items/spectacles-of-understanding.webp"
    },
    "sourceHash": "sha256:506af677a5bd3b9cb3a6d7f11d3bcf0f57702123806e80aa4bf5daf9854c9c4f",
    "translatableHash": "sha256:a1541bc9e09dff7dc4e42f3116c0e02bc0b7169298edc29018b4f99c1a263759",
    "data": {
      "schemaVersion": 1,
      "name": "Spectral Opera Glasses",
      "itemType": "equipment",
      "level": 11,
      "rarity": "uncommon",
      "traits": [
        "magical"
      ],
      "description": "These bulky opera glasses are attached to a rod for ease of use. When held up to the eyes, which requires a free hand, you can see up to four times further than normal, and the glasses provide you a +2 item bonus to Perception checks.\nActivate 1 Interact, envision\nFrequency once per day\nEffect For 1 hour, anyone who looks through the glasses can see Invisible creatures and objects, and sees creatures with the spirit trait as solid and substantial (rather than ghostly).",
      "bulk": 0.1,
      "price": {
        "gp": 1400
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:splendid-floodlight",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "0VtYhRt2BneBzh32",
      "slug": "splendid-floodlight",
      "publicationTitle": "Pathfinder #185: A Taste of Ashes",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/treasure/art-objects/greater-art-object/platinum-framed-monocle.webp"
    },
    "sourceHash": "sha256:8aee59c06ca22454c5bea76e6d4a824471080bf0d519b100b06e0bc504ba0eef",
    "translatableHash": "sha256:125ed6f93fff237c7c4c88552daae94f4fa79ee81cc1bbce9325eb70d4e77287",
    "data": {
      "schemaVersion": 1,
      "name": "Splendid Floodlight",
      "itemType": "equipment",
      "level": 12,
      "rarity": "uncommon",
      "traits": [
        "illusion",
        "magical"
      ],
      "description": "This drum-shaped metal floodlight has a metal handle on each side and a housing at its base to be slotted into a stand or pedestal. A splendid floodlight has a primary function as well as several secondary functions available by rotating through a series of translucent sheets called gels. A splendid floodlight comes with the four gels described below, but other gels exist with different abilities.\nActivate 1 Interact\nFrequency once per hour\nRequirements The splendid floodlight's light is off\nEffect You flip a switch and the splendid floodlight emits bright magical light in a 120-foot cone that hangs in the air and remains in place even if you move the floodlight. If the cone passes through an area of magical darkness or targets a creature affected by magical darkness, the splendid floodlight attempts to counteract the darkness. Creatures in the cone who are Frightened reduce the value of their frightened condition by 1 at the beginning of each turn they start in the area of the cone. The light remains in place until you Interact to flip the switch again to extinguish the floodlight. If you haven't done so after an hour, the switch flips on its own and the floodlight turns off.\nActivate 2 Interact\nRequirements The splendid floodlight's light is on\nEffect You rotate one of the following gels into position in the floodlight or rotate a gel out. You can do this even if the splendid floodlight has been moved from its position when the light was created. You can have up to two gels in place at once; if you rotate in a third, another of your choice rotates out.\nRed Gel The light lends an air of gravitas to all creatures illuminated by it. Creatures in the light gain a +2 item bonus to Charisma-based skill checks.\nYellow Gel Invisible creatures and objects are visible while in the light, and creatures with the spirit trait appear substantial rather than ghostly.\nGreen Gel All creatures illuminated by the light appear to be wearing exceptionally stylish clothing with elegantly coiffed hair styles. Blue Gel Undead creatures in the light appear as they did when alive, and living creatures in the light appear decayed, like an undead creature.",
      "bulk": 3,
      "price": {
        "gp": 1600
      },
      "usage": "held-in-two-hands",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:curtain-call-cloak",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "V8cYi1Gawe71d0rE",
      "slug": "curtain-call-cloak",
      "publicationTitle": "Pathfinder #185: A Taste of Ashes",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:a91dbb1f97e89ba2797030ec8422af4bee465033c94959ef4bbeeab3cf52bf9f",
    "translatableHash": "sha256:dd7b6ab3f6f11e1a535c4a27438784d17c54b9b8e4052085bb91c64841631d34",
    "data": {
      "schemaVersion": 1,
      "name": "Curtain Call Cloak",
      "itemType": "equipment",
      "level": 12,
      "rarity": "uncommon",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "This blue velvet cloak is cut from the remains of a curtain from a destroyed theater. When worn, you gain a +2 item bonus to Performance checks while acting, orating, or singing, as the cloak makes minor motions to accentuate your performance.\nActivate 2 Interact\nFrequency once per day\nEffect You take a bow, spread your arms, and the cloak casts 4th-rank Darkness centered on a corner of your space. This darkness doesn't impede your vision. While the darkness persists, it emits noise like the applauding of a moderately sized crowd.",
      "bulk": 0.1,
      "price": {
        "gp": 1900
      },
      "usage": "worncloak",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:aeon-stone-rainbow-prism",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "2jUWEHkn0XmNuGCh",
      "slug": "aeon-stone-rainbow-prism",
      "publicationTitle": "Pathfinder #185: A Taste of Ashes",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/other-worn-items/aeon-stone-western-star.webp"
    },
    "sourceHash": "sha256:c0029cf2d66c9f7152bfbc6a522c8f7ef84fa4383fd15a162a7823c5043772e1",
    "translatableHash": "sha256:e296bbdd60b0bcbb8d4d3c2db9f3cf758c123fa79c710e93f95fdc5ab1358c69",
    "data": {
      "schemaVersion": 1,
      "name": "Aeon Stone (Rainbow Prism)",
      "itemType": "equipment",
      "level": 13,
      "rarity": "rare",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "While this aeon stone orbits your head, the flat part of its base tumbles to briefly face creatures you can see within 30 feet, as though the stone is watching them. You can activate this stone in two ways.\nActivate 2 envision\nEffect The aeon stone captures the image of a creature of your size that you can see within 30 feet. It can have up to 3 images captured at a time; if you capture a fourth, you decide which image it replaces.\nActivate 2 envision\nFrequency three times per day\nRequirements The prism is storing at least one image of a creature of your size\nEffect The aeon stone casts a 3rd-rank Illusory Disguise on you, which must be of one of the creatures it has currently captured. While you are under the effects of this spell, the aeon stone is Invisible.\nThe resonant power allows the stone to capture up to 5 images. If removed from the wayfinder, you must decide which images to lose.",
      "bulk": 0,
      "price": {
        "gp": 2200
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:aeon-stone-mottled-ellipsoid",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "7cOczTK4yQkuK5J9",
      "slug": "aeon-stone-mottled-ellipsoid",
      "publicationTitle": "Pathfinder #185: A Taste of Ashes",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/other-worn-items/aeon-stone-agate-ellipsoid.webp"
    },
    "sourceHash": "sha256:c6ef2474aa8ea0b2d54f694d09831ba3874757389d6fd3034aa1bf1889817e53",
    "translatableHash": "sha256:c9e25d3d593069655f7814d1e894c38a398254d3b6a939a1eeef6e1977f18cb0",
    "data": {
      "schemaVersion": 1,
      "name": "Aeon Stone (Mottled Ellipsoid)",
      "itemType": "equipment",
      "level": 15,
      "rarity": "rare",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "This aeon stone alters your life force. You gain void healing, which means you are damaged by vitality energy and not healed by vitality healing effects. You don't take void damage, and you are healed by void effects that heal undead.\nThe resonant power allows you to cast 7th-rank False Vitality once per day.",
      "bulk": 0,
      "price": {
        "gp": 6100
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:aeon-stone-amber-sphere",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "3Nb9R3lIOy1tiMqv",
      "slug": "aeon-stone-amber-sphere",
      "publicationTitle": "Pathfinder #185: A Taste of Ashes",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/other-worn-items/aeon-stone-gold-nodule.webp"
    },
    "sourceHash": "sha256:1897e41529561fa0618c98c956380b718f2752a879e2fd6c034761550620d9cc",
    "translatableHash": "sha256:d048bf3dc0de34f8030df61934b8984019ceef1930e5c240e886e1f354956390",
    "data": {
      "schemaVersion": 1,
      "name": "Aeon Stone (Amber Sphere)",
      "itemType": "equipment",
      "level": 16,
      "rarity": "rare",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "If you are undead, your body regains much of the appearance it had in life, and you gain a +2 item bonus to Deception to Impersonate yourself as a living creature. If you're alive, your appearance is the healthiest version of yourself, and you gain a +2 item bonus to Make an Impression or Request that involves your strength or vigor.\nThe resonant power of the amber sphere grants you a special activation to improve your salubrious appearance to a lurid extreme.\nActivate 2 envision\nFrequency once per day\nEffect The stone casts a 7th-rank Mask of Terror on you (check (will, dc:34, traits:emotion,fear,mental,visual, overrideTraits:true)), causing your appearance to burst with a profusion of shocking vigor: your mouth fills with large and bright teeth, your hair animates in grasping tresses, your face flushes with bright blood that seeps from your skin, or similar. The image is unique to each observer, but you remain recognizably yourself regardless of the illusion's form.",
      "bulk": 0,
      "price": {
        "gp": 9800
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:aeon-stone-black-disc",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "ffQwBOmyy2NyatnC",
      "slug": "aeon-stone-black-disc",
      "publicationTitle": "Pathfinder #185: A Taste of Ashes",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/other-worn-items/aeon-stone-pale-lavender-ellipsoid.webp"
    },
    "sourceHash": "sha256:44358137c87aaae25381fd5964cb24ea6df0896d336fc4cd4373b8e7e143ce08",
    "translatableHash": "sha256:75f66def50ee44717963e77581a391aadeba8e818c1bde7f89553c3d0607a83e",
    "data": {
      "schemaVersion": 1,
      "name": "Aeon Stone (Black Disc)",
      "itemType": "equipment",
      "level": 17,
      "rarity": "rare",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "This aeon stone slowly infuses void energy into your body. The stone deals 1 persistent void damage to you (10 void damage per minute) so long as it's invested, and you can't recover from persistent void damage while you have the stone invested.\nThe resonant power grants you resistance 10 to holy and to vitality damage.\nEffect: Aeon Stone Resonance (Black Disc)",
      "bulk": 0,
      "price": {
        "gp": 15000
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:phantom-shroud",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "WUICjaC9LYnLRIAE",
      "slug": "phantom-shroud",
      "publicationTitle": "Pathfinder #185: A Taste of Ashes",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:53854522d755a5de93f387ee8e85cac6d7708695ad1806b1a38aa771505553a9",
    "translatableHash": "sha256:f76b4eb6f1d90d539382e0270857d43dd4b9f5afbfda5570ecf03fa1d61a9615",
    "data": {
      "schemaVersion": 1,
      "name": "Phantom Shroud",
      "itemType": "equipment",
      "level": 17,
      "rarity": "uncommon",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "This pale blue cloak is wispy, thin, and cold to the touch. When worn, the cloak turns your hands pale and translucent, imbuing you with the dangerous touch of a ghost. This effect doesn't impede the normal use of your hands. You also gain an unarmed attack that deals 3d6 void damage with the agile, finesse, and magical traits. You gain the benefits of a +2 weapon potency rune with these unarmed attacks (granting a +2 item bonus to your attack rolls).\nActivate 2 Interact\nFrequency once per day\nEffect You fold the cloak around yourself, and it casts Ethereal Jaunt on you. You can Sustain the activation for up to 10 minutes. When the activation ends, you return to material form.",
      "bulk": 0.1,
      "price": {
        "gp": 15000
      },
      "usage": "worncloak",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:shadows-heart",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "VwNmUeRHomup8VoI",
      "slug": "shadows-heart",
      "publicationTitle": "Pathfinder #185: A Taste of Ashes",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/kukri.webp"
    },
    "sourceHash": "sha256:655e3cb43394a032ebe8c8b1e09cbfd035aba0c02b51528d64ba4dbc2d94ebd2",
    "translatableHash": "sha256:94143c0bddb518f8e9c59eefad526d7df9ca1fa48c42d45e509b33db05b63fd4",
    "data": {
      "schemaVersion": 1,
      "name": "Shadow's Heart",
      "itemType": "weapon",
      "level": 18,
      "rarity": "rare",
      "traits": [
        "agile",
        "finesse",
        "magical",
        "trip"
      ],
      "description": "This +3 greater striking kukri has a thin, delicate blade that absorbs light.\nActivate 1 Interact (illusion, teleportation)\nFrequency once per day\nEffect You make a melee Strike with shadow's heart and teleport to an open space you can see within 100 feet. If the attack hits, you also leave behind a shadowy, illusory duplicate of yourself that attacks the same target for up to 3 rounds. The illusion has 1 action per round, which it takes on the turn it's created and on your turn each round. It uses this action to move up to 30 feet to a square adjacent to the target and (if the target is adjacent) to attack the target with a 1d20+28 attack modifier, dealing 3d6+16 slashing damage. The illusion has an AC of 35 and is immediately destroyed by any attack that deals damage or requires a saving throw.",
      "bulk": 0.1,
      "price": {
        "gp": 23000
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "knife",
      "damage": {
        "dice": 1,
        "die": "d6",
        "type": "slashing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:umbraex-eye",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "ogvooWFhMgB50iXE",
      "slug": "umbraex-eye",
      "publicationTitle": "Pathfinder #185: A Taste of Ashes",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:ee7af14c6fff0fc3adbbaae0766614df6622a2c013f0a433514ce770ffc3dbbe",
    "translatableHash": "sha256:484ace64c02fff1e2f5a870c10a92e2fad95386aed0a615b8ec29863274a7a79",
    "data": {
      "schemaVersion": 1,
      "name": "Umbraex Eye",
      "itemType": "equipment",
      "level": 19,
      "rarity": "rare",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "Like the rest of its form, the eyes of the legendary umbraex darvakka collapse into ashes when the creature is destroyed. Rarely, when the umbraex wishes to impart information beyond its ashen reconstitution, it ejects one of its eyes at the moment of destruction. This large orb hardens into an obsidian-like substance that swirls with captivated motes of darkness deep within. While you hold the umbraex eye, you have lifesense (imprecise) 120 feet.\nActivate 1 minute (command, Interact)\nFrequency once per hour\nEffect Name a person, event, or location and the umbraex eye shows 1 minute of relevant memory the umbraex witnessed firsthand. The events are displayed as clear images in the eye and accompanied by sound. If the umbraex has no relevant memories, the eye merely flickers with shadows.",
      "bulk": 1,
      "price": {
        "gp": 34000
      },
      "usage": "held-in-two-hands",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:soulspark-candle",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "a2yYccCg6ZWvJkdo",
      "slug": "soulspark-candle",
      "publicationTitle": "Pathfinder #186: Ghost King's Rage",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:8657e460483e15a0383d3b00b09fc9082d5430eb047591cf9cebd5604bc142db",
    "translatableHash": "sha256:dd168d01ef993341fd967717e6edb047c38da803e34f13ab468daec78b3c4d73",
    "data": {
      "schemaVersion": 1,
      "name": "Soulspark Candle",
      "itemType": "equipment",
      "level": 20,
      "rarity": "rare",
      "traits": [
        "artifact",
        "consecration",
        "divine"
      ],
      "description": "This thick, white pillar candle has flecks of ash and bone mixed amid the wax. When lit, the candle sheds bright light for 20 feet and dim light for a further 20 feet. The candle can't be snuffed by weather, water, or accident but can be purposefully snuffed through ritual prayer. The candle doesn't release heat and can't be used to start a fire. The candle is never exhausted, regardless of how long it burns.\nThe area within the candle's light is a consecrated space. Worshippers of Pharasma within this area gain a +3 status bonus to attack rolls, skill checks, saving throws, and Perception checks. Undead creatures and worshippers of Urgathoa within this area take a –3 status penalty to those checks.\nEffect: Soulspark Candle\nWhen an undead creature or a haunt comes within the light of a soulspark candle, the candle's flame turns from red to black, makes a loud crackling sound, and releases a flash of bright sparks. The candle continues to burn black and crackle for as long as a haunt or undead remains in the area.\nActivate 1 Interact\nEffect You light the candle.\nActivate 1 command\nRequirements The candle is lit\nEffect You put out the candle with ritual prayers to Pharasma.\nActivate 2 command (evocation, light)\nRequirements The candle is lit, and an undead is within the light's area\nEffect You command the candle to illuminate the dead. All undead creatures in the area are limned in blue, heatless fire for as long as they remain in the area, plus 1 minute after they leave the area or the light goes out. Visible undead can't be Concealed while limned in these flames. Invisible undead are concealed while limned in these flames, rather than being undetected. Haunts are unaffected by this light.\nActivate 3 command (divine, evocation, fire)\nRequirements The candle is lit, and an undead or haunt is within the light's area\nEffect You command the candle to destroy the undead. The candle's flame erupts into a mass of fire that burns away undead and haunts. Any undead within the candle's light takes 20d8 fire damage (check (fortitude, dc:45, basic, traits:evocation,fire)). Pharasma empowers these flames, allowing them to ignore fire resistance or immunity. Any haunts in the area are instead subject to Pharasma's banishing light. The candle attempts a check to disable each haunt with a +35 modifier. This check applies to any skills applicable to disable the haunt and always has legendary proficiency. Once the candle is Activated in this way, its light immediately goes out, and the candle can't be relit for 1 hour.\nDestruction If a soulspark candle is lit by an undead of at least 20th level that worships Urgathoa, the candle burns down as if it were a normal candle over the course of 48 hours. At the end of this time, if the candle is still burning, it burns away completely and is destroyed.",
      "bulk": 0,
      "price": {},
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:spiral-athame",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "2WOpgJyaFE2gNW7H",
      "slug": "spiral-athame",
      "publicationTitle": "Pathfinder #186: Ghost King's Rage",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/dagger.webp"
    },
    "sourceHash": "sha256:4774a7f0e09a0898acd7edabe0a2fcd6a1df48bb9f07f8ffdc92fbc3221716df",
    "translatableHash": "sha256:b4c878ce67f90d0f4e73790d10ad74d4c72eea93e3a94805225d5103512a5d1d",
    "data": {
      "schemaVersion": 1,
      "name": "Spiral Athame",
      "itemType": "weapon",
      "level": 22,
      "rarity": "unique",
      "traits": [
        "agile",
        "artifact",
        "finesse",
        "thrown-10",
        "versatile-s"
      ],
      "description": "The pommel of this +4 major striking disruptive ghost touch high-grade silver dagger is a black glass orb that contains a tiny blue comet that spirals through the orb's interior. Strikes with the dagger deal an additional 1d8 vitality damage to worshippers of Urgathoa and to anyone who has ever created or summoned an undead creature. While the dagger is in your possession, you gain a +4 circumstance bonus to Medicine checks and to Midwifery Lore checks. If you're a worshipper of Pharasma, you gain imprecise lifesense with a range of 60 feet while holding the dagger. If you're undead or a worshipper of Urgathoa, you're Stupefied 4 while holding the dagger.\nDespite its utility in combat, the Spiral Athame is intended as a ritual implement, meant to bless newborns and protect them from the predations of undead. If you use the Spiral Athame to cut the umbilical cord of a newly born creature, that creature gains resistance to void damage equal to their level (minimum 1) and gains a +2 status bonus to saving throws against death effects and necromancy. These bonuses are permanent. Additionally, that creature can never become an undead creature.\nActivate 2 command, Interact (divine, necromancy)\nEffect You point the Spiral Athame at a corpse within 30 feet, shielding it from corruption. The Spiral Athame casts 5th-rank Peaceful Rest on the corpse.\nActivate 2 command, interact (divine, necromancy)\nEffect You point the Spiral Athame to the sky and pray, warding creatures against undead. This has the effect of 3rd-rank Circle of Protection, except it wards against undead creatures rather than creatures of a specified alignment, and the emanation is centered on the Spiral Athame.\nDestruction If an undead creature uses the Spiral Athame to slay a psychopomp usher while within the Boneyard, the Spiral Athame's pommel shatters and the Spiral Athame becomes a mundane, high-grade silver dagger with no special abilities.",
      "bulk": 0.1,
      "price": {},
      "usage": "held-in-one-hand",
      "category": "simple",
      "group": "knife",
      "damage": {
        "dice": 1,
        "die": "d4",
        "type": "piercing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:redsand-hourglass",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Ub1GoxOzuTR1l1r4",
      "slug": "redsand-hourglass",
      "publicationTitle": "Pathfinder #186: Ghost King's Rage",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:08fc68345e55372aef4aa70bf2a84d576213c64bcddea93e85dc90ea3b269ff3",
    "translatableHash": "sha256:ba5a71767c9087646bbd7ecde6ce6c52bf85910f5be6a2fe2110fe1f46ac9d61",
    "data": {
      "schemaVersion": 1,
      "name": "Redsand Hourglass",
      "itemType": "equipment",
      "level": 23,
      "rarity": "unique",
      "traits": [
        "artifact",
        "divine"
      ],
      "description": "This platinum hourglass is filled with red sand, is decorated with imagery of roses and whippoorwills with tiny black onyx eyes, and has the ability to manipulate time. Once used by Pharasma herself, the Redsand Hourglass was stolen from Pharasma's court a millennia ago. While the hourglass is in your possession, you're immune to the Paralyzed, Slowed, and Stunned conditions.\nActivate r Interact (divine, fortune, transmutation)\nFrequency once per day\nTrigger You fail a saving throw\nEffect You flip the hourglass upside down then immediately right it again, rewinding time by a few moments. Reroll the saving throw with a +4 circumstance bonus. You must use the results of this new saving throw.\nActivate 2 Interact (divine, transmutation)\nFrequency once per day\nEffect You flip the hourglass upside down, unhinging you from the flow of time. You become Quickened for 1 minute. You can use this extra action only to Step, Stride, or Sustain a Spell.\nActivate 3 Interact (divine, transmutation)\nFrequency once per week\nEffect You flip the hourglass sideways, pausing time for everyone but yourself. You cast Freeze Time.\nDestruction The Redsand Hourglass is destroyed if it's used within the Dimension of Time.",
      "bulk": 1,
      "price": {},
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:passage-pane",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "YeSWRltYzLYBUJbN",
      "slug": "passage-pane",
      "publicationTitle": "Pathfinder #186: Ghost King's Rage",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/treasure/art-objects/greater-art-object/platinum-framed-monocle.webp"
    },
    "sourceHash": "sha256:b59091dfb4234aeb3e602cc9f1810482215e70f1f639264c9add7e18fec8d131",
    "translatableHash": "sha256:44f7b7a5f80af87d7130e6967dea8fb9264b67c4f3a7c6dce735c2691057fd46",
    "data": {
      "schemaVersion": 1,
      "name": "Passage Pane",
      "itemType": "equipment",
      "level": 25,
      "rarity": "rare",
      "traits": [
        "artifact",
        "divine",
        "teleportation"
      ],
      "description": "The pane of this large circular mirror has a diameter of 8 feet and a gray cast. The mirror reflects its surroundings in muted colors, and any living creatures that look into the mirror see themselves as preserved corpses with sallow skin, sunken cheeks, and a vacant expression. The mirror is mounted in a bone frame intricately carved with imagery of corvids, keys, and winding roads. These roads represent the Dead Roads, the secret back routes between the Boneyard and all other planes that are under the purview of the psychopomp usher Barzahk the Passage and their followers.\nPassage panes are created by incredibly powerful priests of Barzahk using mirrors that have reflected Barzahk during their travels from when Barzahk passes through mortal realms. Through prayer, powerful magic, and exceptional crafting skill, these mirrors form a spiritual connection to the Dead Roads, which can be harnessed to open a gate to the Boneyard.\nTo utilize a passage pane, the mirror must be securely mounted on a solid surface. Once mounted, a user must bond with the passage pane by gazing beyond their dead visage into the Dead Roads. Bonding takes patience and can only be accomplished by a living creature who has at least master proficiency in Religion and who succeeds at a check (religion, dc:40) check. Attempting to bond with the mirror in this way takes 1 hour. Once a creature is bonded with the mirror, they can use the passage pane to open a portal to a random point along the Dead Roads. A creature with knowledge of a location in the Boneyard can force the mirror to lock onto that location, allowing more pointed travel. Only one creature can be bonded with the mirror at a time. When a creature forms a bond with the mirror, any previous bonds are immediately severed. Undead can't bond with the passage pane.\nWhen Barzahk themself walks the Dead Roads, a depiction of them appears in the frame's carvings. When Barzahk is depicted in this way, they can prevent the passage pane from Activating or alter the destination of the passage pane, if desired.\nActivate 1 minute (envision, Interact; divination, divine, scrying)\nRequirements The passage pane is mounted firmly to a solid surface, and you're bonded with the passage pane\nEffect You focus on a location in the Boneyard that you wish to travel to. You must have either seen or visited this location before or be able to describe the location in detail and its purpose or name, as appropriate. Attempt a check (religion, dc:40) check. On a success, the mirror locks onto your desired location, and you (and only you) see this location reflected in the mirror's pane.\nActivate 3 envision, Interact (conjuration, divine, teleportation)\nFrequency once per week\nRequirements The passage pane is mounted firmly to a solid surface, and you're bonded with the passage pane\nEffect You urge the mirror to open a rift to the Boneyard. Creatures can travel through this rift in either direction. If you've successfully forced the mirror to lock onto a specific location, the mirror's pane becomes a rift to the Boneyard that opens onto that location. If you haven't forced the mirror to lock onto a specific location, the mirror's pane becomes a rift to a random location on the Dead Roads. This rift remains open until you close it, up to a maximum of 24 hours. As long as the rift is open, the mirror is immovable, no one can form a bond with the mirror, and no one but you can Activate the mirror.\nActivate 3 envision, Interact (conjuration, divine, teleportation)\nRequirements The passage pane is an active rift to the Boneyard, and you're bonded with the passage pane\nEffect You close the rift.\nDestruction The passage pane shatters into thousands of pieces if Barzahk the Passage bonds with the mirror and wills its destruction.",
      "bulk": 3,
      "price": {},
      "usage": "other",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:stargazers-spyglass",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "GuVgH50cUeytM68r",
      "slug": "stargazers-spyglass",
      "publicationTitle": "Pathfinder #188: They Watched the Stars",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/adventuring-gear/spyglass.webp"
    },
    "sourceHash": "sha256:5e5a5c0dba6a184bf509932d8a2c7598f18ed1d784b94dacba5b3a93496255a5",
    "translatableHash": "sha256:5941dd3b728999571ea6beb6e46b41f9caf8d0bf7e054833cc163e919a805083",
    "data": {
      "schemaVersion": 1,
      "name": "Stargazer's Spyglass",
      "itemType": "equipment",
      "level": 4,
      "rarity": "uncommon",
      "traits": [
        "magical"
      ],
      "description": "This ornate spyglass has a brass tube inscribed with constellations and green-tinted lens. It's often used by field astronomers to pick out greater details among stars and other celestial bodies. Like a typical spyglass, you can see eight times farther while looking through a stargazer's spyglass.\nActivate 1 (envision)\nRequirements You are viewing the night sky with the spyglass.\nFrequency once per day\nEffect You set your eye upon a star and think of someone to cast Guiding Star.",
      "bulk": 0.1,
      "price": {
        "gp": 80
      },
      "usage": "held-in-two-hands",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:witch-token",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "mO9VXq8UkQodAucJ",
      "slug": "witch-token",
      "publicationTitle": "Pathfinder #190: The Choosing",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:652cc56acfac1f342749c2597634fe12ee29b116e9fb336df7342dfb5dcf7a4a",
    "translatableHash": "sha256:b3a1f49f02ddf8e3874e792e0a437cf570acc081cd655c3d33288bfaeaabb09b",
    "data": {
      "schemaVersion": 1,
      "name": "Witch Token",
      "itemType": "equipment",
      "level": 10,
      "rarity": "uncommon",
      "traits": [
        "arcane",
        "invested"
      ],
      "description": "When the witch token is invested by a mortal, all of the mortal's spells, except those cast at the highest level the mortal can cast, count as 1 level higher for the purpose of counteracting other spells and being counteracted. The creature can also Activate the witch token to Cast a Spell once per day. This spell is chosen from one of the uniila's arcane spontaneous spells of rank 4 or lower when the uniila creates the token. While a creature has the witch token invested, it treats its saving throws against the uniila's spells as one degree of success worse, and the uniila always knows the distance and direction to the creature. A creature can't have more than one witch token invested, and an uniila can't have more than one witch token in existence. The uniila can destroy their witch token as a free action with the concentrate trait; if the witch token is invested when the uniila does so, the creature that has the witch token invested takes 9d8 mental damage (check (will, dc:29, basic)).",
      "bulk": 0.1,
      "price": {},
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:the-juggler",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "2HByGOXi57zbP5VP",
      "slug": "the-juggler",
      "publicationTitle": "Pathfinder #190: The Choosing",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:da5055ccc3c00c928890a4dd2d0b5a383dba7a4f2f3be1d1a743b75946d32613",
    "translatableHash": "sha256:6b95961d8b384bb44bc6c72c2fb68e20d17a045f751a2c3fec760c5c303acc7f",
    "data": {
      "schemaVersion": 1,
      "name": "The Juggler",
      "itemType": "equipment",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "artifact",
        "harrow-court",
        "invested",
        "magical"
      ],
      "description": "Suit Key (Dex)\nAlignment chaotic good\nThe Juggler represents coordination and destiny. As long as you have The Juggler invested and you aren't carrying an item in two hands, you have a free hand (as you keep tossing the items in your hands back and forth, keeping one in the air at all times). You can use all items in your hands normally, so long as they can be used or wielded in one hand. If you can't act while you're carrying more items than your actual number of hands, you release all items you're holding or wielding. If you are at least 17th level, you instead have two free hands, as you can juggle an additional item.\nActivate r Interact\nTrigger an item of 1 Bulk or less falls within your reach, or an attacker fails an attack roll to hit you or a creature within your reach with a thrown weapon of 1 Bulk or less\nEffect You grab the triggering item. If all of your hands are full (including any extra free hands from The Juggler), you must immediately release an item, which can include the triggering item.",
      "bulk": 0,
      "price": {},
      "usage": "carried",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:the-silent-hag",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "cCnpBUjaGSNCT3JK",
      "slug": "the-silent-hag",
      "publicationTitle": "Pathfinder #190: The Choosing",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:25db4029e2b20dde5c560f73500ddc61cfd45dca06d09b2cf13b1df3d5889e8a",
    "translatableHash": "sha256:efd87edf0531622a5b2d0fb5575ff2b1faede66ad7345e973eedcc5fbd1033dd",
    "data": {
      "schemaVersion": 1,
      "name": "The Silent Hag",
      "itemType": "equipment",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "artifact",
        "harrow-court",
        "invested",
        "magical"
      ],
      "description": "Suit Star (Wis)\nAlignment neutral evil\nThe Silent Hag represents insight, treacherous secrets, and strife. As long as you have The Silent Hag invested, it grants you a +2 item bonus to Arcana, Nature, Occultism, or Religion checks to Recall Knowledge—when you invest the card, choose which of these four skills gains the bonus. You can change the skill by investing the card again. This increases to a +3 item bonus if you are at least 17th level.\nActivate 3 envision\nFrequency once per hour\nEffect You choose to lose one of your senses and gain another until you use this activation again. Choose from one of the following:\n• Your eyes are replaced by dark pits that see only death. You become Blinded and gain lifesense, an imprecise sense out to 60 feet. Lifesense allows you to see the vital essence of living and undead creatures, distinguishing between the vitality energy animating living creatures and void energy animating undead creatures, much as sight distinguishes colors.\n• Your ears close up then become covered with hairs that are sensitive to movement. You become Deafened, but you can't be flanked.\n• Your mouth seals over with flesh. You lose the ability to speak, but you do not need to breathe.",
      "bulk": 0,
      "price": {},
      "usage": "carried",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:the-mountain-man",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "dB5oALF9UzMdE0MD",
      "slug": "the-mountain-man",
      "publicationTitle": "Pathfinder #190: The Choosing",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:95c069d7f91f79f91a345b22d7f005aaeb88bf4d6572b69be29464e04e21407b",
    "translatableHash": "sha256:2a7ceb6244a04545b1d9c937a85936cd4cb8ee34c5002b5f0cdc12b5c4d2950e",
    "data": {
      "schemaVersion": 1,
      "name": "The Mountain Man",
      "itemType": "equipment",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "artifact",
        "harrow-court",
        "invested",
        "magical"
      ],
      "description": "Suit Shield (Con)\nAlignment chaotic neutral\nThe Mountain Man represents creatures with incredible physical power. As long as you have The Mountain Man invested, it grants you a +2 item bonus to Athletics checks to Force Open, Grapple, Shove, or Trip. This increases to a +3 item bonus if you are at least 17th level.\nActivate 2 command, Interact\nFrequency once per day\nEffect You bring the might of the mountain into your body. You cast 2nd-rank or 4th-rank Enlarge upon yourself. If you're at least 15th level, the duration increases to 1 hour.",
      "bulk": 0,
      "price": {},
      "usage": "carried",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:the-liar",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "DKQrQkx13z6yiUNp",
      "slug": "the-liar",
      "publicationTitle": "Pathfinder #190: The Choosing",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:51907290dca89b79230c217208957bb8b3abca2f94c0fa3694c1439ecd2e3c0a",
    "translatableHash": "sha256:563859786e69d2eec15508fa561c85f8ff3974e9a7b222b3eafa5b6f6737317f",
    "data": {
      "schemaVersion": 1,
      "name": "The Liar",
      "itemType": "equipment",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "artifact",
        "harrow-court",
        "invested",
        "magical"
      ],
      "description": "Suit Crown (Cha)\nAlignment chaotic evil\nThe Liar represents obsession or treacherous love. As long as you have The Liar invested, it grants you a +2 item bonus to Deception checks to Lie. This increases to a +3 item bonus if you're at least 17th level. If the implausibility of your lies prompts a circumstance penalty to your Deception checks or an increase to your Deception DC, reduce that penalty or increase by half.\nActivate 2 envision, Interact\nFrequency once per day\nEffect You touch a weapon and instill faithlessness within it. The weapon gains the backbiting curse. The curse lasts until you use this activation again. If you're at least 17th level, you can instead use this activation on a weapon within 30 feet. If the weapon is carried by a creature, it can resist the effect with a successful check (will, against:class-spell) save against your class DC or spell DC.",
      "bulk": 0,
      "price": {},
      "usage": "carried",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:the-carnival",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "FiCTRh8rXOXlKxQB",
      "slug": "the-carnival",
      "publicationTitle": "Pathfinder #190: The Choosing",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:25ccc925489e286c5d596bb63270499f66272d6d0760bb05e34c2681edaacb13",
    "translatableHash": "sha256:29640572924e7f289f2bad3d00b97faa986c771b54c3189bc7d82ac02674e02a",
    "data": {
      "schemaVersion": 1,
      "name": "The Carnival",
      "itemType": "equipment",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "artifact",
        "harrow-court",
        "invested",
        "magical"
      ],
      "description": "Suit Star (Wis)\nAlignment chaotic neutral\nThe Carnival represents false dreams. When you have The Carnival invested, your flat check DCs to obtain reliable information from divination effects (such as Augury or Read Fate, or the activation of this card) are reduced by 2 (but not to less than 2). Casting a divination effect with a flat check, whether or not the flat check succeeds, gives a series of subtly different visions that don't confuse the meaning but make you Stupefied 1 for 1 round. If you're at least 17th level, the flat check is instead reduced by 3.\nActivate 1 (divination, prediction) envision\nFrequency once per day\nEffect You peer into the future and witness yourself walking through a colorful but vaguely sinister carnival, meeting a variety of strange people. One of these people looks more genuine than the others and resembles someone you're likely to meet for the first time in the next 24 hours (if anyone). This resemblance might be metaphorical, such a clown signifying someone who is silly or a stilt-walker representing someone who is tall. You also get a sense for whether this person can be trusted, should be distrusted, or neither, based on how they're most likely to interact with you and your allies. The GM decides who this new person might be, then rolls a secret check (flat, dc:6). On a failure, the result is always \"neither,\" making it hard to determine whether a \"neither\" result is accurate.",
      "bulk": 0,
      "price": {},
      "usage": "carried",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:the-brass-dwarf",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "FposU3NmF0IbrOdz",
      "slug": "the-brass-dwarf",
      "publicationTitle": "Pathfinder #190: The Choosing",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:3bd91189f91c30abd7e5e185aa0b0a26b0c44123650042239656330e8e167841",
    "translatableHash": "sha256:8cbd0927dfcf743348ac0df95365d2451179cc14eb64fc78ec12538a1c321275",
    "data": {
      "schemaVersion": 1,
      "name": "The Brass Dwarf",
      "itemType": "equipment",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "artifact",
        "harrow-court",
        "invested",
        "magical"
      ],
      "description": "Suit Shield (Con)\nAlignment lawful neutral\nThe Brass Dwarf represents invulnerability. When you invest The Brass Dwarf, you gain resistance to fire equal to your level.\nActivate 1 envision\nFrequency once per hour\nEffect Choose acid, cold, electricity, fire, mental, poison, or sonic. You can't choose the damage type for which The Brass Dwarf currently gives you resistance. You gain resistance to the damage you chose equal to your level, and you lose the prior resistance that The Brass Dwarf gave you. For 1 minute, you gain weakness equal to half your level to the damage type of the prior resistance.\nEffect: Brass Dwarf Weakness",
      "bulk": 0,
      "price": {},
      "usage": "carried",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:the-vision",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "HaakvCTFbCnwFHVY",
      "slug": "the-vision",
      "publicationTitle": "Pathfinder #190: The Choosing",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:58159667c8e28ea052790b630495e367ab13491b0ea374b55f284474593dd2a3",
    "translatableHash": "sha256:7a70b421c5fb1eb0121d7f6df4a67de6b1fd160d075bae49f3e20a3e499284f9",
    "data": {
      "schemaVersion": 1,
      "name": "The Vision",
      "itemType": "equipment",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "artifact",
        "harrow-court",
        "invested",
        "magical"
      ],
      "description": "Suit Book (Int)\nAlignment chaotic neutral\nThe Vision represents arcane knowledge. As long as you have The Vision invested, it grants you a +2 item bonus to all checks made to Identify Magic. This increases to a +3 item bonus if you are at least 17th level.\nActivate f envision\nFrequency once per day\nEffect A visible bolt of blue energy bursts from your head. Attempt to Recall Knowledge about a subject, rolling the check with the most appropriate Lore skill check. This check always resolves as if you were master in the most appropriate Lore skill to Recall Knowledge on the subject (or if you're at least 15th level, as if you were legendary in that Lore skill). If you're already master (or legendary) in that Lore, the result of your Recall Knowledge check is one degree of success better than it would otherwise be.",
      "bulk": 0,
      "price": {},
      "usage": "carried",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:the-fiend",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "IfOwz6UoG7pnfbur",
      "slug": "the-fiend",
      "publicationTitle": "Pathfinder #190: The Choosing",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:8170568e000ab3b12559e583323e1d2051dfb7b641b95a5eb0cd76c8e5583e60",
    "translatableHash": "sha256:469167e857c227d77f50b1c59f6d0dc70988f6657fc72266a5469b3442b92c82",
    "data": {
      "schemaVersion": 1,
      "name": "The Fiend",
      "itemType": "equipment",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "artifact",
        "harrow-court",
        "illusion",
        "invested",
        "magical"
      ],
      "description": "Suit Hammer (Str)\nAlignment lawful evil\nThe Fiend represents the inevitability of great calamities and pervasive dangers. As long as you have The Fiend invested, when you repeat a non-Strike action you previously took in the same round, you gain a +2 item bonus to checks to perform that action. This increases to a +3 item bonus if you are at least 17th level.\nActivate 2 envision, Interact\nFrequency once per day\nEffect You wave the card to create a vision of destruction around you; you cast Phantasmal Calamity, except the area is a 20-foot emanation. The rank of the spell is one-half your level, rounded down (minimum 6th level), and the save DC is your class DC or spell DC (check (will, against:class, traits:illusion,mental,spell)). You are immune to the effects of your own phantasmal calamity.",
      "bulk": 0,
      "price": {},
      "usage": "carried",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:the-big-sky",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "jwEAO4hCOKrM6i6c",
      "slug": "the-big-sky",
      "publicationTitle": "Pathfinder #190: The Choosing",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:e0adaba62f96619e1c9d1f7d7484b877fa2c802060d387e6a6a20197d0561d6b",
    "translatableHash": "sha256:13bdaedfe6248f295eeb70e451de8b06cc1a000cf5d6be17f83edd9ae37c8f53",
    "data": {
      "schemaVersion": 1,
      "name": "The Big Sky",
      "itemType": "equipment",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "artifact",
        "harrow-court",
        "invested",
        "magical"
      ],
      "description": "Suit Hammer (Str)\nAlignment chaotic good\nThe Big Sky represents widespread change or liberation. As long as you have The Big Sky invested, you gain a +2 item bonus to Perception checks made while you are flying outside during the day and to any check made to Escape. The bonus increases to +3 if you are at least 17th level.\nActivate 2 envision\nFrequency once per day\nEffect For 10 minutes, you and up to four creatures you touch ignore difficult terrain and effects that would give a circumstance penalty to Speed. If you are at least 17th level, the targets also ignore greater difficult terrain.",
      "bulk": 0,
      "price": {},
      "usage": "carried",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:the-trumpet",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "O1VdFSf81VZQg428",
      "slug": "the-trumpet",
      "publicationTitle": "Pathfinder #190: The Choosing",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:95efbc2923bfa82f576ae73c549f9d95097011e909c3ba2aed5229755ba62423",
    "translatableHash": "sha256:720657d99d2558cab96e9509da653bd9ad7ac9f34b2ee6ece415924732d7896b",
    "data": {
      "schemaVersion": 1,
      "name": "The Trumpet",
      "itemType": "equipment",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "artifact",
        "harrow-court",
        "invested",
        "magical"
      ],
      "description": "Suit Shield (Con)\nAlignment lawful good\nThe Trumpet represents timely warning. As long as you have The Trumpet invested, you (and only you) hear the sound of trumpets when you're about to be attacked. This grants you a +2 item bonus to initiative checks made with hearing-based Perception checks. This bonus increases to +3 if you're at least 17th level.\nActivate 2 envision\nFrequency once per day\nEffect A blast of inspiring noise erupts from the card in a 60-foot cone. Creatures in the area take 14d6 sonic damage (with a check (fortitude, against:class-spell, basic, options:area-effect) save equal to your class DC or spell DC). Creatures that fail the save are Deafened for 1 round (1 minute on a critical failure). The damage increases to 16d6 sonic damage if you're at least 13th level, to 18d6 sonic damage if you're at least 15th level, to 20d6 sonic damage if you're at least 17th level, and to 22d6 sonic damage if you're at least 19th level.",
      "bulk": 0,
      "price": {},
      "usage": "carried",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:the-empty-throne",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "owR8clECtufA8q9h",
      "slug": "the-empty-throne",
      "publicationTitle": "Pathfinder #190: The Choosing",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:303cadfc623e57b3ba17b9f50ba45f74ce718394185200278d366efc77c852c6",
    "translatableHash": "sha256:cf4733aa8e27c957a59cac896420b3a0515b7c340577ee9db2e3e15219cb618f",
    "data": {
      "schemaVersion": 1,
      "name": "The Empty Throne",
      "itemType": "equipment",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "artifact",
        "harrow-court",
        "invested",
        "magical"
      ],
      "description": "Suit Crown (Cha)\nAlignment lawful good\nThe Empty Throne represents great loss and wisdom from those who are now gone. As long as you have The Empty Throne invested, it grants you a +2 item bonus to Society and Lore checks made to Recall Knowledge regarding individuals who are no longer alive (such as checks to learn about Taldor's historical founder, but not to learn about its current empress). This increases to a +3 item bonus if you are at least 17th level.\nActivate 1 envision\nFrequency once per day\nEffect You overwhelm a target you can see within 60 feet with feelings of helplessness and loss. The creature must attempt a check (will, against:class-spell) save with a DC equal to your class DC or spell DC.\nCritical Success The target is unaffected.\nSuccess The target can't benefit from circumstance or status bonuses for 1 round.\nFailure The target can't benefit from circumstance or status bonuses for 1 day, and the target's allies are unable to benefit from circumstance or status bonuses while within 15 feet of the target.\nCritical Failure As failure, except the duration is 1 week.",
      "bulk": 0,
      "price": {},
      "usage": "carried",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:the-theater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Qh65GD5oXOhO5y3k",
      "slug": "the-theater",
      "publicationTitle": "Pathfinder #190: The Choosing",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:4208b55a518edb19bd29720619a51332bf9220b3c45000079a75f34497dfc95a",
    "translatableHash": "sha256:202a4822744ef80b7d7fb51c742faa15308858e1c7975c778fc04454aac7a6f3",
    "data": {
      "schemaVersion": 1,
      "name": "The Theater",
      "itemType": "equipment",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "artifact",
        "harrow-court",
        "invested",
        "magical"
      ],
      "description": "Suit Crown (Cha)\nAlignment neutral good\nThe Theater represents prophecy and how prophets can't change the unfolding pageantry of fate. As long as you have The Theater invested and as long as you are not already Doomed, when you would gain the doomed condition, attempt a check (flat, dc:10). On a success, you do not gain the doomed condition.\nActivate r (fortune) envision\nTrigger You are targeted by a misfortune effect\nFrequency once per hour\nEffect The Theater attempts to counter the misfortune effect before it affects you. It has a counteract rank equal to your level divided by 2 (rounded up), and a counteract modifier of your Class DC – 10.",
      "bulk": 0,
      "price": {},
      "usage": "carried",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:the-snakebite",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "RCtvSgzBCsyaztOj",
      "slug": "the-snakebite",
      "publicationTitle": "Pathfinder #190: The Choosing",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:f38621e79c4c1456197a8c731777f1d8c49039709ee49b2c8efab54601280ada",
    "translatableHash": "sha256:5d10ca868a154e077c75806b038a480772760e95814accd4eba416f6354d3903",
    "data": {
      "schemaVersion": 1,
      "name": "The Snakebite",
      "itemType": "equipment",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "artifact",
        "harrow-court",
        "invested",
        "magical",
        "poison"
      ],
      "description": "Suit Book (Int)\nAlignment chaotic evil\nThe Snakebite represents poison, assassination, and disharmony. As long as you have The Snakebite invested, it grants you a +2 item bonus to Deception and Stealth checks you make for initiative. This increases to a +3 item bonus if you're at least 17th level. The DCs of your poison effects have a +1 item bonus to targets that are Off-Guard to you when you afflict the target with the poison (the DC retains this bonus for the target's subsequent saves against the affliction, even if the target is no longer off-guard to you).\nActivate 2 envision, Interact\nFrequency once per day\nEffect You cast Purple Worm Sting on a creature within your reach, with a DC equal to your class DC or spell DC (check (fortitude, against:class-spell, traits:necromancy,poison,spell)).",
      "bulk": 0,
      "price": {},
      "usage": "carried",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:the-rakshasa",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "W2yfqo9Oy8zyoOrA",
      "slug": "the-rakshasa",
      "publicationTitle": "Pathfinder #190: The Choosing",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:40ca46e88bb5e6c9c44a399ef7d6961d2554effb45e0fa409a9099bde409c14b",
    "translatableHash": "sha256:ad66a0801391e8317971c74abeda3847e2fae9f4e53875beabb55a8f236cc894",
    "data": {
      "schemaVersion": 1,
      "name": "The Rakshasa",
      "itemType": "equipment",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "artifact",
        "harrow-court",
        "invested",
        "magical"
      ],
      "description": "Suit Book (Int)\nAlignment lawful evil\nThe Rakshasa represents domination of others to support your own schemes. When you invest The Rakshasa, identify a single willing creature within 30 feet as your pledged follower. If you're at least 15th level, you can have up to two pledged followers at once. At 18th level, you can have up to three pledged followers. If you have the maximum pledged followers active and select a new one, a previous pledged follower of your choice is no longer your pledged follower. You gain an item bonus equal to your current number of pledged followers to all Coerce attempts.\nActivate f\nFrequency once per minute\nEffect You regain Hit Points equal to twice your level, and a pledged follower of your choice loses Hit Points equal to your level (no effects apply that would decrease this Hit Point loss). If this loss kills your pledged follower, you also gain temporary Hit Points equal to your level. The pledged follower is temporarily immune to this activation for 24 hours.",
      "bulk": 0,
      "price": {},
      "usage": "carried",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:the-rabbit-prince",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "XDiBtW7A9lelBGeY",
      "slug": "the-rabbit-prince",
      "publicationTitle": "Pathfinder #190: The Choosing",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:1b852af8022e842d38a64053c5948be84971159c4fdc14e6f62cd12f344536a3",
    "translatableHash": "sha256:29bf73488d355adab375d439bf4e7cdd5617eeb8aff72f714c31220ec216e0fd",
    "data": {
      "schemaVersion": 1,
      "name": "The Rabbit Prince",
      "itemType": "equipment",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "artifact",
        "harrow-court",
        "invested",
        "magical"
      ],
      "description": "Suit Key (Dex)\nAlignment chaotic neutral\nThe Rabbit Prince represents the unreliability of hand-to-hand combat, and how even cunning foes can lose to lucky novices. As long as you have The Rabbit Prince invested, it grants you a +1 status bonus to attack rolls you make as a readied action.\nActivate r (fortune) envision\nTrigger You miss a creature with a melee weapon Strike\nFrequency once per day\nEffect Reroll the triggering Strike with a +1 status bonus. If you hit, attempt a check (flat, dc:15); on a failure, your weapon gains the broken condition (if your weapon is already broken, it's destroyed). If you're at least 14th level, this flat check is check (flat, dc:10). If you're at least 17th level, this flat check is check (flat, dc:5).",
      "bulk": 0,
      "price": {},
      "usage": "carried",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:the-publican",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "XyoYrGEAhJ3iCahe",
      "slug": "the-publican",
      "publicationTitle": "Pathfinder #190: The Choosing",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:027394d9937d972f5ce64f657f508be477070e05d55d6f4d13a4312d73f5ef07",
    "translatableHash": "sha256:60a03df9b75ffcefa4e23e1866844bfafc8e3faa899f86b83d111ae21d42f5bb",
    "data": {
      "schemaVersion": 1,
      "name": "The Publican",
      "itemType": "equipment",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "artifact",
        "harrow-court",
        "invested",
        "magical"
      ],
      "description": "Suit Star (Wis)\nAlignment chaotic good\nThe Publican represents friendship, shelter, and insight. As long as you have The Publican invested, treat critically failed checks made to Aid as regular failures instead. If you are at least 14th level, the circumstance bonus you provide for succeeding or critically succeeding at checks to Aid increases by 1.\nActivate r envision\nTrigger You improve a creature's attitude to you\nFrequency once per day\nEffect You improve the creature's attitude by an additional step more than you would normally. If you're at least 18th level, you improve the creature's attitude by two additional steps.",
      "bulk": 0,
      "price": {},
      "usage": "carried",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:the-locksmith",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "yHaZJDX7xe8gPdL6",
      "slug": "the-locksmith",
      "publicationTitle": "Pathfinder #190: The Choosing",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:826984ea0a8ae302caa84d0400ffd948066726247d22a3c03fe8966a5a583716",
    "translatableHash": "sha256:49e189d5efedb38d55ae772f43833aaa6e04a0f333252ed63b29dcfde8b89edd",
    "data": {
      "schemaVersion": 1,
      "name": "The Locksmith",
      "itemType": "equipment",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "artifact",
        "harrow-court",
        "invested",
        "magical"
      ],
      "description": "Suit Key (Dex)\nAlignment lawful neutral\nThe Locksmith represents opening locks, including metaphorical locks such as unlocking fate. As long as you have The Locksmith invested, it grants you a +2 item bonus to Thievery checks to Pick a Lock. This increases to a +3 item bonus if you are at least 17th level.\nActivate r envision, Interact\nTrigger You would be afflicted by a curse or a disease\nFrequency once per day\nEffect You mimic the turning of a key in a lock and free yourself from your unpleasant fate. You attempt to counteract the triggering affliction, using half your level (rounded up) as the counteract rank and a counteract check modifier equal to your class DC – 10.",
      "bulk": 0,
      "price": {},
      "usage": "carried",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:the-paladin",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "ZcLscdldjI8xJnC7",
      "slug": "the-paladin",
      "publicationTitle": "Pathfinder #190: The Choosing",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:2874e7c4d09c390dab9ac354519e4301b4af23423228fd80a6f0082f8b63d489",
    "translatableHash": "sha256:56a54d52ea5bb9f8bd52a857bb813e62a2a073b7182a19c0c94827ae5fb2e295",
    "data": {
      "schemaVersion": 1,
      "name": "The Paladin",
      "itemType": "equipment",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "artifact",
        "harrow-court",
        "invested",
        "magical"
      ],
      "description": "Suit Hammer (Str)\nAlignment lawful good\nThe Paladin represents righteousness and resolute defense. As long as you have The Paladin invested, you gain the Shield Block general feat. If you already possess this feat, you gain an additional reaction at the start of your turn that can only be used to Shield Block.\nActivate r envision\nTrigger You fail or critically fail a saving throw\nFrequency once per day\nEffect Adjust the result of your saving throw up by one degree of success.",
      "bulk": 0,
      "price": {},
      "usage": "carried",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:guardian-aluum-charm",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "enPo1dPzSQaybAfF",
      "slug": "guardian-aluum-charm",
      "publicationTitle": "Pathfinder #191: The Destiny War",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/other-worn-items/aluum-charm.webp"
    },
    "sourceHash": "sha256:19eef3ee8d33a26ee63391fe2f31febbee2057c5c528b535ebce9b4c16295374",
    "translatableHash": "sha256:6cee73781aa814cbd912400851501ca70b1f711c606926e01065d89992435ba4",
    "data": {
      "schemaVersion": 1,
      "name": "Guardian Aluum Charm",
      "itemType": "equipment",
      "level": 13,
      "rarity": "rare",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "A guardian aluum charm grants control over powerful aluums—metal and stone constructs created by the Pactmasters to help maintain order in the city of Katapesh. As long as you wear a guardian aluum's linked guardian aluum charm, that aluum follows your verbal commands.\nActivate 2 command, envision\nFrequency once per day\nEffect The charm grants you control over an aluum you can see within 60 feet, as long as the target aluum is level 13 or less. This has the effect of Dominate and allows a check (will, dc:28) save. If the aluum is currently under the control of someone wearing its linked charm, its saving throw is one degree higher than what is rolled. You can control only one aluum at a time with this activation, and controlling a new aluum ends the effect for one you had previously affected.",
      "bulk": 0.1,
      "price": {
        "gp": 2800
      },
      "usage": "wornamulet",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:witchwyrd-beacon",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "ZxwnnmMw9z1KG98W",
      "slug": "witchwyrd-beacon",
      "publicationTitle": "Pathfinder #191: The Destiny War",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/vehicles/vonthoss-golden-bridge-protective-barrier-effect.webp"
    },
    "sourceHash": "sha256:6ba64e084d8380501d9bb3e901adfed65ddb769c1d996c9e257826b4c26ae973",
    "translatableHash": "sha256:2c8d2d759cebd847eb54f665ea58b7f1fdebf3688a622d2f3af66978524a2573",
    "data": {
      "schemaVersion": 1,
      "name": "Witchwyrd Beacon",
      "itemType": "equipment",
      "level": 17,
      "rarity": "rare",
      "traits": [
        "magical"
      ],
      "description": "Made of djezet, orichalcum, and luminous, resonant crystal, a witchwyrd beacon looks like a series of concentric rings mounted on rods that allow the rings to rotate independently of each other. These potent items are used by the Pactmasters of Katapesh to facilitate swift travel and are only rarely entrusted to others.\nActivate 10 minutes (command, envision, Interact)\nEffect By touching the witchwyrd beacon and focusing on it for 10 minutes, you attune yourself to it. Up to four creatures can be attuned to a single witchwyrd beacon at any one time—to attune another creature, one of the previous four must become unattuned. You can break your attunement to a witchwyrd beacon by Dismissing the effect. The attunement automatically ends if the attuned creature dies or if the attuned creature attunes themselves to a different witchwyrd beacon. The effect can also be dispelled normally. You can sense whenever the witchwyrd beacon you are attuned to is activated in any way.\nActivate 10 minutes (command, Interact)\nFrequency once per day\nRequirements you are attuned to the witchwyrd beacon\nEffect You place the witchwyrd beacon on a flat, stable, and immobile surface, then adjust its rings to link it to the site. Once linked, any creature can use a teleportation effect to target the witchwyrd beacon directly, regardless of line of sight. You can Translocate or Gate to the beacon as if you could see its location, and if you travel to it via an effect like Interplanar Teleport, the beacon eliminates the imprecision of the spell. The beacon doesn't change the range of effects, only their accuracy. Once the beacon is used in this manner, it loses its link and must be reactivated again to grant this benefit to attuned creatures.",
      "bulk": 3,
      "price": {
        "gp": 15000
      },
      "usage": "held-in-two-hands",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:the-cyclone",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "04GSFcLNlw1w2lAY",
      "slug": "the-cyclone",
      "publicationTitle": "Pathfinder #191: The Destiny War",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:1bc212c1d21b55439186f57bbe69f9abcf5f1fb7b90274df58b7f5fba15edd6b",
    "translatableHash": "sha256:20ffad32497e2703f36cc5ffa0bee39293741c9e3d2cf6b29710963013022a56",
    "data": {
      "schemaVersion": 1,
      "name": "The Cyclone",
      "itemType": "equipment",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "artifact",
        "harrow-court",
        "invested",
        "magical"
      ],
      "description": "Suit Hammers (Str)\nAlignment chaotic evil\nThe Cyclone represents tumultuous evil plots. As long as it is invested, The Cyclone bolsters you with helpful winds that grant you a +2 item bonus to Athletics checks made to Climb, High Jump, Long Jump, and Disarm. This increases to a +3 item bonus if you are at least 17th level.\nActivate 2 envision, Interact\nFrequency once per day\nEffect You cast Whirlwind. You do not treat the squares in the whirlwind as difficult terrain, but all other creatures do. The rank of the spell is one-half your level, rounded down (minimum 8th rank), and the save DC is your class DC or spell DC (check (reflex, against:class-spell, traits:air)).",
      "bulk": 0,
      "price": {},
      "usage": "carried",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:the-beating",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "1I90sDJk6SFokiyl",
      "slug": "the-beating",
      "publicationTitle": "Pathfinder #191: The Destiny War",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:4c4fe27ceaf16579c3a245528d8cd398c3ef5573794e30ab403d1dc0b89111d2",
    "translatableHash": "sha256:b3c079d3999aa2c5cd3fda6d317a90e53c92a564539505f727cf98c78d8eb981",
    "data": {
      "schemaVersion": 1,
      "name": "The Beating",
      "itemType": "equipment",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "artifact",
        "harrow-court",
        "invested",
        "magical"
      ],
      "description": "Suit Hammers (Str)\nAlignment neutral evil\nThe Beating symbolizes attack from all sides. If you have The Beating invested, whenever you and an ally are flanking a foe, your melee Strikes gain a +2 item bonus to damage. This increases to a +3 item bonus at 17th level.\nActivate 2 envision, Interact\nFrequency once per day\nEffect You wave the card to conjure up dozens of violent ghostly figures; you cast Pernicious Poltergeist, and the area of the spell is treated as difficult terrain in addition to its normal effects. The rank of the spell is one-half your level, rounded down (minimum 6th level), and the save DC is your class DC or spell DC.\ncheck (will, against:class-spell, traits:spell,emotion,fear,mental)\ncheck (reflex, against:class-spell, basic, traits:force,spell)\ncheck (fortitude, against:class-spell, basic, traits:void,spell)",
      "bulk": 0.1,
      "price": {},
      "usage": "carried",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:the-demons-lantern",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "28euk1w2rSWTcj5Y",
      "slug": "the-demons-lantern",
      "publicationTitle": "Pathfinder #191: The Destiny War",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:4f74ffb07f7b973f7d111679791e8ad9130f0548d99609683b6cd3ca720f3354",
    "translatableHash": "sha256:8a805b808fc72cc132cf6bc921762b180060b451e9048d608212f92f79552f28",
    "data": {
      "schemaVersion": 1,
      "name": "The Demon's Lantern",
      "itemType": "equipment",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "artifact",
        "harrow-court",
        "invested",
        "magical"
      ],
      "description": "Suit Keys (Dex)\nAlignment chaotic evil\nThe Demon's Lantern represents trickery and feats of legerdemain. As long as you have The Demon's Lantern invested, you gain a +2 item bonus to checks made to Conceal an Object, Palm an Object, or Steal. This increases to a +3 item bonus if you are at least 17th level.\nActivate r envision\nFrequency once per day\nTrigger A creature hits you with a melee attack\nEffect You release a flash of lights and attempt a Reflex saving throw. If your saving throw is higher than the attack roll for the triggering attack, it misses. If the attack misses, the attacker is Dazzled until the end of your next turn.",
      "bulk": 0,
      "price": {},
      "usage": "carried",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:the-midwife",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "3twiNkpDG862fnnY",
      "slug": "the-midwife",
      "publicationTitle": "Pathfinder #191: The Destiny War",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:6b698bf5cdecffd398fcc4df3dc43fea3bcd85477a7a7b4350c10c536d1e3ada",
    "translatableHash": "sha256:ebd93933d32a96fcb5debc55af3d6c7c7d1530ce43511bcc4ef7fb4e90fdc4e7",
    "data": {
      "schemaVersion": 1,
      "name": "The Midwife",
      "itemType": "equipment",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "artifact",
        "harrow-court",
        "invested",
        "magical"
      ],
      "description": "Suit Stars (Wis)\nAlignment neutral good\nThe Midwife represents the arrival of new life or new information, particularly via the aid of another. As long as you have The Midwife invested, it grants a +2 item bonus to Medicine checks. This increases to a +3 bonus if you are at least 17th level.\nActivate r command\nFrequency once per day\nTrigger A creature you can sense within 60 feet would die or be destroyed\nEffect You prevent the target from dying or being destroyed and restore to the target 6d8+24 healing Hit Points. This effect can prevent a death effect or Disintegrate from slaying a target. The amount of healing granted increases to 7d8+28 healing if you're at least 15th level, 8d8+32 healing if you're at least 17th level, and 9d8+36 healing if you're at least 19th level.",
      "bulk": 0,
      "price": {},
      "usage": "carried",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:the-tangled-briar",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "85hapkvhXc6Oa8XC",
      "slug": "the-tangled-briar",
      "publicationTitle": "Pathfinder #191: The Destiny War",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:4bfb9119bb3dea50dac9f16d4eccf92ca8f66e5988459787169089bb39a23727",
    "translatableHash": "sha256:e1b2d684d86853bcf8a891dc8c4366f28036622248bf5cc871020794d34a337f",
    "data": {
      "schemaVersion": 1,
      "name": "The Tangled Briar",
      "itemType": "equipment",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "artifact",
        "harrow-court",
        "invested",
        "magical"
      ],
      "description": "Suit Shields (Con)\nAlignment lawful evil\nThe Tangled Briar signifies the return of ancient triumphs. As long as you have The Tangled Briar invested, you gain Toughness as a bonus feat. If you already possess this feat, increase your maximum Hit Points by twice your level.\nActivate 2 envision, Interact\nFrequency once per day\nEffect You raise the card up above your head and invoke the thorns and briars of the tangled parts of the world; you cast Wall of Thorns. The rank of the spell is half your level, rounded down (minimum 6th level). The brambles within this particular wall of thorns are treated as greater difficult terrain.",
      "bulk": 0,
      "price": {},
      "usage": "carried",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:the-uprising",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "BdQjSNSItoruWMul",
      "slug": "the-uprising",
      "publicationTitle": "Pathfinder #191: The Destiny War",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:0696954ff42109690b0fc00d92178681668571c70e4d3b49d7bde073a8222436",
    "translatableHash": "sha256:9b9010c5779bcbca8913d3885f764c76e087083230013385b39309fab040bbfb",
    "data": {
      "schemaVersion": 1,
      "name": "The Uprising",
      "itemType": "equipment",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "artifact",
        "harrow-court",
        "invested",
        "magical"
      ],
      "description": "Suit Hammers (Str)\nAlignment chaotic neutral\nWhen you have The Uprising invested, you gain a +2 item bonus to all saving throws against affects that attempt to control you or restrain you. This item bonus increases to +3 if you are 20th level.\nActivate 2 command, envision\nFrequency once per day\nEffect The card calls forth a mob of shadowy figures who batter and hinder your enemies. Target a 20-foot burst at any point on solid ground with 120 feet, and the mob of figures rises up from the ground, persisting for 1 minute. Make an unarmed Strike against the Fortitude DC of any number of creatures in this burst (you can choose to not attack some creatures in the area if you wish). Any creature you succeed against is Grabbed and takes 3d6 bludgeoning damage. Whenever a creature ends its turn in the area, the figures attempt to Grab that creature if they haven't already, and they deal 1d6 bludgeoning damage to any creature already grabbed. The mob's Escape DC is equal to your class DC. A creature can attack a figure in an attempt to release its grip. It's AC is equal to your class DC, and it's destroyed if it takes 12 or more damage. Even if destroyed, additional figures continue to rise up in the area until the effect's duration ends. You can Dismiss this effect. If you are at least 15th level, you can use a two-action activity, which has the concentrate trait, to move the burst up to 30 feet, which causes any currently grabbed creatures to be released and left behind. If part of the burst appears or moves into an area that can't support it on the ground, that portion of the burst disappears until it is supported.",
      "bulk": 0,
      "price": {},
      "usage": "carried",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:the-sickness",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "e1w2q9r309N5gZ7E",
      "slug": "the-sickness",
      "publicationTitle": "Pathfinder #191: The Destiny War",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:324f1de1f17566ba5f0b73f5c9b44ea371c7c1b4d78763eb9c2b9bf7cd70972a",
    "translatableHash": "sha256:5fb5a56b30c5c01340ec267e13398dc39ec5da4f9c3b83365faf9150cbc9d46f",
    "data": {
      "schemaVersion": 1,
      "name": "The Sickness",
      "itemType": "equipment",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "artifact",
        "harrow-court",
        "invested",
        "magical"
      ],
      "description": "Suit Shields (Con)\nAlignment neutral evil\nThe Sickness represents disease of the body or soul. As long as The Sickness is invested, it grants you a +2 item bonus to saving throws against disease. If you roll a success on a save against a disease, you get a critical success instead. If you are 20th-level, the item bonus increases to +3.\nActivate 2 envision, Interact\nFrequency once per day\nEffect You flick a corner of the card, as if casting aside a tiny pest or fleck of filth from its surface; you cast Abyssal Plague. If you are at least 15th-level, you can instead choose to cast Spiritual Epidemic. Regardless of which spell you cast, the rank of the spell is half your level, rounded down (minimum 6th level), and the save DC is equal to your class DC or spell DC.\nAbyssal Plague check (fortitude, against:class-spell, traits:chaotic,disease,evil,necromancy,spell)\nSpiritual Epidemic check (fortitude, against:class-spell, traits:curse,necromancy,spell)",
      "bulk": 0,
      "price": {},
      "usage": "carried",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:the-owl",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "eTerYHAbXk9qwpgU",
      "slug": "the-owl",
      "publicationTitle": "Pathfinder #191: The Destiny War",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:cf07d13f5b3fbe6d141a7aa460976d1ce968ba466b69ea5e8d78725af6ed7312",
    "translatableHash": "sha256:48d9d88055b8675c7593fd833bba215edb11696ce0520d492d5d71a98a3bcf6a",
    "data": {
      "schemaVersion": 1,
      "name": "The Owl",
      "itemType": "equipment",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "artifact",
        "harrow-court",
        "invested",
        "magical"
      ],
      "description": "Suit Stars (Wis)\nAlignment neutral\nThe Owl represents the wisdom of nature and the natural order. As long as you have The Owl invested, it grants a +2 item bonus to Perception checks made to Sense Motive, Survival checks to Subsist in the wild, and Nature checks made when you activate this card. This increases to a +3 bonus if you are at least 17th level.\nActivate 1 hour (command, envision, Interact)\nFrequency once per day\nEffect After spending an hour meditating, you can ask one question of the region's spirits, as if you had just performed a Commune ritual. Attempt a check (nature, dc:30, traits:activate-the-owl) check to determine the result.",
      "bulk": 0,
      "price": {},
      "usage": "carried",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:the-lens-of-the-outreaching-eye",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "F2uej7timkyYGg83",
      "slug": "the-lens-of-the-outreaching-eye",
      "publicationTitle": "Pathfinder #191: The Destiny War",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/other-worn-items/aluum-charm.webp"
    },
    "sourceHash": "sha256:8c55c1ff9368ad4f40eb553d14b7a235fe7ea52092b94c018a832abcb24db8e6",
    "translatableHash": "sha256:5a6372873c55dd582e52f95225db62553311c2e2638830ebcc58f79ed3b94643",
    "data": {
      "schemaVersion": 1,
      "name": "The Lens of the Outreaching Eye",
      "itemType": "equipment",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "artifact",
        "invested",
        "magical",
        "scrying"
      ],
      "description": "As long as you have the Lens of the Outreaching Eye invested, the Harrowed Realm's impediments to magic don't apply to you, and you gain a +3 item bonus on all checks made to resolve divination effects.\nActivate 10 minutes (command, envision, Interact)\nFrequency once per day\nEffect By peering through the Lens of the Outreaching Eye, for one hour you can treat the Deck of Harrowed Tales as the source of your hearing and vision, no matter the deck's location in the multiverse. You can see in all directions from the deck and hear from it as if using your normal visual senses. You can Dismiss the activation.\nActivate 10 minutes (command, envision, Interact)\nFrequency once per day\nEffect The Lens of the Outreaching Eye casts Pinpoint on the Deck of Harrowed Tales.\nDestruction The Lens of the Outreaching Eye is destroyed if the Deck of Harrowed Tales is destroyed.",
      "bulk": 0.1,
      "price": {},
      "usage": "wornnecklace",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:deck-of-harrowed-tales",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "FfuB86HyfwQyCgSF",
      "slug": "deck-of-harrowed-tales",
      "publicationTitle": "Pathfinder #191: The Destiny War",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/held-items/rune-card.webp"
    },
    "sourceHash": "sha256:0b31492e9a23e8289737bdd3f4a7936d31ec754ff77d3c2da3532473bf13f114",
    "translatableHash": "sha256:014ba198413450da261947e72366c93745e0f1257423f91c81c2010696523894",
    "data": {
      "schemaVersion": 1,
      "name": "Deck of Harrowed Tales",
      "itemType": "equipment",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "artifact",
        "magical"
      ],
      "description": "The Deck of Harrowed Tales is a unique deck connected to a unique demiplane known as the Harrowed Realm.\nActivate 2 envision, Interact\nFrequency Once per day\nEffect If on a plane other than the Harrowed Realm, the deck creates a Gate to the Harrowed Realm.\nDestruction The Deck of Harrowed Tales can be destroyed by completing a mythical series of 54 quests tied to each of the cards within. Only then can the final 55th quest be revealed, upon the completion of which the deck vanishes.",
      "bulk": 0.1,
      "price": {},
      "usage": "held-in-two-hands",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:the-marriage",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "fqVYXvfhHIclVnu2",
      "slug": "the-marriage",
      "publicationTitle": "Pathfinder #191: The Destiny War",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:ede7f12fc08287c90e2d6a513bc7b8ae7ec3575b77525e4e6f80b14501bf8e46",
    "translatableHash": "sha256:4318e70b677a0e0c045d548643336fb4aafff4a5b8a239060f5bfb49b87047d0",
    "data": {
      "schemaVersion": 1,
      "name": "The Marriage",
      "itemType": "equipment",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "artifact",
        "harrow-court",
        "invested",
        "magical"
      ],
      "description": "Suit Crowns (Cha)\nAlignment lawful neutral\nThe Marriage symbolizes a union of body, mind, spirit, or any of the three. When The Marriage is invested, you gain a +2 item bonus to attempts made to Request. This increases to a +3 item bonus at 17th level.\nActivate 2 envision, Interact\nFrequency once per day\nEffect Choose one adjacent willing creature. By brushing The Marriage against their body, you form a magical bond with that creature that persists until you activate The Marriage again to form a bond with a different creature. While the bond persists, you and the other creature can communicate via telepathy to a distance of 120 feet. As long as you and the target are on the same plane of existence and are both alive, you each remain aware of the other's state—you know the other's direction from you, distance from you, and any conditions affecting them. If your bonded target becomes Blinded, Confused, Controlled, Fascinated, Frightened, Slowed, or Stunned, you can use a reaction to attempt to counter the condition affecting the target, which also ends the bond between you and the target. The modifier on this counter check is equal to your class DC – 10. If you fail to counter the condition, that condition also afflicts you, and the bond with the other still ends.",
      "bulk": 0,
      "price": {},
      "usage": "carried",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:the-waxworks",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "HXvS7TIFFcioESqA",
      "slug": "the-waxworks",
      "publicationTitle": "Pathfinder #191: The Destiny War",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:399a323a8af575e26483bdfa943a6c31b795239cd7a1813dfaafabd1bf5d98e9",
    "translatableHash": "sha256:8786327a6967bd889ff6547b1bf43021d9a8e5342505b707259310accba036fe",
    "data": {
      "schemaVersion": 1,
      "name": "The Waxworks",
      "itemType": "equipment",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "artifact",
        "harrow-court",
        "invested",
        "magical"
      ],
      "description": "Suit Shield (Con)\nAlignment chaotic evil\nThe Waxworks represents helplessness and entropy. As long as you have this card invested, you gain a +2 item bonus to saving throws against effects that render you Clumsy, Doomed, Drained, Enfeebled, or Fatigued. The item bonus increases to +3 if you are 20th level.\nActivate 2 envision, Interact\nFrequency once per day\nEffect You cause two 30-foot lines of hot wax to extend out of the card as you present it. The two lines must both start at you and extend in different directions. If you are at least 15th level, you can create a third line, and if you're at least 19th level you can create a fourth line. All creatures in the area must attempt a check (fortitude, against:class-spell, options:area-effect,damaging-effect,inflicts:confused,inflicts:slowed) save against your class DC or spell DC.\nCritical Success The creature is unaffected.\nSuccess The creature takes 2d6 persistent fire damage damage. An affected creature or adjacent ally can reduce both of these values by 1d6 by spending an Interact action to scrape off the goo. Until the damage is reduced to 1d6 per type, the affected creature is also Confused (this is an emotion and mental effect).\nFailure As success, but 4d6 persistent fire damage damage.\nCritical Failure As success, but 6d6 persistent fire damage damage, and the creature's speed is Slowed 1 until the damage is reduced to 1d6 per type.",
      "bulk": 0,
      "price": {},
      "usage": "carried",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:the-tyrant",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "IVGLVPxVorpTM8GL",
      "slug": "the-tyrant",
      "publicationTitle": "Pathfinder #191: The Destiny War",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:7354ae7ccb29d56d5dbd6dbd8c0b60ce3aa5def362475d16d4f475b037f4ce01",
    "translatableHash": "sha256:7b52efd2b187a93c1fa6b29a2d9e98f98e7ee96ced6c60bdb6d8a82c37e674e6",
    "data": {
      "schemaVersion": 1,
      "name": "The Tyrant",
      "itemType": "equipment",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "artifact",
        "harrow-court",
        "invested",
        "magical"
      ],
      "description": "Suit Crowns (Cha)\nAlignment lawful evil\nAs long as you have The Tyrant invested, you gain a +2 item bonus to Intimidation checks made to Demoralize. This bonus increases to +3 if you are at least 17th level.\nActivate 2 envision, Interact\nFrequency once per day\nEffect You hold the card up to your lips and exhale onto it; you cast Dragon Form. The rank of the spell is half your level, rounded down (minimum 6th level).",
      "bulk": 0,
      "price": {},
      "usage": "carried",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:the-bear",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "J0xCt39KNqUunhEr",
      "slug": "the-bear",
      "publicationTitle": "Pathfinder #191: The Destiny War",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:743ece8df4960bdc7c25b01712cc825ccff680c2b680810199149d080eaf030a",
    "translatableHash": "sha256:77a374c4ff9837dac2906cb057f5c0498b5b07289288c32f0fdca827902b1dcc",
    "data": {
      "schemaVersion": 1,
      "name": "The Bear",
      "itemType": "equipment",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "artifact",
        "harrow-court",
        "invested",
        "magical"
      ],
      "description": "Suit Hammers (Str)\nAlignment neutral\nThe Bear represents brute force applied to solve unusual problems. As long as you have The Bear invested, you can use Athletics checks to Tumble Through or Squeeze.\nActivate 1 Interact\nFrequency once per minute\nRequirements Your last action was a successful melee Strike\nEffect You attempt to Grapple, Shove, or Trip the creature you hit with the successful Strike, even if you have no hand free. You gain a +2 status bonus to your check. If you Grapple using a weapon, you can Strike with the weapon only if it has the grapple trait and you Strike the Grabbed target, or if you cease Grabbing with the weapon. After the effect of the initial Grapple ends, you can't keep a target grabbed with a weapon that lacks the grapple trait. The status bonus increases to +3 if you're at least 17th level.",
      "bulk": 0.1,
      "price": {},
      "usage": "carried",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:the-lost",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "mFweSeoHRIiAjcqz",
      "slug": "the-lost",
      "publicationTitle": "Pathfinder #191: The Destiny War",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:c5ad592d695292a050ac53f88d418e765ffc27eadbd68b1e706b3c939cd5ad53",
    "translatableHash": "sha256:7880803a90dd91a8fb948280bebdffcc6e4d1a8ed81d647ec284f5be0e43dd0e",
    "data": {
      "schemaVersion": 1,
      "name": "The Lost",
      "itemType": "equipment",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "artifact",
        "harrow-court",
        "invested",
        "magical"
      ],
      "description": "Suit Stars (Wis)\nAlignment chaotic evil\nThe Lost symbolizes loss of identity and a life filled with emptiness. As long as The Lost is invested, you gain resistance to mental damage equal to your level.\nActivate r envision\nFrequency once per day\nTrigger you fail a saving throw against a mental effect\nEffect You reflexively flood your mind with emptiness, stripping away any element of identity that the mental effect might be trying to affect. Increase the result of your failed saving throw by one degree of success.",
      "bulk": 0,
      "price": {},
      "usage": "carried",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:the-keep",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "nJSlIxnU1s9H83NK",
      "slug": "the-keep",
      "publicationTitle": "Pathfinder #191: The Destiny War",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:55e2d6a040902d62b7b25f29095e9793ff9fcc3961e4a77c2a8e3055cf40710e",
    "translatableHash": "sha256:cb6a02f26219838ea43da50ff80ec472eef17dea0fd7ec03665ccb4c6e7bb49b",
    "data": {
      "schemaVersion": 1,
      "name": "The Keep",
      "itemType": "equipment",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "artifact",
        "harrow-court",
        "invested",
        "magical"
      ],
      "description": "Suit Hammers (Str)\nAlignment neutral good\nThe Keep represents steadfastness and being unshakable to threats. As long as The Keep is invested, you gain a +2 item bonus to saving throws against fear effects. Whenever you become Frightened, reduce the condition value by 1 (to a minimum of 0). If you are 20th level, the item bonus increases to +3.\nActivate 2 envision, Interact\nFrequency once per day\nEffect You cast Planar Palace. The rank of the spell is one-half your level, rounded down (minimum 7th level), and the interior of the mansion appears to be the inside of a resplendent keep made of stone.",
      "bulk": 0,
      "price": {},
      "usage": "carried",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:the-hidden-truth",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "oelHQXS1g7Xk7xKo",
      "slug": "the-hidden-truth",
      "publicationTitle": "Pathfinder #191: The Destiny War",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:5dd11f9b24ffed75f8b070915ba2c2f7217adae6d9dd603112f5ae6087d829e0",
    "translatableHash": "sha256:3a1527bbb1bafcd5ebac9f578d18da59fefb23c25d2a7b72b1a5c78f0a9d96f3",
    "data": {
      "schemaVersion": 1,
      "name": "The Hidden Truth",
      "itemType": "equipment",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "artifact",
        "harrow-court",
        "invested",
        "magical"
      ],
      "description": "Suit Books (Int)\nAlignment lawful good\nThe Hidden Truth represents the act of observing something beyond the obvious to gain obscure lore. As long as this card is invested, you gain a +2 item bonus to Lore checks made to Recall Knowledge, and to all checks made to Research while using the Research subsystem from the Gamemastery Guide. This increases to a +3 bonus if you are at least 17th level.\nActivate 2 envision, Interact\nFrequency once per day\nEffect You cast Truesight. The rank of the spell is one-half your level, rounded down (minimum 6th level). If you're at least 17th-level, you can affect up to three adjacent willing targets with this spell at the same time as you cast it.",
      "bulk": 0,
      "price": {},
      "usage": "carried",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:the-forge",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "ogE04B74e90cyCUz",
      "slug": "the-forge",
      "publicationTitle": "Pathfinder #191: The Destiny War",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:d178e182fc9fd68fd1390d3ef30e1f03df3144886f47f48827b81fb5ab40e6d7",
    "translatableHash": "sha256:e0da96b73cefb585bfe0ffcc40aebbe63b4dd8a402129593447dd19e77cd1b64",
    "data": {
      "schemaVersion": 1,
      "name": "The Forge",
      "itemType": "equipment",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "artifact",
        "harrow-court",
        "invested",
        "magical"
      ],
      "description": "Suit Hammers (Str)\nAlignment lawful neutral\nThe Forge denotes strength through diversity. As long as you have The Forge invested, you can carry more than normal—increase your maximum and encumbered Bulk limits by 2.\nActivate 2 envision, Interact\nFrequency once per day\nEffect You pass the card over an adjacent Broken (but not destroyed) object (magical or otherwise) of up to 4 Bulk, and restore the object to its full Hit Point total, removing the broken condition in the process.",
      "bulk": 0,
      "price": {},
      "usage": "carried",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:the-desert",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "xdNAAIVFQsAEiXmL",
      "slug": "the-desert",
      "publicationTitle": "Pathfinder #191: The Destiny War",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:93546b92ac66ff982d88187210fa8539a2fee877668d0b7aa96b151bb1304adb",
    "translatableHash": "sha256:d2f2763f0a44e82f30d0d308793c4cb5e075f9cc2b7fb44d5bb520db449baa72",
    "data": {
      "schemaVersion": 1,
      "name": "The Desert",
      "itemType": "equipment",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "artifact",
        "harrow-court",
        "invested",
        "magical"
      ],
      "description": "Suit Shield (Con)\nAlignment chaotic good\nThe Desert signifies enduring passage through trying circumstances. As long as The Desert is invested, you are immune to the effects of temperatures ranging from extreme cold to extreme heat, and can hold your breath and go without food and water for twice as long as normal.\nActivate 2 envision, Interact\nFrequency once per day\nEffect You wave the card in the air to create desert winds that blast sand so scouring it strips flesh from bone. The sand created by this effect vanishes an instant later, but the effects on those caught in the area linger. Creatures in a 60-foot cone take 7d6 piercing damage (with a check (fortitude, against:class-spell, basic, options:area-effect) save equal to your class DC or spell DC). A creature who fails this save also becomes Fatigued and enfeebled for 1 minute, and a creature who critically fails this save becomes Enfeebled 2 for 1 minute and fatigued until they get a night's rest (or the fatigue is removed by other means). The damage increases to 8d6 piercing damage if you're at least 15th level, to 9d6 piercing damage if you're at least 17th level, and to 10d6 piercing damage if you're at least 19th level.",
      "bulk": 0,
      "price": {},
      "usage": "carried",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:the-survivor",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "XshcAhe0ZbhpqIq0",
      "slug": "the-survivor",
      "publicationTitle": "Pathfinder #191: The Destiny War",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:8863ae8a2e97dad35204d469990d49fd84d7b6e4a1d0e86c05d28dd9eec70611",
    "translatableHash": "sha256:ae703e771cb5d2953a4e7df636188d62f4d0de8167d8cd4a67fb7cbfb3208347",
    "data": {
      "schemaVersion": 1,
      "name": "The Survivor",
      "itemType": "equipment",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "artifact",
        "harrow-court",
        "invested",
        "magical"
      ],
      "description": "Suit Shields (Con)\nAlignment neutral good\nThe Survivor represents rebirth through ordeal. When you have The Survivor invested, you gain Diehard as a bonus feat. If you already possess this feat, you gain a +2 item bonus to all recovery checks. This item bonus increases to +3 if you are at least 17th-level.\nActivate f envision\nFrequency once per day\nTrigger you are reduced to 0 Hit Points\nEffect You somehow manage to survive what could have been a fatal blow. Instead of being reduced to 0 Hit Points, you drop to 1 Hit Point instead and immediately restore an additional 4d8+16 healing Hit Points. The amount of Hit Point restored increases to 5d8+20 healing if you are at least 15th level, 6d8+24 healing if you're at least 17th level, and 7d8+28 healing if you're at least 19th level.",
      "bulk": 0,
      "price": {},
      "usage": "carried",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:sash-of-books",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "bQ68sHmEATwgmiyN",
      "slug": "sash-of-books",
      "publicationTitle": "Pathfinder #192: Worst of All Possible Worlds",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/other-worn-items/clandestine-cloak.webp"
    },
    "sourceHash": "sha256:a6916adde9d1abbcf8cd7a0aa182452cc16863989c34b311be788262019c6654",
    "translatableHash": "sha256:4c160f39b30eec2465a90ffa7aa152ae927117a5d976cb078f0111e47b343de7",
    "data": {
      "schemaVersion": 1,
      "name": "Sash of Books",
      "itemType": "equipment",
      "level": 17,
      "rarity": "rare",
      "traits": [
        "apex",
        "invested",
        "magical"
      ],
      "description": "This elegant black sash features stylized crimson books embroidered at either end and a set of simple tassels. While wearing the sash, you feel as if you have a better understanding of the people and life around you. You gain a +3 item bonus to Society checks. When you invest the sash, you either increase your Intelligence score by 2 or increase it to 18, whichever would give you a higher score.\nActivate 1 envision\nFrequency once per minute\nEffect You focus on a creature you can see and attempt to gain an instinctual understanding of the creature. You attempt a check to Recall Knowledge about the creature, rolling twice and taking the higher result. If you roll a critical failure on this check, you get a failure instead. Regardless of the result, you gain a +1 circumstance bonus to attack rolls against the creature and to your AC and saving throws against attacks and effects from the creature for 1 minute. This bonus increases to +2 if you critically succeeded your check to Recall Knowledge.\nEffect: Sash of Books (Recall Knowledge)\nActivate 2 command, envision\nFrequency once per day\nEffect You become keenly aware of your surroundings and become able to anticipate dangers. You gain the effects of Foresight.",
      "bulk": 0.1,
      "price": {
        "gp": 15000
      },
      "usage": "worngarment",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:cowl-of-keys",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Fc8uMYwTDQkeyeOF",
      "slug": "cowl-of-keys",
      "publicationTitle": "Pathfinder #192: Worst of All Possible Worlds",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:7ea794c2c6456455bb02bec01fe559271e9defc66e44fd72c2a72d5ba30bab09",
    "translatableHash": "sha256:d6c6f4da84d82ec8f34384a90e6f58fa6c3c482048d260550490f77dc088e6a4",
    "data": {
      "schemaVersion": 1,
      "name": "Cowl of Keys",
      "itemType": "equipment",
      "level": 17,
      "rarity": "rare",
      "traits": [
        "apex",
        "invested",
        "magical"
      ],
      "description": "This simple, tattered cloak is a faded green and features small, stylized keys sewn throughout its length. While wearing the cloak, you fade into the shadows and gain a +3 item bonus to Stealth checks. When you invest the cloak, you either increase your Dexterity score by 2 or increase it to 18, whichever would give you a higher score.\nActivate 1 Interact\nEffect You brush your hand against the cloak and your fingers transform into picks, tension wrenches, skeleton keys, and any other tools, providing you with a full set of Thieves' Tools. This transformation doesn't otherwise hamper the normal use of your fingers or hands. These tools never break when you critically fail your check to Pick a Lock. You can Activate the cloak again to revert your fingers to normal.\nActivate 2 envision, Interact\nFrequency once per day\nEffect You place your hand against a wall, floor, or ceiling. You create a magical doorway within the surface that a creature can move through, as if the door had always been there. The doorway can penetrate up to 10 feet of material; particularly thick material, such as heavy stone walls, can cause this effect to fail, expending its use for the day. You can use an Interact action on the door to remove it from the surface and return it to its previous shape.",
      "bulk": 0.1,
      "price": {
        "gp": 15000
      },
      "usage": "worncloak",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:bangles-of-crowns",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "n6ZmkKhxd0iuS1RG",
      "slug": "bangles-of-crowns",
      "publicationTitle": "Pathfinder #192: Worst of All Possible Worlds",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:424462c8ca8bd1d24cc236c4bf1353c0671b6360a48452d857e80fbfe439b70a",
    "translatableHash": "sha256:f93314eaa81b6351226ec60d5e09e63a96b5adfecec9b260d80697a6f71a11a8",
    "data": {
      "schemaVersion": 1,
      "name": "Bangles of Crowns",
      "itemType": "equipment",
      "level": 17,
      "rarity": "rare",
      "traits": [
        "apex",
        "invested",
        "magical"
      ],
      "description": "This pair of silver bangles is engraved with images of crowns. While wearing the bangles, you are filled with an overwhelming sense of assertiveness and a more commanding presence. You gain a +3 item bonus to Intimidation checks. When you invest the bangles, you either increase your Charisma score by 2 or increase it to 18, whichever is higher.\nActivate 2 command, envision\nFrequency once per hour\nEffect You cast a 3rd-rank Fear spell (check (will, dc:38, traits:emotion,fear,mental,spell)).\nActivate r envision\nFrequency once per hour\nTrigger An enemy within 60 feet becomes Frightened\nEffect You become emboldened by your enemy's fear. You gain a +1 circumstance bonus to checks against the triggering creature for 1 round. You also gain 15 temporary Hit Points. You lose any remaining temporary Hit Points after 1 minute.",
      "bulk": 0.1,
      "price": {
        "gp": 15000
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:scapular-of-shields",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Q8cPvvyxbFYedlc8",
      "slug": "scapular-of-shields",
      "publicationTitle": "Pathfinder #192: Worst of All Possible Worlds",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/other-worn-items/cloak-of-the-bat.webp"
    },
    "sourceHash": "sha256:db894510008f2a41412fb12152ab6515bba921781a5828190ddcb61c6338e128",
    "translatableHash": "sha256:0e19deaa14e883a663932da947aebf58ad3d131e17552929fa344155a73b4617",
    "data": {
      "schemaVersion": 1,
      "name": "Scapular of Shields",
      "itemType": "equipment",
      "level": 17,
      "rarity": "rare",
      "traits": [
        "apex",
        "invested",
        "magical"
      ],
      "description": "This fine scapular features the image of an ornate shield. While wearing the cloak, you feel protected and capable of withstanding even the deadliest blows. Each time you're critically hit while wearing the scapular, attempt a check (flat, dc:17, showDC:all). On a success, it becomes a normal hit. When you invest the scapular, you either increase your Constitution score by 2 or increase it to 18, whichever would give you a higher score.\nActivate r envision\nFrequency once per minute\nTrigger You're critically hit with an attack\nEffect The shield on your scapular glows with light, helping reduce the effectiveness of the attack. You take normal damage from the triggering attack as if the attack were a normal hit instead. Other effects that trigger with critical hits such as the deadly weapon trait, additional conditions, and so on still occur.\nActivate r envision\nFrequency once per day\nTrigger You would take damage from an attack\nEffect The shield on your scapular animates and intercedes on the attack. You gain 20 resistance to all damage against the triggering damage.",
      "bulk": 0.1,
      "price": {
        "gp": 15000
      },
      "usage": "worngarment",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:bracers-of-hammers",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "tIta1GNQK6sSWnr6",
      "slug": "bracers-of-hammers",
      "publicationTitle": "Pathfinder #192: Worst of All Possible Worlds",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:a4b5a5f3581d863dc6663926efda63325b0e9e39170fd86b52a1b234ea8200d0",
    "translatableHash": "sha256:2447c08da6022ff5bffbf19b5ec47f659417271ece52a3413ae5f6d37836c36e",
    "data": {
      "schemaVersion": 1,
      "name": "Bracers of Hammers",
      "itemType": "equipment",
      "level": 17,
      "rarity": "rare",
      "traits": [
        "apex",
        "invested",
        "magical"
      ],
      "description": "These brilliant golden bracers feature a hammer motif as part of their engravings. While wearing them, your body surges with strength and you gain a +3 item bonus to Athletics checks and a +1 circumstance bonus to Athletics checks to Disarm and Trip. If you succeed, but not critically succeed, at your check to Disarm a creature, the effects of your check last until the start of your next turn, instead until the start of the target's turn. If you succeed at a check to Trip a creature, it takes 1d6 bludgeoning damage or 4d6 bludgeoning damage on a critical success. When you invest the bracers, you either increase your Strength modifier by 1 or increase it to +4, whichever would give you a higher score.\nActivate 2 Interact\nFrequency once per day\nEffect You reach for a foe and attempt to topple them with a powerful flip. Attempt an Athletics check to Trip a creature within reach. On a success, the creature is knocked Prone and takes 10d6 bludgeoning damage (double on a critical hit). If you knock the creature prone, it must also attempt a check (reflex, dc:35) save. On a failure, it drops any items it's holding.",
      "bulk": 0.1,
      "price": {
        "gp": 15000
      },
      "usage": "wornbracers",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:coronet-of-stars",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "urneQVi0N613KnwP",
      "slug": "coronet-of-stars",
      "publicationTitle": "Pathfinder #192: Worst of All Possible Worlds",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:4d50109206d5eac5630b6b2451baeccb0eb4b2ed70941e9b440c4d500bfde8e1",
    "translatableHash": "sha256:e292e986f521b4debad2209ef376a39676460ac98dfadcec8e0659cee5de6c24",
    "data": {
      "schemaVersion": 1,
      "name": "Coronet of Stars",
      "itemType": "equipment",
      "level": 17,
      "rarity": "rare",
      "traits": [
        "apex",
        "invested",
        "magical"
      ],
      "description": "This short golden crown bears a number of gems, each placed in the center of an engraving of a star. While wearing the crown, you are overcome with a nurturing instinct and understand the best ways to help others. You gain a +3 item bonus to Medicine checks. When you invest the crown, you either increase your Wisdom score by 2 or increase it to 18, whichever would give you a higher score.\nActivate r envision\nFrequency once per day\nTrigger A living creature within 60 feet would die\nEffect You reach out to the creature with a lifeline. The triggering creature receives the effects of Breath of Life, except they recover 7d8 healing Hit Points.\nActivate r command\nFrequency once per hour\nTrigger An ally within 60 feet fails a non-secret check\nEffect You call out to your ally and offer a reassurance. The triggering ally rerolls the failed check and takes the higher result. This is a fortune effect.",
      "bulk": 0.1,
      "price": {
        "gp": 15000
      },
      "usage": "wornheadwear",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:the-peacock",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "1qlJqqsVhocRLtS5",
      "slug": "the-peacock",
      "publicationTitle": "Pathfinder #192: Worst of All Possible Worlds",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:eb1cc060ed511bb0278d8a54c9220e2d683d508ff4a2c8e6b1b60211af3478c0",
    "translatableHash": "sha256:9fae1db6099dba784dd874b41c6a1377e181c2a086a500ecb44e974965f71807",
    "data": {
      "schemaVersion": 1,
      "name": "The Peacock",
      "itemType": "equipment",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "artifact",
        "harrow-court",
        "invested",
        "magical"
      ],
      "description": "Suit Keys (Dex)\nAlignment neutral\nThe Peacock represents a sudden shift in attitude or societal change, often represented by a colorful but ugly creature that serves as a reminder as to what happens if something beautiful refuses to change with the times. As long as you have The Peacock invested, you can react to sudden changes more swiftly, and gain Incredible Initiative as a bonus feat. If you already possess this feat, you gain a +2 item bonus on all initiative checks. This item bonus increases to +3 if you are at least 17th level.\nActivate 2 envision, Interact\nFrequency once per day\nEffect You freeze your appearance as it exists in this very moment by tapping The Peacock to your lips. You cast Mountain Resilience on yourself, but with a duration of 30 minutes instead of 20 minutes. The rank of the spell is one-half your level rounded down (minimum 6th level).",
      "bulk": 0,
      "price": {},
      "usage": "carried",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:the-queen-mother",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "2nKh3kUMuq8I9rnm",
      "slug": "the-queen-mother",
      "publicationTitle": "Pathfinder #192: Worst of All Possible Worlds",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:182284bdb78adc5d0e954f4866909bc3758e515d7e4ed627612686a34c9eabbe",
    "translatableHash": "sha256:c6db8ad91253e58496dde9e1c8ee4f7f38268db1e31af9461c672d026a50afae",
    "data": {
      "schemaVersion": 1,
      "name": "The Queen Mother",
      "itemType": "equipment",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "artifact",
        "harrow-court",
        "invested",
        "magical"
      ],
      "description": "Suit Stars (Wis)\nAlignment lawful neutral\nThe Queen Mother is knowledge manifest, but she only shares this knowledge with loyal subjects. When you first invest The Queen Mother, choose a Lore skill in which you have no proficiency. As long as you continue to have the Queen Mother invested, you treat that Lore skill as if your proficiency rank with it were a master. If you're at least 15th level, you treat that Lore skill as if you were legendary with it instead. You can change your selected Lore once per day as part of your daily preparations, as long as you have The Queen Mother invested.\nActivate 3 command, envision, Interact\nFrequency once per day\nEffect You call upon a loyal subject to aid you by holding The Queen Mother out and asking her to send help. You cast Summon Animal or Summon Construct, but with a range of 90 feet. The rank of the spell is one-half your level rounded down.",
      "bulk": 0,
      "price": {},
      "usage": "carried",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:the-wanderer",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "8wjCvABdXIYQJ7bI",
      "slug": "the-wanderer",
      "publicationTitle": "Pathfinder #192: Worst of All Possible Worlds",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:8640c4adaf1947e152406fa146317bca26f156817a32334b0e39bfcbfe849f0e",
    "translatableHash": "sha256:9a2ce2ff9f087097a714d2fec85fbe8df1cefe3382423aa863a02820b1b1c3e9",
    "data": {
      "schemaVersion": 1,
      "name": "The Wanderer",
      "itemType": "equipment",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "artifact",
        "harrow-court",
        "invested",
        "magical"
      ],
      "description": "Suit Books (Int)\nAlignment neutral good\nThe Wanderer represents the art of collecting and finding the value in even the simplest items. As long as The Wanderer is invested, you don't trigger reactions when you Interact to draw or use an item.\nActivate 2 envision, Interact\nFrequency once per day\nEffect You do a quick bit of legerdemain with The Wanderer. As the card appears to disappear from your hand, it's immediately replaced by an object of Light bulk in your hand. The object can be any Common permanent magic item, weapon, or piece of gear of a level no higher than your level –2. The item exists for 1 minute, or until it is no longer attended by you, at which point the item vanishes and The Wanderer reappears in your possession.",
      "bulk": 0,
      "price": {},
      "usage": "carried",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:the-winged-serpent",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "9JfZz5TpX0Kt6XdE",
      "slug": "the-winged-serpent",
      "publicationTitle": "Pathfinder #192: Worst of All Possible Worlds",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:f90545ac99cc8d902116bdb269d6c2be268fa21d7806da5c15bd70fed401d324",
    "translatableHash": "sha256:8f45f11e5a13351b882b68f960b45315378bb4fbe402f171ddac7b3e8223dbb2",
    "data": {
      "schemaVersion": 1,
      "name": "The Winged Serpent",
      "itemType": "equipment",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "artifact",
        "harrow-court",
        "invested",
        "magical"
      ],
      "description": "Suit Stars (Wis)\nAlignment lawful good\nThe Winged Serpent represents the wisdom of knowing when to act. As long as you have The Winged Serpent invested, you gain a +2 item bonus on initiative checks made with sight-based Perception checks. This bonus increases to +3 if you are 17th level.\nActivate 2 envision, Interact\nFrequency once per day\nEffect You swipe The Winged Serpent across your eyes to gain insight on when to strike. You cast Foresight on yourself, but the duration is only 10 minutes. If you're at least 17th level, the duration extends to 1 hour and you can cast foresight on another creature by touch. The level of this spell is one-half your level rounded down (minimum 9th).",
      "bulk": 0,
      "price": {},
      "usage": "carried",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:the-unicorn",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "9RxwktkuKHF9ud2L",
      "slug": "the-unicorn",
      "publicationTitle": "Pathfinder #192: Worst of All Possible Worlds",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:6f7ff91082848e5a7e979562e0dd7d41242a804d8c46656c78b88e1362abbf15",
    "translatableHash": "sha256:dd64c2671f13161eb9feecda9ebdc5fbd8c2e4f6c45ba8cc76e439c76a273978",
    "data": {
      "schemaVersion": 1,
      "name": "The Unicorn",
      "itemType": "equipment",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "artifact",
        "harrow-court",
        "invested",
        "magical"
      ],
      "description": "Suit Crowns (Cha)\nAlignment chaotic good\nThe Unicorn represents finding what one seeks. As long as you have The Unicorn invested, you gain a +2 item bonus on Perception checks to Seek. This increases to a +3 item bonus if you're at least 17th level.\nActivate 2 envision, Interact\nFrequency once per day\nEffect You pass The Unicorn across an adjacent closed container and then open the container. Inside, you'll find a Common consumable alchemical or magic item you need to solve a problem or deal with a situation close at hand. For example, if you're badly wounded, you might find a greater healing potion. If you've been poisoned, you could discover a panacea. If you're faced with a written clue in a language you don't understand, the container might hold a comprehension elixir. The GM always decides what consumable item is discovered, and it must be equal to or lower than your level. If the consumable isn't used within 1 minute of being discovered, the item vanishes. If there's no appropriate item to solve your situation, the GM can rule that no object is found; in this case, the daily use of The Unicorn is not expended.",
      "bulk": 0,
      "price": {},
      "usage": "carried",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:the-joke",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "eYhUB8qyBKsmJDDf",
      "slug": "the-joke",
      "publicationTitle": "Pathfinder #192: Worst of All Possible Worlds",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:ca72314e261eb15dee1252024da1600a79909dda9b0ba93570591bea2c9d4f89",
    "translatableHash": "sha256:b27ddac68837993c08f9f5a5ef5ba38b16a63cced3418689610bec91a62d271f",
    "data": {
      "schemaVersion": 1,
      "name": "The Joke",
      "itemType": "equipment",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "artifact",
        "harrow-court",
        "invested",
        "magical"
      ],
      "description": "Suit Books (Int)\nAlignment chaotic good\nThe Joke represents solving a problem not with strength, but with cleverness or artifice. As long as you have The Joke invested, you can attempt an appropriate Lore check instead of an Athletics check made to Climb, Force Open, Grapple, High Jump, Long Jump, or Swim. For example, you could make a Mountain Lore check to climb a cliff in the mountains, or Sailing Lore check to climb the rigging on a ship.\nActivate 2 envision, Interact\nFrequency once per day\nEffect You perform a quick but amusing card trick with The Joke meant to distract others. You cast Laughing Fit on up to 10 creatures in range of the spell. The rank of the spell is one-half your level rounded down (minimum 6th level), and the save DC is your class DC (check (will, against:class-spell, traits:spell,emotion,enchantment,mental, overrideTraits:true)).",
      "bulk": 0,
      "price": {},
      "usage": "carried",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:the-twin",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "JwglAlCKM7FRRUxq",
      "slug": "the-twin",
      "publicationTitle": "Pathfinder #192: Worst of All Possible Worlds",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:a94c515706474443854b0edd795a432d5e46993fa55065f2c1b12df9249ab538",
    "translatableHash": "sha256:d9888a0b13b8d9a184f309e97975d229972531e6b6d7505b7fd31d73c038165d",
    "data": {
      "schemaVersion": 1,
      "name": "The Twin",
      "itemType": "equipment",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "artifact",
        "harrow-court",
        "illusion",
        "invested",
        "magical"
      ],
      "description": "Suit Crowns (Cha)\nAlignment neutral\nThe Twin represents a duality of purpose or identity. As long as you have The Twin invested, it helps to defend you against damage to your mind or your body. When you invest The Twin, the card's artwork changes to look like you, and as you are exposed to afflictions, your card twin helps to protect you by absorbing them into itself. You gain a +1 item bonus to saves against curses, diseases, poison, and transmutation effects. This bonus increases to +2 if you're at least 14th level, and to +3 if you're 20th level. As you resist these afflictions, they begin to manifest on one of the twins depicted on the card art.\nActivate 3 envision, Interact\nFrequency once per day\nEffect You twirl The Twin between your fingers and create a shadowy duplicate of yourself that mirrors your actions. The duplicate appears adjacent to you and has the same statistics as you do when you activate the card. You can sustain this effect for up to one minute. When you sustain the effect, your twin gains 2 actions. It always acts immediately after your turn, and must use identical actions to the ones you used, in exactly the same order. However, it can use the actions differently, such as Striding to a different position or selecting a different target for a Strike. If the twin is unable to mimic an action, it attempts the action without result and the action is wasted. The duplicate can't use any actions that can be used only a limited number of times per day (including casting any spell other than a cantrip). The duplicate isn't truly alive and can't be healed in any way. If the duplicate ever reaches 0 Hit Points, it is instantly destroyed and the effect immediately ends, and you take 10d6 mental damage (check (will, dc:38, basic) save).",
      "bulk": 0,
      "price": {},
      "usage": "carried",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:the-avalanche",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "JX3jtgTsVORseYKz",
      "slug": "the-avalanche",
      "publicationTitle": "Pathfinder #192: Worst of All Possible Worlds",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:0d355a2295245b41b9f8f9e849dfb2f0968f8cc099865221ef4e442292e6421b",
    "translatableHash": "sha256:d055b7d232f6164dc95cfacf0594822eba6cc15b4fd0d8152e464bad79227ef9",
    "data": {
      "schemaVersion": 1,
      "name": "The Avalanche",
      "itemType": "equipment",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "artifact",
        "harrow-court",
        "invested",
        "magical"
      ],
      "description": "Suit Keys (Dex)\nAlignment lawful evil\nThe Avalanche represents unmitigated disasters, destruction that overruns all in its path. As long as The Avalanche is invested, you gain a +1 item bonus to damage rolls with Strikes that inflict bludgeoning damage. This increases to a +2 item bonus if you're at least 14th level, and a +3 item bonus if you're at least 18th level.\nActivate f envision, Interact\nFrequency once per day\nEffect You wave the card in the air and hurl staggering volumes of ice, snow, and rocks out into the world. This magical avalanche buries your foes. Choose up to 4 creatures within 60 feet, each of whom must attempt a check (reflex, against:class-spell) save against your class DC or spell DC. Regardless of their saving throw, the creature's space becomes greater difficult terrain from the mounds of ice, snow, and rubble.\nCritical Success The creature is unaffected.\nSuccess The creature takes 5d8 bludgeoning damage and is pushed into an adjacent space of its choice.\nFailure The creature takes 10d8 bludgeoning damage, is knocked Prone, and is Restrained.\nCritical Failure The creature takes 20d8 bludgeoning damage, is knocked prone, and is Immobilized.",
      "bulk": 0,
      "price": {},
      "usage": "carried",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:the-fool",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "kd4iBsB3pLkc0Lfc",
      "slug": "the-fool",
      "publicationTitle": "Pathfinder #192: Worst of All Possible Worlds",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:10d3b3e4dd4289eb93d0dff623ea8e796374f6be4f839f071bd20047142c6459",
    "translatableHash": "sha256:4bd6ec957c3fc640f6b2532a01b42c4a512171f2d80ce3168467ed8ad57f5925",
    "data": {
      "schemaVersion": 1,
      "name": "The Fool",
      "itemType": "equipment",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "artifact",
        "harrow-court",
        "invested",
        "magical"
      ],
      "description": "Suit Books (Int)\nAlignment neutral evil\nThe Fool represents grave foolishness, grand naivete, and exceptional greed. As long as you have The Fool invested, anytime you gain the Stupefied condition, reduce its value by 1. You also gain a +2 item bonus to all saving throws against effects that cause the stupefied condition. This bonus increases to +3 if you're at least 17th level.\nActivate 2 envision, Interact (mental)\nFrequency once per day\nEffect You display The Fool to your foes in a clumsy, awkward, and embarrassing way. Choose up to four creatures within 60 feet. These four creatures must attempt a check (will, against:class-spell) save against your class DC or spell DC.\nCritical Success The creature is unaffected.\nSuccess The creature is distracted by your antics and is Stupefied 1 until the start of your next turn.\nFailure The creature is Stupefied 2.\nCritical Failure The creature is Stupefied 3. In addition, for 1 minute, the creature is Confused.",
      "bulk": 0,
      "price": {},
      "usage": "carried",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:the-inquisitor",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "kLmUKkch8meabELi",
      "slug": "the-inquisitor",
      "publicationTitle": "Pathfinder #192: Worst of All Possible Worlds",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:bc06adf657f07e410a8c3426537c0d31b43d99aad6f9f2a4e4ebdebcdd20c704",
    "translatableHash": "sha256:03014f26116c37ead7b64d1edf37546413f75c8750ffaf32d2f7b17f7a6b9fa7",
    "data": {
      "schemaVersion": 1,
      "name": "The Inquisitor",
      "itemType": "equipment",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "artifact",
        "harrow-court",
        "invested",
        "magical"
      ],
      "description": "Suit Books (Int)\nAlignment lawful neutral\nThe Inquisitor represents the search for the truth and the power to see through lies. As long as you have The Inquisitor invested, the results of your Perception Checks to Sense Motive against targets that are equal to or lower than your level are increased by one degree of success. Against targets that are higher level than you, you instead gain a +2 item bonus to your check. This bonus increases to +3 if you are at least 17th level.\nActivate 2 envision, Interact (linguistic, mental)\nFrequency once per day\nEffect You swipe the card over the head of an adjacent creature to delve into their thoughts. You cast Mind Probe, but as a two-action spell rather than one that takes 1 minute to cast. The rank of the spell is one-half your level, rounded down (minimum 5th level), and the save DC is your class DC or spell DC (check (will, against:class-spell, traits:spell,divination,linguistic,mental, overrideTraits:true)).",
      "bulk": 0,
      "price": {},
      "usage": "carried",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:the-betrayal",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "MXDA5rDemvT1O9vY",
      "slug": "the-betrayal",
      "publicationTitle": "Pathfinder #192: Worst of All Possible Worlds",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:b161a7e8c600939b7e84f6ba3bda0889945735df22e8eca5acc3924d4360aabc",
    "translatableHash": "sha256:d6b60de245f417dfe9f1830507fad79777d9f06b30060b242b4eaf045645391e",
    "data": {
      "schemaVersion": 1,
      "name": "The Betrayal",
      "itemType": "equipment",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "artifact",
        "harrow-court",
        "invested",
        "magical"
      ],
      "description": "Suit Crowns (Cha)\nAlignment neutral evil\nThe Betrayal represents selfishness and envy, twisting outcomes toward unfavorable or even devastating results. As long as The Betrayal is invested, you become more adept at hiding who you really are and tricking targets into positions of vulnerability. You gain a +2 item bonus on Deception checks made to Impersonate or Feint. This increases to a +3 bonus if you are at least 17th level.\nActivate f envision\nFrequency once per day\nEffect You turn the tables on your foes, bringing one of them into your ranks and compelling them to attack their allies. You cast Dominate on a creature, but can only issue commands to attack or otherwise harm, betray, or inconvenience its allies. The rank of the spell is one-half your level, rounded down (minimum 6th level), and the save DC is your class DC (check (will, against:class, traits:incapacitation,mental,spell)).",
      "bulk": 0,
      "price": {},
      "usage": "carried",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:the-eclipse",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "qPpfc0srQodOiEga",
      "slug": "the-eclipse",
      "publicationTitle": "Pathfinder #192: Worst of All Possible Worlds",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:069afe3d12ade44ba8b958b35af3d00a85994b342e175f5368842c8bc18e68f5",
    "translatableHash": "sha256:94665ea92bdd62773caee39a06f30ed216b393118d902712ad58c25464c84258",
    "data": {
      "schemaVersion": 1,
      "name": "The Eclipse",
      "itemType": "equipment",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "artifact",
        "harrow-court",
        "invested",
        "magical"
      ],
      "description": "Suit Stars (Wis)\nAlignment lawful evil\nThe Eclipse represents self-doubt and loss of purpose, as well as a loss of faith. As long as The Eclipse is invested, you gain a +2 item bonus on Religion checks. This increases to a +3 bonus if you are at least 17th level.\nActivate r envision (mental)\nFrequency once per day\nTrigger A foe that you're aware of and who is within 60 feet achieves a critical success on a saving throw or a Strike\nEffect You produce an aura of doubt that overwhelms all foes in a 30-foot emanation and reduces bright light in that area to dim light, as if the region were under an eclipse. The triggering creature's critical success is reduced to a regular success. All further saving throws or Strikes attempted by enemies within the emanation suffer a –2 item penalty; saving throws or Strikes attempted by the triggering enemy suffer a –3 penalty instead. You can sustain this aura of doubt for up to 1 minute.",
      "bulk": 0,
      "price": {},
      "usage": "carried",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:the-trader",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "QuGCW9Q4n56VORV6",
      "slug": "the-trader",
      "publicationTitle": "Pathfinder #192: Worst of All Possible Worlds",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:f0c67cc6ca8f2c378db1f7bb6fb7c16ff69b074b29966adb4f3605440893edfc",
    "translatableHash": "sha256:6b7243ad9d5ebbcd1551184d90752feb682d346baa04cef1b746ca01aa799509",
    "data": {
      "schemaVersion": 1,
      "name": "The Trader",
      "itemType": "equipment",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "artifact",
        "harrow-court",
        "invested",
        "magical"
      ],
      "description": "Suit Books (Int)\nAlignment neutral\nThe Trader represents trades and exchanges of information. As long as you have The Trader invested, you gain a +2 item bonus to Diplomacy checks made to Gather Information. This increases to a +3 item bonus if you are at least 17th level.\nActivate 2 envision, Interact\nFrequency once per day\nEffect The Trader allows you to make an exchange with yourself. Press the card to your brow, and then select two skills. Your proficiency rank with those two skills swaps for 1 hour. For example, if you were a master in Athletics and untrained in Crafting, you would become untrained in Athletics and a master in Crafting. If making this swap would break prerequisites to feats, you lose access to those feats until your skill proficiencies change back in an hour.",
      "bulk": 0,
      "price": {},
      "usage": "carried",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:the-dance",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "rzcqiPZHpv0I1Jab",
      "slug": "the-dance",
      "publicationTitle": "Pathfinder #192: Worst of All Possible Worlds",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:de77c1054e832984f8499de4c83ee513449e965d2bcfbb122b5f85f610a10614",
    "translatableHash": "sha256:a49e00524545371c88125fc75ec210d9f1b0b7dfc9e6bd6c12060938075df2f3",
    "data": {
      "schemaVersion": 1,
      "name": "The Dance",
      "itemType": "equipment",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "artifact",
        "harrow-court",
        "invested",
        "magical"
      ],
      "description": "Suit Keys (Dex)\nAlignment lawful good\nThe Dance represents the delicately balanced rhythms of the universe and the ability stay in step with existence. As long as The Dance is invested, you gain a +2 item bonus on Performance checks. This increases to a +3 item bonus if you are at least 17th level.\nActivate f envision\nFrequency once per day\nTrigger You are about to roll initiative\nEffect Your body begins to move with anticipation, creating a trail of afterimages for a moment. You can roll initiative with a Performance check. Regardless of what skill you use to roll for initiative, roll the check three times and take the result of your choice. This is a fortune effect.",
      "bulk": 0,
      "price": {},
      "usage": "carried",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:the-teamster",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Vmyrv2H5cs4H64H1",
      "slug": "the-teamster",
      "publicationTitle": "Pathfinder #192: Worst of All Possible Worlds",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:a983990e3c0b2a70062f781406b8f3b55c643ac1e1f6c9e47ba7ac061ece45ef",
    "translatableHash": "sha256:7383bddf1c4ffa11025a4e2eac33b747cfc42242d3f659d02c00e711790fcbcc",
    "data": {
      "schemaVersion": 1,
      "name": "The Teamster",
      "itemType": "equipment",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "artifact",
        "harrow-court",
        "invested",
        "magical"
      ],
      "description": "Suit Shield (Con)\nAlignment neutral\nThe Teamster represents the driving force to push on, no matter the circumstance. As long as you have The Teamster invested, all single-target effects that target you and require a saving throw gain the incapacitation trait. If the effect originates from a creature or effect of a level higher than yours, it doesn't gain the incapacitation trait in this way.\nActivate f envision\nTrigger you are affected by an ongoing condition\nFrequency once per day\nEffect You push through your largest hindrance. Select one of the following conditions currently affecting you: Blinded, Clumsy, Confused, Controlled, Dazzled, Deafened, Doomed, Drained, Dying, Enfeebled, Fascinated, Fatigued, Frightened, Grabbed, Immobilized, Paralyzed, Persistent Damage, Petrified, Restrained, Sickened, Slowed, Stunned, Stupefied, Unconscious, or Wounded. If the source of the condition is more than 4 levels lower than your current level, The Teamster automatically counters the condition. Otherwise, The Teamster attempts to counter the condition, with a counteract modifier of 1d20+31.",
      "bulk": 0,
      "price": {},
      "usage": "carried",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:the-courtesan",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "X28YoZkN6UJYYYYC",
      "slug": "the-courtesan",
      "publicationTitle": "Pathfinder #192: Worst of All Possible Worlds",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:b59f97152f62ad38ee1a1a64de920c6f85f46f7d52735a43fdaf81ad36def6a5",
    "translatableHash": "sha256:c595e8dd5ad111a5da41cae30f7ef0b85d5c59837c13b7603cf4575181263a2d",
    "data": {
      "schemaVersion": 1,
      "name": "The Courtesan",
      "itemType": "equipment",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "artifact",
        "harrow-court",
        "illusion",
        "invested",
        "magical"
      ],
      "description": "Suit Crowns (Cha)\nAlignment chaotic neutral\nThe Courtesan represents political intrigue and social niceties. As long as The Courtesan is invested, you gain a +2 item bonus to Diplomacy checks to Make an Impression. This increases to a +3 item bonus if you are at least 17th level.\nActivate 2 envision, Interact\nFrequency once per day\nEffect You pass the card over your face and become exactly who you need to be; you cast Illusory Disguise. The rank of the spell is one-half your level, rounded down (minimum 6th level). You can change your appearance again at any time during the duration by using a three-action activity, which has the concentrate trait. While under these effects, your Deception checks to Impersonate are one degree of success greater when you use them against a creature that is a lower level than yourself.",
      "bulk": 0,
      "price": {},
      "usage": "carried",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:the-crows",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "y1vxwZhnvjBz9HRn",
      "slug": "the-crows",
      "publicationTitle": "Pathfinder #192: Worst of All Possible Worlds",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:0acf3a25e0b54773f5d750baafa0979331a51a0f11f57d975748868f77cb98d7",
    "translatableHash": "sha256:6802b72638069da35d14766358f5d5b033ce0023237dad8586bc5236e3fa5ea3",
    "data": {
      "schemaVersion": 1,
      "name": "The Crows",
      "itemType": "equipment",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "artifact",
        "harrow-court",
        "invested",
        "magical"
      ],
      "description": "Suit Keys (Dex)\nAlignment neutral evil\nThe Crows represent taking things through violence or force, particularly when done through agility and swiftness rather than brawn. As long as The Crows is invested, you can attempt to Grapple targets with Acrobatics checks, and if you're at least trained in Thievery, to Disarm with Thievery checks. When you do so, you gain a +2 item bonus on the attempt, or a +3 item bonus if you're at least 17th level.\nActivate f envision, Interact (teleportation)\nFrequency once per day\nEffect You hold the card in your hand, and with a flick of the wrist it vanishes, only to be replaced by an object of your choice within 30 feet. The object must be 2 Bulk or less. If that object is unattended, it teleports into your hand automatically. If the object is attended by a creature, you must make a check (thievery, defense:reflex) check against the creature's Reflex DC.\nCritical Success The object teleports into your hand.\nSuccess The object vanishes from the target's possession and lands on the ground at a point at a midway point between you two.\nFailure The object does not vanish, but the creature's grip on it falters and if it doesn't spend an Interact action on its next turn to grip the item, it drops to the ground.\nCritical Failure You fail to manipulate the object entirely.",
      "bulk": 0,
      "price": {},
      "usage": "carried",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:the-cricket",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "z5EYyT8CMZkcj9qW",
      "slug": "the-cricket",
      "publicationTitle": "Pathfinder #192: Worst of All Possible Worlds",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:1d3328572481e66be51ab2b65a9325bff4ab41a527e5f826f1afbc9f273bf86f",
    "translatableHash": "sha256:73363cd1bd69a3dea067e8f2a6de220705d113f5fa52aec1dcdb0d56ad49070d",
    "data": {
      "schemaVersion": 1,
      "name": "The Cricket",
      "itemType": "equipment",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "artifact",
        "harrow-court",
        "invested",
        "magical"
      ],
      "description": "Suit Keys (Dex)\nAlignment neutral good\nThe Cricket represents speed and quick passage. As long as The Cricket is invested, it grants you a +10-foot item bonus to all your Speeds. This increases to a +20-foot item bonus if you are at least 19th level or higher.\nActivate f envision, Interact\nFrequency once per day\nEffect Your feet begin to glow and shimmer as if they were vibrating. Stride up to three times your Speed. You can Burrow, Climb, Fly, or Swim instead of Striding if you have the corresponding movement type. This movement doesn't trigger reactions and you can move through creatures' spaces as if they weren't there during this movement.",
      "bulk": 0,
      "price": {},
      "usage": "carried",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:the-deck-of-destiny",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "QPWWO89YR0uZ881r",
      "slug": "the-deck-of-destiny",
      "publicationTitle": "Pathfinder #192: Worst of All Possible Worlds",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:3a3ee9b64fbc6b987d1e296a12d2110e7f9c78f1e45d4335d7a779ad569256eb",
    "translatableHash": "sha256:2796e60a575ced7c27e4bcbc5a9b81c032b71ec2a887c6784b2b5bbcad9b0474",
    "data": {
      "schemaVersion": 1,
      "name": "The Deck of Destiny",
      "itemType": "equipment",
      "level": 25,
      "rarity": "unique",
      "traits": [
        "artifact",
        "invested",
        "magical"
      ],
      "description": "Composed of 54 cards that are powerful in their own right, the Deck of Destiny epitomizes the powers of the harrow and divination. The deck only has its full suite of abilities while complete. Completing the deck requires all 54 cards to be placed together and shuffled into their complete state over the span of 1 minute; the cards merely being in proximity of each other is not enough to complete the deck. Once complete, the deck can be invested normally.\nWhile the complete deck is on your person or in hand and invested, you gain a natural insight into events to be. Any divination effects you create become heightened to 10th level for the purpose of determining their counteract rank. Additionally, divination effects you create gain a +4 item bonus to their DC and to spell attack rolls. The deck also helps you maintain control of your own fate, granting you immunity to fortune and misfortune effects, though you can be affected by such effects if you wish.\nActivate envision (daily preparations)\nWhen you perform your daily preparations, you can share the Deck of Destiny with your companions, allowing them to invest a hand of up to 5 cards each as if they carried the cards. When one of your companions activates one of their invested cards, an illusory image of the card appears in their hand, but the card's effects are otherwise unaltered. This lasts until the next time you perform your daily preparations.\nActivate r envision\nTrigger A creature you can see within 60 feet is about to attempt a check\nEffect You quickly draw a card to alter the triggering creature's fate. Choose either weal or woe. With weal (a fortune effect), the triggering creature rolls twice and takes the better result on their check. With woe (a misfortune effect), the triggering creature is forced to roll twice and take the worse result. If the card you drew is related to the check, such as drawing a card from the suit of shields for a Fortitude saving throw or a card from the suit of crowns for a Deception check, the creature is affected further. When choosing weal, the creature gains a +4 circumstance bonus to the triggering check. When faced with woe, the triggering creature takes a –4 circumstance penalty to the triggering check. Regardless of whether they faced weal or woe, the triggering creature becomes temporarily immune to this ability for 24 hours.\nEffect: Deck of Destiny\nActivate 3 envision, Interact\nEffect You call upon the deck in an attempt to put an end to a creature's life by visiting upon them a particularly grisly fate. Choose a creature within 60 feet. The deck casts Phantasmal Killer (check (will, dc:50, traits:spell) and check (fortitude, dc:50, traits:spell,incapacitation), heightened to 10th level) on that creature. This effect doesn't have the emotion, fear, illusion, or mental traits, as it actually alters reality to rewrite a creature's doom. Regardless of the results, the creature becomes temporarily immune to this effect for 1 week.\nActivate 1 hour (envision, Interact)\nFrequency once per year\nEffect You attempt to undo a creature's untimely death and return them to life. The deck performs a 10th-rank Resurrect ritual. This ritual doesn't have any cost and doesn't require any secondary casters. Instead, you are the primary caster and must attempt a check (occultism, dc:50) check to complete the ritual as you perform a Harrowing, perform that same harrowing in reverse in an attempt to pull back the threads of fate, and perform one final harrowing to \"rewrite\" the target's destiny.\nDestruction The Deck of Destiny is inherently connected to the fate of Golarion. If the deck is used in a harrow reading to determine the destiny of the entire planet, or if the planet itself is destroyed or removed from this reality, the cards crumble to dust after the harrowing is complete or the planet is gone.",
      "bulk": 0.1,
      "price": {},
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:mycoweave-shield-lesser",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "AXewacUHP6rs980k",
      "slug": "mycoweave-shield-lesser",
      "publicationTitle": "Pathfinder #193: Mantle of Gold",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/shields/specific-shields/wovenwood-shield.webp"
    },
    "sourceHash": "sha256:1d39a8d4464b8dd22819bb730482ba9529e14b88d5ddcf6efde1bb1e3200fc5e",
    "translatableHash": "sha256:0e67f3ec514d2882174b2ae38075ad2625de47584f86176982ef71577f3781fb",
    "data": {
      "schemaVersion": 1,
      "name": "Mycoweave Shield (Lesser)",
      "itemType": "shield",
      "level": 2,
      "rarity": "uncommon",
      "traits": [],
      "description": "This shield is grown entirely of specially treated fungi, giving it the appearance of a frilly disc. The shield has Hardness 2, HP 12, and BT 6.\nWhen left atop at least 1 bulk of organic matter, it gains fast healing 1; after 10 minutes 1 Bulk of the organic matter has been consumed by the shield. This shield doubles its hardness against bludgeoning, electricity, and sonic damage.\nActivate R manipulate\nTrigger The shield is broken\nEffect The shield spews spores into one adjacent square, dealing 1d6 persistent poison damage to all creatures in within it; a successful check (fortitude, dc:16) save negates the damage.\nCraft Requirements You are trained in Nature, and can cast a fungus spell or are fungus.",
      "bulk": 1,
      "price": {
        "gp": 40
      },
      "usage": "",
      "category": "shield",
      "group": "shield"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:steadyfoot-tassel",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "iX25AmfeRbV3M1EF",
      "slug": "steadyfoot-tassel",
      "publicationTitle": "Pathfinder #193: Mantle of Gold",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:ce95c65b0fa41b459ab7ccfeab09604668c197e553d4b62353ebd43bc65e438e",
    "translatableHash": "sha256:4e2c1eb2974ddccacd496b6aea2300da952e7d98d5f99fae391013624ae2b01c",
    "data": {
      "schemaVersion": 1,
      "name": "Steadyfoot Tassel",
      "itemType": "equipment",
      "level": 2,
      "rarity": "uncommon",
      "traits": [
        "companion",
        "invested",
        "primal"
      ],
      "description": "This handsome tassel comes in a variety of colors to match your companion's collar or bridle. While attached, the tassel gives the companion a +1 item bonus to Acrobatics checks to Balance, and to their Reflex DC against Trip attacks.",
      "bulk": 0,
      "price": {
        "gp": 30
      },
      "usage": "affixed-to-a-creature",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:setup-snare",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "20fPmTHmGRyYXIgm",
      "slug": "setup-snare",
      "publicationTitle": "Pathfinder #193: Mantle of Gold",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:09f95c40e36917bf1e202658a3a3f06977d8e75dc20edb62134d8a2cf4a8beef",
    "translatableHash": "sha256:039c6a5201cf0ed1abdbcef8604f08b42484179ecd82d3a1a8b2029f6e54f5a8",
    "data": {
      "schemaVersion": 1,
      "name": "Setup Snare",
      "itemType": "consumable",
      "level": 3,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "kobold",
        "mechanical",
        "snare",
        "trap"
      ],
      "description": "This snare is designed to divert a target's movement towards another snare or hazard. You may choose to have the target attempt a Will saving throw instead of a Reflex saving throw; if you do, add the fear and mental traits plus add either the visual or auditory trait.\nWhen a Small or larger creature enters the square, the snare Pushes the creature 5 feet and the target becomes Clumsy 1 until the end of their next turn. On a critical failure the snare Pushes the target 10 feet and the target becomes Clumsy 2 until the end of their next turn.",
      "bulk": 0,
      "price": {
        "gp": 8
      },
      "usage": "other",
      "category": "snare",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:spore-shephards-staff-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "7XEVXfgeabmO7fMd",
      "slug": "spore-shephards-staff-major",
      "publicationTitle": "Pathfinder #193: Mantle of Gold",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:358b539de7cd440d0989de78950088293c35ca5c79f6bda2ab32a14ae23547d0",
    "translatableHash": "sha256:e5fc797fb7adc3cc6d423b85937446ee9f8a8d69723a4d008e18e4bb7c0b8112",
    "data": {
      "schemaVersion": 1,
      "name": "Spore Shephard's Staff (Major)",
      "itemType": "weapon",
      "level": 4,
      "rarity": "uncommon",
      "traits": [
        "magical",
        "staff",
        "two-hand-d8"
      ],
      "description": "This staff is constructed from a magically grown amanita mushroom, with a shaft that spreads into a bright red cap speckled in white. While wielding the staff you gain a +2 circumstance bonus to Nature checks to identify fungus.\nActivate Cast a Spell\nEffect You expend a number of charges from the staff to cast a spell from its list.\n• Cantrip Puff of Poison\n• 1st Protector Tree (resembles giant mushroom, not a tree), Summon Plant or Fungus (fungus only)\n• 2nd Protector Tree (resembles giant mushroom, not a tree), Summon Plant or Fungus (fungus only), One with Plants (giant mushroom only)\n• 3rd Protector Tree (resembles giant mushroom, not a tree), Stinking Cloud, Summon Plant or Fungus (fungus only), Wall of Thorns (resembles wall of fungus; deals poison damage)\n• 4th Protector Tree (resembles giant mushroom, not a tree), Speak with Plants (fungus only), Summon Plant or Fungus (fungus only)\n• 5th Toxic Cloud, Plant Form (resemble giant fungus instead of plant, gain fungus trait instead of plant trait; arboreal type only), Protector Tree (resembles giant mushroom, not a tree), Summon Plant or Fungus (fungus only)\nCraft Requirements Supply one casting of all listed levels of all listed spells.",
      "bulk": 1,
      "price": {
        "gp": 100
      },
      "usage": "held-in-one-hand",
      "category": "simple",
      "group": "club",
      "damage": {
        "dice": 1,
        "die": "d4",
        "type": "bludgeoning"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:spore-shephards-staff",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "bTwZNckINJgiT8Ef",
      "slug": "spore-shephards-staff",
      "publicationTitle": "Pathfinder #193: Mantle of Gold",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:135711582d33dea7dd005b6072700c91b0f89766742257180892735d55f0a4ef",
    "translatableHash": "sha256:08cbef5eae02fb0da3f0eaa89a74741efbe7145be0adc709f8bff4c5838456e5",
    "data": {
      "schemaVersion": 1,
      "name": "Spore Shephard's Staff",
      "itemType": "weapon",
      "level": 4,
      "rarity": "uncommon",
      "traits": [
        "magical",
        "staff",
        "two-hand-d8"
      ],
      "description": "This staff is constructed from a magically grown amanita mushroom, with a shaft that spreads into a bright red cap speckled in white. While wielding the staff you gain a +2 circumstance bonus to Nature checks to identify fungus.\nActivate Cast a Spell\nEffect You expend a number of charges from the staff to cast a spell from its list.\n• Cantrip Puff of Poison\n• 1st Protector Tree (resembles giant mushroom, not a tree), Summon Plant or Fungus (fungus only)\nCraft Requirements Supply one casting of all listed levels of all listed spells.",
      "bulk": 1,
      "price": {
        "gp": 100
      },
      "usage": "held-in-one-hand",
      "category": "simple",
      "group": "club",
      "damage": {
        "dice": 1,
        "die": "d4",
        "type": "bludgeoning"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:skysunder",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "mQyhSg9M3VdGEUrN",
      "slug": "skysunder",
      "publicationTitle": "Pathfinder #193: Mantle of Gold",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/clan-dagger.webp"
    },
    "sourceHash": "sha256:8cbf109ed5b7022f67058ca5b6cfc90ef9cbbfc15a2e13cf360d14e33d25edbb",
    "translatableHash": "sha256:09ba49b756ffb4f178a957f2e9fed99b4e65f9b17c05d664c86c7219b9e51ce9",
    "data": {
      "schemaVersion": 1,
      "name": "Skysunder",
      "itemType": "weapon",
      "level": 4,
      "rarity": "unique",
      "traits": [
        "agile",
        "dwarf",
        "electricity",
        "magical",
        "parry",
        "relic",
        "versatile-b"
      ],
      "description": "This +1 striking clan dagger bears the face of a stern dwarven god, his beard and features forming part of the blade.",
      "bulk": 0.1,
      "price": {},
      "usage": "held-in-one-hand",
      "category": "simple",
      "group": "knife",
      "damage": {
        "dice": 1,
        "die": "d4",
        "type": "piercing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:uniter-of-clans",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "3zgX1Uvwv3R262IV",
      "slug": "uniter-of-clans",
      "publicationTitle": "Pathfinder #193: Mantle of Gold",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:c7bb203b6c9d6e5e19823261466c521ebd977456500438bea224e9571a516489",
    "translatableHash": "sha256:b379d1bef2c36784f25406fd7369b6c5678bf36f1e41220453687f143613dfd4",
    "data": {
      "schemaVersion": 1,
      "name": "Uniter of Clans",
      "itemType": "equipment",
      "level": 5,
      "rarity": "unique",
      "traits": [
        "invested",
        "magical",
        "relic"
      ],
      "description": "Resembling two hands clasped in friendship, this diplomat's badge is designed to be woven into the wearer's braided beard. When the wearer befriends others, one of the hands briefly transforms to resemble the befriended creature's own.\nActivate A Recall Knowledge\nFrequency once per day\nEffect Attempt a DC 20 check to Recall Knowledge about people of a human ethnicity, a non-human ancestry, or some other type of creature. (The GM determines what your options are.) If you succeed, the badge's bonus increases to +2 for Diplomacy checks with creatures of that group for the rest of the day.\nEffect: Diplomat's Badge",
      "bulk": 0,
      "price": {
        "gp": 125
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:adamantine-echo",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "BMhTM2TfK06pEZ3Q",
      "slug": "adamantine-echo",
      "publicationTitle": "Pathfinder #193: Mantle of Gold",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/runes/fundamental-armor-runes/armor-potency.webp"
    },
    "sourceHash": "sha256:5a16b3f81e18cb45d957b527b611199fd14a532db7260faf808de8047a9ebf2b",
    "translatableHash": "sha256:6a504507be241093a94125dffdc89fd2dd9570bc0229d9c8a9891efdcdef76d2",
    "data": {
      "schemaVersion": 1,
      "name": "Adamantine Echo",
      "itemType": "equipment",
      "level": 5,
      "rarity": "rare",
      "traits": [
        "earth",
        "invested",
        "magical",
        "relic"
      ],
      "description": "Made from glossy, nearly black adamantine, this large fragment of a plate armor vambrace provides little protection on its own. However, when incorporated into an intact suit of armor, it functions as a +1 armor potency rune.",
      "bulk": 0.1,
      "price": {},
      "usage": "etched-onto-armor",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:sparkwarden",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "OdpmSFarov2qUoyN",
      "slug": "sparkwarden",
      "publicationTitle": "Pathfinder #193: Mantle of Gold",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:15b3a149dad79ddf9c4e039d65cae97582bb79d4b64428c40c4e7448f5fbfbd7",
    "translatableHash": "sha256:348a73392bc851b9d671ac94a0a8d440f10b55d51be731af6b8bd0d42155eccb",
    "data": {
      "schemaVersion": 1,
      "name": "Sparkwarden",
      "itemType": "equipment",
      "level": 5,
      "rarity": "unique",
      "traits": [
        "invested",
        "magical",
        "relic",
        "shadow",
        "tattoo"
      ],
      "description": "The geometric designs of this Warding Tattoo extend the length of your arm, resembling an armored sleeve. The crimson ink sometimes glows softly like warm coals when you're excited or building something new.\nActivate r envision\nFrequency once per day\nTrigger An enemy, hazard, or the environment makes an attack against your AC, requires you to attempt a saving throw, or causes you to take damage automatically\nEffect Until the end of the current turn, against the triggering effect, you gain a +1 status bonus to AC and saving throws and gain resistance 2 to damage.",
      "bulk": 0,
      "price": {
        "gp": 140
      },
      "usage": "tattooed-on-the-body",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:mycoweave-shield-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "i8UuRf5yLztt43TN",
      "slug": "mycoweave-shield-greater",
      "publicationTitle": "Pathfinder #193: Mantle of Gold",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/shields/specific-shields/wovenwood-shield.webp"
    },
    "sourceHash": "sha256:a5a58f430fbecefdc4eeadffb16baffa81f918fa7665d480740d186800e3390c",
    "translatableHash": "sha256:2512a44cacc536a88310c48831ac3efa3af6048ee535d756a386475fc132817d",
    "data": {
      "schemaVersion": 1,
      "name": "Mycoweave Shield (Greater)",
      "itemType": "shield",
      "level": 8,
      "rarity": "uncommon",
      "traits": [],
      "description": "This shield is grown entirely of specially treated fungi, giving it the appearance of a frilly disc. The shield has Hardness 4, HP 64, and BT 32.\nWhen left atop at least 1 bulk of organic matter, it gains fast healing 1; after 10 minutes 1 Bulk of the organic matter has been consumed by the shield. This shield doubles its hardness against bludgeoning, electricity, and sonic damage.\nActivate R manipulate\nTrigger The shield is broken\nEffect The shield spews spores into one adjacent square, dealing 2d6 persistent poison damage to all creatures in within it; a successful check (fortitude, dc:24) save negates the damage.\nCraft Requirements You are trained in Nature, and can cast a fungus spell or are fungus.",
      "bulk": 1,
      "price": {
        "gp": 40
      },
      "usage": "",
      "category": "shield",
      "group": "shield"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:spore-shephards-staff-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "UEIwFJMx3wYt0Blp",
      "slug": "spore-shephards-staff-greater",
      "publicationTitle": "Pathfinder #193: Mantle of Gold",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:38ffe825a4779f995d9773e5c5c4d979fbf250bff4d99fa85b33dd7b7708e99d",
    "translatableHash": "sha256:9860fda4fe393b41f660db1e79a705535b5926118db8a15d9f35cd84e5c61ab9",
    "data": {
      "schemaVersion": 1,
      "name": "Spore Shephard's Staff (Greater)",
      "itemType": "weapon",
      "level": 8,
      "rarity": "uncommon",
      "traits": [
        "magical",
        "staff",
        "two-hand-d8"
      ],
      "description": "This staff is constructed from a magically grown amanita mushroom, with a shaft that spreads into a bright red cap speckled in white. While wielding the staff you gain a +2 circumstance bonus to Nature checks to identify fungus.\nActivate Cast a Spell\nEffect You expend a number of charges from the staff to cast a spell from its list.\n• Cantrip Puff of Poison\n• 1st Protector Tree (resembles giant mushroom, not a tree), Summon Plant or Fungus (fungus only)\n• 2nd Protector Tree (resembles giant mushroom, not a tree), Summon Plant or Fungus (fungus only), One with Plants (giant mushroom only)\n• 3rd Protector Tree (resembles giant mushroom, not a tree), Stinking Cloud, Summon Plant or Fungus (fungus only), Wall of Thorns (resembles wall of fungus; deals poison damage)\nCraft Requirements Supply one casting of all listed levels of all listed spells.",
      "bulk": 1,
      "price": {
        "gp": 475
      },
      "usage": "held-in-one-hand",
      "category": "simple",
      "group": "club",
      "damage": {
        "dice": 1,
        "die": "d4",
        "type": "bludgeoning"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:mycoweave-shield-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Ruul32xBBYYVwFHC",
      "slug": "mycoweave-shield-major",
      "publicationTitle": "Pathfinder #193: Mantle of Gold",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/shields/specific-shields/wovenwood-shield.webp"
    },
    "sourceHash": "sha256:eb38a97f1274b49fbd44c31c3d2fefa5f8b0ea00fd8698340827e2bc22c04bcb",
    "translatableHash": "sha256:b01148943ce01fd9d057e6569baab5997aab138093195a747b1d8647eb1ab934",
    "data": {
      "schemaVersion": 1,
      "name": "Mycoweave Shield (Major)",
      "itemType": "shield",
      "level": 16,
      "rarity": "uncommon",
      "traits": [],
      "description": "This shield is grown entirely of specially treated fungi, giving it the appearance of a frilly disc. The shield has Hardness 6, HP 110, and BT 55.\nWhen left atop at least 1 bulk of organic matter, it gains fast healing 1; after 10 minutes 1 Bulk of the organic matter has been consumed by the shield. This shield doubles its hardness against bludgeoning, electricity, and sonic damage.\nActivate R manipulate\nTrigger The shield is broken\nEffect The shield spews spores into one adjacent square, dealing 3d6 persistent poison damage to all creatures in within it; a successful check (fortitude, dc:35) save negates the damage.\nCraft Requirements You are trained in Nature, and can cast a fungus spell or are fungus.",
      "bulk": 1,
      "price": {
        "gp": 40
      },
      "usage": "",
      "category": "shield",
      "group": "shield"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:prey-mutagen-lesser",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "60DuFyGQoZhPj4To",
      "slug": "prey-mutagen-lesser",
      "publicationTitle": "Pathfinder #194: Cult of the Cave Worm",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-elixirs/prey-mutagen.webp"
    },
    "sourceHash": "sha256:5aac072c27281bf3a5fcec8536cea4272b984ffde170534dcbc4bfc303c2078d",
    "translatableHash": "sha256:2a57fcb3f0baa2d45e188c1929cb4b2afdc4b6f2281f0243150146b8d998579f",
    "data": {
      "schemaVersion": 1,
      "name": "Prey Mutagen (Lesser)",
      "itemType": "consumable",
      "level": 1,
      "rarity": "rare",
      "traits": [
        "alchemical",
        "consumable",
        "elixir",
        "mutagen",
        "polymorph"
      ],
      "description": "Activate 1 Interact\nA mixture of fey blood and rare ingredients give you incredible speed but also cause you to become particularly attractive to predators.\nBenefit You gain a +10 status bonus to your speed and are able to use the following reaction:\nTimely Dodge R\nTrigger You are targeted by a Strike\nEffect You dart aside, gaining a +1 circumstance bonus to AC, then Step after the Strike resolves.\nDrawback The range at which creatures can detect you with scent or tremorsense doubles. Animals and beasts gain a +2 circumstance bonus to attack rolls against you.\nThe duration is 1 minute.\nEffect: Prey Mutagen (Lesser)",
      "bulk": 0.1,
      "price": {
        "gp": 4
      },
      "usage": "held-in-one-hand",
      "category": "mutagen",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:blood-bomb-lesser",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "wdJ0AFtkJVycVRjX",
      "slug": "blood-bomb-lesser",
      "publicationTitle": "Pathfinder #194: Cult of the Cave Worm",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:e96fcaa9ecbb5e57047a4d71d8934fa491ad74b4a472de8c978b04fc424512e1",
    "translatableHash": "sha256:85bf3af23d3202e40c3206d9cbf8f65e0f22a98b00c138e9b1f6dbbc3a669714",
    "data": {
      "schemaVersion": 1,
      "name": "Blood Bomb (Lesser)",
      "itemType": "weapon",
      "level": 1,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "bomb",
        "consumable",
        "splash"
      ],
      "description": "Activate 1 Strike\nThis flask is full of shrapnel and anti-coagulants designed to make targets bleed out. It deals 1 slashing, 1d6 persistent bleed damage and 1 slashing splash damage.",
      "bulk": 0.1,
      "price": {
        "gp": 4
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "bomb"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:thumper-snare",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "3GUiG3raeyIwW4av",
      "slug": "thumper-snare",
      "publicationTitle": "Pathfinder #194: Cult of the Cave Worm",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:568674382a8a4ec2c26591685564ce430b813700f33f9c0847fd13617c89a283",
    "translatableHash": "sha256:31b645306f4610830dd6bb0aad6dc0232cdf72ab6fe81dc47c087c7e79d728f9",
    "data": {
      "schemaVersion": 1,
      "name": "Thumper Snare",
      "itemType": "consumable",
      "level": 3,
      "rarity": "rare",
      "traits": [
        "auditory",
        "clockwork",
        "consumable",
        "mechanical",
        "snare",
        "trap"
      ],
      "description": "This small box contains a clockwork mechanism that rhythmically thumps the ground, allowing creatures with tremorsense to detect it at up to double their usual range. The mechanism can be wound to thump anywhere from 1 round to 1 minute before falling into useless components.",
      "bulk": 0,
      "price": {
        "gp": 10
      },
      "usage": "held-in-one-hand",
      "category": "snare",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:prey-mutagen-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "JiMljGYKx60DHs8O",
      "slug": "prey-mutagen-moderate",
      "publicationTitle": "Pathfinder #194: Cult of the Cave Worm",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-elixirs/prey-mutagen.webp"
    },
    "sourceHash": "sha256:b696ecfdce2758a87fa50554bed5d070cba15e4f5c5319879b1efc95af9247a9",
    "translatableHash": "sha256:610965a063eb467616954738f03d26a4180cd59f9189249224440a26bc34cd48",
    "data": {
      "schemaVersion": 1,
      "name": "Prey Mutagen (Moderate)",
      "itemType": "consumable",
      "level": 3,
      "rarity": "rare",
      "traits": [
        "alchemical",
        "consumable",
        "elixir",
        "mutagen",
        "polymorph"
      ],
      "description": "Activate 1 Interact\nA mixture of fey blood and rare ingredients give you incredible speed but also cause you to become particularly attractive to predators.\nBenefit You gain a +20 status bonus to your speed and are able to use the following reaction:\nTimely Dodge R\nTrigger You are targeted by a Strike\nEffect You dart aside, gaining a +2 circumstance bonus to AC, then Step after the Strike resolves.\nDrawback The range at which creatures can detect you with scent or tremorsense doubles. Animals and beasts gain a +2 circumstance bonus to attack rolls against you.\nThe duration is 10 minute.\nEffect: Prey Mutagen (Moderate)",
      "bulk": 0.1,
      "price": {
        "gp": 12
      },
      "usage": "held-in-one-hand",
      "category": "mutagen",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:blood-bomb-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "ODXNXvcLQGBw6kXj",
      "slug": "blood-bomb-moderate",
      "publicationTitle": "Pathfinder #194: Cult of the Cave Worm",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:c8afabf4e131a7af8df72591859001cda9d3356bf5496892d147f5f8f3e626c6",
    "translatableHash": "sha256:fc1f18d9a726a0902c10a79155577d9907b1e0cce479b0f2a929ad973a984e6d",
    "data": {
      "schemaVersion": 1,
      "name": "Blood Bomb (Moderate)",
      "itemType": "weapon",
      "level": 3,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "bomb",
        "consumable",
        "splash"
      ],
      "description": "Activate 1 Strike\nThis flask is full of shrapnel and anti-coagulants designed to make targets bleed out. It deals 1 slashing, 2d6 persistent bleed damage and 2 slashing splash damage. You gain a +1 item bonus to attack rolls.",
      "bulk": 0.1,
      "price": {
        "gp": 11
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "bomb"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:avernal-cape",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "eDO54Z8RdjL2ymgW",
      "slug": "avernal-cape",
      "publicationTitle": "Pathfinder #194: Cult of the Cave Worm",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/adventuring-gear/dueling-cape.webp"
    },
    "sourceHash": "sha256:dcc0bb86583b5d098021d22bce31d1e379113dabafa2785c03c7a125c2e13afb",
    "translatableHash": "sha256:f073c75d959e09a17260b02c2a54c2bf12487f89e7e294002efb573f29534187",
    "data": {
      "schemaVersion": 1,
      "name": "Avernal Cape",
      "itemType": "equipment",
      "level": 5,
      "rarity": "unique",
      "traits": [
        "earth",
        "invested",
        "magical",
        "relic"
      ],
      "description": "Made from preserved crimson worm hide, this thick leather cape can deflect incoming blows without serious damage. It functions as a Dueling Cape and while moved into a protective position, it also grants you fire resistance equal to twice the relic's number of gifts.\nEffect: Dueling Cape",
      "bulk": 0.1,
      "price": {},
      "usage": "worncloak",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:kalmaugs-journal",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "P6JCnxSAzGcUl8D4",
      "slug": "kalmaugs-journal",
      "publicationTitle": "Pathfinder #194: Cult of the Cave Worm",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/artifacts/the-whispering-reeds.webp"
    },
    "sourceHash": "sha256:974fbe16fa760ad7167798721359899ef137eff45a686c5950fa120cf4f43f9d",
    "translatableHash": "sha256:1d992a6b3a0e8eef070c5fb1843343dee86217d47c9f92fe966416d4faca1109",
    "data": {
      "schemaVersion": 1,
      "name": "Kalmaug's Journal",
      "itemType": "equipment",
      "level": 5,
      "rarity": "unique",
      "traits": [
        "grimoire",
        "invested",
        "magical",
        "relic"
      ],
      "description": "This grimoire is constructed from individual tarnished silver plates, bound together to form a fine book. Each \"page\" contain engraved maps, accounts of sites in Nar-Voth, and daily journals. Throughout the journal, spells and notes are inscribed on the margins and within the text. When Chapter One is completed, this grimoire contains the following spells: Allfood, Deep Sight, Fate's Travels, Glowing Trail, Know Location, Stonesense, Wanderer's Guide.\nIf you use the grimoire during your daily preparations and are capable of preparing spells of the appropriate rank, when you cast a non-damaging spell prepared from this grimoire, you can Step or Stride up to half your Speed after Casting the Spell. To scribe additional spells into the grimoire, you must provide additional silver plates at the cost of 10 gp per spell when Learning the Spell.",
      "bulk": 1,
      "price": {},
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:festrem-mortu",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "uZvIIfZ04Q0S8UBE",
      "slug": "festrem-mortu",
      "publicationTitle": "Pathfinder #194: Cult of the Cave Worm",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:a3f8c80fe7e0e3026bee2274ad006819efa1b76e7977a2b72ccb496a7ae0e64b",
    "translatableHash": "sha256:dd27cb67af48447b21956891877c7bf01a4618b13a030cf52102052c8401d70a",
    "data": {
      "schemaVersion": 1,
      "name": "Festrem Mortu",
      "itemType": "equipment",
      "level": 6,
      "rarity": "uncommon",
      "traits": [
        "cursed",
        "grimoire",
        "magical"
      ],
      "description": "The book's cover is a patchwork of tanned humanoid skin that reeks of rotting meat. The longer a living creature studies this book, the more the scent of decay appeals to them.\nActivate R (concentrate, necromancy)\nFrequency once per day\nTrigger Your last action was to cast a necromancy spell prepared from this grimoire\nEffect You draw void energy from the triggering spell. You gain 10 temporary hit points that last for 1 hour.\nSpecial If this grimoire is used to prepare spells five days in succession by the same caster, that caster is subjected to the curse of the ravenous.\nCurse of the Ravenous\nThis hideous curse kills through constant hunger. You become gaunt and repeatedly gnash your teeth.\nSaving Throw check (fortitude, dc:20)\nEffect No matter how much you eat, you aren't satiated. After 1 day, you begin starving. Each week, you receive a new saving throw against the curse.",
      "bulk": 0.1,
      "price": {
        "gp": 230
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:everywhen-map",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "PSITHs8LgR7OZGcA",
      "slug": "everywhen-map",
      "publicationTitle": "Pathfinder #194: Cult of the Cave Worm",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:356784fe02f8b5d3d8e0d5c392f4365f97e07880ad64bc3ecb85669a528a053f",
    "translatableHash": "sha256:636a712a48087d4b790c43a0d5c8d3fde1754861a0c85af93874782477fd0c20",
    "data": {
      "schemaVersion": 1,
      "name": "Everywhen Map",
      "itemType": "equipment",
      "level": 8,
      "rarity": "rare",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "The map changes based on the creature who invests it, showing every path the creature has ever traveled in their lifetime. The map doesn't distinguish between current or past locations. It can be tricked into revealing the path of a different creature if a piece of that creature (such as hair, bone, or skin) is used with a successful DC 24 Trick Magic Item check.",
      "bulk": 0.1,
      "price": {
        "gp": 500
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:blood-bomb-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "kuHr6dEOxN0WAnUP",
      "slug": "blood-bomb-greater",
      "publicationTitle": "Pathfinder #194: Cult of the Cave Worm",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:99f8b9841d4f294840e4f06f0c3cc9401c909e576cf70e8c0bec3658b33672a9",
    "translatableHash": "sha256:e785025d5997f1aec0f5df173c77aea0092dc6930090dc35e245a22e0c60ebc6",
    "data": {
      "schemaVersion": 1,
      "name": "Blood Bomb (Greater)",
      "itemType": "weapon",
      "level": 11,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "bomb",
        "consumable",
        "splash"
      ],
      "description": "Activate 1 Strike\nThis flask is full of shrapnel and anti-coagulants designed to make targets bleed out. It deals 1 slashing, 3d6 persistent bleed damage and 3 slashing splash damage. You gain a +2 item bonus to attack rolls.",
      "bulk": 0.1,
      "price": {
        "gp": 275
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "bomb"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:prey-mutagen-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "qoyelABKtk9DRSEk",
      "slug": "prey-mutagen-greater",
      "publicationTitle": "Pathfinder #194: Cult of the Cave Worm",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-elixirs/prey-mutagen.webp"
    },
    "sourceHash": "sha256:c005a60cb3baf10886d0e14907318910f2cb6e844f5864da045c46d05e98fb9c",
    "translatableHash": "sha256:b8430f228f7fd6b2952a2a0488a26f76d0081ca13888703e12c9269b3e3c9bc7",
    "data": {
      "schemaVersion": 1,
      "name": "Prey Mutagen (Greater)",
      "itemType": "consumable",
      "level": 11,
      "rarity": "rare",
      "traits": [
        "alchemical",
        "consumable",
        "elixir",
        "mutagen",
        "polymorph"
      ],
      "description": "Activate 1 Interact\nA mixture of fey blood and rare ingredients give you incredible speed but also cause you to become particularly attractive to predators.\nBenefit You gain a +30 status bonus to your speed and are able to use the following reaction:\nTimely Dodge R\nTrigger You are targeted by a Strike\nEffect You dart aside, gaining a +3 circumstance bonus to AC, then Step after the Strike resolves.\nDrawback The range at which creatures can detect you with scent or tremorsense doubles. Animals and beasts gain a +2 circumstance bonus to attack rolls against you.\nThe duration is 1 hour.\nEffect: Prey Mutagen",
      "bulk": 0.1,
      "price": {
        "gp": 300
      },
      "usage": "held-in-one-hand",
      "category": "mutagen",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:blood-bomb-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "3SZAUzXG6MWYWoXZ",
      "slug": "blood-bomb-major",
      "publicationTitle": "Pathfinder #194: Cult of the Cave Worm",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:d1317f4d09fec6c62c85eea24d8a0d55e7f24ec148900b053bc941078755e7cc",
    "translatableHash": "sha256:f92154fa8816b66da981c7f306da51a09745f8b5e8dd40182dca6d2a894a3b73",
    "data": {
      "schemaVersion": 1,
      "name": "Blood Bomb (Major)",
      "itemType": "weapon",
      "level": 17,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "bomb",
        "consumable",
        "splash"
      ],
      "description": "Activate 1 Strike\nThis flask is full of shrapnel and anti-coagulants designed to make targets bleed out. It deals 1 slashing, 6d6 persistent bleed damage and 4 slashing splash damage. You gain a +3 item bonus to attack rolls.",
      "bulk": 0.1,
      "price": {
        "gp": 2750
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "bomb"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:prey-mutagen-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "fiBThkOOXEdcTSMf",
      "slug": "prey-mutagen-major",
      "publicationTitle": "Pathfinder #194: Cult of the Cave Worm",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-elixirs/prey-mutagen.webp"
    },
    "sourceHash": "sha256:b0da0db48645305dcbb576284ed92f7ffe75ca02a7a180594f192a95215b0b15",
    "translatableHash": "sha256:7249407dc39651f08ce0f03ffbfbe2f01a82b9efc27adc14fdf047c0e5c7cfdc",
    "data": {
      "schemaVersion": 1,
      "name": "Prey Mutagen (Major)",
      "itemType": "consumable",
      "level": 17,
      "rarity": "rare",
      "traits": [
        "alchemical",
        "consumable",
        "elixir",
        "mutagen",
        "polymorph"
      ],
      "description": "Activate 1 Interact\nA mixture of fey blood and rare ingredients give you incredible speed but also cause you to become particularly attractive to predators.\nBenefit You gain a +40 status bonus to your speed and are able to use the following reaction:\nTimely Dodge R\nTrigger You are targeted by a Strike\nEffect You dart aside, gaining a +4 circumstance bonus to AC, then Step after the Strike resolves.\nDrawback The range at which creatures can detect you with scent or tremorsense doubles. Animals and beasts gain a +2 circumstance bonus to attack rolls against you.\nThe duration is 1 hour.\nEffect: Prey Mutagen",
      "bulk": 0.1,
      "price": {
        "gp": 3000
      },
      "usage": "held-in-one-hand",
      "category": "mutagen",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:sentinel-horn",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "OCJ2dnG9z5xGEh1q",
      "slug": "sentinel-horn",
      "publicationTitle": "Pathfinder #195: Heavy is the Crown",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:a9537149d5b9705ae3ed424cd18b48dce2d26c8972f526ec83efd625e5526c79",
    "translatableHash": "sha256:0a75229e634447e85f083f7fabacb5194f50bfa99b75e2fde006614c328a6358",
    "data": {
      "schemaVersion": 1,
      "name": "Sentinel Horn",
      "itemType": "equipment",
      "level": 6,
      "rarity": "uncommon",
      "traits": [
        "auditory",
        "magical"
      ],
      "description": "This curved brass horn is a virtuoso instrument with a surprisingly deep tone, etched with images of interlocking lines and swirls. Sentinel horns come in pairs, and each works with only the other of its pair. The listed Price is for a pair of sentinel horns.\nActivate 2 Interact\nFrequency once per round\nEffect You play a specific tune on the horn. When you do, the other horn also plays the same tune, not matter how far away it is, as long as it is on the same plane.",
      "bulk": 1,
      "price": {
        "gp": 250
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:sigil-of-the-first-clan",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "9wjpW7vZJw5xA1yG",
      "slug": "sigil-of-the-first-clan",
      "publicationTitle": "Pathfinder #195: Heavy is the Crown",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:6ca44ec71ba370d8d7c3f1067e0053fc7c87531aa8d20eecb4d36ac28152556f",
    "translatableHash": "sha256:b4be848d8bdc2b39ad8c0e95e6b4ce8cc3774503527428e682ca793c7a3b680d",
    "data": {
      "schemaVersion": 1,
      "name": "Sigil of the First Clan",
      "itemType": "equipment",
      "level": 8,
      "rarity": "uncommon",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "This intricate gold and adamantine clasp depicts the sigil of Clan Taargick, house of the famed King Taargick, founder of Tar Taargadth. When displayed prominently, other dwarves give more weight to your words. You gain a +1 circumstance bonus to Diplomacy and Intimidation checks against dwarves and against anyone who considers themselves a staunch ally of Clan Taargick. Against anyone who considers Clan Taargick an enemy, such as worshippers of Droskar and many orcs, you instead take a –1 circumstance penalty to Diplomacy and Intimidation checks.\nActivate 1 command\nFrequency once per day\nEffect You wield the authority of Clan Taargick like a gavel, enforcing your word as law. You cast 1st-rank Command with a DC of 24.",
      "bulk": 0,
      "price": {
        "gp": 430
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:terror-spores",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "4AqxogIf4G5qZsq3",
      "slug": "terror-spores",
      "publicationTitle": "Pathfinder #195: Heavy is the Crown",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:fbf3f4ba3fc73a5f05bc290e03da0ec60c68eb2f73bd110fe9bb6f57e5bc17f8",
    "translatableHash": "sha256:e50b2cb29956a0c2c1d8453e3a266e7753b69aad7417f4826dbc457229986006",
    "data": {
      "schemaVersion": 1,
      "name": "Terror Spores",
      "itemType": "consumable",
      "level": 9,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "consumable",
        "inhaled",
        "poison"
      ],
      "description": "Activate 1 Interact\nBetter known as the shrieking toadstool, the tragzioma fungus releases spores when disturbed by browsers, sending nearby creatures into a screaming panic that attracts opportunistic carnivores. Delicate alchemical processes have stabilized and concentrated the spores into a poison.\nSaving Throw check (fortitude, dc:28)\nOnset 1 round\nMaximum Duration 6 rounds\nStage 1 Frightened 2 (1 round)\nStage 2 Frightened 3 (1 round)\nStage 3 frightened 3 and Fleeing for 1 round (1 round)",
      "bulk": 0.1,
      "price": {
        "gp": 110
      },
      "usage": "held-in-one-hand",
      "category": "poison",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:volcanic-vigor",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "l0UMYlCZEUaHExKt",
      "slug": "volcanic-vigor",
      "publicationTitle": "Pathfinder #195: Heavy is the Crown",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:fbe68df6d042743e9948469405e693dbf2074a71d13e9df6dd6d3ba76afe009b",
    "translatableHash": "sha256:2635e3be92608363a341db6ece416e0f99087fc265cc6e5223c58c1cc07529ff",
    "data": {
      "schemaVersion": 1,
      "name": "Volcanic Vigor",
      "itemType": "equipment",
      "level": 10,
      "rarity": "uncommon",
      "traits": [
        "fire",
        "invested",
        "magical",
        "tattoo"
      ],
      "description": "This tattoo takes the shape of a muscular orc, with molten flesh and hollow eye sockets that seep smoke. You don't take damage from extreme heat or severe heat.\nActivate 2 command\nFrequency once per day\nEffect You stomp on the ground, causing a 5-foot cylinder, 30- foot tall cylinder of lava to erupt from the ground within a range of 30 feet. The cylinder deals 7d6 fire damage. All creatures in the area must attempt a check (reflex, dc:27, basic, options:area-effect) save.",
      "bulk": 0,
      "price": {
        "gp": 900
      },
      "usage": "tattooed-on-the-body",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:tome-of-dripping-shadows",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Rf9sn0afKTzyFgaH",
      "slug": "tome-of-dripping-shadows",
      "publicationTitle": "Pathfinder #195: Heavy is the Crown",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:59c29745bedd5b24dd6fc7d79e853a11b4cd9589d4f2dc048dd0091e5d4574f2",
    "translatableHash": "sha256:2f46dbcd7629d73a274f29f2b73df786648e1f428785e63caf2fe0511c68022c",
    "data": {
      "schemaVersion": 1,
      "name": "Tome of Dripping Shadows",
      "itemType": "equipment",
      "level": 10,
      "rarity": "rare",
      "traits": [
        "grimoire",
        "illusion",
        "magical",
        "shadow"
      ],
      "description": "This book constantly drips evanescent tendrils of shadow that seethe and writhe. The tendrils have a will of their own, retreating from light sources and curling toward darkness. While you hold the tome, you gain darkvision; if you already have darkvision, you gain greater darkvision instead. Preparing spells from this tome strengthens your shadow magic and gives you a greater understanding of shadow spells you add to this tome. Any shadow spells you prepare from this tome that are at least 2 levels lower than the highest-rank spell you can cast are treated as 1 level higher for the purposes of counteracting them. When you add a shadow spell to this tome, you can prepare heightened versions of that spell up to the highest level of that spell that you are able to cast.\nActivate R envision\nFrequency once per day\nTrigger A target of a shadow spell you prepared from the grimoire critically fails a saving throw against the spell\nEffect You recall a fragment of the shadow magic that suffuses your target and wrap it around yourself like a caul. The triggering creature's saving throw result is a failure, not a critical failure. For the next minute, you become Concealed to all creatures and you are Hidden from the triggering creature, regardless of what precise sense it has. If you use a hostile action against the triggering creature, you become only concealed to it (rather than hidden) at the end of the hostile action.",
      "bulk": 0.1,
      "price": {
        "gp": 1000
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:toxic-effluence",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "vHAetFCiVDxAPdPD",
      "slug": "toxic-effluence",
      "publicationTitle": "Pathfinder #195: Heavy is the Crown",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-poisons/lich-dust.webp"
    },
    "sourceHash": "sha256:2080b9870da6d774d8b2962560c01eb919f67f969acdf1d0f2c22e8e57d71c6a",
    "translatableHash": "sha256:a6410c2df73105ce940c93f30c5b080d06e98c6b46cec1665c4e3ddc3ca6c6f1",
    "data": {
      "schemaVersion": 1,
      "name": "Toxic Effluence",
      "itemType": "consumable",
      "level": 10,
      "rarity": "rare",
      "traits": [
        "alchemical",
        "consumable",
        "contact",
        "poison"
      ],
      "description": "Activate 2 Interact\nThis dark green sludge has a caustic scent and gritty texture. Capable of entering the body through contact with flesh, toxic effluence becomes harmful once it hits the bloodstream, where it causes internal chemical burns, intense pain, and muscle spasms.\nSaving Throw check (fortitude, dc:29)\nMaximum Duration 6 rounds\nStage 1 3d6 poison damage, 3d6 fire damage, Clumsy 1, and Enfeebled 1 (1 round)\nStage 2 4d6 poison damage, 4d6 fire damage, Clumsy 2, and Enfeebled 2 (1 round)\nStage 3 5d6 poison damage, 5d6 fire damage, Clumsy 3, and Enfeebled 3 (1 round)",
      "bulk": 0.1,
      "price": {
        "gp": 160
      },
      "usage": "held-in-two-hands",
      "category": "poison",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:caverns-heart",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "IA7ySNhJxINR7x2e",
      "slug": "caverns-heart",
      "publicationTitle": "Pathfinder #195: Heavy is the Crown",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/runes/armor-property-runes/armor-property-runes.webp"
    },
    "sourceHash": "sha256:7de53901c1bb809a2f1d7f0e0af949d460b3f3c1a6c1368e69a048e6bdb7ce97",
    "translatableHash": "sha256:f84c9705d18f6e02b5b866f4aaac05507ee6f2207c4c6278e14cc9d1a2b24b04",
    "data": {
      "schemaVersion": 1,
      "name": "Cavern's Heart",
      "itemType": "equipment",
      "level": 14,
      "rarity": "rare",
      "traits": [
        "earth",
        "magical"
      ],
      "description": "This armor can channel your life force into an enhanced Wall of Stone.\nActivate 3 command\nFrequency once per day\nEffect By stamping your foot on the ground and calling out to spirits of stone, you summon a stone wall. This is a wall of stone, except that the wall is tied to your own life force. When the stone wall is damaged, you are damaged instead. If you are reduced to 0 HP, the wall is destroyed. The effect is dismissed if you move more than 30 feet away from the stone wall or if you spend a single action with the concentrate trait.",
      "bulk": 0,
      "price": {
        "gp": 4100
      },
      "usage": "etched-onto-med-heavy-armor",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:demons-knot",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "2TANKQXO6xntX5MT",
      "slug": "demons-knot",
      "publicationTitle": "Pathfinder #195: Heavy is the Crown",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/treasure/gems/greater-precious-stones/large-ruby.webp"
    },
    "sourceHash": "sha256:af7d80cb057ca24ef91f8244819c83af2ce737aca629dac28dbbe28cefd2c54b",
    "translatableHash": "sha256:ce53ac8809d66fe98e6b142cc22fdf951d3f2717c83df5d3d8c573912de2824c",
    "data": {
      "schemaVersion": 1,
      "name": "Demon's Knot",
      "itemType": "equipment",
      "level": 15,
      "rarity": "unique",
      "traits": [
        "artifact",
        "cursed",
        "evil",
        "invested",
        "magical",
        "unholy"
      ],
      "description": "The demon Kaivirris is housed in the magnificent ruby that serves as the centerpiece of this beautiful, goldplated, cold iron pendant necklace. Creatures within 30 feet of the demon's knot feel a subtle urge to acquire the necklace and take a –1 status penalty to Will saves.\nUpon donning the demon's knot, it fuses to you. You are subject to a Geas that requires you to free Kaivirris from his prison. If you die without completing this task, you become a sulfur zombie that always remains within 100 feet of the demon's knot and is under the control of whoever is cursed by the demon's knot.\nThe demon's knot sustains your physical form and protects your mind from mental control. You don't need to eat or drink. You become immune to the Confused and Controlled conditions.\nThe demon's knot corrupts anyone wearing it. You gain weakness to cold iron 10 and holy 10. Whenever you're within 60 feet of a celestial, you're Frightened 2 and can't reduce the value of the frightened condition below 2.\nActivate 1 command\nFrequency once per day\nEffect You allow Kaivirris's corrupting influence over you to outwardly manifest. For 1 minute, your features adopt a cruel cast, and you radiate a palpable aura of evil. During this time, you gain a +2 status bonus to Intimidation checks, and your Strikes deal an additional 1d6 spirit damage.\nEffect: Demon's Knot\nActivate 2 command, Interact\nFrequency once per day\nEffect The demon's knot casts Chilling Darkness.",
      "bulk": 0.1,
      "price": {},
      "usage": "wornnecklace",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:volcanic-vigor-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Eft7NqspkOtGv1Ov",
      "slug": "volcanic-vigor-greater",
      "publicationTitle": "Pathfinder #195: Heavy is the Crown",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:da2c3990c58c30a49607d9d650130785d31b383b163c8fd979a79519df4eec9f",
    "translatableHash": "sha256:774c5ac2e5a1241d5db9a8e50e05b6805da02838cb4153ae83be313810054ca2",
    "data": {
      "schemaVersion": 1,
      "name": "Volcanic Vigor (Greater)",
      "itemType": "equipment",
      "level": 15,
      "rarity": "uncommon",
      "traits": [
        "fire",
        "invested",
        "magical",
        "tattoo"
      ],
      "description": "This tattoo takes the shape of a muscular orc, with molten flesh and hollow eye sockets that seep smoke. You don't take damage from extreme heat or severe heat. While exposed to incredible heat, you take only minor heat damage every hour, instead of moderate heat damage every minute. You can see through ash and smoke.\nActivate 2 command\nFrequency once per day\nEffect You stomp on the ground, causing a 5-foot cylinder, 30- foot tall cylinder of lava to erupt from the ground within a range of 60 feet. You can choose to increase the radius of the cylinder to 10-foot cylinder. Similarly, the height of the cylinder increases to 60 feet. The cylinder deals 12d6 fire damage. All creatures in the area must attempt a check (reflex, dc:34, basic, options:area-effect) save.",
      "bulk": 0,
      "price": {
        "gp": 6000
      },
      "usage": "tattooed-on-the-body",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:cultist-cowl",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "bqUAjBYBI3Avb1hf",
      "slug": "cultist-cowl",
      "publicationTitle": "Pathfinder #200: Seven Dooms for Sandpoint",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:588e8191b8ed96839b45505505e0e93d50eb4f48d642e80680f7c8173e70eb30",
    "translatableHash": "sha256:4b830c0a68102e4ee8aeed4983cd0b4343a2eb17af3a7d6ce5614d3703f0e423",
    "data": {
      "schemaVersion": 1,
      "name": "Cultist Cowl",
      "itemType": "equipment",
      "level": 3,
      "rarity": "uncommon",
      "traits": [
        "divine",
        "magical"
      ],
      "description": "The fabric of a cultist cowl is either raspy burlap, durable cotton, or fine silk, depending on the item's power (and thus the implied import of the worshipper who wears it). When a character who worships a single deity dons a cultist cowl, the cowl's colors change to match those sacred to that deity, and the deity's symbol or rune appears on the lower front of the cowl that hangs just over the chest. These colors and symbols remain until a different worshipper wears the cowl. While worn, you gain a +1 item bonus to Religion checks. You also gain a +1 item bonus to all skill checks attempted to aid a ritual by being a secondary caster.",
      "bulk": 0,
      "price": {
        "gp": 60
      },
      "usage": "worncloak",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:demortification-oil",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Cu2zf4wi8UGzsyVC",
      "slug": "demortification-oil",
      "publicationTitle": "Pathfinder #200: Seven Dooms for Sandpoint",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-elixirs/prey-mutagen.webp"
    },
    "sourceHash": "sha256:9493b9f8e4cb06c9ab9eadf6cbd77d4f43e194a5069f89fa18006cc3675f0c46",
    "translatableHash": "sha256:846a116966d432ab26a8de419ccddc224f4d5ef071c4b06b60c39a5a6ff70c18",
    "data": {
      "schemaVersion": 1,
      "name": "Demortification Oil",
      "itemType": "consumable",
      "level": 5,
      "rarity": "rare",
      "traits": [
        "consumable",
        "magical",
        "oil"
      ],
      "description": "Activate 1 Interact\nThis foul-smelling oil has the appearance and odor of the greasy, thick fluids that seep from a decaying body. When you spread this oil on an intact corpse that has been dead no longer than 1 week, its decay fades and the corpse is restored to the condition it was just after death. Demortification oil can't undo damage done to a corpse after death, such as consumption by scavengers. Applied to a non-incorporeal undead, a dose of demortification oil grants the undead creature a +1 item bonus to Armor Class for 1 hour.\nEffect: Demortification Oil",
      "bulk": 0.1,
      "price": {
        "gp": 30
      },
      "usage": "held-in-two-hands",
      "category": "oil",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:midnight-milk-experimental",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "thqCdyIkkPUl2N3Y",
      "slug": "midnight-milk-experimental",
      "publicationTitle": "Pathfinder #200: Seven Dooms for Sandpoint",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:8fab170518849d1833eb43cf765bf115cf3f05cff37b1b6fd0ce6b9f11df8662",
    "translatableHash": "sha256:be688fd585f253ee42ea5635fd07cc4fcb111ae51fb565805187b2aaa994fc02",
    "data": {
      "schemaVersion": 1,
      "name": "Midnight Milk (Experimental)",
      "itemType": "consumable",
      "level": 5,
      "rarity": "rare",
      "traits": [
        "alchemical",
        "consumable",
        "drug",
        "ingested",
        "poison"
      ],
      "description": "Activate 1 Interact\nMidnight milk is a strange and powerful drug, originally invented by the intellect devourers of the alien city of Ilvarandin to remotely steal the bodies of distant dreaming victims through the use of an artifact called the Dream Lens. Pure midnight milk is incredibly rare—almost all of that found beyond the vault of Ilvarandin is instead cut to reduce costs and expenses. Crafting a dose of this dangerous drug requires a wide range of reagents; the most difficult to acquire of these reagents are vials of refined \"sweat\" harvested via a mithral blade from the fleshy fronds of a rare form of cavetongue fungus known as authul, which grows wild only in remote corners of the Vaults of Orv. When an alchemist mixes midnight milk, they must do so while in a trancelike state that approximates the dreaming mind—a classic method of reaching this state involves the repetition of a wordless chant spoken in a specific meter and rhyme scheme (one that the poet Vumeshki unknowingly duplicated with his dream-inspired poem, \"Ilvarandin\"). Recently, an experimental form of the drug created by the alchemist Aliver Podiker has been developed, but so far, attempts to replicate refined midnight milk using these methods have met with failure.\nSaving Throw check (fortitude, dc:19)\nOnset 10 minutes\nMaximum Duration 8 hours\nStage 1 +2 item bonus to Perception (1 hour)\nStage 2 Fatigued (1 hour)\nStage 3 Unconscious (1 hour; while unconscious, the creature dreams of being drawn down into the Darklands to be ruled by sinister unseen forces—to the dreaming creature, the effect seems to last for years, and the creature is fatigued upon awakening from this stage)",
      "bulk": 0.1,
      "price": {
        "gp": 30
      },
      "usage": "held-in-one-hand",
      "category": "drug",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:philter-of-empty-dreams",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "aEiop0DEVm4WpkPx",
      "slug": "philter-of-empty-dreams",
      "publicationTitle": "Pathfinder #200: Seven Dooms for Sandpoint",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-poisons/black-lotus-extract.webp"
    },
    "sourceHash": "sha256:b1256ccb851193f2f35c74c0b99a51a1588e292e06353bbb5ab744035774d78b",
    "translatableHash": "sha256:1ba6c41e300ddc252e66424bea6b80396ce19309b6d4465e38d5078deb0a3928",
    "data": {
      "schemaVersion": 1,
      "name": "Philter of Empty Dreams",
      "itemType": "consumable",
      "level": 6,
      "rarity": "rare",
      "traits": [
        "consumable",
        "magical",
        "potion"
      ],
      "description": "Activate 1 (manipulate)\nA philter of empty dreams is a dose of glowing blue liquid that prevents dreams. When you drink a philter of empty dreams, you have no dreams for the next 8 hours and gain a +1 item bonus to saving throws against dream- or nightmare-themed effects (including saving throws against the effects of midnight milk). If you're suffering from an addiction to midnight milk when you drink a philter of empty dreams, the potion attempts to counteract the addiction with a counteract rank of 4 and a 1d20+15 modifier for the roll. If an intellect devourer who's controlling a stolen body uses the body to drink a philter of empty dreams, the intellect devourer must succeed at a check (fortitude, dc:24) save or be forced to Exit the Body immediately.",
      "bulk": 0.1,
      "price": {
        "gp": 90
      },
      "usage": "held-in-one-hand",
      "category": "potion",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:monarch",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "jVDSXbfq0ukHeSkK",
      "slug": "monarch",
      "publicationTitle": "Pathfinder #200: Seven Dooms for Sandpoint",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:6f4cfb96340591348e8ee8251a9148118b57ece944a684bb5f61a245a6efc6ae",
    "translatableHash": "sha256:462eba26350f7de294ccc57248888a51334ad273495c23a0091421137a4516bc",
    "data": {
      "schemaVersion": 1,
      "name": "Monarch",
      "itemType": "weapon",
      "level": 6,
      "rarity": "unique",
      "traits": [
        "agile",
        "air",
        "deadly-d6",
        "divine",
        "finesse",
        "relic",
        "thrown-20",
        "versatile-s"
      ],
      "description": "Monarch functions as a +1 striking returning starknife that can't have additional property runes, as it's a specific item. Monarch deals an additional 1d6 untyped damage to creatures with the aberration trait, provided the creature isn't disguised as another creature.\nActivate 10 minutes (envision, Interact)\nFrequency once per day\nRequirements Monarch must possess a major gift\nEffect Monarch casts Dream Message (heightened to 4th rank) to your specifications.",
      "bulk": 0.1,
      "price": {},
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "knife",
      "damage": {
        "dice": 1,
        "die": "d4",
        "type": "piercing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:flickering",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "p6RmUi2zCSmjd737",
      "slug": "flickering",
      "publicationTitle": "Pathfinder #200: Seven Dooms for Sandpoint",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/runes/weapon-property-runes/weapon-property-runes.webp"
    },
    "sourceHash": "sha256:2512917137b2fd0cfaf96aa0633a0f8b657e15c6daedf0e0ab0165b643cdc4a0",
    "translatableHash": "sha256:b777aa6edd44099c84d8aa2658c2aaabf696ac6b6c3a086eb850fab64d52bb9d",
    "data": {
      "schemaVersion": 1,
      "name": "Flickering",
      "itemType": "equipment",
      "level": 6,
      "rarity": "uncommon",
      "traits": [
        "magical"
      ],
      "description": "A flickering rune causes a weapon to shimmer, grow blurry and indistinct, and momentarily turn invisible at random intervals for a second or two. A flickering weapon adds its item bonus from its potency rune to the DC against attempts to Disarm or Steal it. On a critical hit, the weapon flashes bright pulses of color into the creature's eyes, Dazzling the creature for 1 round (this effect has the visual trait).\nActivate 2 envision, Interact\nFrequency once per day\nEffect The flickering weapon casts Blur to your specification.",
      "bulk": 0,
      "price": {
        "gp": 250
      },
      "usage": "etched-onto-a-weapon",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:devils-breath-incense",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "64aQTlUq7VaBTjpd",
      "slug": "devils-breath-incense",
      "publicationTitle": "Pathfinder #200: Seven Dooms for Sandpoint",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:6d44e38c96d5f7532ee9f86a29fc5d1c79986f9cb162981fdecad791b0cfb299",
    "translatableHash": "sha256:d459a26a57248c4fad13ef213919c7b6f61c18fd1a3cc04bd89cf5d6676ed54a",
    "data": {
      "schemaVersion": 1,
      "name": "Devil's Breath Incense",
      "itemType": "consumable",
      "level": 7,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "divine"
      ],
      "description": "Activate 1 Interact\nThis 6-inch-long stick of gray-green incense has an unsettling, oily look to it. When burned, a stick of devil's breath incense emits a brimstone-like stink and burns for 10 minutes. Varisian tales claim the stink of this incense closely matches the odor of the breath of the Sandpoint Devil, although it doesn't come close to the full stink of its flaming exhalations. A creature within 10 feet of a stick of burning devil's breath incense must succeed at a check (fortitude, dc:23, options:area-effect,inflicts:sickened) save or become Sickened 1 (Sickened 2 on a critical failure), after which they're temporarily immune to the incense for 1 hour.\nWhile a stick of devil's breath incense is burning, an adjacent creature can lean over the stick to inhale forcefully as an Interact action. Doing so consumes the entire stick immediately and automatically makes the creature Sickened 3, but when the creature exhales its next breath, the cloud of smoke they breathe out attempts to carry with it a single curse the creature is afflicted by. The incense has a counteract level of 4 and a 1d20+12 modifier for the roll. If used to remove the effects of the Sandpoint Devil's Accursed Breath (or similar effects, such as the Cursed Flames that the goblin witch Minargul can create), the devil's breath incense automatically succeeds at removing the curse, regardless of the level of the curse itself.",
      "bulk": 0.1,
      "price": {
        "gp": 70
      },
      "usage": "other",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:ghost-stone",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "g1AeVS3yQULgJt9X",
      "slug": "ghost-stone",
      "publicationTitle": "Pathfinder #200: Seven Dooms for Sandpoint",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:9ca3ef602ead6b2dd75f16e766c7aaf29d1a74cde5bac941b0a2b3adc4fbbfb9",
    "translatableHash": "sha256:ecf7fe401854df204146fc36e06f400b488fe00ba636f9e921271409b106d2a3",
    "data": {
      "schemaVersion": 1,
      "name": "Ghost Stone",
      "itemType": "equipment",
      "level": 7,
      "rarity": "unique",
      "traits": [
        "magical"
      ],
      "description": "",
      "bulk": 18,
      "price": {},
      "usage": "other",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:cultist-cowl-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "GWaTch1J0tPjoi8s",
      "slug": "cultist-cowl-greater",
      "publicationTitle": "Pathfinder #200: Seven Dooms for Sandpoint",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:dd9c00001c92007a2c364e3f11987b6a83f3c0664467af2b5e059b761d8d388b",
    "translatableHash": "sha256:1a658fa98c0afea7caf4ef060035ba895ad36806cd1e268dab2d174dc089ddc0",
    "data": {
      "schemaVersion": 1,
      "name": "Cultist Cowl (Greater)",
      "itemType": "equipment",
      "level": 9,
      "rarity": "uncommon",
      "traits": [
        "divine",
        "magical"
      ],
      "description": "The fabric of a cultist cowl is either raspy burlap, durable cotton, or fine silk, depending on the item's power (and thus the implied import of the worshipper who wears it). When a character who worships a single deity dons a cultist cowl, the cowl's colors change to match those sacred to that deity, and the deity's symbol or rune appears on the lower front of the cowl that hangs just over the chest. These colors and symbols remain until a different worshipper wears the cowl. While worn, you gain a +2 item bonus to Religion checks. You also gain a +2 item bonus to all skill checks attempted to aid a ritual by being a secondary caster.\nActivate 2 envision, command\nFrequency once per hour\nEffect The cowl casts Crisis of Faith (check (will, dc:25, traits:mental, options:spell)) to your specification.",
      "bulk": 0,
      "price": {
        "gp": 650
      },
      "usage": "worncloak",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:the-hollow-star",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "MPwrN4KBPycME0tl",
      "slug": "the-hollow-star",
      "publicationTitle": "Pathfinder #200: Seven Dooms for Sandpoint",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:e3ec2d3646b404d7fcd70a39122bd967127c637018034940ab87bc9622175237",
    "translatableHash": "sha256:707f8a31c53279d55163db42a567ea1a32402d254a2f189f12b0bcfa9ebd3b3d",
    "data": {
      "schemaVersion": 1,
      "name": "The Hollow Star",
      "itemType": "equipment",
      "level": 9,
      "rarity": "unique",
      "traits": [
        "magical"
      ],
      "description": "This roughly spherical mass of orange crystal is about the size of a human head. The sphere is opaque but glows from within as if it contained a bright flickering flame—the Hollow Star emits bright light in a 60-foot radius (and dim light to the next 60 feet). Any creature within the bright light of the Hollow Star gains a +1 item bonus to Occultism checks. Deros in the bright light shed by the Hollow Star suffer distracting but pleasant hallucinations and strange visions, and they become Stupefied 1 when in this illumination. If you're lawful, you're Enfeebled 2 while carrying the Hollow Star. If you touch the Hollow Star, your dreams the next time you sleep are strange, unsettling, hard to remember, and carry a vague sense of elation, doom, or both. Upon awakening, you must succeed at a check (will, dc:25) save or become Stupefied 1 by unsettling dreams that feel disturbingly like memories from a life lived on a distant dying planet.\nThe Keepers of the Hollow Star believe that this unique magical item, if allowed to bathe for an unspecified amount of time in sunlight, will bring Azathoth into that world's sun to destroy it. However, the item has no actual capacity to do so. Yet.\nActivate r (divination)\nTrigger You cast a spell or use an effect that has the linguistic trait\nEffect You speak in Aklo when using the linguistic spell or effect, even if you don't normally speak Aklo. If the spell or effect requires a spell attack roll, you gain a +1 item bonus to the roll. If the spell or effect can be resisted with a saving throw, all saves against the effect suffer a –1 item penalty.\nActivate 2 (death, emotion, fear, illusion, mental)\nFrequency once per day\nEffect The Hollow Star casts Phantasmal Killer (check (will, dc:25, traits:death,emotion,fear,illusion,mental, options:spell), check (fortitude, dc:25, traits:death,emotion,fear,illusion,incapacitation,mental, options:spell)). The target of this effect receives a brief but overwhelming vision of the world ending as an immense explosion in the sky expands to engulf the world.\nActivate 3 (conjuration)\nFrequency once per day\nEffect The Hollow Star conjures an aberration to fight for you. This works like Summon Animal, except you summon a common creature that has the aberration trait and whose level is 3 or lower.",
      "bulk": 1,
      "price": {
        "gp": 700
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:nightmare",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "TRUl7Iro5aKtqFMA",
      "slug": "nightmare",
      "publicationTitle": "Pathfinder #200: Seven Dooms for Sandpoint",
      "license": "OGL",
      "remaster": false
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/runes/weapon-property-runes/weapon-property-runes.webp"
    },
    "sourceHash": "sha256:42fda7f32dbd53dafded1045352b29ccf2a4f5b06235318fc2e4d6d7cbdf2a7e",
    "translatableHash": "sha256:c70e10f1969bd1e7057d8fe717af5d2caac7d1645e07417b28db9cd93cb8e193",
    "data": {
      "schemaVersion": 1,
      "name": "Nightmare",
      "itemType": "equipment",
      "level": 9,
      "rarity": "uncommon",
      "traits": [
        "magical"
      ],
      "description": "A nightmare rune creates minor phantasmal alterations to a weapon's appearance so that those who look upon it see subtle reminders of their deepest fears. An arachnophobe might interpret the cross guard of a nightmare longsword to look like curving, twitching spider legs, for example, while someone who's afraid of sickness might see a nightmare club as a diseased length of bone crawling with flies. These images are all in the mind of the observer, but they also infuse the weapon with additional power. When you hit with a nightmare weapon, add 1d6 mental damage to the damage dealt. In addition, on a critical hit, the target becomes Stupefied 1 by overwhelming visions in their mind of personal horrors that linger. If you critically hit a creature that's already stupefied, it becomes Frightened 2 as well. These critical hit effects have the emotion, fear, and mental traits.\nActivate 10 minutes (envision, Interact)\nFrequency once per day\nEffect The nightmare weapon casts Nightmare to your specifications.",
      "bulk": 0,
      "price": {
        "gp": 250
      },
      "usage": "etched-onto-a-weapon",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:clockwork-songbird",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "mnEj7ll9WffO8WLu",
      "slug": "clockwork-songbird",
      "publicationTitle": "Pathfinder #200: Seven Dooms for Sandpoint",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:707bf639ee7b7c1f82ee4d0e6c565f81e70796533a73fed41cfe9c506d23f653",
    "translatableHash": "sha256:81ebfc9e525558e5ba3fc8578514a8a6cf1d8b953e4015b186a7d061208a68ca",
    "data": {
      "schemaVersion": 1,
      "name": "Clockwork Songbird",
      "itemType": "equipment",
      "level": 10,
      "rarity": "unique",
      "traits": [
        "clockwork",
        "magical"
      ],
      "description": "Originally constructed by the Thassilonian wizard Liralarue to serve as a key for a treasure vault, this clockwork songbird has other functions as well. Liralarue took the songbird apart once she realized Thassilon faced a mysterious doom, then hid the parts in her domain. The parts survived but never traveled too far from the region that would become known as the Sandpoint Hinterlands.\nBefore the clockwork songbird can be used, its six components (the body, the left and right wings a one piece, the legs and tail, the head, and the winding key) must first be recovered. Once all six parts are at hand, a character can reassemble the clockwork songbird as a 1-hour activity that requires a check (crafting, dc:27) check. A character who critically fails at this check causes the components to generate a blast of devastating sound, inflicting 7d6 sonic damage to the character (check (reflex, dc:27, basic) save).\nOnce reconstructed, the clockwork songbird can be activated in the following three ways.\nActivate 2 Interact\nEffect The clockwork songbird animates and sings a complex birdsong that lasts for 1 minute. The song is soothing and pleasant but impossible to accurately repeat, as each time the clockwork is activated in this way, its next song differs slightly. Regardless, this activation also functions to activate the portal in area H13 in the Pit.\nActivate 2 Interact\nFrequency once per day\nEffect The songbird leaps into the air and flies in a circle, swooping around an area around you for 10 minutes as it sings. The songbird never travels further than 50 feet from the location where you activated it. It returns to that location at the end of the duration, at which point the songbird casts Peaceful Bubble at that location before going quiet once again. The effect remains in place for 24 hours.\nActivate 2 Interact\nFrequency once per day\nEffect You place the clockwork songbird on a stable surface, and it casts an Alarm spell heightened to 3rd rank to your specifications. When the alarm is triggered, it does so in the form of a loud warbling birdsong sung by the clockwork. If the clockwork songbird is moved from its location before the alarm spell's duration has run its course, the spell ends.",
      "bulk": 0.1,
      "price": {
        "gp": 1000
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:liars-lexicon",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "oj5Lz69dxGYR6xAR",
      "slug": "liars-lexicon",
      "publicationTitle": "Pathfinder #200: Seven Dooms for Sandpoint",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:142362b4b68c21918794fa4e9b07f783b6ced63e797c8404c7a457778734d827",
    "translatableHash": "sha256:38247a59716c82ea49dd3c1aba5d5a7509598ef0cc792b6e9ec4ff1399d01139",
    "data": {
      "schemaVersion": 1,
      "name": "Liar's Lexicon",
      "itemType": "equipment",
      "level": 10,
      "rarity": "rare",
      "traits": [
        "grimoire",
        "magical"
      ],
      "description": "The covers of this book are bound in scratchy, purple leather—hide harvested from a mind-manipulating wormlike monster known as a seugathi. The margins of this grimoire contain hundreds of tips and notes to avoid having your lies discovered. When you prepare spells from a liar's lexicon, you gain a +2 item bonus to Deception checks to Lie.\nActivate 1 envision (spellshape)\nFrequency once per day\nEffect If your next action is to cast a spell that has the emotion trait, your skill at manipulation and exploiting emotion enhance the spell. The spell gains the linguistic trait. Attempt a Deception check to Lie as you cast the spell against the Perception DC of all those observing you. Those you succeed against think you were merely talking, not casting a spell on a creature.",
      "bulk": 0.1,
      "price": {
        "gp": 1000
      },
      "usage": "other",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:midnight-milk-refined",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "EX8Ta6J56SNrYbqJ",
      "slug": "midnight-milk-refined",
      "publicationTitle": "Pathfinder #200: Seven Dooms for Sandpoint",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:778dedfbfd452005d1431f943d6116f56ddffb6694753e1689408765f32f258f",
    "translatableHash": "sha256:52871a11919f491c725a6bb796c2f7527d89cd421f0ceb1a475b673cf1d777f7",
    "data": {
      "schemaVersion": 1,
      "name": "Midnight Milk (Refined)",
      "itemType": "consumable",
      "level": 12,
      "rarity": "rare",
      "traits": [
        "alchemical",
        "consumable",
        "drug",
        "ingested",
        "poison"
      ],
      "description": "Activate 1 Interact\nMidnight milk is a strange and powerful drug, originally invented by the intellect devourers of the alien city of Ilvarandin to remotely steal the bodies of distant dreaming victims through the use of an artifact called the Dream Lens. Pure midnight milk is incredibly rare—almost all of that found beyond the vault of Ilvarandin is instead cut to reduce costs and expenses. Crafting a dose of this dangerous drug requires a wide range of reagents; the most difficult to acquire of these reagents are vials of refined \"sweat\" harvested via a mithral blade from the fleshy fronds of a rare form of cavetongue fungus known as authul, which grows wild only in remote corners of the Vaults of Orv. When an alchemist mixes midnight milk, they must do so while in a trancelike state that approximates the dreaming mind—a classic method of reaching this state involves the repetition of a wordless chant spoken in a specific meter and rhyme scheme (one that the poet Vumeshki unknowingly duplicated with his dream-inspired poem, \"Ilvarandin\"). Recently, an experimental form of the drug created by the alchemist Aliver Podiker has been developed, but so far, attempts to replicate refined midnight milk using these methods have met with failure.\nSaving Throw check (fortitude, dc:29)\nOnset 1 minute\nMaximum Duration 8 hours\nStage 1 +3 item bonus to Perception (1 hour)\nStage 2 Unconscious (1 hour; if the creature recovers from the dosage and wakes up before reaching Stage 3, they don't remember their vivid dreams but do wake up feeling revitalized as if they'd enjoyed a full 8 hours of sleep—this doesn't allow the creature to perform their daily preparations more often than once per day though)\nStage 3 unconscious (1 hour; the vivid dreams the creature enjoys at stage 2 shift into phantasmagoric nightmares as described in the text above—during this stage, the creature is a viable Dream Lens target, and once a creature recovers and awakens from stage 3, they're Fatigued)",
      "bulk": 0.1,
      "price": {
        "gp": 400
      },
      "usage": "held-in-one-hand",
      "category": "drug",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:cultist-cowl-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "uKB9FBAoAsj46UgA",
      "slug": "cultist-cowl-major",
      "publicationTitle": "Pathfinder #200: Seven Dooms for Sandpoint",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:b20e375efd1b684019cb524a354455d31b506f701ff92830455f286f387a4590",
    "translatableHash": "sha256:1eb24c0442121ab54c8fa6999cc77d66a10b360bbc7c594547711fd109001cf7",
    "data": {
      "schemaVersion": 1,
      "name": "Cultist Cowl (Major)",
      "itemType": "equipment",
      "level": 17,
      "rarity": "uncommon",
      "traits": [
        "divine",
        "magical"
      ],
      "description": "The fabric of a cultist cowl is either raspy burlap, durable cotton, or fine silk, depending on the item's power (and thus the implied import of the worshipper who wears it). When a character who worships a single deity dons a cultist cowl, the cowl's colors change to match those sacred to that deity, and the deity's symbol or rune appears on the lower front of the cowl that hangs just over the chest. These colors and symbols remain until a different worshipper wears the cowl. While worn, you gain a +3 item bonus to Religion checks. You also gain a +3 item bonus to all skill checks attempted to aid a ritual by being a secondary caster.\nActivate 2 envision, command\nFrequency once per hour\nEffect The cowl casts Crisis of Faith (check (will, dc:37, traits:mental, options:spell)) heightened to 7th-rank to your specification.",
      "bulk": 0,
      "price": {
        "gp": 14000
      },
      "usage": "worncloak",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:dream-lens",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "KBLQtEU6Ya9LT8WW",
      "slug": "dream-lens",
      "publicationTitle": "Pathfinder #200: Seven Dooms for Sandpoint",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:d5ddc1d2158461ab1d67165f0e3fd1bd4564990e5b57061b06206c28f153a8c7",
    "translatableHash": "sha256:042edbecc9f700a920b932bfaa5cab68bce9991005a3845b3cc1acfe96f06e7c",
    "data": {
      "schemaVersion": 1,
      "name": "Dream Lens",
      "itemType": "equipment",
      "level": 20,
      "rarity": "rare",
      "traits": [
        "artifact",
        "magical"
      ],
      "description": "",
      "bulk": 10,
      "price": {},
      "usage": "other",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:midnight-milk-pure",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "L5cDsqIYsDsW7BKA",
      "slug": "midnight-milk-pure",
      "publicationTitle": "Pathfinder #200: Seven Dooms for Sandpoint",
      "license": "OGL",
      "remaster": false
    },
    "sourceHash": "sha256:e8ded6ad83256c867db93d1c8b9b08c262cc3176b43fe52b7b2c7770f15e424c",
    "translatableHash": "sha256:0b6ede763a9ca0e9342e0a0d8afd33a61439ff73caa8d8b74b531944d64cc558",
    "data": {
      "schemaVersion": 1,
      "name": "Midnight Milk (Pure)",
      "itemType": "consumable",
      "level": 20,
      "rarity": "rare",
      "traits": [
        "alchemical",
        "consumable",
        "drug",
        "ingested",
        "poison"
      ],
      "description": "Activate 1 Interact\nMidnight milk is a strange and powerful drug, originally invented by the intellect devourers of the alien city of Ilvarandin to remotely steal the bodies of distant dreaming victims through the use of an artifact called the Dream Lens. Pure midnight milk is incredibly rare—almost all of that found beyond the vault of Ilvarandin is instead cut to reduce costs and expenses. Crafting a dose of this dangerous drug requires a wide range of reagents; the most difficult to acquire of these reagents are vials of refined \"sweat\" harvested via a mithral blade from the fleshy fronds of a rare form of cavetongue fungus known as authul, which grows wild only in remote corners of the Vaults of Orv. When an alchemist mixes midnight milk, they must do so while in a trancelike state that approximates the dreaming mind—a classic method of reaching this state involves the repetition of a wordless chant spoken in a specific meter and rhyme scheme (one that the poet Vumeshki unknowingly duplicated with his dream-inspired poem, \"Ilvarandin\"). Recently, an experimental form of the drug created by the alchemist Aliver Podiker has been developed, but so far, attempts to replicate refined midnight milk using these methods have met with failure.\nSaving Throw check (fortitude, dc:43)\nStage 1 +3 item bonus to Perception checks and Will saving throws\nStage 2 Unconscious (1 hour; the creature endures phantasmagoric nightmares as described in the text above—during this stage, the creature is a viable Dream Lens target, and once a creature recovers and awakens from stage 3, they're Fatigued)\nStage 3 as stage 2 (1 day)",
      "bulk": 0.1,
      "price": {
        "gp": 14000
      },
      "usage": "held-in-one-hand",
      "category": "drug",
      "group": "consumable"
    }
  }
]
