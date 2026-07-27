import type { Pathfinder2eOriginalContentRecord } from '../../records'
import type { Pathfinder2eItemData } from '../types'

export const PATHFINDER_2E_EXHAUSTIVE_21_ITEM_ORIGINALS: readonly Pathfinder2eOriginalContentRecord<Pathfinder2eItemData>[] = [
  {
    "contentId": "pf2e:item:equipment-srd:pactmasters-grace",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "IHybXd0JGwhMrOlr",
      "slug": "pactmasters-grace",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/other-worn-items/pactmasters-grace.webp"
    },
    "sourceHash": "sha256:e306923ea786a802bf8cb448f44cbbd956b9cd4e01276a4a7758f493fe97e5fc",
    "translatableHash": "sha256:107368d56a1b1c19f709cd6afe9e250c0612f21ad182e64969f9ec39253fb5ff",
    "data": {
      "schemaVersion": 1,
      "name": "Pactmaster's Grace",
      "itemType": "equipment",
      "level": 14,
      "rarity": "uncommon",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "Granted by Katapesh's Pactmasters to influential merchants, exceptional Zephyr Guards, and favorite retainers, a pactmaster's grace is a crystal-studded blue platinum ring that sharpens the wearer's urban instincts. While invested, the ring grants a +2 item bonus to saving throws while you are in an urban setting, and this increases to a +3 item bonus if you have legendary proficiency in Guild Lore, Katapesh Lore, Mercantile Lore, or Society. You also gain a +3 item bonus to Mercantile Lore checks while wearing the ring, and you can attempt checks that require a proficiency rank of master in Society.",
      "bulk": 0,
      "price": {
        "gp": 4000
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:tentacle-potion-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "ipaBbiROyAN4McWA",
      "slug": "tentacle-potion-greater",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/consumable.svg"
    },
    "sourceHash": "sha256:5d8fdff27194868b63895fe303bb29e4b4cbe7a902bf12c8cb738f1cf63c08c3",
    "translatableHash": "sha256:426030a7850fb8c6740f1c5b56c4b8f218c132ddb9b3ad0e7204f650a8d53814",
    "data": {
      "schemaVersion": 1,
      "name": "Tentacle Potion (Greater)",
      "itemType": "consumable",
      "level": 14,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "potion"
      ],
      "description": "Activate 1 (manipulate)\nUpon consuming this mottled, foul-tasting liquid, the tentacle potion causes you to extrude a long, flexible limb of ectoplasm. Your clothing doesn't need to accommodate this limb of ghostly matter, which can extrude through your clothing and armor. The limb lasts 24 hours, and you can Dismiss the activation. You can't hide or disguise the tentacle. You can use the limb to perform simple Interact actions, such as opening an unlocked door. Your limb can't perform actions that require significant manual dexterity, including any action that would require a check to accomplish. At one time, you can have only one extra limb from any version of this potion. Stronger tentacle potions replace the effects of weaker ones.\nYou can use the limb to hold an item of up to 1 Bulk or be used as a second hand to help hold an item of up to 2 Bulk. You can also use the limb to make an unarmed attack that deals 1d6 bludgeoning damage and has the sweep trait. You can also use the whole limb to hold onto a suitable anchor point, such as a tree branch, balcony, or rocky outcropping, subject to the GM's discretion. While using your limb this way, you have free use of all your other limbs, so you can perform tasks that require both hands.\nIf you have the Flexible Tail or Skillful Tail feats, the Tailed Goblin heritage, or a similar feature the GM believes would benefit, this potion can instead fortify your tail. A fortified tail benefits from any tentacle potion as if the potion were the next better type.",
      "bulk": 0.1,
      "price": {
        "gp": 660
      },
      "usage": "held-in-one-hand",
      "category": "potion",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:accursed-staff-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "jHCPejseO01ki3lO",
      "slug": "accursed-staff-major",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:76b64c0c0ba71ec097f8e3db8e90d9f1de6ce4c3ace90fe4098f9a0d6db7130f",
    "translatableHash": "sha256:f79c156032fce275da672e29e73b5d951a2a4ab8f8aa817e6e967619df866c8f",
    "data": {
      "schemaVersion": 1,
      "name": "Accursed Staff (Major)",
      "itemType": "weapon",
      "level": 14,
      "rarity": "common",
      "traits": [
        "magical",
        "staff",
        "two-hand-d8"
      ],
      "description": "Iron strips line the body of an accursed staff, capping the bottom and folding into an intricate knot at the top. While wielding an accursed staff, you're empowered by the curses you inflict. If an enemy fails a saving throw against a spell you cast that has the curse trait, you gain temporary Hit Points equal to double that spell's rank. These temporary Hit Points last 10 minutes. The enemy must be a significant threat and can't have been a willing subject of the curse.\nActivate Cast a Spell\nEffect You expend a number of charges from the staff to cast a spell from its list.\n• Cantrip Daze\n• 1st Bane, Ill Omen\n• 2nd Blood Vendetta, Warrior's Regret\n• 3rd Claim Curse, Cup of Dust\n• 4th Cleanse Affliction, Outcast's Curse, Warrior's Regret\n• 5th Inevitable Disaster, Mariner's Curse\n• 6th Blinding Fury, Cleanse Affliction, Never Mind\nCraft Requirements Supply one casting of all listed ranks of all listed spells.",
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
    "contentId": "pf2e:item:equipment-srd:wand-of-the-ash-puppet",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "JzGuXGSjsfWDMu7P",
      "slug": "wand-of-the-ash-puppet",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/wands/magic-wands/magic-wand.webp"
    },
    "sourceHash": "sha256:0e8ea562da68eb2db1530ad6bfb5e8dca3728953a94915b2d6e4a942a58b0eff",
    "translatableHash": "sha256:137cb8952f3c7496387d75435faa55ffb2c8c212759ef7e60ec155b98b67bedf",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of the Ash Puppet",
      "itemType": "consumable",
      "level": 14,
      "rarity": "common",
      "traits": [
        "magical",
        "wand"
      ],
      "description": "This wand is composed of ash that has been compressed, shaped, and sealed with a clear lacquer. When you trace the wand's tip along a solid surface, it leaves a black trail of charcoal. Writing with the wand in this way never damages or wears the wand down.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast Disintegrate. If the spell reduces a living creature to fine powder, you animate that creature's ashes into a Sulfur Zombie with the same general appearance as the disintegrated creature. You control this sulfur zombie, which gains the minion and summoned traits. You can issue a verbal command to the sulfur zombie as a single action with the auditory and concentrate traits. The sulfur zombie crumbles into inanimate ash when reduced to 0 Hit Points or after 1 minute, whichever comes first.\nCraft Requirements Supply a casting of disintegrate.",
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
    "contentId": "pf2e:item:equipment-srd:wand-of-noisome-acid-6th-rank",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "ljZwHU5BMnFafVa3",
      "slug": "wand-of-noisome-acid-6th-rank",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/wands/specialty-wands/wand-of-noisome-acid.webp"
    },
    "sourceHash": "sha256:f194d01791631537ff40af8e7f5063d3cc0201f2da6d18ddc3770b317d778d98",
    "translatableHash": "sha256:6042320038bb1d9f25813c140f821537a2300635e7d81bf9e2d3d4e265664ddc",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Noisome Acid (6th-Rank)",
      "itemType": "consumable",
      "level": 14,
      "rarity": "common",
      "traits": [
        "acid",
        "magical",
        "wand"
      ],
      "description": "This greasy stick emits a stomach-churning scent when held in a hand.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast Acid Grip at 6th rank. A creature that takes initial acid damage from this spell become Sickened 1. Use your spell DC if the creature attempts to recover from this sickness. This is an olfactory effect.\nCraft Requirements Supply a casting of acid grip at 6th rank",
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
    "contentId": "pf2e:item:equipment-srd:tome-of-restorative-cleansing-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "m9v1YKUvQuFGVZ10",
      "slug": "tome-of-restorative-cleansing-greater",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:5baa1aa1e7f625b3e4b1466e5fe4bf2cb930846103ce2c9735645999a644bda4",
    "translatableHash": "sha256:1fe2fe56ab96cfcd0550961e4a9cec14aff43c70d5c44b5814851523ce1a1f22",
    "data": {
      "schemaVersion": 1,
      "name": "Tome of Restorative Cleansing (Greater)",
      "itemType": "equipment",
      "level": 14,
      "rarity": "common",
      "traits": [
        "grimoire",
        "magical"
      ],
      "description": "This book is dark blue on the night of the new moon, gradually shifting to bright red as the moon waxes.\nActivate F (concentrate, healing, vitality)\nFrequency once per day\nRequirements Your last action was to cast a spell prepared from this grimoire, and the spell removed a harmful condition or affliction from yourself or an ally\nEffect Choose one creature whose condition was removed by the required spell. Depending on the version, that creature gains 3d8 temporary Hit Points that last for 1 hour.\nEffect: Tome of Restorative Cleansing",
      "bulk": 0.1,
      "price": {
        "gp": 3750
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-mercy-6th-rank",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "MjiZtQW7QBLFbq7W",
      "slug": "wand-of-mercy-6th-rank",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:8c73908a3e66136df26a5defd239fb947c556ba1734c2c19f2710a3cab71a44f",
    "translatableHash": "sha256:035f2b3f4d82f9ce6eb4ce66c8bc193dad545a53bb41efe26b773ac39cb36e34",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Mercy (6th-rank)",
      "itemType": "equipment",
      "level": 14,
      "rarity": "common",
      "traits": [
        "magical",
        "wand"
      ],
      "description": "The pommel of this rose quartz wand resembles the stylized wings of an angel. When you cast its spell and choose not to make it nonlethal, the crystal deepens to blood red. The color reverts to rose when you cast the spell from the wand nonlethally.\nActivate Cast a Spell; the activation takes 2 if the spell normally takes 1 to cast, or 3 if the spell normally takes 2\nFrequency once per day, plus overcharge\nEffect You Cast the Spell, and can choose to give it the nonlethal trait.\nCraft Requirements Supply a casting of a spell of the appropriate rank. The spell must have a casting time of 1 or 2, it must deal damage, and it can't have the death, void, or nonlethal traits.",
      "bulk": 0.1,
      "price": {
        "gp": 3600
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:grinning-pugwampi",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "mJSCOIJllj2GtACC",
      "slug": "grinning-pugwampi",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/talismans/grinning-pugwampi.webp"
    },
    "sourceHash": "sha256:e021a49e6d3a0f1095ede124a0d4f3d7eb68305b8f3cc4b943da475ac176aaba",
    "translatableHash": "sha256:d9c49feb52bb7c4082cdb00d343a92474779937e9c4ccdd299cd4ff0126339bb",
    "data": {
      "schemaVersion": 1,
      "name": "Grinning Pugwampi",
      "itemType": "consumable",
      "level": 14,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical",
        "misfortune",
        "talisman"
      ],
      "description": "Activate F (concentrate)\nTrigger You damage an Off-Guard creature with the affixed weapon\nThis bone statuette of a sneering gremlin crumbles to dust when activated, imparting a fraction of its subject's infamous misfortune unto those you strike. The damaged creature must attempt a check (will, dc:33) save.\nCritical Success The creature is unaffected.\nSuccess The creature must roll twice and take the worse result on the next check it attempts.\nFailure The creature must roll twice and take the worse result on all checks until the end of its next turn.",
      "bulk": 0,
      "price": {
        "gp": 700
      },
      "usage": "affixed-to-weapon",
      "category": "talisman",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:stargazer",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "mkFrHOwWJaHF0aGp",
      "slug": "stargazer",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/worn-items/other-worn-items/detector-stone.webp"
    },
    "sourceHash": "sha256:accfdaa5e23aafd6ea2617e28ab32dce85dfb53421857f828e7bd94dad072913",
    "translatableHash": "sha256:7794ebea70acd982cf34a196dbff525fd227255de94d477a52fa1d5392129dfd",
    "data": {
      "schemaVersion": 1,
      "name": "Stargazer",
      "itemType": "weapon",
      "level": 14,
      "rarity": "uncommon",
      "traits": [
        "invested",
        "magical",
        "scrying",
        "thrown-10"
      ],
      "description": "When you invest this clear quartz crystal ball, it orbits your head like an aeon stone. As long as you have the stargazer invested, you can use an Interact action to direct it to orbit one of your hands where you can telekinetically smash the orb into foes, wielding it as a +2 greater striking returning club. While you're directing the stargazer, your hand is full, and you can send it back to your head with another Interact action. On a critical hit, the stargazer pulses with hypnotic starlight, Dazzling the struck creature for 1 round. A stargazer doesn't add critical specialization effects.",
      "bulk": 1,
      "price": {
        "gp": 6500
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
    "contentId": "pf2e:item:equipment-srd:life-shot-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "MpuFL2midIke1Sbn",
      "slug": "life-shot-greater",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/ammunition/life-shot.webp"
    },
    "sourceHash": "sha256:b21efee77a95a15bedb28a5bca3c97203b180df7ed115a273f29407b2b79bf8a",
    "translatableHash": "sha256:acf43e24cd83a42e171d1b713784c730436c3cb5e2d0f385bfece4bb722d8a69",
    "data": {
      "schemaVersion": 1,
      "name": "Life Shot (Greater)",
      "itemType": "ammunition",
      "level": 14,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "healing"
      ],
      "description": "Ammunition round\nActivate 1 (manipulate)\nLife shot is a special cartridge that carries a small dose of elixir of life. A creature hit by activated life shot takes no damage from the successful attack, instead receiving 7d4+10 healing healing and gaining a +2 item bonus to saving throws against diseases and poisons for 1 minute. On a critical hit, roll the healing received twice and take the better result (this is a fortune effect). A target willing to be hit by this attack is Off-Guard against it.\nEffect: Life Shot",
      "bulk": 0,
      "price": {
        "gp": 750
      },
      "usage": "",
      "category": "ammo",
      "group": "ammo"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:reflected-moonlight-fulu",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "mWOxG8asXbjCRVG9",
      "slug": "reflected-moonlight-fulu",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/fulus/fulu-fancy.webp"
    },
    "sourceHash": "sha256:c21fd6fa80297db30eabd83d8b2cc52aff62597dbdd73ebd9f734260718b4d0d",
    "translatableHash": "sha256:183a2166b19eced0bcc28b32aa37e09af212708874e0ea487d513bc39f007bfb",
    "data": {
      "schemaVersion": 1,
      "name": "Reflected Moonlight Fulu",
      "itemType": "consumable",
      "level": 14,
      "rarity": "common",
      "traits": [
        "consumable",
        "fortune",
        "fulu",
        "magical",
        "talisman"
      ],
      "description": "Activate r (concentrate)\nTrigger You fail to save against a death or void effect.\nAn acolyte accidentally left fulu paper outdoors overnight during a divine ceremony to Tsukiyo conducted only during a supermoon, creating the first reflected moonlight fulu. When you Activate this fulu, you reroll your saving throw against the triggering effect and take the better result. If this new roll is a critical success, the effect is reflected on its creator, who's treated as the effect's target, with any void damage converted to vitality damage. A reflected effect or spell affects only the original creator, even if it was an area spell or one that affects more than one creature.",
      "bulk": 0,
      "price": {
        "gp": 750
      },
      "usage": "affixed-to-armor",
      "category": "fulu",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:affliction-suppressant-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "njXFDv63y1w0qvz0",
      "slug": "affliction-suppressant-major",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:a8eb7116ed232e2e96276ed6817d4acb9df113cd13d6bb3667707fb54e097af1",
    "translatableHash": "sha256:bca995ffbbf4baee228c275e4d31f99c8fe0ae64c6e4fc8ceb9469e074c94f22",
    "data": {
      "schemaVersion": 1,
      "name": "Affliction Suppressant (Major)",
      "itemType": "consumable",
      "level": 14,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "elixir",
        "healing"
      ],
      "description": "Activate 1 (manipulate)\nFirst created using the same principles as the antiplague and antivenom elixirs, an affliction suppressant is a broadly useful medicine, but sacrifices potency. It applies to a wide variety of afflictions, but lasts a much shorter time. Upon drinking an affliction suppressant, you gain a +4 item bonus to all saves against afflictions for 10 minutes.\nUnlike with an antiplague, this suppressant isn't long-lasting enough to apply to a daily save against the progression of a disease, curse, or other long-lasting affliction. It can still help protect you from catching such an affliction when you're initially exposed to it, as well as on saves that occur after stages that last 10 minutes or less.\nWhen you drink the affliction suppressant, you can attempt a save against one affliction of 14th level or lower affecting you. If you succeed, the affliction is suppressed for 10 minutes. The affliction's duration doesn't elapse during this time, but its symptoms are suppressed.",
      "bulk": 0.1,
      "price": {
        "gp": 675
      },
      "usage": "held-in-one-hand",
      "category": "elixir",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:soaring-wings-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "oCwTZg3JuwLSA7Yj",
      "slug": "soaring-wings-greater",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:c87292c81424e651b7454d137699e96500b5bcd05f9bc09bf8925169e91f3d4f",
    "translatableHash": "sha256:8122ec3e07269960a8aa1aa23407f00132b0f6dda4bd77e8f956b906f811a4ee",
    "data": {
      "schemaVersion": 1,
      "name": "Soaring Wings (Greater)",
      "itemType": "equipment",
      "level": 14,
      "rarity": "common",
      "traits": [
        "invested",
        "magical",
        "tattoo"
      ],
      "description": "Wings, normally tattooed on the upper back, enable you to fly when activated. The visual manifestation is typically a slight glow or ripple in the ink, but some artists make it so the tattoo creates a glowing aura or lines of light in the shape of wings.\nActivate 2 (concentrate)\nFrequency once per hour\nEffect For 10 minutes, you gain a fly Speed equal to either your land Speed or 20 feet, whichever is greater.\nEffect: Soaring Wings",
      "bulk": 0,
      "price": {
        "gp": 3800
      },
      "usage": "tattooed-on-the-body",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:tattletale-orb-clear-quartz",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "OMoKdkWjmT59LCJo",
      "slug": "tattletale-orb-clear-quartz",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/held-items/crystal-ball-clear-quartz.webp"
    },
    "sourceHash": "sha256:8eabdf70fb328d067fd38a564772c89d6ceb5ff95be490ddb8e1b011f4b37cba",
    "translatableHash": "sha256:80391c5edfe1c6bf11c073debad0b51eeb89c2a329840fda2d9fec9becb54a0f",
    "data": {
      "schemaVersion": 1,
      "name": "Tattletale Orb (Clear Quartz)",
      "itemType": "equipment",
      "level": 14,
      "rarity": "rare",
      "traits": [
        "cursed",
        "magical",
        "scrying"
      ],
      "description": "A tattletale orb is a polished crystal sphere that appears to function as a Crystal Ball (Clear Quartz). If those whom you use the orb to scry on roll better than a critical failure on their saving throw, they receive a telepathic message alerting them to the scrying. A success or better at the save allows the target to choose to allow you to scry anyway, knowing they can use an aspect of the orb against you, according to the orb's type. A creature that rolls a critical success on the saving throw also learns your name and location. Once you Activate a tattletale orb or use it to cast one of your scrying spells, it fuses to you. You must succeed at a Will save, using the scrying Will DC of a crystal ball of the orb's type, to use another such device.\nTattletale orbs come in the same types as crystal balls, with the same activations and powers. However, your target must roll a critical failure on the saving throw for the orb to function as normal for that type of crystal ball.",
      "bulk": 0.1,
      "price": {
        "gp": 3800
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-dazzling-rays-6th-rank",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "OzChAzd0UR37bEOR",
      "slug": "wand-of-dazzling-rays-6th-rank",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:019c972da1a2c0017d8a1f612491ac57571386240e8c56272181a37a0f423448",
    "translatableHash": "sha256:2239e98f8c1474a6deecd15d2a95117f373b92a33d3f7b4a2e8e0348754d1e47",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Dazzling Rays (6th-rank)",
      "itemType": "consumable",
      "level": 14,
      "rarity": "common",
      "traits": [
        "fire",
        "holy",
        "light",
        "magical",
        "wand"
      ],
      "description": "Solidified radiance comprises this slender, featureless wand. It sheds bright light in a 20-foot radius and dim light for the next 20 feet. After you Activate the wand, the light fades, so it only sheds dim light in a 20-foot radius. The wand returns to its original brightness each dawn.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast 6th-rank Holy Light, dazzling your target with the beam's intensity. A creature that takes damage from the spell is Blinded for 1 round and Dazzled for a number of rounds equal to the spell rank. On a critical success on the attack roll, the target is also blinded for as long as it's dazzled from the spell. However, it can attempt a check (fortitude) saving throw against your spell DC at the end of each of its turns, ending the blinded condition on a success (but remaining dazzled).\nCraft Requirements Supply a casting of holy light of the appropriate rank.",
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
    "contentId": "pf2e:item:equipment-srd:ruby-capacitor-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "P3EL4ntkd5InC3YB",
      "slug": "ruby-capacitor-greater",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:64301059aa1f561e8c4879e99ce54c7a6ff8724e1ba6470b274e23b73051b1ee",
    "translatableHash": "sha256:a1dffa11c1ba8b2485002ac42d899a36fd9cb82b1e834caf662c492f7ef0ce26",
    "data": {
      "schemaVersion": 1,
      "name": "Ruby Capacitor (Greater)",
      "itemType": "consumable",
      "level": 14,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "talisman"
      ],
      "description": "Activate f (manipulate)\nRequirements You prepared the staff.\nThis cluster of unworked ruby is bound to the top of a staff by silver wire. When activated, it adds three temporary charges to the staff. Any spells cast from the staff before the end of the turn expend these charges first. Any unused temporary charges are lost at the end of your turn.",
      "bulk": 0,
      "price": {
        "gp": 800
      },
      "usage": "affixed-to-a-magical-staff",
      "category": "talisman",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:thousand-pains-fulu-icicle",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Pb0WOuCR34FYGmuy",
      "slug": "thousand-pains-fulu-icicle",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/fulus/fulu-fancy.webp"
    },
    "sourceHash": "sha256:161075ec2388a2c2535a29dc54827b45cbfd4cd7e025828953695918479d3098",
    "translatableHash": "sha256:e85a4aab122e92a4d38615c1b5ee4b36aaa053667a141560fded082fccd1a5fc",
    "data": {
      "schemaVersion": 1,
      "name": "Thousand-Pains Fulu (Icicle)",
      "itemType": "consumable",
      "level": 14,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "fulu",
        "magical"
      ],
      "description": "Duration 1 minute\nCreated by a chirurgeon who threw away morality in search of endless life, a thousand-pains fulu blocks the natural flow of elements in the body. A creature to which the fulu is affixed must attempt a check (fortitude, dc:30, basic, traits:cold). Failure or critical failure primes the target for persistent damage triggered by a specific condition that must be met within the fulu's duration.\nLooking at this black fulu leaves you queasy and cold. The fulu deals 10d6 cold damage as the target's qi warps and drains. On a failure or critical failure, if the target takes damage from a poison or disease effect or becomes sickened, it takes 2d6 persistent cold damage. These effects have the cold trait.",
      "bulk": 0,
      "price": {
        "gp": 630
      },
      "usage": "affixed-to-a-creature",
      "category": "fulu",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-reaching-6th-rank",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "pCr0zPdJoXZW3I6y",
      "slug": "wand-of-reaching-6th-rank",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:02388c83df1769fc508f9c59e62dcfc36c00e023146b737d77cd52cac6e5117e",
    "translatableHash": "sha256:d2c4f882cb46b7ab39f3864e370f4bd31687586374d894f887e77ab1440121bf",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Reaching (6th-Rank)",
      "itemType": "equipment",
      "level": 14,
      "rarity": "common",
      "traits": [
        "magical",
        "wand"
      ],
      "description": "This long, slender wand is constructed of silver, polished to a mirror shine.\nActivate Cast a Spell; This activation takes 2 if the spell normally takes 1 to cast, or 3 if the spell normally takes 2\nFrequency once per day, plus overcharge\nEffect You Cast the Spell. Its range increases by 30 feet. As normal for increasing ranges, if the spell normally has a range of touch, its range extends to 30 feet.\nCraft Requirements Supply a casting of a spell of the appropriate rank. The spell must have a casting time of 1 or 2, and must have a range.",
      "bulk": 0.1,
      "price": {
        "gp": 4500
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:unending-itch",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "px55EOmlMx8xtEgM",
      "slug": "unending-itch",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/consumable.svg"
    },
    "sourceHash": "sha256:6cf916dbf6250607f621e053206cf24602f8302fd0ae3939edb9692ca2e032db",
    "translatableHash": "sha256:f6ddd155378c3f0d4d1c481869fdc4e5814c48de05684e562bf37b0df3210620",
    "data": {
      "schemaVersion": 1,
      "name": "Unending Itch",
      "itemType": "consumable",
      "level": 14,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "injury",
        "poison",
        "virulent"
      ],
      "description": "Activate 2 (manipulate)\nInvented to cause a lengthy and unpleasant demise, this poison manifests as an itch that can't be soothed. The victim experiences the poison damage as irritation rather than pain or sickness and must succeed at a check (perception, dc:34) check to realize they're poisoned. The poison can also be identified with a check (medicine, dc:34) check. Once the victim has lost half or more of its Hit Points, the DC drops to 30 for either check. As long as the victim doesn't realize it's poisoned, the GM makes its saving throws in secret.\nSaving Throw check (fortitude, dc:34, traits:secret) (secret)\nMaximum Duration 5 minutes\nStages 1–5 1d6 poison damage (1 round)",
      "bulk": 0.1,
      "price": {
        "gp": 700
      },
      "usage": "held-in-two-hands",
      "category": "poison",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-pernicious-poison-6th-rank",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "QC4TXwjteVhwRSNO",
      "slug": "wand-of-pernicious-poison-6th-rank",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:f34bf2aaa852e8984cb2ff24ea560dd0b41fe32d2ab9aa13603310242b4a059c",
    "translatableHash": "sha256:518365eb164e520b84512b9031d216aaece93ded3b143e9b0f288c405aef06cb",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Pernicious Poison (6th-Rank)",
      "itemType": "consumable",
      "level": 14,
      "rarity": "common",
      "traits": [
        "magical",
        "poison",
        "wand"
      ],
      "description": "This wand is made of chitin, topped with a hooked barb that weeps droplets of foul-smelling, green fluid when you Activate the wand.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast a 6th-rank Spider Sting, but it deals 3d6 untyped damage on a touch or on a successful save, and delivers this poison.\nDeadly Spider Venom (poison, virulent) Level 11\nMaximum Duration 6 rounds\nStage 1 3d6 poison damage and Enfeebled 2 (1 round)\nStage 2 4d6 poison damage and enfeebled 2 (1 round)\nStage 3 6d6 poison damage and enfeebled 2 (1 round)\nCraft Requirements Supply a casting of spider sting at 6th-rank.",
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
    "contentId": "pf2e:item:equipment-srd:emetic-paste-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Qcla3yTa1MzcpMjb",
      "slug": "emetic-paste-greater",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:05522c05c31d084a3cca4b02d3d2777d4c5e035369602454f2fab6b564db8154",
    "translatableHash": "sha256:ca5ca31611a6c473dc478e0fd428dd1887b52952094a8b5409982d610b47ac56",
    "data": {
      "schemaVersion": 1,
      "name": "Emetic Paste (Greater)",
      "itemType": "consumable",
      "level": 14,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "healing"
      ],
      "description": "Activate 1 (manipulate)\nSickened creatures have difficulty swallowing, so you can Activate emetic paste by applying it to your skin or that of a sickened creature within reach, typically on the throat. The paste makes it easy for the sickened creature to purge, granting it an immediate Fortitude save to reduce its sickened condition. The paste grants the target a +4 item bonus to that save and to all saving throws to reduce the sickened condition for 1 hour.",
      "bulk": 0.1,
      "price": {
        "gp": 700
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:guardian-staff-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "REvrniIEqBykkWyI",
      "slug": "guardian-staff-major",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:648038656b2396ee8061005d22d51f3be9cea4fb1ed7009faebd0b3d3f3a9b81",
    "translatableHash": "sha256:375959da31f1b8232a7484b93408244ade6b5d79e0a20f1822e4a310c23a9d1a",
    "data": {
      "schemaVersion": 1,
      "name": "Guardian Staff (Major)",
      "itemType": "weapon",
      "level": 14,
      "rarity": "common",
      "traits": [
        "magical",
        "staff",
        "two-hand-d8"
      ],
      "description": "A guardian staff is formed from ivory strands woven in a diamond pattern and capped with a glowing ruby. Those charged with protecting others value this staff's spells.\nActivate 1 (concentrate)\nEffect You raise the staff and choose an ally within 10 feet. A ruby-colored plane of force appears like a shield near the ally, granting them a +1 circumstance bonus to AC until the start of your next turn. If you use this action again, any creature you previously granted this bonus to loses it.\nEffect: Guardian Staff\nActivate Cast a Spell\nEffect You expend a number of charges from the staff to cast a spell from its list.\n• Cantrip Forbidding Ward\n• 1st Sanctuary, Spirit Link\n• 2nd Share Life, Spirit Link\n• 3rd Life Connection, Spirit Link\n• 4th Spirit Link, Unfettered Movement\n• 5th Blessing of Defiance, Death Ward, Spirit Link\n• 6th Repulsion, Scintillating Safeguard, Spirit Link, Unfettered Movement\nCraft Requirements Supply one casting of all listed ranks of all listed spells.",
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
    "contentId": "pf2e:item:equipment-srd:nevercold-compressed",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "smPuKlJLRyoYaDpR",
      "slug": "nevercold-compressed",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/consumable.svg"
    },
    "sourceHash": "sha256:f01ee7f2f45a21eba7eec8e41a5efc017e9abdfc9ca94326bcb09161607b9389",
    "translatableHash": "sha256:44f355586e1c76cdae493d038a42536e958109387c0292f3cf9cc2adaa6b0e0b",
    "data": {
      "schemaVersion": 1,
      "name": "Nevercold (Compressed)",
      "itemType": "consumable",
      "level": 14,
      "rarity": "common",
      "traits": [
        "catalyst",
        "consumable",
        "magical"
      ],
      "description": "Activate Cast a Spell\nNevercold, sometimes mistakenly referred to as nevercoal, is the charcoal left after wildfires in the First World. True to its name, nevercold remains warm to the touch. If you use nevercold to cast Fire Shield, the spell's duration increases to 5 minutes, the cold resistance you gain from it lasts 1 hour, and you're immune to minor and severe cold for 8 hours.\nThe catalyst affects 6th-rank or lower fire shield, and the immunity from minor and severe cold lasts 24 hours.",
      "bulk": 0.1,
      "price": {
        "gp": 720
      },
      "usage": "held-in-one-hand",
      "category": "catalyst",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:dragonprism-staff",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "tEI1WOo4ZRJ5cI0K",
      "slug": "dragonprism-staff",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:89569e88fad66275481270afdc31114c06dd0d20061e09df3eb893d1eb263bc0",
    "translatableHash": "sha256:c9146a6fc633f0708a14344356a3b72c12e0cc8acf27b91928cdd4ab9cfbc361",
    "data": {
      "schemaVersion": 1,
      "name": "Dragonprism Staff",
      "itemType": "weapon",
      "level": 14,
      "rarity": "common",
      "traits": [
        "magical",
        "staff",
        "two-hand-d8"
      ],
      "description": "A multi-hued array of scales covers a dragonprism staff, forming a gradient of color, and a dragon's claw holds a gem upon the staff's head. Dragons give allies these staves as a mark of esteem. While wielding a dragonprism staff you seem fiercer, gaining a +1 circumstance bonus to Intimidation checks to Demoralize.\nActivate Cast a Spell\nEffect You expend a number of charges from the staff to cast a spell from its list.\n• Cantrip Gouging Claw, Puff of Poison\n• 1st Breathe Fire, Fear\n• 2nd Acid Grip, Resist Energy\n• 3rd Fear, Lightning Bolt\n• 4th Fly, Reflective Scales\n• 5th Howling Blizzard, Summon Dragon\n• 6th Dragon Form, Reflective Scales, Summon Dragon\nCraft Requirements Supply one casting of all listed ranks of all listed spells.",
      "bulk": 1,
      "price": {
        "gp": 4500
      },
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
    "contentId": "pf2e:item:equipment-srd:wand-of-hybrid-form-6th-rank",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "tFhNIL308HpiDFtS",
      "slug": "wand-of-hybrid-form-6th-rank",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:53e1423895819620a84227e9ed470f44cf6c2e9bc56a2119e7dfd77c70794dc9",
    "translatableHash": "sha256:10ad6380ccd5ff751dbf8f6d49d4dc3414578f2f091661c4b8ae730dcdeae483",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Hybrid Form (6th-rank)",
      "itemType": "equipment",
      "level": 14,
      "rarity": "uncommon",
      "traits": [
        "magical",
        "polymorph",
        "wand"
      ],
      "description": "The grain of this simple wooden wand forms shifting images of sharp claws, snapping jaws, and countless creatures.\nActivate Cast a Spell; This activation takes 2 if the spell normally takes 1 to cast, or 3 if the spell normally takes 2\nFrequency once per day, plus overcharge\nEffect You Cast the Spell, selecting two forms from among those you can normally choose. You gain the benefits of both forms. For example, if one form can breathe air and the other can breathe underwater, you can breathe in both situations. If there's overlap in abilities, you gain the better one. For instance, if both have a fly Speed, you get the higher one, and if both forms have claws, you gain only the claw Strike you prefer. The GM determines which abilities overlap and which are cumulative.\nCraft Requirements Supply a casting of a spell of the appropriate rank. The spell must have a casting time of 1 or 2, must have the polymorph trait, and must allow more than one choice of battle form.",
      "bulk": 0.1,
      "price": {
        "gp": 3750
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-mental-purification-6th-rank",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "tI2bx8U4Ibwq25ya",
      "slug": "wand-of-mental-purification-6th-rank",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/held-items/wand-of-mental-purification.webp"
    },
    "sourceHash": "sha256:68e079d54f3435912ef70863d58532f420c3487eac056cdd94f1f9bd7d0d7ebe",
    "translatableHash": "sha256:3fc5c3af16450a4f01c0f1575b505c37a708c42114a3f06374779351128a3dfa",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Mental Purification (6th-rank)",
      "itemType": "consumable",
      "level": 14,
      "rarity": "common",
      "traits": [
        "emotion",
        "healing",
        "magical",
        "mental",
        "wand"
      ],
      "description": "Red feathers hang from the handle of this ivory wand. Holding it brings a sense of gentle calm.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast 6th-rank Soothe, and can attempt to counteract one mental effect on the same target. Treat the Soothe spell's rank as 1 higher for this counteract check.\nCraft Requirements Supply a casting of soothe of the appropriate rank.",
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
    "contentId": "pf2e:item:equipment-srd:blessed-reformer",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "UFAIquTmQcgqSl7s",
      "slug": "blessed-reformer",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/warhammer.webp"
    },
    "sourceHash": "sha256:06b8b268582dd50906dbc389d9b04b7fd2305110abb898a89ea676546a270e33",
    "translatableHash": "sha256:cc143acefa03affc8466c2e795a66779f9b1cf0b9d81101d3012040d72d62953",
    "data": {
      "schemaVersion": 1,
      "name": "Blessed Reformer",
      "itemType": "weapon",
      "level": 14,
      "rarity": "uncommon",
      "traits": [
        "divine",
        "holy",
        "shove"
      ],
      "description": "The Empyreal word for \"repent\" is etched in golden lettering on the shaft of this +2 greater striking merciful dawnsilver warhammer. If you are unholy, you are Enfeebled 2 while carrying or wielding this weapon.\nActivate 2 (concentrate, manipulate)\nFrequency once per hour\nEffect You hold your weapon aloft, calling on righteousness to steel your resolve. You cast protection targeting yourself.\nRedeemer Wielder If you're a champion with the redemption cause, you also gain the following two benefits.\n• When you critically hit an unholy creature with the blessed reformer, until the end of your next turn, the creature takes a –10-foot penalty to its Speeds and can't Step.\n• You can Activate the weapon in the following way.\nActivate 1 (concentrate, manipulate)\nFrequency once per day\nRequirements You hit a creature using the blessed reformer as your last action\nEffect You cast Calm at the same rank as your champion focus spells. It must target the creature you hit, and the creature takes a status penalty on its save against the spell equal to the blessed reformer's number of weapon damage dice.\nCraft Requirements You're a champion with the redemption cause. The initial materials must include 140 gp of dawnsilver.",
      "bulk": 1,
      "price": {
        "gp": 4500
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "hammer",
      "damage": {
        "dice": 1,
        "die": "d8",
        "type": "bludgeoning"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-hawthorn-6th-rank",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "uo6fVL0r0S1vM61n",
      "slug": "wand-of-hawthorn-6th-rank",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:30b44bce156cc53c14421edae368163e1168d3ace2182d8e0cfe585366f4d2c6",
    "translatableHash": "sha256:a0f562c1d3d64fd0a046350ec60f3f834b13529a829ecc95aa908b3ed17cdfac",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Hawthorn (6th-rank)",
      "itemType": "consumable",
      "level": 14,
      "rarity": "common",
      "traits": [
        "magical",
        "plant",
        "wand"
      ],
      "description": "Carved from a hawthorn branch, this wand has a smooth handle, but the shaft remains covered in bark and long thorns. Polished red stones, arranged like a cluster of berries, decorate the pommel.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast 6th-rank Oaken Resilience, and the target sprouts long thorns like those of a hawthorn tree. While Oaken Resilience lasts, any creature that hits the target with an unarmed Strike or otherwise touches it takes 3d4 piercing damage from the thorns. A creature that has engulfed or swallowed the target takes this damage as well at the start of each of the target's turns.\nCraft Requirements Supply a casting of oaken resilience of the appropriate rank.",
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
    "contentId": "pf2e:item:equipment-srd:fraudslayer-oil",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "vAEQsYQbOYmqfIc0",
      "slug": "fraudslayer-oil",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-poisons/liars-demise.webp"
    },
    "sourceHash": "sha256:d60df448193b58fd503b5d6f3eafc07f732bc90b7e6839a4438c6b70f1c6ea49",
    "translatableHash": "sha256:4b4afb9b7a6c6b84e532a98f81a49d6dcba788390b5ccd83b4d3b292a3ba39a0",
    "data": {
      "schemaVersion": 1,
      "name": "Fraudslayer Oil",
      "itemType": "consumable",
      "level": 14,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "consumable",
        "contact",
        "mental",
        "poison"
      ],
      "description": "Activate 3 (manipulate)\nMade from a rare root that reacts to the physical changes that happen when someone is being deceitful, fraudslayer oil is a blunt instrument. It can compel truth, but it carries a fatal price if the victim can't stop themself from repeatedly telling lies. While under the effect of fraudslayer oil, the victim takes the listed poison damage and mental damage for any time they voluntarily and knowingly tell a lie, due to the poison's increased blood pressure to their brain. They take this damage once per round at most, even if they lie several times in rapid succession. The victim is aware of this effect and can choose to not answer or give only evasive, technically truthful, answers.\nSaving Throw check (fortitude, dc:34)\nOnset 1 minute\nMaximum Duration 6 minutes\nStage 1 Stupefied 1, 3d6 poison damage and 3d6 mental damage for lying (1 minute)\nStage 2 Stupefied 2, 4d6 poison damage and 4d6 mental damage for lying (1 minute)\nStage 3 Stupefied 3, 5d6 poison damage and 5d6 mental damage for lying, and the damage becomes a death effect. If it reduces the victim to 0 Hit Points, the victim's head explodes, causing death (1 minute).",
      "bulk": 0.1,
      "price": {
        "gp": 650
      },
      "usage": "held-in-one-hand",
      "category": "poison",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:sanguine-klar-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "vkPNIDJPt2RHpS6T",
      "slug": "sanguine-klar-greater",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:5304d1c1528bcd4890fbe0f220729d06e95b022f263f4c080e557918215a925b",
    "translatableHash": "sha256:c5ebb512804ec816eaea15593c299b74a9204a8cc07b746e4913b9895fdc4ac4",
    "data": {
      "schemaVersion": 1,
      "name": "Sanguine Klar (Greater)",
      "itemType": "shield",
      "level": 14,
      "rarity": "common",
      "traits": [
        "integrated-1d6-s-versatile-p",
        "magical"
      ],
      "description": "This +2 greater striking wounding klar (Hardness 13, HP 100, BT 50) is built with spikes made of beasts' fangs.\nActivate f (concentrate)\nFrequency once per round\nTrigger You or a creature within 30 feet of you suffers bleed damage\nEffect The sanguine klar regains a number of Hit Points equal to the bleed damage, up to an amount equal to its Hardness.",
      "bulk": 1,
      "price": {
        "gp": 3700
      },
      "usage": "",
      "category": "shield",
      "group": "klar"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-dumbfounding-doom-6th-rank",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "W6QXdPS9d0eoBAuw",
      "slug": "wand-of-dumbfounding-doom-6th-rank",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:76595b5910157a79bb361bec849f1c35e57406d8db91c7dff0d63fc7351a4356",
    "translatableHash": "sha256:a408b33c52aae236c7eaaa3d7a584a75f7084759a8f80a548c07c3c5b670b13a",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Dumbfounding Doom (6th-rank)",
      "itemType": "consumable",
      "level": 14,
      "rarity": "common",
      "traits": [
        "emotion",
        "fear",
        "incapacitation",
        "magical",
        "mental",
        "prediction",
        "wand"
      ],
      "description": "Carvings of skulls, monsters, and all manner of violence decorate this wand of blackened bone, but it makes absurd sounds when Activated, such as a honking horn, a manic giggle, or a daydreamy sigh.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast 6th-rank Impending Doom, showing the target a potential death that's gruesome and absurd. If the target becomes Frightened by the spell, it also becomes Stupefied with a value 1 higher than the frightened value. This lasts for the duration of the spell.\nCraft Requirements Supply a casting of impending doom of the appropriate rank.",
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
    "contentId": "pf2e:item:equipment-srd:fortunes-coin-platinum",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "X0pjLMXjW8RGr8pg",
      "slug": "fortunes-coin-platinum",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:e04f4b97c6dac04c500d6266cc0ee918713287985ca0c2a141f8fdecb5ad56ba",
    "translatableHash": "sha256:a6da0778dfbe2b9bd5068a19e426ac513c09f2571eec956c68def1953a8aaa2d",
    "data": {
      "schemaVersion": 1,
      "name": "Fortune's Coin (Platinum)",
      "itemType": "equipment",
      "level": 14,
      "rarity": "common",
      "traits": [
        "fortune",
        "magical"
      ],
      "description": "This coin is struck with the image of a beatific seraph in platinum on one side and a fearsome fiend with seven eyes enameled in black on the other. While it may seem nothing more than a curiosity, it's a powerful agent of fortune when activated.\nActivate R (manipulate)\nTrigger You fail a check or attack\nEffect Flip the 1dc. If it lands on the seraph side, you get a 14 on the die instead of what you rolled. If it lands on the fiend side, one of the eyes on the fiend closes. Either way, you're temporarily immune to fortune's coin for 1 hour. When all seven eyes are closed, the coin vanishes into a puff of smoke, disappearing forever. This activation is a fortune effect, regardless of how the coin flip lands.",
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
    "contentId": "pf2e:item:equipment-srd:wand-of-rolling-flames-6th-rank",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "z5NBeuQezm3ABup2",
      "slug": "wand-of-rolling-flames-6th-rank",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:1ab96199f361f7c48896b8dbc6ba65ac33e6570943c7a7ad8eff3ea8e5cd7f04",
    "translatableHash": "sha256:1dad559099ce7b51e0d3d21ffc52a94e5389438e787770e33539c48b49472933",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Rolling Flames (6th-Rank)",
      "itemType": "consumable",
      "level": 14,
      "rarity": "common",
      "traits": [
        "fire",
        "magical",
        "wand"
      ],
      "description": "The luminous design of red-orange cracks on this black obsidian wand suggests cooling lava.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast 6th-rank Floating Flame. If you create the flame on the ground, the ground in the sphere's square and all adjacent squares are coated in rolling flames until the start of your next turn. These are difficult terrain and hazardous terrain. A creature that moves on the ground takes 5 fire damage for every square of rolling flames it moves into. If a creature in the flames doesn't move on its turn, it takes the damage for each of the squares it's in at the end of its turn. The first time you Sustain the Spell each round, the sphere creates rolling flames again in its new location (or the same location if you chose not to move it), provided it's on the ground.\nCraft Requirements Supply a casting of floating flame of the appropriate rank.",
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
    "contentId": "pf2e:item:equipment-srd:sanguine-fang-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "0AxBSojJ2XhcqMvJ",
      "slug": "sanguine-fang-major",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:084dabafe217e0ba30651cfc366511436f601c7b6c703bb61745faa5879109db",
    "translatableHash": "sha256:1b5ffdadd6e3916e31b97db8b5fbbbfe5e09da7efa154e5f906a1cf0877b0d16",
    "data": {
      "schemaVersion": 1,
      "name": "Sanguine Fang (Major)",
      "itemType": "equipment",
      "level": 15,
      "rarity": "common",
      "traits": [
        "magical",
        "spellheart",
        "void"
      ],
      "description": "A pointed vampire fang hovers within this smoked-glass vial, its tip crimson with slowly dripping blood. The spell DC of any spell cast by activating this item is 34.\n• Armor You gain resistance 10 to persistent bleed damage and a +3 item bonus on saving throws against effects with the void trait.\n• Weapon After you cast a spell by activating the fang, your Strikes with the weapon deal 2d6 persistent bleed damage until the end of your next turn.\nEffect: Sanguine Fang - Armor\nEffect: Sanguine Fang - Weapon\nActivate Cast a Spell\nEffect You cast Void Warp.\nActivate Cast a Spell\nFrequency once per day\nEffect You cast 5th-rank Vampiric Feast.\nActivate Cast a Spell\nFrequency once per day\nEffect You cast Vampiric Exsanguination.",
      "bulk": 0,
      "price": {
        "gp": 5750
      },
      "usage": "affixed-to-armor-or-a-weapon",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:saurian-spike-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "0Tu55QMhTXAijFvl",
      "slug": "saurian-spike-major",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:a3a2b2df2a59788e90fe8f1cc3da18987fef0dea9e325c8ecbba3a0e2296109c",
    "translatableHash": "sha256:4cb25da274e8c474873b037dfe44ef24a4547b7d32d9176197c20507fa24b947",
    "data": {
      "schemaVersion": 1,
      "name": "Saurian Spike (Major)",
      "itemType": "equipment",
      "level": 15,
      "rarity": "common",
      "traits": [
        "magical",
        "spellheart"
      ],
      "description": "This jagged, bony growth narrows to a sharp, pointed tip. Deep groves from some former battle scar its surface. The bearer of a saurian spike often feels a sudden surge in power and confidence. The spell attack modifier of any spell cast by activating this item is +24.\n• Armor You gain precise scent with a range of 60 feet.\n• Weapon (auditory, emotion, fear, visual) When you cast a polymorph spell by activating the spike, your battle form is exceptionally fearsome. Each enemy in a 60-foot emanation must succeed at a check (will, dc:34, traits:auditory,emotion,fear,visual) saving throw or become Frightened 2 (Frightened 3 on a critical failure).\nEffect: Saurian Spike - Armor\nActivate Cast a Spell\nEffect You cast Gouging Claw.\nActivate Cast a Spell\nFrequency once per day\nEffect You cast 7th-rank Dinosaur Form.",
      "bulk": 0,
      "price": {
        "gp": 6500
      },
      "usage": "affixed-to-armor-or-a-weapon",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:serpent-oil-true",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "1DmcPUZERWeKpiMM",
      "slug": "serpent-oil-true",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/consumable.svg"
    },
    "sourceHash": "sha256:e0df521df47c23ef8cc3087ebdd6995ece5e9f6d68bedc8c64984166fb7eca45",
    "translatableHash": "sha256:2bdd6d9a5f99083674ccc0c0d8841acd7855ec4de298c5dbfbace71c27746294",
    "data": {
      "schemaVersion": 1,
      "name": "Serpent Oil (True)",
      "itemType": "consumable",
      "level": 15,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "oil"
      ],
      "description": "Activate 1 (manipulate)\nThis glistening oil has a green hue and tiny snake scales floating within. If you slather serpent oil on a Huge object that is snakelike in shape, from a stick to a scarf, the object transforms into a Giant Anaconda, keeping some of the same colors and patterns of the original item. If placed on other objects, the oil fails and is wasted. This false snake has the minion trait. It remains in snake form for 1 minute before returning to its object state. If slain, the item returns to its original form, unharmed.",
      "bulk": 0.1,
      "price": {
        "gp": 1100
      },
      "usage": "held-in-two-hands",
      "category": "oil",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:troll-hide",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "1X0E707FWf9jJgPK",
      "slug": "troll-hide",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:e5181bb0de627c0c6d48c498446e4be9fabb2c36aa42a6c88f47d8c8626210e2",
    "translatableHash": "sha256:2d79d099ad4607efd9fd3310918893380130e9931c36ec78eb35db5c4c8b937d",
    "data": {
      "schemaVersion": 1,
      "name": "Troll Hide",
      "itemType": "armor",
      "level": 15,
      "rarity": "common",
      "traits": [
        "alchemical",
        "healing"
      ],
      "description": "Tissue from a living forest troll has been integrated through this hide armor. This armor has two organic receptacles on its back that can each hold a single Elixir of Life. One elixir takes 3 Interact actions to install. For the armor to function properly, each elixir must be the same level.\nActivate 1 (manipulate)\nRequirements Two elixirs of life are installed in the armor\nEffect Regenerating tissue from the armor fills your wounds for 8 rounds. At the start of each of your turns, you regain Hit Points equal to the level of the loaded elixirs. Each time you regain at least 13 Hit Points from the armor, you regrow one damaged or ruined organ. During a round that you regain 9 or more Hit Points from the armor, you can reattach severed body parts by spending an Interact action to hold the body part to the area it was severed from. If you take electricity or fire damage, the armor deactivates until the end of your next turn. (Similar armor from other types of trolls might be deactivated by different damage types.) In the event the armor itself is damaged, it will restore its own Hit Points before it resumes healing you. The activation uses up the elixirs, and the armor can't be activated again until two new ones are installed.",
      "bulk": 2,
      "price": {
        "gp": 6000
      },
      "usage": "",
      "category": "medium",
      "group": "leather",
      "armor": {
        "armorClassBonus": 3,
        "dexterityCap": 2,
        "checkPenalty": -2,
        "speedPenaltyFeet": -5
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-toxic-blades-6th-rank",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "7AdpzgqC9wCVyeoe",
      "slug": "wand-of-toxic-blades-6th-rank",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:154ce3bad8cc6fc16e2ad582940b8cba307f53337cef01b8e4a99b80e45fe6c6",
    "translatableHash": "sha256:f98b2f6ebb32e312b7cfc006bc73e5855e7f54ab0ffb89036b95c8d3f1b22626",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Toxic Blades (6th-Rank)",
      "itemType": "consumable",
      "level": 15,
      "rarity": "common",
      "traits": [
        "force",
        "magical",
        "poison",
        "wand"
      ],
      "description": "This slender metal wand is tinted green and small images of bladed weapons are etched on its surface.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast 6th-rank Blessed Boundary. Damage from the wall also exposes the damaged creature to Cave Worm Venom. The poison uses its normal DC. A creature can be exposed to the poison no more than once per turn.\nCraft Requirements Supply a casting of Blessed Boundary of the appropriate rank.",
      "bulk": 0.1,
      "price": {
        "gp": 6000
      },
      "usage": "held-in-one-hand",
      "category": "wand",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:unfathomable-stargazer",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "7YkaMoB3YfYRZ21G",
      "slug": "unfathomable-stargazer",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:09f562ecb9bdb648f3adf633b4abf89c95ac3c739c36d626f640f0f228ed49b5",
    "translatableHash": "sha256:2534641192e8d9936cbc27c0f373cabcf51239bc28f7d5426600ef7ae3753296",
    "data": {
      "schemaVersion": 1,
      "name": "Unfathomable Stargazer",
      "itemType": "equipment",
      "level": 15,
      "rarity": "rare",
      "traits": [
        "cursed",
        "magical"
      ],
      "description": "An unfathomable stargazer is a handheld brass telescope etched with constellations, the patterns of which form bizarre, shifting runes. You can observe the night sky with an unfathomable stargazer, however, the constellations you glimpse through the telescope distort with expanding and contracting fields of darkness among them. You use Occultism instead of Perception or Astronomy Lore when observing the skies with this item, and gain a +2 item bonus on all checks to do so. Once you use it, it fuses to you, and you must succeed at a check (will, dc:35) save to use another device to observe the stars, including your naked eyes. The telescope imposes a –4 circumstance penalty to Survival checks to Sense Direction or navigate. If you critically fail this Survival check, you're subjected to Warp Mind (check (will, dc:34, traits:spell,emotion,incapacitation,mental,enchantment, overrideTraits:true)) as you glimpse something horrifying and alien amid the darkness.",
      "bulk": 1,
      "price": {},
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:phantasmal-doorknob-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "9BXiGLvOFxDBmQrQ",
      "slug": "phantasmal-doorknob-major",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/other/spellhearts/phantasmal-doorknob.webp"
    },
    "sourceHash": "sha256:cfc06e0cbe66d6f5e28d7ca102602bcee419ca234e5743e54695167b396cd212",
    "translatableHash": "sha256:3615ec6531993369085bcbd431734d8fdd662a9dcd113c901b5a0673820a0d6d",
    "data": {
      "schemaVersion": 1,
      "name": "Phantasmal Doorknob (Major)",
      "itemType": "equipment",
      "level": 15,
      "rarity": "common",
      "traits": [
        "emotion",
        "magical",
        "mental",
        "spellheart"
      ],
      "description": "This ornate doorknob can open doors both material and metaphysical, revealing dreams and nightmares. The spell DC of any spell cast by activating this item is 34.\n• Armor You gain a +2 item bonus to Thievery checks to Pick a Lock.\n• Weapon If you critically succeed at a Strike with the weapon, the target is Blinded until the end of its next turn. The creature is then temporarily immune to being blinded in this way for 24 hours.\nEffect: Phantasmal Doorknob - Armor\nEffect: Phantasmal Doorknob - Weapon\nActivate Cast a Spell\nEffect You cast Figment.\nActivate Cast a Spell\nFrequency once per day\nEffect You cast 6th-rank Vision of Death.\nActivate Cast a Spell\nFrequency once per day\nEffect You cast Phantasmal Calamity",
      "bulk": 0,
      "price": {
        "gp": 6000
      },
      "usage": "affixed-to-armor-or-a-weapon",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:eldritch-flare",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "aOFly4vZu24x85b0",
      "slug": "eldritch-flare",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:4782a76694d00ac8157484684fb6e68949af48fb65b736e385480f6e1fdb83e3",
    "translatableHash": "sha256:70e96145216ec6faa216212c6b2e2e2c4327bf9af94d3d167ae04b211f6697b5",
    "data": {
      "schemaVersion": 1,
      "name": "Eldritch Flare",
      "itemType": "consumable",
      "level": 15,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "injury",
        "poison"
      ],
      "description": "Activate 2 (manipulate)\nThis poison draws power from the magic of its victim. If a creature under the effects of eldritch flare Casts a Spell, excess magical energy feeds back into the toxin, increasing the DC of the poison by 2 that round. In addition, if the spell deals damage, the poison deals half its damage as one of the types of damage the spell deals (the other half remains poison damage). If the target is immune or has resistance to the spell's damage, the poison deals half its damage as mental damage instead. If the victim casts no spells during a round while affected, the poison still deals its poison damage.\nSaving Throw check (fortitude, dc:35)\nMaximum Duration 6 rounds\nStage 1 8d6 untyped damage (1 round)\nStage 2 10d6 untyped damage (1 round)\nStage 3 12d6 untyped damage (1 round)",
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
    "contentId": "pf2e:item:equipment-srd:armory-bracelet-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "bz052lqiBuGmD790",
      "slug": "armory-bracelet-major",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:06abb0656c2266f59cbeddfaf7af6b4587bfde9e8821628351ce107d4ac61e07",
    "translatableHash": "sha256:106bc2660d99a67eec0f96788a8333d87148dd1f52dd0931370fccc18d94a24d",
    "data": {
      "schemaVersion": 1,
      "name": "Armory Bracelet (Major)",
      "itemType": "equipment",
      "level": 15,
      "rarity": "common",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "Several small charms shaped like weapons hang from an armory bracelet, which is often brass. The bracelet has one charm each for the groups axe, bow, brawling, club, crossbow, dart, flail, hammer, knife, pick, polearm, shield, sling, spear, and sword. Uncommon and rare versions of the bracelet might include charms for firearms or create uncommon weapons.\nActivate 2 (concentrate, manipulate)\nFrequency once per day\nEffect You pull one charm from the bracelet. The charm transforms into a common weapon of your choice from the charm's weapon group. If the weapon requires ammunition, it appears with a quiver or pouch with 20 pieces of ammunition for the weapon. The weapon is a +3 greater striking weapon of the type you chose. After 1 minute, the weapon transforms into a +2 greater striking weapon and remains until your next daily preparations. At that point, the weapon and any remaining ammunition crumble to dust and all the charms reappear on the bracelet. The weapon and ammunition created with the charm are noticeably different from others and can't be sold.",
      "bulk": 0,
      "price": {
        "gp": 6000
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:thunderblast-slippers-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "cEXLUGa9qTh8Y6kX",
      "slug": "thunderblast-slippers-greater",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:517b98139038dc94fc81e54fb9eb8a3dff952890f06427e926f572a5c84a658b",
    "translatableHash": "sha256:f0d916076547a4ea060456c6fb7f7d06704aa60218ec36e452eab11b81d289e8",
    "data": {
      "schemaVersion": 1,
      "name": "Thunderblast Slippers (Greater)",
      "itemType": "equipment",
      "level": 15,
      "rarity": "common",
      "traits": [
        "invested",
        "magical",
        "sonic"
      ],
      "description": "Unassuming in appearance, these slippers indicate their nature only with a signature strip of yellow stitching. You gain a +2 item bonus to Acrobatics checks.\nActivate 2 (concentrate, manipulate)\nFrequency once per day\nEffect You move like the wind, with precision and speed. You Stride up to 120 feet; this movement doesn't trigger reactions. When you stop, if you've moved at least 30 feet from where you started, you release a thunderous 5-foot emanation that deals 3d6 bludgeoning damage with a check (fortitude, dc:34, basic, options:area-effect,inflicts:prone). A creature that critically fails its save is also knocked Prone.",
      "bulk": 0,
      "price": {
        "gp": 6500
      },
      "usage": "wornshoes",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-refracting-rays-7th-rank",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "cIYjYb9e5ieQmHo7",
      "slug": "wand-of-refracting-rays-7th-rank",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/held-items/wand-of-refracting-rays.webp"
    },
    "sourceHash": "sha256:045fffca926f7de5581e4217d366f26487c63228a55ee93db76679dcd6ac90ea",
    "translatableHash": "sha256:fed078c5517e74529e41c77ef29e9ae33c14e3e6ebcc5269ba11bd41bd93bee8",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Refracting Rays (7th-Rank)",
      "itemType": "consumable",
      "level": 15,
      "rarity": "uncommon",
      "traits": [
        "light",
        "magical",
        "wand"
      ],
      "description": "This wand is short and wide with a hexagonal, crystal shaft and a leather-wrapped handle. The wand refracts direct bright light into a rainbow.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast 7th-rank Chromatic Ray. After you cast the spell, if you hit the target, the light refracts to another creature within 30 feet of the first target. Roll your spell attack roll and to determine the ray's color separately for each target. The ray continues to refract each time it hits. The refraction ceases if you miss any target, and you can end the refraction at any point. You can't target the same creature more than once, and you must have line of effect to all targets.\nCraft Requirements Supply a casting of chromatic ray of the appropriate rank.",
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
    "contentId": "pf2e:item:equipment-srd:stone-body-mutagen-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "cqTCg6C0lvYUKQmx",
      "slug": "stone-body-mutagen-greater",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:aa80129fd55f5f99ee47f45ba504d8e4e60c9834cda4a469ad607ff74d3ebe14",
    "translatableHash": "sha256:8c69b247211fab26069f407a028821bc3fb0d2f5103ff324a15d4cd1bede0537",
    "data": {
      "schemaVersion": 1,
      "name": "Stone Body Mutagen (Greater)",
      "itemType": "consumable",
      "level": 15,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "elixir",
        "mutagen",
        "polymorph"
      ],
      "description": "Activate A (manipulate)\nThis mutagen calcifies your body making it as hard as stone.\nBenefit You gain resistance 10 to physical damage (except bludgeoning).\nDrawback Your speeds are reduced by 10 feet (minimum 5 feet) and you take a -2 penalty to Reflex saves.\nDuration 1 hour.\nEffect: Stone Body Mutagen (Greater)",
      "bulk": 0.1,
      "price": {
        "gp": 920
      },
      "usage": "held-in-one-hand",
      "category": "mutagen",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:poison-fizz-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "D8i3OBVMkxmCCREV",
      "slug": "poison-fizz-greater",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:7f5e9bf7bf832a219c37aa80dacd9d9d3572f4c07ce6c28bcf81a1924af09051",
    "translatableHash": "sha256:9692112a6f9db67f871e2db201481441cb59462ad1836416728e35ca8cff3551",
    "data": {
      "schemaVersion": 1,
      "name": "Poison Fizz (Greater)",
      "itemType": "consumable",
      "level": 15,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "lozenge"
      ],
      "description": "Activate 1 (manipulate)\nMade from a special mixture of honey and alchemical reagents, poison fizz is a zesty, sweet rock candy that pops and crackles in your mouth. For 1 hour, you have a +3 item bonus to saving throws against poison and being petrified.\nSecondary Effect 2 (poison)\nEffect You bite the poison fizz to release its poisonous liquid center and spray green mist in a 15-foot cone. This deals 5d6 poison damage with a check (reflex, dc:34, basic, options:area-effect, traits:poison). A creature that critically fails is also Blinded until the end of your next turn and is then temporarily immune to being blinded by poison fizz for 1 hour.\nEffect: Poison Fizz",
      "bulk": 0,
      "price": {
        "gp": 1000
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:tattletale-orb-selenite",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "dgwgVWUvXGurnsQD",
      "slug": "tattletale-orb-selenite",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/held-items/crystal-ball-selenite.webp"
    },
    "sourceHash": "sha256:4b77a63a3cd4c6c6967bd4e455f400722335d1242c68438e8493ad962cd59c07",
    "translatableHash": "sha256:90bb1c01028b75f6eb4789b759b885370f5ef2ae8b54d7ae09711d091f928ce3",
    "data": {
      "schemaVersion": 1,
      "name": "Tattletale Orb (Selenite)",
      "itemType": "equipment",
      "level": 15,
      "rarity": "rare",
      "traits": [
        "cursed",
        "magical",
        "scrying"
      ],
      "description": "A tattletale orb is a polished crystal sphere that appears to function as a Crystal Ball (Selenite). If those whom you use the orb to scry on roll better than a critical failure on their saving throw, they receive a telepathic message alerting them to the scrying. A success or better at the save allows the target to choose to allow you to scry anyway, knowing they can use an aspect of the orb against you, according to the orb's type. A creature that rolls a critical success on the saving throw also learns your name and location. Once you Activate a tattletale orb or use it to cast one of your scrying spells, it fuses to you. You must succeed at a Will save, using the scrying Will DC of a crystal ball of the orb's type, to use another such device.\nTattletale orbs come in the same types as crystal balls, with the same activations and powers. However, your target must roll a critical failure on the saving throw for the orb to function as normal for that type of crystal ball.\nThe target is temporarily immune to the orb's see invisibility for 24 hours and can choose to be Invisible to the orb's scrying during that time.",
      "bulk": 0.1,
      "price": {
        "gp": 7000
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:mother-maw",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "DtEhaF5fZcqgcQ3H",
      "slug": "mother-maw",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:80cfbf145ee2ccbba6bebab5c4b05874f9892c3e518a36b1fe92024b6f02ebe1",
    "translatableHash": "sha256:6dfb08daab223d23162590aaac80b18f56e65322c7245f258da5c14c10adb0da",
    "data": {
      "schemaVersion": 1,
      "name": "Mother Maw",
      "itemType": "container",
      "level": 15,
      "rarity": "rare",
      "traits": [
        "cursed",
        "extradimensional",
        "magical"
      ],
      "description": "This item appears to be and functions as a portable hole, but it's actually the maw of an alien extradimensional creature akin to and older than a bag of devouring. Any animal or vegetable matter put in the hole has a chance of triggering the creature's interest. Whenever you reach into the hole to retrieve an item or place an animal or plant product within the bag, roll a check (flat, dc:11). On a success, the hole ignores the intrusion. On a failure, the mother maw devours the triggering material, removing it from existence. The maw can't eat artifacts. If the triggering material isn't entirely inside the maw, such as when someone reaches inside, the mother maw attempts to pull it completely inside using a Grapple action with a 1d20+28 Athletics bonus. On a success, it devours the victim or object.\nWhenever the maw critically fails the Athletics check, it regurgitates one creature or object it previously devoured. The condition of the vomited creature or object depends on its resilience and the time it has spent inside the maw. Typically, the maw spews forth items it finds difficult to digest, such as those made of adamantine or protected by magic. It can and does regurgitate remains, though.",
      "bulk": 0,
      "price": {
        "gp": 6000
      },
      "usage": "worn",
      "category": "backpack",
      "group": "backpack"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:bewitching-bloom-amaranth",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "EcdwnJMuYRqQ9uh7",
      "slug": "bewitching-bloom-amaranth",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:7ee9ea6c23b21ea4a802e430c06ba64091eb3219357c196fbf19a162fb4933a5",
    "translatableHash": "sha256:9ecef06012949aad05ca4b2e4f2a8770fe796dab1a55b47902275e204ecacf19",
    "data": {
      "schemaVersion": 1,
      "name": "Bewitching Bloom (Amaranth)",
      "itemType": "equipment",
      "level": 15,
      "rarity": "common",
      "traits": [
        "invested",
        "magical",
        "tattoo"
      ],
      "description": "While dormant, this tattoo appears to be a simple flower bud, but when activated the flower swiftly blossoms, remaining that way until the next time you make your daily preparations. These blooms are colorful, elegant representations of amaranth flowers.\nActivate 2 envision\nFrequency once per day\nEffect Choose a willing ally you can see within 30 feet. The ally feels impervious, immortal. The next time they would take damage from a hazard, an enemy's attack, or an effect created by an enemy, that damage can't reduce the ally below 1 HP. This benefit ends if unused before the start of your next turn.",
      "bulk": 0,
      "price": {
        "gp": 5500
      },
      "usage": "tattooed-on-the-body",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:reverberating-stone-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "FJw54ZPLuJpChJbe",
      "slug": "reverberating-stone-greater",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/consumable.svg"
    },
    "sourceHash": "sha256:cd440e675f7bda63e0386eb6b4cb49b4ea58d8798e34a0183bfa2c1f27c1d0b5",
    "translatableHash": "sha256:ecc2b200dcc56ea7437a42388371bb012a230e5396ca0a6f17991740328bdbc7",
    "data": {
      "schemaVersion": 1,
      "name": "Reverberating Stone (Greater)",
      "itemType": "consumable",
      "level": 15,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "talisman"
      ],
      "description": "Activate f (concentrate)\nTrigger You use the affixed shield to Shield Block a melee attack\nRequirements You're a master in Athletics, and you have the affixed shield raised.\nThis heavy metal emblem is mounted on the face of the affixed shield and has a dull gray gemstone embedded at its center. When you Activate the talisman, the gem shatters, releasing a powerful shockwave in a 30-foot cone that must include the enemy who struck the triggering blow, if possible. Each creature in the cone takes 3d6 sonic damage with a check (fortitude, dc:34, basic, options:area-effect). Any creature that fails its save is pushed 5 feet away from you (or 10 feet on a critical failure).",
      "bulk": 0,
      "price": {
        "gp": 1200
      },
      "usage": "affixed-to-a-shield",
      "category": "talisman",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:lightweave-scarf-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "hEnITJ2bJVPrqfGG",
      "slug": "lightweave-scarf-greater",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:ad470abe9f7c2c8323fe5fec697490ab52b4caeb9b45e9f54ca2080911c23128",
    "translatableHash": "sha256:a08f0bec49a9250d21de15ec6823b8892177f09ba267a5c6742a3032da9a7e91",
    "data": {
      "schemaVersion": 1,
      "name": "Lightweave Scarf (Greater)",
      "itemType": "equipment",
      "level": 15,
      "rarity": "common",
      "traits": [
        "magical",
        "spellheart",
        "visual"
      ],
      "description": "The first of these strips of glittering cloth was worn by a monk from Jinin who would interweave it into his handwraps of mighty blows. The spell DC of any spell cast by activating this item is 34.\n• Armor You gain a +2 item bonus to saving throws against illusions and Deception checks to Create a Diversion.\n• Weapon (visual) After you cast an illusion spell by activating the scarf, the weapon is shrouded in a mesmerizing illusory pattern. Your next Strike causes the target to be Confused for 1 round if it hits. If you don't make a Strike by the end of your next turn, the illusion ends with no effect.\nEffect: Lightweave Scarf (Armor)\nActivate Cast a Spell\nEffect You cast Light.\nActivate Cast a Spell\nFrequency once per day\nEffect You cast 6th-rank Hypnotize.\nActivate Cast a Spell\nFrequency once per day\nEffect You cast Vibrant Pattern.",
      "bulk": 0,
      "price": {
        "gp": 5500
      },
      "usage": "affixed-to-armor-or-a-weapon",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:mukradi-jar",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "hnBcuuzzrBT0L0CL",
      "slug": "mukradi-jar",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/consumable.svg"
    },
    "sourceHash": "sha256:76fe8651a0f36b916695391b23fd585660da2c5d88a61095f0fc2e39df2ea066",
    "translatableHash": "sha256:ca3276e39a68a9fb877e7f0f837ccd1d8acc9896a9bb6c1f5979ce8141d3dfab",
    "data": {
      "schemaVersion": 1,
      "name": "Mukradi Jar",
      "itemType": "consumable",
      "level": 15,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "expandable"
      ],
      "description": "Activate 2 (manipulate)\nA miniature mukradi, its chitin shrunken and pale, is coiled within this jar. Its hollow form grows to a Gargantuan shell when you open the jar. It emits one of three breath weapons, chosen by you. Each creature in the area must attempt a DC 34 basic Reflex save.\n• Acid Maw (acid) 10-foot-wide, 60-foot line of acid dealing 12d6 acid damage. check (reflex, dc:34, basic, traits:acid, options:area-effect)\n• Flame Maw (fire) 60-foot cone of fire dealing 12d6 fire damage. check (reflex, dc:34, basic, traits:fire, options:area-effect)\n• Shock Maw (electricity) 120-foot line of electricity dealing 12d6 electricity damage. check (reflex, dc:34, basic, traits:electricity, options:area-effect)\nCraft Requirements Supply a mukradi corpse.",
      "bulk": 0.1,
      "price": {
        "gp": 1300
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:blightburn-bomb",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "kIExO59KkiXZUmto",
      "slug": "blightburn-bomb",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:dbcfdbbc936ddf38ff564b05bc5e661e6aed472edc31492aad0702e348ce2f58",
    "translatableHash": "sha256:6611944e0f45b4acd90e4571c3cb0b6a56a49a7537f5b1d740dc5ed66d25fabd",
    "data": {
      "schemaVersion": 1,
      "name": "Blightburn Bomb",
      "itemType": "weapon",
      "level": 15,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "bomb",
        "consumable",
        "disease",
        "poison",
        "splash"
      ],
      "description": "Activate 1 Strike\nBlightburn bombs have radioactive materials sealed inside flasks treated with lead. The bomb grants a +2 item bonus to attack rolls and deals 3d6 poison damage, 3d4 persistent poison damage, and 3 poison splash damage. A creature that takes the persistent poison damage deals the splash damage again from its current position as the radiation continues to harm nearby creatures. The persistent damage can last up to 1 minute. Blightburn bombs also expose the primary target to blightburn sickness.\nSaving Throw check (fortitude, dc:34)\nOnset 1d4\nStage 1 Drained 1 (1 day)\nStage 2 drained 1 and Sickened 1 (1 day)\nStage 3 Drained 2 and Sickened 2 (1 week)\nStage 4 Drained 3 and Sickened 3 (1 month)\nStage 5 increase drained condition by 1 (1 year)",
      "bulk": 0.1,
      "price": {
        "gp": 1200
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "bomb",
      "damage": {
        "dice": 3,
        "die": "d6",
        "type": "poison"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:zombie-staff-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "kJzp8I0rAmcucHuw",
      "slug": "zombie-staff-major",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:2ac07f7d435cb03164c6590557be5caa5421bb4f3fca60022053eb73c4f6e408",
    "translatableHash": "sha256:e55132a5f526108c52e9f2bc01b5d140ad2420de115ff57798dc8b1175b5c057",
    "data": {
      "schemaVersion": 1,
      "name": "Zombie Staff (Major)",
      "itemType": "weapon",
      "level": 15,
      "rarity": "common",
      "traits": [
        "magical",
        "staff",
        "two-hand-d8"
      ],
      "description": "A zombie staff is etched with the rotting visage of an undead humanoid grimacing in terror and dismay carved atop it. The staff's summon undead spells can summon only undead that have flesh and an Intelligence modifier of –4 or lower.\nActivate Cast a Spell\nEffect You expend a number of charges from the staff to cast a spell from its list. If you cast summon undead, you can also cast protect companion on the resulting minion as a free action.\n• Cantrip Protect Companion\n• 1st Necromancer's Generosity, Summon Undead\n• 2nd Final Sacrifice, Summon Undead\n• 3rd Bind Undead, Necromancer's Generosity, Summon Undead\n• 4th Final Sacrifice, Summon Undead, Talking Corpse\n• 5th Necromancer's Generosity, Summon Undead\n• 6th Final Sacrifice, Necrotize, Summon Undead\nCraft Requirements Supply one casting of all listed ranks of all listed spells.",
      "bulk": 1,
      "price": {
        "gp": 5600
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
    "contentId": "pf2e:item:equipment-srd:wyrm-spindle-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "MclG7HTygDNKH9Mk",
      "slug": "wyrm-spindle-greater",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:2c9eae0aab1fd1b4ed37294c6be628784e8f64b9f02dfe5409a308c0d9335122",
    "translatableHash": "sha256:d1b6821c970732275429497817ed91a4ee236096e8c36ccaef03046fc19eb54e",
    "data": {
      "schemaVersion": 1,
      "name": "Wyrm Spindle (Greater)",
      "itemType": "equipment",
      "level": 15,
      "rarity": "common",
      "traits": [
        "magical",
        "spellheart"
      ],
      "description": "The broken tips of four dragon claws—one of each magical tradition—are set into a silver fitting. They protrude in the shape of a star or compass.\n• Armor After you cast a non-cantrip spell by activating the spindle, you gain resistance 10 to fire, force, mental, and spirit for 1 minute.\n• Weapon After you cast a non-cantrip spell by activating the spindle, you gain a Dragon Breath activity that takes 2 actions and deals 9d6 damage to all creatures in a 30-foot type:cone with a check (reflex, dc:34, basic, options:area-effect) save. Choose the type of damage when you use Dragon Breath: 9d6 fire damage, 9d6 force damage, 9d6 mental damage, or 9d6 spirit damage. You can use this activity once before the end of your next turn.\nEffect: Wyrm Spindle - Armor\nActivate Cast a Spell\nEffect You cast Gouging Claw.\nActivate Cast a Spell\nFrequency once per day\nEffect You cast 7th-rank Summon Dragon.",
      "bulk": 0,
      "price": {
        "gp": 6500
      },
      "usage": "affixed-to-armor-or-a-weapon",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:beast-staff-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "PeRLqNTbzaiITNuO",
      "slug": "beast-staff-major",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:9e8506cf886696ef30eff3fcdbcc36b5aee3b29e7901bba0c4dd7d92f97225e7",
    "translatableHash": "sha256:0b0917f4fa85ceded85d97d5139a6eced2f531f0a5b4222f323d5ce01ece4acf",
    "data": {
      "schemaVersion": 1,
      "name": "Beast Staff (Major)",
      "itemType": "weapon",
      "level": 15,
      "rarity": "common",
      "traits": [
        "magical",
        "staff",
        "two-hand-d8"
      ],
      "description": "The visages of beasts are carved into the painted wood of a beast staff, with a large head on top. When used as a weapon, the staff is a +2 greater striking staff. While wielding the staff while you have it prepared, you're affected by Speak with Animals. If you have Animal Empathy, you gain a +2 circumstance bonus on checks using it.\nActivate Cast a Spell\nEffect You expend a number of charges from the staff to cast a spell from its list.\n• Cantrip Gouging Claw\n• 1st Runic Body, Pest Form\n• 2nd Animal Form, Enlarge\n• 3rd Animal Form, Insect Form\n• 4th Animal Form, Bestial Curse, Insect Form, Pest Form\n• 5th Animal Form, Insect Form, Moon Frenzy\n• 6th Cursed Metamorphosis, Moon Frenzy\nCraft Requirements Supply one casting of all listed ranks of all listed spells.",
      "bulk": 1,
      "price": {
        "gp": 6250
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
    "contentId": "pf2e:item:equipment-srd:sapling-shield-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Qm9mmqMNKBaMn5so",
      "slug": "sapling-shield-major",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:cd8ff2307f5b55b0eab4911e6df698cc7baa6f99841cf0e193d492a46bb09887",
    "translatableHash": "sha256:6eee53448d7d113276539c6d25f2b6f0035ae2a8ef5f6c99314b5d24c0b5df46",
    "data": {
      "schemaVersion": 1,
      "name": "Sapling Shield (Major)",
      "itemType": "shield",
      "level": 15,
      "rarity": "common",
      "traits": [
        "magical"
      ],
      "description": "This surprisingly weighty, though well-balanced, wooden buckler (Hardness 13, HP 104, and BT 52) is emblazoned with the image of a sapling. The sapling withers as the shield takes damage.\nActivate 1 (concentrate)\nEffect The buckler expands, with the sapling image growing into a mighty oak tree. The buckler becomes a tower shield, gaining the corresponding AC bonus, Speed penalty, and ability to Take Cover. It keeps the same Hit Points and Broken Threshold, but its Hardness and Bulk increase by 2 in this form. The shield remains in this form until you Activate it again to revert it to a buckler.",
      "bulk": 2,
      "price": {
        "gp": 5860
      },
      "usage": "",
      "category": "shield",
      "group": "buckler"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:grudgestone-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "rEev4xrQyMvjz7W7",
      "slug": "grudgestone-greater",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:bc495d79a2967af13ba5a874e98aad7f94455a7180b863a1580f89d6b3a1ded0",
    "translatableHash": "sha256:c736cf153accf2c7451275b7072c6e1e492ae6ce40caf1337f51988dfab6996e",
    "data": {
      "schemaVersion": 1,
      "name": "Grudgestone (Greater)",
      "itemType": "consumable",
      "level": 15,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "talisman"
      ],
      "description": "Activate f (concentrate)\nTrigger A creature critically hits you.\nThis dull black pebble, ominously cold to the touch and curiously heavy for its size, is typically bound to the affixed weapon inside a strip of cloth wrapped around its grip. When you Activate the grudgestone, your Strikes with the affixed weapon against the triggering creature gain a +5 status bonus to damage rolls for 1 minute or until the target dies, whichever comes first.\nEffect: Grudgestone",
      "bulk": 0,
      "price": {
        "gp": 900
      },
      "usage": "affixed-to-weapon",
      "category": "talisman",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:reef-heart-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "RODC2TYO4cUg6fXu",
      "slug": "reef-heart-greater",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/armor/coral-armor.webp"
    },
    "sourceHash": "sha256:7487be15ce98bdc380e39db7e039add99dde0a0abd453d9af7b9a9ffcc833758",
    "translatableHash": "sha256:ad0c58fcc09786ce0aa42420b21ee6fb4d8d8f6600285fe13ddaa09f90274f81",
    "data": {
      "schemaVersion": 1,
      "name": "Reef Heart (Greater)",
      "itemType": "armor",
      "level": 15,
      "rarity": "common",
      "traits": [
        "aquadynamic"
      ],
      "description": "This +2 greater resilient coral armor, often favored by allies of merfolk and aquatic elves, is made of living coral carefully harvested from the ocean depths. Legends speak of a variety of similar coral armors with distinct powers, but surface-dwellers know of reef heart as a magic armor that makes it easier for them to travel under the sea. Reef heart enables you to breathe underwater and gives you a swim Speed equal to your land Speed.\nActivate 3 (concentrate, manipulate)\nFrequency once per day\nEffect You cast a 7th rank Coral Eruption. If you conjure the coral underwater, it ceases dealing damage after 1 minute, but its duration is unlimited. If the magical coral remains in place for 1 year, it becomes non-magical coral from which a reef might grow.",
      "bulk": 2,
      "price": {
        "gp": 6500
      },
      "usage": "",
      "category": "medium",
      "group": "skeletal",
      "armor": {
        "armorClassBonus": 3,
        "dexterityCap": 2,
        "checkPenalty": -2,
        "speedPenaltyFeet": -5
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:crackling-bubble-gum-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "rpqgJkCepHecj1eA",
      "slug": "crackling-bubble-gum-major",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/other-consumables/crackling-bubblegum.webp"
    },
    "sourceHash": "sha256:75c037c0f99a6574f8a52f55ff2febc903bbb93e22abe2ccb270bd5ac7c2ee73",
    "translatableHash": "sha256:9c6d8da6d68f7918923280f6c7e16b845a9d86756766c1ee4fa3f7f19fcc9808",
    "data": {
      "schemaVersion": 1,
      "name": "Crackling Bubble Gum (Major)",
      "itemType": "consumable",
      "level": 15,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "lozenge"
      ],
      "description": "Activate1 (manipulate)\nThis tangy gum cracks and pops in your mouth as you chew it. While you're chewing crackling bubble gum, for up to 10 minutes, you have a +3 item bonus to saving throws against auditory and sonic effects.\nEffect: Crackling Bubble Gum\nSecondary Effect 2 (sonic)\nEffect You blow a bubble with the gum until it pops, after which it becomes inert. The pop deals 9d4 sonic damage to all creatures in a 15-foot cone with a check (fortitude, dc:34, basic) save. A creature that fails its save is also bound with sticky gum, taking a –10-foot item penalty to its Speed for 1 minute. The creature can remove the gum with a total of 3 Interact actions. These actions don't have to be consecutive, and other creatures can provide the actions as well.\nEffect: Crackling Bubble Gum (Failure)",
      "bulk": 0.1,
      "price": {
        "gp": 1000
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:library-robes-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "RtJvTDFNPhJSPmWP",
      "slug": "library-robes-major",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/armor/scroll-robes.webp"
    },
    "sourceHash": "sha256:c8079c92d8df5bb84a55f30580e00768274a72726ebb18c497f96eb4b7f9c8b6",
    "translatableHash": "sha256:ded83166979a5dafe780fc467751c58d416821b0b0a971388bed196494996bb0",
    "data": {
      "schemaVersion": 1,
      "name": "Library Robes (Major)",
      "itemType": "armor",
      "level": 15,
      "rarity": "common",
      "traits": [
        "inscribed"
      ],
      "description": "These +2 greater resilient scroll robes magically store a spell for you. During your daily preparations, choose one spell you know of 8th rank or lower. You inscribe that spell on the robes, as though you had done so using the robes' inscribed trait, but without needing to go through the normal scribing process. You must provide the minimum amount of materials to Craft one scroll of that spell (typically half the Price of a scroll of that rank plus any extra cost required for the spell). You don't need to be trained in Crafting, nor do you need the Magical Crafting feat. Using this ability erases any scroll already inscribed on the robe.",
      "bulk": 0.1,
      "price": {
        "gp": 6000
      },
      "usage": "",
      "category": "unarmored",
      "group": "cloth",
      "armor": {
        "armorClassBonus": 0,
        "dexterityCap": 5,
        "checkPenalty": 0,
        "speedPenaltyFeet": 0
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:poison-concentrator-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "TieVxNRNuXsU7m7R",
      "slug": "poison-concentrator-greater",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/equipment.svg"
    },
    "sourceHash": "sha256:4e6fae035beda1f5cfe80da38b2164d00b304fa6ac4db63b5014a725918dd30b",
    "translatableHash": "sha256:948cf83b6c47e1110a0058204ace3afd030427b0d79178359b0ac50b5a81bb61",
    "data": {
      "schemaVersion": 1,
      "name": "Poison Concentrator (Greater)",
      "itemType": "equipment",
      "level": 15,
      "rarity": "common",
      "traits": [
        "alchemical"
      ],
      "description": "This compression apparatus can reduce two poisons into a more concentrated dose. As a 10-minute activity that has the manipulate trait, you can use a poison concentrator to combine two doses of the same infused alchemical poison of level 14 or lower. The concentrated poison has a +1 item bonus to its DC, and its level is increased by 1.",
      "bulk": 0.1,
      "price": {
        "gp": 5900
      },
      "usage": "held-in-two-hands",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:toshigami-blossom",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "tzoN71erFxQ2HVLl",
      "slug": "toshigami-blossom",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:3e246785959bbcacb7897cbd6476378e2fb805256fa49efa6b627a4c1244597e",
    "translatableHash": "sha256:8500462a6ce36ab9f63098e071be3498caa91cd34e334fcee646992c939f9e9a",
    "data": {
      "schemaVersion": 1,
      "name": "Toshigami Blossom",
      "itemType": "equipment",
      "level": 15,
      "rarity": "rare",
      "traits": [
        "intelligent",
        "invested",
        "primal"
      ],
      "description": "Perception 1d20+30; precise vision (darkvision) 30 feet, imprecise hearing 30 feet\nCommunication telepathy (Common and two other common languages; speak with plants)\nSkills Diplomacy 1d20+28, Medicine 1d20+32, Nature 1d20+32\nInt +6, Wis +10, Cha +5\nWill 1d20+32\nAn encounter with a toshigami, the enigmatic kami who protect cherry trees, is rare, though often sought after and treasured by those who achieve such an encounter. Only a handful of mortals can truthfully claim to have seen a toshigami, let alone met one, though many popular fireside tales tell of virtuous souls receiving a toshigami's blessing to fight for a worthy cause. Such stories have a basis in fact; every so often, a toshigami gives a worthy mortal a flower from their ward, time-locked in perfect bloom and granted sapience. Such toshigami blossoms are more sociable than their creators. Like toshigami, a blossom has a strong curiosity about the mortal world. If you wear a toshigami blossom, it can intercede for you, helping you make a good impression.\nA toshigami blossom has the following activations.\nActivate 2 (concentrate, manipulate)\nFrequency once per day\nEffect The blossom casts Nature's Pathway on you to your specifications. If you target only cherry trees, the spell is cast at 6th rank.\nActivate 2 (concentrate)\nFrequency once per hour\nEffect The blossom casts Soothing Blossoms to your specifications.\nActivate 1 (concentrate)\nFrequency once per minute\nEffect The blossom sends a flurry of cherry blossoms outward in a 20-foot burst that lasts 1 round. You and your allies can see through these blossoms. To all other creatures, creatures within the cloud of blossoms become Concealed, and creatures outside the cloud become concealed to creatures within it. When you or an ally succeeds with a Strike against a creature in the blossoms, the Strike deals an additional 1d6 mental damage and an additional 1d6 void damage to living creatures, or an additional 1d6 vitality damage to undead.",
      "bulk": 0,
      "price": {},
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:spy-staff-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "tzzvevwmwwKQaHK0",
      "slug": "spy-staff-major",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:ecdfe46c125af591f029e7e6cdfdd55b8110ddb8bfb1d92f517a906408e332de",
    "translatableHash": "sha256:fed53502b23909b522f556e7d275edc0b46a93a198c447d070daa5e4e767e084",
    "data": {
      "schemaVersion": 1,
      "name": "Spy Staff (Major)",
      "itemType": "weapon",
      "level": 15,
      "rarity": "uncommon",
      "traits": [
        "illusion",
        "magical",
        "staff",
        "two-hand-d8"
      ],
      "description": "In its normal form, a spy staff is a slim rod of burnished wood with subtle etchings of eyes upon its sides. The first to develop the spy staff were agents of Andoran's Twilight Talons, but such staves have spread to other espionage agencies.\nActivate 1 envision\nEffect You change the shape and appearance of this staff to that of an ordinary handheld accessory of your choosing of the same Bulk. The staff's statistics don't change. Only a creature benefiting from true seeing or a similar effect can attempt to disbelieve this illusion, with a DC of 38.\nActivate Cast a Spell\nEffect You expend a number of charges from the staff to cast a spell from its list.\n• Cantrip Message\n• 1st Illusory Disguise, Invisible Item, Message Rune\n• 2nd Disguise Magic, Humanoid Form, Illusory Disguise\n• 3rd Clairaudience, Illusory Disguise, Veil of Privacy\n• 4th Clairvoyance, Peaceful Bubble\n• 5th Mind Probe, Scouting Eye\n• 6th Mislead, Scrying\nCraft Requirements Supply one casting of all listed ranks of all listed spells.",
      "bulk": 1,
      "price": {
        "gp": 5300
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
    "contentId": "pf2e:item:equipment-srd:planar-tunnel",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "ulgsKBzOXJbjqnmW",
      "slug": "planar-tunnel",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:f9276b1a0924fb863cf08b06a22a1332b1ec80183d5d6a6491774b8be99b41ed",
    "translatableHash": "sha256:c8adc9d7b637fd8ae6f2f86117b9bbee7da6c6640ed785f86b08c3dc78102eb1",
    "data": {
      "schemaVersion": 1,
      "name": "Planar Tunnel",
      "itemType": "container",
      "level": 15,
      "rarity": "uncommon",
      "traits": [
        "extradimensional",
        "magical"
      ],
      "description": "A complex, collapsible mechanism forms the outer surface of a planar tunnel. It's linked to a passageway that can be accessed if the tunnel is fully opened. The passage is extradimensional, but borders another plane of existence. Each planar tunnel is keyed to one specific plane. If another extradimensional space is opened inside the planar tunnel, rather than deactivating either item as typical for extradimensional spaces, a rift to the keyed plane tears open and destroys both items. Any creature or unattended object in the planar tunnel is instantly transported to the keyed plane, though a creature can avoid this by succeeding at a check (reflex, dc:30) save.\nActivate 3 (manipulate)\nYou open the collapsed mechanism to fully open the tunnel, revealing an extradimensional space that stays in place. The tunnel is 6 feet across—just big enough to cover a 5-foot square—and 10 feet deep. The passage's depth is perpendicular to the surface, so it's most commonly placed on a floor to make a hole straight down or on a wall to create a horizontal passage through it. The atmosphere is hospitable to travel even if the keyed plane wouldn't be. Anyone adjacent to either edge of the tunnel can Interact to collapse the opening. This closes both entrances to the extradimensional space. Any objects or creatures within the tunnel remain inside, and any that can't fit fully inside are ejected into the nearest open space. No matter how many items are in the planar tunnel, its Bulk never changes. Items can be stowed or retrieved only while the tunnel is fully open. When the tunnel is closed, the interior remains a stable environment for 10 minutes, after which any creature or object inside is subjected to the environment of the keyed plane as it seeps through the boundary. A living creature placed inside can attempt to Escape against a DC of 13. An item inside the tunnel provides no benefits unless it's retrieved first. Anything in the tunnel can't be detected by magic that detects only things on the same plane.\nSpecial A planar tunnel can be used as a planar key for the Interplanar Teleport spell, and has the same rarity as the key, as specified in the spell.",
      "bulk": 0,
      "price": {
        "gp": 6000
      },
      "usage": "worn",
      "category": "backpack",
      "group": "backpack"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:life-boosting-oil-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "UOH0A4xNSMnpV6i4",
      "slug": "life-boosting-oil-major",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:fed1f4ebfc348c56fcd9570b75ccc5d21e4f87740f1cc35af020b663d79d228a",
    "translatableHash": "sha256:d3201de60112a0c8049756658c16bc016900304ce071bf9e298e20c3671ab6eb",
    "data": {
      "schemaVersion": 1,
      "name": "Life-Boosting Oil (Major)",
      "itemType": "consumable",
      "level": 15,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "healing",
        "magical",
        "oil"
      ],
      "description": "Activate 1 (manipulate)\nWhen you apply sticky, stinging life-boosting oil, you gain fast healing 15 that starts the first time you take damage while the oil lasts. Once the fast healing starts, the oil remains effective for 4 rounds. However, the oil lasts only 8 hours, whether it provides fast healing or not.\nEffect: Life-Boosting Oil",
      "bulk": 0.1,
      "price": {
        "gp": 1300
      },
      "usage": "held-in-two-hands",
      "category": "oil",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:bargainers-instrument",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "VFUOEkaCaSCJsu6U",
      "slug": "bargainers-instrument",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/consumable.svg"
    },
    "sourceHash": "sha256:7e3f923440ff7dab8fdf01291ab15aada55df0a6819e074c3ae79bdb70124618",
    "translatableHash": "sha256:df10f83adc6bb07743f785faa345dcac5f7a6ccb10d66165c52a40729ee353c9",
    "data": {
      "schemaVersion": 1,
      "name": "Bargainer's Instrument",
      "itemType": "consumable",
      "level": 15,
      "rarity": "rare",
      "traits": [
        "consumable",
        "magical"
      ],
      "description": "Activate 1 hour (concentrate, manipulate)\nA bargainer's instrument is a musical implement. The most typical version is a violin made from maple and spruce, its body stained so deep a purple it appears almost black. When activated, the instrument casts a Binding Circle ritual to conjure a willing extraplanar talent to compete with you in performance.\nThe contest could be a musical battle, a dance-off, an oratorical debate—the two of you could even use entirely different types of performance. The loser of the bout is magically bound to perform a task of the winner's choice within 1 week. The contest consists of taking turns to Perform, starting with your opponent. The Performance check's DC is the higher of the opponent's Perception DC or Will DC, though the two parties can mutually agree to use an impartial judge instead. The first to reach four successes wins, with each critical successes counting as two successes. If you play the bargainer's instrument as part of your performance, it grants you a +2 item bonus to the Performance checks.\nAfter the contest, the conjured creature can choose to return to where it came from or remain where you conjured it. The loser must endeavor to complete the task by all reasonable means within 1 week. Failing to complete it is shameful but has no further consequences. The instrument loses its magic and remains a non-magical virtuoso instrument.",
      "bulk": 0.1,
      "price": {
        "gp": 1000
      },
      "usage": "held-in-two-hands",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:mind-swap-potion",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "VqJuhN2Ba1DnrJNW",
      "slug": "mind-swap-potion",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/consumable.svg"
    },
    "sourceHash": "sha256:c200b8fb423616b9328c95cdc8a6c48895a806e5697be979a0758feb986e91be",
    "translatableHash": "sha256:ad84477f487f7178b5c1661001128c11e830fa5609fea1b83020cf98d277a175",
    "data": {
      "schemaVersion": 1,
      "name": "Mind-Swap Potion",
      "itemType": "consumable",
      "level": 15,
      "rarity": "rare",
      "traits": [
        "consumable",
        "magical",
        "mental",
        "possession",
        "potion"
      ],
      "description": "Activate 1 (manipulate)\nSmall bolts of brightly colored electricity flicker through the cloudy mind-swap potion. The potion often comes in a double-chambered flask, because when you drink it, you consume half the contents. If another creature of the same ancestry consumes the remainder of the contents within 1 minute, your minds swap per the effect of a critical success on a Mind Swap ritual. The effects last for 24 hours or until one of you Dismisses the activation.",
      "bulk": 0.1,
      "price": {
        "gp": 1000
      },
      "usage": "held-in-one-hand",
      "category": "potion",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:cloister-robe-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "XPIDpF7dP6VyGKOM",
      "slug": "cloister-robe-greater",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:9d2d3a80d5e8e03412e1a59fa27ece927b02e38710b40e41d12ed7a7d79ad78b",
    "translatableHash": "sha256:0fac27da82c876b140ff3a1f8779122f8f11a322d93ca6e740d98088a151832b",
    "data": {
      "schemaVersion": 1,
      "name": "Cloister Robe (Greater)",
      "itemType": "armor",
      "level": 15,
      "rarity": "common",
      "traits": [
        "divine",
        "focused",
        "invested"
      ],
      "description": "The most devoted, cloistered clerics wear a cloister robe. Decorations symbolic of a specific deity adorn the robe, and the robe's colors and the complexity of its construction fit the deity's outlook. The robe serves as a religious symbol of that deity, and it doesn't need to be wielded to provide that benefit.\nThe robe is +2 greater resilient explorer's clothing and grants a +2 item bonus to Religion checks. The robe doesn't grant any benefits to a wearer who doesn't worship the deity tied to the robe. In addition, when you cast a domain spell from one of the deity's domains, you gain resistance to damage from divine spells until the end of your next turn. This resistance is equal to half the robe's level.\nEffect: Cloister Robe\nActivate—Domain Devotion F (concentrate)\nFrequency once per day\nEffect Gain 1 Focus Point, which you can spend only to cast a cleric domain spell for a domain belonging to the deity the vestments are dedicated to. If you don't spend this point by the end of this turn, it is lost.\nCraft Requirements You are a cleric who worships the deity tied to the robe.",
      "bulk": 0.1,
      "price": {
        "gp": 6000
      },
      "usage": "",
      "category": "unarmored",
      "group": "cloth",
      "armor": {
        "armorClassBonus": 0,
        "dexterityCap": 5,
        "checkPenalty": 0,
        "speedPenaltyFeet": 0
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:garrote-shot",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "XQjGhnBWOIh1uB2w",
      "slug": "garrote-shot",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:9509c3622f603f179d596b71d34540a4644a613400efc44da79be83f88c04b8c",
    "translatableHash": "sha256:73ad80ba88ecdd12a717f9f76921f073d58e9be1a647c4d8c4f58cfa1b090b60",
    "data": {
      "schemaVersion": 1,
      "name": "Garrote Shot",
      "itemType": "ammunition",
      "level": 15,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical"
      ],
      "description": "Ammunition any\nActivate 1 (concentrate)\nWiry designs mark the silvery coating on a garrote shot. When the activated ammunition hits a target, it transforms into a silvery garrote that wraps around one of the target's appendages, dealing 2d12 persistent slashing damage. On a critical hit, it wraps around the target's throat if it has one, and the target can't breathe until the persistent damage ends. If the persistent damage kills the target, the garrote severs the appendage it's wrapped around.",
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
    "contentId": "pf2e:item:equipment-srd:torrent-spellgun-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "zELyHWSfkD4yRUjZ",
      "slug": "torrent-spellgun-major",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/consumable.svg"
    },
    "sourceHash": "sha256:8618f62f76bf3de4b5b7875d13a56dd8005a8812f6f04ace9ac0b9f0d2ad0aff",
    "translatableHash": "sha256:740f201f7d2da2927a2f7c88ba54617a1caf12dba3ddd9c97b6a025141dbc822",
    "data": {
      "schemaVersion": 1,
      "name": "Torrent Spellgun (Major)",
      "itemType": "consumable",
      "level": 15,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "spellgun",
        "water"
      ],
      "description": "Activate 2 Strike\nCarved of seashell, a torrent spellgun is damp to the touch, and seaweed wraps around its grip. You Activate the spellgun by aiming it at one creature and making your choice of a spell attack roll or a firearm attack roll against the target's AC. This spellgun has a range increment of 30 feet. The spellgun blasts a powerful jet of water that deals 16d6 bludgeoning damage, then disintegrates into sand.\nCritical Success The target takes double damage and is knocked back 10 feet.\nSuccess The target takes full damage and is knocked back 5 feet.",
      "bulk": 0.1,
      "price": {
        "gp": 1250
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:heartblood-ring",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "ZJE92c4sE6cu8l8l",
      "slug": "heartblood-ring",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:b9c77a2842ebcd836c05020b8b32e684554cb988f5207e775f7bca4209e80055",
    "translatableHash": "sha256:b31c725f5e06cf5590be416607d9e3a9a9679eec80b8b85999825fa8f888776d",
    "data": {
      "schemaVersion": 1,
      "name": "Heartblood Ring",
      "itemType": "consumable",
      "level": 15,
      "rarity": "rare",
      "traits": [
        "consumable",
        "magical"
      ],
      "description": "Activate 1 (manipulate)\nSealed inside the hidden compartment of a gold ring, heartblood has an unmistakable coppery taste, along with a thick mouth feel. A whiff of the concoction is pleasantly stimulating.\nStage 1 (1 Week) The first time you enter this stage from a particular dose of heartblood, you are affected as if by regenerate. Each round this effect functions, it attempts to counteract one disease or poison affecting you with a bonus equal to your class DC – 10. Heartblood also reduces physical signs of aging, altering your appearance to that of vigorous adulthood for your ancestry. (Non-adults who drink heartblood change only in apparent vigor, not age.)\nYou have fast healing equal to half your level, as well as resistance to void damage and poison damage equal to half your level. Also, you gain a +1 circumstance bonus to saving throws (or any other defense) against death effects, disease, paralysis, poison, and sleep. Treat the outcome of any saving throw you roll against death, paralyze, or sleep effects as one step better.\nStage 2 (1 Month) You gain low-light vision, or you gain darkvision if your ancestry already has low-light vision. Reduce your current and maximum Hit Points by 2 × your level; you are Doomed 1. You develop a pallor and a dislike of bright light, especially sunlight. If suddenly exposed to bright light, you are Dazzled until the end of your next turn. While in an area of sunlight, you remain dazzled until 1 round after the exposure ends. Normal food is unsatisfying, and you have urges to consume blood; when confronted with the opportunity to do so, you must succeed at a Will save to avoid it. Doing so once after each time you roll initiative is enough. Your normal coloration returns for a few hours after you drink blood.\nIf you die at this stage or higher, your body becomes a bloody mist that sinks 6 feet into the ground. The third night thereafter, you rise from the earth as a vampire. This typically makes you unholy. You are under the control of the heartblood's creator unless your level is higher than that creature's. The controlling vampire senses you and guides you to them via psychic link. Significant destruction of your body and circumstances that prevent the formation of undead stop this effect.\nStage 3 (1 Month) You gain darkvision and now have fast healing equal to your level. A death effect can't automatically kill you or increase your dying value. Reduce your current and maximum Hit Points by 4 × your level, rounded up, instead of 2 × your level; you are Doomed 2. Your hunger for blood increases, so if you fail to drink a cup or so each day, you are considered to have gone without food that day. You are also Slowed 1 while in sunlight, becoming Slowed 2 after 1 minute. Your shadow is wispy, and your reflection in mirrors ghostly, which are apparent signs of vampirism to those who know such facts.\nStage 4 You die.\nPurging Heartblood loses its potency if the vampire who created it is destroyed. However, a dose of heartblood imposes a –2 status penalty to your saving throws against the powers of the vampire who created it.",
      "bulk": 0.1,
      "price": {},
      "usage": "wornring",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-chromatic-burst-7th-rank",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "0KaC1NryNfckdS7T",
      "slug": "wand-of-chromatic-burst-7th-rank",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:9a23f79568c440720e1b23b503756bc245854ef5a2cd91f0822c5b39f18068a4",
    "translatableHash": "sha256:8f0bae0d2d5613a2bfa3bba1a9c483925692909ff286e95dbd1a64a16982bbae",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Chromatic Burst (7th-rank)",
      "itemType": "consumable",
      "level": 16,
      "rarity": "common",
      "traits": [
        "concentrate",
        "light",
        "magical",
        "manipulate",
        "wand"
      ],
      "description": "This intricately carved quartz wand changes color, cycling through the colors of the rainbow.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast 7th-rank Chromatic Armor. Additionally, the target can use the Chromatic Armor Burst action.\nChromatic Armor Burst 1 (concentrate, light, magical)\nRequirements You're affected by Chromatic Armor created by the wand of chromatic burst\nEffect Choose one color of the Chromatic Armor the wand created for you. The spell ends and light of that color flashes brightly in a 20-foot emanation. Creatures in the area take 8d6 untyped damage of the type associated with the color you chose, with a check (reflex, basic) save against your spell DC. This action has the trait corresponding to the damage type you chose.\nCraft Requirements Supply a casting of Chromatic Armor of the appropriate rank.",
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
    "contentId": "pf2e:item:equipment-srd:advancing-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "1neYjXMc4srH7KQ0",
      "slug": "advancing-greater",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/runes/armor-property-runes/armor-property-runes.webp"
    },
    "sourceHash": "sha256:bb8e029ec9d13345be48d4b2c131ab93e5b0a5d307a9693f15d3c7c00add74ed",
    "translatableHash": "sha256:64340fe9c0a5748fa51e23dc5cf0270c367d3c376904c8585e9e7e7d46a7f444",
    "data": {
      "schemaVersion": 1,
      "name": "Advancing (Greater)",
      "itemType": "equipment",
      "level": 16,
      "rarity": "common",
      "traits": [
        "magical"
      ],
      "description": "This rune charges up as you defeat your foes, driving you forward across the battlefield with every victory.\nActivateF (concentrate)\nRequirements Your last action or activity reduced an enemy to 0 Hit Points\nEffect You Stride up to your Speed. This movement doesn't trigger reactions. You can Burrow, Climb, Fly, or Swim instead of Striding if you have the corresponding movement type.",
      "bulk": 0,
      "price": {
        "gp": 8000
      },
      "usage": "etched-onto-heavy-armor",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:fiddle-of-the-maestro",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "2smAtaNAi2fIVTLF",
      "slug": "fiddle-of-the-maestro",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/held-items/fiddle-of-the-maestro.webp"
    },
    "sourceHash": "sha256:5eabc89a1dac731db4b480604c2dc9124f7f836cd31d7fdaceb4a47c98604b82",
    "translatableHash": "sha256:e0a45f8827827455c4685377c380798e9cfd4e89a081adb55493755e3193d91f",
    "data": {
      "schemaVersion": 1,
      "name": "Fiddle of the Maestro",
      "itemType": "equipment",
      "level": 16,
      "rarity": "rare",
      "traits": [
        "coda",
        "occult",
        "staff"
      ],
      "description": "This exquisite fiddle is perfectly carved and balanced to produce the purest sound while granting its player perfect balance and poise. It grants a +2 item bonus to Performance checks. If you're a master in Performance, while playing it you also gain a +1 status bonus to Reflex saves and a +1 item bonus to Dexterity-based skill checks. If you're legendary in Performance, the bonuses are +2.\nWhen you Perform with the fiddle, you can choose to create a harsh and discordant note. You critically fail the Performance check, shred the strings of the fiddle, and create an 8th-rank Noise Blast, with a 40-foot emanation around you instead of a 10-foot burst. The fiddle can't be played again until the strings are replaced at a cost of 200 gp.\nActivate Cast a Spell\nEffect You expend a number of charges from this instrument to cast a spell from its list.\n• Cantrips Figment, Light, Message\n• 1st Command\n• 2nd Calm, Revealing Light\n• 3rd Enthrall\n• 4th Honeyed Words\n• 5th Sending\n• 6th Calm, Dominate, Vibrant Pattern\n• 7th Dominate, Mask of Terror, True Target, Vibrant Pattern, Visions of Danger\nCraft Requirements Supply one casting of all listed ranks of all listed spells.",
      "bulk": 0.1,
      "price": {
        "gp": 10000
      },
      "usage": "held-in-two-hands",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:dragonclaw-scutcheon",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "3joQBdbHQo66FT6S",
      "slug": "dragonclaw-scutcheon",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/consumable.svg"
    },
    "sourceHash": "sha256:7f6d4d4104aacb26114086c5cdd3aa5686e5c7fb676ea241529474fd110506b1",
    "translatableHash": "sha256:ce95898be00d2a4f6b11b59202aa9b9d21f4aa7cb9c6e0f24f1c8846c333a32f",
    "data": {
      "schemaVersion": 1,
      "name": "Dragonclaw Scutcheon",
      "itemType": "consumable",
      "level": 16,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "talisman"
      ],
      "description": "Activate f (concentrate)\nPrerequisites You have the affixed shield raised.\nTrigger You would take damage of a type depending on the talisman's dragon type.\nThis decorative shield emblem contains the gilded claw of a dragon mounted in a setting of high-grade adamantine alloy. It protects against a damage type depending on the type of dragon the claw came from (see the sidebar). When you Activate the scutcheon, you and all of your carried, wielded, or worn items gain immunity to all damage of that type until the end of your next turn.\nIf you have a dragonclaw scutcheon, dragonscale cameo, and dragontooth trophy attached to your items, and they all correspond to the same type of dragon, you gain an extra benefit. When you Activate any of these talismans, you gain the ability to cast an 8th-rank Dragon Breath focus spell (check (reflex, dc:35, basic)) as an innate spell once before the end of your next turn. Use the dragon type that matches the talismans; you can Cast the Spell this way without spending a Focus Point. Because each talisman disintegrates when used, you can't get this benefit again until you've attached a replacement.\nCraft Requirements Supply one claw from an adult or older dragon.",
      "bulk": 0,
      "price": {
        "gp": 1600
      },
      "usage": "affixed-to-a-shield",
      "category": "talisman",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-hybrid-form-7th-rank",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "3xoboDAmMZcmvK59",
      "slug": "wand-of-hybrid-form-7th-rank",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:4c74ce4c9676a974cc9e12df7fd35cc73dcfaa7efa1a810c419498d166ff746b",
    "translatableHash": "sha256:29f65b340b92eaefcb854abf765f81e5a8ea44e59f014ecec6e72e5c06b52dc0",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Hybrid Form (7th-rank)",
      "itemType": "equipment",
      "level": 16,
      "rarity": "uncommon",
      "traits": [
        "magical",
        "polymorph",
        "wand"
      ],
      "description": "The grain of this simple wooden wand forms shifting images of sharp claws, snapping jaws, and countless creatures.\nActivate Cast a Spell; This activation takes 2 if the spell normally takes 1 to cast, or 3 if the spell normally takes 2\nFrequency once per day, plus overcharge\nEffect You Cast the Spell, selecting two forms from among those you can normally choose. You gain the benefits of both forms. For example, if one form can breathe air and the other can breathe underwater, you can breathe in both situations. If there's overlap in abilities, you gain the better one. For instance, if both have a fly Speed, you get the higher one, and if both forms have claws, you gain only the claw Strike you prefer. The GM determines which abilities overlap and which are cumulative.\nCraft Requirements Supply a casting of a spell of the appropriate rank. The spell must have a casting time of 1 or 2, must have the polymorph trait, and must allow more than one choice of battle form.",
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
    "contentId": "pf2e:item:equipment-srd:misleading",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "68rHNRZmlnyaUbBF",
      "slug": "misleading",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/runes/armor-property-runes/armor-property-runes.webp"
    },
    "sourceHash": "sha256:4f4f2bc98a05dd84ddca08be921569f327935040ff0d45481384fa896fd4b9de",
    "translatableHash": "sha256:3b54be713f8f8d6b0c2a04a267bdb54e0649e849bd3066b288fa5fb8090dcaa0",
    "data": {
      "schemaVersion": 1,
      "name": "Misleading",
      "itemType": "equipment",
      "level": 16,
      "rarity": "common",
      "traits": [
        "illusion",
        "magical"
      ],
      "description": "This rune attempts to obfuscate your location through illusory trickery. When you're Concealed, the DC of the flat check to target you with an effect is 6 instead of 5.\nActivate2 (concentrate)\nFrequency once per day\nEffect The armor casts mislead, affecting you. It lasts until the end of your next turn.",
      "bulk": 0,
      "price": {
        "gp": 8000
      },
      "usage": "etched-onto-light-armor",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:spellstriker-staff-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "AFkybwwQzAArjrF4",
      "slug": "spellstriker-staff-major",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:4cd476274d764fb9a511df4004485eb7d7a5ea3795f8c9434ffe9edd6dc5190f",
    "translatableHash": "sha256:da324a6885858f95d76356ceac0eed8ec84f9995e6b970446b031cfe3ce75c2e",
    "data": {
      "schemaVersion": 1,
      "name": "Spellstriker Staff (Major)",
      "itemType": "weapon",
      "level": 16,
      "rarity": "common",
      "traits": [
        "magical",
        "staff",
        "two-hand-d8"
      ],
      "description": "A spellstriker staff is wrought iron with gleaming arcane sigils etched into its surface and a sharp point at the bottom. Used as a weapon, the staff is a +2 greater striking shifting staff.\nActivate F (concentrate)\nFrequency once per hour\nTrigger You use Spellstrike with a non-cantrip spell and miss with the Strike\nEffect An explosion of magical energy—stored up for the Spellstrike—explodes out. All creatures in a 5-foot emanation take 1d6 damage per rank of the spell, with a check (reflex, against:spell, basic, options:area-effect) save against your spell DC. This damage is the same type the spell would have dealt, and the activation gains that trait; if the spell would have dealt multiple types of damage, choose one of them. If the damage of the explosion is mental, the save is check (will, against:spell, basic, options:area-effect) instead of Reflex.\nActivate Cast a Spell\nEffect You expend a number of charges from the staff to cast a spell from its list.\n• Cantrip Ignition\n• 1st Echoing Weapon, Sure Strike\n• 2nd Acid Grip, Telekinetic Maneuver\n• 3rd Echoing Weapon, Haste\n• 4th Acid Grip, Weapon Storm\n• 5th Blink Charge, Echoing Weapon, Vampiric Feast\n• 6th Acid Grip, Weapon Storm\n• 7th Blink Charge, True Target\nCraft Requirements You have the magus's Spellstrike activity. Supply one casting of all listed ranks of all listed spells.",
      "bulk": 1,
      "price": {
        "gp": 8500
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
    "contentId": "pf2e:item:equipment-srd:wand-of-legerdemain-7th-rank",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "AYIel6a1nARjqygh",
      "slug": "wand-of-legerdemain-7th-rank",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:6ba0d81c2afe32b1aa40910ad1722978e14d8ab964e4c8f98a1926c765643aac",
    "translatableHash": "sha256:b5000502451035535ece886b475b397d94057b31c2c3d352024c4dc4887517d9",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Legerdemain (7th-rank)",
      "itemType": "equipment",
      "level": 16,
      "rarity": "common",
      "traits": [
        "magical",
        "wand"
      ],
      "description": "This wand of lacquered black wood has a handle wrapped in interwoven colorful ribbons. A silver bell caps the wand's tasseled pommel.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You Cast the Spell.\nActivate 1 (emotion, illusion, light, manipulate. mental, visual)\nRequirements The last action you took this turn was to Cast a Spell from the wand\nEffect You make yourself the center of attention. An illusory spotlight shines bright light upon your space as you pull inane objects from the wand's tip, such as confetti, silk flowers, streamers, or a long string of colorful kerchiefs knotted end to end. Each enemy within 30 feet must attempt a Will save against your spell DC, receiving a +4 circumstance bonus to the save if you or any of your allies recently threatened it or used hostile actions against it. On a failure, the creature becomes Fascinated with you until the end of your next turn. The fascination ends if the target is subject to a hostile act, or if another creature succeeds at a Diplomacy or Intimidation check against it.\nThe spotlight follows you wherever you move. You can't be Concealed while in the spotlight. The effect ends if you become Invisible, attempt a Stealth check, or Dismiss the activation.\nYou can Sustain this Activation for up to 1 minute. Since you need to keep performing tricks, Sustain an Activation has the manipulate trait. Sustaining extends the spotlight, and keeps fascinated creatures fascinated, but doesn't cause creatures not already fascinated to become fascinated.\nCraft Requirements Supply a casting of a spell of the appropriate rank.",
      "bulk": 0.1,
      "price": {
        "gp": 10000
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:black-hole-armor",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "DUTKrSu5iJMktfZI",
      "slug": "black-hole-armor",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:6bd92d4f2c320286f822952261fbed2c700dff679a9ef26ab13df18c7cbc4d24",
    "translatableHash": "sha256:720ece795ac14aedc2737b19a60211e2f51e53691cc9916cd26f622ebc8bb13f",
    "data": {
      "schemaVersion": 1,
      "name": "Black Hole Armor",
      "itemType": "armor",
      "level": 16,
      "rarity": "common",
      "traits": [
        "bulwark",
        "entrench-ranged",
        "ponderous"
      ],
      "description": "The joints of this black +2 greater resilient fortification fortress plate look like swirling vortices of silver. Non-magical ammunition and thrown weapons aimed at you are destroyed after they hit you and deal damage or miss you. You also have resistance 10 to physical damage from ranged attacks.\nWhen an enemy's ranged attack misses you or hits you and deals no damage, the armor absorbs the projectile. When it has absorbed six projectiles, the armor glows at the joints.\nActivate r (manipulate)\nFrequency once per minute\nTrigger A ranged weapon Strike targets a creature within 20 feet of you and the attacker hasn't yet rolled its attack\nEffect The triggering Strike targets you instead of its intended target.\nActivate 1 Interact\nRequirements The black hole armor has absorbed six or more projectiles\nEffect All the projectiles absorbed by the armor appear out of thin air, as though transported there, falling in a 10-foot burst within 120 feet of you. Each creature in the burst takes 10d8 piercing damage with a check (reflex, dc:35, options:area-effect,damaging-effect) save. The absorbed projectiles are all expended, and the armor's joints stop glowing.",
      "bulk": 5,
      "price": {
        "gp": 8500
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
    "contentId": "pf2e:item:equipment-srd:numbing-tonic-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "EAgWYY1C4mDRfwqo",
      "slug": "numbing-tonic-major",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-elixirs/addiction-suppressant.webp"
    },
    "sourceHash": "sha256:9ae9eda87e595bb73912d256fa3d1b685b5a81ae273050df805e062192e7f7bb",
    "translatableHash": "sha256:eb0048d95343dc59b265db3d98bf575ca329a67ef7ec0627f3003ccca1f99ee8",
    "data": {
      "schemaVersion": 1,
      "name": "Numbing Tonic (Major)",
      "itemType": "consumable",
      "level": 16,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "elixir"
      ],
      "description": "Activate 1 (manipulate)\nNumbing tonic makes it easier to push through the pain of battle and shrug off otherwise debilitating blows. You gain 20 temporary Hit Points when you drink the elixir, and again at the start of each of your turns for 1 minute.\nEffect: Numbing Tonic",
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
    "contentId": "pf2e:item:equipment-srd:false-death-vial-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "FZxrYMcH0uH617EQ",
      "slug": "false-death-vial-greater",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/consumable.svg"
    },
    "sourceHash": "sha256:d5d9be6996983b33e5d00ff6fa4d22384991af7e18b748d916466deae2514af0",
    "translatableHash": "sha256:71f5a193362409f62b0655f50b96c5b228f507300537899294874cb099daaf33",
    "data": {
      "schemaVersion": 1,
      "name": "False Death Vial (Greater)",
      "itemType": "consumable",
      "level": 16,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical",
        "talisman"
      ],
      "description": "Activate f (concentrate)\nTrigger You would be reduced to 0 Hit Points by damage but not immediately killed\nRequirements You are unarmored.\nThis tiny crystal vial of oily liquid is typically attached to a pin or worn on a tether attached to the affixed article of clothing. When you Activate the vial, you avoid being knocked out and remain at 1 Hit Point, your Wounded condition increases by 1, and the talisman casts Drop Dead on you. The talisman teleports you to a clear space of your choice that you can see within 120 feet. This also transports any items you're wearing and holding with you, as well as up to one other creature currently in contact with you—including if you're carrying it in an extradimensional container. This effect has the teleportation trait.",
      "bulk": 0,
      "price": {
        "gp": 2000
      },
      "usage": "affixed-to-unarmored-defense-item",
      "category": "talisman",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:weapon-shot-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "jOuY6D1XmtHeax9H",
      "slug": "weapon-shot-major",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:fb1b1d0982832a0948befe4951678c99a3785da05cbfb35e993d6a52cb6c5002",
    "translatableHash": "sha256:5904edecf6c6c4683347c8912c8059a1b540cef304757171d79e78016674dd8c",
    "data": {
      "schemaVersion": 1,
      "name": "Weapon Shot (Major)",
      "itemType": "ammunition",
      "level": 16,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical"
      ],
      "description": "Ammunition any\nThe body of a weapon shot is translucent and filled with quicksilver. It imparts its magic to the weapon used to fire it or it summons a translucent weapon, made of force, to fire it. It's a favorite of killers and sharpshooters who need just one shot in a situation where carrying ammunition is easier than carrying a weapon.\nActivate 1 (concentrate)\nEffect For the Strike with which you consume the ammunition, the weapon is a +3 greater striking weapon, instead of those of the weapon firing it.\nActivate 2 (concentrate, manipulate)\nEffect A ghostly weapon made of force appears, wielded by you and loaded with the weapon shot you activated. The conjured weapon sublimates into motes of briefly luminous dust if the weapon shot deactivates without you using it or just after you use the activated shot. For the Strike with which it functions, the weapon is a +3 greater striking weapon.",
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
    "contentId": "pf2e:item:equipment-srd:wand-of-mercy-7th-rank",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "K8T5OYXjmniOvhmA",
      "slug": "wand-of-mercy-7th-rank",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:e5956b32bd381d01192120933a736766007def8a668532ea707a5c43b0eff519",
    "translatableHash": "sha256:845356ae418fb1229c3f0a7e487a54194d90a42f74f4e3fca5440170445fcc09",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Mercy (7th-rank)",
      "itemType": "equipment",
      "level": 16,
      "rarity": "common",
      "traits": [
        "magical",
        "wand"
      ],
      "description": "The pommel of this rose quartz wand resembles the stylized wings of an angel. When you cast its spell and choose not to make it nonlethal, the crystal deepens to blood red. The color reverts to rose when you cast the spell from the wand nonlethally.\nActivate Cast a Spell; the activation takes 2 if the spell normally takes 1 to cast, or 3 if the spell normally takes 2\nFrequency once per day, plus overcharge\nEffect You Cast the Spell, and can choose to give it the nonlethal trait.\nCraft Requirements Supply a casting of a spell of the appropriate rank. The spell must have a casting time of 1 or 2, it must deal damage, and it can't have the death, void, or nonlethal traits.",
      "bulk": 0.1,
      "price": {
        "gp": 7900
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-rolling-flames-7th-rank",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "kSsjGICDkNRuD7fV",
      "slug": "wand-of-rolling-flames-7th-rank",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:f2adcd3970fabd1f21bb824a7660323fde492c9cceda1ac533f43fc3c46ebf11",
    "translatableHash": "sha256:6d4d2252381764648944cffe9a1d5456ebe1e2874ffb917000c68da7f28f2504",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Rolling Flames (7th-Rank)",
      "itemType": "consumable",
      "level": 16,
      "rarity": "common",
      "traits": [
        "fire",
        "magical",
        "wand"
      ],
      "description": "The luminous design of red-orange cracks on this black obsidian wand suggests cooling lava.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast 7th-rank Floating Flame. If you create the flame on the ground, the ground in the sphere's square and all adjacent squares are coated in rolling flames until the start of your next turn. These are difficult terrain and hazardous terrain. A creature that moves on the ground takes 6 fire damage for every square of rolling flames it moves into. If a creature in the flames doesn't move on its turn, it takes the damage for each of the squares it's in at the end of its turn. The first time you Sustain the Spell each round, the sphere creates rolling flames again in its new location (or the same location if you chose not to move it), provided it's on the ground.\nCraft Requirements Supply a casting of floating flame of the appropriate rank.",
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
    "contentId": "pf2e:item:equipment-srd:wand-of-clinging-rime-7th-rank",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "OpEFPyX1jwuV7ljp",
      "slug": "wand-of-clinging-rime-7th-rank",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:2da90aaa7c38d8dd98ad8e5949afca3500567463fa479c9c313d9a0a0b8e4227",
    "translatableHash": "sha256:153712f0670677fe57174f1ab6f150edc41fa4f25e75bed6ed20914b13974b4e",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Clinging Rime (7th-rank)",
      "itemType": "consumable",
      "level": 16,
      "rarity": "common",
      "traits": [
        "cold",
        "magical",
        "wand",
        "water"
      ],
      "description": "A thin layer of frost coats this gnarled holly wand.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast 7th-rank Frigid Flurry. After you cast the spell, the ice crystals freeze to flesh and other surfaces, clinging to the creatures in the area. Each creature that fails its save takes 1d6 persistent cold damage.\nCraft Requirements Supply a casting of Frigid Flurry of the appropriate rank.",
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
    "contentId": "pf2e:item:equipment-srd:depth-charge-vi",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "pkb6lKSanfcxvLtQ",
      "slug": "depth-charge-vi",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:8a9bef98844f3fb811dae62e10e3889a98594ce3e28a59ee94213dc67597e4e4",
    "translatableHash": "sha256:43c018639777ca34a3ada671e68e4f19f4cf1f93d07f579cc85513b5df74c4d1",
    "data": {
      "schemaVersion": 1,
      "name": "Depth Charge VI",
      "itemType": "ammunition",
      "level": 16,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical"
      ],
      "description": "Ammunition any\nCarved with stylized images of water or aquatic life, depth charges that are fired underwater or at a submerged target function with their normal range increments and can hit no matter their normal damage type. This ammunition explodes if it hits a target underwater, dealing 13d6 bludgeoning damage in a 20-foot burst check (fortitude, dc:36, basic, showDC:all, options:area-effect) according to its type. This burst doesn't extend out of the water.",
      "bulk": 0,
      "price": {
        "gp": 1500
      },
      "usage": "",
      "category": "ammo",
      "group": "ammo"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:phoenix-cinder",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "po3Lhiccc0RQYikr",
      "slug": "phoenix-cinder",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:f03fa003ab0571a770daa39107914db1cbea9a7ab7493295ef95eb8ae6d3869b",
    "translatableHash": "sha256:1c615151f58e822845bb761cd9c83977ad03a33f0d9a9b140303a00025b51f9b",
    "data": {
      "schemaVersion": 1,
      "name": "Phoenix Cinder",
      "itemType": "consumable",
      "level": 16,
      "rarity": "rare",
      "traits": [
        "consumable",
        "fire",
        "primal"
      ],
      "description": "Activate 1 (manipulate)\nAn incandescent, multipronged crystal the color of dying fire, a phoenix cinder gives off pleasant warmth and a sense of peace. A low, soft chirruping around the crystal invokes the idea of using fire to cleanse and protect. The crystal offers this power to anyone who touches it. A partaker must be willing to gain the boon's effects.\nStage 1 (1 Week) The first time you enter this stage from a particular phoenix cinder, you are affected as if by Regenerate.\nFor 3 days after taking in the cinder, you are immune to fire. While in this stage or higher, you have fast healing equal to half your level, as well as resistance to fire damage equal to half your level. You gain a +1 circumstance bonus to saving throws (or any other defense) against fire. Treat the outcome of any saving throw you roll against fire effects as one step better. You can cast Ignition as an innate spell, and you have access to the following activation.\nActivate 1 (concentrate, fire)\nFrequency once per day\nEffect You wreathe yourself in flame for 1 minute. Adjacent creatures that hit you with a melee attack, as well as creatures that touch you or hit you with an unarmed attack, take 2d6 fire damage. You can Dismiss the activation.\nStage 2 (1 Month) You can use the activation once per hour. Always feverish and flushed, you feel as if temperatures lower than sweltering are cold. Reduce your current and maximum Hit Points by 2 × your level, and you have a weakness to cold damage equal to half your level. You have urges to burn and use fire when you can. When confronted with the opportunity to do so, you must succeed at a Will save to avoid it. Doing so once after each time you roll initiative is enough.\nIf you die at this stage or higher, your body burns from the inside out over 1d4, reducing you to fine ash. Anything flammable on you is destroyed. A phoenix emerges from your remains, but doesn't have the holy trait and is interested more in selfish pursuits and spreading fire than kindness. You also attempt a check (flat, dc:8); on a failure, the phoenix gains the unholy trait, and also thirsts for vengeance against the little beings like the one who dared to use its power for a time.\nStage 3 (1 Month) You now have fast healing equal to your level but reduce your current and maximum Hit Points by 4 × your level, rounded up, instead of 2 × your level. Also, you have a weakness to cold damage equal to your level and a weakness to holy equal to half your level. You can use the activation you previously gained once per minute, but you can no longer Dismiss it. Whenever you drop to 0 Hit Points, a flame strike erupts from a randomly chosen point on the edge of your space.\nStage 4 You die.\nPurging You must collect the remains of a phoenix of your level or higher who has been unable to self-resurrect, compressing the remains with powdered diamonds, opals, and rubies worth 75 gp × your level into an egg. You can then use Divine Immolation as if you dropped to 0 Hit Points during this boon's stage 3. If you do so, the phoenix whose remains you collected is reborn as if it used its Self-Resurrection, and the phoenix cinder's effects end on you.",
      "bulk": 0.1,
      "price": {},
      "usage": "touched",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:animal-repellent-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "PxrYRcawI6a3lRcf",
      "slug": "animal-repellent-major",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/consumable.svg"
    },
    "sourceHash": "sha256:4b03ed607a0d126384d4c24d68db55accdef8bff62c8ee7f368060df0720e362",
    "translatableHash": "sha256:44d4a2996c85b97c31f15867eade460a7b0d58001e056c36f38ae28292af65e0",
    "data": {
      "schemaVersion": 1,
      "name": "Animal Repellent (Major)",
      "itemType": "consumable",
      "level": 16,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "olfactory"
      ],
      "description": "Activate 1 (manipulate)\nAnimal repellent is a noxious alchemical substance that makes you repulsive to a certain kind of animal. You can, for example, make ape repellent, bear repellent, or snake repellent, but not a repellent that affects all animals. The repellent doesn't work on creatures that are similar to the kind of animal, but not actually animals—for example, bear repellent wouldn't work on werebears. Animal repellent is ineffective against animals with an Intelligence modifier of –3 or higher, such as awakened animals. When you initially learn the formula for animal repellent, you learn the formulas for all common animals. If no animals of a kind are common, such as sea serpents, you must learn the formula for that kind separately, and it has the same rarity as the least-rare creature of that kind.\nYou Activate animal repellent by sprinkling it on yourself or a creature within reach, or by spreading it on a surface in an area up to 10 feet square. The repellent lasts for 24 hours or until scrubbed clean with 1 minute of work (consisting of multiple Interact actions). The designated kind of animal can smell the repellent from three times as far away as normal.\nThe designated kind of creature typically avoids the coated creature or area, which smells foul and feels unnerving to it. If in combat or otherwise distressed, the creature can approach within 20 feet of the affected creature or area only if it succeeds at a Will save with a DC determined by the type of animal repellent. Once it succeeds at this save, the animal is temporarily immune for 1 minute. If the animal attacks in a way that causes it to taste or ingest the repellent, it must succeed at a check (fortitude, dc:35) save or become Sickened 1 (or Sickened 2 on a critical failure).",
      "bulk": 0.1,
      "price": {
        "gp": 1600
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-reaching-7th-rank",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "qeLAYEwUXNbri5eB",
      "slug": "wand-of-reaching-7th-rank",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:3b9767d1f2a5565267d7d0b49f207bb06f8553b4e341938b9f5f4d136ab73b29",
    "translatableHash": "sha256:f5174a55bda7b0a6c901e987b4234037d347923678859bbedc73fe345019039e",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Reaching (7th-Rank)",
      "itemType": "equipment",
      "level": 16,
      "rarity": "common",
      "traits": [
        "magical",
        "wand"
      ],
      "description": "This long, slender wand is constructed of silver, polished to a mirror shine.\nActivate Cast a Spell; This activation takes 2 if the spell normally takes 1 to cast, or 3 if the spell normally takes 2\nFrequency once per day, plus overcharge\nEffect You Cast the Spell. Its range increases by 30 feet. As normal for increasing ranges, if the spell normally has a range of touch, its range extends to 30 feet.\nCraft Requirements Supply a casting of a spell of the appropriate rank. The spell must have a casting time of 1 or 2, and must have a range.",
      "bulk": 0.1,
      "price": {
        "gp": 10000
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:life-shot-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "R6qfTzNv79GH1xHU",
      "slug": "life-shot-major",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/ammunition/life-shot.webp"
    },
    "sourceHash": "sha256:f360462b0359e4e6e9036e882cca83d4a9c919f1565e5f1c7eda070f01f2949e",
    "translatableHash": "sha256:2c2b9e63d90440c0c3e15a2c037d7f185acc2c57da90f8eab044dd5f25553cca",
    "data": {
      "schemaVersion": 1,
      "name": "Life Shot (Major)",
      "itemType": "ammunition",
      "level": 16,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "healing"
      ],
      "description": "Ammunition round\nActivate 1 (manipulate)\nLife shot is a special cartridge that carries a small dose of elixir of life. A creature hit by activated life shot takes no damage from the successful attack, instead receiving 8d4+11 healing healing and gaining a +3 item bonus to saving throws against diseases and poisons for 1 minute. On a critical hit, roll the healing received twice and take the better result (this is a fortune effect). A target willing to be hit by this attack is Off-Guard against it.\nEffect: Life Shot",
      "bulk": 0,
      "price": {
        "gp": 1500
      },
      "usage": "",
      "category": "ammo",
      "group": "ammo"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:tattletale-orb-moonstone",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "RFFUd06PQH4csvpr",
      "slug": "tattletale-orb-moonstone",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/held-items/crystal-ball-moonstone.webp"
    },
    "sourceHash": "sha256:9b08e985d49d33d8600d4e1dd599eedf0519cd48febd79776f725d4f18ad0d72",
    "translatableHash": "sha256:6c118a08ff5ecbc1147ae39f70362c33b97264645b2ca21ea8e6b47202222cf9",
    "data": {
      "schemaVersion": 1,
      "name": "Tattletale Orb (Moonstone)",
      "itemType": "equipment",
      "level": 16,
      "rarity": "rare",
      "traits": [
        "cursed",
        "magical",
        "scrying"
      ],
      "description": "A tattletale orb is a polished crystal sphere that appears to function as a Crystal Ball (Moonstone). If those whom you use the orb to scry on roll better than a critical failure on their saving throw, they receive a telepathic message alerting them to the scrying. A success or better at the save allows the target to choose to allow you to scry anyway, knowing they can use an aspect of the orb against you, according to the orb's type. A creature that rolls a critical success on the saving throw also learns your name and location. Once you Activate a tattletale orb or use it to cast one of your scrying spells, it fuses to you. You must succeed at a Will save, using the scrying Will DC of a crystal ball of the orb's type, to use another such device.\nTattletale orbs come in the same types as crystal balls, with the same activations and powers. However, your target must roll a critical failure on the saving throw for the orb to function as normal for that type of crystal ball.\nThe target is temporarily immune to the orb's mind reading for 24 hours and can use mind reading against you instead, as if the target used the orb.",
      "bulk": 0.1,
      "price": {
        "gp": 7500
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:swallow-spike-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "RRFyASbHcdclympe",
      "slug": "swallow-spike-major",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/runes/armor-property-runes/armor-property-runes.webp"
    },
    "sourceHash": "sha256:f00ffd97f8d8e1230e26b412118bea5bd3ad9612d6c09df75a2a9483a87247c0",
    "translatableHash": "sha256:a206f2e24ce089de54f93cd68f22371224e358c8dc0b43d054371170848882c8",
    "data": {
      "schemaVersion": 1,
      "name": "Swallow-Spike (Major)",
      "itemType": "equipment",
      "level": 16,
      "rarity": "common",
      "traits": [
        "magical"
      ],
      "description": "Your armor responds to your desire to break free of a creature grabbing you by growing spikes.\nActivate R (attack, concentrate)\nTrigger You become Grabbed, Restrained, or otherwise held Immobilized in a creature's grasp, such as by being engulfed or swallowed\nEffect Your armor suddenly grows spikes, attacking the triggering creature. The armor makes a melee attack with an attack modifier of 1d20+28 that deals 5d6 piercing damage. If the creature is swallowing or engulfing you, the attack deals an additional 3d6 untyped damage, and damage from this attack can cut you free if it equals or exceeds the Rupture value of the immobilizing ability. This attack gets an item bonus to the attack roll equal to the armor's item bonus to your AC and an item bonus to damage equal to double that amount.\nActivate 1 (attack, concentrate)\nRequirements You're being held Immobilized as described in the rune's other activation\nEffect Your armor attacks the creature immobilizing you. The armor makes a melee attack against the creature, as described in the rune's other activation.",
      "bulk": 0,
      "price": {
        "gp": 19250
      },
      "usage": "etched-onto-armor",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-dumbfounding-doom-7th-rank",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "SkBZG0AO2wpuKBLT",
      "slug": "wand-of-dumbfounding-doom-7th-rank",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:3fb8cd65439389f5e923dccccbaadbbb334274eb162c7b432e742883dd0a794b",
    "translatableHash": "sha256:79c73dfb4765f6120a26cef17064efab0d1aedc7e63ee796f9c787fa7df9d201",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Dumbfounding Doom (7th-rank)",
      "itemType": "consumable",
      "level": 16,
      "rarity": "common",
      "traits": [
        "emotion",
        "fear",
        "incapacitation",
        "magical",
        "mental",
        "prediction",
        "wand"
      ],
      "description": "Carvings of skulls, monsters, and all manner of violence decorate this wand of blackened bone, but it makes absurd sounds when Activated, such as a honking horn, a manic giggle, or a daydreamy sigh.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast 7th-rank Impending Doom, showing the target a potential death that's gruesome and absurd. If the target becomes Frightened by the spell, it also becomes Stupefied with a value 1 higher than the frightened value. This lasts for the duration of the spell.\nCraft Requirements Supply a casting of impending doom of the appropriate rank.",
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
    "contentId": "pf2e:item:equipment-srd:wand-of-teeming-ghosts-7th-rank",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "sLnkcAGiRQkwQrla",
      "slug": "wand-of-teeming-ghosts-7th-rank",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/wands/specialty-wands/wand-of-teeming-ghosts.webp"
    },
    "sourceHash": "sha256:47cc37228ea5abfc3357b523f822191bb07bdbc5a2182dc389cd2d19e2652aa2",
    "translatableHash": "sha256:4c53ebf13427748f24831487719f01d32da0ba9d73d98ec75b051dbc38a1ca99",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Teeming Ghosts (7th-Rank)",
      "itemType": "consumable",
      "level": 16,
      "rarity": "uncommon",
      "traits": [
        "magical",
        "wand"
      ],
      "description": "This pale wooden wand is carved to resemble a thigh bone with metal caps at each end. Ghostly tendrils seem to swirl around it every so often.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast False Vitality at 7th-rank. During the duration of the spell, wisps that resemble spirits flit around you as long as you have any temporary Hit Points from false vitality, and you can use the following action.\nActivation F (concentrate)\nTrigger You successfully impart the Frightened 1 condition to a creature\nRequirements You have at least 1 temporary Hit Point from false vitality\nEffect You end false vitality and increase the creature's frightened condition value to 2.\nCraft Requirements Supply a casting of false vitality at 7th-rank",
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
    "contentId": "pf2e:item:equipment-srd:headbands-of-translocation",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "son3QT3YfrBYlWPq",
      "slug": "headbands-of-translocation",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:5b572d1d77fac7b0a33cc604ce494e35f7d1275f216c27962a2cbf250859df5a",
    "translatableHash": "sha256:ee24714742e2dc052f4c3ee78991bdc99ab7145d5de8118dcc9c7933b6671319",
    "data": {
      "schemaVersion": 1,
      "name": "Headbands of Translocation",
      "itemType": "equipment",
      "level": 16,
      "rarity": "uncommon",
      "traits": [
        "invested",
        "magical",
        "teleportation"
      ],
      "description": "Headbands of translocation are silk bands that come in pairs and usually feature a prominent symbol of a nation or team. If both wearers Invest their headbands at the same time and think of the same symbol while doing so, both headbands change to display that symbol until they are removed. If you both have Invested your headbands, you can Aid each other without taking an action to prepare and when you get a critical failure when attempting to Aid an ally with a paired headband, you get a failure instead.\nActivate 1 (manipulate)\nFrequency once per day\nEffect You remove your headband, which teleports you to a space adjacent to the other Invested wearer's location, if you are within 1 mile of each other.",
      "bulk": 0,
      "price": {
        "gp": 10000
      },
      "usage": "wornheadwear",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:lyrakien-staff-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "uX8urrzOQM5wdoTD",
      "slug": "lyrakien-staff-major",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:cfcaa3c71e4cafb91e51a974e08253b3f053b9af6b5c56d36e5bb2c86a9d1ddb",
    "translatableHash": "sha256:66ac4e0c8a9cb3dd53b2ac5739a7d42be053b27e31a576793b43dff6f32f2932",
    "data": {
      "schemaVersion": 1,
      "name": "Lyrakien Staff (Major)",
      "itemType": "weapon",
      "level": 16,
      "rarity": "common",
      "traits": [
        "magical",
        "staff",
        "two-hand-d8"
      ],
      "description": "A crystalline sphere, swirling with constantly shifting constellations, sits atop a lyrakien staff, a silver shaft that sparkles with the gentle glow of starlight. Desnans first created the staves, inspired by the music- and freedom-loving lyrakien azatas, but these staves are popular with spellcasters of all faiths who like travel, art, or the stars. While wielding a lyrakien staff, you gain a +2 circumstance bonus on saving throws against incapacitation effects.\nActivate Cast a Spell\nEffect You expend a number of charges from the staff to cast a spell from its list.\n• Cantrip Guidance, Summon Instrument\n• 1st Concordant Choir\n• 2nd Guiding Star, Sure Footing\n• 3rd Dream Message, Safe Passage, Wanderer's Guide\n• 4th Concordant Choir, Dream Message, Unfettered Movement, Sure Footing\n• 5th Safe Passage, Summon Celestial (azatas only)\n• 6th Concordant Choir, Zealous Conviction\n• 7th Cosmic Form, Sure Footing\nCraft Requirements Supply one casting of all listed ranks of all listed spells.",
      "bulk": 1,
      "price": {
        "gp": 8600
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
    "contentId": "pf2e:item:equipment-srd:wand-of-mental-purification-7th-rank",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "vVJy2xHuzOgm7e6Y",
      "slug": "wand-of-mental-purification-7th-rank",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/held-items/wand-of-mental-purification.webp"
    },
    "sourceHash": "sha256:922ba3d6e161a4f0d1a986874b42faa0f960b1ac54b7304996ccfa523c59a771",
    "translatableHash": "sha256:237b9ea3ee0afa8f41ad24dfd0ba370a1f81fa52651d71d617541fc29cdc1012",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Mental Purification (7th-rank)",
      "itemType": "consumable",
      "level": 16,
      "rarity": "common",
      "traits": [
        "emotion",
        "healing",
        "magical",
        "mental",
        "wand"
      ],
      "description": "Red feathers hang from the handle of this ivory wand. Holding it brings a sense of gentle calm.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast 7th-rank Soothe, and can attempt to counteract one mental effect on the same target. Treat the Soothe spell's rank as 1 higher for this counteract check.\nCraft Requirements Supply a casting of soothe of the appropriate rank.",
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
    "contentId": "pf2e:item:equipment-srd:blister-ammunition-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "xm8FszDcmRrnlk09",
      "slug": "blister-ammunition-greater",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:a7965f8525972c2ee899d8815696eb369e77227f26e0c1dd95721cb3637c7a67",
    "translatableHash": "sha256:0cb37807131964d2f786537dc442cfdf428b63e0201795682884422ce0a531bf",
    "data": {
      "schemaVersion": 1,
      "name": "Blister Ammunition (Greater)",
      "itemType": "ammunition",
      "level": 16,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "poison"
      ],
      "description": "Ammunition any\nActivate 1 (manipulate)\nBlister ammunition is loaded with alchemically processed irritants, such as pollen, pepper, and formic acid. A creature hit by activated blister ammunition must attempt a check (fortitude, dc:35) save or begin to itch uncontrollably for 10 rounds in addition to damage the attack normally deals. On a critical hit, increase the Fortitude DC by 2 (check (fortitude, dc:37)), and the target is Dazzled for 1 round. For the duration, each time the target attempts a concentrate action, it must attempt a check (flat, dc:8), losing the action on a failure. An affected creature can use a single Interact action to scratch and sneeze, allowing it to automatically pass the flat check. The effect ends early once an affected creature spends 3 Interact actions scratching and sneezing. These Interact actions don't need to be consecutive.",
      "bulk": 0,
      "price": {
        "gp": 1400
      },
      "usage": "",
      "category": "ammo",
      "group": "ammo"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:radiant-prism",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "xswNe3hrxy0f01QQ",
      "slug": "radiant-prism",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/other/spellhearts/radiant-prism.webp"
    },
    "sourceHash": "sha256:fd0d9e07e28ab2247e9a1bbd1cad90e0d9e958a5743307e95f4616e3e10807b7",
    "translatableHash": "sha256:6c36277d8227798aec7ad728c1ca52b07c2281064c850fedcaeae5ff9599404f",
    "data": {
      "schemaVersion": 1,
      "name": "Radiant Prism",
      "itemType": "equipment",
      "level": 16,
      "rarity": "common",
      "traits": [
        "magical",
        "spellheart"
      ],
      "description": "This glass prism pays homage to its namesake pantheon—the Radiant Prism of Sarenrae, Desna, and Shelyn. Any armor or weapon the prism is affixed to glows softly with colored lights. The spell DC of any spell cast by activating this item is 35.\n• Armor (light) After you cast a non-cantrip spell by activating the prism, you glow with dim light in a multitude of shimmering hues, shedding light like a Torch and making you Concealed until the end of your next turn.\n• Weapon After you cast a non-cantrip spell by activating the prism, your Strikes with the weapon gain the Brilliant property rune until the end of your next turn.\nActivate Cast a Spell\nEffect You cast Light.\nActivate Cast a Spell\nFrequency once per day\nEffect You cast Fiery Body",
      "bulk": 0,
      "price": {
        "gp": 8600
      },
      "usage": "affixed-to-armor-or-a-weapon",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:silver-crescent-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "XWO5pMQcYNybqWzf",
      "slug": "silver-crescent-greater",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:541b96a22c6d5fb11295962006af60d1589b171dc8ef850b436cd77bc90acb00",
    "translatableHash": "sha256:29b2d8f7de230269df042a75fd316aae8106d0c2b312a1ce0a788b57c221f57c",
    "data": {
      "schemaVersion": 1,
      "name": "Silver Crescent (Greater)",
      "itemType": "consumable",
      "level": 16,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "light",
        "lozenge"
      ],
      "description": "Activate 1 (manipulate)\nA piquant tamarind and chili-lime flavor infuses a silver crescent, which was first created to aid those battling the undead. For 1 hour, you shed cool, white light like a torch, and you gain a +3 item bonus to saving throws against olfactory effects. While shedding this light, you can't be Concealed if you're visible, and if you're Invisible, you're concealed instead rather than being undetected.\nEffect: Silver Crescent\nSecondary Effect 2\nEffect A ray of light descends on a 5-foot square of your choice within 120 feet. Any creature in that space takes 9d6 vitality damage with a check (reflex, dc:35, basic, options:area-effect) and is Dazzled until the end of its next turn on a failed save. This is treated as silver for the purposes of weaknesses, resistances, and the like. The silver crescent becomes inert.",
      "bulk": 0,
      "price": {
        "gp": 1400
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:jyotis-feather-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "y4dGIbK5wGUJTufR",
      "slug": "jyotis-feather-major",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:4e72017f0c7ce51da13dc0c74327778b711f807a3591735256adddc483a862e0",
    "translatableHash": "sha256:8d1309012ec7c110de4f8d80c1550214b92eb3ac7aedb3d71b1649b97845ddda",
    "data": {
      "schemaVersion": 1,
      "name": "Jyoti's Feather (Major)",
      "itemType": "equipment",
      "level": 16,
      "rarity": "common",
      "traits": [
        "healing",
        "magical",
        "spellheart",
        "vitality"
      ],
      "description": "A jyoti's feather is a shimmering red-and-gold feather that seems almost metallic, although it's delicate and flexible to the touch. Though most aren't made from true jyoti feathers, as the reclusive outsiders avoid visitors from the Universe, the creatures' connection to life energy lent these spellhearts their name.\n• Armor You gain a +4 item bonus to saving throws against death effects and void energy.\n• Weapon The weapon has the Greater Vitalizing rune while the feather is affixed.\nEffect: Jyoti's Feather - Armor\nEffect: Jyoti's Feather - Weapon\nActivate Cast a Spell\nEffect You cast Stabilize.\nActivate Cast a Spell\nFrequency once per day\nEffect You cast 6th-rank Healing Well\nActivate Cast a Spell\nFrequency once per day\nEffect You cast Field of Life",
      "bulk": 0,
      "price": {
        "gp": 9400
      },
      "usage": "affixed-to-armor-or-a-weapon",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-dazzling-rays-7th-rank",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "YPBMrIvJOZ6zSZVm",
      "slug": "wand-of-dazzling-rays-7th-rank",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:84b951300ca51ebcc97e0e7644bfbad850263ff59a4952423cf2c5d7ae580826",
    "translatableHash": "sha256:d496617036ad907837892cf7d20bf1ff2dbd3a1b055cb0a5f8fd0dd0451d2e71",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Dazzling Rays (7th-rank)",
      "itemType": "consumable",
      "level": 16,
      "rarity": "common",
      "traits": [
        "fire",
        "holy",
        "light",
        "magical",
        "wand"
      ],
      "description": "Solidified radiance comprises this slender, featureless wand. It sheds bright light in a 20-foot radius and dim light for the next 20 feet. After you Activate the wand, the light fades, so it only sheds dim light in a 20-foot radius. The wand returns to its original brightness each dawn.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast 7th-rank Holy Light, dazzling your target with the beam's intensity. A creature that takes damage from the spell is Blinded for 1 round and Dazzled for a number of rounds equal to the spell rank. On a critical success on the attack roll, the target is also blinded for as long as it's dazzled from the spell. However, it can attempt a check (fortitude) saving throw against your spell DC at the end of each of its turns, ending the blinded condition on a success (but remaining dazzled).\nCraft Requirements Supply a casting of holy light of the appropriate rank.",
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
    "contentId": "pf2e:item:equipment-srd:faith-tattoo-true",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "yqAVU3Y9w4O19e24",
      "slug": "faith-tattoo-true",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:1de711fe69b885778148f145130e519dd66c0f946a6853a62366be7f1be03f9d",
    "translatableHash": "sha256:6d70a1a6659161cd631a50f4796308634639d6613bf903d6642941370df6606f",
    "data": {
      "schemaVersion": 1,
      "name": "Faith Tattoo (True)",
      "itemType": "equipment",
      "level": 16,
      "rarity": "common",
      "traits": [
        "divine",
        "invested",
        "tattoo"
      ],
      "description": "Prerequisites worshipper of a deity\nYou have marked your body to show your devotion to a deity. This tattoo could be the deity's religious symbol, another image that evokes that deity, or another mark you gained through your devotion. The tattoo serves as a silver religious symbol of the deity. Provided you keep the tattoo uncovered, you need not wield it to gain that benefit.\nWhen you get the tattoo and aren't sanctified, you can choose to sanctify yourself to your deity.\nIf you cease meeting the prerequisites, the tattoo fades, and you lose its benefits until you perform an Atone ritual and meet the prerequisites thereafter.\nActivate Cast a Spell\nFrequency once per day\nEffect The tattoo casts a 7th-rank Harm, Heal, or the 7th-rank spell from your deity's cleric spells. You can choose harm or heal only in accord with the deity's divine font. If the deity allows either spell, choose one the tattoo can cast when you receive the tattoo. The DC for any of these spells is 35.",
      "bulk": 0,
      "price": {
        "gp": 8000
      },
      "usage": "tattooed-on-the-body",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-paralytic-shock-7th-rank",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "ZjcRzYBjtPtb01MB",
      "slug": "wand-of-paralytic-shock-7th-rank",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:ecf65f6100e70d3890f653ffe0199e793460ec7c84a95feb4205d4c1f10cabc1",
    "translatableHash": "sha256:de3ed93724f25b49225a48f4f722332194a44eceaea458e654a744164b6d5855",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Paralytic Shock (7th-Rank)",
      "itemType": "consumable",
      "level": 16,
      "rarity": "common",
      "traits": [
        "electricity",
        "magical",
        "mental",
        "wand"
      ],
      "description": "A two-pronged metal rod, this wand has a handle coated in thick rubber. Each prong ends in a copper coil. When Activated, the wand produces a loud zapping sound.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast 7th-rank Paralyze, electrocuting the target into immobility. Each target takes 2d12 electricity damage at the start of its turns while it remains stunned or Paralyzed due to the spell.\nCraft Requirements Supply a casting of paralyze of the appropriate rank.",
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
    "contentId": "pf2e:item:equipment-srd:tradecraft-tattoo-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "0zBuCoOeNkIwi8bj",
      "slug": "tradecraft-tattoo-greater",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:712b717bc7612b0ffdff585a35ba0c39002d6459e91c9746a0cc08148c7c2f30",
    "translatableHash": "sha256:8c871ca4407c3c7befb51410c4502deebb0bd6eefb596046cea3212bf8606797",
    "data": {
      "schemaVersion": 1,
      "name": "Tradecraft Tattoo (Greater)",
      "itemType": "equipment",
      "level": 17,
      "rarity": "common",
      "traits": [
        "invested",
        "magical",
        "tattoo"
      ],
      "description": "Crafters choose tattoos that represent their dedication and skill in their chosen field. Such tattoos might adorn the arm, fingers, or eyes, and they take the form of artistic patterns or depict tools of the trade, such as anvils, paintbrushes, or trowels. You gain a +3 item bonus to Crafting checks. Furthermore, when you roll a critical failure on a Crafting check to Earn Income, treat it as a failure instead.\nActivate 1 minute (concentrate, manipulate)\nFrequency once per day\nEffect The tattoo casts Creation. You choose the item and its appearance, and whether the spell is 4th or 5th rank. This spell's duration is unlimited but ends when you Activate the tattoo again.",
      "bulk": 0,
      "price": {
        "gp": 13000
      },
      "usage": "tattooed-on-the-body",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:energy-mutagen-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "34MbgwW1SGlowyk2",
      "slug": "energy-mutagen-major",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-elixirs/energy-mutagen.webp"
    },
    "sourceHash": "sha256:7beb1f14b111f77e98d6d46d4f1452396e6ec1b0df85e9eaf4797fc46deadf49",
    "translatableHash": "sha256:5c02d5c24ae77b01e27c2332f3bd5020e5f7b4c3e4d9406ac057988ae963f584",
    "data": {
      "schemaVersion": 1,
      "name": "Energy Mutagen (Major)",
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
      "description": "Activate A (manipulate)\nWhen created, this mutagen is attuned to one of four energy types: acid, cold, electricity, or fire. When consumed, the mutagen suffuses your body with energy that spills out whenever you attack. At higher levels, it can even grant you the ability to unleash the energy in controlled bursts.\nBenefit You gain resistance 20 to the attuned energy type. Whenever you score a hit with a melee weapon, add 2d6 damage of the attuned energy type. In addition, you can end the benefits of this mutagen to unleash a 30-foot cone of energy as a 2-action activity. This deals 3d6 damage of the attuned type for every full 10 minutes of duration remaining (maximum 12d6) to each creature in the area, with a check (reflex, dc:32, basic) save.\nDrawback You gain weakness 5 to the other three energy types.\nDuration 1 hour.\nEffect: Energy Mutagen (Major)",
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
    "contentId": "pf2e:item:equipment-srd:zealot-staff",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "5MuAq1wFhy5NE0U0",
      "slug": "zealot-staff",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:b25647da4742d516125cbbfa93783959a1efd38d6323699f75375f90e62f7761",
    "translatableHash": "sha256:6c77280360517b3c0cc76215d757ad36aab37d8845b5b7c2d144c780f61dc614",
    "data": {
      "schemaVersion": 1,
      "name": "Zealot Staff",
      "itemType": "weapon",
      "level": 17,
      "rarity": "common",
      "traits": [
        "divine",
        "staff",
        "two-hand-d8"
      ],
      "description": "A zealot staff's color, iconography, and materials vary depending on the faith it's dedicated to. An Iomedaean staff might be forged of gold and shaped like an ornamental sword, while a Lamashtan one could instead be made of blackened iron depicting monstrous faces. Used as a weapon, the staff is a +3 greater striking staff. The staff represents vehement support of the deity to whom the staff is dedicated, punishing defiance. When you prepare this staff, if you don't worship its deity, you become Drained 1 until your next daily preparations.\nActivate F (concentrate, sanctified, spirit)\nFrequency once per 10 minutes\nTrigger You hit with a Strike using the staff\nEffect A vicious blast of deific power explodes as you hit. You deal an additional 1d4 spirit damage per damage die of the staff to the target of your Strike.\nActivate Cast a Spell\nEffect You expend a number of charges from the staff to cast a spell from its list. Add the cleric spells granted by your deity to the list for their rank and each higher rank. For example, a zealot staff of Sarenrae would add breathe fire at 1st through 7th rank, fireball at 3rd through 7th rank, and wall of fire at 4th through 7th rank.\n• Cantrip Divine Lance\n• 1st Bane\n• 2nd Augury\n• 3rd Warding Aggression\n• 4th Divine Wrath\n• 5th Crisis of Faith, Divine Wrath\n• 6th Spiritual Armament, Zealous Conviction\n• 7th Crisis of Faith, Divine Decree\nCraft Requirements You worship the deity to which the staff is dedicated. Supply one casting of all listed spells, including your deity's cleric spells.",
      "bulk": 1,
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
    "contentId": "pf2e:item:equipment-srd:avalanche-boots",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "755XG3gP2MWYBXy5",
      "slug": "avalanche-boots",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:fc843d088f4097e87f12e8db1d274ef63d7f0acf03a4eca8b7532c16e904566f",
    "translatableHash": "sha256:0a5effd8a9067d1d29711d3cf3ad9666e814459da3a54c80b4853ba98a2d1677",
    "data": {
      "schemaVersion": 1,
      "name": "Avalanche Boots",
      "itemType": "equipment",
      "level": 17,
      "rarity": "common",
      "traits": [
        "apex",
        "invested",
        "magical"
      ],
      "description": "While the insides of these boots are comfortable, fur-lined leather, the outsides are a jumble of slate plates, giving the impression of a rockslide. You gain a +3 item bonus to Athletics checks and a +2 circumstance bonus to Force Open and Shove. When you invest the boots, you either increase your Strength modifier by 1 or increase it to +4, whichever would give you a higher value.\nActivate F (concentrate)\nFrequency once per hour\nTrigger You succeed or critically succeed with a Shove\nEffect If the Shove was a success, you push your opponent up to 10 feet instead of 5 feet. If the Shove was a critical success, you push your opponent up to 20 feet, and you can then choose to knock them Prone.",
      "bulk": 1,
      "price": {
        "gp": 15000
      },
      "usage": "wornshoes",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:hungering-maw",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "alUdoHA3sbaSJL9f",
      "slug": "hungering-maw",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/consumable.svg"
    },
    "sourceHash": "sha256:38ef312060f6573a8318d6d7d2caa177ebcf0da5aaaa8c69fd6d80bdeefe525a",
    "translatableHash": "sha256:48db701f2dc7361c5b4cca7ac44e6d8ff43b77f2c7ec2e167b27ce31840f94cd",
    "data": {
      "schemaVersion": 1,
      "name": "Hungering Maw",
      "itemType": "consumable",
      "level": 17,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical",
        "talisman"
      ],
      "description": "Activate f (concentrate)\nTrigger You attempt a saving throw against a possession effect\nRequirements You are a master in Will saves.\nA shining onyx gemstone clutched in a pair of black steel jaws, this pendant is a potent defense against hostile spirits and other beings who commandeer the bodies of others. When you Activate it, you gain a +4 item bonus to your saving throw against the triggering effect. If your result prevents you from being possessed, the creature that attempted to possess you is subject to a DC 37 Seize Soul spell, which can trap it in the talisman as if it had recently died. The talisman's magic is exhausted after use, but a soul trapped this way remains imprisoned inside, as detailed in the spell description. Starting at the end of its next turn, the trapped creature gets a new save to end the effect at the end of each of its turns.",
      "bulk": 0,
      "price": {
        "gp": 2200
      },
      "usage": "affixed-to-armor",
      "category": "talisman",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:false-hope",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "bASMkq9syBtpaXok",
      "slug": "false-hope",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/consumable.svg"
    },
    "sourceHash": "sha256:c72768e36376b4b1aa73c77e7d2effdcc9ab63cf0d8d03878ec5183f67ecdc93",
    "translatableHash": "sha256:86ab09b4dc0babe9d972ea0476281ffc94b4856be7759683c802aee13f90420a",
    "data": {
      "schemaVersion": 1,
      "name": "False Hope",
      "itemType": "consumable",
      "level": 17,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "injury",
        "poison",
        "virulent"
      ],
      "description": "Activate 2 (manipulate)\nThis poison is an insidious distillation of the venom of the boomslang snake. It acts slowly and cyclically, giving its victim a false sense that the poison has failed to take hold or its effects have ended. The GM makes the target's saving throws in secret during any stage that has no effect.\nSaving Throw check (fortitude, dc:37) (secret)\nMaximum Duration 10 rounds\nStage 1 no effect (1 round)\nStage 2 10d8 poison damage (1 round)\nStage 3 no effect\nStage 4 12d8 poison damage (1 round)",
      "bulk": 0.1,
      "price": {
        "gp": 2600
      },
      "usage": "held-in-two-hands",
      "category": "poison",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:bendy-arm-mutagen-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "bvIVxDq1wh6IavHP",
      "slug": "bendy-arm-mutagen-major",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:a0b0a60b40551f3f392cbcce91ac0ecd026224d364600104e4adc01872a2d17d",
    "translatableHash": "sha256:0c4318942048eddd6ded7befd38e53924a54f83ea0c03a17f779ae40a2efe240",
    "data": {
      "schemaVersion": 1,
      "name": "Bendy-Arm Mutagen (Major)",
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
      "description": "Activate 1 Interact\nFor 1 hour your limbs become extremely limber, letting you stretch and twist to extreme degrees at the cost of fine motor skills.\nBenefit You gain a +4 item bonus to Acrobatics checks to Escape, Squeeze, and Tumble Through, and you increase your reach by 15 feet.\nDrawback You take a –1 penalty to Athletics checks, Stealth checks, Thievery checks, and attack rolls, and a –1 penalty per damage die to all weapon and unarmed attack damage.\nEffect: Bendy-Arm Mutagen (Major)",
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
    "contentId": "pf2e:item:equipment-srd:skunk-bomb-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Dv1bozSbR39McpWd",
      "slug": "skunk-bomb-major",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:e4e1022a6406965033c91e9c7976d0f89ed72b14b1b3d00c0b03fdf2e51ff025",
    "translatableHash": "sha256:7a9057cfcc726a9bcf538d09c194b7d5cefe1edef4fa5fe9b97f8ab70c7dfd33",
    "data": {
      "schemaVersion": 1,
      "name": "Skunk Bomb (Major)",
      "itemType": "weapon",
      "level": 17,
      "rarity": "common",
      "traits": [
        "alchemical",
        "bomb",
        "consumable",
        "olfactory",
        "poison",
        "splash"
      ],
      "description": "Activate 1 Strike\nSkunk bombs are made from the concentrated odors of xulgaths, hezrous, and other creatures with natural or supernatural stench. The bomb grants a +3 item bonus to attack rolls and deals 4d4 poison damage and 4 poison splash damage. Any creature hit by the bomb or in its splash area must attempt a check (fortitude, dc:37) saving throw. Creatures in the splash area treat the results of their saving throw as one step better.\nCritical Success The target is unaffected.\nSuccess The target is Sickened 1.\nFailure The target is sickened 1 and Slowed 1 while sickened.\nCritical Failure The target is Blinded for 1 round, Sickened 2, and slowed 1 while sickened.\nCreatures sickened by the bomb emit an odor that lasts 10 minutes after the sickened condition ends (or 1 hour if they were also blinded). The odor can be removed or neutralized by using prestidigitation or similar magic or by spending 10 minutes scrubbing with ample soap and water. While the odor lasts, creatures within 30 feet can smell the target, enabling even those with a weak sense of smell to detect its presence, and all creatures gain a +1 item bonus to Track the affected creature for as long as it has the odor. A creature that has imprecise or precise scent doubles the range at which it can detect the target using this scent.",
      "bulk": 0.1,
      "price": {
        "gp": 2400
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
    "contentId": "pf2e:item:equipment-srd:armbands-of-the-gorgon",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "dxRKFkFeCDQLLEyT",
      "slug": "armbands-of-the-gorgon",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:53ee0c1b5edc62a786d7bcc63fb55e5fc8f49111b9b82b862ff43156c1edc85a",
    "translatableHash": "sha256:54beb492b62a9f9f514e62f7c1838c7bc4aaa37badf3efb00729c288845e28de",
    "data": {
      "schemaVersion": 1,
      "name": "Armbands of the Gorgon",
      "itemType": "equipment",
      "level": 17,
      "rarity": "common",
      "traits": [
        "apex",
        "invested",
        "magical"
      ],
      "description": "Each of these shining, bluish-gray metal armbands is adorned with the plated visage of a gorgon's head. When targeted by a spell or effect with the incapacitation effect, you treat the result of your save as if it were one degree of success better, and the result of any check made to inflict such an effect on you as one degree of success worse (as if you were more than twice the rank of the spell or effect targeting you). When you invest the armbands, you either increase your Constitution modifier by 1 or increase it to +4, whichever would give you a higher value.\nActivate 1 (manipulate)\nFrequency once per day\nEffect You clap the bracers together and remove a single condition of your choice currently afflicting you. If the condition is permanent, it's instead suppressed for 1 hour.",
      "bulk": 0.1,
      "price": {
        "gp": 15000
      },
      "usage": "wornarmbands",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:spiderfoot-brew-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "ETLSXa4Po518z9Qx",
      "slug": "spiderfoot-brew-greater",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:860191fc9f588ac10ee9f677e8dbdd80fb3c4a6114483328d7851f148991ba74",
    "translatableHash": "sha256:411437fff12406c562cf59c375a799713125d645a40281d973c4692ab0f7f5a3",
    "data": {
      "schemaVersion": 1,
      "name": "Spiderfoot Brew (Greater)",
      "itemType": "consumable",
      "level": 17,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "elixir",
        "polymorph"
      ],
      "description": "Activate 1 (manipulate)\nThis gelatinous, sticky fluid is made from the silk glands of giant spiders. When you drink a spiderfoot brew, tiny clinging hairs grow on your hands and feet, granting you a climb Speed of 25 feet and a +3 item bonus to athletics checks made to climb for 1 hour.\nEffect: Spiderfoot Brew (Greater)",
      "bulk": 0.1,
      "price": {
        "gp": 2500
      },
      "usage": "held-in-one-hand",
      "category": "elixir",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:eye-slash-true",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "GyDASe4CV3q3H6kh",
      "slug": "eye-slash-true",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:b6a29198720883e7daddb39e645952f246acf5d7d913f6334f875c50d744ab25",
    "translatableHash": "sha256:f655f76130ff351b35fbc1eb296ed1dec334fa83f1a9c87fc00548d151988303",
    "data": {
      "schemaVersion": 1,
      "name": "Eye Slash (True)",
      "itemType": "equipment",
      "level": 17,
      "rarity": "common",
      "traits": [
        "invested",
        "magical",
        "tattoo"
      ],
      "description": "Small scars or marks around your eye improve your distant vision. These scars are especially common among orc scouts, who favor scars shaped like eagle talons. You can see four times farther than normal. If you have darkvision, you can see blood in color. Higher-level versions of an eye slash are larger and more elaborate scars or marks, radiating out around the eye.\nThe tattoo also grants you a +3 item bonus to Perception checks that involve sight.",
      "bulk": 0,
      "price": {
        "gp": 15000
      },
      "usage": "tattooed-on-the-body",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:breathtaking-vapor",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "H20eUVst7rgwhUb6",
      "slug": "breathtaking-vapor",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/consumable.svg"
    },
    "sourceHash": "sha256:853f15f10d4dd7c90f9f9f1ae3967cb6b538ec52496b291b8506e91d1a9509b6",
    "translatableHash": "sha256:7d11abb6ca98933c2eba1a204f6a40b2749df3404b2f74041400f5b138813f5d",
    "data": {
      "schemaVersion": 1,
      "name": "Breathtaking Vapor",
      "itemType": "consumable",
      "level": 17,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "consumable",
        "inhaled",
        "poison"
      ],
      "description": "Activate 1 (manipulate)\nThis colorless mist has a mild, waxy scent that precedes acute shortness of breath. Creatures that don't need to breathe can still take the poison's damage but are immune to its other effects.\nSaving Throw check (fortitude, dc:38)\nOnset 1 round\nMaximum Duration 6 rounds\nStage 1 6d6 poison damage, Drained 1, and can't breathe\nStage 2 8d6 poison damage, Drained 2, and reduce remaining air by 1 additional round\nStage 3 10d6 poison damage, Drained 3, and reduce remaining air by 2 additional rounds",
      "bulk": 0.1,
      "price": {
        "gp": 3000
      },
      "usage": "held-in-one-hand",
      "category": "poison",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:troubadours-cap",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "h7OCAvvnUnCIM9Aj",
      "slug": "troubadours-cap",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:2b77c67fe7b022bb11eaebe5ecc042c6fad05878dcb519e82174e769bb6b7dd0",
    "translatableHash": "sha256:e24462cc9a60d6a81bc9e0eff46b8f330ff4e59541ad4cdbce3b38039b03695d",
    "data": {
      "schemaVersion": 1,
      "name": "Troubadour's Cap",
      "itemType": "equipment",
      "level": 17,
      "rarity": "common",
      "traits": [
        "apex",
        "invested",
        "magical"
      ],
      "description": "This jaunty cap can take the form and color of any type of hat you wish upon investing the item, but it always has a peacock feather jutting out from one side. You gain a +2 item bonus to Diplomacy and Performance checks while wearing the cap. When you invest the cap, you either increase your Charisma modifier by 1 or increase it to +4, whichever would give you a higher value.\nActivate 2 (concentrate)\nFrequency once per hour\nEffect You cast Hypnotize (DC 37).\nActivate 2 (manipulate)\nFrequency once per day\nEffect Picking the feather from your cap, you throw it toward a target, casting Prismatic Spray (DC 35).",
      "bulk": 0,
      "price": {
        "gp": 15000
      },
      "usage": "wornheadwear",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:moonlit-spellgun-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "iYOBu0hMYzqFYvZN",
      "slug": "moonlit-spellgun-major",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/consumable.svg"
    },
    "sourceHash": "sha256:c534c68be002afeee554068bf8d095728b94feced349ad7e07c8ed811c30ae13",
    "translatableHash": "sha256:e7fbfae6844485f583b267674479005b2bce4a1917d9b44896d258f680954f5d",
    "data": {
      "schemaVersion": 1,
      "name": "Moonlit Spellgun (Major)",
      "itemType": "consumable",
      "level": 17,
      "rarity": "common",
      "traits": [
        "attack",
        "consumable",
        "fire",
        "light",
        "magical",
        "spellgun"
      ],
      "description": "Activate 2 Strike\nElegant silver filigree contains the body of this ephemeral item, which is made of solid light. Its shape resembles a pistol, and it's often carried by hunters of werecreatures and vampires. You Activate the spellgun by aiming it at one creature and making your choice of a spell attack roll or a firearm attack roll against the target's AC. This spellgun has a range increment of 30 feet. The spellgun emits a silvery ray of pure moonlight that deals fire damage depending on its type. The spellgun's damage is treated as silver for the purposes of weaknesses, resistances, and the like.\nCritical Success The target takes double damage and is Dazzled until the start of your next turn. If it has a weakness to silver or a resistance that can be bypassed by silver, it's also Enfeebled 1 for 1 minute.\nSuccess The target takes full damage and is dazzled until the start of your next turn.\nThe damage is 18d8 fire damage at night, or 18d6 fire damage at other times.",
      "bulk": 0.1,
      "price": {
        "gp": 3000
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:pilferers-gloves",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "JnNZjAk32269e8VO",
      "slug": "pilferers-gloves",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:d8be5a9f81583fbe4d597694545319bba2ca4e246fb621611191d6eb560baa9f",
    "translatableHash": "sha256:678566789ba259532feb4d90fb47a9393556196e180c39632bd114c516bf578c",
    "data": {
      "schemaVersion": 1,
      "name": "Pilferer's Gloves",
      "itemType": "equipment",
      "level": 17,
      "rarity": "common",
      "traits": [
        "apex",
        "invested",
        "magical"
      ],
      "description": "Made of soft and subtle black leather, these gloves fit tightly but aren't uncomfortable and don't impede your sense of touch. As long as you're trained in Thievery while wearing these gloves, you're always considered one skill rank higher than your actual rank. If you possess a Legendary skill rank in Thievery, you gain a +2 item bonus to Thievery checks instead. When you invest the gloves, you either increase your Dexterity modifier by 1 or increase it to +4, whichever would give you a higher value.\nActivate R (concentrate)\nFrequency once per day\nTrigger You fail or critically fail a Thievery skill check\nEffect If you failed the Thievery skill check, you succeed at that check instead. If you critically failed, you fail instead.",
      "bulk": 0.1,
      "price": {
        "gp": 15000
      },
      "usage": "worngloves",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:magnetic-shot-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "JqKNiEJxSZX1sD06",
      "slug": "magnetic-shot-greater",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:d659e3244ed4524ec57e6abe76120aec50a457e95cba44503d37c104720cf3bc",
    "translatableHash": "sha256:c16dd0f4d7d198d30d4fd1643eb4f46e31fc8f450cc860c2c3ddea2885e2bee2",
    "data": {
      "schemaVersion": 1,
      "name": "Magnetic Shot (Greater)",
      "itemType": "ammunition",
      "level": 17,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical"
      ],
      "description": "Ammunition any\nActivate 1 (concentrate)\nShiny gray metal that slightly thrums when touched makes up the metal parts of a magnetic shot. When activated, the shot is more effective against a target wearing metal armor or made of metal. The activated ammunition grants a +2 circumstance bonus to attack rolls against such targets. Due to magnetic acceleration, the ammunition deals four additional weapon damage dice and is deadly d12.",
      "bulk": 0,
      "price": {
        "gp": 2200
      },
      "usage": "",
      "category": "ammo",
      "group": "ammo"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wildwood-ink-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Lwvg9GECyIPsG8Xa",
      "slug": "wildwood-ink-major",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:11110a73c351cfdf4f93794122e93582867d9df6afcac918d6d5203e0c70e823",
    "translatableHash": "sha256:7b952f46460032019403b0ab354b65febea7b79aa766e082721f3e1721967cc3",
    "data": {
      "schemaVersion": 1,
      "name": "Wildwood Ink (Major)",
      "itemType": "equipment",
      "level": 17,
      "rarity": "common",
      "traits": [
        "invested",
        "primal",
        "tattoo"
      ],
      "description": "These curving, delicate designs resemble leaves, vines, or creepers, most often wrapped around a limb, ear, or throat, or curled around specific muscles. They help you blend in among plants. You gain a +3 item bonus to Stealth checks, which increases to +4 in forests.\nActivate R (concentrate)\nFrequency once per day\nTrigger A creature would detect you by Seeking\nRequirements You're in a forest or similar natural area\nEffect The tattoo casts One with Plants to turn you into a plant before you can be noticed. The duration of this spell is up to 8 hours.\nIf you've already Activated the tattoo, you can supply a separate casting of one with plants to recharge the tattoo instead of having the spell's normal effect. This allows you to Activate the tattoo again in the same day. You can do so multiple times each day, but only as many times as you continue to cast one with plants to recharge the tattoo after each use.",
      "bulk": 0,
      "price": {
        "gp": 15000
      },
      "usage": "tattooed-on-the-body",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-toxic-blades-7th-rank",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "m7oTstzUfkFfaaLc",
      "slug": "wand-of-toxic-blades-7th-rank",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:916a0cb772a62c3513d83445953bc5260c94ae83b7f504d4eddab0132e1a0d29",
    "translatableHash": "sha256:ac05f66f7868b2360574422790d826e119613d2e3f9f2629fdcdd61cc1a712b6",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Toxic Blades (7th-Rank)",
      "itemType": "consumable",
      "level": 17,
      "rarity": "common",
      "traits": [
        "force",
        "magical",
        "poison",
        "wand"
      ],
      "description": "This slender metal wand is tinted green and small images of bladed weapons are etched on its surface.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast 7th-rank Blessed Boundary. Damage from the wall also exposes the damaged creature to Deathcap Powder with no onset. The poison uses its normal DC. A creature can be exposed to the poison no more than once per turn.\nCraft Requirements Supply a casting of Blessed Boundary of the appropriate rank.",
      "bulk": 0.1,
      "price": {
        "gp": 14000
      },
      "usage": "held-in-one-hand",
      "category": "wand",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:amulet-of-the-third-eye",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "mNgScZVAq037JuNb",
      "slug": "amulet-of-the-third-eye",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:7cf3fb0d43065b163459fd9167ff52252e9150e54697c2e31e5b32493dee6e65",
    "translatableHash": "sha256:19f0ee0454b79304f81dff9dd4a10ab29457c2b87cfda00da7d30b5024a88471",
    "data": {
      "schemaVersion": 1,
      "name": "Amulet of the Third Eye",
      "itemType": "equipment",
      "level": 17,
      "rarity": "common",
      "traits": [
        "apex",
        "invested",
        "magical"
      ],
      "description": "This large brass medallion hangs low on the torso. It's shaped in the form of an unblinking eye, with a ring of turquoise as the iris and an orb of jet serving as the pupil. The amulet grants you a +2 item bonus to Perception checks. When you invest the amulet, you either increase your Wisdom modifier by 1 or increase it to +4, whichever would give you a higher value.\nActivate 2 (concentrate)\nFrequency once per day\nEffect You cast Truesight.",
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
    "contentId": "pf2e:item:equipment-srd:reflecting-shard-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "MpyuCFBQwbOQhhm0",
      "slug": "reflecting-shard-greater",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/consumable.svg"
    },
    "sourceHash": "sha256:b38e9d3ef65b5109c75fbb240f659b07035b3916ca31e7b4823775f51d2f3b3a",
    "translatableHash": "sha256:97b360d13ac45a7007cb33548b789c406a01f66a20d03c2ecab83bcd5561d90f",
    "data": {
      "schemaVersion": 1,
      "name": "Reflecting Shard (Greater)",
      "itemType": "consumable",
      "level": 17,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical",
        "talisman"
      ],
      "description": "Activate r (concentrate)\nTrigger You are targeted by a spell of any rank.\nRequirements You're a master in Athletics, and you have the affixed shield raised.\nThis mirrored metal fragment is bolted or welded to the face of the affixed shield. When you Activate it, you attempt to reflect the triggering spell back at its caster with Spell Riposte, using your check (athletics) modifier for the counteract check. The talisman's counteract rank is 9th.",
      "bulk": 0,
      "price": {
        "gp": 2500
      },
      "usage": "affixed-to-a-shield",
      "category": "talisman",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:spiritual-warhorn-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "NfMteX8WWC5mxc52",
      "slug": "spiritual-warhorn-major",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/consumable.svg"
    },
    "sourceHash": "sha256:36ac9174d758e361b7464491f13fde12e503fb3c599894ca38a3a009d5153d17",
    "translatableHash": "sha256:deacfbe08275cb3c9549a2a918f3e3b025c70e472845fb53296f309babdd174b",
    "data": {
      "schemaVersion": 1,
      "name": "Spiritual Warhorn (Major)",
      "itemType": "consumable",
      "level": 17,
      "rarity": "common",
      "traits": [
        "consumable",
        "force",
        "magical"
      ],
      "description": "Activate 2 (manipulate)\nA spiritual warhorn is a trumpet made of horn, leather, and metal. When you play a single, long note from the warhorn, it calls forth a number of Medium spiritual manifestations of warriors to aid you, according to the horn's type. Each warrior appears in an open square adjacent to an enemy within 60 feet of you, makes a Strike for 2d6 force damage (with an attack bonus determined by the warhorn's type), and then disappears. The warriors can flank with one another and with you and your allies. Once the magic is used, the warhorn remains as a non-magical musical instrument.\nEight warriors manifest with a +29 attack modifier.",
      "bulk": 0.1,
      "price": {
        "gp": 3000
      },
      "usage": "held-in-two-hands",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wyrms-wingspan-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "ngUqDJjNCbzS3rxX",
      "slug": "wyrms-wingspan-major",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:c41c6f124fc755241666b25bcf144357d02ee286cc962b1226cd66628e499671",
    "translatableHash": "sha256:511af8498aa6e2798fcacd31296cb64b4f2ea6a8b83a4151ee3dd1fb62dcc5e2",
    "data": {
      "schemaVersion": 1,
      "name": "Wyrm's Wingspan (Major)",
      "itemType": "equipment",
      "level": 17,
      "rarity": "common",
      "traits": [
        "invested",
        "magical",
        "tattoo"
      ],
      "description": "A massive pattern resembling dragon wings stretched to their full span crosses your body. The tattoo is typically inked on the upper back. Though the representation can be highly stylized, each wyrm's wingspan tattoo depicts the wings of a particular type of dragon. You gain resistance 15 to the damage type matching the tradition of the dragon your tattoo depicts.\n• Arcane force\n• Divine spirit\n• Occult mental\n• Primal fire\nActivate 2 (concentrate)\nFrequency once per day\nEffect The tattoo casts the Dragon Wings focus spell on you.\nActivate 2 (concentrate)\nFrequency once per day\nEffect The tattoo casts an 8th-rank Dragon Form on you, turning you into the type of dragon represented by the tattoo.",
      "bulk": 0,
      "price": {
        "gp": 13500
      },
      "usage": "tattooed-on-the-body",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:black-tendril-shot-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "NOPrIz6UNxof1M5d",
      "slug": "black-tendril-shot-greater",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:b0033d2c85325cadd8616bd74e119ca8e61860d099eea2047782d35c0e69a01d",
    "translatableHash": "sha256:8260b85aa8c614967103f51f1706e5d6fa229e653b2b51794930b9bf6cedbd49",
    "data": {
      "schemaVersion": 1,
      "name": "Black Tendril Shot (Greater)",
      "itemType": "ammunition",
      "level": 17,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical"
      ],
      "description": "Ammunition any\nActivate 1 (concentrate)\nA glistening, tar-like substance that's displeasing to the touch coats a black tendril shot. When the activated ammunition hits a target, it exudes tendrils that encase the target, which must attempt a check (fortitude, dc:39) saving throw. The ammunition's effects last until the target Escapes.\nCritical Success The target is unaffected.\nSuccess The target is Slowed 1 but gains a +2 circumstance bonus to Escape the ammunition's effect.\nFailure The target is slowed 1.\nCritical Failure The target is Slowed 2.",
      "bulk": 0,
      "price": {
        "gp": 2160
      },
      "usage": "",
      "category": "ammo",
      "group": "ammo"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:hell-staff",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "QbEkoFL1EYNGsOom",
      "slug": "hell-staff",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/staves/hell-staff.webp"
    },
    "sourceHash": "sha256:d65f09971972946792096c0886d23007ed242ce80210485856fbefe05ba4ac77",
    "translatableHash": "sha256:ab5b4bc506ec9a7433798763a3ae363dac19cc4d7efcc8ed7cc934f99241a7b5",
    "data": {
      "schemaVersion": 1,
      "name": "Hell Staff",
      "itemType": "weapon",
      "level": 17,
      "rarity": "uncommon",
      "traits": [
        "magical",
        "staff",
        "two-hand-d8",
        "unholy"
      ],
      "description": "A hell staff is a tall, pointed staff forged of red-tinted steel with Diabolic inscriptions that march neatly down its sides. At its top sits an inverted ruby pyramid divided into nine sections. Found mostly in Cheliax or other lands where diabolic influences hold sway, when used as a weapon the staff is a +3 greater striking flaming unholy staff. When you prepare this staff, if you're holy, you become Drained 1 until your next daily preparations.\nThe staff's summon lesser servitor spell can be used only to summon animals with the fiend trait, devils, or hell hounds (at 4th rank). Its summon fiend spell can summon only devils or hell hounds.\nActivate Cast a Spell\nEffect You expend a number of charges from the staff to cast a spell from its list.\n• Cantrip Divine Lance\n• 1st Protection, Summon Lesser Servitor\n• 2nd Darkvision, Summon Lesser Servitor\n• 3rd Chilling Darkness, Darkvision, Summon Lesser Servitor\n• 4th Divine Wrath, Summon Lesser Servitor\n• 5th Darkvision, Divine Immolation, Summon Fiend\n• 6th Devil Form, Summon Fiend\n• 7th Divine Decree, Summon Fiend\nCraft Requirements You're unholy. Supply one casting of all listed ranks of all listed spells.",
      "bulk": 1,
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
    "contentId": "pf2e:item:equipment-srd:boreal-staff-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "rYBX6v9JqpxAiQvn",
      "slug": "boreal-staff-major",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:6f229f5075b1366f68fff64a74eea50c03e41681a8882074720773bba1ea7b4b",
    "translatableHash": "sha256:104dd12c306c24f96d2bf857910ecfb996c443f91c0bad15b1ba11381528ef9e",
    "data": {
      "schemaVersion": 1,
      "name": "Boreal Staff (Major)",
      "itemType": "weapon",
      "level": 17,
      "rarity": "common",
      "traits": [
        "magical",
        "monk",
        "staff",
        "two-hand-d8"
      ],
      "description": "A boreal staff is chiseled from a cylinder of ice to form a spiky, jagged icicle, its surface gleaming with the colors of the northern lights. It gives the air around you a distinct chill. When used as a weapon, a boreal staff is a +3 greater striking frost staff.\nActivate 1 (concentrate)\nFrequency once per 10 minutes\nEffect Attempt a Strike using the staff. That Strike deals 2d4 cold additional damage. This additional cold damage ignores cold resistance.\nActivate Cast a Spell\nEffect You expend a number of charges from the staff to cast a spell from its list.\n• Cantrip Ray of Frost\n• 1st Chilling Spray, Gust of Wind\n• 2nd Chilling Spray\n• 3rd Chilling Spray, Elemental Absorption (water only)\n• 4th Chilling Spray, Ice Storm\n• 5th Howling Blizzard, Mantle of the Frozen Heart\n• 6th Howling Blizzard\n• 7th Frigid Flurry, Howling Blizzard\nCraft Requirements Supply one casting of all listed ranks of all listed spells.",
      "bulk": 1,
      "price": {
        "gp": 13500
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
    "contentId": "pf2e:item:equipment-srd:celestial-staff",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "S1ALL8osqV1pOtf3",
      "slug": "celestial-staff",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:ae89d7aec48324058aafaf9ec728616b35272ac72f864b4eaabf83258731cdae",
    "translatableHash": "sha256:eab6bf423c128dd75fd5c2503581c1fcb151a85456899f2180ce70359da898f3",
    "data": {
      "schemaVersion": 1,
      "name": "Celestial Staff",
      "itemType": "weapon",
      "level": 17,
      "rarity": "uncommon",
      "traits": [
        "holy",
        "magical",
        "staff",
        "two-hand-d8"
      ],
      "description": "Heavenly radiance shines from an active celestial staff, a golden staff capped with a pair of sculpted angel's wings. Used as a weapon, the staff is a +2 greater striking holy staff. While wielding a celestial staff, you gain a +1 circumstance bonus to saving throws against effects that have the unholy trait and effects created by unholy creatures. When you prepare this staff, if you're unholy, you become Drained 1 until your next daily preparations.\nActivate Cast a Spell\nEffect You expend a number of charges from the staff to cast a spell from its list.\n• Cantrip Divine Lance\n• 1st Bless, Protection\n• 2nd Everlight, Inner Radiance Torrent\n• 3rd Anointed Ground, Protection\n• 4th Holy Cascade, Inner Radiance Torrent\n• 5th Spiritual Guardian, Summon Celestial\n• 6th Holy Cascade, Summon Celestial\n• 7th Frigid Flurry, Howling Blizzard\nCraft Requirements You're holy. Supply one casting of all listed ranks of all listed spells.",
      "bulk": 1,
      "price": {
        "gp": 14000
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
    "contentId": "pf2e:item:equipment-srd:fey-dragonet-liqueur-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "sd3H2Nir3qLFNVI3",
      "slug": "fey-dragonet-liqueur-greater",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/consumable.svg"
    },
    "sourceHash": "sha256:a93c23f80a4cb31c3ec362e019a9ddf158bc6b83e4ba96333f2b12e925f74c0a",
    "translatableHash": "sha256:66ea1c9bb5954e64bfb365d69d916ee4c5d2bf885fbda78292fb45cf72d3a4d3",
    "data": {
      "schemaVersion": 1,
      "name": "Fey Dragonet Liqueur (Greater)",
      "itemType": "consumable",
      "level": 17,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical",
        "mental",
        "potion"
      ],
      "description": "Activate 1 (manipulate)\nEach draft of fey dragonet liqueur has a different flavor. For 1 hour after you drink it, you can use a single action to breathe out a 15-foot type:cone of euphoric gas. Each creature in the cone must attempt a check (will, dc:37) save. After you expel this magical breath, you can't do so again for 1d4.\nCritical Success The creature is unaffected.\nSuccess The creature is Stupefied 1 for 1 round.\nFailure The creature is stupefied 1 for 1 minute and Slowed 1 for 1d4.\nCritical Failure The creature is Stupefied 2 and slowed 1 for 1 minute.",
      "bulk": 0.1,
      "price": {
        "gp": 3000
      },
      "usage": "held-in-one-hand",
      "category": "potion",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:tattletale-orb-peridot",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "skQIdQ0RKXGCHJGM",
      "slug": "tattletale-orb-peridot",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/held-items/crystal-ball-peridot.webp"
    },
    "sourceHash": "sha256:4352b972e5e292d5ba2c9196ebb28792ef040a468964aae142b3cbc50d0e7b09",
    "translatableHash": "sha256:1bcfc643171f41c3b0e4de46ccfb52e88d03cdd1bb33cdcb44246d87d9e9280b",
    "data": {
      "schemaVersion": 1,
      "name": "Tattletale Orb (Peridot)",
      "itemType": "equipment",
      "level": 17,
      "rarity": "rare",
      "traits": [
        "cursed",
        "magical",
        "scrying"
      ],
      "description": "A tattletale orb is a polished crystal sphere that appears to function as a Crystal Ball (Peridot). If those whom you use the orb to scry on roll better than a critical failure on their saving throw, they receive a telepathic message alerting them to the scrying. A success or better at the save allows the target to choose to allow you to scry anyway, knowing they can use an aspect of the orb against you, according to the orb's type. A creature that rolls a critical success on the saving throw also learns your name and location. Once you Activate a tattletale orb or use it to cast one of your scrying spells, it fuses to you. You must succeed at a Will save, using the scrying Will DC of a crystal ball of the orb's type, to use another such device.\nTattletale orbs come in the same types as crystal balls, with the same activations and powers. However, your target must roll a critical failure on the saving throw for the orb to function as normal for that type of crystal ball.\nThe target can send you one telepathic demand.",
      "bulk": 0.1,
      "price": {
        "gp": 12500
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:judgment-thurible-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "tajXzwAgjUBZLD6b",
      "slug": "judgment-thurible-greater",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/other/spellhearts/judgment-thurible.webp"
    },
    "sourceHash": "sha256:adfdc85268fef8143f3367b42a7efb99941320ae9f75eaec6b95c1f4459ecdf3",
    "translatableHash": "sha256:a4ccf66435ac25305c69ef703109ef5c998233c9d8bf835e51c5f8124eadaa38",
    "data": {
      "schemaVersion": 1,
      "name": "Judgment Thurible (Greater)",
      "itemType": "equipment",
      "level": 17,
      "rarity": "common",
      "traits": [
        "magical",
        "spellheart"
      ],
      "description": "The golden religious symbol on the top of this spherical incense holder shifts its form to match the faith of its bearer. You gain no benefit from a judgment thurible if you don't worship a deity. The spell DC of any spell cast by activating this item is 35.\n• Armor After you cast a spell by activating the thurible, the thurible casts 3rd-rank Protection on you, with a duration of 1 round.\n• Weapon After you cast a spell by activating the thurible, the weapon gains a rune that lasts until the end of your next turn. It gains the Holy rune if your deity allows holy sanctification or the Unholy rune if your deity allows unholy sanctification. If your deity allows both, you can choose which rune the weapon gains. If your deity allows neither, your weapon doesn't gain a rune. The extra damage from this rune is 2d6.\nActivate Cast a Spell\nEffect You cast Divine Lance.\nActivate Cast a Spell\nFrequency once per day\nEffect You cast 6th-rank Divine Wrath.\nActivate Cast a Spell\nFrequency once per day\nEffect You cast Divine Decree",
      "bulk": 0,
      "price": {
        "gp": 14000
      },
      "usage": "affixed-to-armor-or-a-weapon",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:soothing-tonic-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "UeUPNFw600HEdDgF",
      "slug": "soothing-tonic-major",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-elixirs/mnemonic-acid.webp"
    },
    "sourceHash": "sha256:d2133aaa8c87e4a17ba4afa5431c78d7c07defb4319ba9013991e01eced524a6",
    "translatableHash": "sha256:4e5f6c095f7cd3c1457ee75722d01edd11d840f4d240f312cd2616aae77bff2d",
    "data": {
      "schemaVersion": 1,
      "name": "Soothing Tonic (Major)",
      "itemType": "consumable",
      "level": 17,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "elixir",
        "healing"
      ],
      "description": "Activate 1 (manipulate)\nSoothing tonic is a pleasantly savory concoction that speeds your natural healing, so your wounds recover faster over time. You gain fast healing 10 for 1 minute.\nEffect: Soothing Tonic",
      "bulk": 0.1,
      "price": {
        "gp": 2700
      },
      "usage": "held-in-one-hand",
      "category": "elixir",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:healing-vapor-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "UOvDye8obnqjfMQG",
      "slug": "healing-vapor-major",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/consumable.svg"
    },
    "sourceHash": "sha256:7b2fd42c6f1062766020594e9e5979e844dc180f858d6e7639ac479678bcb3aa",
    "translatableHash": "sha256:90a1374e0e4c0c49c942a54475ce05eb96a514dd2582f51b9ba43bbb1cbfa65d",
    "data": {
      "schemaVersion": 1,
      "name": "Healing Vapor (Major)",
      "itemType": "consumable",
      "level": 17,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "healing"
      ],
      "description": "Activate 3 (manipulate)\nHealing vapor is a substance that accelerates natural recovery processes by dispersing a mist infused with a variety of reagents typically used for healing and recovery. When deployed from a sealed container, the vapors fill a 5-foot burst, last for 10 minutes, and can affect up to four living creatures at one time. Any creatures beyond the first four gain no benefit, though if a creature leaves before the duration is over, a new creature that enters can benefit from the mist. A creature benefiting from the vapors regains 3 Hit Point every minute. While affected, a creature also gains a +3 item bonus to saving throws against diseases and poisons. If the areas of more than one healing vapor overlap, only the strongest applies to creatures inside overlapping areas. Strong wind disperses the mist, rendering it ineffective while the wind blows.",
      "bulk": 0.1,
      "price": {
        "gp": 3000
      },
      "usage": "held-in-two-hands",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:sanguine-mutagen-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "vmwrU3lz1HFfadAS",
      "slug": "sanguine-mutagen-major",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:0017c7e8e4c210d0f8b28e11f32dfdab1f6ca522eaf6c5cd05453a695e9c29eb",
    "translatableHash": "sha256:446d2a5cb91be97e5ca9199a646ca371dda6aff7d415e5ba4901182d803a289a",
    "data": {
      "schemaVersion": 1,
      "name": "Sanguine Mutagen (Major)",
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
      "description": "Activate 1 (manipulate)\nFor 1 hour you gain greatly increased blood production, filtering out contagions and boosting your endurance but causing your body to bloat with blood.\nBenefit You gain a +4 item bonus to Fortitude and Reflex saves. When you roll a success on a save against a disease, poison, or effect that would give you the Fatigued condition, you get a critical success instead and your critical failures on such saves become failures instead.\nDrawback Whenever you take piercing or slashing damage, you take 1d6 persistent bleed damage.\nEffect: Sanguine Mutagen (Major)",
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
    "contentId": "pf2e:item:equipment-srd:thousand-pains-fulu-burl",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "vuJi1kahoCAHHTSX",
      "slug": "thousand-pains-fulu-burl",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/fulus/fulu-fancy.webp"
    },
    "sourceHash": "sha256:a2eef49e86be1a3e7998dd82f1aa9aa354f01b8277c6009a383969e986c0a1ef",
    "translatableHash": "sha256:6414ea29f0cd12da52dfbd8dd93ebbaf1f44916d94954f94dda25d683779ed57",
    "data": {
      "schemaVersion": 1,
      "name": "Thousand-Pains Fulu (Burl)",
      "itemType": "consumable",
      "level": 17,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "fulu",
        "magical"
      ],
      "description": "Duration 1 minute\nCreated by a chirurgeon who threw away morality in search of endless life, a thousand-pains fulu blocks the natural flow of elements in the body. A creature to which the fulu is affixed must attempt a check (fortitude, dc:35, basic, traits:poison). Failure or critical failure primes the target for persistent damage triggered by a specific condition that must be met within the fulu's duration.\nThough this green fulu looks inviting, it has a foreboding aura. The fulu deals 10d8 poison damage, causing the target's body to respond adversely to their qi. On a failure or critical failure, if the target takes fire damage, it takes 2d8 persistent poison damage as well. These effects have the poison trait.",
      "bulk": 0,
      "price": {
        "gp": 2700
      },
      "usage": "affixed-to-a-creature",
      "category": "fulu",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:artificer-spectacles",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "VVymhIF6UBThdHP9",
      "slug": "artificer-spectacles",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:8c05cd40b81d7a224b88b5b9c8b615976d1a7c6cb811b3c47bf3eb8ac582a721",
    "translatableHash": "sha256:b0d711182a37f2e2c8b2a3456e57655532a42e0c40b59f7e390c9faf083fd883",
    "data": {
      "schemaVersion": 1,
      "name": "Artificer Spectacles",
      "itemType": "equipment",
      "level": 17,
      "rarity": "common",
      "traits": [
        "apex",
        "invested",
        "magical"
      ],
      "description": "These seemingly ordinary rectangular eyeglasses feature clear lenses framed in copper. When invested and worn, they rest perfectly on the bridge of the nose and can only be removed by the wearer. You gain a +3 item bonus to Crafting checks and any skill check made to Identify Magic. When you invest the spectacles, you either increase your Intelligence modifier by 1 or increase it to +4, whichever would give you a higher value. You must select the skills and languages the first time you invest the item, and whenever you invest the same artificer spectacles, you get the same skills and languages you chose the first time.\nActivate 2 (manipulate)\nFrequency once per hour\nEffect You cast a 3rd-rank Mending spell on an item you touch.",
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
    "contentId": "pf2e:item:equipment-srd:demolition-fulu-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "VXxwxLwJiDODlUZq",
      "slug": "demolition-fulu-greater",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/fulus/fulu-fancy.webp"
    },
    "sourceHash": "sha256:b6630be619677a242d20e932d03d431cfa022654d4ec071d7b444c9f106a0f65",
    "translatableHash": "sha256:8fee8151affb0943dadd5af1d542c355b1b38ce650d0a52c7492de19bcd8153a",
    "data": {
      "schemaVersion": 1,
      "name": "Demolition Fulu (Greater)",
      "itemType": "consumable",
      "level": 17,
      "rarity": "common",
      "traits": [
        "consumable",
        "fulu",
        "magical"
      ],
      "description": "A demolition fulu allows a saboteur or excavator to be far away from the scene when demolition happens. The fulu crumbles to ash over 5 minutes to 8 hours, as you determine when you place the fulu. Once the duration ends, the fulu lowers the Hardness of the object it's affixed to by an amount equal to the fulu's level and then deals 10d6 bludgeoning damage to the object. A demolition fulu serves as a hazard with a check (perception, dc:37) check to detect it and check (thievery, dc:37) check to disable it according to its type.",
      "bulk": 0,
      "price": {
        "gp": 2750
      },
      "usage": "affixed-to-a-ranged-weapon",
      "category": "fulu",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:theatrical-mutagen-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Wv0ck7AMP0s0jIue",
      "slug": "theatrical-mutagen-major",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:91c387606806349bbf5be0c02a940f84fcfee077795aeaab5bc393a36b1260c4",
    "translatableHash": "sha256:2fad38a0820844fd8f1f833216efd07b6e08b097a4d0137a55f933c95c5d3ea7",
    "data": {
      "schemaVersion": 1,
      "name": "Theatrical Mutagen (Major)",
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
      "description": "Activate 1 (manipulate)\nDeveloped and widely used by students at the Kitharodian Academy in Oppara, the theatrical mutagen stimulates the creative centers of your brain. This causes your movements to become exaggerated and your voice to become clear. However, the erratic surges of inspiration overload your senses, making it difficult to focus on mundane tasks. This lasts for 1 hour.\nBenefit You gain a +4 item bonus to Acrobatics checks, Crafting checks, and Performance checks. If you're untrained in any of these skills, your proficiency bonus is equal to your level instead of +0. You also gain a +10 feet status bonus to your Speed.\nDrawback You take a –1 penalty to Perception checks and Will saves. After any round where you don't spend at least 1 action to Interact with an object, Perform, Step, or Stride, you're Off-Guard until the start of your next turn.\nEffect: Theatrical Mutagen (Major)",
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
    "contentId": "pf2e:item:equipment-srd:deadweight-mutagen-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Wx5WhSNOmeICgHSC",
      "slug": "deadweight-mutagen-major",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:8e9e3f192586cb978a8bfaf27f3aca92b18d6170dbbf6382940cdb749d3f2ae3",
    "translatableHash": "sha256:a726896f2e26f429d968876b3c56b43cba328d5873b2dc76e15b4118be66595f",
    "data": {
      "schemaVersion": 1,
      "name": "Deadweight Mutagen (Major)",
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
      "description": "Activate 1 (manipulate)\nFor 1 hour your joints loosen and bones thicken, making your body incredibly weighty and difficult to maneuver around.\nBenefit You gain a +4 item bonus to Athletics checks to Shove and Trip, to your Fortitude and Reflex DCs against attempts to Shove or Trip you, and to saving throws against effects that attempt to force you to move or knock you Prone. You can attempt to Shove or Trip creatures up to three sizes larger than you.\nDrawback You gain the Encumbered condition and can't remove it while under the effects of the mutagen.\nEffect: Deadweight Mutagen (Major)",
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
    "contentId": "pf2e:item:equipment-srd:chronomancer-staff",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "XBn3aapPC0x7X13W",
      "slug": "chronomancer-staff",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:5f75d19925f04c3a5751712592271196673c3d4656d9c03f95f8662cdbbc676a",
    "translatableHash": "sha256:6e9d6e23aade1bd764dcae579268c368da2904744226ea2d704fb93697785898",
    "data": {
      "schemaVersion": 1,
      "name": "Chronomancer Staff",
      "itemType": "weapon",
      "level": 17,
      "rarity": "rare",
      "traits": [
        "magical",
        "staff",
        "two-hand-d8"
      ],
      "description": "Clock faces and gears adorn the twisted iron shaft of a chronomancer staff, the hands of the clocks continually ticking or winding backward. Used as a weapon, the staff is a +2 greater striking quickstrike staff. While wielding this staff, you also gain a +1 circumstance bonus to initiative rolls.\nActivate Cast a Spell\nEffect You expend a number of charges from the staff to cast a spell from its list.\n• Cantrip Time Sense\n• 1st Déjà Vu, Synchronize\n• 2nd Loose Time's Arrow, Synchronize\n• 3rd Day's Weight, Haste, Slow, Time Jump\n• 4th Curse of Lost Time\n• 5th Quicken Time, Rewinding Step, Stagnate Time\n• 6th Cast into Time, Day's Weight\n• 7th Time Beacon\nCraft Requirements Supply one casting of all listed ranks of all listed spells.",
      "bulk": 1,
      "price": {
        "gp": 15000
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
    "contentId": "pf2e:item:equipment-srd:wand-of-wearying-dance",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "1U382qwyTktH9h3j",
      "slug": "wand-of-wearying-dance",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:2b24c6d0154992475462f6acd6e9c6b03f661d58d02dadb01afcfda2ef422bb7",
    "translatableHash": "sha256:c9120d1d644d55bdb40efa74e781c168db9625b00f4f1c433f89cdf96e80314f",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Wearying Dance",
      "itemType": "consumable",
      "level": 18,
      "rarity": "common",
      "traits": [
        "magical",
        "mental",
        "wand"
      ],
      "description": "This colorfully painted wand has a few jingling bells tied to the pommel.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast Uncontrollable Dance. When the spell's duration ends, if the target was forced to dance for 1 minute, it becomes Fatigued.\nCraft Requirements Supply a casting of uncontrollable dance.",
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
    "contentId": "pf2e:item:equipment-srd:wand-of-legerdemain-8th-rank",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "34D6lFZ2gpZiyUU6",
      "slug": "wand-of-legerdemain-8th-rank",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:309dfb48aef1279b68724500d72a400c78d2caa09bfb82f23f15f0949167718b",
    "translatableHash": "sha256:3e48d3391d585aae28d1128249b4b344049b76ac414907ecdb9fea607a5768c7",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Legerdemain (8th-rank)",
      "itemType": "equipment",
      "level": 18,
      "rarity": "common",
      "traits": [
        "magical",
        "wand"
      ],
      "description": "This wand of lacquered black wood has a handle wrapped in interwoven colorful ribbons. A silver bell caps the wand's tasseled pommel.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You Cast the Spell.\nActivate 1 (emotion, illusion, light, manipulate. mental, visual)\nRequirements The last action you took this turn was to Cast a Spell from the wand\nEffect You make yourself the center of attention. An illusory spotlight shines bright light upon your space as you pull inane objects from the wand's tip, such as confetti, silk flowers, streamers, or a long string of colorful kerchiefs knotted end to end. Each enemy within 30 feet must attempt a Will save against your spell DC, receiving a +4 circumstance bonus to the save if you or any of your allies recently threatened it or used hostile actions against it. On a failure, the creature becomes Fascinated with you until the end of your next turn. The fascination ends if the target is subject to a hostile act, or if another creature succeeds at a Diplomacy or Intimidation check against it.\nThe spotlight follows you wherever you move. You can't be Concealed while in the spotlight. The effect ends if you become Invisible, attempt a Stealth check, or Dismiss the activation.\nYou can Sustain this Activation for up to 1 minute. Since you need to keep performing tricks, Sustain an Activation has the manipulate trait. Sustaining extends the spotlight, and keeps fascinated creatures fascinated, but doesn't cause creatures not already fascinated to become fascinated.\nCraft Requirements Supply a casting of a spell of the appropriate rank.",
      "bulk": 0.1,
      "price": {
        "gp": 24000
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-mercy-8th-rank",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "3DGLuHRME4e2XgvX",
      "slug": "wand-of-mercy-8th-rank",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:9083d66a45fa5dc57175469b6e898d7726fa62f74256a74dcab74fb20c7a3ed3",
    "translatableHash": "sha256:9c99462dba3849807375ad58d2b9293d23bb499948750e0b62feb166b0dadf93",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Mercy (8th-rank)",
      "itemType": "equipment",
      "level": 18,
      "rarity": "common",
      "traits": [
        "magical",
        "wand"
      ],
      "description": "The pommel of this rose quartz wand resembles the stylized wings of an angel. When you cast its spell and choose not to make it nonlethal, the crystal deepens to blood red. The color reverts to rose when you cast the spell from the wand nonlethally.\nActivate Cast a Spell; the activation takes 2 if the spell normally takes 1 to cast, or 3 if the spell normally takes 2\nFrequency once per day, plus overcharge\nEffect You Cast the Spell, and can choose to give it the nonlethal trait.\nCraft Requirements Supply a casting of a spell of the appropriate rank. The spell must have a casting time of 1 or 2, it must deal damage, and it can't have the death, void, or nonlethal traits.",
      "bulk": 0.1,
      "price": {
        "gp": 19000
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:blood-booster-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "3UXsXwUbvOdpPg6b",
      "slug": "blood-booster-greater",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:d5d65977e2523993ddbd6a5514eea0b3e9f66da6e7ef525e47f1f58dc1ba73dc",
    "translatableHash": "sha256:71294783ac7abfd4ca131121dd497d96bf80b72084163e4dcee46dccb65a2a47",
    "data": {
      "schemaVersion": 1,
      "name": "Blood Booster (Greater)",
      "itemType": "consumable",
      "level": 18,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "elixir",
        "healing"
      ],
      "description": "Activate 1 (manipulate)\nThis elixir bolsters your body's natural defenses and ability to resist maladies that travel through or affect blood. For 10 minutes you receive resistance 20 to persistent bleed and persistent poison damage, and you lower the DC for any flat checks to end persistent bleed or persistent poison damage as if you received particularly appropriate aid.\nAt the GM's discretion, blood booster elixirs can also automatically counteract non-magical effects that specifically rely on thinning the drinker's blood, such as a skull peeler's anticoagulant.\nEffect: Blood Booster",
      "bulk": 0.1,
      "price": {
        "gp": 3400
      },
      "usage": "held-in-one-hand",
      "category": "elixir",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:cloning-potion",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "6CzLtRHIBfhMpyv2",
      "slug": "cloning-potion",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/consumable.svg"
    },
    "sourceHash": "sha256:d459aadda9f731bf1022422187c2ac7595bd2d28f3335a8c11b901179380f810",
    "translatableHash": "sha256:7a3384fea8fbfe86615c92d0749e33b46ba19818fe9120b5978f6933c9693ee1",
    "data": {
      "schemaVersion": 1,
      "name": "Cloning Potion",
      "itemType": "consumable",
      "level": 18,
      "rarity": "rare",
      "traits": [
        "consumable",
        "magical",
        "potion"
      ],
      "description": "Activate 1 (manipulate)\nWhen you drink a cloning potion, you split in two, one version of you remaining in your space and the other moving into an adjacent space. Your clone, which has the minion trait, looks like you and remains for 1 minute. Provided you are both on the same plane, you can command your clone telepathically with a single action with the concentrate trait. You can also issue verbal commands, as normal for a minion. As an action that has the concentrate trait, you can sense through your clone. When you do, you lose all sensory information from your own body. You can Dismiss this sense-sharing effect.\nYou and your clone share Hit Points, and the clone uses your statistics. Spells and effects target you and your clone as if you are separate creatures. The clone can Activate your abilities and Cast your Spells, limited by its number of actions, but you share elements such as use limits, frequency, and spell slots. In other words, your clone using one of your resources works as if you did so in or from your clone's space. Your clone has gear identical to your own, excepting artifacts and consumables. Any item taken from the clone melts into silvery dust within seconds, with ammunition or thrown objects lasting just long enough to travel to and possibly hit their target.\nWhen the duration lapses, your clone melts into silvery dust. You become temporarily immune to cloning potion for 1d4.",
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
    "contentId": "pf2e:item:equipment-srd:wand-of-dazzling-rays-8th-rank",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "8QValKGj7oZKnqw1",
      "slug": "wand-of-dazzling-rays-8th-rank",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:b3afec28c1349c1c0c61fbb3c3969437ca93d15dcfaf059bc50bfb78e4252a27",
    "translatableHash": "sha256:ae7d13811b875b92a137ce2abc2b85959975e72abf74a30f47770feacaa88c03",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Dazzling Rays (8th-rank)",
      "itemType": "consumable",
      "level": 18,
      "rarity": "common",
      "traits": [
        "fire",
        "holy",
        "light",
        "magical",
        "wand"
      ],
      "description": "Solidified radiance comprises this slender, featureless wand. It sheds bright light in a 20-foot radius and dim light for the next 20 feet. After you Activate the wand, the light fades, so it only sheds dim light in a 20-foot radius. The wand returns to its original brightness each dawn.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast 8th-rank Holy Light, dazzling your target with the beam's intensity. A creature that takes damage from the spell is Blinded for 1 round and Dazzled for a number of rounds equal to the spell rank. On a critical success on the attack roll, the target is also blinded for as long as it's dazzled from the spell. However, it can attempt a check (fortitude) saving throw against your spell DC at the end of each of its turns, ending the blinded condition on a success (but remaining dazzled).\nCraft Requirements Supply a casting of holy light of the appropriate rank.",
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
    "contentId": "pf2e:item:equipment-srd:rovagugs-mud-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "aMbJl8eTV3Ri5O6e",
      "slug": "rovagugs-mud-greater",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:6fb5c6615a643f76216b00c079fb5b71e7494533d497d189a4744d8a9169159d",
    "translatableHash": "sha256:2a9419a7b43319c8f01d1533c732c45851039c15cc3e99a557e64af8277c6895",
    "data": {
      "schemaVersion": 1,
      "name": "Rovagug's Mud (Greater)",
      "itemType": "consumable",
      "level": 18,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "potion"
      ],
      "description": "Activate 1 (manipulate)\nRovagug's mud smells and tastes like wet, sour earth. For 1 hour after you drink it, you have a +2 item bonus to saving throws against incapacitation effects. Also, you can use a single action to breathe out a 20-foot cone of bitter vapor that causes an earth-shaking rumble that can be heard for 100 feet. Creatures and objects in the area take 8d6 untyped damage (check (fortitude, dc:38, basic, options:area-effect)), decreasing Hardness by 10. An object's Hardness remains lowered for 1d4, and you can't use this breath again for the same amount of time.\nEffect: Rovagug's Mud",
      "bulk": 0.1,
      "price": {
        "gp": 4800
      },
      "usage": "held-in-one-hand",
      "category": "potion",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:nevercold-refined",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "aMXCMLI3spk0d7tq",
      "slug": "nevercold-refined",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/consumable.svg"
    },
    "sourceHash": "sha256:e1b1ad86ec0fe4eabd34a8aac15fa758f0efdfa3872314752a5ffb79d2daaa73",
    "translatableHash": "sha256:1e7786caf262e9f7da4e8f7a6f5424944d4a596604e9c62ec0ae57bb6842d316",
    "data": {
      "schemaVersion": 1,
      "name": "Nevercold (Refined)",
      "itemType": "consumable",
      "level": 18,
      "rarity": "common",
      "traits": [
        "catalyst",
        "consumable",
        "magical"
      ],
      "description": "Activate Cast a Spell\nNevercold, sometimes mistakenly referred to as nevercoal, is the charcoal left after wildfires in the First World. True to its name, nevercold remains warm to the touch. If you use nevercold to cast Fire Shield, the spell's duration increases to 5 minutes, the cold resistance you gain from it lasts 1 hour, and you're immune to minor and severe cold for 8 hours.\nThe catalyst affects 8th-rank or lower fire shield, and the immunity from minor and severe cold lasts 24 hours.",
      "bulk": 0.1,
      "price": {
        "gp": 3600
      },
      "usage": "held-in-one-hand",
      "category": "catalyst",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:lodestone-bomb-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "APJ0NWJ4DYUXNpNm",
      "slug": "lodestone-bomb-greater",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:9d09c73d31b5536c515095fefcb44b803d95f5f89fbd3315ec0fd430b1d6a283",
    "translatableHash": "sha256:f1367a331e359e749fedcc33844f06562c02c94291ef3ca935f7e29d3f1f4498",
    "data": {
      "schemaVersion": 1,
      "name": "Lodestone Bomb (Greater)",
      "itemType": "weapon",
      "level": 18,
      "rarity": "common",
      "traits": [
        "alchemical",
        "bomb",
        "consumable",
        "force",
        "splash"
      ],
      "description": "Activate 1 Strike\nLodestone bombs hold reactive ionized minerals preserved in a dormant state until broken. The bomb grants a +3 item bonus to attack rolls and deals 4d4 force damage and 3 force splash damage. In addition, a target made of metal, wearing metal armor, or using metal weapons takes 3d4 persistent force damage and is Clumsy 1 and Enfeebled 1 while taking the persistent damage. The persistent damage can last up to 1 minute.",
      "bulk": 0.1,
      "price": {
        "gp": 4500
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "bomb",
      "damage": {
        "dice": 4,
        "die": "d4",
        "type": "force"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-teeming-ghosts-8th-rank",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "ASroFtAWLwn6HJJH",
      "slug": "wand-of-teeming-ghosts-8th-rank",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/wands/specialty-wands/wand-of-teeming-ghosts.webp"
    },
    "sourceHash": "sha256:48d526a8d8a5cea15c5483f9917fed02cccd9cf174e0c1540d4c05ad56fd843e",
    "translatableHash": "sha256:5e6e50d134383cac1489cdbdc236adbdc8e4edee3d958f75988a03b11724d69e",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Teeming Ghosts (8th-Rank)",
      "itemType": "consumable",
      "level": 18,
      "rarity": "uncommon",
      "traits": [
        "magical",
        "wand"
      ],
      "description": "This pale wooden wand is carved to resemble a thigh bone with metal caps at each end. Ghostly tendrils seem to swirl around it every so often.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast False Vitality at 8th-rank. During the duration of the spell, wisps that resemble spirits flit around you as long as you have any temporary Hit Points from false vitality, and you can use the following action.\nActivation F (concentrate)\nTrigger You successfully impart the Frightened 1 condition to a creature\nRequirements You have at least 1 temporary Hit Point from false vitality\nEffect You end false vitality and increase the creature's frightened condition value to 2.\nCraft Requirements Supply a casting of false vitality at 8th-rank.",
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
    "contentId": "pf2e:item:equipment-srd:sandals-of-the-stag",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "at6rKBw85IkdbmOO",
      "slug": "sandals-of-the-stag",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:214a7246a18cb1f40d4444c037502082274ee410eaf964893f9532720aef7a88",
    "translatableHash": "sha256:8d22bfb2d2b715304f6e18772a69a4023b14d92866660fbe50b0a574c0f37a46",
    "data": {
      "schemaVersion": 1,
      "name": "Sandals of the Stag",
      "itemType": "equipment",
      "level": 18,
      "rarity": "common",
      "traits": [
        "apex",
        "invested",
        "magical"
      ],
      "description": "These sturdy leather sandals feature straps that wrap up to the knees. Etched in the leather are intricate patterns of stags leaping through the forest. You gain a +5-foot item bonus to your land Speed and a +3 item bonus on Athletics checks when attempting to High Jump or Long Jump. When you invest the sandals, you either increase your Strength modifier by 1 or increase it to +4, whichever would give you a higher value.\nActivate R (concentrate)\nFrequency once per minute\nTrigger You attempt a High Jump or Long Jump but you didn't Stride at least 10 feet\nEffect You can attempt the jump normally. It doesn't automatically fail.",
      "bulk": 0.1,
      "price": {
        "gp": 24000
      },
      "usage": "wornshoes",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:clockwork-shield-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "ayST5rFSIKy2ynYk",
      "slug": "clockwork-shield-greater",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:9ef5b223e4b9f7419d47561a447bf52d1accfadec4cca6526e0259a90ee5ffb7",
    "translatableHash": "sha256:3f0722aab7268b105cb35904c48c4856fb46471fe1a77243df9c8693b43ded5f",
    "data": {
      "schemaVersion": 1,
      "name": "Clockwork Shield (Greater)",
      "itemType": "shield",
      "level": 18,
      "rarity": "common",
      "traits": [
        "magical"
      ],
      "description": "This brass-coated, steel shield (Hardness 17, HP 130, and BT 65) has +3 greater striking shield spikes made of bronze gears.\nActivate 1 (manipulate)\nFrequency once per day\nEffect The shield's gears begin to spin, subtly adjusting the shield's position as you fight. You gain an extra reaction this turn and at the start of each of your turns for the next minute that you can use only to Shield Block.",
      "bulk": 1,
      "price": {
        "gp": 22000
      },
      "usage": "",
      "category": "shield",
      "group": "steel-shield"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:shatterstone-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "CJesyj3lklJVujh0",
      "slug": "shatterstone-greater",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:1a4bdaaede9a23ba6e80c14d47b02ca50edeccdf0173a7013a3f2951883a375e",
    "translatableHash": "sha256:e328c05d0faa23aa723e448bdc0d76443af7138c12336c9e9ca1edf57bfd518f",
    "data": {
      "schemaVersion": 1,
      "name": "Shatterstone (Greater)",
      "itemType": "weapon",
      "level": 18,
      "rarity": "common",
      "traits": [
        "alchemical",
        "bomb",
        "consumable",
        "sonic",
        "splash"
      ],
      "description": "Activate 1 Strike\nA shatterstone is a small ceramic orb. Inside are reactive agents that set up an intense field of sonic vibration when the stone breaks. The bomb grants a +3 item bonus to attack rolls and deals 4d6 sonic damage and 4 sonic splash damage. Much of the sound is ultrasonic, and creatures with sonic weakness that take damage from the bomb must succeed at a check (fortitude, dc:40) save or be Deafened until the end of their next turn.",
      "bulk": 0.1,
      "price": {
        "gp": 3800
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "bomb",
      "damage": {
        "dice": 4,
        "die": "d6",
        "type": "sonic"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-reaching-8th-rank",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "eFGpWmM8ehW9mkI4",
      "slug": "wand-of-reaching-8th-rank",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:2e9fb7b2fe50b82d9f52f24f8332f04b1dbfe7402643e60367ae3af1f5dc8239",
    "translatableHash": "sha256:3fcb9defd3cbe59a100925e1db790499ec6dadeea97595539a073e20447d23e6",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Reaching (8th-Rank)",
      "itemType": "equipment",
      "level": 18,
      "rarity": "common",
      "traits": [
        "magical",
        "wand"
      ],
      "description": "This long, slender wand is constructed of silver, polished to a mirror shine.\nActivate Cast a Spell; This activation takes 2 if the spell normally takes 1 to cast, or 3 if the spell normally takes 2\nFrequency once per day, plus overcharge\nEffect You Cast the Spell. Its range increases by 30 feet. As normal for increasing ranges, if the spell normally has a range of touch, its range extends to 30 feet.\nCraft Requirements Supply a casting of a spell of the appropriate rank. The spell must have a casting time of 1 or 2, and must have a range.",
      "bulk": 0.1,
      "price": {
        "gp": 24000
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:maw-of-hungry-shadows",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "FffMnXbwNHczb6bp",
      "slug": "maw-of-hungry-shadows",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:5e2257cece53b21f829e355270c493c67c10b2127b7fae5977bd0f3f87a0d064",
    "translatableHash": "sha256:aaadd0a974566f8bd07c99fe1d182b04042f2b74f652d9846ec5bfe4cdc044f0",
    "data": {
      "schemaVersion": 1,
      "name": "Maw of Hungry Shadows",
      "itemType": "equipment",
      "level": 18,
      "rarity": "common",
      "traits": [
        "grimoire",
        "incapacitation",
        "magical",
        "shadow",
        "teleportation"
      ],
      "description": "Shadows swirl around this soot-black tome, swallowing up any light that touches them. A faint whispering emanates from the grimoire's pages when opened.\nActivate 1 (concentrate)\nFrequency once per day\nTrigger Your last action was to cast a spell prepared from this grimoire that has the shadow trait\nEffect Your shadow, and that of the tome, elongates and reaches hungrily for one foe within 30 feet, who must attempt a check (fortitude) save.\nCritical Success The creature is unaffected.\nSuccess The creature is Blinded for 1 round and Drained 1 as the shadows scrape across it.\nFailure The creature is blinded for 1 minute and Drained 2 as the shadows seize it.\nCritical Failure As failure, but the shadows also pull the creature into the tome, teleporting it to the Netherworld.",
      "bulk": 0.1,
      "price": {
        "gp": 21000
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:quenching-true",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "hGZNrPMdxsabNFLx",
      "slug": "quenching-true",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/runes/armor-property-runes/armor-property-runes.webp"
    },
    "sourceHash": "sha256:c78fcbf66e3cc51cab612671d88ee39d506bb0f5da5f6e7a1cd99005d78080b5",
    "translatableHash": "sha256:cf54d1e5186d5e0f3a02faba2d684a22bffd479a0012df08f0e295285f235459",
    "data": {
      "schemaVersion": 1,
      "name": "Quenching (True)",
      "itemType": "equipment",
      "level": 18,
      "rarity": "common",
      "traits": [
        "magical"
      ],
      "description": "This rune counters burning and corrosive agents. Armor with this rune reduces the DC of the flat check to end persistent acid or fire damage affecting you from 15 to 5 (particularly effective assistance automatically removes the persistent acid or fire damage).",
      "bulk": 0,
      "price": {
        "gp": 24000
      },
      "usage": "etched-onto-armor",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:vaccine-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "JZZmDY1IJmKcdR2D",
      "slug": "vaccine-major",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-elixirs/vaccine.webp"
    },
    "sourceHash": "sha256:958aed33537853a2efaa21caff07605853fe832478c7496dd6b8bfe552fdf138",
    "translatableHash": "sha256:addebc8872ff188c756f2f15fc616da4a245bd842c2d8fb68efe9a4d5a5fabda",
    "data": {
      "schemaVersion": 1,
      "name": "Vaccine (Major)",
      "itemType": "consumable",
      "level": 18,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "elixir",
        "healing"
      ],
      "description": "Activate 1 (manipulate)\nA vaccine grants a creature immunity to a specific strain of disease of a level equal to or less than the vaccine's level, and a +2 item bonus on all saving throws against other strains of the same disease. For example, a vaccine could grant immunity to putrid plague inflicted by harpies, but would only grant a +2 saving throw bonus against putrid plague inflicted by a giant rat.\nCraft Requirements Creating a vaccine requires a sample of the disease in question.\nDuration Permanent.\nSpecial A vaccine is the same rarity as the disease it's designed to prevent, or as the creature who inflicts the disease if the disease itself doesn't list a rarity.",
      "bulk": 0.1,
      "price": {
        "gp": 5000
      },
      "usage": "held-in-one-hand",
      "category": "elixir",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-mental-purification-8th-rank",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "KY9gDuSeB1tgT3cp",
      "slug": "wand-of-mental-purification-8th-rank",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/held-items/wand-of-mental-purification.webp"
    },
    "sourceHash": "sha256:00aa5b68ded5b54b024d9592e8b896d4bf0ec753beaa26da6bb2750df1795a97",
    "translatableHash": "sha256:79762421d499af35fbd8e5ae8adf83c5acbf9b81138b96bde3f0b5cd9afabcec",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Mental Purification (8th-rank)",
      "itemType": "consumable",
      "level": 18,
      "rarity": "common",
      "traits": [
        "emotion",
        "healing",
        "magical",
        "mental",
        "wand"
      ],
      "description": "Red feathers hang from the handle of this ivory wand. Holding it brings a sense of gentle calm.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast 8th-rank Soothe, and can attempt to counteract one mental effect on the same target. Treat the Soothe spell's rank as 1 higher for this counteract check.\nCraft Requirements Supply a casting of soothe of the appropriate rank.",
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
    "contentId": "pf2e:item:equipment-srd:kraken-bottle",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "lu3kPHtKZTHPx4Fx",
      "slug": "kraken-bottle",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/consumable.svg"
    },
    "sourceHash": "sha256:82d87aff4d0fa65f9441ab38656f7bb8ce0e337f700c995823740de0b0df5688",
    "translatableHash": "sha256:34061c784d90dcc18736f42472129d098c9fc15c7beab2e00332ef88f942e1b2",
    "data": {
      "schemaVersion": 1,
      "name": "Kraken Bottle",
      "itemType": "consumable",
      "level": 18,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "consumable",
        "expandable"
      ],
      "description": "Activate 2 (manipulate)\nCoiled tentacles make it all but impossible to see anything else inside this ampoule. When opened, a Gargantuan kraken bursts forth, which can appear in water instead of on the ground. Its arms attempt to grasp up to four creatures with a reach of 60 feet. The kraken repositions Grabbed creatures to a different space within its reach unless the target succeeds at a check (fortitude, dc:38) save.\nIf the kraken is in water, it then releases a cloud of ink in an 80-foot emanation. This cloud has no effect outside of water. Creatures inside the cloud are undetected, can't use their sense of smell, and are exposed to kraken ink poison. The cloud dissipates after 1 minute.\nKrakens are immune to this poison.\nSaving Throw check (fortitude, dc:39, traits:poison)\nMaximum Duration 10 rounds\nStage 1 4d6 poison damage and Sickened 1 (1 round)\nStage 2 5d6 poison damage and Sickened 2 (1 round)\nCraft Requirements Supply the corpse of a kraken.",
      "bulk": 0.1,
      "price": {
        "gp": 5000
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:roaring-potion-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "m6oNZUSSWYMnk7ii",
      "slug": "roaring-potion-greater",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/consumable.svg"
    },
    "sourceHash": "sha256:17693a85c0492bd6b4c922f49d72ed42ab27e07eec96595c184522495a6900ec",
    "translatableHash": "sha256:65830aadf4bf4eec9e78004aaa6445c6bf0ccc130caefc40c798d0a51f4e152d",
    "data": {
      "schemaVersion": 1,
      "name": "Roaring Potion (Greater)",
      "itemType": "consumable",
      "level": 18,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "potion",
        "sonic"
      ],
      "description": "Activate 1 (manipulate)\nRipples move constantly through a roaring potion, a cloudy liquid that growls when you open its container. Drinking it gives you access to two other activations for 1 hour.\nActivate 1 (concentrate)\nEffect You gain the effects of a 7th-rank Bullhorn spell. You can Dismiss the activation.\nActivate 1 (concentrate)\nFrequency once every 1d4\nEffect You emit a scream in a 15-foot cone that deals 10d4 sonic damage. Each creature in the area can attempt a check (fortitude, dc:38, options:area-effect,damaging-effect) saving throw.\nCritical Success The creature is unaffected.\nSuccess The creature takes half damage.\nFailure The creature takes full damage and is Frightened 1.\nCritical Failure The creature takes double damage and is Frightened 2.",
      "bulk": 0.1,
      "price": {
        "gp": 3600
      },
      "usage": "held-in-one-hand",
      "category": "potion",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:alchemical-chart-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "MnKL30xS3FHlwdS1",
      "slug": "alchemical-chart-greater",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:dc91cba70cedaacd3d812e107dea063dc16fa96ce2ee503ff3047a36da8ff617",
    "translatableHash": "sha256:0c859426997259fafaaf292ca9db99b97bc703e7be6c635acec7a21d7de19a83",
    "data": {
      "schemaVersion": 1,
      "name": "Alchemical Chart (Greater)",
      "itemType": "equipment",
      "level": 18,
      "rarity": "common",
      "traits": [
        "alchemical"
      ],
      "description": "This sturdy, rigid alchemical chart contains shorthand references on quickly mixing reagents for maximum effect. If you hold this chart while using Quick Alchemy, the items you create of 18th level or lower remain potent for 1 additional round.",
      "bulk": 0.1,
      "price": {
        "gp": 19000
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:fury-cocktail-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "MUL0ABe8h7Ugc1Jt",
      "slug": "fury-cocktail-greater",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-elixirs/fury-cocktail.webp"
    },
    "sourceHash": "sha256:ca207a7d960dddbf4ac5c0d62fb43b60de3844c34ee588ac28b1ddc73eff353c",
    "translatableHash": "sha256:e667bda5925ab49bb8cda366370a017f001bc6427da9a1e707757c35185e01f2",
    "data": {
      "schemaVersion": 1,
      "name": "Fury Cocktail (Greater)",
      "itemType": "consumable",
      "level": 18,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "elixir",
        "mutagen",
        "polymorph"
      ],
      "description": "Activate 1 (manipulate)\nA fury cocktail is a fortifying ginger beer spiked with rum and a mixer. It's rumored to have originated from a barbarian-themed festival in a popular mead hall specializing in alchemical beverages.\nBenefit You gain a +4 item bonus to melee attack rolls and an additional effect depending on the additive chosen when the brew is created. The effects last 1 hour.\n• Animalistic Lemon juice and powdered claws or talons are added to the cocktail. You gain an unarmed attack in the brawling group of your choice between a jaws attack that deals 1d6 piercing damage or a claw attack that has the agile trait and deals 1d4 slashing damage.\n• Double This cocktail is just stronger, with more ginger and more rum. You gain resistance 5 to physical damage.\n• Mournful A few flower petals add a powerful aroma to the drink. You gain resistance 10 to void damage, or resistance 10 to vitality damage if you have the void healing ability.\n• Skeptical A splash of bitters gives the drink a more complex flavor. You gain a +3 item bonus to saves against magic.\n• Titanic Yuzu juice and powdered giant hair are added to this cocktail. If you're Medium or smaller, you gain the following effects: you become Large, are Clumsy 1, and increase your reach by 5 feet (or by 10 feet if you started out Tiny).\n• Wyrmhide Pomegranate juice and elemental reagents are added to the cocktail. You gain resistance 10 to acid, cold, electricity, fire, and poison damage.\nDrawback You take a –1 penalty to AC and a –2 penalty to Reflex saves.\nEffect: Fury Cocktail (Greater)",
      "bulk": 0.1,
      "price": {
        "gp": 4000
      },
      "usage": "held-in-one-hand",
      "category": "mutagen",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:depth-charge-vii",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "nkozt1tueA0Xz6VF",
      "slug": "depth-charge-vii",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:f52adfdd85aaf24315bf4940c88fba58b6b01a558d9f1f8c3f93778cdae75d17",
    "translatableHash": "sha256:8f59980a433fc0e051fb881d89308f33047adee5bab3c9d470d81380ae4421a0",
    "data": {
      "schemaVersion": 1,
      "name": "Depth Charge VII",
      "itemType": "ammunition",
      "level": 18,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical"
      ],
      "description": "Ammunition any\nCarved with stylized images of water or aquatic life, depth charges that are fired underwater or at a submerged target function with their normal range increments and can hit no matter their normal damage type. This ammunition explodes if it hits a target underwater, dealing 15d6 bludgeoning damage in a 20-foot burst check (fortitude, dc:39, basic, showDC:all, options:area-effect) according to its type. This burst doesn't extend out of the water.",
      "bulk": 0,
      "price": {
        "gp": 3200
      },
      "usage": "",
      "category": "ammo",
      "group": "ammo"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:boulder-seed-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "OHwsumgfO1oyH7KL",
      "slug": "boulder-seed-greater",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:bab44f9b9f7ed5fdaf46fc921de287f7cb3727fd4fff3f5a640b62c0aeb16b44",
    "translatableHash": "sha256:bc3ccd02b0d456490dfa4bcd33d026ae16ef68986d5caf7dd24cd2e812986f1d",
    "data": {
      "schemaVersion": 1,
      "name": "Boulder Seed (Greater)",
      "itemType": "weapon",
      "level": 18,
      "rarity": "common",
      "traits": [
        "alchemical",
        "bomb",
        "consumable",
        "splash"
      ],
      "description": "Activate 1 Strike\nThis bomb is made of volatile fluids that rapidly expand and harden when exposed to air. A greater boulder seed grants a +3 item bonus to attack rolls and deals 4d4 bludgeoning damage and 4 bludgeoning splash damage. When activated, the bomb fills a 5-foot cube with hardened foam, which creates a boulder as hard as stone (Hardness 10, HP 40) that pushes the primary target of Large size or smaller occupying that space 5 feet away from you. On a critical hit, the target also falls Prone. The splash zone fills with rubble, creating difficult terrain. The \"boulder\" the bomb creates fails all saving throws and loses 1 Hardness per round, disintegrating into fine powder when the boulder's Hardness is reduced to 0. At that time, the difficult terrain the bomb created also disappears.",
      "bulk": 0.1,
      "price": {
        "gp": 3600
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "bomb",
      "damage": {
        "dice": 4,
        "die": "d4",
        "type": "bludgeoning"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:gearbinder-oil-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "OtFKHfUQnn97ILBC",
      "slug": "gearbinder-oil-greater",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/consumable.svg"
    },
    "sourceHash": "sha256:44e36eb58227388097af2b1342f47b40617171aab319403f7ec5b199d26ca7a8",
    "translatableHash": "sha256:23f1ac26c25be16642e008ff28a8a13e2cbb7c90e5446e4ab66837d3cc6c640c",
    "data": {
      "schemaVersion": 1,
      "name": "Gearbinder Oil (Greater)",
      "itemType": "consumable",
      "level": 18,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "incapacitation"
      ],
      "description": "Activate 1 (manipulate)\nGearbinder oil comes in a sealed pump that can squirt the oil a short distance. The oil is designed to flow through complex mechanisms and, agitated through mechanical action, foam up and form a paste that binds the works. The oil is effective against articulated constructs and machinery, including many constructs, clockworks, and mechanical hazards. You apply the oil to the target you want to bind, which must be within 10 feet of you. After the oil is applied, at the end of any round during which the target took an action with the attack, manipulate, or move trait, it must attempt a check (fortitude, dc:38) save. A mechanism that's Slowed 2 or more by gearbinder oil also can't use reactions. Gearbinder oil functions for up to 6 rounds before becoming an inert, oily residue.\nCritical Success The oil becomes inert, and the effect ends.\nSuccess The target reduces its slowed condition by 1. If the slowed condition's value is 0, the effect ends.\nFailure The target increases its slowed condition by 1, to a maximum of Slowed 3.\nCritical Failure The target increases its slowed condition by 2, to a maximum of slowed 3.",
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
    "contentId": "pf2e:item:equipment-srd:ruby-capacitor-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "PFr49j091jjb8363",
      "slug": "ruby-capacitor-major",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:1a3d8dc7b439c47a5f0654b250155aef19c9aac215aeecbdea55a7548d198313",
    "translatableHash": "sha256:2b7fe0f3b486c9fe2a09864edc29bef85f267bf0ccdd6e1a62f559f7a4712097",
    "data": {
      "schemaVersion": 1,
      "name": "Ruby Capacitor (Major)",
      "itemType": "consumable",
      "level": 18,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "talisman"
      ],
      "description": "Activate f (manipulate)\nRequirements You prepared the staff.\nThis cluster of unworked ruby is bound to the top of a staff by silver wire. When activated, it adds five temporary charges to the staff. Any spells cast from the staff before the end of the turn expend these charges first. Any unused temporary charges are lost at the end of your turn.",
      "bulk": 0,
      "price": {
        "gp": 4500
      },
      "usage": "affixed-to-a-magical-staff",
      "category": "talisman",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:snarling-badger-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "po9gLNA6GjystED5",
      "slug": "snarling-badger-greater",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:a7d743b0990d599cd64e7727f46b7d3b35b20aa14f9186e274d18e1622855bb4",
    "translatableHash": "sha256:e708639ed4c0225fe59fe1fb1a0858c4e44324faf1e53fd5c387433717f641a1",
    "data": {
      "schemaVersion": 1,
      "name": "Snarling Badger (Greater)",
      "itemType": "consumable",
      "level": 18,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "mental",
        "talisman"
      ],
      "description": "Activate f (concentrate)\nTrigger You lose the Dying condition\nRequirements You have a Wounded value of 1 or more.\nThis tarnished steel pendant is inlaid with the face of an enraged badger. When you Activate the talisman, it casts a 9th-rank Heroism on you. If you lose the wounded condition, the heroism ends immediately.",
      "bulk": 0,
      "price": {
        "gp": 5000
      },
      "usage": "affixed-to-armor",
      "category": "talisman",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:radiant-prism-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "POKglmR5IdpEEefR",
      "slug": "radiant-prism-greater",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/other/spellhearts/radiant-prism.webp"
    },
    "sourceHash": "sha256:b7d02ff15f18ee4ba457613d0a0b0c5b0e4e50055442655920ef8117aac1179a",
    "translatableHash": "sha256:7e6aba4500af0f2ef56ea550869d72c8aa70a09a7437f19e00275f6a62dfdf37",
    "data": {
      "schemaVersion": 1,
      "name": "Radiant Prism (Greater)",
      "itemType": "equipment",
      "level": 18,
      "rarity": "common",
      "traits": [
        "magical",
        "spellheart"
      ],
      "description": "This glass prism pays homage to its namesake pantheon—the Radiant Prism of Sarenrae, Desna, and Shelyn. Any armor or weapon the prism is affixed to glows softly with colored lights. The spell DC of any spell cast by activating this item is 38.\n• Armor (light) After you cast a non-cantrip spell by activating the prism, you glow with dim light in a multitude of shimmering hues, shedding light like a Torch and making you Concealed for 2 rounds.\n• Weapon After you cast a non-cantrip spell by activating the prism, your Strikes with the weapon gain the Brilliant property rune until the end of your next turn. The damage from the brilliant rune increases to 2d4 of each type.\nActivate Cast a Spell\nEffect You cast Light.\nActivate Cast a Spell\nFrequency once per day\nEffect You cast Fiery Body.\nActivate Cast a Spell\nFrequency once per day\nEffect You cast Confusing Colors.",
      "bulk": 0,
      "price": {
        "gp": 20500
      },
      "usage": "affixed-to-armor-or-a-weapon",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:ooze-ammunition-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "qJaIfdtDrysjcy37",
      "slug": "ooze-ammunition-major",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:881bc025e43f88b86af079cb3004341c23a89a2b0704b572f048cdc6dbc0e442",
    "translatableHash": "sha256:2b92758eeb0602a749d5f59982cb7266f3e5d69a2247b1620ee58bb75f1291c6",
    "data": {
      "schemaVersion": 1,
      "name": "Ooze Ammunition (Major)",
      "itemType": "ammunition",
      "level": 18,
      "rarity": "common",
      "traits": [
        "acid",
        "alchemical",
        "consumable"
      ],
      "description": "Ammunition any\nActivate 1 (manipulate)\nOoze ammunition is a capsule containing a sticky substance. If you hit a creature with activated ooze ammunition, it deals acid damage instead of its normal damage type, and the creature then takes a –15-foot penalty to Speed and 4d4 persistent acid damage until it ends the effects. On a critical hit, the creature is Immobilized for 1 round in addition to the other effects. The target can end the effects by Escaping (DC 38) the sticky foam. Other creatures can provide the action, although doing so deals half the ammunition's persistent acid damage to the assisting creature. A creature that ends the effect still takes the persistent damage that turn.\nEffect: Ooze Ammunition",
      "bulk": 0,
      "price": {
        "gp": 3250
      },
      "usage": "",
      "category": "ammo",
      "group": "ammo"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-hawthorn-8th-rank",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "rZKiSwhCT5xkBVLy",
      "slug": "wand-of-hawthorn-8th-rank",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:2f0cdf31d7514ea8fd6a89a0c7ff689bf383bec32782ed22efe9a628b1428e9c",
    "translatableHash": "sha256:cb3c447da0c1a74bd8bf6bf239dbdab108f5e37fd08415a95421770248a185bf",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Hawthorn (8th-rank)",
      "itemType": "consumable",
      "level": 18,
      "rarity": "common",
      "traits": [
        "magical",
        "plant",
        "wand"
      ],
      "description": "Carved from a hawthorn branch, this wand has a smooth handle, but the shaft remains covered in bark and long thorns. Polished red stones, arranged like a cluster of berries, decorate the pommel.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast 8th-rank Oaken Resilience, and the target sprouts long thorns like those of a hawthorn tree. While Oaken Resilience lasts, any creature that hits the target with an unarmed Strike or otherwise touches it takes 4d4 piercing damage from the thorns. A creature that has engulfed or swallowed the target takes this damage as well at the start of each of the target's turns.\nCraft Requirements Supply a casting of oaken resilience of the appropriate rank.",
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
    "contentId": "pf2e:item:equipment-srd:wand-of-hybrid-form-8th-rank",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "S9IVIHLrjnRu1x3o",
      "slug": "wand-of-hybrid-form-8th-rank",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:c63a566aa021bc2b0f8aa79cfce6afdd1d29e619f55f09b2f3034db3a94fff57",
    "translatableHash": "sha256:a89d013193303d837a74eb42b6c57ae9e914e973355c66016499cebbc03ab4ed",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Hybrid Form (8th-rank)",
      "itemType": "equipment",
      "level": 18,
      "rarity": "uncommon",
      "traits": [
        "magical",
        "polymorph",
        "wand"
      ],
      "description": "The grain of this simple wooden wand forms shifting images of sharp claws, snapping jaws, and countless creatures.\nActivate Cast a Spell; This activation takes 2 if the spell normally takes 1 to cast, or 3 if the spell normally takes 2\nFrequency once per day, plus overcharge\nEffect You Cast the Spell, selecting two forms from among those you can normally choose. You gain the benefits of both forms. For example, if one form can breathe air and the other can breathe underwater, you can breathe in both situations. If there's overlap in abilities, you gain the better one. For instance, if both have a fly Speed, you get the higher one, and if both forms have claws, you gain only the claw Strike you prefer. The GM determines which abilities overlap and which are cumulative.\nCraft Requirements Supply a casting of a spell of the appropriate rank. The spell must have a casting time of 1 or 2, must have the polymorph trait, and must allow more than one choice of battle form.",
      "bulk": 0.1,
      "price": {
        "gp": 19000
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-rolling-flames-8th-rank",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "SmMfd6rYUJ8vDGzM",
      "slug": "wand-of-rolling-flames-8th-rank",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:794cb6ab39b3d03bfbd539ae2be914db246d82ed3bfdabeb24b9c0397f53fbe7",
    "translatableHash": "sha256:382a240e1e51aaaf03cb308494ac5492205c4c9c6cfa4707fdd694159e763f37",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Rolling Flames (8th-Rank)",
      "itemType": "consumable",
      "level": 18,
      "rarity": "common",
      "traits": [
        "fire",
        "magical",
        "wand"
      ],
      "description": "The luminous design of red-orange cracks on this black obsidian wand suggests cooling lava.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast 8th-rank Floating Flame. If you create the flame on the ground, the ground in the sphere's square and all adjacent squares are coated in rolling flames until the start of your next turn. These are difficult terrain and hazardous terrain. A creature that moves on the ground takes 7 fire damage for every square of rolling flames it moves into. If a creature in the flames doesn't move on its turn, it takes the damage for each of the squares it's in at the end of its turn. The first time you Sustain the Spell each round, the sphere creates rolling flames again in its new location (or the same location if you chose not to move it), provided it's on the ground.\nCraft Requirements Supply a casting of floating flame of the appropriate rank.",
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
    "contentId": "pf2e:item:equipment-srd:wand-of-noisome-acid-8th-rank",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "T1XSnU0bwrn3m520",
      "slug": "wand-of-noisome-acid-8th-rank",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/wands/specialty-wands/wand-of-noisome-acid.webp"
    },
    "sourceHash": "sha256:0c383f41b57f7bddc200b664e085991bf0220d23685cdbb7563784fda4109080",
    "translatableHash": "sha256:c82cb0ea2454eb1159d118c32ecbfbafffbeaf3629c27f5b4800ceadf7a5bb0d",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Noisome Acid (8th-Rank)",
      "itemType": "consumable",
      "level": 18,
      "rarity": "common",
      "traits": [
        "acid",
        "magical",
        "wand"
      ],
      "description": "This greasy stick emits a stomach-churning scent when held in a hand.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast Acid Grip at 8th rank. A creature that takes initial acid damage from this spell become Sickened 1. Use your spell DC if the creature attempts to recover from this sickness. This is an olfactory effect.\nCraft Requirements Supply a casting of acid grip at 8th rank",
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
    "contentId": "pf2e:item:equipment-srd:choleric-contagion",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "TSMeh3NfrVEMulWR",
      "slug": "choleric-contagion",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:ff7e03c55c296b704c1da9170606e1608b53fe81e2bc0968e179ee9cadb3ee49",
    "translatableHash": "sha256:80ea5b17d16e90498aa6138a3cc6edddbff6528fd03776aa9c0d8670d93bebd9",
    "data": {
      "schemaVersion": 1,
      "name": "Choleric Contagion",
      "itemType": "consumable",
      "level": 18,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "injury",
        "poison"
      ],
      "description": "Activate 2 (manipulate)\nThis vile poison is contagious, causing the victim's skin to secrete the toxin, allowing it to spread to others. While under the effects of choleric contagion, the first time during per round the victim succeeds at an attack roll with an unarmed attack against another creature, the target of the attack is exposed to the poison.\nSaving Throw check (fortitude, dc:40)\nMaximum Duration 6 rounds\nStage 1 6d10 poison damage (1 round)\nStage 2 8d10 poison damage (1 round)\nStage 3 10d10 poison damage (1 round)",
      "bulk": 0.1,
      "price": {
        "gp": 4200
      },
      "usage": "held-in-two-hands",
      "category": "poison",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-dumbfounding-doom-8th-rank",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "UC7YCJmKbuau54fS",
      "slug": "wand-of-dumbfounding-doom-8th-rank",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:3b0dd210e8b1283df5c1f9305bbf19931cccb4e8751a14dad85f9e44d16e4399",
    "translatableHash": "sha256:13bd176f8e4f62501b7e370b16b315823d3fd187e22c12edf66cc1abe21b7880",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Dumbfounding Doom (8th-rank)",
      "itemType": "consumable",
      "level": 18,
      "rarity": "common",
      "traits": [
        "emotion",
        "fear",
        "incapacitation",
        "magical",
        "mental",
        "prediction",
        "wand"
      ],
      "description": "Carvings of skulls, monsters, and all manner of violence decorate this wand of blackened bone, but it makes absurd sounds when Activated, such as a honking horn, a manic giggle, or a daydreamy sigh.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast 8th-rank Impending Doom, showing the target a potential death that's gruesome and absurd. If the target becomes Frightened by the spell, it also becomes Stupefied with a value 1 higher than the frightened value. This lasts for the duration of the spell.\nCraft Requirements Supply a casting of impending doom of the appropriate rank.",
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
    "contentId": "pf2e:item:equipment-srd:spectacles-of-piercing-sight",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "uHUQnRGSKy655bTt",
      "slug": "spectacles-of-piercing-sight",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:d83b80edc82de0a1bb1179a09db65c0102327152be8227b79386397441e23d90",
    "translatableHash": "sha256:ed265fd38d7c6ecaa44e5c3d5df9e97257619f860a93d4c8f5112e8bf76c0bb5",
    "data": {
      "schemaVersion": 1,
      "name": "Spectacles of Piercing Sight",
      "itemType": "equipment",
      "level": 18,
      "rarity": "rare",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "With lenses set in a silver frame, spectacles of piercing sight grant you a +3 item bonus to visual Perception checks.\nActivate 1 (concentrate)\nFrequency once per hour\nEffect You can see into and through solid matter for 1 minute. This vision can pierce through solid materials up to 20 feet away as if looking at something in normal light even if no illumination is available. You can see through up to 1 foot of stone, 1 inch of metal, or 3 feet of wood or dirt. A thin sheet of lead blocks this vision entirely.",
      "bulk": 0,
      "price": {
        "gp": 24000
      },
      "usage": "worneyepiece",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:lightweave-scarf-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Uk342C6qpSkdjHBb",
      "slug": "lightweave-scarf-major",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:26dbd3d14448aae7f064398937df4e64312da1f415c36f6a7c3428b54efe128e",
    "translatableHash": "sha256:fdf97e53ed55418e06f3d369264bed2c9dbe5e5186e73d250be8966e2f41daf1",
    "data": {
      "schemaVersion": 1,
      "name": "Lightweave Scarf (Major)",
      "itemType": "equipment",
      "level": 18,
      "rarity": "common",
      "traits": [
        "magical",
        "spellheart",
        "visual"
      ],
      "description": "The first of these strips of glittering cloth was worn by a monk from Jinin who would interweave it into his handwraps of mighty blows. The spell DC of any spell cast by activating this item is 38.\n• Armor You gain a +3 item bonus to saving throws against illusions and Deception checks to Create a Diversion.\n• Weapon (visual) After you cast an illusion spell by activating the scarf, the weapon is shrouded in a mesmerizing illusory pattern. Your next Strike causes the target to be Confused for 1 minute if it hits. If you don't make a Strike by the end of your next turn, the illusion ends with no effect.\nEffect: Lightweave Scarf (Armor)\nActivate Cast a Spell\nEffect You cast Light.\nActivate Cast a Spell\nFrequency once per day\nEffect You cast 8th-rank Vibrant Pattern.\nActivate Cast a Spell\nFrequency once per day\nEffect You cast Confusing Colors.",
      "bulk": 0,
      "price": {
        "gp": 22000
      },
      "usage": "affixed-to-armor-or-a-weapon",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:caydens-brew-triple",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "UpUJ6NHBin7bubeX",
      "slug": "caydens-brew-triple",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:7a1f842b6e13faa04dcb052a23e4761c5dc1f267c779fef633ae05db1c074091",
    "translatableHash": "sha256:81f5b69468b29fe8aa4eeebbdacfb78f05eb07a14bf6b01b5f20a3f74324a921",
    "data": {
      "schemaVersion": 1,
      "name": "Cayden's Brew (Triple)",
      "itemType": "consumable",
      "level": 18,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "poison",
        "potion"
      ],
      "description": "Activate 1 (manipulate)\nCayden's brew is like rich beer or ale, with a golden-brown color and foamy head. For 1 hour after you drink it, you have a +1 item bonus to saving throws against fear effects. Also, you can use a single action to breathe out a 15-foot cone of intoxicating vapor with a burp that can be heard for 100 feet. Any creature in the vapor must attempt a check (fortitude, dc:40) saving throw. After you use this breath weapon, you can't do so again for 1d4.\nCritical Success The creature is unaffected.\nSuccess The creature is Clumsy 1 and Stupefied 1 for 1 round.\nFailure The creature is clumsy 1 and stupefied 1 for 1d4.\nCritical Failure The creature becomes Clumsy 2, Stupefied 2, and Sickened 1. The clumsy and stupefied conditions last until 1d4 after the sickened condition ends.\nEffect: Cayden's Brew",
      "bulk": 0.1,
      "price": {
        "gp": 3200
      },
      "usage": "held-in-one-hand",
      "category": "potion",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:mirror-goggles-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "uT8HoQ3BKI5La8Fu",
      "slug": "mirror-goggles-greater",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:0449e458a4e8b8870942aa734b99ec3b19755c4159550222704f3dc8ffb02e00",
    "translatableHash": "sha256:ce70ff904a4f78fb80363c3b59a6595c93868313e00ac327184ea898bd176338",
    "data": {
      "schemaVersion": 1,
      "name": "Mirror Goggles (Greater)",
      "itemType": "equipment",
      "level": 18,
      "rarity": "common",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "These goggles feature highly reflective lenses. While wearing the goggles, you gain a +3 item bonus to visual Perception checks and to saving throws against visual effects.\nActivate R Interact\nTrigger A creature within 60 feet targets you with a visual effect\nEffect You turn your head to reflect aspects of the triggering effect back at its creator. The creature must attempt a check (fortitude, dc:40) save as it becomes disoriented by this reflection. On a failure, the creature is Sickened 1 (Sickened 2 on a critical failure). The creature is temporarily immune for 1 hour.",
      "bulk": 0,
      "price": {
        "gp": 19000
      },
      "usage": "worneyepiece",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:ghostcallers-planchette-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "utRZnCD2XI9Q1dWE",
      "slug": "ghostcallers-planchette-greater",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:e3a37e7777d76ca036d79d06ff82df9b88c389275f149c2d638003805326d95d",
    "translatableHash": "sha256:0d012f6af2ba92b5a8ed5ae0e1bd4960c1c6e65707d9a78b00f6b442e9e16e7a",
    "data": {
      "schemaVersion": 1,
      "name": "Ghostcaller's Planchette (Greater)",
      "itemType": "equipment",
      "level": 18,
      "rarity": "common",
      "traits": [
        "magical",
        "spellheart"
      ],
      "description": "This miniature wooden planchette is engraved with symbols designed to attract spirits. When affixed, the symbols begin to glow, and the planchette turns slightly insubstantial. The spell DC of any spell cast by activating this item is 38.\n• Armor After you cast a spell by activating the planchette, you gain resistance 10 to all physical damage (except Ghost Touch) until the start of your next turn. Attacks by incorporeal creatures (such as a ghost's ghostly hand) count as ghost touch.\nEffect: Ghostcaller's Planchette - Armor\n• Weapon After you cast a spell by activating the planchette, the affixed weapon gains the effects of both the ghost touch and Greater Vitalizing property runes until the end of your next turn.\nEffect: Ghostcaller's Planchette - Weapon\nActivate Cast a Spell\nEffect You cast Void Warp.\nActivate Cast a Spell\nFrequency once per day\nEffect You cast 7th-rank Invoke Spirits\nActivate Cast a Spell\nFrequency once per day\nEffect You cast Tempest of Shades",
      "bulk": 0,
      "price": {
        "gp": 21000
      },
      "usage": "affixed-to-armor-or-a-weapon",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:clockwork-cloak",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "v9tI40skGswMQTVN",
      "slug": "clockwork-cloak",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:f759d75a649c395f1604d760c1156abdf48755185d8d5c96529ea1cf0934c2c2",
    "translatableHash": "sha256:6e4e50c283361517a26dc130ef7254fcf3d418463cd5b2364cd7b1e1e2061f82",
    "data": {
      "schemaVersion": 1,
      "name": "Clockwork Cloak",
      "itemType": "equipment",
      "level": 18,
      "rarity": "uncommon",
      "traits": [
        "clockwork",
        "invested",
        "magical"
      ],
      "description": "Paper-thin interlocking gears and winding cogs make up this bronze clockwork cloak.\nActivate r (manipulate)\nFrequency once per day\nTrigger You're struck by a melee attack with a held weapon\nEffect The folds of the cloak attempt to divert the attack and catch the weapon in the cloak's gears. Make an Athletics check to Disarm the attacking creature.\nActivate 2 (manipulate)\nEffect You wrap the cloak around yourself and the winding gears decelerate your body, causing you to enter standby mode. While in standby mode you don't need to eat, drink, or sleep. You remain aware of your surroundings but take a –4 penalty to Perception checks. You can stay in standby mode indefinitely, although your body ages normally. You can leave standby mode as a free action. If you do so to initiate combat, you gain a +2 item bonus to your initiative roll.\nEffect: Clockwork Cloak",
      "bulk": 0.1,
      "price": {
        "gp": 20000
      },
      "usage": "worncloak",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:sapling-shield-true",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "VJiKPxewJNLhimEi",
      "slug": "sapling-shield-true",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:499edd154b187600bb3d2f236fddd31909e8de45bad16622a2058d5dcd9c2a00",
    "translatableHash": "sha256:0590ee182d3487ab16b545b0c809c4c41ed880494f4ad3a2329a202c33710f9d",
    "data": {
      "schemaVersion": 1,
      "name": "Sapling Shield (True)",
      "itemType": "shield",
      "level": 18,
      "rarity": "common",
      "traits": [
        "magical"
      ],
      "description": "This surprisingly weighty, though well-balanced, wooden buckler (Hardness 15, HP 120, and BT 60) is emblazoned with the image of a sapling. The sapling withers as the shield takes damage.\nActivate 1 (concentrate)\nEffect The buckler expands, with the sapling image growing into a mighty oak tree. The buckler becomes a tower shield, gaining the corresponding AC bonus, Speed penalty, and ability to Take Cover. It keeps the same Hit Points and Broken Threshold, but its Hardness and Bulk increase by 2 in this form. The shield remains in this form until you Activate it again to revert it to a buckler.",
      "bulk": 2,
      "price": {
        "gp": 20220
      },
      "usage": "",
      "category": "shield",
      "group": "buckler"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:trueshape-bomb-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "wtRDteH3D3ME4FU9",
      "slug": "trueshape-bomb-greater",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:886c2555e2c70e78b1299db1ded62ec28806490d934ea19bd7a35884c338321a",
    "translatableHash": "sha256:0d350761070bc25dc19c403b87d308f471cabadff0a76c7dae8d0ce87f9c59d2",
    "data": {
      "schemaVersion": 1,
      "name": "Trueshape Bomb (Greater)",
      "itemType": "weapon",
      "level": 18,
      "rarity": "common",
      "traits": [
        "alchemical",
        "bomb",
        "consumable",
        "poison",
        "splash"
      ],
      "description": "Activate 1 Strike\nConcentrated wolfsbane and other anti-shapechanger reagents fill trueshape bombs. These bombs grant a +3 item bonus to attack rolls and deal 4d6 poison damage, 4d4 persistent poison damage, and 4 poison splash damage. If the primary target is under the effects of a morph or polymorph effect, it must succeed at a check (fortitude, dc:40) saving throw, or else the effects end and the creature returns to its normal form. Targets taking persistent poison damage from this bomb must succeed at another Fortitude saving throw at the same DC to change shape using a morph or polymorph effect. The persistent damage can last up to 1 minute.",
      "bulk": 0.1,
      "price": {
        "gp": 3750
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "bomb",
      "damage": {
        "dice": 4,
        "die": "d6",
        "type": "poison"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:linnorms-sankeit",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "XKsPGGbPKLkrqHwM",
      "slug": "linnorms-sankeit",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:61cbf0ad9a8a9d43de0ba8dfc47b8d30e791fc4cca3613a8cd9a0fcfa0b70f15",
    "translatableHash": "sha256:e1c96da895bfd9cde1cb423469a617a72b6af15e249acae3fa8a48df33a53134",
    "data": {
      "schemaVersion": 1,
      "name": "Linnorm's Sankeit",
      "itemType": "armor",
      "level": 18,
      "rarity": "uncommon",
      "traits": [
        "laminar"
      ],
      "description": "The first suit of +3 greater resilient antimagic sankeit made in this fashion was crafted for the Varki linnorm king Nankou, after he claimed his title by slaying a taiga linnorm. By Varki tradition, the armor was crafted using some of the slain linnorm's body to decorate the breastplate and helm, which imbued the armor with several of the linnorm's natural abilities. Though the helm is shaped like the beast's head, a linnorm's actual head would be too large for a proper helmet.\nActivate 2 (manipulate)\nFrequency once per hour\nEffect You breathe a 60-foot cone of electrified vapor, dealing 17d6 electricity damage to creatures in the area (check (reflex, dc:38, basic, options:area-effect)). The electrified mist persists in the area for 2 rounds, dealing 5d6 electricity damage (DC 38 basic Reflex save) to each creature that ends its turn in the mist. If you slew the linnorm this armor is made from, you can use the higher of your check (reflex, against:class-spell, basic, options:area-effect) instead of the listed DCs for this effect.\nActivate r (manipulate)\nTrigger A creature adjacent to you targets you with a melee attack\nEffect The creature takes 4d6 piercing damage as previously invisible magical spines leap outwards from the armor to punish them for the attack.\nCraft Requirements The initial raw materials must include the hide and skull of a taiga linnorm.",
      "bulk": 2,
      "price": {
        "gp": 22750
      },
      "usage": "",
      "category": "light",
      "group": "wood",
      "armor": {
        "armorClassBonus": 2,
        "dexterityCap": 3,
        "checkPenalty": -1,
        "speedPenaltyFeet": 0
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:implosion-dust-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "ye6XAJY21YQqRnKH",
      "slug": "implosion-dust-greater",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/consumable.svg"
    },
    "sourceHash": "sha256:16c8bad250567bbc2ab8299e85b6dec1488a429e3e92158c9b6c14bcc383e468",
    "translatableHash": "sha256:03eec504d09c6b55a0c990e019306b84ceff61c1bcbbf4e4774f39d9756f151e",
    "data": {
      "schemaVersion": 1,
      "name": "Implosion Dust (Greater)",
      "itemType": "consumable",
      "level": 18,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable"
      ],
      "description": "Activate 1 (manipulate)\nSealed in a packet so it can be released in a pressurized puff, implosion dust causes amorphous creatures to compress and shrink by hardening and even evaporating the liquid components of their physical forms. It's effective at weakening water elementals, air elementals, oozes, and other creatures the GM determines are similarly amorphous, which can even include particularly gelatinous aberrations. You release the dust toward one creature within 5 feet of you, which must attempt a check (fortitude, dc:38) saving throw. The target must repeat the saving throw at the end of each of its turns. Implosion dust functions for up to 6 rounds. It then becomes inert, and the creature returns to its normal size.\nCritical Success The dust becomes inert, and the creature returns to its normal size.\nSuccess The target increases in size one step, up to its normal size. If it's at its normal size after the increase, the effect ends.\nFailure The target decreases in size one step, to a minimum of Tiny. The reach of each of its Strikes decreases by 5 feet, to a minimum of 5 feet if the creature is Small or larger, or a minimum of 0 feet if the creature is Tiny. Shrinking also imposes a status penalty to the creature's physical melee damage. This penalty is –2 for every step lower than its normal size the creature is.\nCritical Failure As failure, but the target decreases in size by two steps.",
      "bulk": 0.1,
      "price": {
        "gp": 4100
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:rusting-ammunition-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Z333awQuoTxGkbgG",
      "slug": "rusting-ammunition-greater",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:ef59c33a5fec922bd415b4b76fdab1b7c8738a0c11ca2bebef0febf29c6d7bc2",
    "translatableHash": "sha256:f1cdf4073fc022f05f89c167eabc537cf8aac1b6fd95aedaf3aeb05c1b616dfa",
    "data": {
      "schemaVersion": 1,
      "name": "Rusting Ammunition (Greater)",
      "itemType": "ammunition",
      "level": 18,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "force"
      ],
      "description": "Ammunition any\nActivate 1 Interact\nRusting ammunition is made using an ore louse's saliva and, when activated, deals damage to objects or creatures primarily made of metal. The target takes 4d8 persistent force damage for up to 6 rounds. A creature that drops to 0 Hit Points while taking this persistent damage crumbles into fine powder; its gear remains. For an object, the ammunition destroys a 10-foot cube.\nCraft Requirements Supply the saliva of an Ore Louse",
      "bulk": 0,
      "price": {
        "gp": 600
      },
      "usage": "",
      "category": "ammo",
      "group": "ammo"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-clinging-rime-8th-rank",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Z8o1V947lwkhPhzI",
      "slug": "wand-of-clinging-rime-8th-rank",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:15cbaae2b46f0785a38d463ddc8d579c901031d3da12d45260fd102fd997e8a5",
    "translatableHash": "sha256:3d6d27216470e97b2f4c23e7a1168e744574f4549a3bf42811639ec161ba76b4",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Clinging Rime (8th-rank)",
      "itemType": "consumable",
      "level": 18,
      "rarity": "common",
      "traits": [
        "cold",
        "magical",
        "wand",
        "water"
      ],
      "description": "A thin layer of frost coats this gnarled holly wand.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast 8th-rank Frigid Flurry. After you cast the spell, the ice crystals freeze to flesh and other surfaces, clinging to the creatures in the area. Each creature that fails its save takes 2d6 persistent cold damage.\nCraft Requirements Supply a casting of Frigid Flurry of the appropriate rank.",
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
    "contentId": "pf2e:item:equipment-srd:shadowmist-cape",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "3HR6rJT9NrIRUwe2",
      "slug": "shadowmist-cape",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:1068385f1395e5bbdae20c4e32ba460b06e1f79099e826e2e10dc849ab9bbff1",
    "translatableHash": "sha256:083442dbe35e7083e417070ac58fb67a444a21cc8180c406cb52c461304decb5",
    "data": {
      "schemaVersion": 1,
      "name": "Shadowmist Cape",
      "itemType": "equipment",
      "level": 19,
      "rarity": "common",
      "traits": [
        "apex",
        "invested",
        "magical"
      ],
      "description": "This black cape flows more like a vaporous liquid than fabric. The cape grants you a +3 item bonus to Stealth checks. When you invest the cape, you either increase your Dexterity modifier by 1 or increase it to +4, whichever would give you a higher value.\nActivate R (manipulate)\nFrequency once per hour\nTrigger A creature misses you with an attack\nEffect Attempt a Stealth check against the triggering creature's Perception DC. If you roll a success, you're Hidden from that creature until the end of your next turn or until right after you use a hostile action against that creature. If you roll a critical success, you're hidden from that creature until the end of your next turn, even if you use hostile actions against that creature.\nActivate 2 (manipulate)\nFrequency once per day\nEffect With a twirl of the cape, you transform yourself into a puff of gray smoke. You cast Vapor Form on yourself.",
      "bulk": 0.1,
      "price": {
        "gp": 40000
      },
      "usage": "worncloak",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:desolation-locket-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "3p4fk9pbwDeue1NG",
      "slug": "desolation-locket-major",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:3b99b56088feb04605c6c39e00c2c9b19474f0c84ed30f19a0893c1d3de11f08",
    "translatableHash": "sha256:7bdc2b22dac5c1518037a4e79ac6b8eb8b32001335e192632fc6c20fb6739300",
    "data": {
      "schemaVersion": 1,
      "name": "Desolation Locket (Major)",
      "itemType": "equipment",
      "level": 19,
      "rarity": "common",
      "traits": [
        "magical",
        "spellheart"
      ],
      "description": "The surface of this golden, heart-shaped locket is nearly worn through with cracks. If opened, it reveals a portrait of someone the bearer loved dearly and has lost. The spell DC of any spell cast by activating this item is 41.\n• Armor The desolation locket numbs you to further despair, and you gain a +4 item bonus to saving throws against emotion effects. When you critically fail a saving throw against an emotion effect, you get a failure instead.\n• Weapon(emotion, mental) After you cast a non-cantrip spell by activating the locket, you emanate an aura of hopelessness in a 5-foot emanation until the start of your next turn. A creature that ends its turn in the aura must succeed at a check (will, dc:41, traits:emotion,mental) saving throw against the locket's spell DC or become Slowed 1 (Slowed 2 on a critical failure) until the end of its next turn.\nEffect: Desolation Locket - Armor\nEffect: Desolation Locket - Weapon\nActivate Cast a Spell\nEffect You cast Haunting Hymn.\nActivate Cast a Spell\nFrequency once per day\nEffect You cast 7th-rank Wave of Despair.\nActivate Cast a Spell\nFrequency once per day\nEffect You cast Canticle of Everlasting Grief.",
      "bulk": 0,
      "price": {
        "gp": 34000
      },
      "usage": "affixed-to-armor-or-a-weapon",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:tattletale-orb-obsidian",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "4j5tJ27qfBN7Xd6d",
      "slug": "tattletale-orb-obsidian",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/held-items/crystal-ball-obsidian.webp"
    },
    "sourceHash": "sha256:1ac7a98e7aff881b7f54bc7aed2ae6482ad99bc0ae9fd0289d1c59ab18b4a6ed",
    "translatableHash": "sha256:cae4e22d2c0dab64072e0a8def0e2af7d5d232b03919bd1afa1d85c4c051571f",
    "data": {
      "schemaVersion": 1,
      "name": "Tattletale Orb (Obsidian)",
      "itemType": "equipment",
      "level": 19,
      "rarity": "rare",
      "traits": [
        "cursed",
        "magical",
        "scrying"
      ],
      "description": "A tattletale orb is a polished crystal sphere that appears to function as a Crystal Ball (Obsidian). If those whom you use the orb to scry on roll better than a critical failure on their saving throw, they receive a telepathic message alerting them to the scrying. A success or better at the save allows the target to choose to allow you to scry anyway, knowing they can use an aspect of the orb against you, according to the orb's type. A creature that rolls a critical success on the saving throw also learns your name and location. Once you Activate a tattletale orb or use it to cast one of your scrying spells, it fuses to you. You must succeed at a Will save, using the scrying Will DC of a crystal ball of the orb's type, to use another such device.\nTattletale orbs come in the same types as crystal balls, with the same activations and powers. However, your target must roll a critical failure on the saving throw for the orb to function as normal for that type of crystal ball.\nThe target is temporarily immune to the orb's true seeing for 24 hours. During that time, you see a false vision of the target's choice if you scry on the target. Despite being higher level than the spell, you can't disbelieve this illusion if scrying through the orb.",
      "bulk": 0.1,
      "price": {
        "gp": 32000
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:numbing-tonic-true",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "7VDf5tQKh01XV6HQ",
      "slug": "numbing-tonic-true",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-elixirs/addiction-suppressant.webp"
    },
    "sourceHash": "sha256:d323d1fcb687748ebb404ad90ad45762db52404db078222ef8a9ec74130260a5",
    "translatableHash": "sha256:ecb6431ff0f0ead84404765d3689294ec294bfb3d313f1d898159727db6c2ebc",
    "data": {
      "schemaVersion": 1,
      "name": "Numbing Tonic (True)",
      "itemType": "consumable",
      "level": 19,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "elixir"
      ],
      "description": "Activate 1 (manipulate)\nNumbing tonic makes it easier to push through the pain of battle and shrug off otherwise debilitating blows. You gain 25 temporary Hit Points when you drink the elixir, and again at the start of each of your turns for 1 minute.\nEffect: Numbing Tonic",
      "bulk": 0.1,
      "price": {
        "gp": 8000
      },
      "usage": "held-in-one-hand",
      "category": "elixir",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:mantle-of-amazing-health",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "aJ3mYuV0rjFBPOsg",
      "slug": "mantle-of-amazing-health",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:86780b6ec483cf126e18bf3f692a967750b473d068d314f6b587a5fa41adeea1",
    "translatableHash": "sha256:4edb597055f10fd9df12d5afa301fe6ae8906826be1f1dc182d380bd976c07e7",
    "data": {
      "schemaVersion": 1,
      "name": "Mantle of Amazing Health",
      "itemType": "equipment",
      "level": 19,
      "rarity": "common",
      "traits": [
        "apex",
        "invested",
        "magical"
      ],
      "description": "This ragged cloak doesn't appear to be anything special at first glance, seemingly made from mangy black bear fur with various rings of blackened iron piercing the edge of the skin. While somewhat off-putting, the mantle grants a +2 status bonus to all Fortitude saving throws against disease and poison. When you invest the mantle, you either increase your Constitution modifier by 1 or increase it to +4, whichever would give you a higher value.\nActivate R (manipulate)\nFrequency once per round\nTrigger You take damage\nEffect Drawing the cloak around you, you reduce the damage taken by 10.\nActivate 2 (concentrate, manipulate)\nFrequency once per hour\nEffect If you're currently afflicted by a poison or a disease, you can hold the cloak tight to your body and immediately attempt a saving throw to end the effect. If that saving throw succeeds, you end the effect of either the poison or disease no matter the stage of the affliction. Furthermore, you gain immunity to that poison or disease for 24 hours.",
      "bulk": 0.1,
      "price": {
        "gp": 40000
      },
      "usage": "worncloak",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:insight-coffee-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "CorMilTH3XKGW49D",
      "slug": "insight-coffee-greater",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:2d3a03b821ea104e6fd8f302f7d8f19d3965b23e3e6413f5e258c0599d8b5979",
    "translatableHash": "sha256:33ad24e474005f19a4b25ef4f7f5166d046e4ce78e800c58f11962feac536037",
    "data": {
      "schemaVersion": 1,
      "name": "Insight Coffee (Greater)",
      "itemType": "consumable",
      "level": 19,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "elixir"
      ],
      "description": "Activate 1 (manipulate)\nA popular choice for investigators studying alchemy, insight coffee is infused with alchemical flavoring during percolation. For 1 hour after you drink an insight coffee, you use d8s instead of d6s for your extra damage from the strategic strike class feature, if you have it. You also gain a +4 item bonus to checks to Recall Knowledge with a skill determined by the blend chosen when the item is crafted.\n• Double Coffee Religion\n• Hazelnut Nature\n• Mocha Arcana\n• Vanilla Society\n• Pumpkin Spice Occultism\n• Toffee Medicine\nEffect: Insight Coffee",
      "bulk": 0.1,
      "price": {
        "gp": 7500
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:clarity-goggles-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "fbhRZskdWPrh4ML8",
      "slug": "clarity-goggles-greater",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:7e7e8357c91bb0bd3285d6fe0c19ae19363368d7eae3cf022d65fcaaae637a75",
    "translatableHash": "sha256:93843a787c78671401d943e171327f28723675163e2d413bf432710a0f756009",
    "data": {
      "schemaVersion": 1,
      "name": "Clarity Goggles (Greater)",
      "itemType": "equipment",
      "level": 19,
      "rarity": "common",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "Clarity goggles feature faceted lenses that filter your surroundings from several slightly different angles at once, giving you a sharper picture of them. While wearing the goggles, you gain a +3 item bonus to visual Perception checks.\nActivate 2 (concentrate)\nFrequency once per day\nEffect You focus on your environment and the creatures around you to see them as they really are. The GM rolls a secret counteract check using your Perception bonus against any illusion effect created by a 9th-rank or lower spell or a creature of 19th level or lower. You must be able to see the illusion, and it must be within 60 feet. If the check succeeds, you see through the illusion for 10 minutes.\nPFS Note: The Item Level determines the counteract rank, not the actor level.",
      "bulk": 0,
      "price": {
        "gp": 32500
      },
      "usage": "worneyepiece",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:blade-byrnie-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "fHkVbTtjhITsE2NJ",
      "slug": "blade-byrnie-major",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/armor/chainshirt.webp"
    },
    "sourceHash": "sha256:3bab103ab780cc86195a44fcd27611172f1fd0fb1fb038360af930da3da299b3",
    "translatableHash": "sha256:78f202294e925899b7f0e3ba133d5d9f5d3ffdf8ef358d08ac206247d70f6402",
    "data": {
      "schemaVersion": 1,
      "name": "Blade Byrnie (Major)",
      "itemType": "armor",
      "level": 19,
      "rarity": "common",
      "traits": [
        "flexible",
        "noisy"
      ],
      "description": "Instead of chain links, this +3 greater resilient chain shirt is assembled from metal \"leaves\" that each resemble a small blade.\nActivate 1 (manipulate)\nEffect You pull a link from the armor, which transforms into a +3 greater striking Dagger. The dagger disappears and reappears as a link in the armor after you Strike with it, or at the end of this turn if you don't make a Strike. You can Activate the blade byrnie in place of an Interact action to draw a weapon for abilities such as the Quick Draw feat.\nUpgrading the runes on the blade byrnie makes the daggers pulled from it more powerful. The daggers have a +2 weapon potency rune if the armor has a +2 armor potency rune, or a +3 weapon potency rune if the armor has a +3 armor potency rune.",
      "bulk": 1,
      "price": {
        "gp": 35000
      },
      "usage": "",
      "category": "light",
      "group": "chain",
      "armor": {
        "armorClassBonus": 2,
        "dexterityCap": 3,
        "checkPenalty": -1,
        "speedPenaltyFeet": 0
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wyrm-spindle-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "j2IDa7wVQdNrPnDl",
      "slug": "wyrm-spindle-major",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:229e920423a01275052f71f4f86d3b6944e9ab3531ff8e348f8faad5f14ab874",
    "translatableHash": "sha256:b3dca083c1d4bda87b7812c00452e691e547995cdd7e82baacf92ac4a5f64e52",
    "data": {
      "schemaVersion": 1,
      "name": "Wyrm Spindle (Major)",
      "itemType": "equipment",
      "level": 19,
      "rarity": "common",
      "traits": [
        "magical",
        "spellheart"
      ],
      "description": "The broken tips of four dragon claws—one of each magical tradition—are set into a silver fitting. They protrude in the shape of a star or compass.\n• Armor After you cast a non-cantrip spell by activating the spindle, you gain resistance 15 to fire, force, mental, and spirit for 1 minute.\n• Weapon After you cast a non-cantrip spell by activating the spindle, you gain a Dragon Breath activity that takes 2 actions and deals 12d6 damage to all creatures in a 30-foot type:cone with a check (reflex, dc:41, basic, options:area-effect) save. Choose the type of damage when you use Dragon Breath: 12d6 fire damage, 12d6 force damage, 12d6 mental damage, or 12d6 spirit damage. You can use this activity once before the end of your next turn.\nEffect: Wyrm Spindle - Armor\nActivate Cast a Spell\nEffect You cast Gouging Claw.\nActivate Cast a Spell\nFrequency once per day\nEffect You cast Summon Draconic Legion.",
      "bulk": 0,
      "price": {
        "gp": 40000
      },
      "usage": "affixed-to-armor-or-a-weapon",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:pale-fade",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "m16rhrqO81674IxV",
      "slug": "pale-fade",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/consumable.svg"
    },
    "sourceHash": "sha256:40f37934da5a91d2232b79f1b44a91e54f85f92e9120e6f287b0f64a4f2df77b",
    "translatableHash": "sha256:8072bad611e8b59524f308d37fcad145540d5ecdb2a6391de2f1dfef434bb7c3",
    "data": {
      "schemaVersion": 1,
      "name": "Pale Fade",
      "itemType": "consumable",
      "level": 19,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "injury",
        "poison"
      ],
      "description": "Activate 2 (manipulate)\nPale fade is a white ointment with a sharp, earthy scent. The poison rapidly desiccates flesh, which then crumbles and forms a cloud of pallid dust. If the victim is Concealed by this poison, then the dust cloud also conceals other creatures from the victim.\nSaving Throw check (fortitude, dc:42)\nMaximum Duration 6 rounds\nStage 1 10d6 poison damage and Drained 1 (1 round)\nStage 2 12d6 poison damage, drained 1, and concealed (1 round)\nStage 3 15d6 poison damage, drained 1, and concealed (1 round)",
      "bulk": 0.1,
      "price": {
        "gp": 6000
      },
      "usage": "held-in-two-hands",
      "category": "poison",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:cloister-robe-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "mhCLoihjfhoqpiVp",
      "slug": "cloister-robe-major",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:996deb74ee7bfd64f4d296e68c28d79dfa6f41b9d9e2de13e5317909d4aee320",
    "translatableHash": "sha256:b5b3fe56e61fd8df78366df6c8678f4d87e0dd55d9226064c38be9ae43cb08d6",
    "data": {
      "schemaVersion": 1,
      "name": "Cloister Robe (Major)",
      "itemType": "armor",
      "level": 19,
      "rarity": "common",
      "traits": [
        "divine",
        "focused",
        "invested"
      ],
      "description": "The most devoted, cloistered clerics wear a cloister robe. Decorations symbolic of a specific deity adorn the robe, and the robe's colors and the complexity of its construction fit the deity's outlook. The robe serves as a religious symbol of that deity, and it doesn't need to be wielded to provide that benefit.\nThe robe is +3 greater resilient explorer's clothing and grants a +2 item bonus to Religion checks. The robe doesn't grant any benefits to a wearer who doesn't worship the deity tied to the robe. In addition, when you cast a domain spell from one of the deity's domains, you gain resistance to damage from divine spells until the end of your next turn. This resistance is equal to half the robe's level.\nEffect: Cloister Robe\nActivate—Domain Devotion F (concentrate)\nFrequency once per day\nEffect Gain 1 Focus Point, which you can spend only to cast a cleric domain spell for a domain belonging to the deity the vestments are dedicated to. If you don't spend this point by the end of this turn, it is lost.\nCraft Requirements You are a cleric who worships the deity tied to the robe.",
      "bulk": 0.1,
      "price": {
        "gp": 32000
      },
      "usage": "",
      "category": "unarmored",
      "group": "cloth",
      "armor": {
        "armorClassBonus": 0,
        "dexterityCap": 5,
        "checkPenalty": 0,
        "speedPenaltyFeet": 0
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:ouroboros-buckles",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "o4U9Nt7ac7AlolNQ",
      "slug": "ouroboros-buckles",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:6322d959c6811e01ef98308bb89b907bec981c06081911c2775f51fb8fbdd503",
    "translatableHash": "sha256:6afd9df2c8d4910b53a6b3d9533672b2e2a253ab514fe3e6f7a2408ffe648e15",
    "data": {
      "schemaVersion": 1,
      "name": "Ouroboros Buckles",
      "itemType": "armor",
      "level": 19,
      "rarity": "rare",
      "traits": [
        "adjusted",
        "comfort"
      ],
      "description": "This ominous-looking +3 greater resilient greater acid-resistant buckle armor is deep red in color, favored by assassins who worship Norgorber or Asmodeus, and if unfastened, the many belts and buckles writhe like living snakes. Its form and abilities were inspired by ouroboros, embodiments of eternity that continually consume and regenerate their bodies and appear to be formed from masses of snakes. Ouroboros buckles have the comfort trait. However, while wearing ouroboros buckles, the unfathomable concept of infinity pulls at your mind, and each time you awaken, you'd swear the armor hissed into your ear while you were asleep. The hissing suggested secret wisdom to you in Aklo, though you only ever remember it vaguely, like a fading dream.\nActivate 2 (concentrate, manipulate)\nFrequency once per day\nEffect You call forth the cursed regenerative blood of an ouroboros to recover from your wounds. You gain regeneration 15 for 1 minute; fire damage deactivates this regeneration. Each time you regain Hit Points from this regeneration, if you're in your normal form, you collapse into a Large swarm of Tiny snakes. This is a polymorph effect that changes you into a battle form.\nWhen you're a swarm of snakes, you gain low-light vision, imprecise scent (30 feet), a Speed of 20 feet, a climb Speed of 20 feet, and a swim Speed of 20 feet. You have an AC of 16 + your level and ignore your armor's check penalty and Speed reduction. Also, you gain resistance 5 to physical damage and weakness 5 to area damage and splash damage. You can use none of your normal Strikes. Instead, you can use Swarming Bites, a single action that deals 4d4 piercing damage damage to creatures in your space with a check (reflex, dc:41, basic, showDC:all, options:area-effect) save.\nIf you're in this battle form and are already at full HP when your regeneration occurs, the snakes instantaneously slither together, and you transform into your original form.\nEffect: Ouroboros Buckles\nEffect: Ouroboros Buckles (Swarm of Snakes)\nActivate R (concentrate)\nFrequency once per minute\nTrigger A foe within 15 feet hits you with a Strike that deals slashing or piercing damage\nEffect Your ouroboros buckles spray acidic blood in a 15-foot cone toward the foe, dealing 5d6 acid damage with a check (reflex, dc:41, basic, showDC:all, options:area-effect) save.",
      "bulk": 1,
      "price": {
        "gp": 40000
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
    "contentId": "pf2e:item:equipment-srd:contagion-metabolizer-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "ommn7wIgLyWHGL11",
      "slug": "contagion-metabolizer-greater",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/consumable.svg"
    },
    "sourceHash": "sha256:98a2f4bcb6099aada6e2069b5ccca80972a6140e1b44c09ae5687ba116ae0210",
    "translatableHash": "sha256:ce25f28b9ac8635300bc62cbb6e446fb80bccd317d142230ba44e6bab4ed78ba",
    "data": {
      "schemaVersion": 1,
      "name": "Contagion Metabolizer (Greater)",
      "itemType": "consumable",
      "level": 19,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "elixir",
        "healing"
      ],
      "description": "Activate 1 (manipulate)\nContagion metabolizers seek out toxins in the bloodstream and attempt to purify them into humors the body processes naturally. When you drink this elixir, it attempts a counteract check with a 1d20+30 modifier to remove the highest-level poison or disease afflicting you. The elixir has a counteract rank of 10. This takes longer for a disease—the counteract check doesn't happen until 10 minutes after you drink the elixir. After drinking, you become temporarily immune to contagion metabolizers for 1 hour.\nIf you're a chirurgeon alchemist and have powerful alchemy, you can substitute your statistics when you create a contagion metabolizer using Quick Alchemy, if your stats are higher. This replaces the counteract rank with half your level rounded up and the counteract modifier with your class DC – 10.",
      "bulk": 0.1,
      "price": {
        "gp": 8000
      },
      "usage": "held-in-one-hand",
      "category": "elixir",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:soaring-wings-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "pIy2L56i70OUd2HZ",
      "slug": "soaring-wings-major",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:779308801991e1d32aee464ebdd87f5ab0565486d99d9269b28b9625ab83cab5",
    "translatableHash": "sha256:a06cfc066dec61a4f7070b14699d1cf7933f5bd8cfc838667fba24934bb888b8",
    "data": {
      "schemaVersion": 1,
      "name": "Soaring Wings (Major)",
      "itemType": "equipment",
      "level": 19,
      "rarity": "common",
      "traits": [
        "invested",
        "magical",
        "tattoo"
      ],
      "description": "Wings, normally tattooed on the upper back, enable you to fly when activated. The visual manifestation is typically a slight glow or ripple in the ink, but some artists make it so the tattoo creates a glowing aura or lines of light in the shape of wings.\nActivate 2 (concentrate)\nEffect You gain a fly Speed equal to either your land Speed or 20 feet, whichever is greater.\nYou can activate the tattoo any number of times, and the effect lasts until you Dismiss the activation.",
      "bulk": 0,
      "price": {
        "gp": 38000
      },
      "usage": "tattooed-on-the-body",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:starfall-shield",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "puPx1rmbhjNM2lcz",
      "slug": "starfall-shield",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/shield.svg"
    },
    "sourceHash": "sha256:f9405411136cc6b30092d6b4df9e9f62a3beb470c28434d4ff2a960a461ddd57",
    "translatableHash": "sha256:03c11612ae8256e37f09d1482b2d7e3921e5f88122d16be27c5f052c10548acb",
    "data": {
      "schemaVersion": 1,
      "name": "Starfall Shield",
      "itemType": "shield",
      "level": 19,
      "rarity": "uncommon",
      "traits": [
        "magical"
      ],
      "description": "This high-grade adamantine heavy rondache (Hardness 17, HP 100, BT 50) bears a +3 greater striking shield boss and has dents that resemble craters on its surface. While wielding the shield, you have fire resistance 15.\nActivate 1 (manipulate)\nFrequency once per day\nEffect You Stride up to three times. This movement doesn't trigger reactions and ignores difficult terrain. At the end of your movement, you deal 6d10 bludgeoning damage in a 10-foot emanation and 14d6 fire damage in a 40-foot emanation (check (reflex, dc:40, basic, options:area-effect), with the results applying to both the bludgeoning and fire damage). The space where you end your movement and all adjacent spaces become difficult terrain for 1 minute, and the shield glows red-hot for 10 minutes, during which it gains the effect of the greater flaming property rune.",
      "bulk": 1,
      "price": {
        "gp": 23000
      },
      "usage": "",
      "category": "shield",
      "group": "heavy-rondache"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:cube-of-recall",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "qnj1999r0BXo4C31",
      "slug": "cube-of-recall",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:99bbef1e3d206366c07ba130b9a86b2da973d9841627254663c6e272d488e0a3",
    "translatableHash": "sha256:febbe1a97b74051e2a62c9bcd61eb293e58422074644ff825cfa07da30b3f228",
    "data": {
      "schemaVersion": 1,
      "name": "Cube of Recall",
      "itemType": "equipment",
      "level": 19,
      "rarity": "common",
      "traits": [
        "magical"
      ],
      "description": "This small cube has smooth matte sides. One side is black, the opposite side is white, and the other four are various shades of gray. Each side can be attuned to a location and then teleport you back to that spot in the blink of an eye.\nActivate 10 minutes (concentrate, manipulate)\nEffect Pick one side of the cube and set it face up. You attune the cube to the location you currently occupy. Each side can be attuned to only one location. Once you use this action to attune to a location, the side you pick loses any previously attuned location.\nActivate 3 (concentrate, manipulate, teleportation)\nEffect While speaking a word of command and bringing the location into your mind, you push the corresponding side of the cube. You teleport to the location attuned to the side you press, within 100 feet of the attuned location, as long as that location is on the same planet. If it's not, your activation produces no effect, but the attunement remains.",
      "bulk": 0.1,
      "price": {
        "gp": 40000
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-toxic-blades-8th-rank",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "s9ciKYFPOepnHpxG",
      "slug": "wand-of-toxic-blades-8th-rank",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:991404bd7fb08859cc08f751a8276c2c4c598c3f8a0f894d22d104f035d06a88",
    "translatableHash": "sha256:035998f07aad92c14a35f270467eddc9b3f590006146dbfaa6e00766e36e7ace",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Toxic Blades (8th-Rank)",
      "itemType": "consumable",
      "level": 19,
      "rarity": "common",
      "traits": [
        "force",
        "magical",
        "poison",
        "wand"
      ],
      "description": "This slender metal wand is tinted green and small images of bladed weapons are etched on its surface.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast 8th-rank Blessed Boundary. Damage from the wall also exposes the damaged creature to Cerulean Scourge. The poison uses its normal DC. A creature can be exposed to the poison no more than once per turn.\nCraft Requirements Supply a casting of Blessed Boundary of the appropriate rank.",
      "bulk": 0.1,
      "price": {
        "gp": 37500
      },
      "usage": "held-in-one-hand",
      "category": "wand",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:chromatic-jellyfish-oil-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "SeIweTBlvD1EipTQ",
      "slug": "chromatic-jellyfish-oil-greater",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:2931bd7af7e6fa48659059a87d54fa3f4744e76d55b794478b5931851012191c",
    "translatableHash": "sha256:1ab17965c694503293a66516975e5eee3eff978b107cd8f141c2a5f5f4646bac",
    "data": {
      "schemaVersion": 1,
      "name": "Chromatic Jellyfish Oil (Greater)",
      "itemType": "consumable",
      "level": 19,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "elixir"
      ],
      "description": "Activate 1 (manipulate)\nMade from several oils of differing hues extracted from jellyfish and rare plants, the layers of chromatic jellyfish oil stack to form a rainbow within their vial. For 10 minutes after consuming chromatic jellyfish oil, you gain resistance 15 to precision damage and extra damage from critical hits. While the effect lasts, you ignore difficult terrain caused by moving through tight spaces that aren't tight enough to force you to Squeeze, and you can move 5 feet per round when you successfully Squeeze (or 10 feet per round on a critical success). You can also Crawl at half your Speed.\nEffect: Chromatic Jellyfish Oil",
      "bulk": 0.1,
      "price": {
        "gp": 5200
      },
      "usage": "held-in-one-hand",
      "category": "elixir",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:spell-echo-shot",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "SxXy4a8uHf88iCf9",
      "slug": "spell-echo-shot",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:b9a44feb9aadc4ac795ac875f6f5593f0cb2f77adb14abbcae9bcfb534a563a1",
    "translatableHash": "sha256:0abc8fb4099f8236eda30e9e9af96e1ae01034ac4d6560bcc5a5bcf37276dc9f",
    "data": {
      "schemaVersion": 1,
      "name": "Spell Echo Shot",
      "itemType": "ammunition",
      "level": 19,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical"
      ],
      "description": "Ammunition any\nActivate 1 (concentrate)\nGenerous amounts of djezet and orichalcum mix in a spell echo shot. When you Activate it, you name up to four creatures, in addition to you, that the ammunition's magic works for. When spell echo shot strikes a target, which can be a square, it remains intact. It moves with a creature it struck, unless the GM determines otherwise, until that creature regains any Hit Points. If it doesn't stick to the target, the active ammunition instead falls into the target's space, remaining active. If you or one of the four selected creatures include the ammunition in the area of a spell that is 5th rank or lower; has an area of a burst, cone, or line; and does not have a duration, the materials in the ammunition immediately duplicate that spell with the same parameters. A duplicated spell can't be duplicated again by another effect. Duplicating a spell destroys the ammunition, which otherwise remains active for 1 minute.",
      "bulk": 0,
      "price": {
        "gp": 5500
      },
      "usage": "",
      "category": "ammo",
      "group": "ammo"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:library-robes-true",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "TBmDARyj67joVe4m",
      "slug": "library-robes-true",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/armor/scroll-robes.webp"
    },
    "sourceHash": "sha256:791bb3c85095ea4a4e842a07fa6037e98bfe8522842b803ed9b7c22ec236e9a7",
    "translatableHash": "sha256:ede06a9af705718f197ac11a201b9f3c3505a6422047685dcde935eab7c77996",
    "data": {
      "schemaVersion": 1,
      "name": "Library Robes (True)",
      "itemType": "armor",
      "level": 19,
      "rarity": "common",
      "traits": [
        "inscribed"
      ],
      "description": "These +3 greater resilient scroll robes magically store a spell for you. During your daily preparations, choose one spell you know of 9th rank or lower. You inscribe that spell on the robes, as though you had done so using the robes' inscribed trait, but without needing to go through the normal scribing process. You must provide the minimum amount of materials to Craft one scroll of that spell (typically half the Price of a scroll of that level plus any extra cost required for the spell). You don't need to be trained in Crafting, nor do you need the Magical Crafting feat. Using this ability erases any scroll already inscribed on the robe.",
      "bulk": 0.1,
      "price": {
        "gp": 36000
      },
      "usage": "",
      "category": "unarmored",
      "group": "cloth",
      "armor": {
        "armorClassBonus": 0,
        "dexterityCap": 5,
        "checkPenalty": 0,
        "speedPenaltyFeet": 0
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:poison-concentrator-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "tOYitD9BanOPovcD",
      "slug": "poison-concentrator-major",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/equipment.svg"
    },
    "sourceHash": "sha256:62cb6d9c7a6917709ca26f50a77b276ada3fa0b5ceb026cd5aaf25d1b14c2a3e",
    "translatableHash": "sha256:dbce35fb07ac9fa418b3ef02cfd6c15baa6e583c665df8b417d9d4cbef15dcb1",
    "data": {
      "schemaVersion": 1,
      "name": "Poison Concentrator (Major)",
      "itemType": "equipment",
      "level": 19,
      "rarity": "common",
      "traits": [
        "additive1",
        "alchemical"
      ],
      "description": "This compression apparatus can reduce two poisons into a more concentrated dose. As a 10-minute activity that has the manipulate trait, you can use a poison concentrator to combine two doses of the same infused alchemical poison of level 18 or lower. The concentrated poison has a +1 item bonus to its DC, and its level is increased by 1.",
      "bulk": 0.1,
      "price": {
        "gp": 31000
      },
      "usage": "held-in-two-hands",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:brightbloom-posy-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "XazXltJ0tsYy1xXQ",
      "slug": "brightbloom-posy-major",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:56d71b39ff5f5ff7081887a23da135d96a4db51cd1ee11d9fac74f327f8b3274",
    "translatableHash": "sha256:3aec54719653329ff27b93f889a3958e3dd0b106209a191aac559c46524a20ef",
    "data": {
      "schemaVersion": 1,
      "name": "Brightbloom Posy (Major)",
      "itemType": "equipment",
      "level": 19,
      "rarity": "common",
      "traits": [
        "magical",
        "plant",
        "spellheart"
      ],
      "description": "Appearing as vibrant as the day they were picked, this cluster of flowers is arranged in a small spray, tied with a red satin ribbon. The spell DC of any spell cast by activating this item is 41.\n• Armor You gain the ability to speak with flowers, as Speak with Plants.\n• Weapon (disease) After you cast a plant spell by activating the posy, pollen coats your weapon. Your next Strike causes the target to be Sickened 1 on a hit (Sickened 2 on a critical hit). If the creature attempts to recover, it sneezes rather than retching (rolling against the spellheart's spell DC). If you don't make a Strike by the end of your next turn, the pollen becomes inert. Plant creatures are immune.\nActivate Cast a Spell\nEffect You cast Tangle Vine.\nActivate Cast a Spell\nFrequency once per day\nEffect You cast 6th-rank Petal Storm.\nActivate Cast a Spell\nFrequency once per day\nEffect You cast Burning Blossoms.",
      "bulk": 0,
      "price": {
        "gp": 36000
      },
      "usage": "affixed-to-armor-or-a-weapon",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:dullahan-codex",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "1wrRaLsT6nuz8gj6",
      "slug": "dullahan-codex",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:e3715d98a1001744e43889fa4abd912c9a9639addb55dfa87a721af1c9dfb299",
    "translatableHash": "sha256:9dda7f74743135148179094eff4bb7d4c81dd943d92c9bdba53b37a61b59e93d",
    "data": {
      "schemaVersion": 1,
      "name": "Dullahan Codex",
      "itemType": "equipment",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "cursed",
        "grimoire",
        "magical"
      ],
      "description": "The origins of the notorious Dullahan Codex are shrouded in mystery. Some legends claim it belongs to a dullahan whose head was taken by the Grim Reaper. Others attribute its creation to a powerful necromancer whose name has been lost to time. Whatever the truth, the grimoire has passed down through the ages, sometimes via mortal hands and other times mysteriously appearing among the possessions of its next target. It deserves its reputation for dooming those who possess it to die, but scholars debate whether the codex causes this fate or merely acts as its harbinger.\nThe Dullahan Codex is a jet-black tome bearing a single rune embossed on its cover, and it functions as a true endless grimoire. Inside, scrawled across its parchment pages in a delicate, spidery script, is a lengthy list of names that always appears in a reader's native alphabet. The grimoire isn't sentient, but it selects its owners, quickly passing out of the hands of those it doesn't choose. An intended victim's name appears on the list of names.\nIf your name is on the list and you touch the volume or read from its pages, you must attempt a check (will, dc:45) save.\nCritical Success The codex disappears, moving on to a new victim.\nSuccess The codex fuses to you.\nFailure The codex fuses to you, and you become Doomed 1.\nCritical Failure As failure, but you're Doomed 2.\nIf you attempt to get rid of the codex while it's fused to you, it returns to your possession within an hour. Each day the codex is fused to you, you must attempt another Will saving throw, but a critical success does nothing. The doomed value from the codex can decrease only after it's no longer fused to you; once it's fused to you, you remain its intended victim unless you complete a Freedom ritual aimed at ending this 10th-rank effect. (On a critical failure with this ritual, the codex adds all casters to its list.) You can redirect the curse by inscribing another person's name in the grimoire and succeeding at a check (arcana, dc:40) or check (occultism, dc:40) check. Doing so is an unholy act, anathema to many deities. If the curse is ritually ended or redirected, or the chosen victim dies, the codex moves on to a new victim.",
      "bulk": 0.1,
      "price": {},
      "usage": "other",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:golden-breath-fulu",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "4642hELMtWF9jywN",
      "slug": "golden-breath-fulu",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/fulus/fulu-fancy.webp"
    },
    "sourceHash": "sha256:a0bf6c1a0cba168bb225a3597268833e76e4e2d83f8be278a93a16593fe84325",
    "translatableHash": "sha256:e1aec30f106cf496666369aa463bd86b1937383b5073aa911ccaa7107a3a07cb",
    "data": {
      "schemaVersion": 1,
      "name": "Golden Breath Fulu",
      "itemType": "consumable",
      "level": 20,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "fulu",
        "healing",
        "magical",
        "talisman",
        "vitality"
      ],
      "description": "Activate f (concentrate)\nTrigger You take damage.\nAn enterprising chirurgeon reversed the forces evoked by a void thousand-pains fulu to create the golden breath fulu, which fortifies qi and the body as elements move out of balance. When you Activate this fulu, you regain 75 healing Hit Points and attempt a flat check to end any persistent damage affecting you. The fulu is particularly appropriate help for ending any persistent damage. Also, if you would regain more Hit Points from the fulu than your maximum, you can gain the excess as temporary Hit Points or distribute the excess among creatures of your choice within 30 feet. The temporary Hit Points last for 1 minute.\nEffect: Golden Breath Fulu",
      "bulk": 0,
      "price": {
        "gp": 8100
      },
      "usage": "affixed-to-armor",
      "category": "fulu",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:beguiling-crown",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "4BDf1LVyQyNyOwka",
      "slug": "beguiling-crown",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:0219dbbe3d737ae3054edf668e843973dd8948b99e96d21bddb054c37babc527",
    "translatableHash": "sha256:c78f91921382138be816234848c2fed674f47d24474ca711a88a25e4d6dd367a",
    "data": {
      "schemaVersion": 1,
      "name": "Beguiling Crown",
      "itemType": "equipment",
      "level": 20,
      "rarity": "uncommon",
      "traits": [
        "apex",
        "invested",
        "magical"
      ],
      "description": "This hugely massive crown is bedazzled with glimmering jewels and enchanted with powerful magics that make the gold seem to ripple and surge like strange glimmering tide pools. While uncomfortable to wear, the crown beguiles those within the wearer's presence. Creatures within 30 feet of you automatically improve their attitude toward you by one step (up to friendly). This doesn't prevent hostile creatures from attacking you, but it might give you a chance to talk to them before they strike. The dazzling nature of the crown makes it hard for you to read the intentions of others, and you take a –4 status penalty to your Perception DC when someone uses Deception against you. When you invest the crown, you either increase your Charisma modifier by 1 or increase it to +4, whichever would give you a higher value.\nActivate 1 (concentrate)\nFrequency once per round\nEffect You're the subject of the Sanctuary spell until the end of your next turn.\nActivate R (concentrate)\nFrequency once per hour\nTrigger A creature succeeds at an attack roll against you\nEffect The creature must succeed at a check (will, dc:41) save or the attack roll becomes a failure and the target is friendly to you until the end of its turn. On a critical failure, the target becomes friendly to you, drops to their knees, and begs your forgiveness for 1 minute or until another creature takes a hostile action against them.\nActivate 2 (concentrate, fortune, mental)\nFrequency once per day\nEffect Choose one living creature within 30 feet of you. That creature must succeed at a check (will, dc:41) saving throw or become helpful to you for the next 24 hours. If they succeed, they become friendly to you for 1 hour. If they critically succeed they're immune to this effect for 1 year.",
      "bulk": 2,
      "price": {
        "gp": 80000
      },
      "usage": "wornheadwear",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:judgment-thurible-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "4PtxcrCPnBhhYmg4",
      "slug": "judgment-thurible-major",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/other/spellhearts/judgment-thurible.webp"
    },
    "sourceHash": "sha256:6caac3551872c69aebee4b98fc29f3750f36baf6ae0d143ea4be9d85408f3f08",
    "translatableHash": "sha256:b7ea75e9416aae326e9ab1d0415cca976f821503c3c53efc1358ac62834244b6",
    "data": {
      "schemaVersion": 1,
      "name": "Judgment Thurible (Major)",
      "itemType": "equipment",
      "level": 20,
      "rarity": "common",
      "traits": [
        "magical",
        "spellheart"
      ],
      "description": "The golden religious symbol on the top of this spherical incense holder shifts its form to match the faith of its bearer. You gain no benefit from a judgment thurible if you don't worship a deity. The spell DC of any spell cast by activating this item is 43.\n• Armor After you cast a spell by activating the thurible, the thurible casts 3rd-rank Protection on you, with a duration of 1 round.\n• Weapon After you cast a spell by activating the thurible, the weapon gains a rune that lasts until the end of your next turn. It gains the Holy rune if your deity allows holy sanctification or the Unholy rune if your deity allows unholy sanctification. If your deity allows both, you can choose which rune the weapon gains. If your deity allows neither, your weapon doesn't gain a rune. The extra damage from this rune is 2d6.\nActivate Cast a Spell\nEffect You cast Divine Lance.\nActivate Cast a Spell\nFrequency once per day\nEffect You cast 7th-rank Divine Decree.\nActivate Cast a Spell\nFrequency once per day\nEffect You cast Summon Deific Herald.",
      "bulk": 0,
      "price": {
        "gp": 65000
      },
      "usage": "affixed-to-armor-or-a-weapon",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:codex-of-destruction-and-renewal",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "AVBhZdhq6qCp96Se",
      "slug": "codex-of-destruction-and-renewal",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:129f49c0b1f8365ed9e1dbc39e9fc778abd7ed68f1fce68184e136bc4966795d",
    "translatableHash": "sha256:2fd5ea4c6ea6df1e5951b7868d92c6cf351efdabab7f527db6b080a48b575e60",
    "data": {
      "schemaVersion": 1,
      "name": "Codex of Destruction and Renewal",
      "itemType": "equipment",
      "level": 20,
      "rarity": "rare",
      "traits": [
        "grimoire",
        "magical"
      ],
      "description": "An unsmiling mask, half obsidian and half ivory, is embossed on the cover of this weighty tome, the opposite color forming the background of each half. Each codex of destruction and renewal is said to contain a fragment of the knowledge Nethys gained in his apotheosis and they're sacred to his church.\nActivate 1 (concentrate, spellshape)\nFrequency once per day\nEffect If your next action is to cast a damage-dealing spell prepared from this grimoire, the spell wreaks even greater destruction. The spell ignores 10 resistance and you reroll any damage dice that roll a 1. If the spell reduces a creature to 0 Hit Points, they're torn apart at an infinitesimal level, not even leaving a fine ash; this is a death effect.\nActivate 1 (concentrate, spellshape)\nFrequency once per day\nEffect If your next action is to cast a healing spell prepared from this grimoire that restores Hit Points, the spell renews the target constantly and perfectly. The spell grants the target regeneration 20, restoring 20 Hit Points at the start of its turn and preventing the target both from dying due to damage and from its dying condition increasing to a value that would result in its death. Each time the creature regains Hit Points from regeneration, it regrows all damaged or ruined organs; it can also regrow any severed body parts as a free action immediately after the body part is severed, with the original crumbling to ash. The effect lasts for 4 rounds.",
      "bulk": 0.1,
      "price": {
        "gp": 70000
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:dragon-handwraps",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "BzVwQ0Go1GFp9R0U",
      "slug": "dragon-handwraps",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:7317590ba6aacf7b6cf3bf86d7d6657790b2803d470a5c35d4ac089210d154ea",
    "translatableHash": "sha256:0bb8f22e4cb0f26379071b743f901ca846d6928d25421ebad3e93784194fd085",
    "data": {
      "schemaVersion": 1,
      "name": "Dragon Handwraps",
      "itemType": "weapon",
      "level": 20,
      "rarity": "common",
      "traits": [
        "agile",
        "apex",
        "finesse",
        "invested",
        "magical",
        "nonlethal",
        "unarmed"
      ],
      "description": "These silken handwraps feature intricate embroidery of a serpentine red dragon adorned with golden thread. The handwraps function as +3 major striking greater flaming handwraps of mighty blows. You also gain a +4 item bonus to Athletics checks made to Grapple or Shove. When you invest the handwraps, you either increase your Strength modifier by 1 or increase it to +4, whichever would give you a higher value.\nActivate 2 (manipulate)\nFrequency once per day\nEffect You slap the bottom of your palms with hands splayed outward, casting a 7th-rank Breathe Fire spell (check (reflex, basic, dc:41, options:item:type:spell, traits:concentrate,fire,manipulate) save).\nActivate F (concentrate)\nFrequency once per hour\nTrigger You succeed or critically succeed with a Grapple\nEffect You gain a +2 status bonus to your Athletics DC against any checks made to Escape your grapple until the end of your next turn.",
      "bulk": 0,
      "price": {
        "gp": 80000
      },
      "usage": "worngloves",
      "category": "unarmed",
      "group": "brawling",
      "damage": {
        "dice": 1,
        "die": "d4",
        "type": "bludgeoning"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:laurel-of-the-empath",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "dAPTUxg2NZBwzQ9T",
      "slug": "laurel-of-the-empath",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:760713015a3024fd687fbd66230ee4293fd3b13335c7be1b21f4cbf01d5074bd",
    "translatableHash": "sha256:05fcad298189944db24ae14b34753f72044bf634f669497024f2b3b62d7b9776",
    "data": {
      "schemaVersion": 1,
      "name": "Laurel of the Empath",
      "itemType": "equipment",
      "level": 20,
      "rarity": "common",
      "traits": [
        "apex",
        "fortune",
        "invested",
        "magical"
      ],
      "description": "This silvery, woven ring of leaves sits on top of the head. While wearing it, when you roll Perception for initiative, you can roll twice and take the higher result. This is a fortune effect. Whenever you spend at least 1 minute talking with a living creature, you automatically become aware of its attitude toward you. When you invest the laurel, you either increase your Wisdom modifier by 1 or increase it to +4, whichever would give you a higher value.\nActivate R (concentrate)\nFrequency once per minute\nTrigger You're hit by an attack\nEffect You take half damage from the triggering attack.\nActivate R (concentrate)\nFrequency once per hour\nTrigger You fail, but don't critically fail, a saving throw\nEffect You anticipate the danger and guard against it, often in unconventional or almost inconceivable ways. Treat the failed saving throw as a success.\nActivate 10 minutes (concentrate, fortune, mental)\nFrequency once per day\nEffect You spend 10 minutes talking with one living creature, conversing in inspirational, religious, or philosophical terms. You gain valuable insights into the personality of your target—their hopes, dreams, and fears. When the ritual is over, you gain a +4 item bonus to all Perception checks made concerning the target for one month. Also, the target gains inspirational insight, allowing the target to use one of the two reactions listed above once during the next 24 hours.",
      "bulk": 0,
      "price": {
        "gp": 70000
      },
      "usage": "worncirclet",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:nightmare-salt",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "dRi775Uhzqgn7aBs",
      "slug": "nightmare-salt",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-poisons/nightmare-salt.webp"
    },
    "sourceHash": "sha256:bfc2115392e3ce24ba9feb3581fa37972c10fde4a094cbc9b34a83616ae249a6",
    "translatableHash": "sha256:8c3286b739805db2a816005d2a0a03674308530ce8fba2bbdaf7944810936b60",
    "data": {
      "schemaVersion": 1,
      "name": "Nightmare Salt",
      "itemType": "consumable",
      "level": 20,
      "rarity": "rare",
      "traits": [
        "alchemical",
        "consumable",
        "ingested",
        "poison"
      ],
      "description": "Activate 1 (manipulate)\nThis potent poison consists of crystals whose flavor and appearance mimics edible salt but whose effects are deadly; victims experience periods of waking nightmares that overload the senses and eventually result in death through a combination of shock and exhaustion.\nSaving Throw check (fortitude, dc:43)\nOnset 1 hour\nMaximum Duration 5 days\nStage 1 Frightened 2 once every 1d4, plus Fatigued (1 day)\nStage 2 Confused for 1 minute once every 1d4, plus Frightened 3 and fatigued (1 day)\nStage 3 frightened 3, plus confused for 1d4, once every hour, plus fatigued (1 day)\nStage 4 death",
      "bulk": 0.1,
      "price": {
        "gp": 14000
      },
      "usage": "held-in-two-hands",
      "category": "poison",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-dumbfounding-doom-9th-rank",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "FagkWG1cXRucHcQ6",
      "slug": "wand-of-dumbfounding-doom-9th-rank",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:7e0018b526a1c814b1a56a55c59c1fbaeff3e12b501e2fc00597701bd2ce8bae",
    "translatableHash": "sha256:46562b2593c8eaf9a35e7325fbc557e4f684da8a91c4b6cca64e9a48b7fef8c3",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Dumbfounding Doom (9th-rank)",
      "itemType": "consumable",
      "level": 20,
      "rarity": "common",
      "traits": [
        "emotion",
        "fear",
        "incapacitation",
        "magical",
        "mental",
        "prediction",
        "wand"
      ],
      "description": "Carvings of skulls, monsters, and all manner of violence decorate this wand of blackened bone, but it makes absurd sounds when Activated, such as a honking horn, a manic giggle, or a daydreamy sigh.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast 9th-rank Impending Doom, showing the target a potential death that's gruesome and absurd. If the target becomes Frightened by the spell, it also becomes Stupefied with a value 1 higher than the frightened value. This lasts for the duration of the spell.\nCraft Requirements Supply a casting of impending doom of the appropriate rank.",
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
    "contentId": "pf2e:item:equipment-srd:wand-of-dazzling-rays-9th-rank",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "gv5IRHrmGoSu7Dzv",
      "slug": "wand-of-dazzling-rays-9th-rank",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:6bec7aa83def596a6946b77ec63e2bdbafb451a8443e01ff5b387fb776825e4b",
    "translatableHash": "sha256:319618a9dcdb5d82a15bca5daf0b0315cbe3f6bbdc665171fa47e4c072b8a7a7",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Dazzling Rays (9th-rank)",
      "itemType": "consumable",
      "level": 20,
      "rarity": "common",
      "traits": [
        "fire",
        "holy",
        "light",
        "magical",
        "wand"
      ],
      "description": "Solidified radiance comprises this slender, featureless wand. It sheds bright light in a 20-foot radius and dim light for the next 20 feet. After you Activate the wand, the light fades, so it only sheds dim light in a 20-foot radius. The wand returns to its original brightness each dawn.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast 9th-rank Holy Light, dazzling your target with the beam's intensity. A creature that takes damage from the spell is Blinded for 1 round and Dazzled for a number of rounds equal to the spell rank. On a critical success on the attack roll, the target is also blinded for as long as it's dazzled from the spell. However, it can attempt a check (fortitude) saving throw against your spell DC at the end of each of its turns, ending the blinded condition on a success (but remaining dazzled).\nCraft Requirements Supply a casting of holy light of the appropriate rank.",
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
    "contentId": "pf2e:item:equipment-srd:thousand-pains-fulu-void",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Im9LfiRTfAJxPvzS",
      "slug": "thousand-pains-fulu-void",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/fulus/fulu-fancy.webp"
    },
    "sourceHash": "sha256:21c036529fe3bdc4bc399d7a0c3925106a8979e6293efbdcd0afd77b70967ecc",
    "translatableHash": "sha256:ed179b9a62c919d5030836c3545679ba18485432e5b787c4b39393aded70e249",
    "data": {
      "schemaVersion": 1,
      "name": "Thousand-Pains Fulu (Void)",
      "itemType": "consumable",
      "level": 20,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "fulu",
        "magical"
      ],
      "description": "Duration 1 minute\nCreated by a chirurgeon who threw away morality in search of endless life, a thousand-pains fulu blocks the natural flow of elements in the body. A creature to which the fulu is affixed must attempt a check (fortitude, dc:38, basic). Failure or critical failure primes the target for persistent damage triggered by a specific condition that must be met within the fulu's duration.\nThe black dot at the center of this purple fulu draws in energy like a bottomless hole. The fulu deals 12d10 void damage by dissipating the target's qi. On a failure or critical failure, if the target takes any other damage within 1 minute, it takes 2d10 persistent void damage as well. These effects have the death and void traits. Each time the target takes this persistent damage, any creature within 30 feet of it can use a reaction to gain temporary Hit Points equal to the persistent damage taken, distributing the available temporary Hit Points among those that take the reaction. If the creature that affixed the fulu is within 30 feet, it instead gains all the available temporary Hit Points, if it wishes. These temporary Hit Points disappear after 1 minute.",
      "bulk": 0,
      "price": {
        "gp": 8100
      },
      "usage": "affixed-to-a-creature",
      "category": "fulu",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:dragonprism-staff-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "inyiBwK0zNootR6G",
      "slug": "dragonprism-staff-greater",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:8849b5462cde66dd57122689f7a49a088ed542e40fb7d869165e9f910ed89c34",
    "translatableHash": "sha256:e70fce8c3a99ac4acd1a0c57719d424cb5af59d17975f396b83f40dd9307998d",
    "data": {
      "schemaVersion": 1,
      "name": "Dragonprism Staff (Greater)",
      "itemType": "weapon",
      "level": 20,
      "rarity": "common",
      "traits": [
        "magical",
        "staff",
        "two-hand-d8"
      ],
      "description": "A multi-hued array of scales covers a dragonprism staff, forming a gradient of color, and a dragon's claw holds a gem upon the staff's head. Dragons give allies these staves as a mark of esteem. While wielding a dragonprism staff you seem fiercer, gaining a +1 circumstance bonus to Intimidation checks to Demoralize.\nActivate Cast a Spell\nEffect You expend a number of charges from the staff to cast a spell from its list.\n• Cantrip Gouging Claw, Puff of Poison\n• 1st Breathe Fire, Fear\n• 2nd Acid Grip, Resist Energy\n• 3rd Fear, Lightning Bolt\n• 4th Fly, Reflective Scales\n• 5th Howling Blizzard, Summon Dragon\n• 6th Dragon Form, Reflective Scales, Summon Dragon\n• 7th Dragon Form\n• 8th Dragon Form, Summon Dragon\n• 9th Summon Draconic Legion, Summon Dragon\nCraft Requirements Supply one casting of all listed ranks of all listed spells.",
      "bulk": 1,
      "price": {
        "gp": 68000
      },
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
    "contentId": "pf2e:item:equipment-srd:breastplate-of-the-mountain",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "JU6gJSmibl5Q3k6F",
      "slug": "breastplate-of-the-mountain",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:4aed77c68fa8a9e7b5ab418e74cffc98c0f1bac5a16d658ebf9332f2656cbda5",
    "translatableHash": "sha256:4aca47774406465cc0c195a544279c186f34d16ee232786bde04bd56bd74fb53",
    "data": {
      "schemaVersion": 1,
      "name": "Breastplate of the Mountain",
      "itemType": "armor",
      "level": 20,
      "rarity": "common",
      "traits": [
        "apex",
        "invested",
        "magical"
      ],
      "description": "Constructed of dull gray metal, this breastplate is decorated with the symbol of a craggy black mountaintop. This breastplate functions as a +3 greater resilient breastplate. When you're Shoved or otherwise forced to move, you can reduce the amount you move by up to 10 feet. When you invest the breastplate, you either increase your Constitution modifier by 1 or increase it to +4, whichever would give you a higher value.\nActivate 2 (manipulate)\nFrequency once per day\nEffect You pound a solid and constant rhythm on your breastplate and cast a 7th-rank regeneration spell on yourself.\nActivate 1 (manipulate)\nFrequency once per day\nEffect With a single tap, you gain immunity to poison for 1 minute.\nEffect: Breastplate of the Mountain\nActivate R (concentrate)\nFrequency once per day\nTrigger You fail or critically fail a Fortitude saving throw\nEffect If you failed the saving throw, it becomes a success. If you critically failed, it becomes a failure instead.",
      "bulk": 2,
      "price": {
        "gp": 70000
      },
      "usage": "",
      "category": "medium",
      "group": "plate",
      "armor": {
        "armorClassBonus": 4,
        "dexterityCap": 1,
        "checkPenalty": -2,
        "speedPenaltyFeet": -5
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:warding-escutcheon-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "K5IWk98rsEMyJ1Xb",
      "slug": "warding-escutcheon-greater",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "OGL",
      "remaster": true
    },
    "sourceHash": "sha256:4d8b18fafd7311d06d8a61acead545426a0a3ed74049e2220a6dc34c97d6b0ec",
    "translatableHash": "sha256:02aa45247b11fa9765a50eeb1c6b5a1d3f374d9da54d1020814045a06476a81a",
    "data": {
      "schemaVersion": 1,
      "name": "Warding Escutcheon (Greater)",
      "itemType": "shield",
      "level": 20,
      "rarity": "common",
      "traits": [
        "magical"
      ],
      "description": "An image of a keyhole adorns the coat of arms of this stone tower shield (Hardness 20, HP 80, BT 40).\nActivate 2 (manipulate)\nFrequency once per day\nEffect The shield becomes a locked door in an empty, adjacent space no wider than 5 feet, becoming flush with the surrounding structure so it blocks all passage. The door has the same Hardness, HP, and Broken Threshold as the shield, with check (athletics, dc:43, traits:action:force-open) and check (thievery, dc:43, traits:action:pick-a-lock) to open.. The door remains in place for 1 hour, until it's opened or broken, or until you spend an action to end this effect, at which point the shield returns to your hand (or falls to the ground in your space if your hands are full).\nActivate 1 minute (concentrate)\nFrequency once per day\nEffect The shield floats lazily in the air as bricks quickly fly from it to form a tall stone keep around it. You cast Resplendent Mansion, with the shield becoming the door.",
      "bulk": 4,
      "price": {
        "gp": 55000
      },
      "usage": "",
      "category": "shield",
      "group": "tower-shield"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-mercy-9th-rank",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "LSf18TMRtHV6SMs9",
      "slug": "wand-of-mercy-9th-rank",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:495689b8d14e5a2b0bd63ba8373ac6109b4bc11b5eaa3b1087a9810ed68ab391",
    "translatableHash": "sha256:4339c4436c6d44c5abc1f3f626f9d982ddc336ee3bf9d2288a08b94b4df33f80",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Mercy (9th-rank)",
      "itemType": "equipment",
      "level": 20,
      "rarity": "common",
      "traits": [
        "magical",
        "wand"
      ],
      "description": "The pommel of this rose quartz wand resembles the stylized wings of an angel. When you cast its spell and choose not to make it nonlethal, the crystal deepens to blood red. The color reverts to rose when you cast the spell from the wand nonlethally.\nActivate Cast a Spell; the activation takes 2 if the spell normally takes 1 to cast, or 3 if the spell normally takes 2\nFrequency once per day, plus overcharge\nEffect You Cast the Spell, and can choose to give it the nonlethal trait.\nCraft Requirements Supply a casting of a spell of the appropriate rank. The spell must have a casting time of 1 or 2, it must deal damage, and it can't have the death, void, or nonlethal traits.",
      "bulk": 0.1,
      "price": {
        "gp": 52000
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-rolling-flames-9th-rank",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "MBMiRXM0xC4aS6Xj",
      "slug": "wand-of-rolling-flames-9th-rank",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:5adb7fb80b86045104cca37b5f0f39e9671e211442b0a598837a9e96f1574db3",
    "translatableHash": "sha256:207446c1fbaf672a686bb03eeeb2dd21bb0d932906de5f9340507842b825010a",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Rolling Flames (9th-Rank)",
      "itemType": "consumable",
      "level": 20,
      "rarity": "common",
      "traits": [
        "fire",
        "magical",
        "wand"
      ],
      "description": "The luminous design of red-orange cracks on this black obsidian wand suggests cooling lava.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast 9th-rank Floating Flame. If you create the flame on the ground, the ground in the sphere's square and all adjacent squares are coated in rolling flames until the start of your next turn. These are difficult terrain and hazardous terrain. A creature that moves on the ground takes 8 fire damage for every square of rolling flames it moves into. If a creature in the flames doesn't move on its turn, it takes the damage for each of the squares it's in at the end of its turn. The first time you Sustain the Spell each round, the sphere creates rolling flames again in its new location (or the same location if you chose not to move it), provided it's on the ground.\nCraft Requirements Supply a casting of floating flame of the appropriate rank.",
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
    "contentId": "pf2e:item:equipment-srd:viper-rapier",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "nSAA77N0cnSkljmE",
      "slug": "viper-rapier",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/rapier.webp"
    },
    "sourceHash": "sha256:c4167d18e06431b07861f3eb23e22a6f5ea962eb223660327c30758ee39901d8",
    "translatableHash": "sha256:3ad9ea4e365ab2511f626949c360e82e49352b56021cdb76ec02144e7fd811d6",
    "data": {
      "schemaVersion": 1,
      "name": "Viper Rapier",
      "itemType": "weapon",
      "level": 20,
      "rarity": "common",
      "traits": [
        "apex",
        "deadly-d8",
        "disarm",
        "finesse",
        "invested"
      ],
      "description": "Crafted from flawless jade, the guard of this rapier takes the form of a twisting serpent with the blade thrusting from its open mouth. This rapier functions as a +3 greater striking quickstrike rapier. While wielding the rapier, your movement doesn't trigger reactions when you Stride, Balance, or Tumble Through. When you invest the rapier, you either increase your Dexterity modifier by 1 or increase it to +4, whichever would give you a higher value.\nActivate R (concentrate)\nFrequency once per day\nTrigger You fail, but don't critically fail, an attack using the viper rapier\nEffect The tip of the rapier briefly takes the form of a viper's head, and the blade twists and contorts, biting the target you missed. The target is affected as if successfully poisoned with cave worm venom (DC 43).\nActivate R (concentrate)\nTrigger A creature misses or critically misses you with an attack\nEffect With a slight, obviously mocking bow or curtsy, you Step.\nActivate 2 (manipulate)\nFrequency once per hour\nEffect You twirl your rapier in a serpentine pattern, causing your form to become a blur of motion. You're Concealed for 1 minute or until you take a hostile action. While you're concealed, you also gain a +2 circumstance bonus to Reflex saving throws.\nEffect: Viper Rapier",
      "bulk": 1,
      "price": {
        "gp": 70000
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
    "contentId": "pf2e:item:equipment-srd:achaekeks-kiss",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "NUlz1XulrXqhpd2w",
      "slug": "achaekeks-kiss",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/alchemical-items/alchemical-poisons/sloughing-toxin.webp"
    },
    "sourceHash": "sha256:a55dd907a2f049d3316723c3731e2b81f0cb7c9e4449d81538099eebda2cbbbb",
    "translatableHash": "sha256:965da4476524fdc7a3cabd78bda621be09d961b33e2df93667e26093e55a3fee",
    "data": {
      "schemaVersion": 1,
      "name": "Achaekek's Kiss",
      "itemType": "consumable",
      "level": 20,
      "rarity": "rare",
      "traits": [
        "alchemical",
        "consumable",
        "injury",
        "poison"
      ],
      "description": "Access member of the Red Mantis assassins\nActivate 2 (manipulate)\nKept as a closely guarded secret by the deadly members of the Red Mantis assassins, this poison is treated with reverence for its ability to end lives. If the victim dies while affected by this poison, its body decomposes to nothing in 1 minute, leaving only its gear behind. Non-magical preservation can't protect the tainted corpse. Peaceful Rest works on the poisoned body only if cast as a 5th-rank spell and the caster succeeds at a counteract check against the poison's saving throw DC when casting the spell. Even if cast successfully, peaceful rest only works as if it had been cast at 2nd rank.\nSaving Throw check (fortitude, dc:42)\nMaximum Duration 6 rounds\nStage 1 7d12 poison damage and Doomed 1 (1 round)\nStage 2 9d12 poison damage and Doomed 2 (1 round)\nStage 3 11d12 poison damage and Doomed 3 (1 round)",
      "bulk": 0.1,
      "price": {
        "gp": 13000
      },
      "usage": "held-in-two-hands",
      "category": "poison",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-clinging-rime-9th-rank",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "P112tFaNhgJrBhmu",
      "slug": "wand-of-clinging-rime-9th-rank",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:ed955dca53f66c08d0a2e77adeaeaef8b424a456bd136ab7a8a5d02aa918fe6d",
    "translatableHash": "sha256:117b9a80f2ad68ceda9510fdcf376744f6b1cfa56f76041298e6a045b9192848",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Clinging Rime (9th-rank)",
      "itemType": "consumable",
      "level": 20,
      "rarity": "common",
      "traits": [
        "cold",
        "magical",
        "wand",
        "water"
      ],
      "description": "A thin layer of frost coats this gnarled holly wand.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast 9th-rank Frigid Flurry. After you cast the spell, the ice crystals freeze to flesh and other surfaces, clinging to the creatures in the area. Each creature that fails its save takes 3d6 persistent cold damage.\nCraft Requirements Supply a casting of Frigid Flurry of the appropriate rank.",
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
    "contentId": "pf2e:item:equipment-srd:starsong-nectar",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "pbsrb7FMMHQBd5CO",
      "slug": "starsong-nectar",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:fa7d040a9f16d8695e0fcfe112200933b4777ae56db965ee5bacfbc3fd9babc5",
    "translatableHash": "sha256:27143405cfa7f4efe66cc53eea39778c0df29814a5b62c621de0e77450f78780",
    "data": {
      "schemaVersion": 1,
      "name": "Starsong Nectar",
      "itemType": "consumable",
      "level": 20,
      "rarity": "rare",
      "traits": [
        "consumable",
        "fortune",
        "magical",
        "potion"
      ],
      "description": "Activate 1 (manipulate)\nA liquid with the appearance of an expressive night sky and a taste that's sheer pleasure, starsong nectar grants you cheerful confidence and incredible luck for 10 minutes after you drink it. However, if you show too much caution at any point during this time (GM's discretion), you must succeed at a check (flat, dc:6) or the potion's effects end. While the potion lasts, you gain a +3 status bonus to attack rolls, initiative rolls, Perception checks, saving throws, and skill checks, and you aren't Off-Guard to creatures due to them flanking you or being Hidden from or Undetected by you. You are temporarily immune to this potion for 24 hours once its effects end.\nWhile the potion lasts, though, if you take a moment to imagine the future, you choose the best courses of action. This aspect of the potion grants you the following activation.\nActivate 1 (concentrate)\nFrequency once per round\nEffect Until the start of your next turn, roll two d20s for any attack rolls, Perception checks, saving throws, and skill checks you make and take the higher result.\nEffect: Starsong Nectar",
      "bulk": 0.1,
      "price": {
        "gp": 14000
      },
      "usage": "held-in-one-hand",
      "category": "potion",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-legerdemain-9th-rank",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "qoNaajuoAnKRrFyb",
      "slug": "wand-of-legerdemain-9th-rank",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:d5baec5dbfb0045f2a77c9b809e167c4fd133a0c76d6e6e3d38f3ed4aea4e1c9",
    "translatableHash": "sha256:62dd2bf45ba665ca0835240a97c4d980ab8c8c791d491cca519619ef2a8cd6e1",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Legerdemain (9th-rank)",
      "itemType": "equipment",
      "level": 20,
      "rarity": "common",
      "traits": [
        "magical",
        "wand"
      ],
      "description": "This wand of lacquered black wood has a handle wrapped in interwoven colorful ribbons. A silver bell caps the wand's tasseled pommel.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You Cast the Spell.\nActivate 1 (emotion, illusion, light, manipulate. mental, visual)\nRequirements The last action you took this turn was to Cast a Spell from the wand\nEffect You make yourself the center of attention. An illusory spotlight shines bright light upon your space as you pull inane objects from the wand's tip, such as confetti, silk flowers, streamers, or a long string of colorful kerchiefs knotted end to end. Each enemy within 30 feet must attempt a Will save against your spell DC, receiving a +4 circumstance bonus to the save if you or any of your allies recently threatened it or used hostile actions against it. On a failure, the creature becomes Fascinated with you until the end of your next turn. The fascination ends if the target is subject to a hostile act, or if another creature succeeds at a Diplomacy or Intimidation check against it.\nThe spotlight follows you wherever you move. You can't be Concealed while in the spotlight. The effect ends if you become Invisible, attempt a Stealth check, or Dismiss the activation.\nYou can Sustain this Activation for up to 1 minute. Since you need to keep performing tricks, Sustain an Activation has the manipulate trait. Sustaining extends the spotlight, and keeps fascinated creatures fascinated, but doesn't cause creatures not already fascinated to become fascinated.\nCraft Requirements Supply a casting of a spell of the appropriate rank.",
      "bulk": 0.1,
      "price": {
        "gp": 70000
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:immortal-bastion",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "qSqx72639EJTzBam",
      "slug": "immortal-bastion",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/armor/bastion-plate.webp"
    },
    "sourceHash": "sha256:89656967e22d77879e565a745e8b0e7227dcc6b9c14eb3399fa03f537581ea2f",
    "translatableHash": "sha256:8de938fec89d881133c35a370478583a2818d68009b03d61d191f38ea48bba5d",
    "data": {
      "schemaVersion": 1,
      "name": "Immortal Bastion",
      "itemType": "armor",
      "level": 20,
      "rarity": "common",
      "traits": [
        "bulwark",
        "entrench-melee",
        "hindering"
      ],
      "description": "This impressive +3 greater resilient greater fortification bastion plate is built like an impregnable castle, with multiple layers of defense and no weak points. When you activate the armor's deflect melee trait, you gain a +2 circumstance bonus to AC against melee attacks instead of +1, and you gain 10 temporary Hit Points that last until the start of your next turn.\nEffect: Immortal Bastion\nActivate r (concentrate)\nFrequency once per day\nTrigger You are reduced to 0 Hit Points or would die from a death effect\nEffect You drop to 1 Hit Point instead of being reduced to 0 HP or dying, and you gain 100 temporary Hit Points that last until the start of your next turn.\nActivate r (concentrate)\nFrequency once per day\nTrigger You would gain or increase the Doomed or Wounded condition\nEffect You avoid gaining or increasing the condition. If the triggering effect imposes both doomed and wounded, choose only one to prevent. This doesn't remove either of the conditions if you already have them, nor does it prevent the same triggering effect from giving or increasing the prevented condition later.",
      "bulk": 5,
      "price": {
        "gp": 70000
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
    "contentId": "pf2e:item:equipment-srd:wand-of-reaching-9th-rank",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "sa9UGUMWYiZkTPjA",
      "slug": "wand-of-reaching-9th-rank",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:7e22546857be89713c8e8a55f34cd85bda0bb7addb5a9b0a378d3828e98657cc",
    "translatableHash": "sha256:6914d630cd1f6d24f6e9132d9157463176bda33e4fa09ee70b7cbb6b217c64c0",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Reaching (9th-Rank)",
      "itemType": "equipment",
      "level": 20,
      "rarity": "common",
      "traits": [
        "magical",
        "wand"
      ],
      "description": "This long, slender wand is constructed of silver, polished to a mirror shine.\nActivate Cast a Spell; This activation takes 2 if the spell normally takes 1 to cast, or 3 if the spell normally takes 2\nFrequency once per day, plus overcharge\nEffect You Cast the Spell. Its range increases by 30 feet. As normal for increasing ranges, if the spell normally has a range of touch, its range extends to 30 feet.\nCraft Requirements Supply a casting of a spell of the appropriate rank. The spell must have a casting time of 1 or 2, and must have a range.",
      "bulk": 0.1,
      "price": {
        "gp": 70000
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:radiant-prism-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "tV0vr2oVVl9fWyD9",
      "slug": "radiant-prism-major",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/other/spellhearts/radiant-prism.webp"
    },
    "sourceHash": "sha256:440150f3da0695b58821515b842103d426a9e516d8623645c5083e6ac005170e",
    "translatableHash": "sha256:b483077d6040c0a60a5945a52098a291a0ca00adc3f77f5b60f8b5c6f25c2929",
    "data": {
      "schemaVersion": 1,
      "name": "Radiant Prism (Major)",
      "itemType": "equipment",
      "level": 20,
      "rarity": "common",
      "traits": [
        "magical",
        "spellheart"
      ],
      "description": "This glass prism pays homage to its namesake pantheon—the Radiant Prism of Sarenrae, Desna, and Shelyn. Any armor or weapon the prism is affixed to glows softly with colored lights. The spell DC of any spell cast by activating this item is 43.\n• Armor (light) After you cast a non-cantrip spell by activating the prism, you glow with dim light in a multitude of shimmering hues, shedding light like a Torch and making you Concealed for 2 rounds.\n• Weapon After you cast a non-cantrip spell by activating the prism, your Strikes with the weapon gain the Greater Brilliant property rune until the end of your next turn. The damage from the greater brilliant rune increases to 3d4 of each type.\nActivate Cast a Spell\nEffect You cast Light.\nActivate Cast a Spell\nFrequency once per day\nEffect You cast Fiery Body.\nActivate Cast a Spell\nFrequency once per day\nEffect You cast Falling Stars.",
      "bulk": 0,
      "price": {
        "gp": 64000
      },
      "usage": "affixed-to-armor-or-a-weapon",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:kaldemashs-lament",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "urcBTs4AgSq8u5FJ",
      "slug": "kaldemashs-lament",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/weapon.svg"
    },
    "sourceHash": "sha256:a57e1c577ce2d4dec09cfadeef540c2c3ecd30459e90b238ffa07c4c2d6fac27",
    "translatableHash": "sha256:677b90546339235a95a8fbe526fd3d357dc97f96ad1f233d9f8779ffb4b21426",
    "data": {
      "schemaVersion": 1,
      "name": "Kaldemash's Lament",
      "itemType": "weapon",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "concealable",
        "concussive",
        "fatal-d10"
      ],
      "description": "Resembling little more than a simple iron pipe with a handle, Kaldemash's Lament is one of the most well-known star guns in all of Arcadia. Legends state the Crowned Regent Kaldemash helped forge one of the first star guns millennia ago. While the star gun served Kaldemash as a powerful weapon, its most notable achievement was the accidental killing of one of Kaldemash's greatest friends. This death is what caused the regent to recognize the true destructive power of the star guns and led to him developing the Star Code, a set of rules of engagement and proper use of firearms still in use in Arcadia today. Although Kaldemash never named the weapon himself, all legends that mention the weapon refer to it as Kaldemash's Lament.\nThe legendary weapon is a +3 major striking quickstrike advanced firearm with a range increment of 90 feet. It deals 4d6 force damage (with the major striking rune included) and has the concealable, concussive, and fatal d10 traits. You don't take a penalty when dealing nonlethal damage with the weapon. Like most star guns, Kaldemash's Lament uses magic to function and doesn't require ammunition or black powder.\nIf you use Kaldemash's Lament as part of a duel in which all parties are in agreement on the terms, the gun's supernatural instincts help you make the quickest draw. You roll twice and take the higher result on your initiative roll for the duel; this is a fortune effect. In addition, you can draw Kaldemash's Lament as a free action at the start of your turn during the duel. If you attempt to fire the star gun in bad faith at a dueling opponent once they have surrendered, been defeated, or the duel is over, Kaldemash's Lament flies out of your hand and you can't pick it up, hold it, or wield it for 10 minutes.\nActivate F (concentrate)\nTrigger You target a creature with an attack\nEffect You adjust the damage that Kaldemash's Lament deals before firing. Kaldemash's Lament's damage type changes to either electricity, fire, or force until you change the type again.\nActivate 2 (concentrate, manipulate)\nFrequency once per minute\nEffect You leave Kaldemash's Lament to fire on its own. You release the star gun and it begins to move independently, flying through the air and firing. You still gain the benefits of the gun's quickstrike rune while it's moving independently. It has a space of 5 feet but doesn't block or impede enemies attempting to move through that space. It always remains within 30 feet of you and intentionally resists being taken or otherwise moved; all attempts to Grab it fail. Kaldemash's Lament moves this way for 3 rounds, after which it returns to your hand. If you don't have a free hand to hold it, the gun instead holsters itself on your person.\nWhile Kaldemash's Lament is moving independently, you can Sustain the activation to have it make a Strike against a creature. It makes a ranged Strike using your attack modifier while wielding it or a +31 bonus, whichever is higher. This attack increases your multiple attack penalty as normal, and the gun uses your multiple attack penalty when determining its attack bonus. Since the star gun is constantly moving and attempting to line up the appropriate shot, creatures it targets are Off-Guard to the gun's attacks.\nActivate 3 (concentrate, manipulate)\nEffect You unleash a barrage of attacks in an instant. You deal Strike damage to all creatures in a 30-foot type:cone (check (reflex, dc:45, basic) save). This barrage counts as three attacks for your multiple attack penalty.",
      "bulk": 0.1,
      "price": {},
      "usage": "held-in-one-hand",
      "category": "advanced",
      "group": "firearm",
      "damage": {
        "dice": 1,
        "die": "d6",
        "type": "force"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:impossible",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "uU4VC8OlhDHslT4i",
      "slug": "impossible",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/runes/weapon-property-runes/weapon-property-runes.webp"
    },
    "sourceHash": "sha256:bf55d9de16ad97fc86b8e91714796bdf74dc562ef617a5f2ab944904afa2bb88",
    "translatableHash": "sha256:dd3ba7d2b3f0263845af341ce0d3031fe74644f1deb59b6c5003d0328699e068",
    "data": {
      "schemaVersion": 1,
      "name": "Impossible",
      "itemType": "equipment",
      "level": 20,
      "rarity": "common",
      "traits": [
        "magical"
      ],
      "description": "This rune makes a weapon capable of impossible offense and defense. The etched weapon is immune to Dispel Magic and similar effects that could counteract its magic. If it's a ranged weapon or thrown weapon, its range increment is doubled.\nActivate 2 (concentrate, teleportation)\nFrequency once per hour\nEffect You and the weapon flash to a perfect attacking position, then return to where you started. Make a Strike with the etched weapon against one creature you can see, even if the target is beyond the weapon's reach or range. On this Strike, ignore any circumstance penalty, status penalty, and range increment penalty.",
      "bulk": 0,
      "price": {
        "gp": 70000
      },
      "usage": "etched-onto-a-weapon",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:life-shot-true",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "UzyjCLHxs3JQuFt5",
      "slug": "life-shot-true",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/ammunition/life-shot.webp"
    },
    "sourceHash": "sha256:c1f1444a0f303ee05b4a4b3039d043d46e479bad94efdfee5596a5196be4cd72",
    "translatableHash": "sha256:b1f86343cc8dcb1047a668e21893225c49562dbbc92f71480bfb0da54f32b985",
    "data": {
      "schemaVersion": 1,
      "name": "Life Shot (True)",
      "itemType": "ammunition",
      "level": 20,
      "rarity": "common",
      "traits": [
        "alchemical",
        "consumable",
        "healing"
      ],
      "description": "Ammunition round\nActivate 1 (manipulate)\nLife shot is a special cartridge that carries a small dose of elixir of life. A creature hit by activated life shot takes no damage from the successful attack, instead receiving 10d4+14 healing healing and gaining a +4 item bonus to saving throws against diseases and poisons for 1 minute. On a critical hit, roll the healing received twice and take the better result (this is a fortune effect). A target willing to be hit by this attack is Off-Guard against it.\nEffect: Life Shot",
      "bulk": 0,
      "price": {
        "gp": 9000
      },
      "usage": "",
      "category": "ammo",
      "group": "ammo"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-hybrid-form-9th-rank",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "v8Dx5ABBpPFafIgy",
      "slug": "wand-of-hybrid-form-9th-rank",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:08786d86d37107c4007dea0ddd3445d17a0e57ee5960a19b1847d80a6835a7b4",
    "translatableHash": "sha256:ee4f5f1ebd46b2ad19a09fb3ff108dbc0c963a7c99448aa73054c22705508045",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Hybrid Form (9th-rank)",
      "itemType": "equipment",
      "level": 20,
      "rarity": "uncommon",
      "traits": [
        "magical",
        "polymorph",
        "wand"
      ],
      "description": "The grain of this simple wooden wand forms shifting images of sharp claws, snapping jaws, and countless creatures.\nActivate Cast a Spell; This activation takes 2 if the spell normally takes 1 to cast, or 3 if the spell normally takes 2\nFrequency once per day, plus overcharge\nEffect You Cast the Spell, selecting two forms from among those you can normally choose. You gain the benefits of both forms. For example, if one form can breathe air and the other can breathe underwater, you can breathe in both situations. If there's overlap in abilities, you gain the better one. For instance, if both have a fly Speed, you get the higher one, and if both forms have claws, you gain only the claw Strike you prefer. The GM determines which abilities overlap and which are cumulative.\nCraft Requirements Supply a casting of a spell of the appropriate rank. The spell must have a casting time of 1 or 2, must have the polymorph trait, and must allow more than one choice of battle form.",
      "bulk": 0.1,
      "price": {
        "gp": 55000
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:whispering-staff",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "WrNHmsU8ZaBY3V9S",
      "slug": "whispering-staff",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:5a6b8c825fe1ce78395a536e5d6759684bcce20b352ac5731e8d6462cbcff12a",
    "translatableHash": "sha256:47268610fa04a2675242bc54f39415533838e114e67a6baf079c985b3ae07c15",
    "data": {
      "schemaVersion": 1,
      "name": "Whispering Staff",
      "itemType": "weapon",
      "level": 20,
      "rarity": "common",
      "traits": [
        "apex",
        "invested",
        "magical",
        "staff",
        "two-hand-d8"
      ],
      "description": "This gnarled wooden staff is carved with humanoid faces in various emotional states. When the staff is activated, the faces begin to whisper a variety of languages in sibilant tones, creating what seems to be nonsense to all but the staff's wielder or those they choose to affect. The staff functions as a Major Staff of the Unblinking Eye. While using the staff, you gain a +3 item bonus to Decipher Writing, Identify Magic, and Recall Knowledge checks, regardless of the skill. When you invest the staff, you either increase your Intelligence modifier by 1 or increase it to +4, whichever would give you a higher value. You must select the skills and languages the first time you invest the item, and whenever you invest the same whispering staff, you get the same skills and languages you chose the first time.\nActivate 1 (concentrate, mental)\nFrequency once per round\nEffect Through the staff's strange whispering, you gain a glimpse into the mind and desires of one creature you can see within 30 feet. Until the end of your next turn, that creature is Off-Guard to you and takes a –2 circumstance penalty to saving throws against your spells.\nEffect: Whispering Staff (Enemy)\nActivate 2 (manipulate, mental, misfortune)\nFrequency once per hour\nEffect You point the staff at one creature you can see within 30 feet of you, causing the whispers to howl in that creature's mind. The target must attempt a check (will, dc:43, traits:manipulate,mental,misfortune) save. If it fails, whenever the creature attempts an attack roll, skill check, or saving throw, it must roll twice and take the worse roll. This lasts until the start of your next turn.\nActivate 2 (concentrate, fortune, mental)\nFrequency once per day\nEffect You twirl the staff in three consecutive circles and call for the whispers to speak up. For the next minute, you and all allies within a 30-foot type:emanation around you can hear your staff's whispers clearly and distinctly, gaining benefit from their advice and mental protection. Whenever you and your affected allies attempt to Recall Knowledge or attempt a saving throw against a mental effect, you roll twice and take the better result. This is a fortune effect.\nEffect: Whispering Staff (Ally)\nActivate Cast a Spell\nEffect You expend a number of charges from the staff to cast a spell from its list.\n• Cantrip Detect Magic\n• 1st Sure Strike\n• 2nd Darkvision, See the Unseen, Translate\n• 3rd Darkvision, Mind Reading\n• 4th Clairvoyance, Detect Scrying, Telepathy\n• 5th Mind Probe, Scouting Eye\n• 6th Telepathy, Truesight",
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
    "contentId": "pf2e:item:equipment-srd:wand-of-teeming-ghosts-9th-rank",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Y7xHJEyX5Mm3gpq3",
      "slug": "wand-of-teeming-ghosts-9th-rank",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/wands/specialty-wands/wand-of-teeming-ghosts.webp"
    },
    "sourceHash": "sha256:1133027529e5295fa7573996e074e5f42c642db9765ef1006ef9bde9692a11a4",
    "translatableHash": "sha256:9e0c53d2e443b5bc3bc2e01db65ddb4941d25a6f46812d7670460b94066d6c49",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Teeming Ghosts (9th-Rank)",
      "itemType": "consumable",
      "level": 20,
      "rarity": "uncommon",
      "traits": [
        "magical",
        "wand"
      ],
      "description": "This pale wooden wand is carved to resemble a thigh bone with metal caps at each end. Ghostly tendrils seem to swirl around it every so often.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast False Vitality at 9th-rank. During the duration of the spell, wisps that resemble spirits flit around you as long as you have any temporary Hit Points from false vitality, and you can use the following action.\nActivation F (concentrate)\nTrigger You successfully impart the Frightened 1 condition to a creature\nRequirements You have at least 1 temporary Hit Point from false vitality\nEffect You end false vitality and increase the creature's frightened condition value to 2.\nCraft Requirements Supply a casting of false vitality at 9th-rank",
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
    "contentId": "pf2e:item:equipment-srd:wand-of-mental-purification-9th-rank",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "YBWZ1Qexhe6PuiuO",
      "slug": "wand-of-mental-purification-9th-rank",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/held-items/wand-of-mental-purification.webp"
    },
    "sourceHash": "sha256:07b44a619cdb30a09d1b292c601e8f0861c725bf0ea0b1d0c90ee1622e347d7f",
    "translatableHash": "sha256:5f0c5be2fead2c835427296aff32ad1a33b45d21496a2bc3bad29d732eb87444",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Mental Purification (9th-rank)",
      "itemType": "consumable",
      "level": 20,
      "rarity": "common",
      "traits": [
        "emotion",
        "healing",
        "magical",
        "mental",
        "wand"
      ],
      "description": "Red feathers hang from the handle of this ivory wand. Holding it brings a sense of gentle calm.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast 9th-rank Soothe, and can attempt to counteract one mental effect on the same target. Treat the Soothe spell's rank as 1 higher for this counteract check.\nCraft Requirements Supply a casting of soothe of the appropriate rank.",
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
    "contentId": "pf2e:item:equipment-srd:blightburn-bomb-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "ZrXw7hAH8dQOGAYL",
      "slug": "blightburn-bomb-greater",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:836e8dcb46fe78524f0cf35dd9744872391bac3f7e60c2ded6f5fd731b0b5552",
    "translatableHash": "sha256:1e0734f742c1c0b3819b39b56f3c4024e502b316c354787e94d76874e8a70800",
    "data": {
      "schemaVersion": 1,
      "name": "Blightburn Bomb (Greater)",
      "itemType": "weapon",
      "level": 20,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "bomb",
        "consumable",
        "disease",
        "poison",
        "splash"
      ],
      "description": "Activate 1 Strike\nBlightburn bombs have radioactive materials sealed inside flasks treated with lead. The bomb grants a +3 item bonus to attack rolls and deals 4d6 poison damage, 4d4 persistent poison damage, and 4 poison splash damage. A creature that takes the persistent poison damage deals the splash damage again from its current position as the radiation continues to harm nearby creatures. The persistent damage can last up to 1 minute. Blightburn bombs also expose the primary target to blightburn sickness.\nSaving Throw check (fortitude, dc:43)\nOnset 1d4\nStage 1 Drained 1 (1 day)\nStage 2 drained 1 and Sickened 1 (1 day)\nStage 3 Drained 2 and Sickened 2 (1 week)\nStage 4 Drained 3 and Sickened 3 (1 month)\nStage 5 increase drained condition by 1 (1 year)",
      "bulk": 0.1,
      "price": {
        "gp": 12000
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "bomb",
      "damage": {
        "dice": 4,
        "die": "d6",
        "type": "poison"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:forgotten-signet",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "9SmQvhTWvk7kuvJl",
      "slug": "forgotten-signet",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:63236c67e8c75ef547171bfe879cfd2ca3f38dc168c463a8fafda2207b366b09",
    "translatableHash": "sha256:d3964a06d60270791e28537deb11d341df6f2e38707ddac3592c72d73eb731f4",
    "data": {
      "schemaVersion": 1,
      "name": "Forgotten Signet",
      "itemType": "equipment",
      "level": 21,
      "rarity": "rare",
      "traits": [
        "artifact",
        "invested",
        "magical"
      ],
      "description": "At the center of this silver ring gleams an obsidian gem, its surface emblazoned with a bloodred rune of forgetting. While wearing a forgotten signet, you're subjected to Hidden Mind (+32 counteract bonus) and easily fade from others' memory. Sapient creatures must attempt a check (will, dc:42) save each time you depart from their company or they forget you entirely.\nCritical Success The creature's memories of you are normal.\nSuccess The creature remembers you and your interactions but has difficulty describing either to others. Each time they attempt to share information about these subjects with someone else, they relate only confusing or unclear details about you and this interaction.\nFailure The creature remembers your existence but no details about you or your interactions. For example, they remember speaking with an individual of your most basic biological traits, such as a human woman, but not your name, appearance, or other specific features.\nCritical Failure The creature retains no memories of you or this interaction.\nDestruction If a creature learns the true name of a forgotten signet's wearer and makes it public knowledge, that forgotten signet tarnishes and breaks in two.",
      "bulk": 0,
      "price": {},
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:scale-of-igroon",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "XkIfwSTy0PQL3RPJ",
      "slug": "scale-of-igroon",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:34967abe0d88204b31b43b1407b555f0c4d1f99bf2d696264cb702353839def0",
    "translatableHash": "sha256:c64ee36c74856d62a657ec38ad2fd7fa7b73089876a66033730a58f7e1ac5fb6",
    "data": {
      "schemaVersion": 1,
      "name": "Scale of Igroon",
      "itemType": "shield",
      "level": 21,
      "rarity": "rare",
      "traits": [
        "artifact",
        "primal"
      ],
      "description": "Carved from a scale of the kaiju Igroon, this jagged shield refracts light around it in a shimmering haze. A scale of Igroon (Hardness 20, HP 160, BT 80) recovers 4 Hit Points at the start of its wielder's turn. When you Raise a Shield, you can use the Shield Block reaction with the scale of Igroon to block an attack or effect that deals acid, cold, electricity, fire, force, or sonic damage as well as physical damage.\nActivate 1 (manipulate)\nRequirements You're in an area of bright or dim light\nEffect You angle the shield to refract light. Until the start of your next turn, you gain a +4 item bonus to Stealth checks to Hide and Sneak and can do so while observed. This bonus ends if you Activate another ability or use the Shield Block reaction.\nActivate 1 (manipulate)\nRequirements You're in an area of bright light\nEffect You angle the shield at a target within 60 feet, reflecting light into its eyes. It must attempt a check (fortitude, dc:42) save.\nCritical Success The target is unaffected.\nSuccess The target is Blinded until its next turn begins.\nFailure The target is blinded for 1 minute.\nCritical Failure The target is blinded for 2d4.\nActivate F (manipulate)\nTrigger You use Shield Block and prevent yourself from taking energy damage from a line, ray, or a direct attack, including a Force Barrage spell\nEffect You reflect the energy along a trajectory you choose. The effect travels only up to its remaining range, using its original parameters if it strikes other targets.\nDestruction If a deity, kaiju, spawn of a deity, titan, or being of similar power stomps on a scale of Igroon while in absolute darkness, the shield is destroyed permanently.",
      "bulk": 0.1,
      "price": {},
      "usage": "",
      "category": "shield",
      "group": "shield"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:perfected-robes",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "BSIdE57Zuvv5iX93",
      "slug": "perfected-robes",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:a97218ad0d3ebf2d6e4d01edf343f597320152d7f720bc2d31df2fcd984b3db9",
    "translatableHash": "sha256:5869024ed4bbba8b7eabe67bbc203f1dbad6ad39870407b746774f961e75897b",
    "data": {
      "schemaVersion": 1,
      "name": "Perfected Robes",
      "itemType": "equipment",
      "level": 22,
      "rarity": "rare",
      "traits": [
        "artifact",
        "divine",
        "invested"
      ],
      "description": "These unadorned white robes, fastened with simple brass pins in the shape of a human hand, can't be soiled or blemished. While wearing perfected robes, you don't need to eat, sleep, or drink, but you can if you choose to. The robes bless you with constant Truesight (+32 counteract bonus). A creature who dons these robes without earning them is Clumsy 3, Enfeebled 3, and Stupefied 3 while wearing them, gaining the true seeing but otherwise unable to use the robes' magic.\nActivate F (concentrate, fortune)\nFrequency once per minute\nEffect If your next action is to attempt a d20 roll with which you have legendary proficiency, roll twice and take the better result. This is a fortune effect.\nActivate 2 (concentrate)\nFrequency once per day\nEffect You cast Avatar, gaining the abilities for Irori.\nDestruction If the wearer ever willingly turns from the path of self-perfection into corruption or overindulgence, their perfected robes crumble to nothing.",
      "bulk": 0.1,
      "price": {},
      "usage": "worngarment",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:coldstar-pistols",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "JYtqvOyF11GUsQTB",
      "slug": "coldstar-pistols",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/specific-magic-weapons/redeemers-pistol.webp"
    },
    "sourceHash": "sha256:83f2ff60e5988c7d8e4e1666e41dfe0c06d45d1e31f4607ed6fb80519fa48dcb",
    "translatableHash": "sha256:fbfc22d6dc5304422a63c5796474c0ad8e1868226682c918df641d0b13deb2b2",
    "data": {
      "schemaVersion": 1,
      "name": "Coldstar Pistols",
      "itemType": "weapon",
      "level": 23,
      "rarity": "unique",
      "traits": [
        "agile",
        "artifact",
        "concealable",
        "concussive",
        "fatal-d10"
      ],
      "description": "One dueling pistol in this paired set is etched with flames along its barrel, while the other is etched with icicles. In these separate forms, one gun comprising the Coldstar Pistols functions as a +3 greater striking greater flaming dueling pistol and the other as a +3 greater striking greater frost dueling pistol. When joined, the guns form a double-barreled weapon that functions as a +4 major striking greater flaming greater frost dueling pistol. The combined form has a range increment of 120 feet. In either form, the Coldstar Pistols have the agile, concealable, concussive, and fatal d10 traits. As star guns, the Coldstar Pistols run on magic and don't use ammunition or black powder.\nActivate 1 (manipulate)\nEffect You switch the Coldstar Pistols from one form to the other. Attempt a Deception check to Feint with a +4 circumstance bonus.\nActivate 1 (manipulate)\nFrequency once per round\nEffect Make two Strikes against one target, taking the highest of the two attack rolls and applying it to both attacks. Your multiple attack penalty increases only after these Strikes.\nDestruction If Deft Onki's name and deeds ever fade from mortal memory entirely, the Coldstar Pistols can be destroyed like a normal object.",
      "bulk": 1,
      "price": {},
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
    "contentId": "pf2e:item:equipment-srd:ghosthands-comet",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "xxSpHT2vnCFxTr0q",
      "slug": "ghosthands-comet",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:994b82fc9113257430b0d789731a39131bd67a4052e440d783028a744262cedc",
    "translatableHash": "sha256:3b8980639ff1356a0757dc69ae2eb76d3bf796f09728471418d7a411867be646",
    "data": {
      "schemaVersion": 1,
      "name": "Ghosthand's Comet",
      "itemType": "weapon",
      "level": 23,
      "rarity": "unique",
      "traits": [
        "artifact",
        "backstabber",
        "concussive",
        "fatal-d12",
        "kickback",
        "magical"
      ],
      "description": "The barrel of this long rifle is translucent in places, forming a swirled pattern along the metal, and its stock is formed of crimson wood. Ghosthand's Comet is a +4 major striking beast-bane greater impactful advanced firearm with a range increment of 300 feet. It deals 5d8 force damage and has the backstabber, concussive, kickback, and fatal d12 traits. As a star gun, Ghosthand's Comet runs on magic and doesn't use ammunition or black powder. The weapon is silent when fired.\nActivate F (concentrate)\nTrigger You attempt a ranged Strike with Ghosthand's Comet\nEffect For the triggering Strike, Ghosthand's Comet changes its damage type to your choice of acid, cold, electricity, fire, or sonic.\nActivate 1 (concentrate)\nEffect On your next attempt at a ranged Strike with Ghosthand's Comet, the shot phases through any material or magical obstacle, such as a wall of force, in its path, ignoring all cover. You must attempt the Strike by the end of your turn or this effect is lost.\nDestruction If the Grim Reaper slays the wielder of Ghosthand's Comet, the Reaper's scythe, as it strikes the killing blow, is destined to slice the star gun in half.",
      "bulk": 2,
      "price": {},
      "usage": "held-in-two-hands",
      "category": "advanced",
      "group": "firearm",
      "damage": {
        "dice": 5,
        "die": "d8",
        "type": "force"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:starfaring-cloak",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "oPZ2s4KmwaNXiUcc",
      "slug": "starfaring-cloak",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:556295a16e85d632db2478537d160787a48e92a1a37f250c811f781af802d34c",
    "translatableHash": "sha256:4ef73818bfbd2a403a89a0bea259ded86c9c1084fd388d9ffeedd5953f063ed4",
    "data": {
      "schemaVersion": 1,
      "name": "Starfaring Cloak",
      "itemType": "equipment",
      "level": 24,
      "rarity": "rare",
      "traits": [
        "artifact",
        "divine",
        "invested",
        "light"
      ],
      "description": "The swirling folds of a starfaring cloak appear to contain the night sky, with the stars rotating hypnotically through its firmament shedding dim light to a range of 10 feet. While wearing the cloak, you gain a +10-foot item bonus to your Speed and a fly Speed equal to your Speed. You can survive comfortably without breathing, in the void of space, and in severe or extreme cold or heat. Also, you gain sustenance from starlight and sunlight, so if you're outdoors for an hour or more per day, you don't need to eat or drink. While wearing the cloak, you can navigate perfectly and unerringly by looking up at the sky.\nActivate R (concentrate, fortune)\nFrequency once per day\nTrigger You make an attack roll, skill check, or saving throw\nEffect Reroll the triggering roll and take the higher result. This is a fortune effect.\nActivate 2 (concentrate, manipulate)\nFrequency once per day\nEffect The cloak casts Sleep at 4th rank (DC 42).\nActivate 3 (concentrate)\nFrequency once per week\nEffect The cloak casts Teleport at 10th rank. If you name no destination, it teleports you to a random planet in a random location that's safe for you.\nDestruction If the wearer of a starfaring cloak is bound by Imprisonment for a century and a day, the cloak dissolves into light. This time is reduced to a year and a day if the wearer is placed in eternal slumber by imprisonment and subjected to the Nightmare spell once per day.",
      "bulk": 0.1,
      "price": {},
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:caydens-tankard",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "LMKw9PCVGeZy7knY",
      "slug": "caydens-tankard",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/treasure/art-objects/major-art-object/tankard-owned-by-cayden-cailean.webp"
    },
    "sourceHash": "sha256:963d4399965d5e2b3455615f1cf09a1d4e15e084161807e7170ed5b85874e8cf",
    "translatableHash": "sha256:1b9169df7b3064bd3f7acac17a16441e152858ea026f1ae8c397a6049f9db84f",
    "data": {
      "schemaVersion": 1,
      "name": "Cayden's Tankard",
      "itemType": "weapon",
      "level": 25,
      "rarity": "unique",
      "traits": [
        "agile",
        "artifact",
        "divine",
        "thrown-20"
      ],
      "description": "This ordinary-looking silver tankard functions as a +4 major striking returning shockwave light hammer when wielded as a weapon. Imbued with Cayden Cailean's courage, you are immune to fear effects. Any liquid poured into the tankard transforms into a strong, alcoholic ambrosia that remains contained safely within until you drink it. Drinking the ambrosia Activates the tankard, with one of the following effects. If you aren't the one blessed to borrow the tankard, you are Drained 4 and Enfeebled 4 while holding it, and its magic doesn't function for you.\nActivate R (manipulate)\nTrigger You are targeted or included in the area of a fear effect\nEffect Calmly swigging a drink on the battlefield turns your foe's attempt to frighten you against them. The fear effect is counteracted for all targets, and the creature that created the effect must attempt a saving throw as if it alone were the original target of the effect.\nActivate 2 (concentrate, manipulate)\nFrequency once per hour\nEffect You drink from the tankard, ending the controlled, Grabbed, Immobilized, Paralyzed, Restrained, and slowed conditions on yourself and creatures of your choice within 120 feet of you, as well as anything giving such targets a circumstance penalty to Speed. Any effect causing these conditions ends, and if the source of the effect is an item, that item can't produce the effect for 1 week, provided it is of a level lower than the tankard's. If a target needs to Escape an effect imposing any of these conditions, it automatically does so on its next attempt. You can Activate this ability even if one of the listed conditions would normally prevent you from doing so (such as paralyzed).\nActivate 2 (concentrate, manipulate)\nFrequency once per day\nEffect You enhance yourself with a shard of Cayden's divine fortune and cast indestructibility.\nDestruction If an unholy creature carries Cayden's Tankard into the Starstone Cathedral, drinks from it, and returns outside with it, the tankard shatters.",
      "bulk": 0.1,
      "price": {},
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
    "contentId": "pf2e:item:equipment-srd:whisperer-of-souls",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "rft8qacTooqfsUIo",
      "slug": "whisperer-of-souls",
      "publicationTitle": "Pathfinder Treasure Vault (Remastered)",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:c517e2ee839f86e5ad22ce7be04a2d1ebba29746d3ff8ad448375449f89416dc",
    "translatableHash": "sha256:a18a91e38489f6bba78069e881460250ef5baf921197f9da989a1600248a6697",
    "data": {
      "schemaVersion": 1,
      "name": "Whisperer of Souls",
      "itemType": "weapon",
      "level": 28,
      "rarity": "unique",
      "traits": [
        "artifact",
        "deadly-d8",
        "divine",
        "forceful",
        "reach"
      ],
      "description": "This +4 major striking greater brilliant keen glaive binds the souls of powerful creatures it slays. The soul can't be returned to life by any means while imprisoned within the glaive and can be freed only by a deed of great benevolence or selflessness. While using the glaive as a weapon, whenever you reduce a sapient creature of 18th level or higher to 0 Hit Points or roll a critical success with a Strike against such a target, the creature must attempt a check (fortitude, dc:50) save.\nCritical Success No additional effect.\nSuccess The glaive siphons the creature's essence, rendering it Drained 1. If the creature dies from the Strike or while drained in this way, the creature's soul is bound in the glaive.\nFailure As success, but the creature is Drained 2.\nCritical Failure As success, but the creature is Drained 4.\nThe glaive also has the following activations.\nActivate F (concentrate)\nTrigger You Strike with the Whisperer of Souls\nEffect You choose whether the Strike deals lethal or nonlethal damage. If the glaive has a reason for doing so, such as slaying a creature whose soul the glaive can absorb, it can defy your choice if you fail a check (will, dc:50) save.\nActivate F (concentrate)\nTrigger You attempt an Occultism check to Decipher Writing, Identify Magic, Learn a Spell, or Recall Knowledge\nEffect You listen to eldritch secrets the weapon whispers, gaining a +4 item bonus to the triggering check.\nActivate 3 (concentrate, manipulate)\nFrequency once per week\nEffect Attempt an Occultism check as if you cast the Collective Memories ritual about a subject. If you roll a success or critical success, you can repeat what the Whisperer of Souls relates to you about the subject. On a critical failure, you and the glaive are drawn into a murmuring void of cold, where your mind is assaulted by strange visions for an entire week. At the end of this time, you reappear and must attempt a check (will, dc:50) save.\nSuccess When you return, you can retrain one of your skills into a Lore skill about evil creatures or places, as if you had spent 1 week retraining.\nFailure As success, but you are Stupefied 2 for 1 week.\nCritical Failure As success, but your alignment moves one step toward evil and you must retrain one of your skills into a Lore about evil creatures or places. You become obsessed with increasing your forbidden knowledge, turning to wicked forces that offer such secrets and compromising your morals further if you must.\nDestruction If the Whisperer of Souls is used to slay Shelyn's herald, it disintegrates, bringing about great evil in its wake.",
      "bulk": 2,
      "price": {},
      "usage": "held-in-two-hands",
      "category": "martial",
      "group": "polearm",
      "damage": {
        "dice": 1,
        "die": "d8",
        "type": "slashing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:gakgung",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "0E9ADJkQUVsz7A4G",
      "slug": "gakgung",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia Actor Guide",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/composite-shortbow.webp"
    },
    "sourceHash": "sha256:067a46d2931376fca735ca590df15feeb30cb7aae702af93e5c42bd5fd90f7f0",
    "translatableHash": "sha256:2448bb068009b5505f7f7eb12ea54228b5c182a025214e6e01ca3a69c406ff0b",
    "data": {
      "schemaVersion": 1,
      "name": "Gakgung",
      "itemType": "weapon",
      "level": 0,
      "rarity": "common",
      "traits": [
        "deadly-d8",
        "monk",
        "propulsive"
      ],
      "description": "A gakgung is a type of composite reflex bow that combines speed and power in equal amounts for effective precision shooting.",
      "bulk": 0.1,
      "price": {
        "gp": 2
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
    "contentId": "pf2e:item:equipment-srd:shuan-ji",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "0yiz254UI7DUFXWN",
      "slug": "shuan-ji",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia Actor Guide",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/weapon.svg"
    },
    "sourceHash": "sha256:35dd909476f5bd30feba247688f410750b00de7a06229877be15133e33eff347",
    "translatableHash": "sha256:845c9bac88fba825be215bbfcea6bec4bc06add4a5ed52cc6ad4f70f99664187",
    "data": {
      "schemaVersion": 1,
      "name": "Shuan Ji",
      "itemType": "weapon",
      "level": 0,
      "rarity": "uncommon",
      "traits": [
        "backswing",
        "forceful",
        "reach",
        "versatile-p"
      ],
      "description": "The shuan ji is a polearm featuring a long spear point on one end and two crescent-shaped blades that allow the wielder to strike with either side of the weapon.",
      "bulk": 2,
      "price": {
        "gp": 3
      },
      "usage": "held-in-two-hands",
      "category": "martial",
      "group": "polearm",
      "damage": {
        "dice": 1,
        "die": "d6",
        "type": "slashing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:peachwood-branch",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "7XJQmpYWRZRRutc4",
      "slug": "peachwood-branch",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia Actor Guide",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/materials/darkwood-branch.webp"
    },
    "sourceHash": "sha256:fa97676b245885a9f84c522fbb0413e5349192a77def606ce3bdc443c90ee897",
    "translatableHash": "sha256:d6bd50ebe1aa44f5fb08c3b808cb651a16f8beb9b4031fbb52a05fbc2f4533f5",
    "data": {
      "schemaVersion": 1,
      "name": "Peachwood Branch",
      "itemType": "equipment",
      "level": 0,
      "rarity": "uncommon",
      "traits": [
        "precious"
      ],
      "description": "Peachwood, often cultivated by Pharasmin priests, can ward against undead—even incorporeal ones. However, the wood loses its magical properties when it comes in contact with metal, requiring advanced carpentry to make full use of it.\nPeachwood Items\nPeachwood Items | Hardness | HP | BT |\nThin Items | | | |\nStandard-grade | 4 | 16 | 8 |\nHigh-grade | 6 | 24 | 12 |\nItems | | | |\nStandard-grade | 5 | 20 | 10 |\nHigh-grade | 8 | 32 | 16 |\nStructure | | | |\nStandard-grade | 12 | 48 | 24 |\nHigh-grade | 18 | 64 | 32 |",
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
    "contentId": "pf2e:item:equipment-srd:peachwood-lumber",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "b4hSaH0ITd5fbR08",
      "slug": "peachwood-lumber",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia Actor Guide",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/materials/darkwood-lumber.webp"
    },
    "sourceHash": "sha256:9ce582db28fba87a10691779aa880ea2ee0a94ff81f9f4a1dbe5e327a373f5f0",
    "translatableHash": "sha256:08dd65ee7d7a43df0c1534ce35d2e3958ea6e0bd035ce16eec83ea51dc25d767",
    "data": {
      "schemaVersion": 1,
      "name": "Peachwood Lumber",
      "itemType": "equipment",
      "level": 0,
      "rarity": "uncommon",
      "traits": [
        "precious"
      ],
      "description": "Peachwood, often cultivated by Pharasmin priests, can ward against undead—even incorporeal ones. However, the wood loses its magical properties when it comes in contact with metal, requiring advanced carpentry to make full use of it.\nPeachwood Items\nPeachwood Items | Hardness | HP | BT |\nThin Items | | | |\nStandard-grade | 4 | 16 | 8 |\nHigh-grade | 6 | 24 | 12 |\nItems | | | |\nStandard-grade | 5 | 20 | 10 |\nHigh-grade | 8 | 32 | 16 |\nStructure | | | |\nStandard-grade | 12 | 48 | 24 |\nHigh-grade | 18 | 64 | 32 |",
      "bulk": 1,
      "price": {
        "gp": 6000
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:zhuazhi-bang",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "EZho49nI8ZMXD3oD",
      "slug": "zhuazhi-bang",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia Actor Guide",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/weapon.svg"
    },
    "sourceHash": "sha256:233ca71ce3544a88769f6c929980be7b8e4032902b045c120eae9df86e49e367",
    "translatableHash": "sha256:c5a8ecc6e11bdc60282616953664939b93df581ccb465eb3760811ed65f222dc",
    "data": {
      "schemaVersion": 1,
      "name": "Zhuazhi Bang",
      "itemType": "weapon",
      "level": 0,
      "rarity": "uncommon",
      "traits": [
        "disarm",
        "grapple",
        "razing",
        "trip"
      ],
      "description": "This niche close-combat weapon resembles a flail with articulated talons used to hook onto an opponent's clothing or armor.",
      "bulk": 0.1,
      "price": {
        "gp": 1
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "flail",
      "damage": {
        "dice": 1,
        "die": "d6",
        "type": "piercing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:head-gem",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "FA1mAc7rEyC9vzZa",
      "slug": "head-gem",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia Actor Guide",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:b0b0995b003f5a6f02d7758fad5c7cb54f1158b1dc403a58c6a0952672addc4b",
    "translatableHash": "sha256:a95e8906cf553c3dfa4ccd3200a3b81ecc72a64f2854ded4d36779ab7921ee0e",
    "data": {
      "schemaVersion": 1,
      "name": "Head Gem",
      "itemType": "equipment",
      "level": 0,
      "rarity": "common",
      "traits": [],
      "description": "Upon your brow is a gem that houses your soul. When casting any spell or ritual to return you to life, your intact head gem can be substituted for your body. While you can freely remove your head gem, it's typically impossible for another creature to forcibly remove or destroy your head gem unless you're killed or permanently incapacitated first; at the GM's discretion, powerful magic or abilities can circumvent this restriction. If your head gem is removed or destroyed, it can be regrown using a day-long ritual. When this occurs, any remains of the previous gem immediately crumble to dust.",
      "bulk": 0,
      "price": {},
      "usage": "other",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:tetsubo",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "FjeKuljhpaIiDTI7",
      "slug": "tetsubo",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia Actor Guide",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/aklys.webp"
    },
    "sourceHash": "sha256:62fdafa5deb4d389c1fa546de452e739efb9911c6bd9cb8e615d7e5d7a114323",
    "translatableHash": "sha256:3a6e87c5343dfd6b6f197c0c0891f127accccaeebbd11ae79e3732fb5df39a7a",
    "data": {
      "schemaVersion": 1,
      "name": "Tetsubo",
      "itemType": "weapon",
      "level": 0,
      "rarity": "uncommon",
      "traits": [
        "razing",
        "shove",
        "sweep"
      ],
      "description": "The tetsubo is a war club constructed out of heavy wood shod with iron studs, designed for smashing through armor and defenses. A tetsubo made entirely out of metal might also be referred to as a kanabo.",
      "bulk": 3,
      "price": {
        "gp": 3
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
    "contentId": "pf2e:item:equipment-srd:liuyedao",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "kFZpTT1jI6UMfV9I",
      "slug": "liuyedao",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia Actor Guide",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/weapon.svg"
    },
    "sourceHash": "sha256:9a00cbf0c53978f25effa8cb37d54f048d2cfd3b93d9566427e14fc47c56a1da",
    "translatableHash": "sha256:81713f98e6eac28a63300860c6eef9d8fe29dc8141f53b49e3a324bf4f496d50",
    "data": {
      "schemaVersion": 1,
      "name": "Liuyedao",
      "itemType": "weapon",
      "level": 0,
      "rarity": "common",
      "traits": [
        "agile",
        "deadly-d4",
        "finesse",
        "sweep",
        "versatile-p"
      ],
      "description": "The liuyedao, or willow-leaf saber, is a common, one-handed military saber with a moderately curved blade designed for slashing and chopping attacks.",
      "bulk": 0.1,
      "price": {
        "gp": 3
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "sword",
      "damage": {
        "dice": 1,
        "die": "d4",
        "type": "slashing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:ogre-hook",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Oiq3QgLrM4i3W5Hg",
      "slug": "ogre-hook",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia Actor Guide",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/ogre-hook.webp"
    },
    "sourceHash": "sha256:4d4a0816b26ca6e74c8ec85dd8c22253b64c7548ca63be15a982cf10d2d21534",
    "translatableHash": "sha256:3c43609de5bef1ed3dc6bbf73d96084d99c189af47e825f826465247bdacf288",
    "data": {
      "schemaVersion": 1,
      "name": "Ogre Hook",
      "itemType": "weapon",
      "level": 0,
      "rarity": "uncommon",
      "traits": [
        "deadly-d10",
        "trip"
      ],
      "description": "Ogres are known for using immense, curved picks called ogre hooks.",
      "bulk": 2,
      "price": {
        "gp": 1
      },
      "usage": "held-in-two-hands",
      "category": "martial",
      "group": "pick",
      "damage": {
        "dice": 1,
        "die": "d10",
        "type": "piercing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:tri-bladed-katar",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "WuzK2R5ra5SZdbij",
      "slug": "tri-bladed-katar",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia Actor Guide",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:79686e89a7aef9fd2e7f36350db3c22e2523f7f17ac4662b223372fafe0fce32",
    "translatableHash": "sha256:b78625857d28c6a2d3d70227c5a8b4f23c71d364329b79760e8d8ee73be44cb4",
    "data": {
      "schemaVersion": 1,
      "name": "Tri-bladed Katar",
      "itemType": "weapon",
      "level": 0,
      "rarity": "uncommon",
      "traits": [
        "disarm",
        "fatal-d8",
        "monk"
      ],
      "description": "This punching dagger resembles the standard katar, save that a pair of blades can be folded out from the center blade, transforming the weapon into a starburst shape well suited to catching foes' weapons.",
      "bulk": 0.1,
      "price": {
        "sp": 1
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
    "contentId": "pf2e:item:equipment-srd:iron-wine",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "DOJxQLwkDvebbLWJ",
      "slug": "iron-wine",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia Actor Guide",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:22d8a2b9d11a6530fe8f191bf8fd16b34a50be1f9d6101767ccd7232ac36c1ea",
    "translatableHash": "sha256:765ee193ce08c5a426e31457314f918044868f134ff209efcf8f562aac889675",
    "data": {
      "schemaVersion": 1,
      "name": "Iron Wine",
      "itemType": "consumable",
      "level": 1,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "consumable",
        "elixir"
      ],
      "description": "Activate 1 (manipulate)\nAccess Tian Xia origin\nThis strong, clear liquor is made from fermented rice.\nWhen you drink a cup of iron wine, your sweat becomes highly combustive for the next 10 minutes, igniting with the slightest bit of friction. This causes your unarmed attacks to deal an additional 1d4 fire damage for the duration of the effect.\nEffect: Iron Wine\nDrinking more than one cup of iron wine in a single day gives you weakness 5 to fire until your next daily preparations.\nEffect: Iron Wine Weakness",
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
    "contentId": "pf2e:item:equipment-srd:chilled-fire-noodles",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "lXQ9ATsfuBo1MRko",
      "slug": "chilled-fire-noodles",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia Actor Guide",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/consumable.svg"
    },
    "sourceHash": "sha256:a5e024c445697b967373dae8d2f1f81971389ac632da4db24ad6a4010d0084ad",
    "translatableHash": "sha256:a8fdc6b9f61961cb8387052195cbe0a37bb6923ff90cb4516de4d8222d6667ba",
    "data": {
      "schemaVersion": 1,
      "name": "Chilled Fire Noodles",
      "itemType": "consumable",
      "level": 1,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical"
      ],
      "description": "Activate 3 (manipulate)\nAccess Tian Xia origin\nThese cool noodles are served with dark fermented sauces and vinegars before finally being tossed with spicy chili oil.\nWhen you consume the noodles, you temporarily ignore the -1 status penalty to AC and saving throws caused by the Fatigued condition for 1 hour.",
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
    "contentId": "pf2e:item:equipment-srd:bakuwa-lizardfolk-bony-plates",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "mrgtvEbYTjGpOi7F",
      "slug": "bakuwa-lizardfolk-bony-plates",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia Actor Guide",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/armor.svg"
    },
    "sourceHash": "sha256:ae1577b95bae3bcbbe1b1af8cf127683e9c64bbd21cea10d5f0e3ad2d27d5888",
    "translatableHash": "sha256:dc6231abc0d97b476e2d0b6edee8ba22bae2adde8b8af1f0be349ae52a1136a0",
    "data": {
      "schemaVersion": 1,
      "name": "Bakuwa Lizardfolk Bony Plates",
      "itemType": "armor",
      "level": 1,
      "rarity": "uncommon",
      "traits": [
        "aquadynamic",
        "comfort"
      ],
      "description": "Note Bakuwa Lizardfolk heritage only\nYour plates are medium armor in the plate armor group that grant a +4 item bonus to AC, a Dex cap of +1, a check penalty of –2, a Speed penalty of –5 feet, a Strength value of +3, and have the aquadynamic and comfort traits. You can never wear other armor or remove your plates. You can etch armor runes onto your plates.",
      "bulk": 0,
      "price": {},
      "usage": "",
      "category": "medium",
      "group": "plate",
      "armor": {
        "armorClassBonus": 4,
        "dexterityCap": 1,
        "checkPenalty": -2,
        "speedPenaltyFeet": -5
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:kotodama-whistle",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "YEB49me6ZI2Sahuv",
      "slug": "kotodama-whistle",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia Actor Guide",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:bdbc4e24aee64f46bedea3f58e9722f9bff27573ebe6d56c4f8574aa0b741553",
    "translatableHash": "sha256:2384742ab2a0665a6a57a28be47ecd99866d03f3262549d4d7e8fb41046a7db5",
    "data": {
      "schemaVersion": 1,
      "name": "Kotodama Whistle",
      "itemType": "equipment",
      "level": 3,
      "rarity": "uncommon",
      "traits": [
        "magical"
      ],
      "description": "This small wooden whistle bears an engraving with a symbol representing the word \"query.\" Practitioners of kotodama magic use these whistles to speak with the spirits of objects.\nActivate—Question the Soul 1 (manipulate)\nFrequency once per day\nEffect You place your hand on an object and play a single note on the whistle, causing the item to stir and respond to your questions for 1 minute. During this time, the object attempts to answer your questions to the best of its ability but can provide an answer of only \"yes\" or \"no.\" In most cases, an object has knowledge only of events it was personally present for and has no particular knowledge skills to interpret the events it has seen. If the object can't answer a question with a simple yes or no answer, it stays silent.",
      "bulk": 0,
      "price": {},
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:chilled-fire-noodles-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "LY4HQe0WfYy95d6M",
      "slug": "chilled-fire-noodles-greater",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia Actor Guide",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/consumable.svg"
    },
    "sourceHash": "sha256:7321fd55a4eda34766f61ae3022790b5e841a211515d639b25b56ef69d018d18",
    "translatableHash": "sha256:a3a267badcf44df8e1e0203c8652a850b41c1da3aa7a12b695269a90190a1edf",
    "data": {
      "schemaVersion": 1,
      "name": "Chilled Fire Noodles (Greater)",
      "itemType": "consumable",
      "level": 4,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical"
      ],
      "description": "Activate 3 (manipulate)\nAccess Tian Xia origin\nThese cool noodles are served with dark fermented sauces and vinegars before finally being tossed with spicy chili oil.\nWhen you consume the noodles, you temporarily ignore the -1 status penalty to AC and saving throws caused by the Fatigued condition for 4 hours.",
      "bulk": 0.1,
      "price": {
        "gp": 15
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:rainbow-vinegar-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "NVssWHKyKlaRmHog",
      "slug": "rainbow-vinegar-moderate",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia Actor Guide",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:06340978900e820c7314ea86b03e1c008b0666d9e2d68c016f774c45cbd3e18f",
    "translatableHash": "sha256:c2e7ca7d83753d15849b69aeba1ab9d95fa90a039ae3bf89acd4cd8bb775f0b5",
    "data": {
      "schemaVersion": 1,
      "name": "Rainbow Vinegar (Moderate)",
      "itemType": "consumable",
      "level": 4,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "consumable",
        "elixir"
      ],
      "description": "Activate 1 (manipulate)\nAccess Tian Xia origin\nBlack swill with multicolored ribbons makes this vinegar look like an oil spill.\nIngesting a dose of rainbow vinegar makes your sweat acidic and nonconductive for 10 minutes. During this time, your unarmed attacks deal an additional 1d4 acid damage, and you have resistance 10 to electricity. Vampires find this vinegar particularly harmful and take an additional 2d4 acid damage instead.\nEffect: Rainbow Vinegar\nTaking more than one dose of rainbow vinegar in a single day gives you weakness 5 to acid until your next daily preparations.\nEffect: Rainbow Vinegar Weakness",
      "bulk": 0.1,
      "price": {
        "gp": 15
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:cloud-buns",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "NZDZzVgW2Pu8blar",
      "slug": "cloud-buns",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia Actor Guide",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/consumable.svg"
    },
    "sourceHash": "sha256:587b29e686bf1bf9c4b23c32a583830b865d38c48c0090d319fc22bdf7e7de53",
    "translatableHash": "sha256:35e51a8b0a8b6cfe872989a2680eded59a1c6104c30a21af06b4dbfbaead89e1",
    "data": {
      "schemaVersion": 1,
      "name": "Cloud Buns",
      "itemType": "consumable",
      "level": 4,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical"
      ],
      "description": "Activate 1 (manipulate)\nAccess Tian Xia origin\nWhite, pillowy dough surrounds an interior containing minced meats, spices, and herbs. The dough is steamed with elemental magic to make it light and airy while keeping the meaty center moist.\nWhen you consume a bun, a set of small clouds form around your feet that grant you a fly Speed of 30 feet or your speed, whichever is lower, for 1 round.\nEffect: Cloud Buns",
      "bulk": 0.1,
      "price": {
        "gp": 17
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:kotodama-bells",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "UMJjOsukQATkXW3R",
      "slug": "kotodama-bells",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia Actor Guide",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:bfbc6f2ba40bd4e93fdb371924dcf823649ddb27302b3d91155be6d37ef01a13",
    "translatableHash": "sha256:d081af9e719eafde5f04c12b1b20ebace98935002ef25fd1c54f215e8b050510",
    "data": {
      "schemaVersion": 1,
      "name": "Kotodama Bells",
      "itemType": "equipment",
      "level": 4,
      "rarity": "uncommon",
      "traits": [
        "magical"
      ],
      "description": "This set of bronze bells bear engravings with symbols representing the word \"awaken.\" Among kotodama magic users, who seek to touch the souls of objects using the power of words, the peals of these bells are known to awaken the spirits of even inanimate objects.\nActivate—Awaken the Soul 2 (auditory, concentrate, manipulate)\nFrequency once per day\nEffect You ring the bell and focus on an object of negligible Bulk within 10 feet. The bell's toll animates the object for 24 hours. The object becomes a minion that can't attack but can move and take simple Interact actions appropriate for an item of its type, as determined by the GM. For example, a piece of chalk can write a message or draw a symbol, a hand fan can open or fan in a particular direction, or a magnifying glass can set itself up to dramatically reveal incriminating evidence. The animated item has AC 5, 5 Hit Points, a Speed of 10 feet, and automatically fails all saves. If the object is broken, it can no longer move, though it can still Interact as appropriate for an item of its type. As normal with minions you control, you must Command the object to grant it actions.",
      "bulk": 0.1,
      "price": {},
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:worldringer",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "7L10GdJdL1hYcJZm",
      "slug": "worldringer",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia Actor Guide",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/khakkhara.webp"
    },
    "sourceHash": "sha256:b361be9ff456e87505b5dfba1bf1f72a0dc2cc04700907f5628aad91f1f58c43",
    "translatableHash": "sha256:8b528049f87e9513e9805bd89ba04ae9fefc754e8ce600cf8eb5911873d2ecf8",
    "data": {
      "schemaVersion": 1,
      "name": "Worldringer",
      "itemType": "weapon",
      "level": 5,
      "rarity": "uncommon",
      "traits": [
        "shove",
        "two-hand-d10",
        "versatile-p"
      ],
      "description": "This +1 striking khakkhara is topped by an ornate finial depiction of a small-statured traveler with animal companions. While the rings of a khakkhara are normally meant to alert others of one's presence, the magic of the worldringer enhances the chimes to entreat upon those who hear it.\nActivate—Chimes of Command 3 (manipulate)\nFrequency once per day\nEffect You call upon beings of this plane or another to hear your call. Choose Summon Lesser Servitor or Command. You Cast the chosen Spell at 1st rank (DC 19). When casting summon lesser servitor in this way, you must choose to summon a magical animal.",
      "bulk": 1,
      "price": {
        "gp": 160
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "club",
      "damage": {
        "dice": 1,
        "die": "d6",
        "type": "bludgeoning"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:gamtu-hat",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "iS8v3jXGPV8yGdcE",
      "slug": "gamtu-hat",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia Actor Guide",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:cfed1182f8b2d66e5e2d3c5e7411882ce6a12436b26bfb6610287a76fc382b7e",
    "translatableHash": "sha256:0337ae18c9994ec8dd7963ca8a490c03643538269ab8391f0e98b2ecbb96c4d3",
    "data": {
      "schemaVersion": 1,
      "name": "Gamtu Hat",
      "itemType": "equipment",
      "level": 5,
      "rarity": "common",
      "traits": [
        "magical"
      ],
      "description": "You conjure a magical gamtu hat, which is a magic item of light Bulk. The gamtu persists for 1 hour, and you can give the gamtu to another creature to wear.\nActivate—Hat Trick 2 (manipulate)\nEffect You tap the hat and gain the effects of a 2nd-rank Invisibility spell, which lasts for the spell's normal duration, until the hat is removed, or until the hat's normal duration runs out, whichever comes first. After the spell ends, the gamtu disappears.",
      "bulk": 0.1,
      "price": {},
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:peachwood-talisman",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "GiiBkaa5JaJ5msPS",
      "slug": "peachwood-talisman",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia Actor Guide",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/consumables/talismans/peachwood-talisman.webp"
    },
    "sourceHash": "sha256:e12b7a1b37a4de0ce34cef0d9089a19ba2d226761536584ba52852c67b692ec6",
    "translatableHash": "sha256:33cc85b33f6a1f4a31ec2da0abff34d2647f2291882259cfec58610b45c3619d",
    "data": {
      "schemaVersion": 1,
      "name": "Peachwood Talisman",
      "itemType": "consumable",
      "level": 6,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical",
        "talisman"
      ],
      "description": "Access Tian Xia origin\nActivate 1 (concentrate)\nSymbols of good fortune and luck are carved on this thin, square wooden plaque. It smells of sandalwood from the blessings placed upon it. After activation, for the next minute, you can sense attacks from undead. You aren't Off-Guard to Hidden, Undetected, or flanking undead of your level or lower, or undead of your level or lower using surprise attack. However, they can still help their allies flank.",
      "bulk": 0,
      "price": {
        "gp": 40
      },
      "usage": "affixed-to-armor",
      "category": "talisman",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:flashblade",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "QKhVKfaum7DyF53w",
      "slug": "flashblade",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia Actor Guide",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/nodachi.webp"
    },
    "sourceHash": "sha256:dd840bed32f7d63822ed48e9e7cc75b958c7b356aa620a5b673dd73351ed47f7",
    "translatableHash": "sha256:fe592a933be07fe370d520309f89e7422e9b909b4de1de80614d904ade7ea07d",
    "data": {
      "schemaVersion": 1,
      "name": "Flashblade",
      "itemType": "weapon",
      "level": 6,
      "rarity": "common",
      "traits": [
        "brace",
        "deadly-d12",
        "magical",
        "reach"
      ],
      "description": "A sleek and impossibly lightweight blade attached to a haft scriven with lightning bolts make up this +1 striking nodachi.\nActivate—Prepare Flash 2 (concentrate)\nFrequency once per 10 minutes\nEffect You concentrate with complete focus on your surroundings, breathing in the flashblade's magic to make you lighter and faster, and the blade of your sword more flexible. You Ready a melee Strike, increasing the flashblade's reach for that Strike to 15 feet. If the trigger doesn't occur, this doesn't count against the flashblade's frequency.",
      "bulk": 2,
      "price": {
        "gp": 230
      },
      "usage": "held-in-two-hands",
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
    "contentId": "pf2e:item:equipment-srd:wand-of-purification-2nd-rank-spell",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "TIP4RFdWohqqpiBV",
      "slug": "wand-of-purification-2nd-rank-spell",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia Actor Guide",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:1170325f7770389305a860569ac69924ef039ef02a68fc7f54d50ed998278811",
    "translatableHash": "sha256:107a3933550eaca94a7fb4e12a1cca827b8aedd25ec047a00d625f16bffb80ef",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Purification (2nd-Rank Spell)",
      "itemType": "equipment",
      "level": 6,
      "rarity": "common",
      "traits": [
        "magical",
        "wand"
      ],
      "description": "This cypress onusa rod is decorated with a number of paper streamers that rustle when shaken to direct purification magic. Wands of purification contain either Cleanse Affliction, Clear Mind, or Sound Body, decided when the wand is created.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast cleanse affliction, clear mind, or sound body of the indicated level. If your counteract check would be sufficient only to suppress the effect until the beginning of your next turn, instead of to fully counteract it, then you can Sustain the Activation of the wand each round to suppress the effect for an additional round, to a maximum of 1 minute. You Sustain the Activation by shaking the wand, so if at any point you release or otherwise drop the wand, the effect immediately stops being suppressed and resumes on the target as normal.\nCraft Requirements Supply a casting of cleanse affliction, clear mind, or sound body, as appropriate.",
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
    "contentId": "pf2e:item:equipment-srd:preserved-moonflower",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "ebpO5kKJBEvbZQrQ",
      "slug": "preserved-moonflower",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia Actor Guide",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:ff7256e293b24a707022d1f05e4f74d245a9083e04b1712022743c3f638cb67b",
    "translatableHash": "sha256:469f71ead7a8751198b39b5417b3841ca1f4eba59d328ef39665285c7bd218c9",
    "data": {
      "schemaVersion": 1,
      "name": "Preserved Moonflower",
      "itemType": "consumable",
      "level": 7,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "consumable"
      ],
      "description": "Activate 1 (manipulate)\nAccess Tian Xia origin\nThough these preserved vegetables aren't actual moonflowers, they're made using a moonflower-distilled vinegar.\nWhen consumed, tendrils sprout from your veins and curl around you, granting you a +2 status bonus to saves against void effects for 10 minutes and reducing your wounded condition by up to 2.\nEffect: Preserved Moonflower\nEating more than one preserved moonflower dish in a day doesn't grant further benefits and makes you Drained 1.",
      "bulk": 0.1,
      "price": {
        "gp": 60
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-purification-3rd-rank-spell",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "OvGfkoGfqFMEhknO",
      "slug": "wand-of-purification-3rd-rank-spell",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia Actor Guide",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:ac5d98b047496d16939725325c9879bd5add616b4e7ecf21074ee61c561de642",
    "translatableHash": "sha256:f8fe235fd2822f2229af77dc67eb2118dcdbafa4d9229e8b13071892a41bffa9",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Purification (3rd-Rank Spell)",
      "itemType": "equipment",
      "level": 8,
      "rarity": "common",
      "traits": [
        "magical",
        "wand"
      ],
      "description": "This cypress onusa rod is decorated with a number of paper streamers that rustle when shaken to direct purification magic. Wands of purification contain either Cleanse Affliction, Clear Mind, or Sound Body, decided when the wand is created.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast cleanse affliction, clear mind, or sound body of the indicated level. If your counteract check would be sufficient only to suppress the effect until the beginning of your next turn, instead of to fully counteract it, then you can Sustain the Activation of the wand each round to suppress the effect for an additional round, to a maximum of 1 minute. You Sustain the Activation by shaking the wand, so if at any point you release or otherwise drop the wand, the effect immediately stops being suppressed and resumes on the target as normal.\nCraft Requirements Supply a casting of cleanse affliction, clear mind, or sound body, as appropriate.",
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
    "contentId": "pf2e:item:equipment-srd:deathseeker",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "VYmdcWj6VmUrTxJI",
      "slug": "deathseeker",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia Actor Guide",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:96063407ff939283d47bf413e82f1be8a5dd0d9420dd8e47e511d80448016ca2",
    "translatableHash": "sha256:aa5e134d8158d94390d420cdc4e3f6249ac2ad3e1409401aa11aeca711c2fd3c",
    "data": {
      "schemaVersion": 1,
      "name": "Deathseeker",
      "itemType": "weapon",
      "level": 8,
      "rarity": "common",
      "traits": [
        "agile",
        "deadly-d8",
        "finesse",
        "magical"
      ],
      "description": "A hauntingly beautiful and masterfully crafted blade, this +1 striking wounding kris has been whet with the spilled blood of its creator, imbuing violent intent within its crimson curves. When you critically succeed at a Strike made with a deathseeker, the target feels the blade's unbridled bloodlust trying to consume it and must attempt a check (will, dc:24, traits:incapacitation) save; this effect has the incapacitation trait.\nCritical Success The target is unaffected and is temporarily immune for 24 hours.\nSuccess The target takes an additional 1 persistent bleed damage, and the DC for recovering from persistent bleed damage is 17, or 12 with particularly effective assistance.\nFailure As success, except the target is also Confused for 1 round. It gets a flat check to recover from this confusion when it critically succeeds at a Strike against another creature or reduces another living being to 0 Hit Points, but not when it takes damage.\nCritical Failure As success, except the target is also confused for 3 rounds. It gets a flat check to recover from this confusion when it critically succeeds at a Strike against another creature or reduces another living being to 0 Hit Points, but not when it takes damage.",
      "bulk": 0.1,
      "price": {
        "gp": 500
      },
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
    "contentId": "pf2e:item:equipment-srd:cloud-buns-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "TioBntQv3VAnS7Wb",
      "slug": "cloud-buns-greater",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia Actor Guide",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/consumable.svg"
    },
    "sourceHash": "sha256:6c50dc676fec830e762fe54e24a574076eab8bec9305f01a0ec08d70b7c32502",
    "translatableHash": "sha256:2659b74de5aca709be780774250cc9ee3ec3a210f56003855511079045bf8b64",
    "data": {
      "schemaVersion": 1,
      "name": "Cloud Buns (Greater)",
      "itemType": "consumable",
      "level": 9,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical"
      ],
      "description": "Activate 1 (manipulate)\nAccess Tian Xia origin\nWhite, pillowy dough surrounds an interior containing minced meats, spices, and herbs. The dough is steamed with elemental magic to make it light and airy while keeping the meaty center moist.\nWhen you consume a bun, a set of small clouds form around your feet that grant you a fly Speed of 30 feet or your speed, whichever is lower, for 1 minute.\nYou also have a +2 item bonus to Acrobatics checks to Maneuver in Flight.\nEffect: Cloud Buns (Greater)",
      "bulk": 0.1,
      "price": {
        "gp": 150
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:ghost-fowl-porridge",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Vemy5QGbLRdPedcP",
      "slug": "ghost-fowl-porridge",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia Actor Guide",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:9a1881ea1856d0b9fdd1c8ef07ca6fd97012b146eba54a1ec92c7fcdcbcd7dfb",
    "translatableHash": "sha256:388f295afa25ab84936ea0f55ef9687dd6a6a42df24f00f91a171df134be371d",
    "data": {
      "schemaVersion": 1,
      "name": "Ghost Fowl Porridge",
      "itemType": "consumable",
      "level": 9,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical"
      ],
      "description": "Activate 1 (manipulate)\nAccess Tian Xia origin\nThis robust porridge—made from a cockatrice distilled into a broth, hot peppers from a demonic source, and various toppings—causes diners to utter a ghostly wail from the intense heat.\nConsuming the porridge grants you a +2 item bonus to saving throws against being Petrified for 1 hour. You also gain resistance 3 against physical damage for the duration.\nEffect: Ghost Fowl Porridge",
      "bulk": 0.1,
      "price": {
        "gp": 140
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:dragon-pearl",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "g6agII64qc6wuSiP",
      "slug": "dragon-pearl",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia Actor Guide",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:6551b80a5de7103f2d748b03d98e1b66aef0fb695e7185181488ad2024148ebb",
    "translatableHash": "sha256:ff5fbf54b4418cc72a33b4fc7085f40278374d1c5ae83f4ca8f28454db62261e",
    "data": {
      "schemaVersion": 1,
      "name": "Dragon Pearl",
      "itemType": "consumable",
      "level": 10,
      "rarity": "rare",
      "traits": [
        "alchemical",
        "consumable",
        "processed"
      ],
      "description": "Activate 1 minute (manipulate)\nThese fermented and dried tea leaves are rolled into a ball shaped like a pearl.\nWhen brewed as a tea and consumed, it promotes an outpouring of vital energy that surges through your body. For the next 10 minutes, you have resistance 15 to void damage, and your unarmed attacks deal an additional 1d6 points of vitality damage on a successful Strike.\nWhile this effect is active, whenever a damaging attack or effect would reduce you to 0 Hit Points, you can use your reaction to immediately end the benefits of dragon pearl and remain conscious and standing with 10 Hit Points, increasing your Wounded condition by 1.\nEffect: Dragon Pearl",
      "bulk": 0.1,
      "price": {
        "gp": 180
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-purification-4th-rank-spell",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "IaUKTq5fnWafnwO8",
      "slug": "wand-of-purification-4th-rank-spell",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia Actor Guide",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:97d2ab6dddcd33b774fee1f9fed69a0afad363376e03ff03789a377b1edea775",
    "translatableHash": "sha256:a887894304bdd9d7b79005f78361cdc0b0e45812d4dd3cd939ed90476c005b77",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Purification (4th-Rank Spell)",
      "itemType": "equipment",
      "level": 10,
      "rarity": "common",
      "traits": [
        "magical",
        "wand"
      ],
      "description": "This cypress onusa rod is decorated with a number of paper streamers that rustle when shaken to direct purification magic. Wands of purification contain either Cleanse Affliction, Clear Mind, or Sound Body, decided when the wand is created.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast cleanse affliction, clear mind, or sound body of the indicated level. If your counteract check would be sufficient only to suppress the effect until the beginning of your next turn, instead of to fully counteract it, then you can Sustain the Activation of the wand each round to suppress the effect for an additional round, to a maximum of 1 minute. You Sustain the Activation by shaking the wand, so if at any point you release or otherwise drop the wand, the effect immediately stops being suppressed and resumes on the target as normal.\nCraft Requirements Supply a casting of cleanse affliction, clear mind, or sound body, as appropriate.",
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
    "contentId": "pf2e:item:equipment-srd:wand-of-purification-5th-rank-spell",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "9QstkAexbb6QOwht",
      "slug": "wand-of-purification-5th-rank-spell",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia Actor Guide",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:da908b697c777f59d1ab122e1bfd629e0529680fd7adef93f0fe9df6f9d1f018",
    "translatableHash": "sha256:8cfacb35712c219c4b2c97bf16b6ed8e80503677e6669dda8138c9b713719a7a",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Purification (5th-Rank Spell)",
      "itemType": "equipment",
      "level": 12,
      "rarity": "common",
      "traits": [
        "magical",
        "wand"
      ],
      "description": "This cypress onusa rod is decorated with a number of paper streamers that rustle when shaken to direct purification magic. Wands of purification contain either Cleanse Affliction, Clear Mind, or Sound Body, decided when the wand is created.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast cleanse affliction, clear mind, or sound body of the indicated level. If your counteract check would be sufficient only to suppress the effect until the beginning of your next turn, instead of to fully counteract it, then you can Sustain the Activation of the wand each round to suppress the effect for an additional round, to a maximum of 1 minute. You Sustain the Activation by shaking the wand, so if at any point you release or otherwise drop the wand, the effect immediately stops being suppressed and resumes on the target as normal.\nCraft Requirements Supply a casting of cleanse affliction, clear mind, or sound body, as appropriate.",
      "bulk": 0.1,
      "price": {
        "gp": 3000
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:rainbow-vinegar-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "iq7hL6HDsPCPU4pt",
      "slug": "rainbow-vinegar-greater",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia Actor Guide",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:87477d57ef63869e4701faf2ba1049a76bb999c47f4723c6cdfe7c430465f4ca",
    "translatableHash": "sha256:14e973c2b307007c3e5bdc7e7cdb598120371113c85dba7223b9fff9b680fc2f",
    "data": {
      "schemaVersion": 1,
      "name": "Rainbow Vinegar (Greater)",
      "itemType": "consumable",
      "level": 12,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "consumable",
        "elixir"
      ],
      "description": "Activate 1 (manipulate)\nAccess Tian Xia origin\nBlack swill with multicolored ribbons makes this vinegar look like an oil spill.\nIngesting a dose of rainbow vinegar makes your sweat acidic and nonconductive for 10 minutes. During this time, your unarmed attacks deal an additional 1d8 acid damage, and you have resistance 15 to electricity. Vampires find this vinegar particularly harmful and take an additional 2d8 acid damage instead.\nEffect: Rainbow Vinegar\nTaking more than one dose of rainbow vinegar in a single day gives you weakness 5 to acid until your next daily preparations.\nEffect: Rainbow Vinegar Weakness",
      "bulk": 0.1,
      "price": {
        "gp": 110
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:flashblade-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "uPtU3QGn9UdskxFh",
      "slug": "flashblade-greater",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia Actor Guide",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/nodachi.webp"
    },
    "sourceHash": "sha256:462dec3a8b9ef2a1153446e5beebb1c1a35ccd6fafc666b1487f0c48690eac4a",
    "translatableHash": "sha256:c44b30219bc5ce3454fe72f8f0feb6fc8a11263f26824f7642725397771b3702",
    "data": {
      "schemaVersion": 1,
      "name": "Flashblade (Greater)",
      "itemType": "weapon",
      "level": 12,
      "rarity": "common",
      "traits": [
        "brace",
        "deadly-d12",
        "magical",
        "reach"
      ],
      "description": "A sleek and impossibly lightweight blade attached to a haft scriven with lightning bolts make up this +2 greater striking nodachi.\nActivate—Prepare Flash 2 (concentrate)\nFrequency once per 10 minutes\nEffect You concentrate with complete focus on your surroundings, breathing in the flashblade's magic to make you lighter and faster, and the blade of your sword more flexible. You Ready a melee Strike, increasing the flashblade's reach for that Strike to 20 feet. If the trigger doesn't occur, this doesn't count against the flashblade's frequency.",
      "bulk": 2,
      "price": {
        "gp": 1900
      },
      "usage": "held-in-two-hands",
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
    "contentId": "pf2e:item:equipment-srd:navaratna-of-the-solar-ruby",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "9s4wIWjq9z9VGxmz",
      "slug": "navaratna-of-the-solar-ruby",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia Actor Guide",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/equipment.svg"
    },
    "sourceHash": "sha256:ab12f885475e97d1dfd80cd19248c15cd9e41f4ae1f817ede4f6ed60f2919ae3",
    "translatableHash": "sha256:1ea82586e6f71a9ad02fc2e9951abdd4721f0068fc30e8d8af3fb559d1ddb543",
    "data": {
      "schemaVersion": 1,
      "name": "Navaratna of the Solar Ruby",
      "itemType": "equipment",
      "level": 13,
      "rarity": "unique",
      "traits": [
        "artifact",
        "divine"
      ],
      "description": "These nine flawless gems are set within a golden necklace, their centerpiece a holy ruby pulled from the center of a sun. So long as you are wearing the navaratna, you ignore all environmental effects due to temperature, do not take penalties due to wind, and ignore all damage and effects from droughts, floods, and earthquakes. You are also immune to damage from starvation. The navaratna does not otherwise grant you resistance against damage (such as fire or cold damage).\nActivate—Sutra of the Flawless Servant r (concentrate, divine, fortune)\nFrequency once per hour\nTrigger An ally within 30 feet fails a saving throw against an environmental effect or a spell with the air, earth, fire, or water trait\nEffect You offer a prayer for your divine protection to extend to your companion. The creature rerolls the triggering saving throw with a +2 item bonus. They must take the new result, even if it is worse.\nDestruction The navaratna must be swallowed by a fiendish divine lion; the lion must then by killed by drowning in a lake of naga venom and left to rot for a year. At the stroke of midnight on the final day, the artifact is destroyed.",
      "bulk": 0.1,
      "price": {},
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:jian-of-lifes-duality",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "KzvbL114c72EhWhd",
      "slug": "jian-of-lifes-duality",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia Actor Guide",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:a758dfeaccad76b976895c9474872ddb318cfa4d25a1d0d986c7d04491a2a8cc",
    "translatableHash": "sha256:d09fb07cd5c74c10acdbcc030520961ee196d4b9f5690c986090c5c52999ebae",
    "data": {
      "schemaVersion": 1,
      "name": "Jian of Life's Duality",
      "itemType": "weapon",
      "level": 13,
      "rarity": "uncommon",
      "traits": [
        "magical",
        "versatile-p"
      ],
      "description": "This +2 greater striking longsword sports no extravagant characteristics save for a blade of pure, unblemished ivory and a hilt of unmarred obsidian. It takes on the propensity of its user, turning whiter or darker based on their actions.\nThe effects of life's duality are based on the number and type of charges it has. It begins with 0 charges and can gain either dark or light charges, up to a maximum of 3 charges of one type. A charge dissipates after 10 minutes or when a charge of the opposite type is gained. If you have a charge of one type and would gain the opposite type of charge, you lose your current charges.\nLife's duality gains a dark charge when it critically succeeds at a Strike against an opponent or reduces the Hit Points of a living enemy to 0. For each dark charge it has, it deals an additional 1d4 void damage (maximum 3d4).\nLife's duality gains a light charge when you use a spell, skill check, or ability to restore at least 10 Hit Points to an ally. The damage healed must have been inflicted by a significant foe or threat. For each light charge it has, you gain 1d4 temporary Hit Points at the end of each round (maximum 3d4).\nActivate—Burst of Duality 3 (concentrate)\nRequirements Life's duality has 3 dark charges or 3 light charges;\nFrequency once per day\nEffect You unleash the sword's charged energy in a magical display. You cast a 3-action 5th-rank Harm spell if you have 3 dark charges or a 3-action 5th-rank Heal spell if you have 3 light charges (check (fortitude, dc:30)). The sword then reverts to having 0 charges.",
      "bulk": 1,
      "price": {
        "gp": 3000
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
    "contentId": "pf2e:item:equipment-srd:twisting-gale",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "2iKqXkRAq8qwlFlT",
      "slug": "twisting-gale",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia Actor Guide",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/weapon.svg"
    },
    "sourceHash": "sha256:7bcbf44945e853292fc2dff0282b3fdd93ab7278a6fcd1b5965703c2c00e4f59",
    "translatableHash": "sha256:4369ddff8e8f97ac48f7e67e89894e1aa0288e3df7a637495809fd1af40ff2ab",
    "data": {
      "schemaVersion": 1,
      "name": "Twisting Gale",
      "itemType": "weapon",
      "level": 14,
      "rarity": "uncommon",
      "traits": [
        "backswing",
        "disarm",
        "force",
        "monk",
        "parry"
      ],
      "description": "This +2 greater striking impactful sansetsukon is made of metal colored pale blue that echoes howling winds when swung and emits the force of a storm when it connects.\nActivate—Sonic Gale r (concentrate, force, magical)\nTrigger You critically hit with the twisting gale\nFrequency once per 10 minutes\nEffect The energy of your follow-through erupts from your opponent in a wave of concussive energy. You deal sonic damage equal to your normal Strike damage with the twisting gale in a 30-foot cone behind your target. Creatures in the area, not including your target, must attempt a check (fortitude, against:class, basic) save against your class DC.",
      "bulk": 2,
      "price": {
        "gp": 4200
      },
      "usage": "held-in-two-hands",
      "category": "martial",
      "group": "flail",
      "damage": {
        "dice": 1,
        "die": "d8",
        "type": "bludgeoning"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:frost-fair-yanyuedao",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "8YijFaakOFWjddJO",
      "slug": "frost-fair-yanyuedao",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia Actor Guide",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:445595c4f6bfd71277c178d8413d3fd5b45cab174968c32ef55996f2309caeea",
    "translatableHash": "sha256:c960d85ef31240546107b7dbe910a56120b65edb48d42f4d88c3dc73bb04a406",
    "data": {
      "schemaVersion": 1,
      "name": "Frost Fair Yanyuedao",
      "itemType": "weapon",
      "level": 14,
      "rarity": "unique",
      "traits": [
        "artifact",
        "cold",
        "deadly-d8",
        "forceful",
        "reach"
      ],
      "description": "The Frost Fair Yanyuedao is a +2 greater striking yanyuedao (use statistics for glaive) once wielded by a legendary military general from Goka. This weapon was constructed from pieces harvested from a dragon's body. When in an area of severe cold or colder, the Frost Fair Yanyuedao becomes a +3 major striking yanyuedao with a glowing blue cutting edge and the following ability.\nActivate—Dragon Chill 1 (manipulate)\nEffect Until the end of your turn, the Frost Fair Yanyuedao gains the effects of a Greater Frost rune. While under this effect, if you critically succeed at a Strike using this weapon against a creature who has resistance or immunity to cold, that creature must attempt a check (fortitude, dc:31) save or be Slowed 1 for 1 minute.\nEffect: Dragon Chill",
      "bulk": 2,
      "price": {},
      "usage": "held-in-two-hands",
      "category": "martial",
      "group": "polearm",
      "damage": {
        "dice": 1,
        "die": "d8",
        "type": "slashing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:worldringer-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "NvukdOaemuC6kMLL",
      "slug": "worldringer-greater",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia Actor Guide",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/khakkhara.webp"
    },
    "sourceHash": "sha256:815cd4d775d00a426459c284dcd63394496b4b55678be98939f01a76deb1c4c3",
    "translatableHash": "sha256:3c127f453d2837f5f0d7ae5a0139268e54e7a282cbaba5766a0d2a51d1a5bd41",
    "data": {
      "schemaVersion": 1,
      "name": "Worldringer (Greater)",
      "itemType": "weapon",
      "level": 14,
      "rarity": "uncommon",
      "traits": [
        "shove",
        "two-hand-d10",
        "versatile-p"
      ],
      "description": "This +2 greater striking khakkhara is topped by an ornate finial depiction of a small-statured traveler with animal companions. While the rings of a khakkhara are normally meant to alert others of one's presence, the magic of the worldringer enhances the chimes to entreat upon those who hear it.\nActivate—Chimes of Command 3 (manipulate)\nFrequency once per day\nEffect You call upon beings of this plane or another to hear your call. Choose Summon Lesser Servitor or Command. You Cast the chosen Spell at 5th rank (DC 33). When casting summon lesser servitor in this way, you must choose to summon a magical animal.",
      "bulk": 1,
      "price": {
        "gp": 4200
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "club",
      "damage": {
        "dice": 1,
        "die": "d6",
        "type": "bludgeoning"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:heavenly-rolling-flames",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "srCxiFF44RcuRMHD",
      "slug": "heavenly-rolling-flames",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia Actor Guide",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:26211fe60d88fcef660ee7cc3207d2300710a04783f9eb2b458f800f9e684200",
    "translatableHash": "sha256:560e5859048aae7fec78492be73f4f0fc9744916ff58757f0c88cf41ecf87e2d",
    "data": {
      "schemaVersion": 1,
      "name": "Heavenly Rolling Flames",
      "itemType": "weapon",
      "level": 14,
      "rarity": "uncommon",
      "traits": [
        "agile",
        "disarm",
        "finesse",
        "magical",
        "monk",
        "parry",
        "twin",
        "versatile-p"
      ],
      "description": "This set of +2 greater striking flaming feng huo lun is warm to the touch and wreathed in the bright red and orange glow of a constantly flickering flame. While wielded, you gain cold resistance 2, and you treat the effects of environmental cold as one degree lower. Heavenly rolling flames can be Activated only if you wield two of them, and Activating them counts against the frequency for both weapons.\nActivate—Rolling Flight 2 (concentrate)\nFrequency once per hour\nEffect You attach the wheels to your feet, and their constant movement and energy allow you to move through the air. You gain a fly Speed of 20 feet for 10 minutes. While in use in this way, you can't wield the wheels as weapons. You can spend an Interact action at any time to end this effect and re-grip the heavenly rolling flames. If you lack enough free hands to wield them, you drop them in your space.\nEffect: Rolling Flight\nActivate—Speed of Heaven 2 (manipulate)\nFrequency once per day\nEffect You cast Haste as a 3rd-rank occult spell, but you can target only yourself.",
      "bulk": 0.1,
      "price": {
        "gp": 4500
      },
      "usage": "held-in-one-hand",
      "category": "advanced",
      "group": "knife",
      "damage": {
        "dice": 1,
        "die": "d4",
        "type": "slashing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:sun-heralds-stylus",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "tULEDu1O4fzhyBeB",
      "slug": "sun-heralds-stylus",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia Actor Guide",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/default-icons/equipment.svg"
    },
    "sourceHash": "sha256:270cbf7ad63df76ba1f7c6128429a7e43d42cd03be7d1d59ce8aa202bc28df7a",
    "translatableHash": "sha256:04540194345dbd32af4b8c539e49ad1b5170b5c1632bdb346a8a38a32d882fab",
    "data": {
      "schemaVersion": 1,
      "name": "Sun Herald's Stylus",
      "itemType": "equipment",
      "level": 14,
      "rarity": "common",
      "traits": [
        "magical"
      ],
      "description": "This writing instrument was made from the spur of one of the giant divine roosters that heralds the presence of Shizuru. While you hold it, you gain a +2 item bonus to Calligraphy Lore and Medicine checks.\nActivate—Rejuvenating Ink 2 (manipulate)\nFrequency once per day\nEffect Drawing a circle on the ground with your stylus, you cast Field of Life centered on yourself.\nCraft Requirements The feathers must be plucked from a living divine rooster or given by the bird to a chosen mortal.",
      "bulk": 1,
      "price": {
        "gp": 4000
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-purification-6th-rank-spell",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "ZFx0WqzlNnIxeIII",
      "slug": "wand-of-purification-6th-rank-spell",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia Actor Guide",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:c2cd1246ba1942adbf3ec15b28d0aaecaa6b5b5b6493a768d03fb1a9c65b641f",
    "translatableHash": "sha256:1d7148db994430342a3d283b296ac47847e600bdf28d74457a7019043c31024e",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Purification (6th-Rank Spell)",
      "itemType": "equipment",
      "level": 14,
      "rarity": "common",
      "traits": [
        "magical",
        "wand"
      ],
      "description": "This cypress onusa rod is decorated with a number of paper streamers that rustle when shaken to direct purification magic. Wands of purification contain either Cleanse Affliction, Clear Mind, or Sound Body, decided when the wand is created.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast cleanse affliction, clear mind, or sound body of the indicated level. If your counteract check would be sufficient only to suppress the effect until the beginning of your next turn, instead of to fully counteract it, then you can Sustain the Activation of the wand each round to suppress the effect for an additional round, to a maximum of 1 minute. You Sustain the Activation by shaking the wand, so if at any point you release or otherwise drop the wand, the effect immediately stops being suppressed and resumes on the target as normal.\nCraft Requirements Supply a casting of cleanse affliction, clear mind, or sound body, as appropriate.",
      "bulk": 0.1,
      "price": {
        "gp": 4500
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-purification-7th-rank-spell",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "4UsokByXD6h54H0F",
      "slug": "wand-of-purification-7th-rank-spell",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia Actor Guide",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:3a522e6a602f57e42034b84c5c262f36d4d9f3ff682b07835e05835d97ffe254",
    "translatableHash": "sha256:c86c466b52b4a2b308462c390cde77f903f7ffa97459ebc8aa55a4c3ab17efcf",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Purification (7th-Rank Spell)",
      "itemType": "equipment",
      "level": 16,
      "rarity": "common",
      "traits": [
        "magical",
        "wand"
      ],
      "description": "This cypress onusa rod is decorated with a number of paper streamers that rustle when shaken to direct purification magic. Wands of purification contain either Cleanse Affliction, Clear Mind, or Sound Body, decided when the wand is created.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast cleanse affliction, clear mind, or sound body of the indicated level. If your counteract check would be sufficient only to suppress the effect until the beginning of your next turn, instead of to fully counteract it, then you can Sustain the Activation of the wand each round to suppress the effect for an additional round, to a maximum of 1 minute. You Sustain the Activation by shaking the wand, so if at any point you release or otherwise drop the wand, the effect immediately stops being suppressed and resumes on the target as normal.\nCraft Requirements Supply a casting of cleanse affliction, clear mind, or sound body, as appropriate.",
      "bulk": 0.1,
      "price": {
        "gp": 10000
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:flashblade-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "GWwbrnWBymUQn4JI",
      "slug": "flashblade-major",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia Actor Guide",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/nodachi.webp"
    },
    "sourceHash": "sha256:7252c6cf3cec9f9fe7ebe2f9d45a506f4f5951331a765b905eff7f1de68a15fc",
    "translatableHash": "sha256:2be4f4964f3c0fea25d5932bffa343ab748c0a3881e9c89bba1d87a491c79dba",
    "data": {
      "schemaVersion": 1,
      "name": "Flashblade (Major)",
      "itemType": "weapon",
      "level": 17,
      "rarity": "common",
      "traits": [
        "brace",
        "deadly-d12",
        "magical",
        "reach"
      ],
      "description": "A sleek and impossibly lightweight blade attached to a haft scriven with lightning bolts make up this +3 greater striking nodachi.\nActivate—Prepare Flash 2 (concentrate)\nFrequency once per 10 minutes\nEffect You concentrate with complete focus on your surroundings, breathing in the flashblade's magic to make you lighter and faster, and the blade of your sword more flexible. You Ready a melee Strike, increasing the flashblade's reach for that Strike to 25 feet. If the trigger doesn't occur, this doesn't count against the flashblade's frequency.",
      "bulk": 2,
      "price": {
        "gp": 14700
      },
      "usage": "held-in-two-hands",
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
    "contentId": "pf2e:item:equipment-srd:celestial-peachwood-sword",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "TKvAPv3jgv4l143r",
      "slug": "celestial-peachwood-sword",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia Actor Guide",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:6922c6f1865ef1f450932cc020a3b6bde1a61ac8db8c57413d814f3a2bda2c86",
    "translatableHash": "sha256:713c4fbc1a3ced9c2ad5515c4dfb35303cb984613ebd47bf6cfbce30d8facd27",
    "data": {
      "schemaVersion": 1,
      "name": "Celestial Peachwood Sword",
      "itemType": "weapon",
      "level": 17,
      "rarity": "rare",
      "traits": [
        "agile",
        "finesse",
        "holy",
        "magical",
        "versatile-s",
        "vitality"
      ],
      "description": "From blade to pommel, this sword is carved from a branch of the now-extinct celestial peach tree. The blade of this +3 greater striking holy vitalizing peachwood shortsword has ancient runes that can permanently destroy the most powerful undead—if you are willing to pay the price.\nAn undead creature of 12th level or lower that takes damage from a Strike with the sword takes 10d6 vitality damage with a check (fortitude, dc:35, basic) save. This damage is separate from the Strike itself and isn't included in any effect based on the Strike's damage.\nActivate—Violent Exorcism r (concentrate)\nFrequency once per day\nTrigger You critically hit an undead creature with the sword\nEffect The creature must succeed at a check (fortitude, dc:35) save or be destroyed. If the undead fails its saving throw and is destroyed, you suffer a backlash, taking 1d6 void damage per level of the destroyed undead.",
      "bulk": 0.1,
      "price": {
        "gp": 15000
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
    "contentId": "pf2e:item:equipment-srd:caress-of-the-great-serpent",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "FlZUF29msGVibG5k",
      "slug": "caress-of-the-great-serpent",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia Actor Guide",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/urumi.webp"
    },
    "sourceHash": "sha256:1968ae7db3f56bf2af2794faf19134121e6c5c3f90c29d0356bea2e0155d6cd0",
    "translatableHash": "sha256:d39298847ea35a0973c066dfbd0e6c3020b95f428b8ecf966603f69fd8718531",
    "data": {
      "schemaVersion": 1,
      "name": "Caress of the Great Serpent",
      "itemType": "weapon",
      "level": 18,
      "rarity": "uncommon",
      "traits": [
        "deadly-d10",
        "magical",
        "sweep"
      ],
      "description": "This +3 greater striking extending urumi was fashioned after the legendary eightheaded orochi serpent, with its whiplike metal blades carved to resemble the many heads of the mythical beast, and its hilt wrapped in scaled leather. These weapons are commonly used by those who worship an orochi, raiding and threatening settlements to obtain sacrifices for the beast in hopes of being granted some modicum of its power.\nActivate—Serpent's Kiss 3 (concentrate)\nFrequency once per day\nEffect You use your urumi as an effigy with which to call upon an orochi's power, offering your blood in exchange. You can make up to eight Strikes with a –2 penalty, each against a different target within 30 feet. For each Strike you choose to make, you take 1d6 piercing damage. Each attack counts toward your multiple attack penalty, but don't increase your penalty until you've made all your attacks.",
      "bulk": 2,
      "price": {
        "gp": 24000
      },
      "usage": "held-in-one-hand",
      "category": "martial",
      "group": "flail",
      "damage": {
        "dice": 1,
        "die": "d6",
        "type": "slashing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-purification-8th-rank-spell",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "LC7a0ur3o2CJDVPq",
      "slug": "wand-of-purification-8th-rank-spell",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia Actor Guide",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:4efe368f587a35d6f093062bfb9eb6badca8aac3e19a76af5c8997a6108a67a6",
    "translatableHash": "sha256:5761e6615a71d6ee4e5437e1b3507e8aee1970055a235c294b076cddf8c4fbf8",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Purification (8th-Rank Spell)",
      "itemType": "equipment",
      "level": 18,
      "rarity": "common",
      "traits": [
        "magical",
        "wand"
      ],
      "description": "This cypress onusa rod is decorated with a number of paper streamers that rustle when shaken to direct purification magic. Wands of purification contain either Cleanse Affliction, Clear Mind, or Sound Body, decided when the wand is created.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast cleanse affliction, clear mind, or sound body of the indicated level. If your counteract check would be sufficient only to suppress the effect until the beginning of your next turn, instead of to fully counteract it, then you can Sustain the Activation of the wand each round to suppress the effect for an additional round, to a maximum of 1 minute. You Sustain the Activation by shaking the wand, so if at any point you release or otherwise drop the wand, the effect immediately stops being suppressed and resumes on the target as normal.\nCraft Requirements Supply a casting of cleanse affliction, clear mind, or sound body, as appropriate.",
      "bulk": 0.1,
      "price": {
        "gp": 24000
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:cloak-of-waves-clouds",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "qVmOQFcsVQkOn4zM",
      "slug": "cloak-of-waves-clouds",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia Actor Guide",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:c3daa872ffa4fa96dc8f2a35fa1791cdb4864337db78aa6ceaff518f1633d9ae",
    "translatableHash": "sha256:b658d9e95ac8323b740ebd53b484e8663b587c8ba6c2d0a032e49c7d6a9df022",
    "data": {
      "schemaVersion": 1,
      "name": "Cloak of Waves & Clouds",
      "itemType": "equipment",
      "level": 19,
      "rarity": "common",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "This magical cloak was crafted from the feathers and scales of a legendary giant fish that could transform into a resplendent bird.\nActivate—Cut Air and Sea 1 (concentrate, manipulate)\nEffect The cloak ripples, becoming either giant eagle feathers or iridescent fish scales. Until you next Activate the cloak, you gain either a swim Speed of 60 feet and the ability to breathe underwater or a fly Speed of 40 feet.",
      "bulk": 0.1,
      "price": {
        "gp": 38000
      },
      "usage": "worncloak",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:bow-of-sun-slaying",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "fqOcjvpOdIIAx0k5",
      "slug": "bow-of-sun-slaying",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia Actor Guide",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:92638cd6c84f6622a34114140fec7373a025e584e59c6018aa1ba258f0b61843",
    "translatableHash": "sha256:bf8171856977374ca4f63bf6ef1c4e88dba074091894343a584e49dd59619e7d",
    "data": {
      "schemaVersion": 1,
      "name": "Bow of Sun Slaying",
      "itemType": "weapon",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "artifact",
        "cold",
        "deadly-d10",
        "divine",
        "propulsive"
      ],
      "description": "The Bow of Sun Slaying is a +3 major striking greater frost composite shortbow constructed out of wood, horn, and sinew. It bears carvings of a long-forgotten demigod who legends say possessed the ability to destroy the sun with a single arrow.\nActivate—Darkness for My Foes 1 (concentrate)\nFrequency once per day\nRequirements Your last action was a successful Strike against your foe with this weapon\nEffect You whisper, \"Darkness for my foes,\" and the target of your last attack takes 10d6 cold damage] damage (check (will, dc:45, basic) save).",
      "bulk": 1,
      "price": {},
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
    "contentId": "pf2e:item:equipment-srd:staff-of-sun-wukong",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "insH5VazP8WTkQgu",
      "slug": "staff-of-sun-wukong",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia Actor Guide",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:78fbd6ba62e3a476628aaed4f52562d9dc415ef404b048698c1336390626ae68",
    "translatableHash": "sha256:ffc8ef2c4c8d029db735c286e9c235571f73418b0fa9fa49ee10b1c595bf5522",
    "data": {
      "schemaVersion": 1,
      "name": "Staff of Sun Wukong",
      "itemType": "weapon",
      "level": 20,
      "rarity": "unique",
      "traits": [
        "artifact",
        "divine",
        "monk",
        "parry",
        "reach",
        "trip"
      ],
      "description": "Also known as Ruyi Bang, this +3 major striking greater extending grievous bo staff is a legendary artifact wielded by the Monkey King, Sun Wukong. Unlike normal bo staves, the Staff of Sun Wukong is made of solid iron with two brilliant gold bands at either end.\nActivate—Meteor Slam 1 (concentrate, manipulate)\nFrequency once per day\nEffect You extend the staff with the force of a meteor, dealing 10d10 bludgeoning damage to a single creature within 120 feet and making it Enfeebled 1 for 1 day. All other creatures within 10 feet of the target (except the staff's wielder) take 8d10 sonic damage (check (reflex, dc:43, basic) save).\nActivate—Close at Hand f\nEffect It's said that Sun Wukong tucked this magical staff behind his ear during his travels. When not in use, the Staff of Sun Wukong shrinks to the size and weight of a needle or toothpick, making it highly concealable (+4 circumstance bonus to Stealth checks to hide it from sight). In this form, the item has negligible Bulk. You can Activate this ability again to return the staff to its normal size.\nActivate—Cloud Somersault 1 (manipulate)\nEffect You use the shapeshifting capabilities of this relic to propel yourself great distances. You Leap up to 50 feet in any direction.\nDestruction Despite being made of iron and gold, mundane heat sources can't damage the Staff of Sun Wukong. Magical fire similarly has no effect on this relic. The only way to destroy this item is to expose it to the intense heat of a specific volcano in the depths of the Songil Sea (though which volcano remains shrouded in myth).",
      "bulk": 2,
      "price": {},
      "usage": "held-in-two-hands",
      "category": "martial",
      "group": "club",
      "damage": {
        "dice": 1,
        "die": "d8",
        "type": "bludgeoning"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:wand-of-purification-9th-rank-spell",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "TBoEmxOSYSrRweBC",
      "slug": "wand-of-purification-9th-rank-spell",
      "publicationTitle": "Pathfinder Lost Omens Tian Xia Actor Guide",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:0d4017c7d01a6510f1ddf0fa691a3132862620ea37ab083b04794f95a54ca9cd",
    "translatableHash": "sha256:4d5d928f173ab8710ba4bfce7eb6ae9c06d2ca18175cfea5176d8eeb17b0d328",
    "data": {
      "schemaVersion": 1,
      "name": "Wand of Purification (9th-Rank Spell)",
      "itemType": "equipment",
      "level": 20,
      "rarity": "common",
      "traits": [
        "magical",
        "wand"
      ],
      "description": "This cypress onusa rod is decorated with a number of paper streamers that rustle when shaken to direct purification magic. Wands of purification contain either Cleanse Affliction, Clear Mind, or Sound Body, decided when the wand is created.\nActivate Cast a Spell\nFrequency once per day, plus overcharge\nEffect You cast cleanse affliction, clear mind, or sound body of the indicated level. If your counteract check would be sufficient only to suppress the effect until the beginning of your next turn, instead of to fully counteract it, then you can Sustain the Activation of the wand each round to suppress the effect for an additional round, to a maximum of 1 minute. You Sustain the Activation by shaking the wand, so if at any point you release or otherwise drop the wand, the effect immediately stops being suppressed and resumes on the target as normal.\nCraft Requirements Supply a casting of cleanse affliction, clear mind, or sound body, as appropriate.",
      "bulk": 0.1,
      "price": {
        "gp": 70000
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:razmiri-mask",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "UaOrOGrjcXgSeBvr",
      "slug": "razmiri-mask",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:c9211f2650e30eb8d63a2200552b7e17af32362fe53c08abc9057a4f9181640f",
    "translatableHash": "sha256:ced6b9093424c79740c3ab2d0bb6c70fe59592e151a6ed274ed893b2758976ef",
    "data": {
      "schemaVersion": 1,
      "name": "Razmiri Mask",
      "itemType": "equipment",
      "level": 2,
      "rarity": "common",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "This mask is made of iron, though more potent versions crafted by powerful Razmiran priests can be made of silver, gold, or even porcelain. The wearer of this mask gains a +1 item bonus to Deception checks to Lie or Feint.\nActivate—Call Upon Razmir's Benevolence 2 (concentrate, manipulate, occult)\nFrequency once per minute\nEffect You bend \"divine\" power to your will using the techniques taught you by the Razmiri priesthood. You grant a single target you touch a number of temporary Hit Points equal to twice your level that last for 24 hours. If the target was Unconscious, it regains consciousness and doesn't lose consciousness again due to Hit Point loss as long as it has temporary Hit Points from this effect remaining.\nEffect: Call Upon Razmir's Benevolence",
      "bulk": 0,
      "price": {},
      "usage": "wornmask",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:razmiri-mask-silver",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "eAEZWwzLf6Qr1l0Q",
      "slug": "razmiri-mask-silver",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:92d1eed954e828fbd412f9ec3dfc46d51ab2fb72b23d0abd5467b18b80d047ec",
    "translatableHash": "sha256:92b54940b4d69c06f9722133783fdaf277cdb8eb33bec99234d42fda82698037",
    "data": {
      "schemaVersion": 1,
      "name": "Razmiri Mask (Silver)",
      "itemType": "equipment",
      "level": 10,
      "rarity": "common",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "A silver Razmiri mask grants a +2 item bonus to Deception checks to Lie or Feint.\nActivate—Call Upon Razmir's Benevolence 2 (concentrate, manipulate, occult)\nFrequency once per minute\nEffect You bend \"divine\" power to your will using the techniques taught you by the Razmiri priesthood. You grant a single target you touch a number of temporary Hit Points equal to twice your level that last for 24 hours. If the target was Unconscious, it regains consciousness and doesn't lose consciousness again due to Hit Point loss as long as it has temporary Hit Points from this effect remaining.\nEffect: Call Upon Razmir's Benevolence\nActivate—Call Upon Razmir's Mercy 2 (concentrate, manipulate, occult)\nFrequency three times per day\nEffect Exhorting Razmir to purge impurities from your target, you lay hands on a creature within reach and cast Cleanse Affliction as an occult spell with a spell rank equal to half your level. Unlike a normal cleanse affliction spell, this doesn't reduce the stage of the affliction; instead, if the counteract check is successful, the affliction's stage is temporarily reduced by 1 and its effects are suppressed for 24 hours, after which the affliction resumes in full force.\nIf the target would have been required to attempt additional saves against the affliction during the 24 hours it was suppressed, they must attempt all of those saving throws as soon as the 24-hour duration ends. This could mean that the target saves successfully and it is as if the affliction were truly healed, or it could mean that the affliction returns and advances multiple stages all at once.",
      "bulk": 0,
      "price": {},
      "usage": "wornmask",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:razmiri-mask-gold",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "HHxX5hA2RK7yI483",
      "slug": "razmiri-mask-gold",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:235ba3c2125f65702c1dd9cc708c89ed8f6773d0be1744a62eb9d58791738a5f",
    "translatableHash": "sha256:e3af152568f54f8b5dcef4091cbf410130e3d1ecec0e792940523a253b81b2ec",
    "data": {
      "schemaVersion": 1,
      "name": "Razmiri Mask (Gold)",
      "itemType": "equipment",
      "level": 14,
      "rarity": "common",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "A gold Razmiri mask grants a +3 item bonus to Deception checks to Lie or Feint.\nActivate—Call Upon Razmir's Benevolence 2 (concentrate, manipulate, occult)\nFrequency once per minute\nEffect You bend \"divine\" power to your will using the techniques taught you by the Razmiri priesthood. You grant a single target you touch a number of temporary Hit Points equal to twice your level that last for 24 hours. If the target was Unconscious, it regains consciousness and doesn't lose consciousness again due to Hit Point loss as long as it has temporary Hit Points from this effect remaining.\nEffect: Call Upon Razmir's Benevolence\nActivate—Call Upon Razmir's Mercy 2 (concentrate, manipulate, occult)\nFrequency three times per day\nEffect Exhorting Razmir to purge impurities from your target, you lay hands on a creature within reach and cast Cleanse Affliction as an occult spell with a spell rank equal to half your level. Unlike a normal cleanse affliction spell, this doesn't reduce the stage of the affliction; instead, if the counteract check is successful, the affliction's stage is temporarily reduced by 1 and its effects are suppressed for 24 hours, after which the affliction resumes in full force.\nIf the target would have been required to attempt additional saves against the affliction during the 24 hours it was suppressed, they must attempt all of those saving throws as soon as the 24-hour duration ends. This could mean that the target saves successfully and it is as if the affliction were truly healed, or it could mean that the affliction returns and advances multiple stages all at once.\nActivate—Call Upon Razmir's Wrath 2 (concentrate, manipulate, occult)\nFrequency once per day\nEffect You cry out to Razmir to reveal his fiery wrath, as he did upon the unbelievers at Melcat. You cast Sunburst as an 8th-rank occult spell, but for undead targets the spell has the incapacitation trait.",
      "bulk": 0,
      "price": {},
      "usage": "wornmask",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:razmiri-mask-porcelain",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Im9gFhIGtTxRJkS2",
      "slug": "razmiri-mask-porcelain",
      "publicationTitle": "Pathfinder Lost Omens Divine Mysteries",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:84bf7d1769c95293dd4e996123c16681f98375bf9ec2c0475239a4c54fc938bf",
    "translatableHash": "sha256:2449aa8df052f07c004f357d2f92b93eccbacda270d23c7d551ccd5fd16c1f8f",
    "data": {
      "schemaVersion": 1,
      "name": "Razmiri Mask (Porcelain)",
      "itemType": "equipment",
      "level": 18,
      "rarity": "common",
      "traits": [
        "apex",
        "invested",
        "magical"
      ],
      "description": "A porcelain Razmiri mask grants a +4 item bonus to Deception checks to Lie or Feint. When you invest the mask, you either increase your Charisma modifier by 1 or increase it to +4, whichever would give you a higher value.\nActivate—Call Upon Razmir's Benevolence 2 (concentrate, manipulate, occult)\nFrequency once per minute\nEffect You bend \"divine\" power to your will using the techniques taught you by the Razmiri priesthood. You grant a single target you touch a number of temporary Hit Points equal to twice your level that last for 24 hours. If the target was Unconscious, it regains consciousness and doesn't lose consciousness again due to Hit Point loss as long as it has temporary Hit Points from this effect remaining.\nEffect: Call Upon Razmir's Benevolence\nActivate—Call Upon Razmir's Mercy 2 (concentrate, manipulate, occult)\nFrequency three times per day\nEffect Exhorting Razmir to purge impurities from your target, you lay hands on a creature within reach and cast Cleanse Affliction as an occult spell with a spell rank equal to half your level. Unlike a normal cleanse affliction spell, this doesn't reduce the stage of the affliction; instead, if the counteract check is successful, the affliction's stage is temporarily reduced by 1 and its effects are suppressed for 24 hours, after which the affliction resumes in full force.\nIf the target would have been required to attempt additional saves against the affliction during the 24 hours it was suppressed, they must attempt all of those saving throws as soon as the 24-hour duration ends. This could mean that the target saves successfully and it is as if the affliction were truly healed, or it could mean that the affliction returns and advances multiple stages all at once.\nActivate—Call Upon Razmir's Wrath 2 (concentrate, manipulate, occult)\nFrequency once per day\nEffect You cry out to Razmir to reveal his fiery wrath, as he did upon the unbelievers at Melcat. You cast Sunburst as an 8th-rank occult spell, but for undead targets the spell has the incapacitation trait.\nActivate—Power of the Living God 3 (concentrate, manipulate, occult)\nFrequency once per day\nEffect You demand power from the world, using your mask as a locus to force reality to bend to your will. You cast Manifestation as a 10th-rank occult spell, but no matter what spell you emulate with it, that spell has the incapacitation trait.",
      "bulk": 0,
      "price": {},
      "usage": "wornmask",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:fake-blood-pack",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "2VS3S2E3dbqvGifH",
      "slug": "fake-blood-pack",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:2d794802cc0359729b3459dbbafa794678e7e952adeabc758f42b57fdf595a2b",
    "translatableHash": "sha256:4672a856c91a87c077bdebf10ad53a0b00cea4aacd830ecf0458a5a3552a445f",
    "data": {
      "schemaVersion": 1,
      "name": "Fake Blood Pack",
      "itemType": "consumable",
      "level": 0,
      "rarity": "common",
      "traits": [
        "consumable"
      ],
      "description": "Adventurers have found a number of uses for these animal blood–filled bladders, which were originally used in theatrical productions. Whenever you take slashing or piercing damage with the fake blood pack under your clothes or armor, roll a check (flat, dc:11). On a success, the blood pack is punctured. You or an ally can puncture the hidden pack intentionally with an Interact action. When faking an injury, a punctured blood pack grants a +2 item bonus to relevant Deception checks, such as to Lie about being injured, for 4 hours after the pack has been punctured or until the blood is washed off, whichever comes first. Abilities that trigger when a creature deals bleed damage, that determine if a creature is bleeding, or are otherwise based on bleed damage don't trigger or apply for blood from a fake blood pack, which might mean creatures with such abilities automatically realize the ruse.",
      "bulk": 0.1,
      "price": {
        "gp": 1
      },
      "usage": "worn-under-armor",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:one-hour-flower",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "25Otz4JdRm7Dus6N",
      "slug": "one-hour-flower",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:d47ecc6cfb4f942a4a83c94c6040ba29c5bb18b3d5bb419ba81dc0514daa184d",
    "translatableHash": "sha256:65afc6293079319808b449c72d47d363f56e3e37c4bd9cdafce1653e0fe3dfd9",
    "data": {
      "schemaVersion": 1,
      "name": "One-Hour Flower",
      "itemType": "consumable",
      "level": 1,
      "rarity": "rare",
      "traits": [
        "consumable",
        "magical"
      ],
      "description": "Activate 1 (manipulate)\nPopular with lovers, decorators, and sports fans, the seeds of these ephemeral plants grow and bloom immediately into flowers when placed in any warm environment, including a cup of dirt, a bowl of warm water, and a tightly clenched hand. The color of these flowers varies, but each has an internal glow that sheds bright light in a 30-foot radius. The radius of this light shrinks by 10 feet every 20 minutes. At the end of an hour, the plant disintegrates, leaving only a vaguely pleasant scent in the air.",
      "bulk": 0,
      "price": {
        "gp": 4
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:spark-wafer",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "2n6BXtjZ7T6NJtXq",
      "slug": "spark-wafer",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:c4498b764d20bbc64ae7e98fa1ec7351be59d79643f31c159379823a4dc5b2e8",
    "translatableHash": "sha256:b01d04f1a1abf468413232f7ddb9dd8f52c0f9dec960027cb255f1b98482f3cd",
    "data": {
      "schemaVersion": 1,
      "name": "Spark Wafer",
      "itemType": "consumable",
      "level": 1,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "consumable",
        "fire",
        "light"
      ],
      "description": "Activate 1 (manipulate)\nThese wafers contain ground-up alchemical reagents that activate shortly after being snapped. First popularized by technicians in Absalom's Ivy Playhouse, they have spread throughout Golarion as an inexpensive way to add to the visual splendor of a show without relying on magic. When you activate a spark wafer, you bend the wafer, nearly snapping it in two, and then throw it at a corner of a square within 20 feet (all part of the same manipulate action). The wafer then releases a 10-foot-high column of sparks for 1 round. The sparks shed bright light in a 5-foot type:burst and dim light in the next 5 feet. Any creature that begins their turn in the burst takes 1d4 fire damage (check (reflex, dc:14, basic, options:area-effect) save).",
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
    "contentId": "pf2e:item:equipment-srd:aetheric-irritant-lesser",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "3jUoOPFVoYtM7A9F",
      "slug": "aetheric-irritant-lesser",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:fbcabbc040910f86c162214f346683a5d8d8f536ad86a1ce663f23a7f8f27901",
    "translatableHash": "sha256:d5c5eb416b1531fbc6a23b46bb8ae7f7a86764efb58cca39635bc5f9157469f1",
    "data": {
      "schemaVersion": 1,
      "name": "Aetheric Irritant (Lesser)",
      "itemType": "consumable",
      "level": 1,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "gadget",
        "sonic"
      ],
      "description": "Activate 1 (manipulate)\nAn aetheric irritant is a chime that can emit a subsonic frequency that otherworldly beings find unpleasant. When you Activate an aetheric irritant, you sound the chime and place it on the ground in a square within your reach. The aetheric irritant affects an area in a 10-foot type:emanation. Creatures with the fey, spirit, or undead traits must attempt a check (will, dc:15) save when they enter the affected area and at the beginning of every turn they are in the affected area. Those who fail the save treat the area as difficult terrain until the beginning of their next turn. A creature that critically succeeds at the save is immune to all aetheric irritants for 24 hours. An aetheric irritant continues to hum until it shakes itself to pieces after 10 minutes of being activated or it is moved, whichever comes first.",
      "bulk": 0.1,
      "price": {
        "gp": 4
      },
      "usage": "held-in-one-hand",
      "category": "gadget",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:twig-of-knowledge-and-memory",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "cw05uEofzYkHwv8p",
      "slug": "twig-of-knowledge-and-memory",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:b2a2731ed16b74c7784e2aae10ba36480be2e1be6ef4285401bf5437702b6c5b",
    "translatableHash": "sha256:b294784a76a618fab68f08210a60ba4a5ed5b41f51b9abdf898c1796882cf04a",
    "data": {
      "schemaVersion": 1,
      "name": "Twig of Knowledge and Memory",
      "itemType": "consumable",
      "level": 1,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical",
        "mental",
        "plant"
      ],
      "description": "Activate 1 (manipulate)\nThis tiny magic item looks like a twig from the rare mti'le tree with its swirls of reddish-gold veins through dark brown wood. Each one is unique and fits easily in the palm of a Medium-sized creature's hand. When pressed to the temple or lips of a sentient creature, that creature can immediately attempt a check to Recall Knowledge about any subject using a corresponding skill (such as Society to Recall Knowledge about a humanoid); they gain a +1 status bonus on this check. This consumable is not immediately consumed on its first use, but can be used three times before it loses its power and becomes a mundane, if still beautiful, twig.",
      "bulk": 0.1,
      "price": {
        "gp": 4
      },
      "usage": "held-in-1-hand-hung-on-a-cord-or-attached-to-clothing",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:pranksters-perpetual-pieplate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "dzwHxy09Xql3kIPd",
      "slug": "pranksters-perpetual-pieplate",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:4387f28a7ab340d2bef45be1a3c9367d9326203f3fc844c0c1518b0da6898afd",
    "translatableHash": "sha256:07051cdfdf7f8d4d11d1b1ffa9fff665dce35b860866a4a48abe50aaa64ca783",
    "data": {
      "schemaVersion": 1,
      "name": "Prankster's Perpetual Pieplate",
      "itemType": "equipment",
      "level": 1,
      "rarity": "rare",
      "traits": [
        "magical"
      ],
      "description": "Although the simple pies that fill this glass plate every minute are edible, they don't last long enough to sate hunger or provide any real nutritive value. Instead, they can be magically guided at targets, unleashed harmlessly by even the most uncoordinated child.\nActivate—Project Pastry 1 (manipulate)\nFrequency once per minute\nEffect You magically hurl the pie at a creature within 30 feet. Unless the target succeeds at a check (reflex, dc:15) save, they're splattered with a harmless but tasty mess, which remains until it is wiped away with an Interact action or is otherwise cleaned off (like if the target is submerged in water). After a minute, the mess disappears, and the pieplate refills with another kind of pie.",
      "bulk": 0.1,
      "price": {
        "gp": 12
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:theater-enhancers",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "fPqFZ2c0MWU89nNC",
      "slug": "theater-enhancers",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:f1afdfc348627744625cfb4da4d25f468c40b466cf488bd7de4e848e64bdcc72",
    "translatableHash": "sha256:2e33f5b1436fd1b20bc48c200b674295794a1fa4becf89486502dde37816f98e",
    "data": {
      "schemaVersion": 1,
      "name": "Theater Enhancers",
      "itemType": "equipment",
      "level": 1,
      "rarity": "uncommon",
      "traits": [],
      "description": "Theater enhancers resemble a pair of opera glasses. When worn, they allow the viewer to see subtle illusions on key props or stage elements that have been cast ahead of time. For instance, a puppet of a demon might appear to project a sinister moving shadow, or a backdrop of a mountain might have snowflakes falling over it. Popular among theatergoers who want a visual experience grander than what they can see with their own eyes, theater enhancers are largely limited to fancy stage productions that can afford the time and money it takes to enchant a stage with them in mind.",
      "bulk": 0,
      "price": {
        "gp": 15
      },
      "usage": "worneyeglasses",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:prismatic-dust",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "m9SJD8XUZ4IV7c3F",
      "slug": "prismatic-dust",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:7fd55706a808443fa6d8043396dbf315cd01043f1bed9aa861d67437fb2aac4b",
    "translatableHash": "sha256:386f25e7ab28d93f6ea006a80872b9d5b82ba8a0d58398505e76cbba87829749",
    "data": {
      "schemaVersion": 1,
      "name": "Prismatic Dust",
      "itemType": "consumable",
      "level": 1,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical"
      ],
      "description": "Activate 1 (manipulate)\nThis pigmented dust is often used to add color to the lights of a performance. Prismatic dust can be activated while you are adjacent to a source of magical bright light. When activated, the dust is sprinkled into the light, changing the light's color into the color of the dust for 1 hour. The color of the dust is determined upon the dust's creation.",
      "bulk": 0,
      "price": {
        "gp": 1
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:illusory-program",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "odzeu3176i96fF9n",
      "slug": "illusory-program",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:05165799bfbb205cc7f0aec27e6852978f0cbfd36ec1924f56e17c72fd4a9d8f",
    "translatableHash": "sha256:d4d8c886bd970db30d70c56a9c8b288f42e8efe660ede7b99ecdcab1ce3b33da",
    "data": {
      "schemaVersion": 1,
      "name": "Illusory Program",
      "itemType": "consumable",
      "level": 1,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "illusion",
        "magical"
      ],
      "description": "Produced to promote plays, illusory programs are thin pamphlets infused with minor magic. Upon opening one of these pamphlets, readers are treated to a series of tiny illusions that stand on each page, typically showcasing highlights of the performance or profiles of the cast. The magic woven into each page is of the cheap, short-lived variety, fading 24 hours after the program has been opened.",
      "bulk": 0,
      "price": {
        "gp": 3
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:echo-token",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "qLjWaRljNIb1uuLO",
      "slug": "echo-token",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:06071a8b4e46436be623aa3381361a860f4263b7f756d5a797b80cc5d5f27b36",
    "translatableHash": "sha256:c4ca967b81daee8139525635eaceacdb92f23b49474f4d91b5127f298edfbadb",
    "data": {
      "schemaVersion": 1,
      "name": "Echo Token",
      "itemType": "consumable",
      "level": 1,
      "rarity": "rare",
      "traits": [
        "consumable",
        "magical"
      ],
      "description": "Visitors to the Echo Repository always emerge with one of these silver coins, stamped with the visage of a faceless queen, somewhere on their person. An echo token carries a minute shard of the Echo Repository's mission to impart lost information.\nActivate—Flip Coin 1 (manipulate)\nEffect When flipped, the coin disintegrates into a glittery mist. You learn and memorize one random fact about a specific type of Lore (such as Architecture Lore, Elf Lore, Astral Plane Lore) that you didn't previously know, chosen by the GM. The next time you attempt a check to Recall Knowledge on this type of Lore within the next year, you gain a +1 status bonus on the check. You can benefit from only one echo token at a time in this way; if you Flip another echo token, the Lore skill changes. However, the memorized fact will remain perfectly in your memory forever unless magically altered or removed.",
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
    "contentId": "pf2e:item:equipment-srd:branch-attendants-mask",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "1bippAJ938UHQQQV",
      "slug": "branch-attendants-mask",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:234f8aef8a3d36366d683d8d2eee9fcccff504d57f20b26de91561c40fa6567b",
    "translatableHash": "sha256:1f7c680b08e2ec4925e1f475805ef4ba05120664380a0facbd3f4ac90d53d80e",
    "data": {
      "schemaVersion": 1,
      "name": "Branch Attendant's Mask",
      "itemType": "equipment",
      "level": 2,
      "rarity": "uncommon",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "Although not all attendants' masks are enchanted, many apply a first enchantment to celebrate their acceptance into a branch of the academy. While you wear the mask or have it as your bonded item, add the associated cantrip to your prepared cantrips. This has no effect if you do not prepare cantrips from the arcane or primal lists.\n• Cascade Bearers Read Aura\n• Emerald Boughs Root Reading\n• Rain-Scribes Deep Breath\n• Tempest-Sun Mages Electric Arc\n• Uzunjati Prestidigitation",
      "bulk": 0,
      "price": {
        "gp": 25
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:drop-of-convergent-waters",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "3XVNEpLdHIdQ8IYq",
      "slug": "drop-of-convergent-waters",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:9a4b12346a93878637870555827e8904a3e71f8bd045db6df7a8d28d1118e755",
    "translatableHash": "sha256:fd127b96164c099ef587fd8ab56e67a39f1caccfeefec8501fbc1f3416a787b8",
    "data": {
      "schemaVersion": 1,
      "name": "Drop of Convergent Waters",
      "itemType": "consumable",
      "level": 2,
      "rarity": "rare",
      "traits": [
        "consumable",
        "magical",
        "talisman",
        "water"
      ],
      "description": "Abhaya's tireless years of study have allowed her to reproduce, at some level, the unconscious melding of elements she experienced during the last Challenge of Sky and Heaven. A single drop of water in a crystalline container is the simplest application of her research.\nWhen you activate this talisman, a watery echo of one of your limbs emerges from the container. Make a Strike with your fist or an unarmed attack from your ancestry. This attack gains the magical, reach, and water traits, retains any benefits from appropriate weapon fundamental runes (but not of weapon property runes), and takes no penalties for being used underwater. You can perform this Strike even if you're in a stance or under a polymorph effect that restricts your Strikes.\nEffect: Drop of Convergent Waters",
      "bulk": 0,
      "price": {
        "gp": 7
      },
      "usage": "affixed-to-armor",
      "category": "talisman",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:shaping-sweet",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "aV7OJjzuh6zVDCx2",
      "slug": "shaping-sweet",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:6e4aac0be4a9293a7da1b180c8b6eaa99dcb4897996c4d681117c5bdedf2f4f9",
    "translatableHash": "sha256:19ac805ee7fc26afb64575003db073d77a11a7d9a4184398b2e05794d3795cea",
    "data": {
      "schemaVersion": 1,
      "name": "Shaping Sweet",
      "itemType": "consumable",
      "level": 2,
      "rarity": "rare",
      "traits": [
        "consumable",
        "magical"
      ],
      "description": "Many inhabitants of the First World can shape their environment around them; weaker creatures can only make minor changes, while powerful entities such as the Eldest can remake entire landscapes. A shaping sweet is a gelatinous, fruit-flavored candy that confers a whisper of this ability on you when you eat it. For 1 hour after eating a shaping sweet, you can make each of the following changes to your surroundings with an Interact action. You can make each change only once.\n• Alter Weather You create or eliminate minor precipitation in a 30-foot type:emanation.\n• Fairy Ring A ring of flowers and mushrooms appears in a 10-foot type:burst around you, restoring 1 Hit Point at the start of each of your turns to a randomly chosen fey creature within. The ring lasts for 1 minute.\n• Foliate Vegetation grows around you in a 10-foot radius burst, creating light undergrowth that lasts for 1 minute.\n• Terrain Shift The ground in your space rises or falls by 5 feet, remaining at that height for 1 minute.",
      "bulk": 0.1,
      "price": {
        "gp": 6
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:spiced-demonade",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "FmD9KGFpKC5aEa2r",
      "slug": "spiced-demonade",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:5568154a0575e992af9a9124469f46973c29c6971cc29008b87ce1eaf9104118",
    "translatableHash": "sha256:ab8d60cbb4fadda60232b835f15c7ce6429de6f2742f44ba81c2eda30835ef06",
    "data": {
      "schemaVersion": 1,
      "name": "Spiced Demonade",
      "itemType": "consumable",
      "level": 2,
      "rarity": "rare",
      "traits": [
        "alchemical",
        "consumable",
        "elixir"
      ],
      "description": "Activate 1 (manipulate)\nThere are some who claim that the original version of this tart red drink contained the ground skin of actual demons, but in truth, spiced demonade was created by a first-year academy student desperate to look awake and alert after a night of carousing.\nAfter consuming spiced demonade, you ignore all effects and penalties from the consumption of alcohol and lack of sleep for 1 hour. These effects resume when the spiced demonade wears off, and you become temporarily immune to spiced demonade for 24 hours.",
      "bulk": 0,
      "price": {
        "gp": 8
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:blood-pack-squib",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "h22AqOJjFiIXCda6",
      "slug": "blood-pack-squib",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:6dc83f59fc4a820bdb6c800871c35180723054164414532fe9ba4b5521bda3d3",
    "translatableHash": "sha256:4d07d9776c035f19a5a14684404e52b34284c5cdd82ad3ef32d9a243a974fed9",
    "data": {
      "schemaVersion": 1,
      "name": "Blood Pack Squib",
      "itemType": "consumable",
      "level": 2,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical"
      ],
      "description": "Used by theater troupes in combination with a fake blood pack, this bit of minor magic can simulate a dramatic and sudden wound. A blood pack squib is a small unassuming stone that is keyed to a single fake blood pack in a process that takes 1 minute.\nActivate—Burst Pack 1 (manipulate)\nRequirements The blood pack squib must be within 20 feet of its associated fake blood pack\nEffect You lightly squeeze the stone and the fake blood pack dramatically bursts. The creature wearing the fake blood pack gains the benefits of a punctured fake blood pack. A single creature adjacent to the creature wearing the fake blood pack must succeed at a check (reflex, dc:16) save or be splattered with the fake blood, becoming Dazzled until the end of their next turn. You can also activate the blood pack squib as a reaction when the fake blood pack is punctured normally.",
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
    "contentId": "pf2e:item:equipment-srd:seed-pod-of-rooted-wisdom",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "hYNKpzgUbHHyvh5t",
      "slug": "seed-pod-of-rooted-wisdom",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:ec98e8e04550bbd333923c3bc282ba209f29219bcd843d175a35525cf73b9c15",
    "translatableHash": "sha256:98a51d0933546617497710f05d52722e7a3f8a8004e2d38306bb3a546870a8ff",
    "data": {
      "schemaVersion": 1,
      "name": "Seed Pod of Rooted Wisdom",
      "itemType": "consumable",
      "level": 2,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical",
        "mental",
        "plant"
      ],
      "description": "Activate 1 (manipulate)\nThis tiny magic item looks like a ripe brown fruit from a kapok tree. Inside the fruit are three seeds. Each magical seed releases an effect when swallowed. The first grants you a +1 status bonus on Will saves against fear effects for 10 minutes. The second makes your next 10 words comprehensible to any creature that understands any language. The third lets you recall precisely how to get from where you are to any other place you've stayed for more than an hour within the past day. Once the seeds are removed, the fruit is edible, if chewed slowly, and quite tasty, being much sweeter than the non-magical version.",
      "bulk": 0.1,
      "price": {
        "gp": 7
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:maelstromic-destabilizer-lesser",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "JcFofHcCc2FDN99x",
      "slug": "maelstromic-destabilizer-lesser",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:1c7d665dcb194fa86112b0445e16d8e813b0daceb3eb0f5cb05cddf7901454bd",
    "translatableHash": "sha256:0df721074d2f214f1c7f93304088edddc012c96603e2f82f965f41f8b6abc117",
    "data": {
      "schemaVersion": 1,
      "name": "Maelstromic Destabilizer (Lesser)",
      "itemType": "consumable",
      "level": 2,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "gadget",
        "spirit"
      ],
      "description": "Activate 1 (manipulate)\nA maelstromic destabilizer is a whirling gyroscope of burnished bronze and glass. It strengthens the bonds that hold a creature to this world by weakening those same bonds to every other nearby creature. When activated, the destabilizer emits a constant pleasant chime as it spins. For the next minute, the creature holding the gadget gains resistance 2 to spirit damage, while all creatures not immune to spirit damage in a 10-foot type:emanation gains weakness 2 to spirit damage.",
      "bulk": 0.1,
      "price": {
        "gp": 6
      },
      "usage": "held-in-one-hand",
      "category": "gadget",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:demon-bone-tiles-pusk",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "kxeAuCejzM44gsLN",
      "slug": "demon-bone-tiles-pusk",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:c659639a8c6fefd69f201c9e9cb72eb6434b304ff97c1244f0b45475f4cd4022",
    "translatableHash": "sha256:4ee0d62142fac6f2641ee9d59dd12391bcc7853eecedf9a4af73767def3ac19a",
    "data": {
      "schemaVersion": 1,
      "name": "Demon Bone Tiles (Pusk)",
      "itemType": "consumable",
      "level": 2,
      "rarity": "rare",
      "traits": [
        "catalyst",
        "consumable",
        "magical",
        "unholy"
      ],
      "description": "Activate Cast a Spell (add 1 action)\nThese bones from different types of demons can be used to form temporary barriers. When you crush the bone fragments and blow the resulting dust around yourself as you cast Shield, the shield appears as a bone bulwark shaped like the demon's face.\nWhen use Shield Block with the spell, the barrier explodes into many bone fragments. The shards cause 1d4 persistent bleed damage to each creature adjacent to you that fails a check (reflex, dc:16) save. This persistent bleed damage is unholy and can be stopped with an Interact action to remove the shards.",
      "bulk": 0.1,
      "price": {
        "gp": 7
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:kimanéz-luminescent-toadstool",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "bG6O3g0tu43Ue21A",
      "slug": "kimanéz-luminescent-toadstool",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:2b694e0a6660c9e66a8604273cafb908eb860b2cc57a15dc2759dd6204d5f8a4",
    "translatableHash": "sha256:feb79f612b6d2401f3c74c7598086d57309b73cfea137b6d171fcf0745381c9b",
    "data": {
      "schemaVersion": 1,
      "name": "Kimanéz Luminescent Toadstool",
      "itemType": "consumable",
      "level": 3,
      "rarity": "rare",
      "traits": [
        "consumable",
        "fungus",
        "light",
        "magical"
      ],
      "description": "This large blue toadstool glimmers with soft, magical light similar to moonlight. The spots of white adorning the mushroom's cap glow ethereally, as if illuminated from the inside, shedding dim light in a 10-foot radius.\nActivate—Ward Area 10 minutes (concentrate, light, manipulate)\nEffect You plant the toadstool in the ground, allowing it to connect to all living fungi and plant matter within 120 feet of its planting. For 8 hours, any corporeal creature that touches the affected matter even accidentally begins to glow with bright magical light in a 10-foot type:emanation, which persists as long as they remain within 120 feet of the planted mushroom. A creature can move through an area containing affected fungi and plant matter without touching it by treating the area as difficult terrain and succeeding at a check (acrobatics, dc:18) check.",
      "bulk": 0.1,
      "price": {
        "gp": 9
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:demon-hunting-bands",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "fru7xyHYTuw0R46v",
      "slug": "demon-hunting-bands",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:6970ed8415bd4b5c64f3c0e280fc76ee0d0ee0b6d72007ac3b4585e798013efa",
    "translatableHash": "sha256:107bd17bb7b7ce452971b3d6d311e6641b26e0b73078178e0b2e1dddbf5c64d9",
    "data": {
      "schemaVersion": 1,
      "name": "Demon-Hunting Bands",
      "itemType": "consumable",
      "level": 3,
      "rarity": "rare",
      "traits": [
        "consumable",
        "divine",
        "holy",
        "talisman"
      ],
      "description": "Activate F (concentrate)\nTrigger You Stride.\nThese strips of supple leather, typically about 2 inches wide and 3 feet long, feature sigils, runes, and divine marks that reflect family lineage and beliefs in the old gods of Sarkoris. When activated, the band's holy patterns surround you as you move, preventing your movement from triggering reactions from demons. The holy patterns scour nearby demons; any demons you pass adjacent to during the triggering movement take damage equal to their weakness to holy effects. You can activate the bands when you Burrow, Climb, Fly, or Swim (instead of Stride) if you have the corresponding movement type.",
      "bulk": 0,
      "price": {
        "gp": 10
      },
      "usage": "affixed-to-armor",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:weapon-of-false-wounds",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "JKrqKeBxSlLjF8xU",
      "slug": "weapon-of-false-wounds",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:5579ff9c898330e571aef4fc0febca4788f8a0fe697a48701fe7a84978abc3bf",
    "translatableHash": "sha256:133a3a531e41df17c48ae3a3a960e41037ad4e4fd25cd61e94eaeaca2f16d4d4",
    "data": {
      "schemaVersion": 1,
      "name": "Weapon of False Wounds",
      "itemType": "equipment",
      "level": 3,
      "rarity": "uncommon",
      "traits": [
        "illusion",
        "magical",
        "visual"
      ],
      "description": "These weapons consist mostly of illusions, except in the spots where the weapon would be held. A sword, for example, would consist only of a physical handle with the permanent illusion of a blade. Weapons of false wounds come in all shapes and sizes to help accurately reenact both historic and theatrical combat without risk of injury. The most amazing property of these items is the fact the illusions become partially physical when interacting with other weapons of false wounds, allowing blades to clash and parry as they would in actual combat. As a weapon of false wounds is designed specifically to interact with other illusions, paying attention to subtle changes in the weapon's appearance can help alert the wielder to nearby illusions. While using this item, you gain a +1 item bonus to Perception checks to disbelieve an illusion.",
      "bulk": 0.1,
      "price": {
        "gp": 80
      },
      "usage": "held-in-one-or-two-hands",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:oathlamp-of-accord",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "ladz0husmGO1ZYZi",
      "slug": "oathlamp-of-accord",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:16eeba678299e2b88dfd118decad22fb5817fe75dc6d927908c4270298fd7502",
    "translatableHash": "sha256:db0aeeb62ed64543f487a8e939c4ee00c6ac09b69b61b8f5a4b098939bb581e1",
    "data": {
      "schemaVersion": 1,
      "name": "Oathlamp of Accord",
      "itemType": "equipment",
      "level": 3,
      "rarity": "rare",
      "traits": [
        "light",
        "magical",
        "mental"
      ],
      "description": "This hooded lantern takes the form of a translucent prism. It functions as a normal Hooded Lantern, except that it isn't fueled by oil, but by oaths. While you're holding the lantern, you gain a +1 item bonus to Diplomacy checks.\nActivate—Announce Oath r (light, mental)\nTrigger You make a promise in good faith\nEffect The oathlamp of accord sheds light without consuming fuel until the promise you made is broken or fulfilled. The GM adjudicates whether a spoken promise is broken or fulfilled. This light and the shutters to conceal it work as normal for a hooded lantern. Any creature in the light of the oathlamp becomes aware of the contents of the oath, along with who made it and how long ago.",
      "bulk": 0.1,
      "price": {
        "gp": 50
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:vocal-shells",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "sjGt3r0pgI1zwc9t",
      "slug": "vocal-shells",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:9aa4ec24ed468ac3598834540ac6cd6fa44fde429ab343eff1da33ad245fec29",
    "translatableHash": "sha256:0326414c074870d4deef7c5f87ebadf322b545af03cd142b7e14cd7404e3003b",
    "data": {
      "schemaVersion": 1,
      "name": "Vocal Shells",
      "itemType": "equipment",
      "level": 3,
      "rarity": "rare",
      "traits": [
        "clockwork"
      ],
      "description": "Used by more technologically inclined bards, ventriloquists, and other performers to throw their voices, this gadget consists of two button-sized conch shells, each containing a miniaturized mechanism designed to pick up and transmit sound. One of the shells is designated the sending shell and contains a tiny indentation. When this indentation is pressed and the shell is close to a source of sound (such as on an actor's necklace), any sound that reaches it is transmitted to the receiver shell. If the receiver shell is located within 20 feet, it plays the sounds captured by the sending shell at a perfect volume and pitch.",
      "bulk": 0,
      "price": {
        "gp": 50
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:aetheric-irritant-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "sY3Do9bKjwAC9TMV",
      "slug": "aetheric-irritant-moderate",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:97876a9b1cfbcdb611896af189b9fa72cedb350001a747231ef78f36275394dd",
    "translatableHash": "sha256:dd406bd7c5100c0314ab4fd58b28a62680174c3c87dedc684874bd7089fe16cc",
    "data": {
      "schemaVersion": 1,
      "name": "Aetheric Irritant (Moderate)",
      "itemType": "consumable",
      "level": 3,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "gadget",
        "sonic"
      ],
      "description": "Activate 1 (manipulate)\nAn aetheric irritant is a chime that can emit a subsonic frequency that otherworldly beings find unpleasant. When you Activate an aetheric irritant, you sound the chime and place it on the ground in a square within your reach. The aetheric irritant affects an area in a 15-foot type:emanation. Creatures with the fey, spirit, or undead traits must attempt a check (will, dc:18) save when they enter the affected area and at the beginning of every turn they are in the affected area. Those who fail the save treat the area as difficult terrain until the beginning of their next turn. A creature that critically succeeds at the save is immune to all aetheric irritants for 24 hours. An aetheric irritant continues to hum until it shakes itself to pieces after 10 minutes of being activated or it is moved, whichever comes first.",
      "bulk": 0.1,
      "price": {
        "gp": 11
      },
      "usage": "held-in-one-hand",
      "category": "gadget",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:dr-ushernachts-astonishing-ink-minor",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "tk7LRIidkTl9dYPw",
      "slug": "dr-ushernachts-astonishing-ink-minor",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:f9c9d3975b06533c55e3e88fc194aa01e2a5c774744ddc72bf69ba0b3683ab6f",
    "translatableHash": "sha256:aedc304c6ba5f35d69fc56d5c4503dfc79aba5fea59f94dbc8d390d785b482fa",
    "data": {
      "schemaVersion": 1,
      "name": "Dr. Ushernacht's Astonishing Ink (Minor)",
      "itemType": "consumable",
      "level": 3,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "consumable"
      ],
      "description": "This syrupy ink smells organic and faintly spoiled. It's tied to one of Ushernacht's engines, created with a sample of the fluid from inside the engine. If the associated engine stops functioning, all ink linked with it can no longer be activated, including freshly created ink.\nWhen you write a question on a sheet of paper using the astonishing ink, handwriting scrawls over the paper after 10 minutes, answering with the knowledge it can draw from its engine. The astonishing ink has all Lore skills and attempts a Recall Knowledge check to answer the question with a 1d20+10 modifier. At the GM's discretion, the astonishing ink takes a –4 circumstance penalty to the check if the question relates to advice, emotions, opinions, or other subjective topics.\nIf the astonishing ink fails (but not critically fails) the check to Recall Knowledge, the writing turns blood-red as it forms disturbing words. Anyone reading these words must succeed at a check (will, dc:18) save or become Stupefied 1 until they get a full night's rest. The bloody message may also carry valuable or misleading information at the GM's discretion.\nYou can use a vial of astonishing ink to ask 5 questions before it's used up.",
      "bulk": 0.1,
      "price": {
        "gp": 10
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:mutator-onyx",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "VSHaRjuJF6A5CH0E",
      "slug": "mutator-onyx",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:c6772e0d7b44a6d171f4be069be388b6275b786982ba2792886064bda0630656",
    "translatableHash": "sha256:ab7344031b9e3a9a50ef87b1f2e7a0be358a06a5580253fed22bae9c76fb9498",
    "data": {
      "schemaVersion": 1,
      "name": "Mutator Onyx",
      "itemType": "consumable",
      "level": 3,
      "rarity": "rare",
      "traits": [
        "alchemical",
        "consumable",
        "earth"
      ],
      "description": "Activate 1 (manipulate)\nA mutator onyx is a jet-black, alien mineral first found within the walls of the Onyx Citadel but is now used primarily as an alchemical teaching or experimentation tool within Oprak. Pressing the gem into a solid, unattended inanimate object with Hardness 5 or less transforms that object's surface into a curious syrupy, liquid-like state, reducing its Hardness to 0. One mutator onyx can transform up to a 5-foot cube. After 10 minutes, the matter reverts to its solid state, regaining its Hardness.",
      "bulk": 0.1,
      "price": {
        "gp": 10
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:krasovnatype",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Hiu4tSd0Ol8HvmaN",
      "slug": "krasovnatype",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:3bbf6b8f0a549ec4ba9e49deca1d7cc69aeffb9c864106875d65305d505762f5",
    "translatableHash": "sha256:395e7a00e580cd9992cbd1ecc9337ac791e10723a2cd74f4f660199d13a1dbf6",
    "data": {
      "schemaVersion": 1,
      "name": "Krasovnatype",
      "itemType": "consumable",
      "level": 4,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "gadget"
      ],
      "description": "Activate 1 (manipulate)\nA krasovnatype (named after Dr. Krasovna Gerenevich) consists of a carefully prepared silvered glass plate charged by a Stasian coil. When you touch the front of the glass or hold it near a living creature within your reach, an image of that creature's aura is imprinted on the glass. Once a krasovnatype has an image on it, you can't use the glass plate on another creature. If you are trained in Occultism, you can look at the image and learn if the associated creature has innate, prepared, or spontaneous spellcasting, along with the tradition of that casting and the highest rank of spells they can cast. Referencing the image grants a +1 item bonus to any Recall Knowledge check regarding the creature.",
      "bulk": 0.1,
      "price": {
        "gp": 15
      },
      "usage": "held-in-two-hands",
      "category": "gadget",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:conspirators-cookie",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "i9aUncOpesTJpyX0",
      "slug": "conspirators-cookie",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:fd60f07c64bb1af89c5c6dbdda6c5bac9b161f408177e4210262b004d7cf4646",
    "translatableHash": "sha256:fadb47a5960c9949c7a8e371c1b9dbeeffefcc9dd468d6b7869647afba341b9d",
    "data": {
      "schemaVersion": 1,
      "name": "Conspirator's Cookie",
      "itemType": "consumable",
      "level": 4,
      "rarity": "rare",
      "traits": [
        "consumable",
        "magical"
      ],
      "description": "Activate 1 (manipulate)\nThe shape and exact flavor of these chocolate-covered cookies vary slightly based on who prepares them and the language they are imbued with when crafted. Although named for their use in obfuscating communications, Diarra finds them useful for quite the opposite reason.\nAfter eating one of these treats, you can speak and understand the chosen language for the next hour. If you have the Read Lips or Sign Language feat, you can use that language with those feats. A conspirator's cookie grants you a +1 item bonus to Diplomacy checks to Make an Impression or Request in the chosen language and you can add your level even if untrained.\nCraft Requirements You must know the chosen language.",
      "bulk": 0.1,
      "price": {
        "gp": 15
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:quartz-coil-rail-transport-lesser",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "KFCXhqEAEMN7IH6p",
      "slug": "quartz-coil-rail-transport-lesser",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:90a1c56b6644f94f8d0e4ad44bdf94ee2133b7b50be575276f4ebaa49d1ed9cd",
    "translatableHash": "sha256:813a343d2dd91961d7c2d5a95643ac4bb5fdf27448d763e3295fdf72a980b845",
    "data": {
      "schemaVersion": 1,
      "name": "Quartz-Coil Rail Transport (Lesser)",
      "itemType": "consumable",
      "level": 4,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "electricity",
        "gadget",
        "teleportation"
      ],
      "description": "Activate 2 (manipulate)\nThis odd metal rod is often misinterpreted as a mechanical wand of some kind. Any gadgeteer or mage will be able to elaborate on the fact that magic wands do not need to be throughly covered in a copper wire coil and that the pointed quartz crystal at its tip thrums with electricity, not magic.\nWhen activated, electricity courses through you, allowing you to move through the voltage that arcs through the air. You instantly transport yourself and any items you're wearing and holding from your current space to an unoccupied space up to 20 feet away that you can see. If this would bring another creature with you—even if you're carrying it in an extradimensional container—the teleportation fails. You and all creatures in a line between your original location and your destination take 2 electricity damage.",
      "bulk": 0.1,
      "price": {
        "gp": 20
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:three-pillared-yang-na",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "PkSxW5gxIU5P83ia",
      "slug": "three-pillared-yang-na",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:262a5250876534e36cbac0502b58a7afde286ba8a7572a4924f28d77ff7fa1b5",
    "translatableHash": "sha256:1b83b980daa5ba1bc7f3b068a56557c9e2113c969ce87d91904d6981df5ac1eb",
    "data": {
      "schemaVersion": 1,
      "name": "Three-Pillared Yang Na",
      "itemType": "equipment",
      "level": 4,
      "rarity": "rare",
      "traits": [
        "divine",
        "invested",
        "tattoo"
      ],
      "description": "This tattoo represents an abstract tree whose trunk is made up of three lines of Tang text. Applied in a ritual involving jasmine, turmeric, and a blossom from a yang na tree, the tattoo provides three blessings. The first blessing keeps your mind still during negotiations, granting a +1 item bonus to Diplomacy checks.\nActivate—Second Blessing 1 (concentrate, detection)\nEffect You learn the direction of the yang na tree that gave the blossom used in creating your tattoo. Most such trees are in Tang Mai, far to the west of the Inner Sea.\nActivate—Third Blessing r (concentrate)\nTrigger You take spirit damage\nEffect You gain resistance 3 against that spirit damage.",
      "bulk": 0,
      "price": {
        "gp": 80
      },
      "usage": "tattooed-on-the-body",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:hidden-pocket-outfit",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "t9NlJdAdTKWZUoYz",
      "slug": "hidden-pocket-outfit",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:288caafee38ad34dd937a24e9c59897fcc9e9c2f3b37d03435b00f49578f790e",
    "translatableHash": "sha256:82c56f379f8acf65fb8213d5208367daa97f6138e30bcae5cac1998f1213d818",
    "data": {
      "schemaVersion": 1,
      "name": "Hidden Pocket Outfit",
      "itemType": "equipment",
      "level": 4,
      "rarity": "uncommon",
      "traits": [],
      "description": "Usually worn by actors but also popular with anyone intent on subterfuge, this outfit resembles a normal piece of clothing, but with multiple pockets designed to conceal blood pack squibs and similar small items. When wearing this outfit, you automatically succeed on all relevant checks to Conceal an Object on your person as long as the object is of light or negligible Bulk. However, someone specifically searching you can still attempt a Perception check against your Stealth DC.",
      "bulk": 0.1,
      "price": {
        "gp": 75
      },
      "usage": "worngarment",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:bloodstone-doll-minor",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "TU9wvn31TE2Mz9UW",
      "slug": "bloodstone-doll-minor",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:95aa6a9a55f80aa0d7df33c9ae2cdd996d154916003ec90dbb3740cb7516d5cc",
    "translatableHash": "sha256:e24a65667e9eec4fe7da06ed98ca8c60b326f98fa3bb8ea8adfb616558b31ebe",
    "data": {
      "schemaVersion": 1,
      "name": "Bloodstone Doll (Minor)",
      "itemType": "consumable",
      "level": 4,
      "rarity": "rare",
      "traits": [
        "consumable",
        "magical"
      ],
      "description": "Activate R (concentrate, manipulate)\nTrigger A creature within 60 feet casts a summon spell\nRequirements You have a free hand.\nThis small doll has been carved from a fragment of Bloodstone. When you Activate a bloodstone doll in response to another's magic, you Interact to take it in hand and hold it up toward the triggering creature. Attempt a counteract check against the triggering spell with a counteract modifier of 1d20+9 and a counteract rank of 2. If the spell would be counteracted, the bloodstone doll instead influences the summoned creature. You gain control of the summoned creature and can dictate its 2 actions for that turn. The triggering creature then regains control of their summoned creature, but the summoned creature takes a –2 status penalty to attack rolls against you. Your bloodstone doll shatters when the summon spell ends\nCraft Requirements You have a fragment of the Bloodstone at the heart of the Bloodstone Conservatory.",
      "bulk": 0.1,
      "price": {
        "gp": 15
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:perfections-first-step",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "00p14e3pfEMBB1Xq",
      "slug": "perfections-first-step",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:22fdd75550657d19d2da1769c42377bf43b0626472c8afb1e82969e3be2c4274",
    "translatableHash": "sha256:2a329aa1bef1c6a2aada78518caac4c99ac1dc840f8bfe42fd47754e2661fd46",
    "data": {
      "schemaVersion": 1,
      "name": "Perfection's First Step",
      "itemType": "consumable",
      "level": 5,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "mental",
        "occult",
        "water"
      ],
      "description": "Activate 1 (concentrate)\nThis palm-leaf manuscript contains an incomplete philosophical treatise about perfection, which you must complete and provide written commentaries upon before you can activate it. This activity takes 10 minutes, but can occur at any time before you activate the treatise.\nWhen you activate perfection's first step, you cast Unbreaking Wave Advance with a save DC of 19. You are then temporarily immune to benefiting from further copies of perfection's first step until your next daily preparations.",
      "bulk": 0,
      "price": {
        "gp": 23
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:demon-bone-tiles-brimorak",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "7ztQ3uhnJYVzAA2l",
      "slug": "demon-bone-tiles-brimorak",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:285c78751547017d6c147f4e5810275f4302b16ada6736b3107b3641665888d9",
    "translatableHash": "sha256:6eccd55a126aefb7a61536618049123d18ab935d9925252f5e94dd4f19df11ca",
    "data": {
      "schemaVersion": 1,
      "name": "Demon Bone Tiles (Brimorak)",
      "itemType": "consumable",
      "level": 5,
      "rarity": "rare",
      "traits": [
        "catalyst",
        "consumable",
        "magical",
        "unholy"
      ],
      "description": "Activate Cast a Spell (add 1 action)\nThese bones from different types of demons can be used to form temporary barriers. When you crush the bone fragments and blow the resulting dust around yourself as you cast Shield, the shield appears as a bone bulwark shaped like the demon's face.\nWhen use Shield Block with the spell, the barrier explodes into many bone fragments. The shards cause 1d6 persistent bleed damage to each creature adjacent to you that fails a check (reflex, dc:20) save. This persistent bleed damage is unholy and can be stopped with an Interact action to remove the shards.",
      "bulk": 0.1,
      "price": {
        "gp": 28
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:monster-suit",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "GINBGF9CosuIuXOD",
      "slug": "monster-suit",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:50241331f3a049fb1478a439a548a635da878688acc371b995e298fcd21903ef",
    "translatableHash": "sha256:2fddcf005d03b7ec6e1e59f6577aa7b7c24bb9f6c951c8d04a22fa56ef1d5c4b",
    "data": {
      "schemaVersion": 1,
      "name": "Monster Suit",
      "itemType": "equipment",
      "level": 5,
      "rarity": "uncommon",
      "traits": [],
      "description": "Monster suits are used in elaborate and often tawdry performances where actors portray monstrous creatures. These shows tend to feature gratuitous special effects and culminate with the costumed actors engaging in mock battles on stage, to audiences' delight.\nA monster suit is crafted to resemble a specific creature with the animal, beast, dragon, fiend, giant, plant, or undead trait. You can wear a monster suit that resembles a creature that is your size or one size larger, though this doesn't change your actual size. It takes 10 minutes to don a monster suit, and when wearing one, you take a –10-foot item penalty to your Speeds and a –4 circumstance penalty to skill checks for move actions due to the suit's unwieldy shape. However, the monster suit counts as a using a disguise kit for Impersonating the associated creature, and you gain a +2 item bonus to your Deception check and DC for the activity.",
      "bulk": 2,
      "price": {
        "gp": 80
      },
      "usage": "worngarment",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:uzunjati-storytelling-amulet",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "IIG33n6yrNjz07Ir",
      "slug": "uzunjati-storytelling-amulet",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:223fc12a0b7b78ce342beff3bff8d3911f7461566b3f305df08810ca86bd8d75",
    "translatableHash": "sha256:a310ad3503f4433a0db60c822b48a829b052a3bd68ce7753cf826a468a5890fe",
    "data": {
      "schemaVersion": 1,
      "name": "Uzunjati Storytelling Amulet",
      "itemType": "equipment",
      "level": 5,
      "rarity": "rare",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "This round, flat amulet can be made of metal, clay, or leather and is usually highly personalized with runes, sigils, lines of poetry, or a depiction of a storyteller at work. In Azimbye's case, their gold-rimmed metal amulet boasts fine dwarven workmanship, and bears lines from one of the oldest epic poems of the legendary folk hero Kgalaserke on one side and a stylized portrait of a storytelling event in Ranage's Circle on the other. While wearing the amulet, you gain a +1 item bonus to Performance checks.\nActivate—Enamoring Story f (concentrate)\nFrequency once per day\nTrigger The perfect anecdote or story to impress your interlocutor comes floating to your memory.\nYou attempt to Make An Impression or Request, using a Performance check instead of a Diplomacy check.",
      "bulk": 0,
      "price": {
        "gp": 145
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:tangibility-resonator-lesser",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "LCw1mtusKGterDR4",
      "slug": "tangibility-resonator-lesser",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:390b9e3913dd41bacd437b905fecea5a08c6d215a85e4798f85ddec0798ff568",
    "translatableHash": "sha256:bbcd8ca93bf8040df32a3a6fc0ba3aa9774d1f4cb72532c058d9bb3919a06223",
    "data": {
      "schemaVersion": 1,
      "name": "Tangibility Resonator (Lesser)",
      "itemType": "consumable",
      "level": 5,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "gadget",
        "sonic"
      ],
      "description": "Activate 1 (manipulate)\nOne of the stranger devices to come out of the University of Lepidstadt is a twisted glass contraption that hums with electricity. This vibration is harmless to most but is massively disruptive to the locomotion of incorporeal creatures. When activated, one incorporeal creature within 15 feet must attempt a check (fortitude, dc:19) saving throw. Once used, the vibrations cause the glass to shatter.\nSuccess The target is unaffected.\nFailure The target is Immobilized for 1 round.\nCritical Failure The target is immobilized and Off-Guard for 1 round.",
      "bulk": 0.1,
      "price": {
        "gp": 25
      },
      "usage": "held-in-one-hand",
      "category": "gadget",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:portable-seal-lesser",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "XYweIphfMqFeEo7D",
      "slug": "portable-seal-lesser",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:634419fa02636683f3074e13fd9b9562e451faac3e2f0a0871e1e53ddd28753e",
    "translatableHash": "sha256:80470581bed696015d211bbf508d57e56b6bf7cef13426b2709dfd39c0ba106e",
    "data": {
      "schemaVersion": 1,
      "name": "Portable Seal (Lesser)",
      "itemType": "consumable",
      "level": 6,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "gadget",
        "magical"
      ],
      "description": "Activate 2 (manipulate)\nA portable seal is a stiff framework of copper wires and strategically placed hinges, so that when the device is snapped open it forms an instant geometric design. A tiny Stasian coil is attached, which when activated runs a mixture of occult energy and high-voltage electricity through the wire. The design covers a 5-foot type:burst when unfolded and must be unfolded into an area free of major obstructions such as rocks or hostile creatures. When a creature with the summoned trait attempts to enter the seal's area or make a melee Strike against a creature in that area, the summoned creature must attempt a check (will, dc:20) save.\nSuccess The action occurs normally, and the creature is immune to the effects of this portable seal this round.\nFailure The movement or Strike is disrupted, but the creature is immune to further effects of the portable seal this round.\nCritical Failure The movement or Strike is disrupted.",
      "bulk": 1,
      "price": {
        "gp": 45
      },
      "usage": "held-in-two-hands",
      "category": "gadget",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:vanishing-shocker-lesser",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "l5V2Bbik0g6eLBUA",
      "slug": "vanishing-shocker-lesser",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:1a8b9d1b918fc26920f48ec16808ab468e5510d27c04c76cd7570b7634cbc097",
    "translatableHash": "sha256:c099d2e53cc8b53ad9cb4069b5c9732ada4de686496a2899797ad6948e2566b4",
    "data": {
      "schemaVersion": 1,
      "name": "Vanishing Shocker (Lesser)",
      "itemType": "consumable",
      "level": 7,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "electricity",
        "gadget",
        "illusion",
        "magical"
      ],
      "description": "Activate 1 (manipulate)\nThe vanishing shocker is a cube with extruding spikes at each corner. This inscrutable device channels occult energy through the electricity it produces, creating the result of invisible lighting. When activated, the cube floats above your head, creating a field of invisible electricity in a 10-foot type:emanation that lasts for 1 round. You and creatures within the emanation are Concealed. Creatures that enter or start their turn within the area must attempt a check (reflex, dc:22) save.\nSuccess The target is unaffected.\nFailure The target is Off-Guard for 1 round.\nCritical Failure The target is Clumsy 1 and off-guard for 1 round.",
      "bulk": 0.1,
      "price": {
        "gp": 70
      },
      "usage": "held-in-one-hand",
      "category": "gadget",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:maelstromic-destabilizer-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "P1DyjpDWtnMrXX1e",
      "slug": "maelstromic-destabilizer-moderate",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:8a9cc4ed14441368bf758c0e7e54ffc4d9d7ad4d8b8e356252c523dafd1df17e",
    "translatableHash": "sha256:805be1374e24c11eaab1c1e0af92c733be8c0f6cb815a3705c39df7eb9ee90c3",
    "data": {
      "schemaVersion": 1,
      "name": "Maelstromic Destabilizer (Moderate)",
      "itemType": "consumable",
      "level": 7,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "gadget",
        "spirit"
      ],
      "description": "Activate 1 (manipulate)\nA maelstromic destabilizer is a whirling gyroscope of burnished bronze and glass. It strengthens the bonds that hold a creature to this world by weakening those same bonds to every other nearby creature. When activated, the destabilizer emits a constant pleasant chime as it spins. For the next minute, the creature holding the gadget gains resistance 5 to spirit damage, while all creatures not immune to spirit damage in a 10-foot type:emanation gains weakness 5 to spirit damage.",
      "bulk": 0.1,
      "price": {
        "gp": 65
      },
      "usage": "held-in-one-hand",
      "category": "gadget",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:windborne-platform",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "p0FkKcdjtQjAgEAM",
      "slug": "windborne-platform",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:167ba776c7d186c175ea79c69d851f975c901a09ed757c43482fe4be0dc20101",
    "translatableHash": "sha256:6227cb74136f7b87860aa70c1da3efe83e14c9f55228b9ceef35aca1afda9c84",
    "data": {
      "schemaVersion": 1,
      "name": "Windborne Platform",
      "itemType": "equipment",
      "level": 8,
      "rarity": "uncommon",
      "traits": [
        "air",
        "magical"
      ],
      "description": "These magical platforms are used in a variety of performances. They allow performers to access high places safely, while also serving an important role before the performance even begins. They're used by various backstage crews to hang lights, curtains, and scenery above the stage. Sometimes several of these platforms are lined up to make an upper and lower stage. This large 10-foot-by-10-foot platform can be secured to a surface as a 1-minute activity. While standing on a secured platform, any creature can use the Adjust Height activation.\nActivate—Adjust Height 1 (manipulate)\nEffect The platform and all creatures and items on the platform either rise or lower up to 10 feet. This action fails if there is more than 50 Bulk on the platform.",
      "bulk": 5,
      "price": {
        "gp": 500
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:quartz-coil-rail-transport-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "2JrQLWnVE4DrOLUE",
      "slug": "quartz-coil-rail-transport-moderate",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:66f4d27f4bf2ff17eb1ea9238697728f3b9f4ff5bce06a964e30a940e653ccc8",
    "translatableHash": "sha256:662992cb47e18cf979b0cec95ce516137230ae470dc984acb291f092089b1280",
    "data": {
      "schemaVersion": 1,
      "name": "Quartz-Coil Rail Transport (Moderate)",
      "itemType": "consumable",
      "level": 9,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "electricity",
        "gadget",
        "teleportation"
      ],
      "description": "Activate 2 (manipulate)\nThis odd metal rod is often misinterpreted as a mechanical wand of some kind. Any gadgeteer or mage will be able to elaborate on the fact that magic wands do not need to be throughly covered in a copper wire coil and that the pointed quartz crystal at its tip thrums with electricity, not magic.\nWhen activated, electricity courses through you, allowing you to move through the voltage that arcs through the air. You instantly transport yourself and any items you're wearing and holding from your current space to an unoccupied space up to 40 feet away that you can see. If this would bring another creature with you—even if you're carrying it in an extradimensional container—the teleportation fails. You and all creatures in a line between your original location and your destination take 4 electricity damage.",
      "bulk": 0.1,
      "price": {
        "gp": 150
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:inspiring-spotlight-portable",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "C9lcnBy4pS3MIyoU",
      "slug": "inspiring-spotlight-portable",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:7f0bc8096d69c61b968dff27e935377762b6183e80c2822723d26f140a55e4c4",
    "translatableHash": "sha256:751dbcace9b43be15e580c33c6706aeedc7853acd0c048b8ac5ffa82dd924e36",
    "data": {
      "schemaVersion": 1,
      "name": "Inspiring Spotlight (Portable)",
      "itemType": "equipment",
      "level": 9,
      "rarity": "rare",
      "traits": [
        "light",
        "magical"
      ],
      "description": "An inspiring spotlight consists of a drum-shaped metal housing around several reflective plates. It has the capacity to cast a powerful, narrow beam of light to illuminate important moments or members on stage. The portable version consists of an 18-inch-diameter lamp on a tripod that can be set up or broken down over the course of 10 minutes. The mounted version is typically 3 feet in diameter and affixed to a bracket above and behind the audience for indoor performances.\nActivate—Light It Up 1 (light, manipulate)\nFrequency once per hour\nEffect The inspiring spotlight emits a 5-foot type:burst of bright magical light within 120 feet. If the burst intersects with an area of magical darkness, the inspiring spotlight attempts to counteract the darkness with a 1d20+17 modifier. Creatures within the burst gain a +1 item bonus to saving throws and Charisma-based skill checks. The spotlight remains lit for 1 minute or until you Interact to turn it off. During this time any creature adjacent to the spotlight can move the burst up to 20 feet from the burst's original position with an Interact action.",
      "bulk": 3,
      "price": {
        "gp": 650
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:zarothrasks-contract",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "vKzbNBm01hlp3jiO",
      "slug": "zarothrasks-contract",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:ee7e854dc6b9f552c9e6bd958d696dfd7d5d0bd181de46ffef54b45c69a661c7",
    "translatableHash": "sha256:7cc86a68c4ed0990013ad22300dc232860c3fd21bdf8f9fe960ec60f301500e7",
    "data": {
      "schemaVersion": 1,
      "name": "Zarothrask's Contract",
      "itemType": "equipment",
      "level": 9,
      "rarity": "rare",
      "traits": [
        "contract",
        "invested",
        "occult"
      ],
      "description": "You've bargained for power with a gongorinan, but in return, you must avoid furthering demonic goals. You gain a +2 item bonus to Athletics checks to Disarm manufactured items and to Grapple. Once per day, the gongorinan can warp your body with animal features; you must attempt a check (fortitude, dc:25) save or become Sickened 2. When you recover from the sickened condition, your features revert to normal. The gongorinan will usually do this if you sin or aid a demon, even unintentionally.\nActivate—Gongorinan's Emergence 2 (concentrate, mental, morph, occult, unholy)\nFrequency once per day\nEffect Stony tentacles burst out of your body, lashing at foes. Creatures in a 10-foot type:emanation take 6d6 bludgeoning damage damage (check (fortitude, dc:25, basic, options:area-effect) save); on a failure, the creature also becomes Sickened 1 (sickened 2 on a critical failure) as parts of their anatomy temporarily warp into animal features. When a creature recovers from the sickened condition, its features revert to normal.",
      "bulk": 0,
      "price": {},
      "usage": "other",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:dr-ushernachts-astonishing-ink-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "0Pa0XDVF3DwRPqCu",
      "slug": "dr-ushernachts-astonishing-ink-moderate",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:2c8d96261c902cb16454caeb712d017068faabce74d2cf4d437dcc2f61013c93",
    "translatableHash": "sha256:d48828c415f8ce4119dbe03701b9776aa8a9e155ab2d7d8f2c2aae40c135e035",
    "data": {
      "schemaVersion": 1,
      "name": "Dr. Ushernacht's Astonishing Ink (Moderate)",
      "itemType": "consumable",
      "level": 10,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "consumable"
      ],
      "description": "This syrupy ink smells organic and faintly spoiled. It's tied to one of Ushernacht's engines, created with a sample of the fluid from inside the engine. If the associated engine stops functioning, all ink linked with it can no longer be activated, including freshly created ink.\nWhen you write a question on a sheet of paper using the astonishing ink, handwriting scrawls over the paper after 10 minutes, answering with the knowledge it can draw from its engine. The astonishing ink has all Lore skills and attempts a Recall Knowledge check to answer the question with a 1d20+19 modifier. At the GM's discretion, the astonishing ink takes a –4 circumstance penalty to the check if the question relates to advice, emotions, opinions, or other subjective topics.\nIf the astonishing ink fails (but not critically fails) the check to Recall Knowledge, the writing turns blood-red as it forms disturbing words. Anyone reading these words must succeed at a check (will, dc:27) save or become Stupefied 1 until they get a full night's rest. The bloody message may also carry valuable or misleading information at the GM's discretion.\nYou can use a vial of astonishing ink to ask 5 questions before it's used up.",
      "bulk": 0.1,
      "price": {
        "gp": 160
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:illusory-backdrop",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "66OFeQOV6HM29j5R",
      "slug": "illusory-backdrop",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:fbd2b21186b1d2cbdeba7ae60f08e77ea30dafb70b4288d0f40731290465e192",
    "translatableHash": "sha256:8b4e80538d02deb368dd2c34c50c15209dbd3ba7089126def1faa6b31aecbe7c",
    "data": {
      "schemaVersion": 1,
      "name": "Illusory Backdrop",
      "itemType": "equipment",
      "level": 10,
      "rarity": "rare",
      "traits": [
        "illusion",
        "magical",
        "structure"
      ],
      "description": "This three-panel folding backdrop measures 5 feet tall and 3 feet wide and takes 2 hands to carry when folded up. It projects a preset illusion when fully unfolded. Illusory backdrops are typically used by artists, bards, gallery owners, and the occasional politician, and common illusions include the tops of battlements with grand castles in the background, cozy bowers, and well-appointed rooms.\nActivate—Set the Scene 1 minute (manipulate)\nEffect You unfold the illusory backdrop, placing it on the edge of three contiguous 5-foot squares in a straight line. The illusion then emanates in a 15-foot type:cone from the center of the line, facing straight away from the panel. The illusion contains a scene that includes up to 5 discrete objects (usually foliage or pieces of furniture). The scene is static and lasts for 1 hour, though that duration restarts if the backdrop is refolded and then unfolded again. The appearance of the illusion is determined when the illusory backdrop is crafted and can't be changed.",
      "bulk": 3,
      "price": {
        "gp": 900
      },
      "usage": "carried",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:bloodstone-doll-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "aWqnw30XavBrcKTp",
      "slug": "bloodstone-doll-moderate",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:14373908e130cb15c2ddf3e761ddefb7d3e54e15344971620a4db6a1d22a8d2f",
    "translatableHash": "sha256:c19b9c19ab6505b3f61826879b4ec860d72e6d399bc68ce9e41976b28bd93abd",
    "data": {
      "schemaVersion": 1,
      "name": "Bloodstone Doll (Moderate)",
      "itemType": "consumable",
      "level": 10,
      "rarity": "rare",
      "traits": [
        "consumable",
        "magical"
      ],
      "description": "Activate R (concentrate, manipulate)\nTrigger A creature within 60 feet casts a summon spell\nRequirements You have a free hand.\nThis small doll has been carved from a fragment of Bloodstone. When you Activate a bloodstone doll in response to another's magic, you Interact to take it in hand and hold it up toward the triggering creature. Attempt a counteract check against the triggering spell with a counteract modifier of 1d20+17 and a counteract rank of 5. If the spell would be counteracted, the bloodstone doll instead influences the summoned creature. You gain control of the summoned creature and can dictate its 2 actions for that turn. The triggering creature then regains control of their summoned creature, but the summoned creature takes a –2 status penalty to attack rolls against you. Your bloodstone doll shatters when the summon spell ends\nCraft Requirements You have a fragment of the Bloodstone at the heart of the Bloodstone Conservatory.",
      "bulk": 0.1,
      "price": {
        "gp": 180
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:static-muscular-relay",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "b2t3kttZipvg826A",
      "slug": "static-muscular-relay",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:2276312dcfa487b492bf66709b5977c8c3097d0dda824c60858d49235c6593b6",
    "translatableHash": "sha256:7be3d5f709e93ad543bc1f6d878fd08a6c0b01a96e2e5653d1e8eb08955e8be4",
    "data": {
      "schemaVersion": 1,
      "name": "Static Muscular Relay",
      "itemType": "consumable",
      "level": 10,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "electricity",
        "gadget"
      ],
      "description": "Activate 1 (manipulate)\nThis glass orb has a Stasian coil in the center, allowing visible electricity to be safely seen within the glass. The electricity that dances within this orb can be transferred to the user of this gadget, allowing their muscles to react and respond much quicker. When activated, you gain a +2 circumstance bonus to Reflex saves and AC for 1 minute, or until you are hit by an attack or fail a Reflex saving throw, whichever happens first.\nEffect: Static Muscular Relay",
      "bulk": 0.1,
      "price": {
        "gp": 180
      },
      "usage": "held-in-one-hand",
      "category": "gadget",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:moritype",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "bU41sQCtuZKkmezD",
      "slug": "moritype",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:3d655713f92fd4363e7bf883234d580478f433c4b38f593f1cfcb53d937342d5",
    "translatableHash": "sha256:e16d30558d40942d23d6c7a80420a89618270fdda5bd809781202f17c025c84d",
    "data": {
      "schemaVersion": 1,
      "name": "Moritype",
      "itemType": "consumable",
      "level": 10,
      "rarity": "rare",
      "traits": [
        "consumable",
        "gadget",
        "void"
      ],
      "description": "Activate 1 (manipulate)\nThis plate of smoky glass is a variation on Dr. Krasovna Gerenevich's krasovnatype that is imprinted with void energies. Creating the plate requires a living thing to die as part of its electrical charging; most creators use insects or lab mice. The moritype creates an image in the same way as a krasovnatype, but also siphons off part of that aura. If used on a living creature, that creature must attempt a check (will, dc:27) save.\nCritical Success The creature is unaffected.\nSuccess If the creature has any innate, prepared, or spontaneous spells, they're unable to Cast a Spell of their highest-ranked slot for 1 round. Cantrips and focus spells are unaffected.\nFailure As success, except they can't cast the 2 highest ranks they have available.\nCritical Failure As success, except they can't cast any spells other than cantrips and focus spells.",
      "bulk": 0.1,
      "price": {
        "gp": 200
      },
      "usage": "held-in-one-hand",
      "category": "gadget",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:talented-tap-shoes",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "ktzQ3WItAfMk25hM",
      "slug": "talented-tap-shoes",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:e2b15cbc0cb6adb6a83e908572361b31c96b3a3949d287676a66e1770eb78ea8",
    "translatableHash": "sha256:3fb8b4cf0fe3c0d924c40cd3450ec4cc4eba373c62bbc4a70bba0b43b7e8ff71",
    "data": {
      "schemaVersion": 1,
      "name": "Talented Tap Shoes",
      "itemType": "equipment",
      "level": 11,
      "rarity": "rare",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "These stylish shoes were originally created by the Tappin' Toes Troupe, a group of tap-dancing Taldan bards who achieved massive popularity for their line dance routines. Notoriously lazy when it came to practicing choreography, the troupe enchanted their footwear to enhance their agility. Upon retirement, the troupe sold off their shoe designs, and talented tap shoes have become popular among professional dancers ever since. While wearing the shoes, you gain a +2 item bonus to Acrobatics checks to Balance and Tumble Through an enemy's space and to Performance checks using dance.\nActivate—Strut Your Stuff 1 (manipulate)\nFrequency once per day\nEffect You click the toes of your talented tap shoes on the ground, and for the next minute, whenever you succeed or critically succeed at a Reflex save to avoid a damaging effect, you can Stride half your Speed as a reaction. However, during this time, you take a –2 item penalty to Stealth checks to Sneak.\nEffect: Talented Tap Shoes",
      "bulk": 0.1,
      "price": {
        "gp": 1250
      },
      "usage": "wornshoes",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:aetheric-irritant-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "LjTbLOTj0K0CKvsd",
      "slug": "aetheric-irritant-greater",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:5b51f21ff4ef7f95854db62d2985640782d58b4287e9c632d39b8c2ae7a62539",
    "translatableHash": "sha256:82d1bc7525a00640e13637546206fa5261b94fbe2d95cb5d5608a5ff724e09c4",
    "data": {
      "schemaVersion": 1,
      "name": "Aetheric Irritant (Greater)",
      "itemType": "consumable",
      "level": 11,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "gadget",
        "sonic"
      ],
      "description": "Activate 1 (manipulate)\nAn aetheric irritant is a chime that can emit a subsonic frequency that otherworldly beings find unpleasant. When you Activate an aetheric irritant, you sound the chime and place it on the ground in a square within your reach. The aetheric irritant affects an area in a 20-foot type:emanation. Creatures with the fey, spirit, or undead traits must attempt a check (will, dc:28) save when they enter the affected area and at the beginning of every turn they are in the affected area. Those who fail the save treat the area as difficult terrain until the beginning of their next turn. A creature that critically succeeds at the save is immune to all aetheric irritants for 24 hours. An aetheric irritant continues to hum until it shakes itself to pieces after 10 minutes of being activated or it is moved, whichever comes first.",
      "bulk": 0.1,
      "price": {
        "gp": 275
      },
      "usage": "held-in-one-hand",
      "category": "gadget",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:vanishing-shocker-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "NnoESOFI359hAYjT",
      "slug": "vanishing-shocker-moderate",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:000039f95510bd562e63c5403ae19407bb01fe080e5a2e18a904994531980a48",
    "translatableHash": "sha256:6d34f3cd4c51a12da6a6a39383170049346b426f5abec6fa9932b48bbe7f9f12",
    "data": {
      "schemaVersion": 1,
      "name": "Vanishing Shocker (Moderate)",
      "itemType": "consumable",
      "level": 11,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "electricity",
        "gadget",
        "illusion",
        "magical"
      ],
      "description": "Activate 1 (manipulate)\nThe vanishing shocker is a cube with extruding spikes at each corner. This inscrutable device channels occult energy through the electricity it produces, creating the result of invisible lighting. When activated, the cube floats above your head, creating a field of invisible electricity in a 10-foot type:emanation that lasts for 1 round. You and creatures within the emanation are Concealed. Creatures that enter or start their turn within the area must attempt a check (reflex, dc:27) save.\nSuccess The target is unaffected.\nFailure The target is Off-Guard for 1 round.\nCritical Failure The target is Clumsy 1 and off-guard for 1 round.",
      "bulk": 0.1,
      "price": {
        "gp": 300
      },
      "usage": "held-in-one-hand",
      "category": "gadget",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:tangibility-resonator-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Om6RqpjwuPINOepb",
      "slug": "tangibility-resonator-moderate",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:91a184c9adc1817d5c6a062455ef5ae887f51cdfac6742097ed914d646ee0166",
    "translatableHash": "sha256:18d3da6e1d214999771f65726453cff643046a94836022aedce50a1fb07ea4d1",
    "data": {
      "schemaVersion": 1,
      "name": "Tangibility Resonator (Moderate)",
      "itemType": "consumable",
      "level": 11,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "gadget",
        "sonic"
      ],
      "description": "Activate 1 (manipulate)\nOne of the stranger devices to come out of the University of Lepidstadt is a twisted glass contraption that hums with electricity. This vibration is harmless to most but is massively disruptive to the locomotion of incorporeal creatures. When activated, one incorporeal creature within 15 feet must attempt a check (fortitude, dc:27) saving throw. Once used, the vibrations cause the glass to shatter.\nSuccess The target is unaffected.\nFailure The target is Immobilized for 1 round.\nCritical Failure The target is immobilized and Off-Guard for 1 round.",
      "bulk": 0.1,
      "price": {
        "gp": 300
      },
      "usage": "held-in-one-hand",
      "category": "gadget",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:portable-seal-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "OfIhe6Fa6J4ZfZeL",
      "slug": "portable-seal-moderate",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:1d84e89972c6a610dcf52e204affb39e312a370039344705aaa83a327abcb8fe",
    "translatableHash": "sha256:ec5593bcac0d5a336c4af09bff0fa801b580d430341906e94023549dd616cc72",
    "data": {
      "schemaVersion": 1,
      "name": "Portable Seal (Moderate)",
      "itemType": "consumable",
      "level": 12,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "gadget",
        "magical"
      ],
      "description": "Activate 2 (manipulate)\nA portable seal is a stiff framework of copper wires and strategically placed hinges, so that when the device is snapped open it forms an instant geometric design. A tiny Stasian coil is attached, which when activated runs a mixture of occult energy and high-voltage electricity through the wire. The design covers a 5-foot type:burst when unfolded and must be unfolded into an area free of major obstructions such as rocks or hostile creatures. When a creature with the summoned trait attempts to enter the seal's area or make a melee Strike against a creature in that area, the summoned creature must attempt a check (will, dc:28) save.\nSuccess The action occurs normally, and the creature is immune to the effects of this portable seal this round.\nFailure The movement or Strike is disrupted, but the creature is immune to further effects of the portable seal this round.\nCritical Failure The movement or Strike is disrupted.",
      "bulk": 1,
      "price": {
        "gp": 400
      },
      "usage": "held-in-two-hands",
      "category": "gadget",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:quartz-coil-rail-transport-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "8RcvD4xTCKpsJBLj",
      "slug": "quartz-coil-rail-transport-greater",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:2c1066c774fa6d783462ee86cabf00a83ab406e03315cafbce0f6d8cd3bc951b",
    "translatableHash": "sha256:df3e213b9abf15d752e492676a2788fcc6bf79980cc8a2f6b74b132fd08c218c",
    "data": {
      "schemaVersion": 1,
      "name": "Quartz-Coil Rail Transport (Greater)",
      "itemType": "consumable",
      "level": 14,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "electricity",
        "gadget",
        "teleportation"
      ],
      "description": "Activate 2 (manipulate)\nThis odd metal rod is often misinterpreted as a mechanical wand of some kind. Any gadgeteer or mage will be able to elaborate on the fact that magic wands do not need to be throughly covered in a copper wire coil and that the pointed quartz crystal at its tip thrums with electricity, not magic.\nWhen activated, electricity courses through you, allowing you to move through the voltage that arcs through the air. You instantly transport yourself and any items you're wearing and holding from your current space to an unoccupied space up to 60 feet away that you can see. If this would bring another creature with you—even if you're carrying it in an extradimensional container—the teleportation fails. You and all creatures in a line between your original location and your destination take 6 electricity damage.",
      "bulk": 0.1,
      "price": {
        "gp": 650
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:demon-bone-tiles-seraptis",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "k58XPeaA3qcPJIhg",
      "slug": "demon-bone-tiles-seraptis",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:8bca57e35aa1fa8248e3b843735dac6185c8e9fa3b2b8215c6092d418733d9bf",
    "translatableHash": "sha256:063f8f0ca79497ce3cff6d6f00b109cc6289cfa82cf724b5402cc8841ab9390f",
    "data": {
      "schemaVersion": 1,
      "name": "Demon Bone Tiles (Seraptis)",
      "itemType": "consumable",
      "level": 15,
      "rarity": "rare",
      "traits": [
        "catalyst",
        "consumable",
        "magical",
        "unholy"
      ],
      "description": "Activate Cast a Spell (add 1 action)\nThese bones from different types of demons can be used to form temporary barriers. When you crush the bone fragments and blow the resulting dust around yourself as you cast Shield, the shield appears as a bone bulwark shaped like the demon's face.\nWhen use Shield Block with the spell, the barrier explodes into many bone fragments. The shards cause 2d8 persistent bleed damage to each creature adjacent to you that fails a check (reflex, dc:34) save. This persistent bleed damage is unholy and can be stopped with an Interact action to remove the shards.",
      "bulk": 0.1,
      "price": {
        "gp": 1200
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:inspiring-spotlight-mounted",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "uTPqImeDq7bEsFak",
      "slug": "inspiring-spotlight-mounted",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:079477fc5eb697797f75714fefc200976a307abe2e25be6d46395c76d0d89674",
    "translatableHash": "sha256:6e74c0ea0ed181816382efbbfb50633bcadac8c9a9de19958b77ef3ff7dc66c2",
    "data": {
      "schemaVersion": 1,
      "name": "Inspiring Spotlight (Mounted)",
      "itemType": "equipment",
      "level": 15,
      "rarity": "rare",
      "traits": [
        "light",
        "magical"
      ],
      "description": "An inspiring spotlight consists of a drum-shaped metal housing around several reflective plates. It has the capacity to cast a powerful, narrow beam of light to illuminate important moments or members on stage. The portable version consists of an 18-inch-diameter lamp on a tripod that can be set up or broken down over the course of 10 minutes. The mounted version is typically 3 feet in diameter and affixed to a bracket above and behind the audience for indoor performances.\nActivate—Light It Up 1 (light, manipulate)\nFrequency once per hour\nEffect The inspiring spotlight emits a 5-foot type:burst of bright magical light within 240 feet. If the burst intersects with an area of magical darkness, the inspiring spotlight attempts to counteract the darkness with a 1d20+25 modifier. Creatures within the burst gain a +2 item bonus to saving throws and Charisma-based skill checks. The spotlight remains lit for 1 minute or until you Interact to turn it off. During this time any creature adjacent to the spotlight can move the burst up to 20 feet from the burst's original position with an Interact action.",
      "bulk": 8,
      "price": {
        "gp": 650
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:vanishing-shocker-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "vR2EZPD9TcLrkBz6",
      "slug": "vanishing-shocker-greater",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:0511b0b89ea6782a0f0c5334c4a9d172d29e0293faef93b20ca644f437327724",
    "translatableHash": "sha256:1dea86ab156b01f2b2e6b47ef4334cc4fb362a51ae9c5801ec2b159cb48d4328",
    "data": {
      "schemaVersion": 1,
      "name": "Vanishing Shocker (Greater)",
      "itemType": "consumable",
      "level": 15,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "electricity",
        "gadget",
        "illusion",
        "magical"
      ],
      "description": "Activate 1 (manipulate)\nThe vanishing shocker is a cube with extruding spikes at each corner. This inscrutable device channels occult energy through the electricity it produces, creating the result of invisible lighting. When activated, the cube floats above your head, creating a field of invisible electricity in a 10-foot type:emanation that lasts for 1 round. You and creatures within the emanation are Concealed. Creatures that enter or start their turn within the area must attempt a check (reflex, dc:33) save.\nSuccess The target is unaffected.\nFailure The target is Off-Guard for 1 round.\nCritical Failure The target is Clumsy 1 and off-guard for 1 round.",
      "bulk": 0.1,
      "price": {
        "gp": 1300
      },
      "usage": "held-in-one-hand",
      "category": "gadget",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:bloodstone-doll-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "4NCo6f0aMnIgA5jw",
      "slug": "bloodstone-doll-major",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:02bb20d9b123407ae4e3e12633d3de1ce6d654708ec4b215863aa5a378d2dc4e",
    "translatableHash": "sha256:4a0fc65398b2e26b2b926967ef20656985ff9aaad0ee6c25b0a3a313a48ce8c2",
    "data": {
      "schemaVersion": 1,
      "name": "Bloodstone Doll (Major)",
      "itemType": "consumable",
      "level": 16,
      "rarity": "rare",
      "traits": [
        "consumable",
        "magical"
      ],
      "description": "Activate R (concentrate, manipulate)\nTrigger A creature within 60 feet casts a summon spell\nRequirements You have a free hand.\nThis small doll has been carved from a fragment of Bloodstone. When you Activate a bloodstone doll in response to another's magic, you Interact to take it in hand and hold it up toward the triggering creature. Attempt a counteract check against the triggering spell with a counteract modifier of 1d20+25 and a counteract rank of 8. If the spell would be counteracted, the bloodstone doll instead influences the summoned creature. You gain control of the summoned creature and can dictate its 2 actions for that turn. The triggering creature then regains control of their summoned creature, but the summoned creature takes a –2 status penalty to attack rolls against you. Your bloodstone doll shatters when the summon spell ends\nCraft Requirements You have a fragment of the Bloodstone at the heart of the Bloodstone Conservatory.",
      "bulk": 0.1,
      "price": {
        "gp": 1800
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:moritype-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "nw5PAxxVQOKihmNn",
      "slug": "moritype-greater",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:89b9ab19bde66364c2bb437b5a2f93567f8bacaff483761f280741a1eb529f31",
    "translatableHash": "sha256:8e6f902d805d920859c8b9095d02db7506727e9267722c6e12f72a5377015eac",
    "data": {
      "schemaVersion": 1,
      "name": "Moritype (Greater)",
      "itemType": "consumable",
      "level": 16,
      "rarity": "rare",
      "traits": [
        "consumable",
        "gadget",
        "void"
      ],
      "description": "Activate 1 (manipulate)\nThis plate of smoky glass is a variation on Dr. Krasovna Gerenevich's krasovnatype that is imprinted with void energies. Creating the plate requires a living thing to die as part of its electrical charging; most creators use insects or lab mice. The moritype creates an image in the same way as a krasovnatype, but also siphons off part of that aura. If used on a living creature, that creature must attempt a check (will, dc:35) save.\nCritical Success The creature is unaffected.\nSuccess If the creature has any innate, prepared, or spontaneous spells, they're unable to Cast a Spell of their highest-ranked slot for 1 round. Cantrips and focus spells are unaffected.\nFailure As success, except they can't cast the 2 highest ranks they have available.\nCritical Failure As success, except they can't cast any spells other than cantrips and focus spells.",
      "bulk": 0.1,
      "price": {
        "gp": 2000
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:aetheric-irritant-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "7jUxSSn0SFkSvUsq",
      "slug": "aetheric-irritant-major",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:f9c974ea0d76714e5f277e55905b5d997a5954508b76d8df14652a2419839efc",
    "translatableHash": "sha256:f12ed8ccb60eabe4a9d1955414838f26b9c9fe4cda14ade6d8837cf192ff1c96",
    "data": {
      "schemaVersion": 1,
      "name": "Aetheric Irritant (Major)",
      "itemType": "consumable",
      "level": 17,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "gadget",
        "sonic"
      ],
      "description": "Activate 1 (manipulate)\nAn aetheric irritant is a chime that can emit a subsonic frequency that otherworldly beings find unpleasant. When you Activate an aetheric irritant, you sound the chime and place it on the ground in a square within your reach. The aetheric irritant affects an area in a 30-foot type:emanation. Creatures with the fey, spirit, or undead traits must attempt a check (will, dc:36) save when they enter the affected area and at the beginning of every turn they are in the affected area. Those who fail the save treat the area as difficult terrain until the beginning of their next turn. A creature that critically succeeds at the save is immune to all aetheric irritants for 24 hours. An aetheric irritant continues to hum until it shakes itself to pieces after 10 minutes of being activated or it is moved, whichever comes first.",
      "bulk": 0.1,
      "price": {
        "gp": 2750
      },
      "usage": "held-in-one-hand",
      "category": "gadget",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:dr-ushernachts-astonishing-ink-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "S5FMXJdf9ktWXJRp",
      "slug": "dr-ushernachts-astonishing-ink-major",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:3fa68a94e96bf64920aca2ac2afcaea2f6f94ee4a22f666d64ca1ba68e9e25e4",
    "translatableHash": "sha256:dbdfc24eca1fbf4495c4bacc7743f3cffa57c75fb46022ba8d00f5fd3005f50f",
    "data": {
      "schemaVersion": 1,
      "name": "Dr. Ushernacht's Astonishing Ink (Major)",
      "itemType": "consumable",
      "level": 17,
      "rarity": "uncommon",
      "traits": [
        "alchemical",
        "consumable"
      ],
      "description": "This syrupy ink smells organic and faintly spoiled. It's tied to one of Ushernacht's engines, created with a sample of the fluid from inside the engine. If the associated engine stops functioning, all ink linked with it can no longer be activated, including freshly created ink.\nWhen you write a question on a sheet of paper using the astonishing ink, handwriting scrawls over the paper after 10 minutes, answering with the knowledge it can draw from its engine. The astonishing ink has all Lore skills and attempts a Recall Knowledge check to answer the question with a 1d20+28 modifier. At the GM's discretion, the astonishing ink takes a –4 circumstance penalty to the check if the question relates to advice, emotions, opinions, or other subjective topics.\nIf the astonishing ink fails (but not critically fails) the check to Recall Knowledge, the writing turns blood-red as it forms disturbing words. Anyone reading these words must succeed at a check (will, dc:36) save or become Stupefied 1 until they get a full night's rest. The bloody message may also carry valuable or misleading information at the GM's discretion.\nYou can use a vial of astonishing ink to ask 5 questions before it's used up.",
      "bulk": 0.1,
      "price": {
        "gp": 2250
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:tangibility-resonator-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "tJquEIyMHgbFEH9N",
      "slug": "tangibility-resonator-major",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:bf094db069ed364ef5746980d8211faee345d8c5a07e4fe26dad0a6c23a581c1",
    "translatableHash": "sha256:c23dfc053fa22b4b0a32c89d6b11fd9c1a8796cf7782b540f89defc599e6854b",
    "data": {
      "schemaVersion": 1,
      "name": "Tangibility Resonator (Major)",
      "itemType": "consumable",
      "level": 17,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "gadget",
        "sonic"
      ],
      "description": "Activate 1 (manipulate)\nOne of the stranger devices to come out of the University of Lepidstadt is a twisted glass contraption that hums with electricity. This vibration is harmless to most but is massively disruptive to the locomotion of incorporeal creatures. When activated, one incorporeal creature within 15 feet must attempt a check (fortitude, dc:35) saving throw. Once used, the vibrations cause the glass to shatter.\nSuccess The target is unaffected.\nFailure The target is Immobilized for 1 round.\nCritical Failure The target is immobilized and Off-Guard for 1 round.",
      "bulk": 0.1,
      "price": {
        "gp": 2500
      },
      "usage": "held-in-one-hand",
      "category": "gadget",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:maelstromic-destabilizer-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "xsPP4JVf1NJX0s7u",
      "slug": "maelstromic-destabilizer-major",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:5c2033d503aa5124a6ce369976c43e47fe4e84e0ce377c09bc9aef7c323c3a89",
    "translatableHash": "sha256:22a38e18c7ca1b7f9b8c1bc36011c3b9cb0e14b0e2ab7f618ae8f3bf39c94897",
    "data": {
      "schemaVersion": 1,
      "name": "Maelstromic Destabilizer (Major)",
      "itemType": "consumable",
      "level": 17,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "gadget",
        "spirit"
      ],
      "description": "Activate 1 (manipulate)\nA maelstromic destabilizer is a whirling gyroscope of burnished bronze and glass. It strengthens the bonds that hold a creature to this world by weakening those same bonds to every other nearby creature. When activated, the destabilizer emits a constant pleasant chime as it spins. For the next minute, the creature holding the gadget gains resistance 10 to spirit damage, while all creatures not immune to spirit damage in a 10-foot type:emanation gains weakness 10 to spirit damage.",
      "bulk": 0.1,
      "price": {
        "gp": 2750
      },
      "usage": "held-in-one-hand",
      "category": "gadget",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:portable-seal-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "VGQ18qI1Y8sLORuG",
      "slug": "portable-seal-major",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:28b580005b40fcb0b1f402cf2b0de4bc5710b78d3aedff8062c3d7f63f3a5104",
    "translatableHash": "sha256:b2422504fbb695909683929e2e30585a75d1bbc6b4c17c341b2bcd6a2cc63c6e",
    "data": {
      "schemaVersion": 1,
      "name": "Portable Seal (Major)",
      "itemType": "consumable",
      "level": 18,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "gadget",
        "magical"
      ],
      "description": "Activate 2 (manipulate)\nA portable seal is a stiff framework of copper wires and strategically placed hinges, so that when the device is snapped open it forms an instant geometric design. A tiny Stasian coil is attached, which when activated runs a mixture of occult energy and high-voltage electricity through the wire. The design covers a 5-foot type:burst when unfolded and must be unfolded into an area free of major obstructions such as rocks or hostile creatures. When a creature with the summoned trait attempts to enter the seal's area or make a melee Strike against a creature in that area, the summoned creature must attempt a check (will, dc:36) save.\nSuccess The action occurs normally, and the creature is immune to the effects of this portable seal this round.\nFailure The movement or Strike is disrupted, but the creature is immune to further effects of the portable seal this round.\nCritical Failure The movement or Strike is disrupted.",
      "bulk": 1,
      "price": {
        "gp": 5000
      },
      "usage": "held-in-two-hands",
      "category": "gadget",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:quartz-coil-rail-transport-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "iVhkA8bpG2phbb0Q",
      "slug": "quartz-coil-rail-transport-major",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:8be75ee10ed09f489d61473d23fa2aff4a183e72ae75ed5728526565d76a8bb1",
    "translatableHash": "sha256:725d299ed58e44e9887bb98ca1aecc093f75ccc822ba03209a16872ec112cc10",
    "data": {
      "schemaVersion": 1,
      "name": "Quartz-Coil Rail Transport (Major)",
      "itemType": "consumable",
      "level": 19,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "electricity",
        "gadget",
        "teleportation"
      ],
      "description": "Activate 2 (manipulate)\nThis odd metal rod is often misinterpreted as a mechanical wand of some kind. Any gadgeteer or mage will be able to elaborate on the fact that magic wands do not need to be throughly covered in a copper wire coil and that the pointed quartz crystal at its tip thrums with electricity, not magic.\nWhen activated, electricity courses through you, allowing you to move through the voltage that arcs through the air. You instantly transport yourself and any items you're wearing and holding from your current space to an unoccupied space up to 80 feet away that you can see. If this would bring another creature with you—even if you're carrying it in an extradimensional container—the teleportation fails. You and all creatures in a line between your original location and your destination take 8 electricity damage.",
      "bulk": 0.1,
      "price": {
        "gp": 8000
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:vanishing-shocker-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "zftpNNqFzlmeuWl6",
      "slug": "vanishing-shocker-major",
      "publicationTitle": "Pathfinder Lost Omens Rival Academies",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:eabe5e40bc165dc97c28151bcd3be8774e5cb82269f7e587d98016b25f7be9ec",
    "translatableHash": "sha256:e59a425a0a00e9a02a502e15e8f14358a03571a4c2450fbad556095f12846418",
    "data": {
      "schemaVersion": 1,
      "name": "Vanishing Shocker (Major)",
      "itemType": "consumable",
      "level": 19,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "electricity",
        "gadget",
        "illusion",
        "magical"
      ],
      "description": "Activate 1 (manipulate)\nThe vanishing shocker is a cube with extruding spikes at each corner. This inscrutable device channels occult energy through the electricity it produces, creating the result of invisible lighting. When activated, the cube floats above your head, creating a field of invisible electricity in a 10-foot type:emanation that lasts for 1 round. You and creatures within the emanation are Concealed. Creatures that enter or start their turn within the area must attempt a check (reflex, dc:38) save.\nSuccess The target is unaffected.\nFailure The target is Off-Guard for 1 round.\nCritical Failure The target is Clumsy 1 and off-guard for 1 round.",
      "bulk": 0.1,
      "price": {
        "gp": 8000
      },
      "usage": "held-in-one-hand",
      "category": "gadget",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:spectral-dagger",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "ts5z3xR9j48Cic5H",
      "slug": "spectral-dagger",
      "publicationTitle": "Pathfinder Lost Omens Shining Kingdoms",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:9ac43f1e9d29adc21f9a5bb9cca973a0cfdfd0ee330cfa4364b1c0818d3a7b87",
    "translatableHash": "sha256:e2bebbab9f7fe1ee477bea97b3d41fb09998a6f36cf68a8bfca8847f0b1664de",
    "data": {
      "schemaVersion": 1,
      "name": "Spectral Dagger",
      "itemType": "weapon",
      "level": 0,
      "rarity": "unique",
      "traits": [
        "agile",
        "finesse",
        "thrown-10",
        "versatile-s"
      ],
      "description": "Granted by Spectral Dagger",
      "bulk": 0.1,
      "price": {},
      "usage": "held-in-one-hand",
      "category": "simple",
      "group": "knife",
      "damage": {
        "dice": 1,
        "die": "d6",
        "type": "slashing"
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:splinter-of-finality",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "MEJfmtMXXnIV4Lzx",
      "slug": "splinter-of-finality",
      "publicationTitle": "Pathfinder Lost Omens Shining Kingdoms",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:34f2eb4b38e80b8a2ef15f3b83064a3d36f4be615b60b27f9c825d4eec04a9d5",
    "translatableHash": "sha256:89f25bd840534e6bc0e9bcbd9e631bb22a380fed493e30c425cf9d07b8014508",
    "data": {
      "schemaVersion": 1,
      "name": "Splinter of Finality",
      "itemType": "equipment",
      "level": 2,
      "rarity": "rare",
      "traits": [
        "artifact",
        "invested",
        "occult"
      ],
      "description": "The sharpness of this dark metal splinter never dulls. By plunging it into your neck, you anchor your soul to the fragment, granting you protection from those that would harm it at the cost of weakening your body. You take a –1 status penalty to saving throws against effects that would give you the Clumsy, Drained, or Enfeebled condition. At 10th level, the penalty increases to –2. However, you gain spirit resistance equal to your level and a +2 status bonus to saving throws against spirits or haunts and effects that would give you the Confused, Controlled, Doomed, or Stupefied conditions.\nDestruction All 13 splinters of finality must be gathered and used to reconstruct Silent Lenore, which must then be destroyed by means of the Blunt the Final Blade ritual.\nSplinter of Finality",
      "bulk": 0.1,
      "price": {},
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:taldogis-badge",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "NRXhQD5bLM3H9YGR",
      "slug": "taldogis-badge",
      "publicationTitle": "Pathfinder Lost Omens Shining Kingdoms",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:c877330e3b010c0807bcdcd067036ba0c4c1575f353b59de99535a4142fbdd9a",
    "translatableHash": "sha256:8164c15317a9003d0d4fa4a488343cd49fc67769b4e42aaef51f5cca6baf7830",
    "data": {
      "schemaVersion": 1,
      "name": "Taldogis Badge",
      "itemType": "equipment",
      "level": 2,
      "rarity": "uncommon",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "This badge depicting a hunting dog is used by Eutropia's supporters to indicate their allegiances.\nActivate—Bark 2 (concentrate, manipulate, subtle)\nFrequency once per hour\nEffect The hunting dog makes a single bark that only you and a single target of your choice within 30 feet can hear. If the target is a supporter of Eutropia, you gain a +2 circumstance bonus to Diplomacy checks against them for the next minute.\nEffect: Taldogis Badge",
      "bulk": 0,
      "price": {
        "gp": 28
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:fan-buckler",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Mz6Q1bawtWXtAifO",
      "slug": "fan-buckler",
      "publicationTitle": "Pathfinder Lost Omens Shining Kingdoms",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:cb5c8185e91962f6619ef6757b9d4f4740c197d743e828782e091bd33daa834a",
    "translatableHash": "sha256:b64101ed271fb55f6c000bb8ececab7b69152478b9c72cf3fe2196658cf5d4f6",
    "data": {
      "schemaVersion": 1,
      "name": "Fan Buckler",
      "itemType": "equipment",
      "level": 3,
      "rarity": "uncommon",
      "traits": [
        "magical"
      ],
      "description": "Access You're a member of the Lion Blades.\nWhen collapsed, a fan buckler appears to be no more than an elegant wooden fan. Any attempts to discern that there's more to the item require a successful Perception check against the Deception DC of the wielder.\nActivate—Unfurl Fan 1 (manipulate)\nEffect You transform the fan into a wooden Buckler (Hardness 3, HP 6, BT 3) or vice versa.",
      "bulk": 0.1,
      "price": {
        "gp": 50
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:emperors-peak-quartz-bracelet",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "um6HjOHNXNux6WQu",
      "slug": "emperors-peak-quartz-bracelet",
      "publicationTitle": "Pathfinder Lost Omens Shining Kingdoms",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/treasure/art-objects/greater-art-object/gold-and-opal-bracelet.webp"
    },
    "sourceHash": "sha256:8a9c4d6c5eaa5371dc18f3c6d1b0d99a3f641a1b30ac3d68f81b4273647d801c",
    "translatableHash": "sha256:8e96c9a59a80ce10849f559b1a2a095db899f1085545a339ea16af9fe5f176d1",
    "data": {
      "schemaVersion": 1,
      "name": "Emperor's Peak Quartz Bracelet",
      "itemType": "equipment",
      "level": 3,
      "rarity": "uncommon",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "While most residents of—and travelers to—the Five Kings Mountains live underground, a significant number of people explore the regions' awe-inspiring peaks. Among their many discoveries on Emperor's Peak is a deposit of rainbow-colored rock crystal quartz with inherent magical properties that aid in survival, especially in the mountains. Dwarven artisans fashion chunks of this translucent quartz into fashionable bracelets.\nWearing such a bracelet grants you a +1 item bonus to Survival checks to Sense Direction and Subsist. This bonus increases to +3 when in mountainous terrain. If you attempt a Survival check to Subsist after 8 hours or less of exploration, you take only a –2 penalty instead of a –5 penalty.",
      "bulk": 0,
      "price": {
        "gp": 5
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:memory-ribbon",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "282vQmBPwx1sZIqp",
      "slug": "memory-ribbon",
      "publicationTitle": "Pathfinder Lost Omens Shining Kingdoms",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:45faf60517a10b35bb831e9ea125f17b7d0b134ed32555f8780fcec17a801755",
    "translatableHash": "sha256:af52e19f9eedf7b7c8c34fe56886afbf34eae9b3b1e65a80beca84a3afec5ef5",
    "data": {
      "schemaVersion": 1,
      "name": "Memory Ribbon",
      "itemType": "consumable",
      "level": 4,
      "rarity": "uncommon",
      "traits": [
        "consumable",
        "magical"
      ],
      "description": "The time-honored tradition of weaving beautiful, embroidered glory ribbons throughout one's hair and beard remains an important cultural practice among some dwarven clans, with the choice of colors and style of presentation representing status, achievements, and other significant aspects of someone's position. Magical versions also exist that help enhance the wearer's memory. These magical ribbons are especially popular when someone has been invited to serve as a toastmaster at a guild banquet or as a master of ceremonies at an important festival. Their use in final oral exams for high positions is, however, hotly debated.\nActivate—Read the Ribbon's Story f (concentrate)\nTrigger You attempt a skill check to Recall Knowledge but haven't rolled yet\nEffect The memory ribbon grants you a +2 item bonus to the triggering skill check to Recall Knowledge. Afterward, the ribbon becomes non-magical.",
      "bulk": 0,
      "price": {
        "gp": 20
      },
      "usage": "worn",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:breath-of-freedom",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "WoNs6LUNKgHKC8Yu",
      "slug": "breath-of-freedom",
      "publicationTitle": "Pathfinder Lost Omens Shining Kingdoms",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:d204cc92a2bbc4166bf3f080906b265f5b05ecad42256711d96d014754fe7e41",
    "translatableHash": "sha256:68efb351526bfa0a272e8540d403b2698a1d45ecf59493e57cb07df292e47647",
    "data": {
      "schemaVersion": 1,
      "name": "Breath of Freedom",
      "itemType": "consumable",
      "level": 4,
      "rarity": "common",
      "traits": [
        "consumable",
        "magical",
        "talisman"
      ],
      "description": "Activate R (concentrate)\nTrigger You become Grabbed, Immobilized, or Restrained\nRequirements You're an expert in Reflex saves.\nThis delicate feather ornament looks fragile but is solid as stone. When you Activate the talisman, you can immediately attempt to Escape.",
      "bulk": 0,
      "price": {
        "gp": 18
      },
      "usage": "affixed-to-armor",
      "category": "talisman",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:bolkas-blessing",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "fqnjZzwBi9GH4CXO",
      "slug": "bolkas-blessing",
      "publicationTitle": "Pathfinder Lost Omens Shining Kingdoms",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:1aa31b522b182effb017e54d1adcd2c59fe943644909830846a5b14776c62c42",
    "translatableHash": "sha256:5018fd41fba62f95e73477d04d4d0b0a75e1e53345906c3c8c273d66eeb02852",
    "data": {
      "schemaVersion": 1,
      "name": "Bolka's Blessing",
      "itemType": "equipment",
      "level": 5,
      "rarity": "uncommon",
      "traits": [
        "divine",
        "magical"
      ],
      "description": "This filigree grants you a +1 item bonus to Diplomacy checks and to Perception checks to Sense Motive. Additionally, once per day, the filigree symbol can be activated for a healing effect.\nActivate—Gift of Life 1 (concentrate, healing, vitality)\nFrequency once per day\nEffect You regain 3d10 healing Hit Points.",
      "bulk": 0.1,
      "price": {
        "gp": 160
      },
      "usage": "etched-onto-clan-dagger",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:trudds-strength",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "I8XecIUYhwagAnXv",
      "slug": "trudds-strength",
      "publicationTitle": "Pathfinder Lost Omens Shining Kingdoms",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:cbba2727e21dcb9c768012a3124ebfaacedb012e70aeae46c86c098cbc3f3188",
    "translatableHash": "sha256:d5b8241abf5ae248d9fac22b721a2d11752e56015ebea53e2c2ec6272c2cd777",
    "data": {
      "schemaVersion": 1,
      "name": "Trudd's Strength",
      "itemType": "equipment",
      "level": 5,
      "rarity": "uncommon",
      "traits": [
        "divine",
        "magical"
      ],
      "description": "This filigree depiction of a warhammer in front of a kite-shaped shield grants you a +1 item bonus to Athletics checks and to Intimidation checks to Coerce. Additionally, once per day, the filigree symbol can be activated to protect your allies.\nActivate—Protect the Clan! 1 (concentrate)\nFrequency once per day\nEffect Protective energy releases in a 10-foot type:emanation, granting a +1 status bonus to Armor Class to all allies within the area. The bonus lasts for 1 minute.\nEffect: Trudd's Strength",
      "bulk": 0.1,
      "price": {
        "gp": 160
      },
      "usage": "etched-onto-clan-dagger",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:twilight-tattoo",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "ldf2QDuEUN5DFjBV",
      "slug": "twilight-tattoo",
      "publicationTitle": "Pathfinder Lost Omens Shining Kingdoms",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:6b1f0dde661f65fee3447989f92b9271b8e1e7980c5734104e39ef637cc1b7e1",
    "translatableHash": "sha256:9171aeae552391fdf147ce14becc795f7920122692c717ae335c19ed41562870",
    "data": {
      "schemaVersion": 1,
      "name": "Twilight Tattoo",
      "itemType": "equipment",
      "level": 5,
      "rarity": "uncommon",
      "traits": [
        "invested",
        "magical",
        "tattoo"
      ],
      "description": "Access You're a member of the Twilight Talons.\nThis tattoo of a black eagle gripping a sword and arrows in its talons identifies the bearer as a member of the Twilight Talons. Agents typically keep the tattoo hidden unless they need to prove their identity to another member. The bearer gains a +1 item bonus to Deception checks.\nActivate—Fade 1 (concentrate, illusion)\nEffect You hide your tattoo from view. The tattoo is invisible for 1 day and can't be detected by effects such as detect magic and read aura. You can Dismiss this effect.\nActivate—Inscribe 2 (concentrate, illusion, manipulate)\nFrequency once per day\nEffect You lay your hand on a piece of text, and your tattoo makes a perfect copy of it, storing it as a ring of swirling letters surrounding the design. The tattoo can hold text equivalent to two pages of a book, a single scroll, or a similar area of other surfaces, though it doesn't replicate any magical effect or other special properties of the original words. You can Dismiss this effect, and when you Dismiss it, the tattoo copies the original text onto a blank writing surface you're touching.",
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
    "contentId": "pf2e:item:equipment-srd:shawl-of-seasons",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "o8l0mvCHAnQUfD6o",
      "slug": "shawl-of-seasons",
      "publicationTitle": "Pathfinder Lost Omens Shining Kingdoms",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:2eba1f9207d87db52de5e0ee30e518646280deff7c4575f2a7c1ad3822c6bfe1",
    "translatableHash": "sha256:17ef5b8dd1fd201d6ef4e5900c2319c0920e3863d21e417e522d215b26204cea",
    "data": {
      "schemaVersion": 1,
      "name": "Shawl of Seasons",
      "itemType": "equipment",
      "level": 5,
      "rarity": "uncommon",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "This woven shawl changes its color, material, and abilities with the seasons. In its usual state, it reflects the current season of the environment the wearer is in. The handsome embroidery grants you a +2 item bonus to Diplomacy checks to Make an Impression.\nActivate—Change of Seasons 10 minutes (concentrate)\nFrequency once per day\nEffect You arrange the shawl on your shoulders to gain the benefits of a season of your choice until your next daily preparations. If the season you choose is the current season, you also gain a +1 item bonus to Fortitude saving throws.\n• Spring The shawl becomes smooth silk covered in delicate flowers. You gain a +5-foot item bonus to your Speed.\n• Summer The shawl becomes light cotton with the hues of fresh grass. You're protected from the effects of severe heat.\n• Fall The shawl becomes thin leather with an ombre of red and orange leaves. You treat falls as 10 feet shorter.\n• Winter The shawl becomes warm wool as white as snow. You're protected from the effects of severe cold.",
      "bulk": 0.1,
      "price": {
        "gp": 150
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:kolss-oath",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "tvFMexALNZ70NVwh",
      "slug": "kolss-oath",
      "publicationTitle": "Pathfinder Lost Omens Shining Kingdoms",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:79005d183caf01b32f9e67e0fbfa9abd4e2ec121999150457047b53632a2ae60",
    "translatableHash": "sha256:7b5417f9e1f7b464501912d77c04386df76e5cc37119bc309d4a6a134a3b283d",
    "data": {
      "schemaVersion": 1,
      "name": "Kols's Oath",
      "itemType": "equipment",
      "level": 5,
      "rarity": "uncommon",
      "traits": [
        "divine",
        "magical"
      ],
      "description": "This filigree grants you, as the clan dagger's owner, a +1 item bonus to Society checks and to Diplomacy checks to Request. Additionally, once per day, the filigree symbol can be activated to compel an enemy to act.\nActivate—Vow Unbreakable 1 (auditory, concentrate, linguistic, mental)\nFrequency once per day\nEffect You command a creature within 30 feet to Stride away from you, drop Prone, or release one item it's holding. The creature can choose to perform that action as the first action on its next turn; if it doesn't, it takes 4d6 mental damage (check (will, dc:20, basic, traits:auditory,concentrate,linguistic,mental) save).",
      "bulk": 0.1,
      "price": {
        "gp": 160
      },
      "usage": "etched-onto-clan-dagger",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:crimson-godsblood-serum-lesser",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "bO6CN8rkGo7f14rk",
      "slug": "crimson-godsblood-serum-lesser",
      "publicationTitle": "Pathfinder Lost Omens Shining Kingdoms",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:a5bd70b581ca82177ba914e399555f97eabf3f3ed3bc9ae8d0cd2ec663c4fd42",
    "translatableHash": "sha256:3ae9f3c31c9307e1f300f7f18929d8a3ff8b9fc69a0c79adf799beb80ea05bff",
    "data": {
      "schemaVersion": 1,
      "name": "Crimson Godsblood Serum (Lesser)",
      "itemType": "consumable",
      "level": 6,
      "rarity": "rare",
      "traits": [
        "consumable",
        "magical",
        "potion"
      ],
      "description": "Activate 1 (manipulate)\nThough it contains but a tiny drop of Gorum's blood, drinking this thick, swirling potion fills the user with divine wrath and resilience. While under the effect of the potion, you gain a +2 status bonus to physical damage rolls for 1 minute.\nEffect: Crimson Godsblood Serum\nThe first time during that minute you're reduced to 0 Hit Points but not immediately killed, you avoid being knocked out, regain 2d8+5 healing Hit Points, and become Confused for 1 round, and your Wounded condition increases by 1.",
      "bulk": 0.1,
      "price": {
        "gp": 50
      },
      "usage": "held-in-one-hand",
      "category": "potion",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:lions-pelt-leather",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "dXCdg96HwVGT1URT",
      "slug": "lions-pelt-leather",
      "publicationTitle": "Pathfinder Lost Omens Shining Kingdoms",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:7364dfc8c0d4b668690626db3b8e6992998ddcfbb745dbec900da3b3176095e3",
    "translatableHash": "sha256:27e3df50502f046e4b03c6d2db4b5fb8bea4b47a7738e4b972872f9492735de9",
    "data": {
      "schemaVersion": 1,
      "name": "Lion's Pelt (Leather)",
      "itemType": "armor",
      "level": 6,
      "rarity": "uncommon",
      "traits": [],
      "description": "Access You're a member of the Lion Blades.\nLaurisa Tromaine ordered these as prototype uniforms. The fur-lined pauldrons bear the insignia of a lion with a blade in its mouth. The type of blade indicates which bard school one graduated from. When you disguise the armor via its Raiment rune, you can choose whether to conceal this symbol or not. You can also use the rune's activation to quickly display or hide the insignia.\nActivate—Contact Ally 1 (arcane, concentrate)\nFrequency once per hour\nEffect You cast Message at 1st rank to a target that you know is also wearing a lion's pelt uniform. If you and the target share an insignia, the spell is heightened to 3rd rank.",
      "bulk": 1,
      "price": {
        "gp": 250
      },
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
    "contentId": "pf2e:item:equipment-srd:lions-pelt-chain",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "kPHVVkNSEi1QeEIO",
      "slug": "lions-pelt-chain",
      "publicationTitle": "Pathfinder Lost Omens Shining Kingdoms",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/armor/chainshirt.webp"
    },
    "sourceHash": "sha256:a3f528e54444c843e04bb5cb9309570e176dfd4313dc27499ffbe3c0f5ad86d5",
    "translatableHash": "sha256:78347c7bd5635b1d79fba28b79f96120f29d274bc9fb59889b59d92c94d7fa89",
    "data": {
      "schemaVersion": 1,
      "name": "Lion's Pelt (Chain)",
      "itemType": "armor",
      "level": 6,
      "rarity": "uncommon",
      "traits": [
        "flexible",
        "noisy"
      ],
      "description": "Access You're a member of the Lion Blades.\nLaurisa Tromaine ordered these as prototype uniforms. The fur-lined pauldrons bear the insignia of a lion with a blade in its mouth. The type of blade indicates which bard school one graduated from. When you disguise the armor via its Raiment rune, you can choose whether to conceal this symbol or not. You can also use the rune's activation to quickly display or hide the insignia.\nActivate—Contact Ally 1 (arcane, concentrate)\nFrequency once per hour\nEffect You cast Message at 1st rank to a target that you know is also wearing a lion's pelt uniform. If you and the target share an insignia, the spell is heightened to 3rd rank.",
      "bulk": 1,
      "price": {
        "gp": 250
      },
      "usage": "",
      "category": "light",
      "group": "chain",
      "armor": {
        "armorClassBonus": 2,
        "dexterityCap": 3,
        "checkPenalty": -1,
        "speedPenaltyFeet": 0
      }
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:the-dancers-song",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "2Ub3nAwaQXyzyAbz",
      "slug": "the-dancers-song",
      "publicationTitle": "Pathfinder Lost Omens Shining Kingdoms",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:3fe6953ac8946a181794ac9551264ea626ae909197409027b56798be169102b9",
    "translatableHash": "sha256:e98780620ec7e138dff7f415b9819103c476883f1aaedea2026780de09b04249",
    "data": {
      "schemaVersion": 1,
      "name": "The Dancers' Song",
      "itemType": "consumable",
      "level": 7,
      "rarity": "rare",
      "traits": [
        "alchemical",
        "consumable",
        "ingested",
        "poison"
      ],
      "description": "A pair of conjoined sahkils known as The Dancers created this poison for the Ninth Army. While stupefied by this poison, a creature can't treat any creature as its ally.\nSaving Throw check (fortitude, dc:23)\nOnset 1 minute\nMaximum Duration 6 days\nStage 1 2d8 poison damage and Stupefied 1 (1 day)\nStage 2 3d8 poison damage and Stupefied 2 (2 days)\nStage 3 4d8 poison damage and Stupefied 4 (3 days)",
      "bulk": 0.1,
      "price": {
        "gp": 50
      },
      "usage": "held-in-one-hand",
      "category": "poison",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:resonating-crystal-boots",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "YqSSNyjG5fkI5HqB",
      "slug": "resonating-crystal-boots",
      "publicationTitle": "Pathfinder Lost Omens Shining Kingdoms",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:9201e576f4f34dc1d28e9106cc9276f14e842f834622f0389b956f165396689b",
    "translatableHash": "sha256:a03d596a0a86c40ad83cc7e17371206be64327a3a23cb8832027457507577e1d",
    "data": {
      "schemaVersion": 1,
      "name": "Resonating Crystal Boots",
      "itemType": "equipment",
      "level": 8,
      "rarity": "uncommon",
      "traits": [
        "invested",
        "magical"
      ],
      "description": "These supple leather boots are studded with tiny crystals.\nActivate—Chiming Steps 1 (auditory, concentrate, sonic)\nFrequency once per day\nEffect Stride up to half your Speed. The crystals ring out with pleasant-sounding chimes that reverberate painfully in the ears of others. Each creature that you pass adjacent to during your Stride takes 4d8 sonic damage (check (fortitude, dc:24, basic) save); a creature takes this damage only once. A creature who critically fails the save is also Deafened for 1 minute.",
      "bulk": 0.1,
      "price": {
        "gp": 475
      },
      "usage": "worn",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:lions-call",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "zdTVlzR2OW17gLW6",
      "slug": "lions-call",
      "publicationTitle": "Pathfinder Lost Omens Shining Kingdoms",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:e9b5819a3d60a14b8cd9c169e61e9ce6753694122094d1e61ef8c0863634c12b",
    "translatableHash": "sha256:62186e46515c5d48c59bfb51b571689b69ec0454e0c360a231760530684eeef7",
    "data": {
      "schemaVersion": 1,
      "name": "Lion's Call",
      "itemType": "weapon",
      "level": 10,
      "rarity": "uncommon",
      "traits": [
        "agile",
        "finesse",
        "versatile-s"
      ],
      "description": "Access You're a member of the Lion Blades.\nGiven only to highly trusted agents by the grand princes back when Lion Blades protected the Primogen Crown, these historic +1 striking authorized shortswords allow a Lion Blade wielder to locate resources.\nActivate—Find the Pride 3 (arcane, concentrate, manipulate)\nFrequency once per day\nEffect You cast Locate at 5th rank to learn the location of one of the following of your choice: the nearest Lion Blade safe house, shadow school, Lion Blade agent, Lion Blade kith, or a person other than yourself who's in possession of a lion's call.\nActivate—Echo the Call r (arcane, concentrate)\nFrequency once per day\nTrigger A creature locates you using another lion's call\nEffect You immediately learn the location and appearance of the triggering creature. You can communicate telepathically with the triggering creature while you remain within 1 mile of each other for the next hour",
      "bulk": 0.1,
      "price": {
        "gp": 900
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
    "contentId": "pf2e:item:equipment-srd:kolss-oath-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "BuQsMeD7IP4mvDCQ",
      "slug": "kolss-oath-greater",
      "publicationTitle": "Pathfinder Lost Omens Shining Kingdoms",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:5595b963c51b99a65216d885cd04f0dd9bd6404df4688447e1635b7afbda100b",
    "translatableHash": "sha256:26398b0dc428960d29522926bb5b9358a3c9790999d3234ffcf7816f9b88e40b",
    "data": {
      "schemaVersion": 1,
      "name": "Kols's Oath (Greater)",
      "itemType": "equipment",
      "level": 11,
      "rarity": "uncommon",
      "traits": [
        "divine",
        "magical"
      ],
      "description": "This filigree grants you, as the clan dagger's owner, a +2 item bonus to Society checks and to Diplomacy checks to Request. Additionally, once per day, the filigree symbol can be activated to compel an enemy to act.\nActivate—Vow Unbreakable 1 (auditory, concentrate, linguistic, mental)\nFrequency once per day\nEffect You command a creature within 30 feet to Stride away from you, drop Prone, or release one item it's holding. The creature can choose to perform that action as the first action on its next turn; if it doesn't, it takes 8d6 mental damage (check (will, dc:28, basic, traits:auditory,concentrate,linguistic,mental) save).",
      "bulk": 0.1,
      "price": {
        "gp": 1400
      },
      "usage": "etched-onto-clan-dagger",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:bolkas-blessing-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "mcBXIHJGVQrbDLxi",
      "slug": "bolkas-blessing-greater",
      "publicationTitle": "Pathfinder Lost Omens Shining Kingdoms",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:5720ac6fd67707c39764a1712067b9f45e9094d43530d60e337401259c9606d0",
    "translatableHash": "sha256:057fe71d144f8b4b76c879e5d44291f514d88376c54b6ea08dfb2e5efa305045",
    "data": {
      "schemaVersion": 1,
      "name": "Bolka's Blessing (Greater)",
      "itemType": "equipment",
      "level": 11,
      "rarity": "uncommon",
      "traits": [
        "divine",
        "magical"
      ],
      "description": "This filigree grants you a +2 item bonus to Diplomacy checks and to Perception checks to Sense Motive. Additionally, once per day, the filigree symbol can be activated for a healing effect.\nActivate—Gift of Life 1 (concentrate, healing, vitality)\nFrequency once per day\nEffect You regain 6d10 healing Hit Points.",
      "bulk": 0.1,
      "price": {
        "gp": 1400
      },
      "usage": "etched-onto-clan-dagger",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:trudds-strength-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "wvo5Qaj5qn7jFHaA",
      "slug": "trudds-strength-greater",
      "publicationTitle": "Pathfinder Lost Omens Shining Kingdoms",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:b0df01b89f81eb74371b26c7719991e01c0511f9907cd3e2d5aee507d4a8b6e3",
    "translatableHash": "sha256:88f1125c9aa87487ebcbcf71ea5a96a8f792bf871c6a9afdd635e4bbbfd5e8b9",
    "data": {
      "schemaVersion": 1,
      "name": "Trudd's Strength (Greater)",
      "itemType": "equipment",
      "level": 11,
      "rarity": "uncommon",
      "traits": [
        "divine",
        "magical"
      ],
      "description": "This filigree depiction of a warhammer in front of a kite-shaped shield grants you a +2 item bonus to Athletics checks and to Intimidation checks to Coerce. Additionally, once per day, the filigree symbol can be activated to protect your allies.\nActivate—Protect the Clan! 1 (concentrate)\nFrequency once per day\nEffect Protective energy releases in a 10-foot type:emanation, granting a +2 status bonus to Armor Class to all allies within the area. The bonus lasts for 1 minute.\nEffect: Trudd's Strength",
      "bulk": 0.1,
      "price": {
        "gp": 1400
      },
      "usage": "etched-onto-clan-dagger",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:crimson-godsblood-serum-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "e2iOKWEs2PsAbgmo",
      "slug": "crimson-godsblood-serum-moderate",
      "publicationTitle": "Pathfinder Lost Omens Shining Kingdoms",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:b075f31bba4ebb9e6df22e5a5d9f97f47221d9e2bd661a05cf658ea09df009f2",
    "translatableHash": "sha256:e5c962ef6f89563d9f4aba853729d4c303d559fff16cf5c0f52be8903c95fcba",
    "data": {
      "schemaVersion": 1,
      "name": "Crimson Godsblood Serum (Moderate)",
      "itemType": "consumable",
      "level": 12,
      "rarity": "rare",
      "traits": [
        "consumable",
        "magical",
        "potion"
      ],
      "description": "Activate 1 (manipulate)\nThough it contains but a tiny drop of Gorum's blood, drinking this thick, swirling potion fills the user with divine wrath and resilience. While under the effect of the potion, you gain a +3 status bonus to physical damage rolls for 1 minute.\nEffect: Crimson Godsblood Serum\nThe first time during that minute you're reduced to 0 Hit Points but not immediately killed, you avoid being knocked out, regain 3d8+10 healing Hit Points, and become Confused for 1 round, and your Wounded condition increases by 1.",
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
    "contentId": "pf2e:item:equipment-srd:godrending-ammunition",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "0PGauxNX76JaaREG",
      "slug": "godrending-ammunition",
      "publicationTitle": "Pathfinder Lost Omens Shining Kingdoms",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:95cec15bc10343f74f2a8f27dcc3d47af0fa96b72cc43d892a080d96854a0e13",
    "translatableHash": "sha256:b8d9548454d98f9c32da8f2d658af19de641839c6f9db34a66b32a0ddf53e695",
    "data": {
      "schemaVersion": 1,
      "name": "Godrending Ammunition",
      "itemType": "ammunition",
      "level": 13,
      "rarity": "rare",
      "traits": [
        "consumable",
        "magical"
      ],
      "description": "Embedded in this piece of ammunition is a shining sliver of a warshard. When an activated godrending ammunition hits a target, the body of the struck creature attempts to tear itself apart, causing nauseating pain. Instead of its normal damage, the ammunition deals 10d8 slashing damage. The target can attempt a check (fortitude, dc:30) saving throw; it takes a –2 circumstance penalty to this save if the Strike was a critical hit.\nCritical Success The foe takes the normal damage from the ammunition, instead of the 10d8 slashing damage.\nSuccess The foe takes half damage.\nFailure The foe takes full damage and is Sickened 1.\nCritical Failure The foe takes double damage and is Sickened 2. A creature reduced to 0 HP from this damage is ripped limb from limb, and it instantly dies; its gear remains.",
      "bulk": 0,
      "price": {
        "gp": 440
      },
      "usage": "",
      "category": "ammo",
      "group": "ammo"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:screaming-pinion",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "PsBTAUV7ExEsKpVx",
      "slug": "screaming-pinion",
      "publicationTitle": "Pathfinder Lost Omens Shining Kingdoms",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/flintlock-musket.webp"
    },
    "sourceHash": "sha256:ba4876e6d569e7a0b37a7659128ee11033d3fac1248a12da8fec65bf1d7dca65",
    "translatableHash": "sha256:a4a05f0f9be4a1a0a69e35e80f3a6ee2c787640430a4435ab47db48142252924",
    "data": {
      "schemaVersion": 1,
      "name": "Screaming Pinion",
      "itemType": "weapon",
      "level": 13,
      "rarity": "rare",
      "traits": [
        "concussive",
        "fatal-d10"
      ],
      "description": "This +2 greater striking flintlock musket is an innovation of the Platinum Wing, and possession of one by a civilian is a high crime in Andoran. The gun's secret is the chip of a warshard used as the hammer in the striking mechanism.\nActivate—Transcendent Shot 1 (manipulate)\nRequirements The screaming pinion is unloaded\nEffect You call on the power of the warshard to load the screaming pinion with a bullet made of divine fury. The next attack from the gun deals spirit damage, rather than its typical type, and on a critical hit, the target is subject to the weapon's critical specialization effect. If the gun isn't fired before the end of your next turn, the bullet disappears, and the gun becomes unloaded.\nActivate—Eagle's Cry 2 (concentrate, manipulate, sonic)\nFrequency once per day\nEffect The musket unleashes a piercing sound wave in a 70-foot type:line. Each creature in the area takes 8d10 sonic damage with a check (fortitude, dc:30, basic, options:area-effect, traits:sonic) save. A creature that critically fails its save is also Deafened. If the screaming pinion has a +3 potency rune, the DC increases to 35 (check (fortitude, dc:35, basic, options:area-effect, traits:sonic)), and the damage increases to 10d10 sonic damage.",
      "bulk": 1,
      "price": {
        "gp": 3000
      },
      "usage": "held-in-two-hands",
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
    "contentId": "pf2e:item:equipment-srd:paws-of-the-grogrisant",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "BifEA6ixOdQ6a0yw",
      "slug": "paws-of-the-grogrisant",
      "publicationTitle": "Pathfinder Lost Omens Shining Kingdoms",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:0d345de3b3386f89e421c0ea29a4e46848a0573112b710283fb0815764d99679",
    "translatableHash": "sha256:ed993637795727ebad7690d13e9909fa5dde34ed48256a7a377294149587c359",
    "data": {
      "schemaVersion": 1,
      "name": "Paws of the Grogrisant",
      "itemType": "equipment",
      "level": 17,
      "rarity": "unique",
      "traits": [
        "apex",
        "invested",
        "primal"
      ],
      "description": "Princess Eutropia commissioned Taldor's Imperial College of Heralds to preserve the paws that fell off the Mantle of the Grogrisant. A few weeks later, the college presented this pair of boots. You gain a +3 item bonus to Athletics checks and saves against forced movement. When you invest in the boots, you either increase your Strength modifier by 1 or increase it to +4, whichever would give you a higher value.\nActivate—Grogrisant Leap 1 (concentrate)\nFrequency once per day\nEffect The Grogrisant's legendary strength and reflexes empower your movement. You Leap, doubling the vertical and horizontal distance of your Leap action. If you land adjacent to a creature, you can Strike that creature once as part of this action.",
      "bulk": 0.1,
      "price": {
        "gp": 15000
      },
      "usage": "wornshoes",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:jaws-of-the-grogrisant",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "vg4p0cHrZf14VXGz",
      "slug": "jaws-of-the-grogrisant",
      "publicationTitle": "Pathfinder Lost Omens Shining Kingdoms",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:0ca3e8a1564665a9b2aad74f5407f4eb19a4fb28e14047e9f1e0e21e99c20f3c",
    "translatableHash": "sha256:722c1e4a080e7afcae71a22291b609614d3b3eb8582460481bf8723c8fd8b283",
    "data": {
      "schemaVersion": 1,
      "name": "Jaws of the Grogrisant",
      "itemType": "equipment",
      "level": 17,
      "rarity": "unique",
      "traits": [
        "apex",
        "invested",
        "primal"
      ],
      "description": "The teeth that fell off the Mantle of the Grogrisant were given to the scholars of Houses Fahlspar, Lotheed, Nicodemius, and Zespire, who—after much heated discussion—created this regal circlet. You gain a +3 item bonus to Diplomacy and Intimidation skill checks and Sense Motive checks against creatures that have the primal trait. When you invest in the headband, you either increase your Wisdom modifier by 1 or increase it to +4, whichever would give you a higher value.\nActivate—Primal Empathy 2 (concentrate, mental)\nFrequency once per hour\nEffect You gain the ability to communicate with nature as if you were a part of it. You cast Telepathy at 6th rank, which can only be used to communicate with creatures that have the primal trait.",
      "bulk": 0.1,
      "price": {
        "gp": 15000
      },
      "usage": "worncirclet",
      "category": "equipment",
      "group": "equipment"
    }
  }
]
