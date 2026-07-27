import type { Pathfinder2eOriginalContentRecord } from '../../records'
import type { Pathfinder2eItemData } from '../types'

export const PATHFINDER_2E_EXHAUSTIVE_06_ITEM_ORIGINALS: readonly Pathfinder2eOriginalContentRecord<Pathfinder2eItemData>[] = [
  {
    "contentId": "pf2e:item:equipment-srd:potion-of-cold-retaliation-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "tW2rmGSanKQlUkiU",
      "slug": "potion-of-cold-retaliation-greater",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/potions/potion-of-cold-retalliation.webp"
    },
    "sourceHash": "sha256:096ad136e8961b444f26364f68019805e2fb01a9ec000bed679aa82821efea57",
    "translatableHash": "sha256:3950d344d1ee2834383ca70657d9b2c245848fdde6607938e19bb0cd55e82815",
    "data": {
      "schemaVersion": 1,
      "name": "Potion of Cold Retaliation (Greater)",
      "itemType": "consumable",
      "level": 12,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "potion"
      ],
      "description": "Activate 1 (manipulate)\nFor 1 minute after drinking a potion of cold retaliation, you glow with a faint aura of cold energy, and a creature that touches you (such as by making an unarmed attack or using a spell with a range of touch against you) or is adjacent to you and hits you with a melee weapon strike takes cold damage.\nThe aura deals 3d6[cold] damage.",
      "bulk": 0.1,
      "price": {
        "gp": 400
      },
      "usage": "held-in-one-hand",
      "category": "potion",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:bottled-catharsis-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "vMs9n8oXlZttcJkX",
      "slug": "bottled-catharsis-greater",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-elixirs/focus-cathartic.webp"
    },
    "sourceHash": "sha256:34d14610e878f7c5c4d2104c340d8205c22cdf9e3092f6183726a7c97634c6b5",
    "translatableHash": "sha256:0b4a2666842250d6f58451661a2cc92d1b865ecf665699fba8965a58ffef4916",
    "data": {
      "schemaVersion": 1,
      "name": "Bottled Catharsis (Greater)",
      "itemType": "consumable",
      "level": 12,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "elixir",
        "healing"
      ],
      "description": "Activate 1 (manipulate)\nThis drink unlocks a flood of emotions that helps reset your mental state. When you drink this elixir, the elixir attempts to counteract at 6th-rank and has a [[/r 1d20+19 #Counteract]]{+19} counteract modifier each effect on you that has the emotion trait or is inflicting the Stupefied condition on you, using the listed counteract rank and modifier.",
      "bulk": 0.1,
      "price": {
        "gp": 325
      },
      "usage": "held-in-one-hand",
      "category": "elixir",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:slumber-wine",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "z7eOUqVwyht6tj11",
      "slug": "slumber-wine",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-poisons/slumber-wine.webp"
    },
    "sourceHash": "sha256:a069cba1315708e2ec6ddf25ce688ccd9e0f6c50dccdb2dfdc12f4771d59c2bf",
    "translatableHash": "sha256:79e4dd2e5d9dcb1a2834c0bcf8480c993032265ecfd0e10877fed8def372e124",
    "data": {
      "schemaVersion": 1,
      "name": "Slumber Wine",
      "itemType": "consumable",
      "level": 12,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "ingested",
        "poison",
        "sleep"
      ],
      "description": "Slumber wine sees its greatest use in matters of social intrigue, where an absence can be more devastating than injury. Characters unconscious from slumber wine can't wake up by any means while the poison lasts, don't need to eat or drink while unconscious in this way, and appear to be recently dead unless an examiner succeeds at a check (medicine, dc:40, showDC:all, name:Identify Slumber Wine) check.\nActivate A (manipulate)\nSaving Throw check (fortitude, dc:32, showDC:all)\nOnset 1 hour\nMaximum Duration 7 days\nStage 1 Unconscious (1 day)\nStage 2 unconscious (2 days)\nStage 3 unconscious (3 days)",
      "bulk": 0.1,
      "price": {
        "gp": 325
      },
      "usage": "held-in-one-hand",
      "category": "poison",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-smoldering-fireballs-5th-rank-spell",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "zToq18jKonWIp48U",
      "slug": "wand-of-smoldering-fireballs-5th-rank-spell",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/wands/specialty-wands/wand-of-smoldering-fireballs.webp"
    },
    "sourceHash": "sha256:4824f1f5e83b265e35f1f86c4adb777582eefce421a0274c2aa4372088395d17",
    "translatableHash": "sha256:5438e279b28ba465f3e177496c8c872cd13247141c67fe9709fa036aed39c93e",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Smoldering Fireballs (5th-Rank Spell)",
      "itemType": "consumable",
      "level": 12,
      "rarity": "common",
      "traits": [
        "fire",
        "magical",
        "wand"
      ],
      "description": "This blackened, heavily burned stick smells faintly of saltpeter.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast Fireball at 5th-rank. Each creature that fails its save takes 2d6[persistent,fire] damage.\nCraft Requirements Supply a casting of fireball at 5th-rank.",
      "bulk": 0.1,
      "price": {
        "gp": 2000
      },
      "usage": "held-in-one-hand",
      "category": "wand",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:holy-chain",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "2uHcTZ40oZ62R9gy",
      "slug": "holy-chain",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/armor/specific-magic-armor/celestial-armor.webp"
    },
    "sourceHash": "sha256:3b1f48d59bde69027ebd082c22997dd72487288ed34b56b4005bf139ee4be0c0",
    "translatableHash": "sha256:c12644761636f2dbd25a3e93080307150030fd6a0ba25fb91b394fdf14276b95",
    "data": {
      "schemaVersion": 1,
      "name": "Holy Chain",
      "itemType": "armor",
      "level": 13,
      "rarity": "common",
      "traits": [
        "divine",
        "holy",
        "invested",
        "noisy"
      ],
      "description": "This suit of +2 resilient chain mail is made of fine white links of a strange and slightly translucent pale metal, and the sleeves and skirt are fashioned into smaller trails that resemble feathers. Unlike normal chain mail, holy chain has no Speed reduction, its armor check penalty is 0, and its Bulk is 1.\nYou gain a +1 circumstance bonus to AC and saving throws against fiends. You appear radiant while you wear the armor, giving you a +2 item bonus to Diplomacy checks against all creatures except fiends.\nIf you're unholy, you're Drained 2 while wearing holy chain. You can't recover from this condition while wearing the armor.\nActivate—Celestial Flight 1 (concentrate)\nFrequency once per day\nEffect The armor sprouts glowing wings that grant you a fly Speed of 30 feet. The wings shed bright light in a 40-foot radius (and dim light to the next 40 feet). The wings fade away after 10 minutes.\nEffect: Holy Chain\nCraft Requirements You're holy.",
      "bulk": 1,
      "price": {
        "gp": 2500
      },
      "usage": "",
      "category": "medium",
      "group": "chain",
      "armor": {
        "armorClassBonus": 4,
        "dexterityCap": 1,
        "checkPenalty": 0,
        "speedPenaltyFeet": 0
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:deathcap-powder",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "87AzvRja9uQOLJCC",
      "slug": "deathcap-powder",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:fa3e123d7545dd1435e135b0c38144e6bf030ea7a6b5442a47a8d171d7677759",
    "translatableHash": "sha256:c3be1d80120e10754785ebcf31b4179b546e9917bd0b591a920b91339b20fb0d",
    "data": {
      "schemaVersion": 1,
      "name": "Deathcap Powder",
      "itemType": "consumable",
      "level": 13,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "ingested",
        "poison"
      ],
      "description": "The toxic deathcap mushroom can be dried, ground, and treated to form a flavorless powder with accelerated effects.\nActivate A (manipulate)\nSaving Throw check (fortitude, dc:33, showDC:all)\nOnset 10 minutes\nMaximum Duration 6 minutes\nStage 1 7d8[poison] damage (1 minute)\nStage 2 9d6[poison] damage and Sickened 2 (1 minute)\nStage 3 8d10[poison] damage and Sickened 3 (1 minute)",
      "bulk": 0.1,
      "price": {
        "gp": 450
      },
      "usage": "held-in-one-hand",
      "category": "poison",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-overflowing-life-5th-rank-spell",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "aj2eTtEAgLu4f14b",
      "slug": "wand-of-overflowing-life-5th-rank-spell",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/wands/specialty-wands/wand-of-overflowing-life.webp"
    },
    "sourceHash": "sha256:67f1da200b9995818ca7fbbf3d9985de0b85bd8b6c114f7d438579762da81ca7",
    "translatableHash": "sha256:bd1d5d9621652116af05f59febba4fa865504681dd68d40a9705d412981b9155",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Overflowing Life (5th-Rank Spell)",
      "itemType": "consumable",
      "level": 13,
      "rarity": "common",
      "traits": [
        "healing",
        "magical",
        "vitality",
        "wand"
      ],
      "description": "This alabaster wand has a clear crystal at the tip.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast Heal at 5th-rank.\nAfter you cast the spell, at the start of your next turn, excess healing magic wells up from the wand and heals you, as though you cast the 1-action version of heal on yourself at 5th-rank. You gain this benefit only once per turn, even if you cast multiple heal spells from wands of overflowing life in the same turn.\nCraft Requirements Supply a casting of heal at 5th-rank.",
      "bulk": 0.1,
      "price": {
        "gp": 3000
      },
      "usage": "held-in-one-hand",
      "category": "wand",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:unholy-plate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "hYBZK1kaGPeR85CH",
      "slug": "unholy-plate",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/armor/specific-magic-armor/demon-armor.webp"
    },
    "sourceHash": "sha256:3a33a7c7579e0d78aaacafb3169f7a83a1aabe5e07f0a1f65e782bc5b2ebcf27",
    "translatableHash": "sha256:6e6db51efba573e399b74c40035a994231352b7e40059701525f506ea6945904",
    "data": {
      "schemaVersion": 1,
      "name": "Unholy Plate",
      "itemType": "armor",
      "level": 13,
      "rarity": "common",
      "traits": [
        "bulwark",
        "divine",
        "invested",
        "unholy"
      ],
      "description": "Crafted from black iron, this crude suit of +2 resilient full plate is designed to make you look like a horned demon with your face peering out of the screaming maw of the beast.\nWhile wearing the armor, you can attack with the helmet's horns. They're a martial melee weapon with the effects of a +2 weapon potency rune. They deal 2d8 piercing damage and have the deadly d12 and unholy traits. On a critical hit with the horns, the target must succeed at a check (fortitude, dc:30, showDC:all, options:inflicts:drained) or become Drained 1 (or Drained 2 on a critical failure). The horns can't be etched with any runes.\nIf you're holy, you're Drained 2 and can't recover from this condition while wearing unholy plate.\nActivate—Demonic Slip 2 (concentrate)\nFrequency once per day\nEffect You cast Translocate.\nCraft Requirements You're unholy; supply one casting of translocate.",
      "bulk": 4,
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
    "contentId": "pf2e:item:equipment-srd:medusas-scream",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "nzQKwdUxzmmwWtzT",
      "slug": "medusas-scream",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:5ac9993b86f786a4c771e1007c462458cb46f798ad32fc673636b4843e1b6f1c",
    "translatableHash": "sha256:8bfa81abb1d4ca47f16d4446146007aa90beaccb41139468d70e07a01d025769",
    "data": {
      "schemaVersion": 1,
      "name": "Medusa's Scream",
      "itemType": "shield",
      "level": 13,
      "rarity": "common",
      "traits": [
        "magical"
      ],
      "description": "The ghastly visage of a slain medusa's head stares out from this steel shield (Hardness 13, HP 52, BT 26). The shield comes with a thick leather cover to conceal the head.\nActivate—Petrifying Gaze 2 (manipulate, visual)\nFrequency once per day\nEffect You reveal the medusa's face, focusing its gaze on one creature within 30 feet. The shield casts a DC 30 Petrify spell with a range of 30 feet.\nCraft Requirements The initial raw materials must include the head of a medusa.\nHardness | HP | BT |\n13 | 52 | 26 |",
      "bulk": 1,
      "price": {
        "gp": 3000
      },
      "usage": "",
      "category": "shield",
      "group": "steel-shield"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:taper-of-sanctification",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "vp3Yr59O9dO9MDlb",
      "slug": "taper-of-sanctification",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:a9673f19402446746480a974d1949537ed2a7575be9624631a390e61d74e4e2a",
    "translatableHash": "sha256:3a99ba1eef56ca786cb8a4842f8b3d9e137c636b7b44a6f81f8201394eb81443",
    "data": {
      "schemaVersion": 1,
      "name": "Taper of Sanctification",
      "itemType": "consumable",
      "level": 13,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "divine"
      ],
      "description": "Activate 1 (manipulate)\nThis thin golden candle bears the symbol of a specific deity emblazoned on its surface, surrounded by the iconography of that deity's faith. A taper of sanctification must be dedicated to a deity who can be sanctified to holy or unholy, and has the corresponding trait. If the deity's sanctification lists both options, the crafter must choose one when the candle is made.\nOnce lit, this candle burns for 1 hour, and it can't be extinguished. When a willing creature spends the full hour within 10 feet of the lit candle engaging in prayer to the deity, that creature's Strikes gain the holy or unholy trait (as appropriate for the candle) until the next time that creature makes their daily preparations. During this time, the creature is bound by the deity's anathema. If they violate anathema, they lose the benefit of the taper of sanctification. A holy creature can't benefit from an unholy taper of sanctification, nor can an unholy creature benefit from a holy one.\nEffect: Taper of Sanctification",
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
    "contentId": "pf2e:item:equipment-srd:wand-of-crackling-lightning-6th-rank-spell",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "1SdtzFpjKIwuQ7Nh",
      "slug": "wand-of-crackling-lightning-6th-rank-spell",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/wands/specialty-wands/wand-of-crackling-lightning.webp"
    },
    "sourceHash": "sha256:e70f92ae90d9857c91224dee90110f9d4f5f70f7e456adf4593856a0c1057e5c",
    "translatableHash": "sha256:cf9306d649502a00b584c3ac675b8a45bb0a1b53cb9fb00b48a221eb59a7de8f",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Crackling Lightning (6th-Rank Spell)",
      "itemType": "consumable",
      "level": 14,
      "rarity": "common",
      "traits": [
        "electricity",
        "magical",
        "wand"
      ],
      "description": "This wand is made of two copper plates and a ceramic center.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast Lightning Bolt at 6th-rank, but the spell's area is twice as wide (two adjacent and parallel @Template[line|distance:120|width:10]{120-foot lines}) and creatures that fail their save are Off-Guard for 1 round.\nCraft Requirements Supply a casting of lightning bolt at 6th-rank.",
      "bulk": 0.1,
      "price": {
        "gp": 4500
      },
      "usage": "held-in-one-hand",
      "category": "wand",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:rending-snare",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "5koINU0dy5nPL8Cg",
      "slug": "rending-snare",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:ba66dd6cab1f62d9148cf6ca532c51f57267b5ca9e1aaef60426f96b48f1b177",
    "translatableHash": "sha256:9abed3f87a3ad9ecbcc51b0ca04981fb559c8f8b9837b5a5f54d9e1f9c8d52ac",
    "data": {
      "schemaVersion": 1,
      "name": "Rending Snare",
      "itemType": "consumable",
      "level": 14,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "kobold",
        "mechanical",
        "snare",
        "trap"
      ],
      "description": "Sharp metal jaws wind tightly into the pressure plate mechanism of this snare. When triggered, the jaws clamp shut and spin, damaging limbs in the process. The snare deals 10d8[piercing] damage to the first creature to enter the square; that creature must attempt a check (reflex, dc:34, showDC:all) save.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage and is Off-Guard until the end of its next turn.\nFailure The creature takes full damage plus 2d6[bleed], and it becomes Clumsy 2 for 1 round.\nCritical Failure The creature takes double damage plus 4d6[bleed], and it becomes Clumsy 2 for 1 minute.",
      "bulk": 0,
      "price": {
        "gp": 700
      },
      "usage": "held-in-one-hand",
      "category": "snare",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:engulfing-snare",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "DIQg2Tml1wWjSC1q",
      "slug": "engulfing-snare",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/snares/engulfing-snare.webp"
    },
    "sourceHash": "sha256:d01aa755bc0446fd343bbfa7025d6f0cb9a114dc5a9aca330f1c3d24a2f59d10",
    "translatableHash": "sha256:69aa2ca02adbae73dfa9ccbca4bf372938d5407d6a5078e25623d401eb979fdf",
    "data": {
      "schemaVersion": 1,
      "name": "Engulfing Snare",
      "itemType": "consumable",
      "level": 14,
      "rarity": "common",
      "traits": [
        "consumable",
        "mechanical",
        "snare",
        "trap"
      ],
      "description": "You arrange a spiky cage of bones, particularly tough vegetation, or other material to spring up when disturbed. The snare deals 10d8[piercing] damage to the first creature to enter this square; that creature must attempt a check (reflex, showDC:all, dc:34) save.\nCritical Success The creature is unaffected.\nSuccess The creature is knocked aside by the snare's deployment, takes half damage, and is Off-Guard until the end of its next turn.\nFailure The creature is captured by the cage, taking full damage and falling Prone. It's Immobilized while it remains within the cage. It can get free by [[/act escape show-dc=all dc=34]]{Escaping} or by destroying the cage (AC 30, Fort +18, Ref +24, Hardness 5, HP 30, object immunities).\nCritical Failure As failure, but the creature takes double damage.",
      "bulk": 0,
      "price": {
        "gp": 900
      },
      "usage": "held-in-one-hand",
      "category": "snare",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:chalice-of-justice",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "OIs6WPuCRh2UJTOe",
      "slug": "chalice-of-justice",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:8a36c832726d518aee0a57830ec8b84836986380cac1d2be4d9cd328562a68a2",
    "translatableHash": "sha256:e30e3512d9e178f5d857c76b58536692e14b7c54037d0b8cb7030b291142d3cf",
    "data": {
      "schemaVersion": 1,
      "name": "Chalice of Justice",
      "itemType": "weapon",
      "level": 14,
      "rarity": "uncommon",
      "traits": [
        "divine",
        "holy",
        "versatile-p"
      ],
      "description": "This gleaming golden sword is a +2 greater striking holy cold iron longsword given only to the worthiest heroes of a holy faith. It's made of a sacred, secret alloy that makes the blade both cold iron and silver. If you're unholy, you're Drained 2 while holding a chalice of justice. You can't recover from this condition while holding the weapon.\nActivate—Sip of Justice 1 (manipulate)\nFrequency once per day\nEffect The pommel of the weapon transmutes into the shape of a miniature chalice. You drink deep from the chalice and regain (@item.level)[healing]{HP} equal to the chalice's level. If you're holy, you regain double the (2*@item.level)[healing]{HP}, and for 1 minute, whenever you critically hit an unholy creature with the chalice of justice, the creature takes 2d6[persistent,spirit] damage, and it's Slowed 1 for 1 round. The persistent spirit damage has the holy trait.\nEffect: Sip of Justice\nCraft Requirements You're holy.",
      "bulk": 1,
      "price": {
        "gp": 4500
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
    "contentId": "pf2e:item:equipment-srd:staff-of-the-tempest-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "RDoxgjEFsherGA5x",
      "slug": "staff-of-the-tempest-major",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:a72b72495dce322603ccaf09f62823faaa256c31d3be5b64fbe6afff56b85dd6",
    "translatableHash": "sha256:d8073929844929880113936d9a35418237ddb0f8a8ccefe4be7af8b9dd2041e3",
    "data": {
      "schemaVersion": 1,
      "name": "Staff of the Tempest (Major)",
      "itemType": "weapon",
      "level": 14,
      "rarity": "common",
      "traits": [
        "magical",
        "staff",
        "two-hand-d8"
      ],
      "description": "A staff of the tempest is usually crafted from the wood of a tree struck by lightning. It's often gnarled and blackened with the occasional spark of electricity flashing from its length. While wielding the staff, your vision is less inhibited by stormy weather. While you hold the staff, you ignore the Concealed condition from mist, precipitation, and the like.\nActivate Cast a Spell\nEffect You expend a number of charges from the staff to cast a spell from its list.\n• Cantrip Electric Arc\n• 1st Hydraulic Push, Thunderstrike\n• 2nd Mist, Resist Energy (electricity only), Thunderstrike\n• 3rd Lightning Bolt, Wall of Wind\n• 4th Hydraulic Torrent, Lightning Bolt\n• 5th Hydraulic Torrent, Lightning Storm\n• 6th Chain Lightning, Hydraulic Torrent\nCraft Requirements Supply one casting of all listed ranks of all listed spells.",
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
    "contentId": "pf2e:item:equipment-srd:staff-of-providence-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "U8vVCE2ePjyca666",
      "slug": "staff-of-providence-major",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:ab768dc9b43190bae2f6a0c93f08fe40279c9abdf092ec2464d41d9711f4fa67",
    "translatableHash": "sha256:d23ec1f12d88d23f1a7580256fa3539d72f4c9e50241060432011df36bf74913",
    "data": {
      "schemaVersion": 1,
      "name": "Staff of Providence (Major)",
      "itemType": "weapon",
      "level": 14,
      "rarity": "common",
      "traits": [
        "magical",
        "staff",
        "two-hand-d8"
      ],
      "description": "A large, stylized symbol of an eye adorns the top of this wooden staff, representing the watchful eye of the divine powers. The bearer of the staff can guide and protect, seeing bounties and tragedies that could befall them in the future. When wielding this staff, you gain a +1 item bonus to Survival checks to Sense Direction or Subsist and to Religion checks to Recall Knowledge.\nActivate Cast a Spell\nEffect You expend a number of charges from the staff to cast a spell from its list.\n• Cantrip Guidance\n• 1st Bless, Create Water\n• 2nd Augury, Create Food, See the Unseen, Status\n• 3rd Safe Passage, Wanderer's Guide\n• 4th Cleanse Affliction, Dispelling Globe, Status\n• 5th Dispelling Globe, Scouting Eye, See the Unseen\n• 6th Dispelling Globe, Scintillating Safeguard, Truesight\nCraft Requirements Supply one casting of all listed ranks of all listed spells.",
      "bulk": 1,
      "price": {
        "gp": 4100
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
    "contentId": "pf2e:item:equipment-srd:wand-of-the-snowfields-5th-rank-spell",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "ut83Grf73Z8ZTaV1",
      "slug": "wand-of-the-snowfields-5th-rank-spell",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/wands/specialty-wands/wand-of-the-snowfields.webp"
    },
    "sourceHash": "sha256:666c0de84075ef6abc41c54e08eb6583b2858d626997f4998d82c8af2239ab5d",
    "translatableHash": "sha256:31883783c1730ec9e7704854bf5c9dd10ab1123672816e43ad9e276c1c866dd1",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of the Snowfields (5th-Rank Spell)",
      "itemType": "consumable",
      "level": 14,
      "rarity": "common",
      "traits": [
        "cold",
        "magical",
        "wand"
      ],
      "description": "This wand is a slender length of ice-blue glass.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast Howling Blizzard at 5th-rank. Snow lingers in the spell's area, remaining as difficult terrain for 1 minute.\nCraft Requirements Supply a casting of howling blizzard at 5th-rank.",
      "bulk": 0.1,
      "price": {
        "gp": 4500
      },
      "usage": "held-in-one-hand",
      "category": "wand",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:iron-cudgel",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "XvmYNnQ4vg8GREH7",
      "slug": "iron-cudgel",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/talismans/iron-cudgel.webp"
    },
    "sourceHash": "sha256:dddc42629e6be6432a01ce77bdb20befb9d17d76c57e82e82583f11ce6e24793",
    "translatableHash": "sha256:d1801b260a03a386a2783a700281c9f754ffb5a05dd567924c3d6570dfafd71b",
    "data": {
      "schemaVersion": 1,
      "name": "Iron Cudgel",
      "itemType": "consumable",
      "level": 14,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "talisman"
      ],
      "description": "Usage affixed to a melee weapon\nActivate A (manipulate)\nThis miniature club is typically affixed to a weapon by an iron chain. When you activate the cudgel, you use Brutal Finish, as the fighter feat. You must meet the normal requirements, including those of the press trait.\nIf you have the Brutal Finish feat, add an additional weapon damage die on a success or a failure to the normal results.",
      "bulk": 0,
      "price": {
        "gp": 900
      },
      "usage": "affixed-to-melee-weapon",
      "category": "talisman",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:disintegration-bolt",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Gfew65lwkzZc3mUV",
      "slug": "disintegration-bolt",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/ammunition/disintegration-bolt.webp"
    },
    "sourceHash": "sha256:2944fc39ff34676db8e71495295534fd8dba01b54bc7c4bbc3161c9ad92df9b8",
    "translatableHash": "sha256:996de9fc3c1df3810b81b91768a2e72cef8b3fde874a3a6b811ea3581b9d04e2",
    "data": {
      "schemaVersion": 1,
      "name": "Disintegration Bolt",
      "itemType": "ammunition",
      "level": 15,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical"
      ],
      "description": "Activate 1 (manipulate)\nThe shaft of this bolt is scorched and blackened, and handling it coats your fingers with a fine black powder. When an activated disintegration bolt hits a target, it is subject to a Disintegrate spell requiring a check (fortitude, dc:34) save. As with the spell, a critical hit on the attack roll causes the target's saving throw outcome to be one degree worse.\nCraft Requirements Supply one casting of disintegrate.",
      "bulk": 0,
      "price": {
        "gp": 1300
      },
      "usage": "",
      "category": "ammo",
      "group": "ammo"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:mindfog-mist",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "GMi5tw0cbMx3ZQPg",
      "slug": "mindfog-mist",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-poisons/mindfog-mist.webp"
    },
    "sourceHash": "sha256:851bca73becc51991243720a5dd921c7e86fd549237a5e25c672d81b1b5e6e8f",
    "translatableHash": "sha256:194135c2ba21e1884e658a4c6269a538fc9811081b5fbea2529d4a530f231070",
    "data": {
      "schemaVersion": 1,
      "name": "Mindfog Mist",
      "itemType": "consumable",
      "level": 15,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "inhaled",
        "poison"
      ],
      "description": "Mindfog mist can be used to undermine spellcasters, as its effect on a victim's mental faculties are swift and powerful.\nActivate A (manipulate)\nSaving Throw check (fortitude, dc:35, showDC:all)\nOnset 1 round\nMaximum Duration 6 rounds\nStage 1 Stupefied 2 (1 round)\nStage 2 Confused and Stupefied 3 (1 round)\nStage 3 confused and Stupefied 4 (1 round)",
      "bulk": 0.1,
      "price": {
        "gp": 1000
      },
      "usage": "held-in-one-hand",
      "category": "poison",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-overflowing-life-6th-rank-spell",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "VtzChvlCG2TQRrgu",
      "slug": "wand-of-overflowing-life-6th-rank-spell",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/wands/specialty-wands/wand-of-overflowing-life.webp"
    },
    "sourceHash": "sha256:acccadd971911ed63cdfa5827fab91f656b6076b06184ced70df50771455c3f8",
    "translatableHash": "sha256:fd67cbd432134f6c4694f73fca48c6682cd1ce0d6ef8b34554aeeafdb53a2886",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Overflowing Life (6th-Rank Spell)",
      "itemType": "consumable",
      "level": 15,
      "rarity": "common",
      "traits": [
        "healing",
        "magical",
        "vitality",
        "wand"
      ],
      "description": "This alabaster wand has a clear crystal at the tip.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast Heal at 6th-rank.\nAfter you cast the spell, at the start of your next turn, excess healing magic wells up from the wand and heals you, as though you cast the 1-action version of heal on yourself at 6th-rank. You gain this benefit only once per turn, even if you cast multiple heal spells from wands of overflowing life in the same turn.\nCraft Requirements Supply a casting of heal at 6th-rank.",
      "bulk": 0.1,
      "price": {
        "gp": 6500
      },
      "usage": "held-in-one-hand",
      "category": "wand",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:dragonplate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "3xsQ1AA4dyMHLxpw",
      "slug": "dragonplate",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/armor/specific-magic-armor/dragonplate.webp"
    },
    "sourceHash": "sha256:661b3cb8eff8458eafff144d2811e13dcd8c677ed5cba660db988a5988863974",
    "translatableHash": "sha256:8accab19e3a9fdad6d5039ed212f77e32b5503ccc407c340efac0a99dac14055",
    "data": {
      "schemaVersion": 1,
      "name": "Dragonplate",
      "itemType": "armor",
      "level": 16,
      "rarity": "uncommon",
      "traits": [
        "bulwark",
        "invested",
        "magical"
      ],
      "description": "This suit of +2 greater resilient dragonhide full plate makes you look like a fearsome dragon. The armor comes in many different varieties depending on the type of dragon from which it's made, though they usually conform to the four magical traditions.\nActivate—Dragon Breath 2 (manipulate)\nFrequency once per day\nEffect You unleash a @Template[cone|distance:15] of energy with a damage type and saving throw corresponding to the tradition of the dragon used to make the armor (shown on the table below). The cone deals 14d6 damage; each creature in the area must attempt a DC 36 basic saving throw.\nCraft Requirements The initial raw materials must include 1,250 gp of dragonhide.\nDragon Tradition | Damage |\nArcane | 14d6[force|options:area-damage]{Force} (check (reflex, dc:36, basic, options:area-effect){Reflex}) |\nDivine | 14d6[spirit|options:area-damage]{Spirit} (check (reflex, dc:36, basic, options:area-effect){Reflex}) |\nOccult | 14d6[mental|options:area-damage]{Mental} (check (will, dc:36, basic, options:area-effect){Will}) |\nPrimal | 14d6[poison|options:area-damage]{Poison} (check (fortitude, dc:36, basic, options:area-effect){Fortitude}) |",
      "bulk": 4,
      "price": {
        "gp": 10000
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
    "contentId": "pf2e:item:equipment-srd:flame-navette",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "4Pmo9gc81JAOzdke",
      "slug": "flame-navette",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:5ae37f996e6dae96a63f344c4c05f9cf7cfd6771b556e68617a0b3afcb9443c0",
    "translatableHash": "sha256:767f95cd5abbebbff0df6c36302755e5017c4899ec4bc2d9e78c4583393913d4",
    "data": {
      "schemaVersion": 1,
      "name": "Flame Navette",
      "itemType": "consumable",
      "level": 16,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "talisman"
      ],
      "description": "Usage affixed to armor\nActivate A (concentrate)\nThis piece of bronzite is shaped like an oval with points at both ends. It has a carved flame at its center and is traditionally worn over the heart. You can activate only one flame navette per day. When you activate the navette, you gain the benefit of the fighter's Determination class feat, with a counteract rank of 8 and a counteract modifier of [[/r 1d20+22 #Counteract]]{+22}.\nIf you have the Determination feat, you can use your own modifier if it's better.",
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
    "contentId": "pf2e:item:equipment-srd:cerulean-scourge",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "9hdT05ywPVyh9vQX",
      "slug": "cerulean-scourge",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-poisons/cerulean-scourge.webp"
    },
    "sourceHash": "sha256:a1d02d58c44dd4e83341acfb4556e379efed92e223d6e747b41e909addc2da44",
    "translatableHash": "sha256:9e7000e7e6c2708bc30736f13af958807143ad6e12bbff294e360060ab5d09de",
    "data": {
      "schemaVersion": 1,
      "name": "Cerulean Scourge",
      "itemType": "consumable",
      "level": 16,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "injury",
        "poison"
      ],
      "description": "This poison is infamous for making the victim's blood vessels glow with a bright blue light before painfully bursting.\nActivate 2 (manipulate)\nSaving Throw check (fortitude, dc:37, showDC:all)\nMaximum Duration 6 rounds\nStage 1 10d6[poison] damage (1 round)\nStage 2 12d6[poison] damage (1 round)\nStage 3 14d6[poison] damage (1 round)",
      "bulk": 0.1,
      "price": {
        "gp": 1450
      },
      "usage": "held-in-two-hands",
      "category": "poison",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:brimstone-fumes",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "9nhvZ7VnDQHuyBdf",
      "slug": "brimstone-fumes",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:9460ed50d4cdee2db90370317caf56a06865031533b21519bf60ff17d572e8cd",
    "translatableHash": "sha256:2f48e66e5bba7e0d8e06d1433b828bb30cbe93fbc54c51a7733ddadbfc5312ea",
    "data": {
      "schemaVersion": 1,
      "name": "Brimstone Fumes",
      "itemType": "consumable",
      "level": 16,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "inhaled",
        "poison"
      ],
      "description": "Fumes from the forges of Hell drain health and strength alike.\nActivate A (manipulate)\nSaving Throw check (fortitude, dc:36, showDC:all)\nOnset 1 round\nMaximum Duration 6 rounds\nStage 1 7d8[poison] damage and Enfeebled 1 (1 round)\nStage 2 8d8[poison] damage and Enfeebled 2 (1 round)\nStage 3 10d8[poison] damage and Enfeebled 3 (1 round)",
      "bulk": 0.1,
      "price": {
        "gp": 1500
      },
      "usage": "held-in-one-hand",
      "category": "poison",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:witchwarg-elixir-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "aDn5blt2iiYJpzbe",
      "slug": "witchwarg-elixir-greater",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:9bfff90fca1459e7f91332b9272193e837c7bf1ccdabeb891bcb1d3bed66f671",
    "translatableHash": "sha256:f6933d406258fe3b1625df6b490af4aeef1f6b34ae6fce4916402a4c3ab9a40a",
    "data": {
      "schemaVersion": 1,
      "name": "Witchwarg Elixir (Greater)",
      "itemType": "consumable",
      "level": 16,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "elixir"
      ],
      "description": "Activate 1 (manipulate)\nThis elixir warms your core and improves your circulation. For 24 hours, you are protected from the effects of severe cold. You're also protected from extreme and incredible cold.",
      "bulk": 0.1,
      "price": {
        "gp": 1400
      },
      "usage": "held-in-one-hand",
      "category": "elixir",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-slaughter-7th-rank-spell",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "CjfBdn0fOIarWzBc",
      "slug": "wand-of-slaughter-7th-rank-spell",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/wands/specialty-wands/wand-of-slaying.webp"
    },
    "sourceHash": "sha256:822cbcf310ffc69de68e373c2fdef75357c755eb890525ce2fb77ba99e55ab03",
    "translatableHash": "sha256:fd686745296be61fe2622beb67fd2a8bc86d775db2d7a2ba2749bbc1a091550d",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Slaughter (7th-Rank Spell)",
      "itemType": "consumable",
      "level": 16,
      "rarity": "common",
      "traits": [
        "magical",
        "void",
        "wand"
      ],
      "description": "This polished black wand has a green gem at the tip, and anyone who looks into it sees a reflection of a grinning skull.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast Execute at 7th-rank. If the spell slays a living target, the corpse releases grim energy in a @Template[emanation|distance:20], dealing 14[void] damage.\nCraft Requirements Supply a casting of execute at 7th-rank.",
      "bulk": 0.1,
      "price": {
        "gp": 10000
      },
      "usage": "held-in-one-hand",
      "category": "wand",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:oil-of-dynamism-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "EP8f2NL28vPlmX7k",
      "slug": "oil-of-dynamism-greater",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/oils/oil-of-object-animation.webp"
    },
    "sourceHash": "sha256:066cdb41074e54845db0bf6339ae9be6a1aa13449cc4a534f2633b2770abc4ce",
    "translatableHash": "sha256:cd233a7d81fef111bbc6c0fa24d59b12347315349e3c3d015ca5ab408f965267",
    "data": {
      "schemaVersion": 1,
      "name": "Oil of Dynamism (Greater)",
      "itemType": "consumable",
      "level": 16,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical",
        "oil"
      ],
      "description": "Activate 2 (manipulate)\nThis fine golden oil comes in a small blue canister. Carefully spreading the oil over an object turns it into an animated object of the same type. For example, sprinkling it on a statue makes an animated statue. If the animated object's level would be greater than 11, the oil struggles to animate it and ultimately fails.\nThis animated object has the minion trait, meaning it can use 2 actions when you Command it. You can issue a Command for the current turn as part of the activation. The object remains animated for 1 minute before falling inert. As usual, you can have a maximum of four minions under your control.",
      "bulk": 0,
      "price": {
        "gp": 1400
      },
      "usage": "held-in-two-hands",
      "category": "oil",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:balisse-feather-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "K2Exm6VVe9XXCdZe",
      "slug": "balisse-feather-greater",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:913c9930d881bdfb7941c94e14ada16ddbdd7ebe9a87b1ab2e1ad8d15571d1a3",
    "translatableHash": "sha256:90df61a4f151279aa87b98cd45dfeee0a8e49fdbab677e35ec2bfc2be918f2a0",
    "data": {
      "schemaVersion": 1,
      "name": "Balisse Feather (Greater)",
      "itemType": "consumable",
      "level": 16,
      "rarity": "common",
      "traits": [
        "consumable",
        "holy",
        "magical",
        "talisman"
      ],
      "description": "Usage affixed to a weapon\nActivate F (concentrate)\nTrigger You deal damage using the affixed weapon to a creature that has the unholy trait or that you witnessed harm an ally, an innocent, or a noncombatant within the last minute.\nThis long, fire-red feather smolders from the weapon it adorns. When you activate the feather, the creature you damaged burns with sacred light. The creature must succeed at a check (will, dc:35, showDC:all) save or take a –2 status penalty to AC and saving throws and reduce its resistances by 10. These effects last until the end of your next turn. This item has no effect on a creature with the holy trait.\nEffect: Balisse Feather",
      "bulk": 0,
      "price": {
        "gp": 2000
      },
      "usage": "affixed-to-weapon",
      "category": "talisman",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:hail-of-arrows-snare",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Odl2SyKw8Zg6ckKb",
      "slug": "hail-of-arrows-snare",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/snares/hail-of-arrows-snare.webp"
    },
    "sourceHash": "sha256:84fe3969bc0b11ce97265ec67ded271f346b18c28e1dfa31af8a5cb58b8f206e",
    "translatableHash": "sha256:413a3e4c3fc2b5e0d6c1008fd6a3edb2c4ff1cd0e12a7eb1f76112f4953786a8",
    "data": {
      "schemaVersion": 1,
      "name": "Hail of Arrows Snare",
      "itemType": "consumable",
      "level": 16,
      "rarity": "common",
      "traits": [
        "consumable",
        "mechanical",
        "snare",
        "trap"
      ],
      "description": "When a creature enters the snare's square, it releases hundreds upon hundreds of carefully prepared arrows, blanketing a @Template[emanation|distance:20]{20-foot radius} around the snare's square with massive arrow fire that deals 18d6[piercing|options:area-damage] damage. Creatures in the area must attempt a check (reflex, showDC:all, dc:37, basic, options:area-effect) save.",
      "bulk": 0,
      "price": {
        "gp": 1500
      },
      "usage": "held-in-one-hand",
      "category": "snare",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:staff-of-impossible-visions-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "oT4pyqLKpJVXDb46",
      "slug": "staff-of-impossible-visions-major",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:31443a6f31ec95e885343e8039ebda138a793f8a22c641d5d5e7b0fb28e72101",
    "translatableHash": "sha256:79229dcb12f4712c73274d018d60e7262d2f7cbbc23a0dade3cbbd526c3c975e",
    "data": {
      "schemaVersion": 1,
      "name": "Staff of Impossible Visions (Major)",
      "itemType": "weapon",
      "level": 16,
      "rarity": "uncommon",
      "traits": [
        "magical",
        "staff",
        "two-hand-d8"
      ],
      "description": "This bizarre staff is made from oak, capped with a cluster of eye-shaped gemstones that seem to move and undulate at the corner of your vision. While wielding the staff, you can peer through the eyes on the staff rather than your own, using your normal visual senses (including any benefits of spells like See the Unseen). You can maneuver the staff to see things around corners, at higher elevations, or in places where the staff can fit but your head can't. This doesn't provide sufficient line of effect to target creatures around corners. The eyes are as vulnerable as your eyes and can be affected by anything that alters your vision, such as a blinding flash of light.\nActivate Cast a Spell\nEffect You expend a number of charges from the staff to cast a spell from its list.\n• Cantrip Daze\n• 1st Fear, Phantom Pain\n• 2nd Augury, Paranoia\n• 3rd Hypnotize, Paralyze\n• 4th Countless Eyes, Vision of Death\n• 5th Strange Geometry\n• 6th Blinding Fury, Phantasmal Calamity\n• 7th Visions of Danger, Warp Mind\nCraft Requirements Supply one casting of all listed ranks of all listed spells.",
      "bulk": 1,
      "price": {
        "gp": 10000
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
    "contentId": "pf2e:item:equipment-srd:omnidirectional-spear-snare",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "tnCKwIsRsKj3FtG6",
      "slug": "omnidirectional-spear-snare",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:02f1c8577493ed23dd579ba66270a93802e3613d51d071c54210282cadbb5ebc",
    "translatableHash": "sha256:c49ac4531a083b4cb8df2809147e32f35d8fbd5f286b0c0c1bc26c0bcb5ae447",
    "data": {
      "schemaVersion": 1,
      "name": "Omnidirectional Spear Snare",
      "itemType": "consumable",
      "level": 16,
      "rarity": "common",
      "traits": [
        "consumable",
        "mechanical",
        "snare",
        "trap"
      ],
      "description": "As soon as a creature enters the snare's square, the snare unleashes wickedly powerful spears at the creature from all directions, dealing 15d8[piercing] damage (check (reflex, showDC:all, dc:37, basic) save).",
      "bulk": 0,
      "price": {
        "gp": 1500
      },
      "usage": "held-in-one-hand",
      "category": "snare",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:medusas-scream-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "TyW1XOWYMM2xHGaI",
      "slug": "medusas-scream-greater",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:b1f36d36956698a774393877efd1250d3102d077821c98f319bd1dc3fbcb4b7b",
    "translatableHash": "sha256:c66925741894544b2af9e6c04e7cd6294a3e4a687cf84bdef58963268721cc07",
    "data": {
      "schemaVersion": 1,
      "name": "Medusa's Scream (Greater)",
      "itemType": "shield",
      "level": 16,
      "rarity": "common",
      "traits": [
        "magical"
      ],
      "description": "The ghastly visage of a slain medusa's head stares out from this steel shield (Hardness 15, HP 60, BT 30). The shield comes with a thick leather cover to conceal the head.\nActivate—Petrifying Gaze 2 (manipulate, visual)\nFrequency once per day\nEffect You reveal the medusa's face, focusing its gaze on one creature within 30 feet. The shield casts a DC 35 Petrify spell with a range of 30 feet.\nCraft Requirements The initial raw materials must include the head of a medusa.\nHardness | HP | BT |\n15 | 60 | 30 |",
      "bulk": 1,
      "price": {
        "gp": 9000
      },
      "usage": "",
      "category": "shield",
      "group": "steel-shield"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:cooling-elixir-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "XMuLrJYL6fxv4YNA",
      "slug": "cooling-elixir-greater",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-elixirs/salamander-elixir.webp"
    },
    "sourceHash": "sha256:632da0abd46331134b8a8229cf65a38e8c5daea3eb899d2ed2015ec3c539f46b",
    "translatableHash": "sha256:db711892833aadb5e2199255c05649e2b41432c8e06a86eebe8468f133ed4bcf",
    "data": {
      "schemaVersion": 1,
      "name": "Cooling Elixir (Greater)",
      "itemType": "consumable",
      "level": 16,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "elixir"
      ],
      "description": "Activate 1 (manipulate)\nThis elixir is made from salamander scales to withstand fire. For 24 hours, you are protected from the effects of severe heat. You're also protected from extreme and incredible heat.",
      "bulk": 0.1,
      "price": {
        "gp": 1400
      },
      "usage": "held-in-one-hand",
      "category": "elixir",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:dust-of-corpse-animation-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "yPFHTY1GH3rdWwds",
      "slug": "dust-of-corpse-animation-greater",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:ddfc39ee6238478955a806c1fb729c84bfbb3cee5de954e53a0d69ba15ff3e84",
    "translatableHash": "sha256:dfeb75d7ef5228390686e85bce075efd0cf09bb0bd4faddc2a506dd64eca2fb2",
    "data": {
      "schemaVersion": 1,
      "name": "Dust of Corpse Animation (Greater)",
      "itemType": "consumable",
      "level": 16,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical"
      ],
      "description": "Activate 2 (manipulate)\nThis black pouch contains what appears to be fine bone dust. Pouring the dust in a special pattern over a corpse turns it into an undead creature. The type of undead created depends on the condition of the corpse, resulting in either a skeleton or a zombie. If the undead's level would be greater than 11, the dust fails to animate it. The body must be of an appropriate size and type for the undead you wish to create-for example, you must sprinkle the dust on a horse's skeleton to animate a skeletal horse. If more than one undead in the level range is appropriate, such as skeletal guard or skeletal champion for a Medium humanoid skeleton, you choose.\nThe animated undead has the minion trait, meaning it can use 2 actions when you Command it. You can issue a Command for the current turn as part of the activation. The undead creature remains animated for 1 minute before collapsing back into its corpse form. As usual, you can have a maximum of four minions under your control.",
      "bulk": 0,
      "price": {
        "gp": 1500
      },
      "usage": "held-in-two-hands",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-smoldering-fireballs-7th-rank-spell",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "YR8IAV94fPo0kfBz",
      "slug": "wand-of-smoldering-fireballs-7th-rank-spell",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/wands/specialty-wands/wand-of-smoldering-fireballs.webp"
    },
    "sourceHash": "sha256:f8c6531c8fbcdb82b41efd8e6ab31b513dc3fa3e2e96b6f565de936271da84a6",
    "translatableHash": "sha256:9840fa56b7a9c67a1d0256d4c4536eaf5b41079794d620600a746a36bb4b9f4e",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Smoldering Fireballs (7th-Rank Spell)",
      "itemType": "consumable",
      "level": 16,
      "rarity": "common",
      "traits": [
        "fire",
        "magical",
        "wand"
      ],
      "description": "This blackened, heavily burned stick smells faintly of saltpeter.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast Fireball at 7th-rank. Each creature that fails its save takes 3d6[persistent,fire] damage.\nCraft Requirements Supply a casting of fireball at 7th-rank.",
      "bulk": 0.1,
      "price": {
        "gp": 10000
      },
      "usage": "held-in-one-hand",
      "category": "wand",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:juggernaut-mutagen-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "1kNp6yOS0aZPBPzZ",
      "slug": "juggernaut-mutagen-major",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:660fe3423627f32ee36a30cb70fe1f820b0cf5eeb870ab45c0c540fba6d5c9ad",
    "translatableHash": "sha256:ca8148c0b1ca34c9e8055a7617e84a9bca3af6c14db6792f5f38ba9e6b770f58",
    "data": {
      "schemaVersion": 1,
      "name": "Juggernaut Mutagen (Major)",
      "itemType": "consumable",
      "level": 17,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "elixir",
        "mutagen",
        "polymorph"
      ],
      "description": "Activate A (manipulate)\nYour body becomes sturdy and ponderous.\nBenefit You gain a +4 item bonus to Fortitude saves and 45 temporary Hit Points. Whenever you are at maximum Hit Points for at least 1 full minute, you regain the temporary Hit Points. When you roll a success on a Fortitude save you get a critical success instead, and your critical failures on Fortitude saves become failures instead.\nDrawback You take a -2 penalty to Will saves, Perception checks and initiative rolls.\nDuration 1 hour.\nEffect: Juggernaut Mutagen (Major)",
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
    "contentId": "pf2e:item:equipment-srd:frost-vial-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "4DJQID8GIlxQ7b9C",
      "slug": "frost-vial-major",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-bombs/frost-vial.webp"
    },
    "sourceHash": "sha256:2e99454de1fa846e484c38faa75b6e9d4106476e7b7441a19a06b1609f4892e9",
    "translatableHash": "sha256:b5307500d75af0501b1f21d10cfa333045b6bbfd6013d760bccf39635d3dbb6a",
    "data": {
      "schemaVersion": 1,
      "name": "Frost Vial (Major)",
      "itemType": "weapon",
      "level": 17,
      "rarity": "common",
      "traits": [
        "alchemical",
        "bomb",
        "cold",
        "consumable",
        "splash"
      ],
      "description": "Activate 1 Strike\nThe bright blue liquid reagents in this vial rapidly absorb heat when exposed to air. A frost vial deals 4d6 cold damage and 4 cold splash damage. On a hit, the target takes a –15-foot status penalty to its Speeds until the end of its next turn. You gain a +3 item bonus to attack rolls.\nEffect: Frost Vial",
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
        "type": "cold"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:quicksilver-mutagen-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "4GXzTN6iSDGfYEAi",
      "slug": "quicksilver-mutagen-major",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-elixirs/quicksilver-mutagen.webp"
    },
    "sourceHash": "sha256:84385d86b51b46c14ef68052be1523e5e9c62c5a8f7468d5ac1792c42887c673",
    "translatableHash": "sha256:9cbe1b5c93fb5759100f6471c289b004e12e04a16b13607b46ef250cf7318dd9",
    "data": {
      "schemaVersion": 1,
      "name": "Quicksilver Mutagen (Major)",
      "itemType": "consumable",
      "level": 17,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "elixir",
        "mutagen",
        "polymorph"
      ],
      "description": "Activate A (manipulate)\nYou become swifter and nimbler but also fragile.\nBenefit You gain a +4 item bonus to Acrobatics checks, Stealth checks, Thievery checks, Reflex saves, and Dexterity-based attack rolls, and you gain a +20 foot status bonus to your Speed.\nDrawback You take damage equal to twice your level; you can't recover Hit Points lost this way by any means while the mutagen lasts. You take a -2 penalty to Fortitude saves.\nDuration 1 hour.\nEffect: Quicksilver Mutagen (Major)",
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
    "contentId": "pf2e:item:equipment-srd:sanguine-pendant-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "6fnjxb9sjrKm0N2r",
      "slug": "sanguine-pendant-greater",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:a8f4244c893a3abaa79720ba4623ca9ba7bc02a2b8e133bf4e8a1d608ffe755d",
    "translatableHash": "sha256:cb7015b340adfa2c783efbd2c2e7605bcf84237d2dbf5bed7a6ed06266133e33",
    "data": {
      "schemaVersion": 1,
      "name": "Sanguine Pendant (Greater)",
      "itemType": "equipment",
      "level": 17,
      "rarity": "common",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "This clear crystal pendant contains a drop of blood from a sorcerer that expands and contracts as you cast spells. A sanguine pendant is associated with a specific sorcerer bloodline, and only sorcerers with that bloodline can invest this item. This item gains the trait matching the tradition of that bloodline. The pendant grants a +3 item bonus to both of your bloodline skills.\nActivate—Blood's Call f (concentrate)\nFrequency once per day\nEffect You gain 1 Focus Point, which you can spend only to cast a bloodline spell. If you don't spend this Focus Point by the end of this turn, it's lost.\nCraft Requirements You're a sorcerer with the associated bloodline.",
      "bulk": 0,
      "price": {
        "gp": 17000
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:alchemist-goggles-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "bnmfBLXOBd3ah6GK",
      "slug": "alchemist-goggles-major",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/other-worn-items/alchemist-goggles.webp"
    },
    "sourceHash": "sha256:f4bddbdc97d77801c9f26589fab21c6bc4b612644abf6e597f7c42c10c1e38e6",
    "translatableHash": "sha256:71ee835b83ba54986ab5358c609559ae9c74d8ee515e04c9d0e26af7abddafd4",
    "data": {
      "schemaVersion": 1,
      "name": "Alchemist Goggles (Major)",
      "itemType": "equipment",
      "level": 17,
      "rarity": "common",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "These brass goggles are engraved with flame patterns and have thick, heavy lenses.\nWhile worn, they give you a +3 item bonus to Crafting checks to Craft alchemical items. When making Strikes with alchemical bombs, you ignore lesser cover.\nIf your Strike with an alchemical bomb fails (but doesn't critically fail), you gain a +3 item bonus to the splash damage the target of the Strike takes.",
      "bulk": 0,
      "price": {
        "gp": 15000
      },
      "usage": "worneyepiece",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:serene-mutagen-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "ccrdVliTNBh2mNZf",
      "slug": "serene-mutagen-major",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-elixirs/serene-mutagen.webp"
    },
    "sourceHash": "sha256:cc11f2540db4ce49701099171607f26bbfc9272d5d151f334988ddaf6adb41bc",
    "translatableHash": "sha256:fa7aa11106bab241c80adb6e6f833acc6341fee2c7d2008ee0696d0bb2abfb21",
    "data": {
      "schemaVersion": 1,
      "name": "Serene Mutagen (Major)",
      "itemType": "consumable",
      "level": 17,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "elixir",
        "mutagen",
        "polymorph"
      ],
      "description": "Activate A (manipulate)\nYou gain inner serenity, but you find violence off-putting.\nBenefit You gain a +4 item bonus to Will saves and Perception, Medicine, Nature, Religion, and Survival checks. When you roll a success on a Will save against a mental effect, you get a critical success instead, and your critical failures on Will saves against mental effects become failures instead.\nDrawback You take a -1 penalty to attack rolls and save DCs of offensive spells, and a -1 penalty per damage die to all weapon, unarmed attack, and spell damage.\nDuration 1 hour.\nEffect: Serene Mutagen (Major)",
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
    "contentId": "pf2e:item:equipment-srd:wand-of-overflowing-life-7th-rank-spell",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "grRxpX1iE3zOJA1q",
      "slug": "wand-of-overflowing-life-7th-rank-spell",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/wands/specialty-wands/wand-of-overflowing-life.webp"
    },
    "sourceHash": "sha256:0b7418c8caa75e7a5c02feb230233437ac674b89cd85d63d93a75121a1fe314d",
    "translatableHash": "sha256:7547dc624daa4e948797aa16d362c700d2999bdf4b750fa4c26199e2db208d9b",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Overflowing Life (7th-Rank Spell)",
      "itemType": "consumable",
      "level": 17,
      "rarity": "common",
      "traits": [
        "healing",
        "magical",
        "vitality",
        "wand"
      ],
      "description": "This alabaster wand has a clear crystal at the tip.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast Heal at 7th-rank.\nAfter you cast the spell, at the start of your next turn, excess healing magic wells up from the wand and heals you, as though you cast the 1-action version of heal on yourself at 7th-rank. You gain this benefit only once per turn, even if you cast multiple heal spells from wands of overflowing life in the same turn.\nCraft Requirements Supply a casting of heal at 7th-rank.",
      "bulk": 0.1,
      "price": {
        "gp": 15000
      },
      "usage": "held-in-one-hand",
      "category": "wand",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:ghost-charge-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "i7bJcib5TUJKOd4Z",
      "slug": "ghost-charge-major",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-bombs/ghost-charge.webp"
    },
    "sourceHash": "sha256:8178f9f46aaa0fb3f8847ece9a780f1c389750d10abbc58e6b0463807fa6e158",
    "translatableHash": "sha256:534ec2a1f72bb63512ce60fcc5f16469304440d8b85f35e00ebe98b8ab6509eb",
    "data": {
      "schemaVersion": 1,
      "name": "Ghost Charge (Major)",
      "itemType": "weapon",
      "level": 17,
      "rarity": "common",
      "traits": [
        "alchemical",
        "bomb",
        "consumable",
        "splash",
        "vitality"
      ],
      "description": "Activate A Strike\nThese spring-loaded metal canisters contain a mixture of chemicals and salts that drain and disintegrate nearby undead creatures.\nA ghost charge gives a +3 item bonus to attack rolls, deals 4d8 vitality damage and 4 vitality splash damage, though as usual for vitality damage, this damage harms only undead and creatures with void healing. A primary target that takes damage from a ghost charge becomes Enfeebled 2 until the start of your next turn.\nGhost charges are designed to explode even on contact with a spiritual substance, making them ideal for damaging incorporeal undead.",
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
        "type": "vitality"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:blasting-stone-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "IuGydh0En8LbfnWo",
      "slug": "blasting-stone-major",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:e2606cf5a400e9bfd956bb96c6ab0beabdb16b8f23018d90c2f520d659484fbb",
    "translatableHash": "sha256:b4ea49690109455afe4d8967222cd63455222b3a7a6d3f7e942adc15fa8a4e4d",
    "data": {
      "schemaVersion": 1,
      "name": "Blasting Stone (Major)",
      "itemType": "weapon",
      "level": 17,
      "rarity": "common",
      "traits": [
        "alchemical",
        "bomb",
        "consumable",
        "sonic",
        "splash"
      ],
      "description": "Activate 1 Strike\nWhen this pebble hits a creature or a hard surface, it explodes with a deafening bang. A blasting stone deals 4d4 sonic damage and 4 sonic splash damage, and each creature within 10 feet of the space in which the stone exploded must succeed at a check (fortitude, dc:36, name:Major Blasting Stone, showDC:all) saving throw with the listed DC or be Deafened until the end of its next turn. You gain a +3 item bonus to attack rolls.",
      "bulk": 0.1,
      "price": {
        "gp": 2500
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "bomb",
      "damage": {
        "dice": 4,
        "die": "d4",
        "type": "sonic"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:drakeheart-mutagen-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "M4ZOHOlne43ArjOC",
      "slug": "drakeheart-mutagen-major",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-elixirs/drakeheart-mutagen.webp"
    },
    "sourceHash": "sha256:169d587a5eb0af577323f303fea6fd27da089096dbf9ff482766031167bed1fb",
    "translatableHash": "sha256:dd116569cfbeeee17f5722d9f63223ad6dd83f0819f4e295ac0921c1a1dc4404",
    "data": {
      "schemaVersion": 1,
      "name": "Drakeheart Mutagen (Major)",
      "itemType": "consumable",
      "level": 17,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "elixir",
        "mutagen",
        "polymorph"
      ],
      "description": "Activate A (manipulate)\nYour skin grows scales like a drake, and your eyesight become sharp and your pupils slitted, but your mind and reflexes slow.\nBenefit You gain +7 item bonus to AC, a Dexterity cap of +2 (as usual, use your lowest Dexterity cap if you have more than one), and a +4 item bonus to Perception checks. If you're wearing armor, you still calculate your proficiency bonus to AC based on your proficiency in the armor you're wearing, even if the drakeheart mutagen has a higher item bonus. You also gain the Final Surge action.\nDrawback You take a -1 penalty to Will saves, Reflex saves, and all skill checks to Recall Knowledge.\nDuration 1 hour or until you use Final Surge, whichever comes first.\nEffect: Drakeheart Mutagen (Major)",
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
    "contentId": "pf2e:item:equipment-srd:hemlock",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "MP7updiiSct04vno",
      "slug": "hemlock",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:67091eb101305716f0260dab6c8367558928ba4fa19f38a40c16422e0f31ec30",
    "translatableHash": "sha256:956b67f1f488f0c521fc39f30d96ab38c6f21eb221a7224ef7bb899b8a8a1f2b",
    "data": {
      "schemaVersion": 1,
      "name": "Hemlock",
      "itemType": "consumable",
      "level": 17,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "ingested",
        "poison"
      ],
      "description": "Concentrated hemlock is a particularly deadly toxin that halts muscle action—including that of the victim's heart.\nActivate A (manipulate)\nSaving Throw check (fortitude, dc:38, showDC:all)\nOnset 30 minutes\nMaximum Duration 60 minutes\nStage 1 16d6[poison] damage and Enfeebled 2 (10 minutes)\nStage 2 17d6[poison] damage and Enfeebled 3 (10 minutes)\nStage 3 18d6[poison] damage and Enfeebled 4 (10 minutes)",
      "bulk": 0.1,
      "price": {
        "gp": 2250
      },
      "usage": "held-in-one-hand",
      "category": "poison",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:bestial-mutagen-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "nS75vsM3x5jxlUqn",
      "slug": "bestial-mutagen-major",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:3d08572f13f22bf506e09ef79dc3ef5a545b3ff9f972c3e3e1f53ba208860bdc",
    "translatableHash": "sha256:d52161fdd81d7dcf3f4ef61c73b949509f45a2464f3b896c2dfb09079891512a",
    "data": {
      "schemaVersion": 1,
      "name": "Bestial Mutagen (Major)",
      "itemType": "consumable",
      "level": 17,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "elixir",
        "mutagen",
        "polymorph"
      ],
      "description": "Activate A (manipulate)\nYour features transform into something bestial and lumbering.\nBenefit You gain a +4 item bonus to Athletics checks and unarmed attack rolls. You gain a claw unarmed attack (4d8 slashing damage) with the agile trait and a jaws unarmed attack (4d10 piercing damage). Striking runes don't modify the damage caused by these attacks. You gain weapon specialization with the claw and jaws, or greater weapon specialization if you already have weapon specialization with these unarmed attacks.\nDrawback You take a -2 penalty to Reflex saves, Acrobatics checks, and Stealth Checks.\nDuration 1 hour.\nEffect: Bestial Mutagen (Major)",
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
    "contentId": "pf2e:item:equipment-srd:bottled-lightning-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "rpbbfkexLhtadBDV",
      "slug": "bottled-lightning-major",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-bombs/bottled-lightning.webp"
    },
    "sourceHash": "sha256:1b823144fde5e8450b45b097219005f94681c51845344d6ee5b2b9f865a53f74",
    "translatableHash": "sha256:899fc7a0ead9ef6aa3c445afcba040ba98b8e099fa0cde12885048377a182567",
    "data": {
      "schemaVersion": 1,
      "name": "Bottled Lightning (Major)",
      "itemType": "weapon",
      "level": 17,
      "rarity": "common",
      "traits": [
        "alchemical",
        "bomb",
        "consumable",
        "electricity",
        "splash"
      ],
      "description": "Activate A Strike\nBottled lightning is packed with volatile reagents that create a blast of electricity when they are exposed to air. Bottled lightning deals 4d6 electricity damage and 4 electricity splash damage. On a hit, the target becomes Off-Guard until the start of your next turn. You gain a +3 item bonus to attack rolls.",
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
        "type": "electricity"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:blight-bomb-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "sJjuv1991SZ7DWWD",
      "slug": "blight-bomb-major",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-bombs/blight-bomb.webp"
    },
    "sourceHash": "sha256:78f900f97b1c861bbd0e506eb9aa72e96ecbc1691b921133e33d19b358cd1155",
    "translatableHash": "sha256:374077a0d8facf299874510fc5036ee5426837c773d16e353a0bc55fc258252f",
    "data": {
      "schemaVersion": 1,
      "name": "Blight Bomb (Major)",
      "itemType": "weapon",
      "level": 17,
      "rarity": "common",
      "traits": [
        "alchemical",
        "bomb",
        "consumable",
        "poison",
        "splash"
      ],
      "description": "Activate A Strike\nBlight bombs contain volatile toxic chemicals that rot flesh. A blight bomb deals 4d4 poison damage, 4d4 persistent poison damage, and 4 poison splash damage. You gain a +3 item bonus to attack rolls.",
      "bulk": 0.1,
      "price": {
        "gp": 2500
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "bomb",
      "damage": {
        "dice": 4,
        "die": "d4",
        "type": "poison"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:silvertongue-mutagen-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "uD5vRYVOXNJ53sEE",
      "slug": "silvertongue-mutagen-major",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:812a9d7aa76ce0eaacb6ba66706a8412050fe8122b604b2dc3412847fdd09378",
    "translatableHash": "sha256:02127da44ee5805aed1404c44c3121cff9d805246639e89d91005fd1a3c2827c",
    "data": {
      "schemaVersion": 1,
      "name": "Silvertongue Mutagen (Major)",
      "itemType": "consumable",
      "level": 17,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "elixir",
        "mutagen",
        "polymorph"
      ],
      "description": "Activate A (manipulate)\nYour features become striking, and your voice becomes musical and commanding, though emotion clouds your reason.\nBenefit You gain a +4 item bonus to Deception, Diplomacy, Intimidation and Performance checks. Your critical failures with any of these skills become failures instead.\nDrawback You take a -2 item penalty to Arcana, Crafting, Lore, Occultism, and Society checks. Choose one skill in which you are trained; for the duration, you become untrained in that skill. All your failures to Recall Knowledge become critical failures.\nDuration 1 hour.\nEffect: Silvertongue Mutagen (Major)",
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
    "contentId": "pf2e:item:equipment-srd:sash-of-prowess-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "uj09q6x8wPAZcMs9",
      "slug": "sash-of-prowess-greater",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:ba11e997f8ba9916a630aa5992084b8597c2b39c0d9f1cea0d8c71c6ba50ea68",
    "translatableHash": "sha256:c3e0a2462e162434378805f55d0ab89f9a2f422c6f1425bda669d51096bf0edb",
    "data": {
      "schemaVersion": 1,
      "name": "Sash of Prowess (Greater)",
      "itemType": "equipment",
      "level": 17,
      "rarity": "common",
      "traits": [
        "focused",
        "invested",
        "magical"
      ],
      "description": "This humble sash can be worn around the waist or across the chest. A sash of prowess often bears a coloration or a pattern that represents the monastery in which you trained but can also sport religious symbology, such as the open hand of Irori. You gain a +3 item bonus to Acrobatics and Athletics skill checks.\nActivate—Effortless Mastery f (concentrate)\nFrequency once per day\nTrigger You succeed at an Acrobatics or Athletics skill check\nEffect You critically succeed instead.\nActivate—Reserves of Inner Strength f (concentrate)\nFrequency once per day\nEffect You gain 1 Focus Point, which you can spend only to cast a qi spell. If you don't spend this Focus Point by the end of this turn, it's lost.\nCraft Requirements You're a monk who can cast qi spells.",
      "bulk": 0,
      "price": {
        "gp": 13000
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:cognitive-mutagen-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "VBK9i74dry8yf8f0",
      "slug": "cognitive-mutagen-major",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:47e1ca77a0c8af02af19f9b2cb2177a73720936d36cbd1fba7dc0b28aa2438f7",
    "translatableHash": "sha256:2eba8fac342177653fade0878541d29a5686b77cd5885acca643cd74313de440",
    "data": {
      "schemaVersion": 1,
      "name": "Cognitive Mutagen (Major)",
      "itemType": "consumable",
      "level": 17,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "elixir",
        "mutagen",
        "polymorph"
      ],
      "description": "Activate A (manipulate)\nYour mind becomes clear, but physical matters seem ephemeral.\nBenefit You gain a +4 item bonus to Arcana, Crafting, Lore, Occultism, and Society checks and all checks to Recall Knowledge. Your critical failures on Recall Knowledge checks become failures instead. You become trained in one skill, chosen at creation.\nDrawback You take a -2 penalty to weapon and unarmed attack rolls, Athletics checks, and acrobatics checks. You can carry 2 less Bulk than normal before becoming encumbered, and the maximum Bulk you can carry is reduced by 4.\nDuration 1 hour.\nEffect: Cognitive Mutagen (Major)",
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
    "contentId": "pf2e:item:equipment-srd:prognostic-veil-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "2FlazfdJE2XPRba8",
      "slug": "prognostic-veil-greater",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:6e57eca57637f53721e084bb9dfd4e497b7f51d56cbb3087232bf2ead4ce741e",
    "translatableHash": "sha256:c969278e96ddb84f3a3f6a5a21baf97e06077aad262116048973efb8d22e8ee3",
    "data": {
      "schemaVersion": 1,
      "name": "Prognostic Veil (Greater)",
      "itemType": "equipment",
      "level": 18,
      "rarity": "common",
      "traits": [
        "focused",
        "invested"
      ],
      "description": "This gauzy purple veil is embroidered with symbols of divinatory significance. As your curse worsens, the veil ripples in an ever-increasing unseen wind. You gain a +3 item bonus to Religion checks.\nActivate—Remember the Future f (concentrate)\nFrequency once per day\nEffect You gain 1 Focus Point, which you can spend only to cast a revelation spell. If you don't spend this Focus Point by the end of this turn, it's lost.\nActivate—Twist the Skeins of Fate r (concentrate)\nFrequency once per day\nTrigger An ally within 30 feet is about to attempt a saving throw or an attack roll\nRequirements You have the Cursebound condition\nEffect The ally gains a status bonus to the saving throw or attack roll equal to the value of your cursebound condition.\nEffect: Twist the Skeins of Fate\nCraft Requirements You're an oracle.",
      "bulk": 0,
      "price": {
        "gp": 21000
      },
      "usage": "wornmask",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:potion-of-cold-retaliation-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "bCPAiqiWmH7pVxNE",
      "slug": "potion-of-cold-retaliation-major",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/potions/potion-of-cold-retalliation.webp"
    },
    "sourceHash": "sha256:ff0597ae64fe8b0df8652defeee423003524ac83b197d3764465a0541ce23c4b",
    "translatableHash": "sha256:ae01786ab8b028790b050149b3696453d480917000aac6eb93d37776c9bfd452",
    "data": {
      "schemaVersion": 1,
      "name": "Potion of Cold Retaliation (Major)",
      "itemType": "consumable",
      "level": 18,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "potion"
      ],
      "description": "Activate 1 (manipulate)\nFor 1 minute after drinking a potion of cold retaliation, you glow with a faint aura of cold energy, and a creature that touches you (such as by making an unarmed attack or using a spell with a range of touch against you) or is adjacent to you and hits you with a melee weapon strike takes cold damage.\nThe aura deals 4d8[cold] damage.",
      "bulk": 0.1,
      "price": {
        "gp": 5000
      },
      "usage": "held-in-one-hand",
      "category": "potion",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:potion-of-electricity-retaliation-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "bEaiID2KLQ8lTCai",
      "slug": "potion-of-electricity-retaliation-major",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/potions/potion-of-electricity-retalliation.webp"
    },
    "sourceHash": "sha256:e3d29b1998190535d7188e5f1d2a49df330b8d98a0876f79c3f63541a4c64c4f",
    "translatableHash": "sha256:099b1dc79e478e65854ac6018de7e9f6dc2c6b61e87dc5d460c741713cf0d7cd",
    "data": {
      "schemaVersion": 1,
      "name": "Potion of Electricity Retaliation (Major)",
      "itemType": "consumable",
      "level": 18,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "potion"
      ],
      "description": "Activate 1 (manipulate)\nFor 1 minute after drinking a potion of electricity retaliation, you glow with a faint aura of electrical energy, and a creature that touches you (such as by making an unarmed attack or using a spell with a range of touch against you) or is adjacent to you and hits you with a melee weapon strike takes electricity damage.\nThe aura deals 4d8[electricity] damage.",
      "bulk": 0.1,
      "price": {
        "gp": 5000
      },
      "usage": "held-in-one-hand",
      "category": "potion",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:potion-of-acid-retaliation-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "fabw5fDuaTMUF0tb",
      "slug": "potion-of-acid-retaliation-major",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/potions/potion-of-acid-retalliation.webp"
    },
    "sourceHash": "sha256:f0ee998874aef8a9abcb153dc37c858d3a5552858c288daef8f2c5f4304a8014",
    "translatableHash": "sha256:5b06f613691f27127a060f1cf9aadd5547a4510129035bd983a3f10afadb2148",
    "data": {
      "schemaVersion": 1,
      "name": "Potion of Acid Retaliation (Major)",
      "itemType": "consumable",
      "level": 18,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "potion"
      ],
      "description": "Activate 1 (manipulate)\nFor 1 minute after drinking a potion of acid retaliation, you glow with a faint aura of acid energy, and a creature that touches you (such as by making an unarmed attack or using a spell with a range of touch against you) or is adjacent to you and hits you with a melee weapon strike takes acid damage.\nThe aura deals 4d8[acid] damage.",
      "bulk": 0.1,
      "price": {
        "gp": 5000
      },
      "usage": "held-in-one-hand",
      "category": "potion",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:helm-of-zeal-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "FKf6eELtbFhbK69W",
      "slug": "helm-of-zeal-greater",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:3d4d6dd77850af5b02d20614eb1f743aa4cbde775631e5e174db680af0192f3b",
    "translatableHash": "sha256:0b37c8bef404e75484642871d92a30e6fe1dca60ec49fa5267ca66f131d34e97",
    "data": {
      "schemaVersion": 1,
      "name": "Helm Of Zeal (Greater)",
      "itemType": "equipment",
      "level": 18,
      "rarity": "common",
      "traits": [
        "divine",
        "focused",
        "invested"
      ],
      "description": "This elaborate helmet is emblazoned with the divine symbols of a deity chosen when the helmet was crafted. You gain a +3 item bonus to that deity's Divine Skill.\nActivate—Rally to the Cause f (concentrate)\nFrequency once per day\nEffect You gain 1 Focus Point, which you can spend only to cast a devotion spell. If you don't spend this Focus Point by the end of this turn, it's lost.\nActivate—Divine Fervor f (concentrate)\nFrequency once per hour\nTrigger You've just used your champion's reaction\nEffect You gain an additional reaction you can use only for your champion's reaction. You lose this reaction if you don't use it by the start of your next turn.\nCraft Requirements You're a champion of the deity represented by the helmet.",
      "bulk": 0.1,
      "price": {
        "gp": 21000
      },
      "usage": "wornheadwear",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:absolute-solvent-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "jdkMRl7zxOVGUuGI",
      "slug": "absolute-solvent-greater",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-tools/universal-solvent.webp"
    },
    "sourceHash": "sha256:c8dcea63a244df669faba27cb6803a47000e511c89d15023f0b3e63c3de3dc5c",
    "translatableHash": "sha256:b0b0efca5bc036a019caecd6f2f80b20b9b3315431404a987ddfa422633f2adf",
    "data": {
      "schemaVersion": 1,
      "name": "Absolute Solvent (Greater)",
      "itemType": "consumable",
      "level": 18,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable"
      ],
      "description": "Activate 1 (manipulate)\nOriginally formulated as a means of dissolving Everlasting Adhesive, this powerful solvent can break almost any adhesive's grip. As absolute solvent is particularly effective against everlasting adhesive, it automatically dissolves everlasting adhesive. It attempts to counteract any other adhesives, such as Glue Bombs, at 9th-rank and has a counteract modifier of [[/r 1d20+28 #Counteract]]{+28}.",
      "bulk": 0.1,
      "price": {
        "gp": 3250
      },
      "usage": "held-in-one-hand",
      "category": "potion",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-slaughter-8th-rank-spell",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "LnXYSaLxWMyAT3Ef",
      "slug": "wand-of-slaughter-8th-rank-spell",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/wands/specialty-wands/wand-of-slaying.webp"
    },
    "sourceHash": "sha256:0a0566152d363669c23a4abc29e4da14b3608368ed3f26c1fc8c2cd18011a7bf",
    "translatableHash": "sha256:98cb05439d1354f75b72c197527d74a2d1c659c0d07f4e13e8c7ae07d6d37e93",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Slaughter (8th-Rank Spell)",
      "itemType": "consumable",
      "level": 18,
      "rarity": "common",
      "traits": [
        "magical",
        "void",
        "wand"
      ],
      "description": "This polished black wand has a green gem at the tip, and anyone who looks into it sees a reflection of a grinning skull.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast Execute at 8th-rank. If the spell slays a living target, the corpse releases grim energy in a @Template[emanation|distance:20], dealing 16[void] damage.\nCraft Requirements Supply a casting of execute at 8th-rank.",
      "bulk": 0.1,
      "price": {
        "gp": 24000
      },
      "usage": "held-in-one-hand",
      "category": "wand",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:bottled-catharsis-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Pnw4A7fhUhTS85Te",
      "slug": "bottled-catharsis-major",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-elixirs/focus-cathartic.webp"
    },
    "sourceHash": "sha256:7cae89a732ea12210cf2850eb9c917f18cbe028048eb30f3497c41322778d067",
    "translatableHash": "sha256:5fee7f8e07feeb3e783e4b4a03a2a69c6f1a21205e10f067412d3cb7363a1b42",
    "data": {
      "schemaVersion": 1,
      "name": "Bottled Catharsis (Major)",
      "itemType": "consumable",
      "level": 18,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "elixir",
        "healing"
      ],
      "description": "Activate 1 (manipulate)\nThis drink unlocks a flood of emotions that helps reset your mental state. When you drink this elixir, the elixir attempts to counteract at 9th-rank and has a [[/r 1d20+28 #Counteract]]{+28} counteract modifier each effect on you that has the emotion trait or is inflicting the Stupefied condition on you, using the listed counteract rank and modifier.",
      "bulk": 0.1,
      "price": {
        "gp": 3250
      },
      "usage": "held-in-one-hand",
      "category": "elixir",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-the-snowfields-7th-rank-spell",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "q2kE0mEUAEL3gQv0",
      "slug": "wand-of-the-snowfields-7th-rank-spell",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/wands/specialty-wands/wand-of-the-snowfields.webp"
    },
    "sourceHash": "sha256:a65de5725011fed0ff112b0beb6c4f87f4a6231b7c9dff203b3e2de2889a80d7",
    "translatableHash": "sha256:23283d9e7783df325fbcc76d106c79935d1d034016c04749b897a55663c5e7ca",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of the Snowfields (7th-Rank Spell)",
      "itemType": "consumable",
      "level": 18,
      "rarity": "common",
      "traits": [
        "cold",
        "magical",
        "wand"
      ],
      "description": "This wand is a slender length of ice-blue glass.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast Howling Blizzard at 7th-rank. Snow lingers in the spell's area, remaining as difficult terrain for 1 minute.\nCraft Requirements Supply a casting of howling blizzard at 7th-rank.",
      "bulk": 0.1,
      "price": {
        "gp": 24000
      },
      "usage": "held-in-one-hand",
      "category": "wand",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:kings-sleep",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "RkI3jKKrCozvEvfr",
      "slug": "kings-sleep",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:66d1d13a6c2031a655cd5b55b85d2f4eecc0c8390a2f640657a98b59e8322438",
    "translatableHash": "sha256:ac5b5b2594024e5473117dc68f5bc901f541184e66a8c392260f7dd42a69831c",
    "data": {
      "schemaVersion": 1,
      "name": "King's Sleep",
      "itemType": "consumable",
      "level": 18,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "ingested",
        "poison",
        "virulent"
      ],
      "description": "King's sleep is an insidious long-term poison that can seem like a disease or even death from natural causes on a venerable target. The drained condition from king's sleep is cumulative with each failed save and can't be removed while the poison lasts.\nActivate A (manipulate)\nSaving Throw check (fortitude, dc:41, showDC:all)\nOnset 1 day\nStage 1 Drained 1 (1 day)\nStage 2 drained 1 (1 day)\nStage 3 Drained 2 (1 day)",
      "bulk": 0.1,
      "price": {
        "gp": 4000
      },
      "usage": "held-in-one-hand",
      "category": "poison",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:potion-of-fire-retaliation-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "TalLb1YlvXzutuPc",
      "slug": "potion-of-fire-retaliation-major",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/potions/potion-of-fire-retalliation.webp"
    },
    "sourceHash": "sha256:19a8fe85e626aaa61fb717c134857a615e2d83588631d48851f96789d946e598",
    "translatableHash": "sha256:cab32fc7643f725d378414cfc8679535dd1a8f723a8f59781b1561af50ea3f23",
    "data": {
      "schemaVersion": 1,
      "name": "Potion of Fire Retaliation (Major)",
      "itemType": "consumable",
      "level": 18,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "potion"
      ],
      "description": "Activate 1 (manipulate)\nFor 1 minute after drinking a potion of fire retaliation, you glow with a faint aura of fire energy, and a creature that touches you (such as by making an unarmed attack or using a spell with a range of touch against you) or is adjacent to you and hits you with a melee weapon strike takes fire damage.\nThe aura deals 4d8[fire] damage.",
      "bulk": 0.1,
      "price": {
        "gp": 5000
      },
      "usage": "held-in-one-hand",
      "category": "potion",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-crackling-lightning-8th-rank-spell",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "U28jkj5ZDl2drtEH",
      "slug": "wand-of-crackling-lightning-8th-rank-spell",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/wands/specialty-wands/wand-of-crackling-lightning.webp"
    },
    "sourceHash": "sha256:97d497e1163a980d85deaa250dd6a60a4a72f924ec0297d093c34936b706b0b7",
    "translatableHash": "sha256:9baeef33d468c583d5e75f86965b70eafd0faacf756e7a6837965353459d27e7",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Crackling Lightning (8th-Rank Spell)",
      "itemType": "consumable",
      "level": 18,
      "rarity": "common",
      "traits": [
        "electricity",
        "magical",
        "wand"
      ],
      "description": "This wand is made of two copper plates and a ceramic center.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast Lightning Bolt at 8th-rank, but the spell's area is twice as wide (two adjacent and parallel @Template[line|distance:120|width:10]{120-foot lines}) and creatures that fail their save are Off-Guard for 1 round.\nCraft Requirements Supply a casting of lightning bolt at 8th-rank.",
      "bulk": 0.1,
      "price": {
        "gp": 24000
      },
      "usage": "held-in-one-hand",
      "category": "wand",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:crystal-shards-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "V2knI4GpdJYLupjg",
      "slug": "crystal-shards-major",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-bombs/crystal-shards.webp"
    },
    "sourceHash": "sha256:1e062f90e1f6aa1a0d4f7a358b4f782ad81b69896268580b0f9e12feb8b6fdfd",
    "translatableHash": "sha256:6621c9982d20d4d18e87a06ee93138585ccb349fd966459dc71cd3e4f4986470",
    "data": {
      "schemaVersion": 1,
      "name": "Crystal Shards (Major)",
      "itemType": "weapon",
      "level": 18,
      "rarity": "common",
      "traits": [
        "alchemical",
        "bomb",
        "consumable",
        "earth",
        "splash"
      ],
      "description": "Activate A Strike\nThis flask holds a pressurized red-brown gas flecked with bits of sublimated crystal. You gain a +3 item bonus to attack rolls. When the bomb explodes, it deals 4d4[piercing] damage and (6[splash)[piercing]]{6 piercing splash damage} as the mixture suddenly turns into solid crystals flying at high speeds.\nOn a hit, the target takes 1[persistent,bleed] damage from the crystals embedded in its flesh. As long as the bleed damage persists, the target also takes a –5-foot penalty to its speed. The target can spend an Interact action to remove the crystals, reducing the DC to stop the bleeding.",
      "bulk": 0.1,
      "price": {
        "gp": 4000
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "bomb",
      "damage": {
        "dice": 4,
        "die": "d4",
        "type": "piercing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:ring-of-maniacal-devices-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Wkm2VYPsfGjWBtQe",
      "slug": "ring-of-maniacal-devices-greater",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:e602c5bb554d1ed8fc25df73f701c7e70f2b27c7ab0ab96470172f21690167a3",
    "translatableHash": "sha256:32d928f16bcef4e09a082f7ef47519b7a83f0ec08cc84caa409cbfe1bcef5a0e",
    "data": {
      "schemaVersion": 1,
      "name": "Ring of Maniacal Devices (Greater)",
      "itemType": "equipment",
      "level": 18,
      "rarity": "common",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "This magic ring seems like simple tarnished brass, but it enhances your curiosity about traps and devices of all kinds.\nYou can use an Interact action to pull a Thieves' Toolkit from the ring. This toolkit appears in your hand and any part of it folds back into the ring if they would leave your possession.\nThey grant you a +3 item bonus to Thievery checks to Disable a Device and to Pick a Lock, and the ring's insights grant you the same bonus to Crafting checks to Craft and Repair snares and traps.\nActivate—Fireball Trap 10 minutes (manipulate)\nFrequency once per day\nEffect You create the effects of a Rune Trap ritual containing your choice of either a 7th-rank Howling Blizzard or 7th-rank Fireball. You can have only one trapped rune from a ring of maniacal devices active at a time, even if you have multiple rings, and the rune disappears if you lose your investiture in the ring.",
      "bulk": 0,
      "price": {
        "gp": 21000
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:warleaders-bulwark-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "XKON66YXYLXlGPPg",
      "slug": "warleaders-bulwark-greater",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:2803a4addcbc4c4719879323427f130bf9cd5b687acf6584b8edaea9323e4257",
    "translatableHash": "sha256:e1f97f10e202c47737ec4b6dd657d73a9c0562965bf0159c31aa84948b911ed9",
    "data": {
      "schemaVersion": 1,
      "name": "Warleader's Bulwark (Greater)",
      "itemType": "armor",
      "level": 18,
      "rarity": "common",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "This +2 resilient breastplate is made from shining bronze overlaid with reinforcing golden panels emblazoned with images of loyal soldiers. Wearing this breastplate grants you a commanding aura. You gain a +3 item bonus to Diplomacy checks, but you take a -3 item penalty to Stealth checks to Hide and Sneak and Deception checks to Impersonate.\nActivate—Command Bravery 1 (concentrate)\nFrequency once per day\nEffect You grant allies within 100 feet a +2 status bonus to saves against fear effects for 1 minute. When you activate this ability, each affected ally who's Frightened reduces their frightened value by 1.\nEffect: Command Bravery",
      "bulk": 2,
      "price": {
        "gp": 22000
      },
      "usage": "",
      "category": "medium",
      "group": "plate",
      "armor": {
        "armorClassBonus": 4,
        "dexterityCap": 1,
        "checkPenalty": -3,
        "speedPenaltyFeet": -5
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:surging-serum-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "YIgIF1845n5UBFnE",
      "slug": "surging-serum-major",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-elixirs/sinew-shock-serum.webp"
    },
    "sourceHash": "sha256:071067093fa7299eee02eed0b6f96c3055dcd88280124b6a18d0723b9d4e149f",
    "translatableHash": "sha256:3b5f8d5e5c1aa9460d51d4b9dd28ddce693612509a5dec9022f82ed6edd3975d",
    "data": {
      "schemaVersion": 1,
      "name": "Surging Serum (Major)",
      "itemType": "consumable",
      "level": 18,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "elixir",
        "healing"
      ],
      "description": "Activate 1 (manipulate)\nInvoluntary jolts and surges of energy move through the drinker's body as it restores normal muscle control. When you drink this elixir, it attempts to counteract each effect that's inflicting the Clumsy or Enfeebled condition on you, using a 9th-rank counteract and a [[/r 1d20+28 #Counteract]]{+28 counteract modifier}.",
      "bulk": 0.1,
      "price": {
        "gp": 3250
      },
      "usage": "held-in-one-hand",
      "category": "elixir",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:guise-of-the-smirking-devil-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "b2shhButUcNimET9",
      "slug": "guise-of-the-smirking-devil-greater",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/other-worn-items/mask-of-the-banshee.webp"
    },
    "sourceHash": "sha256:b7ebf39a9902bf2d084d066d876a51be7e5960f23cb90c012af34696782d9d8b",
    "translatableHash": "sha256:f81aa68441db6bc4b9e2608d367040f68f6ef091d84bb38b98a2efdceeca1e48",
    "data": {
      "schemaVersion": 1,
      "name": "Guise of the Smirking Devil (Greater)",
      "itemType": "equipment",
      "level": 19,
      "rarity": "common",
      "traits": [
        "auditory",
        "invested",
        "magical",
        "void"
      ],
      "description": "This ice-blue half-mask is adorned with a wicked silver grin that covers the wearer's mouth, leaving the rest of the face uncovered. You gain a +3 item bonus to Intimidation checks.\nActivate—Hideous Wail 2 (concentrate, manipulate)\nFrequency once per day\nEffect The mask casts a 9th-rank Wails of the Damned\nEach living creature in a @Template[emanation|distance:40] takes 8d10[void|options:area-damage] damage and must attempt a check (fortitude, dc:41, options:area-effect,damaging-effect) save.\nCritical Success The creature is unaffected.\nSuccess The creature takes full damage.\nFailure The creature takes full damage and is Drained [[/r 1d4]].\nCritical Failure The creature takes double damage and is Drained 4.",
      "bulk": 0,
      "price": {
        "gp": 35000
      },
      "usage": "wornmask",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:berserkers-cloak-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "OGKI8NS8Er3qumJS",
      "slug": "berserkers-cloak-greater",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:e004c8a9f0d4e6480355c2ec3075b075e1f90896de4266915cee55d8f56e9ec4",
    "translatableHash": "sha256:f6e2af8f37d97aa689f309a7b72f881a1fc31af62bc7986a9e4174400b89af59",
    "data": {
      "schemaVersion": 1,
      "name": "Berserker's Cloak (Greater)",
      "itemType": "equipment",
      "level": 19,
      "rarity": "common",
      "traits": [
        "invested",
        "primal"
      ],
      "description": "This bearskin includes the head and bared teeth of the mighty creature from which it was taken. When worn, the cloak drapes over your head and around your shoulders, imbuing you with a bear's ferocity.\nIf you have the Rage action, while raging you grow jaws that deal 1d10 piercing damage and claws that deal 1d6 slashing damage and have the agile trait. This transformation is a morph effect, and both the jaws and claws are unarmed attacks in the brawling weapon group. You gain the benefits of a +2 weapon potency rune and a greater striking rune with these attacks (gaining a +2 item bonus to attack rolls and increasing the weapon damage dice by two).\nIf you have an animal instinct and the bestial rage instinct ability, instead of gaining these unarmed attacks, your unarmed attacks from the bestial rage instinct ability gain the benefits of a +3 weapon potency rune and a major striking rune (granting a +3 item bonus to attack rolls and increasing the weapon damage dice by three).",
      "bulk": 1,
      "price": {
        "gp": 40000
      },
      "usage": "worncloak",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:black-lotus-extract",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "xQS1MSqGQz44FWUh",
      "slug": "black-lotus-extract",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:a0e119603a4075bbb53ea42ab30c6f095b02a20404f04a82495356055a6b4430",
    "translatableHash": "sha256:b881eed0c12ed2be35708be44e04fd8295421abd63e3607d58763f6764247cfe",
    "data": {
      "schemaVersion": 1,
      "name": "Black Lotus Extract",
      "itemType": "consumable",
      "level": 19,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "contact",
        "poison",
        "virulent"
      ],
      "description": "Black lotus extract causes severe internal bleeding.\nActivate A (manipulate)\nSaving Throw check (fortitude, dc:42, showDC:all)\nOnset 1 minute\nMaximum Duration 6 rounds\nStage 1 13d6[poison] damage and Drained 1 (1 round)\nStage 2 15d6[poison] damage and drained 1 (1 round)\nStage 3 17d6[poison] damage and Drained 2 (1 round)",
      "bulk": 0.1,
      "price": {
        "gp": 6500
      },
      "usage": "held-in-one-hand",
      "category": "poison",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-overflowing-life-8th-rank-spell",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "xZFbFeJckiQS7smT",
      "slug": "wand-of-overflowing-life-8th-rank-spell",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/wands/specialty-wands/wand-of-overflowing-life.webp"
    },
    "sourceHash": "sha256:7e301f8b13475f3f3a285aa6969fadbc18b2e7e5e788ed98a8ea589148a05acc",
    "translatableHash": "sha256:477a5db7b543fdbe8510ea9950274f478771a71f42cd44322cf9c7f0a80cc0e2",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Overflowing Life (8th-Rank Spell)",
      "itemType": "consumable",
      "level": 19,
      "rarity": "common",
      "traits": [
        "healing",
        "magical",
        "vitality",
        "wand"
      ],
      "description": "This alabaster wand has a clear crystal at the tip.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast Heal at 8th-rank.\nAfter you cast the spell, at the start of your next turn, excess healing magic wells up from the wand and heals you, as though you cast the 1-action version of heal on yourself at 8th-rank. You gain this benefit only once per turn, even if you cast multiple heal spells from wands of overflowing life in the same turn.\nCraft Requirements Supply a casting of heal at 8th-rank.",
      "bulk": 0.1,
      "price": {
        "gp": 40000
      },
      "usage": "held-in-one-hand",
      "category": "wand",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:staff-of-impossible-visions-true",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "1glQQ63AeQOfQNvc",
      "slug": "staff-of-impossible-visions-true",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:83324db97178e1e6260861b900e165181984cd5b36b25af045f978a551e61dde",
    "translatableHash": "sha256:ceae808321d6852d1a0deffc08667bf7252df1da3139427cfa9da084c9bfc292",
    "data": {
      "schemaVersion": 1,
      "name": "Staff of Impossible Visions (True)",
      "itemType": "weapon",
      "level": 20,
      "rarity": "uncommon",
      "traits": [
        "magical",
        "staff",
        "two-hand-d8"
      ],
      "description": "This bizarre staff is made from oak, capped with a cluster of eye-shaped gemstones that seem to move and undulate at the corner of your vision. While wielding the staff, you can peer through the eyes on the staff rather than your own, using your normal visual senses (including any benefits of spells like See the Unseen). You can maneuver the staff to see things around corners, at higher elevations, or in places where the staff can fit but your head can't. This doesn't provide sufficient line of effect to target creatures around corners. The eyes are as vulnerable as your eyes and can be affected by anything that alters your vision, such as a blinding flash of light.\nActivate Cast a Spell\nEffect You expend a number of charges from the staff to cast a spell from its list.\n• Cantrip Daze\n• 1st Fear, Phantom Pain\n• 2nd Augury, Paranoia\n• 3rd Hypnotize, Paralyze\n• 4th Countless Eyes, Vision of Death\n• 5th Strange Geometry\n• 6th Blinding Fury, Phantasmal Calamity\n• 7th Visions of Danger, Warp Mind\n• 8th Spirit Song, Uncontrollable Dance\n• 9th Unfathomable Song, Phantasmagoria\nCraft Requirements Supply one casting of all listed ranks of all listed spells.",
      "bulk": 1,
      "price": {
        "gp": 70000
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
    "contentId": "pf2e:item:equipment-srd:philosophers-stone",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Fv97oB3iEIFAyzTu",
      "slug": "philosophers-stone",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:42552af1c0dbbd05c42afc49d07dd8235821cdd17508686ce72c82deaec56c89",
    "translatableHash": "sha256:b5d2ab354967fa6590f143c51b81fab4276e1e921112619cd6ce3f24dde7d6ab",
    "data": {
      "schemaVersion": 1,
      "name": "Philosopher's Stone",
      "itemType": "consumable",
      "level": 20,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "consumable"
      ],
      "description": "Activate 1 (manipulate) or 1 or more days; see below\nAn alchemist with the Craft Philosopher's Stone feat adds the formula for this item to their formula book. This allows them to create a philosopher's stone once per month during their daily preparations using advanced alchemy. Unlike other items created with advanced alchemy, the philosopher's stone remains potent for 1 month or until the alchemist creates a new one. This is the only way to create a philosopher's stone.\nAt a glance, a philosopher's stone appears to be an ordinary, sooty piece of natural rock. Breaking the rock open with a Force Open action (DC 35) reveals a cavity at the stone's heart. The cavity is lined with a rare type of quicksilver that can transmute base metals into precious metals or create an elixir of rejuvenation.\nTo use the quicksilver, you must be legendary in Crafting and have the Alchemical Crafting feat. You can then use the stone's quicksilver for one of two effects.\n• You can apply the stone's quicksilver to an infused Elixir of Life (True) using an Interact action. This turns the elixir into an infused Elixir of Rejuvenation instantaneously. This doesn't require any crafting time or additional materials.\n• You can spend up to a month of downtime applying the quicksilver either to iron to create silver or to lead to create gold. Treat this as a 20th-level task to Earn Income using Crafting, except that you create 500 gp worth of your chosen metal per day on a success or 750 gp worth per day on a critical success.",
      "bulk": 2,
      "price": {},
      "usage": "held-in-one-hand",
      "category": "toolkit",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:tears-of-death",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "gDGPvobJV1QGYBPy",
      "slug": "tears-of-death",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:7e9a72b8aab96250d435256f6ca412cfe538daefd167248208430777565c25f2",
    "translatableHash": "sha256:01fdcc1b15479eb9da063efaa291a04b1934cf39565050ac18e194dac90c4e74",
    "data": {
      "schemaVersion": 1,
      "name": "Tears of Death",
      "itemType": "consumable",
      "level": 20,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "contact",
        "poison",
        "virulent"
      ],
      "description": "Tears of death are among the most powerful of alchemical poisons, distilled from extracts of five other deadly poisons in just the right ratios.\nActivate A (manipulate)\nSaving Throw check (fortitude, dc:44, showDC:all)\nOnset 1 minute\nMaximum Duration 10 minutes\nStage 1 20d6[poison] damage and Paralyzed (1 round)\nStage 2 22d6[poison] damage and paralyzed (1 minute)\nStage 3 24d6[poison] damage and paralyzed (1 minute)",
      "bulk": 0.1,
      "price": {
        "gp": 12000
      },
      "usage": "held-in-two-hands",
      "category": "poison",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-slaughter-9th-rank-spell",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "mMZWdoHvP2yYJzrR",
      "slug": "wand-of-slaughter-9th-rank-spell",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/wands/specialty-wands/wand-of-slaying.webp"
    },
    "sourceHash": "sha256:4f7969d659eecb1fc7c0353e650b1f76e4bd41499399c97203a6acf356d47e94",
    "translatableHash": "sha256:24bbd46f30b9a7393a7805881caeafa411a9c88a699573224b05874d844f99fa",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Slaughter (9th-Rank Spell)",
      "itemType": "consumable",
      "level": 20,
      "rarity": "common",
      "traits": [
        "magical",
        "void",
        "wand"
      ],
      "description": "This polished black wand has a green gem at the tip, and anyone who looks into it sees a reflection of a grinning skull.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast Execute at 9th-rank. If the spell slays a living target, the corpse releases grim energy in a @Template[emanation|distance:20], dealing 18[void] damage.\nCraft Requirements Supply a casting of execute at 9th-rank.",
      "bulk": 0.1,
      "price": {
        "gp": 70000
      },
      "usage": "held-in-one-hand",
      "category": "wand",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:staff-of-providence-true",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "pIagOwW8EFBaKW3k",
      "slug": "staff-of-providence-true",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:8ca9a0ee7bd1036e08583c6aea9ac9ebd6ca22cd266666d1fd7d80f43a936f8d",
    "translatableHash": "sha256:d46437758be445a562004fbee5669ef65f3cc8a75da4580d982d1bbfcbebeac1",
    "data": {
      "schemaVersion": 1,
      "name": "Staff of Providence (True)",
      "itemType": "weapon",
      "level": 20,
      "rarity": "common",
      "traits": [
        "magical",
        "staff",
        "two-hand-d8"
      ],
      "description": "A large, stylized symbol of an eye adorns the top of this wooden staff, representing the watchful eye of the divine powers. The bearer of the staff can guide and protect, seeing bounties and tragedies that could befall them in the future. When wielding this staff, you gain a +1 item bonus to Survival checks to Sense Direction or Subsist and to Religion checks to Recall Knowledge.\nActivate Cast a Spell\nEffect You expend a number of charges from the staff to cast a spell from its list.\n• Cantrip Guidance\n• 1st Bless, Create Water\n• 2nd Augury, Create Food, See the Unseen, Status\n• 3rd Safe Passage, Wanderer's Guide\n• 4th Cleanse Affliction, Dispelling Globe, Status\n• 5th Dispelling Globe, Scouting Eye, See the Unseen\n• 6th Dispelling Globe, Scintillating Safeguard, Truesight\n• 7th Dispelling Globe, Energy Aegis\n• 8th Dispelling Globe, Divine Inspiration\n• 9th Dispelling Globe, Foresight, Overwhelming Presence\nCraft Requirements Supply one casting of all listed ranks of all listed spells.",
      "bulk": 1,
      "price": {
        "gp": 64000
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
    "contentId": "pf2e:item:equipment-srd:flying-blade-wheel-snare",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "qvfO0jFIvIM8hReG",
      "slug": "flying-blade-wheel-snare",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/snares/flying-blade-wheel-snare.webp"
    },
    "sourceHash": "sha256:3ba8309c8b86062391afe63b861d2c0630d644a0cf0d113f9550993a738a570b",
    "translatableHash": "sha256:0535929d4dd96051e43bad29c93bff51cf5641f97a284a6dab44ee077b949442",
    "data": {
      "schemaVersion": 1,
      "name": "Flying Blade Wheel Snare",
      "itemType": "consumable",
      "level": 20,
      "rarity": "common",
      "traits": [
        "consumable",
        "mechanical",
        "snare",
        "trap"
      ],
      "description": "When a creature enters the square, a deadly flying wheel of spinning blades launches at it, making a [[/r 1d20+35]]{Strike} with an attack modifier of +35 and dealing 8d8[slashing] damage. Once on each of your turns, you can use an Interact action within 120 feet of the wheel to cause it to Fly up to 60 feet toward the creature it's chasing and make another Strike if it's within 5 feet of its target after it moves. After 1 minute, the spinning ceases and the wheel falls to the ground. Creatures can destroy the wheel to stop it (AC 37, Fort +29, Ref +20, HP 200, Hardness 10, object immunities).",
      "bulk": 0,
      "price": {
        "gp": 10000
      },
      "usage": "held-in-one-hand",
      "category": "snare",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-smoldering-fireballs-9th-rank-spell",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "tBwMPimZ6A93XpHf",
      "slug": "wand-of-smoldering-fireballs-9th-rank-spell",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/wands/specialty-wands/wand-of-smoldering-fireballs.webp"
    },
    "sourceHash": "sha256:bb84c1d563df468417158fe1176757de742f5696677559c67f1ca0528082b1c7",
    "translatableHash": "sha256:2157bb3ea8e7f72273b1dce16280b1e2ae0e79d28fe91c2dab540d9ee3a2194f",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Smoldering Fireballs (9th-Rank Spell)",
      "itemType": "consumable",
      "level": 20,
      "rarity": "common",
      "traits": [
        "fire",
        "magical",
        "wand"
      ],
      "description": "This blackened, heavily burned stick smells faintly of saltpeter.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast Fireball at 9th-rank. Each creature that fails its save takes 4d6[persistent,fire] damage.\nCraft Requirements Supply a casting of fireball at 9th-rank.",
      "bulk": 0.1,
      "price": {
        "gp": 70000
      },
      "usage": "held-in-one-hand",
      "category": "wand",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:elixir-of-rejuvenation",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "UHrLqWCnFEUspSQj",
      "slug": "elixir-of-rejuvenation",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-elixirs/elixir-of-rejuvenation.webp"
    },
    "sourceHash": "sha256:dac6823850379d8e55b11be655748d34ea74f098c532a3acd17f54f236d52143",
    "translatableHash": "sha256:a9b27234e6650643c61a7fa065a67bdcc30c9acf63023e84bef762ce6f02f91f",
    "data": {
      "schemaVersion": 1,
      "name": "Elixir of Rejuvenation",
      "itemType": "consumable",
      "level": 20,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "consumable",
        "elixir",
        "healing"
      ],
      "description": "Activate 1 (manipulate)\nThe elixir of rejuvenation restores a creature to full health and eradicates toxins affecting it. When you drink this elixir, you're restored to your maximum Hit Points, and all afflictions of 20th level or lower affecting you are removed.\nYou can instead administer this elixir to a creature that has been dead for a week or less. When you do, that creature is instantly brought back to life with 1 Hit Point and no spell slots, Focus Points, or other daily resources.\nCraft Requirements philosopher's stone, true elixir of life",
      "bulk": 0.1,
      "price": {},
      "usage": "held-in-one-hand",
      "category": "elixir",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:cloth-of-nullification",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "W8Vh7KTl3Ux7VYVU",
      "slug": "cloth-of-nullification",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:35eb3bc7f1059ca4b21b7e854a02f9314ab517f5e2965535d1b61d4a845f5f98",
    "translatableHash": "sha256:2f5307712b47dbfcd2a553d415d12e9b2e0e8206a3dd7ac6414e99a0c72e0061",
    "data": {
      "schemaVersion": 1,
      "name": "Cloth of Nullification",
      "itemType": "equipment",
      "level": 20,
      "rarity": "rare",
      "traits": [
        "magical"
      ],
      "description": "This small piece of embroidered cloth is inimical to all magic.\nActivate—Nullify Magic 2 (manipulate)\nEffect You cover a magic item with the cloth or wave the cloth near a magic effect and attempt to counteract the effect or item. The cloth's counteract check modifier is [[/r 1d20+32 #Counteract]]{+32}, and its counteract rank is 10. Regardless of the result, the cloth of nullification can't be activated again for [[/br 2d6 #hours]]{2d6 hours}. On a success, the effect or item is deactivated for the same amount of time, and its duration, if any, continues to expire during that time. With a successful counteract check, you can instead choose to completely absorb the magic from the effect or item into the cloth of nullification. If you do, both become completely non-magical and their magic can't be recovered, even by the remake spell.\nThe cloth of nullification automatically fails to counteract most artifacts and similarly powerful items",
      "bulk": 1,
      "price": {
        "gp": 75000
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:instant-evisceration-snare",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "xqCz2vStMNJujfpp",
      "slug": "instant-evisceration-snare",
      "publicationTitle": "Pathfinder Player Core 2",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/snares/instant-evisceration-snare.webp"
    },
    "sourceHash": "sha256:1261e559ff58dd38fe4497bfc98abace7fb7f5c47799ec4039d94b45be8b274c",
    "translatableHash": "sha256:da516f7209780632413bce63c88b9d396aa50cab2f0204b9c32d9e35c27551fd",
    "data": {
      "schemaVersion": 1,
      "name": "Instant Evisceration Snare",
      "itemType": "consumable",
      "level": 20,
      "rarity": "common",
      "traits": [
        "consumable",
        "mechanical",
        "snare",
        "trap"
      ],
      "description": "When a creature enters the snare's square, the snare releases an unbelievable arsenal of blades at the creature, dealing 18d8[piercing] damage (check (reflex, showDC:all, dc:42, basic) save).",
      "bulk": 0,
      "price": {
        "gp": 10000
      },
      "usage": "held-in-one-hand",
      "category": "snare",
      "group": "consumable"
    }
  }
]
