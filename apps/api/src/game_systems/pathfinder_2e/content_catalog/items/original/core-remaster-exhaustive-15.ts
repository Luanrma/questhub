import type { Pathfinder2eOriginalContentRecord } from '../../records'
import type { Pathfinder2eItemData } from '../types'

export const PATHFINDER_2E_EXHAUSTIVE_15_ITEM_ORIGINALS: readonly Pathfinder2eOriginalContentRecord<Pathfinder2eItemData>[] = [
  {
    "contentId": "pf2e:item:equipment-srd:doll-surprise",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "H5N2CacR3pNtanKB",
      "slug": "doll-surprise",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/held-items/doll.webp"
    },
    "sourceHash": "sha256:32506732361836919500f9f379a417ccddc6ebe6855ad4a4fcb42038a88429eb",
    "translatableHash": "sha256:e00ddd42d472c91c932e9cfc1ca11e027bb4581890bc38539ccb49d4e5b66806",
    "data": {
      "schemaVersion": 1,
      "name": "Doll (Surprise)",
      "itemType": "equipment",
      "level": 1,
      "rarity": "common",
      "traits": [],
      "description": "This doll contains a hidden compartment or pouch capable of holding a single object of up to light Bulk—typically a bell, rattle, or dried flowers.",
      "bulk": 0.1,
      "price": {
        "gp": 1
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:diglys-oil-of-sympathy-minor",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "upgNYvc48y8jUUEO",
      "slug": "diglys-oil-of-sympathy-minor",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:0b884b7920cd64954e5f86111df9e8e276840be066720e9cdb17c28b495ee79c",
    "translatableHash": "sha256:5745fcf24cb0febb24b116e7546ae0e05fe3fee114ec925c541593a0f180ce86",
    "data": {
      "schemaVersion": 1,
      "name": "Digly's Oil of Sympathy (Minor)",
      "itemType": "consumable",
      "level": 1,
      "rarity": "rare",
      "traits": [
        "consumable",
        "healing",
        "magical",
        "oil"
      ],
      "description": "Activate 1 (manipulate)\nThis thick, red liquid has a pungent—but not unpleasant—smell. You pour the oil onto a weapon when activating it. If the weapon has damaged a creature within the last 10 minutes, the most recent creature damaged by the weapon regains 1d10 healing Hit Points. The creature is then temporarily immune to Digly's oil of sympathy for 10 minutes.\nThe magic relies on the malice behind the attack, so the weapon must have been used against an enemy of the attacker. In other words, someone can't voluntarily take damage from a friend's weapon, then heal from it—a fact that made it very difficult for Sir Kenelm Digly to test the oil during its development.",
      "bulk": 0.1,
      "price": {
        "gp": 4
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:doll-exquisite-surprise",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "T99WI1hocCXE7RI0",
      "slug": "doll-exquisite-surprise",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/held-items/doll.webp"
    },
    "sourceHash": "sha256:9231c6b7d14af273a059fc84d36a505ae5460ed60fe9c693f83da44c2d4016ad",
    "translatableHash": "sha256:c5f035e5f98e394ec118d52bb384c3147b83c3ab02a77e7fb4e8fc8e50c4d46d",
    "data": {
      "schemaVersion": 1,
      "name": "Doll (Exquisite surprise)",
      "itemType": "equipment",
      "level": 2,
      "rarity": "common",
      "traits": [],
      "description": "This doll contains a hidden compartment or pouch capable of holding a single object of up to light Bulk—typically a bell, rattle, or dried flowers.\nHiding an object inside this beautifully crafted surprise doll grants you a +1 item bonus to Stealth checks made to Conceal an Item, as the compartment is particularly well-hidden and weighted to ensure the doll doesn't feel off-balance with an item inside.",
      "bulk": 0.1,
      "price": {
        "gp": 10
      },
      "usage": "held-in-one-hand",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:sun-goggles",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "kK0ClM2NkZYKVs2Z",
      "slug": "sun-goggles",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:ca0333cf138c3c8bf6a52cf76937acb8f5dd4e8652be1875ed2f86f430c84b96",
    "translatableHash": "sha256:be95e44e24a9f9bc4f8e68ee7a1534f3a7ff0a551ae4c55a4eb8e35e89c1a842",
    "data": {
      "schemaVersion": 1,
      "name": "Sun Goggles",
      "itemType": "equipment",
      "level": 3,
      "rarity": "common",
      "traits": [],
      "description": "These goggles are usually fitted with a polished piece of yellowtoned crystal, allowing the wearer some protection against the brightness of the sun. Near the Crown of the World, a version of these goggles exists where the crystal is replaced by thin slits, mitigating the effects of the sun's reflection on snow.\nWhen wearing these goggles, you gain a +1 item bonus to saving throws against effects that could inflict the Dazzled condition.",
      "bulk": 0,
      "price": {
        "gp": 20
      },
      "usage": "worneyepiece",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:diglys-oil-of-sympathy-lesser",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "Mgrrrb7iWmDTCd2u",
      "slug": "diglys-oil-of-sympathy-lesser",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:43b6d13af7bedaf5739f1f89bf1bd8dc723969ca3ec9091fbed80dc457ec5f52",
    "translatableHash": "sha256:8489dce2489fe4e9e183893ffc59dbfe09d2a207774c162057dfec1eb16b0b9b",
    "data": {
      "schemaVersion": 1,
      "name": "Digly's Oil of Sympathy (Lesser)",
      "itemType": "consumable",
      "level": 3,
      "rarity": "rare",
      "traits": [
        "consumable",
        "healing",
        "magical",
        "oil"
      ],
      "description": "Activate 1 (manipulate)\nThis thick, red liquid has a pungent—but not unpleasant—smell. You pour the oil onto a weapon when activating it. If the weapon has damaged a creature within the last 10 minutes, the most recent creature damaged by the weapon regains (2d10+5)[healing] Hit Points. The creature is then temporarily immune to Digly's oil of sympathy for 10 minutes.\nThe magic relies on the malice behind the attack, so the weapon must have been used against an enemy of the attacker. In other words, someone can't voluntarily take damage from a friend's weapon, then heal from it—a fact that made it very difficult for Sir Kenelm Digly to test the oil during its development.",
      "bulk": 0.1,
      "price": {
        "gp": 12
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:musket-staff-of-void",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "lsTTJ9GlHOu5o3bt",
      "slug": "musket-staff-of-void",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/flintlock-musket.webp"
    },
    "sourceHash": "sha256:6ed9a18cd1332335094b75778d1074ecc6268585e6c9195cf28d4aeab0c172a6",
    "translatableHash": "sha256:2f20dec3a073c39a5c2de4dc14b405d4deb7441c79aadd759da0fd0596a75bbf",
    "data": {
      "schemaVersion": 1,
      "name": "Musket Staff of Void",
      "itemType": "weapon",
      "level": 4,
      "rarity": "rare",
      "traits": [
        "concussive",
        "fatal-d10",
        "magical",
        "staff",
        "void"
      ],
      "description": "A stock carved of enchanted wood forms the base for a musket staff, a magic weapon used by a gunwitch as both a powerful firearm and magical staff. Many other variants exist with different spells. This +1 flintlock musket has a Reinforced Stock permanently attached to it, and the musket's weapon potency rune (and any other runes) applies to Strikes with the stock as well. The musket staff also contains spells and can be prepared following the same rules as a staff.\n• Cantrip Void Warp\n• 1st Grim Tendrils",
      "bulk": 1,
      "price": {
        "gp": 100
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
    "contentId": "pf2e:item:equipment-srd:musket-staff-of-force",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "mfYwthsSMkDS8djw",
      "slug": "musket-staff-of-force",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "image": {
      "path": "/api/game-systems/pathfinder-2e/icons/equipment/weapons/flintlock-musket.webp"
    },
    "sourceHash": "sha256:1a88cdf4c9b47e18b06d70c886f0c93c8a992e749b4f6e097544d9db9fdf2f6a",
    "translatableHash": "sha256:47e493e4ac031dbc6f0bd758abf0cfbb9712d68cda7aecc655d79dd285ca5be7",
    "data": {
      "schemaVersion": 1,
      "name": "Musket Staff of Force",
      "itemType": "weapon",
      "level": 4,
      "rarity": "rare",
      "traits": [
        "concussive",
        "fatal-d10",
        "force",
        "magical",
        "staff"
      ],
      "description": "A stock carved of enchanted wood forms the base for a musket staff, a magic weapon used by a gunwitch as both a powerful firearm and magical staff. Many other variants exist with different spells. This +1 flintlock musket has a Reinforced Stock permanently attached to it, and the musket's weapon potency rune (and any other runes) applies to Strikes with the stock as well. The musket staff also contains spells and can be prepared following the same rules as a staff.\n• Cantrip Shield\n• 1st Force Barrage",
      "bulk": 1,
      "price": {
        "gp": 100
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
    "contentId": "pf2e:item:equipment-srd:diglys-oil-of-sympathy-moderate",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "T2DGpe7qXEuQEKWH",
      "slug": "diglys-oil-of-sympathy-moderate",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:652705a8838b2a715a957ef475f11640aed245d543d9e4138dc0eb78ffaaaf07",
    "translatableHash": "sha256:43426e9af2a34c4a8f8a0bd3de18b4cffb65305c95791c5b17f84c334cf3c3df",
    "data": {
      "schemaVersion": 1,
      "name": "Digly's Oil of Sympathy (Moderate)",
      "itemType": "consumable",
      "level": 6,
      "rarity": "rare",
      "traits": [
        "consumable",
        "healing",
        "magical",
        "oil"
      ],
      "description": "Activate 1 (manipulate)\nThis thick, red liquid has a pungent—but not unpleasant—smell. You pour the oil onto a weapon when activating it. If the weapon has damaged a creature within the last 10 minutes, the most recent creature damaged by the weapon regains (3d10+10)[healing] Hit Points. The creature is then temporarily immune to Digly's oil of sympathy for 10 minutes.\nThe magic relies on the malice behind the attack, so the weapon must have been used against an enemy of the attacker. In other words, someone can't voluntarily take damage from a friend's weapon, then heal from it—a fact that made it very difficult for Sir Kenelm Digly to test the oil during its development.",
      "bulk": 0.1,
      "price": {
        "gp": 50
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:malefic-mirror",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "5oXpYSNiqxVWSafq",
      "slug": "malefic-mirror",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:9538af41139d832fa0e67b8994f8af24d4eba427075b56a1094c553c654dde6c",
    "translatableHash": "sha256:f58f5c20b96f1b7f363e50bd1853858fe65f805f9cf795e4e0391c6dd8e4fe63",
    "data": {
      "schemaVersion": 1,
      "name": "Malefic Mirror",
      "itemType": "equipment",
      "level": 11,
      "rarity": "rare",
      "traits": [
        "invested",
        "occult",
        "scrying",
        "unholy"
      ],
      "description": "This magic mirror is the conduit between the mirror seer and the source of their power. Any creature who looks in this silver mirror can speak with the entity the mirror is linked to, but only a creature who has made a pact with the entity can activate the malefic mirror. If the mirror is shattered, any spells created by the mirror end (it has AC 5, object immunities, Hardness 5, HP 20, and BT 10).\nActivate—Peer Beyond 10 minutes (concentrate, occult)\nEffect The mirror casts a DC 28 Scrying spell for the benefit of the creature activating it. The target must be within the owner's domain (typically within 20 miles of the mirror). The viewer's familiarity with the target doesn't affect the spell's DC.\nActivate—Mirror Mimicry 10 minutes (concentrate, manipulate, occult)\nEffect The mirror transforms its owner's appearance into an exact copy of any humanoid the owner desires, with a pale mimicry of that creature's abilities. This has the effects of a 3rd-rank Illusory Disguise spell with a duration of 4 hours. The activation can also be Dismissed.\nIn addition, the disguised creature can automatically create illusions to mimic the abilities of the subject, with the appearance of spells, abilities, or even impressive physical deeds. These deeds are entirely illusory and can be disbelieved with a successful check (perception, dc:28, traits:secret) check. If an illusion makes it appear as though the creature moved farther or differently than they actually can (such as making them fly or teleport), the actual creature turns Invisible, and their illusory image persists until the end of the creature's next turn. If the creature and their illusory self aren't in the same space at that point, the activation ends, revealing the deception.",
      "bulk": 2,
      "price": {},
      "usage": "other",
      "category": "equipment",
      "group": "equipment"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:diglys-oil-of-sympathy-greater",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "HWInHkg9upnnSJi2",
      "slug": "diglys-oil-of-sympathy-greater",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:ee0cd1c35ea16d143cf0fb0a2867ca49cc4cd331c502e97b25865cc95b1951bc",
    "translatableHash": "sha256:d5a9b3781fb34fbf54defaf569c5db7db8da2204a241a5f3bc66d2747f5280d0",
    "data": {
      "schemaVersion": 1,
      "name": "Digly's Oil of Sympathy (Greater)",
      "itemType": "consumable",
      "level": 12,
      "rarity": "rare",
      "traits": [
        "consumable",
        "healing",
        "magical",
        "oil"
      ],
      "description": "Activate 1 (manipulate)\nThis thick, red liquid has a pungent—but not unpleasant—smell. You pour the oil onto a weapon when activating it. If the weapon has damaged a creature within the last 10 minutes, the most recent creature damaged by the weapon regains (6d10+20)[healing] Hit Points. The creature is then temporarily immune to Digly's oil of sympathy for 10 minutes.\nThe magic relies on the malice behind the attack, so the weapon must have been used against an enemy of the attacker. In other words, someone can't voluntarily take damage from a friend's weapon, then heal from it—a fact that made it very difficult for Sir Kenelm Digly to test the oil during its development.",
      "bulk": 0.1,
      "price": {
        "gp": 400
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  },
  {
    "contentId": "pf2e:item:equipment-srd:diglys-oil-of-sympathy-major",
    "domain": "ITEM",
    "locale": "en-US",
    "source": {
      "sourcePack": "equipment-srd",
      "sourceId": "cEHi51OKIQ4wEPFc",
      "slug": "diglys-oil-of-sympathy-major",
      "publicationTitle": "Pathfinder NPC Core",
      "license": "ORC",
      "remaster": true
    },
    "sourceHash": "sha256:97a716ff6f19097c69b227f17ea119b063769223c18677486fe4c14ad2f43374",
    "translatableHash": "sha256:15b49e81d60c1fe15cfa792ed8c02727742a3104c3a0c7648dee313387ad8a64",
    "data": {
      "schemaVersion": 1,
      "name": "Digly's Oil of Sympathy (Major)",
      "itemType": "consumable",
      "level": 18,
      "rarity": "rare",
      "traits": [
        "consumable",
        "healing",
        "magical",
        "oil"
      ],
      "description": "Activate 1 (manipulate)\nThis thick, red liquid has a pungent—but not unpleasant—smell. You pour the oil onto a weapon when activating it. If the weapon has damaged a creature within the last 10 minutes, the most recent creature damaged by the weapon regains (8d10+30)[healing] Hit Points. The creature is then temporarily immune to Digly's oil of sympathy for 10 minutes.\nThe magic relies on the malice behind the attack, so the weapon must have been used against an enemy of the attacker. In other words, someone can't voluntarily take damage from a friend's weapon, then heal from it—a fact that made it very difficult for Sir Kenelm Digly to test the oil during its development.",
      "bulk": 0.1,
      "price": {
        "gp": 5000
      },
      "usage": "held-in-one-hand",
      "category": "other",
      "group": "consumable"
    }
  }
]
